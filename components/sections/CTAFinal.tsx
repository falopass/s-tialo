import { Dot } from '@/components/ui/Dot'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { whatsappLink, emailLink } from '@/lib/contact'

export function CTAFinal() {
  return (
    <section className="py-[var(--spacing-12)] md:py-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-9)] lg:gap-[var(--spacing-10)]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display font-bold text-display-xl text-ink leading-display tracking-display mb-4">
              Tu pyme merece<br />un sitiazo.
              <Dot size="xl" variant="solid-yellow" />
            </h2>

            <p className="font-body text-lead text-ink-muted leading-body mb-8 max-w-[var(--prose-max)]">
              Conversemos por WhatsApp. 30 minutos sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <PrimaryButton href={whatsappLink('home')} external>
                Hablemos por WhatsApp →
              </PrimaryButton>
              <SecondaryButton href={emailLink()} external>
                {process.env.NEXT_PUBLIC_EMAIL || 'hola@sitiazo.cl'} →
              </SecondaryButton>
            </div>

            <div className="flex items-center gap-3">
              <Dot size="sm" variant="solid-yellow" />
              <span className="font-body text-body-sm text-ink-muted">
                Respondemos en horas. Sin compromiso, sin venta agresiva.
              </span>
            </div>
          </div>

          {/* Right: Still-life */}
          <div className="flex items-center justify-center">
            <StillLifePlaceholder
              aspectRatio="4:5"
              figLabel="fig. 04 — construyamos"
              className="max-w-md lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
