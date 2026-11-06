'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig } from '@/config/site'

const benefits = [
  {
    title: 'Precision Equipment',
    desc: 'Hand-picked competition power bars, dumbbells, and functional machinery.',
  },
  {
    title: 'Elite Coaching Staff',
    desc: 'Coaches with formal kinesiology credentials and competitive background.',
  },
  {
    title: 'Focused Culture',
    desc: 'An inspiring training ground devoid of distractions and empty posturing.',
  },
  {
    title: 'Holistic Recovery',
    desc: 'Contrast therapy, infrared sauna, and mobility zones to maximize adaptation.',
  },
]

export function WhyChooseUsSection() {
  const ref = useRef<HTMLElement>(null)
  const shouldReduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      className="statement section"
      id="why-us"
      ref={ref}
      aria-label={`Why Choose ${siteConfig.brand.name}`}
    >
      <motion.div
        className="statement-bg"
        style={shouldReduce ? {} : { y: bgY }}
        aria-hidden
      />

      <div className="wrap statement-content">
        <AnimatedSection direction="scale">
          <p className="eyebrow">
            <span aria-hidden />
            04 / THE ADVANTAGE
          </p>
          <h2>
            YOUR GOALS.<br />
            <em>YOUR GRIND.</em><br />
            YOUR TRANSFORMATION.
          </h2>
        </AnimatedSection>

        <div className="benefits">
          {benefits.map((item, i) => (
            <AnimatedSection key={item.title} direction="up" delay={0.1 + i * 0.1}>
              <div className="benefit-item">
                <strong>0{i + 1}</strong>
                <div>
                  <span style={{ display: 'block', fontWeight: 700, marginBottom: '6px' }}>
                    {item.title}
                  </span>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Large editorial typography */}
        <AnimatedSection direction="fade" delay={0.4} className="editorial-text" aria-hidden>
          NO SHORTCUTS.<br />
          JUST EXECUTION.
        </AnimatedSection>
      </div>
    </section>
  )
}
