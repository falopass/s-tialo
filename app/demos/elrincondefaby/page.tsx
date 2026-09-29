import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_ALMUERZO, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, ENTORNO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900' },
  ],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' }],
  variable: '--f-mono',
})

/**
 * Dirección de arte: «el cartel clavado en el poste». Faby no tiene ficha de
 * Maps ni redes — lo único verificado es el catálogo municipal. La página se
 * arma como el panfleto de papel pegado en el almacén de Empedrado: papel
 * crema, teja y verde oliva, tipografía de letrero (Passion One), bordes
 * discontinuos y sellos. Las dos escenas del emprendimiento son ilustraciones
 * linocut marcadas como BOSQUEJO; las fotos del entorno (reserva y embalse)
 * son reales y están rotuladas como sector, no como el predio.
 */
const C = {
  papel: '#F3E9D5',
  papelAlt: '#FBF3E3',
  papelLine: '#DECFAC',
  teja: '#B4542E',
  tejaDeep: '#8F3A1E',
  oliva: '#4A5430',
  olivaDeep: '#333B1F',
  tinta: '#3A2A1B',
  muted: 'rgba(58,42,27,0.74)',
  mutedOliva: 'rgba(243,233,213,0.76)',
  lineOliva: 'rgba(243,233,213,0.2)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'elrincondefaby',
  title: 'El Rincón de Faby — cabañas, camping, almuerzos y tinajas en Empedrado',
  description:
    'Cabañas, camping, almuerzos caseros y tinajas de agua caliente con Fabiola Gavilán en Empedrado, Región del Maule. Consultas directas por WhatsApp.',
  image: `${IMG}/bosquejo-rincon.webp`,
})

