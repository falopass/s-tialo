import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waMoto, MAPS_URL, CATALOGO, POR_QUE, HOURS, TICKER } from './content'
import { Moto } from './moto'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const cond = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})

/**
 * Identidad: taller y pista. Carbón de motor, rojo-naranja de moto deportiva y
 * hueso de hormigón. Tipografía condensada industrial, cortes en diagonal en vez
 * de esquinas redondeadas, líneas de velocidad y siluetas de moto propias.
 * Las motos son ilustraciones de referencia por tipo, no fotos ni stock real.
 */
const C = {
  coal: '#121110',
  coalSoft: '#1C1A18',
  coalDeep: '#0B0A09',
  coalLine: 'rgba(236,230,218,0.16)',
  bone: '#ECE6DA',
  boneDim: 'rgba(236,230,218,0.78)',
  boneLine: 'rgba(236,230,218,0.16)',
  fire: '#F0481C',
  fireDeep: '#B82D0B',
  steel: '#8E877B',
  ink: '#17140F',
  inkLine: 'rgba(23,20,15,0.22)',
  muted: '#5E584E',
}

const HATCH = 'repeating-linear-gradient(115deg, rgba(236,230,218,0.04) 0 2px, transparent 2px 16px)'
const GRAIN = 'radial-gradient(rgba(23,20,15,0.08) 1px, transparent 1.3px)'

export const metadata: Metadata = {
  ...demoMetadata({
    slug: 'hasbu-motos',
    title: 'Hasbu Motos — Motos nuevas y usadas en Talca',
    description: 'Concesionario de motos en Talca. Motos nuevas y usadas, financiamiento, garantía y servicio. Cotiza por WhatsApp. Página de muestra.',
  }),
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Por qué Hasbu', href: '#por-que' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

/** Esquinas cortadas en diagonal (arriba derecha y abajo izquierda), como un carenado. */
const cut = (n: number): CSSProperties => ({
  clipPath: `polygon(0 0, calc(100% - ${n}px) 0, 100% ${n}px, 100% 100%, ${n}px 100%, 0 calc(100% - ${n}px))`,
})

/**
 * Botones: colores como clases (sin estilo inline) para que hover y foco puedan
 * cambiarlos; el clip-path va inline. El foco cambia el fondo porque un clip-path
 * recorta el outline. Alturas: 48px (44px el compacto del nav), bajo el tope de 52px.
 */
const BTN = 'inline-flex items-center justify-center gap-2.5 font-bold uppercase tracking-[0.08em] transition-colors active:translate-y-px'
const SIZE_L = 'px-6 py-2.5 text-lg leading-7'
const SIZE_S = 'px-4 py-3 text-sm leading-5'
const SIZE_LINE = 'px-6 py-2 border-2 text-lg leading-7'
const BTN_FIRE = `${BTN} bg-[#F0481C] text-[#121110] hover:brightness-110 focus-visible:bg-[#ECE6DA]`
const BTN_COAL = `${BTN} bg-[#121110] text-[#ECE6DA] hover:brightness-125 focus-visible:bg-[#ECE6DA] focus-visible:text-[#121110]`
const BTN_BONE_LINE = `${BTN} border-[#ECE6DA] text-[#ECE6DA] hover:bg-[#ECE6DA] hover:text-[#121110]`
const BTN_INK_LINE = `${BTN} border-[#17140F] text-[#17140F] hover:bg-[#121110] hover:text-[#ECE6DA]`

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** Marca: una H dentro de un cuadrado cortado, hecha para esta demo (no es el logo real). */
function Mark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M0 0H22L32 10V32H10L0 22Z" fill={C.fire} />
      <path d="M9 8h4.5v6h5V8H23v16h-4.5v-6h-5v6H9Z" fill={C.coal} />
    </svg>
  )
}

