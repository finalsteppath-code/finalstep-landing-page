const siteConfig = window.SITE_CONFIG || {};
const REGISTRATION_URL = siteConfig.REGISTRATION_URL || 'https://forms.gle/Qhaknq3dhDyMXV2t5';

const translations = {
  ar: {
    dir: 'rtl',
    nav: ['الرئيسية', 'الخدمات', 'التقنيات', 'كيفاش نخدمو', 'من نحن', 'اتصل بنا'],
    headerCta: 'احكيلنا على مشروعك',
    heroBadge: 'PFE PACK · MADE FOR YOUR NEXT STEP',
    heroTitle: 'عندك <bdi>PFE</bdi> ومش عارف <span class="text-accent">منين تبدأ؟</span>',
    heroLead: 'من الفكرة للـ <bdi>soutenance</bdi>، <bdi>Final Step</bdi> معاك خطوة بخطوة.',
    heroDescription: 'نعاونـوك في <bdi>conception</bdi>، <bdi>développement</bdi>، <bdi>documentation</bdi>، والتحضير للمناقشة.',
    heroPrimary: 'احكيلنا على مشروعك',
    heroSecondary: 'اكتشف الخدمات',
    heroMicrocopy: 'يبدا جانفي 2027 · أونلاين · قفصة، تونس',
    faqEyebrow: '07 / الأسئلة المتكررة',
    faqTitle: 'مازال عندك سؤال؟',
    faqIntro: 'لقّى الإجابة على أكثر الأسئلة اللي تتعاود قبل ما تبدأ خطوتك الأولى.',
    contactEyebrow: '08 / YOUR FINAL STEP STARTS HERE',
    contactTitle: 'الفكرة عندك. الخطوة الجاية معانا.',
    contactCta: 'احجز مكانك',
    faq: [
      ['من يقدر يستفيد من PFE Pack؟', 'كل طالب في مرحلة PFE أو اللي يبدأ مشروعه، وخصوصا اللي عنده فكرة وعايز دعم من الفكرة إلى soutenance.'],
      ['إذا عندي فكرة فقط، نقدر نتواصل؟', 'أكيد. حتى فكرة بسيطة يمكن يبدأ منها النقاش وتحديد الخطوة المناسبة قبل التطوير.'],
      ['شنو التقنيات اللي نستخدمها؟', 'حسب المشروع، ممكن نستخدم React.js، Node.js/Express.js، PostgreSQL، React Native، وAI عند الملاءمة.'],
      ['هل دعم career support مجاني؟', 'نعم، الدعم المهني مجاني، ويشمل LinkedIn، CV، portfolio، والمساعدة في البحث عن فرص العمل.'],
      ['هل توجد attestation de stage؟', 'نعم، Final Step توفر attestation de stage، حسب ترتيبات التربص المعمول بيها.'],
      ['كيف نبدأ؟', 'تقدر تملي نموذج ما قبل التسجيل أو تتواصل معنا مباشرة، ومن ثم نحدد الخطوات المناسبة.']
    ]
  },
  fr: {
    dir: 'ltr',
    nav: ['Accueil', 'Services', 'Technologies', 'Fonctionnement', 'À propos', 'Contact'],
    headerCta: 'Parlez-nous de votre projet',
    heroBadge: 'PFE PACK · PRÉPAREZ VOTRE PROCHAINE ÉTAPE',
    heroTitle: 'Vous avez un PFE, mais vous ne savez pas par où commencer ?',
    heroLead: 'De l’idée à la soutenance, Final Step vous accompagne à chaque étape.',
    heroDescription: 'Nous vous aidons dans la conception, le développement, la documentation et la préparation de la soutenance.',
    heroPrimary: 'Parlez-nous de votre projet',
    heroSecondary: 'Découvrir les services',
    heroMicrocopy: 'Lancement : janvier 2027 · En ligne · Gafsa, Tunisie',
    faqEyebrow: '07 / QUESTIONS FRÉQUENTES',
    faqTitle: 'Vous avez encore une question ?',
    faqIntro: 'Retrouvez les réponses aux questions les plus fréquentes avant de commencer.',
    contactEyebrow: '08 / VOTRE PROCHAINE ÉTAPE COMMENCE ICI',
    contactTitle: 'Vous avez l’idée. La prochaine étape, c’est avec nous.',
    contactCta: 'Réserver ma place',
    faq: [
      ['Qui peut bénéficier du PFE Pack ?', 'Tout étudiant en phase de PFE ou au début de son projet, qui cherche un accompagnement de l’idée à la soutenance.'],
      ['Puis-je vous contacter si je n’ai qu’une idée ?', 'Oui. Même une idée simple peut servir de point de départ pour définir la meilleure prochaine étape.'],
      ['Quelles technologies utilisez-vous ?', 'Selon le projet : React.js, Node.js/Express.js, PostgreSQL, React Native et AI lorsque cela est pertinent.'],
      ['Le career support est-il gratuit ?', 'Oui, il comprend LinkedIn, CV, portfolio et l’aide à la recherche d’opportunités.'],
      ['Proposez-vous une attestation de stage ?', 'Oui, selon les arrangements de stage applicables.'],
      ['Comment commencer ?', 'Remplissez le formulaire de préinscription ou contactez-nous directement pour définir les prochaines étapes.']
    ]
  },
  en: {
    dir: 'ltr',
    nav: ['Home', 'Services', 'Technologies', 'How it works', 'About us', 'Contact'],
    headerCta: 'Tell us about your project',
    heroBadge: 'PFE PACK · MADE FOR YOUR NEXT STEP',
    heroTitle: 'You have a PFE, but you do not know where to start?',
    heroLead: 'From the idea to the defense, Final Step supports you at every step.',
    heroDescription: 'We help you with project design, development, documentation and defense preparation.',
    heroPrimary: 'Tell us about your project',
    heroSecondary: 'Discover our services',
    heroMicrocopy: 'Launch: January 2027 · Online · Gafsa, Tunisia',
    faqEyebrow: '07 / FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Do you still have a question?',
    faqIntro: 'Find answers to the most common questions before taking your first step.',
    contactEyebrow: '08 / YOUR NEXT STEP STARTS HERE',
    contactTitle: 'You have the idea. The next step starts with us.',
    contactCta: 'Reserve my place',
    faq: [
      ['Who can benefit from the PFE Pack?', 'Any student working on a PFE or starting a project who needs support from the idea to the defense.'],
      ['Can I contact you if I only have an idea?', 'Yes. Even a simple idea can be the starting point for defining the right next step.'],
      ['Which technologies do you use?', 'Depending on the project: React.js, Node.js/Express.js, PostgreSQL, React Native and AI when relevant.'],
      ['Is career support free?', 'Yes. It includes LinkedIn, CV, portfolio and help with finding opportunities.'],
      ['Do you provide an internship certificate?', 'Yes, subject to the applicable internship arrangements.'],
      ['How do I start?', 'Fill in the pre-registration form or contact us directly to define the next steps.']
    ]
  }
};

