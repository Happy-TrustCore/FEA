/**
 * FEA assistant — knowledge base (plain JavaScript, no build step, no server).
 *
 * This is what makes the assistant answer like a person without costing
 * anything: every topic carries keywords in all four languages, a natural
 * answer, and the follow-up topics a real adviser would offer next.
 *
 * To teach it something new, copy one block and change the wording. Keywords
 * may be written in any language — all of them are checked on every message.
 */
window.FEA_CHAT = {

  /* Opening line. A few variants so it does not feel canned. */
  greeting: [
    {
      de: 'Hallo! Ich bin der FEA-Assistent. Frag mich alles über Stipendien, Universitäten, Ausbildung, kostenlose Kurse oder Deutsch — auf Deutsch, Englisch, Dari oder Arabisch.',
      en: 'Hello! I am the FEA assistant. Ask me anything about scholarships, universities, Ausbildung, free courses or German — in German, English, Dari or Arabic.',
      fa: 'سلام! من دستیار FEA هستم. هر پرسشی دربارهٔ بورسیه، پوهنتون، آموزش مسلکی، کورس‌های رایگان یا زبان آلمانی دارید بپرسید — به آلمانی، انگلیسی، دری یا عربی.',
      ar: 'مرحبًا! أنا مساعد FEA. اسألني أي شيء عن المنح والجامعات والتدريب المهني والدورات المجانية أو الألمانية — بالألمانية أو الإنجليزية أو الدرية أو العربية.'
    },
    {
      de: 'Willkommen bei FEA. Erzähl mir kurz, wo du gerade stehst — dann sage ich dir, welcher Bildungsweg realistisch zu dir passt.',
      en: 'Welcome to FEA. Tell me briefly where you stand right now, and I will tell you which educational pathway realistically fits you.',
      fa: 'به FEA خوش آمدید. کوتاه بگویید در چه وضعیتی هستید تا بگویم کدام مسیر تحصیلی واقعاً مناسب شماست.',
      ar: 'أهلًا بك في FEA. أخبرني باختصار أين أنت الآن، وسأقول لك أي مسار تعليمي يناسبك فعلًا.'
    }
  ],

  /* Used when nothing matches. */
  fallback: {
    de: 'Das habe ich nicht sicher verstanden. Meinst du eines dieser Themen? Sonst schreib uns über die Kontaktseite — dort antwortet dir eine echte Person.',
    en: 'I did not quite understand that. Did you mean one of these topics? Otherwise write to us on the contact page — a real person will answer you there.',
    fa: 'این را دقیق نفهمیدم. آیا منظور شما یکی از این موضوعات است؟ در غیر آن از صفحهٔ تماس برای ما بنویسید — یک انسان واقعی پاسخ می‌دهد.',
    ar: 'لم أفهم ذلك تمامًا. هل تقصد أحد هذه المواضيع؟ وإلا فاكتب لنا من صفحة الاتصال — سيجيبك إنسان حقيقي.'
  },

  /* Asked when the question could mean two different things. */
  clarify: {
    de: 'Damit ich dir genau helfen kann: worum geht es dir am meisten?',
    en: 'So I can help you precisely: which of these is it mostly about?',
    fa: 'تا بتوانم دقیق کمک کنم: بیشتر کدام مورد مدنظر شماست؟',
    ar: 'كي أساعدك بدقة: أي من هذه يهمّك أكثر؟'
  },

  intents: [
    {
      id: 'greeting',
      label: { de: 'Hallo', en: 'Hello', fa: 'سلام', ar: 'مرحبًا' },
      keywords: ['hello', 'hi', 'hey', 'good morning', 'hallo', 'guten tag', 'guten morgen', 'moin', 'servus', 'سلام', 'درود', 'صبح بخیر', 'مرحبا', 'اهلا', 'السلام عليكم'],
      answer: {
        de: 'Hallo und willkommen! Wobei kann ich dir heute helfen? Du kannst mich zum Beispiel fragen, welches Stipendium zu dir passt, wie eine Ausbildung funktioniert oder wo du kostenlos Deutsch lernst.',
        en: 'Hello and welcome! What can I help you with today? You can ask me which scholarship fits you, how an Ausbildung works, or where to learn German for free.',
        fa: 'سلام و خوش آمدید! امروز در چه موردی کمک کنم؟ می‌توانید بپرسید کدام بورسیه مناسب شماست، آموزش مسلکی چطور کار می‌کند، یا کجا رایگان آلمانی بیاموزید.',
        ar: 'أهلًا وسهلًا! بماذا أساعدك اليوم؟ يمكنك أن تسألني أي منحة تناسبك، وكيف يعمل التدريب المهني، وأين تتعلّم الألمانية مجانًا.'
      },
      follow: ['scholarship', 'ausbildung', 'german']
    },

    {
      id: 'scholarship',
      label: { de: 'Stipendien', en: 'Scholarships', fa: 'بورسیه‌ها', ar: 'المنح' },
      keywords: ['scholarship', 'scholarships', 'grant', 'funding', 'financial aid', 'stipendium', 'stipendien', 'förderung', 'finanzierung', 'بورس', 'بورسیه', 'کمک مالی', 'سکالرشیپ', 'منحة', 'منح', 'تمويل', 'دعم مالي'],
      answer: {
        de: 'Für Stipendien gibt es drei gute Startpunkte: die DAAD-Datenbank (das größte offizielle Verzeichnis für Deutschland), das Deutschlandstipendium (300 €/Monat, wenn du schon an einer deutschen Hochschule studierst) und das Hilde-Domin-Programm — speziell für Menschen, denen im Herkunftsland Bildung verwehrt wird. Für Frauen aus Afghanistan ist außerdem die Asian University for Women sehr interessant.',
        en: 'There are three good starting points for scholarships: the DAAD database (the largest official directory for Germany), the Deutschlandstipendium (300 €/month if you already study at a German university), and the Hilde Domin Programme — made specifically for people denied education in their home country. For women from Afghanistan, the Asian University for Women is also well worth a look.',
        fa: 'برای بورسیه سه نقطهٔ شروع خوب وجود دارد: بانک معلومات DAAD (بزرگ‌ترین فهرست رسمی برای آلمان)، Deutschlandstipendium (ماهانه ۳۰۰ یورو اگر همین حالا در پوهنتون آلمان درس می‌خوانید) و برنامهٔ Hilde Domin — ویژهٔ کسانی که در کشور خود از تحصیل محروم شده‌اند. برای زنان افغانستان، پوهنتون آسیایی برای زنان هم بسیار ارزشمند است.',
        ar: 'هناك ثلاث نقاط انطلاق جيدة للمنح: قاعدة بيانات DAAD (أكبر دليل رسمي لألمانيا)، وDeutschlandstipendium (300 يورو شهريًا إن كنت تدرس بالفعل في جامعة ألمانية)، وبرنامج Hilde Domin — المخصّص لمن حُرموا من التعليم في بلدهم. وللنساء من أفغانستان، الجامعة الآسيوية للنساء تستحق الاطلاع أيضًا.'
      },
      follow: ['documents', 'afghanistan', 'university'],
      link: 'opportunities.html#scholarship'
    },

    {
      id: 'ausbildung',
      label: { de: 'Ausbildung', en: 'Ausbildung', fa: 'آموزش مسلکی', ar: 'التدريب المهني' },
      keywords: ['ausbildung', 'apprentice', 'apprenticeship', 'vocational', 'training place', 'dual study', 'lehrstelle', 'azubi', 'berufsschule', 'berufsausbildung', 'مسلکی', 'آموزش مسلکی', 'کارآموزی', 'اوسبیلدونگ', 'تدريب مهني', 'التدريب المهني', 'مهني', 'اوسبيلدونغ'],
      answer: {
        de: 'Eine Ausbildung ist bezahlte Berufsausbildung: du arbeitest im Betrieb und gehst in die Berufsschule. Sie dauert meist 2 bis 3,5 Jahre, du verdienst ab dem ersten Monat (oft 800–1200 € brutto) und am Ende hast du einen anerkannten Berufsabschluss. Du brauchst normalerweise Deutsch auf B1–B2 und ein Schulzeugnis. Für viele Neuzugewanderte ist das der schnellste Weg in einen guten Beruf.',
        en: 'An Ausbildung is paid vocational training: you work in a company and attend a vocational school. It usually takes 2 to 3.5 years, you earn from the first month (often 800–1200 € gross) and you finish with a recognised professional qualification. You normally need German at B1–B2 and a school certificate. For many newcomers this is the fastest route into a good profession.',
        fa: 'Ausbildung آموزش مسلکی معاش‌دار است: در یک شرکت کار می‌کنید و به مکتب مسلکی می‌روید. معمولاً ۲ تا ۳.۵ سال طول می‌کشد، از ماه اول معاش می‌گیرید (اغلب ۸۰۰ تا ۱۲۰۰ یورو ناخالص) و در پایان یک سند مسلکی به‌رسمیت‌شناخته‌شده دارید. معمولاً به آلمانی B1–B2 و سند مکتب نیاز است. برای بسیاری از تازه‌واردان این سریع‌ترین راه به یک مسلک خوب است.',
        ar: 'الـ Ausbildung تدريب مهني مدفوع: تعمل في شركة وتدرس في مدرسة مهنية. يستمر عادةً من سنتين إلى ثلاث سنوات ونصف، وتتقاضى راتبًا من الشهر الأول (غالبًا 800–1200 يورو إجمالي)، وتنتهي بشهادة مهنية معترف بها. تحتاج عادةً إلى ألمانية B1–B2 وشهادة مدرسية. ولكثير من القادمين الجدد هذا أسرع طريق إلى مهنة جيدة.'
      },
      follow: ['german', 'documents', 'contact'],
      link: 'opportunities.html#ausbildung'
    },

    {
      id: 'university',
      label: { de: 'Universität', en: 'University', fa: 'پوهنتون', ar: 'الجامعة' },
      keywords: ['university', 'universities', 'study', 'studies', 'bachelor', 'master', 'degree', 'uni assist', 'uniassist', 'admission', 'universität', 'hochschule', 'studium', 'studieren', 'zulassung', 'پوهنتون', 'دانشگاه', 'تحصیل', 'لیسانس', 'ماستری', 'جامعة', 'الجامعة', 'دراسة', 'بكالوريوس', 'ماجستير', 'قبول'],
      answer: {
        de: 'Für ein Studium in Deutschland brauchst du meist drei Dinge: ein anerkanntes Schulzeugnis, einen Sprachnachweis (C1 für deutschsprachige Studiengänge, IELTS oder TOEFL für englischsprachige) und eine Bewerbung über uni-assist. Wenn dein Zeugnis nicht direkt anerkannt wird, führt der Weg über ein Studienkolleg mit Feststellungsprüfung — das dauert ein Jahr und ist an staatlichen Kollegs kostenlos.',
        en: 'For a German university you usually need three things: a recognised school certificate, a language certificate (C1 for German-taught programmes, IELTS or TOEFL for English-taught ones) and an application through uni-assist. If your certificate is not recognised directly, the route goes through a Studienkolleg with the Feststellungsprüfung — that takes one year and is free at state-run colleges.',
        fa: 'برای تحصیل در پوهنتون آلمان معمولاً به سه چیز نیاز دارید: سند مکتب به‌رسمیت‌شناخته‌شده، سند زبان (C1 برای برنامه‌های آلمانی، IELTS یا TOEFL برای انگلیسی) و درخواست از طریق uni-assist. اگر سند شما مستقیماً پذیرفته نشود، راه از Studienkolleg و امتحان Feststellungsprüfung می‌گذرد — یک سال طول می‌کشد و در کولج‌های دولتی رایگان است.',
        ar: 'للدراسة في جامعة ألمانية تحتاج عادةً إلى ثلاثة أشياء: شهادة مدرسية معترف بها، وشهادة لغة (C1 للبرامج بالألمانية، أو IELTS/TOEFL للبرامج بالإنجليزية)، وتقديم عبر uni-assist. وإن لم تُعترف شهادتك مباشرةً، فالطريق عبر Studienkolleg مع امتحان Feststellungsprüfung — يستغرق سنة وهو مجاني في المعاهد الحكومية.'
      },
      follow: ['documents', 'scholarship', 'german'],
      link: 'opportunities.html#university'
    },

    {
      id: 'german',
      label: { de: 'Deutsch lernen', en: 'Learn German', fa: 'یادگیری آلمانی', ar: 'تعلّم الألمانية' },
      keywords: ['german', 'learn german', 'language course', 'a1', 'a2', 'b1', 'b2', 'c1', 'goethe', 'telc', 'deutsch', 'deutschkurs', 'sprachkurs', 'integrationskurs', 'sprache lernen', 'آلمانی', 'زبان آلمانی', 'کورس زبان', 'یادگیری زبان', 'الألمانية', 'الالمانية', 'دورة لغة', 'تعلم اللغة'],
      answer: {
        de: 'Du kannst heute kostenlos anfangen: DW Deutsch lernen deckt A1 bis C1 komplett ab, mit Audio, Video und Übungen — ohne Anmeldung, und es funktioniert auch bei langsamer Internetverbindung. Wenn du bereits in Deutschland lebst, frag beim BAMF nach einem Integrationskurs: der führt bis B1 und ist für viele kostenfrei. Für die Ausbildung brauchst du B1–B2, für ein deutschsprachiges Studium C1.',
        en: 'You can start today for free: DW Learn German covers A1 to C1 completely, with audio, video and exercises — no registration, and it works on a slow connection too. If you already live in Germany, ask BAMF about an integration course: it takes you to B1 and is free for many people. You need B1–B2 for an Ausbildung, and C1 for a German-taught degree.',
        fa: 'همین امروز می‌توانید رایگان شروع کنید: DW Learn German از A1 تا C1 را کامل پوشش می‌دهد، با صوت، ویدیو و تمرین — بدون ثبت‌نام، و با انترنت کند هم کار می‌کند. اگر در آلمان زندگی می‌کنید، از BAMF دربارهٔ کورس ادغام بپرسید: تا B1 می‌رساند و برای بسیاری رایگان است. برای Ausbildung به B1–B2 و برای تحصیل آلمانی‌زبان به C1 نیاز دارید.',
        ar: 'يمكنك البدء اليوم مجانًا: يغطي DW Learn German المستويات من A1 إلى C1 بالكامل، بالصوت والفيديو والتمارين — بلا تسجيل، ويعمل على اتصال بطيء أيضًا. وإن كنت تعيش في ألمانيا، اسأل BAMF عن دورة اندماج: تصل بك إلى B1 وهي مجانية لكثيرين. تحتاج B1–B2 للتدريب المهني وC1 للدراسة الجامعية بالألمانية.'
      },
      follow: ['free', 'ausbildung', 'university'],
      link: 'opportunities.html#language'
    },

    {
      id: 'free',
      label: { de: 'Kostenlose Kurse', en: 'Free courses', fa: 'کورس‌های رایگان', ar: 'دورات مجانية' },
      keywords: ['free course', 'free courses', 'online course', 'mooc', 'coursera', 'edx', 'udemy', 'certificate', 'kostenlos', 'onlinekurs', 'online kurs', 'weiterbildung', 'zertifikat', 'کورس رایگان', 'آنلاین', 'رایگان', 'سرتیفیکیت', 'دورة مجانية', 'دورات', 'مجاني', 'أونلاين', 'شهادة'],
      answer: {
        de: 'Kostenlose Onlinekurse gibt es für fast jeden Bereich: freeCodeCamp für Programmieren (mit Zertifikat, komplett gratis), edX und Coursera im Audit-Modus für Universitätsfächer, und DW für Deutsch. Das Gute daran: du kannst von überall anfangen, auch aus Afghanistan, und brauchst nur Internet — kein Visum, keine Bewerbung, keine Gebühr.',
        en: 'Free online courses exist for almost every field: freeCodeCamp for programming (with certificates, completely free), edX and Coursera in audit mode for university subjects, and DW for German. The good part: you can start from anywhere, including Afghanistan, and you only need internet — no visa, no application, no fee.',
        fa: 'کورس‌های آنلاین رایگان تقریباً برای هر رشته موجود است: freeCodeCamp برای برنامه‌نویسی (با سرتیفیکیت، کاملاً رایگان)، edX و Coursera در حالت audit برای مضامین پوهنتونی، و DW برای آلمانی. نکتهٔ خوب: از هر جایی می‌توانید شروع کنید، از افغانستان هم، و تنها به انترنت نیاز دارید — بدون ویزه، بدون درخواست، بدون فیس.',
        ar: 'الدورات المجانية متاحة لكل المجالات تقريبًا: freeCodeCamp للبرمجة (بشهادات، مجانية تمامًا)، وedX وCoursera في وضع audit للمقررات الجامعية، وDW للألمانية. والميزة: يمكنك البدء من أي مكان، ومن أفغانستان أيضًا، ولا تحتاج سوى الإنترنت — بلا تأشيرة ولا طلب ولا رسوم.'
      },
      follow: ['it', 'german', 'afghanistan'],
      link: 'opportunities.html#course'
    },

    {
      id: 'afghanistan',
      label: { de: 'Ich bin in Afghanistan', en: 'I am in Afghanistan', fa: 'من در افغانستان هستم', ar: 'أنا في أفغانستان' },
      keywords: ['afghanistan', 'afghan', 'kabul', 'herat', 'mazar', 'girls', 'women', 'afghanisch', 'mädchen', 'frauen', 'افغانستان', 'کابل', 'هرات', 'مزار', 'دختران', 'زنان', 'أفغانستان', 'افغانستان', 'كابل', 'الفتيات', 'النساء'],
      answer: {
        de: 'Ein großer Teil von FEA ist genau für dich gebaut — besonders für Mädchen und Frauen. Auch von zu Hause aus kannst du sofort anfangen: Onlinekurse belegen, Deutsch oder Englisch lernen und dich um internationale Stipendien bewerben, zum Beispiel bei der Asian University for Women oder im Hilde-Domin-Programm. Beides nimmt Bewerbungen aus Afghanistan an. In unseren Telegram- und WhatsApp-Gruppen posten wir täglich neue Möglichkeiten.',
        en: 'A large part of FEA is built exactly for you — especially for girls and women. Even from home you can start right away: take online courses, learn German or English, and apply for international scholarships such as the Asian University for Women or the Hilde Domin Programme. Both accept applications from Afghanistan. Our Telegram and WhatsApp groups post new opportunities every day.',
        fa: 'بخش بزرگی از FEA دقیقاً برای شما ساخته شده — به‌ویژه برای دختران و زنان. حتی از خانه می‌توانید فوراً شروع کنید: کورس‌های آنلاین بگیرید، آلمانی یا انگلیسی بیاموزید و برای بورسیه‌های بین‌المللی مانند پوهنتون آسیایی برای زنان یا برنامهٔ Hilde Domin درخواست بدهید. هر دو از افغانستان درخواست می‌پذیرند. در گروه‌های تلگرام و واتساپ ما هر روز فرصت‌های تازه نشر می‌شود.',
        ar: 'جزء كبير من FEA مبني لك تحديدًا — وخصوصًا للفتيات والنساء. حتى من المنزل يمكنك البدء فورًا: خذ دورات إلكترونية، وتعلّم الألمانية أو الإنجليزية، وقدّم على منح دولية مثل الجامعة الآسيوية للنساء أو برنامج Hilde Domin. وكلاهما يقبل طلبات من أفغانستان. وتنشر مجموعاتنا على تيليغرام وواتساب فرصًا جديدة كل يوم.'
      },
      follow: ['scholarship', 'free', 'contact']
    },

    {
      id: 'documents',
      label: { de: 'Welche Unterlagen?', en: 'Which documents?', fa: 'کدام اسناد؟', ar: 'أي أوراق؟' },
      keywords: ['document', 'documents', 'papers', 'cv', 'resume', 'motivation letter', 'transcript', 'apply', 'application', 'how to apply', 'unterlagen', 'dokumente', 'lebenslauf', 'motivationsschreiben', 'zeugnis', 'bewerbung', 'bewerben', 'اسناد', 'مدارک', 'خلاصه سوانح', 'مکتوب انگیزه', 'درخواست', 'چطور درخواست', 'أوراق', 'مستندات', 'السيرة الذاتية', 'خطاب الدافع', 'كيف أقدم', 'التقديم'],
      answer: {
        de: 'Für fast jede Bewerbung brauchst du dieselben Bausteine: Schulzeugnisse (beglaubigt und übersetzt), einen Lebenslauf, ein Motivationsschreiben, einen Sprachnachweis und den Reisepass. Mein wichtigster Rat: fang früh an. Übersetzungen und Beglaubigungen dauern oft Wochen, und die meisten verpassen Fristen nicht wegen fehlender Qualifikation, sondern wegen fehlender Papiere.',
        en: 'Almost every application needs the same building blocks: school certificates (certified and translated), a CV, a motivation letter, a language certificate and your passport. My most important advice: start early. Translations and certifications often take weeks, and most people miss deadlines not because they lack qualifications, but because they lack paperwork.',
        fa: 'تقریباً هر درخواست به همین اجزا نیاز دارد: اسناد مکتب (تصدیق‌شده و ترجمه‌شده)، خلاصهٔ سوانح، مکتوب انگیزه، سند زبان و پاسپورت. مهم‌ترین توصیهٔ من: زود شروع کنید. ترجمه و تصدیق اغلب هفته‌ها وقت می‌گیرد، و بیشتر مردم مهلت را نه به‌خاطر نداشتن شایستگی، بلکه به‌خاطر نبود اسناد از دست می‌دهند.',
        ar: 'تحتاج معظم الطلبات إلى المكوّنات نفسها: الشهادات المدرسية (مصدّقة ومترجمة)، وسيرة ذاتية، وخطاب دافع، وشهادة لغة، وجواز السفر. وأهم نصيحة عندي: ابدأ مبكرًا. الترجمة والتصديق تستغرق أسابيع غالبًا، ومعظم الناس يفوّتون المواعيد لا لنقص المؤهلات بل لنقص الأوراق.'
      },
      follow: ['recognition', 'scholarship', 'contact']
    },

    {
      id: 'recognition',
      label: { de: 'Zeugnis anerkennen', en: 'Certificate recognition', fa: 'به‌رسمیت‌شناسی سند', ar: 'معادلة الشهادة' },
      keywords: ['recognition', 'recognise', 'recognized', 'anabin', 'equivalent', 'my diploma', 'anerkennung', 'anerkennen', 'gleichwertig', 'abschluss anerkennen', 'به رسمیت', 'معادل سازی', 'تایید سند', 'معادلة', 'الاعتراف', 'تعادل الشهادة'],
      answer: {
        de: 'Ob dein Abschluss in Deutschland anerkannt wird, findest du in der offiziellen anabin-Datenbank. Für Schulzeugnisse gilt: wird es nicht direkt anerkannt, gehst du über ein Studienkolleg. Für Berufsabschlüsse ist "Make it in Germany" die richtige Anlaufstelle. Wichtig: eine fehlende Anerkennung heißt fast nie "unmöglich", sondern nur "ein Zwischenschritt mehr".',
        en: 'Whether your qualification is recognised in Germany is listed in the official anabin database. For school certificates: if it is not recognised directly, you go through a Studienkolleg. For professional qualifications, "Make it in Germany" is the right place to start. Important: a missing recognition almost never means "impossible" — it means "one extra step".',
        fa: 'اینکه سند شما در آلمان به رسمیت شناخته می‌شود یا نه، در بانک معلومات رسمی anabin آمده است. برای اسناد مکتب: اگر مستقیماً پذیرفته نشود، از راه Studienkolleg می‌روید. برای اسناد مسلکی، «Make it in Germany» جای درست شروع است. مهم: نبود به‌رسمیت‌شناسی تقریباً هرگز به معنای «ناممکن» نیست، بلکه یعنی «یک گام بیشتر».',
        ar: 'يمكنك معرفة ما إذا كانت شهادتك معترفًا بها في ألمانيا من قاعدة بيانات anabin الرسمية. للشهادات المدرسية: إن لم تُعترف مباشرةً، فالطريق عبر Studienkolleg. وللشهادات المهنية، «Make it in Germany» هي نقطة البداية الصحيحة. المهم: غياب الاعتراف لا يعني «مستحيل» تقريبًا أبدًا، بل يعني «خطوة إضافية».'
      },
      follow: ['university', 'documents', 'career']
    },

    {
      id: 'it',
      label: { de: 'IT & Programmieren', en: 'IT & programming', fa: 'کمپیوتر و برنامه‌نویسی', ar: 'الحاسوب والبرمجة' },
      keywords: ['it', 'programming', 'coding', 'software', 'developer', 'computer science', 'python', 'javascript', 'web development', 'informatik', 'programmieren', 'entwickler', 'softwareentwicklung', 'کمپیوتر', 'برنامه نویسی', 'نرم افزار', 'انفورماتیک', 'برمجة', 'الحاسوب', 'مبرمج', 'تطوير'],
      answer: {
        de: 'IT ist der Bereich mit den niedrigsten Einstiegshürden — du brauchst keinen Abschluss, um anzufangen, nur einen Computer und Zeit. freeCodeCamp bringt dich kostenlos von null bis zu einem Zertifikat in Webentwicklung oder Datenanalyse. In Deutschland gibt es außerdem sehr viele Ausbildungsplätze als Fachinformatiker/in, die oft unbesetzt bleiben. Wir sind selbst Softwareentwickler — das ist ein Weg, den wir wirklich empfehlen können.',
        en: 'IT has the lowest barrier to entry of any field — you do not need a degree to start, only a computer and time. freeCodeCamp takes you from zero to a certificate in web development or data analysis, free. In Germany there are also many Ausbildung places as an IT specialist (Fachinformatiker) that often stay unfilled. We are software developers ourselves — this is a path we can genuinely recommend.',
        fa: 'تکنالوژی معلوماتی کم‌ترین مانع ورود را دارد — برای شروع به سند نیاز ندارید، تنها یک کمپیوتر و وقت. freeCodeCamp شما را رایگان از صفر تا سرتیفیکیت در ساخت ویب‌سایت یا تحلیل داده می‌رساند. در آلمان همچنان جای‌های زیاد Ausbildung به‌عنوان Fachinformatiker وجود دارد که اغلب خالی می‌ماند. ما خودمان انجنیر نرم‌افزار هستیم — این راهی است که واقعاً پیشنهاد می‌کنیم.',
        ar: 'مجال الحاسوب هو الأقل عوائق للدخول — لا تحتاج شهادة لتبدأ، بل حاسوبًا ووقتًا فقط. يأخذك freeCodeCamp من الصفر إلى شهادة في تطوير الويب أو تحليل البيانات، مجانًا. وفي ألمانيا أماكن تدريب مهني كثيرة كأخصائي حاسوب (Fachinformatiker) تبقى شاغرة غالبًا. نحن مطوّرو برمجيات بأنفسنا — وهذا طريق نوصي به فعلًا.'
      },
      follow: ['free', 'ausbildung', 'career']
    },

    {
      id: 'career',
      label: { de: 'Arbeit & Beruf', en: 'Work & career', fa: 'کار و مسلک', ar: 'العمل والمهنة' },
      keywords: ['job', 'jobs', 'work', 'career', 'employment', 'salary', 'visa', 'arbeit', 'beruf', 'stelle', 'gehalt', 'visum', 'arbeitserlaubnis', 'کار', 'شغل', 'وظیفه', 'معاش', 'ویزه', 'اجازه کار', 'عمل', 'وظيفة', 'مهنة', 'راتب', 'تأشيرة'],
      answer: {
        de: '"Make it in Germany" ist das offizielle Portal der Bundesregierung und beantwortet die meisten Fragen zu Visum, Jobsuche, Anerkennung und Arbeitsleben. Wichtig zu wissen: Ausbildung und Studium sind in Deutschland fast immer der stabilere Weg zu guter Arbeit als ein direkter Jobeinstieg ohne Abschluss — deshalb legen wir den Schwerpunkt darauf.',
        en: '"Make it in Germany" is the Federal Government portal and answers most questions about visas, job search, recognition and working life. Worth knowing: in Germany, an Ausbildung or a degree is almost always a more stable route to good work than going straight into a job without a qualification — which is why we focus on those.',
        fa: '«Make it in Germany» پورتال رسمی حکومت فدرال است و بیشتر پرسش‌ها دربارهٔ ویزه، جستجوی کار، به‌رسمیت‌شناسی و زندگی کاری را پاسخ می‌دهد. دانستنش مهم است: در آلمان Ausbildung یا تحصیل تقریباً همیشه راه پایدارتری به کار خوب است تا ورود مستقیم به کار بدون سند — به همین دلیل ما روی آن‌ها تمرکز داریم.',
        ar: '«Make it in Germany» هي بوابة الحكومة الاتحادية وتجيب عن معظم الأسئلة حول التأشيرة والبحث عن عمل والاعتراف بالشهادات والحياة المهنية. ومما يستحق المعرفة: في ألمانيا، التدريب المهني أو الدراسة الجامعية طريق أكثر استقرارًا إلى عمل جيد من الدخول المباشر إلى وظيفة بلا مؤهل — ولهذا نركّز عليهما.'
      },
      follow: ['ausbildung', 'recognition', 'contact']
    },

    {
      id: 'cost',
      label: { de: 'Kostet das etwas?', en: 'Does it cost anything?', fa: 'آیا مصرف دارد؟', ar: 'هل هناك تكلفة؟' },
      keywords: ['cost', 'price', 'pay', 'fee', 'how much', 'expensive', 'money', 'kosten', 'preis', 'gebühr', 'bezahlen', 'wie viel', 'teuer', 'geld', 'مصرف', 'قیمت', 'پول', 'فیس', 'چقدر', 'گران', 'تكلفة', 'سعر', 'رسوم', 'كم', 'مال'],
      answer: {
        de: 'Bei FEA ist alles kostenlos: die Website, die Analyse, dieser Chat, das Mentoring und unsere Beratung in den sozialen Medien. Wir sind gemeinnützig, nehmen keine Gebühren und verkaufen niemals deine Daten. Sei vorsichtig bei Agenturen, die Geld für Stipendienbewerbungen verlangen — die offiziellen Programme sind immer kostenlos.',
        en: 'Everything at FEA is free: the website, the analyzer, this chat, mentoring and our social media guidance. We are a non-profit, we take no fees and we never sell your data. Be careful with agencies that charge money for scholarship applications — the official programmes are always free.',
        fa: 'همه‌چیز در FEA رایگان است: ویب‌سایت، تحلیلگر، همین چت، منتورشیپ و رهنمایی ما در شبکه‌های اجتماعی. ما غیرانتفاعی هستیم، فیس نمی‌گیریم و هرگز معلومات شما را نمی‌فروشیم. مواظب آژانس‌هایی باشید که برای درخواست بورسیه پول می‌گیرند — برنامه‌های رسمی همیشه رایگان اند.',
        ar: 'كل شيء في FEA مجاني: الموقع والمحلّل وهذه المحادثة والإرشاد وتوجيهنا على وسائل التواصل. نحن مبادرة غير ربحية، لا نتقاضى رسومًا ولا نبيع بياناتك أبدًا. واحذر من الوكالات التي تطلب مالًا مقابل طلبات المنح — فالبرامج الرسمية مجانية دائمًا.'
      },
      follow: ['scholarship', 'contact']
    },

    {
      id: 'analyzer',
      label: { de: 'Welcher Weg passt zu mir?', en: 'Which path fits me?', fa: 'کدام مسیر مناسب من است؟', ar: 'أي مسار يناسبني؟' },
      keywords: ['analyzer', 'analyser', 'quiz', 'which pathway', 'which path', 'recommend', 'what should i', 'suggest', 'analyse', 'welcher weg', 'was soll ich', 'empfehlung', 'vorschlag', 'تحلیلگر', 'کدام مسیر', 'چه کنم', 'پیشنهاد', 'محلل', 'أي مسار', 'ماذا أفعل', 'توصية'],
      answer: {
        de: 'Dafür haben wir die KI-Chancen-Analyse gebaut: sechs kurze Fragen zu Wohnort, Bildungsniveau, Ziel, Interessen, Sprachniveau und Budget — danach siehst du die passenden Möglichkeiten sortiert nach Übereinstimmung, mit einer Begründung pro Vorschlag. Alles läuft in deinem Browser, nichts wird gespeichert.',
        en: 'That is exactly what we built the AI Opportunity Analyzer for: six short questions about location, education level, goal, interests, language levels and budget — then you see the matching opportunities ranked, with a reason given for each one. It all runs in your browser and nothing is stored.',
        fa: 'ما دقیقاً برای همین تحلیلگر فرصت‌ها را ساختیم: شش پرسش کوتاه دربارهٔ محل زندگی، سطح تحصیل، هدف، علاقه‌مندی، سطح زبان و توان مالی — بعد فرصت‌های مناسب را رتبه‌بندی‌شده می‌بینید، همراه با دلیل هر پیشنهاد. همه‌چیز در مرورگر شما اجرا می‌شود و چیزی ذخیره نمی‌شود.',
        ar: 'لهذا بالضبط بنينا محلّل الفرص: ستة أسئلة قصيرة عن مكان الإقامة والمستوى التعليمي والهدف والاهتمامات ومستوى اللغة والإمكانات المالية — ثم ترى الفرص المناسبة مرتّبة، مع سبب لكل اقتراح. كل ذلك يعمل داخل متصفحك ولا يُخزَّن شيء.'
      },
      follow: ['scholarship', 'ausbildung'],
      link: 'analyzer.html'
    },

    {
      id: 'contact',
      label: { de: 'Mit einem Menschen sprechen', en: 'Talk to a person', fa: 'صحبت با یک انسان', ar: 'التحدث إلى إنسان' },
      keywords: ['contact', 'human', 'person', 'email', 'talk to', 'mentor', 'help me', 'advisor', 'kontakt', 'mensch', 'e-mail', 'sprechen', 'berater', 'hilfe', 'تماس', 'انسان', 'شخص', 'ایمیل', 'منتور', 'صحبت', 'کمک', 'مشاور', 'اتصال', 'إنسان', 'بريد', 'تحدث', 'مرشد', 'مساعدة'],
      answer: {
        de: 'Sehr gerne — schreib uns über die Kontaktseite oder komm in unsere WhatsApp- bzw. Telegram-Gruppe. Wir antworten auf Deutsch, Englisch, Dari und Arabisch, normalerweise innerhalb von ein bis drei Tagen. Wir sind zwei Studierende und machen das neben dem Studium, deshalb dauert es manchmal etwas — aber wir antworten jedem.',
        en: 'Gladly — write to us on the contact page, or join our WhatsApp or Telegram group. We answer in German, English, Dari and Arabic, usually within one to three days. We are two students doing this alongside our studies, so it sometimes takes a little while — but we reply to everyone.',
        fa: 'با کمال میل — از صفحهٔ تماس برای ما بنویسید یا به گروه واتساپ یا تلگرام ما بپیوندید. ما به آلمانی، انگلیسی، دری و عربی پاسخ می‌دهیم، معمولاً در جریان یک تا سه روز. ما دو محصل هستیم و این کار را در کنار درس انجام می‌دهیم، پس گاهی کمی طول می‌کشد — اما به همه پاسخ می‌دهیم.',
        ar: 'بكل سرور — اكتب لنا من صفحة الاتصال، أو انضم إلى مجموعتنا على واتساب أو تيليغرام. نجيب بالألمانية والإنجليزية والدرية والعربية، عادةً خلال يوم إلى ثلاثة أيام. نحن طالبان نقوم بذلك إلى جانب دراستنا، لذا قد يتأخر الأمر قليلًا — لكننا نردّ على الجميع.'
      },
      follow: ['analyzer', 'scholarship'],
      link: 'contact.html'
    },

    {
      id: 'about',
      label: { de: 'Wer seid ihr?', en: 'Who are you?', fa: 'شما کی هستید؟', ar: 'من أنتم؟' },
      keywords: ['who are you', 'what is fea', 'about you', 'your project', 'are you a robot', 'are you human', 'wer seid ihr', 'was ist fea', 'über euch', 'bist du ein roboter', 'bist du ein mensch', 'شما کیستید', 'ربات', 'دربارهٔ شما', 'FEA چیست', 'من أنتم', 'ما هو', 'هل أنت روبوت'],
      answer: {
        de: 'Ich bin der FEA-Assistent — ein Programm, kein Mensch. Ich sage dir das lieber ehrlich. FEA selbst ist eine gemeinnützige Initiative von zwei Studierenden der Softwaretechnik in Deutschland. Wir helfen Menschen, die beim Zugang zu Bildung benachteiligt sind, ihren Weg zu finden. Wenn du mit einem echten Menschen sprechen möchtest, verbinde ich dich gern weiter.',
        en: 'I am the FEA assistant — a program, not a human. I would rather tell you that honestly. FEA itself is a non-profit initiative run by two software engineering students in Germany. We help people who face barriers to education find their way. If you would like to speak to a real person, I am glad to point you there.',
        fa: 'من دستیار FEA هستم — یک برنامه، نه انسان. ترجیح می‌دهم صادقانه بگویم. خود FEA یک ابتکار غیرانتفاعی از دو محصل انجنیری نرم‌افزار در آلمان است. ما به کسانی که در دسترسی به آموزش با مانع روبه‌رو اند کمک می‌کنیم راه خود را بیابند. اگر می‌خواهید با یک انسان واقعی صحبت کنید، با کمال میل راهنمایی می‌کنم.',
        ar: 'أنا مساعد FEA — برنامج، ولست إنسانًا. أفضّل أن أقول لك ذلك بصراحة. أما FEA فهي مبادرة غير ربحية يديرها طالبان في هندسة البرمجيات في ألمانيا. نساعد من يواجهون عوائق في التعليم على إيجاد طريقهم. وإن أردت التحدث إلى إنسان حقيقي، يسعدني أن أدلّك.'
      },
      follow: ['contact', 'cost']
    },

    {
      id: 'thanks',
      label: { de: 'Danke', en: 'Thank you', fa: 'تشکر', ar: 'شكرًا' },
      keywords: ['thank', 'thanks', 'thank you', 'danke', 'vielen dank', 'dankeschön', 'تشکر', 'ممنون', 'سپاس', 'شكرا', 'شكرًا', 'ممتن'],
      answer: {
        de: 'Sehr gern! Wenn du weitere Fragen hast, bin ich da. Und viel Erfolg auf deinem Bildungsweg — melde dich gerne wieder, wenn du an einem Punkt nicht weiterkommst.',
        en: 'You are very welcome! If you have more questions, I am here. And good luck on your educational path — do come back whenever you get stuck.',
        fa: 'خواهش می‌کنم! اگر پرسش دیگری داشتید، من اینجا هستم. در مسیر تحصیلی‌تان موفق باشید — هر وقت جایی گیر کردید، دوباره سر بزنید.',
        ar: 'على الرحب والسعة! إن كان لديك أسئلة أخرى فأنا هنا. وحظًا موفقًا في مسارك التعليمي — عد إلينا متى واجهتك عقبة.'
      },
      follow: ['analyzer', 'contact']
    }
  ]
};
