import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Drawer } from './drawer'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, MARCAS, REVIEW, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// De su logo y sus envases: grafito, gris perla, el dorado champaña
// de las líneas capilares y el verde jaborandi como acento.
const C = {
  grafito: '#2B2B2E',
  carbon: '#232326',
  vitrina: '#1E1E21',
  perla: '#A7A6A3',
  papel: '#F4F2EE',
  blanco: '#FFFFFF',
  dorado: '#C9A86A',
  doradoInk: '#7D6335',
  jaborandi: '#6FA287',
  jaborandiInk: '#3F6B56',
  tinta: '#26262A',
  mutedD: 'rgba(244,242,238,0.72)',
  mutedD2: 'rgba(244,242,238,0.56)',
  mutedL: 'rgba(38,38,42,0.68)',
  lineD: 'rgba(244,242,238,0.14)',
  lineL: 'rgba(38,38,42,0.14)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'pisek-osorno',
  title: 'Písek · Sácate partido. Productos de belleza en Osorno',
  description:
    'Tienda de productos de belleza en Patricio Lynch 1384, Osorno: peluquería, barbería, uñas, maquillaje y perfumería, para profesionales y para tu casa. Consulta por WhatsApp.',
  image: '/demos/pisek-osorno/interior-tienda.webp',
})

