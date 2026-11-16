import type { Metadata } from "next";
import { RecipeBrowser } from "@/components/recipe-browser";
import { recipes, regions, type Heat } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "The recipes",
  description: "Browse regional Indian chicken recipes by cuisine, region and spice level. Find curries, biryanis, roasts, grills and home-style chicken dishes.",
  alternates: { canonical: "/recipes" },
  openGraph: { title: "Indian Chicken Recipes | Murgh", description: "Regional Indian chicken recipes for home cooks.", url: "/recipes", type: "website" },
};

const isHeat = (value: number): value is Heat => value === 1 || value === 2 || value === 3;

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; heat?: string; q?: string }>;
}) {
  const params = await searchParams;
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
            <p className="eyebrow text-ember">The recipes</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.94] text-ink">
              Regional ways to
              <br />
              <em className="text-ember">cook chicken.</em>
            </h1>
          </div>
          <p className="max-w-[42ch] text-[13.5px] leading-7 text-ink-soft md:justify-self-end">
            Explore chicken dishes from across India, from coastal coconut curries and fiery Andhra masalas to gentle Kashmiri yakhni. Filter by region and heat, or search by dish name and ingredient. Each recipe includes measured ingredients, a clear method and serving ideas.
          </p>
        </div>
      </section>

      <section className="wrap py-10 md:py-14">
        <RecipeBrowser
          recipes={recipes}
          initialRegion={initialRegion}
          initialHeat={initialHeat}
          initialQuery={initialQuery}
        />
      </section>

      <section className="border-t border-line bg-card py-12">
        <div className="wrap grid gap-6 sm:grid-cols-3">
          {[
            ["Measured properly", "Weights are in grams and liquids in millilitres. Spoons are used only where exact weight does not matter."],
            ["For a normal kitchen", "One heavy pan, one sharp knife and an oven that goes up to 220°C."],
            ["Cook's notes", "Every recipe lists the three things that usually go wrong."],
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
