import type { Metadata } from 'next'
import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StillLifeImage } from '@/components/ui/StillLifeImage'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { featuredCase, secondaryCases } from '@/content/cases'
import { whatsappLink, siteUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Casos y productos digitales hechos en Chile',
  description:
    'Productos propios, herramientas académicas y sitios reales diseñados y desarrollados desde Chile.',
  alternates: { canonical: siteUrl('/casos/') },
  openGraph: {
    title: 'Casos | Sitiazo.cl',
    description:
      'Productos propios, herramientas académicas y sitios reales diseñados y desarrollados desde Chile.',
    url: siteUrl('/casos/'),
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

const caseLinkClass =
  'inline-flex min-h-11 items-center gap-2 font-body text-body text-ink underline decoration-yellow decoration-2 underline-offset-4 transition-colors hover:text-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'

export default function CasosPage() {
  return (
    <>
      <section className="pt-[var(--spacing-9)] pb-[var(--spacing-7)] md:pt-[var(--spacing-10)] md:pb-[var(--spacing-8)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="mb-10 max-w-[var(--prose-max)] md:mb-12">
            <p className="mb-3 font-body text-micro font-medium uppercase tracking-ui text-ink-faded">
              Diseño · ingeniería · producto
            </p>
            <h1 className="mb-6 font-display text-hero font-bold leading-display tracking-display text-ink">
              Casos.
              <Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead leading-body text-ink-muted">
              Productos propios, herramientas académicas y sitios reales
              construidos desde Chile. Cada proyecto responde a un problema
              distinto, con una solución que ya se puede usar.
            </p>
          </div>

          <article className="grid grid-cols-1 items-center gap-[var(--spacing-6)] border border-border-subtle bg-cream p-[var(--spacing-4)] md:grid-cols-[1.1fr_0.9fr] md:p-[var(--spacing-6)]">
            <StillLifeImage
              src={featuredCase.image}
              alt={featuredCase.imageAlt}
              aspectRatio="16:10"
              figLabel={featuredCase.figLabel}
              className="w-full"
              priority
            />

            <div className="py-2 md:py-6">
              <p className="mb-3 font-body text-micro font-medium uppercase tracking-ui text-ink-faded">
                {featuredCase.category} · {featuredCase.year}
              </p>
              <h2 className="mb-3 font-display text-display-lg font-bold leading-display text-ink">
                {featuredCase.name}.
                <Dot size="lg" variant="solid-yellow" />
              </h2>
              <p className="mb-3 font-display text-display-sm leading-tight text-ink">
                {featuredCase.tagline}
              </p>
              <p className="mb-5 max-w-[var(--prose-max)] font-body text-body leading-body text-ink-muted">
                {featuredCase.description}
              </p>
              <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                {featuredCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 font-body text-micro uppercase tracking-ui text-ink-faded"
                  >
                    <Dot size="xs" variant="solid-yellow" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link
                  href={`/casos/${featuredCase.slug}`}
                  className={caseLinkClass}
                >
                  Ver caso completo →
                </Link>
                {featuredCase.url && (
                  <a
                    href={featuredCase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center font-body text-body-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    Visitar proyecto ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>

      <HairlineDivider />

      <section className="py-[var(--spacing-7)] md:py-[var(--spacing-8)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-display-lg font-bold leading-display text-ink">
              Más proyectos.
              <Dot size="lg" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body-sm text-ink-muted">
              Productos, educación y comercio local.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[var(--spacing-5)] md:grid-cols-2">
            {secondaryCases.map((caseStudy) => (
              <article
                key={caseStudy.slug}
                className="flex flex-col border border-border-subtle bg-cream p-[var(--spacing-4)] md:p-[var(--spacing-5)]"
              >
                <StillLifeImage
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  aspectRatio="16:10"
                  figLabel={caseStudy.figLabel}
                  className="mb-3 w-full"
                />

                <p className="mb-3 font-body text-micro font-medium uppercase tracking-ui text-ink-faded">
                  {caseStudy.category} · {caseStudy.year}
                </p>
                <h3 className="mb-2 font-display text-display-md font-bold leading-display text-ink">
                  {caseStudy.name}.
                  <Dot size="md" variant="solid-yellow" />
                </h3>
                <p className="mb-3 font-display text-body font-semibold leading-tight text-ink">
                  {caseStudy.tagline}
                </p>
                <p className="mb-5 font-body text-body-sm leading-body text-ink-muted">
                  {caseStudy.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-2 font-body text-micro uppercase tracking-ui text-ink-faded"
                    >
                      <Dot size="xs" variant="solid-yellow" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border-subtle pt-4">
                  <Link
                    href={`/casos/${caseStudy.slug}`}
                    className={caseLinkClass}
                  >
                    Ver caso completo →
                  </Link>
                  {caseStudy.url && (
                    <a
                      href={caseStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-body text-body-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      Visitar ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HairlineDivider />

      <section className="py-[var(--spacing-7)] md:py-[var(--spacing-8)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="mx-auto max-w-[var(--prose-max)] text-center">
            <h2 className="mb-4 font-display text-display-md font-bold leading-display text-ink">
              ¿Tu proyecto es el siguiente?
              <Dot size="md" variant="solid-yellow" />
            </h2>
            <p className="mb-6 font-body text-body leading-body text-ink-muted">
              Cuéntanos qué necesitas construir y veremos si Sitiazo es el
              equipo correcto para hacerlo.
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