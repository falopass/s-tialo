import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_CLASES, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' },
  ],
})

const C = {
  paper: '#FBFAF6',
  card: '#FFFFFF',
  soft: '#EEF1F4',
  slate: '#2F4858',
  deep: '#22353F',
  yellow: '#F2B705',
  yellowSoft: '#FBE4A6',
  ink: '#22353F',
  muted: '#5C6B77',
  line: 'rgba(47,72,88,0.16)',
}

const BTN_SOLID =
  'font-semibold transition hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2'
const BTN_GHOST =
  'font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

/* Cuerda de andanales: el motivo que marca los rieles y las miniaturas */
const LANE_ROPE = `repeating-linear-gradient(90deg, ${C.yellow} 0 26px, ${C.slate} 26px 52px)`

export const metadata: Metadata = {
  title: 'Centro San Ricardo — Piscina cubierta en San Rafael, Maule',
  description:
    'Piscina cubierta en Parcela 35, San Rafael: clases de natación para todas las edades y nado libre todo el año. Consulta por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Programas', href: '#programas' },
  { label: 'El centro', href: '#el-centro' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const TIMELINE = [
  {
    paso: 'Paso 01',
    title: 'Nos escribes por WhatsApp',
    text: 'Resuelves tus dudas de horarios y niveles directo con quienes atienden la piscina. Sin call center ni formularios.',
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción de la piscina cubierta, con toallas y vista hacia el agua',
  },
  {
    paso: 'Paso 02',
    title: 'Vienes a conocer el recinto',
    text: 'Te recibimos en Parcela 35, a pasos del centro de San Rafael. Primera visita para ver la piscina y conversar tu objetivo.',
    src: `${IMG}/ambiente.webp`,
    alt: 'Fachada del recinto de la piscina cubierta, con los cerros de San Rafael detrás',
  },
  {
    paso: 'Paso 03',
    title: 'Eliges tu programa',
    text: 'Clases por nivel, nado libre o talleres según temporada. Armamos el plan contigo: niños, adultos y quienes parten de cero.',
    src: `${IMG}/detalle3.webp`,
    alt: 'Piscina cubierta con tablas y fideos de clases apilados en el borde',
  },
  {
    paso: 'Paso 04',
    title: 'Nadas todo el año',
    text: 'Al ser piscina cubierta no hay temporada que esperar: la rutina sigue igual en invierno, primavera o semana de lluvia.',
    src: `${IMG}/hero.webp`,
    alt: 'Interior de la piscina cubierta con andanales y vista a los cerros',
  },
]

const PROGRAMS = [
  {
    name: 'Clases para niños',
    desc: 'Niveles por edad y confianza en el agua, con implementos y acompañamiento dentro de la piscina.',
    src: `${IMG}/detalle3.webp`,
    alt: 'Tablas y fideos de colores listos para una clase de natación infantil',
  },
  {
    name: 'Adultos desde cero',
    desc: 'Para quienes nunca aprendieron o le perdieron la confianza al agua. Ritmo propio, sin apuro.',
    src: `${IMG}/hero.webp`,
    alt: 'Piscina cubierta con andanales demarcados y luz natural',
  },
  {
    name: 'Nado libre',
    desc: 'Horarios de piscina abierta para entrenar o nadar a tu ritmo, con el agua siempre controlada.',
    src: `${IMG}/detalle1.webp`,
    alt: 'Kit de medición de agua en el borde de la piscina, junto a las escalerillas',
  },
]

const TESTIMONIALS = [
  'Mi hija partió con miedo al agua y hoy nada sola. La paciencia de los profes se nota desde la primera clase.',
  'Vivo en San Rafael y tener una piscina cubierta cerca cambió mi rutina: nado todo el año, sin depender del clima.',
  'Ambiente tranquilo y agua impecable. Es de esos lugares de parcela que uno quiere cuidar.',
]

const PRICES = [
  { item: 'Entrada nado libre (visita)', price: '$X.XXX' },
  { item: 'Mensualidad nado libre', price: '$XX.XXX' },
  { item: 'Paquete de clases (4 sesiones)', price: '$XX.XXX' },
  { item: 'Clases para niños (mes)', price: '$XX.XXX' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium"
      style={{ color: light ? C.yellow : C.slate }}
    >
      <span
        className="inline-block w-9 h-[4px] rounded-full shrink-0"
        style={{
          background: light
            ? `repeating-linear-gradient(90deg, ${C.yellow} 0 10px, rgba(251,250,246,0.65) 10px 20px)`
            : `repeating-linear-gradient(90deg, ${C.yellow} 0 10px, ${C.slate} 10px 20px)`,
        }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/* Subrayado de lápiz: marca amarilla detrás de la frase clave */
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <em
      className="not-italic"
      style={{
        background: `linear-gradient(transparent 58%, ${C.yellow}B3 58%, ${C.yellow}B3 94%, transparent 94%)`,
      }}
    >
      {children}
    </em>
  )
}

export default function CentroSanRicardoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(251,250,246,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.yellow,
          btnInk: C.deep,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de la piscina cubierta de Centro San Ricardo: andanales, implementos de clases y cerros por las ventanas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,53,63,0.5) 0%, rgba(34,53,63,0.12) 40%, rgba(34,53,63,0.82) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            {/* sello de reseñas */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mb-6 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]"
              style={{ backgroundColor: '#FBFAF6', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.yellow} stroke={C.slate} strokeWidth="1.2" aria-hidden="true">
                <path d="M12 2.5 L14.7 8.6 L21.2 9.2 L16.3 13.5 L17.8 19.9 L12 16.6 L6.2 19.9 L7.7 13.5 L2.8 9.2 L9.3 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
            <Eyebrow light>Piscina cubierta · San Rafael · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-semibold leading-[1.04] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.6rem)] mb-6`}
              style={{ color: '#FBFAF6' }}
            >
              Aprender a nadar
              <br />
              <Highlight>no tiene temporada</Highlight>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,250,246,0.88)' }}>
              Piscina cubierta en Parcela 35, San Rafael: clases para
              todas las edades y nado libre durante todo el año, con la
              calma de una piscina de parcela.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_SOLID} focus-visible:outline-[#F2B705] text-sm md:text-base px-7 py-3.5 rounded-lg`}
                style={{ backgroundColor: C.yellow, color: C.deep }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#como-funciona"
                className={`${BTN_GHOST} focus-visible:outline-[#FBFAF6] text-sm md:text-base px-7 py-3.5 rounded-lg border hover:bg-white/10`}
                style={{ borderColor: 'rgba(251,250,246,0.55)', color: '#FBFAF6' }}
              >
                Cómo funciona
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(251,250,246,0.22)', backgroundColor: 'rgba(34,53,63,0.5)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,250,246,0.78)' }}>
            <span>Parcela 35, San Rafael</span>
            <span>Piscina cubierta</span>
            <span>{BIZ.reviews} reseñas en Google</span>
            <span className="hidden md:inline" style={{ color: C.yellowSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Línea de tiempo: cómo funciona ── */}
      <section id="como-funciona" className="scroll-mt-20 py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-start mb-14 md:mb-20">
            <Reveal>
              <Eyebrow>Cómo funciona</Eyebrow>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.slate }}>
                Tu camino
                <br />
                en el <em className="font-normal" style={{ color: '#8A6200' }}>agua</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base md:text-lg leading-relaxed max-w-xl lg:pt-12" style={{ color: C.muted }}>
                Desde el primer WhatsApp hasta nadar con confianza: así se
                ve una temporada en el centro. Las etapas son de muestra —
                el programa real lo conversan contigo al llegar.
              </p>
            </Reveal>
          </div>
        </div>

        {/* La cuerda de andanales cruza la pantalla completa en desktop */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-0 right-0 top-[27px] h-[6px] rounded-full"
            style={{ background: LANE_ROPE, boxShadow: '0 1px 3px rgba(34,53,63,0.3)' }}
          />
          {/* riel vertical en móvil, alineado al centro de las boyas */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[47px] top-3 bottom-3 w-[6px] rounded-full"
            style={{
              background: `repeating-linear-gradient(180deg, ${C.yellow} 0 26px, ${C.slate} 26px 52px)`,
            }}
          />
          <ol className="relative max-w-6xl mx-auto px-5 md:px-8 grid gap-14 md:grid-cols-4 md:gap-8">
            {TIMELINE.map((s, i) => (
              <Reveal key={s.paso} delay={i * 110}>
                <li className="relative pl-20 md:pl-0 group">
                  <span
                    className={`${display.className} absolute left-0 top-0 md:static md:mb-7 w-[60px] h-[60px] rounded-full flex items-center justify-center text-xl font-bold border-4`}
                    style={{
                      backgroundColor: C.yellow,
                      color: C.deep,
                      borderColor: C.paper,
                      boxShadow: '0 2px 10px rgba(34,53,63,0.18)',
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.22em] font-medium mb-2" style={{ color: '#8A6200' }}>
                    {s.paso}
                  </p>
                  <h3 className={`${display.className} font-semibold text-xl md:text-2xl leading-tight mb-2`} style={{ color: C.slate }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                    {s.text}
                  </p>
                  <figure className="relative rounded-xl overflow-hidden border aspect-[3/2]" style={{ borderColor: C.line }}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </figure>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Programas ── */}
      <section id="programas" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Programas</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.slate }}>
                Qué puedes hacer aquí
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Programas de ejemplo: al publicar van los cursos,
                horarios y valores reales del centro.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <li
                  className="group rounded-xl overflow-hidden border h-full flex flex-col"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 1px 3px rgba(34,53,63,0.07)' }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded"
                      style={{ backgroundColor: 'rgba(251,250,246,0.92)', color: C.slate }}
                    >
                      Programa de muestra
                    </span>
                  </div>
                  <div className="p-5 md:p-6 flex-1">
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-2`} style={{ color: C.slate }}>
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El centro: San Rafael, atención directa, reseñas ── */}
      <section id="el-centro" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative rounded-xl overflow-hidden border aspect-[4/3]" style={{ borderColor: C.line, boxShadow: '0 18px 50px rgba(34,53,63,0.14)' }}>
              <Image
                src={`${IMG}/ambiente.webp`}
                alt="Recinto de la piscina cubierta en Parcela 35, San Rafael, con cerros al fondo"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El centro</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.slate }}>
              Una piscina de parcela,
              <br />
              <em className="font-normal" style={{ color: '#8A6200' }}>atendida por su gente</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
              Centro San Ricardo funciona en Parcela 35, en plena
              comuna de San Rafael. Acá hablas directo con quienes
              mantienen la piscina: la misma gente que abre, controla
              el agua y recibe a cada alumno.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              La ficha de Google acumula{' '}
              <strong className="font-semibold" style={{ color: C.slate }}>
                {BIZ.reviews} reseñas
              </strong>{' '}
              de familias de la zona — una vitrina que ya existe y que
              un sitio propio puede aprovechar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_SOLID} focus-visible:outline-[#2F4858] text-sm px-6 py-3 rounded-lg`}
                style={{ backgroundColor: C.slate, color: '#FBFAF6' }}
              >
                Ver reseñas en Google →
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_GHOST} focus-visible:outline-[#2F4858] text-sm px-6 py-3 rounded-lg border hover:bg-[#2F4858]/10`}
                style={{ borderColor: 'rgba(47,72,88,0.35)', color: C.slate }}
              >
                @{BIZ.instagramUser} en Instagram
              </a>
            </div>
          </Reveal>
        </div>

        {/* reseñas de muestra */}
        <div className="mt-16 md:mt-20 border-t-2 border-dashed pt-12" style={{ borderColor: 'rgba(47,72,88,0.25)' }}>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] font-medium mb-8" style={{ color: C.muted }}>
              Lo que valoran los clientes — textos de muestra basados en el tipo de comentarios que recibe la piscina
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure
                  className="rounded-xl p-6 border h-full"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 mb-4" fill={C.yellow} aria-hidden="true">
                    <path d="M4 5h7v7c0 3.5-2 5.5-4.5 6.5l-.8-1.5c1.7-.8 2.8-2 3-3.5H4V5zm10 0h7v7c0 3.5-2 5.5-4.5 6.5l-.8-1.5c1.7-.8 2.8-2 3-3.5h-4.7V5z" />
                  </svg>
                  <blockquote className={`${display.className} text-base leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: '#8A6200' }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precios de referencia (muestra) ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow light>Precios de referencia</Eyebrow>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: '#FBFAF6' }}>
                Valores claros,
                <br />
                <Highlight>sin letra chica</Highlight>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(251,250,246,0.72)' }}>
                Tabla de muestra para mostrar el formato. Los valores
                reales — por visita, mensualidad o paquete de clases —
                se confirman por WhatsApp al publicar el sitio.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_SOLID} focus-visible:outline-[#F2B705] inline-block text-sm md:text-base px-7 py-3.5 rounded-lg`}
                style={{ backgroundColor: C.yellow, color: C.deep }}
              >
                Consultar valores reales
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'rgba(251,250,246,0.18)', backgroundColor: 'rgba(251,250,246,0.05)' }}>
                <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: 'rgba(251,250,246,0.18)' }}>
                  <span className={`${display.className} font-semibold text-lg`} style={{ color: '#FBFAF6' }}>
                    Lista de precios
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded" style={{ backgroundColor: C.yellow, color: C.deep }}>
                    Muestra
                  </span>
                </div>
                <ul>
                  {PRICES.map((p) => (
                    <li
                      key={p.item}
                      className="px-6 py-4 flex items-baseline justify-between gap-6 border-b border-dashed last:border-b-0"
                      style={{ borderColor: 'rgba(251,250,246,0.22)' }}
                    >
                      <span className="text-sm md:text-base" style={{ color: 'rgba(251,250,246,0.85)' }}>
                        {p.item}
                      </span>
                      <span className={`${display.className} font-semibold text-base md:text-lg shrink-0`} style={{ color: C.yellow }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.slate }}>
              Ven a conocer
              <br />
              la piscina
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2" style={{ color: C.slate }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Dentro de San Rafael se llega fácil y hay donde
              estacionar. Coordina tu visita por WhatsApp y te
              esperamos con la piscina lista.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_CLASES}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_SOLID} focus-visible:outline-[#2F4858] text-sm md:text-base px-7 py-3.5 rounded-lg`}
                style={{ backgroundColor: C.yellow, color: C.deep }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_GHOST} focus-visible:outline-[#2F4858] text-sm px-6 py-3.5 rounded-lg border hover:bg-[#2F4858]/10`}
                style={{ borderColor: 'rgba(47,72,88,0.35)', color: C.slate }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#FBFAF6' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-semibold text-xl mb-1`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: '#D5D9DB' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,250,246,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-24 text-xs leading-relaxed" style={{ color: '#C4CACD' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Programas,
            precios, reseñas textuales y fotos son de muestra.
          </p>
        </div>
      </footer>

      <div className="[&>div]:!bg-[#0A0A0A]">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
