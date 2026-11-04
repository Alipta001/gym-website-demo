'use client'

import { useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import type { GalleryItem } from '@/types'

interface GalleryLightboxProps {
  items: GalleryItem[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryLightbox({ items, activeIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const isOpen = activeIndex !== null
  const prevIndex = activeIndex !== null ? (activeIndex - 1 + items.length) % items.length : 0
  const nextIndex = activeIndex !== null ? (activeIndex + 1) % items.length : 0

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(prevIndex)
      if (e.key === 'ArrowRight') onNavigate(nextIndex)
    },
    [isOpen, onClose, onNavigate, prevIndex, nextIndex]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <motion.div
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${items[activeIndex].alt}`}
        >
          <motion.div
            className="lightbox-content"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-image-wrap">
              <Image
                src={items[activeIndex].src}
                alt={items[activeIndex].alt}
                fill
                className="lightbox-image"
                sizes="90vw"
                priority
              />
            </div>
            <span className="lightbox-label">{items[activeIndex].alt}</span>
          </motion.div>

          {/* Controls */}
          <button
            ref={closeRef}
            className="lightbox-close"
            aria-label="Close gallery"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); onNavigate(prevIndex) }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="lightbox-nav lightbox-next"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); onNavigate(nextIndex) }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="lightbox-dots" role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Image ${i + 1}`}
                className={`lightbox-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); onNavigate(i) }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

