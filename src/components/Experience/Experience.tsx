import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { experience } from '../../data/experience'
import './Experience.css'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experience.map((e, i) => (
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
              {e.role} <span className="timeline-company">@ {e.company}</span>
            </h3>
            <p className="timeline-blurb">{e.blurb}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
