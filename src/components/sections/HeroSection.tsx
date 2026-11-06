'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

interface HeroSectionProps {
  onJoinNow: () => void
}

const ease: [number, number, number, number] = [0.4, 0, 0.2, 1]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
}

export function HeroSection({ onJoinNow }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const shouldReduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const { hero } = siteConfig

  return (
    <section className="hero" id="top" ref={ref} aria-label={`${siteConfig.brand.name} Hero`}>
      {/* Background with parallax */}
      <motion.div
        className="hero-image"
        style={
          shouldReduce
            ? { backgroundImage: `url(${hero.backgroundImage})` }
            : { y: bgY, backgroundImage: `url(${hero.backgroundImage})` }
        }
        aria-hidden
      />
      <div className="hero-overlay" aria-hidden />

      {/* Decorative vertical text */}
      <div className="hero-vert-text" aria-hidden>
        {hero.sideVerticalText}
      </div>

      <motion.div
        className="hero-content wrap"
        style={shouldReduce ? {} : { opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="eyebrow" variants={itemVariants}>
          <span aria-hidden />
          {hero.eyebrow}
        </motion.p>

        <motion.h1 variants={itemVariants}>
          {hero.headingLine1} <br />
          <em>{hero.headingHighlight1}</em> <br />
          {hero.headingLine2} <br />
          <em>{hero.headingHighlight2}</em>
        </motion.h1>

        <motion.p className="hero-copy" variants={itemVariants}>
          {hero.subtitle}
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <Button onClick={onJoinNow}>{hero.primaryCtaText}</Button>
          <Button secondary href="#facilities">
            {hero.secondaryCtaText}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden
      >
        <span />
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  )
}
