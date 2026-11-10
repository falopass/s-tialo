import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Anton para el rotulado de competencia, Archivo para el texto.
const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900' }],
})

// De la decoración de sus autos de rally: el naranja SERVIMEC, el azul
// del livery, la noche del galpón, el gris de la pista y el blanco.
const C = {
  naranja: '#FF5A1F',
  naranjaInk: '#C2410C', // pasa 4.5:1 sobre papel
  azul: '#1D4ED8',
  azulLuz: '#8FB3F5', // pasa 4.5:1 sobre noche
  noche: '#0B1530',
  nocheBaja: '#060C1E',
  pista: '#2A2F36',
  papel: '#F2F4F8',
  tinta: '#0B1530',
  mutD: 'rgba(255,255,255,0.72)',
  mutD2: 'rgba(255,255,255,0.55)',
  mutAzul: 'rgba(255,255,255,0.86)', // pasa 4.5:1 sobre azul
  mutL: 'rgba(11,21,48,0.70)',
  lineD: 'rgba(255,255,255,0.15)',
  lineAzul: 'rgba(255,255,255,0.28)',
  lineL: 'rgba(11,21,48,0.15)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'taller-servimec-puerto-varas',
  title: 'Taller SERVIMEC · Mecánica con ritmo de competencia en Puerto Varas',
  description:
    'Taller mecánico en Los Apeninos, Puerto Varas. El mismo taller que prepara autos de rally atiende tu auto de todos los días. Agenda por WhatsApp.',
  image: '/demos/taller-servimec-puerto-varas/rally-frente.webp',
})

const NAV_LINKS = [
  { label: 'Motorsport', href: '#motorsport' },
  { label: 'El taller', href: '#taller' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/* ── Iconos del oficio, trazo único ── */
function Ic({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    wa: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
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
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 8l-6.9 6.9a2.12 2.12 0 0 1-3-3l6.9-6.9a6 6 0 0 1 8-8l-3.8 3.8z" />
    ),
    bandera: (
      <>
        <path d="M5 21V4" />
        <path d="M5 4h13l-3 4.5L18 13H5" />
      </>
    ),
    flecha: <path d="M4 12h15M13 6l6 6-6 6" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Rótulo de sección tipo placa de etapa: chip en diagonal + línea. */
function Rotulo({ n, t, dark = true, azul = false }: { n: string; t: string; dark?: boolean; azul?: boolean }) {
  const line = dark ? (azul ? C.lineAzul : C.lineD) : C.lineL
  return (
    <p className="flex items-center gap-3 mb-5 md:mb-7">
      <span
        className="inline-flex items-center px-2.5 py-1 -skew-x-12 shrink-0"
        style={{ backgroundColor: C.naranja }}
        aria-hidden="true"
      >
        <span className={`${display.className} inline-block skew-x-12 text-sm leading-none tracking-[0.06em]`} style={{ color: C.noche }}>
          {n}
        </span>
      </span>
      <span
        className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.26em] whitespace-nowrap"
        style={{ color: dark ? '#FFFFFF' : C.tinta }}
      >
        Etapa {n} · {t}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: line }} aria-hidden="true" />
    </p>
  )
}

/** Las franjas diagonales del livery: divisor entre secciones que se
 *  dibuja al hacer scroll (clip-path). */
function Franjas({ sobre }: { sobre: string }) {
  return (
    <div
      aria-hidden="true"
      className="sv-divisor h-[13px] md:h-4 w-full"
      style={{
        backgroundColor: sobre,
        backgroundImage: `repeating-linear-gradient(-56deg, ${C.naranja} 0 30px, ${C.azul} 30px 60px, #FFFFFF 60px 70px, transparent 70px 104px)`,
      }}
    />
  )
}

