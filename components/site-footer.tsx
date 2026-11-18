"use client";

import Link from "next/link";
import { format, type Dictionary } from "@/lib/i18n";
import { recipes, regions } from "@/lib/recipes";

export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8 md:py-16">
        <div>
          <Link href="/" className="display text-[30px] uppercase tracking-[0.04em] text-ink">
            Murgh
          </Link>
          <p className="mt-3 max-w-[28ch] text-[13px] leading-6 text-ink-soft">{t.footerDescription}</p>
          <p className="eyebrow mt-8 text-ember">
            {format(t.countTagline, { recipes: recipes.length, regions: regions.length })}
          </p>
        </div>

        <div>
          <p className="eyebrow text-ink-soft/70">{t.startHere}</p>
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
                {t.allRecipes}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ink-soft/70">{t.theBook}</p>
          <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
            <li>
              <Link href="/#method" className="link-underline hover:text-ember">
                {t.navMethod}
              </Link>
            </li>
            <li>
              <Link href="/#pantry" className="link-underline hover:text-ember">
                {t.navPantry}
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-underline hover:text-ember">
                {t.aboutThisBook}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="wrap flex flex-col gap-2 py-6 text-[11px] text-ink-soft/80 sm:flex-row sm:items-center sm:justify-between">
          <p>{format(t.copyright, { year: new Date().getFullYear() })}</p>
          <p>{t.weightsNote}</p>
        </div>
      </div>
    </footer>
  );
}
