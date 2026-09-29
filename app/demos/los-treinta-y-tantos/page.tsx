import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2' }],
})
const bodyMedium = localFont({
  src: [{ path: '../../fonts/barlow/normal-600.woff2' }],
})

/**
 * Dirección de arte: «la picada de Balmaceda» — rótulo de restaurant de
 * carretera en versalitas, papel de carta y el rojo ladrillo de las
 * sillas del comedor. Anton pone el letrero, Barlow el papel de menú.
 * La estructura sigue la lógica de una pizarra de almuerzo: rótulo,
 * carta del día, comedor, lo que dice la gente, cómo llegar.
 */
const C = {
  paper: '#F6EEDC',
  card: '#FCF8EC',
  ink: '#2A2018',
  muted: '#6E5D48',
  brick: '#A6331F',
  olive: '#556034',
  gold: '#C08A2E',
  line: 'rgba(42,32,24,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'los-treinta-y-tantos',
  title: 'Los Treinta Y Tantos — Restaurante en Maule, Av. Balmaceda 135',
  description:
    'Restaurante de comida casera en Av. Balmaceda 135, Maule. Almuerzos de 10 a 23 hrs, atendido por sus dueños. Reserva por WhatsApp.',
  image: '/demos/los-treinta-y-tantos/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El comedor', href: '#comedor' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Platos destacados de su ficha de Google + lo que se ve en sus fotos.
const CARTA = [
  { plato: 'Pastel de choclo', nota: 'El clásico destacado de la casa' },
  { plato: 'Ceviche de camarón', nota: 'Servido en copa' },
  { plato: 'Paila marina', nota: 'Mariscos en su paila de greda' },
  { plato: 'Pescado frito', nota: 'Con puré y limón' },
  { plato: 'Chorrillana', nota: 'Para picar al centro' },
  { plato: 'Ensalada mixta', nota: 'La compañía del almuerzo' },
]

const OPINIONES = [
  {
    nombre: 'Pedro Oliva',
    estrellas: 5,
    cuando: 'Hace 2 meses',
    texto: 'Buena atención, comida casera sabrosa. Lo mejor de Maule.',
  },
  {
    nombre: 'Javier Maldonado',
    estrellas: 5,
    cuando: 'Google',
    texto: 'El mejor lugar de Maule para almorzar. ¡Nos atendieron como reyes! Recomendadísimo.',
  },
  {
    nombre: 'María Verónica Cancino',
    estrellas: 5,
    cuando: 'Google',
    texto: 'Todo muy rico y toda la comida preparada por sus dueños. Muy buena atención.',
  },
]

/** Sello circular de rating, estilo chapa de restaurant. */
function Sello({ size = 132 }: { size?: number }) {
  const pid = 'ttsello'
  return (
    <div
      className="rounded-full flex items-center justify-center rotate-[-8deg]"
      style={{ width: size, height: size, backgroundColor: C.brick, boxShadow: '0 10px 24px rgba(42,32,24,0.35)' }}
    >
      <svg viewBox="0 0 100 100" width={size - 10} height={size - 10} aria-hidden="true">
        <defs>
          <path id={pid} d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" fill="none" />
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke={C.paper} strokeWidth="1.3" />
        <text fill={C.paper} fontSize="7.6" fontWeight="700" letterSpacing="1.6">
          <textPath href={`#${pid}`} startOffset="0">MAULE · BALMACEDA ·</textPath>
        </text>
        <text x="50" y="56" textAnchor="middle" fill={C.paper} fontSize="20" fontWeight="900">
          {BIZ.rating}★
        </text>
        <text x="50" y="68" textAnchor="middle" fill={C.paper} fontSize="6" fontWeight="700" letterSpacing="1">
          {BIZ.reviews} RESEÑAS
        </text>
      </svg>
    </div>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${bodyMedium.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`}
      style={{ color: light ? C.gold : C.brick }}
    >
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(15,12,9,0.94)', color: '#FAF7EF' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function LosTreintaPage() {
  return (
    <div className={`${body.className} tty min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .tty a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        @media (prefers-reduced-motion: reduce) { .tty * { transition: none !important; animation: none !important } }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.04em]">Los Treinta Y Tantos</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(246,238,220,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.brick,
          btnInk: '#F6EEDC',
        }}
      />

      {/* ── Hero: rótulo de picada ── */}
      <section id="inicio" className="pt-[60px] md:pt-[68px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-6 md:pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Restaurante · Av. Balmaceda 135, Maule</Eyebrow>
                <h1 className={`${display.className} uppercase leading-[0.94] text-[clamp(2.6rem,11vw,6rem)]`} style={{ color: C.ink }}>
                  Los Treinta
                  <span className="block" style={{ color: C.brick }}>Y Tantos</span>
                </h1>
              </Reveal>
              <Reveal delay={90}>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mt-5 mb-6" style={{ color: C.muted }}>
                  El restaurant del centro de Maule: comedor amplio, cocina
                  casera atendida por sus dueños y la mesa servida de 10 a 23.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                    style={{ backgroundColor: C.brick, color: '#F6EEDC' }}
                  >
                    Reservar mesa por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className="font-semibold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-colors tap-44"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver la carta
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140} className="shrink-0 self-start md:self-auto flex flex-col items-center gap-3">
              <Sello />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.brick, textDecorationColor: C.gold }}
              >
                Ver reseñas en Google →
              </a>
            </Reveal>
          </div>
        </div>

        {/* banda de fotos del comedor */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-[1.7fr_1fr] gap-3 md:gap-4">
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Comedor de Los Treinta Y Tantos: mesas con sillas rojas y techo de madera, Maule"
                  fill
                  priority
                  sizes="(min-width: 768px) 64vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src={`${IMG}/plato-ceviche.webp`}
                  alt="Ceviche de camarón servido en copa, Los Treinta Y Tantos"
                  fill
                  sizes="(min-width: 768px) 32vw, calc(50vw - 1.5rem)"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul
              className={`${bodyMedium.className} mt-5 flex flex-wrap justify-center gap-x-7 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.22em]`}
              style={{ color: C.muted }}
            >
              {['Comida casera', 'Mariscos y pescados', 'Atendido por sus dueños', 'Todos los días 10 a 23'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.brick }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── La carta del mediodía ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>La pizarra de hoy</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-3`}>
                La carta del
                <br />
                <span style={{ color: C.brick }}>mediodía</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                Los platos destacados de su ficha de Google. La carta del día
                se confirma siempre en el local o por WhatsApp.
              </p>
              <ul>
                {CARTA.map((p) => (
                  <li
                    key={p.plato}
                    className="flex items-baseline gap-3 py-3.5 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <span className={`${bodyMedium.className} text-base md:text-lg`} style={{ color: C.ink }}>
                      {p.plato}
                    </span>
                    <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: C.line }} aria-hidden="true" />
                    <span className="text-xs md:text-sm text-right max-w-[45%]" style={{ color: C.muted }}>
                      {p.nota}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={100}>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] rotate-[-1.2deg]" style={{ boxShadow: '0 8px 22px rgba(42,32,24,0.18)' }}>
                  <Image
                    src={`${IMG}/plato-paila.webp`}
                    alt="Paila marina en plato de greda, Los Treinta Y Tantos"
                    fill
                    sizes="(min-width: 1024px) 22vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] rotate-[1.4deg] mt-8" style={{ boxShadow: '0 8px 22px rgba(42,32,24,0.18)' }}>
                  <Image
                    src={`${IMG}/plato-pescado.webp`}
                    alt="Pescado frito con puré casero y limón, Los Treinta Y Tantos"
                    fill
                    sizes="(min-width: 1024px) 22vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El comedor ── */}
      <section id="comedor" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>El comedor</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-5`}>
              Amplio, de madera
              <br />
              <span style={{ color: C.brick }}>y sin apuro</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: C.muted }}>
              Un comedor grande con techo de madera y mesa servida todo el
              día. Según sus propias reseñas, acá cocinan y atienden sus
              dueños: eso se nota en el plato y en el trato.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
              Abierto todos los días de 10:00 a 23:00, en plena Av.
              Balmaceda, la calle principal de la comuna.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]" style={{ boxShadow: '0 16px 44px rgba(42,32,24,0.22)' }}>
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="Interior amplio del restaurant Los Treinta Y Tantos con mesas preparadas"
                  fill
                  sizes="(min-width: 1024px) 48vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 md:right-8 w-[38%] max-w-[190px]">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] rotate-[2deg]" style={{ boxShadow: '0 10px 26px rgba(42,32,24,0.3)' }}>
                  <Image
                    src={`${IMG}/comedor-detalle.webp`}
                    alt="Detalle del comedor de Los Treinta Y Tantos, Maule"
                    fill
                    sizes="190px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Las 126 reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0]`}>
                «Lo mejor
                <br />
                <span style={{ color: C.brick }}>de Maule»</span>
              </h2>
              <div className="flex items-center gap-3">
                <Stars value={4.1} color={C.gold} />
                <span className={`${bodyMedium.className} text-sm`} style={{ color: C.muted }}>
                  {BIZ.rating} de 5 · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {OPINIONES.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure className="h-full p-5 md:p-6 rounded-xl" style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                  <Stars value={r.estrellas} color={C.gold} className="w-3.5 h-3.5" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed mt-3 mb-4" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.16em] font-semibold" style={{ color: C.muted }}>
                    {r.nombre} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.brick, textDecorationColor: C.gold }}
            >
              Leer las {BIZ.reviews} reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow light>En plena Balmaceda</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.paper }}>
                Mesas servidas
                <br />
                <span style={{ color: C.gold }}>hasta las 23:00</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(246,238,220,0.85)' }}>
                {BIZ.address}, {BIZ.city}
                <br />
                {BIZ.region}, Chile
                <br />
                <span className="text-xs" style={{ color: 'rgba(246,238,220,0.6)' }}>{BIZ.horario}</span>
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.gold, color: C.ink }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-colors tap-44"
                  style={{ borderColor: 'rgba(246,238,220,0.5)', color: C.paper }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-2xl min-h-[280px]" style={{ border: `1px solid ${C.gold}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ borderColor: 'rgba(246,238,220,0.16)' }}>
          <div>
            <p className={`${display.className} uppercase text-xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(246,238,220,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              WhatsApp{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(246,238,220,0.6)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,238,220,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: 'rgba(246,238,220,0.68)' }}>
            Fotos, reseñas, dirección, horario, rating y teléfono son los
            reales de la ficha de Google del restaurant.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
