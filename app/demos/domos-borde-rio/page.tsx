import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_RESERVA,
  FB_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  TARIFAS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2' }],
})
const displayIt = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2' }],
})

/**
 * Dirección de arte: «refugio entre árboles» — noche profunda, vapor de
 * tinaja y bosque en capas. Cormorant Garamond pone la voz editorial e
 * íntima (con itálica para las palabras clave); Jost es el texto. El
 * motivo gráfico es el arco del domo, repetido en los marcos de foto y
 * en el ornamento de los rótulos, y las capas de bosque que separan la
 * página como una quebrada. Movimiento: zoom lentísimo en el hero y dos
 * láminas de niebla derivando en bucle; todo en transform/opacity.
 */
const C = {
  noche: '#0E1A16',
  bosque: '#1E3328',
  crema: '#F2EDE3',
  cobre: '#C07A4A',
  // cobre oscurecido: sobre crema el original llega solo a 2.9:1
  cobreInk: '#A0522D',
  niebla: '#A9C2B4',
  muted: '#5A6B60',
  lineCream: 'rgba(30,51,40,0.2)',
  lineDark: 'rgba(242,237,227,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'domos-borde-rio',
  title: 'Domos Borde Río — Domos con tinaja caliente en Chillán, Ñuble',
  description:
    'Alojamiento en domos en Rinconada de Cato, Chillán: tinaja caliente, quincho y piscina. Desde $65.000 la noche. Reserva directa por WhatsApp.',
  image: '/demos/domos-borde-rio/hero.webp',
})

const NAV_LINKS = [
  { label: 'El domo', href: '#domo' },
  { label: 'La tinaja', href: '#tinaja' },
  { label: 'Valores', href: '#valores' },
  { label: 'Cómo llegar', href: '#donde' },
]

// ── Motivos: arco del domo y capas de bosque ─────────────────

