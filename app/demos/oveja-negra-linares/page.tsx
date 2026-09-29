import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Identidad sacada de su letrero: el medallón de madera con la oveja de
// lentes — ámbar de madera + negro — y el verde azulado de su carta.
const C = {
  ink: '#181209',
  carbon: '#211708',
  amber: '#C9862B',
  amberDeep: '#8F5B14',
  teal: '#126E6A',
  crema: '#F7EFDD',
  cremaSoft: '#FCF7EC',
  muted: '#6E5F49',
  line: 'rgba(24,18,9,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'oveja-negra-linares',
  title: 'Oveja Negra — Menú ejecutivo en Manuel Rodríguez, Linares',
  description:
    'Restobar en Manuel Rodríguez 644, Linares. Menú ejecutivo con entrada, plato de fondo y postre al mediodía; terraza y tragos. Pide por WhatsApp.',
  image: '/demos/oveja-negra-linares/hero.webp',
})

const NAV_LINKS = [
  { label: 'La colación', href: '#colacion' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'El local', href: '#local' },
]

// La colación según sus propias reseñas: pan + pebre, entrada, fondo y postre.
const PASOS = [
  {
    n: '01',
    title: 'Pan y pebre pa\' empezar',
    desc: 'El pebre que sus clientes nombran una y otra vez en Google: “exquisito y no es picante”.',
  },
  {
    n: '02',
    title: 'Entrada o consomé',
    desc: 'Ensalada o consomé para abrir, como marca la colación de toda la vida.',
  },
  {
    n: '03',
    title: 'Fondo + postre',
    desc: 'Dos opciones de plato de fondo para escoger, y postre para cerrar. Menú referencial $5.500 según sus reseñas.',
  },
]

const PLATOS = [
  { src: 'lomo', alt: 'Lomo a lo pobre con papas fritas y huevos', name: 'Lomo a lo pobre' },
  { src: 'salchipapas', alt: 'Salchipapas con pebre sobre mesa de madera', name: 'Salchipapas de la casa' },
  { src: 'plato', alt: 'Plato de fondo con arroz y carne al jugo', name: 'El fondo del día' },
  { src: 'carta', alt: 'La carta completa de Oveja Negra en su pizarra', name: 'La carta completa' },
]

