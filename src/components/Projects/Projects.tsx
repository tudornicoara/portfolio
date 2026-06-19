import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { projects, type Project } from '../../data/projects'
import { Lightbox } from './Lightbox'
import './Projects.css'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('All')

  const tags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set)]
  }, [])

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  )

  return (
    <Section id="projects" title="Projects">
      <div className="project-filters" role="tablist" aria-label="Filter projects by tag">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={filter === t}
            className={`project-filter mono ${filter === t ? 'active' : ''}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              className={p.featured ? 'project-featured' : ''}
            >
              <Card>
                {p.featured && <span className="project-badge mono">★ Featured</span>}
                <button
                  type="button"
                  className="project-cover"
                  onClick={() => setActive(p)}
                  aria-label={`Open ${p.title} gallery`}
                >
                  <img src={p.cover} alt={p.title} loading="lazy" />
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
                    <button
                      key={t}
                      type="button"
                      className={`mono project-tag ${filter === t ? 'active' : ''}`}
                      onClick={() => setFilter(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {active && (
        <Lightbox title={active.title} images={active.images} onClose={() => setActive(null)} />
      )}
    </Section>
  )
}
