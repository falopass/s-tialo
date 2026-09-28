import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, SITE_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2' }],
})

/**
 * Dirección de arte: «lodge de cordillera» — verde bosque profundo,
 * papel hueso y ámbar de leña, con la línea de cerros como motivo
 * gráfico. Fraunces pone la tipografía de letrero tallado; Work Sans
 * es el papel de sendero.
 */
const C = {
  paper: '#F4EFE3',
  soft: '#E4E9D8',
  leaf: '#3F6B2E',
  amber: '#D19A3E',
  pine: '#23402B',
  deep: '#122317',
  ink: '#26301F',
  muted: '#5C6B53',
  line: 'rgba(35,64,43,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'entre-lomas',
  title: 'Complejo Turístico Entre Lomas — Cabañas en Molina, Maule',
  description:
    'Cabañas, tinajas, piscina y cafetería junto al Parque Nacional Radal Siete Tazas, Molina. Reservas directas por WhatsApp.',
  image: '/demos/entre-lomas/hero.webp',
})

const NAV_LINKS = [
  { label: 'El complejo', href: '#complejo' },
  { label: 'El entorno', href: '#entorno' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
]

const COMPLEJO = [
  {
    src: `${IMG}/detalle1.webp`,
    name: 'Tinajas calientes',
    desc: 'Tinaja de madera a leña sobre el deck: el remojo con humo de bosque que más agradecen las reseñas.',
    tag: 'Con reserva',
  },
  {
    src: `${IMG}/detalle2.webp`,
    name: 'Piscinas',
    desc: 'Piscina temperada y piscinas al aire libre con vista a los cerros: el plan de tarde dentro del mismo complejo.',
    tag: 'En temporada',
  },
  {
    src: `${IMG}/detalle3.webp`,
    name: 'Cabañas equipadas',
    desc: 'Madera por dentro y bosque por fuera: camas hechas, cocina y la calma de la precordillera maulina.',
    tag: 'Todo el año',
  },
  {
    src: `${IMG}/ambiente.webp`,
    name: 'Senderos y jardines',
    desc: 'Pasarelas de madera entre nativo, quincho y rincones de sombra para caminar sin salir del predio.',
    tag: 'Dentro del predio',
  },
]

const SERVICIOS = [
  'Cafetería Las Terrazas',
  'Cervecería Entre Lomas',
  'Restaurante',
  'Salón de eventos',
  'Minimarket',
  'Visitas guiadas al parque',
]

const VALORAN = [
  'Las tinajas a leña',
  'La piscina con vista al cerro',
  'La cercanía a Radal Siete Tazas',
  'El quincho y los jardines',
]

const TESTIMONIALS = [
  'Cabaña cómoda y el complejo es gigante: piscina, tinaja y senderos sin tener que mover el auto.',
  'Queda a minutos del parque, así que fuimos a Radal Siete Tazas y volvimos a la piscina temperada. Ideal con niños.',
  'Lindo lugar, bien cuidado y con cafetería y minimarket adentro. La pasamos muy bien.',
]

// ── Piezas del lodge ─────────────────────────────────────────

/** Línea de cerros: silueta de cordillera en SVG. */
function Cerros({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 200 24" preserveAspectRatio="none">
      <path
        d="M0 24 L22 10 L38 20 L60 4 L82 18 L104 8 L126 21 L148 6 L170 17 L200 9 L200 24 Z"
        fill={color}
      />
    </svg>
  )
}

/** Medallón circular con el rating real. */
function Medallon({ size = 148, top, center, sub }: { size?: number; top: string; center: string; sub: string }) {
  const pid = `elmed-${top.replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <div
      className="rounded-full flex items-center justify-center rotate-[-6deg]"
      style={{ width: size, height: size, backgroundColor: C.paper, boxShadow: '0 8px 22px rgba(18,35,23,0.35)' }}
    >
      <svg viewBox="0 0 100 100" width={size - 10} height={size - 10} aria-hidden="true">
        <defs>
          <path id={pid} d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" fill="none" />
        </defs>
        <circle cx="50" cy="50" r="47" fill="none" stroke={C.pine} strokeWidth="1.4" />
        <circle cx="50" cy="50" r="43" fill="none" stroke={C.pine} strokeWidth="0.7" strokeDasharray="2.5 3" />
        <text fill={C.pine} fontSize="7" fontWeight="800" letterSpacing="1.4">
          <textPath href={`#${pid}`} startOffset="0">{top}</textPath>
        </text>
        <text className={display.className} x="50" y="57" textAnchor="middle" fill={C.pine} fontSize="21" fontWeight="900">
          {center}
        </text>
        <text x="50" y="69" textAnchor="middle" fill={C.pine} fontSize="6" fontWeight="700" letterSpacing="1.1">
          {sub}
        </text>
      </svg>
    </div>
  )
}

