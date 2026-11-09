import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Conexion } from './circuito'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

// Unbounded para los titulares (ancho, de letrero de taller), Manrope
// para el texto y Space Mono para los rótulos de la placa electrónica.
const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// «Encontramos la falla»: la noche del taller, el ámbar de sus luces
// LED, el cobre del cableado y el azul de las placas electrónicas.
const C = {
  noche: '#0E1116',
  pozo: '#0A0D12',
  panel: '#141A22',
  panelHi: '#1A222D',
  ambar: '#FFB020',
  ambarHi: '#FFC861',
  cobre: '#C46A2B',
  cobreInk: '#8A4A1E', // cobre oscuro: pasa 4.5:1 sobre papel
  azul: '#2F7DD1',
  azulSoft: '#6FA8E8', // azul claro: pasa 4.5:1 sobre noche
  humo: '#C9CED6',
  papel: '#ECE8DE',
  tinta: '#161B22',
  mutD: 'rgba(201,206,214,0.74)',
  mutD2: 'rgba(201,206,214,0.62)',
  mutL: 'rgba(22,27,34,0.66)',
  lineD: 'rgba(201,206,214,0.14)',
  lineL: 'rgba(22,27,34,0.16)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'electricidad-automotriz-del-valle',
  title: 'Electricidad Automotriz Del Valle · Villarrica · 24 horas',
  description:
    'Taller de electricidad automotriz en Pasaje Entre Lagos 770, Villarrica. Diagnóstico eléctrico, cableado, alternadores, módulos, radios y luces LED. Abierto las 24 horas. 4,9 en Google.',
  image: '/demos/electricidad-automotriz-del-valle/luces-led.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tu falla', href: '#falla' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/* ── Iconos del rubro, trazo único estilo diagrama ── */
function Ic({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    rayo: <path d="M13 2.5 L5.5 13.5 h5 L10 21.5 l8.5-12 h-5.2 z" />,
    diag: (
      <>
        <circle cx="10.5" cy="10.5" r="6.8" />
        <path d="M15.6 15.6 L20.6 20.6" />
        <path d="M7 10.5h1.7l1.1-2.4 1.7 4.8 1.2-2.4h1.7" />
      </>
    ),
    cable: (
      <>
        <path d="M3 15.5c2.6-4.4 5.4-4.4 8 0s5.4 4.4 8 0" />
        <path d="M3 9.5c2.6 4.4 5.4 4.4 8 0s5.4-4.4 8 0" />
        <path d="M19.5 8v4" />
      </>
    ),
    carga: (
      <>
        <circle cx="12" cy="12" r="7.6" />
        <path d="M12.8 7.8 L9.8 12.4 h2.4 L10.4 16.4 l5.4-5.4 h-2.6 z" />
      </>
    ),
    modulo: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.6" />
        <rect x="10.3" y="10.3" width="3.4" height="3.4" rx="0.7" />
        <path d="M9.5 3.5v2M12 3.5v2M14.5 3.5v2M9.5 18.5v2M12 18.5v2M14.5 18.5v2M3.5 9.5h2M3.5 12h2M3.5 14.5h2M18.5 9.5h2M18.5 12h2M18.5 14.5h2" />
      </>
    ),
    radio: (
      <>
        <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
        <rect x="6" y="8.4" width="8.4" height="5" rx="0.9" />
        <circle cx="17.4" cy="10.9" r="1.7" />
        <path d="M6 16h4.4M13.2 16h4.2" />
      </>
    ),
    led: (
      <>
        <path d="M8 15.5 L8 9.8 L15.5 5.4 v10.1 z" />
        <path d="M17.8 8.5l2.7-1.5M18.4 12h3M17.8 15.5l2.7 1.5" />
        <path d="M8 18.5h3.2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    chat: (
      <>
        <path d="M4 5.5h16v10.8H9.5L5 20.2v-3.9H4z" />
        <path d="M8 9.4h8M8 12.4h5" />
      </>
    ),
    wa: (
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Rótulo de sección estilo placa: número de trazo + línea. */
function Rotulo({ n, dark = true, children }: { n: string; dark?: boolean; children: React.ReactNode }) {
  const ink = dark ? C.ambar : C.cobreInk
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.26em] mb-5`}
      style={{ color: dark ? C.mutD : C.mutL }}
    >
      <span
        className="inline-block h-[9px] w-[9px] shrink-0 rounded-[2px]"
        style={{ backgroundColor: ink, boxShadow: `0 0 10px ${ink}` }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap">
        <span style={{ color: ink }}>{n}</span> · {children}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/** Botones del demo: altura segura en móvil (≤52px). */
function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'ambar' | 'line' | 'tinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'ambar'
      ? { backgroundColor: C.ambar, color: C.noche }
      : tone === 'tinta'
        ? { backgroundColor: C.tinta, color: C.papel }
        : { border: '1.5px solid rgba(201,206,214,0.45)', color: C.humo }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="dv-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Placa de foto con esquinas de circuito y rótulo mono. */
function Placa({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  tag,
  caption,
  position,
  sizes,
}: {
  src: string
  alt: string
  ratio?: string
  tag: string
  caption?: string
  position?: string
  sizes?: string
}) {
  return (
    <figure
      className="group relative overflow-hidden rounded-lg"
      style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.pozo }}
    >
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? '(min-width: 1024px) 42vw, 90vw'}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={position ? { objectPosition: position } : undefined}
        />
        {/* esquinas de placa */}
        {[
          'top-2 left-2 border-t-2 border-l-2',
          'top-2 right-2 border-t-2 border-r-2',
          'bottom-2 left-2 border-b-2 border-l-2',
          'bottom-2 right-2 border-b-2 border-r-2',
        ].map((pos) => (
          <span
            key={pos}
            className={`absolute ${pos} h-3 w-3 opacity-70`}
            style={{ borderColor: C.ambar }}
            aria-hidden="true"
          />
        ))}
      </div>
      <figcaption
        className="absolute bottom-0 inset-x-0 px-4 pt-8 pb-2.5 flex items-baseline justify-between gap-3"
        style={{ background: 'linear-gradient(0deg, rgba(10,13,18,0.82) 0%, rgba(10,13,18,0) 100%)' }}
      >
        <span className={`${mono.className} text-[9px] md:text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.ambar }}>
          {tag}
        </span>
        {caption && (
          <span className="text-[10px] md:text-[11px] text-right leading-snug" style={{ color: 'rgba(201,206,214,0.85)' }}>
            {caption}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

export default function ElectricidadDelVallePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.noche, color: C.humo }}
    >
      <style>{`
        /* ── El encendido: la corriente sale del CTA, sube por la pista
              y cierra el circuito: se enciende el trabajo de Del Valle ── */
        .dv-stub-c, .dv-stub-t, .dv-rail-v { background-color: ${C.ambar}; }
        .dv-stub-c { clip-path: inset(0 0 0 100%); animation: dv-stub-c .28s ease-out .12s forwards }
        @keyframes dv-stub-c { to { clip-path: inset(0 0 0 0) } }
        .dv-rail-v { clip-path: inset(100% 0 0 0); animation: dv-rail .62s cubic-bezier(.4,0,.3,1) .42s forwards }
        @keyframes dv-rail { to { clip-path: inset(0 0 0 0) } }
        .dv-stub-t { clip-path: inset(0 100% 0 0); animation: dv-stub-t .24s ease-out 1.04s forwards }
        @keyframes dv-stub-t { to { clip-path: inset(0 0 0 0) } }

        .dv-nodo, .dv-nodo-b {
          border-radius: 9999px; border: 2px solid ${C.ambar};
          background-color: ${C.noche}; transform: scale(0);
        }
        .dv-nodo-b { animation: dv-nodo .3s cubic-bezier(.3,1.5,.5,1) .14s forwards }
        .dv-nodo { animation: dv-nodo .34s cubic-bezier(.3,1.5,.5,1) 1.2s forwards }
        @keyframes dv-nodo {
          to { transform: scale(1); background-color: ${C.ambar}; box-shadow: 0 0 14px ${C.ambar} }
        }

        /* La foto LED se enciende: dos pulsos y queda firme. */
        .dv-photo-img { opacity: 0; animation: dv-power 1.15s linear 1.18s forwards }
        @keyframes dv-power {
          0% { opacity: 0 }
          9% { opacity: .85 }
          18% { opacity: .15 }
          30% { opacity: 1 }
          38% { opacity: .4 }
          52%, 100% { opacity: 1 }
        }
        .dv-halo { opacity: 0; animation: dv-halo 1.1s ease 1.25s forwards }
        @keyframes dv-halo { to { opacity: 1 } }
        .dv-falla { animation: dv-falla 1.2s ease 1.2s both }
        @keyframes dv-falla {
          0% { text-shadow: none }
          35% { text-shadow: 0 0 22px rgba(255,176,32,.75) }
          100% { text-shadow: 0 0 12px rgba(255,176,32,.28) }
        }

        /* Texto del hero: entrada suave. */
        .dv-rise { animation: dv-rise .8s cubic-bezier(.22,.61,.2,1) both }
        @keyframes dv-rise { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }

        /* Rail de servicios: el nodo se enciende cuando el bloque entra. */
        .dv-item { opacity: 0; transform: translateY(26px); transition: opacity .75s cubic-bezier(.25,.1,.25,1), transform .75s cubic-bezier(.25,.1,.25,1) }
        .dv-item.dv-on { opacity: 1; transform: none }
        .dv-item .dv-nodo-i {
          position: absolute; left: 1px; top: 34px; width: 15px; height: 15px;
          border-radius: 9999px; border: 2px solid rgba(201,206,214,0.35);
          background-color: ${C.panel}; transition: background-color .5s ease .15s, border-color .5s ease .15s, box-shadow .5s ease .15s;
        }
        .dv-item .dv-rama {
          position: absolute; left: 16px; top: 41px; width: 22px; height: 2px;
          background-color: rgba(201,206,214,0.22); transition: background-color .5s ease .2s, box-shadow .5s ease .2s;
        }
        .dv-item.dv-on .dv-nodo-i { background-color: ${C.ambar}; border-color: ${C.ambar}; box-shadow: 0 0 14px rgba(255,176,32,.8) }
        .dv-item.dv-on .dv-rama { background-color: ${C.ambar}; box-shadow: 0 0 8px rgba(255,176,32,.55) }

        /* El pulso de carga del alternador recorre la pista. */
        .dv-carga-pulso { transform: translateX(-110%); animation: dv-carga 2.4s cubic-bezier(.45,0,.45,1) infinite }
        @keyframes dv-carga {
          0% { transform: translateX(-110%); opacity: 0 }
          14% { opacity: 1 }
          80% { opacity: 1 }
          100% { transform: translateX(400%); opacity: 0 }
        }

        .dv-btn { transition: transform .18s ease, filter .18s ease }
        .dv-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .dv-btn:active { transform: scale(.97) }
        .dv-page a:focus-visible { outline: 3px solid ${C.ambar}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .dv-stub-c, .dv-stub-t, .dv-rail-v, .dv-nodo, .dv-nodo-b,
          .dv-photo-img, .dv-halo, .dv-falla, .dv-rise { animation: none !important }
          .dv-stub-c, .dv-stub-t, .dv-rail-v { clip-path: none }
          .dv-nodo, .dv-nodo-b { transform: none; background-color: ${C.ambar}; box-shadow: 0 0 14px ${C.ambar} }
          .dv-photo-img, .dv-halo { opacity: 1 }
          .dv-falla { text-shadow: 0 0 12px rgba(255,176,32,.28) }
          .dv-item { opacity: 1; transform: none }
          .dv-item .dv-nodo-i { background-color: ${C.ambar}; border-color: ${C.ambar} }
          .dv-item .dv-rama { background-color: ${C.ambar} }
          .dv-carga-pulso { display: none }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="uppercase tracking-wide">
            Del <span style={{ color: C.ambar }}>Valle</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(10,13,18,0.94)',
          ink: C.humo,
          line: C.lineD,
          btnBg: C.ambar,
          btnInk: C.noche,
        }}
      />

      <div className="dv-page">
        {/* ── 1 · Hero: se enciende el circuito ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
          {/* pistas de placa de fondo */}
          <svg
            className="absolute top-0 right-0 h-[560px] w-[78%] md:w-[46%] pointer-events-none"
            viewBox="0 0 300 560"
            fill="none"
            aria-hidden="true"
            style={{ opacity: 0.09 }}
          >
            <g stroke={C.azulSoft} strokeWidth="1.4">
              <path d="M310 40 H210 L170 80 V150" />
              <path d="M310 110 H240 L200 150 V240" />
              <path d="M310 190 H200 L160 230 V320 L130 350" />
              <path d="M310 300 H230 L190 340 V430" />
              <path d="M310 420 H170 L130 460 V520" />
            </g>
            <g fill={C.ambar}>
              <circle cx="170" cy="150" r="4" />
              <circle cx="200" cy="240" r="4" />
              <circle cx="130" cy="350" r="4" />
              <circle cx="190" cy="430" r="4" />
              <circle cx="130" cy="520" r="4" />
            </g>
          </svg>
          <div
            className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(47,125,209,0.13) 0%, transparent 65%)' }}
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-[116px] pb-10 md:pb-14">
            {/* el circuito: pista vertical en el canal + 2 derivaciones */}
            <div className="relative grid grid-cols-[26px_1fr] md:grid-cols-[34px_1fr]">
              <div className="absolute inset-y-0 left-0 w-[26px] md:w-[34px]" aria-hidden="true">
                <span className="dv-rail-v absolute left-[10px] md:left-[14px] w-[2px] rounded-full" style={{ top: '24%', bottom: '22%' }} />
                <span className="dv-stub-t absolute h-[2px]" style={{ left: '10px', right: '0', top: '24%', transform: 'translateY(-1px)' }} />
                <span className="dv-stub-c absolute h-[2px]" style={{ left: '10px', right: '0', bottom: '22%', transform: 'translateY(1px)' }} />
                <span className="dv-nodo absolute left-[5px] md:left-[9px] w-[13px] h-[13px]" style={{ top: '24%', marginTop: '-6px' }} />
                <span className="dv-nodo-b absolute left-[5px] md:left-[9px] w-[13px] h-[13px]" style={{ bottom: '22%', marginBottom: '-6px' }} />
              </div>

              <p
                className={`${mono.className} col-start-2 dv-rise flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] mb-4`}
                style={{ color: C.ambar, animationDelay: '0.08s' }}
              >
                Villarrica · Abierto 24 horas
              </p>
              <h1
                className={`${display.className} col-start-2 font-extrabold leading-[1.04] tracking-[-0.01em] text-[clamp(2rem,9vw,4.4rem)]`}
                style={{ color: '#F2F5F8' }}
              >
                <span className="block overflow-hidden">
                  <span className="dv-rise block" style={{ animationDelay: '0.2s' }}>
                    Encontramos
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="dv-rise block" style={{ animationDelay: '0.34s' }}>
                    <span className="dv-falla" style={{ color: C.ambar }}>la falla.</span>
                  </span>
                </span>
              </h1>
              <p
                className="col-start-2 dv-rise mt-4 max-w-md text-[15px] md:text-lg leading-relaxed"
                style={{ color: C.mutD, animationDelay: '0.46s' }}
              >
                Electricidad automotriz para autos y camionetas: cableado,
                alternadores, módulos, radios y luces.
              </p>
              <div className="col-start-2 dv-rise mt-6 flex flex-wrap gap-3" style={{ animationDelay: '0.58s' }}>
                <Btn href={WA_LINK} tone="ambar">
                  <Ic name="wa" className="w-[18px] h-[18px]" />
                  Escríbenos por WhatsApp
                </Btn>
                <Btn href={WA_LINK} tone="line">
                  {BIZ.phoneDisplay}
                </Btn>
              </div>
              <div className="col-start-2 dv-rise mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5" style={{ animationDelay: '0.68s' }}>
                <Stars value={BIZ.ratingValue} color={C.ambar} size={16} />
                <span className="text-sm font-semibold" style={{ color: '#F2F5F8' }}>
                  {BIZ.rating} en Google
                </span>
                <span className="text-sm" style={{ color: C.mutD }}>
                  · {BIZ.reviews} opiniones
                </span>
              </div>
            </div>

            {/* la salida: la foto LED que se enciende al cerrar el circuito */}
            <div className="relative mt-8 md:mt-12">
              <div
                className="dv-halo absolute -inset-3 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(60% 80% at 50% 45%, rgba(255,176,32,0.16) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <figure
                className="relative overflow-hidden rounded-xl"
                style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.pozo }}
              >
                <div className="relative aspect-[20/9]">
                  <div className="dv-photo-img absolute inset-0">
                    <Image
                      src={`${IMG}/luces-led.webp`}
                      alt="Tres haces de luz LED ámbar encendidos en la parrilla de una camioneta, de noche"
                      fill
                      priority
                      sizes="(min-width: 1024px) 86vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  {[
                    'top-2.5 left-2.5 border-t-2 border-l-2',
                    'top-2.5 right-2.5 border-t-2 border-r-2',
                    'bottom-2.5 left-2.5 border-b-2 border-l-2',
                    'bottom-2.5 right-2.5 border-b-2 border-r-2',
                  ].map((pos) => (
                    <span key={pos} className={`absolute ${pos} h-3.5 w-3.5 z-10`} style={{ borderColor: C.ambar, opacity: 0.8 }} aria-hidden="true" />
                  ))}
                </div>
                <figcaption
                  className="absolute bottom-0 inset-x-0 px-4 md:px-5 pt-9 pb-3 flex items-baseline justify-between gap-3"
                  style={{ background: 'linear-gradient(0deg, rgba(10,13,18,0.85) 0%, rgba(10,13,18,0) 100%)' }}
                >
                  <span className={`${mono.className} text-[9px] md:text-[10px] font-bold uppercase tracking-[0.24em]`} style={{ color: C.ambar }}>
                    Salida 01 · Mejora de iluminación LED
                  </span>
                  <span className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.mutD }}>
                    Trabajo real · Del Valle
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── 2 · Servicios: la pista principal con sus nodos ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <Reveal>
              <Rotulo n="TRAZO 01">Seis circuitos de trabajo</Rotulo>
              <div className="grid lg:grid-cols-[1.25fr_1fr] gap-5 md:gap-10 items-end">
                <h2
                  className={`${display.className} font-extrabold leading-[1.05] tracking-[-0.01em] text-[clamp(1.8rem,6.8vw,3.6rem)]`}
                  style={{ color: '#F2F5F8' }}
                >
                  Del arnés quemado{' '}
                  <span style={{ color: C.ambar }}>a la pantalla nueva.</span>
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutD }}>
                  Autos y camionetas: cada falla entra por un canal y sale
                  funcionando. Estos son los seis que resuelve el taller.
                </p>
              </div>
            </Reveal>

            {/* la pista principal */}
            <div className="relative mt-10 md:mt-14">
              <span
                className="absolute left-[8px] top-3 bottom-3 w-[2px] rounded-full"
                style={{ backgroundColor: 'rgba(201,206,214,0.18)' }}
                aria-hidden="true"
              />

              {/* CTO·01 · Diagnóstico */}
              <Conexion className="relative pl-9 md:pl-14 pb-12 md:pb-16">
                <span className="dv-nodo-i" aria-hidden="true" />
                <span className="dv-rama" aria-hidden="true" />
                <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-6 md:gap-10 items-center">
                  <div>
                    <p className={`${mono.className} flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em]`} style={{ color: C.azulSoft }}>
                      <Ic name="diag" className="w-[18px] h-[18px]" />
                      CTO·01
                    </p>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mt-2 leading-tight`} style={{ color: '#F2F5F8' }}>
                      Diagnóstico eléctrico
                    </h3>
                    <p className="mt-2.5 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                      El auto que no enciende, la luz del tablero que apareció:
                      primero se mide y se encuentra la causa; recién después
                      se repara. Nada de cambiar piezas a ciegas.
                    </p>
                    <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.mutD2 }}>
                      Autos y camionetas
                    </p>
                  </div>
                  <Placa
                    src={`${IMG}/motor-camioneta.webp`}
                    alt="Camioneta con el capó abierto lista para la revisión eléctrica"
                    ratio="aspect-[3/4] max-h-[340px] md:max-h-[380px]"
                    tag="Entrada · Capó abierto"
                    sizes="(min-width: 1024px) 28vw, 86vw"
                  />
                </div>
              </Conexion>

              {/* CTO·02 · Cableado */}
              <Conexion className="relative pl-9 md:pl-14 pb-12 md:pb-16">
                <span className="dv-nodo-i" aria-hidden="true" />
                <span className="dv-rama" aria-hidden="true" />
                <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-center">
                  <div className="order-2 md:order-1 grid grid-cols-2 gap-3 md:gap-4">
                    <Placa
                      src={`${IMG}/cables-quemados.webp`}
                      alt="Arnés de cables de colores quemado, antes de la reparación"
                      ratio="aspect-[3/4]"
                      tag="Así llega"
                      sizes="(min-width: 1024px) 20vw, 43vw"
                    />
                    <div className="mt-6 md:mt-10">
                      <Placa
                        src={`${IMG}/tablero-cableado.webp`}
                        alt="Tablero desarmado con todo el cableado a la vista"
                        ratio="aspect-[3/4]"
                        tag="En trabajo"
                        sizes="(min-width: 1024px) 20vw, 43vw"
                      />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <p className={`${mono.className} flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em]`} style={{ color: C.azulSoft }}>
                      <Ic name="cable" className="w-[18px] h-[18px]" />
                      CTO·02
                    </p>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mt-2 leading-tight`} style={{ color: '#F2F5F8' }}>
                      Cableado y arneses
                    </h3>
                    <p className="mt-2.5 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                      Arneses dañados, cortados o quemados: se revisa tramo a
                      tramo, se repara el cableado y queda protegido como
                      corresponde.
                    </p>
                  </div>
                </div>
              </Conexion>

              {/* CTO·03 · Alternadores y carga */}
              <Conexion className="relative pl-9 md:pl-14 pb-12 md:pb-16">
                <span className="dv-nodo-i" aria-hidden="true" />
                <span className="dv-rama" aria-hidden="true" />
                <div className="grid md:grid-cols-[1fr_0.9fr] gap-6 md:gap-10 items-center">
                  <div>
                    <p className={`${mono.className} flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em]`} style={{ color: C.azulSoft }}>
                      <Ic name="carga" className="w-[18px] h-[18px]" />
                      CTO·03
                    </p>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mt-2 leading-tight`} style={{ color: '#F2F5F8' }}>
                      Alternadores y sistema de carga
                    </h3>
                    <p className="mt-2.5 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                      La batería que no carga o el auto que se apaga en marcha:
                      alternador, regulador y el circuito completo de carga.
                    </p>
                  </div>
                  {/* la corriente viajando del alternador a la batería */}
                  <div
                    className="relative rounded-lg px-5 py-6 overflow-hidden"
                    style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.pozo }}
                    role="img"
                    aria-label="Diagrama: la carga viaja del alternador a la batería"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex flex-col items-center gap-1.5" style={{ color: C.cobre }}>
                        <Ic name="carga" className="w-9 h-9 md:w-11 md:h-11" />
                        <span className={`${mono.className} text-[8px] md:text-[9px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.mutD }}>
                          Alternador
                        </span>
                      </span>
                      <span className="relative flex-1 h-[3px] mx-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(201,206,214,0.2)' }}>
                        <span
                          className="dv-carga-pulso absolute inset-y-0 left-0 w-[34%] rounded-full"
                          style={{ background: `linear-gradient(90deg, transparent, ${C.ambar}, transparent)` }}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="flex flex-col items-center gap-1.5" style={{ color: C.ambar }}>
                        <Ic name="rayo" className="w-9 h-9 md:w-11 md:h-11" />
                        <span className={`${mono.className} text-[8px] md:text-[9px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.mutD }}>
                          Batería
                        </span>
                      </span>
                    </div>
                    <p className={`${mono.className} mt-4 text-[9px] uppercase tracking-[0.2em] text-center`} style={{ color: C.mutD2 }}>
                      Circuito de carga · 12 V
                    </p>
                  </div>
                </div>
              </Conexion>

              {/* CTO·04 · Módulos */}
              <Conexion className="relative pl-9 md:pl-14 pb-12 md:pb-16">
                <span className="dv-nodo-i" aria-hidden="true" />
                <span className="dv-rama" aria-hidden="true" />
                <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] gap-6 md:gap-10 items-center">
                  <Placa
                    src={`${IMG}/placa-modulo.webp`}
                    alt="La placa electrónica de un módulo del vehículo en la mesa de trabajo"
                    ratio="aspect-[3/4] max-h-[340px] md:max-h-[380px]"
                    tag="Placa · Módulo"
                    sizes="(min-width: 1024px) 28vw, 86vw"
                  />
                  <div>
                    <p className={`${mono.className} flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em]`} style={{ color: C.azulSoft }}>
                      <Ic name="modulo" className="w-[18px] h-[18px]" />
                      CTO·04
                    </p>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mt-2 leading-tight`} style={{ color: '#F2F5F8' }}>
                      Módulos y placas electrónicas
                    </h3>
                    <p className="mt-2.5 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                      Los módulos que mandan en el auto: diagnóstico y
                      reparación de placas y circuitos electrónicos, con la
                      paciencia que la electrónica pide.
                    </p>
                  </div>
                </div>
              </Conexion>

              {/* CTO·05 · Radios y pantallas */}
              <Conexion className="relative pl-9 md:pl-14 pb-12 md:pb-16">
                <span className="dv-nodo-i" aria-hidden="true" />
                <span className="dv-rama" aria-hidden="true" />
                <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 md:gap-10 items-center">
                  <div>
                    <p className={`${mono.className} flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em]`} style={{ color: C.azulSoft }}>
                      <Ic name="radio" className="w-[18px] h-[18px]" />
                      CTO·05
                    </p>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mt-2 leading-tight`} style={{ color: '#F2F5F8' }}>
                      Radios y pantallas multimedia
                    </h3>
                    <p className="mt-2.5 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                      Instalación de radios y pantallas multimedia, integradas
                      al tablero con el cableado ordenado por dentro.
                    </p>
                  </div>
                  <Placa
                    src={`${IMG}/pantalla-radio.webp`}
                    alt="Pantalla multimedia instalada en el tablero de un vehículo"
                    ratio="aspect-[20/9] md:aspect-[21/10]"
                    tag="Pantalla instalada"
                    sizes="(min-width: 1024px) 52vw, 86vw"
                  />
                </div>
              </Conexion>

              {/* CTO·06 · Iluminación LED */}
              <Conexion className="relative pl-9 md:pl-14">
                <span className="dv-nodo-i" aria-hidden="true" />
                <span className="dv-rama" aria-hidden="true" />
                <div className="grid md:grid-cols-[1fr_0.9fr] gap-6 md:gap-10 items-center">
                  <div>
                    <p className={`${mono.className} flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em]`} style={{ color: C.azulSoft }}>
                      <Ic name="led" className="w-[18px] h-[18px]" />
                      CTO·06
                    </p>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mt-2 leading-tight`} style={{ color: '#F2F5F8' }}>
                      Iluminación LED
                    </h3>
                    <p className="mt-2.5 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                      Mejora de iluminación: sistemas LED para ver mejor el
                      camino de noche y para que te vean.
                    </p>
                    <div className="mt-5">
                      <Btn href={WA_LINK} tone="line">
                        Consultar una instalación
                      </Btn>
                    </div>
                  </div>
                  <Placa
                    src={`${IMG}/luces-led.webp`}
                    alt="Haces de luz LED ámbar en la parrilla de una camioneta"
                    ratio="aspect-[16/9]"
                    position="50% 42%"
                    tag="El resultado"
                    sizes="(min-width: 1024px) 38vw, 86vw"
                  />
                </div>
              </Conexion>
            </div>
          </div>
        </section>

        {/* ── 3 · Cuéntanos tu falla: la orden de ingreso ── */}
        <section id="falla" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo n="TRAZO 02" dark={false}>
                    Orden de ingreso
                  </Rotulo>
                  <h2
                    className={`${display.className} font-extrabold leading-[1.05] tracking-[-0.01em] text-[clamp(1.8rem,6.8vw,3.4rem)]`}
                  >
                    Cuéntanos{' '}
                    <span style={{ color: C.cobreInk }}>tu falla.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutL }}>
                    Del Valle atiende por WhatsApp a toda hora. Su propio
                    mensaje automático pide cuatro datos: complétalos y la
                    consulta llega con todo claro.
                  </p>
                </Reveal>
                <ol className="mt-8 space-y-0">
                  {[
                    { n: '01', k: 'Vehículo', d: 'auto o camioneta; si sabes el modelo, mejor' },
                    { n: '02', k: 'Falla', d: 'qué le pasa: no enciende, se apaga, una luz…' },
                    { n: '03', k: 'Dirección', d: 'dónde está el vehículo' },
                    { n: '04', k: 'Nombre', d: 'quién se comunica' },
                  ].map((f, i) => (
                    <Reveal key={f.n} delay={i * 90}>
                      <li
                        className="flex gap-4 items-baseline border-b border-dashed py-4 last:border-b-0"
                        style={{ borderColor: 'rgba(22,27,34,0.28)' }}
                      >
                        <span
                          className={`${mono.className} text-xs font-bold leading-none shrink-0`}
                          style={{ color: C.cobreInk }}
                          aria-hidden="true"
                        >
                          {f.n}
                        </span>
                        <div className="flex-1">
                          <h3 className={`${display.className} font-bold text-base md:text-lg leading-tight`}>{f.k}</h3>
                          <p className="mt-0.5 text-[13px] md:text-sm" style={{ color: C.mutL }}>
                            {f.d}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>

              {/* la vista previa del mensaje */}
              <Reveal delay={140}>
                <div
                  className="rounded-xl p-5 md:p-7"
                  style={{ backgroundColor: C.noche, border: `1.5px solid rgba(22,27,34,0.35)`, boxShadow: '0 20px 44px rgba(14,17,22,0.28)' }}
                >
                  <p className={`${mono.className} flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.ambar }}>
                    <Ic name="chat" className="w-4 h-4" />
                    WhatsApp · Para Del Valle
                  </p>
                  <div
                    className="mt-4 rounded-lg p-4 md:p-5"
                    style={{ backgroundColor: C.panel, border: `1px solid ${C.lineD}` }}
                  >
                    <p className="text-[14px] md:text-[15px] leading-[2.1]" style={{ color: C.humo }}>
                      Hola Del Valle, mi vehículo es:{' '}
                      <span className={`${mono.className} text-[11px]`} style={{ color: C.ambar, borderBottom: `1.5px dashed rgba(255,176,32,0.55)` }}>······</span>
                      <br />
                      Falla:{' '}
                      <span className={`${mono.className} text-[11px]`} style={{ color: C.ambar, borderBottom: `1.5px dashed rgba(255,176,32,0.55)` }}>······</span>
                      <br />
                      Dirección:{' '}
                      <span className={`${mono.className} text-[11px]`} style={{ color: C.ambar, borderBottom: `1.5px dashed rgba(255,176,32,0.55)` }}>······</span>
                      <br />
                      Nombre:{' '}
                      <span className={`${mono.className} text-[11px]`} style={{ color: C.ambar, borderBottom: `1.5px dashed rgba(255,176,32,0.55)` }}>······</span>
                    </p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed" style={{ color: C.mutD }}>
                    El mensaje ya va armado con el formato que ellos mismos
                    piden: solo completa los espacios.
                  </p>
                  <div className="mt-5">
                    <Btn href={WA_LINK} tone="ambar">
                      <Ic name="wa" className="w-[18px] h-[18px]" />
                      Enviar por WhatsApp
                    </Btn>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4 · Opiniones: 4,9 con 29 ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <Rotulo n="TRAZO 03">Opiniones</Rotulo>
              <div className="mt-2 flex items-end gap-4">
                <span
                  className={`${display.className} font-extrabold leading-[0.85] text-[clamp(4.4rem,16vw,7.8rem)]`}
                  style={{ color: '#F2F5F8' }}
                >
                  {BIZ.rating}
                </span>
                <div className="pb-2.5">
                  <Stars value={BIZ.ratingValue} color={C.ambar} size={19} />
                  <p className="mt-1.5 text-sm font-semibold" style={{ color: '#F2F5F8' }}>
                    {BIZ.reviews} opiniones en Google
                  </p>
                  <p className="text-xs" style={{ color: C.mutD }}>
                    citas textuales de su ficha
                  </p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.ambar, textDecorationColor: 'rgba(255,176,32,0.4)' }}
              >
                Ver la ficha real en Google
              </a>
              <p className="mt-6 max-w-xs text-[14px] leading-relaxed" style={{ color: C.mutD }}>
                Lo que repiten sus clientes: explica con detalle, es
                transparente y recibe vehículos incluso de noche.
              </p>
            </Reveal>
            <div className="space-y-4">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={i * 110}>
                  <blockquote
                    className="relative rounded-xl p-5 md:p-6"
                    style={{
                      backgroundColor: C.panel,
                      border: `1.5px solid ${i === 0 ? 'rgba(255,176,32,0.4)' : C.lineD}`,
                    }}
                  >
                    <span
                      className={`${display.className} absolute -top-4 left-4 text-5xl leading-none`}
                      style={{ color: C.ambar }}
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <p className="text-[15px] md:text-[17px] font-medium leading-snug" style={{ color: '#F2F5F8' }}>
                      {r.text}
                    </p>
                    <footer className="mt-3 flex items-center gap-2.5">
                      <cite className="not-italic text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.mutD }}>
                        {r.author} · Google
                      </cite>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 · Dónde estamos ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <Reveal>
              <Rotulo n="TRAZO 04" dark={false}>
                Dónde estamos
              </Rotulo>
              <h2
                className={`${display.className} font-extrabold leading-[1.05] tracking-[-0.01em] text-[clamp(1.8rem,6.8vw,3.4rem)]`}
              >
                Pasaje Entre Lagos 770,{' '}
                <span style={{ color: C.cobreInk }}>a cualquier hora.</span>
              </h2>
            </Reveal>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 mt-8 md:mt-12 items-start">
              <div>
                <Reveal>
                  <div className="rounded-xl p-5 md:p-7" style={{ backgroundColor: '#FAF7F0', border: `1.5px solid ${C.lineL}` }}>
                    <div className="flex gap-3.5">
                      <span className="shrink-0 mt-0.5" style={{ color: C.cobreInk }}>
                        <Ic name="pin" className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className={`${display.className} font-bold text-lg md:text-xl`}>La dirección</h3>
                        <address className="not-italic mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutL }}>
                          {BIZ.address}
                          <br />
                          {BIZ.city}, {BIZ.region}
                        </address>
                      </div>
                    </div>
                    <div className="flex gap-3.5 mt-6 pt-5 border-t" style={{ borderColor: C.lineL }}>
                      <span className="shrink-0 mt-0.5" style={{ color: C.cobreInk }}>
                        <Ic name="reloj" className="w-5 h-5" />
                      </span>
                      <div className="flex-1">
                        <h3 className={`${display.className} font-bold text-lg md:text-xl`}>El horario</h3>
                        <p className="mt-1.5 text-[15px]" style={{ color: C.mutL }}>
                          Atención las 24 horas,{' '}
                          <span className="font-semibold" style={{ color: C.tinta }}>todos los días</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3.5 mt-6 pt-5 border-t" style={{ borderColor: C.lineL }}>
                      <span className="shrink-0 mt-0.5" style={{ color: C.cobreInk }}>
                        <Ic name="chat" className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className={`${display.className} font-bold text-lg md:text-xl`}>El contacto</h3>
                        <a
                          href={WA_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-block text-[15px] font-semibold underline underline-offset-2 tap-44"
                        >
                          {BIZ.phoneDisplay} · WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <Btn href={WA_LINK} tone="tinta">
                        Escríbenos por WhatsApp
                      </Btn>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dv-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                        style={{ border: `1.5px solid ${C.tinta}`, color: C.tinta }}
                      >
                        Cómo llegar
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <div
                  className="relative w-full overflow-hidden rounded-xl aspect-[4/3] md:aspect-[16/11] min-h-[280px]"
                  style={{ border: `1.5px solid ${C.lineL}` }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 6 · Cierre: de día o de noche ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.pozo }}>
          <svg
            className="absolute bottom-0 left-0 h-[420px] w-[70%] md:w-[40%] pointer-events-none"
            viewBox="0 0 300 420"
            fill="none"
            aria-hidden="true"
            style={{ opacity: 0.08 }}
          >
            <g stroke={C.azulSoft} strokeWidth="1.4">
              <path d="M-10 60 H90 L130 100 V180" />
              <path d="M-10 160 H70 L110 200 V300" />
              <path d="M-10 280 H120 L160 320 V390" />
            </g>
            <g fill={C.ambar}>
              <circle cx="130" cy="180" r="4" />
              <circle cx="110" cy="300" r="4" />
              <circle cx="160" cy="390" r="4" />
            </g>
          </svg>
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,176,32,0.12) 0%, transparent 62%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em]`} style={{ color: C.ambar }}>
                Villarrica · 24 horas, todos los días
              </p>
              <h2
                className={`${display.className} font-extrabold leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,8vw,4rem)] mt-4`}
                style={{ color: '#F2F5F8' }}
              >
                De día o de noche:{' '}
                <span style={{ color: C.ambar }}>encontramos la falla.</span>
              </h2>
              <p className="mt-5 max-w-md mx-auto text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                Escríbenos con tu vehículo, la falla, tu dirección y tu
                nombre. Así de simple.
              </p>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <Btn href={WA_LINK} tone="ambar">
                  <Ic name="wa" className="w-[18px] h-[18px]" />
                  Escríbenos por WhatsApp
                </Btn>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.humo, textDecorationColor: 'rgba(255,176,32,0.5)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 7 · Footer ── */}
        <footer style={{ backgroundColor: C.noche, color: C.humo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-11 w-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(255,176,32,0.12)', border: `1px solid rgba(255,176,32,0.35)`, color: C.ambar }}
                  aria-hidden="true"
                >
                  <Ic name="rayo" className="w-6 h-6" />
                </span>
                <div>
                  <p className={`${display.className} font-bold uppercase text-base leading-tight`}>
                    Del <span style={{ color: C.ambar }}>Valle</span>
                  </p>
                  <p className="text-xs" style={{ color: C.mutD2 }}>
                    {BIZ.rubro} · {BIZ.city}
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(201,206,214,0.85)' }}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
              <p className="text-xs leading-relaxed" style={{ color: C.mutD2 }}>
                {BIZ.address}, {BIZ.city} ·{' '}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: 'rgba(201,206,214,0.85)' }}>
                  {BIZ.phoneDisplay}
                </a>
                . Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.humo }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.name}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.ambar }}
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
