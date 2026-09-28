import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_STOCK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  paper: '#FFFFFF',
  soft: '#F1F4F9',
  blue: '#2251FF',
  deep: '#0A1A5C',
  deepInk: '#06123F',
  lime: '#C6F24E',
  ink: '#10142A',
  muted: '#5C6478',
  line: 'rgba(16,20,42,0.14)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2251FF]'

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-la-ruta',
  title: 'Ferretería La Ruta — Tienda de herramientas en Pencahue',
  description: 'Ferretería La Ruta en Villa Santa Inés, K-60, Pencahue. Herramientas manuales y eléctricas, construcción, jardín y campo. Consulta stock y precio por WhatsApp.',
  image: '/demos/ferreteria-la-ruta/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El negocio', href: '#negocio' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const FAMILIAS = [
  {
    n: 'I',
    name: 'Herramientas manuales',
    items: [
      { name: 'Martillo carpintero 16 oz', price: '$8.990' },
      { name: 'Juego destornilladores 6 piezas', price: '$7.490' },
      { name: 'Alicate universal 8”', price: '$6.990' },
      { name: 'Huincha de medir 5 m', price: '$4.990' },
      { name: 'Sierra de arco + repuestos', price: '$9.490' },
      { name: 'Juego llaves combinadas', price: '$19.990' },
    ],
  },
  {
    n: 'II',
    name: 'Eléctricas y consumibles',
    items: [
      { name: 'Taladro percutor 13 mm', price: '$54.990' },
      { name: 'Esmeril angular 4½”', price: '$39.990' },
      { name: 'Atornillador inalámbrico', price: '$49.990' },
      { name: 'Set de brocas y puntas', price: '$12.990' },
      { name: 'Disco de corte (unidad)', price: '$1.490' },
      { name: 'Alargador eléctrico 10 m', price: '$9.990' },
    ],
  },
  {
    n: 'III',
    name: 'Construcción y obra',
    items: [
      { name: 'Cemento 25 kg', price: '$6.490' },
      { name: 'Fierro estriado 6 mm (varilla)', price: '$3.290' },
      { name: 'Carretilla de obra', price: '$49.990' },
      { name: 'Clavos y pernos (caja)', price: 'desde $2.990' },
      { name: 'Alambre negro n°16 (kg)', price: '$1.990' },
      { name: 'Malla ACMA', price: 'a cotizar' },
    ],
  },
  {
    n: 'IV',
    name: 'Jardín, campo y hogar',
    items: [
      { name: 'Manguera ½” rollo 25 m', price: '$14.990' },
      { name: 'Tijeras de podar', price: '$7.990' },
      { name: 'Pala y rastrillo de jardín', price: '$9.990' },
      { name: 'Guantes de trabajo', price: '$2.990' },
      { name: 'Candado de seguridad', price: '$6.990' },
      { name: 'Soga y cadena por metro', price: 'desde $990' },
    ],
  },
]

const SERVICIOS = [
  { name: 'Copia de llaves', price: '$3.000' },
  { name: 'Afilado de brocas y cuchillas', price: 'desde $2.500' },
  { name: 'Corte de madera a medida', price: 'según pedido' },
  { name: 'Encargo de productos sin stock', price: 'sin costo' },
  { name: 'Despacho en Pencahue y alrededores', price: 'a convenir' },
]

