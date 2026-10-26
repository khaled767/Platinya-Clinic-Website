// /blepharoplasty — Eyelid surgery (upper and lower).
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
  slug: "/blepharoplasty",
  group: { href: "/plastic", label: { en: "Facial plastic surgery", ar: "تجميل الوجه" } },
  heroImage: "/assets/images/ai/services/plastic/blepharo.webp",

  en: {
    title: "Eyelid Surgery (Blepharoplasty) in Istanbul",
    eyebrow: "Facial plastic surgery",
    lead:
      "Blepharoplasty removes the excess skin of the upper lids and the fat that makes the lower " +
      "lids look tired and puffy. It is one of the smallest operations on the face, and one of the " +
      "easiest to get wrong.",
    cta: "Book a free assessment",
    heroAlt: "Eyelid surgery consultation at Platinya Clinic",

    stats: [
      { value: "1–2 h", label: "Surgery time" },
      { value: "5–7 days", label: "Stitches removed" },
      { value: "7–10 days", label: "Back in public" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "The operation treats skin and fat, not the colour or the quality of the skin. Dark circles " +
        "from pigment, or hollowing under the eye, are a different problem with a different answer.",
      items: [
        "Hooded upper lids, or skin that rests on the lashes and narrows the field of vision",
        "Upper lid skin that is creased, heavy or asymmetrical",
        "Puffy lower lids from fat that has moved forward, not from fluid",
        "Loose lower lid skin, with or without a visible fat bag",
      ],
      note:
        "Dry eyes, thyroid eye disease, glaucoma and high blood pressure all change the plan, and " +
        "some are a reason to wait. A thyroid condition must be stable before surgery: operating on " +
        "an active thyroid eye disease can make it worse.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "Upper and lower lids are separate decisions. Many patients need only one of them, and " +
        "doing more than is needed is how eyelids end up looking hollow.",
      items: [
        {
          name: "Upper lid blepharoplasty",
          text:
            "A fine incision in the natural crease, excess skin removed and a strip of muscle with " +
            "it; fat is trimmed only where it is bulging. The scar sits in the crease and fades over " +
            "three to six months. This is the part that widens the visual field.",
        },
        {
          name: "Lower lid, transconjunctival",
          text:
            "The fat is removed through the inside of the lid, so there is no skin incision and no " +
            "external scar. Suitable for fat bags with good skin tone; it does not remove loose skin. " +
            "Often combined with fat repositioning to fill the tear trough.",
        },
        {
          name: "Lower lid, external with canthopexy",
          text:
            "An incision just under the lashes removes skin as well as fat, and the lid corner is " +
            "supported so it does not drop. Used when there is real skin excess — and the technique " +
            "where the risk of a pulled-down lid has to be managed carefully.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and planning",
          text:
            "The lids are examined with the eyes open and closed, the amount of skin to be kept is " +
            "measured, and dry eye is assessed. Photographs are taken. If there is any doubt about " +
            "the tear film or the thyroid, an ophthalmology opinion is arranged before a date.",
        },
        {
          name: "Preparation",
          text:
            "Blood thinners, aspirin and some supplements are paused about ten days before, and " +
            "smoking stops four weeks before. You fast for six to eight hours. Arrange someone to " +
            "take you home: the eyes are swollen and driving is not possible.",
        },
        {
          name: "The operation",
          text:
            "Local anaesthesia with light sedation, or general anaesthesia, one to two hours for " +
            "both lids. You are awake with local, and can talk to the surgeon. Stitches are fine and " +
            "removed after five to seven days; some are dissolvable.",
        },
        {
          name: "The first week",
          text:
            "Bruising and swelling are expected, and can be considerable for the first three to " +
            "four days. Cold compresses, head elevation, and eye drops. Vision is blurry from the " +
            "ointment rather than from the surgery. No contact lenses for about two weeks.",
        },
        {
          name: "Weeks two to twelve",
          text:
            "Most people are presentable after seven to ten days, with make-up from about day ten. " +
            "Residual swelling settles over four to six weeks, and the scar softens over three to " +
            "six months. Sun protection on the lids matters during that time.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "Eyelid surgery has a short list of risks and one of them is an emergency. All of them are " +
        "worth reading before the operation.",
      items: [
        "Ectropion or retraction of the lower lid — the lid pulls down, the eye does not close fully and becomes dry and gritty; it may need a revision",
        "Asymmetry between the two sides, or removal of too much skin, which is difficult to correct",
        "A haematoma behind the eye — rare, but sight-threatening, and a reason to return immediately",
        "Double vision, from injury to the muscles that move the eye; usually temporary, rarely permanent",
        "Visible or thickened scars, and small cysts along the incision line",
      ],
      note:
        "Tell us about dry eyes, contact lens use, thyroid disease, glaucoma, bleeding disorders and " +
        "any blood thinner, including aspirin and fish oil. Also say if you have had filler or laser " +
        "around the eyes — it changes how the tissue behaves.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "Will it change the shape of my eyes?",
          a:
            "The shape is set by the lids and the brow, and the operation is planned around them. " +
            "Removing skin opens the eye; it should not make the eye look rounder or startled. If the " +
            "brow is low, lifting the brow rather than taking more skin is often the right answer.",
        },
        {
          q: "Can it remove dark circles?",
          a:
            "Partly, and only if the darkness is a shadow cast by a fat bag or by hollowing. Darkness " +
            "from pigment in the skin does not change with surgery, and is treated with creams, peels " +
            "or laser. This is the single most common misunderstanding about the operation.",
        },
        {
          q: "How long does the result last?",
          a:
            "Usually five to ten years, sometimes longer for the upper lids. The skin continues to " +
            "age, and the brow continues to descend, so the result is an improvement rather than a " +
            "permanent state. A second, smaller procedure is sometimes done years later.",
        },
        {
          q: "Upper or lower — which do I need?",
          a:
            "That is decided by examination. Hooding and a narrowed visual field point to the upper " +
            "lid; puffiness and a shadow under the eye point to the lower. Many patients are offered " +
            "only one, and combining them is a decision about healing time as much as about result.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "A front view with the eyes open and one with them gently closed are enough for a surgeon " +
        "to judge which lid needs work, and how much skin can safely be kept. A coordinator replies " +
        "with a plan and a written quote.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "جراحة الجفون (بليفاروبلاستي) في إسطنبول",
    eyebrow: "تجميل الوجه",
    lead:
      "جراحة الجفون تُزيل الجلد الزائد في الجفن العلوي والدهون التي تجعل الجفن السفلي يبدو متعباً " +
      "ومنتفخاً. وهي من أصغر عمليات الوجه، ومن أسهل ما يُخطأ فيه.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة جراحة الجفون في عيادة بلاتينيا",

    stats: [
      { value: "١–٢ ساعة", label: "مدة العملية" },
      { value: "٥–٧ أيام", label: "نزع الخيوط" },
      { value: "٧–١٠ أيام", label: "العودة للظهور" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "العملية تعالج الجلد والدهون، لا لون الجلد ولا جودته. والهالات السوداء الناتجة عن التصبّغ، " +
        "أو الهبوط تحت العين، مشكلة أخرى ولها جواب آخر.",
      items: [
        "جفن علوي متدلٍّ، أو جلد يستقرّ على الرموش ويضيّق مجال الرؤية",
        "جلد الجفن العلوي مجعّد أو ثقيل أو غير متناظر",
        "انتفاخ الجفن السفلي بسبب دهون تقدّمت إلى الأمام، لا بسبب احتباس سوائل",
        "جلد رخو في الجفن السفلي، مع جيب دهني ظاهر أو دونه",
      ],
      note:
        "جفاف العين ومرض العين الدرقي والزرق (الغلوكوما) وارتفاع ضغط الدم كلها تغيّر الخطة، وبعضها " +
        "سبب للانتظار. ومرض الغدّة الدرقية يجب أن يكون مستقراً قبل الجراحة: فالعملية في مرض عين " +
        "درقي نشط قد تزيده سوءاً.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "الجفن العلوي والسفلي قراران منفصلان. كثير من المرضى يحتاجون أحدهما فقط، وفعل أكثر من " +
        "اللازم هو ما يجعل الجفون تبدو غائرة.",
      items: [
        {
          name: "جراحة الجفن العلوي",
          text:
            "شقّ دقيق في الطيّة الطبيعية، يُزال الجلد الزائد ومعه شريط من العضلة؛ وتُقصّ الدهون فقط " +
            "حيث تنتفخ. يستقرّ الأثر في الطيّة ويبهت خلال ثلاثة إلى ستة أشهر. وهذا هو الجزء الذي " +
            "يوسّع مجال الرؤية.",
        },
        {
          name: "الجفن السفلي من الداخل (Transconjunctival)",
          text:
            "تُزال الدهون عبر داخل الجفن، فلا شقّ في الجلد ولا أثر خارجي. يناسب الجيوب الدهنية مع " +
            "جلد متماسك؛ ولا يُزيل الجلد الرخو. ويُجمع كثيراً مع إعادة توزيع الدهون لملء الأخدود " +
            "تحت العين.",
        },
        {
          name: "الجفن السفلي من الخارج مع تثبيت الزاوية",
          text:
            "شقّ تحت الرموش يُزيل الجلد والدهون معاً، وتُدعَم زاوية الجفن حتى لا تهبط. يُستخدم عند " +
            "وجود جلد زائد حقيقي — وهو التقنية التي يجب فيها التعامل بحذر مع خطر شدّ الجفن إلى الأسفل.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتخطيط",
          text:
            "تُفحص الجفون والعين مفتوحة ومغلقة، وتُقاس كمية الجلد التي ستُحفظ، ويُقيَّم جفاف العين. " +
            "وتُلتقط الصور. وعند أي شكّ في طبقة الدمع أو في الغدّة الدرقية يُرتَّب رأي طبيب عيون قبل " +
            "تحديد الموعد.",
        },
        {
          name: "التحضير",
          text:
            "تُوقف مضادات التخثّر والأسبرين وبعض المكمّلات قبل عشرة أيام تقريباً، ويُوقف التدخين قبل " +
            "أربعة أسابيع. ويُصام ست إلى ثماني ساعات. رتّب من يوصلك إلى البيت: فالعينان متورّمتان " +
            "والقيادة غير ممكنة.",
        },
        {
          name: "العملية",
          text:
            "تخدير موضعي مع تهدئة خفيفة، أو تخدير كامل، من ساعة إلى ساعتين للجفنين. تبقى واعياً مع " +
            "التخدير الموضعي ويمكنك الحديث مع الجرّاح. الخيوط دقيقة وتُنزع بعد خمسة إلى سبعة أيام؛ " +
            "وبعضها قابل للامتصاص.",
        },
        {
          name: "الأسبوع الأول",
          text:
            "الكدمات والتورّم متوقّعان، وقد يكونان كبيرين في الأيام الثلاثة إلى الأربعة الأولى. " +
            "كمّادات باردة، ورفع الرأس، وقطرات للعين. الرؤية ضبابية بسبب المرهم لا بسبب الجراحة. " +
            "ولا عدسات لاصقة نحو أسبوعين.",
        },
        {
          name: "الأسبوع الثاني إلى الثاني عشر",
          text:
            "يبدو معظم الناس بحالة مقبولة بعد سبعة إلى عشرة أيام، مع مكياج من اليوم العاشر تقريباً. " +
            "يستقرّ التورّم المتبقّي خلال أربعة إلى ستة أسابيع، ويلين الأثر خلال ثلاثة إلى ستة أشهر. " +
            "والحماية من الشمس على الجفنين مهمّة في تلك الفترة.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro:
        "جراحة الجفون قائمة مخاطرها قصيرة، وأحدها حالة طارئة. وكلها تستحقّ القراءة قبل العملية.",
      items: [
        "انقلاب الجفن السفلي أو شدّه إلى الأسفل (إكتروبيون) — فيهبط الجفن ولا تُغلق العين تماماً فتجفّ وتصبح خشنة؛ وقد يحتاج تعديلاً",
        "عدم تناظر بين الجانبين، أو إزالة جلد أكثر من اللازم، وهو أمر يصعب تصحيحه",
        "ورم دموي خلف العين — نادر، لكنه يهدّد البصر، وسبب للعودة فوراً",
        "ازدواج الرؤية بسبب إصابة عضلات تحريك العين؛ غالباً مؤقّت ونادراً دائم",
        "آثار ظاهرة أو متضخّمة، وأكياس صغيرة على خطّ الشقّ",
      ],
      note:
        "أخبرنا عن جفاف العين واستخدام العدسات وأمراض الغدّة الدرقية والزرق واضطرابات النزف وأي " +
        "مضادّ للتخثّر، بما فيه الأسبرين وزيت السمك. وقل لنا إن كان لديك فيلر أو ليزر حول العينين — " +
        "فهو يغيّر سلوك الأنسجة.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "هل ستتغيّر شكل عينيّ؟",
          a:
            "الشكل يحدّده الجفنان والحاجب، والخطة تُبنى حولهما. إزالة الجلد تفتح العين؛ ولا ينبغي أن " +
            "تجعلها أكثر استدارة أو تبدو مذعورة. وإن كان الحاجب منخفضاً، فرَفْعه غالباً هو الجواب " +
            "الصحيح بدل أخذ جلد أكثر.",
        },
        {
          q: "هل تُزيل الهالات السوداء؟",
          a:
            "جزئياً، وفقط إذا كانت السواد ظلاًّ يلقيه جيب دهني أو هبوط تحت العين. أما السواد الناتج " +
            "عن تصبّغ في الجلد فلا يتغيّر بالجراحة، ويُعالَج بالكريمات أو التقشير أو الليزر. وهذا " +
            "أكثر ما يُفهم خطأً عن العملية.",
        },
        {
          q: "كم تدوم النتيجة؟",
          a:
            "عادةً خمس إلى عشر سنوات، وأحياناً أطول في الجفن العلوي. يستمرّ الجلد في التقدّم في العمر، " +
            "ويستمرّ الحاجب في الهبوط، فالنتيجة تحسين لا حالة دائمة. وأحياناً يُجرى إجراء ثانٍ أصغر " +
            "بعد سنوات.",
        },
        {
          q: "العلوي أم السفلي — أيّهما أحتاج؟",
          a:
            "يُقرَّر ذلك بالفحص. التدلّي وضيق مجال الرؤية يوجّهان إلى الجفن العلوي؛ والانتفاخ والظلّ " +
            "تحت العين يوجّهان إلى السفلي. وكثير من المرضى يُعرض عليهم إجراء واحد فقط، وجمع الاثنين " +
            "قرار يتعلّق بزمن النقاهة كما يتعلّق بالنتيجة.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "صورة أمامية والعينان مفتوحتان وأخرى مغمضتان بلطف تكفيان ليحكم الجرّاح أي جفن يحتاج عملاً، " +
        "وكم من الجلد يمكن حفظه بأمان. ويعود إليك منسّق الرعاية بخطة وعرض سعر مكتوب.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
