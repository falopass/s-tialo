import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const serif = localFont({ src: '../../fonts/marcellus/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/jost/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' })

// La identidad: el petróleo de los muros del club, el mantel rojo de su
// cocina y el piso de ajedrez del salón central restaurado tras el 27F.
const C = {
  deep: '#0E2024',
  pine: '#16333A',
  ivory: '#F2ECDD',
  card: '#FAF6EA',
  mantel: '#A63322',
  gold: '#B08D3E',
  ink: '#1E2626',
  muted: '#5C6663',
  line: 'rgba(30,38,38,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'club-union-social',
  title: 'Club Unión Social — el club de la esquina de Talca',
  description:
    'Casona patrimonial restaurada, cocina chilena de colación y salones de eventos en 3 Oriente 1040, Talca. Club Unión Social.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'El salón', href: '#salon' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const COCINA = [
  {
    n: '01',
    src: `${IMG}/pastel.webp`,
    name: 'La colación del día',
    desc: 'El plato insignia de su carta: pastel de papa con ensalada, pan y postre. La colación que nombran una y otra vez en las reseñas.',
  },
  {
    n: '02',
    src: `${IMG}/pilpil.webp`,
    name: 'Camarón al pil pil',
    desc: 'Ajo, ají y mantequilla en fuente de barro caliente. Un clásico de la cocina del club.',
  },
  {
    n: '03',
    src: `${IMG}/paila.webp`,
    name: 'Paila marina',
    desc: 'Mariscos del litoral maulino en caldo abundante, servidos en la paila de greda.',
  },
  {
    n: '04',
    src: `${IMG}/frito.webp`,
    name: 'Pescado frito',
    desc: 'Frito entero con papas y ensalada: la cocina chilena de la casa, sin vueltas.',
  },
]

const DESTACAN = [
  'la colación del día',
  'el edificio patrimonial restaurado',
  'los precios de picada de barrio',
  'la atención del salón',
]

