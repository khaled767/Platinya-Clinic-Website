#!/usr/bin/env bash
# Submit every URL in the sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
# Key file must already be live at https://platinyaclinic.com/<key>.txt (IndexNow protocol).
set -euo pipefail

HOST="platinyaclinic.com"
KEY="$(tr -d '[:space:]' < src/static/indexnow.txt)"
KEY_URL="https://${HOST}/${KEY}.txt"

# 1) wait for the deployed key file to become reachable (GitHub Pages CDN lag)
for i in $(seq 1 12); do
  CODE="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 20 "$KEY_URL" || echo 000)"
  echo "key file check #$i -> HTTP $CODE"
  [ "$CODE" = "200" ] && break
  sleep 15
done

# 2) build the URL list from the sitemap
URLS="$(python3 - <<'PY'
import re
xml = open("src/static/sitemap.xml", encoding="utf-8").read()
print(",".join(re.findall(r"<loc>([^<]+)</loc>", xml)))
PY
)"

COUNT=$(( $(echo "$URLS" | tr -cd ',' | wc -c) + 1 ))
echo "submitting ${COUNT} URLs"

# 3) submit
curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_URL}\",\"urlList\":[\"${URLS//,/\",\"}\"]}" \
  -o /tmp/indexnow_resp.txt -w "IndexNow HTTP %{http_code}\n" || true
echo "--- response body ---"; cat /tmp/indexnow_resp.txt || true
