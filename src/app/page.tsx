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
import { siteConfig } from '@/config/site'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined)

  const handleOpenModal = (planName?: string) => {
    setSelectedPlan(planName)
    setModalOpen(true)
  }

  const { sections } = siteConfig

  return (
    <div className="site-shell">
      <Navbar onJoinNow={() => handleOpenModal()} />

      <main>
        {sections.hero && <HeroSection onJoinNow={() => handleOpenModal()} />}
        {sections.marquee && <MarqueeSection />}
        {sections.about && <AboutSection />}
        {sections.facilities && <FacilitiesSection />}
        {sections.programs && <ProgramsSection />}
        {sections.whyUs && <WhyChooseUsSection />}
        {sections.statistics && <StatsSection />}
        {sections.gallery && <GallerySection />}
        {sections.testimonials && <TestimonialsSection />}
        {sections.membership && (
          <MembershipSection onJoinNow={(plan) => handleOpenModal(plan)} />
        )}
        {sections.contact && <ContactSection />}
      </main>

      <Footer />

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
