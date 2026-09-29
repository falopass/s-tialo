import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
  variable: '--font-mono',
})

// La ficha clínica: papel crema, tinta teal de la casa esquina, un solo acento.
const C = {
  paper: '#F5F1E8',
  paperSoft: '#ECE7DA',
  teal: '#0E5B55',
  tealDeep: '#0A423E',
  mint: '#BFE0D6',
  ink: '#17322E',
  muted: '#51655F',
  line: 'rgba(14,91,85,0.22)',
  lineDark: 'rgba(255,255,255,0.16)',
  white: '#FDFDFB',
}

export const metadata: Metadata = demoMetadata({
  slug: 'intermedica-imagenes',
  title: 'Intermédica — centro médico e imágenes en 2 Norte 360, Talca',
  description:
    'Centro médico Intermédica en 2 Norte 360, Talca: pediatría, medicina general, kinesiología, ginecología, imágenes y exámenes. Fonasa e Isapres. Tel (71) 223 1616.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Adentro', href: '#adentro' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

// Especialidades publicadas en su ficha de Doctoralia + lo que nombran las reseñas.
const ESPECIALIDADES = [
  { n: '01', t: 'Pediatría y vacunatorio', d: 'clínica infantil · controles y vacunas' },
  { n: '02', t: 'Medicina general', d: 'consulta ambulatoria · licencias' },
  { n: '03', t: 'Ginecología y obstetricia', d: 'control prenatal · papanicolau' },
  { n: '04', t: 'Kinesiología', d: 'incluye piso pélvico infantil' },
  { n: '05', t: 'Psicología', d: 'atención para niños y adultos' },
  { n: '06', t: 'Fonoaudiología', d: 'lenguaje y desarrollo del habla' },
  { n: '07', t: 'Imágenes y exámenes', d: 'radiología · toma de muestras' },
  { n: '08', t: 'Fonasa e Isapres', d: 'banmédica · colmena · consalud · cruz blanca · nueva masvida' },
]

const RESENAS = [
  {
    t: 'Excelente en todo sentido, médicos muy responsables.',
    a: 'paciente · chilopina',
  },
  {
    t: 'Muy buena atención de los pediatras.',
    a: 'paciente · chilopina',
  },
  {
    t: 'Excelente atención: todo en un mismo lugar, bonos de Fonasa, radiología, exámenes de sangre.',
    a: 'paciente · chilopina',
  },
  {
    t: 'Broncopulmonar muy acertiva. Recomendado.',
    a: 'jael cueto · google',
  },
]

const BOSQUEJOS = [
  { src: `${IMG}/bosquejo-espera.webp`, alt: 'Bosquejo de sala de espera del centro médico', label: 'sala de espera' },
  { src: `${IMG}/bosquejo-box.webp`, alt: 'Bosquejo de box de atención pediátrica', label: 'box de atención' },
  { src: `${IMG}/bosquejo-eco.webp`, alt: 'Bosquejo de sala de imágenes y ecografía', label: 'sala de imágenes' },
]

function Ficha({ n, title, kicker }: { n: string; title: string; kicker?: string }) {
  return (
    <div className="flex items-end gap-3 md:gap-4 mb-8 md:mb-10">
      <span
        className={`${mono.className} text-xs md:text-sm uppercase tracking-widest px-2.5 py-1 border`}
        style={{ color: C.teal, borderColor: C.line }}
      >
        ficha {n}
      </span>
      <div className="flex-1 border-b-2 border-dashed pb-2" style={{ borderColor: C.line }}>
        <h2
          className={`${display.className} font-semibold text-3xl md:text-5xl leading-[1.02] uppercase tracking-tight`}
          style={{ color: C.ink }}
        >
          {title}
        </h2>
        {kicker && (
          <p className={`${mono.className} text-xs md:text-sm mt-1.5`} style={{ color: C.muted }}>
            {kicker}
          </p>
        )}
      </div>
    </div>
  )
}

export default function IntermedicaImagenes() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className="flex items-baseline gap-2">
            <span className={`${display.className} font-bold`}>Intermédica</span>
            <span className={`${mono.className} text-[10px] uppercase tracking-widest hidden sm:inline`}>centro médico</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.teal, btnInk: C.white }}
        fontClass={display.className}
      />

      {/* ── HERO: la clínica de la esquina ───────────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-32 pb-0">
        {/* retícula de ficha médica */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${C.line} 1px, transparent 1px), linear-gradient(90deg, ${C.line} 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
            opacity: 0.35,
            maskImage: 'linear-gradient(180deg, transparent, black 15%, black 70%, transparent)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 70%, transparent)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7 pb-2 md:pb-14">
            <Reveal>
              <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em] mb-4`} style={{ color: C.teal }}>
                centro médico · {BIZ.address}, {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} font-semibold uppercase tracking-tight text-[13.5vw] sm:text-6xl md:text-7xl leading-[0.98]`}
                style={{ color: C.ink }}
              >
                La clínica
                <br />
                de{' '}
                <span className="relative inline-block">
                  <span style={{ color: C.teal }}>la esquina</span>
                  <svg
                    viewBox="0 0 220 14"
                    className="absolute -bottom-2 left-0 w-full h-3"
                    aria-hidden="true"
                  >
                    <path d="M4 10 Q 110 -6 216 8" fill="none" stroke={C.teal} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 md:mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Una casa esquina de 2 Norte convertida en centro médico: pediatría,
                imagenología y especialidades a un par de cuadras del centro de Talca.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-4 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.teal} className="w-4 h-4" />
                <span className={`${mono.className} text-sm`} style={{ color: C.ink }}>
                  3,7 en Google
                </span>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${display.className} tap-44 inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold transition-transform active:scale-95`}
                  style={{ backgroundColor: C.teal, color: C.white }}
                >
                  Llamar · {BIZ.phoneDisplay}
                </a>
                <a
                  href="#contacto"
                  className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-semibold border-2 transition-transform active:scale-95`}
                  style={{ borderColor: C.teal, color: C.teal }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5 relative">
            <Reveal delay={200}>
              {/* arco de la esquina */}
              <div className="relative rounded-t-[180px] md:rounded-t-[220px] overflow-hidden border-2" style={{ borderColor: C.teal }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Fachada real de Intermédica: casa esquina color menta en 2 Norte 360, Talca"
                  width={1150}
                  height={863}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <p
                className={`${mono.className} mt-3 text-xs flex items-center gap-2`}
                style={{ color: C.muted }}
              >
                <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: C.teal }} />
                la casa esquina · foto real de su ficha
              </p>
            </Reveal>
          </div>
        </div>
        {/* cinta de datos */}
        <div className="relative mt-10 md:mt-14 border-y-2 border-dashed" style={{ borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap items-center gap-x-6 gap-y-1.5">
            {[BIZ.address, 'fonasa + isapres', '3,7★ google', BIZ.phoneDisplay].map((d) => (
              <span key={d} className={`${mono.className} text-xs md:text-sm uppercase tracking-wider`} style={{ color: C.muted }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FICHA 01 · ESPECIALIDADES ─────────────────────────── */}
      <section id="especialidades" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Ficha n="01" title="Todo bajo el mismo techo" kicker="especialidades publicadas en su ficha de doctoralia" />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ESPECIALIDADES.map((e, i) => (
            <Reveal key={e.n} delay={i * 50}>
              <div
                className="h-full p-5 border-t-2 bg-white/40"
                style={{ borderColor: C.teal, borderLeft: `1px solid ${C.line}`, borderRight: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}
              >
                <span className={`${mono.className} text-xs`} style={{ color: C.teal }}>
                  campo {e.n}
                </span>
                <h3 className={`${display.className} mt-2 text-lg font-bold leading-snug`} style={{ color: C.ink }}>
                  {e.t}
                </h3>
                <p className={`${mono.className} mt-2 text-xs leading-relaxed`} style={{ color: C.muted }}>
                  {e.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FICHA 02 · ADENTRO (bosquejos marcados) ───────────── */}
      <section id="adentro" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Ficha
              n="02"
              title="Adentro de la casa"
              kicker="el centro no publica fotos de interiores — estas vistas son bosquejos de muestra"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {BOSQUEJOS.map((b, i) => (
              <Reveal key={b.src} delay={i * 90}>
                <figure className="relative">
                  <div className="rounded-t-[140px] overflow-hidden border-2" style={{ borderColor: C.line }}>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={900}
                      height={900}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between gap-3">
                    <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>
                      {b.label}
                    </span>
                    <span
                      className={`${mono.className} text-[10px] uppercase tracking-widest px-2 py-0.5 border`}
                      style={{ color: C.teal, borderColor: C.line }}
                    >
                      bosquejo
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} mt-6 text-xs leading-relaxed max-w-lg`} style={{ color: C.muted }}>
              * bosquejo — se reemplaza por la foto real de cada espacio al activar el sitio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FICHA 03 · LO QUE DICEN ───────────────────────────── */}
      <section id="opiniones" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.tealDeep, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Reveal>
                <span
                  className={`${mono.className} text-xs md:text-sm uppercase tracking-widest px-2.5 py-1 border`}
                  style={{ color: C.mint, borderColor: C.lineDark }}
                >
                  ficha 03
                </span>
                <p className={`${display.className} mt-6 font-semibold text-7xl md:text-8xl leading-none`}>3,7</p>
                <Stars value={BIZ.rating} color={C.mint} className="w-5 h-5 mt-4" />
                <p className={`${mono.className} mt-3 text-xs uppercase tracking-wider`} style={{ color: C.mint }}>
                  nota en google
                </p>
                <h2 className={`${display.className} mt-8 font-semibold text-3xl md:text-4xl uppercase tracking-tight leading-[1.05]`}>
                  Lo que dicen
                  <br />
                  sus pacientes
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 70}>
                  <blockquote
                    className="h-full p-5 rounded-2xl border"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: C.lineDark }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mb-3" fill={C.mint} aria-hidden="true">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v2h5v-5H6.5C6.8 9.6 8.2 8.5 10 8.5V8zm10 0c-3.3 0-6 2.7-6 6v2h5v-5h-2.5c.3-1.4 1.7-2.5 3.5-2.5V8z" />
                    </svg>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {r.t}
                    </p>
                    <footer className={`${mono.className} mt-4 text-xs uppercase tracking-wider`} style={{ color: C.mint }}>
                      — {r.a}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FICHA 04 · CÓMO LLEGAR (receta) ───────────────────── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Ficha n="04" title="Cómo llegar" kicker={`${BIZ.corner} · ${BIZ.address} · ${BIZ.city}`} />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* la receta */}
          <Reveal>
            <div className="h-full border-2 border-dashed p-6 md:p-8" style={{ borderColor: C.teal, backgroundColor: C.white }}>
              <p className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.teal }}>
                ℞ · datos del centro
              </p>
              <ul className="mt-5 divide-y divide-dashed" style={{ borderColor: C.line }}>
                {[
                  ['dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['teléfono', BIZ.phoneDisplay],
                  ['horario', '9:00–19:00 · publicado en su ficha'],
                  ['previsiones', 'fonasa + isapres'],
                ].map(([k, v]) => (
                  <li key={k} className="py-3.5 flex flex-wrap items-baseline gap-x-4" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-wider`} style={{ color: C.teal }}>
                      {k}
                    </span>
                    <span className={`${display.className} text-base md:text-lg font-semibold`} style={{ color: C.ink }}>
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-semibold transition-transform active:scale-95`}
                  style={{ backgroundColor: C.teal, color: C.white }}
                >
                  Llamar ahora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-semibold border-2 transition-transform active:scale-95`}
                  style={{ borderColor: C.teal, color: C.teal }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
          {/* el mapa */}
          <Reveal delay={120}>
            <div className="h-full min-h-[280px] rounded-2xl overflow-hidden border-2" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[280px] border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CIERRE ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-t-2 border-dashed" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-4`} style={{ color: C.teal }}>
              {BIZ.address} · {BIZ.city}
            </p>
            <h2 className={`${display.className} font-semibold uppercase tracking-tight text-4xl md:text-6xl leading-[1]`} style={{ color: C.ink }}>
              Atención de barrio,
              <br />
              <span style={{ color: C.teal }}>en serio.</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} tap-44 inline-flex items-center px-7 py-3 rounded-full text-base font-semibold transition-transform active:scale-95`}
                style={{ backgroundColor: C.teal, color: C.white }}
              >
                Llamar · {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.tealDeep, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t-2 border-dashed" style={{ borderColor: C.lineDark }}>
          <div>
            <p className={`${display.className} text-xl md:text-2xl font-semibold mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, servicios, horarios y las imágenes marcadas
            como bosquejo son de muestra; el nombre, la dirección, el teléfono,
            la nota de Google y las reseñas citadas son datos públicos reales.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.teal} />
    </div>
  )
}