const sectionTranslations = {
  ar: {
    trust: ['من الفكرة للمناقشة', 'مشروعك، خدمتك، قرارك', 'نفهم كل خطوة'],
    servicesEyebrow: '01 / THE PFE PACK',
    servicesTitle: 'كلّ اللي يلزمك، في طريق واحد.',
    services: [
      ['تحليل وتصميم المشروع', 'تحليل فكرة PFE، المتطلبات، معمارية التطبيق، قاعدة البيانات، UX/UI، wireframes وmockups.', ['تحليل الفكرة', 'تصميم التطبيق', 'خطة التنفيذ']],
      ['تطوير الويب والموبايل', 'React.js، Node.js/Express.js، PostgreSQL وReact Native عند الحاجة، مع تكامل AI عند الملاءمة.', ['React.js / Node.js', 'API وDB', 'مرافقة تقنية']],
      ['تنفيذ ودعم تقني', 'إعداد المشروع، قوالب البداية، دعم البرمجة، اختبار وتصحيح الأخطاء أثناء التطوير.', ['الإعداد التقني', 'تصحيح الأخطاء', 'دعم متواصل']],
      ['التقرير والتوثيق', 'هيكلة التقرير، كتابة الوثائق، مخططات فنية، مراجعة وإعادة صياغة ما يلزم.', ['هيكلة التقرير', 'المخططات', 'مراجعة الكتابة']],
      ['العرض النهائي والمناقشة', 'شرائح العرض، تجهيز العرض التوضيحي، تمرين المناقشة والتأهيل للمحاكمة النهائية.', ['تجهيز الشرائح', 'تجهيز العرض التوضيحي', 'تمرين المناقشة']],
      ['مرافقة مهنية مجانية', 'دورات مجانية حول LinkedIn، CV، portfolio، والبحث عن شغل عبر Indeed.', ['LinkedIn', 'CV وportfolio', 'البحث عن فرص']]
    ],
    scope: 'كل مشروع يلقى périmètre وtechnologies خاصين به، ويتم تحديدهم قبل البدء.',
    techEyebrow: '02 / TECH STACK',
    techTitle: 'التقنيات اللي باش تتقنها',
    techSubtitle: 'من الـ frontend للـ backend وقاعدة البيانات، نخدمو بتقنيات حديثة ومطلوبة في السوق.',
    stepsEyebrow: '03 / HOW IT WORKS',
    stepsTitle: 'أربع خطوات. وإنت ديما في الصورة.',
    steps: [['مناقشة الفكرة', 'نناقش فكرة PFE، الوضع الحالي والاحتياجات، ثم نحدد نقطة البداية المناسبة.'], ['تحديد المتطلبات', 'نحدّد المتطلبات، نوع المشروع، ومخطط العمل المناسب قبل التنفيذ.'], ['التطوير والدعم', 'نطور المشروع مع دعم تقني، اختبار، وتصحيح الأخطاء أثناء كل مرحلة.'], ['التقرير والمناقشة', 'نجهّز التقرير، العرض التقديمي، التجربة العملية، ومراجعة التحضير للمناقشة.']],
    aboutEyebrow: '06 / من نحن',
    aboutTitle: 'شريكك لبناء مسارك المهني',
    aboutIntro: 'نرافق الطلبة والمهنيين الشباب في مسارهم، من البحث عن تدريب أو مشروع إلى تطوير مهاراتهم عبر برامج تدريبية تلبي احتياجات السوق.',
    aboutHighlights: [['مهمتنا', 'تسهيل الوصول إلى الفرص المهنية والمهارات المطلوبة من خلال ربط الطلبة والمرشحين بالشركات ومؤسسات التدريب.'], ['رؤيتنا', 'بناء منظومة مهنية رائدة في تونس، تتيح للمواهب تطوير مهاراتها وإيجاد فرصها وبناء روابط مستدامة مع الشركات.']],
    aboutValues: [['مدربون خبراء', 'محترفون معتمدون بسنوات من الخبرة الميدانية في الشركات الكبرى.'], ['مرافقة شخصية', 'متابعة فردية تتكيف مع أهداف واحتياجات كل طالب من اليوم الأول حتى الاندماج.'], ['شهادات معترف بها', 'دبلومات وشهادات يقدّرها المختصون والشركات الكبرى في القطاع.'], ['مشاريع حقيقية', 'تعلّم قائم على مشاريع واقعية من عالم الأعمال لتوظيف فوري.']],
    contactChecks: ['من الفكرة إلى المراجعة', 'دعم فني وكتابي واضح', 'تحضير للنقاش النهائي'],
    contactText: 'لو عندك فكرة PFE أو مشروع في الطريق، نسمعها ونعطيك الاتجاه المناسب.',
    location: 'قفصة، تونس',
    footerDescription: 'نساعد الطلبة في تحويل فكرة PFE إلى مشروع واضح، قابل للتنفيذ، وقابل للتقديم بثقة.',
    footerSections: 'الأقسام',
    footerLinks: ['الرئيسية', 'الخدمات', 'كيفاش نخدمو', 'الأسئلة المتكررة'],
    projects: [['تكوين Arduino وIoT', 'ورشة تطبيقية حول البرمجة المضمنة وإنترنت الأشياء.'], ['ورشة التسويق الرقمي', 'جلسة تطبيقية حول أدوات وأساليب التواصل الرقمي.'], ['حصة تكوين جماعية', 'تعلّم تشاركي حول التطوير وأفضل الممارسات.'], ['ورشة تدريب تقني', 'تكوين موجّه للمشاريع ومرافقة تقنية.']],
    testimonials: [['أمل بن عمار', 'المرافقة خلاتني نفهم مشروعي خير ونتقدم بمنهج واضح.'], ['محمد العياري', 'من تحليل الفكرة للعرض النهائي، كل مرحلة كانت واضحة وبسيطة.'], ['ريم الجبالي', 'عجبتني برشا التنظيم والمتابعة، وولّى عندي هيكل واضح للتقرير.'], ['ياسين بن سالم', 'الدعم التقني والتفسيرات البسيطة عطاوني ثقة أكبر قبل المناقشة.']]
  },
  fr: {
    trust: ['De l’idée à la soutenance', 'Votre projet, votre parcours, votre décision', 'Nous clarifions chaque étape'],
    servicesEyebrow: '01 / LE PACK PFE', servicesTitle: 'Tout ce qu’il vous faut, sur un seul parcours.',
    services: [['Analyse et conception du projet', 'Analyse de l’idée du PFE, des besoins, de l’architecture, de la base de données, de l’UX/UI, des wireframes et des mockups.', ['Analyse de l’idée', 'Conception de l’application', 'Plan d’exécution']], ['Développement web et mobile', 'React.js, Node.js/Express.js, PostgreSQL et React Native selon les besoins, avec intégration de l’AI lorsque cela est pertinent.', ['React.js / Node.js', 'API et DB', 'Accompagnement technique']], ['Mise en œuvre et support technique', 'Mise en place du projet, modèles de démarrage, accompagnement en programmation, tests et correction des erreurs.', ['Configuration technique', 'Débogage', 'Support continu']], ['Rapport et documentation', 'Structuration du rapport, rédaction de la documentation, schémas techniques, révision et reformulation.', ['Structure du rapport', 'Diagrammes', 'Révision rédactionnelle']], ['Présentation finale et soutenance', 'Diapositives de présentation, préparation de la démonstration, entraînement à la soutenance et préparation finale.', ['Préparation des diapositives', 'Préparation de la démonstration', 'Entraînement à la soutenance']], ['Accompagnement professionnel gratuit', 'Sessions gratuites autour de LinkedIn, du CV, du portfolio et de la recherche d’emploi via Indeed.', ['LinkedIn', 'CV et portfolio', 'Recherche d’opportunités']]],
    scope: 'Chaque projet bénéficie d’un périmètre et de technologies adaptés, définis avant le démarrage.', techEyebrow: '02 / STACK TECHNIQUE', techTitle: 'Les technologies que vous allez maîtriser', techSubtitle: 'Du frontend au backend et à la base de données, nous travaillons avec des technologies modernes et recherchées.',
    stepsEyebrow: '03 / COMMENT ÇA MARCHE', stepsTitle: 'Quatre étapes. Vous gardez toujours le cap.', steps: [['Échange autour de l’idée', 'Nous discutons de votre PFE, de votre situation et de vos besoins pour définir le bon point de départ.'], ['Définition des besoins', 'Nous définissons les besoins, le type de projet et le plan de travail avant l’exécution.'], ['Développement et accompagnement', 'Nous développons le projet avec un accompagnement technique, des tests et des corrections à chaque étape.'], ['Rapport et soutenance', 'Nous préparons le rapport, la présentation, la démonstration et la préparation à la soutenance.']],
    aboutEyebrow: '06 / À PROPOS', aboutTitle: 'Votre partenaire pour construire votre parcours professionnel', aboutIntro: 'Nous accompagnons les étudiants et les jeunes professionnels, de la recherche d’un stage ou d’un projet au développement de compétences adaptées au marché.',
    aboutHighlights: [['Notre mission', 'Faciliter l’accès aux opportunités et aux compétences en reliant étudiants, candidats, entreprises et organismes de formation.'], ['Notre vision', 'Construire un écosystème professionnel de référence en Tunisie, où les talents développent leurs compétences et leurs opportunités.']], aboutValues: [['Formateurs experts', 'Des professionnels expérimentés, issus du terrain et des grandes entreprises.'], ['Accompagnement personnalisé', 'Un suivi adapté aux objectifs et aux besoins de chaque étudiant.'], ['Certifications reconnues', 'Des diplômes et certifications valorisés par les spécialistes et les entreprises.'], ['Projets réels', 'Un apprentissage basé sur des projets concrets pour favoriser l’employabilité.']],
    contactChecks: ['De l’idée à la révision', 'Un accompagnement technique et rédactionnel clair', 'Préparation à la soutenance finale'], contactText: 'Vous avez une idée de PFE ou un projet en cours ? Parlons-en pour vous orienter.', location: 'Gafsa, Tunisie', footerDescription: 'Nous aidons les étudiants à transformer leur idée de PFE en un projet clair, réalisable et présentable avec confiance.', footerSections: 'Sections', footerLinks: ['Accueil', 'Services', 'Fonctionnement', 'Questions fréquentes'],
    projects: [['Formation Arduino & IoT', 'Atelier pratique autour de la programmation embarquée et de l’Internet des objets.'], ['Workshop Digital Marketing', 'Mise en pratique des outils et méthodes de communication digitale.'], ['Séance de classe & formation', 'Apprentissage collaboratif autour du développement et des bonnes pratiques.'], ['Atelier de coaching technique', 'Formation orientée projet et accompagnement technique.']], testimonials: [['Amel Ben Ammar', 'L’accompagnement m’a aidée à avancer avec une méthode claire et plus de confiance.'], ['Mohamed Ayari', 'Chaque étape, de l’analyse à la présentation, était expliquée simplement.'], ['Rym Jebali', 'J’ai apprécié l’organisation et le suivi, avec une structure claire pour mon rapport.'], ['Yassine Ben Salem', 'Le support technique m’a aidé à résoudre les problèmes avec plus de confiance.']]
  },
  en: {
    trust: ['From idea to defense', 'Your project, your path, your choice', 'We clarify every step'], servicesEyebrow: '01 / THE PFE PACK', servicesTitle: 'Everything you need, in one clear path.',
    services: [['Project analysis and design', 'Analysis of the PFE idea, requirements, application architecture, database, UX/UI, wireframes and mockups.', ['Idea analysis', 'Application design', 'Execution plan']], ['Web and mobile development', 'React.js, Node.js/Express.js, PostgreSQL and React Native when needed, with AI integration where relevant.', ['React.js / Node.js', 'API and DB', 'Technical support']], ['Implementation and technical support', 'Project setup, starter templates, programming support, testing and debugging during development.', ['Technical setup', 'Debugging', 'Continuous support']], ['Report and documentation', 'Report structure, documentation writing, technical diagrams, review and rewriting.', ['Report structure', 'Diagrams', 'Editorial review']], ['Final presentation and defense', 'Presentation slides, demo preparation, defense practice and final preparation.', ['Slide preparation', 'Demo preparation', 'Defense practice']], ['Free professional support', 'Free sessions covering LinkedIn, CV, portfolio and job search through Indeed.', ['LinkedIn', 'CV and portfolio', 'Opportunity search']]],
    scope: 'Each project gets a tailored scope and technology set, defined before work begins.', techEyebrow: '02 / TECH STACK', techTitle: 'The technologies you will master', techSubtitle: 'From frontend to backend and databases, we use modern technologies valued by the market.',
    stepsEyebrow: '03 / HOW IT WORKS', stepsTitle: 'Four steps. You always know what comes next.', steps: [['Discuss the idea', 'We discuss your PFE, current situation and needs to define the right starting point.'], ['Define requirements', 'We define the requirements, project type and work plan before implementation.'], ['Develop and support', 'We build the project with technical support, testing and fixes at every stage.'], ['Report and defense', 'We prepare the report, presentation, demo and defense practice.']],
    aboutEyebrow: '06 / ABOUT US', aboutTitle: 'Your partner for building your professional path', aboutIntro: 'We support students and young professionals from finding a project or internship to building skills that meet market needs.', aboutHighlights: [['Our mission', 'We connect students and candidates with companies and training organizations to make opportunities and skills more accessible.'], ['Our vision', 'To build a leading professional ecosystem in Tunisia where talent develops skills, opportunities and lasting connections.']], aboutValues: [['Expert trainers', 'Experienced professionals with strong field knowledge from leading companies.'], ['Personal support', 'Individual follow-up adapted to every student’s goals and needs.'], ['Recognized certifications', 'Diplomas and certificates valued by specialists and leading companies.'], ['Real-world projects', 'Project-based learning built around practical business cases and employability.']],
    contactChecks: ['From idea to review', 'Clear technical and writing support', 'Final defense preparation'], contactText: 'Have a PFE idea or a project in progress? Tell us about it and we will guide you.', location: 'Gafsa, Tunisia', footerDescription: 'We help students turn a PFE idea into a clear, achievable project they can present with confidence.', footerSections: 'Sections', footerLinks: ['Home', 'Services', 'How it works', 'Frequently asked questions'],
    projects: [['Arduino & IoT training', 'A practical workshop on embedded programming and the Internet of Things.'], ['Digital Marketing workshop', 'A hands-on session on digital communication tools and methods.'], ['Class and training session', 'Collaborative learning focused on development and good practices.'], ['Technical coaching workshop', 'Project-focused training and technical support.']], testimonials: [['Amel Ben Ammar', 'The support helped me move forward with a clear method and more confidence.'], ['Mohamed Ayari', 'Every step, from analysis to presentation, was explained simply.'], ['Rym Jebali', 'I appreciated the organization and follow-up, especially for structuring my report.'], ['Yassine Ben Salem', 'The technical support helped me solve problems with greater confidence.']]
  }
};

