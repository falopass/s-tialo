import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, OPINIONES, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// La fachada manda: azul de las gavetas, amarillo de los estantes,
// negro del logo del caballo y el hueso de la cartulina de las etiquetas.
const C = {
  azul: '#0F3B8C',
  azulBajo: '#0A2A6E',
  azulAlto: '#2F63C9',
  amarillo: '#F5C518',
  tinta: '#111111',
  blanco: '#FFFFFF',
  hueso: '#F4F1EA',
  cartulina: '#FBF7EC',
  rojo: '#D23B2E',
  celeste: '#7EB8F0',
  cobre: '#C97B3D',
  mutL: 'rgba(17,17,17,0.66)',
  mutL2: 'rgba(17,17,17,0.5)',
  lineL: 'rgba(17,17,17,0.16)',
  mutD: 'rgba(255,255,255,0.82)',
  mutD2: 'rgba(255,255,255,0.62)',
  lineD: 'rgba(255,255,255,0.2)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-el-gaucho-nunez-valdivia',
  title: 'Ferretería El Gaucho Núñez · Ferretería en Valdivia',
  description:
    'Ferretería en Patricio Lynch 869, Valdivia: gasfitería y PVC, cobre, PPR, herramientas, pinturas, selladores y materiales. 4,8 en Google. Consulta por WhatsApp.',
  image: '/demos/ferreteria-el-gaucho-nunez-valdivia/fachada.webp',
})

const NAV_LINKS = [
  { label: 'El surtido', href: '#surtido' },
  { label: 'El local', href: '#local' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#horario' },
]

/**
 * La pared de gavetas del hero: 12 frentes azules con su etiqueta de
 * cartulina. Las piezas caen una a una (pd) y después los frentes se
 * abren hacia abajo (do) dejando ver la fachada real.
 */
const GAVETAS: {
  tag: string
  pc: string
  circulo: boolean
  px: string
  py: string
  ps: number
  r: string
}[] = [
  { tag: 'CODO ½″', pc: C.celeste, circulo: true, px: '30%', py: '22%', ps: 15, r: '0deg' },
  { tag: 'PPR 20', pc: C.amarillo, circulo: false, px: '58%', py: '30%', ps: 13, r: '12deg' },
  { tag: 'COBRE', pc: C.cobre, circulo: true, px: '44%', py: '18%', ps: 14, r: '0deg' },
  { tag: 'TEE ½″', pc: C.rojo, circulo: false, px: '62%', py: '26%', ps: 12, r: '-9deg' },
  { tag: 'VÁLVULA', pc: C.amarillo, circulo: true, px: '36%', py: '28%', ps: 13, r: '0deg' },
  { tag: 'UNIÓN', pc: C.celeste, circulo: false, px: '55%', py: '20%', ps: 14, r: '8deg' },
  { tag: 'TORNILLOS', pc: C.cartulina, circulo: true, px: '40%', py: '24%', ps: 11, r: '0deg' },
  { tag: 'SELLADOR', pc: C.rojo, circulo: true, px: '60%', py: '22%', ps: 14, r: '0deg' },
  { tag: 'PINTURA', pc: C.amarillo, circulo: false, px: '32%', py: '28%', ps: 13, r: '-10deg' },
  { tag: 'MANGUERA', pc: C.celeste, circulo: true, px: '52%', py: '20%', ps: 15, r: '0deg' },
  { tag: 'FIJACIÓN', pc: C.cartulina, circulo: false, px: '44%', py: '26%', ps: 12, r: '14deg' },
  { tag: 'TUERCAS', pc: C.cobre, circulo: true, px: '58%', py: '24%', ps: 12, r: '0deg' },
]

// Cinco familias del local, del cartel y de las fotos de su ficha.
const CATS = [
  {
    n: '02',
    name: 'Cobre, PPR y fittings',
    tag: 'Cobre · PPR',
    desc: 'PPR termofusión, cobre, cañerías, fitting y válvulas, como anuncia el cartel del local.',
    src: `${IMG}/gavetas-azules.webp`,
    alt: 'Gavetas azules y rojas llenas de piezas y fittings de metal',
    aspect: 'aspect-[3/4]',
    rot: 1.2,
  },
  {
    n: '03',
    name: 'Herramientas',
    tag: 'Herramientas',
    desc: 'Estuches y sets de herramientas para la obra y la casa, a la vista en la vitrina.',
    src: `${IMG}/herramientas.webp`,
    alt: 'Vitrina con estuches de herramientas amarillos y negros sobre estante de madera',
    aspect: 'aspect-[4/3]',
    rot: -1.8,
  },
  {
    n: '04',
    name: 'Pinturas y selladores',
    tag: 'Pinturas',
    desc: 'Pinturas, barnices, selladores y aceites para terminar bien cada trabajo.',
    src: `${IMG}/pinturas.webp`,
    alt: 'Estante con pinturas, barnices, selladores y aceites',
    aspect: 'aspect-[4/3]',
    rot: 1.5,
  },
  {
    n: '05',
    name: 'Materiales de construcción',
    tag: 'Materiales',
    desc: 'Sacos de mortero y cemento, mangueras, palas y ropa de trabajo.',
    src: `${IMG}/materiales.webp`,
    alt: 'Sacos de mortero, mangueras, horquillas y ropa de trabajo en el local',
    aspect: 'aspect-[3/4]',
    rot: -1.2,
  },
] as const

const CAT_FEAT = {
  n: '01',
  name: 'Gasfitería y PVC',
  desc: 'La pared de gavetas azules: fittings PVC, codos, tees y válvulas, cada pieza en su lugar.',
  src: `${IMG}/gavetas-pvc.webp`,
  alt: 'Gavetas azules llenas de fittings PVC celestes, cada una con su pieza',
  rot: -1.4,
}

const CHIPS = ['Muy surtida', 'Buena atención', 'Precios accesibles'] as const

const GAVETA_OUT: CSSProperties = {
  backgroundColor: C.azul,
  border: `2px solid ${C.tinta}`,
  boxShadow: '4px 4px 0 rgba(17,17,17,0.85)',
}

const BOCA: CSSProperties = {
  background: 'linear-gradient(180deg, #071E4E, #0A2A6E)',
  boxShadow: '0 1px 0 rgba(255,255,255,0.16)',
}

/** Rótulo de sección: mini gaveta + versalitas + filete. */
function Rotulo({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] mb-5"
      style={{ color: dark ? C.amarillo : C.azul }}
    >
      <span className="gn-minigav shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap">{children}</span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: dark ? 'rgba(255,255,255,0.25)' : 'rgba(17,17,17,0.2)' }}
        aria-hidden="true"
      />
    </p>
  )
}

