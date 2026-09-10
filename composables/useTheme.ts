export const useTheme = () => {
  const isDark = useState<boolean>('isDark', () => true)

  const initTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem('portfolio-theme')
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        isDark.value = prefersDark
      }
      applyTheme()
    }
  }

  const applyTheme = () => {
    if (import.meta.client) {
      const root = document.documentElement
      if (isDark.value) {
        root.classList.add('dark')
        localStorage.setItem('portfolio-theme', 'dark')
      } else {
        root.classList.remove('dark')
        localStorage.setItem('portfolio-theme', 'light')
      }
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  return {
    isDark,
    initTheme,
    toggleTheme
  }
}
