import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { BulletList } from '@/components/ui/BulletList'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Planes claros',
  description:
    'Planes de diseño web para pymes chilenas. Pago único desde $199.000. Sin letras chicas, sin sorpresas.',
  alternates: { canonical: 'https://sitiazo.cl/planes/' },
}

const plans = [
  {
    name: 'BASE',
    price: '$199.000',
    description: 'Una página, CTA a WhatsApp, estructura simple.',
    bullets: [
      'Diseño editorial a medida',
      'Responsive mobile-first',
      'Formulario o botón WhatsApp',
      'Entrega en 7 días hábiles',
    ],
    cta: whatsappLink('plan base'),
  },
  {
    name: 'NEGOCIO',
    price: '$299.000',
    tag: 'Más pedido',
    description: 'Hasta 5 secciones, diseño editorial, mobile-first.',
    bullets: [
      'Hasta 5 secciones',
      'Diseño editorial a medida',
      'Optimización SEO básica',
      'Entrega en 10 días hábiles',
    ],
    cta: whatsappLink('plan negocio'),
  },
  {
    name: 'CATÁLOGO',
    price: '$449.000',
    description: 'Hasta 10 productos o servicios, fichas y formularios.',
    bullets: [
      'Hasta 10 productos o servicios',
      'Fichas de producto o servicio',
      'Filtros y búsqueda básica',
      'Entrega en 14 días hábiles',
    ],
    cta: whatsappLink('plan catalogo'),
  },
]

export default function PlanesPage() {
  return (
    <div className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-7)] lg:gap-[var(--spacing-9)] mb-[var(--spacing-6)]">
          <div className="lg:col-span-4">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Planes claros.
              <Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Sin humo, sin agencia gigante: eliges, avanzamos y sales online.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[var(--spacing-6)]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-border-subtle bg-cream-deep p-[var(--spacing-6)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                  {plan.name}
                </span>
                {plan.tag && (
                  <span className="flex items-center gap-2 font-body text-micro uppercase tracking-ui text-ink-faded">
                    <Dot size="xs" variant="solid-yellow" />
                    {plan.tag}
                  </span>
                )}
              </div>

              <p className="font-display font-bold text-display-md text-ink leading-display mb-1">
                {plan.price}
              </p>

              <HairlineDivider className="my-4" />

              <p className="font-body text-body text-ink-muted leading-body mb-4">
                {plan.description}
              </p>

              <BulletList items={plan.bullets} className="mb-6 flex-1" />

              <a
                href={plan.cta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium text-body px-6 py-3 transition-colors duration-200 bg-ink text-cream hover:bg-ink-soft"
              >
                Elegir {plan.name} →
              </a>
            </div>
          ))}
        </div>
      </div>

      <HairlineDivider />

      {/* FAQ específico */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-md text-ink leading-display mb-4">
              ¿No sabes cuál elegir?
              <Dot size="md" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-6">
              Conversemos 30 minutos. Te ayudo a decidir cuál plan calza mejor con tu negocio.
            </p>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Agenda una llamada
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
