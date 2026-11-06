'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Check, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { membershipPlans } from '@/data/memberships'
import { buildWhatsAppUrl, generateMembershipWhatsAppMessage } from '@/lib/utils'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  initialPlan?: string
}

export function EnquiryModal({ isOpen, onClose, initialPlan }: EnquiryModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [goal, setGoal] = useState('Strength & Muscle Building')
  const [plan, setPlan] = useState(initialPlan || 'Standard Membership')
  const [time, setTime] = useState('Morning (6 AM – 12 PM)')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [generatedUrl, setGeneratedUrl] = useState('')
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (initialPlan) {
      setPlan(initialPlan)
    }
  }, [initialPlan])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      closeRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
      setErrors({})
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const validate = () => {
    const errs: { name?: string; phone?: string } = {}
    if (!name.trim() || name.trim().length < 2) {
      errs.name = 'Please provide your full name.'
    }
    const cleanNum = phone.replace(/[^\d+]/g, '')
    if (!cleanNum || cleanNum.length < 7) {
      errs.phone = 'Please provide a valid phone number (min 7 digits).'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submitEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return

    const waText = generateMembershipWhatsAppMessage({
      gymName: siteConfig.brand.name,
      name,
      phone,
      goal,
      plan,
      preferredTime: time,
      message,
    })

    const url = buildWhatsAppUrl(siteConfig.contact.whatsappNumber, waText)
    setGeneratedUrl(url)
    setSubmitted(true)

    // Open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(url, '_blank')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              className="modal-close"
              aria-label="Close enquiry form"
              onClick={onClose}
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="modal-success">
                <div className="modal-success-icon">
                  <Check size={28} />
                </div>
                <h2 id="enquiry-title">
                  ENQUIRY <em>PREPARED.</em>
                </h2>
                <p>
                  Your message was prepared for WhatsApp. If WhatsApp did not open automatically,
                  click below to send your enquiry now.
                </p>
                {generatedUrl && (
                  <a
                    href={generatedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary w-full"
                    style={{ marginBottom: '12px' }}
                  >
                    CONTINUE TO WHATSAPP <ArrowUpRight size={16} />
                  </a>
                )}
                <button
                  className="btn btn-secondary w-full"
                  onClick={() => {
                    setSubmitted(false)
                    onClose()
                  }}
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">
                  <span aria-hidden />
                  {siteConfig.brand.name} MEMBERSHIP
                </p>
                <h2 id="enquiry-title">
                  MAKE YOUR <br />
                  <em>MOVE.</em>
                </h2>

                <form onSubmit={submitEnquiry} noValidate>
                  <label>
                    Your Full Name *
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errors.name && (
                      <span style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', textTransform: 'none' }}>
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </label>

                  <label>
                    Contact Phone (WhatsApp) *
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    {errors.phone && (
                      <span style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', textTransform: 'none' }}>
                        <AlertCircle size={12} /> {errors.phone}
                      </span>
                    )}
                  </label>

                  <label>
                    Interested Membership Plan
                    <select
                      name="plan"
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                    >
                      {membershipPlans.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="General Enquiry">General Tour / Enquiry</option>
                    </select>
                  </label>

                  <label>
                    Primary Fitness Goal
                    <select
                      name="goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                    >
                      <option value="Strength & Power Lifting">Strength & Power Lifting</option>
                      <option value="Muscle Hypertrophy">Muscle Hypertrophy & Bodybuilding</option>
                      <option value="Weight Loss & Conditioning">Weight Loss & Conditioning</option>
                      <option value="Functional Movement & Mobility">Functional Movement & Mobility</option>
                      <option value="Personal Training & Coaching">1-on-1 Personal Training</option>
                      <option value="General Health & Longevity">General Health & Longevity</option>
                    </select>
                  </label>

                  <label>
                    Preferred Training Time
                    <select
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    >
                      <option value="Early Morning (5:30 AM – 8:30 AM)">Early Morning (5:30 AM – 8:30 AM)</option>
                      <option value="Midday (11:00 AM – 2:00 PM)">Midday (11:00 AM – 2:00 PM)</option>
                      <option value="Evening Peak (5:00 PM – 9:00 PM)">Evening Peak (5:00 PM – 9:00 PM)</option>
                      <option value="Late Night (9:00 PM+)">Late Night (9:00 PM+)</option>
                      <option value="Flexible / Weekends Only">Flexible / Weekends Only</option>
                    </select>
                  </label>

                  <label>
                    Notes or Questions (Optional)
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="Any injuries, experience level, or specific questions?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>

                  <button type="submit" className="btn btn-primary w-full" style={{ marginTop: '8px' }}>
                    SUBMIT TO WHATSAPP <ArrowUpRight size={16} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
