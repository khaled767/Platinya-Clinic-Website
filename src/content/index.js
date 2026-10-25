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

export default [
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
