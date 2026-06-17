import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import './Avatar.css'

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[i % words.length]
    const done = !del && text === word
    const empty = del && text === ''
    const delay = done ? 1600 : empty ? 200 : del ? 40 : 70
    const t = setTimeout(() => {
      if (done) setDel(true)
      else if (empty) {
        setDel(false)
        setI((x) => x + 1)
      } else setText(word.slice(0, del ? text.length - 1 : text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, del, i, words])
  return text
}

export function Avatar() {
  const typed = useTypewriter(profile.taglines)
  return (
    <section id="avatar" className="avatar">
      <div className="container avatar-inner">
        <motion.div
          className="avatar-monogram mono"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {profile.monogram}
        </motion.div>
        <motion.p
          className="avatar-greeting mono"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {'>'} hello, world. I'm
        </motion.p>
        <motion.h1
          className="avatar-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          {profile.name}
        </motion.h1>
        <p className="avatar-tagline mono gradient-text">
          {typed}
          <span className="caret">_</span>
        </p>
        <motion.div
          className="avatar-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </motion.div>
      </div>
      <a href="#about" className="avatar-scroll mono" aria-label="Scroll down">
        scroll ↓
      </a>
    </section>
  )
}
