'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getNavItems } from '@/config/navigation'
import type { NavItem } from '@/types'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onJoinNow: () => void
  navItems?: NavItem[]
}

export function MobileMenu({ isOpen, onClose, onJoinNow, navItems }: MobileMenuProps) {
  const links = navItems || getNavItems()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-inner">
            <div className="mobile-nav-links">
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
            <motion.button
              className="btn btn-primary mobile-nav-cta"
              onClick={() => {
                onClose()
                onJoinNow()
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              JOIN NOW
            </motion.button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
