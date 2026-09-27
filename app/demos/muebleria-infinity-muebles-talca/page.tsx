import type { Metadata } from 'next'
import Image from 'next/image'
import { Space_Grotesk, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_MEDIDA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const C = {
  naranja: '#E4572E',
  naranjaDark: '#C2431F',
  concreto: '#3A3F44',
  concretoDeep: '#2B2F33',
  arena: '#EDE6DA',
  arenaSoft: '#F6F1E8',
  blanco: '#FFFFFF',
  ink: '#24282B',
  muted: '#6E6A62',
  line: 'rgba(36,40,43,0.14)',
  lineLight: 'rgba(237,230,218,0.18)',
}

export const metadata: Metadata = {
  title: 'Infinity Muebles — Carpintería y muebles a medida en Talca',
  description:
    'Mueblería y carpintería en Once Sur, Talca. Muebles a medida, cocinas, closets y racks. Cotiza por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'El taller', href: '#taller' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const TRABAJOS = [
  {
    src: `${IMG}/detalle2.webp`,
    num: '01',
    tag: 'a medida',
    name: 'Muebles para el hogar',
    desc: 'Racks de TV, mesas, estanterías y repisas hechos a la medida de tu espacio, no al revés.',
    alt: 'Rack de TV y repisas de melamina fabricados a medida en el taller',
  },
  {
    src: `${IMG}/detalle1.webp`,
    num: '02',
    tag: 'carpintería fina',
    name: 'Cocinas y closets',
    desc: 'Muebles de cocina, closets y organizadores con terminaciones prolijas y herrajes firmes.',
    alt: 'Mueble de cocina y closet de melamina con terminaciones prolijas',
  },
  {
    src: `${IMG}/detalle3.webp`,
    num: '03',
    tag: 'obra gruesa y fina',
    name: 'Proyectos en madera',
    desc: 'Trabajos en madera y melamina para casas y locales: cotizamos según medida y material.',
    alt: 'Proyecto de carpintería en madera para casa o local comercial',
  },
]

const PRECIOS = [
  { name: 'Rack de TV en melamina', desc: 'Según medidas y diseño', price: 'desde $180.000' },
  { name: 'Closet a medida', desc: 'Por metro lineal, según interior', price: 'desde $320.000' },
  { name: 'Mueble de cocina básico', desc: 'Cubiertas y herrajes aparte', price: 'desde $450.000' },
  { name: 'Repisas y estanterías', desc: 'En madera o melamina', price: 'desde $60.000' },
  { name: 'Visita y medición a domicilio', desc: 'Dentro de Talca', price: 'se descuenta del trabajo' },
]

const PROCESO = [
  { num: '01', title: 'Cotiza por WhatsApp', desc: 'Mándanos la idea, una foto o las medidas que tengas. Respondemos el mismo día.' },
  { num: '02', title: 'Medición a domicilio', desc: 'Vamos a tu casa en Talca a medir bien y ver el espacio antes de fabricar.' },
  { num: '03', title: 'Fabricación en taller', desc: 'El mueble se hace en taller propio, con material elegido contigo.' },
  { num: '04', title: 'Instalación y entrega', desc: 'Instalamos y dejamos todo listo: obra terminada y prolija.' },
]

const TESTIMONIALS = [
  {
    text: 'El closet quedó impecable, con las medidas justas para el espacio que teníamos. Puntual y prolijo.',
    author: 'Cliente de Once Sur',
  },
  {
    text: 'Cotizamos por WhatsApp, vinieron a medir y en la fecha acordada estaba instalado. Sin vueltas.',
    author: 'Vecina del sector oriente',
  },
]

function Chevron({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="square" aria-hidden="true">
      <path d="M4 5 L12 12 L4 19" />
      <path d="M12 5 L20 12 L12 19" />
    </svg>
  )
}

function Stripe({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="h-[10px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(${flip ? 45 : -45}deg, ${C.naranja} 0 14px, ${C.concreto} 14px 28px)`,
      }}
      aria-hidden="true"
    />
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: light ? C.arena : C.naranja }}
    >
      <Chevron className="w-[14px] h-[14px]" color={C.naranja} />
      {children}
    </p>
  )
}

