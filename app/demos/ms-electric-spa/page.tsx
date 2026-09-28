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

const C = {
  carbon: '#101216',
  carbonSoft: '#171A20',
  panel: '#1E222B',
  volt: '#FFC400',
  paper: '#F2EFE9',
  ink: '#14161B',
  muted: '#5A6068',
  creamDim: 'rgba(242,239,233,0.72)',
  lineDark: 'rgba(242,239,233,0.16)',
  lineLight: 'rgba(20,22,27,0.14)',
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
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const CIRCUITOS = [
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

const TRABAJOS = [
  { src: `${IMG}/tablero.webp`, alt: 'Tablero eléctrico abierto con circuitos ordenados', tag: 'tablero' },
  { src: `${IMG}/lineman.webp`, alt: 'Trabajo en poste con escalera y herramientas', tag: 'terreno' },
  { src: `${IMG}/breakers.webp`, alt: 'Caja de breakers instalada en muro', tag: 'breakers' },
  { src: `${IMG}/split.webp`, alt: 'Aire acondicionado split instalado en interior', tag: 'clima' },
  { src: `${IMG}/casa-ac.webp`, alt: 'Casa con unidad exterior de aire acondicionado instalada', tag: 'clima' },
  { src: `${IMG}/ac-muro.webp`, alt: 'Unidad exterior de aire acondicionado en muro de madera', tag: 'clima' },
  { src: `${IMG}/tablero-luz.webp`, alt: 'Tablero con luces indicadoras encendidas', tag: 'tablero' },
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

function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="font-[var(--font-mono)] text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-sm"
      style={{
        color: dark ? C.volt : C.ink,
        border: `1px solid ${dark ? 'rgba(255,196,0,0.45)' : 'rgba(20,22,27,0.35)'}`,
        backgroundColor: dark ? 'rgba(255,196,0,0.08)' : 'transparent',
      }}
    >
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} font-[var(--font-body)] antialiased`} style={{ backgroundColor: C.carbon }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass="font-[var(--font-display)] font-extrabold uppercase tracking-wide"
        theme={{ over: 'dark', bar: C.carbon, ink: '#F2EFE9', line: C.lineDark, btnBg: C.volt, btnInk: C.ink }}
      />

      {/* ── HERO ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${C.lineDark} 1px, transparent 1px), linear-gradient(90deg, ${C.lineDark} 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
            opacity: 0.25,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-14 md:pt-40 md:pb-20">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  <Tag dark>Instalador certificado</Tag>
                  <Tag dark>Región del Maule</Tag>
                </div>
              </Reveal>
              <Reveal>
                <h1
                  className="font-[var(--font-display)] font-extrabold uppercase leading-[0.92] mt-6 text-[clamp(2.9rem,11vw,6.5rem)]"
                  style={{ color: '#F2EFE9' }}
                >
                  Corriente
                  <br />
                  <span style={{ color: C.volt }}>bien</span> instalada
                </h1>
              </Reveal>
              <Reveal>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.creamDim }}>
                  Electricidad, empalmes, CCTV y climatización para casas y
                  empresas del Maule. Trabajo con garantía, a la hora acordada.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-base font-bold uppercase tracking-wide active:scale-95 transition-transform"
                    style={{ backgroundColor: C.volt, color: C.ink }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <div className="flex items-center gap-2">
                    <Stars value={5} color={C.volt} className="w-3.5 h-3.5" />
                    <span className="font-[var(--font-mono)] text-xs" style={{ color: C.creamDim }}>
                      {BIZ.rating} · {BIZ.reviews} reseñas
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <figure className="relative">
                <div
                  className="absolute -top-3 -left-3 w-full h-full rounded-md"
                  style={{ border: `1px solid rgba(255,196,0,0.5)` }}
                  aria-hidden="true"
                />
                <Image
                  src={`${IMG}/van.webp`}
                  alt="Furgón de MS Electric SPA con logo y servicios rotulados"
                  width={900}
                  height={1600}
                  priority
                  className="relative rounded-md w-full h-auto max-h-[520px] object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
                <figcaption
                  className="absolute bottom-3 left-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-sm"
                  style={{ backgroundColor: 'rgba(16,18,22,0.85)', color: C.volt }}
                >
                  Unidad móvil · a domicilio
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal>
            <dl
              className="mt-14 md:mt-18 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-md overflow-hidden"
              style={{ backgroundColor: C.lineDark, border: `1px solid ${C.lineDark}` }}
            >
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Horario', 'Lun a Sáb · 8:00 a 19:00'],
                ['Contacto', BIZ.phoneDisplay],
              ].map(([k, v]) => (
                <div key={k} className="px-4 py-3" style={{ backgroundColor: C.carbonSoft }}>
                  <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em]" style={{ color: C.volt }}>
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm font-medium" style={{ color: '#F2EFE9' }}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── TABLERO DE SERVICIOS ── */}
      <section id="servicios" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
                  Servicios · tablero general
                </p>
                <h2
                  className="font-[var(--font-display)] font-extrabold uppercase leading-[0.95] text-[clamp(2.2rem,7vw,4rem)]"
                  style={{ color: C.ink }}
                >
                  Todo lo que corre
                  <br />
                  por tus cables
                </h2>
              </div>
              <Tag>Cada circuito, revisado</Tag>
            </div>
          </Reveal>

          <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.lineLight}`, backgroundColor: '#FBFAF7' }}>
            {CIRCUITOS.map((s, i) => (
              <Reveal key={s.n}>
                <div
                  className="grid grid-cols-[auto_auto_1fr] sm:grid-cols-[auto_auto_1fr_auto] items-center gap-x-4 gap-y-1 px-4 md:px-6 py-4"
                  style={{ borderTop: i === 0 ? 'none' : `1px solid ${C.lineLight}` }}
                >
                  <span className="font-[var(--font-mono)] text-xs font-semibold" style={{ color: C.muted }}>
                    {s.n}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-[2px]"
                    style={{ backgroundColor: C.volt, boxShadow: '0 0 0 3px rgba(255,196,0,0.18)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="font-[var(--font-display)] font-bold uppercase tracking-wide text-xl md:text-2xl leading-none"
                      style={{ color: C.ink }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-sm mt-1 leading-snug" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                  <span
                    className="hidden sm:block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm"
                    style={{ color: C.muted, border: `1px dashed ${C.lineLight}` }}
                  >
                    ON
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-6 font-[var(--font-mono)] text-xs leading-relaxed" style={{ color: C.muted }}>
              * Servicios informados por la propia empresa en su ficha y vehículo
              de trabajo. Consulta tu caso por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TRABAJOS ── */}
      <section id="trabajos" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.volt }}>
              Registro fotográfico
            </p>
            <h2
              className="font-[var(--font-display)] font-extrabold uppercase leading-[0.95] text-[clamp(2.2rem,7vw,4rem)] mb-10 md:mb-14"
              style={{ color: '#F2EFE9' }}
            >
              Trabajo que se ve
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.src}>
                <figure className={i === 0 ? 'col-span-2 row-span-2' : ''}>
                  <div className="relative overflow-hidden rounded-md" style={{ border: `1px solid ${C.lineDark}` }}>
                    <Image
                      src={t.src}
                      alt={t.alt}
                      width={1200}
                      height={1600}
                      className={`w-full object-cover ${i === 0 ? 'h-full aspect-[4/5] md:aspect-auto' : 'aspect-[3/4]'}`}
                    />
                    <span
                      className="absolute top-2 left-2 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-sm"
                      style={{ backgroundColor: 'rgba(16,18,22,0.8)', color: C.volt }}
                    >
                      {t.tag}
                    </span>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas" style={{ backgroundColor: C.carbonSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
            <Reveal>
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.volt }}>
                  Reseñas de Google
                </p>
                <div className="flex items-end gap-4">
                  <span
                    className="font-[var(--font-display)] font-extrabold leading-none text-[clamp(4.5rem,16vw,8rem)]"
                    style={{ color: '#F2EFE9' }}
                  >
                    {BIZ.rating}
                  </span>
                  <div className="pb-3">
                    <Stars value={5} color={C.volt} className="w-4.5 h-4.5" />
                    <p className="font-[var(--font-mono)] text-xs mt-2" style={{ color: C.creamDim }}>
                      {BIZ.reviews} reseñas · todas 5 estrellas
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed max-w-sm" style={{ color: C.creamDim }}>
                  Puntualidad, honestidad y garantía son las palabras que más
                  repiten sus clientes en el Maule.
                </p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {RESENAS.map((r) => (
                <Reveal key={r.nombre}>
                  <blockquote
                    className="h-full rounded-md p-5 flex flex-col"
                    style={{ backgroundColor: C.panel, border: `1px solid ${C.lineDark}` }}
                  >
                    <Stars value={5} color={C.volt} className="w-3 h-3" />
                    <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: 'rgba(242,239,233,0.85)' }}>
                      “{r.texto}”
                    </p>
                    <footer
                      className="mt-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em]"
                      style={{ color: C.volt }}
                    >
                      {r.nombre}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO + MAPA ── */}
      <section id="contacto" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <Reveal>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
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
                  className="tap-44 mt-8 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-base font-bold uppercase tracking-wide active:scale-95 transition-transform"
                  style={{ backgroundColor: C.ink, color: '#F2EFE9' }}
                >
                  Pedir cotización
                </a>
              </Reveal>
            </div>
            <Reveal>
              <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.lineLight}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name} en ${BIZ.city}`}
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
      <footer style={{ backgroundColor: C.carbon, borderTop: `1px solid ${C.lineDark}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={32} height={32} className="rounded-full" aria-hidden="true" />
            <div>
              <p className="font-[var(--font-display)] font-bold uppercase tracking-wide text-sm" style={{ color: '#F2EFE9' }}>
                {BIZ.name}
              </p>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em]" style={{ color: C.creamDim }}>
                {BIZ.rubro} · {BIZ.city}, Región del Maule
              </p>
            </div>
          </div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: C.creamDim }}>
            {BIZ.phoneDisplay} · Lun–Sáb 8:00–19:00
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Cotizar por WhatsApp" />
    </main>
  )
}
