import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { skills } from '../../data/skills'
import './Skills.css'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skills.map((s, i) => (
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
    </Section>
  )
}
