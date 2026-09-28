import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SERVICIOS, PASOS, RESENAS, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * La libreta del veterinario: una consulta de barrio contada como una ficha
 * de papel — renglones rayados, margen roja, sellos y anotaciones al margen.
 * Paleta de papel crema, tinta y verde hoja de nogal.
 */
const C = {
  paper: '#FBF5E6',
  paperDeep: '#F1E8D0',
  ink: '#2F3026',
  muted: '#5F5B4A',
  red: '#A63A2A',
  leaf: '#3E5A32',
  dark: '#24311F',
  line: 'rgba(47,48,38,0.22)',
  ruled: 'rgba(62,90,50,0.28)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A63A2A]'

/** Hoja rayada con margen roja, la base de toda la página. */
const ruledPaper = {
  backgroundColor: C.paper,
  backgroundImage:
    'repeating-linear-gradient(180deg, transparent 0px, transparent 30px, rgba(62,90,50,0.18) 30px, rgba(62,90,50,0.18) 31px)',
} as const

/** Rama de nogal — la marca de la consulta. */
function Rama({ color = C.leaf, className = 'w-8 h-8' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 30 C16 20 16 10 16 4" />
      <path d="M16 22 C11 20 7 16 6 10 C12 12 15 15 16 19" />
      <path d="M16 18 C21 16 25 12 26 6 C20 8 17 11 16 15" />
      <path d="M16 26 C12 25 9 22 8 18" />
      <ellipse cx="19" cy="11" rx="3" ry="2.2" transform="rotate(-18 19 11)" />
    </svg>
  )
}

function Huella({ color = C.red, className = 'w-5 h-5' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="6.2" cy="9" rx="2.1" ry="2.7" />
      <ellipse cx="10.8" cy="6.2" rx="2.1" ry="2.7" />
      <ellipse cx="15.6" cy="7.4" rx="2.1" ry="2.7" />
      <ellipse cx="19" cy="11" rx="1.9" ry="2.4" />
      <path d="M12 11.5c-3.4.4-5.5 3.2-5.2 5.6.2 1.7 1.7 2.7 3.4 2.4 1-.2 1.9-.4 2.8.1 1.4.7 3.2.3 4-1 .9-1.5.6-3.6-.8-5.1-1.2-1.2-2.7-2.1-4.2-2Z" />
    </svg>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] shrink-0 mt-0.5" fill="none" stroke={C.leaf} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 12.5 9 18.5 20.5 5.5" />
    </svg>
  )
}

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5 flex items-center gap-3`} style={{ color: light ? '#D8CE9F' : C.red }}>
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Sello circular, como el timbre de una ficha. */
function Sello({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center justify-center rounded-full border-2 border-dashed px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em]`}
      style={{ borderColor: C.red, color: C.red, transform: 'rotate(-3deg)' }}
    >
      {children}
    </span>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'nogal-consulta-veterinaria',
  title: 'Nogal consulta veterinaria — Veterinario en Maipú 1702, Molina',
  description:
    'Consulta veterinaria en Maipú 1702, Molina. 4,5 de 5 en 57 reseñas reales: vacunas, consultas y esterilizaciones con vocación. Agende por WhatsApp.',
  image: `${IMG}/local.webp`,
})

