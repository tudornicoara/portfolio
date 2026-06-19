import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { skillGroups } from '../../data/skills'
import './Skills.css'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-groups">
        {skillGroups.map((g) => (
          <div key={g.category} className="skill-group">
            <h3 className="skill-group-head mono">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d={g.icon}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {g.category}
            </h3>
            <div className="skills-grid">
              {g.items.map((s, i) => (
                <motion.span
                  key={s.name}
                  className={`skill ${s.primary ? 'skill-primary' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
