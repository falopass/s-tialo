import { SectionCounter } from '@/components/ui/SectionCounter'
import { Dot } from '@/components/ui/Dot'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink, emailLink } from '@/lib/contact'

export function HeroSection() {
  return (
    <section className="relative pt-[var(--spacing-9)] md:pt-[var(--spacing-11)] pb-[var(--spacing-10)] md:pb-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <SectionCounter current={1} total={6} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-9)] lg:gap-[var(--spacing-10)]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Páginas web<br />que sí venden.
              <Dot size="hero" variant="solid-yellow" className="ml-2 inline-block" />
            </h1>

            <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-8">
              Diseñamos sitios para pymes chilenas que quieren aparecer en el celular de sus clientes
              y vender más. Sin humo, sin agencia gigante, sin pagar de más.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <PrimaryButton href="/planes">Ver planes →</PrimaryButton>
              <SecondaryButton href={emailLink('Cotización Sitiazo')} external>
                {process.env.NEXT_PUBLIC_EMAIL || 'hola@sitiazo.cl'} →
              </SecondaryButton>
            </div>

            <div className="flex items-center gap-3">
              <Dot size="sm" variant="solid-yellow" />
              <span className="font-body text-body-sm text-ink-muted">
                Listo en 7 días · Desde $199.000 · 100% mobile-first
              </span>
            </div>
          </div>

          {/* Right: Still-life */}
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
