import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «plano del predio». La pyme no publica fotos, así
 * que la pieza más real que existe es la vista aérea de sus cabañas
 * entre los árboles — la página la usa como un plano: coordenadas,
 * plus code y mojones en mono. Ocre de pasto seco y verde de bosque,
 * Fraunces para el nombre de campo y Jost para el texto.
 */
const C = {
  paper: '#F2ECDD',
  card: '#FAF6EC',
  ink: '#22301F',
  pine: '#2E4B33',
  deep: '#18251B',
  ochre: '#C08A3E',
  clay: '#B35F33',
  muted: '#66705E',
  line: 'rgba(34,48,31,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-talca',
  title: 'Cabañas Talca — Cabañas en la comuna de Maule',
  description:
    'Cabañas en el sector de la K-630, comuna de Maule, a minutos de Talca. Reserva y consulta qué incluye directo por WhatsApp: +56 9 9599 3480.',
  image: `${IMG}/aerea.webp`,
})

const NAV_LINKS = [
  { label: 'El predio', href: '#predio' },
  { label: 'Qué sabemos', href: '#ficha' },
  { label: 'Cómo llegar', href: '#llegar' },
  { label: 'Reservar', href: '#reservar' },
]

const PREDIO = [
  {
    src: `${IMG}/cabanas.webp`,
    name: 'Las cabañas',
    tag: 'bosquejo',
    desc: 'Una hilera de cabañas de madera repartida entre los árboles del predio — la vista aérea de abajo las muestra de verdad.',
    alt: 'Bosquejo ilustrado: cabañas de madera entre árboles y pasto dorado en la comuna de Maule',
  },
  {
    src: `${IMG}/quincho.webp`,
    name: 'El quincho',
    tag: 'bosquejo',
    desc: 'El panorama clásico de cabaña chilena: asado y mesa al aire libre. Si el predio tiene quincho propio, conviene confirmarlo por WhatsApp.',
    alt: 'Bosquejo ilustrado: quincho rústico con parrilla y mesa de madera entre árboles',
  },
  {
    src: `${IMG}/interior.webp`,
    name: 'El interior',
    tag: 'bosquejo',
    desc: 'Camas, cocina y calefacción: lo que incluye cada cabaña se confirma directo con el dueño antes de reservar.',
    alt: 'Bosquejo ilustrado: interior de cabaña de madera con cama, estufa y ventana al campo',
  },
]

const PREGUNTAS = [
  '¿Cuántas personas caben por cabaña?',
  '¿Tienen cocina y baño propios?',
  '¿Hay estacionamiento dentro del predio?',
  '¿Reciben mascotas?',
  '¿Cuál es el valor por noche?',
]

/** Mojón de plano: cruz + coordenada. */
function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  )
}

function BosquejoBadge() {
  return (
    <span
      className={`${mono.className} absolute top-3 left-3 z-10 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full`}
      style={{ backgroundColor: 'rgba(24,37,27,0.88)', color: '#F2ECDD' }}
    >
      bosquejo
    </span>
  )
}

