import type { Metadata } from 'next'
import { PAGO_CUOTAS, PAGO_MENSUAL_FORMATTED, SITE, STARTING_PRICE, siteUrl } from '@/lib/config'
import { cases } from '@/content/cases'
import { BIZ, RANCHO } from '../rancho-itahue/content'
import { catalogo } from '../demos/catalogo'
import { BotonDemo } from './_components/BotonDemo'
import { Captura } from './_components/Captura'
import { Cierre } from './_components/Cierre'
import { Enlace } from './_components/Enlace'
import { Escenario } from './_components/Escenario'
import { TiraRubros } from './_components/TiraRubros'
import { TuNegocio } from './_components/TuNegocio'
import { ConfirmaNegocio, ConNegocio } from './_components/ConNegocio'
import { CualTeConviene } from './_components/CualTeConviene'
import { DatosClaros } from './_components/DatosClaros'
import { Planes } from './_components/Planes'
import { TarjetaDemo } from './_components/TarjetaDemo'

export const metadata: Metadata = {
  title: 'Diseño web para pymes en Chile',
  description: SITE.description,
  alternates: { canonical: siteUrl('/') },
  openGraph: {
    title: 'Tu web, antes de pagar un peso',
    description: SITE.description,
    url: siteUrl(),
    images: [{ url: '/sitio/og/inicio.jpg', width: 1200, height: 630, alt: 'Sitiazo.cl, páginas web que sí venden' }],
  },
}

/**
 * Las tres etapas del relato: cada una corresponde a una textura (ASCII, dither, color).
 * Si el visitante escribió el nombre de su negocio, el título usa `antes` + nombre + `despues`.
 */
const PASOS = [
  {
    etapa: 'Estructura',
    titulo: 'Nos mandas tu Instagram o tu ficha de Google.',
    antes: 'Nos mandas el Instagram o la ficha de Google de ',
    despues: '.',
    texto: 'Con eso vemos tu rubro, tus fotos y cómo te encuentran hoy.',
  },
  {
    etapa: 'Forma',
    titulo: 'En 48 horas te llega tu demo por WhatsApp.',
    antes: 'En 48 horas te llega el demo de ',
    despues: ' por WhatsApp.',
    texto: 'Lo armamos con tus fotos y tus datos reales. Verlo no cuesta nada.',
  },
  {
    etapa: 'Publicada',
    titulo: 'Si te gusta, la publicamos en 7 días.',
    antes: 'Si te gusta, publicamos la web de ',
    despues: ' en 7 días.',
    texto: `Desde ${STARTING_PRICE} pago único o en ${PAGO_CUOTAS} cuotas sin interés. El plan Básico también va por ${PAGO_MENSUAL_FORMATTED} al mes con hosting y dominio.`,
  },
]

const DEMOS = ['fran-wartemberg', 'los-leones', 'servimac', 'la-granja', 'entre-raices', 'my-fusion']
// Primera oración del texto oficial del dueño (app/rancho-itahue/content.ts).
const CITA_DUENO = RANCHO.paragraphs[2].split('. ')[0] + '.'
const PROYECTOS = cases.filter((c) => c.slug === 'calculachile' || c.slug === 'cvlisto')

