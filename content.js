/* ==========================================================================

   HUBTOBER — DAILY CONTENT            >>>  EDIT HERE EVERY DAY  <<<

   This is the only file that changes from day to day.
   index.html reads it and builds the page.

   HOW IT WORKS
   - Every published day is one block { ... } inside "days".
   - The block with the HIGHEST day number is shown as today's HUBTOBER.
     Its number also drives the day strip in the hero: earlier days are
     filled in, today is the tall box, later days stay empty.
   - Every other block is listed under "التجارب السابقة" at the end of the
     page (newest first). Visitors can open each one to read it in full.

   EVERY DAY
   1. Copy the template below.
   2. Paste it as a new block at the TOP of "days" and fill it in.
   3. Save, then commit and push with GitHub Desktop (see README.md).

   IMPORTANT
   - DO NOT delete or overwrite older days. Only add the new one on top.
     Yesterday moves down to "التجارب السابقة" by itself.
   - Never add a day before its date. Whatever is in this file is public.
   - A day with nothing to show gets no block: skip its number
     (Day 08 was a rest day; Days 10 and 11 have no block either).
   - Keep the quotes "..." and the comma after each line.

   FIELDS
   - label            the heading beside the big number while the day is
                      today, e.g. "شيء جرّبه اليوم" / "شيء اقرأه اليوم".
   - type             one short word shown in the previous list,
                      e.g. جرّب / مقال / بودكاست / فيلم / أداة.
   - descriptionLabel the label of the first row. "" means no label: the
                      description then opens the day like an intro paragraph.
   - description      one text "…", or several paragraphs ["…", "…"].
   - credits          optional names shown under the title, e.g.
                      ["WHY Production", "Ali Jaber — Videographer"]. The first
                      one is the filled chip. [] or leaving it out hides them.
   - noteTitle/noteText   optional small card under the description. "" hides it.
   - rows             optional extra rows between the description and the
                      "why" row. Each one is { label: "…", content: [ … ] }.
                      Leave it out when a day does not need any.
   - why              one text "…", or a list like description.
   - takeaways        a few short lines.
   - examples         optional list of starting ideas. [] hides the whole row.
   - closing          optional last line under the day. "" hides it. With two
                      lines ["…", "…"] the last one is the strong one.

   INSIDE description, why AND A ROW'S content, besides plain "…" paragraphs:
       { headline: "…" }     the big line of the day (for example the question)
       { statement: "…" }    a strong line
       { steps: [ { name: "…", text: "…" }, … ] }   numbered, easy to scan
                             (a step's text can itself be a list of blocks)
       { list: [ "…", "…" ] }                       short lines with a dash
       { tools: [ { name: "…", fit: "…", text: "…",
                    howLabel: "…", how: [ "…" ],
                    ctaText: "…", url: "https://…" }, … ] }
                             numbered apps / tools, each with its own small
                             button that opens its link in a new tab (Day 13)
   Day 06 below uses all four. A line break inside a text is written \n,
   \u00a0 is a space that never breaks (keeps "voice\u00a0notes" together),
   and **two stars on each side** make a few words bold.
   - url              "https://…" shows a button that opens the link in a
                      new tab. "" means no button (for a do-it-yourself day).

   TEMPLATE (copy from the opening { to the closing }, )

    {
      day: 14,
      date: "14 أكتوبر 2026",
      label: "شيء اسمعه اليوم",
      type: "بودكاست",
      titleLabel: "عنوان اليوم",
      title: "…",
      descriptionLabel: "نبذة",
      description: "…",
      noteTitle: "",
      noteText: "",
      whyLabel: "ليش اخترنا هاي الحلقة؟",
      why: "…",
      takeawaysLabel: "شنو ممكن نطلع منها؟",
      takeaways: [
        "…",
        "…",
        "…"
      ],
      examplesLabel: "",
      examples: [],
      examplesNote: "",
      closing: "",
      ctaText: "يلا نسمع",
      url: "https://…"
    },

   ========================================================================== */

