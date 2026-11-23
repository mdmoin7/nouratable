import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Noto_Sans_Devanagari, Noto_Serif_Devanagari, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LanguageProvider } from "@/components/language-provider";
import { getLocaleAndDictionary } from "@/lib/locale";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nouratable.vercel.app").replace(/\/$/, "");

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const siteStructuredData = { "@context": "https://schema.org", "@graph": [ { "@type": "Organization", "@id": siteUrl + "/#organization", name: "Nouratable", url: siteUrl }, { "@type": "WebSite", "@id": siteUrl + "/#website", name: "Nouratable", url: siteUrl, publisher: { "@id": siteUrl + "/#organization" }, inLanguage: "en-IN" } ] };

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

export function generateMetadata(): Metadata {

  return {
    metadataBase: new URL(siteUrl),
    title: { default: "Nouratable — Regional Indian Recipes & Cooking Guides", template: "%s | Nouratable" },
    description: "Explore regional Indian chicken recipes, practical cooking methods, ingredient guides and traditional masala blends from across India.",
    applicationName: "Nouratable",
    alternates: { canonical: "/" },
    openGraph: { title: "Nouratable — Regional Indian Recipes & Cooking Guides", description: "Regional Indian recipes, practical cooking methods and a guide to the ingredients and masalas behind every dish.", url: siteUrl, siteName: "Nouratable", locale: "en_IN", type: "website" },
    twitter: { card: "summary_large_image", title: "Nouratable — Regional Indian Recipes & Cooking Guides", description: "Explore regional Indian recipes and practical cooking guides." },
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c") }} />
        {gaId ? <><Script src={"https://www.googletagmanager.com/gtag/js?id=" + gaId} strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{ "window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '" + gaId + "', { anonymize_ip: true });" }</Script></> : null}
        <LanguageProvider initialLanguage={locale}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader t={t} />
          <main className="flex-1">{children}</main>
          <SiteFooter t={t} />
        </div>
      </LanguageProvider>
      </body>
    </html>
  );
}
