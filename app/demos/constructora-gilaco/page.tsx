import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_EMERGENCIA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import { TrussIcon } from './scenes'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' },
  ],
})

const C = {
  paper: '#F2F0EC',
  soft: '#E5E2DA',
  card: '#FFFFFF',
  deep: '#141416',
  deepSoft: '#202024',
  red: '#FF5A44',
  redInk: '#B3271B',
  ink: '#1A1A1C',
  muted: '#5B5B60',
  line: 'rgba(26,26,28,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'constructora-gilaco',
  title: 'Constructora Gilaco — Construcción y emergencias 24/7 en Talca',
  description:
    'Constructora Gilaco SpA en Talca: remodelaciones, construcciones, quinchos, techumbres y ampliaciones. Emergencias eléctricas y sanitarias 24/7.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Emergencias', href: '#emergencias' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    name: 'Remodelaciones y construcciones',
    desc: 'Obras completas: desde la nivelación de terreno hasta la entrega, con estructura y terminaciones.',
    src: `${IMG}/nivelacion.webp`,
    alt: 'Nivel láser en trabajo de obra de Constructora Gilaco',
  },
  {
    name: 'Techumbres',
    desc: 'Cerchas y techumbres metálicas calculadas para el largo que necesita tu sitio o galpón.',
    src: `${IMG}/techumbre.webp`,
    alt: 'Cerchas metálicas de techumbre contra el cielo, obra de Constructora Gilaco',
  },
  {
    name: 'Quinchos',
    desc: 'Quinchos y estructuras abiertas para patio, con montaje firme y buen remate.',
    src: `${IMG}/quincho.webp`,
    alt: 'Quincho metálico terminado por Constructora Gilaco, con un auto estacionado',
  },
  {
    name: 'Ampliaciones',
    desc: 'Ampliaciones en steel frame y albañilería para ganar metros útiles sin perder estructura.',
    src: `${IMG}/steelframe.webp`,
    alt: 'Entramado de steel frame en ampliación de Constructora Gilaco',
  },
  {
    name: 'Galpones y estructuras',
    desc: 'Galpones, cierres y estructuras metálicas para trabajo, guardado o producción.',
    src: `${IMG}/galpon.webp`,
    alt: 'Galpón metálico terminado por Constructora Gilaco en Talca',
  },
]

const TRABAJOS = [
  { src: `${IMG}/hero.webp`, alt: 'Grúa montando paneles al atardecer en obra de Constructora Gilaco', label: 'Montaje de estructura' },
  { src: `${IMG}/montaje.webp`, alt: 'Montaje de techumbre metálica en obra de Constructora Gilaco', label: 'Techumbre en montaje' },
  { src: `${IMG}/galpon.webp`, alt: 'Galpón terminado por Constructora Gilaco', label: 'Galpón' },
  { src: `${IMG}/steelframe.webp`, alt: 'Entramado steel frame de Constructora Gilaco', label: 'Steel frame' },
  { src: `${IMG}/interior.webp`, alt: 'Tabiques de yeso-cartón en obra interior de Constructora Gilaco', label: 'Interior en obra' },
  { src: `${IMG}/estructura.webp`, alt: 'Estructura metálica cubierta de Constructora Gilaco', label: 'Estructura cubierta' },
]

