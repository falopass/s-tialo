import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  PASILLOS,
  REVIEWS,
  HORARIO,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la góndola» — el minimarket como estantería.
 * Repisas con borde de precio, etiquetas colgantes perforadas, bandas
 * de código de barras y el verde del letrero sobre el antracita del
 * local. Archivo Black hace de letra de góndola; Geist Mono, de ticket.
 */
const C = {
  night: '#10151A',
  deep: '#0B0F12',
  verde: '#46C75B',
  verdeInk: '#0E3B19',
  papel: '#F2EFE3',
  card: '#FBF9F0',
  ink: '#1B2024',
  muted: '#5C666D',
  line: 'rgba(16,21,26,0.16)',
  lineDark: 'rgba(255,255,255,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'vivo-market-minimarket',
  title: 'Vivo Market — Minimarket en Talca, abierto todos los días',
  description:
    'Minimarket de barrio en Talca: abarrotes, bebidas, frutas y verduras, snacks y fiambres. Abierto todos los días de 8:00 a 23:00. Pedidos por WhatsApp.',
  image: `${IMG}/noche.webp`,
})

const NAV_LINKS = [
  { label: 'La góndola', href: '#gondola' },
  { label: 'Los vecinos', href: '#vecinos' },
  { label: 'Horario', href: '#horario' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const TICKER =
  'ABARROTES · BEBIDAS · CONGELADOS · FRUTAS Y VERDURAS · SNACKS · FIAMBRES · PAN · ASEO · '

/** Banda de código de barras: barras SVG de ancho irregular. */
function Barcode({ color = '#10151A', className = '' }: { color?: string; className?: string }) {
  const bars = [3, 1, 2, 1, 1, 3, 1, 2, 4, 1, 1, 2, 1, 3, 2, 1, 1, 4, 1, 2, 3, 1, 1, 2, 1, 3, 1, 1, 2, 4]
  let x = 0
  return (
    <svg className={`block ${className}`} height="26" aria-hidden="true" style={{ width: '100%' }}>
      {bars.map((w, i) => {
        const rect = (
          <rect key={i} x={x} y={0} width={w} height={i % 3 === 0 ? 26 : 20} fill={color} />
        )
        x += w + (i % 4 === 0 ? 6 : 3)
        return rect
      })}
    </svg>
  )
}

/** Etiqueta de precio colgante con perforación y cordel. */
function Tag({
  children,
  color = C.verde,
  ink = C.verdeInk,
  rotate = '-2.5deg',
}: {
  children: React.ReactNode
  color?: string
  ink?: string
  rotate?: string
}) {
  return (
    <span className="inline-flex flex-col items-start" style={{ rotate }}>
      <span className="block w-px h-3 ml-6" style={{ backgroundColor: 'rgba(16,21,26,0.4)' }} aria-hidden="true" />
      <span
        className={`${mono.className} relative inline-flex items-center gap-2 pl-6 pr-3 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em]`}
        style={{ backgroundColor: color, color: ink, clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)' }}
      >
        <span
          className="absolute left-[5px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: ink, opacity: 0.55 }}
          aria-hidden="true"
        />
        {children}
      </span>
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.verde : C.verdeInk }}
    >
      <span className="inline-block w-8 border-t-2" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function VivoMarketPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .vm a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        @keyframes vm-ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .vm-ticker-track { animation: vm-ticker 28s linear infinite }
        @media (prefers-reduced-motion: reduce) { .vm-ticker-track { animation: none } }
      `}</style>

      <div className="vm">
        <BlitzNav
          name={
            <span className={`${display.className} uppercase tracking-tight`}>
              Vivo <span style={{ color: C.verde }}>Market</span>
            </span>
          }
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(242,239,227,0.96)',
            ink: C.night,
            line: C.line,
            btnBg: C.verde,
            btnInk: C.verdeInk,
          }}
        />

        {/* ── Hero: la casa con el letrero encendido ── */}
        <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
          <Image
            src={`${IMG}/noche.webp`}
            alt="Fachada de Vivo Market de noche con el letrero iluminado"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(11,15,18,0.55) 0%, rgba(11,15,18,0.15) 40%, rgba(11,15,18,0.88) 100%)' }}
          />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-12 md:pb-16">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Tag>{BIZ.rating} ★ · {BIZ.reviewCount} reseñas</Tag>
                <Tag color="#F2EFE3" ink={C.night} rotate="1.5deg">
                  {HORARIO}
                </Tag>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4`} style={{ color: C.verde }}>
                Minimarket · Talca · Región del Maule
              </p>
              <h1
                className={`${display.className} uppercase leading-[0.92] text-[clamp(3rem,13vw,7.5rem)] mb-6`}
                style={{ color: '#F5F7F2' }}
              >
                Cerca de ti,
                <br />
                <span style={{ color: C.verde }}>siempre.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(245,247,242,0.82)' }}>
                El almacén del barrio con letrero nuevo: abarrotes, bebidas
                heladas, frutas y verduras, snacks y fiambres — abierto
                todos los días hasta las 23:00.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.verde, color: C.verdeInk }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase text-sm md:text-base px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(245,247,242,0.55)', color: '#F5F7F2' }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative px-5 md:px-8 pb-5 opacity-70">
            <Barcode color="#F2EFE3" />
          </div>
        </section>

        {/* ── Cinta corrida de la góndola ── */}
        <section className="overflow-hidden border-y-2" style={{ backgroundColor: C.verde, borderColor: C.night }} aria-label="Productos del local">
          <div className="vm-ticker-track flex whitespace-nowrap py-3">
            {[0, 1].map((n) => (
              <span
                key={n}
                className={`${display.className} uppercase text-base md:text-lg tracking-[0.06em] shrink-0`}
                style={{ color: C.verdeInk }}
                aria-hidden={n === 1}
              >
                {TICKER.repeat(3)}
              </span>
            ))}
          </div>
        </section>

        {/* ── La góndola: cada pasillo con su repisa ── */}
        <section id="gondola" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>La góndola</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02] max-w-xl`} style={{ color: C.night }}>
                Lo que encuentras
                <br />
                <span style={{ color: '#1D7A32' }}>en los pasillos</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Un local chico con todo lo urgente de la semana — las fotos
                son del local real, tal como quedó recién abierto.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-14 md:gap-20">
            {PASILLOS.map((p, i) => (
              <Reveal key={p.pasillo} delay={60}>
                <div className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  {/* repisa de góndola: foto apoyada en el borde verde */}
                  <div className="relative">
                    <div className="relative overflow-hidden aspect-[4/3]" style={{ backgroundColor: C.night }}>
                      <Image
                        src={`${IMG}/${p.foto}.webp`}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, calc(100vw - 2.5rem)"
                        className="object-cover"
                      />
                    </div>
                    {/* borde de repisa */}
                    <div
                      className="h-2.5 md:h-3"
                      style={{
                        backgroundColor: C.verde,
                        boxShadow: `0 8px 0 -4px ${C.night}, 0 14px 22px rgba(16,21,26,0.25)`,
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute -top-3 left-5">
                      <Tag>{p.pasillo}</Tag>
                    </div>
                  </div>
                  <div>
                    <h3 className={`${display.className} uppercase text-2xl md:text-[28px] leading-tight mb-3`} style={{ color: C.night }}>
                      {p.nombre}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Los vecinos: reseñas reales en etiquetas ── */}
        <section id="vecinos" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
              <Reveal>
                <Eyebrow light>Los vecinos</Eyebrow>
                <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02] mb-5`} style={{ color: '#F5F7F2' }}>
                  El local nuevo
                  <br />
                  <span style={{ color: C.verde }}>que ya recomiendan</span>
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <Stars value={5} color={C.verde} className="w-5 h-5" />
                  <p className={`${mono.className} text-sm font-bold`} style={{ color: C.verde }}>
                    {BIZ.rating} / 5
                  </p>
                </div>
                <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'rgba(245,247,242,0.72)' }}>
                  {BIZ.reviewCount} reseñas en Google, todas de su primer mes
                  abierto y todas de 5 estrellas.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                  style={{ color: C.verde, textDecorationColor: 'rgba(70,199,91,0.45)' }}
                >
                  Leerlas en Google →
                </a>
              </Reveal>
              <div className="flex flex-col gap-6">
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.nombre} delay={i * 110}>
                    <figure
                      className="relative pl-5 pr-5 md:pl-7 md:pr-6 py-5"
                      style={{
                        backgroundColor: C.card,
                        borderLeft: `6px solid ${C.verde}`,
                        rotate: i === 1 ? '0.7deg' : '-0.6deg',
                        boxShadow: '0 14px 34px rgba(0,0,0,0.28)',
                      }}
                    >
                      <Stars value={5} color="#1D7A32" className="w-3.5 h-3.5 mb-3" />
                      <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                        “{r.texto}”
                      </blockquote>
                      <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.muted }}>
                        {r.nombre} · {r.fecha} · Google
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Horario: el ticket del horario ── */}
        <section id="horario" className="scroll-mt-20 border-b-2" style={{ borderColor: C.night }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
                <div>
                  <Eyebrow>El horario</Eyebrow>
                  <p className={`${display.className} uppercase text-[clamp(2.6rem,9vw,5.5rem)] leading-[0.95]`} style={{ color: C.night }}>
                    8:00 <span style={{ color: C.verde }}>→</span> 23:00
                  </p>
                  <p className={`${mono.className} text-xs md:text-sm font-bold uppercase tracking-[0.22em] mt-4`} style={{ color: C.muted }}>
                    Lunes a domingo · sin excepción
                  </p>
                </div>
                <div className="md:justify-self-end w-full max-w-md">
                  <div className="p-5 md:p-6 border-2" style={{ backgroundColor: C.card, borderColor: C.night }}>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] font-bold mb-3`} style={{ color: C.muted }}>
                      Nota de la casa
                    </p>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.ink }}>
                      ¿Se te acabó el gas, el pan o la bebida del asado? Al
                      local del pasaje se llega a pie: atención de los
                      mismos chiquillos que ordenan la góndola.
                    </p>
                  </div>
                  <div className="mt-4 opacity-80">
                    <Barcode color={C.night} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Cómo llegar ── */}
        <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow>El pasaje</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.night }}>
                La casa del
                <br />
                <span style={{ color: '#1D7A32' }}>letrero verde</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: C.muted }}>
                Vivo Market atiende en una casa de barrio del sector rural
                de Talca: reconócela por el letrero verde que queda prendido
                hasta las 23:00.
              </p>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.ink }}>
                <span className={`${mono.className} block text-[11px] uppercase tracking-[0.2em] font-bold mb-1`} style={{ color: C.muted }}>
                  Dirección
                </span>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.night, color: '#F5F7F2' }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase text-sm md:text-base px-7 py-3 border-2 transition-colors hover:bg-[#E7E4D4] tap-44`}
                  style={{ borderColor: C.night, color: C.night }}
                >
                  Abrir en Maps →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/3] mb-4" style={{ backgroundColor: C.night }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de día de Vivo Market con letrero verde y reja de madera"
                    fill
                    sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden border-2" style={{ borderColor: C.night }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-[280px] block"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.deep, color: '#F5F7F2' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-end justify-between gap-5" style={{ borderColor: C.lineDark }}>
            <div>
              <p className={`${display.className} uppercase text-2xl mb-1.5`}>
                Vivo <span style={{ color: C.verde }}>Market</span>
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,247,242,0.65)' }}>
                {BIZ.city}, {BIZ.region} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                {HORARIO}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,247,242,0.65)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineDark }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(245,247,242,0.7)' }}>
              Sitio de ejemplo de Sitiazo: nombre, comuna, teléfono,
              horario, lema del letrero, reseñas, nota de Google, fotos y
              logo son reales; descripciones de los pasillos son de muestra.
            </p>
          </div>
        </footer>

        <DemoBand name={BIZ.name} />
        <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      </div>
    </div>
  )
}
