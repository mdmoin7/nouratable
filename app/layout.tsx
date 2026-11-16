import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nouratable.com").replace(/\/$/, "");

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Murgh — a modern Indian chicken cookbook",
    template: "%s · Murgh",
  },
  description:
    "Discover regional Indian chicken recipes from across India. Explore curries, biryanis, roasts and grills with measured ingredients and step-by-step cooking instructions.",
  applicationName: "Murgh",
  authors: [{ name: "Murgh" }],
  creator: "Murgh",
  publisher: "Murgh",
  verification: { google: "nhkZsCiFNZhvZbCv_IZf7zqxKhv2UPhC91cRCxaFGmk" },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  twitter: { card: "summary_large_image", title: "Murgh — Indian Chicken Cookbook", description: "Regional Indian chicken recipes for home cooks." },
  openGraph: {
    siteName: "Murgh",
    locale: "en_IN",
    title: "Murgh — a modern Indian chicken cookbook",
    description: "Regional Indian chicken recipes for home kitchens.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Murgh",
                url: siteUrl,
                description: "A modern Indian chicken cookbook featuring regional recipes for home cooks.",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Murgh",
                url: siteUrl,
                description: "Regional Indian chicken recipes, cooking methods and kitchen guides.",
                inLanguage: "en-IN",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: siteUrl + "/recipes?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ]).replace(/</g, "\\u003c"),
          }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
