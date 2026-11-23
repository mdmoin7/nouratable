# Murgh

A modern Indian chicken cookbook website — regional chicken recipes from across India, each with its own illustrated plate.

Built with Next.js (App Router), React and Tailwind CSS v4. Recipe content lives in `lib/recipes.ts`, and dish illustrations are deterministic SVGs in `components/dish-art.tsx`.

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Routes

- `/` — cover, featured recipes, regions, the method, the pantry
- `/recipes` — filter by region and heat, search; filters are stored in the URL
- `/recipes/[slug]` — recipe with ingredients, method and cook's notes
- `/regions/[slug]` — regional collection pages
- `/about` — how the book and the recipes work

## Search engine optimisation

The App Router metadata API provides page titles, descriptions, canonical URLs and social preview metadata. Recipe detail pages emit Schema.org `Recipe` JSON-LD. Set `NEXT_PUBLIC_SITE_URL` to the production origin before deployment; the repository default is `https://nouratable.vercel.app`.

## Languages

The language selector is temporarily hidden from the header. The locale and translation infrastructure remains in place for a later relaunch; an existing `murgh_locale` cookie can still select a previously chosen language.

Hindi is fully translated. Butter Chicken, Hyderabadi Chicken Biryani and Chettinad Pepper Chicken also have full Hindi
recipe content — ingredients, steps and cook's notes — so their Hindi pages are entirely in Hindi. The other Indian
languages translate the navigation, filters and recipe labels, with English fallback for longer copy.

Interface translations live in `lib/i18n/`; recipe translations live in `lib/recipe-translations/`. Recipes without a
Hindi translation still show their ingredients and method in English, and the page says so in the chosen language.

## Working with the content

The recipe knowledge base currently contains 84 recipes across regional Indian styles. Add or edit recipes in `lib/recipes.ts`; the home page, recipe index, region counts and detail routes derive from this source. Write complete, kitchen-tested-style instructions with measured ingredients, clear timings and a safe internal temperature of 74°C / 165°F for chicken. Avoid generic placeholder steps or unmeasured ingredients. Copy is written in simple Indian English for home cooks — see [AGENTS.md](AGENTS.md) for content conventions and development workflow.

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

1. Deploy the service on a persistent Python host with sufficient RAM (GPU recommended for throughput). The default distilled model is approximately 200M parameters.
2. Set a long random `TRANSLATION_SERVICE_TOKEN` on the service and the same value in the Vercel project environment.
3. Set `TRANSLATION_SERVICE_URL` in Vercel to the private/reachable base URL of the service (without `/translate`).
4. Build and run from `services/translation`:

   ```bash
   docker build -t murgh-translation .
   docker run -p 8080:8080 \
     -e TRANSLATION_SERVICE_TOKEN='your-long-random-secret' \
     murgh-translation
   ```

5. Check `GET /health`; the first startup downloads model weights from Hugging Face and can take several minutes. Persist/cache the Hugging Face model directory between restarts.
6. If Hugging Face requires model access approval, accept the model conditions and provide `HF_TOKEN` to the service runtime. Never put it in the browser or Vercel public variables.

Default model: `ai4bharat/indictrans2-en-indic-dist-200M`. Override with `INDICTRANS_MODEL` only after validating the alternative checkpoint and its license. IndicTrans2 supports all 12 selected languages and is released under MIT; review the model card and dependencies when changing model versions. Machine translation is not editorial approval: review culinary terms, quantities, temperatures, and food-safety instructions with native speakers.

### Translation behavior and limits

- English is the source language; this service currently translates English copy to the selected Indian language.
- The API accepts batches of up to 100 strings and 30,000 total characters.
- Browser local storage caches translations by language and source text; clearing site data clears that cache.
- Translation is generated at runtime. Search metadata and structured data remain English until locale-specific routes are implemented.
- Preserve recipe measurements and timings during editorial review; do not rely on unreviewed translations for food-safety guidance.
