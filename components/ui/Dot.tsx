import { cn } from '@/lib/utils'

interface DotProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  variant?: 'solid-yellow' | 'solid-ink' | 'outline-yellow' | 'outline-ink'
  pulse?: boolean
  className?: string
}

const sizeMap = {
  xs: 'w-[6px] h-[6px]',
  sm: 'w-[10px] h-[10px]',
  md: 'w-[14px] h-[14px]',
  lg: 'w-[20px] h-[20px]',
  xl: 'w-[32px] h-[32px]',
  hero: 'w-[48px] h-[48px]',
} as const

const variantMap = {
  'solid-yellow': 'bg-yellow border-yellow',
  'solid-ink': 'bg-ink border-ink',
  'outline-yellow': 'bg-transparent border-2 border-yellow',
  'outline-ink': 'bg-transparent border-2 border-ink',
} as const

export function Dot({
  size = 'sm',
  variant = 'solid-yellow',
  pulse = false,
  className,
}: DotProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full',
        sizeMap[size],
        variantMap[variant],
        pulse && 'animate-pulse',
        className,
      )}
      aria-hidden="true"
    />
  )
}
