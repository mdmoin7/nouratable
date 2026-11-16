"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import type { User } from "@supabase/supabase-js";
import { getSupabase } from "@/lib/supabase";

type Review = { id: string; rating: number; review: string | null; created_at: string; display_name: string | null };
type Props = { recipeSlug: string };

export function RecipeReviews({ recipeSlug }: Props) {
  const supabase = getSupabase();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const loadReviews = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    const { data, error } = await supabase
      .from("recipe_reviews")
      .select("id,rating,review,created_at,display_name")
      .eq("recipe_slug", recipeSlug)
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) setMessage("Reviews are temporarily unavailable.");
    else setReviews((data || []) as Review[]);
    setLoading(false);
  }, [recipeSlug, supabase]);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    let active = true;
    supabase.auth.getUser().then(({ data }) => { if (active) setUser(data.user); });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) setMessage("Email verified. You can now publish your review.");
    });
    void loadReviews();
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, [loadReviews, supabase]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;
    setSending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.href },
    });
    setMessage(error ? error.message : "Check your email for a secure sign-in link.");
    setSending(false);
  }

  async function submitReview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase || !user) return;
    setSending(true);
    const { error } = await supabase.from("recipe_reviews").upsert({
      recipe_slug: recipeSlug,
      user_id: user.id,
      rating,
      review: review.trim() || null,
      display_name: displayName.trim() || null,
      is_published: true,
    }, { onConflict: "recipe_slug,user_id" });
    setMessage(error ? error.message : "Your review is published.");
    if (!error) { setReview(""); await loadReviews(); }
    setSending(false);
  }

  if (!supabase) {
    return <section className="my-12 border-t border-line pt-8"><h2 className="display text-3xl text-ink">Community reviews</h2><p className="mt-3 text-sm text-ink-soft">Shared reviews will appear here once the site owner configures the Supabase project and applies the database migration.</p></section>;
  }

  const average = reviews.length ? reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length : 0;

  return (
    <section className="my-12 border-t border-line pt-8" aria-labelledby="recipe-reviews-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="eyebrow text-ember">Cooked this?</p><h2 id="recipe-reviews-heading" className="display mt-2 text-3xl text-ink">Community reviews</h2></div>
        <p className="text-sm text-ink-soft">{reviews.length ? `★ ${average.toFixed(1)} / 5 · ${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}` : "Be the first to review"}</p>
      </div>

      {!user ? (
        <form onSubmit={signIn} className="mt-6 flex flex-wrap items-end gap-3">
          <label className="min-w-56 flex-1 text-xs text-ink-soft">Email for a secure sign-in link<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded border border-line bg-card px-3 py-2 text-sm text-ink" /></label>
          <button disabled={sending} className="btn btn-ember" type="submit">{sending ? "Sending…" : "Sign in to review"}</button>
        </form>
      ) : (
        <form onSubmit={submitReview} className="mt-6 grid gap-3">
          <p className="text-xs text-ink-soft">Signed in as {user.email}</p>
          <div className="flex items-center gap-2"><label htmlFor="review-rating" className="text-xs text-ink-soft">Your rating</label><select id="review-rating" value={rating} onChange={(event) => setRating(Number(event.target.value))} className="rounded border border-line bg-card px-2 py-1 text-sm">{[5,4,3,2,1].map((n) => <option key={n} value={n}>{n} / 5</option>)}</select></div>
          <label className="text-xs text-ink-soft">Display name (optional)<input value={displayName} onChange={(event) => setDisplayName(event.target.value)} maxLength={60} className="mt-2 block w-full max-w-sm rounded border border-line bg-card px-3 py-2 text-sm text-ink" /></label>
          <label className="text-xs text-ink-soft">Your review (optional)<textarea value={review} onChange={(event) => setReview(event.target.value)} maxLength={1200} rows={4} className="mt-2 block w-full rounded border border-line bg-card px-3 py-2 text-sm text-ink" placeholder="What worked well? Any changes you made?" /></label>
          <div><button disabled={sending} className="btn btn-ember" type="submit">{sending ? "Publishing…" : "Publish review"}</button></div>
        </form>
      )}

      {message && <p role="status" className="mt-3 text-xs text-ink-soft">{message}</p>}
      <div className="mt-8 space-y-5">
        {loading ? <p className="text-sm text-ink-soft">Loading reviews…</p> : reviews.length ? reviews.map((item) => (
          <article key={item.id} className="border-t border-line pt-4">
            <div className="flex flex-wrap justify-between gap-2"><p className="text-sm font-medium text-ink">{item.display_name || "Home cook"} <span className="ml-2 text-saffron">{"★".repeat(item.rating)}{"☆".repeat(5-item.rating)}</span></p><time className="text-xs text-ink-soft" dateTime={item.created_at}>{new Date(item.created_at).toLocaleDateString("en-IN")}</time></div>
            {item.review && <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-ink-soft">{item.review}</p>}
          </article>
        )) : <p className="text-sm text-ink-soft">No published reviews yet.</p>}
      </div>
    </section>
  );
}
