import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Scan } from './scan'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, MARCAS, REVIEWS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// De su logo y del laboratorio: negro grafito, gris acero,
// el naranja JJ, el dorado de la manzana y el verde de OK.
const C = {
  grafito: '#0C0C0E',
  carbon: '#111318',
  acero: '#1D1F24',
  panel: '#16181D',
  naranja: '#FF8A00',
  naranjaInk: '#A34B00', // pasa 4.5:1 sobre papel
  dorado: '#FFC21A',
  verde: '#3DDC84',
  papel: '#EEF0F3',
  papelSoft: '#E2E5EA',
  tinta: '#15171B',
  blanco: '#F5F6F8',
  mutedD: 'rgba(245,246,248,0.7)',
  mutedD2: 'rgba(245,246,248,0.55)',
  mutedL: 'rgba(21,23,27,0.68)',
  lineD: 'rgba(245,246,248,0.14)',
  lineL: 'rgba(21,23,27,0.16)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'jj-cell-concepcion',
  title: 'JJ Cell Concepción · Servicio técnico Apple y smartphones en Concepción',
  description:
    'Servicio técnico premium en Colo Colo 805, Concepción. Especialistas en iPhone, iPad, MacBook y smartphones de alta gama: pantallas, baterías, placas y más. 4,8 en Google con 888 opiniones.',
  image: '/demos/jj-cell-concepcion/recepcion.webp',
})

const NAV_LINKS = [
  { label: 'Reparaciones', href: '#servicios' },
  { label: 'Seminuevos', href: '#seminuevos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#donde' },
]

