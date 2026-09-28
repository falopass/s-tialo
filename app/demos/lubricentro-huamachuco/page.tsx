import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  paper: '#F3F2ED',
  card: '#FFFFFF',
  ink: '#14202B',
  navy: '#12283C',
  red: '#B3301C',
  oil: '#C88F1F',
  muted: '#5A6570',
  deep: '#0E1C29',
  line: 'rgba(20,32,43,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lubricentro-huamachuco',
  title: 'Lubricentro Huamachuco — Cambio de aceite y accesorios en San Clemente',
  description:
    'Lubricentro en Av. Huamachuco 1902, San Clemente: cambio de aceite, engrase, filtros, correas, ampolletas y accesorios. Atendido por su dueño.',
  image: '/demos/lubricentro-huamachuco/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  {
    name: 'Cambio de aceite',
    desc: 'Aceite mineral, semisintético o sintético según lo que pida tu motor, con el filtro correcto.',
    icon: 'aceite',
  },
  {
    name: 'Engrase',
    desc: 'Engrase de chasis y suspensiones para que el auto ruede suave y sin ruidos.',
    icon: 'engrase',
  },
  {
    name: 'Filtros',
    desc: 'Filtros de aceite, aire y combustible de las marcas que el taller tiene en stock.',
    icon: 'filtro',
  },
  {
    name: 'Correas',
    desc: 'Correas de distribución y accesorios: revisión y reemplazo antes de que corten.',
    icon: 'correa',
  },
  {
    name: 'Ampolletas',
    desc: 'Ampolletas y luces del auto: cambio en el momento, sin espera larga.',
    icon: 'ampolleta',
  },
  {
    name: 'Accesorios',
    desc: 'Accesorios y aditivos para tu vehículo, con stock en el mismo local.',
    icon: 'accesorio',
  },
] as const

const MARCAS = [
  'Total',
  'Mobil',
  'Castrol',
  'Shell Helix',
  'Valvoline',
  'Liqui Moly',
  'Elaion',
  'Mann-Filter',
] as const

const RESENAS = [
  {
    text: 'Buen trato, atendido por su dueño. Buenos productos.',
    author: 'V.Z.',
  },
  {
    text: 'Excelente atención, rápido y confiable.',
    author: 'C.R.',
  },
  {
    text: 'Con gente experta en lo que necesitas para tu vehículo.',
    author: 'E.B.',
  },
] as const

