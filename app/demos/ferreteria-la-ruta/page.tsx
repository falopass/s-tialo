import type { Metadata } from 'next'
import { Outfit, Manrope } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_STOCK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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

export const metadata: Metadata = {
  title: 'Ferretería La Ruta — Tienda de herramientas en Pencahue',
  description:
    'Ferretería La Ruta en Villa Santa Inés, K-60, Pencahue. Herramientas manuales y eléctricas, construcción, jardín y campo. Consulta stock y precio por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El negocio', href: '#negocio' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const FAMILIAS = [
  {
    n: '01',
    name: 'Herramientas manuales',
    src: `${IMG}/detalle1.webp`,
    alt: 'Herramientas manuales ordenadas en el mesón de la ferretería',
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
    n: '02',
    name: 'Eléctricas y consumibles',
    src: `${IMG}/detalle2.webp`,
    alt: 'Taladro y herramientas eléctricas de la vitrina',
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
    n: '03',
    name: 'Construcción y obra',
    src: `${IMG}/detalle3.webp`,
    alt: 'Materiales de construcción y fierros en la ferretería',
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
    n: '04',
    name: 'Jardín, campo y hogar',
    src: `${IMG}/ambiente.webp`,
    alt: 'Sala de la ferretería con estantería llena de productos',
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
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.lime : C.blue }}
    >
      <Wrench className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function FerreteriaLaRutaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deepInk }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Mesón y estantería de Ferretería La Ruta en Pencahue"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,18,63,0.62) 0%, rgba(10,26,92,0.18) 42%, rgba(6,18,63,0.88) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: C.lime, color: C.ink }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.blue} stroke={C.blue} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Tienda de herramientas · K-60 · Pencahue</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.0] tracking-[-0.015em] text-[clamp(2.7rem,9vw,5.6rem)] mb-6 text-white`}
            >
              La ferretería de la ruta:
              <br />
              <span style={{ color: C.lime }}>todo para la obra,</span>
              <br />
              la casa y el campo
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Herramientas, materiales y consejo directo en {BIZ.address},{' '}
              {BIZ.city}. Consulta stock y precio por WhatsApp: te
              respondemos al tiro.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.lime, color: C.ink }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(6,18,63,0.6)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.lime }} aria-hidden="true" />
              atención directa
            </span>
            <span>Encargos sin costo</span>
            <span className="hidden md:inline" style={{ color: C.lime }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Franja lima ── */}
      <div style={{ backgroundColor: C.lime }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-7 gap-y-1 justify-center">
          {['Herramientas', 'Electricidad', 'Construcción', 'Jardín y campo', 'Llaves y afilados'].map((t) => (
            <span key={t} className={`${display.className} text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-7`} style={{ color: C.ink }}>
              {t} <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.blue }} aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      {/* ── La carta de La Ruta ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>La carta</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.03]`} style={{ color: C.ink }}>
                La carta de La Ruta:
                <br />
                <span style={{ color: C.blue }}>el inventario, servido</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Una muestra de cómo se vería el catálogo: las familias,
                productos y precios son de ejemplo. Al publicar va el
                inventario real de la ferretería.
              </p>
            </div>
          </Reveal>

          {/* pizarra / carta */}
          <Reveal delay={100}>
            <div
              className="rounded-3xl overflow-hidden border shadow-sm"
              style={{ borderColor: C.line, backgroundColor: C.paper }}
            >
              {/* cabecera de la carta */}
              <div className="px-6 md:px-10 py-5 md:py-6 flex flex-wrap items-center justify-between gap-4" style={{ backgroundColor: C.deep }}>
                <div>
                  <p className={`${display.className} text-[11px] uppercase tracking-[0.3em] font-bold`} style={{ color: C.lime }}>
                    Carta de mostrador
                  </p>
                  <p className={`${display.className} font-bold text-xl md:text-2xl text-white mt-1`}>
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
                    className="border-b md:border-b-0 p-6 md:p-9"
                    style={{
                      borderColor: C.line,
                      borderRight: i % 2 === 0 ? `1px solid ${C.line}` : undefined,
                      borderTop: i > 1 ? `1px solid ${C.line}` : undefined,
                      borderBottom: i < 2 ? `1px solid ${C.line}` : undefined,
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl mb-5">
                      <img
                        src={f.src}
                        alt={f.alt}
                        loading="lazy"
                        className="w-full h-28 md:h-32 object-cover"
                      />
                      <span
                        className={`${display.className} absolute top-3 left-3 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm`}
                        style={{ backgroundColor: C.lime, color: C.ink }}
                      >
                        {f.n}
                      </span>
                    </div>
                    <h3 className={`${display.className} font-extrabold text-xl md:text-2xl mb-1`} style={{ color: C.blue }}>
                      {f.name}
                    </h3>
                    <ul className="mt-3">
                      {f.items.map((item) => (
                        <li key={item.name} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3 py-[7px]">
                          <span className="text-[14px] md:text-[15px] font-semibold" style={{ color: C.ink }}>
                            {item.name}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-[0.6em] border-b-2 border-dotted"
                            style={{ borderColor: 'rgba(16,20,42,0.28)' }}
                          />
                          <span className={`${display.className} text-[14px] md:text-base font-bold whitespace-nowrap`} style={{ color: C.blue }}>
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* servicios de mostrador */}
              <div className="border-t" style={{ borderColor: C.line }}>
                <div className="px-6 md:px-10 py-7 md:py-8">
                  <p className={`${display.className} text-[11px] uppercase tracking-[0.3em] font-bold mb-5`} style={{ color: C.blue }}>
                    Servicios de mostrador
                  </p>
                  <ul className="grid md:grid-cols-2 gap-x-12">
                    {SERVICIOS.map((s) => (
                      <li key={s.name} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3 py-[7px]">
                        <span className="text-[14px] md:text-[15px] font-semibold" style={{ color: C.ink }}>
                          {s.name}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-[0.6em] border-b-2 border-dotted"
                          style={{ borderColor: 'rgba(16,20,42,0.28)' }}
                        />
                        <span className={`${display.className} text-[14px] md:text-base font-bold whitespace-nowrap`} style={{ color: C.blue }}>
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
                  className={`${display.className} shrink-0 font-bold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95`}
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
      <section id="negocio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El negocio</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.03] mb-6`} style={{ color: C.ink }}>
              Ferretería de barrio
              <br />
              <span style={{ color: C.blue }}>en la K-60</span>
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
              className="text-sm font-bold underline underline-offset-4 decoration-2"
              style={{ color: C.blue, textDecorationColor: 'rgba(34,81,255,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={120 + i * 110}>
                <figure
                  className="rounded-3xl p-6 md:p-7 border"
                  style={{ backgroundColor: C.paper, borderColor: C.line }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.blue }}>
                      {t.author} · Reseña de ejemplo
                    </span>
                    <Wrench className="w-4 h-4 shrink-0" color={C.lime} />
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
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.03] mb-6 text-white`}>
              Villa Santa Inés,
              <br />
              <span style={{ color: C.lime }}>ruta K-60</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {BIZ.address}, {BIZ.postal}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.lime} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold text-white">{h.days}:</strong> {h.time}
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
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.lime, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className="text-xs mt-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {BIZ.phoneDisplay} ·{' '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors">
                Facebook
              </a>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden min-h-[320px] h-full border" style={{ borderColor: 'rgba(255,255,255,0.18)', backgroundColor: C.deepInk }}>
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

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deepInk, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2 flex items-center gap-3`}>
              <Wrench className="w-5 h-5" color={C.lime} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            productos, precios, servicios, horarios y fotos son de muestra;
            la dirección, el teléfono, el Facebook y las {BIZ.reviews}{' '}
            reseñas de Google son los datos reales de la ficha.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
