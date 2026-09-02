// Phone country resolver: maps a typed country phone code (e.g. "+963",
// "00963"), or a country name (EN + localized aliases), to { flag, dial, cc }.
// Used by the contact/assessment form "country code" smart input.
const COUNTRIES = [
  { cc: "+963", ccn: "963", dial: "+963", flag: "🇸🇾", names: ["syria", "surya", "سوريا", "сүрия", "سورية"] },
  { cc: "+90",  ccn: "90",  dial: "+90",  flag: "🇹🇷", names: ["turkey", "türkiye", "turkiye", "تركيا", "تürkiye", "турция"] },
  { cc: "+49",  ccn: "49",  dial: "+49",  flag: "🇩🇪", names: ["germany", "deutschland", "المانيا", "ألمانيا", "германия"] },
  { cc: "+44",  ccn: "44",  dial: "+44",  flag: "🇬🇧", names: ["uk", "united kingdom", "britain", "england", "британия", "المملكة المتحدة"] },
  { cc: "+33",  ccn: "33",  dial: "+33",  flag: "🇫🇷", names: ["france", "فرنسا", "франция"] },
  { cc: "+34",  ccn: "34",  dial: "+34",  flag: "🇪🇸", names: ["spain", "españa", "اسبانيا", "أسبانيا", "испания"] },
  { cc: "+39",  ccn: "39",  dial: "+39",  flag: "🇮🇹", names: ["italy", "italia", "ايطاليا", "إيطاليا", "италия"] },
  { cc: "+31",  ccn: "31",  dial: "+31",  flag: "🇳🇱", names: ["netherlands", "holland", "هولندا", "нидерланды"] },
  { cc: "+46",  ccn: "46",  dial: "+46",  flag: "🇸🇪", names: ["sweden", "sverige", "السويد", "швеция"] },
  { cc: "+32",  ccn: "32",  dial: "+32",  flag: "🇧🇪", names: ["belgium", "belgique", "بلجيكا", "бельгия"] },
  { cc: "+43",  ccn: "43",  dial: "+43",  flag: "🇦🇹", names: ["austria", "österreich", "austria", "النمسا", "австрия"] },
  { cc: "+41",  ccn: "41",  dial: "+41",  flag: "🇨🇭", names: ["switzerland", "suisse", "سويسرا", "швейцария"] },
  { cc: "+48",  ccn: "48",  dial: "+48",  flag: "🇵🇱", names: ["poland", "polska", "بولندا", "польша"] },
  { cc: "+30",  ccn: "30",  dial: "+30",  flag: "🇬🇷", names: ["greece", "ellada", "اليونان", "греция"] },
  { cc: "+351", ccn: "351", dial: "+351", flag: "🇵🇹", names: ["portugal", "البرتغال", "португалия"] },
  { cc: "+353", ccn: "353", dial: "+353", flag: "🇮🇪", names: ["ireland", "ايرلندا", "ирландия"] },
  { cc: "+36",  ccn: "36",  dial: "+36",  flag: "🇭🇺", names: ["hungary", "magyar", "المجر", "венгрия"] },
  { cc: "+40",  ccn: "40",  dial: "+40",  flag: "🇷🇴", names: ["romania", "رومانيا", "румыния"] },
  { cc: "+45",  ccn: "45",  dial: "+45",  flag: "🇩🇰", names: ["denmark", "denmark", "الدنمارك", "дания"] },
  { cc: "+47",  ccn: "47",  dial: "+47",  flag: "🇳🇴", names: ["norway", "norge", "النرويج", "норвегия"] },
  { cc: "+358", ccn: "358", dial: "+358", flag: "🇫🇮", names: ["finland", "suomi", "فنلندا", "финляндия"] },
  { cc: "+971", ccn: "971", dial: "+971", flag: "🇦🇪", names: ["uae", "emirates", "الامارات", "إمارات", "الإمارات", "оаэ"] },
  { cc: "+966", ccn: "966", dial: "+966", flag: "🇸🇦", names: ["saudi", "saudi arabia", "السعودية", "السعوديه", "саудовская аравия"] },
  { cc: "+974", ccn: "974", dial: "+974", flag: "🇶🇦", names: ["qatar", "قطر", "катар"] },
  { cc: "+965", ccn: "965", dial: "+965", flag: "🇰🇼", names: ["kuwait", "الكويت", "кувейт"] },
  { cc: "+973", ccn: "973", dial: "+973", flag: "🇧🇭", names: ["bahrain", "البحرين", "бахрейн"] },
  { cc: "+968", ccn: "968", dial: "+968", flag: "🇴🇲", names: ["oman", "عمان", "оман"] },
  { cc: "+962", ccn: "962", dial: "+962", flag: "🇯🇴", names: ["jordan", "الاردن", "الأردن", "иордания"] },
  { cc: "+961", ccn: "961", dial: "+961", flag: "🇱🇧", names: ["lebanon", "لبنان", "ливан"] },
  { cc: "+20",  ccn: "20",  dial: "+20",  flag: "🇪🇬", names: ["egypt", "مصر", "египет"] },
  { cc: "+212", ccn: "212", dial: "+212", flag: "🇲🇦", names: ["morocco", "maroc", "المغرب", "марроко"] },
  { cc: "+213", ccn: "213", dial: "+213", flag: "🇩🇿", names: ["algeria", "algerie", "الجزائر", "алжир"] },
  { cc: "+216", ccn: "216", dial: "+216", flag: "🇹🇳", names: ["tunisia", "تونس", "тунис"] },
  { cc: "+218", ccn: "218", dial: "+218", flag: "🇱🇾", names: ["libya", "ليبيا", "ливия"] },
  { cc: "+1",   ccn: "1",   dial: "+1",   flag: "🇺🇸", names: ["usa", "united states", "america", "امريكا", "أمريكا", "сша"] },
  { cc: "+1",   ccn: "1",   dial: "+1",   flag: "🇨🇦", names: ["canada", "كندا", "канада"] },
  { cc: "+7",   ccn: "7",   dial: "+7",   flag: "🇷🇺", names: ["russia", "russian", "روسيا", "روسیه", "россия"] },
  { cc: "+380", ccn: "380", dial: "+380", flag: "🇺🇦", names: ["ukraine", "اوكرانيا", "أوكرانيا", "украина"] },
  { cc: "+98",  ccn: "98",  dial: "+98",  flag: "🇮🇷", names: ["iran", "ايران", "إيران", "иран"] },
  { cc: "+964", ccn: "964", dial: "+964", flag: "🇮🇶", names: ["iraq", "العراق", "ирак"] },
  { cc: "+967", ccn: "967", dial: "+967", flag: "🇾🇪", names: ["yemen", "اليمن", "йемен"] },
  { cc: "+972", ccn: "972", dial: "+972", flag: "🇮🇱", names: ["israel", "اسرائيل", "إسرائيل", "израиль"] },
  { cc: "+91",  ccn: "91",  dial: "+91",  flag: "🇮🇳", names: ["india", "الهند", "индия"] },
  { cc: "+86",  ccn: "86",  dial: "+86",  flag: "🇨🇳", names: ["china", "الصين", "китай"] },
  { cc: "+81",  ccn: "81",  dial: "+81",  flag: "🇯🇵", names: ["japan", "اليابان", "япония"] },
  { cc: "+7",   ccn: "7",   dial: "+7",   flag: "🇰🇿", names: ["kazakhstan", "كازاخستان", "казахстан"] },
];

