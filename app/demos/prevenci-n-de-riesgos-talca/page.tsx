import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waDocumento, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

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
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

/**
 * Identidad tomada de los activos reales de la asesoría: su logo "VTI"
 * y sus publicaciones usan amarillo de señalética + negro. El demo se
 * construye como una carpeta de arranque real: franjas de seguridad,
 * documentos numerados con casilla y tipografía condensada de letrero.
 */
const C = {
  asphalt: '#1B1B1E',
  asphaltDeep: '#121214',
  paper: '#F6F3EA',
  paperSoft: '#ECE7D8',
  yellow: '#F5C400',
  yellowDeep: '#6B5600',
  ink: '#1B1B1E',
  muted: '#57544A',
  line: 'rgba(27,27,30,0.18)',
  lineLight: 'rgba(246,243,234,0.2)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5C400]'
const BTN = `inline-flex items-center gap-2.5 font-bold transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${FOCUS}`
const LINK = `font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${FOCUS}`
const STRIPE =
  'repeating-linear-gradient(-45deg, #F5C400 0 14px, #1B1B1E 14px 28px)'

export const metadata: Metadata = demoMetadata({
  slug: 'prevenci-n-de-riesgos-talca',
  title: 'Prevención de Riesgos Talca — Carpeta de arranque y asesorías para pymes',
  description: 'Carpeta de arranque, reglamento interno, MIPER, protocolos MINSAL y más, con atención a distancia y firma digital. Cotiza por WhatsApp.',
  image: '/demos/prevenci-n-de-riesgos-talca/casco.webp',
})

const NAV_LINKS = [
  { label: 'La carpeta', href: '#carpeta' },
  { label: 'A distancia', href: '#distancia' },
  { label: 'Contacto', href: '#contacto' },
]

const CARPETA = [
  {
    code: 'DOC-01',
    name: 'Carpeta de arranque',
    desc: 'Lo que te piden para ingresar a un proyecto: la carpeta completa, lista para presentar.',
  },
  {
    code: 'DOC-02',
    name: 'Reglamento interno',
    desc: 'Reglamento interno de orden, higiene y seguridad, redactado para tu empresa.',
  },
  {
    code: 'DOC-03',
    name: 'Procedimiento de trabajo seguro',
    desc: 'Los procedimientos de cada puesto, paso a paso y en papel.',
  },
  {
    code: 'DOC-04',
    name: 'Plan de emergencia',
    desc: 'Qué hace cada persona si algo sale mal, documentado y señalizado.',
  },
  {
    code: 'DOC-05',
    name: 'Matriz de riesgos · MIPER',
    desc: 'Identificación de peligros y evaluación de riesgos de tu operación.',
  },
  {
    code: 'DOC-06',
    name: 'Protocolos MINSAL',
    desc: 'Los protocolos sanitarios que aplica el Ministerio de Salud a tu rubro.',
  },
  {
    code: 'DOC-07',
    name: 'Charlas y asesorías',
    desc: 'Charlas para tus equipos y asesoría continua en normativa legal para pymes.',
  },
]

const PASOS = [
  {
    n: '01',
    name: 'Escribes por WhatsApp',
    desc: 'Cuentas qué te piden (proyecto, faena o fiscalización) y se cotiza el documento o la carpeta completa.',
  },
  {
    n: '02',
    name: 'Se levanta la información',
    desc: 'Sin que te traslades: los datos de tu empresa viajan por correo o WhatsApp.',
  },
  {
    n: '03',
    name: 'Firmas a distancia',
    desc: 'Trabajo con firma digital para empresas a distancia: recibes los documentos listos para presentar.',
  },
]

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
      style={{ color: light ? C.yellow : C.yellowDeep }}
    >
      <span aria-hidden="true" className="inline-block w-6 h-[10px]" style={{ background: STRIPE }} />
      {children}
    </p>
  )
}

export default function PrevencionRiesgosTalcaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className="uppercase tracking-wide">
            {BIZ.marca} <span style={{ color: C.yellow }}>·</span> Prevención
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(18,18,20,0.94)',
          ink: C.paper,
          line: C.lineLight,
          btnBg: C.yellow,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero: señalética ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.asphalt }}>
        <div className="h-3" style={{ background: STRIPE }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow light>
                {BIZ.rubro} · {BIZ.city} · a distancia en todo Chile
              </Eyebrow>
              <h1
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[0.01em] text-[clamp(2.6rem,9vw,5.4rem)] mb-6`}
                style={{ color: C.paper }}
              >
                ¿Entras a un proyecto
                <br />
                <span style={{ color: C.yellow }}>sin carpeta de arranque?</span>
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed max-w-md mb-8"
                style={{ color: 'rgba(246,243,234,0.78)' }}
              >
                {BIZ.name} confecciona la carpeta completa, los reglamentos y
                los protocolos que tu empresa necesita, con firma digital y
                atención a distancia.
              </p>
              <div className="flex flex-wrap gap-3 mb-9">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} text-sm md:text-base px-7 py-3 tap-44`}
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  Cotizar por WhatsApp
                  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 12 h14" />
                    <path d="M12.5 6 L19 12 L12.5 18" />
                  </svg>
                </a>
                <a
                  href="#carpeta"
                  className={`${BTN} text-sm md:text-base px-7 py-3 border-2 hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(246,243,234,0.5)', color: C.paper }}
                >
                  Ver la carpeta
                </a>
              </div>
              <div className={`${mono.className} flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(246,243,234,0.6)' }}>
                <span>{BIZ.rating} en Google</span>
                <span>{BIZ.phoneDisplay}</span>
                <span>Firma digital</span>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <figure className="relative">
                <div
                  className="relative overflow-hidden aspect-[4/5] max-h-[520px] w-full"
                  style={{ border: '3px solid #F5C400' }}
                >
                  <Image
                    src={`${IMG}/casco.webp`}
                    alt="Publicación de la asesoría con casco de seguridad amarillo, su identidad visual"
                    fill
                    priority
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -left-4 md:-left-6 px-4 py-3 shadow-xl"
                  style={{ backgroundColor: C.yellow }}
                >
                  <Image
                    src={`${IMG}/logo.webp`}
                    alt={`Logo ${BIZ.marca} · Prevención de Riesgos`}
                    width={64}
                    height={64}
                    className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-sm"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
        <div className="h-3" style={{ background: STRIPE }} aria-hidden="true" />
      </section>

      {/* ── La carpeta: checklist de documentos ── */}
      <section id="carpeta" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
              <div>
                <Eyebrow>Lo que confecciona</Eyebrow>
                <h2
                  className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98]`}
                  style={{ color: C.ink }}
                >
                  La carpeta
                  <br />
                  <span style={{ color: C.yellowDeep }}>de arranque</span>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Cada documento sale de las publicaciones de la propia
                asesoría. Se cotiza por pieza o la carpeta completa.
              </p>
            </div>
          </Reveal>

          {/* Hoja de la carpeta */}
          <Reveal>
            <div
              className="border-2 shadow-[6px_6px_0_#1B1B1E]"
              style={{ backgroundColor: '#FCFAF4', borderColor: C.ink }}
            >
              <div
                className="px-5 md:px-8 py-4 border-b-2 flex flex-wrap items-center justify-between gap-2"
                style={{ borderColor: C.ink, backgroundColor: C.yellow }}
              >
                <p className={`${display.className} font-bold uppercase tracking-wide text-lg md:text-xl`} style={{ color: C.ink }}>
                  Índice de documentos
                </p>
                <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.ink }}>
                  Formulario · {BIZ.city}
                </p>
              </div>
              <ol>
                {CARPETA.map((d, i) => (
                  <li
                    key={d.code}
                    className={`flex items-start gap-4 px-5 md:px-8 py-4 md:py-5 ${
                      i % 2 === 1 ? '' : ''
                    } border-b last:border-b-0`}
                    style={{ borderColor: C.line, backgroundColor: i % 2 === 1 ? 'rgba(245,196,0,0.07)' : 'transparent' }}
                  >
                    <span className="mt-0.5" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke={C.ink}
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <rect x="2.5" y="2.5" width="19" height="19" rx="2" />
                        <path d="M7 12.5 l3.4 3.4 L17 8.5" stroke={C.yellowDeep} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.yellowDeep }}>
                          {d.code}
                        </span>
                        <h3 className={`${display.className} font-bold uppercase tracking-wide text-lg md:text-2xl leading-tight`} style={{ color: C.ink }}>
                          {d.name}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm leading-relaxed mt-1 max-w-xl" style={{ color: C.muted }}>
                        {d.desc}
                      </p>
                    </div>
                    <a
                      href={waDocumento(d.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${LINK} text-[11px] uppercase tracking-[0.14em] shrink-0 mt-1 tap-44`}
                      style={{ color: C.ink, textDecorationColor: 'rgba(27,27,30,0.4)' }}
                    >
                      Cotizar
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.18em] flex flex-wrap gap-x-6 gap-y-1`} style={{ color: C.muted }}>
              <span>Asesoría en normativa legal para pequeñas y medianas empresas</span>
              <span style={{ color: C.yellowDeep }}>“Cotiza con nosotros”</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── A distancia: franja amarilla ── */}
      <section id="distancia" className="scroll-mt-20" style={{ backgroundColor: C.yellow }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`} style={{ color: C.ink }}>
                <span aria-hidden="true" className="inline-block w-6 h-[10px]" style={{ background: 'repeating-linear-gradient(-45deg, #1B1B1E 0 6px, transparent 6px 12px)' }} />
                Sin traslado · sin sala de espera
              </p>
              <h2
                className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`}
                style={{ color: C.ink }}
              >
                Firma digital
                <br />
                para empresas a distancia
              </h2>
              <ol className="space-y-0 border-t-2" style={{ borderColor: C.ink }}>
                {PASOS.map((p) => (
                  <li key={p.n} className="flex gap-4 py-4 border-b" style={{ borderColor: 'rgba(27,27,30,0.35)' }}>
                    <span className={`${mono.className} text-sm font-bold shrink-0 w-10 pt-0.5`} style={{ color: C.ink }}>
                      {p.n}
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold uppercase text-lg md:text-xl leading-tight`} style={{ color: C.ink }}>
                        {p.name}
                      </h3>
                      <p className="text-sm leading-relaxed mt-1" style={{ color: 'rgba(27,27,30,0.78)' }}>
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={140}>
              <figure>
                <div className="relative overflow-hidden aspect-square max-h-[440px] w-full" style={{ border: '3px solid #1B1B1E' }}>
                  <Image
                    src={`${IMG}/senal-cono.webp`}
                    alt="Publicación de la asesoría con ícono de cono de seguridad sobre fondo amarillo"
                    fill
                    sizes="(min-width: 768px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(27,27,30,0.75)' }}>
                  La estética que la asesoría ya usa en sus publicaciones
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <div className="h-3" style={{ background: STRIPE }} aria-hidden="true" />
      </section>

      {/* ── Contacto: datos + mapa ── */}
      <section
        id="contacto"
        className="scroll-mt-20 grid md:grid-cols-2"
        style={{ backgroundColor: C.asphaltDeep }}
      >
        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-14 md:py-24">
          <Reveal>
            <Eyebrow light>Contacto</Eyebrow>
            <h2
              className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`}
              style={{ color: C.paper }}
            >
              {BIZ.city} y a distancia,
              <br />
              <span style={{ color: C.yellow }}>donde esté tu empresa</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(246,243,234,0.72)' }}>
              La asesoría trabaja desde {BIZ.city} para pymes de todo Chile:
              la ficha no publica dirección porque la atención es remota.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(246,243,234,0.8)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.yellow} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 ${FOCUS} tap-44`} style={{ color: C.paper }}>
                  WhatsApp {BIZ.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(246,243,234,0.8)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.yellow} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {BIZ.email}
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(246,243,234,0.8)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.yellow} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                {BIZ.horario}
              </li>
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} tap-44`}
                style={{ color: C.yellow, textDecorationColor: 'rgba(245,196,0,0.45)' }}
              >
                {BIZ.instagramUser}
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} tap-44`}
                style={{ color: C.yellow, textDecorationColor: 'rgba(245,196,0,0.45)' }}
              >
                Facebook
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} tap-44`}
                style={{ color: C.yellow, textDecorationColor: 'rgba(245,196,0,0.45)' }}
              >
                Ficha en Google →
              </a>
            </div>
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
      <section style={{ backgroundColor: C.asphalt }}>
        <div className="h-2.5" style={{ background: STRIPE }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <div className="mx-auto max-w-2xl border-2 px-5 py-10 md:py-12" style={{ borderColor: C.yellow }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.yellow }}>
                Último paso
              </p>
              <h2
                className={`${display.className} font-extrabold uppercase text-[clamp(1.9rem,6vw,3.4rem)] leading-[0.98] mb-5`}
                style={{ color: C.paper }}
              >
                La carpeta se arma
                <br />
                <span style={{ color: C.yellow }}>con un mensaje</span>
              </h2>
              <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(246,243,234,0.75)' }}>
                Di qué te piden — proyecto, faena o fiscalización — y recibe
                la cotización de la carpeta o del documento que te falta.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-sm md:text-base px-8 py-3.5 tap-44`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: sitio de ejemplo de Sitiazo ── */}
      <section className="border-y-2" style={{ backgroundColor: C.yellow, borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold" style={{ color: C.ink }}>
            Sitio de ejemplo de Sitiazo · así se vería tu negocio con página propia
          </p>
          <a
            href="https://sitiazo.cl"
            target="_blank"
            rel="noopener noreferrer"
            className={`${LINK} text-[11px] md:text-xs tap-44`}
            style={{ color: C.ink, textDecorationColor: 'rgba(27,27,30,0.4)' }}
          >
            sitiazo.cl →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.asphaltDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} font-bold uppercase tracking-wide text-xl md:text-2xl mb-1 flex items-center gap-3`}>
              <Image src={`${IMG}/logo.webp`} alt="" width={30} height={30} className="rounded-sm" aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(246,243,234,0.65)' }}>
              {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay} · {BIZ.email}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,243,234,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${FOCUS} tap-44`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,243,234,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(246,243,234,0.7)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Los datos,
            el logo y las imágenes salen de sus perfiles públicos en Google,
            Instagram y Facebook; no publica precios, así que todo se cotiza
            por WhatsApp.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
