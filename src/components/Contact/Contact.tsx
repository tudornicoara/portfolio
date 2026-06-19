import { useState } from 'react'
import { Section } from '../ui/Section'
import { profile } from '../../data/profile'
import { copyText } from '../../lib/clipboard'
import './Contact.css'

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null)
  const copy = async (label: string, value: string) => {
    if (await copyText(value)) {
      setCopied(label)
      setTimeout(() => setCopied(null), 1500)
    }
  }
  return (
    <Section id="contact" title="Contact">
      <p className="contact-lead">
        Open to opportunities and collaborations. Let's build something.
      </p>
      <div className="contact-grid">
        <button className="contact-item" onClick={() => copy('email', profile.email)}>
          <span className="mono contact-label">email</span>
          <span className="contact-value">{profile.email}</span>
          <span className="mono contact-copy">
            {copied === 'email' ? 'copied!' : 'click to copy'}
          </span>
        </button>
        <button className="contact-item" onClick={() => copy('phone', profile.phone)}>
          <span className="mono contact-label">phone</span>
          <span className="contact-value">{profile.phone}</span>
          <span className="mono contact-copy">
            {copied === 'phone' ? 'copied!' : 'click to copy'}
          </span>
        </button>
        <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">
          <span className="mono contact-label">github</span>
          <span className="contact-value">@tudornicoara</span>
          <span className="mono contact-copy">open ↗</span>
        </a>
        <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
          <span className="mono contact-label">linkedin</span>
          <span className="contact-value">tudor-nicoara</span>
          <span className="mono contact-copy">open ↗</span>
        </a>
        <a className="contact-item" href="/cv.pdf" download>
          <span className="mono contact-label">resume</span>
          <span className="contact-value">CV (PDF)</span>
          <span className="mono contact-copy">download ↓</span>
        </a>
      </div>
    </Section>
  )
}
