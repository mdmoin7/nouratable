"use client";

import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n";

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();

  const changeLocale = (next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next;
    router.refresh();
  };

  return (
    <label className="relative flex items-center gap-1.5 rounded-full border border-line px-3 py-[7px] text-ink-soft transition-colors hover:border-ink/40 hover:text-ink">
      <span className="sr-only">{label}</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
      </svg>
      <select
        value={locale}
        onChange={(event) => changeLocale(event.target.value as Locale)}
        aria-label={label}
        className="cursor-pointer appearance-none bg-transparent pr-1 text-[11.5px] font-medium focus:outline-none"
      >
        {locales.map((entry) => (
          <option key={entry.code} value={entry.code}>
            {entry.native}
          </option>
        ))}
      </select>
      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
      </svg>
    </label>
  );
}
