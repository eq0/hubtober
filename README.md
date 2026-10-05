# HUBTOBER

The landing page for **HUBTOBER by Tafa3ul Hub**: one thing to learn, discover or try every day of October.

It is a plain static website (no build step). GitHub Pages serves it straight from this repository, so the live link never changes: whatever is on the `main` branch is what people see.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page: layout, styles and script. Rarely changes. |
| `content.js` | **The daily content.** The only file that changes from day to day. |
| `supabase/setup.sql` | One-time setup for the place where مشاركاتكم submissions are stored. |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as they are. |

## How to update HUBTOBER every day

1. **Ask Claude for the new day.** Send the day's content (type, title, description, why, what we get from it, link if there is one). Claude updates `content.js` inside this folder.
2. **Open GitHub Desktop.** The changed file appears on the left under "Changes".
3. **Look at the change.** Green lines are new, red lines were removed.
4. **Commit.** Type a short note in the "Summary" box at the bottom left, for example `Day 06`, then click **Commit to main**.
5. **Push.** Click **Push origin** at the top.

The same live link updates by itself, usually within one to two minutes. If you still see yesterday, refresh the page.

Rules that keep the surprise:

- Never add a day before its date. Everything in `content.js` is public.
- The day with the highest number is shown as today. Earlier days in the file move to "الأيام السابقة" on their own.

## First-time publishing (once)

1. Install [GitHub Desktop](https://desktop.github.com/download/) and sign in with your GitHub account.
2. In GitHub Desktop choose **File → Add Local Repository…**, pick this `hubtober` folder, and click **Add Repository**.
3. Click **Publish repository**. Keep the name `hubtober`, **untick "Keep this code private"**, and click **Publish Repository**.
4. On github.com open the repository, then **Settings → Pages**. Under "Build and deployment" set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, and click **Save**.
5. After a minute the same page shows the live link. It looks like `https://YOUR-USERNAME.github.io/hubtober/`.

That link is permanent. From then on, only the daily steps above are needed.

## مشاركاتكم (submissions)

The form on the page sends each submission to a [Supabase](https://supabase.com) project:

- text, optional name, HUBTOBER day number and the date go into the **`submissions`** table;
- the image goes into the private **`hubtober-submissions`** storage bucket (its path is saved in the row).

To read them, sign in to Supabase and open **Table Editor → submissions** and **Storage → hubtober-submissions**. Nothing is shown on the website.

The form is connected through the two values under `submissions` at the bottom of `content.js` (`supabaseUrl` and `supabaseKey`, both found in Supabase under **Project Settings → API**). The key is a public one and is meant to be visible; the database rules in `supabase/setup.sql` only allow visitors to add a submission, never to read one. While either value is empty the مشاركاتكم section stays hidden.

What the form checks before sending:

- an image or some text is required (either one, or both); the name is optional;
- images must be JPG, PNG or WEBP (HEIC from iPhones is converted), up to 15 MB;
- photos are resized to 1600 px and re-saved as JPEG in the browser, which keeps uploads small and removes location data from the photo.

A public gallery can be added later without changing how submissions are collected; the steps are noted at the end of `supabase/setup.sql`.
