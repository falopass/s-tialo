import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import OpenBadge from './open-badge'
import { BIZ, WA_LINK, WA_LINK_HORA, MAPS_URL, MAPS_EMBED, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

const C = {
  noche: '#0D1F2E',
  nocheProf: '#08141F',
  navyCard: '#12293B',
  pino: '#2E6B57',
  pinoOsc: '#1C4638',
  terracota: '#B04A24',
  terracotaHi: '#D6693B',
  ambar: '#F2B15C',
  crema: '#F6EFE1',
  arena: '#EAE0CC',
  tinta: '#1C2B38',
  muted: 'rgba(28,43,56,0.7)',
  line: 'rgba(28,43,56,0.16)',
  cremaDim: 'rgba(246,239,225,0.82)',
  cremaFaint: 'rgba(246,239,225,0.6)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'veterinaria-pineiro',
  title: 'Clínica Veterinaria Piñeiro — cuidados veterinarios en San Clemente',
  description:
    'Clínica veterinaria en Av. Huamachuco 861, San Clemente. Lun–vie 9:00–18:30 y sábado 9:00–13:15. Agenda tu hora por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'Horario', href: '#horario' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué', href: '#porque' },
  { label: 'Cómo llegar', href: '#visita' },
]

const SERVICIOS = [
  {
    icon: 'paw',
    name: 'Cuidados veterinarios',
    desc: 'Atención general de perros y gatos: revisión, diagnóstico y tratamiento en el centro de San Clemente.',
    tag: 'Su especialidad',
  },
  {
    icon: 'scissors',
    name: 'Esterilización',
    desc: 'Castración y esterilización de perros y gatos: el servicio que más nombran quienes han venido.',
    tag: 'Coordinar por WhatsApp',
  },
]

const RAZONES = [
  {
    title: 'Horario claro, de verdad',
    desc: 'De lunes a viernes hasta las 18:30 y sábado hasta las 13:15: publicado, sin adivinar.',
  },
  {
    title: 'Sobre la avenida principal',
    desc: 'En Av. Huamachuco 861, a pasos del centro: llegas a pie o en auto sin desvíos.',
  },
  {
    title: 'Doctores que responden',
    desc: 'Las reseñas hablan de atención amable y de mascotas que volvieron sanas a la casa.',
  },
  {
    title: 'Agenda directa por WhatsApp',
    desc: 'Sin formularios ni llamadas: un mensaje y coordinas la hora para tu mascota.',
  },
]

/* ── Motivo propio: pino piñeiro (la raíz del apellido) ── */

function Pino({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 2.5c3.1 0 5.4 1.7 6 4.2 2 .4 3.6 1.9 3.6 3.9 0 1.5-.9 2.8-2.2 3.5 1 .4 1.8 1.3 1.8 2.4 0 1.6-1.4 2.9-3.3 2.9H6.1c-1.9 0-3.3-1.3-3.3-2.9 0-1.1.8-2 1.8-2.4-1.3-.7-2.2-2-2.2-3.5 0-2 1.6-3.5 3.6-3.9.6-2.5 2.9-4.2 6-4.2z" />
      <rect x="11" y="18.6" width="2" height="3.9" rx="0.9" />
    </svg>
  )
}

function Ico({ kind, className = 'w-6 h-6', color = 'currentColor' }: { kind: string; className?: string; color?: string }) {
  const stroke = { stroke: color, strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<string, React.ReactNode> = {
    paw: (
      <>
        <ellipse cx="5.9" cy="8.8" rx="1.5" ry="2.1" transform="rotate(-20 5.9 8.8)" fill={color} stroke="none" />
        <ellipse cx="9.7" cy="5.6" rx="1.5" ry="2.2" fill={color} stroke="none" />
        <ellipse cx="14.3" cy="5.6" rx="1.5" ry="2.2" fill={color} stroke="none" />
        <ellipse cx="18.1" cy="8.8" rx="1.5" ry="2.1" transform="rotate(20 18.1 8.8)" fill={color} stroke="none" />
        <path d="M12 10.2c2.5 0 4.3 1.9 4.3 4.2 0 1.4-.7 2.6-1.7 3.4-.9.7-1.9 1-2.6 1s-1.7-.3-2.6-1c-1-.8-1.7-2-1.7-3.4 0-2.3 1.8-4.2 4.3-4.2z" fill={color} stroke="none" />
      </>
    ),
    scissors: (
      <>
        <circle cx="6" cy="7" r="2.4" {...stroke} />
        <circle cx="6" cy="17" r="2.4" {...stroke} />
        <path d="M8.2 8.7 20 17.5M8.2 15.3 20 6.5" {...stroke} />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6.5-5.7-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.3 12 21 12 21z" {...stroke} />
        <circle cx="12" cy="10.5" r="2.3" {...stroke} />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" {...stroke} />
        <path d="M12 7.5V12l3 2" {...stroke} />
      </>
    ),
    phone: (
      <>
        <path d="M6.8 3.8c.6-.4 1.4-.3 1.8.3l1.9 2.6c.4.5.3 1.3-.2 1.8l-1 1a12.6 12.6 0 0 0 5.2 5.2l1-1c.5-.5 1.3-.6 1.8-.2l2.6 1.9c.6.4.7 1.2.3 1.8l-1.1 1.6c-.5.7-1.4 1-2.2.8-4.8-1.4-9.9-6.5-11.3-11.3-.2-.8.1-1.7.8-2.2z" {...stroke} />
      </>
    ),
    check: <path d="M4.5 12.5l4.7 4.7L19.5 6.8" {...stroke} strokeWidth={2.4} />,
    star: (
      <path
        d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.4l-5.7 2.9 1.1-6.3-4.6-4.5 6.4-.9z"
        fill={color}
        stroke="none"
      />
    ),
    quote: (
      <path
        d="M4 15.5c0-4 2.4-7 6-8.2l.7 1.5c-2 .9-3.2 2.3-3.4 3.9.2-.1.5-.1.8-.1 1.5 0 2.7 1.2 2.7 2.7S9.6 18 8.1 18c-2.3 0-4.1-1.1-4.1-2.5zm10 0c0-4 2.4-7 6-8.2l.7 1.5c-2 .9-3.2 2.3-3.4 3.9.2-.1.5-.1.8-.1 1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7c-2.3 0-4.1-1.1-4.1-2.5z"
        fill={color}
        stroke="none"
      />
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[kind]}
    </svg>
  )
}

function SectionLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <p
      className={`${body.className} inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] mb-4`}
      style={{ color: dark ? C.ambar : '#994014' }}
    >
      <Pino className="w-4 h-4" />
      {text}
    </p>
  )
}

