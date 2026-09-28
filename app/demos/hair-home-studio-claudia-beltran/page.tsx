import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_HORA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F6EFE0',
  card: '#FFFDF6',
  green: '#2E4A3C',
  greenDeep: '#1F3229',
  mustard: '#D9A441',
  mustardSoft: '#EFD79A',
  wood: '#7A4E2B',
  ink: '#26332C',
  muted: '#555C4E',
  line: 'rgba(46,74,60,0.16)',
}

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E")`

export const metadata: Metadata = demoMetadata({
  slug: 'hair-home-studio-claudia-beltran',
  title: 'Hair Home studio Claudia Beltrán — Centro de estética en Linares',
  description: 'Centro de estética en Los Andes 1384, Linares. Limpieza facial, máscara LED, depilación, cejas y pelo, con atención directa de su dueña.',
  image: '/demos/hair-home-studio-claudia-beltran/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El estudio', href: '#estudio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Mesa de trabajo de la cabina con lupa, toallas e insumos de limpieza facial',
    tag: 'piel',
    name: 'Limpieza facial profunda',
    desc: 'Higiene, exfoliación y mascarilla según tu piel. Sales con la cara liviana.',
    rot: '-2deg',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Máscara LED facial sobre la camilla del estudio, junto a toallas y bowl de productos',
    tag: 'cabina',
    name: 'Máscara LED y fototerapia',
    desc: 'Sesión con luz LED para piel apagada, marcas o post-limpieza.',
    rot: '1.8deg',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Cabina del estudio con camilla, vaporizador y ventanal con vista a Linares',
    tag: 'pelo',
    name: 'Corte, color y peinados',
    desc: 'El “home studio” del nombre: corte, brushing y color con hora agendada.',
    rot: '-1.5deg',
  },
]

const TAMBIEN = [
  'Depilación de rostro y cuerpo',
  'Perfilado de cejas',
  'Pestañas',
  'Masaje de relajación',
  'Manicure y pedicure',
]

const VALORES = [
  'Te atiende Claudia, la dueña: la misma persona de principio a fin',
  'Hora agendada = hora respetada, sin sala de espera llena',
  'Te explica qué te va a hacer y con qué productos, antes de partir',
]

const TESTIMONIOS = [
  {
    text: 'Atención súper personalizada, se nota que le preocupa cada detalle.',
    author: 'Clienta de Linares',
  },
  {
    text: 'Lugar tranquilo, limpio y con buena energía. Volvería mil veces.',
    author: 'Clienta del centro',
  },
]

const PRECIOS = [
  { name: 'Limpieza facial profunda', price: 'desde $25.000' },
  { name: 'Máscara LED (sesión)', price: 'desde $18.000' },
  { name: 'Depilación rostro', price: 'desde $6.000' },
  { name: 'Perfilado de cejas', price: 'desde $5.000' },
  { name: 'Masaje de relajación', price: 'desde $22.000' },
  { name: 'Corte + brushing', price: 'desde $15.000' },
]

const HORAS = [
  { days: 'Lunes a sábado', time: 'Con hora agendada' },
  { days: 'Agenda', time: 'Por WhatsApp' },
]

// ── Piezas del collage ───────────────────────────────────────

