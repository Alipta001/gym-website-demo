import { ArrowUpRight } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { INSTAGRAM_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <a className="wordmark" href="#top" aria-label="REPMAX home">
            <strong>REPMAX</strong>
            <span>FITNESS STUDIO</span>
          </a>
          <p className="footer-tagline">
            Train with intent.<br />Live with strength.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="footer-social"
        >
          Instagram <ArrowUpRight size={16} aria-hidden />
        </a>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} REPMAX FITNESS STUDIO SODEPUR</span>
        <span>Made for the next version of you.</span>
      </div>
    </footer>
  )
}

