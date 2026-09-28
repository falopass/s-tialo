import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PRESUPUESTO, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

const C = {
  paper: '#F4F4F2',
  card: '#FFFFFF',
  ink: '#1E2023',
  muted: '#5C6267',
  line: 'rgba(30,32,35,0.16)',
  red: '#C1272D',
  fleet: '#4A4E52',
  fleetDeep: '#2A2D30',
  signal: '#E8631A',
  signalHi: '#F07A2E',
  signalDeep: '#A8440F',
  signalSoft: '#FDEBDD',
}

export const metadata: Metadata = demoMetadata({
  slug: 'taller-mecanico-servimac',
  title: 'Taller mecánico Servimac — Mecánica automotriz en Molina',
  description: 'Taller de reparación de automóviles en Luis Cruz Martínez 3581, Molina. Frenos y rectificados, mantención, sala de ventas de repuestos y servicio de grúa.',
  image: '/demos/taller-mecanico-servimac/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const OTS = [
  {
    num: 'OT-01',
    status: 'Recepcionado',
    statusColor: C.fleet,
    src: `${IMG}/rampa.webp`,
    alt: 'Camioneta elevada en la rampa del taller Servimac, de noche',
    name: 'Mantención preventiva',
    desc: 'Cambio de aceite y filtros, correas, frenos y puntos de seguridad. La revisión completa antes de que algo falle en carretera.',
    datum: 'Recomendada cada 10.000 km',
  },
  {
    num: 'OT-02',
    status: 'En diagnóstico',
    statusColor: C.signalDeep,
    src: `${IMG}/torno.webp`,
    alt: 'Mecánico de Servimac rectificando un disco de freno en el torno del taller',
    name: 'Frenos y rectificados',
    desc: 'Rectificado de discos y tambores de freno, cambio de pastillas y patines, embrague. Si el auto tiembla o suena al frenar, acá se revisa.',
    datum: 'Rectificado en el mismo taller',
  },
  {
    num: 'OT-03',
    status: 'En reparación',
    statusColor: C.red,
    src: `${IMG}/repuesto.webp`,
    alt: 'Radiador nuevo en su caja, repuesto de la sala de ventas de Servimac',
    name: 'Repuestos y sala de ventas',
    desc: 'La sala de ventas al costado del taller tiene repuestos nuevos y alternativos: radiadores, baterías, filtros y más.',
    datum: 'Repuestos en tienda',
  },
  {
    num: 'OT-04',
    status: 'Listo para entrega',
    statusColor: C.signalDeep,
    src: `${IMG}/mostrador.webp`,
    alt: 'Mostrador de la sala de ventas de Servimac en Molina',
    name: 'Recepción directa y grúa',
    desc: 'Te atiende el mismo mecánico que va a ver tu auto. Y si quedas tirado en la ruta, la grúa propia te va a buscar.',
    datum: 'Servicio de grúa propio',
  },
]

const TESTIMONIALS = [
  {
    text: 'El mejor taller mecánico en Molina a mi parecer: los trabajadores hablan con la verdad y son muy rápidos. Además cuentan con grúa que te puede ir a buscar si quedas tirado donde sea.',
    author: 'Daniel Albornoz',
  },
  {
    text: 'Excelente servicio, nos fueron a buscar en grúa y la reparación del vehículo fue súper rápida. Cabe destacar la expertis de los mecánicos en vehículos petroleros.',
    author: 'Mauricio Marilaf',
  },
  {
    text: 'Excelente taller, muy responsables, buena atención.',
    author: 'Hector Carrasco',
  },
]

const PRECIOS = [
  { name: 'Rectificado de discos de freno', price: 'A consultar' },
  { name: 'Rectificado de tambores', price: 'A consultar' },
  { name: 'Cambio de pastillas de freno', price: 'A consultar' },
  { name: 'Mantención de motor (aceite y filtros)', price: 'A consultar' },
  { name: 'Servicio de grúa', price: 'A consultar' },
]

const HORAS = [
  { days: 'Lunes a jueves', time: '8:00–13:00 · 14:00–18:00' },
  { days: 'Viernes', time: '8:00–14:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
]

function Wrench({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function Check({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5 L9.5 18 L20 6.5" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color: light ? 'rgba(255,255,255,0.72)' : C.red }}
    >
      <span className="inline-block w-[10px] h-[10px]" style={{ backgroundColor: light ? C.signal : C.red }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function TallerServimacPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* Velo oscuro detrás del nav: el texto blanco va sobre la foto del hero */}
      <div
        className="fixed top-0 inset-x-0 z-40 h-[60px] md:h-[68px]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(42,45,48,0.82) 0%, rgba(42,45,48,0.55) 100%)',
        }}
      >
        <BlitzNav
          name={BIZ.short}
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(244,244,242,0.94)',
            ink: C.ink,
            line: C.line,
            btnBg: C.red,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.fleetDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada nocturna del taller Servimac en Luis Cruz Martínez, Molina: letrero luminoso y camioneta en la rampa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(42,45,48,0.62) 0%, rgba(42,45,48,0.15) 42%, rgba(42,45,48,0.88) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} flex items-center gap-2.5 text-xs md:text-sm font-medium px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: 'rgba(244,244,242,0.95)', color: C.ink }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.red} stroke={C.red} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.rating} ★ · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          {/* pr reserva la franja de la burbuja flotante de WhatsApp */}
          <Reveal className="pr-24 md:pr-28">
            <Eyebrow light>Taller de reparación · Molina</Eyebrow>
            <h1
              className={`${display.className} uppercase leading-[0.95] tracking-[0.005em] text-[clamp(3rem,10.5vw,6.5rem)] mb-6`}
              style={{ color: '#F4F4F2' }}
            >
              Entra con un ruido,
              <br />
              <span style={{ color: C.signalHi }}>sale a la hora acordada</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(244,244,242,0.88)' }}>
              Taller mecánico de barrio en {BIZ.address}, {BIZ.city}:
              diagnóstico claro, presupuesto cerrado y entrega cumplida.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: 'rgba(244,244,242,0.55)', color: '#F4F4F2' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(244,244,242,0.22)', backgroundColor: 'rgba(42,45,48,0.8)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(244,244,242,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.signal }} aria-hidden="true" />
              atención directa del mecánico
            </span>
            <span>Presupuesto cerrado</span>
            <span className="hidden md:inline" style={{ color: C.signalHi }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Tarjetas apiladas: órdenes de trabajo ── */}
      <section id="servicios" className="scroll-mt-20 pt-16 md:pt-24 pb-8 md:pb-14">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Servicios del taller</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.ink }}>
                Cada auto entra
                <br />
                <span style={{ color: C.red }}>con orden de trabajo</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Desliza y cada orden se apila sobre la anterior, como en
                la mesa del taller. Frenos, mantenciones, repuestos y
                grúa: lo que Servimac publica en sus redes.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          {OTS.map((ot, i) => (
            <article
              key={ot.num}
              className="sticky mb-8 md:mb-12 overflow-hidden border-2"
              style={{
                top: `calc(88px + ${i * 26}px)`,
                zIndex: i + 1,
                backgroundColor: C.card,
                borderColor: C.fleet,
                boxShadow: '0 -18px 48px rgba(30,32,35,0.28)',
              }}
            >
              {/* cinta de orden de trabajo */}
              <div
                className={`${mono.className} flex items-center justify-between gap-3 px-4 md:px-6 py-3 text-[11px] md:text-xs uppercase tracking-[0.16em] border-b-2`}
                style={{ borderColor: C.fleet, color: C.muted, backgroundColor: C.paper }}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    className="px-2.5 py-1 font-bold shrink-0"
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    {ot.num}
                  </span>
                  <span className="truncate">Servimac · {BIZ.city}</span>
                </span>
                <span
                  className="flex items-center gap-2 shrink-0 font-bold"
                  style={{ color: ot.statusColor }}
                >
                  <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: ot.statusColor }} aria-hidden="true" />
                  {ot.status}
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[16/10] md:aspect-[16/8]">
                <Image
                  src={ot.src}
                  alt={ot.alt}
                  fill
                  sizes="(min-width: 1024px) 960px, calc(100vw - 40px)"
                  className="object-cover"
                />
                <p
                  className={`${mono.className} absolute left-4 bottom-4 md:left-6 max-w-[calc(100%-2rem)] flex items-center gap-2.5 px-3 py-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.08em]`}
                  style={{ backgroundColor: 'rgba(30,32,35,0.86)', color: '#F4F4F2', backdropFilter: 'blur(4px)' }}
                >
                  <Check className="w-3.5 h-3.5 shrink-0" color={C.signal} />
                  {ot.datum}
                </p>
              </div>
              <div className="px-4 md:px-6 py-5 md:py-6">
                <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-[1.05] mb-2`} style={{ color: C.ink }}>
                  {ot.name}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed max-w-xl" style={{ color: C.muted }}>
                  {ot.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── El taller ── */}
      <section id="taller" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <div className="relative border-2 overflow-hidden aspect-[4/3]" style={{ borderColor: C.fleet, boxShadow: '8px 8px 0 ' + C.red }}>
              <Image
                src={`${IMG}/sala.webp`}
                alt="Sala de ventas de Servimac: pasillo con vitrinas, baterías y repuestos"
                fill
                sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
            <dl className={`${mono.className} grid grid-cols-3 gap-4 mt-8`}>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: C.muted }}>Google</dt>
                <dd className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.red }}>{BIZ.rating} ★</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: C.muted }}>Instagram</dt>
                <dd className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.red }}>{BIZ.igFollowers}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: C.muted }}>Atención</dt>
                <dd className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.red }}>Directa</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>El taller</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              Un taller de barrio,
              <br />
              <span style={{ color: C.red }}>en plena Molina</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: C.muted }}>
              Servimac atiende en {BIZ.address}: llegas, te recibe el
              mismo mecánico que va a ver tu auto y te vas sabiendo qué
              se le hizo y cuánto costó. Sin intermediarios ni letra
              chica.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Atención directa con el mecánico, no con un recepcionista',
                'Presupuesto cerrado antes de empezar el trabajo',
                'Aviso por WhatsApp de cómo va tu auto',
                `${BIZ.rating} de 5 en Google con ${BIZ.reviews} reseñas y grúa propia`,
                `Sala de ventas con repuestos al costado del taller`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                  <Check className="w-4 h-4 shrink-0" color={C.signal} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-xs md:text-sm font-medium underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ color: C.fleet, textDecorationColor: 'rgba(74,78,82,0.35)' }}
            >
              Ver la página en Facebook →
            </a>
          </Reveal>
        </div>

        {/* opiniones */}
        <div className="border-t-2 mt-14 md:mt-20 pt-12 md:pt-16" style={{ borderColor: C.fleet }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h3 className={`${display.className} uppercase text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
                Lo que valoran
                <br />
                los clientes
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                {BIZ.name} tiene {BIZ.rating} sobre 5 en Google, en
                {BIZ.reviews} reseñas. Estas son citas textuales de la
                ficha pública.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm font-medium underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ color: C.red, textDecorationColor: 'rgba(193,39,45,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={100 + i * 100}>
                  <figure
                    className="border-2 p-5 md:p-6"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-medium`} style={{ color: C.red }}>
                        {t.author} · Reseña de Google
                      </span>
                      <Wrench className="w-4 h-4 shrink-0" color={C.fleet} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.fleetDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Precios de referencia</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0]`} style={{ color: '#F4F4F2' }}>
                Precios claros,
                <br />
                <span style={{ color: C.signalHi }}>antes de abrir el capó</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(244,244,242,0.85)' }}>
                Los servicios son los que publica el taller en sus
                redes. Los valores se cotizan por WhatsApp según el
                vehículo y el repuesto.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="border-t" style={{ borderColor: 'rgba(244,244,242,0.18)' }}>
              {PRECIOS.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-5 md:py-6"
                  style={{ borderColor: 'rgba(244,244,242,0.18)' }}
                >
                  <span className="text-base md:text-lg font-medium" style={{ color: '#F4F4F2' }}>
                    {p.name}
                  </span>
                  <span className={`${mono.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.signalHi }}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(244,244,242,0.8)' }}>
                Servicios reales · valores a cotizar por WhatsApp
              </p>
              <a
                href={WA_LINK_PRESUPUESTO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.signalHi, color: C.fleetDeep }}
              >
                Pedir presupuesto real
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.red }}>{BIZ.city}</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-6">
              {HORAS.map((h) => (
                <li key={h.days} className={`${mono.className} flex items-center gap-3 text-sm md:text-base`} style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.signal} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horario publicado por Servimac en su Instagram
              @{BIZ.instagram}.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm px-6 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: C.fleet, color: C.fleet }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.fleet, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.fleetDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[0.98] mb-6`} style={{ color: '#F4F4F2' }}>
              Trae el auto,
              <br />
              <span style={{ color: C.signalHi }}>retíralo a la hora</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,244,242,0.78)' }}>
              Escríbenos por WhatsApp, cuéntanos qué le pasa a tu auto y
              te confirmamos hora y presupuesto el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase tracking-[0.04em] inline-block text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: C.red, color: '#FFFFFF' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#F4F4F2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-xl mb-1 flex items-center gap-2.5`}>
              <Wrench className="w-4 h-4" color={C.signalHi} />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(244,244,242,0.85)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(244,244,242,0.85)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,244,242,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: 'rgba(244,244,242,0.85)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.signalHi }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los precios son referenciales; nombre,
            dirección, teléfono, horarios, fotos y reseñas son datos
            públicos del taller.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.signalHi }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
