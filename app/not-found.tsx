import Link from 'next/link'
import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { PrimaryButton } from '@/components/ui/PrimaryButton'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-11)] pb-[var(--spacing-12)] min-h-screen flex items-center">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="max-w-[var(--prose-max)]">
          <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
            Esta página<br />no existe.<Dot size="hero" variant="solid-yellow" />
          </h1>
          <p className="font-body text-lead text-ink-muted leading-body mb-8">
            Pero tu página sí puede existir. Volvé al inicio o contáctanos.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <PrimaryButton href="/">Volver al inicio →</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
