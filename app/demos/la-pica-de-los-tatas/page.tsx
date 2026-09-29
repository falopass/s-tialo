import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})

/**
 * Paleta sacada de la fachada real: amarillo del mural, rojo teja del
 * letrero y los manteles, verde de las enredaderas pintadas, crema de
 * mantel y el verde oscuro del pizarrón de la entrada. La madera da el
 * color de tinta. Todo lo interactivo es pastilla o etiqueta de papel.
 */
const C = {
  paper: '#F7EEDB',
  card: '#FDF6E8',
  ink: '#33241B',
  muted: '#6E5B49',
  teja: '#A63A24',
  tejaDeep: '#7E2A18',
  gold: '#E4A61F',
  goldLight: '#F0C95C',
  leaf: '#4E6B33',
  board: '#2B3322',
  chalk: '#F3EBD6',
  line: 'rgba(51,36,27,0.2)',
  lineChalk: 'rgba(243,235,214,0.28)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E2A18]'
const BTN_SOLID = `${FOCUS} inline-flex items-center justify-center gap-2 rounded-full bg-[#A63A24] text-[#F7EEDB] font-bold text-sm px-6 py-3 transition-all hover:bg-[#7E2A18] active:scale-95`
const BTN_GHOST = `${FOCUS} inline-flex items-center justify-center gap-2 rounded-full border-2 font-bold text-sm px-6 py-2.5 transition-colors`
const KICKER = 'text-[11px] uppercase tracking-[0.26em] font-extrabold'
const WRAP = 'max-w-6xl mx-auto px-5 md:px-8'

export const metadata: Metadata = demoMetadata({
  slug: 'la-pica-de-los-tatas',
  title: 'La Picá De Los Tatas — comida casera en Molina',
  description: 'La picá de los murales pintados en Independencia 1843, Molina: empanadas de horno campeonas 2025, cazuelas y mesa sin apuro. Llama al (75) 255 4076.',
  image: '/demos/la-pica-de-los-tatas/hero.webp',
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'La casa', href: '#casa' },
  { label: 'Premios', href: '#palmares' },
  { label: 'Visítanos', href: '#visitanos' },
]

// Platos reales: pizarrón de la entrada, letrero de la fachada
// ("Empanadas de horno · Desayunos · Comidas típicas de temporada"),
// prensa (tres cazuelas en el Día de la Cazuela) y fotos de la ficha.
const PIZARRA = [
  { plato: 'Empanada de pino de horno', nota: 'la campeona de Molina 2025' },
  { plato: 'Pastel de choclo en paila', nota: 'gratinado al horno' },
  { plato: 'Cazuela de vacuno', nota: 'en agosto llega en tres versiones' },
  { plato: 'Pollo al jugo con arroz', nota: 'de la pizarra de la entrada' },
  { plato: 'Carne a la cacerola con puré', nota: 'de la pizarra de la entrada' },
  { plato: 'Sopaipillas y pebre', nota: 'con pan amasado' },
  { plato: 'Ensaladas de temporada', nota: 'hay opción vegetariana' },
  { plato: 'Desayunos', nota: 'desde las 9:30' },
]

const PALMARES = [
  {
    anio: '2025',
    titulo: 'Mejor Empanada de Molina',
    detalle: 'Campeona del concurso de la Corporación de Turismo y Agamol entre 15 locales: el jurado destacó la masa, el dorado y el pino abundante.',
  },
  {
    anio: '2024',
    titulo: 'Relación precio-calidad',
    detalle: 'Reconocimiento de la Municipalidad de Molina en la misma competencia de empanadas, un año antes de ganarla.',
  },
]

const QUOTES = [
  { q: 'Excelente atención, comida abundante y muy rica.', a: 'Francia Lizana', w: 'Hace 2 meses' },
  { q: 'Simplemente maravilloso. Fuimos buscando comida tarde, estaban por cerrar e igual nos atendieron.', a: 'Garek', w: 'Hace 3 meses' },
  { q: 'Llegamos por las recomendaciones de Google y cumplió con todas las expectativas.', a: 'Paulina Reyes', w: 'Hace 7 meses' },
]

const HORAS = [
  { d: 'Lunes a sábado', h: '9:30 a 16:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

/** Enredadera pintada: el motivo que recorre los muros amarillos del local. */
function Enredadera({ color, className = '' }: { color: string; className?: string }) {
  const leaf = 'M0 0 Q 9 -8 18 -3 Q 9 5 0 0 Z'
  return (
    <svg
      viewBox="0 0 240 30"
      className={`block w-64 h-8 mx-auto ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 15 C 30 4, 52 26, 82 15 S 140 4, 162 15 S 212 26, 240 15"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <g fill={color}>
        <path d={leaf} transform="translate(30 7) rotate(-20)" />
        <path d={leaf} transform="translate(78 18) rotate(158)" />
        <path d={leaf} transform="translate(116 8) rotate(-14)" />
        <path d={leaf} transform="translate(156 20) rotate(170)" />
        <path d={leaf} transform="translate(200 9) rotate(-18)" />
      </g>
    </svg>
  )
}

/** Escarapela tricolor: las guirnaldas de papel del comedor, en premio. */
function Escarapela({ className = 'w-12 h-14' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 60" className={className} aria-hidden="true" focusable="false">
      {/* cintas */}
      <path d="M19 34 L14 56 L23 50 L26 34 Z" fill={C.teja} />
      <path d="M29 34 L34 56 L25 50 L22 34 Z" fill="#24418A" />
      {/* rosetón plisado */}
      <circle cx="24" cy="24" r="21" fill={C.teja} />
      <circle cx="24" cy="24" r="21" fill="none" stroke={C.tejaDeep} strokeWidth="2.5" strokeDasharray="3.4 3" />
      <circle cx="24" cy="24" r="13.5" fill={C.chalk} />
      <circle cx="24" cy="24" r="6.5" fill="#24418A" />
    </svg>
  )
}

/** Rueda de carreta: la que está pintada junto a la puerta. */
function Rueda({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="19" />
      <circle cx="24" cy="24" r="4.5" />
      <path d="M24 5v38M5 24h38M10.6 10.6l26.8 26.8M37.4 10.6L10.6 37.4" />
    </svg>
  )
}

function Eyebrow({ children, light = false, center = false }: { children: ReactNode; light?: boolean; center?: boolean }) {
  return (
    <p
      className={`${KICKER} flex items-center gap-3 ${center ? 'justify-center' : ''}`}
      style={{ color: light ? C.goldLight : C.teja }}
    >
      <Rueda className="w-4 h-4 shrink-0" />
      <span>{children}</span>
    </p>
  )
}

export default function LaPicaDeLosTatasPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>

      {/* ── Barra: papel con el letrero pintado ── */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-md" style={{ backgroundColor: 'rgba(247,238,219,0.92)', borderColor: C.line }}>
        <div className={`${WRAP} flex items-center justify-between gap-3 py-2`}>
          <a href="#inicio" className={`${FOCUS} flex items-center gap-2.5 min-w-0 tap-44`}>
            <Image
              src={`${IMG}/logo.webp`}
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
              className="rounded-md border shrink-0 object-cover"
              style={{ borderColor: C.line }}
            />
            <span className={`${display.className} text-lg md:text-xl leading-none truncate`}>
              {BIZ.short}
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`${FOCUS} tap-44 transition-colors hover:text-[#A63A24]`} style={{ color: C.muted }}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href={CALL_LINK} className={`${BTN_SOLID} tap-44 shrink-0`}>
            Reservar mesa
          </a>
        </div>
      </header>

      {/* ── Portada: el mural se funde en papel ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada de La Picá De Los Tatas en Independencia 1843, Molina: murales pintados a mano con los dueños, la rueda de carreta y el letrero Chilean Food"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(51,36,27,0.22) 0%, rgba(247,238,219,0.06) 34%, rgba(247,238,219,0.88) 72%, #F7EEDB 92%)',
          }}
          aria-hidden="true"
        />
        <div className={`relative ${WRAP} pb-10 md:pb-14 pt-36`}>
          <Reveal>
            <Eyebrow>Independencia 1843 · Molina</Eyebrow>
            <h1
              className={`${display.className} mt-4 leading-[1.0] text-[clamp(2.7rem,9.5vw,5.8rem)]`}
              style={{ color: C.ink }}
            >
              El buen sabor
              <br />
              de la <span style={{ color: C.teja }}>comida casera</span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              La picá de los muros pintados a mano: almuerzos de olla,
              empanadas de horno premiadas y mesa con mantel rojo, a una
              cuadra de la carretera en Molina.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALL_LINK} className={`${BTN_SOLID} tap-44`}>
                Llamar al {BIZ.phoneDisplay}
              </a>
              <a
                href="#pizarra"
                className={`${BTN_GHOST} tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Ver la pizarra
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t pt-4 text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.line, color: C.muted }}>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill={C.gold} stroke={C.tejaDeep} strokeWidth="1" aria-hidden="true">
                  <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                </svg>
                {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
              </li>
              <li style={{ color: C.teja }}>Mejor Empanada de Molina 2025</li>
              <li>Lu–Sá 9:30–16:00</li>
              <li className="hidden md:inline">Sitio de ejemplo</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── El letrero: pintado a mano, como todo lo demás ── */}
      <section className={`${WRAP} pt-16 md:pt-24 pb-4`}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <figure
              className="relative border-[3px] p-3 md:p-4"
              style={{ borderColor: C.ink, backgroundColor: C.card, boxShadow: `8px 8px 0 ${C.gold}` }}
            >
              <Image
                src={`${IMG}/logo.webp`}
                alt="Letrero pintado a mano de La Picá de Los Tatas: los dos dueños retratados sobre fondo amarillo"
                width={640}
                height={640}
                className="w-full h-auto"
              />
              <figcaption className={`${KICKER} mt-3 text-center`} style={{ color: C.muted }}>
                El letrero de la casa, pintado a mano
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>La casa que se ve desde la calle</Eyebrow>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl leading-[1.05]`}>
              Una esquina amarilla
              <br />
              <span style={{ color: C.teja }}>pintada a mano</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              En Independencia 1843 no hay letrero luminoso: hay mural.
              Los tatas retratados en la fachada, la rueda de carreta y la
              olla de greda pintadas sobre el muro, y el pizarrón que
              avisa lo que hay ese día.
            </p>
            <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              Adentro, manteles rojos, techo de madera y guirnaldas
              tricolor. Atienden los mismos de siempre — y en Google la
              picá junta {BIZ.reviews} reseñas con nota {BIZ.ratingLabel}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_GHOST} tap-44`}
                style={{ borderColor: C.teja, color: C.teja }}
              >
                Ver ficha en Google →
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_GHOST} tap-44`}
                style={{ borderColor: C.line, color: C.ink }}
              >
                Facebook · {BIZ.followers} seguidores
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La pizarra: platos reales, sin precios inventados ── */}
      <section id="pizarra" className="scroll-mt-20 mt-14 md:mt-20">
        <Enredadera color={C.leaf} />
        <div style={{ backgroundColor: C.board }}>
          <div className={`${WRAP} py-14 md:py-20`}>
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
              <Reveal>
                <Eyebrow light>La pizarra del local</Eyebrow>
                <h2
                  className={`${display.className} mt-4 text-4xl md:text-5xl leading-[1.05]`}
                  style={{ color: C.chalk }}
                >
                  Lo que hay hoy
                  <br />
                  <span style={{ color: C.gold }}>se ve en la entrada</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed max-w-sm" style={{ color: 'rgba(243,235,214,0.82)' }}>
                  Como toda picá, la carta se escribe en tiza cada mañana.
                  Estos son los platos que el letrero, el pizarrón y la
                  prensa ya conocen; los precios se leen al llegar.
                </p>
                <p className="mt-4 text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(243,235,214,0.6)' }}>
                  Carta de muestra para el demo: los platos del día se
                  confirman en el local o por teléfono.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div
                  className="border-[3px] p-6 md:p-8"
                  style={{ borderColor: 'rgba(243,235,214,0.5)', backgroundColor: 'rgba(0,0,0,0.15)' }}
                >
                  <ul className="grid sm:grid-cols-2 gap-x-8">
                    {PIZARRA.map((p) => (
                      <li key={p.plato} className="py-3.5 border-b border-dashed" style={{ borderColor: C.lineChalk }}>
                        <p className={`${body.className} italic font-semibold text-base md:text-lg`} style={{ color: C.chalk }}>
                          {p.plato}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(243,235,214,0.6)' }}>
                          {p.nota}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <Enredadera color={C.leaf} className="rotate-180" />
      </section>

      {/* ── Recién salidas: las fotos reales de la ficha ── */}
      <section className={`${WRAP} pt-14 md:pt-20`}>
        <Reveal>
          <Eyebrow center>De la cocina a la mesa</Eyebrow>
          <h2 className={`${display.className} mt-4 text-center text-4xl md:text-5xl leading-[1.05]`}>
            Recién salidas <span style={{ color: C.teja }}>del horno</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              src: `${IMG}/detalle1.webp`,
              alt: 'Empanadas de pino de horno con vino tinto, pebre y ajíes en la mesa de La Picá De Los Tatas',
              pie: 'las empanadas campeonas',
            },
            {
              src: `${IMG}/pastel.webp`,
              alt: 'Pastel de choclo gratinado en paila de greda servido en La Picá De Los Tatas',
              pie: 'el pastel de choclo en paila',
            },
            {
              src: `${IMG}/detalle2.webp`,
              alt: 'Almuerzo casero en La Picá De Los Tatas: carne con puré, papas fritas, ensalada de tomate y pebre',
              pie: 'el almuerzo de todos los días',
            },
          ].map((f, i) => (
            <Reveal key={f.src} delay={i * 100} className={i === 1 ? 'sm:mt-10' : ''}>
              <figure>
                <div
                  className="relative aspect-[4/5] overflow-hidden border-[3px]"
                  style={{ borderColor: C.ink, boxShadow: `6px 6px 0 ${C.teja}` }}
                >
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${body.className} mt-3 text-center italic text-sm md:text-base font-semibold`} style={{ color: C.teja }}>
                  {f.pie}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Palmarés: escarapelas y prensa real ── */}
      <section id="palmares" className="scroll-mt-20 mt-16 md:mt-24" style={{ backgroundColor: C.card }}>
        <div className={`${WRAP} py-14 md:py-20`}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <Reveal>
              <Eyebrow>Premiada por la comuna</Eyebrow>
              <h2 className={`${display.className} mt-4 text-4xl md:text-5xl leading-[1.05]`}>
                La empanada que
                <br />
                <span style={{ color: C.teja }}>ganó Molina</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                En septiembre de 2025, un jurado de cliente incógnito
                eligió la empanada de los Tatas como la mejor de la
                comuna entre 15 competidores. La prensa local lo contó:
                “probamos sus empanadas y son espectaculares”, dijo el
                alcalde al premiarlas.
              </p>
              <p className="mt-3 text-sm" style={{ color: C.muted }}>
                Fuentes: Radio Favorita y Municipalidad de Molina.
              </p>
            </Reveal>
            <div className="space-y-5">
              {PALMARES.map((p, i) => (
                <Reveal key={p.anio} delay={i * 110}>
                  <div
                    className="flex gap-5 border-[3px] p-5 md:p-6 items-start"
                    style={{ borderColor: C.ink, backgroundColor: C.paper, boxShadow: `6px 6px 0 ${C.gold}` }}
                  >
                    <Escarapela className="w-12 h-14 shrink-0 mt-1" />
                    <div>
                      <p className={KICKER} style={{ color: C.teja }}>
                        {p.anio}
                      </p>
                      <h3 className={`${display.className} text-xl md:text-2xl mt-1`}>{p.titulo}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.muted }}>
                        {p.detalle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* reseñas reales */}
          <div className="mt-14 border-t pt-10" style={{ borderColor: C.line }}>
            <Reveal className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 text-center">
              <Stars value={BIZ.rating} color={C.teja} className="w-4 h-4" />
              <p className={`${display.className} text-2xl md:text-3xl`}>
                {BIZ.ratingLabel} en Google
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} text-sm font-bold underline underline-offset-4 tap-44`}
                style={{ color: C.teja }}
              >
                {BIZ.reviews} reseñas
              </a>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {QUOTES.map((r, i) => (
                <Reveal key={r.a} delay={i * 100}>
                  <figure className="h-full border p-5" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <blockquote className={`${body.className} italic text-sm md:text-base leading-relaxed`}>
                      “{r.q}”
                    </blockquote>
                    <figcaption className={`${KICKER} mt-4`} style={{ color: C.teja }}>
                      {r.a} · {r.w}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-center text-xs" style={{ color: C.muted }}>
              Citas textuales de la ficha de Google de la picá.
            </p>
          </div>
        </div>
      </section>

      {/* ── La casa por dentro ── */}
      <section id="casa" className="scroll-mt-20">
        <div className={`${WRAP} py-14 md:py-24 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center`}>
          <Reveal>
            <div className="grid grid-cols-5 gap-4 items-end">
              <div
                className="col-span-3 relative aspect-[4/3] overflow-hidden border-[3px]"
                style={{ borderColor: C.ink, boxShadow: `6px 6px 0 ${C.teja}` }}
              >
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Comedor de La Picá De Los Tatas: manteles rojos, techo de madera y guirnaldas de papel tricolor"
                  fill
                  sizes="(min-width: 1024px) 33vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div
                className="col-span-2 relative aspect-[3/4] overflow-hidden border-[3px]"
                style={{ borderColor: C.ink, boxShadow: `6px 6px 0 ${C.gold}` }}
              >
                <Image
                  src={`${IMG}/puerta.webp`}
                  alt="Entrada de La Picá De Los Tatas: muro amarillo con enredaderas pintadas, rueda de carreta y el pizarrón del día"
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>La casa</Eyebrow>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl leading-[1.05]`}>
              Mantel rojo,
              <br />
              <span style={{ color: C.teja }}>techo de madera</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              El comedor es el de siempre: guirnaldas de papel, cocina a
              la vista y mesas que no tienen apuro por desocuparse. Te
              recibe la misma gente que cocina y que pintó los muros.
            </p>
            <ul className="mt-6 space-y-3 text-sm md:text-base">
              {[
                'Desayunos y almuerzos de lunes a sábado',
                'Comidas típicas de temporada, como dice el mural',
                'Opción vegetariana anotada en la pizarra',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: C.leaf }} aria-hidden="true" />
                  <span style={{ color: C.ink }}>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Visítanos ── */}
      <section id="visitanos" className="scroll-mt-20" style={{ backgroundColor: C.tejaDeep }}>
        <div className={`${WRAP} py-14 md:py-20`}>
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <Reveal>
              <Eyebrow light>Visítanos</Eyebrow>
              <h2 className={`${display.className} mt-4 text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.chalk }}>
                Te guardamos
                <br />
                <span style={{ color: C.gold }}>la mesa</span>
              </h2>
              <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(243,235,214,0.85)' }}>
                {BIZ.name}
                <br />
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
              <ul className="mt-5 border-t" style={{ borderColor: 'rgba(243,235,214,0.3)' }}>
                {HORAS.map((h) => (
                  <li
                    key={h.d}
                    className="flex items-baseline justify-between gap-6 py-3 border-b text-sm md:text-base"
                    style={{ borderColor: 'rgba(243,235,214,0.3)', color: 'rgba(243,235,214,0.85)' }}
                  >
                    <span>{h.d}</span>
                    <span className="font-bold" style={{ color: C.chalk }}>{h.h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${FOCUS} inline-flex items-center justify-center rounded-full bg-[#F7EEDB] font-bold text-sm px-6 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ color: C.tejaDeep }}
                >
                  Llamar al {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} inline-flex items-center justify-center rounded-full border-2 border-[#F7EEDB]/70 font-bold text-sm px-6 py-2.5 tap-44 transition-colors hover:bg-white/10`}
                  style={{ color: C.chalk }}
                >
                  Cómo llegar
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed" style={{ color: 'rgba(243,235,214,0.65)' }}>
                Atienden por teléfono fijo y por su grupo de WhatsApp:
                para reservar, lo más directo es llamar.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="border-[3px] h-[320px] lg:h-full lg:min-h-[400px] overflow-hidden"
                style={{ borderColor: 'rgba(243,235,214,0.5)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section style={{ backgroundColor: C.gold }}>
        <div className={`${WRAP} py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
          <p className="text-sm md:text-[15px] leading-relaxed font-semibold" style={{ color: C.ink }}>
            Sitio de ejemplo de{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} font-extrabold underline underline-offset-4 tap-44`}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} shrink-0 text-sm font-extrabold underline underline-offset-4 tap-44`}
            style={{ color: C.ink }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.chalk }}>
        <div className={`${WRAP} pt-8 pb-16 flex flex-col md:flex-row md:items-center justify-between gap-4`}>
          <div>
            <p className={`${display.className} text-xl md:text-2xl`}>
              {BIZ.name}
            </p>
            <address className="not-italic mt-1 text-sm" style={{ color: 'rgba(243,235,214,0.78)' }}>
              {BIZ.address}, {BIZ.city} ·{' '}
              <a href={CALL_LINK} className={`${FOCUS} underline underline-offset-2 tap-44`}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem]" style={{ color: 'rgba(243,235,214,0.65)' }}>
            Mockup de Sitiazo: datos, fotos, letrero, horario, premios y
            reseñas reales (ficha de Google y prensa local); textos y
            carta de muestra.
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.teja} />
    </div>
  )
}
