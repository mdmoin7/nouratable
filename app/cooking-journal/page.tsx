import type { Metadata } from "next";
import { CookingJournal } from "@/components/cooking-journal";
import { recipes } from "@/lib/recipes";

export const metadata: Metadata = { title: "Cooking journal", description: "A private record of recipes you have cooked and your personal kitchen notes.", robots: { index: false, follow: true } };

export default function CookingJournalPage() {
  return <section className="wrap min-h-[60vh] py-12 md:py-16">
    <p className="eyebrow text-ember">Your kitchen</p>
    <h1 className="display mt-3 text-5xl text-ink">Cooking journal.</h1>
    <p className="mt-4 max-w-[52ch] text-sm leading-7 text-ink-soft">Remember what you cooked, when you cooked it, and the adjustments worth keeping.</p>
    <div className="mt-10"><CookingJournal recipes={recipes} /></div>
  </section>;
}
