"use strict";
/**
 * Free Education Assistance (FEA) — shared type definitions.
 *
 * The whole front end is written in TypeScript and compiled with `tsc` into a
 * single classic script (assets/js/fea.js) so the site also runs from the file
 * system without a bundler or a server.
 */
/** English dictionary. This is the reference language — every other locale mirrors these keys. */
var FEA;
(function (FEA) {
    var Locales;
    (function (Locales) {
        Locales.en = {
            /* ---------- global ---------- */
            'brand.name': 'Free Education Assistance',
            'brand.short': 'FEA',
            'brand.tagline': 'Free educational guidance in German, English, Dari and Arabic',
            'common.skip': 'Skip to main content',
            'common.menu': 'Menu',
            'common.close': 'Close',
            'common.theme': 'Switch light / dark mode',
            'common.language': 'Language',
            'common.free': 'Free',
            'common.deadline': 'Deadline',
            'common.rolling': 'Open — apply any time',
            'common.langreq': 'Language level',
            'common.level': 'Level',
            'common.openLink': 'Official information',
            'common.top': 'Back to top',
            'common.demoNote': 'Front-end prototype. Data is stored locally in your browser only.',
            'nav.home': 'Home',
            'nav.about': 'Project',
            'nav.opps': 'Opportunities',
            'nav.analyzer': 'AI Analyzer',
            'nav.community': 'Community',
            'nav.contact': 'Contact',
            'nav.cta': 'Find your pathway',
            'footer.about': 'FEA is a non-profit initiative founded by two software engineering students in Germany. We help students, refugees and newcomers find educational pathways — free of charge, in four languages.',
            'footer.links': 'Pages',
            'footer.channels': 'Follow us',
            'footer.languages': 'Languages',
            'footer.legal': 'Non-profit · No fees · No advertising',
            'footer.rights': '© 2026 Free Education Assistance. Project concept for the Werner-Schulz-Stipendien 2026.',
            'footer.dev': 'Live development version',
            /* ---------- home ---------- */
            'page.home.title': 'FEA — Free Education Assistance',
            'hero.eyebrow': 'Non-profit · Founded by two students in Germany',
            'hero.title': 'Education should never depend on where you were born.',
            'hero.lead': 'FEA gives students, refugees and newcomers free educational guidance: scholarships, universities, Ausbildung, free online courses and language programmes — explained clearly, in four languages.',
            'hero.ctaPrimary': 'Start the AI Opportunity Analyzer',
            'hero.ctaSecondary': 'Browse opportunities',
            'hero.trust': 'No fees. No registration. No hidden conditions.',
            'hero.cardTitle': 'Your pathway in 6 questions',
            'hero.cardBody': 'Answer a few questions about where you live, what you have studied and which language levels you have. The analyzer ranks the opportunities that actually fit you.',
            'hero.cardBadge': 'AI-assisted',
            'stat.languages.value': '4',
            'stat.languages.label': 'Languages: German, English, Dari, Arabic',
            'stat.support.value': '24/7',
            'stat.support.label': 'Automated answers and guidance',
            'stat.channels.value': '5',
            'stat.channels.label': 'Social channels for daily updates',
            'stat.cost.value': '0 €',
            'stat.cost.label': 'Cost for every user, always',
            'values.eyebrow': 'Civil society values',
            'values.title': 'Three principles behind every FEA decision',
            'values.lead': 'FEA is not only a search tool. It is an integration project built on democratic values.',
            'values.1.title': 'Social urgency',
            'values.1.body': 'Preventing exclusion and polarization. At a time of polarization and social exclusion, creating credible paths into education and employment is vital. Structured integration prevents isolation and susceptibility to destructive influences, and keeps young newcomers connected to society.',
            'values.2.title': 'Democratic pillars',
            'values.2.body': 'Education grounded in democratic values acts as a powerful instrument for integration. It allows migrants from diverse cultural backgrounds to understand, respect and participate in our society, and to discover how to develop their own talents.',
            'values.3.title': 'Contribution & value',
            'values.3.body': 'True integration is a two-way street. It must create opportunity but also encourage active participation, responsibility and value creation. Newcomers are empowered to contribute through their own capabilities — economically, socially and culturally.',
            'flow.eyebrow': 'Ecosystem & operational flow',
            'flow.title': 'From the people we reach to the impact we create',
            'flow.lead': 'Five connected layers: who we serve, the digital core, how we reach people, the human support behind it, and the outcomes.',
            'flow.1.title': 'Target groups',
            'flow.1.i1': 'Afghan students and women',
            'flow.1.i2': 'Refugees and migrants in Germany',
            'flow.1.i3': 'Youth facing access barriers',
            'flow.2.title': 'Web & AI core',
            'flow.2.i1': 'AI Opportunity Analyzer',
            'flow.2.i2': '24/7 automated Q&A chat',
            'flow.2.i3': 'Portal in DE, EN, Dari and Arabic',
            'flow.3.title': 'Outreach boost',
            'flow.3.i1': 'Instagram, Facebook, TikTok, Telegram, WhatsApp',
            'flow.3.i2': 'Boosted educational campaigns',
            'flow.3.i3': 'Daily opportunity updates',
            'flow.4.title': 'Human support',
            'flow.4.i1': 'Mentoring and webinars',
            'flow.4.i2': 'Q&A sessions and peer volunteers',
            'flow.4.i3': 'Support groups',
            'flow.5.title': 'Impact',
            'flow.5.i1': 'Scholarships and university places',
            'flow.5.i2': 'Ausbildung and careers',
            'flow.5.i3': 'Democratic integration',
            'problem.eyebrow': 'The problem',
            'problem.title': 'Motivation is not the barrier. Information is.',
            'problem.lead': 'Many young people have the ability and the will to continue their education, but they do not have access to reliable information or personal guidance.',
            'problem.i1': 'Lack of information about scholarships and educational opportunities.',
            'problem.i2': 'Difficulty understanding foreign education systems.',
            'problem.i3': 'Limited knowledge about university applications.',
            'problem.i4': 'Lack of awareness about Ausbildung opportunities in Germany.',
            'problem.i5': 'Difficulty finding free online learning resources.',
            'problem.i6': 'Language barriers.',
            'problem.i7': 'Lack of support when making educational decisions.',
            'problem.note': 'These challenges are especially serious for young people in Afghanistan — including girls and women who face limited educational opportunities — and for refugees and migrants in Germany who need support to continue their education and professional development.',
            'groups.eyebrow': 'Who we serve',
            'groups.title': 'Two main target groups, one shared need',
            'groups.af.title': 'Students in Afghanistan',
            'groups.af.i1': 'Young students searching for international education.',
            'groups.af.i2': 'Students looking for scholarships.',
            'groups.af.i3': 'Girls and women who need educational guidance.',
            'groups.af.i4': 'Students who need information about online learning.',
            'groups.de.title': 'Refugees and migrants in Germany',
            'groups.de.i1': 'German education pathways, universities and Ausbildung.',
            'groups.de.i2': 'IT training and free courses.',
            'groups.de.i3': 'Career development and integration through education.',
            'why.eyebrow': 'Why FEA, why now',
            'why.title': 'A timely idea, a scalable model, a founder-led team',
            'why.1.title': 'A timely idea',
            'why.1.body': 'Reaches learners the system routinely misses — including girls in Afghanistan and newcomers in Germany.',
            'why.2.title': 'A scalable model',
            'why.2.body': 'AI plus multilingual guidance scales across borders at a fraction of the cost of traditional counselling.',
            'why.3.title': 'A founder-led team',
            'why.3.body': 'Two software engineering students in Germany, building the tool they wish they had had.',
            'cta.title': 'Not sure where to start?',
            'cta.lead': 'Answer six short questions and see which scholarships, universities, Ausbildung programmes and free courses fit your situation.',
            'cta.button': 'Open the AI Analyzer',
            'cta.secondary': 'Or ask a question in the chat',
            /* ---------- about ---------- */
            'page.about.title': 'The project — FEA',
            'about.hero.eyebrow': 'Project concept',
            'about.hero.title': 'About Free Education Assistance',
            'about.hero.lead': 'A non-profit educational technology initiative that combines artificial intelligence, social media and personal mentoring to open real pathways into education.',
            'about.toc': 'On this page',
            'about.summary.title': '1. Project summary',
            'about.summary.p1': 'Free Education Assistance (FEA) is a non-profit educational technology initiative founded by two university students in Germany. The project provides free educational guidance and reliable information to young people — especially students from Afghanistan, refugees, migrants and individuals who face barriers in accessing education.',
            'about.summary.p2': 'FEA combines technology, artificial intelligence, social media and personal mentoring to help people discover educational pathways such as scholarships, universities, Ausbildung programmes, free online courses, language programmes and career opportunities. The platform lets people find opportunities, receive guidance, ask questions and connect with a supportive community — in German, English, Dari and Arabic.',
            'about.problem.title': '2. Problem statement',
            'about.objectives.title': '3. Objectives',
            'about.obj.1': 'Provide free educational guidance for students and newcomers.',
            'about.obj.2': 'Increase access to scholarships, universities, Ausbildung and learning opportunities.',
            'about.obj.3': 'Support refugees and migrants in Germany.',
            'about.obj.4': 'Help individuals choose suitable educational and career pathways.',
            'about.obj.5': 'Use technology to make educational information easier to access.',
            'about.obj.6': 'Build an international educational support community.',
            'about.obj.7': 'Provide information in different languages to reach more people.',
            'about.activities.title': '4. Main activities — the digital platform',
            'about.activities.lead': 'We are developing a website that provides free educational information and guidance. The platform includes:',
            'about.act.1': 'Scholarship information.',
            'about.act.2': 'University application guidance.',
            'about.act.3': 'Ausbildung information.',
            'about.act.4': 'Free online courses.',
            'about.act.5': 'German and English learning resources.',
            'about.act.6': 'Application preparation guidance.',
            'about.act.7': 'Career development information.',
            'about.act.8': 'Frequently asked questions.',
            'about.act.9': 'Educational pathways based on users’ interests and backgrounds.',
            'about.act.note': 'The website is designed to be simple, accessible and understandable for students who may have limited knowledge about international education systems — and it is available in German, English, Dari and Arabic.',
            'about.ai.title': '5. AI-assisted opportunity analyzer and support system',
            'about.ai.lead': 'As software engineering students, we integrate artificial intelligence into the platform to improve access and support. The AI system will:',
            'about.ai.1': 'Monitor educational opportunities regularly.',
            'about.ai.2': 'Organize scholarships, universities, Ausbildung programmes, internships and free courses.',
            'about.ai.3': 'Analyze deadlines, requirements and eligibility criteria.',
            'about.ai.4': 'Provide faster answers to common questions.',
            'about.ai.5': 'Support users through website chat assistance.',
            'about.ai.6': 'Support users through social media chat systems.',
            'about.ai.7': 'Provide daily monitoring and assistance to improve user experience.',
            'about.ai.note': 'The AI system works together with human support, so that users receive reliable guidance and practical help — never automated answers alone.',
            'about.social.title': '6. Social media and digital outreach',
            'about.social.p1': 'To reach young people who need educational support, FEA actively develops its online presence in Germany and Afghanistan across Instagram, Facebook, TikTok, Telegram and WhatsApp.',
            'about.social.p2': 'We boost our activities, educational campaigns and content visibility so that every student and newcomer can discover our free guidance. We regularly share new scholarships, university opportunities, Ausbildung information, free courses, language learning resources, success stories, guidance videos and application tips.',
            'about.social.p3': 'Reach grows through boosted social activities, regular educational content, search engine visibility, useful updates and an active online educational community.',
            'about.community.title': '7. Community support',
            'about.community.lead': 'Technology is combined with human support. FEA provides:',
            'about.comm.1': 'Online mentoring.',
            'about.comm.2': 'Educational webinars.',
            'about.comm.3': 'Question-and-answer sessions.',
            'about.comm.4': 'WhatsApp and Telegram support groups.',
            'about.comm.5': 'Guidance from students and volunteers.',
            'about.comm.6': 'Support for individuals planning their educational future.',
            'about.groups.title': '8. Target groups',
            'about.plan.title': '9. Implementation plan',
            'about.phase.label': 'Phase',
            'about.phase1.title': 'Website and social media development (until October)',
            'about.phase1.body': 'Develop the digital foundation: complete website development, prepare educational resources in German, English, Dari and Arabic, prepare the social media platforms, develop the AI support system and organize content.',
            'about.phase1.link': 'View the live development version',
            'about.phase2.title': 'Active launch and project development (from October)',
            'about.phase2.body': 'FEA becomes active: publish educational opportunities regularly (scholarships, universities, Ausbildung, free courses), support users through chat and social channels, collect feedback, and increase awareness in Germany and Afghanistan.',
            'about.phase3.title': 'Physical support centre in Afghanistan (after a successful first three months)',
            'about.phase3.body': 'Establish a physical support centre in Afghanistan to provide direct educational guidance, support students with limited access, and connect young people and girls with international opportunities.',
            'about.impact.title': '10. Expected impact',
            'about.impact.1': 'Help thousands of students access educational information.',
            'about.impact.2': 'Increase awareness about scholarships.',
            'about.impact.3': 'Support refugees and migrants in Germany.',
            'about.impact.4': 'Create a strong educational community.',
            'about.impact.5': 'Make education opportunities easier to discover.',
            'about.impact.6': 'Reduce barriers caused by lack of information.',
            'about.impact.7': 'Help people make better decisions about their educational future.',
            'about.vision.title': '11. Long-term vision',
            'about.vision.body': 'Create an international educational support network where every person — regardless of nationality, financial situation or background — can access reliable information and guidance to build their future. FEA believes that education creates opportunities, and that access to information is the first step toward achieving them.',
            /* ---------- opportunities ---------- */
            'page.opps.title': 'Opportunities — FEA',
            'opps.hero.eyebrow': 'Directory',
            'opps.hero.title': 'Educational opportunities',
            'opps.hero.lead': 'Scholarships, university routes, Ausbildung, language programmes and free online courses — filtered for your situation. Every entry links to the official source.',
            'opps.search.label': 'Search',
            'opps.search.ph': 'Search scholarships, universities, Ausbildung…',
            'opps.filter.kind': 'Type',
            'opps.filter.region': 'Region',
            'opps.filter.level': 'Education level',
            'opps.filter.all': 'All',
            'opps.filter.free': 'Free of charge only',
            'opps.reset': 'Reset filters',
            'opps.count': '{n} opportunities',
            'opps.sort': 'Sort by',
            'opps.sort.deadline': 'Deadline first',
            'opps.sort.az': 'A–Z',
            'opps.empty.title': 'No results',
            'opps.empty.body': 'Try removing a filter or searching with a different word.',
            'opps.note': 'Deadlines and requirements change. Always confirm the details on the official page before applying.',
            'kind.scholarship': 'Scholarship',
            'kind.university': 'University',
            'kind.ausbildung': 'Ausbildung',
            'kind.course': 'Free course',
            'kind.language': 'Language',
            'kind.career': 'Career',
            'region.germany': 'Germany',
            'region.afghanistan': 'Afghanistan',
            'region.online': 'Online',
            'region.international': 'International',
            'level.school': 'School student',
            'level.highschool': 'School leaver (12th grade)',
            'level.bachelor': 'Bachelor',
            'level.master': 'Master',
            'level.professional': 'Working professional',
            'lvl.none': 'Not required',
            'opp.daad.title': 'DAAD scholarship database',
            'opp.daad.provider': 'German Academic Exchange Service (DAAD)',
            'opp.daad.summary': 'The largest official database of scholarships for international students who want to study or research in Germany.',
            'opp.deutschlandstipendium.title': 'Deutschlandstipendium',
            'opp.deutschlandstipendium.provider': 'German universities · Federal Ministry',
            'opp.deutschlandstipendium.summary': '300 € per month for talented and committed students, independent of nationality. You apply directly at your university.',
            'opp.hildedomin.title': 'Hilde Domin Programme',
            'opp.hildedomin.provider': 'DAAD',
            'opp.hildedomin.summary': 'Scholarships for students and doctoral candidates who are formally or de facto denied education in their home country.',
            'opp.auw.title': 'Asian University for Women — full scholarship',
            'opp.auw.provider': 'AUW, Bangladesh',
            'opp.auw.summary': 'Full scholarships for women from Asia, including a dedicated pathway for Afghan students.',
            'opp.garantiefonds.title': 'Garantiefonds Hochschule',
            'opp.garantiefonds.provider': 'Otto Benecke Stiftung',
            'opp.garantiefonds.summary': 'Funding for young refugees and migrants in Germany who want to prepare for university study.',
            'opp.studienkolleg.title': 'Studienkolleg & Feststellungsprüfung',
            'opp.studienkolleg.provider': 'German Studienkollegs',
            'opp.studienkolleg.summary': 'One-year preparatory course for applicants whose school certificate is not directly recognised in Germany.',
            'opp.uniassist.title': 'uni-assist application service',
            'opp.uniassist.provider': 'uni-assist e.V.',
            'opp.uniassist.summary': 'Central service that checks international certificates and forwards applications to over 170 German universities.',
            'opp.ausbildungba.title': 'Ausbildung search portal',
            'opp.ausbildungba.provider': 'Bundesagentur für Arbeit',
            'opp.ausbildungba.summary': 'Official portal with thousands of paid apprenticeship places across every profession in Germany.',
            'opp.ihk.title': 'IHK Lehrstellenbörse',
            'opp.ihk.provider': 'Chambers of Industry and Commerce',
            'opp.ihk.summary': 'Regional apprenticeship exchange with vacancies from companies that train apprentices directly.',
            'opp.integrationskurs.title': 'Integration course (German + orientation)',
            'opp.integrationskurs.provider': 'BAMF',
            'opp.integrationskurs.summary': 'German up to level B1 plus an orientation course on law, history and society — often free of charge.',
            'opp.dwgerman.title': 'DW Learn German',
            'opp.dwgerman.provider': 'Deutsche Welle',
            'opp.dwgerman.summary': 'Free German courses from A1 to C1 with audio, video and exercises — no registration needed.',
            'opp.freecodecamp.title': 'freeCodeCamp — programming',
            'opp.freecodecamp.provider': 'freeCodeCamp',
            'opp.freecodecamp.summary': 'Free, certificate-based curriculum in web development, data analysis and software engineering.',
            'opp.edx.title': 'edX & Coursera — audit courses',
            'opp.edx.provider': 'International universities',
            'opp.edx.summary': 'University courses you can follow for free in audit mode; certificates are optional and paid.',
            'opp.makeit.title': 'Make it in Germany',
            'opp.makeit.provider': 'Federal Government portal',
            'opp.makeit.summary': 'Official guidance on recognition of qualifications, job search, visas and working life in Germany.',
            /* ---------- analyzer ---------- */
            'page.analyzer.title': 'AI Opportunity Analyzer — FEA',
            'an.hero.eyebrow': 'AI-assisted guidance',
            'an.hero.title': 'AI Opportunity Analyzer',
            'an.hero.lead': 'Six short questions. The analyzer weighs your location, education level, goal, interests, language levels and budget, then ranks the pathways that actually fit you.',
            'an.note': 'Prototype: the matching runs entirely in your browser. Nothing is uploaded and nothing is stored on a server.',
            'an.progress': 'Question {c} of {t}',
            'an.multi': 'Choose one or more',
            'an.q1': 'Where do you live right now?',
            'an.q1.afghanistan': 'Afghanistan',
            'an.q1.germany': 'Germany',
            'an.q1.other': 'Another country',
            'an.q2': 'What is your current education level?',
            'an.q3': 'What are you looking for?',
            'an.q3.scholarship': 'A scholarship',
            'an.q3.university': 'A university place',
            'an.q3.ausbildung': 'An Ausbildung in Germany',
            'an.q3.course': 'Free online courses',
            'an.q3.language': 'A language course',
            'an.q3.career': 'Career and job guidance',
            'an.q4': 'Which fields interest you?',
            'an.f.it': 'IT & software',
            'an.f.engineering': 'Engineering',
            'an.f.health': 'Medicine & health',
            'an.f.business': 'Business & economics',
            'an.f.social': 'Law & social sciences',
            'an.f.education': 'Teaching & education',
            'an.f.arts': 'Arts & design',
            'an.f.science': 'Natural sciences',
            'an.q56': 'What are your language levels?',
            'an.q5': 'What is your German level?',
            'an.q6': 'What is your English level?',
            'an.q7': 'Do you need opportunities that are completely free?',
            'an.q7.yes': 'Yes, free only',
            'an.q7.no': 'No, cost is not the main problem',
            'an.back': 'Back',
            'an.next': 'Next',
            'an.submit': 'Show my pathways',
            'an.err.field': 'Please choose at least one field.',
            'an.results.title': 'Your matched pathways',
            'an.results.lead': '{n} opportunities match your answers, strongest match first.',
            'an.results.empty': 'No strong match yet. Try widening your answers — for example choose more fields of interest.',
            'an.match': 'match',
            'an.why': 'Why this fits you',
            'an.restart': 'Start again',
            'an.print': 'Print / save as PDF',
            'an.next.title': 'What to do next',
            'an.next.1': 'Open the official link and check the current deadline and requirements.',
            'an.next.2': 'Prepare your documents early: certificates, translations, CV and motivation letter.',
            'an.next.3': 'Ask us in the chat or on WhatsApp if something is unclear — a real person will answer.',
            'reason.location': 'Fits your location',
            'reason.level': 'Fits your education level',
            'reason.goal': 'Matches what you are looking for',
            'reason.field': 'Matches your field of interest',
            'reason.language': 'Your language level is sufficient',
            'reason.free': 'Free of charge',
            'reason.available': 'Information available in your language',
            'reason.deadline': 'Deadline is still open',
            /* ---------- community ---------- */
            'page.community.title': 'Community & support — FEA',
            'com.hero.eyebrow': 'Human support',
            'com.hero.title': 'Technology finds the opportunity. People help you take it.',
            'com.hero.lead': 'Every automated answer is backed by mentors, volunteers and students who have walked the same path.',
            'com.1.title': 'Online mentoring',
            'com.1.body': 'One-to-one sessions with students and volunteers who help you choose a pathway and plan the next steps.',
            'com.2.title': 'Educational webinars',
            'com.2.body': 'Live sessions on scholarships, university applications, Ausbildung and studying in Germany.',
            'com.3.title': 'Question & answer sessions',
            'com.3.body': 'Open sessions where you can ask anything about applications, documents, deadlines and recognition.',
            'com.4.title': 'WhatsApp & Telegram groups',
            'com.4.body': 'Daily opportunity updates and a place to ask short questions and get quick answers.',
            'com.5.title': 'Student & volunteer guidance',
            'com.5.body': 'Peer support from people who applied recently and know the process from the inside.',
            'com.6.title': 'Planning your future',
            'com.6.body': 'Structured support for people who know they want to study or train, but not yet what or where.',
            'com.channels.title': 'Where to find us',
            'com.channels.lead': 'We publish new scholarships, university opportunities, Ausbildung places, free courses and application tips every week.',
            'com.volunteer.title': 'Become a volunteer mentor',
            'com.volunteer.body': 'Are you a student, a graduate or a professional? A single hour per month is enough to change the direction of someone’s education. We especially welcome mentors who speak Dari, Pashto or Arabic.',
            'com.volunteer.cta': 'Write to us',
            'faq.title': 'Frequently asked questions',
            'faq.lead': 'The questions we receive most often — in every language we support.',
            'faq.q1': 'Does FEA cost anything?',
            'faq.a1': 'No. All information, guidance, mentoring and tools are free. FEA is a non-profit initiative and does not charge fees, sell data or run advertising.',
            'faq.q2': 'Do I need to create an account?',
            'faq.a2': 'No. You can use the opportunity directory, the AI Analyzer and the chat without registering. Your analyzer answers stay in your own browser.',
            'faq.q3': 'Can FEA apply for a scholarship on my behalf?',
            'faq.a3': 'No. We do not submit applications and we are not an agency. We explain the requirements, help you understand the process and review your questions — the application itself always stays yours.',
            'faq.q4': 'I am in Afghanistan. Can I still use FEA?',
            'faq.a4': 'Yes. A large part of our work is aimed at students in Afghanistan, especially girls and women. Many opportunities we list — online courses, language programmes and international scholarships — can be started from home.',
            'faq.q5': 'What is an Ausbildung?',
            'faq.a5': 'An Ausbildung is a paid vocational training programme in Germany that combines working in a company with vocational school. It usually lasts two to three and a half years and ends with a recognised professional qualification.',
            'faq.q6': 'Which German level do I need?',
            'faq.a6': 'It depends on the pathway. Ausbildung usually requires B1 to B2, a German-language degree programme usually requires C1, and many Master programmes are taught in English. Language courses and online courses are open at every level.',
            'faq.q7': 'In which languages can I ask questions?',
            'faq.a7': 'German, English, Dari and Arabic — on the website, in the chat and in our social media channels.',
            'faq.q8': 'How reliable is the information?',
            'faq.a8': 'Every entry links to an official source such as DAAD, BAMF, the Bundesagentur für Arbeit or a university. We check entries regularly, but deadlines change — always confirm on the official page before applying.',
            /* ---------- contact ---------- */
            'page.contact.title': 'Contact — FEA',
            'ct.hero.eyebrow': 'Contact',
            'ct.hero.title': 'Ask us anything about your education',
            'ct.hero.lead': 'Write in German, English, Dari or Arabic. We answer in the same language.',
            'ct.form.title': 'Send a question',
            'ct.form.name': 'Your name',
            'ct.form.name.ph': 'First and last name',
            'ct.form.email': 'Email address',
            'ct.form.email.ph': 'you@example.com',
            'ct.form.lang': 'Answer me in',
            'ct.form.topic': 'Topic',
            'ct.topic.scholarship': 'Scholarships',
            'ct.topic.university': 'University application',
            'ct.topic.ausbildung': 'Ausbildung',
            'ct.topic.course': 'Courses & language',
            'ct.topic.volunteer': 'Volunteering / mentoring',
            'ct.topic.other': 'Something else',
            'ct.form.message': 'Your question',
            'ct.form.message.ph': 'Describe your situation: where you live, what you have studied and what you would like to do next.',
            'ct.form.consent': 'FEA may use my message to answer my question.',
            'ct.form.submit': 'Send message',
            'ct.form.note': 'No backend yet: the button opens your email application with the message already prepared.',
            'ct.err.name': 'Please enter your name.',
            'ct.err.email': 'Please enter a valid email address.',
            'ct.err.message': 'Please write at least 20 characters so we can help you properly.',
            'ct.err.consent': 'Please confirm this to continue.',
            'ct.ok': 'Your email application should open now. If nothing happens, write to us directly at the address below.',
            'ct.direct.title': 'Direct channels',
            'ct.direct.lead': 'Prefer a message instead of a form? All of these reach the same two people.',
            'ct.response.title': 'Response time',
            'ct.response.body': 'The AI assistant answers immediately, 24/7. A human reply usually takes one to three days — we are two students doing this next to our studies.',
            /* ---------- chat ---------- */
            'chat.open': 'Open the FEA assistant',
            'chat.title': 'FEA Assistant',
            'chat.subtitle': 'Answers in your language · 24/7',
            'chat.placeholder': 'Ask about scholarships, Ausbildung, courses…',
            'chat.send': 'Send',
            'chat.greeting': 'Hello! I am the FEA assistant. Ask me about scholarships, universities, Ausbildung, free courses or learning German — in German, English, Dari or Arabic.',
            'chat.fallback': 'I do not have a saved answer for that yet. Try one of the topics below, or send us your question on the contact page — a real person will answer you.',
            'chat.disclaimer': 'Prototype: answers come from a local knowledge base in your browser, not yet from a live AI service.',
            'chat.you': 'You',
            'chat.bot': 'FEA',
            'chat.typing': 'typing…',
            'chip.scholarship': 'Scholarships',
            'chip.ausbildung': 'Ausbildung',
            'chip.university': 'University',
            'chip.german': 'Learning German',
            'chip.free': 'Free courses',
            'chip.afghanistan': 'I am in Afghanistan',
            'chip.contact': 'Talk to a person',
            'chip.cost': 'Does it cost anything?',
            'ans.scholarship': 'Scholarships are the fastest route for many students. Start with the DAAD database for Germany, the Deutschlandstipendium if you already study at a German university, and the Hilde Domin Programme if your education is at risk in your home country. Open the Opportunities page and filter by “Scholarship”.',
            'ans.ausbildung': 'An Ausbildung is paid vocational training in Germany: you work in a company and attend a vocational school. It usually takes 2–3.5 years and you earn a salary from the first month. You normally need German at B1–B2 and a school certificate. Search on the portal of the Bundesagentur für Arbeit or the IHK Lehrstellenbörse.',
            'ans.university': 'For a German university you usually need a recognised school certificate, a language certificate (C1 for German-taught, IELTS/TOEFL for English-taught) and an application through uni-assist. If your certificate is not directly recognised, the route is a Studienkolleg plus the Feststellungsprüfung.',
            'ans.german': 'You can start German for free today: DW Learn German covers A1 to C1 with audio, video and exercises. If you already live in Germany, ask about a BAMF integration course — it takes you to B1 and is often free of charge.',
            'ans.free': 'Free online courses are available for every field: freeCodeCamp for programming, edX and Coursera in audit mode for university subjects, and DW for German. Filter the Opportunities page by “Free course”.',
            'ans.afghanistan': 'A large part of FEA is built for students in Afghanistan, especially girls and women. From home you can start online courses, learn German or English, and apply for international scholarships such as the Asian University for Women or the Hilde Domin Programme. Our Telegram and WhatsApp groups post new opportunities daily.',
            'ans.cost': 'Everything FEA offers is free: the website, the analyzer, the chat, mentoring and our social media guidance. We are a non-profit initiative — we take no fees and we never sell your data.',
            'ans.contact': 'You can reach a real person through the contact page, or through our WhatsApp and Telegram groups. We answer in German, English, Dari and Arabic, usually within one to three days.',
            'ans.analyzer': 'The AI Opportunity Analyzer asks six short questions — location, education level, goal, fields of interest, language levels and budget — and then ranks the opportunities that fit you. It runs entirely in your browser.',
            'ans.greeting': 'Hello and welcome! How can I help with your education today? You can ask about scholarships, universities, Ausbildung, free courses or German.',
        };
    })(Locales = FEA.Locales || (FEA.Locales = {}));
})(FEA || (FEA = {}));
/** Deutsch — German dictionary. */
var FEA;
(function (FEA) {
    var Locales;
    (function (Locales) {
        Locales.de = {
            /* ---------- global ---------- */
            'brand.name': 'Free Education Assistance',
            'brand.short': 'FEA',
            'brand.tagline': 'Kostenlose Bildungsberatung auf Deutsch, Englisch, Dari und Arabisch',
            'common.skip': 'Zum Hauptinhalt springen',
            'common.menu': 'Menü',
            'common.close': 'Schließen',
            'common.theme': 'Hell / dunkel umschalten',
            'common.language': 'Sprache',
            'common.free': 'Kostenlos',
            'common.deadline': 'Frist',
            'common.rolling': 'Laufend — jederzeit bewerben',
            'common.langreq': 'Sprachniveau',
            'common.level': 'Niveau',
            'common.openLink': 'Offizielle Informationen',
            'common.top': 'Nach oben',
            'common.demoNote': 'Frontend-Prototyp. Daten werden nur lokal im Browser gespeichert.',
            'nav.home': 'Start',
            'nav.about': 'Projekt',
            'nav.opps': 'Möglichkeiten',
            'nav.analyzer': 'KI-Analyse',
            'nav.community': 'Community',
            'nav.contact': 'Kontakt',
            'nav.cta': 'Deinen Weg finden',
            'footer.about': 'FEA ist eine gemeinnützige Initiative von zwei Studierenden der Softwaretechnik in Deutschland. Wir helfen Studierenden, Geflüchteten und Neuzugewanderten dabei, Bildungswege zu finden — kostenlos und in vier Sprachen.',
            'footer.links': 'Seiten',
            'footer.channels': 'Folge uns',
            'footer.languages': 'Sprachen',
            'footer.legal': 'Gemeinnützig · Keine Gebühren · Keine Werbung',
            'footer.rights': '© 2026 Free Education Assistance. Projektkonzept für die Werner-Schulz-Stipendien 2026.',
            'footer.dev': 'Live-Entwicklungsversion',
            /* ---------- home ---------- */
            'page.home.title': 'FEA — Free Education Assistance',
            'hero.eyebrow': 'Gemeinnützig · Gegründet von zwei Studierenden in Deutschland',
            'hero.title': 'Bildung darf nicht davon abhängen, wo man geboren wurde.',
            'hero.lead': 'FEA bietet Studierenden, Geflüchteten und Neuzugewanderten kostenlose Bildungsberatung: Stipendien, Universitäten, Ausbildung, kostenlose Onlinekurse und Sprachprogramme — verständlich erklärt, in vier Sprachen.',
            'hero.ctaPrimary': 'KI-Analyse starten',
            'hero.ctaSecondary': 'Möglichkeiten ansehen',
            'hero.trust': 'Keine Gebühren. Keine Anmeldung. Keine versteckten Bedingungen.',
            'hero.cardTitle': 'Dein Weg in 6 Fragen',
            'hero.cardBody': 'Beantworte ein paar Fragen zu deinem Wohnort, deiner Ausbildung und deinen Sprachkenntnissen. Die Analyse sortiert die Möglichkeiten, die wirklich zu dir passen.',
            'hero.cardBadge': 'KI-gestützt',
            'stat.languages.value': '4',
            'stat.languages.label': 'Sprachen: Deutsch, Englisch, Dari, Arabisch',
            'stat.support.value': '24/7',
            'stat.support.label': 'Automatische Antworten und Beratung',
            'stat.channels.value': '5',
            'stat.channels.label': 'Social-Media-Kanäle mit täglichen Updates',
            'stat.cost.value': '0 €',
            'stat.cost.label': 'Kosten für alle Nutzenden, immer',
            'values.eyebrow': 'Zivilgesellschaftliche Werte',
            'values.title': 'Drei Prinzipien hinter jeder Entscheidung von FEA',
            'values.lead': 'FEA ist mehr als eine Suchmaschine. Es ist ein Integrationsprojekt auf der Grundlage demokratischer Werte.',
            'values.1.title': 'Gesellschaftliche Dringlichkeit',
            'values.1.body': 'Ausgrenzung und Polarisierung verhindern. In einer Zeit von Polarisierung und sozialer Ausgrenzung sind glaubwürdige Wege in Bildung und Beschäftigung entscheidend. Strukturierte Integration verhindert Isolation und Anfälligkeit für destruktive Einflüsse und hält junge Neuzugewanderte mit der Gesellschaft verbunden.',
            'values.2.title': 'Demokratische Grundpfeiler',
            'values.2.body': 'Bildung auf der Grundlage demokratischer Werte ist ein starkes Instrument der Integration. Sie ermöglicht Menschen aus unterschiedlichen kulturellen Kontexten, unsere Gesellschaft zu verstehen, zu respektieren und mitzugestalten — und die eigenen Talente zu entwickeln.',
            'values.3.title': 'Beitrag & Wertschöpfung',
            'values.3.body': 'Echte Integration ist keine Einbahnstraße. Sie muss Chancen schaffen, aber auch aktive Teilhabe, Verantwortung und Wertschöpfung fördern. Neuzugewanderte werden befähigt, mit ihren eigenen Fähigkeiten beizutragen — wirtschaftlich, sozial und kulturell.',
            'flow.eyebrow': 'Ökosystem & Ablauf',
            'flow.title': 'Von den Menschen, die wir erreichen, zur Wirkung, die wir schaffen',
            'flow.lead': 'Fünf verbundene Ebenen: Zielgruppen, digitaler Kern, Reichweite, menschliche Unterstützung und Wirkung.',
            'flow.1.title': 'Zielgruppen',
            'flow.1.i1': 'Afghanische Studierende und Frauen',
            'flow.1.i2': 'Geflüchtete und Migrantinnen und Migranten in Deutschland',
            'flow.1.i3': 'Jugendliche mit Zugangsbarrieren',
            'flow.2.title': 'Web- & KI-Kern',
            'flow.2.i1': 'KI-gestützte Chancen-Analyse',
            'flow.2.i2': 'Automatischer Frage-Antwort-Chat rund um die Uhr',
            'flow.2.i3': 'Portal auf Deutsch, Englisch, Dari und Arabisch',
            'flow.3.title': 'Reichweite',
            'flow.3.i1': 'Instagram, Facebook, TikTok, Telegram, WhatsApp',
            'flow.3.i2': 'Beworbene Bildungskampagnen',
            'flow.3.i3': 'Tägliche Updates zu neuen Möglichkeiten',
            'flow.4.title': 'Menschliche Unterstützung',
            'flow.4.i1': 'Mentoring und Webinare',
            'flow.4.i2': 'Fragestunden und ehrenamtliche Peers',
            'flow.4.i3': 'Unterstützungsgruppen',
            'flow.5.title': 'Wirkung',
            'flow.5.i1': 'Stipendien und Studienplätze',
            'flow.5.i2': 'Ausbildung und Berufswege',
            'flow.5.i3': 'Demokratische Integration',
            'problem.eyebrow': 'Das Problem',
            'problem.title': 'Nicht die Motivation ist die Hürde, sondern die Information.',
            'problem.lead': 'Viele junge Menschen haben die Fähigkeit und den Willen, ihre Bildung fortzusetzen — aber keinen Zugang zu verlässlichen Informationen und persönlicher Beratung.',
            'problem.i1': 'Fehlende Informationen über Stipendien und Bildungsangebote.',
            'problem.i2': 'Schwierigkeiten, fremde Bildungssysteme zu verstehen.',
            'problem.i3': 'Wenig Wissen über Universitätsbewerbungen.',
            'problem.i4': 'Geringe Kenntnis über Ausbildungsmöglichkeiten in Deutschland.',
            'problem.i5': 'Schwierigkeiten, kostenlose Online-Lernangebote zu finden.',
            'problem.i6': 'Sprachbarrieren.',
            'problem.i7': 'Fehlende Unterstützung bei Bildungsentscheidungen.',
            'problem.note': 'Besonders gravierend sind diese Hürden für junge Menschen in Afghanistan — vor allem für Mädchen und Frauen mit stark eingeschränkten Bildungsmöglichkeiten — sowie für Geflüchtete und Migrantinnen und Migranten in Deutschland, die Unterstützung für ihre Bildung und berufliche Entwicklung brauchen.',
            'groups.eyebrow': 'Für wen wir da sind',
            'groups.title': 'Zwei Hauptzielgruppen, ein gemeinsamer Bedarf',
            'groups.af.title': 'Studierende in Afghanistan',
            'groups.af.i1': 'Junge Menschen auf der Suche nach internationaler Bildung.',
            'groups.af.i2': 'Studierende, die Stipendien suchen.',
            'groups.af.i3': 'Mädchen und Frauen, die Bildungsberatung brauchen.',
            'groups.af.i4': 'Studierende, die Informationen über Online-Lernen benötigen.',
            'groups.de.title': 'Geflüchtete und Migranten in Deutschland',
            'groups.de.i1': 'Deutsche Bildungswege, Universitäten und Ausbildung.',
            'groups.de.i2': 'IT-Weiterbildung und kostenlose Kurse.',
            'groups.de.i3': 'Berufliche Entwicklung und Integration durch Bildung.',
            'why.eyebrow': 'Warum FEA, warum jetzt',
            'why.title': 'Eine Idee zur richtigen Zeit, ein skalierbares Modell, ein Gründungsteam',
            'why.1.title': 'Eine Idee zur richtigen Zeit',
            'why.1.body': 'Erreicht Lernende, die das System regelmäßig übersieht — darunter Mädchen in Afghanistan und Neuzugewanderte in Deutschland.',
            'why.2.title': 'Ein skalierbares Modell',
            'why.2.body': 'KI und mehrsprachige Beratung skalieren über Grenzen hinweg — zu einem Bruchteil der Kosten klassischer Beratung.',
            'why.3.title': 'Ein Gründungsteam',
            'why.3.body': 'Zwei Studierende der Softwaretechnik in Deutschland, die das Werkzeug bauen, das sie selbst gebraucht hätten.',
            'cta.title': 'Du weißt nicht, wo du anfangen sollst?',
            'cta.lead': 'Beantworte sechs kurze Fragen und sieh, welche Stipendien, Universitäten, Ausbildungen und kostenlosen Kurse zu deiner Situation passen.',
            'cta.button': 'KI-Analyse öffnen',
            'cta.secondary': 'Oder stelle deine Frage im Chat',
            /* ---------- about ---------- */
            'page.about.title': 'Das Projekt — FEA',
            'about.hero.eyebrow': 'Projektkonzept',
            'about.hero.title': 'Über Free Education Assistance',
            'about.hero.lead': 'Eine gemeinnützige Bildungstechnologie-Initiative, die künstliche Intelligenz, soziale Medien und persönliches Mentoring verbindet, um echte Bildungswege zu öffnen.',
            'about.toc': 'Auf dieser Seite',
            'about.summary.title': '1. Projektzusammenfassung',
            'about.summary.p1': 'Free Education Assistance (FEA) ist eine gemeinnützige Bildungstechnologie-Initiative, gegründet von zwei Studierenden in Deutschland. Das Projekt bietet jungen Menschen kostenlose Bildungsberatung und verlässliche Informationen — besonders Studierenden aus Afghanistan, Geflüchteten, Migrantinnen und Migranten sowie Menschen mit Zugangsbarrieren zu Bildung.',
            'about.summary.p2': 'FEA verbindet Technologie, künstliche Intelligenz, soziale Medien und persönliches Mentoring, um Bildungswege sichtbar zu machen: Stipendien, Universitäten, Ausbildung, kostenlose Onlinekurse, Sprachprogramme und berufliche Perspektiven. Auf der Plattform findet man Angebote, erhält Beratung, stellt Fragen und wird Teil einer unterstützenden Gemeinschaft — auf Deutsch, Englisch, Dari und Arabisch.',
            'about.problem.title': '2. Problemstellung',
            'about.objectives.title': '3. Ziele',
            'about.obj.1': 'Kostenlose Bildungsberatung für Studierende und Neuzugewanderte bieten.',
            'about.obj.2': 'Zugang zu Stipendien, Universitäten, Ausbildung und Lernangeboten verbessern.',
            'about.obj.3': 'Geflüchtete und Migrantinnen und Migranten in Deutschland unterstützen.',
            'about.obj.4': 'Menschen helfen, passende Bildungs- und Berufswege zu wählen.',
            'about.obj.5': 'Technologie nutzen, um Bildungsinformationen leichter zugänglich zu machen.',
            'about.obj.6': 'Eine internationale Bildungs-Community aufbauen.',
            'about.obj.7': 'Informationen in mehreren Sprachen bereitstellen, um mehr Menschen zu erreichen.',
            'about.activities.title': '4. Hauptaktivitäten — die digitale Plattform',
            'about.activities.lead': 'Wir entwickeln eine Website mit kostenlosen Bildungsinformationen und Beratung. Die Plattform umfasst:',
            'about.act.1': 'Informationen zu Stipendien.',
            'about.act.2': 'Beratung zur Universitätsbewerbung.',
            'about.act.3': 'Informationen zur Ausbildung.',
            'about.act.4': 'Kostenlose Onlinekurse.',
            'about.act.5': 'Lernmaterial für Deutsch und Englisch.',
            'about.act.6': 'Unterstützung bei der Bewerbungsvorbereitung.',
            'about.act.7': 'Informationen zur beruflichen Entwicklung.',
            'about.act.8': 'Häufig gestellte Fragen.',
            'about.act.9': 'Bildungswege basierend auf Interessen und Hintergrund der Nutzenden.',
            'about.act.note': 'Die Website ist bewusst einfach, barrierearm und verständlich gestaltet — auch für Menschen mit wenig Vorwissen über internationale Bildungssysteme. Sie ist auf Deutsch, Englisch, Dari und Arabisch verfügbar.',
            'about.ai.title': '5. KI-gestützte Chancen-Analyse und Unterstützungssystem',
            'about.ai.lead': 'Als Studierende der Softwaretechnik integrieren wir künstliche Intelligenz in die Plattform, um Zugang und Unterstützung zu verbessern. Das KI-System wird:',
            'about.ai.1': 'Bildungsangebote regelmäßig beobachten.',
            'about.ai.2': 'Stipendien, Universitäten, Ausbildungen, Praktika und kostenlose Kurse strukturieren.',
            'about.ai.3': 'Fristen, Voraussetzungen und Zulassungskriterien analysieren.',
            'about.ai.4': 'Schnellere Antworten auf häufige Fragen geben.',
            'about.ai.5': 'Nutzende über den Chat auf der Website unterstützen.',
            'about.ai.6': 'Nutzende über die Chat-Systeme der sozialen Medien unterstützen.',
            'about.ai.7': 'Täglich beobachten und unterstützen, um die Nutzererfahrung zu verbessern.',
            'about.ai.note': 'Das KI-System arbeitet mit menschlicher Unterstützung zusammen, damit Nutzende verlässliche Beratung und praktische Hilfe erhalten — nie nur automatische Antworten.',
            'about.social.title': '6. Soziale Medien und digitale Reichweite',
            'about.social.p1': 'Um junge Menschen mit Beratungsbedarf zu erreichen, baut FEA seine Präsenz in Deutschland und Afghanistan aktiv aus: Instagram, Facebook, TikTok, Telegram und WhatsApp.',
            'about.social.p2': 'Wir bewerben unsere Aktivitäten, Bildungskampagnen und Inhalte gezielt, damit alle Studierenden und Neuzugewanderten unsere kostenlose Beratung finden können. Wir teilen regelmäßig neue Stipendien, Studienmöglichkeiten, Ausbildungsinformationen, kostenlose Kurse, Sprachlernangebote, Erfolgsgeschichten, Erklärvideos und Bewerbungstipps.',
            'about.social.p3': 'Reichweite entsteht durch beworbene Aktivitäten, regelmäßige Bildungsinhalte, Sichtbarkeit in Suchmaschinen, nützliche Updates und eine aktive Online-Bildungsgemeinschaft.',
            'about.community.title': '7. Community-Unterstützung',
            'about.community.lead': 'Technologie wird mit menschlicher Unterstützung verbunden. FEA bietet:',
            'about.comm.1': 'Online-Mentoring.',
            'about.comm.2': 'Bildungs-Webinare.',
            'about.comm.3': 'Frage-und-Antwort-Sitzungen.',
            'about.comm.4': 'WhatsApp- und Telegram-Gruppen.',
            'about.comm.5': 'Beratung durch Studierende und Ehrenamtliche.',
            'about.comm.6': 'Unterstützung bei der Planung der eigenen Bildungszukunft.',
            'about.groups.title': '8. Zielgruppen',
            'about.plan.title': '9. Umsetzungsplan',
            'about.phase.label': 'Phase',
            'about.phase1.title': 'Website- und Social-Media-Entwicklung (bis Oktober)',
            'about.phase1.body': 'Digitale Grundlage schaffen: Website fertigstellen, Bildungsmaterialien auf Deutsch, Englisch, Dari und Arabisch vorbereiten, Social-Media-Kanäle aufbauen, KI-Unterstützungssystem entwickeln und Inhalte strukturieren.',
            'about.phase1.link': 'Live-Entwicklungsversion ansehen',
            'about.phase2.title': 'Aktiver Start und Projektentwicklung (ab Oktober)',
            'about.phase2.body': 'FEA wird aktiv: regelmäßige Veröffentlichung von Bildungsangeboten (Stipendien, Universitäten, Ausbildung, kostenlose Kurse), Unterstützung über Chat und soziale Kanäle, Feedback sammeln und Bekanntheit in Deutschland und Afghanistan steigern.',
            'about.phase3.title': 'Physisches Unterstützungszentrum in Afghanistan (nach erfolgreichen ersten drei Monaten)',
            'about.phase3.body': 'Aufbau eines physischen Zentrums in Afghanistan für direkte Bildungsberatung, Unterstützung von Menschen mit eingeschränktem Zugang und Vermittlung junger Menschen und Mädchen an internationale Angebote.',
            'about.impact.title': '10. Erwartete Wirkung',
            'about.impact.1': 'Tausende Studierende erhalten Zugang zu Bildungsinformationen.',
            'about.impact.2': 'Mehr Bewusstsein für Stipendien schaffen.',
            'about.impact.3': 'Geflüchtete und Migranten in Deutschland unterstützen.',
            'about.impact.4': 'Eine starke Bildungsgemeinschaft aufbauen.',
            'about.impact.5': 'Bildungsangebote leichter auffindbar machen.',
            'about.impact.6': 'Barrieren durch fehlende Informationen abbauen.',
            'about.impact.7': 'Bessere Entscheidungen über die eigene Bildungszukunft ermöglichen.',
            'about.vision.title': '11. Langfristige Vision',
            'about.vision.body': 'Ein internationales Bildungsnetzwerk aufbauen, in dem jeder Mensch — unabhängig von Nationalität, finanzieller Situation oder Herkunft — Zugang zu verlässlichen Informationen und Beratung hat, um die eigene Zukunft zu gestalten. FEA ist überzeugt: Bildung schafft Chancen, und der Zugang zu Information ist der erste Schritt dorthin.',
            /* ---------- opportunities ---------- */
            'page.opps.title': 'Möglichkeiten — FEA',
            'opps.hero.eyebrow': 'Übersicht',
            'opps.hero.title': 'Bildungsmöglichkeiten',
            'opps.hero.lead': 'Stipendien, Studienwege, Ausbildung, Sprachprogramme und kostenlose Onlinekurse — gefiltert für deine Situation. Jeder Eintrag verlinkt auf die offizielle Quelle.',
            'opps.search.label': 'Suche',
            'opps.search.ph': 'Stipendien, Universitäten, Ausbildung suchen …',
            'opps.filter.kind': 'Art',
            'opps.filter.region': 'Region',
            'opps.filter.level': 'Bildungsniveau',
            'opps.filter.all': 'Alle',
            'opps.filter.free': 'Nur kostenlose Angebote',
            'opps.reset': 'Filter zurücksetzen',
            'opps.count': '{n} Möglichkeiten',
            'opps.sort': 'Sortieren nach',
            'opps.sort.deadline': 'Frist zuerst',
            'opps.sort.az': 'A–Z',
            'opps.empty.title': 'Keine Ergebnisse',
            'opps.empty.body': 'Entferne einen Filter oder suche mit einem anderen Begriff.',
            'opps.note': 'Fristen und Voraussetzungen ändern sich. Bitte prüfe die Angaben vor der Bewerbung immer auf der offiziellen Seite.',
            'kind.scholarship': 'Stipendium',
            'kind.university': 'Universität',
            'kind.ausbildung': 'Ausbildung',
            'kind.course': 'Kostenloser Kurs',
            'kind.language': 'Sprache',
            'kind.career': 'Beruf',
            'region.germany': 'Deutschland',
            'region.afghanistan': 'Afghanistan',
            'region.online': 'Online',
            'region.international': 'International',
            'level.school': 'Schülerin / Schüler',
            'level.highschool': 'Schulabschluss (12. Klasse)',
            'level.bachelor': 'Bachelor',
            'level.master': 'Master',
            'level.professional': 'Berufstätig',
            'lvl.none': 'Nicht erforderlich',
            'opp.daad.title': 'DAAD-Stipendiendatenbank',
            'opp.daad.provider': 'Deutscher Akademischer Austauschdienst (DAAD)',
            'opp.daad.summary': 'Die größte offizielle Datenbank für Stipendien internationaler Studierender, die in Deutschland studieren oder forschen möchten.',
            'opp.deutschlandstipendium.title': 'Deutschlandstipendium',
            'opp.deutschlandstipendium.provider': 'Deutsche Hochschulen · Bundesministerium',
            'opp.deutschlandstipendium.summary': '300 € pro Monat für talentierte und engagierte Studierende, unabhängig von der Nationalität. Bewerbung direkt an der Hochschule.',
            'opp.hildedomin.title': 'Hilde-Domin-Programm',
            'opp.hildedomin.provider': 'DAAD',
            'opp.hildedomin.summary': 'Stipendien für Studierende und Promovierende, denen im Herkunftsland Bildung formal oder faktisch verwehrt wird.',
            'opp.auw.title': 'Asian University for Women — Vollstipendium',
            'opp.auw.provider': 'AUW, Bangladesch',
            'opp.auw.summary': 'Vollstipendien für Frauen aus Asien, mit einem eigenen Programm für afghanische Studentinnen.',
            'opp.garantiefonds.title': 'Garantiefonds Hochschule',
            'opp.garantiefonds.provider': 'Otto Benecke Stiftung',
            'opp.garantiefonds.summary': 'Förderung für junge Geflüchtete und Zugewanderte in Deutschland, die sich auf ein Studium vorbereiten möchten.',
            'opp.studienkolleg.title': 'Studienkolleg & Feststellungsprüfung',
            'opp.studienkolleg.provider': 'Deutsche Studienkollegs',
            'opp.studienkolleg.summary': 'Einjähriger Vorbereitungskurs für Bewerbende, deren Schulabschluss in Deutschland nicht direkt anerkannt wird.',
            'opp.uniassist.title': 'uni-assist Bewerbungsservice',
            'opp.uniassist.provider': 'uni-assist e.V.',
            'opp.uniassist.summary': 'Zentrale Stelle, die internationale Zeugnisse prüft und Bewerbungen an über 170 deutsche Hochschulen weiterleitet.',
            'opp.ausbildungba.title': 'Ausbildungsportal der Arbeitsagentur',
            'opp.ausbildungba.provider': 'Bundesagentur für Arbeit',
            'opp.ausbildungba.summary': 'Offizielles Portal mit tausenden bezahlten Ausbildungsplätzen in allen Berufsfeldern in Deutschland.',
            'opp.ihk.title': 'IHK-Lehrstellenbörse',
            'opp.ihk.provider': 'Industrie- und Handelskammern',
            'opp.ihk.summary': 'Regionale Lehrstellenbörse mit freien Plätzen direkt von ausbildenden Unternehmen.',
            'opp.integrationskurs.title': 'Integrationskurs (Deutsch + Orientierung)',
            'opp.integrationskurs.provider': 'BAMF',
            'opp.integrationskurs.summary': 'Deutsch bis Niveau B1 plus Orientierungskurs zu Recht, Geschichte und Gesellschaft — häufig kostenfrei.',
            'opp.dwgerman.title': 'DW Deutsch lernen',
            'opp.dwgerman.provider': 'Deutsche Welle',
            'opp.dwgerman.summary': 'Kostenlose Deutschkurse von A1 bis C1 mit Audio, Video und Übungen — ohne Anmeldung.',
            'opp.freecodecamp.title': 'freeCodeCamp — Programmieren',
            'opp.freecodecamp.provider': 'freeCodeCamp',
            'opp.freecodecamp.summary': 'Kostenloses Lernprogramm mit Zertifikaten in Webentwicklung, Datenanalyse und Softwaretechnik.',
            'opp.edx.title': 'edX & Coursera — Kurse im Audit-Modus',
            'opp.edx.provider': 'Internationale Universitäten',
            'opp.edx.summary': 'Universitätskurse, die im Audit-Modus kostenlos belegt werden können; Zertifikate sind optional und kostenpflichtig.',
            'opp.makeit.title': 'Make it in Germany',
            'opp.makeit.provider': 'Portal der Bundesregierung',
            'opp.makeit.summary': 'Offizielle Informationen zu Anerkennung von Abschlüssen, Jobsuche, Visum und Arbeitsleben in Deutschland.',
            /* ---------- analyzer ---------- */
            'page.analyzer.title': 'KI-Chancen-Analyse — FEA',
            'an.hero.eyebrow': 'KI-gestützte Beratung',
            'an.hero.title': 'KI-Chancen-Analyse',
            'an.hero.lead': 'Sechs kurze Fragen. Die Analyse gewichtet Wohnort, Bildungsniveau, Ziel, Interessen, Sprachniveau und Budget und sortiert die Wege, die wirklich zu dir passen.',
            'an.note': 'Prototyp: Die Auswertung läuft vollständig in deinem Browser. Nichts wird hochgeladen, nichts auf einem Server gespeichert.',
            'an.progress': 'Frage {c} von {t}',
            'an.multi': 'Mehrfachauswahl möglich',
            'an.q1': 'Wo lebst du im Moment?',
            'an.q1.afghanistan': 'Afghanistan',
            'an.q1.germany': 'Deutschland',
            'an.q1.other': 'Ein anderes Land',
            'an.q2': 'Welches Bildungsniveau hast du aktuell?',
            'an.q3': 'Wonach suchst du?',
            'an.q3.scholarship': 'Ein Stipendium',
            'an.q3.university': 'Einen Studienplatz',
            'an.q3.ausbildung': 'Eine Ausbildung in Deutschland',
            'an.q3.course': 'Kostenlose Onlinekurse',
            'an.q3.language': 'Einen Sprachkurs',
            'an.q3.career': 'Berufliche Orientierung',
            'an.q4': 'Welche Bereiche interessieren dich?',
            'an.f.it': 'IT & Software',
            'an.f.engineering': 'Ingenieurwesen',
            'an.f.health': 'Medizin & Gesundheit',
            'an.f.business': 'Wirtschaft',
            'an.f.social': 'Recht & Sozialwissenschaften',
            'an.f.education': 'Pädagogik & Bildung',
            'an.f.arts': 'Kunst & Design',
            'an.f.science': 'Naturwissenschaften',
            'an.q56': 'Wie gut sind deine Sprachkenntnisse?',
            'an.q5': 'Wie gut ist dein Deutsch?',
            'an.q6': 'Wie gut ist dein Englisch?',
            'an.q7': 'Brauchst du Angebote, die vollständig kostenlos sind?',
            'an.q7.yes': 'Ja, nur kostenlose',
            'an.q7.no': 'Nein, Kosten sind nicht das Hauptproblem',
            'an.back': 'Zurück',
            'an.next': 'Weiter',
            'an.submit': 'Meine Wege anzeigen',
            'an.err.field': 'Bitte wähle mindestens einen Bereich aus.',
            'an.results.title': 'Deine passenden Bildungswege',
            'an.results.lead': '{n} Möglichkeiten passen zu deinen Antworten — die beste Übereinstimmung zuerst.',
            'an.results.empty': 'Noch keine gute Übereinstimmung. Erweitere deine Antworten, zum Beispiel mit mehr Interessensbereichen.',
            'an.match': 'Übereinstimmung',
            'an.why': 'Warum das zu dir passt',
            'an.restart': 'Neu starten',
            'an.print': 'Drucken / als PDF speichern',
            'an.next.title': 'Die nächsten Schritte',
            'an.next.1': 'Öffne den offiziellen Link und prüfe aktuelle Frist und Voraussetzungen.',
            'an.next.2': 'Bereite deine Unterlagen früh vor: Zeugnisse, Übersetzungen, Lebenslauf und Motivationsschreiben.',
            'an.next.3': 'Frag uns im Chat oder über WhatsApp, wenn etwas unklar ist — eine echte Person antwortet dir.',
            'reason.location': 'Passt zu deinem Wohnort',
            'reason.level': 'Passt zu deinem Bildungsniveau',
            'reason.goal': 'Entspricht deinem Ziel',
            'reason.field': 'Passt zu deinem Interessensbereich',
            'reason.language': 'Dein Sprachniveau reicht aus',
            'reason.free': 'Kostenfrei',
            'reason.available': 'Informationen in deiner Sprache verfügbar',
            'reason.deadline': 'Frist ist noch offen',
            /* ---------- community ---------- */
            'page.community.title': 'Community & Unterstützung — FEA',
            'com.hero.eyebrow': 'Menschliche Unterstützung',
            'com.hero.title': 'Technologie findet die Chance. Menschen helfen dir, sie zu nutzen.',
            'com.hero.lead': 'Hinter jeder automatischen Antwort stehen Mentorinnen und Mentoren, Ehrenamtliche und Studierende, die denselben Weg gegangen sind.',
            'com.1.title': 'Online-Mentoring',
            'com.1.body': 'Einzelgespräche mit Studierenden und Ehrenamtlichen, die dir helfen, einen Weg zu wählen und die nächsten Schritte zu planen.',
            'com.2.title': 'Bildungs-Webinare',
            'com.2.body': 'Live-Sitzungen zu Stipendien, Universitätsbewerbungen, Ausbildung und Studium in Deutschland.',
            'com.3.title': 'Frage-und-Antwort-Sitzungen',
            'com.3.body': 'Offene Runden für alle Fragen zu Bewerbungen, Unterlagen, Fristen und Anerkennung.',
            'com.4.title': 'WhatsApp- & Telegram-Gruppen',
            'com.4.body': 'Tägliche Updates zu neuen Möglichkeiten und ein Ort für kurze Fragen mit schnellen Antworten.',
            'com.5.title': 'Beratung durch Studierende & Ehrenamtliche',
            'com.5.body': 'Peer-Unterstützung von Menschen, die sich selbst kürzlich beworben haben und den Prozess von innen kennen.',
            'com.6.title': 'Zukunft planen',
            'com.6.body': 'Strukturierte Unterstützung für alle, die studieren oder eine Ausbildung machen möchten — aber noch nicht wissen, was und wo.',
            'com.channels.title': 'Wo du uns findest',
            'com.channels.lead': 'Wir veröffentlichen jede Woche neue Stipendien, Studienmöglichkeiten, Ausbildungsplätze, kostenlose Kurse und Bewerbungstipps.',
            'com.volunteer.title': 'Ehrenamtliche Mentorin oder Mentor werden',
            'com.volunteer.body': 'Du studierst, hast einen Abschluss oder arbeitest im Beruf? Eine Stunde im Monat kann den Bildungsweg eines Menschen verändern. Besonders willkommen sind Mentorinnen und Mentoren mit Dari-, Paschtu- oder Arabischkenntnissen.',
            'com.volunteer.cta': 'Schreib uns',
            'faq.title': 'Häufig gestellte Fragen',
            'faq.lead': 'Die Fragen, die uns am häufigsten erreichen — in allen unseren Sprachen.',
            'faq.q1': 'Kostet FEA etwas?',
            'faq.a1': 'Nein. Alle Informationen, Beratung, Mentoring und Werkzeuge sind kostenlos. FEA ist gemeinnützig, erhebt keine Gebühren, verkauft keine Daten und schaltet keine Werbung.',
            'faq.q2': 'Muss ich ein Konto anlegen?',
            'faq.a2': 'Nein. Übersicht, KI-Analyse und Chat funktionieren ohne Registrierung. Deine Antworten in der Analyse bleiben in deinem eigenen Browser.',
            'faq.q3': 'Bewirbt sich FEA für mich um ein Stipendium?',
            'faq.a3': 'Nein. Wir reichen keine Bewerbungen ein und sind keine Agentur. Wir erklären die Voraussetzungen, helfen dir, den Prozess zu verstehen, und beantworten deine Fragen — die Bewerbung selbst bleibt immer deine.',
            'faq.q4': 'Ich bin in Afghanistan. Kann ich FEA trotzdem nutzen?',
            'faq.a4': 'Ja. Ein großer Teil unserer Arbeit richtet sich an Menschen in Afghanistan, besonders an Mädchen und Frauen. Viele Angebote — Onlinekurse, Sprachprogramme und internationale Stipendien — lassen sich von zu Hause aus beginnen.',
            'faq.q5': 'Was ist eine Ausbildung?',
            'faq.a5': 'Eine Ausbildung ist eine bezahlte Berufsausbildung in Deutschland: Arbeit im Betrieb kombiniert mit Berufsschule. Sie dauert meist zwei bis dreieinhalb Jahre und endet mit einem anerkannten Berufsabschluss.',
            'faq.q6': 'Welches Deutschniveau brauche ich?',
            'faq.a6': 'Das hängt vom Weg ab. Für eine Ausbildung meist B1 bis B2, für ein deutschsprachiges Studium in der Regel C1; viele Masterprogramme sind auf Englisch. Sprach- und Onlinekurse sind auf jedem Niveau offen.',
            'faq.q7': 'In welchen Sprachen kann ich Fragen stellen?',
            'faq.a7': 'Deutsch, Englisch, Dari und Arabisch — auf der Website, im Chat und in unseren Social-Media-Kanälen.',
            'faq.q8': 'Wie verlässlich sind die Informationen?',
            'faq.a8': 'Jeder Eintrag verlinkt auf eine offizielle Quelle wie DAAD, BAMF, die Bundesagentur für Arbeit oder eine Hochschule. Wir prüfen regelmäßig, aber Fristen ändern sich — bitte vor der Bewerbung immer offiziell nachsehen.',
            /* ---------- contact ---------- */
            'page.contact.title': 'Kontakt — FEA',
            'ct.hero.eyebrow': 'Kontakt',
            'ct.hero.title': 'Stell uns jede Frage zu deiner Bildung',
            'ct.hero.lead': 'Schreib auf Deutsch, Englisch, Dari oder Arabisch. Wir antworten in derselben Sprache.',
            'ct.form.title': 'Frage senden',
            'ct.form.name': 'Dein Name',
            'ct.form.name.ph': 'Vor- und Nachname',
            'ct.form.email': 'E-Mail-Adresse',
            'ct.form.email.ph': 'du@beispiel.de',
            'ct.form.lang': 'Antwort bitte auf',
            'ct.form.topic': 'Thema',
            'ct.topic.scholarship': 'Stipendien',
            'ct.topic.university': 'Universitätsbewerbung',
            'ct.topic.ausbildung': 'Ausbildung',
            'ct.topic.course': 'Kurse & Sprache',
            'ct.topic.volunteer': 'Ehrenamt / Mentoring',
            'ct.topic.other': 'Etwas anderes',
            'ct.form.message': 'Deine Frage',
            'ct.form.message.ph': 'Beschreibe deine Situation: wo du lebst, was du bisher gelernt hast und was du als Nächstes machen möchtest.',
            'ct.form.consent': 'FEA darf meine Nachricht verwenden, um meine Frage zu beantworten.',
            'ct.form.submit': 'Nachricht senden',
            'ct.form.note': 'Noch ohne Backend: Der Button öffnet dein E-Mail-Programm mit der fertigen Nachricht.',
            'ct.err.name': 'Bitte gib deinen Namen ein.',
            'ct.err.email': 'Bitte gib eine gültige E-Mail-Adresse ein.',
            'ct.err.message': 'Bitte schreibe mindestens 20 Zeichen, damit wir dir gut helfen können.',
            'ct.err.consent': 'Bitte bestätige dies, um fortzufahren.',
            'ct.ok': 'Dein E-Mail-Programm sollte sich jetzt öffnen. Falls nichts passiert, schreib uns direkt an die Adresse unten.',
            'ct.direct.title': 'Direkte Kanäle',
            'ct.direct.lead': 'Lieber eine Nachricht statt eines Formulars? Alles hier erreicht dieselben zwei Personen.',
            'ct.response.title': 'Antwortzeit',
            'ct.response.body': 'Der KI-Assistent antwortet sofort, rund um die Uhr. Eine persönliche Antwort dauert meist ein bis drei Tage — wir sind zwei Studierende und machen das neben dem Studium.',
            /* ---------- chat ---------- */
            'chat.open': 'FEA-Assistent öffnen',
            'chat.title': 'FEA-Assistent',
            'chat.subtitle': 'Antworten in deiner Sprache · rund um die Uhr',
            'chat.placeholder': 'Frag nach Stipendien, Ausbildung, Kursen …',
            'chat.send': 'Senden',
            'chat.greeting': 'Hallo! Ich bin der FEA-Assistent. Frag mich nach Stipendien, Universitäten, Ausbildung, kostenlosen Kursen oder Deutschlernen — auf Deutsch, Englisch, Dari oder Arabisch.',
            'chat.fallback': 'Dazu habe ich noch keine gespeicherte Antwort. Probiere eines der Themen unten oder schreib uns über die Kontaktseite — eine echte Person antwortet dir.',
            'chat.disclaimer': 'Prototyp: Die Antworten kommen aus einer lokalen Wissensbasis im Browser, noch nicht von einem KI-Dienst.',
            'chat.you': 'Du',
            'chat.bot': 'FEA',
            'chat.typing': 'schreibt …',
            'chip.scholarship': 'Stipendien',
            'chip.ausbildung': 'Ausbildung',
            'chip.university': 'Universität',
            'chip.german': 'Deutsch lernen',
            'chip.free': 'Kostenlose Kurse',
            'chip.afghanistan': 'Ich bin in Afghanistan',
            'chip.contact': 'Mit einem Menschen sprechen',
            'chip.cost': 'Kostet das etwas?',
            'ans.scholarship': 'Stipendien sind für viele der schnellste Weg. Beginne mit der DAAD-Datenbank für Deutschland, dem Deutschlandstipendium, wenn du bereits an einer deutschen Hochschule studierst, und dem Hilde-Domin-Programm, wenn deine Bildung im Herkunftsland gefährdet ist. Filtere auf der Seite „Möglichkeiten“ nach „Stipendium“.',
            'ans.ausbildung': 'Eine Ausbildung ist eine bezahlte Berufsausbildung in Deutschland: Du arbeitest im Betrieb und besuchst die Berufsschule. Sie dauert meist 2 bis 3,5 Jahre, und du verdienst ab dem ersten Monat. Üblicherweise brauchst du Deutsch auf B1–B2 und einen Schulabschluss. Suche im Portal der Bundesagentur für Arbeit oder in der IHK-Lehrstellenbörse.',
            'ans.university': 'Für ein Studium in Deutschland brauchst du meist ein anerkanntes Schulzeugnis, einen Sprachnachweis (C1 für deutschsprachige Studiengänge, IELTS/TOEFL für englischsprachige) und eine Bewerbung über uni-assist. Wird dein Zeugnis nicht direkt anerkannt, führt der Weg über ein Studienkolleg mit Feststellungsprüfung.',
            'ans.german': 'Du kannst noch heute kostenlos mit Deutsch beginnen: DW Deutsch lernen deckt A1 bis C1 mit Audio, Video und Übungen ab. Wenn du schon in Deutschland lebst, frag nach einem BAMF-Integrationskurs — er führt bis B1 und ist oft kostenfrei.',
            'ans.free': 'Kostenlose Onlinekurse gibt es für jeden Bereich: freeCodeCamp für Programmieren, edX und Coursera im Audit-Modus für Universitätsfächer und DW für Deutsch. Filtere die Seite „Möglichkeiten“ nach „Kostenloser Kurs“.',
            'ans.afghanistan': 'Ein großer Teil von FEA ist für Menschen in Afghanistan gedacht, besonders für Mädchen und Frauen. Von zu Hause aus kannst du Onlinekurse beginnen, Deutsch oder Englisch lernen und dich um internationale Stipendien bewerben, etwa an der Asian University for Women oder im Hilde-Domin-Programm. In unseren Telegram- und WhatsApp-Gruppen posten wir täglich neue Möglichkeiten.',
            'ans.cost': 'Alles bei FEA ist kostenlos: die Website, die Analyse, der Chat, das Mentoring und unsere Beratung in den sozialen Medien. Wir sind gemeinnützig — wir nehmen keine Gebühren und verkaufen niemals deine Daten.',
            'ans.contact': 'Eine echte Person erreichst du über die Kontaktseite oder über unsere WhatsApp- und Telegram-Gruppen. Wir antworten auf Deutsch, Englisch, Dari und Arabisch, meist innerhalb von ein bis drei Tagen.',
            'ans.analyzer': 'Die KI-Chancen-Analyse stellt sechs kurze Fragen — Wohnort, Bildungsniveau, Ziel, Interessen, Sprachniveau und Budget — und sortiert danach die passenden Möglichkeiten. Alles läuft in deinem Browser.',
            'ans.greeting': 'Hallo und willkommen! Wobei kann ich dir heute helfen? Frag gerne nach Stipendien, Universitäten, Ausbildung, kostenlosen Kursen oder Deutsch.',
        };
    })(Locales = FEA.Locales || (FEA.Locales = {}));
})(FEA || (FEA = {}));
/** دری — Dari (Afghan Persian) dictionary. Right-to-left. */
var FEA;
(function (FEA) {
    var Locales;
    (function (Locales) {
        Locales.fa = {
            /* ---------- global ---------- */
            'brand.name': 'Free Education Assistance',
            'brand.short': 'FEA',
            'brand.tagline': 'رهنمایی تحصیلی رایگان به زبان‌های آلمانی، انگلیسی، دری و عربی',
            'common.skip': 'رفتن به محتوای اصلی',
            'common.menu': 'فهرست',
            'common.close': 'بستن',
            'common.theme': 'تغییر حالت روشن / تاریک',
            'common.language': 'زبان',
            'common.free': 'رایگان',
            'common.deadline': 'مهلت درخواست',
            'common.rolling': 'باز — در هر زمان می‌توانید درخواست بدهید',
            'common.langreq': 'سطح زبان',
            'common.level': 'سطح',
            'common.openLink': 'معلومات رسمی',
            'common.top': 'بازگشت به بالا',
            'common.demoNote': 'نمونهٔ اولیهٔ بخش ظاهری. معلومات تنها در مرورگر خود شما ذخیره می‌شود.',
            'nav.home': 'خانه',
            'nav.about': 'پروژه',
            'nav.opps': 'فرصت‌ها',
            'nav.analyzer': 'تحلیلگر هوش مصنوعی',
            'nav.community': 'جامعه',
            'nav.contact': 'تماس',
            'nav.cta': 'مسیر خود را پیدا کنید',
            'footer.about': 'FEA یک ابتکار غیرانتفاعی است که توسط دو محصل رشتهٔ انجنیری نرم‌افزار در آلمان بنیان‌گذاری شده است. ما به محصلان، پناهندگان و تازه‌واردان کمک می‌کنیم مسیر تحصیلی خود را پیدا کنند — رایگان و به چهار زبان.',
            'footer.links': 'صفحه‌ها',
            'footer.channels': 'ما را دنبال کنید',
            'footer.languages': 'زبان‌ها',
            'footer.legal': 'غیرانتفاعی · بدون فیس · بدون اعلان تجارتی',
            'footer.rights': '© 2026 Free Education Assistance. طرح پروژه برای بورسیهٔ Werner-Schulz 2026.',
            'footer.dev': 'نسخهٔ زندهٔ در حال توسعه',
            /* ---------- home ---------- */
            'page.home.title': 'FEA — کمک آموزشی رایگان',
            'hero.eyebrow': 'غیرانتفاعی · تأسیس‌شده توسط دو محصل در آلمان',
            'hero.title': 'تحصیل هرگز نباید به جای تولد انسان وابسته باشد.',
            'hero.lead': 'FEA برای محصلان، پناهندگان و تازه‌واردان رهنمایی تحصیلی رایگان فراهم می‌کند: بورسیه‌ها، پوهنتون‌ها، آموزش مسلکی (Ausbildung)، کورس‌های آنلاین رایگان و برنامه‌های زبان — با توضیح ساده و به چهار زبان.',
            'hero.ctaPrimary': 'شروع تحلیلگر فرصت‌ها',
            'hero.ctaSecondary': 'دیدن فرصت‌ها',
            'hero.trust': 'بدون فیس. بدون ثبت‌نام. بدون شرط پنهان.',
            'hero.cardTitle': 'مسیر شما در ۶ پرسش',
            'hero.cardBody': 'به چند پرسش دربارهٔ محل زندگی، سطح تحصیل و دانش زبانی خود پاسخ بدهید. تحلیلگر فرصت‌هایی را که واقعاً مناسب شما هستند رتبه‌بندی می‌کند.',
            'hero.cardBadge': 'با کمک هوش مصنوعی',
            'stat.languages.value': '4',
            'stat.languages.label': 'زبان‌ها: آلمانی، انگلیسی، دری، عربی',
            'stat.support.value': '24/7',
            'stat.support.label': 'پاسخ و رهنمایی خودکار',
            'stat.channels.value': '5',
            'stat.channels.label': 'شبکه‌های اجتماعی با معلومات روزانه',
            'stat.cost.value': '0 €',
            'stat.cost.label': 'مصرف برای همه کاربران، همیشه',
            'values.eyebrow': 'ارزش‌های جامعهٔ مدنی',
            'values.title': 'سه اصل در پشت هر تصمیم FEA',
            'values.lead': 'FEA تنها یک ابزار جستجو نیست؛ یک پروژهٔ ادغام اجتماعی بر بنیاد ارزش‌های دموکراتیک است.',
            'values.1.title': 'ضرورت اجتماعی',
            'values.1.body': 'جلوگیری از انزوا و قطب‌بندی. در زمانی که قطب‌بندی و طرد اجتماعی افزایش یافته، ایجاد مسیرهای معتبر به سوی تحصیل و کار حیاتی است. ادغام منظم از انزوا و آسیب‌پذیری در برابر تأثیرات مخرب جلوگیری می‌کند و جوانان تازه‌وارد را با جامعه پیوند می‌دهد.',
            'values.2.title': 'ستون‌های دموکراتیک',
            'values.2.body': 'آموزش بر بنیاد ارزش‌های دموکراتیک ابزار نیرومندی برای ادغام است. این آموزش به مهاجران با پیشینه‌های فرهنگی گوناگون امکان می‌دهد جامعه را درک کنند، به آن احترام بگذارند، در آن سهم بگیرند و راه رشد استعدادهای خود را بیابند.',
            'values.3.title': 'سهم‌گیری و ارزش‌آفرینی',
            'values.3.body': 'ادغام واقعی یک راه دوطرفه است. باید فرصت بیافریند و در عین حال مشارکت فعال، مسئولیت‌پذیری و ارزش‌آفرینی را تشویق کند. تازه‌واردان توانمند می‌شوند تا با توانایی‌های خود سهم بگیرند — از نظر اقتصادی، اجتماعی و فرهنگی.',
            'flow.eyebrow': 'اکوسیستم و روند کار',
            'flow.title': 'از کسانی که به آن‌ها می‌رسیم تا اثری که می‌آفرینیم',
            'flow.lead': 'پنج لایهٔ پیوسته: گروه‌های هدف، هستهٔ دیجیتال، گسترش دسترسی، پشتیبانی انسانی و نتیجه.',
            'flow.1.title': 'گروه‌های هدف',
            'flow.1.i1': 'محصلان و زنان افغانستان',
            'flow.1.i2': 'پناهندگان و مهاجران در آلمان',
            'flow.1.i3': 'جوانانی که با موانع دسترسی روبه‌رو اند',
            'flow.2.title': 'هستهٔ ویب و هوش مصنوعی',
            'flow.2.i1': 'تحلیلگر فرصت‌ها با هوش مصنوعی',
            'flow.2.i2': 'چت پرسش و پاسخ خودکار ۲۴ ساعته',
            'flow.2.i3': 'پورتال به زبان‌های آلمانی، انگلیسی، دری و عربی',
            'flow.3.title': 'گسترش دسترسی',
            'flow.3.i1': 'انستاگرام، فیسبوک، تیک‌تاک، تلگرام، واتساپ',
            'flow.3.i2': 'کمپاین‌های آموزشی تقویت‌شده',
            'flow.3.i3': 'معلومات روزانه دربارهٔ فرصت‌های جدید',
            'flow.4.title': 'پشتیبانی انسانی',
            'flow.4.i1': 'رهنمایی فردی و ویبینارها',
            'flow.4.i2': 'جلسات پرسش و پاسخ و داوطلبان همتا',
            'flow.4.i3': 'گروه‌های حمایتی',
            'flow.5.title': 'اثرگذاری',
            'flow.5.i1': 'بورسیه‌ها و راه‌یابی به پوهنتون',
            'flow.5.i2': 'آموزش مسلکی و مسیر شغلی',
            'flow.5.i3': 'ادغام دموکراتیک',
            'problem.eyebrow': 'مشکل',
            'problem.title': 'مانع اصلی انگیزه نیست؛ نبود معلومات است.',
            'problem.lead': 'بسیاری از جوانان توانایی و ارادهٔ ادامهٔ تحصیل را دارند، اما به معلومات معتبر و رهنمایی شخصی دسترسی ندارند.',
            'problem.i1': 'نبود معلومات دربارهٔ بورسیه‌ها و فرصت‌های تحصیلی.',
            'problem.i2': 'دشواری در درک سیستم‌های آموزشی کشورهای دیگر.',
            'problem.i3': 'آگاهی محدود دربارهٔ روند درخواست به پوهنتون.',
            'problem.i4': 'ناآگاهی از فرصت‌های آموزش مسلکی (Ausbildung) در آلمان.',
            'problem.i5': 'دشواری در یافتن منابع آموزشی آنلاین رایگان.',
            'problem.i6': 'موانع زبانی.',
            'problem.i7': 'نبود پشتیبانی هنگام تصمیم‌گیری تحصیلی.',
            'problem.note': 'این مشکلات به‌ویژه برای جوانان افغانستان — خاصتاً دختران و زنانی که با محدودیت شدید فرصت‌های تحصیلی روبه‌رو اند — و همچنان برای پناهندگان و مهاجران در آلمان که برای ادامهٔ تحصیل و رشد مسلکی به حمایت نیاز دارند، جدی‌تر است.',
            'groups.eyebrow': 'ما در خدمت چه کسانی هستیم',
            'groups.title': 'دو گروه هدف اصلی، یک نیاز مشترک',
            'groups.af.title': 'محصلان در افغانستان',
            'groups.af.i1': 'جوانانی که در پی تحصیل بین‌المللی اند.',
            'groups.af.i2': 'محصلانی که به دنبال بورسیه هستند.',
            'groups.af.i3': 'دختران و زنانی که به رهنمایی تحصیلی نیاز دارند.',
            'groups.af.i4': 'محصلانی که به معلومات دربارهٔ آموزش آنلاین نیاز دارند.',
            'groups.de.title': 'پناهندگان و مهاجران در آلمان',
            'groups.de.i1': 'مسیرهای تحصیلی آلمان، پوهنتون‌ها و آموزش مسلکی.',
            'groups.de.i2': 'آموزش تکنالوژی معلوماتی و کورس‌های رایگان.',
            'groups.de.i3': 'رشد مسلکی و ادغام از راه آموزش.',
            'why.eyebrow': 'چرا FEA و چرا حالا',
            'why.title': 'ایده‌ای به‌موقع، الگویی گسترش‌پذیر، تیمی از بنیان‌گذاران',
            'why.1.title': 'ایده‌ای به‌موقع',
            'why.1.body': 'به کسانی می‌رسد که سیستم معمولاً از قلم می‌اندازد — از جمله دختران در افغانستان و تازه‌واردان در آلمان.',
            'why.2.title': 'الگویی گسترش‌پذیر',
            'why.2.body': 'هوش مصنوعی همراه با رهنمایی چندزبانه از مرزها فراتر می‌رود، با هزینه‌ای بسیار کمتر از مشاورهٔ سنتی.',
            'why.3.title': 'تیمی از بنیان‌گذاران',
            'why.3.body': 'دو محصل انجنیری نرم‌افزار در آلمان که همان ابزاری را می‌سازند که خودشان آرزو داشتند در اختیار می‌داشتند.',
            'cta.title': 'نمی‌دانید از کجا شروع کنید؟',
            'cta.lead': 'به شش پرسش کوتاه پاسخ بدهید و ببینید کدام بورسیه‌ها، پوهنتون‌ها، آموزش‌های مسلکی و کورس‌های رایگان با وضعیت شما مطابقت دارند.',
            'cta.button': 'باز کردن تحلیلگر هوش مصنوعی',
            'cta.secondary': 'یا پرسش خود را در چت بپرسید',
            /* ---------- about ---------- */
            'page.about.title': 'پروژه — FEA',
            'about.hero.eyebrow': 'طرح پروژه',
            'about.hero.title': 'دربارهٔ Free Education Assistance',
            'about.hero.lead': 'یک ابتکار غیرانتفاعی در عرصهٔ تکنالوژی آموزشی که هوش مصنوعی، شبکه‌های اجتماعی و رهنمایی شخصی را برای گشودن مسیرهای واقعی تحصیل با هم می‌آمیزد.',
            'about.toc': 'در این صفحه',
            'about.summary.title': '۱. خلاصهٔ پروژه',
            'about.summary.p1': 'Free Education Assistance (FEA) یک ابتکار غیرانتفاعی در عرصهٔ تکنالوژی آموزشی است که توسط دو محصل پوهنتون در آلمان بنیان‌گذاری شده است. این پروژه رهنمایی تحصیلی رایگان و معلومات معتبر را در اختیار جوانان قرار می‌دهد — به‌ویژه محصلان افغانستان، پناهندگان، مهاجران و کسانی که با موانع دسترسی به آموزش روبه‌رو اند.',
            'about.summary.p2': 'FEA تکنالوژی، هوش مصنوعی، شبکه‌های اجتماعی و رهنمایی شخصی را با هم ترکیب می‌کند تا مردم مسیرهای تحصیلی مانند بورسیه، پوهنتون، آموزش مسلکی، کورس‌های آنلاین رایگان، برنامه‌های زبان و فرصت‌های شغلی را کشف کنند. در این پلتفورم می‌توان فرصت‌ها را یافت، رهنمایی گرفت، پرسش کرد و به یک جامعهٔ حمایتی پیوست — به زبان‌های آلمانی، انگلیسی، دری و عربی.',
            'about.problem.title': '۲. بیان مشکل',
            'about.objectives.title': '۳. اهداف',
            'about.obj.1': 'فراهم‌کردن رهنمایی تحصیلی رایگان برای محصلان و تازه‌واردان.',
            'about.obj.2': 'افزایش دسترسی به بورسیه‌ها، پوهنتون‌ها، آموزش مسلکی و فرصت‌های یادگیری.',
            'about.obj.3': 'حمایت از پناهندگان و مهاجران در آلمان.',
            'about.obj.4': 'کمک به افراد برای انتخاب مسیر مناسب تحصیلی و شغلی.',
            'about.obj.5': 'استفاده از تکنالوژی برای آسان‌ساختن دسترسی به معلومات آموزشی.',
            'about.obj.6': 'ساختن یک جامعهٔ بین‌المللی حمایت آموزشی.',
            'about.obj.7': 'ارائهٔ معلومات به زبان‌های مختلف برای رسیدن به مردم بیشتر.',
            'about.activities.title': '۴. فعالیت‌های اصلی — پلتفورم دیجیتال',
            'about.activities.lead': 'ما ویب‌سایتی می‌سازیم که معلومات و رهنمایی آموزشی رایگان ارائه می‌کند. این پلتفورم شامل موارد زیر است:',
            'about.act.1': 'معلومات دربارهٔ بورسیه‌ها.',
            'about.act.2': 'رهنمایی برای درخواست به پوهنتون.',
            'about.act.3': 'معلومات دربارهٔ آموزش مسلکی.',
            'about.act.4': 'کورس‌های آنلاین رایگان.',
            'about.act.5': 'منابع یادگیری آلمانی و انگلیسی.',
            'about.act.6': 'رهنمایی برای آماده‌کردن درخواست.',
            'about.act.7': 'معلومات دربارهٔ رشد مسلکی.',
            'about.act.8': 'پرسش‌های پرتکرار.',
            'about.act.9': 'مسیرهای تحصیلی بر اساس علاقه و پیشینهٔ کاربران.',
            'about.act.note': 'ویب‌سایت ساده، قابل دسترس و قابل فهم طراحی شده است — حتی برای کسانی که دانش کمی دربارهٔ سیستم‌های آموزشی بین‌المللی دارند — و به زبان‌های آلمانی، انگلیسی، دری و عربی در دسترس است.',
            'about.ai.title': '۵. تحلیلگر فرصت‌ها و سیستم پشتیبانی با هوش مصنوعی',
            'about.ai.lead': 'به‌عنوان محصلان انجنیری نرم‌افزار، ما هوش مصنوعی را در پلتفورم ادغام می‌کنیم تا دسترسی و پشتیبانی بهتر شود. سیستم هوش مصنوعی:',
            'about.ai.1': 'فرصت‌های آموزشی را به‌طور منظم پیگیری می‌کند.',
            'about.ai.2': 'بورسیه‌ها، پوهنتون‌ها، برنامه‌های آموزش مسلکی، انترن‌شیپ‌ها و کورس‌های رایگان را منظم می‌سازد.',
            'about.ai.3': 'مهلت‌ها، شرایط و معیارهای واجد شرایط بودن را تحلیل می‌کند.',
            'about.ai.4': 'به پرسش‌های پرتکرار پاسخ سریع‌تر می‌دهد.',
            'about.ai.5': 'از کاربران از طریق چت ویب‌سایت پشتیبانی می‌کند.',
            'about.ai.6': 'از کاربران از طریق چت شبکه‌های اجتماعی پشتیبانی می‌کند.',
            'about.ai.7': 'پیگیری و کمک روزانه برای بهبود تجربهٔ کاربران فراهم می‌کند.',
            'about.ai.note': 'سیستم هوش مصنوعی همراه با پشتیبانی انسانی کار می‌کند تا کاربران رهنمایی معتبر و کمک عملی دریافت کنند — نه فقط پاسخ‌های خودکار.',
            'about.social.title': '۶. شبکه‌های اجتماعی و گسترش دیجیتال',
            'about.social.p1': 'برای رسیدن به جوانانی که به حمایت آموزشی نیاز دارند، FEA حضور آنلاین خود را در آلمان و افغانستان در انستاگرام، فیسبوک، تیک‌تاک، تلگرام و واتساپ فعالانه گسترش می‌دهد.',
            'about.social.p2': 'ما فعالیت‌ها، کمپاین‌های آموزشی و محتوای خود را تقویت می‌کنیم تا هر محصل و تازه‌وارد بتواند رهنمایی رایگان ما را پیدا کند. به‌طور منظم بورسیه‌های جدید، فرصت‌های پوهنتون، معلومات آموزش مسلکی، کورس‌های رایگان، منابع یادگیری زبان، داستان‌های موفقیت، ویدیوهای رهنما و نکات درخواست را نشر می‌کنیم.',
            'about.social.p3': 'دسترسی از راه فعالیت‌های تقویت‌شده، محتوای منظم آموزشی، دیده‌شدن در موتورهای جستجو، معلومات به‌روز و یک جامعهٔ فعال آموزشی آنلاین گسترش می‌یابد.',
            'about.community.title': '۷. پشتیبانی جامعه',
            'about.community.lead': 'تکنالوژی با پشتیبانی انسانی همراه می‌شود. FEA ارائه می‌کند:',
            'about.comm.1': 'رهنمایی آنلاین (منتورشیپ).',
            'about.comm.2': 'ویبینارهای آموزشی.',
            'about.comm.3': 'جلسات پرسش و پاسخ.',
            'about.comm.4': 'گروه‌های حمایتی واتساپ و تلگرام.',
            'about.comm.5': 'رهنمایی از سوی محصلان و داوطلبان.',
            'about.comm.6': 'حمایت از افرادی که آیندهٔ تحصیلی خود را برنامه‌ریزی می‌کنند.',
            'about.groups.title': '۸. گروه‌های هدف',
            'about.plan.title': '۹. پلان تطبیق',
            'about.phase.label': 'مرحله',
            'about.phase1.title': 'ساخت ویب‌سایت و شبکه‌های اجتماعی (تا اکتوبر)',
            'about.phase1.body': 'ایجاد بنیاد دیجیتال: تکمیل ویب‌سایت، آماده‌سازی منابع آموزشی به آلمانی، انگلیسی، دری و عربی، آماده‌سازی شبکه‌های اجتماعی، ساخت سیستم پشتیبانی هوش مصنوعی و سازماندهی محتوا.',
            'about.phase1.link': 'دیدن نسخهٔ زندهٔ در حال توسعه',
            'about.phase2.title': 'راه‌اندازی فعال و گسترش پروژه (از اکتوبر)',
            'about.phase2.body': 'FEA فعال می‌شود: نشر منظم فرصت‌های آموزشی (بورسیه، پوهنتون، آموزش مسلکی، کورس رایگان)، پشتیبانی کاربران از راه چت و شبکه‌های اجتماعی، جمع‌آوری بازخورد و افزایش آگاهی در آلمان و افغانستان.',
            'about.phase3.title': 'مرکز حمایتی فزیکی در افغانستان (پس از سه ماه موفق نخست)',
            'about.phase3.body': 'ایجاد یک مرکز فزیکی در افغانستان برای ارائهٔ رهنمایی مستقیم تحصیلی، حمایت از محصلان با دسترسی محدود و پیوند جوانان و دختران با فرصت‌های بین‌المللی.',
            'about.impact.title': '۱۰. اثر مورد انتظار',
            'about.impact.1': 'کمک به هزاران محصل برای دسترسی به معلومات آموزشی.',
            'about.impact.2': 'افزایش آگاهی دربارهٔ بورسیه‌ها.',
            'about.impact.3': 'حمایت از پناهندگان و مهاجران در آلمان.',
            'about.impact.4': 'ایجاد یک جامعهٔ نیرومند آموزشی.',
            'about.impact.5': 'آسان‌تر ساختن یافتن فرصت‌های تحصیلی.',
            'about.impact.6': 'کاهش موانع ناشی از نبود معلومات.',
            'about.impact.7': 'کمک به مردم برای تصمیم‌گیری بهتر دربارهٔ آیندهٔ تحصیلی.',
            'about.vision.title': '۱۱. چشم‌انداز درازمدت',
            'about.vision.body': 'ایجاد یک شبکهٔ بین‌المللی حمایت آموزشی که در آن هر انسان — بدون توجه به ملیت، وضعیت مالی یا پیشینه — به معلومات معتبر و رهنمایی دسترسی داشته باشد تا آیندهٔ خود را بسازد. FEA باور دارد که آموزش فرصت می‌آفریند و دسترسی به معلومات نخستین گام رسیدن به آن فرصت‌هاست.',
            /* ---------- opportunities ---------- */
            'page.opps.title': 'فرصت‌ها — FEA',
            'opps.hero.eyebrow': 'فهرست',
            'opps.hero.title': 'فرصت‌های تحصیلی',
            'opps.hero.lead': 'بورسیه‌ها، مسیرهای پوهنتون، آموزش مسلکی، برنامه‌های زبان و کورس‌های آنلاین رایگان — متناسب با وضعیت شما. هر مورد به منبع رسمی پیوند دارد.',
            'opps.search.label': 'جستجو',
            'opps.search.ph': 'جستجوی بورسیه، پوهنتون، آموزش مسلکی …',
            'opps.filter.kind': 'نوع',
            'opps.filter.region': 'منطقه',
            'opps.filter.level': 'سطح تحصیل',
            'opps.filter.all': 'همه',
            'opps.filter.free': 'تنها موارد رایگان',
            'opps.reset': 'پاک‌کردن فلترها',
            'opps.count': '{n} فرصت',
            'opps.sort': 'ترتیب بر اساس',
            'opps.sort.deadline': 'نزدیک‌ترین مهلت',
            'opps.sort.az': 'حروف الفبا',
            'opps.empty.title': 'نتیجه‌ای یافت نشد',
            'opps.empty.body': 'یک فلتر را بردارید یا با کلمهٔ دیگری جستجو کنید.',
            'opps.note': 'مهلت‌ها و شرایط تغییر می‌کنند. پیش از درخواست همیشه معلومات را در صفحهٔ رسمی تأیید کنید.',
            'kind.scholarship': 'بورسیه',
            'kind.university': 'پوهنتون',
            'kind.ausbildung': 'آموزش مسلکی',
            'kind.course': 'کورس رایگان',
            'kind.language': 'زبان',
            'kind.career': 'کار و مسلک',
            'region.germany': 'آلمان',
            'region.afghanistan': 'افغانستان',
            'region.online': 'آنلاین',
            'region.international': 'بین‌المللی',
            'level.school': 'شاگرد مکتب',
            'level.highschool': 'فارغ صنف ۱۲',
            'level.bachelor': 'لیسانس',
            'level.master': 'ماستری',
            'level.professional': 'شاغل در کار',
            'lvl.none': 'ضرورت نیست',
            'opp.daad.title': 'بانک معلومات بورسیه‌های DAAD',
            'opp.daad.provider': 'سرویس تبادل اکادمیک آلمان (DAAD)',
            'opp.daad.summary': 'بزرگ‌ترین بانک رسمی معلومات بورسیه برای محصلان بین‌المللی که می‌خواهند در آلمان تحصیل یا تحقیق کنند.',
            'opp.deutschlandstipendium.title': 'Deutschlandstipendium',
            'opp.deutschlandstipendium.provider': 'پوهنتون‌های آلمان · وزارت فدرال',
            'opp.deutschlandstipendium.summary': 'ماهانه ۳۰۰ یورو برای محصلان با استعداد و متعهد، بدون در نظر گرفتن ملیت. درخواست مستقیماً در پوهنتون خودتان.',
            'opp.hildedomin.title': 'برنامهٔ Hilde Domin',
            'opp.hildedomin.provider': 'DAAD',
            'opp.hildedomin.summary': 'بورسیه برای محصلان و داوطلبان دکترا که در کشور خود به‌طور رسمی یا عملی از تحصیل محروم شده‌اند.',
            'opp.auw.title': 'پوهنتون آسیایی برای زنان — بورسیهٔ کامل',
            'opp.auw.provider': 'AUW، بنگله‌دیش',
            'opp.auw.summary': 'بورسیه‌های کامل برای زنان آسیا، همراه با مسیر ویژه برای محصلان افغانستان.',
            'opp.garantiefonds.title': 'Garantiefonds Hochschule',
            'opp.garantiefonds.provider': 'بنیاد Otto Benecke',
            'opp.garantiefonds.summary': 'حمایت مالی برای جوانان پناهنده و مهاجر در آلمان که می‌خواهند خود را برای تحصیل پوهنتون آماده کنند.',
            'opp.studienkolleg.title': 'Studienkolleg و امتحان Feststellungsprüfung',
            'opp.studienkolleg.provider': 'Studienkolleg‌های آلمان',
            'opp.studienkolleg.summary': 'کورس آمادگی یک‌ساله برای کسانی که سند مکتب‌شان در آلمان مستقیماً به رسمیت شناخته نمی‌شود.',
            'opp.uniassist.title': 'خدمات درخواست uni-assist',
            'opp.uniassist.provider': 'uni-assist e.V.',
            'opp.uniassist.summary': 'مرجع مرکزی که اسناد بین‌المللی را بررسی و درخواست‌ها را به بیش از ۱۷۰ پوهنتون آلمان می‌فرستد.',
            'opp.ausbildungba.title': 'پورتال جستجوی Ausbildung',
            'opp.ausbildungba.provider': 'ادارهٔ فدرال کار آلمان',
            'opp.ausbildungba.summary': 'پورتال رسمی با هزاران جای آموزش مسلکی معاش‌دار در همهٔ رشته‌ها در آلمان.',
            'opp.ihk.title': 'بازار جای‌های آموزشی IHK',
            'opp.ihk.provider': 'اتاق‌های صنعت و تجارت',
            'opp.ihk.summary': 'بازار محلی جای‌های آموزش مسلکی، مستقیم از شرکت‌هایی که کارآموز می‌پذیرند.',
            'opp.integrationskurs.title': 'کورس ادغام (آلمانی + آشنایی با جامعه)',
            'opp.integrationskurs.provider': 'BAMF',
            'opp.integrationskurs.summary': 'آلمانی تا سطح B1 به‌همراه کورس آشنایی با قانون، تاریخ و جامعه — اغلب رایگان.',
            'opp.dwgerman.title': 'آموزش آلمانی DW',
            'opp.dwgerman.provider': 'Deutsche Welle',
            'opp.dwgerman.summary': 'کورس‌های رایگان آلمانی از A1 تا C1 با صوت، ویدیو و تمرین — بدون ثبت‌نام.',
            'opp.freecodecamp.title': 'freeCodeCamp — برنامه‌نویسی',
            'opp.freecodecamp.provider': 'freeCodeCamp',
            'opp.freecodecamp.summary': 'برنامهٔ آموزشی رایگان با سرتیفیکیت در ساخت ویب‌سایت، تحلیل داده و انجنیری نرم‌افزار.',
            'opp.edx.title': 'edX و Coursera — حالت رایگان',
            'opp.edx.provider': 'پوهنتون‌های بین‌المللی',
            'opp.edx.summary': 'کورس‌های پوهنتونی که در حالت audit رایگان قابل استفاده اند؛ سرتیفیکیت اختیاری و پولی است.',
            'opp.makeit.title': 'Make it in Germany',
            'opp.makeit.provider': 'پورتال حکومت فدرال آلمان',
            'opp.makeit.summary': 'رهنمایی رسمی دربارهٔ به‌رسمیت‌شناسی اسناد، جستجوی کار، ویزه و زندگی کاری در آلمان.',
            /* ---------- analyzer ---------- */
            'page.analyzer.title': 'تحلیلگر فرصت‌ها — FEA',
            'an.hero.eyebrow': 'رهنمایی با هوش مصنوعی',
            'an.hero.title': 'تحلیلگر فرصت‌ها با هوش مصنوعی',
            'an.hero.lead': 'شش پرسش کوتاه. تحلیلگر محل زندگی، سطح تحصیل، هدف، علاقه‌مندی، سطح زبان و توان مالی شما را می‌سنجد و مسیرهایی را که واقعاً مناسب شما اند رتبه‌بندی می‌کند.',
            'an.note': 'نمونهٔ اولیه: همهٔ محاسبه در مرورگر شما انجام می‌شود. چیزی ارسال یا در سرور ذخیره نمی‌شود.',
            'an.progress': 'پرسش {c} از {t}',
            'an.multi': 'می‌توانید چند مورد را انتخاب کنید',
            'an.q1': 'در حال حاضر کجا زندگی می‌کنید؟',
            'an.q1.afghanistan': 'افغانستان',
            'an.q1.germany': 'آلمان',
            'an.q1.other': 'کشور دیگر',
            'an.q2': 'سطح تحصیلی فعلی شما چیست؟',
            'an.q3': 'به دنبال چه هستید؟',
            'an.q3.scholarship': 'بورسیه',
            'an.q3.university': 'جای تحصیل در پوهنتون',
            'an.q3.ausbildung': 'آموزش مسلکی در آلمان',
            'an.q3.course': 'کورس‌های آنلاین رایگان',
            'an.q3.language': 'کورس زبان',
            'an.q3.career': 'رهنمایی شغلی',
            'an.q4': 'به کدام رشته‌ها علاقه دارید؟',
            'an.f.it': 'کمپیوتر و نرم‌افزار',
            'an.f.engineering': 'انجنیری',
            'an.f.health': 'طب و صحت',
            'an.f.business': 'اقتصاد و تجارت',
            'an.f.social': 'حقوق و علوم اجتماعی',
            'an.f.education': 'تعلیم و تربیه',
            'an.f.arts': 'هنر و دیزاین',
            'an.f.science': 'علوم طبیعی',
            'an.q56': 'سطح زبان‌های شما چقدر است؟',
            'an.q5': 'سطح زبان آلمانی شما چقدر است؟',
            'an.q6': 'سطح زبان انگلیسی شما چقدر است؟',
            'an.q7': 'آیا به فرصت‌هایی نیاز دارید که کاملاً رایگان باشند؟',
            'an.q7.yes': 'بلی، تنها رایگان',
            'an.q7.no': 'نی، مصرف مشکل اصلی نیست',
            'an.back': 'بازگشت',
            'an.next': 'بعدی',
            'an.submit': 'نمایش مسیرهای من',
            'an.err.field': 'لطفاً حداقل یک رشته را انتخاب کنید.',
            'an.results.title': 'مسیرهای مناسب شما',
            'an.results.lead': '{n} فرصت با پاسخ‌های شما مطابقت دارد؛ بهترین گزینه در اول.',
            'an.results.empty': 'هنوز مطابقت قوی پیدا نشد. پاسخ‌های خود را گسترده‌تر کنید، مثلاً رشته‌های بیشتری انتخاب کنید.',
            'an.match': 'مطابقت',
            'an.why': 'چرا این گزینه مناسب شماست',
            'an.restart': 'شروع دوباره',
            'an.print': 'چاپ / ذخیره به شکل PDF',
            'an.next.title': 'گام‌های بعدی',
            'an.next.1': 'پیوند رسمی را باز کنید و مهلت و شرایط فعلی را بررسی کنید.',
            'an.next.2': 'اسناد خود را زود آماده کنید: تصدیق‌نامه‌ها، ترجمه‌ها، خلاصهٔ سوانح و مکتوب انگیزه.',
            'an.next.3': 'اگر چیزی روشن نبود، در چت یا واتساپ از ما بپرسید — یک انسان واقعی پاسخ می‌دهد.',
            'reason.location': 'با محل زندگی شما مطابقت دارد',
            'reason.level': 'با سطح تحصیل شما مطابقت دارد',
            'reason.goal': 'با هدف شما مطابقت دارد',
            'reason.field': 'با رشتهٔ مورد علاقهٔ شما مطابقت دارد',
            'reason.language': 'سطح زبان شما کافی است',
            'reason.free': 'رایگان است',
            'reason.available': 'معلومات به زبان شما موجود است',
            'reason.deadline': 'مهلت هنوز باز است',
            /* ---------- community ---------- */
            'page.community.title': 'جامعه و پشتیبانی — FEA',
            'com.hero.eyebrow': 'پشتیبانی انسانی',
            'com.hero.title': 'تکنالوژی فرصت را پیدا می‌کند. انسان‌ها کمک می‌کنند آن را به دست بیاورید.',
            'com.hero.lead': 'پشت هر پاسخ خودکار، منتوران، داوطلبان و محصلانی ایستاده‌اند که همین راه را پیموده‌اند.',
            'com.1.title': 'رهنمایی آنلاین',
            'com.1.body': 'جلسات یک‌به‌یک با محصلان و داوطلبانی که کمک می‌کنند مسیر خود را انتخاب و گام‌های بعدی را پلان کنید.',
            'com.2.title': 'ویبینارهای آموزشی',
            'com.2.body': 'جلسات زنده دربارهٔ بورسیه‌ها، درخواست به پوهنتون، آموزش مسلکی و تحصیل در آلمان.',
            'com.3.title': 'جلسات پرسش و پاسخ',
            'com.3.body': 'جلسات باز برای هر پرسشی دربارهٔ درخواست، اسناد، مهلت‌ها و به‌رسمیت‌شناسی مدارک.',
            'com.4.title': 'گروه‌های واتساپ و تلگرام',
            'com.4.body': 'معلومات روزانه دربارهٔ فرصت‌های جدید و جایی برای پرسش‌های کوتاه با پاسخ سریع.',
            'com.5.title': 'رهنمایی محصلان و داوطلبان',
            'com.5.body': 'حمایت همتا از سوی کسانی که به‌تازگی درخواست داده‌اند و روند کار را از نزدیک می‌شناسند.',
            'com.6.title': 'پلان‌گذاری آینده',
            'com.6.body': 'حمایت منظم برای کسانی که می‌دانند می‌خواهند تحصیل یا آموزش مسلکی کنند، اما هنوز نمی‌دانند چه و کجا.',
            'com.channels.title': 'ما را کجا پیدا کنید',
            'com.channels.lead': 'هر هفته بورسیه‌های جدید، فرصت‌های پوهنتون، جای‌های آموزش مسلکی، کورس‌های رایگان و نکات درخواست را نشر می‌کنیم.',
            'com.volunteer.title': 'منتور داوطلب شوید',
            'com.volunteer.body': 'محصل، فارغ‌التحصیل یا شاغل هستید؟ یک ساعت در ماه کافی است تا مسیر تحصیلی یک انسان را تغییر دهید. به‌ویژه از منتورانی که دری، پشتو یا عربی می‌دانند استقبال می‌کنیم.',
            'com.volunteer.cta': 'برای ما بنویسید',
            'faq.title': 'پرسش‌های پرتکرار',
            'faq.lead': 'پرسش‌هایی که بیشتر از همه دریافت می‌کنیم — به هر چهار زبان.',
            'faq.q1': 'آیا استفاده از FEA مصرف دارد؟',
            'faq.a1': 'نی. همهٔ معلومات، رهنمایی، منتورشیپ و ابزارها رایگان اند. FEA غیرانتفاعی است، فیس نمی‌گیرد، معلومات کاربران را نمی‌فروشد و اعلان تجارتی ندارد.',
            'faq.q2': 'آیا باید حساب کاربری بسازم؟',
            'faq.a2': 'نی. فهرست فرصت‌ها، تحلیلگر و چت بدون ثبت‌نام کار می‌کنند. پاسخ‌های شما در تحلیلگر تنها در مرورگر خودتان می‌ماند.',
            'faq.q3': 'آیا FEA به جای من برای بورسیه درخواست می‌دهد؟',
            'faq.a3': 'نی. ما درخواست ارسال نمی‌کنیم و آژانس نیستیم. ما شرایط را توضیح می‌دهیم، به شما کمک می‌کنیم روند را بفهمید و به پرسش‌های شما پاسخ می‌دهیم — اما خود درخواست همیشه از شماست.',
            'faq.q4': 'من در افغانستان هستم. باز هم می‌توانم از FEA استفاده کنم؟',
            'faq.a4': 'بلی. بخش بزرگ کار ما برای محصلان افغانستان است، به‌ویژه دختران و زنان. بسیاری از فرصت‌ها — کورس‌های آنلاین، برنامه‌های زبان و بورسیه‌های بین‌المللی — از خانه شروع شده می‌توانند.',
            'faq.q5': 'Ausbildung چیست؟',
            'faq.a5': 'Ausbildung آموزش مسلکی معاش‌دار در آلمان است: کار در یک شرکت همراه با درس در مکتب مسلکی. معمولاً دو تا سه‌ونیم سال طول می‌کشد و با یک سند مسلکی به‌رسمیت‌شناخته‌شده پایان می‌یابد.',
            'faq.q6': 'به کدام سطح زبان آلمانی نیاز دارم؟',
            'faq.a6': 'به مسیر بستگی دارد. برای Ausbildung معمولاً B1 تا B2، برای تحصیل به زبان آلمانی معمولاً C1، و بسیاری از برنامه‌های ماستری به انگلیسی تدریس می‌شوند. کورس‌های زبان و آنلاین در هر سطحی باز اند.',
            'faq.q7': 'به کدام زبان‌ها می‌توانم پرسش کنم؟',
            'faq.a7': 'آلمانی، انگلیسی، دری و عربی — در ویب‌سایت، در چت و در شبکه‌های اجتماعی ما.',
            'faq.q8': 'معلومات تا چه اندازه معتبر است؟',
            'faq.a8': 'هر مورد به یک منبع رسمی مانند DAAD، BAMF، ادارهٔ فدرال کار یا یک پوهنتون پیوند دارد. ما به‌طور منظم بررسی می‌کنیم، اما مهلت‌ها تغییر می‌کنند — پیش از درخواست همیشه صفحهٔ رسمی را ببینید.',
            /* ---------- contact ---------- */
            'page.contact.title': 'تماس — FEA',
            'ct.hero.eyebrow': 'تماس',
            'ct.hero.title': 'هر پرسشی دربارهٔ تحصیل خود دارید از ما بپرسید',
            'ct.hero.lead': 'به آلمانی، انگلیسی، دری یا عربی بنویسید. ما به همان زبان پاسخ می‌دهیم.',
            'ct.form.title': 'ارسال پرسش',
            'ct.form.name': 'نام شما',
            'ct.form.name.ph': 'نام و تخلص',
            'ct.form.email': 'آدرس ایمیل',
            'ct.form.email.ph': 'you@example.com',
            'ct.form.lang': 'پاسخ به زبان',
            'ct.form.topic': 'موضوع',
            'ct.topic.scholarship': 'بورسیه‌ها',
            'ct.topic.university': 'درخواست به پوهنتون',
            'ct.topic.ausbildung': 'آموزش مسلکی',
            'ct.topic.course': 'کورس‌ها و زبان',
            'ct.topic.volunteer': 'داوطلبی / منتورشیپ',
            'ct.topic.other': 'موضوع دیگر',
            'ct.form.message': 'پرسش شما',
            'ct.form.message.ph': 'وضعیت خود را بنویسید: کجا زندگی می‌کنید، تا کنون چه خوانده‌اید و می‌خواهید بعد چه کنید.',
            'ct.form.consent': 'FEA می‌تواند از پیام من برای پاسخ به پرسشم استفاده کند.',
            'ct.form.submit': 'ارسال پیام',
            'ct.form.note': 'فعلاً بدون سرور: این دکمه برنامهٔ ایمیل شما را با پیام آمادهٔ ارسال باز می‌کند.',
            'ct.err.name': 'لطفاً نام خود را بنویسید.',
            'ct.err.email': 'لطفاً یک آدرس ایمیل معتبر بنویسید.',
            'ct.err.message': 'لطفاً حداقل ۲۰ حرف بنویسید تا بتوانیم درست کمک کنیم.',
            'ct.err.consent': 'برای ادامه لطفاً این مورد را تأیید کنید.',
            'ct.ok': 'برنامهٔ ایمیل شما باید باز شود. اگر چیزی باز نشد، مستقیماً به آدرس زیر برای ما بنویسید.',
            'ct.direct.title': 'راه‌های مستقیم تماس',
            'ct.direct.lead': 'پیام را به فورم ترجیح می‌دهید؟ همهٔ این راه‌ها به همان دو نفر می‌رسد.',
            'ct.response.title': 'زمان پاسخ',
            'ct.response.body': 'دستیار هوش مصنوعی فوراً و ۲۴ ساعته پاسخ می‌دهد. پاسخ انسانی معمولاً یک تا سه روز وقت می‌گیرد — ما دو محصل هستیم و این کار را در کنار درس انجام می‌دهیم.',
            /* ---------- chat ---------- */
            'chat.open': 'باز کردن دستیار FEA',
            'chat.title': 'دستیار FEA',
            'chat.subtitle': 'پاسخ به زبان شما · ۲۴ ساعته',
            'chat.placeholder': 'دربارهٔ بورسیه، آموزش مسلکی، کورس‌ها بپرسید …',
            'chat.send': 'ارسال',
            'chat.greeting': 'سلام! من دستیار FEA هستم. دربارهٔ بورسیه، پوهنتون، آموزش مسلکی، کورس‌های رایگان یا یادگیری آلمانی از من بپرسید — به آلمانی، انگلیسی، دری یا عربی.',
            'chat.fallback': 'برای این پرسش هنوز پاسخ ذخیره‌شده ندارم. یکی از موضوعات زیر را امتحان کنید یا پرسش خود را از صفحهٔ تماس بفرستید — یک انسان واقعی پاسخ می‌دهد.',
            'chat.disclaimer': 'نمونهٔ اولیه: پاسخ‌ها از یک بانک معلومات محلی در مرورگر می‌آیند، نه از یک سرویس زندهٔ هوش مصنوعی.',
            'chat.you': 'شما',
            'chat.bot': 'FEA',
            'chat.typing': 'در حال نوشتن …',
            'chip.scholarship': 'بورسیه‌ها',
            'chip.ausbildung': 'آموزش مسلکی',
            'chip.university': 'پوهنتون',
            'chip.german': 'یادگیری آلمانی',
            'chip.free': 'کورس‌های رایگان',
            'chip.afghanistan': 'من در افغانستان هستم',
            'chip.contact': 'صحبت با یک انسان',
            'chip.cost': 'آیا مصرف دارد؟',
            'ans.scholarship': 'بورسیه برای بسیاری از محصلان سریع‌ترین راه است. از بانک معلومات DAAD برای آلمان شروع کنید، اگر همین حالا در یک پوهنتون آلمان درس می‌خوانید Deutschlandstipendium را ببینید، و اگر تحصیل شما در کشورتان در خطر است برنامهٔ Hilde Domin را بررسی کنید. در صفحهٔ «فرصت‌ها» فلتر «بورسیه» را انتخاب کنید.',
            'ans.ausbildung': 'Ausbildung آموزش مسلکی معاش‌دار در آلمان است: در یک شرکت کار می‌کنید و به مکتب مسلکی می‌روید. معمولاً ۲ تا ۳.۵ سال طول می‌کشد و از ماه اول معاش می‌گیرید. معمولاً به آلمانی سطح B1–B2 و سند مکتب نیاز دارید. در پورتال ادارهٔ فدرال کار یا بازار IHK جستجو کنید.',
            'ans.university': 'برای پوهنتون در آلمان معمولاً به سند مکتب به‌رسمیت‌شناخته‌شده، سند زبان (C1 برای برنامه‌های آلمانی و IELTS/TOEFL برای برنامه‌های انگلیسی) و درخواست از طریق uni-assist نیاز دارید. اگر سند شما مستقیماً پذیرفته نشود، راه شما Studienkolleg و امتحان Feststellungsprüfung است.',
            'ans.german': 'همین امروز می‌توانید آلمانی را رایگان شروع کنید: DW Learn German از A1 تا C1 با صوت، ویدیو و تمرین. اگر در آلمان زندگی می‌کنید، دربارهٔ کورس ادغام BAMF بپرسید — تا سطح B1 می‌رسد و اغلب رایگان است.',
            'ans.free': 'کورس‌های آنلاین رایگان برای هر رشته موجود است: freeCodeCamp برای برنامه‌نویسی، edX و Coursera در حالت audit برای مضامین پوهنتونی و DW برای آلمانی. در صفحهٔ «فرصت‌ها» فلتر «کورس رایگان» را انتخاب کنید.',
            'ans.afghanistan': 'بخش بزرگی از FEA برای محصلان افغانستان ساخته شده، به‌ویژه برای دختران و زنان. از خانه می‌توانید کورس‌های آنلاین را شروع کنید، آلمانی یا انگلیسی بیاموزید و برای بورسیه‌های بین‌المللی مانند پوهنتون آسیایی برای زنان یا برنامهٔ Hilde Domin درخواست بدهید. در گروه‌های تلگرام و واتساپ ما هر روز فرصت‌های تازه نشر می‌شود.',
            'ans.cost': 'همهٔ خدمات FEA رایگان است: ویب‌سایت، تحلیلگر، چت، منتورشیپ و رهنمایی در شبکه‌های اجتماعی. ما غیرانتفاعی هستیم — فیس نمی‌گیریم و هرگز معلومات شما را نمی‌فروشیم.',
            'ans.contact': 'با یک انسان واقعی از راه صفحهٔ تماس یا گروه‌های واتساپ و تلگرام ما در ارتباط شده می‌توانید. ما به آلمانی، انگلیسی، دری و عربی پاسخ می‌دهیم، معمولاً در جریان یک تا سه روز.',
            'ans.analyzer': 'تحلیلگر فرصت‌ها شش پرسش کوتاه می‌پرسد — محل زندگی، سطح تحصیل، هدف، رشته‌های مورد علاقه، سطح زبان و توان مالی — و بعد فرصت‌های مناسب شما را رتبه‌بندی می‌کند. همه‌چیز در مرورگر خودتان اجرا می‌شود.',
            'ans.greeting': 'سلام و خوش آمدید! امروز در چه موردی می‌توانم کمک کنم؟ دربارهٔ بورسیه، پوهنتون، آموزش مسلکی، کورس‌های رایگان یا زبان آلمانی بپرسید.',
        };
    })(Locales = FEA.Locales || (FEA.Locales = {}));
})(FEA || (FEA = {}));
/** العربية — Arabic dictionary. Right-to-left. */
var FEA;
(function (FEA) {
    var Locales;
    (function (Locales) {
        Locales.ar = {
            /* ---------- global ---------- */
            'brand.name': 'Free Education Assistance',
            'brand.short': 'FEA',
            'brand.tagline': 'إرشاد تعليمي مجاني بالألمانية والإنجليزية والدرية والعربية',
            'common.skip': 'الانتقال إلى المحتوى الرئيسي',
            'common.menu': 'القائمة',
            'common.close': 'إغلاق',
            'common.theme': 'تبديل الوضع الفاتح / الداكن',
            'common.language': 'اللغة',
            'common.free': 'مجاني',
            'common.deadline': 'الموعد النهائي',
            'common.rolling': 'مفتوح — يمكن التقديم في أي وقت',
            'common.langreq': 'مستوى اللغة',
            'common.level': 'المستوى',
            'common.openLink': 'المعلومات الرسمية',
            'common.top': 'العودة إلى الأعلى',
            'common.demoNote': 'نموذج أولي للواجهة. تُحفظ البيانات في متصفحك فقط.',
            'nav.home': 'الرئيسية',
            'nav.about': 'المشروع',
            'nav.opps': 'الفرص',
            'nav.analyzer': 'محلّل الذكاء الاصطناعي',
            'nav.community': 'المجتمع',
            'nav.contact': 'اتصل بنا',
            'nav.cta': 'اعثر على مسارك',
            'footer.about': 'FEA مبادرة غير ربحية أسّسها طالبان في هندسة البرمجيات في ألمانيا. نساعد الطلاب واللاجئين والقادمين الجدد على إيجاد مسارهم التعليمي — مجانًا وبأربع لغات.',
            'footer.links': 'الصفحات',
            'footer.channels': 'تابعنا',
            'footer.languages': 'اللغات',
            'footer.legal': 'غير ربحي · بلا رسوم · بلا إعلانات',
            'footer.rights': '© 2026 Free Education Assistance. مفهوم المشروع لمنحة Werner-Schulz 2026.',
            'footer.dev': 'النسخة التطويرية المباشرة',
            /* ---------- home ---------- */
            'page.home.title': 'FEA — مساعدة تعليمية مجانية',
            'hero.eyebrow': 'غير ربحية · أسّسها طالبان في ألمانيا',
            'hero.title': 'يجب ألّا يتوقف التعليم يومًا على مكان الولادة.',
            'hero.lead': 'يقدّم FEA للطلاب واللاجئين والقادمين الجدد إرشادًا تعليميًا مجانيًا: المنح الدراسية والجامعات والتدريب المهني (Ausbildung) والدورات المجانية عبر الإنترنت وبرامج اللغة — بشرح واضح وبأربع لغات.',
            'hero.ctaPrimary': 'ابدأ محلّل الفرص',
            'hero.ctaSecondary': 'تصفّح الفرص',
            'hero.trust': 'بلا رسوم. بلا تسجيل. بلا شروط خفية.',
            'hero.cardTitle': 'مسارك في 6 أسئلة',
            'hero.cardBody': 'أجب عن بضعة أسئلة حول مكان إقامتك ومستواك التعليمي ومستوى لغتك، وسيرتّب المحلّل الفرص التي تناسبك فعلًا.',
            'hero.cardBadge': 'بمساعدة الذكاء الاصطناعي',
            'stat.languages.value': '4',
            'stat.languages.label': 'اللغات: الألمانية والإنجليزية والدرية والعربية',
            'stat.support.value': '24/7',
            'stat.support.label': 'إجابات وإرشاد آلي',
            'stat.channels.value': '5',
            'stat.channels.label': 'قنوات تواصل بتحديثات يومية',
            'stat.cost.value': '0 €',
            'stat.cost.label': 'التكلفة على كل مستخدم، دائمًا',
            'values.eyebrow': 'قيم المجتمع المدني',
            'values.title': 'ثلاثة مبادئ خلف كل قرار في FEA',
            'values.lead': 'FEA ليس مجرد أداة بحث، بل مشروع اندماج قائم على القيم الديمقراطية.',
            'values.1.title': 'ضرورة اجتماعية',
            'values.1.body': 'منع الإقصاء والاستقطاب. في زمن يتّسع فيه الاستقطاب والإقصاء الاجتماعي، يصبح فتح مسارات موثوقة نحو التعليم والعمل أمرًا حيويًا. الاندماج المنظّم يمنع العزلة والتأثر بالنزعات الهدّامة، ويُبقي الشباب القادمين الجدد على صلة بالمجتمع.',
            'values.2.title': 'ركائز ديمقراطية',
            'values.2.body': 'التعليم القائم على القيم الديمقراطية أداة قوية للاندماج. فهو يتيح للمهاجرين من خلفيات ثقافية متنوعة أن يفهموا مجتمعنا ويحترموه ويشاركوا فيه، وأن يكتشفوا كيف ينمّون مواهبهم.',
            'values.3.title': 'المساهمة وخلق القيمة',
            'values.3.body': 'الاندماج الحقيقي طريق ذو اتجاهين. عليه أن يخلق الفرصة، وأن يشجّع في الوقت نفسه المشاركة الفاعلة والمسؤولية وخلق القيمة. يُمكَّن القادمون الجدد من المساهمة بقدراتهم — اقتصاديًا واجتماعيًا وثقافيًا.',
            'flow.eyebrow': 'المنظومة ومسار العمل',
            'flow.title': 'من الفئات التي نصل إليها إلى الأثر الذي نصنعه',
            'flow.lead': 'خمس طبقات مترابطة: الفئات المستهدفة، النواة الرقمية، توسيع الوصول، الدعم البشري، والنتائج.',
            'flow.1.title': 'الفئات المستهدفة',
            'flow.1.i1': 'الطلاب والنساء في أفغانستان',
            'flow.1.i2': 'اللاجئون والمهاجرون في ألمانيا',
            'flow.1.i3': 'الشباب الذين يواجهون عوائق في الوصول',
            'flow.2.title': 'النواة الرقمية والذكاء الاصطناعي',
            'flow.2.i1': 'محلّل الفرص بالذكاء الاصطناعي',
            'flow.2.i2': 'محادثة أسئلة وأجوبة آلية على مدار الساعة',
            'flow.2.i3': 'بوابة بالألمانية والإنجليزية والدرية والعربية',
            'flow.3.title': 'توسيع الوصول',
            'flow.3.i1': 'إنستغرام، فيسبوك، تيك توك، تيليغرام، واتساب',
            'flow.3.i2': 'حملات تعليمية مدعومة',
            'flow.3.i3': 'تحديثات يومية عن الفرص',
            'flow.4.title': 'الدعم البشري',
            'flow.4.i1': 'إرشاد فردي وندوات عبر الإنترنت',
            'flow.4.i2': 'جلسات أسئلة وأجوبة ومتطوعون من الأقران',
            'flow.4.i3': 'مجموعات دعم',
            'flow.5.title': 'الأثر',
            'flow.5.i1': 'منح دراسية ومقاعد جامعية',
            'flow.5.i2': 'تدريب مهني ومسارات عمل',
            'flow.5.i3': 'اندماج ديمقراطي',
            'problem.eyebrow': 'المشكلة',
            'problem.title': 'العائق ليس الدافع، بل المعلومة.',
            'problem.lead': 'كثير من الشباب لديهم القدرة والإرادة لمواصلة التعليم، لكنهم لا يجدون معلومات موثوقة ولا إرشادًا شخصيًا.',
            'problem.i1': 'نقص المعلومات عن المنح الدراسية والفرص التعليمية.',
            'problem.i2': 'صعوبة فهم أنظمة التعليم في الخارج.',
            'problem.i3': 'معرفة محدودة بإجراءات التقديم الجامعي.',
            'problem.i4': 'قلة الوعي بفرص التدريب المهني (Ausbildung) في ألمانيا.',
            'problem.i5': 'صعوبة العثور على مصادر تعلّم مجانية عبر الإنترنت.',
            'problem.i6': 'حواجز اللغة.',
            'problem.i7': 'غياب الدعم عند اتخاذ القرارات التعليمية.',
            'problem.note': 'تشتدّ هذه التحديات لدى الشباب في أفغانستان — وخصوصًا الفتيات والنساء اللواتي تُقيَّد فرصهنّ التعليمية — ولدى اللاجئين والمهاجرين في ألمانيا الذين يحتاجون إلى الدعم لمواصلة تعليمهم وتطورهم المهني.',
            'groups.eyebrow': 'من نخدم',
            'groups.title': 'فئتان رئيسيتان، وحاجة واحدة مشتركة',
            'groups.af.title': 'الطلاب في أفغانستان',
            'groups.af.i1': 'شباب يبحثون عن تعليم دولي.',
            'groups.af.i2': 'طلاب يبحثون عن منح دراسية.',
            'groups.af.i3': 'فتيات ونساء بحاجة إلى إرشاد تعليمي.',
            'groups.af.i4': 'طلاب يحتاجون معلومات عن التعلّم عبر الإنترنت.',
            'groups.de.title': 'اللاجئون والمهاجرون في ألمانيا',
            'groups.de.i1': 'المسارات التعليمية الألمانية والجامعات والتدريب المهني.',
            'groups.de.i2': 'تدريب تقني ودورات مجانية.',
            'groups.de.i3': 'التطوير المهني والاندماج عبر التعليم.',
            'why.eyebrow': 'لماذا FEA ولماذا الآن',
            'why.title': 'فكرة في وقتها، نموذج قابل للتوسّع، فريق مؤسِّس',
            'why.1.title': 'فكرة في وقتها',
            'why.1.body': 'تصل إلى متعلمين يغفل عنهم النظام عادةً — ومنهم الفتيات في أفغانستان والقادمون الجدد في ألمانيا.',
            'why.2.title': 'نموذج قابل للتوسّع',
            'why.2.body': 'الذكاء الاصطناعي مع الإرشاد متعدد اللغات يتوسّع عبر الحدود بجزء يسير من كلفة الإرشاد التقليدي.',
            'why.3.title': 'فريق مؤسِّس',
            'why.3.body': 'طالبان في هندسة البرمجيات في ألمانيا يبنيان الأداة التي تمنّيا لو توفّرت لهما.',
            'cta.title': 'لا تعرف من أين تبدأ؟',
            'cta.lead': 'أجب عن ستة أسئلة قصيرة وشاهد أي المنح والجامعات وبرامج التدريب المهني والدورات المجانية تناسب وضعك.',
            'cta.button': 'افتح محلّل الذكاء الاصطناعي',
            'cta.secondary': 'أو اطرح سؤالك في المحادثة',
            /* ---------- about ---------- */
            'page.about.title': 'المشروع — FEA',
            'about.hero.eyebrow': 'مفهوم المشروع',
            'about.hero.title': 'عن Free Education Assistance',
            'about.hero.lead': 'مبادرة غير ربحية في تكنولوجيا التعليم تجمع بين الذكاء الاصطناعي ووسائل التواصل والإرشاد الشخصي لفتح مسارات تعليمية حقيقية.',
            'about.toc': 'في هذه الصفحة',
            'about.summary.title': '1. ملخّص المشروع',
            'about.summary.p1': 'Free Education Assistance (FEA) مبادرة غير ربحية في تكنولوجيا التعليم أسّسها طالبان جامعيان في ألمانيا. يقدّم المشروع إرشادًا تعليميًا مجانيًا ومعلومات موثوقة للشباب — وخصوصًا الطلاب من أفغانستان واللاجئين والمهاجرين ومن يواجهون عوائق في الوصول إلى التعليم.',
            'about.summary.p2': 'يجمع FEA بين التكنولوجيا والذكاء الاصطناعي ووسائل التواصل والإرشاد الشخصي لمساعدة الناس على اكتشاف المسارات التعليمية: المنح والجامعات وبرامج التدريب المهني والدورات المجانية وبرامج اللغة وفرص العمل. تتيح المنصة إيجاد الفرص وتلقّي الإرشاد وطرح الأسئلة والانضمام إلى مجتمع داعم — بالألمانية والإنجليزية والدرية والعربية.',
            'about.problem.title': '2. عرض المشكلة',
            'about.objectives.title': '3. الأهداف',
            'about.obj.1': 'تقديم إرشاد تعليمي مجاني للطلاب والقادمين الجدد.',
            'about.obj.2': 'زيادة الوصول إلى المنح والجامعات والتدريب المهني وفرص التعلّم.',
            'about.obj.3': 'دعم اللاجئين والمهاجرين في ألمانيا.',
            'about.obj.4': 'مساعدة الأفراد على اختيار المسار التعليمي والمهني المناسب.',
            'about.obj.5': 'استخدام التكنولوجيا لتسهيل الوصول إلى المعلومات التعليمية.',
            'about.obj.6': 'بناء مجتمع دولي للدعم التعليمي.',
            'about.obj.7': 'توفير المعلومات بلغات مختلفة للوصول إلى عدد أكبر من الناس.',
            'about.activities.title': '4. الأنشطة الرئيسية — المنصة الرقمية',
            'about.activities.lead': 'نطوّر موقعًا إلكترونيًا يوفّر معلومات وإرشادًا تعليميًا مجانيًا. تشمل المنصة:',
            'about.act.1': 'معلومات عن المنح الدراسية.',
            'about.act.2': 'إرشاد للتقديم الجامعي.',
            'about.act.3': 'معلومات عن التدريب المهني.',
            'about.act.4': 'دورات مجانية عبر الإنترنت.',
            'about.act.5': 'مصادر لتعلّم الألمانية والإنجليزية.',
            'about.act.6': 'إرشاد لإعداد ملف التقديم.',
            'about.act.7': 'معلومات عن التطوير المهني.',
            'about.act.8': 'الأسئلة الشائعة.',
            'about.act.9': 'مسارات تعليمية بحسب اهتمامات المستخدمين وخلفياتهم.',
            'about.act.note': 'صُمّم الموقع ليكون بسيطًا وسهل الوصول ومفهومًا حتى لمن لديهم معرفة محدودة بأنظمة التعليم الدولية — وهو متاح بالألمانية والإنجليزية والدرية والعربية.',
            'about.ai.title': '5. محلّل الفرص ونظام الدعم بالذكاء الاصطناعي',
            'about.ai.lead': 'بصفتنا طالبَي هندسة برمجيات، ندمج الذكاء الاصطناعي في المنصة لتحسين الوصول والدعم. سيقوم النظام بما يلي:',
            'about.ai.1': 'متابعة الفرص التعليمية بانتظام.',
            'about.ai.2': 'تنظيم المنح والجامعات وبرامج التدريب المهني والتدريب العملي والدورات المجانية.',
            'about.ai.3': 'تحليل المواعيد النهائية والمتطلبات ومعايير الأهلية.',
            'about.ai.4': 'تقديم إجابات أسرع عن الأسئلة الشائعة.',
            'about.ai.5': 'دعم المستخدمين عبر محادثة الموقع.',
            'about.ai.6': 'دعم المستخدمين عبر أنظمة المحادثة في وسائل التواصل.',
            'about.ai.7': 'المتابعة والمساعدة يوميًا لتحسين تجربة المستخدم.',
            'about.ai.note': 'يعمل نظام الذكاء الاصطناعي جنبًا إلى جنب مع الدعم البشري، ليحصل المستخدمون على إرشاد موثوق ومساعدة عملية — لا على إجابات آلية فقط.',
            'about.social.title': '6. وسائل التواصل والانتشار الرقمي',
            'about.social.p1': 'للوصول إلى الشباب المحتاجين للدعم التعليمي، يوسّع FEA حضوره في ألمانيا وأفغانستان عبر إنستغرام وفيسبوك وتيك توك وتيليغرام وواتساب.',
            'about.social.p2': 'ندعم أنشطتنا وحملاتنا التعليمية ومحتوانا ليتمكن كل طالب وقادم جديد من اكتشاف إرشادنا المجاني. ننشر بانتظام المنح الجديدة والفرص الجامعية ومعلومات التدريب المهني والدورات المجانية ومصادر تعلّم اللغة وقصص النجاح وفيديوهات إرشادية ونصائح التقديم.',
            'about.social.p3': 'ينمو الوصول عبر الأنشطة المدعومة والمحتوى التعليمي المنتظم والظهور في محركات البحث والتحديثات المفيدة ومجتمع تعليمي نشط عبر الإنترنت.',
            'about.community.title': '7. دعم المجتمع',
            'about.community.lead': 'تقترن التكنولوجيا بالدعم البشري. يوفّر FEA:',
            'about.comm.1': 'إرشادًا فرديًا عبر الإنترنت.',
            'about.comm.2': 'ندوات تعليمية.',
            'about.comm.3': 'جلسات أسئلة وأجوبة.',
            'about.comm.4': 'مجموعات دعم على واتساب وتيليغرام.',
            'about.comm.5': 'إرشادًا من طلاب ومتطوعين.',
            'about.comm.6': 'دعمًا لمن يخطّطون لمستقبلهم التعليمي.',
            'about.groups.title': '8. الفئات المستهدفة',
            'about.plan.title': '9. خطة التنفيذ',
            'about.phase.label': 'المرحلة',
            'about.phase1.title': 'تطوير الموقع ووسائل التواصل (حتى أكتوبر)',
            'about.phase1.body': 'بناء الأساس الرقمي: إكمال تطوير الموقع، وإعداد المواد التعليمية بالألمانية والإنجليزية والدرية والعربية، وتجهيز قنوات التواصل، وتطوير نظام الدعم بالذكاء الاصطناعي، وتنظيم المحتوى.',
            'about.phase1.link': 'شاهد النسخة التطويرية المباشرة',
            'about.phase2.title': 'الإطلاق الفعلي وتطوير المشروع (من أكتوبر)',
            'about.phase2.body': 'يصبح FEA نشطًا: نشر الفرص التعليمية بانتظام (منح، جامعات، تدريب مهني، دورات مجانية)، ودعم المستخدمين عبر المحادثة والقنوات الاجتماعية، وجمع الملاحظات، وزيادة الوعي في ألمانيا وأفغانستان.',
            'about.phase3.title': 'مركز دعم فعلي في أفغانستان (بعد نجاح الأشهر الثلاثة الأولى)',
            'about.phase3.body': 'إنشاء مركز دعم فعلي في أفغانستان لتقديم إرشاد تعليمي مباشر، ودعم الطلاب ذوي الوصول المحدود، وربط الشباب والفتيات بالفرص الدولية.',
            'about.impact.title': '10. الأثر المتوقع',
            'about.impact.1': 'مساعدة آلاف الطلاب على الوصول إلى المعلومات التعليمية.',
            'about.impact.2': 'زيادة الوعي بالمنح الدراسية.',
            'about.impact.3': 'دعم اللاجئين والمهاجرين في ألمانيا.',
            'about.impact.4': 'بناء مجتمع تعليمي قوي.',
            'about.impact.5': 'تسهيل اكتشاف الفرص التعليمية.',
            'about.impact.6': 'تقليل العوائق الناتجة عن نقص المعلومات.',
            'about.impact.7': 'مساعدة الناس على اتخاذ قرارات أفضل بشأن مستقبلهم التعليمي.',
            'about.vision.title': '11. الرؤية بعيدة المدى',
            'about.vision.body': 'بناء شبكة دولية للدعم التعليمي يستطيع فيها كل إنسان — أيًا كانت جنسيته أو وضعه المالي أو خلفيته — الوصول إلى معلومات وإرشاد موثوقين ليبني مستقبله. يؤمن FEA بأن التعليم يصنع الفرص، وأن الوصول إلى المعلومة هو الخطوة الأولى نحوها.',
            /* ---------- opportunities ---------- */
            'page.opps.title': 'الفرص — FEA',
            'opps.hero.eyebrow': 'الدليل',
            'opps.hero.title': 'الفرص التعليمية',
            'opps.hero.lead': 'منح دراسية ومسارات جامعية وتدريب مهني وبرامج لغة ودورات مجانية — مُرشَّحة حسب وضعك. كل مدخل يرتبط بالمصدر الرسمي.',
            'opps.search.label': 'بحث',
            'opps.search.ph': 'ابحث عن منح أو جامعات أو تدريب مهني …',
            'opps.filter.kind': 'النوع',
            'opps.filter.region': 'المنطقة',
            'opps.filter.level': 'المستوى التعليمي',
            'opps.filter.all': 'الكل',
            'opps.filter.free': 'المجاني فقط',
            'opps.reset': 'إعادة ضبط المرشّحات',
            'opps.count': '{n} فرصة',
            'opps.sort': 'الترتيب حسب',
            'opps.sort.deadline': 'الأقرب موعدًا',
            'opps.sort.az': 'أبجديًا',
            'opps.empty.title': 'لا توجد نتائج',
            'opps.empty.body': 'جرّب إزالة أحد المرشّحات أو البحث بكلمة أخرى.',
            'opps.note': 'تتغيّر المواعيد والمتطلبات. تأكّد دائمًا من التفاصيل في الصفحة الرسمية قبل التقديم.',
            'kind.scholarship': 'منحة',
            'kind.university': 'جامعة',
            'kind.ausbildung': 'تدريب مهني',
            'kind.course': 'دورة مجانية',
            'kind.language': 'لغة',
            'kind.career': 'مسار مهني',
            'region.germany': 'ألمانيا',
            'region.afghanistan': 'أفغانستان',
            'region.online': 'عبر الإنترنت',
            'region.international': 'دولي',
            'level.school': 'طالب مدرسة',
            'level.highschool': 'خريج الثانوية (الصف 12)',
            'level.bachelor': 'بكالوريوس',
            'level.master': 'ماجستير',
            'level.professional': 'يعمل مهنيًا',
            'lvl.none': 'غير مطلوب',
            'opp.daad.title': 'قاعدة بيانات منح DAAD',
            'opp.daad.provider': 'الهيئة الألمانية للتبادل العلمي (DAAD)',
            'opp.daad.summary': 'أكبر قاعدة بيانات رسمية للمنح المخصّصة للطلاب الدوليين الراغبين في الدراسة أو البحث في ألمانيا.',
            'opp.deutschlandstipendium.title': 'Deutschlandstipendium',
            'opp.deutschlandstipendium.provider': 'الجامعات الألمانية · الوزارة الاتحادية',
            'opp.deutschlandstipendium.summary': '300 يورو شهريًا للطلاب الموهوبين والملتزمين بغضّ النظر عن الجنسية. التقديم مباشرةً عبر جامعتك.',
            'opp.hildedomin.title': 'برنامج Hilde Domin',
            'opp.hildedomin.provider': 'DAAD',
            'opp.hildedomin.summary': 'منح للطلاب وطلبة الدكتوراه المحرومين من التعليم في بلدانهم، رسميًا أو فعليًا.',
            'opp.auw.title': 'الجامعة الآسيوية للنساء — منحة كاملة',
            'opp.auw.provider': 'AUW، بنغلاديش',
            'opp.auw.summary': 'منح كاملة للنساء من آسيا، مع مسار مخصّص للطالبات الأفغانيات.',
            'opp.garantiefonds.title': 'Garantiefonds Hochschule',
            'opp.garantiefonds.provider': 'مؤسسة Otto Benecke',
            'opp.garantiefonds.summary': 'تمويل للشباب اللاجئين والمهاجرين في ألمانيا الراغبين في الاستعداد للدراسة الجامعية.',
            'opp.studienkolleg.title': 'Studienkolleg وامتحان Feststellungsprüfung',
            'opp.studienkolleg.provider': 'معاهد Studienkolleg الألمانية',
            'opp.studienkolleg.summary': 'سنة تحضيرية لمن لا تُعترف شهادته المدرسية مباشرةً في ألمانيا.',
            'opp.uniassist.title': 'خدمة التقديم uni-assist',
            'opp.uniassist.provider': 'uni-assist e.V.',
            'opp.uniassist.summary': 'جهة مركزية تفحص الشهادات الدولية وتحوّل الطلبات إلى أكثر من 170 جامعة ألمانية.',
            'opp.ausbildungba.title': 'بوابة البحث عن التدريب المهني',
            'opp.ausbildungba.provider': 'وكالة العمل الاتحادية',
            'opp.ausbildungba.summary': 'بوابة رسمية تضم آلاف أماكن التدريب المهني المدفوع في جميع المهن في ألمانيا.',
            'opp.ihk.title': 'سوق أماكن التدريب IHK',
            'opp.ihk.provider': 'غرف الصناعة والتجارة',
            'opp.ihk.summary': 'سوق إقليمي لأماكن التدريب المهني من الشركات التي تدرّب المتدربين مباشرةً.',
            'opp.integrationskurs.title': 'دورة الاندماج (ألمانية + توجيه)',
            'opp.integrationskurs.provider': 'BAMF',
            'opp.integrationskurs.summary': 'ألمانية حتى مستوى B1 مع دورة توجيه في القانون والتاريخ والمجتمع — مجانية في الغالب.',
            'opp.dwgerman.title': 'تعلّم الألمانية مع DW',
            'opp.dwgerman.provider': 'Deutsche Welle',
            'opp.dwgerman.summary': 'دورات ألمانية مجانية من A1 إلى C1 بالصوت والفيديو والتمارين — بلا تسجيل.',
            'opp.freecodecamp.title': 'freeCodeCamp — البرمجة',
            'opp.freecodecamp.provider': 'freeCodeCamp',
            'opp.freecodecamp.summary': 'منهج مجاني بشهادات في تطوير الويب وتحليل البيانات وهندسة البرمجيات.',
            'opp.edx.title': 'edX وCoursera — وضع الاستماع المجاني',
            'opp.edx.provider': 'جامعات دولية',
            'opp.edx.summary': 'مقررات جامعية يمكن متابعتها مجانًا في وضع audit؛ الشهادات اختيارية ومدفوعة.',
            'opp.makeit.title': 'Make it in Germany',
            'opp.makeit.provider': 'بوابة الحكومة الاتحادية',
            'opp.makeit.summary': 'إرشاد رسمي حول معادلة الشهادات والبحث عن عمل والتأشيرة والحياة المهنية في ألمانيا.',
            /* ---------- analyzer ---------- */
            'page.analyzer.title': 'محلّل الفرص — FEA',
            'an.hero.eyebrow': 'إرشاد بالذكاء الاصطناعي',
            'an.hero.title': 'محلّل الفرص بالذكاء الاصطناعي',
            'an.hero.lead': 'ستة أسئلة قصيرة. يوازن المحلّل بين مكان إقامتك ومستواك التعليمي وهدفك واهتماماتك ومستوى لغتك وإمكاناتك المالية، ثم يرتّب المسارات التي تناسبك فعلًا.',
            'an.note': 'نموذج أولي: تجري المطابقة بالكامل داخل متصفحك. لا يُرفع شيء ولا يُخزَّن على خادم.',
            'an.progress': 'السؤال {c} من {t}',
            'an.multi': 'يمكن اختيار أكثر من إجابة',
            'an.q1': 'أين تعيش حاليًا؟',
            'an.q1.afghanistan': 'أفغانستان',
            'an.q1.germany': 'ألمانيا',
            'an.q1.other': 'بلد آخر',
            'an.q2': 'ما مستواك التعليمي الحالي؟',
            'an.q3': 'عمّ تبحث؟',
            'an.q3.scholarship': 'منحة دراسية',
            'an.q3.university': 'مقعد جامعي',
            'an.q3.ausbildung': 'تدريب مهني في ألمانيا',
            'an.q3.course': 'دورات مجانية عبر الإنترنت',
            'an.q3.language': 'دورة لغة',
            'an.q3.career': 'إرشاد مهني ووظيفي',
            'an.q4': 'ما المجالات التي تهمّك؟',
            'an.f.it': 'الحاسوب والبرمجيات',
            'an.f.engineering': 'الهندسة',
            'an.f.health': 'الطب والصحة',
            'an.f.business': 'الأعمال والاقتصاد',
            'an.f.social': 'القانون والعلوم الاجتماعية',
            'an.f.education': 'التربية والتعليم',
            'an.f.arts': 'الفنون والتصميم',
            'an.f.science': 'العلوم الطبيعية',
            'an.q56': 'ما مستوياتك اللغوية؟',
            'an.q5': 'ما مستواك في اللغة الألمانية؟',
            'an.q6': 'ما مستواك في اللغة الإنجليزية؟',
            'an.q7': 'هل تحتاج إلى فرص مجانية بالكامل؟',
            'an.q7.yes': 'نعم، المجاني فقط',
            'an.q7.no': 'لا، التكلفة ليست المشكلة الأساسية',
            'an.back': 'رجوع',
            'an.next': 'التالي',
            'an.submit': 'اعرض مساراتي',
            'an.err.field': 'يرجى اختيار مجال واحد على الأقل.',
            'an.results.title': 'المسارات المناسبة لك',
            'an.results.lead': '{n} فرصة تطابق إجاباتك، والأقوى مطابقةً أولًا.',
            'an.results.empty': 'لا توجد مطابقة قوية بعد. وسّع إجاباتك، مثلًا باختيار مجالات اهتمام أكثر.',
            'an.match': 'تطابق',
            'an.why': 'لماذا يناسبك هذا',
            'an.restart': 'ابدأ من جديد',
            'an.print': 'طباعة / حفظ كملف PDF',
            'an.next.title': 'الخطوات التالية',
            'an.next.1': 'افتح الرابط الرسمي وتحقّق من الموعد النهائي والمتطلبات الحالية.',
            'an.next.2': 'جهّز أوراقك مبكرًا: الشهادات والترجمات والسيرة الذاتية وخطاب الدافع.',
            'an.next.3': 'اسألنا في المحادثة أو على واتساب إن كان شيء غير واضح — سيجيبك إنسان حقيقي.',
            'reason.location': 'يناسب مكان إقامتك',
            'reason.level': 'يناسب مستواك التعليمي',
            'reason.goal': 'يطابق ما تبحث عنه',
            'reason.field': 'يطابق مجال اهتمامك',
            'reason.language': 'مستواك اللغوي كافٍ',
            'reason.free': 'مجاني',
            'reason.available': 'المعلومات متاحة بلغتك',
            'reason.deadline': 'الموعد النهائي ما زال مفتوحًا',
            /* ---------- community ---------- */
            'page.community.title': 'المجتمع والدعم — FEA',
            'com.hero.eyebrow': 'دعم بشري',
            'com.hero.title': 'التكنولوجيا تجد الفرصة. والناس يساعدونك على انتهازها.',
            'com.hero.lead': 'خلف كل إجابة آلية مرشدون ومتطوعون وطلاب سلكوا الطريق نفسه.',
            'com.1.title': 'إرشاد فردي عبر الإنترنت',
            'com.1.body': 'جلسات فردية مع طلاب ومتطوعين يساعدونك على اختيار مسارك وتخطيط خطواتك التالية.',
            'com.2.title': 'ندوات تعليمية',
            'com.2.body': 'جلسات مباشرة حول المنح والتقديم الجامعي والتدريب المهني والدراسة في ألمانيا.',
            'com.3.title': 'جلسات أسئلة وأجوبة',
            'com.3.body': 'جلسات مفتوحة لأي سؤال عن التقديم والأوراق والمواعيد ومعادلة الشهادات.',
            'com.4.title': 'مجموعات واتساب وتيليغرام',
            'com.4.body': 'تحديثات يومية عن الفرص ومكان لطرح الأسئلة القصيرة والحصول على إجابات سريعة.',
            'com.5.title': 'إرشاد الطلاب والمتطوعين',
            'com.5.body': 'دعم من أقران قدّموا طلباتهم حديثًا ويعرفون الإجراءات من الداخل.',
            'com.6.title': 'تخطيط مستقبلك',
            'com.6.body': 'دعم منظّم لمن يعرف أنه يريد الدراسة أو التدريب، لكنه لم يحدّد بعد ماذا وأين.',
            'com.channels.title': 'أين تجدنا',
            'com.channels.lead': 'ننشر كل أسبوع منحًا جديدة وفرصًا جامعية وأماكن تدريب مهني ودورات مجانية ونصائح للتقديم.',
            'com.volunteer.title': 'كن مرشدًا متطوعًا',
            'com.volunteer.body': 'هل أنت طالب أو خريج أو مهني؟ ساعة واحدة في الشهر تكفي لتغيير مسار تعليم إنسان. نرحّب خصوصًا بالمرشدين الذين يتحدثون الدرية أو الباشتو أو العربية.',
            'com.volunteer.cta': 'اكتب لنا',
            'faq.title': 'الأسئلة الشائعة',
            'faq.lead': 'الأسئلة التي تصلنا أكثر من غيرها — بكل لغاتنا.',
            'faq.q1': 'هل استخدام FEA مدفوع؟',
            'faq.a1': 'لا. كل المعلومات والإرشاد والتوجيه والأدوات مجانية. FEA مبادرة غير ربحية لا تتقاضى رسومًا ولا تبيع البيانات ولا تعرض إعلانات.',
            'faq.q2': 'هل أحتاج إلى إنشاء حساب؟',
            'faq.a2': 'لا. يمكنك استخدام دليل الفرص والمحلّل والمحادثة دون تسجيل. تبقى إجاباتك في المحلّل داخل متصفحك وحده.',
            'faq.q3': 'هل يقدّم FEA طلب المنحة نيابةً عني؟',
            'faq.a3': 'لا. نحن لا نرسل الطلبات ولسنا وكالة. نشرح المتطلبات ونساعدك على فهم الإجراءات ونجيب عن أسئلتك — أما الطلب نفسه فيبقى دائمًا طلبك أنت.',
            'faq.q4': 'أنا في أفغانستان. هل يمكنني استخدام FEA؟',
            'faq.a4': 'نعم. جزء كبير من عملنا موجّه لطلاب أفغانستان، وخصوصًا الفتيات والنساء. كثير من الفرص — الدورات عبر الإنترنت وبرامج اللغة والمنح الدولية — يمكن البدء بها من المنزل.',
            'faq.q5': 'ما هو الـ Ausbildung؟',
            'faq.a5': 'الـ Ausbildung تدريب مهني مدفوع الأجر في ألمانيا يجمع بين العمل في شركة والدراسة في مدرسة مهنية. يستمر عادةً من سنتين إلى ثلاث سنوات ونصف وينتهي بشهادة مهنية معترف بها.',
            'faq.q6': 'ما مستوى الألمانية المطلوب؟',
            'faq.a6': 'يعتمد على المسار. التدريب المهني يتطلب عادةً B1 إلى B2، والدراسة الجامعية بالألمانية تتطلب عادةً C1، وكثير من برامج الماجستير تُدرَّس بالإنجليزية. أما دورات اللغة والدورات الإلكترونية فمفتوحة لكل المستويات.',
            'faq.q7': 'بأي لغات يمكنني طرح الأسئلة؟',
            'faq.a7': 'الألمانية والإنجليزية والدرية والعربية — على الموقع وفي المحادثة وفي قنوات التواصل.',
            'faq.q8': 'ما مدى موثوقية المعلومات؟',
            'faq.a8': 'كل مدخل يرتبط بمصدر رسمي مثل DAAD أو BAMF أو وكالة العمل الاتحادية أو جامعة. نراجع المداخل بانتظام، لكن المواعيد تتغيّر — تحقّق دائمًا من الصفحة الرسمية قبل التقديم.',
            /* ---------- contact ---------- */
            'page.contact.title': 'اتصل بنا — FEA',
            'ct.hero.eyebrow': 'اتصل بنا',
            'ct.hero.title': 'اسألنا أي شيء عن تعليمك',
            'ct.hero.lead': 'اكتب بالألمانية أو الإنجليزية أو الدرية أو العربية. نجيبك باللغة نفسها.',
            'ct.form.title': 'أرسل سؤالك',
            'ct.form.name': 'اسمك',
            'ct.form.name.ph': 'الاسم واللقب',
            'ct.form.email': 'البريد الإلكتروني',
            'ct.form.email.ph': 'you@example.com',
            'ct.form.lang': 'أجبني باللغة',
            'ct.form.topic': 'الموضوع',
            'ct.topic.scholarship': 'المنح الدراسية',
            'ct.topic.university': 'التقديم الجامعي',
            'ct.topic.ausbildung': 'التدريب المهني',
            'ct.topic.course': 'الدورات واللغة',
            'ct.topic.volunteer': 'التطوّع / الإرشاد',
            'ct.topic.other': 'شيء آخر',
            'ct.form.message': 'سؤالك',
            'ct.form.message.ph': 'صف وضعك: أين تعيش، وماذا درست حتى الآن، وما الذي تريد فعله بعد ذلك.',
            'ct.form.consent': 'أوافق على أن يستخدم FEA رسالتي للإجابة عن سؤالي.',
            'ct.form.submit': 'إرسال الرسالة',
            'ct.form.note': 'بلا خادم حتى الآن: يفتح الزر تطبيق البريد لديك والرسالة جاهزة.',
            'ct.err.name': 'يرجى إدخال اسمك.',
            'ct.err.email': 'يرجى إدخال بريد إلكتروني صحيح.',
            'ct.err.message': 'يرجى كتابة 20 حرفًا على الأقل حتى نتمكن من مساعدتك جيدًا.',
            'ct.err.consent': 'يرجى التأكيد للمتابعة.',
            'ct.ok': 'من المفترض أن يفتح تطبيق البريد الآن. إن لم يحدث شيء، اكتب لنا مباشرةً على العنوان أدناه.',
            'ct.direct.title': 'قنوات مباشرة',
            'ct.direct.lead': 'تفضّل رسالة بدل النموذج؟ كل هذه القنوات تصل إلى الشخصين نفسيهما.',
            'ct.response.title': 'زمن الاستجابة',
            'ct.response.body': 'يجيب المساعد الآلي فورًا وعلى مدار الساعة. أما الرد البشري فيستغرق عادةً من يوم إلى ثلاثة أيام — نحن طالبان ونقوم بذلك إلى جانب دراستنا.',
            /* ---------- chat ---------- */
            'chat.open': 'افتح مساعد FEA',
            'chat.title': 'مساعد FEA',
            'chat.subtitle': 'إجابات بلغتك · على مدار الساعة',
            'chat.placeholder': 'اسأل عن المنح أو التدريب المهني أو الدورات …',
            'chat.send': 'إرسال',
            'chat.greeting': 'مرحبًا! أنا مساعد FEA. اسألني عن المنح والجامعات والتدريب المهني والدورات المجانية أو تعلّم الألمانية — بالألمانية أو الإنجليزية أو الدرية أو العربية.',
            'chat.fallback': 'ليس لديّ إجابة محفوظة عن ذلك بعد. جرّب أحد المواضيع أدناه، أو أرسل سؤالك من صفحة الاتصال — سيجيبك إنسان حقيقي.',
            'chat.disclaimer': 'نموذج أولي: تأتي الإجابات من قاعدة معرفة محلية داخل المتصفح، لا من خدمة ذكاء اصطناعي مباشرة.',
            'chat.you': 'أنت',
            'chat.bot': 'FEA',
            'chat.typing': 'يكتب …',
            'chip.scholarship': 'المنح الدراسية',
            'chip.ausbildung': 'التدريب المهني',
            'chip.university': 'الجامعة',
            'chip.german': 'تعلّم الألمانية',
            'chip.free': 'دورات مجانية',
            'chip.afghanistan': 'أنا في أفغانستان',
            'chip.contact': 'التحدث إلى إنسان',
            'chip.cost': 'هل هناك تكلفة؟',
            'ans.scholarship': 'المنح أسرع طريق لكثير من الطلاب. ابدأ بقاعدة بيانات DAAD لألمانيا، وبـ Deutschlandstipendium إن كنت تدرس بالفعل في جامعة ألمانية، وببرنامج Hilde Domin إن كان تعليمك مهدّدًا في بلدك. افتح صفحة «الفرص» ورشّح حسب «منحة».',
            'ans.ausbildung': 'الـ Ausbildung تدريب مهني مدفوع في ألمانيا: تعمل في شركة وتدرس في مدرسة مهنية. يستمر عادةً من سنتين إلى ثلاث سنوات ونصف وتتقاضى راتبًا من الشهر الأول. تحتاج عادةً إلى ألمانية بمستوى B1–B2 وشهادة مدرسية. ابحث في بوابة وكالة العمل الاتحادية أو في سوق أماكن التدريب IHK.',
            'ans.university': 'للدراسة في جامعة ألمانية تحتاج عادةً إلى شهادة مدرسية معترف بها، وشهادة لغة (C1 للبرامج بالألمانية، أو IELTS/TOEFL للبرامج بالإنجليزية)، وتقديم عبر uni-assist. وإن لم تُعترف شهادتك مباشرةً، فالطريق هو Studienkolleg ثم امتحان Feststellungsprüfung.',
            'ans.german': 'يمكنك البدء بالألمانية مجانًا اليوم: يغطي DW Learn German المستويات من A1 إلى C1 بالصوت والفيديو والتمارين. وإن كنت تعيش في ألمانيا، اسأل عن دورة اندماج من BAMF — تصل بك إلى B1 وغالبًا ما تكون مجانية.',
            'ans.free': 'الدورات المجانية متاحة لكل المجالات: freeCodeCamp للبرمجة، وedX وCoursera في وضع audit للمقررات الجامعية، وDW للألمانية. رشّح صفحة «الفرص» حسب «دورة مجانية».',
            'ans.afghanistan': 'جزء كبير من FEA مبني لطلاب أفغانستان، وخصوصًا الفتيات والنساء. من المنزل يمكنك بدء دورات إلكترونية وتعلّم الألمانية أو الإنجليزية والتقديم على منح دولية مثل الجامعة الآسيوية للنساء أو برنامج Hilde Domin. وتنشر مجموعاتنا على تيليغرام وواتساب فرصًا جديدة يوميًا.',
            'ans.cost': 'كل ما يقدّمه FEA مجاني: الموقع والمحلّل والمحادثة والإرشاد وتوجيهنا على وسائل التواصل. نحن مبادرة غير ربحية — لا نتقاضى رسومًا ولا نبيع بياناتك أبدًا.',
            'ans.contact': 'يمكنك الوصول إلى إنسان حقيقي عبر صفحة الاتصال أو عبر مجموعاتنا على واتساب وتيليغرام. نجيب بالألمانية والإنجليزية والدرية والعربية، عادةً خلال يوم إلى ثلاثة أيام.',
            'ans.analyzer': 'يطرح محلّل الفرص ستة أسئلة قصيرة — مكان الإقامة والمستوى التعليمي والهدف ومجالات الاهتمام ومستوى اللغة والإمكانات المالية — ثم يرتّب الفرص المناسبة لك. ويعمل بالكامل داخل متصفحك.',
            'ans.greeting': 'أهلًا وسهلًا! كيف يمكنني مساعدتك في تعليمك اليوم؟ اسأل عن المنح أو الجامعات أو التدريب المهني أو الدورات المجانية أو الألمانية.',
        };
    })(Locales = FEA.Locales || (FEA.Locales = {}));
})(FEA || (FEA = {}));
/**
 * Language registry + assembled translation table.
 *
 * English is the reference dictionary: any key missing from another locale
 * falls back to English at lookup time (see i18n.ts) instead of showing a raw key.
 */
