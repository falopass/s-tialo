import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_SERVICIO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F7E9EC',
  cream: '#FFF9F6',
  card: '#FFF9F6',
  plum: '#4A1F33',
  plumDeep: '#351325',
  gold: '#C9A227',
  goldSoft: '#E8D3A2',
  rose: '#94485F',
  ink: '#4A1F33',
  muted: '#7A5264',
  line: 'rgba(74,31,51,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lua-nails',
  title: 'Lua Nails Home — Manicure y uñas en Talca',
  description: 'Manicure y uñas en Treinta y Medio Ote. 1729, Talca. Manicure clásico, semipermanente, kapping y pedicure con hora agendada por WhatsApp.',
  image: '/demos/lua-nails/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#agenda' },
]

const SERVICIOS = [
  {
    src: `${IMG}/manos.webp`,
    tag: 'el de siempre',
    name: 'Manicure clásico',
    desc: 'Limado, cutícula prolija y esmalte tradicional. La base de unas manos cuidadas.',
  },
  {
    src: `${IMG}/esmaltes.webp`,
    tag: 'larga duración',
    name: 'Esmaltado semipermanente',
    desc: 'Color que dura semanas intacto, con el brillo del primer día.',
  },
  {
    src: `${IMG}/detalle.webp`,
    tag: 'uñas protegidas',
    name: 'Kapping',
    desc: 'Capa protectora sobre la uña natural: más firmeza y resistencia sin alargar.',
  },
  {
    src: `${IMG}/hero.webp`,
    tag: 'descanso total',
    name: 'Pedicure',
    desc: 'Cuidado completo para los pies: limpieza, limado y esmalte, con calma.',
  },
]

const PRECIOS = [
  { name: 'Manicure clásico', desc: 'Limado, cutícula y esmalte tradicional', price: 'desde $10.000' },
  { name: 'Esmaltado semipermanente', desc: 'Incluye preparación de la uña', price: 'desde $15.000' },
  { name: 'Kapping en gel', desc: 'Refuerzo sobre uña natural', price: 'desde $18.000' },
  { name: 'Pedicure completo', desc: 'Cuidado y esmaltado de pies', price: 'desde $16.000' },
  { name: 'Retiro de semipermanente', desc: 'Sin dañar la uña natural', price: 'desde $5.000' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00–19:00' },
  { days: 'Sábado', time: '10:00–14:00' },
]

function Moon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8 A9 9 0 1 1 11.2 3 A7 7 0 0 0 21 12.8 Z" />
    </svg>
  )
}

