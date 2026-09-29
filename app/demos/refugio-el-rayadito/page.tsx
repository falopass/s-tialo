import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG, OFERTA } from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// De la foto real de su ficha: cabaña de pino canela bajo robles, sol
// filtrado entre hojas, letrero de madera tallada que dice BIENVENIDOS.
const C = {
  bosque: '#152319',
  bosque2: '#1D3123',
  corteza: '#241A12',
  madera: '#9A5B33',
  maderaClara: '#C68A5A',
  musgo: '#8FAE7E',
  crema: '#F2EBDC',
  muda: 'rgba(242,235,220,0.7)',
  linea: 'rgba(242,235,220,0.18)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'refugio-el-rayadito',
  title: 'El Rayadito — Refugio y cabaña de montaña en Vilches, San Clemente | Sitiazo.cl',
  description:
    'Cabaña de montaña en Vilches, San Clemente: cabañas, trekking, cabalgatas, alimentación y artesanía. A la entrada de la Reserva Altos de Lircay. Consultas por WhatsApp.',
  image: `${IMG}/cabana.webp`,
})

const NAV_LINKS = [
  { label: 'El refugio', href: '#refugio' },
  { label: 'El nombre', href: '#nombre' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Luz filtrada entre hojas — el bosque de la foto real deja pasar el sol.
function LuzDeHojas({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        background:
          'radial-gradient(ellipse 60% 45% at 30% 20%, rgba(143,174,126,0.28) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 75% 60%, rgba(198,138,90,0.16) 0%, transparent 65%)',
        ...style,
      }}
    />
  )
}

// Tabla de madera con texto "tallado" — el letrero BIENVENIDOS de la foto real.
function Tablon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`inline-block px-5 py-2.5 ${className}`}
      style={{
        backgroundColor: C.madera,
        color: C.crema,
        borderRadius: 4,
        boxShadow: `inset 0 2px 0 rgba(255,255,255,0.18), inset 0 -3px 0 rgba(0,0,0,0.28), 0 4px 10px rgba(0,0,0,0.35)`,
        border: `1px solid rgba(0,0,0,0.3)`,
      }}
    >
      <span
        className={`${display.className} text-lg tracking-[0.18em] uppercase`}
        style={{ textShadow: '0 1.5px 0 rgba(0,0,0,0.45)' }}
      >
        {children}
      </span>
    </div>
  )
}