/** Rótulo de sección tipo plano: número de figura + línea técnica. */
function Rotulo({ n, children, dark = true }: { n: string; children: React.ReactNode; dark?: boolean }) {
  const ink = dark ? C.naranja : C.naranjaInk
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.26em] mb-5`}
      style={{ color: dark ? C.mutedD : C.mutedL }}
    >
      <span
        className="inline-block h-[9px] w-[9px] shrink-0 rounded-[2px]"
        style={{ backgroundColor: ink, boxShadow: `0 0 10px ${ink}` }}
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
  tone: 'naranja' | 'line' | 'tinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'naranja'
      ? { backgroundColor: C.naranja, color: C.grafito }
      : tone === 'tinta'
        ? { backgroundColor: C.tinta, color: C.papel }
        : { border: '1.5px solid rgba(245,246,248,0.45)', color: C.blanco }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="jj-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/* ── Iconos de banco de trabajo, trazo único ── */
function Ic({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    diagnostico: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M15.8 15.8 L20.5 20.5" />
        <path d="M7.6 11h1.6l1-2.1 1.7 4.2 1.1-2.1h1.5" />
      </>
    ),
    pantalla: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2.4" />
        <path d="M10 6.2h4" />
        <path d="M10.5 18.2h3" />
      </>
    ),
    bateria: (
      <>
        <rect x="2.8" y="8" width="15.6" height="8.6" rx="2.2" />
        <path d="M21.2 10.8v2.8" />
        <path d="M11 9.6l-2.1 3h2.2l-1 2.4 3.3-3.2h-2.3l1-2.2z" />
      </>
    ),
    placa: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.6" />
        <rect x="10.2" y="10.2" width="3.6" height="3.6" rx="0.8" />
        <path d="M9.5 3.5v2M12 3.5v2M14.5 3.5v2M9.5 18.5v2M12 18.5v2M14.5 18.5v2M3.5 9.5h2M3.5 12h2M3.5 14.5h2M18.5 9.5h2M18.5 12h2M18.5 14.5h2" />
      </>
    ),
    laser: (
      <>
        <rect x="6.5" y="6" width="9.5" height="15" rx="2.4" />
        <rect x="8.8" y="8.4" width="4.4" height="4.4" rx="1.4" />
        <path d="M15.5 2.6l3 1.4M17.4 6.4l2.6 2.1M14.4 4.2l.6 2.4" />
      </>
    ),
    camara: (
      <>
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M12 3.4v1.8M18.6 7.2l-1.5 1" />
      </>
    ),
    flex: (
      <>
        <rect x="7.5" y="9.5" width="9" height="5.4" rx="1.6" />
        <path d="M10.4 9.5V7.8M13.6 9.5V7.8" />
        <path d="M12 14.9v2.6c0 1.9 3 1.9 4.4 1.9" />
      </>
    ),
    bano: (
      <>
        <path d="M12 3.6s5.4 5.8 5.4 9.4a5.4 5.4 0 0 1-10.8 0C6.6 9.4 12 3.6 12 3.6z" />
        <path d="M4 19.6c1.6-1 3.4-1 5 0s3.4 1 5 0 3.4-1 5 0" />
      </>
    ),
    memoria: (
      <>
        <rect x="5" y="6" width="14" height="9.4" rx="1.6" />
        <path d="M8 6V4.4M12 6V4.4M16 6V4.4" />
        <path d="M12 18.6v2.2M12 18.6l-2-2M12 18.6l2-2" />
      </>
    ),
    watch: (
      <>
        <rect x="7.6" y="7" width="8.8" height="10.4" rx="2.6" />
        <path d="M10 7V4.2M14 7V4.2M10 17.4v2.8M14 17.4v2.8" />
        <path d="M17.6 10.4h1.2" />
      </>
    ),
    hidrogel: (
      <>
        <rect x="6.6" y="3.4" width="10.8" height="17.2" rx="2.2" />
        <path d="M13.4 3.4c0 2.2 1.6 3.4 4 3.4" />
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
    check: <path d="M4 12.5 L9.5 18 L20 6.5" />,
    cambio: (
      <>
        <path d="M4 7h13l-3-3M20 17H7l3 3" />
      </>
    ),
    escudo: (
      <>
        <path d="M12 3.2l7 2.6v5.4c0 4.6-3 7.7-7 9.6-4-1.9-7-5-7-9.6V5.8z" />
        <path d="M9 11.8l2.2 2.2 4-4.2" />
      </>
    ),
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

const SERVICIOS = [
  {
    n: 'R-01',
    icon: 'diagnostico',
    name: 'Diagnóstico',
    desc: 'Rápido y preciso: primero se encuentra la falla, después se cotiza.',
  },
  {
    n: 'R-02',
    icon: 'pantalla',
    name: 'Cambio de pantalla',
    desc: 'Vidrio y display nuevos, con el brillo y el tacto de siempre.',
  },
  {
    n: 'R-03',
    icon: 'bateria',
    name: 'Cambio de batería',
    desc: 'Tu equipo vuelve a durar el día completo.',
  },
  {
    n: 'R-04',
    icon: 'placa',
    name: 'Placas y conectores',
    desc: 'Códec de audio, IC de carga, señal, wifi, parlantes, imagen y equipo apagado.',
  },
  {
    n: 'R-05',
    icon: 'laser',
    name: 'Tapa trasera con láser',
    desc: 'Se retira el vidrio trizado con máquina láser y queda como nueva.',
  },
  {
    n: 'R-06',
    icon: 'camara',
    name: 'Cámaras y lentes',
    desc: 'Lente de cámara y módulos de cámara, frontal y trasera.',
  },
  {
    n: 'R-07',
    icon: 'flex',
    name: 'Flex de carga',
    desc: 'El conector que no carga o no reconoce el cable.',
  },
  {
    n: 'R-08',
    icon: 'bano',
    name: 'Baño químico',
    desc: 'Limpieza profunda para equipos mojados o con sulfato.',
  },
  {
    n: 'R-09',
    icon: 'memoria',
    name: 'Ampliación de memoria',
    desc: 'Más espacio para fotos y archivos en tu equipo.',
  },
] as const

const PASOS = [
  { n: '01', t: 'Diagnóstico', d: 'Revisamos tu equipo y encontramos la falla exacta.' },
  { n: '02', t: 'Cotización', d: 'Te explicamos qué tiene y cuánto sale arreglarlo, sin tecnicismos.' },
  { n: '03', t: 'Reparación', d: 'Trabajamos en la mesa con repuestos que conservan la calidad original.' },
  { n: '04', t: 'Entrega', d: 'Tu equipo vuelve probado y funcionando, como debe ser.' },
] as const

/**
 * El teléfono del hero: aparece armado, sus capas se separan en vista
 * explotada con líneas guía y rótulos, vuelven a encajar y prende el
 * punto verde LISTO. Solo transform/opacity; todo en un loop de 7,4 s.
 */
function ExplodedPhone() {
  const stroke = 'rgba(245,246,248,0.45)'
  const fill = '#1A1D23'
  return (
    <svg
      viewBox="0 0 360 500"
      className="block w-full h-full"
      role="img"
      aria-label="Diagrama ilustrativo: un teléfono se desarma en capas (pantalla, placa, batería y tapa) y vuelve a armarse"
    >
      <defs>
        <linearGradient id="jjdsp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#13293A" />
          <stop offset="1" stopColor="#0C1016" />
        </linearGradient>
        <linearGradient id="jjscr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(255,138,0,0.28)" />
          <stop offset="0.55" stopColor="rgba(255,138,0,0.06)" />
          <stop offset="1" stopColor="rgba(255,194,26,0.14)" />
        </linearGradient>
      </defs>

      {/* eje del despiece */}
      <g className="jj-guides" opacity="0" stroke="rgba(245,246,248,0.3)" strokeWidth="1" strokeDasharray="2 6">
        <line x1="114" y1="70" x2="114" y2="446" />
        <line x1="246" y1="70" x2="246" y2="446" />
      </g>

      {/* el teléfono armado (fantasma mientras está desarmado) */}
      <g className="jj-body">
        <rect x="114" y="170" width="132" height="260" rx="24" fill="#14161B" stroke={stroke} strokeWidth="1.6" />
        <rect x="122" y="178" width="116" height="244" rx="17" fill="#0E1116" stroke="rgba(245,246,248,0.16)" strokeWidth="1" />
        <rect x="122" y="178" width="116" height="244" rx="17" fill="url(#jjscr)" className="jj-scr" opacity="0.3" />
        <rect x="164" y="185" width="32" height="4.5" rx="2.2" fill="rgba(245,246,248,0.3)" />
        <circle cx="224" cy="187" r="3" fill={C.naranja} />
        <rect x="140" y="212" width="80" height="5" rx="2.5" fill="rgba(245,246,248,0.09)" />
        <rect x="152" y="226" width="56" height="5" rx="2.5" fill="rgba(245,246,248,0.07)" />
      </g>

      {/* capas del despiece: parten escondidas en el centro (180,300) */}
      {/* PANTALLA */}
      <g className="jj-piece jj-p1">
        <rect x="-75" y="-26" width="150" height="52" rx="10" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <rect x="-68" y="-19" width="136" height="38" rx="7" fill="url(#jjdsp)" stroke="rgba(245,246,248,0.14)" strokeWidth="1" />
        <circle cx="-56" cy="0" r="4.5" fill="#0C0C0E" stroke="rgba(245,246,248,0.3)" strokeWidth="1" />
        <rect x="-42" y="-11" width="76" height="4" rx="2" fill="rgba(245,246,248,0.14)" />
        <rect x="-42" y="-1" width="56" height="4" rx="2" fill="rgba(245,246,248,0.1)" />
        <rect x="-42" y="9" width="66" height="4" rx="2" fill="rgba(255,138,0,0.35)" />
      </g>
      {/* PLACA */}
      <g className="jj-piece jj-p2">
        <rect x="-75" y="-24" width="150" height="48" rx="9" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <rect x="-58" y="-13" width="26" height="26" rx="3" fill="#2A303B" />
        <rect x="-24" y="-9" width="18" height="18" rx="2.5" fill="#2A303B" />
        <rect x="6" y="-14" width="30" height="28" rx="3" fill={C.naranja} opacity="0.9" />
        <path d="M-58 -13 v-5 M-45 -13 v-5 M-32 -13 v-5 M6 -14 v-6 M21 -14 v-6 M36 -14 v-6" stroke="#3A4150" strokeWidth="2" />
        <path d="M48 -18 h16 M48 -10 h16 M48 -2 h16 M48 6 h16 M48 14 h10" stroke={C.dorado} strokeWidth="2.4" />
      </g>
      {/* BATERÍA */}
      <g className="jj-piece jj-p3">
        <rect x="-75" y="-30" width="150" height="60" rx="11" fill="#22262E" stroke={stroke} strokeWidth="1.5" />
        <rect x="-16" y="-36" width="32" height="7" rx="3" fill="#22262E" stroke={stroke} strokeWidth="1.2" />
        <path d="M-56 -16 h122 M-56 0 h122 M-56 16 h122" stroke="rgba(245,246,248,0.1)" strokeWidth="1.5" />
        <path d="M3 -11 L-6 3 h7 l-3 9 9 -12 h-7 z" fill={C.dorado} />
      </g>
      {/* TAPA */}
      <g className="jj-piece jj-p4">
        <rect x="-75" y="-23" width="150" height="46" rx="11" fill="#262A32" stroke={stroke} strokeWidth="1.5" />
        <rect x="-63" y="-14" width="34" height="29" rx="9" fill="#1B1E25" stroke="rgba(245,246,248,0.22)" strokeWidth="1" />
        <circle cx="-55" cy="-5" r="5.5" fill="#0C0C0E" stroke="rgba(245,246,248,0.4)" strokeWidth="1.2" />
        <circle cx="-39" cy="6" r="5.5" fill="#0C0C0E" stroke="rgba(245,246,248,0.4)" strokeWidth="1.2" />
        <circle cx="-55" cy="6" r="1.8" fill={C.dorado} />
        <path d="M20 -6 h44 M20 4 h30" stroke="rgba(245,246,248,0.16)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* rótulos del despiece */}
      <g className={`${mono.className} jj-t1`} opacity="0">
        <line x1="96" y1="100" x2="104" y2="100" stroke="rgba(245,246,248,0.5)" strokeWidth="1" />
        <text x="90" y="104" textAnchor="end" fontSize="11" letterSpacing="1.5" fill="rgba(245,246,248,0.8)">PANTALLA</text>
      </g>
      <g className={`${mono.className} jj-t2`} opacity="0">
        <line x1="96" y1="208" x2="104" y2="208" stroke="rgba(245,246,248,0.5)" strokeWidth="1" />
        <text x="90" y="212" textAnchor="end" fontSize="11" letterSpacing="1.5" fill="rgba(245,246,248,0.8)">PLACA</text>
      </g>
      <g className={`${mono.className} jj-t3`} opacity="0">
        <line x1="256" y1="286" x2="264" y2="286" stroke="rgba(245,246,248,0.5)" strokeWidth="1" />
        <text x="270" y="290" textAnchor="start" fontSize="11" letterSpacing="1.5" fill="rgba(245,246,248,0.8)">BATERÍA</text>
      </g>
      <g className={`${mono.className} jj-t4`} opacity="0">
        <line x1="256" y1="398" x2="264" y2="398" stroke="rgba(245,246,248,0.5)" strokeWidth="1" />
        <text x="270" y="402" textAnchor="start" fontSize="11" letterSpacing="1.5" fill="rgba(245,246,248,0.8)">TAPA</text>
      </g>

      {/* punto de estado final */}
      <g className="jj-listo" opacity="0">
        <circle cx="152" cy="466" r="8" fill={C.verde} opacity="0.22" />
        <circle cx="152" cy="466" r="3.6" fill={C.verde} />
        <text x="164" y="470" fontSize="10.5" letterSpacing="2" fill={C.verde} className={mono.className}>LISTO</text>
      </g>
    </svg>
  )
}

/** Placa de foto con rótulo mono tipo ficha técnica. */
function Plate({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  tag,
  caption,
  position,
}: {
  src: string
  alt: string
  ratio?: string
  tag: string
  caption?: string
  position?: string
}) {
  return (
    <figure className="group overflow-hidden rounded-xl" style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.acero }}>
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
      <figcaption className="px-4 md:px-5 py-3.5 flex items-baseline justify-between gap-3">
        <span className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.naranja }}>
          {tag}
        </span>
        {caption && (
          <span className="text-[11px] text-right leading-snug" style={{ color: C.mutedD }}>
            {caption}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

export default function JjCellPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.grafito, color: C.blanco }}
    >
      <style>{`
        /* El texto del hero entra en cascada. */
        @keyframes jj-rise { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: none } }
        .jj-rise { animation: jj-rise 0.8s cubic-bezier(.22,.61,.2,1) both }

        /* Desarmado y armado: loop de 7,4 s. */
        .jj-body { animation: jj-body 7.4s ease-in-out infinite }
        @keyframes jj-body {
          0%, 11% { opacity: 1 }
          23%, 57% { opacity: 0.1 }
          70%, 100% { opacity: 1 }
        }
        .jj-scr { animation: jj-scr 7.4s ease-in-out infinite }
        @keyframes jj-scr {
          0%, 72% { opacity: 0.3 }
          82%, 92% { opacity: 0.75 }
          100% { opacity: 0.3 }
        }
        .jj-piece { transform: translate(180px, 300px); opacity: 0 }
        @keyframes jj-p1 {
          0%, 9% { transform: translate(180px,300px); opacity: 0 }
          25%, 55% { transform: translate(180px,100px); opacity: 1 }
          64% { transform: translate(180px,300px); opacity: 1 }
          72%, 100% { transform: translate(180px,300px); opacity: 0 }
        }
        @keyframes jj-p2 {
          0%, 11% { transform: translate(180px,300px); opacity: 0 }
          27%, 57% { transform: translate(180px,208px); opacity: 1 }
          66% { transform: translate(180px,300px); opacity: 1 }
          74%, 100% { transform: translate(180px,300px); opacity: 0 }
        }
        @keyframes jj-p3 {
          0%, 13% { transform: translate(180px,300px); opacity: 0 }
          29%, 59% { transform: translate(180px,286px); opacity: 1 }
          68% { transform: translate(180px,300px); opacity: 1 }
          76%, 100% { transform: translate(180px,300px); opacity: 0 }
        }
        @keyframes jj-p4 {
          0%, 15% { transform: translate(180px,300px); opacity: 0 }
          31%, 61% { transform: translate(180px,398px); opacity: 1 }
          70% { transform: translate(180px,300px); opacity: 1 }
          78%, 100% { transform: translate(180px,300px); opacity: 0 }
        }
        .jj-p1 { animation: jj-p1 7.4s cubic-bezier(.45,.05,.2,1) infinite }
        .jj-p2 { animation: jj-p2 7.4s cubic-bezier(.45,.05,.2,1) infinite }
        .jj-p3 { animation: jj-p3 7.4s cubic-bezier(.45,.05,.2,1) infinite }
        .jj-p4 { animation: jj-p4 7.4s cubic-bezier(.45,.05,.2,1) infinite }

        .jj-guides { animation: jj-guides 7.4s ease-in-out infinite }
        @keyframes jj-guides {
          0%, 18% { opacity: 0 }
          30%, 55% { opacity: 0.8 }
          66%, 100% { opacity: 0 }
        }
        .jj-t1, .jj-t2, .jj-t3, .jj-t4 { opacity: 0 }
        @keyframes jj-t1 { 0%,20% {opacity:0} 30%,57% {opacity:1} 64%,100% {opacity:0} }
        @keyframes jj-t2 { 0%,23% {opacity:0} 33%,58% {opacity:1} 65%,100% {opacity:0} }
        @keyframes jj-t3 { 0%,26% {opacity:0} 36%,59% {opacity:1} 66%,100% {opacity:0} }
        @keyframes jj-t4 { 0%,29% {opacity:0} 39%,60% {opacity:1} 67%,100% {opacity:0} }
        .jj-t1 { animation: jj-t1 7.4s ease-in-out infinite }
        .jj-t2 { animation: jj-t2 7.4s ease-in-out infinite }
        .jj-t3 { animation: jj-t3 7.4s ease-in-out infinite }
        .jj-t4 { animation: jj-t4 7.4s ease-in-out infinite }

        .jj-listo { transform-box: fill-box; transform-origin: center; animation: jj-listo 7.4s cubic-bezier(.3,1.4,.4,1) infinite }
        @keyframes jj-listo {
          0%, 73% { opacity: 0; transform: scale(0.4) }
          80% { opacity: 1; transform: scale(1.18) }
          85%, 93% { opacity: 1; transform: scale(1) }
          98%, 100% { opacity: 0; transform: scale(1) }
        }

        /* Barrido láser de las tarjetas de servicio. */
        .jj-scan { position: relative; opacity: 0; transform: translateY(22px); transition: opacity .7s cubic-bezier(.25,.1,.25,1), transform .7s cubic-bezier(.25,.1,.25,1) }
        .jj-scan.jj-on { opacity: 1; transform: none }
        .jj-laser { position: absolute; top: 0; left: 0; right: 0; height: 2px; pointer-events: none; opacity: 0;
          background: linear-gradient(90deg, transparent 0%, ${C.naranja} 35%, #FFE3B0 50%, ${C.naranja} 65%, transparent 100%);
          box-shadow: 0 0 14px 2px rgba(255,138,0,0.55); transform: translateX(-103%) }
        .jj-on .jj-laser { animation: jj-sweep 0.95s cubic-bezier(.4,0,.2,1) both }
        @keyframes jj-sweep {
          0% { transform: translateX(-103%); opacity: 0 }
          12% { opacity: 1 }
          85% { opacity: 1 }
          100% { transform: translateX(103%); opacity: 0 }
        }

        .jj-btn { transition: transform .18s ease, filter .18s ease }
        .jj-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .jj-btn:active { transform: scale(.97) }
        .jj-page a:focus-visible { outline: 3px solid ${C.naranja}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .jj-rise, .jj-body, .jj-scr, .jj-p1, .jj-p2, .jj-p3, .jj-p4,
          .jj-guides, .jj-t1, .jj-t2, .jj-t3, .jj-t4, .jj-listo { animation: none !important }
          .jj-guides { opacity: .5 }
          .jj-t1, .jj-t2, .jj-t3, .jj-t4 { opacity: 1 }
          .jj-listo { opacity: 1; transform: none }
          .jj-scr { opacity: .5 }
          .jj-scan { opacity: 1; transform: none }
          .jj-laser { display: none }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="uppercase tracking-wide" style={{ color: C.blanco }}>
            JJ <span style={{ color: C.naranja }}>Cell</span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(12,12,14,0.94)',
          ink: C.blanco,
          line: C.lineD,
          btnBg: C.naranja,
          btnInk: C.grafito,
        }}
      />

      <div className="jj-page">
        {/* ── 1 · Hero: el teléfono que se desarma y se arma ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
          {/* retícula de plano técnico */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(245,246,248,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(245,246,248,0.035) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-32 pb-8 md:pb-16 grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
            <div>
              <p
                className={`${mono.className} jj-rise flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.26em] mb-5`}
                style={{ color: C.mutedD, animationDelay: '0.1s' }}
              >
                <span className="inline-block h-[9px] w-[9px] rounded-[2px]" style={{ backgroundColor: C.naranja, boxShadow: `0 0 10px ${C.naranja}` }} aria-hidden="true" />
                Servicio técnico · Colo Colo 805 · Concepción
              </p>
              <h1
                className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.02em] text-[clamp(2.5rem,10.5vw,4.6rem)]`}
                style={{ color: C.blanco }}
              >
                <span className="block overflow-hidden">
                  <span className="jj-rise block" style={{ animationDelay: '0.22s' }}>
                    Tecnología en
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="jj-rise block" style={{ animationDelay: '0.36s', color: C.naranja }}>
                    buenas manos.
                  </span>
                </span>
              </h1>
              <p
                className="jj-rise mt-4 max-w-md text-[15px] md:text-lg leading-relaxed"
                style={{ color: C.mutedD, animationDelay: '0.5s' }}
              >
                Especialistas en iPhone, iPad, MacBook y smartphones de
                alta gama. Pantallas, baterías, placas y mucho más.
              </p>
              <div className="jj-rise mt-5 flex flex-wrap gap-3" style={{ animationDelay: '0.62s' }}>
                <Btn href={WA_LINK} tone="naranja">
                  Cotiza por WhatsApp
                </Btn>
                <Btn href={`tel:${BIZ.phoneTel}`} tone="line" external={false}>
                  Llamar
                </Btn>
              </div>
              <div className="jj-rise mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5" style={{ animationDelay: '0.74s' }}>
                <Stars value={BIZ.ratingValue} color={C.dorado} size={16} />
                <span className="text-sm font-semibold" style={{ color: C.blanco }}>
                  {BIZ.rating} en Google
                </span>
                <span className="text-sm" style={{ color: C.mutedD }}>
                  · {BIZ.reviews} opiniones
                </span>
              </div>
            </div>

            {/* banco de trabajo: el despiece junto a la recepción real */}
            <div className="jj-rise" style={{ animationDelay: '0.45s' }}>
              <div
                className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px]"
                style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.carbon }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(245,246,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,246,248,0.05) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                  aria-hidden="true"
                />
                <ExplodedPhone />
                <p className={`${mono.className} absolute top-3 left-4 text-[9px] font-semibold uppercase tracking-[0.24em]`} style={{ color: C.mutedD2 }}>
                  Fig. 01
                </p>
                <p className={`${mono.className} absolute top-3 right-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-right`} style={{ color: C.mutedD2 }}>
                  Despiece
                </p>
              </div>
              <figure
                className="relative mt-3 overflow-hidden rounded-xl h-[150px] md:h-[190px]"
                style={{ border: `1.5px solid ${C.lineD}` }}
              >
                <Image
                  src={`${IMG}/recepcion.webp`}
                  alt="La recepción de JJ Cell Concepción: mesón gris moderno con su logo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 55%' }}
                />
                <figcaption
                  className={`${mono.className} absolute bottom-0 inset-x-0 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.22em]`}
                  style={{ color: 'rgba(245,246,248,0.85)', background: 'linear-gradient(0deg, rgba(12,12,14,0.75), transparent)' }}
                >
                  La recepción · Colo Colo 805
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── 2 · Franja de marcas ── */}
        <div className="border-y" style={{ backgroundColor: C.carbon, borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.24em]`} style={{ color: C.naranja }}>
              Reparamos
            </span>
            {MARCAS.map((m) => (
              <span
                key={m}
                className={`${mono.className} text-[11px] md:text-xs font-medium uppercase tracking-[0.2em]`}
                style={{ color: C.mutedD }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* ── 3 · Qué reparamos: la grilla con barrido láser ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.grafito }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo n="FIG.02">Qué reparamos</Rotulo>
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 items-end">
                <h2
                  className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(2rem,7vw,3.8rem)]`}
                  style={{ color: C.blanco }}
                >
                  Del vidrio que se cayó{' '}
                  <span style={{ color: C.naranja }}>a la placa que no enciende.</span>
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                  Apple es la especialidad de la casa: iPhone, iPad, iPod y
                  MacBook. También trabajan smartphones de alta gama de
                  todas las marcas.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-10 md:mt-14">
              {SERVICIOS.map((s, i) => (
                <Scan key={s.n} delay={(i % 3) * 110}>
                  <article
                    className="h-full rounded-xl p-4 md:p-5"
                    style={{ backgroundColor: C.panel, border: `1.5px solid ${C.lineD}` }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255,138,0,0.12)', color: C.naranja }}
                      >
                        <Ic name={s.icon} className="w-[18px] h-[18px]" />
                      </span>
                      <span className={`${mono.className} text-[9px] font-semibold tracking-[0.18em]`} style={{ color: C.mutedD2 }}>
                        {s.n}
                      </span>
                    </div>
                    <h3 className={`${display.className} font-bold text-base md:text-lg mt-3.5 leading-tight`} style={{ color: C.blanco }}>
                      {s.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedD }}>
                      {s.desc}
                    </p>
                  </article>
                </Scan>
              ))}
            </div>
            <Reveal delay={80}>
              <p className="mt-5 text-[13px] md:text-sm" style={{ color: C.mutedD }}>
                <span className="font-semibold" style={{ color: C.blanco }}>También:</span> glass de Apple
                Watch, lentes de cámara y láminas de hidrogel.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">
              <Reveal>
                <Plate
                  src={`${IMG}/iphone-trizado.webp`}
                  alt="Un iPhone con la tapa trasera trizada antes de pasar por la máquina láser"
                  ratio="aspect-[4/3]"
                  tag="Así llega"
                  caption="La tapa trizada se retira con máquina láser"
                />
              </Reveal>
              <Reveal delay={120}>
                <Plate
                  src={`${IMG}/placa-samsung.webp`}
                  alt="Un smartphone abierto en la mesa de trabajo: batería y placa al aire"
                  ratio="aspect-[4/3]"
                  tag="En la mesa"
                  caption="Reparación de IC, señal y carga"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4 · Diagnóstico claro: la ficha técnica ── */}
        <section id="proceso" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo n="FIG.03" dark={false}>
                    Diagnóstico claro
                  </Rotulo>
                  <h2
                    className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(2rem,7vw,3.8rem)]`}
                  >
                    Primero entiendes,{' '}
                    <span style={{ color: C.naranjaInk }}>después decides.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                    Nada de arreglos misteriosos: te dicen qué tiene tu
                    equipo, en palabras simples, antes de tocar un tornillo.
                  </p>
                </Reveal>
                <ol className="mt-9">
                  {PASOS.map((s, i) => (
                    <Reveal key={s.n} delay={i * 90}>
                      <li
                        className="flex gap-4 md:gap-5 border-b py-5 last:border-b-0"
                        style={{ borderColor: C.lineL }}
                      >
                        <span
                          className={`${mono.className} text-sm font-bold leading-none shrink-0 w-10 pt-1`}
                          style={{ color: C.naranjaInk }}
                          aria-hidden="true"
                        >
                          {s.n}
                        </span>
                        <div>
                          <h3 className={`${display.className} font-bold text-lg md:text-xl leading-tight`}>{s.t}</h3>
                          <p className="mt-1 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                            {s.d}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
              <Reveal delay={140}>
                <figure
                  className="rounded-xl p-6 md:p-8"
                  style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.lineL}`, boxShadow: '0 18px 40px rgba(21,23,27,0.08)' }}
                >
                  <p className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.24em]`} style={{ color: C.naranjaInk }}>
                    Opinión verificada · Google
                  </p>
                  <blockquote className={`${display.className} mt-4 text-xl md:text-2xl font-semibold leading-snug`}>
                    “Me explicaron todo el proceso técnico de forma clara y
                    sencilla, sin apuros ni tecnicismos”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-2.5">
                    <cite className="not-italic text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.mutedL }}>
                      Francisco G. · Local Guide
                    </cite>
                  </figcaption>
                  <div className="mt-6 pt-5 border-t border-dashed" style={{ borderColor: C.lineL }}>
                    <p className="text-[13px] leading-relaxed" style={{ color: C.mutedL }}>
                      “Conservamos el rendimiento y la calidad original de
                      tus equipos.”
                    </p>
                    <p className={`${mono.className} mt-1.5 text-[9px] uppercase tracking-[0.2em]`} style={{ color: C.mutedL }}>
                      Su propia descripción
                    </p>
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5 · iPhone seminuevos ── */}
        <section id="seminuevos" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo n="FIG.04">Seminuevos</Rotulo>
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 items-end">
                <h2
                  className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(2rem,7vw,3.8rem)]`}
                  style={{ color: C.blanco }}
                >
                  iPhone seminuevos,{' '}
                  <span style={{ color: C.dorado }}>sin letra chica.</span>
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                  Además del servicio técnico, compran y venden iPhone.
                  Consulta el stock del día por WhatsApp.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
              {[
                { icon: 'escudo', t: 'Venta de seminuevos', d: 'iPhone revisados y sin riesgo de bloqueo. Los ven en la tienda antes de llevarlos.' },
                { icon: 'check', t: 'Compra de tu iPhone', d: 'Si quieres vender el tuyo, lo evalúan y te hacen una oferta.' },
                { icon: 'cambio', t: 'Parte de pago', d: 'Reciben tu iPhone actual como parte de pago del siguiente.' },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 100}>
                  <article
                    className="h-full rounded-xl p-5 md:p-6"
                    style={{ backgroundColor: C.panel, border: `1.5px solid ${C.lineD}` }}
                  >
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255,194,26,0.12)', color: C.dorado }}
                    >
                      <Ic name={s.icon} className="w-[18px] h-[18px]" />
                    </span>
                    <h3 className={`${display.className} font-bold text-lg md:text-xl mt-4 leading-tight`} style={{ color: C.blanco }}>
                      {s.t}
                    </h3>
                    <p className="mt-1.5 text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedD }}>
                      {s.d}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">
              <Reveal>
                <Plate
                  src={`${IMG}/iphone-morado.webp`}
                  alt="Un iPhone morado seminuevo en la mano"
                  ratio="aspect-[4/5] md:aspect-[16/10]"
                  tag="Seminuevos"
                  caption="Revisados en la misma mesa"
                />
              </Reveal>
              <Reveal delay={120}>
                <Plate
                  src={`${IMG}/iphone-caja.webp`}
                  alt="Un iPhone seminuevo junto a su caja"
                  ratio="aspect-[4/5] md:aspect-[16/10]"
                  tag="Con su caja"
                  caption="Consulta el stock por WhatsApp"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 6 · La tienda ── */}
        <section id="tienda" className="scroll-mt-20" style={{ backgroundColor: C.grafito }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo n="FIG.05">La tienda</Rotulo>
              <h2
                className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(2rem,7vw,3.8rem)] max-w-3xl`}
                style={{ color: C.blanco }}
              >
                Un local grande,{' '}
                <span style={{ color: C.naranja }}>en pleno centro.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
              <Reveal>
                <Plate
                  src={`${IMG}/muro-carcasas.webp`}
                  alt="El muro de carcasas de colores de JJ Cell con el letrero Somos tu solución"
                  ratio="aspect-[4/5]"
                  tag="El muro"
                  caption="Carcasas y accesorios"
                />
              </Reveal>
              <Reveal delay={110}>
                <Plate
                  src={`${IMG}/mostrador-logo.webp`}
                  alt="El mesón de atención de JJ Cell con su logo grande"
                  ratio="aspect-[4/5]"
                  tag="El mesón"
                  caption="Donde cotizas tu reparación"
                />
              </Reveal>
              <Reveal delay={220}>
                <Plate
                  src={`${IMG}/vitrina-carcasas.webp`}
                  alt="La vitrina de carcasas y accesorios de la tienda"
                  ratio="aspect-[4/5]"
                  tag="La vitrina"
                  caption="Accesorios para tu equipo"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 7 · Opiniones: 4,8 con 888 ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <Rotulo n="FIG.06">Opiniones</Rotulo>
              <div className="mt-2 flex items-end gap-4">
                <span
                  className={`${display.className} font-extrabold leading-[0.85] text-[clamp(4.6rem,17vw,8.4rem)]`}
                  style={{ color: C.blanco }}
                >
                  {BIZ.rating}
                </span>
                <div className="pb-2.5">
                  <Stars value={BIZ.ratingValue} color={C.dorado} size={19} />
                  <p className="mt-1.5 text-sm font-semibold" style={{ color: C.blanco }}>
                    {BIZ.reviews} opiniones en Google
                  </p>
                  <p className="text-xs" style={{ color: C.mutedD }}>
                    y más de 55 mil seguidores en Instagram
                  </p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.naranja, textDecorationColor: 'rgba(255,138,0,0.4)' }}
              >
                Ver la ficha real en Google
              </a>
            </Reveal>
            <div className="space-y-4">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={i * 120}>
                  <blockquote
                    className="relative rounded-xl p-5 md:p-6"
                    style={{ backgroundColor: C.panel, border: `1.5px solid ${C.lineD}` }}
                  >
                    <span
                      className={`${display.className} absolute -top-4 left-4 text-5xl leading-none`}
                      style={{ color: C.naranja }}
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <p className="text-[15px] md:text-lg font-medium leading-snug" style={{ color: C.blanco }}>
                      {r.text}
                    </p>
                    <footer className="mt-3 flex items-center gap-2.5">
                      <cite className="not-italic text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.mutedD }}>
                        {r.author} · Google{'tag' in r && r.tag ? ` · ${r.tag}` : ''}
                      </cite>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8 · Cómo llegar ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo n="FIG.07" dark={false}>
                Cómo llegar
              </Rotulo>
              <h2
                className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(2rem,7vw,3.8rem)]`}
              >
                Colo Colo 805,{' '}
                <span style={{ color: C.naranjaInk }}>esquina Carrera.</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                {BIZ.addressNote}, en pleno centro de {BIZ.city}.
              </p>
            </Reveal>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 mt-10 md:mt-14 items-start">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <Reveal>
                    <figure className="relative overflow-hidden rounded-xl aspect-[3/4]" style={{ border: `1.5px solid ${C.lineL}` }}>
                      <Image
                        src={`${IMG}/fachada.webp`}
                        alt="La fachada de JJ Cell con el letrero de servicio técnico"
                        fill
                        sizes="(min-width: 1024px) 22vw, 45vw"
                        className="object-cover"
                      />
                    </figure>
                  </Reveal>
                  <Reveal delay={110}>
                    <figure className="relative overflow-hidden rounded-xl aspect-[3/4]" style={{ border: `1.5px solid ${C.lineL}` }}>
                      <Image
                        src={`${IMG}/esquina.webp`}
                        alt="La esquina de Colo Colo con Carrera donde está la tienda"
                        fill
                        sizes="(min-width: 1024px) 22vw, 45vw"
                        className="object-cover"
                      />
                    </figure>
                  </Reveal>
                </div>
              </div>
              <div>
                <Reveal>
                  <div className="rounded-xl p-5 md:p-7" style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.lineL}` }}>
                    <div className="flex gap-3.5">
                      <span className="shrink-0 mt-0.5" style={{ color: C.naranjaInk }}>
                        <Ic name="pin" className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className={`${display.className} font-bold text-lg md:text-xl`}>La dirección</h3>
                        <address className="not-italic mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                          {BIZ.address}
                          <br />
                          {BIZ.city}, {BIZ.region}
                          <br />
                          {BIZ.addressNote}
                        </address>
                      </div>
                    </div>
                    <div className="flex gap-3.5 mt-6 pt-5 border-t" style={{ borderColor: C.lineL }}>
                      <span className="shrink-0 mt-0.5" style={{ color: C.naranjaInk }}>
                        <Ic name="reloj" className="w-5 h-5" />
                      </span>
                      <div className="flex-1">
                        <h3 className={`${display.className} font-bold text-lg md:text-xl`}>El horario</h3>
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
                    <div className="flex gap-3.5 mt-6 pt-5 border-t" style={{ borderColor: C.lineL }}>
                      <span className="shrink-0 mt-0.5" style={{ color: C.naranjaInk }}>
                        <Ic name="fono" className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className={`${display.className} font-bold text-lg md:text-xl`}>El contacto</h3>
                        <a href={`tel:${BIZ.phoneTel}`} className="mt-1.5 inline-block text-[15px] font-semibold underline underline-offset-2 tap-44">
                          {BIZ.phoneDisplay}
                        </a>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <Btn href={WA_LINK} tone="tinta">
                        Cotiza por WhatsApp
                      </Btn>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="jj-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                        style={{ border: `1.5px solid ${C.tinta}`, color: C.tinta }}
                      >
                        Cómo llegar
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
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

        {/* ── 9 · Cierre: Somos tu solución ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(245,246,248,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(245,246,248,0.035) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 62%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img
                src={`${IMG}/logo-3d.webp`}
                alt="El logo 3D de JJ Cell Concepción"
                className="mx-auto h-24 md:h-28 w-auto rounded-xl"
              />
              <h2
                className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.02em] text-[clamp(2.3rem,9vw,4.8rem)] mt-7`}
                style={{ color: C.blanco }}
              >
                Somos tu <span style={{ color: C.naranja }}>solución.</span>
              </h2>
              <p className="mt-5 max-w-md mx-auto text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
                Tu servicio técnico premium en tecnología. Escríbenos el
                modelo y la falla, y te cotizamos al tiro.
              </p>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <Btn href={WA_LINK} tone="naranja">
                  Cotiza por WhatsApp
                </Btn>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.blanco, textDecorationColor: 'rgba(255,138,0,0.5)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 10 · Footer ── */}
        <footer style={{ backgroundColor: C.carbon, color: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt=""
                  className="h-11 w-11 rounded-lg object-cover shrink-0"
                  style={{ border: `1px solid ${C.lineD}` }}
                  aria-hidden="true"
                />
                <div>
                  <p className={`${display.className} font-bold uppercase text-lg leading-tight`}>
                    JJ <span style={{ color: C.naranja }}>Cell</span>
                  </p>
                  <p className="text-xs" style={{ color: C.mutedD2 }}>
                    {BIZ.rubro} · {BIZ.city}
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(245,246,248,0.85)' }}>
                    {l.label}
                  </a>
                ))}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(245,246,248,0.85)' }}
                >
                  Instagram
                </a>
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(245,246,248,0.85)' }}
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
                  style={{ color: C.naranja }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
