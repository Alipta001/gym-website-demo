import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Strips formatting characters from phone numbers for WhatsApp URL compatibility.
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[^\d]/g, '')
}

/**
 * Generates an encoded WhatsApp click-to-chat URL.
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const sanitized = cleanPhoneNumber(phone)
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`
}

export interface MembershipEnquiryData {
  gymName: string
  name: string
  phone: string
  goal?: string
  plan?: string
  preferredTime?: string
  message?: string
}

export function generateMembershipWhatsAppMessage(data: MembershipEnquiryData): string {
  const lines = [
    `Hi ${data.gymName}! I would like to enquire about membership.`,
    '',
    `• Name: ${data.name.trim()}`,
    `• Phone: ${data.phone.trim()}`,
  ]

  if (data.plan && data.plan !== 'General Enquiry') {
    lines.push(`• Preferred Plan: ${data.plan}`)
  }
  if (data.goal) {
    lines.push(`• Primary Goal: ${data.goal}`)
  }
  if (data.preferredTime) {
    lines.push(`• Preferred Training Time: ${data.preferredTime}`)
  }
  if (data.message && data.message.trim()) {
    lines.push(`• Note / Questions: ${data.message.trim()}`)
  }

  lines.push('', 'Sent via website enquiry form.')
  return lines.join('\n')
}
