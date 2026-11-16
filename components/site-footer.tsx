import Link from "next/link";
import { recipes, regions, regionSlug } from "@/lib/recipes";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8 md:py-16">
        <div>
          <Link href="/" className="display text-[30px] uppercase tracking-[0.04em] text-ink">
            Murgh
          </Link>
          <p className="mt-3 max-w-[28ch] text-[13px] leading-6 text-ink-soft">
            Regional Indian chicken recipes from across the country, written for home kitchens.
          </p>
          <p className="eyebrow mt-8 text-ember">
            {recipes.length} recipes · {regions.length} regions
          </p>
        </div>

        <div>
          <p className="eyebrow text-ink-soft/70">Start here</p>
          <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
            {recipes.slice(0, 5).map((recipe) => (
              <li key={recipe.slug}>
                <Link href={`/recipes/${recipe.slug}`} className="link-underline hover:text-ember">
                  {recipe.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/recipes" className="link-underline font-medium text-ink hover:text-ember">
                All recipes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ink-soft/70">The book</p>
          <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
            <li>
              <Link href="/#method" className="link-underline hover:text-ember">
                The method
              </Link>
            </li>
            <li>
              <Link href="/#pantry" className="link-underline hover:text-ember">
                The pantry
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-underline hover:text-ember">
                About this book
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="wrap flex flex-col gap-2 py-6 text-[11px] text-ink-soft/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Murgh. Cook it and change it to your taste.</p>
          <p>Weights are in grams and liquids in millilitres.</p>
        </div>
      </div>
    </footer>
  );
}
