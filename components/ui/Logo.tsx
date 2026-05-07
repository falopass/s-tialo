import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'default' | 'inverse' | 'mono'
  size?: 'sm' | 'md' | 'lg'
  showDot?: boolean
  className?: string
}

const heightClasses = {
  sm: 'h-[90px]',
  md: 'h-[110px]',
  lg: 'h-[140px]',
} as const

export function Logo({
  variant = 'default',
  size = 'md',
  className,
}: LogoProps) {
  const src = variant === 'inverse'
    ? '/images/logo/logo-white-letras.png'
    : '/images/logo/logo-black-letras.webp'

  return (
    <Link
      href="/"
      aria-label="Sitiazo.cl — volver al inicio"
      className={cn(
        'relative inline-flex shrink-0 leading-none',
        heightClasses[size],
        className,
      )}
    >
      <img
        src={src}
        alt="Sitiazo.cl"
        className="h-full w-auto object-contain object-left"
        loading="eager"
      />
    </Link>
  )
}
