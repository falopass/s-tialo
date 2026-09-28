import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_BULTO, MAPS_URL, MAPS_EMBED, HORARIO, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})

const C = {
  paper: '#F6F3EC',
  card: '#FFFDF8',
  azul: '#2F5D8C',
  navy: '#1B3A5C',
  naranja: '#D97B29',
  naranjaInk: '#8A4A12',
  ink: '#22303C',
  muted: '#5D6B76',
  line: 'rgba(34,48,60,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-valdebenito',
  title: 'Ferretería Valdebenito — Herramientas y materiales en Linares',
  description: 'Ferretería en Rengo 435, Linares. Surtido para la obra, el campo y la casa, con venta por unidad y por volumen. Cotiza por WhatsApp.',
  image: '/demos/ferreteria-valdebenito/hero.webp',
})

const NAV_LINKS = [
  { label: 'Rubros', href: '#rubros' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'Precios', href: '#precios' },
  { label: 'Horario', href: '#contacto' },
]

const RUBROS = [
  'Herramientas manuales',
  'Tornillería y fijaciones',
  'Riego, agua y fittings',
  'Materiales de construcción',
  'Pinturas y accesorios',
  'Campo y parcela',
  'Eléctricos e iluminación',
  'Venta por unidad y volumen',
]

const PASILLOS = [
  {
    src: `${IMG}/pasillo.webp`,
    alt: 'Pasillo interior de Ferretería Valdebenito con estanterías de productos',
    cap: 'Pasillo principal',
  },
  {
    src: `${IMG}/estante.webp`,
    alt: 'Estante con herramientas eléctricas Bosch en exhibición',
    cap: 'Herramientas en exhibición',
  },
  {
    src: `${IMG}/meson.webp`,
    alt: 'Mesón de atención con mercadería ordenada detrás',
    cap: 'El mesón de siempre',
  },
  {
    src: `${IMG}/patio.webp`,
    alt: 'Patio de materiales de la ferretería con sacos y bultos',
    cap: 'Patio de materiales',
  },
]

const TIERS = [
  {
    n: 'A',
    tag: 'Por unidad',
    name: 'Precio de mostrador',
    desc: 'Lo que necesitas hoy, sin mínimo de compra ni trámite.',
  },
  {
    n: 'B',
    tag: 'Por caja o ciento',
    name: 'Descuento por volumen',
    desc: 'Para la obra, el taller y la parcela: mejor precio por caja o por ciento.',
    hi: true,
  },
  {
    n: 'C',
    tag: 'Por bulto',
    name: 'Pedidos por encargo',
    desc: 'Pedidos grandes se encargan y se coordinan directo por WhatsApp.',
  },
]

const REVIEWS = [
  {
    text: 'Mi ferretería favorita: los precios son los más convenientes de Linares. 100% recomendada.',
    author: 'Marco Cofré',
  },
  {
    text: 'Buenos precios y una excelente atención.',
    author: 'Felipe Troncoso Zárate',
  },
  {
    text: 'Excelente atención y precios muy convenientes.',
    author: 'Pamela A.',
  },
]

const PRECIOS = [
  { name: 'Flexible / huincha de medir 5 m', price: 'desde $3.500' },
  { name: 'Martillo carpintero', price: 'desde $6.990' },
  { name: 'Fitting PVC ½″ (unidad)', price: 'desde $350' },
  { name: 'Caja de tornillos 8×1½ (x100)', price: 'desde $2.500' },
  { name: 'Alambre galvanizado (kilo)', price: 'desde $1.800' },
  { name: 'Carretilla de obra', price: 'desde $49.900' },
]

