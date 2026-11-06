import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  secondary?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  external?: boolean
  disabled?: boolean
}

export function Button({
  children,
  href,
  secondary = false,
  onClick,
  type = 'button',
  className,
  external = false,
  disabled = false,
}: ButtonProps) {
  const classes = cn('btn', secondary ? 'btn-secondary' : 'btn-primary', className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick}
      >
        {children}
        <ArrowUpRight size={16} aria-hidden />
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
      <ArrowUpRight size={16} aria-hidden />
    </button>
  )
}

