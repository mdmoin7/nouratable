# AGENTS.md

Instructions for AI coding agents working on this repository. Read this before changing code.

## What this project is

**Murgh** — a modern Indian chicken cookbook website. Regional chicken recipes, each with an illustrated plate.
There is no backend, no database, no authentication, no API routes and no photography: all content is static data in
`lib/recipes.ts`, and every dish image is an SVG drawn in `components/dish-art.tsx`.

Stack: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4 (CSS-first config, no
`tailwind.config`). Package manager: npm with `package-lock.json`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies (only `next`, `react`, `react-dom` plus dev tooling) |
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build **and** TypeScript check — run before finishing any code change |
| `npm run lint` | ESLint (flat config, `eslint-config-next`) |
| `npm start` | Serve the production build |

There is no test suite. `npm run build` + `npm run lint` are the verification bar.

**Do not run `npm run build` while `npm run dev` is running.** Both use `.next`; the build replaces dev artefacts and
the dev server stops responding (connections hang until it is restarted). Stop dev, build, then start dev again.

## Repository layout

```
app/
  layout.tsx              root shell: fonts, metadata, header + footer
  page.tsx                home: cover, featured recipes, regions, method, pantry
  recipes/page.tsx        recipe index; reads URL filters server-side
  recipes/[slug]/page.tsx recipe detail; generateStaticParams + generateMetadata
  about/page.tsx          about the book
  globals.css             Tailwind import, @theme tokens, utility classes
components/
  site-header.tsx         sticky header, active nav (client)
  site-footer.tsx         footer, derived links
  recipe-card.tsx         card + HeatDots indicator
  recipe-browser.tsx      region/heat/search filters, URL sync (client)
  ingredient-list.tsx     tickable ingredient checklist (client)
  locale-switcher.tsx     retained language selector component; currently not mounted in the header
  dish-art.tsx            deterministic SVG dish illustrator
lib/recipes.ts            every recipe, region notes, pantry, method, helpers
lib/locale.ts             server-only locale + dictionary reader
lib/i18n/                 interface dictionaries (en complete, hi complete, five partial)
lib/recipe-translations/  per-language recipe content (types + Hindi)
```

Path alias: `@/*` maps to the repository root (`tsconfig.json`).

## Content model (`lib/recipes.ts`)

`Recipe` fields: `slug`, `name`, `native`, `subtitle`, `region`, `origin`, `heat` (1–3), `prep`/`cook` (minutes),
`serves`, `variant` (`curry | dry | rice | grill | soup`), `palette` (6 hex colours), `story`, `tags` (3 short labels),
`ingredients` (`{ title, items[] }[]`), `steps` (`{ title, body }[]`), `notes` (3 strings), `serveWith`.

Everything else is derived, not duplicated: `regions` (unique regions, counts, `regionNotes`), `featured` (slugs),
`pantry`, `method`, `heatLabel`, `getRecipe`, `totalTime`, `recipeTranslations`, `hasRecipeTranslation`,
`localizeRecipe`, `localizeRecipes`. Cooking times are formatted with `formatDuration()` from `lib/i18n`.

### Adding or editing a recipe

1. Add an object to `recipes` in `lib/recipes.ts` with a unique kebab-case `slug`.
2. Choose a `variant` and a `palette`; the palette drives the SVG art (`bg`, `curry`, `deep`, `piece`, `garnish`,
   `accent`). Keep new palettes in the same muted, warm range as the existing ones.
3. If you introduce a new `region`, add a one-line description to `regionNotes` — the region list and counts update
   automatically.
4. Optionally add the slug to `featured` (three recipes on the home page).
5. Add the Hindi content in `lib/recipe-translations/hi.ts` (see the translations section).
6. Run `npm run build`: the detail page is generated automatically from `generateStaticParams`.

Recipe knowledge-base quality is more important than raw count. Every entry must have measured ingredient quantities, distinct recipe-specific steps (not reusable generic filler), realistic prep/cook times, useful regional context, three practical notes and serving suggestions. Use simple Indian English and include a check that the thickest chicken piece reaches 74°C / 165°F. Avoid duplicate dishes under alternate names unless the technique and ingredient profile are meaningfully different.

