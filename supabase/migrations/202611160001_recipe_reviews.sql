-- Murgh shared recipe reviews. Apply with the Supabase SQL editor or CLI.
create table if not exists public.recipe_reviews (
  id uuid primary key default gen_random_uuid(),
  recipe_slug text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  rating smallint not null check (rating between 1 and 5),
  review text check (review is null or char_length(review) <= 1200),
  display_name text check (display_name is null or char_length(display_name) <= 60),
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (recipe_slug, user_id)
);

create index if not exists recipe_reviews_public_recipe_created
  on public.recipe_reviews (recipe_slug, created_at desc)
  where is_published = true;

alter table public.recipe_reviews enable row level security;

drop policy if exists "Published reviews are readable by everyone" on public.recipe_reviews;
create policy "Published reviews are readable by everyone"
  on public.recipe_reviews for select
  using (is_published = true or auth.uid() = user_id);

drop policy if exists "Signed-in users can create their own review" on public.recipe_reviews;
create policy "Signed-in users can create their own review"
  on public.recipe_reviews for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own review" on public.recipe_reviews;
create policy "Users can update their own review"
  on public.recipe_reviews for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete their own review" on public.recipe_reviews;
create policy "Users can delete their own review"
  on public.recipe_reviews for delete
  to authenticated
  using (auth.uid() = user_id);

create or replace function public.set_recipe_review_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists recipe_reviews_updated_at on public.recipe_reviews;
create trigger recipe_reviews_updated_at
before update on public.recipe_reviews
for each row execute function public.set_recipe_review_updated_at();

grant select, insert, update, delete on public.recipe_reviews to anon, authenticated;
