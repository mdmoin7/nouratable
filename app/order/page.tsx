import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const platforms = [
  { name: "Swiggy", href: "#", note: "Explore the current AZEVINA menu and delivery availability." },
  { name: "Zomato", href: "#", note: "Browse favourites and check live delivery options." },
];

export default function OrderPage() {
  return (
    <div className="site-shell bg-[#f4e9e1]">
      <div className="bg-[#8b2e1f] text-white"><SiteHeader /><div className="container flex min-h-[430px] items-end pb-16 pt-32"><div><p className="eyebrow text-white/75">Order with us</p><h1 className="font-display mt-4 max-w-2xl text-6xl leading-[.92] md:text-7xl">Order your<br /><em>AZEVINA favourites.</em></h1><p className="mt-5 max-w-lg text-sm leading-6 text-white/85">Choose your preferred platform to explore the menu, availability and delivery options.</p></div></div></div>
      <main className="container py-16 md:py-24"><div className="grid gap-6 md:grid-cols-2">{platforms.map((platform) => <a key={platform.name} href={platform.href} className="group rounded-[30px] bg-[#fffaf5] p-8 soft-shadow transition hover:-translate-y-1 md:p-10"><p className="eyebrow text-[#8b2e1f]">Order on</p><h2 className="font-display mt-3 text-5xl text-[#5c4033]">{platform.name}</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[#5c4033]/70">{platform.note}</p><span className="menu-order-button mt-8">Order Now <span aria-hidden="true">→</span></span></a>)}</div><div className="mt-14 rounded-[30px] border border-[#5c4033]/10 bg-[#ebdcc8] p-7 text-center md:p-10"><p className="font-display text-3xl text-[#5c4033]">Good food brings people together.</p><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#5c4033]/65">Menu items, pricing and availability may vary by location and platform.</p><Link href="/menu" className="mt-6 inline-flex text-sm font-semibold text-[#8b2e1f]">Back to menu →</Link></div></main>
      <SiteFooter />
    </div>
  );
}
