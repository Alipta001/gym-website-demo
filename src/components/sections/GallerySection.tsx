'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GalleryLightbox } from '@/components/ui/GalleryLightbox'
import { galleryItems } from '@/data/gallery'

const ease: [number, number, number, number] = [0.4, 0, 0.2, 1]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
}

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="section gallery-section" id="gallery" aria-label="Visual Gallery">
      <div className="wrap">
        <AnimatedSection direction="up">
          <p className="eyebrow">
            <span aria-hidden />
            05 / THE ATMOSPHERE
          </p>
          <div className="section-heading">
            <h2>
              INSIDE<br />
              <em>THE ARENA.</em>
            </h2>
            <p className="section-subtext">
              High-intensity training environments, competition gear, and focused athletic energy.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryItems.map(({ src, alt, span, category }, i) => (
            <motion.button
              key={`${src}-${i}`}
              className={`gallery-item gallery-${i}${span === 'row' ? ' gallery-span-row' : ''}`}
              variants={itemVariants}
              onClick={() => setActiveIndex(i)}
              aria-label={`View full image: ${alt}`}
            >
              <div className="gallery-img-wrap">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 800px) 50vw, 33vw"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <span className="gallery-label">
                <span>
                  {category && <span style={{ opacity: 0.75, marginRight: '6px' }}>[{category}]</span>}
                  {alt}
                </span>
                <ArrowUpRight size={16} aria-hidden />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <GalleryLightbox
        items={galleryItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}
