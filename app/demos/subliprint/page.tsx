import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
  variable: '--font-mono',
})

// Chapa de imprenta: papel, tinta negra y magenta de proceso. Marcas de
// corte en las esquinas de las fotos y fichas de color CMYK como motivo.
const C = {
  paper: '#F8F5EE',
  card: '#FFFFFF',
  ink: '#17171C',
  magenta: '#C81E6B',
  cyan: '#0891B2',
  yellow: '#E4B700',
  muted: '#5B5B66',
  line: 'rgba(23,23,28,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'subliprint',
  title: 'Subliprint — Impresiones, estampado y publicidad en San Clemente',
  description:
    'Tazones sublimados, tarjetas de presentación, rotulación y estampado en San Clemente. Cotiza tu impresión por WhatsApp.',
  image: `${IMG}/tazon.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'La tienda', href: '#tienda' },
]

const TRABAJOS = [
  {
    src: `${IMG}/tazon.webp`,
    alt: 'Tazón blanco sublimado con una foto impresa a todo color',
    spec: 'sublimación · cerámica',
    title: 'Tazones con tu foto',
    desc: 'Fotos, frases y diseños sobre tazón: regalos que sí se usan todos los días.',
  },
  {
    src: `${IMG}/tarjetas.webp`,
    alt: 'Tarjetas de presentación impresas sobre la mesa del taller',
    spec: 'offset digital · couche',
    title: 'Tarjetas de presentación',
    desc: 'Papelería comercial para tu negocio: se diseña, se aprueba y se imprime.',
  },
  {
    src: `${IMG}/rotulacion.webp`,
    alt: 'Furgón rotulado con vinilo de corte para un emprendimiento de miel',
    spec: 'vinilo de corte · vehicular',
    title: 'Rotulación y letreros',
    desc: 'Vinilos para vitrinas, vehículos y letreros: tu marca también anda en la calle.',
  },
  {
    src: `${IMG}/tazon-verde.webp`,
    alt: 'Tazón de color verde lima listo para sublimar',
    spec: 'sublimación · tazón color',
    title: 'Estampado y publicidad',
    desc: 'Piezas promocionales y estampados para empresas, emprendimientos y eventos.',
  },
]

const MARQUEE = ['Tazones sublimados', 'Tarjetas', 'Rotulación', 'Estampado', 'Publicidad', 'Papelería']

const PROCESO = [
  {
    n: '01',
    t: 'Traes la idea',
    d: 'Una foto, un logo, un texto. Si no tienes diseño, te ayudan a armarlo en el mismo local.',
  },
  {
    n: '02',
    t: 'Se aprueba antes de imprimir',
    d: 'Revisas cómo quedará la pieza y recién ahí va a máquina. Sin sorpresas al retirar.',
  },
  {
    n: '03',
    t: 'Entrega a la fecha indicada',
    d: 'Las reseñas lo repiten: cumplen la fecha que indican. Para encargos puntuales, eso vale oro.',
  },
]

const REVIEWS = [
  {
    name: 'María José Olmos Meneses',
    text: 'Excelente atención y buena calidad de sus productos, lo recomiendo 100%. Entrega a fecha que indican.',
  },
  {
    name: 'Manuel Ortiz',
    text: 'Excelente, profesionales y entrega de calidad.',
  },
  {
    name: 'Juan Marileo',
    text: 'Bien atendidos y ayudan con las impresiones, sugieren. Muy recomendable.',
  },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '10:00 – 19:00' },
  { d: 'Sábado', h: '10:00 – 14:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

function CropMarks({ color = C.ink }: { color?: string }) {
  const s = { position: 'absolute' as const, width: 14, height: 14, borderColor: color, borderStyle: 'solid' }
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <span style={{ ...s, top: -1, left: -1, borderWidth: '2px 0 0 2px' }} />
      <span style={{ ...s, top: -1, right: -1, borderWidth: '2px 2px 0 0' }} />
      <span style={{ ...s, bottom: -1, left: -1, borderWidth: '0 0 2px 2px' }} />
      <span style={{ ...s, bottom: -1, right: -1, borderWidth: '0 2px 2px 0' }} />
    </div>
  )
}

function Cmyk() {
  const sw = [
    { bg: C.cyan, l: 'C' },
    { bg: C.magenta, l: 'M' },
    { bg: C.yellow, l: 'Y' },
    { bg: C.ink, l: 'K' },
  ]
  return (
    <span className="inline-flex gap-1" aria-hidden="true">
      {sw.map((s) => (
        <span
          key={s.l}
          className="w-5 h-5 flex items-center justify-center text-[9px] font-bold"
          style={{ backgroundColor: s.bg, color: s.l === 'Y' ? C.ink : '#fff' }}
        >
          {s.l}
        </span>
      ))}
    </span>
  )
}

export default function SubliprintPage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes sp-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .sp-marquee { animation: sp-marquee 28s linear infinite }
        @media (prefers-reduced-motion: reduce) { .sp-marquee { animation: none } }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} font-bold tracking-tight`}>
            SUBLI<span style={{ color: C.magenta }}>PRINT</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        theme={{ over: 'light', bar: 'rgba(248,245,238,0.92)', ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.paper }}
      />

      {/* ── Hero: hoja de imprenta con marcas de corte ── */}
      <section id="inicio" className="pt-[100px] md:pt-[130px] pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <Cmyk />
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.28em]`} style={{ color: C.muted }}>
                    Imprenta · San Clemente
                  </span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className={`${display.className} font-bold leading-[1.02] tracking-tight text-[clamp(2.3rem,7.5vw,4.2rem)]`}>
                  Tu foto, tu logo,<br />
                  tu marca —{' '}
                  <span style={{ color: C.magenta }}>impresa</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Sublimación, tarjetas, rotulación y estampado en Villa Valles del Maule, {BIZ.city}.
                  Llegas con la idea y sales con la pieza lista.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.12em]"
                    style={{ backgroundColor: C.ink, color: C.paper, height: 52 }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href="#trabajos"
                    className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.12em] border"
                    style={{ borderColor: C.ink, color: C.ink, height: 52 }}
                  >
                    Ver trabajos
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <p className="mt-6 flex items-center gap-2 text-[13px] font-semibold">
                  <Stars value={4.9} color={C.magenta} />
                  {BIZ.rating} · {BIZ.reviews} opiniones en Google
                </p>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(23,23,28,0.22) 1.2px, transparent 1.3px)',
                    backgroundSize: '9px 9px',
                    maskImage: 'linear-gradient(135deg, black 0%, transparent 45%)',
                    WebkitMaskImage: 'linear-gradient(135deg, black 0%, transparent 45%)',
                  }}
                />
                <div className="relative border" style={{ borderColor: C.ink, backgroundColor: C.card }}>
                  <CropMarks />
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/tazon.webp`}
                      alt="Tazón blanco sublimado con una foto impresa a todo color, sobre fondo blanco"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width:768px) 45vw, 92vw"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 border-t" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                      Trabajo real · tazón sublimado
                    </span>
                    <Cmyk />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta de productos ── */}
      <section aria-label="Productos" className="overflow-hidden py-4" style={{ backgroundColor: C.magenta }}>
        <div className="sp-marquee flex w-max items-center gap-8 px-4">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center gap-8" aria-hidden={rep === 1}>
              {MARQUEE.concat(MARQUEE).map((p, i) => (
                <span key={`${rep}-${i}`} className={`${mono.className} flex items-center gap-8 text-[12px] uppercase tracking-[0.24em] font-semibold whitespace-nowrap`} style={{ color: '#fff' }}>
                  {p}
                  <span aria-hidden="true" className="w-2 h-2" style={{ backgroundColor: rep === 0 ? C.ink : C.ink }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Trabajos con foto real ── */}
      <section id="trabajos" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.magenta }}>
                  De la máquina a la vitrina
                </p>
                <h2 className={`${display.className} font-bold leading-[1.02] tracking-tight text-[clamp(1.9rem,5.5vw,3.4rem)]`}>
                  Trabajos que ya salieron<br />de esta imprenta
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed" style={{ color: C.muted }}>
                Fotos reales de piezas hechas por Subliprint, subidas por ellos mismos a su ficha de Google.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-7 md:gap-9">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 110}>
                <article className="group relative border" style={{ backgroundColor: C.card, borderColor: C.ink }}>
                  <CropMarks color={C.magenta} />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={t.src} alt={t.alt} fill className="object-cover" sizes="(min-width:640px) 45vw, 92vw" />
                  </div>
                  <div className="px-5 py-5 border-t" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.magenta }}>
                      {t.spec}
                    </p>
                    <h3 className={`${display.className} font-bold text-xl tracking-tight mb-2`}>{t.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{t.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ── */}
      <section id="proceso" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: '#F07BB4' }}>
              Así funciona
            </p>
            <h2 className={`${display.className} font-bold leading-[1.02] tracking-tight text-[clamp(1.9rem,5.5vw,3.4rem)] mb-12`}>
              De la idea a la pieza lista
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {PROCESO.map((p, i) => (
              <Reveal key={p.n} delay={i * 110}>
                <div className="border-t-2 pt-5" style={{ borderColor: i === 1 ? C.cyan : i === 2 ? C.yellow : C.magenta }}>
                  <span className={`${mono.className} text-[12px] tracking-[0.3em]`} style={{ color: 'rgba(248,245,238,0.6)' }}>
                    {p.n}
                  </span>
                  <h3 className={`${display.className} font-bold text-2xl tracking-tight mt-3 mb-3`}>{p.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,245,238,0.75)' }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-[minmax(0,300px)_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.magenta }}>
                En Google opinan
              </p>
              <div className="flex items-end gap-3">
                <span className={`${display.className} font-bold leading-none text-[clamp(3.2rem,9vw,5rem)]`}>{BIZ.rating}</span>
                <div className="pb-2">
                  <Stars value={4.9} color={C.magenta} />
                  <p className="text-[12px] mt-1" style={{ color: C.muted }}>
                    {BIZ.reviews} opiniones verificadas
                  </p>
                </div>
              </div>
              <p className={`${mono.className} mt-6 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                Opiniones reales de su ficha de Google Maps
              </p>
            </Reveal>
            <div className="grid gap-6">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 100}>
                  <figure className="relative pl-6">
                    <span aria-hidden="true" className="absolute left-0 top-1 bottom-1 w-1" style={{ backgroundColor: [C.magenta, C.cyan, C.yellow][i % 3] }} />
                    <blockquote className="text-[16px] md:text-lg leading-relaxed">“{r.text}”</blockquote>
                    <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                      — {r.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── La tienda ── */}
      <section id="tienda" className="scroll-mt-20" style={{ backgroundColor: '#EFEAE0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.magenta }}>
                  Dónde imprimen
                </p>
                <h2 className={`${display.className} font-bold leading-[1.02] tracking-tight text-[clamp(1.9rem,5vw,3rem)] mb-6`}>
                  Villa Valles del Maule,<br />San Clemente
                </h2>
                <dl className="space-y-4 text-[15px]">
                  <div className="flex gap-4 border-b pb-4" style={{ borderColor: C.line }}>
                    <dt className={`${mono.className} w-20 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: C.muted }}>
                      Local
                    </dt>
                    <dd className="font-semibold">
                      {BIZ.address}
                      <span className="block text-sm font-normal" style={{ color: C.muted }}>
                        {BIZ.city}, {BIZ.region}
                      </span>
                    </dd>
                  </div>
                  {HORARIO.map((h) => (
                    <div key={h.d} className="flex gap-4 border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: C.line }}>
                      <dt className="w-20 shrink-0 font-semibold text-[13px] pt-0.5">{h.d}</dt>
                      <dd className="font-semibold">{h.h}</dd>
                    </div>
                  ))}
                  <div className="flex gap-4">
                    <dt className={`${mono.className} w-20 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: C.muted }}>
                      Contacto
                    </dt>
                    <dd className="font-semibold">
                      {BIZ.phoneDisplay}
                      <span className="block text-sm font-normal" style={{ color: C.muted }}>
                        Cotizas y encargas por WhatsApp.
                      </span>
                    </dd>
                  </div>
                </dl>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-6 inline-flex items-center gap-2 px-5 text-sm font-bold uppercase tracking-[0.12em] border"
                  style={{ borderColor: C.ink, color: C.ink, height: 48 }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border" style={{ borderColor: C.ink, minHeight: 320, backgroundColor: C.card }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.address}, ${BIZ.city}`} className="w-full h-full min-h-[320px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.magenta }}>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.6px)',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: '#FFFFFF' }}>
              Tazón, tarjeta, vinilo o polera
            </p>
            <h2 className={`${display.className} font-bold leading-[1.02] tracking-tight text-[clamp(2rem,7vw,4.2rem)]`} style={{ color: '#fff' }}>
              Manda la idea<br />y se imprime
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center gap-2 px-8 text-sm font-bold uppercase tracking-[0.12em]"
              style={{ backgroundColor: C.ink, color: C.paper, height: 52 }}
            >
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-8" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-3">
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(248,245,238,0.6)' }}>
            {BIZ.nameFull} — {BIZ.city}, {BIZ.region}
          </p>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(248,245,238,0.6)' }}>
            Demo de muestra · fotos y opiniones de su ficha de Google
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