const HORAS = [
  { days: 'Lunes a sábado', time: '8:00 – 19:00' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

/** Gota de aceite: el motivo del lubricentro. */
function Gota({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.5 C12 3.5 5.5 11 5.5 15 a6.5 6.5 0 0 0 13 0 C18.5 11 12 3.5 12 3.5 Z" />
      <path d="M9.2 15.5 a2.8 2.8 0 0 0 2.3 3" />
    </svg>
  )
}

function ServicioIcon({ icon, color }: { icon: string; color: string }) {
  const common = {
    viewBox: '0 0 24 24',
    className: 'w-5 h-5',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }
  switch (icon) {
    case 'engrase':
      return (
        <svg {...common}>
          <path d="M4 4 h9 l3 3 v13 H4 Z" />
          <path d="M16 7 h3 a1.5 1.5 0 0 1 1.5 1.5 v3" />
          <path d="M8 9 h5 M8 12.5 h5 M8 16 h3" />
        </svg>
      )
    case 'filtro':
      return (
        <svg {...common}>
          <path d="M5 5 h14 l-5.5 6.5 v6 L12 19.5 l-1.5 -2 v-6 Z" />
          <path d="M5 5 h14" />
        </svg>
      )
    case 'correa':
      return (
        <svg {...common}>
          <circle cx="7.5" cy="8" r="3.2" />
          <circle cx="16.5" cy="16" r="3.2" />
          <path d="M7.5 4.8 A8.5 8.5 0 0 1 19.7 16 M16.5 19.2 A8.5 8.5 0 0 1 4.3 8" />
        </svg>
      )
    case 'ampolleta':
      return (
        <svg {...common}>
          <path d="M12 3 a6 6 0 0 1 6 6 c0 2.3 -1.4 3.8 -2.3 5.2 a1.8 1.8 0 0 1 -1.6 0.8 h-4.2 a1.8 1.8 0 0 1 -1.6 -0.8 C7.4 12.8 6 11.3 6 9 a6 6 0 0 1 6 -6 Z" />
          <path d="M10 18.5 h4 M10.5 21 h3" />
        </svg>
      )
    case 'accesorio':
      return (
        <svg {...common}>
          <path d="M4 7 h16 v13 H4 Z" />
          <path d="M9 7 a3 3 0 0 1 6 0" />
          <path d="M8.5 12 h7 M8.5 15.5 h4.5" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M12 3.5 C12 3.5 5.5 11 5.5 15 a6.5 6.5 0 0 0 13 0 C18.5 11 12 3.5 12 3.5 Z" />
          <path d="M9.2 15.5 a2.8 2.8 0 0 0 2.3 3" />
        </svg>
      )
  }
}

function Eyebrow({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-extrabold"
      style={{ color: color ?? (light ? '#E8B23B' : C.red) }}
    >
      <Gota className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function LubricentroHuamachucoPage() {
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
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(14,28,41,0.94)',
          ink: '#F3F2ED',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Fachada del Lubricentro Huamachuco en Av. Huamachuco, San Clemente"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,28,41,0.66) 0%, rgba(14,28,41,0.42) 42%, rgba(14,28,41,0.93) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(243,242,237,0.95)', color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.red} className="w-[14px] h-[14px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Lubricentro · Av. Huamachuco, San Clemente</Eyebrow>
            <h1
              className={`${display.className} scroll-mt-28 font-bold uppercase leading-[0.98] tracking-[0.01em] text-[clamp(2.8rem,10vw,6rem)] mb-6`}
              style={{ color: '#F3F2ED' }}
            >
              Aceite, filtros y accesorios
              <br />
              <span style={{ color: '#E8B23B' }}>sin dar la vuelta larga</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(243,242,237,0.9)' }}>
              Cambio de aceite, engrase, filtros, correas y ampolletas
              en Av. Huamachuco 1902. Atendido por su dueño, con marcas
              de verdad y precios justos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(243,242,237,0.55)', color: '#F3F2ED' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(243,242,237,0.22)', backgroundColor: 'rgba(14,28,41,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(243,242,237,0.92)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#E8B23B' }} aria-hidden="true" />
              Atendido por su dueño
            </span>
            <span>Lun–Sáb 8:00–19:00</span>
            <span className="hidden md:inline" style={{ color: '#E8B23B' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios express ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
              Lo que tu auto pide,
              <br />
              <span style={{ color: C.red }}>en el mismo local</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Servicio express de lubricentro más los accesorios del
              día a día: entras, se hace, y sigues tu camino.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <li
                className="rounded-2xl border p-6 h-full"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 6px rgba(20,32,43,0.05)' }}
              >
                <span
                  className="w-[42px] h-[42px] rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(179,48,28,0.1)' }}
                >
                  <ServicioIcon icon={s.icon} color={C.red} />
                </span>
                <h3 className={`${display.className} font-bold uppercase tracking-[0.03em] text-xl mb-2`} style={{ color: C.ink }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Fotos del local + marcas ── */}
      <section id="marcas" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
            <Reveal>
              <Eyebrow light>El local</Eyebrow>
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#F3F2ED' }}>
                Stock de verdad
                <br />
                <span style={{ color: '#E8B23B' }}>en las repisas</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(243,242,237,0.88)' }}>
                Aceites, filtros y accesorios exhibidos en el local de
                Av. Huamachuco: estas fotos son del taller real, no de
                catálogo.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="flex flex-wrap gap-2.5 lg:justify-end" aria-label="Marcas que trabajan">
                {MARCAS.map((m) => (
                  <li
                    key={m}
                    className={`${display.className} font-bold uppercase tracking-[0.08em] text-sm px-4 py-2 rounded-lg`}
                    style={{ backgroundColor: 'rgba(243,242,237,0.1)', color: '#F3F2ED', border: '1px solid rgba(243,242,237,0.25)' }}
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'tienda', alt: 'Interior del Lubricentro Huamachuco con repisas de aceites' },
              { src: 'filtros', alt: 'Muro de filtros y accesorios del lubricentro' },
              { src: 'bodega', alt: 'Bodega de productos del Lubricentro Huamachuco' },
              { src: 'motor', alt: 'Motor en reparación dentro del taller' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 80}>
                <div className="rounded-xl overflow-hidden h-full" style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}>
                  <img
                    src={`${IMG}/${p.src}.webp`}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Reseñas</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              Lo que dicen
              <br />
              los clientes
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <Stars value={BIZ.rating} color={C.red} className="w-5 h-5" />
              <span className={`${display.className} font-bold text-2xl`} style={{ color: C.ink }}>
                {BIZ.rating}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} acumula {BIZ.reviews} reseñas en su ficha de
              Google. Estas son reseñas reales de clientes.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.red, textDecorationColor: 'rgba(179,48,28,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={120 + i * 110}>
                <figure
                  className="rounded-2xl p-6 md:p-7 border"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 8px rgba(20,32,43,0.05)' }}
                >
                  <blockquote className={`${display.className} font-medium text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.red }}>
                      {r.author} · Reseña de Google
                    </span>
                    <Stars value={5} color={C.oil} className="w-3.5 h-3.5" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación y horarios ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#E7E6E0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: C.ink }}>
              Av. Huamachuco 1902,
              <br />
              <span style={{ color: C.red }}>a mano al pasar</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: '#4A545E' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(20,32,43,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: '#4A545E' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(20,32,43,0.35)', color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/tienda.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Gota className="w-9 h-9 mx-auto mb-6" color="#E8B23B" />
            <h2 className={`${display.className} font-bold uppercase text-[clamp(2.3rem,7vw,4.4rem)] leading-[0.98] mb-6`} style={{ color: '#F3F2ED' }}>
              Cambia el aceite
              <br />
              <span style={{ color: '#E8B23B' }}>antes de que cante el motor</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(243,242,237,0.9)' }}>
              Escríbenos por WhatsApp con la marca y modelo de tu auto
              para confirmar el aceite y el filtro correctos.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-[0.04em] text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.red, color: '#FFFFFF' }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F3F2ED' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-bold uppercase tracking-[0.03em] text-2xl mb-2 flex items-center gap-3`}>
              <Gota className="w-5 h-5" color="#E8B23B" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(243,242,237,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(243,242,237,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,242,237,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(243,242,237,0.75)' }}>
            Datos de contacto, horarios, servicios, marcas y reseñas
            reales de la ficha de Google y el letrero del local. Los
            textos de venta son de muestra.
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
