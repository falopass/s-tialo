import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EMPRESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta de sus flyers: negro tinta, amarillo promo, magenta y cian del
// salpicado del logo, sobre papel. Motivo: puntos de semitono (su propia
// bio dice "poleras en semitono") y fichas-ticket de precio reales.
const C = {
  paper: '#FAF6ED',
  card: '#FFFDF7',
  ink: '#17120E',
  muted: '#5C5148',
  amarillo: '#FFC400',
  magenta: '#E6358B',
  magentaDeep: '#A80F63',
  cian: '#00A8C6',
  line: '#17120E',
  lineSoft: 'rgba(23,18,14,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'snap-print',
  title: 'Snap print — Poleras personalizadas en Talca',
  description:
    'Poleras, polerones, gorros y bolsas personalizadas con estampado DTF en Av. Ignacio Carrera Pinto 0233, Talca. Cotiza por WhatsApp.',
  image: `${IMG}/og.webp`,
})

const NAV_LINKS = [
  { label: 'El muro', href: '#el-muro' },
  { label: 'Precios', href: '#precios' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde', href: '#donde' },
]

// Semitono: trama de puntos como la tinta de sus poleras.
const halftone = (color: string, size = 14, op = 0.35) => {
  const hex = color.replace('#', '%23')
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'%3E%3Ccircle cx='${size / 2}' cy='${size / 2}' r='2' fill='${hex}' fill-opacity='${op}'/%3E%3C/svg%3E")`
}

// Foto real presentada como sticker troquelado: borde blanco grueso,
// sombra dura desplazada y leve rotación.
function Sticker({
  src,
  alt,
  rotate = -2,
  caption,
  ratio = 'aspect-[4/5]',
  className = '',
}: {
  src: string
  alt: string
  rotate?: number
  caption?: string
  ratio?: string
  className?: string
}) {
  return (
    <figure
      className={`bg-white p-2.5 pb-8 border-2 ${className}`}
      style={{
        borderColor: C.ink,
        transform: `rotate(${rotate}deg)`,
        boxShadow: '7px 8px 0 rgba(23,18,14,0.9)',
      }}
    >
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, 90vw" className="object-cover" />
      </div>
      {caption && (
        <figcaption
          className={`${mono.className} pt-2 text-[10px] uppercase tracking-[0.14em]`}
          style={{ color: C.ink }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Ticket de precio tal como sus flyers: "desde $X.XXX".
function Ticket({ label, price, accent }: { label: string; price: string; accent: string }) {
  return (
    <div
      className="inline-flex items-stretch border-2"
      style={{ borderColor: C.ink, boxShadow: '4px 4px 0 rgba(23,18,14,0.9)', backgroundColor: C.card }}
    >
      <span
        className={`${mono.className} text-[10px] uppercase tracking-[0.12em] px-3 py-2 border-r-2 border-dashed flex items-center`}
        style={{ borderColor: C.ink, color: C.muted }}
      >
        {label}
      </span>
      <span
        className={`${display.className} text-sm md:text-base font-bold px-3 py-2 flex items-center`}
        style={{ backgroundColor: accent, color: C.ink }}
      >
        {price}
      </span>
    </div>
  )
}

const SERVICIOS = [
  { k: 'Poleras', v: 'Personalizadas desde $8.990 — tú traes la idea, ellos la estampan.' },
  { k: 'Polerones y más', v: 'Bolsas, gorros y polerones con tu diseño, desde $2.990 la personalización.' },
  { k: 'Estampado DTF', v: 'Textil DTF, la técnica que anuncian en su propia ficha de Google.' },
  { k: 'Imprenta', v: 'Flyers, tarjetas de presentación, adhesivos troquelados y regalos corporativos.' },
]

const RESENAS = [
  {
    q: 'Excelente atención, muy amables y preocupados por cada detalle. El estampado quedó hermoso y tal como lo esperaba. ¡100% recomendados!',
    a: 'Christell Bustamante',
    d: 'Reseña de Google',
  },
  {
    q: 'Muy buena la atención de Snap print, muy amables, el trabajo que yo quería lo dejaron tal cual como lo imaginé. Excelente calidad.',
    a: 'Ima H',
    d: 'Reseña de Google',
  },
  {
    q: 'Excelente calidad de los productos, los estampados de poleras muy bien hechos, buen trato y cumplen con lo ofrecido.',
    a: 'Ipso Facto',
    d: 'Reseña de Google',
  },
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17120E]'
const btnNegro = `${display.className} ${FOCUS} inline-block text-sm md:text-base font-semibold px-7 py-3 border-2 transition-transform active:scale-95 tap-44`
const btnAmarillo = `${btnNegro} bg-[#FFC400] text-[#17120E]`
const btnPapel = `${btnNegro} bg-[#FFFDF7] text-[#17120E]`

export default function SnapPrintPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={
          <span style={{ fontWeight: 800 }}>
            Snap <span style={{ color: C.magentaDeep }}>print</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/marca.webp`}
        ctaLabel="Cotizar"
        theme={{
          over: 'light',
          bar: 'rgba(250,246,237,0.95)',
          ink: C.ink,
          line: C.lineSoft,
          btnBg: C.ink,
          btnInk: C.amarillo,
        }}
      />

      {/* ── Hero: hoja de sticker ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.paper }}>
        <div
          className="absolute top-0 right-0 w-[46%] h-[220px] pointer-events-none"
          style={{ backgroundImage: halftone(C.magenta, 16, 0.4) }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.magentaDeep }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
              <h1
                className={`${display.className} font-extrabold leading-[0.98] text-[clamp(2.6rem,11vw,5rem)] mb-5 uppercase`}
                style={{ color: C.ink }}
              >
                Tu diseño,
                <br />
                <span
                  className="inline-block px-2 -mx-1"
                  style={{ backgroundColor: C.amarillo }}
                >
                  tu polera
                </span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
                Snap print estampa poleras, polerones, gorros y bolsas en
                pleno centro de Talca. Mandas tu idea por WhatsApp y la
                retiras en la tienda de Carrera Pinto.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btnAmarillo}>
                  Cotizar por WhatsApp
                </a>
                <a href="#el-muro" className={btnPapel}>
                  Ver el muro
                </a>
              </div>
              {/* prueba social temprana, verificada en Google */}
              <div className="flex items-center gap-3 mb-8">
                <Stars value={5} color={C.magentaDeep} />
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.ink }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Ticket label="Personalización" price="desde $2.990" accent={C.amarillo} />
                <Ticket label="Poleras" price="desde $8.990" accent="#7FD8EA" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative max-w-[330px] mx-auto lg:ml-auto">
              <Sticker
                src={`${IMG}/fachada.webp`}
                alt="Fachada de Snap print en Av. Ignacio Carrera Pinto: maniquí con polera negra que anuncia poleras personalizadas"
                caption="La tienda · Carrera Pinto 0233"
                rotate={2}
              />
              {/* sello sticker */}
              <div
                className={`${mono.className} absolute -top-4 -right-3 rotate-6 text-[10px] uppercase tracking-[0.12em] px-3 py-2 border-2 font-bold`}
                style={{ backgroundColor: C.magenta, color: C.ink, borderColor: C.ink, boxShadow: '3px 3px 0 rgba(23,18,14,0.9)' }}
                aria-hidden="true"
              >
                DTF textil
              </div>
            </div>
          </Reveal>
        </div>
        {/* cinta de productos, como el rodapie de sus flyers */}
        <div className="border-y-2 overflow-hidden" style={{ borderColor: C.ink, backgroundColor: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            {['Poleras', 'Polerones', 'Gorros', 'Bolsas', 'DTF textil', 'Imprenta'].map((s) => (
              <span key={s} className={`${display.className} text-xs md:text-sm font-bold uppercase tracking-[0.14em] flex items-center gap-6`} style={{ color: C.amarillo }}>
                {s} <span style={{ color: C.magenta }} aria-hidden="true">✳</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── El muro: el interior real de la tienda ── */}
      <section id="el-muro" className="scroll-mt-20 relative" style={{ backgroundColor: C.card }}>
        <div
          className="absolute inset-x-0 bottom-0 h-[140px] pointer-events-none"
          style={{ backgroundImage: halftone(C.cian, 16, 0.35) }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.magentaDeep }}>
              Dentro de la tienda
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.05] mb-5 uppercase`}>
              El muro de los
              <br />
              <span style={{ color: C.magentaDeep }}>diseños listos</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: C.muted }}>
              En la tienda el muro está cubierto de transferencias DTF en
              bolsas: eliges un diseño del catálogo o llevas el tuyo, y sale
              estampado en la polera que quieras.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7 max-w-4xl">
            <Reveal delay={0}>
              <Sticker src={`${IMG}/muro.webp`} alt="Muro interior de Snap print cubierto de transferencias DTF en bolsas, junto a tazones, gorros y un polerón" caption="Muro de diseños" rotate={-2} />
            </Reveal>
            <Reveal delay={90}>
              <Sticker src={`${IMG}/estampado.webp`} alt="Plancha de estampados DTF listos para transferir junto al rack de poleras de colores" caption="Transferencias DTF" rotate={1.5} className="md:mt-8" />
            </Reveal>
            <Reveal delay={180}>
              <Sticker src={`${IMG}/rack.webp`} alt="Rack de poleras y polerones de colores dentro de la tienda" caption="Rack de poleras" rotate={-1.5} />
            </Reveal>
            <Reveal delay={270}>
              <Sticker src={`${IMG}/diseno.webp`} alt="Diseño propio de Snap print: polera con ilustración en semitono, etiquetada con su Instagram @snap.cl" caption="Diseño de la casa" rotate={2.5} className="md:mt-8" />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} mt-10 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              Fotos reales de su ficha de Google y su Instagram @snap.cl
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Precios y servicios (de sus propios flyers) ── */}
      <section id="precios" className="scroll-mt-20 border-t-2" style={{ borderColor: C.ink, backgroundColor: C.amarillo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.ink }}>
                Lo que ofrecen, en sus palabras
              </p>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.05] mb-6 uppercase`} style={{ color: C.ink }}>
                «Personaliza
                <br />
                lo que quieras»
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: '#3A3020' }}>
                Los precios salen de los avisos que la tienda misma publica
                en Google: sin letra chica ni cotización misteriosa. Para
                diseños a medida y cantidades, la cotización va por WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3">
                <Ticket label="Poleras empresas" price="desde $9.990" accent="#FFFDF7" />
                <Ticket label="Pedido mínimo" price="5 unidades" accent="#FFFDF7" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="border-2 bg-[#FFFDF7]" style={{ borderColor: C.ink, boxShadow: '8px 9px 0 rgba(23,18,14,0.9)' }}>
                {SERVICIOS.map((s) => (
                  <li key={s.k} className="px-5 md:px-6 py-5 border-b-2 last:border-b-0" style={{ borderColor: C.ink }}>
                    <p className={`${display.className} text-sm md:text-base font-bold uppercase tracking-[0.06em] mb-1`} style={{ color: C.ink }}>
                      {s.k}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{s.v}</p>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.16em]`} style={{ color: '#3A3020' }}>
                Según los flyers publicados por la tienda
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Empresas e imprenta ── */}
      <section id="empresas" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.amarillo }}>
              Uniforme con identidad
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.05] mb-6 uppercase`} style={{ color: '#FFFDF7' }}>
              Poleras para
              <br />
              <span style={{ color: C.amarillo }}>tu equipo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: 'rgba(255,253,247,0.78)' }}>
              Las poleras empresariales parten en $9.990 con pedidos desde
              5 unidades. Y si necesitas papel: flyers, tarjetas de
              presentación, adhesivos troquelados y regalos corporativos
              también salen de la misma tienda.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
              {['Poleras empresariales', 'Uniformes con logo', 'Flyers y tarjetas', 'Adhesivos troquelados', 'Regalos corporativos', 'Entrega rápida'].map((s) => (
                <li key={s} className={`${mono.className} text-[11px] uppercase tracking-[0.14em] flex items-center gap-2.5`} style={{ color: '#FFFDF7' }}>
                  <span className="w-[8px] h-[8px] shrink-0" style={{ backgroundColor: C.magenta }} aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
            <a href={WA_LINK_EMPRESA} target="_blank" rel="noopener noreferrer" className={btnAmarillo}>
              Cotizar para mi empresa
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid grid-cols-2 gap-5 items-start">
              <Sticker src={`${IMG}/mostrador.webp`} alt="El equipo de Snap print atendiendo en el mesón de la tienda" caption="Atención directa" rotate={-2} />
              <Sticker src={`${IMG}/duena.webp`} alt="Polera amarilla personalizada mostrada por el equipo dentro de la tienda" caption="Trabajo terminado" rotate={2} className="mt-8" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.magentaDeep }}>
                  Reseñas reales de Google
                </p>
                <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.05] uppercase`}>
                  «Tal cual como
                  <br />
                  lo imaginé»
                </h2>
              </div>
              <div className="border-2 px-5 py-4 text-center" style={{ borderColor: C.ink, backgroundColor: C.card, boxShadow: '5px 5px 0 rgba(23,18,14,0.9)' }}>
                <p className={`${display.className} text-3xl font-extrabold leading-none`}>{BIZ.rating}</p>
                <Stars value={5} color={C.magentaDeep} className="w-3.5 h-3.5" />
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 100}>
                <blockquote
                  className="h-full border-2 p-6 flex flex-col bg-[#FFFDF7]"
                  style={{ borderColor: C.ink, boxShadow: '6px 7px 0 rgba(23,18,14,0.9)', transform: `rotate(${[-1, 0.8, -0.6][i]}deg)` }}
                >
                  <Stars value={5} color={C.amarillo} className="w-4 h-4 mb-4" />
                  <p className="text-sm md:text-[15px] leading-relaxed mb-5 flex-1" style={{ color: C.ink }}>
                    “{r.q}”
                  </p>
                  <footer className={`${mono.className} text-[10px] uppercase tracking-[0.14em] border-t-2 border-dashed pt-3`} style={{ borderColor: C.lineSoft, color: C.muted }}>
                    {r.a} · {r.d}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde y cuándo ── */}
      <section id="donde" className="scroll-mt-20 border-t-2" style={{ borderColor: C.ink, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.magentaDeep }}>
              Dónde y cuándo
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-[1.08] mb-6 uppercase`}>
              Carrera Pinto 0233,
              <br />
              <span style={{ color: '#00798F' }}>a pasos del centro</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <dl className="border-2 max-w-md mb-8" style={{ borderColor: C.ink, backgroundColor: C.paper }}>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3 border-b-2" style={{ borderColor: C.ink }}>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Lun a Sáb</dt>
                <dd className="text-sm font-semibold">10:00 – 20:00</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3">
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Domingo</dt>
                <dd className="text-sm font-semibold">Cerrado</dd>
              </div>
            </dl>
            <p className="text-xs leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
              Empresa de mujer y espacio amigable LGBTQ+, según su propia
              ficha de Google.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btnAmarillo}>
                Cotizar por WhatsApp
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={btnPapel}>
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 p-2 h-full min-h-[340px]" style={{ borderColor: C.ink, backgroundColor: '#fff', boxShadow: '8px 9px 0 rgba(23,18,14,0.9)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[330px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative border-t-2" style={{ borderColor: C.ink, backgroundColor: C.magenta }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: halftone('#17120E', 18, 0.25) }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: C.ink }}>
              Manda tu idea por WhatsApp
            </p>
            <h2 className={`${display.className} font-extrabold text-[clamp(1.9rem,7vw,3.6rem)] leading-[1.04] mb-8 uppercase`} style={{ color: '#FFFDF7' }}>
              Chasquea los dedos
              <br />
              <span style={{ color: C.ink, backgroundColor: C.amarillo }} className="inline-block px-2">y tu diseño sale</span>
            </h2>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btnNegro + ' bg-[#17120E] text-[#FFC400]'}>
              Escribir a Snap print
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#FFFDF7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24">
          <p className={`${display.className} text-lg font-bold mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed mb-1.5" style={{ color: 'rgba(255,253,247,0.85)' }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay} · {BIZ.instagram}
          </address>
          <p className="text-xs leading-relaxed mb-6" style={{ color: 'rgba(255,253,247,0.7)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono,
            horarios, precios y reseñas son reales (ficha de Google e
            Instagram de la tienda); el diseño es de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
