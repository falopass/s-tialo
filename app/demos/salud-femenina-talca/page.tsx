import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waEspecialidad, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
  ],
})

/**
 * Identidad tomada de los activos reales del centro: la placa de la
 * oficina 612 y su recepción (cobre + vino sobre negro y madera) son el
 * motivo — un "directorio médico" del piso 6. Base crema cálida, tinta
 * pizarra y acento vino; el cobre queda para decoración y titulares.
 */
const C = {
  ink: '#1D2530',
  inkDeep: '#151B24',
  paper: '#F5EFE6',
  creamSoft: '#EAE1D1',
  copper: '#C07A3A',
  copperDeep: '#8A5322',
  copperSoft: '#E8B883',
  wine: '#A63D63',
  wineDeep: '#7E2C4A',
  muted: '#5B5344',
  line: 'rgba(29,37,48,0.16)',
  lineLight: 'rgba(245,239,230,0.2)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A63D63]'
const BTN = `inline-flex items-center gap-2.5 font-bold rounded-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${FOCUS}`
const LINK = `font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${FOCUS}`
const HALF = '(min-width: 768px) 50vw, 100vw'

export const metadata: Metadata = demoMetadata({
  slug: 'salud-femenina-talca',
  title: 'Salud Femenina Talca — Centro médico de la mujer en Las Rastras',
  description: 'Ginecología, fertilidad, dermatología, matronas y más en 30 Oriente 1546, of. 612, Talca. Agenda por WhatsApp o AgendaPro.',
  image: '/demos/salud-femenina-talca/recepcion.webp',
})

const NAV_LINKS = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'El centro', href: '#centro' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const ESPECIALIDADES = [
  { n: '01', name: 'Ginecología y obstetricia', desc: 'Control, diagnóstico y acompañamiento en cada etapa.' },
  { n: '02', name: 'Fertilidad', desc: 'Evaluación y orientación para quienes buscan embarazo.' },
  { n: '03', name: 'Matronas', desc: 'Control prenatal, piso pélvico y salud reproductiva.' },
  { n: '04', name: 'Dermatología', desc: 'Piel, desde lo clínico a lo estético.' },
  { n: '05', name: 'Diagnóstico por imágenes', desc: 'Ecografías con médico radiólogo en el mismo centro.' },
  { n: '06', name: 'Medicina general', desc: 'Consulta médica para el día a día.' },
  { n: '07', name: 'Nutrición', desc: 'Planes alimentarios con nutricionista.' },
  { n: '08', name: 'Psicología', desc: 'Apoyo en salud mental y bienestar.' },
  { n: '09', name: 'Medicina interna y obesidad', desc: 'Manejo médico del peso y enfermedades crónicas.' },
]

const PUBLICACIONES = [
  {
    src: `${IMG}/especialidades.webp`,
    alt: 'Publicación de Salud Femenina Talca con su lista de especialidades: ginecología y obstetricia, fertilidad y dermatología',
    tag: 'Especialidades',
    title: 'La lista oficial del piso 6',
  },
  {
    src: `${IMG}/ginecologia-infantojuvenil.webp`,
    alt: 'Publicación de Salud Femenina Talca sobre ginecología infanto-juvenil, con foto de la especialista',
    tag: 'Ginecología',
    title: 'También atención infanto-juvenil',
  },
  {
    src: `${IMG}/piso-pelvico.webp`,
    alt: 'Publicación de Salud Femenina Talca sobre piso pélvico, constipación y vejiga hiperactiva',
    tag: 'Piso pélvico',
    title: 'Uroginecología con nombre propio',
  },
  {
    src: `${IMG}/equipo.webp`,
    alt: 'Publicación de Salud Femenina Talca presentando a la Dra. Francisca Pinchet Valdés, médico radiólogo',
    tag: 'Equipo',
    title: 'Radiología dentro del centro',
  },
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
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color: light ? C.copperSoft : C.copperDeep }}
    >
      <span aria-hidden="true" className="h-px w-6" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