const sectionHeadings = {
  ar: { projectsEyebrow: '04 / OUR WORK', projectsTitle: 'تجارب وفعاليات من مسارنا.', testimonialsEyebrow: '05 / STUDENT FEEDBACK', testimonialsTitle: 'شنوّة قالو الطلبة علينا؟', testimonialsSubtitle: 'تجارب طلبة تونسيين لقاو التوجيه اللي يلزمهم في مسار PFE.', footerSocial: 'التواصل الاجتماعي', feedback: 'رأي', brandSubtitle: 'آخر خطوة', navLabel: 'القائمة الرئيسية', languageLabel: 'اختيار اللغة', homeLabel: 'العودة إلى الصفحة الرئيسية', closeLabel: 'إغلاق' },
  fr: { projectsEyebrow: '04 / NOS RÉALISATIONS', projectsTitle: 'Des expériences et des ateliers sur notre parcours.', testimonialsEyebrow: '05 / AVIS DES ÉTUDIANTS', testimonialsTitle: 'Ce que les étudiants pensent de nous', testimonialsSubtitle: 'Des expériences d’étudiants tunisiens accompagnés dans leur parcours PFE.', footerSocial: 'Réseaux sociaux', feedback: 'AVIS', brandSubtitle: 'Dernière étape', navLabel: 'Navigation principale', languageLabel: 'Choisir la langue', homeLabel: 'Retour à la page d’accueil', closeLabel: 'Fermer' },
  en: { projectsEyebrow: '04 / OUR WORK', projectsTitle: 'Experiences and workshops from our journey.', testimonialsEyebrow: '05 / STUDENT FEEDBACK', testimonialsTitle: 'What students say about us', testimonialsSubtitle: 'Stories from Tunisian students who found the guidance they needed for their PFE.', footerSocial: 'Social media', feedback: 'FEEDBACK', brandSubtitle: 'The final step', navLabel: 'Main navigation', languageLabel: 'Choose language', homeLabel: 'Back to the home page', closeLabel: 'Close' }
};