var FEA;
(function (FEA) {
    FEA.LANGUAGES = [
        { code: 'de', native: 'Deutsch', short: 'DE', dir: 'ltr', htmlLang: 'de' },
        { code: 'en', native: 'English', short: 'EN', dir: 'ltr', htmlLang: 'en' },
        { code: 'fa', native: 'دری', short: 'دری', dir: 'rtl', htmlLang: 'fa-AF' },
        { code: 'ar', native: 'العربية', short: 'ع', dir: 'rtl', htmlLang: 'ar' },
    ];
    FEA.DEFAULT_LANG = 'de';
    FEA.TRANSLATIONS = {
        de: FEA.Locales.de,
        en: FEA.Locales.en,
        fa: FEA.Locales.fa,
        ar: FEA.Locales.ar,
    };
})(FEA || (FEA = {}));
/**
 * Static content data: the opportunity directory, the chat knowledge base and
 * the social channels. In the full platform this comes from the FEA backend and
 * is refreshed by the AI monitoring job; for the front-end prototype it lives here.
 */
var FEA;
(function (FEA) {
    var Data;
    (function (Data) {
        /** Every field id used by the analyzer. `any` means "relevant for all fields". */
        Data.FIELDS = [
            'it',
            'engineering',
            'health',
            'business',
            'social',
            'education',
            'arts',
            'science',
        ];
        Data.LANGUAGE_LEVELS = [
            'none',
            'a1',
            'a2',
            'b1',
            'b2',
            'c1',
        ];
        Data.LEVELS = [
            'school',
            'highschool',
            'bachelor',
            'master',
            'professional',
        ];
        const ALL_FIELDS = ['any'].concat(Data.FIELDS);
        Data.OPPORTUNITIES = [
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
        /**
         * Placeholder destinations: the accounts are created in Phase 1 of the plan,
         * so the links point at the project's public development page for now.
         */
        const PLACEHOLDER = 'https://happy-trustcore.github.io/FEA/';
        Data.CHANNELS = [
            { id: 'instagram', label: 'Instagram', url: PLACEHOLDER, icon: 'instagram' },
            { id: 'facebook', label: 'Facebook', url: PLACEHOLDER, icon: 'facebook' },
            { id: 'tiktok', label: 'TikTok', url: PLACEHOLDER, icon: 'tiktok' },
            { id: 'telegram', label: 'Telegram', url: PLACEHOLDER, icon: 'telegram' },
            { id: 'whatsapp', label: 'WhatsApp', url: PLACEHOLDER, icon: 'whatsapp' },
        ];
        Data.CONTACT_EMAIL = 'happytrustcore.github@gmail.com';
        Data.DEV_SITE = 'https://happy-trustcore.github.io/FEA/';
        /**
         * Chat knowledge base. Each intent carries keywords in all four languages so a
         * user typing "بورسیه" gets the same answer as one typing "Stipendium".
         */
        Data.INTENTS = [
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
        Data.CHIP_INTENTS = {
            'chip.scholarship': 'scholarship',
            'chip.ausbildung': 'ausbildung',
            'chip.university': 'university',
            'chip.german': 'german',
            'chip.free': 'free',
            'chip.afghanistan': 'afghanistan',
            'chip.contact': 'contact',
            'chip.cost': 'cost',
        };
        Data.DEFAULT_CHIPS = [
            'chip.scholarship',
            'chip.ausbildung',
            'chip.university',
            'chip.german',
            'chip.free',
            'chip.cost',
        ];
    })(Data = FEA.Data || (FEA.Data = {}));
})(FEA || (FEA = {}));
/**
 * Internationalisation engine.
 *
 * Markup opts in with data attributes:
 *   data-i18n="key"              -> textContent
 *   data-i18n-html="key"         -> innerHTML (only for strings we author ourselves)
 *   data-i18n-placeholder="key"  -> placeholder attribute
 *   data-i18n-aria="key"         -> aria-label attribute
 *   data-i18n-title="key"        -> title attribute
 *   data-i18n-vars='{"n":"12"}'  -> values for {placeholders} inside the string
 *
 * Switching language re-renders every registered listener, so the analyzer,
 * the directory and the chat all follow along without a page reload.
 */
var FEA;
(function (FEA) {
    var I18n;
    (function (I18n) {
        const STORAGE_KEY = 'fea.lang';
        const listeners = [];
        let current = FEA.DEFAULT_LANG;
        function isLang(value) {
            return value === 'de' || value === 'en' || value === 'fa' || value === 'ar';
        }
        function meta(code) {
            for (let i = 0; i < FEA.LANGUAGES.length; i++) {
                if (FEA.LANGUAGES[i].code === code)
                    return FEA.LANGUAGES[i];
            }
            return FEA.LANGUAGES[0];
        }
        I18n.meta = meta;
        function getLang() {
            return current;
        }
        I18n.getLang = getLang;
        function dir() {
            return meta(current).dir;
        }
        I18n.dir = dir;
        /** Resolve a key, falling back to English and finally to the key itself. */
        function t(key, vars) {
            const table = FEA.TRANSLATIONS[current];
            let value = table[key];
            if (value === undefined)
                value = FEA.TRANSLATIONS.en[key];
            if (value === undefined)
                return key;
            if (vars) {
                Object.keys(vars).forEach(function (name) {
                    value = value.split('{' + name + '}').join(String(vars[name]));
                });
            }
            return value;
        }
        I18n.t = t;
        /** Detect the initial language: stored choice > ?lang= > browser > default. */
        function detect() {
            const params = new URLSearchParams(window.location.search);
            const fromUrl = params.get('lang');
            if (isLang(fromUrl))
                return fromUrl;
            let stored = null;
            try {
                stored = window.localStorage.getItem(STORAGE_KEY);
            }
            catch (err) {
                stored = null;
            }
            if (isLang(stored))
                return stored;
            const nav = (navigator.language || '').toLowerCase();
            if (nav.indexOf('de') === 0)
                return 'de';
            if (nav.indexOf('fa') === 0 || nav.indexOf('prs') === 0 || nav.indexOf('ps') === 0)
                return 'fa';
            if (nav.indexOf('ar') === 0)
                return 'ar';
            if (nav.indexOf('en') === 0)
                return 'en';
            return FEA.DEFAULT_LANG;
        }
        function readVars(el) {
            const raw = el.getAttribute('data-i18n-vars');
            if (!raw)
                return undefined;
            try {
                return JSON.parse(raw);
            }
            catch (err) {
                return undefined;
            }
        }
        /** Translate every tagged node inside `root` (defaults to the document). */
        function apply(root) {
            const scope = root || document;
            scope.querySelectorAll('[data-i18n]').forEach(function (el) {
                el.textContent = t(el.getAttribute('data-i18n'), readVars(el));
            });
            scope.querySelectorAll('[data-i18n-html]').forEach(function (el) {
                el.innerHTML = t(el.getAttribute('data-i18n-html'), readVars(el));
            });
            scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
                el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
            });
            scope.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
                el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
            });
            scope.querySelectorAll('[data-i18n-title]').forEach(function (el) {
                el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
            });
        }
        I18n.apply = apply;
        function applyDocument() {
            const info = meta(current);
            const html = document.documentElement;
            html.setAttribute('lang', info.htmlLang);
            html.setAttribute('dir', info.dir);
            html.setAttribute('data-lang', info.code);
            const titleKey = document.body.getAttribute('data-page-title');
            if (titleKey)
                document.title = t(titleKey);
            const description = document.querySelector('meta[name="description"]');
            const descKey = document.body.getAttribute('data-page-description');
            if (description && descKey)
                description.setAttribute('content', t(descKey));
            apply(document);
        }
        function onChange(fn) {
            listeners.push(fn);
        }
        I18n.onChange = onChange;
        function setLang(code, persist) {
            current = code;
            if (persist !== false) {
                try {
                    window.localStorage.setItem(STORAGE_KEY, code);
                }
                catch (err) {
                    /* private mode — the choice simply is not remembered */
                }
            }
            applyDocument();
            for (let i = 0; i < listeners.length; i++)
                listeners[i](code);
            document.dispatchEvent(new CustomEvent('fea:langchange', { detail: { lang: code } }));
        }
        I18n.setLang = setLang;
        /** Render the language switcher(s) present on the page. */
        function buildSwitchers() {
            document.querySelectorAll('[data-lang-switcher]').forEach(function (host) {
                host.innerHTML = '';
                host.setAttribute('role', 'group');
                host.setAttribute('aria-label', t('common.language'));
                FEA.LANGUAGES.forEach(function (lang) {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'lang-pill';
                    button.textContent = lang.short;
                    button.lang = lang.htmlLang;
                    button.title = lang.native;
                    button.setAttribute('aria-label', lang.native);
                    button.setAttribute('data-lang-code', lang.code);
                    button.setAttribute('aria-pressed', String(lang.code === current));
                    button.addEventListener('click', function () {
                        setLang(lang.code);
                    });
                    host.appendChild(button);
                });
            });
        }
        function syncSwitchers() {
            document.querySelectorAll('[data-lang-code]').forEach(function (button) {
                button.setAttribute('aria-pressed', String(button.getAttribute('data-lang-code') === current));
            });
            document.querySelectorAll('[data-lang-switcher]').forEach(function (host) {
                host.setAttribute('aria-label', t('common.language'));
            });
        }
        function init() {
            current = detect();
            buildSwitchers();
            applyDocument();
            syncSwitchers();
            onChange(syncSwitchers);
        }
        I18n.init = init;
    })(I18n = FEA.I18n || (FEA.I18n = {}));
})(FEA || (FEA = {}));
/**
 * Opportunity directory: card rendering (shared with the analyzer), plus the
 * search / filter / sort controller for opportunities.html.
 */
