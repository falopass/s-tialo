import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

/**
 * Dirección de arte: «Tu cumpleaños, llueva o haga sol». El paisaje del
 * logo (cielo, sol naranja, montañas nevadas, pradera y las tres
 * bandurrias café) ordena la página: las montañas marcan los bordes
 * superiores de sección, el sol sale detrás de ellas al abrir y las
 * bandurrias llegan caminando al hero. Los faroles de colores de la
 * foto del salón reaparecen colgando en la sección de juegos.
 * Baloo 2 hace de rótulo redondo de fiesta; Nunito es la voz clara.
 * Tonos "T" = versión oscura del color para texto chico (≥4.5:1).
 */
const C = {
  nieve: '#FFFDF7',
  cielo: '#E9F4FB',
  pradera: '#EFF7E4',
  cafe: '#6B4A2E',
  cafeMut: 'rgba(107,74,46,0.82)',
  cafeLine: 'rgba(107,74,46,0.16)',
  verde: '#5DB236',
  verdeT: '#35701C',
  verdeM: '#7CC654',
  azul: '#1E88C8',
  azulT: '#156A9C',
  azulPico: '#A8CFE2',
  sol: '#F4A21C',
  solT: '#A85E0F',
  solSuave: '#FDF3E0',
  noche: '#0F3A57',
  nocheMut: 'rgba(255,253,247,0.74)',
  nocheLine: 'rgba(255,253,247,0.22)',
  nieveMut: 'rgba(255,253,247,0.72)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'centro-de-eventos-las-bandurrias',
  title: 'Las Bandurrias · Centro de eventos infantiles en Puerto Varas',
  description:
    'Cumpleaños infantiles en Colonia Alerce, km 7, Puerto Varas. Salón cerrado y calefaccionado, juegos, parrilla y amplio estacionamiento. Consulta disponibilidad por WhatsApp.',
  image: `${IMG}/salon-decorado.webp`,
})

