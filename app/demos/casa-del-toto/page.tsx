import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  crema: '#F7F1E3',
  cremaHi: '#FBF6EA',
  ink: '#241C11',
  muted: '#6B5D49',
  teja: '#B5522D',
  bosque: '#2E4A38',
  line: 'rgba(36,28,17,0.16)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// usa la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'casa-del-toto',
  title: 'Casa del Toto — la casa de comidas de la Quilvo, Romeral',
  description:
    'Casa de comidas en Av. Quilvo, Romeral, Maule: la mesa del Toto para el pasajero y la gente del valle. Consulta por teléfono si están atendiendo.',
  image: `${IMG}/atardecer.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'La mesa', href: '#mesa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

/* Propuesta de muestra: la casa no publica carta. Marcada como bosquejo. */
const MESA = [
  { nombre: 'Cazuela de ave o de vacuno', detalle: 'el plato de fondo que aguanta el camino' },
  { nombre: 'Pastel de choclo', detalle: 'de temporada, al horno de la casa' },
  { nombre: 'Porotos con rienda', detalle: 'de la olla, con pebre' },
  { nombre: 'Empanadas de horno', detalle: 'para llevar en la ruta' },
  { nombre: 'Ensalada chilena', detalle: 'tomate, cebolla y cilantro del valle' },
  { nombre: 'Té, café y sopaipillas', detalle: 'la once del pasajero' },
]

const RESENAS = [
  {
    nombre: 'Francisco Correa',
    fecha: 'Google',
    estrellas: 4,
    texto: 'Comida para el pasajero.',
  },
  {
    nombre: 'Manuel Díaz',
    fecha: 'Google',
    estrellas: 5,
    texto: 'Se ve bien no e comprado',
  },
  {
    nombre: 'Juan José Donoso Silva',
    fecha: 'Google',
    estrellas: 4,
    texto: 'Todo puede ser mejor.',
  },
  {
    nombre: 'Fabián Olmedo Muñoz',
    fecha: 'Google',
    estrellas: 3,
    texto: 'Excelente service.',
  },
]

/* Mantel cuadrillé en CSS puro (motivo, no imagen) */
function Mantel({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-8 md:h-10"
      style={{
        backgroundColor: C.crema,
        backgroundImage: `linear-gradient(${flip ? 180 : 0}deg, rgba(181,82,45,0.28) 50%, transparent 50%), linear-gradient(90deg, rgba(181,82,45,0.28) 50%, transparent 50%)`,
        backgroundSize: '28px 28px',
        backgroundBlendMode: 'multiply',
        borderTop: `3px solid ${C.teja}`,
        borderBottom: `3px solid ${C.teja}`,
      }}
    />
  )
}

function Titulo({ kicker, titulo, dark = false }: { kicker: string; titulo: string; dark?: boolean }) {
  return (
    <div className="mb-7 md:mb-9">
      <p
        className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.28em] mb-2.5`}
        style={{ color: dark ? '#E8C9A8' : C.teja }}
      >
        {kicker}
      </p>
      <h2
        className={`${display.className} uppercase leading-[0.95] tracking-wide text-[clamp(2rem,7vw,3.6rem)]`}
        style={{ color: dark ? C.cremaHi : C.ink }}
      >
        {titulo}
      </h2>
    </div>
  )
}

