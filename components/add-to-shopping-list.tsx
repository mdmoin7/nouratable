"use client";

import { useState } from "react";

type Group = { title: string; items: string[] };

export function AddToShoppingList({ recipeSlug, recipeName, groups }: { recipeSlug: string; recipeName: string; groups: Group[] }) {
  const [message, setMessage] = useState("");
  function add() {
    try {
      const current = JSON.parse(localStorage.getItem("murgh:shopping-list") || "[]");
      const items = Array.isArray(current) ? current : [];
      const known = new Set(items.map((item: { id?: string }) => item?.id));
      const additions = groups.flatMap((group) => group.items.map((name) => ({
        id: `${recipeSlug}:${name}`, name, group: group.title, recipeSlug, recipeName, checked: false,
      }))).filter((item) => !known.has(item.id));
      localStorage.setItem("murgh:shopping-list", JSON.stringify([...items, ...additions]));
      window.dispatchEvent(new Event("murgh:shopping-list-updated"));
      setMessage(additions.length ? `${additions.length} ingredients added to your list` : "These ingredients are already on your list");
    } catch { setMessage("Could not update the shopping list on this device"); }
  }
  return <div className="my-4 flex flex-wrap items-center gap-3 print:hidden">
    <button type="button" onClick={add} className="btn btn-ghost">Add ingredients to shopping list</button>
    {message && <span role="status" className="text-xs text-ink-soft">{message}</span>}
  </div>;
}
