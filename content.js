/* ==========================================================================

   HUBTOBER — DAILY CONTENT            >>>  EDIT HERE EVERY DAY  <<<

   This is the only file that changes from day to day.
   index.html reads it and builds the page.

   HOW IT WORKS
   - Every published day is one block { ... } inside "days".
   - The block with the HIGHEST day number is shown as today's HUBTOBER.
     Its number also drives the day strip in the hero: earlier days are
     filled in, today is the tall box, later days stay empty.
   - All other blocks move automatically to "الأيام السابقة" (newest first).
   - If there is only one block, the previous-days section stays hidden.

   EVERY DAY
   1. Copy the template below.
   2. Paste it as a new block at the top of "days" and fill it in.
   3. Save, then commit and push with GitHub Desktop (see README.md).

   IMPORTANT
   - Never add a day before its date. Whatever is in this file is public.
   - Keep the quotes "..." and the comma after each line.
   - To take a day off the site completely, delete its whole block.

   FIELDS
   - description      one text "…", or several paragraphs ["…", "…"].
   - noteTitle/noteText   optional small card under the description. "" hides it.
   - takeaways        2 to 4 short lines.
   - examples         optional list of starting ideas. [] hides the whole row.
   - url              "https://…"  opens that link in a new tab
                      "#share"     scrolls down to the مشاركاتكم form
                      ""           no button

   TEMPLATE (copy from the opening { to the closing }, )

    {
      day: 6,
      date: "6 أكتوبر 2026",
      type: "بودكاست",
      titleLabel: "عنوان اليوم",
      title: "…",
      descriptionLabel: "نبذة",
      description: "…",
      noteTitle: "",
      noteText: "",
      whyLabel: "ليش اخترنا هذي الحلقة؟",
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
      ctaText: "يلا نسمع",
      url: "https://…"
    },

   ========================================================================== */

const HUBTOBER = {

  totalDays: 31,   // days in the campaign (drives the day strip in the hero)

  days: [

    /* ---------------------------- DAY 05 ---------------------------- */
    {
      day: 5,                                   // Day number
      date: "5 أكتوبر 2026",                    // Date shown next to the day
      type: "جرّب",                             // Content type: مقال / بودكاست / فيلم / موقع / أداة / جرّب …
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
      examplesNote: "هذي بس أمثلة حتى تبدأ. مو لازم تسوي مثلها.",

      ctaText: "جربتها؟ ورّينا",                // Button text
      url: "#share"                             // Scrolls down to the مشاركاتكم form
    }

    /* Days 01–04 have no blocks here, so nothing from them is shown.
       The day strip still marks them as completed. */

  ],

  /* ---------------------------- مشاركاتكم ----------------------------
     Where the participation form sends what people submit.
     These two values come from the Supabase project (Project Settings →
     API). The key is a public one: it is safe to keep it in this file,
     because the database only lets visitors ADD a submission, never read.
     While either value is empty, the مشاركاتكم section stays hidden, so
     the site never shows a form that cannot send.                        */
  submissions: {
    supabaseUrl: "",                 // looks like  https://abcdefgh.supabase.co
    supabaseKey: "",                 // the "publishable" (or "anon public") key
    bucket: "hubtober-submissions",  // private image folder (created by supabase/setup.sql)
    table: "submissions"             // table name (created by supabase/setup.sql)
  }

};
/* ====================== END OF DAILY CONTENT ====================== */
