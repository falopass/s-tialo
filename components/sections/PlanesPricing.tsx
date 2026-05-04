import { SectionCounter } from '@/components/ui/SectionCounter'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { BulletList } from '@/components/ui/BulletList'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { FooterBar } from '@/components/layout/FooterBar'
import { whatsappLink } from '@/lib/contact'

const plans = [
  {
    name: 'BÁSICO',
    price: '$199.000',
    tag: 'PARA EMPEZAR',
    tagVariant: 'outline' as const,
    cardVariant: 'standard' as const,
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
    price: '$349.000',
    tag: 'MÁS PEDIDO',
    tagVariant: 'ink' as const,
    cardVariant: 'highlighted' as const,
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
  highlighted: 'bg-yellow border-2 border-ink',
  premium: 'bg-cream border border-border-strong',
}

export function PlanesPricing() {
  return (
    <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <SectionCounter current={5} total={6} className="mb-8" />

        <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-6">
          Planes claros.<Dot size="lg" variant="solid-yellow" />
        </h2>

        <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-4">
          Sin humo, sin agencia gigante. Precios transparentes desde el día uno.
        </p>

        <div className="mb-12">
          <PrimaryButton href="/planes">Ver planes completos →</PrimaryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${cardStyles[plan.cardVariant]} px-[var(--spacing-6)] py-[var(--spacing-7)] flex flex-col`}
            >
              <Tag variant={plan.tagVariant} className="mb-4 self-start">
                {plan.tag}
              </Tag>

              <h3 className="font-display font-bold text-display-sm text-ink leading-display mb-1">
                {plan.name}
                <Dot size="sm" variant="solid-yellow" className="ml-1 inline-block" />
              </h3>

              <p className="font-display font-bold text-display-md text-ink leading-display mb-1">
                {plan.price}
              </p>

              <p className="font-body text-body-sm text-ink-muted mb-6">
                Pago único + hosting año 1
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
    </section>
  )
}
