import type { Metadata } from "next";
import Link from "next/link";
import { DishArt } from "@/components/dish-art";
import { format } from "@/lib/i18n";
import { getLocaleAndDictionary } from "@/lib/locale";
import { getRecipe, recipes, regions } from "@/lib/recipes";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getLocaleAndDictionary();
  return { title: t.metaAboutTitle, description: t.metaAboutDescription };
}

const korma = getRecipe("awadhi-chicken-korma")!;

export default async function AboutPage() {
  const { t } = await getLocaleAndDictionary();

  const sections = [
    { number: "01", title: t.aboutS1Title, body: t.aboutS1Body },
    { number: "02", title: t.aboutS2Title, body: t.aboutS2Body },
    { number: "03", title: t.aboutS3Title, body: t.aboutS3Body },
    { number: "04", title: t.aboutS4Title, body: t.aboutS4Body },
  ];

  return (
    <div>
      <section className="border-b border-line">
        <div className="wrap grid gap-12 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <p className="eyebrow text-ember">{t.aboutEyebrow}</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.94] text-ink">
              {t.aboutTitleA}
              <br />
              <em className="text-ember">{t.aboutTitleB}</em>
            </h1>
            <p className="mt-7 max-w-[52ch] text-[15px] leading-7 text-ink-soft">{t.aboutIntro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/recipes" className="btn btn-dark">
                {t.seeTheRecipes} <span aria-hidden="true">→</span>
              </Link>
              <Link href="/#method" className="btn btn-ghost">
                {t.fourHabits}
              </Link>
            </div>
          </div>

          <div className="art-frame aspect-square rounded-[8px] border border-line shadow-[0_24px_60px_rgba(27,25,23,0.10)]">
            <DishArt slug={korma.slug} variant={korma.variant} palette={korma.palette} />
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="eyebrow text-ember">{t.aboutBasics}</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.05] text-ink">{t.aboutAssumes}</h2>
            <p className="mt-4 max-w-[32ch] text-[13px] leading-6 text-ink-soft">
              {format(t.aboutCountLine, { recipes: recipes.length, regions: regions.length })}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {sections.map((section) => (
              <div key={section.number} className="border-t border-ink/25 pt-4">
                <span className="text-[10px] font-medium tracking-[0.18em] text-ember">{section.number}</span>
                <h3 className="display mt-2 text-[21px] leading-snug text-ink">{section.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-ink-soft">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss text-paper">
        <div className="wrap grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-20">
          <div>
            <p className="eyebrow text-paper/60">{t.drawingsEyebrow}</p>
            <p className="display mt-4 max-w-[32ch] text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.08]">{t.drawingsTitle}</p>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <p className="max-w-[36ch] text-[13px] leading-6 text-paper/70">{t.drawingsBody}</p>
            <Link href="/recipes" className="btn btn-onDarkGhost mt-6">
              {format(t.drawingsCta, { count: recipes.length })} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display max-w-[30ch] text-[clamp(1.6rem,3vw,2.2rem)] leading-tight text-ink">{t.aboutClosing}</p>
          <Link href="/recipes/murgh-makhani" className="btn btn-ember">
            {t.aboutClosingCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
