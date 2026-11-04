import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface MembershipSectionProps {
  onJoinNow: () => void
}

export function MembershipSection({ onJoinNow }: MembershipSectionProps) {
  return (
    <section className="join-section" id="membership" aria-label="Membership enquiry">
      <div className="wrap join-content">
        <AnimatedSection direction="up">
          <p className="eyebrow eyebrow--dark"><span aria-hidden />06 / YOUR NEXT REP</p>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.1}>
          <h2>READY TO MAKE<br /><em>YOUR MOVE?</em></h2>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <p>Your fitness journey doesn&apos;t begin someday. It begins today.</p>
          <button className="btn join-btn" onClick={onJoinNow}>
            ENQUIRE ABOUT MEMBERSHIP
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}

