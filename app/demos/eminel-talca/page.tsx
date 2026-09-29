import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, RESENA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Identidad real de Ingeteck (logo de eminel.cl): azul corporativo + rojo
const C = {
  fondo: '#EEF2F5',
  panel: '#FFFFFF',
  tinta: '#14222E',
  muted: '#54646F',
  line: 'rgba(20,34,46,0.14)',
  lineDark: 'rgba(238,242,245,0.16)',
  azul: '#0B6FAE',
  azulDeep: '#0A2E44',
  rojo: '#B91A0F',
}

export const metadata: Metadata = demoMetadata({
  slug: 'eminel-talca',
  title: 'Ingeteck — Ingeniería y montajes eléctricos en Talca',
  description:
    'Ingeteck (Empresa de Ingeniería Eléctrica Talca): tableros, energía solar, climatización y montajes desde Calle 2 Oriente 1625, Talca. 5.0★ en Google.',
  image: `${IMG}/tablero.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    ramal: 'R-01',
    nombre: 'Tableros eléctricos',
    glosa: 'Diseño, armado e instalación de tableros de distribución y control para obras e industria.',
  },
  {
    ramal: 'R-02',
    nombre: 'Energía solar',
    glosa: 'Paneles solares fotovoltaicos y termos solares: dimensionamiento e instalación en terreno.',
  },
  {
    ramal: 'R-03',
    nombre: 'Climatización y ductos',
    glosa: 'Aire acondicionado, ductos y aislación térmica para recintos comerciales e industriales.',
  },
  {
    ramal: 'R-04',
    nombre: 'Montajes e ingeniería',
    glosa: 'Proyectos eléctricos y montajes completos: de la memoria de cálculo a la puesta en marcha.',
  },
]

const TRABAJOS = [
  { src: 'termos-solares.webp', alt: 'Termos solares instalados por Ingeteck en la azotea de una obra', cap: 'Termos solares en azotea' },
  { src: 'tablero.webp', alt: 'Tablero eléctrico armado e instalado por Ingeteck', cap: 'Tablero en terreno' },
  { src: 'ductos-industriales.webp', alt: 'Ductos metálicos de climatización instalados por Ingeteck en una nave industrial', cap: 'Ductos industriales' },
  { src: 'caneria-aislada.webp', alt: 'Cañerías con aislación térmica instaladas por Ingeteck', cap: 'Aislación de cañerías' },
  { src: 'estanque-termo.webp', alt: 'Estanque de agua caliente instalado por Ingeteck', cap: 'Termo y estanque' },
]

const CLIENTES = [
  { src: 'cliente-megaconstrucciones.webp', alt: 'Logo de Megaconstrucciones, cliente publicado por Ingeteck', nombre: 'Megaconstrucciones' },
  { src: 'cliente-mitsubishi.webp', alt: 'Logo de Mitsubishi Motors, cliente publicado por Ingeteck', nombre: 'Mitsubishi Motors' },
  { src: 'cliente-consur.webp', alt: 'Logo de Consur Constructora, cliente publicado por Ingeteck', nombre: 'Consur Constructora' },
]

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Unifilar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" className={className} fill="none" role="img" aria-label="Bosquejo de un esquema unifilar eléctrico">
      <line x1="160" y1="18" x2="160" y2="52" stroke={C.rojo} strokeWidth="2" />
      <circle cx="160" cy="12" r="5" stroke={C.rojo} strokeWidth="2" />
      <rect x="150" y="52" width="20" height="16" stroke={C.tinta} strokeWidth="2" />
      <line x1="150" y1="68" x2="170" y2="52" stroke={C.tinta} strokeWidth="2" />
      <line x1="160" y1="68" x2="160" y2="82" stroke={C.tinta} strokeWidth="2" />
      <circle cx="160" cy="93" r="11" stroke={C.azul} strokeWidth="2" />
      <circle cx="160" cy="105" r="11" stroke={C.azul} strokeWidth="2" />
      <line x1="160" y1="116" x2="160" y2="138" stroke={C.tinta} strokeWidth="2" />
      <line x1="40" y1="144" x2="280" y2="144" stroke={C.azul} strokeWidth="3" />
      {[60, 160, 260].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="144" x2={x} y2="168" stroke={C.tinta} strokeWidth="2" />
          <rect x={x - 9} y={168} width="18" height="14" stroke={C.tinta} strokeWidth="2" />
          <line x1={x - 9} y1="182" x2={x + 9} y2="168" stroke={C.tinta} strokeWidth="2" />
          <line x1={x} y1="182" x2={x} y2="210" stroke={C.rojo} strokeWidth="2" />
          <circle cx={x} cy="216" r="4" fill={C.rojo} />
          <text x={x} y="234" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="monospace" letterSpacing="1">
            CARGA {String(i + 1).padStart(2, '0')}
          </text>
        </g>
      ))}
      <text x="188" y="60" fill={C.muted} fontSize="9" fontFamily="monospace" letterSpacing="1">INT. Gral.</text>
      <text x="184" y="100" fill={C.muted} fontSize="9" fontFamily="monospace" letterSpacing="1">TRAF.</text>
      <text x="36" y="136" fill={C.muted} fontSize="9" fontFamily="monospace" letterSpacing="1">BARRA PRINCIPAL</text>
    </svg>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.fondo, color: C.tinta }}>
      <style>{'html { scroll-behavior: auto }'}</style>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo-ingeteck.webp`} alt={`Logo de ${BIZ.name}`} className="h-7 w-auto" />
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(238,242,245,0.94)', ink: C.tinta, line: C.line, btnBg: C.azul, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: plano de montaje ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 39px, ${C.azul} 40px), repeating-linear-gradient(0deg, transparent, transparent 39px, ${C.azul} 40px)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-14 md:pb-20">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo-ingeteck.webp`} alt={`${BIZ.name} — ${BIZ.nameFull}`} className="h-11 md:h-14 w-auto mb-8" />
          </Reveal>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <h1 className={`${display.className} font-bold text-[clamp(2rem,6.4vw,3.9rem)] leading-[1.06] tracking-tight`}>
                  Ingeniería y montajes
                  <br />
                  eléctricos <span style={{ color: C.azul }}>en Talca</span>
                </h1>
                <p className="mt-6 text-sm md:text-base max-w-md leading-relaxed" style={{ color: C.muted }}>
                  {BIZ.name} — Empresa de Ingeniería Eléctrica Talca: tableros,
                  energía solar, climatización y montajes para obras e
                  industria, desde {BIZ.address}, {BIZ.city}.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} inline-flex items-center gap-2.5 font-semibold text-sm md:text-base tracking-wide px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14222E] tap-44`}
                    style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
                  >
                    <PhoneIcon />
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(20,34,46,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14222E] tap-44"
                    style={{ borderColor: 'rgba(20,34,46,0.4)', color: C.tinta }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className={`${mono.className} mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  <span className="flex items-center gap-2">
                    <Stars value={BIZ.rating} color={C.rojo} className="w-3.5 h-3.5" />
                    {BIZ.rating.toLocaleString('es-CL')} en Google
                  </span>
                  <span>Desde {BIZ.desde}</span>
                  <span>{BIZ.address}</span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} className="md:col-span-5">
              <figure className="relative border-2 overflow-hidden" style={{ borderColor: C.tinta, backgroundColor: C.panel }}>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={`${IMG}/tablero.webp`}
                    alt="Tablero eléctrico real instalado por Ingeteck, foto de su portafolio"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className={`${mono.className} flex items-center justify-between gap-2 px-3 py-2 text-[10px] uppercase tracking-[0.16em] border-t`} style={{ borderColor: C.line, color: C.muted }}>
                  <span>Tablero en terreno</span>
                  <span style={{ color: C.rojo }}>foto real</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Servicios: ramales del tablero ── */}
      <section id="servicios" className="border-t-2" style={{ borderColor: C.tinta, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-[clamp(1.7rem,4.4vw,2.9rem)] leading-[1.1] tracking-tight`}>
                Cuatro ramales
                <br />
                de trabajo
              </h2>
              <p className="text-xs md:text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
                Las líneas de servicio publicadas en su propio sitio, eminel.cl.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.ramal} delay={i * 90}>
                <li className="h-full border-2 p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.fondo }}>
                  <div className="flex items-center justify-between mb-6">
                    <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.azul }}>
                      {s.ramal}
                    </p>
                    <span className="w-2.5 h-2.5" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                  </div>
                  <h3 className={`${display.className} font-semibold text-base md:text-lg leading-snug mb-3 tracking-tight`}>
                    {s.nombre}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.glosa}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Trabajos: portafolio real ── */}
      <section id="trabajos" className="border-t-2" style={{ borderColor: C.tinta, backgroundColor: C.azulDeep, color: C.fondo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-4`} style={{ color: 'rgba(238,242,245,0.6)' }}>
              El trabajo, en terreno
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(1.7rem,4.4vw,2.9rem)] leading-[1.1] tracking-tight max-w-2xl mb-5`}>
              Instalaciones reales
              <br />
              de su portafolio
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12" style={{ color: 'rgba(238,242,245,0.72)' }}>
              Fotos publicadas por la propia empresa en eminel.cl: obras
              terminadas en azoteas, naves industriales y salas de máquinas.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.src} delay={i * 80} className={i === 0 ? 'col-span-2 md:col-span-6' : 'md:col-span-3'}>
                <figure className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.lineDark }}>
                  <Image
                    src={`${IMG}/${t.src}`}
                    alt={t.alt}
                    fill
                    sizes={i === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                    className="object-cover"
                  />
                  <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(10,46,68,0.88)', color: C.fondo }}>
                    {t.cap} · foto real
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={120} className="col-span-2 md:col-span-3">
              <figure className="h-full border flex flex-col" style={{ borderColor: C.lineDark, backgroundColor: 'rgba(238,242,245,0.06)' }}>
                <div className={`${mono.className} flex items-center justify-between px-3 py-2 text-[10px] uppercase tracking-[0.16em] border-b`} style={{ borderColor: C.lineDark, color: 'rgba(238,242,245,0.55)' }}>
                  <span>Esquema unifilar</span>
                  <span className="px-2 py-0.5 border" style={{ borderColor: '#5FB3E8', color: '#5FB3E8' }}>bosquejo</span>
                </div>
                <Unifilar className="w-full h-auto p-3" />
              </figure>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} mt-5 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(238,242,245,0.5)' }}>
              Fotos reales de eminel.cl · el esquema unifilar es un bosquejo de muestra
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Clientes + reseña ── */}
      <section className="border-t-2" style={{ borderColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-8`} style={{ color: C.azul }}>
              Clientes que publican en su sitio
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-14">
            {CLIENTES.map((c, i) => (
              <Reveal key={c.src} delay={i * 80}>
                <figure className="border-2 bg-white p-4 md:p-6 flex items-center justify-center" style={{ borderColor: C.line }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/${c.src}`} alt={c.alt} className="h-12 md:h-16 w-auto object-contain" />
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="grid md:grid-cols-12 gap-8 items-center border-2 p-7 md:p-10" style={{ borderColor: C.tinta, backgroundColor: C.panel }}>
              <div className="md:col-span-4">
                <p className={`${display.className} font-bold text-[clamp(3.4rem,8vw,5.4rem)] leading-none`} style={{ color: C.azul }}>
                  {BIZ.rating.toLocaleString('es-CL')}
                </p>
                <Stars value={BIZ.rating} color={C.rojo} className="w-4 h-4 mt-3" />
                <p className={`${mono.className} mt-2 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {BIZ.reviews} opinión en Google
                </p>
              </div>
              <div className="md:col-span-8">
                <p className={`${display.className} font-semibold text-xl md:text-2xl leading-snug mb-3`}>
                  “{RESENA.texto}”
                </p>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {RESENA.nombre} · reseña real de su ficha de Google
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto: bornero de datos ── */}
      <section id="contacto" className="border-t-2" style={{ borderColor: C.tinta, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-5`} style={{ color: C.rojo }}>
              Bornero de contacto
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(1.7rem,4.4vw,2.9rem)] leading-[1.1] tracking-tight mb-8`}>
              El proyecto empieza
              <br />
              con una llamada
            </h2>
            <dl className={`${mono.className} text-xs md:text-sm`}>
              <div className="grid grid-cols-[120px_1fr] gap-x-4 py-3.5 border-t" style={{ borderColor: C.line }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: C.muted }}>Empresa</dt>
                <dd className="normal-case">{BIZ.legalName}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-x-4 py-3.5 border-t" style={{ borderColor: C.line }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: C.muted }}>Oficina</dt>
                <dd>{BIZ.address} · {BIZ.city}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-x-4 py-3.5 border-t" style={{ borderColor: C.line }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: C.muted }}>Teléfono</dt>
                <dd>{BIZ.phoneDisplay}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-x-4 py-3.5 border-t border-b" style={{ borderColor: C.line }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: C.muted }}>Sitio actual</dt>
                <dd>{BIZ.web}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 font-semibold text-sm tracking-wide px-6 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14222E] tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                <PhoneIcon />
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(20,34,46,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14222E] tap-44"
                style={{ borderColor: 'rgba(20,34,46,0.4)', color: C.tinta }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[340px] h-full border-2" style={{ borderColor: C.tinta, backgroundColor: C.fondo }}>
              <LazyMap
                title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.azulDeep, color: C.fondo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo-ingeteck.webp`} alt={`Logo de ${BIZ.name}`} className="h-8 w-auto mb-2" style={{ filter: 'brightness(0) invert(1)' }} />
            <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(238,242,245,0.6)' }}>
              {BIZ.legalName} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(238,242,245,0.6)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(238,242,245,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.fondo }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, razón social, dirección, teléfono,
            servicios, clientes y reseña son datos públicos reales de su ficha
            de Google y de su sitio {BIZ.web}; las fotos del portafolio y los
            logos son descargados de ese mismo sitio, y las calles son Google
            Street View.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.fondo }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.rojo} fg="#FFFFFF" />
    </div>
  )
}
