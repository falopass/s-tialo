import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

const C = {
  stucco: '#F6F1E5',
  white: '#FDFBF5',
  red: '#B81F2C',
  redDeep: '#8E1620',
  green: '#1E5A33',
  ink: '#1B1B18',
  muted: '#5C5748',
  line: 'rgba(27,27,24,0.15)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'spanish-stadium-linares',
  title: 'Estadio Español de Linares — Club social, restaurante y deportes',
  description:
    'Club social de la colectividad española en Linares desde 1953. Restaurante, centro de eventos y deportes en Av. Aníbal León Bustos 01242.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El club', href: '#club' },
  { label: 'Historia', href: '#historia' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const PUERTAS = [
  {
    num: 'I',
    name: 'El restaurante',
    desc: 'Cocina española y de mar: callos a la madrileña, caldillo de congrio, camarones, ceviches y paella. Abre 12:30; reservas y pedidos al teléfono.',
    img: `${IMG}/eventos-2.webp`,
    alt: 'Paella con camarones y salmón relleno en el restaurante del Estadio Español',
  },
  {
    num: 'II',
    name: 'El centro de eventos',
    desc: 'Tres salones y dos salas para matrimonios, congresos y celebraciones de hasta 300 personas, con banquetería propia del club.',
    img: `${IMG}/eventos-1.webp`,
    alt: 'Salones del centro de eventos con mesas blancas y vigas de madera a la vista',
  },
  {
    num: 'III',
    name: 'Las canchas',
    desc: 'Fútbol adulto, escuela de fútbol, béisbol, tenis, danza española y voleibol. Las canchas de pádel y tenis se reservan por la app del club.',
    img: `${IMG}/futbol-1.webp`,
    alt: 'Equipo de fútbol adulto del Estadio Español posando en la cancha de pasto',
  },
]

const HISTORIA = [
  { year: '1953', text: 'La colectividad española funda el Centro Español de Linares, en calle Independencia.' },
  { year: '1988', text: 'Se inaugura el campo deportivo a la entrada de Linares: canchas, piscina y parque.' },
  { year: '2001', text: 'El 12 de octubre abre el Restaurante y Centro de Eventos que hoy recibe a socios y visitas.' },
]

const REVIEWS = [
  {
    q: 'Carta variada y gourmet, excelente servicio. Los callos a la madrileña y el caldillo de congrio, imprescindibles.',
    a: 'Reseña en Google',
  },
  {
    q: 'Pescados frescos y platos tradicionales españoles. Buena calidad, ingredientes frescos y muy buen ambiente.',
    a: 'Reseña en Google',
  },
  {
    q: 'Estacionamiento gratis, opciones vegetarianas y una terraza agradable. Ideal para reuniones familiares.',
    a: 'Reseña en Google',
  },
]

export default function SpanishStadiumLinaresPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.stucco, color: C.ink }}
    >
      <style>{`
        .ee-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .ee-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .ee-btn:active { transform: translateY(0) scale(0.97); }
        .ee-btn:focus-visible { outline: 3px solid ${C.green}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(246,241,229,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la casa del club ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.stucco }}>
        {/* sol sutil detrás del escudo */}
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.12]"
          style={{ backgroundColor: C.red }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-10 grid grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-5 md:gap-6 mb-7">
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Escudo del Estadio Español de Linares: león rojo coronado dentro de un escudo blanco"
                  width={450}
                  height={474}
                  sizes="120px"
                  className="w-[92px] md:w-[120px] h-auto shrink-0"
                  priority
                />
                <div>
                  <h1
                    className={`${display.className} leading-[1.04] text-[clamp(1.9rem,6vw,3.6rem)]`}
                    style={{ color: C.ink }}
                  >
                    Estadio Español
                    <span className="block" style={{ color: C.red }}>de Linares</span>
                  </h1>
                  <p className={`${display.className} text-[clamp(0.7rem,1.8vw,0.95rem)] uppercase tracking-[0.24em] mt-2`} style={{ color: C.muted }}>
                    Club social · desde 1953
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ee-btn inline-flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full mb-6 tap-44"
                style={{ backgroundColor: C.ink, color: C.stucco }}
              >
                <Stars value={4.4} color={C.stucco} className="w-[14px] h-[14px]" />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium" style={{ color: C.ink }}>
                La casa de la colectividad española en el Maule: restaurante
                de cocina española, centro de eventos y canchas de deporte,
                todo en el mismo club.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={TEL_LINK}
                  className={`${display.className} ee-btn uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                >
                  Reservar al {BIZ.phoneDisplay}
                </a>
                <a
                  href="#club"
                  className={`${display.className} ee-btn uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Conocer el club
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Reveal delay={180}>
              <figure className="border-[6px] shadow-xl" style={{ borderColor: C.white }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada blanca estilo andaluz del Estadio Español de Linares, con tejas, palmeras y el escudo negro del club"
                  width={1200}
                  height={675}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="block w-full h-auto"
                />
                <figcaption className={`${display.className} text-[11px] md:text-xs uppercase tracking-[0.18em] px-3 py-2.5`} style={{ backgroundColor: C.white, color: C.muted }}>
                  La entrada, a un costado de la carretera
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <div className="relative border-t" style={{ borderColor: C.line }}>
          <div
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ color: C.muted }}
          >
            <span>{BIZ.address}</span>
            <span>{BIZ.hours}</span>
            <span>{BIZ.phoneDisplay}</span>
            <span className="hidden md:inline" style={{ color: C.red }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta del club ── */}
      <div className="border-b py-3" style={{ backgroundColor: C.red, borderColor: C.line }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 flex flex-wrap justify-center gap-y-1 text-sm md:text-base uppercase tracking-[0.12em]`}
          style={{ color: '#FFFFFF' }}
        >
          {['Restaurante', 'Centro de eventos', 'Fútbol', 'Tenis', 'Pádel', 'Béisbol', 'Danza española'].map((t) => (
            <span key={t} className="inline-flex items-center">
              <span className="px-3">{t}</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#F6F1E5" aria-hidden="true">
                <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── Las tres puertas del club ── */}
      <section id="club" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="text-center mb-12">
            <p className={`${display.className} uppercase tracking-[0.28em] text-xs md:text-sm mb-3`} style={{ color: C.red }}>
              Una sola membresía, tres mundos
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.4rem)] leading-none`} style={{ color: C.ink }}>
              Las tres puertas del club
            </h2>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-6 md:gap-8">
          {PUERTAS.map((p, i) => (
            <Reveal key={p.num} className="col-span-12 md:col-span-4" delay={i * 120}>
              <li className="group h-full flex flex-col" style={{ backgroundColor: C.white }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-3 left-3 w-10 h-10 flex items-center justify-center text-base border-2`}
                    style={{ backgroundColor: C.red, color: '#FFFFFF', borderColor: '#FFFFFF' }}
                  >
                    {p.num}
                  </span>
                </div>
                <div className="p-5 md:p-6 border-t-4" style={{ borderColor: C.red }}>
                  <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.ink }}>
                    {p.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Banda panorámica de la cancha ── */}
      <section aria-label="La cancha del club al atardecer">
        <Reveal>
          <div className="relative h-[30vh] md:h-[42vh] overflow-hidden">
            <Image
              src={`${IMG}/cancha-pano.webp`}
              alt="Panorámica del campo de fútbol del club: jugadores en camisetas naranjas sobre el pasto, árboles de fondo"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(27,27,24,0.15), rgba(27,27,24,0.35))' }} />
            <p
              className={`${display.className} absolute bottom-4 left-5 md:left-8 text-white text-[11px] md:text-xs uppercase tracking-[0.24em]`}
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
            >
              La cancha · foto del sitio oficial del club
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Historia ── */}
      <section id="historia" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} text-center text-[clamp(1.9rem,5vw,3.2rem)] leading-tight mb-3`} style={{ color: C.stucco }}>
              Setenta años de la misma casa
            </h2>
            <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-12" style={{ color: 'rgba(246,241,229,0.7)' }}>
              Institución sin fines de lucro heredera del Centro Español de
              Linares — su historia completa la cuenta su sitio oficial.
            </p>
          </Reveal>
          <ol className="grid grid-cols-12 gap-6 md:gap-8 max-w-5xl mx-auto">
            {HISTORIA.map((h, i) => (
              <Reveal key={h.year} className="col-span-12 md:col-span-4" delay={i * 140}>
                <li className="h-full border-t-2 pt-5" style={{ borderColor: C.red }}>
                  <span className={`${display.className} block text-[clamp(2.4rem,6vw,3.6rem)] leading-none mb-3`} style={{ color: C.red }}>
                    {h.year}
                  </span>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(246,241,229,0.85)' }}>
                    {h.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={160}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {[
                [`${IMG}/futbol-2.webp`, 'Atardecer en la cancha: entrenamiento de fútbol del club'],
                [`${IMG}/futbol-3.webp`, 'Jugadores de fútbol del Estadio Español en la cancha de pasto'],
                [`${IMG}/eventos-3.webp`, 'Salón de eventos preparado para una celebración'],
                [`${IMG}/logo.webp`, 'Escudo oficial del Estadio Español de Linares'],
              ].map(([src, alt]) => (
                <div key={src} className="relative overflow-hidden border-2" style={{ borderColor: 'rgba(246,241,229,0.3)', aspectRatio: '4/3' }}>
                  <Image src={src} alt={alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="grid grid-cols-12 gap-8 items-end mb-10">
            <div className="col-span-12 md:col-span-7">
              <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.4rem)] leading-[1.02] mb-4`} style={{ color: C.ink }}>
                Mesa para la familia,
                <br />
                cancha para el barrio
              </h2>
              <p className="text-sm md:text-base max-w-xl" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google con nota {BIZ.rating}. Los
                visitantes destacan la cocina española, el trato y lo fácil
                que es llegar desde la carretera.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:justify-end gap-8">
              <div className="border-l-4 pl-4" style={{ borderColor: C.red }}>
                <p className={`${display.className} text-4xl leading-none`} style={{ color: C.ink }}>{BIZ.rating}</p>
                <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>de 5</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: C.green }}>
                <p className={`${display.className} text-4xl leading-none`} style={{ color: C.ink }}>{BIZ.reviews}</p>
                <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>reseñas</p>
              </div>
            </div>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-5 md:gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} className="col-span-12 md:col-span-4" delay={i * 120}>
              <li className="h-full border-t-4 pt-5 px-5 pb-6 shadow-sm" style={{ backgroundColor: C.white, borderColor: i === 1 ? C.green : C.red }}>
                <Stars value={5} color={C.red} className="w-4 h-4 mb-3" />
                <p className="text-sm md:text-base leading-relaxed italic mb-4" style={{ color: C.ink }}>“{r.q}”</p>
                <p className={`${display.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>{r.a}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20 border-t" style={{ backgroundColor: C.white, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.2rem)] leading-none mb-10`} style={{ color: C.ink }}>
              A la entrada de Linares
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="col-span-12 md:col-span-5 space-y-6">
              <Reveal>
                <ul className="space-y-4 text-sm md:text-base" style={{ color: C.ink }}>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>
                    <span><strong>{BIZ.address}</strong><br />{BIZ.city}, {BIZ.region} · {BIZ.plusCode}</span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
                    <span>Restaurante {BIZ.hours.toLowerCase()} · {BIZ.priceRange}</span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>
                    <span>
                      Reservas y pedidos:{' '}
                      <a href={TEL_LINK} className="font-bold underline underline-offset-4 tap-44" style={{ color: C.red }}>{BIZ.phoneDisplay}</a>
                      <br /><span style={{ color: C.muted }}>No publican WhatsApp — el contacto es por teléfono</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.3 7h17.4M3.3 17h17.4M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
                    <span>
                      <a href={BIZ.website} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 tap-44" style={{ color: C.red }}>estadioespanolinares.cl</a>
                      <br />
                      <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 tap-44" style={{ color: C.red }}>Facebook</a>
                      <span style={{ color: C.muted }}> · {BIZ.fbFollowers}</span>
                    </span>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <a href={TEL_LINK} className={`${display.className} ee-btn uppercase tracking-wide text-sm px-7 py-3.5 tap-44`} style={{ backgroundColor: C.red, color: '#FFFFFF' }}>
                    Llamar al club
                  </a>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${display.className} ee-btn uppercase tracking-wide text-sm px-7 py-3.5 border-2 tap-44`} style={{ borderColor: C.ink, color: C.ink }}>
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-7">
              <Reveal delay={100}>
                <div className="border-4 shadow-lg overflow-hidden" style={{ borderColor: C.ink }}>
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Mapa del Estadio Español de Linares, Av. Aníbal León Bustos 01242"
                    className="w-full h-[300px] md:h-[380px] block"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className={`${display.className} uppercase tracking-[0.14em] text-sm`} style={{ color: C.stucco }}>
            {BIZ.name} · {BIZ.city}
          </p>
          <p className="text-xs" style={{ color: 'rgba(246,241,229,0.6)' }}>
            Página de muestra con fotos de su sitio oficial y su ficha de Google
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={TEL_LINK} label={`Llamar al ${BIZ.name}`} bg={C.red} />
    </div>
  )
}
