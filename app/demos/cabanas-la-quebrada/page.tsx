import type { Metadata } from 'next'
import Image from 'next/image'
import { demoMetadata } from '../meta'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, WA_LINK_EQUIPOS, MAPS_URL, MAPS_EMBED, IMG, RESENAS } from './content'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import { Hoja, Parada, BosquejoBadge, BosquejoDormitorio, BosquejoBano } from './scenes'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
  display: 'swap',
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
})

/**
 * Dirección de arte: «el croquis del pasaje». El predio se recorre por un
 * sendero de ripio (se ve en las fotos reales): la página baja como ese
 * pasaje, con paradas numeradas de croquis de terreno, hojas de sauce y
 * trazo de alzado. Barlow Condensed hace de letrero de obra en madera;
 * Space Mono rotula las paradas y los datos.
 */
const C = {
  papel: '#F1EBDC',
  papelSoft: '#E7DFC9',
  oliva: '#3C4A2E',
  olivaDeep: '#232B18',
  ink: '#1C2214',
  miel: '#D9A13C',
  sage: '#8A9B6E',
  muted: '#5C6248',
  line: 'rgba(60,74,46,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-la-quebrada',
  title: 'Cabañas La Quebrada — Cabañas de madera en Talca',
  description: 'Cabañas de madera en Cuatro Poniente 1197, Talca: cocina equipada, estacionamiento interior y jardín. Consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

// ── Utilidades ───────────────────────────────────────────────

function Star({ filled, className = 'w-4 h-4' }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
    </svg>
  )
}