export default function CabanasTalcaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(24,37,27,0.94)',
          ink: '#F2ECDD',
          line: 'rgba(242,236,221,0.14)',
          btnBg: C.ochre,
          btnInk: '#18251B',
        }}
      />

      {/* ── Hero: el plano del predio ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <span className="absolute top-28 left-6 md:left-12 opacity-40" style={{ color: C.ochre }}><Mark className="w-8 h-8" /></span>
        <span className="absolute bottom-24 right-6 md:right-16 opacity-30" style={{ color: C.ochre }}><Mark className="w-6 h-6" /></span>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: '#D9B988' }}>
                35°29′S · 71°39′W — comuna de Maule
              </p>
              <h1 className={`${display.className} font-semibold leading-[1.02] text-[clamp(2.5rem,8.5vw,5rem)] mb-6`} style={{ color: '#F2ECDD' }}>
                Cabañas entre los
                <br />
                árboles, <em className="font-light" style={{ color: C.ochre }}>a minutos</em>
                <br />
                de Talca
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(242,236,221,0.88)' }}>
                Un predio con cabañas junto al camino K-630, en la comuna
                de Maule: campo tranquilo a unos minutos de la ciudad.
                Las reservas y las dudas se resuelven por WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.ochre, color: C.deep }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-semibold px-5 py-3 rounded-full border tap-44"
                  style={{ borderColor: 'rgba(242,236,221,0.35)', color: '#F2ECDD' }}
                >
                  <Stars value={3.8} color={C.ochre} className="w-[12px] h-[12px]" />
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            {/* plano del predio: vista aérea real */}
            <figure className="relative p-3 md:p-4" style={{ backgroundColor: C.card, boxShadow: '0 24px 60px -24px rgba(0,0,0,0.6)' }}>
              <span
                className={`${mono.className} absolute -top-3 right-4 z-10 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5`}
                style={{ backgroundColor: C.clay, color: '#FFF6F0' }}
              >
                vista aérea real
              </span>
              <img
                src={`${IMG}/aerea.webp`}
                alt="Vista aérea satelital del predio de Cabañas Talca: las cabañas se ven entre los árboles junto al camino K-630"
                loading="eager"
                fetchPriority="high"
                className="w-full object-cover aspect-[8/5]"
              />
              <figcaption className={`${mono.className} flex items-center justify-between pt-3 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                <span>{BIZ.plusCode}</span>
                <span>imagen satelital · Google Maps</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(242,236,221,0.18)', backgroundColor: 'rgba(24,37,27,0.7)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(242,236,221,0.9)' }}>
            <span>camino K-630 · sector El Sauce</span>
            <span>comuna de Maule</span>
            <span>reserva por WhatsApp</span>
            <span className="hidden md:inline" style={{ color: '#D9B988' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El predio: bosquejos ── */}
      <section id="predio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`} style={{ color: C.clay }}>
            <Mark className="w-[15px] h-[15px]" />
            El predio, imaginado
          </p>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Cabañas simples,
              <br />
              <em className="font-light" style={{ color: C.pine }}>campo de verdad</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              La pyme no publica fotos, así que estas escenas son
              bosquejos de muestra: lo concreto se ve en la vista aérea
              y lo que incluye cada cabaña se pregunta directo.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {PREDIO.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <article className="h-full">
                <div className="relative overflow-hidden aspect-[4/3] rounded-lg border-2 border-dashed" style={{ borderColor: C.clay }}>
                  <BosquejoBadge />
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="pt-4">
                  <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-2`} style={{ color: C.ink }}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Qué sabemos / qué preguntar ── */}
      <section id="ficha" className="scroll-mt-20" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: '#D9B988' }}>
              Lo que sí sabemos
            </p>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F2ECDD' }}>
              Ficha corta,
              <br />
              <em className="font-light" style={{ color: '#D9B988' }}>respuesta directa</em>
            </h2>
            <dl className="border-t" style={{ borderColor: 'rgba(242,236,221,0.28)' }}>
              {[
                ['qué es', 'cabañas en predio rural'],
                ['dónde', `${BIZ.address}, ${BIZ.city}`],
                ['referencia', `plus code ${BIZ.plusCode}`],
                ['nota en Google', `${BIZ.rating}★ · ${BIZ.reviews} reseñas`],
                ['contacto', BIZ.phoneDisplay],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4 py-3.5 border-b" style={{ borderColor: 'rgba(242,236,221,0.28)' }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] w-32 shrink-0`} style={{ color: '#D9B988' }}>
                    {k}
                  </dt>
                  <dd className="text-sm md:text-base" style={{ color: '#F2ECDD' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: C.card }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-4`} style={{ color: C.clay }}>
                Antes de ir — pregúntales
              </p>
              <ul className="space-y-3 mb-7">
                {PREGUNTAS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke={C.clay} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.2 9.2a2.8 2.8 0 0 1 5.5.6c0 1.6-2.2 2.1-2.7 3.4" />
                      <circle cx="12" cy="16.8" r="0.6" fill={C.clay} />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold inline-block text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.pine, color: '#F2ECDD' }}
              >
                Preguntar por WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones (honesta: sin citas porque las reseñas no tienen texto) ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-6 md:gap-14 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.clay }}>
              Nota en Google
            </p>
            <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight`} style={{ color: C.ink }}>
              {BIZ.rating}★ · {BIZ.reviews} reseñas
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.muted }}>
              La ficha de Google acumula {BIZ.reviews} reseñas — casi todas
              solo nota, sin texto. Puedes leerlas y ver la opinión de
              quienes se han quedado directamente en Maps.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.pine, textDecorationColor: 'rgba(46,75,51,0.35)' }}
            >
              Leer la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: '#D9B988' }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F2ECDD' }}>
              Junto al camino
              <br />
              <em className="font-light" style={{ color: '#D9B988' }}>K-630</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(242,236,221,0.8)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <span className={`${mono.className} text-[12px] uppercase tracking-[0.12em]`} style={{ color: '#D9B988' }}>
                {BIZ.plusCode}
              </span>
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#F2ECDD', textDecorationColor: 'rgba(242,236,221,0.35)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(242,236,221,0.7)' }}>
              En el mapa aparece al oriente de Talca, pasado el sector de
              El Sauce: las cabañas se ven entre los árboles en la foto
              aérea de arriba.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.ochre, color: C.deep }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border tap-44"
                style={{ borderColor: 'rgba(242,236,221,0.35)', color: '#F2ECDD' }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full rounded-lg" style={{ border: '1px solid rgba(242,236,221,0.25)' }}>
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
      <section id="reservar" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.paper }}>
        <span className="absolute top-10 right-8 md:right-16 opacity-25" style={{ color: C.clay }}><Mark className="w-10 h-10" /></span>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,7vw,3.9rem)] leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Un fin de semana
              <br />
              <em className="font-light" style={{ color: C.pine }}>de campo, sin ir lejos.</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: C.muted }}>
              Escribe las fechas que tienes en mente y el dueño te
              confirma disponibilidad, precio y qué incluye cada cabaña.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold inline-block text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
              style={{ backgroundColor: C.pine, color: '#F2ECDD' }}
            >
              Consultar fechas →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F2ECDD' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-5 border-t" style={{ borderColor: 'rgba(242,236,221,0.14)' }}>
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,236,221,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(242,236,221,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,236,221,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 text-xs leading-relaxed" style={{ color: 'rgba(242,236,221,0.68)' }}>
            Datos de la ficha pública de Google (ubicación, teléfono, nota); vista aérea: imagen satelital de Google Maps. Las ilustraciones marcadas «bosquejo» y los textos son de muestra.
          </p>
        </div>
        <div className="px-5 pb-5 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
