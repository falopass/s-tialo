import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IG_URL, IMG, TARIFAS, POSTAS, RESENAS } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

const C = {
  cream: '#F4EFE3',
  papel: '#FBF7EC',
  forest: '#1E3D2F',
  forestDeep: '#142A20',
  wood: '#5B3A1E',
  gold: '#C8A24B',
  brick: '#A8491F',
  ink: '#24301F',
  muted: 'rgba(36,48,31,0.66)',
  line: 'rgba(36,48,31,0.18)',
  creamDim: 'rgba(244,239,227,0.74)',
  lineLight: 'rgba(244,239,227,0.22)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

/** Tablón: cartel de parque — marco grueso de madera + placa crema. */
function Tablon({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className} style={{ backgroundColor: C.wood, padding: 10, boxShadow: '0 20px 50px rgba(20,42,32,0.35)' }}>
      <div style={{ backgroundColor: C.papel, border: `2px solid ${C.gold}` }}>{children}</div>
    </div>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'camping-y-cabanas-jemaresdagu',
  title: 'Camping y Cabañas Jemaresdagu — Vilches Alto, San Clemente',
  description: 'Cabañas equipadas, sitios de camping, glamping y una cascada propia en el km 22 de Vilches Alto. Reserva por WhatsApp.',
  image: `${IMG}/cascada.webp`,
})

const FOTOS = [
  { src: 'cabana.webp', cap: 'Cabaña equipada, calefacción a leña', alt: 'Exterior de una cabaña de madera del camping entre árboles' },
  { src: 'interior.webp', cap: 'Por dentro: camas y comedor', alt: 'Interior de cabaña con camas blancas y muebles de madera' },
  { src: 'sitios.webp', cap: 'Sitios de camping entre árboles', alt: 'Sector de carpas con pasto y árboles' },
  { src: 'cascada.webp', cap: 'La cascada del predio', alt: 'Cascada natural cayendo entre rocas y bosque' },
  { src: 'sendero.webp', cap: 'El sendero a la cascada', alt: 'Sendero de bosque con hojas y luz entre árboles' },
  { src: 'camino.webp', cap: 'El camino de entrada, km 22', alt: 'Camino de tierra de acceso al camping' },
  { src: 'copihue.webp', cap: 'Copihue nativo del predio', alt: 'Flor de copihue roja colgando de una rama' },
]

