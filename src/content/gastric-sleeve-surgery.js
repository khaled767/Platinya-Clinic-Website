// /gastric-sleeve-surgery — Laparoscopic sleeve gastrectomy.
//
// Copy rules: no promises, no "best clinic", no before/after claims, and every
// duration or risk stated as a range a bariatric surgeon would recognise.
// Surgery is presented as a tool, not a cure: follow-up and supplementation are
// part of the treatment, not an optional extra.

export default {
  slug: "/gastric-sleeve-surgery",
  group: { href: "/bariatric", label: { en: "Weight-loss surgery", ar: "جراحة السمنة" } },
  heroImage: "./assets/images/ai/services/bariatric/sleeve.webp",

  en: {
    title: "Gastric Sleeve Surgery in Istanbul",
    eyebrow: "Weight-loss surgery",
    lead:
      "The stomach is reshaped into a narrow tube — roughly 60–70% of it is removed — so it holds far " +
      "less and empties more slowly. It is a tool that makes appetite and portion size easier to manage; " +
      "it does not lose the weight for you.",
    cta: "Book a free assessment",
    heroAlt: "Gastric sleeve consultation at Platinya Clinic",
    stats: [
      { value: "1–2 h", label: "Operating time" },
      { value: "2–3 nights", label: "Hospital stay" },
      { value: "12–18 months", label: "Until weight settles" },
    ],
    candidate: {
      heading: "Who is a good candidate",
      intro:
        "The decision is not made on weight alone. It rests on body-mass index, on the conditions that " +
        "come with excess weight, on what has already been tried under supervision — and on a genuine " +
        "willingness to be followed up for years, not months.",
      items: [
        "A BMI of 40 or above, or 35 or above with a weight-related condition such as type 2 diabetes, high blood pressure or sleep apnoea",
        "A BMI of 30 or above with poorly controlled type 2 diabetes — permitted by some international guidance, decided case by case",
        "Previous structured attempts at weight loss — diet, activity, behavioural support — that did not hold over the long term",
        "Commitment to lifelong follow-up: blood tests, supplements and clinic visits, including the years when the weight is stable",
      ],
      note:
        "No operation is booked before a psychological assessment, an anaesthetic review and a dietetic " +
        "assessment. Active substance misuse or untreated psychiatric illness postpones surgery until it is " +
        "treated — not because of a rule, but because the follow-up will not survive otherwise.",
    },
    techniques: {
      heading: "How the operation is done",
      intro:
        "The principle is the same in every case; what changes is the diameter of the tube left behind and " +
        "whether a hernia is repaired at the same time.",
      items: [
        {
          name: "Laparoscopic sleeve",
          text:
            "Five or six small incisions, a camera, and staplers that divide the stomach along its greater " +
            "curvature. The open part is removed through one of the ports, so the stomach that remains is a " +
            "tube rather than a pouch with a bypass.",
        },
        {
          name: "Calibration — how narrow the tube is",
          text:
            "The tube is built over a sizing tube passed through the mouth, typically 36–40 French. " +
            "Narrower gives more restriction but more narrowing and reflux; wider gives less. This is a " +
            "surgical judgement, not a patient choice.",
        },
        {
          name: "Hiatal hernia repair and reflux",
          text:
            "The diaphragm is inspected during the operation, and a hiatal hernia is repaired in the same " +
            "session if found. Reflux that already exists can worsen after a sleeve, so it is assessed " +
            "beforehand and sometimes changes the operation chosen.",
        },
      ],
    },
    journey: {
      heading: "From consultation to long-term follow-up",
      steps: [
        {
          name: "Assessment",
          text:
            "Blood tests including iron, B12, folate, vitamin D and thyroid function; an endoscopy where " +
            "indicated; a dietetic review; a psychological assessment; and an anaesthetic opinion. Only then " +
            "is a date offered.",
        },
        {
          name: "The two weeks before",
          text:
            "A low-calorie diet, usually liquid or very low energy, shrinks the liver so the stomach can be " +
            "reached safely. Smoking stops at least four weeks before. Blood thinners are paused on " +
            "instruction.",
        },
        {
          name: "The operation and the stay",
          text:
            "Under general anaesthesia, one to two hours. Most patients stay two to three nights. A contrast " +
            "study is done on day one or two if there is any concern about the staple line, and fluids start " +
            "the same day.",
        },
        {
          name: "The first six weeks",
          text:
            "Liquids for one to two weeks, purée for two weeks, soft food for two, then normal textures. " +
            "Small portions, eaten slowly, with protein first and fluids kept apart from meals. Desk work is " +
            "usually possible after two to three weeks.",
        },
        {
          name: "The long term",
          text:
            "Vitamin B12, iron, folate, vitamin D and calcium for life, with blood tests at three, six and " +
            "twelve months and then yearly. Follow-up continues when the weight stops moving — that is when " +
            "deficiencies and regain appear.",
        },
      ],
    },
    risks: {
      heading: "What can go wrong",
      intro:
        "A sleeve is a permanent change to a healthy organ. These are the complications patients are " +
        "actually warned about, and they are the reason the operation is done in a hospital with " +
        "bariatric cover.",
      items: [
        "Leak from the staple line in roughly 1–3% of patients, usually between day 3 and day 10; it needs drainage, sometimes a stent, occasionally further surgery",
        "Bleeding from the staple line or the spleen, which may require transfusion and, rarely, reoperation",
        "Narrowing or twisting of the tube, causing repeated vomiting and difficulty swallowing, treated by endoscopic dilatation",
        "New or worse acid reflux — one of the most common complaints after a sleeve, and a reason some patients are steered towards a bypass instead",
        "Long-term deficiency of B12, iron, folate, vitamin D and calcium if supplements and monitoring lapse",
      ],
      note:
        "Weight regain happens, most often from year three onward, when portions creep back and follow-up " +
        "stops. Surgery is a tool, not a cure: it buys a window in which eating patterns can be rebuilt, and " +
        "the window closes if nothing is rebuilt inside it.",
    },
    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "How much weight will I lose?",
          a:
            "Typically around 25–30% of total body weight over the first one to two years, though the range " +
            "between patients is wide and depends on starting weight, adherence and follow-up. Nobody can " +
            "promise a figure before the assessment.",
        },
        {
          q: "Will I need supplements for life?",
          a:
            "In most cases, yes — vitamin B12, iron, folate, vitamin D and calcium, with blood tests to adjust " +
            "them. The stomach that is removed produces intrinsic factor and acid, so absorption changes " +
            "permanently.",
        },
        {
          q: "Can it be undone?",
          a:
            "The stomach is not restored to its original shape. If a sleeve fails — severe reflux, poor " +
            "weight loss, weight regain — the usual next step is conversion to a gastric bypass, which is a " +
            "larger operation.",
        },
        {
          q: "What about pregnancy afterwards?",
          a:
            "Pregnancy is possible, but most surgeons advise waiting 12–18 months so that weight has " +
            "stabilised and nutritional status is stable. Supplements and monitoring continue through the " +
            "pregnancy.",
        },
      ],
    },
    ctaBand: {
      heading: "Send your height, weight and medical history",
      text:
        "A bariatric surgeon reviews them and a coordinator comes back with whether an assessment is " +
        "sensible, what tests would be needed first, and a written quote — no obligation to book.",
      button: "Talk to a coordinator",
    },
    disclaimer:
      "General information, not medical advice. Suitability can only be judged after a full assessment by a " +
      "bariatric surgeon, including psychological and nutritional review; results and risks vary between " +
      "patients.",
  },

  ar: {
    title: "تكميم المعدة في إسطنبول",
    eyebrow: "جراحة السمنة",
    lead:
      "تُعاد المعدة على شكل أنبوب ضيّق — يُزال نحو ٦٠–٧٠٪ منها — فتحتوي كمية أقل بكثير وتُفرغ محتواها " +
      "ببطء. هو أداة تجعل ضبط الشهية وحجم الوجبة أسهل، لكنه لا ينزل الوزن عنك.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة تكميم المعدة في عيادة بلاتينيا",
    stats: [
      { value: "١–٢ ساعة", label: "مدة العملية" },
      { value: "٢–٣ ليالٍ", label: "الإقامة في المستشفى" },
      { value: "١٢–١٨ شهراً", label: "حتى يستقرّ الوزن" },
    ],
    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "لا يُبنى القرار على الوزن وحده، بل على مؤشّر كتلة الجسم والأمراض المرافقة له، وعلى ما جُرِّب " +
        "سابقاً تحت إشراف، وعلى استعداد حقيقي للمتابعة سنوات لا أشهراً.",
      items: [
        "مؤشّر كتلة الجسم ٤٠ أو أكثر، أو ٣٥ أو أكثر مع حالة مرتبطة بالوزن كالسكري من النوع الثاني أو ارتفاع الضغط أو انقطاع النفس النومي",
        "مؤشّر كتلة الجسم ٣٠ أو أكثر مع سكري من النوع الثاني غير مضبوط — تسمح به بعض الإرشادات الدولية ويُقرَّر حالة بحالة",
        "محاولات منظّمة سابقة لإنقاص الوزن — حمية ونشاط ودعم سلوكي — لم تصمد على المدى الطويل",
        "التزام بمتابعة مدى الحياة: تحاليل ومكمّلات وزيارات للعيادة، بما في ذلك سنوات ثبات الوزن",
      ],
      note:
        "لا تُحجز أي عملية قبل تقييم نفسي ورأي تخديري وتقييم غذائي. تعاطي المواد النشط أو الاضطراب النفسي " +
        "غير المعالَج يؤجّل العملية حتى يُعالَج — لا لأنها قاعدة، بل لأن المتابعة لن تصمد من دونه.",
    },
    techniques: {
      heading: "كيف تُجرى العملية",
      intro:
        "المبدأ واحد في كل الحالات؛ ما يتغيّر هو قطر الأنبوب المتبقّي، وهل يُصلَح فتق حجابي في الجلسة نفسها.",
      items: [
        {
          name: "التكميم بالمنظار",
          text:
            "خمسة أو ستة شقوق صغيرة وكاميرا ودبّاسات تفصل المعدة على امتداد انحناءها الكبير. ويُخرج الجزء " +
            "المفصول عبر إحدى المناظر، فتبقى المعدة أنبوباً لا كيساً مع تحويلة.",
        },
        {
          name: "المعايرة — كم يكون الأنبوب ضيّقاً",
          text:
            "يُبنى الأنبوب على أنبوب معايرة يُمرَّر عبر الفم، قطره عادةً ٣٦–٤٠ فرنش. الأضيق يعطي كبحاً أكبر " +
            "لكنه يرفع احتمال الضيق والارتجاع، والأوسع أقلّ كبحاً. وهو تقدير جراحي لا خيار للمريض.",
        },
        {
          name: "إصلاح الفتق الحجابي والارتجاع",
          text:
            "يُفحص الحجاب الحاجز أثناء العملية، ويُصلَح الفتق إن وُجد في الجلسة نفسها. والارتجاع الموجود " +
            "قبل العملية قد يسوء بعد التكميم، ولهذا يُقيَّم مسبقاً وقد يغيّر نوع العملية المختارة.",
        },
      ],
    },
    journey: {
      heading: "من الاستشارة إلى المتابعة طويلة المدى",
      steps: [
        {
          name: "التقييم",
          text:
            "تحاليل تشمل الحديد وفيتامين ب١٢ والفولات وفيتامين D ووظيفة الدرق، وتنظير علوي عند الحاجة، " +
            "ومراجعة غذائية، وتقييم نفسي، ورأي تخديري. وبعد ذلك فقط يُعرض الموعد.",
        },
        {
          name: "الأسبوعان السابقان",
          text:
            "حمية منخفضة السعرات، سائلة أو شديدة الانخفاض غالباً، تُصغّر الكبد حتى يُوصَل إلى المعدة " +
            "بأمان. يُوقف التدخين قبل أربعة أسابيع على الأقل، وتُوقف مضادات التخثّر وفق التعليمات.",
        },
        {
          name: "العملية والإقامة",
          text:
            "تحت التخدير الكامل، وتستغرق ساعة إلى ساعتين. يمكث معظم المرضى ليلتين إلى ثلاث. ويُجرى تصوير " +
            "بالظليل في اليوم الأول أو الثاني عند وجود أي قلق على خط الدبّاسات، وتبدأ السوائل في اليوم نفسه.",
        },
        {
          name: "الأسابيع الستة الأولى",
          text:
            "سوائل أسبوعاً إلى اثنين، ثم مهروس أسبوعين، ثم طري أسبوعين، ثم قوام عادي. حصص صغيرة، أكل " +
            "بطيء، والبروتين أولاً، وفصل السوائل عن الوجبات. والعمل المكتبي ممكن عادةً بعد أسبوعين إلى ثلاثة.",
        },
        {
          name: "المدى الطويل",
          text:
            "فيتامين ب١٢ والحديد والفولات وفيتامين D والكالسيوم مدى الحياة، مع تحاليل في الشهر الثالث " +
            "والسادس والثاني عشر ثم سنوياً. وتستمر المتابعة بعد توقّف الوزن — فهناك يظهر النقص وتعود الزيادة.",
        },
      ],
    },
    risks: {
      heading: "ما قد يسوء",
      intro:
        "التكميم تغيير دائم في عضو سليم. هذه هي المضاعفات التي يُحذَّر منها المرضى فعلاً، وهي سبب إجرائه " +
        "في مستشفى فيه تغطية لجراحة السمنة.",
      items: [
        "تسرّب من خط الدبّاسات في نحو ١–٣٪ من المرضى، غالباً بين اليوم الثالث والعاشر؛ يحتاج تصريفاً وأحياناً دعامة وأحياناً عملية أخرى",
        "نزيف من خط الدبّاسات أو من الطحال، قد يستلزم نقل دم، ونادراً إعادة عملية",
        "ضيق أو التواء في الأنبوب يسبب قيئاً متكرراً وصعوبة في البلع، ويُعالج بالتوسيع بالمنظار",
        "ارتجاع معدي مريئي جديد أو أسوأ من قبل — من أكثر الشكاوى بعد التكميم، وهو سبب توجيه بعض المرضى إلى التحويلة بدلاً منه",
        "نقص طويل المدى في فيتامين ب١٢ والحديد والفولات وفيتامين D والكالسيوم إذا انقطعت المكمّلات والمتابعة",
      ],
      note:
        "تعود زيادة الوزن، وغالباً من السنة الثالثة فصاعداً، حين تتسلّل الحصص إلى حجمها السابق وتنقطع " +
        "المتابعة. العملية أداة لا علاج: تشتري نافذة يمكن فيها إعادة بناء عادات الأكل، وتُغلق النافذة إن " +
        "لم يُبنَ فيها شيء.",
    },
    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "كم سأنزل من الوزن؟",
          a:
            "نحو ٢٥–٣٠٪ من وزن الجسم الكلي خلال سنة إلى سنتين، لكن الفارق بين مريض وآخر كبير ويعتمد على " +
            "الوزن البدئي والالتزام والمتابعة. ولا يمكن لأحد أن يَعِد برقم قبل التقييم.",
        },
        {
          q: "هل أحتاج مكمّلات مدى الحياة؟",
          a:
            "في معظم الحالات نعم — فيتامين ب١٢ والحديد والفولات وفيتامين D والكالسيوم، مع تحاليل دورية " +
            "لضبطها. فالجزء المُزال من المعدة هو الذي يفرز العامل الداخلي والحامض، ولهذا يتغيّر الامتصاص نهائياً.",
        },
        {
          q: "هل يمكن التراجع عنها؟",
          a:
            "لا تعود المعدة إلى شكلها الأول. وإذا فشل التكميم — ارتجاع شديد أو نزول ضعيف أو عودة الوزن — " +
            "فالخطوة التالية المعتادة هي التحويل إلى تحويلة معوية، وهي عملية أكبر.",
        },
        {
          q: "وماذا عن الحمل بعدها؟",
          a:
            "الحمل ممكن، لكن ينصح معظم الجرّاحين بالانتظار ١٢–١٨ شهراً حتى يستقرّ الوزن وتستقرّ الحالة " +
            "الغذائية. وتستمر المكمّلات والمتابعة خلال الحمل.",
        },
      ],
    },
    ctaBand: {
      heading: "أرسل طولك ووزنك وتاريخك المرضي",
      text:
        "يراجعها جرّاح سمنة، ويعود إليك منسّق الرعاية بما إذا كان التقييم مناسباً، وما التحاليل اللازمة " +
        "أولاً، وعرض سعر مكتوب — بلا التزام بالحجز.",
      button: "تحدّث مع منسّق الرعاية",
    },
    disclaimer:
      "معلومات عامة وليست نصيحة طبية. لا يمكن الحكم على الملاءمة إلا بعد تقييم كامل لدى جرّاح سمنة، " +
      "يشمل مراجعة نفسية وغذائية؛ والنتائج والمخاطر تختلف من مريض لآخر.",
  },
};
