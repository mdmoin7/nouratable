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
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nouratable.vercel.app").replace(/\/$/, "");
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: `${region.name} Chicken Recipes`, description: region.note, mainEntity: { "@type": "ItemList", numberOfItems: regionRecipes.length, itemListElement: regionRecipes.map((recipe, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}/recipes/${recipe.slug}`, name: recipe.name })) } };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <section className="border-b border-line"><div className="wrap py-12 md:py-16">
      <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.14em] text-ink-soft"><Link href="/recipes" className="hover:text-ember">Recipes</Link><span aria-hidden="true"> / </span><span>{region.name}</span></nav>
      <p className="eyebrow mt-8 text-ember">Regional kitchen · {region.count} recipes</p>
      <h1 className="display mt-4 text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.94] text-ink">{region.name}<br /><em className="text-ember">chicken recipes.</em></h1>
      <p className="mt-6 max-w-[58ch] text-[15px] leading-7 text-ink-soft">{region.note} Explore the dishes below, with measured ingredients, practical methods and serving ideas for home cooks.</p>
    </div></section>
    <section className="wrap py-10 md:py-14">
      <div className="mb-8 flex items-end justify-between gap-4"><div><p className="eyebrow text-ember">The collection</p><h2 className="display mt-2 text-3xl text-ink">Cook from {region.name}</h2></div><Link href="/recipes" className="link-underline text-[12px] text-ink">All regions →</Link></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{regionRecipes.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}</div>
    </section>
    <section className="border-t border-line bg-card py-10"><div className="wrap"><p className="eyebrow text-ember">Keep exploring</p><div className="mt-4 flex flex-wrap gap-3">{regions.filter((item) => item.name !== region.name).slice(0, 12).map((item) => <Link key={item.name} href={`/regions/${regionSlug(item.name)}`} className="rounded-full border border-line px-4 py-2 text-[12px] text-ink-soft hover:border-ember hover:text-ember">{item.name} · {item.count}</Link>)}</div></div></section>
  </main>;
}
