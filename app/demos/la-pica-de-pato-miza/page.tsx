import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Del interior real: madera rústica, ampolletas colgadas con cordel,
// pizarras escritas a mano y el muro de hiedra del fondo.
const C = {
  crema: '#F0E7D2',
  crema2: '#E7DCBF',
  tinta: '#2C2416',
  verde: '#3E5531',
  verdeOsc: '#22281E',
  madera: '#6E4526',
  tiza: '#F4EFE0',
  tizaMuda: 'rgba(244,239,224,0.78)',
  muda: 'rgba(44,36,22,0.72)',
  linea: 'rgba(44,36,22,0.18)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-pica-de-pato-miza',
  title: 'La Picá de Pato Miza — Picada de campo en Romeral | Sitiazo.cl',
  description:
    "Picada de campo en Av. Bernardo O'Higgins (camino J-55), Romeral. Almuerzo casero de lunes a sábado. Consultas por WhatsApp.",
  image: `${IMG}/salon.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'La ficha', href: '#ficha' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Divisor de cordel — las ampolletas del salón cuelgan de sogas.
function Cordel({ color = C.madera }: { color?: string }) {
  return (
    <div
      aria-hidden="true"
      className="h-[6px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 14px, transparent 14px 22px)`,
        backgroundSize: '22px 3px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
        opacity: 0.55,
      }}
    />
  )
}

