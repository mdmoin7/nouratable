import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RecipeCard } from "@/components/recipe-card";
import { getRegionBySlug, regionSlug, recipes, regions } from "@/lib/recipes";

export function generateStaticParams() {
  return regions.map((region) => ({ slug: regionSlug(region.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return { title: "Region not found" };
  const title = `${region.name} Chicken Recipes`;
  const description = `Explore ${region.count} ${region.name} chicken recipes, regional cooking traditions, ingredients and step-by-step home-kitchen methods.`;
  return { title, description, alternates: { canonical: `/regions/${slug}` }, openGraph: { title: `${title} | Murgh`, description, url: `/regions/${slug}`, type: "website" } };
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();
  const regionRecipes = recipes.filter((recipe) => recipe.region === region.name);
  const otherRegions = regions.filter((item) => item.name !== region.name).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  const totalMinutes = regionRecipes.reduce((sum, recipe) => sum + recipe.prep + recipe.cook, 0);
  const averageMinutes = regionRecipes.length ? Math.round(totalMinutes / regionRecipes.length) : 0;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nouratable.vercel.app").replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${region.name} Chicken Recipes`,
    description: region.note,
    mainEntity: { "@type": "ItemList", numberOfItems: regionRecipes.length, itemListElement: regionRecipes.map((recipe, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}/recipes/${recipe.slug}`, name: recipe.name })) },
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="border-b border-line">
        <div className="wrap py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.14em] text-ink-soft"><Link href="/recipes" className="hover:text-ember">Recipes</Link><span aria-hidden="true"> / </span><span>{region.name}</span></nav>
          <p className="eyebrow mt-8 text-ember">Regional kitchen · {region.count} {region.count === 1 ? "recipe" : "recipes"}</p>
          <h1 className="display mt-4 text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.94] text-ink">{region.name}<br /><em className="text-ember">chicken recipes.</em></h1>
          <p className="mt-6 max-w-[58ch] text-[15px] leading-7 text-ink-soft">{region.note} Explore the dishes below, with measured ingredients, practical methods and serving ideas for home cooks.</p>
          <dl className="mt-8 grid max-w-xl grid-cols-2 gap-5 border-t border-line pt-5 sm:grid-cols-3">
            <div><dt className="eyebrow text-ink-soft/70">In this collection</dt><dd className="mt-2 text-2xl text-ink">{region.count}</dd></div>
            <div><dt className="eyebrow text-ink-soft/70">Average total time</dt><dd className="mt-2 text-2xl text-ink">{averageMinutes} min</dd></div>
            <div><dt className="eyebrow text-ink-soft/70">Heat range</dt><dd className="mt-2 text-2xl text-ink">{regionRecipes.length ? Math.min(...regionRecipes.map((recipe) => recipe.heat)) : "—"}–{regionRecipes.length ? Math.max(...regionRecipes.map((recipe) => recipe.heat)) : "—"}/3</dd></div>
          </dl>
        </div>
      </section>
      <section className="wrap py-10 md:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div><p className="eyebrow text-ember">The collection</p><h2 className="display mt-2 text-3xl text-ink">Cook from {region.name}</h2></div>
          <Link href="/recipes" className="link-underline text-[12px] text-ink">Browse all recipes →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{regionRecipes.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}</div>
      </section>
      <section className="border-t border-line bg-card py-10 md:py-14">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4"><div><p className="eyebrow text-ember">Explore more</p><h2 className="display mt-2 text-2xl text-ink">Other regional kitchens</h2></div><span className="text-[11px] text-ink-soft">{otherRegions.length} more regions</span></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherRegions.map((item) => (
              <Link key={item.name} href={`/regions/${regionSlug(item.name)}`} className="group flex items-center justify-between gap-4 rounded-[6px] border border-line bg-paper px-4 py-3 transition-colors hover:border-ember">
                <span><span className="block text-[13px] font-medium text-ink group-hover:text-ember">{item.name}</span><span className="mt-1 block text-[11px] text-ink-soft">{item.note}</span></span>
                <span className="shrink-0 text-[11px] tabular-nums text-ink-soft">{item.count} {item.count === 1 ? "dish" : "dishes"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
