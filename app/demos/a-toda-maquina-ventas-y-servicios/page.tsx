import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_SERVICIO,
  FACEBOOK_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F4EDE1',
  paperSoft: '#EBE2CE',
  card: '#FBF7EC',
  verde: '#2E4A3C',
  verdeDeep: '#1E332A',
  mostaza: '#D9A441',
  mostazaSoft: '#EFD9A7',
  madera: '#8A5A3B',
  tinta: '#232B26',
  muted: '#6B6152',
  line: 'rgba(46,74,60,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = {
  title: 'A Toda Maquina — Máquinas de coser y servicio técnico en Linares',
  description:
    'Tienda de máquinas de coser en Linares: venta, repuestos e insumos, y servicio técnico. Atención directa por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Productos', href: '#productos' },
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const PRODUCTOS = [
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Interior de la tienda con estantes ordenados de repuestos e insumos',
    tag: 'venta',
    name: 'Máquinas de coser',
    desc: 'Domésticas y para trabajo duro. Te ayudamos a elegir según lo que coses, sin venderte de más.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Mesón de madera con cajones de repuestos, insumos y herramientas ordenadas',
    tag: 'repuestos',
    name: 'Repuestos e insumos',
    desc: 'Agujas, bobinas, correas, prensatelas, aceite y todo lo que la máquina necesita para seguir cosiendo.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesa de trabajo con herramientas, tornillos y accesorios de servicio técnico',
    tag: 'servicio técnico',
    name: 'Reparación y mantención',
    desc: 'Revisión, afinación y arreglo de máquinas de coser. Cotización clara antes de partir.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Fachada del local en una calle de Linares, con cerros al fondo',
    tag: 'en el local',
    name: 'Atención en el mesón',
    desc: 'Llegas, preguntas y te atiende quien sabe del tema. Sin filas de call center ni tickets.',
  },
]

const HITOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Fachada de la tienda en Linares',
    title: 'Nos escribes o llegas',
    desc: 'Por WhatsApp o directo al local: cuéntanos qué buscas o qué le pasa a tu máquina.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Cajones con repuestos sobre el mesón de madera',
    title: 'Diagnóstico en el mesón',
    desc: 'Revisamos la máquina y te decimos qué conviene: repuesto, mantención o una nueva.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Banco de trabajo con herramientas del servicio técnico',
    title: 'Reparación o venta',
    desc: 'Precio claro antes de partir. Si es arreglo, se hace; si conviene máquina nueva, te mostramos opciones.',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Estantes del local con mercadería lista para entregar',
    title: 'Lista para coser',
    desc: 'Te la llevas probada y afinada, con el repuesto o insumo que hacía falta. Sin vueltas.',
  },
]

const PRECIOS = [
  { name: 'Mantención y afinación de máquina doméstica', price: 'desde $25.000' },
  { name: 'Diagnóstico y presupuesto de reparación', price: 'sin costo al reparar' },
  { name: 'Agujas para máquina (pack)', price: 'desde $2.500' },
  { name: 'Bobinas y carretes', price: 'desde $1.500' },
  { name: 'Prensatelas y accesorios', price: 'desde $4.000' },
  { name: 'Máquinas de coser nuevas', price: 'consultar modelos' },
]

const TESTIMONIALS = [
  {
    text: 'Llevé la máquina de mi mamá que no cosía hace años y la dejaron andando como nueva. Me explicaron todo.',
    author: 'Clienta de Linares',
  },
  {
    text: 'Pregunté por una aguja específica y la tenían. Acá encuentras lo que en las tiendas grandes ni conocen.',
    author: 'Vecina del centro',
  },
]

