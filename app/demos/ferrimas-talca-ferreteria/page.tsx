import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_DESPACHO,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  RUBROS,
  HORARIO,
  RESENAS,
} from './content'

const display = localFont({
  src: '../../fonts/baloo-2/normal-400-800.woff2',
  weight: '400 800',
})
const body = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })
const mono = localFont({ src: '../../fonts/space-mono/normal-400.woff2', weight: '400' })
const monoBold = localFont({ src: '../../fonts/space-mono/normal-700.woff2', weight: '700' })

/**
 * Dirección de arte: «la ferretería del barrio, pegada con cinta».
 * Del letrero real de FerriMas sale la paleta: papel marfil, el azul
 * de su marca y el rojo del rótulo FERRETERÍA y su vaquero. Las fotos
 * se pegan como polaroids con cinta; los rubros se fichan como góndola
 * numerada en mono, porque la idea es exactamente la que dicen sus
 * reseñas: chica por fuera, surtida por dentro. Baloo 2 pone la letra
 * redonda de almacén de esquina; Karla lee el detalle.
 */
const C = {
  paper: '#FBF6EC',
  card: '#FFFDF7',
  azul: '#1B4B9C',
  azulDeep: '#12336B',
  rojo: '#C0392B',
  rojoDeep: '#8F2A20',
  ink: '#232A33',
  gris: '#5A6270',
  line: 'rgba(27,75,156,0.20)',
  cinta: 'rgba(240,220,160,0.75)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferrimas-talca-ferreteria',
  title: 'FerriMas Ferretería — la ferretería del barrio en 14 Oriente, Talca',
  description:
    'Ferretería atendida por sus dueños en Catorce Oriente 1848, Talca. Herramientas, gasfitería, construcción y pinturas, con despacho gratis dentro de Talca.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El góndola', href: '#gondola' },
  { label: 'Adentro', href: '#adentro' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Despacho y mapa', href: '#local' },
]

