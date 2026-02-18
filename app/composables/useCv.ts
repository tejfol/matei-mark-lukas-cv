import type { CvData } from './useCv.types'

const XICAY_LOGO = '/xicayinc_logo.jpeg'
const TM_LOGO = '/tm_logo.jpeg'

const cvEn: CvData = {
  name: 'Matei Mark-Lukas',
  title: 'Senior Frontend Engineer',
  location: 'Uzhhorod, Ukraine',
  email: 'mateimarklukas@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/%E2%98%BB%E2%98%BB%E2%98%BB/',
  summary: 'Senior Frontend Engineer with 5+ years building scalable, performance-focused web platforms. Strong in frontend architecture, rendering strategies (SSG, SSR, ISR), headless CMS, and CI/CD—from design to deploy.',
  competencies: [
    'Frontend Architecture & Scalable Systems',
    'Performance Optimization & Core Web Vitals',
    'Rendering strategies (SSG, SSR, ISR, etc.) — when to use them, trade-offs, and implementation (e.g. Nuxt, Vue)',
    'Accessibility (WCAG, semantic HTML, keyboard & screen reader support)',
    'Headless CMS & API Integrations',
    'Analytics & Data-Driven Improvements',
    'CI/CD & Deployment Ownership',
    'Manual & smoke testing; quality checks from concept to production',
    'Cross-functional Collaboration'
  ],
  experience: [
    {
      role: 'Senior Frontend Engineer',
      company: 'Xicay Inc.',
      companySubline: 'Agency',
      companyLogo: XICAY_LOGO,
      period: 'Sep 2024 – Present',
      bullets: [
        'Worked alone as frontend engineer on assigned projects; responsible for architecture, implementation, and deployment of production-grade web platforms (~20–50k monthly users).',
        'Designed and built scalable Nuxt-based SSR architecture integrated with Storyblok CMS.',
        'Migrated static SSG implementation to full SSR setup enabling live content editing and improved rendering strategy.',
        'Improved Lighthouse performance scores through rendering optimization, asset strategy, and structural refactoring.',
        'Defined CMS content modeling and editorial workflows from zero to production.',
        'Implemented full analytics stack (GA4, GTM) including custom events and tracking architecture.',
        'Configured Google Search Console and improved technical SEO foundations.',
        'Established CI/CD pipelines and deployment workflows ensuring stable and repeatable releases.'
      ],
      selectedProjects: ['terminal-industries.com', 'prosoundeffects.com']
    },
    {
      role: 'Frontend Developer',
      company: 'ThinkMobiles',
      companySubline: 'Agency',
      companyLogo: TM_LOGO,
      period: 'May 2021 – Aug 2025',
      bullets: [
        'Contributed to large-scale API-driven web platforms within a multi-team environment.',
        'Developed frontend systems integrated with headless CMS, backend APIs, and marketing infrastructure.',
        'Participated in frontend architecture discussions and cross-team technical decisions.',
        'Contributed to complex ecosystem platforms including main websites, landing pages, and CMS-driven products.',
        'Delivered internal tools including marketing automation and content-driven platforms.',
        'Worked independently in frontend/backend pairs on small-to-medium client projects.',
        'Conducted interviews for junior developer and design roles.'
      ]
    }
  ],
  technicalStack: [
    { label: 'Frontend', items: ['Vue', 'Nuxt', 'React', 'Next.js', 'Astro', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind'] },
    { label: 'Backend & Systems', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { label: 'Infrastructure & DevOps', items: ['Docker', 'Cloudflare', 'GitHub Actions', 'GitLab CI', 'Vercel', 'Linux', 'Bash'] },
    { label: 'Analytics & Optimization', items: ['Google Analytics 4', 'Google Tag Manager', 'Google Search Console'] },
    { label: 'Tooling', items: ['Git', 'Webpack', 'ESLint', 'Figma', 'Jira', 'Trello', 'BrowserStack'] }
  ],
  education: [
    { degree: "Bachelor's Degree in Software Engineering", institution: 'Uzhhorod National University', year: '2022' },
    { degree: 'Junior Specialist Diploma in Software Development', institution: 'Uzhhorod National University', year: '2019' }
  ],
  languages: [
    { name: 'Hungarian', level: 'Native' },
    { name: 'Ukrainian', level: 'Advanced' },
    { name: 'English', level: 'Advanced' }
  ],
  sections: {
    summary: 'Summary',
    competencies: 'Core Competencies',
    experience: 'Professional Experience',
    technicalStack: 'Technical Stack',
    education: 'Education',
    languages: 'Languages',
    selectedProjects: 'Selected Projects'
  },
  skipToContent: 'Skip to main content'
}

const cvSv: CvData = {
  ...cvEn,
  title: 'Senior Frontend-utvecklare',
  location: 'Uzjhorod, Ukraina',
  summary: 'Senior Frontend-utvecklare med 5+ års erfarenhet av att bygga skalbara, prestandainriktade webbplattformar. Stark på frontend-arkitektur, renderingsstrategier (SSG, SSR, ISR), headless CMS och CI/CD—från design till deploy.',
  competencies: [
    'Frontend-arkitektur och skalbara system',
    'Prestandaoptimering och Core Web Vitals',
    'Renderingsstrategier (SSG, SSR, ISR m.fl.) — när de används, avvägningar och implementation (t.ex. Nuxt, Vue)',
    'Tillgänglighet (WCAG, semantisk HTML, tangentbord och skärmläsare)',
    'Headless CMS och API-integrationer',
    'Analys och datadrivna förbättringar',
    'CI/CD och deployment',
    'Manuell och smoke-testning; kvalitetskontroller från koncept till produktion',
    'Tvärfunktionellt samarbete'
  ],
  experience: [
    {
      role: 'Senior Frontend-utvecklare',
      company: 'Xicay Inc.',
      companySubline: 'Byrå',
      companyLogo: XICAY_LOGO,
      period: 'Sep 2024 – Nu',
      bullets: [
        'Arbetade ensam som frontend-utvecklare på tilldelade projekt; ansvarig för arkitektur, implementation och deployment av produktionsklara webbplattformar (~20–50k användare/månad).',
        'Utformade och byggde skalbara Nuxt-baserade SSR-arkitekturer integrerade med Storyblok CMS.',
        'Migrerade statisk SSG till full SSR för live-redigering av innehåll och förbättrad renderingsstrategi.',
        'Förbättrade Lighthouse-prestanda genom renderingsoptimering, asset-strategi och strukturell refaktorisering.',
        'Definierade CMS-innehållsmodellering och redaktionella arbetsflöden från noll till produktion.',
        'Implementerade fullständig analysstack (GA4, GTM) inkl. anpassade events och spårningsarkitektur.',
        'Konfigurerade Google Search Console och förbättrade teknisk SEO.',
        'Etablerade CI/CD-pipelines och deployment-arbetsflöden för stabila och repeterbara releaser.'
      ],
      selectedProjects: ['terminal-industries.com', 'prosoundeffects.com']
    },
    {
      role: 'Frontend-utvecklare',
      company: 'ThinkMobiles',
      companySubline: 'Byrå',
      companyLogo: TM_LOGO,
      period: 'Maj 2021 – Aug 2025',
      bullets: [
        'Bidrog till storskaliga API-drivna webbplattformar i en miljö med många team.',
        'Utvecklade frontend-system integrerade med headless CMS, backend-API:er och marknadsföringsinfrastruktur.',
        'Deltog i diskussioner om frontend-arkitektur och tvär-team tekniska beslut.',
        'Bidrog till komplexa ekosystemplattformar inkl. huvudsajter, landningssidor och CMS-drivna produkter.',
        'Levererade interna verktyg inkl. marknadsföringsautomation och innehållsdrivna plattformar.',
        'Arbetade självständigt i frontend/backend-par i små till medelstora kundprojekt.',
        'Genomförde intervjuer för juniora utvecklare och designers.'
      ]
    }
  ],
  technicalStack: [
    { label: 'Frontend', items: [...(cvEn.technicalStack[0]?.items ?? [])] },
    { label: 'Backend och system', items: [...(cvEn.technicalStack[1]?.items ?? [])] },
    { label: 'Infrastruktur och DevOps', items: [...(cvEn.technicalStack[2]?.items ?? [])] },
    { label: 'Analys och optimering', items: [...(cvEn.technicalStack[3]?.items ?? [])] },
    { label: 'Verktyg', items: [...(cvEn.technicalStack[4]?.items ?? [])] }
  ],
  education: [
    { degree: 'Kandidatexamen i programvaruteknik', institution: 'Uzjhorods nationella universitet', year: '2022' },
    { degree: 'Diplom som junior specialist i programutveckling', institution: 'Uzjhorods nationella universitet', year: '2019' }
  ],
  languages: [
    { name: 'Ungerska', level: 'Modersmål' },
    { name: 'Ukrainska', level: 'Avancerad' },
    { name: 'Engelska', level: 'Avancerad' }
  ],
  sections: {
    summary: 'Sammanfattning',
    competencies: 'Kärnkompetenser',
    experience: 'Arbetslivserfarenhet',
    technicalStack: 'Teknisk stack',
    education: 'Utbildning',
    languages: 'Språk',
    selectedProjects: 'Utvalda projekt'
  },
  skipToContent: 'Hoppa till huvudinnehållet'
}

const cvHu: CvData = {
  ...cvEn,
  title: 'Szenior Frontend fejlesztő',
  location: 'Ungvár, Ukrajna',
  summary: 'Szenior frontend fejlesztő több mint 5 év tapasztalattal, skálázható és teljesítményközpontú webes rendszerek tervezésében és megvalósításában. Magabiztos a frontend architektúrában, a különböző renderelési stratégiák (SSG, SSR, ISR) alkalmazásában, headless CMS integrációkban és CI/CD folyamatokban – a tervezéstől az éles üzembe helyezésig.',

  competencies: [
    'Frontend architektúra és rendszertervezés',
    'Teljesítményoptimalizálás, Core Web Vitals',
    'Renderelési stratégiák (SSG, SSR, ISR) – megfelelő technológia kiválasztása és implementálása (Nuxt, Vue)',
    'Akadálymentesítés (WCAG, szemantikus HTML, billentyűzet-navigáció, képernyőolvasó támogatás)',
    'Headless CMS és API integrációk',
    'Analitikai rendszerek és adatvezérelt optimalizálás',
    'CI/CD és deployment folyamatok kialakítása',
    'Minőségbiztosítás, manuális és smoke tesztelés',
    'Csapatokon átívelő együttműködés'
  ],

  experience: [
    {
      role: 'Szenior Frontend fejlesztő',
      company: 'Xicay Inc.',
      companySubline: 'Digitális ügynökség',
      companyLogo: XICAY_LOGO,
      period: '2024. szeptember – jelenleg',
      bullets: [
        'A projekteken egyedüli frontend fejlesztőként felelős az architektúráért, a megvalósításért és az éles rendszerek üzembe helyezéséért (kb. 20–50 ezer havi felhasználó).',
        'Skálázható, Nuxt-alapú SSR architektúra tervezése és implementálása Storyblok CMS integrációval.',
        'Statikus (SSG) rendszer migrálása teljes SSR megoldásra az élő szerkeszthetőség és a jobb renderelési stratégia érdekében.',
        'Lighthouse pontszámok javítása renderelési optimalizációval és strukturális refaktorálással.',
        'CMS tartalomstruktúra és szerkesztési folyamatok kialakítása nulláról production környezetig.',
        'Teljes analitikai infrastruktúra (GA4, GTM) bevezetése egyedi eseménykövetéssel.',
        'Google Search Console konfigurálása és technikai SEO fejlesztések.',
        'CI/CD pipeline-ok és stabil deployment folyamatok kialakítása.'
      ],
      selectedProjects: ['terminal-industries.com', 'prosoundeffects.com']
    },
    {
      role: 'Frontend fejlesztő',
      company: 'ThinkMobiles',
      companySubline: 'Digitális ügynökség',
      companyLogo: TM_LOGO,
      period: '2021. május – 2025. augusztus',
      bullets: [
        'Nagy léptékű, API-alapú webes rendszerek fejlesztése többcsapatos környezetben.',
        'Frontend alkalmazások fejlesztése headless CMS és backend API integrációval.',
        'Részvétel frontend architekturális döntésekben és csapatok közötti technikai egyeztetésekben.',
        'Komplex webes ökoszisztémák fejlesztése (főoldalak, landing oldalak, CMS-alapú rendszerek).',
        'Belső eszközök fejlesztése marketing automatizáció és tartalomkezelés területén.',
        'Frontend–backend együttműködés kisebb és közepes ügyfélprojektekben.',
        'Junior fejlesztők és designerek interjúztatása.'
      ]
    }
  ],

  technicalStack: [
    { label: 'Frontend', items: [...(cvEn.technicalStack[0]?.items ?? [])] },
    { label: 'Backend és rendszerek', items: [...(cvEn.technicalStack[1]?.items ?? [])] },
    { label: 'Infrastruktúra és DevOps', items: [...(cvEn.technicalStack[2]?.items ?? [])] },
    { label: 'Analitika és optimalizálás', items: [...(cvEn.technicalStack[3]?.items ?? [])] },
    { label: 'Eszközök', items: [...(cvEn.technicalStack[4]?.items ?? [])] }
  ],

  education: [
    { degree: 'Szoftvertechnikai BSc', institution: 'Ungvári Nemzeti Egyetem', year: '2022' },
    { degree: 'Junior szakember (szoftverfejlesztés)', institution: 'Ungvári Nemzeti Egyetem', year: '2019' }
  ],

  languages: [
    { name: 'Magyar', level: 'Anyanyelv' },
    { name: 'Ukrán', level: 'Felsőfok' },
    { name: 'Angol', level: 'Felsőfokú szakmai munkavégzés' }
  ],

  sections: {
    summary: 'Szakmai összefoglaló',
    competencies: 'Fő kompetenciák',
    experience: 'Szakmai tapasztalat',
    technicalStack: 'Technológiai stack',
    education: 'Tanulmányok',
    languages: 'Nyelvismeret',
    selectedProjects: 'Kiemelt projektek'
  },

  skipToContent: 'Ugrás a tartalomhoz'
}


const cvUk: CvData = {
  ...cvEn,
  title: 'Senior Frontend-інженер',
  location: 'Ужгород, Україна',
  summary: 'Senior Frontend-інженер з понад 5 роками досвіду побудови масштабованих веб-платформ з фокусом на продуктивність. Сильні сторони: фронтенд-архітектура, стратегії рендерингу (SSG, SSR, ISR), headless CMS та CI/CD—від дизайну до деплою.',
  competencies: [
    'Фронтенд-архітектура та масштабовані системи',
    'Оптимізація продуктивності та Core Web Vitals',
    'Стратегії рендерингу (SSG, SSR, ISR тощо) — коли яку використовувати, компроміси та реалізація (напр. Nuxt, Vue)',
    'Доступність (WCAG, семантична HTML, клавіатура та скрінридер)',
    'Headless CMS та API-інтеграції',
    'Аналітика та покращення на основі даних',
    'CI/CD та відповідальність за деплой',
    'Ручне та smoke-тестування; перевірки якості від концепції до продакшну',
    'Міжфункціональна співпраця'
  ],
  experience: [
    {
      role: 'Senior Frontend-інженер',
      company: 'Xicay Inc.',
      companySubline: 'Агенція',
      companyLogo: XICAY_LOGO,
      period: 'Вер 2024 – дотепер',
      bullets: [
        'Працював єдиним фронтенд-інженером на призначених проєктах; відповідальний за архітектуру, реалізацію та деплой продакшн-платформ (~20–50 тис. користувачів на місяць).',
        'Спроєктував і побудував масштабовану Nuxt-based SSR архітектуру з інтеграцією Storyblok CMS.',
        'Мігрував статичний SSG на повний SSR для живого редагування контенту та покращеної стратегії рендерингу.',
        'Підвищив показники Lighthouse за рахунок оптимізації рендерингу, стратегії ассетів та структурного рефакторингу.',
        'Визначив моделювання контенту в CMS та редакційні процеси з нуля до продакшну.',
        'Впровадив повний аналітичний стек (GA4, GTM), включно з кастомними подіями та архітектурою трекінгу.',
        'Налаштував Google Search Console та покращив технічну SEO-базу.',
        'Налаштував CI/CD пайплайни та процеси деплою для стабільних і повторюваних релізів.'
      ],
      selectedProjects: ['terminal-industries.com', 'prosoundeffects.com']
    },
    {
      role: 'Frontend-розробник',
      company: 'ThinkMobiles',
      companySubline: 'Агенція',
      companyLogo: TM_LOGO,
      period: 'Трав 2021 – Сер 2025',
      bullets: [
        'Брав участь у великих API-орієнтованих веб-платформах у багатокомандному середовищі.',
        'Розробляв фронтенд-системи, інтегровані з headless CMS, бекенд-API та маркетинговою інфраструктурою.',
        'Брав участь у обговореннях фронтенд-архітектури та міжкомандних технічних рішеннях.',
        'Працював над складними екосистемними платформами: головні сайти, лендинги, CMS-продукти.',
        'Реалізовував внутрішні інструменти: маркетингова автоматизація та контент-орієнтовані платформи.',
        'Працював самостійно у парах фронтенд/бекенд над малими та середніми клієнтськими проєктами.',
        'Проводив співбесіди на позиції junior-розробника та дизайнера.'
      ]
    }
  ],
  technicalStack: [
    { label: 'Фронтенд', items: [...(cvEn.technicalStack[0]?.items ?? [])] },
    { label: 'Бекенд та системи', items: [...(cvEn.technicalStack[1]?.items ?? [])] },
    { label: 'Інфраструктура та DevOps', items: [...(cvEn.technicalStack[2]?.items ?? [])] },
    { label: 'Аналітика та оптимізація', items: [...(cvEn.technicalStack[3]?.items ?? [])] },
    { label: 'Інструменти', items: [...(cvEn.technicalStack[4]?.items ?? [])] }
  ],
  education: [
    { degree: 'Бакалавр з програмної інженерії', institution: 'Ужгородський національний університет', year: '2022' },
    { degree: 'Диплом молодшого спеціаліста з розробки ПЗ', institution: 'Ужгородський національний університет', year: '2019' }
  ],
  languages: [
    { name: 'Угорська', level: 'Рідна' },
    { name: 'Українська', level: 'Просунутий' },
    { name: 'Англійська', level: 'Просунутий' }
  ],
  sections: {
    summary: 'Резюме',
    competencies: 'Компетенції',
    experience: 'Досвід роботи',
    technicalStack: 'Технічний стек',
    education: 'Освіта',
    languages: 'Мови',
    selectedProjects: 'Обрані проєкти'
  },
  skipToContent: 'Перейти до контенту'
}

export type CvLocaleCode = 'en' | 'sv' | 'hu' | 'uk'

export function useCvLocale() {
  const cvLocale = useState<CvLocaleCode>('cv-locale', () => 'en')
  return {
    locale: cvLocale,
    setLocale: (code: CvLocaleCode) => { cvLocale.value = code },
    locales: [
      { code: 'en' as const, name: 'English', flag: '/flags/flag-us.svg' },
      { code: 'sv' as const, name: 'Svenska', flag: '/flags/flag-se.svg' },
      { code: 'hu' as const, name: 'Magyar', flag: '/flags/flag-hu.svg' },
      { code: 'uk' as const, name: 'Українська', flag: '/flags/flag-ua.svg' }
    ]
  }
}

export function useCv() {
  const cvLocale = useState<CvLocaleCode>('cv-locale', () => 'en')
  return computed<CvData>(() => {
    switch (cvLocale.value) {
      case 'sv': return cvSv
      case 'hu': return cvHu
      case 'uk': return cvUk
      default: return cvEn
    }
  })
}
