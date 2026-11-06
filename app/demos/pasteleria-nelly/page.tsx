import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { CartelHorario, SemanaHorario, Slide } from './mostrador'
import { ADEMAS, BIZ, CARTEL, IMG, MAPS_EMBED, MAPS_URL, REVIEWS, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/libre-franklin/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})

// El rojo de su letrero, la masa, el horno y un acento de merengue.
const C = {
  rojo: '#C8202E',
  rojoDeep: '#9E141F',
  crema: '#FFF5E6',
  papel: '#F8EDD6',
  kraft: '#EBD9B4',
  dorado: '#E8A33A',
  doradoInk: '#7A4E0A',
  chocolate: '#5A3320',
  horno: '#3E2415',
  rosa: '#F6CFD6',
  ink: '#4A2A18',
  muted: '#6F4F3C',
  line: 'rgba(90,51,32,0.16)',
  lineD: 'rgba(255,245,230,0.18)',
} as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'pasteleria-nelly',
  title: 'Panadería y Pastelería Nelly · Pan, pasteles y empanadas en Los Ángeles',
  description:
    'Panadería de barrio en Estados Unidos 119, Los Ángeles. Pan del día, pasteles, tortas, kuchenes y empanadas hechas a mano. Abre también los domingos. Pide por WhatsApp.',
  image: '/demos/pasteleria-nelly/vitrina-pasteles.webp',
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Empanadas', href: '#empanadas' },
  { label: 'Del día', href: '#del-dia' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#donde' },
]

function Btn({
  href,
  children,
  tone,
  external = true,
  className = '',
}: {
  href: string
  children: React.ReactNode
  tone: 'rojo' | 'crema' | 'lineInk' | 'lineCrema'
  external?: boolean
  className?: string
}) {
  const st: CSSProperties =
    tone === 'rojo'
      ? { backgroundColor: C.rojo, color: C.crema, boxShadow: '0 10px 24px rgba(200,32,46,0.28)' }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.rojoDeep }
        : tone === 'lineInk'
          ? { border: '1.5px solid rgba(90,51,32,0.45)', color: C.chocolate }
          : { border: '1.5px solid rgba(255,245,230,0.55)', color: C.crema }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`nel-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44 ${focusRing} ${className}`}
      style={st}
    >
      {children}
    </a>
  )
}

/** La bolsa de pan: el motivo del demo. */
function Bolsa({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 8 L17.5 8 L19 21 L5 21 Z" />
      <path d="M8.5 8 C8.5 5 10 3.2 12 3.2 C14 3.2 15.5 5 15.5 8" />
      <path d="M9.5 12.5 C10.8 13.6 13.2 13.6 14.5 12.5" />
      <path d="M10 16.5 C11 17.3 13 17.3 14 16.5" />
    </svg>
  )
}

/** Rótulo pequeño tipo etiqueta de papel kraft. */
function Rotulo({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.26em] rounded-sm px-3 py-[7px]"
      style={{
        color: dark ? C.rosa : C.doradoInk,
        backgroundColor: dark ? '#56371F' : 'rgba(235,217,180,0.55)',
        border: `1px dashed ${dark ? 'rgba(246,207,214,0.45)' : 'rgba(122,78,10,0.45)'}`,
      }}
    >
      <Bolsa className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

/** El toldo rojo del local, con su valance festoneado blanco. */
function Toldo() {
  const W = 1200
  const n = 20
  const w = W / n
  let d = `M0 0 H${W} V7`
  for (let i = 0; i < n; i++) d += ` A${w / 2} ${w / 2} 0 0 1 ${W - (i + 1) * w} 7`
  d += ' Z'
  return (
    <div className="nel-toldo relative z-[5]" aria-hidden="true">
      <div
        className="h-[44px] md:h-[54px]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${C.rojo} 0 70px, ${C.rojoDeep} 70px 140px)`,
          boxShadow: 'inset 0 -10px 18px rgba(0,0,0,0.18)',
        }}
      />
      <svg
        viewBox="0 0 1200 34"
        preserveAspectRatio="none"
        className="block w-full h-[24px] md:h-[28px]"
        style={{ filter: 'drop-shadow(0 3px 2px rgba(90,51,32,0.22))' }}
      >
        <path d={d} fill="#FFF9EF" />
      </svg>
    </div>
  )
}