const TESTIMONIALS = [
  {
    text: 'Para los trabajos de la parcela encuentro todo acá, sin tener que ir hasta Talca o Molina.',
    author: 'Cliente de Villa Santa Inés',
  },
  {
    text: 'Te atienden al tiro y si no tienen algo, lo encargan. Eso se agradece en una comuna chica.',
    author: 'Cliente de Pencahue',
  },
  {
    text: 'Buen precio y buena orientación: me dijeron exactamente qué broca y qué anclaje necesitaba.',
    author: 'Cliente de la K-60',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00 – 19:00' },
  { days: 'Sábado', time: '9:00 – 14:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function Wrench({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: light ? C.lime : C.blue }}
    >
      <Wrench className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

function Leader({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="flex-1 border-b-2 border-dotted"
      style={{ borderColor: dark ? 'rgba(255,255,255,0.28)' : 'rgba(16,20,42,0.28)' }}
    />
  )
}

export default function FerreteriaLaRutaPage() {
  return (
    <div
      className={`${body.className} relative min-h-screen antialiased overflow-x-clip [&>header]:!absolute`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Portada de carta: hero tipográfico ── */}
      <section id="inicio" className="px-4 md:px-6 pt-[76px] md:pt-[96px] pb-6" style={{ backgroundColor: C.soft }}>
        <Reveal>
          <div
            className="relative max-w-5xl mx-auto text-center border-2 px-6 md:px-12 pt-9 md:pt-12 pb-8 md:pb-10"
            style={{ borderColor: C.ink, backgroundColor: C.paper }}
          >
            {/* filete interior de imprenta */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-2 md:inset-2.5 border" style={{ borderColor: C.line }} />

            <div className="relative">
              <div
                className="flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-1 border-b pb-4 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold"
                style={{ borderColor: C.ink, color: C.muted }}
              >
                <span>{BIZ.rubro}</span>
                <span className="hidden sm:inline" style={{ color: C.blue }}>Carta de mostrador</span>
                <span>{BIZ.city} · Maule</span>
              </div>

              <h1
                className={`${display.className} leading-[0.95] mt-9 md:mt-11 text-[clamp(3rem,11vw,6.2rem)]`}
                style={{ color: C.ink }}
              >
                Ferretería
                <span className="block italic font-medium" style={{ color: C.blue }}>
                  La Ruta
                </span>
              </h1>

              <div className="mt-7 flex items-center justify-center gap-4" aria-hidden="true">
                <span className="h-px w-14 md:w-24" style={{ backgroundColor: C.ink }} />
                <Wrench className="w-[18px] h-[18px]" color={C.blue} />
                <span className="h-px w-14 md:w-24" style={{ backgroundColor: C.ink }} />
              </div>

              <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-7" style={{ color: C.muted }}>
                Herramientas, materiales y consejo directo en {BIZ.address},{' '}
                {BIZ.city}. Consulta stock y precio por WhatsApp: te
                respondemos al tiro.
              </p>

              <p className="mt-5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full transition-transform hover:-translate-y-0.5 ${FOCUS} tap-44`}
                  style={{ backgroundColor: C.lime, color: C.ink }}
                >
                  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill={C.blue} stroke={C.blue} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                  </svg>
                  {BIZ.reviews} reseñas reales en Google
                </a>
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${FOCUS} tap-44`}
                  style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#carta"
                  className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border-2 border-[#10142A] text-[#10142A] transition-colors hover:bg-[#10142A] hover:text-white ${FOCUS} tap-44`}
                >
                  Ver la carta
                </a>
              </div>

              <div
                className="mt-9 border-t pt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold"
                style={{ borderColor: C.ink, color: C.muted }}
              >
                <span>{BIZ.address} · {BIZ.city}</span>
                <span>Lun–Vie 9–19 · Sáb 9–14</span>
                <span>Encargos sin costo</span>
                <span style={{ color: C.blue }}>sitio de ejemplo</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Franja lima de familias ── */}
      <div className="border-y-2" style={{ backgroundColor: C.lime, borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-7 gap-y-1 justify-center">
          {['Herramientas', 'Electricidad', 'Construcción', 'Jardín y campo', 'Llaves y afilados'].map((t) => (
            <span key={t} className={`${display.className} text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-7`} style={{ color: C.ink }}>
              {t} <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.blue }} aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      {/* ── La carta de La Ruta ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>La carta</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.03]`} style={{ color: C.ink }}>
                La carta de La Ruta:
                <br />
                <span className="italic" style={{ color: C.blue }}>el inventario, servido</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Una muestra de cómo se vería el catálogo: las familias,
                productos y precios son de ejemplo. Al publicar va el
                inventario real de la ferretería.
              </p>
            </div>
          </Reveal>

          {/* hoja de la carta */}
          <Reveal delay={100}>
            <div
              className="border-2 overflow-hidden"
              style={{ borderColor: C.ink, backgroundColor: C.paper }}
            >
              {/* cabecera de la carta */}
              <div className="px-6 md:px-10 py-5 md:py-6 flex flex-wrap items-center justify-between gap-4" style={{ backgroundColor: C.deep }}>
                <div>
                  <p className={`${display.className} text-[11px] uppercase tracking-[0.3em] font-semibold`} style={{ color: C.lime }}>
                    Carta de mostrador
                  </p>
                  <p className={`${display.className} italic font-medium text-xl md:text-2xl text-white mt-1`}>
                    {BIZ.name} · {BIZ.city}
                  </p>
                </div>
                <span
                  className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-bold px-3.5 py-1.5 rounded-full"
                  style={{ backgroundColor: C.lime, color: C.ink }}
                >
                  precios de muestra
                </span>
              </div>

              {/* familias */}
              <div className="grid md:grid-cols-2">
                {FAMILIAS.map((f, i) => (
                  <div
                    key={f.n}
                    className="p-6 md:p-9"
                    style={{
                      borderRight: i % 2 === 0 ? `1px solid ${C.line}` : undefined,
                      borderTop: i > 1 ? `1px solid ${C.line}` : undefined,
                      borderBottom: i < 2 ? `1px solid ${C.line}` : undefined,
                    }}
                  >
                    <div className="flex items-baseline gap-4 mb-4">
                      <span
                        className={`${display.className} italic font-medium text-2xl md:text-3xl leading-none`}
                        style={{ color: C.blue }}
                      >
                        {f.n}
                      </span>
                      <h3 className={`${display.className} font-semibold text-xl md:text-2xl`} style={{ color: C.ink }}>
                        {f.name}
                      </h3>
                      <span aria-hidden="true" className="flex-1 border-t" style={{ borderColor: C.line }} />
                    </div>
                    <ul>
                      {f.items.map((item) => (
                        <li key={item.name} className="flex items-baseline gap-x-3 py-[7px]">
                          <span className="text-[14px] md:text-[15px] font-medium" style={{ color: C.ink }}>
                            {item.name}
                          </span>
                          <Leader />
                          <span className={`${display.className} text-[14px] md:text-base font-semibold whitespace-nowrap tabular-nums`} style={{ color: C.blue }}>
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* servicios de mostrador */}
              <div className="border-t-2" style={{ borderColor: C.ink, backgroundColor: C.soft }}>
                <div className="px-6 md:px-10 py-7 md:py-8">
                  <div className="flex items-baseline gap-4 mb-4">
                    <p className={`${display.className} italic font-medium text-lg md:text-xl`} style={{ color: C.blue }}>
                      Servicios de mostrador
                    </p>
                    <span aria-hidden="true" className="flex-1 border-t" style={{ borderColor: C.line }} />
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-12">
                    {SERVICIOS.map((s) => (
                      <li key={s.name} className="flex items-baseline gap-x-3 py-[7px]">
                        <span className="text-[14px] md:text-[15px] font-medium" style={{ color: C.ink }}>
                          {s.name}
                        </span>
                        <Leader />
                        <span className={`${display.className} text-[14px] md:text-base font-semibold whitespace-nowrap tabular-nums`} style={{ color: C.blue }}>
                          {s.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* pie de la carta */}
              <div className="px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5" style={{ backgroundColor: C.deepInk }}>
                <p className="text-xs md:text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.66)' }}>
                  Productos, precios y servicios de esta carta son{' '}
                  <strong className="font-bold" style={{ color: C.lime }}>de muestra</strong>:
                  al publicar van el inventario y los valores reales de {BIZ.name}.
                </p>
                <a
                  href={WA_LINK_STOCK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} shrink-0 text-center font-semibold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${FOCUS} tap-44`}
                  style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
                >
                  Consultar stock y precio →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="negocio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El negocio</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.03] mb-6`} style={{ color: C.ink }}>
              Ferretería de barrio
              <br />
              <span className="italic" style={{ color: C.blue }}>en la K-60</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
              {BIZ.name} está en Villa Santa Inés, sobre la ruta K-60 que
              cruza {BIZ.city}. Es la ferretería de la zona: quien trabaja
              la parcela, la obra o la casa pasa, pregunta y sale con lo
              que necesita.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              La atención es directa, de mostrador: se consulta, se
              aconseja y si algo no está, se encarga. Las{' '}
              <strong className="font-bold" style={{ color: C.ink }}>{BIZ.reviews} reseñas de Google</strong>{' '}
              son de clientes reales de la comuna.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Stock para obra, casa y campo en un solo local',
                'Atención directa y consejo de mostrador',
                'Encargos de productos sin stock',
                'Despacho coordinado por WhatsApp',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm md:text-[15px] font-semibold" style={{ color: C.ink }}>
                  <span className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center" style={{ backgroundColor: C.lime }} aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke={C.ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-bold underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity ${FOCUS} tap-44`}
              style={{ color: C.blue, textDecorationColor: 'rgba(34,81,255,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={120 + i * 110}>
                <figure
                  className="border-l-4 pl-6 md:pl-7 py-1"
                  style={{ borderColor: C.blue }}
                >
                  <blockquote className={`${display.className} italic text-lg md:text-xl leading-relaxed mb-3`} style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                      {t.author} · Reseña de ejemplo
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <p className="text-xs leading-relaxed pt-1" style={{ color: C.muted }}>
              Estos textos son de muestra: al publicar van las reseñas
              reales de la ficha de Google.
            </p>
          </div>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.03] mb-6 text-white`}>
              Villa Santa Inés,
              <br />
              <span className="italic" style={{ color: C.lime }}>ruta K-60</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {BIZ.address}, {BIZ.postal}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-1 mb-3 max-w-sm">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-baseline gap-x-3 py-[6px] text-sm md:text-base">
                  <span className="font-semibold text-white">{h.days}</span>
                  <Leader dark />
                  <span className={`${display.className} font-semibold whitespace-nowrap`} style={{ color: C.lime }}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Horario referencial: al publicar van los horarios reales
              de la ferretería.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F24E] tap-44`}
                style={{ backgroundColor: C.lime, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border-2 border-white/50 text-white transition-colors hover:bg-white hover:text-[#0A1A5C] hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F24E] tap-44`}
              >
                Cómo llegar →
              </a>
            </div>
            <p className="text-xs mt-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {BIZ.phoneDisplay} ·{' '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                Facebook
              </a>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden min-h-[320px] h-full border" style={{ borderColor: 'rgba(255,255,255,0.18)', backgroundColor: C.deepInk }}>
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
      <footer style={{ backgroundColor: C.deepInk, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} italic font-medium text-xl md:text-2xl mb-2 flex items-center gap-3`}>
              <Wrench className="w-5 h-5" color={C.lime} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 md:pb-8 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-semibold underline underline-offset-2 hover:opacity-80 tap-44`} style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Productos, precios y
            horarios son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-semibold underline underline-offset-2 hover:opacity-80 tap-44`} style={{ color: C.lime }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
