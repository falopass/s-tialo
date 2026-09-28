import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CALEFONT, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  paper: '#F4EFE3',
  paperDeep: '#E8E0CD',
  ink: '#123B52',
  deep: '#0B2B3D',
  teal: '#1CA7A0',
  muted: '#4E6270',
  line: 'rgba(18,59,82,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'gasfiteria-tecnifem',
  title: 'Gasfitería Tecnifem — Mujeres que resuelven en Talca',
  description:
    'Equipo de gasfiteras en Talca centro: calefont, detección de fugas, recambio de redes e instalación de muebles de lavaplatos. 5.0★ en Google. Atención por WhatsApp.',
  image: `${IMG}/calefont-exterior.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  { n: '001', item: 'Mantención y reparación de calefont', nota: 'se te apaga, no calienta o huele a gas' },
  { n: '002', item: 'Detección de fugas de agua y gas', nota: 'sin romper de más: se ubica y se repara' },
  { n: '003', item: 'Recambio de redes de agua', nota: 'cañerías viejas o con baja presión' },
  { n: '004', item: 'Instalación de muebles de lavaplatos', nota: 'llaves, sifones y conexiones nuevas' },
]

const COMPROMISOS = [
  {
    t: 'Te explican qué pasó',
    d: 'Las clientas repiten lo mismo: se toman el tiempo de mostrar la falla y explicar el arreglo antes de cobrar.',
  },
  {
    t: 'Precio razonable',
    d: 'En las reseñas nadie se queja de la cuenta: el trabajo queda bien hecho y el precio se evalúa justo.',
  },
  {
    t: 'Llegan rápido',
    d: 'Atienden Talca y alrededores casi todos los días, incluso sábado y domingo. Varios llegaron "casi de urgencia".',
  },
]

const TRABAJOS = [
  { src: `${IMG}/calefont-exterior.webp`, alt: 'Calefont instalado en muro exterior junto a balón de gas', cap: 'Calefont y gas, en regla' },
  { src: `${IMG}/calefont-instalado.webp`, alt: 'Calefont Junkers instalado en la pared de un baño', cap: 'Calefont instalado' },
  { src: `${IMG}/lavaplatos-trabajo.webp`, alt: 'Mano marcando la llave de un lavaplatos en pleno trabajo', cap: 'Lavaplatos en terreno' },
  { src: `${IMG}/tuberias-bajo-lavado.webp`, alt: 'Tuberías y sifón bajo un lavamanos con productos de limpieza al lado', cap: 'Redes bajo el lavamanos' },
  { src: `${IMG}/calefont-ductos.webp`, alt: 'Detalle de ductos y conexiones sobre un calefont', cap: 'Ductos y conexiones' },
  { src: `${IMG}/cocina-mueble.webp`, alt: 'Mueble de cocina recién intervenido bajo un lavaplatos', cap: 'Mueble de lavaplatos' },
]

const REVIEWS = [
  {
    name: 'Asaaret Ancalime',
    text: 'Excelente servicio. Incluso se toman el tiempo de explicar lo que pasó. Un 10/10 en servicio y en educar al cliente. Por eso siempre las llamo; me han ayudado con tantas cosas.',
  },
  {
    name: 'Josefa Faundez',
    text: 'Excelente servicio, confiable y rápido. Dejé mi casa en buenas manos. Trabajan con compromiso y profesionalismo.',
  },
  {
    name: 'Geraldine Avila',
    text: '100% recomendadas. Hicieron un trabajo excelente y el precio fue razonable. Dejaron el calefont funcionando perfecto.',
  },
]

export default function GasfiteriaTecnifemPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              width={34}
              height={34}
              className="rounded-full border"
              style={{ borderColor: C.line }}
            />
            <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
              TECNIFEM
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir hora"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.paper }}
      />

      {/* ── HERO: orden de trabajo ─────────────────────── */}
      <section id="inicio" className="pt-[92px] md:pt-[120px] pb-10 md:pb-14">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div
              className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b-2 border-dashed"
              style={{ borderColor: C.line, fontFamily: 'var(--font-mono)' }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase" style={{ color: C.muted }}>
                Orden de trabajo · Talca centro
              </p>
              <p className="inline-flex items-center gap-2 text-[12px]" style={{ color: C.ink }}>
                <Stars value={5} color={C.teal} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.ratingCount} en Google
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <h1
                  className="text-[40px] md:text-[68px] leading-[0.98] uppercase"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}
                >
                  Mujeres que{' '}
                  <span style={{ color: C.teal }}>resuelven</span>{' '}
                  tu gasfitería en Talca
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Calefont que se apaga, fugas escondidas, redes viejas y lavaplatos por instalar:
                  el equipo de {BIZ.name} atiende en {BIZ.city} y alrededores, de lunes a domingo.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full"
                    style={{ backgroundColor: C.ink, color: C.paper }}
                  >
                    Agendar visita por WhatsApp
                  </a>
                  <a
                    href={WA_LINK_CALEFONT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Mi calefont no prende
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="md:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[22px] -rotate-[1.5deg]"
                  style={{ backgroundColor: C.paperDeep }}
                />
                <div
                  className="relative overflow-hidden rounded-[18px] border"
                  style={{ borderColor: C.line, aspectRatio: '4/5' }}
                >
                  <Image
                    src={`${IMG}/calefont-exterior.webp`}
                    alt="Calefont instalado en muro exterior de una casa en Talca, junto al balón de gas"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div
                  className="absolute -bottom-4 left-5 px-4 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase"
                  style={{ backgroundColor: C.teal, color: '#fff', fontFamily: 'var(--font-mono)' }}
                >
                  Gasfiteras a domicilio
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CINTA DE MARCA ─────────────────────────────── */}
      <section aria-hidden="true" className="py-3 overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="flex whitespace-nowrap">
          {[0, 1].map((k) => (
            <p
              key={k}
              className="shrink-0 px-4 text-[13px] tracking-[0.34em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,239,227,0.85)' }}
            >
              Mujeres que resuelven · Tecnifem · Talca y alrededores · Mujeres que resuelven · Tecnifem · Talca y alrededores ·&nbsp;
            </p>
          ))}
        </div>
      </section>

      {/* ── SERVICIOS: items de la orden ────────────────── */}
      <section id="servicios" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
              Lo que más les piden
            </p>
            <h2
              className="mt-3 text-[32px] md:text-[48px] leading-[1.0] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Trabajos que salen <span style={{ color: C.teal }}>a terreno</span>
            </h2>
          </Reveal>
          <div className="mt-8 border-t" style={{ borderColor: C.line }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 50}>
                <div
                  className="py-5 md:py-6 border-b border-dashed flex items-baseline gap-4 md:gap-6"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className="text-[13px] shrink-0 w-10"
                    style={{ fontFamily: 'var(--font-mono)', color: C.teal }}
                  >
                    {s.n}
                  </span>
                  <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <p className="text-[19px] md:text-[24px] font-semibold leading-tight">
                      {s.item}
                    </p>
                    <p className="text-[13px] shrink-0" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                      {s.nota}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRABAJOS REALES ────────────────────────────── */}
      <section id="trabajos" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2
              className="text-[32px] md:text-[48px] leading-[1.0] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Fotos del <span style={{ color: C.teal }}>propio trabajo</span>
            </h2>
            <p className="mt-3 max-w-md text-[14px]" style={{ color: C.muted }}>
              Publicadas por ellas mismas en su ficha de Google y en @tecnifem.cl.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {TRABAJOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 50}>
                <figure>
                  <div
                    className="relative overflow-hidden rounded-[16px] border"
                    style={{ borderColor: C.line, aspectRatio: '4/5' }}
                  >
                    <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                  </div>
                  <figcaption
                    className="mt-2 text-[11px] tracking-[0.14em] uppercase"
                    style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPROMISOS ────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
              Lo que repiten sus clientas
            </p>
            <h2
              className="mt-3 text-[32px] md:text-[48px] leading-[1.0] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              18 reseñas, <span style={{ color: C.teal }}>todas de 5 estrellas</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {COMPROMISOS.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <div className="h-full rounded-[18px] p-6 border" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                  <p className="text-[12px] tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.teal }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-[20px] font-bold" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                    {c.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                    {c.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ────────────────────────────────────── */}
      <section id="resenas" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2
              className="text-[32px] md:text-[48px] leading-[1.0] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Las que vuelven <span style={{ color: C.teal }}>a llamar</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <figure
                  className="h-full rounded-[18px] p-6 border flex flex-col"
                  style={{ borderColor: C.line, backgroundColor: i === 1 ? C.paperDeep : 'transparent' }}
                >
                  <Stars value={5} color={C.teal} className="w-3.5 h-3.5" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1">
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className="mt-4 text-[11px] tracking-[0.16em] uppercase"
                    style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
                  >
                    {r.name} · Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-5 text-[11px] tracking-[0.12em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
              Opiniones reales de su ficha de Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACTO ───────────────────────────────────── */}
      <section id="contacto" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-[20px] border h-[280px] md:h-auto md:min-h-[340px]"
                style={{ borderColor: C.line }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-[20px] p-6 md:p-8 h-full flex flex-col" style={{ backgroundColor: C.deep, color: C.paper }}>
                <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,239,227,0.7)' }}>
                  Agenda tu visita
                </p>
                <h2 className="mt-3 text-[28px] md:text-[38px] leading-[1.0] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                  3 Norte 10, Talca centro
                </h2>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,239,227,0.6)' }}>Horario</dt>
                    <dd>{BIZ.hours}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,239,227,0.6)' }}>Zona</dt>
                    <dd>Talca y alrededores</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,239,227,0.6)' }}>WhatsApp</dt>
                    <dd>{BIZ.phoneDisplay}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3 pt-6 mt-auto">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full"
                    style={{ backgroundColor: C.teal, color: '#fff' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                    style={{ borderColor: 'rgba(244,239,227,0.5)', color: C.paper }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-[15px] font-bold uppercase" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
                {BIZ.name}
              </p>
              <p className="mt-0.5 text-[12px]" style={{ color: 'rgba(244,239,227,0.55)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <p className="text-[12px] max-w-sm" style={{ color: 'rgba(244,239,227,0.4)' }}>
            Sitio de ejemplo preparado por Sitiazo. Fotos y opiniones reales de su ficha de Google Maps e Instagram.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
