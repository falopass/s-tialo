import type { Metadata } from 'next'
import Image from 'next/image'
import { Passion_One, Lato } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_RESERVA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Passion_One({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})
const body = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] })

/**
 * Dirección de arte: «retro de almacén de barrio» — sellos circulares,
 * etiquetas colgantes perforadas, bordes de ticket y letrero pintado,
 * ejecutado limpio y luminoso en petróleo, menta y blanco roto.
 * Passion One hace de letra pintada a mano en el letrero; Lato es el papel.
 */
const C = {
  paper: '#F7F9F9',
  soft: '#E7F1EE',
  mint: '#9FD8CB',
  mintDeep: '#6FBBA9',
  petro: '#0E4C5C',
  deep: '#093540',
  ink: '#2A363C',
  muted: '#60747C',
  line: 'rgba(14,76,92,0.22)',
}

export const metadata: Metadata = {
  title: 'Cabañas Vista Hermosa — Cabañas en Río Claro, Maule',
  description:
    'Cabañas en Río Claro, Región del Maule. Reserva directa por WhatsApp: madera, campo y la vista que da nombre a la casa.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'La casa', href: '#la-casa' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Reservar', href: '#reservar' },
]

const CABANAS = [
  {
    src: `${IMG}/ambiente.webp`,
    num: 'Nº 01',
    name: 'El predio',
    desc: 'Camino de ripio entre árboles y las cabañas de madera al fondo, con el cerro de guardia. Estacionamiento junto a cada una.',
    spec: 'Cabañas independientes',
  },
  {
    src: `${IMG}/detalle3.webp`,
    num: 'Nº 02',
    name: 'Dormitorios con vista',
    desc: 'Camas hechas, madera a la vista y ventana al valle: despertar mirando los cerros es parte del paseo.',
    spec: 'Ropa de cama incluida',
  },
  {
    src: `${IMG}/detalle2.webp`,
    num: 'Nº 03',
    name: 'Mesa de campo',
    desc: 'Cocina equipada y mesa de madera junto al ventanal: desayuno lento con fruta, pan y la vista de frente.',
    spec: 'Cocina equipada',
  },
  {
    src: `${IMG}/detalle1.webp`,
    num: 'Nº 04',
    name: 'Bosca y abrigo',
    desc: 'Calefacción a leña, frazadas y leñero al lado: las noches de invierno también son buena fecha para venir.',
    spec: 'Todo el año',
  },
]

const TARIFAS = [
  { item: 'Cabaña para dos — la noche', price: 'desde $45.000' },
  { item: 'Cabaña familiar (4–5) — la noche', price: 'desde $60.000' },
  { item: 'Semana completa', price: 'a convenir' },
  { item: 'Feriados y fines de semana largo', price: 'a convenir' },
]

const VALORAN = [
  'Llegar y encontrar todo listo',
  'La vista al cerro al despertar',
  'La calma del campo, cerca de todo',
  'Trato directo, sin intermediarios',
]

const TESTIMONIALS = [
  'Cabaña impecable, con todo lo necesario y una vista que no se olvida. Los dueños atienden de maravilla.',
  'Llegamos por un fin de semana y quedamos con ganas de semana completa. Tranquilo, limpio y acogedor.',
  'Reservamos por WhatsApp y nos respondieron al tiro. La cabaña tal cual las fotos, hasta mejor.',
]

// ── Piezas del almacén ──────────────────────────────────────

/** Borde dentado de boleta: triángulos repetidos en SVG. */
function Teeth({
  color,
  down = false,
  className = '',
}: {
  color: string
  /** true: dientes apuntando hacia abajo (borde inferior del papel) */
  down?: boolean
  className?: string
}) {
  const id = `teeth-${down ? 'd' : 'u'}-${color.replace('#', '')}`
  return (
    <svg
      aria-hidden="true"
      className={`block w-full ${className}`}
      height="10"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={id} width="16" height="10" patternUnits="userSpaceOnUse">
          <polygon
            points={down ? '0,0 8,10 16,0' : '0,10 8,0 16,10'}
            fill={color}
          />
        </pattern>
      </defs>
      <rect width="100%" height="10" fill={`url(#${id})`} />
    </svg>
  )
}