function Stars({ n = 5, className = 'w-4 h-4' }: { n?: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${n} de 5 estrellas`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} filled={i < n} className={className} />
      ))}
    </span>
  )
}

const ICON_PATHS: Record<string, React.ReactNode> = {
  auto: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15 l1.5 -6 a2 2 0 0 1 2 -1.5 h9 a2 2 0 0 1 2 1.5 L20 15" />
      <path d="M3.5 15 h17 v3.5 h-2.5 a1.75 1.75 0 0 1 -3.5 0 h-5 a1.75 1.75 0 0 1 -3.5 0 H3.5 Z" />
      <path d="M7 11 h10" />
    </g>
  ),
  cocina: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 9.5 h15 v3 a7.5 7.5 0 0 1 -15 0 Z" />
      <path d="M8 5.5 a2 2 0 0 1 4 0 M13 4 a2.5 2.5 0 0 1 4 1.8" />
      <path d="M2.5 9.5 h19" />
    </g>
  ),
  frigo: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="3" width="10" height="18" rx="1.5" />
      <path d="M7 9.5 h10 M14.5 5.5 v2 M14.5 12 v2.5" />
    </g>
  ),
  microondas: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5.5" width="19" height="13" rx="1.5" />
      <rect x="5.5" y="8.5" width="9" height="7" rx="1" />
      <path d="M17.5 9.5 v0.1 M17.5 13.5 v3" />
    </g>
  ),
  plato: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
    </g>
  ),
  cama: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 18.5 V9 M3.5 14.5 h17 v4" />
      <path d="M6 11.5 a1.75 1.75 0 1 1 0.1 0" />
      <path d="M9.5 14.5 v-2.5 h7 a2.5 2.5 0 0 1 2.5 2.5" />
    </g>
  ),
  jardin: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21 V9" />
      <path d="M12 9 C12 5 9 3.5 5.5 3.5 C5.5 8 8 10.5 12 9 Z" />
      <path d="M12 13 C12 9.5 14.5 8 18 8 C18 12 15.5 14.5 12 13 Z" />
      <path d="M8 21 h8" />
    </g>
  ),
  llave: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="14" r="4.5" />
      <path d="M11.5 10.5 L20 3 M16 6 l3 3 M13.5 8.5 l2.5 2.5" />
    </g>
  ),
}

function AmenityIcon({ icon }: { icon: keyof typeof ICON_PATHS }) {
  return (
    <span
      className="w-[44px] h-[44px] rounded-full border flex items-center justify-center shrink-0"
      style={{ borderColor: C.line, color: C.oliva, backgroundColor: C.papel }}
    >
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden="true">
        {ICON_PATHS[icon]}
      </svg>
    </span>
  )
}

// ── Datos (servicios visibles en las fotos y la ficha) ───────

const INCLUYE: { icon: keyof typeof ICON_PATHS; label: string; note?: string }[] = [
  { icon: 'cocina', label: 'Cocina equipada' },
  { icon: 'frigo', label: 'Refrigerador' },
  { icon: 'microondas', label: 'Microondas' },
  { icon: 'plato', label: 'Loza y menaje' },
  { icon: 'cama', label: 'Ropa de cama' },
  { icon: 'auto', label: 'Estacionamiento interior' },
  { icon: 'jardin', label: 'Jardín y arboleda' },
  { icon: 'llave', label: 'Trato directo con los dueños' },
]

const PARADAS = [
  {
    n: '01',
    img: `${IMG}/pasaje.webp`,
    w: 1200,
    h: 675,
    alt: 'Dos cabañas de madera a lo largo del pasaje de ripio, con jardín y el sauce del predio',
    tag: 'El predio',
    titulo: 'el pasaje de ripio que da nombre al recorrido',
    texto:
      'Las cabañas se ordenan a lo largo de un pasaje interior de ripio, entre jardines y un sauce que tapona el ruido de la calle. Se entra, se cierra el portón y la ciudad queda afuera.',
  },
  {
    n: '02',
    img: `${IMG}/cocina.webp`,
    w: 675,
    h: 1200,
    alt: 'Cocina de la cabaña con microondas, cocina de dos platos, hervidor, refrigerador y loza',
    tag: 'Por dentro',
    titulo: 'la cocina viene lista para usar',
    texto:
      'Cada cabaña trae cocina equipada de verdad: microondas, cocina de dos platos, hervidor, frigobar y loza. Llegas, guardas la compra y cocinas como en casa.',
  },
  {
    n: '03',
    img: null,
    w: 0,
    h: 0,
    alt: undefined,
    tag: 'Por dentro',
    titulo: 'dormitorios simples, de madera a la vista',
    texto:
      'Camas con ropa de cama incluida y muros de pino. Al activar el sitio esta vista se reemplaza por las fotos reales de cada cabaña.',
  },
]

const FAQS = [
  {
    q: '¿Cómo reservo una cabaña?',
    a: 'Escríbenos por WhatsApp con las fechas y cuántas personas vienen. Te confirmamos disponibilidad y valor el mismo día.',
  },
  {
    q: '¿Para cuántas personas son las cabañas?',
    a: 'Hay opciones para 2 personas y para grupos más grandes. Cuéntanos cuántos son y te decimos cuál cabaña acomoda mejor.',
  },
  {
    q: '¿Alojan equipos de trabajo o empresas?',
    a: 'Sí. Empresas de la zona alojan a sus equipos acá hace años — escríbenos y coordinamos estadías por periodos.',
  },
  {
    q: '¿A qué hora es el check-in y el check-out?',
    a: 'Los horarios de llegada y salida se coordinan al reservar, según la ocupación del día.',
  },
  {
    q: '¿Se aceptan mascotas?',
    a: 'Consulta por WhatsApp contándonos a qué mascota traes y te confirmamos antes de reservar.',
  },
]

// ── Página ───────────────────────────────────────────────────

export default function CabanasLaQuebrada() {
  return (
    <div
      className={`min-h-screen ${body.className} antialiased`}
      style={{ backgroundColor: C.papel, color: C.ink }}
    >
      <SiteNav name={BIZ.name} fontClass={display.className} />

      {/* ── Hero: foto real del predio ── */}
      <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden" style={{ backgroundColor: C.olivaDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cabaña de madera de Cabañas La Quebrada en Talca, con jardín y puerta de pino"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(35,43,24,0.42) 0%, rgba(35,43,24,0.08) 42%, rgba(35,43,24,0.82) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-32">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-3`}
              style={{ color: C.miel }}
            >
              <Hoja className="w-4 h-4" />
              Cabañas de madera · 4 Poniente 1197 · Talca
            </p>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(3rem,12vw,7.5rem)] mb-4`}
              style={{ color: C.papel }}
            >
              Cabañas
              <br />
              La Quebrada
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-3" style={{ color: 'rgba(241,235,220,0.9)' }}>
              Un predio de cabañas de pino en pleno barrio de Talca: portón,
              pasaje de ripio, jardín y la quebrada del Piduco a pasos.
            </p>
            <p className="flex items-center gap-2 text-sm mb-8" style={{ color: C.papel }}>
              <span style={{ color: C.miel }}>
                <Stars n={4} className="w-4 h-4" />
              </span>
              <span>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-7 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.miel, color: C.olivaDeep }}
              >
                Consultar disponibilidad
              </a>
              <a
                href="#pasaje"
                className="font-semibold text-sm px-7 py-3 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(241,235,220,0.55)', color: C.papel }}
              >
                Bajar por el pasaje
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de datos reales ── */}
      <div style={{ backgroundColor: C.olivaDeep }}>
        <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.sage }}>
          <span>Cottage · ficha en Google</span>
          <span aria-hidden="true" style={{ color: C.miel }}>·</span>
          <span>Cocina equipada</span>
          <span aria-hidden="true" style={{ color: C.miel }}>·</span>
          <span>Estacionamiento interior</span>
          <span aria-hidden="true" style={{ color: C.miel }}>·</span>
          <span>Familias y equipos de trabajo</span>
        </div>
      </div>

      {/* ── El pasaje: recorrido con paradas ── */}
      <section id="pasaje" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.oliva }}>
            Croquis del predio
          </p>
          <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl leading-[0.95] mb-4`} style={{ color: C.olivaDeep }}>
            Baja por el pasaje
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-12" style={{ color: C.muted }}>
            Fotos reales de la ficha de Google, en el orden en que se recorre el
            predio. Lo que aún no tiene foto va dibujado a línea y marcado como
            bosquejo.
          </p>
        </Reveal>

        <div className="relative">
          {/* el sendero de ripio */}
          <div
            className="absolute top-0 bottom-0 left-[25px] md:left-[25px] border-l-2 border-dashed"
            style={{ borderColor: 'rgba(60,74,46,0.35)' }}
            aria-hidden="true"
          />
          <ul className="space-y-14 md:space-y-20">
            {PARADAS.map((p, i) => (
              <li key={p.n} className="relative">
                <Reveal delay={i * 80}>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                    <div className="flex items-start gap-5">
                      <Parada n={p.n} />
                      <div className="pt-1">
                        <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.muted }}>
                          Parada {p.n} · {p.tag}
                        </p>
                        <h3 className={`${display.className} font-bold uppercase text-2xl md:text-4xl leading-[1] mb-3`} style={{ color: C.olivaDeep }}>
                          {p.titulo}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                          {p.texto}
                        </p>
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border shadow-[0_18px_40px_-22px_rgba(35,43,24,0.45)]" style={{ borderColor: C.line }}>
                      {p.img ? (
                        <Image
                          src={p.img}
                          alt={p.alt ?? ''}
                          width={p.w}
                          height={p.h}
                          className={`w-full h-auto object-cover ${p.h > p.w ? 'max-h-[520px] object-top' : ''}`}
                        />
                      ) : (
                        <>
                          <BosquejoBadge />
                          <BosquejoDormitorio className="w-full aspect-[4/3]" />
                        </>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Qué incluye ── */}
      <section id="incluye" className="scroll-mt-20" style={{ backgroundColor: C.papelSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.oliva }}>
                Lo que trae cada cabaña
              </p>
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-10`} style={{ color: C.olivaDeep }}>
                Equipada de verdad
              </h2>
            </Reveal>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-7">
              {INCLUYE.map((a, i) => (
                <Reveal key={a.label} delay={i * 50}>
                  <li className="flex flex-col gap-3">
                    <AmenityIcon icon={a.icon} />
                    <p className="text-sm font-semibold leading-snug" style={{ color: C.olivaDeep }}>
                      {a.label}
                      {a.note && (
                        <span
                          className="ml-2 text-[10px] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full align-middle"
                          style={{ backgroundColor: C.papel, color: C.oliva }}
                        >
                          {a.note}
                        </span>
                      )}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={150}>
            <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
              <BosquejoBadge />
              <BosquejoBano className="w-full aspect-[4/3]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quiénes llegan ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.oliva, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.miel }}>
              Quiénes llegan
            </p>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-10 max-w-2xl`}>
              Dos puertas para llegar
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal delay={80}>
              <div
                className="rounded-2xl p-7 md:p-9 h-full"
                style={{ backgroundColor: 'rgba(241,235,220,0.07)', border: '1px solid rgba(241,235,220,0.18)' }}
              >
                <Hoja className="w-6 h-6 mb-4" />
                <h3 className={`${display.className} font-bold uppercase text-2xl md:text-3xl leading-[1] mb-3`} style={{ color: C.papel }}>
                  Familias de paso
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(241,235,220,0.8)' }}>
                  Una escala tranquila camino al sur o al valle: cocina propia,
                  auto adentro y el centro de Talca a pocas cuadras.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.miel, textDecorationColor: 'rgba(217,161,60,0.45)' }}
                >
                  Consultar por WhatsApp →
                </a>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div
                className="rounded-2xl p-7 md:p-9 h-full"
                style={{ backgroundColor: 'rgba(241,235,220,0.07)', border: '1px solid rgba(241,235,220,0.18)' }}
              >
                <span className="inline-block w-6 h-6 mb-4" style={{ color: C.miel }}>
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3.5" y="7.5" width="17" height="12.5" rx="1.5" />
                    <path d="M9 7.5 V5.5 a1.5 1.5 0 0 1 1.5 -1.5 h3 a1.5 1.5 0 0 1 1.5 1.5 v2 M3.5 12.5 h17" />
                  </svg>
                </span>
                <h3 className={`${display.className} font-bold uppercase text-2xl md:text-3xl leading-[1] mb-3`} style={{ color: C.papel }}>
                  Equipos y empresas
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(241,235,220,0.8)' }}>
                  Empresas de la zona alojan aquí a sus equipos hace años:
                  cabañas independientes, cocina propia y estacionamiento
                  dentro del recinto.
                </p>
                <a
                  href={WA_LINK_EQUIPOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.miel, textDecorationColor: 'rgba(217,161,60,0.45)' }}
                >
                  Cotizar para mi equipo →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <div
              className="rounded-2xl p-7 md:p-9 border"
              style={{ backgroundColor: C.papelSoft, borderColor: C.line }}
            >
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.oliva }}>
                En Google Maps
              </p>
              <p className={`${display.className} font-bold text-7xl md:text-8xl leading-none mb-3`} style={{ color: C.olivaDeep }}>
                {BIZ.rating}
              </p>
              <span style={{ color: C.miel }}>
                <Stars n={4} className="w-5 h-5" />
              </span>
              <p className="text-sm mt-3" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas de huéspedes
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.oliva, textDecorationColor: 'rgba(60,74,46,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={100}>
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.olivaDeep }}>
                Lo que dicen
                <br />
                los huéspedes
              </h2>
              <p className="text-sm mt-2 mb-2" style={{ color: C.muted }}>
                Textos literales de la ficha de Google — y los dueños responden
                cada reseña.
              </p>
            </Reveal>
            {RESENAS.map((t, i) => (
              <Reveal key={t.autor} delay={200 + i * 120}>
                <figure
                  className="rounded-2xl p-6 md:p-7 border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
                >
                  <span style={{ color: C.miel }}>
                    <Stars n={t.estrellas} className="w-4 h-4" />
                  </span>
                  <blockquote className="text-sm md:text-base leading-relaxed mt-3 mb-4" style={{ color: C.ink }}>
                    “{t.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.15em]`} style={{ color: C.oliva }}>
                    {t.autor} · {t.fecha} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.papelSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.oliva }}>
              Ubicación
            </p>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-6`} style={{ color: C.olivaDeep }}>
              Cuatro Poniente 1197,
              <br />
              a pasos del Piduco
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              En el mismo barrio quedan el Parque Pablo Neruda y el Estero
              Piduco; el centro de Talca está a pocas cuadras.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.oliva, color: C.papel }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors tap-44"
                style={{ borderColor: C.line, color: C.oliva }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-2xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.papel }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-10`} style={{ color: C.olivaDeep }}>
            Antes de escribir
          </h2>
        </Reveal>
        <div className="max-w-3xl">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group border-b py-5" style={{ borderColor: C.line }}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base md:text-lg tap-44" style={{ color: C.olivaDeep }}>
                  {f.q}
                  <span
                    className="shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-lg leading-none transition-transform group-open:rotate-45"
                    style={{ backgroundColor: C.papelSoft, color: C.oliva }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-sm md:text-base leading-relaxed mt-3 max-w-2xl" style={{ color: C.muted }}>
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.olivaDeep }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-6" style={{ color: C.miel }}>
              <Hoja className="w-5 h-5" />
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`}>Reserva directa</span>
            </div>
            <h2
              className={`${display.className} font-bold uppercase text-[clamp(2.4rem,8vw,5rem)] leading-[0.95] mb-6 max-w-3xl`}
              style={{ color: C.papel }}
            >
              El pasaje queda a pasos del centro
            </h2>
            <p className="text-sm md:text-base max-w-md mb-9" style={{ color: 'rgba(241,235,220,0.8)' }}>
              Escríbenos por WhatsApp y consulta disponibilidad para tus fechas —
              o para tu equipo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-8 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.miel, color: C.olivaDeep }}
              >
                Consultar disponibilidad
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-3 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(241,235,220,0.5)', color: C.papel }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.olivaDeep, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6 border-t flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ borderColor: 'rgba(241,235,220,0.14)' }}>
          <div>
            <p className={`${display.className} font-bold uppercase text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(241,235,220,0.65)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs" style={{ color: 'rgba(241,235,220,0.65)' }}>
              © {new Date().getFullYear()} {BIZ.name}
            </p>
            <WhatsAppFab />
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(241,235,220,0.14)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed"
            style={{ color: 'rgba(241,235,220,0.75)' }}
          >
            Mockup preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.papel }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.papel }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