var FEA;
(function (FEA) {
    var Opps;
    (function (Opps) {
        const LOCALE_MAP = {
            de: 'de-DE',
            en: 'en-GB',
            // Force the Gregorian calendar and Latin digits so the date on the card can
            // be compared 1:1 with the date on the official application page.
            fa: 'fa-AF-u-ca-gregory-nu-latn',
            ar: 'ar-u-ca-gregory-nu-latn',
        };
        function formatDeadline(value) {
            if (value === 'rolling')
                return FEA.I18n.t('common.rolling');
            const date = new Date(value + 'T00:00:00');
            if (isNaN(date.getTime()))
                return value;
            try {
                return new Intl.DateTimeFormat(LOCALE_MAP[FEA.I18n.getLang()], {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                }).format(date);
            }
            catch (err) {
                return value;
            }
        }
        Opps.formatDeadline = formatDeadline;
        function el(tag, className, text) {
            const node = document.createElement(tag);
            if (className)
                node.className = className;
            if (text !== undefined)
                node.textContent = text;
            return node;
        }
        function tag(text, variant) {
            return el('span', 'tag' + (variant ? ' tag--' + variant : ''), text);
        }
        function metaRow(labelKey, value) {
            const row = el('div', 'meta-row');
            row.appendChild(el('dt', 'meta-row__label', FEA.I18n.t(labelKey)));
            row.appendChild(el('dd', 'meta-row__value', value));
            return row;
        }
        function levelsLabel(opp) {
            return opp.levels
                .map(function (level) {
                return FEA.I18n.t('level.' + level);
            })
                .join(' · ');
        }
        function languageLabel(opp) {
            if (opp.requiresLanguage === 'none')
                return FEA.I18n.t('lvl.none');
            return opp.requiresLanguage.toUpperCase();
        }
        /**
         * Builds one opportunity card. `extras` lets the analyzer attach the match
         * score and the reasons why the entry was proposed.
         */
        function card(opp, extras) {
            const article = el('article', 'card opp-card');
            article.setAttribute('data-id', opp.id);
            article.setAttribute('data-kind', opp.kind);
            const top = el('div', 'opp-card__tags');
            top.appendChild(tag(FEA.I18n.t('kind.' + opp.kind), 'kind-' + opp.kind));
            top.appendChild(tag(FEA.I18n.t('region.' + opp.region)));
            if (opp.free)
                top.appendChild(tag(FEA.I18n.t('common.free'), 'free'));
            article.appendChild(top);
            if (extras && typeof extras.score === 'number') {
                const score = el('div', 'match');
                const bar = el('div', 'match__bar');
                const fill = el('span', 'match__fill');
                fill.style.width = extras.score + '%';
                bar.appendChild(fill);
                score.appendChild(el('span', 'match__value', extras.score + '% ' + FEA.I18n.t('an.match')));
                score.appendChild(bar);
                article.appendChild(score);
            }
            article.appendChild(el('h3', 'opp-card__title', FEA.I18n.t(opp.titleKey)));
            article.appendChild(el('p', 'opp-card__provider', FEA.I18n.t(opp.providerKey)));
            article.appendChild(el('p', 'opp-card__summary', FEA.I18n.t(opp.summaryKey)));
            const meta = el('dl', 'opp-card__meta');
            meta.appendChild(metaRow('common.deadline', formatDeadline(opp.deadline)));
            meta.appendChild(metaRow('common.langreq', languageLabel(opp)));
            meta.appendChild(metaRow('common.level', levelsLabel(opp)));
            article.appendChild(meta);
            if (extras && extras.reasonKeys && extras.reasonKeys.length) {
                const why = el('div', 'why');
                why.appendChild(el('p', 'why__title', FEA.I18n.t('an.why')));
                const list = el('ul', 'why__list');
                extras.reasonKeys.forEach(function (key) {
                    list.appendChild(el('li', undefined, FEA.I18n.t(key)));
                });
                why.appendChild(list);
                article.appendChild(why);
            }
            const link = document.createElement('a');
            link.className = 'btn btn--ghost btn--sm opp-card__link';
            link.href = opp.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = FEA.I18n.t('common.openLink');
            article.appendChild(link);
            return article;
        }
        Opps.card = card;
        const state = {
            query: '',
            kind: 'all',
            region: 'all',
            level: 'all',
            freeOnly: false,
            sort: 'deadline',
        };
        function searchable(opp) {
            return [
                FEA.I18n.t(opp.titleKey),
                FEA.I18n.t(opp.providerKey),
                FEA.I18n.t(opp.summaryKey),
                FEA.I18n.t('kind.' + opp.kind),
                FEA.I18n.t('region.' + opp.region),
                opp.id,
            ]
                .join(' ')
                .toLowerCase();
        }
        function matches(opp) {
            if (state.kind !== 'all' && opp.kind !== state.kind)
                return false;
            if (state.region !== 'all' && opp.region !== state.region)
                return false;
            if (state.level !== 'all' && opp.levels.indexOf(state.level) === -1)
                return false;
            if (state.freeOnly && !opp.free)
                return false;
            if (state.query && searchable(opp).indexOf(state.query) === -1)
                return false;
            return true;
        }
        function sorted(list) {
            const copy = list.slice();
            if (state.sort === 'az') {
                copy.sort(function (a, b) {
                    return FEA.I18n.t(a.titleKey).localeCompare(FEA.I18n.t(b.titleKey), FEA.I18n.getLang());
                });
                return copy;
            }
            copy.sort(function (a, b) {
                // Fixed dates first (soonest at the top), rolling entries after them.
                if (a.deadline === 'rolling' && b.deadline === 'rolling')
                    return 0;
                if (a.deadline === 'rolling')
                    return 1;
                if (b.deadline === 'rolling')
                    return -1;
                return a.deadline < b.deadline ? -1 : 1;
            });
            return copy;
        }
        function fillSelect(select, values, keyPrefix) {
            const previous = select.value || 'all';
            select.innerHTML = '';
            const all = document.createElement('option');
            all.value = 'all';
            all.textContent = FEA.I18n.t('opps.filter.all');
            select.appendChild(all);
            values.forEach(function (value) {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = FEA.I18n.t(keyPrefix + value);
                select.appendChild(option);
            });
            select.value = previous;
        }
        function fillSortSelect(select) {
            const previous = select.value || 'deadline';
            select.innerHTML = '';
            [
                ['deadline', 'opps.sort.deadline'],
                ['az', 'opps.sort.az'],
            ].forEach(function (pair) {
                const option = document.createElement('option');
                option.value = pair[0];
                option.textContent = FEA.I18n.t(pair[1]);
                select.appendChild(option);
            });
            select.value = previous;
        }
        function init() {
            const gridHost = document.querySelector('[data-opps-grid]');
            if (!gridHost)
                return;
            const grid = gridHost;
            const search = document.querySelector('[data-opps-search]');
            const kindSelect = document.querySelector('[data-opps-kind]');
            const regionSelect = document.querySelector('[data-opps-region]');
            const levelSelect = document.querySelector('[data-opps-level]');
            const sortSelect = document.querySelector('[data-opps-sort]');
            const freeToggle = document.querySelector('[data-opps-free]');
            const resetButton = document.querySelector('[data-opps-reset]');
            const countLabel = document.querySelector('[data-opps-count]');
            const empty = document.querySelector('[data-opps-empty]');
            const kinds = ['scholarship', 'university', 'ausbildung', 'course', 'language', 'career'];
            const regions = ['germany', 'afghanistan', 'online', 'international'];
            function buildSelects() {
                if (kindSelect)
                    fillSelect(kindSelect, kinds, 'kind.');
                if (regionSelect)
                    fillSelect(regionSelect, regions, 'region.');
                if (levelSelect)
                    fillSelect(levelSelect, FEA.Data.LEVELS, 'level.');
                if (sortSelect)
                    fillSortSelect(sortSelect);
            }
            function render() {
                const list = sorted(FEA.Data.OPPORTUNITIES.filter(matches));
                grid.innerHTML = '';
                list.forEach(function (opp) {
                    grid.appendChild(card(opp));
                });
                if (countLabel)
                    countLabel.textContent = FEA.I18n.t('opps.count', { n: list.length });
                if (empty)
                    empty.hidden = list.length > 0;
                grid.hidden = list.length === 0;
            }
            if (search) {
                search.addEventListener('input', function () {
                    state.query = search.value.trim().toLowerCase();
                    render();
                });
            }
            if (kindSelect) {
                kindSelect.addEventListener('change', function () {
                    state.kind = kindSelect.value;
                    render();
                });
            }
            if (regionSelect) {
                regionSelect.addEventListener('change', function () {
                    state.region = regionSelect.value;
                    render();
                });
            }
            if (levelSelect) {
                levelSelect.addEventListener('change', function () {
                    state.level = levelSelect.value;
                    render();
                });
            }
            if (sortSelect) {
                sortSelect.addEventListener('change', function () {
                    state.sort = sortSelect.value === 'az' ? 'az' : 'deadline';
                    render();
                });
            }
            if (freeToggle) {
                freeToggle.addEventListener('change', function () {
                    state.freeOnly = freeToggle.checked;
                    render();
                });
            }
            if (resetButton) {
                resetButton.addEventListener('click', function () {
                    state.query = '';
                    state.kind = 'all';
                    state.region = 'all';
                    state.level = 'all';
                    state.freeOnly = false;
                    state.sort = 'deadline';
                    if (search)
                        search.value = '';
                    if (kindSelect)
                        kindSelect.value = 'all';
                    if (regionSelect)
                        regionSelect.value = 'all';
                    if (levelSelect)
                        levelSelect.value = 'all';
                    if (sortSelect)
                        sortSelect.value = 'deadline';
                    if (freeToggle)
                        freeToggle.checked = false;
                    render();
                });
            }
            // A deep link such as opportunities.html#ausbildung pre-selects a filter.
            const hash = window.location.hash.replace('#', '');
            if (hash && kinds.indexOf(hash) !== -1) {
                state.kind = hash;
            }
            buildSelects();
            if (kindSelect)
                kindSelect.value = state.kind;
            render();
            FEA.I18n.onChange(function () {
                buildSelects();
                if (kindSelect)
                    kindSelect.value = state.kind;
                if (regionSelect)
                    regionSelect.value = state.region;
                if (levelSelect)
                    levelSelect.value = state.level;
                if (sortSelect)
                    sortSelect.value = state.sort;
                render();
            });
        }
        Opps.init = init;
    })(Opps = FEA.Opps || (FEA.Opps = {}));
})(FEA || (FEA = {}));
/**
 * AI Opportunity Analyzer.
 *
 * A six-step questionnaire followed by a transparent scoring pass over the
 * opportunity dataset. Everything runs locally: no request leaves the browser,
 * which is why the prototype can be shipped without any backend.
 */