const RESENAS = [
  {
    quote:
      'Lugar recomendadísimo para almorzar un menú ejecutivo, cuentan con dos opciones diferentes de las cuales escoger.',
    who: 'Marcelo Larena · reseña de Google',
  },
  {
    quote:
      'Excelente comida casera: pan, pebre que es exquisito y no es picante, ensalada o consomé, plato de fondo y postre.',
    who: 'Romina Rodríguez · reseña de Google',
  },
  {
    quote: 'Excelente sitio para comer y tomar unos tragos. Tiene dos ambientes.',
    who: 'Libo Paradas · reseña de Google',
  },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-6 py-2.5 font-bold text-[15px] uppercase tracking-wide transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44"
      style={{ backgroundColor: dark ? C.crema : C.ink, color: dark ? C.ink : C.crema }}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

function Eyebrow({ children, color = C.teal }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`} style={{ color }}>
      <span className="block w-6 h-px" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </p>
  )
}

// Borde de ticket: diente de sierra en CSS puro, como el boleta de la colación.
function TicketEdge({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full"
      style={{
        backgroundImage: `linear-gradient(45deg, ${color} 8px, transparent 0), linear-gradient(-45deg, ${color} 8px, transparent 0)`,
        backgroundSize: '16px 16px',
        backgroundRepeat: 'repeat-x',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    />
  )
}

export default function OvejaNegraPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cremaSoft, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/marca.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(247,239,221,0.96)', ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.crema }}
      />

      {/* ── Hero: la mesa puesta con su individual de marca ── */}
      <section id="inicio" className="pt-28 md:pt-36 pb-14 md:pb-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <p className={`${mono.className} inline-block text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 mb-6 border`} style={{ borderColor: C.teal, color: C.teal }}>
              Menú ejecutivo · {BIZ.city}
            </p>
            <h1 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,8.5vw,4.8rem)]`}>
              La colación de<br />Manuel Rodríguez
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
              {BIZ.nameFull} almuerza a pasos del centro de Linares: entrada, fondo y postre de lunes a sábado, con terraza y tragos para cuando el día se estira.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <WaButton>Consultar el menú</WaButton>
              <a
                href="#colacion"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 font-bold text-[15px] uppercase tracking-wide border-2 transition-colors hover:bg-[#181209] hover:text-[#F7EFDD] tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo viene
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative">
              <div className="relative aspect-[4/5] md:aspect-[5/6] rotate-1 border-[10px] shadow-xl" style={{ borderColor: '#FFF', backgroundColor: '#FFF' }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Mesa de Oveja Negra con su individual de marca, plato de fondo, consomé y jugo"
                  fill
                  priority
                  sizes="(min-width:768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} absolute -bottom-5 left-4 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] -rotate-2`} style={{ backgroundColor: C.amber, color: C.ink }}>
                La mesa, con su individual
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha rápida en negro ─────────────────────── */}
      <section aria-label="Datos del local" style={{ backgroundColor: C.ink, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.amber }}>Horario</p>
            <p className="mt-1 text-sm font-semibold leading-snug">{BIZ.hours}<br />{BIZ.hoursShort}</p>
          </div>
          <div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.amber }}>Google Maps</p>
            <p className="mt-1 text-sm font-semibold flex items-center gap-1.5">
              <Stars value={BIZ.googleRating} color={C.amber} className="w-3.5 h-3.5" />
              {BIZ.googleRating} · {BIZ.googleReviews} reseñas
            </p>
          </div>
          <div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.amber }}>Contacto</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white tap-44 inline-block">
              {BIZ.phoneDisplay}
            </a>
          </div>
          <div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.amber }}>Ticket medio</p>
            <p className="mt-1 text-sm font-semibold">$10.000–15.000 p/p</p>
          </div>
        </div>
      </section>

      {/* ── La colación: ticket de 3 pasos ────────────── */}
      <section id="colacion" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-8">
            <div>
              <Eyebrow>La colación</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.98]`}>Cómo viene el menú</h2>
            </div>
            <p className="text-sm max-w-xs md:text-right leading-relaxed" style={{ color: C.muted }}>
              El paso a paso que describen sus propios clientes en las reseñas de Google.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <TicketEdge color={C.crema} />
            <ol className="border-x-2 px-5 md:px-8 py-2" style={{ backgroundColor: C.crema, borderColor: C.line }}>
              {PASOS.map((p, i) => (
                <li key={p.n}>
                  <Reveal delay={i * 90}>
                    <div className="flex gap-5 py-5 border-b last:border-b-0 border-dashed" style={{ borderColor: C.line }}>
                      <span className={`${mono.className} shrink-0 text-sm pt-1`} style={{ color: C.teal }}>{p.n}</span>
                      <div>
                        <h3 className={`${display.className} uppercase text-lg md:text-xl leading-tight`}>{p.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{p.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <TicketEdge color={C.crema} flip />
          </div>
        </div>
      </section>

      {/* ── La cocina: grid de fotos ──────────────────── */}
      <section id="cocina" className="scroll-mt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow>La cocina</Eyebrow>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.98] mb-8`}>Lo que sale al plato</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {PLATOS.map((p, i) => (
              <li key={p.src}>
                <Reveal delay={i * 70}>
                  <figure className="group">
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: C.crema }}>
                      <Image src={`${IMG}/${p.src}.webp`} alt={p.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      {p.name}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs" style={{ color: C.muted }}>
            Fotos reales de su ficha de Google. La carta del día se confirma en el local o por WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Reseñas ───────────────────────────────────── */}
      <section aria-label="Reseñas" style={{ backgroundColor: C.carbon, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            <Reveal className="shrink-0">
              <p className={`${display.className} text-6xl md:text-7xl leading-none`} style={{ color: C.amber }}>{BIZ.googleRating}</p>
              <Stars value={BIZ.googleRating} color={C.amber} className="w-4 h-4 mt-2" />
              <p className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(247,239,221,0.65)' }}>
                {BIZ.googleReviews} reseñas en Google
              </p>
            </Reveal>
            <ul className="grid md:grid-cols-3 gap-5 flex-1">
              {RESENAS.map((r, i) => (
                <li key={r.who}>
                  <Reveal delay={i * 90}>
                    <blockquote className="border-l-2 pl-4 h-full" style={{ borderColor: C.amber }}>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(247,239,221,0.9)' }}>“{r.quote}”</p>
                      <cite className={`${mono.className} not-italic block mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(247,239,221,0.6)' }}>
                        {r.who}
                      </cite>
                    </blockquote>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── El local + mapa ───────────────────────────── */}
      <section id="local" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow>El local</Eyebrow>
          <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-8`}>
            Dos ambientes y una terraza
          </h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <Reveal className="col-span-2">
                <figure className="relative aspect-[16/10] overflow-hidden">
                  <Image src={`${IMG}/terraza.webp`} alt="Terraza de Oveja Negra con mesas al aire libre entre plantas" fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
                </figure>
              </Reveal>
              <Reveal delay={80}>
                <figure className="relative aspect-square overflow-hidden">
                  <Image src={`${IMG}/interior.webp`} alt="Interior del restobar con mesas y el letrero Oveja al fondo" fill sizes="(min-width:768px) 22vw, 50vw" className="object-cover" />
                </figure>
              </Reveal>
              <Reveal delay={140}>
                <figure className="relative aspect-square overflow-hidden">
                  <Image src={`${IMG}/marca.webp`} alt="Letrero de madera de Oveja Negra Restobar con la oveja de lentes" fill sizes="(min-width:768px) 22vw, 50vw" className="object-cover" />
                </figure>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.muted }}>
                <strong style={{ color: C.ink }}>{BIZ.address}</strong>, {BIZ.city}, {BIZ.region}
              </address>
              <p className="text-sm mb-6" style={{ color: C.muted }}>
                <strong style={{ color: C.ink }}>Horario:</strong> {BIZ.hours}. {BIZ.hoursShort}.
              </p>
              <div className="overflow-hidden border-2 min-h-[280px]" style={{ borderColor: C.ink, backgroundColor: C.crema }}>
                <LazyMap
                  title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[280px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center font-bold text-sm px-5 py-2.5 min-h-[44px] border-2 transition-colors hover:bg-[#181209] hover:text-[#F7EFDD] tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir ruta en Google Maps
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.ink, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} uppercase text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,239,221,0.62)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(247,239,221,0.62)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
