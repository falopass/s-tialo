import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el galpón de franjas». El taller de Alumrod está
 * pintado en franjas verticales rojas y amarillas — eso es la identidad:
 * chapa acanalada, cartel blanco con serif de letrero y rotulación
 * condensada industrial. Barlow Condensed hace de rótulo; Barlow es el
 * texto; la planilla técnica va en mono.
 */
const C = {
  paper: '#F4F2EC',
  card: '#FBFAF6',
  soft: '#EAE6DA',
  ink: '#1D1B17',
  red: '#B02218',
  redDeep: '#7E150E',
  yellow: '#F5B800',
  muted: '#5E584C',
  line: 'rgba(29,27,23,0.18)',
}

/** Franja de chapa acanalada roja/amarilla, como la fachada del taller. */
const CHAPA =
  'repeating-linear-gradient(90deg, #B02218 0px, #B02218 14px, #F5B800 14px, #F5B800 28px)'

export const metadata: Metadata = demoMetadata({
  slug: 'aluminios-alumrod',
  title: 'Aluminios Alumrod — Ventanas, puertas y vitrinas en Talca',
  description:
    'Taller de aluminio y vidrios en Diez Oriente 1712, Talca. Ventanas, puertas, vitrinas y termopaneles a medida. 4,6★ en Google. Cotiza con medidas por WhatsApp.',
  image: `${IMG}/taller.webp`,
})

const NAV_LINKS = [
  { label: 'Planilla', href: '#planilla' },
  { label: 'Obras', href: '#obras' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'El taller', href: '#taller' },
]

const PLANILLA = [
  {
    item: 'Ventanas de aluminio',
    spec: 'Correderas, proyectantes y paños fijos',
    detalle: 'Fabricadas a la medida exacta del vano, con vidrio simple o termopanel.',
    src: `${IMG}/ventana-ladrillo.webp`,
    alt: 'Ventana de aluminio instalada en muro de ladrillo',
  },
  {
    item: 'Puertas y accesos',
    spec: 'Paso principal, interior y correderas',
    detalle: 'Puertas con chapa y vidrio templado, instaladas niveladas y selladas.',
    src: `${IMG}/puerta.webp`,
    alt: 'Puerta de aluminio tipo madera instalada por Alumrod',
  },
  {
    item: 'Cierres de terraza',
    spec: 'Correderas y paños fijos con estructura',
    detalle: 'La terraza se usa todo el año: cierres acristalados a medida del espacio.',
    src: `${IMG}/terraza.webp`,
    alt: 'Cierre de terraza acristalado en perfil tipo madera',
  },
  {
    item: 'Termopanel y DVH',
    spec: 'Doble vidrio hermético',
    detalle: 'Mejor aislación térmica y acústica: se cambia el cristal o la ventana completa.',
    src: `${IMG}/ventana-negra.webp`,
    alt: 'Ventana abatible de aluminio negro con termopanel',
  },
  {
    item: 'Vitrinas y locales',
    spec: 'Ventanales y fachadas de comercio',
    detalle: 'Vitrinas completas para tiendas, con paños de vidrio de gran formato.',
    src: `${IMG}/fachada-vidrio.webp`,
    alt: 'Fachada vidriada de aluminio instalada en casa',
  },
  {
    item: 'Vidrios y mamparas',
    spec: 'Corte a medida y despacho',
    detalle: 'Vidrio y espejo cortado a medida, mamparas de baño y repuestos del rubro.',
    src: `${IMG}/furgon.webp`,
    alt: 'Furgón de Alumrod con racks para trasladar vidrios',
  },
]

