'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const benefits = [
  'Motivating training environment',
  'Supportive community',
  'Fitness for every level',
  'Consistency-focused training',
]

export function WhyChooseUsSection() {
  const ref = useRef<HTMLElement>(null)
  const shouldReduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section className="statement section" id="why-us" ref={ref} aria-label="Why REPMAX">
      <motion.div
        className="statement-bg"
        style={shouldReduce ? {} : { y: bgY }}
        aria-hidden
      />

      <div className="wrap statement-content">
        <AnimatedSection direction="scale">
          <p className="eyebrow"><span aria-hidden />04 / WHY REPMAX</p>
          <h2>
            YOUR GOALS.<br />
            <em>YOUR GRIND.</em><br />
            YOUR TRANSFORMATION.
          </h2>
        </AnimatedSection>

        <div className="benefits">
          {benefits.map((item, i) => (
            <AnimatedSection key={item} direction="up" delay={0.1 + i * 0.1}>
              <div className="benefit-item">
                <strong>0{i + 1}</strong>
                <span>{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Large editorial text */}
        <AnimatedSection direction="fade" delay={0.4} className="editorial-text" aria-hidden>
          NO SHORTCUTS.<br />
          JUST SHOW UP.
        </AnimatedSection>
      </div>
    </section>
  )
}

