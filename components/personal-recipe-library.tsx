"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RecipeCard } from "@/components/recipe-card";
import type { Recipe } from "@/lib/recipes";

type Props = { recipes: Recipe[]; mode: "saved" | "recent" };

export function PersonalRecipeLibrary({ recipes, mode }: Props) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        if (mode === "recent") {
          const value = JSON.parse(localStorage.getItem("murgh:recent") || "[]");
          setSlugs(Array.isArray(value) ? value.filter((slug): slug is string => typeof slug === "string") : []);
        } else {
          setSlugs(recipes.filter((recipe) => localStorage.getItem(`murgh:saved:${recipe.slug}`) === "true").map((recipe) => recipe.slug));
        }
      } catch { setSlugs([]); }
      setLoaded(true);
    };
    read();
    window.addEventListener("storage", read);
    window.addEventListener("murgh:library-updated", read);
    return () => {
      window.removeEventListener("storage", read);
      window.removeEventListener("murgh:library-updated", read);
    };
  }, [mode, recipes]);

  const bySlug = new Map(recipes.map((recipe) => [recipe.slug, recipe]));
  const items = slugs.map((slug) => bySlug.get(slug)).filter((recipe): recipe is Recipe => Boolean(recipe));

  if (!loaded) return <p className="py-12 text-sm text-ink-soft" role="status">Loading your recipe library…</p>;

  return items.length ? (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}
    </div>
  ) : (
    <div className="rounded-[6px] border border-dashed border-line bg-card px-6 py-16 text-center">
      <p className="display text-2xl text-ink">{mode === "saved" ? "No saved recipes yet" : "No recently viewed recipes"}</p>
      <p className="mt-2 text-[13px] text-ink-soft">{mode === "saved" ? "Save recipes as you browse and they will be collected here on this device." : "Recipes you open will appear here for quick access."}</p>
      <Link href="/recipes" className="btn btn-dark mt-6">Explore recipes</Link>
    </div>
  );
}

export function RecipeViewTracker({ recipeSlug }: { recipeSlug: string }) {
  useEffect(() => {
    try {
      const current = JSON.parse(localStorage.getItem("murgh:recent") || "[]");
      const previous = Array.isArray(current) ? current.filter((slug): slug is string => typeof slug === "string") : [];
      localStorage.setItem("murgh:recent", JSON.stringify([recipeSlug, ...previous.filter((slug) => slug !== recipeSlug)].slice(0, 12)));
      window.dispatchEvent(new Event("murgh:library-updated"));
    } catch { /* Personal history is optional when storage is unavailable. */ }
  }, [recipeSlug]);
  return null;
}
