import type { Metadata } from "next";
import { PersonalRecipeLibrary } from "@/components/personal-recipe-library";
import { recipes } from "@/lib/recipes";

export const metadata: Metadata = { title: "Recently viewed", description: "Quickly return to recipes you have recently opened on this device.", robots: { index: false, follow: true } };

export default function RecentlyViewedPage() {
  return <section className="wrap min-h-[60vh] py-12 md:py-16">
    <p className="eyebrow text-ember">Your kitchen</p>
    <h1 className="display mt-3 text-5xl text-ink">Recently viewed.</h1>
    <p className="mt-4 max-w-[52ch] text-sm leading-7 text-ink-soft">Your latest 12 recipe visits, stored privately on this device.</p>
    <div className="mt-10"><PersonalRecipeLibrary recipes={recipes} mode="recent" /></div>
  </section>;
}
