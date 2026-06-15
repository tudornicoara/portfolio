import { useTheme } from '../../theme/useTheme'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle color theme">
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  )
}
