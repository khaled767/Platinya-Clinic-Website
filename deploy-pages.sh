#!/usr/bin/env bash
# ==========================================================================
# Deploy Platinya Clinic to GitHub Pages
# Usage: bash deploy-pages.sh
#
# This script builds the site and pushes the static 'dist/' output to the
# gh-pages branch, then enables Pages (via gh CLI if available).
# ==========================================================================
set -e

echo "🔨 Building production bundle..."
npm run build

REPO_URL="https://github.com/khaled767/Platinya-Clinic-Website.git"

echo "🌿 Preparing gh-pages branch from dist/..."
TMP=$(mktemp -d)
cp -r dist/. "$TMP"/
# Include the 404.html fallback at the site root for SPA safety
cp src/404.html "$TMP"/404.html

cd "$TMP"
git init -q
git checkout -q -b gh-pages
git remote add origin "$REPO_URL"
git add -A
git -c user.name="Platinya Deploy" -c user.email="deploy@platinyaclinic.com" \
  commit -q -m "Deploy Platinya Clinic to GitHub Pages"
git push -f origin gh-pages

echo "✅ Pushed to gh-pages"

# If gh CLI is available, enable Pages from gh-pages
if command -v gh >/dev/null 2>&1; then
  echo "🌐 Enabling GitHub Pages from gh-pages branch..."
  gh api -X POST repos/khaled767/Platinya-Clinic-Website/pages \
    -f "source[branch]=gh-pages" -f "source[path]=/" || \
  gh api repos/khaled767/Platinya-Clinic-Website/pages \
    -X PUT -f "source[branch]=gh-pages" -f "source[path]=/" || \
  echo "⚠️ Could not auto-enable Pages. Enable manually in Settings > Pages > gh-pages."
else
  echo "⚠️ gh CLI not found. Enable Pages manually:"
  echo "   GitHub > Repo > Settings > Pages > Source: Deploy from branch > gh-pages > / (root)"
fi

echo "🌍 Your site will be live at: https://khaled767.github.io/Platinya-Clinic-Website/"
echo "   (Allow GitHub ~1 min after enabling Pages)"
