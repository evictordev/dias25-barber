import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps {
  href?: string
  children: ReactNode
  variant?: 'neon' | 'ghost' | 'ink'
  className?: string
  external?: boolean
  disabled?: boolean
}

const styles = {
  neon: 'bg-neon text-ink border-neon hover:bg-paper hover:border-paper',
  ghost: 'bg-transparent text-paper border-paper/60 hover:bg-paper hover:text-ink',
  ink: 'bg-ink text-neon border-ink hover:bg-paper hover:text-ink hover:border-paper',
}

export function Button({ href, children, variant = 'neon', className = '', external, disabled }: ButtonProps) {
  const cls = `group inline-flex min-h-12 items-center justify-center gap-3 border-2 px-6 py-3 font-display text-lg uppercase tracking-wide transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${disabled ? 'pointer-events-none opacity-40' : ''} ${className}`
  const content = (
    <>
      {children}
      <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
    </>
  )
  return (
    <a href={disabled ? undefined : href} aria-disabled={disabled} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {content}
    </a>
  )
}
