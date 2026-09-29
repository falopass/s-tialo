import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, IMG, CARTA, OVNIS, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta tomada de sus afiches reales: negro espacial, aro ovni verde neón,
// etiqueta "PROMO" fucsia y el naranjo del toro del logo.
const C = {
  espacio: '#0B0B10',
  espacio2: '#12121A',
  crema: '#F5F2EA',
  neon: '#8CFF3C',
  neonSuave: 'rgba(140,255,60,0.16)',
  fucsia: '#FF2E88',
  naranjo: '#FF7A1A',
  muda: 'rgba(245,242,234,0.72)',
  linea: 'rgba(245,242,234,0.14)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'toro-s-sushi-rauco',
  title: "Toro's Sushi Rauco — Un ataque de sabor | Sitiazo.cl",
  description:
    'Sushi, handrolls y el famoso Ovni Roll en Rauco, Maule. Delivery en 20–60 min y gratis desde $30.000. Pide por WhatsApp.',
  image: `${IMG}/hero-ovni.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Ovni Roll', href: '#ovni' },
  { label: 'Delivery', href: '#delivery' },
]

// Estrellas de fondo: el cielo nocturno por donde llega el ovni.
function Estrellas() {
  const pts = [
    [8, 12], [22, 32], [37, 8], [52, 22], [68, 10], [83, 28], [94, 14],
    [14, 58], [30, 74], [47, 62], [63, 80], [78, 56], [90, 70],
    [6, 88], [26, 92], [55, 90], [72, 94], [88, 86],
  ]
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {pts.map(([x, y], i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            backgroundColor: i % 4 === 0 ? C.neon : 'rgba(245,242,234,0.5)',
          }}
        />
      ))}
    </div>
  )
}

// Etiqueta adhesiva tipo "PROMO!" de sus afiches.
function TagPromo({ children, color = C.fucsia }: { children: string; color?: string }) {
  return (
    <span
      className={`${display.className} inline-block text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1`}
      style={{ backgroundColor: color, color: '#fff', transform: 'rotate(-3deg)', borderRadius: 3 }}
    >
      {children}
    </span>
  )
}

function CtaWa({ texto = 'Pedir por WhatsApp' }: { texto?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-transform active:scale-95`}
      style={{
        backgroundColor: C.neon,
        color: C.espacio,
        borderRadius: 999,
        boxShadow: `0 0 24px ${C.neonSuave}, 0 0 0 2px rgba(140,255,60,0.35)`,
      }}
    >
      {texto}
    </a>
  )
}

