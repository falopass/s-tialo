import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PRECOMPRA, MAPS_URL, MAPS_EMBED, HOURS, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  asphalt: '#17191d',
  asphaltDeep: '#101216',
  paper: '#f3f0e8',
  card: '#ffffff',
  ink: '#1b1e23',
  muted: '#585d64',
  line: 'rgba(27,30,35,0.16)',
  road: '#f5b301',
  roadHi: '#ffd23f',
  roadDeep: '#7a5600',
  roadSoft: '#fdefc9',
}

export const metadata: Metadata = demoMetadata({
  slug: 'taller-movil-en-talca',
  title: 'Taller Móvil en Talca — mecánica a domicilio y revisión pre-compra',
  description: 'Taller de reparación de automóviles en Talca que va a donde esté tu auto: diagnóstico con escáner, revisión pre-compra y rescate en panne. 4,8★ en Google.',
  image: '/demos/taller-movil-en-talca/hero.webp',
})

const NAV_LINKS = [
  { label: 'La ruta', href: '#ruta' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

/** Cada servicio es una parada en la ruta que hace el taller por Talca. */
const PARADAS = [
  {
    km: 'km 01',
    name: 'Revisión pre-compra',
    src: `${IMG}/audi.webp`,
    alt: 'Audi revisado por el Taller Móvil en Talca antes de una compra',
    desc: 'Antes de poner la plata, el taller va a ver el auto que quieres comprar: escáner, correlación de chasis, motor y VIN con el padrón, y un informe de lo que encontró.',
    datum: 'el favorito de la ficha',
  },
  {
    km: 'km 02',
    name: 'Diagnóstico con escáner',
    src: `${IMG}/motor.webp`,
    alt: 'Motor abierto en diagnóstico del Taller Móvil en Talca',
    desc: 'Luz encendida en el tablero, un ruido nuevo o una pérdida de potencia: el diagnóstico llega hasta donde está el auto, sin grúa ni traslado.',
    datum: 'en tu casa o en tu pega',
  },
  {
    km: 'km 03',
    name: 'Rescate en panne',
    src: `${IMG}/domicilio.webp`,
    alt: 'Auto con el capó abierto atendido a domicilio por el Taller Móvil en Talca',
    desc: 'Quedaste tirado de camino al sur o en la mañana antes del trabajo: el taller concurre a tu encuentro y busca el problema ahí mismo.',
    datum: 'va a donde estés',
  },
  {
    km: 'km 04',
    name: 'Mantención y reparación',
    src: `${IMG}/embrague.webp`,
    alt: 'Embrague y volante de motor reparados por el Taller Móvil en Talca',
    desc: 'Frenos, embrague, mantenciones y trabajos de motor como esta culata y este volante: se hacen sin que el auto pise un taller.',
    datum: 'motor, frenos, embrague',
  },
] as const

const TESTIMONIALS = [
  {
    text: 'Viajábamos desde Santiago al sur y sufrimos un desperfecto, muy temprano en la mañana. El Señor concurrió a nuestro encuentro bastante rápido. Escaneó el auto y pese a que el scanner no arrojó nada, fue meticuloso y encontró el problema.',
    author: 'Alejandra Yongna Alcorta',
    detail: 'rescate en ruta · hace 10 meses',
  },
  {
    text: 'Full recomendado, quedé muy satisfecho con el servicio de inspección pre-compra. El hombre es puntual, verifica la correlación de los números de chasis, motor y VIN con los que aparecen en el padrón.',
    author: 'Klaus Henzi',
    detail: 'revisión pre-compra · hace un año',
  },
  {
    text: 'Excelente servicio, pedí una revisión de preventa: ellos mismos se contactaron con el vendedor, fueron a domicilio y revisaron con el escáner la mecánica, amortiguación y estado interno y externo.',
    author: 'Miguel B. Alarcón Leyton',
    detail: 'revisión a domicilio · hace un año',
  },
]

function RoadMark({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6.5-5.2-6.5-10.2A6.5 6.5 0 0 1 12 4.5a6.5 6.5 0 0 1 6.5 6.3C18.5 15.8 12 21 12 21z" />
      <circle cx="12" cy="10.7" r="2.2" />
    </svg>
  )
}

function Check({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5 L9.5 18 L20 6.5" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color: light ? 'rgba(243,240,232,0.75)' : C.roadDeep }}
    >
      <span
        className="inline-block w-[12px] h-[3px]"
        style={{ backgroundColor: C.road }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

export default function TallerMovilPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(243,240,232,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.road,
          btnInk: C.asphaltDeep,
        }}
      />

      {/* ── Hero a sangre: la pana en terreno, no en un box ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.asphaltDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Camioneta con el capó abierto atendida a domicilio por el Taller Móvil en Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,18,22,0.62) 0%, rgba(16,18,22,0.18) 42%, rgba(16,18,22,0.9) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: 'rgba(243,240,232,0.95)', color: C.ink }}
            >
              <Stars value={4.8} color={C.roadDeep} className="w-[13px] h-[13px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          {/* pr reserva la franja de la burbuja flotante de WhatsApp */}
          <Reveal className="pr-24 md:pr-28">
            <Eyebrow light>Taller móvil · Talca</Eyebrow>
            <h1
              className={`${display.className} uppercase leading-[0.95] tracking-[0.005em] text-[clamp(3rem,10.5vw,6.5rem)] mb-6`}
              style={{ color: C.paper }}
            >
              Tu auto no se mueve.
              <br />
              <span style={{ color: C.roadHi }}>El taller va.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(243,240,232,0.9)' }}>
              Mecánica a domicilio en {BIZ.city}: diagnóstico con escáner,
              revisión pre-compra y rescate en panne, en la dirección que
              le indiques.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base font-extrabold px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.road, color: C.asphaltDeep }}
              >
                Llamar al taller por WhatsApp
              </a>
              <a
                href="#ruta"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base font-semibold px-7 py-3.5 border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: 'rgba(243,240,232,0.55)', color: C.paper }}
              >
                Cómo funciona
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(243,240,232,0.22)', backgroundColor: 'rgba(16,18,22,0.8)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(243,240,232,0.8)' }}>
            <span>A domicilio en {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.road }} aria-hidden="true" />
              base: {BIZ.address}
            </span>
            <span>Lun–Vie 9:15–15:45</span>
            <span className="hidden md:inline" style={{ color: C.roadHi }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La ruta: servicios como hitos de carretera ── */}
      <section id="ruta" className="scroll-mt-20 pt-16 md:pt-24 pb-8 md:pb-14">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Servicios en ruta</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.ink }}>
                Cuatro paradas,
                <br />
                <span style={{ color: C.roadDeep }}>una sola visita</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Cada servicio es una parada en la ruta del taller por
                Talca. La ficha de Google lo repite en cada reseña: llega,
                escanea y explica lo que encuentra.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <ol className="relative">
            {/* línea de carretera: trazo discontinuo como la pintura central */}
            <div
              className="absolute left-[13px] md:left-[17px] top-2 bottom-2 w-0 border-l-2 border-dashed"
              style={{ borderColor: 'rgba(168,116,0,0.5)' }}
              aria-hidden="true"
            />
            {PARADAS.map((p, i) => (
              <li key={p.km} className="relative pl-12 md:pl-16 pb-8 md:pb-12 last:pb-0">
                {/* hito */}
                <span
                  className={`${mono.className} absolute left-0 top-0 w-[28px] h-[28px] md:w-[36px] md:h-[36px] rounded-full flex items-center justify-center text-[9px] md:text-[10px] font-semibold`}
                  style={{ backgroundColor: C.road, color: C.asphaltDeep, boxShadow: `0 0 0 5px ${C.paper}` }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Reveal delay={i * 60}>
                  <article className="overflow-hidden border-2" style={{ backgroundColor: C.card, borderColor: C.ink }}>
                    <div className={`${mono.className} flex items-center justify-between gap-3 px-4 md:px-6 py-3 text-[11px] md:text-xs uppercase tracking-[0.16em] border-b-2`} style={{ borderColor: C.ink, color: C.muted, backgroundColor: C.paper }}>
                      <span className="flex items-center gap-3 min-w-0">
                        <RoadMark className="w-3.5 h-3.5 shrink-0" color={C.roadDeep} />
                        <span className="truncate">{p.km} · {BIZ.short} · {BIZ.city}</span>
                      </span>
                      <span className="shrink-0 font-semibold" style={{ color: C.roadDeep }}>{p.datum}</span>
                    </div>
                    <div className="relative overflow-hidden aspect-[16/10] md:aspect-[16/8]">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 1024px) 960px, calc(100vw - 40px)"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-4 md:px-6 py-5 md:py-6">
                      <h3 className={`${display.className} uppercase font-bold text-2xl md:text-3xl leading-[1.05] mb-2`} style={{ color: C.ink }}>
                        {p.name}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed max-w-xl" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Opiniones: la ficha habla sola ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.asphaltDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Opiniones</Eyebrow>
              <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.paper }}>
                Los que lo llamaron
                <br />
                <span style={{ color: C.roadHi }}>en la pana</span>
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Stars value={4.8} color={C.roadHi} className="w-4 h-4" />
                <p className={`${mono.className} text-sm font-semibold`} style={{ color: C.paper }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </p>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(243,240,232,0.82)' }}>
                Citas textuales de la ficha pública de Google de {BIZ.name}.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ color: C.roadHi, textDecorationColor: 'rgba(245,179,1,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.author} delay={100 + i * 100}>
                  <figure className="border-l-4 p-5 md:p-6" style={{ backgroundColor: 'rgba(243,240,232,0.05)', borderColor: C.road }}>
                    <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.paper }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-semibold`} style={{ color: C.roadHi }}>
                        {t.author} · Google
                      </span>
                      <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(243,240,232,0.65)' }}>
                        {t.detail}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              La base es en 22 Norte;
              <br />
              <span style={{ color: C.roadDeep }}>el trabajo, donde estés</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HOURS.map((h) => (
                <li key={h.days} className={`${mono.className} flex items-center gap-3 text-sm md:text-base`} style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.roadDeep} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] font-extrabold text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.road, color: C.asphaltDeep }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] font-semibold text-sm px-6 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.ink, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.asphaltDeep }}>
        <Image
          src={`${IMG}/tiggo.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        {/* línea de carretera horizontal */}
        <div className="absolute top-1/2 inset-x-0 border-t-2 border-dashed opacity-40" style={{ borderColor: C.road }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase font-extrabold text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[0.98] mb-6`} style={{ color: C.paper }}>
              ¿Vas a comprar un usado
              <br />
              <span style={{ color: C.roadHi }}>en Talca?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(243,240,232,0.8)' }}>
              Agenda la revisión pre-compra por WhatsApp: el taller va al
              lugar de venta y te entrega el informe antes de que firmes.
            </p>
            <a
              href={WA_LINK_PRECOMPRA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase tracking-[0.04em] font-extrabold inline-block text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: C.road, color: C.asphaltDeep }}
            >
              Agendar revisión pre-compra
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase font-bold text-xl mb-1 flex items-center gap-2.5`}>
              <RoadMark className="w-4 h-4" color={C.roadHi} />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(243,240,232,0.85)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region} · atención a domicilio
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(243,240,232,0.85)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Google Maps
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,240,232,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: 'rgba(243,240,232,0.85)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.roadHi }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, horarios, fotos
            y reseñas son datos públicos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.roadHi }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