var FEA;
(function (FEA) {
    var Analyzer;
    (function (Analyzer) {
        const STORAGE_KEY = 'fea.analyzer';
        const LANG_RANK = { none: 0, a1: 1, a2: 2, b1: 3, b2: 4, c1: 5 };
        const STEPS = [
            {
                id: 'location',
                titleKey: 'an.q1',
                type: 'single',
                options: [
                    { value: 'afghanistan', labelKey: 'an.q1.afghanistan' },
                    { value: 'germany', labelKey: 'an.q1.germany' },
                    { value: 'other', labelKey: 'an.q1.other' },
                ],
            },
            {
                id: 'level',
                titleKey: 'an.q2',
                type: 'single',
                options: FEA.Data.LEVELS.map(function (level) {
                    return { value: level, labelKey: 'level.' + level };
                }),
            },
            {
                id: 'goal',
                titleKey: 'an.q3',
                type: 'single',
                options: [
                    { value: 'scholarship', labelKey: 'an.q3.scholarship' },
                    { value: 'university', labelKey: 'an.q3.university' },
                    { value: 'ausbildung', labelKey: 'an.q3.ausbildung' },
                    { value: 'course', labelKey: 'an.q3.course' },
                    { value: 'language', labelKey: 'an.q3.language' },
                    { value: 'career', labelKey: 'an.q3.career' },
                ],
            },
            {
                id: 'fields',
                titleKey: 'an.q4',
                type: 'multi',
                options: FEA.Data.FIELDS.map(function (field) {
                    return { value: field, labelKey: 'an.f.' + field };
                }),
            },
            { id: 'languages', titleKey: 'an.q56', type: 'custom' },
            {
                id: 'budget',
                titleKey: 'an.q7',
                type: 'single',
                options: [
                    { value: 'yes', labelKey: 'an.q7.yes' },
                    { value: 'no', labelKey: 'an.q7.no' },
                ],
            },
        ];
        const answers = {
            location: 'germany',
            level: 'highschool',
            goal: 'scholarship',
            fields: [],
            german: 'none',
            english: 'none',
            needsFree: true,
        };
        let step = 0;
        let finished = false;
        /* ------------------------------------------------------------------ */
        /* Scoring                                                             */
        /* ------------------------------------------------------------------ */
        /** Kinds that stay relevant when the user asked for something adjacent. */
        const RELATED = {
            scholarship: ['university'],
            university: ['scholarship'],
            ausbildung: ['career', 'language'],
            course: ['language'],
            language: ['course'],
            career: ['ausbildung'],
        };
        function userLangRank(opp) {
            const german = LANG_RANK[answers.german];
            const english = LANG_RANK[answers.english];
            // Providers that publish in English can be used with either language.
            return opp.languagesOffered.indexOf('en') !== -1 ? Math.max(german, english) : german;
        }
        function deadlineOpen(opp) {
            if (opp.deadline === 'rolling')
                return true;
            const today = new Date();
            const iso = today.getFullYear() +
                '-' +
                String(today.getMonth() + 1).padStart(2, '0') +
                '-' +
                String(today.getDate()).padStart(2, '0');
            return opp.deadline >= iso;
        }
        function score(opp) {
            const reasons = [];
            let points = 0;
            /* Goal — the strongest signal. */
            if (opp.kind === answers.goal) {
                points += 30;
                reasons.push('reason.goal');
            }
            else if (RELATED[answers.goal] && RELATED[answers.goal].indexOf(opp.kind) !== -1) {
                points += 10;
            }
            /* Location. */
            if (answers.location === 'germany') {
                if (opp.region === 'germany') {
                    points += 15;
                    reasons.push('reason.location');
                }
                else if (opp.region === 'online' || opp.region === 'international') {
                    points += 10;
                }
            }
            else if (answers.location === 'afghanistan') {
                if (opp.region === 'online' || opp.region === 'international' || opp.region === 'afghanistan') {
                    points += 15;
                    reasons.push('reason.location');
                }
                else {
                    points += 5;
                }
            }
            else {
                if (opp.region === 'international' || opp.region === 'online') {
                    points += 13;
                    reasons.push('reason.location');
                }
                else {
                    points += 7;
                }
            }
            /* Education level. */
            if (opp.levels.indexOf(answers.level) !== -1) {
                points += 15;
                reasons.push('reason.level');
            }
            /* Field of interest. */
            let fieldHit = false;
            for (let i = 0; i < answers.fields.length; i++) {
                if (opp.fields.indexOf(answers.fields[i]) !== -1) {
                    fieldHit = true;
                    break;
                }
            }
            if (fieldHit) {
                points += 15;
                reasons.push('reason.field');
            }
            else if (opp.fields.indexOf('any') !== -1) {
                points += 8;
            }
            /* Language requirement. */
            const required = LANG_RANK[opp.requiresLanguage];
            if (required === 0) {
                points += 12;
                reasons.push('reason.language');
            }
            else {
                const gap = required - userLangRank(opp);
                if (gap <= 0) {
                    points += 15;
                    reasons.push('reason.language');
                }
                else if (gap === 1) {
                    points -= 5;
                }
                else {
                    points -= 15;
                }
            }
            /* Cost. */
            if (answers.needsFree) {
                if (opp.free) {
                    points += 10;
                    reasons.push('reason.free');
                }
                else {
                    points -= 25;
                }
            }
            else if (opp.free) {
                points += 5;
            }
            /* Information available in the language the user is reading right now. */
            if (opp.languagesOffered.indexOf(FEA.I18n.getLang()) !== -1) {
                points += 5;
                reasons.push('reason.available');
            }
            /* Deadline. */
            if (deadlineOpen(opp)) {
                points += 5;
                reasons.push('reason.deadline');
            }
            const normalized = Math.max(0, Math.min(100, Math.round((points / 105) * 100)));
            return { opportunity: opp, score: normalized, reasonKeys: reasons.slice(0, 4) };
        }
        Analyzer.score = score;
        function results() {
            return FEA.Data.OPPORTUNITIES.map(score)
                .filter(function (result) {
                return result.score >= 35;
            })
                .sort(function (a, b) {
                return b.score - a.score;
            })
                .slice(0, 6);
        }
        Analyzer.results = results;
        /* ------------------------------------------------------------------ */
        /* Persistence                                                         */
        /* ------------------------------------------------------------------ */
        function save() {
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
            }
            catch (err) {
                /* nothing to do — the analyzer still works for this visit */
            }
        }
        function restore() {
            let raw = null;
            try {
                raw = window.localStorage.getItem(STORAGE_KEY);
            }
            catch (err) {
                return false;
            }
            if (!raw)
                return false;
            try {
                const parsed = JSON.parse(raw);
                if (!parsed || !parsed.goal || !parsed.fields)
                    return false;
                answers.location = parsed.location || answers.location;
                answers.level = parsed.level || answers.level;
                answers.goal = parsed.goal;
                answers.fields = parsed.fields;
                answers.german = parsed.german || 'none';
                answers.english = parsed.english || 'none';
                answers.needsFree = parsed.needsFree !== false;
                return true;
            }
            catch (err) {
                return false;
            }
        }
        /* ------------------------------------------------------------------ */
        /* Rendering                                                           */
        /* ------------------------------------------------------------------ */
        function el(tag, className, text) {
            const node = document.createElement(tag);
            if (className)
                node.className = className;
            if (text !== undefined)
                node.textContent = text;
            return node;
        }
        function currentValue(id) {
            switch (id) {
                case 'location':
                    return answers.location;
                case 'level':
                    return answers.level;
                case 'goal':
                    return answers.goal;
                case 'budget':
                    return answers.needsFree ? 'yes' : 'no';
                default:
                    return '';
            }
        }
        function setValue(id, value) {
            switch (id) {
                case 'location':
                    answers.location = value;
                    break;
                case 'level':
                    answers.level = value;
                    break;
                case 'goal':
                    answers.goal = value;
                    break;
                case 'budget':
                    answers.needsFree = value === 'yes';
                    break;
                default:
                    break;
            }
        }
        function levelSelect(id, labelKey) {
            const wrap = el('div', 'field');
            const label = document.createElement('label');
            label.className = 'field__label';
            label.htmlFor = 'an-' + id;
            label.textContent = FEA.I18n.t(labelKey);
            const select = document.createElement('select');
            select.className = 'field__control';
            select.id = 'an-' + id;
            FEA.Data.LANGUAGE_LEVELS.forEach(function (level) {
                const option = document.createElement('option');
                option.value = level;
                option.textContent = level === 'none' ? FEA.I18n.t('lvl.none') : level.toUpperCase();
                select.appendChild(option);
            });
            select.value = answers[id];
            select.addEventListener('change', function () {
                answers[id] = select.value;
                save();
            });
            wrap.appendChild(label);
            wrap.appendChild(select);
            return wrap;
        }
        function renderStep(host, error) {
            const definition = STEPS[step];
            host.innerHTML = '';
            const fieldset = document.createElement('fieldset');
            fieldset.className = 'an-step';
            const legend = document.createElement('legend');
            legend.className = 'an-step__title';
            legend.textContent = FEA.I18n.t(definition.titleKey);
            fieldset.appendChild(legend);
            if (definition.type === 'multi') {
                fieldset.appendChild(el('p', 'an-step__hint', FEA.I18n.t('an.multi')));
            }
            if (definition.type === 'custom' && definition.id === 'languages') {
                const grid = el('div', 'an-langs');
                grid.appendChild(levelSelect('german', 'an.q5'));
                grid.appendChild(levelSelect('english', 'an.q6'));
                fieldset.appendChild(grid);
            }
            else if (definition.options) {
                const list = el('div', 'an-options');
                definition.options.forEach(function (option) {
                    const label = document.createElement('label');
                    label.className = 'an-option';
                    const input = document.createElement('input');
                    input.type = definition.type === 'multi' ? 'checkbox' : 'radio';
                    input.name = 'an-' + definition.id;
                    input.value = option.value;
                    if (definition.type === 'multi') {
                        input.checked = answers.fields.indexOf(option.value) !== -1;
                        input.addEventListener('change', function () {
                            const index = answers.fields.indexOf(option.value);
                            if (input.checked && index === -1)
                                answers.fields.push(option.value);
                            if (!input.checked && index !== -1)
                                answers.fields.splice(index, 1);
                            save();
                        });
                    }
                    else {
                        input.checked = currentValue(definition.id) === option.value;
                        input.addEventListener('change', function () {
                            setValue(definition.id, option.value);
                            save();
                        });
                    }
                    label.appendChild(input);
                    label.appendChild(el('span', 'an-option__label', FEA.I18n.t(option.labelKey)));
                    list.appendChild(label);
                });
                fieldset.appendChild(list);
            }
            if (error) {
                const alert = el('p', 'an-error', error);
                alert.setAttribute('role', 'alert');
                fieldset.appendChild(alert);
            }
            host.appendChild(fieldset);
        }
        function renderResults(host) {
            host.innerHTML = '';
            const list = results();
            host.appendChild(el('h2', 'an-results__title', FEA.I18n.t('an.results.title')));
            if (!list.length) {
                host.appendChild(el('p', 'an-results__lead', FEA.I18n.t('an.results.empty')));
            }
            else {
                host.appendChild(el('p', 'an-results__lead', FEA.I18n.t('an.results.lead', { n: list.length })));
                const grid = el('div', 'grid grid--cards');
                list.forEach(function (result) {
                    grid.appendChild(FEA.Opps.card(result.opportunity, { score: result.score, reasonKeys: result.reasonKeys }));
                });
                host.appendChild(grid);
            }
            const next = el('div', 'an-next card card--soft');
            next.appendChild(el('h3', undefined, FEA.I18n.t('an.next.title')));
            const steps = el('ol', 'an-next__list');
            ['an.next.1', 'an.next.2', 'an.next.3'].forEach(function (key) {
                steps.appendChild(el('li', undefined, FEA.I18n.t(key)));
            });
            next.appendChild(steps);
            host.appendChild(next);
            const actions = el('div', 'an-actions');
            const restart = document.createElement('button');
            restart.type = 'button';
            restart.className = 'btn btn--ghost';
            restart.textContent = FEA.I18n.t('an.restart');
            restart.addEventListener('click', function () {
                finished = false;
                step = 0;
                answers.fields = [];
                render();
            });
            const print = document.createElement('button');
            print.type = 'button';
            print.className = 'btn btn--ghost';
            print.textContent = FEA.I18n.t('an.print');
            print.addEventListener('click', function () {
                window.print();
            });
            actions.appendChild(restart);
            actions.appendChild(print);
            host.appendChild(actions);
        }
        let root = null;
        function render(error) {
            if (!root)
                return;
            const stepsHost = root.querySelector('[data-an-steps]');
            const resultsHost = root.querySelector('[data-an-results]');
            const nav = root.querySelector('[data-an-nav]');
            const progress = root.querySelector('[data-an-progress]');
            const bar = root.querySelector('[data-an-bar]');
            const backButton = root.querySelector('[data-an-back]');
            const nextButton = root.querySelector('[data-an-next]');
            if (!stepsHost || !resultsHost || !nav || !backButton || !nextButton)
                return;
            if (finished) {
                stepsHost.hidden = true;
                nav.hidden = true;
                if (progress)
                    progress.parentElement.hidden = true;
                resultsHost.hidden = false;
                renderResults(resultsHost);
                return;
            }
            stepsHost.hidden = false;
            nav.hidden = false;
            resultsHost.hidden = true;
            if (progress)
                progress.parentElement.hidden = false;
            renderStep(stepsHost, error);
            if (progress)
                progress.textContent = FEA.I18n.t('an.progress', { c: step + 1, t: STEPS.length });
            if (bar)
                bar.style.width = Math.round(((step + 1) / STEPS.length) * 100) + '%';
            backButton.textContent = FEA.I18n.t('an.back');
            backButton.disabled = step === 0;
            nextButton.textContent = step === STEPS.length - 1 ? FEA.I18n.t('an.submit') : FEA.I18n.t('an.next');
        }
        function init() {
            root = document.querySelector('[data-analyzer]');
            if (!root)
                return;
            const backButton = root.querySelector('[data-an-back]');
            const nextButton = root.querySelector('[data-an-next]');
            restore();
            if (backButton) {
                backButton.addEventListener('click', function () {
                    if (step > 0)
                        step -= 1;
                    render();
                });
            }
            if (nextButton) {
                nextButton.addEventListener('click', function () {
                    if (STEPS[step].id === 'fields' && answers.fields.length === 0) {
                        render(FEA.I18n.t('an.err.field'));
                        return;
                    }
                    if (step === STEPS.length - 1) {
                        finished = true;
                        save();
                        render();
                        const results = root.querySelector('[data-an-results]');
                        if (results)
                            results.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        return;
                    }
                    step += 1;
                    render();
                });
            }
            render();
            FEA.I18n.onChange(function () {
                render();
            });
        }
        Analyzer.init = init;
    })(Analyzer = FEA.Analyzer || (FEA.Analyzer = {}));
})(FEA || (FEA = {}));
/**
 * 24/7 assistant widget.
 *
 * The production system routes to an LLM plus a human handover queue; this
 * prototype answers from the local knowledge base in data.ts. Keywords from all
 * four languages are checked on every message, so an Arabic speaker who types a
 * German term still gets the right answer.
 */
