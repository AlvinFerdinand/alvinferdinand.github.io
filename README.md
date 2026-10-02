# alvinferdinand.github.io

Personal portfolio. Plain HTML, CSS and ~30 lines of JavaScript — no build
step, no framework, no dependencies.

- `index.html` — all the content
- `styles.css` — hand-written, dark by default with a light toggle
- `main.js` — theme toggle only

## Deploying

**GitHub Pages** (already live): Settings → Pages → deploy from `main` / root.

**Netlify**: New site → import from Git → pick this repo → leave the build
command empty and the publish directory as `/`. The contact form works
automatically there (Netlify Forms picks up `data-netlify="true"`).

## Editing

Everything is in `index.html` in plain markup. The contact form posts to
Netlify Forms; on GitHub Pages it will not submit, so the email and phone
fallbacks below it stay important.
