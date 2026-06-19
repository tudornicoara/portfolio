import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from './ThemeProvider'
import { useTheme } from './useTheme'

function Probe() {
  const { theme, toggle } = useTheme()
  return <button onClick={toggle}>theme:{theme}</button>
}

function setSystem(dark: boolean) {
  window.matchMedia = ((q: string) => ({
    matches: dark,
    media: q,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as any
}

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
})

test('uses localStorage value when present', () => {
  localStorage.setItem('theme', 'light')
  setSystem(true)
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  )
  expect(screen.getByText('theme:light')).toBeInTheDocument()
  expect(document.documentElement.getAttribute('data-theme')).toBe('light')
})

test('defaults to dark when no storage, ignoring system preference', () => {
  setSystem(true)
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  )
  expect(screen.getByText('theme:dark')).toBeInTheDocument()
})

test('toggle flips theme and persists', async () => {
  setSystem(false)
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  )
  expect(screen.getByText('theme:dark')).toBeInTheDocument()
  await act(async () => {
    await userEvent.click(screen.getByRole('button'))
  })
  expect(screen.getByText('theme:light')).toBeInTheDocument()
  expect(localStorage.getItem('theme')).toBe('light')
})
