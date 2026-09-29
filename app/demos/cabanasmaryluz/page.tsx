import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «un día en Mariscadero». El nombre lo pide — mar
 * y luz — y la página se ordena como una jornada en la costa: una
 * línea de horas en Space Mono va bajando de la mañana a la noche, y
 * el último momento se apaga en azul profundo. Prata es el letrero
 * tranquilo del balneario; el amarillo sol solo aparece como hora y
 * luz. Sin logo en el perfil: el nombre en Prata es la marca.
 */
const C = {
  paper: '#F3EEE1',
  panel: '#FBF9F1',
  ink: '#1B333E',
  muted: '#4F636C',
  navy: '#0C2A44',
  navy2: '#123A5E',
  sol: '#E8B33A',
  foam: '#E4ECE2',
  line: 'rgba(12,42,68,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanasmaryluz',
  title: 'Cabañas Mar y Luz — Cabañas en Mariscadero, Pelluhue',
  description:
    'Cabañas familiares en el sector Mariscadero de Pelluhue, a cuatro cuadras de la costa. Nota 4,7 en Google. Reserva directa por WhatsApp.',
  image: '/demos/cabanasmaryluz/hero.webp',
})

const NAV_LINKS = [
  { label: 'El día', href: '#eldia' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
  { label: 'Reservar', href: '#reservar' },
]

const MOMENTOS: {
  hora: string
  titulo: string
  texto: string
  fotos: { src: string; alt: string; nota: string }[]
  noche?: boolean
}[] = [
  {
    hora: '08:00',
    titulo: 'La llegada',
    texto:
      'Las cabañas están en el sector Mariscadero, una barriada tranquila entre el bosque y la costa al norte de Pelluhue. Estacionamiento cómodo junto a la casa, dicen las reseñas.',
    fotos: [
      { src: 'exterior', alt: 'Cabañas Mar y Luz desde afuera, sector Mariscadero', nota: 'La casa desde el pasaje' },
    ],
  },
  {
    hora: '11:00',
    titulo: 'La mañana',
    texto:
      'Cocina propia y un living amplio: desayuno en casa sin apurarse, con el mobiliario pensado para recibir familias.',
    fotos: [
      { src: 'living', alt: 'Living amplio de la cabaña', nota: 'El living' },
      { src: 'cocina', alt: 'Cocina equipada de la cabaña', nota: 'La cocina' },
    ],
  },
  {
    hora: '15:00',
    titulo: 'La tarde',
    texto:
      'Almuerzo en la terraza, la mesa grande para todos y la caminata a la playa de Mariscadero — cuatro cuadras, de ida y vuelta a pie.',
    fotos: [
      { src: 'terraza', alt: 'Terraza con mesa para compartir', nota: 'La terraza' },
      { src: 'comedor', alt: 'Comedor interior de la cabaña', nota: 'El comedor' },
    ],
  },
  {
    hora: '21:00',
    titulo: 'La noche',
    texto:
      'Camarotes para los niños y matrimonial para los grandes: dormitorios separados, noche de pueblo costero y el mar cerca.',
    fotos: [
      { src: 'dormitorio', alt: 'Dormitorio matrimonial de la cabaña', nota: 'El dormitorio' },
      { src: 'camarotes', alt: 'Camarotes en el segundo dormitorio', nota: 'Los camarotes' },
    ],
    noche: true,
  },
]

const REVIEWS: { quote: string; author: string; meta: string }[] = [
  {
    quote:
      'Cabañas muy cerca de la playa sector Mariscadero (no apta para el baño), a unas 4 cuadras apróx. y a un precio razonable.',
    author: 'Nicole Pereira Caro',
    meta: 'Reseña de Google · Local Guide',
  },
  {
    quote:
      'Cabañas bastante amplias, ideal para venir en familia. Cuentan con un estacionamiento cómodo para ingresar y salir.',
    author: 'Mauricio Antúnez',
    meta: 'Reseña de Google · Local Guide',
  },
  {
    quote:
      'Muy buen lugar para descansar. Cerca carretera, y playa. Comercio cercano... muy limpio acogedor recomendable 100%',
    author: 'Juan Esparza',
    meta: 'Reseña de Google · Local Guide',
  },
]

function Hora({ children, invertido }: { children: string; invertido?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase`}
      style={{ color: invertido ? C.sol : C.navy2 }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: C.sol, boxShadow: `0 0 0 3px ${invertido ? 'rgba(232,179,58,0.18)' : 'rgba(12,42,68,0.08)'}` }}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}

function Ola({ flip }: { flip?: boolean }) {
  // Línea de marea: un solo trazo continuo hecho con CSS, no una escena.
  return (
    <div className="overflow-hidden leading-none" style={{ transform: flip ? 'scaleY(-1)' : undefined }} aria-hidden="true">
      <div
        className="h-[14px] w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 10px -4px, transparent 12px, ${C.navy} 13px)`,
          backgroundSize: '20px 14px',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
      />
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

export default function CabanasMarYLuzPage() {
  return (
    <div
      className={`${body.className} cml min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cml a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={<span className="italic">Mar y Luz</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(243,238,225,0.95)',
          ink: C.navy,
          line: C.line,
          btnBg: C.navy,
          btnInk: '#F3EEE1',
        }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end" style={{ backgroundColor: C.navy }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cabañas Mar y Luz en el sector Mariscadero de Pelluhue"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(12,42,68,0.42) 0%, rgba(12,42,68,0.18) 40%, rgba(12,42,68,0.88) 100%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 pt-36">
          <Reveal>
            <p className={`${mono.className} text-[11px] font-bold tracking-[0.26em] uppercase mb-5`} style={{ color: C.sol }}>
              Mariscadero · Pelluhue · Región del Maule
            </p>
          </Reveal>
          <Reveal delay={110}>
            <h1 className={`${display.className} text-[clamp(2.9rem,11vw,6.4rem)] leading-[0.98] mb-5`} style={{ color: '#F3EEE1' }}>
              Cabañas
              <br />
              <span className="italic">Mar y Luz</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(243,238,225,0.88)' }}>
              Cabañas familiares a cuatro cuadras de la costa de Mariscadero.
              Reserva directa con sus dueños, sin intermediarios.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold tap-44 transition-transform hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: C.sol, color: C.navy }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#eldia"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold tap-44 border transition-colors"
                style={{ borderColor: 'rgba(243,238,225,0.5)', color: '#F3EEE1' }}
              >
                Cómo es un día aquí
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de ficha ── */}
      <section style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {([
              { dato: '4,7', nota: `${BIZ.reviews} reseñas en Google`, stars: true },
              { dato: 'Mariscadero', nota: 'Sector costero de Pelluhue' },
              { dato: '~4 cuadras', nota: 'Hasta la playa, a pie' },
              { dato: 'Reserva directa', nota: 'WhatsApp con sus dueños' },
            ] as { dato: string; nota: string; stars?: boolean }[]).map((f, i) => (
              <Reveal key={f.nota} delay={i * 90}>
                <div className="text-center md:text-left">
                  <p className={`${display.className} text-2xl md:text-3xl leading-tight mb-1`} style={{ color: '#F3EEE1' }}>
                    {f.dato}
                  </p>
                  {f.stars && (
                    <div className="flex justify-center md:justify-start mb-1">
                      <Stars value={5} color={C.sol} className="w-[13px] h-[13px]" />
                    </div>
                  )}
                  <p className="text-sm leading-snug" style={{ color: 'rgba(243,238,225,0.66)' }}>
                    {f.nota}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Ola />

      {/* ── Un día en Mariscadero ── */}
      <section id="eldia" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 scroll-mt-20">
        <Reveal>
          <Hora>08:00 — 21:00</Hora>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] mt-3 mb-3`} style={{ color: C.navy }}>
            Un día en <span className="italic">Mariscadero</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12" style={{ color: C.muted }}>
            Así transcurre una jornada en las cabañas: de la llegada por la
            mañana a la noche de camarotes, con la playa siempre a cuatro cuadras.
          </p>
        </Reveal>

        <ol className="relative space-y-8 md:space-y-12">
          {/* El riel del día: baja del sol a la noche */}
          <span
            className="hidden md:block absolute left-[100px] top-2 bottom-2 w-px"
            style={{ background: `linear-gradient(180deg, ${C.sol} 0%, ${C.navy2} 55%, ${C.navy} 100%)` }}
            aria-hidden="true"
          />
          {MOMENTOS.map((m) => (
            <li key={m.hora} className="relative md:pl-[200px]">
              <span
                className={`${mono.className} hidden md:inline-flex absolute left-[100px] top-8 -translate-x-1/2 items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold tracking-[0.16em] border z-10`}
                style={{
                  backgroundColor: C.paper,
                  borderColor: m.noche ? C.navy : 'rgba(232,179,58,0.6)',
                  color: m.noche ? C.navy : C.navy2,
                }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: m.noche ? C.navy : C.sol }} aria-hidden="true" />
                {m.hora}
              </span>
              <Reveal delay={80}>
                  <div
                    className={`rounded-2xl p-6 md:p-9 ${m.noche ? '' : 'border'}`}
                    style={
                      m.noche
                        ? { backgroundColor: C.navy, color: '#F3EEE1' }
                        : { backgroundColor: C.panel, borderColor: C.line }
                    }
                  >
                    <span className={`${mono.className} md:hidden inline-block text-[11px] font-bold tracking-[0.2em] mb-3`} style={{ color: m.noche ? C.sol : C.navy2 }}>
                      {m.hora}
                    </span>
                    <h3 className={`${display.className} text-3xl md:text-4xl leading-tight mb-3`} style={{ color: m.noche ? '#F3EEE1' : C.navy }}>
                      {m.titulo}
                    </h3>
                    <p className="text-base leading-relaxed max-w-2xl mb-6" style={{ color: m.noche ? 'rgba(243,238,225,0.78)' : C.muted }}>
                      {m.texto}
                    </p>
                    <div className={`grid gap-4 ${m.fotos.length > 1 ? 'sm:grid-cols-2' : 'md:grid-cols-[3fr_2fr]'}`}>
                      {m.fotos.map((f, fi) => (
                        <figure key={f.src} className={m.fotos.length > 1 && fi === 0 ? 'sm:row-span-1' : ''}>
                          <div
                            className={`relative overflow-hidden rounded-xl ${m.fotos.length === 1 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                            style={{ backgroundColor: m.noche ? C.navy2 : C.foam }}
                          >
                            <Image
                              src={`${IMG}/${f.src}.webp`}
                              alt={f.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                          <figcaption
                            className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.18em]`}
                            style={{ color: m.noche ? 'rgba(232,179,58,0.85)' : C.navy2 }}
                          >
                            {f.nota}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.foam }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <Reveal>
            <Hora>Lo que contaron</Hora>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-3 mb-10">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.navy }}>
                Quienes ya durmieron <span className="italic">aquí</span>
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={5} color={C.sol} className="w-[16px] h-[16px]" />
                <span className={`${mono.className} text-sm font-bold`} style={{ color: C.navy }}>
                  4,7 · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 110}>
                <blockquote
                  className="h-full rounded-2xl border p-6 flex flex-col gap-4"
                  style={{ backgroundColor: C.panel, borderColor: C.line }}
                >
                  <Stars value={5} color={C.sol} className="w-[13px] h-[13px]" />
                  <p className="text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                    “{r.quote}”
                  </p>
                  <footer>
                    <p className="font-semibold text-sm">{r.author}</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-0.5`} style={{ color: C.muted }}>
                      {r.meta}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Hora>Cómo llegar</Hora>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mt-3 mb-6`} style={{ color: C.navy }}>
              {BIZ.sector}, <span className="italic">{BIZ.city}</span>
            </h2>
            <ul className="space-y-4 text-[15px] leading-relaxed mb-8">
              <li className="flex gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: C.sol }} aria-hidden="true" />
                <span>
                  <strong>Dirección publicada:</strong> {BIZ.address}, {BIZ.sector}, comuna de {BIZ.city}
                  — según su página de Facebook.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: C.sol }} aria-hidden="true" />
                <span>
                  <strong>A unas cuatro cuadras</strong> de la playa de Mariscadero — de ir y volver caminando, como cuentan las reseñas.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: C.sol }} aria-hidden="true" />
                <span>
                  <strong>Dato honesto:</strong> la playa de Mariscadero no es apta para el baño;
                  el balneario de {BIZ.city} queda a pocos minutos en auto.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: C.sol }} aria-hidden="true" />
                <span>
                  <strong>Comercio cercano</strong> y acceso directo desde la carretera costera.
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tap-44 transition-transform hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: C.navy, color: '#F3EEE1' }}
              >
                Abrir en Google Maps
              </a>
              <a
                href={BIZ.fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tap-44 border transition-colors"
                style={{ borderColor: C.line, color: C.navy }}
              >
                Su Facebook
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line, backgroundColor: C.panel }}>
              <LazyMap
                title={`Mapa de ${BIZ.name}, ${BIZ.sector}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px] md:h-[400px] border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <Ola flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <Hora invertido>La luz también es del mar</Hora>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] mt-4 mb-4`} style={{ color: '#F3EEE1' }}>
              El día empieza con <span className="italic">un WhatsApp</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: 'rgba(243,238,225,0.75)' }}>
              Consulta disponibilidad directamente con los dueños de
              Mar y Luz. Sin intermediarios ni formularios.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold tap-44 transition-transform hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: C.sol, color: C.navy }}
              >
                {BIZ.phoneDisplay} — WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold tap-44 border transition-colors"
                style={{ borderColor: 'rgba(243,238,225,0.45)', color: '#F3EEE1' }}
              >
                Llamar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderColor: C.line }}
        >
          <div>
            <p className={`${display.className} italic text-2xl mb-1`} style={{ color: C.navy }}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
              {BIZ.sector} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-ink transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={BIZ.fbUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                {BIZ.igHandle}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.muted }}>
            Fotos, reseñas y nota son reales de la ficha de Google; teléfono y
            dirección vienen de sus redes publicadas. El relato del día es de
            muestra, como este sitio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
