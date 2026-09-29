import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import LazyMap from '../lazy-map'
import { BIZ, C, HABITACIONES, IMG, MAPS_EMBED, MAPS_URL, RESENAS, SALONES, SERVICIOS, TARIFAS, WA_LINK, WA_LINK_EVENTO } from './content'

const display = localFont({ src: '../../fonts/marcellus/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/jost/normal-100-900.woff2', weight: '100 900' })

export const metadata: Metadata = demoMetadata({
  slug: 'hotelera-somontur',
  title: 'Gran Hotel Isabel Riquelme · Chillán, frente a la Plaza de Armas',
  description:
    'Hotel clásico de Chillán frente a la Plaza de Armas: 70 habitaciones, 6 salones de eventos, restaurante y desayuno buffet. Tarifas 2026 y reserva directa.',
  image: `${IMG}/fachada.webp`,
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'
const btn = `${body.className} inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold tracking-wide transition-transform active:scale-95 ${focusRing} tap-44`

const clp = (n: number) => `$${n.toLocaleString('es-CL')}`

/** Doble filete con rombo, como la papelería del hotel. */
function Filete({ color = C.brass, className = '' }: { color?: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-px w-10" style={{ backgroundColor: color }} />
      <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: color }} />
      <span className="h-px w-10" style={{ backgroundColor: color }} />
    </span>
  )
}

function Estrellas() {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label="4,3 de 5 estrellas" style={{ color: C.brassSoft }}>
      {[0, 1, 2, 3].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M10 1.6l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 15l-5.3 2.8 1.1-5.9L1.5 7.8l5.9-.8z" />
        </svg>
      ))}
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <defs>
          <linearGradient id="ghir-half" x1="0" x2="1" y1="0" y2="0">
            <stop offset="30%" stopColor="currentColor" />
            <stop offset="30%" stopColor="rgba(243,236,221,0.35)" />
          </linearGradient>
        </defs>
        <path fill="url(#ghir-half)" d="M10 1.6l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 15l-5.3 2.8 1.1-5.9L1.5 7.8l5.9-.8z" />
      </svg>
    </span>
  )
}

function Foto({ src, alt, className = '', ratio = 'aspect-[4/3]' }: { src: string; alt: string; className?: string; ratio?: string }) {
  return (
    <figure className={`relative overflow-hidden ${ratio} ${className}`}>
      <img src={`${IMG}/${src}.webp`} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
    </figure>
  )
}

