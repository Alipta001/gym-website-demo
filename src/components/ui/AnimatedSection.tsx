'use client'

import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  once?: boolean
  threshold?: number
}

const ease: [number, number, number, number] = [0.4, 0, 0.2, 1]

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants[direction]}
      transition={{ duration: 0.85, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
