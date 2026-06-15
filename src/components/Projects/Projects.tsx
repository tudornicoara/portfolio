import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { projects } from '../../data/projects'
import './Projects.css'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((p) => (
          <Card key={p.title}>
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
    </Section>
  )
}
