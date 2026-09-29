import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG, RESENAS, VALORAN } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la recepción de la señora Juanita» — letrero
 * colgante de madera en la fachada, dijes de llave numerados para
 * cada pieza y el tablero de la pensión completa. Verde de la casa
 * de la fachada + ámbar de sus cortinas + crema de mantel.
 */
const C = {
  paper: '#F7F0DF',
  card: '#FDFAF1',
  green: '#31401E',
  greenDeep: '#222B14',
  greenSoft: '#E7E4CE',
  amber: '#D9972E',
  amberSoft: '#F3D9A4',
  amberInk: '#7A4E0E',
  ink: '#2B2A1E',
  muted: '#5C5F45',
  line: 'rgba(49,64,30,0.25)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-y-residencial-juanita',
  title: 'Residencial Juanita — Residencial y restaurant en Curepto',
  description:
    'Residencial y restaurant en Curepto, Región del Maule. Pensión completa, piezas con baño privado y la atención de la señora Juanita. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Las piezas', href: '#piezas' },
  { label: 'La mesa', href: '#mesa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
]

const PIEZAS = [
  {
    src: `${IMG}/pieza-doble.webp`,
    num: '01',
    name: 'Pieza doble',
    desc: 'Camas con ropa de cama y madera a la vista: la pieza típica de la casa.',
    tag: 'Ropa de cama incluida',
    alt: 'Habitación doble de Residencial Juanita con camas y cortinas amarillas',
  },
  {
    src: `${IMG}/pieza-tv.webp`,
    num: '02',
    name: 'Pieza con TV cable',
    desc: 'Habitaciones con televisión por cable, como detalla la ficha de la municipalidad.',
    tag: 'TV cable',
    alt: 'Habitación de Residencial Juanita con cama y televisor mural',
  },
  {
    src: `${IMG}/bano.webp`,
    num: '03',
    name: 'Baño privado',
    desc: `Nueve piezas con baño privado; cinco suman ducha de hidromasaje.`,
    tag: `${BIZ.piezasBano} piezas con baño`,
    alt: 'Baño privado de una habitación de Residencial Juanita',
  },
  {
    src: `${IMG}/cocina.webp`,
    num: '04',
    name: 'Cocina y comedor',
    desc: 'La pensión completa sale de esta cocina: desayuno y almuerzo de la casa.',
    tag: 'Pensión completa',
    alt: 'Cocina de Residencial Juanita con muebles de madera',
  },
]

const PENSION = [
  {
    hora: 'AM',
    plato: 'Desayuno de la casa',
    nota: 'Incluido en la pensión completa, como marcan sus reseñas.',
  },
  {
    hora: 'PM',
    plato: 'Almuerzo casero',
    nota: 'La cocina de la casa sirve el almuerzo del día; hay restaurant en el mismo techo.',
  },
  {
    hora: '24 h',
    plato: 'Recepción abierta',
    nota: 'La ficha de Google la marca abierta las 24 horas: se llega cuando se llega.',
  },
]

// ── Piezas de la recepción ──────────────────────────────────