function TagBosquejo() {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] px-2.5 py-1.5 rounded`}
      style={{ backgroundColor: C.verde, color: C.tiza }}
    >
      ◈ Bosquejo — se reemplaza con fotos reales al activar
    </span>
  )
}

// Hoja de hiedra para las esquinas del marco.
function Hiedra({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true" fill="currentColor">
      <path d="M6 54C10 38 18 26 30 22c-2 8-8 14-14 16 8-2 16-8 20-16 6 8 4 20-6 26-8 5-18 4-24 6Z" />
      <path d="M30 22c4-8 12-14 22-16-4 4-6 8-7 13-6 1-11 3-15 3Z" />
    </svg>
  )
}

// Item de pizarra: texto "a tiza" con borde a tiza.
function ItemPizarra({ k, v }: { k: string; v: string }) {
  return (
    <div
      className="px-4 py-3.5"
      style={{ border: `1.5px dashed rgba(244,239,224,0.4)`, borderRadius: 8 }}
    >
      <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(244,239,224,0.6)' }}>
        {k}
      </p>
      <p className={`${display.className} mt-1 text-lg leading-tight`} style={{ color: C.tiza }}>
        {v}
      </p>
    </div>
  )
}

function PlatoBosquejo({ titulo, detalle, icono }: { titulo: string; detalle: string; icono: 'olla' | 'plato' | 'vaso' }) {
  const paths = {
    olla: (
      <>
        <path d="M26 40h48v22a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10V40Z" fill="none" strokeWidth="2.5" />
        <path d="M26 40h48M18 48h8M74 48h8" strokeWidth="2.5" />
        <path d="M38 30c0-5 6-5 6-10M50 30c0-5 6-5 6-10" fill="none" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
    plato: (
      <>
        <circle cx="50" cy="50" r="28" fill="none" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="17" fill="none" strokeWidth="2" strokeDasharray="4 4" />
      </>
    ),
    vaso: (
      <>
        <path d="M36 22h28l-5 48H41L36 22Z" fill="none" strokeWidth="2.5" />
        <path d="M40 34h20" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M56 14l4 8" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
  }
  return (
    <div
      className="h-full p-6 flex flex-col items-center text-center"
      style={{ backgroundColor: C.crema, border: `2px dashed ${C.verde}`, borderRadius: 14 }}
    >
      <svg viewBox="0 0 100 80" className="w-20 h-16" style={{ color: C.verde }} stroke="currentColor" aria-hidden="true">
        {paths[icono]}
      </svg>
      <p className={`${display.className} mt-4 text-xl font-bold`} style={{ color: C.tinta }}>
        {titulo}
      </p>
      <p className="mt-2 text-sm" style={{ color: C.muda }}>
        {detalle}
      </p>
      <div className="mt-4">
        <TagBosquejo />
      </div>
    </div>
  )
}

export default function LaPicaDePatoMiza() {
  return (
    <main className={body.className} style={{ backgroundColor: C.crema, color: C.tinta, ...SPACING }}>
      <BlitzNav
        name={
          <span className={display.className} style={{ fontWeight: 800 }}>
            La Picá <span style={{ color: C.verde }}>del Pato</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{ over: 'light', bar: C.crema, ink: C.tinta, line: C.linea, btnBg: C.verde, btnInk: C.tiza }}
        fontClass={display.className}
      />

      {/* ── HERO: la entrada de la picá ──────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <Cordel />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-14 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-4`} style={{ color: C.verde }}>
              {BIZ.addressAlt} · {BIZ.city} · {BIZ.region}
            </p>
            <h1 className={`${display.className} text-[12vw] md:text-7xl leading-[0.95]`} style={{ fontWeight: 800 }}>
              La picá de
              <br />
              <span style={{ color: C.madera }}>Pato Miza</span>
            </h1>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muda }}>
              Picada de campo al paso del camino J-55 en Romeral: mesas de madera,
              ampolletas colgando del cordel y almuerzo casero todos los días de semana.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-transform active:scale-95 rounded-lg`}
                style={{ backgroundColor: C.verde, color: C.tiza }}
              >
                Consultar el almuerzo
              </a>
              <a
                href="#llegar"
                className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide rounded-lg`}
                style={{ color: C.verde, border: `1.5px solid ${C.verde}` }}
              >
                Cómo llegar
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Stars value={4.7} color={C.madera} />
              <p className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.muda }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <Hiedra className="absolute -top-3 -left-3 w-14 z-10" style={{ color: C.verde }} />
              <div
                className="overflow-hidden"
                style={{ borderRadius: 16, border: `6px solid ${C.madera}`, boxShadow: '0 18px 36px rgba(44,36,22,0.28)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/salon.webp`}
                  alt="Interior de La Picá de Pato Miza: mesas y sillas de madera rústica, ampolletas colgantes y muro de hiedra con pizarras"
                  className="w-full aspect-[3/4] max-h-[460px] md:max-h-[540px] object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em] text-center`} style={{ color: C.muda }}>
                El salón real — foto de su ficha de Google
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <Cordel />
      </section>

      {/* ── LA PIZARRA: datos a tiza ─────────────────────────── */}
      <section id="pizarra" className="py-14 md:py-20" style={{ backgroundColor: C.verdeOsc, color: C.tiza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: 'rgba(244,239,224,0.65)' }}>
              Escrito a mano, como en la casa
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl`} style={{ fontWeight: 800 }}>
              La pizarra de la picá
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Reveal delay={0}>
              <div className="grid grid-cols-1 gap-3">
                <ItemPizarra k="Dónde queda" v={`${BIZ.address}, ${BIZ.city}`} />
                <ItemPizarra k="El camino" v={BIZ.addressAlt} />
                <ItemPizarra k="Teléfono" v={BIZ.phoneDisplay} />
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="grid grid-cols-1 gap-3">
                <ItemPizarra k="Lunes a viernes" v={HORARIO[0].h} />
                <ItemPizarra k="Sábado" v={HORARIO[1].h} />
                <ItemPizarra k="Domingo" v={HORARIO[2].h} />
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2.5">
                <Stars value={4.7} color={C.tiza} />
                <span className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.tizaMuda }}>
                  {BIZ.rating} en Google
                </span>
              </div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.tizaMuda }}>
                Atendida por su dueña — “mujer empresaria”, dice su ficha
              </p>
            </div>
            <p className="mt-4 text-xs" style={{ color: 'rgba(244,239,224,0.55)' }}>
              Horario publicado en su ficha de Google — puede variar; confirma el del día por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── DE LA COCINA: bosquejos marcados ─────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.verde }}>
                  Lo que se alcanza a ver
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl`} style={{ fontWeight: 800 }}>
                  De la cocina de la picá
                </h2>
              </div>
              <p className="max-w-xs text-sm" style={{ color: C.muda }}>
                Solo una foto real publicada hasta ahora. Los platos van dibujados a línea
                y marcados como bosquejo — cero humo.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Reveal delay={0}>
              <PlatoBosquejo icono="olla" titulo="La olla del día" detalle="Cocina de campo servida al mediodía, de lunes a sábado." />
            </Reveal>
            <Reveal delay={80}>
              <PlatoBosquejo icono="plato" titulo="El plato de picada" detalle="Porciones generosas de mesa compartida, como manda la picá." />
            </Reveal>
            <Reveal delay={160}>
              <PlatoBosquejo icono="vaso" titulo="El fresco de la casa" detalle="Para acompañar el almuerzo en la sombra del muro de hiedra." />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LA FICHA VERIFICADA ──────────────────────────────── */}
      <section id="ficha" className="py-14 md:py-20" style={{ backgroundColor: C.crema2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <Reveal delay={0}>
            <dl
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: C.crema, border: `2px solid ${C.verde}` }}
            >
              {[
                ['Nombre', BIZ.name],
                ['Rubro', BIZ.rubro],
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['También como', BIZ.addressAlt],
                ['Teléfono', BIZ.phoneDisplay],
                ['En Google', `${BIZ.rating} ★ · ${BIZ.reviews} reseñas`],
                ['Domingo', 'Cerrado'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5" style={{ borderBottom: `1px dashed ${C.linea}` }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] self-center`} style={{ color: C.verde }}>
                    {k}
                  </dt>
                  <dd className="text-sm font-semibold text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.verde }}>
              Solo lo verificado
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl`} style={{ fontWeight: 800 }}>
              La picá, tal cual
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: C.muda }}>
              Todo lo que aparece acá sale de su ficha de Google: la dirección, el teléfono,
              el horario y la nota que le dejan los que han ido. Lo que no está confirmado,
              va marcado como bosquejo.
            </p>
            <div className="mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-transform active:scale-95 rounded-lg`}
                style={{ backgroundColor: C.madera, color: C.tiza }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────────── */}
      <section id="llegar" className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.verde }}>
              Al paso del camino
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl`} style={{ fontWeight: 800 }}>
              {BIZ.addressAlt}, {BIZ.city}
            </h2>
            <p className="mt-4 max-w-lg text-base" style={{ color: C.muda }}>
              En {BIZ.address}, la misma vía J-55 que cruza Romeral — la picá queda de camino,
              fácil de ver al entrar a la comuna.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 rounded-2xl overflow-hidden" style={{ border: `2px solid ${C.verde}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[300px] block"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.verdeOsc, color: C.tiza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl`} style={{ fontWeight: 800 }}>
              La Picá <span style={{ color: C.crema2 }}>de Pato Miza</span>
            </p>
            <p className="text-xs mt-1" style={{ color: C.tizaMuda }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </p>
          </div>
          <div className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.tizaMuda }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {BIZ.phoneDisplay}
            </a>
            <span className="mx-2" aria-hidden="true">·</span>
            <a href={BIZ.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Ficha en Maps
            </a>
          </div>
          <p className="text-[11px] w-full md:w-auto" style={{ color: 'rgba(244,239,224,0.5)' }}>
            Demo de vitrina para la pyme — hecho por Sitiazo.cl
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
