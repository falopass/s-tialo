import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Cajon } from './estante'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_DIR,
  MAPS_EMBED,
  HORARIO,
  CITA_DESTACADA,
  OPINIONES,
  IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Paleta de obra: naranja, carbón, madera de alerce y gris cemento.
// La huincha amarilla es el motivo gráfico de la página.
const C = {
  obra: '#E8681A',
  obraInk: '#8F3A08', // naranja quemado: pasa 4.5:1 sobre cemento y blanco
  carbon: '#22252A',
  carbon2: '#2B2F36',
  alerce: '#9C5B34',
  alerceDeep: '#7C4526',
  cemento: '#D9D6D0',
  blanco: '#FFFFFF',
  papel: '#F5F3EE',
  tinta: '#22252A',
  tape: '#F3C21B',
  tapeInk: 'rgba(26,23,15,0.85)',
  mutedL: 'rgba(34,37,42,0.72)',
  mutedL2: 'rgba(34,37,42,0.58)',
  lineL: 'rgba(34,37,42,0.18)',
  mutedD: 'rgba(255,255,255,0.74)',
  mutedD2: 'rgba(255,255,255,0.6)',
  lineD: 'rgba(255,255,255,0.16)',
} as const

const FOCUS_DARK = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F3C21B]'
const FOCUS_LIGHT = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F3A08]'

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-los-alerces',
  title: 'Ferretería Los Alerces · Todo para tu obra en Alerce, Puerto Montt',
  description:
    'Ferretería en Alerce Norte, Puerto Montt: herramientas, pinturas, cemento, grifería, pisos, gasfitería y electricidad. Cotiza por WhatsApp.',
  image: '/demos/ferreteria-los-alerces/herramientas.webp',
})

const NAV_LINKS = [
  { label: 'Pasillos', href: '#pasillos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#horario' },
]

const PASILLOS = [
  {
    n: '01',
    src: `${IMG}/herramientas.webp`,
    alt: 'Muro de herramientas colgadas en la ferretería: llaves, huinchas y escobillones',
    tag: 'Pasillo 01',
    name: 'Herramientas',
    desc: 'Manuales y de jardín: el muro completo para la obra y la casa.',
  },
  {
    n: '02',
    src: `${IMG}/pinturas.webp`,
    alt: 'Estanterías con tarros de pintura, barnices y esmaltes en la ferretería',
    tag: 'Pasillo 02',
    name: 'Pinturas y barnices',
    desc: 'Pinturas, barnices y esmaltes para madera, muro y metal.',
  },
  {
    n: '03',
    src: `${IMG}/cementos.webp`,
    alt: 'Sacos de cemento y materiales de construcción junto a una carretilla en la bodega',
    tag: 'Pasillo 03',
    name: 'Cemento y áridos',
    desc: 'Cemento, áridos y materiales de construcción en sacos.',
  },
  {
    n: '04',
    src: `${IMG}/griferia.webp`,
    alt: 'Cajas de monomandos y grifería apiladas en el estante de la ferretería',
    tag: 'Pasillo 04',
    name: 'Baño y cocina',
    desc: 'Grifería, monomandos y artículos para el baño y la cocina.',
  },
  {
    n: '05',
    src: `${IMG}/pisos-vinilicos.webp`,
    alt: 'Rollos de piso vinílico colgados en la tienda',
    tag: 'Pasillo 05',
    name: 'Pisos vinílicos',
    desc: 'Pisos vinílicos en rollo, en varios anchos y diseños.',
  },
  {
    n: '06',
    src: `${IMG}/pasillo.webp`,
    alt: 'Pasillo de la ferretería con estanterías llenas de piezas y materiales',
    tag: 'Pasillo 06',
    name: 'Gasfitería y electricidad',
    desc: 'Piezas, conexiones y material eléctrico para instalaciones y arreglos.',
  },
  {
    n: '07',
    src: `${IMG}/bodega.webp`,
    alt: 'Bodega de la ferretería con maderas, sacos, tarros y estanterías',
    tag: 'Pasillo 07',
    name: 'Maderas y bodega',
    desc: 'Maderas dimensionadas y el stock de la bodega para la obra gruesa.',
  },
] as const

