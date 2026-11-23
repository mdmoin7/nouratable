# Murgh

A modern Indian chicken cookbook website — regional chicken recipes from across India, each with its own illustrated plate.

Built with Next.js (App Router), React and Tailwind CSS v4. Recipe content lives in `lib/recipes.ts`; structured pantry and masala reference content lives in `lib/food-knowledge.ts`.

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Routes

- `/` — cover, featured recipes, regions, the method and pantry
- `/recipes` — filter by region and heat, search; filters are stored in the URL
- `/recipes/[slug]` — recipe with ingredients, method and cook's notes
- `/regions/[slug]` — regional collection pages
- `/ingredients` — ingredient glossary with flavour, use, handling and substitutions
- `/masalas` — regional masala blend guide with ingredients, method, uses and storage
- `/about` — how the book and recipes work

## Search engine optimisation

The App Router metadata API provides page titles, descriptions, canonical URLs and social preview metadata. Recipe detail pages emit Schema.org `Recipe` JSON-LD. Set `NEXT_PUBLIC_SITE_URL` to the production origin before deployment; the repository default is `https://nouratable.vercel.app`.

## Languages

The language selector is temporarily hidden from the header. The locale and translation infrastructure remains in place for a later relaunch; an existing `murgh_locale` cookie can still select a previously chosen language.

Hindi is fully translated. Butter Chicken, Hyderabadi Chicken Biryani and Chettinad Pepper Chicken also have full Hindi recipe content. Other Indian languages translate the navigation, filters and recipe labels, with English fallback for longer copy.

Interface translations live in `lib/i18n/`; recipe translations live in `lib/recipe-translations/`.

## Working with the content

The recipe catalogue currently contains 112 dishes. Add or edit recipes in `lib/recipes.ts`. The ingredient glossary and regional masala reference are maintained in `lib/food-knowledge.ts`; their pages are generated from this single typed source.

The knowledge base currently includes 12 ingredient references and 8 masala guides, alongside 112 detailed chicken recipes. Treat regional recipes and blends as variable household traditions: identify adaptations honestly, avoid claiming one universal formula, and distinguish flavour substitutions from exact replacements. Do not present unsafe ingredient processing or storage advice. Chicken recipes must use measured quantities, clear timings and a safe internal temperature of 74°C / 165°F.

Copy is written in simple Indian English for home cooks — see [AGENTS.md](AGENTS.md) for content conventions and development workflow.

## Platform capabilities

- Installable web app manifest and service worker shell caching. Previously visited recipe pages are cached for offline navigation.
- Share recipe links with the native share sheet where available, with clipboard fallback.
- Print-friendly recipe layout and browser speech synthesis read-aloud controls.
- Shared community reviews powered by Supabase Auth and Postgres Row Level Security.
- Nutrition estimates remain gated on verified ingredient quantities and traceable nutrient sources.

### Supabase community reviews

1. Create a Supabase project and configure email authentication (magic links).
2. Run `supabase/migrations/202611160001_recipe_reviews.sql` in the Supabase SQL editor.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to local and Vercel environment variables.
4. Set the Supabase Auth site URL to the deployed Murgh origin and allow recipe URL redirects.
5. Deploy. RLS restricts writes to the authenticated user's own review.

Never expose the Supabase service-role key in `NEXT_PUBLIC_*` variables or client code.

## Indian language support

The selector supports English plus 12 major Indian languages: Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese and Urdu. The selection is persisted in the browser; Urdu switches the document direction to RTL.

Reviewed UI labels come from `lib/i18n.ts`. Recipe copy is translated on demand by the self-hosted **AI4Bharat IndicTrans2** service. The Next.js `/api/translate` route validates and batches requests, keeps the service token server-side, and returns the same response shape used by the existing client-side translation cache. English remains the fallback if the service is unavailable.

### Translation service deployment

The inference service lives in `services/translation` and runs separately from Vercel because loading a PyTorch translation model inside a serverless function is not suitable.

1. Deploy the service on a persistent Python host with sufficient RAM (GPU recommended for throughput).
2. Set a long random `TRANSLATION_SERVICE_TOKEN` on the service and the same value in the Vercel project environment.
3. Set `TRANSLATION_SERVICE_URL` in Vercel to the private/reachable base URL of the service (without `/translate`).
4. Build and run from `services/translation` using its Dockerfile.
5. Check `GET /health`; persist/cache the Hugging Face model directory between restarts.

Default model: `ai4bharat/indictrans2-en-indic-dist-200M`. Machine translation is not editorial approval: review culinary terms, quantities, temperatures and food-safety instructions with native speakers.
