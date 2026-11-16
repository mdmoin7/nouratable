import { recipes } from "@/lib/recipes";

type Props = { slug: string; className?: string; priority?: boolean };

/**
 * Locally hosted AI-generated food photography sprite. Each recipe maps to
 * one of the sixteen independently photographed dishes in the 4x4 sprite.
 * The sprite is served from /public and has no third-party runtime dependency.
 */
export function RecipePhoto({ slug, className = "", priority = false }: Props) {
  const index = Math.max(0, recipes.findIndex((recipe) => recipe.slug === slug)) % 16;
  const column = index % 4;
  const row = Math.floor(index / 4);
  const x = (column / 3) * 100;
  const y = (row / 3) * 100;

  return (
    <div
      role="img"
      aria-label={`Photograph of ${recipes.find((recipe) => recipe.slug === slug)?.name ?? "Indian chicken dish"}`}
      className={`h-full w-full bg-cover bg-no-repeat ${className}`}
      style={{
        backgroundImage: 'url("/images/recipes/recipe-sprite.webp")',
        backgroundSize: "400% 400%",
        backgroundPosition: `${x}% ${y}%`,
      }}
      data-priority={priority ? "true" : undefined}
    />
  );
}
