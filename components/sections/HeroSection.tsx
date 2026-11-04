'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  onJoinNow: () => void
}

const ease: [number, number, number, number] = [0.4, 0, 0.2, 1]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
}

export function HeroSection({ onJoinNow }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const shouldReduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section className="hero" id="top" ref={ref} aria-label="REPMAX hero">
      {/* Background with parallax */}
      <motion.div
        className="hero-image"
        style={shouldReduce ? {} : { y: bgY }}
        aria-hidden
      />
      <div className="hero-overlay" aria-hidden />

      {/* Decorative vertical text */}
      <div className="hero-vert-text" aria-hidden>SODEPUR · KOLKATA</div>

      <motion.div
        className="hero-content wrap"
        style={shouldReduce ? {} : { opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="eyebrow" variants={itemVariants}>
          <span aria-hidden />
          REPMAX FITNESS STUDIO · SODEPUR
        </motion.p>

        <motion.h1 variants={itemVariants}>
          BUILT BY<br />
          <em>DISCIPLINE.</em><br />
          DEFINED BY<br />
          <em>STRENGTH.</em>
        </motion.h1>

        <motion.p className="hero-copy" variants={itemVariants}>
          Your journey to a stronger, healthier and more confident you starts here.
          Train harder, push limits and become your strongest self.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <Button onClick={onJoinNow}>START YOUR JOURNEY</Button>
          <Button secondary href="#facilities">EXPLORE THE GYM</Button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden
      >
        <span />
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  )
}
