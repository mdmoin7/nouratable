import type { Metadata } from "next";
import { Fraunces, Noto_Sans_Devanagari, Noto_Serif_Devanagari, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LanguageProvider } from "@/components/language-provider";
import { getLocaleAndDictionary } from "@/lib/locale";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nouratable.vercel.app").replace(/\/$/, "");

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

// Devanagari companion faces so Hindi sits comfortably beside the Latin type.
const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});
const devanagariDisplay = Noto_Serif_Devanagari({
  variable: "--font-devanagari-display",
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getLocaleAndDictionary();

  return {
    title: {
      default: t.metaTitle,
      template: "%s · Murgh",
    },
    description: t.metaDescription,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { locale, t } = await getLocaleAndDictionary();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${fraunces.variable} ${devanagari.variable} ${devanagariDisplay.variable}`}
    >
      <body>
        <LanguageProvider initialLanguage={locale}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader locale={locale} t={t} />
          <main className="flex-1">{children}</main>
          <SiteFooter t={t} />
        </div>
      </LanguageProvider>
      </body>
    </html>
  );
}
