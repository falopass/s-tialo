import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK_HORA, waServicio, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const C = {
  paper: '#EDE6DA',
  card: '#FFFFFF',
  deep: '#26292D',
  ink: '#3A3F44',
  muted: '#5A6066',
  orange: '#E4572E',
  orangeDark: '#B93A17',
  orangeSoft: '#F9DED4',
  orangeLite: '#F4A98E',
  line: 'rgba(58,63,68,0.14)',
}

export const metadata: Metadata = {
  title: 'Barbería Rulos Style — Corte y barba en Curicó',
  description:
    'Barbería en Av. Rauquén 1967, Curicó, Región del Maule. Corte, barba y afeitado clásico con toalla caliente. Reserva tu hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La barbería', href: '#barberia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Ubicación', href: '#ubicacion' },
]

// ── Iconos ───────────────────────────────────────────────────

type IconProps = { className?: string; color?: string }

function IconScissors({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5.5" cy="6" r="2.6" />
      <circle cx="5.5" cy="18" r="2.6" />
      <path d="M7.8 7.6 L20.5 17.4 M7.8 16.4 L20.5 6.6" />
    </svg>
  )
}

function IconBrush({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 20.5 h5" />
      <path d="M10.2 20.5 L10.7 16.5 h2.6 L13.8 20.5" />
      <path d="M10.7 16.5 C8.3 14 7.7 9.4 9.7 6.8 C10.7 5.4 13.3 5.4 14.3 6.8 C16.3 9.4 15.7 14 13.3 16.5 Z" />
    </svg>
  )
}

function IconComb({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 8.5 h16 v3.5 h-16 Z" />
      <path d="M6 12 v5.5 M9 12 v6.5 M12 12 v5.5 M15 12 v6.5 M18 12 v5.5" />
    </svg>
  )
}

function IconMustache({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 12.5 C10.5 9 5.5 8.2 4.2 11.4 C3.2 14 5.8 17.2 9.2 16.6 C11 16.3 12 14.5 12 14.5 C12 14.5 13 16.3 14.8 16.6 C18.2 17.2 20.8 14 19.8 11.4 C18.5 8.2 13.5 9 12 12.5 Z" />
    </svg>
  )
}

function IconSmile({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14 C9.6 15.8 14.4 15.8 15.5 14" />
      <path d="M9 9.4 h.01 M15 9.4 h.01" strokeWidth="2.4" />
    </svg>
  )
}

function IconBubble({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 5.5 h17 v10.5 h-9.5 L6.5 20 v-4 h-3 Z" />
    </svg>
  )
}

function IconClock({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 v5.2 l3.4 2" />
    </svg>
  )
}

function IconCard({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 10 h19 M6 14.5 h4" />
    </svg>
  )
}

function IconStar({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} stroke={color} strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.6 L14.8 8.6 L21.4 9.4 L16.6 14 L17.9 20.5 L12 17.2 L6.1 20.5 L7.4 14 L2.6 9.4 L9.2 8.6 Z" />
    </svg>
  )
}

