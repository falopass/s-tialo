import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, IG_URL, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

/**
 * Dirección de arte: «tu ventana al puerto». Cabañas de madera cálidas en
 * Angelmó, con la vista al puerto como protagonista. El motivo es el
 * marco de ventana (rectángulo con travesaños en cruz, línea fina) y las
 * tablas de madera (líneas verticales paralelas): enmarca fotos, separa
 * secciones y viste el bloque de contacto. Marcellus pone la voz serena
 * de posada; Mulish es el papel.
 */
const C = {
  lino: '#FBF3E6',
  papel: '#FFFBF3',
  nogal: '#2A1B12',
  ambar: '#B8651E',
  ambarOsc: '#9A5215',
  ambarInk: '#8A4D15',
  ambarLuz: '#EBB877',
  puerto: '#1F4B57',
  puertoOsc: '#15323B',
  arena: '#E8D5B7',
  mutLino: 'rgba(42,27,18,0.72)',
  mutPuerto: 'rgba(251,243,230,0.78)',
  lineL: 'rgba(42,27,18,0.16)',
  lineD: 'rgba(251,243,230,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-loft-angelmo-puerto-montt',
  title: 'Cabañas Loft Angelmó · Cabañas con vista al puerto en Puerto Montt',
  description:
    'Cabañas de madera de dos niveles en Angelmó, Puerto Montt: baño privado, televisor y cocina equipada, con vista al puerto y al mar. Consulta disponibilidad por WhatsApp.',
  image: '/demos/cabanas-loft-angelmo-puerto-montt/fachada.webp',
})

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'Por dentro', href: '#dentro' },
  { label: 'La vista', href: '#vista' },
  { label: 'Contacto', href: '#contacto' },
]

const RASGOS = [
  {
    name: 'Baño privado',
    desc: 'Baño propio dentro de la cabaña.',
    icon: (
      <>
        <path d="M12 3.5c-3.2 4.2-5.2 6.6-5.2 9.2a5.2 5.2 0 0 0 10.4 0c0-2.6-2-5-5.2-9.2z" />
        <path d="M9.5 13.5a2.6 2.6 0 0 0 2.4 2.7" />
      </>
    ),
  },
  {
    name: 'Televisor',
    desc: 'Televisor en la cabaña para el descanso.',
    icon: (
      <>
        <rect x="3" y="5.5" width="18" height="12.5" rx="1.5" />
        <path d="M9 20.5h6" />
      </>
    ),
  },
  {
    name: 'Cocina equipada',
    desc: 'Cocina a gas, refrigerador y lavaplatos.',
    icon: (
      <>
        <path d="M4 11h16v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5z" />
        <path d="M2.5 13H4M20 13h1.5" />
        <path d="M9.5 4c0 1.3 1 1.8 1 3M13.5 4c0 1.3 1 1.8 1 3" />
      </>
    ),
  },
]

/** Tablas de madera: líneas verticales paralelas, finas, sobre el fondo. */
const TABLAS = (line: string): CSSProperties => ({
  backgroundImage: `repeating-linear-gradient(90deg, ${line} 0 1px, transparent 1px 34px)`,
})

/** El travesaño en cruz: el sello gráfico del sitio. */
function Ventana({ color = 'currentColor', className = 'w-[15px] h-[17px]' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 16 18" className={`${className} shrink-0`} aria-hidden="true">
      <rect x="1" y="1" width="14" height="16" fill="none" stroke={color} strokeWidth="1.6" />
      <path d="M8 1v16M1 9h14" fill="none" stroke={color} strokeWidth="1.1" />
    </svg>
  )
}

