import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_URGENTE, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})

// Del logo y el afiche: grafito de fondo, el azul CVM como acento,
// plata para líneas y detalles, hueso frío para las zonas claras.
const C = {
  grafito: '#0B0E14',
  grafito2: '#12161F',
  azul: '#1F6BFF',
  azulLuz: '#6B9BFF',
  azulDeep: '#1450C8',
  plata: '#C9CED6',
  blanco: '#FFFFFF',
  hueso: '#EEF1F5',
  mutedD: 'rgba(238,241,245,0.74)',
  mutedD2: 'rgba(238,241,245,0.55)',
  mutedL: 'rgba(11,14,20,0.70)',
  lineD: 'rgba(201,206,214,0.18)',
  lineL: 'rgba(11,14,20,0.16)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cvm-mecanicos-a-domicilio-osorno',
  title: 'CVM Mecánicos a Domicilio · Mecánica y diagnóstico en Osorno',
  description:
    'Mecánica y diagnóstico automotriz en Gómez Carreño 2464, Osorno. Atención a domicilio en toda la región de Los Lagos y asistencia en ruta. Consulta por WhatsApp.',
  image: `${IMG}/mercedes.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Taller y terreno', href: '#terreno' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    icon: 'scan',
    titulo: 'Diagnóstico avanzado',
    texto:
      'Escaneo electrónico con tecnología profesional para detectar y solucionar fallas con precisión.',
    tag: 'Escáner electrónico',
  },
  {
    n: '02',
    icon: 'wrench',
    titulo: 'Mantención y reparación',
    texto:
      'Servicio integral para todo tipo de vehículos, con repuestos de calidad y garantía.',
    tag: 'Diésel y bencineros',
  },
  {
    n: '03',
    icon: 'box',
    titulo: 'Venta de repuestos',
    texto:
      'Repuestos originales y alternativos para diversas marcas y modelos.',
    tag: 'Originales y alternativos',
  },
] as const

const SELLOS = ['Trabajo garantizado', 'Equipos de última generación', 'Atención personalizada']

const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:00–13:00 · 15:00–18:00' },
  { dias: 'Sábado', horas: '10:00–14:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
]

const CITAS = [
  {
    texto:
      'Excelentes profesionales. Vengo de otra ciudad y la calidad del servicio super buena. Desde la presentación personal, hasta la explicación, y revisión técnica.',
    autor: 'Jonathan Jeremy Ule Caimapo',
  },
  {
    texto:
      'Super buen servicio, responsable el equipo de CVM recomendadisimo, el otro dia llegue con el auto ponchado y me lo tenia listo en un ratito.',
    autor: 'Bastian Hoffmann',
  },
]

/* ── Motivo: el engranaje de dentado fino ── */
function Gear({
  className = '',
  color = 'currentColor',
  teeth = 14,
  strokeWidth = 3,
}: {
  className?: string
  color?: string
  teeth?: number
  strokeWidth?: number
}) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth={strokeWidth}>
        {Array.from({ length: teeth }, (_, i) => (i * 360) / teeth).map((a) => (
          <rect key={a} x="-2.5" y="-49" width="5" height="10" transform={`rotate(${a})`} />
        ))}
        <circle r="40" />
        <circle r="26" />
        {[0, 72, 144, 216, 288].map((a) => (
          <line key={a} x1="0" y1="-26" x2="0" y2="-40" transform={`rotate(${a})`} />
        ))}
        <circle r="9" />
      </g>
    </svg>
  )
}

/* ── Motivo: la línea de diagnóstico (trazo con pulso) ── */
function Pulso({ className = 'w-8 h-[10px]', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 12" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 6 h10 l3 -4 4 8 3 -4 h18" />
    </svg>
  )
}

/* ── Rótulo: pulso + mayúsculas espaciadas + línea ── */
function Rotulo({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${body.className} flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-5`}
      style={{ color: dark ? C.plata : C.mutedL }}
    >
      <Pulso color={dark ? C.azulLuz : C.azulDeep} />
      <span className="shrink-0">{children}</span>
      <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/* ── Esquinas de mira (HUD de escaneo) para marcos ── */