function applyLanguage(language) {
  const copy = translations[language] || translations.fr;
  const section = sectionTranslations[language] || sectionTranslations.fr;
  const headings = sectionHeadings[language] || sectionHeadings.fr;
  const navLinks = document.querySelectorAll('#site-nav a');
  navLinks.forEach((link, index) => {
    link.textContent = copy.nav[index];
  });

  document.documentElement.lang = language;
  document.documentElement.dir = copy.dir;
  document.body.classList.toggle('english-language', language === 'en');
  const nav = document.querySelector('#site-nav');
  if (nav) nav.setAttribute('aria-label', headings.navLabel);
  const languageSwitcher = document.querySelector('.language-switcher');
  if (languageSwitcher) languageSwitcher.setAttribute('aria-label', headings.languageLabel);
  document.querySelectorAll('.brand-subtitle').forEach((element) => {
    element.textContent = headings.brandSubtitle;
  });
  const brand = document.querySelector('.brand[aria-label]');
  if (brand) brand.setAttribute('aria-label', headings.homeLabel);
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });

  const setHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  };
  const setAll = (selector, values) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) element.innerHTML = values[index];
    });
  };

  setHtml('.header-cta', copy.headerCta);
  setHtml('.hero-badge bdi', copy.heroBadge);
  setHtml('.hero-copy h1', copy.heroTitle);
  setHtml('.hero-copy .lead', copy.heroLead);
  setHtml('.hero-copy .description', copy.heroDescription);
  setHtml('.hero-primary', copy.heroPrimary);
  setHtml('.hero-actions .btn-secondary', copy.heroSecondary);
  setHtml('.hero-microcopy', copy.heroMicrocopy);
  setHtml('#faq .eyebrow', copy.faqEyebrow);
  setHtml('#faq h2', copy.faqTitle);
  setHtml('.faq-intro', copy.faqIntro);
  setHtml('#contact .eyebrow', copy.contactEyebrow);
  setHtml('#contact h2', copy.contactTitle);
  setHtml('.contact-card h3', copy.contactCta);
  setHtml('.contact-btn', copy.contactCta);
  setAll('.trust-item-copy', section.trust);
  setHtml('#services .eyebrow', section.servicesEyebrow);
  setHtml('#services h2', section.servicesTitle);
  document.querySelectorAll('.service-card').forEach((card, index) => {
    const item = section.services[index];
    if (!item) return;
    card.querySelector('h3').textContent = item[0];
    card.querySelector('p').innerHTML = item[1];
    card.querySelector('.tag')?.replaceChildren(document.createTextNode(language === 'ar' ? 'BONUS مجاني' : language === 'en' ? 'FREE BONUS' : 'BONUS GRATUIT'));
    card.querySelectorAll('li').forEach((li, itemIndex) => { li.textContent = item[2][itemIndex] || ''; });
  });
  setHtml('.scope-note', section.scope);
  setHtml('#tech-stack .eyebrow', section.techEyebrow);
  setHtml('#tech-stack h2', section.techTitle);
  setHtml('.tech-subtitle', section.techSubtitle);
  setHtml('#how-it-works .eyebrow', section.stepsEyebrow);
  setHtml('#how-it-works h2', section.stepsTitle);
  setHtml('#projects .eyebrow', headings.projectsEyebrow);
  setHtml('#projects h2', headings.projectsTitle);
  setHtml('#testimonials .eyebrow', headings.testimonialsEyebrow);
  setHtml('#testimonials h2', headings.testimonialsTitle);
  setHtml('.testimonials-subtitle', headings.testimonialsSubtitle);
  document.querySelectorAll('.step-card').forEach((card, index) => {
    const item = section.steps[index];
    if (!item) return;
    card.querySelector('h3').textContent = item[0];
    card.querySelector('p').innerHTML = item[1];
  });
  setHtml('.about-copy .eyebrow', section.aboutEyebrow);
  setHtml('.about-copy h2', section.aboutTitle);
  setHtml('.about-copy > p', section.aboutIntro);
  setAll('.about-highlight h3', section.aboutHighlights.map((item) => item[0]));
  setAll('.about-highlight p', section.aboutHighlights.map((item) => item[1]));
  setAll('.about-value-card h3', section.aboutValues.map((item) => item[0]));
  setAll('.about-value-card p', section.aboutValues.map((item) => item[1]));
  setAll('.contact-copy .check-list li', section.contactChecks);
  setHtml('.contact-card > p', section.contactText);
  const location = document.querySelector('.contact-meta span');
  if (location) location.textContent = section.location;
  setHtml('.site-footer > .container:first-child p', section.footerDescription);
  setHtml('.site-footer h4', section.footerSections);
  setHtml('.site-footer .footer-grid > div:nth-child(3) h4', headings.footerSocial);
  setAll('.site-footer .footer-grid > div:nth-child(2) li a', section.footerLinks);

  const faqList = document.getElementById('faqList');
  if (faqList) {
    faqList.innerHTML = copy.faq.map((item, index) => `
      <div class="faq-item ${index === 0 ? 'open' : ''}">
        <button class="faq-question" aria-expanded="${index === 0}" aria-controls="faq-${index}">
          <span>${item[0]}</span><span class="plus" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-${index}"><div class="faq-answer-inner">${item[1]}</div></div>
      </div>
    `).join('');
    bindFaqEvents();
  }

  renderProjects(section.projects);
  renderTestimonials(section.testimonials);
  document.querySelectorAll('.testimonial-label').forEach((label) => { label.textContent = headings.feedback; });
  const copyright = document.querySelector('.copyright');
  if (copyright) copyright.textContent = language === 'ar' ? '© Final Step 2026' : `© Final Step 2026`;
  document.querySelectorAll('.lightbox-close').forEach((button) => button.setAttribute('aria-label', headings.closeLabel));

  localStorage.setItem('final-step-language', language);
}

