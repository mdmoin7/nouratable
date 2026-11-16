"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

type Step = { title: string; body: string };
const quickTimers = [1, 3, 5, 10, 15, 20];

function formatClock(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

export function MethodSteps({ steps, recipeSlug }: { steps: Step[]; recipeSlug: string }) {
  const { t } = useLanguage();
  const [completed, setCompleted] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [cookingMode, setCookingMode] = useState(false);
  const [duration, setDuration] = useState(5);
  const [remaining, setRemaining] = useState(300);
  const [running, setRunning] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const count = steps.length;
  const done = completed.length;
  const isComplete = completed.includes(active);
  const progress = Math.round((done / count) * 100);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`murgh:method:${recipeSlug}`);
      if (saved) {
        const parsed = JSON.parse(saved) as { active?: number; completed?: number[] };
        if (Number.isInteger(parsed.active) && parsed.active! >= 0 && parsed.active! < count) setActive(parsed.active!);
        if (Array.isArray(parsed.completed)) setCompleted(parsed.completed.filter((value) => Number.isInteger(value) && value >= 0 && value < count));
      }
    } catch { /* Ignore invalid or unavailable local storage. */ }
    setLoaded(true);
  }, [count, recipeSlug]);

  useEffect(() => {
    if (loaded) {
      try { localStorage.setItem(`murgh:method:${recipeSlug}`, JSON.stringify({ active, completed })); } catch { /* Storage is optional. */ }
    }
  }, [active, completed, loaded, recipeSlug]);

  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => {
      setRemaining((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (!running || remaining !== 0) return;
    setRunning(false);
    setTimerDone(true);
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Murgh cooking timer", { body: `Timer finished: ${steps[active]?.title ?? "Cooking step"}` });
    }
  }, [active, remaining, running, steps]);

  function chooseDuration(minutes: number) {
    setDuration(minutes);
    setRemaining(minutes * 60);
    setRunning(false);
    setTimerDone(false);
  }
  function reset() {
    setCompleted([]);
    setActive(0);
    setRunning(false);
    chooseDuration(5);
  }
  function next() {
    if (!isComplete) setCompleted((current) => [...current, active]);
    setActive((current) => Math.min(count - 1, current + 1));
  }
  function stepContent(large = false) {
    return <div className={`flex items-start gap-4 ${large ? "md:gap-6" : ""}`}>
      <span className={`display leading-none text-ember/70 ${large ? "text-4xl" : "text-2xl"}`}>{String(active + 1).padStart(2, "0")}</span>
      <div className="min-w-0 flex-1">
        <h3 className={`display leading-snug text-ink ${large ? "text-3xl md:text-5xl" : "text-[23px]"}`}>{steps[active]?.title}</h3>
        <p className={`mt-4 leading-8 text-ink-soft ${large ? "text-base md:text-lg" : "text-[13.5px]"}`}>{steps[active]?.body}</p>
      </div>
    </div>;
  }
  function controls() {
    return <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
      <button type="button" onClick={() => setActive((value) => Math.max(0, value - 1))} disabled={active === 0} className="rounded-full border border-line px-4 py-2.5 text-[11px] font-medium text-ink disabled:opacity-30">← {t("previous")}</button>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setCompleted((current) => current.includes(active) ? current.filter((value) => value !== active) : [...current, active])} aria-pressed={isComplete} className={`rounded-full border px-4 py-2.5 text-[11px] font-medium ${isComplete ? "border-moss bg-moss-soft text-moss" : "border-line text-ink hover:border-ember"}`}>{isComplete ? `✓ ${t("completed")}` : t("markComplete")}</button>
        <button type="button" onClick={next} disabled={active === count - 1} className="rounded-full bg-ember px-5 py-2.5 text-[11px] font-semibold text-paper disabled:opacity-35">{isComplete ? `${t("nextStep")} →` : `${t("markComplete")} & ${t("nextStep")} →`}</button>
      </div>
    </div>;
  }
  function timerPanel() {
    return <div className="mt-6 rounded-[7px] border border-line bg-paper/70 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-[11px] font-semibold text-ink">{t("stepTimer")}</p><p className="mt-0.5 text-[10px] text-ink-soft">Set a reminder for this cooking stage</p></div>
        <output aria-live="off" className="font-mono text-2xl tabular-nums text-ink">{formatClock(remaining)}</output>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {quickTimers.map((minutes) => <button key={minutes} type="button" onClick={() => chooseDuration(minutes)} aria-pressed={duration === minutes} disabled={running} className={`rounded-full border px-3 py-1.5 text-[10px] disabled:opacity-40 ${duration === minutes ? "border-ember bg-ember text-paper" : "border-line text-ink-soft"}`}>{minutes} min</button>)}
        <label className="ml-auto flex items-center gap-2 text-[10px] text-ink-soft">Custom
          <input aria-label="Custom timer minutes" type="number" min={1} max={180} value={duration} disabled={running} onChange={(event) => chooseDuration(Math.min(180, Math.max(1, Number(event.target.value) || 1)))} className="w-14 rounded border border-line bg-card px-2 py-1.5 text-center text-ink"/>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => { setTimerDone(false); setRunning((value) => !value); }} disabled={remaining === 0} className="rounded-full bg-ink px-4 py-2 text-[10px] font-semibold text-paper">{running ? "Pause timer" : "Start timer"}</button>
        <button type="button" onClick={() => { setRunning(false); setRemaining(duration * 60); setTimerDone(false); }} className="rounded-full border border-line px-4 py-2 text-[10px] text-ink">Reset</button>
        {"Notification" in (typeof window === "undefined" ? {} : window) && typeof Notification !== "undefined" && Notification.permission === "default" && <button type="button" onClick={() => void Notification.requestPermission()} className="rounded-full border border-line px-4 py-2 text-[10px] text-ink">Enable alerts</button>}
      </div>
      {timerDone && <p role="status" className="mt-3 text-[11px] font-medium text-moss">Timer complete — check your cooking.</p>}
    </div>;
  }
  return <>
    <section aria-label="Interactive cooking method">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
        <div><h2 className="eyebrow text-ember">Cook along</h2><p className="mt-1 text-[11px] text-ink-soft/70">One step at a time. Your progress is saved on this device.</p></div>
        <span className="text-[11px] tabular-nums text-ink-soft">{done} of {count} completed</span>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-label="Cooking progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><div className="h-full rounded-full bg-ember transition-all duration-300" style={{ width: `${progress}%` }}/></div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">Step {active + 1} / {count}</span>
        <div className="flex gap-4"><button type="button" onClick={() => setCookingMode(true)} className="text-[11px] font-medium text-ember underline underline-offset-4">Open cooking mode</button><button type="button" onClick={reset} className="text-[11px] text-ink-soft underline underline-offset-4 hover:text-ember">Start over</button></div>
      </div>
      <article className="mt-3 rounded-[7px] border border-line bg-card p-5 md:p-7" aria-live="polite">
        {stepContent()}
        {timerPanel()}
        {controls()}
      </article>
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Jump to a cooking step">
        {steps.map((step, index) => <button key={step.title + index} type="button" onClick={() => setActive(index)} aria-current={active === index ? "step" : undefined} aria-label={`Go to step ${index + 1}: ${step.title}`} className={`grid h-8 min-w-8 place-items-center rounded-full border px-2 text-[10px] tabular-nums ${active === index ? "border-ember bg-ember text-paper" : completed.includes(index) ? "border-moss bg-moss-soft text-moss" : "border-line text-ink-soft hover:border-ember"}`}>{completed.includes(index) ? "✓" : index + 1}</button>)}
      </div>
      {done === count && <p className="mt-4 rounded-[6px] bg-moss-soft px-4 py-3 text-[12px] font-medium text-moss">All steps completed. Your dish is ready to serve!</p>}
    </section>
    {cookingMode && <div role="dialog" aria-modal="true" aria-label="Cooking mode" className="fixed inset-0 z-[100] overflow-y-auto bg-paper p-5 md:p-10">
      <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col">
        <header className="flex items-center justify-between gap-4 border-b border-line pb-5"><div><p className="eyebrow text-ember">Murgh · Cooking mode</p><p className="mt-1 text-xs text-ink-soft">Keep your screen nearby and cook one step at a time.</p></div><button type="button" autoFocus onClick={() => setCookingMode(false)} className="rounded-full border border-line px-4 py-2 text-xs text-ink">Exit mode ✕</button></header>
        <div className="my-auto py-10">
          <div className="mb-8 flex items-center justify-between text-xs text-ink-soft"><span>Step {active + 1} of {count}</span><span>{done} completed</span></div>
          <div className="mb-10 h-2 overflow-hidden rounded-full bg-line"><div className="h-full bg-ember transition-all" style={{ width: `${progress}%` }}/></div>
          {stepContent(true)}
          {timerPanel()}
          {controls()}
          <div className="mt-6 flex flex-wrap gap-2">{steps.map((step, index) => <button key={step.title + index} type="button" onClick={() => setActive(index)} aria-label={`Go to step ${index + 1}`} className={`grid h-10 min-w-10 place-items-center rounded-full border px-3 text-xs ${active === index ? "border-ember bg-ember text-paper" : completed.includes(index) ? "border-moss bg-moss-soft text-moss" : "border-line text-ink-soft"}`}>{completed.includes(index) ? "✓" : index + 1}</button>)}</div>
        </div>
        <footer className="border-t border-line pt-4 text-center text-[10px] text-ink-soft">Your progress is saved locally on this device.</footer>
      </div>
    </div>}
  </>;
}
