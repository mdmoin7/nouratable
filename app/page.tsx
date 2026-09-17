import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { menu } from "@/lib/menu";

const categoryCards = [
  { title: "Desserts", text: "Sweeten the moment.", image: menu.Desserts[0].image },
  { title: "Juices", text: "Fresh. Real. Refreshing.", image: menu.Juices[0].image },
  { title: "Chaat", text: "Street flavours, always.", image: menu.Chaat[0].image },
  { title: "North Indian", text: "Timeless favourites.", image: menu["North Indian"][0].image },
];

export default function Home() {
  return (
    <div className="site-shell bg-[#f4e9e1]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#8b2e1f] text-white">
        <SiteHeader />
        <div className="absolute inset-0 opacity-75 hero-rotator">
          <img src={menu["North Indian"][0].image} alt="A warm AZEVINA food setting" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#6f2419]/95 via-[#8b2e1f]/70 to-[#8b2e1f]/20" />
        <div className="container relative z-10 flex min-h-[720px] items-end pb-20 pt-32">
          <div className="max-w-[650px] reveal">
            <p className="eyebrow text-white/75">Contemporary Indian food · Made with care</p>
            <h1 className="font-display mt-5 text-[clamp(3.4rem,8vw,7.2rem)] leading-[.88] tracking-[-.045em]">
              Good food<br />brings people<br /><em>together.</em>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-white/80">
              Freshly prepared food, inspired by the warmth of Indian hospitality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/menu" className="btn-light">Explore Menu <span>→</span></Link>
              <Link href="/order" className="rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Order Now</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-8 hidden text-right md:block">
          <p className="font-display text-xl italic">More than food.</p>
          <p className="text-xs uppercase tracking-[.25em] text-white/65">A closer tomorrow.</p>
        </div>
      </section>

      <main>
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#8b2e1f]">Why AZEVINA</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[#5c4033] md:text-6xl">Made with attention. Served with care.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Freshly Prepared", "Made close to the moment you order, with freshness at the centre."],
              ["Hygiene First", "Careful preparation and a clean, consistent food experience."],
              ["Quality Always", "Thoughtful ingredients, preparation and presentation."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[28px] border border-[#5c4033]/10 bg-[#fffaf5] p-7 soft-shadow">
                <div className="mb-8 h-2 w-12 rounded-full bg-[#8b2e1f]" />
                <h3 className="font-display text-2xl text-[#5c4033]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5c4033]/70">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#fffaf5] py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className="eyebrow text-[#8b2e1f]">Explore our menu</p><h2 className="font-display mt-3 text-4xl text-[#5c4033] md:text-5xl">A taste for every occasion.</h2></div>
              <Link href="/menu" className="text-sm font-semibold text-[#8b2e1f]">View full menu →</Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categoryCards.map((card) => (
                <Link key={card.title} href={`/menu#${card.title.toLowerCase().replaceAll(" ", "-")}`} className="food-card rounded-[22px]">
                  <div className="aspect-[4/3] overflow-hidden"><img src={card.image} alt="" className="h-full w-full object-cover" /></div>
                  <div className="flex items-center justify-between p-5"><div><h3 className="font-display text-xl text-[#5c4033]">{card.title}</h3><p className="mt-1 text-xs text-[#5c4033]/60">{card.text}</p></div><span className="grid h-8 w-8 place-items-center rounded-full border border-[#8b2e1f]/30 text-[#8b2e1f]">→</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#8b2e1f] text-white">
          <div className="container grid min-h-[520px] items-center gap-10 py-16 md:grid-cols-2 md:py-20">
            <div><p className="eyebrow text-white/60">From our kitchen to your table</p><h2 className="font-display mt-4 text-5xl leading-tight md:text-6xl">Food prepared with attention, made to bring people closer.</h2><Link href="/about" className="btn-light mt-8">Our Story →</Link></div>
            <div className="overflow-hidden rounded-[32px]"><img src={menu["North Indian"][1].image} alt="Fresh food prepared with care" className="h-[360px] w-full object-cover" /></div>
          </div>
        </section>

        <section className="bg-[#fffaf5] py-20 md:py-24">
          <div className="container text-center"><p className="eyebrow text-[#8b2e1f]">Good food brings people together</p><h2 className="font-display mx-auto mt-4 max-w-3xl text-5xl leading-tight text-[#5c4033] md:text-6xl">Discover AZEVINA.</h2><Link href="/order" className="btn-primary mt-8">Order Now →</Link></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
