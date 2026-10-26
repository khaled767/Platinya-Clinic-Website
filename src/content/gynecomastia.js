// /gynecomastia — Male breast reduction.
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
  slug: "/gynecomastia",
  group: { href: "/plastic-body", label: { en: "Body contouring", ar: "نحت القوام" } },
  heroImage: "/assets/images/ai/services/plastic/hero-body.webp",

  en: {
    title: "Gynecomastia Surgery (Male Breast Reduction) in Istanbul",
    eyebrow: "Body contouring",
    lead:
      "Gynecomastia is enlargement of the male breast. Surgery removes the gland behind the nipple, " +
      "the fat around it, or both — but only after the cause has been looked for, because some " +
      "causes are medical and some are reversible.",
    cta: "Book a free assessment",
    heroAlt: "Gynecomastia consultation at Platinya Clinic",

    stats: [
      { value: "1–2 h", label: "Surgery time" },
      { value: "Day case", label: "or one night" },
      { value: "3–4 weeks", label: "Compression vest" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "True gynecomastia is glandular tissue — a firm disc behind the nipple — and it does not go " +
        "away with training. Fat alone is pseudogynecomastia, and it is treated differently.",
      items: [
        "A firm, sometimes tender disc of tissue behind one or both nipples",
        "Enlargement that has been stable for two years or more after puberty",
        "Pseudogynecomastia: fat without a gland, in someone close to a stable weight",
        "Discomfort, asymmetry, or restriction in what you will wear or do",
      ],
      note:
        "Before any operation, the cause is excluded. Drugs — cannabis, anabolic steroids, alcohol, " +
        "some blood pressure and prostate medicines — are the most common reversible cause. " +
        "Hormonal problems, thyroid disease, liver or kidney disease and, rarely, a testicular " +
        "tumour also present this way. Blood tests and a testicular examination come first; if " +
        "something is found, it is treated, not operated around.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "The operation is planned around what is actually there — gland, fat, or skin — and the " +
        "three are present in different proportions in different men.",
      items: [
        {
          name: "Gland excision",
          text:
            "The gland is removed through a semicircular incision around the lower half of the " +
            "areola. It is the only way to remove firm glandular tissue, and the incision usually " +
            "heals well because it follows the edge of the pigment. A small drain is often left for " +
            "a day or two.",
        },
        {
          name: "Liposuction",
          text:
            "Used for the fat component, and to feather the edges so the chest does not look " +
            "operated. On its own it does not remove gland, which is why liposuction alone often " +
            "leaves a hard lump behind the nipple — the most common reason for a revision.",
        },
        {
          name: "Combined with skin removal",
          text:
            "In significant enlargement, or after major weight loss, there is excess skin that will " +
            "not retract. It is removed, with the scar placed around the areola or horizontally " +
            "across the chest. A larger operation, and a scar that has to be accepted.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and assessment",
          text:
            "The chest is examined lying and standing, the gland is distinguished from fat, and the " +
            "testicles are examined. Blood tests for hormones and liver function, and an ultrasound " +
            "of the chest or testicles where indicated, before anything is scheduled.",
        },
        {
          name: "Preparation",
          text:
            "Any causative drug is stopped with the treating doctor's agreement — never on your own " +
            "if it is prescribed. Smoking stops four weeks before, blood thinners about ten days " +
            "before, and you fast for six to eight hours. A compression vest is ordered in advance.",
        },
        {
          name: "The operation",
          text:
            "Under general anaesthesia, one to two hours. Gland is excised, fat is liposuctioned, " +
            "and the contour is checked with you sitting up. The vest is fitted in theatre. Most " +
            "patients go home the same day, some stay one night.",
        },
        {
          name: "The first two weeks",
          text:
            "The vest is worn day and night, and a drain — if used — comes out in a day or two. " +
            "Swelling and bruising are significant, and the chest feels tight. Desk work after " +
            "three to seven days; no lifting, no chest exercises.",
        },
        {
          name: "Weeks three to twelve",
          text:
            "The vest continues for three to four weeks in total. Aerobic exercise at three to four " +
            "weeks, weights and chest work at six. Swelling settles over three months, and the final " +
            "contour — including any minor irregularity — is judged at six.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "Most of the risks here are about contour, and one is about leaving the cause untreated.",
      items: [
        "Contour deformity — a saucer-shaped dent, a residual lump, or asymmetry between the two sides, if too much or too little tissue is removed",
        "Recurrence, if glandular tissue is left behind or a causative drug is continued",
        "Numbness or hypersensitivity of the nipple, usually improving over months",
        "Poor or widened scarring, and, rarely, loss of the nipple-areola complex if its blood supply is compromised",
        "Thrombosis, reduced by early walking, and infection — more likely in smokers; haematoma or seroma may need drainage and can affect the final shape",
      ],
      note:
        "Say honestly what you take — steroids, cannabis, supplements, prescribed medicines. This is " +
        "not a judgement; it is the difference between an operation that works and one that comes " +
        "back. If a hormonal cause is found, it is treated separately.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "Is it cancer?",
          a:
            "Gynecomastia itself is not breast cancer, and in men it is usually benign. But a " +
            "unilateral, hard, fixed or discharging lump is not the same thing and must be " +
            "investigated — which is why examination and, where needed, ultrasound come before " +
            "surgery rather than after.",
        },
        {
          q: "Will it come back?",
          a:
            "If the gland is properly excised and the cause is removed, recurrence is uncommon. It " +
            "returns more often when liposuction alone was done, when gland was left behind to " +
            "preserve the nipple, or when steroids or cannabis continue. A small residual fullness " +
            "is not the same as recurrence.",
        },
        {
          q: "Do I have to stop smoking cannabis or steroids?",
          a:
            "Yes — and not only for healing. Both can drive the enlargement, and continuing them " +
            "after surgery is the most reliable way to undo it. Prescribed medicines are different: " +
            "they are changed only with the doctor who prescribed them.",
        },
        {
          q: "Will there be a visible scar?",
          a:
            "The incision follows the lower edge of the areola and usually fades to a fine line over " +
            "six to twelve months. If skin has to be removed, the scar is longer — around the " +
            "areola or across the chest. It is permanent, and it is the main trade-off of the " +
            "operation.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "A front view and a side view are enough to judge whether this is gland, fat or skin — and " +
        "whether blood tests are needed before anything else. A coordinator replies with a plan and " +
        "a written quote.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "جراحة التثدّي عند الرجال في إسطنبول",
    eyebrow: "نحت القوام",
    lead:
      "التثدّي (الغينيكوماستيا) تضخّم في ثدي الرجل. تُزيل الجراحة الغدّة خلف الحلمة، أو الدهون حولها، " +
      "أو الاثنتين — لكن بعد البحث عن السبب، لأن بعض الأسباب طبية وبعضها قابل للتراجع.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة التثدّي عند الرجال في عيادة بلاتينيا",

    stats: [
      { value: "١–٢ ساعة", label: "مدة العملية" },
      { value: "يوم واحد", label: "أو ليلة واحدة" },
      { value: "٣–٤ أسابيع", label: "الصدرية الضاغطة" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "التثدّي الحقيقي نسيج غدّي — قرص صلب خلف الحلمة — ولا يذهب بالتمرين. أما الدهون وحدها فهي " +
        "تثدٍّ كاذب، ويُعالَج بشكل مختلف.",
      items: [
        "قرص نسيجي صلب، ومؤلم أحياناً، خلف حلمة واحدة أو كلتيهما",
        "تضخّم مستقرّ منذ سنتين أو أكثر بعد سنّ البلوغ",
        "تثدٍّ كاذب: دهون بلا غدّة، عند شخص قريب من وزن مستقر",
        "انزعاج أو عدم تناظر أو تقييد في ما تلبسه أو تفعله",
      ],
      note:
        "قبل أي عملية يُستبعد السبب. والأدوية — القنّب والستيرويدات الابتنائية والكحول وبعض أدوية ضغط " +
        "الدم والبروستات — هي السبب القابل للتراجع الأكثر شيوعاً. كذلك تظهر بهذه الصورة اضطرابات " +
        "هرمونية وأمراض الغدّة الدرقية والكبد والكلى، ونادراً ورم في الخصية. التحاليل وفحص الخصية " +
        "يأتيان أولاً؛ وإن وُجد سبب عُولج، لا أُجريت الجراحة حوله.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "تُبنى العملية على ما هو موجود فعلاً — غدّة أو دهون أو جلد — وتختلف نسبتها من رجل لآخر.",
      items: [
        {
          name: "استئصال الغدّة",
          text:
            "تُزال الغدّة عبر شقّ نصف دائري حول النصف السفلي من الهالة. وهو الطريق الوحيد لإزالة النسيج " +
            "الغدّي الصلب، والشقّ يلتئم عادةً جيداً لأنه يتبع حدّ التصبّغ. ويُترك تصريف صغير غالباً " +
            "يوماً أو يومين.",
        },
        {
          name: "شفط الدهون",
          text:
            "يُستخدم للمكوّن الدهني، ولتخفيف الحدود حتى لا يبدو الصدر مصنوعاً. وهو وحده لا يُزيل " +
            "الغدّة، ولهذا كثيراً ما يترك الشفط وحده كتلة صلبة خلف الحلمة — وهو أكثر أسباب التعديل.",
        },
        {
          name: "الجمع مع إزالة الجلد",
          text:
            "في التضخّم الكبير، أو بعد نزول وزن كبير، يوجد جلد زائد لا ينكمش. يُزال الجلد، ويكون الأثر " +
            "حول الهالة أو أفقياً على الصدر. عملية أكبر، وأثر يجب قبوله.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتقييم",
          text:
            "يُفحص الصدر مستلقياً وواقفاً، وتُفرَّق الغدّة من الدهون، وتُفحص الخصيتان. وتحاليل للهرمونات " +
            "ووظائف الكبد، وأمواج فوق صوتية للصدر أو الخصية حيث تلزم، قبل تحديد أي موعد.",
        },
        {
          name: "التحضير",
          text:
            "يُوقف أي دواء مُسبِّب باتّفاق الطبيب المعالج — ولا توقفه بنفسك إن كان موصوفاً. ويُوقف " +
            "التدخين قبل أربعة أسابيع، ومضادات التخثّر قبل عشرة أيام تقريباً، ويُصام ست إلى ثماني " +
            "ساعات. وتُطلب الصدرية الضاغطة مسبقاً.",
        },
        {
          name: "العملية",
          text:
            "تحت التخدير الكامل، من ساعة إلى ساعتين. تُستأصل الغدّة وتُشفط الدهون ويُتحقّق من المحيط " +
            "وأنت جالس. وتُلبس الصدرية في غرفة العمليات. ويعود معظم المرضى في اليوم نفسه، وبعضهم يبقى " +
            "ليلة.",
        },
        {
          name: "الأسبوعان الأولان",
          text:
            "تُلبس الصدرية ليلاً ونهاراً، ويُنزع التصريف — إن استُخدم — في يوم أو يومين. التورّم " +
            "والكدمات واضحة، والصدر مشدود. العمل المكتبي بعد ثلاثة إلى سبعة أيام؛ ولا حمل ولا تمرين " +
            "للصدر.",
        },
        {
          name: "الأسبوع الثالث إلى الثاني عشر",
          text:
            "تستمرّ الصدرية ثلاثة إلى أربعة أسابيع في المجموع. الرياضة الهوائية في الأسبوع الثالث إلى " +
            "الرابع، والأوزان وتمارين الصدر في السادس. يهدأ التورّم خلال ثلاثة أشهر، ويُحكم على المحيط " +
            "النهائي — بما فيه أي تفاوت بسيط — في الشهر السادس.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro:
        "معظم المخاطر هنا تتعلّق بالمحيط، وواحدة تتعلّق بترك السبب بلا علاج.",
      items: [
        "تشوّه في المحيط — انخساف على شكل طبق أو كتلة متبقّية أو عدم تناظر بين الجانبين، إذا أُزيل نسيج أكثر أو أقلّ من اللازم",
        "عود التضخّم، إذا بقي نسيج غدّي أو استمرّ دواء مُسبِّب",
        "تنميل أو فرط حساسية في الحلمة، يتحسّن عادةً على مدى أشهر",
        "أثر رديء أو عريض، ونادراً فقدان الهالة والحلمة إذا تأثّر ترويتها الدموية",
        "تجلّط، يُقلَّل منه بالمشي المبكّر، والتهاب أكثر احتمالاً عند المدخّنين؛ وورم دموي أو تجمّع سوائل قد يحتاج تصريفاً ويؤثّر في الشكل النهائي",
      ],
      note:
        "قل بصراحة ما تتناوله — ستيرويدات وقنّب ومكمّلات وأدوية موصوفة. هذا ليس حكماً على أحد؛ إنه " +
        "الفرق بين عملية تنجح وأخرى تعود. وإن وُجد سبب هرموني عُولج على حدة.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "هل هو سرطان؟",
          a:
            "التثدّي نفسه ليس سرطان ثدي، وهو حميد عادةً عند الرجال. لكن كتلة واحدة صلبة ثابتة أو ذات " +
            "إفراز ليست الشيء ذاته ويجب فحصها — ولهذا يأتي الفحص والأمواج فوق الصوتية حيث يلزم قبل " +
            "الجراحة لا بعدها.",
        },
        {
          q: "هل يعود بعد العملية؟",
          a:
            "إذا استُؤصلت الغدّة جيداً وأُزيل السبب، فالعود غير شائع. ويعود أكثر عندما يُجرى الشفط " +
            "وحده، أو يُترك نسيج غدّي للحفاظ على الحلمة، أو يستمرّ تعاطي الستيرويدات أو القنّب. " +
            "وامتلاء بسيط متبقٍّ ليس عوداً.",
        },
        {
          q: "هل يجب أن أتوقّف عن القنّب أو الستيرويدات؟",
          a:
            "نعم — وليس للالتئام وحده. فكلاهما يُغذّي التضخّم، والاستمرار بعدهما أضمن طريق لإبطال " +
            "النتيجة. أما الأدوية الموصوفة فحكمها مختلف: تُغيَّر فقط مع الطبيب الذي وصفها.",
        },
        {
          q: "هل سيبقى أثر ظاهر؟",
          a:
            "يتبع الشقّ الحدّ السفلي للهالة ويبهت عادةً إلى خطّ رفيع خلال ستة إلى اثني عشر شهراً. وإن " +
            "لزمت إزالة جلد، يكون الأثر أطول — حول الهالة أو أفقياً على الصدر. وهو دائم، ويشكّل " +
            "المقابل الأساسي للعملية.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "صورة أمامية وأخرى جانبية تكفيان للحكم هل الأمر غدّة أو دهون أو جلد — وهل تلزم تحاليل قبل أي " +
        "شيء آخر. ويعود إليك منسّق الرعاية بخطة وعرض سعر مكتوب.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
