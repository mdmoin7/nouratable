import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { menu } from "@/lib/menu";

export default function AboutPage() {
  return (
    <div className="site-shell bg-[#f4e9e1]">
      <div className="bg-[#fffaf5] text-[#5c4033]"><SiteHeader /><div className="container grid min-h-[650px] items-end gap-10 pb-16 pt-32 md:grid-cols-2 md:pb-20"><div><p className="eyebrow text-[#8b2e1f]">Our story</p><h1 className="font-display mt-4 text-6xl leading-[.95] md:text-7xl">From our kitchen<br /><em>to your table.</em></h1><p className="mt-6 max-w-md text-sm leading-7 text-[#5c4033]/70">Food is our way of bringing people together. We craft every dish with care, using quality ingredients, authentic flavours and a deep love for the food we serve.</p><Link href="/menu" className="btn-primary mt-8">Explore the menu →</Link></div><div className="overflow-hidden rounded-[32px]"><img src={menu["North Indian"][0].image} alt="Food prepared with care" className="h-[470px] w-full object-cover" /></div></div></div>
      <main>
        <section className="container grid gap-10 py-20 md:grid-cols-2 md:py-28"><div><p className="eyebrow text-[#8b2e1f]">The AZEVINA way</p><h2 className="font-display mt-4 text-5xl leading-tight text-[#5c4033]">Food has a special way of bringing people closer.</h2></div><p className="max-w-xl self-end text-sm leading-7 text-[#5c4033]/70">It turns ordinary moments into meaningful ones. That&apos;s what we want at AZEVINA: food that feels considered, familiar and worth sharing. The brand is contemporary in expression, but warm at heart.</p></section>
        <section className="bg-[#8b2e1f] text-white"><div className="container grid gap-5 py-16 md:grid-cols-3 md:py-20">{[["Authentic ingredients","Sourced with care"],["Traditional flavours","Recipes that feel like home"],["Bringing people together","Good food. Brighter days."]].map(([title,text])=><article key={title} className="rounded-[24px] border border-white/15 p-7"><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-sm text-white/65">{text}</p></article>)}</div></section>
        <section className="container py-20 text-center md:py-28"><p className="eyebrow text-[#8b2e1f]">Our promise</p><h2 className="font-display mx-auto mt-4 max-w-3xl text-5xl leading-tight text-[#5c4033]">Freshly prepared. Hygiene first. Quality always.</h2><Link href="/order" className="btn-primary mt-8">Find your favourites →</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}
