import type { Metadata } from "next";
import { MealPlanner } from "@/components/meal-planner";
import { recipes } from "@/lib/recipes";

export const metadata: Metadata = { title: "Meal planner", description: "Plan a week of regional Indian chicken recipes and build a shopping list.", robots: { index: false, follow: true } };

export default function MealPlannerPage() {
  return <section className="wrap min-h-[60vh] py-12 md:py-16">
    <p className="eyebrow text-ember">Your kitchen</p>
    <h1 className="display mt-3 text-5xl text-ink">Weekly meal plan.</h1>
    <p className="mt-4 max-w-[52ch] text-sm leading-7 text-ink-soft">Choose a recipe for each day, then turn the week into a single shopping list.</p>
    <div className="mt-10"><MealPlanner recipes={recipes} /></div>
  </section>;
}
