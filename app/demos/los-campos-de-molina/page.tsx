import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, MENU, RESENAS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «la fuente de soda del camino». La fachada pintada a mano
 * y el muro amarillo del comedor fijan la paleta: papel crema, tinta castaña
 * y el amarillo ocre del interior. La carta real va en un ticket de caja con
 * bordes perforados — no en una carta tipográfica — y los platos cruzan en
 * una banda de fotos con scroll. Passion One pone la pintura de letrero,
 * DM Sans el cuerpo, Plex Mono los precios y datos.
 */
const C = {
  papel: '#F7F0DC',
  card: '#FDF9EC',
  ink: '#33200F',
  castano: '#241203',
  ocre: '#C88A1A',
  ocreInk: '#2E1B02',
  muted: '#7A6040',
  line: 'rgba(51,32,15,0.18)',
}

export const metadata = demoMetadata({
  slug: 'los-campos-de-molina',
  title: 'Los Campos de Molina — Restaurant en Libertad',
  description:
    'Fuente de soda y restaurante en Libertad 1481, Molina: comida casera, sándwiches y ensaladas, todos los días de 9 a 17. Demo de sitio web por Sitiazo.',
  image: IMG.fachada,
})

const PLATOS = [
  { img: IMG.chuleta, alt: 'Chuleta con papas fritas servida en fuente, en Los Campos de Molina', tag: 'Chuleta con papas' },
  { img: IMG.pollo, alt: 'Pollo al jugo con arroz, plato casero de Los Campos de Molina', tag: 'Pollo al jugo' },
  { img: IMG.asado, alt: 'Pollo asado con arroz servido en el restaurante', tag: 'Pollo asado' },
  { img: IMG.cazuela, alt: 'Cazuela servida en paila greda en Los Campos de Molina', tag: 'Cazuela' },
  { img: IMG.ensalada, alt: 'Ensalada surtida del restaurante Los Campos de Molina', tag: 'Ensalada surtida' },
]