export default function HoteleraSomonturPage() {
  return (
    <div className={`${body.className} min-h-screen overflow-x-clip antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <Chrome fontClass={display.className} />

      {/* Hero: la fachada encendida al caer la tarde, como un hotel de ciudad */}
      <section id="inicio" className="relative flex min-h-[92svh] items-end overflow-hidden" style={{ backgroundColor: C.ink, color: C.cream }}>
        <img
          src={`${IMG}/fachada.webp`}
          alt="Fachada del Gran Hotel Isabel Riquelme al atardecer, con las ventanas encendidas frente a la Plaza de Armas de Chillán"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.1) 40%, rgba(20,16,12,0.78) 78%, #161310 100%)' }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-28 text-center md:pb-16">
          <Reveal>
            <img src={`${IMG}/logo.webp`} alt="Logotipo GH del Gran Hotel Isabel Riquelme" width={72} height={72} className="mx-auto h-[72px] w-[72px] rounded-full shadow-lg ring-1 ring-white/40" />
            <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.brassSoft }}>
              Chillán · frente a la Plaza de Armas
            </p>
            <h1 className={`${display.className} mx-auto mt-3 max-w-4xl text-[clamp(2.5rem,9vw,4.8rem)] leading-[1.02] tracking-[0.01em]`}>
              El gran hotel de Chillán, como toda la vida
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: C.mutedOnDark }}>
              70 habitaciones, restaurante, bar y seis salones en la esquina céntrica de Constitución 576.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.brassSoft, color: C.ink }}>
                Reservar por WhatsApp
              </a>
              <a href="#tarifas" className={`${btn} border`} style={{ borderColor: 'rgba(243,236,221,0.5)', color: C.cream, paddingTop: 11, paddingBottom: 11 }}>
                Ver tarifas 2026
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Banda de datos, estilo directorio de hotel */}
      <section aria-label="Datos del hotel" style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-8 md:grid-cols-4 md:px-8">
          {[
            ['70', 'habitaciones'],
            ['6', 'salones de eventos'],
            [`${BIZ.rating.toFixed(1).replace('.', ',')}`, `${BIZ.reviews} reseñas en Google`],
            ['15:30', 'check-in / 12:00 out'],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col items-center gap-1 text-center">
              <span className={`${display.className} text-3xl md:text-4xl`} style={{ color: C.brassSoft }}>
                {n}
              </span>
              <span className="text-xs uppercase tracking-[0.18em]" style={{ color: C.mutedOnDark }}>
                {l}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tarifario: la carta de tarifas impresa, con precios reales 2026 */}
      <section id="tarifas" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14">
            <Reveal>
              <div className="rounded-sm border-2 p-6 md:p-9" style={{ borderColor: C.ink, backgroundColor: '#faf5e9' }}>
                <div className="text-center">
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: C.claret }}>
                    Tarifario 2026
                  </p>
                  <h2 className={`${display.className} mt-2 text-4xl leading-tight md:text-5xl`}>Precios claros, por noche</h2>
                  <Filete className="mt-4" />
                </div>
                <ul className="mt-7">
                  {TARIFAS.map((t) => (
                    <li key={t.tipo} className="flex items-baseline gap-3 border-b py-3 last:border-b-0" style={{ borderColor: C.line }}>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-semibold leading-snug">{t.tipo}</span>
                        <span className="block text-[13px]" style={{ color: C.muted }}>
                          {t.detalle}
                        </span>
                      </span>
                      <span className="mx-1 flex-1 border-b border-dotted" style={{ borderColor: C.line }} aria-hidden="true" />
                      <span className={`${display.className} shrink-0 text-xl`} style={{ color: C.claret }}>
                        {clp(t.precio)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-center text-xs" style={{ color: C.muted }}>
                  Valores publicados por el hotel, IVA incluido. Extranjeros con franquicia tributaria.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className={`${display.className} text-4xl leading-[1.05] md:text-5xl`}>
                Reserva directa, sin intermediarios
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
                Un WhatsApp a recepción y listo: confirmas fecha, tipo de habitación y tarifa vigente. Convenios especiales para empresas y ejecutivos.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 text-[15px] sm:grid-cols-2">
                {SERVICIOS.map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45" style={{ backgroundColor: C.brass }} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.claret, color: C.cream }}>
                  Consultar disponibilidad
                </a>
                <a href={`mailto:${BIZ.email}`} className={`${btn} border-2`} style={{ borderColor: C.claret, color: C.claret, paddingTop: 10, paddingBottom: 10 }}>
                  Escribir un correo
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Habitaciones: riel de fotos reales */}
      <section id="habitaciones" className="scroll-mt-20" style={{ backgroundColor: C.cream2 }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="md:flex md:items-end md:justify-between md:gap-10">
              <h2 className={`${display.className} max-w-xl text-4xl leading-[1.05] md:text-5xl`}>
                Piezas amplias, camas grandes y silencio de hotel serio
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed md:mt-0" style={{ color: C.muted }}>
                Desde la single americana hasta la suite con estar separado. Todas con Wi-Fi, cable, teléfono y room service.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
              {HABITACIONES.map((h, i) => (
                <figure key={h.src} className={`group relative w-[74vw] shrink-0 snap-start overflow-hidden rounded-sm sm:w-[46vw] md:w-auto ${i % 2 === 1 ? 'md:mt-10' : ''}`}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={`${IMG}/${h.src}.webp`} alt={h.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="flex items-center justify-between py-3">
                    <span className={`${display.className} text-xl`}>{h.nombre}</span>
                    <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: C.brass }} aria-hidden="true" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Restaurante y bar */}
      <section id="restaurante" className="scroll-mt-20" style={{ backgroundColor: C.claretDeep, color: C.cream }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-center md:gap-14 md:px-8 md:py-24">
          <Reveal>
            <div className="relative">
              <Foto src="restaurante" alt="Cena para dos en el restaurante del hotel, con vino y tabla de sushi" ratio="aspect-[4/3]" className="rounded-sm shadow-2xl" />
              <Foto src="bar" alt="Bar cafetería del hotel con sillones de cuero y mesas redondas junto a ventanales" ratio="aspect-[5/4]" className="absolute -bottom-8 -right-3 hidden w-2/5 rounded-sm shadow-2xl ring-4 md:block" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={`${display.className} text-4xl leading-[1.05] md:text-5xl`}>
              El restaurant donde almuerza Chillán
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: C.mutedOnDark }}>
              Cocina internacional para 100 personas, desayuno buffet de 7:00 a 10:00 y un bar de sillones de cuero para cerrar el día.
            </p>
            <blockquote className="mt-7 border-l-2 pl-5" style={{ borderColor: C.brassSoft }}>
              <p className={`${display.className} text-xl leading-snug md:text-2xl`}>
                “La cocina es realmente espectacular, los platos y preparaciones son exquisitas”
              </p>
              <cite className="mt-3 block text-sm not-italic" style={{ color: C.mutedOnDark }}>
                {RESENAS[3].autor}, reseña en Google
              </cite>
            </blockquote>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} mt-8`} style={{ backgroundColor: C.brassSoft, color: C.ink }}>
              Reservar mesa o habitación
            </a>
          </Reveal>
        </div>
      </section>

      {/* Salones: los cinco salones con nombre propio */}
      <section id="salones" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: C.claret }}>
              Convenciones y celebraciones
            </p>
            <h2 className={`${display.className} mt-3 max-w-2xl text-4xl leading-[1.05] md:text-5xl`}>
              Seis salones con nombre propio en pleno centro
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
              Matrimonios, seminarios y cenas de empresa con Wi-Fi, teléfono y montaje a medida. El quinto piso mira la ciudad desde arriba.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {SALONES.slice(0, 4).map((s, i) => (
              <Reveal key={s.src} delay={i * 80}>
                <figure className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={`${IMG}/${s.src}.webp`} alt={s.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-10 text-sm font-semibold text-white" style={{ background: 'linear-gradient(180deg, rgba(20,16,12,0) 0%, rgba(20,16,12,0.78) 100%)' }}>
                    {s.nombre}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-sm border-2 p-6 md:flex-row md:items-center md:p-7" style={{ borderColor: C.ink, backgroundColor: '#faf5e9' }}>
              <p className={`${display.className} text-2xl leading-snug md:text-3xl`}>
                Quinto Piso, Arauco, Arturo Pacheco, Libertador, Ramón Vinay y más.
              </p>
              <a href={WA_LINK_EVENTO} target="_blank" rel="noopener noreferrer" className={`${btn} shrink-0`} style={{ backgroundColor: C.claret, color: C.cream }}>
                Cotizar mi evento
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Libro de visitas: reseñas reales */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className={`${display.className} max-w-xl text-4xl leading-[1.05] md:text-5xl`}>Lo que escriben en el libro de visitas</h2>
              <div className="flex items-center gap-3">
                <Estrellas />
                <span className="text-sm" style={{ color: C.mutedOnDark }}>
                  <strong style={{ color: C.cream }}>{BIZ.rating.toFixed(1).replace('.', ',')}</strong> · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {RESENAS.slice(0, 3).map((r, i) => (
              <Reveal key={r.autor} delay={i * 90} className={i === 1 ? 'md:mt-8' : ''}>
                <blockquote className="flex h-full flex-col justify-between rounded-sm border p-6" style={{ borderColor: C.lineOnDark, backgroundColor: 'rgba(243,236,221,0.04)' }}>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.mutedOnDark }}>
                    “{r.texto}”
                  </p>
                  <cite className="mt-5 flex items-center gap-2 text-sm font-semibold not-italic" style={{ color: C.brassSoft }}>
                    <Filete color={C.brassSoft} />
                    {r.autor}
                  </cite>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44 mt-8 inline-flex items-center gap-2 text-sm font-semibold`} style={{ color: C.brassSoft }}>
              Leer todas las reseñas en Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Ubicación */}
      <section id="contacto" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14">
            <Reveal>
              <h2 className={`${display.className} text-4xl leading-[1.05] md:text-5xl`}>
                La esquina de la plaza, en pleno centro
              </h2>
              <address className="mt-6 not-italic">
                <p className="text-lg font-semibold">{BIZ.address}</p>
                <p className="text-base" style={{ color: C.muted }}>
                  {BIZ.city}, {BIZ.region}
                </p>
              </address>
              <dl className="mt-5 grid gap-1.5 text-[15px]">
                <div className="flex gap-3">
                  <dt className="font-semibold">Recepción</dt>
                  <dd style={{ color: C.muted }}>24 horas</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold">Check-in / out</dt>
                  <dd style={{ color: C.muted }}>15:30 / 12:00</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold">Teléfono</dt>
                  <dd style={{ color: C.muted }}>
                    {BIZ.phoneDisplay} · {BIZ.movilDisplay}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold">Correo</dt>
                  <dd style={{ color: C.muted }}>{BIZ.email}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.claret, color: C.cream }}>
                  WhatsApp {BIZ.movilDisplay}
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btn} border-2`} style={{ borderColor: C.claret, color: C.claret, paddingTop: 10, paddingBottom: 10 }}>
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4">
                <Foto src="entrada" alt="Entrada del hotel por Constitución: portal de mármol negro con faroles encendidos" ratio="aspect-[4/3]" className="rounded-sm shadow-xl" />
                <div className="overflow-hidden rounded-sm border shadow-xl" style={{ borderColor: C.line }}>
                  <LazyMap src={MAPS_EMBED} title="Mapa: Gran Hotel Isabel Riquelme, Constitución 576, Chillán" className="h-64 w-full border-0 md:h-72" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-6 pt-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.webp`} alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
            <div>
              <p className={`${display.className} text-2xl leading-none`}>{BIZ.short}</p>
              <p className="mt-1 text-xs" style={{ color: C.mutedOnDark }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              WhatsApp
            </a>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Maps
            </a>
            <Filete color={C.brassSoft} />
          </div>
        </div>
      </footer>
      <DemoBand name={BIZ.short} />
    </div>
  )
}
