import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el bosquecito». El jardín se llama Bosque de Niño y la
 * fachada real (muro crema, tabiques de madera, mural JUNJI) fija la paleta:
 * crema de papel, pino profundo y miel. El hilo conductor es el horario del
 * jardín — el día ordenado en momentos, con las escenas ilustradas marcadas
 * como bosquejo donde la ficha no tiene fotos. Rubik redondo para los
 * titulares, Karla para el cuerpo, Space Mono para los datos.
 */
const C = {
  crema: '#F5EFE0',
  card: '#FCF8ED',
  pino: '#1E3D2F',
  deep: '#122A1F',
  ink: '#203B2D',
  miel: '#D9A23A',
  mielInk: '#3A2A08',
  cielo: '#BFD9D3',
  muted: '#5F7266',
  line: 'rgba(30,61,47,0.16)',
}

export const metadata = demoMetadata({
  slug: 'jardin-bosque-de-nino',
  title: 'Jardín Bosque de Niño — San Clemente',
  description:
    'Jardín infantil programa JUNJI en Villa Inglesa, San Clemente: de 6 meses a 5 años, 08:30 a 16:30. Demo de sitio web por Sitiazo.',
  image: IMG.fachada,
})

function BosquejoBadge() {
  return (
    <span
      className={`${mono.className} absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-bold`}
      style={{ backgroundColor: 'rgba(18,42,31,0.82)', color: '#F3DFA8' }}
    >
      Bosquejo · referencia
    </span>
  )
}

/** Hilera de pinos que cierra el hero como límite del bosque. */
function Arboleda({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 90 V58 Q120 30 240 52 T480 50 T720 44 T960 52 T1200 46 T1440 56 V90 Z" fill={C.pino} />
      <g fill={C.pino}>
        <path d="M120 58 l14 -30 14 30 Z" />
        <path d="M134 40 a13 13 0 1 1 0.1 0 Z" />
        <rect x="132" y="52" width="4" height="8" />
        <path d="M540 52 l16 -36 16 36 Z" />
        <path d="M548 34 l8 -18 8 18 Z" />
        <circle cx="910" cy="30" r="14" />
        <rect x="907" y="40" width="5" height="12" />
        <path d="M1180 50 l15 -32 15 32 Z" />
        <path d="M1188 32 l7 -16 7 16 Z" />
      </g>
    </svg>
  )
}

const MOMENTOS = [
  {
    hora: '08:30',
    titulo: 'Llegada y juego libre',
    texto:
      'Los chicos entran al bosque: juego en el patio, saludos y la rutina tranquila con que parte la mañana.',
    img: IMG.patio,
    alt: 'Ilustración de niños jugando en un patio con columpio y resbalín (bosquejo)',
    bosquejo: true,
  },
  {
    hora: '12:30',
    titulo: 'Almuerzo en la mesa',
    texto:
      'Comida compartida en la sala, sentados en la misma mesa: la hora de comer también se aprende en comunidad.',
    img: IMG.almuerzo,
    alt: 'Ilustración de niños almorzando en una mesa de madera (bosquejo)',
    bosquejo: true,
  },
  {
    hora: '15:00',
    titulo: 'Cuentos en el rincón',
    texto:
      'Después de la siesta de los más chicos, libros y lápices en el rincón de lectura hasta la salida.',
    img: IMG.lectura,
    alt: 'Ilustración de niños mirando un cuento en una alfombra redonda (bosquejo)',
    bosquejo: true,
  },
  {
    hora: '16:30',
    titulo: 'Hora de volver a casa',
    texto:
      'Las familias retiran a los niños y el bosque queda en silencio hasta la mañana siguiente.',
    img: IMG.entorno,
    alt: 'Plaza con árboles y quincho en los alrededores del jardín, en San Clemente',
    bosquejo: false,
  },
]