const NAV_LINKS = [
  { label: 'El rincón', href: '#rincon' },
  { label: 'El entorno', href: '#entorno' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** Marca visible de ilustración de muestra (sin foto real disponible). */
function MarcaBosquejo() {
  return (
    <span
      className={`${mono.className} absolute top-2 left-2 z-10 rounded-md border border-dashed px-2 py-0.5 text-[10px] uppercase tracking-widest`}
      style={{ borderColor: C.tejaDeep, color: C.tejaDeep, backgroundColor: 'rgba(251,243,227,0.94)' }}
    >
      bosquejo
    </span>
  )
}

function Icono({ tipo }: { tipo: string }) {
  const s = { stroke: C.tejaDeep, strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (tipo === 'cabana')
    return (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path {...s} d="M5 16 16 6l11 10" />
        <path {...s} d="M8 15v11h16V15" />
        <path {...s} d="M13 26v-6h6v6" />
      </svg>
    )
  if (tipo === 'carpa')
    return (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path {...s} d="M16 7 4 26h24L16 7Z" />
        <path {...s} d="M16 13l-5 13h10l-5-13Z" />
      </svg>
    )
  if (tipo === 'plato')
    return (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <circle {...s} cx="16" cy="16" r="10" />
        <circle {...s} cx="16" cy="16" r="5" />
      </svg>
    )
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
      <path {...s} d="M6 13h20v5a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8v-5Z" />
      <path {...s} d="M11 9c0-2 2-2 2-4M17 9c0-2 2-2 2-4M23 9c0-2 2-2 2-4" />
    </svg>
  )
}

export default function ElRinconDeFaby() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} ${body.className}`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--f-body), system-ui, sans-serif' }}
    >
      <BlitzNav
        name="El Rincón de Faby"
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{ over: 'light', bar: C.papel, ink: C.tinta, line: C.papelLine, btnBg: C.tejaDeep, btnInk: '#FBF3E3' }}
        fontClass={display.className}
        ctaLabel="Consultar"
      />

      {/* ── Hero: el cartel de la casa ── */}
      <section id="inicio" className="pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.tejaDeep }}>
            Empedrado · Región del Maule
          </p>
          <h1
            className="mt-3 uppercase leading-[0.95] text-[46px] md:text-[88px] tracking-tight"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            El Rincón de Faby
          </h1>
          <p className="mt-4 max-w-[48ch] text-[15px] md:text-lg leading-relaxed font-medium" style={{ color: C.muted }}>
            Cabañas, camping, almuerzos caseros y tinajas de agua caliente — el rincón de campo de
            {` ${BIZ.dueno} `}en la comuna verde del secano maulino.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-extrabold tap-44"
              style={{ backgroundColor: C.tejaDeep, color: '#FBF3E3' }}
            >
              Escribir a Faby por WhatsApp
            </a>
            <span className={`${mono.className} text-[13px] font-bold tracking-wide`} style={{ color: C.tinta }}>
              {BIZ.phoneDisplay}
            </span>
          </div>
          <Reveal className="mt-10">
            <figure className="relative">
              <MarcaBosquejo />
              <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-xl border-2 border-dashed" style={{ borderColor: C.teja }}>
                <Image
                  src={`${IMG}/bosquejo-rincon.webp`}
                  alt="Ilustración de muestra: cabaña de madera con tinaja humeante entre cerros del secano"
                  fill
                  priority
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Ilustración de muestra — las fotos reales del rincón van aquí cuando estén
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Lo que hay en el rincón ── */}
      <section id="rincon" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className="uppercase leading-[1.0] text-[30px] md:text-[46px] tracking-tight max-w-[20ch]"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Cuatro cosas buenas en un mismo patio
          </h2>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.nombre} delay={i * 60}>
              <div
                className="h-full rounded-xl border-2 border-dashed p-5"
                style={{ borderColor: C.teja, backgroundColor: C.papelAlt }}
              >
                <Icono tipo={s.icono} />
                <h3
                  className="mt-4 uppercase text-[22px] leading-none"
                  style={{ fontFamily: 'var(--f-display), sans-serif' }}
                >
                  {s.nombre}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                  {s.bajada}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Camping y almuerzo ── */}
      <section style={{ backgroundColor: C.olivaDeep, color: '#F3E9D5' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <figure className="relative">
              <MarcaBosquejo />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-dashed" style={{ borderColor: 'rgba(243,233,213,0.5)' }}>
                <Image
                  src={`${IMG}/bosquejo-camping.webp`}
                  alt="Ilustración de muestra: carpa, fogata y mesa de picnic al atardecer en el campo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.mutedOliva }}>
                Ilustración de muestra del sector de camping
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: '#E8B87A' }}>
              Fogata y olla
            </p>
            <h2
              className="mt-3 uppercase leading-[1.0] text-[30px] md:text-[44px] tracking-tight"
              style={{ fontFamily: 'var(--f-display), sans-serif' }}
            >
              Carpa afuera, almuerzo adentro
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedOliva }}>
              Los que acampan tienen el patio abierto y la fogata de la noche; los que llegan por el día
              tienen los almuerzos caseros de Faby. Y para cerrar la jornada, la tinaja caliente.
            </p>
            <a
              href={WA_LINK_ALMUERZO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-extrabold tap-44"
              style={{ backgroundColor: '#F3E9D5', color: C.olivaDeep }}
            >
              Consultar por almuerzos
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El entorno real ── */}
      <section id="entorno" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.tejaDeep }}>
            El sector
          </p>
          <h2
            className="mt-3 uppercase leading-[1.0] text-[30px] md:text-[46px] tracking-tight max-w-[20ch]"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Empedrado, la comuna verde
          </h2>
          <p className="mt-4 max-w-[56ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
            Estas fotos son del sector — la reserva de ruil y el embalse — no del predio de Faby.
            Sirven para mostrar dónde queda el rincón: en el secano costero del Maule, rodeado de
            bosque nativo y valles de cultivo.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            { src: 'reserva-ruiles', alt: 'Portada de madera de la entrada a la Reserva Nacional Los Ruiles', pie: 'Entrada de la Reserva Los Ruiles' },
            { src: 'sendero-ruiles', alt: 'Sendero con barandas dentro del bosque de la Reserva Los Ruiles', pie: 'Senderos entre ruil nativo' },
            { src: 'mirador-ruiles', alt: 'Mirador de madera sobre el quebrado de la Reserva Los Ruiles', pie: 'Mirador sobre el quebrado' },
            { src: 'embalse', alt: 'Vista del Embalse de Empedrado rodeado de cerros', pie: 'El embalse, a 14 km del pueblo' },
          ].map((f, i) => (
            <Reveal key={f.src} delay={i * 60}>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border" style={{ borderColor: C.papelLine }}>
                  <Image
                    src={`${IMG}/${f.src}.webp`}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.14em] leading-relaxed`} style={{ color: C.muted }}>
                  {f.pie}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {ENTORNO.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-[14px] leading-snug" style={{ color: C.tinta }}>
                <span className="mt-1.5 inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.teja }} aria-hidden="true" />
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── Datos verificados ── */}
      <section className="border-y" style={{ borderColor: C.papelLine, backgroundColor: C.papelAlt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.tejaDeep }}>
              Datos comprobados
            </p>
            <div className="mt-4 grid md:grid-cols-3 gap-6 md:gap-10">
              <div>
                <p className="uppercase text-xl md:text-2xl" style={{ fontFamily: 'var(--f-display), sans-serif' }}>Fabiola Gavilán</p>
                <p className="mt-1 text-sm" style={{ color: C.muted }}>La anfitriona, según el catálogo de emprendedores del municipio.</p>
              </div>
              <div>
                <p className="uppercase text-xl md:text-2xl" style={{ fontFamily: 'var(--f-display), sans-serif' }}>{BIZ.phoneDisplay}</p>
                <p className="mt-1 text-sm" style={{ color: C.muted }}>El celular directo para reservar cabañas, camping, almuerzos o tinajas.</p>
              </div>
              <div>
                <p className="uppercase text-xl md:text-2xl" style={{ fontFamily: 'var(--f-display), sans-serif' }}>Empedrado</p>
                <p className="mt-1 text-sm" style={{ color: C.muted }}>Comuna del secano maulino; la dirección exacta se coordina al escribir.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h2
            className="uppercase leading-[1.0] text-[30px] md:text-[46px] tracking-tight"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Cómo llegar al rincón
          </h2>
          <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
            Empedrado queda a unos 40 minutos de Constitución por el interior. Al llegar, la ruta exacta
            se conversa por WhatsApp con Faby — ella misma responde.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-extrabold tap-44"
              style={{ backgroundColor: C.tejaDeep, color: '#FBF3E3' }}
            >
              {BIZ.phoneDisplay}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold border-2 tap-44"
              style={{ borderColor: C.tejaDeep, color: C.tejaDeep }}
            >
              Ver Empedrado en el mapa
            </a>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: C.papelLine }}>
            <LazyMap
              src={MAPS_EMBED}
              title="Mapa de la comuna de Empedrado, Región del Maule"
              className="w-full aspect-[4/3]"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.olivaDeep, color: '#F3E9D5' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-4">
          <p className="uppercase text-xl md:text-2xl" style={{ fontFamily: 'var(--f-display), sans-serif' }}>{BIZ.name}</p>
          <address className="not-italic mt-2 text-sm leading-relaxed" style={{ color: 'rgba(243,233,213,0.66)' }}>
            {BIZ.dueno} · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,233,213,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-8 text-xs leading-relaxed" style={{ color: 'rgba(243,233,213,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#F3E9D5' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos del catálogo de emprendedores de la Municipalidad de Empedrado.
            Las escenas del rincón son ilustraciones de muestra; las fotos son del sector.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#E8B87A' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}, Empedrado`} />
    </main>
  )
}
