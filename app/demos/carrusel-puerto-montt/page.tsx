import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, waTema, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Gloock para titulares (serif de afiche, algo teatral) y Jost para el
// texto: la voz de boutique de fiesta.
const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// El arte del telón de sus fotos y la carpa de su logo: rojo terciopelo,
// azul rey de los vestidos, champaña de fondo, tinta y un dorado fino
// que nunca lleva texto chico sobre fondo claro.
const C = {
  telon: '#8E1B2C',
  telonFondo: '#4A0B16',
  telonPliegue: '#671223',
  azul: '#2346A8',
  azulNoche: '#16265E',
  champ: '#F3E6D3',
  champ2: '#EBDABF',
  tinta: '#1A1420',
  oro: '#C9A45C',
  oroInk: '#7A5C1E', // dorado oscuro: ≥4.5:1 sobre champaña
  mutL: 'rgba(26,20,32,0.68)',
  mutD: 'rgba(243,230,211,0.76)',
  lineL: 'rgba(26,20,32,0.16)',
  lineD: 'rgba(243,230,211,0.24)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'carrusel-puerto-montt',
  title: 'Carrusel Puerto Montt · Vestidos y trajes para ocasiones especiales',
  description:
    'Boutique en Av. Diego Portales 1000, Edificio España, Puerto Montt: vestidos de fiesta y quinceañera, novias, trajes, primera comunión y bautizo, con atención personalizada. 4,8 en Google.',
  image: `${IMG}/quinceanera.webp`,
})

const NAV_LINKS = [
  { label: 'Ocasiones', href: '#ocasiones' },
  { label: 'El carrusel', href: '#carrusel' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visítanos', href: '#visita' },
]

const LOOKS = [
  {
    src: `${IMG}/novia.webp`,
    alt: 'Vestido de novia blanco con encaje frente al telón rojo de la boutique',
  },
  {
    src: `${IMG}/traje-azul.webp`,
    alt: 'Traje azul de novio con chaleco, humita y solapa negra',
  },
  {
    src: `${IMG}/vestidos-fiesta.webp`,
    alt: 'Vestidos de quinceañera verde esmeralda y rosado en maniquíes',
  },
  {
    src: `${IMG}/vestido-azul.webp`,
    alt: 'Vestido largo azul rey de un hombro con flores aplicadas',
  },
  {
    src: `${IMG}/traje-chaleco.webp`,
    alt: 'Detalle de traje azul con chaleco bordado y plastrón',
  },
  {
    src: `${IMG}/enterito.webp`,
    alt: 'Enterito verde de fiesta con hombros descubiertos',
  },
  {
    src: `${IMG}/vestidos-largos.webp`,
    alt: 'Vestidos largos rojo y azul con encaje en maniquíes',
  },
  {
    src: `${IMG}/traje-gris.webp`,
    alt: 'Detalle de traje gris oscuro con chaleco y corbata de vestir',
  },
  {
    src: `${IMG}/quinceanera.webp`,
    alt: 'Vestido azul de quinceañera con ramo frente al telón rojo',
  },
]

const PASOS = [
  {
    n: '1',
    t: 'Escríbenos por WhatsApp',
    d: 'Cuenta qué estás buscando: la fecha, la ocasión y tus ideas.',
  },
  {
    n: '2',
    t: 'Sube al quinto piso',
    d: 'La boutique está en la oficina 506 del Edificio España, sobre Av. Diego Portales 1000.',
  },
  {
    n: '3',
    t: 'Pruébate con calma',
    d: 'Una profesional con experiencia te asesora y te recomienda vestidos y accesorios.',
  },
]

/** Los festones de la carpa del carrusel: una fila de semicírculos que
    cuelga del borde. Es el remate gráfico del demo: cierra secciones,
    corona fotos y firma los titulares. */
function Festones({
  color,
  className = '',
  size = 30,
}: {
  color: string
  className?: string
  size?: number
}) {
  const r = size / 2
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height: r,
        backgroundImage: `radial-gradient(circle ${r}px at ${r}px 0px, ${color} ${r - 0.6}px, transparent ${r}px)`,
        backgroundSize: `${size}px ${r}px`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center top',
      }}
    />
  )
}