function Sparkle({ className = 'w-3 h-3', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 2 L13.8 9.8 L21.5 11.5 L13.8 13.2 L12 21 L10.2 13.2 L2.5 11.5 L10.2 9.8 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3 font-medium"
      style={{ color: light ? C.goldSoft : C.rose }}
    >
      <Moon className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

export default function LuaNailsPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(247,233,236,0.94)',
          ink: C.plum,
          line: C.line,
          btnBg: C.plum,
          btnInk: '#F7E9EC',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.plumDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Estación de manicure de Lua Nails Home: mesa blanca, lámpara y silla de terciopelo rosa"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(53,19,37,0.6) 0%, rgba(53,19,37,0.5) 40%, rgba(53,19,37,0.9) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-medium px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(255,249,246,0.95)', color: C.plum }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.gold} stroke={C.gold} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Manicure · Uñas · Talca</Eyebrow>
            <h1
              className={`${display.className} font-semibold leading-[1.04] tracking-[0em] text-[clamp(2.9rem,9.5vw,6.2rem)] mb-6`}
              style={{ color: C.cream }}
            >
              Tus manos,
              <br />
              <em className="font-medium" style={{ color: C.goldSoft }}>listas para lo que viene</em>
            </h1>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,249,246,0.88)' }}>
              Manicure y uñas con hora agendada en un espacio tranquilo
              de Talca: clásico, semipermanente, kapping y pedicure, con
              el detalle que tus manos merecen.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-base md:text-lg px-8 py-3 md:py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.gold, color: C.plumDeep }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-semibold text-base md:text-lg px-8 py-3 md:py-3.5 rounded-full border transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(255,249,246,0.55)', color: C.cream }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(255,249,246,0.2)', backgroundColor: 'rgba(53,19,37,0.8)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto pl-5 pr-20 md:pl-8 lg:pr-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(255,249,246,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.gold }} aria-hidden="true" />
              con hora agendada
            </span>
            <span>Atención personalizada</span>
            <span className="hidden md:inline" style={{ color: C.goldSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.plum }}>
              Un ritual
              <br />
              <em className="font-medium" style={{ color: C.rose }}>para tus manos</em>
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra de la carta: al publicar van los
              servicios y precios reales de Lua Nails Home.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <li
                className="group h-full rounded-t-[10rem] rounded-b-3xl overflow-hidden border text-center"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 10px rgba(74,31,51,0.06)' }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={s.src}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-1/2 -translate-x-1/2 text-sm italic font-semibold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap`}
                    style={{ backgroundColor: 'rgba(255,249,246,0.95)', color: C.plum }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className={`${display.className} font-semibold text-2xl mb-2`} style={{ color: C.plum }}>
                    {s.name}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 md:mt-16">
            {['Hora solo para ti', 'Instrumental cuidado', 'Esmaltes de temporada'].map((chip) => (
              <span key={chip} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: C.rose }}>
                <Sparkle className="w-3.5 h-3.5" color={C.gold} />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Galería ── */}
      <section id="galeria" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Galería</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.plum }}>
                El espacio, en detalle
              </h2>
              <p className="text-sm font-light max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Una muestra de los trabajos y del rinconcito donde
                pasan las horas de manicure.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 md:grid-cols-6 md:auto-rows-[215px] lg:auto-rows-[250px] gap-3">
              <figure className="col-span-2 md:col-span-4 md:row-span-2 rounded-3xl overflow-hidden">
                <img src={`${IMG}/manos.webp`} alt="Manos con manicure nude recién terminado sobre toalla" className="w-full h-full object-cover aspect-[16/10] md:aspect-auto" />
              </figure>
              <figure className="rounded-3xl overflow-hidden">
                <img src={`${IMG}/esmaltes.webp`} alt="Repisas con esmaltes en degradé de rosas y rojos" className="w-full h-full object-cover aspect-square md:aspect-auto" />
              </figure>
              <figure className="rounded-3xl overflow-hidden">
                <img src={`${IMG}/detalle.webp`} alt="Bandeja de mármol con limas e instrumental de manicure" className="w-full h-full object-cover aspect-square md:aspect-auto" />
              </figure>
              <figure className="col-span-2 md:col-span-3 rounded-3xl overflow-hidden">
                <img src={`${IMG}/rincon.webp`} alt="Rincón de espera con sillón de terciopelo rosa junto a la ventana" className="w-full h-full object-cover aspect-[16/9] md:aspect-auto" />
              </figure>
              <figure className="col-span-2 md:col-span-3 rounded-3xl overflow-hidden">
                <img src={`${IMG}/hero.webp`} alt="Estación de manicure iluminada con luz natural" className="w-full h-full object-cover aspect-[16/9] md:aspect-auto" />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow>Precios</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06] mb-5`} style={{ color: C.plum }}>
              Precios
              <br />
              <em className="font-medium" style={{ color: C.rose }}>de referencia</em>
            </h2>
            <p className="text-sm font-light leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Valores de muestra para mostrar el formato de la carta:
              al publicar van los precios reales de cada servicio.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="border-t" style={{ borderColor: C.line }}>
              {PRECIOS.map((p) => (
                <li
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 py-4 border-b"
                  style={{ borderColor: C.line }}
                >
                  <div>
                    <p className={`${display.className} font-semibold text-xl md:text-2xl`} style={{ color: C.plum }}>
                      {p.name}
                    </p>
                    <p className="text-xs md:text-sm font-light" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm md:text-base font-medium" style={{ color: C.plum }}>
                      {p.price}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.rose }}>
                      muestra
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Agenda + rincón de espera ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-t-[10rem] rounded-b-3xl overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
              <img
                src={`${IMG}/rincon.webp`}
                alt="Rincón de espera de Lua Nails Home: sillón de terciopelo rosa, planta y luz de ventana"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow light>Agenda y espera</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.cream }}>
              Tu hora,
              <br />
              <em className="font-medium" style={{ color: C.goldSoft }}>reservada para ti</em>
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(255,249,246,0.78)' }}>
              Se atiende con hora agendada, así que el sillón de la
              entrada es solo para acompañantes o para quien llega un
              ratito antes. Un espacio de calma, sin apuro.
            </p>
            <ul className="space-y-3 mb-9">
              {['Agenda directa por WhatsApp', 'Te confirmamos día y hora', 'Llegar 5 minutos antes alcanza'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base font-light" style={{ color: 'rgba(255,249,246,0.88)' }}>
                  <Moon className="w-4 h-4 shrink-0" color={C.gold} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-base md:text-lg px-8 py-3 md:py-4 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.gold, color: C.plumDeep }}
            >
              Agendar mi hora
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones</Eyebrow>
            <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.plum }}>
              Lo que dicen en Google
            </h2>
            <p className="text-sm font-light leading-relaxed mb-5" style={{ color: C.muted }}>
              Lua Nails Home acumula {BIZ.reviews} reseñas en su ficha
              de Google Maps.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.rose, textDecorationColor: 'rgba(148,72,95,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <Reveal delay={140}>
            <figure
              className="rounded-3xl p-8 md:p-10 border text-center"
              style={{ backgroundColor: C.card, borderColor: C.line }}
            >
              <div className="flex justify-center gap-1.5 mb-5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-5 h-5" fill={C.gold} stroke={C.gold} strokeWidth="1" strokeLinejoin="round">
                    <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                  </svg>
                ))}
              </div>
              <blockquote className={`${display.className} text-xl md:text-2xl italic font-medium leading-relaxed mb-5`} style={{ color: C.plum }}>
                “{BIZ.reviews} reseñas reales en Google Maps respaldan
                la atención de Lua Nails Home. Al publicar, este espacio
                muestra el texto de las reseñas más recientes.”
              </blockquote>
              <figcaption className="text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: C.rose }}>
                Sello de confianza · datos reales de la ficha
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.plum }}>
              Treinta y Medio Ote. 1729,
              <br />
              <em className="font-medium" style={{ color: C.rose }}>Talca</em>
            </h2>
            <address className="not-italic text-sm md:text-base font-light leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base font-light" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-medium" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-light leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horarios de muestra: al publicar van los horarios reales
              de atención.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.plum, color: C.cream }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK_SERVICIO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-base px-7 py-3 rounded-full border transition-colors tap-44`}
                style={{ borderColor: 'rgba(74,31,51,0.35)', color: C.plum }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.plumDeep }}>
        <div className="absolute inset-0 opacity-[0.14]" aria-hidden="true">
          <img src={`${IMG}/manos.webp`} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Moon className="w-8 h-8 mx-auto mb-6" color={C.gold} />
            <h2 className={`${display.className} font-semibold text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[1.05] mb-6`} style={{ color: C.cream }}>
              Tus manos
              <br />
              <em className="font-medium" style={{ color: C.goldSoft }}>merecen un momento</em>
            </h2>
            <p className="text-sm md:text-base font-light max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,249,246,0.78)' }}>
              Escríbenos por WhatsApp y agendamos tu hora. Respondemos
              el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-base md:text-lg px-9 py-3 md:py-4 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.gold, color: C.plumDeep }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.plumDeep, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8 border-t" style={{ borderColor: 'rgba(255,249,246,0.12)' }}>
          <div>
            <p className={`${display.className} font-semibold text-xl md:text-2xl mb-2 flex items-center gap-3`}>
              <Moon className="w-5 h-5" color={C.gold} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm font-light leading-relaxed" style={{ color: 'rgba(255,249,246,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-light" style={{ color: 'rgba(255,249,246,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,249,246,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs font-light leading-relaxed" style={{ color: 'rgba(255,249,246,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Servicios, precios, horarios y fotos son de
            muestra; el nombre, la dirección, el WhatsApp y las reseñas
            son datos reales de su ficha pública.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
