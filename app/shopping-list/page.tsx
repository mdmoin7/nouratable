import type { Metadata } from "next";
import { ShoppingList } from "@/components/shopping-list";

export const metadata: Metadata = { title: "Shopping list", description: "Your personal ingredient shopping list, stored on this device.", robots: { index: false, follow: true } };

export default function ShoppingListPage() {
  return <section className="wrap min-h-[60vh] py-12 md:py-16">
    <p className="eyebrow text-ember">Your kitchen</p>
    <h1 className="display mt-3 text-5xl text-ink">Shopping list.</h1>
    <p className="mt-4 max-w-[52ch] text-sm leading-7 text-ink-soft">Collect ingredients from recipes, tick them off as you shop, and keep your list on this device.</p>
    <div className="mt-10"><ShoppingList /></div>
  </section>;
}
