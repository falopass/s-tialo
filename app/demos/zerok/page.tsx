import { Fragment } from 'react'
import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_FALLA, INSTAGRAM_URL, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})

// Frío técnico: azul noche, hielo y acero. Bordes rectos y retícula visible.
const C = {
  noche: '#0A1A2B',
  hielo: '#7FE3F0',
  blanco: '#F2F8FB',
  acero: '#8899A6',
  acento: '#1E90FF',
  muted: '#43576B',
  lineaD: 'rgba(242,248,251,0.14)',
} as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El trabajo', href: '#trabajo' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contacto', href: '#contacto' },
]

const TIRA = ['INSTALACIÓN', 'MANTENCIÓN', 'REPARACIÓN']

const FICHA = [
  { k: 'Nota Google', v: '5,0' },
  { k: 'Opiniones', v: '9' },
  { k: 'Servicios', v: '3' },
  { k: 'Cobertura', v: 'Osorno' },
]

const SERVICIOS: {
  n: string
  icon: string
  t: string
  d: string
  link?: string
  linkLabel?: string
}[] = [
  {
    n: '01',
    icon: 'split',
    t: 'Instalación',
    d: 'Aire acondicionado split y equipos de refrigeración: ubicación, soporte, cañerías, cableado y puesta en marcha.',
  },
  {
    n: '02',
    icon: 'termo',
    t: 'Mantención',
    d: 'Limpieza, revisión de refrigerante y componentes para que el equipo enfríe parejo y dure más.',
  },
  {
    n: '03',
    icon: 'wrench',
    t: 'Reparación',
    d: 'Diagnóstico de fallas en refrigeración y climatización: si el equipo dejó de enfriar, se busca la causa y se repara.',
    link: WA_FALLA,
    linkLabel: 'Tengo una falla →',
  },
]

const TRABAJO = [
  {
    n: '01',
    tag: 'Montaje',
    img: `${IMG}/equipo.webp`,
    alt: 'Equipo de climatización instalado por ZÉROK en Osorno',
    t: 'Instalación que se nota en la foto',
    d: 'Unidades interiores y exteriores niveladas, cañerías aisladas y cableado ordenado: el montaje prolijo es lo primero que se ve y lo que después se siente en el rendimiento.',
  },
  {
    n: '02',
    tag: 'Puesta en marcha',
    img: `${IMG}/instalacion.webp`,
    alt: 'Detalle de una instalación de refrigeración realizada por ZÉROK',
    t: 'Vacío y carga al punto',
    d: 'Antes de encender el equipo se hace vacío al circuito y se carga el refrigerante que indica el fabricante: así enfría como debe desde el primer día.',
  },
]

export const metadata: Metadata = demoMetadata({
  slug: 'zerok',
  title: 'ZÉROK Refrigeración y Climatización · Osorno',
  description:
    'Instalación, mantención y reparación de refrigeración y climatización en Osorno. Nota 5,0 en Google. Coordinas la visita por WhatsApp. Demo de muestra.',
  image: `${IMG}/hero.webp`,
})

/** El copo: seis brazos con arista, el motivo de ZÉROK. */
function Copo({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <g key={a} transform={`rotate(${a} 12 12)`}>
          <path d="M12 3.4v8.6" />
          <path d="M9.9 5.6 12 3.6l2.1 2" />
        </g>
      ))}
    </svg>
  )
}