/** Cinta adhesiva en la esquina de una foto polaroid. */
function Tape({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute w-20 h-6 ${className}`}
      style={{
        backgroundColor: C.cinta,
        borderLeft: '1px dashed rgba(0,0,0,0.08)',
        borderRight: '1px dashed rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      }}
    />
  )
}

/** Foto polaroid pegada con cinta, con leyenda en mono. */
function Pego({
  src,
  alt,
  caption,
  rotate = '-1.5deg',
  className = '',
}: {
  src: string
  alt: string
  caption: string
  rotate?: string
  className?: string
}) {
  return (
    <figure
      className={`relative bg-white p-3 pb-10 shadow-[0_10px_30px_rgba(27,75,156,0.16)] ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
      <div className="relative overflow-hidden">
        <Image src={src} alt={alt} width={640} height={640} className="w-full h-auto object-cover" />
      </div>
      <figcaption
        className={`${mono.className} absolute bottom-3 left-3 right-3 text-[11px] uppercase tracking-[0.14em]`}
        style={{ color: C.gris }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

/** Fila de góndola: número, rubro del letrero, etiqueta "en tienda". */
function Fila({ n, rubro }: { n: string; rubro: string }) {
  return (
    <li
      className="flex items-center gap-4 md:gap-6 py-4 border-b last:border-b-0"
      style={{ borderColor: C.line }}
    >
      <span className={`${monoBold.className} text-sm w-10 shrink-0`} style={{ color: C.rojo }}>
        {n}
      </span>
      <span
        className={`${display.className} font-semibold text-xl md:text-3xl leading-tight flex-1`}
        style={{ color: C.azulDeep }}
      >
        {rubro}
      </span>
      <span
        className={`${mono.className} hidden sm:inline-block text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-sm`}
        style={{ backgroundColor: 'rgba(27,75,156,0.08)', color: C.azul }}
      >
        en tienda
      </span>
    </li>
  )
}

export default function FerrimasDemo() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} font-bold`}>
            Ferri<span style={{ color: C.rojo }}>M</span>as
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.azul, btnInk: '#FFFFFF' }}
      />
      <WaFab href={WA_LINK} label="Escribir a FerriMas por WhatsApp" />
      <DemoBand name={BIZ.name} />

      {/* ── HERO: papel, letra redonda, fachada pegada ─────────────── */}
      <section id="inicio" className="relative pt-28 md:pt-36 pb-14 md:pb-20 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal>
              <p
                className={`${monoBold.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5`}
                style={{ color: C.rojo }}
              >
                Ferretería de barrio — 14 Oriente, Talca
              </p>
              <h1
                className={`${display.className} font-extrabold text-[2.6rem] md:text-7xl leading-[1.02] tracking-tight`}
                style={{ color: C.azulDeep }}
              >
                Se ve chica por fuera.{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Adentro está todo.</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 h-[0.32em] -rotate-1 rounded-sm"
                    style={{ backgroundColor: 'rgba(192,57,43,0.22)' }}
                  />
                </span>
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.gris }}>
                FerriMas es la ferretería de la esquina de 14 Oriente: la atienden sus propios dueños,
                tiene despacho gratis dentro de Talca y —lo dicen sus clientes— siempre hay lo que
                uno anda buscando.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold inline-flex items-center gap-2.5 h-[50px] px-6 rounded-full text-[15px] transition-transform active:scale-95`}
                  style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.7 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.4Z" />
                  </svg>
                  Consultar al WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold inline-flex items-center h-[50px] px-6 rounded-full text-[15px] border-2 transition-transform active:scale-95`}
                  style={{ borderColor: C.azul, color: C.azul }}
                >
                  Cómo llegar
                </a>
              </div>
              <p className={`${mono.className} mt-5 text-xs`} style={{ color: C.gris }}>
                ★ {BIZ.rating} en Google · {BIZ.reviews} reseñas · despacho gratis en Talca
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="relative max-w-md mx-auto w-full">
              <Pego
                src={`${IMG}/fachada.webp`}
                alt="Fachada de FerriMas en Catorce Oriente: letrero amarillo FERRETERÍA y rollos de malla en la vereda"
                caption="14 Oriente 1848 — la esquina"
                rotate="-2deg"
              />
              <span
                aria-hidden="true"
                className={`${monoBold.className} absolute -bottom-4 -right-2 rotate-3 px-3 py-2 text-[11px] uppercase tracking-[0.16em] shadow-md`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Despacho gratis · Talca
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EL GÓNDOLA: rubros del letrero real, numerados ─────────── */}
      <section id="gondola" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p
              className={`${monoBold.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.rojo }}
            >
              El góndola
            </p>
            <h2
              className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight max-w-3xl`}
              style={{ color: C.azulDeep }}
            >
              Lo que anuncia su letrero, pasillo por pasillo
            </h2>
            <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: C.gris }}>
              Estos son los rubros que FerriMas pintó en su rótulo. Si no lo ve, pregunte: en una
              ferretería de barrio el dueño sabe en qué repisa quedó.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-9 border-t" style={{ borderColor: C.line }}>
              {RUBROS.map((r, i) => (
                <Fila key={r} n={`P${i + 1}`} rubro={r} />
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── ADENTRO: collage de fotos reales pegadas ───────────────── */}
      <section id="adentro" className="px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p
              className={`${monoBold.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.rojo }}
            >
              Adentro
            </p>
            <h2
              className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight max-w-3xl`}
              style={{ color: C.azulDeep }}
            >
              El pasillo, tal como es
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 items-start">
            <Reveal className="col-span-2 md:col-span-2">
              <Pego
                src={`${IMG}/interior.webp`}
                alt="Interior de FerriMas: pasillo con repisas de madera llenas de herramientas y clientes comprando"
                caption="El pasillo de siempre"
                rotate="-1.6deg"
              />
            </Reveal>
            <Reveal delay={80}>
              <Pego
                src={`${IMG}/producto.webp`}
                alt="Tarro de masilla mágica con el precio escrito a mano, entre las repisas de FerriMas"
                caption="Precio escrito a mano"
                rotate="2deg"
              />
            </Reveal>
            <Reveal delay={140}>
              <Pego
                src={`${IMG}/pinturas.webp`}
                alt="Pinturas en aerosol H-Full en una repisa de FerriMas"
                caption="Pinturas en aerosol"
                rotate="-2.4deg"
              />
            </Reveal>
            <Reveal delay={200} className="col-span-2 md:col-span-4 max-w-md mx-auto w-full">
              <Pego
                src={`${IMG}/letrero.webp`}
                alt="Letrero de la esquina de FerriMas: rótulo amarillo con el vaquero y el anuncio de gasfitería, electricidad y herramientas"
                caption="El cubo de la esquina"
                rotate="1.4deg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS: cuaderno rayado ───────────────────────────────── */}
      <section id="resenas" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <p
              className={`${monoBold.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.rojo }}
            >
              Lo que dice el barrio
            </p>
            <h2
              className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight`}
              style={{ color: C.azulDeep }}
            >
              {BIZ.rating} estrellas y subiendo
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <Stars value={4.7} color={C.rojo} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`} style={{ color: C.gris }}>
                ~{BIZ.reviews} reseñas en Google
              </span>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-bold mt-7 inline-flex items-center h-[50px] px-6 rounded-full text-[15px] transition-transform active:scale-95`}
              style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
            >
              Preguntar por un producto
            </a>
          </Reveal>
          <div className="space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <blockquote
                  className="p-5 md:p-6 rounded-sm shadow-[0_6px_20px_rgba(27,75,156,0.10)]"
                  style={{
                    backgroundColor: '#FFFFFF',
                    backgroundImage:
                      'repeating-linear-gradient(180deg, transparent 0, transparent 27px, rgba(27,75,156,0.10) 27px, rgba(27,75,156,0.10) 28px)',
                    borderLeft: `4px solid ${C.rojo}`,
                  }}
                >
                  <p className="text-[15px] md:text-base leading-7" style={{ color: C.ink }}>
                    “{r.texto}”
                  </p>
                  <footer
                    className={`${monoBold.className} mt-4 text-xs uppercase tracking-[0.18em]`}
                    style={{ color: C.rojo }}
                  >
                    — {r.autor} · reseña de Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESPACHO + MAPA ────────────────────────────────────────── */}
      <section id="local" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.rojoDeep }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p
              className={`${monoBold.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Despacho y horario
            </p>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight`} style={{ color: '#FFFFFF' }}>
              Despacho gratis dentro de Talca
            </h2>
            <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Escríbales por WhatsApp, pida lo que necesita y se lo llevan a la casa. La tienda está
              en Catorce Oriente 1848, entre 7 y 8 Norte.
            </p>
            <ul className="mt-7 space-y-2.5">
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-baseline gap-3 text-[15px]">
                  <span className={`${monoBold.className} w-40 shrink-0 text-[13px]`} style={{ color: 'rgba(255,255,255,0.72)' }}>
                    {h.dia}
                  </span>
                  <span className={`${display.className} font-bold`} style={{ color: '#FFFFFF' }}>
                    {h.hora}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_DESPACHO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-bold mt-8 inline-flex items-center h-[50px] px-6 rounded-full text-[15px] transition-transform active:scale-95`}
              style={{ backgroundColor: '#FFFFFF', color: C.rojoDeep }}
            >
              Pedir despacho por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="bg-white p-3 shadow-[0_16px_44px_rgba(0,0,0,0.25)] -rotate-1">
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[300px] md:h-[380px] border-0"
                loading="lazy"
              />
              <p className={`${mono.className} text-center text-[11px] uppercase tracking-[0.14em] pt-3 pb-1`} style={{ color: C.gris }}>
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: C.azulDeep }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className={`${display.className} font-bold text-lg`} style={{ color: '#FFFFFF' }}>
            Ferri<span style={{ color: '#F5C518' }}>M</span>as Ferretería
          </p>
          <p className={`${mono.className} text-xs`} style={{ color: 'rgba(255,255,255,0.75)' }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>
    </div>
  )
}
