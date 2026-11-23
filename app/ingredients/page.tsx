import type { Metadata } from "next";
import Link from "next/link";
import { ingredients } from "@/lib/food-knowledge";

export const metadata: Metadata = {
  title: "Indian Cooking Ingredients: A Regional Guide | Nouratable",
  description: "A practical guide to Indian regional cooking ingredients, their flavour, uses, handling and substitutions.",
  alternates: { canonical: "/ingredients" },\n  openGraph: { title: "Indian Cooking Ingredients | Nouratable", description: "A practical guide to Indian regional cooking ingredients, flavour, uses, handling and substitutions.", url: "/ingredients", siteName: "Nouratable", type: "article" },\n  twitter: { card: "summary", title: "Indian Cooking Ingredients | Nouratable" },
};

export default function IngredientsPage() {
  const groups = Array.from(new Set(ingredients.map((item) => item.category)));
  return (
    <main>
      <section className="border-b border-line">
        <div className="wrap py-14 md:py-20">
          <p className="eyebrow text-ember">The pantry, explained</p>
          <h1 className="display mt-4 max-w-[16ch] text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.94] text-ink">Know your <em className="text-ember">ingredients.</em></h1>
          <p className="mt-6 max-w-[58ch] text-[14px] leading-7 text-ink-soft">A practical guide to the spices, aromatics, souring agents and regional ingredients used across Indian chicken cooking. Learn what each ingredient brings to a dish and how to handle it.</p>
          <div className="mt-7 flex flex-wrap gap-2">
            <Link href="/masalas" className="btn btn-dark">Explore masala blends →</Link>
            <Link href="/recipes" className="btn btn-ghost">Browse recipes</Link>
          </div>
        </div>
      </section>
      <section className="wrap py-12 md:py-16">
        {groups.map((group) => (
          <section key={group} className="mb-14">
            <h2 className="display border-b border-line pb-4 text-[27px] text-ink">{group}</h2>
            <div className="grid gap-0 md:grid-cols-2 md:gap-x-10">
              {ingredients.filter((item) => item.category === group).map((item) => (
                <article key={item.slug} id={item.slug} className="border-b border-line/70 py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="display text-[22px] text-ink">{item.name}</h3>
                    <span className="text-[10px] uppercase tracking-[0.13em] text-ember">{item.alsoKnownAs}</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-ink-soft">{item.flavour}</p>
                  <dl className="mt-4 grid gap-3 text-[12px] leading-6 sm:grid-cols-2">
                    <div><dt className="font-semibold text-ink">How it is used</dt><dd className="text-ink-soft">{item.use}</dd></div>
                    <div><dt className="font-semibold text-ink">Handling tip</dt><dd className="text-ink-soft">{item.handling}</dd></div>
                    <div className="sm:col-span-2"><dt className="font-semibold text-ink">Possible substitute</dt><dd className="text-ink-soft">{item.substitutes}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
