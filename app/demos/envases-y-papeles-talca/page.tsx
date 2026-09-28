import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SiteNav, SiteFooter } from './chrome'
import { BIZ, IMG, LINEAS, REVIEWS, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'

// Const con nombre único: next/font nombra la cara por el const y el
// namespace es global — nombres comunes colisionan entre páginas.
const evDisplay = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' }],
})
const evBody = localFont({
  src: [{ path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' }],
})


const C = {
  ink: '#3B2C1A',
  kraft: '#F5EDDD',
  kraftDeep: '#E7D9BE',
  card: '#B98F5E',
  cardDark: '#8A6A43',
  red: '#A4301F',
  sepia: '#6E5A41',
  line: 'rgba(59,44,26,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'envases-y-papeles-talca',
  title: 'Envases y Papeles Talca · Envases desechables, papeles y aseo en Talca',
  description:
    'Venta al por mayor y al detalle de envases desechables para alimentos, papeles industriales y artículos de aseo. Pasaje Cuatro Sur 2035, Talca.',
})

const FAQS = [
  {
    q: '¿Venden al por mayor y al detalle?',
    a: 'Sí. Su actividad declarada es venta al por mayor de artículos de papelería, y en el local atienden tanto a negocios como a público. Cotiza cantidades por WhatsApp.',
  },
  {
    q: '¿Qué productos tienen?',
    a: 'Su objeto social: envases desechables para alimentos, papeles industriales y artículos de aseo. Los clientes destacan la variedad y el stock.',
  },
  {
    q: '¿Cómo cotizo?',
    a: 'Por WhatsApp: indica el producto, la medida o formato y la cantidad. Responden en horario de atención, lunes a viernes.',
  },
  {
    q: '¿Dónde queda?',
    a: `En ${BIZ.address}, ${BIZ.city}. El pasaje está entre 13 y 14 Oriente.`,
  },
]

function Spec({ children, color = C.red }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`font-mono text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-semibold`} style={{ color }}>
      {children}
    </p>
  )
}

/** Código de barras decorativo. */
function Barcode({ className = '', tall = false }: { className?: string; tall?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`${tall ? 'h-10' : 'h-6'} ${className}`}
      style={{
        background: `repeating-linear-gradient(90deg,
          ${C.ink} 0 2px, transparent 2px 4px,
          ${C.ink} 4px 7px, transparent 7px 9px,
          ${C.ink} 9px 10px, transparent 10px 14px,
          ${C.ink} 14px 15px, transparent 15px 17px,
          ${C.ink} 17px 20px, transparent 20px 23px)`,
      }}
    />
  )
}

/** Borde de cartón corrugado. */
function Corrugado({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-3"
      style={{
        background: `repeating-linear-gradient(${flip ? '-45deg' : '45deg'},
          transparent 0 6px, rgba(59,44,26,0.22) 6px 9px)`,
      }}
    />
  )
}

/** Sello tipo timbre de bodega. */
function Stamp({ children, rotate = '-6deg' }: { children: React.ReactNode; rotate?: string }) {
  return (
    <span
      className={`${evDisplay.className} inline-block uppercase tracking-[0.14em] text-sm md:text-base px-3 py-1 border-[3px]`}
      style={{ color: C.red, borderColor: C.red, transform: `rotate(${rotate})`, borderRadius: 4 }}
    >
      {children}
    </span>
  )
}

/** Iconos de línea de producto (svg permitido para íconos). */
function LineaIcon({ kind, className = 'w-8 h-8' }: { kind: string; className?: string }) {
  const stroke = { fill: 'none', stroke: C.ink, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (kind === 'bolsa')
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <path {...stroke} d="M8 11h16l-1.4 17H9.4L8 11z M12 11c0-4 1.6-6 4-6s4 2 4 6 M13 15v4 M19 15v4" />
      </svg>
    )
  if (kind === 'rollo')
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <path {...stroke} d="M7 8h15a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H7z M7 8v20 M22 8v10 M12 13h6" />
      </svg>
    )
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...stroke} d="M5 12l11-6 11 6v14l-11 6-11-6V12z M5 12l11 6 11-6 M16 18v14" />
    </svg>
  )
}

