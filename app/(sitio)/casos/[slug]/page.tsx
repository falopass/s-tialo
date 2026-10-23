import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BulletList } from '@/components/ui/BulletList'
import { Dot } from '@/components/ui/Dot'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { StillLifeImage } from '@/components/ui/StillLifeImage'
import { Tag } from '@/components/ui/Tag'
import { detailedCases, getCase } from '@/content/cases'
import { SITE, siteUrl, whatsappLink } from '@/lib/config'
import { breadcrumbJsonLd } from '@/lib/seo'

type CasePageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return detailedCases.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCase(slug)

  if (!caseStudy || !caseStudy.sections) {
    return {}
  }

  const canonical = siteUrl(`/casos/${caseStudy.slug}/`)

  return {
    title: `Caso ${caseStudy.name}`,
    description: caseStudy.description,
    alternates: { canonical },
    openGraph: {
      title: `Caso ${caseStudy.name} | Sitiazo.cl`,
      description: caseStudy.description,
      url: canonical,
      images: [
        {
          url: caseStudy.image,
          width: 1536,
          height: 1024,
          alt: caseStudy.imageAlt,
        },
      ],
    },
  }
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params
  const caseStudy = getCase(slug)

  if (!caseStudy || !caseStudy.sections || !caseStudy.bullets) {
    notFound()
  }

  const caseUrl = siteUrl(`/casos/${caseStudy.slug}/`)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `Caso ${caseStudy.name} — Sitiazo.cl`,
    description: caseStudy.description,
    url: caseUrl,
    image: `${SITE.url}${caseStudy.image}`,
    author: {
      '@type': 'Organization',
      name: 'Sitiazo.cl',
      url: SITE.url,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: caseStudy.name,
      description: caseStudy.tagline,
      ...(caseStudy.url ? { url: caseStudy.url } : {}),
    },
    provider: {
      '@type': 'ProfessionalService',
      name: 'Sitiazo.cl',
      url: SITE.url,
    },
  }

  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Inicio', url: siteUrl('/') },
    { name: 'Casos', url: siteUrl('/casos/') },
    { name: caseStudy.name, url: caseUrl },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="pb-[var(--spacing-8)] pt-[var(--spacing-9)] md:pt-[var(--spacing-10)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <Tag variant="yellow" className="mb-8">
            {caseStudy.category} · {caseStudy.year}
          </Tag>

          <div className="grid grid-cols-1 gap-[var(--spacing-8)] lg:grid-cols-2 lg:gap-[var(--spacing-10)]">
            <div className="flex flex-col justify-center">
              <h1 className="mb-5 font-display text-hero font-bold leading-display tracking-display text-ink">
                {caseStudy.name}.
                <Dot size="hero" variant="solid-yellow" />
              </h1>
              <p className="mb-3 font-display text-display-sm leading-tight text-ink">
                {caseStudy.tagline}
              </p>
              <p className="mb-7 max-w-[var(--prose-max)] font-body text-lead leading-body text-ink-muted">
                {caseStudy.description}
              </p>

              <BulletList items={caseStudy.bullets} className="mb-8" />

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <PrimaryButton href={whatsappLink('contacto')} external>
                  Cuéntanos tu proyecto
                </PrimaryButton>
                {caseStudy.url && (
                  <SecondaryButton href={caseStudy.url} external>
                    {caseStudy.urlLabel ?? 'Visitar proyecto'}
                  </SecondaryButton>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <StillLifeImage
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                aspectRatio="16:10"
                figLabel={caseStudy.figLabel}
                className="w-full max-w-2xl"
                priority
              />
            </div>
          </div>

          {caseStudy.disclaimer && (
            <aside className="mt-8 border-l-4 border-yellow bg-cream px-5 py-4 font-body text-body-sm leading-body text-ink-muted">
              <strong className="font-semibold text-ink">Nota:</strong>{' '}
              {caseStudy.disclaimer}
            </aside>
          )}
        </div>
      </section>

      <HairlineDivider />

      <section className="py-[var(--spacing-7)] md:py-[var(--spacing-8)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <h2 className="mb-8 font-display text-display-lg font-bold leading-display tracking-display text-ink">
            Del problema al producto.
            <Dot size="lg" variant="solid-yellow" />
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudy.sections.map((section, index) => (
              <article
                key={section.title}
                className="border border-border-subtle p-[var(--spacing-5)] md:p-[var(--spacing-6)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-display-sm text-ink-faded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Dot size="sm" variant="solid-yellow" />
                </div>
                <h3 className="mb-3 font-display text-display-sm font-semibold text-ink">
                  {section.title}
                </h3>
                <p className="font-body text-body leading-body text-ink-muted">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-[var(--prose-max)] text-center">
            <h2 className="mb-4 font-display text-display-md font-bold text-ink">
              ¿Tu proyecto es el siguiente?
              <Dot size="md" variant="solid-yellow" />
            </h2>
            <p className="mb-6 font-body text-body leading-body text-ink-muted">
              Construimos productos y sitios claros, útiles y listos para usarse.
            </p>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Hablemos
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}