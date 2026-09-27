import type { Metadata } from 'next'
import { Prata, Mulish } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { ParallaxImg } from './parallax'
import {
  BIZ,
  WA_LINK,
  WA_LINK_VISITA,
  MAPS_URL,
  MAPS_EMBED,
  INSTAGRAM_URL,
  IMG,
} from './content'

const display = Prata({ subsets: ['latin'], weight: '400' })
const body = Mulish({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

const C = {
  navy: '#1B2A41',
  deep: '#101A29',
  sand: '#E8DCC8',
  terracotta: '#C1663F',
  // terracota oscuro: texto y links sobre fondos claros (AA en tamaño chico)
  terraDeep: '#8F4A2A',
  // fondo de botones con texto blanco (≥4.5:1)
  terraBtn: '#A9552F',
  white: '#FFFFFF',
  ink: '#232B36',
  muted: '#5A6068',
  line: 'rgba(27,42,65,0.16)',
}

const BTN_SOLID =
  'rounded-full transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC8]'
const BTN_GHOST =
  'rounded-full border transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC8]'

export const metadata: Metadata = {
  title: 'Bravosgym — Gimnasio en Molina',
  description:
    'Gimnasio en el centro de Molina, Región del Maule. Pesas libres, entrenamiento funcional y atención directa. Consulta por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El gym', href: '#el-gym' },
  { label: 'Precios', href: '#precios' },
  { label: 'Ubicación', href: '#contacto' },
]

const SERVICES = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Rack de mancuernas y barra olímpica en la sala de pesas de Bravosgym',
    name: 'Pesas libres y máquinas',
    desc: 'Racks, barras, mancuernas y bancos para entrenar fuerza en serio. Suficiente equipamiento para no hacer fila.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Zona de entrenamiento funcional con cuerdas de suspensión, kettlebells y cajones',
    name: 'Entrenamiento funcional',
    desc: 'Suspensión, kettlebells, cajones y colchonetas: movimientos que sirven para la vida diaria, no solo para la foto.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción de Bravosgym con pizarra de horarios, toallas y vista a la sala de máquinas',
    name: 'Clases y atención directa',
    desc: 'Horarios de clases a la vista y gente que te recibe por tu nombre. Aquí no entrenas solo ni eres un número.',
  },
]

