import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, IMG, WA_LINK, WA_MESA, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  paper: '#FAF4E8',
  cream: '#F3EAD7',
  ink: '#2B1712',
  red: '#9C2B26',
  redDeep: '#4A1512',
  gold: '#D99A3D',
  muted: '#7A5F55',
  line: 'rgba(43,23,18,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto (n × 4px).
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'cocineria-de-leticia',
  title: 'La Cocina de Leticia — Restaurante familiar en El Colorado, San Clemente',
  description:
    'Restaurante familiar en el camino a Vilches, San Clemente. Chancho en piedra, filete jugoso, pescado del día y el mejor pebre del sector. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Los platos', href: '#platos' },
  { label: 'Las reseñas', href: '#resenas' },
  { label: 'La casa', href: '#casa' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const CINTA = [
  'Chancho en piedra',
  'Filete jugoso',
  'Salmón',
  'Pebre de la casa',
  'Pan amasado',
  'Desayunos de campo',
  'Papas fritas caseras',
]

const PLATOS = [
  {
    src: `${IMG}/plato-lomo.webp`,
    alt: 'Filete a la plancha con papas fritas y huevo frito, servido en sartén de fierro',
    name: 'Carnes y a lo pobre',
    nota: 'Filete a la plancha con papas fritas caseras y huevo de campo. "Delicioso, muy jugoso", dice una reseña.',
  },
  {
    src: `${IMG}/plato-pescado.webp`,
    alt: 'Pescado con arroz, aceitunas y salsa, plato del día',
    name: 'Pescados y mar',
    nota: 'Pescado del día con arroz y salsa de la casa. El salmón es de lo más mencionado en las reseñas.',
  },
  {
    src: `${IMG}/plato-asado.webp`,
    alt: 'Carne asada en su punto servida sobre papas fritas',
    name: 'Asados de la casa',
    nota: 'Cortes asados servidos sobre papas doradas, para compartir en la mesa.',
  },
  {
    src: `${IMG}/desayuno.webp`,
    alt: 'Jugo natural, pan de la casa y pebre, desayuno de campo',
    name: 'Desayunos de campo',
    nota: '"Huevitos de campo, miel sabrosa", contó un cliente que llegó a desayunar. Con pan de la casa.',
  },
]

const RESENAS = [
  {
    name: 'Matías Blanco Rojas',
    stars: 5,
    when: 'Hace 4 meses',
    text: 'Muy grato ambiente, buena relación precio/calidad, atención muy buena, lejos el mejor pebre que he probado!',
  },
  {
    name: 'Marcela Pinto',
    stars: 5,
    when: 'Hace 6 meses',
    text: 'Llegamos acá por casualidad y quedamos encantados con la comida, nos pusieron un plato con chancho en piedra y una salsa de ají con pan de la casa, muy rico. Para almorzar pedimos filete que estaba delicioso muy jugoso…',
  },
  {
    name: 'Andres Aldea',
    stars: 5,
    when: 'Hace 7 meses',
    text: 'Rica comida, atención rápida y muy buena disposición. Tuve un inconveniente y fue solucionado de inmediato con una muy buena actitud. Muy recomendado.',
  },
]

function Cordillera({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 20 L22 6 L34 15 L48 4 L62 17 L74 8 L88 19 L100 10 L118 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="48" cy="4" r="4.5" fill={color} />
    </svg>
  )
}

function Cta({
  href,
  children,
  tone = 'red',
}: {
  href: string
  children: React.ReactNode
  tone?: 'red' | 'gold' | 'ghost'
}) {
  const styles =
    tone === 'red'
      ? { backgroundColor: C.red, color: '#FDF8EE' }
      : tone === 'gold'
        ? { backgroundColor: C.gold, color: '#3A1D10' }
        : { border: `2px solid ${C.line}`, color: C.ink }
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="lc-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] tap-44"
      style={styles}
    >
      {children}
    </a>
  )
}