function TagBosquejo({ dark = true }: { dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] px-2.5 py-1.5`}
      style={{
        backgroundColor: dark ? C.madera : C.crema,
        color: dark ? C.crema : C.corteza,
        borderRadius: 3,
      }}
    >
      ◈ Bosquejo — se reemplaza con fotos reales al activar
    </span>
  )
}

// Rayadito dibujado a línea — el ave nativa que da nombre al refugio.
// Va marcado como bosquejo: no existe foto propia del ave en sus perfiles.
function AveBosquejo() {
  return (
    <div
      className="p-6 flex flex-col items-center text-center h-full"
      style={{ backgroundColor: C.bosque2, border: `2px dashed ${C.musgo}`, borderRadius: 16 }}
    >
      <svg viewBox="0 0 120 110" className="w-28 h-28" stroke={C.musgo} fill="none" strokeWidth="2.5" aria-hidden="true">
        {/* cuerpo */}
        <path d="M28 78c-6-18 2-36 20-44 14-6 30-4 38 6 8 11 6 26-4 34-14 11-42 14-54 4Z" />
        {/* pecho con rayas — el rayadito lleva el dorso rayado */}
        <path d="M42 58c6 4 16 5 24 2M40 66c8 5 20 6 30 1" strokeDasharray="4 3" />
        {/* cabeza y ceja */}
        <circle cx="84" cy="34" r="12" />
        <path d="M78 26l16-4" strokeWidth="3" />
        <circle cx="86" cy="32" r="1.6" fill={C.musgo} stroke="none" />
        {/* pico */}
        <path d="M95 34l12 2-12 4Z" />
        {/* cola larga con plumas espinosas */}
        <path d="M28 78L14 100M32 80l-8 22M38 82l-4 22" />
        {/* patas */}
        <path d="M58 82v14M66 80v14" />
      </svg>
      <p className={`${display.className} mt-4 text-xl`} style={{ color: C.crema }}>
        Aphrastura spinicauda
      </p>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muda }}>
        El rayadito: ave chica, inquieta y rayada que habita el bosque nativo de Vilches — y le
        presta el nombre al refugio.
      </p>
      <div className="mt-4">
        <TagBosquejo />
      </div>
    </div>
  )
}

export default function RefugioElRayadito() {
  return (
    <main className={body.className} style={{ backgroundColor: C.bosque, color: C.crema, ...SPACING }}>
      <BlitzNav
        name={<span className={display.className}>El Rayadito</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        fontClass={mono.className}
        theme={{
          over: 'dark',
          bar: 'rgba(21,35,25,0.95)',
          ink: C.crema,
          line: C.linea,
          btnBg: C.madera,
          btnInk: C.crema,
        }}
      />

      {/* HERO — la foto real de la cabaña entre robles */}
      <header id="inicio" className="relative">
        <div className="relative h-[86vh] min-h-[560px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${IMG}/cabana.webp`}
            alt="Cabaña de madera de El Rayadito entre robles, con letrero tallado Bienvenidos — foto real de su ficha de Google Maps"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(21,35,25,0.55) 0%, rgba(21,35,25,0.15) 40%, rgba(21,35,25,0.92) 88%)',
            }}
          />
          <div className="relative h-full max-w-5xl mx-auto px-5 flex flex-col justify-end pb-14">
            <Tablon>Bienvenidos</Tablon>
            <h1 className={`${display.className} mt-6 text-4xl md:text-6xl leading-[1.04] max-w-2xl`}>
              Un refugio de madera en la entrada de la cordillera de Vilches
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2" aria-label={`Valoración ${BIZ.rating} de 5 en Google Maps`}>
                <Stars value={4.5} color={C.maderaClara} />
                <span className={`${mono.className} text-sm`} style={{ color: C.crema }}>
                  {BIZ.rating} en Google Maps
                </span>
              </span>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] px-3 py-1.5`} style={{ border: `1px solid ${C.linea}`, borderRadius: 999, color: C.muda }}>
                Cabaña de montaña · Vilches
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                className={`${mono.className} inline-flex items-center gap-2 px-6 text-sm uppercase tracking-[0.14em]`}
                style={{ backgroundColor: C.maderaClara, color: C.corteza, borderRadius: 999, minHeight: 48 }}
              >
                Consultar disponibilidad →
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center px-6 text-sm uppercase tracking-[0.14em]`}
                style={{ border: `1.5px solid ${C.crema}`, color: C.crema, borderRadius: 999, minHeight: 48 }}
              >
                Ver en Google Maps
              </a>
            </div>
            <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(242,235,220,0.85)' }}>
              Su ficha figura como cerrada temporalmente — escribe antes de subir
            </p>
          </div>
        </div>
      </header>

      {/* EL REFUGIO — oferta verificada */}
      <section id="refugio" className="relative max-w-5xl mx-auto px-5 py-16 md:py-20 overflow-hidden">
        <LuzDeHojas className="inset-0" />
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.maderaClara }}>
            El refugio
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight max-w-2xl`}>
            Lo que espera al final del camino de tierra
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] md:text-base leading-relaxed" style={{ color: C.muda }}>
            El Rayadito es un refugio campesino de la Red de Turismo Rural del Maule, en el sector de
            Vilches, comuna de San Clemente. Su oferta — publicada por INDAP — va de la cabaña entre
            robles a las cabalgatas y la mesa de campo.
          </p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {OFERTA.map((o, i) => (
            <Reveal key={o.t} delay={i * 80}>
              <article
                className="h-full p-6 md:p-7 relative overflow-hidden"
                style={{
                  backgroundColor: C.bosque2,
                  border: `1px solid ${C.linea}`,
                  borderRadius: 14,
                }}
              >
                <span
                  aria-hidden="true"
                  className={display.className}
                  style={{
                    position: 'absolute',
                    top: -14,
                    right: 6,
                    fontSize: 84,
                    color: 'rgba(198,138,90,0.14)',
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${display.className} text-2xl relative`} style={{ color: C.maderaClara }}>
                  {o.t}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed relative" style={{ color: C.muda }}>
                  {o.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EL NOMBRE — el rayadito, ave nativa de Vilches */}
      <section id="nombre" className="py-16 md:py-20" style={{ backgroundColor: C.corteza }}>
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <AveBosquejo />
          </Reveal>
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.maderaClara }}>
              De dónde viene el nombre
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`} style={{ color: C.crema }}>
              Chiquito, rayado y dueño del bosque
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.muda }}>
              El rayadito es una de las aves más queridas del bosque nativo chileno: construye su nido
              con palitos ordenados como un tejido, salta de rama en rama y se acerca curioso a los
              visitantes. En Vilches se le ve y se le oye — hay registros fotográficos de la especie
              en el mismo sector donde está el refugio.
            </p>
            <p className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: C.muda }}>
              Subiendo por el valle empieza la Reserva Nacional Altos de Lircay: senderos entre
              robles y coigües, el río Lircay y el mirador del Enladrillado. El Rayadito queda en el
              camino.
            </p>
            <div className="mt-7">
              <a
                href={WA_LINK}
                className={`${mono.className} inline-flex items-center gap-2 px-6 text-sm uppercase tracking-[0.14em]`}
                style={{ backgroundColor: C.musgo, color: C.corteza, borderRadius: 999, minHeight: 48 }}
              >
                Reservar por WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="llegar" className="max-w-5xl mx-auto px-5 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.maderaClara }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-4xl leading-tight`}>
              Vilches, San Clemente — puerta de Altos de Lircay
            </h2>
            <dl className="mt-7">
              {[
                { k: 'Sector', v: 'Vilches, comuna de San Clemente' },
                { k: 'Referencia', v: `Plus code ${BIZ.plusCode}` },
                { k: 'Valoración', v: `${BIZ.rating} en Google Maps` },
                { k: 'Contacto', v: `WhatsApp ${BIZ.phoneDisplay}` },
                { k: 'Estado en su ficha', v: 'Cerrado temporalmente — confirma antes de viajar' },
              ].map((r) => (
                <div
                  key={r.k}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-3"
                  style={{ borderBottom: `1px dashed ${C.linea}` }}
                >
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.maderaClara }}>
                    {r.k}
                  </dt>
                  <dd className="text-[15px] sm:text-right" style={{ color: C.crema }}>
                    {r.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden" style={{ borderRadius: 16, border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Ubicación de El Rayadito, Vilches, San Clemente"
                className="w-full h-[340px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0E1A11', color: C.crema }}>
        <div className="max-w-5xl mx-auto px-5 py-9 flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div>
            <p className={`${display.className} text-xl`}>{BIZ.name}</p>
            <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(242,235,220,0.6)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.region}
            </p>
          </div>
          <div className={`${mono.className} text-[11px] uppercase tracking-[0.14em] space-y-1.5`} style={{ color: 'rgba(242,235,220,0.8)' }}>
            <p>
              <a href={WA_LINK} className="underline underline-offset-4">WhatsApp {BIZ.phoneDisplay}</a>
            </p>
            <p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Ficha en Google Maps
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp" />
    </main>
  )
}