/** Sello circular de almacén con texto en círculo. */
function Sello({
  size = 148,
  top,
  center,
  sub,
  ink = C.petro,
}: {
  size?: number
  top: string
  center: string
  sub: string
  ink?: string
}) {
  const pid = `sello-${top.replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <div
      className="rounded-full flex items-center justify-center rotate-[-8deg]"
      style={{
        width: size,
        height: size,
        backgroundColor: C.paper,
        boxShadow: '0 6px 18px rgba(9,53,64,0.18)',
      }}
    >
      <svg viewBox="0 0 100 100" width={size - 10} height={size - 10} aria-hidden="true">
        <defs>
          <path
            id={pid}
            d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
            fill="none"
          />
        </defs>
        <circle cx="50" cy="50" r="47" fill="none" stroke={ink} strokeWidth="1.6" />
        <circle cx="50" cy="50" r="43" fill="none" stroke={ink} strokeWidth="0.8" strokeDasharray="2.5 3" />
        <text
          className={body.className}
          fill={ink}
          fontSize="7.6"
          fontWeight="800"
          letterSpacing="1.6"
        >
          <textPath href={`#${pid}`} startOffset="0">
            {top}
          </textPath>
        </text>
        <text
          className={display.className}
          x="50"
          y="56"
          textAnchor="middle"
          fill={ink}
          fontSize="21"
          fontWeight="900"
        >
          {center}
        </text>
        <text
          className={body.className}
          x="50"
          y="68"
          textAnchor="middle"
          fill={ink}
          fontSize="6.4"
          fontWeight="700"
          letterSpacing="1.2"
        >
          {sub}
        </text>
      </svg>
    </div>
  )
}

