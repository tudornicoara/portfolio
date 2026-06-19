import { motion } from 'framer-motion'
import { useTheme } from '../../theme/useTheme'
import './ThemeToggle.css'

const rays = [0, 45, 90, 135, 180, 225, 270, 315]

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <motion.svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        animate={{ rotate: isDark ? 0 : 40 }}
        transition={{ type: 'spring', stiffness: 200, damping: 16 }}
      >
        <mask id="moon-mask">
          <rect width="24" height="24" fill="white" />
          <motion.circle
            cx="24"
            cy="10"
            r="6"
            fill="black"
            animate={{ cx: isDark ? 24 : 17, cy: isDark ? 10 : 7 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </mask>
        <motion.circle
          cx="12"
          cy="12"
          fill="currentColor"
          mask="url(#moon-mask)"
          animate={{ r: isDark ? 5 : 6 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        <motion.g
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'center' }}
        >
          {rays.map((deg) => (
            <line
              key={deg}
              x1="12"
              y1="1.5"
              x2="12"
              y2="3.5"
              transform={`rotate(${deg} 12 12)`}
            />
          ))}
        </motion.g>
      </motion.svg>
    </button>
  )
}
