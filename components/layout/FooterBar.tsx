import Link from 'next/link'
import { HairlineDivider } from '@/components/ui/HairlineDivider'

const clients = [
  { name: 'ROMA CROCHET', href: '/casos/roma-crochet', isLink: true },
  { name: 'PRONTO TU PYME', href: null, isLink: false },
  { name: 'PRÓXIMAMENTE', href: null, isLink: false },
  { name: 'TU MARCA AQUÍ', href: '/contacto', isLink: true },
]

export function FooterBar() {
  return (
    <div className="w-full">
      <HairlineDivider />
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-6">
            <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium shrink-0">
              TRABAJAMOS CON
            </span>
            <div className="flex items-center gap-5">
              {clients.map((c, i) => (
                <span key={c.name} className="flex items-center gap-5">
                  {c.isLink && c.href ? (
                    <Link
                      href={c.href}
                      className="font-logo text-body-sm text-ink-muted hover:text-ink transition-colors duration-200"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="font-logo text-body-sm text-ink-faded">
                      {c.name}
                    </span>
                  )}
                  {i < clients.length - 1 && (
                    <span className="text-ink-faded text-body-sm">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-ink-faded font-body text-micro tracking-ui uppercase shrink-0">
            <span>ENTREGA — 7 DÍAS</span>
            <span className="text-yellow">·</span>
            <span>DESDE $199K</span>
            <span className="text-yellow">·</span>
            <span>MOBILE-FIRST</span>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-3 py-4">
          <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
            TRABAJAMOS CON
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {clients.map((c) => (
              <span key={c.name}>
                {c.isLink && c.href ? (
                  <Link
                    href={c.href}
                    className="font-logo text-body-sm text-ink-muted hover:text-ink transition-colors duration-200"
                  >
                    {c.name}
                  </Link>
                ) : (
                  <span className="font-logo text-body-sm text-ink-faded">
                    {c.name}
                  </span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-ink-faded font-body text-micro tracking-ui uppercase">
            <span>ENTREGA — 7 DÍAS</span>
            <span className="text-yellow">·</span>
            <span>DESDE $199K</span>
            <span className="text-yellow">·</span>
            <span>MOBILE-FIRST</span>
          </div>
        </div>
      </div>
      <HairlineDivider />
    </div>
  )
}