export default function HomePage() {
  // Cifra real: se cuenta en el build desde el catálogo de /demos/.
  const totalDemos = catalogo().length
  return (
    <>
      {/* Hero y pieza central: el mismo objeto pasa de estructura a forma a publicada. */}
      <section className="s-proceso s-wrap" aria-label="Cómo nace tu web">
        <div className="s-proceso-hero">
          <h1 className="s-display s-entra text-[clamp(2.75rem,6.4vw,6rem)]">
            Tu web, antes de pagar <em>un peso.</em>
          </h1>
          <p className="s-lead s-entra mt-6" style={{ '--i': 1 } as React.CSSProperties}>
            Mándanos tu Instagram y en 48 horas recibes un demo por WhatsApp. Lista en 7 días desde {STARTING_PRICE}.
          </p>
          <div className="s-entra mt-8" style={{ '--i': 2 } as React.CSSProperties}>
            <TuNegocio />
          </div>
          <div data-cta-principal className="s-entra mt-3 flex flex-wrap gap-3" style={{ '--i': 3 } as React.CSSProperties}>
            <BotonDemo origen="hero" />
            <a href="/demos/" className="s-btn s-btn-secundario">
              Ver {totalDemos} demos
            </a>
          </div>
          <ConfirmaNegocio />
        </div>

        <div className="s-proceso-escena">
          <div className="s-proceso-sticky">
            <Escenario ids={['fran-wartemberg', 'los-leones', 'servimac']} />
          </div>
        </div>

        <ol className="s-proceso-pasos">
          {PASOS.map((p) => (
            <li key={p.etapa} className="s-paso">
              <div>
                <p className="s-mono s-paso-etapa">{p.etapa}</p>
                <h2 className="s-display mt-2 text-[clamp(1.85rem,3vw,2.75rem)]">
                  <ConNegocio sin={p.titulo} antes={p.antes} despues={p.despues} />
                </h2>
                <p className="mt-3 max-w-[44ch] text-(--s-crema-2)">{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <TiraRubros />

      {/* Demos por rubro: capturas reales de demos publicados. */}
      <section className="s-wrap py-28 md:py-36">
        <h2 className="s-display s-h2 s-revela">
          Uno como el tuyo <em>ya existe.</em>
        </h2>
        <p className="s-lead s-revela mt-5">Demos que armamos para negocios del Maule. Toca uno para verlo completo.</p>
        <div className="s-demos mt-14">
          {DEMOS.map((id) => (
            <TarjetaDemo key={id} id={id} />
          ))}
        </div>
        <p className="mt-16 md:mt-20">
          <a href="/demos/" className="s-link">
            Busca el tuyo entre los {totalDemos} demos
          </a>{' '}
          o mira las{' '}
          <Enlace href="/paginas-web-para/" className="s-link">
            webs por rubro
          </Enlace>
        </p>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-28 md:py-36">
          <h2 className="s-display s-h2 mb-14 max-w-[20ch]">Un precio claro para cada tamaño de negocio.</h2>
          <Planes />
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-28 md:py-36">
          <CualTeConviene />
        </div>
      </section>

      {/* Caso de cliente: Rancho Itahue, con capturas reales de su web publicada. */}
      <section className="border-t border-(--s-linea)">
        <div className="s-wrap grid items-center gap-14 py-28 md:py-36 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="s-revela">
            <h2 className="s-display s-h2 max-w-[13ch]">
              Rancho Itahue ya tiene <em>su web.</em>
            </h2>
            <p className="s-lead mt-5">
              Un multiespacio rural de {BIZ.city}, con salón de eventos, quinchos, piscinas y canchas. La armamos con el
              texto del dueño y fotos reales del rancho.
            </p>
            <blockquote className="mt-8 max-w-[30ch] border-l-2 border-(--s-amarillo) pl-5">
              <p className="s-display text-[clamp(1.4rem,2vw,1.75rem)] leading-[1.2]">
                “{CITA_DUENO}”
              </p>
              <footer className="mt-3 text-sm text-(--s-ceniza)">Texto del dueño, publicado en {BIZ.siteDisplay}</footer>
            </blockquote>
            <p className="mt-8">
              <Enlace href="/casos/rancho-itahue/" className="s-link">
                Ver el caso
              </Enlace>
            </p>
          </div>
          <div className="relative pb-10">
            <Captura id="rancho-escritorio" className="block w-full rounded-2xl border border-(--s-linea)" />
            <Captura
              id="rancho-movil"
              className="absolute right-[-4px] bottom-0 w-[28%] rounded-[22px] border border-(--s-linea) shadow-[0_24px_60px_rgb(0_0_0/0.55)] lg:right-auto lg:left-[-48px] lg:w-[24%]"
            />
          </div>
        </div>
      </section>

      {/* Proyectos propios del estudio, etiquetados como tales: no son clientes. */}
      <section className="s-wrap py-28 md:py-36">
        <h2 className="s-display s-h2 mb-12">También hacemos productos propios.</h2>
        <div className="border-b border-(--s-linea)">
          {PROYECTOS.map((c) => (
            <Enlace
              key={c.slug}
              href={`/casos/${c.slug}/`}
              className="group grid items-center gap-6 border-t border-(--s-linea) py-10 md:grid-cols-[1fr_1.1fr_280px]"
            >
              <h3 className="s-display text-[clamp(2.5rem,5vw,4.5rem)] group-hover:italic">{c.name}</h3>
              <p className="max-w-[40ch] text-(--s-crema-2)">{c.tagline}.</p>
              <Captura id={c.slug} className="aspect-[3/2] w-full rounded-[14px] object-cover" />
            </Enlace>
          ))}
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <DatosClaros />
        </div>
      </section>

      <Cierre />
    </>
  )
}