const HUBTOBER = {

  totalDays: 31,   // days in the campaign (drives the day strip in the hero)

  days: [

    /* ---------------------------- DAY 13 ---------------------------- */
    {
      day: 13,                                  // Day number
      date: "13 أكتوبر 2026",                   // Date shown next to the day
      label: "اليوم ويا فريق Tafa3ul Media — Baghdad",   // Heading beside the big number
      type: "ويا فريق Tafa3ul Media — Baghdad",          // Short words for the previous list
      titleLabel: "",                           // No small label above the title today
      title: "خلي اللغة جزء من استخدامك اليومي للموبايل.",   // Title

      // Who this day comes from (shown under the title)
      credits: ["Tafa3ul Media — Baghdad", "Hussam Haider"],

      // Opening text (no label)
      descriptionLabel: "",
      description: [
        "اليوم حسام حيدر من فريق **Tafa3ul Media — Baghdad** شارك ويانا 4 تطبيقات ممكن تساعدك تطور لغتك من موبايلك.",
        "بس الفكرة مو تنزلهم كلهم وتستخدمهم يومين وتتركهم.",
        "كل تطبيق يفيدك بطريقة مختلفة، فاختار الي يناسب الشي الي تريد تطوره وخليه جزء صغير من يومك."
      ],

      noteTitle: "",
      noteText: "",

      rows: [
        {
          label: "",                            // the four apps, no label
          content: [
            { tools: [
              {
                name: "Airlearn",
                fit: "إذا تريد تتعلم بخطوات قصيرة وتفاعلية.",
                text: "بيه دروس وتمارين قصيرة تساعدك تتعلم وتراجع اللغة بطريقة خفيفة وتفاعلية.",
                howLabel: "شلون تستمر عليه؟",
                how: [
                  "خليه جزء من وقت صغير ثابت بيومك، حتى لو 10\u00a0دقايق.",
                  "لا تنتظر يصير عندك وقت طويل حتى تتعلم."
                ],
                ctaText: "جرّبه",
                url: "https://airlearn.com/"
              },
              {
                name: "Busuu",
                fit: "إذا تريد تتعلم بمسار أوضح ومنظم أكثر.",
                text: "يفيدك إذا تحب تمشي باللغة خطوة بخطوة وتشتغل على القراءة، الكتابة، الاستماع والمحادثة.",
                howLabel: "شلون تستمر عليه؟",
                how: [
                  "حدد المستوى أو الهدف الي تريد توصله، وامشِ بالدروس بالتسلسل بدل ما تتنقل عشوائي."
                ],
                ctaText: "جرّبه",
                url: "https://www.busuu.com/"
              },
              {
                name: "Duolingo",
                fit: "إذا مشكلتك الأساسية هي الاستمرار.",
                text: "دروسه قصيرة وطريقته أقرب للعبة، فمفيد حتى تخلي ممارسة اللغة عادة يومية بدون ما تحس إنك داخل جلسة دراسة طويلة.",
                howLabel: "شلون تستمر عليه؟",
                how: [
                  "حدد وقت صغير جداً كل يوم وحافظ عليه.",
                  "درس يومياً أفضل من حماس قوي أول أسبوع وبعدين توقف."
                ],
                ctaText: "جرّبه",
                url: "https://www.duolingo.com/"
              },
              {
                name: "Tandem",
                fit: "إذا تعرف كلمات وقواعد، بس تحتاج تستخدم اللغة صدگ.",
                text: "Tandem يربطك بأشخاص يتكلمون اللغة الي تريد تتعلمها، وتكدر تتمرن وياهم بالـ text، voice\u00a0notes أو المكالمات.",
                howLabel: "شلون تستمر عليه؟",
                how: [
                  "لا تنتظر لغتك تصير perfect حتى تبدأ تحچي.",
                  "اختار شخص أو اثنين وخلي عندك محادثة بسيطة ومستمرة وياهم."
                ],
                ctaText: "جرّبه",
                url: "https://tandem.net/"
              }
            ] }
          ]
        },
        {
          label: "شنو نريد نطلع من اليوم؟",
          content: [
            "مو لازم تطبيق واحد يسوي لك كلشي.",
            "ممكن تستخدم واحد حتى تبني عادة، واحد حتى تمشي بمنهج، وواحد حتى تحچي وي ناس حقيقيين.",
            "المهم تعرف **شنو تريد تطور باللغة** وبعدين تختار الأداة على هذا الأساس."
          ]
        }
      ],

      whyLabel: "",
      why: "",
      takeawaysLabel: "",
      takeaways: [],
      examplesLabel: "",
      examples: [],
      examplesNote: "",

      // Closing statement: the strongest line at the end of the day
      closing: "مو المهم شكد تطبيق عندك، المهم شكد فعلاً تستخدمه.",

      ctaText: "",
      url: ""                                   // No main button: each app has its own
    },

    /* ---------------------------- DAY 12 ---------------------------- */
    /* (No blocks for Days 10 and 11.)                                     */
    {
      day: 12,                                  // Day number
      date: "12 أكتوبر 2026",                   // Date shown next to the day
      label: "اليوم ويا فريق WHY",              // Heading beside the big number
      type: "ويا فريق WHY",                     // Short words for the previous list
      titleLabel: "",                           // No small label above the title today
      title: "لا تصور أكثر… صوّر أذكى.",          // Title

      // Who this day comes from (shown under the title)
      credits: ["WHY Production", "Ali Jaber — Videographer"],

      // Opening text (no label)
      descriptionLabel: "",
      description: [
        "اليوم HUBTOBER جاي من فريق **WHY Production**.",
        "علي جابر، مصور فيديو، شارك ويانا واحدة من أكثر الأخطاء الي تواجه المصورين بالتغطيات:",
        "إنك تاخذ فريمات هواي وبشكل عشوائي، وبعدين من توصل للـ edit تكتشف إن عندك كمية كبيرة من اللقطات بس مو بالضرورة تعرف شنو تستخدم، وين تستخدمه، أو حتى ليش أخذته من البداية.",
        "وهنا يصير الـ edit أطول، أصعب، ومليان تردد."
      ],

      noteTitle: "",
      noteText: "",

      rows: [
        {
          label: "",                            // the idea, no label
          content: [
            "الفكرة الي يريد يوصلها بسيطة:",
            { headline: "لا تاخذ لقطات أكثر، خذ لقطات مدروسة." },
            "قبل لا تصور، اعرف الفريم الي تريده.",
            "اختار اللقطة صح، صورها صح، وخلي كل shot عنده سبب.",
            "من توصل للـ edit، راح تكون حافظ الفريمات الي أخذتها، تعرف شنو عندك، وليش أخذته، ووين ممكن تستخدمه.",
            "وهذا يخلي شغلك أسرع وأوضح من البداية للنهاية."
          ]
        },
        {
          label: "شنو نتعلم من هالشي؟",
          content: [
            { list: [
              "مو عدد اللقطات هو الي يخلي التغطية أقوى.",
              "كل frame لازم يكون عنده هدف.",
              "التخطيط قبل التصوير يوفر وقت كبير بالـ edit.",
              "اللقطات القليلة والمدروسة أحسن من كمية كبيرة عشوائية.",
              "كلما كنت واعي بالـ shot وأنت تصوره، كلما صار الـ edit أسهل عليك."
            ] }
          ]
        },
        {
          label: "الخلاصة",
          content: [
            { headline: "فكر بالفريم قبل لا تضغط Record." },
            "صوّر أقل، بس اعرف ليش جاي تصور كل لقطة."
          ]
        }
      ],

      whyLabel: "",
      why: "",
      takeawaysLabel: "",
      takeaways: [],
      examplesLabel: "",
      examples: [],
      examplesNote: "",
      closing: "",

      /* >>> VIDEO LINK ------------------------------------------------------
         Paste the link to Ali's video / story between the quotes below
         (it must start with https://). Until then the url stays "" and the
         "شوف نصيحة علي كاملة" button is simply not shown.                   */
      ctaText: "شوف نصيحة علي كاملة",
      url: ""
    },

    /* ---------------------------- DAY 09 ---------------------------- */
    /* (Day 08 was a rest day: no block, nothing to show.)                 */
    {
      day: 9,                                   // Day number
      date: "9 أكتوبر 2026",                    // Date shown next to the day
      label: "شيء اسمعه اليوم",                 // Heading beside the big number
      type: "بودكاست",                          // Short word for the previous list
      titleLabel: "حلقة اليوم",                 // Small label above the title
      title: "ليش الموظف العراقي منهك نفسياً؟ مع د. حسن الشمّاع",   // Episode title

      // Opening line (no label), shown as a strong statement
      descriptionLabel: "",
      description: [
        { statement: "جمعة وويكند، فاليوم ما عدنا شي نسويه أو نجربه.\nبس عدنا حلقة نعتقد تستاهل تنسمع بهدوء." }
      ],

      noteTitle: "",
      noteText: "",

      // About the episode, and why it feels right for now (no labels: a calm read)
      rows: [
        {
          label: "",
          content: [
            "الحلقة تحچي عن علاقتنا بالشغل والإنجاز، وشلون تغير مفهومنا تجاه العمل بمرور الوقت، وكِمنا مرات نربط قيمتنا كبشر بشكد ننجز، شكد نشتغل، وشكد نحقق مهنياً.",
            "ليش نحس بالذنب من نرتاح؟\nوليش الإنجاز صار جزء كبير من الطريقة الي نقيس بيها نفسنا؟\nوشنو تأثير هالشي على صحتنا النفسية؟",
            "خصوصاً بهالفترة، ويا الضغط والقلق الاقتصادي وارتفاع الدولار وكل الأشياء الي جاي تصير حوالينا، يمكن هاي من أحسن الحلقات الي نسمعها بهذا الويكند.",
            "حلقة تخلينا نوقف شوي ونراجع علاقتنا بالشغل، بالإنجاز، وبقيمتنا بعيداً عن الاثنين."
          ]
        }
      ],

      // No "why" / takeaways / examples / closing today: it is a weekend listen
      whyLabel: "",
      why: "",
      takeawaysLabel: "",
      takeaways: [],
      examplesLabel: "",
      examples: [],
      examplesNote: "",
      closing: "",

      ctaText: "اسمع الحلقة",                   // Button text
      url: "https://youtu.be/bsf_UsW4K_k?si=Hw06fw_r8ZKJP9Zf"   // Opens in a new tab
    },

    /* ---------------------------- DAY 07 ---------------------------- */
    {
      day: 7,                                   // Day number
      date: "7 أكتوبر 2026",                    // Date shown next to the day
      label: "شيء جرّبه اليوم",                 // Heading beside the big number
      type: "جرّب",                             // Short word for the previous list
      titleLabel: "تمرين اليوم",                // Small label above the title
      title: "شنو تشوف غير الي موجود؟",         // Title

      // Opening text (no label)
      descriptionLabel: "",
      description: [
        "مرات نشوف غيمة ونحسها تشبه حيوان،\nأو نشوف نقش بالكاشي ونطلع منه وجه أو شكل،\nأو نمر على باب قديم ونحس وراه قصة كاملة.",
        "اليوم جرّب تنتبه لهاللحظات، وارجع غوص بمخيلتك مثل ما جنت تسوي وإنت طفل، من جان أي شي بسيط ممكن يتحول براسك لشي ثاني تماماً."
      ],

      noteTitle: "",
      noteText: "",

      // Extra rows for this day
      rows: [
        {
          label: "المطلوب:",
          content: [
            "اختار أي شي موجود حواليك ولفت نظرك.",
            "ممكن يكون:",
            { list: [
              "غيمة",
              "ظل",
              "نقش بالكاشي أو السيراميك",
              "جدار",
              "شجرة",
              "بقعة ضوء",
              "قطعة أثاث",
              "شكل عشوائي بالطريق",
              "أو أي شي يخليك تشوف أكثر من الشي الموجود فعلياً"
            ] },
            "وخذله صورة."
          ]
        },
        {
          label: "وبعدين اختار وحدة من طريقتين:",
          content: [
            { steps: [
              { name: "ارسم الي تخيلته",
                text: [
                  "ارسم فوق الصورة مباشرة شنو شفت بيها.",
                  "إذا شفت وجه، شخصية، مخلوق، مكان، أو أي شكل ثاني، كمله بطريقتك.",
                  "مو مهم الرسم يكون حلو أو احترافي.\nالمهم تبين شنو خيالك شاف."
                ] },
              { name: "احچي القصة الي اجت ببالك",
                text: [
                  "إذا الشي خلاك تتخيل قصة بدل شكل، خذ الصورة واكتب وياها كم سطر عن القصة الي اجت ببالك.",
                  { list: [
                    "منو موجود بيها؟",
                    "شنو صار؟",
                    "وين ممكن يكون هذا المكان؟",
                    "وشنو بالشي خلاك تتخيل هاي القصة أصلاً؟"
                  ] }
                ] }
            ] }
          ]
        }
      ],

      // Why we are doing it
      whyLabel: "ليش نسويها؟",
      why: [
        "لأن الخيال ينقذنا بهواي مواقف، ونحتاجه تقريباً بكل مرحلة من حياتنا.",
        "هو الي يخلينا نربط بين أشياء يمكن ما بينها علاقة واضحة، نشوف احتمالات أكثر، ونطلع بأفكار ما جانت موجودة كدامنا من البداية.",
        "ومرات حتى نرجع نحرك خيالنا، كل الي نحتاجه هو نوقف شوي ونشوف الشي العادي بطريقة مختلفة."
      ],

      // What we can get from it
      takeawaysLabel: "شلون هالشي ممكن يفيدنا؟",
      takeaways: [
        "ننتبه أكثر للتفاصيل الي عادة نتجاوزها.",
        "ندرب خيالنا نطلع أشكال وقصص من أشياء بسيطة.",
        "نتمرن نشوف أكثر من احتمال لنفس الشي.",
        "نكتشف شلون نفس الصورة ممكن كل شخص يشوف بيها شي مختلف.",
        'نرجع نستخدم خيالنا بدون ما نفكر إذا النتيجة "صح" أو "غلط".'
      ],

      examplesLabel: "",
      examples: [],
      examplesNote: "",

      // Closing statement
      closing: "شوف الشي مثل ما خيالك يريد يشوفه.",

      ctaText: "",                              // Button text (only used with a url)
      url: ""                                   // No link today: it is something to do
    },

    /* ---------------------------- DAY 06 ---------------------------- */
    {
      day: 6,                                   // Day number
      date: "6 أكتوبر 2026",                    // Date shown next to the day
      label: "شيء جرّبه اليوم",                 // Heading beside the big number
      type: "جرّب",                             // Short word for the previous list
      titleLabel: "تمرين اليوم",                // Small label above the title
      title: "نفس السؤال، بثلاث أماكن مختلفة.", // Title

      // What to do
      descriptionLabel: "شنو تسوي؟",
      description: [
        "اليوم راح نجرب نبحث، بس مو لحتى نطلع بجواب سريع.",
        "راح ناخذ نفس السؤال ونبحث عليه بأكثر من مكان حتى نشوف شلون كل مصدر ينطينا الموضوع من زاوية مختلفة."
      ],

      noteTitle: "",
      noteText: "",

      // Extra rows for this day
      rows: [
        {
          label: "سؤال اليوم:",
          content: [
            { headline: "هل العمل من البيت يخلي الناس أكثر إنتاجية لو أقل؟" }
          ]
        },
        {
          label: "ابحث عن السؤال بثلاث أماكن:",
          content: [
            { steps: [
              { name: "Google",
                text: "دور على مقال، دراسة، تقرير، أو أرقام تتكلم عن الموضوع." },
              { name: "Reddit",
                text: "اقره عن تجارب الناس الي اشتغلوا من البيت فعلياً. بشنو فادهم؟ وشنو المشاكل الي واجهوها؟" },
              { name: "YouTube أو Substack",
                text: "دور على شخص يناقش الموضوع بشكل أعمق، يشرح رأيه أو يحلل التجربة من زوايا مختلفة." }
            ] },
            "البحث مايحتاج يطول ساعات. ممكن تاخذ تقريباً 5 دقايق بكل مكان، وتشوف شنو يطلع لك."
          ]
        },
        {
          label: "لا تدور على الجواب بس.",
          content: [
            "خلي عملية البحث تكون دقيقة بالملاحظة.",
            { list: [
              "شنو عرفت من Google بس مالكيته بـ Reddit؟",
              "وشنو عرفته من تجارب الناس وما جان موجود بالدراسات والمقالات؟",
              "وهل التحليل أو الرأي خلاك تشوف الموضوع بطريقة ثانية؟"
            ] }
          ]
        },
        {
          label: "وبالنهاية اسأل نفسك:",
          content: [
            { list: [
              "هل تغير جوابك بعد ما بحثت بأكثر من مكان؟",
              "وإذا جان عندك سؤال مشابه بالمستقبل، وين راح تدور أول شي؟ وليش؟"
            ] }
          ]
        }
      ],

      // Why we are doing it
      whyLabel: "ليش نسويها؟",
      why: [
        "لأن البحث مو بس كتابة السؤال وأخذ أول جواب يطلع.",
        "مرات تحتاج أرقام ودراسات، ومرات تحتاج تجربة شخص عاش الموضوع، ومرات تحتاج أحد يحلل لك الصورة الأكبر.",
        "المصدر الي تختاره يغير المعرفة الي راح تكتسبها.",
        "ولهذا جزء مهم من البحث هو:",
        { statement: "وين تدور؟" }
      ],

      // What we can get from it
      takeawaysLabel: "شنو ممكن نطلع منها؟",
      takeaways: [
        "نفرق بين المعلومة، التجربة، والرأي.",
        "نعرف إن مو كل سؤال ينبحث بنفس المكان.",
        "نتعود ما نعتمد على أول نتيجة تطلع لنا.",
        "نتعلم نستخدم Google وReddit وYouTube وSubstack كأدوات بحث، مو بس أماكن نتصفح بيها.",
        "نشوف الموضوع من أكثر من زاوية قبل ما نكون رأينا."
      ],

      examplesLabel: "",
      examples: [],
      examplesNote: "",

      // Closing statement: the last line is the strong one
      closing: [
        "مو الهدف توصل للجواب الصح.",
        "الهدف تعرف شلون تبحث بطريقة أفضل."
      ],

      ctaText: "",                              // Button text (only used with a url)
      url: ""                                   // No link today: it is something to do
    },

    /* ---------------------------- DAY 05 ---------------------------- */
    {
      day: 5,                                   // Day number
      date: "5 أكتوبر 2026",                    // Date shown next to the day
      label: "شيء جرّبه اليوم",                 // Heading beside the big number
      type: "جرّب",                             // Short word for the previous list
      titleLabel: "تمرين اليوم",                // Small label above the title
      title: "خلّي شي يسوي شغلة مو شغلته.",     // Title

      // What to do
      descriptionLabel: "شنو تسوي؟",
      description: [
        "اختار أي غرض موجود يمك، وانطِه وظيفة جديدة.",
        "ممكن يكون كوب، مشبك، ورقة، علبة، كارتونة، رباط، أو أي شي موجود حواليك.",
        "لا تشتري شي، ولا تدور على فكرة جاهزة. استخدم الموجود، فكر بطريقة مختلفة، وجرب فكرتك بإيدك.",
        "مو مهم تطلع النتيجة مثالية، المهم تشوف الشي بطريقة ما فكرت بيها قبل."
      ],

      // Optional small card under the description ("" + "" hides it)
      noteTitle: "",
      noteText: "",

      // Why we are doing it
      whyLabel: "ليش نسويها؟",
      why: "مرات الإبداع مو إنك تخترع شي جديد من الصفر. مرات كل اللي تحتاجه إنك تشوف الشي الموجود قدامك بطريقة ثانية. هذا التمرين يخليك تطلع شوي من الاستخدامات والأفكار المعتادة، وتجرب تحل شي بسيط بالموجود حواليك.",

      // What we can get from it (2–4 short lines)
      takeawaysLabel: "شنو ممكن نطلع منها؟",
      takeaways: [
        "نشوف الأشياء بطريقة مختلفة.",
        "نتمرن على إيجاد أكثر من استخدام لنفس الشي.",
        "نجرب فكرة بإيدنا بدل ما تبقى بس براسنا.",
        "نكتشف إن الحل مو دائماً يحتاج أدوات أو موارد جديدة."
      ],

      // Optional starting ideas ([] hides the row)
      examplesLabel: "إذا محتار منين تبدأ:",
      examples: [
        "مشبك ورق يصير حامل للموبايل.",
        "كوب يصير منظم لأغراض صغيرة.",
        "كارتونة تتحول لستاند.",
        "ورقة تطويها وتسوي منها شي عملي.",
        "غرض موجود على مكتبك تستخدمه بطريقة ثانية تماماً."
      ],
      examplesNote: "هاي بس أمثلة حتى تبدأ. مو لازم تسوي مثلها.",

      closing: "جربتها؟ شوفنا شسويت.",          // Last line under the day
      ctaText: "",                              // Button text (only used with a url)
      url: ""                                   // No link today: it is something to do
    },

    /* ---------------------------- DAY 04 ---------------------------- */
    {
      day: 4,
      date: "4 أكتوبر 2026",
      label: "شيء اقرأه اليوم",
      type: "مقال",
      titleLabel: "عنوان اليوم",
      title: "ركن المصمّم: مع ريان عبد الله",

      descriptionLabel: "نبذة",
      description: "حوار مع المصمم العراقي ريان عبد الله عن طريقه للتصميم، وشلون يشوف الثقافة البصرية ووضع التصميم بالعالم العربي. وبيه كلام صريح: ليش المصمم يحتاج وقت ومساحة حتى يفكر ويبحث ويحل المشكلة؟",

      noteTitle: "منو ريان عبد الله؟",
      noteText: "مصمّم غرافيك وتايبوغرافي عراقي ألماني، من مواليد الموصل 1957، درس التواصل البصري ببرلين. اشتغل بألمانيا على مشاريع هوية كبيرة، منها شغل يخص النسر الاتحادي الألماني وهوية النقل العام ببرلين وفولكسفاغن وبوغاتي، وبعدها صار أستاذ تايبوغرافي واسم مهم بتعليم التصميم.",

      whyLabel: "ليش اخترنا هذا المقال؟",
      why: "كل يوم نتعامل مع التصميم بدون ما نفكر: منو صمّم هذا الشي؟ ليش شكله هيج؟ وشكد تفكير اكو وراه؟ هذا المقال يخلينا نشوف التصميم بعيون شخص اشتغل عقود بهذا المجال، ونفهم إن التصميم مو بس شي حلو. بيه بحث، تفكير، تواصل، ثقافة، هوية، وحل مشاكل.",

      takeawaysLabel: "شنو ممكن نطلع منه؟",
      takeaways: [
        "نشوف التصميم كطريقة تفكير، مو بس شكل حلو.",
        "نفكر أكثر بعلاقة التصميم بالثقافة والهوية.",
        "نفهم ليش المصمم يحتاج وقت للبحث والتجربة قبل التنفيذ.",
        "نتعرف على تجربة مصمم عراقي قدر يبني مسيرة عالمية."
      ],

      examplesLabel: "",
      examples: [],
      examplesNote: "",
      closing: "",

      ctaText: "يلا نقرأ",
      // Encoded form of https://www.aajeg.com/ركن-المصمّم-مع-ريان-عبد-الله
      url: "https://www.aajeg.com/%D8%B1%D9%83%D9%86-%D8%A7%D9%84%D9%85%D8%B5%D9%85%D9%91%D9%85-%D9%85%D8%B9-%D8%B1%D9%8A%D8%A7%D9%86-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%84%D9%87"
    }

    /* Days 01–03: add their blocks below Day 04 (same shape) when the content
       is ready, and they will join "التجارب السابقة". The day strip already
       marks them as completed. */

  ]

};
/* ====================== END OF DAILY CONTENT ====================== */
