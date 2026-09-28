import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EVENTO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' }],
  variable: '--font-display',
})
const displayIt = localFont({
  src: [{ path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' }],
  variable: '--font-display-it',
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  cream: '#F6EFE0',
  creamDeep: '#EDE2CB',
  ink: '#33241A',
  terra: '#B9502B',
  terraDeep: '#8E3B1E',
  board: '#2E332B',
  muted: '#6E5B48',
  line: 'rgba(51,36,26,0.2)',
  chalk: '#F1E8D2',
}

export const metadata: Metadata = demoMetadata({
  slug: 'artesanal-y-gourmet',
  title: 'Artesanal y Gourmet — Comida casera en Molina',
  description:
    'Menú del día con dos opciones de plato, ensalada, postre y sopaipillas con pebre de cortesía. K-145, Molina. Almuerzos de Lu–Sá 12–17h.',
  image: `${IMG}/cazuela.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Los platos', href: '#platos' },
  { label: 'La mesa larga', href: '#mesa-larga' },
  { label: 'Contacto', href: '#contacto' },
]

const PIZARRA = [
  { n: '01', plato: 'Plato de fondo', nota: 'dos opciones del día a elección' },
  { n: '02', plato: 'Ensalada fresca', nota: 'acompaña cada menú' },
  { n: '03', plato: 'Postre', nota: 'para cerrar el almuerzo' },
  { n: '·', plato: 'Sopaipillas y pebre', nota: 'de cortesía, recién hechas' },
]

const PLATOS = [
  {
    src: `${IMG}/cazuela.webp`,
    alt: 'Cazuela con carne, choclo, zapallo y zanahoria servida en plato hondo',
    cap: 'Cazuela, como en la casa',
  },
  {
    src: `${IMG}/pescado.webp`,
    alt: 'Pescado frito crocante servido con rodajas de limón',
    cap: 'Pescado frito con limón',
  },
  {
    src: `${IMG}/charquican.webp`,
    alt: 'Charquicán con verduras y un huevo frito encima',
    cap: 'Charquicán con huevo',
  },
  {
    src: `${IMG}/cazuela-mesa.webp`,
    alt: 'Mesa servida con cazuela, sopaipillas, ensalada y bebida',
    cap: 'La mesa completa del mediodía',
  },
]

const REVIEWS = [
  {
    name: 'Paulina Albornoz',
    text: 'Amo este lugar. Rico, limpio, comida deliciosa y siempre del día. Servicio fenomenal, todo muy hogareño.',
  },
  {
    name: 'Felipe Núñez',
    text: 'Local muy cómodo, el sabor de la comida es como echa en casa. Hasta te dan sopaipillas pequeñas más pebre. De que estuvo bueno, estubo bueno.',
  },
  {
    name: 'Laureano Rioseco',
    text: 'Buena comida casera, buena preparación y muy limpio el restaurant. Solo menú del día, dos opciones: plato principal más ensalada y postre, unas ricas sopaipillas y un pebre fresco.',
  },
]

export default function ArtesanalPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${displayIt.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2">
            <Image
              src={`${IMG}/logo.png`}
              alt={`Logo de ${BIZ.name}`}
              width={34}
              height={32}
              className="rounded-full"
            />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic' }}>
              {BIZ.short}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        theme={{ over: 'light', bar: C.cream, ink: C.ink, line: C.line, btnBg: C.terra, btnInk: C.cream }}
      />

      {/* ── HERO ───────────────────────────────────────── */}
      <section id="inicio" className="pt-[92px] md:pt-[120px] pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <Reveal>
              <Image
                src={`${IMG}/logo.png`}
                alt={`Sello de ${BIZ.name}`}
                width={120}
                height={110}
                className="rounded-full border"
                style={{ borderColor: C.line }}
              />
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-5 text-[36px] md:text-[56px] leading-[1.04] font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Comida casera{' '}
                <em style={{ fontFamily: 'var(--font-display-it)', color: C.terra }}>en Molina</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                Menú del día todos los mediodías: dos platos a elección, ensalada, postre
                y las sopaipillas con pebre que llegan de cortesía a la mesa.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full"
                  style={{ backgroundColor: C.terra, color: C.cream }}
                >
                  Preguntar por el menú
                </a>
                <p
                  className="inline-flex items-center gap-2 text-[13px]"
                  style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
                >
                  <Stars value={4.7} color={C.terra} className="w-3.5 h-3.5" />
                  {BIZ.rating} · {BIZ.ratingCount}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] rotate-[1.5deg]"
                style={{ backgroundColor: C.creamDeep }}
              />
              <div className="relative overflow-hidden rounded-[24px] border" style={{ borderColor: C.line, aspectRatio: '4/3' }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt={`Fachada de ${BIZ.name} en la ruta K-145 de Molina`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-4 left-5 px-4 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase"
                style={{ backgroundColor: C.ink, color: C.cream, fontFamily: 'var(--font-mono)' }}
              >
                Ruta K-145 · {BIZ.city}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LA PIZARRA DEL DÍA ─────────────────────────── */}
      <section id="pizarra" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="rounded-[28px] p-6 md:p-10 relative overflow-hidden" style={{ backgroundColor: C.board, color: C.chalk }}>
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(241,232,210,0.9) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />
              <div className="relative">
                <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(241,232,210,0.6)' }}>
                  La pizarra del día · {BIZ.hours}
                </p>
                <h2
                  className="mt-4 text-[32px] md:text-[48px] leading-[1.05] font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Un solo menú,{' '}
                  <em style={{ fontFamily: 'var(--font-display-it)', color: '#E8A04C' }}>bien hecho</em>
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: 'rgba(241,232,210,0.75)' }}>
                  Acá no hay carta de veinte páginas: cada mediodía se sirve el menú del día,
                  con dos opciones de fondo. Así lo cuentan quienes almuerzan seguido.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-x-10">
                  {PIZARRA.map((item) => (
                    <Reveal key={item.n} className="block">
                      <div className="py-4 border-b flex items-baseline gap-4" style={{ borderColor: 'rgba(241,232,210,0.22)' }}>
                        <span className="text-[12px] shrink-0" style={{ fontFamily: 'var(--font-mono)', color: '#E8A04C' }}>{item.n}</span>
                        <div>
                          <p className="text-[19px] md:text-[22px] font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.plato}</p>
                          <p className="mt-1 text-[13px]" style={{ color: 'rgba(241,232,210,0.65)', fontFamily: 'var(--font-mono)' }}>{item.nota}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-7 text-[13px]" style={{ color: 'rgba(241,232,210,0.55)', fontFamily: 'var(--font-mono)' }}>
                  Rango de precios en Google: {BIZ.priceRange} por persona.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LOS PLATOS ─────────────────────────────────── */}
      <section id="platos" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className="text-[30px] md:text-[44px] leading-[1.05] font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Lo que llega{' '}
              <em style={{ fontFamily: 'var(--font-display-it)', color: C.terra }}>a la mesa</em>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {PLATOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 60}>
                <figure>
                  <div
                    className="relative overflow-hidden rounded-[18px] border"
                    style={{ borderColor: C.line, aspectRatio: i % 2 ? '3/4' : '4/4.2' }}
                  >
                    <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <figcaption className="mt-2.5 text-[13px] font-medium" style={{ color: C.muted }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA MESA LARGA ──────────────────────────────── */}
      <section id="mesa-larga" className="py-14 md:py-20" style={{ backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="text-[30px] md:text-[44px] leading-[1.05] font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  Una mesa larga{' '}
                  <em style={{ fontFamily: 'var(--font-display-it)', color: C.terra }}>para celebrar</em>
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  El comedor también se prepara para cumpleaños y reuniones familiares:
                  mesa corrida, servicios completos y — como se ve en las fotos —
                  hasta música en vivo en fechas especiales.
                </p>
                <a
                  href={WA_LINK_EVENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-6 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Consultar por un evento
                </a>
              </Reveal>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <Reveal className="col-span-2">
                <div className="relative overflow-hidden rounded-[20px] border" style={{ borderColor: C.line, aspectRatio: '16/8' }}>
                  <Image
                    src={`${IMG}/evento.webp`}
                    alt="Mesa larga preparada para una celebración con servicios completos y flores"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={70}>
                <div className="relative overflow-hidden rounded-[20px] border" style={{ borderColor: C.line, aspectRatio: '4/3' }}>
                  <Image
                    src={`${IMG}/cantante.webp`}
                    alt="Cantante con micrófono animando una celebración en el comedor del restaurante"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 27vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-[20px] border" style={{ borderColor: C.line, aspectRatio: '4/3' }}>
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza techada de madera con mesas y sillas del restaurante"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 27vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ────────────────────────────────────── */}
      <section id="resenas" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className="text-[30px] md:text-[44px] leading-[1.05] font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Los que vuelven{' '}
              <em style={{ fontFamily: 'var(--font-display-it)', color: C.terra }}>a almorzar</em>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <figure className="h-full rounded-[20px] p-6 border flex flex-col" style={{ borderColor: C.line, backgroundColor: i === 1 ? C.creamDeep : 'transparent' }}>
                  <Stars value={5} color={C.terra} className="w-3.5 h-3.5" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] tracking-[0.14em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                    {r.name} · Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-5 text-[12px] tracking-[0.12em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
              Textos textuales de las opiniones de su ficha de Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACTO ───────────────────────────────────── */}
      <section id="contacto" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Reveal>
              <div className="relative overflow-hidden rounded-[24px] border h-[280px] md:h-auto md:min-h-[340px]" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-[24px] p-6 md:p-8 h-full flex flex-col" style={{ backgroundColor: C.terra, color: C.cream }}>
                <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(246,239,224,0.75)' }}>
                  Ven a almorzar
                </p>
                <h2 className="mt-3 text-[30px] md:text-[40px] leading-[1.05] font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  Sobre la K-145, camino al valle
                </h2>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(246,239,224,0.7)' }}>Dirección</dt>
                    <dd>{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(246,239,224,0.7)' }}>Horario</dt>
                    <dd>{BIZ.hours}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(246,239,224,0.7)' }}>WhatsApp</dt>
                    <dd>{BIZ.phoneDisplay}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3 mt-auto pt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full"
                    style={{ backgroundColor: C.cream, color: C.terraDeep }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                    style={{ borderColor: 'rgba(246,239,224,0.6)', color: C.cream }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={`${IMG}/logo.png`}
              alt={`Sello de ${BIZ.name}`}
              width={40}
              height={37}
              className="rounded-full"
            />
            <div>
              <p className="text-[15px] font-bold" style={{ fontFamily: 'var(--font-display-it)' }}>
                {BIZ.name}
              </p>
              <p className="mt-0.5 text-[12px]" style={{ color: 'rgba(246,239,224,0.55)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <p className="text-[12px] max-w-sm" style={{ color: 'rgba(246,239,224,0.4)' }}>
            Sitio de ejemplo preparado por Sitiazo. Fotos y opiniones reales de su ficha de Google Maps.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
