import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «postal de la casona verde» — papel crema, serif
 * patrimonial con itálicas, foto de la fachada enmarcada como postal
 * girada y detalles de jardín. Playfair Display para la casa, Jost
 * para el texto, Space Mono para fichas y etiquetas.
 */
const C = {
  paper: '#F4EFE3',
  card: '#FBF8EF',
  casona: '#1E3D2F',
  hoja: '#4E7A5B',
  terra: '#A84C22',
  ink: '#22291F',
  muted: '#5C6650',
  line: 'rgba(30,61,47,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hostel-1760',
  title: 'Hostel 1760 — Hospedaje en el centro de Talca',
  description:
    'Casa de huéspedes en 3 Sur 1760, Talca: patio, piscina, cocina compartida y recepción 24 horas. Consulta disponibilidad por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#la-casa' },
  { label: 'Incluido', href: '#incluido' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const LA_CASA = [
  {
    src: `${IMG}/patio.webp`,
    name: 'El patio de la fuente',
    desc: 'Corredores con plantas, mesas al aire libre y la fuente al centro: el corazón de la casa.',
  },
  {
    src: `${IMG}/piscina.webp`,
    name: 'La piscina',
    desc: 'Piscina al sol con quincho y reposeras, para los días de calor talquino.',
  },
  {
    src: `${IMG}/habitacion.webp`,
    name: 'Las habitaciones',
    desc: 'Piezas entabladas con camas con frazadas de sobra, ventana y madera a la vista.',
  },
  {
    src: `${IMG}/salon.webp`,
    name: 'El salón común',
    desc: 'Sillones mimbre, piso a cuadros y mesa compartida: donde se arman los planes.',
  },
  {
    src: `${IMG}/jardin.webp`,
    name: 'El jardín interior',
    desc: 'Patio empedrado con árbol, tiestos y rincones de sombra para leer o trabajar.',
  },
  {
    src: `${IMG}/interior.webp`,
    name: 'El corredor de entrada',
    desc: 'Piso a cuadros, muro de franjas de colores y plantas camino al patio.',
  },
]

const INCLUIDO = [
  { t: 'Wi-Fi gratis', d: 'En toda la casa.' },
  { t: 'Desayuno', d: 'Para empezar el día.' },
  { t: 'Recepción 24 h', d: 'Llegas a la hora que llegues.' },
  { t: 'Cocina compartida', d: 'Equipada para cocinar.' },
  { t: 'Estacionamiento', d: 'Para quien viene en auto.' },
  { t: 'Piscina', d: 'Abierta en temporada.' },
  { t: 'Pet friendly', d: 'Tu mascota también es huésped.' },
  { t: 'Jardín y terraza', d: 'Espacios al aire libre.' },
  { t: 'Tours', d: 'Panoramas por la región.' },
]

const RESENAS = [
  {
    q: 'Excelente lugar: el dueño nos recibió antes de las 8 de la mañana después de trabajar toda la noche. Piezas cómodas, camas con hartas frazadas, ambiente cálido y un patio interior amplio. Muy recomendado.',
    who: 'Alvaro Pardo',
    where: 'Reseña en Google',
  },
  {
    q: 'Personal amable y siempre dispuesto a ayudar.',
    who: 'Huésped verificado',
    where: 'Reseña en Booking.com',
  },
  {
    q: 'Cama cómoda y ubicación cercana al terminal de buses, al tren, a restaurantes y tiendas.',
    who: 'Laura Santos',
    where: 'Reseña en Google',
  },
  {
    q: 'Cómodo y buena atención.',
    who: 'Manuel Ossio',
    where: 'Reseña en Google',
  },
]

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.terra }} aria-hidden="true" />
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

