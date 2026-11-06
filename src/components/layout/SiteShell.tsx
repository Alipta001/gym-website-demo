'use client'

import { useState, createContext, useContext } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { EnquiryModal } from '@/components/ui/EnquiryModal'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { BackToTop } from '@/components/ui/BackToTop'

interface SiteShellProps {
  children: React.ReactNode
}

interface ModalContextType {
  openModal: (planName?: string) => void
}

export const ModalContext = createContext<ModalContextType>({ openModal: () => {} })
export const useModal = () => useContext(ModalContext)

export function SiteShell({ children }: SiteShellProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined)

  const openModal = (planName?: string) => {
    setSelectedPlan(planName)
    setModalOpen(true)
  }

  return (
    <div className="site-shell">
      <Navbar onJoinNow={() => openModal()} />

      <ModalContext.Provider value={{ openModal }}>
        {children}
      </ModalContext.Provider>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
      />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