function Esquinas({ color = C.azul }: { color?: string }) {
  const base = 'absolute w-3.5 h-3.5 pointer-events-none z-10'
  return (
    <>
      <span className={`${base} top-0 left-0 border-t-2 border-l-2`} style={{ borderColor: color }} aria-hidden="true" />
      <span className={`${base} top-0 right-0 border-t-2 border-r-2`} style={{ borderColor: color }} aria-hidden="true" />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2`} style={{ borderColor: color }} aria-hidden="true" />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2`} style={{ borderColor: color }} aria-hidden="true" />
    </>
  )
}

/* ── Iconos de servicio, trazo único ── */
function Icono({ name, className = 'w-7 h-7', color = 'currentColor' }: { name: string; className?: string; color?: string }) {
  const p = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} {...p} aria-hidden="true">
      {name === 'scan' && (
        <>
          <rect x="2.5" y="4" width="19" height="13" rx="1.8" />
          <path d="M8.5 21h7M12 17v4" />
          <path d="M6 10.5h2.4l1.3-2.4 2.1 4.8 1.4-2.4H18" />
        </>
      )}
      {name === 'wrench' && (
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 8l-6.9 6.9a2.12 2.12 0 0 1-3-3l6.9-6.9a6 6 0 0 1 8-8l-3.8 3.8z" />
      )}
      {name === 'box' && (
        <>
          <path d="M21 8.2 12 3.5 3 8.2v7.6l9 4.7 9-4.7z" />
          <path d="M3.3 8.4 12 13l8.7-4.6M12 13v7.5" />
        </>
      )}
    </svg>
  )
}

const FOTOS = [
  {
    src: `${IMG}/tractor.webp`,
    alt: 'Tractor desarmado dentro de un galpón, atendido en terreno por CVM',
    pie: 'Atención en terreno',
    cls: 'col-span-6 md:col-span-6 aspect-[16/10]',
  },
  {
    src: `${IMG}/motor.webp`,
    alt: 'Motor armado sobre soporte dentro del taller de CVM',
    pie: 'Motor en el taller',
    cls: 'col-span-3 md:col-span-3 md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full',
  },
  {
    src: `${IMG}/motor-2.webp`,
    alt: 'Motor a la vista en el vano de un vehículo en el taller',
    pie: 'Vano del motor',
    cls: 'col-span-3 md:col-span-3 aspect-[3/4] md:mt-10',
  },
  {
    src: `${IMG}/motor-tractor.webp`,
    alt: 'Tractor con el motor expuesto dentro de un taller',
    pie: 'Maquinaria en el taller',
    cls: 'col-span-6 md:col-span-3 aspect-[16/10] md:aspect-auto md:h-full',
  },
]

