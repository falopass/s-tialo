import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG, HORARIO, BODEGAS, CONTENEDORES } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
  variable: '--un-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
  variable: '--un-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' }],
  variable: '--un-mono',
})

export const metadata: Metadata = demoMetadata({
  slug: 'espacio-unihue',
  title: 'Espacio Unihue — bodegas y contenedores en arriendo, cruce Unihue',
  description:
    'Bodegas de 150 a 1050 m² y contenedores D1-D15 en el cruce Unihue, km 260 de la Ruta 5 Sur, Talca. Nota 5,0 con 90 opiniones en Google. Consulta por WhatsApp.',
  image: `${IMG}/patio.webp`,
})

/** Asfalto, concreto, verde contenedor y amarillo de obra. */
const C = {
  asfalto: '#15181A',
  concreto: '#E9E6DC',
  concreto2: '#DDD8CA',
  tinta: '#1B1E1B',
  tintaSuave: '#5A6159',
  verde: '#2F5233',
  verdeClaro: '#7FA65A',
  amarillo: '#E8B93B',
  crema: '#F4F1E8',
} as const

/** Colores de cada unidad en el plano oficial. */
const COLORES_PLANO: Record<string, string> = {
  A1: '#E8863A',
  B1: '#D63384',
  A2: '#3B6FB5',
  B2: '#4E9B4E',
  C: '#8A9199',
  D: '#8A9199',
  F: '#C8376B',
  G: '#C8376B',
  H: '#C8376B',
  I: '#C8376B',
  E: '#3E8E41',
}

/** Franja de medición tipo cinta métrica / plano. */
function Regla({ className = 'h-2' }: { className?: string }) {
  return (
    <div className={`flex ${className}`} aria-hidden="true">
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="flex-1"
          style={{ background: i % 2 === 0 ? C.amarillo : C.asfalto }}
        />
      ))}
    </div>
  )
}

/** Numeración amarilla que llevan los contenedores en el patio. */
function EtiquetaD({ texto }: { texto: string }) {
  return (
    <span
      className="inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-semibold"
      style={{ background: C.amarillo, color: C.asfalto, fontFamily: 'var(--un-mono)' }}
    >
      {texto}
    </span>
  )
}

