import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF7EF',
  leaf: '#E4EBD6',
  field: '#4C6B3C',
  deep: '#2E4224',
  earth: '#8C6239',
  earthSoft: '#E6D8C6',
  ink: '#2A2E22',
  muted: '#6E7263',
  line: 'rgba(42,46,34,0.14)',
}

export const metadata: Metadata = {
  title: 'Mía Centro De Estética — Estética y cuidado personal en Curicó',
  description:
    'Centro de estética en Curicó, Región del Maule. Limpiezas faciales, manicure, masajes y depilación con atención directa. Agenda por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El centro', href: '#el-centro' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agendar', href: '#contacto' },
]

const SERVICES = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Bandeja con utensilios de limpieza facial: brochas, cuencos y rodillo de jade',
    name: 'Limpieza facial profunda',
    desc: 'Higiene, exfoliación y mascarilla según tu tipo de piel. Sales con la cara descansada y luminosa.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Estación de manicure con esmaltes, lámpara y vista a la calle de Curicó',
    name: 'Manicure y pedicure',
    desc: 'Esmaltado tradicional y permanente, cuidado de cutícula y forma. Un momento para ti, con calma.',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Interior del centro de estética con plantas y luz natural',
    name: 'Masajes de relajación',
    desc: 'Descontracturante y relajante en cabina tranquila, con aceites y música suave.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción del centro con jarra de agua, toallas y flores frescas',
    name: 'Depilación y cejas',
    desc: 'Depilación facial, perfilado y laminado de cejas para enmarcar la mirada sin exagerar.',
  },
]

const PRICES = [
  { name: 'Limpieza facial profunda', price: 'desde $25.000' },
  { name: 'Manicure permanente', price: 'desde $15.000' },
  { name: 'Pedicure completa', price: 'desde $18.000' },
  { name: 'Masaje descontracturante (45 min)', price: 'desde $22.000' },
  { name: 'Depilación de cejas y rostro', price: 'desde $8.000' },
  { name: 'Perfilado y laminado de cejas', price: 'desde $12.000' },
]

const HOURS = [
  { days: 'Lun–Vie', time: '10:00–19:00' },
  { days: 'Sábado', time: '10:00–14:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

const TESTIMONIALS = [
  'Atención muy cuidada y puntual. La limpieza facial me dejó la piel como nueva, se nota el cariño en los detalles.',
  'Llevo meses viniendo a hacerme las uñas y siempre salgo contenta. Ambiente tranquilo y muy profesional.',
  'Me atendieron con una calidez que no se encuentra en cualquier parte. Recomendado para regalarse un momento.',
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.earthSoft : C.earth }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 space-y-5 self-start" aria-label="Agenda, horarios y ubicación">
      {/* CTA principal */}
      <div
        className="rounded-2xl p-6 border"
        style={{ backgroundColor: C.field, borderColor: 'rgba(46,66,36,0.4)' }}
      >
        <p className={`${display.className} text-2xl leading-tight mb-2`} style={{ color: '#FBF7EF' }}>
          Agenda tu hora
        </p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(251,247,239,0.94)' }}>
          Te confirmamos hora el mismo día. Cuéntanos qué servicio buscas.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:brightness-[1.05] hover:-translate-y-px active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: '#FBF7EF', color: C.deep }}
        >
          Escribir por WhatsApp
        </a>
        <a
          href={`tel:${BIZ.phoneTel}`}
          className="block text-center text-sm mt-3 underline underline-offset-4 decoration-2 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: '#FBF7EF', textDecorationColor: 'rgba(251,247,239,0.45)' }}
        >
          {BIZ.phoneDisplay}
        </a>
      </div>

      {/* Horarios */}
      <div className="rounded-2xl p-6 border" style={{ backgroundColor: '#FFFDF7', borderColor: C.line }}>
        <h2 className={`${display.className} text-xl mb-4`} style={{ color: C.deep }}>
          Horarios
        </h2>
        <ul className="space-y-2.5">
          {HOURS.map((h) => (
            <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm">
              <span style={{ color: C.muted }}>{h.days}</span>
              <span className="flex-1 border-b border-dotted" style={{ borderColor: C.line }} aria-hidden="true" />
              <span className="font-semibold" style={{ color: C.ink }}>{h.time}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs leading-relaxed mt-4" style={{ color: C.muted }}>
          Horarios de muestra — confirma disponibilidad por WhatsApp.
        </p>
      </div>

      {/* Dirección */}
      <div className="rounded-2xl p-6 border" style={{ backgroundColor: '#FFFDF7', borderColor: C.line }}>
        <h2 className={`${display.className} text-xl mb-3`} style={{ color: C.deep }}>
          Dónde estamos
        </h2>
        <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
          {BIZ.address}
          <br />
          {BIZ.city}, {BIZ.region}, Chile
        </address>
        <div className="rounded-xl overflow-hidden border mb-4" style={{ borderColor: C.line }}>
          <iframe
            title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
            src={MAPS_EMBED}
            className="w-full h-[180px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: C.field, textDecorationColor: 'rgba(76,107,60,0.35)' }}
        >
          Cómo llegar →
        </a>
      </div>

      {/* Reputación */}
      <div className="rounded-2xl p-6 border" style={{ backgroundColor: C.leaf, borderColor: 'rgba(76,107,60,0.25)' }}>
        <div className="flex items-center gap-2 mb-2">
          <Stars value={5} color={C.earth} className="w-3.5 h-3.5" />
        </div>
        <p className="text-sm leading-relaxed mb-3" style={{ color: C.ink }}>
          <strong>{BIZ.reviews} reseñas</strong> en su ficha de Google Maps.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-2 transition-all hover:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: C.field, textDecorationColor: 'rgba(76,107,60,0.35)' }}
          >
            Google Maps
          </a>
          <a
            href={BIZ.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-2 transition-all hover:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: C.field, textDecorationColor: 'rgba(76,107,60,0.35)' }}
          >
            Facebook · {BIZ.facebookFollowers} seguidores
          </a>
        </div>
      </div>
    </aside>
  )
}

export default function MiaCentroDeEsteticaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(251,247,239,0.94)',
          ink: C.deep,
          line: C.line,
          btnBg: C.field,
          btnInk: '#FBF7EF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cabina de tratamientos de Mía Centro De Estética con vista al campanario de Curicó"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(251,247,239,0.94) 0%, rgba(251,247,239,0) 130px), ' +
              'linear-gradient(180deg, rgba(46,66,36,0.30) 0%, rgba(46,66,36,0.30) 35%, rgba(46,66,36,0.88) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:bg-white hover:-translate-y-px active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: 'rgba(251,247,239,0.94)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.earth} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Centro de estética · Curicó · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.0] tracking-[-0.01em] text-[clamp(3rem,10.5vw,6.4rem)] mb-6`}
              style={{ color: '#FBF7EF' }}
            >
              Lo que se cuida,
              <br />
              <em style={{ color: C.earthSoft }}>florece</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,247,239,0.88)' }}>
              En pleno Curicó, un espacio tranquilo para el cuidado de la
              piel, las manos y el descanso. Atención directa, sin prisa
              y con productos elegidos a conciencia.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-base md:text-lg px-8 py-3 md:py-3.5 rounded-full transition-all duration-200 hover:brightness-[1.08] hover:-translate-y-px active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ backgroundColor: C.earth, color: '#FBF7EF' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} text-base md:text-lg px-8 py-3 md:py-3.5 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ borderColor: 'rgba(251,247,239,0.55)', color: '#FBF7EF' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(251,247,239,0.22)', backgroundColor: 'rgba(46,66,36,0.45)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,247,239,0.94)' }}>
            <span>{BIZ.address}, Curicó</span>
            <span>Atención con hora agendada</span>
            <span>{BIZ.reviews} reseñas en Google</span>
            <span className="hidden md:inline" style={{ color: C.earthSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Doble columna: contenido + sidebar pegajoso ── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-14 items-start">
        <main className="space-y-20 md:space-y-28 min-w-0">
          {/* Servicios */}
          <section id="servicios" className="scroll-mt-24">
            <Reveal>
              <Eyebrow>Servicios</Eyebrow>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
                  Tratamientos de la casa
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                  Servicios de ejemplo: al publicar van los tratamientos,
                  duraciones y valores reales del centro.
                </p>
              </div>
            </Reveal>
            <ul className="space-y-10 md:space-y-12">
              {SERVICES.map((s, i) => (
                <li key={s.name}>
                  <Reveal delay={i * 60}>
                    <div className="group grid sm:grid-cols-[240px_1fr] gap-5 md:gap-7 items-center">
                      <figure className="relative rounded-2xl overflow-hidden border aspect-[4/3]" style={{ borderColor: C.line }}>
                        <Image
                          src={s.src}
                          alt={s.alt}
                          fill
                          sizes="(min-width: 640px) 240px, 100vw"
                          loading="eager"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </figure>
                      <div>
                        <p className={`${display.className} italic text-lg mb-1`} style={{ color: C.earth }}>
                          {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className={`${display.className} text-2xl md:text-3xl leading-tight mb-2`} style={{ color: C.deep }}>
                          {s.name}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>

          {/* Sobre el centro */}
          <section id="el-centro" className="scroll-mt-24 border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
            <Reveal>
              <Eyebrow>El centro</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
                Un lugar tranquilo
                <br />
                en pleno Curicó
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                <div className="space-y-5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  <p>
                    Mía Centro De Estética atiende en {BIZ.address}, en el
                    centro de Curicó. Aquí la atención es directa: quien te
                    recibe es quien te atiende, y cada hora se agenda con
                    el tiempo que el tratamiento necesita.
                  </p>
                  <p>
                    Son {BIZ.reviews} las reseñas que acumula su ficha de
                    Google Maps, y más de {BIZ.facebookFollowers} personas
                    siguen su página de Facebook. Las opiniones de abajo
                    son de muestra: al publicar van las reseñas reales.
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ color: C.field, textDecorationColor: 'rgba(76,107,60,0.35)' }}
                  >
                    Ver la ficha en Google →
                  </a>
                </div>
                <figure className="relative rounded-2xl overflow-hidden border aspect-[4/3]" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Recepción y sala de espera del centro, con plantas y vista a la calle"
                    fill
                    sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                    loading="eager"
                    className="object-cover"
                  />
                </figure>
              </div>
            </Reveal>
            <div className="space-y-5 mt-12">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={i * 90}>
                  <figure
                    className="rounded-2xl p-6 md:p-7 border"
                    style={{ backgroundColor: '#FFFDF7', borderColor: C.line }}
                  >
                    <blockquote className={`${display.className} text-lg md:text-xl leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.earth }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Precios */}
          <section id="precios" className="scroll-mt-24 border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
            <Reveal>
              <Eyebrow>Precios</Eyebrow>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
                  Valores de referencia
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                  Lista de muestra: al publicar van los precios reales de
                  cada tratamiento.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="rounded-2xl border divide-y overflow-hidden" style={{ backgroundColor: '#FFFDF7', borderColor: C.line }}>
                {PRICES.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline justify-between gap-4 px-5 md:px-7 py-4"
                    style={{ borderColor: C.line }}
                  >
                    <span className="text-sm md:text-base" style={{ color: C.ink }}>{p.name}</span>
                    <span className="flex-1 border-b border-dotted mx-1" style={{ borderColor: C.line }} aria-hidden="true" />
                    <span className={`${display.className} text-lg md:text-xl whitespace-nowrap`} style={{ color: C.earth }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-xs leading-relaxed mt-4" style={{ color: C.muted }}>
                Precios de referencia para el ejemplo. Confirma valores y
                promociones vigentes directamente por WhatsApp.
              </p>
            </Reveal>
          </section>
        </main>

        <Sidebar />
      </div>

      {/* ── Contacto / CTA final ── */}
      <section id="contacto" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow light>Agenda tu hora</Eyebrow>
              <h2 className={`${display.className} text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[1.05] mb-6`} style={{ color: '#FBF7EF' }}>
                Regálate un momento,
                <br />
                <em style={{ color: C.earthSoft }}>te lo mereces</em>
              </h2>
              <p className="text-sm md:text-base max-w-md mb-9 leading-relaxed" style={{ color: 'rgba(251,247,239,0.9)' }}>
                Escríbenos por WhatsApp, cuéntanos qué necesitas y te
                confirmamos la hora el mismo día. Estamos en {BIZ.address},
                Curicó.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-base md:text-lg px-8 py-3 md:py-4 rounded-full transition-all duration-200 hover:brightness-[1.08] hover:-translate-y-px active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2`}
                  style={{ backgroundColor: C.earth, color: '#FBF7EF' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-base md:text-lg px-8 py-3 md:py-4 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2`}
                  style={{ borderColor: 'rgba(251,247,239,0.5)', color: '#FBF7EF' }}
                >
                  Cómo llegar →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#24331C', color: '#FBF7EF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,247,239,0.85)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2">
                Facebook
              </a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,247,239,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(251,247,239,0.8)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2" style={{ color: '#FBF7EF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Servicios, precios, horarios y reseñas citadas son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2" style={{ color: C.earthSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
