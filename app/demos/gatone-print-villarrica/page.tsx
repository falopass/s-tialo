import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Abanico } from './abanico'
import { BIZ, WA_LINK, WA_LINK_FOTO, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900' }],
})

// La paleta sale de su letrero pintado a mano: negro tinta, el azul del
// lettering, turquesa, naranja, rojo de la sombra y el papel de enmascarar
// que tapa cada pieza antes de pintar.
const C = {
  tinta: '#101216',
  tinta2: '#0B0D10',
  papel: '#E9DCC3',
  papel2: '#F5EEDA',
  turquesa: '#14A6A0',
  azul: '#2250C4',
  naranja: '#F58220',
  rojo: '#D93A2B',
  rojoTxt: '#A92B1D',
  mutD: 'rgba(233,220,195,0.72)',
  mutD2: 'rgba(233,220,195,0.55)',
  mutL: 'rgba(16,18,22,0.70)',
  mutL2: 'rgba(16,18,22,0.62)',
  lineD: 'rgba(233,220,195,0.18)',
  lineL: 'rgba(16,18,22,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// Borde rasgado de la cinta de enmascarar.
const TORN =
  'polygon(0% 24%, 4% 8%, 9% 19%, 15% 6%, 22% 21%, 30% 9%, 38% 18%, 46% 5%, 55% 19%, 63% 7%, 71% 20%, 80% 8%, 88% 17%, 95% 6%, 100% 16%, 100% 80%, 95% 93%, 88% 82%, 80% 93%, 72% 79%, 63% 92%, 55% 80%, 46% 94%, 38% 82%, 30% 92%, 22% 79%, 15% 94%, 9% 81%, 4% 93%, 0% 79%)'

// La superficie del papel de enmascarar: fibra apenas visible.
const PAPEL_FONDO: CSSProperties = {
  backgroundColor: C.papel,
  backgroundImage:
    'repeating-linear-gradient(97deg, rgba(16,18,22,0.035) 0 2px, transparent 2px 9px), repeating-linear-gradient(3deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 7px)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'gatone-print-villarrica',
  title: 'Gatone Print · Desabolladura y pintura en Villarrica',
  description:
    'Taller de desabolladura y pintura en Villarrica. 5,0 en Google con 19 opiniones. Cotiza con una foto de tu vehículo por WhatsApp, de lunes a viernes.',
  image: `${IMG}/frente-azul.webp`,
})

const NAV_LINKS = [
  { label: 'Cotizar', href: '#cotizar' },
  { label: 'El proceso', href: '#proceso' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'El taller', href: '#taller' },
]

