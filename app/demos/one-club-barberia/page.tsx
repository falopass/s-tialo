import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// DM Serif Display: la serif clásica del letrero, con versalitas finas.
// Manrope para el texto corrido, limpia y moderna.
const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// El club nocturno de su logo: negro club, dorado viejo, marfil,
// un detalle en verde botella y el gris humo de las sombras.
const C = {
  club: '#0B0B0C',
  panel: '#121214',
  oro: '#B8945A',
  oroInk: '#7C5C24', // dorado oscuro: pasa 4.5:1 sobre marfil
  oroClaro: '#D6BC85', // dorado claro: pasa 4.5:1 sobre verde
  marfil: '#EFE9DF',
  marfilBajo: '#E4DCCB',
  verde: '#1F3A2E',
  verdeBajo: '#172B22',
  humo: '#6F6A64',
  mutD: 'rgba(239,233,223,0.70)',
  mutL: 'rgba(11,11,12,0.68)',
  lineD: 'rgba(239,233,223,0.16)',
  lineOro: 'rgba(184,148,90,0.45)',
  lineL: 'rgba(11,11,12,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'one-club-barberia',
  title: 'Studio One Club Salón · Barbería en Valdivia',
  description:
    'Barbería en Av. Ramón Picarte 1093, Valdivia: cortes, fade, textura, barba y estilismo con hora agendada, de lunes a domingo. 5,0 en Google. Agenda por WhatsApp.',
  image: `${IMG}/interior.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El book', href: '#book' },
  { label: 'El local', href: '#local' },
  { label: 'Visita', href: '#visita' },
]

const SERVICIOS = [
  {
    n: '01',
    icon: 'tijera' as const,
    name: 'Cortes',
    desc: 'Fade, textura, mullet, ondulados y mod cut: el estilo que traigas, hecho a conciencia en la silla.',
    tag: 'La casa',
  },
  {
    n: '02',
    icon: 'navaja' as const,
    name: 'Barba',
    desc: 'Servicio clásico y servicio de barba: perfilado, arreglo completo y terminación limpia.',
    tag: 'Clásico',
  },
  {
    n: '03',
    icon: 'peine' as const,
    name: 'Estilismo',
    desc: 'Nuevo servicio de peluquería y estilismo. La agenda ya está abierta por WhatsApp o Instagram.',
    tag: 'Nuevo',
  },
]

const BOOK = [
  {
    src: `${IMG}/fade.webp`,
    w: 720,
    h: 960,
    name: 'Fade con textura',
    alt: 'Fade con flequillo texturizado terminado, fotografiado sobre fondo blanco',
  },
  {
    src: `${IMG}/corte-mullet.webp`,
    w: 1203,
    h: 1600,
    name: 'Textura y fade',
    alt: 'Corte con textura arriba y fade marcado, de perfil, en la silla del salón',
  },
  {
    src: `${IMG}/corte-ondulado.webp`,
    w: 1203,
    h: 1600,
    name: 'Ondulado largo',
    alt: 'Corte ondulado largo con terminación al ras en la nuca, de perfil',
  },
  {
    src: `${IMG}/fade-bn.webp`,
    w: 720,
    h: 960,
    name: 'Fade',
    alt: 'Fade terminado en blanco y negro, con el aro de luz del salón detrás',
  },
]

/** Mini losa del poste: tres franjas diagonales, la marca de la casa. */
function LosaPoste({ className = 'w-[18px] h-[10px]' }: { className?: string }) {
  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(120deg, ${C.oro} 0 3px, ${C.marfil} 3px 6px, ${C.verde} 6px 9px)`,
      }}
      aria-hidden="true"
    />
  )
}

/** El poste de barbero del hero: una franja vertical con rayas diagonales
    (dorado, marfil, verde) que gira en loop lento. Las rayas suben 132 px,
    justo el período vertical del patrón: loop perfecto. */
function Poste({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ backgroundColor: C.panel }}
      aria-hidden="true"
    >
      <div
        className="oc-poste absolute left-0 top-0 w-full"
        style={{
          height: 'calc(100% + 132px)',
          backgroundImage: `repeating-linear-gradient(120deg, ${C.oro} 0 22px, ${C.marfil} 22px 44px, ${C.verde} 44px 66px)`,
        }}
      />
    </div>
  )
}

