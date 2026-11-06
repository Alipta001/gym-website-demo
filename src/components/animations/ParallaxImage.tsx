'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image, { type ImageProps } from 'next/image'

interface ParallaxImageProps extends Omit<ImageProps, 'ref'> {
  offsetDistance?: number
  containerClassName?: string
}

export function ParallaxImage({
  offsetDistance = 25,
  containerClassName = '',
  className = '',
  alt,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${offsetDistance}%`, `${offsetDistance}%`]
  )

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        style={shouldReduce ? { height: '100%', width: '100%' } : { y, height: '120%', width: '100%' }}
      >
        <Image alt={alt} className={className} {...props} />
      </motion.div>
    </div>
  )
}