/** La cinta de enmascarar: franja de papel con bordes rasgados. */
function Cinta({
  className = '',
  color = 'rgba(226,211,176,0.92)',
  style,
}: {
  className?: string
  color?: string
  style?: CSSProperties
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block ${className}`}
      style={{
        backgroundColor: color,
        backgroundImage:
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.16) 0 2px, transparent 2px 7px)',
        clipPath: TORN,
        ...style,
      }}
    />
  )
}

/** Separador entre secciones: una cinta que suelta el papel. */
function CintaDivisor({ color, gira = -1.4 }: { color?: string; gira?: number }) {
  return (
    <div aria-hidden="true" className="relative z-10 -my-3 h-8 overflow-visible">
      <Cinta
        className="absolute left-[-4%] right-[-4%] top-1/2 h-9 -translate-y-1/2"
        color={color}
        style={{ transform: `translateY(-50%) rotate(${gira}deg)` }}
      />
    </div>
  )
}

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
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
      style={{ color }}
    >
      <Cinta className="h-[9px] w-8 shrink-0" color={color} />
      {children}
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
  tone: 'naranja' | 'lineD' | 'lineL' | 'tinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'naranja'
      ? { backgroundColor: C.naranja, color: C.tinta }
      : tone === 'tinta'
        ? { backgroundColor: C.tinta, color: C.papel }
        : tone === 'lineD'
          ? { border: '1.5px solid rgba(233,220,195,0.55)', color: C.papel }
          : { border: `1.5px solid rgba(16,18,22,0.45)`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="gp-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** Una línea del titular: sube dentro de su propio clip. */
function Linea({
  children,
  d = 0,
  className = '',
  style,
}: {
  children: React.ReactNode
  d?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <span className="block overflow-hidden pb-[0.07em] -mb-[0.07em]">
      <span className={`gp-linea block ${className}`} style={{ animationDelay: `${d}ms`, ...style }}>
        {children}
      </span>
    </span>
  )
}

const PASOS = [
  {
    n: '01',
    name: 'Mandas la foto',
    desc: 'Por WhatsApp envías tu nombre junto a una foto del vehículo a reparar.',
  },
  {
    n: '02',
    name: 'Te contactamos',
    desc: 'Nos contactamos lo antes posible contigo para conversar el trabajo.',
  },
  {
    n: '03',
    name: 'Coordinas la visita',
    desc: 'Acuerdan la reparación y llevas tu vehículo al taller en Villarrica.',
  },
] as const

const PROCESO = [
  { src: 'parachoques-danado.webp', w: 1200, h: 900, tag: 'Así llega', alt: 'Parachoques negro con pintura saltada, el punto de partida de una reparación' },
  { src: 'parachoques-blanco.webp', w: 1200, h: 900, tag: 'Enmascarado', alt: 'Parte trasera blanca con el foco desarmado y papel de enmascarar' },
  { src: 'puerta-blanca.webp', w: 1200, h: 898, tag: 'Imprimada', alt: 'Puerta blanca imprimada sobre caballetes' },
  { src: 'camioneta-gris.webp', w: 1200, h: 898, tag: 'En base', alt: 'Camioneta gris con base de pintura, enmascarada y rueda cubierta' },
] as const

export default function GatonePrintPage() {
  return (
    <div
      className={`${body.className} gp-page min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.tinta, color: C.papel }}
    >
      <style>{`
        html { scroll-behavior: auto }

        /* Capas de pintura: la página arranca cubierta por papel de
           enmascarar. La cinta se despega y detrás entra el color en tres
           pasadas de pistola (cada capa se retira por clip-path, en
           direcciones alternadas como va y viene la pistola). */
        @keyframes gp-despega {
          from { transform: translateX(0) rotate(-4deg) }
          to { transform: translateX(130%) rotate(-4deg) }
        }
        .gp-tape { animation: gp-despega 0.6s cubic-bezier(0.55,0.05,0.6,1) 0.2s both }

        @keyframes gp-peel-r {
          from { clip-path: polygon(-6% -6%, 106% -6%, 106% 106%, -6% 106%) }
          to { clip-path: polygon(122% -6%, 168% -6%, 150% 106%, 104% 106%) }
        }
        @keyframes gp-peel-l {
          from { clip-path: polygon(-6% -6%, 106% -6%, 106% 106%, -6% 106%) }
          to { clip-path: polygon(-50% -6%, -4% -6%, -22% 106%, -68% 106%) }
        }
        .gp-papel { animation: gp-peel-r 0.5s cubic-bezier(0.62,0.02,0.4,1) 0.65s both }
        .gp-c1 { animation: gp-peel-l 0.45s cubic-bezier(0.62,0.02,0.4,1) 1.05s both }
        .gp-c2 { animation: gp-peel-r 0.4s cubic-bezier(0.62,0.02,0.4,1) 1.4s both }
        .gp-c3 { animation: gp-peel-l 0.35s cubic-bezier(0.62,0.02,0.4,1) 1.7s both }

        @keyframes gp-zoom { from { transform: scale(1.06) } to { transform: scale(1) } }
        .gp-foto { animation: gp-zoom 3.4s cubic-bezier(0.25,0.6,0.3,1) 0.2s both }

        @keyframes gp-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .gp-linea { animation: gp-linea 0.8s cubic-bezier(0.22,0.68,0.26,1) both }
        @keyframes gp-up { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .gp-up { animation: gp-up 0.85s cubic-bezier(0.22,0.68,0.26,1) both }

        .gp-btn { transition: transform .18s ease, filter .18s ease }
        .gp-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .gp-btn:active { transform: scale(.97) }
        .gp-page a:focus-visible, .gp-page button:focus-visible { outline: 3px solid ${C.naranja}; outline-offset: 3px }
        .gp-ficha { transition: transform .3s cubic-bezier(0.25,0.6,0.3,1), box-shadow .3s ease }
        .gp-ficha:hover { transform: translateY(-4px) rotate(0deg) !important }

        @media (prefers-reduced-motion: reduce) {
          .gp-tape, .gp-papel, .gp-c1, .gp-c2, .gp-c3 { display: none !important }
          .gp-foto, .gp-linea, .gp-up { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="uppercase tracking-[0.04em]">
            Gatone <span style={{ color: C.turquesa }}>Print</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(16,18,22,0.92)',
          ink: C.papel,
          line: C.lineD,
          btnBg: C.naranja,
          btnInk: C.tinta,
        }}
      />

      {/* ── 1 · Hero: el papel se despega y entra el color ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.tinta }}
      >
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/frente-azul.webp`}
            alt="Frente de un auto celeste enmascarado con papel, listo para pintar en Gatone Print"
            fill
            priority
            sizes="100vw"
            className="object-cover gp-foto"
            style={{ objectPosition: '50% 42%' }}
          />
        </div>
        {/* velo para el texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,18,22,0.55) 0%, rgba(16,18,22,0.30) 42%, rgba(16,18,22,0.92) 100%)',
          }}
          aria-hidden="true"
        />

        {/* capas de pintura que cubren el hero */}
        <div className="gp-c3 absolute inset-0 z-[3]" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
        <div className="gp-c2 absolute inset-0 z-[4]" style={{ backgroundColor: C.azul }} aria-hidden="true" />
        <div className="gp-c1 absolute inset-0 z-[5]" style={{ backgroundColor: C.turquesa }} aria-hidden="true" />
        <div className="gp-papel absolute inset-0 z-[6]" style={PAPEL_FONDO} aria-hidden="true" />
        <div className="gp-tape absolute left-[-12%] right-[-12%] top-[34%] z-[7] h-14 md:h-20" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              backgroundColor: 'rgba(222,206,172,0.96)',
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.14) 0 3px, transparent 3px 9px)',
              clipPath: TORN,
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            }}
          />
        </div>

        <div className="relative z-[2] w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-9 md:pb-12">
          <p
            className="gp-up flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
            style={{ color: C.naranja, animationDelay: '1.95s' }}
          >
            <span className="h-px w-8" style={{ backgroundColor: 'rgba(245,130,32,0.6)' }} aria-hidden="true" />
            Villarrica · Desabolladura y pintura
          </p>
          <h1
            className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(3.2rem,14vw,7rem)]`}
            style={{ color: C.papel }}
          >
            <Linea d={2050}>Del golpe</Linea>
            <Linea d={2180}>
              al{' '}
              <span style={{ color: C.naranja, textShadow: `0.055em 0.055em 0 ${C.rojo}` }}>
                brillo.
              </span>
            </Linea>
          </h1>
          <p
            className="gp-up mt-5 max-w-md text-[15px] md:text-lg leading-relaxed"
            style={{ color: 'rgba(233,220,195,0.9)', animationDelay: '2.32s' }}
          >
            Taller de desabolladura y pintura en Villarrica; también
            mecánica y cambio de aceite. Cotiza con una foto de tu
            vehículo por WhatsApp.
          </p>
          <div className="gp-up mt-7 flex flex-col sm:flex-row gap-3" style={{ animationDelay: '2.42s' }}>
            <Btn href={WA_LINK_FOTO} tone="naranja">
              <WaIcon />
              Cotiza con una foto por WhatsApp
            </Btn>
            <Btn href="#proceso" tone="lineD" external={false}>
              Ver el trabajo
            </Btn>
          </div>
        </div>

        {/* barra de datos al pie del hero */}
        <div
          className="gp-up relative z-[2] border-t"
          style={{
            borderColor: 'rgba(233,220,195,0.2)',
            backgroundColor: 'rgba(11,13,16,0.68)',
            backdropFilter: 'blur(6px)',
            animationDelay: '2.55s',
          }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: 'rgba(233,220,195,0.8)' }}>
            <span style={{ color: C.naranja }}>5,0 en Google · 19 opiniones</span>
            <span>Lun a Vie · 10:00 a 18:00</span>
            <span>Solo WhatsApp</span>
          </div>
        </div>
      </section>

      {/* ── 2 · Cómo cotizar: su respuesta automática, hecha pasos ── */}
      <section id="cotizar" className="scroll-mt-20 relative" style={{ ...PAPEL_FONDO, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <Rotulo color={C.azul} line={C.lineL}>
                Así se cotiza
              </Rotulo>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.3rem,8.5vw,4.3rem)]`}
                style={{ color: C.tinta }}
              >
                Tu nombre y{' '}
                <span style={{ color: C.azul, textShadow: `0.045em 0.045em 0 rgba(217,58,43,0.55)` }}>
                  una foto.
                </span>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] md:text-base leading-relaxed" style={{ color: C.mutL }}>
                El taller lo dice en su propio WhatsApp: para cotizar
                desabolladura y pintura solo hacen falta tu nombre y una
                foto del vehículo a reparar.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK_FOTO} tone="naranja">
                  <WaIcon />
                  Mandar la foto por WhatsApp
                </Btn>
              </div>
            </Reveal>
            <ol className="grid gap-4 md:gap-5">
              {PASOS.map((p, i) => (
                <li key={p.n}>
                  <Reveal delay={i * 110}>
                    <div
                      className="gp-ficha relative px-6 pt-7 pb-6 md:px-8"
                      style={{
                        backgroundColor: C.papel2,
                        boxShadow: '0 14px 34px rgba(16,18,22,0.10)',
                        transform: `rotate(${i === 1 ? 0.7 : -0.7}deg)`,
                      }}
                    >
                      <Cinta
                        className="absolute -top-2 left-6 h-5 w-16"
                        color={i === 0 ? 'rgba(20,166,160,0.85)' : i === 1 ? 'rgba(34,80,196,0.8)' : 'rgba(245,130,32,0.85)'}
                        style={{ transform: `rotate(${i === 1 ? -2.5 : 2.5}deg)` }}
                      />
                      <div className="flex items-start gap-4 md:gap-6">
                        <span
                          className={`${display.className} font-extrabold leading-none text-[2.6rem] md:text-5xl shrink-0`}
                          style={{ color: C.azul, textShadow: `0.06em 0.06em 0 rgba(217,58,43,0.45)` }}
                          aria-hidden="true"
                        >
                          {p.n}
                        </span>
                        <div>
                          <h3 className={`${display.className} font-bold uppercase tracking-[0.02em] text-xl md:text-2xl`}>
                            {p.name}
                          </h3>
                          <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed" style={{ color: C.mutL }}>
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CintaDivisor gira={-1.4} />

      {/* ── 3 · El proceso: papel, lija y pistola ── */}
      <section id="proceso" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <Reveal>
              <Rotulo color={C.turquesa} line={C.lineD}>
                El proceso
              </Rotulo>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.3rem,8.5vw,4.3rem)]`}
                style={{ color: C.papel }}
              >
                Primero el papel,
                <br />
                <span style={{ color: C.turquesa, textShadow: `0.045em 0.045em 0 ${C.rojo}` }}>
                  después el color.
                </span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutD }}>
                La pintura buena se nota en lo que no se ve: cada pieza
                se enmascara, se prepara y se pinta por capas. Así se
                trabaja en el taller.
              </p>
            </Reveal>
            <Reveal delay={140} className="justify-self-start lg:justify-self-end">
              <Abanico colors={[C.turquesa, C.azul, C.naranja, C.rojo]} size={150} />
            </Reveal>
          </div>

          {/* mosaico del taller */}
          <div className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
            <Reveal className="col-span-2 lg:col-span-7 lg:row-span-2">
              <figure className="relative">
                <Cinta className="absolute -top-2 left-8 z-10 h-5 w-20 rotate-[-3deg]" color="rgba(34,80,196,0.8)" />
                <div className="relative overflow-hidden border" style={{ borderColor: 'rgba(233,220,195,0.25)' }}>
                  <Image
                    src={`${IMG}/taller-techo.webp`}
                    alt="Auto enmascarado bajo el techo de madera del taller"
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="block w-full object-cover aspect-[4/3] lg:aspect-auto lg:h-full"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutD2 }}>
                  <span>Bajo el techo del taller</span>
                  <span>Villarrica</span>
                </figcaption>
              </figure>
            </Reveal>
            {PROCESO.map((f, i) => (
              <Reveal
                key={f.src}
                delay={90 + i * 80}
                className={
                  i === 0
                    ? 'col-span-1 lg:col-span-5'
                    : i === 1
                      ? 'col-span-1 lg:col-span-5'
                      : i === 2
                        ? 'col-span-1 lg:col-span-7'
                        : 'col-span-1 lg:col-span-5'
                }
              >
                <figure className="relative">
                  <Cinta
                    className={`absolute -top-2 z-10 h-5 w-16 ${i % 2 === 0 ? 'left-6 rotate-[3deg]' : 'right-6 rotate-[-3deg]'}`}
                    color={i % 2 === 0 ? 'rgba(20,166,160,0.85)' : 'rgba(245,130,32,0.85)'}
                  />
                  <div className="relative overflow-hidden border" style={{ borderColor: 'rgba(233,220,195,0.25)' }}>
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      width={f.w}
                      height={f.h}
                      sizes="(min-width: 1024px) 40vw, 50vw"
                      className="block w-full object-cover aspect-[4/3]"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutD2 }}>
                    {f.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · El acabado: el color de vuelta ── */}
      <section id="acabado" className="scroll-mt-20 relative" style={{ ...PAPEL_FONDO, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="relative">
                {/* la granate, enmarcada como la pieza terminada */}
                <figure className="relative">
                  <div className="border-[10px] shadow-2xl" style={{ borderColor: C.tinta }}>
                    <Image
                      src={`${IMG}/puerta-granate.webp`}
                      alt="Puerta granate recién pintada, con el reflejo del brillo"
                      width={1200}
                      height={675}
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      className="block w-full object-cover aspect-[16/10]"
                    />
                  </div>
                  <Cinta className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-24 rotate-[-1.5deg]" color="rgba(217,58,43,0.85)" />
                  <figcaption className="mt-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutL2 }}>
                    Recién pintada
                  </figcaption>
                </figure>
                {/* parachoques terminado, solapado */}
                <figure
                  className="absolute -bottom-10 -right-3 md:-right-6 w-[42%] md:w-[38%] shadow-2xl"
                  style={{ transform: 'rotate(2.5deg)' }}
                >
                  <div className="border-[7px]" style={{ borderColor: C.papel2 }}>
                    <Image
                      src={`${IMG}/parachoques-negro.webp`}
                      alt="Parachoques negro reparado y pintado"
                      width={675}
                      height={1200}
                      sizes="(min-width: 1024px) 20vw, 42vw"
                      className="block w-full object-cover aspect-[3/4]"
                    />
                  </div>
                </figure>
                {/* el siguiente en la fila */}
                <figure
                  className="absolute -top-8 left-0 md:-left-5 w-[38%] md:w-[34%] shadow-xl"
                  style={{ transform: 'rotate(-3deg)' }}
                >
                  <div className="relative border-[6px]" style={{ borderColor: C.papel2 }}>
                    <Image
                      src={`${IMG}/frente-azul.webp`}
                      alt="Frente celeste enmascarado, listo para pintar"
                      width={1200}
                      height={675}
                      sizes="(min-width: 1024px) 18vw, 38vw"
                      className="block w-full object-cover aspect-[4/3]"
                      style={{ objectPosition: '50% 62%' }}
                    />
                    <figcaption className="absolute bottom-1.5 left-1.5 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em]" style={{ backgroundColor: 'rgba(11,13,16,0.9)', color: 'rgba(233,220,195,0.9)' }}>
                      El siguiente en la fila
                    </figcaption>
                  </div>
                </figure>
              </div>
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <Rotulo color={C.rojoTxt} line={C.lineL}>
                El acabado
              </Rotulo>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.3rem,8.5vw,4.3rem)]`}
                style={{ color: C.tinta }}
              >
                Que no se note{' '}
                <span style={{ color: C.rojoTxt, textShadow: `0.045em 0.045em 0 rgba(34,80,196,0.4)` }}>
                  el arreglo.
                </span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutL }}>
                El objetivo es simple: que nadie pueda decir dónde estuvo
                el golpe. Las piezas salen del taller con el color y el
                brillo de antes, como escribió un cliente en su reseña.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="tinta">
                  <WaIcon />
                  Cotizar mi reparación
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CintaDivisor gira={1.2} />

      {/* ── 5 · También mecánica ── */}
      <section id="mecanica" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-9 lg:gap-14 items-center">
          <Reveal>
            <figure className="relative">
              <Cinta className="absolute -top-2 right-8 z-10 h-5 w-16 rotate-[2.5deg]" color="rgba(245,130,32,0.85)" />
              <div className="relative overflow-hidden border" style={{ borderColor: 'rgba(233,220,195,0.25)' }}>
                <Image
                  src={`${IMG}/frontal-abierto.webp`}
                  alt="Auto con el frente desarmado y el motor a la vista en el taller"
                  width={1200}
                  height={904}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="block w-full object-cover aspect-[4/3]"
                />
              </div>
              <figcaption className="mt-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutD2 }}>
                Motor a la vista
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <Rotulo color={C.naranja} line={C.lineD}>
              También mecánica
            </Rotulo>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2rem,7vw,3.6rem)]`}
              style={{ color: C.papel }}
            >
              No todo es lata{' '}
              <span style={{ color: C.naranja, textShadow: `0.045em 0.045em 0 ${C.rojo}` }}>
                y pintura.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutD }}>
              Las reseñas también hablan de reparación mecánica, cambios
              de aceite que no demoran y orientación para encontrar
              repuestos.
            </p>
            <div className="mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.naranja, textDecorationColor: 'rgba(245,130,32,0.45)' }}
              >
                <WaIcon className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Opiniones: el 5,0 con nombre ── */}
      <section id="opiniones" className="scroll-mt-20 relative" style={{ ...PAPEL_FONDO, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <Rotulo color={C.azul} line={C.lineL}>
                Opiniones
              </Rotulo>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.3rem,8.5vw,4rem)]`}
                style={{ color: C.tinta }}
              >
                Impecable,{' '}
                <span style={{ color: C.rojoTxt, textShadow: `0.045em 0.045em 0 rgba(217,58,43,0.5)` }}>
                  dicen.
                </span>
              </h2>
              <div className="mt-7 flex items-end gap-5">
                <p
                  className={`${display.className} font-extrabold leading-[0.85] text-[5.4rem] md:text-[7rem]`}
                  style={{ color: C.azul, textShadow: `0.055em 0.055em 0 rgba(217,58,43,0.5)` }}
                >
                  {BIZ.rating}
                </p>
                <div className="pb-2 md:pb-4">
                  <Stars value={BIZ.ratingValue} color={C.naranja} size={18} />
                  <p className="mt-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em]" style={{ color: C.mutL }}>
                    {BIZ.reviews} opiniones
                    <br />
                    en Google
                  </p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.azul, textDecorationColor: 'rgba(34,80,196,0.35)' }}
              >
                Ver la ficha real en Google
              </a>
              <div className="mt-8 hidden md:block">
                <Abanico colors={[C.turquesa, C.azul, C.naranja, C.rojo]} size={120} />
              </div>
            </Reveal>
            <div className="grid gap-4 md:gap-5">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={i * 110}>
                  <blockquote
                    className="relative px-6 pt-7 pb-5 md:px-8"
                    style={{
                      backgroundColor: C.papel2,
                      boxShadow: '0 12px 30px rgba(16,18,22,0.09)',
                      transform: `rotate(${i === 1 ? 0.6 : -0.6}deg)`,
                    }}
                  >
                    <Cinta
                      className="absolute -top-2 left-1/2 -translate-x-1/2 h-5 w-16"
                      color={i === 0 ? 'rgba(20,166,160,0.85)' : i === 1 ? 'rgba(34,80,196,0.8)' : 'rgba(245,130,32,0.85)'}
                    />
                    <p className="text-[15px] md:text-base leading-relaxed" style={{ color: C.tinta }}>
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <footer className="mt-3 flex items-center justify-between gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em]" style={{ color: C.mutL2, fontVariant: 'all-small-caps' }}>
                      <span style={{ color: C.tinta }}>{r.author}</span>
                      <span>Reseña en Google</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CintaDivisor gira={-1} />

      {/* ── 7 · El taller: horario, pin y el letrero ── */}
      <section id="taller" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <Rotulo color={C.turquesa} line={C.lineD}>
              El taller
            </Rotulo>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.3rem,8.5vw,4.3rem)]`}
              style={{ color: C.papel }}
            >
              En Villarrica,
              <br />
              <span style={{ color: C.turquesa, textShadow: `0.045em 0.045em 0 ${C.rojo}` }}>
                de lunes a viernes.
              </span>
            </h2>
            <dl className="mt-8 border-t" style={{ borderColor: C.lineD }}>
              <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineD }}>
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] mt-0.5 shrink-0" fill="none" stroke={C.turquesa} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
                <div className="flex-1">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.turquesa }}>
                    Horario
                  </dt>
                  <dd className="mt-1.5 text-sm md:text-base">
                    {HORARIO.map((h) => (
                      <span key={h.dias} className="flex justify-between gap-6 max-w-[300px]">
                        <span>{h.dias}</span>
                        <span style={{ color: h.horas === 'Cerrado' ? C.mutD2 : C.papel }}>{h.horas}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineD }}>
                <WaIcon className="w-[18px] h-[18px] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.turquesa }}>
                    WhatsApp
                  </dt>
                  <dd className="mt-1.5 text-sm md:text-base">
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4 decoration-2" style={{ color: C.papel, textDecorationColor: 'rgba(20,166,160,0.5)' }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineD }}>
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] mt-0.5 shrink-0" fill="none" stroke={C.turquesa} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
                <div className="flex-1">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.turquesa }}>
                    Ubicación
                  </dt>
                  <dd className="mt-1.5 text-sm md:text-base" style={{ color: C.mutD }}>
                    {BIZ.city}, {BIZ.region}. El pin del mapa te deja en
                    el taller.
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="naranja">
                <WaIcon />
                Escribir por WhatsApp
              </Btn>
              <Btn href={MAPS_URL} tone="lineD">
                Cómo llegar
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="relative border" style={{ borderColor: 'rgba(233,220,195,0.25)' }}>
                <div className="relative aspect-[4/3]">
                  <LazyMap
                    title="Mapa: Gatone Print, Villarrica"
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="px-4 py-3 border-t flex items-center justify-between gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ borderColor: C.lineD, color: C.mutD2 }}>
                  <span>Cómo llegar</span>
                  <span>{BIZ.city}</span>
                </p>
              </div>
              {/* el letrero pintado a mano, como sello del taller */}
              <figure
                className="absolute -top-10 right-4 md:-top-12 md:right-6 w-[38%] max-w-[190px] shadow-2xl"
                style={{ transform: 'rotate(4deg)' }}
              >
                <Cinta className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-3deg]" color="rgba(226,211,176,0.9)" />
                <div className="overflow-hidden rounded-full border-4" style={{ borderColor: C.papel }}>
                  <Image
                    src={`${IMG}/letrero.webp`}
                    alt="Letrero de madera pintado a mano: Desabolladura, Pintura, Gatone Print"
                    width={1200}
                    height={1194}
                    sizes="190px"
                    className="block w-full object-cover aspect-square"
                  />
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.tinta2, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p
                className={`${display.className} font-extrabold uppercase tracking-[0.03em] text-2xl md:text-3xl leading-none`}
                style={{ color: C.papel, textShadow: `0.06em 0.06em 0 ${C.rojo}` }}
              >
                Gatone <span style={{ color: C.turquesa }}>Print</span>
              </p>
              <p className="text-xs mt-1.5" style={{ color: C.mutD2 }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(233,220,195,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(233,220,195,0.85)' }}>
                Maps
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(233,220,195,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: C.mutD2 }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.papel }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.naranja }}
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
