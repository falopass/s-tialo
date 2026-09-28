import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900' },
  ],
})
const body = localFont({ src: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900' })

export const metadata: Metadata = demoMetadata({
  slug: 'brilla-el-sol-talca',
  title: 'Complejo Deportivo Brilla El Sol — Recinto deportivo en Talca',
  description:
    'Recinto deportivo en 12 Sur con 6 Oriente, Talca. Consulta disponibilidad, horarios y reservas por WhatsApp.',
})

const C = {
  pitch: '#0E4A2B',
  pitchDeep: '#08301C',
  grass: '#1F7A43',
  sun: '#FFC63D',
  sunDeep: '#8A5200',
  chalk: '#F5F7F2',
  ink: '#10231A',
  muted: '#4B5E52',
  line: 'rgba(16,35,26,0.14)',
}

const NAV_LINKS = [
  { label: 'Recinto', href: '#recinto' },
  { label: 'Reservar', href: '#reservar' },
  { label: 'Dónde', href: '#ubicacion' },
]

const PHONE_DISPLAY = '+56 9 8181 2455'

const USOS = [
  { n: '01', t: 'Partidos', d: 'Junta a tu equipo y consulta la disponibilidad del recinto para el día que quieran jugar.' },
  { n: '02', t: 'Entrenamientos', d: 'Espacio para practicar con regularidad: pregunta por bloques semanales.' },
  { n: '03', t: 'Actividades y eventos', d: 'Campeonatos, jornadas deportivas o actividades de barrio: escribe y coordina.' },
]

const PASOS = [
  { t: 'Escribe', d: 'Cuéntanos qué día, a qué hora y para qué actividad necesitas el recinto.' },
  { t: 'Confirma', d: 'Te respondemos por WhatsApp con la disponibilidad y las condiciones.' },
  { t: 'A jugar', d: 'Llega a 12 Sur con 6 Oriente, Talca, y disfruta tu bloque.' },
]

const CONSULTAS = ['Disponibilidad', 'Horarios', 'Valores', 'Bloques semanales', 'Campeonatos', 'Eventos']

function Rayos({ id, color, opacity = 0.12 }: { id: string; color: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke={color} strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  )
}

function Sol({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="14" fill={C.sun} />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x="30" y="4" width="4" height="10" rx="2" fill={C.sun} transform={`rotate(${i * 30} 32 32)`} />
      ))}
    </svg>
  )
}