const NAV_LINKS = [
  { label: 'Prestaciones', href: '#prestaciones' },
  { label: 'La consulta', href: '#consulta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

export default function NogalConsultaVeterinariaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <Rama className="w-7 h-7" color={C.leaf} />
            <span className={display.className}>Nogal veterinaria</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(251,245,230,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.leaf,
          btnInk: C.paper,
        }}
      />

      {/* ── Portada: la ficha de la consulta ── */}
      <section id="inicio" className="relative overflow-hidden" style={ruledPaper}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <Label>Ficha N° 057 · Veterinario · Molina</Label>
              <h1 className={`${display.className} text-[clamp(2.1rem,6vw,3.6rem)] leading-[1.08] font-semibold mb-6`}>
                El veterinario que atiende
                <br />
                a su mascota <em className="font-medium" style={{ color: C.leaf }}>por su nombre</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
                En Maipú 1702, Molina, la consulta Nogal atiende perros, gatos
                y mascotas pequeñas con la calma de un médico de barrio:
                las {BIZ.reviews} reseñas de su ficha hablan de vocación.
              </p>
              <div className="flex flex-wrap gap-3 mb-9">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.leaf, color: C.paper, boxShadow: `5px 5px 0 ${C.dark}` }}
                >
                  Agendar hora por WhatsApp
                </a>
                <a
                  href="#prestaciones"
                  className={`text-sm font-semibold px-7 py-3.5 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver prestaciones
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 text-sm font-semibold ${focusRing} tap-44`}
                style={{ color: C.ink }}
              >
                <Stars value={BIZ.rating} color={C.red} className="w-4 h-4" />
                {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
                <span aria-hidden="true" style={{ color: C.red }}>→</span>
              </a>
            </Reveal>
            <Reveal delay={140}>
              {/* La ficha de ingreso: campos como formulario de consulta */}
              <div
                className="relative p-7 md:p-8"
                style={{
                  backgroundColor: '#FFFDF4',
                  border: `1.5px solid ${C.ink}`,
                  boxShadow: `10px 10px 0 ${C.paperDeep}`,
                  backgroundImage:
                    'repeating-linear-gradient(180deg, transparent 0px, transparent 32px, rgba(62,90,50,0.16) 32px, rgba(62,90,50,0.16) 33px), linear-gradient(90deg, transparent 44px, rgba(166,58,42,0.35) 44px, rgba(166,58,42,0.35) 45.5px, transparent 45.5px)',
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
                    Ficha de paciente
                  </p>
                  <Sello>{BIZ.ratingLabel} ★ Google</Sello>
                </div>
                {[
                  ['Consulta', 'Nogal — veterinaria y consultas'],
                  ['Atiende', 'perros, gatos y mascotas menores'],
                  ['Lugar', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Registro', `${BIZ.reviews} reseñas en la ficha`],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[110px_1fr] gap-3 py-[13px] items-baseline">
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.red }}>
                      {k}
                    </dt>
                    <dd className={`${display.className} text-base md:text-lg leading-snug`}>{v}</dd>
                  </div>
                ))}
                <div className="mt-6 pt-5 border-t border-dashed flex items-center gap-3" style={{ borderColor: C.line }}>
                  <Huella />
                  <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                    “Vacuna muy suave, mis peluditos nunca se quejan” — reseña real en Google.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Prestaciones: registro con check ── */}
      <section id="prestaciones" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: '#FFFDF4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
            <Reveal>
              <Label>Registro de prestaciones</Label>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold mb-5`}>
                Lo que se atiende
                <br />
                <span style={{ color: C.leaf }}>en Maipú 1702</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm mb-6" style={{ color: C.muted }}>
                Las prestaciones de esta lista salen de la propia ficha y de
                lo que cuentan las reseñas: vacunas, consultas,
                esterilizaciones — y hasta cuyes.
              </p>
              <Rama className="w-12 h-12" />
            </Reveal>
            <ul className="divide-y" style={{ borderTop: `1px solid ${C.line}` }}>
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.n} delay={i * 90}>
                  <li className="flex gap-5 py-6" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-xs pt-1.5 shrink-0`} style={{ color: C.red }} aria-hidden="true">
                      {s.n}
                    </span>
                    <Check />
                    <div>
                      <h3 className={`${display.className} text-xl md:text-2xl font-semibold leading-tight mb-1.5`}>
                        {s.name}
                      </h3>
                      <p className="text-sm leading-relaxed max-w-xl" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── La consulta: del mensaje al control ── */}
      <section id="consulta" className="scroll-mt-20" style={{ backgroundColor: C.dark, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label light>Cómo es una visita</Label>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold mb-12 md:mb-16`}>
              Del primer mensaje
              <br />
              <span style={{ color: '#B9CF9C' }}>al control de su mascota</span>
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <li className="border-t-2 pt-5" style={{ borderColor: 'rgba(251,245,230,0.4)' }}>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.3em] block mb-3`} style={{ color: '#B9CF9C' }}>
                    {p.n}
                  </span>
                  <h3 className={`${display.className} text-xl md:text-2xl font-semibold leading-tight mb-2.5`}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,245,230,0.75)' }}>{p.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reseñas: anotaciones al margen ── */}
      <section id="resenas" className="scroll-mt-20" style={ruledPaper}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Anotaciones al margen</Label>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-14 items-start mb-12">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold`}>
                “Se ve que ama
                <br />
                a los animales”
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md lg:justify-self-end" style={{ color: C.muted }}>
                Así lo escriben en la ficha de Google: {BIZ.reviews} reseñas,
                nota {BIZ.ratingLabel} de 5. Estas son algunas, con el nombre
                de quienes las firmaron.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 100}>
                <figure
                  className="h-full p-6 md:p-7 border-l-[3px]"
                  style={{ backgroundColor: '#FFFDF4', borderColor: C.red, boxShadow: `6px 6px 0 ${C.paperDeep}` }}
                >
                  <Stars value={5} color={C.red} className="w-[14px] h-[14px] mb-4" />
                  <blockquote className={`${display.className} italic text-base md:text-lg leading-relaxed`}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-4`} style={{ color: C.muted }}>
                    {r.author} · {r.cuando} · reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: '#FFFDF4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Ubicación</Label>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
              <div>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold mb-6`}>
                  En plena calle Maipú,
                  <br />
                  <span style={{ color: C.leaf }}>centro de Molina</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                  La consulta queda en {BIZ.address}, a pasos de la plaza.
                  La ficha aún no publica horario — escriba por WhatsApp
                  para agendar.
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 text-sm">
                  {[
                    ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                    ['WhatsApp', BIZ.phoneDisplay],
                    ['Nota en Google', `${BIZ.ratingLabel} de 5`],
                    ['Comuna', `${BIZ.city}, Maule`],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t pt-3" style={{ borderColor: C.line }}>
                      <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.red }}>{k}</dt>
                      <dd className="font-semibold leading-snug">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-sm font-semibold px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.leaf, color: C.paper, boxShadow: `4px 4px 0 ${C.dark}` }}
                >
                  Agendar por WhatsApp
                </a>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.ink }}>
                    <Image
                      src={`${IMG}/local.webp`}
                      alt="Calle Maipú a la altura del 1702 en Molina, donde está la consulta veterinaria Nogal — registro real de la ficha"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                    <span className={`${mono.className} absolute bottom-2 left-2 text-[9px] uppercase tracking-[0.16em] px-2 py-1`} style={{ backgroundColor: 'rgba(36,49,31,0.9)', color: C.paper }}>
                      foto real · ficha de Google
                    </span>
                  </div>
                  {/* La ficha no publica fotos del interior: escena marcada como bosquejo */}
                  <div
                    className="relative aspect-[4/3] border flex flex-col items-center justify-center gap-2 p-4"
                    style={{ borderColor: C.ink, backgroundColor: C.paper }}
                  >
                    <div className="absolute inset-2 border-2 border-dashed" style={{ borderColor: 'rgba(47,48,38,0.2)' }} aria-hidden="true" />
                    <Huella className="w-9 h-9" color={C.leaf} />
                    <span className={`${mono.className} text-[9px] uppercase tracking-[0.2em] text-center`} style={{ color: C.muted }}>
                      bosquejo · la consulta
                      <br />
                      por dentro
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden border min-h-[300px]" style={{ borderColor: C.ink }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[300px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.dark, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            <Rama className="w-9 h-9" color="#B9CF9C" />
            <div>
              <p className={`${display.className} text-lg leading-tight font-semibold`}>{BIZ.name}</p>
              <address className="not-italic text-xs" style={{ color: 'rgba(251,245,230,0.7)' }}>
                {BIZ.address} · {BIZ.city}, Maule · {BIZ.phoneDisplay}
              </address>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(251,245,230,0.7)' }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p
          className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed border-t"
          style={{ color: 'rgba(251,245,230,0.7)', borderColor: 'rgba(251,245,230,0.14)' }}
        >
          Sitio de ejemplo preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#B9CF9C' }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}. Dirección, teléfono, nota y reseñas son datos reales de su
          ficha de Google; la foto de la cuadra es el registro real de la ficha y la
          escena del interior está marcada como bosquejo porque la ficha no publica
          fotos propias.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#B9CF9C' }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
