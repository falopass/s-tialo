import { Dot } from '@/components/ui/Dot'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'inverse' | 'mono'
  size?: 'sm' | 'md' | 'lg'
  showDot?: boolean
  className?: string
}

const variantColors = {
  default: { text: 'text-ink', accent: 'text-yellow' },
  inverse: { text: 'text-cream', accent: 'text-yellow' },
  mono: { text: 'text-ink', accent: 'text-ink' },
} as const

const textSizes = {
  sm: 'text-base',
  md: 'text-[var(--text-logo)]',
  lg: 'text-[var(--text-logo-hero)]',
} as const

export function Logo({
  variant = 'default',
  size = 'md',
  showDot = true,
  className,
}: LogoProps) {
  const colors = variantColors[variant]
  const dotVariant = variant === 'inverse' ? 'solid-yellow' : 'solid-yellow' as const

  return (
    <Link
      href="/"
      className={cn(
        'font-[var(--font-logo)] leading-none inline-flex items-baseline',
        textSizes[size],
        colors.text,
        className,
      )}
    >
      <span>sit</span>
      <span className="relative">
        <span>i</span>
        {showDot && (
          <Dot
            size="xs"
            variant={dotVariant}
            className="absolute -top-2.5 left-1/2 -translate-x-1/2"
          />
        )}
      </span>
      <span>azo</span>
      <span className={colors.accent}>
        <Dot size="xs" variant={dotVariant} className="inline-block align-middle mx-0.5" />
        cl
      </span>
    </Link>
  )
}