export default function EspacioUnihuePage() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen overflow-x-hidden`}
      style={{ background: C.concreto, color: C.tinta, fontFamily: 'var(--un-body)' }}
    >
      <BlitzNav
        name={BIZ.name}
        links={[
          { href: '#bodegas', label: 'Bodegas' },
          { href: '#contenedores', label: 'Contenedores' },
          { href: '#lugar', label: 'El lugar' },
          { href: '#llegar', label: 'Cómo llegar' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(21,24,26,.94)',
          ink: C.concreto,
          line: 'rgba(233,230,220,.18)',
          btnBg: C.amarillo,
          btnInk: C.asfalto,
        }}
        ctaLabel="WhatsApp"
      />

      {/* HERO — el patio de contenedores D1-D15 */}
      <header id="inicio" className="relative">
        <div className="relative h-[74vh] min-h-[470px] w-full">
          <Image
            src={`${IMG}/patio.webp`}
            alt="Panorámica del patio de Espacio Unihue: fila de contenedores grises numerados D1 a D15 sobre gravilla — foto de la ficha de Google"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(21,24,26,.25) 25%, rgba(21,24,26,.82) 90%)' }}
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-9 text-[#E9E6DC]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--un-mono)', color: C.amarillo }}>
                arriendo de bodegas y contenedores · cruce unihue · talca
              </p>
              <h1
                className="mt-3 text-[11.5vw] uppercase leading-[0.98] tracking-wide sm:text-6xl md:text-7xl"
                style={{ fontFamily: 'var(--un-display)' }}
              >
                Bodega grande o contenedor chico:{' '}
                <span style={{ color: C.amarillo }}>en el cruce Unihue cabe todo</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: 'rgba(233,230,220,.92)' }}>
                Once bodegas de 150 a 1050 m² y quince contenedores numerados, en un patio amplio a
                un costado de la Ruta 5 Sur, km 260.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: C.amarillo, color: C.asfalto }}
                >
                  Consultar por arriendo
                </a>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm" style={{ background: 'rgba(21,24,26,.55)', color: '#E9E6DC' }}>
                  <Stars value={5} color={C.amarillo} className="h-3.5 w-3.5" />
                  {BIZ.rating} · {BIZ.reviews} opiniones
                </span>
              </div>
            </Reveal>
          </div>
        </div>
        <Regla className="h-2 w-full" />
      </header>

      {/* DATOS DUROS */}
      <section className="border-b px-5 py-8" style={{ borderColor: `${C.tinta}22`, background: C.asfalto, color: C.concreto }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            ['11', 'bodegas en el plano'],
            ['150–1050', 'm² por bodega'],
            ['D1–D15', 'contenedores'],
            ['km 260', 'Ruta 5 Sur'],
          ].map(([n, t]) => (
            <Reveal key={t}>
              <p className="text-3xl sm:text-4xl" style={{ fontFamily: 'var(--un-display)', color: C.amarillo }}>
                {n}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--un-mono)', color: 'rgba(233,230,220,.75)' }}>
                {t}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EL PLANO — la firma visual: el plano real + la grilla de unidades */}
      <section id="bodegas" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--un-mono)', color: C.verde }}>
            el plano
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl uppercase leading-tight tracking-wide sm:text-5xl" style={{ fontFamily: 'var(--un-display)' }}>
            Once bodegas, cuatro tamaños, un solo galpón
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: C.tintaSuave }}>
            Este es el plano que ellos mismos publican en su ficha de Google: cada letra es una
            bodega con su acceso propio y su metraje marcado.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Reveal>
            <figure>
              <div
                className="overflow-hidden rounded-lg"
                style={{ border: `2px solid ${C.tinta}`, boxShadow: `6px 6px 0 rgba(21,24,26,.2)` }}
              >
                <Image
                  src={`${IMG}/plano.webp`}
                  alt="Plano oficial de Espacio Unihue: bodegas A1 y B1 de 150 m², A2 y B2 de 300 m², C, D, F, G, H e I de 450 m² y E de 1050 m², con futuras oficinas y baños — imagen de la ficha de Google"
                  width={667}
                  height={788}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full bg-white object-contain"
                />
              </div>
              <figcaption className="mt-2 text-xs" style={{ fontFamily: 'var(--un-mono)', color: C.tintaSuave }}>
                plano oficial publicado en su ficha de Google
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid content-start gap-3 sm:grid-cols-2">
            {BODEGAS.map((b, i) => (
              <Reveal key={b.id} delay={i * 40}>
                <div
                  className="rounded-md p-4"
                  style={{
                    background: C.crema,
                    border: `1.5px solid ${C.tinta}`,
                    borderTop: `6px solid ${COLORES_PLANO[b.id]}`,
                  }}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-2xl" style={{ fontFamily: 'var(--un-display)' }}>
                      {b.id}
                    </span>
                    <span className="text-sm font-semibold" style={{ fontFamily: 'var(--un-mono)', color: C.verde }}>
                      {b.m2} m²
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: C.tintaSuave }}>
                    {b.nota}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={BODEGAS.length * 40}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-[76px] items-center justify-center rounded-md px-4 py-3 text-center text-base font-semibold transition-transform hover:-translate-y-0.5 sm:col-span-2"
                style={{ background: C.verde, color: '#FFF' }}
              >
                Preguntar qué bodega está disponible →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTENEDORES */}
      <section id="contenedores" className="px-5 py-16 sm:py-20" style={{ background: C.asfalto, color: C.concreto }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--un-mono)', color: C.amarillo }}>
              al aire libre, numerados
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl uppercase leading-tight tracking-wide sm:text-5xl" style={{ fontFamily: 'var(--un-display)' }}>
              Los contenedores <span style={{ color: C.amarillo }}>D1 al D15</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: 'rgba(233,230,220,.8)' }}>
              Quince contenedores marítimos en el patio de gravilla, cada uno con su número pintado
              en amarillo. Para herramientas, stock o mudanza: se ve cuál es el tuyo.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {Array.from({ length: CONTENEDORES.total }).map((_, i) => (
              <EtiquetaD key={i} texto={`D${i + 1}`} />
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                foto: 'patio',
                pie: 'el patio, fila completa',
                alt: 'Contenedores grises numerados D1 a D15 en fila sobre el patio de gravilla de Espacio Unihue — foto de la ficha de Google',
              },
              {
                foto: 'modulos',
                pie: 'los módulos verdes',
                alt: 'Fila de módulos verdes numerados con puertas de contenedor sobre gravilla — foto de la ficha de Google',
              },
            ].map((f, i) => (
              <Reveal key={f.foto} delay={i * 80}>
                <figure>
                  <div className="overflow-hidden rounded-lg" style={{ border: `1.5px solid ${C.amarillo}` }}>
                    <Image
                      src={`${IMG}/${f.foto}.webp`}
                      alt={f.alt}
                      width={1200}
                      height={900}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs" style={{ fontFamily: 'var(--un-mono)', color: 'rgba(233,230,220,.7)' }}>
                    {f.pie} · foto de su ficha de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EL LUGAR */}
      <section id="lugar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--un-mono)', color: C.verde }}>
            el lugar
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl uppercase leading-tight tracking-wide sm:text-5xl" style={{ fontFamily: 'var(--un-display)' }}>
            Un predio entero en el cruce Unihue
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: C.tintaSuave }}>
            Espacio Unihue comparte terreno con Unihue Sport, el club del cruce: la casa club y la
            cancha están ahí mismo. El patio de bodegas y contenedores ocupa dos grandes sectores,
            delimitados en la vista aérea.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              foto: 'aerea',
              pie: 'vista aérea: los dos sectores delimitados',
              alt: 'Vista aérea del predio de Espacio Unihue con los dos sectores de bodegas y contenedores delimitados en azul, junto a Unihue Sport — imagen de la ficha de Google',
              texto:
                'Los sectores marcados son el corazón del negocio: galpón de bodegas, patio de contenedores y espacio para maniobrar con camión.',
            },
            {
              foto: 'casa-club',
              pie: 'la casa club y la cancha de Unihue Sport',
              alt: 'Casa club de ladrillo y cancha de pasto de Unihue Sport, el club deportivo que comparte el predio — foto de la ficha de Google',
              texto:
                'El punto de referencia para llegar: junto a Unihue Sport, en el cruce de la Ruta 5 Sur con la Ruta 120 hacia Chacarillas.',
            },
          ].map((f, i) => (
            <Reveal key={f.foto} delay={i * 80}>
              <figure>
                <div
                  className="overflow-hidden rounded-lg"
                  style={{ border: `2px solid ${C.tinta}`, boxShadow: `6px 6px 0 rgba(21,24,26,.16)` }}
                >
                  <Image
                    src={`${IMG}/${f.foto}.webp`}
                    alt={f.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs" style={{ fontFamily: 'var(--un-mono)', color: C.tintaSuave }}>
                  {f.pie}
                </figcaption>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                  {f.texto}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CÓMO LLEGAR + OPINIONES */}
      <section id="llegar" className="px-5 py-16 sm:py-20" style={{ background: C.concreto2 }}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--un-mono)', color: C.verde }}>
                cómo llegar
              </p>
              <h2 className="mt-3 text-4xl uppercase leading-tight tracking-wide sm:text-5xl" style={{ fontFamily: 'var(--un-display)' }}>
                Ruta 120 Chacarillas, en el cruce Unihue
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.tintaSuave }}>
                {BIZ.address}, {BIZ.comuna}. En el km 260 de la Ruta 5 Sur, toma la salida a Unihue y
                sigue por la Ruta 120: el predio está junto a Unihue Sport.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-6 space-y-2">
                {HORARIO.map((h) => (
                  <li key={h.days} className="flex items-baseline justify-between gap-4 border-b pb-2 text-base" style={{ borderColor: `${C.tinta}26` }}>
                    <span style={{ color: C.tintaSuave }}>{h.days}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2">
                <Stars value={5} color={C.verde} className="h-4 w-4" />
                <span className="text-lg font-semibold">{BIZ.rating}</span>
                <span className="text-sm" style={{ color: C.tintaSuave }}>
                  · {BIZ.reviews} opiniones en Google
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: C.verde, color: '#FFF' }}
                >
                  Escribir al {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ border: `1.5px solid ${C.tinta}`, color: C.tinta }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-lg" style={{ border: `2px solid ${C.tinta}`, boxShadow: `6px 6px 0 rgba(21,24,26,.2)` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, cruce Unihue`}
                className="h-full min-h-[320px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-5 py-14 text-center" style={{ background: C.asfalto, color: C.concreto }}>
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl uppercase leading-tight tracking-wide sm:text-4xl" style={{ fontFamily: 'var(--un-display)' }}>
            ¿Cuánto espacio necesitas?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base" style={{ color: 'rgba(233,230,220,.8)' }}>
            Dinos qué quieres guardar y te dicen qué bodega o contenedor te acomoda. Responden por
            WhatsApp.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full px-7 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: C.amarillo, color: C.asfalto }}
          >
            Consultar por WhatsApp
          </a>
        </Reveal>
      </section>

      <footer className="px-5 py-8 pb-6" style={{ background: C.asfalto, color: 'rgba(233,230,220,.7)', borderTop: `1px solid rgba(233,230,220,.15)` }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center text-sm">
          <span className="font-semibold" style={{ color: C.concreto }}>{BIZ.name}</span>
          <span>{BIZ.address} · {BIZ.comuna}, Región del Maule</span>
          <span style={{ fontFamily: 'var(--un-mono)' }}>{BIZ.phoneDisplay}</span>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
