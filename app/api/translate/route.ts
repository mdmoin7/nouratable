import { NextRequest, NextResponse } from "next/server";
import { languages, type LanguageCode } from "@/lib/i18n";

export const runtime = "nodejs";

const supported = new Set<string>(languages.map(({ code }) => code));
const MAX_ITEMS = 100;
const MAX_CHARACTERS = 30000;

export async function POST(request: NextRequest) {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Translation service is not configured." }, { status: 503 });
  }

  let body: { texts?: unknown; targetLanguage?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const targetLanguage = body.targetLanguage;
  const texts = body.texts;
  if (typeof targetLanguage !== "string" || !supported.has(targetLanguage) || targetLanguage === "en") {
    return NextResponse.json({ error: "Unsupported target language." }, { status: 400 });
  }
  if (!Array.isArray(texts) || texts.length === 0 || texts.length > MAX_ITEMS ||
      !texts.every((text): text is string => typeof text === "string" && text.length <= MAX_CHARACTERS)) {
    return NextResponse.json({ error: "Provide between 1 and 100 text strings." }, { status: 400 });
  }
  if (texts.reduce((total, text) => total + text.length, 0) > MAX_CHARACTERS) {
    return NextResponse.json({ error: "Translation batch exceeds the character limit." }, { status: 413 });
  }

  try {
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: texts, source: "en", target: targetLanguage, format: "text" }),
      cache: "no-store",
    });
    const payload = await response.json();
    if (!response.ok) {
      console.error("Google Translate request failed", response.status, payload?.error?.message);
      return NextResponse.json({ error: "Translation provider request failed." }, { status: 502 });
    }
    const translations = payload?.data?.translations;
    if (!Array.isArray(translations) || translations.length !== texts.length) {
      return NextResponse.json({ error: "Translation provider returned an invalid response." }, { status: 502 });
    }
    return NextResponse.json({
      translations: translations.map((item: { translatedText?: string }) => item.translatedText ?? ""),
      targetLanguage: targetLanguage as LanguageCode,
    }, { headers: { "Cache-Control": "private, max-age=3600" } });
  } catch (error) {
    console.error("Google Translate unavailable", error);
    return NextResponse.json({ error: "Translation provider is unavailable." }, { status: 502 });
  }
}
