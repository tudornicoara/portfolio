import { useState } from 'react'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { projects, type Project } from '../../data/projects'
import { Lightbox } from './Lightbox'
import './Projects.css'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((p) => (
          <Card key={p.title}>
            <button
              type="button"
              className="project-cover"
              onClick={() => setActive(p)}
              aria-label={`Open ${p.title} gallery`}
            >
              <img src={p.images[0]} alt={p.title} loading="lazy" />
              <span className="project-cover-hint mono">
                {p.images.length > 1 ? `view ${p.images.length} shots` : 'view'}
              </span>
            </button>
            <div className="project-head">
              <span className="mono project-icon">{'</>'}</span>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="mono">
                    code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="mono">
                    live
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="mono">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {active && (
        <Lightbox title={active.title} images={active.images} onClose={() => setActive(null)} />
      )}
    </Section>
  )
}
