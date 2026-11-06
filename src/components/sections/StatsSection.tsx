'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { stats } from '@/data/testimonials'

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduce = useReducedMotion()
  const [displayed, setDisplayed] = useState('0')

  const numeric = parseInt(value.replace(/\D/g, ''), 10)
  const isNumeric = !isNaN(numeric) && numeric > 0

  useEffect(() => {
    if (!isInView || !isNumeric || shouldReduce) {
      setDisplayed(value)
      return
    }

    let start = 0
    const duration = 1600
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
  }, [isInView, value, isNumeric, numeric, shouldReduce])

  return (
    <span ref={ref} className="stat-value">
      {isNumeric ? displayed : value}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const validStats = stats.filter((s) => s.value && s.value.trim() !== '')

  if (validStats.length === 0) return null

  return (
    <section className="stats-section" aria-label="Studio statistics">
      <div className="wrap">
        <div className="stats-grid">
          {validStats.map(({ value, label, suffix, sublabel }, i) => (
            <motion.div
              key={label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <AnimatedCounter value={value} suffix={suffix} />
              <span className="stat-label">{label}</span>
              {sublabel && (
                <span style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
                  {sublabel}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
