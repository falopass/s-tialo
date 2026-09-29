import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, FB_URL, MAPS_URL, MAPS_EMBED, IMG, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el libro de visitas del pinar» — el registro de
 * entrada de un hostal de campo: papel crema rayado, tinta verde pino del
 * logo manuscrito, acento cotto de los pisos interiores y la fila de
 * pinos que firma su marca. Gloock hace de letra del letrero de entrada;
 * Source Sans 3 es la página; IBM Plex Mono timbra los datos del libro.
 */
const C = {
  paper: '#F6F1E2',
  soft: '#EDE5CE',
  pine: '#24462F',
  deep: '#152619',
  cotto: '#A8542B',
  ink: '#2A3327',
  muted: '#5C6552',
  line: 'rgba(36,70,47,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-del-pinar',
  title: 'Cabañas del Pinar — Cabañas en Curepto, Maule',
  description:
    'Cinco cabañas en Curepto, Región del Maule. Reserva directa por WhatsApp: equipadas, tranquilas y atendidas por sus dueños.',
  image: '/demos/cabanas-del-pinar/hero.webp',
})

const NAV_LINKS = [
  { label: 'El registro', href: '#registro' },
  { label: 'Libro de visitas', href: '#visitas' },
  { label: 'Cómo llegar', href: '#reservar' },
]

const REGISTRO = [
  {
    src: `${IMG}/cabana.webp`,
    num: 'Nº 01',
    name: 'La llegada',
    desc: 'Cabañas blancas sobre pilotes, cada una con su terraza mirando al patio. Estacionas al lado y la llave te la entregan en la mano.',
    nota: 'Entrada independiente',
  },
  {
    src: `${IMG}/estar.webp`,
    num: 'Nº 02',
    name: 'El estar',
    desc: 'Living con sitial y mesa de centro para la once larga: madera clara, cortinas y la tele para la tarde de lluvia.',
    nota: 'TV y estar',
  },
  {
    src: `${IMG}/cocina.webp`,
    num: 'Nº 03',
    name: 'La cocina',
    desc: 'Refrigerador, microondas y cocina completa: aquí se desayuna y se cena como en casa, sin salir a buscar restaurante.',
    nota: 'Cocina equipada',
  },
  {
    src: `${IMG}/dormitorio.webp`,
    num: 'Nº 04',
    name: 'Las piezas',
    desc: 'Camas hechas y madera a la vista. Hay cabañas con cama de dos plazas y otras con camas separadas para la familia.',
    nota: 'Ropa de cama incluida',
  },
  {
    src: `${IMG}/terraza.webp`,
    num: 'Nº 05',
    name: 'La terraza',
    desc: 'Terraza de madera con baranda y jardín al frente: el asiento donde termina el día, con el pinar de fondo.',
    nota: 'Terraza privada',
  },
  {
    src: `${IMG}/noche.webp`,
    num: 'Nº 06',
    name: 'Cuando cae el sol',
    desc: 'De noche el patio queda alumbrado y en silencio de campo: se escucha el campo, no la carretera.',
    nota: 'Sector tranquilo',
  },
]

const DATOS = [
  '5 cabañas',
  'Abate Molina 16 C · Curepto',
  `${BIZ.rating} ★ · ${BIZ.reviews} reseñas`,
  'Reserva directa',
]

