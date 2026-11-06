import type { MembershipPlan } from '@/types'

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'standard',
    name: 'Standard Membership',
    price: '$59',
    period: '/ month',
    description:
      'Ideal for independent athletes who want access to premier equipment in an intense, motivating atmosphere.',
    features: [
      'Full floor access during all standard operating hours',
      'Free locker and luxury shower amenities',
      'Initial functional movement assessment',
      'Access to open lifting turf and functional rigs',
    ],
    ctaText: 'ENQUIRE ABOUT STANDARD',
  },
  {
    id: 'pro-performance',
    name: 'Pro Performance',
    badge: 'MOST POPULAR',
    popular: true,
    price: '$99',
    period: '/ month',
    description:
      'Our flagship tier designed for members committed to serious athletic growth, recovery, and peak performance.',
    features: [
      '24/7 keycard access 365 days a year',
      'Unlimited recovery lounge, infrared sauna & cold plunge',
      'Monthly InBody body composition scan & progress review',
      '1 complimentary monthly private coaching session',
      '10% discount on supplements and apparel',
    ],
    ctaText: 'CLAIM PRO MEMBERSHIP',
  },
  {
    id: 'elite-coaching',
    name: 'Elite Coaching Tier',
    badge: 'VIP MENTORSHIP',
    price: '$199',
    period: '/ month',
    description:
      'The comprehensive coaching experience with bespoke training, continuous nutritional guidance, and dedicated mentors.',
    features: [
      'Everything included in Pro Performance',
      'Weekly 1-on-1 private personal training sessions',
      'Fully personalized periodized training program',
      'Bespoke nutritional strategy & macro tracking',
      'Direct WhatsApp access to your dedicated trainer',
    ],
    ctaText: 'APPLY FOR ELITE COACHING',
  },
]

