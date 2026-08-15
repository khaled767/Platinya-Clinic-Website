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

- Built with webpack (static SPA).
- Uses **hash-based routing** so internal pages (`#/services`, `#/about`)
  never 404 under GitHub Pages.
- Asset paths are **relative** (`./bundle…`) so they resolve under the
  `/Platinya-Clinic-Website/` subpath.
- A `404.html` fallback is included for safety.
