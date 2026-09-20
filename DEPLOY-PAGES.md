# Deploying Platinya Clinic to GitHub Pages

This project uses **GitHub Actions** to build and publish the site to
GitHub Pages automatically on every push to `main`. No personal token is
needed — Actions uses the built-in `GITHUB_TOKEN`.

---

## One-time setup (do this once)

### 1. Make sure the workflow file is in the repo

The file must live at exactly:

```
.github/workflows/deploy.yml
```

It ships with this project, so as long as the folder is pushed to GitHub it
will be active. **Do NOT just download it** — it only runs when it is inside
the repository on GitHub.

### 2. Push the code to GitHub

From your laptop, inside the project folder:

```bash
git add .
git commit -m "Add GitHub Pages Actions deployment"
git push origin main
```

### 3. Tell GitHub Pages to use "GitHub Actions"

1. Open https://github.com/khaled767/Platinya-Clinic-Website
2. Go to **Settings → Pages** (left sidebar).
3. Under **Build and deployment**, set **Source = GitHub Actions**.
4. Nothing else to configure — the workflow now owns publishing.

### 4. Run once / check status

- The workflow runs automatically on push.
- To run it manually: **Actions → Deploy to GitHub Pages → Run workflow**.
- Watch the run at: *Actions → Deploy to GitHub Pages*.

After the first successful run, the site is live at:

```
https://khaled767.github.io/Platinya-Clinic-Website/
```

> Note: GitHub can take ~1 minute to show a freshly-published site.

---

## How to update the site later

Just push new changes to `main` — the workflow rebuilds and republishes
automatically.

```bash
git add .
git commit -m "Update site"
git push origin main
```

## Notes on the site itself

- Built with webpack (static SPA) and **pre-rendered to real HTML files** by
  `tools/prerender.js` (`npm run build:full`): every route exists as
  `/route/index.html`, so crawlers get finished HTML and visitors get clean URLs
  (`/hair/`, `/services/`, …) instead of `#/hash` links.
- **7 languages as path prefixes**: English at the root, the others under
  `/<lang>/` — `/ar/dental/`, `/ru/hair/`, … Each one is its own pre-rendered file
  with `<html lang>`/`dir`, translated copy, a self-referencing canonical and an
  hreflang cluster. Query-string languages (`?lang=ar`) are still accepted for old
  links, but they cannot be indexed on a static host (the file served for
  `/dental/?lang=ar` was byte-identical to the English page), so they are no longer
  advertised anywhere.
- `dist/sitemap.xml` is **generated at build time** (140 URLs × hreflang +
  `lastmod`) — do not edit it by hand. `robots.txt` and the verification files are
  still static sources in `src/static/`.
- Every deploy announces the sitemap to **IndexNow** (Bing, Yandex, Seznam, Naver)
  via the `notify-indexnow` job, and Google Analytics 4 reports the enquiry funnel
  (`lead_form_start` → `lead_form_attempt` → `generate_lead`).
- Asset paths are **relative** (`./bundle…`) with `<base href="/">` on sub-pages,
  so they resolve both on the custom domain and under
  `/Platinya-Clinic-Website/`.
- `dist/404.html` is the pre-rendered not-found page, marked `noindex`.
- Verify before pushing:
  ```bash
  npm run build:full     # build + pre-render (all languages)
  npm test               # site + tracking checks against ./dist
  npm run test:live      # the same checks against the deployed site
  bash tools/site-health.sh   # deterministic digest of the live site
  ```
  `PRERENDER_LANGS=en,ar npm run prerender` pre-renders a subset (fast local loop).
