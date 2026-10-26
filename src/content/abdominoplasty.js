// /abdominoplasty — Tummy Tuck.
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
  slug: "/abdominoplasty",
  group: { href: "/plastic-body", label: { en: "Body contouring", ar: "نحت القوام" } },
  heroImage: "/assets/images/ai/services/plastic/tummy.webp",

  en: {
    title: "Tummy Tuck (Abdominoplasty) in Istanbul",
    eyebrow: "Body contouring",
    lead:
      "A tummy tuck removes the excess skin and fat that diet and exercise cannot shift, " +
      "and tightens the abdominal wall behind it. It is body contouring, not a weight-loss operation.",
    cta: "Book a free assessment",
    heroAlt: "Abdominoplasty consultation at Platinya Clinic",

    stats: [
      { value: "2–4 h", label: "Surgery time" },
      { value: "1–2 nights", label: "Hospital stay" },
      { value: "2–3 weeks", label: "Back to desk work" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "The operation works best on someone whose weight has been stable for at least six months, " +
        "who is in good general health, and whose concern is shape rather than kilograms.",
      items: [
        "Loose skin or separated abdominal muscles after pregnancy",
        "Sagging skin after significant weight loss, when the weight has stopped moving",
        "A stubborn lower-abdomen pouch that has not changed with training",
        "Stretch marks or a caesarean scar that sits within skin that will be removed anyway",
      ],
      note:
        "A tummy tuck is not a treatment for obesity, and it is not a substitute for weight loss. " +
        "If you plan to become pregnant, or expect to lose a large amount of weight, it is usually " +
        "better to wait — the result is meant to last.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "The technique is chosen at the consultation, from the skin, the muscle layer and the scar " +
        "pattern — never from a photograph alone.",
      items: [
        {
          name: "Full abdominoplasty",
          text:
            "A horizontal incision low on the abdomen, the skin lifted to the ribs, the abdominal " +
            "muscles tightened in the midline, and the excess skin removed. The navel is repositioned. " +
            "Suits loose skin above and below the navel.",
        },
        {
          name: "Mini abdominoplasty",
          text:
            "A shorter incision and a shorter recovery, for skin laxity confined to the lower abdomen. " +
            "The navel is normally left in place; muscle tightening is limited.",
        },
        {
          name: "Extended abdominoplasty",
          text:
            "The same as a full tummy tuck carried around the flanks, for skin that also hangs at the " +
            "sides. Often combined with liposuction of the waist.",
        },
        {
          name: "Muscle repair (plication)",
          text:
            "When the rectus muscles have separated — common after pregnancy — they are sutured back " +
            "towards the midline. This is what changes the profile of the abdomen, not just its skin.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and planning",
          text:
            "Photographs, a medical history, and an honest conversation about scars, downtime and " +
            "what the operation can and cannot do. Blood tests and, where relevant, an ultrasound " +
            "or a cardiology opinion are arranged before a date is set.",
        },
        {
          name: "Preparation",
          text:
            "Smoking stops at least three to four weeks before surgery, blood thinners and some " +
            "supplements are paused about ten days before, and you fast for six to eight hours. " +
            "Arrange someone to collect you and help at home for the first week.",
        },
        {
          name: "The operation",
          text:
            "Under general anaesthesia, usually two to four hours. A drain is often left in place for " +
            "a few days. Most patients stay one or two nights in hospital, with compression garments " +
            "fitted before discharge.",
        },
        {
          name: "The first two weeks",
          text:
            "Walking from the first day, short distances, back straight. The garment is worn day and " +
            "night. Swelling peaks around day three to five and then settles; the first shower and " +
            "drain removal are scheduled at the clinic.",
        },
        {
          name: "Weeks three to six",
          text:
            "Desk work is usually possible after two to three weeks. Gym, swimming and heavy lifting " +
            "wait until about week six, when the surgeon confirms the tissue has healed.",
        },
        {
          name: "The scar, over a year",
          text:
            "The scar is red and firm for the first months and then fades and flattens — a process " +
            "that continues for twelve to eighteen months. It sits low, inside the line of underwear.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "Every operation carries risk, and you should hear them before you decide, not after.",
      items: [
        "Seroma — a collection of fluid under the skin; the most common issue, usually drained in clinic",
        "Infection or delayed wound healing, more likely in smokers",
        "Wide or raised scarring, which can be revised later but not erased",
        "Numbness around the scar and the navel, usually improving over months",
        "Asymmetry or a contour that needs a small revision (roughly one in ten patients)",
        "Bleeding, bruising and, rarely, thrombosis — prevented with early walking and compression",
      ],
      note:
        "Tell us about smoking, diabetes, blood thinners and any previous abdominal surgery at the " +
        "consultation. Each of them changes the plan, and hiding one is the fastest way to a " +
        "complicated recovery.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "Does it hurt?",
          a:
            "The first two or three days are uncomfortable rather than painful — a tight, bruised " +
            "feeling across the abdomen. It is managed with ordinary pain relief, and most patients " +
            "are walking and eating normally before discharge.",
        },
        {
          q: "Will the scar be visible?",
          a:
            "There is a scar, and it is permanent. It is placed low, along the line of underwear, and " +
            "fades over twelve to eighteen months. How it heals depends on your skin, on not smoking, " +
            "and on following the wound-care instructions.",
        },
        {
          q: "Can I have children afterwards?",
          a:
            "Usually yes, but the abdomen will stretch again during pregnancy and some of the result " +
            "may be lost. For that reason many surgeons advise finishing your family first.",
        },
        {
          q: "Can it be combined with liposuction?",
          a:
            "Often, yes — liposuction of the flanks or waist is commonly added to shape the transition. " +
            "Whether it is safe for you depends on the area involved and on the length of the operation, " +
            "and that is a surgical decision.",
        },
        {
          q: "How much weight will I lose?",
          a:
            "Some, but that is not the point. The operation changes the shape of the abdomen. If your " +
            "goal is weight loss, a bariatric assessment is the right starting point, not a tummy tuck.",
        },
        {
          q: "What does it cost?",
          a:
            "The price depends on the technique, the hospital, the length of stay and whether a muscle " +
            "repair is needed, so it is quoted after the assessment rather than before. The quote " +
            "includes surgery, anaesthesia, hospital stay, garments and follow-up visits.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "A surgeon reviews them and a coordinator comes back with a plan, a date and a written quote — " +
        "no obligation, and no pressure to book.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "شد البطن (أبدومينوبلاستي) في إسطنبول",
    eyebrow: "نحت القوام",
    lead:
      "شدّ البطن يُزيل الجلد المترهّل والدهون التي لا تذهب بالحمية والرياضة، ويشدّ عضلات جدار البطن " +
      "من تحتها. هو عملية نحت قوام، وليس عملية تنحيف.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة شد البطن في عيادة بلاتينيا",

    stats: [
      { value: "٢–٤ ساعات", label: "مدة العملية" },
      { value: "١–٢ ليلة", label: "الإقامة في المستشفى" },
      { value: "٢–٣ أسابيع", label: "العودة للعمل المكتبي" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "تنجح العملية أكثر ما تنجح مع من ثبت وزنه ستة أشهر على الأقل، وتمتّع بصحة عامة جيدة، " +
        "وكان همه الشكل لا عدد الكيلوغرامات.",
      items: [
        "ترهّل الجلد أو انفصال عضلات البطن بعد الحمل",
        "ترهّل الجلد بعد نزول وزن كبير، بعد توقّف الوزن عن التغيّر",
        "انتفاخ أسفل البطن لا يتغيّر مع التمرين",
        "علامات تمدّد أو أثر قيصرية يقع داخل الجلد الذي سيُزال أصلاً",
      ],
      note:
        "شدّ البطن ليس علاجاً للسمنة ولا بديلاً عن إنقاص الوزن. إن كنت تخطّطين لحمل، أو تتوقّعين " +
        "نزول وزن كبير، فالأفضل عادةً الانتظار — فالنتيجة مقصودة أن تدوم.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "تُختار التقنية في الاستشارة بناءً على الجلد وطبقة العضلات وشكل الأثر الجراحي — لا من صورة وحدها.",
      items: [
        {
          name: "شد البطن الكامل",
          text:
            "شقّ أفقي منخفض في البطن، يُرفع الجلد حتى الأضلاع، تُشدّ عضلات البطن في الخطّ الوسطي، " +
            "ويُزال الجلد الزائد، مع إعادة تثبيت السرّة. يناسب ترهّل الجلد أعلى السرّة وأسفلها.",
        },
        {
          name: "شد البطن المصغّر (Mini)",
          text:
            "شقّ أقصر ونقاهة أقصر، لترهّل محصور في أسفل البطن. تبقى السرّة عادةً في مكانها، ويكون " +
            "شدّ العضلات محدوداً.",
        },
        {
          name: "شد البطن الممتد",
          text:
            "كالعملية الكاملة لكنها تمتدّ حول الخصر، لجلد متدلٍّ من الجانبين أيضاً. تُجمع غالباً " +
            "مع شفط دهون الخصر.",
        },
        {
          name: "إصلاح العضلات (الترميم)",
          text:
            "حين تكون العضلات المستقيمة قد انفصلت — وهو شائع بعد الحمل — تُخاط عائدةً نحو الخطّ الوسطي. " +
            "هذا هو ما يغيّر شكل البطن، لا الجلد وحده.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتخطيط",
          text:
            "صور، وتاريخ مرضيّ، وحديث صريح عن الآثار وفترة التوقّف عن العمل وما يمكن للعملية فعله وما لا " +
            "يمكن. تُطلب تحاليل دم، وعند الحاجة تصوير بالأمواج فوق الصوتية أو رأي طبيب قلب، قبل تحديد الموعد.",
        },
        {
          name: "التحضير",
          text:
            "يُوقف التدخين قبل العملية بثلاثة إلى أربعة أسابيع على الأقل، وتُوقف مضادات التخثّر وبعض " +
            "المكمّلات قبل عشرة أيام تقريباً، ويُصام ست إلى ثماني ساعات. رتّب من يوصلك إلى البيت ويساعدك " +
            "في الأسبوع الأول.",
        },
        {
          name: "العملية",
          text:
            "تحت التخدير الكامل، وتستغرق عادةً ساعتين إلى أربع. يبقى أنبوب تصريف غالباً بضعة أيام. " +
            "يمكث معظم المرضى ليلة إلى ليلتين في المستشفى، ويُلبَسون مشدّاً ضاغطاً قبل الخروج.",
        },
        {
          name: "الأسبوعان الأولان",
          text:
            "المشي من اليوم الأول لمسافات قصيرة وظهر مستقيم، والمشدّ يُلبس ليلاً ونهاراً. يبلغ الانتفاخ " +
            "ذروته في اليوم الثالث إلى الخامس ثم يهدأ، ويُحدَّد موعد أول استحمام ونزع التصريف في العيادة.",
        },
        {
          name: "الأسبوع الثالث إلى السادس",
          text:
            "العمل المكتبي ممكن عادةً بعد أسبوعين إلى ثلاثة. أما النادي والسباحة وحمل الأثقال فتُؤجّل " +
            "إلى نحو الأسبوع السادس، حين يؤكّد الجرّاح أنّ الأنسجة التحمت.",
        },
        {
          name: "الأثر على مدى سنة",
          text:
            "يكون الأثر أحمر ومتصلّباً في الأشهر الأولى ثم يخفّ ويتسطّح — وهي عملية تستمر من اثني عشر " +
            "إلى ثمانية عشر شهراً. وموضعه منخفض، داخل خطّ اللباس الداخلي.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro: "كل عملية تحمل مخاطر، والأجدر أن تسمعها قبل القرار لا بعده.",
      items: [
        "تجمّع سوائل تحت الجلد (سيروما) — وهو الأكثر شيوعاً، ويُصرَّف عادةً في العيادة",
        "التهاب أو تأخّر في التئام الجرح، وهو أكثر احتمالاً عند المدخّنين",
        "أثر عريض أو بارز، يمكن تحسينه لاحقاً لكن لا يمكن محوه",
        "تنميل حول الأثر والسرّة، يتحسّن عادةً على مدى أشهر",
        "عدم تناظر أو تحدّب يحتاج تعديلاً بسيطاً (نحو واحد من كل عشرة مرضى)",
        "نزيف وكدمات، ونادراً تجلّط وريدي — يُتّقى منه بالمشي المبكّر والمشدّ الضاغط",
      ],
      note:
        "أخبرنا عن التدخين والسكري ومضادات التخثّر وأي عملية سابقة في البطن في الاستشارة. كل واحد " +
        "منها يغيّر الخطة، وإخفاؤه أسرع طريق إلى نقاهة معقّدة.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "هل العملية مؤلمة؟",
          a:
            "الأيام الثلاثة الأولى مُزعجة أكثر منها مؤلمة — إحساس بشدّ وكدمات في البطن. تُدار بمسكّنات " +
            "عادية، ومعظم المرضى يمشون ويأكلون طبيعياً قبل الخروج من المستشفى.",
        },
        {
          q: "هل سيظهر الأثر؟",
          a:
            "هناك أثر، وهو دائم. يوضع منخفضاً على خطّ اللباس الداخلي، ويخفّ على مدى اثني عشر إلى ثمانية " +
            "عشر شهراً. وشكل التئامه يعتمد على جلدك، وعلى الامتناع عن التدخين، وعلى اتّباع تعليمات العناية بالجرح.",
        },
        {
          q: "هل أستطيع الإنجاب بعدها؟",
          a:
            "غالباً نعم، لكن البطن سيتمدّد من جديد أثناء الحمل وقد يضيع جزء من النتيجة. لذلك ينصح كثير من " +
            "الجرّاحين بإكمال الإنجاب أولاً.",
        },
        {
          q: "هل يمكن جمعها مع شفط الدهون؟",
          a:
            "غالباً نعم — شفط دهون الخصر أو الجانبين يُضاف كثيراً لتحسين الانتقال. وهل هو آمن في حالتك " +
            "يعتمد على المنطقة وعلى طول العملية، وهو قرار جراحي.",
        },
        {
          q: "كم كيلوغراماً سأنزل؟",
          a:
            "بعض الوزن، لكن هذا ليس الهدف. العملية تغيّر شكل البطن. وإن كان هدفك إنقاص الوزن فتقييم جراحة " +
            "السمنة هو نقطة البداية الصحيحة، لا شدّ البطن.",
        },
        {
          q: "ما التكلفة؟",
          a:
            "السعر يعتمد على التقنية والمستشفى ومدة الإقامة وهل يلزم إصلاح عضلات، لذلك يُقدَّر بعد التقييم " +
            "لا قبله. والعرض يشمل العملية والتخدير والإقامة والمشدّ وزيارات المتابعة.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "يراجعها جرّاح، ويعود إليك منسّق الرعاية بخطة وموعد وعرض سعر مكتوب — بلا التزام وبلا ضغط للحجز.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
