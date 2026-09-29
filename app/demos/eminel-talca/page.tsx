import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
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

const C = {
  fondo: '#0C1015',
  panel: '#151B23',
  panelSoft: '#1C242F',
  tinta: '#E9EDF2',
  muted: '#8D97A4',
  line: 'rgba(233,237,242,0.16)',
  senal: '#F2C21B',
  cobre: '#CE7B3C',
}

export const metadata: Metadata = demoMetadata({
  slug: 'eminel-talca',
  title: 'EMINEL — Ingeniería eléctrica en Talca',
  description:
    'Empresa de Ingeniería Eléctrica Talca: proyectos e instalaciones eléctricas desde Calle 2 Oriente 1625. 5.0★ en Google.',
  image: `${IMG}/red-aerea.webp`,
})

const NAV_LINKS = [
  { label: 'Líneas de trabajo', href: '#lineas' },
  { label: 'El barrio', href: '#barrio' },
  { label: 'Contacto', href: '#contacto' },
]

const LINEAS = [
  {
    ramal: 'R-01',
    nombre: 'Proyectos eléctricos',
    glosa: 'Diseño y ejecución de proyectos eléctricos: de la memoria de cálculo al energizado final.',
  },
  {
    ramal: 'R-02',
    nombre: 'Instalaciones de fuerza',
    glosa: 'Instalación y mantención de redes, tableros y acometidas para casas, locales e industria.',
  },
  {
    ramal: 'R-03',
    nombre: 'Asesoría e ingeniería',
    glosa: 'Estudios, diagnósticos y acompañamiento técnico para que cada instalación quede en regla.',
  },
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
      {/* acometida */}
      <line x1="160" y1="18" x2="160" y2="52" stroke={C.senal} strokeWidth="2" />
      <circle cx="160" cy="12" r="5" stroke={C.senal} strokeWidth="2" />
      {/* breaker */}
      <rect x="150" y="52" width="20" height="16" stroke={C.tinta} strokeWidth="2" />
      <line x1="150" y1="68" x2="170" y2="52" stroke={C.tinta} strokeWidth="2" />
      {/* transformador */}
      <line x1="160" y1="68" x2="160" y2="82" stroke={C.tinta} strokeWidth="2" />
      <circle cx="160" cy="93" r="11" stroke={C.cobre} strokeWidth="2" />
      <circle cx="160" cy="105" r="11" stroke={C.cobre} strokeWidth="2" />
      {/* barra */}
      <line x1="160" y1="116" x2="160" y2="138" stroke={C.tinta} strokeWidth="2" />
      <line x1="40" y1="144" x2="280" y2="144" stroke={C.senal} strokeWidth="3" />
      {/* salidas */}
      {[60, 160, 260].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="144" x2={x} y2="168" stroke={C.tinta} strokeWidth="2" />
          <rect x={x - 9} y={168} width="18" height="14" stroke={C.tinta} strokeWidth="2" />
          <line x1={x - 9} y1="182" x2={x + 9} y2="168" stroke={C.tinta} strokeWidth="2" />
          <line x1={x} y1="182" x2={x} y2="210" stroke={C.senal} strokeWidth="2" />
          <circle cx={x} cy="216" r="4" fill={C.senal} />
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
        name={<span className={`${display.className} font-bold tracking-wide text-base md:text-lg`}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(12,16,21,0.94)', ink: C.tinta, line: C.line, btnBg: C.senal, btnInk: C.fondo }}
      />

      {/* ── Hero: tablero + esquema unifilar ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, ${C.tinta} 40px)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-14 md:pb-20">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6`} style={{ color: C.senal }}>
              Ingeniería eléctrica · Talca
            </p>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <h1 className={`${display.className} font-bold text-[clamp(3rem,12vw,7rem)] leading-[1] tracking-tight`}>
                  EMINEL
                </h1>
                <p className={`${display.className} mt-3 text-sm md:text-lg font-medium tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.nameFull}
                </p>
                <p className="mt-6 text-sm md:text-base max-w-md leading-relaxed" style={{ color: 'rgba(233,237,242,0.78)' }}>
                  Firma de ingeniería eléctrica con oficina en {BIZ.address}, Talca:
                  proyectos, instalaciones y asesoría técnica para que cada
                  red quede en regla.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} inline-flex items-center gap-2.5 font-semibold text-sm md:text-base tracking-wide px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C21B] tap-44`}
                    style={{ backgroundColor: C.senal, color: C.fondo }}
                  >
                    <PhoneIcon />
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(233,237,242,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C21B] tap-44"
                    style={{ borderColor: 'rgba(233,237,242,0.4)', color: C.tinta }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className={`${mono.className} mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  <span className="flex items-center gap-2">
                    <Stars value={BIZ.rating} color={C.senal} className="w-3.5 h-3.5" />
                    {BIZ.rating.toLocaleString('es-CL')} en Google
                  </span>
                  <span>{BIZ.address}</span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} className="md:col-span-5">
              <figure className="relative border-2 overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                <div className={`${mono.className} flex items-center justify-between px-3 py-2 text-[10px] uppercase tracking-[0.18em] border-b`} style={{ borderColor: C.line, color: C.muted }}>
                  <span>Esquema unifilar</span>
                  <span className="px-2 py-0.5 border" style={{ borderColor: C.cobre, color: C.cobre }}>bosquejo</span>
                </div>
                <Unifilar className="w-full h-auto" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Líneas de trabajo: ramales ── */}
      <section id="lineas" className="border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-[clamp(1.7rem,4.4vw,2.9rem)] leading-[1.1] tracking-tight`}>
                Tres ramales
                <br />
                de trabajo
              </h2>
              <p className="text-xs md:text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
                El campo declarado: ingeniería eléctrica. Los ramales exactos se
                definen con la empresa antes de publicar.
              </p>
            </div>
          </Reveal>
          <ul className="grid md:grid-cols-3 gap-4 md:gap-5">
            {LINEAS.map((l, i) => (
              <Reveal key={l.ramal} delay={i * 100}>
                <li className="h-full border p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.fondo }}>
                  <div className="flex items-center justify-between mb-6">
                    <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.senal }}>
                      {l.ramal}
                    </p>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.senal }} aria-hidden="true" />
                  </div>
                  <h3 className={`${display.className} font-semibold text-lg md:text-xl leading-snug mb-3 tracking-tight`}>
                    {l.nombre}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {l.glosa}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La red del barrio: fotos reales ── */}
      <section id="barrio" className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-4`} style={{ color: C.senal }}>
              El barrio de la oficina
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(1.7rem,4.4vw,2.9rem)] leading-[1.1] tracking-tight max-w-2xl mb-5`}>
              La red que se ve
              <br />
              desde la puerta
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12" style={{ color: C.muted }}>
              Postes, transformadores y cableado aéreo del barrio norte de Talca:
              la misma infraestructura con la que trabaja una ingeniería
              eléctrica como esta.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            <Reveal className="col-span-2 md:col-span-7">
              <figure className="relative aspect-[16/10] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/red-aerea.webp`}
                  alt="Poste con transformador y red eléctrica aérea en el barrio norte de Talca"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(12,16,21,0.85)', color: C.tinta }}>
                  Red aérea · 6 Norte, Talca · foto real
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <figure className="relative h-full min-h-[190px] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/calle-2oriente.webp`}
                  alt="Calle del barrio norte de Talca con líneas eléctricas sobre la vereda"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(12,16,21,0.85)', color: C.tinta }}>
                  Cuadra de 2 Oriente · foto real
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={160} className="md:col-span-7">
              <figure className="relative aspect-[16/9] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/cuadra-5norte.webp`}
                  alt="Esquina de la cuadra en 5 Norte, Talca, con poste y tendido eléctrico"
                  fill
                  sizes="(max-width: 768px) 50vw, 58vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(12,16,21,0.85)', color: C.tinta }}>
                  Esquina del sector · foto real
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={220} className="md:col-span-5">
              <figure className="h-full border p-5 flex flex-col justify-center" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                <p className={`${display.className} font-bold text-[clamp(3rem,8vw,4.6rem)] leading-none`} style={{ color: C.senal }}>
                  {BIZ.rating.toLocaleString('es-CL')}
                </p>
                <Stars value={BIZ.rating} color={C.senal} className="w-4 h-4 mt-3" />
                <p className="mt-3 text-sm leading-relaxed" style={{ color: C.muted }}>
                  Su ficha de Google ya tiene {BIZ.reviews} opinión con nota
                  perfecta — la presencia web formal empieza aquí.
                </p>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <p className={`${mono.className} mt-5 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(233,237,242,0.45)' }}>
              Fotos reales · Google Street View · barrio norte, Talca
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto: bornero de datos ── */}
      <section id="contacto" className="border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-5`} style={{ color: C.senal }}>
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
              <div className="grid grid-cols-[120px_1fr] gap-x-4 py-3.5 border-t border-b" style={{ borderColor: C.line }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: C.muted }}>Teléfono</dt>
                <dd>{BIZ.phoneDisplay}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 font-semibold text-sm tracking-wide px-6 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C21B] tap-44`}
                style={{ backgroundColor: C.senal, color: C.fondo }}
              >
                <PhoneIcon />
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(233,237,242,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C21B] tap-44"
                style={{ borderColor: 'rgba(233,237,242,0.4)', color: C.tinta }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[340px] h-full border-2" style={{ borderColor: C.line, backgroundColor: C.fondo }}>
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
      <footer style={{ backgroundColor: '#080B0F', color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold text-xl md:text-2xl tracking-wide mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(233,237,242,0.6)' }}>
              {BIZ.legalName} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(233,237,242,0.6)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(233,237,242,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.tinta }}>
              Sitiazo
            </a>{' '}
            para {BIZ.nameFull}. Nombre, dirección, teléfono y nota de Google son
            datos públicos reales; las fotos son de su cuadra (Google Street
            View) y el esquema unifilar es un bosquejo de muestra.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.tinta }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.senal} fg={C.fondo} />
    </div>
  )
}
