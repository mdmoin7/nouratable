"use client";

import { useLanguage } from "@/components/language-provider";
import type { TranslationKey } from "@/lib/i18n";

export function LocalizedText({ k, as = "span" }: { k: TranslationKey; as?: "span" | "p" | "h2"; className?: string }) {
  const { t } = useLanguage();
  if (as === "p") return <p className={className}>{t(k)}</p>;
  if (as === "h2") return <h2 className={className}>{t(k)}</h2>;
  return <span className={className}>{t(k)}</span>;
}
