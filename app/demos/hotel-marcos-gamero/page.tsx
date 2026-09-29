import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
  variable: '--font-display',
})
const displayIt = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' }],
  variable: '--font-display-it',
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})

const C = {
  ivory: '#F7F3E9',
  forest: '#13392B',
  forestDeep: '#0B241A',
  brass: '#B08D4C',
  brassSoft: '#D9C08A',
  ink: '#20241F',
  muted: '#5F6A62',
  line: 'rgba(19,57,43,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hotel-marcos-gamero',
  title: 'Hotel Marcos Gamero — Hotel boutique en el centro de Talca',
  description:
    'Hotel boutique 4 estrellas en 1 Oriente 1070, Talca. Habitaciones matrimoniales y familiares, restaurante, Aldo\'s Bar y estacionamiento interior. 4,6 estrellas en Google.',
  image: '/demos/hotel-marcos-gamero/fachada-toldo.webp',
})

const NAV_LINKS = [
  { label: 'El hotel', href: '#hotel' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: "Aldo's Bar", href: '#bar' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SELLOS = [
  `${BIZ.rating} en Google`,
  `${BIZ.reviews} reseñas`,
  'Desayuno incluido',
  'Estacionamiento interior',
  'Restaurante y bar',
]

const HABITACIONES = [
  {
    num: '201',
    src: `${IMG}/habitacion-king.webp`,
    alt: 'Habitación matrimonial king con ropa de cama blanca, espejo dorado y lámpara de pie',
    nombre: 'Matrimonial King',
    desc: 'Cama king, luz de día y el silencio de una casa antigua remodelada.',
  },
  {
    num: '204',
    src: `${IMG}/habitacion-doble.webp`,
    alt: 'Habitación familiar con dos camas gemelas, ventanales y aire acondicionado',
    nombre: 'Familiar doble',
    desc: 'Dos camas para compartir sin apreturas: la favorita de las familias.',
  },
  {
    num: '301',
    src: `${IMG}/banio-verde.webp`,
    alt: 'Baño revestido en azulejo verde con ducha vidriada y espejo redondo iluminado',
    nombre: 'Super King con terraza',
    desc: 'La terraza propia con vista a los tejados del centro de Talca.',
  },
]

const RESENAS = [
  {
    texto:
      'Grata sorpresa con la remodelación: la han actualizado, es como un museo actualizado. La atención espectacular.',
    autor: 'luisvT8324CO · Tripadvisor',
  },
  {
    texto:
      'Recomiendo un trago de autor del bartender Benjamín, de nombre “Atardecer en Marcos Gamero”: un lujo. Y el estacionamiento seguro dentro del hotel.',
    autor: 'Migue · Google',
  },
  {
    texto:
      'Uno de los mejores que he visitado: buen servicio, buena atención, rico desayuno, todo limpio. Muy recomendable.',
    autor: 'María Rivas · Google',
  },
]

function LlaveTag({ num, className = '' }: { num: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 border ${className}`}
      style={{ borderColor: C.brass, color: C.brass, backgroundColor: 'rgba(11,36,26,0.55)' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12 h9 M18 12 v4 M15 12 v3" />
      </svg>
      <span className="font-mono text-sm font-semibold tracking-[0.2em]">{num}</span>
    </span>
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-3 flex items-center gap-3"
      style={{ color: light ? C.brassSoft : C.brass }}
    >
      <span className="h-px w-8" style={{ backgroundColor: light ? C.brassSoft : C.brass }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function HotelMarcosGameroPage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${displayIt.variable} ${body.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.ivory, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} font-semibold tracking-wide`}>
            Hotel Marcos Gamero
          </span>
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: C.ivory,
          ink: C.forest,
          line: C.line,
          btnBg: C.forest,
          btnInk: C.ivory,
        }}
      />

      {/* ── Portada: la fachada del toldo verde ── */}
      <header id="inicio" className="relative">
        <div className="relative min-h-[100dvh] flex items-end" style={{ backgroundColor: C.forestDeep }}>
          <Image
            src={`${IMG}/fachada-toldo.webp`}
            alt="Entrada del Hotel Marcos Gamero: toldo verde, fachada blanca con enredaderas y una pasajera llegando con su maleta"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(11,36,26,0.3) 0%, rgba(11,36,26,0.45) 50%, rgba(11,36,26,0.88) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-32">
            <Reveal>
              <p
                className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.32em] mb-4"
                style={{ color: C.brassSoft }}
              >
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
              <h1
                className={`${display.className} font-semibold leading-[0.98] tracking-[-0.01em] text-[clamp(3rem,11vw,7.5rem)] max-w-5xl`}
                style={{ color: C.ivory }}
              >
                Hotel Marcos Gamero
              </h1>
              <p
                className={`${displayIt.className} text-xl md:text-3xl mt-4 max-w-2xl leading-snug`}
                style={{ color: 'rgba(247,243,233,0.92)' }}
              >
                la casa de siempre del centro de Talca, remodelada como un museo
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={TEL_LINK}
                  className="text-sm md:text-base font-semibold px-7 py-3 transition-all hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D4C] tap-44"
                  style={{ backgroundColor: C.brass, color: C.forestDeep }}
                >
                  Reservar: {BIZ.phoneDisplay}
                </a>
                <a
                  href="#habitaciones"
                  className="text-sm md:text-base font-semibold px-7 py-3 border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F3E9] tap-44"
                  style={{ borderColor: 'rgba(247,243,233,0.6)', color: C.ivory }}
                >
                  Ver habitaciones
                </a>
                <span
                  className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 ml-1"
                  style={{ color: C.ivory }}
                >
                  <Stars value={BIZ.rating} color={C.brassSoft} />
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ── Franja de sellos ── */}
      <section style={{ backgroundColor: C.forest }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-4">
            {SELLOS.map((s) => (
              <li
                key={s}
                className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: C.brassSoft }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El hotel: editorial con la chimenea y la recepción ── */}
      <section id="hotel" className="scroll-mt-8 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/3]" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/living-chimenea.webp`}
                  alt="Living del hotel con chimenea de mármol, escalera de fierro negro, cuadros antiguos y un arreglo de rosas"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-3 md:-right-6 w-36 md:w-48 overflow-hidden border-4"
                style={{ borderColor: C.ivory }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`${IMG}/living-detalle.webp`}
                    alt="Detalle del living: sillones blancos, lámpara encendida y cuadro clásico bajo la escalera"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="lg:pt-4">
              <Kicker>El hotel</Kicker>
              <h2
                className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.0] mb-6`}
                style={{ color: C.forest }}
              >
                Un museo que se
                <br />
                puede habitar
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.muted }}>
                En {BIZ.address}, a pasos de la Plaza de Armas, el Marcos Gamero
                guarda la arquitectura de la Talca antigua — escalera de fierro,
                chimenea de mármol, cuadros de caballería — con habitaciones
                blancas recién remodeladas.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
                Los {BIZ.reviews} huéspedes que lo reseñan en Google le dan{' '}
                {BIZ.rating} estrellas y repiten lo mismo: la atención de
                recepción, el desayuno y el bar de abajo. Desde su sitio se
                reserva directo, sin intermediarios.
              </p>
              <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: C.line }}>
                {[
                  ['4,6', 'nota en Google'],
                  ['4★', 'hotel boutique'],
                  ['N°1', 'cuadra del centro'],
                  ['24 h', 'de Talca a Santiago en bus'],
                ].map(([v, k]) => (
                  <div key={k} className="p-5" style={{ backgroundColor: C.ivory }}>
                    <p className={`${display.className} font-semibold text-3xl md:text-4xl`} style={{ color: C.forest }}>
                      {v}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-semibold mt-1" style={{ color: C.muted }}>
                      {k}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Habitaciones: tarjetas de llave ── */}
      <section id="habitaciones" className="scroll-mt-8" style={{ backgroundColor: C.forestDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Kicker light>Habitaciones</Kicker>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
              <h2
                className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.0]`}
                style={{ color: C.ivory }}
              >
                Pida su llave
                <br />
                en recepción
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(247,243,233,0.75)' }}>
                Matrimoniales king y super king con terraza, y familiares dobles
                y cuádruples. Todas con desayuno incluido y baño propio.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {HABITACIONES.map((h, i) => (
              <Reveal key={h.num} delay={i * 110}>
                <article
                  className="group border overflow-hidden"
                  style={{ borderColor: 'rgba(217,192,138,0.35)', backgroundColor: C.forest }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={h.src}
                      alt={h.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <LlaveTag num={h.num} className="absolute top-3 left-3" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3
                      className={`${display.className} font-semibold text-2xl md:text-3xl mb-2`}
                      style={{ color: C.ivory }}
                    >
                      {h.nombre}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(247,243,233,0.75)' }}>
                      {h.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-xs md:text-sm" style={{ color: 'rgba(247,243,233,0.65)' }}>
              Tipos publicados en su sitio oficial: Matrimoniales Queen, King y
              Super King con terraza · Familiar doble · Familiar cuádruple.
              Tarifas y disponibilidad al {BIZ.phoneDisplay}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Terraza + desayuno: franja doble ── */}
      <section className="grid md:grid-cols-2">
        <figure className="relative min-h-[300px] md:min-h-[420px]">
          <Image
            src={`${IMG}/terraza.webp`}
            alt="Terraza del hotel con mesas y sillas de fierro negro mirando los edificios del centro de Talca"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption
            className="absolute bottom-0 inset-x-0 text-xs md:text-sm px-5 py-3"
            style={{ backgroundColor: 'rgba(11,36,26,0.82)', color: C.ivory }}
          >
            La terraza sobre el 1 Oriente: el desayuno se sirve mirando la ciudad.
          </figcaption>
        </figure>
        <figure className="relative min-h-[300px] md:min-h-[420px]">
          <Image
            src={`${IMG}/desayuno.webp`}
            alt="Desayuno del hotel: tetera sirviendo té en taza blanca junto a kuchen de hojaldre"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption
            className="absolute bottom-0 inset-x-0 text-xs md:text-sm px-5 py-3"
            style={{ backgroundColor: 'rgba(11,36,26,0.82)', color: C.ivory }}
          >
            Desayuno incluido en todas las tarifas.
          </figcaption>
        </figure>
      </section>

      {/* ── Aldo's Bar ── */}
      <section id="bar" className="scroll-mt-8" style={{ backgroundColor: '#141210' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <Kicker light>Planta baja</Kicker>
              <h2
                className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.0] mb-6`}
                style={{ color: C.ivory }}
              >
                Aldo&rsquo;s Bar:
                <br />
                <em className={`${displayIt.className} font-medium`} style={{ color: C.brassSoft }}>
                  el trago con nombre propio
                </em>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(247,243,233,0.8)' }}>
                El restaurante y bar del hotel tiene coctelería de autor. Los
                huéspedes recomiendan por nombre el «Atardecer en Marcos
                Gamero», la firma de la casa.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Restaurante abierto a público, no solo huéspedes',
                  'Coctelería de autor en Aldo’s Bar',
                  'Salmón con papas duquesa: el plato que repiten en reseñas',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(247,243,233,0.85)' }}>
                    <span className="mt-1.5 w-2 h-2 rotate-45 shrink-0" style={{ backgroundColor: C.brass }} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={TEL_LINK}
                className="inline-block text-sm md:text-base font-semibold px-7 py-3 border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D4C] tap-44"
                style={{ borderColor: C.brass, color: C.brassSoft }}
              >
                Reservar mesa: {BIZ.phoneDisplay}
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative overflow-hidden" style={{ border: `1px solid rgba(217,192,138,0.4)` }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/bar-aldos.webp`}
                    alt="Brindis en Aldo's Bar: varias copas de vino y tragos de colores chocando sobre la mesa"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p
                  className="absolute bottom-0 inset-x-0 text-[11px] uppercase tracking-[0.22em] font-semibold px-4 py-3"
                  style={{ backgroundColor: 'rgba(20,18,16,0.85)', color: C.brassSoft }}
                >
                  Brindis en Aldo’s Bar · planta baja del hotel
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Kicker>Palabra de huésped</Kicker>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-10">
            <h2
              className={`${display.className} font-semibold text-4xl md:text-6xl leading-none`}
              style={{ color: C.forest }}
            >
              Lo que dicen
            </h2>
            <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: C.muted }}>
              <Stars value={BIZ.rating} color={C.brass} />
              {BIZ.rating} de {BIZ.reviews} reseñas en Google
            </span>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {RESENAS.map((r, i) => (
            <Reveal key={r.autor} delay={i * 100}>
              <figure className="h-full border-t-2 pt-5" style={{ borderColor: C.brass }}>
                <blockquote
                  className={`${displayIt.className} text-lg md:text-xl leading-snug mb-4`}
                  style={{ color: C.ink }}
                >
                  “{r.texto}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: C.muted }}>
                  {r.autor}
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
            className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#13392B]"
            style={{ color: C.forest, textDecorationColor: C.brass }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Contacto: recepción ── */}
      <section id="contacto" className="scroll-mt-8" style={{ backgroundColor: C.forest }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Kicker light>Recepción</Kicker>
              <h2
                className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.0] mb-6`}
                style={{ color: C.ivory }}
              >
                1 Oriente 1070,
                <br />
                centro de Talca
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(247,243,233,0.8)' }}>
                A pasos de la Plaza de Armas y del casino, con estacionamiento
                interior. Las reservas se toman por teléfono, por correo o
                desde su sitio web.
              </p>
              <dl className="divide-y mb-8" style={{ borderColor: 'rgba(247,243,233,0.2)' }}>
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Reservas', BIZ.email],
                  ['Google', `${BIZ.rating} · ${BIZ.reviews} reseñas`],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: 'rgba(247,243,233,0.2)' }}>
                    <dt className="uppercase tracking-[0.16em] text-[11px] font-semibold" style={{ color: 'rgba(247,243,233,0.7)' }}>
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-medium text-right" style={{ color: C.ivory }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-3">
                <a
                  href={TEL_LINK}
                  className="text-sm md:text-base font-semibold px-7 py-3 transition-all hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D4C] tap-44"
                  style={{ backgroundColor: C.brass, color: C.forestDeep }}
                >
                  Llamar al hotel
                </a>
                <a
                  href={BIZ.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-semibold px-7 py-3 border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F3E9] tap-44"
                  style={{ borderColor: 'rgba(247,243,233,0.55)', color: C.ivory }}
                >
                  hotelmarcosgamero.cl →
                </a>
              </div>
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs" style={{ color: 'rgba(247,243,233,0.7)' }}>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  Instagram
                </a>
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  Facebook
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  Google Maps
                </a>
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="border min-h-[320px] h-full overflow-hidden"
                style={{ borderColor: 'rgba(217,192,138,0.4)', backgroundColor: C.forestDeep }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.forestDeep, color: C.ivory }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-10 w-10 object-contain" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-semibold text-xl leading-none`}>{BIZ.name}</p>
              <address className="not-italic text-xs mt-1" style={{ color: 'rgba(247,243,233,0.75)' }}>
                {BIZ.address}, {BIZ.city} · <a href={TEL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[24rem]" style={{ color: 'rgba(247,243,233,0.6)' }}>
            Mockup de Sitiazo: datos y fotos reales del hotel; textos de muestra
            para mostrar el sitio.
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.brass} fg={C.forestDeep} />
    </div>
  )
}