export default function CvmMecanicosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.hueso, color: C.grafito }}
    >
      <style>{`
        /* ── Diagnóstico en curso: coreografía de la primera vista ──
           Un engranaje grande gira lento detrás del hero; la foto se
           revela por franjas de arriba abajo tras una barra azul de
           escaneo; sobre la línea se encienden puntos de lectura; el
           titular entra por palabras y el sello cae al final. */
        @keyframes cv-giro { to { transform: rotate(360deg) } }
        .cv-giro { animation: cv-giro 90s linear infinite; transform-origin: center }

        @keyframes cv-reveal { from { clip-path: inset(0 0 100% 0) } to { clip-path: inset(0 0 0 0) } }
        .cv-hero-foto { animation: cv-reveal 1.7s cubic-bezier(.5,.05,.3,1) .3s both }

        @keyframes cv-scan {
          0% { transform: translateY(-8px); opacity: 0 }
          8% { opacity: 1 }
          88% { opacity: 1 }
          100% { transform: translateY(104svh); opacity: 0 }
        }
        .cv-scan { animation: cv-scan 1.7s cubic-bezier(.5,.05,.3,1) .3s both }

        @keyframes cv-punto {
          0% { opacity: 0; transform: scale(.3) }
          45% { opacity: 1; transform: scale(1.3) }
          100% { opacity: 1; transform: scale(1) }
        }
        .cv-punto { opacity: 0; animation: cv-punto .45s ease-out both }

        @keyframes cv-pal { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .cv-pal { animation: cv-pal .85s cubic-bezier(.22,.61,.2,1) both }

        @keyframes cv-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .cv-fade { opacity: 0; animation: cv-fade .85s ease-out both }

        @keyframes cv-sello {
          0% { opacity: 0; transform: translateY(-30px) rotate(8deg) scale(1.07) }
          62% { opacity: 1; transform: translateY(3px) rotate(-5deg) scale(.98) }
          100% { opacity: 1; transform: translateY(0) rotate(-4deg) scale(1) }
        }
        .cv-sello { opacity: 0; animation: cv-sello .75s cubic-bezier(.3,.9,.3,1) 2.15s both }

        /* ── Tablero de servicios: módulos que se encienden uno a uno
           y la línea azul que se dibuja. Entradas por scroll con
           animation-timeline donde hay soporte; sin soporte, todo
           queda visible desde el principio. */
        @supports (animation-timeline: view()) {
          .cv-mod {
            opacity: 0; transform: translateY(24px);
            animation: cv-mod-in linear both;
            animation-timeline: view(); animation-range: entry 5% entry 55%;
          }
          @keyframes cv-mod-in { to { opacity: 1; transform: none } }
          .cv-trace {
            stroke-dasharray: 1; stroke-dashoffset: 1;
            animation: cv-draw linear both;
            animation-timeline: view(); animation-range: entry 15% entry 75%;
          }
          @keyframes cv-draw { to { stroke-dashoffset: 0 } }
          .cv-nodo {
            opacity: 0; transform: scale(.3);
            animation: cv-punto .5s ease-out both;
            animation-timeline: view(); animation-range: entry 10% entry 45%;
          }
          .cv-wipe {
            clip-path: inset(0 0 100% 0);
            animation: cv-reveal linear both;
            animation-timeline: view(); animation-range: entry 5% entry 65%;
          }
        }

        .cv-btn { transition: transform .18s ease, filter .18s ease }
        .cv-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .cv-btn:active { transform: scale(.97) }
        .cv-link { transition: text-decoration-color .2s ease, color .2s ease }
        .cv-link:hover { text-decoration-color: currentColor }
        a:focus-visible, button:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .cv-giro, .cv-hero-foto, .cv-scan, .cv-punto, .cv-pal, .cv-fade, .cv-sello,
          .cv-mod, .cv-trace, .cv-nodo, .cv-wipe { animation: none !important }
          .cv-scan { display: none }
          .cv-hero-foto, .cv-punto, .cv-pal, .cv-fade, .cv-sello,
          .cv-mod, .cv-nodo { opacity: 1 !important; transform: none !important }
          .cv-trace { stroke-dashoffset: 0 !important }
          .cv-wipe { clip-path: none !important }
        }
      `}</style>

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
        style={{ backgroundColor: C.azul, color: C.blanco }}
      >
        Saltar al contenido
      </a>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2 min-w-0">
            <span className="font-semibold uppercase tracking-[0.06em] text-lg md:text-xl">CVM</span>
            <span
              className="hidden sm:inline text-[9px] font-bold uppercase tracking-[0.24em]"
              style={{ color: C.plata }}
            >
              Mecánica a domicilio
            </span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Consultar"
        theme={{
          over: 'dark',
          bar: 'rgba(11,14,20,0.94)',
          ink: C.hueso,
          line: C.lineD,
          btnBg: C.azul,
          btnInk: C.blanco,
        }}
      />

      <main id="contenido">
        {/* ══ 1 · Hero: el escaneo del vehículo ══ */}
        <section
          id="inicio"
          className="relative min-h-svh flex flex-col justify-end overflow-hidden"
          style={{ backgroundColor: C.grafito }}
        >
          {/* foto que se revela tras la línea de escaneo */}
          <div className="cv-hero-foto absolute inset-0">
            <Image
              src={`${IMG}/mercedes.webp`}
              alt="Camioneta Mercedes con el capó abierto dentro del taller de CVM en Osorno"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: '50% 42%' }}
            />
            {/* trama de líneas de lectura y velo para el texto */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(31,107,255,0.05) 0 1px, transparent 1px 5px)' }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(11,14,20,0.68) 0%, rgba(11,14,20,0.34) 38%, rgba(11,14,20,0.60) 66%, rgba(11,14,20,0.92) 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* la barra azul de escaneo baja una vez por el hero */}
          <span
            className="cv-scan absolute top-0 inset-x-0 h-[3px] pointer-events-none z-10"
            style={{
              backgroundColor: C.azul,
              boxShadow: '0 0 18px 3px rgba(31,107,255,0.55), 0 -14px 34px 6px rgba(31,107,255,0.22)',
            }}
            aria-hidden="true"
          />

          {/* puntos de lectura que se encienden al paso de la línea */}
          {[
            { top: '19%', left: 14, d: '0.62s' },
            { top: '38%', right: 14, d: '0.95s' },
            { top: '58%', left: 14, d: '1.29s' },
            { top: '77%', right: 14, d: '1.61s' },
          ].map((p, i) => (
            <span
              key={i}
              className="cv-punto absolute z-10 flex items-center gap-1.5 pointer-events-none"
              style={{ top: p.top, left: p.left, right: p.right, animationDelay: p.d }}
              aria-hidden="true"
            >
              {p.left === undefined && (
                <span className="h-px w-4" style={{ backgroundColor: 'rgba(31,107,255,0.7)' }} />
              )}
              <span
                className="block w-2 h-2 rounded-full"
                style={{ backgroundColor: C.azul, boxShadow: `0 0 0 3px rgba(31,107,255,0.28), 0 0 10px 2px rgba(31,107,255,0.6)` }}
              />
              {p.left !== undefined && (
                <span className="h-px w-4" style={{ backgroundColor: 'rgba(31,107,255,0.7)' }} />
              )}
            </span>
          ))}

          {/* mira HUD en las esquinas del viewport */}
          <div className="absolute inset-4 md:inset-6 pointer-events-none z-10" aria-hidden="true">
            <Esquinas color="rgba(201,206,214,0.4)" />
          </div>

          {/* engranaje grande, giro lento detrás del contenido */}
          <Gear
            className="cv-giro absolute -right-24 top-[6%] w-[300px] h-[300px] md:-right-16 md:top-[8%] md:w-[520px] md:h-[520px] pointer-events-none z-10"
            color="rgba(201,206,214,0.13)"
            strokeWidth={2.4}
          />
          <Gear
            className="cv-giro absolute -left-28 bottom-[30%] w-[220px] h-[220px] pointer-events-none z-10 hidden md:block"
            color="rgba(201,206,214,0.09)"
            strokeWidth={2.4}
          />

          {/* contenido del hero */}
          <div className="relative z-20 w-full max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-9 md:pb-14">
            <p
              className="cv-fade flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6"
              style={{ color: C.plata, animationDelay: '0.6s' }}
            >
              <Pulso color={C.azulLuz} />
              {BIZ.address} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} font-semibold uppercase leading-[0.98] tracking-[0.005em] text-[clamp(2.9rem,12.5vw,6rem)]`}
              style={{ color: C.blanco }}
            >
              {[
                { t: 'Diagnóstico', d: '0.5s', c: C.blanco },
                { t: 'profesional,', d: '0.68s', c: C.blanco },
                { t: 'donde tú estés.', d: '0.86s', c: C.azulLuz },
              ].map((w) => (
                <span key={w.t} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                  <span className="cv-pal block" style={{ animationDelay: w.d, color: w.c }}>
                    {w.t}
                  </span>
                </span>
              ))}
            </h1>
            <p
              className="cv-fade mt-5 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.mutedD, animationDelay: '1.15s' }}
            >
              Mecánica y diagnóstico automotriz con atención a domicilio
              en toda la región de Los Lagos.
            </p>
            <div className="cv-fade mt-7 flex flex-wrap gap-3" style={{ animationDelay: '1.35s' }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} cv-btn inline-flex items-center gap-2.5 uppercase tracking-[0.05em] text-sm md:text-base font-semibold px-7 py-3 tap-44`}
                style={{ backgroundColor: C.azul, color: C.blanco }}
              >
                Consulta por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} cv-btn inline-flex items-center uppercase tracking-[0.05em] text-sm md:text-base font-semibold px-7 py-3 border-2 tap-44`}
                style={{ borderColor: 'rgba(201,206,214,0.5)', color: C.hueso }}
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* sello que cae al final del escaneo */}
          <div className="cv-sello absolute z-20 right-5 md:right-10 bottom-[104px] md:bottom-[112px] pointer-events-none">
            <span
              className={`${display.className} flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.14em]`}
              style={{
                backgroundColor: 'rgba(11,14,20,0.9)',
                color: C.blanco,
                border: `2px solid ${C.azul}`,
                boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={C.azulLuz} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12.5 9.5 18 20 6.5" />
              </svg>
              Diagnóstico listo
            </span>
          </div>

          {/* barra de datos al pie del hero */}
          <div
            className="relative z-20 border-t"
            style={{ borderColor: 'rgba(201,206,214,0.2)', backgroundColor: 'rgba(11,14,20,0.72)', backdropFilter: 'blur(6px)' }}
          >
            <div
              className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: C.mutedD }}
            >
              <span>Taller + mecánica a domicilio</span>
              <span>Diésel y bencineros</span>
              <span style={{ color: C.azulLuz }}>Asistencia en ruta</span>
            </div>
          </div>
        </section>

        {/* ══ 2 · El tablero de servicios ══ */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo dark={false}>Servicios del taller</Rotulo>
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5 lg:gap-14 items-end mb-10 md:mb-14">
                <h2
                  className={`${display.className} font-semibold uppercase leading-[1.0] tracking-[0.005em] text-[clamp(2.2rem,7vw,4.4rem)]`}
                  style={{ color: C.grafito }}
                >
                  Experiencia, tecnología
                  <br />
                  <span style={{ color: C.azulDeep }}>y confianza.</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                  El lema que CVM estampa en su afiche. Tres servicios,
                  tal como los publica el taller, que se encienden uno a
                  uno al bajar por el tablero.
                </p>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-4 md:gap-5">
              {SERVICIOS.map((s, i) => (
                <article
                  key={s.n}
                  className={`cv-mod relative overflow-hidden ${i === 0 ? 'lg:col-span-2' : ''}`}
                  style={{
                    backgroundColor: i === 0 ? C.azul : C.blanco,
                    border: `1px solid ${i === 0 ? 'rgba(255,255,255,0.25)' : C.lineL}`,
                    boxShadow: i === 0 ? '0 22px 56px rgba(31,107,255,0.28)' : '0 10px 30px rgba(11,14,20,0.06)',
                  }}
                >
                  {/* trazo de lectura que se dibuja en la entrada */}
                  <svg
                    viewBox="0 0 600 26"
                    preserveAspectRatio="none"
                    className="block w-full h-[26px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 13 h168 l9 -8 10 16 8 -19 10 23 8 -12 h387"
                      pathLength={1}
                      className="cv-trace"
                      fill="none"
                      stroke={i === 0 ? 'rgba(255,255,255,0.9)' : C.azul}
                      strokeWidth="2.5"
                    />
                  </svg>
                  <div className={`px-5 md:px-8 pb-6 md:pb-8 pt-2 ${i === 0 ? 'md:flex md:items-center md:gap-10' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="cv-nodo block w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: i === 0 ? C.blanco : C.azul, boxShadow: i === 0 ? '0 0 0 4px rgba(255,255,255,0.25)' : '0 0 0 4px rgba(31,107,255,0.15)' }}
                        aria-hidden="true"
                      />
                      <span
                        className="text-[11px] font-bold uppercase tracking-[0.28em]"
                        style={{ color: i === 0 ? C.blanco : C.azulDeep }}
                      >
                        {s.n} · {s.tag}
                      </span>
                    </div>
                    <div className={i === 0 ? 'md:flex md:items-center md:gap-8 md:flex-1' : ''}>
                      <Icono
                        name={s.icon}
                        className={`${i === 0 ? 'w-11 h-11 md:w-16 md:h-16' : 'w-8 h-8'} mb-3 md:mb-0 shrink-0`}
                        color={i === 0 ? C.blanco : C.azulDeep}
                      />
                      <div>
                        <h3
                          className={`${display.className} font-semibold uppercase leading-[1.02] ${i === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} mb-2.5`}
                          style={{ color: i === 0 ? C.blanco : C.grafito }}
                        >
                          {s.titulo}
                        </h3>
                        <p
                          className={`${i === 0 ? 'text-base md:text-lg max-w-xl' : 'text-sm md:text-base'} leading-relaxed`}
                          style={{ color: i === 0 ? C.blanco : C.mutedL }}
                        >
                          {s.texto}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* sellos del afiche */}
            <Reveal delay={140}>
              <ul className="mt-8 md:mt-10 flex flex-wrap gap-x-7 gap-y-2.5">
                {SELLOS.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.22em]"
                    style={{ color: C.mutedL }}
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke={C.azulDeep} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 12.5 9.5 18 20 6.5" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ══ 3 · En terreno y en taller: mosaico roto ══ */}
        <section id="terreno" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
          <Gear
            className="cv-giro absolute -left-24 -top-24 w-[300px] h-[300px] pointer-events-none"
            color="rgba(201,206,214,0.07)"
            strokeWidth={2.4}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo>En terreno y en taller</Rotulo>
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5 lg:gap-14 items-end mb-10 md:mb-14">
                <h2
                  className={`${display.className} font-semibold uppercase leading-[1.0] text-[clamp(2.2rem,7vw,4.4rem)]`}
                  style={{ color: C.hueso }}
                >
                  El trabajo, donde
                  <br />
                  <span style={{ color: C.azulLuz }}>quede el vehículo.</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                  Del vano del motor a la maquinaria en galpón: así se
                  ve el trabajo de CVM por dentro, en su taller de
                  Gómez Carreño y fuera de él.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-6 gap-3 md:gap-5">
              {FOTOS.map((f, i) => (
                <figure key={f.src} className={`cv-wipe relative overflow-hidden ${f.cls}`} style={{ border: `1px solid ${C.lineD}` }}>
                  <Image src={f.src} alt={f.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  <figcaption
                    className="absolute left-3 bottom-3 flex items-center gap-2 px-2.5 py-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{ backgroundColor: 'rgba(11,14,20,0.82)', color: C.plata, border: `1px solid ${C.lineD}` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.azul }} aria-hidden="true" />
                    {f.pie}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4 · Banda azul: a domicilio y emergencias ══ */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.azul }}>
          <Gear
            className="cv-giro absolute -right-28 -bottom-28 w-[360px] h-[360px] pointer-events-none"
            color="rgba(255,255,255,0.12)"
            strokeWidth={2.4}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-center">
              <Reveal>
                <p className={`${body.className} flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-5`} style={{ color: C.blanco }}>
                  <Pulso color="rgba(255,255,255,0.9)" />
                  <span className="shrink-0">Cobertura</span>
                  <span className="h-px flex-1" style={{ backgroundColor: 'rgba(255,255,255,0.35)' }} aria-hidden="true" />
                </p>
                <h2
                  className={`${display.className} font-semibold uppercase leading-[0.98] text-[clamp(2.3rem,8vw,5.2rem)]`}
                  style={{ color: C.blanco }}
                >
                  Atención a domicilio
                  <br />
                  en toda la región
                  <br />
                  <span style={{ color: 'rgba(255,255,255,0.72)' }}>de Los Lagos.</span>
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.blanco }}>
                  Si el vehículo no llega al taller, el taller va al
                  vehículo. CVM publica además asistencia en ruta.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div
                  className="relative p-6 md:p-8"
                  style={{ backgroundColor: C.blanco, border: `1px solid rgba(255,255,255,0.4)`, boxShadow: '0 24px 60px rgba(11,14,20,0.3)' }}
                >
                  <Esquinas color={C.azul} />
                  <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] mb-3" style={{ color: C.azulDeep }}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: C.azul }} aria-hidden="true" />
                    Emergencias
                  </p>
                  <a
                    href={WA_LINK_URGENTE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} cv-link block font-semibold uppercase leading-none text-4xl md:text-5xl tap-44`}
                    style={{ color: C.grafito }}
                  >
                    +56 9 3327 1805
                  </a>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: C.mutedL }}>
                    Escríbenos por WhatsApp y coordinamos la asistencia,
                    en el taller o donde estés.
                  </p>
                  <a
                    href={WA_LINK_URGENTE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} cv-btn mt-5 inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] tap-44`}
                    style={{ backgroundColor: C.azul, color: C.blanco }}
                  >
                    Escribir ahora
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 5 · Opiniones ══ */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo dark={false}>Opiniones de Google</Rotulo>
            </Reveal>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <figure>
                  <svg viewBox="0 0 48 36" className="w-12 h-9 mb-6" fill={C.azul} aria-hidden="true">
                    <path d="M0 36V22.6C0 9.4 7.8 1.6 20.4 0l2.2 6.4C14.8 8.4 11 13 10.6 18H20v18zm26 0V22.6C26 9.4 33.8 1.6 46.4 0l2.2 6.4C40.8 8.4 37 13 36.6 18H46v18z" transform="scale(1)" />
                  </svg>
                  <blockquote
                    className="text-[clamp(1.45rem,5vw,2.5rem)] font-medium leading-[1.28] tracking-[-0.01em]"
                    style={{ color: C.grafito }}
                  >
                    {CITAS[0].texto}
                  </blockquote>
                  <figcaption
                    className="mt-6 flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.08em]"
                    style={{ color: C.mutedL }}
                  >
                    <Pulso color={C.azulDeep} className="w-7 h-[10px]" />
                    {CITAS[0].autor}
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={160}>
                <figure
                  className="relative p-6 md:p-7 lg:mt-14"
                  style={{ backgroundColor: C.hueso, border: `1px solid ${C.lineL}`, boxShadow: '10px 10px 0 rgba(31,107,255,0.14)' }}
                >
                  <svg viewBox="0 0 48 36" className="w-7 h-5 mb-4" fill={C.azulDeep} aria-hidden="true">
                    <path d="M0 36V22.6C0 9.4 7.8 1.6 20.4 0l2.2 6.4C14.8 8.4 11 13 10.6 18H20v18zm26 0V22.6C26 9.4 33.8 1.6 46.4 0l2.2 6.4C40.8 8.4 37 13 36.6 18H46v18z" />
                  </svg>
                  <blockquote className="text-base md:text-lg font-medium leading-relaxed" style={{ color: C.grafito }}>
                    {CITAS[1].texto}
                  </blockquote>
                  <figcaption
                    className="mt-5 flex items-center gap-3 text-xs font-bold tracking-[0.08em]"
                    style={{ color: C.mutedL }}
                  >
                    <Pulso color={C.azulDeep} className="w-6 h-[9px]" />
                    {CITAS[1].autor}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <Reveal delay={220}>
              <p className="mt-10 text-xs md:text-sm" style={{ color: C.mutedL }}>
                Citas textuales de la ficha pública de Google.{' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.azulDeep, textDecorationColor: 'rgba(20,80,200,0.3)' }}
                >
                  Ver la ficha
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ 6 · Horario y cómo llegar ══ */}
        <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo dark={false}>Horario y cómo llegar</Rotulo>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <h2
                    className={`${display.className} font-semibold uppercase leading-[1.02] text-[clamp(2rem,6vw,3.6rem)] mb-4`}
                    style={{ color: C.grafito }}
                  >
                    Pasa por el taller
                    <br />
                    <span style={{ color: C.azulDeep }}>o escribe antes.</span>
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-8" style={{ color: C.mutedL }}>
                    {BIZ.name} atiende en {BIZ.address}, {BIZ.city}. Si
                    estás fuera de la ciudad, la atención a domicilio
                    cubre toda la región de Los Lagos.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <dl className="border-t" style={{ borderColor: C.lineL }}>
                    {HORARIO.map((h) => (
                      <div
                        key={h.dias}
                        className="flex items-baseline justify-between gap-4 py-3.5 border-b"
                        style={{ borderColor: C.lineL }}
                      >
                        <dt className={`${display.className} text-sm md:text-base font-semibold uppercase tracking-[0.08em]`} style={{ color: C.grafito }}>
                          {h.dias}
                        </dt>
                        <dd
                          className="text-sm md:text-base font-semibold text-right"
                          style={{ color: h.horas === 'Cerrado' ? 'rgba(11,14,20,0.7)' : C.azulDeep }}
                        >
                          {h.horas}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} cv-btn inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] tap-44`}
                      style={{ backgroundColor: C.azul, color: C.blanco }}
                    >
                      Consulta por WhatsApp
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-link text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                      style={{ color: C.grafito, textDecorationColor: 'rgba(11,14,20,0.3)' }}
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <div className="relative" style={{ border: `1px solid ${C.lineL}`, backgroundColor: C.blanco }}>
                  <Esquinas color={C.azul} />
                  <LazyMap
                    src={MAPS_EMBED}
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    className="block w-full aspect-[4/3] border-0"
                  />
                </div>
                <p
                  className="mt-3 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: C.mutedL }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke={C.azulDeep} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                  {BIZ.address} · {BIZ.city}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 7 · Footer compacto ══ */}
        <footer className="border-t" style={{ backgroundColor: C.grafito, borderColor: 'rgba(31,107,255,0.35)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-x-8 gap-y-4 justify-between">
            <div className="flex items-center gap-3.5 min-w-0">
              <span className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden" style={{ border: `1px solid ${C.lineD}` }}>
                <Image src={`${IMG}/logo.webp`} alt="Logo de CVM Mecánica y Diagnóstico Automotriz" fill sizes="44px" className="object-cover" />
              </span>
              <div className="min-w-0">
                <p className={`${display.className} text-base font-semibold uppercase tracking-[0.06em] leading-tight`} style={{ color: C.hueso }}>
                  CVM Mecánicos a Domicilio
                </p>
                <p className="text-xs" style={{ color: C.mutedD2 }}>
                  {BIZ.address} · {BIZ.city}
                </p>
              </div>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.plata, textDecorationColor: 'rgba(201,206,214,0.35)' }}
            >
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <div
              className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-6 gap-y-1 text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ color: C.mutedD2 }}
            >
              <span>Página de muestra</span>
              <Pulso color="rgba(31,107,255,0.5)" className="w-6 h-[8px] self-center" />
              <span>CVM · Osorno</span>
            </div>
          </div>
        </footer>
      </main>

      <WaFab href={WA_LINK} label="Consultar a CVM por WhatsApp" />
    </div>
  )
}