/** Dije de llave: tarjeta colgante con argolla y perforación. */
function Dije({ children, tilt = '-1.2deg' }: { children: React.ReactNode; tilt?: string }) {
  return (
    <div className="flex flex-col items-center" style={{ rotate: tilt }}>
      <span
        className="w-px h-5"
        style={{ backgroundColor: C.green }}
        aria-hidden="true"
      />
      <span
        className="w-3.5 h-3.5 rounded-full border-2 -mb-1.5 z-10"
        style={{ borderColor: C.green, backgroundColor: C.paper }}
        aria-hidden="true"
      />
      <div
        className="w-full pt-4 pb-5 px-4 h-full flex flex-col"
        style={{
          backgroundColor: C.card,
          borderRadius: '14px',
          border: `1.5px solid ${C.green}`,
          boxShadow: '0 10px 24px rgba(34,43,20,0.14)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

/** Eyebrow de recepción: etiqueta mono con guion. */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.amberSoft : C.green }}
    >
      <span className="inline-block w-8 border-t-2" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Timbre de recepción (icono SVG) para el CTA. */
function Timbre({ className = 'w-[18px] h-[18px]', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 16h16" />
      <path d="M6 16a6 6 0 0 1 12 0" />
      <path d="M12 10V8" />
      <circle cx="12" cy="6.6" r="1.1" fill={color} stroke="none" />
      <path d="M3 19h18" />
    </svg>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function ResidencialJuanitaPage() {
  return (
    <div
      className={`${body.className} rj min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .rj a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(247,240,223,0.95)',
          ink: C.greenDeep,
          line: C.line,
          btnBg: C.green,
          btnInk: '#F7F0DF',
        }}
      />

      {/* ── Hero: la casa verde con su letrero colgante ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.greenDeep }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de Residencial Juanita: casa de madera verde en la esquina de José Gil Aguayo, Curepto"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,43,20,0.45) 0%, rgba(34,43,20,0.08) 40%, rgba(34,43,20,0.72) 100%)',
          }}
        />

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24">
          <div className="flex flex-col items-end gap-2 mb-6">
            <Reveal>
              <div
                className={`${mono.className} text-[11px] uppercase tracking-[0.2em] font-bold px-4 py-2.5 flex items-center gap-2`}
                style={{ backgroundColor: 'rgba(34,43,20,0.9)', color: C.amberSoft }}
              >
                <Stars value={BIZ.rating} color={C.amber} className="w-3.5 h-3.5" />
                {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
              </div>
            </Reveal>
            <Reveal delay={80}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: '#F7F0DF', textDecorationColor: C.amber }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
          </div>

          {/* letrero colgante */}
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex justify-center gap-[26%] md:gap-[30%]" aria-hidden="true">
                <span className="w-[3px] h-8 md:h-10" style={{ backgroundColor: 'rgba(247,240,223,0.85)' }} />
                <span className="w-[3px] h-8 md:h-10" style={{ backgroundColor: 'rgba(247,240,223,0.85)' }} />
              </div>
              <div
                className="px-6 md:px-10 py-8 md:py-10"
                style={{
                  backgroundColor: C.paper,
                  borderTop: `6px solid ${C.green}`,
                  boxShadow: '0 28px 60px rgba(34,43,20,0.45)',
                }}
              >
                <Eyebrow>Restaurant · Residencial · Curepto</Eyebrow>
                <h1
                  className={`${display.className} font-semibold leading-[0.98] tracking-[-0.01em] text-[clamp(2.9rem,10vw,6rem)] mb-5`}
                  style={{ color: C.greenDeep }}
                >
                  Residencial{' '}
                  <span style={{ color: C.green, fontStyle: 'italic' }}>Juanita</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
                  La casa verde de José Gil Aguayo: piezas con baño privado,
                  pensión completa y la mesa de la señora Juanita, que lleva
                  años recibiendo a quien pasa por Curepto.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-flex items-center gap-2 uppercase font-bold tracking-[0.08em] text-sm px-6 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.green, color: '#F7F0DF' }}
                  >
                    <Timbre className="w-4 h-4" />
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#piezas"
                    className={`${mono.className} uppercase font-bold tracking-[0.08em] text-sm px-6 py-3 border-2 transition-colors hover:bg-[#E7E4CE] tap-44`}
                    style={{ borderColor: C.green, color: C.green }}
                  >
                    Ver las piezas
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* mostrador de datos */}
        <div className="relative mt-10 md:mt-14" style={{ backgroundColor: C.green }}>
          <ul
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-center`}
            style={{ color: C.amberSoft }}
          >
            {[`${BIZ.huespedes} hospedados`, `${BIZ.piezasBano + BIZ.piezasHidromasaje} habitaciones`, 'Pensión completa', 'Curepto · Maule'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Las piezas: dijes de llave ── */}
      <section id="piezas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Recepción · las llaves</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em]`}
              style={{ color: C.greenDeep }}
            >
              Las llaves de
              <br />
              <span style={{ color: C.green, fontStyle: 'italic' }}>la casa verde</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Catorce habitaciones para hasta {BIZ.huespedes} personas:
              cada dije es una puerta que se abre en Curepto.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {PIEZAS.map((p, i) => (
            <li key={p.num}>
              <Reveal delay={i * 90} className="h-full">
                <Dije tilt={i % 2 === 0 ? '-1.1deg' : '0.9deg'}>
                  <span className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.24em] mb-3`} style={{ color: C.amberInk }}>
                    Llave Nº {p.num}
                  </span>
                  <span className="relative block overflow-hidden aspect-[4/3] mb-4 rounded-[8px]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </span>
                  <h3 className={`${display.className} font-semibold text-xl md:text-[22px] mb-2 leading-tight`} style={{ color: C.greenDeep }}>
                    {p.name}
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-4 flex-1" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                  <p
                    className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.16em] border-t border-dashed pt-3`}
                    style={{ color: C.green, borderColor: C.line }}
                  >
                    {p.tag}
                  </p>
                </Dije>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── La mesa: tablero de la pensión ── */}
      <section id="mesa" className="scroll-mt-20" style={{ backgroundColor: C.greenDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <Eyebrow light>El restaurant de la casa</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-6`} style={{ color: '#F7F0DF' }}>
              La mesa de
              <br />
              <span style={{ color: C.amber, fontStyle: 'italic' }}>la señora Juanita</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(247,240,223,0.8)' }}>
              Aquí no hay carta impresa ni garzón de corbata: hay pensión
              completa y comida casera. Sus {BIZ.reviews} reseñas repiten lo
              mismo — «comida un 7», «ricas comidas», «desayuno muy rico».
            </p>
            {/* tablero del día */}
            <div style={{ backgroundColor: 'rgba(247,240,223,0.06)', border: `1px solid rgba(243,217,164,0.3)` }}>
              {PENSION.map((p, i) => (
                <div
                  key={p.plato}
                  className="flex items-baseline gap-4 px-5 md:px-6 py-4"
                  style={{ borderTop: i === 0 ? 'none' : `1px dashed rgba(243,217,164,0.3)` }}
                >
                  <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.14em] w-10 shrink-0`} style={{ color: C.amber }}>
                    {p.hora}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className={`${display.className} block font-semibold text-lg md:text-xl`} style={{ color: '#F7F0DF' }}>
                      {p.plato}
                    </span>
                    <span className="block text-[13px] leading-relaxed" style={{ color: 'rgba(247,240,223,0.65)' }}>
                      {p.nota}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[6px]" style={{ rotate: '1.4deg', boxShadow: '0 24px 50px rgba(0,0,0,0.35)' }}>
                <Image
                  src={`${IMG}/cocina.webp`}
                  alt="Cocina de madera de Residencial Juanita, donde sale la pensión completa"
                  width={675}
                  height={1200}
                  className="w-full h-auto object-cover max-h-[520px]"
                />
              </div>
              <div
                className={`${mono.className} absolute -bottom-4 left-4 md:-left-4 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2.5`}
                style={{ backgroundColor: C.amber, color: C.greenDeep, rotate: '-2deg' }}
              >
                Desde esta cocina
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: el libro de visitas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El libro de visitas</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-6`} style={{ color: C.greenDeep }}>
              Los que pasaron
              <br />
              <span style={{ color: C.green, fontStyle: 'italic' }}>dejaron nota</span>
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <span className={`${display.className} font-semibold text-6xl leading-none`} style={{ color: C.greenDeep }}>
                {String(BIZ.rating).replace('.', ',')}
              </span>
              <span>
                <Stars value={BIZ.rating} color={C.amber} className="w-5 h-5" />
                <span className={`${mono.className} block text-[11px] font-bold uppercase tracking-[0.16em] mt-1.5`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas · Google
                </span>
              </span>
            </div>
            <ul className="flex flex-wrap gap-2.5 max-w-md">
              {VALORAN.map((v) => (
                <li
                  key={v}
                  className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.1em] px-3.5 py-2 border`}
                  style={{ borderColor: C.green, color: C.green, backgroundColor: 'rgba(253,250,241,0.7)' }}
                >
                  {v}
                </li>
              ))}
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-6 text-xs font-bold uppercase tracking-[0.1em] underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44`}
              style={{ color: C.green, textDecorationColor: C.amber }}
            >
              Leer las {BIZ.reviews} reseñas →
            </a>
          </Reveal>
          <div className="flex flex-col gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure
                  className="p-5 md:p-6"
                  style={{
                    backgroundColor: C.card,
                    borderLeft: `4px solid ${i === 1 ? C.amber : C.green}`,
                    boxShadow: '0 8px 22px rgba(34,43,20,0.08)',
                  }}
                >
                  <blockquote className={`${display.className} text-lg md:text-xl leading-snug mb-4`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold`}
                    style={{ color: C.muted }}
                  >
                    — {r.who} · verificada en su ficha
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar: la esquina de Curepto ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.greenSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-6`} style={{ color: C.greenDeep }}>
              En pleno Curepto,
              <br />
              <span style={{ color: C.green, fontStyle: 'italic' }}>a pasos de la plaza</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              La casa queda en José Gil Aguayo N°15, en el centro urbano de
              Curepto — la comuna de la camelia, entre el valle y la costa
              del Maule. Escríbele a la señora Juanita y te confirma pieza
              y mesa.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 uppercase font-bold tracking-[0.08em] text-sm px-6 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.green, color: '#F7F0DF' }}
              >
                <Timbre className="w-4 h-4" />
                {BIZ.phoneDisplay}
              </a>
              <a
                href={`tel:${BIZ.fijoTel}`}
                className={`${mono.className} uppercase font-bold tracking-[0.08em] text-sm px-6 py-3 border-2 transition-colors hover:bg-[#FDFAF1] tap-44`}
                style={{ borderColor: C.green, color: C.green }}
              >
                Fijo {BIZ.fijoDisplay}
              </a>
            </div>
            {/* postal de la comuna */}
            <figure className="relative max-w-sm" style={{ rotate: '-1.2deg' }}>
              <div className="p-2.5 pb-9" style={{ backgroundColor: C.card, boxShadow: '0 14px 34px rgba(34,43,20,0.16)' }}>
                <Image
                  src={`${IMG}/costa.webp`}
                  alt="La costa de la comuna de Curepto, foto de la ficha de Google de Residencial Juanita"
                  width={900}
                  height={1200}
                  className="w-full h-auto object-cover max-h-[240px]"
                />
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] font-bold mt-2.5`} style={{ color: C.muted }}>
                  La costa de la comuna · foto de su ficha
                </figcaption>
              </div>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <div>
              <div
                className="mb-5 px-6 md:px-8 py-6"
                style={{ backgroundColor: C.card, border: `1.5px solid ${C.green}`, boxShadow: '0 14px 34px rgba(34,43,20,0.12)' }}
              >
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.amberInk }}>
                  Tarjeta de la casa
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                  {BIZ.name}
                  <br />
                  {BIZ.address}, {BIZ.city}
                  <br />
                  {BIZ.region}, Chile
                </address>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                    style={{ color: C.green, textDecorationColor: C.amber }}
                  >
                    Cómo llegar →
                  </a>
                  <a
                    href={`tel:${BIZ.fijoTel}`}
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                    style={{ color: C.green, textDecorationColor: C.amber }}
                  >
                    Llamar al fijo
                  </a>
                </div>
              </div>
              <div className="overflow-hidden min-h-[260px]" style={{ border: `1.5px solid ${C.green}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.greenDeep, color: '#F7F0DF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ borderColor: 'rgba(247,240,223,0.16)' }}>
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,240,223,0.66)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={`tel:${BIZ.fijoTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">{BIZ.fijoDisplay}</a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(247,240,223,0.66)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,240,223,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(247,240,223,0.72)' }}>
            Textos de muestra; el nombre, la dirección, los teléfonos, el
            rating, las reseñas citadas y las fotos son reales, de la ficha
            pública de Google y del registro de SERNATUR.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
