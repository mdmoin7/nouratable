"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { languages, translate, type LanguageCode, type TranslationKey } from "@/lib/i18n";

type LanguageContextValue = { language: LanguageCode; setLanguage: (language: LanguageCode) => void; t: (key: TranslationKey) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "murgh:language";
const supported = new Set<string>(languages.map((item) => item.code));

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved && supported.has(saved)) setLanguageState(saved as LanguageCode);
    } catch { /* Language preference storage is optional. */ }
  }, []);

  useEffect(() => {
    const selected = languages.find((item) => item.code === language) ?? languages[0];
    document.documentElement.lang = language === "ur" ? "ur-IN" : language === "en" ? "en-IN" : language;
    document.documentElement.dir = selected.dir;
    document.cookie = `murgh-language=${language}; Path=/; Max-Age=31536000; SameSite=Lax`;
    try { window.localStorage.setItem(storageKey, language); } catch { /* Storage is optional. */ }
  }, [language]);

  const setLanguage = useCallback((next: LanguageCode) => setLanguageState(next), []);
  const value = useMemo(() => ({ language, setLanguage, t: (key: TranslationKey) => translate(language, key) }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <label className="flex items-center gap-2 text-[11px] text-ink-soft">
      <span className="sr-only">{t("language")}</span>
      <span aria-hidden="true">文A</span>
      <select
        aria-label={t("languageHelp")}
        value={language}
        onChange={(event) => setLanguage(event.target.value as LanguageCode)}
        className="max-w-[118px] cursor-pointer rounded-full border border-line bg-paper px-2.5 py-2 text-[11px] font-medium text-ink outline-none transition-colors hover:border-ink/40 focus-visible:ring-2 focus-visible:ring-ember"
      >
        {languages.map((item) => <option key={item.code} value={item.code}>{item.nativeName}</option>)}
      </select>
    </label>
  );
}
