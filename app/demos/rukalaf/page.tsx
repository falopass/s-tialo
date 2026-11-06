import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_GIFT, WA_EMPRESA, MAPS_URL, MAPS_EMBED, HORARIO, IMG } from './content'

// Alegreya para la voz grande (con cursiva en las palabras clave) y
// Nunito Sans para el texto: serena, redonda, cercana.
const display = localFont({
  src: [
    { path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// Templo cálido: oro de su logo, crema de sus paredes, madera de su sala,
// un solo acento turquesa de la toalla y carbón cálido de noche.
const C = {
  crema: '#F6F0E4',
  papel: '#FCF8EF',
  arena: '#EAE0CB',
  tinta: '#2A231E',
  madera: '#5B3A25',
  maderaDeep: '#3B2718',
  suave: '#64503A', // texto secundario: 6.6:1 sobre crema
  oro: '#B08D3C', // decorativo y texto grande
  oroInk: '#8A6820', // oro oscuro para texto chico sobre crema: 4.6:1
  oroClaro: '#D8B45C', // oro claro para texto sobre oscuro
  turq: '#3E9C97',
  turqInk: '#265A57', // turquesa oscuro legible sobre crema y arena: 5.8:1
  mutedD: 'rgba(246,240,228,0.74)',
  lineL: 'rgba(91,58,37,0.16)',
  lineD: 'rgba(246,240,228,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'rukalaf',
  title: 'Rukalaf · Masoterapia y terapias holísticas en Concepción',
  description:
    'Masajes terapéuticos, piedras calientes, drenaje, limpiezas faciales y terapias holísticas con Yasna González A. Pasaje Dos 1340, Concepción. 5,0 con 127 opiniones. Reserva por WhatsApp.',
  image: `${IMG}/sala-buda.webp`,
})

const NAV_LINKS = [
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Rostro y cuerpo', href: '#rostro' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#visita' },
]

const MASAJES = [
  {
    t: 'Masaje terapéutico',
    d: 'El masaje que tu cuerpo pide ese día: espalda, cuello y hombros que van guardando la carga.',
    img: `${IMG}/sala-plantas.webp`,
    w: 1600,
    h: 1200,
    alt: 'Rincón de la sala de Rukalaf con plantas junto a la ventana',
  },
  {
    t: 'Piedras calientes',
    d: 'El calor de las piedras afloja la tensión profunda mientras las manos recorren la espalda.',
    img: `${IMG}/piedras-calientes.webp`,
    w: 1280,
    h: 1600,
    alt: 'Masaje con piedras calientes a la luz de la ventana',
  },
  {
    t: 'Drenaje de piernas',
    d: 'Piernas ligeras y renovadas: ayuda a reducir la hinchazón y la retención de líquidos.',
    img: null,
    w: 0,
    h: 0,
    alt: '',
  },
] as const

const CORPORAL = ['Exfoliación', 'Hidratación', 'Drenajes', 'Reductivos'] as const

const PALABRAS = ['cuerpo', 'alma', 'energía', 'dedicación', 'confianza', 'relajación'] as const

const OPINIONES = [
  {
    texto:
      'Recomemdada la experiencia, un lugar cálido, respetuoso, con dedicación. Masajes perfectos.',
    quien: 'Africa M.',
  },
  {
    texto: 'Una experiencia maravillosa e inolvidable.',
    quien: 'Kari B.',
  },
] as const

/** El círculo de respiración: anillo fino con su núcleo, la marca del demo. */
function Anillo({
  size = 14,
  color = C.oro,
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.6" fill={color} />
    </svg>
  )
}

/** Rótulo de sección: el anillo respira y una línea dorada se dibuja al hacer scroll. */
function Rotulo({
  children,
  dark = false,
  color,
}: {
  children: React.ReactNode
  dark?: boolean
  color?: string
}) {
  const tinta = color ?? (dark ? C.oroClaro : C.oroInk)
  return (
    <div>
      <p
        className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]"
        style={{ color: tinta }}
      >
        <Anillo size={15} color={dark ? C.oroClaro : C.oro} />
        <span>{children}</span>
      </p>
      <span
        className="rk-draw mt-3 block h-px w-24"
        style={{ backgroundColor: dark ? C.oroClaro : C.oro }}
        aria-hidden="true"
      />
    </div>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
}: {
  children: React.ReactNode
  href?: string
  tone: 'madera' | 'crema' | 'linea' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'madera'
      ? { backgroundColor: C.madera, color: C.crema }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.tinta }
        : tone === 'linea'
            ? { border: `1.5px solid ${C.madera}`, color: C.madera }
            : { border: '1.5px solid rgba(246,240,228,0.55)', color: C.crema }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="rk-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function RukalafPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* Respira: el anillo dorado detrás del logo inhala y exhala en un
           ciclo de 8 segundos (4 s de inhalación, 4 s de exhalación). */
        @keyframes rk-respira {
          0%, 100% { transform: scale(0.92); opacity: .72 }
          50% { transform: scale(1.08); opacity: 1 }
        }
        .rk-respira { animation: rk-respira 8s ease-in-out infinite }
        .rk-respira-fuera { animation: rk-respira 8s ease-in-out -4s infinite }

        /* Las palabras inhala / exhala se turnan con el mismo ciclo. */
        @keyframes rk-inhala { 0%, 46% { opacity: 1 } 54%, 96% { opacity: 0 } 100% { opacity: 1 } }
        @keyframes rk-exhala { 0%, 46% { opacity: 0 } 54%, 96% { opacity: 1 } 100% { opacity: 0 } }
        .rk-inh { animation: rk-inhala 8s ease-in-out infinite }
        .rk-exh { animation: rk-exhala 8s ease-in-out infinite }
        .rk-flat { display: none }

        /* La luz de vela: un velo cálido que pulsa muy lento sobre la foto. */
        @keyframes rk-vela { 0%, 100% { opacity: .26 } 50% { opacity: .48 } }
        .rk-vela { animation: rk-vela 9s ease-in-out infinite }

        /* El titular entra lento, palabra por palabra. */
        @keyframes rk-surge { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .rk-surge { animation: rk-surge .95s cubic-bezier(.2,.6,.2,1) both }

        /* La línea dorada de cada sección se dibuja al entrar en pantalla. */
        @supports (animation-timeline: view()) {
          .rk-draw {
            clip-path: inset(0 100% 0 0);
            animation: rk-draw linear both;
            animation-timeline: view();
            animation-range: entry 5% entry 45%;
          }
          @keyframes rk-draw { to { clip-path: inset(0 -2% 0 0) } }
        }

        .rk-btn { transition: transform .18s ease, filter .18s ease }
        .rk-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .rk-btn:active { transform: translateY(0) scale(.97) }
        .rk-btn:focus-visible { outline: 3px solid ${C.turq}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .rk-respira, .rk-respira-fuera, .rk-vela, .rk-surge, .rk-inh, .rk-exh { animation: none !important }
          .rk-respira, .rk-respira-fuera { transform: none !important; opacity: .85 !important }
          .rk-inh, .rk-exh { display: none !important }
          .rk-flat { display: inline !important }
          .rk-draw { animation: none !important; clip-path: none !important }
          .rk-vela { opacity: .3 !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="italic">Rukalaf</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: 'rgba(246,240,228,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.madera,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: la pausa que respira ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(700px 480px at 50% 0%, rgba(176,141,60,0.16), transparent 65%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pt-[88px] md:pt-[120px] pb-10 md:pb-14 text-center">
          {/* El logo respira: dos anillos en contrafase tras la marca */}
          <div className="relative mx-auto w-[208px] md:w-[248px]">
            <div aria-hidden="true" className="rk-respira absolute -inset-[30%]">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(176,141,60,0.32) 0%, rgba(176,141,60,0) 68%)',
                }}
              />
              <div
                className="absolute inset-[16%] rounded-full"
                style={{ border: `1.5px solid rgba(176,141,60,0.55)` }}
              />
            </div>
            <div
              aria-hidden="true"
              className="rk-respira-fuera absolute -inset-[13%] rounded-full"
              style={{ border: `1px solid rgba(176,141,60,0.4)` }}
            />
            <Image
              src={`${IMG}/logo.webp`}
              alt="Rukalaf, Relajación Armonía, by Yasna González A."
              width={2049}
              height={910}
              priority
              className="relative block h-auto w-full mix-blend-multiply"
            />
          </div>
          <p
            aria-hidden="true"
            className="relative mt-2 h-4 text-[10px] font-bold uppercase tracking-[0.42em]"
            style={{ color: C.oroInk }}
          >
            <span className="rk-inh absolute inset-0">inhala</span>
            <span className="rk-exh absolute inset-0">exhala</span>
            <span className="rk-flat">inhala · exhala</span>
          </p>

          <h1
            className={`${display.className} mt-7 leading-[1.04] tracking-[-0.01em] text-[clamp(2.8rem,10.5vw,5.3rem)]`}
          >
            <span className="block">
              <span className="rk-surge inline-block" style={{ animationDelay: '0.5s' }}>
                Una
              </span>{' '}
              <span className="rk-surge inline-block" style={{ animationDelay: '0.62s' }}>
                pausa
              </span>{' '}
              <span className="rk-surge inline-block" style={{ animationDelay: '0.74s' }}>
                para
              </span>
            </span>
            <span className="block">
              <span className="rk-surge inline-block" style={{ animationDelay: '0.9s' }}>
                el
              </span>{' '}
              <span className="rk-surge inline-block" style={{ animationDelay: '1.02s' }}>
                cuerpo
              </span>{' '}
              <span className="rk-surge inline-block" style={{ animationDelay: '1.14s' }}>
                y
              </span>{' '}
              <span
                className="rk-surge inline-block italic"
                style={{ animationDelay: '1.28s', color: C.oroInk }}
              >
                el alma.
              </span>
            </span>
          </h1>

          <p
            className="rk-surge mx-auto mt-5 max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: C.suave, animationDelay: '1.45s' }}
          >
            Masajes terapéuticos, piedras calientes, drenaje, limpiezas
            faciales y terapias holísticas con {BIZ.duena}, en {BIZ.city}.
          </p>
          <div
            className="rk-surge mt-7 flex flex-col items-center gap-4"
            style={{ animationDelay: '1.58s' }}
          >
            <BtnWa tone="madera">Reserva tu momento por WhatsApp</BtnWa>
            <p className="flex items-center gap-2.5 text-sm" style={{ color: C.suave }}>
              <Stars value={BIZ.ratingValue} color={C.oro} size={15} />
              <span>
                <strong className="font-bold" style={{ color: C.tinta }}>
                  {BIZ.rating}
                </strong>{' '}
                · {BIZ.reviews} opiniones en Google
              </span>
            </p>
          </div>
        </div>

        {/* La sala, bajo un velo de luz de vela */}
        <div className="rk-surge relative mx-auto w-full max-w-4xl px-5 md:px-8 pb-4" style={{ animationDelay: '1.72s' }}>
          <div
            className="relative overflow-hidden h-[290px] md:h-[430px]"
            style={{ borderRadius: '150px 150px 24px 24px' }}
          >
            <Image
              src={`${IMG}/sala-buda.webp`}
              alt="La sala de masajes de Rukalaf: madera, luz cálida y el cuadro del Buda"
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
            <div
              aria-hidden="true"
              className="rk-vela absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 90% 70% at 50% 34%, rgba(224,166,74,0.55), rgba(42,35,30,0.18) 78%)',
              }}
            />
          </div>
          <p
            className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.26em]"
            style={{ color: C.suave }}
          >
            {BIZ.mapsName} · {BIZ.city}
          </p>
        </div>
      </section>

      {/* ── 2 · El lema ── */}
      <section aria-label="El lema de Rukalaf" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <Anillo size={20} color={C.oroClaro} className="mx-auto" />
            <p
              className={`${display.className} italic mt-6 leading-[1.16] text-[clamp(1.7rem,6.4vw,3.1rem)]`}
              style={{ color: C.crema }}
            >
              «Más que un masaje,{' '}
              <span style={{ color: C.oroClaro }}>un regalo para tu alma.</span>»
            </p>
            <p
              className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{ color: C.mutedD }}
            >
              El lema de la casa
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Experiencias ── */}
      <section id="experiencias" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Lo que puedes vivir aquí</Rotulo>
            <h2
              className={`${display.className} mt-5 max-w-2xl leading-[1.06] text-[clamp(2.2rem,6.4vw,3.9rem)]`}
            >
              El cuerpo llega cansado.{' '}
              <em className="italic" style={{ color: C.oroInk }}>
                El alma se va agradecida.
              </em>
            </h2>
          </Reveal>

          {/* La experiencia insignia */}
          <Reveal delay={120}>
            <article
              className="mt-12 md:mt-14 overflow-hidden rounded-[26px] md:rounded-[30px]"
              style={{ backgroundColor: C.tinta }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative h-[260px] md:h-[320px] lg:h-auto">
                  <Image
                    src={`${IMG}/masaje-espalda.webp`}
                    alt="Manos trabajando la espalda durante un masaje"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(42,35,30,0.08), rgba(42,35,30,0.3))',
                    }}
                  />
                </div>
                <div className="p-7 md:p-11 lg:p-14">
                  <p
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: C.oroClaro }}
                  >
                    <Anillo size={14} color={C.oroClaro} />
                    La experiencia insignia
                  </p>
                  <h3
                    className={`${display.className} mt-4 leading-[1.06] text-[clamp(1.9rem,5vw,3rem)]`}
                    style={{ color: C.crema }}
                  >
                    Masaje de Restauración Premium
                  </h3>
                  <p
                    className={`${display.className} italic mt-5 text-lg md:text-xl leading-snug`}
                    style={{ color: 'rgba(246,240,228,0.9)' }}
                  >
                    «Libera tensiones profundas, equilibra tus emociones y
                    devuelve la vitalidad a tu cuerpo y mente.»
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      'Libera el estrés acumulado',
                      'Recupera tu energía vital',
                      'Relaja cuerpo, mente y espíritu',
                    ].map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-sm md:text-[15px]"
                        style={{ color: C.mutedD }}
                      >
                        <Anillo size={12} color={C.turq} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <BtnWa tone="crema">Reservar esta experiencia</BtnWa>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* El resto, en lista editorial */}
          <ul className="mt-12 md:mt-16">
            {MASAJES.map((m, i) => (
              <Reveal key={m.t} delay={i * 90}>
                <li
                  className={`flex items-center gap-5 md:gap-8 py-6 md:py-7 ${i > 0 ? 'border-t' : ''}`}
                  style={{ borderColor: C.lineL }}
                >
                  {m.img ? (
                    <span
                      className="relative block h-[84px] w-[84px] md:h-[104px] md:w-[104px] shrink-0 overflow-hidden"
                      style={{ borderRadius: '52px 52px 18px 18px' }}
                    >
                      <Image
                        src={m.img}
                        alt={m.alt}
                        fill
                        sizes="104px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </span>
                  ) : (
                    <span
                      className="flex h-[84px] w-[84px] md:h-[104px] md:w-[104px] shrink-0 items-center justify-center"
                      style={{
                        borderRadius: '52px 52px 18px 18px',
                        border: `1.5px solid rgba(62,156,151,0.5)`,
                        backgroundColor: 'rgba(62,156,151,0.08)',
                      }}
                    >
                      <Anillo size={26} color={C.turq} />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className={`${display.className} text-xl md:text-2xl leading-tight`}>
                      {m.t}
                    </h3>
                    <p
                      className="mt-1.5 max-w-xl text-sm md:text-[15px] leading-relaxed"
                      style={{ color: C.suave }}
                    >
                      {m.d}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden md:block text-[11px] font-bold tracking-[0.2em]"
                    style={{ color: C.oroInk }}
                  >
                    {String(i + 2).padStart(2, '0')}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4 · Rostro y cuerpo ── */}
      <section id="rostro" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.turqInk}>Rostro y cuerpo</Rotulo>
              <h2
                className={`${display.className} mt-5 leading-[1.06] text-[clamp(2.2rem,6.4vw,3.9rem)]`}
              >
                La piel y el cuerpo{' '}
                <em className="italic" style={{ color: C.turqInk }}>
                  también descansan.
                </em>
              </h2>
            </Reveal>
            <div className="mt-9 space-y-8">
              <Reveal>
                <div className="border-l-2 pl-5" style={{ borderColor: C.turq }}>
                  <h3 className={`${display.className} text-xl md:text-2xl leading-tight`}>
                    Limpiezas faciales
                  </h3>
                  <p className="mt-2 max-w-md text-sm md:text-[15px] leading-relaxed" style={{ color: C.suave }}>
                    Personalizadas y profundas: una limpieza pensada para tu
                    piel, no para un catálogo.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="border-l-2 pl-5" style={{ borderColor: C.turq }}>
                  <h3 className={`${display.className} text-xl md:text-2xl leading-tight`}>
                    Tratamientos corporales
                  </h3>
                  <p className="mt-2 max-w-md text-sm md:text-[15px] leading-relaxed" style={{ color: C.suave }}>
                    El cuerpo entero también se cuida, capa por capa.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {CORPORAL.map((t) => (
                      <li
                        key={t}
                        className="rounded-full px-3.5 py-1.5 text-xs font-semibold"
                        style={{
                          border: `1px solid rgba(38,90,87,0.45)`,
                          color: C.turqInk,
                          backgroundColor: 'rgba(62,156,151,0.08)',
                        }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* La camilla espera: el acento turquesa de la casa */}
          <Reveal delay={140}>
            <figure className="relative mx-auto w-[72%] max-w-[280px] md:max-w-[340px]">
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-full w-full"
                style={{ borderRadius: '160px 160px 22px 22px', border: `1.5px solid ${C.turq}` }}
              />
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: '160px 160px 22px 22px' }}
              >
                <Image
                  src={`${IMG}/camilla.webp`}
                  alt="La camilla preparada con la toalla turquesa bordada de Rukalaf"
                  width={480}
                  height={848}
                  sizes="(min-width: 1024px) 340px, 72vw"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption
                className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: C.suave }}
              >
                Tu camilla te espera
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Lo holístico ── */}
      <section id="holistico" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo dark>Más allá del masaje</Rotulo>
            <h2
              className={`${display.className} mt-5 max-w-2xl leading-[1.06] text-[clamp(2.2rem,6.4vw,3.9rem)]`}
              style={{ color: C.crema }}
            >
              Cuando el descanso{' '}
              <em className="italic" style={{ color: C.oroClaro }}>
                también es interior.
              </em>
            </h2>
          </Reveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <div
                className="relative overflow-hidden h-[300px] md:h-[420px]"
                style={{ borderRadius: '150px 150px 24px 24px' }}
              >
                <Image
                  src={`${IMG}/sala-meditacion.webp`}
                  alt="La sala de terapias de Rukalaf entre plantas; una persona descansa en la camilla"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(42,35,30,0.05), rgba(42,35,30,0.32))',
                  }}
                />
              </div>
            </Reveal>
            <div className="space-y-9">
              <Reveal>
                <div>
                  <p className="flex items-center gap-3" style={{ color: C.oroClaro }}>
                    <Anillo size={15} color={C.oroClaro} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em]">
                      Terapias holísticas y energéticas
                    </span>
                  </p>
                  <p
                    className={`${display.className} italic mt-3 text-xl md:text-2xl leading-snug`}
                    style={{ color: C.crema }}
                  >
                    «Equilibra tu cuerpo, mente y espíritu.»
                  </p>
                  <p className="mt-3 max-w-md text-sm md:text-[15px] leading-relaxed" style={{ color: C.mutedD }}>
                    Sesiones que trabajan la energía y devuelven la calma
                    desde adentro.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div
                  className="rounded-[22px] p-6 md:p-7"
                  style={{
                    border: '1px solid rgba(216,180,92,0.35)',
                    backgroundColor: 'rgba(246,240,228,0.05)',
                  }}
                >
                  <p className="flex items-center gap-3" style={{ color: C.oroClaro }}>
                    <Anillo size={15} color={C.oroClaro} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em]">
                      Círculos de mujeres
                    </span>
                  </p>
                  <p
                    className={`${display.className} mt-3 text-xl md:text-2xl leading-snug`}
                    style={{ color: C.crema }}
                  >
                    Ven a conectar con tu feminidad.
                  </p>
                  <p className="mt-3 max-w-md text-sm md:text-[15px] leading-relaxed" style={{ color: C.mutedD }}>
                    Encuentros entre mujeres que se anuncian en su Instagram{' '}
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-4 tap-44"
                      style={{ color: C.oroClaro }}
                    >
                      {BIZ.instagramUser}
                    </a>
                    .
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · Para regalar y para tu equipo ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>También se comparte</Rotulo>
            <h2
              className={`${display.className} mt-5 max-w-2xl leading-[1.06] text-[clamp(2.2rem,6.4vw,3.9rem)]`}
            >
              El descanso que regalas{' '}
              <em className="italic" style={{ color: C.oroInk }}>
                y el que llevas al trabajo.
              </em>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <article
                className="h-full rounded-[24px] p-7 md:p-9"
                style={{
                  border: `1.5px solid rgba(176,141,60,0.55)`,
                  backgroundColor: C.papel,
                }}
              >
                <Anillo size={22} color={C.oro} />
                <h3 className={`${display.className} mt-5 text-2xl md:text-3xl leading-tight`}>
                  Gift Card
                </h3>
                <p
                  className={`${display.className} italic mt-2 text-lg md:text-xl`}
                  style={{ color: C.oroInk }}
                >
                  «Regala bienestar.»
                </p>
                <p className="mt-4 max-w-sm text-sm md:text-[15px] leading-relaxed" style={{ color: C.suave }}>
                  Una experiencia Rukalaf para alguien que la necesita:
                  se coordina directo con Yasna.
                </p>
                <div className="mt-6">
                  <BtnWa tone="linea" href={WA_GIFT}>
                    Consultar por una gift card
                  </BtnWa>
                </div>
              </article>
            </Reveal>
            <Reveal delay={110}>
              <article
                className="h-full rounded-[24px] p-7 md:p-9"
                style={{ backgroundColor: C.madera }}
              >
                <Anillo size={22} color={C.oroClaro} />
                <h3
                  className={`${display.className} mt-5 text-2xl md:text-3xl leading-tight`}
                  style={{ color: C.crema }}
                >
                  Pausa Terapéutica para empresas
                </h3>
                <p className="mt-4 max-w-sm text-sm md:text-[15px] leading-relaxed" style={{ color: C.mutedD }}>
                  Rukalaf va a tu trabajo: masajes en silla para el equipo.
                  Un descanso que se nota en el ánimo de todos.
                </p>
                <div className="mt-6">
                  <BtnWa tone="crema" href={WA_EMPRESA}>
                    Consultar para tu empresa
                  </BtnWa>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7 · Yasna ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="grid grid-cols-[auto_1fr] items-center gap-6 md:gap-10">
              <figure className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2.5 rounded-full"
                  style={{ border: `1.5px solid ${C.oro}` }}
                />
                <Image
                  src={`${IMG}/yasna.webp`}
                  alt="Yasna González A., dueña de Rukalaf"
                  width={96}
                  height={96}
                  loading="lazy"
                  className="block h-24 w-24 rounded-full object-cover"
                />
              </figure>
              <div>
                <Rotulo color={C.madera}>Las manos de Rukalaf</Rotulo>
                <h2
                  className={`${display.className} mt-3 leading-[1.05] text-[clamp(1.9rem,6vw,3.2rem)]`}
                >
                  Yasna González A.
                </h2>
                <p className="mt-2 text-sm md:text-base" style={{ color: C.suave }}>
                  Masoterapia y cosmética natural · mujer empresaria · Concepción
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="mt-10 max-w-3xl">
              <p
                className={`${display.className} italic leading-[1.2] text-[clamp(1.5rem,5vw,2.4rem)]`}
                style={{ color: C.madera }}
              >
                «La señora Yasna súper atenta y cariñosa, con unas manos
                suaves y relajantes, todo lo que se necesita para relajarse.»
              </p>
              <footer
                className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em]"
                style={{ color: C.madera }}
              >
                Irazú E. · opinión en Google
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <Rotulo dark>Lo que dicen quienes ya fueron</Rotulo>
              <p
                className={`${display.className} mt-6 leading-none text-[clamp(4.6rem,16vw,7.5rem)]`}
                style={{ color: C.oro }}
              >
                {BIZ.rating}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Stars value={BIZ.ratingValue} color={C.oroClaro} size={19} />
              </div>
              <p className="mt-3 text-sm md:text-base" style={{ color: C.mutedD }}>
                {BIZ.reviews} opiniones en Google
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {PALABRAS.map((p) => (
                  <li
                    key={p}
                    className="rounded-full px-3.5 py-1.5 text-xs font-semibold"
                    style={{ border: `1px solid ${C.lineD}`, color: C.mutedD }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: 'rgba(246,240,228,0.65)' }}>
                Las palabras que más se repiten
              </p>
            </Reveal>

            <div>
              <Reveal>
                <blockquote className="border-l-2 pl-5 md:pl-7" style={{ borderColor: C.oro }}>
                  <p
                    className={`${display.className} italic leading-[1.18] text-[clamp(1.4rem,4.6vw,2.1rem)]`}
                    style={{ color: C.crema }}
                  >
                    «Súper increíble el lugar, la energía, la experiencia,
                    súper recomendada la señora Yasna súper atenta y cariñosa,
                    con unas manos suaves y relajantes, todo lo que se
                    necesita para relajarse.»
                  </p>
                  <footer className="mt-4 text-sm font-bold" style={{ color: C.oroClaro }}>
                    Irazú E.
                  </footer>
                </blockquote>
              </Reveal>
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {OPINIONES.map((o, i) => (
                  <Reveal key={o.quien} delay={120 + i * 90}>
                    <blockquote className="border-t pt-4" style={{ borderColor: 'rgba(216,180,92,0.4)' }}>
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(246,240,228,0.88)' }}>
                        «{o.texto}»
                      </p>
                      <footer className="mt-3 text-sm font-bold" style={{ color: C.oroClaro }}>
                        {o.quien}
                      </footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9 · Visítanos ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24">
          <Reveal>
            <Rotulo>Cómo llegar</Rotulo>
            <h2
              className={`${display.className} mt-5 max-w-2xl leading-[1.06] text-[clamp(2rem,6vw,3.6rem)]`}
            >
              Una casa tranquila en{' '}
              <em className="italic" style={{ color: C.oroInk }}>
                Villa Los Álamos de Paicaví.
              </em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className="mx-auto mt-10 w-full max-w-6xl px-5 md:px-8">
            <div
              className="relative overflow-hidden h-[240px] md:h-[380px]"
              style={{ borderRadius: '24px' }}
            >
              <Image
                src={`${IMG}/entrada.webp`}
                alt="La entrada de la casa de Rukalaf, entre plantas y luces cálidas"
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                loading="lazy"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(42,35,30,0.04), rgba(42,35,30,0.22))',
                }}
              />
            </div>
          </div>
        </Reveal>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Reveal>
              <ul className="max-w-md">
                {HORARIO.map((h) => (
                  <li
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 border-t py-3 text-sm md:text-[15px]"
                    style={{ borderColor: C.lineL }}
                  >
                    <span className="font-bold" style={{ color: C.tinta }}>
                      {h.d}
                    </span>
                    <span style={{ color: h.cerrado ? C.oroInk : C.suave }}>
                      {h.h}
                    </span>
                  </li>
                ))}
                <li className="border-t" style={{ borderColor: C.lineL }} aria-hidden="true" />
              </ul>
              <address className="not-italic mt-6 text-base leading-relaxed" style={{ color: C.suave }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.madera, textDecorationColor: 'rgba(176,141,60,0.6)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <BtnWa tone="madera">Reserva tu momento</BtnWa>
                <BtnWa tone="linea" href={MAPS_URL}>
                  Cómo llegar
                </BtnWa>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div
              className="relative w-full overflow-hidden rounded-[22px] aspect-[4/3] min-h-[280px]"
              style={{ border: `1px solid ${C.lineL}` }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.mapsName}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: C.suave }}>
              {BIZ.address} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · Cierre: vive la experiencia ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.maderaDeep }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(640px 420px at 50% 30%, rgba(176,141,60,0.22), transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="relative mx-auto h-16 w-16">
              <div
                aria-hidden="true"
                className="rk-respira absolute inset-0 rounded-full"
                style={{ border: `1.5px solid rgba(216,180,92,0.8)` }}
              />
              <div
                aria-hidden="true"
                className="rk-respira-fuera absolute -inset-3 rounded-full"
                style={{ border: '1px solid rgba(216,180,92,0.45)' }}
              />
              <Anillo size={16} color={C.oroClaro} className="absolute inset-0 m-auto" />
            </div>
            <h2
              className={`${display.className} mt-8 leading-[1.06] text-[clamp(2.4rem,8vw,4.6rem)]`}
              style={{ color: C.crema }}
            >
              Vive la experiencia{' '}
              <em className="italic" style={{ color: C.oroClaro }}>
                Rukalaf.
              </em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
              Escríbele a Yasna por WhatsApp y reserva tu momento en{' '}
              {BIZ.address}, {BIZ.city}.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <BtnWa tone="crema">Reserva tu momento por WhatsApp</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} text-2xl md:text-3xl tap-44 underline underline-offset-8 decoration-2`}
                style={{ color: C.crema, textDecorationColor: 'rgba(216,180,92,0.7)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 11 · Footer ── */}
      <footer style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="border-t" style={{ borderColor: C.lineL }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Rukalaf, Relajación Armonía, by Yasna González A."
                  width={2049}
                  height={910}
                  loading="lazy"
                  className="block h-12 w-auto mix-blend-multiply"
                />
                <p className="text-sm mt-2" style={{ color: C.suave }}>
                  {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(42,35,30,0.85)' }}>
                    {l.label}
                  </a>
                ))}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(42,35,30,0.85)' }}
                >
                  Instagram
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center font-bold"
                  style={{ color: C.oroInk }}
                >
                  WhatsApp
                </a>
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineL }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(42,35,30,0.62)' }}>
                Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 tap-44"
                  style={{ color: C.madera }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.mapsName}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 tap-44"
                  style={{ color: C.oroInk }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
