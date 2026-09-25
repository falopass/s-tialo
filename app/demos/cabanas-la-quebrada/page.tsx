import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import { DemoBand } from '../kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import {
  HeroScene,
  CabinScene,
  ForestPanel,
  RiverPanel,
  ValleyPanel,
  CtaScene,
} from './scenes'

const display = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const C = {
  bosque: '#173A2B',
  bosqueDeep: '#0E241B',
  arena: '#E8DCC8',
  arenaSoft: '#F1EADA',
  terracota: '#C4704B',
  crema: '#FAF7F0',
  muted: '#55685A',
  line: 'rgba(23,58,43,0.14)',
}

export const metadata: Metadata = {
  title: 'Cabañas La Quebrada — Cabañas en Talca, Región del Maule',
  description:
    'Cabañas equipadas en Talca para descansar con calma. Consulta disponibilidad por WhatsApp.',
  robots: { index: false, follow: false },
}

// ── Utilidades ───────────────────────────────────────────────

function Star({ filled, className = 'w-4 h-4' }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill={filled ? C.terracota : 'none'}
      stroke={C.terracota}
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
    </svg>
  )
}

function Stars({ n = 4, className = 'w-4 h-4' }: { n?: number; className?: string }) {
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
  wifi: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M4.5 9.5 a11 11 0 0 1 15 0" />
      <path d="M7.5 13 a7 7 0 0 1 9 0" />
      <path d="M10.5 16.5 a3 3 0 0 1 3 0" />
      <circle cx="12" cy="19.2" r="1.2" fill="currentColor" stroke="none" />
    </g>
  ),
  parrilla: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5 h14 v3 a7 7 0 0 1 -14 0 Z" />
      <path d="M5 8.5 h14 M8 5.5 v3 M12 5.5 v3 M16 5.5 v3" />
      <path d="M7.5 15.5 L5.5 20 M16.5 15.5 L18.5 20 M12 15.5 v4" />
    </g>
  ),
  agua: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 C12 3 5.5 10.5 5.5 14.5 a6.5 6.5 0 0 0 13 0 C18.5 10.5 12 3 12 3 Z" />
      <path d="M9 14.5 a3 3 0 0 0 3 3" />
    </g>
  ),
  lena: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 C12 7 7.5 9.5 7.5 14 a4.5 4.5 0 0 0 9 0 c0 -3.2 -2.2 -4.7 -2.4 -7.4 c-1 1.3 -2 1.7 -2.8 2" />
    </g>
  ),
  cama: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 18.5 V9 M3.5 14.5 h17 v4" />
      <path d="M6 11.5 a1.75 1.75 0 1 1 0.1 0" />
      <path d="M9.5 14.5 v-2.5 h7 a2.5 2.5 0 0 1 2.5 2.5" />
    </g>
  ),
  tinaja: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 10 h15 v4.5 a6.5 6.5 0 0 1 -15 0 Z" />
      <path d="M8 3.5 c-1 1.4 1 2.2 0 3.6 M12 3.5 c-1 1.4 1 2.2 0 3.6 M16 3.5 c-1 1.4 1 2.2 0 3.6" />
    </g>
  ),
}

function AmenityIcon({ icon }: { icon: keyof typeof ICON_PATHS }) {
  return (
    <span
      className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: C.arenaSoft, color: C.bosque }}
    >
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden="true">
        {ICON_PATHS[icon]}
      </svg>
    </span>
  )
}

// ── Datos de ejemplo (genéricos, no son datos del negocio) ───

const CABINS = [
  {
    variant: 'parejas' as const,
    name: 'Cabaña para dos',
    tag: 'Parejas',
    features: ['Cocina equipada', 'Baño privado', 'Terraza al aire libre'],
  },
  {
    variant: 'familiar' as const,
    name: 'Cabaña familiar',
    tag: 'Familias',
    features: ['Dos habitaciones', 'Cocina equipada', 'Quincho y parrilla'],
  },
  {
    variant: 'grupo' as const,
    name: 'Cabaña para grupos',
    tag: 'Grupos',
    features: ['Capacidad amplia', 'Comedor completo', 'Estacionamiento interior'],
  },
]