const PLANS = [
  { name: 'Plan mensual', price: '$25.000', note: 'acceso libre a sala y clases' },
  { name: 'Plan trimestral', price: '$60.000', note: 'el favorito de los socios' },
  { name: 'Día suelto', price: '$5.000', note: 'para probar o visitar' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.sand : C.navy }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: light ? C.sand : C.terracotta }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function BleedPanel({
  src,
  alt,
  eager = false,
  id,
  children,
  className = '',
}: {
  src: string
  alt: string
  eager?: boolean
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`} style={{ backgroundColor: C.deep }}>
      <ParallaxImg src={src} alt={alt} eager={eager} className="object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,26,41,0.45) 0%, rgba(16,26,41,0.05) 42%, rgba(16,26,41,0.82) 100%)',
        }}
      />
      {children}
    </section>
  )
}

export default function BravosgymPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased pb-20`}
      style={{ backgroundColor: C.deep, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(16,26,41,0.94)',
          ink: C.sand,
          line: 'rgba(232,220,200,0.16)',
          btnBg: C.terraBtn,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <BleedPanel
        id="inicio"
        src={`${IMG}/hero.webp`}
        alt="Interior de Bravosgym: sala de máquinas iluminada por el sol con vista a Molina"
        eager
        className="min-h-svh flex flex-col justify-end"
      >
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Gimnasio · Molina · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.9rem,10.5vw,6.2rem)] mb-6`}
              style={{ color: C.sand }}
            >
              Aquí se entrena
              <br />
              <span style={{ color: C.terracotta }}>tranquilo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(232,220,200,0.88)' }}>
              Un gimnasio de barrio en el centro de Molina: máquinas,
              pesas libres y clases con atención directa, sin filas ni
              apuros.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.terraBtn, color: C.white }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} ${BTN_GHOST} text-sm md:text-base px-7 py-3.5`}
                style={{ borderColor: 'rgba(232,220,200,0.55)', color: C.sand }}
              >
                Conocer el gym
              </a>
            </div>
          </Reveal>
        </div>
        <div
          className="relative border-t"
          style={{ borderColor: 'rgba(232,220,200,0.2)', backgroundColor: 'rgba(16,26,41,0.45)', backdropFilter: 'blur(6px)' }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(232,220,200,0.78)' }}>
            <span>Pje. 3 1657, Molina</span>
            <span>@{BIZ.instagram}</span>
            <span>Pesas · funcional · clases</span>
            <span className="hidden md:inline" style={{ color: C.sand }}>sitio de ejemplo</span>
          </div>
        </div>
      </BleedPanel>

      {/* ── Declaración ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28" style={{ backgroundColor: C.deep }}>
        <Reveal>
          <p
            className={`${display.className} text-[clamp(1.9rem,5vw,3.4rem)] leading-[1.15] max-w-3xl`}
            style={{ color: C.sand }}
          >
            Un gym donde te atienden{' '}
            <span style={{ color: C.terracotta }}>por tu nombre</span>,
            no por tu número de socio.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-sm md:text-base leading-relaxed max-w-xl mt-7" style={{ color: 'rgba(232,220,200,0.7)' }}>
            En Bravosgym la idea es simple: equipamiento completo, horarios
            que acomodan y trato de barrio. Vienes, entrenas a tu ritmo y
            te vas bien atendido.
          </p>
        </Reveal>
      </section>

      {/* ── Servicios: paneles a sangre ── */}
      <div id="servicios" className="scroll-mt-20">
        {SERVICES.map((s, i) => (
          <BleedPanel
            key={s.name}
            src={s.src}
            alt={s.alt}
            className="min-h-[82svh] md:min-h-[92svh] flex items-end"
          >
            <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-24">
              <Reveal>
                <div className="flex items-baseline gap-4 md:gap-6 mb-4">
                  <span
                    className={`${display.className} text-4xl md:text-5xl leading-none`}
                    style={{ color: C.terracotta }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2
                    className={`${display.className} text-3xl md:text-5xl leading-[1.05]`}
                    style={{ color: C.sand }}
                  >
                    {s.name}
                  </h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(232,220,200,0.82)' }}>
                  {s.desc}
                </p>
              </Reveal>
            </div>
          </BleedPanel>
        ))}
      </div>

      {/* ── El gym ── */}
      <section id="el-gym" className="scroll-mt-20" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El gym</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.navy }}>
              De Molina,
              <br />
              para Molina
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-5" style={{ color: C.muted }}>
              Bravosgym funciona en Pasaje 3, a pasos del centro de Molina.
              Es un gimnasio chico y bien cuidado: la atención es directa,
              las máquinas se comparten sin problema y el ambiente es de
              respeto.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
              En Instagram publican la agenda de clases y las novedades, y
              en su ficha de Google ya aparecen las primeras opiniones de
              los socios.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl border p-6 md:p-7" style={{ backgroundColor: '#F5EFE2', borderColor: C.line }}>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-5" style={{ color: C.terraDeep }}>
                Datos reales de la ficha
              </p>
              <ul className="space-y-4 text-sm leading-relaxed" style={{ color: C.ink }}>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.terracotta }} aria-hidden="true" />
                  <span>
                    <strong>{BIZ.reviews} reseña</strong> en su ficha de Google Maps — recién
                    empieza a juntar opiniones.{' '}
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-2 transition-colors hover:text-[#1B2A41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F4A2A]" style={{ color: C.terraDeep }}>
                      Ver ficha →
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.terracotta }} aria-hidden="true" />
                  <span>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-2 transition-colors hover:text-[#1B2A41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F4A2A]" style={{ color: C.terraDeep }}>
                      @{BIZ.instagram}
                    </a>{' '}
                    con <strong>{BIZ.instagramFollowers} seguidores</strong> en Instagram.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.terracotta }} aria-hidden="true" />
                  <span>
                    {BIZ.address}, {BIZ.commune} — en el centro de la comuna.
                  </span>
                </li>
              </ul>
              <p className="text-xs leading-relaxed mt-6 pt-5 border-t" style={{ color: C.muted, borderColor: C.line }}>
                Los textos descriptivos de este sitio son de muestra: al
                publicar van los contenidos y reseñas reales.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Precios ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Precios de referencia</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.sand }}>
                Planes del gym
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'rgba(232,220,200,0.7)' }}>
                Valores de muestra: los planes y precios reales se
                confirman directo por WhatsApp.
              </p>
            </div>
          </Reveal>
          <ul className="border-t" style={{ borderColor: 'rgba(232,220,200,0.22)' }}>
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <li
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-6 md:py-7 border-b"
                  style={{ borderColor: 'rgba(232,220,200,0.22)' }}
                >
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className={`${display.className} text-lg md:text-xl w-8`} style={{ color: C.terracotta }} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.sand }}>
                        {p.name}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: 'rgba(232,220,200,0.65)' }}>
                        {p.note}
                      </p>
                    </div>
                  </div>
                  <p className={`${display.className} text-2xl md:text-4xl`} style={{ color: C.sand }}>
                    {p.price}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.terraBtn, color: C.white }}
              >
                Consultar precios por WhatsApp
              </a>
              <p className="text-xs max-w-xs leading-relaxed" style={{ color: 'rgba(232,220,200,0.6)' }}>
                Precios de muestra para el ejemplo: los valores y
                promociones vigentes se confirman directo con el gym.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación y contacto a sangre ── */}
      <BleedPanel
        id="contacto"
        src={`${IMG}/ambiente.webp`}
        alt="Fachada de Bravosgym al atardecer en Pasaje 3, centro de Molina"
        className="min-h-svh flex items-center"
      >
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <div
              className="rounded-2xl p-6 md:p-8 h-full"
              style={{ backgroundColor: 'rgba(27,42,65,0.72)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
            >
              <Eyebrow light>Ubicación</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.sand }}>
                En el centro
                <br />
                de Molina
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(232,220,200,0.85)' }}>
                {BIZ.address}
                <br />
                {BIZ.commune}, Chile
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC8]">{BIZ.phoneDisplay}</a>
              </address>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(232,220,200,0.65)' }}>
                Horarios y disponibilidad de clases: consulta directo por
                WhatsApp o por Instagram.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_VISITA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_SOLID} text-sm px-6 py-3`}
                  style={{ backgroundColor: C.terraBtn, color: C.white }}
                >
                  Agendar visita
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_GHOST} text-sm px-6 py-3`}
                  style={{ borderColor: 'rgba(232,220,200,0.5)', color: C.sand }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_GHOST} text-sm px-6 py-3`}
                  style={{ borderColor: 'rgba(232,220,200,0.5)', color: C.sand }}
                >
                  @{BIZ.instagram}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden min-h-[320px] h-full shadow-2xl">
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </BleedPanel>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 border-t" style={{ borderColor: 'rgba(232,220,200,0.14)' }}>
          <p className={`${display.className} text-xl mb-1`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(232,220,200,0.72)' }}>
              {BIZ.address} · {BIZ.city}
              {' · '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC8]">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC8]">
                @{BIZ.instagram}
              </a>
          </address>
          <p className="text-xs leading-relaxed mt-3" style={{ color: 'rgba(232,220,200,0.6)' }}>
            Sitio de ejemplo de Sitiazo: textos, precios y fotos de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