export function countryMap() {
  const byKey = new Map(); // lowercase name -> country
  const byCode = new Map(); // dial/code string (with/without +, 00) -> country
  COUNTRIES.forEach((c) => {
    c.names.forEach((n) => { if (!byKey.has(n.toLowerCase())) byKey.set(n.toLowerCase(), c); });
    byCode.set(c.dial.replace("+", ""), c);
    byCode.set("00" + c.ccn, c);
    byCode.set(c.ccn, c);
    byCode.set(c.dial, c);
  });
  return { byKey, byCode };
}

const { byKey, byCode } = countryMap();

// Normalize the typed country box value and return the matched country (or null).
export function resolveCountry(value) {
  if (!value) return null;
  const v = String(value).trim();
  if (!v) return null;

  // Direct dial/code finds (exact + allow partial unique prefix not needed)
  const looksCode = /^[+\d]+$/.test(v);
  if (looksCode) {
    const digitsOnly = v.replace(/[^0-9]/g, "");
    // strip leading zeros only when it looks like 00 country code
    const candVia00 = "00" + v.replace(/^\+/, "");
    let hit =
      byCode.get(v) ||
      byCode.get(v.replace(/^\+/, "")) ||
      byCode.get(candVia00 && digitsOnly.startsWith("0") ? candVia00.replace(/^00/, "") : "") ||
      byCode.get(digitsOnly);
    if (hit) return hit;
    return null;
  }

  // Name lookup (any localized alias)
  const hit = byKey.get(v.toLowerCase());
  return hit || null;
}

// Default preview shown before the user types anything.
export function defaultCountry() {
  return { flag: "🇸🇾", dial: "+963" };
}