const AMENITIES: { icon: keyof typeof ICON_PATHS; label: string; note?: string }[] = [
  { icon: 'auto', label: 'Estacionamiento' },
  { icon: 'cocina', label: 'Cocina equipada' },
  { icon: 'wifi', label: 'WiFi' },
  { icon: 'parrilla', label: 'Parrilla y quincho' },
  { icon: 'agua', label: 'Agua caliente' },
  { icon: 'lena', label: 'Calefacción a leña' },
  { icon: 'cama', label: 'Ropa de cama' },
  { icon: 'tinaja', label: 'Tinaja', note: 'a consultar' },
]

const FAQS = [
  {
    q: '¿Cómo reservo una cabaña?',
    a: 'Escríbenos por WhatsApp con las fechas que te acomodan y la cantidad de personas. Te confirmamos disponibilidad y valor el mismo día.',
  },
  {
    q: '¿A qué hora es el check-in y el check-out?',
    a: 'Los horarios de llegada y salida se coordinan al momento de reservar, según la ocupación del día.',
  },
  {
    q: '¿Se aceptan mascotas?',
    a: 'Depende de la cabaña y la fecha. Cuéntanos por WhatsApp a qué mascota traes y te confirmamos.',
  },
  {
    q: '¿Hay dónde estacionar?',
    a: 'Sí, hay espacio para estacionar dentro del recinto. Consulta los detalles al reservar.',
  },
]

// ── Página ───────────────────────────────────────────────────

