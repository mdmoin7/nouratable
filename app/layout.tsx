import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AZEVINA — Good food brings people together",
  description:
    "AZEVINA is a contemporary food brand inspired by the warmth of Indian hospitality. Freshly prepared, hygiene first, quality always.",
  openGraph: {
    title: "AZEVINA — Good food brings people together",
    description: "Freshly prepared food, made with care.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
