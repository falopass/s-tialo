import { SectionCounter } from '@/components/ui/SectionCounter'
import { Dot } from '@/components/ui/Dot'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'

const steps = [
  {
    number: '01',
    title: 'Conversamos.',
    body: 'Te escribo por WhatsApp o agendamos 30 minutos por Google Meet. Te pregunto sobre tu negocio, tus clientes, qué quieres lograr con la web.',
    bullets: ['30 min', 'WhatsApp o Meet', 'Sin costo'],
    fig: 'fig. 01 — brief',
  },
  {
    number: '02',
    title: 'Cotizamos.',
    body: 'En 24 horas te mando una propuesta clara: qué plan calza, qué incluye, cuánto cuesta, cuándo está listo. Sin letras chicas.',
    bullets: ['Propuesta en 24 hrs', 'Sin letras chicas', 'Abono 50%'],
    fig: 'fig. 02 — cotización',
  },
  {
    number: '03',
    title: 'Diseñamos.',
    body: 'En 5-10 días te entrego la primera versión. La revisamos juntos por WhatsApp, hacemos ajustes incluidos, aprobamos.',
    bullets: ['5-10 días', 'Ajustes incluidos', 'Revisamos juntos'],
    fig: 'fig. 03 — diseño',
  },
  {
    number: '04',
    title: 'Publicamos.',
    body: 'Conecto el dominio, configuro hosting, instalo SEO local, te entrego el manual. Tu web online y vendiendo.',
    bullets: ['Dominio + hosting', 'SEO local', 'Manual de uso'],
    fig: 'fig. 04 — publicación',
  },
]

export function ComoFuncionaSteps() {
  return (
    <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <SectionCounter current={3} total={6} className="mb-8" />

        <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-6">
          Cómo funciona.<Dot size="lg" variant="solid-yellow" />
        </h2>

        <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-16">
          Un proceso de 4 pasos. Sin sorpresas, sin enredos, sin reuniones eternas.
        </p>

        <div className="space-y-[var(--spacing-9)] md:space-y-[var(--spacing-10)]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-7)] items-center ${
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

                <h3 className="font-display font-bold text-display-md text-ink leading-display mb-4">
                  {step.title}
                </h3>

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

      <FooterBar />
    </section>
  )
}
