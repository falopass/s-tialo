import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_ESTERILIZACION,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HOURS,
  PRECIOS,
  REVIEWS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono',
})

const C = {
  paper: '#FBF6ED',
  card: '#FFFDF8',
  ink: '#24312A',
  muted: '#5D6B61',
  green: '#2E6B4F',
  greenDeep: '#1C4433',
  softGreen: '#E9F1E6',
  coral: '#B04A2A',
  coralSoft: '#F4DFCF',
  line: 'rgba(36,49,42,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-veterinaria-zoovet',
  title: 'Clínica Veterinaria Zoovet — Talca',
  description:
    'Clínica veterinaria en 26 ½ Sur D 022, Talca. Consultas, vacunas, esterilizaciones con traslado y urgencias. Agenda por WhatsApp.',
  image: `${IMG}/p6.webp`,
})

const NAV_LINKS = [
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  {
    num: '01',
    title: 'Consulta general y control',
    desc: 'Revisión completa sin apuro: peso, pelaje, oídos y todo lo que haga falta explicar con calma.',
  },
  {
    num: '02',
    title: 'Vacunación y desparasitación',
    desc: 'Sextuple, antirrábica y calendario completo para cachorros y adultos, con su carnet al día.',
  },
  {
    num: '03',
    title: 'Esterilización y castración',
    desc: 'Operativos frecuentes para gatos y perros, con opción de retiro y entrega a domicilio.',
  },
  {
    num: '04',
    title: 'Urgencias en horario de atención',
    desc: 'Si tu mascota llega mal, la ven de inmediato dentro del horario de la clínica.',
  },
  {
    num: '05',
    title: 'Diagnóstico y tratamiento',
    desc: 'Evaluación, exámenes y un plan claro: qué tiene, cómo se trata y cuánto costará.',
  },
  {
    num: '06',
    title: 'Seguimiento por WhatsApp',
    desc: 'Preguntas post consulta y control de la evolución directo al celular de la clínica.',
  },
] as const

const PACIENTES = [
  {
    src: `${IMG}/p2.webp`,
    alt: 'Gato atigrado y blanco descansando tranquilo sobre un cojín dentro de la clínica veterinaria',
    ficha: 'paciente felino',
    nota: 'Consulta sin estrés',
  },
  {
    src: `${IMG}/p3.webp`,
    alt: 'Gatito naranja recostado y dormido sobre las piernas de una persona',
    ficha: 'cachorro felino',
    nota: 'Primera visita',
  },
  {
    src: `${IMG}/p4.webp`,
    alt: 'Gato naranja con collar descansando sobre el piso de la clínica',
    ficha: 'paciente felino',
    nota: 'Recuperación tranquila',
  },
  {
    src: `${IMG}/p5.webp`,
    alt: 'Gato negro sentado sobre el piso del local de la clínica veterinaria',
    ficha: 'paciente felino',
    nota: 'De control en la casa',
  },
] as const

const WHY = [
  {
    title: 'Explican todo, en simple',
    desc: 'Qué tiene tu mascota, cómo se trata y cuánto cuesta, antes de cualquier procedimiento. Sin letra chica.',
  },
  {
    title: 'Valores de barrio, precios publicados',
    desc: 'La clínica muestra sus valores en sus propios afiches. Las reseñas lo repiten: atención buena y accesible.',
  },
  {
    title: 'Amor por los cuatro patitas',
    desc: 'Los pacientes llegan por nombre y salen con seguimiento. Hasta los gatos de la casa —Bigote y Dasha— saludan.',
  },
] as const

function Paw({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="7.2" cy="8" rx="1.9" ry="2.5" transform="rotate(-18 7.2 8)" />
      <ellipse cx="16.8" cy="8" rx="1.9" ry="2.5" transform="rotate(18 16.8 8)" />
      <ellipse cx="4" cy="12.8" rx="1.5" ry="2" transform="rotate(-34 4 12.8)" />
      <ellipse cx="20" cy="12.8" rx="1.5" ry="2" transform="rotate(34 20 12.8)" />
      <path d="M12 11.5c-2.8 0-5 2.5-5 5 0 1.7 1.2 2.8 2.7 2.8 1 0 1.6-.5 2.3-.5s1.3.5 2.3.5c1.5 0 2.7-1.1 2.7-2.8 0-2.5-2.2-5-5-5Z" />
    </svg>
  )
}

