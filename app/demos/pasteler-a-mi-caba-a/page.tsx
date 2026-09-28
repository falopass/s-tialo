import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: '../../fonts/baloo-2/normal-400-800.woff2',
  weight: '400 800',
  variable: '--font-baloo',
})
const body = localFont({
  src: '../../fonts/karla/normal-200-800.woff2',
  weight: '200 800',
  variable: '--font-karla',
})

// Paleta de su vitrina: crema de bizcocho, chocolate y frambuesa.
const C = {
  cream: '#FBF4E9',
  creamDeep: '#F3E4CF',
  cocoa: '#3B231B',
  cocoa2: '#5A3B2E',
  berry: '#B23455',
  berrySoft: '#D98CA3',
  muted: '#7B6053',
  line: 'rgba(59,35,27,0.15)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'pasteler-a-mi-caba-a',
  title: 'Pastelería mi cabaña — Tortas y pastelitos en Talca',
  description:
    'Pastelería en 5 Poniente, Talca: tortas por encargo de todos los tamaños, pastelitos, roscas y vitrina diaria. Encargos por WhatsApp.',
  image: `${IMG}/vitrina.webp`,
})

/** Repisa de vitrina: riel cromado donde "posan" las fotos. */
function Repisa({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="pb-4">{children}</div>
      <div aria-hidden="true" className="relative h-[6px] rounded-full" style={{ backgroundColor: C.cocoa2 }}>
        <span className="absolute inset-x-0 top-0 h-[2px] rounded-full bg-white/30" />
      </div>
    </div>
  )
}

const VITRINA = [
  {
    src: `${IMG}/donas.webp`,
    alt: 'Donas recién espolvoreadas con azúcar en Pastelería mi cabaña, Talca',
    tag: 'las donas de siempre',
  },
  {
    src: `${IMG}/milhojas.webp`,
    alt: 'Trozo de mil hojas con manjar en plato blanco',
    tag: 'mil hojas con manjar',
  },
  {
    src: `${IMG}/pastelitos.webp`,
    alt: 'Bandeja de pastelitos surtidos: hojaldre, mil hojas y berlines',
    tag: 'los pastelitos',
  },
  {
    src: `${IMG}/bandeja.webp`,
    alt: 'Bandeja completa de pasteles variados para llevar',
    tag: 'la bandeja del tecito',
  },
]

const PASOS = [
  { n: '1', t: 'Escríbenos', d: 'Cuéntanos el motivo, para cuántos y para cuándo la necesitas.' },
  { n: '2', t: 'La reservamos', d: 'Confirmamos por WhatsApp. Los clientes recomiendan pedir con anticipación.' },
  { n: '3', t: 'La retiras', d: 'Pasas por la vitrina de 5 Poniente desde las 8:00; domingos desde las 10:00.' },
]

const RESENAS = [
  {
    name: 'Jacque Ormeño',
    stars: 5,
    text: 'Es espectacular: sus tortas tienen diferentes tamaños, desde 4 personas hasta las más grandes que se mandan a hacer. Son realmente exquisitas, frescas. Además con un horario que realmente acomoda a quienes trabajamos jornadas extensas.',
  },
  {
    name: 'Podología Clínica PodoLike',
    stars: 5,
    text: 'Me encantan sus roscas. La atención es siempre muy cordial y todos los dulces son ricos; recomiendo comprarlos para la hora del tecito.',
  },
  {
    name: 'Carolina Fuentes',
    stars: 4,
    text: 'La torta súper rica, pero hay que llamar antes para pedir que reserven. También hay de todo tipo de velitas para las tortas y mucha variedad de pasteles.',
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: '8:00 – 20:30' },
  { days: 'Domingo', time: '10:00 – 20:30' },
]

