import type { Metadata } from 'next'
import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Casos',
  description:
    'Proyectos web diseñados para pymes chilenas. Casos reales con resultados medibles.',
  alternates: {
    canonical: 'https://sitiazo.cl/casos/',
  },
}

const cases = [
  {
    slug: 'roma-crochet',
    title: 'Roma Crochet.',
    tag: 'DESTACADO',
    tagVariant: 'yellow' as const,
    description:
      'Amigurumis personalizados hechos a mano en Curicó. De vender por DM a tener web propia con catálogo.',
    bullets: ['WhatsApp checkout', 'Mobile-first', 'Identidad cálida'],
    fig: 'fig. 01 — destacado',
  },
]

export default function CasosPage() {
  return (
    <>
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-11)] pb-[var(--spacing-10)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <Tag variant="outline" className="mb-8">CASOS · 2026</Tag>

          <div className="max-w-[var(--prose-max)] mb-16">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Casos.<Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Proyectos reales para pymes chilenas. Cada caso es un negocio que ahora tiene
              su espacio en internet y vende más.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/casos/${c.slug}`}
                className="border border-border-subtle bg-cream hover:border-border-strong transition-colors duration-200 group"
              >
                <StillLifePlaceholder
                  aspectRatio="4:5"
                  figLabel={c.fig}
                />
                <div className="px-[var(--spacing-6)] py-[var(--spacing-6)]">
                  <Tag variant={c.tagVariant} className="mb-3">
                    {c.tag}
                  </Tag>
                  <h2 className="font-display font-semibold text-display-sm text-ink leading-tight mb-2 group-hover:underline decoration-yellow decoration-2 underline-offset-4">
                    {c.title}
                    <Dot size="sm" variant="solid-yellow" className="ml-1 inline-block" />
                  </h2>
                  <p className="font-body text-body-sm text-ink-muted leading-body mb-4">
                    {c.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {c.bullets.map((b) => (
                      <span key={b} className="flex items-center gap-1.5 font-body text-micro uppercase tracking-ui text-ink-faded">
                        <Dot size="xs" variant="solid-yellow" />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <FooterBar />
      </section>

      <HairlineDivider />

      {/* Placeholder para próximos casos */}
      <section className="py-[var(--spacing-11)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-md text-ink leading-display mb-6">
              ¿Tu pyme es la siguiente?<Dot size="lg" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-8">
              Estamos buscando 3 pymes para sumar como casos destacados en 2026.
              Si quieres ser uno, escríbeme. Cupos limitados.
            </p>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Cuéntanos tu proyecto →
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