function bindFaqEvents() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;
  faqList.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.parentElement;
      const isOpen = parent.classList.contains('open');
      faqList.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        parent.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
  });
  applyLanguage(localStorage.getItem('final-step-language') || 'ar');
}

const techStackItems = [
  { name: 'React.js', icon: 'react.svg' },
  { name: 'Node.js', icon: 'node.svg' },
  { name: 'Express.js', icon: 'express.svg' },
  { name: 'PostgreSQL', icon: 'postgresql.svg' },
  { name: 'React Native', icon: 'react.svg' },
  { name: 'AI', icon: 'ai.svg' },
  { name: 'Git', icon: 'git.svg', enabled: false },
  { name: 'GitHub', icon: 'github.svg', enabled: false },
  { name: 'Figma', icon: 'figma.svg', enabled: false },
  { name: 'Docker', icon: 'docker.svg', enabled: false },
  { name: 'REST API', icon: 'rest-api.svg', enabled: false },
  { name: 'HTML/CSS/JavaScript', icon: 'html.svg', enabled: false }
];

const testimonialData = [
  {
    name: 'Amel Ben Ammar',
    avatar: 'neutral',
    quote: 'L’accompagnement m’a aidée à mieux comprendre mon projet et à avancer avec une méthode claire. Les retours m’ont donné beaucoup de confiance avant la soutenance.'
  },
  {
    name: 'Mohamed Ayari',
    avatar: 'neutral',
    quote: 'De l’analyse de l’idée à la présentation finale, chaque étape était expliquée simplement. J’ai pu développer un projet <bdi>PFE</bdi> structuré et clair.'
  },
  {
    name: 'Rym Jebali',
    avatar: 'neutral',
    quote: 'J’ai surtout apprécié l’organisation et le suivi. Le rapport et la présentation avaient enfin une structure claire, et je me sentais beaucoup moins perdue.'
  },
  {
    name: 'Yassine Ben Salem',
    avatar: 'neutral',
    quote: 'Le support technique et les explications simples m’ont aidé à résoudre les problèmes et à préparer une <bdi>demo</bdi> avec plus de confiance.'
  }
];