export default function Hostel1760Page() {
  return (
    <div
      className={`${body.className} h1760 min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .h1760 a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        .h1760-scroll { scrollbar-width: none }
        .h1760-scroll::-webkit-scrollbar { display: none }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,239,227,0.95)',
          ink: C.casona,
          line: C.line,
          btnBg: C.casona,
          btnInk: '#F4EFE3',
        }}
      />

      {/* ── Hero editorial: postal de la casona ── */}
      <section id="inicio" className="relative pt-[110px] md:pt-[150px] pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-5`} style={{ color: C.terra }}>
              Casa de huéspedes · {BIZ.address}, {BIZ.city}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal delay={60}>
                <h1 className={`${display.className} text-[42px] md:text-[72px] leading-[1.02] font-bold mb-6`} style={{ color: C.casona }}>
                  Una casona con patio{' '}
                  <em className="italic" style={{ color: C.hoja }}>
                    en el centro de Talca
                  </em>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
                  {BIZ.name}: hostal de casa antigua a pasos del centro, con
                  piscina, cocina compartida, desayuno y recepción abierta
                  las 24 horas.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: C.casona }}>
                    <Stars value={4} color={C.terra} />
                    8.2 en Booking · {BIZ.bookingReviews} evaluaciones
                  </span>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {BIZ.googleRating} · {BIZ.googleReviews} reseñas en Google
                  </span>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center justify-center h-[52px] px-8 rounded-full text-lg font-bold transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.terra, color: '#FBF8EF' }}
                  >
                    Consulta por WhatsApp
                  </a>
                  <a
                    href="#la-casa"
                    className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-semibold border-2 transition-colors hover:bg-white/40 tap-44"
                    style={{ borderColor: C.casona, color: C.casona }}
                  >
                    Ver la casa
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              {/* postal inclinada de la fachada */}
              <figure className="relative" style={{ rotate: '1.6deg' }}>
                <div className="p-3 pb-12 shadow-xl" style={{ backgroundColor: '#FBF8EF', border: `1px solid ${C.line}` }}>
                  <div className="relative aspect-[4/5] md:aspect-[5/5.2] overflow-hidden">
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt={`Fachada verde de la casona de ${BIZ.name} en ${BIZ.address}, Talca`}
                      fill
                      sizes="(min-width: 768px) 44vw, 90vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className={`${mono.className} absolute left-0 right-0 bottom-0 h-11 flex items-center justify-between px-4 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    <span>La fachada · {BIZ.address}</span>
                    <span>{BIZ.city}</span>
                  </figcaption>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-[-2deg]"
                  style={{ backgroundColor: 'rgba(180,85,42,0.35)' }}
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta de datos de la casa ── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.casona }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          {[
            ['Recepción', 'abierta 24 horas'],
            ['Ubicación', 'a pasos del centro'],
            ['Huéspedes', 'mascotas bienvenidas'],
            ['Contacto', 'respuesta por WhatsApp'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mb-1`} style={{ color: 'rgba(244,239,227,0.6)' }}>
                {k}
              </p>
              <p className={`${display.className} text-base md:text-lg font-bold`} style={{ color: '#F4EFE3' }}>
                {v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── La casa: fotos en fila ── */}
      <section id="la-casa" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.terra }}>
              Los rincones
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-tight mb-4`} style={{ color: C.casona }}>
              La casa, tal cual es
            </h2>
            <p className="text-sm md:text-base max-w-xl mb-8" style={{ color: C.muted }}>
              Fotos reales del hostal: el patio con su fuente, la piscina,
              las piezas entabladas y el jardín. Desliza para recorrerla.
            </p>
          </Reveal>
        </div>
        <div className="h1760-scroll flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-2">
          {LA_CASA.map((f, i) => (
            <Reveal key={f.name} delay={i * 60} className="shrink-0 snap-start w-[78vw] sm:w-[300px]">
              <figure className="h-full flex flex-col" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={f.src}
                    alt={`${f.name} — ${BIZ.name}, Talca`}
                    fill
                    sizes="(min-width: 768px) 300px, 78vw"
                    className="object-cover"
                  />
                  <span
                    className={`${mono.className} absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2 py-1`}
                    style={{ backgroundColor: 'rgba(244,239,227,0.92)', color: C.casona }}
                  >
                    Nº {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <figcaption className="p-4 flex-1 flex flex-col">
                  <p className={`${display.className} text-lg font-bold mb-1`} style={{ color: C.casona }}>
                    {f.name}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {f.desc}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Incluido en la estadía ── */}
      <section id="incluido" className="py-14 md:py-20" style={{ backgroundColor: C.card, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-tight mb-2`} style={{ color: C.casona }}>
              Lo que ya está incluido
            </h2>
            <p className="text-sm md:text-base max-w-xl mb-8" style={{ color: C.muted }}>
              Todo lo que el hostal ofrece según su ficha: sin letra chica.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ backgroundColor: C.line }}>
            {INCLUIDO.map((a, i) => (
              <Reveal key={a.t} delay={(i % 3) * 60}>
                <div className="h-full p-5 md:p-6" style={{ backgroundColor: C.card }}>
                  <p className={`${display.className} text-base md:text-lg font-bold mb-1`} style={{ color: C.casona }}>
                    {a.t}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                    {a.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.terra }}>
              Lo que dicen los huéspedes
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-tight mb-10`} style={{ color: C.casona }}>
              Reseñas reales, con nombre
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.who} delay={(i % 2) * 80}>
                <figure
                  className="h-full flex flex-col justify-between p-6 md:p-7"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}`, borderLeft: `4px solid ${C.hoja}` }}
                >
                  <blockquote className={`${display.className} text-lg md:text-xl leading-snug mb-5`} style={{ color: C.ink }}>
                    «{r.q}»
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold" style={{ color: C.casona }}>
                      {r.who}
                    </span>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                      {r.where}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar + cierre ── */}
      <section id="llegar" className="py-14 md:py-20" style={{ backgroundColor: C.casona, color: '#F4EFE3' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: '#C9D8C4' }}>
              Dónde estamos
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-tight mb-6`}>
              A pasos del centro, fácil de encontrar
            </h2>
            <address className="not-italic text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(244,239,227,0.85)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center h-[52px] px-8 rounded-full text-lg font-bold transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: '#F4EFE3', color: C.casona }}
              >
                Consulta por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-semibold border-2 transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(244,239,227,0.5)', color: '#F4EFE3' }}
              >
                Cómo llegar
              </a>
            </div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(244,239,227,0.6)' }}>
              {BIZ.phoneDisplay} · {BIZ.email}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden" style={{ border: `1px solid rgba(244,239,227,0.3)` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.casona, color: '#F4EFE3' }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-end justify-between gap-5"
          style={{ borderColor: 'rgba(244,239,227,0.16)' }}
        >
          <div>
            <p className={`${display.className} font-bold text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,227,0.66)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,239,227,0.66)' }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,227,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,239,227,0.72)' }}>
            Descripciones y títulos son de muestra; el WhatsApp, la dirección,
            el correo, los amenities y las reseñas citadas son reales.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