function RacionSelo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" />
      <path d="M11 15 h18 M13 20 h14 M15 25 h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.papel, color: C.ink }}
    >
      <BlitzNav
        name={<span>{BIZ.short}</span>}
        logoSrc={IMG.logo}
        links={[
          { label: 'Los platos', href: '#platos' },
          { label: 'La carta', href: '#carta' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Pedir por WhatsApp"
        fontClass={display.className}
        theme={{ over: 'light', bar: C.papel, ink: C.ink, line: C.line, btnBg: C.ocre, btnInk: C.ocreInk }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-12 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                Fuente de soda · Libertad 1481 · Molina
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} mt-4 leading-[1.02] tracking-tight text-[42px] md:text-[64px]`}
                style={{ color: C.ink }}
              >
                El sabor del campo, a su mesa en Molina
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Comida casera y sándwiches generosos, abierto todos los días de 9 a 17.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-12 px-6 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.ocre, color: C.ocreInk }}
                >
                  Pedir por WhatsApp
                </a>
                <span
                  className="inline-flex items-center gap-2 h-12 px-4 rounded-full border text-sm"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  <Stars value={BIZ.rating} color={C.ocre} className="w-3.5 h-3.5" />
                  4,2 · 100 reseñas
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative">
              <figure
                className="overflow-hidden rounded-[1.75rem] border-4 shadow-lg rotate-1"
                style={{ borderColor: C.card }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                <img
                  src={IMG.fachada}
                  alt="Fachada del Restaurant Los Campos de Molina, con su letrero pintado a mano"
                  className="w-full aspect-[5/4] object-cover"
                  loading="eager"
                />
              </figure>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo recortado de su ficha */}
              <img
                src={IMG.logo}
                alt="Sello de Los Campos de Molina: el sabor del campo a su mesa"
                className="absolute -bottom-6 -left-4 w-24 h-24 md:w-28 md:h-28 rounded-full shadow-md -rotate-6 bg-white"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Los platos (banda con scroll) ── */}
      <section id="platos" className="py-14 md:py-18" style={{ backgroundColor: C.castano }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(247,240,220,0.55)' }}>
                  De la cocina a la fuente
                </p>
                <h2 className={`${display.className} mt-3 text-3xl md:text-5xl tracking-tight`} style={{ color: C.papel }}>
                  Los platos que cruzan la mesa
                </h2>
              </div>
              <p className={`${mono.className} hidden md:block text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(247,240,220,0.45)' }}>
                Desliza →
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-8 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-4 md:gap-5 px-5 md:px-8 w-max mx-auto md:mx-0">
              {PLATOS.map((p) => (
                <figure key={p.tag} className="relative snap-center shrink-0 w-[62vw] md:w-[290px] overflow-hidden rounded-3xl">
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                  <img src={p.img} alt={p.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  <figcaption
                    className={`${mono.className} absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.12em]`}
                    style={{ backgroundColor: 'rgba(36,18,3,0.85)', color: C.papel }}
                  >
                    {p.tag}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
        <p className={`${mono.className} mt-2 px-5 md:px-8 max-w-6xl mx-auto text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(247,240,220,0.45)' }}>
          Fotos reales de su ficha de Google
        </p>
      </section>

      {/* ── La carta (ticket de caja) ── */}
      <section id="carta" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            Precios de la casa, tal como están en la pizarra
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl tracking-tight`} style={{ color: C.ink }}>
            La carta corta de siempre
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-[1fr_1.35fr] gap-8 items-start">
          <Reveal>
            <figure
              className="overflow-hidden rounded-[1.75rem] border-4 shadow-lg -rotate-1"
              style={{ borderColor: C.card }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
              <img
                src={IMG.carta}
                alt="La carta de Los Campos de Molina anotada en su pizarra con los precios del día"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="relative rounded-lg p-6 md:p-8 shadow-md"
              style={{
                backgroundColor: '#FFFDF5',
                borderTop: `2px dashed ${C.line}`,
                borderBottom: `2px dashed ${C.line}`,
                backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 27px, rgba(51,32,15,0.045) 27px 28px)',
              }}
            >
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-dashed" style={{ borderColor: C.line }}>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] font-bold`} style={{ color: C.ink }}>
                  Sándwiches
                </p>
                <RacionSelo className="w-8 h-8" />
              </div>
              <ul className={`${mono.className} pt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[13px] md:text-sm`}>
                {MENU.sandwiches.map(([n, p]) => (
                  <li key={n} className="flex items-baseline justify-between gap-3">
                    <span style={{ color: C.ink }}>{n}</span>
                    <span className="font-bold shrink-0" style={{ color: C.ocre }}>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between gap-3 pt-5 pb-4 mt-5 border-t border-b border-dashed" style={{ borderColor: C.line }}>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] font-bold`} style={{ color: C.ink }}>
                  Ensaladas
                </p>
              </div>
              <ul className={`${mono.className} pt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[13px] md:text-sm`}>
                {MENU.ensaladas.map(([n, p]) => (
                  <li key={n} className="flex items-baseline justify-between gap-3">
                    <span style={{ color: C.ink }}>{n}</span>
                    <span className="font-bold shrink-0" style={{ color: C.ocre }}>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-4 border-t border-dashed text-sm font-semibold" style={{ borderColor: C.line, color: C.muted }}>
                {MENU.nota}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.castano }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(247,240,220,0.55)' }}>
              Los comentarios de la casa
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl tracking-tight`} style={{ color: C.papel }}>
              Los que almuerzan aquí lo dicen claro
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: 'rgba(247,240,220,0.25)' }}>
              <Stars value={BIZ.rating} color={C.ocre} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-xs`} style={{ color: 'rgba(247,240,220,0.75)' }}>
                {BIZ.rating.toString().replace('.', ',')} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <blockquote
                  className="h-full rounded-3xl p-6 border"
                  style={{ backgroundColor: 'rgba(247,240,220,0.05)', borderColor: 'rgba(247,240,220,0.14)' }}
                >
                  <Stars value={r.estrellas} color={C.ocre} className="w-3.5 h-3.5" />
                  <p className="mt-4 text-base leading-relaxed" style={{ color: C.papel }}>
                    “{r.texto}”
                  </p>
                  <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(247,240,220,0.55)' }}>
                    {r.nombre} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <figure className="overflow-hidden rounded-3xl border-4 shadow-md rotate-1" style={{ borderColor: C.card }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
              <img
                src={IMG.interior}
                alt="Comedor de Los Campos de Molina, con su muro amarillo pintado"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                La mesa, en Libertad
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl tracking-tight`} style={{ color: C.ink }}>
                A pasos del centro de Molina
              </h2>
              <dl className="mt-6 space-y-3 text-base">
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Horario
                  </dt>
                  <dd>{BIZ.hours}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Teléfono
                  </dt>
                  <dd className={mono.className}>{BIZ.phoneDisplay}</dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 tap-44`}
                style={{ color: C.ink }}
              >
                Ver ficha en Google Maps
              </a>
            </Reveal>
          </div>
        </div>
        <Reveal delay={140}>
          <div className="mt-8 overflow-hidden rounded-3xl border" style={{ borderColor: C.line }}>
            <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}, ${BIZ.city}`} className="w-full aspect-[4/3] md:aspect-[21/9]" />
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 md:px-8 pb-14">
        <Reveal>
          <div
            className="max-w-6xl mx-auto rounded-[2rem] px-6 py-10 md:px-12 md:py-14 text-center"
            style={{ backgroundColor: C.ocre }}
          >
            <h2 className={`${display.className} text-3xl md:text-5xl tracking-tight`} style={{ color: C.ocreInk }}>
              ¿Se te antojó el almuerzo de campo?
            </h2>
            <p className="mt-3 text-base md:text-lg max-w-lg mx-auto font-medium" style={{ color: 'rgba(46,27,2,0.75)' }}>
              Pide tu lunch por WhatsApp y pasa a buscarlo por Libertad.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center h-12 px-7 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.castano, color: C.papel }}
            >
              Pedir por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${display.className} text-xl tracking-tight`} style={{ color: C.ink }}>
                {BIZ.name}
              </p>
              <p className="mt-1 text-sm" style={{ color: C.muted }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.hours}
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 rounded-full text-sm font-bold self-start md:self-auto active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.ink, color: C.papel }}
            >
              Pedir por WhatsApp
            </a>
          </div>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
