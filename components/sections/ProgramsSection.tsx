import { ArrowUpRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { programs } from '@/data/programs'

export function ProgramsSection() {
  return (
    <section className="section" id="programs" aria-label="Training programs">
      <div className="wrap">
        <AnimatedSection direction="up">
          <p className="eyebrow"><span aria-hidden />03 / FIND YOUR FLOW</p>
          <div className="section-heading">
            <h2>FIND YOUR<br /><em>TRAINING STYLE.</em></h2>
            <p className="section-subtext">Suggested program categories for every kind of goal.</p>
          </div>
        </AnimatedSection>

        <div className="program-grid">
          {programs.map(({ number, title, description }, i) => (
            <AnimatedSection
              key={number}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 0.08}
            >
              <article className="program-card">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#membership" className="program-link">
                  Explore <ArrowUpRight size={16} aria-hidden />
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

