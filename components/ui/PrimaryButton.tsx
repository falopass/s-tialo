import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function PrimaryButton({
  href,
  children,
  className,
  external = false,
}: PrimaryButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 bg-ink text-cream font-medium text-body px-8 py-4',
    'hover:bg-ink-soft transition-colors duration-200',
    'group',
    className,
  )

  const content = (
    <>
      {children}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </>
  )

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
