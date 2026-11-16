# Murgh

A modern Indian chicken cookbook website — twelve recipes from eight regions, each with its own illustrated plate.

Built with Next.js (App Router), React and Tailwind CSS v4. There is no backend: recipe content lives in
`lib/recipes.ts`, and every dish illustration is a deterministic SVG in `components/dish-art.tsx`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + type check
npm run lint
```

## Routes

- `/` — cover, featured recipes, regions, the method, the pantry
- `/recipes` — filter by region and heat, search; filters are stored in the URL
- `/recipes/[slug]` — recipe with ingredients, method and cook's notes
- `/about` — how the book and the recipes work

## Filter links

Filters are shareable and bookmarkable:

```
/recipes?region=Tamil%20Nadu&heat=3&q=65
```

`region` must match a region in `lib/recipes.ts`, `heat` is `1` (mild), `2` (medium) or `3` (hot), and `q` is a search
string. Default values are left out of the URL, and a link with filters renders the filtered list on the server.

## Working with the content

Add or edit recipes in `lib/recipes.ts`. Cards, the index, region counts and detail pages all derive from that data, and
`npm run build` generates a static page for each slug. Copy is written in simple Indian English for home cooks — see
[AGENTS.md](AGENTS.md) for the full conventions and the development workflow.
