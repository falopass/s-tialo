import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-mono',
})

// La óptica de siempre del centro: madera del letrero, ámbar cálido, papel crema.
const C = {
  paper: '#F6F1E6',
  paperSoft: '#ECE4D3',
  ink: '#17130E',
  inkSoft: '#2B2318',
  amber: '#B9854A',
  amberDeep: '#7A5225',
  muted: '#6E6353',
  line: 'rgba(23,19,14,0.2)',
  lineDark: 'rgba(255,255,255,0.16)',
  white: '#FCFAF4',
}

export const metadata: Metadata = demoMetadata({
  slug: 'optica-del-maule',
  title: 'Óptica del Maule — óptica del centro en 6 Oriente 1132, Talca',
  description:
    'Óptica del Maule en 6 Oriente 1132 Local 1, Talca. Armazones, cristales y atención de la óptica de siempre del centro. Tel (71) 222 1169.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'La óptica', href: '#optica' },
  { label: 'Cómo llegar', href: '#contacto' },
]

// Líneas de la tabla optométrica del hero: decrecen como el test de letras.
const TABLA = [
  { t: 'ÓPTICA', size: 'text-[16vw] md:text-[8.5rem]', tracking: 'tracking-tight' },
  { t: 'DEL MAULE', size: 'text-[9.5vw] md:text-[4.6rem]', tracking: 'tracking-tight' },
  { t: 'la óptica de siempre del centro', size: 'text-[5vw] md:text-[1.9rem]', tracking: 'tracking-normal' },
  { t: '6 oriente 1132 · local 1', size: 'text-[3.4vw] md:text-base', tracking: 'tracking-[0.3em]' },
  { t: '(71) 222 1169 · nota 5,0 en google', size: 'text-[2.9vw] md:text-sm', tracking: 'tracking-[0.22em]' },
]

const VITRINA = [
  {
    src: `${IMG}/bosquejo-interior.webp`,
    alt: 'Bosquejo de la vitrina interior de la óptica con armazones en vitrinas de madera',
    label: 'la vitrina',
  },
  {
    src: `${IMG}/bosquejo-lentes.webp`,
    alt: 'Bosquejo de armazones de anteojos sobre mesón de madera',
    label: 'armazones',
  },
  {
    src: `${IMG}/bosquejo-examen.webp`,
    alt: 'Bosquejo de sillón de examen optométrico con foróptero',
    label: 'el examen',
  },
]

const SERVICIOS = [
  { n: '01', t: 'Armazones ópticos', d: 'monturas para el día a día, del clásico al moderno' },
  { n: '02', t: 'Lentes de sol', d: 'armazones con filtro UV y cristales con graduación' },
  { n: '03', t: 'Cristales y montaje', d: 'cambio de micas, adaptación y calce' },
  { n: '04', t: 'Convenio PDI', d: 'óptica convenio para el personal de la PDI' },
]

function BordeLente({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  // Doble aro tipo armazón metálico.
  return (
    <div className={`rounded-[2.5rem] border-2 p-[5px] ${className}`} style={{ borderColor: C.amber }}>
      <div className="rounded-[2rem] border overflow-hidden" style={{ borderColor: C.line }}>
        {children}
      </div>
    </div>
  )
}

export default function OpticaDelMaule() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-bold uppercase tracking-wide`}>
            Óptica <span style={{ color: C.amberDeep }}>del Maule</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.white }}
      />

      {/* ── HERO: la tabla optométrica ───────────────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16">
        {/* textura de papel */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${C.line} 1px, transparent 1px)`,
            backgroundSize: '26px 26px',
            opacity: 0.4,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              {/* test de letras: cada línea más chica */}
              <Reveal>
                <div role="img" aria-label="Óptica del Maule, la óptica de siempre del centro. 6 Oriente 1132, Local 1. Teléfono 71 222 1169, nota 5,0 en Google." className="select-none">
                  {TABLA.map((l, i) => (
                    <p
                      key={l.t}
                      className={`${i >= 3 ? mono.className : display.className} font-bold uppercase leading-[0.95] ${l.size} ${l.tracking}`}
                      style={{ color: i >= 3 ? C.muted : C.ink, paddingLeft: i === 1 ? '0.35em' : i === 2 ? '0.9em' : i === 3 ? '1.6em' : i === 4 ? '2.6em' : 0 }}
                    >
                      {l.t}
                    </p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  La óptica del pasaje, con el letrero de madera de siempre:
                  armazones, cristales y atención de mostrador en el centro de Talca.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-4 flex items-center gap-3">
                  <Stars value={BIZ.rating} color={C.amberDeep} className="w-4 h-4" />
                  <span className={`${mono.className} text-sm`} style={{ color: C.ink }}>
                    5,0 · nota perfecta en Google
                  </span>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold uppercase tracking-wide transition-transform active:scale-95`}
                    style={{ backgroundColor: C.ink, color: C.white }}
                  >
                    Llamar · {BIZ.phoneDisplay}
                  </a>
                  <a
                    href="#contacto"
                    className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold uppercase tracking-wide border-2 transition-transform active:scale-95`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={200}>
                <BordeLente>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada real de Óptica del Maule: letrero de madera sobre la puerta junto a la galería de 6 Oriente, Talca"
                    width={1024}
                    height={658}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </BordeLente>
                <p className={`${mono.className} mt-3 text-xs flex items-center gap-2`} style={{ color: C.muted }}>
                  <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: C.amber }} />
                  el local del pasaje · street view de su cuadra
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA VITRINA (bosquejos marcados) ──────────────────── */}
      <section id="vitrina" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-10">
            <div className="md:col-span-7">
              <Reveal>
                <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.25em] mb-3`} style={{ color: C.amberDeep }}>
                  detrás del mesón
                </p>
                <h2 className={`${display.className} font-bold uppercase tracking-tight text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
                  La vitrina
                  <br />
                  de la óptica
                </h2>
              </Reveal>
            </div>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                La óptica no publica fotos de su interior: estas vistas son
                bosquejos de muestra — al activar el sitio se reemplazan por las
                fotos reales de la vitrina.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {VITRINA.map((b, i) => (
              <Reveal key={b.src} delay={i * 90}>
                <figure>
                  <BordeLente>
                    <Image src={b.src} alt={b.alt} width={900} height={900} className="w-full h-auto object-cover" />
                  </BordeLente>
                  <figcaption className="mt-3 flex items-center justify-between gap-3">
                    <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>
                      {b.label}
                    </span>
                    <span
                      className={`${mono.className} text-[10px] uppercase tracking-widest px-2 py-0.5 border`}
                      style={{ color: C.amberDeep, borderColor: C.amber }}
                    >
                      bosquejo
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA ÓPTICA: qué hay en el mostrador ────────────────── */}
      <section id="optica" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.25em] mb-3`} style={{ color: C.amberDeep }}>
                mostrador
              </p>
              <h2 className={`${display.className} font-bold uppercase tracking-tight text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.ink }}>
                Lo que se ve
                <br />
                bien, se nota
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: C.muted }}>
                Atención directa en el local del pasaje: elegir armazón, mandar
                a montar cristales o ajustar los que ya se usan a diario.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden">
                <BordeLente className="rounded-2xl" >
                  <Image
                    src={`${IMG}/calle.webp`}
                    alt="Calle arbolada de 6 Oriente en el centro de Talca, donde está la óptica"
                    width={1024}
                    height={658}
                    className="w-full h-auto object-cover"
                  />
                </BordeLente>
                <p className={`${mono.className} mt-3 text-xs`} style={{ color: C.muted }}>
                  6 oriente, la cuadra de siempre · vista real
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <div className="divide-y-2 divide-dashed" style={{ borderColor: C.line }}>
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="py-5 md:py-6 grid grid-cols-[auto_1fr] gap-x-5 items-baseline" style={{ borderColor: C.line }}>
                    <span
                      className={`${mono.className} text-sm px-2 py-0.5 border rounded-full`}
                      style={{ color: C.amberDeep, borderColor: C.amber }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h3 className={`${display.className} text-xl md:text-2xl font-bold uppercase tracking-wide`} style={{ color: C.ink }}>
                        {s.t}
                      </h3>
                      <p className={`${mono.className} mt-1.5 text-xs md:text-sm`} style={{ color: C.muted }}>
                        {s.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ───────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.ink, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.25em] mb-3`} style={{ color: C.amber }}>
              {BIZ.address} · {BIZ.city}
            </p>
            <h2 className={`${display.className} font-bold uppercase tracking-tight text-4xl md:text-6xl leading-[0.95] mb-10`}>
              En el pasaje
              <br />
              <span style={{ color: C.amber }}>del centro</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div className="h-full p-6 md:p-8 rounded-3xl border-2 border-dashed" style={{ borderColor: C.amber, backgroundColor: C.inkSoft }}>
                <ul className="space-y-4">
                  {[
                    ['dirección', `${BIZ.address}, ${BIZ.city}`],
                    ['teléfono', BIZ.phoneDisplay],
                    ['horario', '10:00–18:30 · publicado en su ficha'],
                    ['nota', '5,0 en google'],
                  ].map(([k, v]) => (
                    <li key={k} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider`} style={{ color: C.amber }}>
                        {k}
                      </span>
                      <span className={`${display.className} text-base md:text-lg font-bold uppercase tracking-wide`}>
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold uppercase tracking-wide transition-transform active:scale-95`}
                    style={{ backgroundColor: C.amber, color: C.ink }}
                  >
                    Llamar ahora
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold uppercase tracking-wide border-2 transition-transform active:scale-95`}
                    style={{ borderColor: C.amber, color: C.amber }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full min-h-[280px] rounded-3xl overflow-hidden border-2" style={{ borderColor: C.amber }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  className="w-full h-full min-h-[280px] border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CIERRE ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center">
              <p className={`${mono.className} text-xs uppercase tracking-[0.3em] mb-4`} style={{ color: C.amberDeep }}>
                desde 6 oriente 1132
              </p>
              <h2 className={`${display.className} font-bold uppercase tracking-tight text-5xl md:text-7xl leading-[0.92]`} style={{ color: C.ink }}>
                Ver bien
                <br />
                <span style={{ color: C.amberDeep }}>empieza aquí.</span>
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={CALL_LINK}
                  className={`${display.className} tap-44 inline-flex items-center px-7 py-3 rounded-full text-base font-bold uppercase tracking-wide transition-transform active:scale-95`}
                  style={{ backgroundColor: C.ink, color: C.white }}
                >
                  Llamar · {BIZ.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.ink, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t-2 border-dashed" style={{ borderColor: C.lineDark }}>
          <div>
            <p className={`${display.className} text-xl md:text-2xl font-bold uppercase tracking-wide mb-1`}>{BIZ.name}</p>
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
            como bosquejo son de muestra; el nombre, la dirección, el teléfono y
            la nota de Google son datos públicos reales, y la fachada es la
            vista real de Street View.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.amber} fg={C.ink} />
    </div>
  )
}
