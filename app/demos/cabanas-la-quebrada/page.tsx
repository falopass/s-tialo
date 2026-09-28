import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { demoMetadata } from '../meta'
import { BIZ, IMG, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS } from './content'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/familjen-grotesk/normal-400-700.woff2', weight: '400 700' }],
  display: 'swap',
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900' }],
  display: 'swap',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' }],
  display: 'swap',
})

/**
 * Dirección de arte: «los hitos del camino» — la ficha real es un
 * hospedaje de madera al final de un patio con sauces en plena Talca.
 * Cada sección es un hito kilométrico (poste blanco + número mono)
 * unido por una línea de ripio; la paleta sale de las fotos reales:
 * verde sauce, madera, teja y puerta naranja.
 */
const C = {
  papel: '#F4F0E2',
  tint: '#E9E4D2',
  sombra: '#16281C',
  bosque: '#2C5237',
  hoja: '#6B8F3F',
  teja: '#B5491F',
  miel: '#C8985A',
  ink: '#21301F',
  muted: '#56614E',
  line: 'rgba(33,48,31,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-la-quebrada',
  title: 'Cabañas La Quebrada — Hospedaje en Talca, Región del Maule',
  description: 'Cabañas de madera en un patio con sauces a pocas cuadras del centro de Talca. Reserva directa por WhatsApp.',
  image: `${IMG}/cabana-frente.webp`,
})

// ── Piezas del camino ────────────────────────────────────────

/** Hito kilométrico chileno: poste blanco con número en mono. */
function Km({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center font-bold text-[11px] md:text-xs tracking-[0.18em] uppercase px-2.5 py-1.5 shrink-0`}
      style={{
        backgroundColor: light ? C.papel : '#FDFBF4',
        color: C.ink,
        border: `1.5px solid ${C.ink}`,
        borderBottomWidth: '4px',
      }}
    >
      KM {n}
    </span>
  )
}

/** Línea de ripio que une los hitos. */
function Track({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="flex-1 border-t-2 border-dashed"
      style={{ borderColor: light ? 'rgba(244,240,226,0.35)' : C.line }}
    />
  )
}

/** Cabecera de sección: hito + riel + etiqueta de parada. */
function Parada({ n, label, light = false }: { n: string; label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
      <Km n={n} light={light} />
      <Track light={light} />
      <span
        className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] font-medium whitespace-nowrap`}
        style={{ color: light ? C.miel : C.muted }}
      >
        {label}
      </span>
    </div>
  )
}

