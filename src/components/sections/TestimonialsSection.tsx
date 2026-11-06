'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const navigate = (dir: number) => {
    setDirection(dir)
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: { opacity: 0, x: direction * 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction * -40 },
  }

  return (
    <section className="testimonial-section section" aria-label="Member stories">
      <div className="wrap testimonial-inner">
        <AnimatedSection direction="up" className="testimonial-left">
          <p className="eyebrow">
            <span aria-hidden />
            06 / THE COMMUNITY
          </p>
          <h2>
            REAL ATHLETES.<br />
            <em>MEASURABLE RESULTS.</em>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '16px', maxWidth: '380px', lineHeight: 1.6 }}>
            Hear how dedicated training, progressive overload, and an elite environment redefine what’s possible.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15} className="testimonial-right">
          <div className="quote-card">
            <span className="quote-mark" aria-hidden>
              &ldquo;
            </span>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="quote-text">{testimonials[index].quote}</p>
                <div style={{ marginTop: '20px' }}>
                  <small className="quote-author" style={{ display: 'block', fontWeight: 700 }}>
                    — {testimonials[index].name}
                  </small>
                  <span style={{ fontSize: '11px', color: 'var(--primary-accent)', display: 'block', marginTop: '4px' }}>
                    {testimonials[index].role}
                  </span>
                  {testimonials[index].achievement && (
                    <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                      Milestone: {testimonials[index].achievement}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div className="quote-nav">
                <button
                  className="quote-btn"
                  onClick={() => navigate(-1)}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="quote-counter">
                  {index + 1} / {testimonials.length}
                </span>
                <button
                  className="quote-btn"
                  onClick={() => navigate(1)}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
