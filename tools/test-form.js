#!/usr/bin/env node
/**
 * Contact-form test — proves the visitor never leaves the page to find out
 * whether their enquiry was sent.
 *
 * A real browser is not available on this host, so the built bundle is booted
 * in jsdom and `fetch` is replaced by a recorder. That is enough to assert the
 * three things the customer complained about:
 *
 *   1. the form posts to formsubmit.co/ajax/… and the page does NOT navigate;
 *   2. "sending…" appears immediately, then the success message replaces it;
 *   3. when the network fails, the old native post is still attempted, so a
 *      lead is never silently dropped.
 *
 * Usage:  node tools/test-form.js        (run after `npm run build:full`)
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 8131;
let failures = 0;
let total = 0;

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".xml": "application/xml", ".woff2": "font/woff2",
};

function check(ok, label, detail) {
  total += 1;
  if (ok) {
    console.log(`  ok   ${label}${detail ? "  -> " + detail : ""}`);
  } else {
    failures += 1;
    console.log(`  FAIL ${label}${detail ? "  -> " + detail : ""}`);
  }
}

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const p = decodeURIComponent(req.url.split("?")[0]);
      let file = path.join(DIST, p);
      try {
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
        if (!fs.existsSync(file)) { res.statusCode = 404; return res.end("not found"); }
        res.setHeader("Content-Type", MIME[path.extname(file)] || "application/octet-stream");
        res.end(fs.readFileSync(file));
      } catch (e) {
        res.statusCode = 500;
        res.end(String(e));
      }
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function boot(url, { fetchMode = "ok" } = {}) {
  const calls = [];
  const errors = [];
  const native = { posts: 0 };
  const vc = new VirtualConsole();
  vc.on("jsdomError", (e) => errors.push(e.message || String(e)));

  const dom = await JSDOM.fromURL(url, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(window) {
      // The interaction layer waits for a real browser; give it one.
      window.IntersectionObserver = class {
        constructor(cb) { this.cb = cb; }
        observe() {} unobserve() {} disconnect() {}
      };
      const realSubmit = window.HTMLFormElement.prototype.submit;
      window.HTMLFormElement.prototype.submit = function () {
        native.posts += 1; // the fallback fired; jsdom cannot really navigate
      };
      window.fetch = (target, init) => {
        // Google Analytics shares this API; only the form endpoint interests us.
        const interesting = /formsubmit\.co/.test(String(target));
        if (interesting) calls.push({ target: String(target), init });
        if (fetchMode === "fail") return Promise.reject(new Error("network down"));
        if (fetchMode === "rejected") {
          return Promise.resolve({
            ok: true, status: 200,
            json: () => Promise.resolve({ success: "false", message: "activation required" }),
          });
        }
        return Promise.resolve({
          ok: true, status: 200,
          json: () => Promise.resolve({ success: "true", message: "sent" }),
        });
      };
    },
  });

  // Wait for the app to paint (router + i18n are async).
  const started = Date.now();
  while (Date.now() - started < 10000) {
    const ready = dom.window.document.documentElement.hasAttribute("data-app-booted");
    if (ready && dom.window.document.querySelector("#assessment-form")) break;
    await new Promise((r) => setTimeout(r, 100));
  }
  // The interaction layer attaches its listeners after the first paint.
  await new Promise((r) => setTimeout(r, 300));
  return { dom, calls, errors, native };
}

function fill(window) {
  const form = window.document.querySelector("#assessment-form");
  form.querySelector('[name="full_name"]').value = "خالد";
  form.querySelector('[name="email"]').value = "khaled@example.com";
  form.querySelector('[name="number_part"]').value = "5551112233";
  const treatment = form.querySelector('[name="treatment"]');
  if (treatment) treatment.value = "dental";
  return form;
}

function submit(window, form) {
  const e = new window.Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(e);
  return e;
}

(async () => {
  const server = await serve();
  const base = `http://127.0.0.1:${PORT}`;

  console.log("\n1) Arabic contact form — sends in place, then confirms");
  {
    const { dom, calls } = await boot(base + "/ar/");
    const w = dom.window;
    const d = w.document;
    const form = fill(w);
    const event = submit(w, form);

    check(event.defaultPrevented, "the submit is intercepted (no page navigation)");
    check(calls.length === 1, "exactly one request is made", `calls=${calls.length}`);
    check(/formsubmit\.co\/ajax\//.test(calls[0] ? calls[0].target : ""),
      "it goes to the AJAX endpoint", calls[0] ? calls[0].target : "(none)");

    const body = calls[0] && calls[0].init && calls[0].init.body;
    const fields = body && typeof body.forEach === "function" ? body : null;
    let sentName = "";
    if (fields) fields.forEach((v, k) => { if (k === "full_name") sentName = v; });
    check(sentName === "خالد", "the visitor's answers are in the payload", sentName || "(missing)");
    check(Boolean(fields) && !fields.has("_captcha"),
      "the hosted captcha is dropped (AJAX mode refuses it)");

    const status = d.querySelector("#form-status");
    check(/جارٍ/.test(status.textContent), "the page says \"sending…\" straight away", JSON.stringify(status.textContent));
    check(status.className.includes("is-sending"), "the sending state is styled", status.className);

    await new Promise((r) => setTimeout(r, 250));
    check(/بنجاح/.test(status.textContent), "the success message replaces it", JSON.stringify(status.textContent));
    check(status.className.includes("is-success"), "success state is styled", status.className);
    check(d.querySelector('[name="full_name"]').value === "", "the form is cleared for the next enquiry");

    const btn = d.querySelector('.btn-submit-luxury');
    check(!btn.disabled && !btn.classList.contains("is-sending"), "the button is usable again");
    dom.window.close();
  }

  console.log("\n2) Turkish page — the same flow speaks Turkish");
  {
    const { dom, calls } = await boot(base + "/tr/");
    const w = dom.window;
    const form = fill(w);
    submit(w, form);
    await new Promise((r) => setTimeout(r, 250));
    const text = w.document.querySelector("#form-status").textContent;
    check(calls.length === 1, "one request", `calls=${calls.length}`);
    check(/gönderildi/i.test(text), "the confirmation is localised", JSON.stringify(text));
    dom.window.close();
  }

  console.log("\n3) Network failure — the old native post is still attempted");
  {
    const { dom, calls, errors, native } = await boot(base + "/ar/", { fetchMode: "fail" });
    const w = dom.window;
    const form = fill(w);
    submit(w, form);
    await new Promise((r) => setTimeout(r, 250));
    check(calls.length === 1, "the AJAX attempt was made", `calls=${calls.length}`);
    check(native.posts === 1, "the browser falls back to a plain form post (lead not lost)",
      `native submits=${native.posts}`);
    const status = w.document.querySelector("#form-status");
    check(!/جارٍ/.test(status.textContent), "no stale \"sending…\" is left behind", status.textContent || "(empty)");
    dom.window.close();
  }

  console.log("\n4) Endpoint rejects the AJAX call — still falls back");
  {
    const { dom, native } = await boot(base + "/ar/", { fetchMode: "rejected" });
    const w = dom.window;
    submit(w, fill(w));
    await new Promise((r) => setTimeout(r, 250));
    check(native.posts === 1, "a refusal from FormSubmit does not dead-end the visitor",
      `native submits=${native.posts}`);
    dom.window.close();
  }

  server.close();
  console.log(`\n${total} checks, ${failures === 0 ? "all form checks passed" : failures + " failed"}`);
  process.exit(failures === 0 ? 0 : 1);
})();
