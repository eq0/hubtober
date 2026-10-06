# HUBTOBER

The landing page for **HUBTOBER by Tafa3ul Hub**: one thing to learn, discover or try every day of October.

It is a plain static website (no build step, no database). GitHub Pages serves it straight from this repository, so the live link never changes: whatever is on the `main` branch is what people see.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page: layout, styles and script. Rarely changes. |
| `content.js` | **The daily content.** The only file that changes from day to day. |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as they are. |

`index.html` loads `content.js`. Both files must stay in the repository, side by side.

## How to update HUBTOBER every day

1. **Ask Claude for the new day.** Send the day's content (type, title, description, why, what we get from it, link if there is one). Claude adds it to `content.js` inside this folder.
2. **Open GitHub Desktop.** The changed file appears on the left under "Changes".
3. **Look at the change.** Green lines are new, red lines were removed.
4. **Commit.** Type a short note in the "Summary" box at the bottom left, for example `Day 06`, then click **Commit to main**.
5. **Push.** Click **Push origin** at the top.

The same live link updates by itself, usually within one to two minutes. If you still see yesterday, refresh the page.

## How the days work

- The day with the highest number in `content.js` is shown as **today**, right under the header.
- Every older day stays in the file and is listed under **التجارب السابقة** at the end of the page, newest first. Visitors can open any of them to read it in full.
- **Never delete or overwrite an older day** when adding a new one. Add the new block on top; yesterday moves down by itself.
- **Never add a day before its date.** Everything in `content.js` is public, so future days stay out of the file until their day comes.

## A note on the preview link

The Claude preview page is only for looking at the design. Do not download it to replace `index.html`: the real files are already in this folder, and the downloaded copy does not read `content.js`.
