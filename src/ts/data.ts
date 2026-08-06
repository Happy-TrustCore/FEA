/**
 * Static content data: the opportunity directory, the chat knowledge base and
 * the social channels. In the full platform this comes from the FEA backend and
 * is refreshed by the AI monitoring job; for the front-end prototype it lives here.
 */
namespace FEA.Data {
  /** Every field id used by the analyzer. `any` means "relevant for all fields". */
  export const FIELDS: string[] = [
    'it',
    'engineering',
    'health',
    'business',
    'social',
    'education',
    'arts',
    'science',
  ];

  export const LANGUAGE_LEVELS: Array<'none' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1'> = [
    'none',
    'a1',
    'a2',
    'b1',
    'b2',
    'c1',
  ];

  export const LEVELS: StudyLevel[] = [
    'school',
    'highschool',
    'bachelor',
    'master',
    'professional',
  ];

  const ALL_FIELDS = ['any'].concat(FIELDS);

  export const OPPORTUNITIES: Opportunity[] = [
    {
      id: 'daad',
      kind: 'scholarship',
      region: 'international',
      levels: ['highschool', 'bachelor', 'master', 'professional'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b2',
      languagesOffered: ['de', 'en'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.daad.title',
      providerKey: 'opp.daad.provider',
      summaryKey: 'opp.daad.summary',
      link: 'https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/',
    },
    {
      id: 'deutschlandstipendium',
      kind: 'scholarship',
      region: 'germany',
      levels: ['bachelor', 'master'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b1',
      languagesOffered: ['de', 'en'],
      free: true,
      deadline: '2026-10-15',
      titleKey: 'opp.deutschlandstipendium.title',
      providerKey: 'opp.deutschlandstipendium.provider',
      summaryKey: 'opp.deutschlandstipendium.summary',
      link: 'https://www.deutschlandstipendium.de/',
    },
    {
      id: 'hildedomin',
      kind: 'scholarship',
      region: 'international',
      levels: ['highschool', 'bachelor', 'master'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b1',
      languagesOffered: ['de', 'en'],
      free: true,
      deadline: '2026-11-30',
      titleKey: 'opp.hildedomin.title',
      providerKey: 'opp.hildedomin.provider',
      summaryKey: 'opp.hildedomin.summary',
      link: 'https://www.daad.de/en/studying-in-germany/scholarships/hilde-domin-programm/',
    },
    {
      id: 'auw',
      kind: 'scholarship',
      region: 'international',
      levels: ['highschool', 'bachelor'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b1',
      languagesOffered: ['en'],
      free: true,
      deadline: '2027-01-31',
      titleKey: 'opp.auw.title',
      providerKey: 'opp.auw.provider',
      summaryKey: 'opp.auw.summary',
      link: 'https://asian-university.org/admissions/',
    },
    {
      id: 'garantiefonds',
      kind: 'scholarship',
      region: 'germany',
      levels: ['highschool', 'bachelor'],
      fields: ALL_FIELDS,
      requiresLanguage: 'a2',
      languagesOffered: ['de'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.garantiefonds.title',
      providerKey: 'opp.garantiefonds.provider',
      summaryKey: 'opp.garantiefonds.summary',
      link: 'https://www.obs-ev.de/gf-h/',
    },
    {
      id: 'studienkolleg',
      kind: 'university',
      region: 'germany',
      levels: ['highschool'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b1',
      languagesOffered: ['de'],
      free: true,
      deadline: '2026-11-15',
      titleKey: 'opp.studienkolleg.title',
      providerKey: 'opp.studienkolleg.provider',
      summaryKey: 'opp.studienkolleg.summary',
      link: 'https://www.studienkollegs.de/',
    },
    {
      id: 'uniassist',
      kind: 'university',
      region: 'germany',
      levels: ['highschool', 'bachelor', 'master'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b2',
      languagesOffered: ['de', 'en'],
      free: false,
      deadline: '2027-01-15',
      titleKey: 'opp.uniassist.title',
      providerKey: 'opp.uniassist.provider',
      summaryKey: 'opp.uniassist.summary',
      link: 'https://www.uni-assist.de/en/',
    },
    {
      id: 'ausbildungba',
      kind: 'ausbildung',
      region: 'germany',
      levels: ['highschool', 'school', 'professional'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b1',
      languagesOffered: ['de'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.ausbildungba.title',
      providerKey: 'opp.ausbildungba.provider',
      summaryKey: 'opp.ausbildungba.summary',
      link: 'https://www.arbeitsagentur.de/ausbildung',
    },
    {
      id: 'ihk',
      kind: 'ausbildung',
      region: 'germany',
      levels: ['highschool', 'school', 'professional'],
      fields: ['any', 'it', 'engineering', 'business', 'health'],
      requiresLanguage: 'b1',
      languagesOffered: ['de'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.ihk.title',
      providerKey: 'opp.ihk.provider',
      summaryKey: 'opp.ihk.summary',
      link: 'https://www.ihk-lehrstellenboerse.de/',
    },
    {
      id: 'integrationskurs',
      kind: 'language',
      region: 'germany',
      levels: ['school', 'highschool', 'bachelor', 'master', 'professional'],
      fields: ALL_FIELDS,
      requiresLanguage: 'none',
      languagesOffered: ['de', 'en', 'ar', 'fa'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.integrationskurs.title',
      providerKey: 'opp.integrationskurs.provider',
      summaryKey: 'opp.integrationskurs.summary',
      link: 'https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html',
    },
    {
      id: 'dwgerman',
      kind: 'language',
      region: 'online',
      levels: ['school', 'highschool', 'bachelor', 'master', 'professional'],
      fields: ALL_FIELDS,
      requiresLanguage: 'none',
      languagesOffered: ['de', 'en', 'ar', 'fa'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.dwgerman.title',
      providerKey: 'opp.dwgerman.provider',
      summaryKey: 'opp.dwgerman.summary',
      link: 'https://learngerman.dw.com/',
    },
    {
      id: 'freecodecamp',
      kind: 'course',
      region: 'online',
      levels: ['school', 'highschool', 'bachelor', 'master', 'professional'],
      fields: ['it', 'engineering', 'science'],
      requiresLanguage: 'a2',
      languagesOffered: ['en', 'ar'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.freecodecamp.title',
      providerKey: 'opp.freecodecamp.provider',
      summaryKey: 'opp.freecodecamp.summary',
      link: 'https://www.freecodecamp.org/',
    },
    {
      id: 'edx',
      kind: 'course',
      region: 'online',
      levels: ['highschool', 'bachelor', 'master', 'professional'],
      fields: ALL_FIELDS,
      requiresLanguage: 'b1',
      languagesOffered: ['en'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.edx.title',
      providerKey: 'opp.edx.provider',
      summaryKey: 'opp.edx.summary',
      link: 'https://www.edx.org/',
    },
    {
      id: 'makeit',
      kind: 'career',
      region: 'germany',
      levels: ['bachelor', 'master', 'professional', 'highschool'],
      fields: ALL_FIELDS,
      requiresLanguage: 'none',
      languagesOffered: ['de', 'en'],
      free: true,
      deadline: 'rolling',
      titleKey: 'opp.makeit.title',
      providerKey: 'opp.makeit.provider',
      summaryKey: 'opp.makeit.summary',
      link: 'https://www.make-it-in-germany.com/en/',
    },
  ];

  export interface Channel {
    id: string;
    label: string;
    url: string;
    /** Inline SVG path data for the icon. */
    icon: string;
  }

  /**
   * Placeholder destinations: the accounts are created in Phase 1 of the plan,
   * so the links point at the project's public development page for now.
   */
  const PLACEHOLDER = 'https://happy-trustcore.github.io/FEA/';

  export const CHANNELS: Channel[] = [
    { id: 'instagram', label: 'Instagram', url: PLACEHOLDER, icon: 'instagram' },
    { id: 'facebook', label: 'Facebook', url: PLACEHOLDER, icon: 'facebook' },
    { id: 'tiktok', label: 'TikTok', url: PLACEHOLDER, icon: 'tiktok' },
    { id: 'telegram', label: 'Telegram', url: PLACEHOLDER, icon: 'telegram' },
    { id: 'whatsapp', label: 'WhatsApp', url: PLACEHOLDER, icon: 'whatsapp' },
  ];

  export const CONTACT_EMAIL = 'happytrustcore.github@gmail.com';
  export const DEV_SITE = 'https://happy-trustcore.github.io/FEA/';

  /**
   * Chat knowledge base. Each intent carries keywords in all four languages so a
   * user typing "بورسیه" gets the same answer as one typing "Stipendium".
   */
  export const INTENTS: ChatIntent[] = [
    {
      id: 'greeting',
      keywords: {
        en: ['hello', 'hi ', 'hey', 'good morning', 'good evening'],
        de: ['hallo', 'guten tag', 'guten morgen', 'servus', 'moin'],
        fa: ['سلام', 'درود', 'صبح بخیر'],
        ar: ['مرحبا', 'السلام', 'اهلا', 'أهلا', 'صباح'],
      },
      answerKey: 'ans.greeting',
      suggestionKeys: ['chip.scholarship', 'chip.ausbildung', 'chip.german'],
    },
    {
      id: 'scholarship',
      keywords: {
        en: ['scholarship', 'grant', 'funding', 'stipend'],
        de: ['stipendium', 'stipendien', 'förderung', 'finanzierung'],
        fa: ['بورس', 'بورسیه', 'کمک مالی', 'سکالرشیپ'],
        ar: ['منحة', 'منح', 'تمويل', 'دعم مالي'],
      },
      answerKey: 'ans.scholarship',
      suggestionKeys: ['chip.university', 'chip.afghanistan', 'chip.contact'],
    },
    {
      id: 'ausbildung',
      keywords: {
        en: ['ausbildung', 'apprentice', 'vocational', 'training place'],
        de: ['ausbildung', 'lehrstelle', 'azubi', 'berufsschule'],
        fa: ['مسلکی', 'آموزش مسلکی', 'کارآموزی', 'اوسبیلدونگ'],
        ar: ['تدريب مهني', 'التدريب المهني', 'مهني', 'اوسبيلدونغ'],
      },
      answerKey: 'ans.ausbildung',
      suggestionKeys: ['chip.german', 'chip.university', 'chip.contact'],
    },
    {
      id: 'university',
      keywords: {
        en: ['university', 'study', 'bachelor', 'master', 'uni-assist', 'admission'],
        de: ['universität', 'hochschule', 'studium', 'studieren', 'bachelor', 'master', 'uni-assist'],
        fa: ['پوهنتون', 'دانشگاه', 'تحصیل', 'لیسانس', 'ماستری'],
        ar: ['جامعة', 'الجامعة', 'دراسة', 'بكالوريوس', 'ماجستير', 'قبول'],
      },
      answerKey: 'ans.university',
      suggestionKeys: ['chip.scholarship', 'chip.german', 'chip.contact'],
    },
    {
      id: 'german',
      keywords: {
        en: ['german', 'language course', 'a1', 'b1', 'b2', 'c1', 'learn german'],
        de: ['deutsch', 'deutschkurs', 'sprachkurs', 'integrationskurs', 'sprache lernen'],
        fa: ['آلمانی', 'زبان آلمانی', 'کورس زبان', 'یادگیری زبان'],
        ar: ['الألمانية', 'الالمانية', 'دورة لغة', 'تعلم اللغة', 'اللغة'],
      },
      answerKey: 'ans.german',
      suggestionKeys: ['chip.free', 'chip.ausbildung', 'chip.contact'],
    },
    {
      id: 'free',
      keywords: {
        en: ['free course', 'online course', 'mooc', 'coursera', 'edx', 'programming'],
        de: ['kostenlos', 'onlinekurs', 'online kurs', 'programmieren', 'weiterbildung'],
        fa: ['کورس رایگان', 'آنلاین', 'برنامه‌نویسی', 'رایگان'],
        ar: ['دورة مجانية', 'دورات', 'مجاني', 'برمجة', 'أونلاين'],
      },
      answerKey: 'ans.free',
      suggestionKeys: ['chip.german', 'chip.scholarship', 'chip.contact'],
    },
    {
      id: 'afghanistan',
      keywords: {
        en: ['afghanistan', 'afghan', 'kabul', 'girls', 'women'],
        de: ['afghanistan', 'afghanisch', 'kabul', 'mädchen', 'frauen'],
        fa: ['افغانستان', 'کابل', 'دختران', 'زنان'],
        ar: ['أفغانستان', 'افغانستان', 'كابل', 'الفتيات', 'النساء'],
      },
      answerKey: 'ans.afghanistan',
      suggestionKeys: ['chip.scholarship', 'chip.free', 'chip.contact'],
    },
    {
      id: 'cost',
      keywords: {
        en: ['cost', 'price', 'pay', 'fee', 'how much'],
        de: ['kosten', 'preis', 'gebühr', 'bezahlen', 'wie viel'],
        fa: ['مصرف', 'قیمت', 'پول', 'فیس', 'چقدر'],
        ar: ['تكلفة', 'سعر', 'رسوم', 'مدفوع', 'كم'],
      },
      answerKey: 'ans.cost',
      suggestionKeys: ['chip.scholarship', 'chip.contact'],
    },
    {
      id: 'analyzer',
      keywords: {
        en: ['analyzer', 'analyser', 'quiz', 'which pathway', 'recommend'],
        de: ['analyse', 'analysator', 'welcher weg', 'empfehlung', 'test'],
        fa: ['تحلیلگر', 'کدام مسیر', 'پیشنهاد', 'آزمون'],
        ar: ['محلل', 'المحلل', 'أي مسار', 'توصية', 'اختبار'],
      },
      answerKey: 'ans.analyzer',
      suggestionKeys: ['chip.scholarship', 'chip.ausbildung'],
    },
    {
      id: 'contact',
      keywords: {
        en: ['contact', 'human', 'person', 'email', 'talk to', 'mentor'],
        de: ['kontakt', 'mensch', 'person', 'e-mail', 'sprechen', 'mentor'],
        fa: ['تماس', 'انسان', 'شخص', 'ایمیل', 'منتور', 'صحبت'],
        ar: ['اتصال', 'إنسان', 'شخص', 'بريد', 'تحدث', 'مرشد'],
      },
      answerKey: 'ans.contact',
      suggestionKeys: ['chip.scholarship', 'chip.ausbildung'],
    },
  ];

  /** Maps a quick-reply chip to the intent it should trigger. */
  export const CHIP_INTENTS: Record<string, string> = {
    'chip.scholarship': 'scholarship',
    'chip.ausbildung': 'ausbildung',
    'chip.university': 'university',
    'chip.german': 'german',
    'chip.free': 'free',
    'chip.afghanistan': 'afghanistan',
    'chip.contact': 'contact',
    'chip.cost': 'cost',
  };

  export const DEFAULT_CHIPS: string[] = [
    'chip.scholarship',
    'chip.ausbildung',
    'chip.university',
    'chip.german',
    'chip.free',
    'chip.cost',
  ];
}
