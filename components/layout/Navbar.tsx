'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { MobileMenu } from './MobileMenu'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

interface NavbarProps {
  onJoinNow: () => void
}

export function Navbar({ onJoinNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    const sections = navItems.map(({ href }) => href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 800) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="wordmark" href="#top" aria-label="REPMAX home">
          <strong>REPMAX</strong>
          <span>FITNESS STUDIO</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={activeSection === href.replace('#', '') ? 'active' : ''}
            >
              {label}
            </a>
          ))}
          <button className="btn btn-primary btn-sm" onClick={onJoinNow}>
            JOIN NOW
          </button>
        </nav>

        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <AnimateIcon isOpen={menuOpen} />
        </button>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onJoinNow={onJoinNow}
      />
    </>
  )
}

function AnimateIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      key={isOpen ? 'x' : 'menu'}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </motion.span>
  )
}