export default function InfinityMueblesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.arenaSoft, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold uppercase tracking-wide`}
        theme={{
          over: 'dark',
          bar: 'rgba(237,230,218,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.naranja,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.concretoDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Taller de Infinity Muebles: repisas con herramientas, madera y materiales de carpintería"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(200deg, rgba(43,47,51,0.45) 0%, rgba(43,47,51,0.25) 40%, rgba(43,47,51,0.9) 100%)',
          }}
        />
        {/* líneas de velocidad: energía del arquetipo diagonal */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-55deg, transparent 0 26px, rgba(237,230,218,0.05) 26px 27px)',
          }}
          aria-hidden="true"
        />
        {/* líneas de movimiento */}
        <div className="absolute top-28 right-6 md:right-14 flex flex-col items-end gap-1" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <Chevron key={i} className="w-8 h-8 md:w-11 md:h-11" color={`rgba(228,87,46,${0.45 + i * 0.28})`} />
          ))}
        </div>
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 left-5 md:left-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EDE6DA]"
              style={{ backgroundColor: C.arena, color: C.concretoDeep, clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.naranja} stroke={C.naranja} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-36">
          <Reveal>
            <Eyebrow light>Carpintería · Mueblería · Talca</Eyebrow>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.98] tracking-[-0.015em] text-[clamp(2.6rem,9vw,6.2rem)] mb-7`}
              style={{ color: C.blanco }}
            >
              Muebles a medida,
              <br />
              <span
                className="inline-block px-3 md:px-4 -ml-1 mt-2"
                style={{
                  backgroundColor: C.naranja,
                  transform: 'skewX(-8deg)',
                  color: C.blanco,
                }}
              >
                hechos para durar
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-medium" style={{ color: 'rgba(237,230,218,0.9)' }}>
              Carpintería y mueblería en Once Sur, Talca. Cotiza por
              WhatsApp, medimos en tu casa e instalamos con
              terminación prolija.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-8 py-4 transition-transform active:scale-95 hover:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EDE6DA]`}
                style={{ backgroundColor: C.naranja, color: C.blanco, clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#trabajos"
                className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-8 py-4 border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EDE6DA]`}
                style={{ borderColor: 'rgba(237,230,218,0.55)', color: C.arena, clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}
              >
                Ver trabajos
              </a>
            </div>
          </Reveal>
        </div>
        {/* corte diagonal al final del hero */}
        <div
          className="relative h-[70px] md:h-[100px]"
          style={{ backgroundColor: C.arenaSoft, clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── Trabajos ── */}
      <section id="trabajos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Lo que hacemos</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-12 md:mb-16">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl leading-[1.0]`} style={{ color: C.concretoDeep }}>
              Del taller
              <br />
              <span style={{ color: C.naranja }}>a tu casa</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Estos trabajos son de muestra: al publicar van los
              proyectos y fotos reales de la mueblería.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TRABAJOS.map((p, i) => (
            <li key={p.name} className="group h-full">
              <Reveal delay={i * 100} className="h-full">
                <div className="relative mb-[-18px]">
                  {/* bloque naranja detrás, inclinado al revés */}
                  <div
                    className="absolute inset-0 translate-x-3 translate-y-3 rotate-[2deg]"
                    style={{ backgroundColor: C.naranja }}
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rotate-[-2deg]" style={{ boxShadow: '0 16px 40px rgba(43,47,51,0.28)' }}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <span
                      className={`${display.className} absolute top-4 left-4 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5`}
                      style={{ backgroundColor: C.concretoDeep, color: C.arena, clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
                    >
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div
                  className="relative px-5 md:px-6 pt-10 pb-6 md:pb-7 border-t-4"
                  style={{ backgroundColor: C.blanco, borderColor: C.naranja }}
                >
                  <span
                    className={`${display.className} absolute -top-8 right-5 text-6xl font-bold leading-none select-none`}
                    style={{ color: 'transparent', WebkitTextStroke: `1.5px ${C.naranja}` }}
                    aria-hidden="true"
                  >
                    {p.num}
                  </span>
                  <h3 className={`${display.className} font-bold uppercase text-xl md:text-2xl mb-2 flex items-center gap-2`} style={{ color: C.concretoDeep }}>
                    {p.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                  <Chevron className="w-4 h-4 mt-4 transition-transform duration-300 group-hover:translate-x-2" color={C.naranja} />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <Stripe />

      {/* ── El taller / sobre el negocio ── */}
      <section id="taller" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div
                className="absolute inset-0 -translate-x-4 translate-y-4 rotate-[1.5deg]"
                style={{ backgroundColor: C.concreto }}
                aria-hidden="true"
              />
              <div
                className="relative aspect-[4/3] rotate-[-1.5deg] overflow-hidden"
                style={{ boxShadow: '0 20px 50px rgba(43,47,51,0.3)' }}
              >
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Local de Infinity Muebles abierto a la calle en Once Sur, Talca"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El taller</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.concretoDeep }}>
              Carpintería de barrio,
              <br />
              <span style={{ color: C.naranja }}>trato directo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              {BIZ.legal} trabaja en {BIZ.address}, {BIZ.city}. Acá
              hablas directo con quien fabrica: sin intermediarios y
              con la medida exacta de tu espacio.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                'Atención directa con el taller, por WhatsApp',
                'Medición a domicilio dentro de Talca',
                'Obras terminadas y prolijas, instaladas en la fecha acordada',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base font-medium" style={{ color: C.ink }}>
                  <Chevron className="w-4 h-4 shrink-0" color={C.naranja} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4572E]">
                <p className={`${display.className} font-bold text-3xl md:text-4xl leading-none`} style={{ color: C.concretoDeep }}>
                  {BIZ.reviews}
                </p>
                <p className="text-xs uppercase tracking-[0.16em] font-semibold mt-1.5 underline underline-offset-4 decoration-2" style={{ color: C.naranja, textDecorationColor: 'rgba(228,87,46,0.35)' }}>
                  reseñas en Google →
                </p>
              </a>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4572E]">
                <p className={`${display.className} font-bold text-3xl md:text-4xl leading-none`} style={{ color: C.concretoDeep }}>
                  4.050
                </p>
                <p className="text-xs uppercase tracking-[0.16em] font-semibold mt-1.5 underline underline-offset-4 decoration-2" style={{ color: C.naranja, textDecorationColor: 'rgba(228,87,46,0.35)' }}>
                  seguidores en Instagram →
                </p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones (muestra) ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-bold uppercase text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.concretoDeep }}>
                Lo que valoran
                <br />
                los clientes
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                {BIZ.legal} acumula {BIZ.reviews} reseñas en su ficha de
                Google. Estos textos son de muestra: al publicar van las
                reseñas reales.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4572E]"
                style={{ color: C.naranja, textDecorationColor: 'rgba(228,87,46,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="relative p-6 md:p-7 border-l-4"
                    style={{ backgroundColor: C.blanco, borderColor: C.naranja, boxShadow: '8px 8px 0 rgba(58,63,68,0.1)' }}
                  >
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.naranja }}>
                        {t.author} · Reseña de ejemplo
                      </span>
                      <Chevron className="w-4 h-4 shrink-0" color={C.concreto} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proceso (diagonal sobre hormigón) ── */}
      <section id="proceso" className="scroll-mt-20 relative" style={{ backgroundColor: C.concreto }}>
        {/* cuña con el color de la sección anterior: corte diagonal */}
        <div
          className="h-[60px] md:h-[90px]"
          style={{ backgroundColor: C.arenaSoft, clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo trabajamos</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl leading-[1.0] mb-12 md:mb-16`} style={{ color: C.arena }}>
              De la idea a la
              <br />
              <span style={{ color: C.naranja }}>instalación</span>
            </h2>
          </Reveal>
          <ol className="grid md:grid-cols-4 gap-8 md:gap-6">
            {PROCESO.map((s, i) => (
              <li key={s.num} className="relative border-t-2 pt-6" style={{ borderColor: C.naranja }}>
                <Reveal delay={i * 110}>
                  <span
                    className={`${display.className} block text-5xl md:text-6xl font-bold leading-none mb-4 select-none`}
                    style={{ color: 'transparent', WebkitTextStroke: `1.5px ${C.arena}` }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </span>
                  <h3 className={`${display.className} font-bold uppercase text-base md:text-lg mb-2 flex items-center gap-2`} style={{ color: C.arena }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(237,230,218,0.72)' }}>
                    {s.desc}
                  </p>
                  {i < PROCESO.length - 1 && (
                    <Chevron
                      className="hidden md:block absolute top-7 -right-4 w-6 h-6"
                      color={C.naranja}
                    />
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 relative" style={{ backgroundColor: C.arena }}>
        {/* cuña con el color de la sección anterior, pendiente inversa */}
        <div
          className="h-[60px] md:h-[90px]"
          style={{ backgroundColor: C.concreto, clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <Reveal>
            <Eyebrow>Valores de muestra</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.concretoDeep }}>
                Precios de
                <br />
                <span style={{ color: C.naranja }}>referencia</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Valores de muestra: el precio real se cotiza según
                medidas, material y terminación. Cotiza por WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul style={{ backgroundColor: C.blanco, boxShadow: '10px 10px 0 rgba(58,63,68,0.12)' }}>
              {PRECIOS.map((p, i) => (
                <li
                  key={p.name}
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 md:px-8 py-5 border-b last:border-b-0 transition-colors hover:bg-[#FDFBF6]"
                  style={{ borderColor: C.line }}
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className={`${display.className} text-xs font-bold shrink-0`} style={{ color: C.naranja }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className={`${display.className} font-semibold text-base md:text-lg`} style={{ color: C.concretoDeep }}>
                        {p.name}
                      </p>
                      {p.desc && (
                        <p className="text-xs md:text-sm" style={{ color: C.muted }}>{p.desc}</p>
                      )}
                    </div>
                  </div>
                  <p className={`${display.className} font-bold text-base md:text-lg whitespace-nowrap flex items-center gap-3`} style={{ color: C.naranja }}>
                    <Chevron className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" color={C.naranja} />
                    {p.price}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xs leading-relaxed mt-6 max-w-xl" style={{ color: C.muted }}>
              Lista de muestra para el ejemplo. Los valores reales de
              Infinity Muebles se confirman por WhatsApp según el
              proyecto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.concretoDeep }}>
              Once Sur,
              <br />
              <span style={{ color: C.naranja }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-medium" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-3 mb-9">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                <Chevron className="w-4 h-4 shrink-0" color={C.naranja} />
                <span>WhatsApp: <strong className="font-bold">{BIZ.phoneDisplay}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                <Chevron className="w-4 h-4 shrink-0" color={C.naranja} />
                <span>
                  Instagram:{' '}
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4572E]" style={{ color: C.naranja, textDecorationColor: 'rgba(228,87,46,0.35)' }}>
                    {BIZ.instagramUser}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <Chevron className="w-4 h-4 shrink-0" color={C.naranja} />
                Horario referencial: al publicar van los horarios reales del taller.
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm px-7 py-3.5 transition-transform active:scale-95 hover:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B2F33]`}
                style={{ backgroundColor: C.naranja, color: C.blanco, clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm px-7 py-3.5 border-2 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B2F33]`}
                style={{ borderColor: C.concreto, color: C.concretoDeep, clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="relative min-h-[320px] h-full overflow-hidden rotate-[1deg]"
              style={{ border: `4px solid ${C.concreto}`, boxShadow: '12px 12px 0 rgba(228,87,46,0.85)' }}
            >
              <iframe
                title={`Mapa: ${BIZ.legal}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Stripe flip />

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.concretoDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.16]"
          aria-hidden="true"
        />
        <div className="absolute top-10 left-6 md:left-14 flex flex-col gap-1 rotate-180" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <Chevron key={i} className="w-8 h-8 md:w-10 md:h-10" color={`rgba(228,87,46,${0.4 + i * 0.3})`} />
          ))}
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-[clamp(2.1rem,6.5vw,4.2rem)] leading-[1.02] mb-6`} style={{ color: C.arena }}>
              Tu mueble,
              <br />
              <span
                className="inline-block px-3 md:px-4 mt-2"
                style={{ backgroundColor: C.naranja, transform: 'skewX(-8deg)', color: C.blanco }}
              >
                a la medida justa
              </span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed font-medium" style={{ color: 'rgba(237,230,218,0.78)' }}>
              Mándanos tu idea por WhatsApp con una foto o las medidas.
              Cotizamos sin compromiso y agendamos la visita.
            </p>
            <a
              href={WA_LINK_MEDIDA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-wide text-sm md:text-base px-9 py-4 transition-transform active:scale-95 hover:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EDE6DA]`}
              style={{ backgroundColor: C.naranja, color: C.blanco, clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}
            >
              Agendar medición →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.concretoDeep, color: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t" style={{ borderColor: C.lineLight }}>
          <div>
            <p className={`${display.className} font-bold uppercase text-2xl mb-2 flex items-center gap-3`}>
              <Chevron className="w-5 h-5" color={C.naranja} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(237,230,218,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(237,230,218,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors focus-visible:text-white focus-visible:underline">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineLight }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(237,230,218,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.legal}.
            Servicios, precios, horarios, reseñas y fotos son de
            muestra; nombre, dirección, Instagram y WhatsApp son reales.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
