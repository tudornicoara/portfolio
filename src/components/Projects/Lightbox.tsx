import { useCallback, useEffect, useRef, useState } from 'react'
import './Lightbox.css'

interface LightboxProps {
  title: string
  images: string[]
  /** Index to open on. */
  start?: number
  onClose: () => void
}

export function Lightbox({ title, images, start = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(start)
  const [closing, setClosing] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<Element | null>(null)

  const close = useCallback(() => setClosing(true), [])

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  )
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    triggerRef.current = document.activeElement
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Tab') {
        const root = rootRef.current
        if (!root) return
        const focusable = root.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    rootRef.current?.querySelector<HTMLElement>('.lightbox-close')?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      const trigger = triggerRef.current
      if (trigger instanceof HTMLElement) trigger.focus()
    }
  }, [close, prev, next])

  const multiple = images.length > 1

  return (
    <div
      ref={rootRef}
      className={`lightbox${closing ? ' closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={close}
      onAnimationEnd={(e) => {
        if (closing && e.target === e.currentTarget) onClose()
      }}
    >
      <header className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-title">{title}</span>
        <span className="mono lightbox-counter">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
        <button className="lightbox-close" onClick={close} aria-label="Close">
          ✕
        </button>
      </header>

      <div className="lightbox-stage" onClick={close}>
        {multiple && (
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">
            ‹
          </button>
        )}
        <img key={index} className="lightbox-img" src={images[index]} alt={`${title} ${index + 1}`} onClick={(e) => e.stopPropagation()} />
        {multiple && (
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">
            ›
          </button>
        )}
      </div>

      {multiple && (
        <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
          {images.map((src, i) => (
            <button
              key={src}
              className={`lightbox-thumb${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
