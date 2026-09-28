import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PRECIO, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' },
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
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  paper: '#F3EFE4',
  card: '#FBF8EE',
  ink: '#122E35',
  muted: '#52655F',
  line: 'rgba(18,46,53,0.18)',
  petrol: '#0E3A43',
  petrolDeep: '#082830',
  tag: '#0F4F46',
  teja: '#E4572E',
  tejaDark: '#B03A18',
  amber: '#F2B632',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lubricantes-sepulveda',
  title: 'Lubricantes Sepúlveda — Lubricentro y repuestos en Talca',
  description: 'Cambio de aceite de motor y caja, pastillas de freno, repuestos, baterías y accesorios en Av. 21 Nte. 3107, Talca. 4,8 estrellas en Google.',
  image: '/demos/lubricantes-sepulveda/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#local' },
]

const SERVICIOS = [
  {
    name: 'Cambio de aceite de motor y caja',
    desc: 'El servicio de la casa: aceite y filtro con las marcas de la estantería — Mobil, Castrol, Motul y refrigerante.',
    datum: 'El clásico del local',
  },
  {
    name: 'Pastillas de freno',
    desc: 'Venta y cambio de pastillas de freno. Si suena o vibra al frenar, se revisa y se cotiza al momento.',
    datum: 'Venta + instalación',
  },
  {
    name: 'Mantenimiento automotriz',
    desc: 'Revisiones y mantenciones según kilometraje, con el auto en la bahía techada al costado de la tienda.',
    datum: 'Bahía propia',
  },
  {
    name: 'Repuestos, baterías y aditivos',
    desc: 'La tienda de adelante: repuestos, accesorios, baterías, aditivos para motor y productos de limpieza automotriz.',
    datum: 'Stock en el local',
  },
]

const VITRINA = [
  { src: `${IMG}/led.webp`, name: 'Ampolleta H4 LED', pres: 'el par', price: '$15.000', alt: 'Par de ampolletas H4 LED en su envase, con etiqueta de precio del local' },
  { src: `${IMG}/traba.webp`, name: 'Traba de rueda Aoteman', pres: '', price: '$16.000', alt: 'Traba de rueda marca Aoteman en blister amarillo' },
  { src: `${IMG}/camara.webp`, name: 'Cámara de retroceso', pres: 'visión nocturna', price: '$12.000', alt: 'Kit de cámara de retroceso con visión nocturna en su caja' },
  { src: `${IMG}/bocina.webp`, name: 'Bocina caracol doble', pres: '', price: '$5.000', alt: 'Bocina caracol doble roja junto a su empaque' },
  { src: `${IMG}/neblinero.webp`, name: 'Neblinero', pres: '', price: '$5.000', alt: 'Neblinero LED en su empaque sobre la mesa del local' },
]

const TESTIMONIALS = [
  {
    text: 'Servicio maravilloso, honesto, cordial y siempre dispuesto a resolver dudas, cruzo Talca para venir porque lo vale.',
    author: 'David G.S.',
  },
  {
    text: 'Buen servicio, la atención es súper amena, y quien atiende no cuenta cuentos, es una atención honesta, al menos es lo que me ha tocado.',
    author: 'rodrigo paolo gaete Ruano',
  },
  {
    text: 'Excelente servicio y te orientan en cualquier duda, recomendado.',
    author: 'Alejandra Ponce',
  },
]

const HORAS = [
  { days: 'Lunes a jueves', time: '9:30–14:00 · 15:30–19:30' },
  { days: 'Viernes', time: '9:30–14:00 · 15:30–19:00' },
  { days: 'Sábado', time: '10:00–14:30' },
  { days: 'Domingo', time: 'Cerrado' },
]

const CINTA = ['aceite de motor y caja', 'filtros', 'pastillas de freno', 'baterías', 'aditivos', 'accesorios', 'limpieza automotriz', 'repuestos']

function Drop({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 2.7c3.2 4 6.3 7.6 6.3 11a6.3 6.3 0 0 1-12.6 0c0-3.4 3.1-7 6.3-11z" />
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

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? 'rgba(243,239,228,0.78)' : C.tejaDark }}
    >
      <Drop className="w-[11px] h-[11px] shrink-0" color={light ? C.amber : C.teja} />
      {children}
    </p>
  )
}

function PriceTag({ price }: { price: string }) {
  return (
    <span
      className={`${mono.className} absolute -top-3 right-3 z-10 inline-block px-3.5 py-1.5 text-sm md:text-base font-bold rounded-full border-2 border-dashed shadow-md`}
      style={{
        backgroundColor: C.tag,
        color: C.amber,
        borderColor: 'rgba(242,182,50,0.65)',
        transform: 'rotate(5deg)',
      }}
    >
      {price}
    </span>
  )
}