function IconInstagram({ className = 'w-5 h-5', color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8 h.01" strokeWidth="2.4" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.orangeLite : C.orangeDark }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

// ── Datos de la página ───────────────────────────────────────

const BENTO_BARBERIA: {
  icon: React.ReactNode
  title: string
  desc: string
  wide?: boolean
}[] = [
  {
    icon: <IconBubble />,
    title: 'Hora por WhatsApp',
    desc: 'Escribes, eliges tu bloque y quedas agendado. Sin llamadas ni esperas de pie.',
  },
  {
    icon: <IconClock />,
    title: 'Puntualidad',
    desc: 'Cada hora tiene su bloque reservado: llegas a tu hora y te sientas al sillón.',
  },
  {
    icon: <IconCard />,
    title: 'Pago a tu pinta',
    desc: 'Débito, crédito, transferencia o efectivo. Tú eliges cómo pagar.',
    wide: true,
  },
]

const METRICAS = [
  { value: '277', label: 'reseñas en Google', tag: 'dato real' },
  { value: '7.158', label: `seguidores en ${BIZ.instagramHandle}`, tag: 'dato real' },
  { value: '+10 años', label: 'de oficio en Curicó', tag: 'muestra' },
  { value: '+2.000', label: 'clientes atendidos', tag: 'muestra' },
]

const SERVICIOS_FOTO = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Mesón de trabajo con tijeras, máquina, peinetas, brocha y frascos',
    tag: 'el clásico',
    name: 'Corte de pelo',
    desc: 'Máquina, tijera y navaja para perfilar. Terminación con toalla y producto, sin apuro.',
    wa: 'un corte de pelo',
    span: 'col-span-2 lg:col-span-3 lg:row-span-2',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Toallas calientes en el calentador, espuma, brocha y navaja de afeitar',
    tag: 'ritual completo',
    name: 'Afeitado tradicional',
    desc: 'Toalla caliente, espuma y navaja al filo. El cierre clásico, con bálsamo al final.',
    wa: 'un afeitado tradicional',
    span: 'col-span-2 lg:col-span-3',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de atención con la agenda, el lector de tarjetas y toallas dobladas',
    tag: 'para cerrar',
    name: 'Lavado y terminación',
    desc: 'Lavado en el lava-cabezas, peinado y producto para que el corte dure en casa.',
    wa: 'un lavado y peinado',
    span: 'col-span-2 lg:col-span-3',
  },
]

const SERVICIOS_ICONO = [
  {
    icon: <IconMustache />,
    name: 'Perfilado de barba',
    desc: 'Contornos y líneas al ras con navaja, para mantener la forma entre visitas.',
    wa: 'un perfilado de barba',
    span: 'col-span-2 lg:col-span-3',
  },
  {
    icon: <IconSmile />,
    name: 'Corte de niños',
    desc: 'Paciencia y tijera para los más chicos, con la misma terminación prolija.',
    wa: 'un corte para niño',
    span: 'col-span-2 lg:col-span-3',
  },
]

const PRECIOS = [
  { name: 'Corte de pelo', desc: 'Máquina y tijera, con lavado y terminación.', price: '$9.000' },
  { name: 'Corte + barba', desc: 'El combo completo en una sola visita.', price: '$13.000' },
  { name: 'Afeitado tradicional', desc: 'Toalla caliente, espuma y navaja.', price: '$9.000' },
  { name: 'Perfilado de barba', desc: 'Contornos y líneas al ras.', price: '$5.000' },
  { name: 'Corte de niños', desc: 'Con paciencia y la misma prolijidad.', price: '$7.000' },
  { name: 'Lavado y peinado', desc: 'Lava-cabezas y producto de terminación.', price: '$5.000' },
]

const RESENAS = [
  'Entré sin hora un viernes y me atendieron igual. El corte quedó parejo y bien perfilado; se nota el oficio.',
  'Pido corte y barba cada dos semanas. Siempre salgo con el mismo resultado, prolijo y a la hora que reservé.',
  'Llevé a mi hijo y lo atendieron con paciencia. Buen ambiente y precio justo.',
]

const HORAS = [
  { days: 'Martes a sábado', time: '10:00 – 20:00' },
  { days: 'Lunes', time: 'Cerrado' },
  { days: 'Domingo', time: 'Cerrado' },
]

