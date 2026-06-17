import { useCallback, useEffect, useState } from 'react'
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

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  )
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const multiple = images.length > 1

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <header className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-title">{title}</span>
        <span className="mono lightbox-counter">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </header>

      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        {multiple && (
          <button className="lightbox-nav prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
        )}
        <img key={index} className="lightbox-img" src={images[index]} alt={`${title} ${index + 1}`} />
        {multiple && (
          <button className="lightbox-nav next" onClick={next} aria-label="Next">
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
