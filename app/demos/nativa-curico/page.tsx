import type { Metadata } from 'next'
import Image from 'next/image'
import { Barlow_Condensed, Source_Serif_4 } from 'next/font/google'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_HORA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})
const body = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const C = {
  night: '#150A0F',
  night2: '#1D0E15',
  wine: '#6B2737',
  wineSoft: '#3A1622',
  gold: '#B98B4E',
  goldGlow: '#E8BC77',
  rose: '#E2708F',
  roseGlow: '#F08CA8',
  bone: '#F5EFE6',
  muted: 'rgba(245,239,230,0.62)',
  faint: 'rgba(245,239,230,0.38)',
  line: 'rgba(185,139,78,0.28)',
}

const GLOW_TEXT = '0 0 14px rgba(232,188,119,0.5), 0 0 44px rgba(185,139,78,0.3)'
const GLOW_ROSE = '0 0 14px rgba(226,112,143,0.55), 0 0 46px rgba(226,112,143,0.32)'
const GLOW_FRAME =
  '0 0 0 1px rgba(185,139,78,0.45), 0 0 34px rgba(185,139,78,0.18), 0 22px 60px rgba(0,0,0,0.5)'

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = {
  title: 'Nativa Curicó — Centro de estética en Carmen 775, Curicó',
  description:
    'Centro de estética en el centro de Curicó: limpieza facial, depilación, masajes y cejas en Torre Carmen, Carmen 775. Reserva por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'El menú', href: '#menu' },
  { label: 'La casa', href: '#la-casa' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reservar', href: '#reservar' },
]

const MARQUEE = [
  'Limpieza facial',
  'Depilación',
  'Masajes',
  'Cejas & pestañas',
  'Curicó centro',
  'Reserva por WhatsApp',
]

const SERVICES = [
  {
    n: '01',
    src: `${IMG}/detalle1.webp`,
    name: 'Limpieza facial profunda',
    desc: 'Higiene, exfoliación y mascarilla según tu tipo de piel. Sales con la cara nueva y un plan simple para mantenerla.',
    tag: 'Rostro',
  },
  {
    n: '02',
    src: `${IMG}/detalle3.webp`,
    name: 'Depilación con cera',
    desc: 'Cera tibia, técnica cuidadosa y piel calmada al finalizar. Rostro, piernas, brazos y zonas combinadas.',
    tag: 'Cuerpo',
  },
  {
    n: '03',
    src: `${IMG}/ambiente.webp`,
    name: 'Masaje de relajación',
    desc: 'Sesión en cabina con luz baja y música suave. El plan perfecto para cerrar la semana sin apuro.',
    tag: 'Descanso',
  },
  {
    n: '04',
    src: `${IMG}/detalle2.webp`,
    name: 'Cejas & diagnóstico de piel',
    desc: 'Perfilado, diseño de cejas y evaluación de tu piel frente al espejo, con recomendaciones honestas.',
    tag: 'Detalle',
  },
]

const PRICES = [
  { name: 'Limpieza facial profunda', price: 'desde $25.000' },
  { name: 'Depilación zona a elección', price: 'desde $8.000' },
  { name: 'Masaje de relajación (60 min)', price: 'desde $28.000' },
  { name: 'Perfilado de cejas', price: 'desde $10.000' },
  { name: 'Pack facial + cejas', price: 'a convenir' },
]

const REVIEWS = [
  'Atención impecable y muy puntual con la hora. El box es calentito y se nota el cuidado en los detalles.',
  'Me hicieron la limpieza facial y salí feliz: me explicaron todo lo que le iban poniendo a mi piel.',
  'Queda en pleno centro, en Torre Carmen. Agenda por WhatsApp y te confirman altiro.',
]

function NeonEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode
  center?: boolean
}) {
  return (
    <p
      className={`${display.className} text-[12px] uppercase tracking-[0.32em] font-semibold mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}
      style={{ color: C.goldGlow, textShadow: GLOW_TEXT }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: C.gold, boxShadow: '0 0 8px rgba(185,139,78,0.9)' }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

export default function NativaCuricoPage() {
  return (
    <div
      className={`${body.className} nativa-page min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.night, color: C.bone }}
    >
      <style>{`
        @keyframes nativa-flicker {
          0%, 5.5%, 7.5%, 53%, 55%, 81%, 83.5%, 100% { opacity: 1; }
          6.5% { opacity: 0.55; }
          54% { opacity: 0.72; }
          82% { opacity: 0.85; }
        }
        .nativa-neon {
          animation: nativa-flicker 4.4s linear infinite;
        }
        .nativa-cta {
          background-color: #B98B4E;
          color: #1D0E15;
          box-shadow: 0 0 26px rgba(185,139,78,0.55), 0 0 60px rgba(185,139,78,0.25);
          transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease;
        }
        .nativa-cta:hover {
          background-color: #E8BC77;
          box-shadow: 0 0 38px rgba(232,188,119,0.8), 0 0 90px rgba(185,139,78,0.4);
        }
        .nativa-ghost {
          border: 1px solid rgba(185,139,78,0.28);
          color: #F5EFE6;
          transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .nativa-ghost:hover {
          background-color: rgba(245,239,230,0.06);
          border-color: rgba(185,139,78,0.65);
          box-shadow: 0 0 18px rgba(185,139,78,0.22);
        }
        .nativa-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .nativa-card:hover {
          border-color: rgba(226,112,143,0.5);
          box-shadow: 0 0 26px rgba(226,112,143,0.14);
        }
        .nativa-page a:focus-visible {
          outline: 2px solid #E8BC77;
          outline-offset: 3px;
        }
        @media (prefers-reduced-motion: reduce) {
          .nativa-neon { animation: none; }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(21,10,15,0.92)',
          ink: C.bone,
          line: C.line,
          btnBg: C.gold,
          btnInk: '#1D0E15',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.night }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Nativa Curicó: cabina de tratamientos con luz cálida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'contrast(1.1) saturate(1.08) brightness(0.9)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(21,10,15,0.55) 0%, rgba(21,10,15,0.18) 34%, rgba(21,10,15,0.62) 68%, rgba(21,10,15,0.96) 100%)',
          }}
        />
        {/* halo de neón detrás del titular */}
        <div
          className="absolute inset-x-0 bottom-0 h-[46%] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(107,39,55,0.55) 0%, rgba(185,139,78,0.12) 45%, transparent 75%)',
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
              className={`${display.className} flex items-center gap-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] px-4 py-2.5 rounded-full`}
              style={{
                backgroundColor: 'rgba(21,10,15,0.72)',
                color: C.goldGlow,
                border: `1px solid ${C.line}`,
                boxShadow: '0 0 20px rgba(185,139,78,0.22)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-12 pt-40">
          <Reveal>
            <NeonEyebrow>Centro de estética · Curicó centro</NeonEyebrow>
            <h1
              className={`${display.className} uppercase font-bold leading-[0.9] tracking-[0.005em] text-[clamp(3.4rem,13vw,8.5rem)] mb-6`}
              style={{ color: C.bone }}
            >
              Sal de aquí
              <br />
              <span
                className="nativa-neon font-extrabold"
                style={{ color: C.roseGlow, textShadow: GLOW_ROSE }}
              >
                encendida
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 italic" style={{ color: 'rgba(245,239,230,0.85)' }}>
              Centro de estética en Torre Carmen, pleno centro de Curicó.
              Una hora, una cabina y toda la atención para ti.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} nativa-cta uppercase font-bold text-sm tracking-[0.1em] px-8 py-4 rounded-full active:scale-95`}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#menu"
                className={`${display.className} nativa-ghost uppercase font-semibold text-sm tracking-[0.1em] px-8 py-4 rounded-full`}
              >
                Ver el menú
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div
          className="relative border-t"
          style={{ borderColor: C.line, backgroundColor: 'rgba(21,10,15,0.6)', backdropFilter: 'blur(6px)' }}
        >
          <div
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.2em]`}
            style={{ color: C.faint }}
          >
            <span>Carmen 775 · Ofi. 304</span>
            <span>Torre Carmen, Curicó</span>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              @{BIZ.instagram}
            </a>
            <span className="hidden md:inline" style={{ color: C.roseGlow, textShadow: '0 0 10px rgba(226,112,143,0.5)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Marquesina neón ── */}
      <div
        className="border-b"
        style={{ borderColor: C.line, backgroundColor: C.night2 }}
        aria-hidden="true"
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {MARQUEE.map((item, i) => (
            <span
              key={item}
              className={`${display.className} uppercase font-semibold text-xs md:text-sm tracking-[0.22em] whitespace-nowrap`}
              style={{ color: 'rgba(245,239,230,0.7)' }}
            >
              {item}
              <span
                className="ml-5"
                style={
                  i % 2 === 0
                    ? { color: C.gold, textShadow: GLOW_TEXT }
                    : { color: C.rose, textShadow: GLOW_ROSE }
                }
                aria-hidden="true"
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── El menú: servicios ── */}
      <section id="menu" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-end mb-12 md:mb-16">
          <Reveal>
            <NeonEyebrow>El menú</NeonEyebrow>
            <h2
              className={`${display.className} uppercase font-bold text-5xl md:text-7xl leading-[0.92] tracking-[-0.005em]`}
              style={{ color: C.bone }}
            >
              La mesa
              <br />
              <span style={{ color: C.goldGlow, textShadow: GLOW_TEXT }}>está puesta</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl lg:ml-auto" style={{ color: C.muted }}>
              Servicios de muestra para este sitio de ejemplo: al publicar
              van los tratamientos y valores reales de Nativa. La idea es
              una sola: entrar, apagar el teléfono y salir mejor de como
              llegaste.
            </p>
          </Reveal>
        </div>

        <div className="space-y-14 md:space-y-20">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={80}>
              <article
                className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
              >
                <div className="md:col-span-7 md:[direction:ltr]">
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-[16/10]"
                    style={{ boxShadow: GLOW_FRAME }}
                  >
                    <Image
                      src={s.src}
                      alt={`${s.name} en ${BIZ.name}`}
                      fill
                      sizes="(min-width: 768px) 58vw, 100vw"
                      loading="eager"
                      className="object-cover"
                      style={{ filter: 'contrast(1.12) saturate(1.05)' }}
                    />
                  </div>
                </div>
                <div className="md:col-span-5 md:[direction:ltr]">
                  <p
                    className={`${display.className} font-extrabold text-6xl md:text-7xl leading-none mb-4`}
                    style={{ color: 'transparent', WebkitTextStroke: `1.5px ${C.gold}` }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </p>
                  <p
                    className={`${display.className} text-[10px] uppercase tracking-[0.3em] font-semibold mb-2`}
                    style={{ color: C.goldGlow }}
                  >
                    {s.tag}
                  </p>
                  <h3
                    className={`${display.className} uppercase font-bold text-3xl md:text-4xl leading-[1.02] mb-3`}
                    style={{ color: C.bone }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase text-xs font-semibold tracking-[0.18em] underline underline-offset-[6px] decoration-1 transition-colors hover:text-white`}
                    style={{ color: C.goldGlow, textDecorationColor: 'rgba(185,139,78,0.5)' }}
                  >
                    Consultar esta hora →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La casa: sobre el negocio ── */}
      <section id="la-casa" className="scroll-mt-20" style={{ backgroundColor: C.wineSoft }}>
        <div
          className="h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${C.rose} 35%, ${C.gold} 65%, transparent)`, boxShadow: '0 0 14px rgba(226,112,143,0.55)' }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <NeonEyebrow>La casa</NeonEyebrow>
              <h2
                className={`${display.className} uppercase font-bold text-5xl md:text-6xl leading-[0.94] tracking-[-0.005em] mb-7`}
                style={{ color: C.bone }}
              >
                En pleno centro
                <br />
                de Curicó
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-6" style={{ color: 'rgba(245,239,230,0.78)' }}>
                Nativa funciona en la Torre Carmen, a pasos de la plaza:
                subes a la oficina 304 y la ciudad se queda abajo. La
                atención es directa — quien te recibe es quien te atiende —
                y cada sesión se toma su tiempo.
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-xl italic" style={{ color: 'rgba(245,239,230,0.68)' }}>
                Las cifras son reales: {BIZ.reviews} reseñas en su ficha de
                Google y {BIZ.instagramFollowers} seguidores en Instagram,
                donde muestran sus trabajos y cursos.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <dl className="space-y-0 border-t" style={{ borderColor: 'rgba(185,139,78,0.3)' }}>
                {[
                  { value: `${BIZ.reviews}`, label: 'reseñas en Google Maps', href: MAPS_URL },
                  { value: BIZ.instagramFollowers, label: `seguidores en @${BIZ.instagram}`, href: IG_URL },
                  { value: 'Ofi. 304', label: 'Torre Carmen · Carmen 775', href: MAPS_URL },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: 'rgba(185,139,78,0.3)' }}>
                    <dd className={`${display.className} font-extrabold text-3xl md:text-4xl shrink-0`} style={{ color: C.goldGlow, textShadow: GLOW_TEXT }}>
                      {s.value}
                    </dd>
                    <dt className="text-sm text-right leading-snug" style={{ color: 'rgba(245,239,230,0.7)' }}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        {s.label}
                      </a>
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* reseñas de muestra */}
          <div className="mt-14 md:mt-20">
            <Reveal>
              <p className={`${display.className} text-[11px] uppercase tracking-[0.3em] font-semibold mb-6`} style={{ color: 'rgba(245,239,230,0.5)' }}>
                Lo que valoran las clientas · textos de muestra
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {REVIEWS.map((t, i) => (
                <Reveal key={i} delay={i * 110}>
                  <figure
                    className="nativa-card rounded-2xl p-6 md:p-7 h-full"
                    style={{
                      backgroundColor: 'rgba(21,10,15,0.5)',
                      border: `1px solid ${C.line}`,
                    }}
                  >
                    <blockquote className="text-base md:text-lg leading-relaxed italic mb-4" style={{ color: C.bone }}>
                      “{t}”
                    </blockquote>
                    <figcaption className={`${display.className} text-[10px] uppercase tracking-[0.22em] font-semibold`} style={{ color: C.gold }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── La carta: precios de referencia ── */}
      <section id="carta" className="scroll-mt-20 max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-28">
        <Reveal>
          <div
            className="rounded-3xl px-6 md:px-12 py-10 md:py-14 relative"
            style={{
              backgroundColor: C.night2,
              boxShadow: GLOW_FRAME,
            }}
          >
            <div className="text-center mb-10">
              <NeonEyebrow center>La carta</NeonEyebrow>
              <h2
                className={`${display.className} uppercase font-bold text-4xl md:text-6xl leading-[0.94] tracking-[-0.005em]`}
                style={{ color: C.bone }}
              >
                Precios de <span style={{ color: C.goldGlow, textShadow: GLOW_TEXT }}>referencia</span>
              </h2>
              <p className="text-sm italic mt-4 max-w-md mx-auto" style={{ color: C.muted }}>
                Valores de muestra para el demo. Los precios y servicios
                reales se confirman al publicar.
              </p>
            </div>
            <ul className="space-y-0">
              {PRICES.map((p) => (
                <li key={p.name} className="flex items-baseline gap-3 py-4 border-b border-dashed" style={{ borderColor: 'rgba(185,139,78,0.3)' }}>
                  <span className={`${display.className} uppercase font-semibold text-sm md:text-base tracking-[0.06em]`} style={{ color: C.bone }}>
                    {p.name}
                  </span>
                  <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: 'rgba(185,139,78,0.4)' }} aria-hidden="true" />
                  <span className={`${display.className} font-bold text-base md:text-lg whitespace-nowrap`} style={{ color: C.goldGlow, textShadow: '0 0 10px rgba(232,188,119,0.4)' }}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className={`${display.className} text-center uppercase text-[10px] tracking-[0.28em] font-semibold mt-8`} style={{ color: 'rgba(245,239,230,0.45)' }}>
              Carta de muestra · valores por confirmar
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Reservar: contacto + ubicación ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.wineSoft }}>
        <div
          className="h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${C.gold} 35%, ${C.rose} 65%, transparent)`, boxShadow: '0 0 14px rgba(185,139,78,0.55)' }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <NeonEyebrow>Reservar</NeonEyebrow>
            <h2
              className={`${display.className} uppercase font-bold text-5xl md:text-6xl leading-[0.94] tracking-[-0.005em] mb-6`}
              style={{ color: C.bone }}
            >
              Tu hora te
              <br />
              <span style={{ color: C.goldGlow, textShadow: GLOW_TEXT }}>está esperando</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              La Torre Carmen está en Carmen 775, a pasos de la plaza de
              Curicó. Escríbenos por WhatsApp y te confirmamos hora el
              mismo día.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_HORA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} nativa-cta uppercase font-bold text-sm tracking-[0.1em] px-7 py-3.5 rounded-full active:scale-95`}
              >
                Pedir hora por WhatsApp
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} nativa-ghost uppercase font-semibold text-sm tracking-[0.1em] px-7 py-3.5 rounded-full`}
              >
                @{BIZ.instagram}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="rounded-2xl overflow-hidden min-h-[320px] h-full"
              style={{ boxShadow: GLOW_FRAME }}
            >
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 110%, rgba(226,112,143,0.3) 0%, rgba(107,39,55,0.55) 45%, transparent 72%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} uppercase font-extrabold text-[clamp(2.8rem,9vw,6.5rem)] leading-[0.9] tracking-[-0.01em] mb-6`}
              style={{ color: C.bone }}
            >
              ¿Nos vemos
              <br />
              <span style={{ color: C.goldGlow, textShadow: GLOW_TEXT }}>esta semana?</span>
            </h2>
            <p className="text-sm md:text-base italic max-w-md mx-auto mb-9 leading-relaxed" style={{ color: C.muted }}>
              Escríbenos por WhatsApp, cuéntanos qué necesitas y te
              confirmamos la hora que más te acomode.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} nativa-cta inline-block uppercase font-bold text-sm md:text-base tracking-[0.1em] px-9 py-4 rounded-full active:scale-95`}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0D0609', color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} uppercase font-extrabold tracking-[0.06em] text-2xl mb-2`} style={{ color: C.goldGlow, textShadow: GLOW_TEXT }}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.faint }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors">
                @{BIZ.instagram}
              </a>
            </address>
          </div>
          <div className={`${display.className} flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em]`} style={{ color: C.faint }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,230,0.1)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-5 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.bone }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los servicios, precios, horarios y textos de
            reseñas son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.goldGlow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
