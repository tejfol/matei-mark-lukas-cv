<template>
  <div class="min-h-screen bg-base-200 font-sans antialiased">
    <NuxtRouteAnnouncer />
    <a href="#main-content" class="skip-link no-print">
      {{ cv.skipToContent }}
    </a>

    <main id="main-content" class="container mx-auto px-4 py-12 md:py-16 max-w-2xl" role="main">
      <div class="bg-base-100 rounded-2xl shadow-lg shadow-base-content/5 p-8 md:p-10">
      <CvHeader
        :name="cv.name"
        :title="cv.title"
        :location="cv.location"
        :email="cv.email"
        :linked-in="cv.linkedIn"
      />

      <CvSection section-id="summary" :title="cv.sections.summary" icon="lucide:file-text">
        <p class="text-base-content/80 text-sm leading-relaxed">
          {{ cv.summary }}
        </p>
      </CvSection>

      <CvSection section-id="competencies" :title="cv.sections.competencies" icon="lucide:list-checks">
        <CvCompetencyList :items="cv.competencies" />
      </CvSection>

      <CvSection section-id="experience" :title="cv.sections.experience" icon="lucide:briefcase">
        <div class="space-y-8">
          <CvExperienceCard
            v-for="(job, i) in cv.experience"
            :key="i"
            :role="job.role"
            :company="job.company"
            :company-subline="job.companySubline"
            :company-logo="job.companyLogo"
            :period="job.period"
            :bullets="job.bullets"
            :selected-projects="job.selectedProjects"
            :selected-projects-label="cv.sections.selectedProjects"
          />
        </div>
      </CvSection>

      <CvSection section-id="technical-stack" :title="cv.sections.technicalStack" icon="lucide:code">
        <CvTechnicalStack :groups="cv.technicalStack" />
      </CvSection>

      <CvSection section-id="education" :title="cv.sections.education" icon="lucide:graduation-cap">
        <CvEducation :entries="cv.education" />
      </CvSection>

      <CvSection section-id="languages" :title="cv.sections.languages" icon="lucide:languages">
        <CvLanguages :languages="cv.languages" />
      </CvSection>
      </div>
    </main>
    <CvToc :items="tocItems" :active-id="activeId" :progress="scrollProgress" />
  </div>
</template>

<script setup lang="ts">
const cv = useCv()
const { locale: cvLocale } = useCvLocale()
const { activeId, scrollProgress } = useScrollSpy()

const tocItems = computed(() => [
  { id: 'summary', label: cv.value.sections.summary },
  { id: 'competencies', label: cv.value.sections.competencies },
  { id: 'experience', label: cv.value.sections.experience },
  { id: 'technical-stack', label: cv.value.sections.technicalStack },
  { id: 'education', label: cv.value.sections.education },
  { id: 'languages', label: cv.value.sections.languages },
])

useHead({
  htmlAttrs: computed(() => ({ lang: cvLocale.value })),
  title: computed(() => `${cv.value.name} · ${cv.value.title}`),
  meta: [
    { name: 'description', content: computed(() => cv.value.summary.slice(0, 160) + (cv.value.summary.length > 160 ? '…' : '')) },
    { property: 'og:title', content: computed(() => `${cv.value.name} · ${cv.value.title}`) },
    { property: 'og:description', content: computed(() => cv.value.summary.slice(0, 160) + (cv.value.summary.length > 160 ? '…' : '')) },
    { property: 'og:type', content: 'profile' },
    { name: 'theme-color', content: '#1e3a5f', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#1d2327', media: '(prefers-color-scheme: dark)' }
  ],
  script: [{
    innerHTML: `(function(){var t=localStorage.getItem('cv-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);else if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.setAttribute('data-theme','dark');})();`,
    tagPriority: 'high'
  }]
})
</script>

<style scoped>
.skip-link {
  position: absolute;
  top: -100px;
  left: 0.5rem;
  z-index: 100;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: var(--color-primary-content);
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.25rem;
  transition: top 0.15s ease;
}
.skip-link:focus,
.skip-link:focus-visible {
  top: 0.5rem;
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
</style>

<style>
html {
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
/* Keyboard focus visible for interactive elements */
:focus { outline: none; }
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
/* Slightly warmer, intentional base and primary */
[data-theme="light"] {
  --color-base-200: #f4f4f5;
  --color-base-300: #e4e4e7;
  --color-primary: #1e3a5f;
  --color-primary-content: #f0f4f8;
}
[data-theme="dark"] {
  --color-base-100: #18181b;
  --color-base-200: #27272a;
  --color-base-300: #3f3f46;
  --color-base-content: #fafafa;
  --color-primary: #60a5fa;
  --color-primary-content: #0f172a;
}
@media print {
  .no-print { display: none !important; }
  body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
  main section { break-inside: avoid; }
}
</style>
