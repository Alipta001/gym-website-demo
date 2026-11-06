import { ArrowUpRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { programs } from '@/data/programs'

export function ProgramsSection() {
  return (
    <section className="section" id="programs" aria-label="Training programs">
      <div className="wrap">
        <AnimatedSection direction="up">
          <p className="eyebrow">
            <span aria-hidden />
            03 / SPECIALIZED DISCIPLINES
          </p>
          <div className="section-heading">
            <h2>
              FIND YOUR<br />
              <em>TRAINING STYLE.</em>
            </h2>
            <p className="section-subtext">
              Engineered programming designed around progressive overload, biomechanics, and endurance.
            </p>
          </div>
        </AnimatedSection>

        <div className="program-grid">
          {programs.map(({ number, title, category, description, duration }, i) => (
            <AnimatedSection
              key={number}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 0.06}
            >
              <article className="program-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{number}</span>
                    {category && (
                      <span
                        style={{
                          fontSize: '10px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                        }}
                      >
                        {category}
                      </span>
                    )}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                  {duration && (
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                      ⏱ {duration}
                    </span>
                  )}
                  <a href="#membership" className="program-link">
                    Explore <ArrowUpRight size={16} aria-hidden />
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
