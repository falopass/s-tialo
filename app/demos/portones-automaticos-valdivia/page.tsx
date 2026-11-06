import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_FALLA, IMG } from './content'

// Display black de cartel + texto Work Sans + mono técnico para los rótulos.
const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

export const metadata: Metadata = demoMetadata({
  slug: 'portones-automaticos-valdivia',
  title: 'Portones Automáticos Valdivia · motores de corredera · 24 h',
  description:
    'Instalación, reparación y mantención de motores de corredera en Valdivia. Portones a medida, controles y receptores. Atención las 24 horas por WhatsApp.',
  image: '/demos/portones-automaticos-valdivia/porton-corredera.webp',
})

// «Tu portón, bajo control»: el naranjo de su logo sobre el carbón del
// taller, el acero del riel y la madera de sus portones.
const C = {
  carbon: '#16181A',
  panel: '#1F2225',
  pozo: '#101214',
  hueso: '#F2EFEA',
  naranjo: '#F28A3A',
  madera: '#8A4B2A',
  acero: '#5E666D',
  aceroD: '#8A929A', // acero claro: pasa 4.5:1 sobre carbón
  verde: '#57B06C',
  verdeL: '#3D7A4C', // verde oscuro: pasa 4.5:1 sobre hueso
  mutedD: 'rgba(242,239,234,0.68)',
  mutedL: 'rgba(22,24,26,0.72)',
  lineD: 'rgba(242,239,234,0.14)',
  lineL: 'rgba(22,24,26,0.15)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Zona', href: '#zona' },
]

const SERVICIOS: {
  n: string
  t: string
  d: string
  tag: string
  icon: string
}[] = [
  {
    n: 'S-01',
    t: 'Instalación de motores',
    d: 'Motores para portones de corredera: fijación, cremallera y puesta en marcha con sus controles.',
    tag: 'MOTOR · CORREDERA',
    icon: 'motor',
  },
  {
    n: 'S-02',
    t: 'Reparación y mantención',
    d: 'Revisión técnica de la falla, reparación del motor y mantención para que siga trabajando.',
    tag: 'TALLER',
    icon: 'wrench',
  },
  {
    n: 'S-03',
    t: 'Automatización de portones',
    d: 'Tu portón manual puede quedar automático: se evalúa el riel, el peso y el espacio para el motor.',
    tag: 'PORTÓN EXISTENTE',
    icon: 'porton',
  },
  {
    n: 'S-04',
    t: 'Construcción y montaje',
    d: 'Portones de fierro, reja y madera, armados a medida y montados con su automatización.',
    tag: 'A MEDIDA',
    icon: 'tablas',
  },
  {
    n: 'S-05',
    t: 'Controles y receptores',
    d: '¿Te quedan pocos controles o alguno dejó de funcionar? Se revisa la compatibilidad del receptor y se ordena quién puede ingresar.',
    tag: 'ACCESO',
    icon: 'control',
  },
]

const FALLAS = [
  { n: 'F-01', t: 'Falla de manera intermitente' },
  { n: 'F-02', t: 'Se detiene a mitad del recorrido' },
  { n: 'F-03', t: 'Ya no cierra correctamente' },
  { n: 'F-04', t: 'Quedan pocos controles' },
  { n: 'F-05', t: 'Algún control dejó de funcionar' },
]

const CRITERIOS: { n: string; t: string; d: string; icon: string }[] = [
  {
    n: 'C-01',
    t: 'Peso real',
    d: 'Elegir solo por el peso anunciado provoca fallas prematuras: el peso real del portón es lo primero.',
    icon: 'pesa',
  },
  {
    n: 'C-02',
    t: 'Largo del portón',
    d: 'Un portón de 5 metros exige más que uno corto, aunque pesen lo mismo.',
    icon: 'regla',
  },
  {
    n: 'C-03',
    t: 'Frecuencia de uso',
    d: 'Una casa abre unas veces al día; un condominio, decenas de veces.',
    icon: 'ciclo',
  },
  {
    n: 'C-04',
    t: 'Roce',
    d: 'Riel, ruedas y guías: el roce es fuerza extra que el motor sí siente.',
    icon: 'roce',
  },
  {
    n: 'C-05',
    t: 'Pendiente',
    d: 'En desnivel, cada apertura empuja contra la pendiente.',
    icon: 'pendiente',
  },
]

