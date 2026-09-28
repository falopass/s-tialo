import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, RESENAS, WA_LINK } from './content'

const IMG = '/demos/brilla-el-sol-talca'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900' },
  ],
})
const body = localFont({ src: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900' })

export const metadata: Metadata = demoMetadata({
  slug: 'brilla-el-sol-talca',
  title: 'Complejo Deportivo Brilla El Sol — Arriendo de cancha en Talca',
  description:
    'Campo de fútbol en 12 Sur con 6 Oriente, Talca. Cancha sintética con focos, abierto todos los días de 9:00 a 24:00. Reserva tu bloque de 90 minutos por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const C = {
  pitch: '#0E4A2B',
  pitchDeep: '#08301C',
  grass: '#1F7A43',
  sun: '#FFC63D',
  sunDeep: '#7A4A00',
  chalk: '#F5F7F2',
  ink: '#10231A',
  muted: '#46594D',
  line: 'rgba(16,35,26,0.14)',
}

const NAV_LINKS = [
  { label: 'La cancha', href: '#cancha' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
  { label: 'Dónde', href: '#ubicacion' },
]

const USOS = [
  {
    n: '01',
    t: 'Partidos con tu equipo',
    d: 'Cancha sintética con iluminación para jugar de día o de noche. La reserva es por bloques de 90 minutos.',
  },
  {
    n: '02',
    t: 'Escuela de fútbol',
    d: 'En el recinto entrena la escuela Rojinegros Talca Nuñez, con niños y niñas de 4 a 18 años.',
  },
  {
    n: '03',
    t: 'Campeonatos y eventos',
    d: 'Torneos, jornadas deportivas y actividades de barrio: hay estacionamiento y espacio para el público.',
  },
]

const PASOS = [
  { t: 'Escribe', d: 'Cuéntanos qué día y a qué hora quieres la cancha: atendemos todos los días de 9:00 a 24:00.' },
  { t: 'Confirma', d: 'Te respondemos por WhatsApp con la disponibilidad del bloque de 90 minutos y el valor.' },
  { t: 'A jugar', d: 'Llega a 12 Sur con 6 Oriente, Talca. Hay estacionamiento en el recinto.' },
]

const FOTOS = [
  { src: 'entrenamiento.webp', alt: 'Entrenamiento de la escuela de fútbol con conos y vallas en la cancha sintética' },
  { src: 'partido.webp', alt: 'Partido de niños en la cancha del Complejo Deportivo Brilla El Sol' },
  { src: 'cancha.webp', alt: 'Vista general de la cancha con familias mirando un partido desde la banda' },
  { src: 'entrada.webp', alt: 'Entrada y estacionamiento del recinto, con guardia en la garita' },
  { src: 'padel.webp', alt: 'Plaza con toldo y bancas junto a las canchas del complejo' },
  { src: 'padel2.webp', alt: 'Niño corriendo en el pasto de la plaza del recinto deportivo' },
]

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
        : { backgroundColor: 'rgba(0,0,0,0.55)', color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.85)' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-lg tracking-wide uppercase transition-transform active:scale-[0.97] tap-44`}
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

      {/* HERO — foto nocturna real del recinto */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: '#0B1A10' }}>
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Entrenamiento nocturno bajo los focos en el Complejo Deportivo Brilla El Sol"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,16,11,0.88) 0%, rgba(5,16,11,0.8) 55%, rgba(5,16,11,0.94) 100%)',
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 pt-28 pb-16 md:pt-40 md:pb-24">
          <Reveal>
            <p className={`${display.className} inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm uppercase tracking-widest`} style={{ backgroundColor: C.sun, color: C.ink }}>
              Campo de fútbol · Talca
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} mt-5 text-[54px] leading-[0.92] md:text-[96px] uppercase max-w-3xl`} style={{ color: '#FFFFFF', textShadow: '0 3px 24px rgba(0,0,0,0.45)' }}>
              Arrienda tu cancha,
              <br />
              <span style={{ color: C.sun }}>juega hasta medianoche</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed max-w-xl font-medium" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Cancha sintética con focos en 12 Sur con 6 Oriente. Abierto todos los días de 9:00 a 24:00;
              reserva tu bloque de 90 minutos por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="sun">Reservar por WhatsApp</Btn>
              <Btn href="#cancha" tone="chalk" external={false}>Ver el recinto</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARCADOR — datos reales de la ficha */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.sun }}>
        <div className="max-w-6xl mx-auto px-5 py-5 grid grid-cols-3 gap-2 text-center">
          {[
            [`${BIZ.rating}★`, `${BIZ.reviews} reseñas en Google`],
            ['9–24 h', 'todos los días'],
            [BIZ.bloque, 'por bloque de arriendo'],
          ].map(([a, b]) => (
            <div key={a}>
              <p className={`${display.className} text-2xl md:text-3xl uppercase leading-none`} style={{ color: C.ink }}>{a}</p>
              <p className="text-xs md:text-sm mt-1 font-semibold" style={{ color: '#3D3005' }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECINTO */}
      <section id="cancha" className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-sm uppercase tracking-widest`} style={{ color: C.sunDeep }}>La cancha</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.pitchDeep }}>
              La cancha del <span style={{ color: C.grass }}>suroriente</span> de Talca
            </h2>
            <p className="mt-4 max-w-2xl text-lg" style={{ color: C.muted }}>
              Sintética, iluminada y con estacionamiento. Partidos, entrenamientos y campeonatos se
              coordinan por WhatsApp.
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

          {/* fotos reales del recinto (ficha de Google Maps) */}
          <Reveal delay={140}>
            <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
              {FOTOS.map((f) => (
                <li key={f.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ boxShadow: '0 10px 24px rgba(16,35,26,0.12)' }}>
                  <Image
                    src={`${IMG}/${f.src}`}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm" style={{ color: C.muted }}>
              Fotos reales publicadas en la ficha de Google Maps del complejo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RESEÑAS — texto real de Google */}
      <section id="resenas" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.pitch }}>
        <Rayos id="bes-res" color={C.chalk} opacity={0.06} />
        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-sm uppercase tracking-widest`} style={{ color: C.sun }}>Lo que dice la gente</p>
            <div className="mt-2 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.chalk }}>
                {BIZ.rating} en Google
              </h2>
              <div className="pb-1 flex items-center gap-2">
                <Stars value={4.5} color={C.sun} className="w-5 h-5" />
                <span className="text-sm font-semibold" style={{ color: 'rgba(245,247,242,0.85)' }}>{BIZ.reviews} reseñas</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <figure className="h-full rounded-2xl p-6 flex flex-col" style={{ backgroundColor: 'rgba(8,48,28,0.55)', boxShadow: 'inset 0 0 0 1px rgba(245,247,242,0.12)' }}>
                  <Stars value={5} color={C.sun} className="w-4 h-4" />
                  <blockquote className="mt-3 leading-relaxed flex-1" style={{ color: 'rgba(245,247,242,0.9)' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${display.className} mt-4 text-lg uppercase tracking-wide`} style={{ color: C.sun }}>
                    {r.nombre}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-5 text-sm" style={{ color: 'rgba(245,247,242,0.65)' }}>
              Reseñas reales copiadas de la ficha de Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RESERVAR */}
      <section id="reservar" className="relative py-16 md:py-24">
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <Reveal>
            <p className={`${display.className} text-sm uppercase tracking-widest`} style={{ color: C.sunDeep }}>Reservar</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.pitchDeep }}>
              Tres toques y <span style={{ color: C.grass }}>listo</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>
              Sin formularios ni llamadas perdidas: un mensaje y coordinamos tu bloque de 90 minutos.
            </p>
            <div className="mt-5 rounded-xl p-4 text-sm leading-relaxed font-medium" style={{ backgroundColor: 'rgba(255,198,61,0.28)', color: C.ink }}>
              Horario del recinto: {BIZ.horario}.
            </div>
            <div className="mt-6">
              <Btn href={WA_LINK} tone="pitch">Escribir ahora</Btn>
            </div>
          </Reveal>
          <ol className="grid gap-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <li className="flex gap-4 rounded-2xl p-5" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 12px 30px rgba(16,35,26,0.10)' }}>
                  <span className={`${display.className} shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl`} style={{ backgroundColor: C.sun, color: C.ink }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-2xl uppercase`} style={{ color: C.pitchDeep }}>{p.t}</h3>
                    <p className="mt-1 leading-relaxed" style={{ color: C.muted }}>{p.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="py-16 md:py-24" style={{ backgroundColor: 'rgba(31,122,67,0.07)' }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${display.className} text-sm uppercase tracking-widest`} style={{ color: C.sunDeep }}>Dónde</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.pitchDeep }}>
              12 Sur con <span style={{ color: C.grass }}>6 Oriente</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, Región del Maule
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={MAPS_URL} tone="pitch">Cómo llegar</Btn>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-lg tracking-wide uppercase tap-44`}
                style={{ color: C.pitch, boxShadow: `inset 0 0 0 2px ${C.pitch}` }}
              >
                {BIZ.phoneDisplay}
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
          <p className="mt-4 text-lg font-medium" style={{ color: '#3D3005' }}>
            Escríbenos y reserva la cancha para tu equipo.
          </p>
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
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.horario}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44">Facebook</a>
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
