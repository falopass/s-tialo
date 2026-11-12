import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, OPINION, IMG } from './content'

// Cormorant Garamond para la voz del letrero (su itálica firma la marca)
// y Nunito Sans para el texto corrido.
const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// La paleta sale de su letrero: gris carbón del panel, dorado del picaflor
// y la flor, marfil de papel, el verde del follaje y el rosa del crespón.
const C = {
  carbon: '#2D3134',
  carbonBajo: '#23272B',
  oro: '#E2BE62',
  oroInk: '#7E6118', // dorado oscuro: ≥5:1 sobre marfil, para texto chico
  oroSuave: 'rgba(226,190,98,0.85)',
  marfil: '#FAF6EC',
  marfil2: '#F3ECDA',
  follaje: '#3E6A3B',
  follajeBajo: '#2E5129',
  rosa: '#E59AB8',
  rosaInk: '#B0517C', // rosa oscuro legible sobre marfil (≥4.6:1)
  mutC: '#5D5643', // tinta atenuada sólida (~6.6:1 sobre marfil)
  mutD: 'rgba(250,246,236,0.74)',
  lineL: 'rgba(45,49,52,0.16)',
  lineD: 'rgba(226,190,98,0.26)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'sari-duo-los-angeles',
  title: 'Sari Duo · Vivero en Los Ángeles',
  description:
    'Vivero a orilla de camino en Los Ángeles, Biobío. Abierto todos los días hasta las 17:30. Pregunta por la planta que buscas por WhatsApp.',
  image: `${IMG}/crespon.webp`,
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#plantas' },
  { label: 'Confianza', href: '#confianza' },
  { label: 'Visítanos', href: '#visita' },
]

/** El trazo del lirio, reutilizable como grupo dentro de un SVG mayor. */
function LirioArt({
  color = C.oro,
  antera = C.rosa,
  mini = false,
}: {
  color?: string
  antera?: string
  mini?: boolean
}) {
  return (
    <g>
      {!mini && (
        <>
          <path d="M68 118 C66 131 62 141 57 149" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M64 128 C51 125 40 130 33 141 C46 139 57 135 64 128 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        </>
      )}
      <g stroke={color} strokeWidth="2.2" strokeLinejoin="round" fill="rgba(226,190,98,0.07)">
        <path d="M70 60 C62 42 62 22 70 6 C78 22 78 42 70 60 Z" />
        <path d="M71 59 C88 48 106 38 122 30 C112 48 94 58 71 59 Z" />
        <path d="M73 62 C94 64 112 72 126 84 C108 89 90 80 73 62 Z" />
        <path d="M70 63 C76 82 76 100 70 118 C64 100 64 82 70 63 Z" />
        <path d="M67 62 C52 70 38 80 28 92 C44 91 58 78 67 62 Z" />
        <path d="M68 58 C54 48 42 38 32 26 C48 30 62 42 68 58 Z" />
      </g>
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <path d="M72 58 C88 52 104 50 118 52" />
        <path d="M72 61 C88 58 104 58 116 62" />
        <path d="M71 64 C84 64 98 67 110 73" />
      </g>
      <g fill={antera}>
        <circle cx="118" cy="52" r="2.6" />
        <circle cx="116" cy="62" r="2.6" />
        <circle cx="110" cy="73" r="2.6" />
      </g>
    </g>
  )
}

/** La flor de lirio del letrero, en línea dorada. */
function Lirio({
  className = '',
  color = C.oro,
  antera = C.rosa,
  mini = false,
}: {
  className?: string
  color?: string
  antera?: string
  mini?: boolean
}) {
  return (
    <svg viewBox="0 0 140 150" className={className} fill="none" aria-hidden="true">
      <LirioArt color={color} antera={antera} mini={mini} />
    </svg>
  )
}

