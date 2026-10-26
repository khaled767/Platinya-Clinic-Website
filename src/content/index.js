// Registry of treatment pages. Each module carries its own copy for every
// language it is published in; tools/prerender.js reads the same list from
// src/data/route-langs.json, and test-links.js fails if the two disagree.

import abdominoplasty from "./abdominoplasty";
import hairTransplant from "./hair-transplant";
import sapphireHairTransplant from "./sapphire-hair-transplant";
import hairImplantHybrid from "./hair-implant-hybrid";
import hairTransplantForWomen from "./hair-transplant-for-women";
import eyebrowTransplant from "./eyebrow-transplant";
import hollywoodSmile from "./hollywood-smile";
import dentalVeneers from "./dental-veneers";
import teethWhitening from "./teeth-whitening";
import dentalImplants from "./dental-implants";
import zirconTeeth from "./zircon-teeth";
import periodontics from "./periodontics";
import faceliftSurgery from "./facelift-surgery";
import chinImplants from "./chin-implants";
import blepharoplasty from "./blepharoplasty";
import silicone from "./silicone";
import buttAugmentationSurgery from "./butt-augmentation-surgery";
import liposuction from "./liposuction";
import gynecomastia from "./gynecomastia";
import gastricSleeveSurgery from "./gastric-sleeve-surgery";
import stomachBalloon from "./stomach-balloon";
import filler from "./filler";
import faceBotox from "./face-botox";

import tr from "./i18n/tr";
import fr from "./i18n/fr";
import es from "./i18n/es";
import it from "./i18n/it";
import ru from "./i18n/ru";

// A language is only advertised for a page when the page actually exists in it.
// The translation tables are merged over the en/ar modules here, so every
// consumer (routes, hreflang, sitemap, language switcher, group links) sees a
// page that is genuinely written in that language — never an English fallback
// behind a /tr/ URL.
const TRANSLATIONS = { tr, fr, es, it, ru };

const BASE = [
  abdominoplasty,
  hairTransplant,
  sapphireHairTransplant,
  hairImplantHybrid,
  hairTransplantForWomen,
  eyebrowTransplant,
  hollywoodSmile,
  dentalVeneers,
  teethWhitening,
  dentalImplants,
  zirconTeeth,
  periodontics,
  faceliftSurgery,
  chinImplants,
  blepharoplasty,
  silicone,
  buttAugmentationSurgery,
  liposuction,
  gynecomastia,
  gastricSleeveSurgery,
  stomachBalloon,
  filler,
  faceBotox,
];

export default BASE.map((page) => {
  const merged = { ...page };
  for (const [lang, table] of Object.entries(TRANSLATIONS)) {
    const copy = table && table[page.slug];
    if (copy) merged[lang] = copy;
  }
  return merged;
});
