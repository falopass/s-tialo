import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const IMG = '/demos/jard-n-lucerito'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  papel: '#FAF3E3',
  papel2: '#F1E5C8',
  crayon: '#2E7D5B',
  crayonOsc: '#20573F',
  sol: '#F0B32E',
  tinta: '#26282E',
  tinta2: '#5C5A50',
  linea: 'rgba(38,40,46,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jard-n-lucerito',
  title: 'Jardín Lucerito — jardín infantil y sala cuna en Talca',
  description:
    'Jardín infantil y sala cuna JUNJI en Población Carlos Trupp, Talca. De 85 días a 3 años 11 meses, con sello medioambientalista.',
  image: `${IMG}/comunidad.webp`,
})

const NAV_LINKS = [
  { label: 'El jardín', href: '#jardin' },
  { label: 'Actividades', href: '#actividades' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const NIVELES = [
  { tag: '85 días', txt: 'lactantes' },
  { tag: 'Sala cuna', txt: '1–2 años' },
  { tag: 'Nivel medio', txt: '2–3 años' },
  { tag: '3 a 11 m', txt: 'nivel mayor' },
]

const ACTIVIDADES = [
  {
    icon: 'sombra',
    title: 'Teatro de sombras',
    txt: 'Cuentos con siluetas y luz: lenguaje e imaginación desde la sala cuna.',
  },
  {
    icon: 'recicla',
    title: 'Reciclando en familia',
    txt: 'Jornadas donde las familias traen material y aprenden a reutilizarlo.',
  },
  {
    icon: 'planta',
    title: 'Plantemos una planta',
    txt: 'Huerto y maceteros propios: por eso tienen sello medioambientalista.',
  },
]

const RESENAS = [
  {
    nombre: 'Andrés Cáceres',
    texto: 'Muy agradable de pequeño y comida rica.',
  },
  {
    nombre: 'Pamela González',
    texto: 'Buena experiencia, mi hija se entretiene y se está acostumbrando de a poquito.',
  },
  {
    nombre: 'Ignacio Díaz',
    texto: 'Muy lindo, gente amable.',
  },
  {
    nombre: 'Kimberling Contreras',
    texto: 'Jardín infantil y sala cuna excelente servicio.',
  },
]

const ICONOS: Record<string, React.ReactNode> = {
  sombra: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="11" rx="1" />
      <path d="M8 12.5 c0 -2.2 1.8 -4 4 -4 s4 1.8 4 4" />
      <path d="M12 8.5 v-2" />
      <path d="M5 20 h14" />
    </g>
  ),
  recicla: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 8.5 L9.5 4 L12.5 8.5" />
      <path d="M9.5 4 h5 L17 9" />
      <path d="M17 9 l-2.5 4.5" />
      <path d="M14.5 13.5 h-5 L7 9" />
      <path d="M7 9 l2.5 4.5" />
    </g>
  ),
  planta: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20 v-8" />
      <path d="M12 12 c0 -4 -3 -6 -7 -6 0 4 3 6 7 6 Z" />
      <path d="M12 12 c0 -4 3 -6 7 -6 0 4 -3 6 -7 6 Z" />
      <path d="M8 20 h8" />
    </g>
  ),
}

