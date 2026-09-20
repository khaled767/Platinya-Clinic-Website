#!/usr/bin/env bash
# Submit every URL in the sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
# Key file must already be live at https://platinyaclinic.com/<key>.txt (IndexNow protocol).
#
# The URL list is read from the PUBLISHED sitemap (not from the repository): the
# sitemap is now generated at build time by tools/prerender.js, so the live file is
# the only authoritative list — it covers all 7 languages (140 URLs).
set -euo pipefail

HOST="platinyaclinic.com"
SITEMAP_URL="https://${HOST}/sitemap.xml"
KEY="$(tr -d '[:space:]' < src/static/indexnow.txt)"
KEY_URL="https://${HOST}/${KEY}.txt"

# 1) wait for the deployed key file to become reachable (GitHub Pages CDN lag)
for i in $(seq 1 12); do
  CODE="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 20 "$KEY_URL" || echo 000)"
  echo "key file check #$i -> HTTP $CODE"
  [ "$CODE" = "200" ] && break
  sleep 15
done

# 2) build the URL list from the published sitemap
SITEMAP="$(curl -sS --max-time 30 "$SITEMAP_URL")"
URLS="$(printf '%s' "$SITEMAP" | python3 -c 'import re,sys; print(",".join(re.findall(r"<loc>([^<]+)</loc>", sys.stdin.read())))')"

if [ -z "$URLS" ]; then
  echo "no URLs found in ${SITEMAP_URL} — aborting" >&2
  exit 1
fi

COUNT=$(( $(echo "$URLS" | tr -cd ',' | wc -c) + 1 ))
echo "submitting ${COUNT} URLs"

# 3) submit
curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_URL}\",\"urlList\":[\"${URLS//,/\\\",\\\"}\"]}" \
  -o /tmp/indexnow_resp.txt -w "IndexNow HTTP %{http_code}\n" || true
echo "--- response body ---"; cat /tmp/indexnow_resp.txt || true