/** Botón con corte de velocidad: paralelogramo con el texto derecho. */
function Btn({
  href,
  children,
  tone,
  external = true,
  icon,
  className = '',
}: {
  href: string
  children: React.ReactNode
  tone: 'naranja' | 'lineD' | 'lineL' | 'noche' | 'azul'
  external?: boolean
  icon?: string
  className?: string
}) {
  const st: CSSProperties =
    tone === 'naranja'
      ? { backgroundColor: C.naranja, color: C.noche }
      : tone === 'noche'
        ? { backgroundColor: C.noche, color: '#FFFFFF' }
        : tone === 'azul'
          ? { backgroundColor: C.azul, color: '#FFFFFF' }
          : tone === 'lineD'
            ? { border: '1.5px solid rgba(255,255,255,0.5)', color: '#FFFFFF' }
            : { border: '1.5px solid rgba(11,21,48,0.45)', color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`sv-btn inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide tap-44 ${className}`}
      style={st}
    >
      <span className="sv-btn-in inline-flex items-center justify-center gap-2.5">
        {icon && <Ic name={icon} className="w-[17px] h-[17px]" />}
        {children}
      </span>
    </a>
  )
}

/** Placa de foto: epígrafe con borde de velocidad. */
function Placa({ children, dark = true, className = '' }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] ${className}`}
      style={{
        backgroundColor: dark ? 'rgba(6,12,30,0.88)' : 'rgba(242,244,248,0.94)',
        color: dark ? '#FFFFFF' : C.tinta,
        borderLeft: `3px solid ${C.naranja}`,
      }}
    >
      {children}
    </span>
  )
}

const PASOS = [
  {
    n: '01',
    t: 'Escríbenos por WhatsApp',
    d: 'Cuéntanos qué le pasa a tu auto y coordinamos tu hora en el taller.',
  },
  {
    n: '02',
    t: 'Revisamos tu auto',
    d: 'Entra al galpón de Los Apeninos y lo miramos a fondo, con el mismo detalle de los autos de carrera.',
  },
  {
    n: '03',
    t: 'Te lo entregamos',
    d: 'Te avisamos cuando está listo y te vas sabiendo qué se hizo y por qué.',
  },
] as const

const SERVICIOS = [
  {
    n: 'A',
    t: 'Mecánica automotriz',
    d: 'Tu auto de todos los días entra al mismo taller que prepara los de carrera: se revisa con el mismo detalle.',
  },
  {
    n: 'B',
    t: 'Preparación de autos de competencia',
    d: 'Los autos de rally de SERVIMEC Motorsport se preparan en este mismo galpón y se asisten en competencia.',
  },
] as const

export default function ServimecPage() {
  return (
    <div
      className={`${body.className} sv-page min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.noche, color: '#FFFFFF' }}
    >
      <style>{`
        html { scroll-behavior: auto }

        /* ── Semáforo de largada ──
           Tres luces rojas se encienden una tras otra (~0,25 s entre
           cada una), se apagan todas a la vez y se enciende el verde:
           ahí larga la foto del auto. */
        @keyframes sv-on {
          to { opacity: 1; background-color: #FF2B2B; box-shadow: 0 0 14px rgba(255,43,43,0.85) }
        }
        .sv-roja { opacity: 0.22; background-color: #3A4558; animation: sv-on 0.01s linear both; animation-delay: var(--d, 0s) }
        .sv-rojas { animation: sv-out 0.1s linear 0.92s both }
        @keyframes sv-out { to { opacity: 0.28 } }
        @keyframes sv-verde {
          to { opacity: 1; background-color: #2BD97C; box-shadow: 0 0 16px rgba(43,217,124,0.9) }
        }
        .sv-verde { opacity: 0.22; background-color: #3A4558; animation: sv-verde 0.12s linear 1.02s both }

        /* La foto larga: entra rápido desde la derecha con un leve
           skew que se endereza, como el auto saliendo del semáforo. */
        @keyframes sv-largada {
          from { transform: translateX(48vw) skewX(-7deg); opacity: 0 }
          35% { opacity: 1 }
          to { transform: translateX(0) skewX(0); opacity: 1 }
        }
        .sv-auto { animation: sv-largada 0.7s cubic-bezier(0.16,0.75,0.25,1) 1.06s both }

        /* Las tres franjas del livery cruzan la pantalla detrás del
           titular, una tras otra, y quedan como motivo del hero. */
        .sv-franja { position: absolute; left: -30%; width: 165%; border-radius: 2px; transform: translateX(-135%) rotate(-13deg); animation: sv-franja 0.75s cubic-bezier(0.2,0.72,0.22,1) both }
        @keyframes sv-franja { to { transform: translateX(0) rotate(-13deg) } }
        .sv-f1 { top: 16% } .sv-f2 { top: 21% } .sv-f3 { top: 25.5% }
        @media (min-width: 1024px) {
          .sv-f1 { top: 15% } .sv-f2 { top: 19% } .sv-f3 { top: 33% }
        }

        /* El titular y el resto aparecen con la luz verde. */
        @keyframes sv-up { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: none } }
        .sv-up { animation: sv-up 0.7s cubic-bezier(0.22,0.8,0.3,1) both; animation-delay: var(--d, 0s) }

        @keyframes sv-linea { from { transform: translateY(110%) } to { transform: translateY(0) } }
        .sv-linea { display: inline-block; animation: sv-linea 0.6s cubic-bezier(0.2,0.75,0.25,1) both; animation-delay: var(--d, 0s) }

        /* Al hacer scroll: los divisores se dibujan y los dorsales
           giran a su lugar (progresivo: donde no hay soporte, todo
           queda quieto y visible). */
        @supports (animation-timeline: view()) {
          .sv-divisor { clip-path: inset(0 100% 0 0); animation: sv-draw linear both; animation-timeline: view(); animation-range: entry 0% entry 55% }
          @keyframes sv-draw { to { clip-path: inset(0 0 0 0) } }
          .sv-dorsal { animation: sv-dorsal linear both; animation-timeline: view(); animation-range: entry 8% entry 78% }
          @keyframes sv-dorsal {
            from { transform: skewX(-12deg) rotate(-24deg) scale(0.7) }
            to { transform: skewX(-12deg) rotate(0deg) scale(1) }
          }
        }

        .sv-btn { transform: skewX(-8deg); transition: transform .18s ease, filter .18s ease }
        .sv-btn-in { transform: skewX(8deg) }
        .sv-btn:hover { transform: skewX(-8deg) translateY(-2px); filter: brightness(1.07) }
        .sv-btn:active { transform: skewX(-8deg) scale(0.97) }
        .sv-page a:focus-visible { outline: 3px solid ${C.naranja}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .sv-roja, .sv-verde, .sv-rojas, .sv-auto, .sv-franja, .sv-up, .sv-linea, .sv-divisor, .sv-dorsal { animation: none !important }
          .sv-roja { opacity: 0.22 }
          .sv-verde { opacity: 1; background-color: #2BD97C; box-shadow: 0 0 16px rgba(43,217,124,0.9) }
          .sv-auto, .sv-franja { opacity: 1 !important }
          .sv-franja { transform: rotate(-13deg) !important }
          .sv-auto { transform: none !important }
          .sv-divisor { clip-path: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-5 -skew-x-12 shrink-0" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
            <span className={`${display.className} tracking-[0.05em] truncate`}>{BIZ.short}</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(11,21,48,0.94)',
          ink: '#FFFFFF',
          line: C.lineD,
          btnBg: C.naranja,
          btnInk: C.noche,
        }}
      />

      {/* ── 1 · Hero: la largada ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
        {/* luz de galpón */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(720px 460px at 82% 4%, rgba(29,78,216,0.34), transparent 62%), radial-gradient(520px 380px at -5% 96%, rgba(255,90,31,0.10), transparent 60%)',
          }}
        />
        {/* las franjas del livery cruzan detrás del titular */}
        <span className="sv-franja sv-f1" style={{ height: 24, backgroundColor: C.azul, animationDelay: '1.18s' }} aria-hidden="true" />
        <span className="sv-franja sv-f2" style={{ height: 8, backgroundColor: C.naranja, animationDelay: '1.3s' }} aria-hidden="true" />
        <span className="sv-franja sv-f3" style={{ height: 7, backgroundColor: '#FFFFFF', animationDelay: '1.42s' }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[96px] md:pt-[136px] pb-10 md:pb-16 grid lg:grid-cols-[1.06fr_0.94fr] gap-9 lg:gap-12 items-center">
          <div>
            {/* semáforo + rótulo */}
            <div className="sv-up flex flex-wrap items-center gap-x-4 gap-y-2.5 mb-6" style={{ '--d': '0.08s' } as CSSProperties}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 -skew-x-12"
                style={{ backgroundColor: 'rgba(6,12,30,0.9)', border: `1px solid ${C.lineD}` }}
                role="img"
                aria-label="Semáforo de largada en verde"
              >
                <span className="sv-rojas inline-flex items-center gap-2">
                  <span className="sv-roja block w-3 h-3 rounded-full" style={{ '--d': '0.15s' } as CSSProperties} />
                  <span className="sv-roja block w-3 h-3 rounded-full" style={{ '--d': '0.4s' } as CSSProperties} />
                  <span className="sv-roja block w-3 h-3 rounded-full" style={{ '--d': '0.65s' } as CSSProperties} />
                </span>
                <span className="sv-verde block w-3 h-3 rounded-full" />
              </span>
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.26em]" style={{ color: C.naranja }}>
                Puerto Varas · Los Apeninos
              </p>
            </div>

            <h1
              className={`${display.className} uppercase leading-[0.94] tracking-[0.01em] text-[clamp(2.85rem,12.2vw,5.6rem)]`}
              style={{ color: '#FFFFFF' }}
            >
              <span className="block overflow-hidden pb-[0.05em] -mb-[0.05em]">
                <span className="sv-linea" style={{ '--d': '1.12s' } as CSSProperties}>
                  Mecánica
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.05em] -mb-[0.05em]">
                <span className="sv-linea" style={{ '--d': '1.22s' } as CSSProperties}>
                  con ritmo
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="sv-linea" style={{ '--d': '1.32s', color: C.naranja } as CSSProperties}>
                  de competencia.
                </span>
              </span>
            </h1>

            <p
              className="sv-up mt-5 max-w-md text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutD, '--d': '1.5s' } as CSSProperties}
            >
              El taller que prepara autos de rally también cuida tu auto
              de todos los días.
            </p>

            <div className="sv-up mt-7 flex flex-wrap items-center gap-3.5" style={{ '--d': '1.62s' } as CSSProperties}>
              <Btn href={WA_LINK} tone="naranja" icon="wa">
                Agenda por WhatsApp
              </Btn>
              <a
                href="#taller"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 inline-flex items-center"
                style={{ color: '#FFFFFF', textDecorationColor: 'rgba(255,90,31,0.55)' }}
              >
                Ver el taller
              </a>
            </div>
          </div>

          {/* la foto larga cuando el semáforo da el verde */}
          <figure className="sv-auto relative max-w-[330px] mx-auto w-full lg:max-w-none">
            {/* franjas del costado, como en la decoración del auto */}
            <span className="absolute -left-3 top-8 bottom-8 w-2 -skew-x-12" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
            <span className="absolute -left-[22px] top-14 bottom-14 w-2 -skew-x-12" style={{ backgroundColor: C.azul }} aria-hidden="true" />
            <div className="relative overflow-hidden" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}>
              <Image
                src={`${IMG}/rally-frente.webp`}
                alt="El auto de rally de SERVIMEC Motorsport de frente, en el parque de asistencia de una competencia"
                width={900}
                height={1200}
                priority
                sizes="(min-width: 1024px) 42vw, 85vw"
                className="block w-full h-auto object-cover"
              />
            </div>
            <Placa className="absolute bottom-4 left-5">
              {BIZ.sport} · Parque de asistencia
            </Placa>
          </figure>
        </div>

        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineD, backgroundColor: 'rgba(6,12,30,0.72)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: C.mutD }}>
            <span className="flex items-center gap-2.5">
              <Ic name="reloj" className="w-3.5 h-3.5" />
              Lun a vie · 8:30 a 13:30 y 14:30 a 18:30
            </span>
            <span className="flex items-center gap-2.5">
              <Ic name="pin" className="w-3.5 h-3.5" />
              Los Apeninos, Puerto Varas
            </span>
          </div>
        </div>
      </section>

      {/* ── 2 · Motorsport: la otra cara del taller ── */}
      <section id="motorsport" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.azul }}>
        <Franjas sobre={C.noche} />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(640px 380px at 88% 12%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(700px 420px at 0% 105%, rgba(11,21,48,0.5), transparent 62%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <Rotulo n="01" t="Motorsport" azul />
              <h2
                className={`${display.className} uppercase leading-[0.94] tracking-[0.01em] text-[clamp(2.5rem,9.6vw,5rem)]`}
                style={{ color: '#FFFFFF' }}
              >
                {BIZ.short}
                <br />
                <span style={{ color: C.naranja }}>Motorsport</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutAzul }}>
                Cuando hay fecha de carrera, los autos del taller salen a
                competencia con la decoración naranja, azul y blanca que
                lleva su nombre.
              </p>
              <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutAzul }}>
                Esos autos se preparan aquí, en el galpón de Los
                Apeninos. El mismo equipo que los deja listos para la
                carrera revisa tu auto de todos los días.
              </p>
              <div className="mt-7">
                <Btn href={WA_LINK} tone="noche" icon="wa">
                  Agenda tu revisión
                </Btn>
              </div>
            </Reveal>
          </div>

          {/* composición en diagonal: el auto, el carro y la decoración */}
          <div className="relative pb-12 lg:pb-16">
            <Reveal>
              <figure className="relative w-[84%] rotate-[-1.5deg]">
                <div className="relative overflow-hidden" style={{ clipPath: 'polygon(3.5% 0, 100% 0, 96.5% 100%, 0 100%)' }}>
                  <Image
                    src={`${IMG}/rally-lateral.webp`}
                    alt="El auto de rally de costado, con la marca SERVIMEC grande en la decoración"
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 44vw, 84vw"
                    className="block w-full h-auto object-cover"
                  />
                </div>
                <Placa className="absolute -bottom-3 left-4">El de carrera</Placa>
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <figure className="absolute right-0 -bottom-10 lg:-bottom-14 w-[52%] rotate-[2.5deg]">
                <div
                  className="relative overflow-hidden"
                  style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)', boxShadow: '0 22px 50px rgba(6,12,30,0.45)' }}
                >
                  <Image
                    src={`${IMG}/rally-carro.webp`}
                    alt="El auto de rally sobre el carro de arrastre, frente al galpón del taller"
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="block w-full h-auto object-cover"
                  />
                </div>
                <Placa className="absolute -bottom-3 right-3">De vuelta al taller</Placa>
              </figure>
            </Reveal>
            <Reveal delay={220}>
              <figure
                className="absolute top-[-4%] right-[3%] w-[17%] rotate-[4deg] overflow-hidden"
                style={{ clipPath: 'polygon(9% 0, 100% 0, 91% 100%, 0 100%)', boxShadow: '0 16px 36px rgba(6,12,30,0.4)' }}
              >
                <Image
                  src={`${IMG}/livery.webp`}
                  alt="Detalle de la decoración naranja, azul y blanca de SERVIMEC Motorsport"
                  width={675}
                  height={1200}
                  sizes="(min-width: 1024px) 8vw, 16vw"
                  className="block w-full h-auto object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 · En el taller ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
        <Franjas sobre={C.azul} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-start">
            <div>
              <Reveal>
                <Rotulo n="02" t="El taller" dark={false} />
                <h2
                  className={`${display.className} uppercase leading-[0.96] tracking-[0.01em] text-[clamp(2.2rem,8vw,4.2rem)]`}
                  style={{ color: C.tinta }}
                >
                  El mismo galpón,
                  <br />
                  <span style={{ color: C.azul }}>dos trabajos.</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutL }}>
                  Galpón propio con foso y elevador. Lo que se ve en sus
                  fotos es lo que pasa aquí cada día.
                </p>
              </Reveal>

              <div className="mt-8 border-t" style={{ borderColor: C.lineL }}>
                {SERVICIOS.map((s, i) => (
                  <Reveal key={s.n} delay={i * 90}>
                    <div className="flex gap-4 md:gap-5 border-b py-5 md:py-6" style={{ borderColor: C.lineL }}>
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 shrink-0 -skew-x-12 mt-0.5"
                        style={{ backgroundColor: i === 0 ? C.naranja : C.azul }}
                        aria-hidden="true"
                      >
                        <span className="inline-block skew-x-12" style={{ color: i === 0 ? C.noche : '#FFFFFF' }}>
                          <Ic name={i === 0 ? 'wrench' : 'bandera'} className="w-[18px] h-[18px]" />
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className={`${display.className} block uppercase tracking-[0.02em] text-lg md:text-xl leading-tight`} style={{ color: C.tinta }}>
                          {s.t}
                        </span>
                        <span className="block mt-1.5 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.mutL }}>
                          {s.d}
                        </span>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* collage del trabajo real */}
            <div className="grid grid-cols-12 gap-3.5 md:gap-5 items-start">
              <Reveal className="col-span-12">
                <figure className="relative">
                  <div className="relative overflow-hidden" style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0 100%)' }}>
                    <Image
                      src={`${IMG}/taller-interior.webp`}
                      alt="El interior del taller: el galpón con autos en reparación"
                      width={1200}
                      height={900}
                      sizes="(min-width: 1024px) 52vw, 92vw"
                      className="block w-full h-auto object-cover"
                    />
                  </div>
                  <Placa className="absolute bottom-3 left-4">El galpón por dentro</Placa>
                </figure>
              </Reveal>
              <Reveal delay={110} className="col-span-6">
                <figure className="relative">
                  <div className="relative overflow-hidden" style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' }}>
                    <Image
                      src={`${IMG}/elevador.webp`}
                      alt="Un auto en el elevador del taller con la caja de cambios a la vista"
                      width={900}
                      height={1200}
                      sizes="(min-width: 1024px) 26vw, 45vw"
                      className="block w-full h-auto object-cover"
                    />
                  </div>
                  <Placa className="absolute bottom-3 left-3">Caja a la vista</Placa>
                </figure>
              </Reveal>
              <Reveal delay={200} className="col-span-6">
                <figure className="relative mt-6 md:mt-9">
                  <div className="relative overflow-hidden" style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' }}>
                    <Image
                      src={`${IMG}/taller-rally.webp`}
                      alt="El auto de rally en reparación dentro del taller"
                      width={674}
                      height={1200}
                      sizes="(min-width: 1024px) 26vw, 45vw"
                      className="block w-full h-auto object-cover"
                    />
                  </div>
                  <Placa className="absolute bottom-3 left-3">El de carrera, en el box</Placa>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · Cómo trabajamos: las tres etapas ── */}
      <section id="pasos" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <Franjas sobre={C.papel} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-9 lg:gap-16 items-start">
            <Reveal>
              <Rotulo n="03" t="Tu auto en el box" />
              <h2
                className={`${display.className} uppercase leading-[0.96] tracking-[0.01em] text-[clamp(2.2rem,8vw,4.2rem)]`}
                style={{ color: '#FFFFFF' }}
              >
                Tu revisión,
                <br />
                <span style={{ color: C.naranja }}>en tres etapas.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] md:text-base leading-relaxed" style={{ color: C.mutD }}>
                Sin vueltas: así entra y así sale un auto del taller.
              </p>
              <div className="mt-7">
                <Btn href={WA_LINK} tone="naranja" icon="wa">
                  Empezar por WhatsApp
                </Btn>
              </div>
            </Reveal>

            <ol className="border-t" style={{ borderColor: C.lineD }}>
              {PASOS.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <li className="flex gap-5 md:gap-7 border-b py-6 md:py-7 last:border-b-0 items-start" style={{ borderColor: C.lineD }}>
                    {/* dorsal tipo número de rally */}
                    <span
                      className="sv-dorsal relative inline-flex items-center justify-center w-[74px] h-[74px] md:w-[86px] md:h-[86px] shrink-0 -skew-x-12"
                      style={{ backgroundColor: '#FFFFFF', transformOrigin: '50% 60%' }}
                      aria-hidden="true"
                    >
                      <span className="absolute top-0 right-0 h-2 w-7" style={{ backgroundColor: C.naranja }} />
                      <span className="absolute bottom-0 left-0 h-2 w-7" style={{ backgroundColor: C.azul }} />
                      <span className={`${display.className} inline-block skew-x-12 text-[2rem] md:text-[2.4rem] leading-none`} style={{ color: C.noche }}>
                        {p.n}
                      </span>
                    </span>
                    <span className="min-w-0 pt-1">
                      <span className={`${display.className} block uppercase tracking-[0.02em] text-xl md:text-2xl leading-tight`} style={{ color: '#FFFFFF' }}>
                        {p.t}
                      </span>
                      <span className="block mt-2 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                        {p.d}
                      </span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 5 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
        <Franjas sobre={C.noche} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo n="04" t="Opiniones" dark={false} />
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-9 lg:gap-16 items-start">
              <div>
                <h2
                  className={`${display.className} uppercase leading-[0.96] tracking-[0.01em] text-[clamp(2.2rem,8vw,4rem)]`}
                  style={{ color: C.tinta }}
                >
                  La palabra de
                  <br />
                  <span style={{ color: C.azul }}>sus clientes.</span>
                </h2>
                <p className="mt-5 max-w-sm text-[15px] md:text-base leading-relaxed" style={{ color: C.mutL }}>
                  Citas textuales de la ficha pública de Google del
                  taller: lo que escriben quienes ya llevaron su auto.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] font-bold uppercase tracking-[0.2em] underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.azul, textDecorationColor: 'rgba(29,78,216,0.4)' }}
                >
                  Ver la ficha en Google
                  <Ic name="flecha" className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <Reveal>
                  <blockquote
                    className="relative pl-5 md:pl-7"
                    style={{ borderLeft: `5px solid ${C.naranja}` }}
                  >
                    <p className={`${display.className} uppercase leading-[1.06] tracking-[0.01em] text-[clamp(1.45rem,5.4vw,2.5rem)]`} style={{ color: C.tinta }}>
                      «{REVIEWS[2].text}»
                    </p>
                    <footer className="mt-4 flex items-center gap-3">
                      <Placa dark={false}>{REVIEWS[2].author} · Google</Placa>
                    </footer>
                  </blockquote>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-7 mt-10">
                  {[REVIEWS[0], REVIEWS[1]].map((r, i) => (
                    <Reveal key={r.author} delay={110 + i * 90}>
                      <blockquote className="border-t-[3px] pt-5" style={{ borderColor: C.azul }}>
                        <p className="text-[15px] md:text-base leading-relaxed" style={{ color: C.tinta }}>
                          «{r.text}»
                        </p>
                        <footer className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutL }}>
                          {r.author} · Google
                        </footer>
                      </blockquote>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Horario y cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <Franjas sobre={C.papel} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <Reveal>
              <Rotulo n="05" t="Cómo llegar" />
              <h2
                className={`${display.className} uppercase leading-[0.96] tracking-[0.01em] text-[clamp(2.2rem,8vw,4.2rem)]`}
                style={{ color: '#FFFFFF' }}
              >
                Los Apeninos,
                <br />
                <span style={{ color: C.naranja }}>Puerto Varas.</span>
              </h2>
              <dl className="mt-8 border-t" style={{ borderColor: C.lineD }}>
                <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineD }}>
                  <span className="mt-0.5 shrink-0" style={{ color: C.naranja }}>
                    <Ic name="pin" className="w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.azulLuz }}>
                      Dirección
                    </dt>
                    <dd className="mt-1 text-sm md:text-base" style={{ color: '#FFFFFF' }}>
                      {BIZ.address}, {BIZ.city}, {BIZ.region}
                    </dd>
                    <dd className="mt-0.5 text-xs md:text-sm" style={{ color: C.mutD2 }}>
                      Es el galpón con el letrero SERVIMEC.
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineD }}>
                  <span className="mt-0.5 shrink-0" style={{ color: C.naranja }}>
                    <Ic name="reloj" className="w-[18px] h-[18px]" />
                  </span>
                  <div className="flex-1">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.azulLuz }}>
                      Horario
                    </dt>
                    <dd className="mt-1.5 text-sm md:text-base">
                      {HORARIO.map((h) => (
                        <span key={h.dias} className="flex justify-between gap-6 max-w-[360px] py-0.5">
                          <span style={{ color: '#FFFFFF' }}>{h.dias}</span>
                          <span style={{ color: h.horas === 'Cerrado' ? C.mutD2 : '#FFFFFF' }}>{h.horas}</span>
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineD }}>
                  <span className="mt-0.5 shrink-0" style={{ color: C.naranja }}>
                    <Ic name="fono" className="w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.azulLuz }}>
                      WhatsApp
                    </dt>
                    <dd className="mt-1 text-sm md:text-base">
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4 decoration-2" style={{ color: '#FFFFFF', textDecorationColor: 'rgba(255,90,31,0.55)' }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="naranja" icon="wa">
                  Agenda por WhatsApp
                </Btn>
                <Btn href={MAPS_URL} tone="lineD" icon="pin">
                  Cómo llegar
                </Btn>
              </div>
            </Reveal>

            <div>
              <Reveal delay={110}>
                <figure className="relative">
                  <div className="relative overflow-hidden" style={{ clipPath: 'polygon(2.5% 0, 100% 0, 97.5% 100%, 0 100%)' }}>
                    <Image
                      src={`${IMG}/taller-fachada.webp`}
                      alt="El galpón del taller con el letrero SERVIMEC, en Los Apeninos"
                      width={1200}
                      height={900}
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      className="block w-full h-auto object-cover"
                    />
                  </div>
                  <Placa className="absolute bottom-3 left-4">Así se ve por fuera</Placa>
                </figure>
              </Reveal>
              <Reveal delay={190}>
                <div className="mt-5 overflow-hidden" style={{ border: `1.5px solid ${C.lineD}` }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="h-[250px] md:h-[300px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · Cierre: la última etapa ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.naranja }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-56deg, rgba(11,21,48,0.10) 0 30px, transparent 30px 76px)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5" style={{ color: C.noche }}>
              Última etapa · la tuya
            </p>
            <h2
              className={`${display.className} uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.4rem,9.4vw,4.8rem)]`}
              style={{ color: C.noche }}
            >
              El próximo auto
              <br />
              en el elevador
              <br />
              puede ser el tuyo.
            </h2>
            <div className="mt-8 flex justify-center">
              <Btn href={WA_LINK} tone="noche" icon="wa">
                Agenda por WhatsApp
              </Btn>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.noche, textDecorationColor: 'rgba(11,21,48,0.4)' }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.nocheBaja, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-2 h-5 -skew-x-12 shrink-0" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
              <div>
                <p className={`${display.className} uppercase tracking-[0.05em] text-lg leading-tight`}>
                  {BIZ.short}
                </p>
                <p className="text-xs" style={{ color: C.mutD2 }}>
                  {BIZ.rubro} · {BIZ.city}
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
            <p className="text-xs leading-relaxed" style={{ color: C.mutD2 }}>
              {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}. Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.mapsName}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.naranja }}>
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
