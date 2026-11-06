import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  brand: {
    name: 'YOUR FITNESS BRAND',
    shortName: 'YOUR BRAND',
    tagline: 'STRENGTH & PERFORMANCE',
    establishedYear: 2024,
    description:
      'A high-performance training facility built for strength, functional conditioning, and relentless personal progress.',
    logo: {
      text: 'YOUR BRAND',
      subtext: 'FITNESS CLUB',
      imageSrc: '/icons/logo.svg',
      showLogoImage: true,
    },
  },

  hero: {
    eyebrow: 'PREMIUM FITNESS & STRENGTH FACILITY',
    headingLine1: 'BUILT BY',
    headingHighlight1: 'DISCIPLINE.',
    headingLine2: 'DEFINED BY',
    headingHighlight2: 'STRENGTH.',
    subtitle:
      'Transform your mind and body with elite equipment, science-backed programming, and an unyielding culture of dedication.',
    primaryCtaText: 'START YOUR JOURNEY',
    secondaryCtaText: 'EXPLORE FACILITIES',
    backgroundImage: '/images/hero/hero-bg.png',
    sideVerticalText: 'ELEVATE · OVERCOME · TRANSFORM',
  },

  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+1 (555) 019-2834',
    displayPhone: '+1 (555) 019-2834',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15550192834',
    displayWhatsapp: '+1 (555) 019-2834',
    email: 'info@yourfitnessbrand.com',
    address: {
      street: '100 Performance Way',
      suite: 'Suite 400',
      city: 'Metro City',
      state: 'NY',
      postalCode: '10001',
      country: 'United States',
      formattedLines: [
        '100 Performance Way, Suite 400',
        'Metro City, NY 10001',
        'United States',
      ],
      googleMapsQueryUrl: 'https://maps.google.com/?q=fitness+club',
    },
    businessHours: {
      weekdays: 'Monday – Friday: 05:30 AM – 10:30 PM',
      saturday: 'Saturday: 06:00 AM – 09:00 PM',
      sunday: 'Sunday: 07:00 AM – 08:00 PM',
      notes: 'Open 365 days a year. 24/7 keycard access available on select plans.',
    },
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
    },
  },

  whatsapp: {
    generalEnquiryPrompt:
      'Hi! I would like to enquire about training and memberships at your fitness club.',
    membershipEnquiryPrompt:
      'Hi! I would like to schedule a tour and enquire about membership options.',
    floatingButtonPrompt:
      'Hi! I found your website and would like to ask a quick question.',
  },

  seo: {
    title: 'Universal Premium Gym Website Template | High-Performance Fitness',
    description:
      'Universal, high-performance gym website template. Designed for strength facilities, bodybuilding clubs, functional fitness studios, and modern athletic centers.',
    keywords: [
      'gym',
      'fitness studio',
      'strength training',
      'personal training',
      'weight management',
      'athletic performance',
      'gym membership',
    ],
    themeColor: '#090909',
  },

  membership: {
    eyebrow: 'YOUR NEXT CHAPTER',
    title: 'READY TO MAKE',
    titleHighlight: 'YOUR MOVE?',
    subtitle:
      'Step into a community dedicated to excellence. Select your membership tier or speak with our training advisors.',
    showPricing: true,
    pricingNote: '* All plans include locker access and complimentary fitness assessment.',
  },

  /**
   * Control which sections are displayed on the website.
   * If a section is set to false, it is completely omitted from both the DOM and navigation.
   */
  sections: {
    hero: true,
    marquee: true,
    about: true,
    facilities: true,
    programs: true,
    whyUs: true,
    statistics: true,
    gallery: true,
    testimonials: true,
    membership: true,
    contact: true,
  },
}
