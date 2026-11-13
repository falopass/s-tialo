import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import Guirnalda from './guirnalda'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, MESES, RESENAS, IMG } from './content'

// Passion One para los titulares apretados de fiesta y Nunito para el
// texto: la voz de un centro de eventos infantiles.
const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// La paleta sale del logo arcoíris: crema de fondo, tinta uva para el
// texto y cuatro vivos (fucsia, cielo, sol, pasto) en bandas y detalles.
// fucsiaF es el fucsia oscuro que alcanza contraste 4.5 con texto blanco.
const C = {
  crema: '#FFF8EC',
  tinta: '#2B2140',
  fucsia: '#D93B76',
  fucsiaF: '#B52A63',
  cielo: '#2E8FCF',
  sol: '#FFC23A',
  pasto: '#3A9E58',
  mutL: 'rgba(43,33,64,0.70)',
  mutD: 'rgba(255,248,236,0.76)',
  lineL: 'rgba(43,33,64,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'ditamis-dreams-valdivia',
  title: 'Ditamis Dreams · Cumpleaños y eventos infantiles en Valdivia',
  description:
    'Recinto para eventos infantiles en Camino a Paillao, Angachilla, Valdivia: salón techado, juegos inflables y decoración de globos. 4,4 en Google. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Celebraciones', href: '#celebramos' },
  { label: 'Los juegos', href: '#juegos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Los globos que suben al cargar: posición final, tamaño, color y tiempos.
const GLOBOS = [
  { x: '5%', top: '13%', w: 56, c: C.cielo, dur: 3.6, del: 0.1, sway: 2.2 },
  { x: '16%', top: '28%', w: 44, c: C.sol, dur: 4.3, del: 0.55, sway: 1.8 },
  { x: '30%', top: '9%', w: 68, c: C.fucsia, dur: 3.2, del: 0.95, sway: 2.4 },
  { x: '47%', top: '33%', w: 50, c: C.pasto, dur: 4.5, del: 0.3, sway: 2.0 },
  { x: '62%', top: '16%', w: 76, c: C.cielo, dur: 3.8, del: 1.25, sway: 1.9 },
  { x: '78%', top: '27%', w: 54, c: C.sol, dur: 4.1, del: 0.7, sway: 2.3 },
  { x: '90%', top: '8%', w: 46, c: C.fucsia, dur: 3.9, del: 1.5, sway: 2.1 },
]

/** Globo SVG: cuerpo, nudito y hilo. El motivo de la marca. */
function Globo({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 112" className={className} aria-hidden="true">
      <path
        d="M30 76 C24 86 36 94 29 108"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <ellipse cx="30" cy="36" rx="26" ry="34" fill={color} />
      <path d="M30 68 L24 77 L36 77 Z" fill={color} />
      <ellipse
        cx="20.5"
        cy="26"
        rx="7"
        ry="11"
        fill="#FFF8EC"
        opacity="0.32"
        transform="rotate(-18 20.5 26)"
      />
    </svg>
  )
}

/** Globito chico para viñetas e íconos. */
function Globito({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 20 26" className={className} aria-hidden="true">
      <ellipse cx="10" cy="10" rx="8" ry="10" fill={color} />
      <path d="M10 19 L7 24 L13 24 Z" fill={color} />
    </svg>
  )
}

function Rotulo({
  children,
  color,
  center = false,
}: {
  children: React.ReactNode
  color: string
  center?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] ${
        center ? 'justify-center' : ''
      }`}
      style={{ color }}
    >
      <span className="h-px w-8 shrink-0 opacity-60" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
      {center && (
        <span className="h-px w-8 shrink-0 opacity-60" style={{ backgroundColor: color }} aria-hidden="true" />
      )}
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'fucsia' | 'sol' | 'crema' | 'lineCrema' | 'lineTinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'fucsia'
      ? { backgroundColor: C.fucsiaF, color: '#fff' }
      : tone === 'sol'
        ? { backgroundColor: C.sol, color: C.tinta }
        : tone === 'crema'
          ? { backgroundColor: C.crema, color: C.tinta }
          : tone === 'lineCrema'
            ? { border: '1.5px solid rgba(255,248,236,0.55)', color: C.crema }
            : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="dd-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function WaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** Línea del H1: cada palabra entra por su propia ventana, escalonada. */
function Linea({
  palabras,
  desde,
}: {
  palabras: { t: string; color?: string }[]
  desde: number
}) {
  return (
    <span className="block" aria-hidden="true">
      {palabras.map((p, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="dd-palabra inline-block whitespace-pre"
            style={{ '--dd-d': `${desde + i * 0.14}s`, color: p.color } as CSSProperties}
          >
            {p.t}
          </span>
        </span>
      ))}
    </span>
  )
}

const CELEBRAMOS = [
  {
    n: '01',
    color: C.fucsia,
    name: 'Cumpleaños',
    desc: 'El salón se viste de fiesta: telones de colores, decoración de globos y los inflables listos para saltar toda la tarde.',
    img: 'deco-telon',
    alt: 'Decoración de cumpleaños con globos y telones de colores en Ditamis Dreams',
    pie: 'La deco de cumpleaños en el salón',
  },
  {
    n: '02',
    color: C.cielo,
    name: 'Paseos de curso',
    desc: 'Un panorama escolar con todo resuelto: juegos inflables y espacio para correr dentro de un salón techado, sin que el clima mande.',
    img: 'arco-globos',
    alt: 'Arco de globos azul, blanco y morado sobre telones de colores',
    pie: 'El arco de globos',
  },
  {
    n: '03',
    color: C.pasto,
    name: 'Tardes entretenidas',
    desc: 'También se celebra sin cumpleaños de por medio: una tarde de inflables y globos, solo para juntarse a jugar.',
    img: 'torta',
    alt: 'Torta de cumpleaños temática de granja sobre la mesa del salón',
    pie: 'La torta del cumpleaños',
  },
]

const JUEGOS_BULLETS = [
  { color: C.sol, t: 'Toboganes y castillos inflables' },
  { color: C.cielo, t: 'Salón techado con pasto sintético' },
  { color: C.fucsia, t: 'Decoración de globos y telones de colores' },
  { color: C.pasto, t: 'Lugar cálido con combustión a leña, según las opiniones' },
]

const ROT_MESES = [-2, 1.5, -1, 2]

export default function DitamisDreamsPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* Los globos suben desde abajo del viewport y quedan flotando
           en la parte alta del hero, como recién soltados. */
        @keyframes dd-sube {
          from { transform: translateY(115vh) }
          to { transform: translateY(0) }
        }
        .dd-globo {
          animation-name: dd-sube;
          animation-timing-function: cubic-bezier(.3,.55,.35,1);
          animation-fill-mode: both;
          will-change: transform;
        }
        @keyframes dd-vaiven {
          0%, 100% { transform: rotate(-6.5deg) }
          50% { transform: rotate(6deg) }
        }
        .dd-vaiven {
          animation-name: dd-vaiven;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transform-origin: 50% 10%;
        }
        /* El titular entra palabra por palabra cuando los globos ya
           van a la mitad del camino. */
        @keyframes dd-palabra {
          from { transform: translateY(115%) }
          to { transform: translateY(0) }
        }
        .dd-palabra { animation: dd-palabra .8s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--dd-d, 0s) }
        @keyframes dd-fade {
          from { opacity: 0; transform: translateY(16px) }
          to { opacity: 1; transform: none }
        }
        .dd-fade { animation: dd-fade .9s ease-out both; animation-delay: var(--dd-d, 0s) }
        /* La guirnalda superior se balancea una vez y queda quieta. */
        @keyframes dd-columpio {
          0% { transform: rotate(0) }
          18% { transform: rotate(-4.5deg) }
          42% { transform: rotate(3deg) }
          66% { transform: rotate(-1.6deg) }
          100% { transform: rotate(0) }
        }
        .dd-columpio { transform-origin: 50% 50%; animation: dd-columpio 2.6s ease-in-out 1.55s both }

        .dd-btn { transition: transform .18s ease, filter .18s ease }
        .dd-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .dd-btn:active { transform: scale(.96) }
        .dd-page a:focus-visible { outline: 3px solid ${C.sol}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .dd-globo, .dd-vaiven, .dd-palabra, .dd-fade, .dd-columpio { animation: none !important }
          .dd-g path { transition: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(255,248,236,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.fucsiaF,
          btnInk: '#fff',
        }}
      />

      <div className="dd-page">
        {/* ── 1 · Hero: suben los globos ── */}
        <section
          id="inicio"
          className="relative min-h-svh flex flex-col justify-end overflow-hidden"
          style={{ backgroundColor: C.tinta }}
        >
          <div className="absolute inset-0">
            <Image
              src={`${IMG}/hero.webp`}
              alt="Salón techado de Ditamis Dreams con juegos inflables, telones de colores y pasto sintético"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* velo uva para leer sobre la foto */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(43,33,64,0.60) 0%, rgba(43,33,64,0.34) 38%, rgba(43,33,64,0.92) 100%)',
            }}
            aria-hidden="true"
          />
          {/* los globos que suben */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {GLOBOS.map((g, i) => (
              <div
                key={i}
                className="dd-globo absolute"
                style={
                  {
                    left: g.x,
                    top: g.top,
                    width: g.w,
                    animationDuration: `${g.dur}s`,
                    animationDelay: `${g.del}s`,
                  } as CSSProperties
                }
              >
                <div
                  className="dd-vaiven"
                  style={{ animationDuration: `${g.sway}s`, animationDelay: `${g.del}s` }}
                >
                  <Globo color={g.c} className="block w-full h-auto" />
                </div>
              </div>
            ))}
          </div>
          {/* la guirnalda superior */}
          <div className="absolute top-[72px] md:top-[84px] inset-x-0 px-4 md:px-10 pointer-events-none">
            <Guirnalda
              balanceo
              colores={[C.fucsia, C.sol, C.cielo, C.pasto]}
              cuerda="rgba(255,248,236,0.75)"
            />
          </div>

          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-48 pb-9 md:pb-12">
            <p
              className="dd-fade flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] mb-5"
              style={{ color: C.sol, '--dd-d': '0.9s' } as CSSProperties}
            >
              <span className="h-px w-9" style={{ backgroundColor: 'rgba(255,194,58,0.55)' }} aria-hidden="true" />
              Valdivia · Angachilla
            </p>
            <h1
              className={`${display.className} font-black leading-[0.95] text-[clamp(3.1rem,13.5vw,6.6rem)]`}
              style={{ color: C.crema }}
              aria-label="Cumpleaños con inflables, bajo techo."
            >
              <Linea palabras={[{ t: 'Cumpleaños' }]} desde={1.0} />
              <Linea
                palabras={[
                  { t: 'con\u00A0' },
                  { t: 'inflables,', color: C.sol },
                ]}
                desde={1.14}
              />
              <Linea palabras={[{ t: 'bajo\u00A0' }, { t: 'techo.' }]} desde={1.42} />
            </h1>
            <p
              className="dd-fade mt-5 max-w-md text-base md:text-lg leading-relaxed font-medium"
              style={{ color: 'rgba(255,248,236,0.9)', '--dd-d': '1.75s' } as CSSProperties}
            >
              Salón techado con juegos inflables, pasto sintético y
              decoración de globos en Camino a Paillao. Cumpleaños,
              paseos de curso y tardes entretenidas.
            </p>
            <div className="dd-fade mt-7 flex flex-wrap gap-3" style={{ '--dd-d': '1.9s' } as CSSProperties}>
              <Btn href={WA_LINK} tone="fucsia">
                <WaIcon className="w-[18px] h-[18px]" />
                Reserva por WhatsApp
              </Btn>
              <Btn href="#juegos" tone="lineCrema" external={false}>
                Ver los juegos
              </Btn>
            </div>
          </div>

          {/* barra de datos al pie del hero */}
          <div
            className="dd-fade relative border-t"
            style={
              {
                borderColor: 'rgba(255,248,236,0.25)',
                backgroundColor: 'rgba(43,33,64,0.55)',
                backdropFilter: 'blur(6px)',
                '--dd-d': '2.05s',
              } as CSSProperties
            }
          >
            <div
              className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] uppercase tracking-[0.18em] font-bold"
              style={{ color: 'rgba(255,248,236,0.85)' }}
            >
              <span>Salón techado</span>
              <span>Camino a Paillao, Angachilla</span>
              <span style={{ color: C.sol }}>4,4 en Google · 61 opiniones</span>
            </div>
          </div>
        </section>

        {/* ── 2 · Qué celebramos ── */}
        <section id="celebramos" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 md:pt-9">
            <Guirnalda
              colores={[C.fucsia, C.sol, C.cielo, C.pasto]}
              cuerda="rgba(43,33,64,0.35)"
            />
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-10 md:pt-14">
            <Reveal>
              <Rotulo color={C.fucsiaF}>Qué se celebra aquí</Rotulo>
              <h2
                className={`${display.className} font-black leading-[0.98] text-[clamp(2.4rem,7vw,4.6rem)] mt-4 max-w-2xl`}
                style={{ color: C.tinta }}
              >
                Hay fiesta para <span style={{ color: C.fucsia }}>cada excusa.</span>
              </h2>
            </Reveal>

            {/* 01 Cumpleaños: texto + foto con globos en la esquina */}
            <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
              <Reveal>
                <p
                  className={`${display.className} font-black leading-none text-[clamp(2.8rem,6vw,4.8rem)]`}
                  style={{ color: C.fucsia }}
                >
                  {CELEBRAMOS[0].n}
                </p>
                <h3
                  className={`${display.className} font-bold leading-[1] text-[clamp(2rem,4.6vw,3.2rem)] mt-1`}
                  style={{ color: C.tinta }}
                >
                  {CELEBRAMOS[0].name}
                </h3>
                <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                  {CELEBRAMOS[0].desc}
                </p>
              </Reveal>
              <Reveal delay={130}>
                <figure className="relative max-w-[440px]">
                  <div
                    className="relative aspect-square overflow-hidden rounded-[28px] rotate-[1.2deg]"
                    style={{ boxShadow: '0 20px 48px rgba(43,33,64,0.20)' }}
                  >
                    <Image
                      src={`${IMG}/${CELEBRAMOS[0].img}.webp`}
                      alt={CELEBRAMOS[0].alt}
                      fill
                      sizes="(min-width: 768px) 44vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -left-2 flex items-end pointer-events-none" aria-hidden="true">
                    <Globo color={C.sol} className="w-9 h-auto -rotate-12" />
                    <Globo color={C.fucsia} className="w-12 h-auto -ml-1.5" />
                  </div>
                  <figcaption
                    className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-right"
                    style={{ color: C.mutL }}
                  >
                    {CELEBRAMOS[0].pie}
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* 02 Paseos de curso: polaroid girada + texto */}
            <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
              <Reveal>
                <figure
                  className="relative max-w-[380px] mx-auto md:mx-0 rounded-[10px] p-3 pb-11 -rotate-2"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 18px 44px rgba(43,33,64,0.18)' }}
                >
                  <div className="relative aspect-square overflow-hidden rounded-[6px]">
                    <Image
                      src={`${IMG}/${CELEBRAMOS[1].img}.webp`}
                      alt={CELEBRAMOS[1].alt}
                      fill
                      sizes="(min-width: 768px) 38vw, 80vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="absolute bottom-3 inset-x-0 text-center text-[11px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: C.mutL }}
                  >
                    {CELEBRAMOS[1].pie}
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={130}>
                <p
                  className={`${display.className} font-black leading-none text-[clamp(2.8rem,6vw,4.8rem)]`}
                  style={{ color: C.cielo }}
                >
                  {CELEBRAMOS[1].n}
                </p>
                <h3
                  className={`${display.className} font-bold leading-[1] text-[clamp(2rem,4.6vw,3.2rem)] mt-1`}
                  style={{ color: C.tinta }}
                >
                  {CELEBRAMOS[1].name}
                </h3>
                <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                  {CELEBRAMOS[1].desc}
                </p>
              </Reveal>
            </div>

            {/* 03 Tardes entretenidas: arco centrado */}
            <div className="mt-14 md:mt-20 max-w-xl mx-auto text-center">
              <Reveal>
                <figure>
                  <div
                    className="relative mx-auto w-56 md:w-64 aspect-[3/4] overflow-hidden rounded-t-full"
                    style={{ boxShadow: '0 18px 44px rgba(43,33,64,0.20)' }}
                  >
                    <Image
                      src={`${IMG}/${CELEBRAMOS[2].img}.webp`}
                      alt={CELEBRAMOS[2].alt}
                      fill
                      sizes="(min-width: 768px) 256px, 224px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em]"
                    style={{ color: C.mutL }}
                  >
                    {CELEBRAMOS[2].pie}
                  </figcaption>
                </figure>
                <p
                  className={`${display.className} font-black leading-none text-[clamp(2.8rem,6vw,4.2rem)] mt-6`}
                  style={{ color: C.pasto }}
                >
                  {CELEBRAMOS[2].n}
                </p>
                <h3
                  className={`${display.className} font-bold leading-[1] text-[clamp(2rem,4.6vw,3.2rem)] mt-1`}
                  style={{ color: C.tinta }}
                >
                  {CELEBRAMOS[2].name}
                </h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                  {CELEBRAMOS[2].desc}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3 · Los juegos: mosaico roto sobre uva ── */}
        <section id="juegos" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.sol}>Los juegos</Rotulo>
              <h2
                className={`${display.className} font-black leading-[0.98] text-[clamp(2.4rem,7vw,4.6rem)] mt-4 max-w-2xl`}
                style={{ color: C.crema }}
              >
                Un salón completo <span style={{ color: C.sol }}>de inflables.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                Pasto sintético en el piso, telones de colores en los muros
                y juegos inflables de verdad para gastar la tarde entera.
              </p>
            </Reveal>

            <div className="mt-10 md:mt-14 grid md:grid-cols-[1.3fr_1fr] gap-6 md:gap-9 items-start">
              <Reveal>
                <figure>
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-[28px]"
                    style={{ boxShadow: '0 22px 52px rgba(0,0,0,0.35)' }}
                  >
                    <Image
                      src={`${IMG}/inflables.webp`}
                      alt="Juegos inflables tipo bloques con tobogán dentro del salón de Ditamis Dreams"
                      fill
                      sizes="(min-width: 768px) 56vw, 90vw"
                      className="object-cover"
                    />
                    <figcaption
                      className="absolute bottom-3 left-3 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em]"
                      style={{ backgroundColor: 'rgba(43,33,64,0.72)', color: 'rgba(255,248,236,0.95)' }}
                    >
                      El salón, lleno de juegos
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
              <div className="relative">
                <Reveal delay={140} className="w-[68%] ml-auto -mt-12 md:w-full md:ml-0 md:mt-10">
                  <figure className="rotate-[2deg] md:rotate-[1.5deg]">
                    <div
                      className="relative aspect-[3/4] overflow-hidden rounded-[24px] border-4"
                      style={{ borderColor: 'rgba(255,248,236,0.9)', boxShadow: '0 22px 52px rgba(0,0,0,0.35)' }}
                    >
                      <Image
                        src={`${IMG}/tobogan.webp`}
                        alt="El tobogán inflable amarillo del salón en plena bajada"
                        fill
                        sizes="(min-width: 768px) 32vw, 62vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-right"
                      style={{ color: 'rgba(255,248,236,0.65)' }}
                    >
                      El tobogán grande
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={220}>
                  <div
                    className="mt-5 md:mt-0 md:absolute md:-left-24 md:-bottom-6 w-fit max-w-[260px] -rotate-2 rounded-2xl px-5 py-4"
                    style={{ backgroundColor: C.sol, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
                  >
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.tinta }}>
                      <Globito color={C.fucsiaF} className="w-3.5 h-auto" />
                      Y con agua
                    </p>
                    <p className="mt-1 text-[15px] font-extrabold leading-snug" style={{ color: C.tinta }}>
                      Inflable acuático para eventos
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={120}>
              <ul className="mt-12 md:mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
                {JUEGOS_BULLETS.map((b) => (
                  <li key={b.t} className="flex items-start gap-3">
                    <Globito color={b.color} className="w-4 h-auto mt-1 shrink-0" />
                    <span className="text-[15px] md:text-base font-semibold leading-snug" style={{ color: 'rgba(255,248,236,0.92)' }}>
                      {b.t}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · Opiniones: la nota en grande + globos de diálogo ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.fucsiaF}>Las opiniones</Rotulo>
              </Reveal>
              <Reveal delay={90}>
                <p
                  className={`${display.className} font-black leading-[0.85] text-[clamp(5rem,14vw,8rem)] mt-4`}
                  style={{ color: C.tinta }}
                >
                  {BIZ.rating}
                </p>
                <Stars value={BIZ.ratingValue} color={C.sol} size={22} className="w-5 h-5" />
                <p className="mt-2 text-sm font-bold" style={{ color: C.tinta }}>
                  {BIZ.reviews} opiniones en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.fucsiaF, textDecorationColor: 'rgba(181,42,99,0.4)' }}
                >
                  Ver la ficha en Google Maps
                </a>
              </Reveal>
            </div>
            <div className="flex flex-col gap-7">
              {RESENAS.map((r, i) => (
                <Reveal key={r.author} delay={i * 130} className={i === 1 ? 'md:ml-12' : 'md:mr-12'}>
                  <blockquote
                    className="relative rounded-[26px] p-6 md:p-7 bg-white"
                    style={{ border: `1.5px solid ${C.lineL}`, boxShadow: '0 14px 34px rgba(43,33,64,0.10)' }}
                  >
                    <span
                      className="absolute -bottom-[9px] left-10 w-4 h-4 rotate-45 bg-white"
                      style={{ borderRight: `1.5px solid ${C.lineL}`, borderBottom: `1.5px solid ${C.lineL}` }}
                      aria-hidden="true"
                    />
                    <p className="text-[15px] md:text-base leading-relaxed" style={{ color: C.tinta }}>
                      «{r.text}»
                    </p>
                    <footer className="mt-4 flex items-center gap-2.5">
                      <Globito color={i === 0 ? C.fucsia : C.cielo} className="w-4 h-auto" />
                      <span className="text-sm font-bold" style={{ color: C.tinta }}>
                        {r.author}
                      </span>
                      <span className="text-xs" style={{ color: C.mutL }}>
                        · opinión en Google
                      </span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 · Reserva: la banda fucsia con los meses ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.fucsiaF }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 pt-5 pb-14 md:pb-16 text-center">
            <Guirnalda
              colores={[C.crema, C.sol, C.cielo, C.crema]}
              cuerda="rgba(255,248,236,0.6)"
            />
            <Reveal>
              <Rotulo color={C.crema} center>
                Reserva con anticipación
              </Rotulo>
            </Reveal>
            <Reveal delay={90}>
              <h2
                className={`${display.className} font-black leading-[0.98] text-[clamp(2.3rem,7vw,4.6rem)] mt-4`}
                style={{ color: C.crema }}
              >
                El cumpleaños que se acuerdan <span style={{ color: C.sol }}>todo el año.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base md:text-lg font-medium" style={{ color: 'rgba(255,248,236,0.92)' }}>
                Disponible para tus eventos:
              </p>
              <p className="mt-4 flex flex-wrap justify-center gap-2.5">
                {MESES.map((m, i) => (
                  <span
                    key={m}
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-bold capitalize"
                    style={{
                      backgroundColor: 'rgba(255,248,236,0.16)',
                      border: '1px solid rgba(255,248,236,0.45)',
                      color: C.crema,
                      transform: `rotate(${ROT_MESES[i]}deg)`,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </p>
              <p className="mt-6 text-xl md:text-2xl font-extrabold" style={{ color: C.sol }}>
                Reserva tu evento con anticipación: quedan pocos cupos.
              </p>
              <div className="mt-7 flex justify-center">
                <Btn href={WA_LINK} tone="sol">
                  <WaIcon className="w-[18px] h-[18px]" />
                  Reservar por WhatsApp
                </Btn>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · Cómo llegar ── */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.fucsiaF}>Cómo llegar</Rotulo>
                <h2
                  className={`${display.className} font-black leading-[0.98] text-[clamp(2.4rem,6vw,4.2rem)] mt-4`}
                  style={{ color: C.tinta }}
                >
                  Camino a Paillao, <span style={{ color: C.cielo }}>Angachilla.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <address className="not-italic mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                  {BIZ.address}, {BIZ.city}
                  <br />
                  {BIZ.region}, Chile
                </address>
                <div className="mt-6 space-y-3">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 tap-44 group">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: C.fucsiaF }}
                    >
                      <WaIcon className="w-[18px] h-[18px] text-white" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutL }}>
                        WhatsApp
                      </span>
                      <span className="block text-[15px] font-bold" style={{ color: C.tinta }}>
                        {BIZ.phoneDisplay}
                      </span>
                    </span>
                  </a>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 tap-44 group">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: C.cielo }}
                    >
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.2" cy="6.8" r="0.6" fill="#fff" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutL }}>
                        Instagram
                      </span>
                      <span className="block text-[15px] font-bold" style={{ color: C.tinta }}>
                        {BIZ.igHandle}
                      </span>
                    </span>
                  </a>
                  <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 tap-44 group">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: C.tinta }}
                    >
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="#fff" aria-hidden="true">
                        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutL }}>
                        Facebook
                      </span>
                      <span className="block text-[15px] font-bold" style={{ color: C.tinta }}>
                        {BIZ.nameSocial}
                      </span>
                    </span>
                  </a>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Btn href={WA_LINK} tone="fucsia">
                    <WaIcon className="w-[18px] h-[18px]" />
                    Reservar por WhatsApp
                  </Btn>
                  <Btn href={MAPS_URL} tone="lineTinta">
                    Abrir en Google Maps
                  </Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div
                className="relative w-full overflow-hidden rounded-[28px] aspect-[4/3] min-h-[300px]"
                style={{ border: `1.5px solid ${C.lineL}`, boxShadow: '0 20px 48px rgba(43,33,64,0.16)' }}
              >
                <LazyMap
                  title={`Mapa: Ditamis Dreams, Camino a Paillao, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 7 · Footer compacto ── */}
        <footer style={{ backgroundColor: C.tinta, color: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo de Ditamis Dreams"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full"
                />
                <div>
                  <p className={`${display.className} font-bold text-xl leading-none`}>{BIZ.name}</p>
                  <p className="text-xs mt-1.5" style={{ color: C.mutD }}>
                    {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,248,236,0.85)' }}>
                  WhatsApp
                </a>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,248,236,0.85)' }}>
                  Instagram
                </a>
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,248,236,0.85)' }}>
                  Facebook
                </a>
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(255,248,236,0.14)' }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,248,236,0.6)' }}>
                Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.crema }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.name}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.sol }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
