import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { cn } from '@/lib/utils'

export function FooterBar() {
  return (
    <div className="w-full">
      <HairlineDivider />
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-4 gap-3">
          <div className="flex items-center gap-3">
            <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium shrink-0">
              TRABAJAMOS CON
            </span>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-logo text-body-sm text-ink-muted">
                ROMA CROCHET
              </span>
              <span className="font-body text-micro uppercase tracking-ui text-ink-faded border border-dashed border-ink-faded px-2 py-0.5 rounded-pill">
                PRÓXIMO CASO
              </span>
              <span className="font-body text-micro uppercase tracking-ui text-ink-faded border border-dashed border-ink-faded px-2 py-0.5 rounded-pill">
                PRÓXIMO CASO
              </span>
              <Link
                href="/contacto"
                className="font-body text-micro uppercase tracking-ui text-yellow hover:text-yellow-deep transition-colors duration-200 font-medium"
              >
                TU MARCA AQUÍ →
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 text-ink-faded font-body text-micro tracking-ui uppercase shrink-0">
            <span>ENTREGA — 7 DÍAS</span>
            <Dot size="xs" variant="solid-yellow" />
            <span>DESDE $199K</span>
            <Dot size="xs" variant="solid-yellow" />
            <span>MOBILE-FIRST</span>
          </div>

          <div className="flex items-center gap-2 text-ink-faded font-body text-micro uppercase tracking-ui">
            <span className="hidden md:inline">DESLIZA</span>
            <span className="hidden md:inline">↓</span>
            <Dot size="xs" variant="solid-yellow" />
          </div>
        </div>
      </div>
      <HairlineDivider />
    </div>
  )
}
