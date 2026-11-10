import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Corte, Cuenta } from './anim'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, RESENAS, IMG } from './content'

// DM Serif Display para los titulares (la voz del salón clásico) y
// Libre Franklin para el corrido: oficio y prolijidad.
const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/libre-franklin/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})

// La paleta sale del propio salón: nogal de los marcos y el mesón,
// piedra del muro, negro de las capas, marfil del paño y latón del
// filo (solo líneas finas y detalles, nunca texto chico sobre claro).
const C = {
  nogal: '#5A3A22',
  nogalOsc: '#402A18',
  piedra: '#B9AE9F',
  piedraClara: '#D7CFC2',
  capa: '#141414',
  capa2: '#1D1B19',
  marfil: '#F4EFE6',
  marfil2: '#EBE3D4',
  laton: '#B08D57',
  latonClaro: '#D9BC85',
  ink: '#141414',
  mutL: 'rgba(20,20,20,0.70)',
  mutP: 'rgba(20,20,20,0.78)', // muted sobre piedra
  mutD: 'rgba(244,239,230,0.74)',
  lineL: 'rgba(20,20,20,0.16)',
  lineD: 'rgba(244,239,230,0.18)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'peluqueria-valentino-valdivia',
  title: 'Peluquería Valentino · Peluquería en Valdivia',
  description:
    'Peluquería en Av. Alemania 400, Valdivia: cortes de pelo con trabajo minucioso en un salón clásico donde los clientes vuelven por años. 4,9 en Google con 139 opiniones. Agenda tu hora por WhatsApp.',
  image: '/demos/peluqueria-valentino-valdivia/salon.webp',
})

const NAV_LINKS = [
  { label: 'El oficio', href: '#oficio' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'El salón', href: '#salon' },
  { label: 'Visítanos', href: '#visita' },
]

const FICHA: { t: string; d: string; href?: string }[] = [
  { t: 'Dirección', d: `${BIZ.address}, ${BIZ.city}`, href: MAPS_URL },
  { t: 'WhatsApp', d: BIZ.phoneDisplay, href: WA_LINK },
  { t: 'Horario', d: 'Lun a Vie 10:00 a 18:30 · Sáb 10:00 a 13:30' },
  { t: 'El servicio', d: 'Cortes de pelo · hombres y mujeres' },
]

const OFICIO = [
  {
    src: `${IMG}/corte.webp`,
    alt: 'El peluquero cortando el pelo de un cliente, de pie junto al sillón del salón',
    n: 'Nº 01',
    tag: 'El trabajo',
  },
  {
    src: `${IMG}/corte-tijera.webp`,
    alt: 'Corte a tijera y peine, visto por detrás del cliente',
    n: 'Nº 02',
    tag: 'La tijera',
  },
  {
    src: `${IMG}/corte-detalle.webp`,
    alt: 'Detalle del acabado de un corte en la nuca',
    n: 'Nº 03',
    tag: 'El acabado',
  },
]

const DETALLES_SALON = [
  'Vigas de madera a la vista',
  'Muro de piedra',
  'Espejos con marco de madera',
  'Sillones de barbería',
  'Cuadros y su letrero colgado',
]

/** El ritmo de las vigas: bandas horizontales suaves sobre los bloques oscuros. */
const VIGAS: CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(180deg, rgba(244,239,230,0.030) 0px, rgba(244,239,230,0.030) 22px, transparent 22px, transparent 76px)',
}

