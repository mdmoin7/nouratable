"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { id: string; name: string; group: string; recipeSlug: string; recipeName: string; checked: boolean };

export function ShoppingList() {
  const [items, setItems] = useState<Item[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const read = () => {
      try {
        const value = JSON.parse(localStorage.getItem("murgh:shopping-list") || "[]");
        setItems(Array.isArray(value) ? value.filter((item) => item && typeof item.id === "string" && typeof item.name === "string") : []);
      } catch { setItems([]); }
      setLoaded(true);
    };
    read();
    window.addEventListener("storage", read);
    window.addEventListener("murgh:shopping-list-updated", read);
    return () => {
      window.removeEventListener("storage", read);
      window.removeEventListener("murgh:shopping-list-updated", read);
    };
  }, []);
  function save(next: Item[]) {
    setItems(next);
    try { localStorage.setItem("murgh:shopping-list", JSON.stringify(next)); } catch { /* Local list remains usable for this session. */ }
  }
  const grouped = items.reduce<Record<string, Item[]>>((result, item) => {
    (result[item.recipeName] ??= []).push(item);
    return result;
  }, {});
  if (!loaded) return <p role="status" className="py-12 text-sm text-ink-soft">Loading your shopping list…</p>;
  return <div>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-ink-soft"><strong className="text-ink">{items.filter((item) => item.checked).length}</strong> of {items.length} ingredients checked</p>
      {items.length > 0 && <button type="button" onClick={() => save([])} className="text-xs font-semibold uppercase tracking-wider text-ember">Clear list</button>}
    </div>
    {items.length ? <div className="space-y-8">
      {Object.entries(grouped).map(([recipeName, recipeItems]) => <section key={recipeName} className="rounded-[6px] border border-line bg-card p-5">
        <h2 className="display text-xl text-ink">{recipeName}</h2>
        <ul className="mt-4 space-y-3">
          {recipeItems.map((item) => <li key={item.id} className="flex items-start gap-3">
            <input type="checkbox" checked={item.checked} onChange={(event) => save(items.map((current) => current.id === item.id ? { ...current, checked: event.target.checked } : current))} aria-label={`Mark ${item.name} as ${item.checked ? "needed" : "purchased"}`} className="mt-1 h-4 w-4 accent-ember" />
            <span className={item.checked ? "flex-1 text-sm text-ink-soft line-through" : "flex-1 text-sm text-ink"}>{item.name}</span>
            <button type="button" onClick={() => save(items.filter((current) => current.id !== item.id))} aria-label={`Remove ${item.name}`} className="text-lg leading-none text-ink-soft hover:text-ember">×</button>
          </li>)}
        </ul>
        <Link href={`/recipes/${recipeItems[0].recipeSlug}`} className="mt-4 inline-block text-xs font-medium text-ember underline underline-offset-4">View recipe</Link>
      </section>)}
    </div> : <div className="rounded-[6px] border border-dashed border-line bg-card px-6 py-16 text-center">
      <p className="display text-2xl text-ink">Your list is empty</p>
      <p className="mt-2 text-[13px] text-ink-soft">Open a recipe and add its ingredients to build a shopping list.</p>
      <Link href="/recipes" className="btn btn-dark mt-6">Browse recipes</Link>
    </div>}
  </div>;
}