function SolPapel({ size = 44 }: { size?: number }) {
  // Sol de papel recortado: símbolo del "lucerito".
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <circle cx="24" cy="24" r="11" fill={C.sol} />
      <g stroke={C.sol} strokeWidth="3" strokeLinecap="round">
        <path d="M24 4 v5 M24 39 v5 M4 24 h5 M39 24 h5 M10 10 l3.5 3.5 M34.5 34.5 L38 38 M38 10 l-3.5 3.5 M13.5 34.5 L10 38" />
      </g>
    </svg>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <SolPapel size={22} />
            {BIZ.short}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(250,243,227,0.94)', ink: C.tinta, line: C.linea, btnBg: C.crayon, btnInk: '#fff' }}
      />

      {/* ── Hero de papel ── */}
      <section id="inicio" className="relative pt-32 md:pt-40 pb-14 md:pb-20 overflow-hidden">
        <div
          className="absolute -top-10 -right-10 w-40 md:w-56 rotate-12 opacity-90"
          aria-hidden="true"
        >
          <SolPapel size={220} />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} inline-block text-[10px] md:text-xs tracking-[0.16em] uppercase px-3 py-2 mb-6 border-2 border-dashed`} style={{ borderColor: C.crayon, color: C.crayonOsc }}>
              Jardín infantil y sala cuna · JUNJI · Talca
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} leading-[0.98] text-[clamp(2.9rem,10vw,5.5rem)]`}>
              La lucecita de<br />
              <em className="not-italic" style={{ color: C.crayon }}>Carlos Trupp</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.tinta2 }}>
              Jardín Lucerito recibe a niños y niñas de 85 días a 3 años 11 meses en la
              Población Carlos Trupp. Jardín público JUNJI, con sello medioambientalista.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-5 flex items-center gap-2.5" style={{ color: C.crayonOsc }}>
              <Stars value={BIZ.rating} color={C.sol} />
              <span className={`${mono.className} text-sm`}>{BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google</span>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold px-7 py-3.5 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.crayon, color: '#fff' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#ubicacion"
                className="text-sm font-bold px-7 py-3.5 border-2 transition-colors hover:bg-black/5 tap-44"
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Foto comunidad ── */}
      <section id="jardin" className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <figure className="border-4" style={{ borderColor: C.tinta, backgroundColor: '#fff', transform: 'rotate(-0.6deg)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- foto real optimizada en public/ */}
            <img
              src={`${IMG}/comunidad.webp`}
              alt="Niños, niñas y equipo del Jardín Lucerito bajo el patio techado"
              className="w-full aspect-[4/3] object-cover"
            />
            <figcaption className={`${mono.className} flex items-center gap-2 px-4 py-3 text-[10px] md:text-xs tracking-[0.12em] uppercase`} style={{ color: C.tinta2 }}>
              <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.sol }} aria-hidden="true" />
              La comunidad Lucerito, en su patio techado
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Niveles ── */}
      <section style={{ backgroundColor: C.crayon, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-3`} style={{ color: C.sol }}>
              De sala cuna a nivel mayor
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-8`}>
              Acompaña desde los 85 días
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {NIVELES.map((n, i) => (
              <Reveal key={n.tag} delay={i * 80}>
                <div className="border-2 border-dashed px-4 py-5 md:px-6" style={{ borderColor: 'rgba(250,243,227,0.55)' }}>
                  <p className={`${display.className} text-xl md:text-2xl`}>{n.tag}</p>
                  <p className={`${mono.className} mt-1.5 text-[10px] md:text-xs uppercase tracking-[0.12em]`} style={{ color: 'rgba(250,243,227,0.8)' }}>
                    {n.txt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} mt-8 text-xs leading-relaxed`} style={{ color: 'rgba(250,243,227,0.85)' }}>
              Jardín público gratuito de la Junta Nacional de Jardines Infantiles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Actividades ── */}
      <section id="actividades" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-3`} style={{ color: C.crayonOsc }}>
            Aprender haciendo
          </p>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-4`}>
            Sus actividades de siempre
          </h2>
          <p className="text-[15px] md:text-base leading-[1.75] max-w-2xl mb-10" style={{ color: C.tinta2 }}>
            Del proyecto educativo del jardín, publicado en su ficha ambiental: tres clásicos
            que repiten año a año.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {ACTIVIDADES.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <article className="h-full border-2 p-6" style={{ borderColor: C.tinta, backgroundColor: C.papel2 }}>
                <div className="w-11 h-11 mb-4 flex items-center justify-center" style={{ color: C.crayon }}>
                  <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden="true">
                    {ICONOS[a.icon]}
                  </svg>
                </div>
                <h3 className={`${display.className} text-xl mb-2`}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.tinta2 }}>{a.txt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Bosquejo de la sala cuna ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <div
            className="relative border-2 border-dashed overflow-hidden"
            style={{ borderColor: C.crayon, backgroundColor: C.papel2 }}
          >
            <span
              className={`${mono.className} absolute top-3 right-3 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1.5 z-10`}
              style={{ backgroundColor: C.tinta, color: C.papel }}
            >
              Bosquejo
            </span>
            <div className="grid md:grid-cols-[1fr_1.4fr] items-center gap-6 px-5 md:px-10 py-8 md:py-12">
              <div>
                <h2 className={`${display.className} text-2xl md:text-4xl leading-tight mb-3`}>
                  La sala cuna, en bosquejo
                </h2>
                <p className="text-sm md:text-[15px] leading-[1.75]" style={{ color: C.tinta2 }}>
                  Escena ilustrativa mientras el jardín comparte fotos reales de sus salas:
                  colchonetas, maceteros y mucha luz.
                </p>
              </div>
              {/* Escena CSS marcada como bosquejo: no hay foto real de la sala */}
              <div className="relative h-40 md:h-52" aria-hidden="true">
                <div className="absolute bottom-0 inset-x-0 h-16" style={{ backgroundColor: C.crayon, opacity: 0.25 }} />
                <div className="absolute bottom-4 left-6 w-10 h-14 rounded-t-full" style={{ backgroundColor: C.sol }} />
                <div className="absolute bottom-4 left-16 w-10 h-14 rounded-t-full" style={{ backgroundColor: C.sol, opacity: 0.75 }} />
                <div className="absolute bottom-4 right-8 w-2 h-16" style={{ backgroundColor: C.crayonOsc }} />
                <div className="absolute bottom-[68px] right-0 w-24 h-10" style={{ backgroundColor: C.crayon, borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
                <div className="absolute top-3 left-10">
                  <SolPapel size={40} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-3`} style={{ color: C.crayonOsc }}>
                  Reseñas reales de Google Maps
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`}>
                  Lo que dicen las familias
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <p className={`${display.className} text-4xl md:text-5xl`}>{BIZ.ratingLabel}</p>
                <div>
                  <Stars value={BIZ.rating} color={C.sol} className="w-4 h-4" />
                  <p className={`${mono.className} text-[10px] mt-1`} style={{ color: C.tinta2 }}>{BIZ.reviews} reseñas</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <blockquote className="h-full border-2 p-5 flex flex-col" style={{ borderColor: C.tinta, backgroundColor: C.papel }}>
                  <Stars value={5} color={C.sol} className="w-3.5 h-3.5" />
                  <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: C.tinta }}>
                    “{r.texto}”
                  </p>
                  <footer className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.1em]`} style={{ color: C.tinta2 }}>
                    {r.nombre}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-3`} style={{ color: C.crayonOsc }}>
                Dónde estamos
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-5`}>
                En plena Población Carlos Trupp
              </h2>
              <dl className="space-y-4">
                <div>
                  <dt className={`${mono.className} text-[10px] tracking-[0.18em] uppercase mb-1`} style={{ color: C.tinta2 }}>Dirección</dt>
                  <dd className="text-[15px] leading-relaxed">{BIZ.address}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] tracking-[0.18em] uppercase mb-1`} style={{ color: C.tinta2 }}>Teléfono</dt>
                  <dd>
                    <a href={`tel:${BIZ.phoneTel}`} className="text-[15px] underline underline-offset-4 tap-44" style={{ color: C.tinta }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <figure className="mt-7 border-4" style={{ borderColor: C.tinta, backgroundColor: '#fff', transform: 'rotate(0.5deg)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- foto real optimizada en public/ */}
                <img
                  src={`${IMG}/fachada.webp`}
                  alt="Calle frente al Jardín Lucerito en la Población Carlos Trupp"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <div className="border-2 overflow-hidden" style={{ borderColor: C.tinta }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full aspect-[4/3] block"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold px-7 py-3.5 transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.crayon, color: '#fff' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold px-7 py-3.5 border-2 transition-colors hover:bg-black/5 tap-44"
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t-2" style={{ borderColor: C.tinta, backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} flex items-center gap-2 text-lg`}>
            <SolPapel size={20} />
            {BIZ.name}
          </p>
          <p className={`${mono.className} mt-2 text-[11px] leading-relaxed`} style={{ color: C.tinta2 }}>
            {BIZ.address} · {BIZ.comuna}, {BIZ.region}
          </p>
          <p className="mt-4 text-[11px] leading-relaxed max-w-2xl" style={{ color: 'rgba(92,90,80,0.8)' }}>
            Los textos descriptivos son de muestra y la escena de la sala cuna es un bosquejo
            ilustrativo; el nombre, la dirección, el teléfono, las fotos del jardín, el promedio
            y las reseñas citadas son los reales de su ficha de Google.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
