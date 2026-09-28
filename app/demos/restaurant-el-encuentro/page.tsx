import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/familjen-grotesk/normal-400-700.woff2', weight: '400 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

const C = {
  paper: '#F4F1E8',
  soft: '#E9E4D4',
  card: '#FBF9F2',
  green: '#2E4A3C',
  deep: '#17231C',
  mustard: '#D9A441',
  mustardSoft: '#EDD9A0',
  wood: '#7C5230',
  ink: '#1F2B24',
  muted: '#5F6455',
  line: 'rgba(31,43,36,0.28)',
  lineSoft: 'rgba(31,43,36,0.14)',
  lineLight: 'rgba(244,241,232,0.3)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-el-encuentro',
  title: 'Restaurant El Encuentro — Comida casera en Pencahue',
  description: 'Restaurant de comida casera chilena en Pencahue, Región del Maule. Cazuelas, pastel de choclo y la mesa siempre puesta. Reserva por WhatsApp.',
  image: '/demos/restaurant-el-encuentro/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const CARTA = [
  {
    idx: 'C—01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Cazuela humeante servida en plato de greda con cuchara de madera',
    name: 'Cazuela de la casa',
    desc: 'De vacuno o ave según el día, servida humeante en greda, como manda la cocina de campo.',
  },
  {
    idx: 'C—02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Pastel de choclo en fuente de greda con ensalada chilena, pan y un vaso de vino',
    name: 'Pastel de choclo',
    desc: 'El clásico del verano maulino, con ensalada chilena, pan amasado y un vino de la zona.',
  },
  {
    idx: 'C—03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de madera del restaurante con platos apilados y canasto de pan recién hecho',
    name: 'El mesón siempre listo',
    desc: 'Platos apilados y pan recién hecho mientras llega el fondo: aquí nadie espera con el tenedor en la mano.',
  },
  {
    idx: 'C—04',
    src: `${IMG}/ambiente.webp`,
    alt: 'Fachada del restaurante en Pencahue: casa blanca con teja, toldo y mesas al aire libre',
    name: 'La casa y la terraza',
    desc: 'Comedor amplio al interior y mesas al aire libre, a pasos del centro del pueblo.',
  },
]

const DATOS = [
  { k: 'Ubicación', v: 'Pencahue, Maule' },
  { k: 'Cocina', v: 'Casera chilena' },
  { k: 'Reseñas Google', v: `${BIZ.reviews} publicadas` },
  { k: 'Facebook', v: `${BIZ.fbFollowers} seguidores` },
]

const PRECIOS = [
  { name: 'Menú del día', desc: 'Entrada, fondo, ensalada y postre', price: '$7.500' },
  { name: 'Cazuela de vacuno o ave', desc: 'Plato de greda, porción completa', price: '$7.000' },
  { name: 'Pastel de choclo', desc: 'Con ensalada chilena', price: '$8.500' },
  { name: 'Asado al palo (por persona)', desc: 'Fines de semana, previa reserva', price: '$12.000' },
  { name: 'Empanada de horno', desc: 'Unidad, para llevar o en mesa', price: '$2.500' },
  { name: 'Pan amasado y pebre', desc: 'Para la mesa', price: 'Cortesía' },
]

const TESTIMONIALS = [
  {
    text: 'Comida casera de verdad, abundante y a buen precio. La cazuela llega humeante a la mesa.',
    author: 'Cliente de Pencahue',
  },
  {
    text: 'Atención de los propios dueños, rápida y buena onda. El pastel de choclo es de lo mejor de la zona.',
    author: 'Visitante de paso',
  },
  {
    text: 'Paramos por casualidad y volvimos al fin de semana con la familia. Ambiente simple y acogedor.',
    author: 'Comensal de la comuna',
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: 'Horario de almuerzo y tarde' },
  { days: 'Domingo', time: 'Horario de almuerzo' },
]

const FOCUS =
  'focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2'

function Cross({ className = '', color = C.line }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path d="M6 0 V12 M0 6 H12" stroke={color} strokeWidth="1" />
    </svg>
  )
}