/** El trazo del picaflor, reutilizable como grupo dentro de un SVG mayor. */
function PicaflorArt() {
  return (
    <g>
      {/* ala trasera, más tenue */}
      <path
        className="sd-ala2"
        d="M82 64 C72 46 58 36 40 32 C54 42 70 56 80 72 Z"
        fill={C.oro}
        opacity="0.45"
      />
      {/* cola en abanico */}
      <path
        d="M158 110 C176 116 192 128 202 144 C184 140 168 132 156 122 Z"
        fill={C.oro}
      />
      <path
        d="M154 120 C164 133 174 146 180 162 C168 151 158 138 150 128 Z"
        fill={C.oro}
        opacity="0.8"
      />
      {/* cuerpo */}
      <path
        d="M54 88 C58 72 74 62 94 60 C118 57 140 68 152 86 C158 96 162 106 162 114 C152 126 134 132 116 128 C94 123 70 110 58 96 C55 92 54 90 54 88 Z"
        fill={C.oro}
      />
      {/* pico */}
      <path d="M52 86 L2 116" stroke={C.oro} strokeWidth="2.6" strokeLinecap="round" />
      {/* garganta del picaflor, el toque rosa */}
      <path d="M58 92 C64 99 72 102 80 101" stroke={C.rosa} strokeWidth="2.6" strokeLinecap="round" />
      {/* ojo */}
      <circle cx="63" cy="76" r="3" fill={C.carbon} />
      {/* ala principal, larga y en punta */}
      <g className="sd-ala">
        <path
          d="M86 66 C104 34 138 14 184 10 C154 30 122 56 104 84 C98 78 92 71 86 66 Z"
          fill={C.oro}
        />
        <g stroke={C.carbon} strokeWidth="1.7" strokeLinecap="round" opacity="0.85">
          <path d="M96 66 C116 44 142 30 170 22" />
          <path d="M100 74 C118 56 140 44 162 38" />
        </g>
      </g>
    </g>
  )
}

/** El picaflor del letrero, suspendido con las alas en alto: silueta dorada
    con plumaje marcado en carbón, como en el panel del vivero. */
function Picaflor({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 210 180" className={className} fill="none" aria-hidden="true">
      <PicaflorArt />
    </svg>
  )
}

/** Mini lirio viñeta: fin de una línea de vuelo o sello de sección. */
function LirioMini({ className = 'w-4 h-4', color = C.oro, antera = C.rosa }: { className?: string; color?: string; antera?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth="1.7" strokeLinecap="round">
        <path d="M12 12 L12 3" />
        <path d="M12 12 L19.5 7" />
        <path d="M12 12 L20.5 15" />
        <path d="M12 12 L12 21" />
        <path d="M12 12 L4 16.5" />
        <path d="M12 12 L4.5 6.5" />
      </g>
      <circle cx="15.5" cy="12.5" r="1.4" fill={antera} />
      <circle cx="14" cy="15.5" r="1.2" fill={antera} />
    </svg>
  )
}

/** Rótulo de sección: versalita con el lirio de la casa. */
function Rotulo({ children, color, icono }: { children: React.ReactNode; color: string; icono: string }) {
  return (
    <p className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5" style={{ color }}>
      <LirioMini color={icono} antera={icono} className="w-[14px] h-[14px] shrink-0" />
      {children}
    </p>
  )
}

/** La línea de vuelo punteada que une las secciones; se dibuja al bajar. */
function Vuelo({
  variant = 'a',
  color = C.oroInk,
  inv = false,
}: {
  variant?: 'a' | 'b' | 'c'
  color?: string
  inv?: boolean
}) {
  const d =
    variant === 'a'
      ? 'M 4 12 C 100 78, 250 -2, 396 56'
      : variant === 'b'
        ? 'M 396 14 C 300 80, 140 2, 4 60'
        : 'M 8 10 C 80 62, 140 6, 200 34 C 240 54, 268 66, 306 58 C 344 50, 370 62, 394 44'
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8" aria-hidden="true">
      <div className={`relative ${inv ? 'sd-linea2' : 'sd-linea'}`}>
        <svg viewBox="0 0 400 80" className="w-full h-[54px] md:h-[76px]" fill="none" preserveAspectRatio="none">
          <path d={d} stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="0.1 11" />
        </svg>
        <LirioMini
          color={color}
          antera={color}
          className={`w-[18px] h-[18px] absolute ${variant === 'b' ? '-left-1 bottom-[4px]' : '-right-1 bottom-[30%]'}`}
        />
      </div>
    </div>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.follaje,
  ink = '#FAF6EC',
}: {
  children: React.ReactNode
  href?: string
  bg?: string
  ink?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="sd-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tap-44"
      style={{ backgroundColor: bg, color: ink }}
    >
      <WaIcon />
      {children}
    </a>
  )
}