export default function LubricantesSepulvedaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        @keyframes cinta-lub { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .cinta-lub { animation: cinta-lub 30s linear infinite }
        @media (prefers-reduced-motion: reduce) { .cinta-lub { animation: none } }
      `}</style>

      {/* Velo detrás del nav: cae sobre la foto oscura del hero */}
      <div
        className="fixed top-0 inset-x-0 z-40 h-[60px] md:h-[68px]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(8,40,48,0.82) 0%, rgba(8,40,48,0.55) 100%)',
        }}
      >
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(243,239,228,0.95)',
            ink: C.ink,
            line: C.line,
            btnBg: C.amber,
            btnInk: C.ink,
          }}
        />
      </div>

      {/* ── Hero: la estantería a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.petrolDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Estantes de Lubricantes Sepúlveda llenos de bidones de aceite Mobil, Castrol y refrigerante"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,40,48,0.66) 0%, rgba(8,40,48,0.18) 44%, rgba(8,40,48,0.9) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: 'rgba(243,239,228,0.95)', color: C.ink }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.amber} stroke={C.amber} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.rating} ★ · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal className="pr-20 md:pr-28">
            <Eyebrow light>Lubricentro y repuestos · Talca</Eyebrow>
            <h1
              className={`${display.className} uppercase leading-[0.97] tracking-[0.01em] text-[clamp(2.9rem,10vw,6rem)] mb-6`}
              style={{ color: '#F3EFE4' }}
            >
              En la 21 Norte el aceite
              <br />
              se cambia <span style={{ color: C.amber }}>sin cuento</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(243,239,228,0.9)' }}>
              {BIZ.name}: tienda de repuestos al frente, taller atrás,
              en {BIZ.address} {BIZ.corner}, {BIZ.city}.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.05em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.amber, color: C.ink }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={CALL_LINK}
                className={`${display.className} uppercase tracking-[0.05em] inline-flex items-center gap-2 text-sm md:text-base px-7 py-3 border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: 'rgba(243,239,228,0.55)', color: '#F3EFE4' }}
              >
                <PhoneIcon className="w-4 h-4" />
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(243,239,228,0.22)', backgroundColor: 'rgba(8,40,48,0.85)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(243,239,228,0.82)' }}>
            <span>{BIZ.address} · {BIZ.corner}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.amber }} aria-hidden="true" />
              almuerzo: cierra 14:00–15:30
            </span>
            <span className="hidden sm:inline">Atención honesta, dicen las reseñas</span>
            <span className="hidden md:inline" style={{ color: C.amber }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta de lo que hay ── */}
      <div className="overflow-hidden border-y-2" style={{ backgroundColor: C.ink, borderColor: C.petrolDeep }} aria-hidden="true">
        <div className="cinta-lub flex w-max py-3.5">
          {[0, 1].map((half) => (
            <div key={half} className={`${mono.className} flex items-center gap-6 pr-6 text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold whitespace-nowrap`} style={{ color: 'rgba(243,239,228,0.85)' }}>
              {CINTA.map((item) => (
                <span key={`${half}-${item}`} className="flex items-center gap-6">
                  <Drop className="w-2.5 h-2.5 shrink-0" color={C.amber} />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── El taller de atrás ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <div className="relative border-2 overflow-hidden aspect-[4/3]" style={{ borderColor: C.ink, boxShadow: `8px 8px 0 ${C.teja}` }}>
              <Image
                src={`${IMG}/motor.webp`}
                alt="Persona del equipo de Lubricantes Sepúlveda trabajando en el motor de un auto en el taller"
                fill
                sizes="(min-width: 1024px) 52vw, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
            <div className="relative border-2 overflow-hidden aspect-[16/9] mt-6 w-4/5 ml-auto" style={{ borderColor: C.ink, boxShadow: `8px 8px 0 ${C.petrol}` }}>
              <Image
                src={`${IMG}/bahia.webp`}
                alt="Bahía techada del taller con un auto en mantención y bidones Mobil al costado"
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Servicios</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              El taller de atrás,
              <br />
              <span style={{ color: C.teja }}>la tienda adelante</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Lo que el local publica en su ficha: mantenimiento
              automotriz, cambio de aceite de motor y caja, venta y
              cambio de pastillas de freno, repuestos, accesorios,
              baterías, aditivos y productos de limpieza.
            </p>
            <ol className="space-y-5">
              {SERVICIOS.map((s, i) => (
                <li key={s.name} className="flex gap-4 border-b pb-5" style={{ borderColor: C.line }}>
                  <span className={`${display.className} text-2xl leading-none font-semibold shrink-0 w-10 pt-0.5`} style={{ color: C.teja }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`${display.className} uppercase tracking-[0.02em] text-lg md:text-xl leading-tight mb-1`} style={{ color: C.ink }}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-1.5" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] font-bold`} style={{ color: C.tag }}>
                      {s.datum}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── La vitrina con precio ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.petrolDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>La vitrina</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0]`} style={{ color: '#F3EFE4' }}>
                La vitrina lleva
                <br />
                <span style={{ color: C.amber }}>precio de etiqueta</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(243,239,228,0.82)' }}>
                El local publica sus productos con el precio puesto.
                Estos son los valores de su propia ficha de Google;
                confirma stock por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {VITRINA.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="relative border-2 overflow-hidden" style={{ borderColor: 'rgba(243,239,228,0.25)', backgroundColor: C.card }}>
                  <PriceTag price={p.price} />
                  <div className="relative aspect-square">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, 44vw"
                      className="object-cover"
                    />
                  </div>
                  {/* canto del estante */}
                  <div className="h-1.5" style={{ backgroundColor: C.teja }} aria-hidden="true" />
                  <div className="px-3 py-3">
                    <h3 className={`${display.className} uppercase text-sm md:text-base leading-tight`} style={{ color: C.ink }}>
                      {p.name}
                    </h3>
                    {p.pres && (
                      <p className="text-[11px] leading-snug mt-0.5" style={{ color: C.muted }}>
                        {p.pres}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: 'rgba(243,239,228,0.8)' }}>
                Precios publicados por el local · sujetos a stock
              </p>
              <a
                href={WA_LINK_PRECIO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.05em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.amber, color: C.ink }}
              >
                Consultar precio y stock
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones</Eyebrow>
            <h3 className={`${display.className} uppercase text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              La gente cruza
              <br />
              Talca para venir
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} tiene {BIZ.rating} sobre 5 en Google, en
              {BIZ.reviews} reseñas. Estas son citas textuales de la
              ficha pública.
            </p>
            <dl className={`${mono.className} flex gap-8 mb-6`}>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: C.muted }}>Google</dt>
                <dd className={`${display.className} text-3xl`} style={{ color: C.teja }}>{BIZ.rating} ★</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: C.muted }}>Reseñas</dt>
                <dd className={`${display.className} text-3xl`} style={{ color: C.teja }}>{BIZ.reviews}</dd>
              </div>
            </dl>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-xs md:text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ color: C.tejaDark, textDecorationColor: 'rgba(176,58,24,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={100 + i * 100}>
                <figure
                  className="border-2 p-5 md:p-6 relative"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <span className={`${display.className} absolute -top-5 left-4 text-6xl leading-none select-none`} style={{ color: C.amber }} aria-hidden="true">
                    “
                  </span>
                  <blockquote className="text-base md:text-lg leading-relaxed mb-4 pt-3" style={{ color: C.ink }}>
                    {t.text}
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-bold`} style={{ color: C.tejaDark }}>
                      {t.author} · Reseña de Google
                    </span>
                    <Drop className="w-3.5 h-3.5 shrink-0" color={C.tag} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El local: mapa, dirección, horario ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Eyebrow>El local</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
                {BIZ.address},
                <br />
                <span style={{ color: C.teja }}>{BIZ.corner}</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                {BIZ.address} {BIZ.corner}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <ul className="space-y-2.5 mb-6">
                {HORAS.map((h) => (
                  <li key={h.days} className={`${mono.className} flex items-center gap-3 text-sm md:text-base`} style={{ color: C.muted }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.tag} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7 v5 l3.5 2" />
                    </svg>
                    <span>
                      <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} inline-block text-[11px] md:text-xs uppercase tracking-[0.14em] font-bold px-3 py-2 mb-8 border-2 border-dashed`} style={{ color: C.ink, borderColor: C.teja, backgroundColor: C.card }}>
                Ojo: al almuerzo cierra · 14:00 a 15:30
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-[0.05em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                  style={{ backgroundColor: C.amber, color: C.ink }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-[0.05em] text-sm px-6 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="border-2 overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.ink, backgroundColor: C.paper }}>
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
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.petrolDeep }}>
        <Image
          src={`${IMG}/filtros.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.13]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.0] mb-6`} style={{ color: '#F3EFE4' }}>
              Pasa antes de las 14:00,
              <br />
              <span style={{ color: C.amber }}>o después de las 15:30</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(243,239,228,0.82)' }}>
              Escríbenos por WhatsApp qué necesita tu auto — aceite,
              pastillas, un repuesto — y te confirmamos precio y hora
              el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase tracking-[0.05em] inline-block text-sm md:text-base px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: C.amber, color: C.ink }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#F3EFE4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-xl mb-1 flex items-center gap-2.5`}>
              <Drop className="w-4 h-4" color={C.amber} />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(243,239,228,0.85)' }}>
              {BIZ.address} {BIZ.corner} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(243,239,228,0.85)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Ficha en Google
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,239,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: 'rgba(243,239,228,0.85)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amber }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los precios son los publicados por el
            local; nombre, dirección, teléfono, horarios, fotos y
            reseñas son datos públicos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amber }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
