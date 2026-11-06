import type { TestimonialItem, StatItem } from '@/types'

/**
 * CUSTOMER TESTIMONIALS
 * Provide genuine member feedback here.
 * If empty (testimonials = []), the testimonials section will automatically hide itself.
 */
export const testimonials: TestimonialItem[] = [
  {
    quote:
      'Joining this gym completely rewired my approach to strength. The culture, equipment quality, and standard of coaching are unmatched by any typical commercial gym.',
    name: 'Alex Rivera',
    role: 'Competitive Powerlifter & Member',
    achievement: 'Added 75 lbs to total in 6 months',
  },
  {
    quote:
      'The atmosphere here demands focus. No crowded waiting lines for racks, no generic music — just serious athletes pushing past their previous limits every single day.',
    name: 'Sarah Chen',
    role: 'Hybrid Athlete',
    achievement: 'Marathon PR & Strength PR in same season',
  },
  {
    quote:
      'The coaching team actually understands biomechanics and periodization. If you want structured programming rather than guessing your workouts, this is the place.',
    name: 'Marcus Vance',
    role: 'Executive & Strength Member',
    achievement: 'Down 22 lbs while hitting all-time PRs',
  },
]

/**
 * KEY STUDIO STATISTICS
 * Update with genuine figures from your facility.
 * If you do not have verified statistics yet, set sections.statistics = false in src/config/site.ts.
 */
export const stats: StatItem[] = [
  { value: '500', suffix: '+', label: 'Active Members', sublabel: 'Dedicated community' },
  { value: '12000', suffix: ' sq ft', label: 'Training Space', sublabel: 'State-of-the-art facility' },
  { value: '18', suffix: '+', label: 'Olympic Lifting Platforms', sublabel: 'Competition grade' },
  { value: '10', suffix: '+', label: 'Elite Coaches', sublabel: 'Certified strength specialists' },
]
