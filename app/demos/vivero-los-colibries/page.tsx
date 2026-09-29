import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG, HORARIO, SECCIONES, RECORRIDO, RESENAS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' }],
  variable: '--vc-display',
})
const displayIt = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900' }],
  variable: '--vc-display-it',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' }],
  variable: '--vc-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }],
  variable: '--vc-mono',
})

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-los-colibries',
  title: 'Vivero Los Colibríes — plantas del Maule en San Clemente',
  description:
    'Vivero y jardín de barrio en Villa Las Araucarias, San Clemente. Araucarias, frutales, flores de temporada y macetitas, en un patio lleno de plantas. Nota 4,8 en Google. Escríbeles por WhatsApp.',
  image: `${IMG}/malla.webp`,
})

/** Papel crema, tinta hoja, terracota y el rosado de su malla rachel. */
const C = {
  papel: '#F7F2E3',
  papel2: '#EFE7D0',
  tinta: '#25341D',
  tintaSuave: '#4B5A3E',
  hoja: '#3E6B34',
  malla: '#B23A7E',
  mallaOsc: '#8F2D64',
  terracota: '#BC5B33',
  terracotaOsc: '#9C4A28',
  cinta: '#E3A72F',
  crema: '#FBF7EC',
} as const

const CINTAS = [C.hoja, C.malla, C.terracota, C.cinta, '#5B7FA6'] as const

