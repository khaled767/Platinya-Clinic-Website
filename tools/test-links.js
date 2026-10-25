#!/usr/bin/env node
/**
 * Crawl-budget and indexability guard.
 *
 * The site once linked to every page without its trailing slash ("/ar/services"),
 * which GitHub Pages answers with a 301: 4,600 internal links each cost the
 * crawler a redirect hop, and Search Console reported 105 pages as "Page with
 * redirect". Nothing in the suite noticed.
 *
 * This test reads the built output and fails when:
 *   1. any internal link omits the trailing slash;
 *   2. any internal link points at a page that was never built;
 *   3. a sitemap URL is missing, redirects, or is not self-canonical;
 *   4. a legacy alias leaks into the sitemap, or points at nothing;
 *   5. a sitemap URL has no internal link pointing at it (an orphan Google has
 *      to discover on its own).
 */

const fs = require("fs");
const path = require("path");

const DIST = path.resolve(__dirname, "..", "dist");
const SITE = "https://platinyaclinic.com";

let checks = 0;
let failures = 0;
function check(ok, label, detail) {
  checks += 1;
  if (!ok) failures += 1;
  console.log(`  ${ok ? "ok  " : "FAIL"} ${label}${detail ? `  -> ${detail}` : ""}`);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name === "index.html") out.push(p);
  }
  return out;
}

const files = walk(DIST);
const pagePath = (file) => {
  const rel = path.dirname(file).slice(DIST.length);
  return (rel || "") + "/" || "/";
};
const built = new Set(files.map((f) => pagePath(f) || "/"));

// ---- the sitemap ---------------------------------------------------------
const sitemapXml = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemapPaths = sitemapUrls.map((u) => u.replace(SITE, ""));

console.log("1) Sitemap hygiene");
check(sitemapUrls.length >= 100, "the sitemap is populated", `${sitemapUrls.length} URLs`);
check(sitemapUrls.every((u) => u.startsWith(SITE + "/")), "every URL is absolute and on the canonical host");
check(!sitemapUrls.some((u) => u.includes("?")), "no query-string duplicates (?lang=) are submitted");
check(!sitemapPaths.some((p) => p !== "/" && !p.endsWith("/")), "every sitemap URL ends with /");
check(!sitemapPaths.some((p) => /\/feed\/|\/wp-json\//.test(p)), "no WordPress leftovers are submitted");

// ---- canonical + no redirects inside the sitemap -------------------------
console.log("\n2) Every sitemap URL is a real, self-canonical page");
let notBuilt = 0, notSelfCanonical = 0, redirects = 0;
for (const p of sitemapPaths) {
  if (!built.has(p)) { notBuilt += 1; continue; }
  const html = fs.readFileSync(path.join(DIST, "." + p, "index.html"), "utf8");
  const head = html.slice(0, html.indexOf("<body"));
  const canonical = (head.match(/rel="canonical"\s+href="([^"]+)"/) || [])[1];
  const refresh = /http-equiv="refresh"/i.test(head);
  if (refresh) redirects += 1;
  if (canonical !== SITE + p) notSelfCanonical += 1;
}
check(notBuilt === 0, "every sitemap URL was built", `${notBuilt} missing`);
check(redirects === 0, "no sitemap URL is a redirect stub", `${redirects} redirecting`);
check(notSelfCanonical === 0, "every sitemap URL is self-canonical", `${notSelfCanonical} mismatched`);

// ---- internal links ------------------------------------------------------
console.log("\n3) Internal links cost no redirect");
const linkRe = /href="([^"]+)"/g;
const noSlash = new Map();
const dead = new Map();
const inlinks = new Map();
let total = 0;

for (const file of files) {
  const here = pagePath(file);
  const html = fs.readFileSync(file, "utf8");
  for (const m of html.matchAll(linkRe)) {
    let href = m[1];
    if (/^(https?:|mailto:|tel:|#|javascript:|data:)/.test(href)) continue;
    if (/\.(css|js|webp|png|jpg|jpeg|svg|ico|xml|txt|json)$/i.test(href)) continue;
    href = href.split("#")[0].split("?")[0];
    let p = href.startsWith("./") ? href.slice(1) : href;
    if (!p.startsWith("/")) p = "/" + p;
    total += 1;
    if (p !== "/" && !p.endsWith("/")) {
      noSlash.set(p, (noSlash.get(p) || 0) + 1);
      p += "/";
    }
    inlinks.set(p, (inlinks.get(p) || 0) + 1);
    if (!built.has(p)) dead.set(p, (dead.get(p) || 0) + 1);
  }
}
check(noSlash.size === 0, "every internal link keeps its trailing slash", `${noSlash.size} distinct: ${[...noSlash.keys()].slice(0, 4).join(", ")}`);
check(dead.size === 0, "every internal link points at a built page", `${dead.size} dead: ${[...dead.keys()].slice(0, 4).join(", ")}`);
console.log(`       (${total} internal links across ${files.length} pages)`);

// ---- orphans -------------------------------------------------------------
console.log("\n4) No page is an orphan");
const orphans = sitemapPaths.filter((p) => !inlinks.get(p));
check(orphans.length === 0, "every sitemap URL is linked from somewhere", `${orphans.length} orphans: ${orphans.slice(0, 4).join(", ")}`);

// ---- legacy aliases ------------------------------------------------------
console.log("\n5) Legacy aliases point at live pages and stay out of the sitemap");
const aliases = [...built].filter((p) => !sitemapPaths.includes(p) && p !== "/");
let badAlias = 0, aliasInSitemap = 0;
for (const p of aliases) {
  const html = fs.readFileSync(path.join(DIST, "." + p, "index.html"), "utf8");
  const head = html.slice(0, html.indexOf("<body"));
  const canonical = (head.match(/rel="canonical"\s+href="([^"]+)"/) || [])[1];
  const refresh = /http-equiv="refresh"/i.test(head);
  if (!refresh || !canonical || !built.has(canonical.replace(SITE, ""))) badAlias += 1;
  if (sitemapPaths.includes(p)) aliasInSitemap += 1;
}
check(aliases.length > 0, "the old WordPress URLs are preserved as aliases", `${aliases.length} aliases`);
check(badAlias === 0, "every alias redirects to a real page", `${badAlias} broken`);
check(aliasInSitemap === 0, "no alias is submitted to Google", `${aliasInSitemap} leaked`);

console.log(`\n${checks} checks, ${failures === 0 ? "all link checks passed" : failures + " failed"}`);
process.exit(failures === 0 ? 0 : 1);
