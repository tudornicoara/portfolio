import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'
export interface ThemeCtx {
  theme: Theme
  toggle: () => void
}
export const ThemeContext = createContext<ThemeCtx | null>(null)

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
