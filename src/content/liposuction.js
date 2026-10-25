// /liposuction — Liposuction (tumescent, VASER, 360).
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
  slug: "/liposuction",
  group: { href: "/plastic-body", label: { en: "Body contouring", ar: "نحت القوام" } },
  heroImage: "./assets/images/ai/services/plastic/vaser360.webp",

  en: {
    title: "Liposuction in Istanbul (VASER and Tumescent)",
    eyebrow: "Body contouring",
    lead:
      "Liposuction removes fat from specific areas to change the outline of the body. It is a " +
      "contouring operation: the scale barely moves, and what changes is where the fat sits.",
    cta: "Book a free assessment",
    heroAlt: "Liposuction consultation at Platinya Clinic",

    stats: [
      { value: "1–3 h", label: "Surgery time" },
      { value: "Day case", label: "or one night" },
      { value: "4–6 weeks", label: "Compression garment" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "The two things that decide the result are how much fat there is to remove and how well " +
        "the skin will retract afterwards. The second is the one patients underestimate.",
      items: [
        "Localised fat on the abdomen, flanks, back, thighs or arms that has not changed with training",
        "Weight stable for about six months, and close to what you intend to keep",
        "Skin that still has elasticity — it has to shrink back onto the new contour",
        "No clotting disorder, and no uncontrolled diabetes or heart disease",
      ],
      note:
        "Liposuction is not a treatment for obesity and not a substitute for weight loss. If there " +
        "is a lot of weight to lose, losing it first gives a better and safer result. If the skin " +
        "is already loose, removing fat from under it makes the looseness more obvious — that is a " +
        "case for skin removal, not for more liposuction.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "All liposuction works through small incisions with a cannula. The difference is how the " +
        "fat is loosened before it is aspirated, and how much area is treated in one session.",
      items: [
        {
          name: "Tumescent liposuction",
          text:
            "A large volume of dilute local anaesthetic and adrenaline is injected first, which " +
            "numbs the area, narrows the blood vessels and reduces bleeding. Fat is then aspirated " +
            "through a cannula. The standard technique, and the one most others are built on.",
        },
        {
          name: "VASER (ultrasound-assisted)",
          text:
            "Ultrasound energy is used to loosen the fat before it is removed. It is claimed to be " +
            "gentler on the surrounding tissue and to help skin retract, particularly on the back " +
            "and flanks. It is slower, costs more, and carries its own risk of burns under the skin.",
        },
        {
          name: "360° contouring",
          text:
            "The abdomen, flanks and back are treated as one continuous unit, so the transition " +
            "around the waist is smooth rather than a series of separate patches. A longer operation " +
            "and a larger volume removed, so it is planned with more care and more recovery time.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and planning",
          text:
            "The areas are marked standing up, skin elasticity is assessed, and the expected volume " +
            "is discussed honestly — including what will not change. Blood tests, and a cardiology " +
            "opinion where relevant, before a date is set.",
        },
        {
          name: "Preparation",
          text:
            "Smoking stops four weeks before, blood thinners and some supplements about ten days " +
            "before, and you fast for six to eight hours. Compression garments are measured and " +
            "ordered in advance. Arrange help at home for the first two to three days.",
        },
        {
          name: "The operation",
          text:
            "Under sedation or general anaesthesia, one to three hours depending on the number of " +
            "areas. Fluid is infiltrated, fat is aspirated through incisions of a few millimetres, " +
            "and the garment is fitted in theatre. Most patients go home the same day; larger " +
            "volumes stay one night.",
        },
        {
          name: "The first two weeks",
          text:
            "Fluid leaks from the incision sites for a day or two, and the garment is worn day and " +
            "night. Bruising is extensive and peaks in the first week. Walking from day one; desk " +
            "work is usually possible after three to seven days.",
        },
        {
          name: "Weeks three to twelve",
          text:
            "Swelling reduces over four to six weeks, and the garment continues for that time. " +
            "Exercise resumes at four to six weeks. The contour firms up over three to six months, " +
            "and the final result is judged at six to twelve.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "Liposuction is common and it is still surgery, with a small number of risks that are " +
        "serious rather than cosmetic.",
      items: [
        "Contour irregularity, dimpling or asymmetry — the most common complaint, and the hardest to correct",
        "Skin laxity or sagging after the fat is removed, when elasticity was poor to begin with",
        "Burns or skin necrosis, particularly with ultrasound-assisted techniques",
        "Infection, seroma needing repeated drainage, and delayed healing at the incision sites",
        "Thrombosis, pulmonary embolism and fat embolism — rare, and reduced by early walking and compression; internal injury to the abdominal wall or organs is rarer still and more likely with aggressive deep suction",
      ],
      note:
        "Tell us about blood thinners, clotting problems, heart or liver disease, and any previous " +
        "liposuction in the same area. There is a limit to how much can safely be removed in one " +
        "session; a surgeon who agrees to any volume asked for is not being careful.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "How much weight will I lose?",
          a:
            "Very little, and that is deliberate: fat is lighter than it looks, and the safe volume " +
            "in one session is limited. The change is in shape and in the fit of clothes. If the " +
            "goal is weight loss, this is the wrong operation.",
        },
        {
          q: "Will the fat come back?",
          a:
            "The fat cells that are removed do not return, but the ones left behind can enlarge if " +
            "you gain weight — and they tend to enlarge evenly, so the shape can change. Keeping " +
            "weight stable is what protects the result.",
        },
        {
          q: "Does it treat cellulite?",
          a:
            "Not reliably. Cellulite is a structure of the skin and the fibrous bands beneath it, " +
            "not simply fat. Liposuction can sometimes make dimpling more visible, because it " +
            "removes the fat that was filling it out. Be sceptical of anyone selling it as a " +
            "cellulite cure.",
        },
        {
          q: "When will I see the result?",
          a:
            "An early change is visible at two to three weeks, but swelling hides the true contour " +
            "for longer. Most of the result is there at three months, and the final shape at six to " +
            "twelve — which is also when a revision, if needed, would be considered.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "Front, side and rear views are enough to say which areas can be treated, roughly what " +
        "volume is realistic, and whether the skin will retract. A coordinator replies with a plan " +
        "and a written quote.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "شفط الدهون في إسطنبول (VASER والتخدير الموضعي المائي)",
    eyebrow: "نحت القوام",
    lead:
      "شفط الدهون يُزيل الدهون من مناطق محدّدة لتغيير خطّ الجسم. هو عملية نحت: الميزان لا يتحرّك " +
      "تقريباً، والذي يتغيّر هو موضع الدهون.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة شفط الدهون في عيادة بلاتينيا",

    stats: [
      { value: "١–٣ ساعات", label: "مدة العملية" },
      { value: "يوم واحد", label: "أو ليلة واحدة" },
      { value: "٤–٦ أسابيع", label: "المشدّ الضاغط" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "أمران يقرّران النتيجة: كمية الدهون التي يمكن إزالتها، ومدى ارتداد الجلد بعدها. والثاني هو ما " +
        "يقلّل المرضى من تقديره.",
      items: [
        "دهون موضعية في البطن أو الجانبين أو الظهر أو الفخذين أو الذراعين لم تتغيّر مع التمرين",
        "وزن ثابت منذ نحو ستة أشهر، وقريب ممّا تنوي الحفاظ عليه",
        "جلد لا يزال مرناً — عليه أن ينكمش على المحيط الجديد",
        "لا اضطراب في التخثّر، ولا سكري أو مرض قلب غير منضبط",
      ],
      note:
        "شفط الدهون ليس علاجاً للسمنة ولا بديلاً عن إنقاص الوزن. وإن كان أمامك وزن كبير تخسره، " +
        "فخسارته أولاً تعطي نتيجة أفضل وأكثر أماناً. وإن كان الجلد رخواً بالفعل، فإزالة الدهون من " +
        "تحته تُظهر الرخاوة أكثر — وهذا موضع إزالة الجلد لا مزيد من الشفط.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "كل شفط الدهون يعمل عبر شقوق صغيرة بقنيّة. والفرق في كيفية إرخاء الدهون قبل سحبها، وفي حجم " +
        "المنطقة المعالَجة في الجلسة.",
      items: [
        {
          name: "الشفط بالتخدير الموضعي المائي (Tumescent)",
          text:
            "يُحقن أولاً حجم كبير من محلول مخدّر مخفّف مع الأدرينالين، فيخدّر المنطقة ويضيّق الأوعية " +
            "ويقلّل النزف. ثم تُسحب الدهون بقنيّة. وهي التقنية المعيارية التي تُبنى عليها معظم غيرها.",
        },
        {
          name: "VASER (بمساعدة الأمواج فوق الصوتية)",
          text:
            "تُستخدم طاقة فوق صوتية لإرخاء الدهون قبل إزالتها. ويُقال إنها ألطف على الأنسجة المحيطة " +
            "وتساعد الجلد على الارتداد، خصوصاً في الظهر والجانبين. لكنها أبطأ وأغلى، وتحمل خطرها " +
            "الخاص في حروق تحت الجلد.",
        },
        {
          name: "النحت الدائري ٣٦٠°",
          text:
            "تُعالَج البطن والجانبان والظهر كوحدة متّصلة، فيكون الانتقال حول الخصر ناعماً لا رقعاً " +
            "منفصلة. وهي عملية أطول وحجم مسحوب أكبر، فتُخطَّط بعناية أكثر ونقاهة أطول.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتخطيط",
          text:
            "تُعلَّم المناطق واقفاً، وتُقيَّم مرونة الجلد، ويُناقش الحجم المتوقّع بصراحة — بما فيه ما " +
            "لن يتغيّر. وتحاليل دم، ورأي طبيب قلب عند اللزوم، قبل تثبيت الموعد.",
        },
        {
          name: "التحضير",
          text:
            "يُوقف التدخين قبل أربعة أسابيع، ومضادات التخثّر وبعض المكمّلات قبل عشرة أيام تقريباً، " +
            "ويُصام ست إلى ثماني ساعات. تُقاس المشدّات الضاغطة وتُطلب مسبقاً. ورتّب من يساعدك في " +
            "الأيام الثلاثة الأولى.",
        },
        {
          name: "العملية",
          text:
            "تحت التهدئة أو التخدير الكامل، من ساعة إلى ثلاث حسب عدد المناطق. يُحقن المحلول، وتُسحب " +
            "الدهون عبر شقوق بضعة ميلليمترات، ويُلبس المشدّ في غرفة العمليات. ويعود معظم المرضى في " +
            "اليوم نفسه؛ والأحجام الأكبر تبقى ليلة واحدة.",
        },
        {
          name: "الأسبوعان الأولان",
          text:
            "يتسرّب سائل من مواضع الشقّ يوماً أو يومين، ويُلبس المشدّ ليلاً ونهاراً. الكدمات واسعة " +
            "وذروتها في الأسبوع الأول. المشي من اليوم الأول؛ والعمل المكتبي ممكن عادةً بعد ثلاثة إلى " +
            "سبعة أيام.",
        },
        {
          name: "الأسبوع الثالث إلى الثاني عشر",
          text:
            "يتراجع التورّم خلال أربعة إلى ستة أسابيع، ويستمرّ المشدّ تلك المدة. تعود الرياضة في " +
            "الأسبوع الرابع إلى السادس. ويتماسك المحيط خلال ثلاثة إلى ستة أشهر، وتُحكم النتيجة " +
            "النهائية في ستة إلى اثني عشر.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro:
        "شفط الدهون شائع، وهو مع ذلك جراحة، ومخاطره القليلة بعضها جسيم لا تجميلي.",
      items: [
        "تفاوت في المحيط أو تنقّر أو عدم تناظر — وهو أكثر الشكاوى شيوعاً وأصعبها تصحيحاً",
        "رخاوة أو تدلٍّ في الجلد بعد إزالة الدهون، إذا كانت المرونة ضعيفة أصلاً",
        "حروق أو تنخّر في الجلد، خصوصاً مع التقنيات المساعدة بالأمواج فوق الصوتية",
        "التهاب وتأخّر التئام في مواضع الشقّ، وتجمّع سوائل (سيروما) قد يحتاج تصريفاً متكرّراً",
        "تجلّط وريدي وانصمام رئوي وانصمام دهني — نادرة، ويُقلَّل منها بالمشي المبكّر والضغط؛ وإصابة داخلية في جدار البطن أو الأعضاء أندر وأخطر، واحتمالها أعلى مع الشفط العميق العنيف",
      ],
      note:
        "أخبرنا عن مضادات التخثّر ومشاكل التخثّر وأمراض القلب أو الكبد وأي شفط دهون سابق في المنطقة " +
        "نفسها. وهناك حدّ لما يمكن إزالته بأمان في جلسة واحدة؛ والجرّاح الذي يوافق على أي حجم يُطلب " +
        "منه ليس جرّاحاً حذراً.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "كم كيلوغراماً سأنزل؟",
          a:
            "قليلاً جداً، وهذا مقصود: الدهون أخفّ ممّا تبدو، والحجم الآمن في الجلسة محدود. والتغيير في " +
            "الشكل وفي مقاس الملابس. وإن كان الهدف إنقاص الوزن فهذه العملية الخاطئة.",
        },
        {
          q: "هل تعود الدهون؟",
          a:
            "الخلايا الدهنية المُزالة لا تعود، لكن الخلايا المتبقّية تتضخّم إن زاد وزنك — وتميل إلى " +
            "التضخّم بالتساوي، فيتغيّر الشكل. وثبات الوزن هو ما يحمي النتيجة.",
        },
        {
          q: "هل يعالج السيلوليت؟",
          a:
            "ليس بموثوقية. السيلوليت بنية في الجلد والأشرطة الليفية تحته، وليس دهوناً بسيطة. وقد يجعل " +
            "شفط الدهون التنقّر أوضح أحياناً، لأنه يُزيل الدهون التي كانت تملؤه. وكن متشكّكاً فيمن " +
            "يبيعه كعلاج شافٍ للسيلوليت.",
        },
        {
          q: "متى أرى النتيجة؟",
          a:
            "يظهر تغيير مبكّر في أسبوعين إلى ثلاثة، لكن التورّم يخفي المحيط الحقيقي أطول من ذلك. معظم " +
            "النتيجة واضح في ثلاثة أشهر، والشكل النهائي في ستة إلى اثني عشر — وهو أيضاً وقت النظر في " +
            "تعديل إن لزم.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "صور أمامية وجانبية وخلفية تكفي لنقول أي مناطق يمكن علاجها، وما الحجم الواقعي تقريباً، وهل " +
        "سينكمش الجلد. ويعود إليك منسّق الرعاية بخطة وعرض سعر مكتوب.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
