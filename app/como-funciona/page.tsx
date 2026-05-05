import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Así Trabajamos',
  description: 'Proceso de 4 pasos para tener tu página web. Sin sorpresas, sin enredos.',
  alternates: { canonical: 'https://sitiazo.cl/como-funciona/' },
}

const steps = [
  {
    number: '01',
    title: 'Brief express',
    desc: 'Nos mandas WhatsApp + referencias.',
  },
  {
    number: '02',
    title: 'Diseño claro',
    desc: 'Orden, textos y estructura.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    desc: 'Lo armamos y afinamos contigo.',
  },
  {
    number: '04',
    title: 'Publicación',
    desc: 'Sale online en 7 días.',
  },
]

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mb-8">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Cómo funciona.
              <Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Un proceso corto, claro y pensado para salir online rápido.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <span className="font-mono text-display-sm text-ink-faded font-medium tracking-mono mb-2">
                  {step.number}
                </span>
                <h3 className="font-display font-semibold text-display-sm text-ink leading-tight mb-1">
                  {step.title}
                </h3>
                <p className="font-body text-body-sm text-ink-muted leading-body">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline visual */}
          <div className="relative flex items-center justify-between gap-4">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-divider -z-10" />
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center gap-2 bg-cream px-2">
                <Dot size="sm" variant="solid-yellow" />
                <span className="font-body text-micro uppercase tracking-ui text-ink-faded">
                  {step.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* CTA */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-4">
              ¿Empezamos?
              <Dot size="lg" variant="solid-yellow" />
            </h2>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Hablemos por WhatsApp
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
