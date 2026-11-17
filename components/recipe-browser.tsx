"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { RecipeCard } from "@/components/recipe-card";
import { format, type Dictionary } from "@/lib/i18n";
import type { Heat, Recipe } from "@/lib/recipes";

const isHeat = (value: number): value is Heat => value === 1 || value === 2 || value === 3;

export function RecipeBrowser({
  recipes,
  t,
  initialRegion = "All",
  initialHeat = 0,
  initialQuery = "",
}: {
  recipes: Recipe[];
  t: Dictionary;
  initialRegion?: string;
  initialHeat?: Heat | 0;
  initialQuery?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [region, setRegion] = useState(initialRegion);
  const [heat, setHeat] = useState<Heat | 0>(initialHeat);
  const [query, setQuery] = useState(initialQuery);
  const firstRender = useRef(true);

  const regionNames = useMemo(() => ["All", ...Array.from(new Set(recipes.map((recipe) => recipe.region)))], [recipes]);

  const heatFilters: { value: Heat | 0; label: string }[] = [
    { value: 0, label: t.heatAny },
    { value: 1, label: t.heatMild },
    { value: 2, label: t.heatMedium },
    { value: 3, label: t.heatHot },
  ];

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesRegion = region === "All" || recipe.region === region;
      const matchesHeat = heat === 0 || recipe.heat === heat;
      const matchesQuery =
        !needle ||
        [recipe.name, recipe.native, recipe.region, recipe.subtitle, ...recipe.tags]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      return matchesRegion && matchesHeat && matchesQuery;
    });
  }, [recipes, region, heat, query]);

  // Keep the address bar in step with the filters, so a filtered list can be shared.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const params = new URLSearchParams();
    if (region !== "All") params.set("region", region);
    if (heat !== 0) params.set("heat", String(heat));
    if (query.trim()) params.set("q", query.trim());
    const search = params.toString();

    const timer = window.setTimeout(() => {
      router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
    }, 250);

    return () => window.clearTimeout(timer);
  }, [region, heat, query, pathname, router]);

  // Keep the filters in step with the URL when the browser's back button is used.
  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const urlRegion = params.get("region");
      const urlHeat = Number(params.get("heat"));

      setRegion(urlRegion && regionNames.includes(urlRegion) ? urlRegion : "All");
      setHeat(isHeat(urlHeat) ? urlHeat : 0);
      setQuery(params.get("q") ?? "");
    };

    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [regionNames]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-y border-line py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {regionNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setRegion(name)}
              aria-pressed={region === name}
              className={`rounded-full border px-4 py-[7px] text-[11.5px] font-medium tracking-[0.02em] transition-colors ${
                region === name
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"
              }`}
            >
              {name === "All" ? t.filterAll : name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-1" role="group" aria-label={t.heatFilterLabel}>
            {heatFilters.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setHeat(option.value)}
                aria-pressed={heat === option.value}
                className={`rounded-full px-3 py-[6px] text-[11px] font-medium transition-colors ${
                  heat === option.value ? "bg-ember/10 text-ember" : "text-ink-soft hover:text-ink"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 border-b border-line pb-1.5 focus-within:border-ink">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-soft" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="w-full bg-transparent text-[13px] text-ink placeholder:text-ink-soft/60 focus:outline-none sm:w-[170px]"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 flex items-baseline justify-between">
        <p className="text-[12px] text-ink-soft">
          <span className="font-semibold text-ink">{filtered.length}</span>{" "}
          {filtered.length === 1 ? t.countRecipe : t.countRecipes}
          {region !== "All" && <> {format(t.inRegion, { region })}</>}
        </p>
        {(region !== "All" || heat !== 0 || query) && (
          <button
            type="button"
            onClick={() => {
              setRegion("All");
              setHeat(0);
              setQuery("");
            }}
            className="text-[11px] font-medium uppercase tracking-[0.16em] text-ember hover:text-ember-deep"
          >
            {t.clearFilters}
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[6px] border border-dashed border-line bg-card px-6 py-16 text-center">
          <p className="display text-2xl text-ink">{t.emptyTitle}</p>
          <p className="mt-2 text-[13px] text-ink-soft">{t.emptyBody}</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} t={t} />
          ))}
        </div>
      )}
    </div>
  );
}