function Tape({
  rot = '-4deg',
  tone = 'paper',
  className = '',
  style = {},
}: {
  rot?: string
  tone?: 'paper' | 'mustard'
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute block ${className}`}
      style={{
        width: '92px',
        height: '26px',
        transform: `rotate(${rot})`,
        backgroundColor:
          tone === 'mustard' ? 'rgba(217,164,65,0.5)' : 'rgba(255,253,246,0.72)',
        boxShadow: '0 1px 3px rgba(38,51,44,0.14)',
        clipPath: 'polygon(2% 0%, 98% 3%, 100% 90%, 4% 100%, 0% 12%)',
        ...style,
      }}
    />
  )
}

function Torn() {
  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className="relative block w-full h-[30px] md:h-[44px]"
      aria-hidden="true"
    >
      <path
        d="M0 48 L0 26 L34 18 L78 30 L120 16 L176 28 L230 14 L288 30 L344 18 L402 32 L458 20 L520 30 L576 14 L640 28 L700 18 L762 32 L820 20 L884 30 L940 16 L1004 28 L1060 18 L1120 30 L1200 20 L1200 48 Z"
        fill={C.paper}
      />
    </svg>
  )
}

function Scissors({ className = 'w-6 h-6', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6.5" r="2.4" />
      <circle cx="6" cy="17.5" r="2.4" />
      <path d="M8 7.8 L20 17.5" />
      <path d="M8 16.2 L20 6.5" />
    </svg>
  )
}

function Sparkle({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 2 L14.2 9.8 L22 12 L14.2 14.2 L12 22 L9.8 14.2 L2 12 L9.8 9.8 Z" />
    </svg>
  )
}

function Star({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} stroke={color} strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
    </svg>
  )
}

function Pin({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="4.6" fill={C.mustard} stroke={C.greenDeep} strokeWidth="1.4" />
      <path d="M12 12.6 L12 21" stroke={C.greenDeep} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function Chip({ children, rot = '-2deg', color = C.mustardSoft }: { children: React.ReactNode; rot?: string; color?: string }) {
  return (
    <span
      className={`${display.className} inline-block text-[11px] uppercase tracking-[0.18em] font-extrabold px-3 py-1.5`}
      style={{
        backgroundColor: color,
        color: C.greenDeep,
        transform: `rotate(${rot})`,
        clipPath: 'polygon(1% 8%, 99% 0%, 100% 88%, 2% 100%)',
        boxShadow: '0 1px 2px rgba(38,51,44,0.12)',
      }}
    >
      {children}
    </span>
  )
}

function SectionTitle({ chip, title, note }: { chip: string; title: React.ReactNode; note?: string }) {
  return (
    <Reveal>
      <Chip>{chip}</Chip>
      <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-10 md:mb-14">
        <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.04] tracking-[-0.01em]`} style={{ color: C.greenDeep }}>
          {title}
        </h2>
        {note && (
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
            {note}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function HairHomeStudioPage() {
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
        theme={{
          over: 'dark',
          bar: 'rgba(246,239,224,0.95)',
          ink: C.greenDeep,
          line: C.line,
          btnBg: C.green,
          btnInk: '#F6EFE0',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.greenDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cabina de Hair Home studio: camilla, lupa, vaporizador y ventanal con vista a Linares"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(31,50,41,0.6) 0%, rgba(31,50,41,0.5) 35%, rgba(31,50,41,0.9) 100%)',
          }}
        />
        {/* sticker de reseñas pegado arriba */}
        <div className="absolute top-20 md:top-24 right-5 md:right-8">
          <Reveal delay={250}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2.5 shadow-lg transition duration-300 hover:scale-[1.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3229]"
              style={{
                backgroundColor: C.mustard,
                color: C.greenDeep,
                transform: 'rotate(-3deg)',
                clipPath: 'polygon(1% 6%, 99% 0%, 100% 92%, 3% 100%)',
              }}
            >
              <Star className="w-[15px] h-[15px]" color={C.greenDeep} />
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-36">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <Chip rot="-1.5deg">Centro de estética</Chip>
              <Chip rot="2deg" color="rgba(246,239,224,0.92)">Linares</Chip>
            </div>
            <h1
              className={`${display.className} font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.6rem)] mb-6`}
              style={{ color: '#F6EFE0' }}
            >
              Pelo, piel y cejas:
              <br />
              <span
                className="inline-block px-3 mt-2"
                style={{
                  backgroundColor: C.mustard,
                  color: C.greenDeep,
                  transform: 'rotate(-1.2deg)',
                  clipPath: 'polygon(0% 10%, 100% 0%, 99% 92%, 1% 100%)',
                }}
              >
                todo en el mismo lugar
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(246,239,224,0.9)' }}>
              Centro de estética en Los Andes 1384, Linares. Te atiende
              Claudia directamente, con hora agendada y sin vueltas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-extrabold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6EFE0]`}
                style={{ backgroundColor: C.mustard, color: C.greenDeep, boxShadow: '0 6px 18px rgba(0,0,0,0.3)' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6EFE0]`}
                style={{ borderColor: 'rgba(246,239,224,0.6)', color: '#F6EFE0' }}
              >
                Ver los servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* borde rasgado hacia el papel */}
        <Torn />
      </section>

      {/* ── Servicios: tarjetas pegadas con cinta ── */}
      <section
        id="servicios"
        className="scroll-mt-20"
        style={{ backgroundColor: C.paper, backgroundImage: NOISE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionTitle
            chip="Servicios"
            title={
              <>
                Lo que se hace
                <br />
                en la cabina
              </>
            }
            note="Servicios de muestra: al publicar van los tratamientos reales del estudio, con sus tiempos y valores."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 items-start">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <article
                  className="relative p-3 pb-5 pt-6 transition duration-300 hover:-translate-y-1.5"
                  style={{
                    backgroundColor: C.card,
                    transform: `rotate(${s.rot})`,
                    boxShadow: '0 3px 6px rgba(38,51,44,0.10), 0 14px 30px rgba(38,51,44,0.10)',
                  }}
                >
                  <Tape className="left-1/2 -translate-x-1/2 -top-3" rot={i % 2 === 0 ? '-5deg' : '4deg'} />
                  <div className="relative overflow-hidden aspect-[4/3]" style={{ backgroundColor: C.paper }}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      loading="eager"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 pt-4">
                    <span className={`${display.className} inline-block text-[10px] uppercase tracking-[0.2em] font-extrabold mb-2`} style={{ color: C.wood }}>
                      ✂ {s.tag}
                    </span>
                    <h3 className={`${display.className} font-extrabold text-lg leading-tight mb-1.5`} style={{ color: C.greenDeep }}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            {/* nota adhesiva con el resto */}
            <Reveal delay={280}>
              <article
                className="relative p-6 pt-8 lg:mt-10 transition duration-300 hover:-translate-y-1.5"
                style={{
                  backgroundColor: C.mustardSoft,
                  transform: 'rotate(2.2deg)',
                  clipPath: 'polygon(0% 2%, 100% 0%, 99% 99%, 1% 100%)',
                  boxShadow: '0 12px 26px rgba(38,51,44,0.16)',
                }}
              >
                <Pin className="absolute -top-3 left-1/2 -translate-x-1/2" />
                <h3 className={`${display.className} font-black text-lg mb-3`} style={{ color: C.greenDeep }}>
                  Y también…
                </h3>
                <ul className="space-y-2">
                  {TAMBIEN.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: C.ink }}>
                      <Sparkle className="w-3 h-3 shrink-0" color={C.wood} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: C.wood }}>
                  lista de muestra
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El estudio: collage de fotos + ficha ── */}
      <section id="estudio" className="scroll-mt-20" style={{ backgroundColor: C.green }}>
        <Torn />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative pb-10">
              <figure
                className="relative p-3 pb-10 w-[82%]"
                style={{
                  backgroundColor: C.card,
                  transform: 'rotate(-2.4deg)',
                  boxShadow: '0 18px 44px rgba(0,0,0,0.35)',
                }}
              >
                <Tape className="left-1/2 -translate-x-1/2 -top-3" rot="-4deg" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Fachada de Hair Home studio: local de esquina con ventanales y puerta de madera en Linares"
                    fill
                    sizes="(min-width: 1024px) 44vw, 84vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${display.className} absolute bottom-2.5 left-0 right-0 text-center text-xs font-bold`} style={{ color: C.muted }}>
                  el local, en Los Andes
                </figcaption>
              </figure>
              <figure
                className="absolute right-0 -bottom-2 w-[52%] p-2.5 pb-8"
                style={{
                  backgroundColor: C.card,
                  transform: 'rotate(2.6deg)',
                  boxShadow: '0 14px 34px rgba(0,0,0,0.4)',
                }}
              >
                <Tape className="left-1/2 -translate-x-1/2 -top-3" rot="5deg" tone="mustard" />
                <div className="relative aspect-[5/4]">
                  <Image
                    src={`${IMG}/detalle2.webp`}
                    alt="Mesón de madera del estudio con plantas junto al ventanal"
                    fill
                    sizes="(min-width: 1024px) 26vw, 55vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${display.className} absolute bottom-1.5 left-0 right-0 text-center text-[10px] font-bold`} style={{ color: C.muted }}>
                  adentro: madera y plantas
                </figcaption>
              </figure>
              <Sparkle className="absolute -top-6 right-8 w-7 h-7" color={C.mustard} />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Chip rot="-1.5deg">El estudio</Chip>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.04] mt-4 mb-6`} style={{ color: '#F6EFE0' }}>
              Te atiende Claudia,
              <br />
              <span
                className="inline-block px-3 mt-1.5"
                style={{
                  backgroundColor: C.mustard,
                  color: C.greenDeep,
                  transform: 'rotate(1deg)',
                  clipPath: 'polygon(0% 8%, 100% 0%, 99% 94%, 1% 100%)',
                }}
              >
                la dueña del estudio
              </span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(246,239,224,0.8)' }}>
              Un centro de estética de barrio en pleno Linares: cabina
              tranquila, insumos a la vista y atención de una sola persona
              que conoce a cada clienta por su nombre.
            </p>
            <ul className="space-y-3 mb-8">
              {VALORES.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(246,239,224,0.9)' }}>
                  <Sparkle className="w-4 h-4 shrink-0 mt-1" color={C.mustard} />
                  {v}
                </li>
              ))}
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-bold px-5 py-3 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6EFE0]"
              style={{ backgroundColor: 'rgba(246,239,224,0.12)', color: '#F6EFE0', border: '1.5px solid rgba(246,239,224,0.4)' }}
            >
              <Star className="w-4 h-4" color={C.mustard} />
              {BIZ.reviews} reseñas en Google · ver la ficha →
            </a>
          </Reveal>
        </div>
        <Torn />
      </section>

      {/* ── Lo que valoran + reseñas de muestra ── */}
      <section style={{ backgroundColor: C.paper, backgroundImage: NOISE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Chip rot="-2deg">Opiniones</Chip>
              <h2 className={`${display.className} font-black text-3xl md:text-4xl leading-tight mt-4 mb-4`} style={{ color: C.greenDeep }}>
                Lo que dicen
                <br />
                las clientas
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                El estudio acumula {BIZ.reviews} reseñas en su ficha de
                Google. Los textos de al lado son de muestra: al publicar
                van las reseñas reales.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 text-[#2E4A3C] decoration-[#2e4a3c59] transition-colors hover:text-[#1F3229] hover:decoration-[#1F3229] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A441]"
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {TESTIMONIOS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="relative p-6 pt-9 transition duration-300 hover:-translate-y-1.5"
                    style={{
                      backgroundColor: C.card,
                      transform: `rotate(${i % 2 === 0 ? '-1.6deg' : '1.8deg'})`,
                      boxShadow: '0 3px 5px rgba(38,51,44,0.08), 0 12px 26px rgba(38,51,44,0.10)',
                    }}
                  >
                    <Tape className="left-1/2 -translate-x-1/2 -top-3" rot={i % 2 === 0 ? '-4deg' : '4deg'} tone="mustard" />
                    <blockquote className={`${display.className} text-base md:text-lg font-bold leading-snug mb-4`} style={{ color: C.greenDeep }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.16em] font-bold" style={{ color: C.wood }}>
                        {t.author} · de muestra
                      </span>
                      <Scissors className="w-4 h-4 shrink-0" color={C.mustard} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Precios: lista pegada al tablero verde ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.greenDeep }}>
        <Torn />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <Chip rot="-2deg">Precios</Chip>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.04] mt-4 mb-5`} style={{ color: '#F6EFE0' }}>
              Valores claros,
              <br />
              pegados al muro
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm mb-7" style={{ color: 'rgba(246,239,224,0.72)' }}>
              Lista de referencia para que sepas de antemano cuánto sale
              cada cosa. Al publicar van los precios reales del estudio.
            </p>
            <a
              href={WA_LINK_HORA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-extrabold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6EFE0]`}
              style={{ backgroundColor: C.mustard, color: C.greenDeep }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="relative p-6 md:p-8 pt-10"
              style={{
                backgroundColor: C.card,
                transform: 'rotate(-1.4deg)',
                boxShadow: '0 20px 48px rgba(0,0,0,0.4)',
              }}
            >
              <Tape className="left-8 -top-3" rot="-5deg" />
              <Tape className="right-8 -top-3" rot="5deg" tone="mustard" />
              <p className={`${display.className} text-[11px] uppercase tracking-[0.2em] font-extrabold mb-5`} style={{ color: C.wood }}>
                Valores de muestra · referenciales
              </p>
              <ul>
                {PRECIOS.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline justify-between gap-3 py-3 border-b last:border-b-0"
                    style={{ borderColor: C.line }}
                  >
                    <span className="text-sm md:text-base font-medium" style={{ color: C.ink }}>
                      {p.name}
                    </span>
                    <span className="flex-1 border-b border-dotted mx-1 translate-y-[-3px]" style={{ borderColor: 'rgba(46,74,60,0.3)' }} aria-hidden="true" />
                    <span className={`${display.className} text-sm md:text-base font-extrabold shrink-0`} style={{ color: C.green }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mt-5">
                <Scissors className="w-4 h-4" color={C.mustard} />
                <p className="text-xs" style={{ color: C.muted }}>
                  Precios de muestra — el valor real se confirma por WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Torn />
      </section>

      {/* ── Dónde estamos ── */}
      <section
        id="contacto"
        className="scroll-mt-20"
        style={{ backgroundColor: C.paper, backgroundImage: NOISE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Chip rot="-2deg">Dónde estamos</Chip>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.04] mt-4 mb-6`} style={{ color: C.greenDeep }}>
              Los Andes 1384,
              <br />
              <span
                className="inline-block px-3 mt-1.5"
                style={{
                  backgroundColor: C.mustard,
                  color: C.greenDeep,
                  transform: 'rotate(0.8deg)',
                  clipPath: 'polygon(0% 10%, 100% 0%, 99% 92%, 1% 100%)',
                }}
              >
                Linares
              </span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.mustard} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.mustard} strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.8" fill={C.mustard} />
                </svg>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2 text-[#2E4A3C] decoration-[#2e4a3c59] transition-colors hover:text-[#1F3229] hover:decoration-[#1F3229] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A441]"
                >
                  {BIZ.instagramUser}
                </a>
              </li>
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horario referencial: la agenda real se coordina por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-extrabold text-sm px-6 py-3 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E4A3C]`}
                style={{ backgroundColor: C.green, color: '#F6EFE0' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E4A3C]`}
                style={{ borderColor: 'rgba(46,74,60,0.4)', color: C.greenDeep }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="relative p-3 pt-8 min-h-[340px] h-full"
              style={{
                backgroundColor: C.card,
                transform: 'rotate(1.4deg)',
                boxShadow: '0 3px 6px rgba(38,51,44,0.08), 0 16px 36px rgba(38,51,44,0.14)',
              }}
            >
              <Tape className="left-1/2 -translate-x-1/2 -top-3" rot="-3deg" />
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.greenDeep }}>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <Torn />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <Scissors className="w-8 h-8" color={C.mustard} />
            </div>
            <h2 className={`${display.className} font-black text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.05] mb-6`} style={{ color: '#F6EFE0' }}>
              Agenda tu hora
              <br />
              <span
                className="inline-block px-3 mt-2"
                style={{
                  backgroundColor: C.mustard,
                  color: C.greenDeep,
                  transform: 'rotate(-1deg)',
                  clipPath: 'polygon(0% 10%, 100% 0%, 99% 92%, 1% 100%)',
                }}
              >
                y sales lista
              </span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,239,224,0.78)' }}>
              Escríbele a Claudia por WhatsApp, cuéntale qué necesitas y
              coordina tu hora. {BIZ.phoneDisplay}.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-extrabold text-sm md:text-base px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6EFE0]`}
              style={{ backgroundColor: C.mustard, color: C.greenDeep, boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pb-20" style={{ backgroundColor: C.greenDeep, color: '#F6EFE0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t" style={{ borderColor: 'rgba(246,239,224,0.14)' }}>
          <p className={`${display.className} font-extrabold text-xl mb-1.5 flex items-center gap-3`}>
            <Scissors className="w-5 h-5" color={C.mustard} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,239,224,0.85)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,239,224,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(246,239,224,0.8)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.mustardSoft }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: servicios, precios, reseñas citadas y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.mustardSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
