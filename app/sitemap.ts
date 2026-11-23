import type { MetadataRoute } from "next";
import { recipes, regions, regionSlug } from "@/lib/recipes";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nouratable.vercel.app").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/recipes", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/ingredients", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/masalas", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/image-credits", priority: 0.2, changeFrequency: "yearly" as const },
  ];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...regions.map((region) => ({
      url: `${siteUrl}/regions/${regionSlug(region.name)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...recipes.map((recipe) => ({
      url: `${siteUrl}/recipes/${recipe.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