export default function TorosSushi() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.espacio, color: C.crema, ...SPACING }}
    >
      <style>{`
        @keyframes toro-ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .toro-ticker { animation: toro-ticker 28s linear infinite }
        @media (prefers-reduced-motion: reduce) { .toro-ticker { animation: none } }
      `}</style>
      <BlitzNav
        name={
          <span className={display.className}>
            TORO’S <span style={{ color: C.neon }}>SUSHI</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.espacio, ink: C.crema, line: C.linea, btnBg: C.neon, btnInk: C.espacio }}
        fontClass={display.className}
      />

      {/* ── HERO: el ovni aterriza en Rauco ──────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <Estrellas />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 relative">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <TagPromo>Balmaceda · Rauco</TagPromo>
                  <TagPromo color={C.naranjo}>Delivery 20–60 min</TagPromo>
                </div>
                <h1 className={`${display.className} uppercase leading-[0.95] text-[11vw] md:text-7xl`}>
                  ¡Un ataque
                  <br />
                  de <span style={{ color: C.neon, textShadow: `0 0 32px ${C.neonSuave}` }}>sabor!</span>
                </h1>
                <p className="mt-5 max-w-md text-base md:text-lg" style={{ color: C.muda }}>
                  Sushi, handrolls, ovni roll y mucho más — la carta completa de Toro’s Sushi,
                  el restaurante de sushi de Rauco que pide por WhatsApp y lleva hasta tu puerta.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <CtaWa />
                  <a
                    href="#carta"
                    className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                    style={{ color: C.crema, border: `1px solid ${C.linea}`, borderRadius: 999 }}
                  >
                    Ver la carta
                  </a>
                </div>
                <p className={`${mono.className} mt-5 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muda }}>
                  ★ {BIZ.rating} en Google · sushi · handrolls · pizzas
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <figure className="relative">
                {/* Aro ovni detrás de la foto */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-full"
                  style={{
                    border: `3px solid ${C.neon}`,
                    boxShadow: `0 0 42px ${C.neonSuave}, inset 0 0 32px ${C.neonSuave}`,
                    transform: 'rotate(-6deg) scaleY(0.92)',
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/hero-ovni.webp`}
                  alt="Afiche real del Ovni Roll de churrasco cheddar de Toro's Sushi"
                  className="w-full aspect-square object-cover rounded-3xl"
                  style={{ border: `1px solid ${C.linea}` }}
                />
                <figcaption
                  className={`${mono.className} absolute -bottom-3 right-4 text-[11px] uppercase tracking-[0.14em] px-2.5 py-1`}
                  style={{ backgroundColor: C.fucsia, color: '#fff', borderRadius: 3, transform: 'rotate(2deg)' }}
                >
                  La nave insignia
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CINTA: marquee de la carta ───────────────────────── */}
      <div
        className="py-3 overflow-hidden border-y"
        style={{ backgroundColor: C.neon, color: C.espacio, borderColor: C.neon }}
        aria-hidden="true"
      >
        <div className={`${display.className} toro-ticker flex w-max whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em]`}>
          {[0, 1].map((n) => (
            <span key={n} className="mx-2 shrink-0">
              Ovni Roll $2.000 · Handrolls · Sushipletos · Gohan · Sushiburger · Pizzas 32 cm · Delivery en Rauco · Ovni Roll $2.000 · Handrolls · Sushipletos · Gohan · Sushiburger · Pizzas 32 cm · Delivery en Rauco ·
            </span>
          ))}
        </div>
      </div>

      {/* ── OVNI ROLL: la nave insignia ──────────────────────── */}
      <section id="ovni" className="py-14 md:py-20 relative overflow-hidden">
        <Estrellas />
        <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.neon }}>
              Objeto comestible identificado
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-tight`}>
              El Ovni Roll
            </h2>
            <p className="mt-4 max-w-xl text-base" style={{ color: C.muda }}>
              El invento de la casa: un roll envuelto y frito entero, que llega caliente
              y crujiente. Tres sabores en la carta, todos al mismo precio.
            </p>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OVNIS.map((o, i) => (
              <Reveal key={o.nombre} delay={i * 80}>
                <div
                  className="h-full rounded-2xl p-6 relative overflow-hidden"
                  style={{ backgroundColor: C.espacio2, border: `1px solid ${C.linea}` }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
                    style={{ border: `2px solid ${C.neon}`, opacity: 0.35 }}
                  />
                  <TagPromo color={i === 2 ? C.fucsia : C.naranjo}>
                    {i === 2 ? 'El picante' : i === 1 ? 'El nuevo' : 'El clásico'}
                  </TagPromo>
                  <h3 className={`${display.className} mt-4 text-xl uppercase`}>Ovni {o.nombre}</h3>
                  <p className="mt-2 text-sm" style={{ color: C.muda }}>{o.detalle}</p>
                  <p className={`${display.className} mt-4 text-2xl`} style={{ color: C.neon }}>{o.precio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <figure className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/ovni-clasico.webp`}
                  alt="Afiche del Ovni Roll clásico: pollo, palta y queso crema"
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </figure>
              <figure className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/ovni-hot.webp`}
                  alt="Afiche del Ovni Roll lomito hot, la versión picante"
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LA CARTA ─────────────────────────────────────────── */}
      <section id="carta" className="py-14 md:py-20" style={{ backgroundColor: C.espacio2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.neon }}>
                  La carta completa
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
                  Todo lo que aborda la nave
                </h2>
              </div>
              <p className="max-w-xs text-sm" style={{ color: C.muda }}>
                Afiches y fotos reales publicados en su carta oficial de pedidos.
                Precios textuales de la carta vigente.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CARTA.map((p, i) => (
              <Reveal key={p.img} delay={i * 60}>
                <figure
                  className="rounded-xl overflow-hidden h-full flex flex-col"
                  style={{ backgroundColor: C.espacio, border: `1px solid ${C.linea}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/${p.img}.webp`}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                  <figcaption className="p-3.5 flex-1 flex flex-col">
                    <p className="text-sm font-bold">{p.nombre}</p>
                    <p className="mt-1 text-xs leading-snug flex-1" style={{ color: C.muda }}>
                      {p.detalle}
                    </p>
                    <p className={`${display.className} mt-2 text-sm`} style={{ color: C.neon }}>
                      {p.precio}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} mt-6 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muda }}>
              También: handroll kaiju · 3 handroll XL · sushiburger · ½ pizza · arma tu sushi · extras —
              la carta completa está en su página de pedidos.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CtaWa />
              <a
                href={BIZ.pedidosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                style={{ color: C.crema, border: `1px solid ${C.linea}`, borderRadius: 999 }}
              >
                Carta online ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DELIVERY ─────────────────────────────────────────── */}
      <section id="delivery" className="py-14 md:py-20 relative overflow-hidden">
        <Estrellas />
        <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.fucsia }}>
              Aterriza en tu puerta
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
              Delivery en Rauco
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: '20–60', u: 'minutos', d: 'El tiempo de reparto publicado en su carta.' },
              { n: '$30.000', u: 'pedido mínimo', d: 'Desde ese monto el despacho es gratis.' },
              { n: '3', u: 'formas de pedir', d: 'En el local, retiro o delivery a tu puerta.' },
            ].map((s, i) => (
              <Reveal key={s.u} delay={i * 80}>
                <div
                  className="h-full rounded-2xl p-6 text-center"
                  style={{ backgroundColor: C.espacio2, border: `1px solid ${C.linea}` }}
                >
                  <p className={`${display.className} text-4xl`} style={{ color: C.neon }}>{s.n}</p>
                  <p className={`${mono.className} mt-1 text-xs uppercase tracking-[0.16em]`} style={{ color: C.fucsia }}>
                    {s.u}
                  </p>
                  <p className="mt-3 text-sm" style={{ color: C.muda }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div
              className="mt-8 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4"
              style={{ backgroundColor: C.espacio2, border: `1px solid ${C.linea}` }}
            >
              <div>
                <p className={`${display.className} uppercase text-lg`}>Horario de la nave</p>
                <ul className={`${mono.className} mt-2 space-y-1 text-sm`} style={{ color: C.muda }}>
                  {HORARIO.map((h) => (
                    <li key={h.d}>
                      {h.d}: <span style={{ color: C.crema }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CtaWa texto="Pedir ahora" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN ────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.espacio2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <Reveal>
              <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.neon }}>
                Coordenadas del aterrizaje
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
                {BIZ.address}
              </h2>
              <ul className="mt-6 space-y-3 text-sm" style={{ color: C.muda }}>
                <li>Comuna de {BIZ.city}, {BIZ.region}. Plus code: 3MGP+QJ Rauco.</li>
                <li>Pedidos y consultas: {BIZ.phoneDisplay} (WhatsApp).</li>
                <li>
                  <Stars value={4.7} color={C.neon} className="inline-block w-4 h-4 align-[-2px] mr-2" />
                  {BIZ.rating} en Google — la nota de su ficha en vivo.
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaWa />
                <a
                  href={BIZ.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                  style={{ color: C.crema, border: `1px solid ${C.linea}`, borderRadius: 999 }}
                >
                  Cómo llegar ↗
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
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
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded-full object-cover" aria-hidden="true" />
            <div className="min-w-0">
              <p className={`${display.className} text-sm uppercase truncate`}>{BIZ.name}</p>
              <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
                {BIZ.address} · {BIZ.region}
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
