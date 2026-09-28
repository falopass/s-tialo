import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, WA_LINK, WA_LINK_ENCARGO } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// La marquesina: azul marino del local, amarillo del logo, ticker de marcas
// como el toldo de la fachada y boletas de venta para las reseñas.
const C = {
  bg: '#0E1B4B',
  panel: '#15265E',
  deep: '#0A1438',
  ink: '#F4F1E4',
  muted: '#A9B4DC',
  line: 'rgba(244,241,228,0.16)',
  yellow: '#F7C60B',
  yellowInk: '#14204F',
  paper: '#F6F1E0',
  paperInk: '#1B2A63',
  paperMuted: '#5A6285',
}

export const metadata: Metadata = demoMetadata({
  slug: 'marco-molina-repuestos',
  title: 'Marco Molina Repuestos — Repuestos automotrices en Linares',
  description:
    'Tienda de repuestos multimarca en Av. Brasil 201, Linares. Kits de embrague, aceites, filtros y encargos. 4,2 estrellas en Google con 136 reseñas.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Repuestos', href: '#meson' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const MARCAS = [
  'Hyundai', 'Kia', 'Chevrolet', 'Nissan', 'Toyota', 'Mahindra', 'Suzuki',
  'Ford', 'Mitsubishi', 'Mazda', 'LUK', 'Exedy', 'PHC Valeo', 'Seco',
  'Gabriel', 'Shell',
]

const CATEGORIAS = [
  {
    code: 'R-01',
    name: 'Kits de embrague',
    detalle: 'LUK, Exedy, PHC Valeo y Seco en repisa. El stock se ve en las fotos.',
  },
  {
    code: 'R-02',
    name: 'Aceites y filtros',
    detalle: 'Shell Helix y Rimula para motor bencina y diésel. Servicio de cambio y lubricación.',
  },
  {
    code: 'R-03',
    name: 'Suspensión',
    detalle: 'Amortiguadores Gabriel y componentes de dirección, de la marquesina del local.',
  },
  {
    code: 'R-04',
    name: 'Repuestos multimarca',
    detalle: 'Piezas para Hyundai, Kia, Toyota, Chevrolet, Nissan, Suzuki, Ford, Mitsubishi y más.',
  },
  {
    code: 'R-05',
    name: 'Encargos',
    detalle: 'Si el repuesto no está en la tienda, lo piden y te avisan cuando llega.',
  },
]

const RESENAS = [
  {
    nombre: 'Carolina Soto',
    texto:
      'Excelente lugar, muy buena atención. El señor Matías tenía todo lo que necesitaba y a muy buenos precios, lo que no tenían me lo encargaron y me solucionaron mi problema.',
  },
  {
    nombre: 'Catalina Molina',
    texto:
      'Excelente atención y disposición. Siempre te asesoran bien y, si el repuesto no está disponible, se esfuerzan por conseguirlo rápido.',
  },
  {
    nombre: 'Catalina Pinto Morales',
    texto:
      'Excelente local, cuenta con una gran variedad de repuestos y una atención muy destacada.',
  },
  {
    nombre: 'Juan Pablo Aracena',
    texto: 'Buena atención, encontré todo lo que necesitaba.',
  },
]

const VITRINA = [
  { src: 'repisas.webp', alt: 'Repisas de la tienda con kits de embrague y repuestos en caja', pie: 'las repisas, tal cual' },
  { src: 'calle.webp', alt: 'Local de Marco Molina Repuestos visto desde la calle', pie: 'Av. Brasil, frente al local' },
  { src: 'equipo.webp', alt: 'Equipo de la tienda junto a una camioneta, foto de su Facebook', pie: 'el equipo, de su Facebook' },
  { src: 'marcas.webp', alt: 'Gráfico de su Facebook con las marcas que trabajan', pie: 'las marcas que publican' },
  { src: 'aviso2.webp', alt: 'Aviso de su Facebook con teléfonos y marcas de embrague', pie: 'su propio aviso' },
]

// Ticker de marcas: el toldo de la fachada hecho franja.
function Marquesina() {
  const items = [...MARCAS, ...MARCAS]
  return (
    <div
      className="overflow-hidden border-y"
      style={{ backgroundColor: C.yellow, borderColor: C.yellowInk }}
      aria-label="Marcas que trabajan"
    >
      <div className="mm-marquee flex w-max items-center gap-0 py-2.5">
        {items.map((m, i) => (
          <span
            key={i}
            aria-hidden={i >= MARCAS.length}
            className={`${display.className} flex items-center text-[15px] md:text-lg font-bold uppercase tracking-wide whitespace-nowrap`}
            style={{ color: C.yellowInk }}
          >
            <span className="px-4">{m}</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.4 4.9 5.6.8-4 4 .9 5.5-4.9-2.5-4.9 2.5.9-5.5-4-4 5.6-.8z" />
            </svg>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes mm-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .mm-marquee { animation: mm-marquee 32s linear infinite }
        @media (prefers-reduced-motion: reduce) { .mm-marquee { animation: none } }
      `}</style>
    </div>
  )
}

export default function MarcoMolinaDemo() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.bg, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className="font-bold uppercase tracking-wide">
            Marco Molina<span style={{ color: C.yellow }}>.</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: C.bg,
          ink: C.ink,
          line: C.line,
          btnBg: C.yellow,
          btnInk: C.yellowInk,
        }}
      />

      {/* HERO: tagline real + fachada con su marquesina */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-40"
          aria-hidden="true"
          style={{ background: `linear-gradient(180deg, ${C.deep} 0%, transparent 100%)` }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-10 md:pb-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 flex-wrap">
                  <Stars value={BIZ.rating} color={C.yellow} className="w-4 h-4" />
                  <p
                    className={`${mono.className} text-[11px] md:text-xs tracking-[0.14em] uppercase`}
                    style={{ color: C.muted }}
                  >
                    {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1
                  className={`${display.className} mt-5 text-[44px] leading-[0.95] md:text-[64px] font-extrabold uppercase`}
                >
                  Todo para tu auto,
                  <br />
                  <span className="italic" style={{ color: C.yellow }}>
                    en un solo lugar
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Repuestos multimarca en Av. Brasil 201, Linares. Si el repuesto
                  no está, lo encargan.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide active:scale-95 transition-transform"
                    style={{ backgroundColor: C.yellow, color: C.yellowInk }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide border active:scale-95 transition-transform"
                    style={{ borderColor: C.line, color: C.ink }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <figure>
                <div
                  className="relative overflow-hidden border-t-[10px]"
                  style={{ borderColor: C.yellow }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Fachada de Marco Molina Repuestos: local azul con marquesina de marcas en Av. Brasil 201"
                      fill
                      className="object-cover object-[50%_60%]"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <figcaption
                  className={`${mono.className} mt-3 text-[11px] tracking-[0.14em] uppercase`}
                  style={{ color: C.muted }}
                >
                  La tienda en Av. Brasil 201 · foto real de su ficha
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquesina />

      {/* EL MESÓN: catálogo de repisas */}
      <section id="meson" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_360px] gap-10 md:gap-14 items-start">
          <div>
            <Reveal>
              <h2
                className={`${display.className} text-[34px] md:text-[54px] font-extrabold uppercase leading-[0.95] mb-8`}
              >
                Lo que sale
                <br />
                por el <span style={{ color: C.yellow }}>mesón</span>
              </h2>
            </Reveal>
            <div className="border-t" style={{ borderColor: C.line }}>
              {CATEGORIAS.map((c, i) => (
                <Reveal key={c.code} delay={i * 60}>
                  <div
                    className="grid grid-cols-[52px_1fr] gap-4 py-5 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <span
                      className={`${mono.className} text-[12px] font-semibold pt-1`}
                      style={{ color: C.yellow }}
                    >
                      {c.code}
                    </span>
                    <div>
                      <h3
                        className={`${display.className} text-xl md:text-2xl font-bold uppercase tracking-wide`}
                      >
                        {c.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.muted }}>
                        {c.detalle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <a
                href={WA_LINK_ENCARGO}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide border active:scale-95 transition-transform"
                style={{ borderColor: C.yellow, color: C.yellow }}
              >
                Encargar un repuesto
              </a>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <figure className="md:sticky md:top-24">
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: C.panel }}>
                <Image
                  src={`${IMG}/meson.webp`}
                  alt="El mesón amarillo de la tienda con repisas de aceites y repuestos detrás"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-3 text-[11px] tracking-[0.14em] uppercase`}
                style={{ color: C.muted }}
              >
                El mesón amarillo · foto real
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* RESEÑAS: boletas sobre papel */}
      <section id="resenas" style={{ backgroundColor: C.paper, color: C.paperInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <Reveal>
              <h2
                className={`${display.className} text-[34px] md:text-[54px] font-extrabold uppercase leading-[0.95]`}
              >
                Lo que repiten
                <br />
                las <span style={{ color: C.bg }}>boletas</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-3 pb-1">
                <p className={`${display.className} text-[44px] md:text-[58px] font-extrabold leading-none`}>
                  4,2
                </p>
                <div>
                  <Stars value={BIZ.rating} color={C.bg} className="w-4 h-4" />
                  <p
                    className={`${mono.className} mt-1 text-[10px] md:text-[11px] tracking-[0.14em] uppercase`}
                    style={{ color: C.paperMuted }}
                  >
                    {BIZ.reviews} reseñas en Google
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={(i % 2) * 90}>
                <figure
                  className="h-full bg-white border-t-4 border-dashed p-6 md:p-7 shadow-sm"
                  style={{ borderColor: C.yellow }}
                >
                  <p
                    className={`${mono.className} text-[10px] tracking-[0.14em] uppercase mb-4`}
                    style={{ color: C.paperMuted }}
                  >
                    Google · reseña verificada
                  </p>
                  <blockquote className="text-[15px] md:text-base leading-relaxed">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between gap-3">
                    <span
                      className={`${display.className} text-base font-bold uppercase tracking-wide`}
                    >
                      {r.nombre}
                    </span>
                    <Stars value={5} color={C.yellowInk} className="w-3.5 h-3.5" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SU FACEBOOK: el aviso que ellos mismos publican */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className={`${display.className} text-[34px] md:text-[54px] font-extrabold uppercase leading-[0.95] mb-3`}
          >
            Hoy venden por <span style={{ color: C.yellow }}>Facebook</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-sm md:text-base leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
            Este es el aviso que publican ellos mismos. Con un sitio propio, esa
            vitrina queda abierta las 24 horas.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="relative overflow-hidden border" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/aviso.webp`}
                alt="Aviso publicado por Marco Molina Repuestos en su página de Facebook"
                width={960}
                height={398}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </div>
            <p
              className={`${mono.className} mt-3 text-[11px] tracking-[0.14em] uppercase group-hover:underline underline-offset-4`}
              style={{ color: C.muted }}
            >
              Aviso real de su Facebook · ver la página →
            </p>
          </a>
        </Reveal>
      </section>

      {/* VITRINA: fotos reales en fila */}
      <section className="py-2" style={{ backgroundColor: C.panel }}>
        <div className="py-12 md:py-16">
          <Reveal>
            <h2
              className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 text-[34px] md:text-[54px] font-extrabold uppercase leading-[0.95] mb-8`}
            >
              Adentro de la <span style={{ color: C.yellow }}>tienda</span>
            </h2>
          </Reveal>
          <div className="overflow-x-auto">
            <div className="flex gap-3 md:gap-4 px-5 md:px-8 w-max">
              {VITRINA.map((f, i) => (
                <figure key={f.src} className="w-[220px] md:w-[300px] shrink-0">
                  <div className="relative overflow-hidden aspect-square" style={{ backgroundColor: C.deep }}>
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      fill
                      className={i >= 2 ? 'object-contain p-2' : 'object-cover'}
                      sizes="(max-width: 768px) 220px, 300px"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} mt-2 text-[10px] md:text-[11px] tracking-[0.14em] uppercase`}
                    style={{ color: C.muted }}
                  >
                    {f.pie}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <p
            className={`${mono.className} mt-6 px-5 md:px-8 max-w-6xl mx-auto text-[10px] md:text-[11px] tracking-[0.14em] uppercase`}
            style={{ color: C.muted }}
          >
            Fotos y avisos reales de su ficha de Google y su Facebook
          </p>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <Reveal>
              <h2
                className={`${display.className} text-[34px] md:text-[54px] font-extrabold uppercase leading-[0.95]`}
              >
                Av. Brasil 201,
                <br />
                <span style={{ color: C.yellow }}>Linares</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <dl className={`${mono.className} mt-8 space-y-4 text-[12px] md:text-[13px] tracking-wide`}>
                <div className="flex gap-4 border-b pb-4" style={{ borderColor: C.line }}>
                  <dt className="shrink-0 w-[86px] uppercase font-semibold" style={{ color: C.yellow }}>
                    Dirección
                  </dt>
                  <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div className="flex gap-4 border-b pb-4" style={{ borderColor: C.line }}>
                  <dt className="shrink-0 w-[86px] uppercase font-semibold" style={{ color: C.yellow }}>
                    Horario
                  </dt>
                  <dd>{BIZ.hours}</dd>
                </div>
                <div className="flex gap-4 border-b pb-4" style={{ borderColor: C.line }}>
                  <dt className="shrink-0 w-[86px] uppercase font-semibold" style={{ color: C.yellow }}>
                    Teléfonos
                  </dt>
                  <dd>
                    +56 {BIZ.phoneDisplay}
                    <span style={{ color: C.muted }}> · +56 {BIZ.phoneAlt}</span>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="shrink-0 w-[86px] uppercase font-semibold" style={{ color: C.yellow }}>
                    Facebook
                  </dt>
                  <dd>
                    <a
                      href={BIZ.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      Marco Molina Repuestos
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={190}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide active:scale-95 transition-transform"
                  style={{ backgroundColor: C.yellow, color: C.yellowInk }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide border active:scale-95 transition-transform"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="border h-[300px] md:h-[420px]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-base font-bold uppercase tracking-wide`}>
                Marco Molina<span style={{ color: C.yellow }}>.</span>
              </p>
              <p
                className={`${mono.className} text-[10px] tracking-[0.14em] uppercase`}
                style={{ color: C.muted }}
              >
                {BIZ.address} · {BIZ.city} · {String(BIZ.rating).replace('.', ',')}★ en Google
              </p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-[44px] px-5 text-sm font-bold uppercase tracking-wide active:scale-95 transition-transform"
            style={{ backgroundColor: C.yellow, color: C.yellowInk }}
          >
            WhatsApp
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