/** Piso de ajedrez del salón central, en faja fina de un tablero. */
function Ajedrez({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 32 8" preserveAspectRatio="none" className={`block w-full h-[10px] ${flip ? 'rotate-180' : ''}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="cu-ajedrez" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill={C.ivory} />
          <rect x="4" y="4" width="4" height="4" fill={C.ivory} />
        </pattern>
      </defs>
      <rect width="32" height="8" fill={C.deep} />
      <rect width="32" height="8" fill="url(#cu-ajedrez)" opacity="0.85" />
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'ivory' | 'mantel' | 'ghost'; external?: boolean }) {
  const st =
    tone === 'ivory' ? { backgroundColor: C.ivory, color: C.deep }
    : tone === 'mantel' ? { backgroundColor: C.mantel, color: C.ivory }
    : { border: `1.5px solid ${C.ivory}`, color: C.ivory }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${serif.className} inline-flex items-center justify-center px-7 py-3 text-[15px] tracking-[0.08em] uppercase transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function ClubUnionSocialPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.ivory, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${serif.className} tracking-[0.12em]`}
        theme={{ over: 'dark', bar: 'rgba(14,32,36,0.94)', ink: C.ivory, line: 'rgba(242,236,221,0.18)', btnBg: C.gold, btnInk: C.deep }}
        ctaLabel="Reservar"
      />

      <main id="inicio">
        {/* ── HERO: la esquina del club ── */}
        <section className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.deep }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/hero.webp`} alt="Salón principal del Club Unión Social en Talca" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(14,32,36,0.55) 0%, rgba(14,32,36,0.25) 40%, rgba(14,32,36,0.92) 100%)' }} aria-hidden="true" />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-36">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.gold }}>
                Club · cocina chilena · salones
              </p>
              <h1 className={`${serif.className} leading-[1.02] text-[clamp(2.7rem,9vw,5.6rem)] mb-5`} style={{ color: C.ivory }}>
                Club Unión Social
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-4" style={{ color: 'rgba(242,236,221,0.88)' }}>
                La casona de 3 Oriente que Talca levantó de nuevo después del terremoto: salones de club, piso de ajedrez y una cocina de colación que sigue llenando mesas.
              </p>
              <p className="flex items-center gap-2.5 mb-8 text-sm" style={{ color: C.ivory }}>
                <Stars value={BIZ.rating} color={C.gold} />
                <span className={`${mono.className} text-xs`} style={{ color: 'rgba(242,236,221,0.8)' }}>
                  {BIZ.ratingLabel} · {BIZ.reviews} opiniones en Google
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="ivory">Consultar por WhatsApp</Btn>
                <Btn href="#casa" tone="ghost" external={false}>Conocer la casa</Btn>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── LA CASA: patrimonio levantado de nuevo ── */}
        <section id="casa" className="scroll-mt-20">
          <Ajedrez />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.mantel }}>
                La casa
              </p>
              <h2 className={`${serif.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
                Una casona del siglo XIX que volvió a abrir sus puertas
              </h2>
              <p className="text-base leading-relaxed max-w-md mb-4" style={{ color: C.muted }}>
                El inmueble del club es parte del patrimonio del centro de Talca. Tras el terremoto de 2010 fue restaurado pieza a pieza: el salón central con su piso de ajedrez, las lámparas, los cuadros y la sala de pool quedaron como antes.
              </p>
              <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                Hoy la casa funciona como club social, restaurante de colación y sede de reuniones y celebraciones — el mismo rol que cumplió por generaciones en la esquina de 3 Oriente.
              </p>
              <ul className="space-y-3">
                {['Salón central con piso de ajedrez', 'Salón de pool y salas de reunión', 'Fachada y salones restaurados tras el 27F'].map((s) => (
                  <li key={s} className="flex items-baseline gap-3 text-[15px]" style={{ color: C.ink }}>
                    <span className="inline-block w-3 h-3 shrink-0 translate-y-[1px]" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid gap-4">
              <Reveal delay={80}>
                <figure className="overflow-hidden" style={{ boxShadow: '0 16px 40px rgba(14,32,36,0.22)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/salon-rojo.webp`} alt="Salón del club con paredes rojas, lámparas y cuadros" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </figure>
              </Reveal>
              <Reveal delay={160}>
                <figure className="overflow-hidden ml-8" style={{ boxShadow: '0 16px 40px rgba(14,32,36,0.22)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/placa.webp`} alt="Placa patrimonial del inmueble del Club Unión Social" className="w-full aspect-[16/9] object-cover" loading="lazy" />
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── LA COCINA: El Escondite ── */}
        <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-12">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.gold }}>
                    La cocina del club
                  </p>
                  <h2 className={`${serif.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.ivory }}>
                    La carta de <span style={{ color: C.gold }}>El Escondite</span>
                  </h2>
                </div>
                <p className="mt-4 md:mt-0 max-w-xs text-[15px] leading-relaxed" style={{ color: 'rgba(242,236,221,0.75)' }}>
                  Comida chilena de cocina diaria, servida en los salones del club. Fotos reales de su ficha.
                </p>
              </div>
            </Reveal>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-10">
              {COCINA.map((p, i) => (
                <li key={p.n}>
                  <Reveal delay={i * 90}>
                    <article className="grid grid-cols-[56px_1fr] gap-4 items-start">
                      <span className={`${mono.className} text-sm pt-1`} style={{ color: C.gold }}>{p.n}</span>
                      <div>
                        <figure className="overflow-hidden mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.src} alt={p.name} className="w-full aspect-[16/9] object-cover" loading="lazy" />
                        </figure>
                        <h3 className={`${serif.className} text-2xl mb-1.5`} style={{ color: C.ivory }}>{p.name}</h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(242,236,221,0.75)' }}>{p.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── EL SALÓN: eventos y reuniones ── */}
        <section id="salon" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <Reveal>
              <figure className="overflow-hidden" style={{ boxShadow: '0 16px 40px rgba(14,32,36,0.2)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/evento.webp`} alt="Salón de eventos del club preparado para una celebración" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.mantel }}>
                El salón
              </p>
              <h2 className={`${serif.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
                Las celebraciones vuelven al salón central
              </h2>
              <p className="text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                Matrimonios, aniversarios, almuerzos de empresa y reuniones de club se hacen en los salones restaurados, con la cocina de la casa incluida. La coordinación se hace directo por WhatsApp.
              </p>
              <ul className="space-y-2.5 mb-8">
                {BIZ.servicios.map((s) => (
                  <li key={s} className={`${mono.className} inline-block text-xs uppercase tracking-[0.12em] px-3.5 py-2 mr-2 mb-1`} style={{ backgroundColor: C.pine, color: C.ivory }}>
                    {s}
                  </li>
                ))}
              </ul>
              <Btn href={WA_LINK} tone="mantel">Consultar fecha</Btn>
            </Reveal>
          </div>
        </section>

        {/* ── OPINIONES ── */}
        <section className="border-t" style={{ backgroundColor: C.card, borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.mantel }}>
                Lo que dicen
              </p>
              <p className={`${serif.className} leading-none text-[clamp(3.4rem,9vw,5rem)]`} style={{ color: C.deep }}>
                {BIZ.ratingLabel}
              </p>
              <Stars value={BIZ.rating} color={C.mantel} className="w-5 h-5" />
              <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                {BIZ.reviews} opiniones en Google
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className={`${serif.className} text-xl md:text-2xl leading-relaxed mb-5`} style={{ color: C.ink }}>
                En las reseñas se repiten cuatro cosas:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {DESTACAN.map((d) => (
                  <li key={d} className="flex items-baseline gap-3 text-[15px]" style={{ color: C.ink }}>
                    <span className="inline-block w-3 h-3 shrink-0 translate-y-[1px]" style={{ backgroundColor: C.mantel }} aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── CÓMO LLEGAR ── */}
        <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-stretch">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.mantel }}>
                Cómo llegar
              </p>
              <h2 className={`${serif.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
                La esquina de <span style={{ color: C.mantel }}>3 Oriente</span>
              </h2>
              <address className="not-italic text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <dl className="mt-6 space-y-2.5">
                {BIZ.hours.map((h) => (
                  <div key={h.d} className="flex items-baseline gap-4 border-b pb-2.5" style={{ borderColor: C.line }}>
                    <dt className="text-sm font-semibold" style={{ color: C.ink }}>{h.d}</dt>
                    <dd className={`${mono.className} ml-auto text-sm`} style={{ color: C.mantel }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="mantel">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="ivory">{BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden h-full min-h-[320px]" style={{ boxShadow: '0 16px 40px rgba(14,32,36,0.2)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative" style={{ backgroundColor: C.mantel }}>
          <Ajedrez />
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <h2 className={`${serif.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.ivory }}>
                El club te espera en la esquina de siempre
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(242,236,221,0.9)' }}>
                Colación al mediodía, un salón para celebrar o una mesa para la conversa. Consulta por WhatsApp.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="ivory">Escribir al club</Btn>
              </div>
            </Reveal>
          </div>
          <Ajedrez flip />
        </section>
      </main>

      <footer style={{ backgroundColor: C.deep, color: C.ivory }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${serif.className} text-2xl tracking-[0.08em]`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(242,236,221,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(242,236,221,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Consultar por WhatsApp al ${BIZ.name}`} />
    </div>
  )
}