const projectData = [
  {
    image: 'assets/img/Image1.jpg',
    title: 'Formation Arduino & IoT',
    caption: 'atelier pratique autour de la programmation embarquée et de l’Internet des objets.'
  },
  {
    image: 'assets/img/Image2.jpg',
    title: 'Workshop Digital Marketing',
    caption: 'session de mise en pratique sur les outils et les méthodes de communication digitale.'
  },
  {
    image: 'assets/img/Image3.jpg',
    title: 'Séance de classe & formation',
    caption: 'moment d’apprentissage collaboratif, cadré autour du développement et des bons réflexes.'
  },
  {
    image: 'assets/img/Image4.jpg',
    title: 'Atelier de coaching technique',
    caption: 'formation orientée projet, accompagnement technique et échanges autour des bonnes pratiques.'
  }
];

const faqData = [
  {
    question: 'من يقدر يستفيد من PFE Pack؟',
    answer: 'كل طالب في مرحلة PFE أو اللي يبدأ مشروعه، وخصوصا اللي عنده فكرة وعايز دعم من الفكرة إلى soutenance.'
  },
  {
    question: 'إذا عندي فكرة فقط، نقدر نتواصل؟',
    answer: 'أكيد. حتى فكرة بسيطة يمكن يبدأ منها النقاش وتحديد الخطوة المناسبة قبل التطوير.'
  },
  {
    question: 'شنو التقنيات اللي نستخدمها؟',
    answer: 'حسب المشروع، ممكن نستخدم React.js، Node.js/Express.js، PostgreSQL، React Native، وAI عند الملاءمة.'
  },
  {
    question: 'هل دعم career support مجاني؟',
    answer: 'نعم، الدعم المهني مجاني، ويشمل LinkedIn، CV، portfolio، والمساعدة في البحث عن فرص العمل.'
  },
  {
    question: 'هل توجد attestation de stage؟',
    answer: 'نعم، Final Step توفر attestation de stage، حسب ترتيبات التربص المعمول بيها.'
  },
  {
    question: 'كيف نبدأ؟',
    answer: 'تقدر تملي نموذج ما قبل التسجيل أو تتواصل معنا مباشرة، ومن ثم نحدد الخطوات المناسبة.'
  }
];

