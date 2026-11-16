# Murgh

A modern Indian chicken cookbook website — regional chicken recipes from across India, each with its own illustrated plate.

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
- `/regions/[slug]` — regional collection pages with cuisine context and all recipes from that region
- `/about` — how the book and the recipes work

## Filter links

Filters are shareable and bookmarkable:

```
/recipes?region=Tamil%20Nadu&heat=3&q=65
```

`region` must match a region in `lib/recipes.ts`, `heat` is `1` (mild), `2` (medium) or `3` (hot), and `q` is a search
string. Default values are left out of the URL, and a link with filters renders the filtered list on the server.

## Search engine optimisation

The App Router metadata API provides page titles, descriptions, canonical URLs and social preview metadata. Recipe detail pages emit Schema.org `Recipe` JSON-LD with ingredients, instructions, yield and ISO 8601 durations. `/sitemap.xml` includes every recipe route and `/robots.txt` advertises the sitemap. Set `NEXT_PUBLIC_SITE_URL` to the production origin before deployment; the repository default is `https://nouratable.vercel.app`.

## Working with the content

Add or edit recipes in `lib/recipes.ts`. Cards, the index, region counts, regional landing pages and detail pages all derive from that data, and
`npm run build` generates a static page for each slug. Copy is written in simple Indian English for home cooks — see
[AGENTS.md](AGENTS.md) for the full conventions and the development workflow.


## Phase 4 — platform capabilities

- Installable web app manifest and service worker shell caching. Previously visited recipe pages are cached for offline navigation; pages not visited online are not guaranteed to be available offline.
- Share recipe links with the native share sheet where available, with clipboard fallback.
- Print-friendly recipe layout.
- Read-aloud controls using the browser speech synthesis engine.
- Device-local recipe ratings and saved markers. These are private to the current browser/device and are not public reviews or synchronised between devices.
- Nutrition estimates are intentionally not published yet: the recipe dataset does not include validated ingredient-level nutrition values, and deriving precise calories/macros from free-text ingredient descriptions would create misleading figures. Add a sourced nutrition dataset before enabling this feature.

The PWA service worker caches the app shell, visited HTML navigations, and same-origin static assets. Clear site data to remove the local cache and device-local ratings/saved markers.
