import { SectionCounter } from '@/components/ui/SectionCounter'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { BulletList } from '@/components/ui/BulletList'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'

const audiences = [
  {
    tag: 'SERVICIOS',
    title: 'Servicios locales.',
    description:
      'Veterinarias, talleres, peluquerías, consultas. Negocios que necesitan que los encuentren en Google y WhatsApp.',
    bullets: [
      'Tu servicio en Google Maps',
      'Botón directo de WhatsApp',
      'Página clara y rápida',
    ],
  },
  {
    tag: 'HECHO A MANO',
    title: 'Marcas hechas a mano.',
    description:
      'Artesanos, pasteleros, diseñadores, creadores del Maule. Marcas con identidad que necesitan mostrarse bien.',
    bullets: [
      'Catálogo de productos',
      'Historia de marca',
      'Pedidos por WhatsApp',
    ],
  },
  {
    tag: 'COMERCIO',
    title: 'Comercio pequeño.',
    description:
      'Tiendas de barrio, emprendedores, distribuidores. Negocios que quieren vender más sin meterse en MercadoLibre.',
    bullets: [
      'Pantalla de productos',
      'WhatsApp como checkout',
      'Precios y horarios claros',
    ],
  },
]

export function ParaQuienGrid() {
  return (
    <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <SectionCounter current={2} total={6} className="mb-8" />

        <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-6">
          Para quién.<Dot size="lg" variant="solid-yellow" />
        </h2>

        <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-12">
          Para pymes que necesitan una web clara, que funcione en el celular y que se entienda
          al primer vistazo. Sin enredos, sin web de agencia gigante que cuesta millones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="border border-border-subtle bg-cream p-[var(--spacing-6)] hover:border-border-strong transition-colors duration-200"
            >
              <Tag variant="yellow" className="mb-4">
                {audience.tag}
              </Tag>

              <StillLifePlaceholder aspectRatio="1:1" className="mb-4" />

              <h3 className="font-display font-semibold text-display-sm text-ink leading-tight mb-3">
                {audience.title}
                <Dot size="sm" variant="solid-yellow" className="ml-1 inline-block" />
              </h3>

              <p className="font-body text-body text-ink-muted leading-body mb-4">
                {audience.description}
              </p>

              <BulletList items={audience.bullets} />
            </div>
          ))}
        </div>
      </div>

      <FooterBar />
    </section>
  )
}
