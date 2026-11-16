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
- Shared community reviews powered by Supabase Auth (email magic links) and Postgres Row Level Security. Users can publish one rating/review per recipe and edit it later; published reviews are readable publicly. The original local rating control remains a private quick rating.
- Nutrition estimates remain gated on verified ingredient quantities and a traceable nutrient source. Ingredient strings mix household measures, variable product types and optional garnishes; deriving calories/macros from those strings alone would be misleading. Do not display generated nutrition figures until a per-recipe, per-serving dataset has been validated.

The PWA service worker caches the app shell, visited HTML navigations, and same-origin static assets. Clear site data to remove the local cache and device-local ratings/saved markers.

 
### Supabase community reviews

1. Create a Supabase project and configure email authentication (magic-link sign-in).
2. Run `supabase/migrations/202611160001_recipe_reviews.sql` in the Supabase SQL editor.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from Project Settings → API to `.env.local` and the Vercel project environment variables.
4. Set the Supabase Auth site URL to the deployed Murgh origin and allow the recipe URL redirect path.
5. Deploy the branch. Reviews are associated with the authenticated user and recipe slug; RLS restricts writes to the user's own row. Only published reviews are shown in the public list.

The anon key is intended for browser use and is constrained by RLS. Never expose the Supabase service-role key in `NEXT_PUBLIC_*` variables or client code.


## Language support

The language selector supports English plus 12 major Indian languages: Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese and Urdu. The selected language is persisted in the browser and applied to the document language; Urdu also switches the document direction to right-to-left.

The language selector supports English plus 12 Indian languages. The UI catalog in `lib/i18n.ts` supplies reviewed interface labels; recipe copy is translated on demand through the server-side `/api/translate` endpoint using Google Cloud Translation Basic (v2). The `TranslatedText` component translates ingredient names, method steps, recipe descriptions, stories, serving suggestions and cook’s notes, then caches results in local storage per language and source string. English remains the source of truth and is shown if the provider is unavailable.\n\nTo enable automatic translation, enable the Cloud Translation API in a Google Cloud project, create a restricted API key with access to that API, and set `GOOGLE_TRANSLATE_API_KEY` in `.env.local` and Vercel Project → Settings → Environment Variables. Keep this key server-side; never expose it through a `NEXT_PUBLIC_` variable. Google Cloud Translation is usage-billed, so configure API quotas and billing alerts. Machine-translated culinary terms and safety-critical cooking instructions should be reviewed by native speakers before being treated as editorially approved. SEO metadata and structured data remain English until locale-specific routes are added.
