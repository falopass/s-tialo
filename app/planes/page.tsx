import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Dot } from '@/components/ui/Dot'
import { BulletList } from '@/components/ui/BulletList'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import {
  whatsappLink,
  PLANS_ARRAY,
  PLANS,
  EXTRAS,
  STARTING_PRICE,
  SITE,
  siteUrl,
} from '@/lib/config'

export const metadata: Metadata = {
  title: 'Planes claros',
  description: `Planes de diseño web para pymes chilenas. Pago único desde ${STARTING_PRICE}. Sin letras chicas, sin sorpresas.`,
  alternates: { canonical: siteUrl('/planes/') },
  openGraph: {
    title: 'Planes claros | Sitiazo.cl',
    description: `Planes de diseño web para pymes chilenas. Pago único desde ${STARTING_PRICE}. Sin letras chicas, sin sorpresas.`,
    url: siteUrl('/planes/'),
    images: [
      {
        url: '/og-image-planes.png',
        width: 1200,
        height: 630,
        alt: 'Planes de diseño web — Sitiazo.cl',
      },
    ],
  },
}

const planesFaqs = [
  {
    q: '¿Por qué tan barato?',
    a: 'Somos un estudio chico en Curicó, sin oficina ni cuenta de agencia grande. El ahorro se va directo a tu web. Pagas una vez y listo.',
  },
  {
    q: '¿Qué incluye el hosting?',
    a: 'Tu página queda alojada en Vercel (gratis) con dominio personalizado. Puedes usar tu dominio actual o te ayudamos a comprar uno (~$10.000/año).',
  },
  {
    q: '¿Y si quiero cambiar después?',
    a: 'Empiezas con el plan que necesitas hoy. Si tu negocio crece, migramos sin problema al siguiente plan pagando la diferencia.',
  },
  {
    q: '¿Hacen tiendas online?',
    a: 'Para ecommerce completo (carrito, pasarela de pago) recomendamos plataformas especializadas. Nuestro plan Catálogo funciona como vidriera con checkout por WhatsApp.',
  },
]

const planesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: planesFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

const planesServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Planes de diseño web — Sitiazo.cl',
  description: `Planes de diseño web para pymes chilenas. Pago único desde ${STARTING_PRICE}.`,
  url: siteUrl('/planes/'),
  itemListElement: PLANS_ARRAY.map((plan, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: `Plan ${plan.name} — Sitiazo.cl`,
      description: plan.description,
      url: siteUrl('/planes/'),
      provider: {
        '@type': 'ProfessionalService',
        name: `${SITE.name}.${SITE.domain.split('.')[1]}`,
        url: SITE.url,
      },
      offers: {
        '@type': 'Offer',
        price: plan.price.toString(),
        priceCurrency: 'CLP',
        availability: 'https://schema.org/InStock',
        description: `${plan.name}: ${plan.pages}, entrega en ${plan.deliveryDays} días hábiles`,
      },
    },
  })),
  numberOfItems: PLANS_ARRAY.length,
}

