import { ArrowUpRight } from 'lucide-react'
import { getNavItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  const navLinks = getNavItems()

  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <a
            className="wordmark"
            href="#top"
            aria-label={`${siteConfig.brand.name} home`}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg
                width="24"
                height="24"
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
          <p className="footer-tagline">
            {siteConfig.brand.tagline}
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '12px', maxWidth: '320px', lineHeight: 1.6 }}>
            {siteConfig.brand.description}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="eyebrow" style={{ marginBottom: '16px' }}>
            <span aria-hidden />
            NAVIGATION
          </p>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={{ display: 'block', marginBottom: '10px' }}>
              {label}
            </a>
          ))}
        </nav>

        <div>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>
            <span aria-hidden />
            CONNECT
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {siteConfig.contact.socials.instagram && (
              <a
                href={siteConfig.contact.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                Instagram <ArrowUpRight size={16} aria-hidden />
              </a>
            )}
            {siteConfig.contact.socials.facebook && (
              <a
                href={siteConfig.contact.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                Facebook <ArrowUpRight size={16} aria-hidden />
              </a>
            )}
            {siteConfig.contact.socials.youtube && (
              <a
                href={siteConfig.contact.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                YouTube <ArrowUpRight size={16} aria-hidden />
              </a>
            )}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="footer-social"
            >
              {siteConfig.contact.email} <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.brand.name}. ALL RIGHTS RESERVED.</span>
        <span>ENGINEERED FOR PEAK ATHLETIC PERFORMANCE.</span>
      </div>
    </footer>
  )
}
