// /stomach-balloon — Intragastric balloon.
//
// Copy rules: no promises, no "best clinic", no before/after claims, and every
// duration or risk stated as a range a bariatric physician would recognise.
// A balloon is explicitly framed as a temporary aid inside a supervised
// programme — never as a substitute for changing how someone eats.

export default {
  slug: "/stomach-balloon",
  group: { href: "/bariatric", label: { en: "Weight-loss surgery", ar: "جراحة السمنة" } },
  heroImage: "./assets/images/ai/services/bariatric/balloon.webp",

  en: {
    title: "Gastric Balloon in Istanbul",
    eyebrow: "Weight-loss surgery",
    lead:
      "A balloon is placed inside the stomach and filled, so there is less room for food and you feel full " +
      "sooner. It stays for six to twelve months and is then removed. It is a temporary aid, not an " +
      "operation and not a cure for obesity.",
    cta: "Book a free assessment",
    heroAlt: "Gastric balloon consultation at Platinya Clinic",
    stats: [
      { value: "20–30 min", label: "Placement" },
      { value: "6–12 months", label: "Time in place" },
      { value: "3–7 days", label: "To settle" },
    ],
    candidate: {
      heading: "Who is a good candidate",
      intro:
        "A balloon suits someone who needs to lose a meaningful amount of weight before something else — " +
        "joint surgery, fertility treatment, a hernia repair — or who needs a defined starting period to " +
        "change eating habits under supervision. It does not suit someone looking for a procedure to do the " +
        "work alone.",
      items: [
        "A BMI of roughly 27–35, without a condition that makes endoscopy unsafe",
        "Weight that has not responded to supervised diet and activity, or a medical reason to lose weight quickly",
        "No previous gastric or oesophageal surgery, and no large hiatal hernia or active ulcer",
        "Willingness to follow a dietetic programme during the months in place, and after removal",
      ],
      note:
        "The balloon is not a treatment for a BMI above 40 on its own, and it is not offered to anyone " +
        "pregnant, planning pregnancy within the year, or with an active eating disorder. Screening includes " +
        "a medical history, blood tests and, depending on the device, an endoscopy.",
    },
    techniques: {
      heading: "The two ways a balloon is placed",
      intro:
        "Both occupy space in the stomach. What differs is how they get there, how long they can stay and " +
        "whether sedation is needed.",
      items: [
        {
          name: "Endoscopic balloon",
          text:
            "Placed through the mouth with a gastroscope under sedation, then filled with saline and a dye " +
            "so that a leak would be visible. Takes about 20–30 minutes. Removed the same way at the end of " +
            "its licensed period, usually six or twelve months.",
        },
        {
          name: "Swallowable balloon",
          text:
            "A capsule is swallowed with water, checked on X-ray, then filled with gas through a thin " +
            "catheter. No sedation and no endoscopy. It stays for about four months and is designed to pass " +
            "naturally, though removal by endoscopy is sometimes needed.",
        },
        {
          name: "The programme around it",
          text:
            "Neither device works without the diet that goes with it: a dietitian-led plan, protein targets, " +
            "behavioural follow-up and a structured transition back to normal eating in the weeks before " +
            "removal. This is the part that determines the result.",
        },
      ],
    },
    journey: {
      heading: "From screening to life after removal",
      steps: [
        {
          name: "Screening",
          text:
            "Medical history, medication review, blood tests, and an endoscopy if the device requires one. " +
            "Any ulcer, hernia or reflux is treated before placement, not after.",
        },
        {
          name: "Placement day",
          text:
            "Usually a day case. Sedation for the endoscopic version; only water and a capsule for the " +
            "swallowable one. You are observed for a few hours, given anti-sickness medication, and go home " +
            "the same day.",
        },
        {
          name: "The first week",
          text:
            "Nausea, cramping and vomiting are common and expected — the stomach is objecting to something " +
            "inside it. Anti-sickness tablets, small amounts of fluid and, if needed, intravenous fluids. " +
            "Most people settle within three to seven days.",
        },
        {
          name: "The months in place",
          text:
            "Liquids, then soft food, then normal textures over two to three weeks. Portions are smaller " +
            "because the stomach is smaller. Dietetic reviews every four to six weeks; blood tests if intake " +
            "stays low.",
        },
        {
          name: "Removal and after",
          text:
            "Removal takes 20–30 minutes. Appetite usually returns within days to weeks, and without the " +
            "habits built during the programme, weight comes back. A maintenance plan — dietetic follow-up, " +
            "activity, sometimes medication — is agreed before the balloon comes out.",
        },
      ],
    },
    risks: {
      heading: "What can go wrong",
      intro:
        "A balloon is less invasive than surgery, not risk-free. These are the complications that are " +
        "discussed before placement.",
      items: [
        "Nausea, vomiting and abdominal cramping in the first week, sometimes severe enough to need intravenous fluids",
        "Reflux, heartburn and irritation of the oesophagus or stomach lining while the balloon is in place",
        "Deflation or migration of the balloon, which can obstruct the bowel — uncommon, and an emergency when it happens",
        "Ulceration, erosion or, very rarely, perforation of the stomach wall, which needs surgery",
        "Weight regain after removal, which is common when the diet programme is not continued",
      ],
      note:
        "A balloon buys time and a smaller stomach, nothing more. It does not change how the body handles " +
        "food, it does not treat the reasons eating was difficult, and the weight lost is usually modest — " +
        "typically somewhere between 5% and 15% of body weight while it is in place.",
    },
    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "How much weight will I lose?",
          a:
            "Commonly in the region of 5–15% of body weight over the time it is in place, with wide " +
            "variation. It is less than a sleeve or a bypass, and part of it is often regained after removal.",
        },
        {
          q: "Is it painful?",
          a:
            "Placement is not painful — the throat is numbed and sedation is used. The first three to seven " +
            "days usually are uncomfortable: nausea, cramping and vomiting. Anti-sickness medication is " +
            "prescribed before you leave.",
        },
        {
          q: "Can I eat normally with it?",
          a:
            "Normal textures, yes; normal portions, no. Eating too fast or too much causes pain and vomiting, " +
            "and carbonated drinks and very fibrous food are poorly tolerated by some patients.",
        },
        {
          q: "What happens when it is removed?",
          a:
            "The stomach returns to its previous size within days. Appetite often returns quickly. Whether " +
            "the weight stays off depends on what was built during those months, which is why the dietetic " +
            "programme matters more than the device.",
        },
      ],
    },
    ctaBand: {
      heading: "Find out whether a balloon is the right starting point",
      text:
        "Send your height, weight and medical history. A bariatric physician reviews them and a coordinator " +
        "comes back with whether a balloon or a surgical assessment fits your case — and what it involves.",
      button: "Talk to a coordinator",
    },
    disclaimer:
      "General information, not medical advice. Suitability depends on an assessment by a bariatric " +
      "physician, including medical history and, where indicated, endoscopy; results vary between patients.",
  },

  ar: {
    title: "بالون المعدة في إسطنبول",
    eyebrow: "جراحة السمنة",
    lead:
      "يُوضع بالون داخل المعدة ويُملأ، فيقلّ المكان المتاح للطعام وتشعر بالشبع أسرع. يبقى ستة إلى " +
      "اثني عشر شهراً ثم يُزال. هو وسيلة مؤقّتة، لا عملية جراحية ولا علاجاً للسمنة.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة بالون المعدة في عيادة بلاتينيا",
    stats: [
      { value: "٢٠–٣٠ دقيقة", label: "مدة التركيب" },
      { value: "٦–١٢ شهراً", label: "مدة بقائه" },
      { value: "٣–٧ أيام", label: "حتى يستقرّ" },
    ],
    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "يناسب البالون من يحتاج إلى نزول وزن معتبر قبل أمر آخر — عملية مفصل أو علاج خصوبة أو إصلاح فتق — " +
        "أو من يحتاج فترة بداية محدّدة يغيّر فيها عادات أكله تحت إشراف. ولا يناسب من يبحث عن إجراء يقوم " +
        "بالعمل عنه.",
      items: [
        "مؤشّر كتلة الجسم نحو ٢٧–٣٥، دون حالة تجعل التنظير غير آمن",
        "وزن لم يستجب لحمية ونشاط تحت إشراف، أو سبب طبي يستدعي نزول الوزن بسرعة",
        "لا عملية سابقة في المعدة أو المريء، ولا فتق حجابي كبير ولا قرحة نشطة",
        "استعداد لاتّباع برنامج غذائي خلال أشهر وجوده، وبعد إزالته",
      ],
      note:
        "البالون ليس علاجاً لمؤشّر كتلة جسم فوق ٤٠ وحده، ولا يُعرض على حامل أو من تخطّط لحمل خلال سنة، " +
        "ولا على من لديه اضطراب أكل نشط. ويشمل الفرز تاريخاً مرضياً وتحاليل، وتنظيراً علوياً حسب نوع الجهاز.",
    },
    techniques: {
      heading: "طريقتان لتركيب البالون",
      intro:
        "كلاهما يشغل حيّزاً في المعدة. والفارق في طريقة الوصول، ومدة البقاء، وهل يلزم تهديد وتخدير.",
      items: [
        {
          name: "البالون بالمنظار",
          text:
            "يُوضع عبر الفم بمنظار هضمي تحت التهدئة، ثم يُملأ محلولاً ملحياً مع صبغة ليظهر أي تسرّب. " +
            "يستغرق نحو ٢٠–٣٠ دقيقة. ويُزال بالطريقة نفسها في نهاية المدة المرخّصة، وغالباً ستة أشهر أو اثنا عشر.",
        },
        {
          name: "البالون القابل للبلع",
          text:
            "يُبلَع كبسولة مع الماء، ويُتحقّق من موضعها بالأشعة، ثم تُملأ غازاً عبر قسطرة رفيعة. بلا تهدئة " +
            "وبلا تنظير. يبقى نحو أربعة أشهر، ومصمّم ليخرج طبيعياً، مع أن إزالته بالمنظار تلزم أحياناً.",
        },
        {
          name: "البرنامج المحيط به",
          text:
            "لا يعمل أي جهاز دون الحمية المرافقة: خطة بإشراف أخصائي تغذية، وأهداف بروتين، ومتابعة سلوكية، " +
            "وانتقال منظّم إلى الأكل العادي في الأسابيع السابقة للإزالة. هذا الجزء هو ما يحدّد النتيجة.",
        },
      ],
    },
    journey: {
      heading: "من الفرز إلى الحياة بعد الإزالة",
      steps: [
        {
          name: "الفرز",
          text:
            "تاريخ مرضي ومراجعة أدوية وتحاليل، وتنظير علوي إن كان الجهاز يستلزمه. وتُعالَج أي قرحة أو فتق " +
            "أو ارتجاع قبل التركيب لا بعده.",
        },
        {
          name: "يوم التركيب",
          text:
            "غالباً في اليوم نفسه دون مبيت. تهدئة في النسخة المنظارية؛ وماء وكبسولة فقط في النسخة القابلة " +
            "للبلع. تبقى تحت المراقبة ساعات قليلة، وتُعطى دواءً مضاداً للغثيان، وتعود إلى بيتك في اليوم ذاته.",
        },
        {
          name: "الأسبوع الأول",
          text:
            "الغثيان والتقلّصات والقيء شائعة ومتوقّعة — فالمعدة ترفض ما وُضع داخلها. أقراص مضادة للغثيان " +
            "وسوائل قليلة، وسوائل وريدية عند الحاجة. ويستقرّ معظم الناس خلال ثلاثة إلى سبعة أيام.",
        },
        {
          name: "أشهر بقائه",
          text:
            "سوائل ثم طري ثم قوام عادي على مدى أسبوعين إلى ثلاثة. الحصص أصغر لأن المعدة أصغر. ومراجعات " +
            "غذائية كل أربعة إلى ستة أسابيع، وتحاليل إن بقي المدخول منخفضاً.",
        },
        {
          name: "الإزالة وبعدها",
          text:
            "تستغرق الإزالة ٢٠–٣٠ دقيقة. وتعود الشهية عادةً في أيام إلى أسابيع، وبدون العادات التي بُنيت " +
            "خلال البرنامج يعود الوزن. وتُتّفق خطة استمرار — متابعة غذائية ونشاط وأحياناً دواء — قبل الإزالة.",
        },
      ],
    },
    risks: {
      heading: "ما قد يسوء",
      intro:
        "البالون أقلّ توغّلاً من الجراحة، لكنه ليس بلا مخاطر. هذه المضاعفات تُناقش قبل التركيب.",
      items: [
        "غثيان وقيء وتقلّصات بطنية في الأسبوع الأول، قد تكون شديدة بما يستدعي سوائل وريدية",
        "ارتجاع وحرقة وتهيّج في المريء أو بطانة المعدة ما دام البالون موجوداً",
        "تفريغ البالون أو هجرته، وقد يسدّ الأمعاء — غير شائع، لكنه حالة طارئة حين يحدث",
        "تقرّح أو تآكل، ونادراً جداً انثقاب في جدار المعدة يستدعي جراحة",
        "عودة الوزن بعد الإزالة، وهي شائعة إذا لم يُستمر بالبرنامج الغذائي",
      ],
      note:
        "البالون يشتري وقتاً ومعدة أصغر، لا أكثر. لا يغيّر طريقة تعامل الجسم مع الطعام، ولا يعالج أسباب " +
        "صعوبة الأكل، والوزن المفقود عادةً متواضع — نحو ٥٪ إلى ١٥٪ من وزن الجسم ما دام في مكانه.",
    },
    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "كم سأنزل من الوزن؟",
          a:
            "غالباً في حدود ٥–١٥٪ من وزن الجسم خلال مدة وجوده، والفارق بين مريض وآخر واسع. وهو أقل من " +
            "التكميم أو التحويلة، ويُستعاد جزء منه كثيراً بعد الإزالة.",
        },
        {
          q: "هل هو مؤلم؟",
          a:
            "التركيب غير مؤلم — يُخدَّر الحلق موضعياً وتُستخدم التهدئة. أما الأيام الثلاثة إلى السبعة الأولى " +
            "فمزعجة عادةً: غثيان وتقلّصات وقيء. ويُوصف دواء مضاد للغثيان قبل الخروج.",
        },
        {
          q: "هل آكل طبيعياً معه؟",
          a:
            "قواماً عادياً نعم، وحصصاً عادية لا. الأكل السريع أو الكثير يسبب ألماً وقيئاً، والمشروبات " +
            "الغازية والأطعمة شديدة الألياف لا يتحمّلها بعض المرضى.",
        },
        {
          q: "ماذا يحدث عند إزالته؟",
          a:
            "تعود المعدة إلى حجمها السابق في أيام. وتعود الشهية سريعاً غالباً. وبقاء الوزن يعتمد على ما " +
            "بُني في تلك الأشهر، ولهذا يهمّ البرنامج الغذائي أكثر من الجهاز نفسه.",
        },
      ],
    },
    ctaBand: {
      heading: "اعرف هل البالون نقطة البداية المناسبة لك",
      text:
        "أرسل طولك ووزنك وتاريخك المرضي. يراجعها طبيب سمنة، ويعود إليك منسّق الرعاية بما إذا كان البالون " +
        "أو تقييم جراحي هو الأنسب لحالتك، وما يتضمّنه.",
      button: "تحدّث مع منسّق الرعاية",
    },
    disclaimer:
      "معلومات عامة وليست نصيحة طبية. تعتمد الملاءمة على تقييم طبيب سمنة، يشمل التاريخ المرضي وتنظيراً " +
      "علوياً عند الحاجة؛ والنتائج تختلف من مريض لآخر.",
  },
};
