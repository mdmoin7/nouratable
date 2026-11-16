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
    "Regional Indian chicken recipes, from Delhi's butter chicken to Chettinad pepper chicken. Marinades, masalas, methods and cook's notes for home kitchens.",
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
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
