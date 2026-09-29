/**
 * app/demos/komo-a-lo-pobre-putu/page.tsx
 *
 * Demo para Komo a lo Pobre (Putú, Constitución). Concepto visual: el
 * letrero de papel colgado que tiene el local en su fachada — piezas
 * de papel con tachuelas sobre fondo kraft, identidad de «comida al
 * paso» escrita a mano. Fotos reales de la ficha de Google Maps.
 */
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

export const metadata = demoMetadata({
  slug: 'komo-a-lo-pobre-putu',
  title: `${BIZ.full} — comida casera al paso, Putú`,
  description:
    'Restaurant de comida casera en Putú, Constitución: almuerzos, completos, masas y bebestibles. 4,8 estrellas en Google.',
  image: `${IMG}/hero-fachada.webp`,
})

const C = {
  paper: '#F6ECD9',
  kraft: '#EDDFC2',
  card: '#FDF8EE',
  ink: '#38251A',
  inkSoft: '#6B5342',
  terra: '#B8552A',
  mint: '#3E7C6C',
  mustard: '#C98F2E',
  line: '#D8C6A4',
  wood: '#241610',
} as const

// globals.css redefine --spacing-5…12; los demos restauran la escala
// default de Tailwind con estas variables.
const SPACING = {
  '--spacing-5': '1.25rem',
  '--spacing-6': '1.5rem',
  '--spacing-7': '1.75rem',
  '--spacing-8': '2rem',
  '--spacing-9': '2.25rem',
  '--spacing-10': '2.5rem',
  '--spacing-11': '2.75rem',
  '--spacing-12': '3rem',
} as React.CSSProperties

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#como-llegar' },
]

const SIGN_ITEMS = [
  'Comida al paso',
  'Asados',
  'Almuerzos',
  'Completos',
  'Masas',
  'Bebestibles',
]

const CARTA = [
  {
    img: 'sandwich.webp',
    name: 'Churrasco en pan amasado',
    note: 'El favorito de la casa: carne, tomate y palta, armado al momento.',
  },
  {
    img: 'pastel-horno.webp',
    name: 'Pastel al horno',
    note: 'Cazuela dorada, recién salida del horno, con su toque de romero.',
  },
  {
    img: 'mojitos.webp',
    name: 'Mojitos de mango',
    note: 'Con pulpa natural — los destacan una y otra vez en las reseñas.',
  },
  {
    img: 'michelada.webp',
    name: 'Cervezas y micheladas',
    note: 'Barra fría para acompañar el almuerzo o la sobremesa.',
  },
]

const REVIEWS = [
  {
    name: 'Valentina Varela',
    when: 'Hace 8 meses',
    text: 'Almorcé en este local en dos ocasiones y ambas experiencias fueron excelentes. Se notaba que el puré era casero, al igual que la mayoría de los ingredientes. Los mojitos de mango, increíbles: con pulpa natural, muy frescos.',
  },
  {
    name: 'Sonia Esquivel',
    when: 'Hace un año',
    text: 'Comimos chorreada, ¡exquisito! Son papas fritas con carne cortada, cebolla, queso y salchicha. La persona que nos atendió se quedó después de su horario para servirnos. Muchas gracias.',
  },
  {
    name: 'Melinka Valdés',
    when: 'Hace 4 años',
    text: '¡Exquisito! La atención es buenísima, muy amables, y además cuentan con opciones vegetarianas. Pedí una hamburguesa y la armé a mi gusto. Tiene las 3B: bueno, bonito y barato.',
  },
  {
    name: 'Luz Aguilar',
    when: 'Hace 3 años',
    text: 'Muy buena atención, se pasaron. Buena relación precio-calidad: abundante y rico. La carta muy amplia y original. ¡Volveremos!',
  },
]

function Tachuela({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute w-3 h-3 rounded-full shadow-inner ${className}`}
      style={{
        background: `radial-gradient(circle at 35% 30%, #B06B3F 0%, ${C.ink} 70%)`,
        boxShadow: '0 1px 2px rgba(0,0,0,0.35), inset 0 -1px 1px rgba(255,255,255,0.25)',
      }}
    />
  )
}

