import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MEDIDA, MAPS_URL, MAPS_EMBED, IMG, HORAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/familjen-grotesk/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  paper: '#F2EFE6',
  card: '#FBF9F3',
  ink: '#151C21',
  muted: '#4E5653',
  line: 'rgba(21,28,33,0.16)',
  deep: '#10161A',
  bronze: '#8A6330',
  bronzeHi: '#C89B5C',
  steel: '#5B6870',
}

export const metadata: Metadata = demoMetadata({
  slug: 'aluminio-y-vidrios-imperio',
  title: 'Aluminio y Vidrios Imperio — Cristalería a medida en Talca',
  description:
    'Cristalero en 11 Oriente, entre 6 y 7 Norte, Talca. Ventanas de aluminio, termopaneles, mamparas, vitrinas comerciales y vidrio templado a medida.',
  image: `${IMG}/ventanales.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Vidrios', href: '#vidrios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** Trabajos reales fotografiados en la ficha de Google Maps. */
const WORKS = [
  {
    src: `${IMG}/ventanal-esquinero.webp`,
    alt: 'Ventanal esquinero de aluminio negro instalado en una casa de madera',
    tag: 'Ventanal esquinero',
    detail: 'Encuentro de paños en esquina, marco negro',
  },
  {
    src: `${IMG}/vitrina-comercial.webp`,
    alt: 'Vitrina de vidrio con puerta instalada en la tienda Chic Store',
    tag: 'Vitrina comercial',
    detail: 'Local comercial: paño fijo + puerta de vidrio',
  },
  {
    src: `${IMG}/mamparas.webp`,
    alt: 'Mamparas de baño con marco bronce y vidrio tipo mármol',
    tag: 'Mamparas de baño',
    detail: 'Divisiones de ducha con perfil bronce',
  },
  {
    src: `${IMG}/ventana-esquinera.webp`,
    alt: 'Ventana esquinera de marco color madera con el atardecer reflejado en el vidrio',
    tag: 'Ventana esquinera',
    detail: 'Marco madera, vidrio reflectante al poniente',
  },
]

/** Catálogo real: exhibidor de la empresa en Construex + lo visible en las fotos. */
const VIDRIOS = [
  { n: '01', name: 'Ventanas de aluminio', desc: 'Correderas, proyectantes y paños fijos, al color y la medida de tu casa.' },
  { n: '02', name: 'Doble acristalamiento', desc: 'Vidrio doble tipo I a IV: el termopanel que aísla el frío y el ruido.' },
  { n: '03', name: 'Vidrio templado', desc: 'Vidrio de seguridad para puertas, mamparas y zonas de impacto.' },
  { n: '04', name: 'Vidrio laminado', desc: 'Dos vidrios con lámina intermedia: seguridad y filtro acústico.' },
  { n: '05', name: 'Vidrio control solar', desc: 'Menos calor y menos reflejo en las horas duras del sol.' },
  { n: '06', name: 'Vidrio simple', desc: 'Corte a medida para repisas, muebles, cubiertas y reemplazos.' },
]

const QUOTES = [
  {
    text: 'Excelente atención y súper conforme con mis ventanas.',
    author: 'Estefany Fernández',
  },
  {
    text: 'Muy buena atención, trabajan impecable y rápido.',
    author: 'Silvestre Flor Martínez',
  },
]

const PASOS = [
  { n: '1', t: 'Escríbenos por WhatsApp', d: 'Cuéntanos qué necesitas y, si las tienes, las medidas del vano.' },
  { n: '2', t: 'Tomamos las medidas', d: 'Para ventanas y mamparas, la medida se confirma en terreno antes de fabricar.' },
  { n: '3', t: 'Fabricación e instalación', d: 'El vidrio se corta a medida y queda instalado en su lugar.' },
]

/** Línea de cota: el motivo del demo — una cota de plano (línea + topes + etiqueta). */
function Cota({ label, color }: { label: string; color: string }) {
  return (
    <div className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em]`} style={{ color }} aria-hidden="true">
      <span className="h-[10px] w-px" style={{ backgroundColor: color }} />
      <span className="h-px flex-1" style={{ backgroundColor: color }} />
      <span className="px-1">{label}</span>
      <span className="h-px flex-1" style={{ backgroundColor: color }} />
      <span className="h-[10px] w-px" style={{ backgroundColor: color }} />
    </div>
  )
}

function Check({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5 L9.5 18 L20 6.5" />
    </svg>
  )
}