const PORQUE = [
  {
    title: 'Emergencias reales 24/7',
    desc: 'La ficha y su Instagram lo dicen claro: emergencias eléctricas y sanitarias a cualquier hora.',
  },
  {
    title: 'Trato directo',
    desc: 'Cotizas y hablas por WhatsApp con la misma constructora que ejecuta el trabajo.',
  },
  {
    title: 'Obras que se pueden ver',
    desc: 'Publican sus trabajos reales en Instagram: estructuras, techumbres y remodelaciones.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.red : C.redInk }}
    >
      <TrussIcon className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function ConstructoraGilacoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo-icon.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(20,20,22,0.94)',
          ink: '#F2F0EC',
          line: 'rgba(255,255,255,0.14)',
          btnBg: '#C9301B',
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: montaje de estructura al atardecer ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Grúa montando paneles de estructura metálica al atardecer, obra de Constructora Gilaco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,20,22,0.55) 0%, rgba(20,20,22,0.35) 40%, rgba(20,20,22,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Constructora · Talca · {BIZ.hours}</Eyebrow>
            <h1
              className={`${display.className} scroll-mt-28 font-bold leading-[1.0] tracking-[-0.02em] text-[clamp(2.6rem,8.5vw,5.2rem)] mb-6`}
              style={{ color: '#F2F0EC' }}
            >
              Estructura firme,
              <br />
              <span style={{ color: C.red }}>respuesta 24/7.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(242,240,236,0.9)' }}>
              Remodelaciones, construcciones, quinchos, techumbres
              y ampliaciones en Talca — y emergencias eléctricas
              y sanitarias a cualquier hora.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-wide text-base md:text-lg px-7 py-2.5 rounded-sm transition-transform active:scale-95`}
                style={{ backgroundColor: '#C9301B', color: '#FFFFFF' }}
              >
                Cotizar proyecto
              </a>
              <a
                href={WA_EMERGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-wide text-base md:text-lg px-7 py-2.5 rounded-sm border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(242,240,236,0.55)', color: '#F2F0EC' }}
              >
                Emergencia 24/7
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(242,240,236,0.22)', backgroundColor: 'rgba(20,20,22,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(242,240,236,0.9)' }}>
            <span className="flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.red} className="w-3.5 h-3.5" />
              {BIZ.rating.toFixed(1)} en Google
            </span>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="hidden sm:inline">@{BIZ.instagram}</span>
            <span className="hidden md:inline" style={{ color: C.red }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Franja de emergencia ── */}
      <section id="emergencias" className="scroll-mt-20" style={{ backgroundColor: C.redInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12 grid md:grid-cols-[1.6fr_1fr] gap-6 md:gap-10 items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Emergencias eléctricas y sanitarias
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-tight`} style={{ color: '#FFFFFF' }}>
              ¿Falla eléctrica o de agua? Atienden 24/7.
            </h2>
            <p className="text-sm md:text-base mt-3 leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Es su servicio estrella declarado: emergencias eléctricas
              y sanitarias las 24 horas, todos los días, en Talca.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex md:justify-end">
              <a
                href={WA_EMERGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-wide text-sm md:text-base px-6 py-3 rounded-sm transition-transform active:scale-95`}
                style={{ backgroundColor: '#FFFFFF', color: C.redInk }}
              >
                Pedir ayuda ahora →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios (según bio real de Instagram) ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.ink }}>
              Lo que construye
              <br />
              <span style={{ color: C.redInk }}>Gilaco</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Servicios declarados por la propia empresa en su
              Instagram, con fotos de obras reales de su ficha.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <li
                className="rounded-sm overflow-hidden border h-full flex flex-col"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 10px rgba(20,20,22,0.08)' }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.src} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 border-t-4" style={{ borderTopColor: i % 2 === 0 ? '#E8442E' : C.deep }}>
                  <h3 className={`${display.className} font-bold text-lg leading-tight mb-2`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
          <Reveal delay={SERVICIOS.length * 70}>
            <li
              className="rounded-sm h-full flex flex-col justify-center p-6 border-2 border-dashed"
              style={{ borderColor: 'rgba(179,39,27,0.5)', backgroundColor: C.soft }}
            >
              <TrussIcon className="w-6 h-6 mb-3" color={C.redInk} />
              <h3 className={`${display.className} font-bold text-lg leading-tight mb-2`} style={{ color: C.ink }}>
                ¿Otro trabajo?
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                Cuéntales por WhatsApp qué necesitas — remodelar,
                ampliar o resolver una urgencia.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-wide text-sm px-5 py-2.5 rounded-sm self-start transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.deep, color: '#F2F0EC' }}
              >
                Consultar →
              </a>
            </li>
          </Reveal>
        </ul>
      </section>

      {/* ── Galería de trabajos reales ── */}
      <section id="trabajos" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/montaje.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(20,20,22,0.72) 0%, rgba(20,20,22,0.88) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Trabajos</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02]`} style={{ color: '#F2F0EC' }}>
                Obras reales,
                <br />
                <span style={{ color: C.red }}>publicadas por ellos</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(242,240,236,0.85)' }}>
                Fotos de sus propios trabajos en su ficha de Google
                e Instagram — grúas, cerchas, galpones y steel frame.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.src} delay={i * 60}>
                <figure
                  className="rounded-sm overflow-hidden border"
                  style={{ borderColor: 'rgba(242,240,236,0.14)', backgroundColor: C.deepSoft }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={t.src} alt={t.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className="px-4 py-3 text-xs md:text-sm font-bold uppercase tracking-wide" style={{ color: 'rgba(242,240,236,0.9)' }}>
                    {t.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className="mt-8 text-sm" style={{ color: 'rgba(242,240,236,0.85)' }}>
              Más obra en curso y terminada en{' '}
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4 decoration-2"
                style={{ color: '#F2F0EC', textDecorationColor: 'rgba(242,240,236,0.4)' }}
              >
                @{BIZ.instagram}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Por qué llamarlos ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Por qué llamarlos</Eyebrow>
          <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] mb-10 md:mb-14`} style={{ color: C.ink }}>
            Una constructora
            <br />
            <span style={{ color: C.redInk }}>que sí contesta</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {PORQUE.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article
                className="rounded-sm border p-6 h-full"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 10px rgba(20,20,22,0.08)' }}
              >
                <span className={`${display.className} block font-bold text-3xl mb-4`} style={{ color: '#E8442E' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${display.className} font-bold text-xl mb-2`} style={{ color: C.ink }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {p.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.ink }}>
              Sector oriente
              <br />
              <span style={{ color: C.redInk }}>de Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.legal}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}, Chile
              <br />
              {BIZ.hours} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2" style={{ color: C.ink, textDecorationColor: 'rgba(26,26,28,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              También en Instagram como{' '}
              <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 decoration-2" style={{ color: C.ink, textDecorationColor: 'rgba(26,26,28,0.3)' }}>
                @{BIZ.instagram}
              </a>{' '}
              — ahí publican sus obras en curso.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-wide text-sm px-6 py-3 rounded-sm transition-transform active:scale-95`}
                style={{ backgroundColor: C.deep, color: '#F2F0EC' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-wide text-sm px-6 py-3 rounded-sm border-2 transition-colors`}
                style={{ borderColor: 'rgba(26,26,28,0.35)', color: C.ink }}
              >
                Ver en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-sm overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/quincho.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(20,20,22,0.55) 0%, rgba(20,20,22,0.85) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(2.2rem,7vw,4.2rem)] leading-[1.02] mb-6`} style={{ color: '#F2F0EC' }}>
              Obra o emergencia:
              <br />
              <span style={{ color: C.red }}>Gilaco contesta</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(242,240,236,0.9)' }}>
              Cotización de proyectos y emergencias 24/7 por el
              mismo WhatsApp: {BIZ.phoneDisplay}.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold tracking-wide text-base md:text-lg px-8 py-3 rounded-sm transition-transform active:scale-95`}
              style={{ backgroundColor: '#C9301B', color: '#FFFFFF' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F2F0EC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2 flex items-center gap-3`}>
              <img
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name}`}
                className="h-9 w-auto rounded-sm bg-white px-1.5 py-1"
              />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,240,236,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(242,240,236,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,240,236,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(242,240,236,0.75)' }}>
            Datos, servicios y fotos de su ficha pública de Google e Instagram oficial (@{BIZ.instagram}).
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
