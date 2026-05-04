import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Así Trabajamos',
  description:
    'Proceso de 4 pasos para tener tu página web. Sin sorpresas, sin enredos, sin reuniones eternas.',
  alternates: {
    canonical: 'https://sitiazo.cl/como-funciona/',
  },
}

const steps = [
  {
    number: '01',
    title: 'Conversamos.',
    body: 'Te escribo por WhatsApp o agendamos 30 minutos por Google Meet. Te pregunto sobre tu negocio, tus clientes, qué quieres lograr con la web. Sin tecnicismos. Salgo con un brief claro de qué necesitas.',
    bullets: ['30 min', 'WhatsApp o Meet', 'Sin costo'],
    fig: 'fig. 01 — conversamos',
  },
  {
    number: '02',
    title: 'Cotizamos.',
    body: 'En 24 horas te mando una propuesta clara: qué plan calza con tu negocio, qué incluye, cuánto cuesta, cuánto demora. Sin letras chicas. Si te tinca, abonas el 50% y arrancamos.',
    bullets: ['Propuesta en 24 hrs', 'Sin letras chicas', 'Abono 50% para arrancar'],
    fig: 'fig. 02 — cotizamos',
  },
  {
    number: '03',
    title: 'Diseñamos.',
    body: 'En 5-10 días según el plan, te entrego la primera versión. La revisamos juntos por WhatsApp, hacemos ajustes (incluidos), aprobamos. Cero sorpresas: cada decisión la conversamos.',
    bullets: ['5-10 días', 'Ajustes incluidos', 'Aprobación tuya antes de publicar'],
    fig: 'fig. 03 — diseñamos',
  },
  {
    number: '04',
    title: 'Publicamos.',
    body: 'Conecto el dominio, configuro hosting, instalo SEO local, te entrego el manual de cómo subir contenido nuevo. Tu web online y vendiendo. Mantención mensual incluida.',
    bullets: ['Dominio + hosting', 'SEO local', 'Manual de uso', 'Mantención mes 1'],
    fig: 'fig. 04 — publicamos',
  },
]

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-11)] pb-[var(--spacing-10)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <Tag variant="outline" className="mb-8">PROCESO · 2026</Tag>

          <div className="max-w-[var(--prose-max)] mb-16">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Así<br />trabajamos.<Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Un proceso de 4 pasos. Sin sorpresas, sin enredos, sin reuniones eternas.
            </p>
          </div>
        </div>
      </section>

      <FooterBar />
      <HairlineDivider />

      {/* Steps */}
      <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="space-y-[var(--spacing-10)] md:space-y-[var(--spacing-12)]">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8)] items-center ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-display-md text-ink-faded font-medium tracking-mono tabular-nums">
                      {step.number}
                    </span>
                    <Dot size="sm" variant="solid-yellow" />
                  </div>

                  <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-4">
                    {step.title}
                  </h2>

                  <p className="font-body text-body text-ink-muted leading-body mb-4 max-w-[var(--prose-max)]">
                    {step.body}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    {step.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="flex items-center gap-2 font-body text-body-sm text-ink-muted"
                      >
                        <Dot size="xs" variant="solid-yellow" />
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <StillLifePlaceholder
                    aspectRatio="1:1"
                    figLabel={step.fig}
                    className="max-w-sm mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterBar />
      <HairlineDivider />

      {/* Timeline */}
      <section className="py-[var(--spacing-11)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-12">
            Timeline completo.<Dot size="lg" variant="solid-yellow" />
          </h2>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            {['Día 1', 'Día 2', 'Día 3-7', 'Día 8'].map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <span className="font-mono text-display-sm text-ink-faded font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Dot size="sm" variant="solid-yellow" />
                <span className="font-body text-body-sm text-ink-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* CTA */}
      <section className="py-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-xl text-ink leading-display mb-6">
              ¿Empezamos?<Dot size="xl" variant="solid-yellow" />
            </h2>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Hablemos por WhatsApp →
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