/** Franja marquee: pines + los servicios reales, sobre terracota. */
function PineStrip() {
  const items = ['Cuidados veterinarios', 'Esterilización', 'Centro de San Clemente', 'Agenda por WhatsApp']
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-3.5" style={{ backgroundColor: C.terracota }}>
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        style={{ animation: 'pino-marquee 26s linear infinite' }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10" aria-hidden={half === 1}>
            {row.map((t, i) => (
              <span key={`${half}-${i}`} className={`${body.className} flex items-center gap-10 text-sm font-bold tracking-wide uppercase`} style={{ color: '#FBE9DC' }}>
                <Pino className="w-4 h-4" color="#F6EFE1" />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes pino-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

/**
 * Escena SVG propia: la fachada de la clínica sobre Av. Huamachuco al anochecer.
 * La ficha de la pyme no publica fotos, así que se ilustra el local con el
 * pino piñeiro que da nombre al apellido.
 */
function EscenaClinica() {
  return (
    <svg viewBox="0 0 640 480" className="w-full h-auto block" role="img" aria-label="Ilustración de la fachada de la Clínica Veterinaria Piñeiro de noche, con un pino al costado">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A1824" />
          <stop offset="0.62" stopColor="#12293B" />
          <stop offset="1" stopColor="#1A3548" />
        </linearGradient>
        <radialGradient id="lampGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F2B15C" stopOpacity="0.5" />
          <stop offset="1" stopColor="#F2B15C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="winGlow" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0" stopColor="#FFD998" />
          <stop offset="0.7" stopColor="#F2B15C" />
          <stop offset="1" stopColor="#E09A45" />
        </radialGradient>
      </defs>

      <rect width="640" height="480" fill="url(#sky)" />

      {/* estrellas */}
      {[
        [54, 44, 1.6], [120, 26, 1.2], [205, 60, 1.4], [300, 30, 1.1], [390, 52, 1.5],
        [470, 26, 1.2], [560, 60, 1.4], [605, 110, 1.1], [40, 120, 1.1], [150, 92, 1.0],
        [250, 120, 1.2], [520, 90, 1.0], [95, 170, 1.0], [600, 30, 1.3], [330, 80, 0.9],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#F6EFE1" opacity={i % 3 === 0 ? 0.9 : 0.55} />
      ))}

      {/* luna */}
      <circle cx="552" cy="96" r="26" fill="#F6EFE1" opacity="0.94" />
      <circle cx="543" cy="90" r="5" fill="#0D1F2E" opacity="0.1" />
      <circle cx="560" cy="104" r="3.4" fill="#0D1F2E" opacity="0.08" />

      {/* suelo y vereda */}
      <rect x="0" y="392" width="640" height="88" fill="#08141F" />
      <rect x="0" y="384" width="640" height="10" fill="#0F2733" />
      <rect x="0" y="394" width="640" height="4" fill="#1A3548" />

      {/* sombra suave bajo el edificio */}
      <ellipse cx="280" cy="388" rx="230" ry="14" fill="#050D14" opacity="0.7" />

      {/* edificio */}
      <rect x="96" y="170" width="368" height="222" rx="6" fill="#E9DFC9" />
      <rect x="96" y="170" width="368" height="222" rx="6" fill="#D9CBAF" opacity="0.35" />
      {/* cornisa */}
      <rect x="86" y="158" width="388" height="18" rx="5" fill="#0D1F2E" />
      {/* letrero */}
      <rect x="116" y="196" width="328" height="52" rx="6" fill="#0D1F2E" />
      <rect x="116" y="196" width="328" height="52" rx="6" fill="none" stroke="#F2B15C" strokeOpacity="0.5" strokeWidth="2" />
      {/* cruz veterinaria en el letrero */}
      <g>
        <rect x="134" y="208" width="12" height="28" rx="3" fill="#D6693B" />
        <rect x="126" y="216" width="28" height="12" rx="3" fill="#D6693B" />
      </g>
      <text x="285" y="231" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="18" fill="#F6EFE1" letterSpacing="1.5" style={{ color: '#F6EFE1' }}>
        VETERINARIA PIÑEIRO
      </text>

      {/* ventana izquierda */}
      <rect x="120" y="268" width="96" height="76" rx="4" fill="url(#winGlow)" />
      <rect x="120" y="268" width="96" height="76" rx="4" fill="none" stroke="#0D1F2E" strokeWidth="4" />
      <rect x="164" y="268" width="4" height="76" fill="#0D1F2E" />
      {/* silueta de gato en la ventana */}
      <path d="M146 330 c0-10 5-18 12-18 3 0 5 1 7 3v-8l5 5 5-5v8c2-2 4-3 7-3 7 0 12 8 12 18z" transform="translate(-14,-4)" fill="#1A3548" opacity="0.85" />

      {/* puerta central con vidrio */}
      <rect x="242" y="268" width="76" height="124" rx="4" fill="#0D1F2E" />
      <rect x="250" y="278" width="60" height="74" rx="3" fill="url(#winGlow)" opacity="0.92" />
      <rect x="250" y="278" width="60" height="74" rx="3" fill="none" stroke="#08141F" strokeWidth="3" />
      <circle cx="304" cy="330" r="3.4" fill="#F2B15C" />
      <rect x="242" y="356" width="76" height="36" fill="#12293B" />
      <rect x="252" y="366" width="56" height="7" rx="3" fill="#F6EFE1" opacity="0.55" />

      {/* ventana derecha */}
      <rect x="344" y="268" width="96" height="76" rx="4" fill="url(#winGlow)" />
      <rect x="344" y="268" width="96" height="76" rx="4" fill="none" stroke="#0D1F2E" strokeWidth="4" />
      <rect x="388" y="268" width="4" height="76" fill="#0D1F2E" />
      {/* estante con tarros */}
      <rect x="352" y="312" width="80" height="6" fill="#1A3548" />
      {[358, 372, 386, 400, 414].map((x, i) => (
        <rect key={i} x={x} y={i % 2 ? 296 : 292} width="9" height={i % 2 ? 16 : 20} rx="2" fill="#1A3548" opacity="0.9" />
      ))}

      {/* resplandor cálido sobre la vereda */}
      <ellipse cx="280" cy="392" rx="170" ry="10" fill="#F2B15C" opacity="0.12" />

      {/* farol */}
      <g>
        <rect x="52" y="232" width="6" height="158" rx="3" fill="#0A1824" />
        <rect x="42" y="222" width="26" height="16" rx="4" fill="#0A1824" />
        <circle cx="55" cy="240" r="7" fill="#FFD998" />
        <circle cx="55" cy="240" r="30" fill="url(#lampGlow)" />
      </g>

      {/* pino piñeiro (copa de sombrilla) a la derecha */}
      <g>
        <path d="M514 388c4-52 6-96 6-132h10c0 36 2 80 6 132z" fill="#3A2418" />
        <ellipse cx="525" cy="186" rx="86" ry="46" fill="#2E6B57" />
        <ellipse cx="482" cy="202" rx="56" ry="34" fill="#26594A" />
        <ellipse cx="568" cy="200" rx="60" ry="36" fill="#26594A" />
        <ellipse cx="525" cy="162" rx="52" ry="30" fill="#36775F" />
        <ellipse cx="500" cy="150" rx="14" ry="9" fill="#3E8467" opacity="0.8" />
        <ellipse cx="552" cy="170" rx="18" ry="11" fill="#3E8467" opacity="0.7" />
      </g>

      {/* perro sentado esperando junto a la puerta */}
      <g fill="#050D14">
        <path d="M204 388c-2-14 2-24 10-30 2-7 6-11 12-11 5 0 8 2 10 5l8-3-2 8c3 3 4 7 3 11 4 5 5 12 5 20l4 10h-8l-4-9c-3 1-7 1-10 0l-2 9h-10z" />
        <path d="M200 370c-4-8-3-16 2-21 2 8 3 15 2 21z" />
      </g>
      {/* luz del perro: borde cálido */}
      <path d="M204 388c-2-14 2-24 10-30 2-7 6-11 12-11 5 0 8 2 10 5" fill="none" stroke="#F2B15C" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* huellas hacia la puerta */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${196 - i * 26},${396 - (i % 2) * 3})`} fill="#F6EFE1" opacity="0.28">
          <ellipse cx="0" cy="0" rx="2.6" ry="3.4" />
          <circle cx="-3.4" cy="-3.6" r="1.2" />
          <circle cx="0" cy="-4.4" r="1.2" />
          <circle cx="3.4" cy="-3.6" r="1.2" />
        </g>
      ))}
    </svg>
  )
}

export default function DemoVeterinariaPineiro() {
  return (
    <div className="sc-band" style={{ backgroundColor: C.crema, color: C.tinta }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        theme={{
          over: 'dark',
          bar: C.crema,
          ink: C.tinta,
          line: C.line,
          btnBg: C.terracota,
          btnInk: '#FFFFFF',
        }}
        waLink={WA_LINK_HORA}
        ctaLabel="Agendar hora"
      />

      {/* ── Hero: noche de San Clemente + escena propia del local ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
        {/* estrellas de fondo */}
        <svg className="absolute inset-0 w-full h-full opacity-40" aria-hidden="true" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 60">
          {[[4, 6], [12, 14], [22, 4], [34, 10], [45, 5], [58, 12], [70, 6], [82, 15], [92, 8], [8, 26], [18, 34], [30, 22], [52, 26], [64, 32], [76, 24], [88, 34], [96, 28], [40, 40], [26, 48], [60, 46], [80, 44], [10, 44]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 0.5 : 0.32} fill="#F6EFE1" opacity={i % 3 === 0 ? 0.9 : 0.5} />
          ))}
        </svg>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-[1fr_1.05fr] gap-10 md:gap-12 items-center">
          <div>
            <Reveal>
              <p
                className={`${body.className} inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] px-4 py-2 rounded-full`}
                style={{ backgroundColor: 'rgba(246,239,225,0.1)', color: C.ambar, border: '1px solid rgba(242,177,92,0.35)' }}
              >
                <Pino className="w-3.5 h-3.5" />
                {BIZ.rubro} · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} mt-5 text-[42px] leading-[1.04] md:text-6xl font-extrabold tracking-tight`} style={{ color: C.crema }}>
                Tu mascota,
                <br />
                <em className="not-italic" style={{ color: C.terracotaHi }}>en buenas manos</em>
                <br />
                sobre la avenida
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className={`${body.className} mt-5 text-base md:text-lg leading-relaxed max-w-md`} style={{ color: C.cremaDim }}>
                La {BIZ.name} atiende en {BIZ.address}, con horario publicado y agenda directa por WhatsApp. Sin vueltas ni esperas de más.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-5">
                <OpenBadge />
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK_HORA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-flex items-center justify-center gap-2 text-base font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.terracota, color: '#FFFFFF' }}
                >
                  Agendar hora por WhatsApp
                </a>
                <a
                  href="#horario"
                  className={`${body.className} inline-flex items-center justify-center gap-2 text-base font-bold px-6 py-3 rounded-full border-2 transition-all hover:bg-black/20 active:scale-95 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(246,239,225,0.55)', color: C.crema, backgroundColor: 'rgba(8,20,31,0.45)' }}
                >
                  Ver horario
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <p className={`${body.className} mt-5 flex items-center gap-2 text-sm`} style={{ color: C.cremaFaint }}>
                <Ico kind="pin" className="w-4 h-4" color={C.ambar} />
                {BIZ.address}, {BIZ.city} · {BIZ.region}
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative">
            <div
              className="relative rounded-[26px] overflow-hidden shadow-2xl"
              style={{ border: '1px solid rgba(246,239,225,0.16)', boxShadow: '0 32px 80px -24px rgba(0,0,0,0.7)' }}
            >
              <EscenaClinica />
            </div>
            <div
              className="absolute -bottom-4 left-4 md:left-6 flex items-center gap-2.5 rounded-2xl px-4 py-2.5 shadow-xl"
              style={{ backgroundColor: C.crema, color: C.tinta }}
            >
              <Pino className="w-4 h-4" color={C.pino} />
              <span className={`${body.className} text-xs font-bold`}>Av. Huamachuco 861 · San Clemente</span>
            </div>
          </Reveal>
        </div>
      </section>

      <PineStrip />

      {/* ── Horario: su dato más útil, va primero ── */}
      <section id="horario" className="py-16 md:py-24" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <SectionLabel text="Horario real" />
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight`}>
              Abren de lunes a sábado,
              <br />
              <em className="not-italic" style={{ color: C.terracota }}>con horario publicado</em>
            </h2>
            <p className={`${body.className} mt-5 text-base md:text-lg leading-relaxed`} style={{ color: C.muted }}>
              Nada de «puede que estén»: la ficha publica sus horas. Si llegas justo, un WhatsApp antes de salir te confirma la atención.
            </p>
            <div className="mt-6">
              <a
                href={WA_LINK_HORA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.tinta, color: C.crema }}
              >
                Confirmar por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[24px] bg-white shadow-[0_24px_60px_-24px_rgba(28,43,56,0.25)] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: C.noche }}>
                <span className={`${body.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.ambar }}>
                  Horario de atención
                </span>
                <Pino className="w-4 h-4" color={C.ambar} />
              </div>
              <ul>
                {HORARIO.map((h) => (
                  <li
                    key={h.dia}
                    className="flex items-center justify-between px-6 py-4"
                    style={{ borderBottom: `1px solid ${C.line}`, opacity: h.abierto ? 1 : 0.6 }}
                  >
                    <span className={`${body.className} flex items-center gap-3 text-base font-bold`}>
                      <Ico kind="clock" className="w-5 h-5" color={h.abierto ? C.pino : C.terracotaHi} />
                      {h.dia}
                    </span>
                    <span
                      className={`${display.className} text-lg font-bold px-3 py-1 rounded-lg`}
                      style={{
                        backgroundColor: h.abierto ? 'rgba(46,107,87,0.1)' : 'rgba(214,105,59,0.12)',
                        color: h.abierto ? C.pinoOsc : C.terracota,
                      }}
                    >
                      {h.horas}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${body.className} px-6 py-4 text-sm`} style={{ color: C.muted }}>
                Horario publicado en su ficha de Google Maps.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="py-16 md:py-24" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Servicios" />
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight max-w-xl`}>
                Lo que hacen <em className="not-italic" style={{ color: C.terracota }}>día a día</em>
              </h2>
              <p className={`${body.className} text-sm md:text-base max-w-sm`} style={{ color: C.muted }}>
                Atención veterinaria sobre la avenida; los detalles de cada caso se coordinan por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <article
                  className="h-full rounded-[22px] bg-white p-6 shadow-[0_18px_44px_-20px_rgba(28,43,56,0.28)] transition-transform hover:-translate-y-1"
                  style={{ border: `1px solid ${C.line}` }}
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl" style={{ backgroundColor: 'rgba(46,107,87,0.12)' }}>
                      <Ico kind={s.icon} className="w-6 h-6" color={C.pinoOsc} />
                    </span>
                    <span
                      className={`${body.className} text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full`}
                      style={{ backgroundColor: 'rgba(176,74,36,0.1)', color: '#994014' }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className={`${display.className} mt-5 text-xl font-extrabold`}>{s.name}</h3>
                  <p className={`${body.className} mt-2.5 text-[15px] leading-relaxed`} style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            ))}

            {/* tarjeta CTA: lo que no está en la lista */}
            <Reveal delay={180}>
              <article className="h-full rounded-[22px] p-6 flex flex-col justify-between shadow-[0_18px_44px_-20px_rgba(8,20,31,0.6)]" style={{ backgroundColor: C.noche }}>
                <div>
                  <Pino className="w-6 h-6" color={C.ambar} />
                  <h3 className={`${display.className} mt-4 text-xl font-extrabold`} style={{ color: C.crema }}>
                    ¿Tu mascota necesita otra cosa?
                  </h3>
                  <p className={`${body.className} mt-2.5 text-[15px] leading-relaxed`} style={{ color: C.cremaDim }}>
                    Cuenta qué le pasa por WhatsApp: ellos te dicen si lo atienden y te coordinan hora.
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} mt-5 inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.terracota, color: '#FFFFFF' }}
                >
                  Consultar por WhatsApp
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Por qué + reseña real ── */}
      <section id="porque" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.noche }}>
        <Pino className="absolute -right-10 -top-6 w-56 h-56 opacity-[0.07]" color={C.crema} />
        <Pino className="absolute left-[-70px] bottom-[-30px] w-64 h-64 opacity-[0.05]" color={C.crema} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Por qué elegirlos" dark />
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight max-w-2xl`} style={{ color: C.crema }}>
              Una clínica de barrio,
              <br />
              <em className="not-italic" style={{ color: C.ambar }}>a la altura de la avenida</em>
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RAZONES.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <article
                  className="h-full rounded-2xl p-5 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(246,239,225,0.05)', border: '1px solid rgba(246,239,225,0.14)' }}
                >
                  <span className={`${display.className} text-sm font-extrabold`} style={{ color: C.ambar }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} mt-3 text-lg font-extrabold`} style={{ color: C.crema }}>
                    {r.title}
                  </h3>
                  <p className={`${body.className} mt-2 text-sm leading-relaxed`} style={{ color: C.cremaDim }}>
                    {r.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* reseña real textual, sin número inventado */}
          <Reveal delay={120}>
            <figure
              className="mt-10 rounded-[24px] p-7 md:p-10 relative"
              style={{ backgroundColor: C.nocheProf, border: '1px solid rgba(242,177,92,0.22)' }}
            >
              <Ico kind="quote" className="w-9 h-9 absolute top-6 left-7 opacity-60" color={C.terracotaHi} />
              <div className="md:pl-14 pt-9 md:pt-0">
                <Stars value={5} color={C.ambar} className="w-4 h-4" />
                <blockquote className={`${display.className} mt-4 text-xl md:text-2xl font-bold leading-snug`} style={{ color: C.crema }}>
                  “Los doctores son amables y más de una vez han salvado mis perros”
                </blockquote>
                <figcaption className={`${body.className} mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm`} style={{ color: C.cremaFaint }}>
                  <span className="font-bold" style={{ color: C.cremaDim }}>Kim</span>
                  <span aria-hidden="true">·</span>
                  <span>Reseña real en Google Maps</span>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} inline-flex items-center px-3 py-3 underline underline-offset-4 decoration-2 font-bold ${focusRing}`}
                    style={{ color: C.ambar }}
                  >
                    Ver ficha
                  </a>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Visita: mapa + dirección ── */}
      <section id="visita" className="py-16 md:py-24" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal className="order-2 md:order-1">
            <div className="rounded-[24px] overflow-hidden shadow-[0_24px_60px_-24px_rgba(28,43,56,0.3)]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[320px] md:h-[400px] block bg-white"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 md:order-2" delay={100}>
            <SectionLabel text="Cómo llegar" />
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight`}>
              Sobre la avenida,
              <br />
              <em className="not-italic" style={{ color: C.terracota }}>en pleno centro</em>
            </h2>
            <ul className="mt-7 space-y-5">
              {[
                { icon: 'pin', title: `${BIZ.address}, ${BIZ.city}`, desc: `${BIZ.sector} · ${BIZ.region}` },
                { icon: 'clock', title: 'Lun–vie 9:00–18:30 · sáb 9:00–13:15', desc: 'Domingo cerrado. Confirmado en su ficha.' },
                { icon: 'phone', title: BIZ.phoneDisplay, desc: 'Agenda y consultas por WhatsApp.' },
              ].map((it) => (
                <li key={it.title} className="flex gap-4">
                  <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-2xl" style={{ backgroundColor: 'rgba(46,107,87,0.12)' }}>
                    <Ico kind={it.icon} className="w-5 h-5" color={C.pinoOsc} />
                  </span>
                  <span>
                    <strong className={`${body.className} block text-base font-bold`}>{it.title}</strong>
                    <span className={`${body.className} block mt-0.5 text-sm`} style={{ color: C.muted }}>
                      {it.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK_HORA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.terracota, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full border-2 transition-all hover:bg-black/5 active:scale-95 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(28,43,56,0.35)', color: C.tinta }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.nocheProf }}>
        <Pino className="absolute left-1/2 -translate-x-1/2 top-8 w-44 h-44 opacity-[0.08]" color={C.crema} />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Pino className="w-10 h-10 mx-auto" color={C.ambar} />
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-extrabold leading-[1.08] tracking-tight`} style={{ color: C.crema }}>
              ¿Tu mascota necesita
              <br />
              <em className="not-italic" style={{ color: C.terracotaHi }}>una revisión?</em>
            </h2>
            <p className={`${body.className} mt-4 text-base md:text-lg max-w-xl mx-auto`} style={{ color: C.cremaDim }}>
              Escríbeles por WhatsApp: cuenta qué pasa y coordinan la hora dentro de su horario de atención.
            </p>
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-flex items-center justify-center gap-2 text-base font-bold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.terracota, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
            </div>
            <p className={`${body.className} mt-5 text-sm`} style={{ color: C.cremaFaint }}>
              {BIZ.phoneDisplay} · {BIZ.address}, {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.nocheProf, borderTop: '1px solid rgba(246,239,225,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-2.5">
            <Pino className="w-5 h-5" color={C.ambar} />
            <p className={`${display.className} font-extrabold`} style={{ color: C.crema }}>
              {BIZ.name}
            </p>
          </div>
          <p className={`${body.className} mt-2 text-sm`} style={{ color: C.cremaFaint }}>
            {BIZ.address}, {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
          </p>
          <p className={`${body.className} mt-3 pb-2 text-xs`} style={{ color: 'rgba(246,239,225,0.6)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, WhatsApp, servicios y horario son reales; los textos de cada sección son de muestra.
          </p>
        </div>
      </footer>

      <div className="sc-band">
        <DemoBand name={BIZ.short} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
