import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, OPINIONES, IMG } from './content'
import HorarioHoy from './hoy'

// Space Grotesk para titulares (geométrica, de señalética), Public Sans
// para el texto y IBM Plex Mono para los rótulos de pizarra clínica.
const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Del logo de la casa: azul emergencia, azul noche, rojo señal (solo
// acentos y el CTA de urgencia), celeste clínico y blanco.
const C = {
  noche: '#0E1D3A',
  nocheDeep: '#0A162E',
  azul: '#1E4FA3',
  rojo: '#D9262E',
  rojoInk: '#A92329', // rojo oscuro: pasa 4.5:1 sobre blanco y celeste
  celeste: '#E9F2FC',
  celesteMed: '#B7D6F5',
  celesteTxt: '#9CC3EE', // texto chico sobre noche: ~8:1
  paper: '#FFFFFF',
  ink: '#0E1D3A',
  muted: '#4A5B78', // ~6.4:1 sobre celeste, ~7:1 sobre blanco
  mutedD: 'rgba(233,242,252,0.78)',
  lineD: 'rgba(233,242,252,0.16)',
  lineL: 'rgba(14,29,58,0.14)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'emergencias-veterinarias-puerto-montt',
  title: 'Emergencias Veterinarias Puerto Montt · Urgencias y consulta veterinaria',
  description:
    'Atención de urgencias, consultas, vacunas, exámenes y hospitalización para perros, gatos y exóticos en Sargento Silva 1709, Puerto Montt. Escríbenos por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Exóticos', href: '#exoticos' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Dónde', href: '#donde' },
]

const GRUPOS: {
  tag: string
  name: string
  accent: string
  icon: keyof typeof ICONS
  items: [string, string | null][]
}[] = [
  {
    tag: 'T·01',
    name: 'Urgencia y hospitalización',
    accent: C.rojoInk,
    icon: 'estrella',
    items: [
      ['Atención de urgencias', null],
      ['Hospitalización', null],
      ['Cirugías', 'de urgencia y programadas'],
      ['Esterilizaciones y castraciones', null],
    ],
  },
  {
    tag: 'T·02',
    name: 'Consulta y prevención',
    accent: C.azul,
    icon: 'escudo',
    items: [
      ['Consulta general y controles', null],
      ['Vacunas', 'séxtuple, antirrábica, triple felina y leucemia'],
      ['Desparasitación interna y externa', null],
      ['Microchip con certificado', null],
    ],
  },
  {
    tag: 'T·03',
    name: 'Exámenes y curaciones',
    accent: C.azul,
    icon: 'muestra',
    items: [
      ['Perfil bioquímico y hemograma', 'muestras antes de las 12:00, paciente en ayunas'],
      ['Curaciones y cambios de vendaje', null],
      ['Corte de uñas sin sedación', null],
    ],
  },
  {
    tag: 'T·04',
    name: 'Exóticos',
    accent: C.azul,
    icon: 'pata',
    items: [
      ['Consulta de exóticos', 'conejos, cuyes, ratas y tortugas'],
    ],
  },
  {
    tag: 'T·05',
    name: 'Trámites',
    accent: C.azul,
    icon: 'certificado',
    items: [
      ['Certificado de viaje', 'para salir del país con tu mascota'],
    ],
  },
]

const ICONS = {
  // La estrella de la vida de su logo, en trazo.
  estrella: <path d="M12 3.5v17M4.7 7.75l14.6 8.5M4.7 16.25l14.6-8.5" />,
  escudo: (
    <>
      <path d="M12 3.5 19 6.2v5c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8v-5L12 3.5Z" />
      <path d="m9.2 11.8 2 2 3.8-4" />
    </>
  ),
  muestra: (
    <>
      <path d="M9.5 3.5h5" />
      <path d="M10.8 3.5v5L6.6 16.6A2.3 2.3 0 0 0 8.7 20h6.6a2.3 2.3 0 0 0 2.1-3.4L13.2 8.5v-5" />
      <path d="M8.4 14.5h7.2" />
    </>
  ),
  pata: (
    <>
      <ellipse cx="7.4" cy="8" rx="1.7" ry="2.3" />
      <ellipse cx="16.6" cy="8" rx="1.7" ry="2.3" />
      <ellipse cx="4.6" cy="12" rx="1.4" ry="1.9" />
      <ellipse cx="19.4" cy="12" rx="1.4" ry="1.9" />
      <path d="M12 10.6c2.9 0 5.4 2.4 5.4 5 0 1.7-1.3 2.8-2.8 2.8-.9 0-1.8-.5-2.6-.5s-1.7.5-2.6.5c-1.5 0-2.8-1.1-2.8-2.8 0-2.6 2.5-5 5.4-5Z" />
    </>
  ),
  certificado: (
    <>
      <path d="M6.5 3.5h7l4 4v13h-11v-17Z" />
      <path d="M13.5 3.5v4h4" />
      <path d="M9.3 12.2h5.4M9.3 15.4h5.4" />
    </>
  ),
} as const

function Icon({ name, color, className = 'w-5 h-5' }: { name: keyof typeof ICONS; color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={name === 'pata' ? color : 'none'}
      stroke={name === 'pata' ? 'none' : color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

/** La huella de su logo, el motivo que cierra la línea de pulso. */
function Paw({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="7" cy="8" rx="2" ry="2.6" />
      <ellipse cx="17" cy="8" rx="2" ry="2.6" />
      <ellipse cx="4" cy="12.5" rx="1.7" ry="2.2" />
      <ellipse cx="20" cy="12.5" rx="1.7" ry="2.2" />
      <path d="M12 11c3.2 0 6 2.6 6 5.4 0 1.9-1.4 3-3 3-1 0-2-.5-3-.5s-2 .5-3 .5c-1.6 0-3-1.1-3-3 0-2.8 2.8-5.4 6-5.4Z" />
    </svg>
  )
}

/** Latido mínimo: el marcador de cada ítem de la lista de triage. */
function Tick({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 16 10" className="mt-[6px] h-[10px] w-4 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M0.5 5.5h3.2l1.6-3.6 2.1 6.4 1.6-3.4 1 1.4h5.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Rotulo({
  children,
  color,
  dot = C.rojo,
}: {
  children: React.ReactNode
  color: string
  dot?: string
}) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]`}
      style={{ color }}
    >
      <span
        className="inline-block h-[2px] w-8 shrink-0"
        style={{
          backgroundImage: `linear-gradient(90deg, ${dot} 0 30%, transparent 30% 45%, ${dot} 45% 62%, transparent 62% 72%, ${dot} 72% 100%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'rojo' | 'lineNoche' | 'lineAzul' | 'azul' | 'blanco'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'rojo'
      ? { backgroundColor: C.rojo, color: '#FFFFFF' }
      : tone === 'azul'
        ? { backgroundColor: C.azul, color: '#FFFFFF' }
        : tone === 'blanco'
          ? { backgroundColor: '#FFFFFF', color: C.ink }
          : tone === 'lineNoche'
            ? { border: '1.5px solid rgba(233,242,252,0.55)', color: C.celeste }
            : { border: `1.5px solid ${C.azul}`, color: C.azul }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="evpm-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Foto con marco fino y rótulo mono superpuesto abajo a la izquierda. */
function Placa({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  label,
  dark = true,
  sizes = '(min-width: 1024px) 50vw, 92vw',
}: {
  src: string
  alt: string
  ratio?: string
  label: string
  dark?: boolean
  sizes?: string
}) {
  return (
    <figure
      className="group relative overflow-hidden rounded-2xl"
      style={{ border: `1px solid ${dark ? C.lineD : C.lineL}` }}
    >
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <figcaption
        className={`${mono.className} absolute left-3 bottom-3 rounded-md px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]`}
        style={{ backgroundColor: 'rgba(14,29,58,0.82)', color: C.celeste }}
      >
        {label}
      </figcaption>
    </figure>
  )
}

export default function EmergenciasVetPMPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.noche, color: C.celeste }}
    >
      <style>{`
        /* El pulso: la línea de ECG se dibuja de izquierda a derecha con dos
           latidos y al final la huella se rellena. Vida que llega. */
        @keyframes evpm-ecg { to { stroke-dashoffset: 0 } }
        .evpm-ecg { stroke-dasharray: 100; stroke-dashoffset: 100; animation: evpm-ecg 1.7s cubic-bezier(.45,.05,.35,1) .3s forwards }
        @keyframes evpm-paw { from { opacity: 0; transform: scale(.15) } to { opacity: 1; transform: scale(1) } }
        .evpm-paw { transform-box: fill-box; transform-origin: center; opacity: 0; animation: evpm-paw .5s cubic-bezier(.3,1.5,.5,1) 1.65s forwards }

        /* El punto que late junto a "Atendiendo hoy": lub-dub suave en loop. */
        @keyframes evpm-beat { 0%, 100% { transform: scale(1) } 12% { transform: scale(1.45) } 24% { transform: scale(1) } 36% { transform: scale(1.25) } 48% { transform: scale(1) } }
        .evpm-beat { animation: evpm-beat 1.6s ease-in-out infinite }

        @keyframes evpm-line { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .evpm-line { animation: evpm-line .9s cubic-bezier(.22,.61,.2,1) both }
        @keyframes evpm-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .evpm-fade { animation: evpm-fade .85s ease-out both }
        @keyframes evpm-foto { from { opacity: 0; transform: scale(1.08) } to { opacity: 1; transform: scale(1) } }
        .evpm-foto { animation: evpm-foto 1.5s cubic-bezier(.22,.61,.2,1) .3s both }

        .evpm-btn { transition: transform .18s ease, filter .18s ease }
        .evpm-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .evpm-btn:active { transform: translateY(0) scale(.97) }
        .evpm-btn:focus-visible, .evpm-page a:focus-visible { outline: 3px solid ${C.rojo}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .evpm-line, .evpm-fade, .evpm-foto, .evpm-beat { animation: none !important }
          .evpm-ecg { animation: none !important; stroke-dashoffset: 0 !important }
          .evpm-paw { animation: none !important; opacity: 1 !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="tracking-tight">
            EVPM <span className="hidden sm:inline font-normal">· Puerto Montt</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(10,22,46,0.94)',
          ink: C.celeste,
          line: C.lineD,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      <div className="evpm-page">
        {/* ── 1 · Hero: el pulso que se dibuja y termina en huella ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(720px 480px at 85% -8%, rgba(30,79,163,0.55), transparent 65%), radial-gradient(520px 420px at -8% 108%, rgba(217,38,46,0.16), transparent 62%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[144px] pb-12 md:pb-16 grid lg:grid-cols-[1.06fr_0.94fr] gap-9 lg:gap-14 items-center">
            <div>
              <p
                className={`${mono.className} evpm-fade flex items-center gap-2.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] md:tracking-[0.28em]`}
                style={{ color: C.celesteTxt, animationDelay: '0.1s' }}
              >
                <Paw className="w-3.5 h-3.5 shrink-0" color={C.rojo} />
                Atención de emergencias · Puerto Montt
              </p>

              {/* la línea de ECG: dos latidos y termina en huella */}
              <div className="mt-5 md:mt-7" aria-hidden="true">
                <svg viewBox="0 0 640 88" className="block w-full max-w-[560px] h-auto">
                  <path
                    className="evpm-ecg"
                    d="M0 48 H96 C104 48 106 40 113 40 C120 40 122 48 129 48 H168 L174 53 L182 14 L190 58 L197 48 H222 C230 48 233 42 240 42 C247 42 249 48 256 48 H352 L358 53 L366 14 L374 58 L381 48 H406 C414 48 417 42 424 42 C431 42 433 48 440 48 H560"
                    stroke={C.celesteMed}
                    strokeWidth="2.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={100}
                  />
                  <g transform="translate(576 24) scale(2)">
                    <g className="evpm-paw">
                      <ellipse cx="7" cy="8" rx="2" ry="2.6" fill={C.rojo} />
                      <ellipse cx="17" cy="8" rx="2" ry="2.6" fill={C.rojo} />
                      <ellipse cx="4" cy="12.5" rx="1.7" ry="2.2" fill={C.rojo} />
                      <ellipse cx="20" cy="12.5" rx="1.7" ry="2.2" fill={C.rojo} />
                      <path
                        d="M12 11c3.2 0 6 2.6 6 5.4 0 1.9-1.4 3-3 3-1 0-2-.5-3-.5s-2 .5-3 .5c-1.6 0-3-1.1-3-3 0-2.8 2.8-5.4 6-5.4Z"
                        fill={C.rojo}
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <h1
                className={`${display.className} mt-5 md:mt-6 font-medium leading-[1.03] tracking-[-0.015em] text-[clamp(2.4rem,8.6vw,4.5rem)] text-white`}
              >
                <span className="block overflow-hidden">
                  <span className="evpm-line block" style={{ animationDelay: '0.55s' }}>
                    Cuando tu mascota
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="evpm-line block" style={{ animationDelay: '0.68s' }}>
                    te necesita,
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="evpm-line block" style={{ animationDelay: '0.81s', color: C.celesteMed }}>
                    estamos aquí.
                  </span>
                </span>
              </h1>

              <p
                className="evpm-fade mt-5 max-w-md text-[15px] md:text-lg leading-relaxed"
                style={{ color: C.mutedD, animationDelay: '1s' }}
              >
                Urgencias, consultas, vacunas, exámenes y hospitalización para
                perros, gatos y exóticos en {BIZ.address}.
              </p>

              <div className="evpm-fade mt-7 flex flex-wrap gap-3" style={{ animationDelay: '1.15s' }}>
                <Btn href={WA_LINK} tone="rojo">
                  Escríbenos por WhatsApp
                </Btn>
                <Btn href={`tel:${BIZ.phoneTel}`} tone="lineNoche">
                  Llamar
                </Btn>
                <Btn href={BIZ.reserva} tone="lineNoche">
                  Reservar hora online
                </Btn>
              </div>

              <div className="evpm-fade mt-6 flex items-center gap-2.5" style={{ animationDelay: '1.3s' }}>
                <span
                  className="evpm-beat inline-block h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: C.rojo }}
                  aria-hidden="true"
                />
                <HorarioHoy
                  className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.2em]`}
                  style={{ color: C.celesteMed }}
                />
              </div>
            </div>

            {/* la casa del techo rojo y azul, con su logo pintado */}
            <figure className="relative mx-auto w-full max-w-[400px] lg:max-w-none">
              <div style={{ transform: 'rotate(1.4deg)' }}>
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ border: `1px solid ${C.lineD}`, boxShadow: '0 24px 60px rgba(0,0,0,0.38)' }}
                >
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="La casa de Emergencias Veterinarias en Sargento Silva: fachada blanca con pilares y techo rojo y azul, y su logo de la estrella de la vida pintado en el muro"
                    width={1200}
                    height={1600}
                    priority
                    sizes="(min-width: 1024px) 460px, 92vw"
                    className="evpm-foto block h-auto w-full"
                  />
                </div>
                <div
                  className="evpm-fade absolute -top-4 -left-3 rounded-xl px-2.5 py-1.5 shadow-lg"
                  style={{ backgroundColor: '#FFFFFF', animationDelay: '1.4s' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                  <img src={`${IMG}/logo.webp`} alt="" width={319} height={180} className="block w-[76px] h-auto" aria-hidden="true" />
                </div>
              </div>
              <figcaption
                className={`${mono.className} mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.26em]`}
                style={{ color: 'rgba(233,242,252,0.6)' }}
              >
                Sargento Silva 1709 · la casa del techo rojo y azul
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── 2 · Barra de urgencia: dos llamadas directas ── */}
        <section aria-label="Si es urgencia, llama directo" style={{ backgroundColor: C.celeste }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 md:py-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <div className="flex items-center gap-3 lg:flex-1">
              <span className="evpm-beat inline-block h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
              <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.ink }}>
                Si es urgencia, llama directo
              </p>
              <HorarioHoy
                className={`${mono.className} hidden lg:inline ml-auto text-[11px] uppercase tracking-[0.18em]`}
                style={{ color: C.muted }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="evpm-btn flex items-center justify-center gap-2.5 rounded-xl px-4 py-2.5 tap-44"
                style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.16em]`} style={{ color: C.celesteMed }}>
                  Celular
                </span>
                <span className="text-base font-bold tracking-wide">{BIZ.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${BIZ.fijoTel}`}
                className="evpm-btn flex items-center justify-center gap-2.5 rounded-xl px-4 py-2.5 tap-44"
                style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.azul}`, color: C.azul }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.azul} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Fijo
                </span>
                <span className="text-base font-bold tracking-wide">{BIZ.fijoDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 3 · Servicios: la lista de triage ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <Rotulo color={C.azul}>Servicios</Rotulo>
                <h2
                  className={`${display.className} mt-4 font-medium leading-[1.05] tracking-[-0.015em] text-[clamp(2.1rem,6vw,3.8rem)]`}
                >
                  De la urgencia a la prevención,{' '}
                  <span style={{ color: C.azul }}>todo en la misma casa.</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Atendemos perros, gatos y exóticos. Si es urgencia entra
                  primero: la lista está ordenada como en la clínica.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Btn href={BIZ.reserva} tone="azul">
                    Reservar hora online
                  </Btn>
                  <Btn href={WA_LINK} tone="lineAzul">
                    Consultar por WhatsApp
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div>
              {GRUPOS.map((g, gi) => (
                <section key={g.tag} className="border-t-2 first:border-t-0 first:pt-0 pt-6 pb-6" style={{ borderColor: C.lineL }}>
                  <Reveal delay={gi * 60}>
                    <header className="flex items-baseline gap-3">
                      <span className={`${mono.className} text-[11px] font-semibold tracking-[0.2em]`} style={{ color: g.accent }}>
                        {g.tag}
                      </span>
                      <Icon name={g.icon} color={g.accent} className="w-[18px] h-[18px] translate-y-[2px]" />
                      <h3 className={`${display.className} text-xl md:text-2xl font-semibold tracking-[-0.01em]`}>
                        {g.name}
                      </h3>
                    </header>
                  </Reveal>
                  <ul className="mt-3.5">
                    {g.items.map(([name, nota], i) => (
                      <Reveal key={name} delay={gi * 60 + i * 55}>
                        <li className="flex gap-3 py-2.5">
                          <Tick color={g.accent} />
                          <div>
                            <p className="text-[15px] md:text-base font-semibold leading-snug">{name}</p>
                            {nota && (
                              <p className={`${mono.className} mt-1 text-[11px] leading-relaxed tracking-[0.02em]`} style={{ color: C.muted }}>
                                {nota}
                              </p>
                            )}
                          </div>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4 · Exóticos ── */}
        <section id="exoticos" className="scroll-mt-20" style={{ backgroundColor: C.celeste, color: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <figure className="relative mx-auto w-[74%] max-w-[300px] lg:w-full lg:max-w-[380px]">
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-3 h-full w-full rounded-[26px]"
                  style={{ border: `1.5px solid ${C.azul}` }}
                />
                <div className="relative overflow-hidden rounded-[26px]" style={{ boxShadow: '0 18px 44px rgba(14,29,58,0.16)' }}>
                  <Image
                    src={`${IMG}/conejo.webp`}
                    alt="Un conejo café recuperándose sobre una toalla blanca, junto a flores de trébol"
                    width={640}
                    height={1136}
                    sizes="(min-width: 1024px) 380px, 74vw"
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption
                  className={`${mono.className} mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em]`}
                  style={{ color: C.muted }}
                >
                  Paciente exótico recuperándose
                </figcaption>
              </figure>
            </Reveal>
            <div>
              <Reveal>
                <Rotulo color={C.rojoInk}>Exóticos</Rotulo>
                <h2
                  className={`${display.className} mt-4 font-medium leading-[1.05] tracking-[-0.015em] text-[clamp(2.1rem,6vw,3.8rem)]`}
                >
                  Conejos, cuyes, ratas y tortugas{' '}
                  <span style={{ color: C.azul }}>también tienen su vet.</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                  La consulta de exóticos tiene día y hora sujetos a
                  disponibilidad: confirma por WhatsApp antes de ir.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {['Conejos', 'Cuyes', 'Ratas', 'Tortugas'].map((a) => (
                    <li
                      key={a}
                      className={`${mono.className} flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em]`}
                      style={{ border: `1.5px solid ${C.azul}`, color: C.azul, backgroundColor: 'rgba(255,255,255,0.55)' }}
                    >
                      <Paw className="w-3 h-3" color={C.rojo} />
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={170}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Btn href={WA_LINK} tone="rojo">
                    Confirmar hora por WhatsApp
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5 · La clínica por dentro ── */}
        <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.azul}>La clínica</Rotulo>
              <div className="mt-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-12 items-end">
                <h2
                  className={`${display.className} font-medium leading-[1.05] tracking-[-0.015em] text-[clamp(2.1rem,6vw,3.8rem)] max-w-2xl`}
                >
                  Una casa equipada para atender{' '}
                  <span style={{ color: C.rojo }}>cuando más se necesita.</span>
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                  Box de atención, balanza, recepción y petshop: todo dentro de
                  la misma casa de Sargento Silva.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 md:mt-14 grid md:grid-cols-[1.35fr_1fr] gap-5">
              <Reveal>
                <Placa
                  src={`${IMG}/box-atencion.webp`}
                  alt="Box de atención con muralla celeste, mesa de examen blanca y balanza de pie"
                  ratio="aspect-[4/3]"
                  label="Box de atención"
                  dark={false}
                  sizes="(min-width: 768px) 56vw, 92vw"
                />
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
                <Reveal delay={90}>
                  <Placa
                    src={`${IMG}/recepcion.webp`}
                    alt="Recepción de la clínica con mesón de madera y el rótulo Veterinario en la pared"
                    ratio="aspect-[4/3] md:aspect-[16/9]"
                    label="Recepción"
                    dark={false}
                    sizes="(min-width: 768px) 42vw, 45vw"
                  />
                </Reveal>
                <Reveal delay={160}>
                  <Placa
                    src={`${IMG}/veterinaria-perro.webp`}
                    alt="Profesional de la clínica atendiendo a un perro en el suelo, tomándole la temperatura"
                    ratio="aspect-[4/3] md:aspect-[16/9]"
                    label="Atención con cariño"
                    dark={false}
                    sizes="(min-width: 768px) 42vw, 45vw"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Pacientes regalones ── */}
        <section style={{ backgroundColor: C.noche }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.celesteTxt}>Pacientes regalones</Rotulo>
              <div className="mt-4 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-12 items-end">
                <h2
                  className={`${display.className} font-medium leading-[1.08] tracking-[-0.015em] text-[clamp(2rem,6.4vw,3.9rem)] max-w-2xl text-white`}
                >
                  «Pacientes regalones retomando el apetito.»
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                  Así cuentan los días de clínica en su Instagram: pacientes
                  que llegan malitos y vuelven a la casa recuperándose.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 items-start">
              <Reveal className="col-span-2 md:col-span-1">
                <Placa
                  src={`${IMG}/gato-paciente.webp`}
                  alt="Gata tricolor con collar azul dentro de su transportadora, mirando hacia arriba"
                  ratio="aspect-[4/3]"
                  label="De control"
                  sizes="(min-width: 768px) 33vw, 92vw"
                />
              </Reveal>
              <Reveal delay={90} className="md:translate-y-8">
                <Placa
                  src={`${IMG}/gata.webp`}
                  alt="Gata tricolor descansando sobre una manta de peluche en colores pastel"
                  ratio="aspect-square"
                  label="Regalona"
                  sizes="(min-width: 768px) 33vw, 45vw"
                />
              </Reveal>
              <Reveal delay={160}>
                <Placa
                  src={`${IMG}/perro-paciente.webp`}
                  alt="Perro negro con arnés rojo y una patita vendada, de pie en el box de la clínica"
                  ratio="aspect-square"
                  label="En recuperación"
                  sizes="(min-width: 768px) 33vw, 45vw"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 7 · Petshop ── */}
        <section style={{ backgroundColor: C.paper, color: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.azul}>Petshop</Rotulo>
                <h2
                  className={`${display.className} mt-4 font-medium leading-[1.05] tracking-[-0.015em] text-[clamp(2.1rem,6vw,3.8rem)]`}
                >
                  Alimentos y accesorios,{' '}
                  <span style={{ color: C.azul }}>sin salir de la clínica.</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Al terminar la consulta puedes llevarte su alimento y lo que
                  necesite: el petshop está dentro de la misma casa.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Btn href={WA_LINK} tone="azul">
                    Consultar el petshop
                  </Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="relative">
                <Placa
                  src={`${IMG}/alimentos.webp`}
                  alt="Estantes blancos del petshop con sacos de alimento para perros y gatos"
                  ratio="aspect-[4/3]"
                  label="Alimentos"
                  dark={false}
                  sizes="(min-width: 1024px) 45vw, 92vw"
                />
                <figure
                  className="absolute -bottom-8 -right-3 md:-right-6 w-[38%] max-w-[170px] overflow-hidden rounded-xl"
                  style={{ border: `4px solid ${C.paper}`, boxShadow: '0 14px 34px rgba(14,29,58,0.2)', transform: 'rotate(2.5deg)' }}
                >
                  <Image
                    src={`${IMG}/petshop.webp`}
                    alt="Interior del petshop con su pendón de Emergencias Veterinarias"
                    width={720}
                    height={960}
                    sizes="170px"
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </figure>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8 · Lo que dicen las familias ── */}
        <section style={{ backgroundColor: C.celeste, color: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.rojoInk}>Lo que dicen las familias</Rotulo>
            </Reveal>
            <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <Reveal>
                <figure>
                  <Paw className="w-6 h-6 mb-4" color={C.rojo} />
                  <blockquote
                    className={`${display.className} font-medium leading-[1.16] tracking-[-0.01em] text-[clamp(1.5rem,4.4vw,2.3rem)]`}
                  >
                    «{OPINIONES[0].text}»
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                    {OPINIONES[0].author} · opinión en Google
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <figure
                  className="rounded-2xl p-6 md:p-7"
                  style={{ backgroundColor: C.paper, border: `1px solid ${C.lineL}` }}
                >
                  <Paw className="w-5 h-5 mb-4" color={C.azul} />
                  <blockquote className="text-[15px] md:text-base leading-relaxed font-medium">
                    «{OPINIONES[1].text}»
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                    {OPINIONES[1].author} · opinión en Google
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 9 · Dónde estamos ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.azul}>Dónde estamos</Rotulo>
              <h2
                className={`${display.className} mt-4 font-medium leading-[1.05] tracking-[-0.015em] text-[clamp(2.1rem,6vw,3.8rem)] max-w-3xl`}
              >
                La casa del techo rojo y azul,{' '}
                <span style={{ color: C.azul }}>en Sargento Silva.</span>
              </h2>
            </Reveal>
            <div className="mt-10 md:mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <address className="not-italic">
                  <p className={`${display.className} text-2xl md:text-3xl font-semibold leading-snug`}>
                    {BIZ.address}
                  </p>
                  <p className="mt-1.5 text-[15px] md:text-base" style={{ color: C.muted }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                </address>
                <ul className="mt-7 max-w-md">
                  {HORARIO.map((h) => (
                    <li
                      key={h.dias}
                      className="flex items-baseline justify-between gap-4 border-t py-3 text-sm md:text-[15px]"
                      style={{ borderColor: C.lineL }}
                    >
                      <span className="font-semibold">{h.dias}</span>
                      <span style={{ color: C.muted }}>{h.horas}</span>
                    </li>
                  ))}
                  <li className="border-t" style={{ borderColor: C.lineL }} aria-hidden="true" />
                </ul>
                <div className="mt-7 flex flex-col gap-2 text-base">
                  <a href={`tel:${BIZ.phoneTel}`} className="font-bold tap-44v" style={{ color: C.azul }}>
                    {BIZ.phoneDisplay}
                  </a>
                  <a href={`tel:${BIZ.fijoTel}`} className="font-bold tap-44v" style={{ color: C.azul }}>
                    {BIZ.fijoDisplay}
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn href={WA_LINK} tone="rojo">
                    Escríbenos por WhatsApp
                  </Btn>
                  <Btn href={MAPS_URL} tone="lineAzul">
                    Cómo llegar
                  </Btn>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid gap-5">
                  <div
                    className="relative w-full overflow-hidden rounded-2xl min-h-[300px] aspect-[4/3]"
                    style={{ border: `1px solid ${C.lineL}` }}
                  >
                    <LazyMap
                      title={`Mapa: ${BIZ.name}`}
                      src={MAPS_EMBED}
                      className="absolute inset-0 block h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <figure className="relative w-[62%] max-w-[240px] ml-auto">
                    <div className="overflow-hidden rounded-xl" style={{ border: `1px solid ${C.lineL}`, transform: 'rotate(1.6deg)' }}>
                      <Image
                        src={`${IMG}/fachada.webp`}
                        alt="La fachada de la clínica vista desde la calle: así se reconoce la casa desde Sargento Silva"
                        width={1200}
                        height={1600}
                        sizes="240px"
                        loading="lazy"
                        className="block h-auto w-full"
                      />
                    </div>
                    <figcaption
                      className={`${mono.className} mt-3 text-right text-[10px] font-semibold uppercase tracking-[0.2em]`}
                      style={{ color: C.muted }}
                    >
                      Así se ve desde la calle
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 10 · Cierre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.nocheDeep }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(640px 420px at 50% 0%, rgba(30,79,163,0.5), transparent 68%)',
            }}
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <div className="flex justify-center">
                <Paw className="w-7 h-7" color={C.rojo} />
              </div>
              <h2
                className={`${display.className} mt-5 font-medium leading-[1.05] tracking-[-0.015em] text-[clamp(2.3rem,7.4vw,4.4rem)] text-white`}
              >
                Tu mascota es{' '}
                <span style={{ color: C.celesteMed }}>nuestra prioridad.</span>
              </h2>
              <p className="mt-5 max-w-md mx-auto text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
                «La salud de tu mascota es reflejo de tu amor por ella.»
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Btn href={WA_LINK} tone="rojo">
                  Escríbenos por WhatsApp
                </Btn>
                <Btn href={BIZ.reserva} tone="lineNoche">
                  Reservar hora online
                </Btn>
              </div>
              <p className={`${mono.className} mt-7 text-[11px] font-semibold uppercase tracking-[0.2em]`} style={{ color: 'rgba(233,242,252,0.6)' }}>
                {BIZ.phoneDisplay} · {BIZ.fijoDisplay} · {BIZ.address}, {BIZ.city}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 11 · Footer compacto ── */}
        <footer style={{ backgroundColor: C.nocheDeep, color: C.celeste }}>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                  <img src={`${IMG}/logo.webp`} alt="" width={319} height={180} className="block w-[120px] h-auto rounded-md" aria-hidden="true" />
                  <div>
                    <p className={`${display.className} text-lg md:text-xl font-semibold leading-tight text-white`}>
                      Emergencias Veterinarias
                      <span className="block text-sm font-normal" style={{ color: C.celesteTxt }}>
                        Puerto Montt
                      </span>
                    </p>
                    <p className="text-sm mt-1" style={{ color: C.mutedD }}>
                      {BIZ.address} · {BIZ.phoneDisplay}
                    </p>
                  </div>
                </div>
                <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm" aria-label="Pie">
                  {NAV_LINKS.map((l) => (
                    <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(233,242,252,0.85)' }}>
                      {l.label}
                    </a>
                  ))}
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center"
                    style={{ color: 'rgba(233,242,252,0.85)' }}
                  >
                    Instagram
                  </a>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center font-semibold"
                    style={{ color: C.celesteMed }}
                  >
                    WhatsApp
                  </a>
                </nav>
              </div>
              <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(233,242,252,0.62)' }}>
                  Sitio de ejemplo preparado por{' '}
                  <a
                    href={SITE.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 tap-44"
                    style={{ color: C.celeste }}
                  >
                    {SITE.name}
                  </a>{' '}
                  para {BIZ.name}.{' '}
                  <a
                    href={whatsappLink('contacto')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 tap-44"
                    style={{ color: C.celesteMed }}
                  >
                    ¿Lo hacemos realidad?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
