import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, RESENAS, WA_LINK } from './content'

const IMG = '/demos/complejo-deportivo-carlos-aravena-se'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({ src: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

export const metadata: Metadata = demoMetadata({
  slug: 'complejo-deportivo-carlos-aravena-se',
  title: 'Complejo Deportivo Carlos Aravena — Piscina y cancha en Talca',
  description:
    'Centro deportivo del SERVIU Región del Maule en Calle 12 Oriente 1289, Talca: piscina al aire libre, cancha sintética, parque y salas multiuso. Consulta por WhatsApp.',
  image: `${IMG}/piscina.webp`,
})

const C = {
  ink: '#14181B',
  inkSoft: '#1E2529',
  paper: '#F2EFE4',
  card: '#FBFAF4',
  water: '#0E86B0',
  waterDeep: '#075E7D',
  muted: '#4D584F',
  line: 'rgba(20,24,27,0.14)',
}

const NAV_LINKS = [
  { label: 'Qué hay', href: '#instalaciones' },
  { label: 'Horario', href: '#horario' },
  { label: 'Dónde', href: '#ubicacion' },
]

const INSTALACIONES = [
  { src: 'piscina.webp', t: 'Piscina al aire libre', d: 'La favorita del verano: agua abierta con carpa y espacio para la familia.', big: true, alt: 'Piscina al aire libre del complejo llena de bañistas un día de verano' },
  { src: 'cancha.webp', t: 'Cancha multiuso', d: 'Pasto sintético repuesto en 2024: fútbol y actividades deportivas.', big: false, alt: 'Cancha de pasto sintético con arcos en el Complejo Carlos Aravena' },
  { src: 'parque.webp', t: 'Parque y juegos', d: 'Sombra, mesas y juegos infantiles para pasar la tarde.', big: false, alt: 'Área de parque con árboles, mesas de picnic y juegos infantiles' },
  { src: 'gimnasio.webp', t: 'Gimnasio al aire libre', d: 'Máquinas de ejercicio junto a la piscina y el pasto.', big: false, alt: 'Máquinas de ejercicio al aire libre junto a la piscina' },
  { src: 'sala.webp', t: 'Salas multiuso', d: 'Espacios techados para reuniones, talleres y actividades.', big: false, alt: 'Sala multiuso interior con mesas, sillas y cocina' },
  { src: 'piscina-tarde.webp', t: 'Tardes de piscina', d: 'El recinto también se arrienda para grupos: consulta condiciones.', big: false, alt: 'Piscina del complejo al atardecer detrás de la cerca' },
]

const HORARIO = [
  ['Lunes a viernes', '7:30–21:00'],
  ['Sábado', '8:00–16:00'],
  ['Domingo', 'Cerrado'],
]

function Olas({ id, color, opacity = 0.1 }: { id: string; color: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false" preserveAspectRatio="none" viewBox="0 0 400 400">
      <defs>
        <pattern id={id} width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q20 4 40 20 T80 20" fill="none" stroke={color} strokeWidth="2.5" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#${id})`} opacity={opacity} />
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
  tone: 'water' | 'ink' | 'paper'
  external?: boolean
}) {
  const st =
    tone === 'water'
      ? { backgroundColor: C.waterDeep, color: '#FFFFFF' }
      : tone === 'ink'
        ? { backgroundColor: C.ink, color: C.paper }
        : { backgroundColor: 'rgba(0,0,0,0.35)', color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.85)' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-lg tracking-wide uppercase transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function CarlosAravenaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name="C. Carlos Aravena"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wider`}
        theme={{ over: 'light', bar: 'rgba(242,239,228,0.94)', ink: C.ink, line: C.line, btnBg: C.waterDeep, btnInk: '#FFFFFF' }}
        ctaLabel="Consultar"
      />

      {/* HERO — papel crema + losa negra estilo letrero del recinto */}
      <section id="inicio" className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-[1.05fr_1fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} inline-flex items-center gap-2 px-3 py-1 rounded text-xs uppercase tracking-widest`} style={{ backgroundColor: C.ink, color: C.paper }}>
                Centro deportivo · Serviu Maule · Talca
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} mt-5 text-[52px] leading-[0.92] md:text-[86px] uppercase font-extrabold`} style={{ color: C.ink }}>
                Piscina, cancha y parque
                <br />
                <span style={{ color: C.waterDeep }}>en la 12 Oriente</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                El complejo deportivo del SERVIU para los vecinos de Talca: piscina al aire libre,
                cancha sintética, parque con juegos y salas multiuso.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-5 flex items-center gap-3">
                <Stars value={4.4} color={C.waterDeep} className="w-5 h-5" />
                <span className={`${mono.className} text-sm`} style={{ color: C.ink }}>{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="water">Consultar por WhatsApp</Btn>
                <Btn href="#instalaciones" tone="ink" external={false}>Qué hay aquí</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative">
              {/* losa que imita el letrero real de la entrada */}
              <div className="relative z-10 mx-auto w-[86%] rounded-sm px-5 py-4 text-center" style={{ backgroundColor: C.ink, boxShadow: '0 18px 40px rgba(20,24,27,0.35)' }}>
                <p className={`${display.className} uppercase leading-[1.02] text-xl md:text-2xl tracking-wide`} style={{ color: C.paper }}>
                  Complejo Deportivo
                  <br />
                  Carlos Aravena
                </p>
                <p className={`${mono.className} mt-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(242,239,228,0.7)' }}>
                  Minvu · Serviu Región del Maule
                </p>
              </div>
              <div className="relative -mt-4 aspect-[4/3] rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 50px rgba(20,24,27,0.22)' }}>
                <Image
                  src={`${IMG}/piscina.webp`}
                  alt="Piscina al aire libre del Complejo Deportivo Carlos Aravena un día de verano"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTALACIONES — mosaico de fotos reales */}
      <section id="instalaciones" className="relative py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.waterDeep }}>Qué hay</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`} style={{ color: C.ink }}>
              Todo un barrio <span style={{ color: C.waterDeep }}>en un solo recinto</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {INSTALACIONES.map((f, i) => (
              <Reveal key={f.src} delay={i * 60} className={f.big ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}>
                <li className={`relative overflow-hidden rounded-2xl h-full ${f.big ? 'aspect-[4/3] md:aspect-auto md:min-h-[420px]' : 'aspect-[4/3]'}`} style={{ boxShadow: '0 10px 26px rgba(20,24,27,0.14)' }}>
                  <Image
                    src={`${IMG}/${f.src}`}
                    alt={f.alt}
                    fill
                    sizes={f.big ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 50vw'}
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4" style={{ background: 'linear-gradient(180deg, rgba(20,24,27,0) 0%, rgba(20,24,27,0.82) 100%)' }}>
                    <p className={`${display.className} uppercase text-lg md:text-2xl leading-none`} style={{ color: '#FFFFFF' }}>{f.t}</p>
                    <p className="mt-1 text-xs md:text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.85)' }}>{f.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={100}>
            <p className="mt-4 text-sm" style={{ color: C.muted }}>
              Fotos reales publicadas en la ficha de Google Maps del complejo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HORARIO — sección letrero negro */}
      <section id="horario" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Olas id="ca-olas" color={C.paper} opacity={0.05} />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: '#7FC4DC' }}>Horario y reservas</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`} style={{ color: C.paper }}>
              Cuándo <span style={{ color: '#7FC4DC' }}>ir</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(242,239,228,0.8)' }}>
              La piscina funciona en temporada de verano; el resto del recinto abre durante la
              semana. Reservas de cancha, salas y piscina para grupos se coordinan por teléfono.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="water">Escribir por WhatsApp</Btn>
              <a
                href={`tel:+${BIZ.phone}`}
                className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-lg tracking-wide uppercase tap-44`}
                style={{ color: C.paper, boxShadow: 'inset 0 0 0 2px rgba(242,239,228,0.6)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: 'inset 0 0 0 1px rgba(242,239,228,0.16)', backgroundColor: C.inkSoft }}>
              <p className={`${mono.className} px-5 pt-4 pb-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(242,239,228,0.6)' }}>
                Horario de atención — ficha de Google
              </p>
              <ul>
                {HORARIO.map(([d, h], i) => (
                  <li key={d} className="flex items-baseline justify-between gap-4 px-5 py-3.5" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(242,239,228,0.12)' }}>
                    <span className={`${display.className} uppercase text-xl tracking-wide`} style={{ color: C.paper }}>{d}</span>
                    <span className={`${mono.className} text-base`} style={{ color: h === 'Cerrado' ? '#E29A8F' : '#7FC4DC' }}>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="px-5 py-3.5 text-sm leading-snug" style={{ color: 'rgba(242,239,228,0.7)', borderTop: '1px solid rgba(242,239,228,0.12)' }}>
                {BIZ.address}, {BIZ.city}. La reseña de Darwin lo resume: “buen lugar para reunirse
                con amigos en torno a una piscina”.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.waterDeep }}>Dónde</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`} style={{ color: C.ink }}>
              Calle 12 Ote. <span style={{ color: C.waterDeep }}>1289</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, Región del Maule. Entrada por el portón principal del
              recinto.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={MAPS_URL} tone="ink">Cómo llegar</Btn>
            </div>
            {/* foto del letrero real */}
            <div className="relative mt-8 aspect-[3/2] rounded-xl overflow-hidden max-w-sm" style={{ boxShadow: '0 14px 32px rgba(20,24,27,0.18)' }}>
              <Image
                src={`${IMG}/letrero.webp`}
                alt="Letrero de entrada del Complejo Deportivo Carlos Aravena del MINVU-SERVIU"
                fill
                sizes="(min-width: 768px) 25vw, 80vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(20,24,27,0.18)', border: `6px solid ${C.ink}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.waterDeep }}>
        <Olas id="ca-cta" color="#FFFFFF" opacity={0.08} />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className={`${display.className} text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`} style={{ color: '#FFFFFF' }}>
            ¿Nos vemos en la piscina?
          </h2>
          <p className="mt-4 text-lg font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Consulta por cancha, salas o piscina para tu grupo.
          </p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="ink">Consultar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.ink, color: 'rgba(242,239,228,0.75)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl uppercase tracking-wide`} style={{ color: C.paper }}>
              {BIZ.name}
            </p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.horarioSemana}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
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