/** Divisor horizontal con las franjas del poste, también en loop lento. */
function PosteBar({ height = 10 }: { height?: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ height, backgroundColor: C.panel }}
      aria-hidden="true"
    >
      <div
        className="oc-postebar absolute top-0 left-0 h-full"
        style={{
          width: 'calc(100% + 132px)',
          backgroundImage: `repeating-linear-gradient(150deg, ${C.oro} 0 22px, ${C.marfil} 22px 44px, ${C.verde} 44px 66px)`,
        }}
      />
    </div>
  )
}

/** El monograma 1C: se dibuja con trazo dorado y luego se rellena,
    igual que en su logo («1» dorada, «C» marfil). */
function Monograma({ className = 'w-[92px] md:w-[116px] h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 92"
      className={`${display.className} ${className}`}
      role="img"
      aria-label="Monograma 1C de One Club"
    >
      <text
        x="12"
        y="72"
        fontSize="84"
        className="oc-trazo"
        style={{ fill: C.oro, stroke: C.oro, strokeWidth: 1.1 }}
      >
        1
      </text>
      <text
        x="60"
        y="72"
        fontSize="84"
        className="oc-trazo"
        style={{ fill: C.marfil, stroke: C.oro, strokeWidth: 1.1 }}
      >
        C
      </text>
    </svg>
  )
}

