import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waRubro, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

/**
 * Identidad desde la fachada real: el letrero Ferri-Frut es azul de
 * señalética sobre blanco, frente a un cierre de madera clara. Ticket
 * de mostrador: papel kraft, tinta azul marino y el azul del letrero
 * como único acento; condensada en mayúsculas.
 */
const C = {
  kraft: '#F2EBDD',
  kraftSoft: '#E9DFCB',
  ink: '#14202E',
  blue: '#0B5CB8',
  blueDeep: '#0A4A94',
  navy: '#10233B',
  muted: '#5C6470',
  line: 'rgba(20,32,46,0.18)',
  lineLight: 'rgba(242,235,221,0.22)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5CB8]'
const FOCUS_LIGHT =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2EBDD]'

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-tres-esquinas',
  title: 'Ferretería Tres Esquinas — Ferretería y materiales en Molina',
  description:
    'Ferretería frente a la plazoleta de Tres Esquinas, Molina: construcción, herramientas, eléctrico e hidráulico. Abierta hasta los domingos. 4,9 en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El pasillo', href: '#pasillo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horario', href: '#horario' },
  { label: 'Contacto', href: '#contacto' },
]

const PASILLO = [
  {
    num: '01',
    rubro: 'Materiales de construcción',
    detalle: 'Lo grueso de la obra: cemento, fierras y todo lo que sostiene.',
  },
  {
    num: '02',
    rubro: 'Fijaciones y mantención',
    detalle: 'Tornillos, tarugos, adhesivos y repuestos para dejar todo firme.',
  },
  {
    num: '03',
    rubro: 'Pinturas y terminaciones',
    detalle: 'Pinturas, pinceles y los detalles que cierran el trabajo.',
  },
  {
    num: '04',
    rubro: 'Perfilería metálica y tabiquería',
    detalle: 'Perfiles, canales y montaje para tabiques y estructuras.',
  },
  {
    num: '05',
    rubro: 'Material eléctrico',
    detalle: 'Cables, interruptores, enchufes y ampolletas para la casa y la obra.',
  },
  {
    num: '06',
    rubro: 'Material hidráulico para riego',
    detalle: 'Tuberías, fittings y lo necesario para regar el campo y el jardín.',
  },
  {
    num: '07',
    rubro: 'Herramientas y eléctricas',
    detalle: 'De mano y de potencia: las que el letrero promete en la entrada.',
  },
]

const RESENAS = [
  {
    text: 'Muy buena atención, gran variedad de herramientas y materiales de construcción, tiene de lo que pidan. 100% recomendado.',
    author: 'José Núñez Bahamondes',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Tiene todo lo que necesitas. Muy buena atención, precios razonables.',
    author: 'Susana Levy',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Una ferretería de gran variedad. Excelente atención.',
    author: 'Silvia Castro Soto',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Excelente. Muy buena atención y bien surtida.',
    author: 'Wilson Inostroza',
    meta: 'Reseña de Google · 5 estrellas',
  },
]

const HORARIO = [
  { days: 'Lunes a sábado', time: '8:30 a 20:00' },
  { days: 'Domingo', time: '9:00 a 14:00' },
]

