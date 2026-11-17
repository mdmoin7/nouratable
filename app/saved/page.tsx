import type { Metadata } from "next";
import { PersonalRecipeLibrary } from "@/components/personal-recipe-library";
import { recipes } from "@/lib/recipes";

export const metadata: Metadata = { title: "Saved recipes", description: "Your saved Murgh recipes, stored privately on this device.", robots: { index: false, follow: true } };

export default function SavedRecipesPage() {
  return <section className="wrap min-h-[60vh] py-12 md:py-16">
    <p className="eyebrow text-ember">Your kitchen</p>
    <h1 className="display mt-3 text-5xl text-ink">Saved recipes.</h1>
    <p className="mt-4 max-w-[52ch] text-sm leading-7 text-ink-soft">A personal collection stored on this device. Saved recipes are not public and do not require an account.</p>
    <div className="mt-10"><PersonalRecipeLibrary recipes={recipes} mode="saved" /></div>
  </section>;
}
