import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { education } from '../../data/education'
import '../Experience/Experience.css'

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="timeline">
        {education.map((e, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-period mono">{e.period}</div>
            <h3 className="timeline-role">
              {e.degree} <span className="timeline-company">@ {e.institution}</span>
            </h3>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
