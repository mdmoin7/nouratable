# Murgh

A modern Indian chicken cookbook website — twelve tested recipes across eight regions, each with its own illustrated plate.

Built with Next.js (App Router), React and Tailwind CSS v4. All dish artwork is drawn in SVG in `components/dish-art.tsx`; recipe content lives in `lib/recipes.ts`.

```bash
npm run dev
```

Routes:

- `/` — cover, featured recipes, regions, method, pantry
- `/recipes` — filter by region and heat, search, deep-linkable `?region=Delhi`
- `/recipes/[slug]` — recipe with ingredients, method and cook's notes
- `/about` — how the book and the recipes work
