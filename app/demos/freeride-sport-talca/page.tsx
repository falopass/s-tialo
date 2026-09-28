import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, HOURS, WA_LINK, WA_LINK_ROPA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const condensed = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Asfalto + el amarillo del logo Freeride. Motivo: la pista —
// neumático cruzado como divisor, parrilla numerada, film y muro de marcas.
const C = {
  asphalt: '#0D0D0F',
  panel: '#151518',
  panelUp: '#1C1C21',
  ink: '#F2EFE6',
  muted: '#B0ABA0',
  dim: '#8A857B',
  line: 'rgba(242,239,230,0.14)',
  amber: '#E0B820',
  amberSoft: '#F2CE4E',
  amberInk: '#161203',
}

export const metadata: Metadata = demoMetadata({
  slug: 'freeride-sport-talca',
  title: 'Freeride Sport Talca — Repuestos y ropa de moto en San Miguel 3163',
  description:
    'Tienda de motocicletas en Av. San Miguel 3163, Talca: repuestos, ropa motocross y enduro, antiparras, mochilas y accesorios. 4,7 estrellas en Google. Consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Qué hay', href: '#parrilla' },
  { label: 'El local', href: '#film' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const PARRILLA = [
  {
    n: '01',
    name: 'Repuestos de moto',
    detalle: 'Piezas, consumibles y accesorios para moto y scooter. Si no está, se encarga.',
  },
  {
    n: '02',
    name: 'Ropa motocross y enduro',
    detalle: 'Jerseys, pantalones y guantes. La pared de Fox que se ve en las fotos.',
  },
  {
    n: '03',
    name: 'Antiparras',
    detalle: 'Vitrina completa de goggles, repuestos de lente y laminillas.',
  },
  {
    n: '04',
    name: 'Neumáticos y lubricantes',
    detalle: 'Metzeler y aceites Ipone sobre el mesón: lo que la moto gasta siempre.',
  },
  {
    n: '05',
    name: 'Mochilas e hidratación',
    detalle: 'OGIO y USWE para la ruta y el enduro duro.',
  },
  {
    n: '06',
    name: 'MTB y bicicletas',
    detalle: 'Ropa y repuestos de bicicleta; también mantenciones.',
  },
]

const MARCAS = [
  'KTM', 'FOX RACING', 'LEATT', 'USWE', 'OGIO',
  'IPONE', 'METZELER', 'PRO TAPER', 'MOOSE', 'TWIN AIR',
]

const FILM = [
  { src: 'clientes.webp', pie: 'clientes con sus KTM', alt: 'Clientes de Freeride Sport Talca junto a sus motos KTM frente al local' },
  { src: 'tienda.webp', pie: 'el mesón', alt: 'Mesón de la tienda con lubricantes Ipone y calcomanías de marcas de motos' },
  { src: 'interior.webp', pie: 'la ropa, colgada', alt: 'Interior de la tienda con ropa de motocross colgada en percher' },
  { src: 'mochila.webp', pie: 'equipo de ruta', alt: 'Mochila OGIO exhibida en el interior de Freeride Sport Talca' },
  { src: 'fachada.webp', pie: 'desde la calle', alt: 'Fachada de Freeride Sport Talca con su letrero y neumáticos colgados en la entrada' },
]

const RESENAS = [
  {
    nombre: 'Francisco Javier Besarez Silva',
    texto:
      'Destaco la amabilidad, eficiencia y prolijidad de quien me atendió. Fui a muchos locales en Talca a que me ayudaran con mi scooter (cambio de neumáticos) y fueron los únicos que tuvieron disposición a ayudarme y lo hicieron de gran manera y a precio justo.',
  },
  {
    nombre: 'Julio Rosson',
    texto: 'Muy buena atención y gran variedad de productos para motos y bicicleta.',
  },
  {
    nombre: 'Carlos Parra',
    texto: 'Excelente atención, excelentes precios y muy grato lugar.',
  },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E0B820]'

/** Divisor "huella de neumático": tacos diagonales alternados. */
function Tread({ flip = false, tone = C.amber }: { flip?: boolean; tone?: string }) {
  return (
    <div
      aria-hidden="true"
      className="h-[18px] w-full"
      style={{
        backgroundColor: 'transparent',
        backgroundImage: `repeating-linear-gradient(45deg, ${tone} 0 10px, transparent 10px 22px), repeating-linear-gradient(-45deg, ${tone} 0 10px, transparent 10px 22px)`,
        backgroundSize: '44px 9px, 44px 9px',
        backgroundPosition: flip ? '22px 0, 22px 9px' : '0 0, 0 9px',
        backgroundRepeat: 'repeat-x',
        opacity: 0.9,
      }}
    />
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3`} style={{ color: C.amber }}>
      <span aria-hidden="true" className="inline-block h-[10px] w-[10px]" style={{ backgroundColor: C.amber }} />
      {children}
    </p>
  )
}

export default function FreerideDemo() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.asphalt, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${condensed.className} font-bold uppercase tracking-wide`}>
            Freeride <span style={{ color: C.amber }}>Talca</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(13,13,15,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.amber,
          btnInk: C.amberInk,
        }}
      />

      {/* ── Hero: la fachada a sangre, titular de pista ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.asphalt }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada de Freeride Sport Talca en Av. San Miguel 3163, con su letrero negro y amarillo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_62%]"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,13,15,0.72) 0%, rgba(13,13,15,0.30) 42%, rgba(13,13,15,0.94) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-12 md:pb-16">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-5`} style={{ color: C.amberSoft }}>
              Tienda de motocicletas · Talca · Región del Maule
            </p>
            <h1 className={`${display.className} uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.7rem,11vw,6rem)] mb-6`} style={{ color: C.ink }}>
              Tu moto lo pide.
              <br />
              <span style={{ color: C.amber }}>En San Miguel lo hay.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(242,239,230,0.85)' }}>
              Repuestos, ropa motocross y enduro, antiparras, neumáticos y
              accesorios en {BIZ.address}, {BIZ.city}. El equipo que ves en
              las fotos es el que atiende el mesón.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${condensed.className} inline-flex items-center font-bold uppercase tracking-wide text-base md:text-lg px-7 h-[48px] transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.amber, color: C.amberInk }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${condensed.className} inline-flex items-center font-bold uppercase tracking-wide text-base md:text-lg px-7 h-[48px] border-2 transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(242,239,230,0.5)', color: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <Tread />
      </section>

      {/* ── Ficha técnica: los datos del local ── */}
      <section style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              { dt: 'Nota en Google', dd: `${BIZ.rating} ★ · ${BIZ.googleReviews} reseñas` },
              { dt: 'Dirección', dd: 'Av. San Miguel 3163, Talca' },
              { dt: 'Semana', dd: 'Lun–Vie 9:30–18:30' },
              { dt: 'Sábado', dd: '9:00–14:00 · Dom cerrado' },
            ].map((f, i) => (
              <div
                key={f.dt}
                className={`py-6 md:py-8 md:px-6 ${i % 2 === 1 ? 'pl-5 md:pl-6' : ''}`}
                style={{ borderLeft: i === 0 ? 'none' : `1px solid ${C.line}` }}
              >
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mb-2`} style={{ color: C.dim }}>
                  {f.dt}
                </dt>
                <dd className={`${condensed.className} font-semibold text-lg md:text-xl leading-tight`} style={{ color: C.ink }}>
                  {f.dd}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Parrilla de largada: qué hay en la tienda ── */}
      <section id="parrilla" className="scroll-mt-20" style={{ backgroundColor: C.asphalt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>El inventario</Eyebrow>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-12 items-end mb-12 md:mb-16">
              <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.ink }}>
                Lo que la moto
                <br />
                <span style={{ color: C.amber }}>gasta, aquí está</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Esto es una muestra del inventario real que se ve en las fotos
                del local; al publicar va el catálogo completo de la tienda.
              </p>
            </div>
          </Reveal>

          <ol className="grid md:grid-cols-2 border-t border-l" style={{ borderColor: C.line }}>
            {PARRILLA.map((p, i) => (
              <li key={p.n} className="relative border-b border-r" style={{ borderColor: C.line }}>
                <Reveal delay={i * 70}>
                  <div className="flex items-start gap-5 p-6 md:p-8 h-full" style={{ backgroundColor: i % 4 === 3 ? C.panel : 'transparent' }}>
                    <span
                      aria-hidden="true"
                      className={`${display.className} leading-none text-5xl md:text-6xl select-none`}
                      style={{ color: 'transparent', WebkitTextStroke: `1.5px ${C.amber}` }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <h3 className={`${condensed.className} font-bold uppercase tracking-wide text-xl md:text-2xl mb-2`} style={{ color: C.ink }}>
                        {p.name}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                        {p.detalle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Dos piezas grandes: vitrina y mesón ── */}
      <section className="border-t" style={{ backgroundColor: C.panel, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid sm:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              src: 'antiparras.webp',
              alt: 'Vitrina de antiparras de motocross en Freeride Sport Talca',
              tag: 'vitrina',
              title: 'La pared de antiparras',
              desc: 'Colores y lentes para cada terreno. En el local se ven todos.',
            },
            {
              src: 'jerseys.webp',
              alt: 'Jerseys y ropa Fox colgados en el interior de la tienda',
              tag: 'percher',
              title: 'Ropa que sí aguanta',
              desc: 'Jerseys y trajes de motocross y MTB, para salir al cerro o a la pista.',
            },
          ].map((f, i) => (
            <Reveal key={f.src} delay={i * 120}>
              <figure className="group relative overflow-hidden" style={{ backgroundColor: C.panelUp }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/${f.src}`}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13,13,15,0.92) 55%)' }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.amber }}>
                    {f.tag}
                  </p>
                  <h3 className={`${condensed.className} font-bold uppercase text-xl md:text-2xl`} style={{ color: C.ink }}>
                    {f.title}
                  </h3>
                  <p className="text-sm mt-1 leading-snug" style={{ color: 'rgba(242,239,230,0.82)' }}>
                    {f.desc}
                  </p>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Film: dentro del local, tira horizontal ── */}
      <section id="film" className="scroll-mt-20" style={{ backgroundColor: C.asphalt }}>
        <Tread flip tone="rgba(224,184,32,0.55)" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-6">
          <Reveal>
            <Eyebrow>Dentro del local</Eyebrow>
            <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl mb-4`} style={{ color: C.ink }}>
              San Miguel 3163,
              <br />
              <span style={{ color: C.amber }}>cuadro por cuadro</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              Fotos reales de la ficha de Google Maps de la tienda. En
              pantalla chica, desliza la tira.
            </p>
          </Reveal>
        </div>
        <div className="pb-14 md:pb-20">
          <ul className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 max-w-6xl mx-auto" aria-label="Fotos reales del local">
            {FILM.map((f, i) => (
              <li key={f.src} className="snap-start shrink-0 w-[270px] md:w-[340px]">
                <figure className="border" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                  {/* perforación de film */}
                  <div
                    aria-hidden="true"
                    className="h-3"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${C.asphalt} 2.5px, transparent 3px)`,
                      backgroundSize: '18px 12px',
                      backgroundPosition: 'center',
                      backgroundColor: C.panelUp,
                    }}
                  />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 340px, 270px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between px-4 py-3">
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                      {f.pie}
                    </span>
                    <span className={`${mono.className} text-[10px] tracking-[0.14em]`} style={{ color: C.amber }}>
                      {String(i + 1).padStart(2, '0')}/{String(FILM.length).padStart(2, '0')}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <Tread tone="rgba(224,184,32,0.55)" />
      </section>

      {/* ── Muro del paddock: marcas del local ── */}
      <section style={{ backgroundColor: C.amber, color: C.amberInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3`} style={{ color: C.amberInk }}>
              <span aria-hidden="true" className="inline-block h-[10px] w-[10px]" style={{ backgroundColor: C.amberInk }} />
              Marcas en el local
            </p>
            <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl mb-10`}>
              El muro que ya conoces
            </h2>
          </Reveal>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l" style={{ borderColor: 'rgba(22,18,3,0.3)' }}>
            {MARCAS.map((m, i) => (
              <li
                key={m}
                className={`${condensed.className} border-b border-r px-4 py-5 md:py-6 text-center font-bold uppercase tracking-wide text-lg md:text-xl`}
                style={{
                  borderColor: 'rgba(22,18,3,0.3)',
                  color: i % 3 === 1 ? 'transparent' : C.amberInk,
                  WebkitTextStroke: i % 3 === 1 ? '1.2px #161203' : undefined,
                }}
              >
                {m}
              </li>
            ))}
          </ul>
          <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.18em] mt-5`} style={{ color: 'rgba(22,18,3,0.72)' }}>
            Marcas visibles en las fotos y el catálogo público de Freeride.
          </p>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.asphalt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Lo que dicen</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.ink }}>
                {BIZ.googleReviews} reseñas,
                <br />
                <span style={{ color: C.amber }}>nota {BIZ.rating}</span>
              </h2>
              <div className="flex items-center gap-3">
                <Stars value={4.7} color={C.amber} className="w-5 h-5" />
                <span className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Google Maps
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure className="h-full flex flex-col border-t-2 p-6 md:p-7" style={{ borderColor: C.amber, backgroundColor: C.panel }}>
                  <span aria-hidden="true" className={`${display.className} text-5xl leading-none mb-4`} style={{ color: C.amber }}>
                    “
                  </span>
                  <blockquote className="text-[15px] md:text-base leading-relaxed flex-1" style={{ color: C.ink }}>
                    {r.texto}
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-5`} style={{ color: C.dim }}>
                    {r.nombre} · reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-7 text-xs uppercase tracking-[0.18em] underline underline-offset-4 hover:opacity-80 ${focusRing}`}
            style={{ color: C.amber }}
          >
            Ver todas en Google Maps →
          </a>
        </div>
      </section>

      {/* ── El box de la tienda: horario + mapa ── */}
      <section id="ubicacion" className="scroll-mt-20 border-t" style={{ backgroundColor: C.panel, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-5xl mb-6`} style={{ color: C.ink }}>
              Parada en boxes:
              <br />
              <span style={{ color: C.amber }}>San Miguel 3163</span>
            </h2>
            <address className="not-italic text-base md:text-lg leading-relaxed mb-8" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <span className={`${mono.className} text-xs tracking-[0.14em]`} style={{ color: C.dim }}>
                {BIZ.plusCode}
              </span>
            </address>
            <ul className="border-t mb-8" style={{ borderColor: C.line }}>
              {HOURS.map((h) => (
                <li key={h.days} className="flex items-baseline justify-between gap-4 py-3.5 border-b" style={{ borderColor: C.line }}>
                  <span className={`${condensed.className} uppercase tracking-wide font-semibold text-base`} style={{ color: C.ink }}>
                    {h.days}
                  </span>
                  <span className={`${mono.className} text-sm`} style={{ color: h.time === 'Cerrado' ? C.dim : C.amber }}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_ROPA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${condensed.className} inline-flex items-center font-bold uppercase tracking-wide text-base px-6 h-[48px] transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.amber, color: C.amberInk }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${condensed.className} inline-flex items-center font-bold uppercase tracking-wide text-base px-6 h-[48px] border-2 transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(242,239,230,0.35)', color: C.ink }}
              >
                Llamar · {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.panelUp }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.asphalt }}>
        <Image
          src={`${IMG}/clientes.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.3rem,8vw,4.6rem)] mb-6`} style={{ color: C.ink }}>
              ¿Se te quedó algo
              <br />
              <span style={{ color: C.amber }}>en la ruta?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mb-9 leading-relaxed" style={{ color: 'rgba(242,239,230,0.8)' }}>
              El repuesto, la antiparra o el aceite que falta: escribe al
              WhatsApp de la tienda y te responde quien atiende el mesón.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${condensed.className} inline-flex items-center font-bold uppercase tracking-wide text-base md:text-lg px-8 h-[48px] transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing}`}
              style={{ backgroundColor: C.amber, color: C.amberInk }}
            >
              Hablar con Freeride Talca
            </a>
            <p className={`${mono.className} text-xs mt-5 tracking-[0.14em]`} style={{ color: 'rgba(242,239,230,0.55)' }}>
              {BIZ.phoneDisplay} · {BIZ.city}
            </p>
          </Reveal>
        </div>
        <Tread tone="rgba(224,184,32,0.7)" />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.asphalt, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t" style={{ borderColor: C.line }}>
          <div>
            <p className={`${condensed.className} font-bold uppercase tracking-wide text-xl mb-1`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing}`}>
                {l.label}
              </a>
            ))}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`hover:text-white transition-colors ${focusRing}`}>
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(242,239,230,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing}`} style={{ color: C.ink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Fotos reales de la
            ficha de Google Maps; datos, horario y reseñas verificados ahí.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing}`} style={{ color: C.amber }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
