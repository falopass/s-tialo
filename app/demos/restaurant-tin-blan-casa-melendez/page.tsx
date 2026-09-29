import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, COLACIONES, HOURS } from './content'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, CallFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/playfair-display/normal-400-900.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-tin-blan-casa-melendez',
  title: `${BIZ.name} — comedor familiar en ${BIZ.city}`,
  description: `Cocina chilena y pizarra de colaciones en ${BIZ.address}, ${BIZ.city}: cazuela, plateada, bistec y costillas. Nota ${BIZ.rating} en Google.`,
  image: `${IMG}/fachada.webp`,
})

// Paleta de las fotos reales: rojo del toldo Tin-Blan, salmón de la
// fachada, carbón de la pizarra y crema de las letras Casa Meléndez.
const C = {
  carbon: '#211E1A',
  pizarra: '#2B2925',
  papel: '#FBF3E4',
  crema: '#FFF9EE',
  rojo: '#B3261E',
  rojoDark: '#8C1B15',
  salmon: '#D98E73',
  tiza: '#F4EBD7',
  line: 'rgba(33,30,26,.14)',
} as const

function Chalk({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-block text-[11px] md:text-xs tracking-[0.22em] uppercase px-3 py-1.5 border-2 border-dashed rounded-sm`}
      style={{ color: C.rojo, borderColor: C.rojo }}
    >
      {children}
    </span>
  )
}

const PhoneIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const PinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

const PLATOS = [
  {
    src: 'cazuela',
    alt: 'Cazuela servida en Restaurant Tin Blan · Casa Meléndez, con carne, papas, choclo y cilantro',
    nombre: 'La cazuela',
    detalle: 'La primera de la pizarra',
  },
  {
    src: 'plateada',
    alt: 'Plateada con su salsa y tomate en Restaurant Tin Blan · Casa Meléndez',
    nombre: 'La plateada',
    detalle: 'De la carta de la casa',
  },
  {
    src: 'lomo',
    alt: 'Lomo con papas fritas caseras en Restaurant Tin Blan · Casa Meléndez',
    nombre: 'El lomo con papas',
    detalle: 'Porción de comedor',
  },
]

export default function TinBlanPage() {
  return (
    <main className={`${body.className} min-h-screen`} style={{ background: C.crema, color: C.carbon }}>
      <BlitzNav
        name={<span className={display.className}>Tin Blan · Casa Meléndez</span>}
        links={[
          { label: 'La pizarra', href: '#pizarra' },
          { label: 'Los platos', href: '#platos' },
          { label: 'Cómo llegar', href: '#mapa' },
        ]}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{
          over: 'dark',
          bar: C.crema,
          ink: C.carbon,
          line: C.line,
          btnBg: C.rojo,
          btnInk: C.crema,
        }}
      />

      {/* ── Hero: la fachada real con su toldo ────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ background: C.carbon }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de Restaurant Tin Blan · Casa Meléndez en Av. Comalle 25, Teno, con su toldo rojo y letras Casa Meléndez"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(33,30,26,.3) 0%, rgba(33,30,26,.05) 45%, rgba(33,30,26,.9) 100%)' }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-28">
          <Reveal>
            <span
              className={`${mono.className} inline-block text-[11px] md:text-xs tracking-[0.24em] uppercase px-3 py-1.5 rounded-sm`}
              style={{ background: C.rojo, color: C.crema }}
            >
              {BIZ.address} · {BIZ.city}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className={`${display.className} mt-5 text-[clamp(2.8rem,11vw,7rem)] leading-[0.95] font-black tracking-tight`}
              style={{ color: C.crema, textShadow: '0 2px 30px rgba(33,30,26,.6)' }}
            >
              La casa que almuerza<br />con Teno
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,249,238,.92)' }}>
              Comedor familiar de cocina chilena: la pizarra sale temprano, la
              cazuela humea y la mesa del fondo siempre tiene flores. Av. Comalle
              con la calle de siempre.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 font-semibold text-sm md:text-base px-6 h-[52px] rounded-full transition-transform active:scale-95"
                style={{ background: C.rojo, color: C.crema }}
              >
                <PhoneIcon /> {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm md:text-base px-6 h-[52px] rounded-full border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,249,238,.55)', color: C.crema, background: 'rgba(33,30,26,.4)' }}
              >
                <PinIcon /> Cómo llegar
              </a>
              <span className="inline-flex items-center gap-2" style={{ color: C.crema }}>
                <Stars value={4.5} color={C.salmon} />
                <span className={`${mono.className} text-xs tracking-[0.12em]`}>{BIZ.rating} · {BIZ.reviewsLabel}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La pizarra real ──────────────────────────────────────── */}
      <section id="pizarra" className="py-16 md:py-24" style={{ background: C.pizarra, color: C.tiza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className={`${mono.className} text-[11px] tracking-[0.24em] uppercase`} style={{ color: C.salmon }}>
              La pizarra de afuera
            </span>
            <h2 className={`${display.className} mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.02]`}>
              Las colaciones del día,<br />escritas a tiza
            </h2>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,235,215,.8)' }}>
              El menú se lee en la pizarra que cuelga junto a la puerta — la misma
              que aparece en las fotos de su ficha. Estos son los platos que la
              casa anuncia:
            </p>
            <ul className="mt-8 space-y-0 border-t-2 border-dashed" style={{ borderColor: 'rgba(244,235,215,.35)' }}>
              {COLACIONES.map((c, i) => (
                <li
                  key={c}
                  className="flex items-baseline gap-4 py-4 border-b-2 border-dashed"
                  style={{ borderColor: 'rgba(244,235,215,.35)' }}
                >
                  <span className={`${mono.className} text-xs tracking-[0.2em]`} style={{ color: C.salmon }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`${display.className} text-2xl md:text-3xl font-black uppercase tracking-wide`}>{c}</span>
                </li>
              ))}
            </ul>
            <p className={`${mono.className} mt-4 text-[11px] tracking-[0.14em] uppercase`} style={{ color: 'rgba(244,235,215,.55)' }}>
              + el plato del día, según temporada y mercado
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="rounded-2xl overflow-hidden shadow-xl rotate-1 border-4" style={{ borderColor: C.tiza }}>
              <Image
                src={`${IMG}/pizarra.webp`}
                alt="Pizarra real de colaciones colgada en la fachada de Tin Blan · Casa Meléndez: cazuela, pescado, plateada, bistec y costillas"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </figure>
            <p className={`${mono.className} mt-3 text-[11px] tracking-[0.14em] text-center`} style={{ color: 'rgba(244,235,215,.55)' }}>
              FOTO REAL · LA PIZARRA QUE RECIBE AL CLIENTE
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Los platos (fotos reales de su Facebook/TripAdvisor) ──── */}
      <section id="platos" className="py-16 md:py-24" style={{ background: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Chalk>De la cocina a la mesa</Chalk>
            <h2 className={`${display.className} mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.02]`}>
              Cocina chilena,<br />plato lleno
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {PLATOS.map((p, i) => (
              <Reveal key={p.src} delay={0.08 * i}>
                <figure className="rounded-2xl overflow-hidden border bg-white shadow-sm" style={{ borderColor: C.line }}>
                  <div className="relative aspect-[4/3]">
                    <Image src={`${IMG}/${p.src}.webp`} alt={p.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <figcaption className="px-5 py-4">
                    <p className={`${display.className} text-xl md:text-2xl font-black`}>{p.nombre}</p>
                    <p className={`${mono.className} mt-1 text-[10px] tracking-[0.18em] uppercase`} style={{ color: C.rojo }}>{p.detalle}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La casa ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <figure className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/interior.webp`}
                alt="Interior del comedor de Tin Blan · Casa Meléndez, con sus dueños en la mesa del fondo y flores frescas"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.12}>
            <Chalk>La casa Meléndez</Chalk>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-black tracking-tight leading-[1.02]`}>
              Un comedor con apellido
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(33,30,26,.75)' }}>
              Registrado en SERNATUR como Casa Meléndez, el restaurante funciona
              en la casa de la familia en Av. Comalle: el toldo rojo se ve desde
              la cuadra y adentro atienden sus dueños. Tipo de comida: chilena,
              de la que se sirve en plato hondo.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Teléfono', `${BIZ.phoneDisplay} (fijo)`],
                ['Horario', `${HOURS[0].d} · ${HOURS[0].h}`],
                ['Nota en Google', `${BIZ.rating} · ${BIZ.reviewsLabel}`],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-3 items-baseline border-b pb-3" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[11px] tracking-[0.18em] uppercase w-28 shrink-0`} style={{ color: C.rojo }}>{k}</span>
                  <span className="text-sm md:text-base font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ──────────────────────────────────────────── */}
      <section id="mapa" className="py-16 md:py-24" style={{ background: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal>
            <Chalk>Av. Comalle, Teno</Chalk>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-black tracking-tight leading-[1.02]`}>
              El toldo rojo del 25
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(33,30,26,.75)' }}>
              Sobre la avenida Comalle, camino al centro de {BIZ.city}: busca el
              toldo rojo con la pizarra de colaciones. Plus code {BIZ.plusCode}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 h-[52px] rounded-full transition-transform active:scale-95"
                style={{ background: C.rojo, color: C.crema }}
              >
                <PhoneIcon /> Llamar
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 h-[52px] rounded-full border transition-transform active:scale-95"
                style={{ borderColor: C.carbon, color: C.carbon }}
              >
                <PinIcon /> Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full aspect-[4/3] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="py-10" style={{ background: C.carbon, color: C.tiza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl font-black`}>{BIZ.name}</p>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mt-1`} style={{ color: C.salmon }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
          </div>
          <div className={`${mono.className} text-xs space-y-1`} style={{ color: 'rgba(244,235,215,.7)' }}>
            <p>{BIZ.phoneDisplay} · {BIZ.rating} en Google</p>
            <p>{BIZ.address}, {BIZ.city}</p>
          </div>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.short}`} bg={C.rojo} />
      <DemoBand name={BIZ.short} />
    </main>
  )
}
