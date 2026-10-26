// /chin-implants — Chin augmentation (implant, genioplasty, filler).
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
  slug: "/chin-implants",
  group: { href: "/plastic", label: { en: "Facial plastic surgery", ar: "تجميل الوجه" } },
  heroImage: "/assets/images/ai/services/plastic/hero.webp",

  en: {
    title: "Chin Augmentation in Istanbul (Implant and Genioplasty)",
    eyebrow: "Facial plastic surgery",
    lead:
      "A weak or receding chin changes the balance of the whole face — the nose looks larger, the " +
      "jawline softer and the neck shorter. Chin augmentation projects it forward, with an implant, " +
      "by moving the bone, or temporarily with filler.",
    cta: "Book a free assessment",
    heroAlt: "Chin augmentation consultation at Platinya Clinic",

    stats: [
      { value: "1–2 h", label: "Surgery time" },
      { value: "1 night", label: "Hospital stay" },
      { value: "1–2 weeks", label: "Visible swelling" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "The assessment is about proportion and about the bite, not about the chin alone. A chin is " +
        "judged against the nose, the lips and the angle of the jaw.",
      items: [
        "A chin that sits behind the line of the lower lip when seen in profile",
        "A jawline that looks soft or short from the front",
        "Asymmetry after trauma, or after previous jaw surgery",
        "A chin that is being considered alongside rhinoplasty, to keep the profile balanced",
      ],
      note:
        "If the teeth do not meet correctly, the underlying problem is the bite, and an implant will " +
        "not correct it. That needs an orthodontic and maxillofacial assessment, and sometimes " +
        "orthognathic surgery — moving the jaw itself — rather than an implant in front of it.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "Three different operations are sold under the same name. They differ in what they move, " +
        "how reversible they are, and how long they last.",
      items: [
        {
          name: "Silicone chin implant",
          text:
            "A soft, solid implant placed on the bone through a small incision inside the lower lip, " +
            "or occasionally under the chin. It adds projection and width, takes about an hour, and " +
            "can be removed or exchanged later. The implant sits on the bone and does not fuse with it.",
        },
        {
          name: "Sliding genioplasty",
          text:
            "The chin bone is cut, moved forward — or down, or sideways — and fixed with small plates " +
            "and screws. It uses your own bone, so there is no implant to displace, and it can correct " +
            "vertical length and asymmetry that an implant cannot. A bigger operation, with more swelling.",
        },
        {
          name: "Hyaluronic acid filler",
          text:
            "A temporary option, done in the clinic in under an hour with no downtime. It shows what " +
            "projection would look like before committing to surgery, and lasts roughly nine to " +
            "eighteen months. It cannot correct a short or asymmetric bone.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and planning",
          text:
            "Profile photographs, a measurement of the face, and an examination of the bite. Where " +
            "the bone is being moved, or the bite is in question, a cephalometric X-ray or a CT scan " +
            "is arranged. The size and shape of the implant are chosen on the model of your face.",
        },
        {
          name: "Preparation",
          text:
            "Blood tests, and a dental check if the incision will be inside the mouth — teeth and " +
            "gums need to be healthy before an intraoral operation. Smoking stops four weeks before. " +
            "Blood thinners are paused about ten days before, and you fast for six to eight hours.",
        },
        {
          name: "The operation",
          text:
            "Under general anaesthesia or deep sedation, one to two hours. The implant is inserted " +
            "through an incision inside the lower lip, so there is no scar on the skin; the incision " +
            "is closed with dissolvable sutures. Most patients stay one night.",
        },
        {
          name: "The first week",
          text:
            "Swelling peaks at forty-eight to seventy-two hours, and the lower lip and chin feel " +
            "stiff and numb. Soft food, no chewing on the front teeth, mouth rinse after every meal, " +
            "and sleep with the head raised. Bruising can track down the neck and settles in a week.",
        },
        {
          name: "Weeks two to six",
          text:
            "Most of the swelling is gone by two to three weeks, and the rest settles over three " +
            "months. Numbness of the lower lip improves gradually, sometimes over several months. " +
            "Contact sport and dental work wait about six weeks.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "The chin is close to the mental nerve and the incision is next to the mouth, and both " +
        "shape the risk list.",
      items: [
        "Infection, more likely with an incision inside the mouth; an infected implant usually has to be removed",
        "Altered sensation in the lower lip and chin, from stretching or bruising the mental nerve — usually temporary, occasionally not",
        "Movement or displacement of the implant or a visible edge along the bone, or asymmetry and a projection judged too much or too little, needing a revision",
        "Bone resorption under a long-standing implant, which can make it sit less well over the years",
        "For genioplasty: bleeding, injury to the tooth roots, and problems with the fixation plates",
      ],
      note:
        "Tell us about previous chin or jaw surgery, orthodontic treatment, gum disease and any " +
        "autoimmune condition. Also say if you grind your teeth or have TMJ pain — the joint is " +
        "loaded differently after the chin is moved.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "Will it be obvious that I have had it done?",
          a:
            "The aim is proportion, not size. An implant chosen to match your face reads as a " +
            "stronger jawline rather than as a chin. The incision is inside the lip, so there is no " +
            "scar on the face; the trade-off is a short period of swelling and a numb lower lip.",
        },
        {
          q: "Implant or genioplasty — which is better?",
          a:
            "An implant is quicker, reversible and good for adding projection forward. Genioplasty " +
            "moves your own bone, so it can lengthen the chin, correct asymmetry and avoid a foreign " +
            "body — at the cost of a bigger operation. The right answer depends on what is actually " +
            "short, and that is measured, not guessed.",
        },
        {
          q: "How long does an implant last?",
          a:
            "A silicone implant is not expected to need replacement, and many stay in place for " +
            "decades. It is not permanent in the sense that it never needs attention: it can be " +
            "removed or exchanged, and it should be looked at if it becomes painful, moves, or if " +
            "the chin changes shape.",
        },
        {
          q: "Can it be done with a nose operation?",
          a:
            "Yes, and it is often the better plan: the profile is a relationship between the nose " +
            "and the chin, and changing one alone can make the other look wrong. The combined " +
            "operation is longer, so it is planned as one procedure with one recovery.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "A profile and a front view are enough to say whether the chin is the problem, and whether " +
        "an implant, the bone or filler is the sensible route. A coordinator comes back with a plan " +
        "and a written quote.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "تكبير الذقن في إسطنبول (الطُعم الجراحي وتقديم العظم)",
    eyebrow: "تجميل الوجه",
    lead:
      "الذقن الصغير أو المتراجع يغيّر توازن الوجه كله — فيبدو الأنف أكبر وخطّ الفكّ أنعم والرقبة أقصر. " +
      "وتكبير الذقن يدفعه إلى الأمام بطُعم أو بنقل العظم أو مؤقّتاً بالفيلر.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة تكبير الذقن في عيادة بلاتينيا",

    stats: [
      { value: "١–٢ ساعة", label: "مدة العملية" },
      { value: "ليلة واحدة", label: "الإقامة في المستشفى" },
      { value: "١–٢ أسبوع", label: "تورّم ظاهر" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "التقييم يتعلّق بالتناسب وبالإطباق، لا بالذقن وحده. فالذقن يُحكم عليه مقابل الأنف والشفتين " +
        "وزاوية الفكّ.",
      items: [
        "ذقن يقع خلف خطّ الشفة السفلى عند النظر من الجانب",
        "خطّ فكّ يبدو ناعماً أو قصيراً من الأمام",
        "عدم تناظر بعد رضّ أو بعد جراحة فكّ سابقة",
        "ذقن يُبحث تكبيره مع عملية الأنف للحفاظ على توازن الملفّ الجانبي",
      ],
      note:
        "إذا لم تلتقِ الأسنان التقاءً صحيحاً فالمشكلة الأساسية في الإطباق، والطُعم لا يصحّحها. " +
        "هذا يحتاج تقييماً لتقويم الأسنان وجراحة الفم والوجه، وأحياناً جراحة تقويم الفكّ — نقل " +
        "الفكّ نفسه — لا طُعماً أمامه.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "ثلاث عمليات مختلفة تُباع تحت الاسم نفسه. تختلف في ما تحرّكه، وفي قابليتها للتراجع، وفي مدة بقائها.",
      items: [
        {
          name: "طُعم ذقن سيليكون",
          text:
            "طُعم صلب طري يوضع على العظم عبر شقّ صغير داخل الشفة السفلى، أو تحت الذقن أحياناً. " +
            "يضيف بروزاً وعرضاً، ويستغرق نحو ساعة، ويمكن نزعه أو تبديله لاحقاً. ويستقرّ على العظم " +
            "ولا يلتحم معه.",
        },
        {
          name: "تقديم الذقن العظمي (Sliding Genioplasty)",
          text:
            "يُقطع عظم الذقن ويُقدَّم إلى الأمام — أو إلى الأسفل أو الجانب — ويُثبَّت بصفائح ومسامير " +
            "صغيرة. يستخدم عظمك أنت، فلا يوجد طُعم يتزحزح، ويصحّح الطول العمودي وعدم التناظر بما " +
            "لا يصحّحه الطُعم. عملية أكبر وتورّمها أكثر.",
        },
        {
          name: "فيلر حمض الهيالورونيك",
          text:
            "خيار مؤقّت يُجرى في العيادة في أقل من ساعة وبلا فترة توقّف. يُظهر كيف سيبدو البروز قبل " +
            "الالتزام بالجراحة، ويبقى نحو تسعة إلى ثمانية عشر شهراً. لكنه لا يصحّح عظماً قصيراً أو " +
            "غير متناظر.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتخطيط",
          text:
            "صور جانبية، وقياس للوجه، وفحص للإطباق. وحين يُنقل العظم أو يكون الإطباق محلّ شكّ " +
            "تُطلب صورة سيفالومترية أو أشعّة مقطعية. ويُختار حجم الطُعم وشكله على نموذج لوجهك.",
        },
        {
          name: "التحضير",
          text:
            "تحاليل دم، وفحص أسنان إذا كان الشقّ داخل الفم — فالأسنان واللثة يجب أن تكون سليمة قبل " +
            "عملية داخل الفم. يُوقف التدخين قبل أربعة أسابيع، ومضادات التخثّر قبل عشرة أيام تقريباً، " +
            "ويُصام ست إلى ثماني ساعات.",
        },
        {
          name: "العملية",
          text:
            "تحت التخدير الكامل أو تهدئة عميقة، من ساعة إلى ساعتين. يُدخل الطُعم عبر شقّ داخل الشفة " +
            "السفلى فلا يبقى أثر على الجلد، ويُغلق الشقّ بخيوط قابلة للامتصاص. ويمكث معظم المرضى ليلة واحدة.",
        },
        {
          name: "الأسبوع الأول",
          text:
            "يبلغ التورّم ذروته في ثمانٍ وأربعين إلى اثنتين وسبعين ساعة، وتشعر الشفة السفلى والذقن " +
            "بصلابة وتنميل. طعام طري، ولا مضغ بالأسنان الأمامية، ومضمضة بعد كل وجبة، والنوم والرأس " +
            "مرفوع. وقد تنزل الكدمات إلى الرقبة وتهدأ في أسبوع.",
        },
        {
          name: "الأسبوع الثاني إلى السادس",
          text:
            "يذهب معظم التورّم بعد أسبوعين إلى ثلاثة، ويستقرّ الباقي خلال ثلاثة أشهر. ويتحسّن تنميل " +
            "الشفة السفلى تدريجياً، وأحياناً على مدى أشهر. أما الرياضة الاحتكاكية وعلاج الأسنان " +
            "فينتظران نحو ستة أسابيع.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro:
        "الذقن قريب من العصب الذقني والشقّ ملاصق للفم، وكلاهما يشكّل قائمة المخاطر.",
      items: [
        "التهاب، وهو أكثر احتمالاً مع شقّ داخل الفم؛ والطُعم الملتهب يُنزع عادةً",
        "تغيّر الإحساس في الشفة السفلى والذقن بسبب شدّ العصب الذقني أو رضّه — غالباً مؤقّت، وأحياناً لا",
        "تزحزح الطُعم أو انحرافه، أو حدّ محسوس على العظم، أو عدم تناظر وبروز يُقيَّم على أنه مفرط أو ناقص، يحتاج تعديلاً",
        "تحلّل العظم تحت طُعم قديم، وقد يجعله يستقرّ أقلّ جودة مع السنين",
        "في تقديم الذقن العظمي: نزيف، وإصابة جذور الأسنان، ومشاكل في صفائح التثبيت",
      ],
      note:
        "أخبرنا عن أي جراحة سابقة للذقن أو الفكّ، وعن تقويم الأسنان، وأمراض اللثة، وأي مرض مناعي. " +
        "وقل لنا إن كنت تصرّ على أسنانك أو تعاني ألماً في مفصل الفكّ — فالمفصل يُحمَّل بشكل مختلف " +
        "بعد نقل الذقن.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "هل سيكون واضحاً أنني أجريت عملية؟",
          a:
            "الهدف التناسب لا الحجم. الطُعم المختار لوجهك يُقرأ كخطّ فكّ أقوى لا كذقن مصطنع. والشقّ " +
            "داخل الشفة فلا يبقى أثر على الوجه؛ والمقابل فترة قصيرة من التورّم وتنميل في الشفة السفلى.",
        },
        {
          q: "الطُعم أم تقديم العظم — أيّهما أفضل؟",
          a:
            "الطُعم أسرع وقابل للتراجع وجيد لإضافة البروز إلى الأمام. وتقديم العظم ينقل عظمك أنت، " +
            "فيستطيع إطالة الذقن وتصحيح عدم التناظر وتجنّب جسم غريب — مقابل عملية أكبر. والجواب " +
            "الصحيح يعتمد على ما هو قصير فعلاً، وهذا يُقاس لا يُخمَّن.",
        },
        {
          q: "كم يدوم الطُعم؟",
          a:
            "طُعم السيليكون لا يُتوقّع أن يحتاج تبديلاً، وكثير منه يبقى عقوداً. لكنه ليس دائماً بمعنى " +
            "أنه لا يحتاج انتباهاً أبداً: يمكن نزعه أو تبديله، ويجب فحصه إذا صار مؤلماً أو تحرّك أو " +
            "تغيّر شكل الذقن.",
        },
        {
          q: "هل يمكن إجراؤه مع عملية الأنف؟",
          a:
            "نعم، وهو غالباً الخطة الأفضل: فالملفّ الجانبي علاقة بين الأنف والذقن، وتغيير أحدهما وحده " +
            "قد يجعل الآخر يبدو خاطئاً. والعملية المجموعة أطول، لذلك تُخطَّط كإجراء واحد بنقاهة واحدة.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "صورة جانبية وأخرى أمامية تكفيان لنقول هل الذقن هو المشكلة، وهل الطُعم أو العظم أو الفيلر هو " +
        "الطريق المعقول. ويعود إليك منسّق الرعاية بخطة وعرض سعر مكتوب.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
