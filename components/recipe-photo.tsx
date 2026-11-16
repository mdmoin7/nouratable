import { recipes } from "@/lib/recipes";

type Props = { slug: string; className?: string; priority?: boolean };

/**
 * Locally hosted AI-generated food photography sprite. Each recipe maps to
 * one of the four representative dishes in the 2x2 sprite.
 * The sprite is served from /public and has no third-party runtime dependency.
 */
export function RecipePhoto({ slug, className = "", priority = false }: Props) {
  const index = Math.max(0, recipes.findIndex((recipe) => recipe.slug === slug)) % 4;
  const column = index % 2;
  const row = Math.floor(index / 2);
  const x = column * 100;
  const y = row * 100;

  return (
    <div
      role="img"
      aria-label={`Photograph of ${recipes.find((recipe) => recipe.slug === slug)?.name ?? "Indian chicken dish"}`}
      className={`h-full w-full bg-cover bg-no-repeat ${className}`}
      style={{
        backgroundImage: 'url("/images/recipes/recipe-sprite.jpg")',
        backgroundSize: "200% 200%",
        backgroundPosition: `${x}% ${y}%`,
      }}
      data-priority={priority ? "true" : undefined}
    />
  );
}
