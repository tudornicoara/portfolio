import { useEffect, useRef } from 'react'
import './Background.css'

export function Background() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = ref.current
    if (!canvas || reduce) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999 }
    const N = 70
    const pts = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }))

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * dpr
      h = canvas.height = canvas.offsetHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX * dpr
      mouse.y = e.clientY * dpr
    }
    window.addEventListener('mousemove', onMove)

    const link = 140 * dpr
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
      }
      for (let i = 0; i < N; i++) {
        const a = pts[i]
        const ax = a.x * w
        const ay = a.y * h
        for (let j = i + 1; j < N; j++) {
          const b = pts[j]
          const bx = b.x * w
          const by = b.y * h
          const d = Math.hypot(ax - bx, ay - by)
          if (d < link) {
            ctx.strokeStyle = `rgba(34,211,238,${0.12 * (1 - d / link)})`
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(ax - mouse.x, ay - mouse.y)
        const r = dm < 120 * dpr ? 2.4 : 1.4
        ctx.fillStyle = 'rgba(168,85,247,0.5)'
        ctx.beginPath()
        ctx.arc(ax, ay, r * dpr, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="bg-wrap" aria-hidden="true">
      <canvas ref={ref} className="bg-canvas" />
      <div className="bg-glow" />
    </div>
  )
}