export default function CocineriaDeLeticiaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .lc-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .lc-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .lc-btn:active { transform: translateY(0) scale(0.97); }
        .lc-btn:focus-visible { outline: 3px solid ${C.red}; outline-offset: 3px; }
        .lc-postal { box-shadow: 0 18px 40px rgba(43,23,18,0.22), 0 3px 0 rgba(43,23,18,0.1); }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(250,244,232,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FDF8EE',
        }}
      />

      {/* ── Hero: postal del camino ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[112px] md:pt-[140px] pb-14 md:pb-20 grid grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <p
                className={`${mono.className} inline-block text-[10px] md:text-xs uppercase tracking-[0.3em] px-3 py-1.5 rounded-full border mb-6`}
                style={{ borderColor: C.line, color: C.muted }}
              >
                Restaurante familiar · El Colorado, San Clemente
              </p>
              <h1
                className={`${display.className} leading-[0.98] tracking-[-0.01em] text-[clamp(2.9rem,9vw,5.6rem)] mb-5`}
                style={{ color: C.ink }}
              >
                La Cocina
                <br />
                de <span style={{ color: C.red }}>Leticia</span>
              </h1>
              <Cordillera color={C.gold} className="w-[130px] mb-6" />
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-4 font-medium" style={{ color: C.ink }}>
                Una casa de madera en el camino a Vilches, donde la mesa
                se sirve con chancho en piedra, filete jugoso y el pebre
                que todos elogian.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-8 tap-44"
                aria-label={`${BIZ.rating} estrellas en Google, ${BIZ.reviews} reseñas`}
              >
                <Stars value={4.4} color={C.gold} className="w-[18px] h-[18px]" />
                <span className="text-sm font-bold" style={{ color: C.ink }}>
                  {BIZ.rating} en Google
                </span>
                <span className="text-sm" style={{ color: C.muted }}>
                  · {BIZ.reviews} reseñas
                </span>
              </a>
              <div className="flex flex-wrap gap-3">
                <Cta href={WA_MESA} tone="red">Reservar mesa</Cta>
                <Cta href="#platos" tone="ghost">Ver los platos</Cta>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Reveal delay={150}>
              <div className="relative max-w-[440px] mx-auto">
                <figure
                  className="lc-postal relative rotate-[-2.5deg] rounded-2xl p-3 pb-10"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Fachada de La Cocina de Leticia: casa de madera con techo rojo en El Colorado, San Clemente"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} absolute bottom-3 inset-x-0 text-center text-[10px] uppercase tracking-[0.22em]`}
                    style={{ color: C.muted }}
                  >
                    La casa · camino a Vilches
                  </figcaption>
                </figure>
                <figure
                  className="lc-postal absolute -bottom-10 -right-2 md:-right-6 w-[46%] rotate-[4deg] rounded-xl p-2.5 pb-8"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                    <Image
                      src={`${IMG}/plato-filete.webp`}
                      alt="Filete a la plancha en sartén de fierro con ensalada fresca"
                      fill
                      sizes="(min-width: 1024px) 18vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} absolute bottom-2.5 inset-x-0 text-center text-[9px] uppercase tracking-[0.2em]`}
                    style={{ color: C.muted }}
                  >
                    El filete
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta de la casa ── */}
      <div className="py-4 border-y" style={{ backgroundColor: C.red, borderColor: C.redDeep }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-y-1.5 text-sm md:text-base tracking-[0.06em]`}
          style={{ color: '#F6E7CE' }}
        >
          {CINTA.map((item) => (
            <span key={item} className="inline-flex items-center">
              <span className="px-3">{item}</span>
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill={C.gold} aria-hidden="true">
                <path d="M12 2 L14.8 9.2 L22 12 L14.8 14.8 L12 22 L9.2 14.8 L2 12 L9.2 9.2 Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── Los platos ── */}
      <section id="platos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
              Lo que sale de la cocina
            </p>
            <h2
              className={`${display.className} text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[1.0] max-w-2xl`}
              style={{ color: C.ink }}
            >
              Platos que hacen parar el auto
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              La carta cambia según el día y lo que hay fresco; estas son
              las mesas que la gente fotografía y recomienda.
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-6 md:gap-8">
          {PLATOS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 90}
              className={`col-span-12 sm:col-span-6 lg:col-span-3 ${i % 2 === 1 ? 'lg:mt-10' : ''}`}
            >
              <li>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4" style={{ backgroundColor: C.cream }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h3 className={`${display.className} text-xl md:text-[1.35rem] leading-tight mb-1.5`} style={{ color: C.ink }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {p.nota}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.redDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <div>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.gold }}>
                  Reseñas de Google
                </p>
                <h2
                  className={`${display.className} text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[1.0]`}
                  style={{ color: '#F6E7CE' }}
                >
                  Los que paran, vuelven
                </h2>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lc-btn inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 border tap-44"
                style={{ borderColor: 'rgba(246,231,206,0.35)', color: '#F6E7CE' }}
              >
                <Stars value={4.4} color={C.gold} className="w-[15px] h-[15px]" />
                <span className="text-sm font-bold">{BIZ.rating} · {BIZ.reviews} reseñas</span>
              </a>
            </div>
          </Reveal>
          <ul className="grid grid-cols-12 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 100} className="col-span-12 md:col-span-4">
                <li
                  className="h-full rounded-2xl p-6 flex flex-col gap-4"
                  style={{ backgroundColor: 'rgba(250,244,232,0.07)', border: '1px solid rgba(246,231,206,0.16)' }}
                >
                  <blockquote className="text-[15px] leading-relaxed flex-1" style={{ color: '#F1E2C6' }}>
                    “{r.text}”
                  </blockquote>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold" style={{ color: '#F6E7CE' }}>{r.name}</p>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-0.5`} style={{ color: 'rgba(246,231,206,0.55)' }}>
                        {r.when} · Google
                      </p>
                    </div>
                    <Stars value={r.stars} color={C.gold} className="w-[13px] h-[13px]" />
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
                La casa
              </p>
              <h2
                className={`${display.className} text-[clamp(2.1rem,5.5vw,3.4rem)] leading-[1.02] mb-5`}
                style={{ color: C.ink }}
              >
                Una parada de madera en el camino a Vilches
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <p>
                  En el sector El Colorado, a unos minutos de San Clemente
                  hacia el cajón, la casa de techo rojo y letrero de madera
                  espera a quienes suben a Vilches o bajan con hambre de
                  plato casero.
                </p>
                <p>
                  Adentro, mesas con mantel y espacio para familia entera;
                  afuera, patio a la sombra. La atención es de la casa:
                  directa y con cariño, como dicen sus propias reseñas.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-7">
                <Cta href={WA_LINK} tone="red">Consultar por WhatsApp</Cta>
                <Cta href={BIZ.instagram} tone="ghost">Instagram</Cta>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={120}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-7 relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Salón comedor de La Cocina de Leticia: mesas con mantel blanco y sillas de madera"
                    fill
                    sizes="(min-width: 1024px) 38vw, 55vw"
                    className="object-cover"
                  />
                </div>
                <div className="col-span-5 relative overflow-hidden rounded-2xl aspect-[4/5] mt-10">
                  <Image
                    src={`${IMG}/jardin.webp`}
                    alt="Patio arbolado junto al restaurante, mesas a la sombra"
                    fill
                    sizes="(min-width: 1024px) 28vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="mb-10 md:mb-12">
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
                Cómo llegar
              </p>
              <h2
                className={`${display.className} text-[clamp(2.1rem,5.5vw,3.4rem)] leading-[1.0]`}
                style={{ color: C.ink }}
              >
                En el camino a Vilches, sector El Colorado
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <Reveal className="col-span-12 lg:col-span-5">
              <div
                className="h-full rounded-2xl p-7 flex flex-col justify-between gap-8"
                style={{ backgroundColor: C.red, color: '#FDF8EE' }}
              >
                <div>
                  <p className={`${display.className} text-2xl md:text-3xl leading-tight mb-4`}>
                    {BIZ.name}
                  </p>
                  <ul className="space-y-3 text-sm md:text-base" style={{ color: 'rgba(253,248,238,0.9)' }}>
                    <li className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" /><circle cx="12" cy="10" r="2.4" />
                      </svg>
                      <span>{BIZ.address}, {BIZ.city}, Región del Maule</span>
                    </li>
                    <li className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>{BIZ.phoneDisplay}</span>
                    </li>
                    <li className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.5" cy="6.5" r="1.4" fill={C.gold} stroke="none" />
                      </svg>
                      <span>{BIZ.igUser}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Cta href={WA_LINK} tone="gold">Pedir indicaciones</Cta>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lc-btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] border-2 tap-44"
                    style={{ borderColor: 'rgba(253,248,238,0.5)', color: '#FDF8EE' }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-7" delay={120}>
              <div className="rounded-2xl overflow-hidden h-[300px] lg:h-full lg:min-h-[380px]" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa de La Cocina de Leticia, El Colorado, San Clemente"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.redDeep }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <Cordillera color={C.gold} className="w-[110px] mx-auto mb-6" />
            <h2
              className={`${display.className} text-[clamp(2rem,6vw,3.4rem)] leading-[1.04] mb-5`}
              style={{ color: '#F6E7CE' }}
            >
              ¿De paso a Vilches o con antojo de pebre?
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: 'rgba(246,231,206,0.85)' }}>
              Escribe a la casa y aparta tu mesa por WhatsApp.
            </p>
            <Cta href={WA_MESA} tone="gold">Reservar mesa</Cta>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink, color: '#F6E7CE' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(246,231,206,0.7)' }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,231,206,0.8)' }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
