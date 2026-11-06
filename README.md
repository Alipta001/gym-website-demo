# Universal Premium Gym Website Template

A commercial, production-ready Next.js (App Router) website template built for fitness clubs, bodybuilding gyms, functional training facilities, personal training studios, and premium athletic clubs.

Designed to be **100% brand-independent** and **customizable in 10–15 minutes** by modifying a few configuration files without touching HTML structure or core layouts.

---

## ⚡ Quick 10-Minute Customization Checklist

When onboarding a new gym client, follow these steps in order:

1. **Brand & Identity**: Edit `src/config/site.ts` (`brand.name`, `brand.tagline`, `brand.logo`).
2. **Color Palette**: In `src/config/theme.ts`, choose from 6 instant presets (`electric-lime`, `crimson-red`, `neon-orange`, `pure-gold`, `cyber-blue`, `monochrome`) or supply custom hex colors.
3. **Contact & WhatsApp**: Update WhatsApp digits and address in `src/config/site.ts` and `.env.local`.
4. **Sections Visibility**: Toggle any unused sections (`about`, `facilities`, `programs`, `statistics`, `membership`, `testimonials`, `gallery`) in `siteConfig.sections`.
5. **Photographs**: Replace hero, about, facilities, and gallery images in `public/images/`.
6. **Deploy**: Push to GitHub and deploy to Vercel in 1 click.

---

## 🏗️ Architecture Overview

```text
gym-website-template/
│
├── public/
│   ├── images/
│   │   ├── hero/            # Hero background photography
│   │   ├── about/           # About & athletic lifestyle imagery
│   │   ├── facilities/      # Training zones & apparatus photos
│   │   ├── programs/        # Program cards artwork
│   │   └── gallery/         # Fullscreen lightbox photo gallery
│   ├── icons/               # SVG logo marks and favicon assets
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, dynamic theme CSS injection, SEO metadata
│   │   ├── page.tsx         # Clean page orchestrator with section toggles
│   │   ├── globals.css      # Core design tokens and editorial CSS
│   │   └── not-found.tsx    # 404 error page
│   │
│   ├── components/
│   │   ├── animations/      # Framer Motion text reveal & parallax utilities
│   │   ├── layout/          # Dynamic Navbar, MobileMenu, Footer
│   │   ├── sections/        # Modular, independently toggleable sections
│   │   └── ui/              # Buttons, enquiry modal, lightbox, WhatsApp floating pill
│   │
│   ├── config/
│   │   ├── site.ts          # Centralized gym information, copy, hours, and section toggles
│   │   ├── theme.ts         # Color presets, typography tokens, CSS variable engine
│   │   └── navigation.ts    # Filtered dynamic navigation
│   │
│   ├── data/
│   │   ├── facilities.ts    # Facility equipment and training floor categories
│   │   ├── programs.ts      # Workout disciplines and classes
│   │   ├── memberships.ts   # Pricing tiers, features, and custom pricing support
│   │   ├── gallery.ts       # Photo showcase with categories and captions
│   │   └── testimonials.ts  # Member stories and studio stats counters
│   │
│   ├── hooks/               # useScrollProgress, useMediaQuery
│   ├── lib/                 # utils, WhatsApp URL generators, constants
│   └── types/               # Strict TypeScript definitions
│
├── .env.example             # Sample environment variables
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env.local
```
Configure your client's contact phone and WhatsApp number in `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=15550192834
NEXT_PUBLIC_PHONE_NUMBER="+1 (555) 019-2834"
NEXT_PUBLIC_SITE_URL=https://yourgymdomain.com
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🎨 1. How to Change Brand Colors & Themes

Open `src/config/theme.ts`.

### Option A: Use a Built-In Preset
Change `activePreset` to one of the 6 curated presets:

```typescript
export const themeConfig: ThemeConfig = {
  activePreset: 'crimson-red', // Options: 'electric-lime' | 'crimson-red' | 'neon-orange' | 'pure-gold' | 'cyber-blue' | 'monochrome'
  presets: themePresets,
  customColors: {},
}
```

| Preset | Aesthetic | Best Suited For |
|---|---|---|
| `electric-lime` | Deep luxury black + High-voltage neon lime (`#c6ff00`) | Modern strength & conditioning, athletic performance |
| `crimson-red` | Obsidian black + Aggressive crimson red (`#ff2247`) | Powerlifting, hardcore bodybuilding, combat sports |
| `neon-orange` | Deep charcoal + Energetic neon orange (`#ff6200`) | CrossFit, functional fitness, HIIT studios |
| `pure-gold` | Matte black + Prestige gold (`#d4af37`) | High-end luxury athletic clubs, boutique private studios |
| `cyber-blue` | Midnight navy + Electric cyan (`#00e5ff`) | 24/7 tech-enabled fitness centers, modern gyms |
| `monochrome` | Minimalist dark charcoal + Stark white (`#ffffff`) | Contemporary editorial fitness, Pilates & strength |

### Option B: Override Specific Colors
You can override any specific color without changing the entire preset:

```typescript
export const themeConfig: ThemeConfig = {
  activePreset: 'electric-lime',
  presets: themePresets,
  customColors: {
    primaryAccent: '#00ff88',  // Custom emerald neon
    primaryBg: '#050505',
  },
}
```

The theme engine automatically generates CSS custom properties (`--primary-accent`, `--primary-bg`, `--surface`, etc.) and injects them server-side, preventing flash of unstyled content.

---

## 🏷️ 2. How to Change Gym Name & Business Information

Open `src/config/site.ts`. All identity fields are located in one place:

```typescript
export const siteConfig: SiteConfig = {
  brand: {
    name: 'IRON VAULT ATHLETICS',
    shortName: 'IRON VAULT',
    tagline: 'FORGED UNDER TENSION',
    description: 'Premier powerlifting and strength facility located in Austin, Texas.',
    logo: {
      text: 'IRON VAULT',
      subtext: 'STRENGTH CLUB',
      imageSrc: '/icons/logo.svg',
      showLogoImage: true,
    },
  },
  // ...
}
```

Updating this automatically modifies the navigation wordmark, hero headline, about section copy, footer branding, contact details, WhatsApp welcome messages, and SEO/OpenGraph tags.

---

## 🖼️ 3. How to Replace Logo and Photographs

### Logo Replacement
- **Abstract SVG**: Replace `public/icons/logo.svg` with your client's SVG vector mark.
- **Image Logo**: Place a PNG logo in `public/icons/` and set `brand.logo.imageSrc` in `src/config/site.ts`.

### Photograph Replacement
Place your client's photos in `public/images/`:

- **Hero Background**: `public/images/hero/hero-bg.png` (Recommended: 1920x1080px or higher, landscape)
- **About Gym Photo**: `public/images/about/about-gym.png` (Recommended: 800x1000px, portrait)
- **Facilities Photos**: `public/images/facilities/facility-1.png` to `facility-4.png` (Recommended: 800x600px)
- **Gallery Photos**: `public/images/gallery/gallery-1.png` to `gallery-6.png`

Paths can also be customized directly in `src/data/facilities.ts` and `src/data/gallery.ts`.

---

## 🏋️ 4. How to Update Programs and Facilities

### Facilities (`src/data/facilities.ts`)
Add, edit, or reorder facility zones:

```typescript
export const facilities: FacilityItem[] = [
  {
    number: '01',
    title: 'Olympic Lifting Platforms',
    tagline: 'Competition Grade',
    description: 'Eleiko bars and calibrated plates designed for heavy clean & jerks.',
    image: '/images/facilities/facility-1.png',
    features: ['10 Competition Platforms', 'Drop pads', 'Chalk stations'],
  },
  // ...
]
```

### Programs (`src/data/programs.ts`)
Add or edit training styles:

```typescript
export const programs: ProgramItem[] = [
  {
    number: '01',
    title: 'Powerlifting Team',
    category: 'Competition Prep',
    description: 'Structured peaking cycles for USAPL and IPF competitors.',
    features: ['Peaking cycles', 'Video review', 'Attempt selection'],
    intensity: 'High',
    duration: '90 min',
  },
  // ...
]
```

---

## 💳 5. How to Update Membership Plans & Pricing

Open `src/data/memberships.ts`:

```typescript
export const membershipPlans: MembershipPlan[] = [
  {
    id: 'standard',
    name: 'Open Floor Access',
    badge: 'FLEXIBLE',
    price: '$65',
    period: '/ month',
    description: 'Full access to weights and cardio during standard hours.',
    features: [
      'Unrestricted weights area access',
      'Locker rooms & showers',
      'Free movement screen',
    ],
    ctaText: 'ENQUIRE NOW',
  },
  // ...
]
```

### Hiding Prices
If the gym prefers not to disclose pricing publicly, set `showPricing: false` in `src/config/site.ts`:

```typescript
membership: {
  showPricing: false, // Replaces dollar amounts with "CUSTOM TIER PRICING"
}
```

---

## 💬 6. How to Configure WhatsApp Enquiries

The template features an integrated WhatsApp routing system that works on mobile and desktop without external backend dependencies.

Configure routing in `src/config/site.ts`:

```typescript
contact: {
  whatsappNumber: '15550192834', // Digits only, country code included
},
whatsapp: {
  generalEnquiryPrompt: 'Hi! I would like to enquire about membership.',
  floatingButtonPrompt: 'Hi! I found your website and have a quick question.',
}
```

When a visitor submits the membership modal, it validates their Name and Phone number before generating a pre-filled WhatsApp message:

```text
Hi [Gym Name]! I would like to enquire about membership.

• Name: Alex Morgan
• Phone: +1 555-019-2834
• Preferred Plan: Pro Performance
• Primary Goal: Strength & Hypertrophy
• Preferred Training Time: Early Morning (5:30 AM – 8:30 AM)
• Note / Questions: Can I book a tour this Thursday?

Sent via website enquiry form.
```

---

## 🎛️ 7. How to Enable or Disable Sections

Open `src/config/site.ts` and edit the `sections` object:

```typescript
export const siteConfig: SiteConfig = {
  // ...
  sections: {
    hero: true,
    marquee: true,
    about: true,
    facilities: true,
    programs: true,
    whyUs: true,
    statistics: true,     // Set to false if client has no verified statistics
    gallery: true,
    testimonials: true,   // Automatically hides if testimonials array is empty
    membership: true,
    contact: true,
  },
}
```

When a section is disabled:
1. It is completely removed from the page DOM (improving load speed and SEO).
2. The navbar links in `src/config/navigation.ts` automatically omit the disabled section.

---

## 🚀 8. How to Deploy to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Add environment variables in the Vercel Dashboard:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: (e.g. `15550192834`)
   - `NEXT_PUBLIC_PHONE_NUMBER`: (e.g. `+1 (555) 019-2834`)
5. Click **Deploy**. Vercel will build and serve the website globally with automatic SSL and edge caching.

---

## 🧪 Testing & Verification Commands

```bash
# Verify TypeScript types
npm run typecheck

# Build for production
npm run build

# Start production server locally
npm start
```

---

## 📄 License
Commercial license for creating custom client websites.
