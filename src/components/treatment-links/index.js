// "Detailed treatment pages" block.
//
// Every treatment page needs an inbound link from its own group page, or it is
// an orphan: in the sitemap, reachable by Google only through the XML file, with
// no internal path to it. This renders the children of the group the visitor is
// already on, in the language they are reading — and stays silent when a group
// has no translated pages yet.
import { t, getLang, localizedHref } from "../../i18n";
import treatments from "../../content";
import ROUTE_LANGS from "../../data/route-langs.json";

function firstSentence(text, max = 150) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).replace(/[،,.;؛]$/, "") + "…";
}

// A treatment already linked from a row in the page body must not be repeated in
// this block: the group page would show the same procedure twice and look like a
// duplicate. The block exists only for treatments the page has no row for.
const ALREADY_LINKED = {
  "/hair": ["hair-transplant", "eyebrow-transplant"],
  "/dental": ["hollywood-smile", "dental-veneers", "zircon-teeth", "dental-implants"],
  "/plastic": ["facelift-surgery", "blepharoplasty"],
  "/plastic-body": ["abdominoplasty", "silicone", "liposuction", "butt-augmentation-surgery"],
  "/bariatric": ["gastric-sleeve-surgery", "stomach-balloon"],
  "/aesthetics": ["filler", "face-botox"],
};

export default function treatmentLinks(groupHref) {
  const lang = getLang();
  const pages = treatments.filter(
    (content) =>
      content.group &&
      content.group.href === groupHref &&
      !(ALREADY_LINKED[groupHref] || []).includes(content.slug.replace(/^\//, "")) &&
      (ROUTE_LANGS[content.slug] || []).includes(lang)
  );

  if (!pages.length) return "";

  return `
    <section class="tr-index">
      <div class="container">
        <h2 class="tr-index-title">${t("tr.explore")}</h2>
        <div class="tr-cards">
          ${pages
            .map((content, i) => {
              const copy = content[lang] || content.en;
              return `
            <a class="tr-card tr-card-link" href="${localizedHref(content.slug, lang)}" data-route>
              <span class="tr-card-num">${String(i + 1).padStart(2, "0")}</span>
              <h3 class="tr-card-title">${copy.title}</h3>
              <p class="tr-card-text">${firstSentence(copy.lead)}</p>
              <span class="tr-card-more">${t("tr.more")}</span>
            </a>`;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}
