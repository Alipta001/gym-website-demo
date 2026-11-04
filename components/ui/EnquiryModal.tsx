'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Check } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      closeRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const submitEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const msg = `Hi REPMAX, I would like to enquire about membership.\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nGoal: ${form.get('goal')}\nPreferred Time: ${form.get('time')}\nMessage: ${form.get('message')}`
    setSubmitted(true)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
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
                  ENQUIRY <em>READY.</em>
                </h2>
                <p>Your WhatsApp enquiry is ready to send. We&apos;ll be in touch soon.</p>
                <button
                  className="btn btn-primary w-full mt-4"
                  onClick={() => { setSubmitted(false); onClose() }}
                >
                  CLOSE <ArrowUpRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">
                  <span aria-hidden />
                  MEMBERSHIP ENQUIRY
                </p>
                <h2 id="enquiry-title">
                  MAKE YOUR <br />
                  <em>MOVE.</em>
                </h2>
                <form onSubmit={submitEnquiry} noValidate>
                  <label>
                    Full name
                    <input required name="name" placeholder="Your name" autoComplete="name" />
                  </label>
                  <label>
                    Phone number
                    <input required type="tel" name="phone" placeholder="Your phone number" autoComplete="tel" />
                  </label>
                  <label>
                    Fitness goal
                    <select required name="goal" defaultValue="">
                      <option value="" disabled>Select a goal</option>
                      <option>Strength &amp; muscle building</option>
                      <option>Weight management</option>
                      <option>General fitness</option>
                      <option>Personal training</option>
                    </select>
                  </label>
                  <label>
                    Preferred training time
                    <input required name="time" placeholder="e.g. Morning / Evening" />
                  </label>
                  <label>
                    Message <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span>
                    <textarea name="message" placeholder="Tell us a little about your goals" rows={3} />
                  </label>
                  <button className="btn btn-primary w-full mt-2" type="submit">
                    SEND ON WHATSAPP <ArrowUpRight size={16} />
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

