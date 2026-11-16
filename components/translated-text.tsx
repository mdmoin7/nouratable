"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

const cachePrefix = "murgh:auto-translation:v1:";

function cacheKey(language: string, text: string) {
  return cachePrefix + language + ":" + text;
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

    fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts: [text], targetLanguage: language }),
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Translation request failed");
        return response.json() as Promise<{ translations: string[] }>;
      })
      .then((result) => {
        const value = result.translations?.[0];
        if (!active || typeof value !== "string" || !value) return;
        setTranslated(value);
        try { window.localStorage.setItem(key, value); } catch { /* Cache is optional. */ }
      })
      .catch(() => { /* Keep the original English text if translation is unavailable. */ });

    return () => { active = false; };
  }, [language, text]);

  if (as === "p") return <p className={className}>{translated}</p>;
  if (as === "div") return <div className={className}>{translated}</div>;
  return <span className={className}>{translated}</span>;
}
