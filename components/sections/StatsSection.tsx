'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { stats } from '@/data/testimonials'

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()
  const [displayed, setDisplayed] = useState('0')
  const isPlaceholder = value === '—'

  useEffect(() => {
    if (!isInView || isPlaceholder || shouldReduce) {
      setDisplayed(value)
      return
    }
    const numeric = parseInt(value.replace(/\D/g, ''), 10)
    if (isNaN(numeric)) { setDisplayed(value); return }

    let start = 0
    const duration = 1800
    const step = 16
    const increment = numeric / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= numeric) {
        setDisplayed(numeric.toLocaleString())
        clearInterval(timer)
      } else {
        setDisplayed(Math.floor(start).toLocaleString())
      }
    }, step)
    return () => clearInterval(timer)
  }, [isInView, value, isPlaceholder, shouldReduce])

  return (
    <span ref={ref} className="stat-value">
      {isPlaceholder ? '—' : displayed}{!isPlaceholder && suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="stats-section" aria-label="Studio statistics">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map(({ value, label, suffix }, i) => (
            <motion.div
              key={label}
              className="stat-item"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
            >
              <AnimatedCounter value={value} suffix={suffix} />
              <span className="stat-label">{label}</span>
            </motion.div>
          ))}
        </div>
        <p className="stats-disclaimer">* Placeholder values — to be updated with real studio data.</p>
      </div>
    </section>
  )
}

