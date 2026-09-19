#!/usr/bin/env bash
# Platinya Clinic — live-site health digest.
#
# Prints a DETERMINISTIC snapshot of the published site (no timestamps) so it can
# be used as a cron `monitor`: when the output is byte-identical to the previous
# tick nothing changed and no agent run is needed; the moment anything differs
# (a 404, a lost stylesheet, a broken redirect, a changed title/canonical) the
# agent wakes up with the diff.
#
# Usage:  bash tools/site-health.sh

set -uo pipefail
HOST="https://platinyaclinic.com"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"

ROUTES="/ /services/ /about/ /hospitals/ /testimonials/ /contact/ /hair/ /dental/ /plastic/ /plastic-body/ /bariatric/ /aesthetics/ /concierge/ /hotel/ /airport/ /transfers/ /interpreter/ /privacy-policy/ /terms/ /privacy/"

echo "HOST $HOST"
echo "UA Googlebot-like"
echo

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

echo "== ROUTES (status | stylesheet-in-head | canonical | title) =="
for r in $ROUTES; do
  code="$(curl -sS -A "$UA" --max-time 30 -o "$tmp/p.html" -w '%{http_code}' "$HOST$r" || echo 000)"
  line="$(python3 - "$tmp/p.html" <<'PY'
import re, sys, html, os
p = sys.argv[1]
if not os.path.exists(p) or os.path.getsize(p) == 0:
    print("EMPTY||"); raise SystemExit
h = open(p, encoding="utf-8", errors="ignore").read()
head = h[:h.lower().find("</head>")] if "</head>" in h.lower() else h[:5000]
style = "yes" if re.search(r'<link[^>]*href="\./styles\.[^"]+\.css"[^>]*>', head) else "NO"
canon = re.search(r'<link rel="canonical" href="([^"]+)"', h)
title = re.search(r"<title>(.*?)</title>", h, re.S)
print("%s|%s|%s" % (
    style,
    canon.group(1) if canon else "none",
    html.unescape(title.group(1).strip())[:80] if title else "NO-TITLE",
))
PY
)"
  printf '%-18s %s | %s\n' "$r" "$code" "$line"
done

echo
echo "== ASSETS referenced by the homepage =="
curl -sS -A "$UA" --max-time 30 -o "$tmp/home.html" "$HOST/" || true
python3 - "$tmp/home.html" "$HOST" > "$tmp/assets.txt" <<'PY'
import re, sys, subprocess
h = open(sys.argv[1], encoding="utf-8", errors="ignore").read()
host = sys.argv[2]
refs = sorted(set(re.findall(r'(?:src|href)="\./([^"]+\.(?:js|css))"', h)))
for ref in refs:
    out = subprocess.run(
        ["curl", "-sS", "-o", "/dev/null", "-w", "%{http_code} %{size_download}",
         "--max-time", "30", f"{host}/{ref}"],
        capture_output=True, text=True).stdout.strip()
    print(f"{ref} -> {out}")
PY
cat "$tmp/assets.txt"

echo
echo "== SITEMAP / ROBOTS =="
curl -sS -A "$UA" --max-time 30 -o "$tmp/sitemap.xml" -w 'sitemap.xml -> %{http_code}\n' "$HOST/sitemap.xml"
curl -sS -A "$UA" --max-time 30 -o "$tmp/robots.txt" -w 'robots.txt -> %{http_code}\n' "$HOST/robots.txt"
python3 - "$tmp/sitemap.xml" "$tmp/robots.txt" <<'PY'
import re, sys
x = open(sys.argv[1], encoding="utf-8", errors="ignore").read()
locs = re.findall(r"<loc>([^<]+)</loc>", x)
print(f"sitemap urls={len(locs)} hreflang={len(re.findall('hreflang=', x))}")
r = open(sys.argv[2], encoding="utf-8", errors="ignore").read()
print("robots allows-root=%s blocks-docs=%s has-sitemap=%s" % (
    "yes" if re.search(r"Allow: /$", r, re.M) else "NO",
    "yes" if "01_Project_Management" in r else "NO",
    "yes" if "sitemap.xml" in r else "NO"))
PY

echo
echo "== CANONICALISATION INVARIANTS =="
for probe in "$HOST/hair" "$HOST/zzz-not-real/" "https://www.platinyaclinic.com/hair/"; do
  res="$(curl -sS -A "$UA" -o /dev/null -L --max-time 30 -w '%{http_code} <- %{url_effective}' "$probe" 2>/dev/null)"
  printf '%-46s %s\n' "$probe" "$res"
done
