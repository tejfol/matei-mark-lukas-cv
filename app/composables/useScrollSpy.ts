const SECTION_IDS = ['summary', 'competencies', 'experience', 'technical-stack', 'education', 'languages']

export function useScrollSpy() {
  const activeId = ref<string | null>(null)
  const scrollProgress = ref(0)

  onMounted(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.getAttribute('id')
          if (id) activeId.value = id
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))

    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      scrollProgress.value = max > 0 ? (scrollTop / max) * 100 : 0
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })

    onUnmounted(() => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
    })
  })

  return { activeId, scrollProgress }
}