/** Fila de pinos: el motivo del logo, como divisor costurado. */
function Pinos({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 28"
      preserveAspectRatio="xMidYMid meet"
      className={`block w-full ${className}`}
      height="28"
    >
      <g fill={color}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(${i * 44 + 8},0)`}>
            <polygon points="12,0 22,18 14,18 20,26 4,26 10,18 2,18" />
            <rect x="10.5" y="26" width="3" height="2" />
          </g>
        ))}
      </g>
    </svg>
  )
}

/** Línea punteada de costura/registro. */
function Costura({
  color = C.line,
  className = '',
  children,
}: {
  color?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={className} style={{ borderTop: `2px dashed ${color}` }}>
      {children}
    </div>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#BFD3B8' : '#9C4E24' }}
    >
      <span className="inline-block w-8 border-t border-dashed" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Sello de registro: el circulito que timbra la fecha de entrada. */
function SelloEntrada() {
  return (
    <div
      className="rounded-full flex items-center justify-center rotate-[6deg] shrink-0"
      style={{
        width: 104,
        height: 104,
        border: `2px solid ${C.cotto}`,
        backgroundColor: 'rgba(246,241,226,0.9)',
      }}
      aria-hidden="true"
    >
      <div className="text-center leading-tight" style={{ color: C.cotto }}>
        <p className={`${mono.className} text-[8px] uppercase tracking-[0.2em]`}>Registro</p>
        <p className={`${display.className} text-2xl`}>{BIZ.rating}★</p>
        <p className={`${mono.className} text-[8px] uppercase tracking-[0.14em]`}>
          {BIZ.reviews} visitas
        </p>
      </div>
    </div>
  )
}

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

export default function CabanasDelPinarPage() {
  return (
    <div
      className={`${body.className} cdp min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cdp a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,226,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.pine,
          btnInk: '#F6F1E2',
        }}
      />

      {/* ── Entrada: la primera página del libro ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.deep }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Las cabañas blancas de Cabañas del Pinar sobre pilotes, entre pradera y pinos en Curepto"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(21,38,25,0.5) 0%, rgba(21,38,25,0.12) 40%, rgba(21,38,25,0.72) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24">
          <Reveal>
            <div className="max-w-2xl relative">
              <div
                className="px-6 md:px-9 py-8 md:py-10 relative"
                style={{
                  backgroundColor: C.paper,
                  boxShadow: '0 24px 60px rgba(21,38,25,0.4)',
                }}
              >
                <div className="absolute -top-12 right-5 hidden sm:block">
                  <SelloEntrada />
                </div>
                <Eyebrow>Curepto · Región del Maule</Eyebrow>
                <h1
                  className={`${display.className} leading-[0.98] text-[clamp(2.6rem,9vw,5rem)] mb-5`}
                  style={{ color: C.pine }}
                >
                  Cabañas
                  <br />
                  del <span style={{ color: C.cotto }}>Pinar</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
                  Cinco cabañas blancas entre la pradera y los pinos, a la
                  entrada de Curepto. Equipadas, tranquilas y atendidas por
                  sus dueños — sin intermediarios.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm md:text-base px-6 py-3 transition-all hover:brightness-110 active:scale-95 tap-44"
                    style={{ backgroundColor: C.pine, color: '#F6F1E2' }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#registro"
                    className="font-semibold text-sm md:text-base px-6 py-3 border-2 transition-colors hover:bg-[#EDE5CE] tap-44"
                    style={{ borderColor: C.pine, color: C.pine }}
                  >
                    Ver el registro
                  </a>
                </div>
                <Costura className="mt-7 pt-4">
                  <Pinos color={C.pine} className="mt-4 opacity-70 max-w-[240px]" />
                </Costura>
              </div>
            </div>
          </Reveal>
        </div>
        {/* ficha de datos del libro */}
        <div className="relative mt-10 md:mt-14" style={{ backgroundColor: C.pine }}>
          <ul
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] text-center`}
            style={{ color: '#CFE0C6' }}
          >
            {DATOS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El registro: seis entradas del libro ── */}
      <section id="registro" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Hoja por hoja</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} text-4xl md:text-5xl leading-[1.02]`}
              style={{ color: C.pine }}
            >
              El registro
              <br />
              <span style={{ color: C.cotto }}>de las cinco</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Cada entrada del libro muestra un rincón real de las cabañas:
              lo que ves en la foto es lo que encuentras al llegar.
            </p>
          </div>
        </Reveal>
        <ol className="border-t-2 border-dashed" style={{ borderColor: C.line }}>
          {REGISTRO.map((r, i) => (
            <li key={r.num}>
              <Reveal>
                <div
                  className={`grid md:grid-cols-12 gap-5 md:gap-8 py-7 md:py-9 items-center border-b-2 border-dashed`}
                  style={{ borderColor: C.line }}
                >
                  <p
                    className={`${display.className} md:col-span-2 text-3xl md:text-4xl leading-none`}
                    style={{ color: C.cotto }}
                  >
                    {r.num}
                  </p>
                  <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                    <div
                      className="relative overflow-hidden aspect-[4/3]"
                      style={{ boxShadow: '0 10px 26px rgba(21,38,25,0.16)' }}
                    >
                      <Image
                        src={r.src}
                        alt={`${r.name} — ${BIZ.name}, Curepto`}
                        fill
                        sizes="(min-width: 768px) 42vw, calc(100vw - 2.5rem)"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <h3
                      className={`${display.className} text-2xl md:text-[28px] mb-2.5 leading-tight`}
                      style={{ color: C.pine }}
                    >
                      {r.name}
                    </h3>
                    <p className="text-[15px] leading-relaxed mb-3" style={{ color: C.muted }}>
                      {r.desc}
                    </p>
                    <p
                      className={`${mono.className} text-[11px] uppercase tracking-[0.18em] inline-block px-2.5 py-1 border border-dashed`}
                      style={{ color: C.pine, borderColor: C.line }}
                    >
                      {r.nota}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Libro de visitas: reseñas reales ── */}
      <section id="visitas" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Firmado en el libro</Eyebrow>
              <h2
                className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`}
                style={{ color: C.pine }}
              >
                El libro
                <br />
                <span style={{ color: C.cotto }}>de visitas</span>
              </h2>
              <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
                Lo que escribieron quienes ya se quedaron. Son reseñas
                reales de la ficha de Google: {BIZ.rating} de 5 estrellas en{' '}
                {BIZ.reviews} opiniones.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.pine, textDecorationColor: C.cotto }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 90}>
                  <figure
                    className="h-full p-5 md:p-6 relative"
                    style={{
                      backgroundColor: '#FBF7EC',
                      border: `1px solid ${C.line}`,
                      boxShadow: '0 8px 20px rgba(21,38,25,0.08)',
                      rotate: i % 2 === 0 ? '-0.5deg' : '0.5deg',
                    }}
                  >
                    <Stars value={r.stars} color={C.cotto} className="w-3.5 h-3.5 mb-3" />
                    <blockquote
                      className="text-[15px] leading-relaxed mb-4"
                      style={{ color: C.ink }}
                    >
                      “{r.texto}”
                    </blockquote>
                    <figcaption
                      className="text-xs border-t border-dashed pt-3 flex justify-between gap-3"
                      style={{ color: C.muted, borderColor: C.line }}
                    >
                      <span className="font-bold" style={{ color: C.pine }}>
                        {r.nombre}
                      </span>
                      <span className={mono.className}>{r.fecha}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reservar: cómo llegar y la firma ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="mb-10 md:mb-14">
            <Pinos color="#3E6B47" className="max-w-[280px] mb-8 opacity-80" />
            <Reveal>
              <Eyebrow light>Reservas</Eyebrow>
              <h2
                className={`${display.className} text-4xl md:text-5xl leading-[1.02]`}
                style={{ color: '#F6F1E2' }}
              >
                Tu nombre
                <br />
                <span style={{ color: '#C9A25F' }}>en el libro</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(246,241,226,0.78)' }}>
                Escribe con las fechas y cuántos son: los dueños te confirman
                disponibilidad y tarifa del día por WhatsApp, sin formularios
                ni espera.
              </p>
              <div
                className="p-6 md:p-7 border-2 border-dashed mb-8"
                style={{ borderColor: 'rgba(201,162,95,0.5)', backgroundColor: 'rgba(246,241,226,0.05)' }}
              >
                <p
                  className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-4`}
                  style={{ color: '#C9A25F' }}
                >
                  Datos del registro
                </p>
                <address
                  className="not-italic text-sm md:text-base leading-relaxed mb-4"
                  style={{ color: 'rgba(246,241,226,0.9)' }}
                >
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                </address>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
                    style={{ color: '#C9A25F' }}
                  >
                    Cómo llegar →
                  </a>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
                    style={{ color: '#C9A25F' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={FB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
                    style={{ color: '#C9A25F' }}
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-sm md:text-base px-7 py-3 transition-all hover:brightness-105 active:scale-95 tap-44"
                style={{ backgroundColor: '#C9A25F', color: C.deep }}
              >
                Reservar por WhatsApp
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="overflow-hidden border min-h-[260px]"
                style={{ borderColor: 'rgba(201,162,95,0.35)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p
                className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-3`}
                style={{ color: 'rgba(246,241,226,0.55)' }}
              >
                {BIZ.address} · {BIZ.city} · comuna de la costa maulina
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F6F1E2' }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderColor: 'rgba(246,241,226,0.14)' }}
        >
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address
              className="not-italic text-sm leading-relaxed"
              style={{ color: 'rgba(246,241,226,0.62)' }}
            >
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="underline underline-offset-2 hover:text-white transition-colors tap-44"
              >
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white transition-colors tap-44"
              >
                facebook.com/{BIZ.fbHandle}
              </a>
            </address>
          </div>
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            style={{ color: 'rgba(246,241,226,0.62)' }}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,226,0.14)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed"
            style={{ color: 'rgba(246,241,226,0.7)' }}
          >
            Fotos, logo, dirección, teléfono y reseñas son reales (Facebook y
            ficha de Google); los textos descriptivos son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
