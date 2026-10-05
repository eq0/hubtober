-- ============================================================================
-- HUBTOBER — storage for the مشاركاتكم form
--
-- Run this ONCE in the Supabase dashboard:  SQL Editor → New query → paste → Run.
-- It is safe to run again; nothing is duplicated or deleted.
--
-- What it creates
--   1. a table "submissions"            one row per submission
--   2. a PRIVATE image folder (bucket)  "hubtober-submissions"
--   3. rules: visitors of the website may ADD a submission and nothing else.
--      They cannot read, change or delete anything. Only people signed in to
--      this Supabase project (the team) can see the submissions.
-- ============================================================================

-- 1. The table ---------------------------------------------------------------
create table if not exists public.submissions (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),          -- submission date and time
  day         smallint    not null check (day between 1 and 31),   -- HUBTOBER day number
  name        text        check (char_length(name) <= 80),         -- optional
  message     text        check (char_length(message) <= 1000),    -- optional text
  image_path  text        check (char_length(image_path) <= 200),  -- optional: file path inside the bucket
  approved    boolean     not null default false,          -- for a future public gallery
  constraint submissions_not_empty
    check (nullif(btrim(coalesce(message, '')), '') is not null or image_path is not null)
);

comment on table public.submissions is 'HUBTOBER participation form (مشاركاتكم). Insert-only for website visitors.';

-- 2. Rules for the table -----------------------------------------------------
alter table public.submissions enable row level security;

revoke all on public.submissions from anon;
grant insert (day, name, message, image_path) on public.submissions to anon;

drop policy if exists "Visitors can add a submission" on public.submissions;
create policy "Visitors can add a submission"
  on public.submissions
  for insert
  to anon
  with check (approved = false);

-- (No select / update / delete policy for visitors: they cannot read anything.)

-- 3. The private image folder ------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'hubtober-submissions',
  'hubtober-submissions',
  false,                                   -- private: images are not reachable by link
  5242880,                                 -- 5 MB per image (the site resizes photos before sending)
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 4. Rules for the image folder ----------------------------------------------
drop policy if exists "Visitors can upload a submission image" on storage.objects;
create policy "Visitors can upload a submission image"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'hubtober-submissions');

-- (No select / update / delete policy for visitors on the bucket either.)

-- ============================================================================
-- LATER — a public gallery (do NOT run now)
--
-- When you want to show selected submissions on the website:
--   1. In the Table Editor, set approved = true on the rows you want to show.
--   2. Run:
--        grant select (id, created_at, day, name, message, image_path)
--          on public.submissions to anon;
--        create policy "Visitors can read approved submissions"
--          on public.submissions for select to anon using (approved = true);
--   3. Ask for the gallery section to be added to index.html. Images stay in
--      the private bucket and are shown through short-lived signed links, or
--      the approved ones are copied to a separate public bucket.
-- ============================================================================
