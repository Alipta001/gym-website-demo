import { siteConfig } from '@/config/site'

export const SITE_NAME = siteConfig.brand.name
export const SITE_TAGLINE = siteConfig.brand.tagline
export const SITE_FULL_NAME = `${siteConfig.brand.name} · ${siteConfig.brand.tagline}`

export const WHATSAPP_NUMBER = siteConfig.contact.whatsappNumber
export const INSTAGRAM_URL = siteConfig.contact.socials.instagram || 'https://instagram.com'
export const MAPS_URL = siteConfig.contact.address.googleMapsQueryUrl

export const ADDRESS_LINES = siteConfig.contact.address.formattedLines

export const MARQUEE_ITEMS = [
  'STRENGTH',
  'DISCIPLINE',
  'CONSISTENCY',
  'PERFORMANCE',
  'RESILIENCE',
  'POWER',
  'COMMUNITY',
  'MINDSET',
]
