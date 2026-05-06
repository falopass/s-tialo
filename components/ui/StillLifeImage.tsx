import { cn } from '@/lib/utils'

interface StillLifeImageProps {
  src: string
  alt: string
  aspectRatio?: '4:5' | '1:1' | '16:10' | '16:5'
  figLabel?: string
  className?: string
  priority?: boolean
}

const aspectMap = {
  '4:5': 'aspect-[4/5]',
  '1:1': 'aspect-square',
  '16:10': 'aspect-[16/10]',
  '16:5': 'aspect-[16/5]',
} as const

export function StillLifeImage({
  src,
  alt,
  aspectRatio = '4:5',
  figLabel,
  className,
  priority = false,
}: StillLifeImageProps) {
  return (
    <figure className={cn('relative w-full', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden',
          aspectMap[aspectRatio],
        )}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          loading={priority ? 'eager' : 'lazy'}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply',
            opacity: 0.4,
          }}
        />
      </div>
      {figLabel && (
        <figcaption className="mt-3 text-right font-display italic text-meta text-ink-faded tracking-ui">
          {figLabel}
        </figcaption>
      )}
    </figure>
  )
}
