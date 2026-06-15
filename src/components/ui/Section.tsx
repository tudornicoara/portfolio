import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import './Section.css'

export function Section({
  id,
  title,
  children,
}: Readonly<{
  id: string
  title?: string
  children: ReactNode
}>) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && (
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono section-index gradient-text">#</span> {title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
