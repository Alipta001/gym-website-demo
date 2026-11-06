import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

const highlights = [
  'Competition-grade training equipment and specialized bars.',
  'Science-backed strength and conditioning protocols.',
  'Uncompromising culture of discipline and accountability.',
  'Purpose-built spaces for all strength and fitness levels.',
]

export function AboutSection() {
  return (
    <section className="intro section" id="about" aria-label={`About ${siteConfig.brand.name}`}>
      <div className="wrap intro-inner">
        {/* Image — enters from left */}
        <AnimatedSection direction="left" className="intro-media image-frame">
          <Image
            src="/images/about/about-gym.png"
            alt={`${siteConfig.brand.name} athlete training with intent`}
            width={600}
            height={750}
            className="intro-img"
            loading="lazy"
          />
        </AnimatedSection>

        {/* Copy — enters from right */}
        <AnimatedSection direction="right" className="intro-copy" delay={0.1}>
          <p className="eyebrow">
            <span aria-hidden />
            01 / THE ATHLETIC MINDSET
          </p>
          <h2>
            MORE THAN A GYM.<br />
            <em>IT&apos;S A CULTURE.</em>
          </h2>
          <p>
            {siteConfig.brand.name} is designed for people who take their health, power, and
            athletic longevity seriously. No gimmicks, no wasted movement — just high-performance
            training in an atmosphere that demands your absolute best.
          </p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <blockquote>
            &ldquo;Every single rep builds the person you will become tomorrow.&rdquo;
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  )
}
