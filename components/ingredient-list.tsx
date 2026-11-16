"use client";

import { useMemo, useState } from "react";

type Group = { title: string; items: string[] };

const fractions: Record<string, number> = {
  "¼": 0.25, "½": 0.5, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3,
  "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875,
};
const fractionGlyphs = Object.entries(fractions);

function formatAmount(value: number) {
  if (value <= 0) return String(value);
  const whole = Math.floor(value);
  const remainder = value - whole;
  const nearest = Math.round(remainder * 8) / 8;
  if (nearest < 0.06) return String(whole || 0);
  const glyph = fractionGlyphs.find(([, amount]) => Math.abs(amount - nearest) < 0.025)?.[0];
  if (!glyph) return Number(value.toFixed(2)).toString();
  return whole ? `${whole}${glyph}` : glyph;
}

function scaleIngredient(item: string, factor: number) {
  if (factor === 1) return item;
  const match = item.match(/^(\s*)(\d+(?:\.\d+)?|[¼½¾⅓⅔⅛⅜⅝⅞])(?:(\s*)([¼½¾⅓⅔⅛⅜⅝⅞]))?(\s+)(.*)$/);
  if (!match) return item;
  const [, leading, wholeOrFraction, , extraFraction, spacing, rest] = match;
  const amount = (Number(wholeOrFraction) || fractions[wholeOrFraction]) + (extraFraction ? fractions[extraFraction] : 0);
  return `${leading}${formatAmount(amount * factor)}${spacing}${rest}`;
}

export function IngredientList({ groups, baseServes }: { groups: Group[]; baseServes: number }) {
  const [serves, setServes] = useState(baseServes);
  const [checked, setChecked] = useState<string[]>([]);
  const factor = serves / baseServes;
  const total = useMemo(() => groups.reduce((sum, group) => sum + group.items.length, 0), [groups]);
  const toggle = (key: string) =>
    setChecked((current) => (current.includes(key) ? current.filter((item) => item !== key) : [...current, key]));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <h2 className="eyebrow text-ember">Ingredients</h2>
        <span className="text-[11px] text-ink-soft/70">{checked.length}/{total} ready</span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-[6px] border border-line bg-card px-4 py-3">
        <div>
          <p className="text-[12px] font-semibold text-ink">Adjust servings</p>
          <p className="mt-0.5 text-[11px] text-ink-soft">Ingredient quantities update automatically</p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setServes((value) => Math.max(1, value - 1))} disabled={serves <= 1} aria-label="Decrease servings" className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg text-ink disabled:opacity-30">−</button>
          <output aria-live="polite" className="min-w-6 text-center text-sm font-semibold tabular-nums text-ink">{serves}</output>
          <button type="button" onClick={() => setServes((value) => Math.min(20, value + 1))} disabled={serves >= 20} aria-label="Increase servings" className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg text-ink disabled:opacity-30">+</button>
        </div>
      </div>

      <div className="mt-6 space-y-7">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft/80">{group.title}</h3>
            <ul className="mt-3 space-y-2.5">
              {group.items.map((item) => {
                const key = `${group.title}-${item}`;
                const isChecked = checked.includes(key);
                return (
                  <li key={key}>
                    <button type="button" onClick={() => toggle(key)} aria-pressed={isChecked} className="group flex w-full items-start gap-3 text-left">
                      <span aria-hidden="true" className={`mt-[3px] grid h-[15px] w-[15px] shrink-0 place-items-center rounded-[3px] border transition-colors ${isChecked ? "border-ember bg-ember text-paper" : "border-ink/25 text-transparent group-hover:border-ember/60"}`}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M2 6.4 4.8 9 10 3.2" /></svg>
                      </span>
                      <span className={`text-[13.5px] leading-6 transition-colors ${isChecked ? "text-ink-soft/55 line-through" : "text-ink"}`}>{scaleIngredient(item, factor)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