function Eyebrow({ n, color, children }: { n: string; color: string; children: React.ReactNode }) {
  return (
    <p className={`${cond.className} flex items-center gap-3 mb-4 text-sm font-bold uppercase tracking-[0.2em]`} style={{ color }}>
      <span className={`${display.className} text-base tracking-normal`}>{n}</span>
      <span className="inline-block w-10 h-[3px]" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function RefBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`${cond.className} inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.14em] leading-none ${className}`}
      style={{ backgroundColor: C.bone, color: C.coal }}
    >
      <span className="w-1.5 h-1.5" style={{ backgroundColor: C.fire }} aria-hidden="true" />
      Imagen de referencia
    </span>
  )
}

/** [y, x1, x2, grosor, opacidad] */
const SPEED: [number, number, number, number, number][] = [
  [10, 6, 64, 2, 0.5],
  [26, 22, 92, 1, 0.35],
  [42, 0, 52, 3, 0.6],
  [58, 28, 100, 1.5, 0.4],
  [74, 8, 72, 2.5, 0.55],
  [90, 34, 96, 1, 0.3],
  [106, 12, 60, 2, 0.45],
]

function SpeedLines({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 116" preserveAspectRatio="none" className={className} aria-hidden="true">
      {SPEED.map(([y, x1, x2, w, o]) => (
        <line key={y} x1={x1} x2={x2} y1={y} y2={y} stroke={color} strokeWidth={w} strokeOpacity={o} strokeLinecap="square" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  )
}

function StarOutline() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke={C.steel} strokeWidth="1.4" aria-hidden="true">
      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
    </svg>
  )
}

/** Velocímetro: la aguja marca una nota REFERENCIAL (0 a 5), no la de Google. */
function Gauge({ value }: { value: number }) {
  const cx = 120
  const cy = 118
  const pt = (r: number, v: number): [number, number] => {
    const a = Math.PI + (v / 5) * Math.PI
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  }
  const f = (n: number) => n.toFixed(1)
  const [rx1, ry1] = pt(100, 3.5)
  const [rx2, ry2] = pt(100, 5)
  const [nx, ny] = pt(80, value)
  const ticks = Array.from({ length: 11 }, (_, i) => i / 2)

  return (
    <svg viewBox="0 0 240 140" role="img" aria-label={`Velocímetro con nota referencial de ${value} sobre 5`} className="w-full max-w-[340px] h-auto mx-auto">
      <path d="M20 118A100 100 0 0 1 220 118" stroke={C.boneLine} strokeWidth="10" fill="none" />
      <path d={`M${f(rx1)} ${f(ry1)}A100 100 0 0 1 ${f(rx2)} ${f(ry2)}`} stroke={C.fire} strokeWidth="10" fill="none" />
      {ticks.map((t) => {
        const major = t % 1 === 0
        const [x1, y1] = pt(88, t)
        const [x2, y2] = pt(major ? 72 : 80, t)
        return <line key={t} x1={f(x1)} y1={f(y1)} x2={f(x2)} y2={f(y2)} stroke={C.bone} strokeWidth={major ? 2.5 : 1.2} />
      })}
      {[0, 1, 2, 3, 4, 5].map((t) => {
        const [x, y] = pt(56, t)
        return (
          <text key={t} x={f(x)} y={f(y)} textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="700" fill={C.bone} className={cond.className}>
            {t}
          </text>
        )
      })}
      <line x1={cx} y1={cy} x2={f(nx)} y2={f(ny)} stroke={C.fire} strokeWidth="4" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="9" fill={C.bone} />
      <circle cx={cx} cy={cy} r="3.5" fill={C.coal} />
    </svg>
  )
}

export default function HasbuMotosPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.coal, color: C.bone }}>
      {/* ── Nav ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: 'rgba(18,17,16,0.96)', borderColor: C.coalLine, backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0 tap-44" aria-label="Hasbu Motos, ir al inicio">
            <Mark />
            <span className={`${display.className} text-xl md:text-2xl uppercase leading-none tracking-wide whitespace-nowrap`}>
              Hasbu <span style={{ color: C.fire }}>Motos</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${cond.className} text-sm font-semibold uppercase tracking-[0.16em] transition-colors text-[rgba(236,230,218,0.78)] hover:text-[#ECE6DA] tap-44`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cond.className} ${BTN_FIRE} ${SIZE_S} shrink-0`}
            style={cut(10)}
          >
            <WaIcon className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.coal, backgroundImage: HATCH }}>
        <svg
          viewBox="0 0 640 200"
          preserveAspectRatio="xMaxYMin meet"
          className="absolute -right-4 top-3 w-[112%] md:w-[72%] h-auto pointer-events-none select-none"
          aria-hidden="true"
        >
          <text x="0" y="182" className={display.className} fontSize="230" textLength="640" lengthAdjust="spacingAndGlyphs" fill="none" stroke={C.boneLine} strokeWidth="1.5">
            HASBU
          </text>
        </svg>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-6 items-center">
          <Reveal>
            <p className={`${cond.className} flex items-center gap-2.5 mb-5 text-sm font-bold uppercase tracking-[0.22em]`} style={{ color: C.fire }}>
              <span className="w-2.5 h-2.5 rotate-45" style={{ backgroundColor: C.fire }} aria-hidden="true" />
              Concesionario de motos · Talca
            </p>
            <h1 className={`${display.className} uppercase leading-[0.92] text-[clamp(3.1rem,15.5vw,6.4rem)] mb-5`}>
              Tu próxima
              <br />
              moto parte
              <br />
              <span style={{ color: C.fire }}>en Talca</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.boneDim }}>
              Motos nuevas y usadas, financiamiento y servicio. Cuéntanos qué
              buscas y te mandamos opciones por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cond.className} ${BTN_FIRE} ${SIZE_L}`}
                style={cut(12)}
              >
                <WaIcon />
                Cotizar por WhatsApp
              </a>
              <a
                href="#catalogo"
                className={`${cond.className} ${BTN_BONE_LINE} ${SIZE_LINE}`}
              >
                Ver catálogo
              </a>
            </div>
            <ul className="grid grid-cols-3 gap-3 max-w-md">
              {[
                [String(BIZ.reviews), 'reseñas en Google'],
                ['Nuevas', 'y usadas'],
                ['Talca', 'Región del Maule'],
              ].map(([v, l]) => (
                <li key={v} className="border-l-[3px] pl-3" style={{ borderColor: C.fire }}>
                  <span className={`${display.className} block text-3xl leading-none uppercase`}>{v}</span>
                  <span className={`${cond.className} block mt-1 text-xs font-semibold uppercase tracking-[0.12em] leading-tight`} style={{ color: C.boneDim }}>
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative mx-auto w-full max-w-[600px] aspect-[480/290]">
              <div
                className="absolute inset-x-0 top-[6%] bottom-[4%]"
                style={{ backgroundColor: C.fire, clipPath: 'polygon(9% 0, 100% 0, 91% 100%, 0 100%)' }}
                aria-hidden="true"
              />
              <SpeedLines color={C.bone} className="absolute left-0 top-[8%] w-[30%] h-[78%]" />
              <Moto
                kind="naked"
                ink={C.coal}
                accent={C.bone}
                steel="#7B2410"
                gap={C.fire}
                label="Ilustración de referencia de una moto naked de calle"
                className="absolute inset-0 w-full h-full"
              />
              <RefBadge className="absolute right-0 bottom-0" />
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden py-3" style={{ backgroundColor: C.fire, color: C.coal }} aria-hidden="true">
          <div className="hm-marquee flex w-max gap-8 whitespace-nowrap">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className={`${display.className} flex items-center gap-8 text-lg md:text-xl uppercase tracking-[0.06em]`}>
                {t}
                <span className="w-2 h-2 rotate-45" style={{ backgroundColor: C.coal }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogo ── */}
      <section id="catalogo" className="scroll-mt-16" style={{ backgroundColor: C.bone, backgroundImage: GRAIN, backgroundSize: '7px 7px', color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-12 items-end mb-8 md:mb-12">
            <Reveal>
              <Eyebrow n="01" color={C.fireDeep}>Catálogo destacado</Eyebrow>
              <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,9vw,4.6rem)]`}>
                Encuentra tu
                <br />
                tipo de <span style={{ color: C.fireDeep }}>moto</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="border-l-4 pl-4 text-sm md:text-base leading-relaxed" style={{ borderColor: C.fire, color: C.muted }}>
                <strong style={{ color: C.ink }}>Imágenes, tipos y precios de muestra.</strong>{' '}
                Son ilustraciones de referencia, no el stock real. Hasbu Motos
                define sus modelos, valores y disponibilidad.
              </p>
            </Reveal>
          </div>

          <div
            role="region"
            aria-label="Catálogo de motos de referencia"
            tabIndex={0}
            className="-mx-5 px-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-5 pb-4 md:pb-0"
          >
            {CATALOGO.map((m, i) => (
              <article
                key={m.kind}
                className={`snap-start shrink-0 w-[80vw] max-w-[330px] md:w-auto md:max-w-none flex flex-col ${m.wide ? 'lg:col-span-2 lg:flex-row' : ''}`}
                style={{ backgroundColor: C.coal, color: C.bone, ...cut(18) }}
              >
                <div className={`relative ${m.wide ? 'lg:basis-[54%]' : ''}`} style={{ backgroundColor: C.coalSoft, backgroundImage: HATCH }}>
                  <div className="px-3 pt-12 pb-5 lg:flex lg:h-full lg:items-center">
                    <Moto
                      kind={m.kind}
                      ink={C.bone}
                      accent={C.fire}
                      steel={C.steel}
                      gap={C.coalSoft}
                      label={`Ilustración de referencia: ${m.tipo}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <RefBadge className="absolute left-3 top-3" />
                  <span className={`${display.className} absolute right-4 top-2 text-3xl leading-none`} style={{ color: 'rgba(236,230,218,0.28)' }} aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <div className={`flex flex-1 flex-col p-5 ${m.wide ? 'lg:basis-[46%] lg:p-7' : ''}`}>
                  <p className={`${cond.className} text-sm font-bold uppercase tracking-[0.18em]`} style={{ color: C.fire }}>
                    {m.uso}
                  </p>
                  <h3 className={`${display.className} uppercase text-3xl leading-none mt-1.5`}>{m.tipo}</h3>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: C.boneDim }}>{m.desc}</p>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {m.chips.map((c) => (
                      <li
                        key={c}
                        className={`${cond.className} border px-2 py-1 text-xs font-semibold uppercase tracking-[0.1em] leading-none`}
                        style={{ borderColor: C.coalLine, color: C.boneDim }}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <div className="flex items-end justify-between gap-3 border-t pt-4 mb-4" style={{ borderColor: C.coalLine }}>
                      <p>
                        <span className={`${cond.className} block text-xs font-semibold uppercase tracking-[0.18em]`} style={{ color: C.boneDim }}>
                          Desde
                        </span>
                        <span className={`${display.className} text-3xl leading-none`}>{m.precio}</span>
                      </p>
                      <span
                        className={`${cond.className} border px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] leading-none text-right`}
                        style={{ borderColor: C.fire, color: C.fire }}
                      >
                        Precio de ejemplo
                      </span>
                    </div>
                    <a
                      href={waMoto(m.tipo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cond.className} ${BTN_FIRE} ${SIZE_L} w-full`}
                      style={cut(10)}
                    >
                      <WaIcon />
                      Consultar esta moto
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className={`${cond.className} md:hidden mt-1 text-xs font-semibold uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
            Desliza para ver más →
          </p>

          <Reveal>
            <div
              className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-center justify-between gap-5 p-6 md:p-8"
              style={{ backgroundColor: C.coal, color: C.bone, ...cut(20) }}
            >
              <p className={`${display.className} uppercase text-2xl md:text-3xl leading-tight`}>
                ¿No ves tu moto?
                <br />
                <span style={{ color: C.fire }}>Cuéntanos qué buscas</span>
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cond.className} ${BTN_FIRE} ${SIZE_L} shrink-0`}
                style={cut(12)}
              >
                <WaIcon />
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Por qué Hasbu ── */}
      <section id="por-que" className="scroll-mt-16 relative overflow-hidden" style={{ backgroundColor: C.coal, backgroundImage: HATCH }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <Reveal>
            <Eyebrow n="02" color={C.fire}>Por qué Hasbu</Eyebrow>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,9vw,4.4rem)] mb-5`}>
              Comprar tu moto
              <br />
              <span style={{ color: C.fire }}>sin dar vueltas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.boneDim }}>
              Textos de muestra: Hasbu Motos define sus condiciones reales de
              garantía, financiamiento y servicio.
            </p>
            <SpeedLines color={C.fire} className="hidden lg:block w-48 h-24 mt-10" />
          </Reveal>
          <ol className="border-t" style={{ borderColor: C.coalLine }}>
            {POR_QUE.map((p, i) => (
              <li key={p.n} className="border-b" style={{ borderColor: C.coalLine }}>
                <Reveal delay={i * 80}>
                  <div className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8 py-6 md:py-8">
                    <span className={`${display.className} text-5xl md:text-6xl leading-none`} style={{ color: C.fire }}>
                      {p.n}
                    </span>
                    <div>
                      <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-none mb-2`}>{p.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.boneDim }}>{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-16" style={{ backgroundColor: C.bone, backgroundImage: GRAIN, backgroundSize: '7px 7px', color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow n="03" color={C.fireDeep}>Reseñas</Eyebrow>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,9vw,4.4rem)] mb-7`}>
              Lo que dicen
              <br />
              <span style={{ color: C.fireDeep }}>en Google</span>
            </h2>
            <div className="p-5 md:p-6" style={{ backgroundColor: C.coal, color: C.bone, ...cut(20) }}>
              <Gauge value={BIZ.ratingRef} />
              <div className="mt-3 grid grid-cols-2 gap-4 border-t pt-4" style={{ borderColor: C.coalLine }}>
                <div>
                  <p className={`${display.className} text-4xl leading-none`}>{String(BIZ.ratingRef).replace('.', ',')}</p>
                  <p className={`${cond.className} mt-1 text-xs font-bold uppercase tracking-[0.14em]`} style={{ color: C.fire }}>
                    Nota referencial
                  </p>
                  <p className="text-xs leading-snug mt-1" style={{ color: C.boneDim }}>
                    Se reemplaza por la nota real de la ficha.
                  </p>
                </div>
                <div>
                  <p className={`${display.className} text-4xl leading-none`}>{BIZ.reviews}</p>
                  <p className={`${cond.className} mt-1 text-xs font-bold uppercase tracking-[0.14em]`} style={{ color: C.fire }}>
                    Reseñas en Google
                  </p>
                  <p className="text-xs leading-snug mt-1" style={{ color: C.boneDim }}>
                    Cifra real de su ficha.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <ul className="space-y-4">
              {[0, 1, 2].map((i) => (
                <li key={i}>
                  <Reveal delay={i * 90}>
                    <div className="border-2 border-dashed p-5 md:p-6" style={{ borderColor: C.inkLine }}>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="inline-flex gap-0.5" aria-hidden="true">
                          {[0, 1, 2, 3, 4].map((s) => (
                            <StarOutline key={s} />
                          ))}
                        </span>
                        <span className={`${cond.className} text-[11px] font-bold uppercase tracking-[0.14em] text-right`} style={{ color: C.muted }}>
                          Reseña de muestra · texto editable
                        </span>
                      </div>
                      <span className="block h-2.5 w-full mb-2" style={{ backgroundColor: C.inkLine }} aria-hidden="true" />
                      <span className="block h-2.5 w-4/5 mb-4" style={{ backgroundColor: C.inkLine }} aria-hidden="true" />
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        Aquí va el comentario real de un cliente, copiado tal
                        cual desde la ficha de Google.
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cond.className} ${BTN_INK_LINE} ${SIZE_LINE} mt-6`}
            >
              Ver las {BIZ.reviews} reseñas en Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-16" style={{ backgroundColor: C.fire, color: C.coal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow n="04" color={C.coal}>Contacto</Eyebrow>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.6rem,11vw,5.4rem)] mb-5`}>
              Escríbenos y
              <br />
              sal a rodar
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7">
              Cuéntanos qué moto buscas, tu presupuesto y si la quieres nueva o
              usada. Te respondemos por WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cond.className} ${BTN_COAL} ${SIZE_L} w-full sm:w-auto`}
              style={cut(12)}
            >
              <WaIcon />
              Abrir WhatsApp
            </a>
            <p className="mt-5 text-sm md:text-base">
              O llámanos al{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="p-5 md:p-7" style={{ backgroundColor: C.coal, color: C.bone, ...cut(22) }}>
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className={`${display.className} uppercase text-2xl leading-none`}>Horarios</h3>
                <span className={`${cond.className} border px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] leading-none`} style={{ borderColor: C.fire, color: C.fire }}>
                  Referencial
                </span>
              </div>
              <dl className="mb-6">
                {HOURS.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-4 border-b py-2.5 text-sm md:text-base" style={{ borderColor: C.coalLine }}>
                    <dt style={{ color: C.boneDim }}>{h.days}</dt>
                    <dd className={`${cond.className} font-bold uppercase tracking-[0.08em]`}>{h.time}</dd>
                  </div>
                ))}
              </dl>

              <h3 className={`${display.className} uppercase text-2xl leading-none mb-3`}>Dónde estamos</h3>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.boneDim }}>
                <span className="block border border-dashed px-3 py-2 mb-1.5" style={{ borderColor: C.coalLine, color: C.bone }}>
                  {BIZ.address}
                </span>
                {BIZ.city}, {BIZ.region}
              </address>

              <div
                className="relative aspect-[16/9] flex flex-col items-center justify-center gap-2 text-center px-4"
                style={{ backgroundColor: C.coalSoft, backgroundImage: HATCH }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke={C.fire} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <p className={`${cond.className} text-sm font-bold uppercase tracking-[0.14em]`}>Mapa del local</p>
                <p className="text-xs leading-snug max-w-[16rem]" style={{ color: C.boneDim }}>
                  Aquí va el mapa con la dirección exacta cuando Hasbu la confirme.
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cond.className} ${BTN_BONE_LINE} ${SIZE_LINE} w-full mt-4`}
              >
                Buscar en Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.coalDeep, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <Mark className="w-10 h-10" />
            <div>
              <p className={`${display.className} text-xl uppercase leading-none`}>{BIZ.name}</p>
              <p className={`${cond.className} mt-1 text-xs font-semibold uppercase tracking-[0.16em]`} style={{ color: C.boneDim }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: C.boneDim }}>
            {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </p>
        </div>
        <div className="border-t" style={{ borderColor: C.coalLine }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.boneDim }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.fire }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Las ilustraciones, tipos de moto, precios, horarios, garantías y textos son de muestra; solo el teléfono y la cifra de {BIZ.reviews} reseñas salen de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.fire }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Escribir por WhatsApp a ${BIZ.name}`}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#25D366', color: C.coal, ...cut(10) }}
      >
        <WaIcon className="w-6 h-6" />
      </a>

      <style>{`@keyframes hm-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
.hm-marquee { animation: hm-marquee 30s linear infinite }
@media (prefers-reduced-motion: reduce) { .hm-marquee { animation: none } }`}</style>
    </div>
  )
}
