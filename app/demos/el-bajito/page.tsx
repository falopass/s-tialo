import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  paper: '#FAF3E4',
  card: '#FFF9EC',
  ink: '#2A1E14',
  muted: '#6B5B48',
  yellow: '#F2B705',
  red: '#A83A1C',
  line: 'rgba(42,30,20,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-bajito',
  title: 'El Bajito - Almuerzos caseros en Villa Alegre',
  description:
    'Almuerzos caseros en Serafín Gutiérrez 245, Villa Alegre, Región del Maule. Cazuela, pollo con papas, carne con arroz y curanto. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const PIZARRA = [
  { plato: 'Curanto', nota: 'El que más recomienda la gente', precio: '$6.000' },
  { plato: 'Cazuela', nota: 'De la olla, con lo que haya fresco', precio: '$6.000' },
  { plato: 'Pollo con papas', nota: 'Clásico de la casa', precio: '$6.000' },
  { plato: 'Carne con arroz', nota: 'Porción contundente', precio: '$6.000' },
]

const RESENAS = [
  {
    nombre: 'KIRA',
    cuando: 'Hace 4 meses',
    texto:
      'El ambiente es sumamente agradable, la comida es contundente, es caserito todo y está todo delicioso.',
  },
  {
    nombre: 'Gabriel Ramirez',
    cuando: 'Hace un año',
    texto:
      'Comida de gran sabor. La atención fue rápida y eficiente. Gracias don Juan y señora Palmenia, lo que hizo que la experiencia fuera agradable. Recomiendo el curanto.',
  },
  {
    nombre: 'Marian Nicole',
    cuando: 'Hace 3 meses',
    texto:
      'Exquisita comida, porción contundente y sabrosa, además de la excelente atención, totalmente recomendable.',
  },
  {
    nombre: 'Jorge Jeria Vásquez',
    cuando: 'Hace un año',
    texto:
      'Muy buena atención, comes como rey. Muy rico para ir en grupo y solitario, no es caro y es comida casera. Llegar un poco más temprano porque se les acaban los almuerzos rápidos.',
  },
  {
    nombre: 'Arol Arriagada',
    cuando: 'Hace un año',
    texto:
      'Es un lugar pequeño pero muy agradable, comida casera, ideal para pasar a almorzar.',
  },
]

function BoardTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <p
        className={`${display.className} text-xs md:text-sm uppercase tracking-[0.3em] mb-2`}
        style={{ color: C.red }}
      >
        {eyebrow}
      </p>
      <h2
        className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,7vw,4.6rem)]`}
        style={{ color: C.ink }}
      >
        {title}
      </h2>
    </div>
  )
}

/** Marco tipo letrero pintado: borde grueso + sombra dura desplazada. */
function Sign({
  children,
  className = '',
  rotate = 0,
}: {
  children: React.ReactNode
  className?: string
  rotate?: number
}) {
  return (
    <div
      className={className}
      style={{
        border: `3px solid ${C.ink}`,
        boxShadow: `7px 7px 0 ${C.ink}`,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        backgroundColor: C.card,
      }}
    >
      {children}
    </div>
  )
}

export default function ElBajitoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .eb-btn { transition: transform 0.18s ease, box-shadow 0.18s ease; box-shadow: 5px 5px 0 ${C.ink}; }
        .eb-btn:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 ${C.ink}; }
        .eb-btn:active { transform: translate(2px,2px); box-shadow: 2px 2px 0 ${C.ink}; }
        .eb-btn:focus-visible { outline: 3px solid ${C.red}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(250,243,228,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: papel crema + letrero real en marco de cartel ── */}
      <section id="inicio" className="relative pt-[96px] md:pt-[120px] overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-16">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <p
                  className={`${display.className} uppercase tracking-[0.28em] text-xs md:text-sm mb-4`}
                  style={{ color: C.red }}
                >
                  {BIZ.rubro} · {BIZ.city}
                </p>
                <h1
                  className={`${display.className} uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(3rem,11vw,7.5rem)] mb-6`}
                >
                  El almuerzo
                  <br />
                  casero de
                  <br />
                  <span
                    className="inline-block px-3 -ml-1"
                    style={{ backgroundColor: C.yellow }}
                  >
                    Villa Alegre
                  </span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7 font-medium">
                  El Bajito es el restaurante familiar de Serafín Gutiérrez:
                  cazuela, pollo con papas, carne con arroz y el curanto que
                  la gente recomienda. Porciones contundentes y atención de
                  sus dueños.
                </p>
                <div className="flex flex-wrap gap-4 mb-7">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} eb-btn uppercase tracking-wide text-base px-7 py-2.5 tap-44`}
                    style={{ backgroundColor: C.yellow, color: C.ink, border: `3px solid ${C.ink}` }}
                  >
                    Reservar almuerzo
                  </a>
                  <a
                    href="#pizarra"
                    className={`${display.className} eb-btn uppercase tracking-wide text-base px-7 py-2.5 tap-44`}
                    style={{ backgroundColor: C.card, color: C.ink, border: `3px solid ${C.ink}` }}
                  >
                    Ver la pizarra
                  </a>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-sm tap-44"
                  style={{ color: C.ink }}
                >
                  <Stars value={BIZ.rating} color={C.red} />
                  <span>
                    {String(BIZ.rating).replace('.', ',')} en Google · {BIZ.reviews} reseñas
                  </span>
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={140}>
                <Sign rotate={1.5} className="p-2.5">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Letrero pintado a mano de El Bajito Almuerzos sobre el cierre de madera, calle de Villa Alegre"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p
                    className={`${display.className} uppercase text-center tracking-[0.14em] text-sm md:text-base pt-2 pb-1`}
                    style={{ color: C.ink }}
                  >
                    {BIZ.address} · {BIZ.city}
                  </p>
                </Sign>
              </Reveal>
            </div>
          </div>
        </div>
        {/* cinta con los platos del letrero */}
        <div style={{ backgroundColor: C.yellow, borderTop: `3px solid ${C.ink}`, borderBottom: `3px solid ${C.ink}` }}>
          <div
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-2 text-base md:text-xl uppercase tracking-[0.06em]`}
            style={{ color: C.ink }}
            aria-label="Platos del día"
          >
            {['Cazuela', 'Pollo con papas', 'Carne con arroz', 'Curanto', 'Menú del día'].map(
              (p, i) => (
                <span key={p} className="inline-flex items-center">
                  {i > 0 && <span className="mx-3" aria-hidden="true">·</span>}
                  {p}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── La pizarra ── */}
      <section id="pizarra" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <BoardTitle eyebrow="Lo que sale de la olla" title="La pizarra del mediodía" />
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <Sign className="overflow-hidden">
                <div className="px-6 md:px-8 py-5" style={{ backgroundColor: C.yellow, borderBottom: `3px solid ${C.ink}` }}>
                  <p className={`${display.className} uppercase tracking-[0.2em] text-sm md:text-base`}>
                    Almuerzos de lunes a sábado
                  </p>
                </div>
                <ul>
                  {PIZARRA.map((p, i) => (
                    <li
                      key={p.plato}
                      className="px-6 md:px-8 py-5 flex items-baseline gap-3"
                      style={i > 0 ? { borderTop: `2px dashed ${C.line}` } : undefined}
                    >
                      <div className="min-w-0">
                        <p className={`${display.className} uppercase text-2xl md:text-3xl leading-none`}>
                          {p.plato}
                        </p>
                        <p className="text-sm mt-1" style={{ color: C.muted }}>
                          {p.nota}
                        </p>
                      </div>
                      <span
                        className="flex-1 border-b-2 border-dotted -translate-y-1.5 min-w-4"
                        style={{ borderColor: 'rgba(42,30,20,0.35)' }}
                        aria-hidden="true"
                      />
                      <span
                        className={`${display.className} text-xl md:text-2xl whitespace-nowrap`}
                        style={{ color: C.red }}
                      >
                        {p.precio}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="px-6 md:px-8 py-4" style={{ backgroundColor: C.paper, borderTop: `3px solid ${C.ink}` }}>
                  <p className="text-xs md:text-sm font-bold" style={{ color: C.muted }}>
                    Precio de referencia según reseñas de clientes (~$6.000 por plato).
                    La carta del día se confirma por WhatsApp.
                  </p>
                </div>
              </Sign>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} eb-btn inline-block uppercase tracking-wide text-base px-7 py-2.5 mt-7 tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF', border: `3px solid ${C.ink}` }}
              >
                Preguntar qué hay hoy
              </a>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <Reveal delay={80}>
              <Sign rotate={-1.2} className="p-2.5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/curanto.webp`}
                    alt="Curanto servido en El Bajito: mariscos, carne y papas en un plato abundante"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${display.className} uppercase text-center tracking-[0.14em] text-sm pt-2 pb-1`}>
                  El curanto, recomendado por la gente
                </p>
              </Sign>
            </Reveal>
            <Reveal delay={160}>
              <Sign rotate={1} className="p-2.5">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`${IMG}/letrero.webp`}
                    alt="Letrero amarillo de El Bajito en la vereda con el menú del día pintado"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${display.className} uppercase text-center tracking-[0.14em] text-sm pt-2 pb-1`}>
                  El letrero de la vereda
                </p>
              </Sign>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="mb-10 md:mb-12">
              <p
                className={`${display.className} text-xs md:text-sm uppercase tracking-[0.3em] mb-2`}
                style={{ color: C.yellow }}
              >
                Texto real de Google Maps
              </p>
              <h2
                className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,7vw,4.6rem)]`}
                style={{ color: C.paper }}
              >
                Lo que dice la mesa de al lado
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <Stars value={BIZ.rating} color={C.yellow} className="w-5 h-5" />
                <p className="font-bold text-sm md:text-base" style={{ color: C.paper }}>
                  {String(BIZ.rating).replace('.', ',')} de 5 · {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>div]:mb-6 [&>div]:break-inside-avoid">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <figure
                  className="p-6"
                  style={{
                    backgroundColor: C.card,
                    border: `3px solid ${C.paper}`,
                    boxShadow: `6px 6px 0 rgba(250,243,228,0.22)`,
                  }}
                >
                  <Stars value={5} color={C.red} className="w-4 h-4 mb-3" />
                  <blockquote
                    className="text-sm md:text-base leading-relaxed font-semibold mb-4"
                    style={{ color: C.ink }}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption
                    className={`${display.className} uppercase tracking-[0.14em] text-xs`}
                    style={{ color: C.muted }}
                  >
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
              className={`${display.className} inline-block uppercase tracking-wide text-sm underline underline-offset-4 decoration-2 mt-2 tap-44`}
              style={{ color: C.yellow, textDecorationColor: 'rgba(242,183,5,0.4)' }}
            >
              Ver la ficha real en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <BoardTitle eyebrow="Casa de familia" title="Se come como en la casa" />
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="text-base md:text-lg leading-relaxed font-medium mb-5">
                Local pequeño, de madera y atendido por su propia gente:
                en las reseñas aparecen {BIZ.duenos}, a quienes los clientes
                agradecen por nombre. Mesas de madera, la TV prendida y el
                aroma de la olla saliendo a la calle.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
                Solo almuerzos: abren de lunes a sábado de 12:00 a 16:00.
                Como los almuerzos se acaban rápido, la recomendación de
                los clientes es llegar temprano o avisar por WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div
                className="p-5"
                style={{ backgroundColor: C.yellow, border: `3px solid ${C.ink}`, boxShadow: `6px 6px 0 ${C.ink}` }}
              >
                <p className={`${display.className} uppercase text-xl md:text-2xl leading-tight mb-1`}>
                  {BIZ.hours}
                </p>
                <p className="text-sm font-semibold">
                  Para llevar y comer en el local · {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            <Reveal className="col-span-2">
              <Sign className="p-2">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Comedor de El Bajito con mesas de madera, televisión y cocina atendida por su dueña"
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Sign>
            </Reveal>
            <Reveal delay={100}>
              <Sign rotate={-1} className="p-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/interior.webp`}
                    alt="Interior amarillo del restaurante con mesas, cielo de madera y ventana al patio"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Sign>
            </Reveal>
            <Reveal delay={160}>
              <Sign rotate={1} className="p-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/calle.webp`}
                    alt="Vereda con el letrero colgante de El Bajito Almuerzos y la carta del día"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Sign>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.yellow, borderTop: `3px solid ${C.ink}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <BoardTitle eyebrow="Cómo llegar" title="Serafín Gutiérrez 245" />
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6">
              <Reveal>
                <address className="not-italic">
                  <p className={`${display.className} uppercase text-2xl md:text-3xl leading-tight mb-2`}>
                    {BIZ.address}
                  </p>
                  <p className="text-base md:text-lg font-semibold mb-4">
                    {BIZ.city}, {BIZ.region}, Chile
                  </p>
                  <p className="text-sm md:text-base font-semibold" style={{ color: C.red }}>
                    {BIZ.hours}
                  </p>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="inline-block mt-3 font-bold underline underline-offset-2 tap-44"
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} eb-btn uppercase tracking-wide text-base px-7 py-2.5 tap-44`}
                    style={{ backgroundColor: C.ink, color: C.yellow, border: `3px solid ${C.ink}` }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} eb-btn uppercase tracking-wide text-base px-7 py-2.5 tap-44`}
                    style={{ backgroundColor: C.card, color: C.ink, border: `3px solid ${C.ink}` }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={120} className="h-full">
                <Sign className="p-2 h-full">
                  <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden">
                    <LazyMap
                      title={`Mapa: ${BIZ.nameFull}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="absolute inset-0 block w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Sign>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-2xl md:text-3xl mb-2`} style={{ color: C.yellow }}>
            {BIZ.nameFull}
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,243,228,0.72)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,243,228,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(250,243,228,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Las fotos, la dirección, el horario y las reseñas
            son reales; los precios son de referencia según reseñas de clientes.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
