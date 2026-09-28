import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  ink: '#17181A',
  inkSoft: '#1F2124',
  yellow: '#FFC300',
  yellowDeep: '#E0AC00',
  steel: '#8A9199',
  // acero oscuro: texto secundario sobre fondos claros (≥4.5:1)
  steelDeep: '#565D63',
  steelSoft: '#E9EBED',
  paper: '#FFFFFF',
  line: 'rgba(23,24,26,0.12)',
  lineLight: 'rgba(255,255,255,0.14)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'bxtraining-1',
  title: 'Bxtraining 1 — Gimnasio en San Clemente',
  description: 'Gimnasio en San Clemente, Región del Maule. Sala de pesas, zona funcional y atención directa. Consulta por WhatsApp.',
  image: '/demos/bxtraining-1/hero.webp',
})

const NAV_LINKS = [
  { label: 'El espacio', href: '#espacio' },
  { label: 'El gimnasio', href: '#gimnasio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

type MosaicTile =
  | {
      kind: 'photo'
      span: string
      src: string
      alt: string
      chip: string
      title: string
      desc: string
    }
  | {
      kind: 'text'
      span: string
      tone: 'yellow' | 'dark' | 'steel'
      chip: string
      title: string
      desc: string
    }

const MOSAICO: MosaicTile[] = [
  {
    kind: 'photo',
    span: 'col-span-2 row-span-2',
    src: `${IMG}/ambiente.webp`,
    alt: 'Zona funcional de Bxtraining 1: racks, straps de suspensión, kettlebells y cajones',
    chip: 'Funcional',
    title: 'Entrenamiento funcional',
    desc: 'TRX, kettlebells, cajones y espacio de verdad para moverse.',
  },
  {
    kind: 'photo',
    span: 'col-span-2',
    src: `${IMG}/detalle2.webp`,
    alt: 'Rack de mancuernas y barra cargada sobre piso de caucho',
    chip: 'Fuerza',
    title: 'Peso libre y racks',
    desc: 'Mancuernas, barras y discos para progresar semana a semana.',
  },
  {
    kind: 'text',
    span: '',
    tone: 'yellow',
    chip: 'En Google',
    title: `${BIZ.reviewsCount} reseñas`,
    desc: 'La nota la ponen los que entrenan acá.',
  },
  {
    kind: 'photo',
    span: '',
    src: `${IMG}/detalle3.webp`,
    alt: 'Recepción del gimnasio: mesón de madera, toallas y pizarra de horarios',
    chip: 'Directo',
    title: 'Atención cara a cara',
    desc: 'Llegas, saludas y entrenas. Sin torniquetes.',
  },
  {
    kind: 'text',
    span: 'col-span-2',
    tone: 'dark',
    chip: 'Método',
    title: 'Rutina a tu medida',
    desc: 'El profe arma y ajusta tu programa según tu nivel. Servicio de muestra: al publicar va la oferta real del gimnasio.',
  },
  {
    kind: 'photo',
    span: 'col-span-2',
    src: `${IMG}/detalle1.webp`,
    alt: 'Fachada de Bxtraining 1 a nivel de calle, con el cerro de San Clemente al fondo',
    chip: 'Ubicación',
    title: 'En pleno San Clemente',
    desc: 'Fácil de llegar a pie, en bici o en auto.',
  },
]

const VALORES = [
  {
    title: 'El profe está en sala',
    desc: 'No hay pantalla de turnos: corregimos tu técnica en el momento.',
  },
  {
    title: 'Sin vueltas',
    desc: 'Precios claros, sin matrículas escondidas ni cobros sorpresa.',
  },
  {
    title: 'Comunidad chica',
    desc: 'Acá todos se conocen. Nadie te mira raro por partir de cero.',
  },
]

const PRECIOS = [
  { name: 'Mensualidad', price: 'desde $25.000' },
  { name: 'Plan trimestral', price: 'desde $65.000' },
  { name: 'Día suelto', price: 'desde $5.000' },
  { name: 'Clase de prueba', price: 'consultar' },
  { name: 'Plan personalizado', price: 'a convenir' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '7:00 – 21:00' },
  { days: 'Sábado', time: '9:00 – 13:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function Bolt({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M13.4 2 L5.6 13.2 h5.1 L9.9 22 L18.4 10 h-5.3 Z" />
    </svg>
  )
}

function Dumbbell({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <rect x="1.5" y="9" width="3.4" height="6" rx="1.2" />
      <rect x="19.1" y="9" width="3.4" height="6" rx="1.2" />
      <rect x="4.9" y="6" width="3.4" height="12" rx="1.2" />
      <rect x="15.7" y="6" width="3.4" height="12" rx="1.2" />
      <path d="M8.3 12 h7.4" strokeWidth="2" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.yellow : C.ink }}
    >
      <span
        className="inline-block w-[22px] h-[10px] shrink-0"
        style={{ backgroundColor: C.yellow }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function Tile({ t, i }: { t: MosaicTile; i: number }) {
  if (t.kind === 'text') {
    const styles =
      t.tone === 'yellow'
        ? { bg: C.yellow, ink: C.ink, chipBg: 'rgba(23,24,26,0.9)', chipInk: C.yellow, desc: 'rgba(23,24,26,0.72)' }
        : t.tone === 'dark'
          ? { bg: C.inkSoft, ink: '#FFFFFF', chipBg: C.yellow, chipInk: C.ink, desc: C.steel }
          : { bg: C.steelSoft, ink: C.ink, chipBg: C.ink, chipInk: '#FFFFFF', desc: 'rgba(23,24,26,0.66)' }
    return (
      <Reveal delay={i * 70} className={t.span}>
        <div
          className="h-full flex flex-col justify-between p-4 md:p-5"
          style={{ backgroundColor: styles.bg, color: styles.ink }}
        >
          <span
            className={`${display.className} self-start text-[10px] uppercase tracking-[0.18em] font-bold px-2.5 py-1`}
            style={{ backgroundColor: styles.chipBg, color: styles.chipInk }}
          >
            {t.chip}
          </span>
          <div>
            <h3 className={`${display.className} font-bold text-base md:text-lg leading-tight mb-1`}>
              {t.title}
            </h3>
            <p className="text-xs md:text-[13px] leading-snug" style={{ color: styles.desc }}>
              {t.desc}
            </p>
          </div>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal delay={i * 70} className={t.span}>
      <figure className="group relative h-full min-h-full overflow-hidden" style={{ backgroundColor: C.inkSoft }}>
        <Image
          src={t.src}
          alt={t.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,24,26,0) 45%, rgba(23,24,26,0.82) 100%)',
          }}
          aria-hidden="true"
        />
        <span
          className={`${display.className} absolute top-3 left-3 text-[10px] uppercase tracking-[0.18em] font-bold px-2.5 py-1`}
          style={{ backgroundColor: C.yellow, color: C.ink }}
        >
          {t.chip}
        </span>
        <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <h3 className={`${display.className} font-bold text-base md:text-xl leading-tight text-white mb-0.5`}>
            {t.title}
          </h3>
          <p className="text-xs md:text-[13px] leading-snug" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {t.desc}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  )
}

export default function BxtrainingPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.ink, color: C.ink }}
    >
      <style>{'html{scroll-behavior:auto}'}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        theme={{
          over: 'dark',
          bar: 'rgba(23,24,26,0.94)',
          ink: '#FFFFFF',
          line: C.lineLight,
          btnBg: C.yellow,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Sala de Bxtraining 1: racks de sentadilla, bancas y rack de mancuernas con luz natural"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,24,26,0.62) 0%, rgba(23,24,26,0.18) 42%, rgba(23,24,26,0.9) 100%)',
          }}
          aria-hidden="true"
        />
        {/* regla de marcación superior */}
        <div
          className="absolute top-[72px] md:top-[84px] inset-x-0 h-[6px] flex"
          aria-hidden="true"
        >
          <span className="w-[18%] h-full" style={{ backgroundColor: C.yellow }} />
          <span className="w-[4%] h-full" style={{ backgroundColor: C.steel }} />
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pr-20 md:pr-28 pb-24 md:pb-16 pt-44">
          <Reveal>
            <Eyebrow light>Gimnasio · San Clemente · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.015em] text-[clamp(2.5rem,9.5vw,5.6rem)] uppercase mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Fuerza de verdad,
              <br />
              <span style={{ color: C.yellow }}>sin vueltas.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.86)' }}>
              {BIZ.name} es el gimnasio de San Clemente para entrenar en
              serio: racks, peso libre, zona funcional y un profe que te
              conoce por nombre. {BIZ.reviewsCount} reseñas en Google ya lo
              cuentan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href="#espacio"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver el espacio
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mosaico: el espacio y los servicios ── */}
      <section id="espacio" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow light>El espacio</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-8 md:mb-12">
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0]`} style={{ color: '#FFFFFF' }}>
                Lo que hay
                <br />
                <span style={{ color: C.yellow }}>en la sala</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.steel }}>
                Esto es una muestra de los servicios: al publicar van la
                oferta y las fotos reales del gimnasio.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[170px] md:auto-rows-[185px] gap-2 md:gap-3">
            {MOSAICO.map((t, i) => (
              <Tile key={t.title} t={t} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre el gimnasio ── */}
      <section id="gimnasio" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>El gimnasio</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
                De barrio,
                <br />
                <span style={{ color: C.steelDeep }}>con estándar</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: 'rgba(23,24,26,0.7)' }}>
                {BIZ.name} atiende en {BIZ.city}: llegas, te reciben por
                tu nombre y entrenas con el profe en sala. Sin protocolo
                de cadena ni máquinas que nadie usa.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(23,24,26,0.7)' }}>
                Su ficha de Google ya junta{' '}
                <strong className="font-bold" style={{ color: C.ink }}>
                  {BIZ.reviewsCount} reseñas
                </strong>{' '}
                de vecinos de la comuna, y la vida del gym se ve en su{' '}
                <a
                  href={BIZ.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                  style={{ color: C.ink, textDecorationColor: C.yellow }}
                >
                  página de Facebook
                </a>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.ink, color: '#FFFFFF' }}
                >
                  Ver las reseñas en Google →
                </a>
                <a
                  href={WA_LINK_CLASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(23,24,26,0.3)', color: C.ink }}
                >
                  Probar una clase
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border" style={{ borderColor: C.line, backgroundColor: C.steelSoft }}>
                <div
                  className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
                  style={{ backgroundColor: C.ink }}
                >
                  <span className={`${display.className} text-xs uppercase tracking-[0.18em] font-bold text-white`}>
                    Lo que valoran los clientes
                  </span>
                  <Dumbbell className="w-5 h-5 shrink-0" color={C.yellow} />
                </div>
                <ul>
                  {VALORES.map((v, i) => (
                    <li
                      key={v.title}
                      className="px-6 md:px-8 py-5 border-b last:border-b-0 flex gap-4"
                      style={{ borderColor: C.line }}
                    >
                      <span
                        className={`${display.className} font-extrabold text-lg leading-none pt-0.5`}
                        style={{ color: C.steelDeep }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className={`${display.className} font-bold text-base md:text-lg mb-1`} style={{ color: C.ink }}>
                          {v.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(23,24,26,0.66)' }}>
                          {v.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs mt-4 leading-relaxed" style={{ color: 'rgba(23,24,26,0.65)' }}>
                Textos de muestra: al publicar van los comentarios reales
                de los alumnos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Precios</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-5`} style={{ color: '#FFFFFF' }}>
                La pizarra
                <br />
                <span style={{ color: C.yellow }}>de precios</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: C.steel }}>
                Los valores de esta lista son{' '}
                <strong className="font-bold text-white">de muestra</strong>,
                para mostrar cómo se vería. Al publicar van los valores
                reales del gimnasio.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: C.yellow, textDecorationColor: 'rgba(255,195,0,0.4)' }}
              >
                Consultar valor exacto por WhatsApp →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden border" style={{ borderColor: C.lineLight, backgroundColor: C.inkSoft }}>
                <Bolt className="absolute -top-5 -right-5 w-[130px] opacity-[0.07] rotate-[14deg]" color={C.yellow} />
                <div
                  className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span className={`${display.className} text-xs uppercase tracking-[0.18em] font-bold text-white`}>
                    Membresías
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1"
                    style={{ backgroundColor: C.yellow, color: C.ink }}
                  >
                    valores de muestra
                  </span>
                </div>
                <ul>
                  {PRECIOS.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-4 px-6 md:px-8 py-4 border-b last:border-b-0"
                      style={{ borderColor: C.lineLight }}
                    >
                      <span className="text-sm md:text-base font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        {p.name}
                      </span>
                      <span className="flex-1 border-b border-dotted mx-1 translate-y-[-4px]" style={{ borderColor: 'rgba(138,145,153,0.4)' }} aria-hidden="true" />
                      <span className={`${display.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.yellow }}>
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
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.steelDeep }}>{BIZ.city}</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(23,24,26,0.7)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(23,24,26,0.7)' }}>
                  <span className="w-[16px] h-[8px] shrink-0" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(23,24,26,0.65)' }}>
              Horario referencial: al publicar van los horarios reales
              del gimnasio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(23,24,26,0.3)', color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden border min-h-[320px] h-full"
              style={{ borderColor: C.line, backgroundColor: C.steelSoft }}
            >
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Image
          src={`${IMG}/detalle2.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 inset-x-0 h-[6px]"
          style={{ backgroundColor: C.yellow }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Bolt className="w-[34px] h-[34px] mx-auto mb-5" color={C.yellow} />
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.0] mb-6`} style={{ color: '#FFFFFF' }}>
              La barra está lista.
              <br />
              <span style={{ color: C.yellow }}>Te esperamos</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: C.steel }}>
              Escríbenos por WhatsApp y agenda tu primera visita.
              Atención directa, en pleno San Clemente.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.yellow, color: C.ink }}
            >
              Escribir a {BIZ.name}
            </a>
            <p className="text-xs mt-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {BIZ.phoneDisplay} · facebook.com/EntrenamientoyRendimiento
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t" style={{ borderColor: C.lineLight }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-4">
            <div>
              <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-2.5`}>
                <Bolt className="w-4 h-4" color={C.yellow} />
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-snug" style={{ color: C.steel }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.steel }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-75 ${focusRing} tap-44`} style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, precios, horarios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-75 ${focusRing} tap-44`} style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
