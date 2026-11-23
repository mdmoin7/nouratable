import type { Metadata } from "next";
import Link from "next/link";
import { masalas } from "@/lib/food-knowledge";

export const metadata: Metadata = {
  title: "Indian masala blends | Murgh",
  description: "Learn the ingredients, roasting methods and best uses of regional Indian masala blends.",
  alternates: { canonical: "/masalas" },
};

export default function MasalasPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="wrap py-14 md:py-20">
          <p className="eyebrow text-ember">Build flavour from scratch</p>
          <h1 className="display mt-4 max-w-[16ch] text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.94] text-ink">The art of <em className="text-ember">masala.</em></h1>
          <p className="mt-6 max-w-[58ch] text-[14px] leading-7 text-ink-soft">Regional spice blends are not interchangeable curry powders. Their ingredients, roasting order and texture shape the identity of a dish.</p>
          <div className="mt-7 flex flex-wrap gap-2">
            <Link href="/ingredients" className="btn btn-dark">Read the ingredient guide →</Link>
            <Link href="/recipes" className="btn btn-ghost">Find a recipe</Link>
          </div>
        </div>
      </section>
      <section className="wrap grid gap-6 py-12 md:grid-cols-2 md:py-16">
        {masalas.map((masala, index) => (
          <article key={masala.slug} id={masala.slug} className="border-t border-line pt-6">
            <div className="flex items-start justify-between gap-4">
              <span className="display text-[22px] text-ember/70">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-right text-[10px] uppercase tracking-[0.13em] text-ink-soft">{masala.region}</span>
            </div>
            <h2 className="display mt-4 text-[30px] text-ink">{masala.name}</h2>
            <p className="mt-2 text-[13px] leading-6 text-ink-soft">{masala.profile}</p>
            <h3 className="eyebrow mt-5 text-ember">What goes in</h3>
            <ul className="mt-3 flex flex-wrap gap-2">{masala.ingredients.map((item) => <li key={item} className="rounded-full bg-card px-3 py-1.5 text-[11px] text-ink-soft">{item}</li>)}</ul>
            <h3 className="eyebrow mt-5 text-ember">How to make it</h3>
            <p className="mt-2 text-[12.5px] leading-7 text-ink-soft">{masala.method}</p>
            <h3 className="eyebrow mt-5 text-ember">Best used for</h3>
            <p className="mt-2 text-[12.5px] leading-6 text-ink-soft">{masala.bestFor.join(" · ")}</p>
            <p className="mt-4 border-l-2 border-ember/40 pl-3 text-[11.5px] leading-6 text-ink-soft">{masala.storage}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
