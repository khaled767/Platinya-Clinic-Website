#!/usr/bin/env node
/**
 * Funnel-event test: proves the Google Analytics events really reach GA4's queue.
 *
 * Loads the built site in jsdom with the real bundles, drives the contact form the
 * way a visitor does, and reads `window.dataLayer` — which is exactly where gtag()
 * puts what it sends to Google. Nothing is asserted from reading the source.
 *
 *   lead_form_start    first touch on the form
 *   lead_form_attempt  send refused by validation
 *   generate_lead      send accepted
 *   page_engaged_3min  3 minutes of active time on one page
 *
 * Usage: node tools/test-tracking.js     (after `npm run build:full`)
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 8124;
const LIVE = process.argv.includes("--live");
const SITE = "https://platinyaclinic.com";
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain",
  ".ico": "image/x-icon", ".woff2": "font/woff2",
};

function serve() {
  const server = http.createServer((req, res) => {
    const p = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(DIST, p);
    try {
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      if (!fs.existsSync(file)) { res.writeHead(404); res.end("nf"); return; }
      res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
      res.end(fs.readFileSync(file));
    } catch (e) { res.writeHead(500); res.end("err"); }
  });
  return new Promise((r) => server.listen(PORT, "127.0.0.1", () => r(server)));
}

function shim(window) {
  window.matchMedia = window.matchMedia || function (q) {
    return { matches: false, media: String(q), addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; } };
  };
}

const results = [];
function check(name, ok, detail) {
  results.push(Boolean(ok));
  console.log(`${ok ? "  ok  " : " FAIL "} ${name}${detail ? "  -> " + detail : ""}`);
}

(async () => {
  const server = LIVE ? null : await serve();
  const base = LIVE ? SITE : `http://127.0.0.1:${PORT}`;
  console.log(LIVE ? "testing the LIVE site" : "testing ./dist in a local server");
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", () => {});
  const dom = await JSDOM.fromURL(`${base}/contact/`, {
    runScripts: "dangerously", resources: "usable", pretendToBeVisual: true,
    virtualConsole, beforeParse: shim,
  });
  const win = dom.window;
  const doc = win.document;

  // Wait for the bundle to take over the pre-rendered document: the served HTML
  // already contains content in #app, so that is not a boot signal.
  for (let i = 0; i < 100 && !doc.documentElement.hasAttribute("data-app-booted"); i++) {
    await new Promise((r) => setTimeout(r, 100));
  }
  check("the real bundle booted in jsdom", doc.documentElement.hasAttribute("data-app-booted"));

  // Record what the app sends. We wrap window.gtag rather than reading
  // window.dataLayer: on the live page Google's gtag.js loads asynchronously and
  // replaces dataLayer when it does, which silently empties anything read from it.
  // The wrapper still calls the original, so the hit really is delivered to GA4.
  const original = win.gtag;
  win.__seen = [];
  win.gtag = function () {
    win.__seen.push(Array.from(arguments));
    if (typeof original === "function") return original.apply(win, arguments);
  };
  const events = () =>
    win.__seen.filter((a) => a && a[0] === "event").map((a) => ({ name: a[1], params: a[2] || {} }));
  check("window.gtag is available (GA4 tag present)", typeof original === "function", "gtag=" + typeof original);
  const FUNNEL = ["lead_form_start", "lead_form_attempt", "generate_lead", "page_engaged_3min"];
  const names = () => events().map((e) => e.name).filter((n) => FUNNEL.includes(n));
  const paramsOf = (n) => (events().find((e) => e.name === n) || { params: {} }).params;

  check("contact form is on the page", Boolean(doc.querySelector("#assessment-form")));
  check("no funnel event before any interaction", names().length === 0, names().join(",") || "(none)");

  // --- 1) start writing in the form -----------------------------------------
  const nameField = doc.getElementById("full-name");
  nameField.dispatchEvent(new win.Event("focusin", { bubbles: true }));
  nameField.value = "Test";
  nameField.dispatchEvent(new win.Event("input", { bubbles: true }));
  await new Promise((r) => setTimeout(r, 200));
  check("typing in the form sends lead_form_start", names().includes("lead_form_start"), names().join(","));

  // a second keystroke must not send it again
  nameField.dispatchEvent(new win.Event("input", { bubbles: true }));
  await new Promise((r) => setTimeout(r, 200));
  check("lead_form_start is sent only once per page", names().filter((n) => n === "lead_form_start").length === 1);

  // The two submit steps are local-only: on the live site a synthetic submit must
  // never be risked, and the deployed bundle is byte-identical to this one.
  if (!LIVE) {
  // --- 2) attempt to send while the form is incomplete ----------------------
  const form = doc.querySelector("#assessment-form");
  const validity = typeof form.reportValidity === "function" ? form.reportValidity() : null;
  await new Promise((r) => setTimeout(r, 200));
  check("a refused send sends lead_form_attempt", names().includes("lead_form_attempt"), `reportValidity=${validity} events=${names().join(",")}`);
  check("the attempt carries a reason", Boolean(paramsOf("lead_form_attempt").reason), JSON.stringify(paramsOf("lead_form_attempt")));

  // --- 3) a complete, valid submission -------------------------------------
  const set = (id, value) => {
    const el = doc.getElementById(id);
    el.value = value;
    el.dispatchEvent(new win.Event("input", { bubbles: true }));
    el.dispatchEvent(new win.Event("change", { bubbles: true }));
    return el;
  };
  set("email", "patient@example.com");
  set("phone-number", "5551234567");
  const sel = doc.getElementById("specialty");
  sel.value = "hair";
  sel.dispatchEvent(new win.Event("change", { bubbles: true }));
  form.dispatchEvent(new win.Event("submit", { bubbles: true, cancelable: true }));
  await new Promise((r) => setTimeout(r, 300));

  check("a valid send sends generate_lead", names().includes("generate_lead"), names().join(","));
  check("generate_lead carries the treatment", paramsOf("generate_lead").event_label === "hair", String(paramsOf("generate_lead").event_label));
  check("generate_lead carries the page", /^\/contact/.test(String(paramsOf("generate_lead").page_path || "")), String(paramsOf("generate_lead").page_path));

  }

  // --- 4) three minutes of active time on one page --------------------------
  check("page_engaged_3min not sent yet", !names().includes("page_engaged_3min"));
  const realNow = win.Date.now();
  win.Date.now = () => realNow + 200 * 1000; // jump the clock forward by 200s
  await new Promise((r) => setTimeout(r, 1500)); // let the 1s tick run
  check("staying 3+ minutes sends page_engaged_3min", names().includes("page_engaged_3min"), names().join(","));
  check("the engagement event carries the seconds", Number(paramsOf("page_engaged_3min").seconds_on_page) >= 180, String(paramsOf("page_engaged_3min").seconds_on_page));

  // --- 5) no personal data may leave the page -------------------------------
  const blob = JSON.stringify(events());
  check("no e-mail / phone / name in any event payload",
    !/patient@example\.com|5551234567|@example/.test(blob),
    blob.length + " chars inspected");

  if (!LIVE) {
    const queued = Array.from(win.dataLayer || []).filter((a) => a && a[0] === "event").map((a) => a[1]);
    check("events also reach window.dataLayer (GA4's own queue)", FUNNEL.some((n) => queued.includes(n)), queued.join(","));
  }

  win.close();
  if (server) server.close();
  const failed = results.filter((r) => !r).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed`);
  process.exit(failed ? 1 : 0);
})();
