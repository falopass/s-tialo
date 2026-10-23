import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, siteUrl } from '@/lib/config'
import { breadcrumbJsonLd } from '@/lib/seo'
import { BIZ, RANCHO, RESENAS } from '../../../rancho-itahue/content'
import { CTA_DEMO, linkDemo } from '../../_lib/contacto'
import { Captura } from '../../_components/Captura'

const URL_CASO = siteUrl('/casos/rancho-itahue/')
const DESCRIPCION =
  'Cómo armamos la web de Rancho Itahue, un multiespacio rural de Molina: con el texto del dueño, sus fotos y las reseñas de su ficha de Google. Publicada en ranchoitahue.cl.'

export const metadata: Metadata = {
  title: 'Caso Rancho Itahue',
  description: DESCRIPCION,
  alternates: { canonical: URL_CASO },
  openGraph: {
    title: 'Caso Rancho Itahue | Sitiazo.cl',
    description: DESCRIPCION,
    url: URL_CASO,
    images: [
      {
        url: '/sitio/fuentes/rancho-escritorio.webp',
        width: 1440,
        height: 900,
        alt: 'Portada de ranchoitahue.cl en un computador',
      },
    ],
  },
}

const casoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Caso Rancho Itahue, Sitiazo.cl',
  description: DESCRIPCION,
  url: URL_CASO,
  image: `${SITE.url}/sitio/fuentes/rancho-escritorio.webp`,
  author: { '@type': 'Organization', name: 'Sitiazo.cl', url: SITE.url },
  about: {
    '@type': 'WebSite',
    name: 'Rancho Itahue',
    description: 'Multiespacio en Molina: salón de eventos, quinchos, 2 piscinas y canchas.',
    url: BIZ.site,
  },
  datePublished: '2026-09-29',
  provider: { '@type': 'ProfessionalService', name: 'Sitiazo.cl', url: SITE.url },
}

const breadcrumbLd = breadcrumbJsonLd([
  { name: 'Inicio', url: siteUrl('/') },
  { name: 'Casos', url: siteUrl('/casos/') },
  { name: 'Rancho Itahue', url: URL_CASO },
])

/** Lo que resuelve la web, sección por sección. */
const SECCIONES = [
  { t: 'Eventos y banquetería', d: 'Salón de eventos y terraza encarpada, para matrimonios, cumpleaños y eventos de empresa.' },
  { t: 'Piscinas y canchas', d: '2 piscinas, 2 canchas de tenis, una multicancha y 2 canchas de pádel techadas.' },
  { t: 'Quinchos y paseos', d: 'Quinchos exteriores con prados y sombra, para paseos de curso y de empresas.' },
  { t: 'Almuerzos', d: 'Todo el año, de 11 a 16 hrs, con su propio número.' },
  { t: 'Cómo llegar', d: 'El pin exacto que mandó el dueño y las indicaciones desde la Ruta 5 Sur.' },
  { t: 'Contacto', d: 'Tres números según el servicio: eventos, almuerzos y pádel.' },
]

export default function CasoRanchoItahuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(casoJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="s-wrap pt-[calc(var(--s-nav-h)+48px)] md:pt-[calc(var(--s-nav-h)+80px)]">
        <h1 className="s-display s-h1 max-w-[16ch]">
          Rancho Itahue ya tiene <em>su web.</em>
        </h1>
        <p className="s-lead mt-6">
          Un multiespacio rural de {BIZ.city}: salón de eventos, quinchos, 2 piscinas y canchas. Su web está publicada en{' '}
          {BIZ.siteDisplay}.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={BIZ.site} target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primario">
            Visitar {BIZ.siteDisplay}
          </a>
          <Link href="/casos/" className="s-btn s-btn-secundario">
            Ver otros casos
          </Link>
        </div>
      </header>

      <section className="s-wrap mt-16 grid items-end gap-6 md:mt-24 md:grid-cols-[1fr_auto]">
        <Captura
          id="rancho-escritorio"
          prioridad
          sizes="(min-width: 768px) 75vw, 100vw"
          className="w-full rounded-2xl border border-(--s-linea)"
        />
        <Captura
          id="rancho-movil"
          sizes="(min-width: 768px) 260px, 70vw"
          className="mx-auto w-[min(280px,70vw)] rounded-[28px] border border-(--s-linea) md:w-[260px]"
        />
      </section>

      <section className="s-wrap grid gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <div>
          <h2 className="s-display s-h2">Sus palabras, sus fotos.</h2>
          <div className="s-prosa mt-6">
            <p>
              El dueño nos mandó por WhatsApp su texto oficial, las fotos del rancho y el pin de su ubicación. La web
              se armó con eso: los párrafos que describen el lugar son suyos, tal cual, y cada foto es del rancho.
            </p>
            <p>
              Las reseñas son citas textuales de su ficha de Google, que tenía {RESENAS.count} opiniones cuando armamos
              la web. Lo que el dueño no confirmó no se publica.
            </p>
          </div>
        </div>
        <blockquote className="self-center border-l-2 border-(--s-amarillo) pl-6">
          <p className="s-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15]">“{RANCHO.paragraphs[2]}”</p>
          <footer className="mt-4 text-(--s-ceniza)">Texto del dueño, publicado en {BIZ.siteDisplay}</footer>
        </blockquote>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 max-w-[18ch]">Una página que responde lo que preguntan sus clientes.</h2>
          <dl className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SECCIONES.map((s) => (
              <div key={s.t}>
                <dt className="text-lg font-semibold text-(--s-crema)">{s.t}</dt>
                <dd className="mt-2 text-(--s-crema-2)">{s.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap flex flex-col items-start gap-8 py-24 md:py-32">
          <h2 className="s-display s-h2 max-w-[16ch]">¿Quieres la tuya? El demo llega en 48 horas.</h2>
          <p className="s-lead">Mándanos tu Instagram o tu ficha de Google. Verlo no cuesta nada.</p>
          <a href={linkDemo()} target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primario">
            {CTA_DEMO}
          </a>
        </div>
      </section>
    </>
  )
}