/** Sello circular "atendido en Zoovet" — motivo que se repite en fichas y reseñas. */
function Stamp({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center rounded-full border-2 border-dashed ${className}`}
      style={{ borderColor: C.coral, color: C.coral }}
    >
      <div className="text-center leading-none" style={{ fontFamily: 'var(--font-mono)' }}>
        <Paw className="w-5 h-5 mx-auto mb-1" color={C.coral} />
        <p className="text-[8px] font-bold uppercase tracking-[0.18em]">Zoovet</p>
        <p className="text-[7px] uppercase tracking-[0.14em] mt-0.5">atendido</p>
      </div>
    </div>
  )
}

/** Línea de corte con tijera — separador de "carnet". */
function CutLine() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3">
      <span
        className="h-px flex-1"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${C.muted} 0 8px, transparent 8px 14px)`,
          opacity: 0.55,
        }}
      />
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.muted} strokeWidth="1.6" aria-hidden="true">
        <circle cx="6" cy="6" r="2.6" />
        <circle cx="6" cy="18" r="2.6" />
        <path d="M8.4 7.8 20 18M8.4 16.2 20 6" />
      </svg>
      <span
        className="h-px flex-1"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${C.muted} 0 8px, transparent 8px 14px)`,
          opacity: 0.55,
        }}
      />
    </div>
  )
}

function MonoLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3"
      style={{ fontFamily: 'var(--font-mono)', color: light ? C.coralSoft : C.coral }}
    >
      {children}
    </p>
  )
}

export default function ZoovetDemo() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body)' }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass="font-[var(--font-display)]"
        ctaLabel="Agendar hora"
        theme={{
          over: 'light',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.green,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ————— HERO ————— */}
      <section className="relative px-5 pt-10 pb-12 sm:px-8 lg:px-14 lg:pt-16 lg:pb-20">
        <Paw className="absolute top-8 right-6 w-10 h-10 opacity-[0.08] rotate-12" />
        <Paw className="absolute bottom-6 left-4 w-14 h-14 opacity-[0.06] -rotate-12" />
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <MonoLabel>Clínica veterinaria · Talca</MonoLabel>
              <h1
                className="text-[2.55rem] leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Cada paciente tiene nombre.
                <span className="block" style={{ color: C.green }}>
                  Y carnet.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: C.muted }}>
                En {BIZ.short} tu mascota no es un número: es un paciente con ficha,
                seguimiento y toda la paciencia del mundo. Clínica veterinaria de
                barrio en {BIZ.address}, {BIZ.city}.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-base font-bold text-white shadow-[0_10px_24px_-10px_rgba(28,68,51,0.6)] transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: C.green }}
                >
                  <Paw className="w-4 h-4" color="#fff" />
                  Agenda por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="inline-flex h-12 items-center rounded-full border px-6 text-base font-bold transition-colors hover:bg-white"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm" style={{ color: C.muted }}>
                <span className="inline-flex items-center gap-1.5">
                  <Stars value={5} color={C.coral} className="w-3.5 h-3.5" />
                  <strong style={{ color: C.ink }}>{BIZ.rating}</strong> · {BIZ.reviews} reseñas en Google
                </span>
                <span className="hidden h-4 w-px sm:block" style={{ backgroundColor: C.line }} />
                <span>
                  <strong style={{ color: C.ink }}>{BIZ.igFollowers}</strong> seguidores en Instagram
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                className="absolute -inset-2 rounded-[2rem] rotate-[2.5deg]"
                style={{ backgroundColor: C.softGreen, border: `1.5px solid ${C.line}` }}
                aria-hidden="true"
              />
              <figure
                className="relative rounded-[1.6rem] p-3 pb-14 shadow-[0_24px_50px_-24px_rgba(36,49,42,0.45)]"
                style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}
              >
                <div className="flex items-center justify-between px-1 pb-3">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
                  >
                    Ficha Nº 088 — paciente
                  </p>
                  <span className="flex gap-1" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: C.coral }} />
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: C.green }} />
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={`${IMG}/p6.webp`}
                    alt="Cachorro blanco sostenido en brazos dentro del box de atención de la clínica veterinaria Zoovet"
                    width={900}
                    height={1056}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption
                  className="absolute bottom-4 left-0 right-0 text-center text-[11px] uppercase tracking-[0.18em]"
                  style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
                >
                  Primera consulta — Zoovet, Talca
                </figcaption>
                <Stamp className="absolute -bottom-4 -right-3 h-20 w-20 rotate-12 bg-[#FFFDF8]" />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— CIFRAS ————— */}
      <section style={{ backgroundColor: C.greenDeep }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-5 py-10 sm:grid-cols-4 sm:px-8 lg:px-14">
          {[
            [BIZ.rating, 'en Google'],
            [`${BIZ.reviews}`, 'reseñas reales'],
            [BIZ.igFollowers, 'seguidores en IG'],
            ['6', 'días a la semana'],
          ].map(([n, l]) => (
            <Reveal key={l}>
              <div className="text-center sm:text-left">
                <p
                  className="text-3xl font-extrabold leading-none sm:text-4xl"
                  style={{ fontFamily: 'var(--font-display)', color: C.coralSoft }}
                >
                  {n}
                </p>
                <p
                  className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,223,207,0.75)' }}
                >
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— PACIENTES ————— */}
      <section id="pacientes" className="scroll-mt-20 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <MonoLabel>Sala de espera</MonoLabel>
            <h2
              className="max-w-xl text-3xl font-extrabold leading-tight sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pacientes que ya pasaron por la mesa
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
              Fotos reales de la clínica y sus pacientes. Cada uno entra con su ficha
              y sale con seguimiento por WhatsApp.
            </p>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PACIENTES.map((p, i) => (
              <Reveal key={p.src} delay={i * 90}>
                <figure
                  className="group overflow-hidden rounded-3xl p-2 pb-3 shadow-[0_14px_30px_-18px_rgba(36,49,42,0.4)]"
                  style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={900}
                      height={1100}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between px-2 pt-2.5">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em] sm:text-[10px]"
                      style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
                    >
                      {p.ficha}
                    </span>
                    <span className="text-[10px] font-bold sm:text-[11px]" style={{ color: C.green }}>
                      {p.nota}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-14">
        <CutLine />
      </div>

      {/* ————— SERVICIOS ————— */}
      <section id="servicios" className="scroll-mt-20 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <MonoLabel>Lo que hacemos</MonoLabel>
            <h2
              className="max-w-xl text-3xl font-extrabold leading-tight sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Del control anual a la urgencia que no espera
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.num} delay={i * 70}>
                <article
                  className="h-full rounded-3xl p-5 shadow-[0_14px_30px_-20px_rgba(36,49,42,0.4)]"
                  style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold"
                      style={{ fontFamily: 'var(--font-mono)', color: C.coral }}
                    >
                      {s.num}
                    </span>
                    <Paw className="w-4 h-4" color={C.green} />
                  </div>
                  <h3
                    className="mt-4 text-xl font-extrabold leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Precios publicados */}
          <Reveal delay={100}>
            <div
              className="mt-8 overflow-hidden rounded-3xl shadow-[0_18px_40px_-22px_rgba(36,49,42,0.5)]"
              style={{ backgroundColor: C.green }}
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="p-6 sm:p-8" style={{ color: '#fff' }}>
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.22em]"
                    style={{ fontFamily: 'var(--font-mono)', color: C.coralSoft }}
                  >
                    Precios claros
                  </p>
                  <h3
                    className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Los valores se ven antes de entrar
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    Precios tal como la clínica los publica en sus afiches de Instagram.
                    Para el resto, se consulta y se confirma por WhatsApp.
                  </p>
                  <a
                    href={WA_LINK_ESTERILIZACION}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                    style={{ color: C.greenDeep }}
                  >
                    Consultar esterilización →
                  </a>
                </div>
                <div className="p-6 sm:p-8" style={{ backgroundColor: C.card }}>
                  <ul className="divide-y" style={{ borderColor: C.line }}>
                    {PRECIOS.map((p) => (
                      <li
                        key={p.item}
                        className="flex items-baseline justify-between gap-3 py-3.5"
                        style={{ borderColor: C.line }}
                      >
                        <span className="text-sm font-semibold sm:text-base">{p.item}</span>
                        <span
                          className="shrink-0 text-base font-extrabold sm:text-lg"
                          style={{ fontFamily: 'var(--font-display)', color: C.coral }}
                        >
                          {p.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="mt-3 text-[10px] uppercase tracking-[0.16em]"
                    style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
                  >
                    Valores publicados por la clínica — referenciales
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— POR QUÉ ————— */}
      <section style={{ backgroundColor: C.greenDeep }} className="px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <MonoLabel light>Por qué Zoovet</MonoLabel>
            <h2
              className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Lo que los tutores repiten en sus reseñas
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <article
                  className="relative h-full rounded-3xl p-6"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(244,223,207,0.25)' }}
                >
                  <Stamp className="h-16 w-16 -rotate-6 bg-[#FBF6ED]" />
                  <h3
                    className="mt-5 text-xl font-extrabold leading-snug"
                    style={{ fontFamily: 'var(--font-display)', color: C.coralSoft }}
                  >
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
                    {w.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— RESEÑAS ————— */}
      <section id="resenas" className="scroll-mt-20 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <MonoLabel>Prueba social</MonoLabel>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                className="max-w-xl text-3xl font-extrabold leading-tight sm:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {BIZ.rating} en Google, {BIZ.reviews} reseñas
              </h2>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
              >
                Reseñas reales · Google Maps
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <figure
                  className="relative h-full rounded-3xl p-6 shadow-[0_14px_30px_-20px_rgba(36,49,42,0.4)]"
                  style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}
                >
                  <Paw className="absolute right-5 top-5 w-6 h-6 opacity-15" color={C.green} />
                  <Stars value={5} color={C.coral} className="w-4 h-4" />
                  <blockquote
                    className="mt-4 text-base font-bold leading-snug sm:text-lg"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold text-white"
                      style={{ backgroundColor: C.green, fontFamily: 'var(--font-display)' }}
                      aria-hidden="true"
                    >
                      {r.name.charAt(0).toUpperCase()}
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{r.name}</span>
                      <span
                        className="block text-[10px] uppercase tracking-[0.16em]"
                        style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
                      >
                        Reseña de Google
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-14">
        <CutLine />
      </div>

      {/* ————— CONTACTO ————— */}
      <section id="contacto" className="scroll-mt-20 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <MonoLabel>Cómo llegar</MonoLabel>
              <h2
                className="text-3xl font-extrabold leading-tight sm:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {BIZ.address}, {BIZ.city}
              </h2>
              <p className="mt-3 text-base leading-relaxed" style={{ color: C.muted }}>
                Sector sur de Talca, {BIZ.region}. El agendamiento es por WhatsApp:
                escribe y te confirman hora el mismo día.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-7 space-y-0 rounded-3xl p-5 shadow-[0_14px_30px_-20px_rgba(36,49,42,0.4)]" style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}>
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-3 border-b py-3 last:border-0"
                    style={{ borderColor: C.line }}
                  >
                    <span className="text-sm font-semibold sm:text-base">{h.day}</span>
                    <span
                      className="text-sm font-bold sm:text-base"
                      style={{ fontFamily: 'var(--font-mono)', color: h.time === 'Cerrado' ? C.coral : C.green }}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-3 text-[10px] uppercase tracking-[0.16em]"
                style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
              >
                Horario según ficha de Google Maps
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: C.green }}
                >
                  <Paw className="w-4 h-4" color="#fff" />
                  Escribir al {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center rounded-full border px-6 text-base font-bold transition-colors hover:bg-white"
                  style={{ borderColor: C.ink }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div
              className="overflow-hidden rounded-3xl shadow-[0_18px_40px_-22px_rgba(36,49,42,0.5)]"
              style={{ border: `1.5px solid ${C.line}`, backgroundColor: C.card }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="h-[320px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— CTA FINAL ————— */}
      <section className="px-5 pb-14 sm:px-8 lg:px-14">
        <Reveal>
          <div
            className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:py-16"
            style={{ backgroundColor: C.greenDeep }}
          >
            <Paw className="absolute left-6 top-6 w-12 h-12 opacity-15 -rotate-12" color={C.coralSoft} />
            <Paw className="absolute bottom-6 right-8 w-16 h-16 opacity-10 rotate-12" color={C.coralSoft} />
            <p
              className="text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ fontFamily: 'var(--font-mono)', color: C.coralSoft }}
            >
              {BIZ.name}
            </p>
            <h2
              className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tu mascota merece un carnet con su nombre
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-base font-extrabold transition-transform hover:-translate-y-0.5"
              style={{ color: C.greenDeep }}
            >
              <Paw className="w-4 h-4" color={C.greenDeep} />
              Agendar hora por WhatsApp
            </a>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {BIZ.phoneDisplay} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ————— FOOTER ————— */}
      <footer className="px-5 pb-6 sm:px-8 lg:px-14" style={{ borderTop: `1px solid ${C.line}` }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between" style={{ color: C.muted }}>
          <p>
            Demo de muestra para <strong style={{ color: C.ink }}>{BIZ.name}</strong> — datos
            públicos de Google Maps e Instagram; fotos y reseñas reales de su ficha.
          </p>
          <p>
            Hecho por {SITE.name} ·{' '}
            <a href={whatsappLink('contacto')} className="font-bold underline underline-offset-2" style={{ color: C.green }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp ${BIZ.short}`} />
    </main>
  )
}
