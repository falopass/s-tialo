import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2' }],
})

/**
 * Dirección de arte: «la casa de las hortensias» — una casa de veraneo
 * de pueblo costero: papel crema, el verde de sus muros y el rosa de las
 * flores del antejardín. Las fotos se cuelgan como cuadros de la casa
 * con marco fino y la reja del jardín cierra cada sección.
 * DM Serif Display pone el nombre de la casa; Onest es la conversación.
 */
const C = {
  cream: '#F7F3E9',
  soft: '#EDE7D4',
  leaf: '#3F6B3B',
  deep: '#1E3320',
  rose: '#99495C',
  ink: '#2C3128',
  muted: '#586551',
  line: 'rgba(63,107,59,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-villa-verde',
  title: 'Cabañas Villa Verde — Hospedaje en Pelluhue, Maule',
  description:
    'Casa y cabañas equipadas en Arturo Prat 330, Pelluhue, a pasos del borde costero. Reserva directa por WhatsApp con sus dueños.',
  image: '/demos/cabanas-villa-verde/hero.webp',
})

const NAV_LINKS = [
  { label: 'La casa', href: '#la-casa' },
  { label: 'Las piezas', href: '#piezas' },
  { label: 'El barrio', href: '#barrio' },
  { label: 'Reservar', href: '#reservar' },
]

const PIEZAS = [
  {
    src: `${IMG}/dormitorio.webp`,
    num: 'Pieza 01',
    name: 'La matrimonial',
    desc: 'Cama de dos plazas con cubrecama verde, velador y ventana al jardín. La pieza de los papás.',
  },
  {
    src: `${IMG}/pieza-azul.webp`,
    num: 'Pieza 02',
    name: 'La del ventanal',
    desc: 'Cama azul junto al ventanal que da al patio: entra el sol de la mañana y el aire de la costa.',
  },
  {
    src: `${IMG}/camarotes.webp`,
    num: 'Pieza 03',
    name: 'La de los niños',
    desc: 'Camarotes y camas de una plaza para que los chicos duerman todos juntos, como en la casa de la abuela.',
  },
]

const LA_CASA = [
  {
    src: `${IMG}/comedor.webp`,
    name: 'El comedor',
    desc: 'Mesa de madera para toda la familia junto a la ventana: aquí se almuerza lento y se conversa largo.',
  },
  {
    src: `${IMG}/cocina.webp`,
    name: 'La cocina',
    desc: 'Cocina completa con refrigerador, cocina a gas y loza: se cocina como en casa, sin depender de restaurantes.',
  },
  {
    src: `${IMG}/living.webp`,
    name: 'El living',
    desc: 'Sillón, TV y la cocina a la vista: el plan de tarde de lluvia también está cubierto.',
  },
]

/** Reja del jardín: barrotes con lanzas, el cierre de cada sección. */
function Reja({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      height="20"
    >
      <line x1="0" y1="14" x2="400" y2="14" stroke={color} strokeWidth="2" />
      <line x1="0" y1="6" x2="400" y2="6" stroke={color} strokeWidth="2" />
      {[...Array(21)].map((_, i) => (
        <g key={i}>
          <line x1={i * 20} y1="3" x2={i * 20} y2="19" stroke={color} strokeWidth="2" />
          <circle cx={i * 20} cy="3" r="2" fill={color} />
        </g>
      ))}
    </svg>
  )
}