const TRABAJOS = [
  {
    src: `${IMG}/porton-madera.webp`,
    w: 1056,
    h: 1056,
    alt: 'Portón de madera teñida con marco de fierro negro, recién armado en el taller',
    cap: 'PORTÓN DE MADERA Y FIERRO · EN ARMADO',
    cls: 'md:col-span-6',
    aspect: 'aspect-[5/4]',
  },
  {
    src: `${IMG}/porton-reja.webp`,
    w: 720,
    h: 1152,
    alt: 'Portón corredera de reja metálica con puerta peatonal, instalado en un campo',
    cap: 'PORTÓN DE REJA CON PEATONAL',
    cls: 'md:col-span-6 md:mt-14',
    aspect: 'aspect-[4/5]',
  },
  {
    src: `${IMG}/porton-armado.webp`,
    w: 675,
    h: 1200,
    alt: 'Portón de madera en etapa de armado sobre la mesa del taller',
    cap: 'TABLAS EN MONTAJE',
    cls: 'md:col-span-4',
    aspect: 'aspect-[3/4.2]',
  },
  {
    src: `${IMG}/motor-instalado.webp`,
    w: 612,
    h: 1025,
    alt: 'Motor celeste de portón corredera instalado junto a la reja, en terreno',
    cap: 'MOTOR INSTALADO EN TERRENO',
    cls: 'md:col-span-4 md:mt-10',
    aspect: 'aspect-[3/4.2]',
  },
]

