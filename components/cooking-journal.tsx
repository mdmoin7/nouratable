"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Recipe } from "@/lib/recipes";

type Entry = { id: string; recipeSlug: string; recipeName: string; cookedOn: string; notes: string };
const journalKey = "murgh:cooking-journal";
const notesKey = (slug: string) => `murgh:cook-notes:${slug}`;

export function RecipeJournalWidget({ recipeSlug, recipeName }: { recipeSlug: string; recipeName: string }) {
  const [notes, setNotes] = useState("");
  const [cookedOn, setCookedOn] = useState("");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      setNotes(localStorage.getItem(notesKey(recipeSlug)) || "");
      setCookedOn(new Date().toLocaleDateString("en-CA"));
      const entries = JSON.parse(localStorage.getItem(journalKey) || "[]");
      setCount(Array.isArray(entries) ? entries.filter((entry) => entry?.recipeSlug === recipeSlug).length : 0);
    } catch { /* Journal storage is optional. */ }
  }, [recipeSlug]);
  function saveNotes(value: string) {
    setNotes(value);
    try { localStorage.setItem(notesKey(recipeSlug), value); } catch { /* Session state remains editable. */ }
  }
  function logCook() {
    if (!cookedOn) { setMessage("Choose the date you cooked this recipe"); return; }
    try {
      const stored = JSON.parse(localStorage.getItem(journalKey) || "[]");
      const entries: Entry[] = Array.isArray(stored) ? stored : [];
      const entry: Entry = { id: `${Date.now()}-${recipeSlug}`, recipeSlug, recipeName, cookedOn, notes: notes.trim() };
      localStorage.setItem(journalKey, JSON.stringify([entry, ...entries].slice(0, 100)));
      window.dispatchEvent(new Event("murgh:journal-updated"));
      setCount((value) => value + 1);
      setMessage("Cook recorded in your private journal");
    } catch { setMessage("Could not save the journal entry on this device"); }
  }
  return <section className="mt-10 border-t border-line pt-7 print:hidden" aria-labelledby="cooking-journal-heading">
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2 id="cooking-journal-heading" className="eyebrow text-ember">Your cooking journal</h2>
      <Link href="/cooking-journal" className="text-xs font-medium text-ember underline underline-offset-4">View journal ({count})</Link>
    </div>
    <p className="mt-2 text-xs leading-5 text-ink-soft">Keep private notes about changes you made, what worked, and what you would do differently next time.</p>
    <label className="mt-4 block text-xs font-medium text-ink" htmlFor="cook-date">Date cooked</label>
    <input id="cook-date" type="date" value={cookedOn} onChange={(event) => setCookedOn(event.target.value)} className="mt-2 min-h-11 rounded border border-line bg-card px-3 py-2 text-sm text-ink" />
    <label className="mt-4 block text-xs font-medium text-ink" htmlFor="cook-notes">Your notes</label>
    <textarea id="cook-notes" value={notes} onChange={(event) => saveNotes(event.target.value)} rows={4} placeholder="e.g. Used less chilli, cooked the gravy for 5 minutes longer…" className="mt-2 w-full rounded border border-line bg-card p-3 text-sm leading-6 text-ink placeholder:text-ink-soft/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember" />
    <button type="button" onClick={logCook} className="btn btn-dark mt-3">Log this cook</button>
    {message && <p role="status" className="mt-3 text-xs text-ink-soft">{message}</p>}
  </section>;
}

export function CookingJournal({ recipes }: { recipes: Recipe[] }) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const read = () => {
      try {
        const value = JSON.parse(localStorage.getItem(journalKey) || "[]");
        setEntries(Array.isArray(value) ? value.filter((entry) => entry && typeof entry.id === "string" && typeof entry.recipeSlug === "string") : []);
      } catch { setEntries([]); }
      setLoaded(true);
    };
    read();
    window.addEventListener("storage", read);
    window.addEventListener("murgh:journal-updated", read);
    return () => { window.removeEventListener("storage", read); window.removeEventListener("murgh:journal-updated", read); };
  }, []);
  const known = new Map(recipes.map((recipe) => [recipe.slug, recipe]));
  if (!loaded) return <p role="status" className="py-12 text-sm text-ink-soft">Loading your cooking journal…</p>;
  return entries.length ? <div className="space-y-4">
    {entries.map((entry) => <article key={entry.id} className="rounded-[6px] border border-line bg-card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="display text-xl text-ink">{entry.recipeName}</h2>
        <time className="text-xs text-ink-soft" dateTime={entry.cookedOn}>{new Date(`${entry.cookedOn}T12:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
      </div>
      {entry.notes && <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-ink-soft">{entry.notes}</p>}
      {known.has(entry.recipeSlug) && <Link href={`/recipes/${entry.recipeSlug}`} className="mt-4 inline-block text-xs font-medium text-ember underline underline-offset-4">Open recipe</Link>}
      <button type="button" onClick={() => { const next = entries.filter((item) => item.id !== entry.id); setEntries(next); try { localStorage.setItem(journalKey, JSON.stringify(next)); } catch { /* Optional storage. */ } }} className="ml-4 text-xs text-ink-soft underline underline-offset-4">Remove entry</button>
    </article>)}
    <button type="button" onClick={() => { setEntries([]); try { localStorage.removeItem(journalKey); } catch { /* Optional storage. */ } }} className="text-xs font-semibold uppercase tracking-wider text-ember">Clear journal</button>
  </div> : <div className="rounded-[6px] border border-dashed border-line bg-card px-6 py-16 text-center">
    <p className="display text-2xl text-ink">Your journal is empty</p>
    <p className="mt-2 text-[13px] text-ink-soft">Open a recipe and log your first cook to start building a personal record.</p>
    <Link href="/recipes" className="btn btn-dark mt-6">Browse recipes</Link>
  </div>;
}
