import { cookies } from "next/headers";
import { defaultLocale, getDictionary, isLocale, LOCALE_COOKIE, type Dictionary, type Locale } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
}

export async function getLocaleAndDictionary(): Promise<{ locale: Locale; t: Dictionary }> {
  const locale = await getLocale();
  return { locale, t: getDictionary(locale) };
}
