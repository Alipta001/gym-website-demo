import { Check, ArrowUpRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { membershipPlans } from '@/data/memberships'
import { siteConfig } from '@/config/site'

interface MembershipSectionProps {
  onJoinNow: (planName?: string) => void
}

export function MembershipSection({ onJoinNow }: MembershipSectionProps) {
  const { membership } = siteConfig

  return (
    <section className="join-section" id="membership" aria-label="Membership options and enquiry">
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
          <AnimatedSection direction="up">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              <span aria-hidden />
              {membership.eyebrow}
              <span aria-hidden />
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h2>
              {membership.title} <br />
              <em>{membership.titleHighlight}</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="lead" style={{ marginInline: 'auto' }}>
              {membership.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Pricing Cards Grid */}
        <div className="membership-grid">
          {membershipPlans.map((plan, i) => (
            <AnimatedSection
              key={plan.id}
              direction="up"
              delay={0.15 + i * 0.1}
            >
              <article
                className={`membership-card ${plan.popular ? 'membership-card--popular' : ''}`}
                aria-label={plan.name}
              >
                <div>
                  {plan.badge && (
                    <div className="membership-badge">{plan.badge}</div>
                  )}

                  <div className="membership-header">
                    <h3>{plan.name}</h3>
                    <p className="membership-desc">{plan.description}</p>
                  </div>

                  {membership.showPricing && plan.price ? (
                    <div className="membership-price-wrap">
                      <span className="membership-price">{plan.price}</span>
                      {plan.period && (
                        <span className="membership-period">{plan.period}</span>
                      )}
                    </div>
                  ) : (
                    <div className="membership-price-wrap">
                      <span className="membership-price" style={{ fontSize: '32px' }}>
                        CUSTOM
                      </span>
                      <span className="membership-period">tier pricing</span>
                    </div>
                  )}

                  <ul className="membership-features" aria-label={`${plan.name} features`}>
                    {plan.features.map((feat) => (
                      <li key={feat} className="membership-feature-item">
                        <Check size={16} aria-hidden />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-primary w-full"
                  onClick={() => onJoinNow(plan.name)}
                >
                  {plan.ctaText || 'ENQUIRE NOW'} <ArrowUpRight size={16} aria-hidden />
                </button>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {membership.pricingNote && (
          <p className="membership-note">{membership.pricingNote}</p>
        )}
      </div>
    </section>
  )
}
