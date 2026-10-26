// /face-botox — Botulinum toxin, upper face.
//
// Copy rules: no promises, no "best clinic", no before/after claims. A toxin is
// presented as a prescription medicine: temporary, dose-dependent, with a real
// risk of eyelid droop, and with clear exclusions.

export default {
  slug: "/face-botox",
  group: { href: "/aesthetics", label: { en: "Aesthetic medicine", ar: "الطب التجميلي" } },
  heroImage: "/assets/images/ai/services/aesthetics/botox.webp",

  en: {
    title: "Face Botox in Istanbul",
    eyebrow: "Aesthetic medicine",
    lead:
      "Botulinum toxin blocks the signal that tells a muscle to contract. Injected in small, measured doses " +
      "into the upper face, it softens the lines that movement has carved — and the effect fades, which is " +
      "the point.",
    cta: "Book a free assessment",
    heroAlt: "Botulinum toxin consultation at Platinya Clinic",
    stats: [
      { value: "15–30 min", label: "Appointment" },
      { value: "10–14 days", label: "Full effect" },
      { value: "3–4 months", label: "Duration" },
    ],
    candidate: {
      heading: "Who it suits, and who it does not",
      intro:
        "A toxin treats lines made by movement. It does nothing for volume that has been lost or skin that " +
        "has sagged — those need filler or surgery, and suggesting a toxin for them is how patients end up " +
        "disappointed.",
      items: [
        "Frown lines between the brows, horizontal forehead lines, and crow's feet that are visible in movement",
        "Lines that are still dynamic — they appear when you frown or smile — rather than etched at rest",
        "Good general health, with no reason to avoid a prescription medicine",
        "Realistic expectations: the face looks less tense, not younger, and the effect is temporary",
      ],
      note:
        "Botulinum toxin is not given in pregnancy or breastfeeding, or to anyone with a neuromuscular " +
        "disorder such as myasthenia gravis, Lambert–Eaton syndrome or motor neurone disease, or with a " +
        "known allergy to the product or its albumin carrier. Active infection at the injection site, and " +
        "pre-existing eyelid droop, are relative reasons to wait or to treat differently.",
    },
    techniques: {
      heading: "Where it goes, and how much",
      intro:
        "Doses are in units that are specific to each brand and cannot be compared between them. What " +
        "matters is the pattern of injection, chosen from how your muscles actually move.",
      items: [
        {
          name: "Glabella — the frown lines",
          text:
            "Usually the first area treated, typically 20–30 units across five injection points. It is the " +
            "area with the most reliable result and also the one where a misplaced dose can cause an eyelid " +
            "droop.",
        },
        {
          name: "Forehead",
          text:
            "Typically 10–20 units, placed to soften horizontal lines without flattening the brow entirely. " +
            "Treating the forehead alone, without the glabella, often makes the inner brow lift and look " +
            "strange — the areas are planned together.",
        },
        {
          name: "Crow's feet",
          text:
            "Typically 6–12 units per side, three points around the outer eye. Superficial and close to the " +
            "orbital rim, so bruising is common and the dose is kept low to avoid a heavy, closed look.",
        },
      ],
    },
    journey: {
      heading: "From consultation to review",
      steps: [
        {
          name: "Consultation",
          text:
            "The face is observed at rest and in movement — frown, raise, squint — because the dose is chosen " +
            "from the muscle, not the wrinkle. Medical history, medicines and previous toxin treatment are " +
            "reviewed, and photographs are taken.",
        },
        {
          name: "The appointment",
          text:
            "Fifteen to thirty minutes. No anaesthetic is needed; ice is used if you want it. A fine needle, " +
            "several small injections, a few seconds each. You can return to work immediately.",
        },
        {
          name: "The first 24 hours",
          text:
            "No rubbing or massaging the area for four hours, no lying flat for four hours, and no gym, sauna " +
            "or alcohol for 24 hours. A mild headache and small bruises are common; make-up can be applied " +
            "the same day if the skin is not broken.",
        },
        {
          name: "Days 3 to 14",
          text:
            "Onset is around day two to three and the full effect is reached at 10–14 days. Judging the " +
            "result earlier than that leads to unnecessary top-ups — the review is booked for day 14.",
        },
        {
          name: "The review, then maintenance",
          text:
            "At two weeks the pattern is checked and a small correction made if needed. Effect lasts three " +
            "to four months, sometimes less in people who metabolise it quickly. Treatment every three to " +
            "four months keeps the result steady without escalating doses.",
        },
      ],
    },
    risks: {
      heading: "What can go wrong",
      intro:
        "This is a prescription medicine, and the risks are those of the toxin itself rather than of the " +
        "needle.",
      items: [
        "Bruising, swelling and a mild headache for a day or two, most common around the eyes",
        "Eyelid or brow droop (ptosis) in roughly 1–2% of glabella treatments — temporary, settling over two to four weeks, sometimes helped with eye drops",
        "Asymmetry, or a brow that sits higher on one side, usually correctable at the two-week review",
        "An unnatural expression — a flattened forehead or a " + '"spock brow" — from a dose or pattern that does not match the muscles',
        "Dry eye, eyelid puffiness or difficulty raising the brow, and, rarely, generalised weakness or a flu-like reaction",
      ],
      note:
        "Tell the practitioner about every medicine and supplement, about previous toxin treatments and how " +
        "long they lasted, and about any family history of neuromuscular disease. Toxin does not treat " +
        "sagging skin or lost volume, and it is not a substitute for a surgical opinion when that is what " +
        "the face actually needs.",
    },
    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "Will my face look frozen?",
          a:
            "Not at a measured dose. The aim is to soften movement, not to stop it. A frozen look comes from " +
            "treating every area at full dose — and it is reversible, which is the advantage over surgery.",
        },
        {
          q: "How soon will I see a result?",
          a:
            "Movement starts to soften around day two or three, and the full effect is present at 10–14 " +
            "days. Anything that looks uneven before then is usually still developing.",
        },
        {
          q: "What happens if I stop?",
          a:
            "The muscle returns to its previous activity over a few months and the lines return to where they " +
            "were. There is no rebound worsening, though lines that were suppressed for years can look more " +
            "established at first.",
        },
        {
          q: "Can it be combined with filler?",
          a:
            "Often, yes — toxin for movement, filler for volume — and they are frequently done in the same " +
            "visit. The order and the timing are decided by the practitioner, since both change how the face " +
            "is assessed.",
        },
      ],
    },
    ctaBand: {
      heading: "Ask a doctor whether toxin is the right answer",
      text:
        "Send two photographs — frowning and at rest — and a doctor reviews them. You get an honest answer on " +
        "whether the lines are muscular, and what else would be needed if they are not.",
      button: "Send your photos",
    },
    disclaimer:
      "General information, not medical advice. Botulinum toxin is a prescription medicine, given only after " +
      "a consultation with a qualified practitioner; suitability and dose differ from patient to patient.",
  },

  ar: {
    title: "البوتوكس للوجه في إسطنبول",
    eyebrow: "الطب التجميلي",
    lead:
      "توكسين البوتولينوم يعطل الإشارة التي تأمر العضلة بالانقباض. ويُحقن بجرعات صغيرة محسوبة في أعلى " +
      "الوجه، فيلطّف الخطوط التي حفرتها الحركة — والنتيجة تزول مع الوقت، وهذا هو المقصود.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة توكسين البوتولينوم في عيادة بلاتينيا",
    stats: [
      { value: "١٥–٣٠ دقيقة", label: "مدة الجلسة" },
      { value: "١٠–١٤ يوماً", label: "اكتمال النتيجة" },
      { value: "٣–٤ أشهر", label: "مدة النتيجة" },
    ],
    candidate: {
      heading: "لمن يناسب، ولمن لا يناسب",
      intro:
        "التوكسين يعالج الخطوط الناتجة عن الحركة. ولا يفعل شيئاً للحجم المفقود أو الجلد المترهّل — تلك " +
        "تحتاج فيلراً أو جراحة، واقتراح التوكسين لها هو طريق خيبة الأمل.",
      items: [
        "خطوط العبوس بين الحاجبين، والخطوط الأفقية في الجبهة، وخطوط أطراف العين التي تظهر مع الحركة",
        "خطوط ما زالت حركية — تظهر حين تعبس أو تبتسم — لا محفورة في السكون",
        "صحة عامة جيدة، دون سبب يمنع استخدام دواء بوصفة",
        "توقّعات واقعية: يبدو الوجه أقل توتّراً لا أصغر سناً، والنتيجة مؤقّتة",
      ],
      note:
        "لا يُعطى توكسين البوتولينوم خلال الحمل أو الإرضاع، ولا لمن لديه اضطراب عصبي عضلي كالوهن العضلي " +
        "الوبيل أو متلازمة لامبيرت–إيتون أو مرض العصبون الحركي، ولا عند تحسّس معروف للمادة أو لحاملها " +
        "الألبوميني. والالتهاب النشط في موضع الحقن، وتدلّي الجفن الموجود مسبقاً، سببان نسبيان للتأجيل أو " +
        "لتغيير الخطة.",
    },
    techniques: {
      heading: "أين تُحقن، وبأي كمية",
      intro:
        "الجرعات بوحدات خاصة بكل علامة تجارية ولا يمكن مقارنتها بينها. المهم هو نمط الحقن، ويُختار من " +
        "طريقة حركة عضلاتك فعلاً.",
      items: [
        {
          name: "بين الحاجبين — خطوط العبوس",
          text:
            "غالباً أول منطقة تُعالَج، بنحو ٢٠–٣٠ وحدة على خمس نقاط. وهي المنطقة الأكثر ثباتاً في النتيجة، " +
            "وهي أيضاً التي قد يسبب فيها حقن في غير موضعه تدلّي الجفن.",
        },
        {
          name: "الجبهة",
          text:
            "نحو ١٠–٢٠ وحدة، تُوضع لتلطيف الخطوط الأفقية دون تسطيح الحاجب كلياً. ومعالجة الجبهة وحدها دون " +
            "ما بين الحاجبين ترفع الحاجب الداخلي غالباً وتبدو غريبة — ولهذا تُخطَّط المناطق معاً.",
        },
        {
          name: "أطراف العين",
          text:
            "نحو ٦–١٢ وحدة لكل جهة على ثلاث نقاط حول العين الخارجية. سطحية وقريبة من حافة الحجاج، فالكدمات " +
            "شائعة، وتُبقى الجرعة منخفضة تجنّباً لمظهر ثقيل مغلق.",
        },
      ],
    },
    journey: {
      heading: "من الاستشارة إلى المراجعة",
      steps: [
        {
          name: "الاستشارة",
          text:
            "يُلاحَظ الوجه في السكون وفي الحركة — عبوس ورفع الحاجب وتضييق العين — لأن الجرعة تُختار من " +
            "العضلة لا من الخط. ويُراجَع التاريخ المرضي والأدوية والعلاج السابق بالتوكسين، وتُلتقط صور.",
        },
        {
          name: "الجلسة",
          text:
            "خمس عشرة إلى ثلاثين دقيقة. لا تخدير، ويُستخدم الثلج إن رغبت. إبرة رفيعة وحقنات صغيرة عدة، " +
            "كل واحدة ثوانٍ. ويمكنك العودة إلى عملك فوراً.",
        },
        {
          name: "أول ٢٤ ساعة",
          text:
            "لا فرك أو تدليك للمنطقة أربع ساعات، ولا استلقاء أربع ساعات، ولا نادٍ أو ساونا أو كحول ٢٤ ساعة. " +
            "الصداع الخفيف والكدمات الصغيرة شائعة، ويمكن وضع المكياج في اليوم نفسه إن لم يكن الجلد مجروحاً.",
        },
        {
          name: "من اليوم الثالث إلى الرابع عشر",
          text:
            "تبدأ النتيجة حول اليوم الثاني أو الثالث وتكتمل في ١٠–١٤ يوماً. والحكم قبل ذلك يقود إلى تعويض " +
            "غير لازم — ولهذا تُحجز المراجعة في اليوم الرابع عشر.",
        },
        {
          name: "المراجعة ثم الاستمرار",
          text:
            "في الأسبوع الثاني يُفحص النمط ويُجرى تصحيح صغير إن لزم. تدوم النتيجة ثلاثة إلى أربعة أشهر، " +
            "وأقل عند من يستقلب المادة بسرعة. والعلاج كل ثلاثة إلى أربعة أشهر يحفظ الثبات دون رفع الجرعة.",
        },
      ],
    },
    risks: {
      heading: "ما قد يسوء",
      intro:
        "هذا دواء بوصفة، ومخاطره مخاطر التوكسين نفسه لا مخاطر الإبرة.",
      items: [
        "كدمات وتورّم وصداع خفيف ليوم أو يومين، وأكثرها حول العين",
        "تدلّي الجفن أو الحاجب في نحو ١–٢٪ من معالجات ما بين الحاجبين — مؤقّت، يهدأ خلال أسبوعين إلى أربعة، وتفيد القطرات أحياناً",
        "عدم تناظر، أو حاجب أعلى من جهة، ويمكن تصحيحه عادةً في مراجعة الأسبوع الثاني",
        "تعبير غير طبيعي — جبهة مسطّحة أو حاجب مرفوع من طرفه — بسبب جرعة أو نمط لا يناسب العضلات",
        "جفاف العين أو انتفاخ الجفن أو صعوبة رفع الحاجب، ونادراً وهن عام أو تفاعل شبيه بالإنفلونزا",
      ],
      note:
        "أخبر الممارس بكل دواء ومكمّل، وبعلاجات التوكسين السابقة ومدى دوامها، وبأي تاريخ عائلي لأمراض " +
        "عصبية عضلية. والتوكسين لا يعالج ترهّل الجلد ولا الحجم المفقود، وليس بديلاً عن رأي جراحي حين " +
        "يكون هذا ما يحتاجه الوجه فعلاً.",
    },
    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "هل سيبدو وجهي متجمّداً؟",
          a:
            "لا، بجرعة محسوبة. الهدف تلطيف الحركة لا إيقافها. والمظهر المتجمّد يأتي من معالجة كل منطقة " +
            "بجرعة كاملة — وهو قابل للتراجع، وهذه ميزته على الجراحة.",
        },
        {
          q: "متى أرى النتيجة؟",
          a:
            "تبدأ الحركة باللين حول اليوم الثاني أو الثالث، وتكتمل النتيجة في ١٠–١٤ يوماً. وأي اختلاف في " +
            "المنظر قبل ذلك يكون في طور التكوّن عادةً.",
        },
        {
          q: "ماذا يحدث إذا توقّفت؟",
          a:
            "تعود العضلة إلى نشاطها السابق خلال أشهر، وتعود الخطوط إلى ما كانت عليه. لا يوجد ارتداد أسوأ، " +
            "لكن الخطوط التي كُبِحت سنوات قد تبدو أكثر استقراراً في البداية.",
        },
        {
          q: "هل يمكن جمعه مع الفيلر؟",
          a:
            "غالباً نعم — التوكسين للحركة والفيلر للحجم — ويُجريان كثيراً في الزيارة نفسها. والترتيب " +
            "والتوقيت يقرّرهما الممارس، لأن كليهما يغيّر طريقة تقييم الوجه.",
        },
      ],
    },
    ctaBand: {
      heading: "اسأل طبيباً هل التوكسين هو الجواب المناسب",
      text:
        "أرسل صورتين — أثناء العبوس وفي السكون — ويراجعهما طبيب. وتحصل على جواب صريح: هل الخطوط عضلية، " +
        "وما الذي يلزم إن لم تكن كذلك.",
      button: "أرسل صورك",
    },
    disclaimer:
      "معلومات عامة وليست نصيحة طبية. توكسين البوتولينوم دواء بوصفة، يُعطى فقط بعد استشارة ممارس مؤهّل؛ " +
      "والملاءمة والجرعة تختلفان من مريض لآخر.",
  },
};
