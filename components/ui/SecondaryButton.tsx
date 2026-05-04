import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SecondaryButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function SecondaryButton({
  href,
  children,
  className,
  external = false,
}: SecondaryButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 text-ink font-medium text-body',
    'underline decoration-ink/30 underline-offset-4',
    'hover:text-yellow hover:decoration-yellow transition-colors duration-200',
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