function Stars({ n = 5, color = C.teja, className = 'w-4 h-4' }: { n?: number; color?: string; className?: string }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${n} de 5 estrellas`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={className}
          fill={i < n ? color : 'none'}
          stroke={color}
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
        </svg>
      ))}
    </span>
  )
}

const SELLADOS = [
  'Estacionamiento dentro del recinto',
  'Cocina equipada',
  'Patio con sauces',
  'Atendido por sus dueños',
]

const FAQS = [
  {
    q: '¿Cómo reservo una cabaña?',
    a: `Por WhatsApp al ${BIZ.phoneDisplay}: cuentas cuántos son y qué fechas te acomodan, y te confirman disponibilidad y valor.`,
  },
  {
    q: '¿Qué incluye la cabaña?',
    a: 'Cocina equipada y acceso al patio con estacionamiento interior. Confirma por WhatsApp qué lleva la cabaña que te toca.',
  },
  {
    q: '¿Dónde queda exactamente?',
    a: 'En Cuatro Poniente 1197, Talca, a pasos de la Universidad Santo Tomás y a pocas cuadras del centro.',
  },
]

/** Aviso de Sitiazo en el flujo (nada fijo que tape texto ni botones). */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,12,9,0.93)', color: '#F4F0E2' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: C.miel }}
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

export default function CabanasLaQuebrada() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .clq a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <SiteNav name={BIZ.short} fontClass={display.className} />

      {/* ── KM 0: portada ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.sombra }}>
        <Image
          src={`${IMG}/cabana-frente.webp`}
          alt="Cabaña de madera de La Quebrada con puerta naranja, entre árboles y otras cabañas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(22,40,28,0.5) 0%, rgba(22,40,28,0.12) 45%, rgba(22,40,28,0.78) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-5`} style={{ color: C.miel }}>
              Hospedaje · Talca · Región del Maule
            </p>
            <h1
              className={`${display.className} uppercase font-bold leading-[0.94] tracking-[0.01em] text-[clamp(3.2rem,12vw,7rem)] mb-5`}
              style={{ color: C.papel }}
            >
              La Quebrada
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(244,240,226,0.88)' }}>
              Cabañas de madera en un patio con sauces, a pocas cuadras del
              centro de Talca. Tranquilo, atendido por sus dueños.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.teja, color: C.papel }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#cabanas"
                className={`${display.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(244,240,226,0.55)', color: C.papel }}
              >
                Recorrer el predio
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de señales: prueba social temprana ── */}
      <div style={{ backgroundColor: C.sombra }}>
        <ul
          className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-medium`}
          style={{ color: C.miel }}
        >
          <li>{BIZ.rating} en Google · {BIZ.reviews} reseñas</li>
          <li>Cuatro Pte. 1197, Talca</li>
          <li>Fotos reales del lugar</li>
        </ul>
      </div>

      {/* ── KM 01: las cabañas ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Parada n="01" label="Las cabañas" />
          <h2 className={`${display.className} uppercase font-bold text-4xl md:text-6xl leading-[0.98] mb-10 md:mb-14 max-w-4xl`} style={{ color: C.bosque }}>
            Madera, puerta naranja y sombra de sauce
          </h2>
        </Reveal>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-start">
          <Reveal>
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.ink }}>
                Cabañas de madera independientes dentro de un recinto
                cercado: entras por el portón de Cuatro Poniente y te
                quedas en un patio tranquilo, aunque estés en plena
                ciudad.
              </p>
              <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
                Las reseñas repiten tres cosas: la atención directa de
                los dueños, el patio y el estacionamiento. Capacidad,
                equipamiento y valor por noche se confirman siempre por
                WhatsApp — sin intermediarios.
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {SELLADOS.map((s) => (
                  <li
                    key={s}
                    className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.12em] font-medium px-3.5 py-2`}
                    style={{ backgroundColor: C.tint, color: C.bosque, border: `1.5px solid ${C.bosque}` }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <div className="relative overflow-hidden aspect-[3/4] border-2" style={{ borderColor: C.ink, backgroundColor: C.tint }}>
                <Image
                  src={`${IMG}/cocina.webp`}
                  alt="Cocina equipada de una cabaña de La Quebrada: microondas, hervidor, refrigerador y cocina a gas"
                  fill
                  sizes="(min-width: 1024px) 36vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`}
                style={{ color: C.muted }}
              >
                La cocina de una de las cabañas — foto real de la ficha
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── KM 02: el patio, a todo ancho con la reseña ── */}
      <section id="patio" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.sombra }}>
        <Image
          src={`${IMG}/patio-cabanas.webp`}
          alt="Patio interior de La Quebrada con dos cabañas de madera bajo sauces llorones"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(22,40,28,0.5) 0%, rgba(22,40,28,0.25) 45%, rgba(22,40,28,0.78) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-8 md:pb-12">
          <Reveal>
            <Parada n="02" label="El patio" light />
            <h2 className={`${display.className} uppercase font-bold text-3xl md:text-5xl leading-[1] mb-4 max-w-2xl`} style={{ color: C.papel }}>
              La quebrada de barrio: campo adentro de la ciudad
            </h2>
            <figure className="max-w-xl">
              <blockquote className="text-sm md:text-base leading-relaxed mb-2" style={{ color: 'rgba(244,240,226,0.92)' }}>
                “Excelente lugar tranquilo, dueños muy amables. Cabañas súper bien.”
              </blockquote>
              <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.miel }}>
                Antonio Diaz · reseña de Google · ★★★★★
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── KM 03: las reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Parada n="03" label="Las reseñas" />
        </Reveal>
        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <div className="border-2 px-7 py-8" style={{ borderColor: C.ink, backgroundColor: '#FDFBF4' }}>
              <p className={`${display.className} font-bold text-7xl md:text-8xl leading-none mb-3`} style={{ color: C.bosque }}>
                {BIZ.rating}
              </p>
              <Stars n={4} className="w-5 h-5" />
              <p className="text-sm mt-3 mb-6" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas de huéspedes en Google Maps
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs uppercase tracking-[0.14em] font-bold underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.teja, textDecorationColor: 'rgba(181,73,31,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
          <div className="space-y-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 110}>
                <figure className="border-2 px-6 py-5 md:px-7" style={{ borderColor: C.line, backgroundColor: '#FDFBF4' }}>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    <Stars n={r.stars} className="w-3.5 h-3.5" />
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em] font-bold`} style={{ color: C.bosque }}>
                      {r.name}
                    </span>
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      {r.when} · Google
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── KM 04: cómo llegar ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.tint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Parada n="04" label="Cómo llegar" />
            <h2 className={`${display.className} uppercase font-bold text-4xl md:text-6xl leading-[0.98] mb-10 md:mb-14 max-w-4xl`} style={{ color: C.bosque }}>
              Cuatro Poniente 1197, a pasos de la UST
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <figure className="h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10] border-2" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de la entrada de La Quebrada en Cuatro Poniente, Talca"
                    fill
                    sizes="(min-width: 768px) 44vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em] mb-6`} style={{ color: C.muted }}>
                  La entrada por Cuatro Poniente — imagen de Street View
                </figcaption>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.ink }}>
                  {BIZ.address}
                  <br />
                  {BIZ.region}, Chile
                </address>
                <p className="text-sm md:text-base mb-7" style={{ color: C.muted }}>
                  WhatsApp y llamadas:{' '}
                  <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.bosque }}>
                    {BIZ.phoneDisplay}
                  </a>
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm px-6 py-3 transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.bosque, color: C.papel }}
                  >
                    Cómo llegar →
                  </a>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm px-6 py-3 border-2 transition-colors tap-44`}
                    style={{ borderColor: C.bosque, color: C.bosque }}
                  >
                    Reservar por WhatsApp
                  </a>
                </div>
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="border-2 overflow-hidden min-h-[300px] h-full"
                style={{ borderColor: C.ink, backgroundColor: C.papel }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── KM 05: preguntas ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Parada n="05" label="Preguntas frecuentes" />
        </Reveal>
        <div className="max-w-3xl">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="group border-b-2 border-dashed py-5" style={{ borderColor: C.line }}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base md:text-lg tap-44" style={{ color: C.ink }}>
                  {f.q}
                  <span
                    className={`${mono.className} shrink-0 w-[30px] h-[30px] flex items-center justify-center text-base leading-none transition-transform group-open:rotate-45`}
                    style={{ border: `1.5px solid ${C.ink}`, color: C.teja }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-sm md:text-base leading-relaxed mt-3 max-w-2xl" style={{ color: C.muted }}>
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Último hito: reserva ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.sombra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <Parada n="06" label="La reserva" light />
            <h2
              className={`${display.className} uppercase font-bold text-[clamp(2.4rem,7.5vw,5rem)] leading-[0.98] mb-6 max-w-3xl`}
              style={{ color: C.papel }}
            >
              Esta noche, la quebrada
            </h2>
            <p className="text-sm md:text-base max-w-md mb-9" style={{ color: 'rgba(244,240,226,0.78)' }}>
              Escribe las fechas por WhatsApp y te responden los mismos
              dueños que preparan las cabañas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-8 py-3.5 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.teja, color: C.papel }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-8 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(244,240,226,0.5)', color: C.papel }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.sombra, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-9 pb-7 border-t flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ borderColor: 'rgba(244,240,226,0.14)' }}>
          <div>
            <p className={`${display.className} uppercase font-bold text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,240,226,0.65)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex items-center gap-6">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(244,240,226,0.65)' }}>
              © {new Date().getFullYear()} {BIZ.name}
            </p>
            <WhatsAppFab />
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,240,226,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,240,226,0.72)' }}>
            Fotos, dirección, teléfono y reseñas son reales (ficha de
            Google Maps). Los textos descriptivos son de muestra para
            mostrar el sitio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
    </div>
  )
}
