import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Prata para la portada (serif editorial de alto contraste) y Mulish
// para el texto corrido: la voz de revista del salón.
const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
    { path: '../../fonts/mulish/italic-200-1000.woff2', weight: '200 1000', style: 'italic' },
  ],
})

// El arte de la peluquería: negro tinta del logo, hueso de revista,
// champaña rubio en filetes y numerales, nude y moca del color de sus fotos.
const C = {
  tinta: '#121212',
  hueso: '#FAF6F0',
  hueso2: '#F3EBDF',
  champ: '#C9A46A',
  champSuave: '#E3C99C',
  champInk: '#7A5C1A', // dorado oscuro: ≥5.3:1 sobre hueso y hueso2
  nude: '#E8D2C8',
  moca: '#6E5243',
  mutL: 'rgba(18,18,18,0.64)',
  mutD: 'rgba(250,246,240,0.74)',
  lineL: 'rgba(18,18,18,0.16)',
  lineD: 'rgba(250,246,240,0.20)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-piu-bella',
  title: 'La Piú Bella by Luis Ranieri · Peluquería en Los Ángeles',
  description:
    'Peluquería en San Martín 596, Los Ángeles: balayage, color, rubios con Redken, tratamientos Kérastase, maquillaje y uñas. 5,0 en Google. Reserva tu hora por WhatsApp.',
  image: `${IMG}/cabello-brillo.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El método', href: '#metodo' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visítanos', href: '#visita' },
]

const SERVICIOS = [
  {
    n: '01',
    tag: 'Color',
    name: 'Color y balayage',
    desc: 'Balayage, coloraciones completas y morenas iluminadas, siempre con productos profesionales.',
  },
  {
    n: '02',
    tag: 'Rubios',
    name: 'Rubios y matización',
    desc: 'Decoloración controlada y matización con Redken Shades EQ; aclarado sin decolorar cuando el diagnóstico lo permite.',
  },
  {
    n: '03',
    tag: 'Estilo',
    name: 'Cortes y peinados',
    desc: 'Cortes, peinados de diario y de evento, canas luminosas y masajes capilares.',
  },
  {
    n: '04',
    tag: 'Eventos',
    name: 'Maquillaje y novias',
    desc: 'Maquillaje profesional para novias y eventos, coordinado con tu peinado.',
  },
  {
    n: '05',
    tag: 'Ritual',
    name: 'Tratamientos Kérastase',
    desc: 'Rituales Kérastase a medida del cabello, incluida la experiencia Fusio-Dose.',
  },
  {
    n: '06',
    tag: 'Manos',
    name: 'Uñas',
    desc: 'Servicio de uñas dentro del salón, para salir con todo listo.',
  },
]

const PASOS = [
  {
    n: 'I',
    name: 'Diagnóstico',
    desc: 'Antes de la técnica, el diagnóstico: se mira tu cabello, tu base natural y lo que quieres lograr. El plan sale de ahí.',
  },
  {
    n: 'II',
    name: 'Técnica',
    desc: 'Decoloración controlada para los rubios y aclarado sin decolorar cuando el diagnóstico lo permite.',
  },
  {
    n: 'III',
    name: 'Matización',
    desc: 'Matización con Redken Shades EQ para que el tono quede luminoso, nunca improvisado.',
  },
]

/** El corazón del logo: un trazo a mano que se dibuja sobre la U. */
function Corazon({
  className = '',
  color = C.tinta,
  animado = true,
}: {
  className?: string
  color?: string
  animado?: boolean
}) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <g transform="rotate(-9 20 20)">
        <path
          className={animado ? 'pb-trazo' : undefined}
          d="M20 33.5 C15.5 27 7.5 24.5 7.5 16.8 C7.5 10.8 13.4 8.6 16.9 12.4 C18.9 6.9 26.2 6.4 29.4 12 C32.4 17.4 28.4 25.4 20 33.5 Z"
          stroke={color}
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
          strokeDasharray={animado ? 100 : undefined}
        />
        <path
          className={animado ? 'pb-trazo2' : undefined}
          d="M13.2 13.8 C15 11.4 18.4 11.6 19.6 14"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={animado ? 100 : undefined}
          opacity="0.75"
        />
      </g>
    </svg>
  )
}

/** La hebra de luz: un mechón dorado fino que cruza la composición. */
function Hebra({ className = '', color = C.champ }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 240 40" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M4 30 C 48 4 88 46 128 22 C 158 4 188 20 236 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Rotulo({
  children,
  light = false,
  color,
}: {
  children: React.ReactNode
  light?: boolean
  color?: string
}) {
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5"
      style={{ color: color ?? (light ? '#EED8AC' : C.champInk) }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
}: {
  children: React.ReactNode
  href?: string
  tone: 'tinta' | 'champ' | 'linea' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'tinta'
      ? { backgroundColor: C.tinta, color: C.hueso }
      : tone === 'champ'
        ? { backgroundColor: C.champ, color: C.tinta }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.tinta}`, color: C.tinta }
          : { border: '1.5px solid rgba(250,246,240,0.55)', color: C.hueso }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="pb-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
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

