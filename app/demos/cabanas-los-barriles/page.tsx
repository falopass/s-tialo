import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «artesanía en barriles» — en Los Barriles hasta el
 * quincho se hace con duelas de tonel: cenefas de duelas verticales,
 * aros de hierro marcando cada sección y la madera del letrero de la
 * reja. Fraunces hace de letra pintada sobre madera; Karla es el papel.
 */
const C = {
  paper: '#F3EBDA',
  card: '#FBF6EA',
  ink: '#221708',
  deep: '#160F07',
  bosque: '#23402B',
  terracota: '#94501C',
  roble: '#8A5A33',
  piscina: '#2E7D8C',
  muted: '#6E5F4C',
  line: 'rgba(34,23,8,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-los-barriles',
  title: 'Cabañas Los Barriles — Alojamiento equipado en Molina, Maule',
  description:
    'Cabañas totalmente equipadas en Luis Cruz Martínez 2066, Molina: piscina, quincho de barriles, tinaja de madera y la atención de don Daniel.',
  image: '/demos/cabanas-los-barriles/hero.webp',
})

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'Quincho y piscina', href: '#quincho' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
]

/** Hilera de duelas: las tablas curvas que forman el tonel. */
function Duelas({ count = 24, height = 26, className = '' }: { count?: number; height?: number; className?: string }) {
  return (
    <div className={`flex justify-center gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="rounded-full"
          style={{
            width: 7,
            height,
            backgroundColor: i % 2 === 0 ? C.roble : C.terracota,
            opacity: 0.9 - Math.abs(i - count / 2) * (0.7 / count) * 2,
          }}
        />
      ))}
    </div>
  )
}

/** Número de sección dentro de un aro de hierro de barril. */
function Aro({ n, className = '' }: { n: string; className?: string }) {
  return (
    <span
      className={`${display.className} inline-flex items-center justify-center rounded-full font-bold ${className}`}
      style={{
        width: 54,
        height: 54,
        border: `2.5px solid ${C.terracota}`,
        boxShadow: `inset 0 0 0 3px ${C.card}, inset 0 0 0 4.5px ${C.terracota}`,
        color: C.bosque,
        backgroundColor: C.card,
        fontSize: 19,
      }}
      aria-hidden="true"
    >
      {n}
    </span>
  )
}

function Epigrafe({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.3em] font-extrabold mb-4 flex items-center gap-3"
      style={{ color: light ? '#E3B37E' : C.terracota }}
    >
      <span className="flex gap-[3px]" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="rounded-full"
            style={{ width: 5, height: 16, backgroundColor: i === 1 ? C.terracota : C.roble }}
          />
        ))}
      </span>
      {children}
    </p>
  )
}

const EQUIPO = [
  { t: 'Totalmente equipadas', d: 'Cocina, vajilla y camas hechas: se llega con la bolsa y listo.' },
  { t: 'Wifi y TV cable', d: 'Lo dice el letrero de la reja: conexión y tele para las noches de lluvia.' },
  { t: 'Camas y camarotes', d: 'Piezas de madera con camarotes para familias y cuadrillas de faena.' },
  { t: 'Baño privado', d: 'Cada cabaña con su baño, ducha y agua caliente.' },
] as const

const RESENAS = [
  {
    text: 'Excelente cabaña para familia y para personas que estén en faena; la atención de los propietarios muy maravillosa.',
    author: 'Yandy P.',
  },
  {
    text: 'Hospitalario y muy amable don Daniel, nos dejaron ocupar sus instalaciones. Cabañas bien equipadas y todo muy limpio.',
    author: 'Viviana O.',
  },
  {
    text: 'Una maravillosa experiencia de vida y tranquilidad… ambiente agradable, familiar y exclusivo. Recomendados 100%.',
    author: 'Víctor P.',
  },
] as const

export default function CabanasLosBarrilesPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(22,15,7,0.94)',
          ink: '#F3EBDA',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.terracota,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la hileras de cabañas ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Hileras de cabañas de madera en Cabañas Los Barriles, Molina"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(22,15,7,0.55) 0%, rgba(22,15,7,0.32) 42%, rgba(22,15,7,0.93) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(243,235,218,0.96)', color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.terracota} className="w-[14px] h-[14px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Epigrafe light>Alojamiento · Luis Cruz Martínez, Molina</Epigrafe>
            <h1
              className={`${display.className} scroll-mt-28 font-semibold leading-[0.98] tracking-[0.005em] text-[clamp(2.7rem,9.5vw,6rem)] mb-6`}
              style={{ color: '#F3EBDA' }}
            >
              Donde hasta el quincho
              <br />
              <em style={{ color: '#E3B37E' }}>sale de un barril</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(243,235,218,0.9)' }}>
              Cabañas totalmente equipadas entre dos hileras de madera,
              con piscina, quincho comunitario y la atención de don Daniel
              abriendo la reja.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.terracota, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#cabanas"
                className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(243,235,218,0.55)', color: '#F3EBDA' }}
              >
                Ver las cabañas
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(243,235,218,0.2)', backgroundColor: 'rgba(22,15,7,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(243,235,218,0.92)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#E3B37E' }} aria-hidden="true" />
              Wifi · TV cable · equipadas
            </span>
            <span className="hidden md:inline" style={{ color: '#E3B37E' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Las cabañas: inventario del letrero ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Epigrafe>Las cabañas</Epigrafe>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.ink }}>
              Equipadas de punta a punta,
              <br />
              <em style={{ color: C.bosque }}>dice el letrero y se cumple</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Dos hileras de cabañas de madera al interior del predio:
              cada una con su cocina, su baño y su estacionamiento al lado.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 14px 36px rgba(22,15,7,0.16)' }}>
                <img src={`${IMG}/dormitorio.webp`} alt="Dormitorio con camarotes de madera en una cabaña de Los Barriles" loading="lazy" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
              <div className="rounded-2xl overflow-hidden mt-8" style={{ boxShadow: '0 14px 36px rgba(22,15,7,0.16)' }}>
                <img src={`${IMG}/pasillo.webp`} alt="Pasillo interior entre las hileras de cabañas" loading="lazy" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ul className="rounded-2xl border p-6 md:p-8" style={{ backgroundColor: C.card, borderColor: C.line }}>
              {EQUIPO.map((e, i) => (
                <li key={e.t} className={`flex gap-5 items-start ${i > 0 ? 'pt-5 mt-5 border-t border-dashed' : ''}`} style={{ borderColor: C.line }}>
                  <Aro n={`0${i + 1}`} className="shrink-0" />
                  <div>
                    <h3 className={`${display.className} font-semibold text-xl mb-1`} style={{ color: C.ink }}>
                      {e.t}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {e.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Duelas count={40} height={22} className="max-w-6xl mx-auto px-5 md:px-8" />

      {/* ── Quincho, piscina y tinaja ── */}
      <section id="quincho" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
            <Reveal>
              <Epigrafe light>Quincho y piscina</Epigrafe>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: '#F3EBDA' }}>
                Los asados de Molina
                <br />
                <em style={{ color: '#E3B37E' }}>se hacen en Los Barriles</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(243,235,218,0.85)' }}>
                El quincho comunitario está amueblado con los propios
                barriles — la banca de la entrada es un tonel — y la
                piscina espera a un costado para el verano.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <blockquote
                className="rounded-2xl p-6 md:p-8 border-l-4"
                style={{ backgroundColor: 'rgba(243,235,218,0.08)', borderColor: C.terracota }}
              >
                <p className={`${display.className} italic text-lg md:text-xl leading-relaxed mb-3`} style={{ color: '#F3EBDA' }}>
                  “Excelente servicio. Los mejores asados de Molina se
                  comen en Los Barriles.”
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] font-extrabold" style={{ color: '#E3B37E' }}>
                  Andrés G. · reseña de Google
                </p>
              </blockquote>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'quincho', alt: 'Banca hecha de barril frente al quincho comunitario' },
              { src: 'piscina', alt: 'Piscina de Cabañas Los Barriles junto al quincho' },
              { src: 'tinaja', alt: 'Tinaja de madera caliente en el sector de las cabañas' },
              { src: 'barriles', alt: 'Interior del quincho con muebles hechos de barriles' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 80}>
                <div className={`rounded-xl overflow-hidden h-full ${i % 2 === 1 ? 'lg:mt-8' : ''}`} style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}>
                  <img src={`${IMG}/${p.src}.webp`} alt={p.alt} loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Don Daniel + reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Epigrafe>Reseñas</Epigrafe>
            <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              Don Daniel
              <br />
              <em style={{ color: C.bosque }}>abre la reja</em>
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <Stars value={BIZ.rating} color={C.terracota} className="w-5 h-5" />
              <span className={`${display.className} font-semibold text-2xl`} style={{ color: C.ink }}>
                {BIZ.rating}
              </span>
              <span className="text-sm font-bold" style={{ color: C.muted }}>
                · {BIZ.reviews} reseñas en Google
              </span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.muted }}>
              El dueño atiende en persona — las reseñas lo nombran por su
              nombre. Textos reales de la ficha de Google Maps.
            </p>
          </Reveal>
          <ul className="grid gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <li
                  className="rounded-2xl border p-5 md:p-6"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 6px 20px rgba(22,15,7,0.06)' }}
                >
                  <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                    “{r.text}”
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-extrabold" style={{ color: C.terracota }}>
                    {r.author} · Google Maps
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Epigrafe light>Reservas</Epigrafe>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#F3EBDA' }}>
              Aparta la tuya
              <br />
              <em style={{ color: '#E3B37E' }}>por WhatsApp</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(243,235,218,0.82)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(243,235,218,0.72)' }}>
              Dinos cuántos son y para qué fechas: don Daniel responde con
              disponibilidad y la tarifa del día.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.terracota, color: '#FFFFFF' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(243,235,218,0.5)', color: '#F3EBDA' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden mb-5 rotate-[0.8deg]" style={{ boxShadow: '0 18px 44px rgba(0,0,0,0.4)' }}>
                <img
                  src={`${IMG}/portada.webp`}
                  alt="Portón de entrada de Cabañas Los Barriles con el letrero Artesanía en Barriles"
                  loading="lazy"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border min-h-[240px]" style={{ borderColor: 'rgba(243,235,218,0.25)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[260px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F3EBDA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ borderColor: 'rgba(243,235,218,0.14)' }}>
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(243,235,218,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(243,235,218,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,235,218,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
            <Duelas count={24} height={14} className="mb-3" />
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(243,235,218,0.7)' }}>
              Los textos de venta son de muestra; el teléfono, la dirección,
              el equipamiento, las reseñas y las fotos son los reales de la
              ficha de Google Maps y del letrero del portón.
            </p>
          </div>
        </div>
      </footer>
      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