/** Cinta métrica: franja con marcas tipo regla */
function RulerStrip({ color, bg }: { color: string; bg: string }) {
  return (
    <div
      className="h-[14px] w-full"
      aria-hidden="true"
      style={{
        backgroundColor: bg,
        backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 1px, transparent 1px 12px), repeating-linear-gradient(90deg, ${color} 0 1px, transparent 1px 60px)`,
        backgroundSize: '100% 6px, 100% 14px',
        backgroundPosition: 'bottom, bottom',
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 font-bold flex items-center gap-3`}
      style={{ color: light ? C.mostazaSoft : C.madera }}
    >
      <span className="inline-block w-8 border-t-2 border-dashed" aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ATodaMaquinaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.tinta }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,237,225,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.verde,
          btnInk: C.paper,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.verdeDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de A Toda Maquina: estantes con repuestos e insumos para máquinas de coser"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(30,51,42,0.62) 0%, rgba(30,51,42,0.18) 45%, rgba(30,51,42,0.9) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-12 pt-40">
          <Reveal>
            <Eyebrow light>Tienda de máquinas de coser · Linares · Maule</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2.4rem,9vw,5.4rem)] mb-6`}
              style={{ color: C.paper }}
            >
              Si cose, la tenemos.
              <br />
              <span style={{ color: C.mostaza }}>Si falla, la arreglamos.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(244,237,225,0.88)' }}>
              Venta de máquinas de coser, repuestos e insumos, y servicio
              técnico en Linares. Atención directa: escribes y te responde
              quien atiende el mesón.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.mostaza, color: C.verdeDeep }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#proceso"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-lg border-2 transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(244,237,225,0.55)', color: C.paper }}
              >
                Cómo funciona
              </a>
            </div>
          </Reveal>
        </div>
        <RulerStrip color="rgba(30,51,42,0.35)" bg={C.mostaza} />
      </section>

      {/* ── Franja de datos ── */}
      <section style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x border-b" style={{ borderColor: C.line }}>
            {[
              { value: `${BIZ.googleReviews} reseñas`, label: 'en su ficha de Google Maps' },
              { value: 'Venta + servicio', label: 'máquinas, repuestos y arreglos' },
              { value: 'Linares', label: 'atención directa, en el mesón' },
            ].map((s) => (
              <div key={s.label} className="py-6 sm:py-8 sm:px-8 first:pl-0" style={{ borderColor: C.line }}>
                <p className={`${display.className} font-extrabold text-2xl md:text-3xl mb-1`} style={{ color: C.verde }}>
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: C.muted }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productos y servicios ── */}
      <section id="productos" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Lo que hay</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.tinta }}>
                Todo lo que la máquina
                <br />
                <span style={{ color: C.verde }}>necesita, en un local</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Esto es una muestra de los productos y servicios: al
                publicar van el catálogo y los servicios reales de la tienda.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {PRODUCTOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <article
                  className="group overflow-hidden h-full border-2"
                  style={{ backgroundColor: C.card, borderColor: C.verde, borderRadius: '0.5rem' }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      className={`${display.className} absolute top-4 left-4 text-[11px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 rounded shadow-sm`}
                      style={{ backgroundColor: 'rgba(244,237,225,0.95)', color: C.verdeDeep }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6 md:p-7 border-t-2 border-dashed" style={{ borderColor: C.line }}>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-2`} style={{ color: C.tinta }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Línea de tiempo horizontal: el proceso ── */}
      <section id="proceso" className="scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.verdeDeep }}>
        <RulerStrip color="rgba(30,51,42,0.3)" bg={C.mostaza} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>El proceso</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-12 md:mb-16">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.paper }}>
                Del WhatsApp
                <br />
                <span style={{ color: C.mostaza }}>a la máquina lista</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(244,237,225,0.75)' }}>
                Cuatro pasos, sin letra chica. En pantalla chica desliza la
                línea hacia el lado.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* la línea que cruza la pantalla */}
            <div
              className="absolute top-7 left-2 right-2 border-t-2 border-dashed pointer-events-none"
              style={{ borderColor: 'rgba(217,164,65,0.5)' }}
              aria-hidden="true"
            />
            <ol className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
              {HITOS.map((h, i) => (
                <li key={h.title} className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-auto">
                  <Reveal delay={i * 110}>
                    <div className="h-14 flex items-center">
                      <span
                        className={`${display.className} relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg border-2`}
                        style={{
                          backgroundColor: C.verdeDeep,
                          borderColor: C.mostaza,
                          color: C.mostaza,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <article
                      className="mt-6 border overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(244,237,225,0.06)',
                        borderColor: 'rgba(244,237,225,0.18)',
                        borderRadius: '0.5rem',
                      }}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={h.src}
                          alt={h.alt}
                          fill
                          sizes="(min-width: 768px) 22vw, 260px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 border-t border-dashed" style={{ borderColor: 'rgba(244,237,225,0.18)' }}>
                        <h3 className={`${display.className} font-bold text-base md:text-lg mb-2`} style={{ color: C.paper }}>
                          {h.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,237,225,0.72)' }}>
                          {h.desc}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <RulerStrip color="rgba(30,51,42,0.3)" bg={C.mostaza} />
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <div
                className="relative overflow-hidden border-2 aspect-[4/3]"
                style={{ borderColor: C.verde, borderRadius: '0.5rem', boxShadow: '8px 8px 0 rgba(46,74,60,0.18)' }}
              >
                <Image
                  src={`${IMG}/detalle3.webp`}
                  alt="Mesón de madera del local con repuestos ordenados en cajones y vista a la calle de Linares"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>El negocio</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.tinta }}>
                En Linares,
                <br />
                <span style={{ color: C.verde }}>cara a cara</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
                {BIZ.name} atiende en {BIZ.city}, en plena Región del Maule.
                Es tienda de máquinas de coser y también servicio técnico:
                el mismo mesón donde compras la aguja es donde se afina la
                máquina.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                Su ficha de Google Maps acumula{' '}
                <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.googleReviews} reseñas</strong>{' '}
                de quienes ya pasaron por el local, y tiene página en
                Facebook.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                  style={{ backgroundColor: C.verde, color: C.paper }}
                >
                  Ver Facebook →
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-lg border-2 transition-colors hover:bg-black/5 ${focusRing}`}
                  style={{ borderColor: 'rgba(46,74,60,0.35)', color: C.tinta }}
                >
                  Ver las reseñas en Google →
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-14 md:mt-20">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 110}>
                <figure
                  className="p-6 md:p-7 border-2 h-full"
                  style={{ backgroundColor: C.card, borderColor: C.verde, borderRadius: '0.5rem' }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.tinta }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.madera }}>
                    {t.author} · Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="text-xs mt-5" style={{ color: C.muted }}>
            Las reseñas de esta muestra son textos de ejemplo: al publicar
            van las opiniones reales de los clientes.
          </p>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Precios</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.tinta }}>
                Lista
                <br />
                <span style={{ color: C.verde }}>de referencia</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: C.muted }}>
                Los valores de esta lista son{' '}
                <strong className="font-bold" style={{ color: C.tinta }}>de muestra</strong>,
                para mostrar cómo se vería la tabla. Al publicar van los
                precios reales de la tienda.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing}`}
                style={{ color: C.verde, textDecorationColor: 'rgba(46,74,60,0.35)' }}
              >
                Consultar valor exacto por WhatsApp →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="relative overflow-hidden border-2"
                style={{ borderColor: C.verde, backgroundColor: C.card, borderRadius: '0.5rem' }}
              >
                <div
                  className="px-6 md:px-8 py-4 flex items-center justify-between gap-4 border-b-2"
                  style={{ backgroundColor: C.verde, borderColor: C.verde }}
                >
                  <span className={`${display.className} text-xs uppercase tracking-[0.18em] font-bold`} style={{ color: C.paper }}>
                    Lista de la tienda
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1 rounded"
                    style={{ backgroundColor: 'rgba(217,164,65,0.9)', color: C.verdeDeep }}
                  >
                    valores de muestra
                  </span>
                </div>
                <ul>
                  {PRECIOS.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-4 px-6 md:px-8 py-4 border-b last:border-b-0"
                      style={{ borderColor: C.line }}
                    >
                      <span className="text-sm md:text-base font-medium" style={{ color: C.tinta }}>
                        {p.name}
                      </span>
                      <span className="flex-1 border-b border-dashed mx-1 translate-y-[-4px]" style={{ borderColor: 'rgba(46,74,60,0.3)' }} aria-hidden="true" />
                      <span className={`${display.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.madera }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paperSoft }}>
        <RulerStrip color="rgba(46,74,60,0.35)" bg={C.paper} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.tinta }}>
              Escríbenos
              <br />
              <span style={{ color: C.verde }}>o pasa al local</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Para consultas, presupuestos y horarios, lo más rápido es el
              WhatsApp: <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.phoneDisplay}</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_SERVICIO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.mostaza, color: C.verdeDeep }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-lg border-2 transition-colors hover:bg-black/5 ${focusRing}`}
                style={{ borderColor: 'rgba(46,74,60,0.35)', color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden border-2 min-h-[320px] h-full"
              style={{ borderColor: C.verde, backgroundColor: C.paper, borderRadius: '0.5rem' }}
            >
              <iframe
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.verdeDeep }}>
        <Image
          src={`${IMG}/detalle2.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.paper }}>
              La máquina no se arregla sola.
              <br />
              <span style={{ color: C.mostaza }}>Escríbenos.</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,237,225,0.78)' }}>
              Cuéntanos qué necesitas — máquina nueva, repuesto o
              reparación — y te respondemos desde el mesón.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing}`}
              style={{ backgroundColor: C.mostaza, color: C.verdeDeep }}
            >
              Escribir a A Toda Maquina
            </a>
            <p className="text-xs mt-5" style={{ color: 'rgba(244,237,225,0.55)' }}>
              {BIZ.phoneDisplay} · {BIZ.city}
            </p>
          </Reveal>
        </div>
        <RulerStrip color="rgba(30,51,42,0.3)" bg={C.mostaza} />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.verdeDeep, color: C.paper }}>
        <div className="border-t" style={{ borderColor: 'rgba(244,237,225,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-bold text-xl md:text-2xl mb-2`}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,237,225,0.62)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,237,225,0.62)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing}`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,237,225,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(244,237,225,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing}`} style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Textos, precios y fotos
            son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing}`} style={{ color: C.mostaza }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
