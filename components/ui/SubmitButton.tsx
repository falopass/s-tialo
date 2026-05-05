import { cn } from '@/lib/utils'

interface SubmitButtonProps {
  children: React.ReactNode
  className?: string
}

export function SubmitButton({ children, className }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        'inline-flex items-center gap-2 bg-ink text-cream font-medium text-body px-8 py-4',
        'hover:bg-ink-soft transition-colors duration-200',
        className,
      )}
    >
      {children}
      <span className="inline-block" aria-hidden="true">→</span>
    </button>
  )
}
