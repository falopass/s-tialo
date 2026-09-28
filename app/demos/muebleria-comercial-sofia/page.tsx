import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MEDIDA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF7EF',
  card: '#FFFDF8',
  leaf: '#DCE7CF',
  leafSoft: '#EDF2E2',
  green: '#4C6B3C',
  greenDeep: '#2C3F22',
  earth: '#8C6239',
  earthSoft: '#E9DAC3',
  ink: '#26301D',
  muted: '#5D6252',
  line: 'rgba(38,48,29,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'muebleria-comercial-sofia',
  title: 'Mueblería Comercial Sofia — Muebles hechos a mano en Talca',
  description: 'Fábrica de muebles en Catorce Ote. 1060, Talca. Muebles a medida, cocinas, closets y restauración, con atención directa del taller.',
  image: '/demos/muebleria-comercial-sofia/hero.webp',
})

const NAV_LINKS = [
  { label: 'El taller', href: '#trabajos' },
  { label: 'Quiénes somos', href: '#taller' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

function IconRuler({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-45 12 12)" />
      <path d="M9.5 7.5 L11 9 M12.5 10.5 L14 12 M15.5 6.5 L17 8" />
    </svg>
  )
}

function IconCabinet({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
      <path d="M4 9.5 h16 M4 15.5 h16" />
      <path d="M9 6.5 h6 M9 12.5 h6 M9 18 h6" />
    </svg>
  )
}

function IconBrush({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 4.5 L19.5 9.5 L11 18 C9 19.5 6.5 20 4 20 C4.5 17.5 5.5 15.5 7 14 Z" />
      <path d="M12.5 6.5 L17.5 11.5" />
    </svg>
  )
}

function IconTruck({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6.5 h11 v9 h-11 Z" />
      <path d="M14 10 h4 l3 3 v2.5 h-7 Z" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  )
}

function Leaf({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19 C5 10 11 4 20 4 C20 13 14 19 5 19 Z" />
      <path d="M7.5 16.5 C10.5 12.5 13.5 9.5 16.5 6.5" />
    </svg>
  )
}

function Eyebrow({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: color ?? (light ? C.earthSoft : C.green) }}
    >
      <Leaf className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

const SERVICIOS = [
  {
    icon: IconRuler,
    name: 'Muebles a medida',
    desc: 'Comedores, racks y repisas hechos a la medida de tu casa.',
  },
  {
    icon: IconCabinet,
    name: 'Cocinas y closets',
    desc: 'Muebles de cocina y closets por encargo, aprovechando cada rincón.',
  },
  {
    icon: IconBrush,
    name: 'Restauración y lustre',
    desc: 'Se recuperan muebles con historia: lijado, lustre y reparación.',
  },
  {
    icon: IconTruck,
    name: 'Retiro y despacho',
    desc: 'Retiras en el taller de Catorce Oriente o se coordina despacho.',
  },
]

const PRECIOS = [
  { item: 'Silla de comedor en madera', price: 'desde $45.000' },
  { item: 'Mesa de comedor para 6 personas', price: 'desde $320.000' },
  { item: 'Rack de TV a medida', price: 'desde $180.000' },
  { item: 'Closet de 2 puertas', price: 'desde $390.000' },
]

export default function MuebleriaSofiaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      {/* fondo oscuro del hero bajo el nav transparente (el wrapper no ocupa alto) */}
      <div style={{ backgroundColor: C.greenDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(251,247,239,0.94)',
            ink: C.greenDeep,
            line: C.line,
            btnBg: C.green,
            btnInk: '#FBF7EF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.greenDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Taller de mueblería: muebles de madera en proceso, sillas y gabinetes recién armados"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(44,63,34,0.7) 0%, rgba(44,63,34,0.55) 40%, rgba(44,63,34,0.92) 100%)',
          }}
        />
        {/* sellos: reseña real + Facebook real */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8 flex flex-col items-end gap-2">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]"
              style={{ backgroundColor: 'rgba(251,247,239,0.95)', color: C.greenDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.earth} stroke={C.earth} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseña en Google
            </a>
          </Reveal>
          <Reveal delay={90}>
            <a
              href={BIZ.fbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]"
              style={{ backgroundColor: 'rgba(251,247,239,0.95)', color: C.greenDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.green} aria-hidden="true">
                <path d="M13.5 21 v-7.5 h2.6 l0.4 -3 h-3 V8.6 c0 -0.9 0.3 -1.5 1.6 -1.5 h1.5 V4.4 c-0.3 -0.04 -1.2 -0.15 -2.3 -0.15 c-2.3 0 -3.9 1.4 -3.9 4 v2.2 H8 v3 h2.4 V21 Z" />
              </svg>
              {BIZ.fbFollowers} seguidores
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Fábrica de muebles · Talca · Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(3rem,11vw,6.5rem)] mb-6`}
              style={{ color: '#FBF7EF' }}
            >
              Lo que se cuida,
              <br />
              <em style={{ color: C.earthSoft }}>crece</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,247,239,0.88)' }}>
              Fábrica de muebles en Catorce Oriente, Talca: cada pieza
              sale del taller a medida, con la madera trabajada a mano.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MEDIDA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} italic text-base md:text-lg px-7 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]`}
                style={{ backgroundColor: C.leaf, color: C.greenDeep }}
              >
                Encargar un mueble a medida
              </a>
              <a
                href="#trabajos"
                className={`${display.className} italic text-base md:text-lg px-7 py-2.5 rounded-full border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]`}
                style={{ borderColor: 'rgba(251,247,239,0.55)', color: '#FBF7EF' }}
              >
                Ver el taller
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(251,247,239,0.22)', backgroundColor: 'rgba(44,63,34,0.5)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,247,239,0.9)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.leaf }} aria-hidden="true" />
              atención directa del taller
            </span>
            <span>Muebles por encargo</span>
            <span className="hidden md:inline" style={{ color: C.earthSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Bento modular: el taller en tarjetas ── */}
      <section id="trabajos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>El taller</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.greenDeep }}>
              Todo sale del mismo
              <br />
              <em style={{ color: C.earth }}>taller de Talca</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Una muestra de lo que se hace en Comercial Sofia: al
              publicar van los trabajos y servicios reales del taller.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[170px] gap-3 md:gap-4">
          {/* tarjeta grande de foto */}
          <Reveal className="col-span-2 md:col-span-3 row-span-2">
            <figure className="relative rounded-[28px] overflow-hidden h-full border" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/detalle3.webp`}
                alt="Silla y gabinetes de madera terminados dentro del taller de la mueblería"
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
              <span
                className={`${display.className} italic absolute bottom-4 left-4 text-xs md:text-sm px-3.5 py-1.5 rounded-full shadow-sm`}
                style={{ backgroundColor: 'rgba(251,247,239,0.95)', color: C.greenDeep }}
              >
                así sale del taller
              </span>
            </figure>
          </Reveal>

          {/* mini-cards de servicios */}
          {SERVICIOS.slice(0, 2).map((s, i) => (
            <Reveal key={s.name} delay={80 + i * 90} className="col-span-1 md:col-span-3">
              <div
                className="rounded-[28px] border p-4 md:p-5 h-full flex flex-col md:flex-row md:items-center gap-3 md:gap-4"
                style={{ backgroundColor: i === 0 ? C.card : C.leafSoft, borderColor: C.line }}
              >
                <span
                  className="shrink-0 w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: i === 0 ? C.leaf : '#fff', color: C.green }}
                >
                  <s.icon className="w-5 h-5 md:w-6 md:h-6" />
                </span>
                <div>
                  <h3 className={`${display.className} text-lg md:text-2xl leading-tight`} style={{ color: C.greenDeep }}>
                    {s.name}
                  </h3>
                  <p className="text-xs md:text-sm leading-snug mt-1 hidden sm:block" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* par de fotos chicas */}
          {[
            { src: 'detalle1', alt: 'Banco de trabajo del carpintero con uniones de madera, cepillo y herramientas' },
            { src: 'detalle2', alt: 'Detalle de la veta de una tabla de madera lustrada a mano en el taller' },
          ].map((f, i) => (
            <Reveal key={f.src} delay={60 + i * 80} className="col-span-1 md:col-span-2">
              <figure className="relative rounded-[28px] overflow-hidden h-full border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/${f.src}.webp`}
                  alt={f.alt}
                  fill
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          ))}

          {SERVICIOS.slice(2).map((s, i) => (
            <Reveal key={s.name} delay={80 + i * 90} className="col-span-1 md:col-span-2">
              <div
                className="rounded-[28px] border p-4 md:p-5 h-full"
                style={{ backgroundColor: i === 0 ? C.card : C.leafSoft, borderColor: C.line }}
              >
                <span
                  className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-2xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: i === 0 ? C.leaf : '#fff', color: C.green }}
                >
                  <s.icon className="w-5 h-5 md:w-6 md:h-6" />
                </span>
                <h3 className={`${display.className} text-lg md:text-xl leading-tight`} style={{ color: C.greenDeep }}>
                  {s.name}
                </h3>
                <p className="text-xs md:text-sm leading-snug mt-1 hidden sm:block" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}

          {/* tarjeta CTA dentro del bento */}
          <Reveal delay={120} className="col-span-2 md:col-span-4">
            <div
              className="rounded-[28px] p-4 md:p-5 h-full flex flex-col justify-between items-start gap-3"
              style={{ backgroundColor: C.earth }}
            >
              <p className={`${display.className} italic text-lg md:text-2xl leading-tight`} style={{ color: '#FBF7EF' }}>
                ¿Tienes una idea? Cotízala al tiro por WhatsApp
              </p>
              <a
                href={WA_LINK_MEDIDA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full text-xs md:text-sm font-semibold transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]"
                style={{ backgroundColor: '#FBF7EF', color: C.greenDeep }}
              >
                Escribir ahora <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>

          {/* fila de métricas */}
          <Reveal className="col-span-2 row-span-2 md:col-span-6 md:row-span-1">
            <dl
              className="rounded-[28px] h-full grid grid-cols-2 md:grid-cols-4 items-center px-6 md:px-8 gap-y-4 py-5 md:py-0"
              style={{ backgroundColor: C.green, color: '#FBF7EF' }}
            >
              {[
                { value: BIZ.city, label: 'taller y venta directa' },
                { value: `${BIZ.reviews}`, label: 'reseña en Google' },
                { value: `${BIZ.fbFollowers}`, label: 'seguidores en Facebook' },
                { value: 'A medida', label: 'cada mueble, por encargo' },
              ].map((m) => (
                <div key={m.label} className="flex flex-col">
                  <dt className={`${display.className} text-2xl md:text-4xl leading-none`}>{m.value}</dt>
                  <dd className="text-[11px] md:text-xs uppercase tracking-[0.14em] mt-1.5" style={{ color: '#FBF7EF' }}>
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.leafSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
            <Reveal className="lg:col-span-4">
              <div className="rounded-[28px] border p-6 md:p-10 h-full" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <Eyebrow>Quiénes somos</Eyebrow>
                <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-5`} style={{ color: C.greenDeep }}>
                  En Catorce Oriente se habla
                  <br />
                  <em style={{ color: C.earth }}>con quien hace el mueble</em>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: C.muted }}>
                  Mueblería Comercial Sofia es una fábrica de muebles de
                  Talca: acá el trato es directo, sin intermediarios. Se
                  conversa la idea, se elige la madera y el mismo taller
                  corta, arma y lustra cada pieza.
                </p>
                <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
                  Lo que más valoran quienes encargan: un mueble firme,
                  hecho a la medida real de la casa, y el precio de
                  comprarle directo a quien lo fabrica.
                </p>
              </div>
            </Reveal>
            <div className="lg:col-span-2 grid gap-3 md:gap-4">
              <Reveal delay={120}>
                <div
                  className="rounded-[28px] border p-6 h-full"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] mb-3" fill={C.earth} stroke={C.earth} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                  </svg>
                  <p className={`${display.className} text-2xl md:text-3xl leading-tight mb-1`} style={{ color: C.greenDeep }}>
                    {BIZ.reviews} reseña
                  </p>
                  <p className="text-xs md:text-sm leading-snug" style={{ color: C.muted }}>
                    en la ficha de Google Maps.{' '}
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C6B3C] rounded-sm"
                      style={{ color: C.greenDeep }}
                    >
                      Ver la ficha →
                    </a>
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div
                  className="rounded-[28px] border p-6 h-full"
                  style={{ backgroundColor: C.green, borderColor: C.green }}
                >
                  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] mb-3" fill={C.leaf} aria-hidden="true">
                    <path d="M13.5 21 v-7.5 h2.6 l0.4 -3 h-3 V8.6 c0 -0.9 0.3 -1.5 1.6 -1.5 h1.5 V4.4 c-0.3 -0.04 -1.2 -0.15 -2.3 -0.15 c-2.3 0 -3.9 1.4 -3.9 4 v2.2 H8 v3 h2.4 V21 Z" />
                  </svg>
                  <p className={`${display.className} text-2xl md:text-3xl leading-tight mb-1`} style={{ color: '#FBF7EF' }}>
                    {BIZ.fbFollowers} seguidores
                  </p>
                  <p className="text-xs md:text-sm leading-snug" style={{ color: '#FBF7EF' }}>
                    siguen los trabajos del taller en{' '}
                    <a
                      href={BIZ.fbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF] rounded-sm"
                    >
                      Facebook →
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* cita de muestra + foto */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 mt-3 md:mt-4">
            <Reveal className="lg:col-span-2">
              <figure className="relative rounded-[28px] overflow-hidden h-full border min-h-[220px]" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Frontis del taller de mueblería con tablas de madera apiladas y banco de trabajo"
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-4">
              <figure
                className="rounded-[28px] border p-6 md:p-10 h-full flex flex-col justify-between"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <blockquote className={`${display.className} text-xl md:text-3xl leading-snug mb-5`} style={{ color: C.ink }}>
                  “Encargué un mueble a medida y quedó justo como lo
                  quería: firme, bien lustrado y a la medida exacta del
                  espacio.”
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.earth }}>
                    Cliente de Talca · texto de muestra
                  </span>
                  <Leaf className="w-4 h-4 shrink-0" color={C.green} />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Precios de referencia</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.greenDeep }}>
              Precio de fábrica,
              <br />
              <em style={{ color: C.earth }}>sin intermediarios</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Valores referenciales de muestra: cada mueble se cotiza
              según madera, medida y terminación. Los precios reales se
              confirman por WhatsApp.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="rounded-[28px] border overflow-hidden" style={{ backgroundColor: C.card, borderColor: C.line }}>
            {PRECIOS.map((p, i) => (
              <li
                key={p.item}
                className={`flex flex-wrap items-baseline justify-between gap-2 px-5 md:px-8 py-5 md:py-6 ${i > 0 ? 'border-t' : ''}`}
                style={{ borderColor: C.line }}
              >
                <span className={`${display.className} text-xl md:text-2xl`} style={{ color: C.greenDeep }}>
                  {p.item}
                </span>
                <span className="flex items-baseline gap-3">
                  <span className="text-sm md:text-base font-semibold" style={{ color: C.earth }}>
                    {p.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: C.leafSoft, color: C.green }}>
                    muestra
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xs leading-relaxed mt-5 max-w-xl" style={{ color: C.muted }}>
            Precios de muestra para mostrar cómo se vería la lista. Al
            publicar van los valores reales de la mueblería.
          </p>
        </Reveal>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.earthSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow color={C.greenDeep}>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.greenDeep }}>
              {BIZ.address},
              <br />
              <em style={{ color: C.greenDeep }}>{BIZ.city}</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.ink }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.green} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                </svg>
                <span>
                  WhatsApp y llamadas: <strong className="font-semibold" style={{ color: C.ink }}>{BIZ.phoneDisplay}</strong>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill={C.green} aria-hidden="true">
                  <path d="M13.5 21 v-7.5 h2.6 l0.4 -3 h-3 V8.6 c0 -0.9 0.3 -1.5 1.6 -1.5 h1.5 V4.4 c-0.3 -0.04 -1.2 -0.15 -2.3 -0.15 c-2.3 0 -3.9 1.4 -3.9 4 v2.2 H8 v3 h2.4 V21 Z" />
                </svg>
                <span>
                  Facebook: <strong className="font-semibold" style={{ color: C.ink }}>@muebles1060</strong>
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} italic text-base md:text-lg px-7 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C3F22]`}
                style={{ backgroundColor: C.green, color: '#FBF7EF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} italic text-base md:text-lg px-7 py-2.5 rounded-full border-2 transition-colors hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C3F22]`}
                style={{ borderColor: 'rgba(38,48,29,0.3)', color: C.greenDeep }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-[28px] overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.greenDeep }}>
        <Image
          src={`${IMG}/detalle3.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.2rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#FBF7EF' }}>
              Cuéntanos qué mueble
              <br />
              <em style={{ color: C.earthSoft }}>le falta a tu casa</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(251,247,239,0.9)' }}>
              Escríbenos por WhatsApp con la idea y las medidas: el
              taller te responde con una cotización directa.
            </p>
            <a
              href={WA_LINK_MEDIDA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} italic inline-block text-base md:text-lg px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF7EF]`}
              style={{ backgroundColor: C.leaf, color: C.greenDeep }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.greenDeep, color: '#FBF7EF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 border-t" style={{ borderColor: 'rgba(251,247,239,0.14)' }}>
          <p className={`${display.className} text-xl mb-1 flex items-center gap-3`}>
            <Leaf className="w-5 h-5" color={C.leaf} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed mb-2" style={{ color: 'rgba(251,247,239,0.85)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
          <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(251,247,239,0.85)' }}>
            Sitio de ejemplo de Sitiazo: contacto real; textos, precios y fotos de muestra.
          </p>
          <div className="[&>div]:static! [&>div]:max-w-none! [&>div]:inline-flex!">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