const PASOS_COTIZA = [
  {
    n: '001',
    t: 'Mandas tu lista',
    d: 'Escríbenos lo que necesitas: cantidades, medidas o una foto de la pieza o del trabajo.',
  },
  {
    n: '002',
    t: 'Te cotizamos',
    d: 'La misma tienda te responde con lo que hay y cuánto sale.',
  },
  {
    n: '003',
    t: 'Pasas a buscarlo',
    d: 'Te esperamos en Alerce Norte, de lunes a sábado.',
  },
] as const

/** Anillos de tronco de alerce, detalle sutil de fondo. */
function Rings({ stroke, className = '' }: { stroke: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none">
      {[16, 30, 46, 64, 84].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} stroke={stroke} strokeWidth="1.4" />
      ))}
      <circle cx="100" cy="100" r="4" fill={stroke} />
      <path d="M100 84 V60 M112 132 L128 148" stroke={stroke} strokeWidth="1.4" />
    </svg>
  )
}

/**
 * La huincha de medir: franja amarilla con graduación de milímetros,
 * centímetros y números en Roboto Mono.
 */
function Cinta({
  numbers = false,
  className = '',
  style,
}: {
  numbers?: boolean
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden="true"
      style={{
        height: numbers ? 30 : 22,
        backgroundColor: C.tape,
        backgroundImage: [
          `repeating-linear-gradient(90deg, ${C.tapeInk} 0 1px, transparent 1px 8px)`,
          `repeating-linear-gradient(90deg, ${C.tapeInk} 0 1.5px, transparent 1.5px 40px)`,
          `repeating-linear-gradient(90deg, ${C.tapeInk} 0 2px, transparent 2px 80px)`,
        ].join(', '),
        backgroundSize: '100% 7px, 100% 13px, 100% 100%',
        backgroundPosition: 'top left, top left, top left',
        backgroundRepeat: 'repeat-x',
        ...style,
      }}
    >
      {numbers &&
        Array.from({ length: 14 }, (_, i) => (
          <span
            key={i}
            className={`${mono.className} absolute top-[13px] text-[9px] font-semibold leading-none`}
            style={{ left: i * 80 + 4, color: C.tapeInk }}
          >
            {(i + 1) * 10}
          </span>
        ))}
    </div>
  )
}

/**
 * La huincha del hero: se despliega desde el borde izquierdo bajo el
 * titular (clip-path de izquierda a derecha) y el extremo metálico
 * viaja sobre el filo del despliegue.
 */
function HuinchaHero() {
  return (
    <div className="relative h-[26px] my-4 md:my-6 max-w-[420px]" aria-hidden="true">
      <div className="fla-tape absolute inset-0">
        <Cinta numbers style={{ height: '100%' }} />
      </div>
      {/* extremo metálico que corre con el despliegue */}
      <div className="fla-tip absolute inset-0 pointer-events-none">
        <span
          className="absolute right-0 top-[-3px] block h-[32px] w-[13px] rounded-[3px]"
          style={{
            background: 'linear-gradient(90deg, #8A8F98 0%, #C7CCD4 45%, #6E747D 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(20,22,26,0.5)',
          }}
        />
      </div>
    </div>
  )
}