export default function SaludFemeninaTalcaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,239,230,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.wine,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero: placa del piso 6 ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
            <Reveal>
              <Eyebrow>Oficina 612 · Piso 6 · Las Rastras</Eyebrow>
              <h1
                className={`${display.className} font-medium leading-[1.05] tracking-[-0.01em] text-[clamp(2.5rem,7vw,4.4rem)] mb-6`}
                style={{ color: C.ink }}
              >
                {BIZ.name},
                <br />
                <em style={{ color: C.wine }}>{BIZ.tagline}</em>
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed max-w-md mb-9"
                style={{ color: C.muted }}
              >
                Nueve especialidades bajo un mismo techo en {BIZ.address},{' '}
                {BIZ.edificio.toLowerCase()}, {BIZ.city}. Agenda por WhatsApp
                o directo en AgendaPro.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} text-sm md:text-base px-7 py-3 tap-44`}
                  style={{ backgroundColor: C.wine, color: '#fff' }}
                >
                  <WaArrow />
                  Agendar por WhatsApp
                </a>
                <a
                  href={BIZ.agenda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} text-sm md:text-base px-7 py-3 border-2 hover:bg-[#1D2530]/5 tap-44`}
                  style={{ borderColor: 'rgba(29,37,48,0.4)', color: C.ink }}
                >
                  Agenda online
                </a>
              </div>
              <dl
                className={`${mono.className} pt-6 border-t grid grid-cols-2 gap-x-6 gap-y-4 text-[11px] uppercase tracking-[0.16em]`}
                style={{ borderColor: C.line, color: C.muted }}
              >
                <div>
                  <dt className="mb-1" style={{ color: C.wineDeep }}>Dirección</dt>
                  <dd>{BIZ.address} · {BIZ.city}</dd>
                </div>
                <div>
                  <dt className="mb-1" style={{ color: C.wineDeep }}>WhatsApp</dt>
                  <dd>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`hover:text-black transition-colors ${FOCUS} tap-44`}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="mb-1" style={{ color: C.wineDeep }}>Horario</dt>
                  <dd>{BIZ.horario}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={140}>
              <figure className="relative">
                <div
                  className="absolute -top-4 -left-4 md:-top-5 md:-left-5 z-10 px-4 py-2.5 rounded-sm shadow-lg"
                  style={{ backgroundColor: C.ink, color: C.paper }}
                >
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.copperSoft }}>
                    Edificio Centro Las Rastras II
                  </p>
                  <p className={`${display.className} text-2xl md:text-3xl leading-none`}>
                    Of. <em style={{ color: C.copperSoft }}>612</em>
                  </p>
                </div>
                <div
                  className="relative overflow-hidden rounded-md border-4 aspect-[4/3]"
                  style={{ borderColor: C.ink }}
                >
                  <Image
                    src={`${IMG}/recepcion.webp`}
                    alt="Recepción de Salud Femenina Talca: mesón negro con el logo en cobre, banqueta de cuero y madera geométrica"
                    fill
                    priority
                    sizes={HALF}
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  La recepción del piso 6, tal cual es hoy
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Directorio de especialidades (motivo: la placa de la puerta) ── */}
      <section id="especialidades" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-start">
            <div>
              <Reveal>
                <Eyebrow light>El directorio de la oficina</Eyebrow>
                <h2
                  className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.06] mb-6`}
                  style={{ color: C.paper }}
                >
                  Nueve especialidades,
                  <br />
                  <em style={{ color: C.copperSoft }}>un solo piso</em>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(245,239,230,0.75)' }}>
                  La placa de la puerta 612 lo dice literal: ginecología,
                  fertilidad, dermatología, imágenes, nutrición, psicología y
                  matronas, todos en el mismo centro. Cada línea se agenda por
                  WhatsApp.
                </p>
              </Reveal>

              <ol className="border-t" style={{ borderColor: C.lineLight }}>
                {ESPECIALIDADES.map((e, i) => (
                  <Reveal key={e.n} delay={i * 40}>
                    <li
                      className="flex items-baseline gap-4 py-4 border-b"
                      style={{ borderColor: C.lineLight }}
                    >
                      <span
                        className={`${mono.className} text-xs md:text-sm shrink-0 w-8`}
                        style={{ color: C.copperSoft }}
                      >
                        {e.n}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`${display.className} text-xl md:text-2xl leading-tight`}
                          style={{ color: C.paper }}
                        >
                          {e.name}
                        </h3>
                        <p className="text-xs md:text-sm mt-1" style={{ color: 'rgba(245,239,230,0.62)' }}>
                          {e.desc}
                        </p>
                      </div>
                      <a
                        href={waEspecialidad(e.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${LINK} text-[11px] uppercase tracking-[0.14em] shrink-0 tap-44`}
                        style={{ color: C.copperSoft, textDecorationColor: 'rgba(232,184,131,0.45)' }}
                      >
                        Agendar
                      </a>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal delay={120}>
              <figure className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-md border-4 aspect-[3/4] max-h-[560px] w-full" style={{ borderColor: 'rgba(245,239,230,0.25)' }}>
                  <Image
                    src={`${IMG}/puerta-612.webp`}
                    alt="Puerta de la oficina 612 con la placa metálica de Salud Femenina y el directorio de profesionales"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(245,239,230,0.6)' }}>
                  La placa real de la oficina, con el directorio completo
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Publicaciones reales del centro ── */}
      <section id="centro" className="scroll-mt-20" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <div>
                <Eyebrow>En sus propias palabras</Eyebrow>
                <h2
                  className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.06]`}
                  style={{ color: C.ink }}
                >
                  Lo que publica
                  <br />
                  <em style={{ color: C.wineDeep }}>{BIZ.instagramUser}</em>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Estas son publicaciones reales del Instagram del centro, con
                más de 9.700 seguidores: sus especialidades, sus profesionales
                y sus horarios.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PUBLICACIONES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li>
                  <div
                    className="relative overflow-hidden rounded-md aspect-square border"
                    style={{ borderColor: C.line, backgroundColor: C.paper }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.copperDeep }}>
                    {p.tag}
                  </p>
                  <p className={`${display.className} text-lg md:text-xl leading-snug`} style={{ color: C.ink }}>
                    {p.title}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Cómo agendar ── */}
      <section id="agendar" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <Eyebrow>Cómo agendar</Eyebrow>
              <h2
                className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.06] mb-6`}
                style={{ color: C.ink }}
              >
                Tu hora, en dos
                <br />
                <em style={{ color: C.wineDeep }}>mensajes o un clic</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                El centro agenda por WhatsApp y también tiene agenda online en
                AgendaPro, la misma plataforma que usa para confirmar horas.
              </p>
              <ol className="space-y-0 border-t" style={{ borderColor: C.line }}>
                {[
                  { n: '1', name: 'Elige la especialidad', desc: 'Del directorio de arriba o cuéntanos qué necesitas.' },
                  { n: '2', name: 'Escribe o agenda online', desc: 'WhatsApp al +56 9 8250 6755 o saludfemenina.agendapro.com.' },
                  { n: '3', name: 'Sube al piso 6', desc: 'Edificio Centro Las Rastras II, oficina 612. Hay ascensor.' },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4 py-5 border-b" style={{ borderColor: C.line }}>
                    <span
                      className={`${display.className} text-3xl leading-none shrink-0 w-10`}
                      style={{ color: C.copper }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h3 className={`${display.className} text-xl mb-1`} style={{ color: C.ink }}>
                        {s.name}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} text-sm px-6 py-3 tap-44`}
                  style={{ backgroundColor: C.wine, color: '#fff' }}
                >
                  <WaArrow />
                  WhatsApp
                </a>
                <a
                  href={BIZ.agenda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} text-sm px-6 py-3 border-2 hover:bg-[#1D2530]/5 tap-44`}
                  style={{ borderColor: 'rgba(29,37,48,0.4)', color: C.ink }}
                >
                  Agendar en AgendaPro
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative overflow-hidden rounded-md aspect-[9/16] max-h-[560px] w-full max-w-sm mx-auto border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/horarios-ig.webp`}
                  alt="Publicación de Salud Femenina Talca con el edificio Centro Las Rastras II, el WhatsApp y la dirección de la oficina"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación: datos + mapa ── */}
      <section
        id="contacto"
        className="scroll-mt-20 grid md:grid-cols-2 border-t"
        style={{ backgroundColor: C.inkDeep, borderColor: 'rgba(245,239,230,0.14)' }}
      >
        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo llegar</Eyebrow>
            <h2
              className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.06] mb-6`}
              style={{ color: C.paper }}
            >
              30 Oriente 1546,
              <br />
              <em style={{ color: C.copperSoft }}>piso 6, oficina 612</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(245,239,230,0.72)' }}>
              {BIZ.edificio}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <ul className="space-y-3 mb-9">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(245,239,230,0.8)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.copperSoft} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                {BIZ.horario}
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(245,239,230,0.8)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.copperSoft} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 ${FOCUS} tap-44`}>
                  {BIZ.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} tap-44`}
                style={{ color: C.copperSoft, textDecorationColor: 'rgba(232,184,131,0.45)' }}
              >
                {BIZ.instagramUser}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} tap-44`}
                style={{ color: C.copperSoft, textDecorationColor: 'rgba(232,184,131,0.45)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[320px] md:min-h-[560px]">
          <LazyMap
            title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
            src={MAPS_EMBED}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── Fachada del edificio ── */}
      <section className="relative" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <figure>
              <div className="relative overflow-hidden rounded-md aspect-[4/5] md:aspect-[21/9] max-h-[520px] w-full border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/edificio.webp`}
                  alt="Edificio Centro Las Rastras II en 30 Oriente 1546, Talca, donde está la oficina 612 de Salud Femenina"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Centro Las Rastras II, 30 Oriente 1546 · el ascensor sube al piso 6
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.wineDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-medium text-[clamp(1.9rem,5.5vw,3.2rem)] leading-[1.08] mb-5`}
              style={{ color: C.paper }}
            >
              Tu salud no espera
              <br />
              <em style={{ color: C.copperSoft }}>hora de oficina</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(245,239,230,0.8)' }}>
              Escríbenos por WhatsApp con la especialidad que buscas y te
              confirmamos el próximo horario disponible.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN} text-sm md:text-base px-8 py-3.5 tap-44`}
              style={{ backgroundColor: C.paper, color: C.wineDeep }}
            >
              <WaArrow />
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: sitio de ejemplo de Sitiazo ── */}
      <section className="border-y" style={{ backgroundColor: C.paper, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold" style={{ color: C.ink }}>
            Sitio de ejemplo de Sitiazo · así se vería tu negocio con página propia
          </p>
          <a
            href="https://sitiazo.cl"
            target="_blank"
            rel="noopener noreferrer"
            className={`${LINK} text-[11px] md:text-xs tap-44`}
            style={{ color: C.wineDeep, textDecorationColor: 'rgba(166,61,99,0.4)' }}
          >
            sitiazo.cl →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1 flex items-center gap-3`}>
              <Image src={`${IMG}/logo.webp`} alt="" width={32} height={16} className="rounded-sm" aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.65)' }}>
              {BIZ.address} · {BIZ.edificio} · {BIZ.city}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,239,230,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${FOCUS} tap-44`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,230,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.7)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Las fotos,
            la dirección, el horario, el WhatsApp y la agenda online son reales
            y públicos del centro; no se muestran precios porque el centro no
            los publica.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
