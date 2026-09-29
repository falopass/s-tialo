import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-serif-4/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Del interior real publicado en su ficha: muros crema, lámparas de cobre,
// guardabarros color vino y puertas de madera en arco.
const C = {
  papel: '#F3E9D7',
  papel2: '#EDE0C8',
  tinta: '#2E2118',
  vino: '#5E1F27',
  vinoOsc: '#47171E',
  cobre: '#B4743A',
  cobreClaro: '#D89A62',
  muda: 'rgba(46,33,24,0.72)',
  linea: 'rgba(46,33,24,0.16)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'meson-de-romeral',
  title: 'Mesón de Romeral — Cocina chilena en la Avenida Libertad | Sitiazo.cl',
  description:
    'Restaurante en Av. Libertad 1184, Romeral. Almuerzo de lunes a sábado y atención de noche de miércoles a sábado. Reservas por WhatsApp.',
  image: `${IMG}/salon.webp`,
})

const NAV_LINKS = [
  { label: 'El horario', href: '#horario' },
  { label: 'La ficha', href: '#ficha' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Marco en arco — las puertas del salón real son de madera en arco.
function Arco({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ borderRadius: '999px 999px 14px 14px', border: `5px solid ${C.vino}`, backgroundColor: C.papel2 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  )
}

function TagBosquejo() {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] px-2.5 py-1.5`}
      style={{ backgroundColor: C.vino, color: C.papel, borderRadius: 3 }}
    >
      ◈ Bosquejo — se reemplaza con fotos reales al activar
    </span>
  )
}

// Plato en bosquejo: vajilla dibujada a línea, honestamente marcada.
function PlatoBosquejo({ titulo, detalle, icono }: { titulo: string; detalle: string; icono: 'plato' | 'copa' | 'jarra' }) {
  const paths = {
    plato: (
      <>
        <circle cx="50" cy="46" r="30" fill="none" strokeWidth="2.5" />
        <circle cx="50" cy="46" r="18" fill="none" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M50 20v-8M50 80v-8M20 46h-8M80 46h8" strokeWidth="2.5" />
      </>
    ),
    copa: (
      <>
        <path d="M35 18h30c0 14-6 22-15 22s-15-8-15-22Z" fill="none" strokeWidth="2.5" />
        <path d="M50 40v22M36 66h28" strokeWidth="2.5" />
        <path d="M38 26h24" strokeWidth="2" strokeDasharray="3 3" />
      </>
    ),
    jarra: (
      <>
        <path d="M34 22h30v36a8 8 0 0 1-8 8H42a8 8 0 0 1-8-8V22Z" fill="none" strokeWidth="2.5" />
        <path d="M64 28h8a7 7 0 0 1 0 14h-8" fill="none" strokeWidth="2.5" />
        <path d="M40 34c3 4 7 4 10 0s7-4 10 0" fill="none" strokeWidth="2" strokeDasharray="3 3" />
      </>
    ),
  }
  return (
    <div
      className="h-full p-6 flex flex-col items-center text-center"
      style={{ backgroundColor: C.papel, border: `2px dashed ${C.cobre}`, borderRadius: 14 }}
    >
      <svg viewBox="0 0 100 90" className="w-20 h-18" style={{ color: C.cobre }} stroke="currentColor" aria-hidden="true">
        {paths[icono]}
      </svg>
      <p className={`${display.className} mt-4 text-xl`} style={{ color: C.tinta }}>
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

export default function MesonDeRomeral() {
  return (
    <main className={body.className} style={{ backgroundColor: C.papel, color: C.tinta, ...SPACING }}>
      <BlitzNav
        name={<span className={display.className}>Mesón de Romeral</span>}
        links={NAV_LINKS}
        waLink={WA_LINK_RESERVA}
        ctaLabel="Reservar"
        theme={{ over: 'light', bar: C.papel, ink: C.tinta, line: C.linea, btnBg: C.vino, btnInk: C.papel }}
        fontClass={display.className}
      />

      {/* ── HERO: la entrada del mesón ───────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        {/* friso decorativo superior */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-2"
          style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.vino} 0 26px, ${C.cobre} 26px 30px, transparent 30px 56px)` }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-14 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-4`} style={{ color: C.vino }}>
              {BIZ.address} · {BIZ.city} · {BIZ.region}
            </p>
            <h1 className={`${display.className} text-[13vw] md:text-7xl leading-[0.95]`}>
              El mesón
              <br />
              <em style={{ color: C.vino }}>de la Libertad</em>
            </h1>
            <div className="mt-4 h-[3px] w-24" style={{ backgroundColor: C.cobre }} aria-hidden="true" />
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muda }}>
              Un mesón nuevo en la avenida principal de Romeral: cocina chilena, salón de
              lámparas cobrizas y mesa lista al mediodía — y de noche, de miércoles a sábado.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-transform active:scale-95`}
                style={{ backgroundColor: C.vino, color: C.papel, borderRadius: 6 }}
              >
                Reservar mesa
              </a>
              <a
                href="#llegar"
                className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                style={{ color: C.vino, border: `1px solid ${C.vino}`, borderRadius: 6 }}
              >
                Cómo llegar
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Stars value={4.8} color={C.cobre} />
              <p className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.muda }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure>
              <Arco
                src={`${IMG}/salon.webp`}
                alt="Salón del Mesón de Romeral: mesas de madera, lámparas de cobre colgantes y puertas en arco"
                className="w-full aspect-[4/5] max-h-[480px] md:max-h-[560px]"
              />
              <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em] text-center`} style={{ color: C.muda }}>
                El salón real — foto de su ficha de Google
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── LA HORA DEL MESÓN ────────────────────────────────── */}
      <section id="horario" className="py-14 md:py-20" style={{ backgroundColor: C.vinoOsc, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.cobreClaro }}>
              Almuerzo y noche
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl`}>La hora del mesón</h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal delay={0}>
              <div className="h-full p-6 rounded-2xl" style={{ backgroundColor: 'rgba(243,233,215,0.08)', border: '1px solid rgba(243,233,215,0.2)' }}>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" style={{ color: C.cobreClaro }} aria-hidden="true">
                    <circle cx="12" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 3v3M4.5 8l2 1.7M19.5 8l-2 1.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className={`${display.className} text-2xl`}>Mediodía</p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {HORARIO.slice(0, 2).map((h) => (
                    <li key={h.d} className="flex justify-between gap-3">
                      <span>{h.d}</span>
                      <span className={`${mono.className} text-xs self-center`} style={{ color: C.cobreClaro }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full p-6 rounded-2xl" style={{ backgroundColor: 'rgba(243,233,215,0.08)', border: '1px solid rgba(243,233,215,0.2)' }}>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" style={{ color: C.cobreClaro }} aria-hidden="true">
                    <path d="M20 12.5A8.5 8.5 0 1 1 11.5 4 7 7 0 0 0 20 12.5Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <p className={`${display.className} text-2xl`}>De noche</p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {HORARIO.slice(2).map((h) => (
                    <li key={h.d} className="flex justify-between gap-3">
                      <span>{h.d}</span>
                      <span className={`${mono.className} text-xs self-center`} style={{ color: C.cobreClaro }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="mt-5 text-xs" style={{ color: 'rgba(243,233,215,0.65)' }}>
              Horario publicado en su ficha de Google — puede variar; confirma el del día por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LA MESA: bosquejos marcados ──────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.vino }}>
                  La carta se escribe a mano
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl`}>La mesa del mesón</h2>
              </div>
              <p className="max-w-xs text-sm" style={{ color: C.muda }}>
                El mesón recién publicó su primera foto. Mientras llegan las demás, estos rincones
                van dibujados a línea — marcados como bosquejo.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Reveal delay={0}>
              <PlatoBosquejo icono="plato" titulo="El plato del día" detalle="Cocina chilena servida al mediodía, de lunes a sábado." />
            </Reveal>
            <Reveal delay={80}>
              <PlatoBosquejo icono="jarra" titulo="La once de la tarde" detalle="De miércoles a sábado el mesón vuelve a abrir pasadas las 17:30." />
            </Reveal>
            <Reveal delay={160}>
              <PlatoBosquejo icono="copa" titulo="La mesa de noche" detalle="Viernes y sábado, hasta las 22:30, en el salón de lámparas." />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LA FICHA VERIFICADA ──────────────────────────────── */}
      <section id="ficha" className="py-14 md:py-20" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.vino }}>
              Solo lo verificado
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl`}>La ficha del mesón</h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: C.muda }}>
              Abierto recién en la avenida Libertad — la Sociedad Gastronómica Mesón de Romeral SpA
              se constituyó en septiembre de 2026. Todo lo que ves acá sale de su ficha de Google
              y su registro público; nada es inventado.
            </p>
            <div className="mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center px-5 py-3 text-sm font-bold uppercase tracking-wide transition-transform active:scale-95`}
                style={{ backgroundColor: C.vino, color: C.papel, borderRadius: 6 }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <dl
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: C.papel, border: `2px solid ${C.vino}`, borderRadius: '16px 90px 16px 16px' }}
            >
              {[
                ['Nombre', 'Mesón de Romeral'],
                ['Rubro', BIZ.rubro],
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Teléfono', BIZ.phoneDisplay],
                ['En Google', `${BIZ.rating} ★ · ${BIZ.reviews} reseñas`],
                ['Domingo', 'Cerrado'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5" style={{ borderBottom: `1px dashed ${C.linea}` }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] self-center`} style={{ color: C.cobre }}>
                    {k}
                  </dt>
                  <dd className="text-sm font-semibold text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────────── */}
      <section id="llegar" className="py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.vino }}>
              En la avenida principal
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl`}>En el centro de Romeral</h2>
            <p className="mt-4 max-w-lg text-base" style={{ color: C.muda }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region} — frente al eje principal de la comuna,
              a minutos de la plaza.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 rounded-2xl overflow-hidden" style={{ border: `2px solid ${C.vino}` }}>
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
      <footer className="py-8" style={{ backgroundColor: C.vinoOsc, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl`}>
              Mesón <em style={{ color: C.cobreClaro }}>de Romeral</em>
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(243,233,215,0.7)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </p>
          </div>
          <div className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: 'rgba(243,233,215,0.8)' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {BIZ.phoneDisplay}
            </a>
            <span className="mx-2" aria-hidden="true">·</span>
            <a href={BIZ.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Ficha en Maps
            </a>
          </div>
          <p className="text-[11px] w-full md:w-auto" style={{ color: 'rgba(243,233,215,0.5)' }}>
            Demo de vitrina para la pyme — hecho por Sitiazo.cl
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