export default function SariDuoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.marfil, color: C.carbon }}
    >
      <style>{`
        /* El picaflor llega volando desde la derecha, siguiendo su curva. */
        @keyframes sd-vuelo {
          0%   { transform: translate(270px,-190px) rotate(14deg); opacity: 0 }
          8%   { opacity: 1 }
          40%  { transform: translate(140px,-120px) rotate(4deg) }
          70%  { transform: translate(88px,-40px) rotate(-6deg) }
          88%  { transform: translate(26px,10px) rotate(3deg) }
          100% { transform: none }
        }
        .sd-vuelo { animation: sd-vuelo 1.95s cubic-bezier(.42,.08,.25,1) .15s both }

        /* Suspendido: vaivén suave frente a la flor. */
        @keyframes sd-bob { from { transform: translateY(0) rotate(-1.1deg) } to { transform: translateY(9px) rotate(1.3deg) } }
        .sd-bob { transform-origin: 55% 45%; transform-box: fill-box; animation: sd-bob 2.7s ease-in-out 2.1s infinite alternate }

        /* Las alas vibran: batido rápido de colibrí. */
        @keyframes sd-ala { from { transform: rotate(-6deg) scaleY(.9) } to { transform: rotate(8deg) scaleY(1.04) } }
        .sd-ala { transform-origin: 12% 88%; transform-box: fill-box; animation: sd-ala .3s ease-in-out infinite alternate }
        .sd-ala2 { transform-origin: 88% 90%; transform-box: fill-box; animation: sd-ala .3s ease-in-out -.15s infinite alternate }

        /* Su trayectoria punteada se dibuja mientras llega. */
        @keyframes sd-trazo { from { clip-path: inset(0 0 0 100%) } to { clip-path: inset(0 0 0 0) } }
        .sd-trazo { animation: sd-trazo 1.9s cubic-bezier(.42,.08,.25,1) .2s both }

        /* El lirio abre esperando al picaflor. */
        @keyframes sd-flor { from { transform: scale(.55); opacity: 0 } to { transform: none; opacity: 1 } }
        .sd-flor { transform-origin: 50% 90%; transform-box: fill-box; animation: sd-flor 1.05s cubic-bezier(.3,1.25,.4,1) both }

        @keyframes sd-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .sd-sube { animation: sd-sube .85s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--sd-d, 0s) }

        /* Las líneas de vuelo entre secciones se dibujan al hacer scroll. */
        @supports (animation-timeline: view()) {
          .sd-linea { clip-path: inset(0 100% 0 0); animation: sd-linea linear both; animation-timeline: view(); animation-range: entry 10% cover 42% }
          @keyframes sd-linea { to { clip-path: inset(0 0 0 0) } }
          .sd-linea2 { clip-path: inset(0 0 0 100%); animation: sd-linea2 linear both; animation-timeline: view(); animation-range: entry 10% cover 42% }
          @keyframes sd-linea2 { to { clip-path: inset(0 0 0 0) } }
        }

        .sd-btn { transition: transform .18s ease, filter .18s ease }
        .sd-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .sd-btn:active { transform: scale(.97) }
        .sd-page a:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }
        .sd-page a:focus:not(:focus-visible) { outline: none }
        .sd-zoom { overflow: hidden }
        .sd-zoom img { transition: transform .8s cubic-bezier(.2,.6,.2,1) }
        .sd-zoom:hover img { transform: scale(1.035) }

        @media (prefers-reduced-motion: reduce) {
          .sd-vuelo, .sd-bob, .sd-ala, .sd-ala2, .sd-trazo, .sd-flor, .sd-sube { animation: none !important }
          .sd-linea, .sd-linea2 { clip-path: none !important; animation: none !important }
          .sd-btn, .sd-zoom img { transition: none !important }
        }
      `}</style>

      <BlitzNav
        name={<em className="tracking-[0.02em]">{BIZ.name}</em>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(250,246,236,0.94)',
          ink: C.carbon,
          line: C.lineL,
          btnBg: C.follaje,
          btnInk: C.marfil,
        }}
      />

      <div className="sd-page">
        {/* ── 1 · Portada: llega el picaflor ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(700px 460px at 78% 8%, rgba(226,190,98,0.10), transparent 62%), radial-gradient(560px 480px at -6% 88%, rgba(229,154,184,0.07), transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[74px] md:pt-[110px] pb-10 md:pb-16">
            <div className="grid lg:grid-cols-[1fr_1.05fr] items-center gap-2 lg:gap-10">
              {/* la escena: el picaflor llega al lirio */}
              <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[330px] md:max-w-[520px]">
                <svg viewBox="0 0 400 380" className="w-full h-auto" fill="none" aria-hidden="true">
                  {/* la trayectoria punteada del vuelo */}
                  <g className="sd-trazo">
                    <path
                      d="M 414 30 C 360 6 296 28 296 70 C 296 104 330 112 340 142 C 350 172 334 200 300 214 C 280 222 250 224 224 220"
                      stroke={C.oro}
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeDasharray="0.1 11"
                    />
                  </g>
                  {/* la salida: la línea sigue hacia la página */}
                  <path
                    d="M 96 342 C 140 362, 220 372, 300 376"
                    stroke={C.oro}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray="0.1 10"
                    opacity="0.45"
                  />
                  <g className="sd-flor" style={{ animationDelay: '0.05s' }}>
                    <g transform="translate(30,186) scale(1.25)">
                      <LirioArt />
                    </g>
                  </g>
                  <g className="sd-vuelo">
                    <g className="sd-bob">
                      <g transform="translate(118,172) scale(0.72)">
                        <PicaflorArt />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

              {/* la firma y la invitación */}
              <div className="order-2 lg:order-1 text-center lg:text-left -mt-2 lg:mt-0">
                <p
                  className="sd-sube text-[10px] md:text-xs font-bold uppercase tracking-[0.34em] mb-3 md:mb-5"
                  style={{ color: C.oroSuave, '--sd-d': '1.5s' } as CSSProperties}
                >
                  Vivero · {BIZ.city}, Biobío
                </p>
                <h1
                  className={`${display.className} leading-[0.95] tracking-[0.01em] text-[clamp(3.1rem,12.5vw,6.2rem)]`}
                  style={{ color: C.oro }}
                  aria-label="Sari Duo"
                >
                  <em className="sd-sube inline-block" style={{ '--sd-d': '1.35s' } as CSSProperties}>
                    Sari Duo
                  </em>
                </h1>
                <div className="sd-sube mt-4 flex items-center justify-center lg:justify-start gap-3" style={{ '--sd-d': '1.75s' } as CSSProperties} aria-hidden="true">
                  <span className="h-px w-12" style={{ backgroundColor: C.lineD }} />
                  <LirioMini color={C.oro} className="w-[15px] h-[15px]" />
                  <span className="h-px w-12" style={{ backgroundColor: C.lineD }} />
                </div>
                <p
                  className="sd-sube mx-auto lg:mx-0 mt-4 max-w-md text-[15px] md:text-lg leading-relaxed"
                  style={{ color: C.mutD, '--sd-d': '1.85s' } as CSSProperties}
                >
                  Un vivero con alma de jardín, a orilla de camino en {BIZ.city}.
                  Abierto todos los días.
                </p>
                <div
                  className="sd-sube mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
                  style={{ '--sd-d': '2s' } as CSSProperties}
                >
                  <BtnWa>Escríbenos por WhatsApp</BtnWa>
                  <a
                    href="#visita"
                    className="sd-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tap-44"
                    style={{ border: '1.5px solid rgba(226,190,98,0.55)', color: C.oro }}
                  >
                    Cómo llegar
                  </a>
                </div>
                <p
                  className="sd-sube mt-4 text-xs md:text-sm font-semibold tracking-[0.06em]"
                  style={{ color: C.mutD, '--sd-d': '2.15s' } as CSSProperties}
                >
                  Lun 10:00 · mar a dom 10:30 · hasta las 17:30
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · Las plantas: alma de jardín ── */}
        <section id="plantas" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
          <div className="pt-2 md:pt-4">
            <Vuelo variant="a" color={C.oroInk} />
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal className="lg:col-span-6 order-2 lg:order-1">
              <figure className="relative mx-auto w-[min(88%,340px)] md:w-[min(84%,400px)] lg:w-full lg:max-w-[420px]">
                <div
                  className="absolute -inset-2.5 translate-x-4 translate-y-4 rounded-[6px]"
                  style={{ border: `1.5px solid ${C.oro}` }}
                  aria-hidden="true"
                />
                <div className="sd-zoom relative aspect-[675/1200] rounded-[6px]" style={{ backgroundColor: C.carbon }}>
                  <Image
                    src={`${IMG}/crespon.webp`}
                    alt="Crespón con flores blancas y rosadas, plantado en el vivero junto al camino"
                    width={675}
                    height={1200}
                    priority
                    sizes="(min-width: 1024px) 420px, 88vw"
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutC }}>
                  <LirioMini color={C.rosaInk} antera={C.rosaInk} className="w-[13px] h-[13px] shrink-0 translate-y-[2px]" />
                  Crespón en flor, en el vivero
                </figcaption>
              </figure>
            </Reveal>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <Rotulo color={C.oroInk} icono={C.oro}>
                  El vivero
                </Rotulo>
                <h2 className={`${display.className} leading-[1.05] text-[clamp(2rem,7.4vw,3.9rem)]`}>
                  Un vivero con
                  <br />
                  <em style={{ color: C.follaje }}>alma de jardín</em>.
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutC }}>
                  {BIZ.name} es un vivero a orilla de camino en {BIZ.city},
                  abierto todos los días. Ven a recorrerlo con calma, o escribe
                  y pregunta por la planta que buscas.
                </p>
              </Reveal>
              <Reveal delay={190}>
                <dl className="mt-8 max-w-md divide-y" style={{ borderColor: C.lineL }}>
                  {[
                    ['Dónde', `${BIZ.city}, ${BIZ.region} · a orilla de camino`],
                    ['Cuándo', 'Abierto todos los días, hasta las 17:30'],
                    ['Cómo', 'Recórrelo o pregunta por WhatsApp'],
                  ].map(([t, d]) => (
                    <div key={t} className="flex gap-5 py-4" style={{ borderColor: 'inherit' }}>
                      <dt className="w-[86px] shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] pt-1" style={{ color: C.oroInk }}>
                        {t}
                      </dt>
                      <dd className="text-[15px] md:text-base font-semibold leading-relaxed">{d}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3 · Confianza: inscrito y recomendado ── */}
        <section id="confianza" className="scroll-mt-20 relative" style={{ backgroundColor: C.carbon, color: C.marfil }}>
          <div className="pt-2 md:pt-4">
            <Vuelo variant="b" color={C.oro} inv />
          </div>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-20 text-center">
            <Reveal>
              <p className="flex items-center justify-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-6" style={{ color: C.oroSuave }}>
                <LirioMini color={C.oro} antera={C.oro} className="w-[14px] h-[14px] shrink-0" />
                Confianza
              </p>
            </Reveal>
            <Reveal delay={80}>
              {/* el sello: la línea de vuelo cierra un círculo alrededor del lirio */}
              <div className="relative mx-auto w-[132px] h-[132px] md:w-[152px] md:h-[152px] mb-7">
                <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full" fill="none" aria-hidden="true">
                  <circle cx="80" cy="80" r="72" stroke={C.oro} strokeWidth="2.2" strokeLinecap="round" strokeDasharray="0.1 12" />
                  <circle cx="80" cy="80" r="60" stroke={C.oroSuave} strokeWidth="1" />
                </svg>
                <Lirio mini className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[74px]" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h2 className={`${display.className} leading-[1.08] text-[clamp(1.9rem,6.6vw,3.4rem)]`}>
                Vivero inscrito <em style={{ color: C.oro }}>en el SAG</em>.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutD }}>
                Depósito de plantas en la nómina vigente del Servicio Agrícola
                y Ganadero (enero 2026).
              </p>
            </Reveal>
            <Reveal delay={220}>
              <figure className="mt-12 md:mt-14">
                <div className="flex justify-center mb-4">
                  <Stars value={5} color={C.oro} size={13} />
                </div>
                <blockquote className={`${display.className} italic leading-[1.2] text-[clamp(1.4rem,4.6vw,2.3rem)]`}>
                  “{OPINION.texto}”
                </blockquote>
                <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutD }}>
                  {OPINION.autor} · {BIZ.rating} en Google, 1 opinión
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · Visítanos: el letrero en el camino ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.marfil2 }}>
          <div className="pt-2 md:pt-4">
            <Vuelo variant="c" color={C.oroInk} />
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
            <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7">
                <Reveal>
                  <Rotulo color={C.oroInk} icono={C.oro}>
                    Visítanos
                  </Rotulo>
                  <h2 className={`${display.className} leading-[1.05] text-[clamp(1.95rem,7vw,3.7rem)]`}>
                    El picaflor dorado
                    <br />
                    <em>te espera en el camino</em>.
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutC }}>
                    {BIZ.name} no publica calle ni número: se llega por el camino
                    y el letrero carbón con el picaflor dorado se reconoce al
                    instante. La ubicación exacta está en el mapa.
                  </p>
                </Reveal>

                <Reveal delay={120}>
                  <div className="mt-8 max-w-md">
                    <div className="border-t" style={{ borderColor: C.lineL }}>
                      {HORARIO.map((h) => (
                        <div key={h.d} className="flex items-baseline justify-between gap-4 py-4 border-b" style={{ borderColor: C.lineL }}>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.follaje }}>
                            {h.d}
                          </p>
                          <p className={`${display.className} text-xl md:text-2xl leading-none`}>{h.h}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs md:text-sm font-semibold" style={{ color: C.mutC }}>
                      Abre todos los días de la semana.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <BtnWa>Escríbenos por WhatsApp</BtnWa>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sd-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tap-44"
                      style={{ border: `1.5px solid ${C.follaje}`, color: C.follaje }}
                    >
                      Cómo llegar
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  <p className="mt-3 text-xs" style={{ color: C.mutC }}>
                    {BIZ.city}, Biobío · Código plus {BIZ.plusCode} ·{' '}
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.follaje }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </p>
                </Reveal>
              </div>

              {/* el letrero, como se ve desde el camino */}
              <Reveal delay={140} className="lg:col-span-5">
                <figure className="mx-auto w-fit">
                  <div className="sd-zoom relative w-[200px] md:w-[240px] rounded-[8px] shadow-[0_24px_44px_-18px_rgba(45,49,52,0.5)]" style={{ backgroundColor: C.carbonBajo }}>
                    <Image
                      src={`${IMG}/letrero.webp`}
                      alt="Letrero gris carbón de Sari Duo con el picaflor y la flor de lirio dorados, a orilla de camino"
                      width={338}
                      height={660}
                      sizes="(min-width: 768px) 240px, 200px"
                      className="w-full h-auto rounded-[8px]"
                    />
                  </div>
                  <div className="mx-auto mt-0 w-[3px] h-8" style={{ backgroundColor: C.carbon }} aria-hidden="true" />
                  <figcaption className="mt-2 text-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutC }}>
                    Así nos encuentras en el camino
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="mt-10 md:mt-14 relative w-full overflow-hidden rounded-[16px] aspect-[4/3] md:aspect-[21/9] min-h-[280px]" style={{ border: `1.5px solid ${C.lineL}`, backgroundColor: C.marfil }}>
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

        {/* ── 5 · Cierre: pregunta por tu planta ── */}
        <section id="contacto" className="relative overflow-hidden" style={{ backgroundColor: C.carbon, color: C.marfil }}>
          <div className="pt-2 md:pt-4">
            <Vuelo variant="a" color={C.oro} />
          </div>
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <div className="relative mx-auto w-[150px] h-[110px] mb-2" aria-hidden="true">
                <Lirio mini className="absolute left-0 bottom-0 w-[64px] h-[68px]" />
                <Picaflor className="absolute right-0 top-0 w-[98px] h-[84px]" />
              </div>
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2rem,7.4vw,4rem)]`}>
                Pregunta por <em style={{ color: C.oro }}>la planta que buscas</em>.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                Escríbenos por WhatsApp y te contamos qué hay hoy en el vivero.
              </p>
              <div className="mt-7 flex justify-center">
                <BtnWa bg={C.oro} ink={C.carbon}>
                  Escribir por WhatsApp
                </BtnWa>
              </div>
              <p className="mt-4 text-xs md:text-sm font-semibold tracking-[0.06em]" style={{ color: C.mutD }}>
                {BIZ.phoneDisplay} · todos los días hasta las 17:30
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · Footer ── */}
        <footer style={{ backgroundColor: C.carbonBajo, color: C.marfil }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
            <p className={`${display.className} text-xl leading-none flex items-center gap-2.5`} style={{ color: C.oro }}>
              <LirioMini color={C.oro} className="w-[14px] h-[14px]" />
              <em>{BIZ.name}</em>
            </p>
            <p className="text-xs leading-relaxed" style={{ color: C.mutD }}>
              {BIZ.rubro} · {BIZ.city}, {BIZ.region} ·{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44" style={{ color: C.marfil }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.oro }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opinión y horarios son reales y
              públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.oro }}>
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
