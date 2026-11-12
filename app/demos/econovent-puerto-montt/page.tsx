import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import EnVista from './ventanas'
import { BIZ, HORARIO, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

/**
 * Dirección de arte: «el marco de ventana». La página se lee como un
 * ventanal de PVC: blanco perfil, vidrio celeste con reflejo diagonal,
 * antracita de junta y un rojo bandera que solo aparece dos veces.
 * Unbounded pone el trazo técnico; IBM Plex Sans lee el detalle.
 */
const C = {
  pvc: '#F6F8F9',
  antrac: '#22282E',
  cielo: '#2A6BB0',
  vidrio: '#CFE3F1',
  rojo: '#D52B1E',
  muro: '#E3EAF0',
  mutL: 'rgba(34,40,46,0.68)',
  mutD: 'rgba(246,248,249,0.74)',
  lineL: 'rgba(34,40,46,0.16)',
  lineD: 'rgba(246,248,249,0.18)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

/** Vidrio: celeste de perfil con dos reflejos diagonales. */
const VIDRIO: CSSProperties = {
  backgroundImage: [
    'linear-gradient(115deg, transparent 32%, rgba(255,255,255,0.5) 39%, rgba(255,255,255,0.16) 47%, transparent 56%)',
    'linear-gradient(115deg, transparent 64%, rgba(255,255,255,0.34) 69%, transparent 78%)',
    'linear-gradient(155deg, #E2EEF6 0%, #BAD4E7 55%, #9CC2DC 100%)',
  ].join(', '),
}

/** El exterior que se ve por la abertura de una ventana abierta. */
const EXTERIOR: CSSProperties = {
  backgroundImage: 'linear-gradient(180deg, #1D5C9C 0%, #4A8CC4 52%, #A9CBE8 100%)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'econovent-puerto-montt',
  title: 'Econovent · Ventanas de PVC hechas en Puerto Montt',
  description:
    'Fábrica de ventanas de PVC americano y europeo en Pasaje Don Justo, Puerto Montt. Cotiza por WhatsApp.',
  image: `${IMG}/fabrica.webp`,
})

const NAV_LINKS = [
  { label: 'Las líneas', href: '#lineas' },
  { label: 'Cómo cotizar', href: '#trabajo' },
  { label: 'La fábrica', href: '#fabrica' },
  { label: 'Contacto', href: '#contacto' },
]

/** Ventanita de dos paños: ícono del motivo, usado en rótulos y nav. */
function Ventanita({ color, size = 13 }: { color: string; size?: number }) {
  return (
    <span
      className="relative inline-block shrink-0"
      style={{ width: size, height: size, border: `1.5px solid ${color}` }}
      aria-hidden="true"
    >
      <span className="absolute top-0 bottom-0" style={{ left: '50%', width: 1.5, marginLeft: -0.75, backgroundColor: color }} />
      <span className="absolute left-0 right-0" style={{ top: '50%', height: 1.5, marginTop: -0.75, backgroundColor: color }} />
    </span>
  )
}

/** Rótulo técnico: ventanita + versalitas Unbounded + línea. */
function Rotulo({
  children,
  color,
  line,
}: {
  children: React.ReactNode
  color: string
  line: string
}) {
  return (
    <p
      className={`${display.className} flex items-center gap-3 text-[10px] md:text-[11px] font-light uppercase tracking-[0.3em] mb-6`}
      style={{ color }}
    >
      <Ventanita color={color} />
      <span className="whitespace-nowrap">{children}</span>
      <span className="h-px flex-1" style={{ backgroundColor: line }} aria-hidden="true" />
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
  tone: 'cielo' | 'antrac' | 'blanco' | 'lineBlanco' | 'lineTinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'cielo'
      ? { backgroundColor: C.cielo, color: '#FFFFFF' }
      : tone === 'antrac'
        ? { backgroundColor: C.antrac, color: '#FFFFFF' }
        : tone === 'blanco'
          ? { backgroundColor: '#FFFFFF', color: C.cielo }
          : tone === 'lineBlanco'
            ? { border: '2px solid rgba(246,248,249,0.55)', color: '#FFFFFF' }
            : { border: `2px solid ${C.antrac}`, color: C.antrac }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="ev-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 text-[15px] font-semibold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function IconWa({ className = 'w-[17px] h-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** Hoja del ventanal del hero: marco PVC + vidrio + tirador junto al encuentro. */
function HojaHero({ tirador }: { tirador: 'izq' | 'der' }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        ...VIDRIO,
        border: '14px solid #F6F8F9',
        boxShadow: 'inset 0 0 0 2px rgba(34,40,46,0.12), inset 0 0 60px rgba(255,255,255,0.4)',
      }}
    >
      {/* junquillo interior */}
      <div
        className="absolute inset-[10px]"
        style={{ border: '2px solid rgba(246,248,249,0.95)', boxShadow: 'inset 0 0 0 1px rgba(34,40,46,0.08)' }}
      />
      {/* tirador vertical */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[7px] h-14 rounded-full"
        style={{
          [tirador === 'izq' ? 'left' : 'right']: '26px',
          backgroundColor: 'rgba(34,40,46,0.4)',
          boxShadow: 'inset 0 1px 2px rgba(34,40,46,0.5)',
        }}
      />
    </div>
  )
}

/** Foto enmarcada como ventana: marco PVC, travesaños y reflejo de vidrio. */
function VentanaFoto({
  src,
  alt,
  sizes,
  aspect,
  position = '50% 50%',
  travesanos = 1,
  caption,
  captionColor = 'rgba(34,40,46,0.72)',
}: {
  src: string
  alt: string
  sizes: string
  aspect: string
  position?: string
  travesanos?: number
  caption?: string
  captionColor?: string
}) {
  return (
    <figure>
      <div className={`relative ${aspect}`} style={{ backgroundColor: '#F6F8F9', padding: 12, boxShadow: '0 22px 52px rgba(34,40,46,0.22)' }}>
        <div className="relative h-full w-full overflow-hidden">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: position }} />
          {/* travesaños del ventanal */}
          {Array.from({ length: travesanos }).map((_, i) => (
            <span
              key={i}
              className="absolute top-0 bottom-0 w-[10px] -ml-[5px]"
              style={{ left: `${((i + 1) * 100) / (travesanos + 1)}%`, backgroundColor: '#F6F8F9', boxShadow: '0 0 0 1px rgba(34,40,46,0.12)' }}
              aria-hidden="true"
            />
          ))}
          {/* reflejo del vidrio */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.34) 46%, rgba(255,255,255,0.1) 54%, transparent 62%)' }}
            aria-hidden="true"
          />
        </div>
      </div>
      {caption && (
        <figcaption
          className={`${display.className} mt-3 text-[10px] font-light uppercase tracking-[0.26em]`}
          style={{ color: captionColor }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

const PASOS = [
  { n: '01', t: 'Nos escribes', d: 'Mándanos por WhatsApp las medidas y el tipo de ventana que buscas.' },
  { n: '02', t: 'Te cotizamos', d: 'Te respondemos con la cotización y resolvemos tus dudas.' },
  { n: '03', t: 'Fabricamos', d: 'Las ventanas se hacen en la fábrica de Pasaje Don Justo.' },
] as const

export default function EconoventPage() {
  return (
    <div
      className={`${body.className} ev-root min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.pvc, color: C.antrac }}
    >
      <style>{`
        /* Títulos y rótulos en Unbounded, el trazo técnico. */
        .ev-root h1, .ev-root h2, .ev-root h3, .ev-root .ev-display { font-family: ${display.style.fontFamily} }

        /* ── Se abre la ventana: las dos hojas del ventanal se corren. ── */
        @keyframes ev-abreI { from { transform: translateX(0) } to { transform: translateX(-104%) } }
        @keyframes ev-abreD { from { transform: translateX(0) } to { transform: translateX(104%) } }
        .ev-hojaI { animation: ev-abreI 1.05s cubic-bezier(0.6,0.05,0.25,1) 0.3s both }
        .ev-hojaD { animation: ev-abreD 1.05s cubic-bezier(0.6,0.05,0.25,1) 0.3s both }

        /* La foto de la fábrica se asienta detrás del vidrio. */
        @keyframes ev-zoom { from { transform: scale(1.07) } to { transform: scale(1) } }
        .ev-zoom { animation: ev-zoom 2.4s cubic-bezier(0.25,0.6,0.25,1) 0.1s both }

        /* Un reflejo de luz cruza el vano una vez abierto. */
        @keyframes ev-brillo { from { transform: translateX(-170%) } to { transform: translateX(420%) } }
        .ev-brillo { animation: ev-brillo 1.7s cubic-bezier(0.35,0.1,0.3,1) 1.15s both }

        /* Titular línea por línea, después de que se abre el ventanal. */
        @keyframes ev-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .ev-linea { animation: ev-linea 0.9s cubic-bezier(0.22,0.61,0.2,1) both }
        @keyframes ev-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .ev-sube { animation: ev-sube 0.85s cubic-bezier(0.25,0.6,0.25,1) both }

        /* Las hojas de las ventanas dibujadas: se abren cuando EnVista
           marca el bloque (al hacer scroll o por la red de seguridad). */
        .ev-anim .ev-corre { transform: translateX(0); transition: transform 1.1s cubic-bezier(0.5,0.05,0.2,1) 0.15s }
        .ev-anim.ev-vista .ev-corre { transform: translateX(-46%) }
        .ev-anim .ev-gira { transform: rotateY(0deg); transition: transform 1.15s cubic-bezier(0.45,0.05,0.2,1) 0.15s }
        .ev-anim.ev-vista .ev-gira { transform: rotateY(-32deg) }
        .ev-anim .ev-gira-sombra { opacity: 0; transition: opacity 1.15s ease 0.15s }
        .ev-anim.ev-vista .ev-gira-sombra { opacity: 1 }

        .ev-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .ev-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .ev-btn:active { transform: scale(0.97) }
        .ev-btn:focus-visible, .ev-root a:focus-visible { outline: 3px solid ${C.cielo}; outline-offset: 3px }

        /* Las columnas de grid no empujan el ancho. */
        .ev-root .grid > * { min-width: 0 }

        @media (prefers-reduced-motion: reduce) {
          .ev-hojaI, .ev-hojaD, .ev-zoom, .ev-brillo, .ev-linea, .ev-sube { animation: none !important }
          .ev-hojaI { transform: translateX(-104%) }
          .ev-hojaD { transform: translateX(104%) }
          .ev-brillo { opacity: 0 }
          .ev-anim .ev-corre, .ev-anim .ev-gira, .ev-anim .ev-gira-sombra { transition: none }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2.5">
            <Ventanita color="currentColor" size={15} />
            {BIZ.short}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotiza"
        theme={{
          over: 'dark',
          bar: 'rgba(246,248,249,0.94)',
          ink: C.antrac,
          line: C.lineL,
          btnBg: C.cielo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: se abre la ventana ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.antrac }}>
        {/* La fábrica, detrás del vidrio */}
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/fabrica.webp`}
            alt="Galpón de Econovent en Puerto Montt: planchas metálicas, ventanales instalados y la bandera de Chile"
            fill
            priority
            sizes="100vw"
            className="ev-zoom object-cover"
            style={{ objectPosition: '63% 60%' }}
          />
        </div>
        {/* velo para el texto */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(34,40,46,0.34) 0%, rgba(34,40,46,0.10) 42%, rgba(34,40,46,0.86) 100%)' }}
        />

        {/* El ventanal corredera, cerrado al cargar */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="ev-hojaI absolute inset-y-0 left-0" style={{ width: '50.4%' }}>
            <HojaHero tirador="der" />
          </div>
          <div className="ev-hojaD absolute inset-y-0 right-0" style={{ width: '50.4%' }}>
            <HojaHero tirador="izq" />
          </div>
          {/* marco fijo del vano */}
          <div
            className="absolute inset-0"
            style={{ border: '14px solid #F6F8F9', boxShadow: 'inset 0 0 0 2px rgba(34,40,46,0.2)' }}
          />
        </div>

        {/* reflejo de luz cruzando el vano */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="ev-brillo absolute top-[-12%] bottom-[-12%] left-0 w-[34%]"
            style={{ background: 'linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.16) 30%, rgba(255,255,255,0.5) 52%, rgba(255,255,255,0.14) 72%, transparent 100%)' }}
          />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-8 md:pb-12">
          <p
            className="ev-sube flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] mb-5"
            style={{ color: C.vidrio, animationDelay: '1.05s' }}
          >
            <span className="h-px w-9" style={{ backgroundColor: 'rgba(207,227,241,0.6)' }} aria-hidden="true" />
            Fábrica en Puerto Montt
          </p>
          <h1 className="uppercase font-bold leading-[1.04] tracking-[0.005em] text-[clamp(2.15rem,8.4vw,5.6rem)]" style={{ color: '#FFFFFF' }}>
            <span className="block overflow-hidden pb-1">
              <span className="ev-linea block" style={{ animationDelay: '1.15s' }}>
                Ventanas
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="ev-linea block" style={{ animationDelay: '1.3s' }}>
                de PVC
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="ev-linea block" style={{ animationDelay: '1.45s' }}>
                hechas <span style={{ color: C.vidrio }}>aquí.</span>
              </span>
            </span>
          </h1>
          <p
            className="ev-sube mt-5 max-w-md text-base md:text-lg leading-relaxed font-medium"
            style={{ color: 'rgba(246,248,249,0.92)', animationDelay: '1.6s' }}
          >
            Fábrica de ventanas de PVC americano y europeo en Pasaje Don
            Justo, Puerto Montt. Cotiza directo por WhatsApp.
          </p>
          <div className="ev-sube mt-6 flex flex-wrap gap-3" style={{ animationDelay: '1.75s' }}>
            <Btn href={WA_LINK} tone="cielo">
              <IconWa />
              Cotiza por WhatsApp
            </Btn>
            <Btn href="#lineas" tone="lineBlanco" external={false}>
              Ver las dos líneas
            </Btn>
          </div>
        </div>

        {/* barra de datos al pie del vano */}
        <div
          className="ev-sube relative border-t"
          style={{
            borderColor: 'rgba(246,248,249,0.28)',
            backgroundColor: 'rgba(34,40,46,0.58)',
            backdropFilter: 'blur(8px)',
            animationDelay: '1.9s',
          }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-semibold"
            style={{ color: 'rgba(246,248,249,0.85)' }}
          >
            <span className="whitespace-nowrap">{BIZ.address}</span>
            <span className="whitespace-nowrap">Lun a vie 9:00 a 19:00</span>
            <span className="whitespace-nowrap" style={{ color: C.vidrio }}>Cotiza por WhatsApp</span>
          </div>
        </div>
      </section>

      {/* ── 2 · Dos líneas de PVC ── */}
      <section id="lineas" className="scroll-mt-20" style={{ backgroundColor: C.pvc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.cielo} line={C.lineL}>
              Dos líneas de PVC
            </Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
              <h2 className="uppercase font-semibold leading-[1.04] text-[clamp(1.9rem,6.2vw,4rem)]">
                Americana o europea,
                <br />
                <span style={{ color: C.cielo }}>tú eliges.</span>
              </h2>
              <p className="max-w-sm text-sm md:text-base leading-relaxed" style={{ color: C.mutL }}>
                Cuéntanos cómo es tu casa y qué vano quieres cubrir: te
                asesoramos cuál sistema conviene, sin tecnicismos.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
            {/* PVC americano: corredera, hoja que desliza */}
            <div className="lg:col-span-7">
              <EnVista>
                <figure>
                  <div className="relative p-4 md:p-6" style={{ backgroundColor: C.muro, border: `1px solid ${C.lineL}` }}>
                    <div className="relative w-full aspect-[16/10]" aria-label="Ventana corredera dibujada: una hoja se desliza sobre la otra" role="img">
                      {/* el exterior por la abertura */}
                      <div className="absolute" style={{ inset: 14, ...EXTERIOR }} />
                      {/* hoja fija izquierda */}
                      <div
                        className="absolute"
                        style={{ left: 14, top: 14, bottom: 14, width: 'calc(50% - 7px)', ...VIDRIO, border: '10px solid #F6F8F9', boxShadow: 'inset 0 0 0 1.5px rgba(34,40,46,0.12)' }}
                      />
                      {/* hoja corredera: se desliza a la izquierda */}
                      <div
                        className="ev-corre absolute"
                        style={{ right: 14, top: 14, bottom: 14, width: 'calc(50% - 7px)', ...VIDRIO, border: '10px solid #F6F8F9', boxShadow: 'inset 0 0 0 1.5px rgba(34,40,46,0.12), -6px 0 14px rgba(34,40,46,0.18)' }}
                      >
                        {/* tirador */}
                        <span
                          className="absolute top-1/2 -translate-y-1/2 w-[5px] h-10 rounded-full"
                          style={{ left: 8, backgroundColor: 'rgba(34,40,46,0.42)' }}
                        />
                      </div>
                      {/* marco del vano */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ border: '14px solid #F6F8F9', boxShadow: 'inset 0 0 0 2px rgba(34,40,46,0.16), 0 16px 36px rgba(34,40,46,0.14)' }}
                      />
                      {/* riel inferior */}
                      <span className="absolute left-[14px] right-[14px] h-[3px]" style={{ bottom: 9, backgroundColor: 'rgba(34,40,46,0.2)' }} aria-hidden="true" />
                    </div>
                  </div>
                  <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <p className={`${display.className} text-[11px] font-light uppercase tracking-[0.26em]`} style={{ color: C.antrac }}>
                      PVC americano
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: C.mutL }}>
                      Te asesoramos según tu casa.
                    </p>
                  </figcaption>
                </figure>
              </EnVista>
            </div>

            {/* PVC europeo: abatir, hoja que gira */}
            <div className="lg:col-span-5 lg:mt-14">
              <EnVista>
                <figure className="lg:max-w-[340px] lg:ml-auto">
                  <div className="relative p-4 md:p-6" style={{ backgroundColor: C.antrac }}>
                    <div className="relative w-full aspect-[5/6] max-h-[430px] mx-auto" style={{ perspective: '900px' }} aria-label="Ventana abatir dibujada: la hoja gira sobre su eje" role="img">
                      {/* el exterior por la abertura */}
                      <div className="absolute" style={{ inset: 14, ...EXTERIOR }} />
                      {/* sombra que crece en el vano al abrir */}
                      <div
                        className="ev-gira-sombra absolute pointer-events-none"
                        style={{ inset: 14, background: 'linear-gradient(90deg, rgba(14,20,25,0.55) 0%, transparent 55%)' }}
                      />
                      {/* hoja abatir: gira sobre el eje izquierdo */}
                      <div
                        className="ev-gira absolute"
                        style={{ inset: 14, ...VIDRIO, border: '10px solid #F6F8F9', boxShadow: 'inset 0 0 0 1.5px rgba(34,40,46,0.12)', transformOrigin: '0% 50%', transformStyle: 'preserve-3d' }}
                      >
                        {/* manilla */}
                        <span
                          className="absolute w-[6px] h-12 rounded-full"
                          style={{ right: 12, top: '46%', backgroundColor: 'rgba(34,40,46,0.5)' }}
                        />
                        <span
                          className="absolute w-[13px] h-[6px] rounded-full"
                          style={{ right: 12, top: '46%', marginTop: 21, backgroundColor: 'rgba(34,40,46,0.5)' }}
                        />
                      </div>
                      {/* marco del vano */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ border: '14px solid #F6F8F9', boxShadow: 'inset 0 0 0 2px rgba(34,40,46,0.16)' }}
                      />
                    </div>
                  </div>
                  <figcaption className="mt-5">
                    <p className={`${display.className} text-[11px] font-light uppercase tracking-[0.26em]`} style={{ color: C.antrac }}>
                      PVC europeo
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: C.mutL }}>
                      Pregunta por los formatos disponibles.
                    </p>
                  </figcaption>
                </figure>
              </EnVista>
            </div>
          </div>

          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap items-center gap-4 border-t pt-7" style={{ borderColor: C.lineL }}>
              <Btn href={WA_LINK} tone="antrac">
                <IconWa />
                Cotizar mi ventana
              </Btn>
              <p className={`${display.className} text-[10px] md:text-[11px] font-light uppercase tracking-[0.24em]`} style={{ color: C.mutL }}>
                Manda las medidas del vano por WhatsApp
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Cómo cotizar: de tus medidas a tu ventana ── */}
      <section id="trabajo" className="scroll-mt-20" style={{ backgroundColor: C.antrac }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div>
            <Reveal>
              <Rotulo color={C.vidrio} line={C.lineD}>
                Cómo cotizar
              </Rotulo>
              <h2 className="uppercase font-semibold leading-[1.04] text-[clamp(1.9rem,6.2vw,4rem)]" style={{ color: '#FFFFFF' }}>
                De tus medidas
                <br />
                <span style={{ color: C.vidrio }}>a tu ventana.</span>
              </h2>
            </Reveal>
            <ol className="mt-10 flex flex-col">
              {PASOS.map((p, i) => (
                <li key={p.n} className="relative pl-16 md:pl-20 pb-9 last:pb-0">
                  {/* riel que une los pasos */}
                  {i < PASOS.length - 1 && (
                    <span
                      className="absolute left-[23px] md:left-[27px] top-[52px] bottom-0 w-[2px]"
                      style={{ backgroundColor: C.lineD }}
                      aria-hidden="true"
                    />
                  )}
                  {/* número enmarcado con travesaño */}
                  <span
                    className={`${display.className} absolute left-0 top-0 w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center text-[13px] md:text-sm font-medium`}
                    style={{
                      border: '3px solid #F6F8F9',
                      color: '#FFFFFF',
                      boxShadow: 'inset 0 0 0 1px rgba(34,40,46,0)',
                      backgroundImage: 'linear-gradient(90deg, transparent calc(50% - 1px), rgba(246,248,249,0.55) calc(50% - 1px), rgba(246,248,249,0.55) calc(50% + 1px), transparent calc(50% + 1px))',
                    }}
                  >
                    {p.n}
                  </span>
                  <Reveal delay={i * 90}>
                    <h3 className="flex flex-wrap items-center gap-3 uppercase font-semibold text-lg md:text-xl" style={{ color: '#FFFFFF' }}>
                      {p.t}
                    </h3>
                    <p className="mt-2 max-w-md text-sm md:text-base leading-relaxed" style={{ color: C.mutD }}>
                      {p.d}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 4 · La fábrica: se hace aquí ── */}
      <section id="fabrica" className="scroll-mt-20" style={{ backgroundColor: C.vidrio }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <Rotulo color={C.antrac} line="rgba(34,40,46,0.3)">
                  La fábrica
                </Rotulo>
                <h2 className="uppercase font-semibold leading-[1.04] text-[clamp(1.9rem,6.2vw,4rem)]">
                  Hechas en
                  <br />
                  <span style={{ color: C.cielo }}>Puerto Montt.</span>
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(34,40,46,0.78)' }}>
                  El galpón de planchas metálicas de Pasaje Don Justo es la
                  fábrica. Ahí se fabrican las ventanas.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <dl className="mt-8 max-w-md border-t" style={{ borderColor: 'rgba(34,40,46,0.25)' }}>
                  {HORARIO.map((h) => (
                    <div key={h.dia} className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(34,40,46,0.25)' }}>
                      <dt className="text-sm md:text-base font-medium">{h.dia}</dt>
                      <dd className={`${display.className} text-sm md:text-base font-light`}>{h.hora}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <Reveal delay={90} className="order-1 lg:order-2">
              <div className="lg:-mr-8">
                <VentanaFoto
                  src={`${IMG}/fabrica.webp`}
                  alt="El galpón de Econovent en Pasaje Don Justo, Puerto Montt"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  aspect="aspect-[16/11]"
                  position="50% 60%"
                  travesanos={2}
                  caption="El galpón de Pasaje Don Justo"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · Contacto: medidas, mapa y horario ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.pvc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Reveal>
            <Rotulo color={C.cielo} line={C.lineL}>
              Contacto
            </Rotulo>
            <h2 className="uppercase font-semibold leading-[1.04] text-[clamp(1.9rem,6.2vw,3.8rem)]">
              Mándanos las medidas,
              <br />
              <span style={{ color: C.cielo }}>te cotizamos.</span>
            </h2>
            <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
              Mándanos las medidas de tu ventana. Escríbenos
              por WhatsApp y te respondemos con la cotización.
            </p>
            <address className="not-italic mt-8 text-base leading-relaxed">
              <p className="flex items-center gap-2.5 font-medium">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                {BIZ.address}, {BIZ.city}
              </p>
              <p className="mt-1 text-sm" style={{ color: C.mutL }}>
                {BIZ.region}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.cielo, textDecorationColor: 'rgba(42,107,176,0.4)' }}
              >
                <IconWa className="w-[15px] h-[15px]" />
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={WA_LINK} tone="cielo">
                <IconWa />
                Cotiza por WhatsApp
              </Btn>
              <Btn href={MAPS_URL} tone="lineTinta">
                Cómo llegar
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <div
                className="relative w-full aspect-[4/3] min-h-[280px]"
                style={{ backgroundColor: '#F6F8F9', padding: 12, boxShadow: '0 22px 52px rgba(34,40,46,0.18)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: C.lineL, border: `1px solid ${C.lineL}` }}>
                <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                  <p className={`${display.className} text-[10px] font-light uppercase tracking-[0.22em]`} style={{ color: C.mutL }}>
                    Horario
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug">
                    Lun a vie
                    <br />
                    9:00 a 19:00
                  </p>
                </div>
                <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                  <p className={`${display.className} text-[10px] font-light uppercase tracking-[0.22em]`} style={{ color: C.mutL }}>
                    Cotización
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug">
                    Por WhatsApp,
                    <br />
                    con tus medidas
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Cierre: manda las medidas ── */}
      <section style={{ backgroundColor: C.cielo }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p
              className={`${display.className} inline-flex items-center gap-3 text-[10px] md:text-[11px] font-light uppercase tracking-[0.3em] mb-5`}
              style={{ color: 'rgba(255,255,255,0.92)' }}
            >
              <Ventanita color="rgba(255,255,255,0.9)" />
              Cotiza tu ventana
            </p>
            <h2 className="uppercase font-semibold leading-[1.05] text-[clamp(2rem,7.5vw,4.4rem)]" style={{ color: '#FFFFFF' }}>
              ¿Tienes las medidas?
              <br />
              Mándalas.
            </h2>
            <p className="mt-6 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Escríbenos por WhatsApp con las medidas del vano y te
              cotizamos tu ventana de PVC.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK} tone="blanco">
                <IconWa />
                Cotiza por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.antrac }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="ev-display flex items-center gap-2.5 uppercase font-medium text-lg" style={{ color: '#FFFFFF' }}>
                <Ventanita color={C.vidrio} size={15} />
                {BIZ.short}
              </p>
              <p className="text-sm mt-1.5" style={{ color: C.mutD }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,248,249,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(246,248,249,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.vidrio }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