var FEA;
(function (FEA) {
    var Chat;
    (function (Chat) {
        let panel = null;
        let launcher = null;
        let log = null;
        let chipsHost = null;
        let input = null;
        let open = false;
        const history = [];
        /** Fold Arabic/Persian letter variants so "أفغانستان" matches "افغانستان". */
        function normalize(value) {
            return value
                .toLowerCase()
                .replace(/[أإآٱ]/g, 'ا')
                .replace(/ة/g, 'ه')
                .replace(/[ىي]/g, 'ی')
                .replace(/ك/g, 'ک')
                .replace(/[ً-ْٰ]/g, '')
                .replace(/\s+/g, ' ')
                .trim();
        }
        function findIntent(text) {
            const needle = normalize(text);
            let best = null;
            let bestHits = 0;
            FEA.Data.INTENTS.forEach(function (intent) {
                let hits = 0;
                FEA.LANGUAGES.forEach(function (lang) {
                    const words = intent.keywords[lang.code];
                    for (let i = 0; i < words.length; i++) {
                        if (needle.indexOf(normalize(words[i])) !== -1)
                            hits += 1;
                    }
                });
                if (hits > bestHits) {
                    bestHits = hits;
                    best = intent;
                }
            });
            return bestHits > 0 ? best : null;
        }
        function timestamp() {
            const now = new Date();
            return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
        }
        function renderMessages() {
            if (!log)
                return;
            const target = log;
            target.innerHTML = '';
            history.forEach(function (message) {
                const row = document.createElement('div');
                row.className = 'chat-msg chat-msg--' + message.author;
                const bubble = document.createElement('div');
                bubble.className = 'chat-msg__bubble';
                bubble.textContent = message.text;
                const meta = document.createElement('span');
                meta.className = 'chat-msg__meta';
                meta.textContent =
                    (message.author === 'user' ? FEA.I18n.t('chat.you') : FEA.I18n.t('chat.bot')) + ' · ' + message.time;
                row.appendChild(bubble);
                row.appendChild(meta);
                target.appendChild(row);
            });
            target.scrollTop = target.scrollHeight;
        }
        function renderChips(keys) {
            if (!chipsHost)
                return;
            chipsHost.innerHTML = '';
            keys.forEach(function (key) {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'chip';
                chip.textContent = FEA.I18n.t(key);
                chip.addEventListener('click', function () {
                    send(FEA.I18n.t(key), FEA.Data.CHIP_INTENTS[key]);
                });
                chipsHost.appendChild(chip);
            });
        }
        function showTyping() {
            if (!log)
                return null;
            const row = document.createElement('div');
            row.className = 'chat-msg chat-msg--bot chat-msg--typing';
            const bubble = document.createElement('div');
            bubble.className = 'chat-msg__bubble';
            bubble.innerHTML = '<span></span><span></span><span></span>';
            bubble.setAttribute('aria-label', FEA.I18n.t('chat.typing'));
            row.appendChild(bubble);
            log.appendChild(row);
            log.scrollTop = log.scrollHeight;
            return row;
        }
        function answer(text, forcedIntentId) {
            let intent = null;
            if (forcedIntentId) {
                for (let i = 0; i < FEA.Data.INTENTS.length; i++) {
                    if (FEA.Data.INTENTS[i].id === forcedIntentId)
                        intent = FEA.Data.INTENTS[i];
                }
            }
            if (!intent)
                intent = findIntent(text);
            const typing = showTyping();
            window.setTimeout(function () {
                if (typing && typing.parentElement)
                    typing.parentElement.removeChild(typing);
                history.push({
                    author: 'bot',
                    text: intent ? FEA.I18n.t(intent.answerKey) : FEA.I18n.t('chat.fallback'),
                    time: timestamp(),
                });
                renderMessages();
                renderChips(intent && intent.suggestionKeys ? intent.suggestionKeys : FEA.Data.DEFAULT_CHIPS);
            }, 420);
        }
        function send(text, forcedIntentId) {
            const value = text.trim();
            if (!value)
                return;
            history.push({ author: 'user', text: value, time: timestamp() });
            renderMessages();
            if (input)
                input.value = '';
            answer(value, forcedIntentId);
        }
        Chat.send = send;
        function toggle(next) {
            open = next === undefined ? !open : next;
            if (!panel || !launcher)
                return;
            panel.hidden = !open;
            panel.classList.toggle('is-open', open);
            launcher.setAttribute('aria-expanded', String(open));
            if (open && input)
                input.focus();
        }
        Chat.toggle = toggle;
        function build() {
            launcher = document.createElement('button');
            launcher.type = 'button';
            launcher.className = 'chat-launcher';
            launcher.setAttribute('aria-expanded', 'false');
            launcher.setAttribute('aria-controls', 'fea-chat-panel');
            launcher.innerHTML =
                '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                    '<path d="M12 3c5 0 9 3.4 9 7.6 0 4.2-4 7.6-9 7.6-.9 0-1.7-.1-2.5-.3L5 20.4l.9-3.2C4.1 15.8 3 13.3 3 10.6 3 6.4 7 3 12 3z" ' +
                    'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>' +
                    '<circle cx="8.5" cy="10.6" r="1.05" fill="currentColor"/>' +
                    '<circle cx="12" cy="10.6" r="1.05" fill="currentColor"/>' +
                    '<circle cx="15.5" cy="10.6" r="1.05" fill="currentColor"/></svg>' +
                    '<span class="chat-launcher__label" data-i18n="chat.title"></span>';
            launcher.addEventListener('click', function () {
                toggle();
            });
            panel = document.createElement('section');
            panel.className = 'chat-panel';
            panel.id = 'fea-chat-panel';
            panel.hidden = true;
            panel.setAttribute('aria-label', FEA.I18n.t('chat.title'));
            panel.innerHTML =
                '<header class="chat-panel__head">' +
                    '<div><p class="chat-panel__title" data-i18n="chat.title"></p>' +
                    '<p class="chat-panel__subtitle" data-i18n="chat.subtitle"></p></div>' +
                    '<button type="button" class="chat-panel__close" data-chat-close data-i18n-aria="common.close">&times;</button>' +
                    '</header>' +
                    '<div class="chat-panel__log" data-chat-log role="log" aria-live="polite"></div>' +
                    '<div class="chat-panel__chips" data-chat-chips></div>' +
                    '<form class="chat-panel__form" data-chat-form>' +
                    '<input type="text" class="chat-panel__input" data-chat-input autocomplete="off" ' +
                    'data-i18n-placeholder="chat.placeholder" data-i18n-aria="chat.placeholder">' +
                    '<button type="submit" class="btn btn--primary btn--sm" data-i18n="chat.send"></button>' +
                    '</form>' +
                    '<p class="chat-panel__note" data-i18n="chat.disclaimer"></p>';
            document.body.appendChild(launcher);
            document.body.appendChild(panel);
            log = panel.querySelector('[data-chat-log]');
            chipsHost = panel.querySelector('[data-chat-chips]');
            input = panel.querySelector('[data-chat-input]');
            const form = panel.querySelector('[data-chat-form]');
            if (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    if (input)
                        send(input.value);
                });
            }
            const close = panel.querySelector('[data-chat-close]');
            if (close) {
                close.addEventListener('click', function () {
                    toggle(false);
                });
            }
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape' && open)
                    toggle(false);
            });
            // Any element on a page can open the assistant, e.g. the home page CTA.
            document.querySelectorAll('[data-open-chat]').forEach(function (trigger) {
                trigger.addEventListener('click', function (event) {
                    event.preventDefault();
                    toggle(true);
                });
            });
        }
        function greet() {
            history.length = 0;
            history.push({ author: 'bot', text: FEA.I18n.t('chat.greeting'), time: timestamp() });
            renderMessages();
            renderChips(FEA.Data.DEFAULT_CHIPS);
        }
        function init() {
            build();
            FEA.I18n.apply(panel);
            FEA.I18n.apply(launcher);
            greet();
            FEA.I18n.onChange(function () {
                if (panel) {
                    FEA.I18n.apply(panel);
                    panel.setAttribute('aria-label', FEA.I18n.t('chat.title'));
                }
                if (launcher)
                    FEA.I18n.apply(launcher);
                // Restart the conversation so the whole transcript is in one language.
                greet();
            });
        }
        Chat.init = init;
    })(Chat = FEA.Chat || (FEA.Chat = {}));
})(FEA || (FEA = {}));
/**
 * Contact form. There is no backend in this phase, so a valid submission opens
 * the visitor's mail client with a prepared message instead of POSTing anywhere.
 */
