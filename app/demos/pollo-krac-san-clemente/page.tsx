import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({ src: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

// La marca: el rojo y el mostaza de su logo y de la carta; el cuadrille
// del papel con que sirven las canastillas de papas.
const C = {
  red: '#D6281C',
  ember: '#A8150E',
  coal: '#3A110E',
  mustard: '#F2AE30',
  cream: '#FFF6E6',
  card: '#FFFBF2',
  ink: '#2E1512',
  muted: '#6E4A40',
  line: 'rgba(46,21,18,0.14)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'pollo-krac-san-clemente',
  title: 'Pollo Krac — sándwiches, completos y pollo en San Clemente',
  description:
    'Sándwiches de pollo, completos, hamburguesas y papas en canastilla en Carlos Silva Renard 892, San Clemente. Salón, retiro en la puerta y entrega a domicilio.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El mesón', href: '#meson' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const TICKET = [
  { item: 'Ass italiano', price: '$3.500' },
  { item: 'Ass con todo', price: '$3.500' },
  { item: 'Ass solo carne', price: '$2.500' },
  { item: 'Agrega vaso bebida 350 cc', price: '$1.500' },
]

const CINTA = [
  'Sándwich pollo krac',
  'Hamburguesas',
  'Completos',
  'Empanadas fritas',
  'Costillar',
  'Papas en canastilla',
  'Chorrillana',
  'Delivery a domicilio',
]

const PLATOS = [
  {
    src: `${IMG}/sandwich.webp`,
    name: 'El sándwich de la casa',
    desc: 'El “pollo krac”: pollo con palta y tomate en pan grande. El que piden por nombre en las reseñas.',
  },
  {
    src: `${IMG}/empanadas.webp`,
    name: 'Empanadas fritas',
    desc: 'Doradas en canastilla sobre papel cuadrillé. Para picar o para llevar.',
  },
  {
    src: `${IMG}/costillar.webp`,
    name: 'Costillar y papas',
    desc: 'Plato contundente de la carta: costillar con papas fritas y ensalada.',
  },
]

const OPINIONES = [
  {
    who: 'Belén Moreno',
    text: 'Recomiendo este lugar, sobre todo por sus hamburguesas: estaban muy ricas. La atención fue rápida, ideal para pasar o salir del apuro.',
  },
  {
    who: 'Syntia P. Alvarado',
    text: 'Viajamos desde La Serena y nos encantó a mi familia y a mí. Excelente comida, todo muy fresco y el personal súper agradable.',
  },
]

/** Mantel cuadrillé: borde rojo-blanco del papel de las canastillas. */
function Cuadro({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 24 12" preserveAspectRatio="none" className={`block w-full h-[12px] ${flip ? 'rotate-180' : ''}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="pk-check" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill={C.cream} />
          <rect x="4" y="4" width="4" height="4" fill={C.cream} />
        </pattern>
      </defs>
      <rect width="24" height="12" fill={C.red} />
      <rect width="24" height="6" fill="url(#pk-check)" />
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'red' | 'cream' | 'mustard' | 'outline'; external?: boolean }) {
  const st =
    tone === 'red' ? { backgroundColor: C.red, color: C.cream }
    : tone === 'cream' ? { backgroundColor: C.cream, color: C.coal }
    : tone === 'mustard' ? { backgroundColor: C.mustard, color: C.coal }
    : { border: `1.5px solid ${C.cream}`, color: C.cream }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-extrabold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function PolloKracPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}>
      <style>{`
        @keyframes pk-cinta { to { transform: translateX(-50%) } }
        .pk-ticket-row { display: flex; align-items: baseline; gap: 10px; }
        .pk-ticket-row .dots { flex: 1; border-bottom: 2px dotted rgba(46,21,18,0.35); transform: translateY(-4px); }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'dark', bar: 'rgba(58,17,14,0.95)', ink: C.cream, line: 'rgba(255,246,230,0.18)', btnBg: C.mustard, btnInk: C.coal }}
        ctaLabel="Pedir"
      />

      <main id="inicio">
        {/* ── HERO: el mesón de Carlos Silva Renard ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.coal }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: C.mustard }}>
                  Carlos Silva Renard 892 · San Clemente
                </p>
                <h1 className={`${display.className} uppercase leading-[0.95] text-[clamp(3rem,11vw,6.2rem)] mb-6`} style={{ color: C.cream }}>
                  Pollo <span style={{ color: C.red, WebkitTextStroke: `1.5px ${C.cream}` }}>krac</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: 'rgba(255,246,230,0.85)' }}>
                  Sándwich de pollo, completos, hamburguesas y empanadas fritas en el centro de San Clemente. Salón, retiro en la puerta y delivery.
                </p>
                <p className="flex items-center gap-2.5 mb-8 text-sm" style={{ color: C.cream }}>
                  <Stars value={BIZ.rating} color={C.mustard} />
                  <span className={`${mono.className} text-xs`} style={{ color: 'rgba(255,246,230,0.8)' }}>
                    {BIZ.ratingLabel} · {BIZ.reviews} opiniones en Google
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="mustard">Pedir por WhatsApp</Btn>
                  <Btn href="#carta" tone="outline" external={false}>Ver la carta</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={130}>
              <figure className="relative">
                <div className="overflow-hidden rounded-[4px] border-4" style={{ borderColor: C.cream, boxShadow: '10px 10px 0 rgba(214,40,28,0.85)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/hero.webp`} alt="Hamburguesa de pollo apanado con papas fritas de Pollo Krac" className="w-full aspect-[5/4] object-cover" loading="eager" />
                </div>
                <figcaption
                  className={`${display.className} absolute -bottom-4 left-4 px-4 py-2 text-lg uppercase tracking-wide`}
                  style={{ backgroundColor: C.mustard, color: C.coal, transform: 'rotate(-3deg)' }}
                >
                  desde $2.500 el ass
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Cuadro flip />
        </section>

        {/* ── CINTA: lo que pide la gente ── */}
        <div className="overflow-hidden py-4" style={{ backgroundColor: C.mustard }} aria-hidden="true">
          <div className={`${display.className} flex gap-8 whitespace-nowrap uppercase text-xl w-max`} style={{ color: C.coal, animation: 'pk-cinta 26s linear infinite' }}>
            {[...CINTA, ...CINTA].map((s, i) => (
              <span key={i} className="flex items-center gap-8">
                {s}
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.red }} />
              </span>
            ))}
          </div>
        </div>

        {/* ── LA CARTA: el ticket de la casa ── */}
        <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <figure className="relative">
                <div className="overflow-hidden rounded-[4px] border-4" style={{ borderColor: C.coal, boxShadow: '0 14px 34px rgba(58,17,14,0.18)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/carta.webp`} alt="Carta real de Pollo Krac con los precios de los sándwiches ass" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.ember }}>
                  la carta, tal como la imprimen
                </figcaption>
              </figure>
            </Reveal>
            <div>
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.red }}>
                  El ticket de la casa
                </p>
                <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] mb-6`} style={{ color: C.coal }}>
                  Los ass <span style={{ color: C.red }}>de siempre</span>
                </h2>
                <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                  Precios de la carta que el propio local publicó en su ficha. El resto — completos, hamburguesas, costillar — se confirma al pedir.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <div className="rounded-[4px] p-6 border-4" style={{ backgroundColor: C.card, borderColor: C.coal, boxShadow: '6px 6px 0 rgba(58,17,14,0.9)' }}>
                  {TICKET.map((t) => (
                    <div key={t.item} className="pk-ticket-row py-2.5 border-b last:border-b-0" style={{ borderColor: C.line }}>
                      <span className="text-base font-extrabold" style={{ color: C.ink }}>{t.item}</span>
                      <span className="dots" aria-hidden="true" />
                      <span className={`${mono.className} text-base font-semibold`} style={{ color: C.ember }}>{t.price}</span>
                    </div>
                  ))}
                  <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    * valores de la carta publicada por el local
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── LOS PLATOS ── */}
        <section className="relative" style={{ backgroundColor: C.coal }}>
          <Cuadro />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] text-center max-w-2xl mx-auto`} style={{ color: C.cream }}>
                Lo que sale <span style={{ color: C.mustard }}>de la freidora</span>
              </h2>
              <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: 'rgba(255,246,230,0.75)' }}>
                Fotos reales del local y de sus platos, bajadas de su propia ficha.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-3 gap-5">
              {PLATOS.map((p, i) => (
                <Reveal key={p.name} delay={i * 110}>
                  <article className="h-full">
                    <figure className="overflow-hidden rounded-[4px] border-4" style={{ borderColor: C.cream }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.src} alt={p.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </figure>
                    <h3 className={`${display.className} uppercase text-2xl mt-4`} style={{ color: C.mustard }}>{p.name}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: 'rgba(255,246,230,0.78)' }}>{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Cuadro flip />
        </section>

        {/* ── EL MESÓN ── */}
        <section id="meson" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal>
                <figure className="overflow-hidden rounded-[4px] border-4" style={{ borderColor: C.coal }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/interior.webp`} alt="Mesón y mesas de madera del local de Pollo Krac" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </figure>
              </Reveal>
              <Reveal delay={90}>
                <figure className="overflow-hidden rounded-[4px] border-4 sm:mt-8" style={{ borderColor: C.coal }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/salon.webp`} alt="Salón comedor de Pollo Krac con público almorzando" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </figure>
              </Reveal>
            </div>
            <Reveal delay={60}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.red }}>
                El mesón
              </p>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] mb-5`} style={{ color: C.coal }}>
                Salón, retiro <span style={{ color: C.red }}>o a tu puerta</span>
              </h2>
              <p className="text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                Un local grande de la calle principal: se come en el salón, se retira en la puerta o llega a domicilio. Su ficha lista los tres servicios.
              </p>
              <ul className="flex flex-wrap gap-2.5 mb-8">
                {BIZ.servicios.map((s) => (
                  <li key={s} className={`${mono.className} text-xs uppercase tracking-[0.12em] px-3.5 py-2 rounded-full`} style={{ backgroundColor: C.coal, color: C.cream }}>
                    {s}
                  </li>
                ))}
              </ul>
              <Btn href={WA_LINK} tone="red">Pedir a domicilio</Btn>
            </Reveal>
          </div>
        </section>

        {/* ── OPINIONES ── */}
        <section id="opiniones" className="scroll-mt-20 border-t" style={{ backgroundColor: C.card, borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 items-start">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.red }}>
                  Opiniones
                </p>
                <p className={`${display.className} uppercase leading-none text-[clamp(3.4rem,10vw,5.2rem)]`} style={{ color: C.coal }}>
                  {BIZ.ratingLabel}
                </p>
                <Stars value={BIZ.rating} color={C.red} className="w-5 h-5" />
                <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  {BIZ.reviews} opiniones en Google
                </p>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {OPINIONES.map((o, i) => (
                  <Reveal key={o.who} delay={i * 110}>
                    <blockquote className="rounded-[4px] p-6 h-full border-2" style={{ backgroundColor: C.cream, borderColor: C.coal, boxShadow: '5px 5px 0 rgba(214,40,28,0.55)' }}>
                      <p className="text-[15px] leading-relaxed" style={{ color: C.ink }}>“{o.text}”</p>
                      <footer className={`${mono.className} mt-4 text-xs uppercase tracking-[0.14em]`} style={{ color: C.ember }}>
                        {o.who} · reseña de Google
                      </footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO LLEGAR ── */}
        <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.red }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] mb-6`} style={{ color: C.coal }}>
                Carlos Silva <span style={{ color: C.red }}>Renard 892</span>
              </h2>
              <address className="not-italic text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <dl className="mt-6 space-y-2">
                {BIZ.hours.map((h) => (
                  <div key={h.d} className="pk-ticket-row">
                    <dt className="text-sm font-bold" style={{ color: C.ink }}>{h.d}</dt>
                    <dd className="dots" aria-hidden="true" />
                    <dd className={`${mono.className} text-sm`} style={{ color: C.ember }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="red">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="mustard">{BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[4px] overflow-hidden border-4 h-full min-h-[320px]" style={{ borderColor: C.coal, boxShadow: '8px 8px 0 rgba(58,17,14,0.5)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.long}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative" style={{ backgroundColor: C.red }}>
          <Cuadro />
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98]`} style={{ color: C.cream }}>
                ¿Hambre de <span style={{ textDecoration: 'underline', textDecorationColor: C.mustard, textDecorationThickness: '6px', textUnderlineOffset: '8px' }}>pollo krac</span>?
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(255,246,230,0.9)' }}>
                Pide por WhatsApp y lo retiras en la puerta o te lo llevan.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="mustard">Pedir por WhatsApp</Btn>
              </div>
            </Reveal>
          </div>
          <Cuadro flip />
        </section>
      </main>

      <footer style={{ backgroundColor: C.coal, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} uppercase text-2xl`}>{BIZ.long}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,246,230,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,246,230,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
