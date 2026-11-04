'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { EnquiryModal } from '@/components/ui/EnquiryModal'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { BackToTop } from '@/components/ui/BackToTop'

interface SiteShellProps {
  children: React.ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="site-shell">
      <Navbar onJoinNow={() => setModalOpen(true)} />

      {/* Inject onJoinNow into interactive section children via a context */}
      <ModalContext.Provider value={{ openModal: () => setModalOpen(true) }}>
        {children}
      </ModalContext.Provider>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

import { createContext, useContext } from 'react'

interface ModalContextType {
  openModal: () => void
}

export const ModalContext = createContext<ModalContextType>({ openModal: () => {} })
export const useModal = () => useContext(ModalContext)

