# REPMAX Fitness Studio — Sodepur

A premium, production-grade gym website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Getting Started

This project is configured to use **npm** as its package manager.

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Configure your WhatsApp enquiry phone number in `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=910000000000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Architecture Overview

```text
repmax-fitness-studio/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata & fonts
│   ├── page.tsx                # Homepage orchestration
│   ├── globals.css             # Design tokens & core styles
│   └── not-found.tsx           # Custom 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Dynamic blurred header with scroll tracking
│   │   ├── Footer.tsx          # Studio details, navigation & social links
│   │   └── MobileMenu.tsx      # Animated mobile navigation drawer
│   ├── sections/
│   │   ├── HeroSection.tsx     # Cinematic hero with parallax & staggered entrance
│   │   ├── AboutSection.tsx    # Brand story & key highlights
│   │   ├── MarqueeSection.tsx  # Infinite scrolling ticker
│   │   ├── FacilitiesSection.tsx # Interactive facility cards
│   │   ├── ProgramsSection.tsx # Alternating entrance program list
│   │   ├── WhyChooseUsSection.tsx # Value propositions & editorial typography
│   │   ├── StatsSection.tsx    # Animated numeric counters
│   │   ├── GallerySection.tsx  # Staggered media grid with fullscreen lightbox
│   │   ├── TestimonialsSection.tsx # Community feedback slider
│   │   ├── MembershipSection.tsx # Join CTA banner
│   │   └── ContactSection.tsx  # Location, directions & contact actions
│   └── ui/
│       ├── Button.tsx          # Reusable styled buttons
│       ├── AnimatedSection.tsx # Framer Motion scroll-reveal container
│       ├── ScrollProgress.tsx  # Electric-lime top progress bar
│       ├── GalleryLightbox.tsx # Fullscreen keyboard-accessible modal
│       ├── EnquiryModal.tsx    # Interactive membership enquiry modal
│       ├── WhatsAppButton.tsx  # Pulsing floating WhatsApp FAB
│       └── BackToTop.tsx       # Smooth back-to-top scroll button
├── data/                       # Structured content & static data
├── hooks/                      # Custom hooks (scroll progress, media queries)
├── lib/                        # Utility functions & constants
└── types/                      # TypeScript definitions
```

---

## 🎨 Color Palette & Branding

- **Background:** `#090909`
- **Surface:** `#141414`
- **Electric Lime:** `#C6FF00`
- **Muted Text:** `#A1A1AA`
- **White:** `#FFFFFF`