/** Iconos lineales del oficio: split, termómetro y herramienta. */
function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    split: (
      <>
        <rect x="2.5" y="4" width="19" height="7.5" rx="1" />
        <path d="M2.5 8.2h19" />
        <path d="M7 14.5c-1.4 1-1.4 2.6 0 3.6M12 14.5c-1.4 1-1.4 2.6 0 3.6M17 14.5c-1.4 1-1.4 2.6 0 3.6" />
      </>
    ),
    termo: (
      <>
        <path d="M10 4.5a2 2 0 0 1 4 0v8.6a4.5 4.5 0 1 1-4 0z" />
        <path d="M12 9v5" />
        <circle cx="12" cy="16.8" r="0.6" fill="currentColor" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.28em] font-bold mb-4 flex items-center gap-2.5`}
      style={{ color: light ? C.hielo : C.muted }}
    >
      <Copo className="w-3.5 h-3.5" />
      {children}
    </p>
  )
}

/** La línea de temperatura del hero: baja por la escena, se dibuja al
 *  cargar y un punto la recorre. Solo stroke-dashoffset. */
function TempLinea() {
  const d =
    'M-20 90 L220 90 L220 170 L400 170 L400 120 L610 120 L610 260 L800 260 L800 200 L990 200 L990 430 L1220 430'
  const ticks = 'M220 90v-15 M400 170v-15 M610 120v-15 M800 260v-15 M990 200v-15'
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="zk-temp"
        d={d}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        stroke="rgba(127,227,240,0.55)"
        strokeWidth="2"
      />
      <path
        className="zk-temp zk-ticks"
        d={ticks}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        stroke="rgba(136,153,166,0.7)"
        strokeWidth="1.5"
      />
      <path
        className="zk-dot zk-dot-glow"
        d={d}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        stroke={C.hielo}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        className="zk-dot"
        d={d}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        stroke={C.acento}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Cifra con conteo corto: cada dígito es una tira 0–9 que rueda hasta su número. */
function Cifra({ value, delay = 0 }: { value: string; delay?: number }) {
  return (
    <span className="inline-flex items-baseline">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        {value.split('').map((ch, i) =>
          /\d/.test(ch) ? (
            <span key={i} className="zk-odo">
              <span
                className="zk-odo-col"
                style={
                  { '--d': Number(ch), animationDelay: `${delay + i * 90}ms` } as CSSProperties
                }
              >
                {Array.from({ length: 10 }, (_, d) => (
                  <span key={d} className="zk-odo-num">
                    {d}
                  </span>
                ))}
              </span>
            </span>
          ) : (
            <span key={i}>{ch}</span>
          ),
        )}
      </span>
    </span>
  )
}

export default function ZerokPage() {
  return (
    <main
      className={`${body.className} antialiased`}
      style={{ backgroundColor: C.blanco, color: C.noche }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <Copo className="w-4 h-4" />
            {BIZ.short}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(10,26,43,0.94)',
          ink: C.blanco,
          line: C.lineaD,
          btnBg: C.hielo,
          btnInk: C.noche,
        }}
      />

      {/* ── Hero: la línea de temperatura bajando ── */}
      <section
        id="inicio"
        className="relative min-h-[94svh] flex items-end overflow-hidden"
        style={{ backgroundColor: C.noche }}
      >
        <div className="zk-condensa absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Trabajo de refrigeración y climatización de ZÉROK en Osorno"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,26,43,0.66) 0%, rgba(10,26,43,0.40) 42%, rgba(10,26,43,0.94) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(127,227,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(127,227,240,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <TempLinea />

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-16 md:pb-24">
          <Reveal>
            <p
              className={`${display.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5 flex items-center gap-2.5`}
              style={{ color: C.hielo }}
            >
              <Copo className="w-3.5 h-3.5" />
              Osorno · Refrigeración
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.02em] text-[clamp(2.5rem,9vw,5.4rem)] mb-5`}
              style={{ color: C.blanco }}
            >
              Frío que
              <br />
              no falla.
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl mb-8"
              style={{ color: 'rgba(242,248,251,0.85)' }}
            >
              Instalación, mantención y reparación de refrigeración y
              climatización en {BIZ.city}. Escribes por WhatsApp y
              coordinamos la visita.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center h-[48px] px-6 font-bold text-sm transition-transform active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.hielo, color: C.noche }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} inline-flex items-center justify-center h-[48px] px-6 font-bold text-sm border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(242,248,251,0.5)', color: C.blanco }}
              >
                Ver servicios
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="flex items-center gap-2">
                <Stars value={BIZ.rating} color={C.hielo} size={15} />
                <span className="text-sm font-semibold" style={{ color: C.blanco }}>
                  5,0 en Google · {BIZ.reviews} opiniones
                </span>
              </span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold underline underline-offset-4 decoration-2 hover:opacity-80 ${focusRing} tap-44`}
                style={{ color: C.hielo }}
              >
                @{BIZ.instagramUser}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de servicios ── */}
      <section
        aria-label="Líneas de servicio"
        className="border-y-2"
        style={{ backgroundColor: C.hielo, borderColor: C.noche, color: C.noche }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
          {TIRA.map((t, i) => (
            <Fragment key={t}>
              {i > 0 && <Copo className="w-3.5 h-3.5 shrink-0" />}
              <span
                className={`${display.className} text-[12px] md:text-sm font-bold tracking-[0.22em]`}
              >
                {t}
              </span>
            </Fragment>
          ))}
        </div>
      </section>

      {/* ── Servicios: retícula de 3 + ficha con conteo ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 md:gap-12 items-end mb-10">
              <h2
                className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.06] tracking-[-0.01em]`}
              >
                Del equipo nuevo
                <br />
                <span style={{ color: C.acento }}>a la falla de hoy</span>
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end"
                style={{ color: C.muted }}
              >
                Esto es una muestra de los servicios: al publicar van los
                trabajos y alcances reales de ZÉROK.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px border-2 mb-10"
              style={{ backgroundColor: C.noche, borderColor: C.noche }}
            >
              {FICHA.map((f, i) => (
                <div key={f.k} className="p-4 md:p-5" style={{ backgroundColor: '#FFFFFF' }}>
                  <p
                    className={`${display.className} font-extrabold text-3xl md:text-4xl leading-none`}
                    style={{ color: C.noche }}
                  >
                    {/\d/.test(f.v) ? <Cifra value={f.v} delay={i * 120} /> : f.v}
                  </p>
                  <p
                    className="mt-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: C.muted }}
                  >
                    {f.k}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <article
                  className="h-full p-6 border-2 flex flex-col"
                  style={{ borderColor: C.noche, backgroundColor: '#FFFFFF' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span
                      className="w-11 h-11 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: C.noche, color: C.hielo }}
                    >
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span
                      className={`${display.className} text-xs font-bold`}
                      style={{ color: C.muted }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h3 className={`${display.className} font-bold text-xl mb-2`}>{s.t}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: C.muted }}>
                    {s.d}
                  </p>
                  {s.link && (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block mt-4 text-sm font-bold underline underline-offset-4 decoration-2 hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: C.noche }}
                    >
                      {s.linkLabel}
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El trabajo: bloque técnico con fotos alternadas ── */}
      <section
        id="trabajo"
        className="scroll-mt-20"
        style={{ backgroundColor: C.noche, color: C.blanco }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>El trabajo</Eyebrow>
            <h2
              className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.06] tracking-[-0.01em] mb-12 md:mb-16`}
              style={{ color: C.blanco }}
            >
              Precisión que
              <br />
              <span style={{ color: C.hielo }}>se ve de cerca</span>
            </h2>
          </Reveal>

          <div className="space-y-12 md:space-y-16">
            {TRABAJO.map((b, i) => (
              <div
                key={b.n}
                className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <figure
                    className="relative aspect-[4/3] overflow-hidden border-2"
                    style={{ borderColor: 'rgba(242,248,251,0.35)' }}
                  >
                    <Image
                      src={b.img}
                      alt={b.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                    <span
                      className={`${display.className} absolute top-0 left-0 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em]`}
                      style={{ backgroundColor: C.hielo, color: C.noche }}
                    >
                      {b.n} · {b.tag}
                    </span>
                  </figure>
                </Reveal>
                <Reveal delay={120} className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div>
                    <h3
                      className={`${display.className} font-bold text-2xl md:text-3xl leading-tight mb-3`}
                      style={{ color: C.blanco }}
                    >
                      {b.t}
                    </h3>
                    <p
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: 'rgba(242,248,251,0.75)' }}
                    >
                      {b.d}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Confianza: la nota real ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Confianza</Eyebrow>
            <p
              className={`${display.className} font-extrabold leading-none text-[clamp(4rem,14vw,7rem)]`}
              style={{ color: C.noche }}
            >
              <Cifra value="5,0" />
            </p>
            <div className="mt-3 flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.acento} size={18} />
              <p className="text-sm font-semibold" style={{ color: C.noche }}>
                {BIZ.reviews} opiniones en Google
              </p>
            </div>
            <p
              className="mt-4 text-sm md:text-base leading-relaxed max-w-md"
              style={{ color: C.muted }}
            >
              Todas las opiniones publicadas en su ficha de Google lo evalúan
              con la nota máxima. En Instagram publica sus trabajos tal cual
              quedan.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center justify-center h-[44px] px-5 mt-6 font-bold text-sm border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
              style={{ borderColor: C.noche, color: C.noche }}
            >
              @{BIZ.instagramUser} en Instagram
            </a>
          </Reveal>
          <Reveal delay={140}>
            <figure
              className="relative aspect-[4/3] overflow-hidden border-2"
              style={{ borderColor: C.noche }}
            >
              <Image
                src={`${IMG}/detalle.webp`}
                alt="Detalle de un trabajo de refrigeración de ZÉROK"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cobertura ── */}
      <section
        id="cobertura"
        className="scroll-mt-20 border-t-2"
        style={{ borderColor: C.noche, backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Cobertura</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 md:gap-12 items-end">
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.8rem,10vw,6rem)]`}
              >
                Osorno
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end"
                style={{ color: C.muted }}
              >
                No hay local al público: la visita se coordina por WhatsApp y
                el trabajo se hace en terreno.
              </p>
            </div>
          </Reveal>
          <div
            className="mt-10 grid sm:grid-cols-3 gap-px border-2"
            style={{ backgroundColor: C.noche, borderColor: C.noche }}
          >
            {[
              {
                k: 'En terreno',
                d: 'Casas, locales y empresas: el servicio va donde está el equipo.',
              },
              {
                k: 'Por WhatsApp',
                d: 'Agendas la visita, envías fotos del equipo y recibes la respuesta en el mismo chat.',
              },
              {
                k: 'Mismo número',
                d: `${BIZ.phoneDisplay}: un solo contacto para cotizar, agendar y consultar.`,
              },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 90}>
                <div className="h-full p-5 md:p-6" style={{ backgroundColor: C.blanco }}>
                  <p
                    className={`${display.className} font-bold text-lg md:text-xl mb-2`}
                    style={{ color: C.noche }}
                  >
                    {b.k}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {b.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section
        id="contacto"
        className="scroll-mt-20"
        style={{ backgroundColor: C.acento, color: C.noche }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Copo className="w-8 h-8 mx-auto mb-5" />
            <h2
              className={`${display.className} font-extrabold text-[clamp(1.9rem,6.5vw,3.8rem)] leading-[1.05] mb-5`}
            >
              ¿El equipo dejó
              <br />
              de enfriar?
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed font-medium">
              Cuéntanos qué pasa por WhatsApp y coordinamos la visita en{' '}
              {BIZ.city}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center h-[48px] px-6 font-bold text-sm transition-transform active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.noche, color: C.blanco }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} inline-flex items-center justify-center h-[48px] px-6 font-bold text-sm border-2 transition-colors hover:bg-black/10 ${focusRing} tap-44`}
                style={{ borderColor: C.noche, color: C.noche }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.noche, color: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <p
              className={`${display.className} font-bold text-sm flex items-center gap-2`}
            >
              <Copo className="w-3.5 h-3.5" />
              {BIZ.short} · {BIZ.rubro} · {BIZ.city}
            </p>
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm"
              style={{ color: 'rgba(242,248,251,0.72)' }}
            >
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`hover:text-white transition-colors ${focusRing} tap-44`}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-white transition-colors ${focusRing} tap-44`}
              >
                @{BIZ.instagramUser}
              </a>
            </div>
          </div>
          <p
            className="mt-4 pt-4 border-t text-xs leading-relaxed"
            style={{ borderColor: C.lineaD, color: 'rgba(242,248,251,0.6)' }}
          >
            Mockup preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`}
              style={{ color: C.blanco }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name}: datos reales de su ficha de Google, textos de
            muestra.{' '}
            <a
              href={whatsappLink('demo')}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`}
              style={{ color: C.hielo }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />

      <style>{`
        .zk-condensa { animation: zk-condensa 1.6s ease-out both; }
        @keyframes zk-condensa {
          from { opacity: .35; filter: blur(16px) saturate(.7); transform: scale(1.04); }
          to { opacity: 1; filter: blur(0) saturate(1); transform: scale(1); }
        }
        .zk-temp { stroke-dasharray: 1; stroke-dashoffset: 1; animation: zk-draw 2.1s cubic-bezier(.4,0,.2,1) .25s forwards; }
        .zk-ticks { animation-duration: .9s; animation-delay: 1.7s; }
        @keyframes zk-draw { to { stroke-dashoffset: 0; } }
        .zk-dot { stroke-dasharray: .016 .984; stroke-dashoffset: 1; opacity: 0;
          animation: zk-dotmove 6.5s linear 2.4s infinite, zk-fade .6s ease 2.4s forwards; }
        .zk-dot-glow { --fo: .35; }
        @keyframes zk-dotmove { to { stroke-dashoffset: -1; } }
        @keyframes zk-fade { to { opacity: var(--fo, 1); } }
        .zk-odo { display: inline-block; height: 1em; overflow: hidden; vertical-align: bottom; line-height: 1; }
        .zk-odo-col { display: block; transform: translateY(calc(var(--d) * -1em));
          animation: zk-odo-in .9s cubic-bezier(.22,.75,.25,1) both; }
        .zk-odo-num { display: block; height: 1em; line-height: 1; }
        @keyframes zk-odo-in { from { transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .zk-condensa { animation: none; }
          .zk-temp, .zk-ticks { animation: none; stroke-dashoffset: 0; }
          .zk-dot { animation: none; opacity: 0; }
          .zk-odo-col { animation: none; }
        }
      `}</style>
    </main>
  )
}