/** Colibrí a ras de trazo — icono pequeño de marca. */
function Colibri({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 26 C8 20 14 15 20 17 C22 13 27 11 31 13 L44 15 L33 20" />
      <path d="M33 20 C38 22 38 28 32 30 C26 32 18 33 13 29 C10 27 9 26 10 26" />
      <path d="M20 17 C16 12 10 11 7 14" />
      <path d="M28 30 C28 35 24 39 20 41" />
      <path d="M33 20 C30 24 26 25 22 24" />
      <circle cx="30" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Tira de cintas de colores, como las que cuelgan en su patio. */
function Cintas({ n = 5, className = 'h-3' }: { n?: number; className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-hidden="true">
      {CINTAS.slice(0, n).map((c, i) => (
        <span key={i} className="w-4 flex-1 basis-4 max-w-4" style={{ background: c, height: '100%' }} />
      ))}
    </div>
  )
}

/** Etiqueta de planta pintada a mano: tarjeta con hoyito y hilo. */
function Etiqueta({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="absolute -top-2 left-5 h-5 w-[3px] rounded-full"
        style={{ background: C.tinta, opacity: 0.55 }}
      />
      <span
        aria-hidden="true"
        className="absolute top-2 left-[27px] h-3 w-3 rounded-full border-2"
        style={{ borderColor: C.tinta, background: C.papel }}
      />
      <div
        className="rounded-lg px-5 pb-5 pt-6"
        style={{
          background: C.crema,
          border: `1.5px solid ${C.tinta}`,
          transform: 'rotate(-0.6deg)',
          boxShadow: `4px 4px 0 rgba(37,52,29,.18)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function ViveroColibriesPage() {
  return (
    <main
      className={`${display.variable} ${displayIt.variable} ${body.variable} ${mono.variable} min-h-screen overflow-x-hidden`}
      style={{ background: C.papel, color: C.tinta, fontFamily: 'var(--vc-body)' }}
    >
      <BlitzNav
        name={BIZ.name}
        links={[
          { href: '#vivero', label: 'El vivero' },
          { href: '#plantas', label: 'Plantas' },
          { href: '#resenas', label: 'Reseñas' },
          { href: '#llegar', label: 'Cómo llegar' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(247,242,227,.94)',
          ink: C.tinta,
          line: `${C.tinta}22`,
          btnBg: C.malla,
          btnInk: '#FFF',
        }}
        ctaLabel="WhatsApp"
      />

      {/* HERO — la malla rachel que se ve desde la calle */}
      <header id="inicio" className="relative">
        <div className="relative h-[78vh] min-h-[480px] w-full">
          <Image
            src={`${IMG}/malla.webp`}
            alt="Interior de Vivero Los Colibríes bajo su malla rachel rosada, con hileras de plantas en maceta — foto de la ficha de Google"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(37,52,29,.30) 0%, rgba(37,52,29,.55) 55%, rgba(37,52,29,.85) 92%)' }}
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 text-[#FBF7EC]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--vc-mono)' }}>
                vivero y jardín · villa las araucarias · san clemente
              </p>
              <h1
                className="mt-3 text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl"
                style={{ fontFamily: 'var(--vc-display)', fontWeight: 400 }}
              >
                El patio lleno de plantas{' '}
                <em style={{ fontFamily: 'var(--vc-display-it)', color: '#F4B8D8' }}>
                  detrás de la malla rosa
                </em>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: 'rgba(251,247,236,.92)' }}>
                En Villa Las Araucarias, San Clemente, un patio de casa se volvió vivero: araucarias,
                frutales, flores de temporada y macetitas, escogidas planta por planta.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: C.malla, color: '#FFF' }}
                >
                  Preguntar por WhatsApp
                </a>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm" style={{ background: 'rgba(37,52,29,.55)', color: '#FBF7EC' }}>
                  <Stars value={5} color="#F4B8D8" className="h-3.5 w-3.5" />
                  {BIZ.rating} · {BIZ.reviews} opiniones
                </span>
              </div>
            </Reveal>
          </div>
        </div>
        <Cintas className="h-3 w-full" />
      </header>

      {/* MARQUESINA — etiquetas como en los letreros a mano del patio */}
      <section className="border-b px-5 py-10" style={{ borderColor: `${C.tinta}22` }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {['araucarias de semillero', 'frambuesa y berries', 'flores de temporada', 'macetitas de interior', 'tierra, consejos y buenos precios'].map(
            (t) => (
              <Reveal key={t}>
                <span className="text-sm sm:text-base" style={{ fontFamily: 'var(--vc-mono)', color: C.tintaSuave }}>
                  {t}
                </span>
              </Reveal>
            ),
          )}
        </div>
      </section>

      {/* EL VIVERO — recorrido por sus fotos reales */}
      <section id="vivero" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--vc-mono)', color: C.mallaOsc }}>
            el recorrido
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--vc-display)' }}>
            Un patio de casa que creció hasta ser vivero
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: C.tintaSuave }}>
            Fotos de su propia ficha de Google: la malla rosada que se ve desde la calle, el sendero de
            grava entre canteros, el domo de malla y el patio con banderines.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {RECORRIDO.map((r, i) => (
            <Reveal key={r.foto} delay={i * 80}>
              <figure className="group">
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ border: `1.5px solid ${C.tinta}`, boxShadow: `6px 6px 0 rgba(37,52,29,.14)` }}
                >
                  <Image
                    src={`${IMG}/${r.foto}.webp`}
                    alt={r.alt}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <figcaption
                    className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs"
                    style={{ background: C.crema, color: C.tinta, fontFamily: 'var(--vc-mono)', border: `1px solid ${C.tinta}` }}
                  >
                    {r.pie}
                  </figcaption>
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                  {r.texto}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PLANTAS — tarjetas-etiqueta, cada una con su foto real */}
      <section id="plantas" className="px-5 py-16 sm:py-20" style={{ background: C.papel2 }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--vc-mono)', color: C.terracotaOsc }}>
              qué se lleva la gente
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--vc-display)' }}>
              Cada planta con su etiqueta
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: C.tintaSuave }}>
              No hay catálogo escrito: el stock cambia con la temporada. Esto es lo que hoy se ve en el
              vivero, según sus fotos y reseñas.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {SECCIONES.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <Etiqueta>
                  <span
                    className="text-[11px] uppercase tracking-[0.22em]"
                    style={{ fontFamily: 'var(--vc-mono)', color: C.mallaOsc }}
                  >
                    {s.n} · {s.etiqueta}
                  </span>
                  <div className="relative mt-3 overflow-hidden rounded-md">
                    <Image
                      src={`${IMG}/${s.foto}.webp`}
                      alt={s.alt}
                      width={1200}
                      height={1200}
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl leading-snug" style={{ fontFamily: 'var(--vc-display)' }}>
                    {s.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                    {s.texto}
                  </p>
                </Etiqueta>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--vc-mono)', color: C.hoja }}>
                lo que dicen
              </p>
              <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--vc-display)' }}>
                “Buenos precios y plantas bien cuidadas”
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Stars value={5} color={C.malla} className="h-4 w-4" />
              <span className="text-lg font-semibold">{BIZ.rating}</span>
              <span className="text-sm" style={{ color: C.tintaSuave }}>· {BIZ.reviews} opiniones en Google</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 90}>
              <blockquote
                className="h-full rounded-2xl p-6"
                style={{ background: C.crema, border: `1.5px solid ${C.tinta}`, boxShadow: `5px 5px 0 rgba(178,58,126,.14)` }}
              >
                <Stars value={5} color={C.malla} className="h-3.5 w-3.5" />
                <p className="mt-3 text-base leading-relaxed" style={{ color: C.tinta }}>
                  “{r.texto}”
                </p>
                <footer className="mt-4 text-sm" style={{ fontFamily: 'var(--vc-mono)', color: C.mallaOsc }}>
                  — {r.nombre}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="mt-5 text-xs" style={{ color: C.tintaSuave }}>
            Reseñas de su ficha de Google. Algunas traducidas del original por Google Maps.
          </p>
        </Reveal>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="llegar" className="px-5 py-16 sm:py-20" style={{ background: C.tinta, color: C.crema }}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--vc-mono)', color: '#F4B8D8' }}>
                cómo llegar
              </p>
              <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--vc-display)' }}>
                Busca la malla rosa en Villa Las Araucarias
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: 'rgba(251,247,236,.85)' }}>
                {BIZ.address}, {BIZ.city}, Maule. El vivero es un patio de casa: desde la calle se
                reconoce por la malla rachel y los banderines.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-6 space-y-2">
                {HORARIO.map((h) => (
                  <li key={h.days} className="flex items-baseline justify-between gap-4 border-b pb-2 text-base" style={{ borderColor: 'rgba(251,247,236,.2)' }}>
                    <span style={{ color: 'rgba(251,247,236,.75)' }}>{h.days}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: C.malla, color: '#FFF' }}
                >
                  Escribir al {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ border: `1.5px solid ${C.crema}`, color: C.crema }}
                >
                  Abrir en Google Maps
                </a>
              </div>
              <p className="mt-4 text-sm" style={{ color: 'rgba(251,247,236,.7)' }}>
                También en Instagram como {BIZ.instagram}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl" style={{ border: `1.5px solid ${C.crema}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                className="h-full min-h-[320px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-5 py-16 text-center">
        <Reveal>
          <Colibri className="mx-auto h-12 w-12" />
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl" style={{ fontFamily: 'var(--vc-display)' }}>
            Vuelve con una planta para tu casa
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base" style={{ color: C.tintaSuave }}>
            Pregunta qué hay esta semana, cuánto cuesta y cómo plantarla. Responden por WhatsApp.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full px-7 py-3 text-base font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: C.hoja, color: '#FFF' }}
          >
            Consultar por WhatsApp
          </a>
        </Reveal>
      </section>

      <footer className="border-t px-5 py-8 pb-6" style={{ borderColor: `${C.tinta}22` }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center text-sm" style={{ color: C.tintaSuave }}>
          <span className="font-semibold" style={{ color: C.tinta }}>{BIZ.name}</span>
          <span>{BIZ.address} · {BIZ.city}, Maule</span>
          <span style={{ fontFamily: 'var(--vc-mono)' }}>{BIZ.phoneDisplay} · {BIZ.instagram}</span>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