/** Medio arco trazado: la silueta del domo como ornamento. */
function Arco({
  color = C.cobre,
  className = '',
}: {
  color?: string
  className?: string
}) {
  return (
    <svg viewBox="0 0 40 22" className={className} aria-hidden="true">
      <path
        d="M4 20 A16 16 0 0 1 36 20"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Rótulo de sección: arco + texto en versalitas. */
function Eyebrow({
  children,
  light = false,
  center = false,
}: {
  children: React.ReactNode
  light?: boolean
  center?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] uppercase tracking-[0.32em] font-semibold mb-5 ${
        center ? 'justify-center' : ''
      }`}
      style={{ color: light ? C.niebla : C.muted }}
    >
      <Arco className="w-8 h-[18px] shrink-0" />
      {children}
    </p>
  )
}

/**
 * Capas de bosque: tres filas de pinos a distinta profundidad.
 * Sirve de transición entre la foto del hero y el papel crema,
 * y entre el día y la noche del cierre.
 */
function Bosque({ color, className = '' }: { color: string; className?: string }) {
  const filas = [
    { alto: 30, paso: 34, ini: 6, op: 0.3 },
    { alto: 38, paso: 46, ini: 22, op: 0.55 },
    { alto: 46, paso: 38, ini: 2, op: 1 },
  ]
  return (
    <svg
      viewBox="0 0 240 48"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {filas.map((f) =>
        Array.from({ length: Math.ceil(240 / f.paso) + 1 }, (_, i) => f.ini + i * f.paso).map(
          (x) => (
            <path
              key={`${f.alto}-${x}`}
              d={`M${x} ${48 - f.alto} L${x + 9} 48 H${x - 9} Z`}
              fill={color}
              opacity={f.op}
            />
          ),
        ),
      )}
    </svg>
  )
}

export default function DomosBordeRioPage() {
  return (
    <div
      className={`${body.className} dbr min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.crema, color: C.bosque }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .dbr a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        @keyframes dbr-zoom { from { transform: scale(1) } to { transform: scale(1.09) } }
        @keyframes dbr-niebla-a { from { transform: translateX(-6%) } to { transform: translateX(6%) } }
        @keyframes dbr-niebla-b { from { transform: translateX(5%) } to { transform: translateX(-5%) } }
        .dbr-hero-img { animation: dbr-zoom 30s ease-in-out infinite alternate }
        .dbr-fog-a { animation: dbr-niebla-a 26s ease-in-out infinite alternate }
        .dbr-fog-b { animation: dbr-niebla-b 34s ease-in-out infinite alternate }
        @media (prefers-reduced-motion: reduce) {
          .dbr-hero-img, .dbr-fog-a, .dbr-fog-b { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(14,26,22,0.92)',
          ink: C.crema,
          line: C.lineDark,
          btnBg: C.cobre,
          btnInk: C.noche,
        }}
      />

      {/* ── Hero: noche, río y niebla ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.noche }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Domo de Domos Borde Río entre los árboles, en Rinconada de Cato, Chillán"
          fill
          priority
          sizes="100vw"
          className="dbr-hero-img object-cover"
        />
        {/* velo noche */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,26,22,0.62) 0%, rgba(14,26,22,0.26) 45%, rgba(14,26,22,0.9) 100%)',
          }}
          aria-hidden="true"
        />
        {/* láminas de niebla en bucle */}
        <div
          className="dbr-fog-a pointer-events-none absolute bottom-[6%] -left-1/4 h-[42%] w-[150%]"
          style={{
            background:
              'radial-gradient(55% 80% at 30% 55%, rgba(169,194,180,0.2) 0%, rgba(169,194,180,0) 70%), radial-gradient(45% 70% at 72% 40%, rgba(169,194,180,0.13) 0%, rgba(169,194,180,0) 70%)',
            filter: 'blur(28px)',
          }}
          aria-hidden="true"
        />
        <div
          className="dbr-fog-b pointer-events-none absolute top-[10%] -right-1/4 h-[36%] w-[140%]"
          style={{
            background:
              'radial-gradient(50% 75% at 65% 45%, rgba(169,194,180,0.12) 0%, rgba(169,194,180,0) 70%)',
            filter: 'blur(34px)',
          }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-14 md:pb-20">
          <Reveal>
            <p
              className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.36em] font-medium mb-6"
              style={{ color: C.niebla }}
            >
              <Arco className="w-9 h-5 shrink-0" />
              Chillán · Ñuble
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1
              className={`${display.className} font-medium text-[clamp(3rem,10vw,6.2rem)] leading-[0.98] max-w-3xl`}
              style={{ color: C.crema }}
            >
              Dormir mirando{' '}
              <span className={displayIt.className} style={{ color: C.cobre }}>
                el río.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <p
              className="mt-6 max-w-md text-[15px] md:text-base leading-relaxed"
              style={{ color: 'rgba(242,237,227,0.85)' }}
            >
              Domos entre los árboles de Rinconada de Cato, con tinaja
              caliente, quincho y piscina. Reserva directa por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center rounded-full px-7 text-sm font-semibold tracking-wide transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.cobre, color: C.noche }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#valores"
                className="inline-flex h-[52px] items-center rounded-full border px-7 text-sm font-medium tap-44"
                style={{ borderColor: 'rgba(242,237,227,0.4)', color: C.crema }}
              >
                Ver valores
              </a>
            </div>
          </Reveal>
        </div>
        {/* capas de bosque hacia el papel */}
        <Bosque color={C.crema} className="relative block w-full h-12 md:h-16" />
      </section>

      {/* ── El domo ── */}
      <section id="domo" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal>
              <Eyebrow>El domo</Eyebrow>
              <h2
                className={`${display.className} font-medium text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02] mb-6`}
                style={{ color: C.bosque }}
              >
                Un arco entre{' '}
                <span className={displayIt.className} style={{ color: C.cobreInk }}>
                  los árboles.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                className="text-[15px] md:text-base leading-relaxed max-w-lg mb-5"
                style={{ color: C.muted }}
              >
                El domo descansa en la parcela, a orillas del río: una forma
                curva que ordena el paisaje y guarda la noche. Adentro caben
                de dos a seis personas; afuera, el bosque hace el resto.
              </p>
              <p
                className="text-[15px] md:text-base leading-relaxed max-w-lg mb-8"
                style={{ color: C.muted }}
              >
                No es camping ni hotel: es dormir en plena naturaleza con
                techo propio, y despertar con la luz entrando por la ventana
                del domo.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="flex flex-wrap gap-2.5 max-w-lg">
                {[
                  'Para 2, 4 o 6 personas',
                  'Tinaja caliente opcional',
                  'Quincho y piscina incluidos',
                  'Rinconada de Cato, Chillán',
                ].map((t) => (
                  <li
                    key={t}
                    className="text-xs md:text-[13px] font-medium px-4 py-2 rounded-full border"
                    style={{ borderColor: C.lineCream, color: C.bosque }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="relative pb-10">
            <Reveal>
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{ borderRadius: '999px 999px 18px 18px' }}
              >
                <Image
                  src={`${IMG}/domo.webp`}
                  alt="El domo de Domos Borde Río visto desde el bosque de la parcela"
                  fill
                  sizes="(min-width: 1024px) 42vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div
                className="absolute -bottom-2 left-2 md:-left-6 w-[42%] aspect-[3/4] overflow-hidden"
                style={{
                  borderRadius: '999px 999px 14px 14px',
                  boxShadow: `0 0 0 6px ${C.crema}, 0 24px 50px rgba(14,26,22,0.28)`,
                }}
              >
                <Image
                  src={`${IMG}/detalle.webp`}
                  alt="Detalle interior del domo en Domos Borde Río"
                  fill
                  sizes="(min-width: 1024px) 18vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Tinaja y entorno: dos bloques alternados sobre la noche ── */}
      <section id="tinaja" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
            <Reveal className="lg:order-2">
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ borderRadius: '220px 220px 16px 16px' }}
              >
                <Image
                  src={`${IMG}/tinaja.webp`}
                  alt="Tinaja caliente al aire libre en Domos Borde Río"
                  fill
                  sizes="(min-width: 1024px) 44vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="lg:order-1">
              <Reveal>
                <Eyebrow light>La tinaja</Eyebrow>
                <h2
                  className={`${display.className} font-medium text-[clamp(2.2rem,5.4vw,3.8rem)] leading-[1.04] mb-6`}
                  style={{ color: C.crema }}
                >
                  Vapor que sube{' '}
                  <span className={displayIt.className} style={{ color: C.cobre }}>
                    hacia el bosque.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p
                  className="text-[15px] md:text-base leading-relaxed max-w-md mb-6"
                  style={{ color: 'rgba(242,237,227,0.78)' }}
                >
                  La tinaja caliente se pide aparte, $30.000 por uso, y
                  convierte la noche en un ritual: agua tibia, vapor que
                  sube y el bosque en silencio alrededor.
                </p>
                <p
                  className="text-[13px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: C.niebla }}
                >
                  Adicional · se agenda por WhatsApp
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ borderRadius: '220px 220px 16px 16px' }}
              >
                <Image
                  src={`${IMG}/entorno.webp`}
                  alt="Entorno natural, quincho y piscina de Domos Borde Río"
                  fill
                  sizes="(min-width: 1024px) 44vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow light>El entorno</Eyebrow>
                <h2
                  className={`${display.className} font-medium text-[clamp(2.2rem,5.4vw,3.8rem)] leading-[1.04] mb-6`}
                  style={{ color: C.crema }}
                >
                  La parcela{' '}
                  <span className={displayIt.className} style={{ color: C.cobre }}>
                    al borde del río.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p
                  className="text-[15px] md:text-base leading-relaxed max-w-md mb-6"
                  style={{ color: 'rgba(242,237,227,0.78)' }}
                >
                  La estadía incluye acceso al quincho para el asado y a la
                  piscina para los días de calor. El resto es bosque,
                  sombra y el borde del río en Rinconada de Cato.
                </p>
                <p
                  className="text-[13px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: C.niebla }}
                >
                  Quincho y piscina · incluidos
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores: la tabla real, en conteo escalonado ── */}
      <section id="valores" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Valores</Eyebrow>
            <h2
              className={`${display.className} font-medium text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02] mb-4`}
              style={{ color: C.bosque }}
            >
              Lo que cuesta{' '}
              <span className={displayIt.className} style={{ color: C.cobreInk }}>
                la noche.
              </span>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-md mb-10" style={{ color: C.muted }}>
              Todos los valores incluyen acceso a quincho y piscina.
            </p>
          </Reveal>
          <ul>
            {TARIFAS.map((t, i) => (
              <li key={t.item} className="border-b" style={{ borderColor: C.lineCream }}>
                <Reveal delay={i * 130} className="flex items-baseline gap-3 md:gap-4 py-4">
                  <span
                    className={`${displayIt.className} text-sm w-7 shrink-0`}
                    style={{ color: C.cobreInk }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] md:text-base font-medium" style={{ color: C.bosque }}>
                    {t.item}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted -translate-y-1"
                    style={{ borderColor: C.lineCream }}
                    aria-hidden="true"
                  />
                  <span
                    className={`${display.className} text-2xl md:text-[28px] font-semibold whitespace-nowrap`}
                    style={{ color: C.bosque }}
                  >
                    {t.price}
                  </span>
                  <span className="text-xs whitespace-nowrap" style={{ color: C.muted }}>
                    {t.unit}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={540}>
            <p className="text-[13px] leading-relaxed mt-7 mb-8 max-w-md" style={{ color: C.muted }}>
              La disponibilidad y las fechas se consultan directo por
              WhatsApp: respondemos con la tarifa del día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center rounded-full px-7 text-sm font-semibold tracking-wide transition-all hover:brightness-110 active:scale-95 tap-44"
              style={{ backgroundColor: C.bosque, color: C.crema }}
            >
              Consultar disponibilidad
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones: solo el número real ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Eyebrow light center>
              Lo que dicen en Google
            </Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <p
              className={`${display.className} font-medium text-[clamp(4rem,14vw,7.5rem)] leading-none`}
              style={{ color: C.crema }}
            >
              {BIZ.ratingDisplay}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="flex justify-center mt-4 mb-4">
              <Stars value={BIZ.rating} color={C.cobre} size={22} />
            </div>
            <p className="text-sm md:text-base" style={{ color: 'rgba(242,237,227,0.78)' }}>
              {BIZ.reviews} opiniones en Google
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-medium underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.niebla, textDecorationColor: 'rgba(169,194,180,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde: la parcela y el mapa ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Eyebrow>Dónde</Eyebrow>
              <h2
                className={`${display.className} font-medium text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02] mb-6`}
                style={{ color: C.bosque }}
              >
                Rinconada de Cato,{' '}
                <span className={displayIt.className} style={{ color: C.cobreInk }}>
                  Chillán.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <address
                className="not-italic text-[15px] md:text-base leading-relaxed mb-5"
                style={{ color: C.muted }}
              >
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <p className="text-[13px] leading-relaxed mb-7 max-w-sm" style={{ color: C.muted }}>
                La llegada y los detalles de la estadía se coordinan por
                WhatsApp.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center rounded-full border px-7 text-sm font-semibold tap-44"
                style={{ borderColor: C.bosque, color: C.bosque }}
              >
                Abrir en Google Maps
              </a>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div
              className="overflow-hidden min-h-[280px]"
              style={{ borderRadius: '160px 160px 16px 16px', border: `1px solid ${C.lineCream}` }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre: el bosque baja a la noche ── */}
      <section style={{ backgroundColor: C.noche }}>
        <div style={{ backgroundColor: C.crema }}>
          <Bosque color={C.noche} className="block w-full h-12 md:h-16" />
        </div>
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-6 pb-16 md:pb-20 text-center">
          <Reveal>
            <h2
              className={`${displayIt.className} font-medium text-[clamp(2.8rem,8vw,5rem)] leading-[1.02]`}
              style={{ color: C.crema }}
            >
              ¿Reservamos?
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p
              className="mt-5 mx-auto max-w-md text-[15px] md:text-base leading-relaxed"
              style={{ color: 'rgba(242,237,227,0.78)' }}
            >
              Escríbenos las fechas y cuántos son: te confirmamos
              disponibilidad y valor de la noche.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center rounded-full px-8 text-sm font-semibold tracking-wide transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.cobre, color: C.noche }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex h-[52px] items-center rounded-full px-6 text-sm font-medium tap-44"
                style={{ color: C.crema }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.noche, color: C.crema }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-center justify-between gap-5"
          style={{ borderColor: C.lineDark }}
        >
          <div>
            <p className={`${display.className} text-xl font-semibold`}>{BIZ.name}</p>
            <address
              className="not-italic text-xs mt-1 leading-relaxed"
              style={{ color: 'rgba(242,237,227,0.65)' }}
            >
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium"
            style={{ color: 'rgba(242,237,227,0.65)' }}
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
              WhatsApp
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
              Facebook
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
              Cómo llegar
            </a>
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
              {BIZ.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