export default function Page() {
  return (
    <main className={body.className} style={{ backgroundColor: C.kraft, color: C.ink }}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .te-hero-img { animation: tezoom 15s cubic-bezier(0.16,1,0.3,1) both; }
          @keyframes tezoom { from { transform: scale(1.07); } to { transform: scale(1); } }
        }
        .te-row { transition: background-color 0.2s ease, padding-left 0.25s ease; }
        .te-row:hover { background-color: rgba(11,92,184,0.08); padding-left: 10px; }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} font-bold uppercase tracking-wide`}>
            Tres Esquinas
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: C.kraft,
          ink: C.ink,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#F2EBDD',
        }}
        ctaLabel="Consultar stock"
      />

      {/* ── Mostrador: titular gigante + fachada real ────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p
            className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4`}
            style={{ color: C.blue }}
          >
            Ferretería · Frente a la plazoleta · Molina
          </p>
          <h1
            className={`${display.className} font-extrabold uppercase leading-[0.92] tracking-tight text-[3.2rem] sm:text-7xl md:text-8xl`}
          >
            Lo que pidas,
            <br />
            <span style={{ color: C.blue }}>lo traemos</span>.
          </h1>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
              Palabra del dueño, impresa en sus reseñas de Google:
              materiales, herramientas y stock real en la esquina de
              siempre.
            </p>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 font-bold rounded-md px-6 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.blue, color: '#F2EBDD' }}
              >
                Pregunta por WhatsApp
                <span aria-hidden="true">→</span>
              </a>
              <span
                className="inline-flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold tap-44"
                style={{ borderColor: C.line }}
              >
                <Stars value={4.9} color={C.blue} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 mt-8 md:mt-10">
          <figure className="relative overflow-hidden border-2 aspect-[16/10] sm:aspect-[16/8]" style={{ borderColor: C.ink }}>
            <Image
              src={`${IMG}/fachada.webp`}
              alt="Fachada de Ferretería Tres Esquinas con sus letreros azules y banderas chilenas"
              fill
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover te-hero-img"
            />
          </figure>
          <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em] flex flex-wrap gap-x-5 gap-y-1`} style={{ color: C.muted }}>
            <span>Tres Esquinas, frente a la plazoleta</span>
            <span>Abierto los domingos hasta las 14:00</span>
          </figcaption>
        </div>
      </section>

      {/* ── Banda con su letrero real ────────────────────────────── */}
      <section className="mt-10 md:mt-14 border-y-2" style={{ borderColor: C.ink }}>
        <div className="relative h-16 md:h-24 overflow-hidden">
          <Image
            src={`${IMG}/letrero.webp`}
            alt="Letrero azul de Ferretería Tres Esquinas: materiales de construcción y teléfono"
            fill
            sizes="100vw"
            className="object-cover object-[35%_50%]"
          />
        </div>
      </section>

      {/* ── El pasillo: rubros del letrero como ticket ───────────── */}
      <section id="pasillo" className="scroll-mt-20 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h2 className={`${display.className} text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] mb-3`}>
              El pasillo
            </h2>
            <p className="text-sm md:text-base mb-8 max-w-md" style={{ color: C.muted }}>
              Rubros tal cual figuran en el letrero de la fachada. Toca
              cualquiera y consulta stock directo por WhatsApp.
            </p>
            <ul className="border-t-2" style={{ borderColor: C.ink }}>
              {PASILLO.map((p, i) => (
                <li key={p.num}>
                  <Reveal delay={i * 50}>
                    <a
                      href={waRubro(p.rubro.toLowerCase())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`te-row group flex items-baseline gap-4 border-b py-4 md:py-5 tap-44 ${FOCUS}`}
                      style={{ borderColor: C.line }}
                    >
                      <span className={`${mono.className} text-xs md:text-sm w-8 shrink-0`} style={{ color: C.blue }}>
                        {p.num}
                      </span>
                      <span className="flex-1">
                        <span className={`${display.className} block text-xl md:text-2xl font-bold uppercase leading-tight`}>
                          {p.rubro}
                        </span>
                        <span className="block text-sm md:text-[15px] mt-0.5" style={{ color: C.muted }}>
                          {p.detalle}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-xl transition-transform duration-200 group-hover:translate-x-1.5"
                        style={{ color: C.blue }}
                      >
                        →
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 space-y-5 md:sticky md:top-24 self-start">
            <Reveal>
              <figure className="relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior de la ferretería: pasillos con pinturas, herramientas y materiales"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <figure className="relative overflow-hidden border-2 aspect-[4/3] hidden sm:block" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/pasillo-pinturas.webp`}
                  alt="Repisas de la ferretería con latas de pintura y accesorios"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Stock real del local, foto de su ficha
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Horario: el ferretero que abre domingo ───────────────── */}
      <section id="horario" className="scroll-mt-20 py-10 md:py-16" style={{ backgroundColor: C.blue }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-14">
          <h2
            className={`${display.className} text-3xl md:text-5xl font-extrabold uppercase leading-[0.95] tracking-tight`}
            style={{ color: '#F2EBDD' }}
          >
            También abre
            <br />
            los domingos
          </h2>
          <div className="flex-1" />
          <ul className="space-y-2">
            {HORARIO.map((h) => (
              <li
                key={h.days}
                className="flex items-baseline justify-between gap-8 border-b pb-2"
                style={{ borderColor: C.lineLight, color: '#F2EBDD' }}
              >
                <span className="font-semibold text-base md:text-lg">{h.days}</span>
                <span className={`${mono.className} text-sm md:text-base`}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reseñas + respuesta del dueño ────────────────────────── */}
      <section id="resenas" className="scroll-mt-20 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-14 mb-10">
            <div className={`${display.className} leading-none`}>
              <span className="block text-6xl md:text-8xl font-extrabold" style={{ color: C.blue }}>{BIZ.rating}</span>
              <div className="mt-3">
                <Stars value={4.9} color={C.blue} className="w-[18px] h-[18px]" />
              </div>
              <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google
              </p>
            </div>
            <blockquote className="max-w-md border-l-4 pl-5" style={{ borderColor: C.blue }}>
              <p className={`${display.className} text-xl md:text-2xl font-bold uppercase leading-tight`}>
                “Usted pida lo que necesita y lo traemos.”
              </p>
              <footer className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Respuesta del dueño en Google
              </footer>
            </blockquote>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <blockquote
                  className="h-full p-5 border-2 flex flex-col"
                  style={{ borderColor: C.ink, backgroundColor: '#FBF7EE' }}
                >
                  <p className="text-[15px] leading-relaxed flex-1">{r.text}</p>
                  <footer className="mt-4 pt-3 border-t" style={{ borderColor: C.line }}>
                    <p className="font-bold text-sm">{r.author}</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                      {r.meta}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ──────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-20 py-14 md:py-24" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14">
          <div style={{ color: '#F2EBDD' }}>
            <h2 className={`${display.className} text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] mb-8`}>
              En la esquina
              <br />
              de siempre
            </h2>
            <dl className="space-y-5">
              <div className="flex gap-4 items-baseline border-b pb-4" style={{ borderColor: C.lineLight }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: 'rgba(242,235,221,0.6)' }}>
                  Dirección
                </dt>
                <dd className="font-semibold">
                  {BIZ.address}, {BIZ.city},{' '}
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-2 ${FOCUS_LIGHT}`} style={{ color: '#8FB8E8' }}>
                    ver en Maps
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 items-baseline border-b pb-4" style={{ borderColor: C.lineLight }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: 'rgba(242,235,221,0.6)' }}>
                  WhatsApp
                </dt>
                <dd className="font-semibold">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-2 ${FOCUS_LIGHT}`} style={{ color: '#8FB8E8' }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 items-baseline border-b pb-4" style={{ borderColor: C.lineLight }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: 'rgba(242,235,221,0.6)' }}>
                  Facebook
                </dt>
                <dd className="font-semibold">
                  <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-2 ${FOCUS_LIGHT}`} style={{ color: '#8FB8E8' }}>
                    /ferreteriatresesquinas
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2.5 font-bold rounded-md px-6 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 ${FOCUS_LIGHT}`}
              style={{ backgroundColor: C.blue, color: '#F2EBDD' }}
            >
              Consulta stock por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <Reveal className="min-h-[320px]">
            <div className="h-full min-h-[320px] overflow-hidden border-2" style={{ borderColor: C.lineLight }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="py-8 pb-24" style={{ backgroundColor: '#0B1B2E' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full object-cover" aria-hidden="true" />
            <p className={`${display.className} font-bold uppercase text-lg`} style={{ color: '#F2EBDD' }}>
              {BIZ.name} · {BIZ.city}
            </p>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(242,235,221,0.62)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Datos,
            fotos, reseñas y rubros son reales de su ficha pública; los
            textos de apoyo son de muestra. ¿Lo hacemos realidad?
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp a Tres Esquinas" />
    </main>
  )
}