export default function CasaDelTotoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`
        .ct-btn { transition: transform .18s ease, filter .18s ease; }
        .ct-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .ct-btn:active { transform: scale(.97); }
        .ct-btn:focus-visible { outline: 3px solid ${C.bosque}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} uppercase tracking-wide`}>Casa del Toto</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(36,28,17,0.94)',
          ink: C.cremaHi,
          line: 'rgba(247,241,227,0.2)',
          btnBg: C.teja,
          btnInk: C.cremaHi,
        }}
      />

      {/* ── La casa sobre la Quilvo, al atardecer ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Image
          src={`${IMG}/atardecer.webp`}
          alt="La Casa del Toto al atardecer sobre Av. Quilvo en Romeral, con el cielo dorado detrás del portón"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(36,28,17,0.5) 0%, rgba(36,28,17,0.15) 45%, rgba(36,28,17,0.9) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-9 md:pb-12 pt-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`${mono.className} inline-flex items-center text-[10px] md:text-xs uppercase tracking-[0.2em] px-3 py-1.5 border-2`}
                style={{ borderColor: C.cremaHi, color: C.cremaHi, backgroundColor: 'rgba(36,28,17,0.5)' }}
              >
                Cerrado temporalmente
              </span>
              <span className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,241,227,0.85)' }}>
                {BIZ.rubro} · {BIZ.city}
              </span>
            </div>
            <h1
              className={`${display.className} uppercase leading-[0.92] tracking-wide text-[clamp(3rem,12vw,8rem)] mb-5`}
              style={{ color: C.cremaHi }}
            >
              Casa
              <br />
              del <span style={{ color: '#E8A24C' }}>Toto</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: 'rgba(247,241,227,0.9)' }}>
              La casa de comidas de la Avenida Quilvo, en Romeral: mesa de
              campo para el pasajero y la gente del valle del Maule.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} ct-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                style={{ backgroundColor: C.teja, color: C.cremaHi, borderRadius: '999px' }}
              >
                Llamar · {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ct-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                style={{ border: `2px solid rgba(247,241,227,0.55)`, color: C.cremaHi, backgroundColor: 'rgba(36,28,17,0.45)', borderRadius: '999px' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t-2" style={{ borderColor: 'rgba(247,241,227,0.25)', backgroundColor: 'rgba(36,28,17,0.85)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs`} style={{ color: 'rgba(247,241,227,0.85)' }}>
            <span className="inline-flex items-center gap-2">
              <Stars value={BIZ.rating} color="#E8A24C" className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews} opiniones
            </span>
            <span>{BIZ.address}, {BIZ.city}</span>
            <span className="hidden sm:inline">{BIZ.region}</span>
          </div>
        </div>
      </section>

      <Mantel />

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Titulo kicker="La casa" titulo="La casa de portón a la Quilvo" />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-7 space-y-5">
            <Reveal>
              <figure className="relative overflow-hidden aspect-[16/8] rounded-xl border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de la Casa del Toto vista desde la Avenida Quilvo en Romeral"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>
                La fachada sobre Av. Quilvo — foto real
              </p>
            </Reveal>
            <Reveal delay={90}>
              <figure className="relative overflow-hidden aspect-[16/8] rounded-xl border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/porton.webp`}
                  alt="El portón de entrada de la casa, de frente a la calle principal de Romeral"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>
                El portón de entrada — foto real
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={90}>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <p>
                  En la Avenida Quilvo — la calle que cruza Romeral hacia el
                  interior del Maule — está la Casa del Toto: una casa de
                  comidas de las de antes, de portón a la calle y mesa para
                  quien pasa.
                </p>
                <p>
                  Su ficha de Google la registra hoy como cerrada
                  temporalmente. Esta página es un adelanto de cómo se vería
                  su sitio cuando el Toto vuelva a abrir el portón.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 rounded-xl border-2 p-5" style={{ borderColor: C.teja, backgroundColor: C.cremaHi }}>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2`} style={{ color: C.teja }}>
                  Lo que dicen en Google
                </p>
                <p className={`${display.className} italic text-lg md:text-xl leading-snug`} style={{ color: C.ink }}>
                  «Comida para el pasajero»
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>
                  Francisco Correa · reseña de Google
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Mantel flip />

      {/* ── La mesa del Toto (propuesta marcada) ── */}
      <section id="mesa" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Titulo kicker="La mesa" titulo="La mesa del Toto" dark />
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {MESA.map((m, i) => (
              <Reveal key={m.nombre} delay={i * 60}>
                <div
                  className="h-full rounded-xl border-2 p-5 flex flex-col"
                  style={{ borderColor: 'rgba(247,241,227,0.4)', backgroundColor: 'rgba(36,28,17,0.25)' }}
                >
                  <p className={`${display.className} uppercase tracking-wide text-lg md:text-xl leading-tight mb-1.5`} style={{ color: '#E8C9A8' }}>
                    {m.nombre}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(247,241,227,0.75)' }}>{m.detalle}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.18em] mt-6`} style={{ color: 'rgba(247,241,227,0.6)' }}>
              Bosquejo de propuesta — la casa no publica carta; los platos reales se confirman con el Toto
            </p>
          </Reveal>
        </div>
      </section>

      <Mantel />

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Titulo kicker="Reseñas" titulo="Lo que escribieron en Google" />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 70}>
              <figure
                className="h-full rounded-xl border-2 p-5 flex flex-col"
                style={{ borderColor: C.ink, backgroundColor: C.cremaHi }}
              >
                <Stars value={r.estrellas} color={C.teja} className="w-3.5 h-3.5" />
                <blockquote className="text-sm md:text-base leading-relaxed mt-3.5 mb-5 font-medium" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                  <span style={{ color: C.ink }}>{r.nombre}</span>
                  <span className="shrink-0">{r.fecha}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em] mt-6`} style={{ color: C.muted }}>
            Reseñas reales, tal cual figuran en la ficha de Google
          </p>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.cremaHi }}>
        <Mantel flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Titulo kicker="Cómo llegar" titulo="Sobre la Quilvo, en Romeral" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <Reveal>
                <address className="not-italic mb-6">
                  <p className={`${display.className} uppercase leading-tight text-2xl md:text-4xl mb-2`} style={{ color: C.ink }}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm md:text-base" style={{ color: C.muted }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${mono.className} inline-block text-sm md:text-base mt-3 underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.teja, textDecorationColor: 'rgba(181,82,45,0.4)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ct-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ backgroundColor: C.bosque, color: C.cremaHi, borderRadius: '999px' }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ct-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ border: `2px solid ${C.ink}`, color: C.ink, borderRadius: '999px' }}
                  >
                    Abrir en Maps
                  </a>
                </div>
                <p className="text-xs md:text-sm mt-4 leading-relaxed" style={{ color: C.muted }}>
                  La ficha marca «cerrado temporalmente» — conviene confirmar
                  por teléfono antes de ir.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-xl border-2 aspect-[4/3] min-h-[300px]" style={{ borderColor: C.ink }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} uppercase tracking-wide text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,241,227,0.6)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,241,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(247,241,227,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las tres fotos son los
            reales de la ficha de Google, que hoy marca el local como cerrado
            temporalmente. La carta es un bosquejo de propuesta.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E8A24C' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Consultar por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
