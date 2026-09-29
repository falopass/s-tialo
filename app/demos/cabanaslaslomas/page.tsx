import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, SITE_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700' },
  ],
})

/**
 * Dirección de arte: «tablero de parcela» — pergamino cálido, café
 * oscuro de madera y el dorado de su logo; cerco de estacas blancas
 * como motivo (las mismas rejas blancas del predio en las fotos).
 * Marcellus pone el letrero romano del portón; Karla el papel.
 */
const C = {
  paper: '#F5EFE3',
  cream: '#FDFAF1',
  soft: '#EAE0CC',
  gold: '#C9A24B',
  goldLight: '#E4C77E',
  rust: '#A3502E',
  saddle: '#5C3D24',
  deep: '#241910',
  ink: '#33251A',
  muted: '#6E5A44',
  line: 'rgba(92,61,36,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanaslaslomas',
  title: 'Cabañas Las Lomas — Cabañas en San Clemente, Maule',
  description:
    'Cabañas equipadas frente a la cordillera en Las Lomas Norte, San Clemente. Piscina, Café Al Paso y reservas directas por WhatsApp.',
  image: `${IMG}/cabana-cordillera.webp`,
})

const NAV_LINKS = [
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'El lugar', href: '#lugar' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const CABANAS = [
  {
    src: `${IMG}/cabana-cordillera.webp`,
    alt: 'Cabaña de madera con la cordillera nevada de fondo en Cabañas Las Lomas, San Clemente',
    name: 'Cabaña Don Gustavo',
    capacity: '3 personas · 1 dormitorio',
    desc: 'Emplazada en pleno campo de la precordillera del Maule, con baño privado, ducha caliente y cocina equipada.',
  },
  {
    src: `${IMG}/interior-living.webp`,
    alt: 'Living de cabaña equipada en Cabañas Las Lomas',
    name: 'Cabaña Doña Ángela',
    capacity: '4 personas · 2 dormitorios',
    desc: 'Dos dormitorios y comedor con todo el equipamiento básico: ideal para descansar en familia o con amigos.',
  },
]

const INCLUYE = [
  'Aire acondicionado',
  'Baño privado con agua caliente',
  'Cocina equipada y loza',
  'Parrilla y horno para asado',
  'Sábanas, toallas y secador',
  'Wifi satelital',
  'Estacionamiento',
  'Piscina y áreas verdes',
  'Juegos: cartas, dominó, ping pong',
]

const MAS = [
  {
    src: `${IMG}/cafe-al-paso.webp`,
    alt: 'Fachada del Café Al Paso en Cabañas Las Lomas',
    name: 'Café Al Paso',
    desc: 'Café, té y agua purificada gratis para huéspedes; además pizzas, pastas, sandwiches y hot dogs.',
  },
  {
    src: `${IMG}/cafe-pizza.webp`,
    alt: 'Pizzas y preparaciones del restobar de Cabañas Las Lomas',
    name: 'Restobar y La Taverna',
    desc: 'Sabores de campo, restobar y el pub La Taverna dentro del mismo predio.',
  },
  {
    src: `${IMG}/piscina-noche.webp`,
    alt: 'Piscina de Cabañas Las Lomas iluminada de noche',
    name: 'Piscina y eventos',
    desc: 'Piscina familiar para huéspedes y salón de eventos en arriendo.',
  },
]

const RESENAS = [
  {
    quote:
      'Lugar maravilloso, ideal para conectarse con la naturaleza. La cabaña está súper bien equipada y donde nos quedamos había aire acondicionado. Además, Gloria y su marido fueron muy amables y hospitalarios.',
    name: 'Lucy Paredes Correa',
  },
  {
    quote:
      'Las cabañas son muy cómodas y acogedoras, tienen todo lo que se necesita. Amplios espacios comunes, mucho verde y un cielo impresionante lleno de estrellas para contemplar.',
    name: 'Paulina Chavez',
  },
  {
    quote:
      'Excelente lugar para hacer un alto en el camino, relajarse y descansar. Piscina, mesas de pool, ping pong, y las ricas preparaciones de su dueña al desayuno, almuerzo y cena.',
    name: 'Andrés Alfaro',
  },
]

const CERCA = ['Radal Siete Tazas', 'Parque Inglés', 'Salto La Placeta', 'Lago Colbún']

// ── Piezas del tablero ───────────────────────────────────────

/** Cerco de estacas: la reja blanca del predio. */
function Cerco({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 200 22" preserveAspectRatio="none">
      <rect x="0" y="8" width="200" height="3" fill={color} />
      <rect x="0" y="16" width="200" height="2" fill={color} />
      {Array.from({ length: 21 }, (_, i) => (
        <path key={i} d={`M${i * 10 + 2} 22 L${i * 10 + 2} 3 L${i * 10 + 5} 0 L${i * 10 + 8} 3 L${i * 10 + 8} 22 Z`} fill={color} />
      ))}
    </svg>
  )
}

/** Rótulo de parcela: banda mono pequeña con líneas. */
function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.goldLight : C.rust }}
    >
      <span className="inline-block w-9 border-t-2 border-dashed" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CabanasLasLomasPage() {
  return (
    <div className={`${body.className} llx min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .llx a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(245,239,227,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.rust,
          btnInk: '#FDFAF1',
        }}
      />

      {/* ── Hero: el portón de la parcela ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-16 md:pb-20 text-center">
          <Reveal>
            <Image
              src={`${IMG}/logo-dorado.webp`}
              alt={`Logo de ${BIZ.name}`}
              width={304}
              height={100}
              className="mx-auto mb-6 w-44 md:w-56 h-auto"
              priority
            />
          </Reveal>
          <Reveal delay={80}>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.34em] font-bold mb-5`} style={{ color: C.goldLight }}>
              Cabañas · San Clemente · Región del Maule
            </p>
            <h1 className={`${display.className} leading-[1.02] tracking-[0.02em] text-[clamp(2.9rem,10vw,6rem)] mb-5`} style={{ color: C.paper }}>
              CABAÑAS EN EL CAMPO,
              <span className="block" style={{ color: C.goldLight }}>
                FRENTE A LA CORDILLERA
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-7" style={{ color: 'rgba(245,239,227,0.8)' }}>
              Dos cabañas equipadas en Las Lomas Norte, con piscina, café
              propio y el cielo estrellado que más elogian las reseñas.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.gold, color: C.deep }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#cabanas"
                className={`${display.className} tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(228,199,126,0.55)', color: C.goldLight }}
              >
                Ver cabañas y tarifas
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.goldLight, textDecorationColor: 'rgba(228,199,126,0.45)' }}
            >
              <Stars value={5} color={C.goldLight} />
              5,0 · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>

      </section>

      {/* postales colgadas: salen del hero hacia el papel */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 -mt-14 md:-mt-20 grid grid-cols-3 gap-3 md:gap-6">
          {[
            { src: `${IMG}/cabana-cordillera.webp`, alt: 'Cabaña con cordillera nevada en Cabañas Las Lomas', r: '-1.5deg' },
            { src: `${IMG}/piscina-dia.webp`, alt: 'Piscina familiar de Cabañas Las Lomas de día', r: '1.2deg' },
            { src: `${IMG}/campo-lomas.webp`, alt: 'Campos verdes y rejas blancas de la parcelación en Las Lomas Norte', r: '-1deg' },
          ].map((p, i) => (
            <Reveal key={p.src} delay={i * 110}>
              <figure className="p-1.5 md:p-2 pb-4 md:pb-5" style={{ backgroundColor: C.cream, rotate: p.r, boxShadow: '0 14px 34px rgba(20,12,6,0.45)' }}>
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 30vw" className="object-cover" />
                </span>
              </figure>
            </Reveal>
          ))}
      </div>

      {/* ── Cabañas y tarifas: la pizarra ── */}
      <section id="cabanas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-24 pb-16 md:pb-24">
          <Reveal>
            <Rotulo>Las cabañas</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] tracking-[0.01em]`} style={{ color: C.deep }}>
                DOS CABAÑAS,
                <br />
                <span style={{ color: C.rust }}>UNA TARIFA CLARA</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Tarifas vigentes publicadas en su sitio. La disponibilidad
                se confirma siempre por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {CABANAS.map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <article
                  className="h-full overflow-hidden"
                  style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, borderRadius: '6px', boxShadow: '0 10px 30px rgba(36,25,16,0.08)' }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={c.src} alt={c.alt} fill sizes="(min-width: 768px) 50vw, calc(100vw - 2.5rem)" className="object-cover" />
                  </div>
                  <div className="p-5 md:p-7">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] font-bold mb-1.5`} style={{ color: C.rust }}>
                      {c.capacity}
                    </p>
                    <h3 className={`${display.className} text-2xl md:text-[26px] tracking-[0.01em] mb-3`} style={{ color: C.deep }}>
                      {c.name.toUpperCase()}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                      {c.desc}
                    </p>
                    <div className="pt-4 border-t border-dashed" style={{ borderColor: C.line }}>
                      <div className="flex items-baseline justify-between gap-3 flex-wrap">
                        <p className={`${display.className} text-3xl md:text-4xl tracking-[0.01em]`} style={{ color: C.deep }}>
                          $50.000
                        </p>
                        <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.muted }}>
                          Domingo a jueves
                        </p>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 flex-wrap mt-1.5">
                        <p className={`${display.className} text-2xl md:text-3xl tracking-[0.01em]`} style={{ color: C.rust }}>
                          $55.000
                        </p>
                        <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.muted }}>
                          Vie, sáb y festivos
                        </p>
                      </div>
                      <p className="text-[11px] mt-3" style={{ color: C.muted }}>
                        por noche · check-in 15:00–22:00 · check-out 12:00
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-10 md:mt-12">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.26em] font-bold mb-4`} style={{ color: C.saddle }}>
                Incluido en cada cabaña
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {INCLUYE.map((s) => (
                  <li
                    key={s}
                    className="text-xs md:text-[13px] font-semibold px-4 py-2"
                    style={{ backgroundColor: C.soft, color: C.ink, border: `1px solid ${C.line}`, borderRadius: '3px' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El lugar: más que cabañas ── */}
      <section id="lugar" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <Cerco color={C.paper} className="block w-full h-5" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo>Dentro del predio</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] tracking-[0.01em]`} style={{ color: C.deep }}>
                CAFÉ, RESTOBAR
                <br />
                <span style={{ color: C.rust }}>Y PISCINA</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Abierto todos los días de 9:00 a 22:30 — también reciben
                visitas de paso, no solo huéspedes.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {MAS.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={i * 110} className="h-full">
                  <article className="h-full p-2.5 pb-5" style={{ backgroundColor: C.cream, rotate: i === 1 ? '0.6deg' : '-0.6deg', boxShadow: '0 6px 20px rgba(36,25,16,0.12)' }}>
                    <span className="relative block aspect-[4/3] overflow-hidden mb-4">
                      <Image src={m.src} alt={m.alt} fill sizes="(min-width: 640px) 33vw, calc(100vw - 2.5rem)" className="object-cover" />
                    </span>
                    <h3 className={`${display.className} text-lg md:text-xl tracking-[0.02em] mb-1.5 px-1.5`} style={{ color: C.deep }}>
                      {m.name.toUpperCase()}
                    </h3>
                    <p className="text-[13px] leading-relaxed px-1.5" style={{ color: C.muted }}>
                      {m.desc}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Cerco color={C.paper} className="block w-full h-5 rotate-180" />
      </section>

      {/* ── Reseñas: lo que repiten los huéspedes ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Rotulo>Lo que dicen</Rotulo>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] tracking-[0.01em] mb-5`} style={{ color: C.deep }}>
              5,0 EN GOOGLE:
              <br />
              <span style={{ color: C.rust }}>UN PUNTAJE PERFECTO</span>
            </h2>
            <div className="flex items-center gap-2.5 mb-6">
              <Stars value={5} color={C.rust} />
              <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: C.muted }}>
              El trato de los dueños, lo equipada que viene cada cabaña y
              el cielo estrellado del campo: eso es lo que más se repite.
            </p>
          </Reveal>
          <div className="grid gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 110}>
                <figure
                  className="p-5 md:p-6"
                  style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, borderLeft: `4px solid ${C.gold}`, borderRadius: '4px', boxShadow: '0 3px 14px rgba(36,25,16,0.07)' }}
                >
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{r.quote}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold`} style={{ color: C.rust }}>
                    {r.name} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={340}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.saddle, textDecorationColor: C.gold }}
              >
                Leer las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Rotulo light>Cómo llegar</Rotulo>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] tracking-[0.01em] mb-6`} style={{ color: C.paper }}>
              LAS LOMAS NORTE,
              <br />
              <span style={{ color: C.goldLight }}>SAN CLEMENTE</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-5" style={{ color: 'rgba(245,239,227,0.85)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(245,239,227,0.65)' }}>
              Base tranquila para recorrer la precordillera maulina:
            </p>
            <ul className="flex flex-wrap gap-2.5 mb-8 max-w-md">
              {CERCA.map((t) => (
                <li
                  key={t}
                  className="text-xs md:text-[13px] font-semibold px-4 py-2"
                  style={{ border: `1px solid rgba(228,199,126,0.4)`, color: C.goldLight, borderRadius: '3px' }}
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.gold, color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(228,199,126,0.55)', color: C.goldLight }}
              >
                {BIZ.site}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[260px]" style={{ border: '1px solid rgba(228,199,126,0.3)', borderRadius: '4px' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold mt-3 text-center`} style={{ color: 'rgba(228,199,126,0.75)' }}>
              {BIZ.hours}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4"
          style={{ borderColor: 'rgba(245,239,227,0.14)' }}
        >
          <div>
            <p className={`${display.className} text-xl tracking-[0.04em] mb-1.5`}>{BIZ.name.toUpperCase()}</p>
            <address className="not-italic text-[13px] leading-relaxed" style={{ color: 'rgba(245,239,227,0.65)' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.site}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: 'rgba(245,239,227,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 text-[11px] leading-relaxed" style={{ color: 'rgba(245,239,227,0.55)' }}>
            Fotos y logo reales de cabanaslaslomas.cl; tarifas, reseñas,
            dirección y teléfono verificados en su sitio y Google Maps.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