function SectionTitle({
  kicker,
  title,
  color = C.ink,
}: {
  kicker: string
  title: React.ReactNode
  color?: string
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p
        className={`${body.className} text-xs md:text-sm font-bold uppercase tracking-[0.24em] mb-3`}
        style={{ color: C.terra }}
      >
        {kicker}
      </p>
      <h2
        className={`${display.className} font-black text-[clamp(1.9rem,5.4vw,3.4rem)] leading-[1.05] tracking-[-0.01em]`}
        style={{ color }}
      >
        {title}
      </h2>
    </div>
  )
}

export default function KomoALoPobrePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .kl-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .kl-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .kl-btn:active { transform: translateY(0) scale(0.97); }
        .kl-btn:focus-visible { outline: 3px solid ${C.mint}; outline-offset: 3px; }
        .kl-marquee { display:flex; gap:0; width:max-content; animation: kl-scroll 26s linear infinite; }
        @keyframes kl-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .kl-marquee { animation: none; } }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del local */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="h-9 w-9 rounded-full object-cover shadow-md"
              aria-hidden="true"
            />
            <span className={`${display.className} font-black text-lg md:text-xl leading-none`}>
              {BIZ.name}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: 'rgba(246,236,217,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.terra,
          btnInk: '#FFF8EC',
        }}
      />

      {/* ── Hero: el letrero colgante ── */}
      <section
        id="inicio"
        className="relative pt-[96px] md:pt-[120px] pb-14 md:pb-20 overflow-hidden"
        style={{ backgroundColor: C.paper }}
      >
        {/* textura de madera en el borde superior */}
        <div
          className="absolute top-0 inset-x-0 h-3"
          style={{
            background: `repeating-linear-gradient(90deg, ${C.wood} 0 26px, #31201a 26px 52px)`,
          }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
            {/* letrero de papel con tachuelas */}
            <Reveal>
              <div
                className="relative mx-auto max-w-md p-7 md:p-9 rotate-[-1.2deg]"
                style={{
                  backgroundColor: C.card,
                  boxShadow: '0 14px 30px rgba(56,37,26,0.18), 0 2px 6px rgba(56,37,26,0.12)',
                  border: `1px solid ${C.line}`,
                }}
              >
                <Tachuela className="top-2.5 left-2.5" />
                <Tachuela className="top-2.5 right-2.5" />
                <div className="text-center">
                  <p
                    className={`${body.className} text-[11px] font-bold uppercase tracking-[0.3em] mb-2`}
                    style={{ color: C.inkSoft }}
                  >
                    Restaurant · Putú, Constitución
                  </p>
                  <h1
                    className={`${display.className} font-black text-[clamp(2.6rem,8vw,4.2rem)] leading-[0.98] mb-3`}
                    style={{ color: C.terra }}
                  >
                    Komo a lo Pobre
                  </h1>
                  <p
                    className={`${display.className} italic text-lg md:text-xl mb-5`}
                    style={{ color: C.mint }}
                  >
                    Comida al paso, hecha como en casa
                  </p>
                  <div
                    className="mx-auto w-24 border-t-2 border-dashed mb-5"
                    style={{ borderColor: C.line }}
                    aria-hidden="true"
                  />
                  <ul
                    className={`${display.className} text-[15px] md:text-base font-semibold leading-7`}
                    style={{ color: C.ink }}
                  >
                    {SIGN_ITEMS.map((item, i) => (
                      <li key={item}>
                        {item}
                        {i < SIGN_ITEMS.length - 1 && (
                          <span style={{ color: C.mustard }} aria-hidden="true">
                            {' '}
                            ·
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} kl-btn font-bold text-sm px-6 py-3 rounded-sm text-center tap-44`}
                    style={{ backgroundColor: C.terra, color: '#FFF8EC' }}
                  >
                    Reservar mesa
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} kl-btn font-bold text-sm px-6 py-3 rounded-sm text-center tap-44`}
                    style={{ backgroundColor: C.card, color: C.ink, border: `2px solid ${C.ink}` }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
            {/* foto fachada + datos */}
            <Reveal delay={150}>
              <div>
                <div
                  className="relative rotate-[1.4deg] p-2.5 pb-12"
                  style={{ backgroundColor: C.card, boxShadow: '0 16px 34px rgba(56,37,26,0.2)' }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/hero-fachada.webp`}
                      alt="Fachada de Komo a lo Pobre en Putú: casa de madera con letrero colgante de la carta"
                      fill
                      priority
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p
                    className={`${display.className} italic text-center text-sm md:text-base mt-3`}
                    style={{ color: C.inkSoft }}
                  >
                    La casa de madera, a pasos de la plaza de Putú
                  </p>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kl-btn mt-6 inline-flex items-center gap-2.5 text-sm font-bold tap-44 px-4 py-2.5 rounded-full"
                  style={{ backgroundColor: C.mint, color: '#FFFFFF' }}
                >
                  <Stars value={BIZ.rating} color="#FFF3D6" />
                  <span>
                    {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta del letrero ── */}
      <section
        className="py-4 overflow-hidden border-y-2 border-dashed"
        style={{ backgroundColor: C.terra, borderColor: C.card }}
        aria-label="Lo que ofrece la casa"
      >
        <div className="kl-marquee" aria-hidden="true">
          {[0, 1].map((n) => (
            <div
              key={n}
              className={`${display.className} flex items-center gap-6 px-3 font-bold text-sm md:text-base uppercase tracking-[0.18em] whitespace-nowrap`}
              style={{ color: '#FFF3DF' }}
            >
              {SIGN_ITEMS.map((item) => (
                <span key={`${n}-${item}`} className="flex items-center gap-6">
                  {item}
                  <span style={{ color: C.mustard }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── De la cocina ── */}
      <section id="carta" className="py-16 md:py-24" style={{ backgroundColor: C.kraft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              kicker="Lo que sale de la cocina"
              title={
                <>
                  Platos de casa,
                  <br />
                  como promete el letrero
                </>
              }
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {CARTA.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <figure
                  className="relative p-2.5 pb-5 h-full"
                  style={{
                    backgroundColor: C.card,
                    boxShadow: '0 10px 24px rgba(56,37,26,0.16)',
                    transform: `rotate(${i % 2 === 0 ? '-' : ''}1.1deg)`,
                  }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={`${IMG}/${p.img}`}
                      alt={`${p.name} en ${BIZ.name}`}
                      fill
                      sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="pt-4 px-1">
                    <h3
                      className={`${display.className} font-black text-lg leading-tight mb-1.5`}
                      style={{ color: C.ink }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.inkSoft }}>
                      {p.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p
              className={`${display.className} italic text-center text-base md:text-lg mt-10`}
              style={{ color: C.inkSoft }}
            >
              La carta es amplia y cambia según lo fresco del día — incluye
              opciones vegetarianas y comida para llevar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: notas pegadas ── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              kicker={`${String(BIZ.rating).replace('.', ',')} en Google · ${BIZ.reviews} reseñas`}
              title="Lo que dice la gente"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <blockquote
                  className="relative p-6 md:p-7 h-full"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#FFFDF6' : '#F3E6CB',
                    boxShadow: '0 8px 20px rgba(56,37,26,0.14)',
                    transform: `rotate(${i % 2 === 0 ? '-' : ''}0.6deg)`,
                    border: `1px solid ${C.line}`,
                  }}
                >
                  <Tachuela className="top-2 right-2" />
                  <div className="flex items-center gap-2 mb-3">
                    <Stars value={5} color={C.mustard} />
                  </div>
                  <p className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{r.text}”
                  </p>
                  <footer className="text-xs font-bold uppercase tracking-wider" style={{ color: C.inkSoft }}>
                    {r.name} · <span className="normal-case font-semibold">{r.when}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Putú + interior ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.mint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div>
              <p
                className={`${body.className} text-xs md:text-sm font-bold uppercase tracking-[0.24em] mb-3`}
                style={{ color: '#DFF0E8' }}
              >
                El pueblo y la casa
              </p>
              <h2
                className={`${display.className} font-black text-[clamp(1.9rem,5vw,3.2rem)] leading-[1.05] mb-5`}
                style={{ color: '#FFFFFF' }}
              >
                Putú, a un costado
                <br />
                del camino a la costa
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Adentro: mesas de madera, sillas menta y la cocina a la vista.
                Afuera: la plaza de Putú con su pileta, a pasos del local.
                Comida casera, atención directa y sobremesa sin apuro.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} kl-btn font-bold text-sm px-6 py-3 rounded-sm tap-44`}
                  style={{ backgroundColor: '#FFFFFF', color: C.mint }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} kl-btn font-bold text-sm px-6 py-3 rounded-sm tap-44`}
                  style={{ border: '2px solid rgba(255,255,255,0.85)', color: '#FFFFFF' }}
                >
                  {BIZ.igUser}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative p-2 pb-8 rotate-[-1.6deg] col-span-2 sm:col-span-1"
                style={{ backgroundColor: C.card, boxShadow: '0 12px 26px rgba(0,0,0,0.2)' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/plaza-putu.webp`}
                    alt="Plaza de Putú: pileta de piedra rodeada de palmeras"
                    fill
                    sizes="(min-width: 640px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${display.className} italic text-center text-xs mt-2.5`} style={{ color: C.inkSoft }}>
                  Plaza de Putú
                </p>
              </div>
              <div
                className="relative p-2 pb-8 rotate-[1.8deg] col-span-2 sm:col-span-1"
                style={{ backgroundColor: C.card, boxShadow: '0 12px 26px rgba(0,0,0,0.2)' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Interior de Komo a lo Pobre: mesas y sillas color menta, muro de ladrillo"
                    fill
                    sizes="(min-width: 640px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${display.className} italic text-center text-xs mt-2.5`} style={{ color: C.inkSoft }}>
                  El salón, adentro
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="como-llegar" className="py-16 md:py-24" style={{ backgroundColor: C.kraft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              kicker="Cómo llegar"
              title={
                <>
                  Aldea 450, Putú
                </>
              }
            />
          </Reveal>
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div
                className="relative p-6 md:p-8 h-full flex flex-col justify-center"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}`, boxShadow: '0 10px 24px rgba(56,37,26,0.14)' }}
              >
                <Tachuela className="top-2.5 left-2.5" />
                <Tachuela className="top-2.5 right-2.5" />
                <ul className="space-y-5 text-[15px] md:text-base">
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.terra} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.4" />
                    </svg>
                    <div>
                      <p className="font-bold" style={{ color: C.ink }}>{BIZ.address}</p>
                      <p style={{ color: C.inkSoft }}>A pasos de la plaza de Putú, camino a la costa</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.terra} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    <div>
                      {BIZ.hours.map(([d, h]) => (
                        <p key={d} style={{ color: C.inkSoft }}>
                          <span className="font-bold" style={{ color: C.ink }}>{d}:</span> {h}
                        </p>
                      ))}
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.terra} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 5h16v14H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                    <div>
                      <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-2" style={{ color: C.ink }}>
                        {BIZ.phoneDisplay}
                      </a>
                      <p style={{ color: C.inkSoft }}>Mesas con consumo en el local, retiro y delivery</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative h-72 md:h-full min-h-[300px] overflow-hidden border-4"
                style={{ borderColor: C.card, boxShadow: '0 14px 30px rgba(56,37,26,0.2)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.full}, Putú`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA + footer ── */}
      <section className="py-16 md:py-20 text-center" style={{ backgroundColor: C.terra }}>
        <Reveal>
          <p
            className={`${display.className} italic text-xl md:text-2xl mb-3`}
            style={{ color: '#FFE8CF' }}
          >
            ¿De paso por Putú?
          </p>
          <h2
            className={`${display.className} font-black text-[clamp(2rem,6vw,3.6rem)] leading-[1.02] mb-8`}
            style={{ color: '#FFFFFF' }}
          >
            La mesa está puesta
          </h2>
          <a
            href={WA_LINK_MESA}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} kl-btn inline-block font-bold text-base px-9 py-4 rounded-sm tap-44`}
            style={{ backgroundColor: C.card, color: C.terra }}
          >
            Reservar por WhatsApp
          </a>
        </Reveal>
      </section>

      <footer className="py-8" style={{ backgroundColor: C.wood }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold" style={{ color: 'rgba(246,236,217,0.75)' }}>
            {BIZ.full} · {BIZ.address}
          </p>
          <div className="flex items-center gap-5 text-sm font-semibold" style={{ color: 'rgba(246,236,217,0.75)' }}>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44 inline-flex items-center">
              Instagram
            </a>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44 inline-flex items-center">
              Facebook
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44 inline-flex items-center">
              Maps
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </div>
  )
}