function CanchaScene() {
  return (
    <svg
      viewBox="0 0 560 420"
      className="w-full h-auto"
      role="img"
      aria-label="Ilustración de una cancha con el sol saliendo detrás de los cerros"
    >
      <defs>
        <linearGradient id="bes-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B2E1F" />
          <stop offset="1" stopColor="#1F5A38" />
        </linearGradient>
        <clipPath id="bes-clip">
          <rect x="0" y="0" width="560" height="420" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#bes-clip)">
        <rect width="560" height="420" fill="url(#bes-sky)" />
        <g opacity="0.55">
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x="278" y="40" width="4" height="150" fill={C.sun} opacity="0.25" transform={`rotate(${i * 22.5} 280 230)`} />
          ))}
        </g>
        <circle cx="280" cy="230" r="72" fill={C.sun} />
        <path d="M0 250 Q 90 190 190 240 T 380 235 T 560 225 V 420 H 0 Z" fill="#145533" />
        <path d="M0 290 Q 140 255 280 285 T 560 280 V 420 H 0 Z" fill="#1F7A43" />
        <path d="M0 420 L 120 300 H 440 L 560 420 Z" fill="#2C9455" />
        <g stroke={C.chalk} strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M120 300 H 440" />
          <path d="M0 420 L 120 300 M 560 420 L 440 300" />
          <path d="M60 360 H 500" />
          <path d="M280 300 V 420" />
          <ellipse cx="280" cy="360" rx="46" ry="18" />
          <path d="M215 300 V 322 H 345 V 300" />
        </g>
        <g>
          <rect x="245" y="256" width="70" height="44" fill="none" stroke={C.chalk} strokeWidth="4" />
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`v${i}`} x1={251 + i * 11.5} y1="258" x2={251 + i * 11.5} y2="298" stroke={C.chalk} strokeWidth="1" opacity="0.6" />
          ))}
          {Array.from({ length: 3 }).map((_, i) => (
            <line key={`h${i}`} x1="247" y1={266 + i * 11} x2="313" y2={266 + i * 11} stroke={C.chalk} strokeWidth="1" opacity="0.6" />
          ))}
        </g>
        <g transform="translate(150 370)">
          <circle r="22" fill={C.chalk} />
          <path d="M-8 -6 L0 -14 L8 -6 L5 4 H-5 Z" fill={C.ink} />
          <path d="M0 -14 V -22 M-8 -6 L-19 -9 M8 -6 L19 -9 M-5 4 L-11 14 M5 4 L11 14" stroke={C.ink} strokeWidth="2.5" fill="none" />
        </g>
        <g transform="translate(470 350)">
          <rect x="-10" y="0" width="20" height="40" rx="4" fill={C.sun} />
          <rect x="-13" y="-6" width="26" height="8" rx="3" fill={C.sunDeep} />
        </g>
      </g>
    </svg>
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
  tone: 'sun' | 'pitch' | 'chalk'
  external?: boolean
}) {
  const st =
    tone === 'sun'
      ? { backgroundColor: C.sun, color: C.ink }
      : tone === 'pitch'
        ? { backgroundColor: C.pitch, color: C.chalk }
        : { backgroundColor: 'transparent', color: C.chalk, boxShadow: `inset 0 0 0 2px ${C.chalk}` }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center justify-center px-6 py-3 rounded-xl text-lg tracking-wide uppercase transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function BrillaElSolPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.chalk, color: C.ink }}>
      <BlitzNav
        name="Brilla El Sol"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'dark', bar: 'rgba(8,48,28,0.94)', ink: C.chalk, line: 'rgba(245,247,242,0.15)', btnBg: C.sun, btnInk: C.ink }}
        ctaLabel="Reservar"
      />

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20" style={{ backgroundColor: C.pitchDeep }}>
        <Rayos id="bes-hero" color={C.sun} opacity={0.07} />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-[1.05fr_1fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${display.className} inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm uppercase tracking-widest`} style={{ backgroundColor: C.sun, color: C.ink }}>
                Recinto deportivo · Talca
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} mt-5 text-[52px] leading-[0.92] md:text-[84px] uppercase`} style={{ color: C.chalk }}>
                Sale el sol,
                <br />
                <span style={{ color: C.sun }}>sale el partido</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(245,247,242,0.82)' }}>
                Complejo Deportivo Brilla El Sol, en 12 Sur con 6 Oriente. Consulta disponibilidad y reserva tu bloque
                por WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="sun">Reservar por WhatsApp</Btn>
                <Btn href="#reservar" tone="chalk" external={false}>Cómo funciona</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="rounded-[28px] overflow-hidden" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.35)' }}>
              <CanchaScene />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARCADOR */}
      <section className="relative" style={{ backgroundColor: C.sun }}>
        <div className="max-w-6xl mx-auto px-5 py-5 grid grid-cols-3 gap-3 text-center">
          {[
            ['12 Sur', 'con 6 Oriente'],
            ['Talca', 'Región del Maule'],
            ['WhatsApp', 'respuesta directa'],
          ].map(([a, b]) => (
            <div key={a}>
              <p className={`${display.className} text-2xl md:text-3xl uppercase leading-none`} style={{ color: C.ink }}>{a}</p>
              <p className="text-xs md:text-sm mt-1 font-medium" style={{ color: '#4A3A08' }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECINTO */}
      <section id="recinto" className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-sm uppercase tracking-widest`} style={{ color: C.sunDeep }}>El recinto</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.pitchDeep }}>
              Un lugar para <span style={{ color: C.grass }}>jugar</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg" style={{ color: C.muted }}>
              Recinto deportivo en Talca, pensado para equipos, grupos de amigos y organizaciones que necesitan un
              espacio para su actividad.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {USOS.map((u, i) => (
              <Reveal key={u.n} delay={i * 90}>
                <article
                  className="relative h-full rounded-2xl p-6 overflow-hidden"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 12px 30px rgba(16,35,26,0.10)', borderTop: `6px solid ${i === 1 ? C.sun : C.grass}` }}
                >
                  <span className={`${display.className} text-5xl leading-none`} style={{ color: i === 1 ? C.sunDeep : C.grass }}>{u.n}</span>
                  <h3 className={`${display.className} mt-3 text-2xl uppercase`} style={{ color: C.pitchDeep }}>{u.t}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: C.muted }}>{u.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-2">
              {CONSULTAS.map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-md text-sm font-semibold" style={{ backgroundColor: 'rgba(31,122,67,0.12)', color: C.pitch }}>
                  {c}
                </span>
              ))}
              <span className="px-3 py-1.5 text-sm" style={{ color: C.muted }}>— todo se consulta por WhatsApp</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESERVAR */}
      <section id="reservar" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.pitch }}>
        <Rayos id="bes-res" color={C.chalk} opacity={0.06} />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <Reveal>
            <p className={`${display.className} text-sm uppercase tracking-widest`} style={{ color: C.sun }}>Reservar</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.chalk }}>
              Tres toques y <span style={{ color: C.sun }}>listo</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'rgba(245,247,242,0.8)' }}>
              Sin formularios ni llamadas perdidas: un mensaje y coordinamos.
            </p>
            <div className="mt-6">
              <Btn href={WA_LINK} tone="sun">Escribir ahora</Btn>
            </div>
          </Reveal>
          <ol className="grid gap-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <li className="flex gap-4 rounded-2xl p-5" style={{ backgroundColor: 'rgba(8,48,28,0.55)', boxShadow: `inset 0 0 0 1px rgba(245,247,242,0.12)` }}>
                  <span className={`${display.className} shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl`} style={{ backgroundColor: C.sun, color: C.ink }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-2xl uppercase`} style={{ color: C.chalk }}>{p.t}</h3>
                    <p className="mt-1 leading-relaxed" style={{ color: 'rgba(245,247,242,0.8)' }}>{p.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${display.className} text-sm uppercase tracking-widest`} style={{ color: C.sunDeep }}>Dónde</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.pitchDeep }}>
              12 Sur con <span style={{ color: C.grass }}>6 Oriente</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, Región del Maule
            </p>
            <div className="mt-5 rounded-xl p-4 text-sm leading-relaxed" style={{ backgroundColor: 'rgba(255,198,61,0.25)', color: C.ink }}>
              Los horarios de uso dependen de la reserva: confirma tu bloque por WhatsApp antes de ir.
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={MAPS_URL} tone="pitch">Cómo llegar</Btn>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center px-6 py-3 rounded-xl text-lg tracking-wide uppercase tap-44`}
                style={{ color: C.pitch, boxShadow: `inset 0 0 0 2px ${C.pitch}` }}
              >
                WhatsApp {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[28px] overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(16,35,26,0.18)', border: `6px solid ${C.pitch}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.sun }}>
        <Rayos id="bes-cta" color={C.ink} opacity={0.06} />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className={`${display.className} mt-4 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.ink }}>
            ¿Armamos el partido?
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#4A3A08' }}>Escríbenos y reserva el recinto para tu equipo.</p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="pitch">Reservar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.pitchDeep, color: 'rgba(245,247,242,0.75)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl uppercase tracking-wide inline-flex items-center gap-2`} style={{ color: C.chalk }}>
              <Sol className="w-6 h-6" /> {BIZ.name}
            </p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city}</p>
          </div>
          <nav className="flex gap-4 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
