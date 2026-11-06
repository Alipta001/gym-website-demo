import { siteConfig } from './site'
import type { NavItem } from '@/types'

export const allNavItems: (NavItem & { key: keyof typeof siteConfig.sections })[] = [
  { label: 'About', href: '#about', sectionId: 'about', key: 'about' },
  { label: 'Facilities', href: '#facilities', sectionId: 'facilities', key: 'facilities' },
  { label: 'Programs', href: '#programs', sectionId: 'programs', key: 'programs' },
  { label: 'Why Us', href: '#why-us', sectionId: 'why-us', key: 'whyUs' },
  { label: 'Gallery', href: '#gallery', sectionId: 'gallery', key: 'gallery' },
  { label: 'Membership', href: '#membership', sectionId: 'membership', key: 'membership' },
  { label: 'Contact', href: '#contact', sectionId: 'contact', key: 'contact' },
]

/**
 * Returns only the navigation items whose corresponding sections are enabled in siteConfig.sections.
 */
export function getNavItems(): NavItem[] {
  return allNavItems
    .filter((item) => siteConfig.sections[item.key])
    .map(({ label, href, sectionId }) => ({ label, href, sectionId }))
}

