import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF7EF',
  leaf: '#DCE4C8',
  leafSoft: '#EDF1DE',
  green: '#4C6B3C',
  deep: '#2E4224',
  earth: '#8C6239',
  earthSoft: '#D9C3A5',
  ink: '#232B1B',
  muted: '#66705A',
  line: 'rgba(35,43,27,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'nicolas-atelier',
  title: 'Nicolás Atelier — Peluquería en Linares',
  description: 'Peluquería en Neuquén 384, centro de Linares, Región del Maule. Corte, color y barba con atención directa de Nicolás. Agenda por WhatsApp.',
  image: '/demos/nicolas-atelier/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El atelier', href: '#atelier' },
  { label: 'Precios', href: '#precios' },
  { label: 'Ubicación', href: '#contacto' },
]

const SERVICES = [
  {
    src: `${IMG}/estacion.webp`,
    alt: 'Estación de trabajo del atelier: silla de peluquería frente al espejo',
    tilt: 'group-hover:rotate-0 rotate-[-2.5deg]',
    num: '01',
    name: 'Corte a tu medida',
    desc: 'Diagnóstico rápido de facciones, pelo y rutina. Tijera o máquina, clásico o degradado.',
  },
  {
    src: `${IMG}/color.webp`,
    alt: 'Aplicación de color y matiz sobre el pelo de un cliente',
    tilt: 'group-hover:rotate-0 rotate-[2deg]',
    num: '02',
    name: 'Color y matiz',
    desc: 'Tintura, matiz y retoque de raíz. Se evalúa el estado del pelo antes de aplicar.',
  },
  {
    src: `${IMG}/herramientas.webp`,
    alt: 'Tijeras, navaja y máquinas ordenadas sobre la mesa de trabajo',
    tilt: 'group-hover:rotate-0 rotate-[-2deg]',
    num: '03',
    name: 'Barba y perfilado',
    desc: 'Diseño y arreglo de barba con navaja. Contornos limpios y acabado prolijo.',
  },
]

const QUOTES = [
  'Llegas, te sientas y sales conforme. La hora se respeta y el corte queda bien todas las veces.',
  'Nicolás te escucha antes de cortar. Eso vale más que cualquier tendencia.',
  'Buen ambiente, música piola y corte impecable. Mi peluquería fija en Linares.',
]

const PRICES = [
  { name: 'Corte', price: 'desde $10.000' },
  { name: 'Corte + barba', price: 'desde $14.000' },
  { name: 'Arreglo de barba', price: 'desde $7.000' },
  { name: 'Color o matiz', price: 'desde $25.000' },
  { name: 'Peinado para eventos', price: 'desde $18.000' },
]

/** Líneas de velocidad en diagonal, muy sutiles, sobre fondos crema */
const SPEEDLINES =
  'repeating-linear-gradient(-55deg, transparent 0 26px, rgba(76,107,60,0.05) 26px 27px)'

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 10"
      className="inline-block w-6 h-[10px] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M0 5 H21 M17 1 L22 5 L17 9" />
    </svg>
  )
}

