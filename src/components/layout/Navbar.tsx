'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getNavItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { MobileMenu } from './MobileMenu'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

interface NavbarProps {
  onJoinNow: () => void
}

export function Navbar({ onJoinNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navLinks = getNavItems()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map(({ href }) => href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [navLinks])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 800) setMenuOpen(false)
    }
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
        <a
          className="wordmark"
          href="#top"
          aria-label={`${siteConfig.brand.name} home`}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="none"
              style={{ color: 'var(--primary-accent)', flexShrink: 0 }}
              aria-hidden
            >
              <path
                d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M24 12L34 18V30L24 36L14 30V18L24 12Z"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M18 20L24 24L30 20M24 24V32"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <strong>{siteConfig.brand.logo.text}</strong>
              <span>{siteConfig.brand.logo.subtext}</span>
            </div>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map(({ label, href }) => (
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
        navItems={navLinks}
      />
    </>
  )
}

function AnimateIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      className="menu-icon"
      animate={isOpen ? 'open' : 'closed'}
      aria-hidden
    >
      <motion.span
        className="menu-bar"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 6 },
        }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="menu-bar"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="menu-bar"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -6 },
        }}
        transition={{ duration: 0.25 }}
      />
    </motion.span>
  )
}
