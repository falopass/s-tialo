import type { Metadata } from 'next'
import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StillLifeImage } from '@/components/ui/StillLifeImage'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Casos',
  description: 'Proyectos web diseñados para pymes chilenas. Casos reales con resultados medibles.',
  alternates: { canonical: 'https://sitiazo.cl/casos/' },
  openGraph: {
    title: 'Casos | Sitiazo.cl',
    description: 'Proyectos web diseñados para pymes chilenas. Casos reales con resultados medibles.',
    url: 'https://sitiazo.cl/casos/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Casos — Sitiazo.cl',
      },
    ],
  },
}

export default function CasosPage() {
  return (
    <>
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mb-8">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Casos.
              <Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Proyectos reales para pymes chilenas. Cada caso es un negocio que ahora tiene su espacio en internet y vende más.
            </p>
          </div>

          {/* Caso destacado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-5)] md:gap-[var(--spacing-6)] items-center border border-border-subtle bg-cream p-[var(--spacing-4)] md:p-[var(--spacing-5)]">
            <div>
              <StillLifeImage
                src="/images/still-lifes/casos.png"
                alt="Caso Roma Crochet"
                aspectRatio="16:10"
                figLabel="fig. 01 — destacado"
                className="max-w-sm w-full mx-auto md:mx-0"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-3">
                Roma Crochet.
                <Dot size="lg" variant="solid-yellow" />
              </h2>
              <p className="font-body text-body text-ink-muted leading-body mb-4 max-w-[var(--prose-max)]">
                Amigurumis personalizados hechos a mano en Curicó. De vender por DM a tener web propia con catálogo.
              </p>
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                {['WhatsApp checkout', 'Mobile-first', 'Identidad cálida'].map((b) => (
                  <span key={b} className="flex items-center gap-2 font-body text-micro uppercase tracking-ui text-ink-faded">
                    <Dot size="xs" variant="solid-yellow" />
                    {b}
                  </span>
                ))}
              </div>
              <Link
                href="/casos/roma-crochet"
                className="inline-flex items-center gap-2 font-body text-body text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:text-yellow transition-colors"
              >
                Ver caso completo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* CTA próximos casos */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-md text-ink leading-display mb-4">
              ¿Tu pyme es la siguiente?
              <Dot size="md" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-6">
              Estamos buscando pymes para sumar como casos destacados.
            </p>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Cuéntanos tu proyecto
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
