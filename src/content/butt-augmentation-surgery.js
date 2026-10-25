// /butt-augmentation-surgery — BBL and gluteal implants.
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
  slug: "/butt-augmentation-surgery",
  group: { href: "/plastic-body", label: { en: "Body contouring", ar: "نحت القوام" } },
  heroImage: "./assets/images/ai/services/plastic/bbl.webp",

  en: {
    title: "Buttock Augmentation (BBL) in Istanbul",
    eyebrow: "Body contouring",
    lead:
      "Buttock augmentation changes the shape and projection of the buttocks, either by moving fat " +
      "from elsewhere on your body or by placing an implant. It is one of the most demanding " +
      "operations in body contouring — for the surgeon and for the recovery.",
    cta: "Book a free assessment",
    heroAlt: "Buttock augmentation consultation at Platinya Clinic",

    stats: [
      { value: "3–5 h", label: "Surgery time" },
      { value: "1–2 nights", label: "Hospital stay" },
      { value: "2–3 weeks", label: "Sitting carefully" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "A fat transfer needs fat to transfer, and skin that can accommodate the new volume. Both " +
        "are assessed standing, and both decide whether the operation is possible at all.",
      items: [
        "Enough fat on the abdomen, flanks, back or thighs to harvest, with a stable weight",
        "A buttock that is flat, square or lacks projection in profile",
        "Asymmetry, or loss of shape after weight loss",
        "Good skin tone, and no history of clotting or of problems with previous liposuction",
      ],
      note:
        "This is not a weight-loss operation and it is not a substitute for training. If you are " +
        "underweight there may be nothing to harvest, and an implant is the only route — with a " +
        "different set of risks. Smoking, clotting disorders and uncontrolled diabetes are reasons " +
        "to reconsider.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "Two operations share the name. They are not variations of each other: they differ in " +
        "material, in recovery and in the serious risks.",
      items: [
        {
          name: "Fat transfer (Brazilian butt lift)",
          text:
            "Fat is liposuctioned from the abdomen, flanks or back, washed and allowed to settle, " +
            "then injected into the buttock in small passes. It is your own tissue, so it feels " +
            "natural and the donor areas are contoured at the same time. Not all of the fat survives.",
        },
        {
          name: "Gluteal implants",
          text:
            "A solid silicone implant is placed through an incision in the fold between the " +
            "buttocks, deep to the fascia or in the muscle. It gives a predictable volume that does " +
            "not shrink, but it is a foreign body with a risk of displacement, infection and capsule " +
            "formation, and the scar is in a sensitive area.",
        },
        {
          name: "Combination and revision",
          text:
            "Fat transfer can be combined with a small implant, or repeated after six to twelve " +
            "months to add volume once the first transfer has settled. Revision of a previous BBL " +
            "is usually harder than the first operation, because scar tissue changes the planes.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and planning",
          text:
            "Standing photographs, an assessment of donor fat and skin elasticity, and a medical " +
            "history that includes clotting, bleeding and previous surgery. Blood tests, and where " +
            "relevant a cardiology or anaesthetic opinion, before a date is set.",
        },
        {
          name: "Preparation",
          text:
            "Smoking stops at least four weeks before; nicotine affects fat survival and healing. " +
            "Blood thinners, the contraceptive pill and some supplements are discussed and paused " +
            "where appropriate. Buy loose clothing and a BBL pillow, and arrange help at home — you " +
            "will not be able to lie or sit normally for weeks.",
        },
        {
          name: "The operation",
          text:
            "Under general anaesthesia, three to five hours. Fat is harvested, processed and " +
            "injected in small aliquots, with care to stay away from the deep vessels. A compression " +
            "garment is fitted, and most patients stay one or two nights.",
        },
        {
          name: "The first two weeks",
          text:
            "You sleep on your stomach or side, and sit only on the designated cushion, briefly. " +
            "The donor areas are bruised and sore, and the garments are worn continuously. Walking " +
            "is encouraged from the first day; the buttocks are swollen and the shape is not yet the " +
            "final one.",
        },
        {
          name: "Weeks three to twelve",
          text:
            "Sitting becomes comfortable over two to three weeks, driving after two to three, and " +
            "exercise after six to eight. Swelling settles over three months; the fat that survives " +
            "is permanent, but the final shape is judged at three to six months.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "This operation has a serious risk that is specific to it, and it should be stated plainly " +
        "rather than mentioned in passing.",
      items: [
        "Fat embolism — fat entering the bloodstream and reaching the lungs; it can be fatal, and no technique removes the risk entirely",
        "Fat necrosis, oil cysts and hardening in the transferred areas, sometimes needing drainage",
        "Infection, which in a deep buttock plane can be difficult to treat and may need the implant removed, and seroma or delayed healing at the donor sites",
        "Asymmetry, contour irregularity or a result that is smaller than planned, because a variable part of the fat does not survive",
        "Thrombosis or pulmonary embolism, reduced by early walking and compression — and, with implants, displacement, capsular contracture and thickened scars",
      ],
      note:
        "Ask any clinic directly how it avoids deep intravascular injection, who performs the " +
        "anaesthesia, and what happens if there is a complication. A clinic that answers vaguely " +
        "about fat embolism is not a clinic to book with.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "How much of the fat survives?",
          a:
            "A variable proportion — often a substantial part is reabsorbed, and the result is " +
            "smaller than the immediate postoperative volume. That is why the operation is planned " +
            "conservatively and why a second session is sometimes needed after six to twelve months. " +
            "No surgeon can promise a percentage.",
        },
        {
          q: "How long before I can sit normally?",
          a:
            "Two to three weeks of sitting only on a cushion, for short periods, and sleeping on " +
            "the stomach or side. Prolonged pressure in the first weeks is thought to reduce fat " +
            "survival. Driving waits two to three weeks; long flights, four to six.",
        },
        {
          q: "Is a BBL dangerous?",
          a:
            "It carries a real risk of fat embolism, which can be fatal, and the risk is higher than " +
            "in most cosmetic operations. It is reduced by careful technique — small cannulas, " +
            "avoiding the deep muscle and the large vessels, limiting the volume — but not " +
            "eliminated. It is legitimate to decide the risk is not worth it.",
        },
        {
          q: "Fat or implant — which is better?",
          a:
            "Fat gives a natural feel and contours the donor areas, but volume is partly lost and " +
            "the limit is how much fat you have. An implant gives predictable volume without a " +
            "second area of surgery, at the cost of a foreign body and a higher risk of infection " +
            "and displacement. Your own tissue distribution usually decides.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "Side and rear views, in fitted clothing, let a surgeon judge projection and donor fat — and " +
        "say honestly whether a transfer is possible. A coordinator replies with a plan and a " +
        "written quote.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "تكبير الأرداف (نقل الدهون) في إسطنبول",
    eyebrow: "نحت القوام",
    lead:
      "تكبير الأرداف يغيّر شكل الأرداف وبروزها، إمّا بنقل دهون من مواضع أخرى في جسمك أو بوضع طُعم. " +
      "وهو من أكثر عمليات نحت القوام تطلّباً — على الجرّاح وعلى المريض في النقاهة.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة تكبير الأرداف في عيادة بلاتينيا",

    stats: [
      { value: "٣–٥ ساعات", label: "مدة العملية" },
      { value: "١–٢ ليلة", label: "الإقامة في المستشفى" },
      { value: "٢–٣ أسابيع", label: "الجلوس بحذر" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "نقل الدهون يحتاج دهوناً تُنقل، وجلداً يستوعب الحجم الجديد. ويُقيَّم الأمران واقفاً، وهما " +
        "يقرّران هل العملية ممكنة أصلاً.",
      items: [
        "دهون كافية في البطن أو الجانبين أو الظهر أو الفخذين، مع وزن ثابت",
        "أرداف مسطّحة أو مربّعة أو بلا بروز في الملفّ الجانبي",
        "عدم تناظر، أو فقدان الشكل بعد نزول الوزن",
        "جلد متماسك، ولا تاريخ تجلّط ولا مشاكل بعد شفط دهون سابق",
      ],
      note:
        "هذه ليست عملية إنقاص وزن ولا بديلاً عن التمرين. وإن كنت نحيفاً جداً فقد لا يوجد ما يُنقل، " +
        "ويكون الطُعم الطريق الوحيد — بمخاطره المختلفة. والتدخين واضطرابات التخثّر والسكري غير " +
        "المنضبط أسباب لإعادة النظر.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "عمليتان تحملان الاسم نفسه، وليستا صورتين من عملية واحدة: تختلفان في المادة وفي النقاهة وفي " +
        "المخاطر الجسيمة.",
      items: [
        {
          name: "نقل الدهون (شدّ الأرداف البرازيلي)",
          text:
            "تُشفط الدهون من البطن أو الجانبين أو الظهر، وتُغسل وتُترك لتستقرّ، ثم تُحقن في الردف " +
            "بتمرات صغيرة. هي أنسجتك أنت، فتبدو طبيعية وتُنحت مناطق الشفط نفسها في الوقت ذاته. " +
            "ولا يبقى كل الدهون المنقولة.",
        },
        {
          name: "طُعم الأرداف",
          text:
            "طُعم سيليكون صلب يُوضع عبر شقّ في الطيّة بين الأرداف، تحت اللفافة أو داخل العضلة. يمنح " +
            "حجماً متوقّعاً لا ينقص، لكنه جسم غريب بخطر التزحزح والالتهاب وتكوّن محفظة، والأثر في " +
            "منطقة حسّاسة.",
        },
        {
          name: "الجمع والتعديل",
          text:
            "يمكن جمع نقل الدهون مع طُعم صغير، أو تكرار النقل بعد ستة إلى اثني عشر شهراً لإضافة حجم " +
            "بعد استقرار النقل الأول. وتعديل عملية سابقة أصعب عادةً من الأولى، لأن النسيج الليفي " +
            "يغيّر المستويات.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتخطيط",
          text:
            "صور واقفاً، وتقييم للدهون المانحة ومرونة الجلد، وتاريخ مرضيّ يشمل التخثّر والنزف " +
            "والجراحات السابقة. وتحاليل دم، وعند اللزوم رأي طبيب قلب أو تخدير، قبل تثبيت الموعد.",
        },
        {
          name: "التحضير",
          text:
            "يُوقف التدخين قبل أربعة أسابيع على الأقل؛ فالنيكوتين يؤثّر في بقاء الدهون وفي الالتئام. " +
            "تُناقش مضادات التخثّر وحبوب منع الحمل وبعض المكمّلات وتُوقف حيث يلزم. اشترِ ملابس واسعة " +
            "ووسادة خاصة، ورتّب من يساعدك — فلن تستطيع النوم أو الجلوس طبيعياً أسابيع.",
        },
        {
          name: "العملية",
          text:
            "تحت التخدير الكامل، من ثلاث إلى خمس ساعات. تُجمع الدهون وتُعالَج وتُحقن بكميات صغيرة، " +
            "مع الحرص على الابتعاد عن الأوعية العميقة. ويُلبَس مشدّ ضاغط، ويمكث معظم المرضى ليلة إلى " +
            "ليلتين.",
        },
        {
          name: "الأسبوعان الأولان",
          text:
            "تنام على البطن أو الجانب، ولا تجلس إلا على الوسادة المخصّصة ولفترات قصيرة. مناطق " +
            "الشفط مكدّمة ومؤلمة، والمشدّ يُلبس باستمرار. يُشجَّع المشي من اليوم الأول؛ والأرداف " +
            "متورّمة والشكل ليس نهائياً بعد.",
        },
        {
          name: "الأسبوع الثالث إلى الثاني عشر",
          text:
            "يصبح الجلوس مريحاً خلال أسبوعين إلى ثلاثة، والقيادة بعد أسبوعين إلى ثلاثة، والرياضة بعد " +
            "ستة إلى ثمانية. يهدأ التورّم خلال ثلاثة أشهر؛ والدهون التي تبقى دائمة، لكن الشكل النهائي " +
            "يُحكم عليه في ثلاثة إلى ستة أشهر.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro:
        "لهذه العملية خطر جسيم خاصّ بها، ويجب أن يُقال صريحاً لا عابراً.",
      items: [
        "الانصمام الدهني — دخول الدهون إلى الدم ووصولها إلى الرئتين؛ وقد يكون قاتلاً، ولا تقنية تُزيل الخطر تماماً",
        "تنخّر الدهون وأكياس زيتية وتصلّب في المناطق المنقولة، وقد تحتاج تصريفاً",
        "التهاب، وقد يصعب علاجه في المستوى العميق للردف ويستلزم نزع الطُعم، وتجمّع سوائل أو تأخّر التئام في مناطق الشفط",
        "عدم تناظر أو تفاوت في التحدّب، أو نتيجة أصغر من المخطّط لأن جزءاً متغيّراً من الدهون لا يبقى",
        "تجلّط وريدي وانصمام رئوي، يُقلَّل منهما بالمشي المبكّر والضغط — وفي الطُعم التزحزح وشدّ المحفظة وآثار ظاهرة",
      ],
      note:
        "اسأل أي عيادة مباشرةً كيف تتجنّب الحقن داخل الأوعية العميقة، ومن يُجري التخدير، وما يحدث " +
        "عند حدوث مضاعفة. عيادة تجيب بغموض عن الانصمام الدهني ليست عيادة يُحجز معها.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "كم يبقى من الدهون المنقولة؟",
          a:
            "نسبة متغيّرة — وكثيراً ما يُعاد امتصاص جزء كبير، فتكون النتيجة أصغر من الحجم مباشرةً بعد " +
            "العملية. ولهذا تُخطَّط العملية بتحفّظ، ولهذا تحتاج جلسة ثانية أحياناً بعد ستة إلى اثني " +
            "عشر شهراً. ولا يستطيع أي جرّاح أن يضمن نسبة.",
        },
        {
          q: "متى أستطيع الجلوس طبيعياً؟",
          a:
            "أسبوعان إلى ثلاثة من الجلوس على الوسادة فقط ولفترات قصيرة، والنوم على البطن أو الجانب. " +
            "يُعتقد أن الضغط المطوّل في الأسابيع الأولى يقلّل بقاء الدهون. والقيادة تنتظر أسبوعين إلى " +
            "ثلاثة، والرحلات الطويلة أربعة إلى ستة.",
        },
        {
          q: "هل العملية خطيرة؟",
          a:
            "تحمل خطراً حقيقياً للانصمام الدهني، وقد يكون قاتلاً، وهو أعلى من معظم عمليات التجميل. " +
            "يُقلَّل منه بالتقنية الدقيقة — قنيّات صغيرة، وتجنّب العضلة العميقة والأوعية الكبيرة، " +
            "وتحديد الحجم — لكنه لا يُزال. ومن المشروع أن تقرّر أن الخطر لا يستحقّ.",
        },
        {
          q: "الدهون أم الطُعم — أيّهما أفضل؟",
          a:
            "الدهون تمنح إحساساً طبيعياً وتُنحت مناطق الشفط، لكن جزءاً من الحجم يُفقد والحدّ هو ما لديك " +
            "من دهون. والطُعم يمنح حجماً متوقّعاً بلا منطقة جراحة ثانية، مقابل جسم غريب وخطر أعلى " +
            "للالتهاب والتزحزح. وتوزيع أنسجتك أنت هو ما يقرّر عادةً.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "صور جانبية وخلفية بملابس ضيّقة تتيح للجرّاح الحكم على البروز والدهون المانحة — وأن يقول " +
        "بصراحة هل النقل ممكن. ويعود إليك منسّق الرعاية بخطة وعرض سعر مكتوب.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