/** El techito de la carpa: barra dorada y festones alternos de telón y
    azul, como el toldo rayado del logo. Corona las fotos del demo. */
function Toldo({ className = '' }: { className?: string }) {
  const r = 11
  return (
    <div className={className} aria-hidden="true">
      <div
        style={{
          height: 5,
          background: `linear-gradient(90deg, ${C.oro}, #E8CB86, ${C.oro})`,
        }}
      />
      <div
        style={{
          height: r + 1,
          backgroundImage:
            `radial-gradient(circle ${r}px at ${r}px 0px, ${C.telon} ${r - 0.5}px, transparent ${r}px),` +
            `radial-gradient(circle ${r}px at ${r * 3}px 0px, ${C.azul} ${r - 0.5}px, transparent ${r}px)`,
          backgroundSize: `${r * 4}px ${r + 1}px`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center top',
        }}
      />
    </div>
  )
}

/** Una chispa dorada de cuatro puntas: el brillo de fiesta del escenario. */
function Chispa({ className = '', d = '0s' }: { className?: string; d?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`cx-chispa ${className}`}
      style={{ '--cx-d': d } as CSSProperties}
      aria-hidden="true"
    >
      <path
        d="M12 1.5 L14.4 9.6 L22.5 12 L14.4 14.4 L12 22.5 L9.6 14.4 L1.5 12 L9.6 9.6 Z"
        fill={C.oro}
      />
    </svg>
  )
}

