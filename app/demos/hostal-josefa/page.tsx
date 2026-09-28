import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#EDE6DA',
  card: '#F6F1E7',
  concrete: '#3A3F44',
  concreteDeep: '#24272B',
  orange: '#E4572E',
  orangeDark: '#B93A17',
  orangeSoft: '#F2A582',
  muted: '#5E574B',
  line: 'rgba(58,63,68,0.22)',
  lineLight: 'rgba(237,230,218,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hostal-josefa',
  title: 'Hostal Josefa — Hospedaje en el centro de Curicó',
  description: 'Hostal en Sgto. Aldea 407, Curicó. Piezas simples y prolijas, atención directa y reserva por WhatsApp. 106 reseñas en Google.',
  image: '/demos/hostal-josefa/hero.webp',
})

const NAV_LINKS = [
  { label: 'La estadía', href: '#historia' },
  { label: 'El hostal', href: '#hostal' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Contacto', href: '#contacto' },
]

const PASOS = [
  {
    num: '01',
    src: `${IMG}/detalle2.webp`,
    tag: 'reserva directa',
    title: 'Llegas y te reciben a cualquier hora',
    desc: 'Abierto las 24 horas. Escríbenos por WhatsApp, te confirmamos la pieza y al llegar hay alguien esperándote: sin recepción de hotel ni formularios.',
    alt: 'Recepción de madera del Residencial Josefa',
  },
  {
    num: '02',
    src: `${IMG}/detalle1.webp`,
    tag: 'tu pieza',
    title: 'Una pieza simple y prolija',
    desc: 'Cama hecha, baño privado, TV por cable, wifi y aire acondicionado. Piezas single y matrimoniales, con lo justo para descansar bien.',
    alt: 'Habitación triple del Residencial Josefa con camas de sábanas blancas',
  },
  {
    num: '03',
    src: `${IMG}/detalle3.webp`,
    tag: 'la mañana',
    title: 'Desayuno de casa para partir el día',
    desc: 'Pan, mermelada casera, té o café y fruta, servido temprano para quienes salen a trabajar o siguen viaje.',
    alt: 'Desayuno del hostal con té, jugo y fruta servido en bandeja',
  },
]

const TARIFAS = [
  {
    name: 'Pieza single',
    desc: 'Una cama, baño privado y desayuno incluido.',
    price: 'desde $18.000',
    unit: 'por noche',
  },
  {
    name: 'Pieza matrimonial',
    desc: 'Cama de dos plazas para una persona o pareja.',
    price: 'desde $28.000',
    unit: 'por noche',
  },
  {
    name: 'Estadía para trabajadores',
    desc: 'Tarifa por semana o mes para cuadrillas y profesionales.',
    price: 'a convenir',
    unit: 'semana / mes',
  },
]

const TESTIMONIALS = [
  {
    text: 'Resaltamos mucho la limpieza y comodidad de la habitación, sencilla y muy bien equipada. Sin duda, volveríamos.',
    author: 'Manuela Granada',
  },
  {
    text: 'Muy bien ornamentado, muy limpio y una atención personalizada. Buen aire acondicionado, buen baño y dormimos muy bien.',
    author: 'Carlos Heriberto Jara',
  },
]

function KeyIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="8" r="4.2" />
      <path d="M11.2 11.2 L20 20" />
      <path d="M16.5 16.5 L19 14" />
      <path d="M14 14 L16 12" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.orangeSoft : C.orangeDark }}
    >
      <KeyIcon className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B93A17]'
const btnSolid = `${display.className} ${FOCUS} inline-block bg-[#B93A17] text-white font-bold text-sm md:text-base px-7 py-3.5 transition-all hover:bg-[#8F2C11] active:scale-95`
const btnGhostDark = `${display.className} ${FOCUS} font-bold text-sm md:text-base px-7 py-3.5 border-2 border-[#EDE6DA]/60 text-[#EDE6DA] transition-colors hover:bg-white/10`