/** La etiqueta de cartulina: se pega sobre la gaveta al entrar al viewport. */
function Etiqueta({
  children,
  rot = -1.6,
  className = '',
  style,
}: {
  children: React.ReactNode
  rot?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <span
      className={`gn-pega inline-flex items-center gap-1.5 px-2.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] leading-none whitespace-nowrap ${className}`}
      style={
        {
          '--rot': `${rot}deg`,
          backgroundColor: C.cartulina,
          color: C.tinta,
          border: `1.5px solid ${C.tinta}`,
          boxShadow: '2px 2px 0 rgba(17,17,17,0.75)',
          ...style,
        } as CSSProperties
      }
    >
      <span
        className="w-[7px] h-[7px] rounded-[2px] shrink-0"
        style={{ backgroundColor: C.amarillo, border: `1px solid ${C.tinta}` }}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}

/** Marco gaveta para fotos: boca del cajón arriba y etiqueta prendida. */
function Marco({
  tag,
  rot = -1.5,
  children,
  className = '',
  style,
}: {
  tag: string
  rot?: number
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <figure className={`m-0 ${className}`} style={{ ...GAVETA_OUT, ...style }}>
      <span className="relative z-10 block h-[10px]" style={BOCA} aria-hidden="true" />
      <Etiqueta rot={rot} className="absolute left-4 -top-[13px] z-20">
        {tag}
      </Etiqueta>
      {children}
    </figure>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
  dark = false,
  className = '',
}: {
  href: string
  children: React.ReactNode
  tone: 'amarillo' | 'azul' | 'linea'
  external?: boolean
  dark?: boolean
  className?: string
}) {
  const st: CSSProperties =
    tone === 'amarillo'
      ? { backgroundColor: C.amarillo, color: C.tinta, border: `2px solid ${C.tinta}` }
      : tone === 'azul'
        ? { backgroundColor: C.azul, color: C.blanco, border: `2px solid ${C.tinta}` }
        : { border: `2px solid ${C.tinta}`, color: C.tinta, boxShadow: '3px 3px 0 rgba(17,17,17,0.35)' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`gn-btn ${dark ? 'gn-btn--dark' : ''} inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold tracking-wide rounded-[3px] tap-44 ${className}`}
      style={{ boxShadow: '3px 3px 0 rgba(17,17,17,0.85)', ...st }}
    >
      {children}
    </a>
  )
}

