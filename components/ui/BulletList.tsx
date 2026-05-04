import { Dot } from '@/components/ui/Dot'
import { cn } from '@/lib/utils'

interface BulletListProps {
  items: string[]
  className?: string
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <Dot size="sm" variant="solid-yellow" className="mt-1.5 shrink-0" />
          <span className="font-body text-body text-ink">{item}</span>
        </li>
      ))}
    </ul>
  )
}
