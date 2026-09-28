import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_BULTO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  carbon: '#0A0D12',
  panel: '#10161F',
  blue: '#1F5673',
  blueDeep: '#123347',
  gray: '#8494A2',
  cyan: '#45D5E8',
  ink: '#EEF4F9',
  muted: '#93A0AF',
  glass: 'rgba(10,13,18,0.72)',
  glassHi: 'rgba(10,13,18,0.82)',
  line: 'rgba(255,255,255,0.1)',
} as const

const GLASS = {
  backgroundColor: C.glass,
  border: `1px solid ${C.line}`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
} as const

const GLOW_BTN = {
  backgroundColor: C.cyan,
  color: '#06121A',
  boxShadow:
    '0 0 0 1px rgba(69,213,232,0.35), 0 0 28px rgba(69,213,232,0.38), 0 8px 30px rgba(69,213,232,0.22)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-valdebenito',
  title: 'Ferretería Valdebenito — Herramientas y materiales en Linares',
  description: 'Tienda de herramientas en Rengo 435, Linares. Surtido para la obra, el campo y la casa, con venta por unidad y por volumen. Cotiza por WhatsApp.',
  image: '/demos/ferreteria-valdebenito/hero.webp',
})

const NAV_LINKS = [
  { label: 'El surtido', href: '#surtido' },
  { label: 'Por volumen', href: '#volumen' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SURTIDO = [
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Estante con fittings de PVC y galvanizados ordenados por medida',
    span: 'md:col-span-7',
    tag: 'agua y campo',
    name: 'Riego, agua y agro',
    desc: 'Fittings PVC y galvanizados, válvulas de paso, mangueras y herramienta de campo para la parcela y la obra.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Mesón con herramientas manuales: martillos, alicates y huinchas de medir',
    span: 'md:col-span-5',
    tag: 'de banco',
    name: 'Herramientas manuales',
    desc: 'Martillos, alicates, medición y fijaciones: lo que se ocupa todos los días, listo para llevar.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Cajones de tornillería y ferretería fina para vender por unidad o al peso',
    span: 'md:col-span-5',
    tag: 'a granel',
    name: 'Tornillería y ferretería fina',
    desc: 'Tornillos, golillas y alambre por unidad, por caja o al peso, pesado ahí mismo en el mesón.',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Pasillo de la ferretería con estantería de materiales de construcción',
    span: 'md:col-span-7',
    tag: 'de obra',
    name: 'Construcción y materiales',
    desc: 'Cemento, pinturas, carretillas y el material grueso de la obra, en el pasillo de siempre.',
  },
]

const TIERS = [
  {
    tag: 'unidad',
    name: 'Precio de mostrador',
    desc: 'Lo que necesitas hoy, sin mínimo de compra ni trámite.',
  },
  {
    tag: 'caja · cientos',
    name: 'Descuento por volumen',
    desc: 'Para la obra, el taller y la parcela: mejor precio por caja o por ciento.',
    hi: true,
  },
  {
    tag: 'encargo',
    name: 'Pedido por bulto',
    desc: 'Pedidos grandes se encargan y se coordinan directo por WhatsApp.',
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

const TESTIMONIALS = [
  {
    text: 'Tienen de todo y si falta algo lo encargan. Para la obra compro por caja y me sale mejor.',
    author: 'Maestro de obra, Linares',
  },
  {
    text: 'Atención directa y rápida: pregunté por WhatsApp, me confirmaron stock y pasé a retirar.',
    author: 'Cliente del centro',
  },
  {
    text: 'Para la parcela encuentro fittings y mangueras sin ir a Talca. Buenos precios por volumen.',
    author: 'Parcelero de la zona',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: 'Horario de día' },
  { days: 'Sábado', time: 'Horario de mañana' },
]

/** Tuerca hexagonal: marca del rubro. */
function Nut({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 L19.5 7.5 V16.5 L12 21 L4.5 16.5 V7.5 Z" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: C.cyan }}
    >
      <Nut className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function FerreteriaValdebenitoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.carbon, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(10,13,18,0.88)',
          ink: C.ink,
          line: C.line,
          btnBg: C.cyan,
          btnInk: '#06121A',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Ferretería Valdebenito: pasillo con estantería de fittings, herramientas y materiales"
          fill
          priority
          sizes="100vw"
          className="object-cover saturate-[0.95] contrast-[1.06] brightness-[0.82]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,13,18,0.78) 0%, rgba(10,13,18,0.45) 40%, rgba(10,13,18,0.9) 82%, #0A0D12 100%)',
          }}
        />
        {/* halo azul distribución */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 72% 30%, rgba(31,86,115,0.4) 0%, transparent 68%)',
          }}
          aria-hidden="true"
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44"
              style={{ ...GLASS, color: C.ink, boxShadow: '0 0 20px rgba(69,213,232,0.15)' }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.cyan} stroke={C.cyan} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 font-semibold flex items-center gap-3" style={{ color: C.muted }}>
              <Nut className="w-[18px] h-[18px]" color={C.cyan} />
              Tienda de herramientas · {BIZ.city} · Región del Maule
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[1.06] tracking-[-0.01em] text-[clamp(2.3rem,8.5vw,5.2rem)] mb-6`}
            >
              La herramienta exacta,
              <br />
              <span style={{ color: C.cyan }}>al precio de siempre</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(238,244,249,0.82)' }}>
              Herramientas y materiales para la obra, el campo y la casa
              en {BIZ.address}, {BIZ.city}. Por unidad o por volumen.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44`}
                style={GLOW_BTN}
              >
                Escribir por WhatsApp
              </a>
              <a
                href="#surtido"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44`}
                style={{ ...GLASS, color: C.ink }}
              >
                Ver el surtido
              </a>
            </div>
          </Reveal>
        </div>
        {/* ficha de datos al pie del hero */}
        <div className="relative" style={{ backgroundColor: 'rgba(10,13,18,0.72)', backdropFilter: 'blur(10px)', borderTop: `1px solid ${C.line}` }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-24 md:pb-16 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: C.muted }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.cyan, boxShadow: '0 0 10px rgba(69,213,232,0.9)' }} aria-hidden="true" />
              venta por unidad y por volumen
            </span>
            <span>Obra · campo · casa</span>
            <span className="hidden md:inline" style={{ color: C.cyan }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El surtido por pasillo ── */}
      <section id="surtido" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.12] mb-5`}>
              Todo lo que la obra pide,
              <br />
              <span style={{ color: C.cyan }}>en un solo paso</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              Una muestra del surtido por familia. Al publicar van las
              líneas y marcas reales de la tienda.
            </p>
          </div>
        </Reveal>
        <ul className="grid md:grid-cols-12 gap-4 md:gap-5">
          {SURTIDO.map((s, i) => (
            <Reveal key={s.name} delay={i * 90} className={s.span}>
              <li className="group relative rounded-2xl overflow-hidden h-full min-h-[260px] md:min-h-[300px]" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover saturate-[0.95] contrast-[1.05] brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,13,18,0.15) 0%, rgba(10,13,18,0.25) 45%, rgba(10,13,18,0.88) 100%)',
                  }}
                />
                <span
                  className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full"
                  style={{ ...GLASS, color: C.cyan }}
                >
                  {s.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7" style={GLASS}>
                  <h3 className={`${display.className} font-bold text-lg md:text-2xl leading-snug mb-1.5`}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: 'rgba(238,244,249,0.75)' }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 md:mt-16">
            {['Stock de mostrador', 'Encargos por bulto', 'Marcas de obra y de campo'].map((chip) => (
              <span key={chip} className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.muted }}>
                <Nut className="w-4 h-4" color={C.cyan} />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Por volumen ── */}
      <section id="volumen" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.blueDeep }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 90% at 15% 10%, rgba(31,86,115,0.55) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 90% 90%, rgba(69,213,232,0.12) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.12] mb-6`}>
                Compra poco
                <br />
                <span style={{ color: C.cyan }}>o compra harto</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(238,244,249,0.78)' }}>
                El precio mejora cuando la cantidad sube: tornillería por
                ciento, fittings por caja y materiales por bulto. Cotiza
                tu lista completa y te confirmamos valor y stock.
              </p>
              <a
                href={WA_LINK_BULTO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44`}
                style={GLOW_BTN}
              >
                Cotizar por volumen
              </a>
            </Reveal>
            <Reveal delay={140}>
              <ul className="space-y-4">
                {TIERS.map((t) => (
                  <li
                    key={t.tag}
                    className="rounded-2xl p-6 md:p-7 flex gap-5 items-start"
                    style={
                      t.hi
                        ? { ...GLASS, backgroundColor: C.glassHi, boxShadow: '0 0 30px rgba(69,213,232,0.16), inset 0 0 30px rgba(69,213,232,0.05)' }
                        : GLASS
                    }
                  >
                    <span
                      className={`${display.className} shrink-0 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full`}
                      style={
                        t.hi
                          ? { backgroundColor: C.cyan, color: '#06121A', boxShadow: '0 0 18px rgba(69,213,232,0.4)' }
                          : { border: `1px solid ${C.line}`, color: C.cyan }
                      }
                    >
                      {t.tag}
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold text-base md:text-xl mb-1.5`}>
                        {t.name}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(238,244,249,0.72)' }}>
                        {t.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-5" style={{ color: 'rgba(238,244,249,0.62)' }}>
                Esquema de precios de muestra: los valores reales se confirman por WhatsApp.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La tienda: sobre el negocio ── */}
      <section id="tienda" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/ambiente.webp`}
                alt="Fachada de Ferretería Valdebenito desde la calle: cortina abierta y estantería con herramientas"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover saturate-[0.95] contrast-[1.05] brightness-[0.9]"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(10,13,18,0.55) 100%)' }}
              />
              <span
                className="absolute bottom-4 left-4 text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full"
                style={{ ...GLASS, color: C.ink }}
              >
                {BIZ.address} · {BIZ.city}
              </span>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-4 rounded-2xl px-5 py-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44"
              style={{ ...GLASS, boxShadow: '0 0 24px rgba(69,213,232,0.1)' }}
            >
              <span className={`${display.className} font-extrabold text-2xl leading-none shrink-0`} style={{ color: C.cyan }}>
                {BIZ.reviews}
              </span>
              <span className="text-[11px] md:text-sm leading-snug" style={{ color: C.muted }}>
                reseñas en Google · ver la ficha en Google Maps →
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>La tienda</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-[1.15] mb-6`}>
              La ferretería de
              <br />
              <span style={{ color: C.cyan }}>Rengo, en Linares</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} está en {BIZ.address}, a pasos del centro de{' '}
              {BIZ.city}. El surtido está pensado para la zona: obra de
              construcción, parcela y arreglos de la casa.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              La atención es directa: quien pesa los tornillos en el
              mesón es la misma persona que responde el WhatsApp. Sin
              formularios ni esperas.
            </p>
            <ul className="space-y-3 mb-10">
              {['Surtido para la obra, el campo y la casa', 'Precio por unidad y mejor precio por volumen', 'Consulta de stock y cotización por WhatsApp'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                  <Nut className="w-4 h-4 shrink-0" color={C.cyan} />
                  <span style={{ color: 'rgba(238,244,249,0.9)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-6" style={{ color: C.gray }}>
              Los textos a continuación son de muestra: al publicar van
              las reseñas reales de la ficha de Google.
            </p>
            <div className="space-y-4">
              {TESTIMONIALS.map((t) => (
                <figure key={t.author} className="rounded-2xl p-5 md:p-6" style={GLASS}>
                  <blockquote className="text-sm md:text-[15px] leading-relaxed mb-3" style={{ color: 'rgba(238,244,249,0.88)' }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.cyan }}>
                    {t.author} · Reseña de ejemplo
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="max-w-3xl mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.12] mb-5`}>
                Precios
                <br />
                <span style={{ color: C.cyan }}>de referencia</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
                Valores de muestra para dimensionar el sitio. El precio
                real y el stock se confirman por WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden" style={{ ...GLASS, backgroundColor: 'rgba(10,13,18,0.6)' }}>
              <ul>
                {PRECIOS.map((p, i) => (
                  <li
                    key={p.name}
                    className="flex items-baseline gap-4 px-6 md:px-8 py-4 md:py-5 text-sm md:text-base transition-colors hover:bg-white/[0.04]"
                    style={{ borderTop: i > 0 ? `1px solid ${C.line}` : 'none' }}
                  >
                    <span style={{ color: 'rgba(238,244,249,0.88)' }}>{p.name}</span>
                    <span
                      className="flex-1 border-b border-dotted translate-y-[-3px]"
                      style={{ borderColor: 'rgba(147,160,175,0.4)' }}
                      aria-hidden="true"
                    />
                    <span className={`${display.className} font-semibold shrink-0`} style={{ color: C.cyan }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-xs md:text-sm mt-6 text-center" style={{ color: C.gray }}>
              Lista de muestra — al publicar van los productos y precios reales de la tienda.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.08] mb-6`}>
              Rengo 435,
              <br />
              <span style={{ color: C.cyan }}>Linares</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="flex items-center gap-3 text-sm md:text-base mb-8" style={{ color: C.muted }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 decoration-[rgba(69,213,232,0.4)] transition-colors hover:decoration-[#45D5E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44"
                style={{ color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </p>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.gray }}>
              Horario referencial: al publicar van los horarios reales
              de la tienda.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44`}
                style={GLOW_BTN}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3.5 rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44`}
                style={{ ...GLASS, color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden min-h-[320px] h-full" style={{ ...GLASS, backgroundColor: C.panel }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.blueDeep }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 90% at 50% 110%, rgba(69,213,232,0.14) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold text-[clamp(1.9rem,6vw,3.8rem)] leading-[1.1] mb-6`}>
              Mándanos tu lista
              <br />
              <span style={{ color: C.cyan }}>y te la cotizamos</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(238,244,249,0.75)' }}>
              Escríbenos por WhatsApp con lo que necesitas: confirmamos
              stock, precio y precio por volumen el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45D5E8] tap-44`}
              style={GLOW_BTN}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#070A0E', color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 md:pb-20">
          <p className={`${display.className} font-bold text-lg mb-1 flex items-center gap-2.5`}>
            <Nut className="w-4 h-4" color={C.cyan} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm" style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
          <p className="text-xs mt-3" style={{ color: C.muted }}>
            Sitio de ejemplo por Sitiazo: textos, precios y reseñas son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
