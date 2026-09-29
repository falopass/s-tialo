import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-mono',
})

// Identidad sacada del furgón rotulado: azul corporativo + naranja de señal
// sobre papel claro, como una hoja de servicio. Se aparta de los demos
// oscuros del rubro (navy/teal y ámbar).
const C = {
  paper: '#F3F5F8',
  paperDeep: '#E8ECF2',
  panel: '#FFFFFF',
  ink: '#0F1E3A',
  blue: '#1E55B4',
  orange: '#E8720C',
  orangeInk: '#A84E08',
  muted: '#45526B',
  line: 'rgba(15,30,58,0.16)',
  lineBlue: 'rgba(30,85,180,0.28)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ms-electric-spa',
  title: 'MS Electric SPA — Electricista certificado en Maule',
  description:
    'Instalaciones eléctricas, empalmes y TE1, planos, CCTV y aires acondicionados. San Pedro de la Paz 605, Maule. 5,0 estrellas en Google. Cotiza por WhatsApp.',
  image: `${IMG}/van.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Terreno', href: '#terreno' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Agenda', href: '#agenda' },
]

const SERVICIOS = [
  {
    n: '01',
    name: 'Instalaciones eléctricas',
    desc: 'Circuitos nuevos, tableros y cableado para casas, locales y obras.',
  },
  {
    n: '02',
    name: 'Empalmes y TE1',
    desc: 'Empalmes nuevos o ampliación de capacidad, con declaración TE1.',
  },
  {
    n: '03',
    name: 'Planos eléctricos',
    desc: 'Diseño y regularización de planos para proyectos y permisos.',
  },
  {
    n: '04',
    name: 'CCTV',
    desc: 'Cámaras de seguridad instaladas y configuradas para tu propiedad.',
  },
  {
    n: '05',
    name: 'Aires acondicionados',
    desc: 'Instalación, mantención y reparación de equipos split y muro.',
  },
  {
    n: '06',
    name: 'Energía solar',
    desc: 'Instalación de paneles solares para bajar la cuenta de luz.',
  },
]

const INFORME = [
  { src: `${IMG}/medidor.webp`, alt: 'Medidor eléctrico instalado en reja de acceso', fig: 'FIG. 01', tag: 'empalme' },
  { src: `${IMG}/tablero-casa.webp`, alt: 'Tablero de casa con breakers encendidos y tapa abierta', fig: 'FIG. 02', tag: 'tablero' },
  { src: `${IMG}/lineman.webp`, alt: 'Trabajo en altura sobre escalera junto a poste', fig: 'FIG. 03', tag: 'terreno' },
  { src: `${IMG}/rack.webp`, alt: 'Rack de red con cableado ordenado tras puerta de vidrio', fig: 'FIG. 04', tag: 'redes' },
  { src: `${IMG}/split.webp`, alt: 'Aire acondicionado split instalado en muro interior', fig: 'FIG. 05', tag: 'clima' },
  { src: `${IMG}/tablero.webp`, alt: 'Tablero industrial grande con circuitos etiquetados', fig: 'FIG. 06', tag: 'tablero' },
  { src: `${IMG}/breakers.webp`, alt: 'Caja de breakers instalada en muro', fig: 'FIG. 07', tag: 'tablero' },
  { src: `${IMG}/ac-muro.webp`, alt: 'Unidad exterior de aire acondicionado sobre muro de madera', fig: 'FIG. 08', tag: 'clima' },
]

const RESENAS = [
  {
    nombre: 'Cristina Caro',
    texto: '1000% recomendable, detallista, honesto y respetuoso. Puedes contratar sus servicios sin problemas.',
  },
  {
    nombre: 'Gastón Gutiérrez',
    texto: 'Muy conforme con el servicio entregado, muy profesional, honesto y responsable, se agradece el trabajo realizado, además ofrece garantía.',
  },
  {
    nombre: 'Ale Rivera',
    texto: 'Excelente profesional, muy puntual y responsable, cumple con el trabajo ofrecido, muy buena calidad de materiales y del servicio, recomendado.',
  },
  {
    nombre: 'Grey Acosta',
    texto: 'Responsable y comprometido con el trabajo, entrega garantía y un servicio de calidad, muy puntual, respetuoso y amable.',
  },
]

function MonoTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="font-[var(--font-mono)] text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] px-2.5 py-1"
      style={{
        color: light ? '#0F1E3A' : C.orangeInk,
        border: `1px solid ${light ? 'rgba(15,30,58,0.4)' : C.lineBlue}`,
        backgroundColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} font-[var(--font-body)] antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass="font-[var(--font-display)] font-extrabold uppercase tracking-wide"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ink, btnInk: '#F3F5F8' }}
      />

      {/* ── HERO: hoja de servicio sobre el furgón ── */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-14">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <MonoTag>Instalador certificado</MonoTag>
              <MonoTag>{BIZ.region}</MonoTag>
            </div>
          </Reveal>
          <Reveal>
            <h1
              className="font-[var(--font-display)] font-extrabold uppercase leading-[0.9] mt-6 text-[clamp(3rem,12vw,7.5rem)]"
              style={{ color: C.ink }}
            >
              La luz que
              <br />
              <span style={{ color: C.blue }}>no te falla</span>
            </h1>
          </Reveal>
          <Reveal>
            <div className="mt-7 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <p className="max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Electricidad, empalmes, CCTV y climatización para casas y
                empresas del Maule. Trabajo con garantía, a la hora acordada.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold uppercase tracking-wide active:scale-95 transition-transform"
                style={{ backgroundColor: C.orange, color: C.ink }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 w-full h-full"
                style={{ border: `2px solid ${C.orange}` }}
              />
              <Image
                src={`${IMG}/van.webp`}
                alt="Furgón de MS Electric SPA rotulado con sus servicios y teléfono"
                width={900}
                height={1600}
                priority
                className="relative w-full h-auto max-h-[560px] object-cover"
                style={{ objectPosition: '50% 42%', border: `1px solid ${C.line}` }}
              />
              <figcaption
                className="absolute bottom-0 inset-x-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2.5 font-[var(--font-mono)] text-[10px] md:text-xs uppercase tracking-[0.16em]"
                style={{ backgroundColor: 'rgba(15,30,58,0.92)', color: '#F3F5F8' }}
              >
                <span>Unidad móvil · a domicilio en el Maule</span>
                <span className="inline-flex items-center gap-1.5" style={{ color: '#FFC233' }}>
                  <Stars value={5} color="#FFC233" className="w-3 h-3" />
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICIOS: planilla de obra ── */}
      <section id="servicios" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.orangeInk }}>
                  Servicios · planilla
                </p>
                <h2
                  className="font-[var(--font-display)] font-extrabold uppercase leading-[0.95] text-[clamp(2.2rem,7vw,4rem)]"
                  style={{ color: C.ink }}
                >
                  Lo que cubre la visita
                </h2>
              </div>
              <MonoTag>Cada circuito, revisado</MonoTag>
            </div>
          </Reveal>

          <div
            className="grid sm:grid-cols-2 gap-px"
            style={{ backgroundColor: C.line, border: `1px solid ${C.line}` }}
          >
            {SERVICIOS.map((s) => (
              <div key={s.n} className="px-5 py-5 md:px-7 md:py-6" style={{ backgroundColor: C.panel }}>
                <Reveal>
                  <div className="flex items-baseline gap-3">
                    <span className="font-[var(--font-mono)] text-xs font-semibold" style={{ color: C.orange }}>
                      [{s.n}]
                    </span>
                    <h3
                      className="font-[var(--font-display)] font-bold uppercase tracking-wide text-xl md:text-2xl leading-none"
                      style={{ color: C.ink }}
                    >
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-sm mt-2 leading-snug max-w-sm" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </Reveal>
              </div>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 sm:col-span-2 px-5 py-3.5 md:px-7 md:py-5 flex items-center justify-between gap-4 group"
              style={{ backgroundColor: C.ink }}
            >
              <span className="font-[var(--font-display)] font-bold uppercase tracking-wide text-lg md:text-xl" style={{ color: '#F3F5F8' }}>
                ¿Tu caso no está en la lista?
              </span>
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em]" style={{ color: '#FFC233' }}>
                Pregunta por WhatsApp →
              </span>
            </a>
          </div>

          <Reveal>
            <p className="mt-6 font-[var(--font-mono)] text-xs leading-relaxed" style={{ color: C.muted }}>
              * Servicios informados por la propia empresa en su ficha y vehículo
              de trabajo. Consulta tu caso por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TERRENO: informe fotográfico en carrusel ── */}
      <section id="terreno" style={{ backgroundColor: C.ink }}>
        <div className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: '#FFC233' }}>
                    Registro en terreno
                  </p>
                  <h2
                    className="font-[var(--font-display)] font-extrabold uppercase leading-[0.95] text-[clamp(2.2rem,7vw,4rem)]"
                    style={{ color: '#F3F5F8' }}
                  >
                    Instalado, no
                    <br />
                    prometido
                  </h2>
                </div>
                <p
                  className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] pb-1"
                  style={{ color: 'rgba(243,245,248,0.6)' }}
                >
                  Desliza →
                </p>
              </div>
            </Reveal>
          </div>
          <div
            className="mt-10 md:mt-14 flex gap-3 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {INFORME.map((t) => (
              <figure
                key={t.src}
                className="relative shrink-0 w-[240px] md:w-[300px] snap-start"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={675}
                  height={1200}
                  className="w-full aspect-[3/4] object-cover"
                  style={{ border: `1px solid rgba(243,245,248,0.2)` }}
                />
                <figcaption
                  className="absolute top-2 left-2 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5"
                  style={{ backgroundColor: C.orange, color: C.ink }}
                >
                  {t.fig} · {t.tag}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPINIONES ── */}
      <section id="opiniones" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
            <Reveal>
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.orangeInk }}>
                  Opiniones de Google
                </p>
                <div className="flex items-end gap-4">
                  <span
                    className="font-[var(--font-display)] font-extrabold leading-none text-[clamp(4.5rem,16vw,8rem)]"
                    style={{ color: C.ink }}
                  >
                    {BIZ.rating}
                  </span>
                  <div className="pb-3">
                    <Stars value={5} color={C.orange} className="w-4.5 h-4.5" />
                    <p className="font-[var(--font-mono)] text-xs mt-2" style={{ color: C.muted }}>
                      {BIZ.reviews} reseñas · todas 5 estrellas
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                  Puntualidad, honestidad y garantía son las palabras que más
                  repiten sus clientes en el Maule.
                </p>
              </div>
            </Reveal>
            <div>
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre}>
                  <blockquote
                    className="py-5"
                    style={{ borderTop: i === 0 ? `2px solid ${C.ink}` : `1px solid ${C.line}` }}
                  >
                    <Stars value={5} color={C.orange} className="w-3 h-3" />
                    <p className="mt-3 text-base leading-relaxed" style={{ color: C.ink }}>
                      “{r.texto}”
                    </p>
                    <footer
                      className="mt-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em]"
                      style={{ color: C.orangeInk }}
                    >
                      {r.nombre} · Google
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AGENDA + MAPA ── */}
      <section id="agenda" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <Reveal>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.orangeInk }}>
                  Contacto directo
                </p>
                <h2
                  className="font-[var(--font-display)] font-extrabold uppercase leading-[0.95] text-[clamp(2.2rem,7vw,3.6rem)]"
                  style={{ color: C.ink }}
                >
                  Agenda tu visita
                  <br />
                  en {BIZ.city}
                </h2>
              </Reveal>
              <Reveal>
                <ul className="mt-8 space-y-4">
                  <li className="flex gap-4 items-start">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] pt-1 w-16 shrink-0" style={{ color: C.muted }}>
                      Taller
                    </span>
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-base font-semibold underline underline-offset-4" style={{ color: C.ink }}>
                      {BIZ.address}, {BIZ.city}
                    </a>
                  </li>
                  {BIZ.hours.map((h) => (
                    <li key={h.d} className="flex gap-4 items-start">
                      <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] pt-1 w-16 shrink-0" style={{ color: C.muted }}>
                        {h.d === 'Domingo' ? 'Dom' : 'Lun–Sáb'}
                      </span>
                      <span className="text-base font-medium" style={{ color: C.ink }}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                  <li className="flex gap-4 items-start">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] pt-1 w-16 shrink-0" style={{ color: C.muted }}>
                      WhatsApp
                    </span>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-base font-semibold underline underline-offset-4" style={{ color: C.ink }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </Reveal>
              <Reveal>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-8 inline-flex items-center gap-2 px-6 py-3 text-base font-bold uppercase tracking-wide active:scale-95 transition-transform"
                  style={{ backgroundColor: C.ink, color: '#F3F5F8' }}
                >
                  Cotizar por WhatsApp
                </a>
              </Reveal>
            </div>
            <Reveal>
              <div style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Ubicación de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                  className="w-full h-[300px] md:h-[380px] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={36} height={36} className="h-8 w-8 rounded-full" aria-hidden="true" />
            <div>
              <p className="font-[var(--font-display)] font-bold uppercase tracking-wide text-sm" style={{ color: '#F3F5F8' }}>
                {BIZ.name}
              </p>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: 'rgba(243,245,248,0.6)' }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(243,245,248,0.6)' }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Cotizar un trabajo eléctrico por WhatsApp" />
    </main>
  )
}
