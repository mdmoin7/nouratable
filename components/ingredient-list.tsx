"use client";

import { useState } from "react";
import { format, type Dictionary } from "@/lib/i18n";

type Group = { title: string; items: string[] };
type PrepState = 0 | 1 | 2;
const fractions: Record<string, number> = {
  "¼": 0.25, "½": 0.5, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3,
  "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875,
};
const fractionGlyphs = Object.entries(fractions);

export function IngredientList({ groups, t }: { groups: Group[]; t: Dictionary }) {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`murgh:ingredients:${recipeSlug}`);
      if (saved) {
        const parsed = JSON.parse(saved) as { serves?: number; prep?: Record<string, PrepState> };
        if (Number.isInteger(parsed.serves) && parsed.serves! >= 1 && parsed.serves! <= 20) setServes(parsed.serves!);
        if (parsed.prep && typeof parsed.prep === "object") setPrep(parsed.prep);
      }
    } catch { /* Ignore invalid or unavailable local storage. */ }
    setLoaded(true);
  }, [recipeSlug]);

  useEffect(() => {
    if (loaded) {
      try { localStorage.setItem(`murgh:ingredients:${recipeSlug}`, JSON.stringify({ serves, prep })); } catch { /* Storage is optional. */ }
    }
  }, [loaded, prep, recipeSlug, serves]);

  function advance(key: string) {
    setPrep((current) => ({ ...current, [key]: (((current[key] ?? 0) + 1) % 3) as PrepState }));
  }

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
        <h2 className="eyebrow text-ember">{t.ingredients}</h2>
        <span className="text-[11px] text-ink-soft/70">
          {checked.length ? format(t.tickedCount, { count: checked.length }) : t.tickWhatYouHave}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 rounded-[6px] border border-line bg-card px-4 py-3">
        <div><p className="text-[12px] font-semibold text-ink">{t("adjustServings")}</p><p className="mt-0.5 text-[11px] text-ink-soft">{t("quantitiesUpdate")}</p></div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setServes((value) => Math.max(1, value - 1))} disabled={serves <= 1} aria-label="Decrease servings" className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg text-ink disabled:opacity-30">−</button>
          <output aria-live="polite" className="min-w-6 text-center text-sm font-semibold tabular-nums text-ink">{serves}</output>
          <button type="button" onClick={() => setServes((value) => Math.min(20, value + 1))} disabled={serves >= 20} aria-label="Increase servings" className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg text-ink disabled:opacity-30">+</button>
        </div>
      </div>
      <p className="mt-3 text-[10px] text-ink-soft/70">{t("toPrepare")} → {t("prepared")} → {t("ready")}</p>
      <div className="mt-5 space-y-7">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft/80"><TranslatedText text={group.title} /></h3>
            <ul className="mt-3 space-y-2.5">
              {group.items.map((item) => {
                const key = `${group.title}-${item}`;
                const state = prep[key] ?? 0;
                return <li key={key}>
                  <button type="button" onClick={() => advance(key)} aria-label={`${item}: ${t(prepLabels[state])}.`} aria-pressed={state === 2} className="group flex w-full items-start gap-3 text-left">
                    <span aria-hidden="true" className={`mt-0.5 grid h-5 min-w-5 place-items-center rounded-full border px-1 text-[9px] font-semibold ${prepStyles[state]}`}>{state === 2 ? "✓" : state === 1 ? "•" : "○"}</span>
                    <span className={`flex-1 text-[13.5px] leading-6 ${state === 2 ? "text-ink-soft/55 line-through" : "text-ink"}`}><TranslatedText text={scaleIngredient(item, factor)} /></span>
                    <span className={`pt-1 text-[9px] uppercase tracking-wide ${state === 0 ? "text-ink-soft/50" : state === 1 ? "text-[#80551b]" : "text-moss"}`}>{t(prepLabels[state])}</span>
                  </button>
                </li>;
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
