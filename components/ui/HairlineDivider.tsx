import { cn } from '@/lib/utils'

interface HairlineDividerProps {
  className?: string
}

export function HairlineDivider({ className }: HairlineDividerProps) {
  return (
    <hr
      className={cn(
        'border-0 h-px w-full',
        'bg-divider',
        className,
      )}
      aria-hidden="true"
    />
  )
}
