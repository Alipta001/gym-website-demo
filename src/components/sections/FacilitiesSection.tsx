'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { facilities } from '@/data/facilities'
import { siteConfig } from '@/config/site'

const ease: [number, number, number, number] = [0.4, 0, 0.2, 1]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
}

export function FacilitiesSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="dark-section section" id="facilities" aria-label="Facilities">
      <div className="wrap">
        <AnimatedSection direction="up">
          <p className="eyebrow">
            <span aria-hidden />
            02 / THE FACILITY
          </p>
          <div className="section-heading">
            <h2>
              EVERYTHING YOU NEED<br />
              <em>TO LEVEL UP.</em>
            </h2>
            <p className="section-subtext">
              Curated training zones built with competition-grade apparatus and ergonomic design.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="facility-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {facilities.map(({ number, title, description, image }) => (
            <motion.article
              key={number}
              className="facility-card"
              variants={shouldReduce ? undefined : cardVariants}
              aria-label={title}
            >
              <div className="facility-img-wrap">
                <Image
                  src={image}
                  alt={`${title} at ${siteConfig.brand.name}`}
                  fill
                  sizes="(max-width: 800px) 50vw, 25vw"
                  className="facility-img"
                  loading="lazy"
                />
              </div>
              <div className="facility-info">
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <MoveUpRight size={20} aria-hidden />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