/** Eyebrow de sendero: letra pequeña con línea punteada. */
function Sendero({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3"
      style={{ color: light ? C.amber : C.pine }}
    >
      <span className="inline-block w-9 border-t-2 border-dashed" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function EntreLomasPage() {
  return (
    <div className={`${body.className} elx min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .elx a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,239,227,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.pine,
          btnInk: '#F4EFE3',
        }}
      />

      {/* ── Hero: la cabaña barril ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cabaña barril de madera sobre deck en Complejo Turístico Entre Lomas, Santa Brígida, Molina"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(18,35,23,0.45) 0%, rgba(18,35,23,0.1) 40%, rgba(18,35,23,0.72) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24">
          <div className="flex flex-col items-end gap-2 mb-6">
            <Reveal>
              <Medallon size={128} top="MOLINA · MAULE ·" center={`${BIZ.rating}★`} sub={`${BIZ.reviews} RESEÑAS GOOGLE`} />
            </Reveal>
            <Reveal delay={80}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4"
                style={{ color: '#F4EFE3', textDecorationColor: C.amber }}
              >
                Ver las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
          </div>
          <Reveal>
            <div className="max-w-3xl">
              <div
                className="px-6 md:px-10 py-8 md:py-11 rounded-t-[26px]"
                style={{ backgroundColor: C.paper, boxShadow: '0 -1px 0 rgba(18,35,23,0.1), 0 28px 60px rgba(18,35,23,0.4)' }}
              >
                <Sendero>Cabañas &amp; turismo · Santa Brígida, Molina</Sendero>
                <h1 className={`${display.className} font-black leading-[0.98] tracking-[0.01em] text-[clamp(2.7rem,9vw,5.6rem)] mb-5`} style={{ color: C.pine }}>
                  Entre Lomas
                  <span className={`${displayItalic.className} block font-medium`} style={{ color: C.leaf }}>
                    junto a Radal Siete Tazas
                  </span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
                  Cabañas de madera, tinajas calientes, piscina y senderos —
                  un complejo completo en Santa Brígida, a minutos del
                  Parque Nacional Radal Siete Tazas.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:brightness-110 active:scale-95`}
                    style={{ backgroundColor: C.pine, color: '#F4EFE3' }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#complejo"
                    className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-[#E4E9D8]`}
                    style={{ borderColor: C.pine, color: C.pine }}
                  >
                    Ver el complejo
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        {/* cortina de cerros */}
        <div className="relative mt-10 md:mt-14" style={{ backgroundColor: C.pine }}>
          <Cerros color={C.deep} className="block w-full h-5 -mb-px" />
          <ul
            className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-center"
            style={{ color: '#D9E4C6' }}
          >
            {['Cabañas', 'Tinajas', 'Piscina', 'Cafetería y restaurante', 'Molina · Región del Maule'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El complejo: las postales ── */}
      <section id="complejo" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Sendero>Dentro del predio</Sendero>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.pine }}>
              Todo el complejo
              <br />
              <span style={{ color: C.leaf }}>en un solo lugar</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Fotos reales del complejo. Los detalles de cada cabaña y la
              disponibilidad se confirman siempre por WhatsApp.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {COMPLEJO.map((s, i) => (
            <li
              key={s.name}
              className="group h-full p-3 pb-5"
              style={{
                backgroundColor: '#FAF8EF',
                borderRadius: '26px 26px 8px 8px',
                rotate: i % 2 === 0 ? '-0.8deg' : '0.7deg',
                boxShadow: '0 3px 14px rgba(18,35,23,0.1)',
              }}
            >
              <Reveal delay={i * 100} className="h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3] mb-4" style={{ borderRadius: '18px 18px 6px 6px' }}>
                  <Image
                    src={s.src}
                    alt={`${s.name} — Complejo Turístico Entre Lomas, Molina`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-1.5 px-1" style={{ color: C.leaf }}>
                  {s.tag}
                </p>
                <h3 className={`${display.className} font-bold text-xl md:text-[22px] mb-2 leading-tight px-1`} style={{ color: C.pine }}>
                  {s.name}
                </h3>
                <p className="text-[13px] leading-relaxed px-1" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
        {/* servicios del complejo, según su sitio */}
        <Reveal delay={160}>
          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] shrink-0" style={{ color: C.leaf }}>
              Además en el complejo
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] md:text-sm font-semibold" style={{ color: C.ink }}>
              {SERVICIOS.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.amber }} aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ── El entorno: junto al parque ── */}
      <section id="entorno" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal delay={140} className="lg:order-2">
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/3]" style={{ borderRadius: '30px 30px 10px 10px', boxShadow: '0 18px 50px rgba(18,35,23,0.2)' }}>
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Pasarela de madera entre bosque nativo en Complejo Entre Lomas"
                    fill
                    sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-2 md:-left-4">
                  <Medallon size={120} top="ENTRE LOMAS ·" center="7 Tazas" sub="A MINUTOS" />
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:order-1">
              <Sendero>El entorno</Sendero>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.pine }}>
                A la entrada
                <br />
                <span style={{ color: C.leaf }}>del parque</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 max-w-xl" style={{ color: C.ink }}>
                El complejo queda en Santa Brígida, camino a Radal, en plena
                precordillera del Maule. Es base perfecta para visitar el
                Parque Nacional Radal Siete Tazas: cascadas, senderos de
                bosque nativo y pozas de agua turquesa.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl" style={{ color: C.muted }}>
                Y cuando vuelves: tinaja caliente, piscina o una cerveza en
                la cervecería del mismo complejo. También organizan visitas
                guiadas al parque.
              </p>
              <Cerros color={C.leaf} className="w-44 h-7 opacity-70" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: lo que repiten las visitas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Sendero>Lo que dicen</Sendero>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.pine }}>
              {BIZ.reviews} reseñas
              <br />
              <span style={{ color: C.leaf }}>y un 4,2 en Google</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Lo que más se repite cuando las familias cuentan su estadía
              en Entre Lomas.
            </p>
            <ul className="flex flex-wrap gap-3 max-w-md">
              {VALORAN.map((v) => (
                <li
                  key={v}
                  className="text-xs md:text-[13px] font-semibold px-4 py-2 rounded-full"
                  style={{ backgroundColor: C.soft, color: C.pine, border: `1px solid ${C.line}` }}
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 110}>
                <figure
                  className="p-5 md:p-6"
                  style={{
                    backgroundColor: '#FAF8EF',
                    borderRadius: '22px 22px 8px 8px',
                    rotate: i === 1 ? '0.5deg' : '-0.5deg',
                    boxShadow: '0 3px 14px rgba(18,35,23,0.08)',
                  }}
                >
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.leaf }}>
                    Reseña de muestra · al publicar van las reales
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={340}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4"
                style={{ color: C.pine, textDecorationColor: C.amber }}
              >
                Leer las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reservar: WhatsApp y cómo llegar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <Cerros color={C.soft} className="block w-full h-6" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Sendero light>Reservas</Sendero>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F4EFE3' }}>
              Tu próxima escapada
              <br />
              <span style={{ color: C.amber }}>parte por WhatsApp</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(244,239,227,0.75)' }}>
              Dinos cuántos son y qué fechas tienes en mente: te responden
              con disponibilidad, tarifas y todo lo que el complejo ofrece.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:brightness-105 active:scale-95`}
                style={{ backgroundColor: C.amber, color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(244,239,227,0.5)', color: '#F4EFE3' }}
              >
                {BIZ.site}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative mb-5" style={{ rotate: '-0.6deg' }}>
              <div
                className="px-6 md:px-8 py-6"
                style={{ backgroundColor: 'rgba(244,239,227,0.06)', border: `1px dashed ${C.amber}`, borderRadius: '22px 22px 8px 8px' }}
              >
                <p className="text-[10px] uppercase tracking-[0.26em] font-bold mb-3" style={{ color: C.amber }}>
                  Dónde estamos
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(244,239,227,0.9)' }}>
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
                    style={{ color: C.amber, textDecorationColor: 'rgba(209,154,62,0.4)' }}
                  >
                    Cómo llegar →
                  </a>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4"
                    style={{ color: C.amber, textDecorationColor: 'rgba(209,154,62,0.4)' }}
                  >
                    Llamar
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden min-h-[260px]" style={{ border: '1px solid rgba(209,154,62,0.3)', borderRadius: '22px 22px 8px 8px' }}>
              <LazyMap
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
      <footer style={{ backgroundColor: C.deep, color: '#F4EFE3' }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4"
          style={{ borderColor: 'rgba(244,239,227,0.14)' }}
        >
          <div>
            <p className={`${display.className} font-black text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,227,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors">
                {BIZ.site}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,239,227,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-xs leading-relaxed" style={{ color: 'rgba(244,239,227,0.7)' }}>
            Fotos reales de la ficha de Google; los textos y reseñas de la
            página son de muestra. WhatsApp, dirección, rating y sitio web
            son los reales.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
