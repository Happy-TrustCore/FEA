/**
 * FEA assistant — knowledge base (plain JavaScript, no build step).
 *
 * This is the only text that does not live directly in the HTML pages, because
 * the assistant appears on all six pages and the answers must stay in one
 * place. Edit the wording here; keywords may be written in any of the four
 * languages and are all checked on every message.
 */
window.FEA_CHAT = {
  greeting: {
    de: 'Hallo! Ich bin der FEA-Assistent. Frag mich nach Stipendien, Universitäten, Ausbildung, kostenlosen Kursen oder Deutschlernen — auf Deutsch, Englisch, Dari oder Arabisch.',
    en: 'Hello! I am the FEA assistant. Ask me about scholarships, universities, Ausbildung, free courses or learning German — in German, English, Dari or Arabic.',
    fa: 'سلام! من دستیار FEA هستم. دربارهٔ بورسیه، پوهنتون، آموزش مسلکی، کورس‌های رایگان یا یادگیری آلمانی از من بپرسید — به آلمانی، انگلیسی، دری یا عربی.',
    ar: 'مرحبًا! أنا مساعد FEA. اسألني عن المنح والجامعات والتدريب المهني والدورات المجانية أو تعلّم الألمانية — بالألمانية أو الإنجليزية أو الدرية أو العربية.'
  },

  fallback: {
    de: 'Dazu habe ich noch keine gespeicherte Antwort. Probiere eines der Themen unten oder schreib uns über die Kontaktseite — eine echte Person antwortet dir.',
    en: 'I do not have a saved answer for that yet. Try one of the topics below, or write to us on the contact page — a real person will answer you.',
    fa: 'برای این پرسش هنوز پاسخ ذخیره‌شده ندارم. یکی از موضوعات زیر را امتحان کنید یا از صفحهٔ تماس برای ما بنویسید — یک انسان واقعی پاسخ می‌دهد.',
    ar: 'ليس لديّ إجابة محفوظة عن ذلك بعد. جرّب أحد المواضيع أدناه، أو اكتب لنا من صفحة الاتصال — سيجيبك إنسان حقيقي.'
  },

  intents: [
    {
      id: 'greeting',
      keywords: ['hello', 'hi ', 'hey', 'hallo', 'guten tag', 'guten morgen', 'سلام', 'درود', 'مرحبا', 'السلام', 'اهلا'],
      answer: {
        de: 'Hallo und willkommen! Wobei kann ich dir heute helfen? Frag gerne nach Stipendien, Universitäten, Ausbildung, kostenlosen Kursen oder Deutsch.',
        en: 'Hello and welcome! How can I help with your education today? You can ask about scholarships, universities, Ausbildung, free courses or German.',
        fa: 'سلام و خوش آمدید! امروز در چه موردی می‌توانم کمک کنم؟ دربارهٔ بورسیه، پوهنتون، آموزش مسلکی، کورس‌های رایگان یا زبان آلمانی بپرسید.',
        ar: 'أهلًا وسهلًا! كيف يمكنني مساعدتك في تعليمك اليوم؟ اسأل عن المنح أو الجامعات أو التدريب المهني أو الدورات المجانية أو الألمانية.'
      }
    },
    {
      id: 'scholarship',
      keywords: ['scholarship', 'grant', 'funding', 'stipendium', 'stipendien', 'förderung', 'بورس', 'بورسیه', 'منحة', 'منح'],
      answer: {
        de: 'Stipendien sind für viele der schnellste Weg. Beginne mit der DAAD-Datenbank für Deutschland, dem Deutschlandstipendium, wenn du bereits an einer deutschen Hochschule studierst, und dem Hilde-Domin-Programm, wenn deine Bildung im Herkunftsland gefährdet ist. Filtere auf der Seite „Möglichkeiten" nach „Stipendium".',
        en: 'Scholarships are the fastest route for many students. Start with the DAAD database for Germany, the Deutschlandstipendium if you already study at a German university, and the Hilde Domin Programme if your education is at risk in your home country. Open the Opportunities page and filter by "Scholarship".',
        fa: 'بورسیه برای بسیاری از محصلان سریع‌ترین راه است. از بانک معلومات DAAD برای آلمان شروع کنید، اگر همین حالا در یک پوهنتون آلمان درس می‌خوانید Deutschlandstipendium را ببینید، و اگر تحصیل شما در کشورتان در خطر است برنامهٔ Hilde Domin را بررسی کنید. در صفحهٔ «فرصت‌ها» فلتر «بورسیه» را انتخاب کنید.',
        ar: 'المنح أسرع طريق لكثير من الطلاب. ابدأ بقاعدة بيانات DAAD لألمانيا، وبـ Deutschlandstipendium إن كنت تدرس بالفعل في جامعة ألمانية، وببرنامج Hilde Domin إن كان تعليمك مهدّدًا في بلدك. افتح صفحة «الفرص» ورشّح حسب «منحة».'
      }
    },
    {
      id: 'ausbildung',
      keywords: ['ausbildung', 'apprentice', 'vocational', 'lehrstelle', 'azubi', 'مسلکی', 'کارآموزی', 'تدريب مهني', 'مهني'],
      answer: {
        de: 'Eine Ausbildung ist eine bezahlte Berufsausbildung in Deutschland: Du arbeitest im Betrieb und besuchst die Berufsschule. Sie dauert meist 2 bis 3,5 Jahre, und du verdienst ab dem ersten Monat. Üblicherweise brauchst du Deutsch auf B1–B2 und einen Schulabschluss. Suche im Portal der Bundesagentur für Arbeit oder in der IHK-Lehrstellenbörse.',
        en: 'An Ausbildung is paid vocational training in Germany: you work in a company and attend a vocational school. It usually takes 2–3.5 years and you earn a salary from the first month. You normally need German at B1–B2 and a school certificate. Search on the portal of the Bundesagentur für Arbeit or the IHK Lehrstellenbörse.',
        fa: 'Ausbildung آموزش مسلکی معاش‌دار در آلمان است: در یک شرکت کار می‌کنید و به مکتب مسلکی می‌روید. معمولاً ۲ تا ۳.۵ سال طول می‌کشد و از ماه اول معاش می‌گیرید. معمولاً به آلمانی سطح B1–B2 و سند مکتب نیاز دارید. در پورتال ادارهٔ فدرال کار یا بازار IHK جستجو کنید.',
        ar: 'الـ Ausbildung تدريب مهني مدفوع في ألمانيا: تعمل في شركة وتدرس في مدرسة مهنية. يستمر عادةً من سنتين إلى ثلاث سنوات ونصف وتتقاضى راتبًا من الشهر الأول. تحتاج عادةً إلى ألمانية بمستوى B1–B2 وشهادة مدرسية. ابحث في بوابة وكالة العمل الاتحادية أو في سوق أماكن التدريب IHK.'
      }
    },
    {
      id: 'university',
      keywords: ['university', 'study', 'bachelor', 'master', 'uni-assist', 'universität', 'hochschule', 'studium', 'studieren', 'پوهنتون', 'دانشگاه', 'تحصیل', 'جامعة', 'دراسة'],
      answer: {
        de: 'Für ein Studium in Deutschland brauchst du meist ein anerkanntes Schulzeugnis, einen Sprachnachweis (C1 für deutschsprachige Studiengänge, IELTS/TOEFL für englischsprachige) und eine Bewerbung über uni-assist. Wird dein Zeugnis nicht direkt anerkannt, führt der Weg über ein Studienkolleg mit Feststellungsprüfung.',
        en: 'For a German university you usually need a recognised school certificate, a language certificate (C1 for German-taught, IELTS/TOEFL for English-taught) and an application through uni-assist. If your certificate is not directly recognised, the route is a Studienkolleg plus the Feststellungsprüfung.',
        fa: 'برای پوهنتون در آلمان معمولاً به سند مکتب به‌رسمیت‌شناخته‌شده، سند زبان (C1 برای برنامه‌های آلمانی و IELTS/TOEFL برای برنامه‌های انگلیسی) و درخواست از طریق uni-assist نیاز دارید. اگر سند شما مستقیماً پذیرفته نشود، راه شما Studienkolleg و امتحان Feststellungsprüfung است.',
        ar: 'للدراسة في جامعة ألمانية تحتاج عادةً إلى شهادة مدرسية معترف بها، وشهادة لغة (C1 للبرامج بالألمانية، أو IELTS/TOEFL للبرامج بالإنجليزية)، وتقديم عبر uni-assist. وإن لم تُعترف شهادتك مباشرةً، فالطريق هو Studienkolleg ثم امتحان Feststellungsprüfung.'
      }
    },
    {
      id: 'german',
      keywords: ['german', 'learn german', 'language course', 'deutsch', 'deutschkurs', 'sprachkurs', 'integrationskurs', 'آلمانی', 'زبان', 'الألمانية', 'دورة لغة'],
      answer: {
        de: 'Du kannst noch heute kostenlos mit Deutsch beginnen: DW Deutsch lernen deckt A1 bis C1 mit Audio, Video und Übungen ab. Wenn du schon in Deutschland lebst, frag nach einem BAMF-Integrationskurs — er führt bis B1 und ist oft kostenfrei.',
        en: 'You can start German for free today: DW Learn German covers A1 to C1 with audio, video and exercises. If you already live in Germany, ask about a BAMF integration course — it takes you to B1 and is often free of charge.',
        fa: 'همین امروز می‌توانید آلمانی را رایگان شروع کنید: DW Learn German از A1 تا C1 با صوت، ویدیو و تمرین. اگر در آلمان زندگی می‌کنید، دربارهٔ کورس ادغام BAMF بپرسید — تا سطح B1 می‌رسد و اغلب رایگان است.',
        ar: 'يمكنك البدء بالألمانية مجانًا اليوم: يغطي DW Learn German المستويات من A1 إلى C1 بالصوت والفيديو والتمارين. وإن كنت تعيش في ألمانيا، اسأل عن دورة اندماج من BAMF — تصل بك إلى B1 وغالبًا ما تكون مجانية.'
      }
    },
    {
      id: 'free',
      keywords: ['free course', 'online course', 'mooc', 'coursera', 'edx', 'programming', 'kostenlos', 'onlinekurs', 'programmieren', 'کورس رایگان', 'رایگان', 'دورة مجانية', 'مجاني'],
      answer: {
        de: 'Kostenlose Onlinekurse gibt es für jeden Bereich: freeCodeCamp für Programmieren, edX und Coursera im Audit-Modus für Universitätsfächer und DW für Deutsch. Filtere die Seite „Möglichkeiten" nach „Kostenloser Kurs".',
        en: 'Free online courses are available for every field: freeCodeCamp for programming, edX and Coursera in audit mode for university subjects, and DW for German. Filter the Opportunities page by "Free course".',
        fa: 'کورس‌های آنلاین رایگان برای هر رشته موجود است: freeCodeCamp برای برنامه‌نویسی، edX و Coursera در حالت audit برای مضامین پوهنتونی و DW برای آلمانی. در صفحهٔ «فرصت‌ها» فلتر «کورس رایگان» را انتخاب کنید.',
        ar: 'الدورات المجانية متاحة لكل المجالات: freeCodeCamp للبرمجة، وedX وCoursera في وضع audit للمقررات الجامعية، وDW للألمانية. رشّح صفحة «الفرص» حسب «دورة مجانية».'
      }
    },
    {
      id: 'afghanistan',
      keywords: ['afghanistan', 'afghan', 'kabul', 'girls', 'women', 'mädchen', 'frauen', 'افغانستان', 'کابل', 'دختران', 'زنان', 'الفتيات', 'النساء'],
      answer: {
        de: 'Ein großer Teil von FEA ist für Menschen in Afghanistan gedacht, besonders für Mädchen und Frauen. Von zu Hause aus kannst du Onlinekurse beginnen, Deutsch oder Englisch lernen und dich um internationale Stipendien bewerben, etwa an der Asian University for Women oder im Hilde-Domin-Programm. In unseren Telegram- und WhatsApp-Gruppen posten wir täglich neue Möglichkeiten.',
        en: 'A large part of FEA is built for students in Afghanistan, especially girls and women. From home you can start online courses, learn German or English, and apply for international scholarships such as the Asian University for Women or the Hilde Domin Programme. Our Telegram and WhatsApp groups post new opportunities daily.',
        fa: 'بخش بزرگی از FEA برای محصلان افغانستان ساخته شده، به‌ویژه برای دختران و زنان. از خانه می‌توانید کورس‌های آنلاین را شروع کنید، آلمانی یا انگلیسی بیاموزید و برای بورسیه‌های بین‌المللی مانند پوهنتون آسیایی برای زنان یا برنامهٔ Hilde Domin درخواست بدهید. در گروه‌های تلگرام و واتساپ ما هر روز فرصت‌های تازه نشر می‌شود.',
        ar: 'جزء كبير من FEA مبني لطلاب أفغانستان، وخصوصًا الفتيات والنساء. من المنزل يمكنك بدء دورات إلكترونية وتعلّم الألمانية أو الإنجليزية والتقديم على منح دولية مثل الجامعة الآسيوية للنساء أو برنامج Hilde Domin. وتنشر مجموعاتنا على تيليغرام وواتساب فرصًا جديدة يوميًا.'
      }
    },
    {
      id: 'cost',
      keywords: ['cost', 'price', 'pay', 'fee', 'how much', 'kosten', 'preis', 'gebühr', 'bezahlen', 'مصرف', 'قیمت', 'فیس', 'تكلفة', 'رسوم'],
      answer: {
        de: 'Alles bei FEA ist kostenlos: die Website, die Analyse, der Chat, das Mentoring und unsere Beratung in den sozialen Medien. Wir sind gemeinnützig — wir nehmen keine Gebühren und verkaufen niemals deine Daten.',
        en: 'Everything FEA offers is free: the website, the analyzer, the chat, mentoring and our social media guidance. We are a non-profit initiative — we take no fees and we never sell your data.',
        fa: 'همهٔ خدمات FEA رایگان است: ویب‌سایت، تحلیلگر، چت، منتورشیپ و رهنمایی در شبکه‌های اجتماعی. ما غیرانتفاعی هستیم — فیس نمی‌گیریم و هرگز معلومات شما را نمی‌فروشیم.',
        ar: 'كل ما يقدّمه FEA مجاني: الموقع والمحلّل والمحادثة والإرشاد وتوجيهنا على وسائل التواصل. نحن مبادرة غير ربحية — لا نتقاضى رسومًا ولا نبيع بياناتك أبدًا.'
      }
    },
    {
      id: 'analyzer',
      keywords: ['analyzer', 'analyser', 'which pathway', 'recommend', 'analyse', 'welcher weg', 'empfehlung', 'تحلیلگر', 'کدام مسیر', 'محلل', 'أي مسار'],
      answer: {
        de: 'Die KI-Chancen-Analyse stellt sechs kurze Fragen — Wohnort, Bildungsniveau, Ziel, Interessen, Sprachniveau und Budget — und sortiert danach die passenden Möglichkeiten. Alles läuft in deinem Browser.',
        en: 'The AI Opportunity Analyzer asks six short questions — location, education level, goal, fields of interest, language levels and budget — and then ranks the opportunities that fit you. It runs entirely in your browser.',
        fa: 'تحلیلگر فرصت‌ها شش پرسش کوتاه می‌پرسد — محل زندگی، سطح تحصیل، هدف، رشته‌های مورد علاقه، سطح زبان و توان مالی — و بعد فرصت‌های مناسب شما را رتبه‌بندی می‌کند. همه‌چیز در مرورگر خودتان اجرا می‌شود.',
        ar: 'يطرح محلّل الفرص ستة أسئلة قصيرة — مكان الإقامة والمستوى التعليمي والهدف ومجالات الاهتمام ومستوى اللغة والإمكانات المالية — ثم يرتّب الفرص المناسبة لك. ويعمل بالكامل داخل متصفحك.'
      }
    },
    {
      id: 'contact',
      keywords: ['contact', 'human', 'person', 'email', 'talk to', 'mentor', 'kontakt', 'mensch', 'sprechen', 'تماس', 'انسان', 'منتور', 'اتصال', 'إنسان'],
      answer: {
        de: 'Eine echte Person erreichst du über die Kontaktseite oder über unsere WhatsApp- und Telegram-Gruppen. Wir antworten auf Deutsch, Englisch, Dari und Arabisch, meist innerhalb von ein bis drei Tagen.',
        en: 'You can reach a real person through the contact page, or through our WhatsApp and Telegram groups. We answer in German, English, Dari and Arabic, usually within one to three days.',
        fa: 'با یک انسان واقعی از راه صفحهٔ تماس یا گروه‌های واتساپ و تلگرام ما در ارتباط شده می‌توانید. ما به آلمانی، انگلیسی، دری و عربی پاسخ می‌دهیم، معمولاً در جریان یک تا سه روز.',
        ar: 'يمكنك الوصول إلى إنسان حقيقي عبر صفحة الاتصال أو عبر مجموعاتنا على واتساب وتيليغرام. نجيب بالألمانية والإنجليزية والدرية والعربية، عادةً خلال يوم إلى ثلاثة أيام.'
      }
    }
  ]
};
