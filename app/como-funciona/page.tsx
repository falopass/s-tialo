import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { whatsappLink, siteUrl } from '@/lib/config'
import { processSteps } from '@/content/process'

export const metadata: Metadata = {
  title: 'Cómo funciona — tu página web lista en 7 días',
  description: 'El proceso para crear la página web de tu negocio: brief, diseño, desarrollo y publicación. 4 pasos, 7 días, sin enredos.',
  alternates: { canonical: siteUrl('/como-funciona/') },
  openGraph: {
    title: 'Cómo funciona — tu página web en 7 días | Sitiazo.cl',
    description: 'El proceso para crear la página web de tu negocio: brief, diseño, desarrollo y publicación. 4 pasos, 7 días, sin enredos.',
    url: siteUrl('/como-funciona/'),
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Así Trabajamos — Sitiazo.cl',
      },
    ],
  },
}

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-5xl mb-8">
            <h1 className="font-display font-bold text-display-lg md:text-display-xl text-ink leading-display tracking-display mb-6 whitespace-nowrap">
              Cómo funciona.
              <Dot size="xl" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              4 pasos. 7 días. Tu sitiazo en línea sin enredos.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-10">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <span className="font-mono text-display-sm text-ink-faded font-medium tracking-mono mb-2">
                  {step.number}
                </span>
                <h2 className="font-display font-semibold text-display-sm text-ink leading-tight mb-1">
                  {step.title}
                </h2>
                <p className="font-body text-body-sm text-ink-muted leading-body">
                  {step.desc}
                </p>
                <span className="font-display text-meta tracking-ui text-yellow mt-2">
                  {step.time}
                </span>
                <div className="mt-6 flex min-h-[240px] items-end justify-center md:min-h-[280px]">
                  <img
                    src={step.image}
                    alt={`Composición visual para ${step.title}`}
                    className="h-56 w-full object-contain object-bottom sm:h-64 md:h-72"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Timeline visual */}
          <div className="relative flex items-center justify-between gap-4">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-divider -z-10" />
            {processSteps.map((step) => (
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
