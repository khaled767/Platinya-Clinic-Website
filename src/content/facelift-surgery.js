// /facelift-surgery — Facelift (deep-plane / SMAS).
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
  slug: "/facelift-surgery",
  group: { href: "/plastic", label: { en: "Facial plastic surgery", ar: "تجميل الوجه" } },
  heroImage: "/assets/images/ai/services/plastic/facelift.webp",

  en: {
    title: "Facelift Surgery in Istanbul (Deep-Plane Facelift)",
    eyebrow: "Facial plastic surgery",
    lead:
      "A facelift lifts the soft tissue of the face and neck that has descended with age, and " +
      "removes the skin that no longer fits it. It changes the jawline and the neck, not the " +
      "surface of the skin.",
    cta: "Book a free assessment",
    heroAlt: "Facelift consultation at Platinya Clinic",

    stats: [
      { value: "2–4 h", label: "Surgery time" },
      { value: "1–2 nights", label: "Hospital stay" },
      { value: "2–3 weeks", label: "Social downtime" },
    ],

    candidate: {
      heading: "Who is a good candidate",
      intro:
        "The operation treats looseness, not wrinkles. It suits someone whose weight has been " +
        "stable, whose skin still has some elasticity, and who wants to look like themselves, rested.",
      items: [
        "Jowls along the jawline, and a fold that runs from the nose to the mouth",
        "Descended mid-face, with flatness over the cheekbones",
        "Loose skin and vertical bands in the neck",
        "General health good enough for general anaesthesia, and no smoking for a month",
      ],
      note:
        "A facelift does not stop ageing: the face continues to change at the same rate afterwards. " +
        "Fine lines, pigment and sun damage are treated by other means — laser, peels or botulinum " +
        "toxin — and are often combined with surgery rather than replaced by it.",
    },

    techniques: {
      heading: "What can be done, and how it is chosen",
      intro:
        "The plan is made from the tissue, the bone and the neck — examined in person, with the " +
        "face at rest and in movement. A photograph does not show laxity.",
      items: [
        {
          name: "Deep-plane facelift",
          text:
            "The deeper layers of the face are released and lifted as one unit, so the pull is " +
            "carried by strong tissue rather than by skin. It gives the most natural jawline and " +
            "the longest-lasting result, and it is the technique used when the mid-face has descended.",
        },
        {
          name: "SMAS lift with a shorter scar",
          text:
            "The muscle layer is tightened through a shorter incision, without the deeper release. " +
            "Less operating time and less swelling, and a good option for earlier laxity — but it " +
            "addresses the lower face more than the mid-face.",
        },
        {
          name: "Neck lift (platysmaplasty)",
          text:
            "The neck muscles are brought together in the midline and the loose skin removed, through " +
            "a small incision under the chin and the incision behind the ear. Often the part of the " +
            "operation patients notice most.",
        },
      ],
    },

    journey: {
      heading: "From consultation to recovery",
      steps: [
        {
          name: "Consultation and planning",
          text:
            "The face is examined sitting and lying, the neck and the hairline are assessed, and " +
            "photographs are taken. Blood tests, and where relevant a cardiology opinion, are " +
            "arranged before a date is fixed. The scar and its position are agreed in advance.",
        },
        {
          name: "Preparation",
          text:
            "Smoking stops at least four weeks before surgery — it is the single biggest factor in " +
            "wound healing on the face. Blood thinners and some supplements are paused about ten " +
            "days before, and you fast for six to eight hours. Arrange help at home for the first week.",
        },
        {
          name: "The operation",
          text:
            "Under general anaesthesia, usually two to four hours. The incision runs in front of " +
            "and behind the ear and into the hairline at the temple, so it is hidden by the ear and " +
            "by hair. A drain is often left on each side for a day or two, and most patients stay " +
            "one or two nights.",
        },
        {
          name: "The first two weeks",
          text:
            "Swelling and bruising peak around day two to four and then settle. The head is kept " +
            "raised, cold compresses are used for the first days, and the drain is removed at the " +
            "clinic. Most patients feel able to go out — with sunglasses — after seven to ten days.",
        },
        {
          name: "Weeks three to six, and the scar",
          text:
            "Make-up and hair colouring resume after about two weeks, exercise after four to six. " +
            "The scar is firm and pink for two to three months, then fades over twelve to eighteen " +
            "months; it sits behind the ear and inside the hairline wherever possible.",
        },
      ],
    },

    risks: {
      heading: "What can go wrong",
      intro:
        "This is real surgery near the facial nerve, and the risks should be heard before the " +
        "decision, not after it.",
      items: [
        "Haematoma — a collection of blood under the skin; the most common complication, and it may need to be drained",
        "Temporary weakness of the facial nerve, which usually recovers over weeks to months; permanent injury is rare",
        "Skin healing problems or skin loss, much more likely in smokers and in people with poor circulation",
        "A wide or thickened scar, small patches of hair loss along the incision, and numbness in front of the ear that usually improves over months",
        "Asymmetry, or a result that is judged too tight or too subtle, needing a revision",
      ],
      note:
        "Tell us about smoking, diabetes, blood pressure, blood thinners and any previous facial " +
        "surgery or filler in the face. Fillers and threads change the anatomy and the plan, and " +
        "hiding them is the fastest way to a complicated operation.",
    },

    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "Will I look like a different person?",
          a:
            "The aim is that you look like yourself, rested. A facelift lifts tissue that has " +
            "dropped; it does not change the shape of the nose, the eyes or the character of the " +
            "face. An obviously operated look usually comes from lifting the skin too tightly, which " +
            "is why the deeper layers carry the tension here.",
        },
        {
          q: "How long does the result last?",
          a:
            "Most patients see the change for seven to ten years, and the neck often longer. It is " +
            "not permanent, because the face keeps ageing at its own rate. Keeping weight stable and " +
            "protecting the skin from the sun both help.",
        },
        {
          q: "When can I be seen in public?",
          a:
            "Most people are comfortable after ten to fourteen days, with residual swelling that " +
            "is easy to cover. The face continues to settle for three to six months, and the final " +
            "shape of the jawline is judged around then.",
        },
        {
          q: "Can it be combined with eyelid surgery?",
          a:
            "Often, yes — upper or lower eyelid surgery, a brow lift or fat grafting to the cheeks " +
            "are commonly done in the same session. Whether that is safe depends on the total " +
            "operating time and on your health, and it is decided at the consultation.",
        },
      ],
    },

    ctaBand: {
      heading: "Send your photographs for a first opinion",
      text:
        "Three photographs — front, three-quarter and profile — are enough for a surgeon to say " +
        "whether a lift is the right operation, and which technique would suit. A coordinator comes " +
        "back with a plan, a date and a written quote.",
      button: "Talk to a coordinator",
    },

    disclaimer:
      "This page is general information, not medical advice. Suitability, technique and risks are " +
      "decided in a consultation with a surgeon.",
  },

  ar: {
    title: "شدّ الوجه (الشدّ العميق) في إسطنبول",
    eyebrow: "تجميل الوجه",
    lead:
      "شدّ الوجه يرفع أنسجة الوجه والرقبة الرخوة التي هبطت مع التقدّم في العمر، ويُزيل الجلد الذي لم " +
      "يعد يناسبها. يغيّر خطّ الفكّ والرقبة، لا سطح الجلد.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة شدّ الوجه في عيادة بلاتينيا",

    stats: [
      { value: "٢–٤ ساعات", label: "مدة العملية" },
      { value: "١–٢ ليلة", label: "الإقامة في المستشفى" },
      { value: "٢–٣ أسابيع", label: "فترة التوقّف الاجتماعي" },
    ],

    candidate: {
      heading: "من هو المرشّح المناسب",
      intro:
        "العملية تعالج الارتخاء لا التجاعيد. تناسب من ثبت وزنه، ولا يزال في جلده بعض المرونة، " +
        "ويريد أن يبدو نفسه، لكن أكثر راحة.",
      items: [
        "ترهّل على خطّ الفكّ (الجولز) وطيّة تمتدّ من الأنف إلى الفم",
        "هبوط في وسط الوجه مع تسطّح فوق عظم الوجنة",
        "جلد رخو وأشرطة عمودية في الرقبة",
        "صحة عامة تسمح بالتخدير الكامل، وامتناع عن التدخين شهراً كاملاً",
      ],
      note:
        "شدّ الوجه لا يوقف التقدّم في العمر: يستمر الوجه في التغيّر بعده بالمعدّل نفسه. أما " +
        "التجاعيد الدقيقة والتصبّغات وأضرار الشمس فتُعالَج بوسائل أخرى — الليزر أو التقشير أو " +
        "البوتولينوم — وتُجمع غالباً مع الجراحة بدل أن تحلّ محلّها.",
    },

    techniques: {
      heading: "ما يمكن عمله، وكيف يُختار",
      intro:
        "تُبنى الخطة على الأنسجة والعظم والرقبة — بعد الفحص المباشر، والوجه في راحة وفي حركة. " +
        "الصورة لا تُظهر الارتخاء.",
      items: [
        {
          name: "الشدّ العميق (Deep-Plane)",
          text:
            "تُحرَّر طبقات الوجه الأعمق وتُرفع كوحدة واحدة، فيحمل الشدّ نسيجاً قوياً لا الجلد. " +
            "يمنح أنسب خطّ فكّ وأطول نتيجة، وهو التقنية المستخدمة حين يكون وسط الوجه قد هبط.",
        },
        {
          name: "شدّ SMAS بشقّ أقصر",
          text:
            "تُشدّ طبقة العضلة عبر شقّ أقصر دون تحرير أعمق. زمن جراحة أقل وتورّم أقل، وخيار جيد " +
            "في الارتخاء المبكّر — لكنه يعالج الوجه السفلي أكثر من وسطه.",
        },
        {
          name: "شدّ الرقبة (تضييق العضلة المشلولة)",
          text:
            "تُقرَّب عضلات الرقبة من بعضها في الخطّ الوسطي ويُزال الجلد الرخو، عبر شقّ صغير تحت " +
            "الذقن وشقّ خلف الأذن. وهو غالباً الجزء الذي يلاحظه المرضى أكثر من غيره.",
        },
      ],
    },

    journey: {
      heading: "من الاستشارة إلى النقاهة",
      steps: [
        {
          name: "الاستشارة والتخطيط",
          text:
            "يُفحص الوجه جالساً ومستلقياً، وتُقيَّم الرقبة وخطّ الشعر، وتُلتقط الصور. تُطلب تحاليل " +
            "دم، وعند الحاجة رأي طبيب قلب، قبل تثبيت الموعد. ويُتّفق على الأثر وموضعه مسبقاً.",
        },
        {
          name: "التحضير",
          text:
            "يُوقف التدخين قبل أربعة أسابيع على الأقل — وهو أهمّ عامل منفرد في التئام جرح الوجه. " +
            "تُوقف مضادات التخثّر وبعض المكمّلات قبل عشرة أيام تقريباً، ويُصام ست إلى ثماني ساعات. " +
            "رتّب من يساعدك في البيت في الأسبوع الأول.",
        },
        {
          name: "العملية",
          text:
            "تحت التخدير الكامل، وتستغرق عادةً ساعتين إلى أربع. يمتدّ الشقّ أمام الأذن وخلفها وإلى " +
            "خطّ الشعر عند الصدغ، فيخفيه موضع الأذن والشعر. يبقى أنبوب تصريف على كل جانب يوماً أو " +
            "يومين غالباً، ويمكث معظم المرضى ليلة إلى ليلتين.",
        },
        {
          name: "الأسبوعان الأولان",
          text:
            "يبلغ التورّم والكدمات ذروتهما في اليوم الثاني إلى الرابع ثم تهدأ. يُرفع الرأس، وتُستخدم " +
            "الكمّادات الباردة في الأيام الأولى، ويُنزع التصريف في العيادة. ويشعر معظم المرضى " +
            "بالقدرة على الخروج — بنظّارة شمسية — بعد سبعة إلى عشرة أيام.",
        },
        {
          name: "الأسبوع الثالث إلى السادس، والأثر",
          text:
            "يعود المكياج وصبغ الشعر بعد نحو أسبوعين، والرياضة بعد أربعة إلى ستة أسابيع. يكون الأثر " +
            "متصلّباً وورديّاً شهرين إلى ثلاثة، ثم يبهت على مدى اثني عشر إلى ثمانية عشر شهراً؛ وموضعه " +
            "خلف الأذن وداخل خطّ الشعر حيثما أمكن.",
        },
      ],
    },

    risks: {
      heading: "ما قد يسوء",
      intro:
        "هذه جراحة حقيقية قرب العصب الوجهي، ومخاطرها تُسمع قبل القرار لا بعده.",
      items: [
        "ورم دموي (هيماتوما) — تجمّع دم تحت الجلد؛ وهو أكثر المضاعفات شيوعاً، وقد يحتاج إلى تصريف",
        "ضعف مؤقّت في العصب الوجهي يتحسّن عادةً في أسابيع إلى أشهر؛ والإصابة الدائمة نادرة",
        "مشاكل في التئام الجلد أو فقدان جزء منه، وهي أكثر احتمالاً بكثير عند المدخّنين وعند ضعف الدورة",
        "أثر عريض أو متضخّم، وفقدان بسيط للشعر على طول الشقّ، وتنميل أمام الأذن يتحسّن عادةً في أسابيع إلى أشهر",
        "عدم تناظر، أو نتيجة تُقيَّم على أنها مفرطة الشدّ أو خفيفة جداً، تحتاج تعديلاً",
      ],
      note:
        "أخبرنا عن التدخين والسكري وضغط الدم ومضادات التخثّر وأي جراحة أو فيلر سابق في الوجه. " +
        "الفيلر والخيوط تغيّر التشريح والخطة، وإخفاؤها أسرع طريق إلى عملية معقّدة.",
    },

    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "هل سأبدو شخصاً آخر؟",
          a:
            "الهدف أن تبدو نفسك، لكن أكثر راحة. شدّ الوجه يرفع أنسجة هبطت؛ ولا يغيّر شكل الأنف أو " +
            "العينين أو طابع الوجه. والمظهر «المصنوع» يأتي عادةً من شدّ الجلد بإفراط، ولهذا تحمل " +
            "الطبقات الأعمق الشدّ هنا.",
        },
        {
          q: "كم تدوم النتيجة؟",
          a:
            "يرى معظم المرضى التغيير سبعاً إلى عشر سنوات، والرقبة غالباً أطول. والنتيجة ليست دائمة، " +
            "لأن الوجه يستمر في التقدّم في العمر بمعدّله. وثبات الوزن والحماية من الشمس يساعدان.",
        },
        {
          q: "متى أستطيع الظهور أمام الناس؟",
          a:
            "يشعر معظم الناس بالراحة بعد عشرة إلى أربعة عشر يوماً، مع تورّم متبقٍّ يسهل تغطيته. " +
            "ويستمر الوجه في الاستقرار ثلاثة إلى ستة أشهر، وعندها يُحكم على الشكل النهائي لخطّ الفكّ.",
        },
        {
          q: "هل يمكن جمعه مع جراحة الجفون؟",
          a:
            "غالباً نعم — جراحة الجفن العلوي أو السفلي، أو رفع الحاجب، أو حقن الدهون في الوجنتين، " +
            "تُجرى كثيراً في الجلسة نفسها. وهل ذلك آمن يعتمد على مجموع زمن العملية وعلى صحتك، " +
            "ويُقرَّر في الاستشارة.",
        },
      ],
    },

    ctaBand: {
      heading: "أرسل صورك للحصول على رأي أولي",
      text:
        "ثلاث صور — أمامية وثلاثة أرباع وجانبية — تكفي ليقول الجرّاح هل الشدّ هو العملية المناسبة، " +
        "وأي تقنية تناسبك. ويعود إليك منسّق الرعاية بخطة وموعد وعرض سعر مكتوب.",
      button: "تحدّث مع منسّق الرعاية",
    },

    disclaimer:
      "هذه الصفحة معلومات عامة وليست استشارة طبية. الملاءمة والتقنية والمخاطر تُحدَّد في استشارة مع جرّاح.",
  },
};