Recipe cards, the index grid, filters, footer links and the home page all read from this data — no component edits are
needed for ordinary content changes.

## Copy style — the most important convention

All copy (recipes, home, About, UI labels, metadata, README) is written in **simple Indian English for home cooks**.

- Use Indian kitchen words: **curd** (not yogurt), **fresh cream** (not double cream), **kadai**, **chilli**,
  **capsicum**, **masala**, **hung curd**, and Hindi terms with an English gloss in brackets where helpful —
  `cardamom (choti elaichi)`, `coriander powder (dhania)`, `turmeric (haldi)`, `cumin seeds (jeera)`.
- Verbs and phrasing: "keep aside", "till", "switch off the flame", "cook till the oil separates", "fry on high heat".
- Measurements: weights in grams, liquids in millilitres, spoon measures for small quantities, **lengths in inches**
  (never cm).
- Avoid British/American restaurant prose: *yogurt, double cream, sieve, skillet, rest the meat, make ahead,
  aubergine, courgette, spring onion, plain flour, caster sugar, cupboard, one bird*. Prefer short, plain sentences
  over metaphors.
- British spellings such as *colour*, *flavour* and *chilli* are Indian English and are fine to keep.

## Translations (i18n)

The site can be read in English, Hindi, Bengali, Marathi, Tamil, Telugu and Kannada.

- `lib/i18n/en.ts` defines the `Dictionary` type and the English copy. Other complete locales must match that shape, so the build fails if a key is missing.
- `lib/i18n/hindi.ts` is the complete Hindi translation.
- `lib/i18n/partials.ts` holds Bengali, Marathi, Tamil, Telugu and Kannada. They are typed `Partial<Dictionary>`; any missing key falls back to English, so a language can ship with only navigation, filters and recipe labels translated.
- `lib/i18n/index.ts` lists `locales` (code, English name, native name) and exposes `getDictionary(locale)`, `isLocale`, `localeName`, `format()` for `{placeholder}` strings and `formatDuration()` for localised cooking times.
- `lib/locale.ts` reads the `murgh_locale` cookie on the server. `components/locale-switcher.tsx` writes that cookie and calls `router.refresh()`. The selector is currently hidden from `site-header.tsx`; keep the translation code intact.
- The root layout sets `<html lang={locale}>` and passes the dictionary down: server components receive it from `getLocaleAndDictionary()`, client components receive it as a `t` prop.

To add a language: add an entry to `locales`, write a dictionary (complete or partial) and register it in the `overrides` map in `lib/i18n/index.ts`. To add a string: add the key and English value in `lib/i18n/en.ts`, then translate it where available.

Recipe content is translated separately, in `lib/recipe-translations/`: `types.ts` defines `RecipeTranslation` (name, native name, subtitle, story, tags, ingredients, steps, notes, serveWith) and `hi.ts` holds the Hindi versions keyed by slug. `lib/recipes.ts` exposes `recipeTranslations`, `hasRecipeTranslation`, `localizeRecipe` and `localizeRecipes`; pages and cards render localised recipes, so search also matches translated dish names.

Butter Chicken, Hyderabadi Chicken Biryani and Chettinad Pepper Chicken are fully translated. Any recipe without an entry stays in English, and its page shows the localised `instructionsEnglish` note, which disappears automatically once a translation exists.

To translate a recipe, add an entry to `lib/recipe-translations/hi.ts` with every field, keeping quantities and units identical (grams, millilitres, inches, tablespoons). `lib/recipes.ts` stays the English source of truth; write the Hindi by hand rather than machine-translating.

The locale lives in a cookie, so every route now renders dynamically (the build output shows `ƒ` for all routes). Do not add `export const dynamic = "force-static"` to pages that read the locale.

## Recipe filters and the URL contract

`/recipes` supports shareable, bookmarkable filters:

| Param | Values | Notes |
| --- | --- | --- |
| `region` | a region name, e.g. `Tamil Nadu` | must exist in `regions`, otherwise ignored |
| `heat` | `1`, `2`, `3` | `1` Mild, `2` Medium, `3` Hot; other values ignored |
| `q` | free text | trimmed, capped at 80 characters |

Defaults are omitted from the URL (`/recipes` with no query string = all recipes, any heat, no search).

How it works: `app/recipes/page.tsx` awaits `searchParams`, validates them and passes them as initial props to
`components/recipe-browser.tsx`. That client component keeps local state for instant filtering and writes the URL with
`router.replace(..., { scroll: false })` after a 250 ms debounce, so typing does not flood browser history. A `popstate`
listener re-syncs the filters when the back/forward buttons are used. The page renders filtered HTML on the server, so
a shared link arrives already filtered.

If you add a filter, update all four places: server parsing in `app/recipes/page.tsx`, the initial props, the
URL-writing effect, and the `popstate` sync in `recipe-browser.tsx` — then document the new param here.

## Design system

Tailwind v4 tokens live in the `@theme` block in `app/globals.css`:

- Colours: `paper` (page background), `card`, `ink`, `ink-soft`, `line`, `ember` (accent), `ember-deep`, `saffron`,
  `moss` (dark section background), `moss-soft`.
- Fonts: `--font-display` = Fraunces (serif headings), `--font-sans` = Outfit, plus Noto Sans/Serif Devanagari as
  fallbacks for Hindi; all loaded with `next/font/google` in `app/layout.tsx`.
- Utilities: `.wrap` (page width), `.eyebrow` (small uppercase label), `.display` (serif heading), `.btn` with
  `.btn-dark` / `.btn-ember` / `.btn-ghost` / `.btn-onDarkGhost`, `.link-underline`, `.card-lift`, `.art-frame`,
  `.text-balance`.

Conventions: warm paper background, hairline `border-line` rules, large serif display type with tight tracking, small
letter-spaced labels, restrained radii (≤ 8px), minimal shadows. Compose with the existing utility classes and Tailwind
tokens; do not add a UI component library or new colour values without a reason.

## Dish artwork

`components/dish-art.tsx` renders a 400×300 SVG from `variant` + `palette`. It must stay **deterministic** — no
`Math.random()`, `Date` or other per-render randomness — to avoid hydration mismatches. Gradient/filter IDs are
namespaced by slug, so keep that pattern if you add elements. Art is illustration-only by design: do not replace it
with photography or remote image URLs.

## Constraints and gotchas

- Next 16 App Router: route `params` and `searchParams` are Promises — always `await` them.
- The project is deliberately small: no tests, no analytics, no auth, no database, no CMS, no deployments as part of
  code changes. Don't introduce them unless explicitly asked.
- Keep `package.json` lean; dependencies should be justified and used.
- Never commit `.next/`, `node_modules/`, `artifacts/` (review screenshots) or env files.
- The `artifacts/` directory holds throwaway screenshots from visual checks — it is not part of the site.
- In the Cloud preview environment the proxy rejects the dev HMR websocket (502), so `next dev` may render without
  hydrating — clicks do nothing there. Verify interactive behaviour against a production build (`npm run build` then
  `npm start`) when the dev preview appears inert. Locally `npm run dev` hydrates normally.
- A restored workspace does not include `node_modules`; run `npm ci` before building.
- Language is stored in the `murgh_locale` cookie and read in the root layout, which makes all routes dynamic. Keep
  dictionary values as plain strings/arrays so they can be passed from server to client components.
- Images are all inline SVG; there is no `public/` directory.

## Definition of done

- `npm run build` passes (types included) and `npm run lint` is clean.
- Changed recipe content renders on `/recipes`, its detail page, and the home page where relevant.
- Filters and the URL params above still behave correctly.
- Copy follows the simple Indian English rules, with inches instead of centimetres.
- New or changed UI strings are added to `lib/i18n/en.ts` and translated where a locale exists; nothing is hard-coded
  in components or pages.
- Update `README.md` and this file if scripts, routes, data fields, filter params or languages change.
