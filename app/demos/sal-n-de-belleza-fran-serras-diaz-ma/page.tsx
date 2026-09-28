import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waServicio, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' },
  ],
})

/**
 * Identidad tomada de las fotos reales del salón en su ficha de Google:
 * sillas de terciopelo rosa con bases doradas y un muro de plantas.
 * Editorial boutique: marfil cálido, rosa viejo, latón y un verde
 * botánico profundo para el bloque de trabajos.
 */
const C = {
  ivory: '#F7F0E9',
  ivorySoft: '#EFE5DA',
  blush: '#EED8D1',
  blushLight: '#F2D4CD',
  roseDeep: '#8E4F52',
  brass: '#A9825A',
  brassDeep: '#6E4F2C',
  botanic: '#2E4634',
  ink: '#2A241F',
  muted: '#6A5F52',
  line: 'rgba(42,36,31,0.16)',
  lineLight: 'rgba(247,240,233,0.2)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E4F52]'
const BTN = `inline-flex items-center gap-2.5 font-bold rounded-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${FOCUS}`
const LINK = `font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${FOCUS}`

export const metadata: Metadata = demoMetadata({
  slug: 'sal-n-de-belleza-fran-serras-diaz-ma',
  title: 'Salón de Belleza Fran Serras Díaz — Estilismo, uñas y pestañas en Talca',
  description: 'Salón en Talca con 5.0 estrellas en Google: alisados profesionales, estilismo, manicure y pedicure, y lifting de pestañas. Agenda por WhatsApp.',
  image: '/demos/sal-n-de-belleza-fran-serras-diaz-ma/salon-amplio.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

const CARTA = [
  {
    src: `${IMG}/alisado.webp`,
    alt: 'Resultado de alisado del salón: cabello café lacio y brillante frente al muro de plantas',
    tag: 'Cabello',
    name: 'Alisados profesionales',
    desc: 'El servicio con el que la ficha se presenta: lacio pulido, con brillo y movimiento natural.',
  },
  {
    src: `${IMG}/unas-glitter.webp`,
    alt: 'Manicure del salón: uñas en blanco con glitter plateado y anillos dorados',
    tag: 'Manos y pies',
    name: 'Manicure y pedicure',
    desc: 'Del esmaltado limpio al diseño con glitter, flores y pedrería, como en las fotos del salón.',
  },
  {
    src: `${IMG}/alisado-perfil.webp`,
    alt: 'Cliente del salón con cabello rubio lacio en perfil, junto al muro verde',
    tag: 'Estilismo',
    name: 'Estilismo y color',
    desc: 'Corte, color y peinado con foco en el detalle: el salón atiende con hora agendada.',
  },
  {
    src: `${IMG}/pestanas.webp`,
    alt: 'Primer plano de un lifting de pestañas del salón',
    tag: 'Mirada',
    name: 'Lifting de pestañas',
    desc: 'Pestañas curvadas y abiertas sin extensiones, uno de los servicios de su carta en Google.',
  },
]

const TRABAJOS = [
  { src: `${IMG}/unas-mariposa.webp`, alt: 'Uñas rosadas con diseño de mariposas y glitter hechas en el salón', cap: 'Nail art' },
  { src: `${IMG}/unas-rojas.webp`, alt: 'Manicure del salón en tono rojo con flor en acrílico', cap: 'Manicure' },
  { src: `${IMG}/pedicure.webp`, alt: 'Pedicure francesa hecha en el salón', cap: 'Pedicure' },
  { src: `${IMG}/pestanas.webp`, alt: 'Lifting de pestañas del salón, antes y después', cap: 'Lifting' },
  { src: `${IMG}/alisado.webp`, alt: 'Alisado profesional del salón sobre el muro de plantas', cap: 'Alisado' },
  { src: `${IMG}/salon-sillas.webp`, alt: 'Interior del salón: sillas rosadas de terciopelo con base dorada', cap: 'El salón' },
]

function WaArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[17px] h-[17px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12 h14" />
      <path d="M12.5 6 L19 12 L12.5 18" />
    </svg>
  )
}

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.blushLight : C.brassDeep }}
    >
      <span aria-hidden="true" className="h-px w-6" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

