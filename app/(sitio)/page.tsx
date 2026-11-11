import type { Metadata } from 'next'
import { Check } from '@phosphor-icons/react/dist/ssr'
import {
  ACTIVACION_FORMATTED,
  MESES_PAGADOS_ANUAL,
  OFERTA_ACTIVACION_FECHA,
  PLANS,
  SCHEMA,
  SITE,
  STARTING_PRICE,
  ofertaActivacionVigente,
  siteUrl,
} from '@/lib/config'
import { JsonLd } from '@/lib/seo'
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
import { DatosClaros } from './_components/DatosClaros'
import { DescifraEntrada } from './_components/DescifraEntrada'
import { Planes } from './_components/Planes'
import { SegunOferta } from './_components/SegunOferta'
import { TarjetaDemo } from './_components/TarjetaDemo'

export const metadata: Metadata = {
  title: 'Diseño web para pymes en Chile',
  description: SITE.description,
  alternates: { canonical: siteUrl('/') },
  openGraph: {
    title: `Tu página web desde ${PLANS.basico.priceFormatted} al mes.`,
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
    texto: `Desde ${STARTING_PRICE} con hosting, dominio y ajustes incluidos, sin permanencia. Si pagas el año, son 12 meses por el precio de ${MESES_PAGADOS_ANUAL}.`,
  },
]

/**
 * Lo que trae tener la web y lo que incluye la mensualidad. Escritos a mano a partir del plan
 * Básico de lib/config (features y comentario de `price`): si cambia lo que incluye el Básico,
 * revisa esta lista. Nada que el plan de entrada no cumpla (el SEO local es del Recomendado).
 */
const BENEFICIOS = [
  'Tus clientes ven fotos, precios y horario sin preguntarte',
  'Te escriben a tu WhatsApp con un toque',
  'Hosting, dominio y ajustes de contenido incluidos',
  'Sin permanencia',
]

const DEMOS = ['fran-wartemberg', 'los-leones', 'servimac', 'la-granja', 'entre-raices', 'my-fusion']
// Primera oración del texto oficial del dueño (app/rancho-itahue/content.ts).
const CITA_DUENO = RANCHO.paragraphs[2].split('. ')[0] + '.'

export default function HomePage() {
  // Cifra real: se cuenta en el build desde el catálogo de /demos/.
  const totalDemos = catalogo().length
  // Fecha del build; en el navegador, SegunOferta corrige con la fecha del visitante.
  const ofertaVigente = ofertaActivacionVigente()
  return (
    <>
      <JsonLd data={SCHEMA.offerCatalog} />
      {/* Hero y pieza central: el mismo objeto pasa de estructura a forma a publicada. */}
      <section className="s-proceso s-wrap" aria-label="Cómo nace tu web">
        <div className="s-proceso-hero">
          {/* Cartel de la oferta de lanzamiento: se retira solo pasada la fecha (SegunOferta). */}
          <SegunOferta
            enBuild={ofertaVigente}
            oferta={
              <p className="s-cartel s-entra mb-6">
                <strong>Activación gratis</strong> si contratas hasta el {OFERTA_ACTIVACION_FECHA}. Te ahorras{' '}
                {ACTIVACION_FORMATTED}.
              </p>
            }
          />
          <h1
            className="s-display s-entra max-w-[14ch] text-[clamp(2.6rem,5.6vw,5.25rem)]"
            aria-label={`Tu página web desde ${PLANS.basico.priceFormatted} al mes.`}
          >
            <DescifraEntrada texto="Tu página web" />
            <span className="mt-1 block">
              <span className="s-precio-lado">desde</span>{' '}
              <em className="s-precio text-(--s-amarillo)">{PLANS.basico.priceFormatted}</em>{' '}
              <span className="s-precio-lado">al mes.</span>
            </span>
          </h1>
          <p className="s-lead s-entra mt-6" style={{ '--i': 1 } as React.CSSProperties}>
            Lista en {PLANS.basico.deliveryDays} días. Y antes de pagar, te mandamos gratis un demo con tus fotos por
            WhatsApp.
          </p>
          <div data-cta-principal className="s-entra mt-8 flex flex-wrap gap-3" style={{ '--i': 2 } as React.CSSProperties}>
            <BotonDemo origen="hero" />
            <a href="#planes" className="s-btn s-btn-secundario">
              Ver precios
            </a>
          </div>
          <p className="s-entra mt-4 max-w-[52ch] text-[15px] text-(--s-ceniza)" style={{ '--i': 3 } as React.CSSProperties}>
            <SegunOferta
              enBuild={ofertaVigente}
              oferta={<>También puedes pagar el año: 12 meses por {MESES_PAGADOS_ANUAL}.</>}
              normal={
                <>
                  Más {ACTIVACION_FORMATTED} de activación. O paga el año: 12 meses por {MESES_PAGADOS_ANUAL} y sin
                  activación.
                </>
              }
            />
          </p>
          <ul className="mt-8 grid gap-2.5 text-(--s-crema)">
            {BENEFICIOS.map((b, i) => (
              <li
                key={b}
                className="s-entra-lado flex items-start gap-3"
                style={{ '--i': 4 + i } as React.CSSProperties}
              >
                <Check size={20} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-(--s-amarillo)" />
                {b}
              </li>
            ))}
          </ul>
          {/* Opcional y fuera del primer pantallazo: el nombre se arma en el escenario y va en el WhatsApp. */}
          <div className="s-entra mt-10" style={{ '--i': 8 } as React.CSSProperties}>
            <TuNegocio />
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
      <section className="s-wrap py-20 md:py-28">
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

      <section id="planes" className="scroll-mt-[var(--s-nav-h)] border-t border-(--s-linea)">
        <div className="s-wrap py-20 md:py-28">
          <h2 className="s-display s-h2 mb-14 max-w-[20ch]">Un precio claro para cada tamaño de negocio.</h2>
          <Planes />
        </div>
      </section>

      {/* Caso de cliente: Rancho Itahue, con capturas reales de su web publicada. */}
      <section className="border-t border-(--s-linea)">
        <div className="s-wrap grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
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

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-20 md:py-28">
          <DatosClaros />
        </div>
      </section>

      <Cierre />
    </>
  )
}