function setCtaLinks() {
  const links = document.querySelectorAll('a[href=""]');
  links.forEach((link) => {
    link.href = REGISTRATION_URL;
  });
}

function renderTechMarquee() {
  const track = document.getElementById('techMarqueeTrack');
  if (!track) return;

  const items = techStackItems.filter((item) => item.enabled !== false);
  const renderItems = (hidden = false) =>
    `<div class="tech-marquee-group"${hidden ? ' aria-hidden="true"' : ''}>${items
      .map(
        (item) => `
          <div class="tech-pill">
            <img src="public/icons/${item.icon}" alt="" />
            <span><bdi>${item.name}</bdi>${item.tag ? `<small>${item.tag}</small>` : ''}</span>
          </div>
        `
      )
      .join('')}</div>`;

  track.innerHTML = `${renderItems()}${renderItems(true)}`;
}

function renderTestimonials(localizedTestimonials = null) {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;

  const renderCards = (hidden = false) =>
    `<div class="testimonials-group"${hidden ? ' aria-hidden="true"' : ''}>${testimonialData
      .map(
        (item, index) => `
          <article class="testimonial-card">
            <div class="testimonial-top">
              <img class="testimonial-watermark" src="assets/logo/Profile picture · name · 1080×1080@1x.png" alt="Final Step" />
              <span class="testimonial-label">FEEDBACK</span>
              <img class="testimonial-avatar" src="public/icons/avatar-${item.avatar}.svg" alt="" aria-hidden="true" />
            </div>
            <div class="testimonial-copy">
              <div class="testimonial-heading">
                <h3>${localizedTestimonials?.[index]?.[0] || item.name}</h3>
                <span class="testimonial-stars" aria-label="تقييم إيجابي">★★★★★</span>
              </div>
              <p>${localizedTestimonials?.[index]?.[1] || item.quote}</p>
            </div>
          </article>
        `
      )
      .join('')}</div>`;

  track.innerHTML = `${renderCards()}${renderCards(true)}`;
}