export default function BarberiaRulosStylePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      {/* fondo oscuro del hero bajo el nav transparente (el wrapper no ocupa alto) */}
      <div style={{ backgroundColor: C.deep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK_HORA}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(237,230,218,0.94)',
            ink: C.ink,
            line: C.line,
            btnBg: C.orangeDark,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Interior de la barbería: sillones de cuero frente al espejo grande, con el ventanal a la calle"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(38,41,45,0.65) 0%, rgba(38,41,45,0.5) 35%, rgba(38,41,45,0.92) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(237,230,218,0.95)', color: C.ink }}
            >
              <IconStar className="w-[15px] h-[15px]" color={C.orange} />
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Barbería · Curicó · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.7rem,9.5vw,5.8rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Corte firme,
              <br />
              <span style={{ color: C.orangeLite }}>terminación prolija</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(237,230,218,0.9)' }}>
              Barbería en Av. Rauquén 1967, en pleno Curicó. Corte, barba y
              afeitado clásico con toalla caliente: reservas por WhatsApp y
              llegas directo al sillón.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_HORA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.orangeDark, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(237,230,218,0.55)', color: '#EDE6DA' }}
              >
                Ver servicios y precios
              </a>
            </div>
          </Reveal>
        </div>
        {/* franja de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(237,230,218,0.22)', backgroundColor: 'rgba(38,41,45,0.85)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(237,230,218,0.9)' }}>
            <span>Av. Rauquén 1967 · Curicó</span>
            <span>Corte · barba · afeitado</span>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram {BIZ.instagramHandle}
            </a>
            <span className="hidden md:inline" style={{ color: C.orangeLite }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Bento: la barbería ── */}
      <section id="barberia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La barbería</Eyebrow>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
              De la calle
              <br />
              <span style={{ color: C.orangeDark }}>al sillón</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Local a la calle sobre Av. Rauquén, con el ventanal que da a
              la vereda. Los textos marcados como muestra son de ejemplo:
              al publicar van los datos reales del local.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 lg:auto-rows-[230px]">
          {/* tarjeta grande de foto */}
          <Reveal className="col-span-2 lg:col-span-3 lg:row-span-2">
            <figure className="relative h-full min-h-[320px] md:min-h-[380px] lg:min-h-0 rounded-3xl overflow-hidden" style={{ backgroundColor: C.deep }}>
              <img
                src={`${IMG}/ambiente.webp`}
                alt="Fachada de la barbería en Av. Rauquén 1967: ventanal grande, toldo negro y vereda arbolada de Curicó"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(38,41,45,0.2) 0%, rgba(38,41,45,0.65) 40%, rgba(38,41,45,0.94) 100%)' }} />
              <figcaption className="relative h-full flex flex-col justify-end p-5 md:p-7">
                <span
                  className="self-start text-[11px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 rounded-full mb-3"
                  style={{ backgroundColor: C.orangeDark, color: '#FFFFFF' }}
                >
                  El local
                </span>
                <p className={`${display.className} font-semibold text-2xl md:text-3xl mb-2`} style={{ color: '#FFFFFF' }}>
                  Av. Rauquén 1967, Curicó
                </p>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(237,230,218,0.85)' }}>
                  Fachada a la calle con ventanal grande: desde afuera se ven
                  los sillones. Se llega caminando por la vereda o en auto.
                </p>
                <a
                  href="#ubicacion"
                  className={`${display.className} self-start mt-5 text-sm font-semibold underline underline-offset-4 decoration-2`}
                  style={{ color: C.orangeLite, textDecorationColor: 'rgba(244,169,142,0.5)' }}
                >
                  Ver ubicación y horarios →
                </a>
              </figcaption>
            </figure>
          </Reveal>
          {/* mini-cards con iconos */}
          {BENTO_BARBERIA.map((b, i) => (
            <Reveal
              key={b.title}
              delay={80 + i * 70}
              className={b.wide ? 'col-span-2 lg:col-span-6' : 'col-span-1 lg:col-span-3'}
            >
              <article
                className="h-full rounded-3xl border p-5 md:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-7"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <span
                  className="w-[44px] h-[44px] shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: C.orangeSoft, color: C.orangeDark }}
                  aria-hidden="true"
                >
                  {b.icon}
                </span>
                <div>
                  <h3 className={`${display.className} font-semibold text-base md:text-lg mb-2`} style={{ color: C.deep }}>
                    {b.title}
                  </h3>
                  <p className="text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                    {b.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {/* fila de métricas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-3 md:mt-4">
          {METRICAS.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <div
                className="h-full rounded-3xl border p-5 flex flex-col"
                style={{
                  backgroundColor: i < 2 ? C.deep : C.card,
                  borderColor: i < 2 ? C.deep : C.line,
                }}
              >
                <span
                  className="self-start text-[9px] md:text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: i < 2 ? 'rgba(228,87,46,0.24)' : C.orangeSoft,
                    color: i < 2 ? C.orangeLite : C.orangeDark,
                  }}
                >
                  {m.tag}
                </span>
                <span
                  className={`${display.className} text-2xl md:text-3xl lg:text-4xl font-semibold leading-none mb-2.5`}
                  style={{ color: i < 2 ? '#FFFFFF' : C.orangeDark }}
                >
                  {m.value}
                </span>
                <p className="text-xs md:text-sm leading-snug" style={{ color: i < 2 ? 'rgba(237,230,218,0.75)' : C.muted }}>
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="text-xs leading-relaxed mt-4 max-w-2xl" style={{ color: C.muted }}>
            «Dato real» viene de la ficha de Google y del perfil de Instagram
            del negocio. Las cifras marcadas como «muestra» son de ejemplo.
          </p>
        </Reveal>
      </section>

      {/* ── Bento: servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Servicios</Eyebrow>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#FFFFFF' }}>
                Corte, barba
                <br />
                <span style={{ color: C.orangeLite }}>y navaja</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'rgba(237,230,218,0.72)' }}>
                Carta de servicios de muestra: al publicar van los servicios
                y valores reales de la barbería.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 lg:auto-rows-[230px]">
            {SERVICIOS_FOTO.map((s, i) => (
              <Reveal key={s.name} delay={i * 80} className={s.span}>
                <article className="group relative h-full min-h-[300px] md:min-h-[360px] lg:min-h-0 rounded-3xl overflow-hidden" style={{ backgroundColor: C.ink }}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(38,41,45,0.2) 0%, rgba(38,41,45,0.65) 40%, rgba(38,41,45,0.94) 100%)' }} />
                  <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                    <span
                      className="self-start text-[11px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 rounded-full mb-3"
                      style={{ backgroundColor: C.orangeDark, color: '#FFFFFF' }}
                    >
                      {s.tag}
                    </span>
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-2`} style={{ color: '#FFFFFF' }}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-md mb-3" style={{ color: 'rgba(237,230,218,0.85)' }}>
                      {s.desc}
                    </p>
                    <a
                      href={waServicio(s.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} self-start text-sm font-semibold underline underline-offset-4 decoration-2`}
                      style={{ color: C.orangeLite, textDecorationColor: 'rgba(244,169,142,0.5)' }}
                    >
                      Agendar por WhatsApp →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
            {SERVICIOS_ICONO.map((s, i) => (
              <Reveal key={s.name} delay={120 + i * 80} className={s.span}>
                <article className="h-full rounded-3xl p-5 md:p-6 flex flex-col" style={{ backgroundColor: C.card }}>
                  <span
                    className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: C.orangeSoft, color: C.orangeDark }}
                    aria-hidden="true"
                  >
                    {s.icon}
                  </span>
                  <h3 className={`${display.className} font-semibold text-base md:text-lg mb-2`} style={{ color: C.deep }}>
                    {s.name}
                  </h3>
                  <p className="text-[13px] md:text-sm leading-relaxed mb-3" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                  <a
                    href={waServicio(s.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mt-auto text-sm font-semibold underline underline-offset-4 decoration-2`}
                    style={{ color: C.orangeDark, textDecorationColor: 'rgba(185,58,23,0.35)' }}
                  >
                    Agendar por WhatsApp →
                  </a>
                </article>
              </Reveal>
            ))}
            {/* banner ancho: combo */}
            <Reveal className="col-span-2 lg:col-span-6">
              <article
                className="h-full rounded-3xl p-5 md:p-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
                style={{ backgroundColor: C.orangeDark }}
              >
                <span
                  className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: '#FFFFFF' }}
                  aria-hidden="true"
                >
                  <IconScissors className="w-6 h-6" />
                </span>
                <div className="md:flex-1">
                  <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-1.5`} style={{ color: '#FFFFFF' }}>
                    Corte + barba en una sola visita
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    El combo más pedido: corte completo, perfilado de barba y
                    terminación. Reserva tu bloque y sales listo.
                  </p>
                </div>
                <a
                  href={waServicio('corte y barba')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} shrink-0 text-sm md:text-base font-semibold px-6 py-3 rounded-full transition-transform active:scale-95`}
                  style={{ backgroundColor: '#FFFFFF', color: C.orangeDark }}
                >
                  Agendar el combo
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Precios de referencia</Eyebrow>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
              La carta,
              <br />
              <span style={{ color: C.orangeDark }}>a la vista</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Valores de muestra para mostrar el formato de la carta. Al
              publicar van los precios reales de la barbería, y siempre se
              confirman por WhatsApp.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {PRECIOS.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="h-full rounded-3xl border p-5 md:p-6 flex flex-col" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className={`${display.className} font-semibold text-base md:text-lg`} style={{ color: C.deep }}>
                    {p.name}
                  </h3>
                  <span
                    className="shrink-0 text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: C.orangeSoft, color: C.orangeDark }}
                  >
                    muestra
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                  {p.desc}
                </p>
                <p className="mt-auto flex items-baseline gap-2">
                  <span className="text-xs uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                    desde
                  </span>
                  <span className={`${display.className} text-2xl md:text-3xl font-semibold`} style={{ color: C.orangeDark }}>
                    {p.price}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="text-xs leading-relaxed mt-5" style={{ color: C.muted }}>
            Precios de referencia de muestra. Al publicar, esta carta se
            reemplaza por los valores reales del local.
          </p>
        </Reveal>
      </section>

      {/* ── Sobre el negocio y opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>En Curicó</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
              Atención directa,
              <br />
              <span style={{ color: C.orangeDark }}>sin vueltas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              Rulos Style atiende en Av. Rauquén 1967, en Curicó, con hora
              reservada por WhatsApp. Es una de las barberías con más
              reseñas de la zona: {BIZ.reviews} en Google y {BIZ.followers}{' '}
              seguidores en {BIZ.instagramHandle}.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              Los textos de abajo son de muestra: al publicar se citan
              reseñas reales de la ficha.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm font-semibold px-5 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.deep, color: '#FFFFFF' }}
              >
                Ver la ficha en Google →
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(58,63,68,0.22)', color: C.deep }}
              >
                <IconInstagram className="w-4 h-4" />
                {BIZ.instagramHandle}
              </a>
            </div>
          </Reveal>
          <div className="space-y-4 md:space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={i} delay={120 + i * 110}>
                <figure className="rounded-3xl border p-6 md:p-7" style={{ backgroundColor: C.paper, borderColor: C.line }}>
                  <IconStar className="w-4 h-4 mb-3" color={C.orange} />
                  <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{r}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.orangeDark }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Ubicación y contacto</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
              Av. Rauquén 1967,
              <br />
              <span style={{ color: C.orangeDark }}>Curicó</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-5">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <IconClock className="w-4 h-4 shrink-0" color={C.orange} />
                  <span>
                    <strong className="font-semibold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horario de muestra: al publicar van los horarios reales de la
              barbería.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_HORA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base font-semibold px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.orangeDark, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base font-semibold px-6 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(228,87,46,0.4)', color: C.deep }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className="text-sm mt-6" style={{ color: C.muted }}>
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4" style={{ color: C.ink }}>
                {BIZ.phoneDisplay}
              </a>{' '}
              ·{' '}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                {BIZ.instagramHandle}
              </a>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.card }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.orangeDark }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#FFFFFF' }}>
              Reserva tu hora
              <br />
              <span style={{ color: '#FFD9C9' }}>y llega al sillón</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Escríbenos por WhatsApp con el día y la hora que te acomoden.
              Te confirmamos el bloque al tiro.
            </p>
            <a
              href={WA_LINK_HORA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base font-semibold px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: '#FFFFFF', color: C.orangeDark }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#EDE6DA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24">
          <p className={`${display.className} font-semibold text-xl mb-1`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed mb-2" style={{ color: 'rgba(237,230,218,0.8)' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
          </address>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(237,230,218,0.8)' }}>
            Sitio de ejemplo de Sitiazo: dirección, WhatsApp, reseñas y
            seguidores son reales; servicios, precios y horarios son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK_HORA} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
