import Link from "next/link";
import { DishArt } from "@/components/dish-art";
import { format, formatDuration, type Dictionary } from "@/lib/i18n";
import { totalTime, type Recipe } from "@/lib/recipes";

const heatWord = (heat: Recipe["heat"], t: Dictionary) =>
  heat === 1 ? t.heatMild : heat === 2 ? t.heatMedium : t.heatHot;

export function HeatDots({ heat, t, className = "" }: { heat: Recipe["heat"]; t: Dictionary; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-[3px] ${className}`}
      title={format(t.heatTitle, { heat: heatWord(heat, t) })}
    >
      {[1, 2, 3].map((level) => (
        <span
          key={level}
          className={`h-[5px] w-[5px] rounded-full ${level <= heat ? "bg-ember" : "bg-ink/15"}`}
        />
      ))}
      <span className="ml-1.5 text-[11px] text-ink-soft">{heatWord(heat, t)}</span>
    </span>
  );
}

export function RecipeCard({ recipe, t }: { recipe: Recipe; t: Dictionary }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-[6px] border border-line bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      <div className="art-frame aspect-[4/3] border-b border-line/70">
        <DishArt slug={recipe.slug} variant={recipe.variant} palette={recipe.palette} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow text-ember">{recipe.region}</span>
          <HeatDots heat={recipe.heat} t={t} />
        </div>
        <h3 className="display mt-3 text-[24px] leading-[1.1] text-ink">{recipe.name}</h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">{recipe.native}</p>
        <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-soft">{recipe.subtitle}</p>
        <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-3 text-[11px] text-ink-soft">
          <span>{formatDuration(totalTime(recipe), t)}</span>
          <span>{format(t.servesCount, { count: recipe.serves })}</span>
          <span className="inline-flex items-center gap-1 font-medium text-ink transition-colors group-hover:text-ember">
            {t.recipeWord} <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