/** El titular de portada entra letra por letra con un leve ascenso.
    El h1 lleva aria-label; estas letras son solo la animación. */
function Titular({ texto, className = '' }: { texto: string; className?: string }) {
  const palabras = texto.split(' ')
  let i = 0
  return (
    <span className={className} aria-hidden="true">
      {palabras.map((p, pi) => (
        <span key={pi} className="inline-block whitespace-nowrap">
          {p.split('').map((l, li) => {
            const d = 0.55 + i++ * 0.032
            return (
              <span key={li} className="inline-block overflow-hidden align-bottom">
                <span className="pb-letra inline-block" style={{ '--pb-d': `${d}s` } as CSSProperties}>
                  {l}
                </span>
              </span>
            )
          })}
          {pi < palabras.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

export default function LaPiuBellaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.hueso, color: C.tinta }}
    >
      <style>{`
        /* Brillo de salón: una franja de luz cruza el cabello una vez y
           vuelve cada ~6 s, como el reflejo que recorre un pelo sano. */
        @keyframes pb-brillo {
          0% { transform: translateX(-260%) skewX(-18deg); opacity: 0 }
          3% { opacity: 1 }
          24% { transform: translateX(480%) skewX(-18deg); opacity: 1 }
          26%, 100% { transform: translateX(480%) skewX(-18deg); opacity: 0 }
        }
        .pb-brillo { animation: pb-brillo 7.8s cubic-bezier(.45,.05,.3,1) 1.1s infinite }

        /* El corazón del logo se dibuja a mano sobre la U. */
        @keyframes pb-trazo { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .pb-trazo { animation: pb-trazo .95s cubic-bezier(.5,.08,.3,1) 1s both }
        .pb-trazo2 { animation: pb-trazo .5s cubic-bezier(.5,.08,.3,1) 1.75s both }

        /* Portada: el titular sube letra a letra; el resto aparece suave. */
        @keyframes pb-letra {
          from { transform: translateY(112%) }
          to { transform: translateY(0) }
        }
        .pb-letra { animation: pb-letra .72s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--pb-d, 0s) }
        @keyframes pb-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .pb-sube { animation: pb-sube .9s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--pb-d, 0s) }

        /* El método: la hebra se alarga a medida que bajas por los pasos. */
        @supports (animation-timeline: view()) {
          .pb-hebra { clip-path: inset(0 0 100% 0); animation: pb-hebra linear both; animation-timeline: view(); animation-range: entry 15% cover 50% }
          @keyframes pb-hebra { to { clip-path: inset(0 0 0% 0) } }
        }

        .pb-btn { transition: transform .18s ease, filter .18s ease }
        .pb-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .pb-btn:active { transform: scale(.97) }
        .pb-page a:focus-visible { outline: 3px solid ${C.champ}; outline-offset: 3px }
        .pb-page a:focus:not(:focus-visible) { outline: none }
        .pb-serv { transition: background-color .25s ease }
        .pb-serv:hover { background-color: ${C.hueso2} }

        @media (prefers-reduced-motion: reduce) {
          .pb-brillo { display: none !important }
          .pb-trazo, .pb-trazo2 { animation: none !important; stroke-dashoffset: 0 !important }
          .pb-letra, .pb-sube { animation: none !important }
          .pb-hebra { clip-path: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.06em]">{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: 'rgba(250,246,240,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.tinta,
          btnInk: C.hueso,
        }}
      />

      <div className="pb-page">
        {/* ── 1 · Portada: el arte de la peluquería ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.hueso }}>
          {/* hebras de fondo muy suaves, como papel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(720px 420px at 85% -6%, rgba(201,164,106,0.16), transparent 62%), radial-gradient(560px 420px at -8% 30%, rgba(232,210,200,0.35), transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[72px] md:pt-[110px] pb-10 md:pb-16">
            <p
              className="pb-sube text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.34em] mb-4 md:mb-7"
              style={{ color: C.champInk, '--pb-d': '0.1s' } as CSSProperties}
            >
              Los Ángeles · San Martín 596
            </p>

            {/* masthead: el logo rehecho en tipografía para que el corazón se dibuje */}
            <div className="pb-sube text-center" style={{ '--pb-d': '0.25s' } as CSSProperties}>
              <p
                className={`${display.className} leading-none tracking-[0.045em] text-[clamp(2.1rem,8.4vw,4.8rem)]`}
                style={{ color: C.tinta }}
                aria-label="La Piu Bella"
              >
                LA PI
                <span className="relative inline-block">
                  U
                  <Corazon className="absolute left-1/2 -translate-x-1/2 bottom-[0.92em] w-[0.5em] h-[0.5em]" />
                </span>
                <span className="tracking-[0.045em]">&nbsp;BELLA</span>
              </p>
              <div className="mt-2.5 md:mt-4 flex items-center justify-center gap-4">
                <span className="h-px w-10 md:w-16" style={{ backgroundColor: C.champ }} aria-hidden="true" />
                <p className="text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.5em]" style={{ color: C.moca }}>
                  By Luis Ranieri
                </p>
                <span className="h-px w-10 md:w-16" style={{ backgroundColor: C.champ }} aria-hidden="true" />
              </div>
            </div>

            {/* la placa central: la foto en su marco alto con arco y el brillo */}
            <div className="mt-6 md:mt-9 grid lg:grid-cols-[1fr_minmax(320px,400px)_1fr] items-center gap-7 lg:gap-10">
              {/* líneas de portada laterales (solo pantallas anchas) */}
              <div className="hidden lg:flex flex-col items-end gap-2.5 text-right">
                {['Peluquería', 'Maquillaje', 'Uñas'].map((t, i) => (
                  <p
                    key={t}
                    className="pb-sube text-[10px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: i === 1 ? C.champInk : C.mutL, '--pb-d': `${1.2 + i * 0.12}s` } as CSSProperties}
                  >
                    {t}
                  </p>
                ))}
              </div>

              <figure
                className="pb-sube relative mx-auto w-full max-w-[258px] sm:max-w-[340px] lg:max-w-none"
                style={{ '--pb-d': '0.5s' } as CSSProperties}
              >
                {/* filete doble: el marco del arco */}
                <div
                  className="rounded-t-full p-[7px]"
                  style={{ border: `1.5px solid ${C.champ}` }}
                >
                  <div
                    className="rounded-t-full p-[5px]"
                    style={{ border: `1px solid rgba(201,164,106,0.45)` }}
                  >
                    <div className="relative aspect-[4/5] rounded-t-full overflow-hidden" style={{ backgroundColor: C.tinta }}>
                      <Image
                        src={`${IMG}/cabello-brillo.webp`}
                        alt="Cabello largo y brillante recién terminado, frente al letrero luminoso de La Piú Bella"
                        fill
                        priority
                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, 78vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 30%' }}
                      />
                      {/* el destello de brillo que cruza el cabello */}
                      <div
                        className="pb-brillo absolute top-[-8%] bottom-[-8%] left-0 w-[36%] pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent 0%, rgba(255,248,235,0.4) 32%, rgba(255,250,240,0.85) 50%, rgba(255,248,235,0.4) 68%, transparent 100%)',
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <figcaption className="sr-only">
                  Trabajo de brillo y color del salón, fotografiado bajo su letrero.
                </figcaption>
              </figure>

              <div className="hidden lg:flex flex-col items-start gap-2.5">
                {['Balayage', 'Rubios Redken', 'Kérastase'].map((t, i) => (
                  <p
                    key={t}
                    className="pb-sube text-[10px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: i === 1 ? C.champInk : C.mutL, '--pb-d': `${1.2 + i * 0.12}s` } as CSSProperties}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>

            {/* titular de portada */}
            <h1
              className={`${display.className} mt-6 md:mt-10 text-center leading-[1.04] tracking-[0.005em] text-[clamp(2rem,7.2vw,3.8rem)]`}
              style={{ color: C.tinta }}
              aria-label="El arte de la peluquería."
            >
              <Titular texto="El arte de la peluquería." />
            </h1>
            <p
              className="pb-sube mt-4 md:mt-6 mx-auto max-w-md text-center text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutL, '--pb-d': '1.5s' } as CSSProperties}
            >
              Balayage, color, rubios con Redken, tratamientos Kérastase,
              maquillaje y uñas en {BIZ.address}, {BIZ.city}.
            </p>
            <div className="pb-sube mt-5 md:mt-7 flex flex-wrap items-center justify-center gap-3" style={{ '--pb-d': '1.65s' } as CSSProperties}>
              <BtnWa tone="tinta">
                <WaIcon />
                Reserva tu hora por WhatsApp
              </BtnWa>
              <BtnWa href="#servicios" tone="linea">
                Ver servicios
              </BtnWa>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pb-sube mt-4 md:mt-6 inline-flex items-center gap-2.5 tap-44"
              style={{ '--pb-d': '1.8s' } as CSSProperties}
            >
              <Stars value={BIZ.ratingValue} color={C.champ} size={16} />
              <span className="text-sm font-bold" style={{ color: C.tinta }}>
                {BIZ.rating}
              </span>
              <span className="text-sm" style={{ color: C.mutL }}>
                · {BIZ.reviews} opiniones en Google
              </span>
            </a>
          </div>
          {/* borde inferior de la portada */}
          <div className="relative flex items-center justify-center pb-5" aria-hidden="true">
            <Hebra className="w-[38%] max-w-[220px] h-6" />
            <Corazon animado={false} color={C.champInk} className="w-4 h-4 mx-3 -mt-1 shrink-0" />
            <Hebra className="w-[38%] max-w-[220px] h-6 -scale-x-100" />
          </div>
        </section>

        {/* ── 2 · Manifiesto de Luis Ranieri ── */}
        <section className="relative" style={{ backgroundColor: C.tinta }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <Corazon animado={false} color={C.champ} className="w-7 h-7 mx-auto mb-7" />
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.34em] mb-6" style={{ color: C.champSuave }}>
                El manifiesto · {BIZ.by}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <blockquote
                className={`${display.className} leading-[1.18] text-[clamp(1.55rem,5.4vw,3.1rem)]`}
                style={{ color: C.hueso }}
              >
                “Tú como cliente eres más
                <br />
                que un pelo bonito.”
              </blockquote>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 md:mt-8 mx-auto max-w-xl text-sm md:text-base leading-relaxed" style={{ color: C.mutD }}>
                Así presentó Luis Ranieri su salón al abrir en 2025: hacer
                del arte de la peluquería una profesión inolvidable, con
                capacitación constante y productos profesionales. Aquí no
                improvisamos: profesionalismo, técnica y dedicación en cada
                detalle.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className={`${display.className} mt-7 text-lg md:text-xl`} style={{ color: C.champSuave }}>
                “Tu belleza, en manos expertas.”
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 3 · Servicios: el índice editorial ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo>Servicios del salón</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
                <h2
                  className={`${display.className} text-[clamp(1.9rem,6.4vw,3.4rem)] leading-[1.06] max-w-xl`}
                  style={{ color: C.tinta }}
                >
                  Seis piezas
                  <br />
                  del mismo oficio.
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.mutL }}>
                  Lo que el salón publica en su Instagram, ordenado como
                  índice de revista. Cada servicio se reserva por WhatsApp.
                </p>
              </div>
            </Reveal>
            <ol className="border-t" style={{ borderColor: C.lineL }}>
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.n} delay={i * 60}>
                  <li
                    className="pb-serv grid grid-cols-[auto_1fr] items-baseline gap-x-4 md:gap-x-7 py-5 md:py-6 px-2 md:px-4 border-b"
                    style={{ borderColor: C.lineL }}
                  >
                    <span
                      className={`${display.className} text-2xl md:text-4xl leading-none w-[2ch] text-right`}
                      style={{ color: C.champInk }}
                      aria-hidden="true"
                    >
                      {s.n}
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                        <span
                          className={`${display.className} text-xl md:text-3xl leading-snug`}
                          style={{ color: C.tinta }}
                        >
                          {s.name}
                        </span>
                        <span
                          className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.28em]"
                          style={{ color: C.moca }}
                        >
                          {s.tag}
                        </span>
                      </span>
                      <span className="block mt-1 text-[13px] md:text-sm leading-relaxed max-w-lg" style={{ color: C.mutL }}>
                        {s.desc}
                      </span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <BtnWa tone="tinta">
                  <WaIcon />
                  Reserva tu hora por WhatsApp
                </BtnWa>
                <p className="text-xs" style={{ color: C.mutL }}>
                  Los valores se confirman al agendar.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · El método: la hebra que se alarga ── */}
        <section id="metodo" className="scroll-mt-20" style={{ backgroundColor: C.hueso2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo>El método</Rotulo>
                  <h2
                    className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] mb-4`}
                    style={{ color: C.tinta }}
                  >
                    Antes de la técnica,
                    <br />
                    el diagnóstico.
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-10" style={{ color: C.mutL }}>
                    En La Piú Bella cada servicio es una experiencia pensada
                    para resaltar tu esencia: primero se estudia tu cabello,
                    después se trabaja.
                  </p>
                </Reveal>
                <ol className="relative pl-14 space-y-8">
                  {/* la hebra dorada que baja por los pasos */}
                  <svg
                    viewBox="0 0 32 420"
                    className="pb-hebra absolute left-0 top-1 h-[calc(100%-6px)] w-[30px]"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 4 C 24 60 8 110 17 160 C 26 210 7 260 17 310 C 24 350 13 390 16 416"
                      stroke={C.champ}
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  {PASOS.map((p, i) => (
                    <Reveal key={p.n} delay={i * 110}>
                      <li className="relative">
                        <span
                          className="absolute -left-14 top-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest"
                          style={{
                            border: `1.5px solid ${C.champ}`,
                            backgroundColor: C.hueso2,
                            color: C.champInk,
                          }}
                          aria-hidden="true"
                        >
                          {p.n}
                        </span>
                        <h3 className={`${display.className} text-xl md:text-2xl mb-1.5 pt-0.5`} style={{ color: C.tinta }}>
                          {p.name}
                        </h3>
                        <p className="text-sm leading-relaxed max-w-md" style={{ color: C.mutL }}>
                          {p.desc}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
                <Reveal delay={380}>
                  <div className="mt-10">
                    <BtnWa tone="tinta">
                      <WaIcon />
                      Consulta tu caso por WhatsApp
                    </BtnWa>
                  </div>
                </Reveal>
              </div>

              {/* tríptico de técnica: tres figuras con filete */}
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                <Reveal className="col-span-2 sm:col-span-1 sm:row-span-2">
                  <figure
                    className="relative aspect-[3/4] sm:aspect-auto sm:h-full overflow-hidden"
                    style={{ border: `1.5px solid ${C.champ}` }}
                  >
                    <Image
                      src={`${IMG}/color-pincel.webp`}
                      alt="Aplicación de color con pincel en la raíz durante un servicio técnico del salón"
                      fill
                      sizes="(min-width: 640px) 24vw, 92vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute left-0 bottom-0 text-[9px] font-bold uppercase tracking-[0.22em] px-3 py-2"
                      style={{ backgroundColor: C.tinta, color: C.champSuave }}
                    >
                      Fig. 01 · Aplicación en raíz
                    </span>
                  </figure>
                </Reveal>
                <Reveal delay={110} className="col-span-1">
                  <figure
                    className="relative aspect-[3/4] overflow-hidden"
                    style={{ border: `1.5px solid ${C.champ}` }}
                  >
                    <Image
                      src={`${IMG}/color-aplicacion.webp`}
                      alt="Matizador Redken Shades EQ junto a la botella aplicadora en la mesa de trabajo"
                      fill
                      sizes="(min-width: 640px) 24vw, 44vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute left-0 bottom-0 text-[9px] font-bold uppercase tracking-[0.22em] px-3 py-2"
                      style={{ backgroundColor: C.tinta, color: C.champSuave }}
                    >
                      Fig. 02 · Shades EQ
                    </span>
                  </figure>
                </Reveal>
                <Reveal delay={200} className="col-span-1">
                  <figure
                    className="relative aspect-[3/4] overflow-hidden"
                    style={{ border: `1.5px solid ${C.champ}` }}
                  >
                    <Image
                      src={`${IMG}/redken.webp`}
                      alt="Decolorante profesional Redken blondiQ, el que usa el salón para los rubios"
                      fill
                      sizes="(min-width: 640px) 24vw, 44vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute left-0 bottom-0 text-[9px] font-bold uppercase tracking-[0.22em] px-3 py-2"
                      style={{ backgroundColor: C.tinta, color: C.champSuave }}
                    >
                      Fig. 03 · blondiQ
                    </span>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Belleza con propósito ── */}
        <section style={{ backgroundColor: C.moca }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo light>Belleza con propósito</Rotulo>
              <h2
                className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] max-w-2xl mb-10 md:mb-14`}
                style={{ color: C.hueso }}
              >
                Un salón que también
                <br />
                cuida lo que corta.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  t: 'Concepto ecológico',
                  d: 'El salón trabaja de la mano de L\u2019Oréal Professionnel y su iniciativa ForTheFuture: la belleza también se piensa en clave de futuro.',
                },
                {
                  t: 'Tu cabello puede ser una peluca',
                  d: 'La Piú Bella es punto de recolección de cabello para pelucas de niños con cáncer. Si vas a cortarte el largo, aquí puede seguir haciendo bien.',
                },
              ].map((b, i) => (
                <Reveal key={b.t} delay={i * 110}>
                  <article className="border-t pt-6" style={{ borderColor: 'rgba(250,246,240,0.3)' }}>
                    <Corazon animado={false} color={C.champSuave} className="w-6 h-6 mb-4" />
                    <h3 className={`${display.className} text-2xl md:text-3xl mb-3`} style={{ color: C.hueso }}>
                      {b.t}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: 'rgba(250,246,240,0.8)' }}>
                      {b.d}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 · Opiniones: 5,0 en Google ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Rotulo>Opiniones</Rotulo>
                <p className={`${display.className} leading-none text-[clamp(4.2rem,16vw,7rem)]`} style={{ color: C.tinta }}>
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.champ} size={20} />
                </div>
                <p className="mt-3 text-sm" style={{ color: C.mutL }}>
                  {BIZ.reviews} opiniones en su ficha de Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                  style={{ color: C.tinta, textDecorationColor: C.champ }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-8 md:space-y-10">
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.author} delay={i * 110}>
                    <figure className="border-l-2 pl-6 md:pl-8" style={{ borderColor: C.champ }}>
                      <blockquote
                        className={`${body.className} italic text-[15px] md:text-lg leading-relaxed`}
                        style={{ color: C.tinta }}
                      >
                        “{r.text}”
                      </blockquote>
                      <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.moca }}>
                        {r.author} · {r.fuente}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 · Visítanos: San Martín 596 ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.nude }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-stretch">
              <Reveal>
                <figure
                  className="relative h-full min-h-[340px] md:min-h-[460px] overflow-hidden"
                  style={{ border: `1.5px solid ${C.moca}` }}
                >
                  <Image
                    src={`${IMG}/clienta.webp`}
                    alt="Mujer con abrigo claro y cabello rubio luminoso frente al salón La Piú Bella"
                    fill
                    sizes="(min-width: 1024px) 36vw, 92vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 22%' }}
                  />
                  <span
                    className="absolute left-0 bottom-0 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-2"
                    style={{ backgroundColor: C.tinta, color: C.champSuave }}
                  >
                    {BIZ.address} · {BIZ.city}
                  </span>
                </figure>
              </Reveal>
              <div className="flex flex-col">
                <Reveal>
                  <Rotulo color={C.moca}>Visítanos</Rotulo>
                  <h2
                    className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] mb-6`}
                    style={{ color: C.tinta }}
                  >
                    {BIZ.address},
                    <br />
                    {BIZ.city}.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 mb-7 text-sm md:text-[15px]">
                    {HORARIO.map((h) => (
                      <div key={h.d} className="contents">
                        <dt className="font-bold" style={{ color: C.moca }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: C.tinta }}>{h.h}</dd>
                      </div>
                    ))}
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.moca }}>
                        WhatsApp
                      </dt>
                      <dd>
                        <a
                          href={`tel:${BIZ.phoneTel}`}
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.tinta, textDecorationColor: C.champInk }}
                        >
                          {BIZ.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.moca }}>
                        Instagram
                      </dt>
                      <dd>
                        <a
                          href={BIZ.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.tinta, textDecorationColor: C.champInk }}
                        >
                          {BIZ.igHandle}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </Reveal>
                <Reveal delay={160}>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <BtnWa tone="tinta">
                      <WaIcon />
                      Reserva tu hora
                    </BtnWa>
                    <BtnWa href={MAPS_URL} tone="linea">
                      Cómo llegar →
                    </BtnWa>
                  </div>
                </Reveal>
                <Reveal delay={220} className="flex-1">
                  <div
                    className="overflow-hidden h-full min-h-[300px]"
                    style={{ border: `1.5px solid ${C.moca}`, backgroundColor: C.hueso }}
                  >
                    <LazyMap
                      title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="w-full h-full min-h-[300px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8 · Cierre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(680px 420px at 50% 118%, rgba(201,164,106,0.22), transparent 62%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <Corazon animado={false} color={C.champ} className="w-8 h-8 mx-auto mb-6" />
              <h2
                className={`${display.className} leading-[1.1] text-[clamp(1.8rem,6.4vw,3.4rem)] mb-5`}
                style={{ color: C.hueso }}
              >
                Tu belleza,
                <br />
                en manos expertas.
              </h2>
              <p className="mx-auto max-w-md text-sm md:text-base leading-relaxed mb-8" style={{ color: C.mutD }}>
                En La Piú Bella, cada servicio es una experiencia pensada
                para resaltar tu esencia. Escríbenos y reserva tu hora.
              </p>
              <BtnWa tone="champ">
                <WaIcon />
                Reserva tu hora por WhatsApp
              </BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.tinta, color: C.hueso }}>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <Image
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name} ${BIZ.by}`}
                width={1207}
                height={345}
                className="w-[168px] h-auto shrink-0"
                style={{ filter: 'invert(0.95) sepia(0.14) saturate(1.6)' }}
              />
              <div className="text-xs leading-relaxed" style={{ color: C.mutD }}>
                <p className="font-bold text-sm mb-0.5" style={{ color: C.hueso }}>
                  {BIZ.name} <span style={{ color: C.mutD }}>{BIZ.by}</span>
                </p>
                <address className="not-italic">
                  {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 whitespace-nowrap tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                  {' · '}
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44">
                    {BIZ.igHandle}
                  </a>
                </address>
              </div>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.champSuave }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name} {BIZ.by}. Datos, fotos, opiniones y horarios son
              reales y públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.champSuave }}>
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
