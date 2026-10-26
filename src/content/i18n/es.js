// Translations for the 23 treatment pages.
// Shape: { "/slug": { title, eyebrow, lead, cta, heroAlt, stats, candidate,
//   techniques, journey, risks, faq, ctaBand, disclaimer, seoTitle, seoDesc } }
export default {
  "/hair-transplant": {
    title: "Trasplante capilar en Estambul (FUE)",
    eyebrow: "Restauración capilar",
    lead:
      "Los folículos se trasladan de la parte posterior del cuero cabelludo —donde resisten a la caída— a las zonas que se han aclarado. " +
      "El resultado es su propio cabello, creciendo donde ya no lo hacía.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Valoración de trasplante capilar en Platinya Clinic",
    stats: [
      { value: "6–9 h", label: "Duración de la intervención" },
      { value: "1 día", label: "En la clínica" },
      { value: "12–18 meses", label: "Resultado final" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "El factor limitante no es cuánto cabello falta, sino cuánto cabello donante hay disponible en la parte posterior y los laterales, " +
        "y cuán estable ha sido la pérdida.",
      items: [
        "Caída estabilizada desde hace aproximadamente un año, no semana tras semana",
        "Densidad suficiente en la zona donante para el número de injertos que necesita el área calva",
        "Línea de implantación retrocedida, pérdida en las entradas o aclaramiento en la coronilla",
        "Expectativas realistas: la densidad mejora, pero una zona calva nunca recupera la densidad de la adolescencia",
      ],
      note:
        "Si la caída sigue activa, tratarla primero —con medicación— protege el resultado. " +
        "Un trasplante mueve cabello; no impide que el cabello que aún conserva se aclare más adelante.",
    },
    techniques: {
      heading: "Cómo se extrae y se coloca el cabello",
      intro:
        "El método se elige según la densidad donante, el tamaño del área y el peinado que desea conservar.",
      items: [
        {
          name: "FUE — extracción de unidades foliculares",
          text:
            "Los folículos se extraen uno a uno y se reimplantan. No se retira una tira de piel, por lo que no queda cicatriz lineal; " +
            "la contrapartida es que la zona donante se rasura y la curación tarda unos días.",
        },
        {
          name: "DHI — implantación directa",
          text:
            "Los folículos se colocan con un bolígrafo implantador de un solo uso, que permite un control preciso del ángulo y la " +
            "profundidad en la línea de implantación. Es más lento, así que se colocan menos injertos por sesión.",
        },
        {
          name: "Diseño de la línea de implantación",
          text:
            "La línea se dibuja con usted, sentado y de pie, antes de cortar nada: debe resistir el paso de los años y nuevas pérdidas, " +
            "por eso se sitúa de forma conservadora y no baja.",
        },
      ],
    },
    journey: {
      heading: "De la consulta al resultado final",
      steps: [
        {
          name: "Valoración",
          text:
            "Se mide la densidad donante, se diseña la línea y se solicitan análisis. Se toman fotografías desde cinco ángulos para " +
            "comparar más adelante.",
        },
        {
          name: "El día de la intervención",
          text:
            "Anestesia local con sedación ligera; permanece despierto y puede comer. La sesión es larga —de seis a nueve horas— y se " +
            "interrumpe con descansos breves.",
        },
        {
          name: "Los primeros diez días",
          text:
            "Se forman costras pequeñas que se lavan con suavidad desde el segundo día. La hinchazón en la frente es habitual y se " +
            "resuelve en una semana.",
        },
        {
          name: "Semanas 3 a 12",
          text:
            "La mayor parte del cabello trasplantado se cae: es lo esperado y no significa fracaso. El crecimiento nuevo empieza hacia " +
            "el tercer mes.",
        },
        {
          name: "A partir del mes 12",
          text:
            "La densidad y el grosor siguen mejorando hasta los 12–18 meses. Si desea una segunda sesión para añadir densidad, se planifica " +
            "no antes de 12 meses.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "Un trasplante es una operación real con límites reales. Estos son los que conviene conocer antes de reservar.",
      items: [
        "Hinchazón, enrojecimiento y costras durante la primera semana, y entumecimiento temporal del cuero cabelludo",
        "La supervivencia folicular nunca es del 100 %; una parte de los injertos no crece",
        "Cobertura irregular o escasa si el número de injertos previsto no se corresponde con la oferta donante",
        "Foliculitis: pequeños puntos infectados en la zona receptora, normalmente tratables",
        "Una línea de implantación artificial si el diseño es demasiado bajo o demasiado denso para la zona donante",
      ],
      note:
        "Elija el plan por número de injertos y calidad de la zona donante, no por el precio más bajo: una sesión barata que " +
        "sobreexplota la zona donante no se puede deshacer.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Duele?",
          a:
            "Las inyecciones escuecen unos segundos; después el cuero cabelludo queda dormido y la intervención resulta más aburrida " +
            "que dolorosa. La primera noche molesta y se controla con un analgésico habitual.",
        },
        {
          q: "¿Quedará cicatriz?",
          a:
            "La FUE deja marcas circulares diminutas en la zona donante que se difuminan hasta casi desaparecer con el cabello a su " +
            "longitud normal. La técnica de tira deja una línea fina en la parte posterior.",
        },
        {
          q: "¿Cuándo puedo volver a trabajar?",
          a:
            "Al trabajo de oficina a los dos o tres días, cuando ha bajado la hinchazón. El ejercicio intenso, la sauna y la natación " +
            "esperan unas dos semanas.",
        },
        {
          q: "¿Dura el cabello nuevo?",
          a:
            "Los folículos trasplantados conservan el comportamiento de la zona donante y suelen ser permanentes. El cabello de alrededor " +
            "puede seguir aclarándose, por eso a menudo se mantiene el tratamiento médico.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Bastan fotos de la línea de implantación, la coronilla y la zona donante para decir si un trasplante es razonable, cuántos " +
        "injertos aproximadamente y cuánto costaría.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad solo puede valorarse tras examinar el cuero cabelludo y los antecedentes " +
      "médicos; los resultados varían entre pacientes.",
    seoTitle: "Trasplante capilar FUE en Estambul",
    seoDesc:
      "Trasplante capilar FUE en Estambul: cómo se extraen y colocan los folículos, quién es candidato, recuperación semana a semana y riesgos reales.",
  },
  "/sapphire-hair-transplant": {
    title: "Trasplante capilar FUE zafiro en Estambul",
    eyebrow: "Restauración capilar",
    lead:
      "El FUE zafiro es la misma extracción de unidades foliculares que el FUE estándar, pero los canales de los injertos se abren con " +
      "hojas de zafiro en lugar de acero. La diferencia está en las incisiones, no en los folículos.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Planificación de un trasplante capilar FUE zafiro en Platinya Clinic",
    stats: [
      { value: "6–8 h", label: "Duración de la intervención" },
      { value: "1 día", label: "En la clínica" },
      { value: "10–14 días", label: "Costras resueltas" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "El zafiro es una técnica, no un criterio de idoneidad: se aplican las mismas reglas que en cualquier trasplante —caída " +
        "estable y suficiente cabello donante.",
      items: [
        "Caída estabilizada y una zona donante sana en la parte posterior y los laterales",
        "Aclaramiento en la línea de implantación, las entradas o la coronilla que el tratamiento médico por sí solo no ha resuelto",
        "Piel sin infección activa, eccema ni psoriasis en la zona receptora",
        "Entender que la hoja cambia la curación, no el número de injertos que su zona donante puede dar",
      ],
      note:
        "Las clínicas que presentan el zafiro como garantía de más densidad están vendiendo el instrumento por encima de sus posibilidades. " +
        "La supervivencia de los injertos depende del manejo de los folículos, no solo de la hoja.",
    },
    techniques: {
      heading: "Qué cambia la hoja de zafiro",
      intro: "La misma operación, con un filo distinto y un conjunto distinto de contrapartidas.",
      items: [
        {
          name: "Canales más estrechos",
          text:
            "Las hojas de zafiro cortan una ranura más fina que el acero, de modo que el tejido se separa en lugar de desgarrarse. " +
            "Aberturas más pequeñas significan menos costras y, en la mayoría de los pacientes, una curación más rápida.",
        },
        {
          name: "Ajuste más firme del injerto",
          text:
            "Un injerto que encaja bien en su canal tiene menos probabilidades de moverse en los primeros días. Esto importa sobre todo " +
            "en la línea de implantación, donde la dirección y el ángulo están a la vista.",
        },
        {
          name: "Lo que no cambia",
          text:
            "No aumenta el número de injertos que puede dar su zona donante ni sustituye al plan: la densidad, el diseño de la línea y " +
            "el manejo de los folículos por parte del equipo deciden el resultado.",
        },
      ],
    },
    journey: {
      heading: "El día, hora a hora",
      steps: [
        {
          name: "Diseño y rasurado",
          text:
            "La línea de implantación se dibuja y se acuerda antes de cualquier corte. La zona donante se recorta al ras; la zona " +
            "receptora se rasura en la mayoría de los casos.",
        },
        {
          name: "Anestesia",
          text: "Inyecciones de anestésico local con sedación ligera. Las molestias se limitan a los primeros minutos.",
        },
        {
          name: "Extracción y canales",
          text:
            "Se extraen los folículos, se mantienen fríos en solución y se abren los canales de zafiro con el ángulo que exige la " +
            "línea de implantación.",
        },
        {
          name: "Implantación",
          text:
            "Los injertos se colocan uno a uno. En sesiones largas el equipo trabaja por turnos para mantener un manejo constante.",
        },
        {
          name: "Curación",
          text:
            "Las costras diminutas se desprenden en 10–14 días. El cabello trasplantado se cae a partir de la tercera semana y vuelve " +
            "a crecer desde el tercer mes.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "Todo trasplante conlleva los mismos riesgos de fondo, sea cual sea la hoja.",
      items: [
        "Hinchazón, sensibilidad y entumecimiento temporal en la zona donante y en la receptora",
        "Costras y enrojecimiento que duran más de lo previsto en pieles sensibles",
        "Algunos injertos no sobreviven, por lo que a veces hace falta una segunda sesión",
        "Foliculitis o pequeños quistes alrededor de los injertos nuevos en las primeras semanas",
        "Una línea de implantación demasiado recta o demasiado densa si el diseño no fue conservador",
      ],
      note:
        "Pregunte cuántos injertos están previstos, quién abre los canales y quién implanta: las respuestas dicen más del resultado que " +
        "la palabra zafiro.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Es mejor el zafiro que el FUE con acero?",
          a:
            "Cura algo más rápido y produce menos costras. La evidencia independiente de que haga crecer más cabello es débil; el manejo " +
            "de los injertos por parte del cirujano importa más.",
        },
        {
          q: "¿Duele más?",
          a: "No. La anestesia es la misma; la hoja se usa sobre piel ya dormida.",
        },
        {
          q: "¿Cuándo desaparecen las costras?",
          a: "Normalmente en 10–14 días, con lavados suaves desde el segundo día.",
        },
        {
          q: "¿Basta con una sesión?",
          a:
            "En muchos pacientes, sí. Las áreas calvas extensas o una densidad donante baja pueden necesitar una segunda sesión a los " +
            "12 meses para alcanzar la densidad prevista.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Le diremos con honestidad si el FUE zafiro aporta algo en su caso y cuál sería el número de injertos.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad se decide tras la exploración; los resultados varían entre pacientes.",
    seoTitle: "FUE zafiro en Estambul: qué cambia de verdad",
    seoDesc:
      "FUE zafiro en Estambul: en qué se diferencia del FUE con acero, para quién tiene sentido, curación en 10–14 días y límites reales de la técnica.",
  },
  "/hair-implant-hybrid": {
    title: "Trasplante capilar híbrido (FUE + FUT) en Estambul",
    eyebrow: "Restauración capilar",
    lead:
      "Una sesión híbrida combina las dos formas de obtener cabello —una tira fina de la parte posterior del cuero cabelludo y unidades " +
      "foliculares individuales— en una sola operación, cuando un único método no puede dar el número de injertos que necesita el área calva.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Comparación de técnicas de trasplante capilar híbrido en Platinya Clinic",
    stats: [
      { value: "1 sesión", label: "Dos técnicas" },
      { value: "+30–50 %", label: "Injertos frente a FUE solo" },
      { value: "12 meses", label: "Para valorar el resultado" },
    ],
    candidate: {
      heading: "Para quién es",
      intro:
        "El híbrido resuelve un problema de suministro con dos herramientas: existe para áreas calvas extensas y una zona donante que no " +
        "es lo bastante densa para darlo todo mediante extracción.",
      items: [
        "Pérdida avanzada —Norwood 5 a 6— en la que una sola sesión de FUE dejaría la coronilla escasa",
        "Buena densidad en la zona de la tira, pero pocas unidades foliculares para extraer",
        "Una sesión previa de FUE que agotó los puntos donantes accesibles",
        "Aceptar una cicatriz lineal fina a cambio de un número de injertos bastante mayor",
      ],
      note:
        "Más injertos no es automáticamente mejor. El híbrido tiene sentido cuando el plan realmente necesita esas cifras extra; para " +
        "áreas más pequeñas, una sola técnica es más sencilla y cura antes.",
    },
    techniques: {
      heading: "Cómo trabajan juntas las dos mitades",
      intro: "Primero se toma la tira y después la extracción completa el resto del plan: una anestesia, un día.",
      items: [
        {
          name: "La tira (FUT)",
          text:
            "Se retira una elipse estrecha de cuero cabelludo de la parte posterior, se cierra por planos y se disecciona en injertos " +
            "individuales bajo el microscopio. Es la fuente más densa de injertos por centímetro cuadrado.",
        },
        {
          name: "La extracción (FUE)",
          text:
            "Después se extraen folículos uno a uno de los laterales, añadiendo injertos sin otra línea de cicatriz y, sobre todo, sin " +
            "debilitar el cierre de la tira.",
        },
        {
          name: "Por qué no hacer simplemente más FUE",
          text:
            "Porque sobreexplotar una zona donante la deja irregular y cierra la puerta a cualquier sesión futura. El híbrido reparte la " +
            "carga entre dos zonas donantes.",
        },
      ],
    },
    journey: {
      heading: "De la planificación al resultado final",
      steps: [
        {
          name: "Presupuesto de injertos",
          text:
            "Se mide por separado la densidad donante de la zona de la tira y de la zona de extracción, y se suman los injertos que puede " +
            "dar cada una. Ese total define el plan.",
        },
        {
          name: "El día de la cirugía",
          text:
            "La retirada de la tira dura alrededor de una hora; el equipo disecciona mientras continúa la extracción. Para una sesión " +
            "grande, cuente de ocho a diez horas en total.",
        },
        {
          name: "Las dos primeras semanas",
          text:
            "La línea de la tira se cierra con suturas o grapas, que se retiran hacia el día 10–14. Las costras de la zona receptora " +
            "desaparecen en ese mismo periodo.",
        },
        {
          name: "Meses 1 a 3",
          text: "El cabello trasplantado se cae y luego empieza a crecer. La cicatriz lineal pasa de roja a pálida.",
        },
        {
          name: "Meses 12 a 18",
          text:
            "Densidad final. Con el cabello a su longitud normal, la cicatriz de la tira suele quedar cubierta por el cabello de alrededor; " +
            "los peinados muy cortos la dejan a la vista.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "El híbrido reúne a la vez los riesgos de las dos técnicas.",
      items: [
        "Una cicatriz lineal permanente en la parte posterior del cuero cabelludo, oculta por el cabello a longitud normal",
        "Tensión o estiramiento de la cicatriz si el cierre queda bajo tensión o la curación es deficiente",
        "Entumecimiento temporal por encima de la cicatriz que puede tardar meses en resolverse",
        "Los riesgos habituales de cualquier trasplante: hinchazón, foliculitis, pérdida parcial de injertos",
        "Una sesión larga: el cansancio afecta al paciente y al equipo, por eso el día se planifica por etapas",
      ],
      note:
        "Pregunte quién cierra la tira y cuántas sesiones híbridas realiza la clínica al mes. El cierre es lo que los pacientes juzgan " +
        "años después.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuántos injertos puede dar un híbrido?",
          a:
            "Habitualmente entre 4.000 y 6.000 en una sesión con una zona donante adecuada, frente a unos 2.500–3.500 con FUE solo. " +
            "La cifra exacta se mide, no se promete.",
        },
        {
          q: "¿Se verá la cicatriz?",
          a:
            "Con el cabello a su longitud normal, normalmente no. Con la cabeza rasurada o un degradado muy corto se ve como una línea " +
            "pálida, y eso debe aceptarse antes de reservar.",
        },
        {
          q: "¿Duele más que el FUE?",
          a:
            "Las dos primeras noches hay más tensión por el cierre. Después, ambos lados se sienten parecido; la zona de la tira se " +
            "describe a menudo como un dolor sordo con sensación de hematoma.",
        },
        {
          q: "¿Podré hacerme un FUE más adelante?",
          a:
            "Sí, si no se agotaron las zonas de extracción. Precisamente por eso el plan administra la zona donante pensando en sesiones " +
            "futuras en lugar de gastarla toda de una vez.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Mediremos las dos zonas donantes y le diremos si un híbrido aporta algo frente a una sola técnica.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad y el número de injertos se deciden tras la exploración; los resultados varían.",
    seoTitle: "Trasplante capilar híbrido FUE + FUT en Estambul",
    seoDesc:
      "Trasplante capilar híbrido FUE + FUT en Estambul: cuándo suma de verdad, 4.000–6.000 injertos por sesión, cicatriz lineal y recuperación.",
  },
  "/hair-transplant-for-women": {
    title: "Trasplante capilar para mujeres en Estambul",
    eyebrow: "Restauración capilar",
    lead:
      "En la mujer, la caída suele ser un aclaramiento difuso más que una calva localizada, y a menudo tiene una causa tratable. El " +
      "trasplante se plantea después de descartar esas causas, y funciona de forma distinta a la operación masculina.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de caída del cabello para mujeres en Platinya Clinic",
    stats: [
      { value: "1 día", label: "En la clínica" },
      { value: "Sin rasurar", label: "En la mayoría de los casos" },
      { value: "12 meses", label: "Para valorar la densidad" },
    ],
    candidate: {
      heading: "A quién ayuda y a quién no",
      intro:
        "En la mujer la primera pregunta no es cuántos injertos, sino por qué se está aclarando el cabello. Los análisis llegan antes " +
        "que cualquier plan quirúrgico.",
      items: [
        "Aclaramiento que continúa pese a unos resultados normales de hierro, tiroides, vitamina D y hormonas",
        "Aclaramiento localizado en la raya, las sienes o a lo largo de la línea frontal",
        "Cicatriz por tracción, quemaduras, cirugía o alopecia estabilizada desde hace un año",
        "Pérdida de cejas o de línea capilar tras depilación excesiva o traumatismo por maquillaje permanente",
      ],
      note:
        "La caída difusa en todo el cuero cabelludo —efluvio telógeno— suele ser reversible y no se trata con cirugía. Se buscan primero " +
        "déficit de hierro, enfermedad tiroidea, ovario poliquístico y caída posparto, porque trasplantar sobre una caída activa " +
        "desperdicia injertos.",
    },
    techniques: {
      heading: "En qué se diferencia la operación femenina",
      intro:
        "El principio es el mismo, la práctica no: menos rasurado, menos injertos y más atención a cómo cae el cabello.",
      items: [
        {
          name: "Rasurado parcial o ninguno",
          text:
            "Los folículos pueden extraerse de una banda estrecha que el cabello de alrededor cubre, así que no hace falta rasurar la " +
            "zona donante. Es más lento, por lo que las sesiones son más pequeñas.",
        },
        {
          name: "Densidad, no cobertura",
          text:
            "En la mujer se trata de añadir densidad entre el cabello existente, no de reconstruir una línea de implantación. Los injertos " +
            "se colocan entre los folículos propios con un ángulo que sigue la caída natural.",
        },
        {
          name: "Combinado con tratamiento médico",
          text:
            "El minoxidil, y en algunos casos medicación pautada, suele mantenerse antes y después de la cirugía: el trasplante añade " +
            "densidad, no detiene el proceso de fondo.",
        },
      ],
    },
    journey: {
      heading: "Desde la primera consulta",
      steps: [
        {
          name: "Primero, las causas",
          text:
            "Analíticas, historia del patrón de caída y exploración con tricoscopia. Si se encuentra una causa reversible, se trata antes " +
            "de volver a hablar de cirugía.",
        },
        {
          name: "Planificar la densidad",
          text:
            "Se cartografía el área y el número de injertos se mantiene deliberadamente moderado: una densidad excesiva en un cuero " +
            "cabelludo femenino aclarado puede dañar el cabello que aún queda.",
        },
        {
          name: "El día de la intervención",
          text: "Anestesia local; la sesión suele durar de cuatro a seis horas. La mayoría de las pacientes vuelve a casa el mismo día.",
        },
        {
          name: "El primer mes",
          text: "La hinchazón y la sensibilidad se resuelven en días. El cabello trasplantado se cae a partir de la tercera semana: es lo esperado.",
        },
        {
          name: "Meses 6 a 12",
          text: "La densidad se construye poco a poco. El color y la textura se igualan al cabello de alrededor a medida que madura.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "Los riesgos son los habituales, con dos que importan más en la mujer.",
      items: [
        "Pérdida por shock del cabello alrededor de los injertos en las primeras semanas: normalmente temporal, pero alarmante",
        "Una colocación demasiado densa que dañe los folículos propios de un cuero cabelludo aclarado",
        "Resultado irregular si la causa de fondo seguía activa durante la cirugía",
        "Foliculitis, costras y entumecimiento temporal",
        "Un cambio visible en la textura del cabello en la zona trasplantada en una minoría de pacientes",
      ],
      note:
        "Cualquier clínica que ofrezca cirugía sin preguntar por el hierro, la tiroides y las hormonas se está saltando la parte que " +
        "decide si la operación merecía la pena.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Tendré que rasurarme la cabeza?",
          a:
            "Normalmente no. La mayoría de las sesiones femeninas usan una banda donante parcialmente rasurada que el cabello de alrededor " +
            "cubre, o ningún rasurado con una extracción más lenta.",
        },
        {
          q: "¿Podré llevar el pelo como siempre después?",
          a:
            "A partir de unos diez días, sí, con suavidad. El tinte y la permanente esperan de seis a ocho semanas, y se evitan las coletas " +
            "tensas y las trenzas durante el primer mes.",
        },
        {
          q: "¿Basta con una sesión?",
          a:
            "En el aclaramiento difuso suelen planificarse dos sesiones separadas por doce meses, porque añadir densidad de forma gradual " +
            "protege el cabello existente.",
        },
        {
          q: "¿Y si la causa es hormonal?",
          a:
            "Entonces el tratamiento hormonal es la base y la cirugía solo un añadido. Operar mientras la pérdida está activa da un " +
            "resultado que se aclara alrededor de los injertos.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Fotos de la raya, la línea capilar y la zona donante, junto con sus análisis recientes, bastan para una primera impresión, " +
        "incluido si la cirugía es o no la respuesta adecuada.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La caída del cabello en la mujer necesita un diagnóstico antes de cualquier plan " +
      "quirúrgico; los resultados varían.",
    seoTitle: "Trasplante capilar para mujeres en Estambul",
    seoDesc:
      "Trasplante capilar femenino en Estambul: causas que hay que descartar antes, técnica sin rasurar, densidad gradual y recuperación real.",
  },
  "/eyebrow-transplant": {
    title: "Trasplante de cejas en Estambul",
    eyebrow: "Restauración capilar",
    lead:
      "Se toman cabellos sueltos del cuero cabelludo y se colocan en la ceja con el ángulo con el que crece cada uno, para reconstruir " +
      "una ceja que la depilación excesiva, una cicatriz o la genética dejaron escasa.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de trasplante de cejas en Platinya Clinic",
    stats: [
      { value: "3–4 h", label: "Duración de la intervención" },
      { value: "200–400", label: "Injertos por ceja" },
      { value: "6–9 meses", label: "Forma final" },
    ],
    candidate: {
      heading: "Para quién es",
      intro:
        "Las cejas son el trasplante más visible del rostro, así que lo primero es decidir si todavía queda una forma que reconstruir.",
      items: [
        "Aclaramiento por años de depilación excesiva en el que los folículos han dejado de recuperarse",
        "Cicatrices por quemaduras, cortes o retirada de maquillaje permanente",
        "Cejas naturalmente escasas o asimétricas, o pérdida tras quimioterapia que no se ha recuperado",
        "Piel sana, sin eccema activo, psoriasis ni infección en la zona de la ceja",
      ],
      note:
        "Si la ceja está escasa por una enfermedad tiroidea o un déficit nutricional, eso se trata primero. El cabello tomado del cuero " +
        "cabelludo sigue creciendo como cabello del cuero cabelludo, así que hay que recortarlo: es un mantenimiento permanente y debe " +
        "entenderse antes de reservar.",
    },
    techniques: {
      heading: "Cómo se hace",
      intro: "Precisión más que volumen: unos cientos de cabellos sueltos, cada uno colocado en su propio ángulo.",
      items: [
        {
          name: "Injertos de un solo cabello",
          text:
            "Solo se usan unidades foliculares de uno y dos cabellos. Los injertos de varios cabellos se ven apelmazados en una ceja, " +
            "así que la zona donante se elige por sus cabellos finos y únicos, a menudo detrás de la oreja.",
        },
        {
          name: "Ángulo y dirección",
          text:
            "El cabello de la ceja crece hacia arriba y hacia fuera en la cabeza de la ceja y se aplana hacia la cola. Cada injerto se " +
            "coloca individualmente siguiendo ese patrón; si no, el resultado se percibe como artificial.",
        },
        {
          name: "Densidad en dos pasadas",
          text:
            "Una primera pasada conservadora protege el riego sanguíneo de la piel fina de la ceja; una segunda sesión a los 9–12 meses " +
            "añade densidad donde hace falta en lugar de sobrecargar desde el principio.",
        },
      ],
    },
    journey: {
      heading: "Del diseño a la forma final",
      steps: [
        {
          name: "Diseño sobre el rostro",
          text:
            "La ceja se dibuja con usted sentado, medida frente al otro lado y a las proporciones faciales, y se acuerda antes de tomar " +
            "ningún injerto.",
        },
        {
          name: "Cirugía",
          text:
            "Anestesia local. Extracción de la zona donante e implantación con agujas finas. De tres a cuatro horas para las dos cejas.",
        },
        {
          name: "Los primeros diez días",
          text:
            "Costras pequeñas; nada de maquillaje en la zona, ni frotar, ni dormir boca abajo. La hinchazón se resuelve en una semana.",
        },
        {
          name: "Semanas 3 a 8",
          text:
            "La mayoría de los injertos se caen, lo cual es normal. Durante un tiempo la ceja se ve más despoblada que el día de la cirugía.",
        },
        {
          name: "Meses 6 a 9",
          text:
            "El nuevo vello de la ceja queda establecido. A partir de ahí crece largo y se recorta con tijeras pequeñas cada pocas semanas.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "En el rostro, los pequeños errores técnicos se ven. Estos son los que conviene comentar.",
      items: [
        "Una dirección antinatural o una zona demasiado densa que parece un tapón",
        "Asimetría entre las dos cejas: la simetría perfecta no es alcanzable",
        "Pérdida de injertos en piel cicatricial, donde el riego sanguíneo es más débil",
        "Foliculitis o pequeños quistes en las primeras semanas",
        "Vello que crece más rápido y más largo que la ceja original y exige recortes periódicos",
      ],
      note:
        "Pida ver resultados curados a los seis meses o más, no del día siguiente a la cirugía. La dirección y la densidad solo se ven " +
        "cuando el cabello se ha asentado.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Se verá natural?",
          a:
            "Cuando se usan cabellos sueltos y se colocan con el ángulo correcto, sí: a distancia de conversación se lee como una ceja " +
            "normal. El riesgo es la densidad excesiva, por eso la primera pasada es conservadora.",
        },
        {
          q: "¿Podré seguir perfilándolas?",
          a:
            "Sí, pero con cuidado. Se evitan la pinza y la cera; el mantenimiento de las cejas trasplantadas se hace recortando con tijeras.",
        },
        {
          q: "¿Cuándo puedo usar maquillaje?",
          a: "A los 7–10 días, cuando las costras han desaparecido y la piel está cerrada.",
        },
        {
          q: "¿Necesito una segunda sesión?",
          a:
            "A menudo sí, para la densidad, y se planifica a los 9–12 meses. La primera sesión está pensada para establecer la forma y " +
            "la segunda para rellenarla.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text: "Basta una foto de cerca de cada ceja, de frente y en ángulo, para valorar qué se puede reconstruir.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad de la ceja se valora en persona; los resultados varían entre pacientes.",
    seoTitle: "Trasplante de cejas en Estambul: 200–400 injertos",
    seoDesc:
      "Trasplante de cejas en Estambul con injertos de un solo cabello: diseño, ángulo, densidad en dos pasadas, recorte y riesgos reales.",
  },
  "/hollywood-smile": {
    title: "Hollywood Smile en Estambul",
    eyebrow: "Odontología",
    lead:
      "El Hollywood Smile es un plan, no una sola intervención: se diseñan juntos la forma, el color y las proporciones de los dientes " +
      "frontales y después se construyen con carillas, coronas y, cuando la línea de las encías es irregular, contorneado gingival. " +
      "La mayoría de los planes se terminan en cinco a siete días.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de Hollywood Smile en Platinya Clinic",
    stats: [
      { value: "5–7 días", label: "Plan habitual" },
      { value: "8–20", label: "Dientes implicados normalmente" },
      { value: "10–15 años", label: "Vida útil con cuidado" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "El diseño tiene que encajar con la cara y con la mordida. Una sonrisa que se ve bien en una foto puede ser inadecuada para " +
        "una boca que rechina los dientes o para unos labios que muestran mucha encía.",
      items: [
        "Dientes frontales astillados, desgastados en los bordes o descoloridos de una forma que el blanqueamiento no cambia",
        "Pequeños espacios, o dientes rotados o ligeramente desalineados pero no tanto como para necesitar ortodoncia",
        "Coronas antiguas o empastes grandes frontales que ya no coinciden con los dientes vecinos",
        "Una línea de encías irregular, en la que algunos dientes parecen más largos que otros",
      ],
      note:
        "Primero los dientes y las encías tienen que estar sanos. La caries activa, la enfermedad periodontal o una mordida inestable se " +
        "tratan antes de fabricar ninguna carilla; si no, el trabajo nuevo se construye sobre algo que se sigue moviendo.",
    },
    techniques: {
      heading: "Cómo se construye la sonrisa",
      intro:
        "La combinación se decide por cuánto diente queda, cuánto esmalte se puede preservar y cuánto cambio desea realmente.",
      items: [
        {
          name: "Diseño digital y sonrisa de prueba",
          text:
            "Con fotografías y un escaneado intraoral se diseña la sonrisa en pantalla, tomando las proporciones de su rostro y no de " +
            "una plantilla. El diseño se imprime como maqueta y se adhiere temporalmente sobre sus dientes, para que pueda verlo, hablar " +
            "con él y cambiarlo antes de hacer nada definitivo.",
        },
        {
          name: "Carillas y coronas",
          text:
            "Las carillas son finas láminas de cerámica adheridas a la cara frontal de dientes intactos y apenas necesitan preparación. " +
            "Las coronas cubren todo el diente y se usan cuando está muy empastado, endodonciado o destruido. La mayoría de los " +
            "rediseños mezcla ambas: carillas en el centro y coronas donde un diente necesita soporte.",
        },
        {
          name: "Contorneado gingival",
          text:
            "Una línea de encías irregular se remodela con láser o con una hoja fina. Cuando los dientes son cortos porque la encía y el " +
            "hueso están bajos, hace falta alargamiento coronario: un pequeño paso quirúrgico que añade semanas al plan, no días.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la sonrisa final",
      steps: [
        {
          name: "Valoración y diseño",
          text:
            "Exploración, radiografías, fotografías y registro del color. Se comprueba el desgaste y el bruxismo. El diseño se le muestra " +
            "con sus límites: qué dientes, cuánto esmalte y hasta qué punto el blanco es creíble con su piel.",
        },
        {
          name: "Sonrisa de prueba",
          text:
            "Se adhiere una maqueta sobre los dientes durante uno o dos días. Es el momento de ser exigente —longitud, simetría, cómo se " +
            "ve al hablar— porque todavía es reversible.",
        },
        {
          name: "Preparación",
          text:
            "Bajo anestesia local se reduce el esmalte aproximadamente el grosor que añadirá la cerámica, se toman impresiones o un " +
            "escaneado y se colocan restauraciones provisionales el mismo día. Los dientes suelen estar sensibles unos días.",
        },
        {
          name: "Prueba en boca",
          text:
            "La cerámica vuelve del laboratorio y se comprueban en seco el ajuste, el color y la mordida antes de cementar. Los ajustes " +
            "pequeños en esta fase son normales; rehacer una pieza añade días.",
        },
        {
          name: "Colocación y revisión",
          text:
            "Se cementan las restauraciones, se afina la mordida y se hace una férula nocturna si rechina los dientes. Revisión a las dos " +
            "semanas y después limpiezas periódicas: en los márgenes es donde se mantienen vivas estas restauraciones.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "No es una operación, sino una serie de decisiones permanentes. Estas son las que conviene conocer antes de preparar el primer diente.",
      items: [
        "El esmalte retirado para las carillas no vuelve a crecer; esos dientes siempre necesitarán una restauración",
        "Sensibilidad al frío y al calor durante días o semanas, en ocasiones más tiempo",
        "Fractura o descementado, sobre todo en personas que aprietan los dientes o se muerden las uñas",
        "Un color demasiado opaco o demasiado uniforme, especialmente cuando se tratan muchos dientes a la vez",
        "Inflamación o retracción de las encías en los márgenes, donde la limpieza se vuelve difícil",
      ],
      note:
        "La decepción habitual no es la cerámica sino el plan: demasiados dientes, un tono demasiado blanco o una mordida que queda " +
        "desequilibrada, de modo que los dientes frontales soportan una carga para la que no estaban diseñados.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuánto tiempo lleva?",
          a:
            "De cinco a siete días en la clínica para un caso sencillo: dos visitas para la preparación y la colocación, con el " +
            "laboratorio trabajando entre medias. Si hacen falta cirugía de encías, reconstrucción de la mordida o extracciones, el plan " +
            "se escalona en semanas o meses.",
        },
        {
          q: "¿Se verá natural?",
          a:
            "Puede, pero lo natural es una decisión, no lo que sale por defecto. Los dientes reales no tienen un color plano: el cuello es " +
            "más cálido, el borde más translúcido y la superficie tiene textura. Un buen ceramista lo reproduce; un conjunto muy blanco y " +
            "muy opaco se ve falso con cualquier cerámica.",
        },
        {
          q: "¿Hay que tratar todos los dientes?",
          a:
            "Normalmente de ocho a diez dientes superiores, que son los que se ven al sonreír y al hablar. Los inferiores suelen dejarse " +
            "si no se ven. Tratar más de lo visible añade coste y pérdida de esmalte sin cambiar la sonrisa.",
        },
        {
          q: "¿Cuánto duran?",
          a:
            "Las carillas bien hechas suelen durar de diez a quince años; las coronas, parecido o más. La vida útil la decide menos la " +
            "cerámica que la mordida, el bruxismo y lo cuidadosamente que se limpian los márgenes.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe fotografías de su sonrisa",
      text:
        "Una vista frontal, una de cerca de los dientes y otra con los labios en reposo bastan para una primera opinión sobre lo que es " +
        "posible, cuántos dientes implica aproximadamente y qué haría falta.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad solo puede valorarse tras examinar los dientes, las encías, la mordida y " +
      "los antecedentes médicos; los resultados varían entre pacientes.",
    seoTitle: "Hollywood Smile en Estambul: plan en 5–7 días",
    seoDesc:
      "Hollywood Smile en Estambul: diseño digital, sonrisa de prueba, carillas y coronas, contorneado de encías y resultados en 5–7 días.",
  },
  "/dental-veneers": {
    title: "Carillas de porcelana (E-max) en Estambul",
    eyebrow: "Odontología",
    lead:
      "Una carilla es una fina lámina de cerámica adherida a la cara frontal del diente. El objetivo es cambiar forma y color retirando " +
      "el mínimo esmalte posible —en un diente con preparación mínima, unos 0,3–0,8 mm— y ese esmalte no vuelve a crecer.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de carillas de porcelana en Platinya Clinic",
    stats: [
      { value: "2 visitas", label: "En la clínica" },
      { value: "0,3–0,8 mm", label: "Esmalte retirado habitualmente" },
      { value: "10 años o más", label: "Vida útil típica" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "Las carillas resuelven problemas de forma, color y posición en los dientes frontales. No resuelven un problema de mordida ni " +
        "alinean dientes apiñados tan bien como la ortodoncia.",
      items: [
        "Dientes frontales astillados, desgastados o ligeramente rotados en los que el cambio buscado es estético",
        "Decoloración interna del diente —fluorosis, tinciones antiguas por tetraciclina, un diente endodonciado— que el blanqueamiento no puede levantar",
        "Pequeños espacios y bordes irregulares; a menudo se puede cerrar un diastema central único",
        "Esmalte sano: una carilla necesita algo sano a lo que adherirse",
      ],
      note:
        "Cuando el apiñamiento es importante, la ortodoncia primero suele ser el mejor plan: se tallan menos dientes y el resultado dura " +
        "más. Las carillas sobre dientes apiñados acaban gruesas, opacas y difíciles de limpiar.",
    },
    techniques: {
      heading: "Qué cerámica y por qué",
      intro:
        "El material se elige según cuánto diente falta, cuánto esmalte se puede conservar y si el caso es un diente o una sonrisa completa.",
      items: [
        {
          name: "E-max — disilicato de litio",
          text:
            "La opción por defecto para la mayoría de las carillas: disilicato de litio prensado o fresado, cementado con cemento de " +
            "resina. Es suficientemente resistente para frontales y premolares, suficientemente translúcido para comportarse como el " +
            "esmalte y pide unos 0,3–0,8 mm de tallado en lugar de una corona completa.",
        },
        {
          name: "Cerámica feldespática",
          text:
            "Estratificada a mano por un ceramista en lugar de fresada, de modo que el color y la translucidez se construyen por capas. " +
            "Es la opción más realista para un único diente visible; también es más fina, más sensible a la técnica y más cara.",
        },
        {
          name: "Composite directo",
          text:
            "Resina construida directamente sobre el diente, sin retirar esmalte, terminada en una visita y reversible. Se mancha y se " +
            "astilla antes —cinco a siete años es un plazo realista—, así que sirve para reparaciones pequeñas o para probar la forma " +
            "antes de decidirse por la cerámica.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a las carillas adheridas",
      steps: [
        {
          name: "Valoración",
          text:
            "Fotografías, radiografías, color y mordida. La primera pregunta es si la ortodoncia daría un resultado mejor; la segunda, " +
            "cuánto esmalte hay para trabajar.",
        },
        {
          name: "Preparación",
          text:
            "Bajo anestesia local se reduce el esmalte al grosor de la cerámica prevista, se toma un escaneado y se colocan carillas " +
            "provisionales para que los dientes no queden expuestos ni sensibles.",
        },
        {
          name: "Prueba en boca",
          text:
            "La cerámica se prueba con pasta hidrosoluble antes de adherir nada. El ajuste, el color y la forma se comprueban con luz " +
            "natural, no solo con la luz del gabinete.",
        },
        {
          name: "Adhesión",
          text:
            "Bajo dique de goma se graba el esmalte, se adhiere la carilla con cemento de resina, se retira el exceso de los márgenes y " +
            "se afina la mordida. Esta parte no es reversible.",
        },
        {
          name: "Revisión y mantenimiento",
          text:
            "Una revisión a las dos semanas, una férula nocturna si rechina los dientes y unas instrucciones de limpieza que incluyen hilo " +
            "dental en el margen. Las uñas, el hielo y los tapones de bolígrafo son lo que rompe las carillas.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "La intervención es pequeña, pero el intercambio es permanente. Estos son los límites que conviene entender antes de tallar el " +
        "primer diente.",
      items: [
        "La pérdida de esmalte es permanente: el diente siempre necesitará una carilla, una corona o un composite",
        "Sensibilidad al frío, a veces durante semanas, sobre todo en preparaciones finas",
        "Descementado o fractura, normalmente reparable, aunque un composite de reparación nunca iguala del todo",
        "Una carilla única es difícil de igualar a los dientes vecinos años después, cuando estos han envejecido o cambiado de color",
        "Retracción gingival en el margen que deja visible el borde, o inflamación pulpar si la preparación es demasiado agresiva",
      ],
      note:
        "El argumento más fuerte a favor de una preparación conservadora no son los primeros cinco años, sino el tercer recambio: cada " +
        "reemplazo retira un poco más de diente, y hay un límite a cuánto se puede quitar.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuánto diente se retira?",
          a:
            "Entre 0,3 y 0,8 mm en una carilla E-max típica, y a veces nada si el diente ya está desgastado. La cifra la fijan el grosor " +
            "que necesita la cerámica para ser resistente y cuánto tiene que moverse el diente visualmente.",
        },
        {
          q: "¿Se manchan las carillas?",
          a:
            "La cerámica en sí no absorbe color como la resina. Lo que cambia es el margen: si la unión con el diente queda expuesta o se " +
            "limpia mal, se oscurece. Un pulido en las revisiones periódicas la mantiene limpia.",
        },
        {
          q: "¿Se verán abultadas?",
          a:
            "Solo si se añade demasiado. Una carilla puede alargar o ensanchar un diente, pero no puede hacerlo más fino de lo que ya es, " +
            "así que un diente prominente necesita tallado y no más cerámica. Esto se decide en la fase de diseño, no después de cementar.",
        },
        {
          q: "¿Cuánto duran?",
          a:
            "Diez años y a menudo más en carillas bien hechas y bien cuidadas. Los fallos suelen ser fracturas en el borde incisal o " +
            "filtraciones en el margen, y ambos son más frecuentes en personas que aprietan los dientes sin férula nocturna.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe una fotografía del diente que quiere cambiar",
      text:
        "Una foto nítida de cerca y una vista frontal bastan para decir si una carilla, un composite o la ortodoncia es la vía más " +
        "sensata, y cuánto esmalte le costaría la preparación.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad solo puede valorarse tras examinar los dientes, las encías, la mordida y " +
      "los antecedentes médicos; los resultados varían entre pacientes.",
    seoTitle: "Carillas de porcelana E-max en Estambul",
    seoDesc:
      "Carillas E-max en Estambul: 0,3–0,8 mm de tallado, dos visitas, cuándo conviene la ortodoncia y qué límites tiene el esmalte.",
  },
  "/teeth-whitening": {
    title: "Blanqueamiento dental en Estambul",
    eyebrow: "Odontología",
    lead:
      "El blanqueamiento cambia el color de los dientes naturales con peróxido —en el gabinete, a una concentración controlada, o en " +
      "casa con una férula a medida durante dos a cuatro semanas—. No cambia el color de coronas, carillas ni empastes, y ese límite " +
      "condiciona todo el plan.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Valoración de blanqueamiento dental en Platinya Clinic",
    stats: [
      { value: "45–90 min", label: "Sesión en gabinete" },
      { value: "1–2 sesiones", label: "Normalmente suficiente" },
      { value: "6–24 meses", label: "Antes de un retoque" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "La mayoría de los dientes adultos sanos responden en algún grado. Lo que varía es el tipo de mancha, el tono de partida y si el " +
        "color está en el esmalte o más profundo, dentro del diente.",
      items: [
        "Dientes naturales amarillos o grisáceos, normalmente por la edad o por té, café y tabaco",
        "Manchas que vuelven pronto después de una limpieza y un pulido profesionales",
        "Antes de carillas o coronas, para poder igualar la cerámica a un tono más claro y no al contrario",
        "Encías sanas y sin caries sin tratar: blanquear sobre un empaste filtrado o dentina expuesta produce dolor, no blancura",
      ],
      note:
        "Las coronas, carillas, empastes de composite y reconstrucciones no se aclaran. Blanquear una boca con restauraciones visibles " +
        "puede dejarlas más oscuras por contraste; o se sustituyen después, o se ajusta el tono a ellas.",
    },
    techniques: {
      heading: "En el gabinete, en casa o ambos",
      intro:
        "Los dos enfoques usan la misma química a concentraciones distintas. Cuál le conviene depende del tiempo disponible y de cómo " +
        "reaccionen sus dientes.",
      items: [
        {
          name: "Blanqueamiento en gabinete",
          text:
            "Un gel de peróxido de hidrógeno de alta concentración —normalmente del 25 al 40 %— aplicado con las encías aisladas y los " +
            "labios retraídos, en tres o cuatro ciclos de 10–15 minutos. Una visita, resultado más rápido; la sensibilidad suele alcanzar " +
            "su punto máximo al día siguiente.",
        },
        {
          name: "Férulas a medida en casa",
          text:
            "Se toman impresiones y se fabrican férulas ajustadas. Peróxido de carbamida al 10–16 % durante 30–60 minutos al día, o un gel " +
            "más suave por la noche, durante dos a cuatro semanas. Más lento y más suave, y a menudo más uniforme porque el gel alcanza " +
            "toda la arcada.",
        },
        {
          name: "Combinado",
          text:
            "Una sesión en gabinete para elevar el tono de base y después férulas en casa una o dos semanas para igualar el cuello del " +
            "diente, que suele ser la parte más oscura. Es el plan con el que acaban la mayoría de los pacientes.",
        },
      ],
    },
    journey: {
      heading: "De la consulta al tono final",
      steps: [
        {
          name: "Valoración y limpieza",
          text:
            "Se revisan caries, salud de las encías y restauraciones existentes. Primero el detartraje y el pulido: el blanqueamiento no " +
            "elimina el sarro, y una superficie limpia es el único punto de partida justo.",
        },
        {
          name: "Registro del color",
          text:
            "Fotografías y una lectura del color con luz estandarizada, tomadas antes de empezar. Sin esto, el cambio solo se puede " +
            "discutir, no medir.",
        },
        {
          name: "Blanqueamiento",
          text:
            "Una sola sesión en gabinete con aislamiento de las encías, o férulas e instrucciones escritas. Con férulas, los dos o tres " +
            "primeros días muestran si sus dientes son sensibles y la fuerza del gel se ajusta en consecuencia.",
        },
        {
          name: "Revisión a las dos semanas",
          text:
            "El color se estabiliza en unas dos semanas, mientras los dientes se rehidratan, así que el tono final se valora entonces y " +
            "no el día del tratamiento, cuando los dientes siempre parecen más blancos de lo natural.",
        },
        {
          name: "Mantenimiento",
          text:
            "Férulas de recarga cada seis a veinticuatro meses y unas primeras 48 horas sensatas: nada de café, vino tinto, cúrcuma ni " +
            "tabaco mientras el esmalte está más receptivo.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "El blanqueamiento tiene poco riesgo cuando se valora y se supervisa. La mayoría de los problemas vienen de hacerlo sin lo uno " +
        "ni lo otro.",
      items: [
        "Sensibilidad durante el tratamiento y uno o dos días después, a veces más; la retracción gingival existente la agrava",
        "Irritación o palidez de las encías donde el gel toca tejido blando: normalmente pasajera y se resuelve en días",
        "Poco o ningún cambio en manchas internas, en un diente endodonciado o en la fluorosis",
        "Las restauraciones mantienen su tono original y pueden verse más oscuras cuando los dientes de alrededor se aclaran",
        "Recaída: el resultado no es permanente, y la rapidez con que se pierde depende de la dieta y del tabaco",
      ],
      note:
        "Más gel no significa más blanco. Las sesiones repetidas de alta potencia sin revisión aumentan la sensibilidad y dan al esmalte " +
        "un aspecto yesoso y fino; las instrucciones de las férulas existen por algo.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Daña el esmalte?",
          a:
            "A concentraciones supervisadas, no: el peróxido elimina pigmento sin disolver estructura dental medible, y el mineral se " +
            "recupera en los días siguientes. El abuso —sesiones frecuentes de alta potencia sin valoración— es de donde vienen el daño y " +
            "la sensibilidad duradera.",
        },
        {
          q: "¿Cuánto se aclararán mis dientes?",
          a:
            "No se puede prometer de antemano. Las manchas amarillas y las de la edad responden mejor; las grises, las relacionadas con " +
            "tetraciclina y las de fluorosis responden mal y a veces nada. La mayoría gana varios tonos, y la respuesta honesta es un " +
            "intervalo, no una cifra.",
        },
        {
          q: "¿Duele?",
          a:
            "El gel en sí no duele. La sensibilidad al frío y, en ocasiones, un dolor agudo en el cuello del diente son habituales durante " +
            "uno o dos días; se reducen con una concentración menor, menos tiempo de uso o un gel desensibilizante antes de la sesión.",
        },
        {
          q: "¿Cuánto dura?",
          a:
            "De seis meses a dos años en la mayoría de las personas. El café, el té, el vino tinto, la cúrcuma y el tabaco lo devuelven " +
            "antes; una higiene cada seis meses y alguna férula de recarga lo mantienen estable.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe una fotografía con luz natural",
      text:
        "Una foto tomada junto a una ventana, sin filtro, suele bastar para decir qué tipo de mancha tiene, si el blanqueamiento " +
        "probablemente funcione y si hay que planificar restauraciones alrededor.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad solo puede valorarse tras examinar dientes y encías y revisar los " +
      "antecedentes médicos; los resultados varían entre pacientes.",
    seoTitle: "Blanqueamiento dental en Estambul",
    seoDesc:
      "Blanqueamiento dental en Estambul: en gabinete o con férulas, 45–90 minutos por sesión, cuánto dura y qué manchas no responden.",
  },
  "/dental-implants": {
    title: "Implantes dentales en Estambul",
    eyebrow: "Odontología",
    lead:
      "Un implante es un tornillo de titanio colocado en el hueso maxilar; en tres a seis meses el hueso crece sobre él y después se fija " +
      "encima una corona, un puente o una arcada completa. Sustituye la raíz, y por eso no depende de los dientes vecinos.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de implantes dentales en Platinya Clinic",
    stats: [
      { value: "3–6 meses", label: "Curación del hueso antes de la corona" },
      { value: "45–90 min", label: "Colocación de un implante" },
      { value: "10–15 años o más", label: "Función con cuidado" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "Los factores decisivos son cuánto hueso hay, su calidad, el estado de las encías y lo bien controlada que esté cualquier " +
        "enfermedad general.",
      items: [
        "Un diente perdido, con vecinos sanos que no deberían tallarse para un puente",
        "Varios dientes perdidos en la misma arcada, o una arcada completa que se mueve o ya no se puede llevar",
        "Hueso suficiente, o hueso que puede reconstruirse con un injerto o una elevación de seno",
        "Diabetes controlada, no fumar o estar dispuesto a dejarlo, y ninguna radioterapia reciente ni tratamiento antirresortivo en el maxilar",
      ],
      note:
        "El tabaco es lo más útil que puede cambiar: aproximadamente duplica el riesgo de que un implante no se integre, y el efecto " +
        "depende de cuánto se fume. La diabetes no controlada afecta a la curación de forma parecida.",
    },
    techniques: {
      heading: "Un diente, varios dientes o una arcada completa",
      intro:
        "El número y la posición de los implantes los decide el hueso disponible y cómo lo carga la mordida, no cuántos dientes faltan.",
      items: [
        {
          name: "Implante único y corona",
          text:
            "La sustitución más conservadora para un diente perdido: no se talla nada de los dientes vecinos. La colocación lleva 45–90 " +
            "minutos con anestesia local, seguidos de tres a seis meses de curación antes de fabricar la corona.",
        },
        {
          name: "Puente sobre implantes",
          text:
            "Para varios dientes perdidos seguidos, dos o más implantes sostienen un puente, de modo que los dientes de los extremos " +
            "quedan intactos. Menos implantes que dientes sustituidos, por eso el tramo debe planificarse con cuidado y no alargarse para " +
            "ahorrar una fijación.",
        },
        {
          name: "All-on-4 y All-on-6",
          text:
            "Una arcada completa fija sobre cuatro o seis implantes, con los posteriores inclinados para aprovechar el hueso que queda y " +
            "a menudo evitar el injerto. Normalmente puede colocarse un puente provisional en pocos días; el definitivo espera a la " +
            "curación. No todo el mundo es candidato: el volumen óseo, la mordida y el soporte del labio deciden.",
        },
      ],
    },
    journey: {
      heading: "Del escaneado a la corona final",
      steps: [
        {
          name: "Valoración y planificación",
          text:
            "Un CBCT mide la altura y la anchura del hueso y muestra dónde están el nervio y el seno. Si el hueso es fino, se planifica " +
            "primero un injerto o una elevación de seno, lo que añade de cuatro a seis meses antes de colocar el implante.",
        },
        {
          name: "Colocación",
          text:
            "Con anestesia local, 45–90 minutos para un implante único. Se registra la estabilidad y se ajusta cualquier diente o prótesis " +
            "provisional para que no cargue el implante mientras cura.",
        },
        {
          name: "Osteointegración",
          text:
            "De tres a seis meses en los que el implante se deja tranquilo. La mandíbula inferior suele estar lista antes que el maxilar, " +
            "y las zonas injertadas tardan más. El tabaco y la diabetes mal controlada ralentizan esta fase.",
        },
        {
          name: "Pilar e impresión",
          text:
            "La encía se moldea alrededor de un pilar de cicatrización, después se toma un escaneado o una impresión y se fabrica la corona " +
            "o el puente: normalmente de una a tres semanas en el laboratorio.",
        },
        {
          name: "Colocación y mantenimiento",
          text:
            "La restauración se atornilla o se cementa y se comprueba la mordida. Higienes cada seis meses, con una radiografía al año y " +
            "después periódicas: la pérdida de hueso alrededor de un implante es silenciosa hasta que está avanzada.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "La cirugía de implantes es habitual, pero sigue siendo cirugía en el hueso y sus formas de fallo son específicas. Estas son las " +
        "que importan.",
      items: [
        "Falta de integración: el implante se afloja y hay que retirarlo, más probable en fumadores, hueso fino y diabetes no controlada",
        "Periimplantitis, pérdida de hueso alrededor de un implante en función, normalmente por placa; no se revierte sola",
        "Lesión nerviosa en la mandíbula que causa entumecimiento del labio, el mentón o la lengua: habitualmente temporal, en ocasiones permanente",
        "Perforación del seno o fracaso del injerto en el maxilar, que puede requerir un segundo procedimiento",
        "Fractura de componentes, un tornillo flojo o una corona astillada: reparable, pero no gratis",
      ],
      note:
        "Un implante no es un diente. No tiene ligamento, da menos información cuando se muerde con demasiada fuerza y, una vez perdido " +
        "el hueso que lo rodea, no hay forma de recuperarlo. La higiene y una férula nocturna importan más que la marca de la caja.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Duele la cirugía?",
          a:
            "Con anestesia local se siente presión y vibración, no dolor. Los dos primeros días hay inflamación y hematoma, y normalmente " +
            "basta con paracetamol o ibuprofeno; la mayoría vuelve al trabajo de oficina al día siguiente.",
        },
        {
          q: "¿Cuánto dura todo el proceso?",
          a:
            "De cuatro a ocho meses desde la colocación hasta la corona final en un implante único, porque el hueso marca el calendario. " +
            "Una arcada completa con All-on-4 puede tener un provisional fijo en pocos días, con el puente definitivo a los cuatro o seis meses.",
        },
        {
          q: "¿Puedo fumar?",
          a:
            "Lo ideal es no fumar nada durante el tratamiento. Dejarlo al menos una semana antes de la colocación y unas ocho semanas " +
            "después mejora de forma medible las probabilidades de integración; fumar después aumenta el riesgo a largo plazo de pérdida " +
            "de hueso alrededor del implante.",
        },
        {
          q: "¿Y si no tengo hueso suficiente?",
          a:
            "Se puede añadir hueso: injerto particulado con membrana para la anchura, injerto en bloque para defectos mayores o elevación " +
            "de seno en el sector posterior superior. Es un procedimiento aparte con su propia curación, y se planifica a partir del " +
            "escaneado en lugar de descubrirse durante la cirugía.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe su radiografía panorámica",
      text:
        "Una panorámica o un CBCT recientes, junto con una nota de qué dientes faltan, bastan para decir si probablemente hará falta " +
        "injerto, cuántos implantes aproximadamente y cuánto duraría el plan.",
      button: "Envíe su radiografía",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad solo puede valorarse tras examinar la boca, leer un CBCT y revisar los " +
      "antecedentes médicos; los resultados varían entre pacientes.",
    seoTitle: "Implantes dentales en Estambul: guía realista",
    seoDesc:
      "Implantes dentales en Estambul: 3–6 meses de integración, implante único, puente y All-on-4, injerto de hueso y riesgos que importan.",
  },
  "/zircon-teeth": {
    title: "Coronas de zirconio en Estambul",
    eyebrow: "Odontología",
    lead:
      "Una corona de zirconio se fresca a partir de un bloque de dióxido de zirconio y se sinteriza hasta endurecerse. Se usa donde una " +
      "corona metal-cerámica mostraría una línea gris en la encía, y es lo bastante resistente para los dientes posteriores y también " +
      "para los anteriores.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de coronas de zirconio en Platinya Clinic",
    stats: [
      { value: "2 visitas", label: "En la clínica" },
      { value: "5–7 días", label: "Tiempo de laboratorio" },
      { value: "10–15 años", label: "Vida útil típica" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "El zirconio se elige por su resistencia, por estética sin metal o por ambas cosas. No es automáticamente mejor que una corona " +
        "metal-cerámica bien hecha: es distinto.",
      items: [
        "Dientes muy empastados, endodonciados o agrietados que necesitan cobertura completa",
        "Dientes posteriores con carga fuerte, donde una corona fina totalmente cerámica se astillaría",
        "Dientes frontales visibles en los que la línea de la encía debe quedar libre de metal",
        "Sensibilidad conocida al metal, o una corona metal-cerámica existente con el margen oscuro a la vista",
      ],
      note:
        "Una corona necesita suficiente diente al que agarrarse. Si queda muy poco por encima de la encía, el diente puede necesitar una " +
        "reconstrucción del muñón o un alargamiento coronario previo; una corona no puede sustituir indefinidamente la estructura perdida.",
    },
    techniques: {
      heading: "Monolítica o estratificada",
      intro:
        "Las dos son zirconio. La diferencia es si toda la corona es del mismo material o si hay un núcleo resistente con porcelana " +
        "encima, y eso decide cómo se ve y cómo falla.",
      items: [
        {
          name: "Zirconio monolítico",
          text:
            "Toda la corona es zirconio fresado, sinterizado y pulido. La opción más resistente para molares y para quien aprieta los " +
            "dientes; es menos translúcida que la cerámica estratificada, así que en un diente frontal puede verse plana si no se cuidan " +
            "el tono y la textura de superficie.",
        },
        {
          name: "Zirconio estratificado",
          text:
            "Un núcleo de zirconio con porcelana construida encima. Mejor en el sector anterior, donde la luz tiene que atravesar el " +
            "diente, pero la porcelana de recubrimiento puede astillarse: es el fallo habitual de este diseño. Un compromiso razonable en " +
            "premolares y dientes visibles.",
        },
        {
          name: "Metal-cerámica, para comparar",
          text:
            "Un casquete metálico con porcelana fundida encima: predecible, más barato y muy probado. Su debilidad es estética: un núcleo " +
            "opaco y, con los años, una línea gris donde la encía se retrae y deja ver el margen metálico.",
        },
      ],
    },
    journey: {
      heading: "De la preparación a la corona cementada",
      steps: [
        {
          name: "Valoración",
          text:
            "Primero se establece por qué el diente necesita una corona: una grieta, un empaste antiguo grande, un tratamiento de conducto. " +
            "Cuánto diente queda por encima de la encía decide si una corona es suficiente.",
        },
        {
          name: "Preparación",
          text:
            "Bajo anestesia local se reduce el diente 1–1,5 mm, más donde se va a estratificar porcelana. Se toma un escaneado o una " +
            "impresión y se coloca una corona provisional para proteger el diente y evitar que se mueva.",
        },
        {
          name: "Diseño y fresado",
          text:
            "La corona se diseña en CAD, se fresca del bloque de zirconio y se sinteriza a alta temperatura; después se tiñe y se glasea. " +
            "Aquí se fija el color: un tono tomado con la luz del gabinete se verá mal a la luz del día.",
        },
        {
          name: "Prueba y cementado",
          text:
            "Se comprueban el ajuste, los puntos de contacto y el color antes de cementar. Después la corona se asienta con cemento de " +
            "resina o de ionómero de vidrio y se afina la mordida hasta que los contactos se sienten parejos.",
        },
        {
          name: "Revisión",
          text:
            "Una revisión a las dos semanas, sobre todo de la mordida. Si hay signos de bruxismo, se hace una férula nocturna: una corona " +
            "protege al diente, pero no se protege a sí misma de una mordida fuerte.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "El zirconio es resistente, pero una corona es una restauración sobre un diente que ya ha fallado una vez. Estos son los " +
        "problemas realistas.",
      items: [
        "La corona puede desprenderse si el muñón es corto o el cemento se compromete; normalmente se puede recementar",
        "Fractura de la porcelana estratificada, sobre todo en una corona fina o sometida a una mordida fuerte",
        "El zirconio es más duro que el esmalte y puede desgastar el diente antagonista con los años, especialmente si la superficie queda sin pulir",
        "Una corona monolítica puede verse opaca o demasiado uniforme en el sector anterior, sobre todo con luz intensa",
        "Inflamación pulpar o necesidad de endodoncia tras preparar un diente que ya estaba comprometido",
      ],
      note:
        "Una corona vale lo que vale lo que hay debajo. Si el diente está agrietado por debajo de la encía o le queda muy poca " +
        "estructura, la opción honesta puede ser una extracción y un implante en lugar de una tercera corona sobre el mismo diente.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Es mejor que la metal-cerámica?",
          a:
            "En la línea de la encía, sí: no hay collar metálico, así que no aparece una línea gris cuando la encía se retrae. En color y " +
            "translucidez, una cerámica bien estratificada todavía puede verse mejor. El zirconio monolítico gana en resistencia, no en realismo.",
        },
        {
          q: "¿Se rompe el zirconio?",
          a:
            "Una corona monolítica rara vez se rompe como pieza: es la corona cerámica más resistente de uso habitual. El fallo frecuente " +
            "es la fractura de la capa de porcelana en una corona estratificada, reparable pero no invisible.",
        },
        {
          q: "¿Sirve para los dientes posteriores?",
          a:
            "Sí: es su principal ventaja. Los molares soportan la carga más fuerte y el zirconio la resiste mejor que la vitrocerámica. " +
            "Para un segundo molar, una corona monolítica suele ser la elección sensata.",
        },
        {
          q: "¿Cuánto durará?",
          a:
            "De diez a quince años es una expectativa razonable, a veces más. El límite rara vez es el zirconio: es el diente de debajo, " +
            "el margen gingival y si la mordida está controlada.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe una fotografía del diente",
      text:
        "Una foto de cerca y una radiografía del diente bastan para decir si una corona de zirconio, un onlay o una extracción es la " +
        "reparación más sensata, y por qué.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad solo puede valorarse tras examinar el diente, las encías y la mordida, y " +
      "revisar los antecedentes médicos; los resultados varían entre pacientes.",
    seoTitle: "Coronas de zirconio en Estambul",
    seoDesc:
      "Coronas de zirconio en Estambul: monolíticas o estratificadas, 2 visitas, 5–7 días de laboratorio, límites estéticos y desgaste del antagonista.",
  },
  "/periodontics": {
    title: "Tratamiento de encías (periodoncia) en Estambul",
    eyebrow: "Odontología",
    lead:
      "La enfermedad de las encías empieza como una inflamación que sangra al cepillarse y puede acabar en dientes que se aflojan y se " +
      "pierden. El tratamiento retira el depósito bacteriano de la superficie de la raíz y después evita que vuelva. La enfermedad se " +
      "controla, no se cura.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Exploración periodontal en Platinya Clinic",
    stats: [
      { value: "1–4 visitas", label: "Detartraje y alisado radicular" },
      { value: "6–8 semanas", label: "Hasta la reevaluación" },
      { value: "3–6 meses", label: "Intervalo de mantenimiento" },
    ],
    candidate: {
      heading: "Quién necesita tratamiento",
      intro:
        "Casi cualquier persona a la que le sangran las encías es candidata a un tratamiento inicial. Lo que cambia el plan es la " +
        "profundidad de las bolsas y cuánto hueso se ha perdido ya.",
      items: [
        "Sangrado al cepillarse o al usar hilo dental, incluso sin dolor",
        "Mal aliento persistente o sabor metálico, con sarro visible en la línea de la encía",
        "Encías retraídas, o dientes que parecen más largos que antes",
        "Bolsas de más de 4 mm al sondaje, o dientes que han empezado a moverse",
      ],
      note:
        "El tabaco esconde los signos: estrecha los vasos sanguíneos, así que las encías sangran menos mientras la enfermedad sigue " +
        "avanzando. La diabetes y el embarazo también modifican la respuesta, por eso se preguntan ambos.",
    },
    techniques: {
      heading: "Limpieza, cirugía o injerto",
      intro:
        "Casi todos los casos empiezan con el mismo paso: retirar lo que hay sobre la raíz. El resto lo decide lo que hace el tejido después.",
      items: [
        {
          name: "Detartraje y alisado radicular",
          text:
            "Limpieza profunda bajo anestesia local, normalmente un cuadrante por vez, retirando sarro y depósitos bacterianos por debajo " +
            "de la línea de la encía. Es el tratamiento de la mayoría de los casos; la cirugía solo se plantea si las bolsas siguen " +
            "profundas después.",
        },
        {
          name: "Curetaje y cirugía de colgajo",
          text:
            "Cuando las bolsas siguen profundas tras la terapia inicial, se levanta la encía, se limpian las superficies radiculares a " +
            "la vista y se reposiciona el tejido. Se reserva para zonas que no respondieron; no se usa como primer paso.",
        },
        {
          name: "Injerto de encía para la recesión",
          text:
            "Cuando una raíz queda expuesta, sensible o la recesión avanza, se toma tejido del paladar y se injerta sobre la raíz. Cubre " +
            "la raíz y engrosa la encía; no recupera el hueso que ya se ha perdido.",
        },
      ],
    },
    journey: {
      heading: "Del sondaje al mantenimiento",
      steps: [
        {
          name: "Sondaje periodontal",
          text:
            "Profundidad de sondaje alrededor de cada diente, índices de sangrado, movilidad y radiografías para el nivel óseo. Este " +
            "registro es lo que hace medible el cambio después; sin él, el tratamiento se juzga por impresión.",
        },
        {
          name: "Terapia inicial",
          text:
            "Detartraje y alisado radicular en una a cuatro citas, separadas una o dos semanas, con anestesia local donde las bolsas son " +
            "profundas. La técnica de cepillado se corrige al mismo tiempo, porque la limpieza solo compra un punto de partida.",
        },
        {
          name: "Reevaluación a las seis u ocho semanas",
          text:
            "Se vuelven a medir las bolsas. Las poco profundas suelen mejorar uno o dos milímetros; las profundas a menudo no, y esas son " +
            "las zonas que necesitan una decisión.",
        },
        {
          name: "Cirugía, si hace falta",
          text:
            "Se planifica solo para las zonas que no respondieron y solo después de la reevaluación. Es un procedimiento más pequeño de lo " +
            "que suena, pero sigue siendo cirugía, con su propio tiempo de curación.",
        },
        {
          name: "Mantenimiento",
          text:
            "Visitas cada tres a seis meses, repitiendo el sondaje. Esta es la parte que decide si se conservan los dientes: la enfermedad " +
            "vuelve allí donde se deja que el biofilm se reconstruya sin molestias.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "La mayor parte de lo que los pacientes llaman complicación es el tejido curándose. Los riesgos reales son otros, y conviene " +
        "decirlos con claridad.",
      items: [
        "Las encías se retraen al bajar la inflamación, así que los dientes parecen más largos y las raíces pueden quedar expuestas: es curación, no daño",
        "Sensibilidad al frío en las raíces expuestas, a veces durante semanas",
        "Sangrado y molestias durante unos días después de la limpieza profunda, y sensibilidad al comer",
        "La enfermedad es crónica: sin mantenimiento vuelve, y el hueso ya perdido no se recupera",
        "En casos avanzados todavía pueden perderse dientes; el objetivo es conservar el resto, no prometer todos",
      ],
      note:
        "El tabaco es el factor más importante que puede cambiar: amortigua la respuesta al tratamiento y esconde el sangrado que le " +
        "habría traído antes. Dejarlo cambia el pronóstico más que cualquier enjuague bucal.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿La limpieza profunda me aflojará los dientes?",
          a:
            "No. Los dientes pueden notarse flojos unos días porque el sarro que los sujetaba ha desaparecido y la inflamación ha bajado; " +
            "se afirman a medida que el tejido cura. Cuando la pérdida de hueso es avanzada, el diente ya era móvil antes del tratamiento.",
        },
        {
          q: "¿Es una cura?",
          a:
            "No: es control. La periodontitis no desaparece, pero puede mantenerse quieta. El mantenimiento cada tres a seis meses es lo " +
            "que la mantiene quieta, y saltárselo es la causa más frecuente de perder dientes más adelante.",
        },
        {
          q: "¿Duele?",
          a:
            "La limpieza se hace con anestesia local, así que no duele durante. Después las encías están sensibles dos o tres días y las " +
            "raíces pueden molestar con el frío unas semanas; ambas cosas se resuelven con un analgésico habitual y una pasta desensibilizante.",
        },
        {
          q: "¿Cada cuánto tengo que volver?",
          a:
            "Cada tres meses si las bolsas eran profundas, fuma o su diabetes no está bien controlada; cada seis meses en los casos más " +
            "leves. El intervalo se fija en la reevaluación, a partir de las mediciones y no de una regla.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe una fotografía de sus encías",
      text:
        "Una foto de la línea de la encía y una radiografía reciente bastan para una primera opinión sobre si esto es gingivitis, " +
        "periodontitis o algo que debe verse en el sillón.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La enfermedad de las encías solo se diagnostica con sondaje e imagen; la idoneidad para " +
      "el tratamiento se valora tras la exploración, y los resultados varían entre pacientes.",
    seoTitle: "Tratamiento de encías en Estambul",
    seoDesc:
      "Tratamiento periodontal en Estambul: detartraje y alisado radicular, reevaluación a 6–8 semanas, mantenimiento y qué es curación y qué no.",
  },
  "/facelift-surgery": {
    title: "Lifting facial en Estambul (deep-plane)",
    eyebrow: "Cirugía plástica facial",
    lead:
      "Un lifting facial eleva los tejidos blandos de la cara y el cuello que han descendido con la edad y retira la piel que ya no se " +
      "ajusta a ellos. Cambia la línea de la mandíbula y el cuello, no la superficie de la piel.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de lifting facial en Platinya Clinic",
    stats: [
      { value: "2–4 h", label: "Duración de la cirugía" },
      { value: "1–2 noches", label: "Estancia hospitalaria" },
      { value: "2–3 semanas", label: "Vida social en pausa" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "La operación trata la flaccidez, no las arrugas. Conviene a alguien con peso estable, piel que aún tiene cierta elasticidad y " +
        "que quiere parecerse a sí mismo, descansado.",
      items: [
        "Flaccidez a lo largo de la mandíbula y un pliegue que va de la nariz a la boca",
        "Tercio medio facial descendido, con aplanamiento sobre los pómulos",
        "Piel flácida y bandas verticales en el cuello",
        "Salud general suficiente para una anestesia general y nada de tabaco durante un mes",
      ],
      note:
        "Un lifting no detiene el envejecimiento: la cara sigue cambiando al mismo ritmo después. Las líneas finas, la pigmentación y el " +
        "daño solar se tratan por otras vías —láser, peelings o toxina botulínica— y a menudo se combinan con la cirugía en lugar de " +
        "sustituirla.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "El plan se construye a partir del tejido, el hueso y el cuello, examinados en persona, con la cara en reposo y en movimiento. " +
        "Una fotografía no muestra la flaccidez.",
      items: [
        {
          name: "Lifting deep-plane",
          text:
            "Las capas profundas de la cara se liberan y se elevan como una unidad, de modo que la tracción la soporta tejido fuerte y no " +
            "la piel. Da la línea de mandíbula más natural y el resultado más duradero, y es la técnica que se usa cuando el tercio medio " +
            "ha descendido.",
        },
        {
          name: "Lifting SMAS con cicatriz más corta",
          text:
            "La capa muscular se tensa mediante una incisión más corta, sin la liberación profunda. Menos tiempo quirúrgico y menos " +
            "inflamación, y una buena opción para flaccidez incipiente, pero aborda más el tercio inferior que el medio.",
        },
        {
          name: "Lifting de cuello (platismoplastia)",
          text:
            "Los músculos del cuello se aproximan en la línea media y se retira la piel sobrante, a través de una pequeña incisión bajo el " +
            "mentón y de la incisión detrás de la oreja. A menudo es la parte de la operación que más notan los pacientes.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y planificación",
          text:
            "Se examina la cara sentado y tumbado, se valoran el cuello y la línea del cabello y se toman fotografías. Antes de fijar una " +
            "fecha se piden analíticas y, cuando procede, un informe de cardiología. La cicatriz y su posición se acuerdan por adelantado.",
        },
        {
          name: "Preparación",
          text:
            "El tabaco se deja al menos cuatro semanas antes de la cirugía: es el factor más importante en la curación de la herida en la " +
            "cara. Los anticoagulantes y algunos suplementos se suspenden unos diez días antes, y se ayuna de seis a ocho horas. Organice " +
            "ayuda en casa para la primera semana.",
        },
        {
          name: "La operación",
          text:
            "Bajo anestesia general, normalmente de dos a cuatro horas. La incisión va por delante y por detrás de la oreja y entra en la " +
            "línea del cabello en la sien, de modo que queda oculta por la oreja y por el pelo. A menudo se deja un drenaje a cada lado " +
            "uno o dos días, y la mayoría de los pacientes se queda una o dos noches.",
        },
        {
          name: "Las dos primeras semanas",
          text:
            "La inflamación y los hematomas alcanzan su punto máximo entre el segundo y el cuarto día y después bajan. Se mantiene la " +
            "cabeza elevada, se aplican compresas frías los primeros días y el drenaje se retira en la clínica. La mayoría se siente capaz " +
            "de salir —con gafas de sol— a los siete o diez días.",
        },
        {
          name: "Semanas tres a seis, y la cicatriz",
          text:
            "El maquillaje y el tinte vuelven a las dos semanas, el ejercicio a las cuatro o seis. La cicatriz está firme y rosada dos o " +
            "tres meses y después se difumina a lo largo de doce a dieciocho meses; se sitúa detrás de la oreja y dentro de la línea del " +
            "cabello siempre que es posible.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "Es cirugía real cerca del nervio facial, y los riesgos deben escucharse antes de la decisión, no después.",
      items: [
        "Hematoma: una acumulación de sangre bajo la piel; es la complicación más frecuente y puede requerir drenaje",
        "Debilidad temporal del nervio facial, que suele recuperarse en semanas o meses; la lesión permanente es rara",
        "Problemas de curación o pérdida de piel, mucho más probables en fumadores y en personas con mala circulación",
        "Una cicatriz ancha o engrosada, pequeñas zonas de alopecia a lo largo de la incisión y entumecimiento delante de la oreja que suele mejorar con los meses",
        "Asimetría, o un resultado que se juzga demasiado tenso o demasiado sutil y requiere una revisión",
      ],
      note:
        "Cuéntenos si fuma, tiene diabetes, hipertensión, toma anticoagulantes o se ha sometido antes a cirugía facial o a rellenos. Los " +
        "rellenos y los hilos cambian la anatomía y el plan, y ocultarlos es la vía más rápida a una operación complicada.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Pareceré otra persona?",
          a:
            "El objetivo es que parezca usted mismo, descansado. Un lifting eleva tejido que se ha caído; no cambia la forma de la nariz, " +
            "los ojos ni el carácter del rostro. Un aspecto evidentemente operado suele venir de tensar demasiado la piel, y por eso aquí " +
            "la tensión la soportan las capas profundas.",
        },
        {
          q: "¿Cuánto dura el resultado?",
          a:
            "La mayoría de los pacientes ve el cambio durante siete a diez años, y en el cuello a menudo más. No es permanente, porque la " +
            "cara sigue envejeciendo a su ritmo. Mantener el peso estable y proteger la piel del sol ayudan.",
        },
        {
          q: "¿Cuándo puedo dejarme ver en público?",
          a:
            "La mayoría está cómoda a los diez o catorce días, con una inflamación residual fácil de cubrir. La cara sigue asentándose " +
            "durante tres a seis meses, y la forma final de la mandíbula se valora hacia entonces.",
        },
        {
          q: "¿Se puede combinar con cirugía de párpados?",
          a:
            "A menudo sí: la cirugía de párpado superior o inferior, un lifting de cejas o un injerto de grasa en los pómulos suelen " +
            "hacerse en la misma sesión. Si es seguro depende del tiempo quirúrgico total y de su salud, y se decide en la consulta.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Tres fotografías —de frente, a tres cuartos y de perfil— bastan para que un cirujano diga si el lifting es la operación adecuada " +
        "y qué técnica le convendría. Un coordinador le responde con un plan, una fecha y un presupuesto por escrito.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Lifting facial deep-plane en Estambul",
    seoDesc:
      "Lifting facial deep-plane en Estambul: 2–4 h de cirugía, 1–2 noches, cicatriz oculta, recuperación semana a semana y riesgos reales.",
  },
  "/chin-implants": {
    title: "Aumento de mentón en Estambul (implante y genioplastia)",
    eyebrow: "Cirugía plástica facial",
    lead:
      "Un mentón débil o retraído cambia el equilibrio de toda la cara: la nariz parece más grande, la mandíbula más blanda y el cuello " +
      "más corto. El aumento de mentón lo proyecta hacia delante con un implante, moviendo el hueso o, de forma temporal, con relleno.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de aumento de mentón en Platinya Clinic",
    stats: [
      { value: "1–2 h", label: "Duración de la cirugía" },
      { value: "1 noche", label: "Estancia hospitalaria" },
      { value: "1–2 semanas", label: "Inflamación visible" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "La valoración trata de proporción y de mordida, no solo del mentón. Un mentón se juzga frente a la nariz, los labios y el " +
        "ángulo de la mandíbula.",
      items: [
        "Un mentón que queda por detrás de la línea del labio inferior visto de perfil",
        "Una línea mandibular que se ve blanda o corta de frente",
        "Asimetría tras un traumatismo o tras cirugía maxilar previa",
        "Un mentón que se valora junto a una rinoplastia para mantener el perfil equilibrado",
      ],
      note:
        "Si los dientes no ocluyen correctamente, el problema de fondo es la mordida y un implante no lo corrige. Eso necesita una " +
        "valoración odontológica y maxilofacial y, a veces, cirugía ortognática —mover la mandíbula— en lugar de un implante delante de ella.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "Bajo el mismo nombre se venden tres operaciones distintas. Se diferencian en qué mueven, cuán reversibles son y cuánto duran.",
      items: [
        {
          name: "Implante de mentón de silicona",
          text:
            "Un implante blando y sólido colocado sobre el hueso a través de una pequeña incisión dentro del labio inferior o, en ocasiones, " +
            "bajo el mentón. Añade proyección y anchura, dura alrededor de una hora y puede retirarse o cambiarse después. El implante se " +
            "apoya en el hueso y no se fusiona con él.",
        },
        {
          name: "Genioplastia de deslizamiento",
          text:
            "Se corta el hueso del mentón, se desplaza hacia delante —o hacia abajo, o hacia un lado— y se fija con pequeñas placas y " +
            "tornillos. Usa su propio hueso, así que no hay implante que se desplace, y puede corregir longitud vertical y asimetría que " +
            "un implante no corrige. Es una operación mayor, con más inflamación.",
        },
        {
          name: "Relleno de ácido hialurónico",
          text:
            "Una opción temporal, realizada en la clínica en menos de una hora y sin tiempo de baja. Muestra cómo quedaría la proyección " +
            "antes de decidirse por la cirugía y dura aproximadamente de nueve a dieciocho meses. No puede corregir un hueso corto ni asimétrico.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y planificación",
          text:
            "Fotografías de perfil, medición de la cara y exploración de la mordida. Cuando se va a mover hueso o la mordida está en duda, " +
            "se solicita una radiografía cefalométrica o un TAC. El tamaño y la forma del implante se eligen sobre el modelo de su cara.",
        },
        {
          name: "Preparación",
          text:
            "Analíticas y revisión dental si la incisión va dentro de la boca: dientes y encías deben estar sanos antes de una operación " +
            "intraoral. El tabaco se deja cuatro semanas antes. Los anticoagulantes se suspenden unos diez días antes y se ayuna de seis a " +
            "ocho horas.",
        },
        {
          name: "La operación",
          text:
            "Bajo anestesia general o sedación profunda, de una a dos horas. El implante se introduce por una incisión dentro del labio " +
            "inferior, así que no queda cicatriz en la piel; la incisión se cierra con puntos reabsorbibles. La mayoría de los pacientes se " +
            "queda una noche.",
        },
        {
          name: "La primera semana",
          text:
            "La inflamación alcanza su máximo a las cuarenta y ocho o setenta y dos horas, y el labio inferior y el mentón se sienten " +
            "rígidos y dormidos. Comida blanda, no masticar con los dientes frontales, enjuague después de cada comida y dormir con la " +
            "cabeza elevada. Los hematomas pueden bajar por el cuello y se resuelven en una semana.",
        },
        {
          name: "Semanas dos a seis",
          text:
            "La mayor parte de la inflamación desaparece a las dos o tres semanas y el resto se asienta a lo largo de tres meses. El " +
            "entumecimiento del labio inferior mejora poco a poco, a veces durante varios meses. El deporte de contacto y los tratamientos " +
            "dentales esperan unas seis semanas.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "El mentón está cerca del nervio mentoniano y la incisión queda junto a la boca, y ambas cosas definen la lista de riesgos.",
      items: [
        "Infección, más probable con una incisión dentro de la boca; un implante infectado normalmente hay que retirarlo",
        "Sensibilidad alterada en el labio inferior y el mentón por estiramiento o hematoma del nervio mentoniano: habitualmente temporal, en ocasiones no",
        "Movimiento o desplazamiento del implante, o un borde visible a lo largo del hueso, o asimetría y una proyección juzgada excesiva o insuficiente que exige revisión",
        "Reabsorción ósea bajo un implante de larga evolución, que puede hacer que se asiente peor con los años",
        "En la genioplastia: sangrado, lesión de las raíces dentales y problemas con las placas de fijación",
      ],
      note:
        "Cuéntenos si se ha operado antes del mentón o la mandíbula, si lleva ortodoncia, si tiene enfermedad periodontal o alguna " +
        "enfermedad autoinmune. Diga también si aprieta los dientes o tiene dolor de ATM: la articulación recibe la carga de otra forma " +
        "cuando el mentón se mueve.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Se notará que me lo he hecho?",
          a:
            "El objetivo es la proporción, no el tamaño. Un implante elegido para su cara se lee como una mandíbula más definida y no como " +
            "un mentón. La incisión va dentro del labio, así que no hay cicatriz en la cara; la contrapartida es un periodo corto de " +
            "inflamación y el labio inferior dormido.",
        },
        {
          q: "¿Implante o genioplastia? ¿Cuál es mejor?",
          a:
            "El implante es más rápido, reversible y bueno para añadir proyección hacia delante. La genioplastia mueve su propio hueso, así " +
            "que puede alargar el mentón, corregir asimetría y evitar un cuerpo extraño, a cambio de una operación mayor. La respuesta " +
            "correcta depende de qué es lo que realmente está corto, y eso se mide, no se adivina.",
        },
        {
          q: "¿Cuánto dura un implante?",
          a:
            "No se espera que un implante de silicona necesite recambio, y muchos permanecen décadas. No es permanente en el sentido de no " +
            "necesitar nunca atención: puede retirarse o cambiarse, y conviene revisarlo si duele, se mueve o si el mentón cambia de forma.",
        },
        {
          q: "¿Se puede hacer junto con una operación de nariz?",
          a:
            "Sí, y a menudo es el mejor plan: el perfil es una relación entre la nariz y el mentón, y cambiar solo uno puede hacer que el " +
            "otro parezca equivocado. La operación combinada es más larga, así que se planifica como un solo procedimiento con una sola " +
            "recuperación.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Un perfil y una vista frontal bastan para decir si el problema es el mentón y si el implante, el hueso o el relleno son la vía " +
        "sensata. Un coordinador le responde con un plan y un presupuesto por escrito.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Aumento de mentón en Estambul: implante o hueso",
    seoDesc:
      "Aumento de mentón en Estambul: implante de silicona, genioplastia o relleno, 1–2 h de cirugía, recuperación y riesgos del nervio mentoniano.",
  },
  "/blepharoplasty": {
    title: "Cirugía de párpados (blefaroplastia) en Estambul",
    eyebrow: "Cirugía plástica facial",
    lead:
      "La blefaroplastia retira la piel sobrante de los párpados superiores y la grasa que hace que los inferiores parezcan cansados e " +
      "hinchados. Es una de las operaciones más pequeñas del rostro y una de las más fáciles de hacer mal.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de cirugía de párpados en Platinya Clinic",
    stats: [
      { value: "1–2 h", label: "Duración de la cirugía" },
      { value: "5–7 días", label: "Retirada de puntos" },
      { value: "7–10 días", label: "Vuelta a la vida social" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "La operación trata piel y grasa, no el color ni la calidad de la piel. Las ojeras por pigmento o el hundimiento bajo el ojo son " +
        "otro problema con otra respuesta.",
      items: [
        "Párpados superiores caídos, o piel que descansa sobre las pestañas y estrecha el campo visual",
        "Piel del párpado superior arrugada, pesada o asimétrica",
        "Párpados inferiores hinchados por grasa que se ha desplazado hacia delante, no por líquido",
        "Piel flácida en el párpado inferior, con o sin bolsa de grasa visible",
      ],
      note:
        "El ojo seco, la orbitopatía tiroidea, el glaucoma y la hipertensión cambian el plan, y algunos son motivo para esperar. Una " +
        "alteración tiroidea debe estar estable antes de la cirugía: operar una orbitopatía tiroidea activa puede empeorarla.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "El párpado superior y el inferior son decisiones separadas. Muchos pacientes necesitan solo uno, y hacer más de lo necesario es " +
        "cómo acaban los párpados con aspecto hundido.",
      items: [
        {
          name: "Blefaroplastia de párpado superior",
          text:
            "Una incisión fina en el pliegue natural, retirada de la piel sobrante y una tira de músculo con ella; la grasa se recorta solo " +
            "donde sobresale. La cicatriz queda en el pliegue y se difumina en tres a seis meses. Esta es la parte que amplía el campo visual.",
        },
        {
          name: "Párpado inferior, transconjuntival",
          text:
            "La grasa se retira por dentro del párpado, así que no hay incisión en la piel ni cicatriz externa. Adecuada para bolsas de " +
            "grasa con buen tono cutáneo; no retira piel sobrante. A menudo se combina con reposición de grasa para rellenar el surco lagrimal.",
        },
        {
          name: "Párpado inferior, externo con cantopexia",
          text:
            "Una incisión justo bajo las pestañas retira piel y grasa, y la esquina del párpado se sostiene para que no caiga. Se usa cuando " +
            "hay exceso real de piel, y es la técnica en la que el riesgo de párpado descendido debe manejarse con cuidado.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y planificación",
          text:
            "Se examinan los párpados con los ojos abiertos y cerrados, se mide la piel que se va a conservar y se valora el ojo seco. Se " +
            "toman fotografías. Si hay dudas sobre la película lagrimal o la tiroides, se pide una opinión oftalmológica antes de fijar fecha.",
        },
        {
          name: "Preparación",
          text:
            "Los anticoagulantes, la aspirina y algunos suplementos se suspenden unos diez días antes, y el tabaco se deja cuatro semanas " +
            "antes. Se ayuna de seis a ocho horas. Organice que alguien le lleve a casa: los ojos están hinchados y no se puede conducir.",
        },
        {
          name: "La operación",
          text:
            "Anestesia local con sedación ligera o anestesia general, de una a dos horas para los dos párpados. Con anestesia local está " +
            "despierto y puede hablar con el cirujano. Los puntos son finos y se retiran a los cinco o siete días; algunos son reabsorbibles.",
        },
        {
          name: "La primera semana",
          text:
            "Los hematomas y la inflamación son esperables y pueden ser considerables los primeros tres o cuatro días. Compresas frías, " +
            "cabeza elevada y colirios. La visión está borrosa por la pomada, no por la cirugía. Nada de lentes de contacto durante unas " +
            "dos semanas.",
        },
        {
          name: "Semanas dos a doce",
          text:
            "La mayoría está presentable a los siete o diez días, con maquillaje a partir del décimo. La inflamación residual se asienta en " +
            "cuatro a seis semanas y la cicatriz se suaviza en tres a seis meses. La protección solar en los párpados importa en ese tiempo.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "La cirugía de párpados tiene una lista corta de riesgos y uno de ellos es una urgencia. Todos merecen leerse antes de la operación.",
      items: [
        "Ectropión o retracción del párpado inferior: el párpado tira hacia abajo, el ojo no cierra del todo y se seca e irrita; puede necesitar revisión",
        "Asimetría entre los dos lados, o retirada de demasiada piel, que es difícil de corregir",
        "Un hematoma retrobulbar: raro, pero amenaza la visión y es motivo de volver de inmediato",
        "Visión doble por lesión de los músculos que mueven el ojo; normalmente temporal, rara vez permanente",
        "Cicatrices visibles o engrosadas, y pequeños quistes a lo largo de la línea de incisión",
      ],
      note:
        "Cuéntenos si tiene ojo seco, usa lentes de contacto, tiene enfermedad tiroidea, glaucoma, trastornos hemorrágicos o toma algún " +
        "anticoagulante, incluidos aspirina y aceite de pescado. Diga también si se ha hecho relleno o láser alrededor de los ojos: cambia " +
        "cómo se comporta el tejido.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cambiará la forma de mis ojos?",
          a:
            "La forma la definen los párpados y la ceja, y la operación se planifica alrededor de ellos. Retirar piel abre el ojo; no " +
            "debería hacerlo parecer más redondo ni asustado. Si la ceja está baja, elevar la ceja en lugar de quitar más piel suele ser " +
            "la respuesta correcta.",
        },
        {
          q: "¿Elimina las ojeras?",
          a:
            "En parte, y solo si la oscuridad es una sombra proyectada por una bolsa de grasa o por hundimiento. La oscuridad por pigmento " +
            "en la piel no cambia con la cirugía y se trata con cremas, peelings o láser. Es el malentendido más frecuente sobre esta operación.",
        },
        {
          q: "¿Cuánto dura el resultado?",
          a:
            "Normalmente de cinco a diez años, a veces más en los párpados superiores. La piel sigue envejeciendo y la ceja sigue bajando, " +
            "así que el resultado es una mejora y no un estado permanente. A veces se realiza un segundo procedimiento más pequeño años después.",
        },
        {
          q: "¿Superior o inferior? ¿Cuál necesito?",
          a:
            "Lo decide la exploración. La piel caída y un campo visual estrechado apuntan al párpado superior; la hinchazón y una sombra " +
            "bajo el ojo apuntan al inferior. A muchos pacientes se les ofrece solo uno, y combinarlos es una decisión sobre el tiempo de " +
            "curación tanto como sobre el resultado.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Una vista frontal con los ojos abiertos y otra con los ojos suavemente cerrados bastan para que un cirujano valore qué párpado " +
        "necesita trabajo y cuánta piel se puede conservar con seguridad. Un coordinador responde con un plan y un presupuesto por escrito.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Blefaroplastia en Estambul: párpados superior e inferior",
    seoDesc:
      "Blefaroplastia en Estambul: párpado superior, técnica transconjuntival y cantopexia, 1–2 h de cirugía, recuperación y riesgos reales.",
  },
  "/silicone": {
    title: "Aumento de pecho con implantes de silicona en Estambul",
    eyebrow: "Contorno corporal",
    lead:
      "El aumento de pecho añade volumen y mejora la simetría con un implante colocado detrás del tejido mamario o detrás del músculo. " +
      "Cambia el tamaño y la forma; no eleva un pecho que ya ha caído.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de aumento de pecho en Platinya Clinic",
    stats: [
      { value: "1–2 h", label: "Duración de la cirugía" },
      { value: "1 noche", label: "Estancia hospitalaria" },
      { value: "4–6 semanas", label: "Sin deporte" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "El punto de partida es el tejido que tiene —su grosor, su elasticidad y dónde está el pezón—, no la copa que desea. El implante " +
        "se elige para encajar en el tórax.",
      items: [
        "Pechos naturalmente pequeños, o un tamaño que nunca ha correspondido al resto de la figura",
        "Asimetría evidente entre los dos lados",
        "Volumen perdido tras la lactancia o tras perder peso, con la piel todavía firme",
        "Un pecho vacío en el polo superior, donde un implante moderado recupera el contorno",
      ],
      note:
        "Si el pezón queda por debajo del pliegue submamario, el problema es una ptosis y un implante por sí solo no la corrige: puede " +
        "empeorarla. Eso necesita una elevación, con o sin implante. Antes de la cirugía se organiza una mamografía o una ecografía según " +
        "su edad y sus antecedentes familiares, y cualquier bulto se estudia primero.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "Se toman tres decisiones a la vez: qué se pone, dónde se pone y cómo se introduce. Cada una cambia el aspecto, la recuperación y " +
        "el riesgo.",
      items: [
        {
          name: "El implante: redondo o anatómico",
          text:
            "Los implantes modernos se rellenan con un gel de silicona cohesivo que mantiene su forma. Los redondos dan plenitud en el polo " +
            "superior; los anatómicos (en lágrima) están moldeados para seguir la pendiente natural y suelen ser texturizados para que no " +
            "roten. La superficie y la forma se eligen con el cirujano, y ambas tienen contrapartidas.",
        },
        {
          name: "El plano: submuscular o dual",
          text:
            "La colocación detrás del pectoral disimula el borde del implante y conviene en tejido fino; el plano dual libera la parte " +
            "inferior del músculo para que el implante se asiente con naturalidad mientras la superior lo sigue cubriendo. Por delante del " +
            "músculo la recuperación es más rápida, pero se nota más en pacientes delgadas.",
        },
        {
          name: "La incisión",
          text:
            "En el pliegue submamario es la más frecuente y da el control más directo. Periareolar esconde la cicatriz en el cambio de " +
            "pigmento, pero conlleva un riesgo algo mayor de alterar la sensibilidad del pezón; por la axila no deja cicatriz en el pecho, " +
            "pero es menos precisa.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y planificación",
          text:
            "Mediciones del tórax, calidad de la piel y posición del pezón, y una conversación sobre el tamaño que desea, probado con " +
            "simuladores y no elegido de una fotografía. Mamografía o ecografía cuando procede, analíticas y un plan por escrito que " +
            "nombra el implante.",
        },
        {
          name: "Preparación",
          text:
            "El tabaco se deja cuatro semanas antes, los anticoagulantes y algunos suplementos unos diez días antes, y se ayuna de seis a " +
            "ocho horas. Compre el sujetador quirúrgico por adelantado y organice ayuda los primeros tres o cuatro días: no podrá levantar " +
            "peso ni conducir.",
        },
        {
          name: "La operación",
          text:
            "Bajo anestesia general, de una a dos horas. Se coloca el implante, se comprueba la posición con usted sentado durante la " +
            "operación y se cierra la incisión por planos. La mayoría de las pacientes se queda una noche, con un sujetador de compresión " +
            "colocado antes del alta.",
        },
        {
          name: "Las dos primeras semanas",
          text:
            "La tirantez y la inflamación son peores los primeros tres a cinco días, y los pechos quedan altos. El sujetador de compresión " +
            "se lleva día y noche, los drenajes son raros y la primera ducha se programa en la clínica. Dormir boca arriba, incorporada, es " +
            "más cómodo.",
        },
        {
          name: "Semanas tres a seis",
          text:
            "La inflamación baja y los implantes se asientan en su posición a lo largo de seis a doce semanas. El trabajo de oficina suele " +
            "ser posible a la semana o dos. Gimnasio, running, natación y cargas pesadas esperan cuatro a seis semanas; el tren superior se " +
            "introduce de forma gradual después.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "Un implante es un dispositivo, y tiene una vida útil y una tasa de fallo. Estos son los riesgos que importan, incluidos los raros.",
      items: [
        "Contractura capsular: el tejido cicatricial alrededor del implante se aprieta y hace el pecho duro, redondo y a veces doloroso; puede tratarse pero reaparecer",
        "BIA-ALCL, un linfoma raro de la cápsula del implante, asociado sobre todo a implantes texturizados y que aparece años después como inflamación o colección líquida; se trata retirando el implante y la cápsula",
        "Rotura o fuga, que puede no dar ningún síntoma y detectarse en una imagen, y arrugas o bordes visibles a través de piel fina",
        "Infección, que puede obligar a retirar el implante y recolocarlo más adelante, y alteración de la sensibilidad del pezón o del pecho: a menudo temporal, a veces permanente",
        "Sangrado, hematoma y, raramente, trombosis, reducidos con deambulación precoz y compresión",
      ],
      note:
        "Cuéntenos si se ha operado antes del pecho, si tiene antecedentes familiares de cáncer de mama u ovario, enfermedades autoinmunes " +
        "o fuma. Los implantes no impiden el cribado del cáncer de mama, pero cambian cómo se hace la mamografía: dígalo cuando la pida.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuánto duran los implantes?",
          a:
            "No son dispositivos para toda la vida. Muchos duran de diez a quince años o más, pero una rotura, una contractura o un cambio " +
            "de forma pueden adelantar el recambio. No hay un calendario fijo de sustitución: el implante se revisa —con exploración y, " +
            "cuando hace falta, ecografía o resonancia— y se cambia si hay un motivo.",
        },
        {
          q: "¿Podré dar el pecho?",
          a:
            "La mayoría de las mujeres sí, sobre todo con una incisión en el pliegue y una colocación en plano dual, que dejan los " +
            "conductos lácteos y la inervación en gran parte intactos. Algunas producen menos leche, y la incisión periareolar conlleva más " +
            "riesgo de alterar la sensibilidad del pezón. Merece la pena planificar la operación pensando en un embarazo futuro.",
        },
        {
          q: "¿Los implantes causan cáncer de mama?",
          a:
            "No se ha demostrado que los implantes de silicona causen cáncer de mama. El BIA-ALCL es un linfoma raro y distinto de la cápsula " +
            "cicatricial que rodea el implante, no un cáncer de mama, y es la razón por la que cualquier inflamación, bulto o dolor nuevos " +
            "alrededor de un implante se estudian en lugar de vigilarse. El riesgo es bajo, pero es real y debe conocerlo.",
        },
        {
          q: "¿Necesito una elevación en su lugar?",
          a:
            "Si el pezón está a la altura del pliegue o por debajo, sí, o una elevación con un implante más pequeño. Un implante añade " +
            "volumen hacia delante, no hacia arriba, y en un pecho caído puede producir una forma más pesada y baja. Esto se examina de pie, " +
            "y es el motivo más frecuente por el que un plan cambia en la consulta.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Vistas de frente y de lado, con ropa ajustada, bastan para hablar de si un implante solo es suficiente, qué volumen encaja " +
        "aproximadamente en su figura y qué implica la operación. Un coordinador responde con un plan y un presupuesto por escrito.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Aumento de pecho con silicona en Estambul",
    seoDesc:
      "Aumento de pecho con implantes de silicona en Estambul: redondo o anatómico, plano dual, incisión, recuperación y riesgos incluido el BIA-ALCL.",
  },
  "/butt-augmentation-surgery": {
    title: "Aumento de glúteos (BBL) en Estambul",
    eyebrow: "Contorno corporal",
    lead:
      "El aumento de glúteos cambia la forma y la proyección de los glúteos, ya sea moviendo grasa de otra parte de su cuerpo o " +
      "colocando un implante. Es una de las operaciones más exigentes del contorno corporal, para el cirujano y para la recuperación.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de aumento de glúteos en Platinya Clinic",
    stats: [
      { value: "3–5 h", label: "Duración de la cirugía" },
      { value: "1–2 noches", label: "Estancia hospitalaria" },
      { value: "2–3 semanas", label: "Sentarse con cuidado" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "Una transferencia de grasa necesita grasa que transferir y piel que pueda acomodar el nuevo volumen. Ambas cosas se valoran de " +
        "pie, y ambas deciden si la operación es posible.",
      items: [
        "Grasa suficiente en abdomen, flancos, espalda o muslos para extraer, con peso estable",
        "Un glúteo plano, cuadrado o sin proyección de perfil",
        "Asimetría, o pérdida de forma tras adelgazar",
        "Buen tono cutáneo y sin antecedentes de trombosis ni problemas con liposucciones previas",
      ],
      note:
        "No es una operación para adelgazar ni sustituye al entrenamiento. Si está por debajo de su peso puede que no haya nada que " +
        "extraer, y el implante sería la única vía, con otro conjunto de riesgos. El tabaco, los trastornos de coagulación y la diabetes " +
        "no controlada son motivos para replantearse la intervención.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "Dos operaciones comparten el nombre. No son variantes una de otra: se diferencian en el material, en la recuperación y en los " +
        "riesgos graves.",
      items: [
        {
          name: "Transferencia de grasa (Brazilian butt lift)",
          text:
            "Se liposucciona grasa del abdomen, los flancos o la espalda, se lava y se deja asentar, y después se inyecta en el glúteo en " +
            "pasadas pequeñas. Es tejido propio, así que se siente natural y las zonas donantes se contornean al mismo tiempo. No toda la " +
            "grasa sobrevive.",
        },
        {
          name: "Implantes glúteos",
          text:
            "Se coloca un implante sólido de silicona a través de una incisión en el pliegue entre los glúteos, profundo a la fascia o en el " +
            "músculo. Da un volumen predecible que no se reduce, pero es un cuerpo extraño con riesgo de desplazamiento, infección y " +
            "formación de cápsula, y la cicatriz queda en una zona sensible.",
        },
        {
          name: "Combinación y revisión",
          text:
            "La transferencia de grasa puede combinarse con un implante pequeño o repetirse a los seis o doce meses para añadir volumen " +
            "cuando el primer injerto se ha asentado. Revisar un BBL previo suele ser más difícil que la primera operación, porque el " +
            "tejido cicatricial cambia los planos.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y planificación",
          text:
            "Fotografías de pie, valoración de la grasa donante y de la elasticidad de la piel, y una historia clínica que incluya " +
            "coagulación, sangrado y cirugías previas. Analíticas y, cuando procede, una opinión cardiológica o anestésica antes de fijar " +
            "la fecha.",
        },
        {
          name: "Preparación",
          text:
            "El tabaco se deja al menos cuatro semanas antes; la nicotina afecta a la supervivencia de la grasa y a la curación. Los " +
            "anticoagulantes, la píldora anticonceptiva y algunos suplementos se comentan y se suspenden cuando corresponde. Compre ropa " +
            "holgada y una almohada para BBL, y organice ayuda en casa: no podrá tumbarse ni sentarse con normalidad durante semanas.",
        },
        {
          name: "La operación",
          text:
            "Bajo anestesia general, de tres a cinco horas. La grasa se extrae, se procesa y se inyecta en pequeñas alícuotas, con cuidado " +
            "de mantenerse lejos de los vasos profundos. Se coloca una prenda de compresión y la mayoría de los pacientes se queda una o dos " +
            "noches.",
        },
        {
          name: "Las dos primeras semanas",
          text:
            "Se duerme boca abajo o de lado, y se sienta solo sobre el cojín indicado, brevemente. Las zonas donantes están magulladas y " +
            "doloridas, y las prendas se llevan de forma continua. Caminar se anima desde el primer día; los glúteos están hinchados y la " +
            "forma todavía no es la definitiva.",
        },
        {
          name: "Semanas tres a doce",
          text:
            "Sentarse se vuelve cómodo a las dos o tres semanas, conducir a las dos o tres y hacer ejercicio a las seis u ocho. La " +
            "inflamación se asienta en tres meses; la grasa que sobrevive es permanente, pero la forma final se valora a los tres o seis meses.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "Esta operación tiene un riesgo grave que le es propio, y debe decirse con claridad en lugar de mencionarse de pasada.",
      items: [
        "Embolia grasa: grasa que entra en el torrente sanguíneo y llega a los pulmones; puede ser mortal, y ninguna técnica elimina el riesgo por completo",
        "Necrosis grasa, quistes oleosos e induración en las zonas transferidas, que a veces necesitan drenaje",
        "Infección, que en un plano glúteo profundo puede ser difícil de tratar y exigir la retirada del implante, y seroma o curación lenta en las zonas donantes",
        "Asimetría, irregularidad del contorno o un resultado más pequeño de lo previsto, porque una parte variable de la grasa no sobrevive",
        "Trombosis o embolia pulmonar, reducidas con deambulación precoz y compresión, y, con implantes, desplazamiento, contractura capsular y cicatrices engrosadas",
      ],
      note:
        "Pregunte directamente a cualquier clínica cómo evita la inyección intravascular profunda, quién administra la anestesia y qué " +
        "ocurre si hay una complicación. Una clínica que responde con vaguedades sobre la embolia grasa no es una clínica con la que reservar.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuánta grasa sobrevive?",
          a:
            "Una proporción variable: a menudo se reabsorbe una parte importante y el resultado es menor que el volumen inmediato tras la " +
            "operación. Por eso se planifica de forma conservadora y a veces hace falta una segunda sesión a los seis o doce meses. Ningún " +
            "cirujano puede prometer un porcentaje.",
        },
        {
          q: "¿Cuánto tarda en poder sentarme con normalidad?",
          a:
            "Dos o tres semanas sentándose solo sobre un cojín y por periodos cortos, y durmiendo boca abajo o de lado. Se cree que la " +
            "presión prolongada en las primeras semanas reduce la supervivencia de la grasa. Conducir espera dos o tres semanas; los vuelos " +
            "largos, de cuatro a seis.",
        },
        {
          q: "¿Es peligroso un BBL?",
          a:
            "Conlleva un riesgo real de embolia grasa, que puede ser mortal, y ese riesgo es mayor que en la mayoría de las operaciones de " +
            "estética. Se reduce con una técnica cuidadosa —cánulas pequeñas, evitar el músculo profundo y los grandes vasos, limitar el " +
            "volumen— pero no se elimina. Es legítimo decidir que el riesgo no compensa.",
        },
        {
          q: "¿Grasa o implante? ¿Qué es mejor?",
          a:
            "La grasa da un tacto natural y contornea las zonas donantes, pero parte del volumen se pierde y el límite es la grasa que " +
            "tenga. El implante da un volumen predecible sin una segunda zona quirúrgica, a cambio de un cuerpo extraño y más riesgo de " +
            "infección y desplazamiento. Suele decidirlo su propia distribución de grasa.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Vistas de lado y de espaldas, con ropa ajustada, permiten al cirujano valorar la proyección y la grasa donante, y decir con " +
        "honestidad si la transferencia es posible. Un coordinador responde con un plan y un presupuesto por escrito.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Aumento de glúteos BBL en Estambul",
    seoDesc:
      "Aumento de glúteos en Estambul: transferencia de grasa o implantes, recuperación sin sentarse, riesgo real de embolia grasa y resultados.",
  },
  "/abdominoplasty": {
    title: "Abdominoplastia en Estambul (dermolipectomía)",
    eyebrow: "Contorno corporal",
    lead:
      "Una abdominoplastia retira la piel y la grasa sobrantes que la dieta y el ejercicio no consiguen mover, y tensa la pared " +
      "abdominal que queda detrás. Es cirugía de contorno corporal, no una operación para adelgazar.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de abdominoplastia en Platinya Clinic",
    stats: [
      { value: "2–4 h", label: "Duración de la cirugía" },
      { value: "1–2 noches", label: "Estancia hospitalaria" },
      { value: "2–3 semanas", label: "Vuelta al trabajo de oficina" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "La operación funciona mejor en alguien con peso estable desde hace al menos seis meses, buena salud general y una preocupación " +
        "por la forma más que por los kilos.",
      items: [
        "Piel flácida o músculos abdominales separados después del embarazo",
        "Piel caída tras una pérdida de peso importante, cuando el peso ya se ha estabilizado",
        "Una bolsa rebelde en el abdomen inferior que no ha cambiado con el entrenamiento",
        "Estrías o una cicatriz de cesárea que quedan dentro de la piel que se va a retirar de todos modos",
      ],
      note:
        "Una abdominoplastia no es un tratamiento de la obesidad ni sustituye a perder peso. Si planea un embarazo o espera perder mucho " +
        "peso, normalmente es mejor esperar: el resultado está pensado para durar.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "La técnica se elige en la consulta a partir de la piel, la capa muscular y el patrón de cicatrices, nunca solo de una fotografía.",
      items: [
        {
          name: "Abdominoplastia completa",
          text:
            "Una incisión horizontal baja en el abdomen, la piel elevada hasta las costillas, los músculos abdominales tensados en la línea " +
            "media y la piel sobrante retirada. El ombligo se recoloca. Conviene cuando hay piel flácida por encima y por debajo del " +
            "ombligo, y puede prolongarse alrededor de los flancos si también cuelga piel en los lados.",
        },
        {
          name: "Miniabdominoplastia",
          text:
            "Una incisión más corta y una recuperación más corta, para la flaccidez limitada al abdomen inferior. El ombligo normalmente " +
            "se deja en su sitio y la tensión muscular es limitada.",
        },
        {
          name: "Reparación muscular (plicatura)",
          text:
            "Cuando los músculos rectos se han separado —frecuente tras el embarazo— se suturan de nuevo hacia la línea media. Esto es lo " +
            "que cambia el perfil del abdomen, y no solo su piel.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y planificación",
          text:
            "Fotografías, historia clínica y una conversación honesta sobre las cicatrices, el tiempo de baja y lo que la operación puede y " +
            "no puede hacer. Antes de fijar fecha se piden analíticas y, cuando procede, una ecografía o un informe de cardiología.",
        },
        {
          name: "Preparación",
          text:
            "El tabaco se deja al menos tres o cuatro semanas antes de la cirugía, los anticoagulantes y algunos suplementos se suspenden " +
            "unos diez días antes y se ayuna de seis a ocho horas. Organice que alguien le recoja y le ayude en casa la primera semana.",
        },
        {
          name: "La operación",
          text:
            "Bajo anestesia general, normalmente de dos a cuatro horas. A menudo se deja un drenaje unos días. La mayoría de los pacientes " +
            "se queda una o dos noches en el hospital, con prendas de compresión colocadas antes del alta.",
        },
        {
          name: "Las dos primeras semanas",
          text:
            "Caminar desde el primer día, distancias cortas, con la espalda recta. La prenda se lleva día y noche. La inflamación alcanza " +
            "su máximo hacia el tercer o quinto día y después baja; la primera ducha y la retirada del drenaje se programan en la clínica.",
        },
        {
          name: "Semanas tres a seis, y la cicatriz",
          text:
            "El trabajo de oficina suele ser posible a las dos o tres semanas. Gimnasio, natación y cargas pesadas esperan a la semana seis, " +
            "cuando el cirujano confirma que el tejido ha curado. La cicatriz está roja y firme los primeros meses y después se aclara y se " +
            "aplana a lo largo de doce a dieciocho meses; queda baja, dentro de la línea de la ropa interior.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "Toda operación tiene riesgos, y conviene escucharlos antes de decidir, no después.",
      items: [
        "Seroma: una colección de líquido bajo la piel; es el problema más frecuente y suele drenarse en la clínica",
        "Infección o curación lenta de la herida, más probables en fumadores",
        "Cicatriz ancha o elevada y asimetría o un contorno que necesita una pequeña revisión (aproximadamente uno de cada diez pacientes); la cicatriz puede revisarse, pero no borrarse",
        "Entumecimiento alrededor de la cicatriz y del ombligo, que normalmente mejora con los meses",
        "Sangrado, hematomas y, raramente, trombosis, prevenidos con deambulación precoz y compresión",
      ],
      note:
        "Cuéntenos en la consulta si fuma, tiene diabetes, toma anticoagulantes o se ha operado antes del abdomen. Cada uno de estos " +
        "cambia el plan, y ocultarlo es la vía más rápida a una recuperación complicada.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Duele?",
          a:
            "Los dos o tres primeros días son incómodos más que dolorosos: una sensación de tirantez y hematoma en todo el abdomen. Se " +
            "controla con analgesia habitual, y la mayoría camina y come con normalidad antes del alta.",
        },
        {
          q: "¿Se verá la cicatriz?",
          a:
            "Hay cicatriz, y es permanente. Se coloca baja, siguiendo la línea de la ropa interior, y se aclara a lo largo de doce a " +
            "dieciocho meses. Cómo cure depende de su piel, de no fumar y de seguir las instrucciones de cuidado de la herida.",
        },
        {
          q: "¿Cambiará mi peso, y podré tener hijos después?",
          a:
            "Se pierde algo de peso, pero no es el objetivo: la operación cambia la forma del abdomen. Si su meta es adelgazar, el punto de " +
            "partida correcto es una valoración de cirugía bariátrica. En cuanto a hijos, normalmente sí es posible, pero el abdomen volverá " +
            "a estirarse durante el embarazo y parte del resultado puede perderse; por eso muchos cirujanos aconsejan completar la familia antes.",
        },
        {
          q: "¿Cuánto cuesta?",
          a:
            "El precio depende de la técnica, del hospital, de la estancia y de si hace falta reparar el músculo, así que se presupuesta " +
            "después de la valoración y no antes. El presupuesto incluye cirugía, anestesia, estancia hospitalaria, prendas y revisiones.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Un cirujano las revisa y un coordinador le responde con un plan, una fecha y un presupuesto por escrito: sin compromiso y sin " +
        "presión para reservar.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Abdominoplastia en Estambul: qué cambia de verdad",
    seoDesc:
      "Abdominoplastia en Estambul: piel y músculo, técnicas completa y mini, 2–3 semanas de baja, cicatriz permanente y riesgos reales.",
  },
  "/liposuction": {
    title: "Liposucción en Estambul (VASER y tumescente)",
    eyebrow: "Contorno corporal",
    lead:
      "La liposucción retira grasa de zonas concretas para cambiar el contorno del cuerpo. Es una operación de contorno: la báscula " +
      "apenas se mueve y lo que cambia es dónde se asienta la grasa.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de liposucción en Platinya Clinic",
    stats: [
      { value: "1–3 h", label: "Duración de la cirugía" },
      { value: "Ambulatoria", label: "o una noche" },
      { value: "4–6 semanas", label: "Prenda de compresión" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "Las dos cosas que deciden el resultado son cuánta grasa hay que retirar y cuánto va a retraerse la piel después. La segunda es " +
        "la que los pacientes subestiman.",
      items: [
        "Grasa localizada en abdomen, flancos, espalda, muslos o brazos que no ha cambiado con el entrenamiento",
        "Peso estable desde hace unos seis meses y cercano al que pretende mantener",
        "Piel que todavía tiene elasticidad: tiene que encogerse sobre el nuevo contorno",
        "Sin trastornos de coagulación, y sin diabetes ni cardiopatía no controladas",
      ],
      note:
        "La liposucción no es un tratamiento de la obesidad ni sustituye a perder peso. Si hay mucho peso que perder, perderlo antes da un " +
        "resultado mejor y más seguro. Si la piel ya está flácida, retirar la grasa de debajo hace la flaccidez más evidente: eso es un caso " +
        "de retirada de piel, no de más liposucción.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "Toda liposucción trabaja por incisiones pequeñas con una cánula. La diferencia está en cómo se afloja la grasa antes de aspirarla y " +
        "en cuánta superficie se trata en una sesión.",
      items: [
        {
          name: "Liposucción tumescente",
          text:
            "Primero se inyecta un volumen grande de anestésico local diluido con adrenalina, que adormece la zona, estrecha los vasos y " +
            "reduce el sangrado. Después la grasa se aspira con una cánula. Es la técnica estándar y sobre la que se construyen casi todas " +
            "las demás.",
        },
        {
          name: "VASER (asistida por ultrasonidos)",
          text:
            "Se usa energía de ultrasonidos para aflojar la grasa antes de retirarla. Se afirma que es más suave con el tejido de alrededor y " +
            "que ayuda a la retracción de la piel, sobre todo en espalda y flancos. Es más lenta, cuesta más y tiene su propio riesgo de " +
            "quemaduras bajo la piel.",
        },
        {
          name: "Contorno 360°",
          text:
            "El abdomen, los flancos y la espalda se tratan como una unidad continua, para que la transición alrededor de la cintura sea " +
            "lisa y no una serie de parches separados. Es una operación más larga y con más volumen retirado, así que se planifica con más " +
            "cuidado y más tiempo de recuperación.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y planificación",
          text:
            "Las zonas se marcan de pie, se valora la elasticidad de la piel y se habla con honestidad del volumen esperable, incluido lo " +
            "que no va a cambiar. Analíticas y, cuando procede, una opinión cardiológica antes de fijar la fecha.",
        },
        {
          name: "Preparación",
          text:
            "El tabaco se deja cuatro semanas antes, los anticoagulantes y algunos suplementos unos diez días antes, y se ayuna de seis a " +
            "ocho horas. Las prendas de compresión se miden y se encargan por adelantado. Organice ayuda en casa los dos o tres primeros días.",
        },
        {
          name: "La operación",
          text:
            "Con sedación o anestesia general, de una a tres horas según el número de zonas. Se infiltra líquido, se aspira la grasa por " +
            "incisiones de pocos milímetros y la prenda se coloca en el quirófano. La mayoría de los pacientes vuelve a casa el mismo día; " +
            "los volúmenes mayores se quedan una noche.",
        },
        {
          name: "Las dos primeras semanas",
          text:
            "Rezuma líquido por las incisiones un día o dos, y la prenda se lleva día y noche. Los hematomas son extensos y alcanzan su " +
            "máximo la primera semana. Se camina desde el primer día; el trabajo de oficina suele ser posible a los tres o siete días.",
        },
        {
          name: "Semanas tres a doce",
          text:
            "La inflamación baja en cuatro a seis semanas y la prenda se mantiene ese tiempo. El ejercicio se retoma a las cuatro o seis " +
            "semanas. El contorno se afirma en tres a seis meses y el resultado final se valora entre los seis y los doce.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "La liposucción es frecuente y sigue siendo cirugía, con un pequeño número de riesgos que son graves más que estéticos.",
      items: [
        "Irregularidad del contorno, hoyuelos o asimetría: la queja más frecuente y la más difícil de corregir",
        "Flaccidez o caída de la piel tras retirar la grasa, cuando la elasticidad ya era mala de partida",
        "Quemaduras o necrosis cutánea, en particular con técnicas asistidas por ultrasonidos",
        "Infección, seroma que necesita drenajes repetidos y curación lenta en las incisiones",
        "Trombosis, embolia pulmonar y embolia grasa, raras y reducidas con deambulación precoz y compresión; la lesión interna de la pared abdominal o de órganos es aún más rara y más probable con aspiración profunda agresiva",
      ],
      note:
        "Cuéntenos si toma anticoagulantes, tiene problemas de coagulación, enfermedad cardiaca o hepática, o se ha hecho antes una " +
        "liposucción en la misma zona. Hay un límite a lo que se puede retirar con seguridad en una sesión; un cirujano que acepta " +
        "cualquier volumen que se le pida no está siendo prudente.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuánto peso perderé?",
          a:
            "Muy poco, y es intencionado: la grasa pesa menos de lo que parece y el volumen seguro en una sesión es limitado. El cambio " +
            "está en la forma y en cómo sienta la ropa. Si el objetivo es perder peso, esta es la operación equivocada.",
        },
        {
          q: "¿Volverá la grasa?",
          a:
            "Las células grasas retiradas no vuelven, pero las que quedan pueden agrandarse si gana peso, y suelen agrandarse por igual, así " +
            "que la forma puede cambiar. Mantener el peso estable es lo que protege el resultado.",
        },
        {
          q: "¿Trata la celulitis?",
          a:
            "No de forma fiable. La celulitis es una estructura de la piel y de las bandas fibrosas que hay debajo, no simplemente grasa. La " +
            "liposucción a veces hace más visible el hoyuelo, porque retira la grasa que lo rellenaba. Desconfíe de quien la venda como cura " +
            "de la celulitis.",
        },
        {
          q: "¿Cuándo veré el resultado?",
          a:
            "Un cambio temprano se ve a las dos o tres semanas, pero la inflamación oculta el contorno real durante más tiempo. La mayor " +
            "parte del resultado está a los tres meses y la forma final entre los seis y los doce, que es también cuando se plantearía una " +
            "revisión si hiciera falta.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Vistas de frente, de lado y de espaldas bastan para decir qué zonas se pueden tratar, qué volumen es realista aproximadamente y si " +
        "la piel se retraerá. Un coordinador responde con un plan y un presupuesto por escrito.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Liposucción en Estambul: VASER y tumescente",
    seoDesc:
      "Liposucción en Estambul: tumescente, VASER o contorno 360°, 1–3 h de cirugía, prenda 4–6 semanas, límites reales y riesgos graves.",
  },
  "/gynecomastia": {
    title: "Cirugía de ginecomastia en Estambul",
    eyebrow: "Contorno corporal",
    lead:
      "La ginecomastia es el aumento del pecho masculino. La cirugía retira la glándula que hay detrás del pezón, la grasa que la rodea o " +
      "ambas cosas, pero solo después de buscar la causa, porque algunas son médicas y otras reversibles.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de ginecomastia en Platinya Clinic",
    stats: [
      { value: "1–2 h", label: "Duración de la cirugía" },
      { value: "Ambulatoria", label: "o una noche" },
      { value: "3–4 semanas", label: "Chaleco de compresión" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "La ginecomastia verdadera es tejido glandular —un disco firme detrás del pezón— y no desaparece con entrenamiento. La grasa sola " +
        "es pseudoginecomastia y se trata de otra forma.",
      items: [
        "Un disco de tejido firme, a veces doloroso, detrás de uno o de ambos pezones",
        "Un aumento que lleva estable dos años o más después de la pubertad",
        "Pseudoginecomastia: grasa sin glándula, en alguien cercano a un peso estable",
        "Molestia, asimetría o limitación en lo que se pone o en lo que hace",
      ],
      note:
        "Antes de cualquier operación se descarta la causa. Los fármacos —cannabis, esteroides anabolizantes, alcohol, algunos " +
        "antihipertensivos y medicamentos para la próstata— son la causa reversible más frecuente. Los problemas hormonales, la enfermedad " +
        "tiroidea, la hepática o renal y, raramente, un tumor testicular también se presentan así. Primero se hacen analíticas y una " +
        "exploración testicular; si se encuentra algo, se trata, no se opera alrededor.",
    },
    techniques: {
      heading: "Qué se puede hacer y cómo se elige",
      intro:
        "La operación se planifica según lo que realmente hay: glándula, grasa o piel, y las tres están presentes en proporciones distintas " +
        "en cada hombre.",
      items: [
        {
          name: "Exéresis de la glándula",
          text:
            "La glándula se retira por una incisión semicircular alrededor de la mitad inferior de la areola. Es la única forma de quitar " +
            "tejido glandular firme, y la incisión suele curar bien porque sigue el borde del pigmento. A menudo se deja un pequeño drenaje " +
            "uno o dos días.",
        },
        {
          name: "Liposucción",
          text:
            "Se usa para el componente graso y para difuminar los bordes de modo que el pecho no parezca operado. Por sí sola no retira " +
            "glándula, y por eso la liposucción aislada a menudo deja un bulto duro detrás del pezón: el motivo más frecuente de revisión.",
        },
        {
          name: "Combinada con retirada de piel",
          text:
            "En aumentos importantes, o tras una pérdida de peso grande, hay piel sobrante que no se retraerá. Se retira, con la cicatriz " +
            "alrededor de la areola o horizontal a través del pecho. Es una operación mayor y una cicatriz que hay que aceptar.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la recuperación",
      steps: [
        {
          name: "Consulta y valoración",
          text:
            "El pecho se examina tumbado y de pie, se distingue la glándula de la grasa y se exploran los testículos. Analíticas de hormonas " +
            "y función hepática y, cuando procede, ecografía de pecho o testicular, antes de programar nada.",
        },
        {
          name: "Preparación",
          text:
            "Cualquier fármaco causante se suspende con el acuerdo del médico que lo prescribe; nunca por su cuenta si es pautado. El tabaco " +
            "se deja cuatro semanas antes, los anticoagulantes unos diez días antes, y se ayuna de seis a ocho horas. El chaleco de " +
            "compresión se encarga por adelantado.",
        },
        {
          name: "La operación",
          text:
            "Bajo anestesia general, de una a dos horas. Se extirpa la glándula, se liposucciona la grasa y se comprueba el contorno con " +
            "usted sentado. El chaleco se coloca en el quirófano. La mayoría vuelve a casa el mismo día; algunos se quedan una noche.",
        },
        {
          name: "Las dos primeras semanas",
          text:
            "El chaleco se lleva día y noche, y el drenaje, si se usa, sale en uno o dos días. La inflamación y los hematomas son " +
            "importantes y el pecho se siente tirante. Trabajo de oficina a los tres o siete días; nada de levantar peso ni de ejercicios " +
            "de pecho.",
        },
        {
          name: "Semanas tres a doce",
          text:
            "El chaleco se mantiene tres o cuatro semanas en total. Ejercicio aeróbico a las tres o cuatro semanas, pesas y trabajo de " +
            "pecho a las seis. La inflamación se asienta en tres meses y el contorno final, incluidas las irregularidades menores, se valora " +
            "a los seis.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "La mayoría de los riesgos aquí son de contorno, y uno es no tratar la causa.",
      items: [
        "Deformidad del contorno: un hundimiento en forma de plato, un bulto residual o asimetría entre los dos lados si se retira demasiado o demasiado poco tejido",
        "Recidiva, si queda tejido glandular o se continúa con un fármaco causante",
        "Entumecimiento o hipersensibilidad del pezón, que suele mejorar con los meses",
        "Cicatrización deficiente o ensanchada y, raramente, pérdida del complejo areola-pezón si se compromete su riego sanguíneo",
        "Trombosis, reducida con deambulación precoz, e infección, más probable en fumadores; el hematoma o el seroma pueden necesitar drenaje y afectar a la forma final",
      ],
      note:
        "Diga con honestidad qué toma: esteroides, cannabis, suplementos, medicamentos pautados. No es un juicio, es la diferencia entre una " +
        "operación que funciona y una que vuelve. Si se encuentra una causa hormonal, se trata aparte.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Es cáncer?",
          a:
            "La ginecomastia en sí no es cáncer de mama y en el hombre suele ser benigna. Pero un bulto unilateral, duro, fijo o con " +
            "secreción no es lo mismo y debe estudiarse; por eso la exploración y, cuando hace falta, la ecografía van antes de la cirugía y " +
            "no después.",
        },
        {
          q: "¿Volverá?",
          a:
            "Si la glándula se extirpa bien y se elimina la causa, la recidiva es poco frecuente. Vuelve más a menudo cuando se hizo solo " +
            "liposucción, cuando se dejó glándula para preservar el pezón o cuando continúan los esteroides o el cannabis. Una pequeña " +
            "plenitud residual no es lo mismo que una recidiva.",
        },
        {
          q: "¿Tengo que dejar el cannabis o los esteroides?",
          a:
            "Sí, y no solo por la curación. Ambos pueden provocar el aumento, y continuar con ellos después de la cirugía es la forma más " +
            "segura de deshacerla. Los medicamentos pautados son otra cosa: solo se cambian con el médico que los prescribió.",
        },
        {
          q: "¿Quedará una cicatriz visible?",
          a:
            "La incisión sigue el borde inferior de la areola y suele difuminarse hasta una línea fina en seis a doce meses. Si hay que " +
            "retirar piel, la cicatriz es más larga: alrededor de la areola o a través del pecho. Es permanente y es la principal " +
            "contrapartida de la operación.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe sus fotografías para una primera opinión",
      text:
        "Una vista frontal y otra de lado bastan para valorar si esto es glándula, grasa o piel, y si hacen falta analíticas antes de nada. " +
        "Un coordinador responde con un plan y un presupuesto por escrito.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Esta página es información general, no consejo médico. La idoneidad, la técnica y los riesgos se deciden en una consulta con un " +
      "cirujano.",
    seoTitle: "Ginecomastia en Estambul: cirugía del pecho masculino",
    seoDesc:
      "Cirugía de ginecomastia en Estambul: glándula, grasa o piel, 1–2 h, chaleco 3–4 semanas, causas que hay que descartar y recidiva.",
  },
  "/gastric-sleeve-surgery": {
    title: "Manga gástrica en Estambul",
    eyebrow: "Cirugía de la obesidad",
    lead:
      "El estómago se remodela en un tubo estrecho —se retira aproximadamente el 60–70 %— para que quepa mucho menos y se vacíe más " +
      "despacio. Es una herramienta que facilita controlar el apetito y el tamaño de las raciones; no pierde el peso por usted.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de manga gástrica en Platinya Clinic",
    stats: [
      { value: "1–2 h", label: "Duración de la cirugía" },
      { value: "2–3 noches", label: "Estancia hospitalaria" },
      { value: "12–18 meses", label: "Hasta estabilizar el peso" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "La decisión no se toma solo por el peso. Depende del índice de masa corporal, de las enfermedades que acompañan al exceso de " +
        "peso, de lo que ya se ha intentado con supervisión y de una disposición real a seguir en seguimiento durante años, no meses.",
      items: [
        "Un IMC de 40 o más, o de 35 o más con una enfermedad asociada como diabetes tipo 2, hipertensión o apnea del sueño",
        "Un IMC de 30 o más con diabetes tipo 2 mal controlada, permitido por algunas guías internacionales y decidido caso por caso",
        "Intentos previos estructurados de perder peso —dieta, actividad, apoyo conductual— que no se mantuvieron a largo plazo",
        "Compromiso con un seguimiento de por vida: analíticas, suplementos y visitas, incluidos los años en que el peso ya es estable",
      ],
      note:
        "No se reserva ninguna operación antes de una valoración psicológica, una revisión anestésica y una valoración dietética. El " +
        "consumo activo de sustancias o una enfermedad psiquiátrica no tratada posponen la cirugía hasta que se traten, no por una norma, " +
        "sino porque si no el seguimiento no sobrevive.",
    },
    techniques: {
      heading: "Cómo se hace la operación",
      intro:
        "El principio es el mismo en todos los casos; lo que cambia es el diámetro del tubo que queda y si se repara una hernia al mismo tiempo.",
      items: [
        {
          name: "Manga laparoscópica",
          text:
            "Cinco o seis incisiones pequeñas, una cámara y grapadoras que dividen el estómago a lo largo de su curvatura mayor. La parte " +
            "abierta se extrae por uno de los puertos, así que el estómago que queda es un tubo y no una bolsa con bypass.",
        },
        {
          name: "Calibración: cuán estrecho es el tubo",
          text:
            "El tubo se construye sobre una sonda de calibración que se pasa por la boca, normalmente de 36–40 French. Más estrecho da más " +
            "restricción pero también más estenosis y reflujo; más ancho da menos. Es un criterio quirúrgico, no una elección del paciente.",
        },
        {
          name: "Hernia hiatal y reflujo",
          text:
            "Durante la operación se revisa el diafragma y, si se encuentra una hernia hiatal, se repara en la misma sesión. El reflujo que ya " +
            "existe puede empeorar tras una manga, así que se valora antes y a veces cambia la operación elegida.",
        },
      ],
    },
    journey: {
      heading: "De la consulta al seguimiento a largo plazo",
      steps: [
        {
          name: "Valoración",
          text:
            "Analíticas con hierro, B12, folato, vitamina D y función tiroidea; endoscopia cuando está indicada; revisión dietética; " +
            "valoración psicológica y opinión anestésica. Solo entonces se ofrece una fecha.",
        },
        {
          name: "Las dos semanas previas",
          text:
            "Una dieta baja en calorías, normalmente líquida o de muy bajo aporte, reduce el hígado para que el estómago sea accesible con " +
            "seguridad. El tabaco se deja al menos cuatro semanas antes. Los anticoagulantes se suspenden según instrucción.",
        },
        {
          name: "La operación y la estancia",
          text:
            "Bajo anestesia general, de una a dos horas. La mayoría de los pacientes se queda dos o tres noches. Se realiza un estudio con " +
            "contraste el primer o segundo día si hay dudas sobre la línea de grapas, y los líquidos empiezan el mismo día.",
        },
        {
          name: "Las primeras seis semanas",
          text:
            "Líquidos una o dos semanas, triturado dos semanas, blando dos y después texturas normales. Raciones pequeñas, comidas lentas, " +
            "proteína primero y líquidos separados de las comidas. El trabajo de oficina suele ser posible a las dos o tres semanas.",
        },
        {
          name: "El largo plazo",
          text:
            "Vitamina B12, hierro, folato, vitamina D y calcio de por vida, con analíticas a los tres, seis y doce meses y después anuales. " +
            "El seguimiento continúa cuando el peso deja de moverse: es entonces cuando aparecen los déficits y la reganancia.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "Una manga es un cambio permanente en un órgano sano. Estas son las complicaciones de las que se advierte de verdad a los " +
        "pacientes, y son la razón por la que la operación se hace en un hospital con cobertura bariátrica.",
      items: [
        "Fístula en la línea de grapas en aproximadamente el 1–3 % de los pacientes, normalmente entre el día 3 y el 10; requiere drenaje, a veces una prótesis y en ocasiones otra cirugía",
        "Sangrado de la línea de grapas o del bazo, que puede necesitar transfusión y, raramente, reintervención",
        "Estenosis o torsión del tubo, que provoca vómitos repetidos y dificultad para tragar y se trata con dilatación endoscópica",
        "Reflujo ácido nuevo o peor: una de las quejas más frecuentes tras una manga y un motivo por el que a algunos pacientes se les orienta hacia un bypass",
        "Déficit a largo plazo de B12, hierro, folato, vitamina D y calcio si fallan los suplementos y el control",
      ],
      note:
        "La reganancia ocurre, sobre todo a partir del tercer año, cuando las raciones vuelven a crecer y el seguimiento se abandona. La " +
        "cirugía es una herramienta, no una cura: compra una ventana en la que reconstruir los hábitos, y la ventana se cierra si no se " +
        "reconstruye nada dentro de ella.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuánto peso perderé?",
          a:
            "Habitualmente alrededor del 25–30 % del peso corporal total durante los primeros uno o dos años, aunque la variación entre " +
            "pacientes es amplia y depende del peso inicial, la adherencia y el seguimiento. Nadie puede prometer una cifra antes de la " +
            "valoración.",
        },
        {
          q: "¿Necesitaré suplementos de por vida?",
          a:
            "En la mayoría de los casos, sí: vitamina B12, hierro, folato, vitamina D y calcio, con analíticas para ajustarlos. El estómago " +
            "retirado produce factor intrínseco y ácido, así que la absorción cambia de forma permanente.",
        },
        {
          q: "¿Se puede deshacer?",
          a:
            "El estómago no recupera su forma original. Si una manga falla —reflujo grave, pérdida insuficiente, reganancia— el paso " +
            "habitual es convertirla en un bypass gástrico, que es una operación mayor.",
        },
        {
          q: "¿Y un embarazo después?",
          a:
            "Es posible, pero la mayoría de los cirujanos aconseja esperar 12–18 meses para que el peso y el estado nutricional se hayan " +
            "estabilizado. Los suplementos y el control continúan durante el embarazo.",
        },
      ],
    },
    ctaBand: {
      heading: "Envíe su altura, su peso y sus antecedentes médicos",
      text:
        "Un cirujano bariátrico los revisa y un coordinador le responde si una valoración tiene sentido, qué pruebas harían falta primero y " +
        "un presupuesto por escrito, sin obligación de reservar.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad solo puede valorarse tras una valoración completa por un cirujano bariátrico, " +
      "incluidas la revisión psicológica y la nutricional; los resultados y los riesgos varían entre pacientes.",
    seoTitle: "Manga gástrica en Estambul: guía honesta",
    seoDesc:
      "Manga gástrica en Estambul: 60–70 % del estómago, criterios de IMC, 2–3 noches, suplementos de por vida, fístula y reganancia.",
  },
  "/stomach-balloon": {
    title: "Balón gástrico en Estambul",
    eyebrow: "Cirugía de la obesidad",
    lead:
      "Se coloca un balón dentro del estómago y se llena, de modo que hay menos sitio para la comida y la saciedad llega antes. " +
      "Permanece de seis a doce meses y después se retira. Es una ayuda temporal, no una operación ni una cura de la obesidad.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de balón gástrico en Platinya Clinic",
    stats: [
      { value: "20–30 min", label: "Colocación" },
      { value: "6–12 meses", label: "Tiempo en su sitio" },
      { value: "3–7 días", label: "Para adaptarse" },
    ],
    candidate: {
      heading: "Quién es un buen candidato",
      intro:
        "Un balón conviene a quien necesita perder una cantidad significativa de peso antes de otra cosa —cirugía articular, tratamiento " +
        "de fertilidad, reparación de una hernia— o a quien necesita un periodo definido para cambiar hábitos alimentarios con " +
        "supervisión. No conviene a quien busca un procedimiento que haga el trabajo solo.",
      items: [
        "Un IMC de aproximadamente 27–35, sin ninguna condición que haga insegura la endoscopia",
        "Peso que no ha respondido a dieta y actividad supervisadas, o un motivo médico para perder peso rápido",
        "Sin cirugía gástrica o esofágica previa, ni hernia hiatal grande ni úlcera activa",
        "Disposición a seguir un programa dietético durante los meses de colocación y después de la retirada",
      ],
      note:
        "El balón no es un tratamiento por sí solo para un IMC superior a 40, y no se ofrece a personas embarazadas, que planean un " +
        "embarazo en el año siguiente o con un trastorno alimentario activo. El cribado incluye historia clínica, analíticas y, según el " +
        "dispositivo, una endoscopia.",
    },
    techniques: {
      heading: "Las dos formas de colocar un balón",
      intro:
        "Ambos ocupan espacio en el estómago. Lo que cambia es cómo llegan, cuánto tiempo pueden quedarse y si hace falta sedación.",
      items: [
        {
          name: "Balón endoscópico",
          text:
            "Se coloca por la boca con un gastroscopio bajo sedación y se llena con suero fisiológico y un colorante, para que una fuga sea " +
            "visible. Tarda unos 20–30 minutos. Se retira de la misma forma al final de su periodo autorizado, normalmente seis o doce meses.",
        },
        {
          name: "Balón ingerible",
          text:
            "Se traga una cápsula con agua, se comprueba en radiografía y después se llena de gas a través de un catéter fino. Sin sedación y " +
            "sin endoscopia. Permanece unos cuatro meses y está diseñado para eliminarse de forma natural, aunque a veces hace falta " +
            "retirarlo por endoscopia.",
        },
        {
          name: "El programa que lo rodea",
          text:
            "Ninguno de los dos dispositivos funciona sin la dieta que los acompaña: un plan dirigido por dietista, objetivos de proteína, " +
            "seguimiento conductual y una transición estructurada de vuelta a la alimentación normal en las semanas previas a la retirada. " +
            "Esta es la parte que determina el resultado.",
        },
      ],
    },
    journey: {
      heading: "Del cribado a la vida después de la retirada",
      steps: [
        {
          name: "Cribado",
          text:
            "Historia clínica, revisión de la medicación, analíticas y endoscopia si el dispositivo la requiere. Cualquier úlcera, hernia o " +
            "reflujo se trata antes de la colocación, no después.",
        },
        {
          name: "El día de la colocación",
          text:
            "Normalmente de forma ambulatoria. Sedación en la versión endoscópica; solo agua y una cápsula en la ingerible. Se le observa " +
            "unas horas, se le da medicación antináuseas y vuelve a casa el mismo día.",
        },
        {
          name: "La primera semana",
          text:
            "Las náuseas, los retortijones y los vómitos son frecuentes y esperables: el estómago protesta por algo que tiene dentro. " +
            "Comprimidos antináuseas, pequeños volúmenes de líquido y, si hace falta, sueroterapia. La mayoría se adapta en tres a siete días.",
        },
        {
          name: "Los meses con el balón",
          text:
            "Líquidos, después triturado y luego texturas normales a lo largo de dos o tres semanas. Las raciones son más pequeñas porque el " +
            "estómago es más pequeño. Revisiones dietéticas cada cuatro a seis semanas; analíticas si la ingesta sigue siendo baja.",
        },
        {
          name: "Retirada y después",
          text:
            "La retirada tarda 20–30 minutos. El apetito suele volver en días o semanas y, sin los hábitos construidos durante el programa, " +
            "el peso regresa. Un plan de mantenimiento —seguimiento dietético, actividad, a veces medicación— se acuerda antes de retirar el balón.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro: "Un balón es menos invasivo que una cirugía, no exento de riesgo. Estas son las complicaciones de las que se habla antes de colocarlo.",
      items: [
        "Náuseas, vómitos y retortijones abdominales la primera semana, a veces lo bastante intensos como para necesitar sueroterapia",
        "Reflujo, ardor e irritación del esófago o de la mucosa gástrica mientras el balón está colocado",
        "Desinflado o migración del balón, que puede obstruir el intestino: poco frecuente y una urgencia cuando ocurre",
        "Ulceración, erosión o, muy raramente, perforación de la pared gástrica, que requiere cirugía",
        "Reganancia tras la retirada, frecuente cuando no se continúa el programa dietético",
      ],
      note:
        "Un balón compra tiempo y un estómago más pequeño, nada más. No cambia cómo procesa el cuerpo la comida, no trata las razones por " +
        "las que comer era difícil y el peso perdido suele ser moderado: normalmente entre el 5 % y el 15 % del peso corporal mientras " +
        "está colocado.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Cuánto peso perderé?",
          a:
            "Habitualmente en torno al 5–15 % del peso corporal durante el tiempo que está colocado, con amplia variación. Es menos que una " +
            "manga o un bypass, y parte suele recuperarse después de la retirada.",
        },
        {
          q: "¿Duele?",
          a:
            "La colocación no duele: se adormece la garganta y se usa sedación. Los tres a siete primeros días suelen ser incómodos, con " +
            "náuseas, retortijones y vómitos. La medicación antináuseas se prescribe antes del alta.",
        },
        {
          q: "¿Puedo comer con normalidad?",
          a:
            "Texturas normales, sí; raciones normales, no. Comer demasiado rápido o demasiado provoca dolor y vómitos, y las bebidas con gas " +
            "y los alimentos muy fibrosos se toleran mal en algunos pacientes.",
        },
        {
          q: "¿Qué pasa cuando se retira?",
          a:
            "El estómago vuelve a su tamaño anterior en pocos días. El apetito suele regresar rápido. Que el peso se mantenga depende de lo " +
            "construido durante esos meses, y por eso el programa dietético importa más que el dispositivo.",
        },
      ],
    },
    ctaBand: {
      heading: "Sepa si un balón es el punto de partida adecuado",
      text:
        "Envíe su altura, su peso y sus antecedentes médicos. Un médico bariátrico los revisa y un coordinador le responde si encaja un " +
        "balón o una valoración quirúrgica en su caso, y qué implica.",
      button: "Hable con un coordinador",
    },
    disclaimer:
      "Información general, no consejo médico. La idoneidad depende de una valoración por un médico bariátrico, con historia clínica y, " +
      "cuando está indicada, endoscopia; los resultados varían entre pacientes.",
    seoTitle: "Balón gástrico en Estambul: 6–12 meses",
    seoDesc:
      "Balón gástrico en Estambul: endoscópico o ingerible, 20–30 minutos, dieta imprescindible, 5–15 % de peso y riesgos que conviene saber.",
  },
  "/filler": {
    title: "Rellenos dérmicos en Estambul",
    eyebrow: "Medicina estética",
    lead:
      "El ácido hialurónico es un azúcar que la piel ya contiene. Reticulado en forma de gel y colocado bajo la piel, restaura el volumen " +
      "perdido y suaviza los pliegues que se han marcado. Es un procedimiento médico con riesgos reales, no un tratamiento de belleza.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de rellenos dérmicos en Platinya Clinic",
    stats: [
      { value: "30–60 min", label: "Duración de la cita" },
      { value: "6–18 meses", label: "Duración del efecto" },
      { value: "24–72 h", label: "Inflamación y hematomas" },
    ],
    candidate: {
      heading: "A quién le conviene y a quién no",
      intro:
        "El candidato adecuado tiene una preocupación concreta y describible —un pliegue, un hundimiento, un contorno perdido— y no el " +
        "deseo de parecerse a otra persona. El volumen se repone donde se ha ido, no se añade en todas partes donde se pueda.",
      items: [
        "Pérdida de volumen en pómulos, sienes o tercio medio, o pliegues que permanecen con la cara en reposo",
        "Una línea mandibular o un mentón que han perdido definición, o labios que se han afinado con la edad y no que nunca tuvieran volumen",
        "Buena salud general, sin infección activa ni inflamación cutánea en la zona a tratar",
        "Expectativas realistas: los rellenos restauran volumen, no elevan una cara caída ni eliminan la flaccidez",
      ],
      note:
        "No se aplican rellenos durante el embarazo o la lactancia, sobre acné activo, herpes labial o infección, ni donde hay alergia " +
        "conocida al ácido hialurónico o a la lidocaína. Los anticoagulantes y algunos suplementos aumentan el riesgo de hematoma y se " +
        "revisan antes, no se ignoran. A quien pide relleno permanente se le rechaza y se le ofrece una valoración quirúrgica.",
    },
    techniques: {
      heading: "Producto, plano y cuánto",
      intro:
        "El resultado depende mucho más de dónde se coloca el producto y de cuánto se usa que de la marca de la caja.",
      items: [
        {
          name: "Elegir el gel",
          text:
            "Los rellenos de ácido hialurónico se diferencian en cuánto se reticula y en la firmeza del gel. Geles más blandos para labios " +
            "y líneas finas, más firmes para planos profundos sobre el hueso. La mayoría contienen lidocaína, que hace la inyección más cómoda.",
        },
        {
          name: "Aguja o cánula, y en qué plano",
          text:
            "La aguja es precisa para labios y pliegues finos; una cánula roma reduce los hematomas y permite depositar el producto en un " +
            "solo trayecto. La colocación profunda sobre el hueso sostiene; la superficial refina. El plano es una decisión clínica, no una " +
            "preferencia.",
        },
        {
          name: "Dosis conservadora, por etapas",
          text:
            "Quedarse corto y revisar a las dos o cuatro semanas es más seguro que corregir en una sola sesión. El tejido sobrerrellenado se " +
            "estira, y la piel estirada no vuelve a encogerse: así es como las caras acaban pareciendo rellenas en lugar de descansadas.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la revisión",
      steps: [
        {
          name: "Consulta",
          text:
            "Se valora la cara en reposo y en movimiento, se toman fotografías y se revisa la historia clínica: embarazo, enfermedades " +
            "autoinmunes, herpes labial, rellenos previos y dónde se colocaron. Un relleno permanente previo cambia el plan por completo.",
        },
        {
          name: "Planificación y consentimiento",
          text:
            "Las zonas, el producto, el volumen y el coste se acuerdan por escrito antes de abrir nada. Se explican los riesgos, incluida la " +
            "oclusión vascular, y se le dice que la hialuronidasa —la enzima que disuelve el producto— está disponible en la clínica.",
        },
        {
          name: "La cita",
          text:
            "De treinta a sesenta minutos, incluida la crema anestésica. Las inyecciones ocupan de diez a veinte de esos minutos. Los labios " +
            "y el surco lagrimal son lo más sensible; la mayoría describe presión más que dolor.",
        },
        {
          name: "Las primeras 72 horas",
          text:
            "La inflamación alcanza su máximo a las 24–48 horas y los hematomas pueden tardar una semana en irse. Evite calor, sauna, " +
            "ejercicio intenso y alcohol 24–48 horas, y tratamientos dentales dos semanas si se trataron labios o la zona nasogeniana. " +
            "Dormir algo incorporada ayuda la primera noche.",
        },
        {
          name: "Revisión a las dos o cuatro semanas",
          text:
            "El resultado se valora cuando la inflamación ha desaparecido. A veces procede un pequeño retoque; no se corrige en la primera " +
            "semana, cuando todo parece más grande de lo que será. El siguiente tratamiento se planifica según lo que dure el producto en su tejido.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "Son inyecciones médicas en una zona vascular. Los riesgos graves son poco frecuentes, pero son la razón por la que esto " +
        "corresponde a una clínica con un médico presente y un antídoto en la nevera.",
      items: [
        "Hematomas, inflamación y sensibilidad durante unos días: frecuentes y mayores con anticoagulantes",
        "Oclusión vascular: el producto bloquea una arteria y causa dolor, palidez y, sin tratar, necrosis cutánea y cicatriz; la hialuronidasa debe administrarse en horas",
        "Pérdida de visión por embolización hacia la circulación retiniana: muy rara, en gran parte irreversible, y el motivo por el que ciertas zonas solo las tratan inyectores experimentados",
        "Bultos, nódulos o reacciones inflamatorias tardías meses después, a veces desencadenadas por una enfermedad o una vacunación",
        "Asimetría, migración del producto o un aspecto sobrerrellenado que no se puede deshacer del todo en una sesión",
      ],
      note:
        "El ácido hialurónico puede disolverse con hialuronidasa, y por eso es el único relleno que merece la pena usar en la cara. Los " +
        "productos permanentes y las sustancias no etiquetadas no se pueden retirar, y son el motivo más frecuente por el que se rechaza a " +
        "un paciente o se le envía a cirugía.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Duele?",
          a:
            "Se aplica crema anestésica durante veinte o treinta minutos y la mayoría de los productos contienen lidocaína. Los labios y la " +
            "zona bajo el ojo son lo más sensible: molestia más que dolor, y dura segundos por inyección.",
        },
        {
          q: "¿Se puede revertir?",
          a:
            "Sí, si es ácido hialurónico: la hialuronidasa lo disuelve en uno o dos días. No es un motivo para sobrerrellenar, pero sí la " +
            "razón por la que el producto importa más que el precio.",
        },
        {
          q: "¿Se notará?",
          a:
            "No, si se coloca en el plano correcto y se mantiene conservador. Un resultado evidente suele significar demasiado producto, " +
            "demasiado superficial, en una zona que necesitaba sostén y no volumen.",
        },
        {
          q: "¿Cada cuánto necesitaré más?",
          a:
            "Cada seis a dieciocho meses según el producto, la zona y la rapidez con que lo degrade. Los labios y las zonas de mucho " +
            "movimiento suelen necesitar retoques antes que el sostén profundo de los pómulos.",
        },
      ],
    },
    ctaBand: {
      heading: "Pregunte a un médico qué necesita realmente su cara",
      text:
        "Envíe dos fotografías —de frente y a tres cuartos, en reposo— y un médico las revisa. Recibe una respuesta honesta sobre si el " +
        "relleno es el tratamiento adecuado y qué otra cosa podría serlo.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. Los rellenos son productos sanitarios con receta y solo son apropiados tras una consulta con " +
      "un profesional cualificado; la idoneidad varía de un paciente a otro.",
    seoTitle: "Rellenos dérmicos de ácido hialurónico en Estambul",
    seoDesc:
      "Rellenos de ácido hialurónico en Estambul: 30–60 minutos, 6–18 meses, dosis conservadora, riesgos vasculares y por qué la hialuronidasa importa.",
  },
  "/face-botox": {
    title: "Bótox facial en Estambul",
    eyebrow: "Medicina estética",
    lead:
      "La toxina botulínica bloquea la señal que le dice a un músculo que se contraiga. Inyectada en dosis pequeñas y medidas en el " +
      "tercio superior de la cara, suaviza las líneas que el movimiento ha marcado, y el efecto se desvanece: eso es precisamente lo buscado.",
    cta: "Reserve una valoración gratuita",
    heroAlt: "Consulta de toxina botulínica en Platinya Clinic",
    stats: [
      { value: "15–30 min", label: "Duración de la cita" },
      { value: "10–14 días", label: "Efecto completo" },
      { value: "3–4 meses", label: "Duración" },
    ],
    candidate: {
      heading: "A quién le conviene y a quién no",
      intro:
        "La toxina trata líneas que produce el movimiento. No hace nada por el volumen perdido ni por la piel caída: eso necesita relleno o " +
        "cirugía, y ofrecer una toxina para ello es cómo acaban decepcionados los pacientes.",
      items: [
        "Líneas de entrecejo, líneas horizontales de la frente y patas de gallo visibles en movimiento",
        "Líneas que todavía son dinámicas —aparecen al fruncir el ceño o al sonreír— y no surcadas en reposo",
        "Buena salud general, sin motivo para evitar un medicamento con receta",
        "Expectativas realistas: la cara se ve menos tensa, no más joven, y el efecto es temporal",
      ],
      note:
        "La toxina botulínica no se administra en el embarazo ni la lactancia, ni a personas con un trastorno neuromuscular como " +
        "miastenia grave, síndrome de Lambert-Eaton o enfermedad de la motoneurona, ni con alergia conocida al producto o a su transportador " +
        "de albúmina. Una infección activa en el punto de inyección y una ptosis palpebral previa son motivos relativos para esperar o tratar " +
        "de otra forma.",
    },
    techniques: {
      heading: "Dónde va y cuánta",
      intro:
        "Las dosis se expresan en unidades propias de cada marca y no se pueden comparar entre ellas. Lo que importa es el patrón de " +
        "inyección, elegido según cómo se mueven sus músculos.",
      items: [
        {
          name: "Glabela: las líneas del entrecejo",
          text:
            "Suele ser la primera zona tratada, normalmente 20–30 unidades en cinco puntos. Es la zona con el resultado más predecible y " +
            "también donde una dosis mal colocada puede causar caída del párpado.",
        },
        {
          name: "Frente",
          text:
            "Habitualmente 10–20 unidades, colocadas para suavizar las líneas horizontales sin aplanar del todo la ceja. Tratar la frente " +
            "sola, sin la glabela, a menudo hace que la ceja interna se eleve y parezca extraña: las zonas se planifican juntas.",
        },
        {
          name: "Patas de gallo",
          text:
            "Normalmente 6–12 unidades por lado, en tres puntos alrededor del ojo externo. Es superficial y está cerca del reborde orbitario, " +
            "así que los hematomas son frecuentes y la dosis se mantiene baja para evitar un aspecto pesado y cerrado.",
        },
      ],
    },
    journey: {
      heading: "De la consulta a la revisión",
      steps: [
        {
          name: "Consulta",
          text:
            "La cara se observa en reposo y en movimiento —fruncir, elevar, entrecerrar— porque la dosis se elige por el músculo y no por la " +
            "arruga. Se revisan historia clínica, medicación y tratamientos previos con toxina, y se toman fotografías.",
        },
        {
          name: "La cita",
          text:
            "De quince a treinta minutos. No hace falta anestesia; se usa hielo si lo desea. Una aguja fina, varias microinyecciones de unos " +
            "segundos. Puede volver al trabajo de inmediato.",
        },
        {
          name: "Las primeras 24 horas",
          text:
            "No frotar ni masajear la zona durante cuatro horas, no tumbarse durante cuatro horas y nada de gimnasio, sauna ni alcohol en 24 " +
            "horas. Un dolor de cabeza leve y pequeños hematomas son habituales; el maquillaje puede aplicarse el mismo día si la piel no está rota.",
        },
        {
          name: "Días 3 a 14",
          text:
            "El inicio es hacia el segundo o tercer día y el efecto completo llega a los 10–14 días. Juzgar el resultado antes lleva a " +
            "retoques innecesarios: la revisión se agenda para el día 14.",
        },
        {
          name: "La revisión y después el mantenimiento",
          text:
            "A las dos semanas se comprueba el patrón y se hace una pequeña corrección si hace falta. El efecto dura tres o cuatro meses, a " +
            "veces menos en quien lo metaboliza rápido. Tratar cada tres o cuatro meses mantiene el resultado estable sin subir las dosis.",
        },
      ],
    },
    risks: {
      heading: "Qué puede salir mal",
      intro:
        "Es un medicamento con receta, y los riesgos son los de la propia toxina más que los de la aguja.",
      items: [
        "Hematomas, inflamación y dolor de cabeza leve durante un día o dos, más frecuentes alrededor de los ojos",
        "Caída del párpado o de la ceja (ptosis) en aproximadamente el 1–2 % de los tratamientos de glabela: temporal, se resuelve en dos a cuatro semanas y a veces se ayuda con colirios",
        "Asimetría, o una ceja más alta en un lado, normalmente corregible en la revisión de las dos semanas",
        "Una expresión antinatural —frente aplanada o ceja en pico— por una dosis o un patrón que no encaja con los músculos",
        "Ojo seco, hinchazón del párpado o dificultad para elevar la ceja y, raramente, debilidad generalizada o una reacción seudogripal",
      ],
      note:
        "Cuente al profesional todos los medicamentos y suplementos, los tratamientos previos con toxina y cuánto duraron, y cualquier " +
        "antecedente familiar de enfermedad neuromuscular. La toxina no trata la piel caída ni el volumen perdido, y no sustituye a una " +
        "valoración quirúrgica cuando eso es lo que la cara necesita.",
    },
    faq: {
      heading: "Preguntas de los pacientes",
      items: [
        {
          q: "¿Se me quedará la cara congelada?",
          a:
            "No con una dosis medida. El objetivo es suavizar el movimiento, no detenerlo. El aspecto congelado viene de tratar todas las " +
            "zonas a dosis completa, y es reversible, que es la ventaja frente a la cirugía.",
        },
        {
          q: "¿Cuándo veré el resultado?",
          a:
            "El movimiento empieza a suavizarse hacia el segundo o tercer día y el efecto completo está a los 10–14 días. Cualquier " +
            "irregularidad antes de eso normalmente todavía está en evolución.",
        },
        {
          q: "¿Qué pasa si lo dejo?",
          a:
            "El músculo recupera su actividad anterior en unos meses y las líneas vuelven a donde estaban. No hay un empeoramiento de rebote, " +
            "aunque las líneas suprimidas durante años pueden parecer más marcadas al principio.",
        },
        {
          q: "¿Se puede combinar con relleno?",
          a:
            "A menudo sí: toxina para el movimiento, relleno para el volumen, y con frecuencia se hacen en la misma visita. El orden y el " +
            "momento los decide el profesional, porque ambos cambian cómo se valora la cara.",
        },
      ],
    },
    ctaBand: {
      heading: "Pregunte a un médico si la toxina es la respuesta correcta",
      text:
        "Envíe dos fotografías —frunciendo el ceño y en reposo— y un médico las revisa. Recibe una respuesta honesta sobre si las líneas son " +
        "musculares y qué haría falta si no lo son.",
      button: "Envíe sus fotos",
    },
    disclaimer:
      "Información general, no consejo médico. La toxina botulínica es un medicamento con receta que solo se administra tras una consulta " +
      "con un profesional cualificado; la idoneidad y la dosis varían de un paciente a otro.",
    seoTitle: "Bótox facial en Estambul: entrecejo, frente y ojos",
    seoDesc:
      "Bótox facial en Estambul: 15–30 minutos, efecto completo a los 10–14 días, 3–4 meses de duración, dosis por zona y riesgos reales.",
  },
};