function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-6"
      style={{ color: light ? C.oroClaro : C.oroInk }}
    >
      <LosaPoste />
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
  tone: 'oro' | 'linea' | 'lineaD' | 'club'
}) {
  const st: CSSProperties =
    tone === 'oro'
      ? { backgroundColor: C.oro, color: C.club }
      : tone === 'club'
        ? { backgroundColor: C.club, color: C.marfil }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.club}`, color: C.club }
          : { border: '1.5px solid rgba(239,233,223,0.5)', color: C.marfil }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="oc-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 text-[13px] font-extrabold uppercase tracking-[0.16em] tap-44"
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

const ICONOS: Record<string, React.ReactNode> = {
  tijera: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.2 7.8 20 19 M8.2 16.2 20 5" />
    </>
  ),
  navaja: (
    <>
      <path d="M4 9.5 16 4l3 3.5L7.5 13 4 9.5Z" />
      <path d="M7.5 13 6 17.5M10.5 11.8l-1 4" />
      <path d="M4 20h14" />
    </>
  ),
  peine: (
    <>
      <path d="M5 4h14v5H5z" />
      <path d="M6.5 9v11M9.8 9v8M13.1 9v11M16.4 9v8" />
    </>
  ),
}

function IconoServicio({ name }: { name: keyof typeof ICONOS }) {
  return (
    <span
      className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0 rounded-full"
      style={{ border: `1.5px solid ${C.lineOro}`, color: C.oroInk }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-[21px] h-[21px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {ICONOS[name]}
      </svg>
    </span>
  )
}

export default function OneClubBarberiaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.club, color: C.marfil }}
    >
      <style>{`
        /* El poste: las rayas suben en loop, como el cilindro que gira
           en la puerta de una barbería. */
        @keyframes oc-poste { to { transform: translateY(-132px) } }
        .oc-poste { animation: oc-poste 9s linear infinite }
        @keyframes oc-postebar { to { transform: translateX(-132px) } }
        .oc-postebar { animation: oc-postebar 16s linear infinite }

        /* El monograma 1C se dibuja con trazo dorado y después se rellena. */
        .oc-trazo {
          fill-opacity: 0;
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
          animation:
            oc-trazo 1.5s cubic-bezier(.4,.08,.3,1) .5s forwards,
            oc-relleno .8s ease 1.65s forwards;
        }
        @keyframes oc-trazo { to { stroke-dashoffset: 0 } }
        @keyframes oc-relleno { to { fill-opacity: 1 } }

        /* El titular entra con el espaciado de letras cerrándose,
           como un rótulo que se ajusta. */
        .oc-titulo { animation: oc-titulo 1.1s cubic-bezier(.22,.68,.26,1) .8s both }
        @keyframes oc-titulo {
          from { letter-spacing: .3em; opacity: 0 }
          to { letter-spacing: .015em; opacity: 1 }
        }

        /* Apariciones escalonadas del hero y fundido de la foto. */
        .oc-sube { animation: oc-sube .9s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--oc-d, 0s) }
        @keyframes oc-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .oc-foto { animation: oc-foto 1.2s cubic-bezier(.25,.1,.25,1) 1.5s both }
        @keyframes oc-foto { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: none } }

        /* El book: cada página se abre de izquierda a derecha al entrar,
           como pasar las hojas del book de la barbería. */
        @supports (animation-timeline: view()) {
          .oc-hoja { clip-path: inset(0 100% 0 0); animation: oc-hoja linear both; animation-timeline: view(); animation-range: entry 8% entry 55% }
          @keyframes oc-hoja { to { clip-path: inset(0 0 0 0) } }
        }

        .oc-btn { transition: transform .18s ease, filter .18s ease }
        .oc-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .oc-btn:active { transform: scale(.97) }
        .oc-page a:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }
        .oc-serv { transition: background-color .25s ease }
        .oc-serv:hover { background-color: ${C.marfilBajo} }

        @media (prefers-reduced-motion: reduce) {
          .oc-poste, .oc-postebar { animation: none !important }
          .oc-trazo { animation: none !important; fill-opacity: 1 !important; stroke-dashoffset: 0 !important }
          .oc-titulo, .oc-sube, .oc-foto { animation: none !important; letter-spacing: .015em !important }
          .oc-hoja { clip-path: none !important; animation: none !important }
        }
      `}</style>

      {/* La nav cae transparente sobre el negro del club. */}
      <div className="h-0" style={{ backgroundColor: C.club }}>
        <BlitzNav
          name={<span className="tracking-[0.24em]">ONE CLUB</span>}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          ctaLabel="Agenda"
          theme={{
            over: 'dark',
            bar: 'rgba(11,11,12,0.94)',
            ink: C.marfil,
            line: C.lineD,
            btnBg: C.oro,
            btnInk: C.club,
          }}
        />
      </div>

      <div className="oc-page">
        {/* ── 1 · Hero: la puerta del club ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.club }}>
          {/* brillo cálido muy tenue, como la lámpara del salón */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(640px 420px at 82% -8%, rgba(184,148,90,0.14), transparent 62%), radial-gradient(500px 380px at -10% 70%, rgba(31,58,46,0.35), transparent 60%)',
            }}
            aria-hidden="true"
          />
          {/* el poste, montado en el borde como en la fachada real */}
          <Poste className="absolute left-0 top-0 bottom-0 w-[15px] md:w-[18px]" />
          <div className="absolute left-[15px] md:left-[18px] top-0 bottom-0 w-px" style={{ backgroundColor: C.lineOro }} aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto pl-9 md:pl-16 pr-5 md:pr-8 pt-[88px] md:pt-[120px] pb-9 md:pb-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-center">
            <div>
              {/* el rótulo rehecho en tipografía: su logo dibujándose */}
              <div className="flex items-center gap-4 md:gap-5 mb-7 md:mb-9">
                <Monograma />
                <div>
                  <p
                    className="oc-sube text-[12px] md:text-[15px] font-extrabold uppercase tracking-[0.42em]"
                    style={{ color: C.marfil, '--oc-d': '0.95s' } as CSSProperties}
                  >
                    One Club
                  </p>
                  <div
                    className="oc-sube mt-1.5 flex items-center gap-2.5"
                    style={{ '--oc-d': '1.1s' } as CSSProperties}
                  >
                    <span className="h-px w-7" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em]" style={{ color: C.mutD }}>
                      Salón
                    </span>
                    <span className="h-px w-7" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                  </div>
                </div>
              </div>

              <p
                className="oc-sube flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] mb-5"
                style={{ color: C.oroClaro, '--oc-d': '0.15s' } as CSSProperties}
              >
                <LosaPoste />
                Barbería · Av. Ramón Picarte 1093
              </p>

              <h1
                className={`${display.className} oc-titulo leading-[1.04] text-[clamp(2.4rem,8.6vw,4.6rem)] mb-6`}
                style={{ color: C.marfil }}
              >
                Tu club de corte
                <br />
                en <span style={{ color: C.oro }}>Valdivia</span>.
              </h1>

              <p
                className="oc-sube text-[15px] md:text-lg leading-relaxed max-w-md mb-7"
                style={{ color: C.mutD, '--oc-d': '1.25s' } as CSSProperties}
              >
                Fade, textura, barba y estilismo con hora agendada,
                de lunes a domingo.
              </p>

              <div
                className="oc-sube flex flex-wrap items-center gap-3 mb-6"
                style={{ '--oc-d': '1.4s' } as CSSProperties}
              >
                <BtnWa tone="oro">
                  <WaIcon />
                  Agenda por WhatsApp
                </BtnWa>
                <BtnWa href="#book" tone="lineaD">
                  Ver el book
                </BtnWa>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="oc-sube inline-flex items-center gap-2.5 tap-44"
                style={{ '--oc-d': '1.55s' } as CSSProperties}
              >
                <Stars value={BIZ.ratingValue} color={C.oro} size={15} />
                <span className="text-sm font-bold" style={{ color: C.marfil }}>
                  {BIZ.rating}
                </span>
                <span className="text-sm" style={{ color: C.mutD }}>
                  · {BIZ.reviews} opiniones en Google
                </span>
              </a>
            </div>

            {/* la foto del salón aparece con un fundido, en su filete dorado */}
            <figure className="oc-foto relative lg:justify-self-end w-full lg:max-w-[440px]">
              <div className="p-[7px]" style={{ border: `1.5px solid ${C.oro}` }}>
                <div className="p-[5px]" style={{ border: `1px solid rgba(184,148,90,0.4)` }}>
                  <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.panel }}>
                    <Image
                      src={`${IMG}/interior.webp`}
                      alt="El salón de One Club: sillones negros, espejos con marco negro, el poste de barbero en la pared y lámparas doradas"
                      fill
                      priority
                      sizes="(min-width: 1024px) 420px, 92vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute left-0 bottom-0 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-2"
                      style={{ backgroundColor: 'rgba(11,11,12,0.88)', color: C.oroClaro }}
                    >
                      El salón · {BIZ.city}
                    </span>
                  </div>
                </div>
              </div>
              <figcaption className="sr-only">
                El interior del local, su nueva casa en Ramón Picarte.
              </figcaption>
            </figure>
          </div>
          <PosteBar />
        </section>

        {/* ── 2 · Servicios: la carta del club ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.marfil, color: C.club }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo>Servicios del club</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
                <h2 className={`${display.className} text-[clamp(1.9rem,6.4vw,3.4rem)] leading-[1.06]`}>
                  Corte, barba
                  <br />
                  y estilismo.
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.mutL }}>
                  Lo que la casa publica en sus redes, ordenado como carta.
                  Todo se agenda por WhatsApp o por mensaje de Instagram.
                </p>
              </div>
            </Reveal>
            <ol className="border-t" style={{ borderColor: C.lineL }}>
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.n} delay={i * 70}>
                  <li
                    className="oc-serv grid grid-cols-[auto_1fr] items-center gap-x-4 md:gap-x-7 py-5 md:py-7 px-2 md:px-4 border-b"
                    style={{ borderColor: C.lineL }}
                  >
                    <IconoServicio name={s.icon} />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className={`${display.className} text-2xl md:text-3xl leading-snug`}>
                          {s.name}
                        </h3>
                        <span
                          className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.24em] px-2 py-0.5 border"
                          style={{
                            color: s.tag === 'Nuevo' ? C.verde : C.oroInk,
                            borderColor: s.tag === 'Nuevo' ? 'rgba(31,58,46,0.4)' : C.lineOro,
                          }}
                        >
                          {s.tag}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] md:text-sm leading-relaxed max-w-lg" style={{ color: C.mutL }}>
                        {s.desc}
                      </p>
                    </div>
                    <span
                      className={`${display.className} hidden sm:block text-2xl md:text-4xl leading-none justify-self-end`}
                      style={{ color: 'rgba(124,92,36,0.4)' }}
                      aria-hidden="true"
                    >
                      {s.n}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <BtnWa tone="club">
                  <WaIcon />
                  Agenda por WhatsApp
                </BtnWa>
                <p className="text-xs" style={{ color: C.mutL }}>
                  Los valores se confirman al agendar.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <PosteBar />

        {/* ── 3 · El book: las hojas del trabajo ── */}
        <section id="book" className="scroll-mt-20" style={{ backgroundColor: C.club }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo light>El book · cortes del club</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
                <h2 className={`${display.className} text-[clamp(1.9rem,6.4vw,3.4rem)] leading-[1.06]`} style={{ color: C.marfil }}>
                  El trabajo
                  <br />
                  habla solo.
                </h2>
                <p className={`${display.className} italic text-base md:text-xl max-w-sm leading-snug`} style={{ color: C.oroClaro }}>
                  «Fade + textura para un resultado limpio y con estilo.»
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {BOOK.map((b) => (
                <figure key={b.src} className="min-w-0">
                  <div
                    className="oc-hoja relative aspect-[3/4] overflow-hidden"
                    style={{ border: `1px solid ${C.lineOro}`, backgroundColor: C.panel }}
                  >
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 23vw, 46vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute left-0 bottom-0 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1.5 max-w-full truncate"
                      style={{ backgroundColor: 'rgba(11,11,12,0.85)', color: C.marfil }}
                    >
                      {b.name}
                    </span>
                  </div>
                </figure>
              ))}
            </div>
            <Reveal delay={140}>
              <p className="mt-7 text-xs md:text-sm" style={{ color: C.mutD }}>
                Fotos reales del salón, de su propio Instagram{' '}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-1 tap-44"
                  style={{ color: C.marfil, textDecorationColor: C.oro }}
                >
                  {BIZ.igHandle}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · El local: la nueva casa ── */}
        <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.verde }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-center">
              <Reveal>
                <figure className="relative">
                  <div className="p-[6px]" style={{ border: `1.5px solid rgba(214,188,133,0.55)` }}>
                    <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden" style={{ backgroundColor: C.verdeBajo }}>
                      <Image
                        src={`${IMG}/fachada.webp`}
                        alt="La fachada de One Club en Av. Ramón Picarte 1093: ventanales con arco, el poste de barbero y el letrero ABIERTO encendido"
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 44vw, 92vw"
                        className="object-cover"
                      />
                      <span
                        className="absolute left-0 bottom-0 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-2"
                        style={{ backgroundColor: 'rgba(11,11,12,0.88)', color: C.oroClaro }}
                      >
                        {BIZ.address} · Abierto
                      </span>
                    </div>
                  </div>
                  <figcaption className="sr-only">
                    La fachada del local, con el poste de barbero junto a la puerta.
                  </figcaption>
                </figure>
              </Reveal>
              <div>
                <Reveal>
                  <Rotulo light>El local</Rotulo>
                  <h2 className={`${display.className} text-[clamp(1.9rem,6.4vw,3.4rem)] leading-[1.06] mb-6`} style={{ color: C.marfil }}>
                    Primera semana
                    <br />
                    en la nueva casa.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: 'rgba(239,233,223,0.82)' }}>
                    One Club acaba de estrenar local en {BIZ.address}, {BIZ.city}:
                    sillones negros, espejos, lámparas cálidas y el poste de
                    barbero en la puerta. La agenda ya corre de lunes a domingo.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      `${BIZ.rating} en Google, con ${BIZ.reviews} opiniones`,
                      'Agenda por WhatsApp o mensaje de Instagram',
                      'Abierto también los domingos',
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm md:text-[15px]" style={{ color: 'rgba(239,233,223,0.9)' }}>
                        <LosaPoste className="w-[14px] h-[9px]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <BtnWa tone="oro">
                    <WaIcon />
                    Agenda tu visita
                  </BtnWa>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Opinión: lo que dicen ── */}
        <section id="opinion" className="scroll-mt-20" style={{ backgroundColor: C.marfil, color: C.club }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Rotulo>Opiniones</Rotulo>
                <p className={`${display.className} leading-none text-[clamp(4rem,15vw,6.4rem)]`}>
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.oroInk} size={19} />
                </div>
                <p className="mt-3 text-sm" style={{ color: C.mutL }}>
                  {BIZ.reviews} opiniones en su ficha de Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                  style={{ color: C.club, textDecorationColor: C.oro }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-8">
                {REVIEWS.map((r) => (
                  <Reveal key={r.author}>
                    <figure className="border-l-2 pl-6 md:pl-8" style={{ borderColor: C.oro }}>
                      <blockquote className={`${display.className} text-[clamp(1.3rem,4.6vw,2rem)] leading-[1.3]`}>
                        “{r.text}”
                      </blockquote>
                      <figcaption className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutL }}>
                        {r.author} · {r.fuente}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
                <Reveal delay={120}>
                  <p className="text-sm leading-relaxed max-w-md" style={{ color: C.mutL }}>
                    La barbería recién abre sus puertas: sé de las primeras
                    opiniones en su ficha de Google.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Visita: horario y cómo llegar ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.marfilBajo, color: C.club }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-stretch">
              <div>
                <Reveal>
                  <Rotulo>Horario y cómo llegar</Rotulo>
                  <h2 className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] mb-6`}>
                    {BIZ.address},
                    <br />
                    {BIZ.city}.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 mb-7 text-sm md:text-[15px]">
                    {HORARIO.map((h) => (
                      <div key={h.d} className="contents">
                        <dt className="font-bold" style={{ color: C.oroInk }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: C.club }}>{h.h}</dd>
                      </div>
                    ))}
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.oroInk }}>
                        WhatsApp
                      </dt>
                      <dd>
                        <a
                          href={`tel:${BIZ.phoneTel}`}
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.club, textDecorationColor: C.oro }}
                        >
                          {BIZ.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.oroInk }}>
                        Instagram
                      </dt>
                      <dd>
                        <a
                          href={BIZ.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.club, textDecorationColor: C.oro }}
                        >
                          {BIZ.igHandle}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </Reveal>
                <Reveal delay={160}>
                  <div className="flex flex-wrap gap-3">
                    <BtnWa tone="club">
                      <WaIcon />
                      Agenda por WhatsApp
                    </BtnWa>
                    <BtnWa href={MAPS_URL} tone="linea">
                      Cómo llegar →
                    </BtnWa>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={140} className="flex-1">
                <div
                  className="overflow-hidden h-full min-h-[300px] md:min-h-[380px] p-[6px]"
                  style={{ border: `1.5px solid ${C.club}`, backgroundColor: C.marfil }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[288px] md:min-h-[368px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 7 · Cierre ── */}
        <PosteBar />
        <section className="relative overflow-hidden" style={{ backgroundColor: C.club }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(620px 400px at 50% 118%, rgba(184,148,90,0.18), transparent 62%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <svg
                viewBox="0 0 128 92"
                className={`${display.className} w-[64px] h-auto mx-auto mb-7`}
                aria-hidden="true"
              >
                <text x="12" y="72" fontSize="84" fill={C.oro}>1</text>
                <text x="60" y="72" fontSize="84" fill={C.marfil}>C</text>
              </svg>
              <h2 className={`${display.className} leading-[1.08] text-[clamp(1.9rem,6.4vw,3.4rem)] mb-5`} style={{ color: C.marfil }}>
                Agenda tu hora
                <br />
                en el club.
              </h2>
              <p className="mx-auto max-w-md text-sm md:text-base leading-relaxed mb-8" style={{ color: C.mutD }}>
                Un mensaje por WhatsApp y quedas con hora. De lunes a
                domingo, en {BIZ.address}, {BIZ.city}.
              </p>
              <BtnWa tone="oro">
                <WaIcon />
                Agenda por WhatsApp
              </BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.club, color: C.marfil }}>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <Image
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name}`}
                width={411}
                height={270}
                className="w-[112px] h-auto shrink-0"
              />
              <div className="text-xs leading-relaxed" style={{ color: C.mutD }}>
                <p className="font-bold text-sm mb-0.5" style={{ color: C.marfil }}>
                  {BIZ.name}
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
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.oroClaro }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opinión y horarios son reales y
              públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.oroClaro }}>
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