function Rotulo({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
      style={{ color: light ? C.latonClaro : C.nogal }}
    >
      <span className="block h-px w-8 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** La línea del corte: un trazo recto de latón con la tijera al centro. */
function CorteLinea({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: 'rgba(176,141,87,0.55)' }} />
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.laton} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="6" cy="18" r="2.4" />
        <path d="M8.4 7.6 20 19 M8.4 16.4 20 5" />
      </svg>
      <span className="h-px flex-1" style={{ backgroundColor: 'rgba(176,141,87,0.55)' }} />
    </div>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
}: {
  children: React.ReactNode
  href?: string
  tone: 'nogal' | 'linea' | 'lineaD' | 'laton'
}) {
  const st: CSSProperties =
    tone === 'nogal'
      ? { backgroundColor: C.nogal, color: '#FFFFFF', border: `1.5px solid rgba(217,188,133,0.6)` }
      : tone === 'laton'
        ? { backgroundColor: C.laton, color: C.capa }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.nogal}`, color: C.nogal }
          : { border: '1.5px solid rgba(244,239,230,0.55)', color: C.marfil }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="vx-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-bold tracking-wide tap-44"
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

export default function PeluqueriaValentinoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.marfil, color: C.ink }}
    >
      <style>{`
        /* «El corte»: una línea de latón cruza el hero en diagonal;
           justo después la foto se abre en dos mitades a lo largo de
           esa diagonal, se desplaza unos píxeles y vuelve a juntarse.
           Precisión de tijera. */
        @keyframes vx-filo { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .vx-filo { animation: vx-filo .6s cubic-bezier(.55,.1,.3,1) .2s both }
        @keyframes vx-arriba {
          0%, 24% { transform: translate(0,0) }
          50% { transform: translate(-18px,4px) }
          80%, 100% { transform: translate(0,0) }
        }
        .vx-arriba { animation: vx-arriba 1.35s cubic-bezier(.55,.05,.22,1) .65s both }
        @keyframes vx-abajo {
          0%, 24% { transform: translate(0,0) }
          50% { transform: translate(18px,-4px) }
          80%, 100% { transform: translate(0,0) }
        }
        .vx-abajo { animation: vx-abajo 1.35s cubic-bezier(.55,.05,.22,1) .65s both }
        @keyframes vx-sube {
          from { opacity: 0; transform: translateY(20px) }
          to { opacity: 1; transform: translateY(0) }
        }
        .vx-sube { animation: vx-sube .8s cubic-bezier(.22,.68,.26,1) var(--vx-d,.8s) both }
        @keyframes vx-titulo {
          from { transform: translateY(108%) }
          to { transform: translateY(0) }
        }
        .vx-titulo { animation: vx-titulo .85s cubic-bezier(.22,.68,.26,1) .8s both }
        .vx-btn { transition: transform .18s ease, filter .18s ease }
        .vx-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .vx-btn:active { transform: scale(.97) }
        .vx-page a:focus-visible { outline: 3px solid ${C.laton}; outline-offset: 3px }
        .vx-page a:focus:not(:focus-visible) { outline: none }
        @media (prefers-reduced-motion: reduce) {
          .vx-filo { animation: none !important; stroke-dashoffset: 0 !important }
          .vx-arriba, .vx-abajo, .vx-sube, .vx-titulo { animation: none !important; transform: none !important; opacity: 1 !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.04em]">{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(244,239,230,0.95)',
          ink: C.ink,
          line: C.lineL,
          btnBg: C.nogal,
          btnInk: '#F4EFE6',
        }}
      />

      <div className="vx-page">
        {/* ── 1 · Hero: la foto del salón se abre por la línea del corte ── */}
        <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.capa }}>
          {/* la foto partida en dos por la diagonal (0,66%) a (100%,46%) */}
          <div className="absolute inset-0" aria-hidden="false">
            <div
              className="vx-arriba absolute inset-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 46.3%, 0 66.3%)' }}
            >
              <Image
                src={`${IMG}/salon.webp`}
                alt="Salón de Peluquería Valentino: vigas de madera, muro de piedra, espejos con marco de madera y sillones de barbería"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: '50% 42%' }}
              />
            </div>
            <div
              className="vx-abajo absolute inset-0"
              style={{ clipPath: 'polygon(0 66.3%, 100% 46.3%, 100% 100%, 0 100%)' }}
            >
              <Image
                src={`${IMG}/salon.webp`}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: '50% 42%' }}
              />
            </div>
          </div>
          {/* velo para el texto */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,20,20,0.52) 0%, rgba(20,20,20,0.10) 38%, rgba(20,20,20,0.34) 62%, rgba(20,20,20,0.88) 100%)',
            }}
            aria-hidden="true"
          />
          {/* la línea del corte: coincide exacta con la diagonal que parte la foto */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="66"
              x2="100"
              y2="46"
              stroke={C.latonClaro}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              pathLength={100}
              strokeDasharray={100}
              className="vx-filo"
            />
          </svg>

          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-36">
            <p
              className="vx-sube text-[10px] md:text-xs font-bold uppercase tracking-[0.34em] mb-4"
              style={{ color: C.latonClaro, '--vx-d': '0.7s' } as CSSProperties}
            >
              Valdivia · Av. Alemania 400
            </p>
            <h1
              className={`${display.className} leading-[1.02] tracking-[0.005em] text-[clamp(2.5rem,9vw,5rem)] mb-5`}
              style={{ color: '#FFFFFF' }}
            >
              <span className="block overflow-hidden">
                <span className="vx-titulo block">El corte de siempre,</span>
              </span>
              <span className="block overflow-hidden">
                <span className="vx-titulo block italic" style={{ animationDelay: '0.95s', color: C.latonClaro }}>
                  hecho con oficio.
                </span>
              </span>
            </h1>
            <p
              className="vx-sube text-base md:text-lg leading-relaxed max-w-lg mb-7"
              style={{ color: 'rgba(244,239,230,0.90)', '--vx-d': '1.15s' } as CSSProperties}
            >
              Cortes de pelo con trabajo minucioso, en un salón clásico
              donde los clientes vuelven por años.
            </p>
            <div className="vx-sube flex flex-wrap items-center gap-3 mb-6" style={{ '--vx-d': '1.3s' } as CSSProperties}>
              <BtnWa tone="nogal">
                <WaIcon />
                Agenda tu hora por WhatsApp
              </BtnWa>
              <BtnWa href="#salon" tone="lineaD">
                Ver el salón
              </BtnWa>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="vx-sube inline-flex items-center gap-2.5 tap-44"
              style={{ '--vx-d': '1.45s' } as CSSProperties}
            >
              <Stars value={BIZ.ratingValue} color={C.latonClaro} size={16} />
              <span className="text-sm font-bold text-white">{BIZ.rating}</span>
              <span className="text-sm" style={{ color: C.mutD }}>
                · {BIZ.reviews} opiniones en Google
              </span>
            </a>
          </div>

          {/* barra de datos al pie del hero */}
          <div className="relative border-t" style={{ borderColor: C.lineD, backgroundColor: 'rgba(20,20,20,0.62)' }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em]" style={{ color: C.mutD }}>
              <span>{BIZ.address} · {BIZ.city}</span>
              <span>Lun a Vie 10:00 a 18:30 · Sáb 10:00 a 13:30</span>
              <span className="hidden sm:inline">Cortes de pelo · hombres y mujeres</span>
            </div>
          </div>
        </section>

        {/* ── Ficha rápida sobre piedra ── */}
        <section aria-label="Datos del local" style={{ backgroundColor: C.piedra }}>
          <dl className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
            {FICHA.map((f) => (
              <div key={f.t} className="border-l-[3px] pl-4" style={{ borderColor: C.nogal }}>
                <dt className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: 'rgba(20,20,20,0.62)' }}>
                  {f.t}
                </dt>
                <dd className="text-sm md:text-base font-semibold leading-snug" style={{ color: C.ink }}>
                  {f.href ? (
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                      style={{ textDecorationColor: C.nogal }}
                    >
                      {f.d}
                    </a>
                  ) : (
                    f.d
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── 2 · El oficio: tres fotos con apertura de tijera ── */}
        <section id="oficio" className="scroll-mt-20 relative" style={{ backgroundColor: C.capa, ...VIGAS }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo light>El oficio</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.04]`} style={{ color: C.marfil }}>
                  Tijera y máquina,
                  <br />
                  <em style={{ color: C.latonClaro }}>con la calma que pide.</em>
                </h2>
                <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutD }}>
                  Cortes de pelo para hombres y mujeres, hechos con el
                  trabajo minucioso que describen sus propios clientes.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-start">
              {OFICIO.map((f, i) => (
                <figure key={f.src} className={`${i === 0 ? 'col-span-2 md:col-span-1' : ''} ${i === 1 ? 'md:mt-10' : ''} ${i === 2 ? 'md:mt-20' : ''}`}>
                  <Corte delay={i * 140}>
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ border: `1px solid ${C.lineD}` }}>
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 768px) 33vw, 50vw"
                        className="object-cover"
                      />
                      <span
                        className="absolute top-0 left-0 font-mono text-[10px] font-bold px-2.5 py-1.5 tracking-[0.14em]"
                        style={{ backgroundColor: C.capa, color: C.latonClaro }}
                        aria-hidden="true"
                      >
                        {f.n}
                      </span>
                    </div>
                  </Corte>
                  <figcaption className="mt-3 flex items-center gap-2.5">
                    <span className="block h-px w-5" style={{ backgroundColor: C.laton }} aria-hidden="true" />
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutD }}>
                      {f.tag}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 · Clientes de años: la nota que cuenta ── */}
        <section id="clientes" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[minmax(260px,1fr)_1.5fr] gap-10 md:gap-16 items-start">
              <Reveal>
                <Rotulo>Clientes de años</Rotulo>
                <p className={`${display.className} leading-none text-[clamp(4.4rem,15vw,7.5rem)]`} style={{ color: C.nogal }}>
                  <Cuenta hasta={4.9} decimales={1} />
                </p>
                <div className="mt-3 mb-2">
                  <Stars value={BIZ.ratingValue} color={C.nogal} size={18} />
                </div>
                <p className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>
                  <Cuenta hasta={BIZ.reviews} duracion={1600} /> opiniones en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                  style={{ color: C.nogal, textDecorationColor: C.laton }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>

              <div>
                <Reveal>
                  <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.08] mb-8`} style={{ color: C.ink }}>
                    Los que vuelven,
                    <br />
                    <em style={{ color: C.nogal }}>vuelven por algo.</em>
                  </h2>
                </Reveal>
                <div className="space-y-0">
                  {[RESENAS.vicente, RESENAS.joaquin].map((r, i) => (
                    <Reveal key={r.nombre} delay={120 + i * 110}>
                      <figure className="border-t py-7" style={{ borderColor: C.lineL }}>
                        <blockquote className={`${display.className} text-xl md:text-2xl leading-[1.32] mb-4`} style={{ color: C.ink }}>
                          “{r.texto}”
                        </blockquote>
                        <figcaption className="flex items-center gap-3">
                          <span className="block h-px w-6" style={{ backgroundColor: C.laton }} aria-hidden="true" />
                          <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutL }}>
                            {r.nombre} · reseña en Google
                          </span>
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <CorteLinea className="max-w-6xl mx-auto px-5 md:px-8 pb-2" />
        </section>

        {/* ── 4 · El salón ── */}
        <section id="salon" className="scroll-mt-20" style={{ backgroundColor: C.piedra }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <Reveal>
                <div className="p-[7px]" style={{ border: `1.5px solid ${C.nogal}` }}>
                  <div className="p-[5px]" style={{ border: '1px solid rgba(90,58,34,0.4)' }}>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={`${IMG}/salon-espejos.webp`}
                        alt="Mesón de trabajo del salón con espejos, productos, toallas y el letrero de Valentino colgado"
                        fill
                        loading="lazy"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span
                        className="absolute bottom-0 left-0 font-mono text-[10px] font-bold px-3 py-1.5 tracking-[0.14em]"
                        style={{ backgroundColor: C.capa, color: C.latonClaro }}
                      >
                        AV. ALEMANIA 400 · VALDIVIA
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <Rotulo>El salón</Rotulo>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
                  Vigas, piedra
                  <br />
                  <em style={{ color: C.nogalOsc }}>y sillones de barbería.</em>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: C.mutP }}>
                  Un salón clásico, de los de verdad: vigas de madera en el
                  techo, muro de piedra, espejos con marco de madera y los
                  cuadros de siempre. El «grato ambiente» del que hablan
                  las reseñas se ve en las fotos.
                </p>
                <ul className="space-y-3 mb-8">
                  {DETALLES_SALON.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm md:text-base font-medium" style={{ color: C.ink }}>
                      <span className="w-[7px] h-[7px] rotate-45 shrink-0" style={{ backgroundColor: C.laton }} aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <BtnWa href="#visita" tone="linea">
                  Horario y cómo llegar ↓
                </BtnWa>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5 · Opiniones de Google ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.capa, ...VIGAS }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo light>Opiniones de Google</Rotulo>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-12 md:mb-16`} style={{ color: C.marfil }}>
                Lo que escriben
                <br />
                <em style={{ color: C.latonClaro }}>sus clientes.</em>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              {[RESENAS.nataly, RESENAS.pablo].map((r, i) => (
                <Reveal key={r.nombre} delay={i * 130}>
                  <figure className="h-full flex flex-col border-l-[3px] pl-6 md:pl-8" style={{ borderColor: C.laton }}>
                    <blockquote className={`${display.className} text-[1.35rem] md:text-[1.7rem] leading-[1.38] mb-6 flex-1`} style={{ color: C.marfil }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className="flex items-center gap-3">
                      <Stars value={5} color={C.latonClaro} size={14} />
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutD }}>
                        {r.nombre} · reseña en Google
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 · Horario y cómo llegar ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
              <Reveal>
                <Rotulo>Horario y cómo llegar</Rotulo>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
                  {BIZ.address},
                  <br />
                  <em style={{ color: C.nogal }}>{BIZ.city}.</em>
                </h2>
                <dl className="mb-7 border-t" style={{ borderColor: C.lineL }}>
                  {HORARIO.map((h) => (
                    <div key={h.days} className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: C.lineL }}>
                      <dt className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>{h.days}</dt>
                      <dd className="text-sm md:text-base tabular-nums" style={{ color: h.time === 'Cerrado' ? C.mutL : C.nogal }}>
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-sm leading-relaxed mb-3" style={{ color: C.mutL }}>
                  {BIZ.address}, {BIZ.city}, {BIZ.region} ·{' '}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 tap-44"
                    style={{ color: C.ink }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </p>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.mutL }}>
                  La hora se agenda por WhatsApp: escribes, te confirman
                  y llegas a la tuya.
                </p>
                <div className="flex flex-wrap gap-3">
                  <BtnWa tone="nogal">
                    <WaIcon />
                    Agendar por WhatsApp
                  </BtnWa>
                  <BtnWa href={MAPS_URL} tone="linea">
                    Cómo llegar →
                  </BtnWa>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="overflow-hidden min-h-[320px] h-full" style={{ border: `1.5px solid ${C.nogal}`, backgroundColor: C.marfil2 }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <CorteLinea className="max-w-6xl mx-auto px-5 md:px-8 pb-8" />
        </section>

        {/* ── CTA final ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.capa }}>
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{ backgroundImage: `url(${IMG}/salon.webp)`, backgroundSize: 'cover', backgroundPosition: 'center 42%' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <svg viewBox="0 0 24 24" className="w-7 h-7 mx-auto mb-6" fill="none" stroke={C.latonClaro} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="6" cy="6" r="2.4" />
                <circle cx="6" cy="18" r="2.4" />
                <path d="M8.4 7.6 20 19 M8.4 16.4 20 5" />
              </svg>
              <h2 className={`${display.className} text-[clamp(2rem,6.5vw,3.6rem)] leading-[1.05] mb-5`} style={{ color: C.marfil }}>
                La próxima hora
                <br />
                <em style={{ color: C.latonClaro }}>puede ser la tuya.</em>
              </h2>
              <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: C.mutD }}>
                Un mensaje por WhatsApp y quedas agendado en Av. Alemania 400.
                Sin formularios, sin vueltas.
              </p>
              <BtnWa tone="laton">
                <WaIcon />
                Agenda tu hora por WhatsApp
              </BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.capa, color: C.marfil, borderTop: `1px solid ${C.lineD}` }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
              <p className={`${display.className} text-xl`}>{BIZ.name}</p>
              <address className="not-italic text-sm" style={{ color: C.mutD }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 tap-44"
                  style={{ color: C.marfil }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.latonClaro }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Datos, fotos y reseñas son reales de su ficha pública de Google; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.latonClaro }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