function SectionHead({
  num,
  title,
  note,
  light = false,
}: {
  num: string
  title: string
  note?: string
  light?: boolean
}) {
  return (
    <div
      className="relative border-t"
      style={{ borderColor: light ? C.lineLight : C.line }}
    >
      <Cross
        className="absolute -top-[6px] -left-[6px] w-3 h-3"
        color={light ? C.mustard : C.green}
      />
      <div className="flex items-baseline justify-between gap-4 pt-4 pb-10 md:pb-14">
        <p
          className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] font-medium`}
          style={{ color: light ? C.mustardSoft : C.green }}
        >
          <span style={{ color: light ? C.mustard : C.wood }}>{num}</span>
          <span className="mx-2.5" aria-hidden="true">/</span>
          {title}
        </p>
        {note && (
          <p
            className={`${mono.className} hidden md:block text-[10px] uppercase tracking-[0.22em] shrink-0`}
            style={{ color: light ? 'rgba(244,241,232,0.6)' : C.muted }}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  )
}

export default function RestaurantElEncuentroPage() {
  return (
    <div
      className={`${body.className} relative min-h-screen antialiased overflow-x-clip [&>header]:!absolute`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{
          over: 'light',
          bar: 'rgba(244,241,232,0.96)',
          ink: C.ink,
          line: C.lineSoft,
          btnBg: C.mustard,
          btnInk: C.deep,
        }}
      />

      {/* ── Cartel tipográfico ── */}
      <section id="inicio" className="relative overflow-hidden">
        {/* retícula de columnas corrida */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="max-w-6xl mx-auto h-full px-5 md:px-8 grid grid-cols-2 md:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`border-l ${i === 3 ? 'md:border-r' : ''} ${i > 1 ? 'hidden md:block' : ''}`}
                style={{ borderColor: C.lineSoft }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28">
          {/* regla superior de datos */}
          <div
            className="flex items-baseline justify-between gap-4 border-t border-b py-2.5"
            style={{ borderColor: C.line }}
          >
            <span className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.green }}>
              Restaurant — cocina casera
            </span>
            <span className={`${mono.className} hidden md:inline text-[10px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.muted }}>
              Pencahue · Maule · Chile
            </span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} ${FOCUS} flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] shrink-0 hover:text-[#2E4A3C] transition-colors`}
              style={{ color: C.ink }}
            >
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill={C.mustard} aria-hidden="true">
                <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
              </svg>
              {BIZ.reviews} reseñas
            </a>
          </div>

          {/* titular de cartel */}
          <Reveal>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(3rem,11vw,7.5rem)] mt-10 md:mt-14 mb-10 md:mb-14`}
              style={{ color: C.ink }}
            >
              La mesa grande
              <br />
              de{' '}
              <span
                className="inline-block px-3 md:px-4"
                style={{ backgroundColor: C.mustard, color: C.deep }}
              >
                Pencahue
              </span>
            </h1>
          </Reveal>

          {/* texto + foto dentro de la grilla */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 pb-10 md:pb-14">
            <Reveal className="md:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <p
                  className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-5`}
                  style={{ color: C.wood }}
                >
                  {BIZ.rubro} · {BIZ.city}, {BIZ.region}
                </p>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Comida casera chilena en plato de greda: cazuelas, pastel de
                  choclo y pan recién hecho, atendido por sus propios dueños.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ${FOCUS} font-semibold uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 transition-colors hover:bg-[#2E4A3C] hover:text-[#F4F1E8] active:scale-95`}
                    style={{ backgroundColor: C.mustard, color: C.deep }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className={`${display.className} ${FOCUS} font-semibold uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 border transition-colors hover:bg-[#1F2B24] hover:text-[#F4F1E8]`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver la carta
                  </a>
                </div>
                <dl className="border-t mt-8 max-w-md" style={{ borderColor: C.line }}>
                  <div className="flex items-baseline justify-between gap-4 border-b py-3" style={{ borderColor: C.lineSoft }}>
                    <dt className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                      Dirección
                    </dt>
                    <dd className={`${display.className} font-semibold uppercase tracking-[0.04em] text-sm md:text-base text-right`} style={{ color: C.green }}>
                      {BIZ.city}, Maule
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b py-3" style={{ borderColor: C.lineSoft }}>
                    <dt className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                      Ficha de Google
                    </dt>
                    <dd className={`${display.className} font-semibold uppercase tracking-[0.04em] text-sm md:text-base text-right`} style={{ color: C.green }}>
                      {BIZ.reviews} reseñas
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <figure className="border" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Comedor del Restaurant El Encuentro: mesas de madera y cocina abierta al fondo"
                    fill
                    priority
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} flex items-baseline justify-between gap-4 border-t px-4 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em]`}
                  style={{ borderColor: C.line, backgroundColor: C.card, color: C.muted }}
                >
                  <span style={{ color: C.wood }}>F—01</span>
                  <span>El comedor, antes del almuerzo</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* regla inferior de datos */}
          <div
            className={`${mono.className} flex flex-wrap gap-x-8 gap-y-1.5 border-t py-3.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em]`}
            style={{ borderColor: C.line, color: C.muted }}
          >
            <span>{BIZ.address}</span>
            <span className="hidden sm:inline">FB · {BIZ.fbFollowers} seguidores</span>
            <span className="md:ml-auto" style={{ color: C.wood }}>Sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── 01 / La carta ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24">
        <Reveal>
          <SectionHead num="01" title="La carta" note="Platos de muestra" />
        </Reveal>
        <Reveal delay={80}>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border"
            style={{ backgroundColor: C.lineSoft, borderColor: C.line }}
          >
            {CARTA.map((p) => (
              <article key={p.idx} className="group flex flex-col" style={{ backgroundColor: C.card }}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${mono.className} absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2 py-1`}
                    style={{ backgroundColor: 'rgba(23,35,28,0.82)', color: C.mustardSoft }}
                  >
                    {p.idx}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3
                    className={`${display.className} font-semibold uppercase tracking-[0.04em] text-xl md:text-[22px] leading-tight mb-2.5`}
                    style={{ color: C.green }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] mt-5`} style={{ color: C.muted }}>
            Carta de muestra — al publicar van los platos reales de la casa.
          </p>
        </Reveal>
      </section>

      {/* ── 02 / El local ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28">
        <Reveal>
          <SectionHead num="02" title="El local" note="Datos reales de la ficha" />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <Reveal className="md:col-span-5">
            <h2
              className={`${display.className} font-bold uppercase leading-[0.95] tracking-[-0.01em] text-4xl md:text-5xl mb-6`}
              style={{ color: C.ink }}
            >
              Atención
              <br />
              <span style={{ color: C.wood }}>directa</span>,
              <br />
              sin vueltas
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
              En Pencahue los negocios se conocen por el nombre. El
              Encuentro funciona así: comida casera, porciones honestas y
              la mesa puesta para quien llega — vecinos del pueblo, gente
              de paso por el Maule y familias del fin de semana.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Lo que los clientes valoran en sus {BIZ.reviews} reseñas de
              Google es lo de siempre hecho bien: plato abundante, precio
              justo y trato cercano.
            </p>
            <dl className="border-t" style={{ borderColor: C.line }}>
              {DATOS.map((d) => (
                <div
                  key={d.k}
                  className="flex items-baseline justify-between gap-4 border-b py-3.5"
                  style={{ borderColor: C.lineSoft }}
                >
                  <dt className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    {d.k}
                  </dt>
                  <dd className={`${display.className} font-semibold uppercase tracking-[0.04em] text-base md:text-lg text-right`} style={{ color: C.green }}>
                    {d.v}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} ${FOCUS} inline-block mt-6 text-[11px] uppercase tracking-[0.2em] underline underline-offset-4 decoration-2 hover:decoration-[#7C5230] transition-colors`}
              style={{ color: C.wood, textDecorationColor: 'rgba(124,82,48,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <div className="border" style={{ borderColor: C.line }}>
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={i}
                  className="p-6 md:p-8"
                  style={{
                    backgroundColor: i === 1 ? C.soft : C.card,
                    borderTop: i === 0 ? 'none' : `1px solid ${C.lineSoft}`,
                  }}
                >
                  <blockquote
                    className={`${display.className} text-lg md:text-xl leading-snug mb-4`}
                    style={{ color: C.ink }}
                  >
                    “{t.text}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`}
                    style={{ color: C.wood }}
                  >
                    {t.author} · Reseña de ejemplo
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] mt-5`} style={{ color: C.muted }}>
              Textos de muestra — al publicar van las reseñas reales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 03 / Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28">
        <Reveal>
          <SectionHead num="03" title="Precios de referencia" note="Valores de muestra" />
        </Reveal>
        <Reveal delay={80}>
          <div className="border" style={{ borderColor: C.line }}>
            <div
              className={`${mono.className} hidden md:grid grid-cols-[64px_1fr_auto] gap-6 px-6 py-3 border-b text-[10px] uppercase tracking-[0.22em]`}
              style={{ borderColor: C.line, color: C.muted, backgroundColor: C.soft }}
            >
              <span>N°</span>
              <span>Plato</span>
              <span>Precio</span>
            </div>
            {PRECIOS.map((p, i) => (
              <div
                key={p.name}
                className="grid grid-cols-[40px_1fr_auto] gap-4 md:grid-cols-[64px_1fr_auto] md:gap-6 items-baseline px-5 md:px-6 py-4 border-b last:border-b-0"
                style={{ borderColor: C.lineSoft, backgroundColor: i % 2 ? C.soft : C.card }}
              >
                <span className={`${mono.className} text-[10px] md:text-xs`} style={{ color: C.wood }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className={`${display.className} font-semibold uppercase tracking-[0.03em] text-base md:text-lg leading-tight`} style={{ color: C.ink }}>
                    {p.name}
                  </h3>
                  {p.desc && (
                    <p className="text-xs md:text-sm mt-1" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  )}
                </div>
                <span className={`${display.className} font-semibold text-base md:text-xl whitespace-nowrap`} style={{ color: C.green }}>
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div
            className={`${mono.className} flex items-start gap-3 border mt-5 px-5 py-4 text-[10px] md:text-[11px] uppercase tracking-[0.18em] leading-relaxed`}
            style={{ borderColor: C.mustard, color: C.wood, backgroundColor: 'rgba(217,164,65,0.08)' }}
          >
            <span aria-hidden="true" className="shrink-0 mt-0.5">◆</span>
            <p>
              Precios de muestra — los valores reales se confirman por
              WhatsApp y van en la carta al publicar el sitio.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Banda reserva ── */}
      <div className="mt-20 md:mt-28" style={{ backgroundColor: C.mustard }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p
              className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.28em] mb-3`}
              style={{ color: C.deep }}
            >
              Reserva directa — WhatsApp
            </p>
            <p
              className={`${display.className} font-bold uppercase leading-[0.95] tracking-[-0.01em] text-3xl md:text-5xl`}
              style={{ color: C.deep }}
            >
              ¿Almorzamos? Reserva tu mesa
            </p>
          </div>
          <a
            href={WA_LINK_RESERVA}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} ${FOCUS} group self-start md:self-auto shrink-0 inline-flex items-center gap-3 font-semibold uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 transition-colors hover:bg-[#2E4A3C] active:scale-95`}
            style={{ backgroundColor: C.deep, color: C.paper }}
          >
            Reservar mesa
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* ── 04 / Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead num="04" title="Contacto y ubicación" note="Respuesta el mismo día" light />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <h2
                className={`${display.className} font-bold uppercase leading-[0.95] tracking-[-0.01em] text-4xl md:text-5xl mb-6`}
                style={{ color: C.paper }}
              >
                Reserva tu
                <br />
                <span style={{ color: C.mustard }}>mesa</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(244,241,232,0.72)' }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <dl className="border-t mb-8" style={{ borderColor: C.lineLight }}>
                {HORAS.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-4 border-b py-3" style={{ borderColor: 'rgba(244,241,232,0.14)' }}>
                    <dt className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(244,241,232,0.55)' }}>
                      {h.days}
                    </dt>
                    <dd className="text-sm md:text-base text-right" style={{ color: C.paper }}>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] leading-relaxed mb-8`} style={{ color: 'rgba(244,241,232,0.5)' }}>
                Horario referencial — al publicar van los horarios reales.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${FOCUS} font-semibold uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 transition-colors hover:bg-[#F4F1E8] active:scale-95`}
                  style={{ backgroundColor: C.mustard, color: C.deep }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${FOCUS} font-semibold uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 border transition-colors hover:bg-white/10`}
                  style={{ borderColor: 'rgba(244,241,232,0.4)', color: C.paper }}
                >
                  Cómo llegar →
                </a>
              </div>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ${FOCUS} inline-block mt-6 text-[11px] uppercase tracking-[0.2em] underline underline-offset-4 decoration-2 hover:text-[#F4F1E8] transition-colors`}
                style={{ color: 'rgba(244,241,232,0.6)', textDecorationColor: 'rgba(244,241,232,0.25)' }}
              >
                Facebook · {BIZ.fbFollowers} seguidores →
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="border min-h-[320px] h-full" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(244,241,232,0.04)' }}>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px] grayscale-[0.3]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep }}>
        <div className="border-t" style={{ borderColor: 'rgba(244,241,232,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
            <div>
              <p className={`${display.className} font-bold uppercase tracking-[0.04em] text-2xl mb-2`} style={{ color: C.paper }}>
                {BIZ.name}
              </p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.18em] leading-relaxed`} style={{ color: 'rgba(244,241,232,0.5)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,241,232,0.6)' }} aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`${FOCUS} hover:text-white transition-colors`}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t" style={{ borderColor: 'rgba(244,241,232,0.12)' }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 md:pb-8 text-xs leading-relaxed" style={{ color: 'rgba(244,241,232,0.75)' }}>
              Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-semibold underline underline-offset-2 hover:text-[#D9A441]`} style={{ color: C.paper }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name} — así se vería tu sitio. Carta, precios y
              horarios son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-semibold underline underline-offset-2 hover:text-[#D9A441]`} style={{ color: C.mustard }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
