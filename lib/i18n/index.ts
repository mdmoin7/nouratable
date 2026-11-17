import { en, type Dictionary } from "./en";
import { hi } from "./hindi";
import { bn, kn, mr, ta, te } from "./partials";

export type { Dictionary };

export const locales = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "murgh_locale";

/**
 * Locales may be complete or partial. Missing keys fall back to English,
 * so a new language can ship with just the navigation and labels translated.
 */
const overrides: Record<Locale, Partial<Dictionary>> = { en, hi, bn, mr, ta, te, kn };

export const getDictionary = (locale: Locale): Dictionary => ({ ...en, ...overrides[locale] });

export const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value) && locales.some((locale) => locale.code === value);

export const localeName = (locale: Locale) => locales.find((entry) => entry.code === locale)?.native ?? "English";

/** Replaces {placeholders} in a dictionary string. */
export const format = (template: string, values: Record<string, string | number> = {}) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));

/** Localised cooking time, e.g. "1 hr 30 min" / "1 घंटा 30 मिनट". */
export const formatDuration = (minutes: number, t: Dictionary) => {
  if (minutes < 60) return `${minutes} ${t.minuteShort}`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} ${t.hourShort} ${rest} ${t.minuteShort}` : `${hours} ${t.hourShort}`;
};
