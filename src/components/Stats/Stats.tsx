import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Stats.css'

interface Stat {
  value: number
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years experience' },
  { value: 4, label: 'Companies' },
  { value: 10, suffix: '+', label: 'Projects shipped' },
  { value: 15, suffix: '+', label: 'Technologies' },
]

function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(to)
      return
    }
    const dur = 1100
    let raf = 0
    let startTime = 0
    const step = (t: number) => {
      if (!startTime) startTime = t
      const p = Math.min((t - startTime) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="stat-value gradient-text mono">
              <CountUp to={s.value} suffix={s.suffix} />
            </span>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
