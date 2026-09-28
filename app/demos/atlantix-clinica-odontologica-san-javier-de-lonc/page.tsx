import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EVAL, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, HORARIO, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})

// Identidad tomada del local real: el teal de la fachada y del logo (la "A"
// con la sonrisa), sobre blanco clínico y gris pizarra.
const C = {
  paper: '#F3FAF9',
  deep: '#0E2F33',
  deep2: '#0A2528',
  teal: '#12B5A5',
  tealDeep: '#0B7C71',
  tealSoft: '#B9E8E2',
  slate: '#3D5560',
  ink: '#123033',
  muted: 'rgba(18,48,51,0.66)',
  bone: '#F7FDFC',
  mutedL: 'rgba(247,253,252,0.72)',
  line: 'rgba(14,47,51,0.14)',
  lineL: 'rgba(185,232,226,0.25)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'atlantix-clinica-odontologica-san-javier-de-lonc',
  title: 'Atlantix Clínica Odontológica — San Javier de Loncomilla',
  description: 'Clínica dental en Sgto. Aldea 2610, San Javier: limpieza, ortodoncia, implantes y más. 4,8 estrellas en 58 reseñas de Google. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El local', href: '#el-local' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horarios', href: '#agenda' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.tealSoft : C.tealDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** La sonrisa del logo: un arco teal bajo el titular. */
function Smile({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 26" className={`w-[104px] ${className}`} fill="none" aria-hidden="true">
      <path d="M8 6 Q60 40 112 6" stroke={C.teal} strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

export default function AtlantixPage() {
  return (
    <div
      className={`${body.className} atlantix-page min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .atlantix-page a:focus-visible { outline: 2px solid #0B7C71; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(243,250,249,0.94)',
          ink: C.deep,
          line: C.line,
          btnBg: C.tealDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero clínico: blanco, datos duros, fachada real ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-20 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <Reveal>
            <Eyebrow>Clínica odontológica · San Javier</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,8vw,4.4rem)] mb-2`}
              style={{ color: C.deep }}
            >
              La sonrisa se hace
              <br />
              en <span style={{ color: C.tealDeep }}>pareja</span>
            </h1>
            <Smile className="mb-6" />
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              Atlantix atiende en Sgto. Aldea 2610: limpieza, tapaduras,
              ortodoncia e implantes. Una pareja de doctores que trabaja a
              la par —lo dicen sus propias reseñas— y recepción que te
              avisa con tiempo.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
                style={{ backgroundColor: C.tealDeep, color: '#fff', boxShadow: '0 10px 30px rgba(11,124,113,0.35)' }}
              >
                Agendar hora
              </a>
              <a
                href="#servicios"
                className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full border tap-44 transition-colors hover:bg-white`}
                style={{ borderColor: 'rgba(14,47,51,0.35)', color: C.deep }}
              >
                Ver servicios
              </a>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 tap-44" style={{ color: C.deep }}>
              <Stars value={BIZ.rating} color="#F2A93B" className="w-4 h-4" />
              <span className={`${display.className} font-bold text-sm`}>{BIZ.ratingLabel}</span>
              <span className="text-sm underline underline-offset-4 decoration-1" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google
              </span>
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <figure
                className="relative aspect-[4/3] overflow-hidden"
                style={{ borderRadius: '24px', boxShadow: '0 24px 60px rgba(14,47,51,0.18)', border: `1px solid ${C.line}` }}
              >
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Atlantix en Sgto. Aldea, San Javier: local de esquina pintado de turquesa con el letrero de la clínica"
                  fill
                  priority
                  sizes="(min-width:768px) 45vw, 90vw"
                  className="object-cover"
                />
              </figure>
              <div
                className="absolute -bottom-5 left-4 md:-left-5 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
                style={{ backgroundColor: C.bone, border: `1px solid ${C.line}` }}
              >
                <Image src={`${IMG}/logo.webp`} alt="" width={48} height={48} className="rounded-full" aria-hidden="true" />
                <div>
                  <p className={`${display.className} font-bold text-base leading-none`} style={{ color: C.deep }}>Atlantix</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] mt-1" style={{ color: C.tealDeep }}>Clínica odontológica</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        {/* Franja de datos verificables */}
        <div className="border-y" style={{ borderColor: C.line, backgroundColor: '#EAF6F4' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-center gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: C.slate }}>
            <span>{BIZ.ratingLabel} · {BIZ.reviews} reseñas</span>
            <span>L–V 10:00–19:00 · Sáb 10:00–14:00</span>
            <span>{BIZ.address}</span>
            <span className="hidden md:inline" style={{ color: C.tealDeep }}>@{BIZ.instagram}</span>
          </div>
        </div>
      </section>

      {/* ── Servicios: el afiche real + la lista completa ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-5`} style={{ color: C.deep }}>
              Lo que atiende
              <br />
              la clínica
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              La lista de su afiche publicado, más los servicios que figuran
              en su agenda online. Todo se consulta y agenda por WhatsApp.
            </p>
            <figure className="relative aspect-[4/5] max-w-[300px] rounded-2xl overflow-hidden rotate-[-2deg]" style={{ border: `1px solid ${C.line}`, boxShadow: '0 16px 40px rgba(14,47,51,0.16)' }}>
              <Image
                src={`${IMG}/servicios-card.webp`}
                alt="Afiche publicado por Atlantix con su lista de servicios: limpieza, tapaduras, extracciones, ortodoncia, ortopedia maxilar y periodoncia"
                fill
                sizes="(min-width:768px) 30vw, 80vw"
                className="object-cover"
              />
            </figure>
            <p className="text-xs mt-3 max-w-[300px]" style={{ color: C.muted }}>
              Afiche real difundido por la clínica en sus redes.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ol className="rounded-3xl border overflow-hidden divide-y" style={{ backgroundColor: '#fff', borderColor: C.line }}>
              {SERVICIOS.map((s, i) => (
                <li key={s} className="flex items-baseline gap-5 px-6 md:px-8 py-4" style={{ borderColor: C.line }}>
                  <span className={`${display.className} text-sm font-bold w-7 shrink-0`} style={{ color: C.teal }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base md:text-lg font-semibold flex-1" style={{ color: C.deep }}>{s}</span>
                  <a
                    href={WA_LINK_EVAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-[0.12em] tap-44 underline underline-offset-4"
                    style={{ color: C.tealDeep }}
                  >
                    Consultar
                  </a>
                </li>
              ))}
            </ol>
            <p className="text-xs leading-relaxed mt-4" style={{ color: C.muted }}>
              ¿No ves lo que buscas? Pregunta igual: la lista crece y la
              evaluación se conversa por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El local: la esquina turquesa ── */}
      <section id="el-local" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>El local</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-12">
              <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.bone }}>
                La esquina
                <br />
                <span style={{ color: C.tealSoft }}>turquesa</span>
              </h2>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutedL }}>
                Se reconoce a la cuadra: el local turquesa de Sgto. Aldea.
                Fotos reales publicadas en su ficha de Google.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { src: 'esquina', alt: 'Esquina de la clínica Atlantix pintada de turquesa en San Javier' },
              { src: 'entrada', alt: 'Entrada de Atlantix con puertas de vidrio y cortina pública de servicios' },
              { src: 'calle', alt: 'Vista de la calle Sgto. Aldea frente a la clínica' },
              { src: 'letrero', alt: 'Letrero Atlantix con el logo de la A y la sonrisa' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.lineL}` }}>
                  <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:768px) 22vw, 44vw" className="object-cover" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones: citas reales, con nombre ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Lo que dicen</Eyebrow>
          <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-4`} style={{ color: C.deep }}>
            “Trabajan siempre a la par”
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mb-10 md:mb-12" style={{ color: C.muted }}>
            Una pareja de doctores y una recepción que se aprende tu nombre:
            en las {BIZ.reviews} reseñas de Google aparecen una y otra vez,
            con nombre propio — Alejandra en recepción, los doctores en box.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 70}>
              <figure className="rounded-2xl p-6 md:p-7 h-full" style={{ backgroundColor: '#fff', border: `1px solid ${C.line}` }}>
                <Stars value={5} color="#F2A93B" className="w-3.5 h-3.5" />
                <blockquote className="text-sm md:text-[15px] leading-relaxed mt-3 mb-4" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${display.className} text-[10px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.tealDeep }}>
                  {r.author} <span className="font-normal" style={{ color: C.muted }}>· {r.when} · Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Agenda y ubicación ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Agenda</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mb-6`} style={{ color: C.bone }}>
              Sgto. Aldea 2610,
              <br />
              <span style={{ color: C.tealSoft }}>San Javier</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.mutedL }}>
              La hora se agenda por WhatsApp — Alejandra te confirma día y
              hora con antelación. Horario de su agenda publicada:
            </p>
            <dl className="space-y-0 border-t mb-8" style={{ borderColor: C.lineL }}>
              {HORARIO.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: C.lineL, color: C.bone }}>
                  <dt className={`${display.className} text-[10px] uppercase tracking-[0.24em] font-bold`} style={{ color: C.tealSoft }}>{h.days}</dt>
                  <dd className="text-sm md:text-base text-right font-semibold">{h.time}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: C.lineL, color: C.bone }}>
                <dt className={`${display.className} text-[10px] uppercase tracking-[0.24em] font-bold`} style={{ color: C.tealSoft }}>WhatsApp</dt>
                <dd className="text-sm md:text-base text-right">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 tap-44">{BIZ.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-4 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
              style={{ backgroundColor: C.teal, color: C.deep2 }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative min-h-[320px] rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.lineL}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 text-xs font-bold px-4 py-2 rounded-full shadow-lg tap-44"
                style={{ backgroundColor: C.bone, color: C.deep }}
              >
                Open in Maps ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep2, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={44} height={44} className="rounded-full" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-bold text-lg leading-none`} style={{ color: C.bone }}>{BIZ.name}</p>
              <p className="text-xs mt-1" style={{ color: C.mutedL }}>{BIZ.rubro} · {BIZ.city}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.tealSoft }}>{BIZ.phoneDisplay}</a>
            <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.tealSoft }}>@{BIZ.instagram}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.tealSoft }}>Google Maps</a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineL }}>
          <p className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-5 text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(185,232,226,0.5)' }}>
            Sitio de ejemplo creado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Sitiazo</a>
            {' '}— fotos, reseñas y horarios reales del negocio ·{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.tealSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