export default function CabanasLaQuebrada() {
  return (
    <div
      className="min-h-screen font-body antialiased"
      style={{ backgroundColor: C.crema, color: C.bosqueDeep }}
    >
      <SiteNav name={BIZ.name} fontClass={display.className} />

      {/* ── Hero ── */}
      <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden">
        <HeroScene className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,36,27,0.35) 0%, rgba(14,36,27,0.05) 40%, rgba(14,36,27,0.75) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3" style={{ color: C.arena }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.terracota }} aria-hidden="true" />
              Cabañas · Talca · Región del Maule
            </p>
            <h1
              className={`${display.className} font-semibold leading-[0.98] tracking-[-0.01em] text-[clamp(3rem,11vw,7rem)] mb-5`}
              style={{ color: C.crema }}
            >
              Cabañas
              <br />
              <em className="font-medium" style={{ color: C.arena }}>La Quebrada</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-3" style={{ color: 'rgba(250,247,240,0.85)' }}>
              Una pausa con ritmo de campo a pocas cuadras del centro de
              Talca. Cabañas acogedoras para descansar, sin irte lejos.
            </p>
            <p className="flex items-center gap-2 text-sm mb-9" style={{ color: C.arena }}>
              <Stars n={4} />
              <span>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.terracota, color: C.crema }}
              >
                Consultar disponibilidad
              </a>
              <a
                href="#cabanas"
                className="font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(250,247,240,0.5)', color: C.crema }}
              >
                Ver las cabañas
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Las cabañas ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] mb-3" style={{ color: C.terracota }}>
            Alojamiento
          </p>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`} style={{ color: C.bosque }}>
            Las cabañas
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Presentación referencial: al publicar el sitio van los nombres,
            fotos y capacidades reales de cada cabaña.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CABINS.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <li
                className="group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(14,36,27,0.35)] h-full"
                style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <CabinScene
                    variant={c.variant}
                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(250,247,240,0.9)', color: C.bosque }}
                  >
                    {c.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} font-semibold text-xl mb-3`} style={{ color: C.bosque }}>
                    {c.name}
                  </h3>
                  <ul className="space-y-1.5">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: C.muted }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: C.terracota }} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-semibold underline underline-offset-4 decoration-2"
                    style={{ color: C.terracota, textDecorationColor: 'rgba(196,112,75,0.4)' }}
                  >
                    Consultar por WhatsApp →
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── El entorno ── */}
      <section
        id="entorno"
        className="scroll-mt-20"
        style={{ backgroundColor: C.arenaSoft }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-3" style={{ color: C.terracota }}>
              El entorno
            </p>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-6`} style={{ color: C.bosque }}>
              El Valle del Maule,
              <br />
              <em className="font-medium">a tu ritmo</em>
            </h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              <p>
                Talca es la puerta del valle: viñedos, caminos rurales y la
                precordillera a menos de una hora. {BIZ.name} queda en la
                ciudad, a pocas cuadras del centro, con la calma de un
                refugio.
              </p>
              <p>
                La idea es simple: llegar, dejar el auto, prender la
                parrilla y bajar el ritmo. Sin agenda ni apuro.
              </p>
              <p className="font-medium" style={{ color: C.bosque }}>
                Consulta por fechas y te ayudamos a armar la escapada.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <ForestPanel className="w-full h-full" />
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <RiverPanel className="w-full h-full" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/2.4]">
                  <ValleyPanel className="w-full h-full" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Qué encontrarás ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] mb-3" style={{ color: C.terracota }}>
            Servicios
          </p>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`} style={{ color: C.bosque }}>
            Qué encontrarás
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Servicios referenciales: confirma los incluidos en tu cabaña al
            momento de reservar.
          </p>
        </Reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {AMENITIES.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <li className="flex flex-col gap-3">
                <AmenityIcon icon={a.icon} />
                <p className="text-sm font-medium" style={{ color: C.bosque }}>
                  {a.label}
                  {a.note && (
                    <span
                      className="ml-2 text-[10px] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full align-middle"
                      style={{ backgroundColor: C.arena, color: C.muted }}
                    >
                      {a.note}
                    </span>
                  )}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.bosque, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div
                className="rounded-2xl p-7 md:p-9"
                style={{ backgroundColor: 'rgba(250,247,240,0.06)', border: '1px solid rgba(250,247,240,0.14)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.22em] mb-4" style={{ color: C.arena }}>
                  En Google Maps
                </p>
                <p className={`${display.className} font-semibold text-6xl md:text-7xl leading-none mb-3`}>
                  {BIZ.rating}
                </p>
                <Stars n={4} className="w-5 h-5" />
                <p className="text-sm mt-3" style={{ color: 'rgba(250,247,240,0.75)' }}>
                  {BIZ.reviews} reseñas de huéspedes
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2"
                  style={{ color: C.arena, textDecorationColor: 'rgba(232,220,200,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={100}>
                <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight`}>
                  Lo que dicen los huéspedes
                </h2>
                <p className="text-sm mt-2 mb-2" style={{ color: 'rgba(250,247,240,0.6)' }}>
                  Textos de muestra — al publicar van las reseñas reales.
                </p>
              </Reveal>
              {[
                {
                  text: 'Cabaña impecable, todo funcionando y una atención muy cercana. Perfecta para desconectar un fin de semana.',
                  author: 'Reseña de ejemplo',
                },
                {
                  text: 'Llegamos con los niños y estuvo todo listo. El quincho y la parrilla hicieron el asado del sábado.',
                  author: 'Reseña de ejemplo',
                },
              ].map((t, i) => (
                <Reveal key={i} delay={200 + i * 120}>
                  <figure
                    className="rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: 'rgba(250,247,240,0.06)', border: '1px solid rgba(250,247,240,0.14)' }}
                  >
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(250,247,240,0.88)' }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-[0.15em]" style={{ color: C.arena }}>
                      {t.author}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-3" style={{ color: C.terracota }}>
              Ubicación
            </p>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-6`} style={{ color: C.bosque }}>
              En Talca, a pocas
              <br />
              cuadras del centro
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base mb-8" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4" style={{ color: C.bosque }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.bosque, color: C.crema }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors"
                style={{ borderColor: C.line, color: C.bosque }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-2xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.arenaSoft }}
            >
              <iframe
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
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-10`} style={{ color: C.bosque }}>
            Preguntas frecuentes
          </h2>
        </Reveal>
        <div className="max-w-3xl">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="group border-b py-5" style={{ borderColor: C.line }}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base md:text-lg" style={{ color: C.bosque }}>
                  {f.q}
                  <span
                    className="shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-lg leading-none transition-transform group-open:rotate-45"
                    style={{ backgroundColor: C.arenaSoft, color: C.terracota }}
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
      <section className="relative overflow-hidden">
        <CtaScene className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(14,36,27,0.55) 0%, rgba(14,36,27,0.25) 50%, rgba(14,36,27,0.6) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-36 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-semibold text-[clamp(2.2rem,7vw,4.5rem)] leading-[1.02] mb-6`}
              style={{ color: C.crema }}
            >
              ¿Listo para <em className="font-medium" style={{ color: C.arena }}>bajar el ritmo?</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(250,247,240,0.8)' }}>
              Escríbenos por WhatsApp y consulta disponibilidad para tus
              fechas.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-8 py-4 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.terracota, color: C.crema }}
              >
                Consultar disponibilidad
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-4 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(250,247,240,0.5)', color: C.crema }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.bosqueDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,247,240,0.65)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(250,247,240,0.45)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WhatsAppFab />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
