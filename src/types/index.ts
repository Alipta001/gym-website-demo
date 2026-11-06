export interface NavItem {
  label: string
  href: string
  sectionId?: string
}

export interface FacilityItem {
  number: string
  title: string
  tagline: string
  description: string
  image: string
  features?: string[]
}

export interface ProgramItem {
  number: string
  title: string
  category?: string
  description: string
  features?: string[]
  intensity?: 'Moderate' | 'High' | 'Extreme'
  duration?: string
}

export interface MembershipPlan {
  id: string
  name: string
  badge?: string
  popular?: boolean
  price?: string
  period?: string
  description: string
  features: string[]
  ctaText?: string
}

export interface GalleryItem {
  src: string
  alt: string
  category?: string
  caption?: string
  span?: 'row' | 'col'
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
  achievement?: string
  avatar?: string
}

export interface StatItem {
  value: string
  label: string
  suffix?: string
  sublabel?: string
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  youtube?: string
  twitter?: string
  linkedin?: string
}

export interface BusinessHours {
  weekdays: string
  saturday: string
  sunday: string
  notes?: string
}

export interface AddressInfo {
  street: string
  suite?: string
  city: string
  state: string
  postalCode: string
  country: string
  formattedLines: string[]
  googleMapsQueryUrl: string
  googleMapsEmbedUrl?: string
}

export interface SectionsVisibility {
  hero: boolean
  marquee: boolean
  about: boolean
  facilities: boolean
  programs: boolean
  whyUs: boolean
  statistics: boolean
  gallery: boolean
  testimonials: boolean
  membership: boolean
  contact: boolean
}

export interface SiteConfig {
  brand: {
    name: string
    shortName: string
    tagline: string
    establishedYear?: number
    description: string
    logo: {
      text: string
      subtext: string
      imageSrc?: string
      showLogoImage?: boolean
    }
  }
  hero: {
    eyebrow: string
    headingLine1: string
    headingHighlight1: string
    headingLine2: string
    headingHighlight2: string
    subtitle: string
    primaryCtaText: string
    secondaryCtaText: string
    backgroundImage: string
    sideVerticalText: string
  }
  contact: {
    phone: string
    displayPhone: string
    whatsappNumber: string
    displayWhatsapp: string
    email: string
    address: AddressInfo
    businessHours: BusinessHours
    socials: SocialLinks
  }
  whatsapp: {
    generalEnquiryPrompt: string
    membershipEnquiryPrompt: string
    floatingButtonPrompt: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage?: string
    themeColor: string
  }
  membership: {
    eyebrow: string
    title: string
    titleHighlight: string
    subtitle: string
    showPricing: boolean
    pricingNote?: string
  }
  sections: SectionsVisibility
}

export type ThemePreset =
  | 'electric-lime'
  | 'crimson-red'
  | 'neon-orange'
  | 'pure-gold'
  | 'cyber-blue'
  | 'monochrome'

export interface ThemeColors {
  primaryBg: string
  secondaryBg: string
  surface: string
  surface2: string
  primaryAccent: string
  secondaryAccent: string
  textPrimary: string
  textSecondary: string
  borderColor: string
  fontHeading: string
  fontBody: string
}

export interface ThemeConfig {
  activePreset: ThemePreset
  presets: Record<ThemePreset, ThemeColors>
  customColors?: Partial<ThemeColors>
}
