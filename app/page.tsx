import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'
import { whatsappLink, emailLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Páginas web que sí venden',
  description:
    'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $199.000. Mobile-first, sin agencia grande, sin pagar de más.',
  alternates: {
    canonical: 'https://sitiazo.cl',
  },
}

export default function HomePage() {
  return (
    <section className="relative pt-[var(--spacing-9)] md:pt-[var(--spacing-11)] pb-[var(--spacing-10)] md:pb-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-9)] lg:gap-[var(--spacing-10)]">
          <div className="flex flex-col justify-center">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Páginas web<br />que sí venden.
              <Dot size="hero" variant="solid-yellow" className="ml-2 inline-block" />
            </h1>

            <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-8">
              Diseñamos sitios para pymes chilenas que quieren aparecer en el celular de sus
              clientes y vender más. Sin humo, sin agencia gigante, sin pagar de más.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <PrimaryButton href={whatsappLink('home')} external>
                Hablemos por WhatsApp →
              </PrimaryButton>
              <SecondaryButton href="/planes">
                Ver planes →
              </SecondaryButton>
            </div>

            <div className="flex items-center gap-3">
              <Dot size="sm" variant="solid-yellow" />
              <span className="font-body text-body-sm text-ink-muted">
                Listo en 7 días · Desde $199.000 · 100% mobile-first
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <StillLifePlaceholder
              aspectRatio="4:5"
              figLabel="fig. 01 — caso roma crochet"
              className="max-w-md lg:max-w-none"
            />
          </div>
        </div>
      </div>

      <FooterBar />
    </section>
  )
}
