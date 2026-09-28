import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IG_URL, IMG, SALIDAS, RESENAS } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700' },
  ],
})

const C = {
  navy: '#0B2B4A',
  navyDeep: '#071E35',
  azure: '#1B8BD0',
  sky: '#7DC3E8',
  yellow: '#FFC72C',
  cream: '#F6F3EC',
  ink: '#0E2233',
  muted: 'rgba(14,34,51,0.66)',
  line: 'rgba(14,34,51,0.16)',
  lineLight: 'rgba(246,243,236,0.22)',
  creamDim: 'rgba(246,243,236,0.74)',
}

/** Código de barras decorativo (motivo etiqueta de despacho). */
function Barcode({ color = C.cream, className = '' }: { color?: string; className?: string }) {
  const bars = [3, 1, 2, 1, 1, 3, 1, 2, 4, 1, 1, 2, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 1, 2]
  return (
    <span className={`inline-flex items-stretch gap-[3px] ${className}`} aria-hidden="true">
      {bars.map((w, i) => (
        <span key={i} style={{ width: w * 2, backgroundColor: color }} />
      ))}
    </span>
  )
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'yum-express-talca',
  title: 'Yum Express Talca — Envíos a Venezuela puerta a puerta',
  description: 'Sede de Yum Express en Talca: encomiendas aéreas y marítimas a Venezuela, puerta a puerta. Calle 25 Sur 0691. Cotiza por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const RUTA = ['TALCA', '→', 'VENEZUELA']

const TRACKING = [
  { code: 'RECIBIDO', title: 'Traes tu paquete', desc: 'Lo entregas en la sede de calle 25 Sur o lo coordinas por WhatsApp.' },
  { code: 'EMBALADO', title: 'Lo pesamos y embalamos', desc: 'Pesar, embalar e identificar: tu caja sale con etiqueta y seguimiento.' },
  { code: 'EN TRÁNSITO', title: 'Sale en la próxima salida', desc: 'Aérea o marítima según lo que cotices; siempre puerta a puerta.' },
  { code: 'ENTREGADO', title: 'Llega a su familia', desc: 'La persona que espera en Venezuela lo recibe en su puerta.' },
]

const FOTOS = [
  { src: 'fachada.webp', cap: 'La sede en 25 Sur', alt: 'Fachada del local de Yum Express con el logo azul y amarillo' },
  { src: 'embalaje.webp', cap: 'Pesar · embalar · identificar', alt: 'Manos embalando una caja con cinta de Yum Express' },
  { src: 'cajas.webp', cap: 'Encomiendas listas', alt: 'Cajas de cartón apiladas con el logo de Yum Express' },
  { src: 'bodega.webp', cap: 'La bodega', alt: 'Interior de la bodega de Yum Express con paquetes organizados' },
  { src: 'aereo.webp', cap: 'Carga aérea', alt: 'Funcionaria de Yum Express junto a un avión de carga' },
]

export default function YumExpressPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero: etiqueta de despacho ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.navy }}>
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(246,243,236,0.9) 0 2px, transparent 2px 14px)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
              <Reveal>
                <div className={`${mono.className} inline-flex items-center gap-3 mb-7 text-xs md:text-sm font-bold tracking-[0.18em]`} style={{ color: C.yellow }}>
                  {RUTA.map((r, i) => (
                    <span key={i} className={i === 1 ? 'opacity-70' : 'border px-2.5 py-1'} style={i === 1 ? {} : { borderColor: 'rgba(255,199,44,0.55)' }}>
                      {r}
                    </span>
                  ))}
                </div>
                <h1
                  className={`${display.className} uppercase font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,9vw,4.8rem)]`}
                  style={{ color: C.cream }}
                >
                  Kilos de amor,
                  <br />
                  <span style={{ color: C.yellow }}>puerta a puerta</span>
                </h1>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.creamDim }}>
                  Encomiendas aéreas y marítimas desde la sede de Talca. Cotiza
                  tu envío a Venezuela por WhatsApp.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2.5 border px-4 py-2.5 ${focusRing} tap-44`}
                    style={{ borderColor: C.lineLight }}
                  >
                    <Stars value={BIZ.rating} color={C.yellow} />
                    <span className={`${mono.className} text-xs font-bold tracking-wider`} style={{ color: C.cream }}>
                      {BIZ.rating} · {BIZ.reviews} reseñas
                    </span>
                  </a>
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.creamDim }}>
                    Lun–Vie 11:00–19:00
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.yellow, color: C.ink }}
                  >
                    Cotizar mi envío
                  </a>
                  <a
                    href="#salidas"
                    className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                    style={{ borderColor: 'rgba(246,243,236,0.5)', color: C.cream }}
                  >
                    Ver salidas
                  </a>
                </div>
              </Reveal>
              {/* Etiqueta de despacho con foto */}
              <Reveal delay={140}>
                <div className="relative" style={{ backgroundColor: C.cream, boxShadow: '0 24px 60px rgba(7,30,53,0.5)' }}>
                  <div className="flex items-center justify-between px-5 py-3 border-b-2 border-dashed" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-[10px] md:text-xs font-bold tracking-[0.22em] uppercase`} style={{ color: C.muted }}>
                      Etiqueta de despacho
                    </span>
                    <Barcode color={C.ink} className="h-5" />
                  </div>
                  <img
                    src={`${IMG}/local.webp`}
                    alt="Local de Yum Express con su signo azul y el logo amarillo en la fachada"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="flex items-center justify-between px-5 py-3 border-t-2 border-dashed" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-[10px] md:text-xs tracking-[0.18em] uppercase font-bold`} style={{ color: C.ink }}>
                      YUM-TAL · 25 SUR 0691
                    </span>
                    <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full" aria-hidden="true" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          {/* cinta perforada de cierre */}
          <div className="h-3" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.yellow} 0 14px, ${C.navy} 14px 28px)` }} aria-hidden="true" />
        </section>

        {/* ── 01 Salidas: tablero de despachos ── */}
        <section id="salidas" className="scroll-mt-20" style={{ backgroundColor: C.navyDeep }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.yellow }}>
                    N°01 — Tablero de salidas
                  </p>
                  <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-5xl leading-[1.02]`} style={{ color: C.cream }}>
                    Tres vías
                    <br />
                    <span style={{ color: C.sky }}>hacia Venezuela</span>
                  </h2>
                </div>
                <p className="hidden md:block text-sm leading-relaxed max-w-[220px] text-right" style={{ color: C.creamDim }}>
                  Las modalidades que publican en sus redes; la fecha de cada salida se confirma por WhatsApp.
                </p>
              </div>
            </Reveal>
            <div className="border" style={{ borderColor: C.lineLight, backgroundColor: '#05182C' }}>
              {SALIDAS.map((s, i) => (
                <Reveal key={s.via} delay={i * 90}>
                  <div
                    className={`grid grid-cols-[1fr_auto] md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)_auto] items-center gap-x-6 gap-y-1 px-5 md:px-8 py-5 md:py-6 ${i > 0 ? 'border-t' : ''}`}
                    style={{ borderColor: C.lineLight }}
                  >
                    <div className="min-w-0">
                      <p className={`${mono.className} text-sm md:text-xl font-bold tracking-[0.08em] uppercase`} style={{ color: C.cream }}>
                        {s.via}
                      </p>
                      <p className="text-xs md:text-sm leading-snug mt-1 md:hidden" style={{ color: C.creamDim }}>
                        {s.detalle}
                      </p>
                    </div>
                    <p className="hidden md:block text-sm leading-snug" style={{ color: C.creamDim }}>
                      {s.detalle}
                    </p>
                    <div className="text-right">
                      <p className={`${mono.className} text-xs md:text-sm font-bold tracking-[0.1em] uppercase whitespace-nowrap`} style={{ color: C.yellow }}>
                        {s.tiempo}
                      </p>
                      <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: C.sky }}>
                        {s.tag}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div className="px-5 md:px-8 py-4 border-t flex items-center justify-between gap-4" style={{ borderColor: C.lineLight }}>
                <p className="text-[11px] md:text-xs" style={{ color: C.creamDim }}>
                  Referencia publicada: caja marítima 30×30×30 cm desde $19.990.
                </p>
                <Barcode color={C.sky} className="h-4 shrink-0" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Tracking: cómo funciona ── */}
        <section id="tracking" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: '#0F5C94' }}>
                N°02 — Estado del envío
              </p>
              <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-5xl leading-[1.02] mb-10 md:mb-14`} style={{ color: C.ink }}>
                Del mostrador de Talca
                <br />
                <span style={{ color: C.azure }}>a su puerta</span>
              </h2>
            </Reveal>
            <ol className="relative border-l-2 border-dashed ml-2 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-6" style={{ borderColor: C.azure }}>
              {TRACKING.map((t, i) => (
                <li key={t.code} className="relative pl-8 md:pl-0 pb-8 md:pb-0 md:pt-8">
                  <span
                    className="absolute -left-[9px] md:left-0 md:-top-[9px] w-4 h-4 rounded-full border-2"
                    style={{ backgroundColor: C.cream, borderColor: C.azure }}
                    aria-hidden="true"
                  />
                  <span className="hidden md:block absolute top-0 left-6 right-0 border-t-2 border-dashed -translate-y-[1px]" style={{ borderColor: C.azure }} aria-hidden="true" />
                  <Reveal delay={i * 90}>
                    <p className={`${mono.className} text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase mb-2`} style={{ color: '#0F5C94' }}>
                      {String(i + 1).padStart(2, '0')} · {t.code}
                    </p>
                    <h3 className={`${display.className} uppercase font-bold text-lg md:text-xl leading-tight mb-2`} style={{ color: C.ink }}>
                      {t.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {t.desc}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 03 El trabajo en fotos ── */}
        <section id="fotos" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
            <Reveal>
              <div className="border-t-2 pt-4 mb-10 flex items-end justify-between gap-6" style={{ borderColor: C.ink }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold`} style={{ color: '#0F5C94' }}>
                  N°03 — Sede y bodega
                </p>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  fotos reales de @yum.express
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Reveal className="col-span-2 md:col-span-1">
                <figure className="h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}>
                  <img src={`${IMG}/${FOTOS[0].src}`} alt={FOTOS[0].alt} className="w-full h-56 md:h-72 object-cover" loading="lazy" />
                  <figcaption className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.18em] font-bold border-t`} style={{ borderColor: C.line, color: C.muted }}>
                    {FOTOS[0].cap}
                  </figcaption>
                </figure>
              </Reveal>
              {FOTOS.slice(1).map((f, i) => (
                <Reveal key={f.src} delay={i * 70}>
                  <figure className="h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}>
                    <img src={`${IMG}/${f.src}`} alt={f.alt} className="w-full h-40 md:h-56 object-cover" loading="lazy" />
                    <figcaption className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.18em] font-bold border-t`} style={{ borderColor: C.line, color: C.muted }}>
                      {f.cap}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 Reseñas ── */}
        <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.azure }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-14 items-start">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.navyDeep }}>
                  N°04 — Lo que dicen
                </p>
                <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#FFFFFF' }}>
                  {BIZ.rating} de 5
                  <br />
                  <span style={{ color: C.navyDeep }}>en Google</span>
                </h2>
                <Stars value={BIZ.rating} color={C.yellow} className="w-6 h-6" />
                <p className="mt-4 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.92)' }}>
                  {BIZ.reviews} reseñas reales en la ficha de la sede de Talca.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-5 text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 ${focusRing} tap-44`}
                  style={{ color: '#FFFFFF', textDecorationColor: 'rgba(255,255,255,0.5)' }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-4">
                {RESENAS.map((r, i) => (
                  <Reveal key={r.nombre} delay={i * 90}>
                    <figure className="p-5 md:p-6 border" style={{ backgroundColor: 'rgba(255,255,255,0.97)', borderColor: 'rgba(11,43,74,0.2)' }}>
                      <blockquote className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                        “{r.texto}”
                      </blockquote>
                      <figcaption className="flex items-center justify-between gap-4">
                        <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-bold`} style={{ color: C.muted }}>
                          {r.nombre} · Google Maps
                        </span>
                        <Stars value={5} color={C.azure} className="w-3.5 h-3.5" />
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 La sede ── */}
        <section id="sede" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: '#0F5C94' }}>
                N°05 — La sede en Talca
              </p>
              <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-5xl leading-[1.02] mb-10 md:mb-14`} style={{ color: C.ink }}>
                En la 25 Sur,
                <br />
                <span style={{ color: C.azure }}>entre la 1 Poniente y la 26</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
              <Reveal>
                <div className="border h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#FFFFFF' }}>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-2`} style={{ color: '#0F5C94' }}>
                      Dirección
                    </p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                      <strong className="font-bold">{BIZ.address}</strong>
                      <br />
                      <span style={{ color: C.muted }}>{BIZ.city}, {BIZ.region}, Chile</span>
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: '#0F5C94', textDecorationColor: 'rgba(15,92,148,0.35)' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-3`} style={{ color: '#0F5C94' }}>
                      Horario
                    </p>
                    <ul className="space-y-2.5">
                      {BIZ.hours.map((h) => (
                        <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                          <span className="font-bold" style={{ color: C.ink }}>{h.days}</span>
                          <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.line }} aria-hidden="true" />
                          <span style={{ color: C.muted }}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 md:px-8 py-6 flex-1 flex items-center justify-between gap-4">
                    <div>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-1`} style={{ color: '#0F5C94' }}>
                        Red nacional
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {BIZ.igHandle} · {BIZ.igFollowers} seguidores · {BIZ.web}
                      </p>
                    </div>
                    <a
                      href={IG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} shrink-0 text-[10px] uppercase tracking-[0.16em] font-bold border px-3 py-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                      style={{ borderColor: C.ink, color: C.ink }}
                    >
                      Instagram →
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#E8E5DB' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className={`${mono.className} px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold`} style={{ borderColor: C.line, color: C.muted }}>
                    {BIZ.address} · {BIZ.city}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre ── */}
        <section style={{ backgroundColor: C.yellow }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <Reveal>
                <Barcode color={C.ink} className="h-6 mb-4" />
                <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-5xl leading-[1.02]`} style={{ color: C.ink }}>
                  ¿Qué quieres enviar
                  <br />
                  a Venezuela?
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-col items-start md:items-end gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.navy, color: C.cream }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <p className={`${mono.className} text-[11px] tracking-[0.14em] uppercase font-bold`} style={{ color: 'rgba(14,34,51,0.75)' }}>
                    {BIZ.phoneDisplay}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
