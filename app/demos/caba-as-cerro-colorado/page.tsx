import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «bitácora de la cordillera». La cabaña está entre el
 * lago Colbún y el Paso Pehuenche: la página se lee como una guía de
 * trekking — curvas de nivel de fondo, ficha de alojamiento en mono,
 * sección de entorno como bitácora de rutas. Marcellus pone el letrero
 * de lodge; Jost el texto de sendero. Papel de niebla, pino profundo,
 * lago y acento leña.
 */
const C = {
  paper: '#F0F4F1',
  card: '#F8FAF8',
  mist: '#DFE9E4',
  ink: '#18261F',
  pine: '#1E3D33',
  deep: '#101E19',
  lake: '#2C6E7E',
  ember: '#A84E2F',
  muted: '#5B6A62',
  line: 'rgba(24,38,31,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'caba-as-cerro-colorado',
  title: 'Cabañas Cerro Colorado — Cabañas en Lago Colbún, Vilches',
  description:
    'Cabañas en Ruta 115, Vilches, San Clemente: entre Lago Colbún y el Paso Pehuenche. Cocina equipada, pet-friendly y estacionamiento. 4,6★ en Google. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La cabaña', href: '#cabana' },
  { label: 'El entorno', href: '#entorno' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Reservar', href: '#reservar' },
]

const FICHA = [
  { k: 'capacidad', v: 'cabañas familiares con cocina' },
  { k: 'check-in', v: `${BIZ.checkIn} hrs` },
  { k: 'check-out', v: `${BIZ.checkOut} hrs` },
  { k: 'wi-fi', v: 'incluido' },
  { k: 'estacionamiento', v: 'gratis, dentro del recinto' },
  { k: 'mascotas', v: 'bienvenidas' },
  { k: 'quincho', v: 'asadera y áreas verdes' },
  { k: 'fumar', v: 'recinto libre de humo' },
]

const ENTORNO = [
  {
    src: `${IMG}/lago.webp`,
    tag: 'a minutos',
    name: 'Lago Colbún',
    desc: 'La playa del lago queda bajando el camino: los huéspedes cuentan que hasta se bañan en verano.',
  },
  {
    src: `${IMG}/puente.webp`,
    tag: 'sendero',
    name: 'Puentes y riachuelos',
    desc: 'El sector de Vilches está lleno de senderos entre bosque nativo y agua: para caminar sin apuro.',
  },
  {
    src: `${IMG}/cabana-roja.webp`,
    tag: 'trekking',
    name: 'Piedra en el aire y Saltos del Lircay',
    desc: 'Dos de los paseos que nombran las reseñas: el ascenso a la Piedra en el aire y las cascadas del Lircay.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Muy conformes con la cabaña. Pasamos dos noches antes de emprender nuestro regreso a Uruguay cruzando la cordillera por el paso Pehuenche. En conclusión: el mejor lugar para descansar antes del cruce.',
    author: 'Federico Apellaniz',
  },
  {
    text: 'Ambiente familiar y tranquilo, cuenta con todo lo necesario para una estadía cómoda. Atractivos turísticos cerca, supermercado a 5 min en auto. El proceso de reserva y comunicación con el anfitrión súper rápida. 100% recomendado.',
    author: 'Nathaly Zarate',
  },
  {
    text: 'Excelente lugar para relajarse y disfrutar de la naturaleza, la cabaña muy cómoda, la atención de Patricia excelente, amable, simpática y nos orientó sobre los lugares que podíamos visitar. 100% recomendable.',
    author: 'Andrea Paz',
  },
  {
    text: 'Muy buen lugar para despejarse y descansar, el servicio y la atención fue lo mejor que he tenido en este último tiempo.',
    author: 'Ignacio Gacitúa',
  },
]