export default function PlanesPage() {
  return (
    <div className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planesFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(planesServiceJsonLd),
        }}
      />
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-7)] lg:gap-[var(--spacing-9)] mb-[var(--spacing-6)]">
          <div className="lg:col-span-8">
            <h1 className="font-display font-bold text-display-lg md:text-display-xl text-ink leading-display tracking-display mb-6 whitespace-nowrap">
              Planes claros.
              <Dot size="xl" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Sin humo, sin agencia gigante. Eliges tu plan, avanzamos y sales
              online.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[var(--spacing-6)]">
          {PLANS_ARRAY.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                'p-[var(--spacing-6)] flex flex-col',
                plan.highlighted
                  ? 'bg-yellow border-2 border-ink'
                  : 'border border-border-subtle bg-cream-deep',
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                  {plan.name}
                </span>
                {plan.badge && (
                  <span
                    className={cn(
                      'flex items-center gap-2 font-body text-micro uppercase tracking-ui',
                      plan.highlighted
                        ? 'text-ink font-medium'
                        : 'text-ink-faded',
                    )}
                  >
                    <Dot
                      size="xs"
                      variant={
                        plan.highlighted ? 'solid-ink' : 'solid-yellow'
                      }
                    />
                    {plan.badge}
                  </span>
                )}
              </div>

              <p className="font-display font-bold text-display-md text-ink leading-display mb-1">
                {plan.priceFormatted}
              </p>

              <HairlineDivider className="my-4" />

              <p className="font-body text-body text-ink-muted leading-body mb-4">
                {plan.description}
              </p>

              <BulletList items={plan.features} className="mb-6 flex-1" />

              <a
                href={whatsappLink(plan.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 font-medium text-body px-6 py-3 transition-colors duration-200',
                  plan.highlighted
                    ? 'bg-ink text-yellow hover:bg-ink-soft'
                    : 'bg-ink text-cream hover:bg-ink-soft',
                )}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>

      <HairlineDivider />

      {/* ── Tabla comparativa ── */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-8">
            Qué incluye cada plan.
            <Dot size="lg" variant="solid-yellow" />
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="py-3 pr-4 font-body text-body-sm uppercase tracking-ui text-ink-faded font-medium text-left">
                    Feature
                  </th>
                  <th className="py-3 px-4 font-body text-body-sm uppercase tracking-ui text-ink font-medium text-center">
                    {PLANS.basico.name}
                  </th>
                  <th className="py-3 px-4 font-body text-body-sm uppercase tracking-ui text-ink font-medium text-center bg-yellow/30">
                    {PLANS.recomendado.name}
                  </th>
                  <th className="py-3 pl-4 font-body text-body-sm uppercase tracking-ui text-ink font-medium text-center">
                    {PLANS.catalogo.name}
                  </th>
                </tr>
              </thead>
              <tbody className="font-body text-body-sm text-ink-muted">
                {[
                  {
                    feature: 'Secciones',
                    basico: PLANS.basico.pages,
                    recomendado: PLANS.recomendado.pages,
                    catalogo: PLANS.catalogo.pages,
                  },
                  {
                    feature: 'Diseño editorial',
                    basico: true,
                    recomendado: true,
                    catalogo: true,
                  },
                  {
                    feature: 'Mobile-first',
                    basico: true,
                    recomendado: true,
                    catalogo: true,
                  },
                  {
                    feature: 'Blog integrado',
                    basico: false,
                    recomendado: true,
                    catalogo: true,
                  },
                  {
                    feature: 'SEO local',
                    basico: false,
                    recomendado: true,
                    catalogo: true,
                  },
                  {
                    feature: 'WhatsApp checkout',
                    basico: true,
                    recomendado: true,
                    catalogo: true,
                  },
                  {
                    feature: 'Cal.com',
                    basico: false,
                    recomendado: false,
                    catalogo: true,
                  },
                  {
                    feature: 'Schema.org',
                    basico: false,
                    recomendado: false,
                    catalogo: true,
                  },
                  {
                    feature: 'Entrega',
                    basico: `${PLANS.basico.deliveryDays} días`,
                    recomendado: `${PLANS.recomendado.deliveryDays} días`,
                    catalogo: `${PLANS.catalogo.deliveryDays} días`,
                  },
                ].map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border-subtle"
                  >
                    <td className="py-3 pr-4 text-ink">{row.feature}</td>
                    {(['basico', 'recomendado', 'catalogo'] as const).map(
                      (plan) => (
                        <td
                          key={plan}
                          className={cn(
                            'py-3 px-4 text-center',
                            plan === 'recomendado' && 'bg-yellow/20',
                          )}
                        >
                          {typeof row[plan] === 'boolean' ? (
                            row[plan] ? (
                              <Dot
                                size="sm"
                                variant="solid-yellow"
                                className="mx-auto"
                              />
                            ) : (
                              <span className="text-ink-faded">—</span>
                            )
                          ) : (
                            <span>{row[plan]}</span>
                          )}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* ── Extras ── */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-8">
            Extras.
            <Dot size="lg" variant="solid-yellow" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EXTRAS.map((addon) => (
              <div
                key={addon.name}
                className="border border-border-subtle bg-cream p-[var(--spacing-5)]"
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-display font-semibold text-[32px] leading-tight text-ink whitespace-nowrap">
                    {addon.name}
                  </h3>
                  <span className="font-display font-bold text-[30px] leading-tight text-ink whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
                <p className="font-body text-body-sm text-ink-muted leading-body">
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* ── FAQ ── */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto">
            <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-8 text-center">
              Preguntas frecuentes.
              <Dot size="lg" variant="solid-yellow" />
            </h2>
            <div className="space-y-6">
              {planesFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border border-border-subtle bg-cream p-[var(--spacing-5)]"
                >
                  <h3 className="font-display font-semibold text-display-sm text-ink mb-2 flex items-center gap-2">
                    <Dot size="sm" variant="solid-yellow" />
                    {faq.q}
                  </h3>
                  <p className="font-body text-body-sm text-ink-muted leading-body">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* ── CTA ── */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-md text-ink leading-display mb-4">
              ¿No sabes cuál elegir?
              <Dot size="md" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-6">
              Conversemos 30 minutos. Te ayudo a decidir cuál plan calza mejor
              con tu negocio.
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