/** Rótulo de sección: pequeña ventana + versalitas + línea. */
function Rotulo({ children, color = C.ambarInk, light = false }: { children: React.ReactNode; color?: string; light?: boolean }) {
  return (
    <p className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.32em] font-bold mb-5" style={{ color }}>
      <Ventana color={color} />
      <span>{children}</span>
      <span className="h-px flex-1 min-w-8" style={{ backgroundColor: light ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/**
 * Marco de ventana completo (rectángulo + cruz) para dibujarse sobre las
 * fotos: línea fina que no se deforma con el ratio. `variant` decide su
 * animación: 'hero' se dibuja al abrirse los postigos, 'scroll' se traza
 * al entrar en el viewport, 'none' queda fijo.
 */
function MarcoVentana({
  className = '',
  color = 'rgba(251,243,230,0.5)',
  variant = 'none',
  crossY = 50,
  transom = false,
}: {
  className?: string
  color?: string
  variant?: 'hero' | 'scroll' | 'none'
  crossY?: number
  /** la vertical solo cruza el tercio superior, como un montante de ventana */
  transom?: boolean
}) {
  const cls = (delay: string) =>
    variant === 'hero'
      ? `cla-trazo ${delay}`
      : variant === 'scroll'
        ? 'cla-trazo-v'
        : ''
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="98" height="98" pathLength={1} fill="none" stroke={color} strokeWidth="1.4" vectorEffect="non-scaling-stroke" className={cls('cla-d1')} />
      <path d={transom ? `M50 1V${crossY}` : 'M50 1v98'} pathLength={1} fill="none" stroke={color} strokeWidth="1.1" vectorEffect="non-scaling-stroke" className={cls('cla-d2')} />
      <path d={`M1 ${crossY}h98`} pathLength={1} fill="none" stroke={color} strokeWidth="1.1" vectorEffect="non-scaling-stroke" className={cls('cla-d3')} />
    </svg>
  )
}

/** Foto enmarcada por la ventana de cruz fina. */
function FotoMarco({
  src,
  alt,
  ratio,
  sizes,
  pos,
  marco = 'none',
  color = 'rgba(251,243,230,0.55)',
  className = '',
}: {
  src: string
  alt: string
  ratio: string
  sizes: string
  pos?: string
  marco?: 'hero' | 'scroll' | 'none'
  color?: string
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={pos ? { objectPosition: pos } : undefined}
      />
      <MarcoVentana className="pointer-events-none absolute inset-2.5 md:inset-3.5" color={color} variant={marco} />
    </div>
  )
}

function BtnWa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cla-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap tap-44 ${className}`}
      style={{ backgroundColor: C.ambarOsc, color: '#FFFBF3' }}
    >
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

/** Cita textual de Google con su ventanita de marca. */
function Cita({
  text,
  author,
  big = false,
  dark = false,
  className = '',
}: {
  text: string
  author: string
  big?: boolean
  dark?: boolean
  className?: string
}) {
  return (
    <figure className={className}>
      <Ventana color={dark ? C.ambarLuz : C.ambar} className="w-[17px] h-[19px] mb-4" />
      <blockquote
        className={
          big
            ? `${display.className} leading-[1.2] text-[clamp(1.45rem,4.6vw,2.3rem)]`
            : 'text-base md:text-lg leading-relaxed'
        }
        style={{ color: dark ? C.lino : C.nogal }}
      >
        “{text}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-bold tracking-[0.02em]" style={{ color: dark ? C.mutPuerto : C.mutLino }}>
        {author} · Google
      </figcaption>
    </figure>
  )
}

export default function CabanasLoftAngelmoPage() {
  return (
    <div
      className={`${body.className} cla min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.lino, color: C.nogal }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cla a:focus-visible { outline: 2.5px solid ${C.ambar}; outline-offset: 3px }

        /* «Se abre la ventana»: dos postigos de tablas de madera cubren el
           hero y se abren hacia los lados, mostrando la cabaña. */
        .cla-postigo {
          position: absolute; top: 0; bottom: 0; width: 51%; z-index: 30;
          background:
            repeating-linear-gradient(90deg, rgba(24,13,5,0.4) 0 2px, transparent 2px 44px),
            repeating-linear-gradient(90deg, rgba(235,184,119,0.07) 0 22px, transparent 22px 88px),
            linear-gradient(180deg, #6B3A10 0%, #562D0C 55%, #442207 100%);
        }
        .cla-postigo::before {
          content: ''; position: absolute; inset: 15px;
          border: 2px solid rgba(235,184,119,0.18);
        }
        .cla-postigo::after {
          content: ''; position: absolute; top: 50%; transform: translateY(-50%);
          width: 7px; height: 54px; border-radius: 4px;
          background: #241207; box-shadow: inset 0 0 3px rgba(235,184,119,0.35);
        }
        .cla-postigo-izq {
          left: -1%; box-shadow: 12px 0 34px rgba(20,10,3,0.45);
          animation: cla-abre-izq 1.5s cubic-bezier(.76,0,.22,1) .45s both;
        }
        .cla-postigo-der {
          right: -1%; box-shadow: -12px 0 34px rgba(20,10,3,0.45);
          animation: cla-abre-der 1.5s cubic-bezier(.76,0,.22,1) .45s both;
        }
        .cla-postigo-izq::after { right: 14px }
        .cla-postigo-der::after { left: 14px }
        @keyframes cla-abre-izq { to { transform: translateX(-106%) } }
        @keyframes cla-abre-der { to { transform: translateX(106%) } }

        /* La foto se asienta desde un leve acercamiento. */
        @keyframes cla-zoom { from { transform: scale(1.07) } to { transform: scale(1) } }
        .cla-zoom { animation: cla-zoom 2.3s cubic-bezier(.22,.61,.21,1) .4s both }

        /* El marco de ventana se dibuja sobre la foto al abrirse. */
        @keyframes cla-trazo { from { stroke-dashoffset: 1 } to { stroke-dashoffset: 0 } }
        .cla-trazo { stroke-dasharray: 1; stroke-dashoffset: 0; animation: cla-trazo 1s ease-out both }
        .cla-d1 { animation-delay: 1.15s }
        .cla-d2 { animation-delay: 1.7s }
        .cla-d3 { animation-delay: 1.85s }

        /* Un reflejo de luz cálida cruza el marco una sola vez. */
        .cla-luz {
          position: absolute; top: -8%; bottom: -8%; width: 36%; left: 0; z-index: 20;
          pointer-events: none;
          background: linear-gradient(100deg, transparent 8%, rgba(235,184,119,0.2) 50%, transparent 92%);
          transform: translateX(-120%) skewX(-10deg);
          animation: cla-luz 1.9s ease-out 2.05s both;
        }
        @keyframes cla-luz { to { transform: translateX(340%) skewX(-10deg) } }

        /* Titular línea por línea y entradas suaves. */
        @keyframes cla-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .cla-linea { display: block; animation: cla-linea .9s cubic-bezier(.22,.61,.21,1) both; animation-delay: var(--d, 0s) }
        @keyframes cla-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .cla-fade { animation: cla-fade .9s ease-out both; animation-delay: var(--d, 0s) }

        /* «La vista»: la panorámica se revela como una cortina que sube
           (de abajo hacia arriba) mientras el marco se traza fino. */
        @supports (animation-timeline: view()) {
          .cla-cortina {
            clip-path: inset(100% 0 0 0);
            animation: cla-cortina linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 60%;
          }
          @keyframes cla-cortina { to { clip-path: inset(0 0 0 0) } }
          .cla-trazo-v {
            stroke-dasharray: 1; stroke-dashoffset: 1;
            animation: cla-trazo-v linear both;
            animation-timeline: view();
            animation-range: entry 12% entry 72%;
          }
          @keyframes cla-trazo-v { to { stroke-dashoffset: 0 } }
        }

        .cla-btn { transition: transform .18s ease, filter .18s ease }
        .cla-btn:hover { transform: translateY(-2px); filter: brightness(1.09) }
        .cla-btn:active { transform: scale(.97) }
        .cla-foto { transition: transform .8s cubic-bezier(.2,.6,.2,1) }
        .cla-foto:hover { transform: scale(1.03) }

        @media (prefers-reduced-motion: reduce) {
          .cla-postigo { display: none !important }
          .cla-zoom, .cla-trazo, .cla-luz, .cla-linea, .cla-fade { animation: none !important }
          .cla-luz { opacity: 0 !important }
          .cla-cortina { clip-path: none !important; animation: none !important }
          .cla-trazo-v { animation: none !important; stroke-dashoffset: 0 !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Consultar"
        theme={{
          over: 'dark',
          bar: 'rgba(251,243,230,0.95)',
          ink: C.nogal,
          line: C.lineL,
          btnBg: C.ambarOsc,
          btnInk: '#FFFBF3',
        }}
      />

      {/* ── 1 · Hero: se abre la ventana ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.puertoOsc }}>
        <div className="absolute inset-0 cla-zoom">
          <Image
            src={`${IMG}/fachada.webp`}
            alt="Cabaña de madera de dos niveles de Cabañas Loft Angelmó, con su escalera exterior de fierro"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: '50% 38%' }}
          />
        </div>
        {/* velo fijo de lectura */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(21,50,59,0.55) 0%, rgba(21,50,59,0.14) 40%, rgba(24,15,7,0.88) 100%)',
          }}
        />
        {/* el marco de la ventana se dibuja sobre la vista */}
        <MarcoVentana
          className="pointer-events-none absolute inset-x-5 md:inset-x-8 top-[84px] bottom-6 z-10"
          color="rgba(251,243,230,0.4)"
          variant="hero"
          crossY={32}
          transom
        />
        {/* postigos de madera que se abren */}
        <div className="cla-postigo cla-postigo-izq" aria-hidden="true" />
        <div className="cla-postigo cla-postigo-der" aria-hidden="true" />
        {/* reflejo de luz que cruza el marco una vez */}
        <div className="cla-luz" aria-hidden="true" />

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-8 md:pb-10">
          <p
            className="cla-fade flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.32em] font-bold mb-5"
            style={{ color: C.ambarLuz, '--d': '1.05s' } as CSSProperties}
          >
            <Ventana color={C.ambarLuz} />
            <span>Puerto Montt · Angelmó</span>
          </p>
          <h1
            className={`${display.className} leading-[1.03] tracking-[0.01em] text-[clamp(2.9rem,11vw,6.2rem)]`}
            style={{ color: C.lino }}
          >
            <span className="block overflow-hidden">
              <span className="cla-linea" style={{ '--d': '1.25s' } as CSSProperties}>Una cabaña</span>
            </span>
            <span className="block overflow-hidden">
              <span className="cla-linea" style={{ '--d': '1.38s' } as CSSProperties}>con vista</span>
            </span>
            <span className="block overflow-hidden">
              <span className="cla-linea" style={{ '--d': '1.51s', color: C.ambarLuz } as CSSProperties}>al puerto.</span>
            </span>
          </h1>
          <p
            className="cla-fade mt-6 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(251,243,230,0.92)', '--d': '1.7s' } as CSSProperties}
          >
            Cabañas de madera de dos niveles en Angelmó: baño privado,
            televisor y cocina equipada, con la ventana abierta al
            puerto y al mar.
          </p>
          <div className="cla-fade mt-7 flex flex-col sm:flex-row gap-3" style={{ '--d': '1.82s' } as CSSProperties}>
            <BtnWa>Consulta disponibilidad por WhatsApp</BtnWa>
            <a
              href="#dentro"
              className="cla-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tap-44"
              style={{ border: '1.5px solid rgba(251,243,230,0.6)', color: C.lino, backgroundColor: 'rgba(21,50,59,0.35)' }}
            >
              Ver por dentro
            </a>
          </div>
        </div>

        {/* barra de datos al pie del hero */}
        <div
          className="cla-fade relative border-t"
          style={{
            borderColor: 'rgba(251,243,230,0.25)',
            backgroundColor: 'rgba(24,15,7,0.55)',
            backdropFilter: 'blur(6px)',
            '--d': '2s',
          } as CSSProperties}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(251,243,230,0.85)' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-2 decoration-1" style={{ textDecorationColor: 'rgba(235,184,119,0.6)' }}>
              {BIZ.phoneDisplay}
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-2 decoration-1" style={{ textDecorationColor: 'rgba(235,184,119,0.6)' }}>
              {BIZ.igHandle}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2 · Las cabañas: composición editorial superpuesta ── */}
      <section id="cabanas" className="scroll-mt-20" style={TABLAS('rgba(42,27,18,0.05)')}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo>Las cabañas</Rotulo>
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2.3rem,6.5vw,4.2rem)]`} style={{ color: C.nogal }}>
                Madera, dos niveles
                <br />
                <em className="not-italic" style={{ color: C.ambarInk }}>y la luz del puerto.</em>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mutLino }}>
                Cabañas de madera de dos niveles, con la escalera por
                fuera. Adentro: dormitorio con la cama hecha, cocina
                equipada y el comedor junto a la ventana.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <ul className="mt-9 max-w-md">
                {RASGOS.map((r) => (
                  <li key={r.name} className="flex items-center gap-4 py-4 border-b" style={{ borderColor: C.lineL }}>
                    <span
                      className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: C.arena, color: C.ambarInk }}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {r.icon}
                      </svg>
                    </span>
                    <span>
                      <strong className="block text-base md:text-lg leading-tight" style={{ color: C.nogal }}>{r.name}</strong>
                      <span className="text-sm" style={{ color: C.mutLino }}>{r.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          {/* tres dormitorios, una sola composición */}
          <Reveal delay={120}>
            <div className="relative pb-10 md:pb-14">
              <figure className="w-[74%]">
                <FotoMarco
                  src={`${IMG}/dormitorio-calido.webp`}
                  alt="Dormitorio de madera con lámpara encendida y luz cálida en Cabañas Loft Angelmó"
                  ratio="aspect-[3/4]"
                  sizes="(min-width: 1024px) 36vw, 74vw"
                />
                <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutLino }}>
                  Madera y luz cálida
                </figcaption>
              </figure>
              <div
                className="absolute right-0 top-[9%] w-[38%] rotate-[2deg]"
                style={{ boxShadow: '0 18px 44px rgba(42,27,18,0.25)', border: `6px solid ${C.papel}` }}
              >
                <Image
                  src={`${IMG}/dormitorio-2.webp`}
                  alt="Dormitorio con cama blanca, cojines y bandeja con tazas"
                  width={675}
                  height={1200}
                  className="block w-full h-auto"
                />
              </div>
              <div
                className="absolute right-[4%] -bottom-1 w-[52%] rotate-[-1.5deg]"
                style={{ boxShadow: '0 18px 44px rgba(42,27,18,0.25)', border: `6px solid ${C.papel}` }}
              >
                <Image
                  src={`${IMG}/dormitorio.webp`}
                  alt="Dormitorio con cama, bandeja de desayuno y una flor sobre paredes de madera"
                  width={1200}
                  height={800}
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Por dentro: mosaico roto ── */}
      <section id="dentro" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Por dentro</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2.3rem,6.5vw,4.2rem)]`} style={{ color: C.nogal }}>
                Equipada para
                <br />
                <em className="not-italic" style={{ color: C.ambarInk }}>cocinar y quedarse.</em>
              </h2>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutLino }}>
                Lo que se ve en las fotos es lo que te encuentras: cocina
                a gas, refrigerador, lavaplatos y la mesa puesta.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-5 md:gap-6 items-start">
            <Reveal className="md:col-span-7">
              <figure>
                <FotoMarco
                  src={`${IMG}/cocina-2.webp`}
                  alt="Cocina equipada con lavaplatos, cocina a gas y hervidor en la cabaña"
                  ratio="aspect-[3/2]"
                  sizes="(min-width: 768px) 56vw, calc(100vw - 2.5rem)"
                />
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutLino }}>
                  <Ventana color={C.ambarInk} className="w-[13px] h-[15px] translate-y-[2px]" />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.nogal }}>La cocina</strong>
                    {' '}· a gas, con hervidor y lo necesario
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-5 md:mt-12" delay={110}>
              <figure>
                <FotoMarco
                  src={`${IMG}/cocina.webp`}
                  alt="Cocina con refrigerador y flores amarillas en la cabaña"
                  ratio="aspect-[3/2] max-w-[420px]"
                  sizes="(min-width: 768px) 38vw, calc(100vw - 2.5rem)"
                />
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutLino }}>
                  <Ventana color={C.ambarInk} className="w-[13px] h-[15px] translate-y-[2px]" />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.nogal }}>El rincón</strong>
                    {' '}· refrigerador y flores de la casa
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-4 md:-mt-6" delay={80}>
              <figure>
                <FotoMarco
                  src={`${IMG}/dormitorio-noche.webp`}
                  alt="Ventana de noche con cortina, flores amarillas y la puerta con el número 2"
                  ratio="aspect-[3/4]"
                  sizes="(min-width: 768px) 30vw, calc(100vw - 2.5rem)"
                />
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutLino }}>
                  <Ventana color={C.ambarInk} className="w-[13px] h-[15px] translate-y-[2px]" />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.nogal }}>De noche</strong>
                    {' '}· la ventana y la puerta del N° 2
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-8 md:mt-6" delay={150}>
              <div
                className="h-full flex flex-col justify-between gap-8 p-7 md:p-10"
                style={{ backgroundColor: C.puerto, ...TABLAS('rgba(251,243,230,0.05)') }}
              >
                <div className="flex items-start justify-between gap-6">
                  <p className={`${display.className} text-[clamp(1.5rem,3.4vw,2.3rem)] leading-[1.15] max-w-md`} style={{ color: C.lino }}>
                    Cocina propia, dormitorio con la cama hecha y la mesa
                    junto a la ventana.
                  </p>
                  <Ventana color={C.ambarLuz} className="w-9 h-10 mt-1 shrink-0 hidden md:block" />
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                  style={{ color: C.ambarLuz, textDecorationColor: 'rgba(235,184,119,0.45)' }}
                >
                  Pregunta lo que necesites por WhatsApp →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · La vista: la cortina sube sobre el puerto ── */}
      <section id="vista" className="scroll-mt-20" style={{ backgroundColor: C.puerto, color: C.lino }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.ambarLuz} light>La vista</Rotulo>
            <h2 className={`${display.className} leading-[1.05] text-[clamp(2.3rem,6.5vw,4.4rem)]`} style={{ color: C.lino }}>
              Desde el comedor,
              <br />
              <em className="not-italic" style={{ color: C.ambarLuz }}>la ventana al puerto.</em>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-10 md:mt-14 items-start">
            <Reveal className="lg:col-span-8">
              <div className="cla-cortina relative">
                <FotoMarco
                  src={`${IMG}/comedor-vista.webp`}
                  alt="Comedor con ventana y vista al puerto y los cerros de Puerto Montt"
                  ratio="aspect-[16/9]"
                  sizes="(min-width: 1024px) 62vw, calc(100vw - 2.5rem)"
                  marco="scroll"
                />
              </div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutPuerto }}>
                La mesa junto a la ventana
              </p>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:mt-20" delay={140}>
              <Cita text={REVIEWS[1].text} author={REVIEWS[1].author} dark />
            </Reveal>
          </div>
          <Reveal delay={80}>
            <figure className="mt-10 md:mt-14 ml-auto max-w-md md:mr-[8%]">
              <div
                className="rotate-[1.4deg]"
                style={{ boxShadow: '0 20px 50px rgba(10,24,29,0.45)', border: `6px solid ${C.lino}` }}
              >
                <Image
                  src={`${IMG}/vista.webp`}
                  alt="Ventana abierta con florero y al fondo los techos y el puerto de Puerto Montt"
                  width={1200}
                  height={675}
                  className="block w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-right" style={{ color: C.mutPuerto }}>
                La ventana abierta, el puerto al fondo
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Opiniones en Google ── */}
      <section id="opiniones" className="scroll-mt-20" style={TABLAS('rgba(42,27,18,0.05)')}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <Rotulo>Opiniones en Google</Rotulo>
              <Cita text={REVIEWS[0].text} author={REVIEWS[0].author} big className="max-w-2xl" />
            </Reveal>
            <Reveal delay={150}>
              <div
                className="mt-10 p-6 md:p-7 rotate-[0.4deg]"
                style={{ backgroundColor: C.papel, border: `1px solid ${C.lineL}`, boxShadow: '0 12px 34px rgba(42,27,18,0.1)' }}
              >
                <Cita text={REVIEWS[2].text} author={REVIEWS[2].author} />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.ambarInk, textDecorationColor: 'rgba(184,101,30,0.4)' }}
              >
                Leer más opiniones en Google →
              </a>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5 lg:mt-8" delay={120}>
            <figure className="max-w-[300px] md:max-w-[340px]">
              <FotoMarco
                src={`${IMG}/fachada-noche.webp`}
                alt="La cabaña de madera de noche, con el farol encendido junto a la escalera"
                ratio="aspect-[3/4]"
                sizes="(min-width: 1024px) 36vw, 300px"
              />
              <figcaption className="mt-3.5 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutLino }}>
                De noche, el farol queda encendido
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Contacto: la otra ventana es el mapa ── */}
      <section id="contacto" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.puerto, color: C.lino }}>
        <div className="absolute inset-0" style={TABLAS('rgba(251,243,230,0.045)')} aria-hidden="true" />
        <svg
          viewBox="0 0 16 18"
          className="absolute -right-8 -bottom-10 w-64 md:w-96 h-auto pointer-events-none"
          aria-hidden="true"
          style={{ opacity: 0.07 }}
        >
          <rect x="1" y="1" width="14" height="16" fill="none" stroke={C.lino} strokeWidth="0.5" />
          <path d="M8 1v16M1 9h14" fill="none" stroke={C.lino} strokeWidth="0.4" />
        </svg>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Rotulo color={C.ambarLuz} light>Cómo llegar y contactar</Rotulo>
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2.3rem,6.5vw,4.2rem)]`} style={{ color: C.lino }}>
                En Angelmó,
                <br />
                <em className="not-italic" style={{ color: C.ambarLuz }}>Puerto Montt.</em>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutPuerto }}>
                Las cabañas están en el barrio Angelmó de Puerto Montt,
                Región de Los Lagos. En Google Maps las encuentras como
                «Cabañas Loft Angelmo».
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <BtnWa>Consulta disponibilidad por WhatsApp</BtnWa>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cla-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tap-44"
                  style={{ border: '1.5px solid rgba(251,243,230,0.55)', color: C.lino, backgroundColor: 'rgba(21,50,59,0.3)' }}
                >
                  Abrir en Google Maps
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 13L13 3M6 3h7v7" />
                  </svg>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-2xl md:text-3xl tap-44`}
                  style={{ color: C.lino }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold tap-44"
                  style={{ color: C.mutPuerto }}
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
                  </svg>
                  {BIZ.igHandle}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6" delay={120}>
            <div
              className="relative p-2.5 md:p-3"
              style={{ backgroundColor: C.puertoOsc, border: '1px solid rgba(251,243,230,0.25)', boxShadow: '0 24px 60px rgba(10,24,29,0.45)' }}
            >
              <div className="flex items-center gap-2.5 px-1 pb-2.5" aria-hidden="true">
                <Ventana color={C.ambarLuz} className="w-[13px] h-[15px]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.26em]" style={{ color: C.mutPuerto }}>
                  Vista en el mapa
                </span>
              </div>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="block w-full h-[300px] md:h-[400px]"
                style={{ border: 0, backgroundColor: C.papel }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-center text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutPuerto }}>
              Angelmó · {BIZ.city} · {BIZ.region}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.nogal, color: C.lino }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <p className={`${display.className} text-2xl md:text-[28px] leading-none flex items-center gap-3`}>
                <Ventana color={C.ambarLuz} className="w-[18px] h-[20px]" />
                {BIZ.name}
              </p>
              <p className="text-sm mt-2" style={{ color: 'rgba(251,243,230,0.72)' }}>
                Cabañas · Angelmó, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center hover:text-white transition-colors" style={{ color: 'rgba(251,243,230,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center hover:text-white transition-colors"
                style={{ color: 'rgba(251,243,230,0.85)' }}
              >
                Instagram
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(251,243,230,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(251,243,230,0.62)' }}>
              Fotos, teléfono, Instagram y opiniones son reales (Google
              Maps e Instagram). Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.lino }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.ambarLuz }}
              >
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
