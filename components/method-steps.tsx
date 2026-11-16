"use client";

import { useState } from "react";

type Step = { title: string; body: string };

export function MethodSteps({ steps }: { steps: Step[] }) {
  const [completed, setCompleted] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const count = steps.length;
  const done = completed.length;
  const isComplete = completed.includes(active);
  const progress = Math.round((done / count) * 100);

  function toggleCurrent() {
    setCompleted((current) => current.includes(active) ? current.filter((step) => step !== active) : [...current, active]);
  }
  function next() {
    if (!isComplete) setCompleted((current) => [...current, active]);
    setActive((current) => Math.min(count - 1, current + 1));
  }
  function reset() {
    setCompleted([]);
    setActive(0);
  }

  return (
    <section aria-label="Interactive cooking method">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
        <div>
          <h2 className="eyebrow text-ember">Cook along</h2>
          <p className="mt-1 text-[11px] text-ink-soft/70">One step at a time. Mark each step as you go.</p>
        </div>
        <span className="text-[11px] tabular-nums text-ink-soft">{done} of {count} completed</span>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-label="Cooking progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <div className="h-full rounded-full bg-ember transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">Step {active + 1} / {count}</span>
        <button type="button" onClick={reset} className="text-[11px] text-ink-soft underline decoration-line underline-offset-4 hover:text-ember">Start over</button>
      </div>

      <article className="mt-3 rounded-[7px] border border-line bg-card p-5 md:p-7" aria-live="polite">
        <div className="flex items-start gap-4">
          <span className="display text-2xl leading-none text-ember/70">{String(active + 1).padStart(2, "0")}</span>
          <div className="min-w-0 flex-1">
            <h3 className="display text-[23px] leading-snug text-ink">{steps[active]?.title}</h3>
            <p className="mt-3 text-[13.5px] leading-7 text-ink-soft">{steps[active]?.body}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <button type="button" onClick={() => setActive((value) => Math.max(0, value - 1))} disabled={active === 0} className="rounded-full border border-line px-4 py-2 text-[11px] font-medium text-ink disabled:opacity-30">Previous</button>
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={toggleCurrent} aria-pressed={isComplete} className={`rounded-full border px-4 py-2 text-[11px] font-medium transition-colors ${isComplete ? "border-moss bg-moss-soft text-moss" : "border-line text-ink hover:border-ember"}`}>
              {isComplete ? "✓ Completed" : "Mark complete"}
            </button>
            <button type="button" onClick={next} disabled={active === count - 1} className="rounded-full bg-ember px-5 py-2 text-[11px] font-semibold text-paper disabled:opacity-35">
              {isComplete ? "Next step →" : "Complete & continue →"}
            </button>
          </div>
        </div>
      </article>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Jump to a cooking step">
        {steps.map((step, index) => (
          <button key={step.title + index} type="button" onClick={() => setActive(index)} aria-current={active === index ? "step" : undefined} aria-label={`Go to step ${index + 1}: ${step.title}`} className={`grid h-8 min-w-8 place-items-center rounded-full border px-2 text-[10px] tabular-nums transition-colors ${active === index ? "border-ember bg-ember text-paper" : completed.includes(index) ? "border-moss bg-moss-soft text-moss" : "border-line text-ink-soft hover:border-ember"}`}>
            {completed.includes(index) ? "✓" : index + 1}
          </button>
        ))}
      </div>
      {done === count && <p className="mt-4 rounded-[6px] bg-moss-soft px-4 py-3 text-[12px] font-medium text-moss">All steps completed. Your dish is ready to serve!</p>}
    </section>
  );
}