var FEA;
(function (FEA) {
    var Contact;
    (function (Contact) {
        const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        function setError(field, messageKey) {
            const wrapper = field.closest('.field');
            const hint = wrapper ? wrapper.querySelector('.field__error') : null;
            if (messageKey) {
                field.setAttribute('aria-invalid', 'true');
                if (hint) {
                    hint.textContent = FEA.I18n.t(messageKey);
                    hint.hidden = false;
                }
                return false;
            }
            field.removeAttribute('aria-invalid');
            if (hint) {
                hint.textContent = '';
                hint.hidden = true;
            }
            return true;
        }
        function buildMailto(values) {
            const subject = '[FEA] ' + values.topic + ' — ' + values.name;
            const body = [
                values.message,
                '',
                '---',
                'Name: ' + values.name,
                'E-Mail: ' + values.email,
                'Antwortsprache / answer language: ' + values.lang,
                'Thema / topic: ' + values.topic,
            ].join('\n');
            return ('mailto:' +
                FEA.Data.CONTACT_EMAIL +
                '?subject=' +
                encodeURIComponent(subject) +
                '&body=' +
                encodeURIComponent(body));
        }
        function init() {
            const form = document.querySelector('[data-contact-form]');
            if (!form)
                return;
            const name = form.querySelector('#ct-name');
            const email = form.querySelector('#ct-email');
            const message = form.querySelector('#ct-message');
            const consent = form.querySelector('#ct-consent');
            const langSelect = form.querySelector('#ct-lang');
            const topicSelect = form.querySelector('#ct-topic');
            const success = document.querySelector('[data-contact-success]');
            if (!name || !email || !message || !consent || !langSelect || !topicSelect)
                return;
            function fillLanguages() {
                const previous = langSelect.value || FEA.I18n.getLang();
                langSelect.innerHTML = '';
                FEA.LANGUAGES.forEach(function (lang) {
                    const option = document.createElement('option');
                    option.value = lang.code;
                    option.textContent = lang.native;
                    langSelect.appendChild(option);
                });
                langSelect.value = previous;
            }
            function fillTopics() {
                const previous = topicSelect.value || 'scholarship';
                topicSelect.innerHTML = '';
                ['scholarship', 'university', 'ausbildung', 'course', 'volunteer', 'other'].forEach(function (topic) {
                    const option = document.createElement('option');
                    option.value = topic;
                    option.textContent = FEA.I18n.t('ct.topic.' + topic);
                    topicSelect.appendChild(option);
                });
                topicSelect.value = previous;
            }
            fillLanguages();
            fillTopics();
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                let valid = true;
                valid = setError(name, name.value.trim().length < 2 ? 'ct.err.name' : null) && valid;
                valid = setError(email, EMAIL_PATTERN.test(email.value.trim()) ? null : 'ct.err.email') && valid;
                valid = setError(message, message.value.trim().length < 20 ? 'ct.err.message' : null) && valid;
                valid = setError(consent, consent.checked ? null : 'ct.err.consent') && valid;
                if (!valid) {
                    const firstInvalid = form.querySelector('[aria-invalid="true"]');
                    if (firstInvalid)
                        firstInvalid.focus();
                    if (success)
                        success.hidden = true;
                    return;
                }
                const href = buildMailto({
                    name: name.value.trim(),
                    email: email.value.trim(),
                    message: message.value.trim(),
                    lang: FEA.I18n.meta(langSelect.value).native,
                    topic: FEA.I18n.t('ct.topic.' + topicSelect.value),
                });
                window.location.href = href;
                if (success) {
                    success.hidden = false;
                    success.textContent = FEA.I18n.t('ct.ok');
                    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
            FEA.I18n.onChange(function () {
                fillLanguages();
                fillTopics();
                if (success && !success.hidden)
                    success.textContent = FEA.I18n.t('ct.ok');
            });
        }
        Contact.init = init;
    })(Contact = FEA.Contact || (FEA.Contact = {}));
})(FEA || (FEA = {}));
/**
 * Bootstrap. Every page loads the same compiled bundle; each module checks for
 * the markup it needs and stays inert if the page does not contain it.
 */
var FEA;
(function (FEA) {
    function markActiveNav() {
        let page = window.location.pathname.split('/').pop() || 'index.html';
        if (page === '')
            page = 'index.html';
        document.querySelectorAll('[data-nav-link]').forEach(function (link) {
            const target = link.getAttribute('href') || '';
            const isActive = target === page || (page === 'index.html' && target === 'index.html');
            link.classList.toggle('is-active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            }
            else {
                link.removeAttribute('aria-current');
            }
        });
    }
    /** Renders the social channel links shared by the footer and the community page. */
    function renderChannels() {
        const icons = {
            instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/>' +
                '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/>' +
                '<circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>',
            facebook: '<path d="M14.5 8.4h2.2V5.6h-2.4c-2.2 0-3.6 1.4-3.6 3.6v1.6H8.4v2.9h2.3V21h3v-7.3h2.3l.4-2.9h-2.7V9.6c0-.8.3-1.2.8-1.2z" fill="currentColor"/>',
            tiktok: '<path d="M14.2 3h2.6c.2 1.9 1.4 3.3 3.2 3.6v2.7c-1.2 0-2.3-.3-3.2-.9v5.8c0 3.1-2.3 5.4-5.2 5.4S6.4 17.3 6.4 14.2s2.3-5.4 5.2-5.4c.3 0 .6 0 .9.1v2.8a2.6 2.6 0 1 0 1.7 2.5z" fill="currentColor"/>',
            telegram: '<path d="M20.7 4.5 3.9 11c-1 .4-1 1.8 0 2.1l4.2 1.3 1.6 4.8c.3.9 1.4 1.1 2 .4l2.2-2.4 4.1 3c.7.5 1.7.1 1.9-.8l2.6-13c.2-1-.8-1.8-1.8-1.4z" fill="currentColor"/>',
            whatsapp: '<path d="M12 3.3a8.6 8.6 0 0 0-7.4 13l-1.2 4.4 4.5-1.2A8.6 8.6 0 1 0 12 3.3zm4.7 12c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6a9.4 9.4 0 0 1-3.6-3.6c-.4-.6-.7-1.3-.7-2 0-.7.3-1.3.7-1.7.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.3.4c-.1.1-.2.3-.1.5.3.6 1.5 2.1 3 2.7.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.3.1.4.3.4.4 0 .1 0 .4-.1.6z" fill="currentColor"/>',
        };
        document.querySelectorAll('[data-channels]').forEach(function (host) {
            const style = host.getAttribute('data-channels') || 'inline';
            host.innerHTML = '';
            FEA.Data.CHANNELS.forEach(function (channel) {
                const link = document.createElement('a');
                link.className = style === 'cards' ? 'channel-card' : 'channel-link';
                link.href = channel.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.setAttribute('aria-label', channel.label);
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('aria-hidden', 'true');
                svg.setAttribute('focusable', 'false');
                svg.innerHTML = icons[channel.icon] || '';
                link.appendChild(svg);
                const label = document.createElement('span');
                label.textContent = channel.label;
                link.appendChild(label);
                host.appendChild(link);
            });
        });
    }
    /** Fills in the mail/dev links that are shared across pages. */
    function renderStaticLinks() {
        document.querySelectorAll('[data-mailto]').forEach(function (link) {
            link.href = 'mailto:' + FEA.Data.CONTACT_EMAIL;
            if (link.hasAttribute('data-mailto-text'))
                link.textContent = FEA.Data.CONTACT_EMAIL;
        });
        document.querySelectorAll('[data-dev-link]').forEach(function (link) {
            link.href = FEA.Data.DEV_SITE;
        });
    }
    function start() {
        FEA.I18n.init();
        markActiveNav();
        renderChannels();
        renderStaticLinks();
        FEA.Opps.init();
        FEA.Analyzer.init();
        FEA.Contact.init();
        FEA.Chat.init();
        document.body.classList.add('is-ready');
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    }
    else {
        start();
    }
})(FEA || (FEA = {}));
//# sourceMappingURL=fea.js.map