import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Paleta tomada de sus activos reales: el verde de su letra "Alguita", el
// coral de la mascota (maki + pizza) y el crema de la tabla de bambú.
const C = {
  crema: '#FBF5EA',
  papel: '#FFFDF8',
  tinta: '#2E2A1F',
  matcha: '#3E7C4F',
  matchaOscuro: '#2C5A3A',
  coral: '#E86A4A',
  coralOscuro: '#B04527',
  ambar: '#F0B13E',
  muda: 'rgba(46,42,31,0.66)',
  linea: 'rgba(46,42,31,0.14)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'alguita-sushi-rolls',
  title: 'Alguita Sushi Rolls — Reparto gratis en Teno | Sitiazo.cl',
  description:
    'Sushi rolls con reparto gratis a toda la comuna de Teno, Maule. Abre a las 18:00. Pedidos por WhatsApp.',
  image: `${IMG}/rolls-tempura.webp`,
})

const NAV_LINKS = [
  { label: 'Los rolls', href: '#rolls' },
  { label: 'Reparto', href: '#reparto' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Sticker kawaii: borde grueso redondeado, leve inclinación, sombra papel.
function Sticker({
  children,
  girar = 0,
  className = '',
}: {
  children: ReactNode
  girar?: number
  className?: string
}) {
  return (
    <div
      className={`rounded-3xl p-5 ${className}`}
      style={{
        backgroundColor: C.papel,
        border: `2px solid ${C.tinta}`,
        boxShadow: `4px 4px 0 ${C.tinta}`,
        transform: `rotate(${girar}deg)`,
      }}
    >
      {children}
    </div>
  )
}

function MarcaBosquejo() {
  return (
    <span
      className={`${mono.className} text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded-full`}
      style={{ color: C.muda, border: `1px dashed ${C.linea}` }}
    >
      ◈ Bosquejo
    </span>
  )
}

function CtaWa({ texto = 'Pedir por WhatsApp' }: { texto?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold transition-transform active:scale-95`}
      style={{
        backgroundColor: C.matcha,
        color: '#fff',
        borderRadius: 999,
        boxShadow: `4px 4px 0 ${C.tinta}`,
      }}
    >
      {texto}
    </a>
  )
}

export default function Alguita() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={display.className}>
            Alguita <span style={{ color: C.matcha }}>Sushi Rolls</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: C.crema, ink: C.tinta, line: C.linea, btnBg: C.matcha, btnInk: '#fff' }}
        fontClass={display.className}
      />

      {/* ── HERO: los rolls con carita ───────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        {/* Mancha matcha de fondo */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full"
          style={{ backgroundColor: 'rgba(62,124,79,0.12)' }}
        />
        <div
          aria-hidden="true"
          className="absolute top-40 -right-20 w-[280px] h-[280px] rounded-full"
          style={{ backgroundColor: 'rgba(232,106,74,0.12)' }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-12 relative">
          <div className="grid md:grid-cols-[1fr_0.75fr] gap-10 items-center">
            <div>
              <Reveal>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-4`} style={{ color: C.matcha }}>
                  Teno · Región del Maule
                </p>
                <h1 className={`${display.className} leading-[0.95] text-[13vw] md:text-7xl`}>
                  Sabrosas piezas
                  <br />
                  de <span style={{ color: C.coralOscuro }}>sushi</span> con
                  <br />
                  <span style={{ color: C.matcha }}>reparto gratis</span>
                </h1>
                <p className="mt-5 max-w-md text-base md:text-lg" style={{ color: C.muda }}>
                  Así se presenta Alguita en su propia página: una experiencia de sabor
                  inolvidable con reparto gratis a toda la comuna de Teno.
                  Pedidos desde las 18:00.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <CtaWa />
                  <a
                    href="#rolls"
                    className={`${display.className} inline-flex items-center px-6 py-3 text-base font-bold`}
                    style={{ color: C.tinta, border: `2px solid ${C.tinta}`, borderRadius: 999, backgroundColor: C.papel }}
                  >
                    Ver los rolls
                  </a>
                </div>
                <p className={`${mono.className} mt-5 text-xs`} style={{ color: C.muda }}>
                  ★ {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <Sticker girar={2} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Mascota real de Alguita Sushi Rolls: maki y trozo de pizza sonrientes"
                  className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-2xl mx-auto"
                />
                <p className={`${display.className} mt-3 text-center text-sm`} style={{ color: C.matchaOscuro }}>
                  La mascota oficial
                </p>
                <span
                  aria-hidden="true"
                  className={`${display.className} absolute -top-3 -right-3 text-xs font-bold px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: C.ambar, color: C.tinta, transform: 'rotate(8deg)' }}
                >
                  ¡gratis!
                </span>
              </Sticker>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LOS ROLLS: foto real + bosquejos ─────────────────── */}
      <section id="rolls" className="py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.coralOscuro }}>
                  Recién pasados por tempura
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl`}>
                  Los rolls de Alguita
                </h2>
              </div>
              <MarcaBosquejo />
            </div>
          </Reveal>
          <div className="mt-9 grid md:grid-cols-2 gap-6 items-start">
            <Reveal>
              <Sticker girar={-1.5}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/rolls-tempura.webp`}
                  alt="Rolls de sushi en tempura sobre tabla de bambú con salsa de soya, foto de la ficha de Alguita"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
                <p className={`${mono.className} mt-3 text-xs`} style={{ color: C.muda }}>
                  Foto real de su ficha de Google: rolls tempura sobre bambú — fíjate en el logo verde de la esquina.
                </p>
              </Sticker>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: 'Rolls tempura', d: 'Crujientes por fuera, cremosos por dentro — como los de la foto.', girar: 1.5 },
                { t: 'Piezas variadas', d: 'Sabrosas piezas de sushi, según su propia descripción.', girar: -1 },
                { t: 'Y algo más', d: 'La mascota del logo trae pizza: pregunta qué hay hoy.', girar: 2 },
                { t: 'Para compartir', d: 'Pide por WhatsApp y arma la mesa sin salir de casa.', girar: -2 },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 70}>
                  <Sticker girar={s.girar} className="h-full">
                    {/* Circulito kawaii dibujado: bosquejo */}
                    <div
                      aria-hidden="true"
                      className="w-12 h-12 rounded-full mb-3 relative"
                      style={{ backgroundColor: i % 2 ? C.ambar : C.matcha }}
                    >
                      <div className="absolute inset-[28%] rounded-full" style={{ backgroundColor: C.papel }} />
                    </div>
                    <p className={`${display.className} text-base`}>{s.t}</p>
                    <p className="mt-1.5 text-xs leading-relaxed" style={{ color: C.muda }}>{s.d}</p>
                  </Sticker>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REPARTO: la promesa ──────────────────────────────── */}
      <section id="reparto" className="py-14 md:py-20" style={{ backgroundColor: C.matcha, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.crema }}>
              Palabra de la casa
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl`}>
              Reparto gratis a toda la comuna de Teno
            </h2>
            <p className="mt-4 max-w-xl text-base" style={{ color: 'rgba(251,245,234,0.82)' }}>
              Está escrito en su página de Facebook y es su promesa: pidas lo que
              pidas, el reparto no se cobra dentro de la comuna.
            </p>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: '18:00', l: 'hora de apertura según su ficha' },
              { n: BIZ.seguidoresFb, l: 'seguidores en Facebook' },
              { n: '62', l: 'reseñas en Google que lo respaldan' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div
                  className="h-full rounded-3xl p-6 text-center"
                  style={{ backgroundColor: 'rgba(44,90,58,0.55)', border: '2px solid rgba(251,245,234,0.3)' }}
                >
                  <p className={`${display.className} text-4xl`}>{s.n}</p>
                  <p className={`${mono.className} mt-2 text-xs uppercase tracking-[0.14em]`} style={{ color: C.crema }}>
                    {s.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaWa texto="Pedir con reparto gratis" />
              <a
                href={BIZ.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center px-6 py-3 text-base font-bold`}
                style={{ border: '2px solid rgba(251,245,234,0.6)', borderRadius: 999, color: C.crema }}
              >
                Su Facebook ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────────── */}
      <section id="llegar" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <Reveal>
              <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.matcha }}>
                Donde sale el reparto
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl`}>
                Paso Chile Chico 160
              </h2>
              <ul className="mt-6 space-y-3 text-sm" style={{ color: C.muda }}>
                <li>{BIZ.address}, {BIZ.city}, {BIZ.region}. Plus code: 4RHJ+HX Teno.</li>
                <li>Pedidos: {BIZ.phoneDisplay} (WhatsApp).</li>
                <li className="flex items-center gap-2">
                  <Stars value={3.9} color={C.coral} />
                  <span>{BIZ.rating} en Google · {BIZ.reviews} reseñas</span>
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaWa />
                <a
                  href={BIZ.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center px-6 py-3 text-base font-bold`}
                  style={{ color: C.tinta, border: `2px solid ${C.tinta}`, borderRadius: 999, backgroundColor: C.papel }}
                >
                  Cómo llegar ↗
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl overflow-hidden" style={{ border: `2px solid ${C.tinta}`, boxShadow: `4px 4px 0 ${C.tinta}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full aspect-[4/3] border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 border-t" style={{ borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded-2xl object-cover" aria-hidden="true" />
            <div className="min-w-0">
              <p className={`${display.className} text-sm truncate`}>{BIZ.name}</p>
              <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
            Demo de catálogo — <a href="/demos/" className="underline underline-offset-2">Sitiazo.cl</a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
