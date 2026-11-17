import type { Metadata } from "next";
import { RecipeBrowser } from "@/components/recipe-browser";
import { getLocaleAndDictionary } from "@/lib/locale";
import { localizeRecipes, regions, type Heat } from "@/lib/recipes";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getLocaleAndDictionary();
  return { title: t.metaIndexTitle, description: t.metaIndexDescription };
}

const isHeat = (value: number): value is Heat => value === 1 || value === 2 || value === 3;

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; heat?: string; q?: string }>;
}) {
  const params = await searchParams;
  const { locale, t } = await getLocaleAndDictionary();

  const requestedRegion = params.region;
  const requestedHeat = Number(params.heat);
  const initialRegion =
    requestedRegion && regions.some((region) => region.name === requestedRegion) ? requestedRegion : "All";
  const initialHeat: Heat | 0 = isHeat(requestedHeat) ? requestedHeat : 0;
  const initialQuery = params.q?.slice(0, 80) ?? "";

  return (
    <div>
      <section className="border-b border-line">
        <div className="wrap grid gap-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-16">
          <div>
            <p className="eyebrow text-ember">{t.indexEyebrow}</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.94] text-ink">
              {t.indexTitleA}
              <br />
              <em className="text-ember">{t.indexTitleB}</em>
            </h1>
          </div>
          <p className="max-w-[42ch] text-[13.5px] leading-7 text-ink-soft md:justify-self-end">{t.indexIntro}</p>
        </div>
      </section>

      <section className="wrap py-10 md:py-14">
        <RecipeBrowser
          recipes={localizeRecipes(locale)}
          t={t}
          initialRegion={initialRegion}
          initialHeat={initialHeat}
          initialQuery={initialQuery}
        />
      </section>

      <section className="border-t border-line bg-card py-12">
        <div className="wrap grid gap-6 sm:grid-cols-3">
          {[
            [t.blurb1Title, t.blurb1Body],
            [t.blurb2Title, t.blurb2Body],
            [t.blurb3Title, t.blurb3Body],
          ].map(([title, body]) => (
            <div key={title}>
              <h2 className="display text-[19px] text-ink">{title}</h2>
              <p className="mt-2 text-[12.5px] leading-6 text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
