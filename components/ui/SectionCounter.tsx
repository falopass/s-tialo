import { Dot } from '@/components/ui/Dot'
import { cn } from '@/lib/utils'

interface SectionCounterProps {
  current: number
  total: number
  label?: string
  className?: string
}

export function SectionCounter({
  current,
  total,
  label,
  className,
}: SectionCounterProps) {
  const num = String(current).padStart(2, '0')
  const tot = String(total).padStart(2, '0')

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="font-mono text-meta text-ink-faded tracking-ui uppercase font-medium">
        {num} / {tot}
      </span>
      <Dot size="xs" variant="solid-yellow" />
      {label && (
        <span className="font-mono text-meta text-ink-faded tracking-ui uppercase font-medium">
          · {label}
        </span>
      )}
    </div>
  )
}
