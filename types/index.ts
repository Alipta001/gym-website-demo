export interface NavItem {
  label: string
  href: string
}

export interface FacilityItem {
  number: string
  title: string
  description: string
  image: string
}

export interface ProgramItem {
  number: string
  title: string
  description: string
}

export interface GalleryItem {
  src: string
  alt: string
  span?: 'row' | 'col'
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
}

export interface StatItem {
  value: string
  label: string
  suffix?: string
}