function Rotulo({
  children,
  color = C.oroInk,
  centro = false,
}: {
  children: React.ReactNode
  color?: string
  centro?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5 ${centro ? 'justify-center' : ''}`}
      style={{ color }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
      {centro && <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />}
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
  className = '',
}: {
  children: React.ReactNode
  href?: string
  tone: 'oro' | 'azul' | 'telon' | 'lineaL' | 'lineaD'
  className?: string
}) {
  const st: CSSProperties =
    tone === 'oro'
      ? { backgroundColor: C.oro, color: C.tinta }
      : tone === 'azul'
        ? { backgroundColor: C.azul, color: C.champ }
        : tone === 'telon'
          ? { backgroundColor: C.telon, color: C.champ }
          : tone === 'lineaL'
            ? { border: `1.5px solid ${C.tinta}`, color: C.tinta }
            : { border: `1.5px solid rgba(243,230,211,0.6)`, color: C.champ }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className={`cx-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44 ${className}`}
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

function ConsultaTema({ tema, color = C.azul }: { tema: string; color?: string }) {
  return (
    <a
      href={waTema(tema)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-bold tap-44 transition-opacity hover:opacity-70"
      style={{ color }}
    >
      Consultar por WhatsApp
      <span aria-hidden="true">→</span>
    </a>
  )
}

export default function CarruselPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.champ, color: C.tinta }}
    >
      <style>{`
        /* El telón: dos paños de terciopelo se corren a los lados al
           cargar, con un rebote final de tela que se acomoda. Detrás
           queda el escenario. */
        @keyframes cx-abre-izq {
          0% { transform: translateX(0) }
          68% { transform: translateX(-103%) }
          84% { transform: translateX(-98.4%) }
          93% { transform: translateX(-100.7%) }
          100% { transform: translateX(-100%) }
        }
        @keyframes cx-abre-der {
          0% { transform: translateX(0) }
          68% { transform: translateX(103%) }
          84% { transform: translateX(98.4%) }
          93% { transform: translateX(100.7%) }
          100% { transform: translateX(100%) }
        }
        .cx-telon {
          position: absolute; top: 0; bottom: 0; width: 51%;
          z-index: 30; pointer-events: none;
          background:
            linear-gradient(180deg, rgba(22,3,9,0.55) 0%, rgba(22,3,9,0) 24%, rgba(22,3,9,0) 72%, rgba(22,3,9,0.5) 100%),
            repeating-linear-gradient(90deg, #5B0D1A 0px, #741426 13px, #9E2137 24px, #8E1B2C 36px, #6E1122 47px, #5B0D1A 60px);
        }
        .cx-telon-izq {
          left: -0.5%;
          box-shadow: inset -42px 0 52px -28px rgba(8,0,3,0.8);
          animation: cx-abre-izq 1.35s cubic-bezier(.58,.04,.32,1) .55s both;
        }
        .cx-telon-der {
          right: -0.5%;
          box-shadow: inset 42px 0 52px -28px rgba(8,0,3,0.8);
          animation: cx-abre-der 1.35s cubic-bezier(.58,.04,.32,1) .55s both;
        }
        .cx-fleco {
          position: absolute; left: 0; right: 0; bottom: 0; height: 17px;
          border-top: 5px solid ${C.oro};
          background: repeating-linear-gradient(90deg, rgba(201,164,92,0.95) 0px 3px, rgba(201,164,92,0) 3px 6.5px);
        }

        /* Escenario: el titular sube por líneas tras la apertura; la
           foto se devela de arriba abajo, como un retrato al descubierto. */
        .cx-linea { display: block; overflow: hidden; }
        .cx-linea > span {
          display: block; transform: translateY(112%);
          animation: cx-linea .85s cubic-bezier(.2,.68,.26,1) var(--cx-d, 0s) both;
        }
        @keyframes cx-linea { to { transform: translateY(0) } }
        .cx-sube {
          opacity: 0; transform: translateY(16px);
          animation: cx-sube .9s cubic-bezier(.22,.68,.26,1) var(--cx-d, 0s) both;
        }
        @keyframes cx-sube { to { opacity: 1; transform: none } }
        .cx-foto {
          clip-path: inset(0 0 100% 0);
          animation: cx-foto 1.05s cubic-bezier(.32,.66,.3,1) 1.15s both;
        }
        @keyframes cx-foto { to { clip-path: inset(0 0 0% 0) } }

        /* El carrusel de looks: la cinta gira despacio y se detiene al
           pasar el dedo o el mouse, como el tiovivo al que te subes. */
        .cx-pista { animation: cx-gira 52s linear infinite; }
        @keyframes cx-gira { to { transform: translateX(-50%) } }
        .cx-cinta:hover .cx-pista, .cx-cinta:active .cx-pista { animation-play-state: paused; }

        /* Chispas de fiesta: titilan suave sobre el escenario. */
        .cx-chispa { animation: cx-chispa 3.4s ease-in-out var(--cx-d, 0s) infinite; transform-origin: center; }
        @keyframes cx-chispa {
          0%, 100% { opacity: .25; transform: scale(.72) }
          50% { opacity: .95; transform: scale(1.05) }
        }

        .cx-btn { transition: transform .18s ease, filter .18s ease }
        .cx-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .cx-btn:active { transform: scale(.97) }
        .cx-page a:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }
        .cx-page a:focus:not(:focus-visible) { outline: none }
        .cx-look { transition: transform .3s ease }
        .cx-cinta:hover .cx-look { filter: saturate(1.05) }

        @media (prefers-reduced-motion: reduce) {
          .cx-telon { display: none !important }
          .cx-linea > span, .cx-sube, .cx-foto { animation: none !important; transform: none !important; opacity: 1 !important; clip-path: none !important }
          .cx-pista { animation: none !important }
          .cx-chispa { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.05em]">{BIZ.nameCorto}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Consulta"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(243,230,211,0.95)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.azul,
          btnInk: C.champ,
        }}
      />

      <div className="cx-page">
        {/* ── 1 · Escenario: se abre el telón ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.telonFondo }}>
          {/* pliegues del escenario: terciopelo quieto que espera */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(1100px 560px at 50% -10%, rgba(196,62,90,0.42), transparent 62%), repeating-linear-gradient(90deg, #430912 0px, #581020 30px, #6E1627 58px, #540E1B 84px, #430912 108px)',
            }}
            aria-hidden="true"
          />
          {/* chispas de fiesta sobre el escenario */}
          <Chispa className="absolute top-[16%] left-[9%] w-4 h-4 z-[5]" d="1.8s" />
          <Chispa className="absolute top-[30%] right-[10%] w-3 h-3 z-[5]" d="2.6s" />
          <Chispa className="absolute bottom-[26%] left-[14%] w-3.5 h-3.5 z-[5]" d="3.2s" />
          <Chispa className="absolute top-[57%] right-[16%] w-4 h-4 z-[5] hidden md:block" d="2.2s" />

          <div className="relative z-[6] max-w-6xl mx-auto px-5 md:px-8 min-h-[100svh] flex flex-col justify-center py-[86px] md:py-[110px]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] items-center gap-8 lg:gap-14">
              <div className="text-center lg:text-left order-1">
                <p
                  className="cx-sube text-[10px] md:text-xs font-bold uppercase tracking-[0.34em] mb-4 md:mb-6"
                  style={{ color: C.oro, '--cx-d': '1.35s' } as CSSProperties}
                >
                  Puerto Montt · Edificio España
                </p>
                <h1
                  className={`${display.className} leading-[1.05] text-[clamp(2.4rem,9.4vw,4.5rem)]`}
                  style={{ color: C.champ }}
                  aria-label="Para el día que se recuerda."
                >
                  <span aria-hidden="true">
                    <span className="cx-linea">
                      <span style={{ '--cx-d': '1.05s' } as CSSProperties}>Para el día</span>
                    </span>
                    <span className="cx-linea">
                      <span style={{ '--cx-d': '1.18s' } as CSSProperties}>que se recuerda.</span>
                    </span>
                  </span>
                </h1>
                <p
                  className="cx-sube mt-5 md:mt-7 mx-auto lg:mx-0 max-w-md text-[15px] md:text-lg leading-relaxed"
                  style={{ color: C.mutD, '--cx-d': '1.55s' } as CSSProperties}
                >
                  Vestidos de fiesta, quinceañeras, novias, trajes, primera
                  comunión y bautizo, con atención personalizada.
                </p>
                <div
                  className="cx-sube mt-6 md:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
                  style={{ '--cx-d': '1.72s' } as CSSProperties}
                >
                  <BtnWa tone="oro">
                    <WaIcon />
                    Consulta por WhatsApp
                  </BtnWa>
                  <BtnWa href="#ocasiones" tone="lineaD">
                    Ver las ocasiones
                  </BtnWa>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cx-sube mt-5 inline-flex items-center gap-2.5 tap-44"
                  style={{ '--cx-d': '1.88s' } as CSSProperties}
                >
                  <Stars value={BIZ.ratingValue} color={C.oro} size={16} />
                  <span className="text-sm font-bold" style={{ color: C.champ }}>
                    {BIZ.rating}
                  </span>
                  <span className="text-sm" style={{ color: C.mutD }}>
                    · {BIZ.reviews} opiniones en Google
                  </span>
                </a>
              </div>

              {/* el retrato sobre el escenario, bajo su techito de carpa
                  y en medio del foco de luz */}
              <figure
                className="cx-sube relative order-2 mx-auto w-[min(62vw,240px)] sm:w-[280px] lg:w-full lg:max-w-[360px]"
                style={{ '--cx-d': '1.3s' } as CSSProperties}
              >
                <div
                  className="absolute -inset-x-14 -inset-y-10 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(58% 55% at 50% 42%, rgba(216,178,106,0.24), transparent 68%)',
                  }}
                  aria-hidden="true"
                />
                <Toldo className="relative" />
                <div className="relative p-[7px]" style={{ border: `1.5px solid ${C.oro}`, borderTop: 'none' }}>
                  <div className="cx-foto relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.telonPliegue }}>
                    <Image
                      src={`${IMG}/quinceanera.webp`}
                      alt="Vestido azul de quinceañera con ramo, frente al telón rojo de la boutique"
                      fill
                      priority
                      sizes="(min-width: 1024px) 360px, 62vw"
                      className="object-cover"
                      style={{ objectPosition: '42% 22%' }}
                    />
                  </div>
                </div>
                <figcaption className="sr-only">
                  Uno de los vestidos de quinceañera de Carrusel, fotografiado en su telón rojo.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* los paños del telón que se abren al cargar */}
          <div className="cx-telon cx-telon-izq" aria-hidden="true">
            <div className="cx-fleco" />
          </div>
          <div className="cx-telon cx-telon-der" aria-hidden="true">
            <div className="cx-fleco" />
          </div>
        </section>

        {/* ── 2 · Ocasiones: cada fecha tiene su vestido ── */}
        <section id="ocasiones" className="scroll-mt-20" style={{ backgroundColor: C.champ }}>
          <Festones color={C.telonFondo} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-16 md:pt-16 md:pb-24">
            <Reveal>
              <Rotulo>Ocasiones</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
                <h2
                  className={`${display.className} text-[clamp(1.9rem,6.6vw,3.4rem)] leading-[1.06] max-w-xl`}
                  style={{ color: C.tinta }}
                >
                  Cada fecha
                  <br />
                  tiene su vestido.
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.mutL }}>
                  Quinceañeras, novias y novios, fiesta, primera comunión y
                  bautizo: el mundo Carrusel, como lo anuncia su letrero.
                </p>
              </div>
            </Reveal>

            {/* 01 · Quinceañera: la foto grande bajo su toldo */}
            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-12 items-center mb-16 md:mb-20">
              <Reveal>
                <figure>
                  <Toldo />
                  <div className="p-[7px]" style={{ border: `1.5px solid ${C.oro}`, borderTop: 'none' }}>
                    <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: C.champ2 }}>
                      <Image
                        src={`${IMG}/vestidos-fiesta.webp`}
                        alt="Vestidos de quinceañera verde esmeralda y rosado con falda de tul en maniquíes"
                        fill
                        sizes="(min-width: 1024px) 52vw, 92vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <p className={`${display.className} text-lg md:text-xl mb-2`} style={{ color: C.oroInk }}>
                  01
                </p>
                <h3 className={`${display.className} text-3xl md:text-4xl mb-3`} style={{ color: C.tinta }}>
                  Quinceañera
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-md mb-4" style={{ color: C.mutL }}>
                  El vestido con el que se abre la fiesta: falda de gala,
                  brillo y el color que ella soñó para sus quince.
                </p>
                <ConsultaTema tema="un vestido de quinceañera" />
              </Reveal>
            </div>

            {/* 02 · Novias y novios: par de retratos en desnivel */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-16 md:mb-20">
              <Reveal className="lg:order-2">
                <div className="grid grid-cols-2 gap-4 md:gap-5 items-start">
                  <figure className="p-[6px]" style={{ border: `1.5px solid ${C.oro}` }}>
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: C.champ2 }}>
                      <Image
                        src={`${IMG}/novia.webp`}
                        alt="Vestido de novia blanco con mangas de encaje frente al telón rojo"
                        fill
                        sizes="(min-width: 1024px) 22vw, 44vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figure className="p-[6px] mt-8 md:mt-12" style={{ border: `1.5px solid ${C.oro}` }}>
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: C.champ2 }}>
                      <Image
                        src={`${IMG}/traje-azul.webp`}
                        alt="Traje azul de novio con chaleco, humita y solapa negra"
                        fill
                        sizes="(min-width: 1024px) 22vw, 44vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 30%' }}
                      />
                    </div>
                  </figure>
                </div>
              </Reveal>
              <Reveal delay={120} className="lg:order-1 lg:text-right">
                <p className={`${display.className} text-lg md:text-xl mb-2`} style={{ color: C.oroInk }}>
                  02
                </p>
                <h3 className={`${display.className} text-3xl md:text-4xl mb-3`} style={{ color: C.tinta }}>
                  Novias y novios
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-md mb-4 lg:ml-auto" style={{ color: C.mutL }}>
                  El sí con todo a la altura: vestidos de novia con encaje
                  y trajes de novio con chaleco, humita y el porte que el
                  día pide.
                </p>
                <ConsultaTema tema="vestido de novia o traje de novio" />
              </Reveal>
            </div>

            {/* 03 · Fiesta: trío de looks en abanico */}
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-6 lg:gap-12 items-center mb-16 md:mb-20">
              <Reveal className="lg:order-2">
                <div className="grid grid-cols-3 gap-3 md:gap-4 items-start">
                  <figure
                    className="p-[5px] mt-7 md:mt-10"
                    style={{ border: `1.5px solid ${C.oro}`, transform: 'rotate(-1.6deg)' }}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: C.champ2 }}>
                      <Image
                        src={`${IMG}/vestido-azul.webp`}
                        alt="Vestido largo azul rey de un hombro con flores aplicadas"
                        fill
                        sizes="(min-width: 1024px) 15vw, 28vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 16%' }}
                      />
                    </div>
                  </figure>
                  <figure className="p-[5px]" style={{ border: `1.5px solid ${C.oro}` }}>
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: C.champ2 }}>
                      <Image
                        src={`${IMG}/vestidos-largos.webp`}
                        alt="Vestidos largos rojo y azul con encaje en maniquíes"
                        fill
                        sizes="(min-width: 1024px) 15vw, 28vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 20%' }}
                      />
                    </div>
                  </figure>
                  <figure
                    className="p-[5px] mt-7 md:mt-10"
                    style={{ border: `1.5px solid ${C.oro}`, transform: 'rotate(1.6deg)' }}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: C.champ2 }}>
                      <Image
                        src={`${IMG}/enterito.webp`}
                        alt="Enterito verde de fiesta con hombros descubiertos"
                        fill
                        sizes="(min-width: 1024px) 15vw, 28vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 14%' }}
                      />
                    </div>
                  </figure>
                </div>
              </Reveal>
              <Reveal delay={120} className="lg:order-1">
                <p className={`${display.className} text-lg md:text-xl mb-2`} style={{ color: C.oroInk }}>
                  03
                </p>
                <h3 className={`${display.className} text-3xl md:text-4xl mb-3`} style={{ color: C.tinta }}>
                  Fiesta
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-md mb-4" style={{ color: C.mutL }}>
                  Vestidos largos, enteritos y looks de noche para
                  matrimonios, galas y celebraciones. Encuentra tu vestido
                  y sal con todo listo.
                </p>
                <ConsultaTema tema="un vestido de fiesta" />
              </Reveal>
            </div>

            {/* 04 · Primera comunión y bautizo: lo anuncia su letrero */}
            <Reveal>
              <div className="text-center max-w-xl mx-auto pt-2">
                <figure
                  className="inline-block p-4 md:p-5 mb-5"
                  style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.oro}` }}
                >
                  <Image
                    src={`${IMG}/logo.webp`}
                    alt="Logo de Carrusel: carpa de colores y el texto primera comunión, bautizo y novios"
                    width={222}
                    height={221}
                    className="w-[104px] md:w-[128px] h-auto"
                  />
                </figure>
                <p className={`${display.className} text-lg md:text-xl mb-2`} style={{ color: C.oroInk }}>
                  04
                </p>
                <h3 className={`${display.className} text-3xl md:text-4xl mb-3`} style={{ color: C.tinta }}>
                  Primera comunión y bautizo
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.mutL }}>
                  «Primera comunión, bautizo y novios», reza su propio
                  letrero: vestidos y trajes para los más chicos en su día
                  grande.
                </p>
                <ConsultaTema tema="primera comunión o bautizo" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3 · El carrusel de looks ── */}
        <section id="carrusel" className="scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.tinta }}>
          <Festones color={C.champ} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-6 md:pt-14 md:pb-8 text-center">
            <Reveal>
              <Rotulo color={C.oro} centro>
                El carrusel
              </Rotulo>
              <h2
                className={`${display.className} text-[clamp(1.8rem,6vw,3rem)] leading-[1.08] mb-3`}
                style={{ color: C.champ }}
              >
                Los looks dan la vuelta.
              </h2>
              <p className="text-xs md:text-sm" style={{ color: C.mutD }}>
                Pasa el dedo o el mouse para detenerlo.
              </p>
            </Reveal>
          </div>
          <div className="cx-cinta relative pb-12 md:pb-16">
            {/* fundido en los bordes: la cinta entra y sale del escenario */}
            <div
              className="absolute inset-y-0 left-0 w-[12%] z-10 pointer-events-none"
              style={{ background: `linear-gradient(90deg, ${C.tinta}, transparent)` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 w-[12%] z-10 pointer-events-none"
              style={{ background: `linear-gradient(270deg, ${C.tinta}, transparent)` }}
              aria-hidden="true"
            />
            <div className="cx-pista flex w-max gap-4 md:gap-5 px-4">
              {[...LOOKS, ...LOOKS].map((l, i) => (
                <figure
                  key={i}
                  aria-hidden={i >= LOOKS.length}
                  className="cx-look relative shrink-0 h-[196px] md:h-[252px] aspect-[3/4] overflow-hidden"
                  style={{
                    border: '1.5px solid rgba(201,164,92,0.5)',
                    transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)`,
                  }}
                >
                  <Image
                    src={l.src}
                    alt={i < LOOKS.length ? l.alt : ''}
                    fill
                    loading="eager"
                    fetchPriority="low"
                    sizes="(min-width: 768px) 189px, 147px"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4 · Cómo es venir ── */}
        <section id="experiencia" className="scroll-mt-20" style={{ backgroundColor: C.champ }}>
          <Festones color={C.tinta} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo>Cómo es venir</Rotulo>
                  <h2
                    className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] mb-4`}
                    style={{ color: C.tinta }}
                  >
                    Subes al quinto piso
                    <br />
                    y te pruebas con calma.
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-9" style={{ color: C.mutL }}>
                    Nada de vitrina apurada: en Carrusel la visita es con
                    tiempo y con quien sepa asesorarte.
                  </p>
                </Reveal>
                <ol className="space-y-6 mb-9">
                  {PASOS.map((p, i) => (
                    <Reveal key={p.n} delay={i * 100}>
                      <li className="flex gap-4 items-start">
                        <span
                          className={`${display.className} shrink-0 w-[34px] h-[34px] rounded-full flex items-center justify-center text-base leading-none mt-0.5`}
                          style={{ border: `1.5px solid ${C.oro}`, color: C.oroInk, backgroundColor: C.champ }}
                          aria-hidden="true"
                        >
                          {p.n}
                        </span>
                        <span>
                          <span className="block font-bold text-[15px] md:text-base" style={{ color: C.tinta }}>
                            {p.t}
                          </span>
                          <span className="block mt-1 text-sm leading-relaxed max-w-md" style={{ color: C.mutL }}>
                            {p.d}
                          </span>
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ol>
                <Reveal delay={320}>
                  <BtnWa tone="azul">
                    <WaIcon />
                    Consulta por WhatsApp
                  </BtnWa>
                </Reveal>
              </div>

              {/* la cita que lo resume, a lo grande */}
              <Reveal delay={140}>
                <figure
                  className="relative p-7 md:p-10"
                  style={{ backgroundColor: C.telonFondo }}
                >
                  <span
                    className={`${display.className} absolute -top-1 left-5 text-[64px] leading-none select-none`}
                    style={{ color: C.oro }}
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <blockquote
                    className={`${display.className} relative text-[clamp(1.15rem,4.4vw,1.6rem)] leading-[1.35] mt-4`}
                    style={{ color: C.champ }}
                  >
                    El trato es excepcional, uno se puede probar las cosas
                    con calma y en caso de no estar seguro, tienes una muy
                    buena profesional y con mucha experiencia que te puede
                    recomendar vestidos y accesorios.
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="h-px w-8" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutD }}>
                      {REVIEWS[0].author} · {REVIEWS[0].fuente}
                    </span>
                  </figcaption>
                  <div className="mt-4">
                    <Stars value={5} color={C.oro} size={14} />
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5 · Opiniones: 4,8 en Google ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.azulNoche }}>
          <Festones color={C.champ} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Rotulo color={C.champ}>Opiniones</Rotulo>
                <p className={`${display.className} leading-none text-[clamp(4rem,15vw,6.5rem)]`} style={{ color: C.champ }}>
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.oro} size={20} />
                </div>
                <p className="mt-3 text-sm" style={{ color: C.mutD }}>
                  {BIZ.reviews} opiniones en su ficha de Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                  style={{ color: C.champ, textDecorationColor: C.oro }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-8 md:space-y-10">
                {REVIEWS.slice(1).map((r, i) => (
                  <Reveal key={r.author} delay={i * 110}>
                    <figure className="border-l-2 pl-6 md:pl-8" style={{ borderColor: C.oro }}>
                      <blockquote className="text-[15px] md:text-lg leading-relaxed" style={{ color: C.champ }}>
                        “{r.text}”
                      </blockquote>
                      <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutD }}>
                        {r.author} · {r.fuente}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Visítanos: oficina 506, Edificio España ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.champ }}>
          <Festones color={C.azulNoche} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-stretch">
              <div className="flex flex-col">
                <Reveal>
                  <Rotulo>Visítanos</Rotulo>
                  <h2
                    className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] mb-5`}
                    style={{ color: C.tinta }}
                  >
                    Av. Diego Portales 1000,
                    <br />
                    quinto piso.
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.mutL }}>
                    Oficina 506 del {BIZ.edificio}, en pleno centro de{' '}
                    {BIZ.city}. Sube, toca la puerta y pruébate con calma.
                  </p>
                </Reveal>
                <Reveal delay={90}>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 mb-7 text-sm md:text-[15px]">
                    <dt className="font-bold" style={{ color: C.oroInk }}>
                      Dirección
                    </dt>
                    <dd style={{ color: C.tinta }}>
                      {BIZ.address}, {BIZ.edificio}
                    </dd>
                    {HORARIO.map((h) => (
                      <div key={h.d} className="contents">
                        <dt className="font-bold" style={{ color: C.oroInk }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: C.tinta }}>{h.h}</dd>
                      </div>
                    ))}
                    <dt className="font-bold" style={{ color: C.oroInk }}>
                      WhatsApp
                    </dt>
                    <dd>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                        style={{ color: C.tinta, textDecorationColor: C.telon }}
                      >
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </dl>
                </Reveal>
                <Reveal delay={160}>
                  <div className="flex flex-wrap gap-3">
                    <BtnWa tone="telon">
                      <WaIcon />
                      Consulta por WhatsApp
                    </BtnWa>
                    <BtnWa href={MAPS_URL} tone="lineaL">
                      Cómo llegar →
                    </BtnWa>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={120} className="flex">
                <div
                  className="overflow-hidden w-full min-h-[320px]"
                  style={{ border: `1.5px solid ${C.oro}`, backgroundColor: C.champ2 }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.tinta, color: C.champ }}>
          <Festones color={C.champ} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
            <span className="inline-block p-1.5 rounded-md shrink-0 self-start" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.oro}` }}>
              <Image
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name}`}
                width={222}
                height={221}
                className="w-[56px] h-auto"
              />
            </span>
            <div className="text-xs leading-relaxed" style={{ color: C.mutD }}>
              <p className={`${display.className} text-lg mb-0.5`} style={{ color: C.champ }}>
                {BIZ.name}
              </p>
              <address className="not-italic">
                {BIZ.address}, {BIZ.edificio} · {BIZ.city},{' '}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.champ }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opiniones y horarios son
              reales y públicos del negocio; los textos de apoyo son de
              muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.champ }}>
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