export default function NicolasAtelierPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(251,247,239,0.94)',
          ink: C.deep,
          line: C.line,
          btnBg: C.green,
          btnInk: '#FBF7EF',
        }}
      />

      {/* ── Hero a sangre, corte diagonal en la base ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{
          backgroundColor: C.deep,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))',
        }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Nicolás Atelier: sillas de peluquería, espejos de madera y plantas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(46,66,36,0.55) 0%, rgba(46,66,36,0.12) 42%, rgba(46,66,36,0.82) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-24 md:pb-28 pt-28">
        {/* sello de reseñas */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(251,247,239,0.94)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.earth} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
          <Reveal delay={120}>
            <span
              className="inline-block rotate-[-3deg] text-[11px] font-semibold uppercase tracking-[0.22em] px-3 py-1.5"
              style={{ backgroundColor: C.earth, color: C.paper }}
            >
              {BIZ.address} · Linares centro
            </span>
          </Reveal>
        </div>
          <Reveal>
            <p
              className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
              style={{ color: C.leaf }}
            >
              <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
              Peluquería · Linares · Región del Maule
            </p>
            <h1
              className={`${display.className} leading-[1.05] tracking-[-0.01em] text-[clamp(2.9rem,10vw,6rem)] mb-6`}
              style={{ color: C.paper }}
            >
              Un buen corte
              <br />
              <em style={{ color: C.earthSoft }}>te ordena la semana</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,247,239,0.88)' }}>
              Peluquería en Neuquén 384, centro de Linares. Atiende
              Nicolás; la hora se agenda por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-lg px-7 py-2.5 md:py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBF7EF]`}
                style={{ backgroundColor: C.paper, color: C.deep }}
              >
                Reservar hora
              </a>
              <a
                href="#servicios"
                className={`${display.className} text-lg px-7 py-2.5 md:py-3.5 border transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBF7EF]`}
                style={{ borderColor: 'rgba(251,247,239,0.55)', color: C.paper }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta diagonal sobre el corte del hero ── */}
      <div
        className="relative z-10 -my-5 md:-my-7 rotate-[-1.7deg] w-full shadow-md"
        style={{ backgroundColor: C.green }}
        aria-hidden="true"
      >
        <div
          className="py-3 md:py-3.5 flex items-center justify-center gap-5 md:gap-8 text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] whitespace-nowrap overflow-hidden"
          style={{ color: C.paper }}
        >
          <span>Corte</span>
          <Arrow />
          <span>Color</span>
          <Arrow />
          <span>Barba</span>
          <Arrow />
          <span className="hidden sm:inline">Estilo</span>
          <span className="hidden sm:inline"><Arrow /></span>
          <span className="hidden md:inline">Linares</span>
          <span className="hidden md:inline"><Arrow /></span>
        </div>
      </div>

      {/* ── Servicios ── */}
      <section
        id="servicios"
        className="scroll-mt-20"
        style={{ backgroundColor: C.paper, backgroundImage: SPEEDLINES }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
                Lo que pasa en la silla
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Servicios de muestra: al publicar va la carta real del
                atelier.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {SERVICES.map((s, i) => (
              <li key={s.name} className={i === 1 ? 'lg:translate-y-10' : ''}>
                <Reveal delay={i * 110} className="group h-full">
                  <figure
                    className={`relative aspect-[4/3] overflow-hidden border-4 shadow-lg transition-transform duration-500 ease-out ${s.tilt}`}
                    style={{ borderColor: '#FFFFFF', boxShadow: '0 18px 40px rgba(46,66,36,0.18)' }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      className={`${display.className} absolute top-3 left-3 w-9 h-9 flex items-center justify-center text-sm rotate-[-6deg]`}
                      style={{ backgroundColor: C.paper, color: C.earth }}
                      aria-hidden="true"
                    >
                      {s.num}
                    </span>
                  </figure>
                  <div className="pt-5">
                    <h3
                      className={`${display.className} text-2xl md:text-[1.7rem] leading-tight mb-2 flex items-center gap-3`}
                      style={{ color: C.deep }}
                    >
                      <span style={{ color: C.earth }}><Arrow /></span>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={200}>
            <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-3 text-lg px-7 py-2.5 md:py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4`}
                style={{ backgroundColor: C.green, color: C.paper, outlineColor: C.green }}
              >
                Agenda por WhatsApp
                <Arrow />
              </a>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.muted }}>
                Los cupos de la semana se confirman por mensaje. Respuesta
                el mismo día.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El atelier: bloque verde cortado en diagonal ── */}
      <section
        id="atelier"
        className="scroll-mt-20"
        style={{
          backgroundColor: C.deep,
          clipPath: 'polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[9vw] pb-[11vw]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <figure
                className="relative aspect-[4/3] rotate-[-2.5deg] border-4 shadow-2xl"
                style={{ borderColor: C.paper }}
              >
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Nicolás Atelier en Neuquén 384, entre plátanos de Linares"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className="absolute -bottom-3 left-6 rotate-[-2deg] text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5"
                  style={{ backgroundColor: C.earth, color: C.paper }}
                >
                  {BIZ.address}, Linares
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <p
                className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
                style={{ color: C.earthSoft }}
              >
                <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
                El atelier
              </p>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.paper }}>
                Aquí atiende
                <br />
                <em style={{ color: C.leaf }}>su dueño</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: 'rgba(251,247,239,0.78)' }}>
                En Nicolás Atelier cada hora la toma Nicolás: se conversa
                el estilo, se corta con calma y se sale listo. Nada de
                filas ni turnos raros — una silla, un peluquero, tu pelo.
              </p>
              <p className="text-xs italic mb-8" style={{ color: 'rgba(251,247,239,0.66)' }}>
                Texto de muestra: al publicar va la descripción real del
                atelier.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]"
                  style={{ borderColor: 'rgba(251,247,239,0.35)', color: C.paper }}
                >
                  {BIZ.reviews} reseñas en Google
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]"
                  style={{ borderColor: 'rgba(251,247,239,0.35)', color: C.paper }}
                >
                  {BIZ.igHandle} · {BIZ.igFollowers} seguidores
                </a>
                <span
                  className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full"
                  style={{ backgroundColor: 'rgba(251,247,239,0.12)', color: C.paper }}
                >
                  {BIZ.address}
                </span>
              </div>
            </Reveal>
          </div>

          {/* opiniones de muestra */}
          <div className="mt-16 md:mt-20">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-6" style={{ color: C.earthSoft }}>
                Lo que valoran los clientes
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {QUOTES.map((q, i) => (
                <Reveal key={i} delay={100 + i * 110}>
                  <figure
                    className={`h-full p-6 border-l-2 ${i === 1 ? 'md:-rotate-1' : 'md:rotate-1'}`}
                    style={{ backgroundColor: 'rgba(251,247,239,0.07)', borderColor: C.earthSoft }}
                  >
                    <blockquote className={`${display.className} text-lg leading-snug mb-4`} style={{ color: C.paper }}>
                      “{q}”
                    </blockquote>
                    <figcaption className="text-[10px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.earthSoft }}>
                      Reseña de ejemplo
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
                className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]"
                style={{ color: C.leaf, textDecorationColor: 'rgba(220,228,200,0.4)' }}
              >
                Ver las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section
        id="precios"
        className="scroll-mt-20"
        style={{ backgroundColor: C.paper, backgroundImage: SPEEDLINES }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
                  Precios de referencia
                </h2>
                <span
                  className="inline-block rotate-[5deg] shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 border-2"
                  style={{ borderColor: C.earth, color: C.earth }}
                >
                  Muestra
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul>
                {PRICES.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline gap-3 py-4 border-b border-dotted"
                    style={{ borderColor: 'rgba(140,98,57,0.45)' }}
                  >
                    <span className="flex items-center gap-2.5 text-sm md:text-base font-medium" style={{ color: C.ink }}>
                      <span style={{ color: C.green }}><Arrow /></span>
                      {p.name}
                    </span>
                    <span className="flex-1" aria-hidden="true" />
                    <span className={`${display.className} text-xl md:text-2xl`} style={{ color: C.earth }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic mt-6 leading-relaxed" style={{ color: C.muted }}>
                Valores de muestra para mostrar el formato. Los precios
                reales los confirma el local al publicar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section
        id="contacto"
        className="scroll-mt-20"
        style={{
          backgroundColor: C.deep,
          clipPath: 'polygon(0 0, 100% 5vw, 100% 100%, 0 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[8vw] pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.paper }}>
              Agenda tu hora
              <br />
              <em style={{ color: C.earthSoft }}>por WhatsApp</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(251,247,239,0.78)' }}>
              Escríbenos con el servicio que necesitas y te confirmamos
              hora. Atendemos en {BIZ.address}, centro de Linares.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-lg px-7 py-2.5 md:py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBF7EF]`}
                style={{ backgroundColor: C.paper, color: C.deep }}
              >
                Reservar hora
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-lg px-7 py-2.5 md:py-3.5 border transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBF7EF]`}
                style={{ borderColor: 'rgba(251,247,239,0.55)', color: C.paper }}
              >
                Ver Instagram
              </a>
            </div>
            <address className="not-italic text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,247,239,0.78)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]" style={{ textDecorationColor: 'rgba(220,228,200,0.4)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-4 shadow-2xl rotate-[1.2deg]" style={{ borderColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="block w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]"
              style={{ color: C.leaf, textDecorationColor: 'rgba(220,228,200,0.4)' }}
            >
              Cómo llegar →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#232F19', color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,247,239,0.72)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-opacity hover:opacity-75">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(251,247,239,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,247,239,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(251,247,239,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.earthSoft }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, servicios, precios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.earthSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
