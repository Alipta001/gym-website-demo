'use client'

import { MARQUEE_ITEMS } from '@/lib/constants'

// Duplicate for seamless loop
const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

export function MarqueeSection() {
  return (
    <div className="marquee-section" aria-hidden>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

