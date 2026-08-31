# NOURA TABLE

NOURA — Nourish Your Everyday.

A lightweight React storefront prototype for the NOURA home-kitchen food venture. The current build implements the finalized homepage direction and a functional temporary ordering flow using local JSON data; backend, payments, authentication, delivery operations and live tracking are intentionally deferred.

## Stack

- React 19
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Lucide React icons
- Temporary JSON menu data

## Current experience

- Responsive NOURA homepage
- Curated menu/category navigation
- Product cards with add-to-table actions
- Persistent `Your Noura Table` cart
- Quantity updates/removal
- Free-delivery threshold logic
- Story/brand section
- Mobile cart drawer
- No backend dependency for the prototype

## Run locally

```bash
npm install
npm run dev
```

The UI is structured so the JSON menu can later be replaced by an API/data service without redesigning the customer-facing flow.