/** Curvas de nivel — motivo topográfico de fondo. */
function Contours({ color = 'rgba(24,38,31,0.12)', className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="none" stroke={color} strokeWidth="1.2" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <path d="M-20 60 C60 20 140 90 220 55 S360 30 430 70" />
      <path d="M-20 100 C60 60 140 130 220 95 S360 70 430 110" />
      <path d="M-20 140 C60 100 140 170 220 135 S360 110 430 150" />
      <path d="M-20 180 C60 140 140 210 220 175 S360 150 430 190" />
      <path d="M-20 20 C60 -20 140 50 220 15 S360 -10 430 30" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#A9D4D2' : C.lake }}
    >
      <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <path d="M2 18 L8 7 L12 13 L16 5 L22 18 Z" />
      </svg>
      {children}
    </p>
  )
}

export default function CabanasCerroColoradoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={<span>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(16,30,25,0.94)',
          ink: '#F0F4F1',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.ember,
          btnInk: '#FFF7F0',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Cabañas de madera de Cabañas Cerro Colorado sobre la pradera, Vilches"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(16,30,25,0.6) 0%, rgba(16,30,25,0.35) 40%, rgba(16,30,25,0.92) 100%)' }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(240,244,241,0.96)', color: C.pine }}
            >
              <Stars value={4.6} color={C.ember} className="w-[13px] h-[13px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Cabañas · Vilches, San Clemente</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] tracking-[0.01em] text-[clamp(2.5rem,9vw,5.4rem)] mb-6`}
              style={{ color: '#F0F4F1' }}
            >
              Dormir entre el lago
              <br />
              <span style={{ color: '#A9D4D2' }}>y el paso Pehuenche.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(240,244,241,0.9)' }}>
              Cabañas de madera sobre la Ruta 115, en Vilches: cocina
              equipada, quincho, pradera para las mascotas y la cordillera
              del Maule empezando en la puerta.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.ember, color: '#FFF7F0' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#cabana"
                className={`font-semibold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(240,244,241,0.55)', color: '#F0F4F1' }}
              >
                Ver la cabaña
              </a>
            </div>
          </Reveal>
        </div>
        {/* Ficha de llegada */}
        <div className="relative border-t" style={{ borderColor: 'rgba(240,244,241,0.22)', backgroundColor: 'rgba(16,30,25,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(240,244,241,0.9)' }}>
            <span>check-in {BIZ.checkIn} · check-out {BIZ.checkOut}</span>
            <span>pet-friendly</span>
            <span>estacionamiento gratis</span>
            <span className="hidden md:inline" style={{ color: '#A9D4D2' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Ficha del alojamiento ── */}
      <section id="cabana" className="scroll-mt-20 relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 overflow-hidden">
        <Contours className="absolute top-0 right-0 w-[520px] h-[260px] pointer-events-none" />
        <Reveal>
          <Eyebrow>Ficha del alojamiento</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Una cabaña que llega
              <br />
              <span style={{ color: C.pine }}>con todo listo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Los datos que publica su ficha de Google — y que repiten las
              reseñas: cocina, estacionamiento y espacio para los animales.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-start">
          <Reveal>
            <dl className="border-t" style={{ borderColor: C.line }}>
              {FICHA.map((f) => (
                <div key={f.k} className="flex items-baseline gap-4 py-3.5 border-b" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] w-32 shrink-0`} style={{ color: C.lake }}>
                    {f.k}
                  </dt>
                  <dd className="text-sm md:text-base" style={{ color: C.ink }}>
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={80} className="col-span-2">
              <img
                src={`${IMG}/interior-estufa.webp`}
                alt="Interior de la cabaña: dormitorio con estufa a leña y madera"
                loading="lazy"
                className="w-full object-cover aspect-[16/9]"
                style={{ boxShadow: '0 14px 30px -16px rgba(24,38,31,0.4)' }}
              />
            </Reveal>
            <Reveal delay={140}>
              <img
                src={`${IMG}/cocina.webp`}
                alt="Cocina y comedor de la cabaña, con equipamiento completo"
                loading="lazy"
                className="w-full object-cover aspect-[4/3]"
                style={{ boxShadow: '0 10px 24px -14px rgba(24,38,31,0.35)' }}
              />
            </Reveal>
            <Reveal delay={180}>
              <img
                src={`${IMG}/quincho.webp`}
                alt="Quincho y asadera entre los árboles del recinto"
                loading="lazy"
                className="w-full object-cover aspect-[4/3]"
                style={{ boxShadow: '0 10px 24px -14px rgba(24,38,31,0.35)' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El entorno: bitácora ── */}
      <section id="entorno" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.pine }}>
        <Contours className="absolute top-10 left-0 w-[640px] h-[320px] pointer-events-none" color="rgba(240,244,241,0.1)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Bitácora de la zona</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#F0F4F1' }}>
                Lo que hay
                <br />
                <span style={{ color: '#A9D4D2' }}>a la vuelta</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(240,244,241,0.82)' }}>
                Los panoramas que nombran quienes se han quedado: el lago,
                los senderos de Vilches y el cruce de la cordillera.
              </p>
            </div>
          </Reveal>
          <ul className="grid md:grid-cols-3 gap-5 md:gap-6">
            {ENTORNO.map((e, i) => (
              <Reveal key={e.name} delay={i * 110}>
                <li className="group h-full">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={e.src}
                      alt={`${e.name} — entorno de Cabañas Cerro Colorado`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <span
                      className={`${mono.className} absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5`}
                      style={{ backgroundColor: 'rgba(16,30,25,0.88)', color: '#A9D4D2' }}
                    >
                      {e.tag}
                    </span>
                  </div>
                  <div className="pt-4">
                    <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: '#F0F4F1' }}>
                      {e.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,241,0.82)' }}>
                      {e.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <p className={`${mono.className} mt-10 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(240,244,241,0.6)' }}>
              Ruta 115 · km desde Vilches · camino al paso Pehuenche
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El libro de visitas</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              {BIZ.rating}★ en Google
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en la ficha de {BIZ.name}: la atención de
              Patricia y la tranquilidad del lugar se repiten en casi todas.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.lake, textDecorationColor: 'rgba(44,110,126,0.35)' }}
            >
              Leer la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={100 + i * 90}>
                <figure
                  className="p-6 border-l-4"
                  style={{ backgroundColor: C.card, borderColor: i % 2 === 0 ? C.ember : C.lake }}
                >
                  <Stars value={5} color={C.ember} className="w-[14px] h-[14px] mb-3" />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {t.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar: ubicación y contacto ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.mist }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar y reservar</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Ruta 115,
              <br />
              <span style={{ color: C.pine }}>camino a Vilches</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(24,38,31,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8 text-sm md:text-base" style={{ color: C.muted }}>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.lake} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                <span><strong className="font-semibold" style={{ color: C.ink }}>Check-in:</strong> {BIZ.checkIn} hrs · <strong className="font-semibold" style={{ color: C.ink }}>check-out:</strong> {BIZ.checkOut} hrs</span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.lake} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>A minutos del lago; conviene ir en auto (lo dicen las reseñas).</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.pine, color: '#F0F4F1' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold text-sm px-6 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(24,38,31,0.35)', color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: `url(${IMG}/cabana-roja.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.05] mb-6`} style={{ color: '#F0F4F1' }}>
              La cordillera
              <br />
              <span style={{ color: '#A9D4D2' }}>empieza en la puerta.</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(240,244,241,0.88)' }}>
              Escribe las fechas que tienes en mente y ellos mismos te
              confirman disponibilidad y valor por WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold inline-block text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.ember, color: '#FFF7F0' }}
            >
              Consultar fechas →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F0F4F1' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5 border-t" style={{ borderColor: 'rgba(240,244,241,0.14)' }}>
          <div>
            <p className={`${display.className} text-2xl mb-2`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(240,244,241,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(240,244,241,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(240,244,241,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(240,244,241,0.68)' }}>
            Datos de la ficha pública de Google (dirección, amenities, reseñas); descripciones de muestra.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
