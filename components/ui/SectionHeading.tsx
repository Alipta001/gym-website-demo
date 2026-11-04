interface SectionHeadingProps {
  eyebrow: string
  heading: React.ReactNode
  subtext?: string
  align?: 'left' | 'center'
}

import React from 'react'

export function SectionHeading({ eyebrow, heading, subtext, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading-block ${align === 'center' ? 'text-center' : ''}`}>
      <p className="eyebrow">
        <span aria-hidden />
        {eyebrow}
      </p>
      <h2>{heading}</h2>
      {subtext && <p className="section-subtext">{subtext}</p>}
    </div>
  )
}

