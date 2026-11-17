"use client";

import { useState } from "react";
import { format, type Dictionary } from "@/lib/i18n";

type Group = { title: string; items: string[] };

export function IngredientList({ groups, t }: { groups: Group[]; t: Dictionary }) {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (key: string) =>
    setChecked((current) => (current.includes(key) ? current.filter((item) => item !== key) : [...current, key]));

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
        <h2 className="eyebrow text-ember">{t.ingredients}</h2>
        <span className="text-[11px] text-ink-soft/70">
          {checked.length ? format(t.tickedCount, { count: checked.length }) : t.tickWhatYouHave}
        </span>
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
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      aria-pressed={isChecked}
                      className="group flex w-full items-start gap-3 text-left"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-[3px] grid h-[15px] w-[15px] shrink-0 place-items-center rounded-[3px] border transition-colors ${
                          isChecked ? "border-ember bg-ember text-paper" : "border-ink/25 text-transparent group-hover:border-ember/60"
                        }`}
                      >
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.4">
                          <path d="M2 6.4 4.8 9 10 3.2" />
                        </svg>
                      </span>
                      <span
                        className={`text-[13.5px] leading-6 transition-colors ${
                          isChecked ? "text-ink-soft/55 line-through" : "text-ink"
                        }`}
                      >
                        {item}
                      </span>
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