export default function ImperioPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>

      <BlitzNav
        name={`${BIZ.short} · Aluminio y Vidrios`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(242,239,230,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.bronze,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre con marco de cota ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/ventanales.webp`}
          alt="Ventanales corredizos de aluminio instalados por Imperio en una casa en construcción de Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,22,26,0.66) 0%, rgba(16,22,26,0.18) 45%, rgba(16,22,26,0.9) 100%)',
          }}
        />
        {/* cotas de plano: el vidrio siempre va con su medida */}
        <div className="absolute top-[76px] md:top-[92px] inset-x-5 md:inset-x-8">
          <Cota label="a medida" color="rgba(242,239,230,0.55)" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-5 md:right-8 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
          <span className="w-[10px] h-px" style={{ backgroundColor: 'rgba(242,239,230,0.55)' }} />
          <span className="w-px h-24" style={{ backgroundColor: 'rgba(242,239,230,0.55)' }} />
          <span className={`${mono.className} text-[10px] tracking-[0.2em] [writing-mode:vertical-rl]`} style={{ color: 'rgba(242,239,230,0.55)' }}>
            alto × ancho
          </span>
          <span className="w-px h-24" style={{ backgroundColor: 'rgba(242,239,230,0.55)' }} />
          <span className="w-[10px] h-px" style={{ backgroundColor: 'rgba(242,239,230,0.55)' }} />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-9 md:pb-12">
          <Reveal className="pr-24 md:pr-28">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.bronzeHi }}>
              Cristalería y aluminio · Talca
            </p>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.98] tracking-[0.005em] text-[clamp(2.6rem,9.5vw,5.6rem)] mb-5`}
              style={{ color: '#F2EFE6' }}
            >
              El vidrio exacto,
              <br />
              <span style={{ color: C.bronzeHi }}>en tu medida</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(242,239,230,0.9)' }}>
              Ventanas de aluminio, termopaneles, mamparas y vitrinas
              comerciales en {BIZ.address}, {BIZ.city}.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base font-bold px-5 py-3 whitespace-nowrap transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.bronze, color: '#FFFFFF' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} flex items-center gap-2 text-xs md:text-sm font-medium px-4 py-2.5 transition-transform hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: 'rgba(242,239,230,0.94)', color: C.ink }}
              >
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill={C.bronze} stroke={C.bronze} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                </svg>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
          </Reveal>
        </div>

        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(242,239,230,0.22)', backgroundColor: 'rgba(16,22,26,0.82)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(242,239,230,0.82)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span>Lun–Vie 8:21–19:00</span>
            <span>vidrio y aluminio a medida</span>
            <span className="hidden md:inline" style={{ color: C.bronzeHi }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Riel de trabajos (scroll horizontal) ── */}
      <section id="trabajos" className="scroll-mt-20 pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8 md:mb-10">
          <Reveal>
            <Cota label="trabajos instalados" color={C.muted} />
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.0] mt-6`} style={{ color: C.ink }}>
              Vidrio que ya cierra
              <br />
              <span style={{ color: C.bronze }}>en casas y locales de Talca</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mt-4" style={{ color: C.muted }}>
              Fotos de la ficha pública del taller. Desliza para ver el
              riel completo.
            </p>
          </Reveal>
        </div>
        <div
          className="flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin', scrollbarColor: `${C.bronze} transparent` }}
        >
          {WORKS.map((w) => (
            <figure key={w.src} className="snap-start shrink-0 w-[76vw] md:w-[440px]">
              <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden border" style={{ borderColor: C.ink }}>
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  sizes="(min-width: 768px) 440px, 76vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-3 pt-3">
                <span className={`${display.className} font-bold uppercase text-lg leading-tight`} style={{ color: C.ink }}>
                  {w.tag}
                </span>
                <span className={`${mono.className} text-[11px] text-right shrink-0`} style={{ color: C.muted }}>
                  {w.detail}
                </span>
              </figcaption>
            </figure>
          ))}
          {/* tarjeta de cierre del riel */}
          <div className="snap-start shrink-0 w-[76vw] md:w-[440px] flex flex-col justify-between border p-6" style={{ borderColor: C.ink, backgroundColor: C.deep }}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-6`} style={{ color: C.bronzeHi }}>
              El próximo puede ser el tuyo
            </p>
            <p className={`${display.className} font-bold uppercase text-2xl md:text-3xl leading-[1.05] mb-8`} style={{ color: '#F2EFE6' }}>
              Cotiza tu ventana,
              <br />
              mampara o vitrina
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} self-start uppercase tracking-[0.04em] text-sm font-bold px-6 py-3 whitespace-nowrap transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
              style={{ backgroundColor: C.bronzeHi, color: C.deep }}
            >
              Escribir →
            </a>
          </div>
        </div>
      </section>

      {/* ── Catálogo de vidrios: listado de plano ── */}
      <section id="vidrios" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Cota label="catálogo" color="rgba(242,239,230,0.25)" />
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.0] mt-6 mb-3`} style={{ color: '#F2EFE6' }}>
              Vidrio por tipo,
              <br />
              <span style={{ color: C.bronzeHi }}>corte y medida</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-10" style={{ color: 'rgba(242,239,230,0.8)' }}>
              El catálogo que la empresa publica en Construex, más lo que
              se ve en sus trabajos. Todo se cotiza por WhatsApp.
            </p>
          </Reveal>
          <ul className="border-t" style={{ borderColor: 'rgba(242,239,230,0.18)' }}>
            {VIDRIOS.map((v) => (
              <li key={v.n}>
                <Reveal>
                  <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_auto] gap-x-4 md:gap-x-8 items-baseline py-5 md:py-6 border-b" style={{ borderColor: 'rgba(242,239,230,0.18)' }}>
                    <span className={`${mono.className} text-sm md:text-base font-medium`} style={{ color: C.bronzeHi }}>
                      {v.n}
                    </span>
                    <span>
                      <span className={`${display.className} block font-bold uppercase text-xl md:text-3xl leading-tight`} style={{ color: '#F2EFE6' }}>
                        {v.name}
                      </span>
                      <span className="block text-sm md:text-base leading-relaxed mt-1.5 max-w-lg" style={{ color: 'rgba(242,239,230,0.78)' }}>
                        {v.desc}
                      </span>
                    </span>
                    <span className={`${mono.className} hidden md:block text-xs uppercase tracking-[0.16em] shrink-0`} style={{ color: 'rgba(242,239,230,0.6)' }}>
                      a medida
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-9">
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(242,239,230,0.7)' }}>
                Cotización directa con el taller
              </p>
              <a
                href={WA_LINK_MEDIDA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base font-bold px-5 py-3 whitespace-nowrap transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.bronzeHi, color: C.deep }}
              >
                Cotizar con mi medida
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo cotizar ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.0] mb-10`} style={{ color: C.ink }}>
            Trae la medida
            <br />
            <span style={{ color: C.bronze }}>o te la tomamos</span>
          </h2>
        </Reveal>
        <ol className="grid md:grid-cols-3 gap-8 md:gap-10">
          {PASOS.map((p, i) => (
            <li key={p.n}>
              <Reveal delay={i * 100}>
                <div className="border-t-2 pt-4" style={{ borderColor: C.bronze }}>
                  <span className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.bronze }}>
                    Paso {p.n}
                  </span>
                  <h3 className={`${display.className} font-bold uppercase text-xl md:text-2xl leading-tight mt-2 mb-2`} style={{ color: C.ink }}>
                    {p.t}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {p.d}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Cota label="opiniones" color={C.muted} />
              <h2 className={`${display.className} font-bold uppercase text-3xl md:text-4xl leading-tight mt-6 mb-4`} style={{ color: C.ink }}>
                Lo que dicen
                <br />
                los clientes
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                {BIZ.name} tiene {BIZ.rating} sobre 5 en Google, en{' '}
                {BIZ.reviews} reseñas. Estas son citas textuales de la
                ficha pública.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm font-medium underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.bronze, textDecorationColor: 'rgba(156,116,57,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-4">
              {QUOTES.map((q, i) => (
                <Reveal key={q.author} delay={100 + i * 100}>
                  <figure className="border p-5 md:p-6" style={{ backgroundColor: C.card, borderColor: C.line }}>
                    <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                      “{q.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-medium`} style={{ color: C.bronze }}>
                        {q.author} · Reseña de Google
                      </span>
                      <Check className="w-4 h-4 shrink-0" color={C.steel} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.bronze }}>{BIZ.city}</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className={`${mono.className} flex items-center gap-3 text-sm md:text-base`} style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.bronze} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm font-bold px-6 py-3 whitespace-nowrap transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.bronze, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm font-bold px-6 py-3 border-2 whitespace-nowrap transition-all hover:bg-black/5 active:scale-95 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.ink, backgroundColor: C.card }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/ventana-esquinera.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.16]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Cota label="última medida" color="rgba(242,239,230,0.3)" />
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.0] mt-8 mb-6`} style={{ color: '#F2EFE6' }}>
              ¿Un vidrio roto
              <br />
              <span style={{ color: C.bronzeHi }}>o una ventana nueva?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mb-8 leading-relaxed" style={{ color: 'rgba(242,239,230,0.82)' }}>
              Escríbenos por WhatsApp con la medida y te cotizamos el
              vidrio o la ventana completa.
            </p>
            <a
              href={WA_LINK_MEDIDA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase tracking-[0.04em] inline-block text-sm md:text-base font-bold px-6 py-3.5 whitespace-nowrap transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.bronze, color: '#FFFFFF' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: '#0B0F12', color: '#F2EFE6' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold uppercase text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(242,239,230,0.85)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(242,239,230,0.85)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,239,230,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: 'rgba(242,239,230,0.85)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.bronzeHi }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, horarios, fotos
            y reseñas son datos públicos de la empresa.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.bronzeHi }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
