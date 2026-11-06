import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/lib/utils'
import { MapPin, Phone, Clock, MessageSquare, Mail } from 'lucide-react'

export function ContactSection() {
  const { brand, contact, whatsapp } = siteConfig
  const whatsappUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    whatsapp.generalEnquiryPrompt
  )

  return (
    <section className="contact-section section" id="contact" aria-label="Contact and location">
      <div className="wrap contact-grid">
        <AnimatedSection direction="left">
          <p className="eyebrow">
            <span aria-hidden />
            07 / VISIT THE FACILITY
          </p>
          <h2>
            FIND YOUR<br />
            <em>TRAINING GROUND.</em>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '20px', maxWidth: '420px', lineHeight: 1.6 }}>
            Ready to experience the facility in person? Walk in during standard operating hours
            or schedule a guided orientation with our head coaches.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15} className="contact-details">
          <h3>{brand.name}</h3>

          {/* Address */}
          {contact.address.formattedLines.length > 0 && (
            <address style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <MapPin size={20} style={{ color: 'var(--primary-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                {contact.address.formattedLines.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </div>
            </address>
          )}

          {/* Business Hours */}
          {contact.businessHours && (
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <Clock size={20} style={{ color: 'var(--primary-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                <div>{contact.businessHours.weekdays}</div>
                <div>{contact.businessHours.saturday}</div>
                <div>{contact.businessHours.sunday}</div>
                {contact.businessHours.notes && (
                  <div style={{ color: 'var(--text-primary)', marginTop: '4px', fontWeight: 600 }}>
                    {contact.businessHours.notes}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Direct Communication */}
          <div className="contact-lines" style={{ marginBottom: '28px' }}>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '13px' }}
              >
                <Phone size={15} style={{ color: 'var(--primary-accent)' }} />
                <span>Call: {contact.displayPhone || contact.phone}</span>
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '13px' }}
              >
                <Mail size={15} style={{ color: 'var(--primary-accent)' }} />
                <span>{contact.email}</span>
              </a>
            )}
          </div>

          <div className="contact-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            {contact.address.googleMapsQueryUrl && (
              <Button href={contact.address.googleMapsQueryUrl} external>
                GET DIRECTIONS
              </Button>
            )}

            {contact.whatsappNumber && (
              <a
                className="btn btn-secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageSquare size={16} />
                WHATSAPP CHAT
              </a>
            )}

            {contact.socials.instagram && (
              <a
                className="instagram-link"
                href={contact.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                ◎ INSTAGRAM
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
