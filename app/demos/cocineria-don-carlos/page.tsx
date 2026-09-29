import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la comanda». Una cocinería de comida para llevar vive
 * del papel de pedido: el ticket numerado que cuelga de la barra y que la
 * cocina va despachando. La página es esa comanda impresa: papel, tinta,
 * perforaciones y números en mono; la teja es el sello de la casa.
 * Sin fotos confirmadas del local, las escenas van marcadas como bosquejo.
 */
const C = {
  papel: '#F4EAD8',
  ticket: '#FBF5E8',
  ink: '#2A211A',
  teja: '#A8441C',
  tejaOsc: '#8F3714',
  muted: 'rgba(42,33,26,0.72)',
  line: 'rgba(42,33,26,0.22)',
  onDark: '#F6EEDC',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'cocineria-don-carlos',
  title: 'Cocinería Don Carlos · Comida casera para llevar en San Clemente',
  description:
    'Cocinería Don Carlos en San Clemente, Maule: comida casera para llevar. Pide por WhatsApp y retira en el local.',
})

const NAV_LINKS = [
  { label: 'Cómo pedir', href: '#pedir' },
  { label: 'La carta', href: '#carta' },
  { label: 'Dónde', href: '#donde' },
]

// Tira perforada: fila de medios círculos de papel sobre el borde de un bloque.
function Perforada({ color = C.papel, flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[10px] w-full"
      style={{
        backgroundImage: `radial-gradient(circle at 10px ${flip ? '10px' : '0px'}, ${color} 5px, transparent 5.5px)`,
        backgroundSize: '20px 10px',
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}

// Regla punteada de ticket.
function Regla({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`border-t-2 border-dashed ${className}`}
      style={{ borderColor: C.line }}
    />
  )
}

function Sello({ children }: { children: string }) {
  return (
    <span
      className={`${mono.className} inline-block text-[10px] tracking-[0.2em] px-2 py-1 rounded-sm uppercase`}
      style={{ border: `1.5px solid ${C.teja}`, color: C.tejaOsc }}
    >
      {children}
    </span>
  )
}

const PASOS = [
  {
    n: '01',
    titulo: 'Escribes por WhatsApp',
    texto: 'Mandas tu pedido al número de la cocina y te confirman al tiro.',
  },
  {
    n: '02',
    titulo: 'Se prepara al momento',
    texto: 'La comida del día se cocina en la mañana y se sirve caliente.',
  },
  {
    n: '03',
    titulo: 'Retiras en el local',
    texto: 'Pasas a buscar tu pedido en San Clemente, listo para llevar.',
  },
]

// Carta de muestra: categorías típicas de una cocinería, sin platos ni precios
// confirmados. Va marcada como bosquejo; la carta real la entrega el negocio.
const CARTA = [
  'Almuerzo casero del día',
  'Cazuelas y platos de cuchara',
  'Empanadas y colaciones',
  'Porotos y legumbres',
  'Dulce casero',
]

export default function Page() {
  return (
    <div
      style={{ backgroundColor: C.papel, color: C.ink, ...SPACING }}
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'light',
          bar: C.papel,
          ink: C.ink,
          line: C.line,
          btnBg: C.teja,
          btnInk: '#fff',
        }}
      />

      {/* HERO: la comanda que cuelga de la barra */}
      <section
        id="inicio"
        className="relative pt-20 pb-14 md:pt-24 md:pb-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent 0 34px, ${C.line} 34px 35px)`,
          backgroundSize: '35px 100%',
        }}
      >
        <div className="max-w-xl mx-auto px-5">
          <Reveal>
            <article
              className="relative rounded-sm shadow-xl"
              style={{ backgroundColor: C.ticket, border: `1px solid ${C.line}` }}
            >
              {/* borde superior perforado */}
              <div
                aria-hidden="true"
                className="h-[12px] rounded-t-sm"
                style={{
                  backgroundImage: `radial-gradient(circle at 11px 0px, ${C.ticket} 5px, transparent 5.5px), linear-gradient(${C.line}, ${C.line})`,
                  backgroundSize: '22px 12px, 100% 1px',
                  backgroundPosition: '0 0, 0 11px',
                  backgroundRepeat: 'repeat-x, no-repeat',
                  backgroundColor: 'transparent',
                }}
              />
              <div className="px-6 md:px-8 pt-5 pb-7 text-center">
                <p
                  className={`${mono.className} text-[11px] tracking-[0.25em] uppercase`}
                  style={{ color: C.muted }}
                >
                  Comanda Nº 001 · {BIZ.city}
                </p>
                <h1
                  className={`${display.className} uppercase leading-[0.95] mt-3 text-[44px] md:text-[64px]`}
                  style={{ color: C.ink }}
                >
                  Cocinería
                  <br />
                  Don Carlos
                </h1>
                <Regla className="my-5" />
                <p
                  className="text-base md:text-lg leading-relaxed max-w-sm mx-auto"
                  style={{ color: C.muted }}
                >
                  Comida casera del día para llevar: pides por WhatsApp y retiras
                  en el local de San Clemente.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 px-6 py-3 rounded-full text-base font-semibold text-white active:scale-95 transition-transform whitespace-nowrap"
                    style={{ backgroundColor: C.teja }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className="tap-44 px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap"
                    style={{ color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.ink}` }}
                  >
                    Ver la carta
                  </a>
                </div>
              </div>
              {/* cierre del ticket: datos en mono + código de barras */}
              <div
                className="px-6 md:px-8 py-4 flex items-end justify-between gap-4"
                style={{ borderTop: `2px dashed ${C.line}` }}
              >
                <div className={`${mono.className} text-[10px] leading-relaxed uppercase`} style={{ color: C.muted }}>
                  <p>Comuna · {BIZ.city}</p>
                  <p>Pedidos · {BIZ.phoneDisplay}</p>
                </div>
                <svg viewBox="0 0 90 26" className="h-6 w-[90px] shrink-0" aria-hidden="true">
                  {[0, 4, 9, 11, 16, 22, 25, 30, 36, 40, 45, 50, 56, 60, 66, 70, 75, 82, 86].map(
                    (x, i) => (
                      <rect
                        key={i}
                        x={x}
                        y={0}
                        width={i % 3 === 0 ? 3 : 1.6}
                        height={26}
                        fill={C.ink}
                      />
                    ),
                  )}
                </svg>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* CÓMO PEDIR: tres tickets troquelados */}
      <section id="pedir" className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal>
            <h2
              className={`${display.className} uppercase leading-none text-[34px] md:text-[52px] max-w-2xl`}
            >
              Pedir es un ticket de tres líneas
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div
                  className="relative h-full rounded-sm px-5 pt-5 pb-8"
                  style={{ backgroundColor: C.ticket, border: `1px solid ${C.line}` }}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span
                      className={`${mono.className} text-sm font-bold`}
                      style={{ color: C.teja }}
                    >
                      {p.n}
                    </span>
                    <Sello>Comanda</Sello>
                  </div>
                  <h3 className={`${display.className} uppercase text-xl mt-4`}>{p.titulo}</h3>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>
                    {p.texto}
                  </p>
                  <div
                    aria-hidden="true"
                    className="absolute bottom-3 left-5 right-5"
                    style={{ borderTop: `1.5px dashed ${C.line}` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LA CARTA: el ticket largo */}
      <section id="carta" className="py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-5">
          <Reveal>
            <h2
              className={`${display.className} uppercase leading-none text-[34px] md:text-[52px] text-center`}
            >
              La carta que cuelga junto a la caja
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="mt-10 rounded-sm shadow-lg"
              style={{ backgroundColor: C.ticket, border: `1px solid ${C.line}` }}
            >
              <Perforada color={C.papel} />
              <div className="px-6 md:px-8 py-6">
                <div className="flex items-center justify-between gap-3">
                  <p
                    className={`${mono.className} text-[11px] tracking-[0.25em] uppercase`}
                    style={{ color: C.muted }}
                  >
                    Para llevar · {BIZ.city}
                  </p>
                  <Sello>Bosquejo</Sello>
                </div>
                <ul className="mt-5">
                  {CARTA.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 py-3"
                      style={{ borderBottom: `1.5px dashed ${C.line}` }}
                    >
                      <span
                        className={`${mono.className} text-[10px] w-5 shrink-0`}
                        style={{ color: C.teja }}
                      >
                        ·
                      </span>
                      <span className="text-base md:text-lg font-medium flex-1">{item}</span>
                      <span
                        className={`${mono.className} text-[10px] uppercase shrink-0`}
                        style={{ color: C.muted }}
                      >
                        del día
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  className={`${mono.className} text-[10px] leading-relaxed uppercase mt-5`}
                  style={{ color: C.muted }}
                >
                  Carta de muestra · los platos y precios reales se publican al activar el sitio
                </p>
              </div>
              <Perforada color={C.papel} flip />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESCENA: la mesa de la cocina (bosquejo marcado) */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] tracking-[0.25em] uppercase text-center`}
              style={{ color: 'rgba(246,238,220,0.6)' }}
            >
              Mientras tanto en la cocina
            </p>
            <h2
              className={`${display.className} uppercase leading-none text-[34px] md:text-[52px] text-center mt-3`}
              style={{ color: C.onDark }}
            >
              De la olla a la bolsa, caliente
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <figure
              className="relative mt-10 mx-auto max-w-md rounded-sm overflow-hidden"
              style={{ border: `1.5px dashed rgba(246,238,220,0.35)` }}
            >
              {/* escena CSS: fuente humeante, marcada como bosquejo */}
              <div
                role="img"
                aria-label="Bosquejo de un plato humeante listo para llevar"
                className="relative h-[220px] md:h-[260px]"
                style={{ backgroundColor: '#3A2F22' }}
              >
                {/* vapor */}
                <svg
                  viewBox="0 0 200 60"
                  className="absolute left-1/2 -translate-x-1/2 top-5 w-[120px]"
                  aria-hidden="true"
                >
                  {[0, 1, 2].map((i) => (
                    <path
                      key={i}
                      d={`M${60 + i * 40} 55 q 8 -14 0 -26 q -8 -12 0 -24`}
                      fill="none"
                      stroke="rgba(246,238,220,0.45)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  ))}
                </svg>
                {/* fuente */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[200px] h-[54px] rounded-[50%]"
                  style={{
                    backgroundColor: C.ticket,
                    boxShadow: 'inset 0 -10px 0 rgba(42,33,26,0.15), 0 10px 0 -2px rgba(0,0,0,0.3)',
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[62px] w-[130px] h-[30px] rounded-[50%]"
                  style={{ backgroundColor: '#8F3714' }}
                />
                <span
                  className={`${mono.className} absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm`}
                  style={{
                    color: C.onDark,
                    border: '1.5px solid rgba(246,238,220,0.7)',
                  }}
                >
                  Bosquejo
                </span>
              </div>
              <figcaption
                className={`${mono.className} text-[10px] uppercase leading-relaxed px-4 py-3`}
                style={{ backgroundColor: '#2E2419', color: 'rgba(246,238,220,0.65)' }}
              >
                Bosquejo · se reemplaza por fotos reales del local al activar el sitio
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-block px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap"
                style={{ backgroundColor: C.onDark, color: C.ink }}
              >
                Consultar qué hay hoy
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DÓNDE: mapa de la comuna */}
      <section id="donde" className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <div>
            <Reveal>
              <h2
                className={`${display.className} uppercase leading-none text-[34px] md:text-[52px]`}
              >
                En San Clemente, puerta de la cordillera maulina
              </h2>
              <p className="text-base md:text-lg leading-relaxed mt-4" style={{ color: C.muted }}>
                La cocina atiende en la comuna de San Clemente, Región del Maule.
                Coordina tu retiro por WhatsApp.
              </p>
              <div className={`${mono.className} text-xs uppercase leading-loose mt-6`} style={{ color: C.ink }}>
                <p>Comuna · {BIZ.city}</p>
                <p>Región · {BIZ.region}</p>
                <p>
                  Pedidos ·{' '}
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.tejaOsc }}>
                    {BIZ.phoneDisplay}
                  </a>
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-block mt-6 px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap"
                style={{ color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.ink}` }}
              >
                Cómo llegar
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div
              className="rounded-sm overflow-hidden shadow-lg"
              style={{ border: `1px solid ${C.line}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.city}, ${BIZ.region}`}
                className="w-full h-[300px] md:h-[380px] border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PIE */}
      <footer style={{ backgroundColor: C.ink }}>
        <Perforada color={C.papel} />
        <div className="max-w-5xl mx-auto px-5 pt-4 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className={`${display.className} uppercase text-lg`}
            style={{ color: C.onDark }}
          >
            {BIZ.name}
          </p>
          <div className={`${mono.className} text-[11px] uppercase text-center md:text-right`} style={{ color: 'rgba(246,238,220,0.6)' }}>
            <p>
              {BIZ.city} · {BIZ.region}
            </p>
            <p>Pedidos solo por WhatsApp · {BIZ.phoneDisplay}</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
      <div className="[&>div]:static">
        <DemoBand name={BIZ.name} />
      </div>
    </div>
  )
}