function renderProjects(localizedProjects = null) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = projectData
    .map(
      (project, index) => {
      const localized = localizedProjects?.[index];
      const title = localized?.[0] || project.title;
      const caption = localized?.[1] || project.caption;
      return `
      <figure class="project-card" data-image="${project.image}" data-title="${title}" data-caption="${caption}">
        <img src="${project.image}" alt="${title}" loading="lazy" width="800" height="600" />
        <figcaption>
          <h3>${title}</h3>
          <p>${caption}</p>
        </figcaption>
      </figure>
      `;
      }
    )
    .join('');

}

function renderFaq() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  faqList.innerHTML = faqData
    .map(
      (item, index) => `
        <div class="faq-item ${index === 0 ? 'open' : ''}">
          <button class="faq-question" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faq-${index}">
            <span>${item.question}</span>
            <span class="plus" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" id="faq-${index}">
            <div class="faq-answer-inner">${item.answer}</div>
          </div>
        </div>
      `
    )
    .join('');

  faqList.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.parentElement;
      const isOpen = parent.classList.contains('open');

      faqList.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initMenuToggle() {
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.nav-toggle');

  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initHeaderState() {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.site-nav');
  if (!header || !nav) return;

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const sections = [...nav.querySelectorAll('a[href^="#"]')]
    .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter((item) => item.section);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sections.forEach((item) => item.link.classList.toggle('active', item.section === entry.target));
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );

  sections.forEach((item) => observer.observe(item.section));
}

function init() {
  renderProjects();
  renderFaq();
  initLanguageSwitcher();
  initMenuToggle();
  initHeaderState();
  setCtaLinks();
  renderTechMarquee();
  renderTestimonials();
}

init();

// NEEDS REVIEW by native speaker
