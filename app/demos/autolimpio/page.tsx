import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  carbon: '#0D0F0B',
  panel: '#161A12',
  panelEdge: 'rgba(184,230,46,0.28)',
  lima: '#B8E62E',
  limaInk: '#141A07',
  paper: '#EFF2E4',
  muted: '#9AA38C',
  line: 'rgba(239,242,228,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'autolimpio',
  title: 'Autolimpio — Lavado y detailing de autos en Talca, 23 años nos avalan',
  description:
    'Lavados simples, medios y detallados: motor, chasis, tapiz, descontaminado de oxidados y sellado negro. 1 Oriente 705, Talca. 4,6★ en Google. Consultas por WhatsApp.',
  image: `${IMG}/hero-capo.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Evidencia', href: '#evidencia' },
  { label: 'Horario', href: '#horario' },
]

const ORDEN_LAVADOS = [
  { codigo: 'L-01', nombre: 'Lavado simple', detalle: 'Exterior completo, entrega en el día' },
  { codigo: 'L-02', nombre: 'Lavado medio', detalle: 'Exterior + interior aspirado y tablero' },
  { codigo: 'L-03', nombre: 'Lavado detallado', detalle: 'El tratamiento completo, por dentro y por fuera' },
]

const ORDEN_DETALLE = [
  { codigo: 'D-01', nombre: 'Lavado de motor', detalle: 'Compartimiento limpio sin riesgos' },
  { codigo: 'D-02', nombre: 'Lavado de chasis', detalle: 'Descontaminado de chasis oxidados' },
  { codigo: 'D-03', nombre: 'Lavado de tapiz', detalle: 'Asientos y tapiz profundo' },
  { codigo: 'D-04', nombre: 'Sellado negro', detalle: 'Protección y terminación' },
]

const EVIDENCIA = [
  { src: 'motor', alt: 'Motor de auto recién lavado en Autolimpio', pie: 'Motor, después del lavado' },
  { src: 'asientos', alt: 'Asientos de tela limpios tras el lavado de tapiz', pie: 'Tapiz, después del lavado' },
  { src: 'llantas', alt: 'Llanta y neumático limpios en detalle', pie: 'Llantas y neumáticos' },
  { src: 'vidrio', alt: 'Parabrisas limpio de un auto atendido en el taller', pie: 'Vidrios sin marcas' },
]

const RESENAS = [
  {
    nombre: 'Cristian Núñez Rojas',
    texto: 'Muy bueno, lo recomiendo. Responsable y se toman su tiempo para hacer el trabajo.',
  },
  {
    nombre: 'Cesar Hernandez',
    texto: 'Muy buena la atención, 100% recomendable.',
  },
  {
    nombre: 'Jcarlos',
    texto: 'Buena atención y disposición. Hacen lavados profundos.',
  },
]

function MarcaSeccion({ n, titulo }: { n: string; titulo: string }) {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-10">
      <span
        className={`${mono.className} text-[11px] md:text-xs tracking-[0.18em] uppercase px-2.5 py-1.5`}
        style={{ backgroundColor: C.lima, color: C.limaInk }}
      >
        {n}
      </span>
      <h2
        className={`${display.className} uppercase text-[clamp(1.6rem,5vw,3rem)] leading-none`}
        style={{ color: C.paper }}
      >
        {titulo}
      </h2>
      <span className="h-px flex-1" style={{ backgroundColor: C.line }} aria-hidden="true" />
    </div>
  )
}

function LineaOrden({ codigo, nombre, detalle }: { codigo: string; nombre: string; detalle: string }) {
  return (
    <li
      className="flex items-center gap-4 py-4 px-4 md:px-6"
      style={{ borderBottom: `1px dashed ${C.line}` }}
    >
      <span className={`${mono.className} text-xs md:text-sm shrink-0 w-12`} style={{ color: C.lima }}>
        {codigo}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm md:text-base font-semibold" style={{ color: C.paper }}>
          {nombre}
        </span>
        <span className="block text-xs md:text-sm mt-0.5 truncate md:whitespace-normal" style={{ color: C.muted }}>
          {detalle}
        </span>
      </span>
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <path d="M4 12l5 5 11-11" stroke={C.lima} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </li>
  )
}

export default function Page() {
  return (
    <main className={body.className} style={{ backgroundColor: C.carbon, color: C.paper }}>
      <BlitzNav
        name={<span className={display.className}>Autolimpio</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.carbon, ink: C.paper, line: C.line, btnBg: C.lima, btnInk: C.limaInk }}
      />

      {/* Hero: la orden de trabajo */}
      <section id="inicio" className="relative pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <Reveal className="md:col-span-7">
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.22em] uppercase`} style={{ color: C.lima }}>
              Lavado y detailing · Talca · desde hace {BIZ.anos} años
            </p>
            <h1
              className={`${display.className} uppercase text-[clamp(2.5rem,8.5vw,5.5rem)] leading-[0.95] mt-4`}
              style={{ color: C.paper }}
            >
              {BIZ.anos} años dejando
              <br />
              autos <span style={{ color: C.lima }}>como nuevos</span>
            </h1>
            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              Lavados simples, medios y detallados — motor, chasis, tapiz, descontaminado de oxidados
              y sellado negro. En 1 Oriente 705, Talca. «{BIZ.anos} años nos avalan», dicen ellos mismos.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-sm active:scale-95 transition-transform"
                style={{ backgroundColor: C.lima, color: C.limaInk }}
              >
                Agendar lavado
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-sm active:scale-95 transition-transform"
                style={{ border: `1px solid ${C.line}`, color: C.paper }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="md:col-span-5">
            <figure className="relative">
              <div
                className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: C.lima }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: C.lima }}
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden" style={{ border: `1px solid ${C.panelEdge}` }}>
                <Image
                  src={`${IMG}/hero-capo.webp`}
                  alt="Auto blanco con el capó abierto recibiendo detailing en Autolimpio"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2.5 flex justify-between text-[10px] md:text-xs tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                <span style={{ color: C.lima }}>EV-01</span>
                <span>Evidencia de taller · trabajo real</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Ficha técnica */}
        <Reveal delay={200} className="mt-12 md:mt-16">
          <dl
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4"
            style={{ border: `1px solid ${C.line}` }}
          >
            {[
              { k: 'Rating Google', v: `${BIZ.rating}★` },
              { k: 'Reseñas', v: String(BIZ.reviews) },
              { k: 'Años en el rubro', v: String(BIZ.anos) },
              { k: 'Horario', v: 'L–V 9–18:30' },
            ].map((d, i) => (
              <div
                key={d.k}
                className="px-4 md:px-6 py-4 md:py-5"
                style={{ borderLeft: i > 0 ? `1px solid ${C.line}` : undefined }}
              >
                <dt className={`${mono.className} text-[10px] md:text-xs tracking-[0.16em] uppercase`} style={{ color: C.muted }}>
                  {d.k}
                </dt>
                <dd className={`${display.className} text-2xl md:text-3xl mt-1`} style={{ color: C.lima }}>
                  {d.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Servicios: la orden de trabajo */}
      <section id="servicios" className="px-5 md:px-8 py-14 md:py-20 scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto">
          <MarcaSeccion n="OT-01" titulo="La orden de trabajo" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <div style={{ border: `1px solid ${C.panelEdge}` }}>
                <p
                  className={`${mono.className} text-[11px] md:text-xs tracking-[0.2em] uppercase px-4 md:px-6 py-3`}
                  style={{ backgroundColor: 'rgba(184,230,46,0.08)', color: C.lima, borderBottom: `1px solid ${C.panelEdge}` }}
                >
                  Lavados
                </p>
                <ul>
                  {ORDEN_LAVADOS.map((o) => (
                    <LineaOrden key={o.codigo} {...o} />
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ border: `1px solid ${C.panelEdge}` }}>
                <p
                  className={`${mono.className} text-[11px] md:text-xs tracking-[0.2em] uppercase px-4 md:px-6 py-3`}
                  style={{ backgroundColor: 'rgba(184,230,46,0.08)', color: C.lima, borderBottom: `1px solid ${C.panelEdge}` }}
                >
                  Trabajos de detalle
                </p>
                <ul>
                  {ORDEN_DETALLE.map((o) => (
                    <LineaOrden key={o.codigo} {...o} />
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="mt-6 text-xs md:text-sm" style={{ color: C.muted }}>
              Precios según vehículo y estado — se cotiza por WhatsApp. También pueden recibir tu auto
              antes de que entres a trabajar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Evidencia */}
      <section id="evidencia" className="px-5 md:px-8 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <MarcaSeccion n="EV-02" titulo="Evidencia de taller" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {EVIDENCIA.map((f, i) => (
              <Reveal key={f.src} delay={i * 70}>
                <figure>
                  <div className="relative aspect-square overflow-hidden" style={{ border: `1px solid ${C.panelEdge}` }}>
                    <Image
                      src={`${IMG}/${f.src}.webp`}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] md:text-xs uppercase tracking-[0.1em]`} style={{ color: C.muted }}>
                    {f.pie}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          {/* Antes: así llega un chasis oxidado */}
          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden" style={{ border: `1px solid ${C.panelEdge}` }}>
                  <Image
                    src={`${IMG}/chasis-antes.webp`}
                    alt="Chasis oxidado de un auto antes del descontaminado en Autolimpio"
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] md:text-xs uppercase tracking-[0.1em]`} style={{ color: C.muted }}>
                  Antes · chasis oxidado a descontaminar
                </figcaption>
              </figure>
              <div>
                <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-tight`} style={{ color: C.paper }}>
                  Así llegan,
                  <br />
                  <span style={{ color: C.lima }}>no así se van</span>
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  El descontaminado de chasis oxidados es de los trabajos que más piden: sacan el óxido
                  superficial y dejan el chasis sellado en negro. Foto real publicada por el taller.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-sm active:scale-95 transition-transform"
                  style={{ backgroundColor: C.lima, color: C.limaInk }}
                >
                  Cotizar descontaminado
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bitácora + reseñas */}
      <section className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <Reveal className="md:col-span-5">
            <MarcaSeccion n="BC-03" titulo="Bitácora" />
            <div className="relative aspect-square overflow-hidden" style={{ border: `1px solid ${C.panelEdge}` }}>
              <Image
                src={`${IMG}/bitacora.webp`}
                alt="Bitácora de mantenciones que Autolimpio publica en su Instagram"
                fill
                sizes="(max-width: 768px) 90vw, 38vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <p className="text-sm md:text-base leading-relaxed mt-2 md:mt-16" style={{ color: C.muted }}>
                Llevan registro de lo que le hacen a cada auto: en su Instagram publican la
                <strong style={{ color: C.paper }}> bitácora de mantenciones</strong> con kilometraje,
                repuestos y fecha — para que el cliente lleve la cuenta de su vehículo.
              </p>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-4 inline-block text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.lima }}
              >
                {BIZ.instagramHandle} en Instagram
              </a>
            </Reveal>
            <div className="mt-8 space-y-6">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={120 + i * 70}>
                  <blockquote className="pl-4 border-l-2" style={{ borderColor: C.lima }}>
                    <Stars value={5} color={C.lima} className="w-3.5 h-3.5" />
                    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.paper }}>
                      “{r.texto}”
                    </p>
                    <footer className={`${mono.className} mt-2 text-[10px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      — {r.nombre}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
              <Reveal delay={320}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.lima }}
                >
                  {BIZ.rating}★ · {BIZ.reviews} reseñas en Google
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Horario + mapa */}
      <section id="horario" className="px-5 md:px-8 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <MarcaSeccion n="UB-04" titulo="Dónde y cuándo" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Reveal>
              <ul className="divide-y" style={{ borderTop: `1px solid ${C.line}` }}>
                {HORARIO.map((h) => (
                  <li key={h.dias} className="flex justify-between items-baseline gap-4 py-4" style={{ borderColor: C.line }}>
                    <span className="text-sm md:text-base font-semibold" style={{ color: C.paper }}>
                      {h.dias}
                    </span>
                    <span className={`${mono.className} text-xs md:text-sm`} style={{ color: C.lima }}>
                      {h.horas}
                    </span>
                  </li>
                ))}
                <li className="flex justify-between items-baseline gap-4 py-4" style={{ borderColor: C.line }}>
                  <span className="text-sm md:text-base font-semibold" style={{ color: C.paper }}>
                    Dirección
                  </span>
                  <span className={`${mono.className} text-xs md:text-sm text-right`} style={{ color: C.muted }}>
                    {BIZ.address}, {BIZ.city}
                  </span>
                </li>
                <li className="flex justify-between items-baseline gap-4 py-4" style={{ borderColor: C.line }}>
                  <span className="text-sm md:text-base font-semibold" style={{ color: C.paper }}>
                    Teléfono
                  </span>
                  <span className={`${mono.className} text-xs md:text-sm`} style={{ color: C.muted }}>
                    {BIZ.phoneDisplay}
                  </span>
                </li>
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base font-bold rounded-sm active:scale-95 transition-transform"
                style={{ backgroundColor: C.lima, color: C.limaInk }}
              >
                Escribir al {BIZ.whatsappDisplay}
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-[300px] md:h-full md:min-h-[380px]" style={{ border: `1px solid ${C.panelEdge}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa: Autolimpio, 1 Oriente 705, Talca"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Colofón */}
      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: '#070805' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-sm leading-none`} style={{ color: C.paper }}>
                {BIZ.marca}
              </p>
              <p className={`${mono.className} mt-1 text-[10px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                1 Oriente 705 · Talca · {BIZ.rating}★
              </p>
            </div>
          </div>
          <p className="text-[11px] leading-snug" style={{ color: 'rgba(239,242,228,0.55)' }}>
            Mockup de muestra realizado por Sitiazo — sitios web para pymes desde $79.990.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
