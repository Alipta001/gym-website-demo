'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

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
    <section className="testimonial-section section" aria-label="Member testimonials">
      <div className="wrap testimonial-inner">
        <AnimatedSection direction="up" className="testimonial-left">
          <p className="eyebrow"><span aria-hidden />07 / THE COMMUNITY</p>
          <h2>REAL PEOPLE.<br /><em>REAL COMMITMENT.</em></h2>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15} className="testimonial-right">
          <div className="quote-card">
            <span className="quote-mark" aria-hidden>&ldquo;</span>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="quote-text">{testimonials[index].quote}</p>
                <small className="quote-author">— {testimonials[index].name} / {testimonials[index].role}</small>
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
                <span className="quote-counter">{index + 1} / {testimonials.length}</span>
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