/** Iconos lineales del oficio: trazo único sobre viewBox 24. */
function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    // piñón dentado: el motivo del logo
    pinion: (
      <>
        <circle cx="12" cy="12" r="5.6" />
        <circle cx="12" cy="12" r="1.6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <path key={a} d="M12 2.6v3.2" transform={`rotate(${a} 12 12)`} />
        ))}
      </>
    ),
    motor: (
      <>
        <rect x="5" y="4.5" width="14" height="15" rx="2" />
        <path d="M9 4.5V2.8h6v1.7" />
        <path d="M12 8.5a3.5 3.5 0 1 1-3.5 3.5" />
        <path d="M12 12l2.4-2.4" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    porton: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M8 4v14M13 4v14M18 4v14" />
        <path d="M3 21h18" />
        <circle cx="7" cy="20" r="1" fill="currentColor" />
        <circle cx="17" cy="20" r="1" fill="currentColor" />
      </>
    ),
    tablas: (
      <>
        <path d="M4 20V6.5L12 3l8 3.5V20" />
        <path d="M4 20h16" />
        <path d="M8.5 20V8.5M12 20V6.8M15.5 20V8.5" />
      </>
    ),
    control: (
      <>
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <circle cx="12" cy="8" r="1.4" />
        <path d="M10.5 13h3M10.5 16h3" />
      </>
    ),
    alerta: (
      <>
        <path d="M12 3L2.5 20h19L12 3z" />
        <path d="M12 9.5v4.5" />
        <circle cx="12" cy="17" r="0.9" fill="currentColor" />
      </>
    ),
    pesa: (
      <>
        <path d="M9.5 7a2.5 2.5 0 0 1 5 0v1h-5V7z" />
        <path d="M6 8h12l1.5 12h-15L6 8z" />
      </>
    ),
    regla: (
      <>
        <path d="M3.5 9.5l6-6 11 11-6 6-11-11z" />
        <path d="M8.5 12.5l1.5-1.5M11 10l1.5-1.5M13.5 7.5L15 6M11 15l1.5-1.5" />
      </>
    ),
    ciclo: (
      <>
        <path d="M4 12a8 8 0 0 1 13.6-5.7M20 12a8 8 0 0 1-13.6 5.7" />
        <path d="M17.6 2.8v3.6h-3.6M6.4 21.2v-3.6h3.6" />
      </>
    ),
    roce: (
      <>
        <path d="M4 8h10M4 12h16M4 16h10" />
        <path d="M17 5.5l3 2.5-3 2.5M7 18.5l-3-2.5 3-2.5" transform="translate(0 -1)" />
      </>
    ),
    pendiente: (
      <>
        <path d="M3 20h18" />
        <path d="M3 20L21 8" />
        <circle cx="9" cy="14.9" r="2.2" />
      </>
    ),
    casa: (
      <>
        <path d="M4 11l8-7 8 7" />
        <path d="M6 9.5V20h12V9.5" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
    edificio: (
      <>
        <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
        <path d="M15 9h4v12M3 21h18" />
        <path d="M8 7h1.5M11 7h1.5M8 11h1.5M11 11h1.5M8 15h1.5M11 15h1.5" />
      </>
    ),
    local: (
      <>
        <path d="M5 9l1.2-5h11.6L19 9" />
        <path d="M5 9v11h14V9" />
        <path d="M9.5 20v-5h5v5" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    mensaje: (
      <>
        <path d="M4 5h16v11H9l-5 4V5z" />
        <path d="M8 9h8M8 12.5h5" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21.5S5 15.4 5 9.8a7 7 0 0 1 14 0c0 5.6-7 11.7-7 11.7z" />
        <circle cx="12" cy="9.8" r="2.6" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Rótulo de tramo: un piñón + código de tramo + nombre, tipo ficha técnica. */
function Tramo({
  n,
  nombre,
  dark,
}: {
  n: string
  nombre: string
  dark: boolean
}) {
  const ink = dark ? C.naranjo : C.madera
  return (
    <p
      className={`${mono.className} flex items-center gap-2.5 md:gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.28em] mb-5 whitespace-nowrap`}
      style={{ color: ink }}
    >
      <Icon name="pinion" className="w-4 h-4 shrink-0" />
      <span className="h-[1.5px] w-8 md:w-10 shrink-0" style={{ backgroundColor: ink }} aria-hidden="true" />
      <span>
        TRAMO {n} · {nombre}
      </span>
    </p>
  )
}

/**
 * La cremallera que separa secciones: una banda dentada sobre su riel.
 * Al entrar al viewport avanza unos dientes, como cuando el piñón
 * empieza a empujar el portón. Solo transform.
 */
function Cremallera({ flip = false, tone = 'dark' }: { flip?: boolean; tone?: 'dark' | 'light' }) {
  const tooth = tone === 'dark' ? '#4A5158' : '#C9C4BB'
  const rail = tone === 'dark' ? C.aceroD : C.acero
  return (
    <div
      className={`relative h-[34px] overflow-hidden ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      {/* absolute: fuera del flujo no infla el max-content de grillas ni fichas */}
      <svg
        className="pav-rack absolute left-0 top-0 h-full w-[1600px] max-w-none"
        viewBox="0 0 1600 34"
        preserveAspectRatio="xMinYMid slice"
      >
        {Array.from({ length: 80 }, (_, i) => {
          const x = i * 20
          return (
            <path
              key={i}
              d={`M${x} 30 L${x + 17} 30 L${x + 13.5} 13 L${x + 3.5} 13 Z`}
              fill={tooth}
            />
          )
        })}
        <rect x="0" y="30" width="1600" height="2.5" fill={rail} />
        <rect x="0" y="10" width="1600" height="1.5" fill={rail} opacity="0.55" />
      </svg>
    </div>
  )
}

/**
 * El portón que se abre: una hoja ilustrada en SVG (tablas de madera
 * con marco de fierro y su cremallera abajo) cubre la foto real y
 * corre sobre el riel con desaceleración. El piñón del motor gira
 * mientras el portón corre y la luz de estado pasa de naranjo a verde.
 */
function PortonHero() {
  const tablas = Array.from({ length: 15 }, (_, i) => 20 + i * 30)
  return (
    <div className="relative" style={{ aspectRatio: '4/4.7' }}>
      {/* el vano: marco de postes de acero */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          border: `3px solid #2E3439`,
          backgroundColor: C.pozo,
          boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* la foto real del portón, debajo de la hoja */}
        <Image
          src={`${IMG}/porton-corredera.webp`}
          alt="Portón corredera de madera y fierro con su motor, instalado en una casa de Valdivia"
          fill
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="object-cover"
          style={{ objectPosition: '52% 45%' }}
        />

        {/* la hoja del portón, que corre hacia la izquierda */}
        <div className="pav-hoja absolute inset-y-0 left-0 w-full will-change-transform">
          <svg
            viewBox="0 0 480 564"
            preserveAspectRatio="xMidYMid slice"
            className="block w-full h-full"
            aria-hidden="true"
          >
            {/* marco perimetral de fierro */}
            <rect x="6" y="8" width="468" height="512" fill="#14161A" />
            {/* tablas de madera */}
            {tablas.map((x, i) => (
              <rect
                key={x}
                x={x}
                y="22"
                width="26"
                height="482"
                fill={i % 3 === 1 ? '#7C4426' : i % 3 === 2 ? '#93522D' : '#8A4B2A'}
              />
            ))}
            {/* vetas suaves de la madera */}
            {tablas.map((x) => (
              <rect key={`v${x}`} x={x + 5} y="22" width="2.5" height="482" fill="rgba(0,0,0,0.14)" />
            ))}
            {/* travesaños de fierro con sus pernos */}
            <rect x="6" y="92" width="468" height="16" fill="#14161A" />
            <rect x="6" y="330" width="468" height="16" fill="#14161A" />
            {tablas.map((x) => (
              <g key={`p${x}`} fill="#3E454C">
                <circle cx={x + 13} cy="100" r="3" />
                <circle cx={x + 13} cy="338" r="3" />
              </g>
            ))}
            {/* zanca diagonal */}
            <rect
              x="238"
              y="200"
              width="14"
              height="470"
              fill="#14161A"
              transform="rotate(63 245 200)"
            />
            {/* cremallera bajo la hoja */}
            <rect x="6" y="520" width="468" height="9" fill="#3E454C" />
            {Array.from({ length: 26 }, (_, i) => {
              const x = 10 + i * 18
              return (
                <path
                  key={i}
                  d={`M${x} 529 L${x + 15} 529 L${x + 12} 538 L${x + 3} 538 Z`}
                  fill="#4A5158"
                />
              )
            })}
          </svg>
        </div>

        {/* riel y piso, quietos: el portón corre sobre ellos */}
        <svg
          viewBox="0 0 480 564"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <rect x="0" y="544" width="480" height="20" fill="rgba(10,11,12,0.55)" />
          <rect x="0" y="541" width="480" height="4" fill="#596169" />
          <rect x="0" y="545" width="480" height="2" fill="#3A4046" />
        </svg>

        {/* el motor: fijo junto al poste de recogida, su piñón empuja la
            cremallera; el portón corre por detrás de él */}
        <svg
          viewBox="0 0 480 564"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          {/* pedestal */}
          <rect x="16" y="530" width="58" height="16" fill="#262B30" />
          {/* carcasa del motor con su rejilla de ventilación */}
          <rect x="18" y="462" width="60" height="72" rx="7" fill="#22262B" stroke="#3E454C" strokeWidth="1.5" />
          <circle cx="48" cy="492" r="13" fill="#1A1D21" stroke="#31373D" strokeWidth="2.5" />
          <path d="M48 480v24M38 486l20 12M58 486l-20 12" stroke="#31373D" strokeWidth="2" />
          {/* luz de estado: naranjo mientras corre, verde al abrir */}
          <circle className="pav-luz-n" cx="48" cy="520" r="5" fill={C.naranjo} />
          <circle className="pav-luz-v" cx="48" cy="520" r="5" fill={C.verde} />
          {/* piñón que engrana con la cremallera */}
          <g className="pav-pinion">
            {Array.from({ length: 12 }, (_, i) => (
              <rect
                key={i}
                x="96.5"
                y="526"
                width="7"
                height="11"
                rx="1.5"
                fill="#7C8790"
                transform={`rotate(${i * 30} 100 548)`}
              />
            ))}
            <circle cx="100" cy="548" r="18" fill="#59616A" />
            <circle cx="100" cy="548" r="18" fill="none" stroke="#3A4046" strokeWidth="1.5" />
            <circle cx="100" cy="548" r="6" fill="#2E3439" />
          </g>
        </svg>
      </div>

      {/* postes laterales del vano, por encima de todo */}
      <div className="absolute inset-y-0 left-0 w-[10px]" style={{ backgroundColor: '#2E3439' }} aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-[10px]" style={{ backgroundColor: '#2E3439' }} aria-hidden="true" />
    </div>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
}: {
  children: React.ReactNode
  href?: string
  tone: 'naranjo' | 'lineD' | 'lineL'
}) {
  const st: CSSProperties =
    tone === 'naranjo'
      ? { backgroundColor: C.naranjo, color: C.carbon }
      : tone === 'lineD'
        ? { border: '1.5px solid rgba(242,239,234,0.5)', color: C.hueso }
        : { border: `1.5px solid ${C.carbon}`, color: C.carbon }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} pav-btn inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base uppercase tracking-[0.05em] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function PortonesAutomaticosValdiviaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.carbon, color: C.hueso }}
    >
      <style>{`
        /* El portón se abre: la hoja corre sobre el riel con desaceleración. */
        @keyframes pav-corre { from { transform: translateX(0) } to { transform: translateX(-103%) } }
        .pav-hoja { animation: pav-corre 1.45s cubic-bezier(.3,.72,.22,1) .8s both }
        /* El piñón del motor gira mientras la hoja corre. */
        @keyframes pav-pinion { from { transform: rotate(0deg) } to { transform: rotate(-720deg) } }
        .pav-pinion { animation: pav-pinion 1.45s cubic-bezier(.3,.72,.22,1) .8s both }
        /* Luz de estado: naranjo mientras corre, verde al terminar. */
        @keyframes pav-luz-n { 0% { opacity: 0 } 14% { opacity: 1 } 84% { opacity: 1 } 100% { opacity: 0 } }
        .pav-luz-n { animation: pav-luz-n 2.4s ease .5s both }
        @keyframes pav-luz-v { from { opacity: 0 } to { opacity: 1 } }
        .pav-luz-v { animation: pav-luz-v .4s ease-out 2.45s both }

        /* Hero: entradas */
        @keyframes pav-up { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .pav-line { animation: pav-up .95s cubic-bezier(.22,.61,.2,1) both }
        @keyframes pav-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .pav-fade { animation: pav-fade .85s ease-out both }

        /* La cremallera avanza unos dientes al entrar cada tramo. */
        @supports (animation-timeline: view()) {
          .pav-rack {
            animation: pav-rackstep linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 70%;
          }
        }
        @keyframes pav-rackstep { from { transform: translateX(0) } to { transform: translateX(-60px) } }

        .pav-btn { transition: transform .18s ease, filter .18s ease }
        .pav-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .pav-btn:active { transform: translateY(0) scale(.97) }
        .pav-btn:focus-visible { outline: 3px solid ${C.naranjo}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .pav-hoja { animation: none !important; transform: translateX(-103%) }
          .pav-pinion { animation: none !important; transform: rotate(-720deg) }
          .pav-luz-n { animation: none !important; opacity: 0 }
          .pav-luz-v { animation: none !important; opacity: 1 }
          .pav-line, .pav-fade { animation: none !important }
          .pav-rack { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2">
            <span className="uppercase tracking-[0.06em]">PAV</span>
            <span
              className={`${mono.className} hidden sm:inline text-[10px] tracking-[0.18em] uppercase`}
            >
              Portones Automáticos Valdivia
            </span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Escríbenos"
        theme={{
          over: 'dark',
          bar: 'rgba(22,24,26,0.94)',
          ink: C.hueso,
          line: C.lineD,
          btnBg: C.naranjo,
          btnInk: C.carbon,
        }}
      />

      {/* ── 1 · Hero: el portón se abre ── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{ backgroundColor: C.carbon }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(760px 420px at 86% 6%, rgba(242,138,58,0.12), transparent 65%), radial-gradient(560px 380px at 4% 100%, rgba(138,75,42,0.16), transparent 60%)',
          }}
        />
        {/* escala técnica tenue de fondo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(242,239,234,0.03) 1px, transparent 1px)',
            backgroundSize: '100% 44px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-32 pb-12 md:pb-16 grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
          <div>
            <p
              className={`${mono.className} pav-fade flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.28em] mb-5 whitespace-nowrap`}
              style={{ color: C.naranjo, animationDelay: '0.1s' }}
            >
              <Icon name="pinion" className="w-4 h-4 shrink-0" />
              Valdivia · Atención 24 horas
              <span
                className="inline-block w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: C.verde }}
                aria-hidden="true"
              />
            </p>
            <h1
              className={`${display.className} uppercase leading-[1.02] tracking-[0.005em] text-[clamp(2.55rem,10vw,5.2rem)]`}
              style={{ color: C.hueso }}
            >
              <span className="block overflow-hidden">
                <span className="pav-line block" style={{ animationDelay: '0.18s' }}>
                  Tu portón,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="pav-line block" style={{ animationDelay: '0.3s', color: C.naranjo }}>
                  bajo control.
                </span>
              </span>
            </h1>
            <p
              className="pav-fade mt-4 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.mutedD, animationDelay: '0.5s' }}
            >
              Instalación, reparación y mantención de motores de corredera.
              Técnicos en {BIZ.city}, atención las 24 horas.
            </p>
            <div
              className="pav-fade mt-5 flex flex-col sm:flex-row gap-3 sm:items-center"
              style={{ animationDelay: '0.66s' }}
            >
              <BtnWa tone="naranjo">Escríbenos por WhatsApp</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} pav-btn inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base uppercase tracking-[0.05em] tap-44`}
                style={{ border: '1.5px solid rgba(242,239,234,0.5)', color: C.hueso }}
              >
                Llamar
              </a>
            </div>
            <div
              className={`${mono.className} pav-fade mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`}
              style={{ animationDelay: '0.82s', color: C.aceroD }}
            >
              <span className="flex items-center gap-2">
                <Icon name="pin" className="w-3.5 h-3.5" />
                {BIZ.sector} · {BIZ.city}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="reloj" className="w-3.5 h-3.5" />
                Abierto 24 h · todos los días
              </span>
            </div>
          </div>

          {/* la composición: el portón ilustrado que se abre sobre la foto real */}
          <figure className="pav-fade" style={{ animationDelay: '0.25s' }}>
            <PortonHero />
            <figcaption
              className={`${mono.className} mt-3 flex items-center justify-between gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.18em]`}
            >
              <span style={{ color: C.mutedD }}>Obra real · portón corredera de madera</span>
              <span style={{ color: C.naranjo }}>Motor · corredera</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · Franja cremallera ── */}
      <section aria-label="Especialidades" className="relative" style={{ backgroundColor: C.naranjo }}>
        <Cremallera tone="dark" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {['Motores de corredera', 'Reparación', 'Mantención', 'Controles', '24 horas'].map(
            (t, i) => (
              <span key={t} className="flex items-center" style={{ color: C.carbon }}>
                {i > 0 && (
                  <Icon name="pinion" className="w-3.5 h-3.5 mx-2.5 md:mx-3.5 shrink-0" />
                )}
                <span
                  className={`${display.className} text-sm md:text-base uppercase tracking-[0.1em]`}
                  style={{ color: C.carbon }}
                >
                  {t}
                </span>
              </span>
            ),
          )}
        </div>
        <Cremallera tone="dark" flip />
      </section>

      {/* ── 3 · Servicios: ficha técnica numerada ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
            <div className="min-w-0">
              <Tramo n="01" nombre="Ficha de servicios" dark />
              <Reveal>
                <h2
                  className={`${display.className} uppercase leading-[1.02] text-[clamp(2rem,6.5vw,3.8rem)]`}
                  style={{ color: C.hueso }}
                >
                  Todo el trabajo del portón,{' '}
                  <span style={{ color: C.naranjo }}>en un solo taller.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.mutedD }}>
                  Técnicos calificados para instalación, reparación y
                  mantención de tus motores de corredera. Y si el portón no
                  existe todavía, también se construye.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <figure className="mt-9 max-w-[300px]">
                  <div
                    className="overflow-hidden"
                    style={{ border: `2px solid #2E3439`, boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
                  >
                    <Image
                      src={`${IMG}/motor-instalado.webp`}
                      alt="Motor de portón corredera instalado en terreno junto a la reja"
                      width={612}
                      height={1025}
                      sizes="(min-width: 1024px) 300px, 78vw"
                      className="block w-full h-auto"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} mt-2.5 text-[9px] md:text-[10px] uppercase tracking-[0.18em]`}
                    style={{ color: C.aceroD }}
                  >
                    Motor instalado en terreno
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* el registro de servicios */}
            <Reveal delay={80} className="min-w-0">
              <ol>
                {SERVICIOS.map((s) => (
                  <li
                    key={s.n}
                    className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] gap-x-4 md:gap-x-5 gap-y-1.5 py-5 md:py-6 border-b items-start"
                    style={{ borderColor: C.lineD }}
                  >
                    <span
                      className={`${mono.className} text-xs md:text-sm font-bold tracking-[0.08em] pt-1`}
                      style={{ color: C.naranjo }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="hidden sm:flex w-10 h-10 items-center justify-center border shrink-0"
                      style={{ borderColor: C.lineD, color: C.aceroD }}
                    >
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <span
                          className={`${display.className} text-lg md:text-xl uppercase tracking-[0.04em] leading-tight`}
                          style={{ color: C.hueso }}
                        >
                          {s.t}
                        </span>
                        <span
                          className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.2em]`}
                          style={{ color: C.naranjo }}
                        >
                          {s.tag}
                        </span>
                      </span>
                      <span className="block text-sm leading-relaxed mt-1.5 max-w-xl" style={{ color: C.mutedD }}>
                        {s.d}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · ¿Tu portón falla? ── */}
      <section style={{ backgroundColor: C.hueso, color: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <Tramo n="02" nombre="Diagnóstico" dark={false} />
            <Reveal>
              <h2
                className={`${display.className} uppercase leading-[1.02] text-[clamp(2rem,6.5vw,3.8rem)]`}
                style={{ color: C.carbon }}
              >
                ¿Tu portón <span style={{ color: C.madera }}>falla?</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              {/* los síntomas, como fallas registradas */}
              <ul className="mt-7">
                {FALLAS.map((f) => (
                  <li
                    key={f.n}
                    className="flex items-baseline gap-4 py-2.5 border-b"
                    style={{ borderColor: C.lineL }}
                  >
                    <span className={`${mono.className} text-xs font-bold shrink-0`} style={{ color: C.madera }}>
                      {f.n}
                    </span>
                    <span className="text-sm md:text-base" style={{ color: C.mutedL }}>
                      {f.t}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <blockquote className="mt-8 border-l-[3px] pl-5" style={{ borderColor: C.naranjo }}>
                <p
                  className={`${display.className} text-xl md:text-2xl uppercase leading-[1.15] tracking-[0.02em]`}
                  style={{ color: C.carbon }}
                >
                  «No siempre es necesario cambiar todo el sistema.»
                </p>
                <p className="mt-3 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutedL }}>
                  Una revisión técnica permite identificar la falla: a veces
                  el arreglo es menor de lo que parece.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8">
                <BtnWa tone="lineL" href={WA_FALLA}>
                  Pedir revisión por WhatsApp
                </BtnWa>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <figure className="max-w-[400px] lg:justify-self-end lg:ml-auto">
              <div
                className="overflow-hidden"
                style={{ border: `2px solid ${C.carbon}`, boxShadow: '10px 10px 0 rgba(138,75,42,0.28)' }}
              >
                <Image
                  src={`${IMG}/motor-reparacion.webp`}
                  alt="Motor de portón abierto en reparación sobre la mesa del taller"
                  width={719}
                  height={862}
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="block w-full h-auto"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-3 text-[9px] md:text-[10px] uppercase tracking-[0.18em]`}
                style={{ color: C.acero }}
              >
                Reparación en taller · motor abierto
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Cómo se elige el motor ── */}
      <section style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Tramo n="03" nombre="El motor correcto" dark />
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
            <Reveal>
              <h2
                className={`${display.className} uppercase leading-[1.02] text-[clamp(2rem,6.5vw,3.8rem)]`}
                style={{ color: C.hueso }}
              >
                El motor no se elige{' '}
                <span style={{ color: C.naranjo }}>solo por el peso.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                Cinco criterios que revisan antes de recomendar un motor.
                Así lo explican en sus publicaciones.
              </p>
            </Reveal>
          </div>

          {/* la tabla de criterios */}
          <div
            className="border-t-[3px]"
            style={{ borderColor: C.naranjo }}
          >
            <div
              className="px-5 md:px-6 py-2.5 flex items-center justify-between border-b"
              style={{ backgroundColor: C.panel, borderColor: C.lineD }}
            >
              <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.aceroD }}>
                Tabla de selección · corredera
              </p>
              <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.naranjo }}>
                05 criterios
              </p>
            </div>
            <ol>
              {CRITERIOS.map((c, i) => (
                <Reveal key={c.n} delay={i * 60}>
                  <li
                    className="grid grid-cols-[auto_auto_1fr] items-center gap-x-4 md:gap-x-6 px-5 md:px-6 py-4 md:py-5 border-b"
                    style={{ borderColor: C.lineD }}
                  >
                    <span className={`${mono.className} text-xs md:text-sm font-bold tracking-[0.08em]`} style={{ color: C.naranjo }}>
                      {c.n}
                    </span>
                    <span
                      className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border shrink-0"
                      style={{ borderColor: C.lineD, color: C.hueso }}
                    >
                      <Icon name={c.icon} className="w-5 h-5" />
                    </span>
                    <span className="grid md:grid-cols-[190px_1fr] gap-x-6 gap-y-0.5 items-baseline">
                      <span
                        className={`${display.className} text-base md:text-lg uppercase tracking-[0.05em] leading-tight`}
                        style={{ color: C.hueso }}
                      >
                        {c.t}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: C.mutedD }}>
                        {c.d}
                      </span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 6 · Trabajos: la cremallera abre la sección ── */}
      <section id="trabajos" className="scroll-mt-20" style={{ backgroundColor: C.hueso, color: C.carbon }}>
        <Cremallera tone="light" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Tramo n="04" nombre="Trabajos reales" dark={false} />
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
            <Reveal>
              <h2
                className={`${display.className} uppercase leading-[1.02] text-[clamp(2rem,6.5vw,3.8rem)]`}
                style={{ color: C.carbon }}
              >
                Fierro, reja y madera,{' '}
                <span style={{ color: C.madera }}>motor incluido.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                Portones armados, montados y automatizados por ellos mismos.
                Fotos de sus publicaciones.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
            {TRABAJOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 80} className={`col-span-2 sm:col-span-1 ${f.cls}`}>
                <figure>
                  <div
                    className={`overflow-hidden ${f.aspect}`}
                    style={{ border: `2px solid ${C.carbon}` }}
                  >
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={f.w}
                      height={f.h}
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="block w-full h-full object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} mt-2.5 text-[9px] md:text-[10px] uppercase tracking-[0.16em] flex items-center gap-2`}
                    style={{ color: C.acero }}
                  >
                    <Icon name="pinion" className="w-3 h-3 shrink-0" />
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            {/* la placa con su publicación textual */}
            <Reveal delay={180} className="col-span-2 md:col-span-4 md:mt-10">
              <div
                className="h-full min-h-[220px] p-6 md:p-7 flex flex-col justify-between"
                style={{ backgroundColor: C.carbon, color: C.hueso }}
              >
                <Icon name="pinion" className="w-6 h-6" />
                <div>
                  <p className={`${display.className} text-lg md:text-xl uppercase leading-[1.2] tracking-[0.02em]`}>
                    «Construcción, montaje y automatización: portón fierro 5 metros con motor rápido.»
                  </p>
                  <p className={`${mono.className} mt-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.naranjo }}>
                    De sus publicaciones · Facebook
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7 · Casa, condominio o comercio ── */}
      <section style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <Tramo n="05" nombre="Dónde trabaja el portón" dark />
            <Reveal>
              <h2
                className={`${display.className} uppercase leading-[1.02] text-[clamp(2rem,6.5vw,3.8rem)]`}
                style={{ color: C.hueso }}
              >
                Casa, condominio{' '}
                <span style={{ color: C.naranjo }}>o comercio.</span>
              </h2>
            </Reveal>
            <div className="mt-9">
              {[
                {
                  icon: 'casa',
                  k: 'Casa',
                  d: 'El portón de todos los días: abre al llegar, cierra al salir, con un control para cada uno.',
                },
                {
                  icon: 'edificio',
                  k: 'Condominio',
                  d: 'Acceso compartido: un motor pensado para el uso frecuente y controles ordenados entre todos.',
                },
                {
                  icon: 'local',
                  k: 'Comercio',
                  d: 'El acceso trabaja toda la jornada: apertura y cierre sin bajar del auto.',
                },
              ].map((b, i) => (
                <Reveal key={b.k} delay={i * 90}>
                  <div
                    className="flex gap-4 md:gap-5 py-5 border-b items-start"
                    style={{ borderColor: C.lineD }}
                  >
                    <span
                      className="w-11 h-11 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: C.panel, color: C.naranjo, border: `1px solid ${C.lineD}` }}
                    >
                      <Icon name={b.icon} className="w-5 h-5" />
                    </span>
                    <span>
                      <span
                        className={`${display.className} block text-lg md:text-xl uppercase tracking-[0.06em]`}
                        style={{ color: C.hueso }}
                      >
                        {b.k}
                      </span>
                      <span className="block text-sm md:text-base leading-relaxed mt-1 max-w-lg" style={{ color: C.mutedD }}>
                        {b.d}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={140}>
            <figure>
              <div
                className="overflow-hidden"
                style={{ border: `2px solid #2E3439`, boxShadow: '0 18px 44px rgba(0,0,0,0.45)' }}
              >
                <Image
                  src={`${IMG}/motor-comercial.webp`}
                  alt="Motor de portón corredera instalado en un acceso comercial, sobre piso con línea amarilla"
                  width={1080}
                  height={905}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="block w-full h-auto"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-2.5 flex items-center justify-between gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.18em]`}
              >
                <span style={{ color: C.aceroD }}>Motor en acceso comercial</span>
                <span style={{ color: C.naranjo }}>Uso frecuente</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Zona y horario ── */}
      <section id="zona" className="scroll-mt-20" style={{ backgroundColor: C.hueso, color: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <Tramo n="06" nombre="Zona y horario" dark={false} />
            <Reveal>
              <h2
                className={`${display.className} uppercase leading-[1.02] text-[clamp(2rem,6.5vw,3.8rem)]`}
                style={{ color: C.carbon }}
              >
                {BIZ.sector}, {BIZ.city}.{' '}
                <span style={{ color: C.madera }}>A cualquier hora.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.mutedL }}>
                Atienden en terreno: escribes por WhatsApp, cuentas qué pasa
                con tu portón y coordinan la visita a tu casa, condominio o
                local.
              </p>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.madera, textDecorationColor: 'rgba(138,75,42,0.35)' }}
              >
                Más de 4 mil seguidores en Facebook →
              </a>
            </Reveal>
          </div>
          <Reveal delay={140} className="min-w-0">
            {/* la ficha de atención, con borde de cremallera arriba */}
            <div style={{ border: `2px solid ${C.carbon}`, backgroundColor: '#FFFFFF' }}>
              <Cremallera tone="light" />
              <dl className="px-6 md:px-8 py-2">
                {[
                  { k: 'UBICACIÓN', v: `${BIZ.sector} · ${BIZ.city}`, d: BIZ.region },
                  { k: 'HORARIO', v: 'Abierto 24 horas', d: 'Todos los días', hot: true },
                  { k: 'ATENCIÓN', v: 'En terreno', d: 'La visita se coordina por WhatsApp' },
                  { k: 'CONTACTO', v: BIZ.phoneDisplay, d: 'WhatsApp y llamadas' },
                ].map((f) => (
                  <div
                    key={f.k}
                    className="grid grid-cols-[104px_1fr] sm:grid-cols-[130px_1fr] gap-3 py-4 border-b items-baseline last:border-b-0"
                    style={{ borderColor: C.lineL }}
                  >
                    <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.acero }}>
                      {f.k}
                    </dt>
                    <dd>
                      <span
                        className={`${display.className} block text-lg md:text-xl uppercase tracking-[0.04em] leading-tight`}
                        style={{ color: f.hot ? C.madera : C.carbon }}
                      >
                        {f.v}
                      </span>
                      <span className="block text-xs md:text-sm mt-0.5" style={{ color: C.mutedL }}>
                        {f.d}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · Cierre: el portón responde ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.pozo }}>
        {/* riel de fondo con la luz en verde al final del recorrido */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[90px] opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(420px 120px at 50% 100%, rgba(87,176,108,0.14), transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p
              className={`${mono.className} flex items-center justify-center gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] mb-5`}
              style={{ color: C.verde }}
            >
              <Icon name="pinion" className="w-4 h-4" />
              Luz verde · el portón responde
            </p>
            <h2
              className={`${display.className} uppercase leading-[1.02] text-[clamp(2.4rem,8.5vw,4.6rem)]`}
              style={{ color: C.hueso }}
            >
              ¿Tu portón{' '}
              <span style={{ color: C.naranjo }}>necesita motor?</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
              Escríbeles por WhatsApp, cuéntales qué pasa y coordinan la
              visita en {BIZ.city}. Atienden las 24 horas.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <BtnWa tone="naranjo">Escríbenos por WhatsApp</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase tracking-[0.05em] text-2xl md:text-3xl tap-44 underline underline-offset-8 decoration-2`}
                style={{ color: C.hueso, textDecorationColor: C.naranjo }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.pozo, color: C.hueso }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="flex items-center gap-3.5">
              {/* el logo lleva fondo blanco: va en su círculo claro */}
              <span
                className="w-11 h-11 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.lineD}` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 object-contain" aria-hidden="true" />
              </span>
              <div>
                <p className={`${display.className} uppercase tracking-[0.05em] text-base md:text-lg leading-tight`}>
                  {BIZ.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: C.mutedD }}>
                  {BIZ.legal} · {BIZ.sector}, {BIZ.city} · 24 h
                </p>
              </div>
            </div>
            <nav
              className={`${mono.className} flex flex-wrap gap-x-5 gap-y-1.5 text-[10px] uppercase tracking-[0.16em]`}
              aria-label="Pie"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.verde }}>
                WhatsApp
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Facebook
              </a>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Instagram
              </a>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3.5 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(242,239,234,0.55)' }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.hueso }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}, {BIZ.rubro.toLowerCase()}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.naranjo }}
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
