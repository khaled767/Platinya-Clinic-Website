// /filler — Dermal fillers (hyaluronic acid).
//
// Copy rules: no promises, no "best clinic", no before/after claims. Fillers are
// presented as a medical procedure with real risks, including vascular occlusion,
// and the reversal agent is treated as part of the standard of care.

export default {
  slug: "/filler",
  group: { href: "/aesthetics", label: { en: "Aesthetic medicine", ar: "الطب التجميلي" } },
  heroImage: "/assets/images/ai/services/aesthetics/filler.webp",

  en: {
    title: "Dermal Fillers in Istanbul",
    eyebrow: "Aesthetic medicine",
    lead:
      "Hyaluronic acid is a sugar the skin already contains. Cross-linked into a gel and placed under the " +
      "skin, it restores volume that has been lost and softens folds that have set. It is a medical " +
      "procedure with real risks, not a beauty treatment.",
    cta: "Book a free assessment",
    heroAlt: "Dermal filler consultation at Platinya Clinic",
    stats: [
      { value: "30–60 min", label: "Appointment" },
      { value: "6–18 months", label: "Duration" },
      { value: "24–72 h", label: "Swelling and bruising" },
    ],
    candidate: {
      heading: "Who it suits, and who it does not",
      intro:
        "The right candidate has a specific, describable concern — a fold, a hollow, a lost contour — rather " +
        "than a wish to look like someone else. Volume is replaced where it has gone, not added everywhere " +
        "it can be.",
      items: [
        "Volume loss in the cheeks, temples or mid-face, or folds that remain when the face is at rest",
        "A jawline or chin that has lost definition, or lips that have thinned with age rather than never having volume",
        "Good general health, no active infection or skin inflammation in the area to be treated",
        "Realistic expectations: fillers restore volume, they do not lift a sagging face or remove skin laxity",
      ],
      note:
        "Fillers are not given during pregnancy or breastfeeding, over active acne, cold sores or infection, " +
        "or where there is a known allergy to hyaluronic acid or to lidocaine. Blood thinners and some " +
        "supplements raise the bruising risk and are reviewed beforehand, not ignored. Anyone wanting " +
        "permanent filler is refused and offered a surgical opinion instead.",
    },
    techniques: {
      heading: "Product, plane, and how much",
      intro:
        "The result depends far more on where the product is placed and how much is used than on the brand " +
        "on the box.",
      items: [
        {
          name: "Choosing the gel",
          text:
            "Hyaluronic acid fillers differ in how heavily they are cross-linked and how firm the gel is. " +
            "Softer gels for lips and fine lines, firmer ones for deep planes over bone. Most contain " +
            "lidocaine, which makes the injection more comfortable.",
        },
        {
          name: "Needle or cannula, and which plane",
          text:
            "A needle is precise for lips and fine folds; a blunt cannula reduces bruising and lets the " +
            "product be laid in a single track. Deep placement over bone supports; superficial placement " +
            "refines. The plane is a clinical decision, not a preference.",
        },
        {
          name: "Conservative dosing, staged",
          text:
            "Under-filling and reviewing at two to four weeks is safer than correcting in one session. " +
            "Tissue that is overfilled stretches, and stretched skin does not shrink back — which is how " +
            "faces end up looking filled rather than rested.",
        },
      ],
    },
    journey: {
      heading: "From consultation to review",
      steps: [
        {
          name: "Consultation",
          text:
            "The face is assessed at rest and in movement, photographs are taken, and the medical history is " +
            "reviewed — pregnancy, autoimmune disease, cold sores, previous fillers and where they were placed. " +
            "Previous permanent filler changes the plan entirely.",
        },
        {
          name: "Planning and consent",
          text:
            "The areas, the product, the volume and the cost are agreed in writing before anything is opened. " +
            "The risks are explained, including vascular occlusion, and you are told that hyaluronidase — the " +
            "enzyme that dissolves the product — is kept in the clinic.",
        },
        {
          name: "The appointment",
          text:
            "Thirty to sixty minutes including numbing cream. Injections take ten to twenty of those minutes. " +
            "Lips and tear troughs are the most sensitive; most people describe pressure rather than pain.",
        },
        {
          name: "The first 72 hours",
          text:
            "Swelling peaks at 24–48 hours, and bruising can take a week to fade. Avoid heat, sauna, intense " +
            "exercise and alcohol for 24–48 hours, and dental work for two weeks where the lips or nasolabial " +
            "area were treated. Sleeping slightly elevated helps the first night.",
        },
        {
          name: "Review at two to four weeks",
          text:
            "The result is judged once the swelling has gone. A small top-up is sometimes appropriate; a " +
            "correction is not made in the first week, when everything looks larger than it will be. Further " +
            "treatment is planned around how long the product actually lasts in your tissue.",
        },
      ],
    },
    risks: {
      heading: "What can go wrong",
      intro:
        "These are medical injections into a vascular area. The serious risks are uncommon, but they are the " +
        "reason this belongs in a clinic with a doctor present and a reversal agent in the fridge.",
      items: [
        "Bruising, swelling and tenderness for a few days — common, and higher with blood thinners",
        "Vascular occlusion — product blocking an artery, causing pain, blanching and, if untreated, skin necrosis and scarring; hyaluronidase must be given within hours",
        "Visual loss from embolisation into the retinal circulation — very rare, largely irreversible, and the reason certain areas are treated only by experienced injectors",
        "Lumps, nodules or delayed inflammatory reactions months later, sometimes triggered by illness or vaccination",
        "Asymmetry, migration of product, or an overfilled appearance that cannot be fully undone in one session",
      ],
      note:
        "Hyaluronic acid can be dissolved with hyaluronidase, which is why it is the only filler worth using " +
        "in the face. Permanent products and unlabelled substances cannot be removed, and they are the " +
        "commonest reason a patient is turned away or sent for surgery.",
    },
    faq: {
      heading: "Questions patients ask",
      items: [
        {
          q: "Does it hurt?",
          a:
            "Numbing cream is applied for twenty to thirty minutes, and most products contain lidocaine. " +
            "Lips and the under-eye area are the most sensitive — discomfort rather than pain, and it lasts " +
            "seconds per injection.",
        },
        {
          q: "Can it be reversed?",
          a:
            "Yes, if it is hyaluronic acid: hyaluronidase dissolves it within a day or two. That is not a " +
            "reason to overfill, but it is why the product matters more than the price.",
        },
        {
          q: "Will it look obvious?",
          a:
            "Not if it is placed in the right plane and kept conservative. An obvious result usually means " +
            "too much product, too superficially, in an area that needed support rather than volume.",
        },
        {
          q: "How often will I need more?",
          a:
            "Every six to eighteen months depending on the product, the area and how quickly you break it " +
            "down. Lips and areas that move a lot tend to need topping up sooner than deep cheek support.",
        },
      ],
    },
    ctaBand: {
      heading: "Ask a doctor what your face actually needs",
      text:
        "Send two photographs — front and three-quarter, at rest — and a doctor reviews them. You get an " +
        "honest answer on whether filler is the right treatment, and what else might be.",
      button: "Send your photos",
    },
    disclaimer:
      "General information, not medical advice. Fillers are prescription medical devices and are only " +
      "appropriate after a consultation with a qualified practitioner; suitability differs from patient to " +
      "patient.",
  },

  ar: {
    title: "الفيلر (حمض الهيالورونيك) في إسطنبول",
    eyebrow: "الطب التجميلي",
    lead:
      "حمض الهيالورونيك سكّر موجود في الجلد أصلاً. يُربط تصالبياً ليصبح هلاماً ويُوضع تحت الجلد، فيعيد " +
      "الحجم المفقود ويلطّف الخطوط التي استقرّت. هو إجراء طبي له مخاطر حقيقية، لا علاج تجميلي بسيط.",
    cta: "احجز تقييماً مجانياً",
    heroAlt: "استشارة الفيلر في عيادة بلاتينيا",
    stats: [
      { value: "٣٠–٦٠ دقيقة", label: "مدة الجلسة" },
      { value: "٦–١٨ شهراً", label: "مدة النتيجة" },
      { value: "٢٤–٧٢ ساعة", label: "التورّم والكدمات" },
    ],
    candidate: {
      heading: "لمن يناسب، ولمن لا يناسب",
      intro:
        "المرشّح المناسب لديه مشكلة محدّدة يستطيع وصفها — خط أو تجويف أو محيط ضاع — لا رغبة في أن يشبه " +
        "شخصاً آخر. يُعاد الحجم حيث ذهب، لا حيث يمكن إضافته.",
      items: [
        "فقدان حجم في الوجنتين أو الصدغين أو وسط الوجه، أو خطوط تبقى والوجه في وضع السكون",
        "خط فك أو ذقن فقد تحديده، أو شفاه خفّت مع التقدّم في العمر لا شفاه لم تكن ممتلئة أصلاً",
        "صحة عامة جيدة، دون التهاب أو تهيّج جلدي نشط في المنطقة المستهدفة",
        "توقّعات واقعية: الفيلر يعيد الحجم، ولا يشدّ وجهاً مترهّلاً ولا يزيل ترهّل الجلد",
      ],
      note:
        "لا يُعطى الفيلر خلال الحمل أو الإرضاع، ولا فوق حبّ الشباب النشط أو الهربس أو الالتهاب، ولا عند " +
        "تحسّس معروف لحمض الهيالورونيك أو لليدوكايين. ومضادات التخثّر وبعض المكمّلات ترفع احتمال الكدمات " +
        "وتُراجَع مسبقاً لا تُتجاهل. ومن يطلب فيلراً دائماً يُرفض ويُوجَّه إلى رأي جراحي بدلاً منه.",
    },
    techniques: {
      heading: "المادة والطبقة والكمية",
      intro:
        "النتيجة تعتمد على موضع وضع المادة وكميتها أكثر بكثير من اعتمادها على اسم المنتج.",
      items: [
        {
          name: "اختيار الهلام",
          text:
            "تختلف فيلرات حمض الهيالورونيك في درجة الربط التصالعي وفي صلابة الهلام. الأكثر ليونة للشفاه " +
            "والخطوط الدقيقة، والأصلب للطبقات العميقة فوق العظم. ومعظمها يحتوي ليدوكايين يجعل الحقن أقل إزعاجاً.",
        },
        {
          name: "إبرة أم قسطرة، وأي طبقة",
          text:
            "الإبرة دقيقة للشفاه والخطوط الدقيقة، والقسطرة غير الحادة تقلّل الكدمات وتتيح وضع المادة في مسار " +
            "واحد. الوضع العميق فوق العظم يدعم، والسطحي ينعّم. واختيار الطبقة قرار طبي لا تفضيل شخصي.",
        },
        {
          name: "كميات متحفّظة وعلى مراحل",
          text:
            "الوضع الناقص والمراجعة بعد أسبوعين إلى أربعة أكثر أماناً من التصحيح في جلسة واحدة. فالأنسجة " +
            "المفرطة الامتلاء تتمدّد، والجلد المتمدد لا يعود إلى ما كان — وهكذا تبدو الوجوه ممتلئة لا مرتاحة.",
        },
      ],
    },
    journey: {
      heading: "من الاستشارة إلى المراجعة",
      steps: [
        {
          name: "الاستشارة",
          text:
            "يُقيَّم الوجه في السكون وفي الحركة، وتُلتقط صور، ويُراجَع التاريخ المرضي — الحمل والأمراض " +
            "المناعية والهربس والفيلر السابق ومواضعه. ووجود فيلر دائم سابق يغيّر الخطة كلياً.",
        },
        {
          name: "التخطيط والموافقة",
          text:
            "تُتّفق المناطق والمنتج والكمية والتكلفة كتابةً قبل فتح أي عبوة. وتُشرح المخاطر بما فيها الانسداد " +
            "الوعائي، ويُبلَّغ المريض بأن الهيالورونيداز — الإنزيم الذي يُذيب المادة — متوفّر في العيادة.",
        },
        {
          name: "الجلسة",
          text:
            "من ثلاثين إلى ستين دقيقة تشمل كريم التخدير. ويستغرق الحقن عشر إلى عشرين دقيقة منها. والشفاه " +
            "والمنطقة تحت العين الأكثر حساسية؛ ويصف معظم الناس ضغطاً لا ألماً.",
        },
        {
          name: "أول ٧٢ ساعة",
          text:
            "يبلغ التورّم ذروته خلال ٢٤–٤٨ ساعة، وقد تحتاج الكدمات أسبوعاً لتزول. يُتجنّب الحرارة والساونا " +
            "والرياضة العنيفة والكحول ٢٤–٤٨ ساعة، وعلاج الأسنان أسبوعين إذا عُولجت الشفاه أو منطقة الأنف.",
        },
        {
          name: "المراجعة بعد أسبوعين إلى أربعة",
          text:
            "تُقيَّم النتيجة بعد زوال التورّم. وتُضاف كمية صغيرة أحياناً، لكن لا تصحيح في الأسبوع الأول حين " +
            "يبدو كل شيء أكبر مما سيكون. ويُخطَّط لما بعدها بحسب مدة بقاء المادة فعلاً في أنسجتك.",
        },
      ],
    },
    risks: {
      heading: "ما قد يسوء",
      intro:
        "هذه حقن طبية في منطقة غنية بالأوعية. المخاطر الجسيمة غير شائعة، لكنها سبب إجرائها في عيادة فيها " +
        "طبيب حاضر وإنزيم إذابة متوفّر.",
      items: [
        "كدمات وتورّم وألم عند اللمس بضعة أيام — شائعة، وأكثر مع مضادات التخثّر",
        "انسداد وعائي — مادة تسدّ شرياناً فتسبب ألماً واصفرار الجلد، وإن لم يُعالج تنخّراً وأثراً؛ ويجب إعطاء الهيالورونيداز خلال ساعات",
        "فقدان البصر بسبب انصمام إلى دوران الشبكية — نادر جداً وغير قابل للعلاج غالباً، وهو سبب إسناد مناطق معيّنة إلى حقّانين ذوي خبرة فقط",
        "عقد أو تكتّلات أو تفاعلات التهاب متأخّرة بعد أشهر، تُحرّضها أحياناً أمراض أو لقاحات",
        "عدم تناظر أو هجرة المادة، أو مظهر مفرط الامتلاء لا يمكن التراجع عنه كاملاً في جلسة واحدة",
      ],
      note:
        "يمكن إذابة حمض الهيالورونيك بالهيالورونيداز، ولهذا هو الفيلر الوحيد الذي يستحق الاستخدام في " +
        "الوجه. أما المواد الدائمة والمواد مجهولة المصدر فلا يمكن إزالتها، وهي أكثر سبب لرفض مريض أو " +
        "توجيهه إلى الجراحة.",
    },
    faq: {
      heading: "أسئلة يطرحها المرضى",
      items: [
        {
          q: "هل هو مؤلم؟",
          a:
            "يُوضع كريم التخدير عشرين إلى ثلاثين دقيقة، ومعظم المنتجات تحتوي ليدوكايين. والشفاه ومنطقة تحت " +
            "العين الأكثر حساسية — إزعاج لا ألم، ويدوم ثوانٍ مع كل حقنة.",
        },
        {
          q: "هل يمكن إذابته؟",
          a:
            "نعم إذا كان حمض هيالورونيك: يُذيبه الهيالورونيداز خلال يوم أو يومين. وهذا ليس سبباً للمبالغة في " +
            "الكمية، لكنه سبب لأن تهمّ المادة أكثر من السعر.",
        },
        {
          q: "هل سيبدو واضحاً؟",
          a:
            "لا، إن وُضع في الطبقة الصحيحة وبكمية متحفّظة. والنتيجة الواضحة تعني عادةً كمية أكبر من اللازم " +
            "أو وضعاً سطحياً في منطقة كانت تحتاج دعماً لا حجماً.",
        },
        {
          q: "كم مرة أحتاج إلى إعادة؟",
          a:
            "كل ستة إلى ثمانية عشر شهراً حسب المادة والمنطقة وسرعة تكسيره في جسمك. والشفاه والمناطق كثيرة " +
            "الحركة تحتاج إلى تعويض أسرع من الدعم العميق في الوجنتين.",
        },
      ],
    },
    ctaBand: {
      heading: "اسأل طبيباً عمّا يحتاجه وجهك فعلاً",
      text:
        "أرسل صورتين — أمامية وثلاثة أرباع، والوجه في وضع السكون — ويراجعهما طبيب. وتحصل على جواب صريح: " +
        "هل الفيلر هو العلاج المناسب، وما البديل إن لم يكن.",
      button: "أرسل صورك",
    },
    disclaimer:
      "معلومات عامة وليست نصيحة طبية. الفيلر مستحضرات طبية تُصرف بوصفة ولا تلائم إلا بعد استشارة ممارس " +
      "مؤهّل؛ والملاءمة تختلف من مريض لآخر.",
  },
};
