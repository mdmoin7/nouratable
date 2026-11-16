import { NextRequest, NextResponse } from "next/server";
import { languages, type LanguageCode } from "@/lib/i18n";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

const supported = new Set<string>(languages.map(({ code }) => code));
const MAX_ITEMS = 100;
const MAX_CHARACTERS = 30000;

export async function POST(request: NextRequest) {
  const serviceUrl = process.env.TRANSLATION_SERVICE_URL;
  const serviceToken = process.env.TRANSLATION_SERVICE_TOKEN;
  if (!serviceUrl || !serviceToken) {
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
      !texts.every((value): value is string => typeof value === "string" && value.length <= 5000)) {
    return NextResponse.json({ error: "Provide between 1 and 100 text strings (each at most 5,000 characters)." }, { status: 400 });
  }
  if (texts.reduce((total, value) => total + value.length, 0) > MAX_CHARACTERS) {
    return NextResponse.json({ error: "Translation batch exceeds the 30,000-character limit." }, { status: 413 });
  }

  try {
    const baseUrl = serviceUrl.replace(/\/+$/, "");
    const response = await fetch(`${baseUrl}/translate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${serviceToken}`,
      },
      body: JSON.stringify({ texts, target_language: targetLanguage }),
      cache: "no-store",
      signal: AbortSignal.timeout(90000),
    });
    if (!response.ok) {
      console.error("IndicTrans2 service failed", response.status);
      return NextResponse.json({ error: "Translation provider request failed." }, { status: response.status === 503 ? 503 : 502 });
    }
    const payload = await response.json() as { translations?: unknown };
    if (!Array.isArray(payload.translations) || payload.translations.length !== texts.length ||
        !payload.translations.every((value) => typeof value === "string")) {
      return NextResponse.json({ error: "Translation provider returned an invalid response." }, { status: 502 });
    }
    return NextResponse.json({
      translations: payload.translations,
      targetLanguage: targetLanguage as LanguageCode,
    }, { headers: { "Cache-Control": "private, max-age=3600" } });
  } catch (error) {
    console.error("IndicTrans2 service unavailable", error);
    return NextResponse.json({ error: "Translation provider is unavailable." }, { status: 502 });
  }
}