export default function SalonFranSerrasPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.ivory, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(42,36,31,0.92)',
          ink: C.ivory,
          line: C.lineLight,
          btnBg: C.blushLight,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero: el salón en una foto ── */}
      <section id="inicio" className="relative min-h-[92svh] md:min-h-svh flex" style={{ backgroundColor: C.ink }}>
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/salon-amplio.webp`}
            alt="Interior del salón Fran Serras: sillas blancas capitoné con base dorada y sillones de terciopelo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(42,36,31,0.25) 0%, rgba(42,36,31,0.15) 40%, rgba(42,36,31,0.82) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative mt-auto w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN} text-xs px-4 py-2.5 mb-6 tap-44`}
              style={{ backgroundColor: 'rgba(247,240,233,0.96)', color: C.ink }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.brassDeep} aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </a>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`}
              style={{ color: C.blushLight }}
            >
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.7rem,9vw,5.2rem)] mb-5`}
              style={{ color: C.ivory }}
            >
              Fran Serras,
              <br />
              <em style={{ color: C.blushLight }}>{BIZ.tagline}</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(247,240,233,0.9)' }}>
              Alisados profesionales, manicure y pedicure, estilismo y
              lifting de pestañas en {BIZ.city}. Se atiende con hora
              agendada por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-sm md:text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.blushLight, color: C.ink }}
              >
                <WaArrow />
                Agendar por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${BTN} text-sm md:text-base px-7 py-3 border-2 hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(247,240,233,0.55)', color: C.ivory }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta del salón ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <div>
                <Eyebrow>La carta del salón</Eyebrow>
                <h2
                  className={`${display.className} font-medium text-4xl md:text-6xl leading-[1.04]`}
                  style={{ color: C.ink }}
                >
                  Cuatro servicios,
                  <br />
                  <em style={{ color: C.roseDeep }}>bien hechos</em>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                La carta tal como aparece en su ficha de Google, con fotos
                reales del trabajo del salón. Los valores se consultan al
                agendar.
              </p>
            </div>
          </Reveal>

          <ol className="border-t" style={{ borderColor: C.line }}>
            {CARTA.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <li className="py-6 md:py-8 border-b" style={{ borderColor: C.line }}>
                  <div className="flex items-center gap-4 md:gap-8">
                    <div
                      className="relative shrink-0 w-[84px] h-[84px] md:w-28 md:h-28 rounded-full overflow-hidden border-2"
                      style={{ borderColor: C.brass }}
                    >
                      <Image src={s.src} alt={s.alt} fill sizes="112px" className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.brassDeep }}>
                        {s.tag}
                      </p>
                      <h3 className={`${display.className} text-2xl md:text-4xl leading-tight`} style={{ color: C.ink }}>
                        {s.name}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed mt-1 max-w-lg" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                    <a
                      href={waServicio(s.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${LINK} text-[11px] md:text-xs uppercase tracking-[0.14em] shrink-0 tap-44`}
                      style={{ color: C.roseDeep, textDecorationColor: 'rgba(142,79,82,0.4)' }}
                    >
                      Agendar →
                    </a>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Trabajos: mosaico verde botánico ── */}
      <section id="trabajos" className="scroll-mt-20" style={{ backgroundColor: C.botanic }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <div>
                <Eyebrow light>El trabajo se ve</Eyebrow>
                <h2
                  className={`${display.className} font-medium text-4xl md:text-6xl leading-[1.04]`}
                  style={{ color: C.ivory }}
                >
                  Directo de la
                  <br />
                  <em style={{ color: C.blushLight }}>ficha del salón</em>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(247,240,233,0.72)' }}>
                Nada de fotos de catálogo: estas son las imágenes que el
                salón publica en su ficha de Google Maps.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.cap + i} delay={i * 60} className={i === 0 || i === 5 ? 'col-span-2 md:col-span-2' : ''}>
                <li>
                  <div className={`relative overflow-hidden rounded-lg ${i === 0 || i === 5 ? 'aspect-[3/2]' : 'aspect-[4/5]'}`}>
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.blushLight }}>
                    {t.cap}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El salón por dentro ── */}
      <section className="grid md:grid-cols-2" style={{ backgroundColor: C.ivorySoft }}>
        <div className="relative min-h-[300px] sm:min-h-[420px] md:min-h-[540px]">
          <Image
            src={`${IMG}/salon-sillas.webp`}
            alt="Sillas de terciopelo rosa con base dorada del salón Fran Serras, con el cuadro Alisados Innova al fondo"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-14 md:py-24">
          <Reveal>
            <Eyebrow>El lugar</Eyebrow>
            <h2
              className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`}
              style={{ color: C.ink }}
            >
              Terciopelo rosa,
              <br />
              <em style={{ color: C.brassDeep }}>detalles en dorado</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              El salón atiende en {BIZ.city} con hora agendada: llegas, te
              sientas y el tiempo es tuyo. La ficha de Google marca abierto
              hasta las 19:00 y un {BIZ.rating} de promedio en {BIZ.reviews}{' '}
              reseñas.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} tap-44`}
                style={{ color: C.roseDeep, textDecorationColor: 'rgba(142,79,82,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto: datos + mapa ── */}
      <section
        id="contacto"
        className="scroll-mt-20 grid md:grid-cols-2 border-t"
        style={{ backgroundColor: C.ivory, borderColor: C.line }}
      >
        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-14 md:py-24">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2
              className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`}
              style={{ color: C.ink }}
            >
              El salón atiende
              <br />
              <em style={{ color: C.roseDeep }}>en {BIZ.city}</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              La ficha no publica calle: la dirección exacta se confirma al
              agendar. El punto del mapa corresponde a la ficha del salón.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.brassDeep} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                {BIZ.horario}
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.brassDeep} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 ${FOCUS} tap-44`} style={{ color: C.ink }}>
                  {BIZ.phoneDisplay}
                </a>
              </li>
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN} text-sm md:text-base px-7 py-3 self-start tap-44`}
              style={{ backgroundColor: C.roseDeep, color: '#fff' }}
            >
              <WaArrow />
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <LazyMap
            title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
            src={MAPS_EMBED}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.roseDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-medium text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.06] mb-5`}
              style={{ color: C.ivory }}
            >
              Tu próxima hora queda
              <br />
              <em style={{ color: C.blushLight }}>a un mensaje</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: C.ivory }}>
              Escribe con el servicio que buscas y el día que te acomoda;
              Fran confirma la hora por WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN} text-sm md:text-base px-8 py-3.5 tap-44`}
              style={{ backgroundColor: C.ivory, color: C.roseDeep }}
            >
              <WaArrow />
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: sitio de ejemplo de Sitiazo ── */}
      <section className="border-y" style={{ backgroundColor: C.botanic, borderColor: 'rgba(42,36,31,0.25)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold" style={{ color: C.ivory }}>
            Sitio de ejemplo de Sitiazo · así se vería tu negocio con página propia
          </p>
          <a
            href="https://sitiazo.cl"
            target="_blank"
            rel="noopener noreferrer"
            className={`${LINK} text-[11px] md:text-xs tap-44`}
            style={{ color: C.blushLight, textDecorationColor: 'rgba(242,212,205,0.4)' }}
          >
            sitiazo.cl →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.ivory }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(247,240,233,0.65)' }}>
              {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(247,240,233,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${FOCUS} tap-44`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,240,233,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(247,240,233,0.7)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Las fotos
            y los datos son los que publica la ficha de Google del salón; la
            ficha no muestra calle ni precios, así que esos datos se piden al
            agendar.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
