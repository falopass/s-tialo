import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE, siteUrl } from '@/lib/config'
import { breadcrumbJsonLd } from '@/lib/seo'
import { detailedCases, getCase } from '@/content/cases'
import { Captura } from '../../_components/Captura'
import { Cierre } from '../../_components/Cierre'
import { Enlace } from '../../_components/Enlace'

type CasePageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return detailedCases.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCase(slug)
  if (!caseStudy || !caseStudy.sections) return {}

  const canonical = siteUrl(`/casos/${caseStudy.slug}/`)
  return {
    title: `Caso ${caseStudy.name}`,
    description: caseStudy.description,
    alternates: { canonical },
    openGraph: {
      title: `Caso ${caseStudy.name} | Sitiazo.cl`,
      description: caseStudy.description,
      url: canonical,
      images: [{ url: caseStudy.image, width: 1536, height: 1024, alt: caseStudy.imageAlt }],
    },
  }
}

/** Convierte "PRODUCTO PROPIO · CHILE" en "Producto propio, Chile" (una sola línea de contexto, sin mayúsculas gritadas). */
function categoria(c: string) {
  return c
    .split(' · ')
    .map((p) => p.charAt(0) + p.slice(1).toLowerCase())
    .join(', ')
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
    name: `Caso ${caseStudy.name}, Sitiazo.cl`,
    description: caseStudy.description,
    url: caseUrl,
    image: `${SITE.url}${caseStudy.image}`,
    author: { '@type': 'Organization', name: 'Sitiazo.cl', url: SITE.url },
    about: {
      '@type': 'SoftwareApplication',
      name: caseStudy.name,
      description: caseStudy.tagline,
      ...(caseStudy.url ? { url: caseStudy.url } : {}),
    },
    provider: { '@type': 'ProfessionalService', name: 'Sitiazo.cl', url: SITE.url },
  }

  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Inicio', url: siteUrl('/') },
    { name: 'Casos', url: siteUrl('/casos/') },
    { name: caseStudy.name, url: caseUrl },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="s-wrap pt-[calc(var(--s-nav-h)+48px)] md:pt-[calc(var(--s-nav-h)+88px)]">
        <p className="s-mono text-(--s-ceniza)">
          {categoria(caseStudy.category)}, {caseStudy.year}
        </p>
        <h1 className="s-display s-h1 mt-4">{caseStudy.name}.</h1>
        <p className="s-lead mt-6">{caseStudy.description}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {caseStudy.url && (
            <a href={caseStudy.url} target="_blank" rel="noopener noreferrer" className="s-btn s-btn-secundario">
              {caseStudy.urlLabel ?? 'Visitar el sitio'}
            </a>
          )}
          <Enlace href="/casos/" className="s-btn s-btn-secundario">
            Ver todos los casos
          </Enlace>
        </div>
      </header>

      <section className="s-wrap mt-16 md:mt-24">
        <Captura id={caseStudy.slug} prioridad className="w-full rounded-2xl object-cover" />
        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-8">
          {caseStudy.bullets.map((b) => (
            <li key={b} className="border-t border-(--s-linea) pt-4 text-(--s-crema-2)">
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="s-wrap py-24 md:py-32">
        <h2 className="s-display s-h2 mb-14 max-w-[16ch]">Del problema al producto.</h2>
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-20">
          {caseStudy.sections.map((s, i) => (
            <div key={s.title} className={i === 2 ? 'md:col-span-2 md:max-w-[60%]' : ''}>
              <h3 className="s-display s-h3">{s.title}</h3>
              <p className="mt-4 max-w-[60ch] text-(--s-crema-2)">{s.body}</p>
            </div>
          ))}
        </div>
        {caseStudy.disclaimer && <p className="mt-14 max-w-[70ch] text-sm text-(--s-ceniza)">{caseStudy.disclaimer}</p>}
      </section>

      <Cierre
        titulo={
          <>
            ¿Tienes un proyecto así? <em>Partamos por el demo.</em>
          </>
        }
      />
    </>
  )
}