export default function HostalJosefaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.concrete }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* fondo oscuro del hero bajo el nav transparente (el wrapper no ocupa alto) */}
      <div style={{ backgroundColor: C.concreteDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(237,230,218,0.94)',
            ink: C.concreteDeep,
            line: C.line,
            btnBg: C.orangeDark,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.concreteDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada del Residencial Josefa en Sgto. Aldea, centro de Curicó"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(36,39,43,0.55) 0%, rgba(36,39,43,0.18) 40%, rgba(36,39,43,0.85) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(237,230,218,0.95)', color: C.concreteDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.orange} stroke={C.orange} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Hostal · Residencial · Curicó</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.4rem)] mb-6`}
              style={{ color: '#EDE6DA' }}
            >
              Llegas, descansas,
              <br />
              <span style={{ color: C.orangeSoft }}>sigues camino</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(237,230,218,0.88)' }}>
              Hostal de atención directa en {BIZ.address}, pleno centro de
              Curicó: piezas simples y prolijas, y reserva sin
              intermediarios por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSolid + ' tap-44'}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#historia"
                className={btnGhostDark + ' tap-44'}
              >
                Cómo es quedarse
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(36,39,43,0.55)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(237,230,218,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 animate-pulse" style={{ backgroundColor: C.orange }} aria-hidden="true" />
              reserva directa
            </span>
            <span>Desayuno de casa</span>
            <span className="hidden md:inline" style={{ color: C.orangeSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Historia por pasos: línea de tiempo vertical ── */}
      <section id="historia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La estadía, paso a paso</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-12 md:mb-20">
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05]`}>
              Así es quedarse
              <br />
              <span style={{ color: C.orangeDark }}>en la Josefa</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Sin lobby ni protocolo de hotel: tres momentos, de la
              reserva al desayuno. Contenido de muestra para mostrar
              el sitio.
            </p>
          </div>
        </Reveal>

        <ol className="relative">
          {/* línea vertical de obra */}
          <div
            className="absolute top-0 bottom-0 left-[26px] md:left-1/2 w-[3px] md:-translate-x-1/2"
            style={{ backgroundColor: C.concrete }}
            aria-hidden="true"
          />
          {PASOS.map((p, i) => (
            <li key={p.num} className="relative pl-16 md:pl-0 pb-16 md:pb-24 last:pb-0">
              {/* número sobre la línea */}
              <span
                className={`${display.className} absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-[54px] h-[54px] flex items-center justify-center font-bold text-lg z-10`}
                style={{ backgroundColor: C.orangeDark, color: '#FFFFFF' }}
                aria-hidden="true"
              >
                {p.num}
              </span>
              <Reveal delay={i * 90}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
                  {/* foto */}
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <div
                      className="relative aspect-[4/3] border-[3px]"
                      style={{ borderColor: C.concrete, boxShadow: `10px 10px 0 ${C.orange}` }}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* texto */}
                  <div className={i % 2 === 1 ? 'md:order-1 md:text-right' : ''}>
                    <p
                      className={`${display.className} text-[11px] uppercase tracking-[0.26em] font-bold mb-3`}
                      style={{ color: C.orangeDark }}
                    >
                      {p.tag}
                    </p>
                    <h3 className={`${display.className} font-bold text-2xl md:text-3xl leading-tight mb-3`}>
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── El hostal (sobre el negocio + reseñas reales) ── */}
      <section id="hostal" className="scroll-mt-20" style={{ backgroundColor: C.concreteDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center mb-14 md:mb-20">
            <Reveal>
              <div
                className="relative aspect-[4/3] border-[3px]"
                style={{ borderColor: 'rgba(237,230,218,0.35)', boxShadow: `10px 10px 0 ${C.orange}` }}
              >
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Pieza doble del hostal con cortinas naranjas y camas de sábanas blancas"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <Eyebrow light>El hostal</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#EDE6DA' }}>
                Una casa de familia
                <br />
                <span style={{ color: C.orangeSoft }}>en pleno Curicó</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(237,230,218,0.78)' }}>
                Residencial en {BIZ.address}, a pasos del centro de Curicó.
                Atienden sus propios dueños, abierto las 24 horas, con
                baños privados, wifi, aire acondicionado y convenio con
                empresas e instituciones.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${FOCUS} flex items-center gap-2 text-sm font-bold px-5 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: C.orange, color: C.orangeSoft }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill={C.orange} stroke={C.orange} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                  </svg>
                  {BIZ.reviews} reseñas en Google →
                </a>
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${FOCUS} flex items-center gap-2 text-sm font-bold px-5 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(237,230,218,0.4)', color: 'rgba(237,230,218,0.85)' }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5H15l.7-3.5h-3.2V6.8c0-.7.5-1.3 1.3-1.3H15z" />
                  </svg>
                  residencialjosefa
                </a>
              </div>
              <p className="text-xs leading-relaxed max-w-sm" style={{ color: 'rgba(237,230,218,0.7)' }}>
                Fotos, reseñas y datos de esta página salen de su ficha
                de Google y de su flyer publicado. Las tarifas son de
                muestra hasta publicar el sitio definitivo.
              </p>
            </Reveal>
          </div>

          {/* reseñas reales de Google */}
          <div className="border-t pt-12 md:pt-16" style={{ borderColor: C.lineLight }}>
            <Reveal>
              <h3 className={`${display.className} font-bold text-2xl md:text-3xl mb-8`} style={{ color: '#EDE6DA' }}>
                Lo que valoran los huéspedes
              </h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <figure
                    className="border p-6 h-full flex flex-col"
                    style={{ borderColor: C.lineLight, backgroundColor: 'rgba(237,230,218,0.05)' }}
                  >
                    <blockquote className={`${display.className} text-base leading-relaxed mb-5 flex-1`} style={{ color: 'rgba(237,230,218,0.9)' }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.orangeSoft }}>
                      {t.author} · Reseña de Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tarifas de referencia ── */}
      <section id="tarifas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Tarifas de referencia</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05]`}>
              Precios claros,
              <br />
              <span style={{ color: C.orangeDark }}>sin sorpresas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Valores de muestra para mostrar cómo se vería la carta.
              Las tarifas reales se confirman por WhatsApp al reservar.
            </p>
          </div>
        </Reveal>
        <div className="border-t-[3px]" style={{ borderColor: C.concrete }}>
          {TARIFAS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="grid sm:grid-cols-[1fr_auto] gap-3 sm:gap-8 items-center py-6 md:py-7 border-b" style={{ borderColor: C.line }}>
                <div>
                  <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-1`}>
                    {t.name}
                  </h3>
                  <p className="text-sm" style={{ color: C.muted }}>{t.desc}</p>
                </div>
                <div className="sm:text-right">
                  <p className={`${display.className} font-bold text-2xl md:text-3xl`} style={{ color: C.orangeDark }}>
                    {t.price}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                    {t.unit} · muestra
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
            <p className="text-xs leading-relaxed max-w-md" style={{ color: C.muted }}>
              Precios de muestra: al publicar van las tarifas reales del
              hostal. Reserva y consulta de disponibilidad siempre por
              WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSolid + ' tap-44'}
            >
              Consultar tarifa real
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] mb-6`}>
              {BIZ.address},
              <br />
              <span style={{ color: C.orangeDark }}>Curicó</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <KeyIcon className="w-4 h-4 shrink-0" color={C.orange} />
                <span>
                  <strong className="font-bold" style={{ color: C.concrete }}>Reserva:</strong> directa por WhatsApp, sin intermediarios
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.concrete }}>Ubicación:</strong> a pasos del centro de Curicó
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.concrete }}>Abierto las 24 horas</strong>, todos los días
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="6" width="18" height="13" rx="2" />
                  <path d="M3 10.5 h18" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.concrete }}>Pago:</strong> tarjetas y convenio con empresas
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSolid + ' tap-44'}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${FOCUS} font-bold text-sm px-6 py-3 border-2 transition-colors hover:bg-[#3A3F44]/5 tap-44`}
                style={{ borderColor: 'rgba(58,63,68,0.4)', color: C.concrete }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-[3px] min-h-[320px] h-full" style={{ borderColor: C.concrete, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.concreteDeep }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#EDE6DA' }}>
              Tu pieza te espera
              <br />
              <span style={{ color: C.orangeSoft }}>en pleno Curicó</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(237,230,218,0.78)' }}>
              Escríbenos por WhatsApp con tu fecha de llegada y te
              confirmamos la pieza el mismo día.
            </p>
            <a
              href={WA_LINK_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSolid + ' tap-44'}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.concreteDeep, color: '#EDE6DA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 border-t" style={{ borderColor: C.lineLight }}>
          <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-3`}>
            <KeyIcon className="w-5 h-5" color={C.orange} />
            {BIZ.name}
          </p>
          <Image
            src={`${IMG}/logo.webp`}
            alt="Logo Residencial Josefa"
            width={604}
            height={68}
            className="h-auto w-44 mb-3"
          />
          <address className="not-italic text-sm leading-relaxed mb-2" style={{ color: 'rgba(237,230,218,0.8)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
          <p className="text-xs leading-relaxed mb-6" style={{ color: 'rgba(237,230,218,0.8)' }}>
            Sitio de ejemplo de Sitiazo: dirección, teléfono, fotos y
            reseñas son reales; textos y tarifas son de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
