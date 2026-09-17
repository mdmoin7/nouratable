import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { categories, menu } from "@/lib/menu";

export default function MenuPage() {
  return (
    <div className="site-shell bg-[#f4e9e1]">
      <div className="bg-[#8b2e1f] text-white"><SiteHeader /><div className="container flex min-h-[330px] items-end pb-14 pt-32"><div><p className="eyebrow text-white/70">Our menu</p><h1 className="font-display mt-3 text-6xl leading-none md:text-7xl">Flavours for<br /><em>every craving.</em></h1><p className="mt-5 max-w-xl text-sm leading-6 text-white/75">From indulgent desserts to refreshing juices, iconic chaat and timeless North Indian classics — there&apos;s something for everyone at AZEVINA.</p></div></div></div>
      <div className="sticky top-0 z-10 border-b border-[#5c4033]/10 bg-[#fffaf5]/95 backdrop-blur"><div className="container flex gap-2 overflow-x-auto py-3">{categories.map((category, i) => <a key={category} href={`#${category.toLowerCase().replaceAll(" ", "-")}`} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${i === 0 ? "bg-[#8b2e1f] text-white" : "text-[#5c4033]/70 hover:bg-[#ebdcc8]"}`}>{category}</a>)}</div></div>
      <main className="container py-16 md:py-24">
        {categories.map((category) => (
          <section id={category.toLowerCase().replaceAll(" ", "-")} key={category} className="scroll-mt-20 pb-20 last:pb-0 md:pb-28">
            <div className="mb-8 flex items-end justify-between gap-5"><div><p className="eyebrow text-[#8b2e1f]">{category}</p><h2 className="font-display mt-2 text-4xl text-[#5c4033] md:text-5xl">{category}</h2></div><span className="hidden text-xs text-[#5c4033]/50 md:block">{menu[category].length} favourites</span></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {menu[category].map((item) => <article key={item.name} className="food-card rounded-[22px]"><div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.name} className="h-full w-full object-cover" /></div><div className="p-5"><h3 className="font-display text-xl text-[#5c4033]">{item.name}</h3><p className="mt-2 text-xs leading-5 text-[#5c4033]/65">{item.description}</p><div className="mt-5 flex items-center justify-between"><span className="text-sm font-semibold text-[#8b2e1f]">₹{item.price}</span><Link href="/order" className="rounded-full bg-[#8b2e1f] px-3 py-2 text-[11px] font-semibold text-white">Order Now</Link></div></div></article>)}
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
