import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

const C = {
  paper: '#F5F4EE',
  paperHi: '#FCFBF6',
  ink: '#17171A',
  muted: '#63615A',
  green: '#1E7A3C',
  greenInk: '#F2F7F0',
  yellow: '#F2B705',
  line: 'rgba(23,23,26,0.16)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// usa la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'iron-element-training',
  title: 'Iron Element Training — el gym de 6 Oriente, Talca',
  description:
    'Gimnasio en Calle 6 Oriente 820, Talca: 4,9 estrellas en Google, máquinas nuevas y planes desde $24.990. Agenda tu primera visita por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La sala', href: '#sala' },
  { label: 'Planes', href: '#planes' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const FICHA = [
  { k: 'NOTA', v: `${BIZ.rating}`, d: `${BIZ.reviews} reseñas en Google` },
  { k: 'PLANES', v: `${BIZ.planDesde} +`, d: `hasta ${BIZ.planHasta} — publicado en IG` },
  { k: 'HORARIO', v: '7–23', d: 'lunes a viernes · sáb y dom reducido' },
  { k: 'INSTAGRAM', v: '9.902', d: `${BIZ.igUser}` },
]

const ESTACIONES = [
  {
    src: 'sala',
    nombre: 'La sala principal',
    detalle: 'máquinas amarillas, peso libre y pasto sintético',
    alt: 'Sala principal de Iron Element: personas entrenando entre máquinas sobre pasto verde',
  },
  {
    src: 'aereo',
    nombre: 'Vista de planta',
    detalle: 'estaciones ordenadas por zona',
    alt: 'Vista aérea de las estaciones de entrenamiento del gimnasio',
  },
  {
    src: 'cardio',
    nombre: 'Zona cardio',
    detalle: 'bikes y elípticas en sala propia',
    alt: 'Zona de cardio del gimnasio con bicicletas y elípticas',
  },
  {
    src: 'noche',
    nombre: 'De noche',
    detalle: 'el gym en modo neón',
    alt: 'Interior del gimnasio de noche con luces de neón rosadas',
  },
]

const RESENAS = [
  {
    nombre: 'Ray el Aventurero',
    fecha: 'Hace 10 meses',
    estrellas: 5,
    texto:
      'El mejor ambiente para entrenar en Talca. Lleno de energía y con gente enfocada en mejorar. Las máquinas y pesas están en excelente estado, bien distribuidas y pensadas para todo tipo de rutinas.',
  },
  {
    nombre: 'Iris',
    fecha: 'Hace 4 meses',
    estrellas: 5,
    texto:
      'Jamás había logrado estar tanto tiempo en un gym: máquinas nuevas, profes cercanos, pendientes de ti en todo momento, ambiente acogedor, jamás malos olores. Totalmente recomendable.',
  },
  {
    nombre: 'John Alfonso K.',
    fecha: 'Hace 8 meses',
    estrellas: 5,
    texto:
      'Se merece las 5 estrellas. Los asistentes siempre con buena voluntad y todos muy atentos. Me gusta bastante el ambiente y todas las máquinas son excelentes.',
  },
]

const HORARIO = [
  { dias: 'Lunes a viernes', horas: '7:00 – 23:00' },
  { dias: 'Sábado', horas: '11:30 – 16:00' },
  { dias: 'Domingo', horas: '11:00 – 17:00' },
]

/* Marca de pizarra: "DÍA 01" como en una ficha de entrenamiento */
function Dia({ n, titulo }: { n: string; titulo: string }) {
  return (
    <div className="flex items-end gap-4 mb-8 md:mb-10 border-b-2 pb-4" style={{ borderColor: C.ink }}>
      <span
        className={`${mono.className} font-bold text-xs md:text-sm px-2.5 py-1`}
        style={{ backgroundColor: C.yellow, color: C.ink }}
      >
        {n}
      </span>
      <h2
        className={`${display.className} font-bold uppercase leading-none tracking-tight text-[clamp(1.9rem,5.5vw,3.4rem)]`}
      >
        {titulo}
      </h2>
    </div>
  )
}

export default function IronElementTrainingPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .ie2-btn { transition: transform .18s ease, filter .18s ease; }
        .ie2-btn:hover { transform: translateY(-2px); filter: brightness(1.04); }
        .ie2-btn:active { transform: scale(.97); }
        .ie2-btn:focus-visible { outline: 3px solid ${C.green}; outline-offset: 3px; }
        .ie2-grid-paper {
          background-image:
            linear-gradient(rgba(23,23,26,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,23,26,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} font-bold uppercase tracking-tight`}>{BIZ.short}</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: 'rgba(245,244,238,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: C.paper,
        }}
      />

      {/* ── Hero: pizarra cuadriculada + foto de la sala ── */}
      <section id="inicio" className="ie2-grid-paper pt-[76px] md:pt-[88px] border-b-2" style={{ borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-14">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-2.5`} style={{ color: C.green }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
                  </svg>
                  {BIZ.rubro} · {BIZ.address} · {BIZ.city}
                </p>
                <h1 className={`${display.className} font-bold uppercase leading-[0.93] tracking-tight text-[clamp(2.9rem,9.5vw,6.8rem)] mb-5`}>
                  Iron
                  <br />
                  Element{' '}
                  <span className="inline-block align-top">
                    <span className="inline-block px-3 pb-1" style={{ backgroundColor: C.yellow }}>
                      Training
                    </span>
                  </span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: C.muted }}>
                  El gym mejor evaluado de Talca: máquinas nuevas, peso
                  libre y profes que te siguen. Planes desde{' '}
                  {BIZ.planDesde} al mes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_CLASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ie2-btn font-bold uppercase tracking-tight text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ backgroundColor: C.green, color: C.greenInk }}
                  >
                    Probar una clase
                  </a>
                  <a
                    href="#planes"
                    className={`${display.className} ie2-btn font-bold uppercase tracking-tight text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver planes
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="md:col-span-5" delay={120}>
              <figure>
                <div className="relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Sala de Iron Element: máquinas amarillas frente al lienzo con el espartano y murales de culturismo"
                    fill
                    priority
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2.5`} style={{ color: C.muted }}>
                  <span>La sala, con su espartano de lienzo</span>
                  <span className="inline-flex items-center gap-1.5 shrink-0 font-bold" style={{ color: C.green }}>
                    <Stars value={BIZ.rating} color={C.green} className="w-3 h-3" />
                    {BIZ.rating}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La ficha: datos como registro de entrenamiento ── */}
      <section aria-label="Ficha del gimnasio" className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-2" style={{ borderColor: C.ink, backgroundColor: C.ink }}>
            {FICHA.map((f) => (
              <div key={f.k} className="p-4 md:p-5" style={{ backgroundColor: C.paperHi }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.muted }}>
                  {f.k}
                </p>
                <p className={`${display.className} font-bold leading-none text-2xl md:text-4xl`}>
                  {f.v}
                </p>
                <p className={`${mono.className} text-[10px] md:text-[11px] mt-2 leading-snug`} style={{ color: C.muted }}>
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── DÍA 01 · La sala ── */}
      <section id="sala" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <Reveal>
          <Dia n="DÍA 01" titulo="Conoce la sala" />
        </Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
          <Reveal className="col-span-2 md:col-span-7 md:row-span-2">
            <li className="h-full">
              <figure className="relative overflow-hidden border-2 h-full min-h-[280px] md:min-h-[440px]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/${ESTACIONES[0].src}.webp`}
                  alt={ESTACIONES[0].alt}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className="absolute inset-x-0 bottom-0 px-4 py-3 flex items-baseline justify-between gap-3"
                  style={{ background: 'linear-gradient(0deg, rgba(23,23,26,0.9) 0%, rgba(23,23,26,0) 140%)' }}
                >
                  <span className={`${display.className} font-bold uppercase tracking-tight text-lg md:text-xl`} style={{ color: C.paper }}>
                    {ESTACIONES[0].nombre}
                  </span>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em] shrink-0`} style={{ color: C.yellow }}>
                    {ESTACIONES[0].detalle}
                  </span>
                </figcaption>
              </figure>
            </li>
          </Reveal>
          {ESTACIONES.slice(1).map((e, i) => (
            <Reveal key={e.src} className="col-span-1 md:col-span-5" delay={100 + i * 80}>
              <li className="h-full">
                <figure className="relative overflow-hidden border-2 aspect-[4/3] md:aspect-auto md:h-full md:min-h-[210px]" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/${e.src}.webp`}
                    alt={e.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 50vw"
                    className="object-cover"
                  />
                  <figcaption
                    className="absolute inset-x-0 bottom-0 px-3.5 py-2.5 flex items-baseline justify-between gap-2"
                    style={{ background: 'linear-gradient(0deg, rgba(23,23,26,0.9) 0%, rgba(23,23,26,0) 140%)' }}
                  >
                    <span className={`${display.className} font-bold uppercase tracking-tight text-base`} style={{ color: C.paper }}>
                      {e.nombre}
                    </span>
                    <span className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.12em] shrink-0`} style={{ color: C.yellow }}>
                      {e.detalle}
                    </span>
                  </figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── DÍA 02 · Planes y horario (tabla de ficha) ── */}
      <section id="planes" className="scroll-mt-20" style={{ backgroundColor: C.green }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="flex items-end gap-4 mb-8 md:mb-10 border-b-2 pb-4" style={{ borderColor: 'rgba(242,247,240,0.4)' }}>
              <span className={`${mono.className} font-bold text-xs md:text-sm px-2.5 py-1`} style={{ backgroundColor: C.yellow, color: C.ink }}>
                DÍA 02
              </span>
              <h2 className={`${display.className} font-bold uppercase leading-none tracking-tight text-[clamp(1.9rem,5.5vw,3.4rem)]`} style={{ color: C.greenInk }}>
                Planes y horario
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <div className="border-2 p-5 md:p-7" style={{ borderColor: 'rgba(242,247,240,0.4)', backgroundColor: 'rgba(23,23,26,0.18)' }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-3`} style={{ color: 'rgba(242,247,240,0.75)' }}>
                  Mensualidad
                </p>
                <p className={`${display.className} font-bold leading-none text-4xl md:text-6xl mb-3`} style={{ color: '#FFFFFF' }}>
                  {BIZ.planDesde}
                  <span className="text-xl md:text-2xl" style={{ color: C.yellow }}> a {BIZ.planHasta}</span>
                </p>
                <p className="text-sm leading-relaxed mb-2" style={{ color: 'rgba(242,247,240,0.85)' }}>
                  Rango publicado por el gym en su Instagram. Escríbeles
                  y te pasan el plan que te acomoda.
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(242,247,240,0.6)' }}>
                  valores {BIZ.igUser} · marzo 2026
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ie2-btn inline-block font-bold uppercase tracking-tight text-sm md:text-base px-6 py-2.5 mt-6 tap-44`}
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-2" style={{ borderColor: 'rgba(242,247,240,0.4)' }}>
                {HORARIO.map((h) => (
                  <div
                    key={h.dias}
                    className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b last:border-b-0"
                    style={{ borderColor: 'rgba(242,247,240,0.25)' }}
                  >
                    <span className={`${display.className} font-bold uppercase tracking-tight text-base md:text-lg`} style={{ color: C.greenInk }}>
                      {h.dias}
                    </span>
                    <span className={`${mono.className} text-sm font-bold`} style={{ color: C.yellow }}>
                      {h.horas}
                    </span>
                  </div>
                ))}
                <p className={`${mono.className} px-5 py-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(242,247,240,0.65)' }}>
                  horario publicado en la ficha de Google
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DÍA 03 · Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <Reveal>
          <Dia n="DÍA 03" titulo="Los que ya entrenan" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 90}>
              <figure className="h-full border-2 p-5 md:p-6 flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.paperHi }}>
                <Stars value={r.estrellas} color={C.green} className="w-3.5 h-3.5" />
                <blockquote className="text-sm md:text-[15px] leading-relaxed mt-4 mb-5 font-medium" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.13em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                  <span style={{ color: C.ink }}>{r.nombre}</span>
                  <span className="shrink-0">{r.fecha} · Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.18em] mt-6`} style={{ color: C.muted }}>
            {BIZ.rating} de 5 · {BIZ.reviews} reseñas en la ficha de Google
          </p>
        </Reveal>
      </section>

      {/* ── Ubicación: la reja de 6 Oriente ── */}
      <section id="ubicacion" className="scroll-mt-20 border-t-2" style={{ borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <Dia n="SALIDA" titulo="6 Oriente 820, Talca" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <Reveal>
              <figure className="h-full flex flex-col">
                <div className="relative overflow-hidden border-2 flex-1 min-h-[280px]" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Reja negra del gimnasio pintada con «IRON ELEMENT GYM» y el casco espartano, en la esquina de 6 Oriente"
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2.5`} style={{ color: C.muted }}>
                  La reja se reconoce a una cuadra — esquina de 6 Oriente
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full flex flex-col gap-5">
                <div className="relative overflow-hidden border-2 flex-1 min-h-[300px]" style={{ borderColor: C.ink }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${mono.className} text-sm font-bold underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.green, textDecorationColor: 'rgba(30,122,60,0.4)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} text-sm font-bold underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.green, textDecorationColor: 'rgba(30,122,60,0.4)' }}
                  >
                    {BIZ.igUser}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} text-sm font-bold underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.green, textDecorationColor: 'rgba(30,122,60,0.4)' }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-bold uppercase tracking-tight text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,244,238,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igUser}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,244,238,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(245,244,238,0.68)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son los
            reales de la ficha de Google y del Instagram del gimnasio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
