import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Dot } from '@/components/ui/Dot'
import { BulletList } from '@/components/ui/BulletList'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Planes claros',
  description:
    'Planes de diseño web para pymes chilenas. Pago único desde $79.990. Sin letras chicas, sin sorpresas.',
  alternates: { canonical: 'https://sitiazo.cl/planes/' },
  openGraph: {
    title: 'Planes claros | Sitiazo.cl',
    description:
      'Planes de diseño web para pymes chilenas. Pago único desde $79.990. Sin letras chicas, sin sorpresas.',
    url: 'https://sitiazo.cl/planes/',
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

const plans = [
  {
    name: 'Básico',
    price: '$79.990',
    description: '1 página, diseño editorial, CTA a WhatsApp.',
    bullets: [
      '1 página web',
      'Diseño editorial a medida',
      'Botón directo a WhatsApp',
      'Responsive mobile-first',
      'Entrega en 7 días hábiles',
    ],
    cta: whatsappLink('basico'),
  },
  {
    name: 'Recomendado',
    price: '$129.990',
    tag: 'Más pedido',
    highlighted: true,
    description: 'Hasta 5 secciones, blog integrado, SEO local.',
    bullets: [
      'Hasta 5 secciones',
      'Blog integrado',
      'Diseño editorial a medida',
      'SEO local (Google My Business)',
      'Responsive mobile-first',
      'Entrega en 10 días hábiles',
    ],
    cta: whatsappLink('recomendado'),
  },
  {
    name: 'Catálogo',
    price: '$199.990',
    description: 'Hasta 10 productos, fichas, filtros, Cal.com.',
    bullets: [
      'Hasta 10 productos o servicios',
      'Fichas con foto y precio',
      'Filtros y búsqueda',
      'Cal.com integrado',
      'SEO local + Schema.org',
      'Entrega en 14 días hábiles',
    ],
    cta: whatsappLink('catalogo'),
  },
]

export default function PlanesPage() {
  return (
    <div className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-7)] lg:gap-[var(--spacing-9)] mb-[var(--spacing-6)]">
          <div className="lg:col-span-8">
            <h1 className="font-display font-bold text-display-lg md:text-display-xl text-ink leading-display tracking-display mb-6 whitespace-nowrap">
              Planes claros.
              <Dot size="xl" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Sin humo, sin agencia gigante. Eliges tu plan, avanzamos y sales online.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[var(--spacing-6)]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'p-[var(--spacing-6)] flex flex-col',
                plan.highlighted
                  ? 'bg-yellow border-2 border-ink'
                  : 'border border-border-subtle bg-cream-deep'
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                  {plan.name}
                </span>
                {plan.tag && (
                  <span className={cn(
                    'flex items-center gap-2 font-body text-micro uppercase tracking-ui',
                    plan.highlighted
                      ? 'text-ink font-medium'
                      : 'text-ink-faded'
                  )}>
                    <Dot size="xs" variant={plan.highlighted ? 'solid-ink' : 'solid-yellow'} />
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
                className={cn(
                  'inline-flex items-center justify-center gap-2 font-medium text-body px-6 py-3 transition-colors duration-200',
                  plan.highlighted
                    ? 'bg-ink text-yellow hover:bg-ink-soft'
                    : 'bg-ink text-cream hover:bg-ink-soft'
                )}
              >
                Elegir {plan.name} →
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
            Qué incluye cada plan.<Dot size="lg" variant="solid-yellow" />
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="py-3 pr-4 font-body text-body-sm uppercase tracking-ui text-ink-faded font-medium text-left">Feature</th>
                  <th className="py-3 px-4 font-body text-body-sm uppercase tracking-ui text-ink font-medium text-center">Básico</th>
                  <th className="py-3 px-4 font-body text-body-sm uppercase tracking-ui text-ink font-medium text-center bg-yellow/30">Recomendado</th>
                  <th className="py-3 pl-4 font-body text-body-sm uppercase tracking-ui text-ink font-medium text-center">Catálogo</th>
                </tr>
              </thead>
              <tbody className="font-body text-body-sm text-ink-muted">
                {[
                  { feature: 'Secciones', basico: '1', recomendado: 'Hasta 5', catalogo: 'Hasta 10' },
                  { feature: 'Diseño editorial', basico: true, recomendado: true, catalogo: true },
                  { feature: 'Mobile-first', basico: true, recomendado: true, catalogo: true },
                  { feature: 'Blog integrado', basico: false, recomendado: true, catalogo: true },
                  { feature: 'SEO local', basico: false, recomendado: true, catalogo: true },
                  { feature: 'WhatsApp checkout', basico: true, recomendado: true, catalogo: true },
                  { feature: 'Cal.com', basico: false, recomendado: false, catalogo: true },
                  { feature: 'Schema.org', basico: false, recomendado: false, catalogo: true },
                  { feature: 'Entrega', basico: '7 días', recomendado: '10 días', catalogo: '14 días' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border-subtle">
                    <td className="py-3 pr-4 text-ink">{row.feature}</td>
                    {(['basico', 'recomendado', 'catalogo'] as const).map((plan) => (
                      <td key={plan} className={cn(
                        'py-3 px-4 text-center',
                        plan === 'recomendado' && 'bg-yellow/20'
                      )}>
                        {typeof row[plan] === 'boolean'
                          ? (row[plan]
                            ? <Dot size="sm" variant="solid-yellow" className="mx-auto" />
                            : <span className="text-ink-faded">—</span>)
                          : <span>{row[plan]}</span>
                        }
                      </td>
                    ))}
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
            Extras.<Dot size="lg" variant="solid-yellow" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'Logo', price: '$29.990', desc: 'Diseño de logo editorial que calza con tu web.' },
              { name: 'Sesión de fotos', price: '$49.990', desc: 'Fotos de tus productos o espacio. Región del Maule.' },
              { name: 'Posts extra', price: '$19.990 c/u', desc: 'Notas de blog o fichas de producto adicionales.' },
            ].map((addon) => (
              <div key={addon.name} className="border border-border-subtle bg-cream p-[var(--spacing-5)]">
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
              Preguntas frecuentes.<Dot size="lg" variant="solid-yellow" />
            </h2>
            <div className="space-y-6">
              {[
                { q: '¿Por qué tan barato?', a: 'Somos un estudio chico en Curicó, sin oficina ni cuenta de agencia grande. El ahorro se va directo a tu web. Pagas una vez y listo.' },
                { q: '¿Qué incluye el hosting?', a: 'Tu página queda alojada en Vercel (gratis) con dominio personalizado. Puedes usar tu dominio actual o te ayudamos a comprar uno (~$10.000/año).' },
                { q: '¿Y si quiero cambiar después?', a: 'Empiezas con el plan que necesitas hoy. Si tu negocio crece, migramos sin problema al siguiente plan pagando la diferencia.' },
                { q: '¿Hacen tiendas online?', a: 'Para ecommerce completo (carrito, pasarela de pago) recomendamos plataformas especializadas. Nuestro plan Catálogo funciona como vidriera con checkout por WhatsApp.' },
              ].map((faq) => (
                <div key={faq.q} className="border border-border-subtle bg-cream p-[var(--spacing-5)]">
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