/** Eyebrow tipo letrero: letra pequeña pintada con filete. */
function Letrero({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-black mb-4 flex items-center gap-3"
      style={{ color: light ? C.mint : C.petro }}
    >
      <span className="inline-block w-9 border-t-2 border-dashed" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function CabanasVistaHermosaPage() {
  return (
    <div
      className={`${body.className} cvh min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes cvh-ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .cvh-ticker { animation: cvh-ticker 26s linear infinite }
        @media (prefers-reduced-motion: reduce) { .cvh-ticker { animation: none } }
        .cvh a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(247,249,249,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.petro,
          btnInk: '#F7F9F9',
        }}
      />

      {/* ── Hero a sangre con letrero ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de madera de una cabaña de Vista Hermosa con ventanal a los cerros del Maule"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,53,64,0.4) 0%, rgba(9,53,64,0.1) 42%, rgba(9,53,64,0.66) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-10">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver las ${BIZ.reviews} reseñas de Cabañas Vista Hermosa en Google`}
              className="inline-block transition-transform hover:scale-105"
            >
              <Sello top="RÍO CLARO · MAULE ·" center={String(BIZ.reviews)} sub="RESEÑAS EN GOOGLE" />
            </a>
          </Reveal>
        </div>
        {/* letrero pintado */}
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36">
          <Reveal>
            <div className="max-w-3xl">
              <Teeth color={C.paper} className="mx-0" />
              <div
                className="px-6 md:px-10 py-8 md:py-11"
                style={{
                  backgroundColor: C.paper,
                  boxShadow: '0 -1px 0 rgba(9,53,64,0.1), 0 28px 60px rgba(9,53,64,0.35)',
                }}
              >
                <Letrero>Cabañas · Río Claro · VII Región</Letrero>
                <h1
                  className={`${display.className} uppercase font-black leading-[0.95] tracking-[0.01em] text-[clamp(3rem,11vw,6.5rem)] mb-5`}
                  style={{ color: C.petro }}
                >
                  Vista <span style={{ color: C.mintDeep }}>Hermosa</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
                  Cabañas de madera entre árboles, con la vista que da nombre
                  a la casa. Reserva directa, sin intermediarios y con la
                  atención de sus dueños.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-110 active:scale-95`}
                    style={{ backgroundColor: C.petro, color: '#F7F9F9' }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#cabanas"
                    className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-[#E7F1EE]`}
                    style={{ borderColor: C.petro, color: C.petro }}
                  >
                    Ver las cabañas
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        {/* cortina de almacén */}
        <div className="relative mt-10 md:mt-14" style={{ backgroundColor: C.petro }}>
          <div className="overflow-hidden py-3">
            <div className="cvh-ticker flex whitespace-nowrap w-max">
              {[0, 1].map((n) => (
                <span
                  key={n}
                  aria-hidden={n === 1}
                  className="text-[11px] md:text-xs font-black uppercase tracking-[0.24em] flex items-center"
                  style={{ color: C.mint }}
                >
                  {['Reserva directa', 'Sin comisiones', 'Atendido por sus dueños', 'Río Claro · Región del Maule'].map(
                    (t) => (
                      <span key={t} className="flex items-center">
                        <span className="px-6">{t}</span>
                        <span aria-hidden="true" style={{ color: 'rgba(159,216,203,0.5)' }}>✳</span>
                      </span>
                    ),
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Las cabañas: etiquetas de la góndola ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Letrero>En el catálogo</Letrero>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.petro }}>
              Lo que hay
              <br />
              <span style={{ color: C.mintDeep }}>en la casa</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Etiquetas de muestra para mostrar el formato: al publicar van
              las fotos, equipamiento y detalles reales de cada cabaña.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {CABANAS.map((c, i) => (
            <li
              key={c.num}
              className="group relative h-full pt-6 pb-5 px-4"
              style={{
                backgroundColor: '#FDFEFE',
                clipPath: 'polygon(0 5%, 18% 0, 82% 0, 100% 5%, 100% 100%, 0 100%)',
                rotate: i % 2 === 0 ? '-1deg' : '0.8deg',
                boxShadow: '0 3px 10px rgba(9,53,64,0.1)',
              }}
            >
              {/* perforación de etiqueta */}
              <span
                className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: C.paper, boxShadow: `inset 0 0 0 2px ${C.line}` }}
                aria-hidden="true"
              />
              <Reveal delay={i * 100} className="h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <Image
                    src={c.src}
                    alt={`${c.name} — Cabañas Vista Hermosa`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] mb-1.5" style={{ color: C.mintDeep }}>
                  {c.num}
                </p>
                <h3 className={`${display.className} uppercase font-bold tracking-[0.03em] text-xl md:text-[22px] mb-2 leading-tight`} style={{ color: C.petro }}>
                  {c.name}
                </h3>
                <p className="text-[13px] leading-relaxed mb-4 flex-1" style={{ color: C.muted }}>
                  {c.desc}
                </p>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.14em] border-t border-dashed pt-3"
                  style={{ color: C.petro, borderColor: C.line }}
                >
                  {c.spec}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── La casa: el negocio de siempre ── */}
      <section id="la-casa" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Letrero>La casa</Letrero>
              <h2 className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.petro }}>
                Atendido por
                <br />
                <span style={{ color: C.mintDeep }}>sus dueños</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 max-w-xl" style={{ color: C.ink }}>
                Vista Hermosa es un proyecto familiar en Río Claro, en el
                valle del Maule y de camino a la precordillera. Aquí no hay
                call center ni recepción: escribes por WhatsApp y te
                responde la misma gente que prepara las cabañas.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl" style={{ color: C.muted }}>
                Lo que más repiten las visitas en sus {BIZ.reviews} reseñas
                de Google:
              </p>
              <ul className="flex flex-wrap gap-3 max-w-xl">
                {VALORAN.map((v) => (
                  <li
                    key={v}
                    className="text-xs md:text-[13px] font-bold px-4 py-2 border-2 border-dashed"
                    style={{ borderColor: C.petro, color: C.petro, backgroundColor: 'rgba(253,254,254,0.7)' }}
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <div className="flex flex-col items-center gap-6 lg:pt-16">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver la ficha de Cabañas Vista Hermosa en Google Maps"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <Sello size={168} top="LO QUE DICEN LAS VISITAS ·" center={String(BIZ.reviews)} sub="RESEÑAS EN GOOGLE" />
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4"
                  style={{ color: C.petro, textDecorationColor: C.mint }}
                >
                  Ver la ficha en Google →
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4"
                  style={{ color: C.petro, textDecorationColor: C.mint }}
                >
                  {BIZ.igHandle} · {BIZ.igFollowers} seguidores →
                </a>
              </div>
            </Reveal>
          </div>
          {/* reseñas en stub de ticket */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-14 md:mt-20">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 110}>
                <figure
                  className="h-full p-5 md:p-6 border-2 border-dashed relative"
                  style={{ backgroundColor: '#FDFEFE', borderColor: C.line, rotate: i === 1 ? '0.8deg' : '-0.7deg' }}
                >
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-5" style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption
                    className="text-[10px] uppercase tracking-[0.2em] font-black border-t border-dashed pt-3"
                    style={{ color: C.mintDeep, borderColor: C.line }}
                  >
                    Reseña de muestra · al publicar van las reales
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La boleta: tarifas de referencia ── */}
      <section id="tarifas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Letrero>La boleta</Letrero>
          <h2 className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.05] mb-12 md:mb-16`} style={{ color: C.petro }}>
            Tarifas
            <span style={{ color: C.mintDeep }}> de referencia</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="max-w-md mx-auto">
            <Teeth color="#FDFEFE" />
            <div className="relative px-6 md:px-8 py-7" style={{ backgroundColor: '#FDFEFE', boxShadow: '0 14px 40px rgba(9,53,64,0.12)' }}>
              {/* timbre MUESTRA */}
              <div
                className="absolute -top-3 right-4 rotate-[7deg] px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] border-2"
                style={{ borderColor: C.mintDeep, color: C.mintDeep, backgroundColor: 'rgba(247,249,249,0.92)' }}
                aria-hidden="true"
              >
                Muestra
              </div>
              <p className={`${display.className} font-bold text-center text-lg mb-1`} style={{ color: C.petro }}>
                Cabañas Vista Hermosa
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] font-black text-center mb-6" style={{ color: C.muted }}>
                Río Claro · Región del Maule
              </p>
              <ul>
                {TARIFAS.map((t) => (
                  <li key={t.item} className="flex items-baseline gap-2 py-2.5">
                    <span className="text-[13px] md:text-sm font-bold" style={{ color: C.ink }}>
                      {t.item}
                    </span>
                    <span className="flex-1 border-b-2 border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                    <span className={`${display.className} text-sm md:text-base font-bold whitespace-nowrap`} style={{ color: C.petro }}>
                      {t.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] leading-relaxed text-center mt-6 pt-4 border-t border-dashed" style={{ color: C.muted, borderColor: C.line }}>
                Valores de muestra para mostrar el formato — este papel no
                es boleta. La tarifa real varía por temporada y número de
                personas: se confirma siempre por WhatsApp.
              </p>
            </div>
            <Teeth color="#FDFEFE" down />
            <div className="text-center mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase inline-block font-bold tracking-[0.05em] text-sm md:text-base px-8 py-3.5 transition-all hover:brightness-110 active:scale-95`}
                style={{ backgroundColor: C.petro, color: '#F7F9F9' }}
              >
                Consultar tarifa real →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Reservar: vale y cómo llegar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Letrero light>Reservas</Letrero>
            <h2 className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F7F9F9' }}>
              Aparta tu fecha
              <br />
              <span style={{ color: C.mint }}>por WhatsApp</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(247,249,249,0.75)' }}>
              Dinos cuántos son y qué fechas tienes en mente: te
              respondemos con disponibilidad y tarifa del día.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-105 active:scale-95`}
                style={{ backgroundColor: C.mint, color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(247,249,249,0.5)', color: '#F7F9F9' }}
              >
                Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            {/* vale de cortesía */}
            <div className="relative mb-5" style={{ rotate: '-0.8deg' }}>
              <div
                className="border-2 border-dashed px-6 md:px-8 py-6"
                style={{ borderColor: C.mint, backgroundColor: 'rgba(247,249,249,0.06)' }}
              >
                <p className="text-[10px] uppercase tracking-[0.26em] font-black mb-3" style={{ color: C.mint }}>
                  Vale por una escapada
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(247,249,249,0.9)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                </address>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4"
                    style={{ color: C.mint, textDecorationColor: 'rgba(159,216,203,0.4)' }}
                  >
                    Cómo llegar →
                  </a>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4"
                    style={{ color: C.mint, textDecorationColor: 'rgba(159,216,203,0.4)' }}
                  >
                    Llamar
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden border min-h-[260px]" style={{ borderColor: 'rgba(159,216,203,0.3)' }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F7F9F9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-10 border-t flex flex-col md:flex-row md:items-end justify-between gap-8" style={{ borderColor: 'rgba(247,249,249,0.14)' }}>
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,249,249,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors">
                {BIZ.igHandle}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(247,249,249,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,249,249,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(247,249,249,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            tarifas, reseñas y fotos son de muestra; el WhatsApp, la
            dirección, el Instagram y el número de reseñas son reales.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
