"use client";

import { useEffect, useState } from "react";

type Props = { recipeSlug: string; recipeName: string; speechText: string };

export function RecipeTools({ recipeSlug, recipeName, speechText }: Props) {
  const [rating, setRating] = useState(0);
  const [saved, setSaved] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  useEffect(() => {
    try {
      setRating(Number(localStorage.getItem(`murgh:rating:${recipeSlug}`) || 0));
      setSaved(localStorage.getItem(`murgh:saved:${recipeSlug}`) === "true");
    } catch { /* Storage may be disabled. */ }
    return () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); };
  }, [recipeSlug]);

  async function shareRecipe() {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: recipeName, text: `Cook ${recipeName} with Murgh`, url });
      else {
        await navigator.clipboard.writeText(url);
        setShareMessage("Recipe link copied");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") setShareMessage("Could not share this link");
    }
  }

  function toggleSpeech() {
    if (!("speechSynthesis" in window)) { setShareMessage("Text-to-speech is not supported in this browser"); return; }
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = "en-IN";
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  function setRecipeRating(value: number) {
    setRating(value);
    try { localStorage.setItem(`murgh:rating:${recipeSlug}`, String(value)); } catch { /* Storage may be disabled. */ }
  }

  function toggleSaved() {
    const next = !saved;
    setSaved(next);
    try { localStorage.setItem(`murgh:saved:${recipeSlug}`, String(next)); } catch { /* Storage may be disabled. */ }
  }

  return (
    <section aria-label="Recipe actions" className="my-7 flex flex-wrap items-center gap-3 border-y border-line py-4 print:hidden">
      <button type="button" onClick={shareRecipe} className="btn btn-ghost">Share recipe</button>
      <button type="button" onClick={() => window.print()} className="btn btn-ghost">Print recipe</button>
      <button type="button" onClick={toggleSpeech} className="btn btn-ghost">{speaking ? "Stop reading" : "Read aloud"}</button>
      <button type="button" onClick={toggleSaved} className="btn btn-ghost">{saved ? "Saved on this device ✓" : "Save recipe"}</button>
      <div className="flex items-center gap-1 text-sm" aria-label="Rate this recipe">
        <span className="mr-1 text-xs text-ink-soft">Your rating</span>
        {[1, 2, 3, 4, 5].map((value) => (
          <button key={value} type="button" onClick={() => setRecipeRating(value)} aria-label={`Rate ${value} out of 5`} aria-pressed={rating === value} className={`text-xl ${value <= rating ? "text-saffron" : "text-ink-soft/40"}`}>★</button>
        ))}
      </div>
      {shareMessage && <p role="status" className="w-full text-xs text-ink-soft">{shareMessage}</p>}
      <p className="w-full text-[10px] text-ink-soft/70">Ratings and saved status are stored only on this device. They are not public reviews.</p>
    </section>
  );
}
