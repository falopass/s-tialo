import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
  variable: '--font-body',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  papel: '#FDFAF1',
  papelDeep: '#F3EDD8',
  amarillo: '#FFDD00',
  azul: '#2B3AA8',
  azulDeep: '#1E2979',
  rojo: '#C22A1F',
  verde: '#237A3E',
  tinta: '#1F2433',
  tintaSuave: '#5A6070',
  linea: 'rgba(31,36,51,0.14)',
}

const CUADERNO = {
  backgroundColor: C.papel,
  backgroundImage:
    'repeating-linear-gradient(0deg, transparent 0 27px, rgba(43,58,168,0.10) 27px 28px)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jardin-infantil-abc',
  title: 'Jardín Infantil ABC — Sala cuna y jardín en San Clemente desde 1998',
  description:
    'Sala cuna y jardín infantil particular en Clodomiro Silva 578, San Clemente, desde 1998. Horarios con jornada partida, talleres y mapa. Teléfono +56 71 262 1546.',
  image: `${IMG}/mural.webp`,
})

const NAV_LINKS = [
  { label: 'El jardín', href: '#jardin' },
  { label: 'Salas', href: '#salas' },
  { label: 'Datos', href: '#datos' },
  { label: 'Mapa', href: '#mapa' },
]

const SALAS = [
  {
    tri: 'A',
    color: C.verde,
    titulo: 'Sala Cuna',
    detalle: 'Los más chicos, en su propio ritmo: cuna, rutina y cariño desde el primer día.',
  },
  {
    tri: 'B',
    color: C.rojo,
    titulo: 'Niveles Medios',
    detalle: 'Medio Menor y Medio Mayor: juego dirigido, primeras letras y convivencia.',
  },
  {
    tri: 'C',
    color: C.azul,
    titulo: 'Talleres',
    detalle: 'Ecológico y ReciclArte, los talleres que ellos mismos anuncian en su cartelera.',
  },
]

function Triangulo({ letra, color }: { letra: string; color: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-11 items-end justify-center pb-1 font-[family-name:var(--font-display)] text-base font-extrabold"
      style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)', backgroundColor: color, color: '#fff' }}
    >
      {letra}
    </span>
  )
}

function SelloBosquejo() {
  return (
    <span className="inline-flex -rotate-3 items-center gap-1.5 rounded-md border-2 border-dashed px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em]" style={{ borderColor: C.rojo, color: C.rojo }}>
      Bosquejo · ilustración, no foto
    </span>
  )
}

function BosquejoSala() {
  return (
    <svg viewBox="0 0 320 220" className="w-full" role="img" aria-label="Ilustración tipo bosquejo de una sala de clases con bloques, alfombra y ventana">
      <rect x="0" y="0" width="320" height="220" fill="#FFFDF4" />
      {/* ventana con sol */}
      <rect x="220" y="20" width="70" height="60" rx="4" fill="#BFE3F4" stroke={C.azul} strokeWidth="3" strokeDasharray="6 4" />
      <circle cx="255" cy="50" r="14" fill={C.amarillo} stroke={C.rojo} strokeWidth="2.5" strokeDasharray="4 3" />
      {/* repisa con bloques */}
      <rect x="30" y="95" width="120" height="10" rx="3" fill="#C9A27E" stroke={C.tinta} strokeWidth="2" />
      <rect x="40" y="65" width="30" height="30" rx="3" fill={C.verde} opacity="0.85" />
      <rect x="75" y="65" width="30" height="30" rx="3" fill={C.rojo} opacity="0.85" />
      <rect x="110" y="65" width="30" height="30" rx="3" fill={C.azul} opacity="0.85" />
      <text x="48" y="88" fontSize="16" fontWeight="800" fill="#fff">A</text>
      <text x="83" y="88" fontSize="16" fontWeight="800" fill="#fff">B</text>
      <text x="118" y="88" fontSize="16" fontWeight="800" fill="#fff">C</text>
      {/* alfombra */}
      <ellipse cx="160" cy="175" rx="110" ry="28" fill="#FBE9B7" stroke={C.amarillo} strokeWidth="3" strokeDasharray="8 5" />
      {/* plantita */}
      <rect x="40" y="140" width="22" height="26" rx="3" fill="#D08A4E" stroke={C.tinta} strokeWidth="2" />
      <path d="M51 140 C51 124 40 120 36 128 M51 140 C51 124 62 118 66 127 M51 140 C52 128 55 122 51 116" stroke={C.verde} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* láminas */}
      <rect x="170" y="30" width="30" height="40" rx="2" fill="#fff" stroke={C.rojo} strokeWidth="2" strokeDasharray="5 4" transform="rotate(-4 185 50)" />
      <rect x="168" y="76" width="34" height="24" rx="2" fill="#fff" stroke={C.azul} strokeWidth="2" strokeDasharray="5 4" transform="rotate(3 185 88)" />
    </svg>
  )
}

