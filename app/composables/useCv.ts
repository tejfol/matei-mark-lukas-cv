import type { CvData } from './useCv.types'

const XICAY_LOGO = '/xicayinc_logo.jpeg'
const TM_LOGO = '/tm_logo.jpeg'

const cvEn: CvData = {
  name: 'Matei Mark-Lukas',
  title: 'Senior Frontend Engineer',
  location: 'Uzhhorod, Ukraine',
  email: 'mateimarklukas@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/%E2%98%BB%E2%98%BB%E2%98%BB/',
  summary: 'Senior Frontend Engineer with 5+ years of experience designing and building scalable, performance-focused web platforms. Experienced in frontend architecture, SSR strategies, and CMS-driven ecosystems, with a strong focus on user experience and measurable impact. Actively leveraging AI-assisted development workflows to improve delivery speed and code quality. Motivated to grow toward frontend architecture within a product-driven environment.',
  competencies: [
    'Frontend Architecture & Scalable Systems',
    'Performance Optimization & Core Web Vitals',
    'SSR / Rendering Strategy (Nuxt, Vue)',
    'Headless CMS & API Integrations',
    'Analytics & Data-Driven Improvements',
    'CI/CD & Deployment Ownership',
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
        'Sole frontend engineer responsible for architecture, implementation, and deployment of production-grade web platforms (~20–50k monthly users).',
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
    selectedProjects: 'Selected projects'
  },
  skipToContent: 'Skip to main content'
}

const cvSv: CvData = {
  ...cvEn,
  title: 'Senior Frontend-utvecklare',
  location: 'Uzjhorod, Ukraina',
  summary: 'Senior Frontend-utvecklare med 5+ års erfarenhet av att utforma och bygga skalbara, prestandainriktade webbplattformar. Erfaren av frontend-arkitektur, SSR-strategier och CMS-drivna ekosystem, med starkt fokus på användarupplevelse och mätbar effekt. Använder aktivt AI-stödda utvecklingsarbetsflöden för att öka leveranshastighet och kodkvalitet. Motiverad att växa mot frontend-arkitektur i en produktdriven miljö.',
  competencies: [
    'Frontend-arkitektur och skalbara system',
    'Prestandaoptimering och Core Web Vitals',
    'SSR / renderingsstrategi (Nuxt, Vue)',
    'Headless CMS och API-integrationer',
    'Analys och datadrivna förbättringar',
    'CI/CD och deployment',
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
        'Enda frontend-utvecklare ansvarig för arkitektur, implementation och deployment av produktionsklara webbplattformar (~20–50k användare/månad).',
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
        'Bidrog till storskaliga API-drivna webbplattformar i en miljö med många team (20+ ingenjörer).',
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

export function useCvLocale() {
  const cvLocale = useState<'en' | 'sv'>('cv-locale', () => 'en')
  return {
    locale: cvLocale,
    setLocale: (code: 'en' | 'sv') => { cvLocale.value = code },
    locales: [
      { code: 'en' as const, name: 'English', flag: '/flags/flag-us.svg' },
      { code: 'sv' as const, name: 'Svenska', flag: '/flags/flag-se.svg' }
    ]
  }
}

export function useCv() {
  const cvLocale = useState<'en' | 'sv'>('cv-locale', () => 'en')
  return computed<CvData>(() => (cvLocale.value === 'sv' ? cvSv : cvEn))
}