/** Tarjeta de categoría: la gaveta misma, con la foto por contenido. */
function GavetaCard({
  cat,
  className = '',
}: {
  cat: (typeof CATS)[number]
  className?: string
}) {
  return (
    <article className={`overflow-hidden break-inside-avoid mb-3 ${className}`} style={GAVETA_OUT}>
      <span className="block h-[9px]" style={BOCA} aria-hidden="true" />
      <div className={`relative ${cat.aspect} border-y-2`} style={{ borderColor: C.tinta }}>
        <Image src={cat.src} alt={cat.alt} fill sizes="(min-width: 1024px) 22vw, 46vw" className="object-cover" />
      </div>
      <div className="relative px-3 pb-3.5 pt-4">
        <Etiqueta rot={cat.rot} className="absolute left-3 -top-[13px]">
          {cat.tag}
        </Etiqueta>
        <p className="text-[13px] font-bold uppercase tracking-wide leading-tight" style={{ color: C.blanco }}>
          {cat.name}
        </p>
        <p className="mt-1.5 text-[12px] md:text-[13px] leading-snug" style={{ color: 'rgba(255,255,255,0.86)' }}>
          {cat.desc}
        </p>
      </div>
    </article>
  )
}

/** Tira de mini gavetas: separador entre secciones. */
function Tira() {
  return (
    <div className="overflow-hidden" style={{ backgroundColor: C.azulBajo }} aria-hidden="true">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 flex gap-[5px]">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="relative h-[26px] flex-1 max-w-16 rounded-[2px]"
            style={{
              background: `linear-gradient(180deg, ${C.azulAlto} 0%, ${C.azul} 40%, #0B2E79 100%)`,
              border: '1px solid rgba(0,0,0,0.35)',
            }}
          >
            <span className="absolute top-[3px] inset-x-0 h-[4px]" style={{ background: 'rgba(0,0,0,0.3)' }} />
            <span
              className="absolute left-1/2 top-[11px] h-[7px] w-[18px] -translate-x-1/2"
              style={{ background: C.cartulina, border: `1px solid ${C.tinta}` }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function FerreteriaElGauchoNunezPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.hueso, color: C.tinta }}
    >
      <style>{`
        /* La pared de gavetas se llena y después se abre sobre la fachada. */
        .gn-front {
          position: relative; overflow: hidden; transform-origin: 50% 100%;
          border: 1px solid rgba(0,0,0,0.35); border-top: none;
          background: linear-gradient(180deg, ${C.azulAlto} 0%, #1A4AA6 18%, ${C.azul} 55%, #0B2E79 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -6px 0 rgba(0,0,0,0.22);
          animation: gn-abre .6s cubic-bezier(.55,.05,.35,1) var(--do,1.7s) both;
        }
        @keyframes gn-abre { to { transform: scaleY(0); opacity: 0 } }
        .gn-boca {
          position: absolute; top: 0; left: 0; right: 0; height: 10px;
          background: linear-gradient(180deg, #071E4E, #0A2A6E);
          box-shadow: 0 1px 0 rgba(255,255,255,0.15);
        }
        .gn-tag {
          position: absolute; left: 50%; top: 56%; transform: translate(-50%,-50%) rotate(-1.6deg);
          background: ${C.cartulina}; color: ${C.tinta};
          border: 1px solid ${C.tinta}; border-bottom-width: 2px;
          font-size: 9px; font-weight: 700; letter-spacing: .08em;
          padding: 3px 6px; white-space: nowrap;
        }
        .gn-asa {
          position: absolute; left: 50%; bottom: 9%; transform: translateX(-50%);
          width: 34px; height: 7px; border-radius: 3px;
          background: rgba(0,0,0,0.26); box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
        }
        .gn-pieza {
          position: absolute; opacity: 0;
          box-shadow: 0 0 0 1.5px rgba(0,0,0,0.32);
          animation: gn-cae .55s cubic-bezier(.3,.65,.45,1) var(--pd,.3s) both;
        }
        @keyframes gn-cae {
          0% { opacity: 0; transform: translateY(-170px) rotate(var(--r,0deg)) }
          15% { opacity: 1 }
          66% { transform: translateY(0) rotate(var(--r,0deg)) }
          82% { transform: translateY(-7px) rotate(var(--r,0deg)) }
          100% { opacity: 1; transform: translateY(0) rotate(var(--r,0deg)) }
        }

        /* La fachada se acomoda cuando se abren las gavetas. */
        .gn-foto { animation: gn-zoom 1.9s cubic-bezier(.25,.6,.25,1) both }
        @keyframes gn-zoom { from { transform: scale(1.07) } to { transform: scale(1) } }

        /* Entrada del contenido del hero. */
        .gn-fade { opacity: 0; animation: gn-fade .85s ease-out var(--d,0s) both }
        @keyframes gn-fade { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .gn-pop { opacity: 0; transform-origin: 12% 100%; animation: gn-pop .75s cubic-bezier(.25,1.25,.4,1) var(--d,0s) both }
        @keyframes gn-pop {
          from { opacity: 0; transform: translateY(26px) rotate(-6deg) scale(.92) }
          to { opacity: 1; transform: translateY(0) rotate(-1.4deg) scale(1) }
        }

        /* Las etiquetas se pegan sobre su gaveta al hacer scroll. */
        .gn-pega { transform: rotate(var(--rot,-1.5deg)) }
        @keyframes gn-pega {
          from { opacity: 0; transform: translateY(-14px) rotate(-8deg) scale(1.12) }
          to { opacity: 1; transform: translateY(0) rotate(var(--rot,-1.5deg)) scale(1) }
        }
        @supports (animation-timeline: view()) {
          .gn-pega { animation: gn-pega .55s cubic-bezier(.25,1.2,.45,1) both; animation-timeline: view(); animation-range: entry 0% entry 55% }
          .gn-wipe { animation: gn-wipe linear both; animation-timeline: view(); animation-range: entry 0% entry 60% }
        }
        @keyframes gn-wipe { from { clip-path: inset(0 0 100% 0) } to { clip-path: inset(0 0 0 0) } }

        .gn-minigav {
          width: 15px; height: 12px; border-radius: 2px;
          background: linear-gradient(180deg, rgba(0,0,0,0.32) 0 3px, ${C.amarillo} 3px);
          border: 1.5px solid rgba(17,17,17,0.85);
        }

        .gn-btn { transition: transform .16s ease, box-shadow .16s ease }
        .gn-btn:hover { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 rgba(17,17,17,0.85) !important }
        .gn-btn:active { transform: translate(2px,2px); box-shadow: 1px 1px 0 rgba(17,17,17,0.85) !important }
        .gn-btn:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }
        .gn-btn--dark:focus-visible { outline-color: ${C.amarillo} }
        .gn-ghost { transition: background-color .18s ease, transform .18s ease }
        .gn-ghost:hover { background-color: rgba(255,255,255,0.14) }
        .gn-ghost:active { transform: scale(.97) }
        .gn-ghost:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px }
        .gn-link { transition: color .18s ease }
        .gn-link:hover { color: ${C.blanco} }
        .gn-link:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px }
        .gn-linkl:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .gn-front { animation: none !important; transform: scaleY(0); opacity: 0 }
          .gn-pieza { display: none }
          .gn-foto, .gn-pega, .gn-wipe { animation: none !important }
          .gn-fade { animation: none !important; opacity: 1; transform: none }
          .gn-pop { animation: none !important; opacity: 1 }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Consultar"
        theme={{
          over: 'dark',
          bar: 'rgba(244,241,234,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.azul,
          btnInk: C.blanco,
        }}
      />

      {/* ── 1 · Hero: se llenan las gavetas ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.tinta }}
      >
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/fachada.webp`}
            alt="Fachada de Ferretería El Gaucho Núñez: letrero azul y amarillo con la bandera de Chile y productos exhibidos"
            fill
            priority
            sizes="100vw"
            className="gn-foto object-cover"
            style={{ objectPosition: '64% 50%' }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.32) 42%, rgba(17,17,17,0.82) 100%)',
          }}
          aria-hidden="true"
        />

        {/* la pared de 12 gavetas: se llena de piezas y después se abre */}
        <div
          className="absolute inset-0 grid grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-[5px] p-[5px] pointer-events-none"
          aria-hidden="true"
        >
          {GAVETAS.map((g, i) => (
            <div
              key={g.tag}
              className="gn-front"
              style={{ '--do': `${1.65 + i * 0.04}s` } as CSSProperties}
            >
              <span className="gn-boca" />
              <span className="gn-tag">{g.tag}</span>
              <span className="gn-asa" />
              <span
                className="gn-pieza"
                style={
                  {
                    '--pd': `${0.3 + i * 0.07}s`,
                    '--r': g.r,
                    left: g.px,
                    top: g.py,
                    width: g.ps,
                    height: g.ps,
                    backgroundColor: g.pc,
                    borderRadius: g.circulo ? '50%' : '3px',
                  } as CSSProperties
                }
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-8 md:pb-12">
          <p
            className="gn-fade flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.26em] mb-5"
            style={{ color: C.amarillo, '--d': '1.9s' } as CSSProperties}
          >
            <span className="gn-minigav shrink-0" aria-hidden="true" />
            Patricio Lynch 869 · Valdivia
          </p>
          <div className="gn-pop w-fit" style={{ '--d': '2.05s' } as CSSProperties}>
            <h1
              className={`${display.className} uppercase leading-[1.04] text-[clamp(1.8rem,7.4vw,4.4rem)] px-5 py-4 md:px-7 md:py-5`}
              style={{
                backgroundColor: C.cartulina,
                color: C.tinta,
                border: `2px solid ${C.tinta}`,
                boxShadow: '5px 5px 0 rgba(17,17,17,0.55)',
              }}
            >
              <span className="block">Tienen de todo,</span>
              <span className="block" style={{ color: C.azul }}>
                y lo encuentras.
              </span>
            </h1>
          </div>
          <p
            className="gn-fade mt-5 max-w-md text-[15px] md:text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.92)', '--d': '2.3s' } as CSSProperties}
          >
            Gasfitería y PVC, cobre y PPR, herramientas, pinturas, selladores y
            materiales: la ferretería surtida de Valdivia, de lunes a sábado.
          </p>
          <div
            className="gn-fade mt-6 flex flex-wrap items-center gap-3"
            style={{ '--d': '2.45s' } as CSSProperties}
          >
            <Btn href={WA_LINK} tone="amarillo" dark>
              Consulta por WhatsApp
            </Btn>
            <a
              href="#surtido"
              className="gn-ghost inline-flex items-center justify-center px-5 py-3 text-sm font-bold rounded-[3px] tap-44"
              style={{ border: '1.5px solid rgba(255,255,255,0.55)', color: C.blanco }}
            >
              Ver el surtido
            </a>
          </div>
          <p
            className="gn-fade mt-4 flex items-center gap-2 text-[13px]"
            style={{ color: 'rgba(255,255,255,0.88)', '--d': '2.55s' } as CSSProperties}
          >
            <Stars value={BIZ.ratingValue} color={C.amarillo} size={14} />
            <span>
              <strong className="font-bold">{BIZ.rating}</strong> · {BIZ.reviews} opiniones en Google
            </span>
          </p>
        </div>

        <div
          className="gn-fade relative z-10 border-t"
          style={{
            borderColor: 'rgba(255,255,255,0.22)',
            backgroundColor: 'rgba(17,17,17,0.72)',
            '--d': '2.6s',
          } as CSSProperties}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.16em] font-bold"
            style={{ color: 'rgba(255,255,255,0.82)' }}
          >
            <span>Lunes a sábado · 9:00 a 20:00</span>
            <span>Domingo cerrado</span>
          </div>
        </div>
      </section>

      <Tira />

      {/* ── 2 · El surtido: cada cosa en su gaveta ── */}
      <section id="surtido" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-10 lg:gap-14 items-start">
            <div>
              <Reveal>
                <Rotulo>El surtido</Rotulo>
                <h2
                  className={`${display.className} uppercase leading-[1.05] text-[clamp(2rem,7vw,3.6rem)]`}
                  style={{ color: C.tinta }}
                >
                  Todo tiene{' '}
                  <span
                    className="inline-block px-2"
                    style={{
                      backgroundColor: C.amarillo,
                      color: C.tinta,
                      boxShadow: '3px 3px 0 rgba(17,17,17,0.85)',
                    }}
                  >
                    su gaveta
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-5 text-[15px] md:text-base leading-relaxed max-w-md" style={{ color: C.mutL }}>
                  Cinco familias de producto ordenadas para que no pierdas
                  tiempo: cada pieza en su gaveta, cada gaveta con su
                  etiqueta. Si no lo ves, pregunta: te lo ubican.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-6">
                  <Btn href={WA_LINK} tone="azul">
                    Consulta por WhatsApp
                  </Btn>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <Marco tag="Etiquetas escritas a mano" rot={-1.4} className="relative mt-8 max-w-md">
                  <div className="relative aspect-[4/3] gn-wipe">
                    <Image
                      src={`${IMG}/estante-amarillo.webp`}
                      alt="Estante amarillo con tubos de sellador rotulados a mano en cartulina"
                      fill
                      sizes="(min-width: 1024px) 38vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                </Marco>
              </Reveal>
            </div>
            <div>
              {/* la gaveta destacada */}
              <Reveal>
                <article className="overflow-hidden mb-4" style={GAVETA_OUT}>
                  <span className="block h-[9px]" style={BOCA} aria-hidden="true" />
                  <div className="relative aspect-[16/10] border-y-2" style={{ borderColor: C.tinta }}>
                    <Image
                      src={CAT_FEAT.src}
                      alt={CAT_FEAT.alt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative px-4 pb-4 pt-5">
                    <Etiqueta rot={CAT_FEAT.rot} className="absolute left-4 -top-[13px]">
                      {CAT_FEAT.name}
                    </Etiqueta>
                    <p className="text-[13px] md:text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.88)' }}>
                      {CAT_FEAT.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
              {/* el resto de la cuadrícula, alturas libres */}
              <div className="columns-2 gap-3">
                {CATS.map((cat, i) => (
                  <Reveal key={cat.n} delay={i * 90} className="break-inside-avoid">
                    <GavetaCard cat={cat} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · El local: la reja azul y amarilla ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* collage de la fachada y el sello del caballo */}
          <div className="relative h-[430px] md:h-[540px] order-2 lg:order-1">
            <Marco
              tag="La reja"
              rot={-1.8}
              className="absolute left-0 top-6 w-[66%] z-0"
              style={{ transform: 'rotate(-1.2deg)' }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={`${IMG}/fachada-colores.webp`}
                  alt="Reja de madera pintada de azul y amarillo con la palabra ferretería y el letrero del caballo"
                  fill
                  sizes="(min-width: 1024px) 30vw, 62vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
            </Marco>
            <Marco
              tag="La fachada"
              rot={1.4}
              className="absolute right-0 bottom-0 w-[56%] z-10"
              style={{ transform: 'rotate(1.6deg)' }}
            >
              <div className="relative aspect-[6/5]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Letrero Ferretería El Gaucho Núñez con el teléfono y productos exhibidos en la vitrina"
                  fill
                  sizes="(min-width: 1024px) 26vw, 54vw"
                  className="object-cover"
                />
              </div>
            </Marco>
            <Marco
              tag="Adentro"
              rot={-2.4}
              className="absolute left-[2%] -bottom-3 w-[34%] z-10"
              style={{ transform: 'rotate(-2.6deg)' }}
            >
              <div className="relative aspect-square">
                <Image
                  src={`${IMG}/gasfiteria.webp`}
                  alt="Rincón del local con herramientas colgadas en panel, tubos y baldes"
                  fill
                  sizes="(min-width: 1024px) 16vw, 34vw"
                  className="object-cover"
                />
              </div>
            </Marco>
            {/* el sello del caballo */}
            <div className="absolute -top-2 right-[9%] z-20 w-[92px] md:w-[120px]" style={{ transform: 'rotate(-7deg)' }}>
              <div
                className="rounded-full p-[5px]"
                style={{
                  backgroundColor: C.blanco,
                  border: `2px solid ${C.tinta}`,
                  boxShadow: '3px 3px 0 rgba(17,17,17,0.8)',
                }}
              >
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Logo de Ferretería El Gaucho Núñez: cabeza de caballo con herradura y martillo"
                  width={700}
                  height={703}
                  className="rounded-full w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Rotulo>El local</Rotulo>
              <h2
                className={`${display.className} uppercase leading-[1.06] text-[clamp(2rem,7vw,3.6rem)]`}
                style={{ color: C.tinta }}
              >
                “Encuentras{' '}
                <span style={{ color: C.azul }}>de todo”</span>
              </h2>
              <p className="mt-3 text-[11px] font-bold tracking-[0.18em]" style={{ color: C.mutL }}>
                Marcela Matamala · opinión en Google
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-5 space-y-4 text-[15px] md:text-base leading-relaxed max-w-md" style={{ color: C.mutL }}>
                <p>
                  La reja azul y amarilla de Patricio Lynch delata la casa:
                  adentro hay una ferretería de barrio, muy surtida y
                  ordenada, donde te atiende gente que conoce cada gaveta.
                </p>
                <p>
                  Pregunta sin miedo: quienes van destacan la atención
                  personalizada, los buenos precios y que no hay que esperar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {CHIPS.map((chip, i) => (
                  <Etiqueta key={chip} rot={[-1.8, 1.4, -1.2][i]}>
                    {chip}
                  </Etiqueta>
                ))}
              </div>
            </Reveal>
            <Reveal delay={260}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gn-linkl inline-flex items-center gap-1.5 mt-7 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.azul, textDecorationColor: 'rgba(15,59,140,0.4)' }}
              >
                Ver la ficha en Google
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · Opiniones: la nota del barrio ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.azul }}>
        <Tira />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <Reveal>
                <Rotulo dark>Opiniones</Rotulo>
                <p
                  className={`${display.className} leading-none text-[clamp(4.6rem,19vw,8.5rem)]`}
                  style={{ color: C.amarillo }}
                >
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.amarillo} size={22} />
                </div>
                <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: C.mutD }}>
                  {BIZ.reviews} opiniones en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gn-linkl inline-flex items-center gap-1.5 mt-4 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.amarillo, textDecorationColor: 'rgba(245,197,24,0.45)', outlineColor: C.amarillo }}
                >
                  Ver la ficha en Google
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </Reveal>
            </div>
            <div className="columns-1 sm:columns-2 gap-4">
              {OPINIONES.map((o, i) => (
                <Reveal key={o.autor} delay={i * 100}>
                  <figure
                    className="relative break-inside-avoid mb-4 px-5 pt-6 pb-5"
                    style={{
                      backgroundColor: C.cartulina,
                      border: `1.5px solid ${C.tinta}`,
                      boxShadow: '4px 4px 0 rgba(17,17,17,0.8)',
                      transform: `rotate(${[-0.9, 0.8, -1.1, 0.7][i]}deg)`,
                    }}
                  >
                    <span
                      className="absolute -top-2.5 left-1/2 block w-[74px] h-[18px] -translate-x-1/2"
                      aria-hidden="true"
                      style={{
                        backgroundColor: 'rgba(245,197,24,0.92)',
                        border: `1px solid ${C.tinta}`,
                        transform: `translateX(-50%) rotate(${i % 2 === 0 ? -3 : 2.5}deg)`,
                      }}
                    />
                    <blockquote className="text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                      “{o.texto}”
                    </blockquote>
                    <figcaption
                      className="mt-4 text-[10px] font-bold tracking-[0.18em]"
                      style={{ color: C.azul }}
                    >
                      {o.autor} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Horario y cómo llegar ── */}
      <section id="horario" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-10 md:gap-14 items-start">
          <div>
            <Reveal>
              <Rotulo>Horario y cómo llegar</Rotulo>
              <h2
                className={`${display.className} uppercase leading-[1.06] text-[clamp(1.9rem,6.4vw,3.4rem)]`}
                style={{ color: C.tinta }}
              >
                {BIZ.address},
                <br />
                <span style={{ color: C.azul }}>de lunes a sábado.</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <div className="mt-7 space-y-3 max-w-md">
                {HORARIO.map((h, i) => (
                  <div
                    key={h.dias}
                    className="flex items-center justify-between gap-3 px-4 py-3.5"
                    style={GAVETA_OUT}
                  >
                    <Etiqueta rot={i === 0 ? -1.6 : 1.4}>{h.dias}</Etiqueta>
                    <span
                      className="text-[15px] md:text-base font-bold whitespace-nowrap"
                      style={{ color: h.horas === 'Cerrado' ? C.amarillo : C.blanco }}
                    >
                      {h.horas}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={180}>
              <address className="not-italic mt-6 text-[15px] md:text-base leading-relaxed" style={{ color: C.mutL }}>
                {BIZ.address}, {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gn-linkl inline-block font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.azul, textDecorationColor: 'rgba(15,59,140,0.4)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <Btn href={WA_LINK} tone="azul">
                  Consulta por WhatsApp
                </Btn>
                <Btn href={MAPS_URL} tone="linea">
                  Cómo llegar
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Marco tag="El mapa" rot={1.4} className="relative">
              <div className="relative aspect-[4/3] min-h-[300px]">
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Marco>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Cierre: pregunta por la pieza ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            <Etiqueta rot={-1.6} className="mx-auto">
              El Gaucho Núñez
            </Etiqueta>
            <h2
              className={`${display.className} uppercase leading-[1.06] text-[clamp(2.1rem,7.4vw,3.8rem)] mt-5`}
              style={{ color: C.blanco }}
            >
              ¿Te falta <span style={{ color: C.amarillo }}>una pieza?</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-[15px] md:text-base leading-relaxed" style={{ color: C.mutD }}>
              Manda tu lista o una foto por WhatsApp y te responde el mismo
              local.
            </p>
            <div className="mt-7 flex flex-wrap justify-center items-center gap-4">
              <Btn href={WA_LINK} tone="amarillo" dark>
                Consulta por WhatsApp
              </Btn>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gn-link text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.mutD, textDecorationColor: 'rgba(255,255,255,0.35)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.blanco }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span
                className="inline-block rounded-full p-[3px] shrink-0"
                style={{ backgroundColor: C.blanco, border: `1.5px solid ${C.lineD}` }}
              >
                <Image
                  src={`${IMG}/logo.webp`}
                  alt=""
                  width={700}
                  height={703}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </span>
              <div>
                <p className={`${display.className} text-base leading-tight`}>{BIZ.name}</p>
                <p className="text-[12px] mt-0.5" style={{ color: C.mutD2 }}>
                  {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13px]" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="gn-link tap-44 inline-flex items-center" style={{ color: C.mutD }}>
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gn-link tap-44 inline-flex items-center"
                style={{ color: C.mutD }}
              >
                {BIZ.phoneDisplay}
              </a>
            </nav>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD2 }}>
              Sitio de muestra preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gn-link font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.blanco }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}. Datos, fotos y opiniones reales de su ficha de
              Google Maps.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="gn-link font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.amarillo }}
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
