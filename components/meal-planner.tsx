"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Recipe } from "@/lib/recipes";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
type Plan = Partial<Record<(typeof days)[number], string>>;

export function MealPlanner({ recipes }: { recipes: Recipe[] }) {
  const [plan, setPlan] = useState<Plan>({});
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      const value = JSON.parse(localStorage.getItem("murgh:weekly-plan") || "{}");
      if (value && typeof value === "object" && !Array.isArray(value)) setPlan(value);
    } catch { /* Ignore invalid local data. */ }
    setLoaded(true);
  }, []);
  function update(day: (typeof days)[number], slug: string) {
    const next = { ...plan };
    if (slug) next[day] = slug;
    else delete next[day];
    setPlan(next);
    try { localStorage.setItem("murgh:weekly-plan", JSON.stringify(next)); } catch { setMessage("Could not save this plan on the device"); }
  }
  function buildShoppingList() {
    try {
      const current = JSON.parse(localStorage.getItem("murgh:shopping-list") || "[]");
      const items = Array.isArray(current) ? current : [];
      const known = new Set(items.map((item: { id?: string }) => item?.id));
      const additions = days.flatMap((day) => {
        const recipe = recipes.find((item) => item.slug === plan[day]);
        if (!recipe) return [];
        return recipe.ingredients.flatMap((group) => group.items.map((name) => ({
          id: `plan:${day}:${recipe.slug}:${name}`, name, group: group.title,
          recipeSlug: recipe.slug, recipeName: recipe.name, checked: false,
        })));
      }).filter((item) => !known.has(item.id));
      localStorage.setItem("murgh:shopping-list", JSON.stringify([...items, ...additions]));
      window.dispatchEvent(new Event("murgh:shopping-list-updated"));
      setMessage(`${additions.length} ingredients added to your shopping list`);
    } catch { setMessage("Could not create the shopping list on this device"); }
  }
  const planned = days.filter((day) => Boolean(plan[day])).length;
  if (!loaded) return <p role="status" className="py-12 text-sm text-ink-soft">Loading your meal plan…</p>;
  return <div>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-ink-soft"><strong className="text-ink">{planned}</strong> of 7 days planned</p>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={buildShoppingList} disabled={!planned} className="btn btn-dark disabled:opacity-40">Build shopping list</button>
        <button type="button" onClick={() => { setPlan({}); localStorage.removeItem("murgh:weekly-plan"); setMessage("Weekly plan cleared"); }} className="btn btn-ghost">Clear week</button>
      </div>
    </div>
    <div className="grid gap-3 sm:grid-cols-2">
      {days.map((day) => {
        const selected = recipes.find((recipe) => recipe.slug === plan[day]);
        return <section key={day} className="rounded-[6px] border border-line bg-card p-4">
          <label className="eyebrow text-ember" htmlFor={`meal-${day}`}>{day}</label>
          <select id={`meal-${day}`} value={plan[day] ?? ""} onChange={(event) => update(day, event.target.value)} className="mt-3 min-h-11 w-full rounded border border-line bg-paper px-3 py-2 text-sm text-ink">
            <option value="">Choose a recipe</option>
            {recipes.map((recipe) => <option key={recipe.slug} value={recipe.slug}>{recipe.name} · {recipe.region}</option>)}
          </select>
          {selected && <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-xs text-ink-soft">{selected.prep + selected.cook} min · Serves {selected.serves}</span>
            <Link href={`/recipes/${selected.slug}`} className="text-xs font-semibold text-ember underline underline-offset-4">View recipe</Link>
          </div>}
        </section>;
      })}
    </div>
    {message && <p role="status" className="mt-4 text-xs text-ink-soft">{message}</p>}
    <p className="mt-6 text-xs text-ink-soft">Your plan is stored locally on this device. It is not synced across devices or accounts.</p>
  </div>;
}
