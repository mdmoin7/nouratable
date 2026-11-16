import type { MetadataRoute } from "next";
import { recipes } from "@/lib/recipes";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nouratable.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/recipes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ...recipes.map((recipe) => ({ url: `${siteUrl}/recipes/${recipe.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