/** Rótulo de sección: número + texto en mono, con marcas de regla. */
function Rotulo({ n, children, dark = false }: { n: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] mb-5`}
      style={{ color: dark ? C.mutedD : C.mutedL }}
    >
      <span
        className="inline-flex items-end gap-[3px] h-[14px] shrink-0"
        aria-hidden="true"
      >
        <span className="block w-[2px] h-[14px]" style={{ backgroundColor: dark ? C.tape : C.obraInk }} />
        <span className="block w-[2px] h-[9px]" style={{ backgroundColor: dark ? C.tape : C.obraInk }} />
        <span className="block w-[2px] h-[5px]" style={{ backgroundColor: dark ? C.tape : C.obraInk }} />
      </span>
      <span className="whitespace-nowrap">
        <span style={{ color: dark ? C.tape : C.obraInk }}>{n}</span> · {children}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/** Placa de foto con rótulo mono tipo ficha de estante. */
function Ficha({
  src,
  alt,
  tag,
  caption,
  className = '',
  imgClassName = '',
}: {
  src: string
  alt: string
  tag: string
  caption?: string
  className?: string
  imgClassName?: string
}) {
  return (
    <figure
      className={`overflow-hidden rounded-md ${className}`}
      style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.carbon2 }}
    >
      <div className={`relative overflow-hidden ${imgClassName}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 44vw, 92vw" className="object-cover" />
      </div>
      <figcaption className="px-4 py-3 flex items-baseline justify-between gap-3">
        <span className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.tape }}>
          {tag}
        </span>
        {caption && (
          <span className="text-[11px] text-right leading-snug" style={{ color: C.mutedD2 }}>
            {caption}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

function WaBtn({
  children,
  href = WA_LINK,
  tone = 'obra',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  tone?: 'obra' | 'carbon'
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fla-btn ${display.className} inline-flex items-center justify-center gap-2 px-7 py-3 text-sm md:text-base rounded-md tap-44 ${className}`}
      style={
        tone === 'obra'
          ? { backgroundColor: C.obra, color: C.carbon }
          : { backgroundColor: C.carbon, color: C.blanco }
      }
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

export default function FerreteriaLosAlercesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.carbon, color: C.blanco }}
    >
      <style>{`
        /* La huincha se despliega bajo el titular. */
        @keyframes fla-tape { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0 0 0) } }
        .fla-tape { clip-path: inset(0 100% 0 0); animation: fla-tape 1.15s cubic-bezier(.3,.7,.25,1) .55s both }
        @keyframes fla-tip { from { transform: translateX(-100%) } to { transform: translateX(0) } }
        .fla-tip { transform: translateX(-100%); animation: fla-tip 1.15s cubic-bezier(.3,.7,.25,1) .55s both }

        /* Al llegar al final, la huincha "marca" el CTA con un golpe. */
        @keyframes fla-mark { 0%,66% { transform: scale(1) } 76% { transform: scale(1.05) } 88%,100% { transform: scale(1) } }
        .fla-mark { animation: fla-mark 2.6s cubic-bezier(.3,.7,.3,1) .55s both }

        /* Texto del hero en cascada. */
        @keyframes fla-rise { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .fla-rise { animation: fla-rise .8s cubic-bezier(.2,.65,.2,1) both; animation-delay: var(--d, 0s) }
        @keyframes fla-zoom { from { transform: scale(1.06) } to { transform: scale(1) } }
        .fla-zoom { animation: fla-zoom 1.7s cubic-bezier(.25,.6,.25,1) both }

        /* Las cintas divisoras se desenrollan al entrar al viewport. */
        .fla-divtape { animation: fla-tape linear both; animation-timeline: view(); animation-range: entry 0% entry 45% }

        .fla-btn { transition: transform .18s ease, filter .18s ease }
        .fla-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .fla-btn:active { transform: scale(.97) }

        @media (prefers-reduced-motion: reduce) {
          .fla-tape, .fla-divtape { animation: none !important; clip-path: none !important }
          .fla-tip { animation: none !important; transform: none !important }
          .fla-mark, .fla-rise, .fla-zoom { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(34,37,42,0.94)',
          ink: '#FFFFFF',
          line: C.lineD,
          btnBg: C.obra,
          btnInk: C.carbon,
        }}
      />

      {/* ── Hero: ficha de estante + titular con huincha ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Rings stroke="rgba(255,255,255,0.055)" className="absolute -top-16 -right-16 w-[300px] h-[300px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[76px] md:pt-28 pb-10 md:pb-16 grid md:grid-cols-[1.05fr_0.95fr] gap-7 md:gap-12 items-center">
          <figure className="fla-rise overflow-hidden rounded-md md:order-2" style={{ '--d': '0.05s', border: `1.5px solid ${C.lineD}`, backgroundColor: C.carbon2 } as React.CSSProperties}>
            <div className="relative h-[228px] md:h-[480px] overflow-hidden">
              <Image
                src={`${IMG}/herramientas.webp`}
                alt="Interior de Ferretería Los Alerces: muro de herramientas colgadas, huinchas y estantes con productos"
                fill
                priority
                sizes="(min-width: 768px) 44vw, 92vw"
                className="fla-zoom object-cover"
              />
            </div>
            <figcaption className="px-4 py-2.5 flex items-baseline justify-between gap-3 whitespace-nowrap">
              <span className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.18em]`} style={{ color: C.tape }}>
                Fig. 01 · Herramientas
              </span>
              <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.mutedD2 }}>
                Alerce Norte
              </span>
            </figcaption>
          </figure>

          <div className="md:order-1">
            <p
              className={`fla-rise ${mono.className} text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.26em] mb-4 flex items-center gap-2.5`}
              style={{ '--d': '0.1s', color: C.obra } as React.CSSProperties}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: C.tape }} aria-hidden="true" />
              Alerce Norte · Puerto Montt
            </p>
            <h1
              className={`fla-rise ${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,9.2vw,4.6rem)]`}
              style={{ '--d': '0.22s', color: C.blanco } as React.CSSProperties}
            >
              Todo para tu obra,
              <br />
              <span style={{ color: C.obra }}>en Alerce.</span>
            </h1>

            <HuinchaHero />

            <p
              className="fla-rise text-sm md:text-base leading-relaxed max-w-md mb-6"
              style={{ '--d': '0.5s', color: C.mutedD } as React.CSSProperties}
            >
              Herramientas, pinturas, cemento, grifería, pisos, gasfitería y
              electricidad, con atención que te explica.
            </p>
            <div className="fla-rise flex flex-wrap items-center gap-3 mb-5" style={{ '--d': '0.62s' } as React.CSSProperties}>
              <WaBtn className={`fla-mark ${FOCUS_DARK}`}>Cotiza por WhatsApp</WaBtn>
              <a
                href="#pasillos"
                className={`${display.className} inline-flex items-center px-6 py-3 text-sm md:text-base rounded-md transition-colors hover:bg-white/10 tap-44 ${FOCUS_DARK}`}
                style={{ border: `1.5px solid rgba(255,255,255,0.4)`, color: C.blanco }}
              >
                Ver los pasillos
              </a>
            </div>
            <p className="fla-rise flex items-center gap-2 text-[13px]" style={{ '--d': '0.72s', color: C.mutedD } as React.CSSProperties}>
              <Stars value={4.3} color={C.tape} size={15} />
              <span className={mono.className}>
                <strong className="font-bold" style={{ color: C.blanco }}>{BIZ.rating}</strong>
                {' '}· {BIZ.reviews} opiniones en Google
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Cinta divisoria: la huincha se desenrolla al bajar ── */}
      <div className="fla-divtape" aria-hidden="true">
        <Cinta numbers />
      </div>

      {/* ── Los pasillos: categorías como cajones de estante ── */}
      <section id="pasillos" className="scroll-mt-20" style={{ backgroundColor: C.cemento, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo n="01">La estantería</Rotulo>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4 md:gap-12 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.04]`} style={{ color: C.tinta }}>
                Siete pasillos,
                <br />
                <span style={{ color: C.alerce }}>una sola vuelta</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                Lo que hay en la tienda, pasillo por pasillo. Si no lo ves,
                pregunta en el mostrador: te lo encuentran.
              </p>
            </div>
          </Reveal>

          {/* estantería: montantes laterales + entrepaños */}
          <div className="relative max-w-3xl mx-auto md:px-10">
            <span className="hidden md:block absolute left-0 top-0 bottom-0 w-[7px] rounded-sm" style={{ background: `linear-gradient(90deg, ${C.alerce}, ${C.alerceDeep})` }} aria-hidden="true" />
            <span className="hidden md:block absolute right-0 top-0 bottom-0 w-[7px] rounded-sm" style={{ background: `linear-gradient(90deg, ${C.alerceDeep}, ${C.alerce})` }} aria-hidden="true" />
            <ol>
              {PASILLOS.map((p, i) => (
                <li key={p.n}>
                  <Cajon dir={i % 2 === 0 ? 'left' : 'right'}>
                    <article className={`flex items-center gap-4 md:gap-6 py-5 md:py-6 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className="relative shrink-0 w-[104px] h-[132px] md:w-[148px] md:h-[188px] overflow-hidden rounded-sm" style={{ border: `1.5px solid ${C.lineL}` }}>
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(min-width: 768px) 150px, 108px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em] mb-1.5`} style={{ color: C.obraInk }}>
                          {p.tag}
                        </p>
                        <h3 className={`${display.className} text-xl md:text-2xl leading-tight mb-1.5`} style={{ color: C.tinta }}>
                          {p.name}
                        </h3>
                        <p className="text-[13px] md:text-sm leading-snug max-w-[340px]" style={{ color: C.mutedL }}>
                          {p.desc}
                        </p>
                      </div>
                    </article>
                  </Cajon>
                  {/* entrepaño de madera con escuadras */}
                  <div className="relative" aria-hidden="true">
                    <div
                      className="h-[10px] rounded-[2px]"
                      style={{ background: `linear-gradient(180deg, #B0714A 0%, ${C.alerce} 55%, ${C.alerceDeep} 100%)`, boxShadow: '0 1px 0 rgba(34,37,42,0.25)' }}
                    />
                    <span className="absolute left-[14%] top-[10px] block w-[10px] h-[7px] border-l-2 border-b-2" style={{ borderColor: 'rgba(34,37,42,0.35)' }} />
                    <span className="absolute right-[14%] top-[10px] block w-[10px] h-[7px] border-r-2 border-b-2" style={{ borderColor: 'rgba(34,37,42,0.35)' }} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Te explicamos antes de vender ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Rings stroke="rgba(255,255,255,0.05)" className="absolute -bottom-24 -left-20 w-[340px] h-[340px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Rotulo n="02" dark>El mostrador</Rotulo>
            <h2 className={`${display.className} text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.04] mb-7`} style={{ color: C.blanco }}>
              Aquí te explican
              <br />
              <span style={{ color: C.obra }}>antes de venderte</span>
            </h2>
            <figure>
              <blockquote className="text-base md:text-lg leading-relaxed mb-5 max-w-xl" style={{ color: 'rgba(255,255,255,0.88)' }}>
                “{CITA_DESTACADA.texto.split('compra uno informado')[0]}
                <span style={{ boxShadow: `inset 0 -0.42em 0 rgba(243,194,27,0.32)` }}>compra uno informado</span>
                {CITA_DESTACADA.texto.split('compra uno informado')[1]}”
              </blockquote>
              <figcaption className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center gap-3`} style={{ color: C.tape }}>
                <span className="inline-block w-8 border-t-2 border-dashed" style={{ borderColor: 'rgba(243,194,27,0.5)' }} aria-hidden="true" />
                {CITA_DESTACADA.autor} · opinión en Google
              </figcaption>
            </figure>
            <p className="text-sm md:text-base leading-relaxed mt-6 max-w-md" style={{ color: C.mutedD2 }}>
              Ese es el trato de barrio: preguntar no molesta. Te muestran
              la pieza, te dicen para qué sirve y sales sabiendo qué
              compraste.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <Ficha
              src={`${IMG}/mostrador.webp`}
              alt="Mostrador de Ferretería Los Alerces con vitrinas llenas de productos"
              tag="Fig. 02 · El mostrador"
              caption="Donde te explican"
              imgClassName="h-[300px] md:h-[440px]"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Cotiza por WhatsApp: orden de cotización ── */}
      <section id="cotizar" className="scroll-mt-20" style={{ backgroundColor: C.cemento, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo n="03">Cotizar</Rotulo>
          </Reveal>
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <h2 className={`${display.className} text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.04] mb-5`} style={{ color: C.tinta }}>
                Manda tu lista
                <br />
                <span style={{ color: C.alerce }}>por WhatsApp</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm mb-7" style={{ color: C.mutedL }}>
                Sin formularios ni vueltas: una foto de lo que necesitas o
                la lista de la obra, y te responde la misma tienda.
              </p>
              <WaBtn tone="carbon" className={FOCUS_LIGHT}>Cotiza por WhatsApp</WaBtn>
              <p className={`${mono.className} text-xs mt-4`} style={{ color: C.mutedL }}>
                {BIZ.phoneDisplay}
              </p>
            </Reveal>
            <Reveal delay={120}>
              {/* la orden de cotización, como una boleta de trabajo */}
              <div className="rounded-md overflow-hidden" style={{ backgroundColor: C.blanco, border: `1.5px solid ${C.lineL}` }}>
                <div className="px-5 md:px-7 py-4 flex items-center justify-between gap-3 border-b-2 border-dashed" style={{ borderColor: C.lineL }}>
                  <span className={`${mono.className} text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.tinta }}>
                    Orden de cotización
                  </span>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-sm`} style={{ backgroundColor: C.cemento, color: C.mutedL }}>
                    {BIZ.short}
                  </span>
                </div>
                <ol>
                  {PASOS_COTIZA.map((p) => (
                    <li key={p.n} className="flex gap-4 md:gap-5 px-5 md:px-7 py-5 border-b last:border-b-0 border-dashed" style={{ borderColor: C.lineL }}>
                      <span className={`${mono.className} text-sm font-bold shrink-0 pt-0.5`} style={{ color: C.obraInk }}>
                        {p.n}
                      </span>
                      <div>
                        <h3 className={`${display.className} text-base md:text-lg mb-1`} style={{ color: C.tinta }}>
                          {p.t}
                        </h3>
                        <p className="text-[13px] md:text-sm leading-snug" style={{ color: C.mutedL }}>
                          {p.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="fla-divtape" aria-hidden="true">
        <Cinta numbers />
      </div>

      {/* ── Opiniones: citas pegadas en el muro ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo n="04" dark>Opiniones</Rotulo>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mb-10 md:mb-14">
              <p className={`${display.className} leading-none text-[clamp(3.4rem,13vw,6rem)]`} style={{ color: C.tape }}>
                {BIZ.rating}
              </p>
              <div className="pb-2">
                <Stars value={4.3} color={C.tape} size={20} />
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.18em] mt-2`} style={{ color: C.mutedD }}>
                  {BIZ.reviews} opiniones en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor} delay={i * 110}>
                <figure
                  className="relative h-full pt-7 px-5 md:px-6 pb-5 rounded-sm"
                  style={{
                    backgroundColor: C.papel,
                    color: C.tinta,
                    transform: `rotate(${i === 1 ? 0.7 : -0.9}deg)`,
                    boxShadow: '0 10px 24px rgba(0,0,0,0.28)',
                  }}
                >
                  {/* el pedazo de huincha que la pega al muro */}
                  <span
                    className="absolute -top-2.5 left-1/2 block w-[92px] h-[22px]"
                    aria-hidden="true"
                    style={{
                      transform: `translateX(-50%) rotate(${i === 1 ? 2.5 : -2}deg)`,
                      backgroundColor: 'rgba(243,194,27,0.92)',
                      backgroundImage: `repeating-linear-gradient(90deg, ${C.tapeInk} 0 1px, transparent 1px 8px)`,
                      backgroundSize: '100% 9px',
                      backgroundPosition: 'top left',
                      backgroundRepeat: 'repeat-x',
                    }}
                  />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.tinta }}>
                    “{o.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.18em]`} style={{ color: C.obraInk }}>
                    {o.autor} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horario y cómo llegar ── */}
      <section id="horario" className="scroll-mt-20" style={{ backgroundColor: C.cemento, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <Rotulo n="05">Horario y cómo llegar</Rotulo>
            <h2 className={`${display.className} text-[clamp(1.8rem,6vw,3rem)] leading-[1.05] mb-3`} style={{ color: C.tinta }}>
              En Alerce Norte,
              <br />
              <span style={{ color: C.alerce }}>Puerto Montt</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: C.mutedL }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region}. La referencia exacta
              es el pin del mapa.
            </p>
            <div className="rounded-md overflow-hidden mb-6" style={{ backgroundColor: C.blanco, border: `1.5px solid ${C.lineL}` }}>
              <table className="w-full">
                <tbody>
                  {HORARIO.map((h) => (
                    <tr key={h.dias} className="border-b last:border-b-0 border-dashed" style={{ borderColor: C.lineL }}>
                      <td className={`${mono.className} px-4 md:px-5 py-3.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em]`} style={{ color: C.mutedL }}>
                        {h.dias}
                      </td>
                      <td className={`${mono.className} px-4 md:px-5 py-3.5 text-right text-[12px] md:text-sm font-bold`} style={{ color: h.horas === 'Cerrado' ? C.obraInk : C.tinta }}>
                        {h.horas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <WaBtn tone="carbon" className={FOCUS_LIGHT}>WhatsApp {BIZ.phoneDisplay}</WaBtn>
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center px-6 py-3 text-sm md:text-base rounded-md transition-colors hover:bg-black/5 tap-44 ${FOCUS_LIGHT}`}
                style={{ border: `1.5px solid rgba(34,37,42,0.4)`, color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-md overflow-hidden min-h-[320px] h-full" style={{ border: `1.5px solid ${C.lineL}`, backgroundColor: C.blanco }}>
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
      </section>

      {/* ── Cierre a sangre carbón + cinta ── */}
      <div className="fla-divtape" aria-hidden="true">
        <Cinta />
      </div>
      <section className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Rings stroke="rgba(255,255,255,0.05)" className="absolute -top-20 -right-16 w-[320px] h-[320px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(1.9rem,7vw,3.6rem)] leading-[1.04] mb-5`} style={{ color: C.blanco }}>
              ¿Te falta algo
              <br />
              <span style={{ color: C.obra }}>para la obra?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: C.mutedD }}>
              Manda tu lista o una foto por WhatsApp y te cotizan desde el
              mostrador.
            </p>
            <WaBtn className={FOCUS_DARK}>Cotiza por WhatsApp</WaBtn>
            <p className={`${mono.className} text-xs mt-5`} style={{ color: C.mutedD2 }}>
              {BIZ.phoneDisplay} · {BIZ.address}, {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.blanco }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-lg md:text-xl mb-1.5`}>
                {BIZ.name}
              </p>
              <address className="not-italic text-[13px] leading-relaxed" style={{ color: C.mutedD2 }}>
                {BIZ.address} · {BIZ.city}
                <br />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${mono.className} hover:text-white transition-colors ${FOCUS_DARK} tap-44`}>
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
            <div className={`flex flex-wrap gap-x-6 gap-y-2 text-[13px] ${mono.className}`} style={{ color: C.mutedD2 }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${FOCUS_DARK} tap-44`}>
                  {l.label}
                </a>
              ))}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`hover:text-white transition-colors ${FOCUS_DARK} tap-44`}>
                Google Maps
              </a>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutedD }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${FOCUS_DARK} tap-44`} style={{ color: C.blanco }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: así se vería tu sitio. Fotos y opiniones
            reales de su ficha de Google Maps.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${FOCUS_DARK} tap-44`} style={{ color: C.tape }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
