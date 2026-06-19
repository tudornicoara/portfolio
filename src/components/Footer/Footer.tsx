import { profile } from '../../data/profile'
import './Footer.css'

const socials = [
  {
    label: 'GitHub',
    href: profile.github,
    path: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z',
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.2H6.05v7.2h2.29zM7.2 10.06a1.33 1.33 0 1 0 0-2.66 1.33 1.33 0 0 0 0 2.66zm11.14 8.28v-3.95c0-2.11-.45-3.74-2.92-3.74-1.19 0-1.98.65-2.31 1.27h-.03v-1.07h-2.2v7.2h2.29v-3.56c0-.94.18-1.85 1.34-1.85 1.15 0 1.16 1.07 1.16 1.91v3.5h2.28z',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    path: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.4l8 5 8-5V6H4zm16 2.5-8 5-8-5V18h16V8.5z',
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={s.label}
              className="footer-social"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="currentColor" d={s.path} />
              </svg>
            </a>
          ))}
        </div>
        <span className="mono footer-copy">
          © {new Date().getFullYear()} Tudor Nicoară · Built with React · Vite · framer-motion
        </span>
        <a href="#avatar" className="mono footer-top">
          back to top ↑
        </a>
      </div>
    </footer>
  )
}