const NAV_LINKS = [
  { label: 'El lugar', href: '#clima' },
  { label: 'Juegos', href: '#juegos' },
  { label: 'Para los grandes', href: '#grandes' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const JUEGOS = [
  {
    src: `${IMG}/inflable.webp`,
    alt: 'Inflable con tobogán verde, azul y amarillo armado dentro del salón de Las Bandurrias',
    name: 'Inflable con tobogán',
  },
  {
    src: `${IMG}/maquinas-peluches.webp`,
    alt: 'Máquinas de peluches con grúa dentro del centro de eventos',
    name: 'Máquinas de peluches',
  },
] as const

const GRANDES = [
  {
    icon: 'sofa',
    color: C.azul,
    tint: 'rgba(30,136,200,0.12)',
    name: 'Sala de estar',
    desc: 'Sillones, estufa y TV para conversar tranquilos mientras ellos juegan.',
  },
  {
    icon: 'parrilla',
    color: C.solT,
    tint: 'rgba(244,162,28,0.16)',
    name: 'Parrilla adentro y afuera',
    desc: 'Para el asado de los grandes, llueva o haga sol.',
  },
  {
    icon: 'estacionamiento',
    color: C.verdeT,
    tint: 'rgba(93,178,54,0.14)',
    name: 'Estacionamiento amplio',
    desc: 'Propio, junto al salón: llegar y estacionar es lo fácil.',
  },
] as const

const QUOTES = [
  {
    name: 'Elizabeth V.',
    color: C.verde,
    ink: C.verdeT,
    text: 'Es un hermoso y perfecto lugar, muy cerca de Puerto Varas, ideal si llueve porque es cerrado y calentito, si hay sol tiene juegos al aire libre. Totalmente equipado, solo debes llevar la comida, lo que es un plus! Lo repetiremos con seguridad.',
  },
  {
    name: 'Grecia D.',
    color: C.azul,
    ink: C.azulT,
    text: 'Quiero comentar la magnífica experiencia que tuvimos disfrutando el cumpleaños de mi hija, nos encantó que en invierno está calentito, que tiene parrilla adentro y afuera del centro de eventos, también el amplio estacionamiento.',
  },
  {
    name: 'MYC Audiovisual',
    color: C.sol,
    ink: C.solT,
    text: 'Hemos confiado en este centro de eventos varias veces y nunca nos ha fallado! Excelente atención, harto entretenimiento, los niños lo pasaron genial! Muchas gracias, lo recomiendo!',
  },
]

// Faroles de papel del salón, replicados en la sección de juegos
const FAROLES = [
  { left: '4%', s: 18, c: '#E86AA4' },
  { left: '12%', s: 34, c: '#F5CE3C' },
  { left: '21%', s: 24, c: '#4FB5D9' },
  { left: '31%', s: 42, c: '#6BC24A' },
  { left: '42%', s: 26, c: '#F2923C' },
  { left: '52%', s: 38, c: '#9B7BC8' },
  { left: '62%', s: 22, c: '#E86AA4' },
  { left: '71%', s: 36, c: '#F5CE3C' },
  { left: '80%', s: 26, c: '#4FB5D9' },
  { left: '89%', s: 40, c: '#F2923C' },
  { left: '93.5%', s: 20, c: '#6BC24A' },
]

// ── Iconos del lugar (trazo redondo, 24px) ──────────────────

function Icon({ name, className = 'w-[22px] h-[22px]' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    wa: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
    pin: (
      <>
        <path d="M12 21s-6.5-5.4-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.6 12 21 12 21Z" />
        <circle cx="12" cy="10.6" r="2.2" />
      </>
    ),
    sol: (
      <>
        <circle cx="12" cy="12" r="4.4" />
        <path d="M12 2.8v2.2M12 19v2.2M2.8 12h2.2M19 12h2.2M5.5 5.5l1.6 1.6M16.9 16.9l1.6 1.6M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6" />
      </>
    ),
    lluvia: (
      <>
        <path d="M7 14.5a4 4 0 0 1-.6-7.95 5.2 5.2 0 0 1 10.2-.7 3.4 3.4 0 0 1 .4 8.65H7Z" />
        <path d="M8.5 17.5l-.8 2.2M12.5 17.5l-.8 2.2M16.5 17.5l-.8 2.2" />
      </>
    ),
    estufa: (
      <>
        <rect x="6.5" y="11" width="11" height="8" rx="1.4" />
        <path d="M12 11V4.5" />
        <path d="M9.3 19v2M14.7 19v2" />
        <path d="M12 13.4c.8 1.1 1.7 1.8 1.7 3a1.7 1.7 0 1 1-3.4 0c0-1.2.9-1.9 1.7-3Z" />
      </>
    ),
    parrilla: (
      <>
        <path d="M6 10.5h12l-1.4 4.3a4.6 4.6 0 0 1-9.2 0L6 10.5Z" />
        <path d="M8 16.5 5.5 21M16 16.5l2.5 4.5M12 16.2V21" />
        <path d="M9 7.6c0-1.1.9-1.4.9-2.5M13.5 7.6c0-1.1.9-1.4.9-2.5" />
      </>
    ),
    estacionamiento: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3.4" />
        <path d="M9.6 16.5v-9h3.6a3 3 0 0 1 0 6H9.6" />
      </>
    ),
    sofa: (
      <>
        <path d="M6 11V8.2A2.2 2.2 0 0 1 8.2 6h7.6A2.2 2.2 0 0 1 18 8.2V11" />
        <path d="M4 12a2 2 0 0 1 4 0v3h8v-3a2 2 0 0 1 4 0v5H4v-5Z" />
        <path d="M6.5 20v1.3M17.5 20v1.3" />
      </>
    ),
    tacataca: (
      <>
        <rect x="4" y="6.5" width="16" height="11" rx="1.6" />
        <path d="M8.5 3.5v17M15.5 3.5v17" />
        <path d="M8.5 10h-2.2M8.5 14h2.2M15.5 10h-2.2M15.5 14h2.2" />
      </>
    ),
    peluche: (
      <>
        <circle cx="8.6" cy="7" r="1.9" />
        <circle cx="15.4" cy="7" r="1.9" />
        <circle cx="12" cy="10" r="4.6" />
        <path d="M8 19.5c0-3.2 1.8-5.4 4-5.4s4 2.2 4 5.4" />
      </>
    ),
    inflable: (
      <>
        <path d="M5 20V5h4.5v9.5a4.5 4.5 0 0 0 4.5 4.5h5v1H5Z" />
        <path d="M5 8.5h4.5M5 12h4.5" />
        <circle cx="17.8" cy="6.5" r="1.6" />
        <circle cx="20.3" cy="3.8" r="1.1" />
      </>
    ),
    comida: (
      <>
        <path d="M5 15a7 7 0 0 1 14 0" />
        <path d="M3.5 15h17" />
        <path d="M12 8V6.8M10.2 6.8h3.6" />
        <path d="M8 18.5h8" />
      </>
    ),
    cancha: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="1.4" />
        <path d="M12 6v12" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M3 9.5h2.6v5H3M21 9.5h-2.6v5H21" />
      </>
    ),
    columpio: (
      <>
        <path d="M5.5 20 8.5 5h7l3 15" />
        <path d="M10.4 5v6.2M13.6 5v6.2" />
        <path d="M9.2 14h5.6" />
      </>
    ),
    camino: (
      <>
        <path d="M4 20c3-1 4-4 4-7s2-5 5-6 5-1 7 1" />
        <circle cx="19" cy="7" r="1.6" />
        <path d="M4 13.5h2.5M9 9h2.5" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** La bandurria del logo, en silueta: cuerpo recio, pico curvo y largo, patas largas. */
function Bandurria({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 66" className={className} style={style} aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 31C8 24.5 16 18.5 30 17.5c5.5-.6 8-3 10.8-6.8C42.8 8 45 6.6 48 6.6 52.8 6.6 56.4 9.8 56.4 13.7c0 2.6-1.4 4.7-3.4 5.9C51.3 20.7 50.5 23.2 50.5 26c0 8.4-6.2 15.5-16 17.5C23.5 45.8 11.5 42.5 9 31Z"
      />
      <path
        fill="currentColor"
        d="M55.9 13.9c3.6 5.7 5.9 13.1 5.4 22.1-.2 3-2 4.1-2.9 2.3-.5-8.6-2.5-16-5.5-20.3l3-4.1Z"
      />
      <path
        d="M28 43.5 22.5 58l-5 1.4M38.5 43.5 44 57.5l5-.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Sol del logo: disco naranja con rayos cortos. */
function Sol({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M40 6v8M40 66v8M6 40h8M66 40h8M16 16l5.7 5.7M58.3 58.3 64 64M64 16l-5.7 5.7M21.7 58.3 16 64" />
      </g>
      <circle cx="40" cy="40" r="21" fill="currentColor" />
    </svg>
  )
}

/**
 * Cordillera del logo: picos nevados sobre fondo transparente.
 * Sirve de borde superior de sección (fill = color de la sección)
 * y de paisaje del hero (fill celeste + nieves).
 */
function Ridge({
  fill,
  snow = false,
  className = '',
  style,
}: {
  fill: string
  snow?: boolean
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0 100V62L85 30l75 28 90-44 80 41 90-31 80 36 80-50 80 42 90-32 80 36 80-26 80 32 70-26 90 24 50-16v100H0Z"
      />
      {snow && (
        <g fill="#FFFFFF">
          <path d="M65 48 85 30l20 18-9-4-11 5-9-5-11 4Z" />
          <path d="M238 32l12-18 12 18-7-4-5 4-6-4-6 4Z" />
          <path d="M407 39l13-15 13 15-8-3-5 4-6-4-7 3Z" />
          <path d="M565 32l15-20 15 20-9-5-6 5-7-5-8 5Z" />
          <path d="M735 37l15-17 15 17-9-4-6 4-7-4-8 4Z" />
          <path d="M895 33l15-15 15 15-9-3-6 4-7-4-8 3Z" />
          <path d="M975 44l15-14 15 14-9-3-6 4-7-4-8 3Z" />
          <path d="M1048 49l12-13 12 13-7-3-5 3-6-3-6 3Z" />
        </g>
      )}
    </svg>
  )
}

/** Rótulo de sección: mini cordillera + bandurria + versalita. */
function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.28em] font-extrabold mb-4 flex items-center gap-3"
      style={{ color: light ? C.sol : C.verdeT }}
    >
      <svg viewBox="0 0 46 16" className="w-11 h-4 shrink-0" aria-hidden="true">
        <path
          d="M0 15 7 7l5 5 6-8 6 7 5-4 6 5 5-6 6 9H0Z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="39" cy="4" r="1.6" fill="currentColor" />
      </svg>
      {children}
    </p>
  )
}

/** Chip de dato con banderita. */
function Chip({ children, color, className = '' }: { children: React.ReactNode; color: string; className?: string }) {
  return (
    <li className={`flex items-center gap-2.5 text-[13px] font-bold ${className}`} style={{ color: C.cafe }}>
      <svg viewBox="0 0 10 12" className="w-2.5 h-3 shrink-0" aria-hidden="true">
        <polygon points="5,0 10,12 0,12" fill={color} />
      </svg>
      {children}
    </li>
  )
}

export default function LasBandurriasPage() {
  return (
    <div className={`${body.className} lb min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.nieve, color: C.cafe }}>
      <style>{`
        html { scroll-behavior: auto }
        .lb a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }

        /* Llegan las bandurrias: cruzan la parte baja del hero con pasitos */
        @keyframes lb-camina {
          0% { opacity: 0; transform: translateX(-20vw) translateY(0) }
          7% { opacity: 1 }
          17% { transform: translateX(-15.6vw) translateY(-3px) }
          30% { transform: translateX(-12vw) translateY(0) }
          43% { transform: translateX(-8.9vw) translateY(-3px) }
          57% { transform: translateX(-6.1vw) translateY(0) }
          71% { transform: translateX(-3.7vw) translateY(-2.5px) }
          84% { transform: translateX(-1.7vw) translateY(0) }
          93% { transform: translateX(-0.5vw) translateY(-1.5px) }
          100% { opacity: 1; transform: translateX(0) translateY(0) }
        }
        .lb-bird { animation: lb-camina var(--bd, 1.5s) cubic-bezier(.34,.55,.4,1) var(--bdel, 0s) both; will-change: transform }

        /* El sol del logo sale detrás de las montañas */
        @keyframes lb-sol {
          0% { opacity: 0; transform: translateY(90%) }
          30% { opacity: 1 }
          100% { opacity: 1; transform: none }
        }
        .lb-sol { animation: lb-sol 1.3s cubic-bezier(.25,.7,.3,1) .35s both; will-change: transform }

        @keyframes lb-entra { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .lb-entra { animation: lb-entra .75s cubic-bezier(.22,.65,.25,1) both; animation-delay: var(--d, 0s) }

        /* Los faroles caen del techo con un balanceo suave al entrar la sección */
        @supports (animation-timeline: view()) {
          .lb-farol {
            transform-origin: 50% 0;
            animation: lb-farol-cae linear both;
            animation-timeline: view();
            animation-range: entry var(--r0, 0%) entry var(--r1, 58%);
          }
          @keyframes lb-farol-cae {
            0% { opacity: 0; transform: translateY(-42px) rotate(9deg) }
            55% { opacity: 1; transform: translateY(3px) rotate(-5.5deg) }
            78% { transform: translateY(-1px) rotate(2.5deg) }
            100% { opacity: 1; transform: none }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lb-bird, .lb-sol, .lb-entra { animation: none !important; opacity: 1 !important; transform: none !important }
          .lb-farol { animation: none !important; opacity: 1 !important; transform: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(255,253,247,0.94)',
          ink: C.cafe,
          line: C.cafeLine,
          btnBg: C.azulT,
          btnInk: '#FFFDF7',
        }}
      />

      {/* ── Hero: tu cumpleaños, llueva o haga sol ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #DDF0FB 0%, #EDF6EC 52%, #FDF8EA 82%, #FFFDF7 100%)' }}>
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-[88px] md:pt-24">
          <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-8 lg:gap-12 items-center">
            <div>
              <p
                className="lb-entra inline-block text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3"
                style={{ backgroundColor: '#E3F1D4', color: C.verdeT, ['--d' as string]: '.1s' }}
              >
                Colonia Alerce · km 7 · Puerto Varas
              </p>

              <h1
                className={`${display.className} lb-entra font-extrabold leading-[0.98] tracking-[0.005em] text-[clamp(2.7rem,11vw,5rem)] mb-3`}
                style={{ color: C.cafe, ['--d' as string]: '.25s' }}
              >
                Tu cumpleaños,
                <br />
                <span style={{ color: C.azulT }}>
                  llueva
                  <Icon name="lluvia" className="inline w-[0.52em] h-[0.52em] ml-[0.08em] -mt-[0.16em] align-baseline" />
                </span>
                <br />o haga{' '}
                <span style={{ color: C.solT }}>
                  sol.
                  <span style={{ color: C.sol }}>
                    <Icon name="sol" className="inline w-[0.52em] h-[0.52em] ml-[0.1em] -mt-[0.14em] align-baseline" />
                  </span>
                </span>
              </h1>

              <p className="lb-entra text-[15px] md:text-lg leading-relaxed max-w-xl mb-5" style={{ color: C.cafeMut, ['--d' as string]: '.42s' }}>
                Salón cerrado y calefaccionado, juegos, parrilla y amplio
                estacionamiento. Totalmente equipado: tú solo llevas la comida.
              </p>

              <div className="lb-entra flex flex-wrap items-center gap-3 mb-6" style={{ ['--d' as string]: '.58s' }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] md:text-base font-extrabold px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.azulT, color: '#FFFDF7', boxShadow: '0 10px 24px rgba(21,106,156,0.3)' }}
                >
                  <Icon name="wa" className="w-[18px] h-[18px]" />
                  Consulta disponibilidad
                </a>
                <a
                  href="#clima"
                  className="text-[15px] md:text-base font-extrabold px-6 py-3 rounded-full border-2 transition-colors tap-44"
                  style={{ borderColor: C.cafe, color: C.cafe }}
                >
                  Conoce el lugar
                </a>
              </div>
            </div>

            {/* El salón listo para la fiesta */}
            <div className="relative lb-entra" style={{ ['--d' as string]: '.7s', rotate: '0.8deg' }}>
              <div
                className="relative overflow-hidden rounded-[24px] aspect-[16/10] md:aspect-[4/3]"
                style={{ boxShadow: '0 22px 55px rgba(107,74,46,0.25)', border: '5px solid #fff' }}
              >
                <Image
                  src={`${IMG}/salon-decorado.webp`}
                  alt="Salón de Las Bandurrias con faroles de papel de colores colgando del techo, mesas y el inflable"
                  fill
                  priority
                  sizes="(min-width: 1152px) 1040px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
                <span
                  className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(107,74,46,0.85)', color: '#FFFDF7' }}
                >
                  El salón, listo para la fiesta
                </span>
              </div>
              {/* logo sobre la esquina */}
              <div
                className="absolute -top-5 -left-2 md:-left-5 p-1.5 rounded-xl"
                style={{ backgroundColor: '#fff', boxShadow: '0 10px 26px rgba(107,74,46,0.3)', rotate: '-4deg' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/logo.webp`} width={1200} height={673} alt="Logo de Las Bandurrias, Centro de Eventos" className="w-[86px] md:w-[108px] h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Paisaje del logo: sol naciendo, cordillera, pradera y bandurrias */}
        <div className="relative z-20 h-[124px] md:h-[168px] md:-mt-9" aria-hidden="true">
          <div className="lb-sol absolute z-0" style={{ left: '57%', bottom: '34%', width: 76, height: 76, color: C.sol }}>
            <Sol className="w-full h-full" />
          </div>
          <Ridge fill={C.azulPico} snow className="absolute inset-x-0 bottom-[17%] z-10 w-full h-[62%]" />
          <svg viewBox="0 0 1200 46" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 z-20 w-full h-[34%]" aria-hidden="true">
            <path fill={C.verdeM} d="M0 46V18Q180 4 420 14t440-8 340 8v32H0Z" />
            <path fill={C.verde} d="M0 46V28Q240 10 560 20t640-4v30H0Z" />
          </svg>
          <Bandurria className="lb-bird absolute z-30" style={{ left: '23%', bottom: '24%', width: 46, color: C.cafe, ['--bd' as string]: '1.45s', ['--bdel' as string]: '.05s' }} />
          <Bandurria className="lb-bird absolute z-30" style={{ left: '33%', bottom: '28%', width: 56, color: C.cafe, ['--bd' as string]: '1.45s', ['--bdel' as string]: '.18s' }} />
          <Bandurria className="lb-bird absolute z-30" style={{ left: '43%', bottom: '23%', width: 42, color: C.cafe, ['--bd' as string]: '1.45s', ['--bdel' as string]: '.31s' }} />
        </div>
      </section>

      {/* ── Llueva o haga sol: adentro y afuera ── */}
      <section id="clima" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Rotulo>Adentro y afuera</Rotulo>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
            <h2 className={`${display.className} font-extrabold text-[2.4rem] md:text-6xl leading-[0.96]`} style={{ color: C.cafe }}>
              ¿Llueve? Adentro.
              <br />
              <span style={{ color: C.verdeT }}>¿Sol? Afuera.</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.cafeMut }}>
              El pronóstico no decide la fiesta: el salón es cerrado y
              calentito, y el terreno tiene juegos al aire libre y cancha.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Si llueve */}
          <Reveal>
            <article className="h-full rounded-[22px] overflow-hidden" style={{ backgroundColor: C.cielo, border: `1.5px solid rgba(30,136,200,0.22)` }}>
              <div className="relative h-[210px] md:h-[250px]">
                <Image
                  src={`${IMG}/quincho-interior.webp`}
                  alt="Interior del salón con la estufa a leña encendida, mesas y ventanal al campo"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 62%' }}
                />
                <span
                  className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(15,58,87,0.85)', color: '#FFFDF7' }}
                >
                  <Icon name="lluvia" className="w-[14px] h-[14px]" />
                  Si llueve
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className={`${display.className} font-bold text-[22px] md:text-2xl leading-tight mb-1.5`} style={{ color: C.azulT }}>
                  El salón, calentito
                </h3>
                <p className="text-[13.5px] md:text-sm leading-relaxed mb-4" style={{ color: C.cafeMut }}>
                  Cerrado y calefaccionado, con estufa a leña: cuando llueve
                  en el sur, la fiesta sigue igual de rica adentro.
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  <Chip color={C.azul}>Salón cerrado</Chip>
                  <Chip color={C.azul}>Estufa a leña</Chip>
                  <Chip color={C.azul}>Mesa de cumpleaños</Chip>
                </ul>
              </div>
            </article>
          </Reveal>

          {/* Si hace sol */}
          <Reveal delay={120}>
            <article className="h-full rounded-[22px] overflow-hidden" style={{ backgroundColor: C.pradera, border: `1.5px solid rgba(93,178,54,0.26)` }}>
              <div className="relative h-[210px] md:h-[250px] overflow-hidden">
                <Image
                  src={`${IMG}/cumpleanos-decorado.webp`}
                  alt="Mesa de cumpleaños decorada con autos de carrera, globos y el número 2"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 68%' }}
                />
                <span
                  className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(107,74,46,0.85)', color: '#FFFDF7' }}
                >
                  <Icon name="sol" className="w-[14px] h-[14px]" />
                  Si hace sol
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className={`${display.className} font-bold text-[22px] md:text-2xl leading-tight mb-1.5`} style={{ color: C.verdeT }}>
                  El terreno, para correr
                </h3>
                <p className="text-[13.5px] md:text-sm leading-relaxed mb-4" style={{ color: C.cafeMut }}>
                  Cuando sale el sol, los juegos al aire libre y la cancha
                  esperan en el prado, con el campo alrededor.
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  <Chip color={C.verde}>Juegos al aire libre</Chip>
                  <Chip color={C.verde}>Cancha</Chip>
                  <Chip color={C.verde}>Celebraciones familiares</Chip>
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── Juegos: los faroles cuelgan del techo ── */}
      <section id="juegos" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.cielo }}>
        {/* faroles de papel, como los del salón */}
        <div className="absolute inset-x-0 top-0 h-[120px] pointer-events-none" aria-hidden="true">
          {FAROLES.map((f, i) => (
            <span
              key={i}
              className="lb-farol absolute top-0"
              style={{ left: f.left, ['--r0' as string]: `${i * 3}%`, ['--r1' as string]: `${52 + i * 3}%` }}
            >
              <span className="block w-px mx-auto" style={{ height: f.s, backgroundColor: 'rgba(107,74,46,0.35)' }} />
              <span
                className="block rounded-full mx-auto"
                style={{
                  width: 26 + (i % 3) * 4,
                  height: 22 + (i % 3) * 3,
                  backgroundColor: f.c,
                  boxShadow: 'inset -3px -4px 0 rgba(107,74,46,0.14)',
                }}
              />
            </span>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[132px] md:pt-[150px] pb-14 md:pb-20">
          <Reveal>
            <Rotulo>Juegos</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
              <h2 className={`${display.className} font-extrabold text-[2.4rem] md:text-6xl leading-[0.96]`} style={{ color: C.cafe }}>
                Para no parar
                <br />
                <span style={{ color: C.azulT }}>de jugar</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.cafeMut }}>
                Todo esto está bajo techo: el inflable, las máquinas y la
                mesa de taca-taca se disfrutan con cualquier clima.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-[1.35fr_1fr] gap-4 md:gap-6">
            <Reveal className="col-span-2 lg:row-span-2">
              <figure className="relative overflow-hidden rounded-[22px] h-[240px] md:h-full md:min-h-[430px]" style={{ boxShadow: '0 14px 40px rgba(21,106,156,0.18)' }}>
                <Image
                  src={JUEGOS[0].src!}
                  alt={JUEGOS[0].alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 42%' }}
                />
                <figcaption
                  className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(15,58,87,0.85)', color: '#FFFDF7' }}
                >
                  {JUEGOS[0].name}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={110}>
              <figure className="relative overflow-hidden rounded-[22px] aspect-[3/4] md:aspect-auto md:h-[240px]" style={{ boxShadow: '0 12px 34px rgba(21,106,156,0.16)' }}>
                <Image
                  src={JUEGOS[1].src!}
                  alt={JUEGOS[1].alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 55%' }}
                />
                <figcaption
                  className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(15,58,87,0.85)', color: '#FFFDF7' }}
                >
                  {JUEGOS[1].name}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={200}>
              <div
                className="h-full min-h-[170px] md:min-h-[170px] p-4 md:p-5 rounded-[22px] flex flex-col justify-between"
                style={{ backgroundColor: '#fff', border: `1.5px solid rgba(30,136,200,0.24)`, boxShadow: '0 8px 24px rgba(21,106,156,0.1)' }}
              >
                <span className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(30,136,200,0.12)', color: C.azulT }}>
                  <Icon name="tacataca" className="w-[24px] h-[24px]" />
                </span>
                <div>
                  <h3 className={`${display.className} font-bold text-xl md:text-[22px] leading-tight mb-1`} style={{ color: C.cafe }}>
                    Taca-taca
                  </h3>
                  <p className="text-[12.5px] md:text-[13px] leading-relaxed" style={{ color: C.cafeMut }}>
                    Para los campeonatos entre grandes y chicos.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div
              className="mt-5 md:mt-6 rounded-[20px] px-5 py-4 flex items-center gap-4"
              style={{ backgroundColor: C.azulT, boxShadow: '0 10px 30px rgba(21,106,156,0.25)' }}
            >
              <span className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,253,247,0.16)', color: '#FFFDF7' }}>
                <Icon name="inflable" className="w-[24px] h-[24px]" />
              </span>
              <p className="text-[13.5px] md:text-[15px] leading-snug font-bold" style={{ color: '#FFFDF7' }}>
                Todo bajo techo: si la lluvia llega a mitad de fiesta, los juegos siguen igual.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Para los grandes ── */}
      <div aria-hidden="true" style={{ backgroundColor: C.cielo }}>
        <Ridge fill={C.pradera} className="w-full h-10 md:h-14" />
      </div>
      <section id="grandes" className="scroll-mt-20 relative" style={{ backgroundColor: C.pradera }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo>Para los grandes</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
              <h2 className={`${display.className} font-extrabold text-[2.4rem] md:text-6xl leading-[0.96]`} style={{ color: C.cafe }}>
                Los adultos
                <br />
                <span style={{ color: C.solT }}>también descansan</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.cafeMut }}>
                Mientras los niños juegan, los papás tienen su propio
                rincón calentito, con parrilla para el asado.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-10 items-stretch">
            <Reveal>
              <figure className="relative overflow-hidden rounded-[22px] h-[240px] md:h-full md:min-h-[380px]" style={{ boxShadow: '0 14px 40px rgba(53,112,28,0.18)' }}>
                <Image
                  src={`${IMG}/sala-estar.webp`}
                  alt="Sala de estar de Las Bandurrias con sillones de mimbre, estufa y televisión"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '52% 60%' }}
                />
                <figcaption
                  className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(43,90,20,0.88)', color: '#FFFDF7' }}
                >
                  La sala de los grandes
                </figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-4 content-start">
              {GRANDES.map((g, i) => (
                <Reveal key={g.name} delay={i * 100}>
                  <div
                    className="flex items-start gap-4 p-4 md:p-5 rounded-[20px]"
                    style={{ backgroundColor: '#fff', border: `1.5px solid ${C.cafeLine}`, boxShadow: '0 5px 18px rgba(107,74,46,0.07)' }}
                  >
                    <span className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: g.tint, color: g.color }}>
                      <Icon name={g.icon} className="w-[24px] h-[24px]" />
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold text-xl md:text-[22px] leading-tight mb-1`} style={{ color: C.cafe }}>
                        {g.name}
                      </h3>
                      <p className="text-[13px] md:text-[13.5px] leading-relaxed" style={{ color: C.cafeMut }}>
                        {g.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={300}>
                <div
                  className="flex items-center gap-4 p-4 md:p-5 rounded-[20px]"
                  style={{ backgroundColor: C.solSuave, border: `1.5px solid rgba(244,162,28,0.4)` }}
                >
                  <span className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(244,162,28,0.2)', color: C.solT }}>
                    <Icon name="comida" className="w-[24px] h-[24px]" />
                  </span>
                  <p className="text-[13.5px] md:text-[15px] leading-snug" style={{ color: C.cafe }}>
                    <span className="font-extrabold">Totalmente equipado:</span>{' '}
                    solo llevas la comida, lo demás ya está puesto.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Rotulo>Opiniones</Rotulo>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
            <h2 className={`${display.className} font-extrabold text-[2.4rem] md:text-6xl leading-[0.96]`} style={{ color: C.cafe }}>
              Los que celebraron,
              <br />
              <span style={{ color: C.azulT }}>vuelven</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.cafeMut }}>
              Estas son las opiniones textuales que dejaron en Google quienes
              ya hicieron su fiesta aquí.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-5">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 110} className={i === 1 ? 'lg:translate-y-5' : ''}>
              <figure
                className="relative h-full p-5 md:p-6 pt-7 rounded-[20px] flex flex-col"
                style={{
                  backgroundColor: '#fff',
                  border: `1.5px solid ${C.cafeLine}`,
                  boxShadow: '0 6px 20px rgba(107,74,46,0.08)',
                }}
              >
                <span
                  className={`${display.className} absolute -top-1 left-4 text-[64px] leading-none select-none`}
                  style={{ color: q.ink }}
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="text-[14.5px] md:text-[15px] leading-relaxed mb-4 mt-6" style={{ color: C.cafe }}>
                  {q.text}
                </blockquote>
                <figcaption className="mt-auto text-[11px] uppercase tracking-[0.18em] font-extrabold" style={{ color: q.ink }}>
                  {q.name} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
            style={{ color: C.azulT, textDecorationColor: 'rgba(21,106,156,0.4)' }}
          >
            Leer las {BIZ.reviews} opiniones en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo llegar + reserva ── */}
      <div aria-hidden="true" style={{ backgroundColor: C.nieve }}>
        <Ridge fill={C.noche} className="w-full h-10 md:h-14" />
      </div>
      <section id="llegar" className="scroll-mt-20 relative" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10 md:pb-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <Rotulo light>Cómo llegar</Rotulo>
              <h2 className={`${display.className} font-extrabold text-[2.4rem] md:text-6xl leading-[0.96] mb-6`} style={{ color: '#FFFDF7' }}>
                Colonia Alerce,
                <br />
                <span style={{ color: C.sol }}>km 7</span>
              </h2>
              <ul className="grid gap-4 max-w-md mb-6">
                <li className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(244,162,28,0.16)', color: C.sol }}>
                    <Icon name="pin" className="w-[21px] h-[21px]" />
                  </span>
                  <div>
                    <p className="text-[15px] font-extrabold" style={{ color: '#FFFDF7' }}>
                      Cruce Ruta V-505, Colonia Alerce, km 7
                    </p>
                    <p className="text-[12.5px] leading-snug" style={{ color: C.nocheMut }}>
                      Puerto Varas, Región de Los Lagos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(93,178,54,0.18)', color: C.verdeM }}>
                    <Icon name="camino" className="w-[21px] h-[21px]" />
                  </span>
                  <div>
                    <p className="text-[15px] font-extrabold" style={{ color: '#FFFDF7' }}>
                      Muy cerca de Puerto Varas y Puerto Montt
                    </p>
                    <p className="text-[12.5px] leading-snug" style={{ color: C.nocheMut }}>
                      Con amplio estacionamiento junto al salón.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-bold">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                  style={{ color: C.sol, textDecorationColor: 'rgba(244,162,28,0.4)' }}
                >
                  Abrir en Google Maps →
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                  style={{ color: C.sol, textDecorationColor: 'rgba(244,162,28,0.4)' }}
                >
                  {BIZ.phoneDisplay} →
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <figure className="relative overflow-hidden rounded-[20px] mb-5" style={{ boxShadow: '0 16px 44px rgba(0,0,0,0.35)', border: `1.5px solid ${C.nocheLine}` }}>
                <Image
                  src={`${IMG}/volcan.webp`}
                  alt="El terreno verde de Las Bandurrias con el volcán Osorno nevado al fondo"
                  width={1200}
                  height={540}
                  className="w-full h-auto"
                />
                <figcaption
                  className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(15,58,87,0.85)', color: '#FFFDF7' }}
                >
                  El terreno, con vista a los volcanes
                </figcaption>
              </figure>
              <div className="overflow-hidden rounded-[20px]" style={{ border: `1.5px solid ${C.nocheLine}`, boxShadow: '0 16px 44px rgba(0,0,0,0.3)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[240px] md:h-[280px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* reserva */}
          <div className="mt-10 md:mt-14 pt-8 md:pt-10 text-center" style={{ borderTop: `1.5px dashed ${C.nocheLine}` }}>
            <Reveal>
              <div className="flex justify-center items-end gap-3 mb-5" aria-hidden="true">
                <Bandurria className="w-8 md:w-9" style={{ color: 'rgba(255,253,247,0.85)' }} />
                <Bandurria className="w-11 md:w-12" style={{ color: C.sol }} />
                <Bandurria className="w-8 md:w-9" style={{ color: 'rgba(255,253,247,0.85)' }} />
              </div>
              <h2 className={`${display.className} font-extrabold text-[2.4rem] md:text-[4rem] leading-[0.96] mb-4`} style={{ color: '#FFFDF7' }}>
                ¿Reservamos
                <br />
                <span style={{ color: C.sol }}>tu fecha?</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-6" style={{ color: C.nocheMut }}>
                Escríbenos por WhatsApp cuándo es el cumpleaños y te cuentan
                la disponibilidad.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] md:text-base font-extrabold px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.sol, color: '#3B2A17', boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}
                >
                  <Icon name="wa" className="w-[18px] h-[18px]" />
                  Consulta disponibilidad
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] md:text-base font-extrabold px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/10 tap-44"
                  style={{ borderColor: 'rgba(255,253,247,0.45)', color: '#FFFDF7' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.noche, color: '#FFFDF7' }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderColor: C.nocheLine }}
        >
          <div className="flex items-center gap-4">
            <span className="inline-block p-1.5 rounded-xl shrink-0" style={{ backgroundColor: '#FFFDF7' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/logo.webp`} width={1200} height={673} alt="" className="w-[104px] h-auto rounded-md" />
            </span>
            <div>
              <p className={`${display.className} font-extrabold text-lg leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-[12px] leading-relaxed" style={{ color: C.nocheMut }}>
                {BIZ.address} · {BIZ.city}
                <br />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]" style={{ color: C.nocheMut }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.nocheLine }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: C.nieveMut }}>
            Fotos reales de la ficha de Google del centro de eventos; las
            opiniones son textuales de Google. Dirección y WhatsApp son los reales.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