export default function JemaresdaguPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero: letrero de entrada ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.forestDeep }}>
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(244,239,227,0.9) 0 1px, transparent 1px 11px)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
              <Reveal>
                <p className={`${mono.className} text-[11px] md:text-xs font-bold tracking-[0.24em] uppercase mb-6 inline-flex items-center gap-3`} style={{ color: C.gold }}>
                  <span className="border border-current px-2.5 py-1">Vilches Alto</span>
                  <span className="border border-current px-2.5 py-1">km 22</span>
                </p>
                <h1 className={`${display.className} font-black leading-[1.03] tracking-[-0.015em] text-[clamp(2.4rem,9vw,5rem)]`} style={{ color: C.cream }}>
                  El bosque de
                  <br />
                  Vilches Alto,
                  <br />
                  <em className="not-italic" style={{ color: C.gold }}>por noches</em>
                </h1>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.creamDim }}>
                  Cabañas equipadas, sitios de camping, glamping y una cascada
                  propia — a 22 km de San Clemente, junto a la Reserva Altos de
                  Lircay.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2.5 border px-4 py-2.5 ${focusRing} tap-44`}
                    style={{ borderColor: C.lineLight }}
                  >
                    <Stars value={BIZ.rating} color={C.gold} />
                    <span className={`${mono.className} text-xs font-bold tracking-wider`} style={{ color: C.cream }}>
                      {BIZ.rating} · {BIZ.reviews} reseñas
                    </span>
                  </a>
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.creamDim }}>
                    {BIZ.checkinTope}
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} font-extrabold uppercase tracking-[0.06em] text-sm px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.gold, color: C.forestDeep }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#tarifas"
                    className={`${body.className} font-extrabold uppercase tracking-[0.06em] text-sm px-7 py-3 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                    style={{ borderColor: 'rgba(244,239,227,0.5)', color: C.cream }}
                  >
                    Ver tarifas 2026
                  </a>
                </div>
              </Reveal>
              {/* El letrero real, como tablón de entrada */}
              <Reveal delay={140}>
                <Tablon>
                  <img
                    src={`${IMG}/letrero.webp`}
                    alt="Letrero pintado a mano de Jemaresdagu en la entrada del camping, km 22"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="flex items-center justify-between px-5 py-3.5 border-t-2" style={{ borderColor: C.gold }}>
                    <span className={`${mono.className} text-[10px] md:text-xs font-bold tracking-[0.22em] uppercase`} style={{ color: C.wood }}>
                      Entrada del predio
                    </span>
                    <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full" aria-hidden="true" />
                  </div>
                </Tablon>
              </Reveal>
            </div>
          </div>
          {/* cinta de hitos */}
          <div className="border-t" style={{ borderColor: C.lineLight }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-2">
              {['Cabañas equipadas', 'Sitios de camping', 'Glamping', 'Cascada propia', 'Mascotas bienvenidas'].map((t) => (
                <span key={t} className={`${mono.className} text-[11px] font-bold tracking-[0.14em] uppercase`} style={{ color: C.creamDim }}>
                  <span style={{ color: C.gold }} aria-hidden="true">▸ </span>{t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 01 Postas del predio ── */}
        <section id="postas" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.brick }}>
                    N°01 — El plano del predio
                  </p>
                  <h2 className={`${display.className} font-black text-3xl md:text-5xl leading-[1.03]`} style={{ color: C.ink }}>
                    Cuatro postas
                    <br />
                    <span style={{ color: C.wood }}>desde la entrada</span>
                  </h2>
                </div>
                <p className="hidden md:block text-sm leading-relaxed max-w-[230px] text-right" style={{ color: C.muted }}>
                  Lo que encontrarás caminando por dentro, según las reseñas y publicaciones del camping.
                </p>
              </div>
            </Reveal>
            <ol className="relative border-l-2 border-dashed ml-2 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-6" style={{ borderColor: C.wood }}>
              {POSTAS.map((p, i) => (
                <li key={p.km} className="relative pl-8 md:pl-0 pb-9 md:pb-0 md:pt-9">
                  <span
                    className="absolute -left-[9px] md:left-0 md:-top-[9px] w-4 h-4 rounded-full border-2"
                    style={{ backgroundColor: C.cream, borderColor: C.wood }}
                    aria-hidden="true"
                  />
                  <span className="hidden md:block absolute top-0 left-6 right-0 border-t-2 border-dashed -translate-y-[1px]" style={{ borderColor: C.wood }} aria-hidden="true" />
                  <Reveal delay={i * 90}>
                    <p className={`${mono.className} text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase mb-2`} style={{ color: C.brick }}>
                      Posta {String(i + 1).padStart(2, '0')} · {p.km}
                    </p>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl leading-tight mb-2`} style={{ color: C.ink }}>
                      {p.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 02 Tarifas 2026: el cartel ── */}
        <section id="tarifas" className="scroll-mt-20" style={{ backgroundColor: C.forest }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="text-center mb-10 md:mb-12">
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.gold }}>
                  N°02 — El cartel de la entrada
                </p>
                <h2 className={`${display.className} font-black text-3xl md:text-5xl leading-[1.03]`} style={{ color: C.cream }}>
                  Tarifas temporada 2026
                </h2>
                <p className={`${mono.className} mt-3 text-[11px] md:text-xs tracking-[0.16em] uppercase`} style={{ color: C.creamDim }}>
                  {BIZ.checkinTope}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Tablon className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3">
                  {TARIFAS.map((t, i) => (
                    <div
                      key={t.servicio}
                      className={`px-6 md:px-7 py-6 md:py-8 ${i > 0 ? 'border-t-2 md:border-t-0 md:border-l-2' : ''}`}
                      style={{ borderColor: C.line }}
                    >
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] font-bold`} style={{ color: C.brick }}>
                        {t.nota}
                      </p>
                      <h3 className={`${display.className} font-black text-2xl md:text-3xl mt-1`} style={{ color: C.ink }}>
                        {t.servicio}
                      </h3>
                      <p className={`${mono.className} text-[11px] tracking-[0.06em] mt-1`} style={{ color: C.muted }}>
                        {t.horario}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {t.precios.map((p) => (
                          <li key={p.quién} className="flex items-baseline gap-2 text-sm md:text-base">
                            <span className="font-bold shrink-0" style={{ color: C.ink }}>{p.quién}</span>
                            <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: 'rgba(36,48,31,0.4)' }} aria-hidden="true" />
                            <span className={`${mono.className} font-bold shrink-0`} style={{ color: C.wood }}>{p.valor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border-t-2 px-6 md:px-7 py-4 text-center" style={{ borderColor: C.line }}>
                  <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                    Valores publicados por el camping para temporada 2026; se confirman al reservar por WhatsApp.
                  </p>
                </div>
              </Tablon>
            </Reveal>
          </div>
        </section>

        {/* ── 03 El predio en fotos ── */}
        <section id="fotos" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="border-t-2 pt-4 mb-10 flex items-end justify-between gap-6" style={{ borderColor: C.ink }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold`} style={{ color: C.brick }}>
                  N°03 — El predio y su gente
                </p>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  fotos reales de Google y @jemaresdagu.camping
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FOTOS.map((f, i) => (
                <Reveal key={f.src} delay={i * 60} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
                  <figure className="h-full flex flex-col" style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}>
                    <img
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      className={`w-full object-cover ${i === 0 ? 'h-64 md:h-[26.5rem]' : 'h-40 md:h-52'}`}
                      loading="lazy"
                    />
                    <figcaption className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.16em] font-bold border-t`} style={{ borderColor: C.line, color: C.muted }}>
                      {f.cap}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 Reseñas ── */}
        <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-14 items-start">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.brick }}>
                  N°04 — Lo que cuentan
                </p>
                <h2 className={`${display.className} font-black text-3xl md:text-5xl leading-[1.03] mb-6`} style={{ color: C.ink }}>
                  {BIZ.rating} de 5
                  <br />
                  <span style={{ color: C.wood }}>en Google</span>
                </h2>
                <Stars value={BIZ.rating} color={C.wood} className="w-6 h-6" />
                <p className="mt-4 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas reales en la ficha del camping; la cascada y los baños salen en casi todas.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-5 text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 ${focusRing} tap-44`}
                  style={{ color: C.ink, textDecorationColor: 'rgba(36,48,31,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-4">
                {RESENAS.map((r, i) => (
                  <Reveal key={r.nombre} delay={i * 90}>
                    <figure className="p-5 md:p-6 border" style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}>
                      <blockquote className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                        “{r.texto}”
                      </blockquote>
                      <figcaption className="flex items-center justify-between gap-4">
                        <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-bold`} style={{ color: C.muted }}>
                          {r.nombre} · Google Maps
                        </span>
                        <Stars value={5} color={C.gold} className="w-3.5 h-3.5" />
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Cómo llegar ── */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.brick }}>
                N°05 — Cómo llegar
              </p>
              <h2 className={`${display.className} font-black text-3xl md:text-5xl leading-[1.03] mb-10 md:mb-14`} style={{ color: C.ink }}>
                Vilches Alto km 22,
                <br />
                <span style={{ color: C.wood }}>señalizado a mano</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
              <Reveal>
                <div className="border h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.papel }}>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-2`} style={{ color: C.brick }}>
                      Dirección
                    </p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                      <strong className="font-bold">{BIZ.address}</strong>
                      <br />
                      <span style={{ color: C.muted }}>{BIZ.city}, {BIZ.region}, Chile</span>
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: C.brick, textDecorationColor: 'rgba(168,73,31,0.4)' }}
                    >
                      Abrir en Google Maps →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-6 border-b flex-1" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-3`} style={{ color: C.brick }}>
                      En el trayecto
                    </p>
                    <ul className="space-y-2.5">
                      {BIZ.cercanias.map((c) => (
                        <li key={c} className="flex items-baseline gap-2.5 text-sm md:text-base leading-snug" style={{ color: C.ink }}>
                          <span style={{ color: C.gold }} aria-hidden="true">▸</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 md:px-8 py-6 flex items-center justify-between gap-4">
                    <div>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-1`} style={{ color: C.brick }}>
                        Redes
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {BIZ.igHandle} · {BIZ.fbPage}
                      </p>
                    </div>
                    <a
                      href={IG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} shrink-0 text-[10px] uppercase tracking-[0.16em] font-bold border px-3 py-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                      style={{ borderColor: C.ink, color: C.ink }}
                    >
                      Instagram →
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#E4DECD' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className={`${mono.className} px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold`} style={{ borderColor: C.line, color: C.muted }}>
                    {BIZ.address} · {BIZ.city}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre ── */}
        <section style={{ backgroundColor: C.gold }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: 'rgba(36,48,31,0.7)' }}>
                  Reservas · {BIZ.phoneDisplay}
                </p>
                <h2 className={`${display.className} font-black text-3xl md:text-5xl leading-[1.03]`} style={{ color: C.forestDeep }}>
                  ¿Este finde
                  <br />
                  dormimos en el bosque?
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-col items-start md:items-end gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} inline-block font-extrabold uppercase tracking-[0.06em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.forestDeep, color: C.cream }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <p className={`${mono.className} text-[11px] tracking-[0.14em] uppercase font-bold`} style={{ color: 'rgba(36,48,31,0.7)' }}>
                    Check-in hasta las 20:00
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
