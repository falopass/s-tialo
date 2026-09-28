import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_URGENCIA,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  petrol: '#0B3B35',
  petrolDeep: '#062420',
  teal: '#0F7A6D',
  aqua: '#35C2AC',
  aquaSoft: '#7FDCCB',
  mint: '#E4F4EE',
  paper: '#FBFBF4',
  sand: '#F2EFE4',
  coral: '#E8744A',
  coralDeep: '#B84A24',
  ink: '#11312C',
  muted: 'rgba(17,49,44,0.68)',
  line: 'rgba(17,49,44,0.16)',
  creamDim: 'rgba(238,250,246,0.82)',
  creamFaint: 'rgba(238,250,246,0.62)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'veterinaria-ramadillas',
  title: 'Veterinaria Ramadillas — Clínica y farmacia veterinaria en San Clemente',
  description:
    'Clínica y farmacia veterinaria en Av. Huamachuco, San Clemente. Consulta, oftalmología clínica, vacunas, farmacia y alimentos medicados. Atención por WhatsApp.',
  image: `${IMG}/gato.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#visita' },
]

const SERVICIOS = [
  {
    icon: 'stetho',
    name: 'Consulta veterinaria',
    desc: 'Evaluación completa de perros y gatos: revisión general, diagnóstico y plan de tratamiento explicado con calma.',
    tag: 'La base de todo',
  },
  {
    icon: 'syringe',
    name: 'Vacunación',
    desc: 'Calendario de vacunas para cachorros y adultos, incluida la antirrábica obligatoria para perros.',
    tag: 'Prevención',
  },
  {
    icon: 'eye',
    name: 'Oftalmología clínica',
    desc: 'Revisión y tratamiento de los ojos de tu mascota, uno de los servicios que más los destaca en la comuna.',
    tag: 'Especialidad',
  },
  {
    icon: 'cross',
    name: 'Farmacia veterinaria',
    desc: 'Medicamentos y recetas sin dar otra vuelta: la farmacia está en el mismo local que la clínica.',
    tag: 'En el mismo lugar',
  },
  {
    icon: 'bowl',
    name: 'Alimentos medicados',
    desc: 'Alimentos de prescripción para tratamientos: renal, gastrointestinal, urinario y más según indicación.',
    tag: 'Nutrición clínica',
  },
]

const RAZONES = [
  {
    title: 'El veterinario te atiende a ti',
    desc: `El dueño de casa es ${BIZ.vet}: las reseñas lo nombran por su nombre y por cómo explica cada caso.`,
  },
  {
    title: 'Diagnósticos certeros',
    desc: 'Es la palabra que más se repite en sus reseñas: ir al fondo del problema antes de recetar.',
  },
  {
    title: 'Clínica y farmacia juntas',
    desc: 'Sales con la indicación y el medicamento en la misma visita, sin buscar una farmacia aparte.',
  },
  {
    title: 'Pagas como te acomode',
    desc: 'En la puerta se ven los stickers de Transbank: aceptan tarjetas y efectivo.',
  },
]

const RESENAS = [
  {
    nombre: 'Karla González Castro',
    texto:
      '10000/10 lejos la mejor atención, diagnósticos certeros, el vet Felipe demuestra su conocimiento, profesionalismo y sobre todo empatía. Recomendadísima, el mejor de San Clemente por lejos.',
    tiempo: 'Hace 6 meses',
  },
  {
    nombre: 'Darío Valenzuela Alarcón',
    texto:
      'Excelente atención, veterinario amable y explica todo bien. Todos sus tratamientos han funcionado, por lejos el mejor.',
    tiempo: 'Hace un año',
  },
  {
    nombre: 'Nicolás Henríquez González',
    texto:
      'Muy buena atención, personalizada y cordial. Se toman el tiempo de explicarte todo para que tu mascota esté sana.',
    tiempo: 'Hace 11 meses',
  },
]

/* ── Iconos SVG propios ──────────────────────────────────── */

function Paw({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="5.9" cy="8.8" rx="1.5" ry="2.1" transform="rotate(-20 5.9 8.8)" />
      <ellipse cx="9.7" cy="5.6" rx="1.5" ry="2.2" />
      <ellipse cx="14.3" cy="5.6" rx="1.5" ry="2.2" />
      <ellipse cx="18.1" cy="8.8" rx="1.5" ry="2.1" transform="rotate(20 18.1 8.8)" />
      <path d="M12 10.2c2.5 0 4.3 1.9 4.3 4.2 0 1.4-.7 2.6-1.7 3.4-.9.7-1.9 1-2.6 1s-1.7-.3-2.6-1c-1-.8-1.7-2-1.7-3.4 0-2.3 1.8-4.2 4.3-4.2z" />
    </svg>
  )
}

function Ico({ kind, className = 'w-6 h-6', color = 'currentColor' }: { kind: string; className?: string; color?: string }) {
  const common = {
    fill: 'none' as const,
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      {kind === 'stetho' && (
        <>
          <circle cx="6.5" cy="4.2" r="1.6" />
          <circle cx="15.5" cy="4.2" r="1.6" />
          <path d="M6.5 5.8v3.2c0 3 2 5.4 4.5 5.4s4.5-2.4 4.5-5.4V5.8" />
          <path d="M11 14.4c0 2.7 1.6 4.4 3.9 4.4 1.4 0 2.5-.6 3.2-1.4" />
          <circle cx="19.3" cy="16.3" r="1.8" />
        </>
      )}
      {kind === 'syringe' && (
        <g transform="rotate(-45 12 12)">
          <rect x="7" y="9.4" width="9" height="5.2" rx="1.4" />
          <path d="M16 12h4.4" />
          <path d="M20.4 9.2v5.6" />
          <path d="M2.6 12H7" />
          <path d="M10.2 9.4v2.4M13 9.4v2.4" />
        </g>
      )}
      {kind === 'eye' && (
        <>
          <path d="M2.5 12C4.5 7.7 8 5.4 12 5.4s7.5 2.3 9.5 6.6c-2 4.3-5.5 6.6-9.5 6.6S4.5 16.3 2.5 12z" />
          <circle cx="12" cy="12" r="3.1" />
        </>
      )}
      {kind === 'cross' && (
        <>
          <rect x="9.6" y="4" width="4.8" height="16" rx="1.4" />
          <rect x="4" y="9.6" width="16" height="4.8" rx="1.4" />
        </>
      )}
      {kind === 'bowl' && (
        <>
          <path d="M4 12.5h16a8 8 0 0 1-16 0z" />
          <circle cx="8.6" cy="9" r="1.1" />
          <circle cx="12.4" cy="7.4" r="1.1" />
          <circle cx="15.9" cy="9.4" r="1.1" />
        </>
      )}
      {kind === 'card' && (
        <>
          <rect x="3" y="6" width="18" height="12.5" rx="2" />
          <path d="M3 10.2h18" />
          <path d="M6.3 14.6h4" />
        </>
      )}
      {kind === 'pin' && (
        <>
          <path d="M12 21s-6.5-5.4-6.5-10.4a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z" />
          <circle cx="12" cy="10.4" r="2.3" />
        </>
      )}
      {kind === 'clock' && (
        <>
          <circle cx="12" cy="12" r="8.4" />
          <path d="M12 7.6V12l3.2 2" />
        </>
      )}
      {kind === 'insta' && (
        <>
          <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.4" />
          <circle cx="12" cy="12" r="3.8" />
          <circle cx="17.2" cy="6.8" r="0.9" fill={color} stroke="none" />
        </>
      )}
      {kind === 'check' && (
        <path d="M4.5 12.5l5 5L19.5 6.5" />
      )}
    </svg>
  )
}

/** Rastro de patitas: franja en marcha con el motivo del logo real. */
function PawStrip() {
  const items = ['Consulta veterinaria', 'Vacunación', 'Oftalmología clínica', 'Farmacia veterinaria', 'Alimentos medicados']
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden py-4" style={{ backgroundColor: C.aqua }} aria-hidden="true">
      <div className="paw-marquee flex items-center gap-8 w-max">
        {row.map((s, i) => (
          <span
            key={i}
            className={`${body.className} flex items-center gap-8 text-sm font-bold whitespace-nowrap`}
            style={{ color: C.petrolDeep }}
          >
            {s}
            <Paw className="w-4 h-4" color={C.petrolDeep} />
          </span>
        ))}
      </div>
      <style>{`@keyframes paw-marquee-x{from{transform:translateX(0)}to{transform:translateX(-50%)}}.paw-marquee{animation:paw-marquee-x 26s linear infinite}`}</style>
    </div>
  )
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${body.className} flex items-center gap-2.5 text-[11px] uppercase tracking-[0.24em] font-extrabold mb-4`}
      style={{ color: light ? C.aqua : C.teal }}
    >
      <Paw className="w-4 h-4" />
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <div
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name="Veterinaria Ramadillas"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.teal,
          btnInk: '#FFFFFF',
        }}
        ctaLabel="WhatsApp"
      />

      {/* ── Hero: foto real del local + velo oscuro ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.petrolDeep }}>
        <div className="relative min-h-[560px] md:min-h-[640px] flex flex-col justify-end">
          <Image
            src={`${IMG}/gato.webp`}
            alt="Gata blanca y negra con collar rojo, paciente de la Veterinaria Ramadillas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_38%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(6,36,32,0.62) 0%, rgba(6,36,32,0.48) 45%, rgba(6,36,32,0.94) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-10 pt-[150px] w-full">
            <Reveal>
              <p
                className={`${body.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold px-3.5 py-2 rounded-full mb-5`}
                style={{ backgroundColor: 'rgba(6,36,32,0.72)', color: C.aquaSoft, backdropFilter: 'blur(6px)' }}
              >
                <Paw className="w-3.5 h-3.5" />
                Clínica y farmacia veterinaria · {BIZ.city}
              </p>
              <h1
                className={`${display.className} font-black leading-[1.04] mb-4 text-[clamp(2.3rem,9vw,4.6rem)]`}
                style={{ color: '#FFFFFF' }}
              >
                La veterinaria que
                <br />
                <em className="italic font-medium" style={{ color: C.aquaSoft }}>
                  San Clemente recomienda
                </em>
              </h1>
              <p className="text-sm md:text-lg leading-relaxed max-w-xl mb-6" style={{ color: C.creamDim }}>
                Consulta, oftalmología, vacunas, farmacia y alimentos medicados:
                todo en un solo lugar sobre Av. Huamachuco, a manos del
                veterinario {BIZ.vet}.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-bold"
                  style={{ backgroundColor: C.aqua, color: C.petrolDeep }}
                >
                  <Stars value={4.6} color={C.petrolDeep} className="w-3.5 h-3.5" />
                  {BIZ.rating} · {BIZ.googleReviews} reseñas
                </span>
                <span className="text-xs md:text-sm" style={{ color: C.creamFaint }}>
                  {BIZ.address}, {BIZ.sector}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-flex items-center justify-center gap-2 text-base font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.coralDeep, color: '#FFFFFF' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className={`${body.className} inline-flex items-center justify-center gap-2 text-base font-bold px-6 py-3 rounded-full border-2 transition-all hover:bg-black/40 active:scale-95 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#FFFFFF', backgroundColor: 'rgba(6,36,32,0.45)' }}
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PawStrip />

      {/* ── Propuesta: clínica + farmacia en un solo lugar ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <SectionLabel>La clínica</SectionLabel>
              <h2
                className={`${display.className} font-black text-[clamp(1.9rem,5.5vw,3.1rem)] leading-[1.08] mb-5`}
              >
                Un solo local para{' '}
                <em className="italic font-medium" style={{ color: C.teal }}>
                  diagnosticar y medicar
                </em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
                El nombre lo dice todo: en Ramadillas la consulta y la farmacia
                conviven bajo el mismo techo. Si tu mascota necesita un
                medicamento o un alimento de prescripción, sales con él en la
                mano, sin encargo ni espera.
              </p>
              <ul className="space-y-3.5 mb-6">
                {[
                  'Perros y gatos de todas las edades',
                  'Oftalmología clínica, su especialidad en la puerta',
                  'Alimentos medicados para tratamientos',
                  'Tarjetas y efectivo (stickers Transbank en la entrada)',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base">
                    <span
                      className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: C.mint }}
                    >
                      <Ico kind="check" className="w-3.5 h-3.5" color={C.teal} />
                    </span>
                    <span style={{ color: C.ink }}>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-flex items-center gap-2 text-sm font-bold transition-colors ${focusRing} tap-44`}
                style={{ color: C.teal }}
              >
                <Ico kind="insta" className="w-4.5 h-4.5 w-[18px] h-[18px]" color={C.teal} />
                @{BIZ.instagram} en Instagram →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div
                  className="absolute -inset-3 md:-inset-4 rounded-[28px]"
                  style={{ backgroundColor: C.mint }}
                  aria-hidden="true"
                />
                <div className="relative rounded-[22px] overflow-hidden shadow-xl">
                  <Image
                    src={`${IMG}/puerta.webp`}
                    alt="Puerta de vidrio de la Veterinaria Ramadillas con su logo turquesa y los servicios: consulta, oftalmología, farmacia y alimentos medicados"
                    width={1100}
                    height={1467}
                    className="w-full h-auto"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div
                  className="absolute -bottom-5 left-5 right-5 sm:right-auto rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
                  style={{ backgroundColor: C.petrol, color: '#FFFFFF' }}
                >
                  <Paw className="w-8 h-8 shrink-0" color={C.aqua} />
                  <div>
                    <p className={`${display.className} font-bold text-sm leading-tight`}>
                      Clínica y farmacia veterinaria
                    </p>
                    <p className="text-xs" style={{ color: C.creamDim }}>
                      {BIZ.address}, {BIZ.sector}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <SectionLabel>Servicios</SectionLabel>
                <h2
                  className={`${display.className} font-black text-[clamp(1.9rem,5.5vw,3.1rem)] leading-[1.08] max-w-xl`}
                >
                  Lo que hacen{' '}
                  <em className="italic font-medium" style={{ color: C.teal }}>
                    todos los días
                  </em>
                </h2>
              </div>
              <p className="text-xs md:text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
                Servicios publicados en la fachada del local y en su Instagram
                @{BIZ.instagram}.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <article
                  className="h-full rounded-2xl p-6 transition-transform hover:-translate-y-1"
                  style={{
                    backgroundColor: C.paper,
                    border: `1px solid ${C.line}`,
                    boxShadow: '0 10px 30px rgba(11,59,53,0.07)',
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: C.mint, color: C.teal }}
                    >
                      <Ico kind={s.icon} className="w-6 h-6" color={C.teal} />
                    </span>
                    <span
                      className={`${body.className} text-[10px] uppercase tracking-[0.16em] font-bold px-2.5 py-1 rounded-full`}
                      style={{ backgroundColor: C.mint, color: C.teal }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className={`${display.className} font-bold text-lg md:text-xl mb-2`}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            ))}
            {/* Tarjeta CTA dentro de la grilla */}
            <Reveal delay={SERVICIOS.length * 70}>
              <article
                className="h-full rounded-2xl p-6 flex flex-col justify-between min-h-[220px]"
                style={{ backgroundColor: C.petrol }}
              >
                <div>
                  <Paw className="w-8 h-8 mb-4" color={C.aqua} />
                  <h3 className={`${display.className} font-bold text-lg md:text-xl mb-2 text-white`}>
                    ¿No ves lo que necesitas?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.creamDim }}>
                    Pregunta por WhatsApp: ellos confirman si atienden tu caso y
                    coordinan la hora.
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full mt-5 transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.aqua, color: C.petrolDeep }}
                >
                  Preguntar por WhatsApp
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.petrol }}>
        <div
          className="absolute -top-10 -right-10 opacity-[0.06]"
          aria-hidden="true"
        >
          <Paw className="w-[300px] h-[300px]" color="#FFFFFF" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionLabel light>Por qué elegirlos</SectionLabel>
            <h2
              className={`${display.className} font-black text-[clamp(1.9rem,5.5vw,3.1rem)] leading-[1.08] text-white mb-12 md:mb-16 max-w-2xl`}
            >
              Lo que las reseñas{' '}
              <em className="italic font-medium" style={{ color: C.aquaSoft }}>
                repiten solas
              </em>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {RAZONES.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <article
                  className="h-full rounded-2xl p-6 md:p-7"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.14)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`${display.className} font-black text-2xl leading-none`}
                      style={{ color: C.aqua }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }} />
                  </div>
                  <h3 className={`${display.className} font-bold text-lg md:text-xl text-white mb-2`}>
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.creamDim }}>
                    {r.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.mint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-14 items-start">
            <Reveal>
              <SectionLabel>Reseñas</SectionLabel>
              <div className="flex items-end gap-3 mb-4">
                <span className={`${display.className} font-black text-6xl md:text-7xl leading-none`}>
                  {BIZ.rating}
                </span>
                <div className="pb-1.5">
                  <Stars value={4.6} color={C.coral} className="w-4 h-4" />
                  <p className="text-xs font-bold mt-1" style={{ color: C.muted }}>
                    {BIZ.googleReviews} reseñas en Google
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: C.muted }}>
                Las frases de abajo son reseñas reales publicadas en su ficha de
                Google Maps.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full border-2 transition-all hover:bg-black/5 active:scale-95 ${focusRing} tap-44`}
                style={{ borderColor: C.teal, color: C.teal }}
              >
                Ver en Google Maps
              </a>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 90} className={i === 0 ? 'sm:col-span-2' : ''}>
                  <figure
                    className="h-full rounded-2xl p-6 flex flex-col"
                    style={{
                      backgroundColor: C.paper,
                      border: `1px solid ${C.line}`,
                      boxShadow: '0 10px 30px rgba(11,59,53,0.06)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Stars value={5} color={C.coral} className="w-3.5 h-3.5" />
                      <span className="text-[11px]" style={{ color: C.muted }}>
                        {r.tiempo}
                      </span>
                    </div>
                    <blockquote className={`text-sm leading-relaxed flex-1 ${i === 0 ? 'md:text-base' : ''}`} style={{ color: C.ink }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className="mt-4 pt-4 text-xs font-bold flex items-center gap-2" style={{ borderTop: `1px solid ${C.line}`, color: C.muted }}>
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: C.mint }}
                      >
                        <Paw className="w-3.5 h-3.5" color={C.teal} />
                      </span>
                      {r.nombre}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visita: mapa + datos ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal className="order-2 md:order-1">
              <div className="relative h-full min-h-[320px] rounded-[22px] overflow-hidden shadow-lg" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </Reveal>
            <Reveal className="order-1 md:order-2" delay={100}>
              <SectionLabel>Cómo llegar</SectionLabel>
              <h2
                className={`${display.className} font-black text-[clamp(1.9rem,5.5vw,3.1rem)] leading-[1.08] mb-6`}
              >
                Sobre la avenida,{' '}
                <em className="italic font-medium" style={{ color: C.teal }}>
                  en el sector Ramadillas
                </em>
              </h2>
              <ul className="space-y-4 mb-7">
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: C.mint }}>
                    <Ico kind="pin" className="w-4.5 h-4.5 w-[18px] h-[18px]" color={C.teal} />
                  </span>
                  <div>
                    <p className="text-sm md:text-base font-bold">{BIZ.address}, {BIZ.city}</p>
                    <p className="text-xs md:text-sm" style={{ color: C.muted }}>
                      {BIZ.sector} · {BIZ.region}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: C.mint }}>
                    <Ico kind="clock" className="w-[18px] h-[18px]" color={C.teal} />
                  </span>
                  <div>
                    <p className="text-sm md:text-base font-bold">Horario por WhatsApp</p>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.muted }}>
                      No publican su horario: escribe antes de ir y te confirman
                      si están atendiendo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: C.mint }}>
                    <Ico kind="card" className="w-[18px] h-[18px]" color={C.teal} />
                  </span>
                  <div>
                    <p className="text-sm md:text-base font-bold">Tarjetas y efectivo</p>
                    <p className="text-xs md:text-sm" style={{ color: C.muted }}>
                      Pagos con Redcompra y tarjetas, según los stickers de su puerta.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK_URGENCIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.coralDeep, color: '#FFFFFF' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full border-2 transition-colors hover:bg-black/5 active:scale-95 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(17,49,44,0.28)', color: C.ink }}
                >
                  Abrir en Maps →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Fachada + CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.petrolDeep }}>
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/fachada.webp`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.16]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(6,36,32,0.4), rgba(6,36,32,0.85))' }}
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Paw className="w-9 h-9 mx-auto mb-5" color={C.aqua} />
            <h2
              className={`${display.className} font-black text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.06] mb-6 text-white`}
            >
              ¿Tu mascota necesita
              <br />
              <em className="italic font-medium" style={{ color: C.aquaSoft }}>
                una revisión?
              </em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: C.creamDim }}>
              Escríbeles por WhatsApp: cuentas qué le pasa a tu mascota y
              coordinan la atención.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${body.className} inline-flex items-center justify-center gap-2 text-base font-bold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.coralDeep, color: '#FFFFFF' }}
            >
              Escribir por WhatsApp
            </a>
            <p className="text-xs mt-6" style={{ color: C.creamFaint }}>
              {BIZ.phoneDisplay} · @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.petrolDeep, color: '#FFFFFF' }}>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-8">
            <p className={`${display.className} font-bold text-lg mb-1 flex items-center gap-2.5`}>
              <Paw className="w-4.5 h-4.5 w-[18px] h-[18px]" color={C.aqua} />
              {BIZ.name}
            </p>
            <p className="text-sm mb-2" style={{ color: C.creamDim }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: C.creamFaint }}>
              Sitio de ejemplo de Sitiazo: nombre, dirección, WhatsApp, Instagram,
              servicios, rating y reseñas son reales; los textos de cada sección
              son de muestra.
            </p>
          </div>
        </div>
      </footer>

      <div className="sc-band">
        <DemoBand name={BIZ.short} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
