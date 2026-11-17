import Link from "next/link";
import { DishArt } from "@/components/dish-art";
import { RecipeCard } from "@/components/recipe-card";
import { format } from "@/lib/i18n";
import { getLocaleAndDictionary } from "@/lib/locale";
import { featured, getRecipe, localizeRecipe, recipes, regions } from "@/lib/recipes";

export default async function HomePage() {
  const { locale, t } = await getLocaleAndDictionary();
  const hero = localizeRecipe(getRecipe("murgh-makhani")!, locale);
  const featuredRecipes = featured.map((slug) => localizeRecipe(getRecipe(slug)!, locale));

  return (
    <div>
      <section className="border-b border-line">
        <div className="wrap grid items-center gap-14 py-12 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:py-20">
          <div>
            <p className="eyebrow flex items-center gap-3 text-ember">
              <span className="inline-block h-px w-8 bg-ember/50" aria-hidden="true" />
              {format(t.heroEyebrow, { recipes: recipes.length, regions: regions.length })}
            </p>
            <h1 className="display mt-6 text-[clamp(3.2rem,7.4vw,5.6rem)] leading-[0.9] text-ink">
              {t.heroTitleA}
              <br />
              <em className="text-ember">{t.heroTitleB}</em>
              <br />
              {t.heroTitleC}
            </h1>
            <p className="mt-7 max-w-[48ch] text-[15px] leading-7 text-ink-soft">{t.heroBody}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/recipes" className="btn btn-dark">
                {t.seeAllRecipes} <span aria-hidden="true">→</span>
              </Link>
              <Link href="/about" className="btn btn-ghost">
                {t.aboutThisBook}
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              {[
                [String(recipes.length), t.statRecipes],
                [String(regions.length), t.statRegions],
                ["40", t.statMinutes],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="display text-[28px] leading-none text-ink">{value}</dt>
                  <dd className="mt-1.5 text-[10.5px] uppercase tracking-[0.16em] text-ink-soft">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="art-frame aspect-[4/5] rounded-[8px] border border-line shadow-[0_30px_70px_rgba(27,25,23,0.10)]">
              <DishArt slug={hero.slug} variant={hero.variant} palette={hero.palette} />
            </div>
            <div className="absolute inset-x-5 -bottom-5 flex items-center justify-between gap-3 rounded-[5px] border border-line bg-card px-4 py-3 text-[11px]">
              <span className="eyebrow text-ember">
                {t.recipeOfDay} · {hero.region}
              </span>
              <Link href={`/recipes/${hero.slug}`} className="font-medium text-ink hover:text-ember">
                {hero.name} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-ember">{t.startHere}</p>
              <h2 className="display mt-3 max-w-[22ch] text-[clamp(2rem,4vw,3rem)] leading-[1.02] text-ink">
                {t.threeRecipesTitle}
              </h2>
            </div>
            <Link href="/recipes" className="link-underline text-[12px] font-medium text-ink">
              {format(t.allRecipesCount, { count: recipes.length })} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss text-paper">
        <div className="wrap py-16 md:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-paper/60">{t.byRegion}</p>
              <h2 className="display mt-3 max-w-[24ch] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
                {format(t.regionsTitle, { count: regions.length })}
              </h2>
            </div>
            <p className="max-w-[36ch] text-[13px] leading-6 text-paper/70">{t.regionsIntro}</p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {regions.map((region, index) => (
              <Link
                key={region.name}
                href={`/recipes?region=${encodeURIComponent(region.name)}`}
                className="group flex items-start gap-5 border-t border-paper/15 py-5 transition-colors hover:border-paper/40"
              >
                <span className="mt-1 w-6 text-[10px] font-medium tracking-[0.14em] text-paper/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="display text-[24px] leading-none transition-colors group-hover:text-saffron">
                    {region.name}
                  </span>
                  <span className="mt-2 block max-w-[38ch] text-[12.5px] leading-6 text-paper/65">
                    {t.regionNotes[region.name] ?? region.note}
                  </span>
                </span>
                <span className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-paper/45">
                  {format(region.count === 1 ? t.regionCountOne : t.regionCountMany, { count: region.count })}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="scroll-mt-24 border-b border-line py-16 md:py-24">
        <div className="wrap">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="eyebrow text-ember">{t.methodEyebrow}</p>
              <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.02] text-ink">{t.methodTitle}</h2>
              <p className="mt-5 max-w-[36ch] text-[13px] leading-6 text-ink-soft">{t.methodIntro}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {t.methodItems.map((item) => (
                <div key={item.number} className="border-t border-ink/25 pt-4">
                  <span className="text-[10px] font-medium tracking-[0.18em] text-ember">{item.number}</span>
                  <h3 className="display mt-2 text-[22px] leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink-soft">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pantry" className="scroll-mt-24 bg-card py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-ember">{t.pantryEyebrow}</p>
              <h2 className="display mt-3 max-w-[24ch] text-[clamp(2rem,4vw,3rem)] leading-[1.02] text-ink">
                {format(t.pantryTitle, { count: t.pantryItems.length })}
              </h2>
            </div>
            <p className="max-w-[34ch] text-[13px] leading-6 text-ink-soft">{t.pantryIntro}</p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {t.pantryItems.map((spice, index) => (
              <div key={spice.name} className="border-t border-line py-5">
                <span className="text-[10px] font-medium tracking-[0.18em] text-ink-soft/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-2 text-[20px] leading-snug text-ink">{spice.name}</h3>
                <p className="mt-2 text-[12.5px] leading-6 text-ink-soft">{spice.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 md:py-20">
        <div className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-ember">{t.closingEyebrow}</p>
            <p className="display mt-4 max-w-[28ch] text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] text-ink">
              {t.closingTitle}
            </p>
          </div>
          <Link href="/recipes" className="btn btn-ember shrink-0">
            {t.seeAllRecipes} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
