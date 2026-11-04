import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Check } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  'A motivating workout environment.',
  'Dedicated fitness training.',
  'A supportive fitness community.',
  'Training for different fitness levels.',
]

export function AboutSection() {
  return (
    <section className="intro section" id="about" aria-label="About REPMAX">
      <div className="wrap intro-inner">
        {/* Image — enters from left */}
        <AnimatedSection direction="left" className="intro-media image-frame">
          <Image
            src="/repmax-training.png"
            alt="Athlete completing a strength workout at REPMAX"
            width={600}
            height={750}
            className="intro-img"
            loading="lazy"
          />
        </AnimatedSection>

        {/* Copy — enters from right */}
        <AnimatedSection direction="right" className="intro-copy" delay={0.1}>
          <p className="eyebrow"><span aria-hidden />01 / THE REPMAX MINDSET</p>
          <h2>
            MORE THAN A GYM.<br />
            <em>IT&apos;S A MINDSET.</em>
          </h2>
          <p>
            REPMAX FITNESS STUDIO SODEPUR is a place for people who want to improve their
            strength, fitness and lifestyle. A motivating environment, dedicated training
            and a community that keeps you moving forward.
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
            &ldquo;Every rep brings you closer to the person you want to become.&rdquo;
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  )
}

