const STORAGE_KEY = 'cv-theme'
const THEMES = ['light', 'dark'] as const
export type Theme = (typeof THEMES)[number]

function getInitialTheme(): Theme {
  if (import.meta.client) {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored && THEMES.includes(stored)) return stored
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  }
  return 'light'
}

function applyTheme(theme: Theme) {
  if (import.meta.client) {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }
}

export function useTheme() {
  const theme = useState<Theme>('cv-theme', () => 'light')

  function init() {
    const initial = getInitialTheme()
    theme.value = initial
    applyTheme(initial)
  }

  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme(theme.value)
  }

  function setTheme(value: Theme) {
    theme.value = value
    applyTheme(value)
  }

  onMounted(init)

  return { theme, toggle, setTheme }
}