function BosquejoPatio() {
  return (
    <svg viewBox="0 0 320 220" className="w-full" role="img" aria-label="Ilustración tipo bosquejo de un patio con resbalín, árbol y pelota">
      <rect x="0" y="0" width="320" height="220" fill="#EAF4DC" />
      {/* pasto */}
      <path d="M0 160 Q80 148 160 158 T320 156 L320 220 L0 220 Z" fill="#BFE09A" stroke={C.verde} strokeWidth="2.5" strokeDasharray="7 5" />
      {/* resbalín */}
      <path d="M210 150 L210 60 Q210 50 222 50 L240 50" stroke={C.azul} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M240 50 L285 140" stroke={C.rojo} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M222 62 L232 62 M226 78 L238 78 M230 94 L244 94 M234 110 L250 110" stroke={C.azul} strokeWidth="3.5" strokeLinecap="round" />
      {/* árbol */}
      <rect x="70" y="105" width="14" height="55" rx="4" fill="#9C6B3F" stroke={C.tinta} strokeWidth="2" />
      <circle cx="77" cy="90" r="34" fill={C.verde} opacity="0.85" />
      <circle cx="55" cy="100" r="20" fill={C.verde} opacity="0.7" />
      <circle cx="100" cy="98" r="22" fill={C.verde} opacity="0.7" />
      {/* sol */}
      <circle cx="40" cy="38" r="16" fill={C.amarillo} stroke={C.rojo} strokeWidth="2.5" strokeDasharray="4 3" />
      <path d="M40 14 L40 8 M58 30 L64 26 M58 46 L64 50 M22 30 L16 26 M22 46 L16 50 M40 62 L40 68" stroke={C.amarillo} strokeWidth="4" strokeLinecap="round" />
      {/* pelota */}
      <circle cx="150" cy="172" r="14" fill="#fff" stroke={C.rojo} strokeWidth="3" />
      <path d="M138 165 Q150 172 162 165 M138 179 Q150 172 162 179" stroke={C.azul} strokeWidth="2.5" fill="none" />
      {/* cerca */}
      <path d="M120 160 L120 138 M140 160 L140 138 M160 160 L160 138 M180 160 L180 138" stroke="#C9A27E" strokeWidth="5" strokeLinecap="round" />
      <path d="M114 144 L186 144" stroke="#C9A27E" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default function JardinInfantilABC() {
  return (
    <main
      className={`${body.variable} ${display.variable} font-[family-name:var(--font-body)] antialiased`}
      style={{ ...SPACING, ...CUADERNO, color: C.tinta }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 object-contain" aria-hidden="true" />
            <span className="font-[family-name:var(--font-display)] text-sm font-extrabold tracking-wide">
              Jardín ABC
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass="font-[family-name:var(--font-display)]"
        theme={{
          over: 'light',
          bar: C.papel,
          ink: C.tinta,
          line: C.linea,
          btnBg: C.azul,
          btnInk: '#FFFFFF',
        }}
      />

      {/* HERO — la primera página del cuaderno */}
      <header id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-0 top-24 h-full w-1.5 md:w-2"
          style={{ background: `linear-gradient(${C.verde} 0 33%, ${C.rojo} 33% 66%, ${C.azul} 66% 100%)` }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pt-36">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.azul }}>
              {BIZ.rubro} · {BIZ.city} · desde {BIZ.since}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.0] tracking-tight md:text-7xl">
              Donde San Clemente aprende su primer ABC
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed md:text-lg" style={{ color: C.tintaSuave }}>
              Sala cuna y jardín infantil particular en Clodomiro Silva: casi tres décadas
              recibiendo a los párvulos de la comuna, con el mural de las estaciones
              pintado en su muro.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex h-11 items-center rounded-full px-6 text-sm font-extrabold text-white"
                style={{ backgroundColor: C.azul }}
              >
                Llamar al jardín
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-full border-2 px-6 text-sm font-extrabold"
                style={{ borderColor: C.azul, color: C.azulDeep }}
              >
                Cómo llegar
              </a>
            </div>
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{ backgroundColor: C.papelDeep }}
            >
              <Stars value={BIZ.rating} color={C.rojo} className="text-sm" />
              <span className="text-xs font-bold" style={{ color: C.tinta }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative rotate-1">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 z-10 h-7 w-24 rotate-[-6deg] rounded-sm opacity-80"
                style={{ backgroundColor: 'rgba(255,221,0,0.75)' }}
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-3 right-8 z-10 h-7 w-24 rotate-[5deg] rounded-sm opacity-80"
                style={{ backgroundColor: 'rgba(255,221,0,0.75)' }}
              />
              <Image
                src={`${IMG}/calle.webp`}
                alt="Calle Clodomiro Silva frente al jardín: el muro pintado y la reja azul de Jardín Infantil ABC"
                width={1100}
                height={688}
                priority
                className="w-full rounded-lg border-8 border-white object-cover shadow-xl"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <figcaption
                className="absolute bottom-5 left-4 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold text-white"
                style={{ backgroundColor: C.azulDeep }}
              >
                Foto real · Street View ago. 2022
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      {/* EL MURO — la foto que sí existe */}
      <section id="jardin" className="relative overflow-hidden">
        <Image
          src={`${IMG}/mural.webp`}
          alt="Mural del jardín ABC con las estaciones del año pintadas, un niño en bicicleta y la vereda con rayuela de colores"
          width={1200}
          height={750}
          className="h-[52vh] w-full object-cover md:h-[64vh]"
          sizes="100vw"
        />
        <div
          className="absolute inset-x-0 bottom-0 px-5 pb-7 pt-24 md:px-8"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(30,41,121,0.92))' }}
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-white md:text-4xl">
                El muro que le enseña las estaciones a la cuadra
              </h2>
              <p className="mt-2 max-w-xl text-sm font-bold text-white md:text-base">
                Invierno, Primavera y Verano pintados a mano, con la vereda en rayuela
                a la entrada. Así se ve el jardín desde la calle.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SALAS — tres triángulos como su logo */}
      <section id="salas" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.azul }}>
            Lo que ofrece
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-5xl">
            Sala cuna, niveles medios y talleres
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: C.tintaSuave }}>
            Tal como lo anuncia su propia cartelera: la ABC recibe desde la cuna
            hasta los niveles medios, con talleres durante el año.
          </p>
        </Reveal>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {SALAS.map((s, i) => (
            <Reveal key={s.tri} delay={i * 90}>
              <article
                className="rounded-2xl border-2 bg-white px-6 pb-7 pt-6 shadow-sm"
                style={{ borderColor: C.linea }}
              >
                <Triangulo letra={s.tri} color={s.color} />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-extrabold">
                  {s.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                  {s.detalle}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BOSQUEJOS — escenas imaginadas, marcadas */}
      <section className="mx-auto max-w-6xl px-5 pb-14 md:px-8 md:pb-20">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl">
              Así se imagina un día adentro
            </h2>
            <SelloBosquejo />
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
            El jardín no publica fotos de sus salas: estas ilustraciones son solo una idea
            de cómo podría verse su sitio. Lo real se conoce visitándolo.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { titulo: 'La sala de los bloques', pie: 'Repisa con letras, alfombra redonda y sol en la ventana', Svg: BosquejoSala },
            { titulo: 'El patio de la tarde', pie: 'Resbalín, árbol y pelota bajo el sol de crayón', Svg: BosquejoPatio },
          ].map(({ titulo, pie, Svg }) => (
            <Reveal key={titulo}>
              <figure className="overflow-hidden rounded-2xl border-2 border-dashed bg-white p-3" style={{ borderColor: C.rojo }}>
                <div className="overflow-hidden rounded-xl">
                  <Svg />
                </div>
                <figcaption className="flex flex-wrap items-center justify-between gap-2 px-2 pb-1 pt-3">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-extrabold">{titulo}</p>
                    <p className="text-xs font-bold" style={{ color: C.tintaSuave }}>{pie}</p>
                  </div>
                  <SelloBosquejo />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DATOS — la hoja de datos */}
      <section id="datos" className="py-14 md:py-20" style={{ backgroundColor: C.azulDeep }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-8">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.amarillo }}>
              La letra chica
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold text-white md:text-4xl">
              Horario partido, casa llena
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white md:text-base">
              Atienden en dos bloques: mañana y tarde, con el almuerzo de por medio.
              Viernes con salida más temprana.
            </p>
            <dl className="mt-7 space-y-4 text-sm">
              <div className="flex gap-3 border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                <dt className="w-24 shrink-0 pt-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white/90">Dirección</dt>
                <dd className="font-bold text-white">{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div className="flex gap-3 border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                <dt className="w-24 shrink-0 pt-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white/90">Teléfono</dt>
                <dd className="font-bold text-white">{BIZ.phoneDisplay}</dd>
              </div>
              <div className="flex gap-3 border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                <dt className="w-24 shrink-0 pt-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white/90">Correo</dt>
                <dd className="font-bold text-white">{BIZ.email}</dd>
              </div>
              <div className="flex gap-3" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                <dt className="w-24 shrink-0 pt-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white/90">Desde</dt>
                <dd className="font-bold text-white">{BIZ.since} · {BIZ.legal}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border-4 p-6 md:p-8" style={{ borderColor: C.amarillo, backgroundColor: C.azul }}>
              <p className="font-[family-name:var(--font-display)] text-xl font-extrabold text-white">Horario de atención</p>
              <dl className="mt-4 space-y-3">
                {BIZ.hours.map(([d, h]) => (
                  <div key={d} className="flex items-baseline justify-between gap-4 border-b border-dashed pb-3" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                    <dt className="text-sm font-bold text-white/90">{d}</dt>
                    <dd className="font-[family-name:var(--font-display)] text-lg font-extrabold text-white">{h}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={CALL_LINK}
                className="mt-6 inline-flex h-11 items-center rounded-full px-6 text-sm font-extrabold"
                style={{ backgroundColor: C.amarillo, color: C.tinta }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="mapa" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.azul }}>
              Cómo llegar
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl">
              Clodomiro Silva 578, San Clemente
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
              A cuadras del centro, se reconoce al tiro por el muro del mural
              y la vereda pintada con rayuela.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border-4" style={{ borderColor: C.azul }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="h-[320px] w-full md:h-[360px]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-5 pb-14 md:px-8 md:pb-16">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-10 text-center md:px-12"
            style={{ backgroundColor: C.amarillo }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-24 h-72 w-72 select-none opacity-25"
              style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)', backgroundColor: C.azul }}
            />
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="mx-auto h-24 w-24 rounded-2xl bg-white object-contain p-2 shadow-md"
            />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl" style={{ color: C.tinta }}>
              Un cupo en la ABC empieza con una llamada
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm font-bold" style={{ color: C.tinta }}>
              Jardín infantil particular con más de 20 años de trayectoria. Pregunta
              por sala cuna y niveles medios.
            </p>
            <a
              href={CALL_LINK}
              className="mt-6 inline-flex h-11 items-center rounded-full px-7 text-sm font-extrabold text-white"
              style={{ backgroundColor: C.azul }}
            >
              {BIZ.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t px-5 py-6 md:px-8" style={{ borderColor: C.linea }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-bold" style={{ color: C.tintaSuave }}>
            {BIZ.name} · {BIZ.legal} · {BIZ.address}, {BIZ.city}
          </p>
          <p className="text-xs" style={{ color: C.tintaSuave }}>
            {BIZ.phoneDisplay} · {BIZ.email} · fb/{BIZ.fb}
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.azul} fg="#fff" />
    </main>
  )
}
