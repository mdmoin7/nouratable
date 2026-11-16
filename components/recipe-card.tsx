import Link from "next/link";
import { RecipePhoto } from "@/components/recipe-photo";
import { formatTime, heatLabel, totalTime, type Recipe } from "@/lib/recipes";

export function HeatDots({ heat, className = "" }: { heat: Recipe["heat"]; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[3px] ${className}`} title={`${heatLabel[heat]} heat`}>
      {[1, 2, 3].map((level) => (
        <span
          key={level}
          className={`h-[5px] w-[5px] rounded-full ${level <= heat ? "bg-ember" : "bg-ink/15"}`}
        />
      ))}
      <span className="ml-1.5 text-[11px] text-ink-soft">{heatLabel[heat]}</span>
    </span>
  );
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-[6px] border border-line bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      <div className="art-frame aspect-[4/3] border-b border-line/70">
        <RecipePhoto slug={recipe.slug} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow text-ember">{recipe.region}</span>
          <HeatDots heat={recipe.heat} />
        </div>
        <h3 className="display mt-3 text-[24px] leading-[1.1] text-ink">{recipe.name}</h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">{recipe.native}</p>
        <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-soft">{recipe.subtitle}</p>
        <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-3 text-[11px] text-ink-soft">
          <span>{formatTime(totalTime(recipe))}</span>
          <span>Serves {recipe.serves}</span>
          <span className="inline-flex items-center gap-1 font-medium text-ink transition-colors group-hover:text-ember">
            Recipe <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
