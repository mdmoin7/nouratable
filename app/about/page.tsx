import type { Metadata } from "next";
import Link from "next/link";
import { DishArt } from "@/components/dish-art";
import { getRecipe, recipes, regions } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "About this book",
  description:
    "Why twelve Indian chicken recipes, how the book is arranged, and how to buy and cook chicken at home.",
};

const korma = getRecipe("awadhi-chicken-korma")!;

const sections = [
  {
    number: "01",
    title: "Why chicken",
    body: "Chicken is the easiest meat to cook at home and the most common in Indian kitchens. But most restaurant menus serve the same red gravy and give it different names. This book keeps the regions separate: Goan vindalho, Lucknowi korma, Chettinad pepper chicken.",
  },
  {
    number: "02",
    title: "How the book works",
    body: "Every recipe starts with the region and a short note, then the marinade, the masala and the method, in that order. Marinade time is listed separately from cooking time, so you know how long the dish will take.",
  },
  {
    number: "03",
    title: "Buying the chicken",
    body: "Buy chicken with bone when the recipe allows it. Bone keeps the chicken soft and makes the gravy thicker. Thigh pieces are safer for beginners; breast dries out fast. Keep the chicken in the fridge till you cook it, pat it dry before frying, and do not put too many pieces in the pan at one time.",
  },
  {
    number: "04",
    title: "Spice and heat",
    body: "Kashmiri chilli gives colour, dried red chilli gives heat, and black pepper gives slow heat. If a recipe says mild, it will be mild. Keep green chilli or chilli oil on the table for those who want more.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="wrap grid gap-12 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <p className="eyebrow text-ember">About this book</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.94] text-ink">
              A small book about
              <br />
              <em className="text-ember">one chicken.</em>
            </h1>
            <p className="mt-7 max-w-[52ch] text-[15px] leading-7 text-ink-soft">
              Murgh brings together regional chicken recipes from across India, and one simple point: Indian chicken is not one dish. Every
              region has its own spices and its own method. Cook a few of these recipes and you will learn the method,
              not just the dish.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/recipes" className="btn btn-dark">
                See the recipes <span aria-hidden="true">→</span>
              </Link>
              <Link href="/#method" className="btn btn-ghost">
                The four habits
              </Link>
            </div>
          </div>

          <div className="art-frame aspect-square rounded-[8px] border border-line shadow-[0_24px_60px_rgba(27,25,23,0.10)]">
            <DishArt slug={korma.slug} variant={korma.variant} palette={korma.palette} />
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="eyebrow text-ember">The basics</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.05] text-ink">
              What every recipe assumes.
            </h2>
            <p className="mt-4 max-w-[32ch] text-[13px] leading-6 text-ink-soft">
              {recipes.length} recipes from {regions.length} regions. Most need one heavy pan. Two need an oven.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {sections.map((section) => (
              <div key={section.number} className="border-t border-ink/25 pt-4">
                <span className="text-[10px] font-medium tracking-[0.18em] text-ember">{section.number}</span>
                <h3 className="display mt-2 text-[21px] leading-snug text-ink">{section.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-ink-soft">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss text-paper">
        <div className="wrap grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-20">
          <div>
            <p className="eyebrow text-paper/60">About the drawings</p>
            <p className="display mt-4 max-w-[32ch] text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.08]">
              Every dish here is drawn, not photographed. So the page shows the food, not the styling.
            </p>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <p className="max-w-[36ch] text-[13px] leading-6 text-paper/70">
              Each plate has just three things: the dish, the masala and a garnish. If your pan looks different from the
              drawing, it is probably right.
            </p>
            <Link href="/recipes" className="btn btn-onDarkGhost mt-6">
              See all {recipes.length} recipes <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display max-w-[30ch] text-[clamp(1.6rem,3vw,2.2rem)] leading-tight text-ink">
            Cook it the way you like it, and change it to your taste.
          </p>
          <Link href="/recipes/murgh-makhani" className="btn btn-ember">
            Start with butter chicken <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
