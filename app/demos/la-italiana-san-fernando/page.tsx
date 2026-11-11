import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, FORMAS, OPINIONES, WA_LINK, WA_FARDOS, MAPS_URL, MAPS_EMBED, IMG } from './content'

// Gloock: serif de cartel antiguo, con la elegancia gastada de la ropa
// europea. Instrument Serif aporta la itálica editorial, Familjen Grotesk
// el texto corrido y Space Mono la voz de las etiquetas de precio.
const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const accent = localFont({
  src: [{ path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/familjen-grotesk/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Papel de etiqueta, tinta y la franja tricolor de su logo.
const C = {
  papel: '#F6F1E8',
  papel2: '#ECE3D2',
  tag: '#FBF7EE',
  tinta: '#1D1B19',
  verde: '#1F6E47',
  verdeOsc: '#155433',
  rojo: '#B8323A',
  muted: '#5E574E',
  line: 'rgba(29,27,25,0.16)',
  papelMut: 'rgba(246,241,232,0.78)',
  papelLine: 'rgba(246,241,232,0.2)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-italiana-san-fernando',
  title: 'La Italiana San Fernando · Ropa europea reciclada',
  description:
    'Importadora de ropa europea reciclada en San Fernando: al detalle, por kilo y en fardos. Lunes a sábado. Escríbenos por WhatsApp.',
  image: `${IMG}/fardos.webp`,
})

const NAV_LINKS = [
  { label: 'Cómo comprar', href: '#comprar' },
  { label: 'Temporadas', href: '#temporadas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

const CINTA = [
  'AL DETALLE',
  'POR KILO',
  'EN FARDOS',
  'ROPA EUROPEA',
  'PRIMERA CALIDAD',
  'SEGUNDA VIDA',
] as const

const FARDOS = ['Vestidos', 'Chaquetas', 'Pantalones', 'Mix infantil'] as const

/** Silueta de la etiqueta colgante: punta arriba, ojal centrado. */
const TAG_CLIP = 'polygon(50% 0, 100% 12%, 100% 100%, 0 100%, 0 12%)'

/** La percha del logo, redibujada en trazo fino. */
function Percha({ className = 'w-7 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 34" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M24 14.5v-3c0-3 2.2-4.4 4.4-4.4 2.3 0 3.6 1.8 2.7 3.7" />
      <path d="M24 14.5 L4.2 28.4 Q2.6 29.6 4.6 29.6 H43.4 Q45.4 29.6 43.8 28.4 Z" />
    </svg>
  )
}

/** Franja tricolor que se despliega en tres tiempos. */
function Tricolor({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  const colores = [C.verde, '#FFFFFF', C.rojo]
  return (
    <div className={`flex h-[5px] ${className}`} aria-hidden="true">
      {colores.map((c) => (
        <span
          key={c}
          className="it-franja block flex-1"
          style={{
            backgroundColor: c,
            animationDelay: `${delay + colores.indexOf(c) * 0.16}s`,
            boxShadow: c === '#FFFFFF' ? 'inset 0 0 0 1px rgba(29,27,25,0.14)' : undefined,
          }}
        />
      ))}
    </div>
  )
}

function Rotulo({ children, color = C.muted, centro = false }: { children: React.ReactNode; color?: string; centro?: boolean }) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] ${centro ? 'justify-center' : ''}`}
      style={{ color }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
      <span className="inline-flex gap-[3px] shrink-0" aria-hidden="true">
        {[C.verde, '#FFFFFF', C.rojo].map((c) => (
          <span key={c} className="block h-[5px] w-[5px]" style={{ backgroundColor: c, boxShadow: c === '#FFFFFF' ? 'inset 0 0 0 1px rgba(29,27,25,0.3)' : undefined }} />
        ))}
      </span>
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
}: {
  href: string
  children: React.ReactNode
  tone: 'tinta' | 'verde' | 'linea' | 'lineaClara' | 'papel'
}) {
  const st: CSSProperties =
    tone === 'tinta'
      ? { backgroundColor: C.tinta, color: C.papel }
      : tone === 'verde'
        ? { backgroundColor: C.verde, color: '#FFFFFF' }
        : tone === 'papel'
          ? { backgroundColor: C.papel, color: C.tinta }
          : tone === 'linea'
            ? { border: `1.5px solid ${C.tinta}`, color: C.tinta }
            : { border: `1.5px solid rgba(246,241,232,0.6)`, color: C.papel }
  const externo = !href.startsWith('#')
  return (
    <a
      href={href}
      target={externo ? '_blank' : undefined}
      rel={externo ? 'noopener noreferrer' : undefined}
      className="it-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function WaIcon({ className = 'w-[15px] h-[15px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** Código de barras decorativo de las etiquetas de fardo. */
function Barcode({ className = 'h-7' }: { className?: string }) {
  const barras = [3, 1, 2, 1, 1, 3, 2, 1, 1, 4, 1, 2, 1, 3, 1, 1, 2, 3]
  return (
    <div className={`flex items-stretch gap-[2px] ${className}`} aria-hidden="true">
      {barras.map((w, i) => (
        <span key={i} className="block h-full" style={{ width: w * 1.6, backgroundColor: 'currentColor' }} />
      ))}
    </div>
  )
}

/** Etiqueta colgante: gancho, cordón y tarjeta con ojal. */
function Colgante({
  rot,
  hilo = 'h-7',
  delay = 0,
  children,
  className = '',
}: {
  rot: string
  hilo?: string
  delay?: number
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex w-full flex-col items-center ${className}`}>
      <span className="block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: C.tinta }} aria-hidden="true" />
      <div
        className="it-colgante flex w-full flex-col items-center"
        style={{ '--it-r': rot, animationDelay: `${delay}s` } as CSSProperties}
      >
        <span className={`block w-px ${hilo}`} style={{ backgroundColor: C.tinta }} aria-hidden="true" />
        {children}
      </div>
    </div>
  )
}

export default function LaItalianaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        /* El perchero: el riel se tiende, los cordones bajan y las
           etiquetas caen y se enganchan en su sitio. */
        @keyframes it-riel { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .it-riel { transform-origin: left center; animation: it-riel 0.7s cubic-bezier(0.3,0.7,0.2,1) both }

        @keyframes it-colgante {
          0% { transform: translateY(-16px) rotate(0deg); opacity: 0 }
          55% { transform: translateY(2px) rotate(calc(var(--it-r, -2deg) * 0.9)); opacity: 1 }
          80% { transform: translateY(-1px) rotate(calc(var(--it-r, -2deg) * 1.06)) }
          100% { transform: translateY(0) rotate(var(--it-r, -2deg)); opacity: 1 }
        }
        .it-colgante { transform-origin: 50% 0; animation: it-colgante 0.85s cubic-bezier(0.3,0.8,0.35,1) both; transition: transform 0.35s ease }
        .it-colgante:hover { transform: rotate(0deg) }

        /* El fardo se desenvuelve: la foto se desenrolla hacia abajo. */
        @keyframes it-desenrolla {
          from { clip-path: inset(0 0 96% 0); transform: scale(1.14) }
          to { clip-path: inset(0 0 0 0); transform: scale(1) }
        }
        .it-desenrolla { animation: it-desenrolla 1.05s cubic-bezier(0.55,0.06,0.2,1) 1.05s both }

        /* El sello de llegada estampa una sola vez. */
        @keyframes it-sello {
          0% { transform: scale(2.4) rotate(-14deg); opacity: 0 }
          55% { transform: scale(0.94) rotate(-8deg); opacity: 1 }
          75% { transform: scale(1.04) rotate(-8deg) }
          100% { transform: scale(1) rotate(-8deg); opacity: 1 }
        }
        .it-sello { animation: it-sello 0.5s cubic-bezier(0.3,1.2,0.4,1) 2s both }

        @keyframes it-franja { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .it-franja { transform-origin: left center; animation: it-franja 0.45s cubic-bezier(0.3,0.7,0.2,1) both }

        @keyframes it-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .it-linea { animation: it-linea 0.9s cubic-bezier(0.22,0.68,0.26,1) both }

        @keyframes it-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .it-sube { animation: it-sube 0.85s ease-out both }

        /* Cinta de categorías en loop lento, como etiqueta de prenda. */
        @keyframes it-cinta { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .it-cinta { animation: it-cinta 36s linear infinite }

        .it-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .it-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .it-btn:active { transform: scale(0.97) }
        .it-btn:focus-visible, a:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .it-riel, .it-colgante, .it-desenrolla, .it-sello, .it-franja, .it-linea, .it-sube, .it-cinta { animation: none !important }
          .it-colgante { transform: rotate(var(--it-r, 0deg)) }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex flex-col leading-none">
            <span className={`${display.className} text-lg md:text-xl tracking-[0.02em]`}>{BIZ.name}</span>
            <span className="mt-[3px] flex h-[3px] w-full" aria-hidden="true">
              <span className="flex-1" style={{ backgroundColor: C.verde }} />
              <span className="flex-1" style={{ backgroundColor: 'rgba(29,27,25,0.2)' }} />
              <span className="flex-1" style={{ backgroundColor: C.rojo }} />
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(246,241,232,0.95)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.verde,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: el perchero ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[76px] md:pt-32 pb-10 md:pb-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="it-sube" style={{ animationDelay: '0.1s' }}>
              <Rotulo>Importadora · {BIZ.city}</Rotulo>
            </div>
            <h1
              className={`${display.className} mt-6 leading-[1.03] tracking-[0.005em] text-[clamp(2.2rem,9.6vw,4.9rem)]`}
            >
              <span className="block overflow-hidden pb-1">
                <span className="it-linea block" style={{ animationDelay: '0.2s' }}>
                  Ropa europea
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="it-linea block" style={{ animationDelay: '0.34s' }}>
                  con{' '}
                  <em className={accent.className} style={{ color: C.verde }}>
                    segunda vida.
                  </em>
                </span>
              </span>
            </h1>
            <Tricolor className="mt-6 max-w-[200px]" delay={0.75} />
            <p className="it-sube mt-6 max-w-md text-lg leading-relaxed" style={{ color: C.muted, animationDelay: '0.95s' }}>
              Ropa reciclada que llega de Europa en fardos: se compra al
              detalle, por kilo o por fardo completo.
            </p>
            <div className="it-sube mt-7 flex flex-wrap gap-3" style={{ animationDelay: '1.1s' }}>
              <Btn href={WA_LINK} tone="tinta">
                <WaIcon />
                Escribir por WhatsApp
              </Btn>
              <Btn href={WA_FARDOS} tone="linea">
                Preguntar por fardos
              </Btn>
            </div>
          </div>

          {/* La escena: riel, cordones y etiquetas que se enganchan */}
          <div className="relative h-[320px] md:h-[440px]" aria-label="Fardos de ropa de la bodega">
            <div className="it-riel absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: C.tinta, animationDelay: '0.45s' }} aria-hidden="true" />

            {/* etiqueta foto: el fardo que se desenvuelve */}
            <div className="absolute top-0 left-[4%] w-[56%] md:w-[58%]">
              <Colgante rot="-1.8deg" hilo="h-8 md:h-12" delay={0.85}>
                <figure
                  className="relative w-full aspect-[3/4]"
                  style={{ clipPath: TAG_CLIP, backgroundColor: C.tag, filter: 'drop-shadow(0 22px 34px rgba(29,27,25,0.24))' }}
                >
                  <span
                    className="absolute left-1/2 top-[4.5%] -translate-x-1/2 h-3 w-3 rounded-full z-10"
                    style={{ backgroundColor: C.papel, border: `2px solid ${C.tinta}` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-[4%] top-[14%] bottom-[4%] overflow-hidden" style={{ backgroundColor: C.papel2 }}>
                    <Image
                      src={`${IMG}/fardos.webp`}
                      alt="Fardos de ropa amarillos y rosados apilados hasta el techo en la bodega de La Italiana en San Fernando"
                      fill
                      priority
                      sizes="(min-width: 1024px) 300px, 55vw"
                      className="it-desenrolla object-cover"
                    />
                  </div>
                  <span
                    className={`${mono.className} it-sello absolute right-[7%] bottom-[9%] block px-2 py-1 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.18em]`}
                    style={{ color: C.rojo, border: `2px solid ${C.rojo}`, backgroundColor: 'rgba(251,247,238,0.92)' }}
                  >
                    Recién llegado
                  </span>
                </figure>
              </Colgante>
            </div>

            {/* etiqueta chica: el lote crema */}
            <div className="absolute top-0 right-[6%] w-[30%] md:w-[27%]">
              <Colgante rot="2.2deg" hilo="h-14 md:h-24" delay={1.05}>
                <div
                  className="relative w-full aspect-[4/5] flex flex-col items-center justify-center px-3 text-center"
                  style={{ clipPath: TAG_CLIP, backgroundColor: C.verde, filter: 'drop-shadow(0 16px 26px rgba(29,27,25,0.22))' }}
                >
                  <span
                    className="absolute left-1/2 top-[5%] -translate-x-1/2 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: C.papel, border: `2px solid ${C.tinta}` }}
                    aria-hidden="true"
                  />
                  <p className={`${mono.className} text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] leading-snug`} style={{ color: '#FFFFFF' }}>
                    Lote
                    <br />
                    crema
                  </p>
                  <p className={`${mono.className} mt-1.5 text-[7px] md:text-[8px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Europa
                  </p>
                  <Tricolor className="mt-2.5 w-10 md:w-12" delay={1.9} />
                </div>
              </Colgante>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · Cinta de categorías ── */}
      <div className="border-y overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.papel2 }} aria-hidden="true">
        <div className="it-cinta flex w-max items-center gap-8 py-3.5 pl-8">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8">
              {CINTA.map((item) => (
                <span key={`${dup}-${item}`} className="flex items-center gap-8">
                  <span className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.26em] whitespace-nowrap`} style={{ color: C.muted }}>
                    {item}
                  </span>
                  <Percha className="w-6 h-[17px] shrink-0" color={C.verde} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 3 · Cómo comprar: la pared de ganchos ── */}
      <section id="comprar" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Tres formas de comprar</Rotulo>
            <h2 className={`${display.className} mt-5 leading-[1.05] text-[clamp(2.1rem,6.4vw,4rem)]`}>
              Una prenda,{' '}
              <em className={accent.className} style={{ color: C.rojo }}>
                un kilo
              </em>{' '}
              o un fardo.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed" style={{ color: C.muted }}>
              Así se vende la ropa en La Italiana. Eliges la forma que te
              acomoda y te llevas ropa europea a buen precio.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-10 md:gap-6 lg:gap-8">
            {FORMAS.map((f, i) => (
              <Reveal key={f.n} delay={i * 120}>
                <Colgante rot={['-2deg', '1.6deg', '-1.2deg'][i]} hilo="h-6">
                  <div
                    className="it-tagcard relative w-full max-w-[330px] px-6 pt-10 pb-6 text-center"
                    style={{ clipPath: TAG_CLIP, backgroundColor: C.tag, filter: 'drop-shadow(0 14px 24px rgba(29,27,25,0.14))' }}
                  >
                    <span
                      className="absolute left-1/2 top-[5%] -translate-x-1/2 h-3 w-3 rounded-full"
                      style={{ backgroundColor: C.papel, border: `2px solid ${C.tinta}` }}
                      aria-hidden="true"
                    />
                    <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
                      Opción {f.n}
                    </p>
                    <h3 className={`${display.className} mt-2.5 text-[1.9rem] leading-tight`}>{f.titulo}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {f.texto}
                    </p>
                    <span className="mt-5 flex h-[4px] w-14 mx-auto" aria-hidden="true">
                      <span className="flex-1" style={{ backgroundColor: C.verde }} />
                      <span className="flex-1" style={{ backgroundColor: '#FFFFFF', boxShadow: 'inset 0 0 0 1px rgba(29,27,25,0.12)' }} />
                      <span className="flex-1" style={{ backgroundColor: C.rojo }} />
                    </span>
                  </div>
                </Colgante>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <div className="mt-12">
              <Btn href={WA_FARDOS} tone="verde">
                <WaIcon />
                Preguntar por fardos
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Temporadas: las etiquetas de fardo ── */}
      <section id="temporadas" className="scroll-mt-20" style={{ backgroundColor: C.verdeOsc, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <Rotulo color="rgba(246,241,232,0.72)">Temporadas</Rotulo>
            <h2 className={`${display.className} mt-5 leading-[1.05] text-[clamp(2.1rem,6vw,3.8rem)]`}>
              Los fardos llegan
              <br />
              <em className={accent.className}>por temporada.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: C.papelMut }}>
              La ropa llega de Europa cerrada en fardos, ordenados por tipo
              de prenda. La selección crema es la primera calidad.
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed" style={{ color: C.papelMut }}>
              Cada temporada nueva se anuncia en Instagram, y por WhatsApp
              te contamos qué hay hoy en la sucursal.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Btn href={WA_FARDOS} tone="papel">
                <WaIcon />
                Qué fardos hay hoy
              </Btn>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 text-sm font-bold uppercase tracking-[0.14em] underline underline-offset-4 tap-44"
                style={{ color: C.papel }}
              >
                Ver Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-4 md:gap-5">
              {FARDOS.map((tipo, i) => (
                <div
                  key={tipo}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                  style={{
                    backgroundColor: C.tag,
                    color: C.tinta,
                    clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)',
                    transform: `rotate(${i % 2 === 0 ? '-' : ''}${1 + i * 0.3}deg) translateX(${i % 2 === 0 ? 0 : 14}px)`,
                  }}
                >
                  <div>
                    <p className={`${mono.className} text-sm md:text-base font-bold uppercase tracking-[0.2em]`}>
                      {tipo}
                    </p>
                    <p className={`${mono.className} mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                      Fardo europeo · Crema
                    </p>
                  </div>
                  <Barcode className="h-8 md:h-9 shrink-0" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · La sucursal: polaroid y horario ── */}
      <section id="sucursal" className="scroll-mt-20" style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,340px)_1fr] gap-12 md:gap-16 items-center">
          <Reveal>
            <figure className="mx-auto w-[270px] md:w-full p-3 pb-4" style={{ backgroundColor: C.tag, transform: 'rotate(-2deg)', boxShadow: '0 24px 50px rgba(0,0,0,0.35)' }}>
              <div className="relative overflow-hidden aspect-[357/175]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Letrero de La Italiana ropa reciclada en la fachada de la sucursal de San Fernando"
                  fill
                  sizes="(min-width: 768px) 320px, 246px"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${accent.className} mt-3 flex items-center justify-center gap-2 text-xl`} style={{ color: C.tinta }}>
                <Percha className="w-6 h-4" color={C.rojo} />
                Te esperamos
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <Rotulo color="rgba(246,241,232,0.72)">Sucursal {BIZ.city}</Rotulo>
            <h2 className={`${display.className} mt-5 leading-[1.05] text-[clamp(2.1rem,5.5vw,3.6rem)]`}>
              Ven a elegir
              <br />
              <em className={accent.className}>con calma.</em>
            </h2>
            <dl className="mt-8 max-w-md">
              {HORARIO.map((h) => (
                <div key={h.dia} className="flex justify-between gap-6 border-b py-3.5" style={{ borderColor: C.papelLine }}>
                  <dt style={{ color: C.papelMut }}>{h.dia}</dt>
                  <dd className={`${mono.className} text-right text-sm md:text-base`}>{h.hora}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: C.papelMut }}>
              ¿Quieres saber qué llegó esta semana? Escríbenos y te
              contamos.
            </p>
            <div className="mt-7">
              <Btn href={WA_LINK} tone="papel">
                <WaIcon />
                ¿Qué llegó hoy?
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Rotulo centro>Opiniones en Google</Rotulo>
          </Reveal>
          <div className="mt-10 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-12 md:gap-10">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor} delay={i * 140}>
                <figure>
                  <blockquote className={`${accent.className} text-[clamp(1.9rem,5vw,2.9rem)] leading-[1.12]`}>
                    “{o.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-[10px] font-bold uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
                    {o.autor}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex text-sm font-bold underline underline-offset-4 tap-44"
              style={{ color: C.verde }}
            >
              Ver la ficha en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Dónde ── */}
      <section id="donde" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <Rotulo>Dónde estamos</Rotulo>
            <h2 className={`${display.className} mt-5 leading-[1.05] text-[clamp(2.1rem,5.5vw,3.6rem)]`}>
              La Italiana,
              <br />
              <em className={accent.className} style={{ color: C.verde }}>
                {BIZ.city}.
              </em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: C.muted }}>
              {BIZ.city}, {BIZ.region}. El pin del mapa te lleva
              a la puerta.
            </p>
            <p className="mt-3 text-lg">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${mono.className} font-bold underline underline-offset-4 tap-44`} style={{ color: C.tinta }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="tinta">
                Cómo llegar
              </Btn>
              <Btn href={WA_LINK} tone="linea">
                WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative w-full overflow-hidden aspect-[5/4]" style={{ border: `1.5px solid ${C.tinta}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Cierre ── */}
      <section style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <Percha className="w-11 h-8 mx-auto mb-6" color="rgba(255,255,255,0.9)" />
            <h2 className={`${display.className} leading-[1.05] text-[clamp(2.3rem,7vw,4.2rem)]`}>
              Buena ropa,{' '}
              <em className={accent.className}>
                buen precio.
              </em>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Escríbenos y te contamos qué hay hoy en la sucursal
              de {BIZ.city}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK} tone="papel">
                <WaIcon />
                Escribir por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · Footer ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl`}>{BIZ.name}</p>
              <span className="mt-1.5 flex h-[3px] w-24" aria-hidden="true">
                <span className="flex-1" style={{ backgroundColor: C.verde }} />
                <span className="flex-1" style={{ backgroundColor: 'rgba(246,241,232,0.3)' }} />
                <span className="flex-1" style={{ backgroundColor: C.rojo }} />
              </span>
              <p className="text-sm mt-2" style={{ color: C.papelMut }}>
                {BIZ.rubro} · Sucursal {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,241,232,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,241,232,0.85)' }}>
                Instagram
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,241,232,0.85)' }}>
                Facebook
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.papelLine }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(246,241,232,0.62)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.full}, sucursal {BIZ.city}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#9FD8B8' }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name} ${BIZ.city}`} />
    </div>
  )
}
