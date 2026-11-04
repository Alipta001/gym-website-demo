'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { FacilitiesSection } from '@/components/sections/FacilitiesSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { MembershipSection } from '@/components/sections/MembershipSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { EnquiryModal } from '@/components/ui/EnquiryModal'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { BackToTop } from '@/components/ui/BackToTop'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="site-shell">
      <Navbar onJoinNow={() => setModalOpen(true)} />

      <main>
        <HeroSection onJoinNow={() => setModalOpen(true)} />
        <MarqueeSection />
        <AboutSection />
        <FacilitiesSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <StatsSection />
        <GallerySection />
        <TestimonialsSection />
        <MembershipSection onJoinNow={() => setModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer />

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