const NAV_LINKS = [
  { label: 'Categorías', href: '#categorias' },
  { label: 'Para ti', href: '#para-ti' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#donde' },
]

/** Rótulo de sección: número de repisa + línea fina, como etiqueta de vitrina. */
function Rotulo({ n, children, dark = true }: { n: string; children: React.ReactNode; dark?: boolean }) {
  const ink = dark ? C.dorado : C.doradoInk
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.26em] mb-5"
      style={{ color: dark ? C.mutedD : C.mutedL }}
    >
      <span
        className="inline-block h-[9px] w-[9px] shrink-0 rotate-45 rounded-[2px]"
        style={{ backgroundColor: ink, boxShadow: dark ? `0 0 10px ${ink}` : undefined }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap">
        <span style={{ color: ink }}>{n}</span> · {children}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
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
  tone: 'dorado' | 'line' | 'tinta' | 'lineD'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'dorado'
      ? { backgroundColor: C.dorado, color: C.grafito }
      : tone === 'tinta'
        ? { backgroundColor: C.tinta, color: C.blanco }
        : tone === 'lineD'
          ? { border: '1.5px solid rgba(38,38,42,0.55)', color: C.tinta }
          : { border: '1.5px solid rgba(244,242,238,0.45)', color: C.blanco }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="pk-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/* Iconos de trazo único: vitrina, peluquería y tienda. */
function Ic({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    tijeras: (
      <>
        <circle cx="6.4" cy="6.6" r="2.5" />
        <circle cx="6.4" cy="17.4" r="2.5" />
        <path d="M8.5 8.3 L19.5 16.7 M8.5 15.7 L19.5 7.3" />
      </>
    ),
    maquina: (
      <>
        <rect x="7.5" y="9.2" width="9" height="10.6" rx="2.2" />
        <path d="M9.2 9.2V5.6M11.4 9.2V5M13.6 9.2V5.6M15.8 9.2V5" />
        <path d="M10.8 13.4h2.4" />
      </>
    ),
    esmalte: (
      <>
        <rect x="8.4" y="10.4" width="7.2" height="9.8" rx="2.1" />
        <rect x="10.7" y="4.4" width="2.6" height="6" rx="1.1" />
      </>
    ),
    perfume: (
      <>
        <rect x="8" y="10.4" width="8" height="9.6" rx="2.2" />
        <path d="M10.6 10.4V7.6h2.8v2.8M12 7.6V5.9" />
        <path d="M17.8 6.4h2.1M18.3 4.2l1.4-1.3M18.3 8.6l1.4 1.3" />
      </>
    ),
    labial: (
      <>
        <rect x="9.7" y="13" width="4.6" height="7" rx="1.2" />
        <path d="M10.6 13V7.4c0-.9 2.8-3 2.8-3V13" />
      </>
    ),
    casa: (
      <>
        <path d="M4 11.4 12 4.6l8 6.8" />
        <path d="M6.6 10.2v9.4h10.8v-9.4" />
        <path d="M10.2 19.6v-5h3.6v5" />
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
    fono: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    wa: (
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    ),
    ig: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
        <circle cx="12" cy="12" r="3.9" />
        <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
    fb: (
      <path d="M13.6 21v-6.8h2.7l.5-3h-3.2V9.2c0-.9.3-1.6 1.7-1.6h1.7V4.9c-.3 0-1.4-.1-2.5-.1-2.4 0-4 1.4-4 4v2.4H8v3h2.5V21z" />
    ),
    check: <path d="M4 12.5 L9.5 18 L20 6.5" />,
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

const CATEGORIAS = [
  {
    n: '01',
    icon: 'tijeras',
    name: 'Peluquería',
    desc: 'Tratamientos y líneas capilares completas (shampoo y máscara), tinturas, planchas y herramientas de trabajo.',
    chips: ['Líneas capilares', 'Tinturas', 'Planchas y herramientas'],
    img: `${IMG}/linea-murumuru.webp`,
    alt: 'Shampoo y máscara de la línea Murumuru sobre el mesón de la tienda',
    pos: '50% 62%',
  },
  {
    n: '02',
    icon: 'esmalte',
    name: 'Uñas',
    desc: 'Kits de manicure, geles, removedores, limas y acrílico para dejar tus uñas como de salón.',
    chips: ['Kits de manicure', 'Geles', 'Acrílico'],
    img: `${IMG}/kit-unas.webp`,
    alt: 'Insumos de uñas: removedor, geles, limas y base coat',
    pos: '50% 50%',
  },
  {
    n: '03',
    icon: 'maquina',
    name: 'Barbería',
    desc: 'Máquinas y trimmers para el trabajo de barbería, las mismas que usan los profesionales.',
    chips: ['Máquinas', 'Trimmers'],
  },
  {
    n: '04',
    icon: 'perfume',
    name: 'Maquillaje y perfumería',
    desc: 'Maquillaje y perfumes para el día a día, para completar tu rutina o para regalar.',
    chips: ['Maquillaje', 'Perfumes'],
  },
] as const

/**
 * La vitrina del hero: tres repisas de vidrio que se encienden una por
 * una con un barrido de luz, y en cada repisa aparecen los productos
 * reales de la tienda. Todo con transform/opacity/clip-path en CSS;
 * sin JS. Con movimiento reducido queda toda encendida y quieta.
 */
function Vitrina() {
  const vidrio: CSSProperties = {
    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 18%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 82%, transparent 100%)',
    boxShadow: '0 3px 14px rgba(201,168,106,0.35), 0 8px 22px rgba(255,255,255,0.10)',
  }
  const prod: CSSProperties = {
    border: '1px solid rgba(255,255,255,0.18)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.45)',
  }
  return (
    <figure
      className="pk-vitrina relative overflow-hidden rounded-2xl"
      style={{
        border: `1.5px solid ${C.lineD}`,
        background: 'linear-gradient(165deg, #28282D 0%, #1D1D20 70%)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.07)',
      }}
      aria-label="Vitrina de la tienda: repisas de vidrio con productos de peluquería, uñas y el interior del local"
    >
      {/* barra de luz del techo */}
      <div
        className="pk-luzbar absolute top-0 inset-x-10 h-[3px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(233,207,150,0.95), transparent)',
          boxShadow: '0 0 20px 4px rgba(201,168,106,0.5), 0 14px 34px rgba(201,168,106,0.22)',
        }}
        aria-hidden="true"
      />
      {/* reflejo diagonal del vidrio */}
      <div
        className="absolute inset-y-0 w-[26%] pointer-events-none"
        style={{ left: '6%', background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.05), transparent)', transform: 'skewX(-13deg)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 w-[14%] pointer-events-none"
        style={{ right: '4%', background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.035), transparent)', transform: 'skewX(-13deg)' }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-3.5 px-4 md:px-5 pt-7 pb-5 h-[396px] md:h-[478px]">
        {/* repisa 1 · peluquería */}
        <div className="pk-repisa relative overflow-hidden" style={{ flex: '31 1 0%' }}>
          <p className="pk-tag absolute top-0 left-0">01 · Peluquería</p>
          <div className="absolute bottom-3 inset-x-0 flex items-end justify-center gap-2.5 md:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- webp ya optimizados en public/ */}
            <img
              src={`${IMG}/linea-jaborandi.webp`}
              width={1280}
              height={1600}
              alt="Shampoo y acondicionador de la línea Jaborandi"
              className="pk-prod h-[68px] w-[55px] md:h-[88px] md:w-[71px] object-cover rounded-lg"
              style={{ ...prod, animationDelay: '1.18s', objectPosition: '50% 55%' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- webp ya optimizados en public/ */}
            <img
              src={`${IMG}/linea-mandioca.webp`}
              width={1280}
              height={1600}
              alt="Shampoo y máscara de la línea Mandioca"
              className="pk-prod h-[68px] w-[55px] md:h-[88px] md:w-[71px] object-cover rounded-lg"
              style={{ ...prod, animationDelay: '1.32s', objectPosition: '50% 45%' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- webp ya optimizados en public/ */}
            <img
              src={`${IMG}/linea-murumuru.webp`}
              width={1280}
              height={1600}
              alt="Shampoo y máscara de la línea Murumuru"
              className="pk-prod h-[68px] w-[55px] md:h-[88px] md:w-[71px] object-cover rounded-lg"
              style={{ ...prod, animationDelay: '1.46s', objectPosition: '50% 40%' }}
            />
          </div>
          <span className="pk-vidrio absolute bottom-0 inset-x-1 h-[3px] rounded-full" style={{ ...vidrio, animationDelay: '0.82s' }} aria-hidden="true" />
          <span className="pk-sweep" style={{ animationDelay: '0.75s' }} aria-hidden="true" />
        </div>

        {/* repisa 2 · uñas */}
        <div className="pk-repisa relative overflow-hidden" style={{ flex: '26 1 0%' }}>
          <p className="pk-tag absolute top-0 left-0">02 · Uñas</p>
          <div className="absolute bottom-3 inset-x-0 flex items-end justify-center gap-2.5 md:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- webp ya optimizados en public/ */}
            <img
              src={`${IMG}/kit-unas.webp`}
              width={1170}
              height={1173}
              alt="Kit de insumos de uñas: geles, removedor, limas y base coat"
              className="pk-prod h-[66px] w-[66px] md:h-[82px] md:w-[82px] object-cover rounded-lg"
              style={{ ...prod, animationDelay: '1.92s' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- webp ya optimizados en public/ */}
            <img
              src={`${IMG}/kit-acrilico.webp`}
              width={1170}
              height={986}
              alt="Kit de acrílico para uñas"
              className="pk-prod h-[66px] w-[78px] md:h-[82px] md:w-[97px] object-cover rounded-lg"
              style={{ ...prod, animationDelay: '2.06s' }}
            />
          </div>
          <span className="pk-vidrio absolute bottom-0 inset-x-1 h-[3px] rounded-full" style={{ ...vidrio, animationDelay: '1.47s' }} aria-hidden="true" />
          <span className="pk-sweep" style={{ animationDelay: '1.4s' }} aria-hidden="true" />
        </div>

        {/* repisa 3 · la tienda por dentro */}
        <div className="pk-repisa relative overflow-hidden" style={{ flex: '37 1 0%' }}>
          <div className="absolute inset-x-0 bottom-3 top-5">
            {/* eslint-disable-next-line @next/next/no-img-element -- webp ya optimizados en public/ */}
            <img
              src={`${IMG}/interior-tienda.webp`}
              width={1280}
              height={1600}
              alt="El interior de Písek: estantes llenos de productos y una plancha BaByliss PRO en el mesón"
              className="pk-prod h-full w-full object-cover rounded-lg"
              style={{ ...prod, animationDelay: '2.55s', objectPosition: '50% 64%' }}
            />
          </div>
          <p
            className="pk-tag absolute top-0 left-0 px-2 py-[3px] rounded-full"
            style={{ backgroundColor: 'rgba(20,20,23,0.88)' }}
          >
            03 · La tienda por dentro
          </p>
          <span className="pk-vidrio absolute bottom-0 inset-x-1 h-[3px] rounded-full" style={{ ...vidrio, animationDelay: '2.12s' }} aria-hidden="true" />
          <span className="pk-sweep" style={{ animationDelay: '2.05s' }} aria-hidden="true" />
        </div>
      </div>
    </figure>
  )
}

export default function PisekOsornoPage() {
  return (
    <div
      className={`${body.className} pk-page min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.grafito, color: C.blanco }}
    >
      <style>{`
        /* Texto del hero en cascada. */
        @keyframes pk-rise { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: none } }
        .pk-rise { animation: pk-rise 0.8s cubic-bezier(.22,.61,.2,1) both }

        /* La barra de luz del techo de la vitrina se enciende primero. */
        @keyframes pk-luzbar { from { opacity: 0 } to { opacity: 1 } }
        .pk-luzbar { animation: pk-luzbar 1s ease .15s both }

        /* La repisa de vidrio aparece con el barrido. */
        @keyframes pk-vidrio { from { opacity: 0 } to { opacity: 1 } }
        .pk-vidrio { animation: pk-vidrio .7s ease both }

        /* El barrido de luz cruza cada repisa de izquierda a derecha. */
        .pk-sweep {
          position: absolute; top: -10%; bottom: -10%; left: 0; width: 42%;
          pointer-events: none; opacity: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.30) 42%, rgba(201,168,106,0.34) 58%, transparent 100%);
          transform: translateX(-170%) skewX(-13deg);
          animation: pk-sweep 0.95s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes pk-sweep {
          0% { transform: translateX(-170%) skewX(-13deg); opacity: 0 }
          14% { opacity: 1 }
          84% { opacity: 1 }
          100% { transform: translateX(345%) skewX(-13deg); opacity: 0 }
        }

        /* Los productos se paran sobre la repisa encendida. */
        @keyframes pk-prod { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .pk-prod { animation: pk-prod .65s cubic-bezier(.25,.9,.3,1.12) both }

        /* Etiqueta de repisa. */
        .pk-tag {
          z-index: 2; font-size: 9px; font-weight: 700; letter-spacing: .22em;
          text-transform: uppercase; color: ${C.dorado};
        }
        @media (min-width: 768px) { .pk-tag { font-size: 10px } }

        /* El subrayado dorado del lema se dibuja. */
        .pk-under { clip-path: inset(0 104% 0 0); animation: pk-under .85s cubic-bezier(.4,0,.2,1) .95s both }
        @keyframes pk-under { to { clip-path: inset(0 -3% 0 0) } }

        /* Categorías: el cajón se abre. */
        .pk-cajon { position: relative; overflow: hidden }
        .pk-cajon-in {
          opacity: 0; transform: translateX(-16px);
          transition: opacity .7s ease var(--pkd,0ms), transform .7s cubic-bezier(.25,.1,.25,1) var(--pkd,0ms);
        }
        .pk-open .pk-cajon-in { opacity: 1; transform: none }
        .pk-frente {
          position: absolute; inset: 0; z-index: 2;
          display: flex; align-items: center; justify-content: flex-end; padding-right: 20px;
          background: linear-gradient(180deg, #343438 0%, #232326 100%);
          transform: translateX(0);
          transition: transform .8s cubic-bezier(.6,.05,.25,1) calc(var(--pkd,0ms) + 90ms);
        }
        .pk-tirador {
          width: 54px; height: 5px; border-radius: 99px;
          background: linear-gradient(90deg, ${C.dorado}, #8A6F42);
          box-shadow: 0 0 10px rgba(201,168,106,0.5);
        }
        .pk-open .pk-frente { transform: translateX(103%) }

        .pk-btn { transition: transform .18s ease, filter .18s ease }
        .pk-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .pk-btn:active { transform: scale(.97) }
        .pk-page a:focus-visible { outline: 3px solid ${C.dorado}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .pk-rise, .pk-luzbar, .pk-vidrio, .pk-sweep, .pk-prod, .pk-under { animation: none !important }
          .pk-rise, .pk-vidrio, .pk-prod { opacity: 1 !important; transform: none !important }
          .pk-luzbar { opacity: 1 }
          .pk-sweep { display: none }
          .pk-under { clip-path: none }
          .pk-cajon-in { opacity: 1 !important; transform: none !important; transition: none }
          .pk-frente { display: none }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} tracking-wide`} style={{ color: C.blanco }}>
            Písek
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(43,43,46,0.94)',
          ink: C.blanco,
          line: C.lineD,
          btnBg: C.dorado,
          btnInk: C.grafito,
        }}
      />

      {/* ── 1 · Hero: la vitrina que se ilumina ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
        {/* reflejos de vidrio del local */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(244,242,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,238,0.03) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-36 -left-36 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,168,106,0.13) 0%, transparent 64%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(111,162,135,0.10) 0%, transparent 62%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-32 pb-9 md:pb-16 grid lg:grid-cols-[1.04fr_0.96fr] gap-9 lg:gap-14 items-center">
          <div>
            <p
              className="pk-rise flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.26em] mb-5"
              style={{ color: C.mutedD, animationDelay: '0.12s' }}
            >
              <span
                className="inline-block h-[9px] w-[9px] rotate-45 rounded-[2px]"
                style={{ backgroundColor: C.dorado, boxShadow: `0 0 10px ${C.dorado}` }}
                aria-hidden="true"
              />
              Osorno · Patricio Lynch 1384
            </p>
            <h1
              className={`${display.className} leading-[1.04] tracking-[0.005em] text-[clamp(2.7rem,11.4vw,5rem)]`}
              style={{ color: C.blanco }}
            >
              <span className="block overflow-hidden pb-1">
                <span className="pk-rise block" style={{ animationDelay: '0.26s' }}>
                  Sácate
                </span>
              </span>
              <span className="block overflow-hidden pb-3">
                <span className="pk-rise relative inline-block" style={{ animationDelay: '0.4s', color: C.dorado }}>
                  partido.
                  <svg
                    className="pk-under absolute left-0 -bottom-1.5 w-full"
                    viewBox="0 0 300 14"
                    preserveAspectRatio="none"
                    style={{ height: '0.14em' }}
                    aria-hidden="true"
                  >
                    <path d="M6 9 C 84 4 216 4 294 8.6" fill="none" stroke={C.dorado} strokeWidth="4.6" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>
            <p
              className="pk-rise mt-4 max-w-md text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutedD, animationDelay: '0.54s' }}
            >
              Productos de peluquería, barbería, uñas, maquillaje y
              perfumería, para profesionales y para tu casa.
            </p>
            <div className="pk-rise mt-6 flex flex-wrap gap-3" style={{ animationDelay: '0.66s' }}>
              <Btn href={WA_LINK} tone="dorado">
                Consulta por WhatsApp
              </Btn>
              <Btn href="#donde" tone="line" external={false}>
                Cómo llegar
              </Btn>
            </div>
            <p
              className="pk-rise mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: C.mutedD2, animationDelay: '0.78s' }}
            >
              <span className="inline-flex items-center gap-2">
                <Ic name="reloj" className="w-3.5 h-3.5" />
                Lun a vie 9:30 a 18:00
              </span>
              <span aria-hidden="true" className="h-[3px] w-[3px] rotate-45" style={{ backgroundColor: C.dorado }} />
              <span>Sáb 10:00 a 14:00</span>
            </p>
          </div>

          <div className="pk-rise" style={{ animationDelay: '0.5s' }}>
            <Vitrina />
            <p
              className="mt-3 text-center text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: C.mutedD2 }}
            >
              Productos reales, encendiéndose repisa a repisa
            </p>
          </div>
        </div>
      </section>

      {/* ── 2 · Cinta de categorías ── */}
      <div className="border-y" style={{ backgroundColor: C.carbon, borderColor: C.lineD }}>
        <ul className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 md:py-4 flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-[11px] md:text-sm font-bold uppercase tracking-[0.16em]">
          {['Peluquería', 'Barbería', 'Uñas', 'Maquillaje', 'Perfumería'].map((cat, i) => (
            <li key={cat} className="flex items-center gap-5" style={{ color: C.perla }}>
              {i > 0 && <span className="h-[6px] w-[6px] rotate-45" style={{ backgroundColor: C.dorado }} aria-hidden="true" />}
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* ── 3 · Categorías: los cajones de la vitrina ── */}
      <section id="categorias" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo n="REP.01" dark={false}>
              Qué encontrarás
            </Rotulo>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 items-end mb-9 md:mb-14">
              <h2
                className={`${display.className} leading-[1.04] text-[clamp(2rem,7vw,3.9rem)]`}
                style={{ color: C.tinta }}
              >
                La tienda,{' '}
                <span style={{ color: C.doradoInk }}>repisa por repisa.</span>
              </h2>
              <p className="text-[15px] md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                Cuatro mundos en una sola vitrina. Pregunta por el producto
                que buscas y te confirman disponibilidad al tiro.
              </p>
            </div>
          </Reveal>
          <ul>
            {CATEGORIAS.map((cat, i) => (
              <li key={cat.n} className="border-t last:border-b" style={{ borderColor: C.lineL }}>
                <Drawer delay={i * 70}>
                  <div className="group grid md:grid-cols-[56px_1fr_280px] lg:grid-cols-[72px_1fr_330px] gap-4 md:gap-8 items-center py-5 md:py-7">
                    <span
                      className={`${display.className} text-2xl md:text-3xl leading-none transition-transform duration-300 group-hover:translate-x-1`}
                      style={{ color: C.doradoInk }}
                      aria-hidden="true"
                    >
                      {cat.n}
                    </span>
                    <div>
                      <h3 className={`${display.className} text-xl md:text-[1.7rem] leading-tight mb-1.5`} style={{ color: C.tinta }}>
                        {cat.name}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed max-w-lg mb-3" style={{ color: C.mutedL }}>
                        {cat.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.chips.map((chip) => (
                          <span
                            key={chip}
                            className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-bold border px-2.5 py-1 rounded-full"
                            style={{ borderColor: C.lineL, color: C.mutedL }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                    {'img' in cat && cat.img ? (
                      <figure className="relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-[4/3]" style={{ border: `1.5px solid ${C.lineL}` }}>
                        <Image
                          src={cat.img}
                          alt={cat.alt}
                          fill
                          sizes="(min-width: 1024px) 330px, (min-width: 768px) 280px, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          style={{ objectPosition: cat.pos }}
                        />
                      </figure>
                    ) : (
                      <div
                        className="relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-[4/3] flex items-center justify-center"
                        style={{
                          border: `1.5px solid ${C.lineL}`,
                          background: 'linear-gradient(150deg, #313135 0%, #232327 100%)',
                        }}
                      >
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(128deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 16px)',
                          }}
                          aria-hidden="true"
                        />
                        <span
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundColor: 'rgba(201,168,106,0.14)', color: C.dorado, border: '1.5px solid rgba(201,168,106,0.4)' }}
                        >
                          <Ic name={cat.icon} className="w-7 h-7 md:w-8 md:h-8" />
                        </span>
                      </div>
                    )}
                  </div>
                </Drawer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4 · Para profesionales y para tu casa ── */}
      <section id="para-ti" className="scroll-mt-20" style={{ backgroundColor: C.blanco, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
            <div>
              <Reveal>
                <Rotulo n="REP.02" dark={false}>
                  Para profesionales y para tu casa
                </Rotulo>
                <h2
                  className={`${display.className} leading-[1.04] text-[clamp(2rem,7vw,3.9rem)]`}
                  style={{ color: C.tinta }}
                >
                  Te ayudan a{' '}
                  <span style={{ color: C.jaborandiInk }}>elegir bien.</span>
                </h2>
                <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                  Aquí compran las peluqueras y barberos de Osorno, y también
                  quien solo quiere cuidarse en casa. Si no sabes qué
                  necesitas, preguntas y te orientan.
                </p>
                <figure
                  className="mt-8 rounded-xl p-5 md:p-6 max-w-md"
                  style={{ backgroundColor: C.papel, border: `1.5px solid ${C.lineL}` }}
                >
                  <blockquote className={`${display.className} text-lg md:text-xl leading-snug`} style={{ color: C.tinta }}>
                    “{BIZ.descripcion}”
                  </blockquote>
                  <figcaption
                    className="mt-3 text-[10px] uppercase tracking-[0.2em] font-bold"
                    style={{ color: C.doradoInk }}
                  >
                    Así se describen en su Facebook
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="grid gap-4 md:gap-5">
              {[
                {
                  icon: 'tijeras',
                  t: 'Si trabajas en belleza',
                  d: 'Insumos de nivel profesional para tu salón, peluquería o barbería: líneas capilares, herramientas, barbería y uñas para el trabajo de todos los días.',
                },
                {
                  icon: 'casa',
                  t: 'Si es para tu casa',
                  d: 'Los mismos productos que usa el profesional, para tu rutina en casa: el tinte de tu color, el kit de uñas o la plancha que buscabas.',
                },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 110}>
                  <article
                    className="h-full rounded-xl p-5 md:p-6 flex gap-4 md:gap-5"
                    style={{ backgroundColor: C.blanco, border: `1.5px solid ${C.lineL}`, boxShadow: '0 14px 34px rgba(38,38,42,0.07)' }}
                  >
                    <span
                      className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(111,162,135,0.14)', color: C.jaborandiInk, border: '1.5px solid rgba(111,162,135,0.4)' }}
                    >
                      <Ic name={s.icon} className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className={`${display.className} text-lg md:text-xl leading-tight`} style={{ color: C.tinta }}>
                        {s.t}
                      </h3>
                      <p className="mt-1.5 text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedL }}>
                        {s.d}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={220}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pk-btn flex items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-bold tap-44"
                  style={{ backgroundColor: C.jaborandiInk, color: '#FFFFFF' }}
                >
                  <Ic name="wa" className="w-4.5 h-4.5" />
                  Consulta disponibilidad por WhatsApp
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Marcas y lo que dicen (la tienda habla) ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.grafito }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo n="REP.03">Las marcas</Rotulo>
            <p className="text-[15px] md:text-base leading-relaxed max-w-md" style={{ color: C.mutedD }}>
              Trabajan marcas como
            </p>
            <p
              className={`${display.className} mt-3 leading-[1.15] text-[clamp(1.7rem,6vw,3.2rem)]`}
              style={{ color: C.blanco }}
            >
              {MARCAS.map((m, i) => (
                <span key={m} className="inline-block whitespace-nowrap">
                  {i > 0 && (
                    <span
                      className="inline-block h-[7px] w-[7px] rotate-45 mx-4 md:mx-6 align-middle"
                      style={{ backgroundColor: C.dorado }}
                      aria-hidden="true"
                    />
                  )}
                  <span style={{ color: i === 1 ? C.dorado : C.blanco }}>{m}</span>
                </span>
              ))}
              <span className={`${body.className} block md:inline md:ml-5 mt-2 md:mt-0 text-sm md:text-base font-semibold uppercase tracking-[0.2em] align-middle`} style={{ color: C.mutedD2 }}>
                y muchas más
              </span>
            </p>
          </Reveal>

          <div className="border-t mt-11 md:mt-16 pt-11 md:pt-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center" style={{ borderColor: C.lineD }}>
            <Reveal>
              <Rotulo n="REP.04">Lo que dicen</Rotulo>
              <h2
                className={`${display.className} leading-[1.05] text-[clamp(1.9rem,6.5vw,3.6rem)]`}
                style={{ color: C.blanco }}
              >
                El tinte que{' '}
                <span style={{ color: C.jaborandi }}>sí encuentras.</span>
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.dorado, textDecorationColor: 'rgba(201,168,106,0.4)' }}
              >
                Ver la ficha real en Google
              </a>
            </Reveal>
            <Reveal delay={120}>
              <blockquote
                className="relative rounded-xl p-6 md:p-8"
                style={{ backgroundColor: C.carbon, border: `1.5px solid ${C.lineD}` }}
              >
                <span
                  className={`${display.className} absolute -top-5 left-5 text-6xl leading-none`}
                  style={{ color: C.dorado }}
                  aria-hidden="true"
                >
                  “
                </span>
                <p className={`${display.className} text-[19px] md:text-[1.55rem] leading-snug`} style={{ color: C.blanco }}>
                  {REVIEW.text}
                </p>
                <footer className="mt-4 flex items-center gap-2.5">
                  <cite className="not-italic text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.mutedD }}>
                    {REVIEW.author} · Reseña en Google
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Cómo llegar ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo n="REP.05" dark={false}>
              Cómo llegar
            </Rotulo>
            <h2
              className={`${display.className} leading-[1.04] text-[clamp(2rem,7vw,3.9rem)]`}
              style={{ color: C.tinta }}
            >
              Patricio Lynch 1384,{' '}
              <span style={{ color: C.doradoInk }}>Osorno.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedL }}>
              La vitrina da a la calle: la reconoces por sus productos en
              la ventana y el letrero con la P.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 mt-9 md:mt-14 items-start">
            <Reveal>
              <figure className="relative overflow-hidden rounded-xl aspect-[4/3]" style={{ border: `1.5px solid ${C.lineL}` }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="La fachada de Písek: vitrinas con productos y el letrero Ventas de productos de Peluquería e insumos"
                  fill
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 18%' }}
                />
                <figcaption
                  className="absolute bottom-0 inset-x-0 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: 'rgba(244,242,238,0.92)',
                    backgroundColor: 'rgba(30,30,33,0.86)',
                    borderTop: '2px solid rgba(201,168,106,0.75)',
                  }}
                >
                  La fachada · {BIZ.address}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-xl p-5 md:p-7" style={{ backgroundColor: C.blanco, border: `1.5px solid ${C.lineL}` }}>
                <div className="flex gap-3.5">
                  <span className="shrink-0 mt-0.5" style={{ color: C.doradoInk }}>
                    <Ic name="pin" className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className={`${display.className} text-lg md:text-xl`}>La dirección</h3>
                    <address className="not-italic mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                      {BIZ.address}
                      <br />
                      {BIZ.city}, {BIZ.region}
                    </address>
                  </div>
                </div>
                <div className="flex gap-3.5 mt-5 pt-5 border-t" style={{ borderColor: C.lineL }}>
                  <span className="shrink-0 mt-0.5" style={{ color: C.doradoInk }}>
                    <Ic name="reloj" className="w-5 h-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className={`${display.className} text-lg md:text-xl`}>El horario</h3>
                    <ul className="mt-1.5 space-y-1 text-[15px]">
                      {BIZ.horario.map((h) => (
                        <li key={h.dias} className="flex justify-between gap-4">
                          <span style={{ color: C.mutedL }}>{h.dias}</span>
                          <span className="font-semibold">{h.horas}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3.5 mt-5 pt-5 border-t" style={{ borderColor: C.lineL }}>
                  <span className="shrink-0 mt-0.5" style={{ color: C.doradoInk }}>
                    <Ic name="fono" className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className={`${display.className} text-lg md:text-xl`}>El contacto</h3>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-block text-[15px] font-semibold underline underline-offset-2 tap-44">
                      {BIZ.phoneDisplay} · WhatsApp
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <Btn href={WA_LINK} tone="tinta">
                    Consulta por WhatsApp
                  </Btn>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pk-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
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
              className="relative w-full overflow-hidden rounded-xl aspect-[4/3] md:aspect-[16/7] mt-5 md:mt-8 min-h-[280px]"
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
      </section>

      {/* ── 7 · Cierre: Sácate partido ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(244,242,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,238,0.03) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,168,106,0.14) 0%, transparent 62%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-24 text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt="El logo de Písek: la P enmarcada y el lema Sácate partido"
              width={315}
              height={315}
              className="mx-auto h-24 md:h-28 w-auto rounded-xl"
              style={{ border: `1.5px solid ${C.lineD}` }}
            />
            <h2
              className={`${display.className} leading-[1.04] text-[clamp(2.3rem,9vw,4.6rem)] mt-7`}
              style={{ color: C.blanco }}
            >
              Ven por ese producto{' '}
              <span style={{ color: C.dorado }}>y sácate partido.</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
              Escríbenos por WhatsApp y consulta por el tinte, la máquina o
              el kit que buscas: te confirman disponibilidad.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Btn href={WA_LINK} tone="dorado">
                Consulta por WhatsApp
              </Btn>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.blanco, textDecorationColor: 'rgba(201,168,106,0.5)' }}
              >
                <Ic name="ig" className="w-4 h-4" />
                {BIZ.instagramUser}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Footer ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img
                src={`${IMG}/logo.webp`}
                alt=""
                width={315}
                height={315}
                className="h-11 w-11 rounded-lg object-cover shrink-0"
                style={{ border: `1px solid ${C.lineD}` }}
                aria-hidden="true"
              />
              <div>
                <p className={`${display.className} uppercase text-lg leading-tight`}>
                  Písek
                </p>
                <p className="text-xs" style={{ color: C.mutedD2 }}>
                  {BIZ.rubro} · {BIZ.city}
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,242,238,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(244,242,238,0.85)' }}
              >
                Instagram
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(244,242,238,0.85)' }}
              >
                Facebook
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
            <p className="text-xs leading-relaxed" style={{ color: C.mutedD2 }}>
              {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}. Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.blanco }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.dorado }}
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