export default function PasteleriaMiCabanaPage() {
  return (
    <div
      className={`${body.className} ${body.variable} ${display.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.cocoa }}
    >
      {/* ── Header ── */}
      <header
        className="fixed top-0 inset-x-0 z-40"
        style={{ backgroundColor: 'rgba(251,244,233,0.92)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: `1px solid ${C.line}` }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[56px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2 tap-44">
            <span className="w-8 h-8 rounded-full grid place-items-center text-[15px]" style={{ backgroundColor: C.berry, color: C.cream }} aria-hidden="true">
              ✽
            </span>
            <span className={`${display.className} text-lg font-bold tracking-tight`} style={{ color: C.cocoa }}>
              Pastelería <span style={{ color: C.berry }}>mi cabaña</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {[
              ['La vitrina', '#vitrina'],
              ['Tortas por encargo', '#encargo'],
              ['Cómo llegar', '#llegar'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold tap-44 hover:text-[#B23455] transition-colors" style={{ color: C.cocoa2 }}>
                {label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold px-4 py-2 rounded-full tap-44 transition-transform active:scale-95"
            style={{ backgroundColor: C.berry, color: C.cream }}
          >
            Encargar
          </a>
        </div>
      </header>

      {/* ── Hero: la vitrina misma ── */}
      <section id="inicio" className="relative">
        <div className="relative h-[78vh] min-h-[540px] overflow-hidden">
          <Image
            src={`${IMG}/vitrina.webp`}
            alt="Vitrina de Pastelería mi cabaña llena de tortas y pasteles en Talca"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(59,35,27,0.5) 0%, rgba(59,35,27,0.4) 30%, rgba(59,35,27,0.88) 62%, rgba(59,35,27,0.96) 100%)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 pb-12">
            <div className="max-w-6xl mx-auto px-5 md:px-8">
              <Reveal>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.28em] mb-3" style={{ color: C.cream }}>
                  5 Poniente · Talca · desde la mañana hasta la noche
                </p>
                <h1
                  className={`${display.className} font-bold leading-[1.02] tracking-[-0.015em] text-[clamp(2.6rem,9vw,6rem)]`}
                  style={{ color: C.cream, textShadow: '0 2px 20px rgba(59,35,27,0.55)' }}
                >
                  La vitrina que esperan
                  <br />
                  <span style={{ color: '#F0A9BD' }}>las 5 de la tarde</span>
                </h1>
                <p className="mt-4 text-base md:text-xl max-w-xl leading-relaxed" style={{ color: 'rgba(251,244,233,0.92)' }}>
                  Tortas por encargo de todos los tamaños, pastelitos, roscas
                  y ese manjar que hace volver.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-bold px-7 py-3 rounded-full tap-44 transition-transform active:scale-95"
                    style={{ backgroundColor: C.berry, color: C.cream }}
                  >
                    Encargar por WhatsApp
                  </a>
                  <a
                    href="#vitrina"
                    className="text-sm md:text-base font-bold px-7 py-3 rounded-full border-2 tap-44 transition-colors hover:bg-white/10"
                    style={{ borderColor: 'rgba(251,244,233,0.7)', color: C.cream }}
                  >
                    Ver la vitrina
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Franja confianza ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <div className="flex items-center gap-2.5">
              <Stars value={BIZ.rating} color={C.berry} className="w-5 h-5" />
              <p className="font-bold text-base md:text-lg" style={{ color: C.cocoa }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </p>
            </div>
            <p className="text-sm md:text-base font-semibold" style={{ color: C.muted }}>
              abierta los 7 días · velitas y detalles para la torta
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── La vitrina: repisas con fotos ── */}
      <section id="vitrina" className="scroll-mt-14 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal>
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl tracking-tight text-center`}>
            Hoy en la vitrina
          </h2>
          <p className="mt-3 text-sm md:text-base text-center max-w-md mx-auto" style={{ color: C.muted }}>
            Fotos reales de su ficha de Google. Lo que hay cambia cada día;
            pregunta por WhatsApp qué salió del horno.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {VITRINA.map((f, i) => (
            <Reveal key={f.src} delay={i * 80} className={i % 2 === 1 ? 'md:mt-8' : ''}>
              <Repisa>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl" style={{ border: `1.5px solid ${C.line}` }}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 22vw, 46vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-center text-[11px] md:text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.cocoa2 }}>
                    {f.tag}
                  </figcaption>
                </figure>
              </Repisa>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Tortas por encargo ── */}
      <section id="encargo" className="scroll-mt-14" style={{ backgroundColor: C.cocoa, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl tracking-tight leading-[1.05]`}>
              Tortas por encargo,
              <br />
              <span style={{ color: C.berrySoft }}>de 4 personas para arriba</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(251,244,233,0.88)' }}>
              Cumpleaños, bautizos, graduaciones y los domingos en que nadie
              quiere cocinar. Con la variedad de velitas que tiene la vitrina,
              el detalle queda cubierto.
            </p>
            <ol className="mt-8 space-y-0">
              {PASOS.map((p) => (
                <li key={p.n} className="flex gap-4 py-4 border-b border-dashed" style={{ borderColor: 'rgba(251,244,233,0.25)' }}>
                  <span
                    className={`${display.className} w-9 h-9 shrink-0 rounded-full grid place-items-center font-bold text-lg`}
                    style={{ backgroundColor: C.berry, color: C.cream }}
                  >
                    {p.n}
                  </span>
                  <div>
                    <h3 className={`${display.className} font-bold text-lg md:text-xl`}>{p.t}</h3>
                    <p className="mt-0.5 text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(251,244,233,0.8)' }}>
                      {p.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-7 py-3 rounded-full tap-44 transition-transform active:scale-95 inline-block"
                style={{ backgroundColor: C.cream, color: C.cocoa }}
              >
                Encargar mi torta →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl rotate-1" style={{ border: '3px solid rgba(251,244,233,0.4)' }}>
                <Image
                  src={`${IMG}/torta.webp`}
                  alt="Torta de cumpleaños azul y rosado hecha por encargo en Pastelería mi cabaña"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(251,244,233,0.7)' }}>
                encargo real: torta boy/girl
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl tracking-tight text-center`}>
            Lo que dicen los que vuelven
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure
                className="h-full p-6 rounded-2xl"
                style={{ backgroundColor: C.creamDeep, border: `1.5px solid ${C.line}` }}
              >
                <Stars value={r.stars} color={C.berry} className="w-4 h-4" />
                <blockquote className="mt-4 text-sm md:text-[15px] leading-relaxed" style={{ color: C.cocoa }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                  {r.name} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-14" style={{ backgroundColor: C.creamDeep, borderTop: `1.5px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl tracking-tight leading-[1.05]`}>
              A dos cuadras,
              <br />
              <span style={{ color: C.berry }}>cruzando 31 sur</span>
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.cocoa2 }}>
              {BIZ.address}, {BIZ.city}. La vitrina abre temprano y cierra
              cuando aún alcanza para el té.
            </p>
            <ul className="mt-6 space-y-2.5">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base font-semibold" style={{ color: C.cocoa }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.berry }} aria-hidden="true" />
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-7 py-3 rounded-full tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.berry, color: C.cream }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-7 py-3 rounded-full border-2 tap-44 transition-colors hover:bg-white/60"
                style={{ borderColor: C.cocoa, color: C.cocoa }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="min-h-[300px] h-full overflow-hidden rounded-2xl" style={{ border: `2px solid ${C.cocoa}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full grid place-items-center text-[15px] shrink-0" style={{ backgroundColor: C.berry, color: C.cream }} aria-hidden="true">
              ✽
            </span>
            <div>
              <p className={`${display.className} font-bold text-sm`}>{BIZ.name} · {BIZ.rubro}</p>
              <address className="not-italic text-xs mt-0.5" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-[#B23455] tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[24rem]" style={{ color: C.muted }}>
            Mockup de Sitiazo: ficha, horario, reseñas y fotos reales de su página en Google Maps.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