const TESTIMONIALS = [
  {
    text: 'Excelente trabajo, responsable, muy amable y excelente precio… recomendable 100%.',
    author: 'César Moya',
  },
  {
    text: 'Muy buena atención de su dueño… y disponibilidad de materiales. Recomendado.',
    author: 'José Valenzuela',
  },
  {
    text: 'Muy contento con el trabajo realizado. Recomendado.',
    author: 'Francisco Valenzuela',
  },
  {
    text: 'Muchas gracias, entregaron un excelente servicio.',
    author: 'Antonio',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00–19:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
]

function Stripe({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <rect x="3" y="4" width="4" height="16" />
      <rect x="10" y="4" width="4" height="16" />
      <rect x="17" y="4" width="4" height="16" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color: light ? C.yellow : C.red }}
    >
      <Stripe className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function AluminiosAlumrodPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={<span className="uppercase tracking-wide">Alumrod</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(29,27,23,0.95)',
          ink: '#F4F2EC',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.yellow,
          btnInk: '#1D1B17',
        }}
      />

      {/* ── Hero: el galpón ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.ink }}>
        <div className="relative min-h-[68svh] flex flex-col justify-end overflow-hidden">
          <img
            src={`${IMG}/taller.webp`}
            alt="Galpón de Aluminios Alumrod pintado en franjas rojas y amarillas, Diez Oriente, Talca"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(29,27,23,0.55) 0%, rgba(29,27,23,0.25) 45%, rgba(29,27,23,0.88) 100%)' }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-8 md:pb-10 pt-32 w-full">
            <Reveal>
              {/* El cartel del taller, tal cual */}
              <div className="inline-block bg-white px-5 py-3 mb-6 shadow-xl -rotate-1">
                <p className="font-serif font-bold text-2xl md:text-3xl leading-none tracking-wide" style={{ color: '#191919' }}>
                  ALUMROD
                </p>
                <p className="font-serif text-[11px] md:text-xs tracking-[0.3em] uppercase mt-1" style={{ color: '#191919' }}>
                  Aluminios y vidrios
                </p>
              </div>
              <h1
                className={`${display.className} font-bold uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.8rem,10vw,6.5rem)]`}
                style={{ color: '#F4F2EC' }}
              >
                Ventanas, puertas
                <br />
                y <span style={{ color: C.yellow }}>vitrinas.</span>
              </h1>
            </Reveal>
          </div>
        </div>
        {/* Datos + CTA bajo la foto */}
        <div className="relative border-t-4" style={{ borderColor: C.yellow, backgroundColor: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center gap-x-8 gap-y-4 justify-between">
            <div className={`${mono.className} flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(244,242,236,0.85)' }}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium tap-44"
                style={{ color: '#F4F2EC' }}
              >
                <Stars value={4.6} color={C.yellow} className="w-[12px] h-[12px]" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </a>
              <span>{BIZ.address}</span>
              <span>Lun–Vie 9:00–19:00</span>
              <span className="hidden md:inline" style={{ color: C.yellow }}>sitio de ejemplo</span>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase font-bold tracking-wide text-sm md:text-base px-7 py-2.5 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.yellow, color: C.ink }}
            >
              Cotizar con medidas →
            </a>
          </div>
        </div>
        {/* Franja de chapa */}
        <div className="h-3 w-full" style={{ backgroundImage: CHAPA }} aria-hidden="true" />
      </section>

      {/* ── Planilla del taller ── */}
      <section id="planilla" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La planilla</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
              Todo lo que sale
              <br />
              <span style={{ color: C.red }}>del galpón</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Las líneas de trabajo del cartel del taller: ventanas, puertas,
              vitrinas y termopaneles — fabricadas e instaladas a medida.
            </p>
          </div>
        </Reveal>
        <ul>
          {PLANILLA.map((s, i) => (
            <Reveal key={s.item} delay={i * 50}>
              <li className="group border-t py-6 md:py-7 grid md:grid-cols-[64px_96px_1.3fr_1fr] gap-4 md:gap-8 items-center" style={{ borderColor: C.line }}>
                <span className={`${display.className} font-bold text-4xl md:text-5xl leading-none`} style={{ color: i === 0 ? C.red : 'rgba(176,34,24,0.85)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-24 h-24 md:w-24 md:h-24 object-cover"
                  style={{ boxShadow: '0 8px 20px -10px rgba(29,27,23,0.4)' }}
                />
                <div>
                  <h3 className={`${display.className} font-bold uppercase text-2xl md:text-3xl leading-none mb-1.5`} style={{ color: C.ink }}>
                    {s.item}
                  </h3>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.red }}>
                    {s.spec}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.detalle}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="border-t" style={{ borderColor: C.line }} />
      </section>

      {/* ── Obras instaladas ── */}
      <section id="obras" className="scroll-mt-20" style={{ backgroundColor: C.redDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Obras</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl leading-[0.95]`} style={{ color: '#F4F2EC' }}>
                Ya instalados
                <br />
                <span style={{ color: C.yellow }}>en casas de Talca</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(244,242,236,0.85)' }}>
                Fotos publicadas por el taller en su ficha de Google y en{' '}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.yellow, textDecorationColor: 'rgba(245,184,0,0.4)' }}
                >
                  @alumrodaluminios
                </a>
                .
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <Reveal className="col-span-2 row-span-2">
              <img
                src={`${IMG}/casa-vidriada.webp`}
                alt="Casa con cerramiento completo de vidrio y aluminio instalado por Alumrod"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
              />
            </Reveal>
            <Reveal>
              <img src={`${IMG}/fachada-vidrio.webp`} alt="Fachada vidriada con estructura de madera y aluminio" loading="lazy" className="w-full object-cover aspect-[3/4]" />
            </Reveal>
            <Reveal delay={90}>
              <img src={`${IMG}/ventana-ladrillo.webp`} alt="Ventana corredera de aluminio en casa de ladrillo" loading="lazy" className="w-full object-cover aspect-[3/4]" />
            </Reveal>
            <Reveal delay={120}>
              <img src={`${IMG}/furgon.webp`} alt="Furgón del taller cargado con paños de vidrio" loading="lazy" className="w-full object-cover aspect-[3/4]" />
            </Reveal>
            <Reveal delay={150}>
              <img src={`${IMG}/terraza.webp`} alt="Terraza cerrada con perfiles tipo madera y vidrio" loading="lazy" className="w-full object-cover aspect-[3/4]" />
            </Reveal>
          </div>
        </div>
      </section>
      <div className="h-3 w-full" style={{ backgroundImage: CHAPA }} aria-hidden="true" />

      {/* ── Cómo cotizar ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Cotización</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-6`} style={{ color: C.ink }}>
              Mide el vano,
              <br />
              <span style={{ color: C.red }}>manda la medida</span>
            </h2>
            <ol className="space-y-4 mb-8">
              {[
                'Anota el ancho y el alto del vano o del espacio a cerrar.',
                'Mándalos por WhatsApp — mejor con una foto del lugar.',
                'Te responden con valor y plazo por escrito, antes de fabricar.',
              ].map((paso, i) => (
                <li key={paso} className="flex gap-4 items-start">
                  <span
                    className={`${display.className} shrink-0 w-9 h-9 flex items-center justify-center font-bold text-lg`}
                    style={{ backgroundColor: C.yellow, color: C.ink }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm md:text-base leading-relaxed pt-1.5" style={{ color: C.muted }}>
                    {paso}
                  </p>
                </li>
              ))}
            </ol>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase font-bold tracking-wide text-sm md:text-base px-8 py-3 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.red, color: '#FBF6EC' }}
            >
              Mandar las medidas →
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-4 p-2" style={{ borderColor: C.ink }}>
              <img
                src={`${IMG}/logo-cartel.webp`}
                alt="Cartel del taller: Alumrod, aluminios y vidrios — ventanas, puertas, vitrinas y termopaneles"
                loading="lazy"
                className="w-full object-cover"
              />
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] px-1 pt-2 pb-1`} style={{ color: C.muted }}>
                El cartel de Diez Oriente 1712 — el mismo desde la fachada
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Cartel de clientes</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-3`} style={{ color: C.ink }}>
              {BIZ.rating}★ — {BIZ.reviews} reseñas en Google
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: C.muted }}>
              Textos originales de la ficha pública de {BIZ.name}.{' '}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.red, textDecorationColor: 'rgba(176,34,24,0.35)' }}
              >
                Ver la ficha →
              </a>
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 90}>
                <figure
                  className="p-6 border-l-8 h-full"
                  style={{ backgroundColor: C.card, borderColor: i % 2 === 0 ? C.red : C.yellow }}
                >
                  <Stars value={5} color={C.red} className="w-[14px] h-[14px] mb-3" />
                  <blockquote className={`${display.className} text-lg md:text-xl leading-snug mb-4 font-medium`} style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {t.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El taller: dirección, horario, mapa ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>El taller</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-6`} style={{ color: '#F4F2EC' }}>
              Diez Oriente 1712,
              <br />
              <span style={{ color: C.yellow }}>esquina 6 Norte</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(244,242,236,0.8)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#F4F2EC', textDecorationColor: 'rgba(244,242,236,0.35)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(244,242,236,0.8)' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.yellow} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: '#F4F2EC' }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-wide text-sm px-6 py-3 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-wide text-sm px-6 py-3 border-2 tap-44`}
                style={{ borderColor: 'rgba(244,242,236,0.4)', color: '#F4F2EC' }}
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full" style={{ backgroundColor: '#2A2823' }}>
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
      <div className="h-3 w-full" style={{ backgroundImage: CHAPA }} aria-hidden="true" />

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#F4F2EC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} uppercase font-bold text-2xl mb-2 flex items-center gap-3`}>
              <Stripe className="w-5 h-5" color={C.yellow} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,242,236,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,242,236,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,242,236,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,242,236,0.7)' }}>
            Datos de la ficha pública de Google y del Instagram del taller; descripciones de servicios de muestra.
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