/** Cuadro de la casa: foto con marco fino y pestaña de museo. */
function Cuadro({
  src,
  alt,
  num,
  caption,
  ratio = 'aspect-[4/3]',
}: {
  src: string
  alt: string
  num?: string
  caption: string
  ratio?: string
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden ${ratio} border-4`}
        style={{
          borderColor: '#FFFFFF',
          boxShadow: `0 0 0 1px ${C.line}, 0 12px 28px rgba(30,51,32,0.14)`,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 33vw, calc(100vw - 2.5rem)"
          className="object-cover"
        />
        {num && (
          <span
            className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1"
            style={{ backgroundColor: 'rgba(247,243,233,0.92)', color: C.leaf }}
          >
            {num}
          </span>
        )}
      </div>
      <figcaption
        className="text-[13px] leading-relaxed mt-3 text-center"
        style={{ color: C.muted }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3"
      style={{ color: C.rose }}
    >
      <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true" className="shrink-0">
        <circle cx="5" cy="7" r="3.4" fill="none" stroke={C.leaf} strokeWidth="1.4" />
        <circle cx="13" cy="7" r="3.4" fill={C.rose} />
      </svg>
      {children}
    </p>
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

export default function CabanasVillaVerdePage() {
  return (
    <div
      className={`${body.className} cvv min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cvv a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,243,233,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.leaf,
          btnInk: '#F7F3E9',
        }}
      />

      {/* ── Portada del álbum: la casa con su jardín ── */}
      <section id="inicio" className="relative pt-[76px] md:pt-[92px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center py-10 md:py-16">
            <Reveal>
              <Eyebrow>Arturo Prat 330 · Pelluhue · Maule</Eyebrow>
              <h1
                className={`${display.className} leading-[1.0] text-[clamp(2.8rem,10vw,5.5rem)] mb-5`}
                style={{ color: C.deep }}
              >
                Villa <em style={{ color: C.rose }}>Verde</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: C.muted }}>
                La casa verde de las hortensias rosadas: cabañas y piezas
                equipadas en pleno Pelluhue, a pasos del borde costero.
              </p>
              <p className="text-sm leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                Reserva directa con sus dueños — escribes por WhatsApp y te
                contesta la misma gente que riega el jardín.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.leaf, color: '#F7F3E9' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#piezas"
                  className="font-semibold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-colors hover:bg-[#EDE7D4] tap-44"
                  style={{ borderColor: C.leaf, color: C.leaf }}
                >
                  Ver la casa
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative">
                {/* marco del cuadro principal */}
                <div
                  className="relative aspect-[4/3] overflow-hidden border-8"
                  style={{
                    borderColor: '#FFFFFF',
                    boxShadow: `0 0 0 1px ${C.line}, 0 24px 60px rgba(30,51,32,0.22)`,
                  }}
                >
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="La casa verde de Cabañas Villa Verde con su antejardín de hortensias rosadas en Arturo Prat, Pelluhue"
                    fill
                    priority
                    sizes="(min-width: 768px) 45vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <p
                  className={`${display.className} italic text-center text-lg md:text-xl mt-4`}
                  style={{ color: C.leaf }}
                >
                  la casa verde de la esquina
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <Reja color={C.leaf} className="opacity-40" />
      </section>

      {/* ── La casa: los espacios comunes ── */}
      <section id="la-casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Los espacios</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.deep }}>
              La casa,
              <br />
              <em style={{ color: C.rose }}>como se vive</em>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Fotos reales del interior: lo que ves en los cuadros es lo que
              te recibe al abrir la puerta.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {LA_CASA.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <Cuadro
                src={p.src}
                alt={`${p.name} — ${BIZ.name}, Pelluhue`}
                caption={`${p.name} — ${p.desc}`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Las piezas: habitaciones de la casa ── */}
      <section id="piezas" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>A dormir</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-10 md:mb-14`} style={{ color: C.deep }}>
              Las <em style={{ color: C.rose }}>piezas</em>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {PIEZAS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <Cuadro
                  src={p.src}
                  alt={`${p.name} — dormitorio de ${BIZ.name}, Pelluhue`}
                  num={p.num}
                  caption={`${p.name} — ${p.desc}`}
                  ratio="aspect-[4/5]"
                />
              </Reveal>
            ))}
          </div>
        </div>
        <Reja color={C.leaf} className="opacity-40" />
      </section>

      {/* ── El barrio: Arturo Prat ── */}
      <section id="barrio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Eyebrow>El barrio</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.deep }}>
              En plena calle
              <br />
              <em style={{ color: C.rose }}>Arturo Prat</em>
            </h2>
            <p className="text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
              Villa Verde queda en Arturo Prat 330, una de las calles
              principales de Pelluhue: el almacén, la farmacia y el borde
              costero quedan a cuadras caminando.
            </p>
            <p className="text-sm leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              Ideal para quienes quieren dormir en el pueblo y pasar el día
              entre la playa de Pelluhue, el Mariscadero y Curanipe.
            </p>
            <address className="not-italic text-sm font-semibold mb-6" style={{ color: C.leaf }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
              style={{ color: C.leaf, textDecorationColor: C.rose }}
            >
              Ver en Google Maps →
            </a>
          </Reveal>
          <Reveal delay={140}>
            <Cuadro
              src={`${IMG}/estero.webp`}
              alt="Humedal verde del borde costero de Pelluhue, cerca de Cabañas Villa Verde"
              caption="El verde que le da nombre: humedal y vegetación del borde costero de Pelluhue"
              ratio="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <p
              className="text-[11px] uppercase tracking-[0.3em] font-bold mb-4"
              style={{ color: '#E5A9BC' }}
            >
              Reservas
            </p>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.cream }}>
              La llave se pide
              <br />
              <em style={{ color: '#E5A9BC' }}>por WhatsApp</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(247,243,233,0.78)' }}>
              Cuenta cuántos son y qué fechas tienes en mente: te responden
              los dueños con disponibilidad y valor de la noche, directo y
              sin intermediarios.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: '#E5A9BC', color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(247,243,233,0.5)', color: C.cream }}
              >
                Cómo llegar
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,243,233,0.7)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[260px] rounded-2xl" style={{ borderColor: 'rgba(229,169,188,0.35)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mt-3" style={{ color: 'rgba(247,243,233,0.55)' }}>
              {BIZ.address} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.cream }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderColor: 'rgba(247,243,233,0.14)' }}
        >
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,243,233,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(247,243,233,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,243,233,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(247,243,233,0.7)' }}>
            Fotos, dirección y teléfono son reales (ficha de Google); los
            textos descriptivos son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
