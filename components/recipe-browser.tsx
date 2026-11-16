"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { RecipeCard } from "@/components/recipe-card";
import { type Heat, type Recipe } from "@/lib/recipes";
import { useLanguage } from "@/components/language-provider";

type SortOrder = "featured" | "name" | "quickest" | "longest";
const sortOptions: { value: SortOrder; label: string }[] = [
  { value: "featured", label: "Featured order" },
  { value: "name", label: "Name: A–Z" },
  { value: "quickest", label: "Quickest first" },
  { value: "longest", label: "Longest first" },
];
const heatFilters: { value: Heat | 0; label: string }[] = [
  { value: 0, label: "Any heat" },
  { value: 1, label: heatLabel[1] },
  { value: 2, label: heatLabel[2] },
  { value: 3, label: heatLabel[3] },
];
const isHeat = (value: number): value is Heat => value === 1 || value === 2 || value === 3;
const isSortOrder = (value: string | null): value is SortOrder =>
  value === "featured" || value === "name" || value === "quickest" || value === "longest";

export function RecipeBrowser({
  recipes,
  initialRegion = "All",
  initialHeat = 0,
  initialQuery = "",
  initialSort = "featured",
}: {
  recipes: Recipe[];
  initialRegion?: string;
  initialHeat?: Heat | 0;
  initialQuery?: string;
  initialSort?: SortOrder;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();
  const [region, setRegion] = useState(initialRegion);
  const [heat, setHeat] = useState<Heat | 0>(initialHeat);
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOrder>(initialSort);
  const firstRender = useRef(true);

  const regionNames = useMemo(
    () => ["All", ...Array.from(new Set(recipes.map((recipe) => recipe.region))).sort((a, b) => a.localeCompare(b))],
    [recipes],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    const matches = recipes.filter((recipe) => {
      const matchesRegion = region === "All" || recipe.region === region;
      const matchesHeat = heat === 0 || recipe.heat === heat;
      const searchable = [
        recipe.name,
        recipe.native,
        recipe.region,
        recipe.origin,
        recipe.subtitle,
        ...recipe.tags,
        ...recipe.ingredients.flatMap((group) => [group.title, ...group.items]),
      ].join(" ").toLocaleLowerCase();
      return matchesRegion && matchesHeat && (!needle || searchable.includes(needle));
    });

    return [...matches].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "quickest") return a.prep + a.cook - (b.prep + b.cook);
      if (sort === "longest") return b.prep + b.cook - (a.prep + a.cook);
      return recipes.indexOf(a) - recipes.indexOf(b);
    });
  }, [recipes, region, heat, query, sort]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const params = new URLSearchParams();
    if (region !== "All") params.set("region", region);
    if (heat !== 0) params.set("heat", String(heat));
    if (query.trim()) params.set("q", query.trim());
    if (sort !== "featured") params.set("sort", sort);
    const search = params.toString();
    const timer = window.setTimeout(() => {
      router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [region, heat, query, sort, pathname, router]);

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const urlRegion = params.get("region");
      const urlHeat = Number(params.get("heat"));
      setRegion(urlRegion && regionNames.includes(urlRegion) ? urlRegion : "All");
      setHeat(isHeat(urlHeat) ? urlHeat : 0);
      setQuery(params.get("q") ?? "");
      setSort(isSortOrder(params.get("sort")) ? params.get("sort") as SortOrder : "featured");
    };
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [regionNames]);

  const hasFilters = region !== "All" || heat !== 0 || query.trim() !== "" || sort !== "featured";

  return (
    <div>
      <div className="border-y border-line py-6">
        <div className="flex flex-col gap-5">
          <div>
            <p className="eyebrow mb-3 text-ink-soft/70">{t("browseByRegion")}</p>
            <div className="flex flex-wrap items-center gap-2">
              {regionNames.map((name) => (
                <button key={name} type="button" onClick={() => setRegion(name)} aria-pressed={region === name}
                  className={`rounded-full border px-4 py-[7px] text-[11.5px] font-medium tracking-[0.02em] transition-colors ${region === name ? "border-ink bg-ink text-paper" : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"}`}>
                  {name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <p className="eyebrow mb-2 text-ink-soft/70">{t("filterHeat")}</p>
                <div className="flex items-center gap-1" role="group" aria-label="Filter by heat">
                  {heatFilters.map((option) => (
                    <button key={option.value} type="button" onClick={() => setHeat(option.value)} aria-pressed={heat === option.value}
                      className={`rounded-full px-3 py-[6px] text-[11px] font-medium transition-colors ${heat === option.value ? "bg-ember/10 text-ember" : "text-ink-soft hover:text-ink"}`}>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <label className="flex items-center gap-2 border-b border-line pb-1.5 focus-within:border-ink">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-soft" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
                </svg>
                <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
                  placeholder={t("search")} aria-label={t("search")}
                  className="w-full bg-transparent text-[13px] text-ink placeholder:text-ink-soft/60 focus:outline-none sm:w-[205px]" />
              </label>
            </div>
            <label className="flex items-center gap-2 text-[11px] text-ink-soft">
              <span className="eyebrow text-ink-soft/70">{t("sortBy")}</span>
              <select value={sort} onChange={(event) => setSort(event.target.value as SortOrder)}
                className="rounded border border-line bg-card px-3 py-2 text-[12px] text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ember">
                {sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <p className="text-[12px] text-ink-soft">
          <span className="font-semibold text-ink">{filtered.length}</span> {filtered.length === 1 ? t("recipe") : t("recipesCount")}
          {region !== "All" && ` in ${region}`}
          {query.trim() && <span> matching “{query.trim()}”</span>}
        </p>
        {hasFilters && <button type="button" onClick={() => { setRegion("All"); setHeat(0); setQuery(""); setSort("featured"); }}
          className="shrink-0 text-[11px] font-medium uppercase tracking-[0.16em] text-ember hover:text-ember-deep">{t("clearFilters")}</button>}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[6px] border border-dashed border-line bg-card px-6 py-16 text-center">
          <p className="display text-2xl text-ink">{t("noResults")}</p>
          <p className="mt-2 text-[13px] text-ink-soft">{t("tryAnotherFilter")}</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}
        </div>
      )}
    </div>
  );
}