/** Escena CSS de caja de despacho con etiqueta — marcada como bosquejo. */
function CajaBosquejo() {
  return (
    <div className="relative">
      <span
        className={`font-mono absolute -top-3 right-3 z-10 text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5`}
        style={{ background: '#F2C94C', color: C.ink }}
      >
        bosquejo
      </span>
      {/* caja vista en perspectiva */}
      <div className="relative mx-auto w-56 h-44 md:w-64 md:h-52">
        <div className="absolute inset-x-0 bottom-0 h-3" style={{ backgroundColor: C.cardDark }} />
        <div
          className="absolute inset-x-0 bottom-3 top-10"
          style={{ backgroundColor: C.card, border: `2px solid ${C.ink}` }}
        />
        {/* tapas */}
        <div
          className="absolute left-0 right-1/2 top-2 h-9 origin-bottom -skew-x-6"
          style={{ backgroundColor: '#D9B07A', border: `2px solid ${C.ink}` }}
        />
        <div
          className="absolute left-1/2 right-0 top-2 h-9 origin-bottom skew-x-6"
          style={{ backgroundColor: '#D9B07A', border: `2px solid ${C.ink}` }}
        />
        {/* cinta adhesiva */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-3 w-7" style={{ backgroundColor: 'rgba(164,48,31,0.9)' }} />
        {/* etiqueta de despacho */}
        <div className="absolute right-3 top-16 w-24 md:w-28 bg-white p-2 shadow-sm" style={{ border: `1.5px solid ${C.ink}` }}>
          <p className={`font-mono text-[8px] uppercase tracking-[0.15em]`} style={{ color: C.sepia }}>Destino</p>
          <p className={`${evDisplay.className} text-xs uppercase leading-tight`} style={{ color: C.ink }}>Pje. 4 Sur 2035<br />Talca</p>
          <Barcode className="mt-1.5" />
        </div>
        {/* flecha frágil */}
        <svg viewBox="0 0 24 24" className="absolute left-4 top-16 w-6 h-10" aria-hidden="true">
          <path d="M12 34V8 M7 15l5-7 5 7" fill="none" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default function EnvasesPage() {
  return (
    <div className={`${evBody.className} min-h-screen antialiased`} style={{ backgroundColor: C.kraft, color: C.ink }}>
      <SiteNav fontClass={evDisplay.className} />

      {/* ── Hero: remisión de despacho sobre kraft ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
          <div
            className="border-2 p-5 md:p-8 lg:p-10"
            style={{ borderColor: C.ink, backgroundColor: '#FBF5E8', boxShadow: `6px 6px 0 ${C.card}` }}
          >
            <div className="flex items-start justify-between gap-4 border-b-2 pb-4 mb-6" style={{ borderColor: C.ink }}>
              <Spec>Guía de despacho n° 2035 · Talca</Spec>
              <Barcode className="w-28 shrink-0" />
            </div>
            <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-center">
              <Reveal>
                <h1 className={`${evDisplay.className} uppercase leading-[0.95] text-[clamp(2.7rem,10vw,5.4rem)] mt-1 mb-5`}>
                  Envases, bolsas<br />
                  y papeles para<br />
                  <span style={{ color: C.red }}>tu negocio.</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.sepia }}>
                  En el pasaje 4 Sur de Talca: envases desechables para
                  alimentos, papeles industriales y artículos de aseo. Al por
                  mayor y al detalle, {BIZ.sinceLabel}.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${evDisplay.className} uppercase tracking-wider text-base px-7 py-3 transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.red, color: '#FFF6E8' }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href="#lineas"
                    className={`${evDisplay.className} uppercase tracking-wider text-base px-7 py-3 border-2 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver líneas
                  </a>
                </div>
                <div className="mt-7 flex items-center gap-4">
                  <Stamp>Con stock</Stamp>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tap-44"
                  >
                    <Stars value={BIZ.rating} color={C.red} className="w-[14px] h-[14px]" />
                    {BIZ.ratingLabel} · {BIZ.reviews} opiniones
                  </a>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <CajaBosquejo />
              </Reveal>
            </div>
          </div>
        </div>
        <Corrugado />
      </section>

      {/* ── Manifiesto de líneas ── */}
      <section id="lineas" className="scroll-mt-20" style={{ backgroundColor: C.kraft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Spec>Detalle de la guía</Spec>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-3 mb-8 md:mb-12">
              <h2 className={`${evDisplay.className} uppercase text-4xl md:text-6xl leading-[0.95]`}>
                Tres líneas,<br />una bodega
              </h2>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.sepia }}>
                Los rubros declarados por la empresa: lo que encuentras en el
                local del pasaje.
              </p>
            </div>
          </Reveal>
          <div className="border-2" style={{ borderColor: C.ink, backgroundColor: '#FBF5E8' }}>
            <div
              className={`font-mono hidden md:grid grid-cols-[70px_1fr_1.3fr_60px] gap-4 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold border-b-2`}
              style={{ borderColor: C.ink, color: C.sepia }}
            >
              <span>Ítem</span><span>Producto</span><span>Detalle</span><span className="text-right">Und</span>
            </div>
            <ul>
              {LINEAS.map((l, i) => (
                <Reveal key={l.n} delay={i * 60}>
                  <li
                    className="grid md:grid-cols-[70px_1fr_1.3fr_60px] items-center gap-3 md:gap-4 px-5 py-5 md:py-4 border-b last:border-b-0"
                    style={{ borderColor: C.line }}
                  >
                    <span className="flex items-center gap-2 md:block">
                      <input type="checkbox" readOnly checked aria-hidden="true" className="w-4 h-4 accent-[#A4301F]" />
                      <LineaIcon kind={l.icon} className="w-7 h-7 md:mt-2" />
                    </span>
                    <h3 className={`${evDisplay.className} uppercase text-xl md:text-2xl leading-tight`}>{l.n}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.sepia }}>{l.desc}</p>
                    <span className={`font-mono text-xs text-right`} style={{ color: C.sepia }}>x{i + 1}</span>
                    <span className="sr-only">línea {i + 1}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={100}>
            <p className={`font-mono text-[11px] uppercase tracking-[0.2em] mt-4`} style={{ color: C.sepia }}>
              * El local no publica fotos: esta guía es la versión honesta de lo que venden.
            </p>
          </Reveal>
        </div>
      </section>

      <Corrugado flip />

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.kraftDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Spec>Opiniones de Google</Spec>
            <div className="flex flex-wrap items-end justify-between gap-6 mt-3 mb-8 md:mb-12">
              <h2 className={`${evDisplay.className} uppercase text-4xl md:text-6xl leading-[0.95]`}>
                {BIZ.ratingLabel} de 5 · {BIZ.reviews} opiniones
              </h2>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.sepia }}>
                Lo que repiten los que compran: precio, stock y buena
                atención en el mostrador.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 70}>
                <figure className="border-2 p-5 h-full flex flex-col relative" style={{ borderColor: C.ink, backgroundColor: '#FBF5E8' }}>
                  <span
                    aria-hidden="true"
                    className={`font-mono absolute top-3 right-4 text-[10px] font-semibold`}
                    style={{ color: C.sepia }}
                  >
                    OK-{String(i + 1).padStart(2, '0')}
                  </span>
                  <Stars value={5} color={C.red} className="w-[13px] h-[13px]" />
                  <blockquote className="text-sm leading-relaxed mt-3 flex-1">“{r.text}”</blockquote>
                  <figcaption className={`font-mono text-[10px] uppercase tracking-[0.18em] font-semibold mt-4`} style={{ color: C.sepia }}>
                    Google · {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-7 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.red, textDecorationColor: 'rgba(164,48,31,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.kraft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Spec>Retiro en el pasaje</Spec>
              <h2 className={`${evDisplay.className} uppercase text-4xl md:text-5xl leading-[0.95] mt-3 mb-6`}>
                Pasaje 4 Sur 2035
              </h2>
              <dl className="border-2 overflow-hidden mb-6" style={{ borderColor: C.ink, backgroundColor: '#FBF5E8' }}>
                {BIZ.hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-4 px-4 py-3 border-b last:border-b-0" style={{ borderColor: C.line }}>
                    <dt className="text-sm font-semibold">{h.days}</dt>
                    <dd className={`font-mono text-xs text-right`} style={{ color: C.sepia }}>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.sepia }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${evDisplay.className} uppercase tracking-wider text-base px-6 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.ink, color: '#FFF6E8' }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${evDisplay.className} uppercase tracking-wider text-base px-6 py-3 border-2 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="overflow-hidden border-2 min-h-[300px] md:min-h-0 h-full" style={{ borderColor: C.ink, backgroundColor: C.kraftDeep }}>
                <LazyMap title={`Mapa: ${BIZ.name}, ${BIZ.address}`} src={MAPS_EMBED} className="w-full h-full min-h-[300px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Corrugado />

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20" style={{ backgroundColor: C.kraftDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Spec>Antes de comprar</Spec>
            <h2 className={`${evDisplay.className} uppercase text-4xl md:text-6xl leading-[0.95] mt-3 mb-8`}>
              Preguntas frecuentes
            </h2>
          </Reveal>
          <FaqList items={FAQS} colors={{ q: C.ink, a: C.sepia, line: 'rgba(59,44,26,0.22)', plusBg: C.red, plusInk: '#FFF6E8' }} />
        </div>
      </section>

      {/* ── CTA final: sello de cierre de guía ── */}
      <section style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Barcode className="w-40 mx-auto mb-8" tall />
            <Spec color="#E9B04C">Envases y Papeles Talca · Guía n° 2035</Spec>
            <h2 className={`${evDisplay.className} uppercase text-[clamp(2.3rem,8vw,4.8rem)] leading-[0.95] mt-4 mb-6`} style={{ color: '#F5EDDD' }}>
              Cierra tu pedido<br />por WhatsApp
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(245,237,221,0.75)' }}>
              Producto, formato y cantidad — con eso te cotizan al tiro.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${evDisplay.className} inline-block uppercase tracking-wider text-sm px-8 py-3 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.red, color: '#FFF6E8', border: '2px solid #F5EDDD' }}
            >
              Cotizar ahora
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter fontClass={evDisplay.className} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