/** Borde festoneado suelto, para rematar secciones. */
function Feston({ fill, flip = false }: { fill: string; flip?: boolean }) {
  const W = 1200
  const n = 20
  const w = W / n
  let d = `M0 0 H${W} V6`
  for (let i = 0; i < n; i++) d += ` A${w / 2} ${w / 2} 0 0 1 ${W - (i + 1) * w} 6`
  d += ' Z'
  return (
    <svg
      viewBox="0 0 1200 30"
      preserveAspectRatio="none"
      className={`block w-full h-[20px] md:h-[24px] ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d={d} fill={fill} />
    </svg>
  )
}

/** Tres hilos de vapor que suben de la vitrina: recién salido del horno. */
function Vapor() {
  return (
    <svg
      className="nel-vapor pointer-events-none absolute left-0 -top-4 w-full h-[110px]"
      viewBox="0 0 390 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M105 108 C97 88 113 78 105 58 C97 38 113 26 105 8" />
      <path d="M195 108 C187 86 203 76 195 54 C187 34 203 22 195 4" />
      <path d="M285 108 C277 90 293 80 285 60 C277 40 293 28 285 10" />
    </svg>
  )
}

/** Foto con marco de vidriera: marco chocolate y brillo de vidrio. */
function Vidriera({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  sizes = '(min-width: 768px) 44vw, 92vw',
  className = '',
}: {
  src: string
  alt: string
  ratio?: string
  sizes?: string
  className?: string
}) {
  return (
    <div
      className={`relative rounded-[20px] p-[9px] md:p-[11px] ${className}`}
      style={{ backgroundColor: C.chocolate, boxShadow: '0 22px 48px rgba(63,37,22,0.3)' }}
    >
      <div className={`relative overflow-hidden rounded-[12px] ${ratio}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(115deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 18%, transparent 30%)',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

/** Etiqueta de papel kraft para el cartel del local. */
function Tag({ children, tilt = 0 }: { children: React.ReactNode; tilt?: number }) {
  return (
    <span
      className={`${display.className} inline-block rounded-[6px] px-3.5 py-2 text-[15px] md:text-base uppercase tracking-wide`}
      style={{
        backgroundColor: C.kraft,
        color: C.chocolate,
        border: '1px solid rgba(90,51,32,0.22)',
        boxShadow: '0 3px 0 rgba(90,51,32,0.12)',
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {children}
    </span>
  )
}

export default function PasteleriaNellyPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`
        /* El toldo baja al cargar la página. */
        @keyframes nel-toldo-in {
          from { transform: translateY(-108%) }
          to { transform: translateY(0) }
        }
        .nel-toldo { animation: nel-toldo-in 0.85s cubic-bezier(0.3,0.75,0.3,1) 0.1s both }

        /* El cartel cuelga y se balancea una vez, con amortiguación. */
        @keyframes nel-columpio {
          0% { transform: rotate(-9deg) }
          30% { transform: rotate(6deg) }
          55% { transform: rotate(-3.4deg) }
          78% { transform: rotate(1.6deg) }
          100% { transform: rotate(0deg) }
        }
        .nel-cartel {
          transform-origin: 50% 0;
          animation: nel-columpio 2.4s cubic-bezier(0.3,0.6,0.35,1) 1s both;
        }
        .nel-cartel-card {
          border-radius: 10px;
          border: 1px solid rgba(90,51,32,0.25);
          box-shadow: 0 10px 22px rgba(40,20,8,0.35);
          padding: 9px 12px 8px;
          text-align: center;
          min-width: 108px;
        }
        .nel-cartel-horas { font-weight: 800; }

        /* Los hilos de vapor se dibujan y se desvanecen hacia arriba, en loop. */
        .nel-vapor path {
          fill: none;
          stroke: rgba(255,250,240,0.95);
          stroke-width: 8;
          stroke-linecap: round;
          stroke-dasharray: 44 76;
          stroke-dashoffset: 120;
          opacity: 0;
          filter: blur(0.7px);
          animation: nel-vapor 3.6s linear infinite;
        }
        .nel-vapor path:nth-child(2) { animation-delay: 1.2s }
        .nel-vapor path:nth-child(3) { animation-delay: 2.4s }
        @keyframes nel-vapor {
          0% { stroke-dashoffset: 120; opacity: 0 }
          22% { opacity: 1 }
          60% { opacity: 0.6 }
          100% { stroke-dashoffset: -44; opacity: 0 }
        }

        .nel-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .nel-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .nel-btn:active { transform: translateY(0) scale(0.97) }

        @media (prefers-reduced-motion: reduce) {
          .nel-toldo, .nel-cartel { animation: none !important }
          .nel-vapor path {
            animation: none !important;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            opacity: 0.35;
          }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'dark',
          bar: 'rgba(255,245,230,0.95)',
          ink: C.chocolate,
          line: C.line,
          btnBg: C.rojo,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: el local con su toldo y su vitrina ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <Toldo />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-7 md:pt-10 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.02fr_0.98fr] gap-10 md:gap-12 items-center">
            <div>
              <Reveal>
                <Rotulo>Estados Unidos 119 · Los Ángeles</Rotulo>
              </Reveal>
              <Reveal delay={90}>
                <h1
                  className={`${display.className} uppercase leading-[0.96] tracking-[0.01em] mt-5 mb-5 text-[clamp(2.9rem,11vw,6rem)]`}
                  style={{ color: C.chocolate }}
                >
                  Pan y pasteles
                  <br />
                  <span style={{ color: C.rojo }}>de barrio,</span>
                  <br />
                  todos los días.
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="text-[15px] md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
                  Pan del día, pasteles, tortas, kuchenes y empanadas hechas a mano.
                  Abrimos también los domingos.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="rojo">
                    <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    </svg>
                    Haz tu pedido por WhatsApp
                  </Btn>
                  <Btn href="#donde" tone="lineInk" external={false}>
                    Cómo llegar
                  </Btn>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <p className="flex items-center gap-2.5 mt-6 text-sm font-semibold" style={{ color: C.chocolate }}>
                  <Stars value={4.5} color={C.doradoInk} size={16} />
                  <span>
                    {BIZ.rating} · {BIZ.reviews} opiniones en Google
                  </span>
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="relative">
                <Vidriera
                  src={`${IMG}/vitrina-pasteles.webp`}
                  alt="La vitrina de Nelly llena de pasteles, tortas, kuchenes y dulces del día"
                  sizes="(min-width: 768px) 46vw, 92vw"
                />
                <Vapor />
                <div className="absolute -top-5 right-4 md:right-7 z-10 flex flex-col items-center">
                  <span className="flex gap-6" aria-hidden="true">
                    <span className="block w-[2px] h-[18px]" style={{ backgroundColor: 'rgba(62,36,21,0.75)' }} />
                    <span className="block w-[2px] h-[18px]" style={{ backgroundColor: 'rgba(62,36,21,0.75)' }} />
                  </span>
                  <CartelHorario accent={C.rojo} ink={C.ink} paper="#F6ECD2" />
                </div>
                <p
                  className={`${display.className} absolute -bottom-4 left-5 rounded-full px-4 py-[7px] text-[13px] uppercase tracking-wider shadow-lg`}
                  style={{ backgroundColor: C.chocolate, color: C.crema }}
                >
                  la vitrina de hoy
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2 · La vitrina: pasteles, tortas y el cartel de la pared ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <Feston fill={C.crema} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-9 md:pt-14 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <Rotulo>La vitrina</Rotulo>
                <h2 className={`${display.className} uppercase leading-[0.98] mt-4 mb-4 text-4xl md:text-6xl`} style={{ color: C.chocolate }}>
                  Se llena
                  <br />
                  <span style={{ color: C.rojo }}>todos los días</span>
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                  Pasteles, tortas y kuchenes detrás del vidrio: llegas, miras
                  y eliges. Y en la pared, el cartel de siempre dice todo lo
                  que hay.
                </p>
              </Reveal>
              <div className="flex flex-wrap gap-2.5 max-w-md">
                {CARTEL.map((p, i) => (
                  <Slide key={p} delay={i * 70} from={40}>
                    <Tag tilt={i % 3 === 0 ? -1.4 : i % 3 === 1 ? 1.1 : -0.4}>{p}</Tag>
                  </Slide>
                ))}
              </div>
              <Reveal delay={200}>
                <p className="text-xs leading-relaxed mt-5 max-w-md" style={{ color: C.muted }}>
                  Productos según el cartel pintado en la pared del local.
                </p>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Vidriera
                src={`${IMG}/interior.webp`}
                alt="El interior del local: vitrinas iluminadas llenas de pasteles y el mesón"
                ratio="aspect-[4/3]"
                sizes="(min-width: 1024px) 50vw, 92vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 · Empanadas hechas a mano: masa, pino, horno ── */}
      <section id="empanadas" className="scroll-mt-20" style={{ backgroundColor: '#F5E3BC' }}>
        <Feston fill={C.papel} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-9 md:pt-14 pb-14 md:pb-20">
          <Reveal>
            <Rotulo>Hechas a mano</Rotulo>
            <h2 className={`${display.className} uppercase leading-[0.98] mt-4 mb-4 text-4xl md:text-6xl`} style={{ color: C.chocolate }}>
              Empanadas: <span style={{ color: C.rojo }}>masa, pino y horno</span>
            </h2>
            <p className="text-[15px] md:text-base leading-relaxed max-w-xl mb-9" style={{ color: C.muted }}>
              Así se ven en su propia cocina: la masa recién cortada, el pino
              encima y de ahí directo al horno.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: 'masas.webp', paso: '01', titulo: 'La masa', texto: 'Recién cortada y apilada en el mesón.' },
              { src: 'pino.webp', paso: '02', titulo: 'El pino', texto: 'Generoso sobre cada masa, uno por uno.' },
            ].map((s, i) => (
              <Slide key={s.paso} delay={i * 130} from={56}>
                <figure className="relative">
                  <div className="relative overflow-hidden rounded-[16px] aspect-[3/4] border" style={{ borderColor: 'rgba(90,51,32,0.25)', boxShadow: '0 14px 30px rgba(63,37,22,0.18)' }}>
                    <Image
                      src={`${IMG}/${s.src}`}
                      alt={s.paso === '01' ? 'Masas de empanada recién cortadas, apiladas sobre el mesón' : 'El pino repartido sobre las masas de empanada'}
                      fill
                      sizes="(min-width: 768px) 30vw, 44vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <p className={`${display.className} text-[13px] uppercase tracking-[0.16em]`} style={{ color: C.doradoInk }}>
                      paso {s.paso}
                    </p>
                    <p className={`${display.className} text-2xl md:text-3xl uppercase leading-none mt-0.5`} style={{ color: C.chocolate }}>
                      {s.titulo}
                    </p>
                    <p className="text-[13px] leading-snug mt-1.5" style={{ color: C.muted }}>
                      {s.texto}
                    </p>
                  </figcaption>
                </figure>
              </Slide>
            ))}
            <Slide delay={260} from={56} className="col-span-2 md:col-span-1">
              <div
                className="h-full rounded-[16px] border-2 border-dashed p-6 md:p-7 flex flex-col justify-center"
                style={{ borderColor: 'rgba(200,32,46,0.4)', backgroundColor: 'rgba(255,245,230,0.6)' }}
              >
                <svg viewBox="0 0 48 48" className="w-12 h-12 mb-4" fill="none" stroke={C.rojo} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="8" width="38" height="34" rx="4" />
                  <path d="M5 16 H43" />
                  <path d="M12 12 h3 M19 12 h3 M26 12 h3" />
                  <rect x="11" y="22" width="26" height="14" rx="2.5" />
                  <path d="M16 31.5 c1.4-2.2 2.8-2.2 4.2 0 c1.4-2.2 2.8-2.2 4.2 0 c1.4-2.2 2.8-2.2 4.2 0" />
                </svg>
                <p className={`${display.className} text-[13px] uppercase tracking-[0.16em]`} style={{ color: C.doradoInk }}>
                  paso 03
                </p>
                <p className={`${display.className} text-2xl md:text-3xl uppercase leading-none mt-0.5`} style={{ color: C.chocolate }}>
                  Al horno
                </p>
                <p className="text-[13px] leading-snug mt-1.5" style={{ color: C.muted }}>
                  Salen calientes durante el día: pregunta qué hay recién hecho.
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* ── 4 · Del día, a la antigua: sopaipillas y chancaca ── */}
      <section id="del-dia" className="scroll-mt-20" style={{ backgroundColor: C.horno }}>
        <Feston fill="#F5E3BC" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-9 md:pt-14 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <Rotulo dark>Del día, a la antigua</Rotulo>
              <h2 className={`${display.className} uppercase leading-[0.98] mt-4 mb-5 text-4xl md:text-6xl`} style={{ color: C.crema }}>
                Recién fritas,
                <br />
                <span style={{ color: C.dorado }}>con su chancaca</span>
              </h2>
              <p className="text-[15px] md:text-base leading-relaxed max-w-md mb-5" style={{ color: 'rgba(255,245,230,0.82)' }}>
                Las sopaipillas se fríen al momento y la chancaca se prepara
                con canela y naranja. Zapallo, chancaca, canela y naranja:
                lo de siempre, bien hecho.
              </p>
              <ul className="space-y-3 max-w-md">
                {[
                  'Sopaipillas recién fritas, directo del aceite',
                  'Chancaca tibia con canela y naranja',
                  'Zapallo picado en la cocina, no de bolsa',
                ].map((t, i) => (
                  <Slide key={t} delay={i * 110} from={44}>
                    <li className="flex items-start gap-3 text-sm md:text-[15px] font-semibold" style={{ color: C.crema }}>
                      <span className="mt-[3px] inline-block h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: C.dorado }} aria-hidden="true" />
                      {t}
                    </li>
                  </Slide>
                ))}
              </ul>
            </Reveal>
            <div className="grid grid-cols-[0.58fr_0.42fr] gap-4 items-stretch">
              <Slide delay={80} from={56}>
                <figure className="relative h-full">
                  <div className="relative h-full min-h-[280px] overflow-hidden rounded-[16px] border" style={{ borderColor: C.lineD }}>
                    <Image
                      src={`${IMG}/sopaipillas.webp`}
                      alt="Sopaipillas doradas friéndose en aceite en la cocina de Nelly"
                      fill
                      sizes="(min-width: 1024px) 28vw, 54vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="absolute bottom-3 left-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ backgroundColor: 'rgba(255,245,230,0.94)', color: C.chocolate }}
                  >
                    recién fritas
                  </figcaption>
                </figure>
              </Slide>
              <div className="grid gap-4">
                <Slide delay={180} from={56}>
                  <figure className="relative">
                    <div className="relative overflow-hidden rounded-[16px] aspect-[4/3.4] border" style={{ borderColor: C.lineD }}>
                      <Image
                        src={`${IMG}/chancaca.webp`}
                        alt="Chancaca derritiéndose con canela y naranja"
                        fill
                        sizes="(min-width: 1024px) 20vw, 34vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className="absolute bottom-2.5 left-2.5 rounded-md px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.12em]"
                      style={{ backgroundColor: 'rgba(255,245,230,0.94)', color: C.chocolate }}
                    >
                      la chancaca
                    </figcaption>
                  </figure>
                </Slide>
                <Slide delay={280} from={56}>
                  <figure className="relative">
                    <div className="relative overflow-hidden rounded-[16px] aspect-[4/3.4] border" style={{ borderColor: C.lineD }}>
                      <Image
                        src={`${IMG}/ingredientes.webp`}
                        alt="Zapallo picado, chancaca, canela en rama y una naranja sobre el mesón"
                        fill
                        sizes="(min-width: 1024px) 20vw, 34vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className="absolute bottom-2.5 left-2.5 rounded-md px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.12em]"
                      style={{ backgroundColor: 'rgba(255,245,230,0.94)', color: C.chocolate }}
                    >
                      zapallo y canela
                    </figcaption>
                  </figure>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Y además: el almacén de la esquina ── */}
      <section style={{ backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 md:py-9 text-center">
          <Reveal>
            <p className={`${display.className} uppercase text-2xl md:text-4xl leading-tight`} style={{ color: C.crema }}>
              Y además: <span className="opacity-95">lácteos, abarrotes, cecinas, aseo, librería y mascotas</span>
            </p>
            <p className="text-[13px] md:text-sm mt-2 font-medium" style={{ color: 'rgba(255,245,230,0.85)' }}>
              La esquina que tiene de todo, como dice la gente en Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Opiniones de Google ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Rotulo>Las opiniones</Rotulo>
              <h2 className={`${display.className} uppercase leading-[0.98] mt-4 mb-6 text-4xl md:text-6xl`} style={{ color: C.chocolate }}>
                La esquina
                <br />
                <span style={{ color: C.rojo }}>querida</span>
              </h2>
              <div className="flex items-end gap-4">
                <p className={`${display.className} leading-none text-[86px] md:text-[110px]`} style={{ color: C.doradoInk }}>
                  {BIZ.rating}
                </p>
                <div className="pb-3 md:pb-4">
                  <Stars value={4.5} color={C.doradoInk} size={20} />
                  <p className="text-sm font-semibold mt-1.5" style={{ color: C.muted }}>
                    {BIZ.reviews} opiniones en Google
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {REVIEWS.map((r, i) => (
                <Slide key={r.autor} delay={i * 110} from={52}>
                  <blockquote
                    className="rounded-[14px] p-5 md:p-6"
                    style={{
                      backgroundColor: C.kraft,
                      border: '1px solid rgba(90,51,32,0.18)',
                      boxShadow: '0 8px 22px rgba(63,37,22,0.1)',
                      transform: `rotate(${i === 1 ? 0.7 : i === 2 ? -0.5 : 0}deg)`,
                    }}
                  >
                    <p className="text-[15px] md:text-base leading-relaxed" style={{ color: C.ink }}>
                      “{r.texto}”
                    </p>
                    <footer className="mt-3 flex items-center gap-2">
                      <span className="inline-block h-[2px] w-6" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                      <cite className="not-italic text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.doradoInk }}>
                        {r.autor}
                      </cite>
                      {'rol' in r && r.rol && (
                        <span className="text-[11px] font-semibold" style={{ color: C.muted }}>
                          · {r.rol}
                        </span>
                      )}
                    </footer>
                  </blockquote>
                </Slide>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · Horario grande y cómo llegar ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <Feston fill={C.crema} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-9 md:pt-14 pb-14 md:pb-20">
          <Reveal>
            <Rotulo>Cómo llegar</Rotulo>
            <h2 className={`${display.className} uppercase leading-[0.98] mt-4 mb-3 text-4xl md:text-6xl`} style={{ color: C.chocolate }}>
              Estados Unidos 119, <span style={{ color: C.rojo }}>Los Ángeles</span>
            </h2>
            <p className="text-[15px] md:text-base leading-relaxed max-w-lg mb-9" style={{ color: C.muted }}>
              Abre todos los días: hasta las 22:00 entre semana y también los
              domingos. Los pedidos se coordinan por WhatsApp.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <div
                className="rounded-[18px] p-6 md:p-8"
                style={{ backgroundColor: C.crema, border: `1px solid ${C.line}`, boxShadow: '0 14px 34px rgba(63,37,22,0.1)' }}
              >
                <SemanaHorario
                  ink={C.chocolate}
                  muted={C.muted}
                  line={C.line}
                  accent={C.rojo}
                  accentInk={C.crema}
                  displayClass={display.className}
                />
                <p className="text-[11px] leading-relaxed mt-4" style={{ color: C.muted }}>
                  Horario según la ficha de Google Maps.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              <div className="grid grid-cols-[0.62fr_0.38fr] gap-4">
                <Slide from={48}>
                  <figure className="relative">
                    <div className="relative overflow-hidden rounded-[16px] aspect-[4/3.2] border" style={{ borderColor: C.line }}>
                      <Image
                        src={`${IMG}/fachada.webp`}
                        alt="La fachada roja de Panadería y Pastelería Nelly de noche, con su toldo"
                        fill
                        sizes="(min-width: 1024px) 30vw, 58vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className="absolute bottom-2.5 left-2.5 rounded-md px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.12em]"
                      style={{ backgroundColor: 'rgba(62,36,21,0.85)', color: C.crema }}
                    >
                      la fachada roja
                    </figcaption>
                  </figure>
                </Slide>
                <Slide delay={120} from={48}>
                  <figure className="relative">
                    <div className="relative overflow-hidden rounded-[16px] aspect-[4/5.1] border" style={{ borderColor: C.line }}>
                      <Image
                        src={`${IMG}/fachada-calle.webp`}
                        alt="El local visto desde la calle: letrero rojo y toldo de Panadería Nelly"
                        fill
                        sizes="(min-width: 1024px) 18vw, 34vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                </Slide>
              </div>
              <Reveal delay={100}>
                <div className="relative overflow-hidden rounded-[16px] border aspect-[16/8]" style={{ borderColor: C.line }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="rojo">
                    Haz tu pedido por WhatsApp
                  </Btn>
                  <Btn href={MAPS_URL} tone="lineInk">
                    Abrir en Google Maps
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 · Cierre ── */}
      <section style={{ backgroundColor: C.rojo }}>
        <Feston fill={C.papel} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center overflow-hidden">
          <Reveal>
            <Bolsa className="w-[44px] h-[44px] mx-auto mb-5" color={C.crema} />
            <h2 className={`${display.className} uppercase leading-[0.96] text-[clamp(2.5rem,8vw,5rem)]`} style={{ color: C.crema }}>
              El pan del día,
              <br />
              todos los días.
            </h2>
            <p className="text-[15px] md:text-base max-w-md mx-auto mt-5 mb-8 leading-relaxed" style={{ color: 'rgba(255,245,230,0.9)' }}>
              Escríbenos por WhatsApp, coordina tu pedido y retira en la
              esquina de siempre.
            </p>
            <Btn href={WA_LINK} tone="crema" className="text-base px-8">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
              Haz tu pedido por WhatsApp
            </Btn>
            <p className="text-sm mt-5 font-semibold" style={{ color: 'rgba(255,245,230,0.92)' }}>
              {BIZ.phoneDisplay}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.horno }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-7">
          <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
            <div className="min-w-0">
              <p className={`${display.className} uppercase text-2xl leading-none`} style={{ color: C.crema }}>
                {BIZ.name}
              </p>
              <p className="text-[13px] mt-2" style={{ color: 'rgba(255,245,230,0.78)' }}>
                {BIZ.address}, {BIZ.city}
              </p>
              <p className="text-[13px] mt-1" style={{ color: 'rgba(255,245,230,0.78)' }}>
                Lun a vie 8:00 a 22:00 · Sáb 8:00 a 15:00 · Dom 9:00 a 20:00
              </p>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold tap-44 ${focusRing}`}
                style={{ color: C.crema }}
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.2h2.4l.36-2.8h-2.76V9.2c0-.81.22-1.36 1.38-1.36h1.48V5.4c-.26-.03-1.14-.11-2.16-.11-2.14 0-3.6 1.3-3.6 3.7v2.06H8.2v2.8h2.4V21h2.9Z" />
                </svg>
                Facebook
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold tap-44 ${focusRing}`}
                style={{ color: C.crema }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed mt-6" style={{ color: 'rgba(255,245,230,0.55)' }}>
            Sitio de muestra de Sitiazo con datos reales del negocio: nombre,
            dirección, horario, teléfono, opiniones y fotos.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