const waBtn =
  'inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all active:scale-95 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2'

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#F0B87A' : C.naranjaInk }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function FerreteriaValdebenitoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Cotizar"
        theme={{
          over: 'light',
          bar: 'rgba(246,243,236,0.94)',
          ink: C.navy,
          line: C.line,
          btnBg: C.azul,
          btnInk: '#FFFDF8',
        }}
      />

      {/* ── Hero: titular + fachada real ── */}
      <section id="inicio" className="scroll-mt-20 pt-[72px] md:pt-[80px] border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Ferretería · Linares · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-semibold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.7rem,8vw,5rem)] mb-6`}
              style={{ color: C.navy }}
            >
              La ferretería de Rengo que{' '}
              <span style={{ color: C.naranja }}>sí tiene de todo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Herramientas y materiales para la obra, el campo y la casa
              en {BIZ.address}, {BIZ.city}. Por unidad o por volumen,
              con cotización directa por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} text-white hover:brightness-110`}
                style={{ backgroundColor: C.azul, outlineColor: C.azul }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={WA_LINK_BULTO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} border hover:bg-[#2F5D8C] hover:text-white`}
                style={{ borderColor: 'rgba(47,93,140,0.45)', color: C.azul, outlineColor: C.azul }}
              >
                Cotizar por volumen
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-semibold tap-44 focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ color: C.navy, outlineColor: C.azul }}
            >
              <Stars value={4.6} color={C.naranja} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </a>
          </Reveal>

          <Reveal delay={140}>
            <figure className="relative">
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_30px_70px_-30px_rgba(27,58,92,0.5)]">
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Fachada de Ferretería Valdebenito con su letrero azul en Rengo 435, Linares"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption
                className={`${mono.className} absolute -bottom-4 left-4 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] shadow-lg`}
                style={{ backgroundColor: '#A8551C', color: '#fff' }}
              >
                {BIZ.address} · {BIZ.city}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Tira de rubros */}
        <div className="border-t" style={{ borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 overflow-hidden">
            <p className={`${display.className} font-semibold uppercase tracking-[0.08em] text-lg md:text-xl whitespace-nowrap overflow-x-auto`} style={{ color: C.azul }} aria-label="Rubros de la tienda">
              {RUBROS.map((r, i) => (
                <span key={r}>
                  {i > 0 && <span className="mx-3" style={{ color: C.naranja }} aria-hidden="true">·</span>}
                  {r}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── Los pasillos: la tienda por dentro ── */}
      <section id="tienda" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La tienda por dentro</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-6xl leading-[0.98]`} style={{ color: C.navy }}>
              Pasillos cargados, precio de barrio
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Fotos reales de la tienda: estantería, mesón y patio de
              materiales en Rengo 435.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PASILLOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 80} className={i % 2 === 0 ? 'lg:translate-y-6' : ''}>
              <figure className="group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {p.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Por volumen ── */}
      <section id="rubros" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Compra como quieras</Eyebrow>
            <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-6xl leading-[0.98] text-white mb-4`}>
              Poco, harto <span style={{ color: '#F0B87A' }}>o por bulto</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: 'rgba(255,253,248,0.7)' }}>
              El precio mejora cuando la cantidad sube: tornillería por
              ciento, fittings por caja y materiales por bulto.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {TIERS.map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <article
                  className="h-full rounded-2xl p-6 md:p-7 border"
                  style={
                    t.hi
                      ? { backgroundColor: '#A8551C', borderColor: '#A8551C', color: '#fff' }
                      : { borderColor: 'rgba(255,253,248,0.18)', color: '#FFFDF8' }
                  }
                >
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1.5 rounded-full`} style={t.hi ? { backgroundColor: 'rgba(0,0,0,0.18)' } : { border: '1px solid rgba(255,253,248,0.3)' }}>
                      {t.tag}
                    </span>
                    <span className={`${display.className} text-3xl font-semibold leading-none`} style={{ color: t.hi ? '#fff' : '#F0B87A' }}>
                      {t.n}
                    </span>
                  </div>
                  <h3 className={`${display.className} font-semibold uppercase text-2xl md:text-3xl leading-none mb-3`}>
                    {t.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: t.hi ? 'rgba(255,255,255,0.9)' : 'rgba(255,253,248,0.7)' }}>
                    {t.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={WA_LINK_BULTO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${waBtn} mt-8 bg-white hover:bg-[#F6F3EC]`}
              style={{ color: C.navy, outlineColor: '#fff' }}
            >
              Cotizar una lista completa
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="border-b" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <Eyebrow>Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.navy }}>
                Los de Linares lo dicen
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: C.naranjaInk, textDecorationColor: 'rgba(217,123,41,0.45)', outlineColor: C.naranja }}
              >
                Ver la ficha en Google Maps →
              </a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 100}>
                <figure className="h-full flex flex-col rounded-2xl border p-6" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                  <Stars value={5} color={C.naranja} className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {r.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precios de muestra ── */}
      <section id="precios" className="scroll-mt-20 max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Precios de referencia</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.navy }}>
              Valores de muestra
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              El precio real y el stock se confirman por WhatsApp.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="rounded-2xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
            {PRECIOS.map((p, i) => (
              <li
                key={p.name}
                className="flex items-baseline gap-4 px-5 md:px-7 py-4 text-sm md:text-base"
                style={{ borderTop: i > 0 ? `1px solid ${C.line}` : 'none' }}
              >
                <span style={{ color: C.ink }}>{p.name}</span>
                <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: 'rgba(93,107,118,0.45)' }} aria-hidden="true" />
                <span className={`${display.className} font-semibold text-lg shrink-0`} style={{ color: C.naranjaInk }}>
                  {p.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs mt-4" style={{ color: C.muted }}>
            Lista de muestra — al publicar van los productos y precios reales de la tienda.
          </p>
        </Reveal>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde y cuándo</Eyebrow>
            <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-6xl leading-[0.98] mb-6`} style={{ color: C.navy }}>
              Rengo 435, Linares
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <dl className="rounded-2xl border overflow-hidden text-sm mb-8" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              {HORARIO.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b last:border-b-0" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-semibold shrink-0`} style={{ color: C.muted }}>
                    {h.days}
                  </dt>
                  <dd className="text-right font-semibold" style={{ color: h.time === 'Cerrado' ? C.muted : C.navy }}>
                    {h.time}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 px-5 py-3.5" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-semibold shrink-0`} style={{ color: C.muted }}>
                  WhatsApp
                </dt>
                <dd className="text-right font-semibold" style={{ color: C.navy }}>
                  {BIZ.phoneDisplay}
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} text-white hover:brightness-110`}
                style={{ backgroundColor: C.azul, outlineColor: C.azul }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} border hover:bg-[#2F5D8C] hover:text-white`}
                style={{ borderColor: 'rgba(47,93,140,0.45)', color: C.azul, outlineColor: C.azul }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line }}>
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

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navy, color: '#FFFDF8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <div>
            <p className={`${display.className} font-semibold uppercase text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm" style={{ color: 'rgba(255,253,248,0.72)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,253,248,0.68)' }}>
            {BIZ.rating} ★ · {BIZ.reviews} reseñas en Google
          </p>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,253,248,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(255,253,248,0.68)' }}>
            Sitio de ejemplo por Sitiazo: fotos, horario y reseñas reales de su ficha de Google; productos y precios de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
