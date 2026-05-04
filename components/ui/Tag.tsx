import { cn } from '@/lib/utils'

interface TagProps {
  variant?: 'yellow' | 'ink' | 'outline'
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  yellow: 'bg-yellow text-ink',
  ink: 'bg-ink text-cream',
  outline: 'border border-ink/50 text-ink-muted',
}

export function Tag({ variant = 'yellow', children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block font-medium text-meta uppercase tracking-ui px-3 py-1',
        'rounded-pill',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