const FICHA = [
  ['Programa', 'JUNJI'],
  ['Edades', '6 meses a 5 años'],
  ['Jornada', '08:30 a 16:30'],
  ['Trayectoria', '+30 años'],
  ['Sector', 'Villa Inglesa'],
]

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 20 24" className="w-4 h-5" aria-hidden="true">
              <path d="M10 0 L19 16 H13 V24 H7 V16 H1 Z" fill="currentColor" />
            </svg>
            {BIZ.short}
          </span>
        }
        links={[
          { label: 'El día', href: '#un-dia' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Matrícula por WhatsApp"
        fontClass={display.className}
        theme={{ over: 'light', bar: C.crema, ink: C.pino, line: C.line, btnBg: C.miel, btnInk: C.mielInk }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <p
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`}
                style={{ color: C.muted }}
              >
                Jardín infantil · programa JUNJI · San Clemente
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} mt-4 font-bold leading-[1.04] tracking-tight text-[38px] md:text-6xl`}
                style={{ color: C.pino }}
              >
                El bosquecito de San Clemente
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Jardín infantil para niños y niñas de 6 meses a 5 años, en Villa Inglesa.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-12 px-6 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.miel, color: C.mielInk }}
                >
                  Matrícula por WhatsApp
                </a>
                <span
                  className="inline-flex items-center gap-2 h-12 px-4 rounded-full border text-sm"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  <Stars value={BIZ.rating} color={C.miel} className="w-3.5 h-3.5" />
                  5,0 en Google
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-t-full rounded-b-[2rem]"
                style={{ backgroundColor: C.cielo, opacity: 0.5 }}
                aria-hidden="true"
              />
              <figure
                className="relative overflow-hidden rounded-t-full rounded-b-[2rem] border-4"
                style={{ borderColor: C.card }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                <img
                  src={IMG.fachada}
                  alt="Fachada del Jardín Bosque de Niño con su mural, en San Clemente"
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                />
              </figure>
              <span
                className={`${mono.className} absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.14em] whitespace-nowrap`}
                style={{ backgroundColor: C.pino, color: '#F5EFE0' }}
              >
                Los Nogales 330 · Villa Inglesa
              </span>
            </div>
          </Reveal>
        </div>
        <Arboleda className="w-full h-12 md:h-16 block" />
      </section>

      {/* ── Ficha JUNJI ── */}
      <section className="pt-8 pb-10 md:pt-10 md:pb-12" style={{ backgroundColor: C.pino }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6">
            {FICHA.map(([k, v], i) => (
              <Reveal key={k} delay={i * 60}>
                <div className={i < FICHA.length - 1 ? 'md:border-r md:pr-6' : ''} style={{ borderColor: 'rgba(245,239,224,0.15)' }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(245,239,224,0.6)' }}>
                    {k}
                  </p>
                  <p className={`${display.className} mt-1 text-lg md:text-xl font-semibold`} style={{ color: C.crema }}>
                    {v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Un día en el bosque ── */}
      <section id="un-dia" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            De 08:30 a 16:30, en Villa Inglesa
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-bold tracking-tight`} style={{ color: C.pino }}>
            Un día en el bosque, momento a momento
          </h2>
        </Reveal>
        <div className="mt-10 space-y-10 md:space-y-14">
          {MOMENTOS.map((m, i) => (
            <Reveal key={m.hora} delay={i * 60}>
              <article className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <figure className="relative overflow-hidden rounded-3xl border" style={{ borderColor: C.line }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                  <img src={m.img} alt={m.alt} className="w-full aspect-[3/2] object-cover" loading="lazy" />
                  {m.bosquejo && <BosquejoBadge />}
                </figure>
                <div>
                  <p className={`${mono.className} text-sm font-bold tracking-[0.18em]`} style={{ color: C.miel }}>
                    {m.hora}
                  </p>
                  <h3 className={`${display.className} mt-2 text-2xl md:text-3xl font-bold`} style={{ color: C.pino }}>
                    {m.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                    {m.texto}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <p className="mt-8 text-sm leading-relaxed max-w-xl" style={{ color: C.muted }}>
            Las escenas del día están dibujadas como bosquejo porque la ficha del jardín aún no
            publica fotos de sus espacios — al activar el sitio se reemplazan por las fotos reales.
          </p>
        </Reveal>
      </section>

      {/* ── Reseña ── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(245,239,224,0.55)' }}>
              Lo que opinan las familias
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-4xl font-bold tracking-tight`} style={{ color: C.crema }}>
              Las familias que pasan por el bosque lo recomiendan
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="mt-8 mx-auto max-w-sm rounded-3xl p-6 text-left border"
              style={{ backgroundColor: 'rgba(245,239,224,0.06)', borderColor: 'rgba(245,239,224,0.16)' }}
            >
              <div className="flex items-center justify-between gap-3">
                <Stars value={5} color={C.miel} />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(245,239,224,0.6)' }}>
                  Google
                </span>
              </div>
              <p className="mt-4 text-lg font-semibold" style={{ color: C.crema }}>
                sasha morales
              </p>
              <p className="mt-1 text-sm" style={{ color: 'rgba(245,239,224,0.65)' }}>
                Reseña de 5 estrellas
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className={`${mono.className} mt-5 text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(245,239,224,0.55)' }}>
              {BIZ.rating.toFixed(1).replace('.', ',')} de 5 · {BIZ.reviews} reseña en Google
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                El bosque, en el mapa
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl font-bold tracking-tight`} style={{ color: C.pino }}>
                A pasos de las casas de Villa Inglesa
              </h2>
              <dl className="mt-6 space-y-3 text-base">
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Horario
                  </dt>
                  <dd>Lunes a viernes, 08:30 a 16:30</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Teléfono
                  </dt>
                  <dd className={mono.className}>{BIZ.phoneDisplay}</dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 tap-44`}
                style={{ color: C.pino }}
              >
                Ver ficha en Google Maps
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border" style={{ borderColor: C.line }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}, ${BIZ.city}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 md:px-8 pb-14">
        <Reveal>
          <div
            className="max-w-6xl mx-auto rounded-[2rem] px-6 py-10 md:px-12 md:py-14 text-center"
            style={{ backgroundColor: C.pino }}
          >
            <h2 className={`${display.className} text-3xl md:text-4xl font-bold tracking-tight`} style={{ color: C.crema }}>
              ¿Buscas jardín para tu hijo en San Clemente?
            </h2>
            <p className="mt-3 text-base md:text-lg max-w-lg mx-auto" style={{ color: 'rgba(245,239,224,0.72)' }}>
              Consulta por cupos y matrícula directo al WhatsApp del jardín.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center h-12 px-7 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.miel, color: C.mielInk }}
            >
              Matrícula por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${display.className} text-lg font-bold`} style={{ color: C.pino }}>
                {BIZ.name}
              </p>
              <p className="mt-1 text-sm" style={{ color: C.muted }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 rounded-full text-sm font-bold self-start md:self-auto active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.pino, color: C.crema }}
            >
              Matrícula por WhatsApp
            </a>
          </div>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
