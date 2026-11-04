import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ADDRESS_LINES, INSTAGRAM_URL, MAPS_URL } from '@/lib/constants'

export function ContactSection() {
  return (
    <section className="contact-section section" id="contact" aria-label="Contact and location">
      <div className="wrap contact-grid">
        <AnimatedSection direction="left">
          <p className="eyebrow"><span aria-hidden />08 / COME TRAIN WITH US</p>
          <h2>FIND YOUR<br /><em>TRAINING GROUND.</em></h2>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15} className="contact-details">
          <h3>REPMAX FITNESS STUDIO SODEPUR</h3>
          <address>
            {ADDRESS_LINES.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </address>
          <div className="contact-lines">
            <span>Phone number — coming soon</span>
            <span>Opening hours — coming soon</span>
          </div>
          <div className="contact-actions">
            <Button href={MAPS_URL} external>GET DIRECTIONS</Button>
            <a
              className="instagram-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              ◎ INSTAGRAM
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

