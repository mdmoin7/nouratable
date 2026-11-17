import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RecipePhoto } from "@/components/recipe-photo";
import { TranslatedText } from "@/components/translated-text";
import { RecipeTools } from "@/components/recipe-tools";
import { RecipeReviews } from "@/components/recipe-reviews";
import { IngredientList } from "@/components/ingredient-list";
import { MethodSteps } from "@/components/method-steps";
import { HeatDots, RecipeCard } from "@/components/recipe-card";
import { formatTime, getRecipe, heatLabel, recipes, regionSlug, totalTime } from "@/lib/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return { title: "Recipe not found" };

  const canonical = `/recipes/${recipe.slug}`;
  const description = `${recipe.subtitle} Learn how to make ${recipe.name} (${recipe.native}) at home with measured ingredients, step-by-step instructions, cook’s notes and serving ideas.`;
  return {
    title: `${recipe.name} (${recipe.native})`,
    description,
    alternates: { canonical },
    openGraph: { type: "article", url: canonical, title: `${recipe.name} | Murgh`, description, siteName: "Murgh" },
    twitter: { card: "summary", title: `${recipe.name} | Murgh`, description },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const others = recipes.filter((item) => item.slug !== recipe.slug).slice(0, 3);
  const meta = [
    ["Prep", formatTime(recipe.prep)],
    ["Cook", formatTime(recipe.cook)],
    ["Serves", String(recipe.serves)],
    ["Total", formatTime(totalTime(recipe))],
  ];

  const recipeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    alternateName: recipe.native,
    description: recipe.subtitle,
    recipeCategory: recipe.variant === "rice" ? "Main course" : recipe.variant === "soup" ? "Soup" : "Chicken",
    recipeCuisine: "Indian",
    keywords: [recipe.name, recipe.native, recipe.region, "Indian chicken recipe", "chicken curry", ...recipe.tags].join(", "),
    recipeYield: `${recipe.serves} servings`,
    prepTime: `PT${recipe.prep}M`,
    cookTime: `PT${recipe.cook}M`,
    totalTime: `PT${recipe.prep + recipe.cook}M`,
    recipeIngredient: recipe.ingredients.flatMap((group) => group.items),
    recipeInstructions: recipe.steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.title, text: step.body })),
    author: { "@type": "Organization", name: "Murgh" },
    isAccessibleForFree: true,
    inLanguage: "en-IN",
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd).replace(/</g, "\\u003c") }} />
      <div className="wrap pt-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ink-soft/80">
          <Link href="/recipes" className="hover:text-ember">
            Recipes
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={`/regions/${regionSlug(recipe.region)}`} className="hover:text-ember">
            {recipe.region}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{recipe.name}</span>
        </nav>
      </div>

      <section className="wrap grid items-end gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-14">
        <div>
          <p className="eyebrow flex flex-wrap items-center gap-3 text-ember">
            {recipe.region}
            <span className="h-px w-6 bg-ember/40" aria-hidden="true" />
            <span className="text-ink-soft/80">{recipe.origin}</span>
          </p>
          <h1 className="display mt-5 text-[clamp(2.7rem,6vw,4.4rem)] leading-[0.94] text-ink">{recipe.name}</h1>
          <p className="display mt-3 text-[19px] italic text-ink-soft">{recipe.native}</p>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-7 text-ink-soft"><TranslatedText text={recipe.subtitle} /></p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {recipe.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line px-3 py-1 text-[10.5px] uppercase tracking-[0.12em] text-ink-soft">
                {tag}
              </span>
            ))}
            <span className="ml-1">
              <HeatDots heat={recipe.heat} />
            </span>
          </div>
        </div>

        <div className="art-frame aspect-[5/4] rounded-[8px] border border-line shadow-[0_24px_60px_rgba(27,25,23,0.10)]">
          <RecipePhoto slug={recipe.slug} priority />
        </div>
      </section>

      <section className="wrap">
        <p className="max-w-[74ch] border-t border-line pt-8 text-[15px] leading-8 text-ink-soft first-letter:float-left first-letter:mr-2 first-letter:text-[52px] first-letter:leading-[0.8] first-letter:text-ember first-letter:[font-family:var(--font-display)]">
          {recipe.story}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-y-6 border-y border-line py-6 sm:grid-cols-4">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className="eyebrow text-ink-soft/70">{label}</dt>
              <dd className="mt-2 text-[15px] font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>
        <RecipeTools
          recipeSlug={recipe.slug}
          recipeName={recipe.name}
          speechText={[recipe.name + ". " + recipe.subtitle, recipe.story, "Ingredients.", ...recipe.ingredients.flatMap((group) => [group.title, ...group.items]), "Method.", ...recipe.steps.map((step, index) => "Step " + (index + 1) + ". " + step.title + ". " + step.body)].join(" ")}
        />
      </section>

      <section className="wrap grid gap-12 py-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-16">
        <div className="md:sticky md:top-24 md:self-start">
          <IngredientList groups={recipe.ingredients} baseServes={recipe.serves} recipeSlug={recipe.slug} />

          <div className="mt-8 border-t border-line pt-5">
            <h2 className="eyebrow text-ember">Serve with</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {recipe.serveWith.map((item) => (
                <li key={item} className="rounded-full bg-moss-soft px-3 py-1.5 text-[11.5px] text-moss">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <MethodSteps steps={recipe.steps} recipeSlug={recipe.slug} />

          <aside className="mt-10 rounded-[6px] border border-line bg-card p-6 md:p-7">
            <h2 className="eyebrow text-ember">Cook&apos;s notes</h2>
            <ul className="mt-4 space-y-3">
              {recipe.notes.map((note) => (
                <li key={note} className="flex gap-3 text-[12.5px] leading-6 text-ink-soft">
                  <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ember" />
                  {note}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line/70 pt-4 text-[11px] uppercase tracking-[0.12em] text-ink-soft/70">
              Heat: {heatLabel[recipe.heat]} · Prep {formatTime(recipe.prep)} · Cook {formatTime(recipe.cook)}
            </p>
          </aside>
        </div>
      </section>

      <section className="wrap pb-12">
        <RecipeReviews recipeSlug={recipe.slug} />
      </section>

      <section className="border-t border-line bg-card py-14 md:py-20">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-ember">Cook next</p>
              <h2 className="display mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-ink">Three more from the book.</h2>
            </div>
            <Link href="/recipes" className="link-underline hidden text-[12px] font-medium text-ink sm:block">
              All recipes <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <RecipeCard key={item.slug} recipe={item} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
