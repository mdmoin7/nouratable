import Link from "next/link";
import { MenuCategoryNav } from "@/components/menu-category-nav";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { categories, menu } from "@/lib/menu";

const sectionId = (category: string) => category.toLowerCase().replaceAll(" ", "-");

const categoryCopy: Record<(typeof categories)[number], string> = {
  Desserts: "Comforting classics, made for a sweet finish.",
  Juices: "Refreshing sips made with real ingredients.",
  Chaat: "Street flavours, thoughtfully prepared.",
  "North Indian": "Familiar favourites, freshly prepared.",
};

export default function MenuPage() {
  return (
    <div className="site-shell bg-[#f4e9e1]">
      <div className="bg-[#8b2e1f] text-white">
        <SiteHeader />
        <div className="container flex min-h-[330px] items-end pb-14 pt-32">
          <div>
            <p className="eyebrow text-white/70">Our menu</p>
            <h1 className="font-display mt-3 text-6xl leading-none md:text-7xl">
              Flavours for<br /><em>every craving.</em>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/75">
              From indulgent desserts to refreshing juices, iconic chaat and timeless North Indian classics — there&apos;s something for everyone at AZEVINA.
            </p>
          </div>
        </div>
      </div>

      <MenuCategoryNav />

      <main className="container py-12 md:py-16">
        {categories.map((category) => (
          <section
            id={sectionId(category)}
            key={category}
            className="scroll-mt-20 pb-14 last:pb-0 md:pb-20"
          >
            <div className="mb-6 flex items-end justify-between gap-5 md:mb-7">
              <div>
                <p className="eyebrow text-[#8b2e1f]">{category}</p>
                <div className="mt-1 flex items-center gap-4">
                  <h2 className="font-display text-4xl text-[#5c4033] md:text-5xl">{category}</h2>
                  <span className="hidden h-px w-16 bg-[#8b2e1f]/40 md:block" aria-hidden="true" />
                  <p className="hidden text-xs text-[#5c4033]/60 lg:block">{categoryCopy[category]}</p>
                </div>
              </div>
              <span className="hidden text-xs text-[#5c4033]/50 md:block">{menu[category].length} favourites</span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {menu[category].map((item) => (
                <article key={item.name} className="food-card rounded-[22px]">
                  <div className="aspect-[4/3] overflow-hidden bg-[#e8d8c8]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-[#5c4033]">{item.name}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#5c4033]/65">{item.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#8b2e1f]">₹{item.price}</span>
                      <Link href="/order" className="rounded-full bg-[#8b2e1f] px-3 py-2 text-[11px] font-semibold text-white transition-transform hover:-translate-y-0.5">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
