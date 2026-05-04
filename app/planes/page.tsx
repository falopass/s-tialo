import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { BulletList } from '@/components/ui/BulletList'
import { FooterBar } from '@/components/layout/FooterBar'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { whatsappLink, emailLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Planes claros',
  description:
    'Planes de diseño web para pymes chilenas. Pago único desde $199.000. Hosting incluido año 1. Sin letras chicas, sin sorpresas.',
  alternates: {
    canonical: 'https://sitiazo.cl/planes/',
  },
}

const plans = [
  {
    name: 'BÁSICO',
    price: '$199.000',
    tag: 'PARA EMPEZAR',
    tagVariant: 'outline' as const,
    cardVariant: 'standard' as const,
    description:
      'Perfecto si necesitas tu primera página web. Simple, clara y lista en 5 días.',
    bullets: [
      'Página web de 1 pantalla',
      'Diseño mobile-first',
      'WhatsApp integrado',
      'SEO básico local',
      'Hosting incluido (año 1)',
      'Entrega en 5 días',
    ],
    cta: whatsappLink('basico'),
  },
  {
    name: 'RECOMENDADO',
    price: '$299.000',
    tag: 'MÁS PEDIDO',
    tagVariant: 'ink' as const,
    cardVariant: 'highlighted' as const,
    description:
      'Lo que la mayoría de pymes necesita. Varias pantallas, hosting y dominio incluidos.',
    bullets: [
      'Página web de 3-5 pantallas',
      'Diseño mobile-first premium',
      'WhatsApp + formulario',
      'SEO local avanzado',
      'Hosting incluido (año 1)',
      'Dominio personalizado .cl',
      'Manual de uso',
      'Entrega en 7 días',
    ],
    cta: whatsappLink('recomendado'),
  },
  {
    name: 'CATÁLOGO',
    price: '$449.000',
    tag: 'PREMIUM',
    tagVariant: 'outline' as const,
    cardVariant: 'premium' as const,
    description:
      'Para marcas con varios productos. Catálogo editorial y diseño destacado.',
    bullets: [
      'Página web de 5-10 pantallas',
      'Catálogo de productos (hasta 20)',
      'Diseño editorial destacado',
      'WhatsApp + formulario',
      'SEO local avanzado',
      'Hosting + dominio .cl (año 1)',
      'Manual + soporte 30 días',
      'Entrega en 10 días',
    ],
    cta: whatsappLink('catalogo'),
  },
]

const cardStyles = {
  standard: 'bg-cream border border-border-subtle',
  highlighted: 'bg-yellow border-2 border-ink shadow-none',
  premium: 'bg-cream-deep border border-border-strong',
}

export default function PlanesPage() {
  return (
    <div className="pt-[var(--spacing-9)] md:pt-[var(--spacing-11)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <Tag variant="outline" className="mb-8">PLANES · 2026</Tag>

        <div className="max-w-[var(--prose-max)] mb-16">
          <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
            Planes claros.<Dot size="hero" variant="solid-yellow" />
          </h1>

          <p className="font-body text-lead text-ink-muted leading-body">
            Sin humo, sin agencia gigante. Tres planes con todo incluido.
            Cada uno pago único + hosting año 1. Precios transparentes desde el día uno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${cardStyles[plan.cardVariant]} px-[var(--spacing-6)] py-[var(--spacing-7)] flex flex-col`}
            >
              <Tag variant={plan.tagVariant} className="mb-4 self-start">
                {plan.tag}
              </Tag>

              <h2 className="font-display font-bold text-display-sm text-ink leading-display mb-1">
                {plan.name}
                <Dot size="sm" variant="solid-yellow" className="ml-1 inline-block" />
              </h2>

              <p className="font-display font-bold text-display-md text-ink leading-display mb-1">
                {plan.price}
              </p>

              <p className="font-body text-body-sm text-ink-muted mb-4">
                Pago único + hosting año 1
              </p>

              <p className="font-body text-body-sm text-ink-muted leading-body mb-6">
                {plan.description}
              </p>

              <BulletList items={plan.bullets} className="mb-6 flex-1" />

              <a
                href={plan.cta}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-medium text-body px-8 py-4 transition-colors duration-200 group ${
                  plan.cardVariant === 'highlighted'
                    ? 'bg-ink text-cream hover:bg-ink-soft'
                    : 'bg-ink text-cream hover:bg-ink-soft'
                }`}
              >
                Elegir {plan.name} →
              </a>
            </div>
          ))}
        </div>
      </div>

      <FooterBar />

      <HairlineDivider />

      {/* FAQ específico de planes */}
      <section className="py-[var(--spacing-11)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-md text-ink leading-display mb-6">
              ¿No sabes cuál elegir?<Dot size="lg" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-8">
              Conversemos 30 minutos. Te ayudo a decidir cuál plan calza mejor con tu negocio.
              Sin compromiso, sin venta agresiva.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton href={whatsappLink('contacto')} external>
                Agenda una llamada →
              </PrimaryButton>
              <a
                href={emailLink('Consulta plan')}
                className="font-body text-body text-ink underline decoration-ink/30 underline-offset-4 hover:text-yellow hover:decoration-yellow transition-colors"
              >
                {process.env.NEXT_PUBLIC_EMAIL} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
