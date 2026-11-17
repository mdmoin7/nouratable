"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

const cachePrefix = "murgh:auto-translation:v1:";
type Pending = { language: string; text: string; resolve: (value: string | null) => void };
let pending: Pending[] = [];
let flushTimer: ReturnType<typeof setTimeout> | undefined;

function cacheKey(language: string, text: string) {
  return cachePrefix + language + ":" + text;
}

function enqueueTranslation(language: string, text: string): Promise<string | null> {
  return new Promise((resolve) => {
    pending.push({ language, text, resolve });
    if (!flushTimer) flushTimer = setTimeout(() => void flushTranslations(), 30);
  });
}

async function flushTranslations() {
  flushTimer = undefined;
  const batch = pending.splice(0, 100);
  if (pending.length) flushTimer = setTimeout(() => void flushTranslations(), 30);
  const byLanguage = new Map<string, Pending[]>();
  for (const item of batch) {
    const group = byLanguage.get(item.language) ?? [];
    group.push(item);
    byLanguage.set(item.language, group);
  }
  await Promise.all([...byLanguage.entries()].map(async ([language, items]) => {
    // Keep each request under Google's 30k-character request limit.
    const requestGroups: Pending[][] = [];
    let current: Pending[] = [];
    let characters = 0;
    for (const item of items) {
      if (current.length >= 100 || characters + item.text.length > 28000) {
        requestGroups.push(current);
        current = [];
        characters = 0;
      }
      current.push(item);
      characters += item.text.length;
    }
    if (current.length) requestGroups.push(current);

    await Promise.all(requestGroups.map(async (group) => {
      try {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ texts: group.map((item) => item.text), targetLanguage: language }),
        });
        if (!response.ok) throw new Error("Translation request failed");
        const result = await response.json() as { translations: string[] };
        group.forEach((item, index) => {
          const translated = result.translations?.[index];
          item.resolve(typeof translated === "string" && translated ? translated : null);
        });
      } catch {
        group.forEach((item) => item.resolve(null));
      }
    }));
  }));
}

export function TranslatedText({ text, as = "span", className }: {
  text: string;
  as?: "span" | "p" | "div";
  className?: string;
}) {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    let active = true;
    setTranslated(text);
    if (language === "en" || !text.trim()) return () => { active = false; };

    const key = cacheKey(language, text);
    try {
      const cached = window.localStorage.getItem(key);
      if (cached) {
        setTranslated(cached);
        return () => { active = false; };
      }
    } catch { /* Browser storage is optional. */ }

    void enqueueTranslation(language, text).then((value) => {
      if (!active || !value) return;
      setTranslated(value);
      try { window.localStorage.setItem(key, value); } catch { /* Cache is optional. */ }
    });

    return () => { active = false; };
  }, [language, text]);

  const locale = language === "en" ? "en-IN" : language === "ur" ? "ur-IN" : language;
  const direction = language === "ur" ? "rtl" : "auto";
  if (as === "p") return <p className={className} lang={locale} dir={direction}>{translated}</p>;
  if (as === "div") return <div className={className} lang={locale} dir={direction}>{translated}</div>;
  return <span className={className} lang={locale} dir={direction}>{translated}</span>;
}
