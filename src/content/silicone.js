// /silicone — Breast augmentation with silicone implants.
//
// A real treatment page, not a redirect: it answers the questions a patient
// actually asks before booking (am I a candidate, what happens on the day, how
// long is recovery, what can go wrong, what does it cost), because that is what
// ranks and what converts.
//
// Only the languages listed in src/data/route-langs.json ship for this route.
// Machine-translated medical copy is worse than no page, so the rest are added
// as they are written and reviewed.
//
// Copy rules: no promises, no "best clinic", no before/after claims, and every
// duration or risk stated as a range that a surgeon would recognise.

export default {
  slug: "/silicone",
  group: { href: "/plastic-body", label: { en: "Body contouring", ar: "نحت القوام" } },
  heroImage: "./assets/images/ai/services/plastic/breast-implant.webp",

  en: {
    title: "Breast Augmentation with Silicone Implants in Istanbul",
    eyebrow: "Body contouring",
    lead:
      "Breast augmentation adds volume and improves symmetry with an implant placed behind the " +
      "breast tissue or behind the muscle. It changes size and shape; it does not lift a breast " +
      "that has already drooped.",
    cta: "Book a free assessment",
    heroAlt: "Breast augmentation consultation at Platinya Clinic",

    stats: [
      { value: "1–2 h", label: "Surgery time" },
      { value: "1 night", label: "Hospital stay" },
      { value: "4–6 weeks", label: "No sport" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "The starting point is the tissue you have — its thickness, its elasticity and where the " +
        "nipple sits — not the cup size you want. The implant is chosen to fit the chest.",
      items: [
        "Naturally small breasts, or a size that has never matched the rest of the frame",
        "Noticeable asymmetry between the two sides",
        "Volume lost after breastfeeding or after weight loss, with the skin still firm",
        "A breast that is empty in the upper pole, where a modest implant restores the outline",
      ],
      note:
        "If the nipple sits below the fold under the breast, the issue is ptosis, and an implant " +
        "alone will not correct it — it may make it worse. That needs a lift, with or without an " +
        "implant. Mammography or ultrasound is arranged before surgery according to your age and " +
        "family history, and any lump is investigated first.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "Three decisions are made together: what goes in, where it goes, and how it is inserted. " +
        "Each changes the look, the recovery and the risk.",
      items: [
        {
          name: "The implant: round or anatomical",
          text:
            "Modern implants are filled with a cohesive silicone gel that holds its shape. Round " +
            "implants give fullness in the upper pole; anatomical (teardrop) implants are shaped to " +
            "follow the natural slope, and are usually textured to stop them rotating. Surface and " +
            "shape are chosen with the surgeon, and both have trade-offs.",
        },
        {
          name: "The plane: under the muscle or dual-plane",
          text:
            "Placement behind the pectoral muscle hides the implant edge and suits thin tissue; a " +
            "dual-plane releases the lower part of the muscle so the implant sits naturally while " +
            "the upper part still covers it. Above the muscle is quicker to recover but shows more " +
            "in thin patients.",
        },
        {
          name: "The incision",
          text:
            "Under the breast in the fold is the most common, and gives the most direct control. " +
            "Around the areola hides the scar in the pigment change but carries a slightly higher " +
            "risk of changed nipple sensation; through the armpit leaves no scar on the breast but " +
            "is less precise.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and planning",
          text:
            "Measurements of the chest, skin quality and nipple position, and a conversation about " +
            "the size you want — tried with sizers, not chosen from a photograph. Mammography or " +
            "ultrasound where indicated, blood tests, and a written plan naming the implant.",
        },
        {
          name: "Preparation",
          text:
            "Smoking stops four weeks before, blood thinners and some supplements about ten days " +
            "before, and you fast for six to eight hours. Buy the surgical bra in advance, and " +
            "arrange help for the first three to four days: lifting and driving are not possible.",
        },
        {
          name: "The operation",
          text:
            "Under general anaesthesia, one to two hours. The implant is placed, the position is " +
            "checked with you sitting up during the operation, and the incision is closed in layers. " +
            "Most patients stay one night, with a compression bra fitted before discharge.",
        },
        {
          name: "The first two weeks",
          text:
            "Tightness and swelling are worse in the first three to five days, and the breasts sit " +
            "high. The compression bra is worn day and night, drains are rare, and the first shower " +
            "is scheduled at the clinic. Sleeping on the back, propped up, is more comfortable.",
        },
        {
          name: "Weeks three to six",
          text:
            "Swelling settles and the implants drop into position over six to twelve weeks. Desk " +
            "work is usually possible after one to two weeks. Gym, running, swimming and heavy " +
            "lifting wait four to six weeks; upper-body work is introduced gradually after that.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "An implant is a device, and it has a lifespan and a failure rate. These are the risks that " +
        "matter, including the rare ones.",
      items: [
        "Capsular contracture — the scar tissue around the implant tightens, making the breast hard, round and sometimes painful; it can be treated but may recur",
        "BIA-ALCL, a rare lymphoma of the implant capsule, linked mainly to textured implants and appearing years later as swelling or a fluid collection; it is treated by removing the implant and the capsule",
        "Rupture or leaking, which may cause no symptoms at all and is found on imaging, and rippling or visible edges through thin skin",
        "Infection, which may require removing the implant and replacing it later, and changed nipple or breast sensation — often temporary, sometimes permanent",
        "Bleeding, haematoma and, rarely, thrombosis — reduced by early walking and compression",
      ],
      note:
        "Tell us about any previous breast surgery, a family history of breast or ovarian cancer, " +
        "autoimmune disease and smoking. Implants do not stop you being screened for breast cancer, " +
        "but they change how mammography is done — say that you have them when you book it.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "How long do implants last?",
          a:
            "They are not lifetime devices. Many last ten to fifteen years or more, but rupture, " +
            "contracture or a change in shape can bring the exchange forward. There is no fixed " +
            "schedule for replacement: the implant is checked — by examination and, where needed, " +
            "ultrasound or MRI — and exchanged if there is a reason.",
        },
        {
          q: "Will I be able to breastfeed?",
          a:
            "Most women can, particularly with an incision in the fold and a dual-plane placement, " +
            "which leave the milk ducts and the nerve supply largely intact. Some women produce less, " +
            "and an areolar incision carries a higher risk of changed nipple sensation. It is worth " +
            "planning the operation with future pregnancy in mind.",
        },
        {
          q: "Do implants cause breast cancer?",
          a:
            "Silicone implants have not been shown to cause breast cancer. BIA-ALCL is a separate, " +
            "rare lymphoma of the scar capsule around the implant, not breast cancer, and it is why " +
            "any new swelling, lump or pain around an implant is investigated rather than watched. " +
            "The risk is low, but it is real and you should know it exists.",
        },
        {
          q: "Do I need a lift instead?",
          a:
            "If the nipple sits at or below the fold, yes — or a lift with a smaller implant. An " +
            "implant adds volume forward, not upward, and in a drooped breast it can produce a " +
            "heavier, lower shape. This is examined standing up, and it is the most common reason a " +
            "plan changes at consultation.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "Front and side views, in a fitted top, are enough to discuss whether an implant alone will " +
        "do, roughly what volume fits your frame, and what the operation involves. A coordinator " +
        "replies with a plan and a written quote.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "تكبير الثدي بالسيليكون في إسطنبول",
    eyebrow: "نحت القوام",
    lead:
      "تكبير الثدي يضيف حجماً ويحسّن التناظر بطُعم يُوضع خلف نسيج الثدي أو خلف العضلة. يغيّر الحجم " +
      "والشكل، لكنه لا يرفع ثدياً تدلّى بالفعل.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة تكبير الثدي في عيادة بلاتينيا",

    stats: [
      { value: "١–٢ ساعة", label: "مدة العملية" },
      { value: "ليلة واحدة", label: "الإقامة في المستشفى" },
      { value: "٤–٦ أسابيع", label: "الامتناع عن الرياضة" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "نقطة البداية هي الأنسجة الموجودة — سماكتها ومرونتها وموضع الحلمة — لا مقاس الكأس المطلوب. " +
        "فالطُعم يُختار ليلائم الصدر.",
      items: [
        "ثدي صغير طبيعياً، أو حجم لم يناسب بقية القوام يوماً",
        "عدم تناظر واضح بين الجانبين",
        "حجم ضائع بعد الرضاعة أو بعد نزول الوزن، مع جلد لا يزال متماسكاً",
        "ثدي خالٍ في القطب العلوي، حيث يعيد طُعم معتدل رسم الحدّ",
      ],
      note:
        "إذا كانت الحلمة تحت الطيّة أسفل الثدي فالمشكلة تدلٍّ (توهّد)، والطُعم وحده لا يصحّحه — بل قد " +
        "يزيده سوءاً. هذا يحتاج شدّاً، مع طُعم أو دونه. وتُرتَّب الماموغرافيا أو الأمواج فوق الصوتية " +
        "قبل الجراحة حسب عمرك وتاريخ العائلة، وأي كتلة تُفحص أولاً.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "تُتخذ ثلاثة قرارات معاً: ماذا يُوضع، وأين، وكيف يُدخل. وكل منها يغيّر الشكل والنقاهة والمخاطر.",
      items: [
        {
          name: "الطُعم: دائري أم تشريحي",
          text:
            "الطُعم الحديث مملوء بجلّ سيليكون متماسك يحفظ شكله. الدائري يمنح امتلاءً في القطب العلوي؛ " +
            "والتشريحي (قطرة الدمعة) مصمّم ليتبع الانحدار الطبيعي، ويكون منقّشاً عادةً لئلا يدور. " +
            "ويُختار السطح والشكل مع الجرّاح، ولكل منهما مقابله.",
        },
        {
          name: "الموضع: خلف العضلة أو ثنائي المستوى",
          text:
            "الوضع خلف العضلة الصدرية يخفي حدّ الطُعم ويناسب الأنسجة الرقيقة؛ والوضع ثنائي المستوى " +
            "يحرّر الجزء السفلي من العضلة فيستقرّ الطُعم طبيعياً ويبقى الجزء العلوي يغطّيه. أما فوق " +
            "العضلة فنقاهته أسرع لكنه يظهر أكثر في المريضات النحيفات.",
        },
        {
          name: "الشقّ الجراحي",
          text:
            "تحت الثدي في الطيّة هو الأكثر شيوعاً ويمنح أدقّ تحكّم. وحول الهالة يخفي الأثر في تغيّر " +
            "اللون لكنه يرفع قليلاً خطر تغيّر إحساس الحلمة؛ وعبر الإبط لا يبقى أثر على الثدي لكن " +
            "الدقّة أقل.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتخطيط",
          text:
            "قياسات الصدر وجودة الجلد وموضع الحلمة، وحديث عن الحجم المطلوب — بالتجربة بأحجام تجريبية " +
            "لا باختيار من صورة. وماموغرافيا أو أمواج فوق الصوتية حيث تلزم، وتحاليل دم، وخطة مكتوبة " +
            "تسمّي الطُعم.",
        },
        {
          name: "التحضير",
          text:
            "يُوقف التدخين قبل أربعة أسابيع، ومضادات التخثّر وبعض المكمّلات قبل عشرة أيام تقريباً، " +
            "ويُصام ست إلى ثماني ساعات. اشترِ حامل الصدر الجراحي مسبقاً، ورتّب من يساعدك في الأيام " +
            "الثلاثة إلى الأربعة الأولى: فالحمل والقيادة غير ممكنين.",
        },
        {
          name: "العملية",
          text:
            "تحت التخدير الكامل، من ساعة إلى ساعتين. يُوضع الطُعم ويُتحقّق من موضعه وأنت جالس أثناء " +
            "العملية، ويُغلق الشقّ على طبقات. ويمكث معظم المرضى ليلة واحدة، ويُلبَسون حاملاً ضاغطاً قبل " +
            "الخروج.",
        },
        {
          name: "الأسبوعان الأولان",
          text:
            "الشدّ والتورّم أشدّ في الأيام الثلاثة إلى الخمسة الأولى، والثديان يبدوان مرتفعين. يُلبس " +
            "الحامل الضاغط ليلاً ونهاراً، والتصريف نادر، ويُحدَّد أول استحمام في العيادة. والنوم على " +
            "الظهر مع رفع الجذع أكثر راحة.",
        },
        {
          name: "الأسبوع الثالث إلى السادس",
          text:
            "يهدأ التورّم ويهبط الطُعم إلى موضعه خلال ستة إلى اثني عشر أسبوعاً. والعمل المكتبي ممكن " +
            "عادةً بعد أسبوع إلى أسبوعين. أما النادي والجري والسباحة وحمل الأثقال فتُؤجّل أربعة إلى " +
            "ستة أسابيع؛ ثم يُدخل تمرين الجزء العلوي تدريجياً.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro:
        "الطُعم جهاز له عمر ومعدّل فشل. وهذه المخاطر التي تهمّ، بما فيها النادرة.",
      items: [
        "شدّ المحفظة — يتقلّص النسيج الليفي حول الطُعم فيصبح الثدي صلباً ومستديراً ومؤلماً أحياناً؛ ويمكن علاجه لكنه قد يعود",
        "لمفوما BIA-ALCL، وهي لمفوما نادرة في محفظة الطُعم، ترتبط أساساً بالطُعم المنقّش (textured) وتظهر بعد سنوات كانتفاخ أو تجمّع سوائل؛ وتُعالَج بنزع الطُعم والمحفظة",
        "تمزّق الطُعم أو تسرّبه، وقد لا يسبّب أعراضاً إطلاقاً ويُكتشف بالتصوير، وتموّج أو حدود ظاهرة عبر جلد رقيق",
        "التهاب قد يستلزم نزع الطُعم وإعادة وضعه لاحقاً، وتغيّر إحساس الحلمة أو الثدي — غالباً مؤقّت وأحياناً دائم",
        "نزيف وورم دموي، ونادراً تجلّط — يُقلَّل منه بالمشي المبكّر والضغط",
      ],
      note:
        "أخبرنا عن أي جراحة ثدي سابقة، وعن تاريخ عائلي لسرطان الثدي أو المبيض، وعن أمراض المناعة " +
        "الذاتية، وعن التدخين. الطُعم لا يمنع الفحص المبكّر لسرطان الثدي، لكنه يغيّر طريقة إجراء " +
        "الماموغرافيا — فاذكر وجوده عند الحجز.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "كم يدوم الطُعم؟",
          a:
            "ليس جهازاً مدى الحياة. كثير منه يدوم عشر إلى خمس عشرة سنة أو أكثر، لكن التمزّق أو شدّ " +
            "المحفظة أو تغيّر الشكل قد يعجّل التبديل. ولا يوجد جدول ثابت للتبديل: يُفحص الطُعم " +
            "بالفحص السريري وبالأمواج فوق الصوتية أو الرنين حيث يلزم، ويُبدَّل إذا وُجد سبب.",
        },
        {
          q: "هل أستطيع الإرضاع؟",
          a:
            "معظم النساء يستطعن، خصوصاً مع شقّ في الطيّة ووضع ثنائي المستوى، إذ يبقيان قنوات الحليب " +
            "والأعصاب سليمة إلى حدّ كبير. وبعض النساء يُنتجن حليباً أقلّ، وشقّ الهالة يحمل خطراً " +
            "أعلى لتغيّر إحساس الحلمة. ويستحقّ الأمر تخطيط العملية مع الحمل المستقبلي في الحسبان.",
        },
        {
          q: "هل يسبّب السيليكون سرطان الثدي؟",
          a:
            "لم يثبت أن طُعم السيليكون يسبّب سرطان الثدي. أما BIA-ALCL فهي لمفوما نادرة ومنفصلة، تنشأ " +
            "في محفظة الليف حول الطُعم لا في نسيج الثدي، ولهذا يُفحص أي انتفاخ أو كتلة أو ألم جديد " +
            "حول الطُعم بدل مراقبته. الخطر منخفض لكنه حقيقي، ويجب أن تعرفيه.",
        },
        {
          q: "هل أحتاج شدّاً بدل التكبير؟",
          a:
            "إذا كانت الحلمة في مستوى الطيّة أو تحتها، فنعم — أو شدّاً مع طُعم أصغر. فالطُعم يضيف " +
            "حجماً إلى الأمام لا إلى الأعلى، وفي ثدي متدلٍّ قد يعطي شكلاً أثقل وأخفض. وهذا يُفحص " +
            "واقفاً، وهو أكثر سبب لتغيّر الخطة في الاستشارة.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "صورتان أمامية وجانبية بملابس ضيّقة تكفيان لمناقشة هل الطُعم وحده يكفي، وما الحجم الذي يلائم " +
        "قوامك تقريباً، وما تتضمّنه العملية. ويعود إليك منسّق الرعاية بخطة وعرض سعر مكتوب.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
