import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  paper: '#F3ECDF',
  paper2: '#EAE0CB',
  bone: '#FBF7EE',
  ink: '#221C15',
  muted: '#746A5B',
  red: '#C0222B',
  redDeep: '#8E151D',
  line: 'rgba(34,28,21,0.16)',
}

// Servicios tal como los lista el adhesivo de la camioneta
const SERVICIOS = [
  'Instalación y reparación de calefón y calderas',
  'Instalación de paneles solares',
  'Instalación y mantención de aire acondicionado',
  'Destape de ductos de alcantarillado y desagüe',
  'Eliminación de filtración de agua y gas',
  'Gasfitería en general',
  'Obras menores en construcción',
]

const TRABAJOS = [
  {
    img: `${IMG}/filtracion.webp`,
    alt: 'Detección de filtración de agua en vereda de Talca',
    t: 'Filtración en vereda',
    w: 533,
    h: 960,
  },
  {
    img: `${IMG}/banera.webp`,
    alt: 'Reparación de bañera con perforación de muro',
    t: 'Baño en obra',
    w: 960,
    h: 539,
  },
  {
    img: `${IMG}/destape.webp`,
    alt: 'Destape de alcantarillado con máquina en cocina',
    t: 'Destape de ducto',
    w: 539,
    h: 960,
  },
  {
    img: `${IMG}/llave.webp`,
    alt: 'Llave de paso cromada ajustada con herramienta',
    t: 'Llaves y conexiones',
    w: 750,
    h: 750,
  },
  {
    img: `${IMG}/herramientas.webp`,
    alt: 'Cajas de herramientas y máquina destapadora en terreno',
    t: 'El equipo en terreno',
    w: 539,
    h: 960,
  },
]

const RESENAS = [
  {
    q: 'Excelente servicio. Me dio soluciones alternativas para mi problema y me ayudó con la compra de materiales. Lo recomiendo totalmente.',
    n: 'Valentina Saldaña',
    s: 5,
  },
  {
    q: 'Fue un buen trabajo.',
    n: 'Manuel Cuevas',
    s: 4,
  },
]

export const metadata = demoMetadata({
  slug: 'gasfiteria-jaramillo',
  title: 'Gasfitería Jaramillo · gasfitería a domicilio 24 hrs en Talca',
  description:
    'Gasfitería a domicilio en Talca: calefón y calderas, paneles solares, filtraciones, destapes y obras menores. Autorizado SEC. WhatsApp +56 9 7832 3485.',
  image: `${IMG}/furgon.webp`,
})

function Eyebrow({ children, color = C.red }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs font-medium uppercase tracking-[0.26em]`}
      style={{ color }}
    >
      {children}
    </p>
  )
}

function Tick() {
  return (
    <span
      aria-hidden="true"
      className="mt-1 shrink-0 w-5 h-5 rounded-[4px] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(251,247,238,0.14)', border: '1px solid rgba(251,247,238,0.35)' }}
    >
      <svg viewBox="0 0 12 10" className="w-3 h-3" fill="none" aria-hidden="true">
        <path d="M1 5.5 4.4 8.5 11 1.5" stroke={C.bone} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export default function JaramilloDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} tracking-tight`}>
            Gasfitería <span style={{ color: C.red }}>Jaramillo</span>
          </span>
        }
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Terreno', href: '#terreno' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.red, btnInk: '#fff' }}
        fontClass={display.className}
      />

      {/* ── Hero: rótulo + camioneta ── */}
      <section id="inicio" className="pt-[76px] md:pt-[96px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-14">
          <Eyebrow>Gasfitería a domicilio · Talca, Maule</Eyebrow>
          <h1
            className={`${display.className} text-[38px] md:text-[68px] leading-[1.02] mt-4 max-w-3xl tracking-tight`}
          >
            La camioneta roja que llega cuando revienta la cañería.
          </h1>
          <p className="mt-5 text-base md:text-lg max-w-xl leading-relaxed" style={{ color: C.muted }}>
            Gasfitería a domicilio en Talca, con técnico autorizado SEC. Escribe por WhatsApp y coordinamos la visita.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-6 rounded-full transition-transform active:scale-95"
              style={{ backgroundColor: C.red, color: '#fff', height: 48 }}
            >
              Pedir visita por WhatsApp
            </a>
            <a
              href={`tel:${BIZ.phoneTel}`}
              className={`${mono.className} inline-flex items-center justify-center text-sm font-medium px-5 rounded-full border transition-colors active:scale-95`}
              style={{ borderColor: C.line, color: C.ink, height: 48 }}
            >
              {BIZ.phoneDisplay}
            </a>
          </div>
        </div>
        <Reveal>
          <div className="relative">
            <Image
              src={`${IMG}/furgon.webp`}
              alt="Camioneta roja de Gasfitería Talca Jaramillo con el listado de servicios y el sello autorizado SEC"
              width={720}
              height={405}
              sizes="100vw"
              className="w-full h-auto object-cover"
              priority
            />
            <div
              className="absolute bottom-3 left-5 md:left-8 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(34,28,21,0.85)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7ED957' }} aria-hidden="true" />
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.bone }}>
                Autorizado SEC · a domicilio
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── El adhesivo de la camioneta ── */}
      <section id="servicios" style={{ backgroundColor: C.red, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-14">
            <Reveal>
              <Eyebrow color="#F2B8BC">Tal como lo lista la camioneta</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.04] mt-3`}>
                Todo lo que hace esta gasfitería
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: '#F0D7D5' }}>
                Estos son los servicios reales que el vehículo anuncia por Talca. Si tu problema está en la lista,
                hay solución en el día.
              </p>
            </Reveal>
            <div>
              {SERVICIOS.map((s, i) => (
                <Reveal key={s} delay={i * 60}>
                  <div
                    className="flex items-start gap-3.5 py-4 border-b last:border-b-0"
                    style={{ borderColor: 'rgba(251,247,238,0.25)' }}
                  >
                    <Tick />
                    <p className={`${display.className} text-[15px] md:text-lg leading-snug`}>{s}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Datos rápidos ── */}
      <section style={{ backgroundColor: C.ink, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              ['24 hrs', 'atención todos los días'],
              ['SEC', 'técnico autorizado'],
              ['Talca', 'visitas a domicilio'],
              ['WhatsApp', 'respuesta directa'],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 70}>
                <div
                  className="py-6 md:py-8 pr-4 border-l first:border-l-0 pl-4 first:pl-0 md:pl-6 md:first:pl-0"
                  style={{ borderColor: 'rgba(251,247,238,0.14)' }}
                >
                  <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: '#F0C040' }}>
                    {k}
                  </p>
                  <p className={`${mono.className} mt-1.5 text-[11px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(251,247,238,0.65)' }}>
                    {v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── En terreno ── */}
      <section id="terreno" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>En terreno</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.04] mt-3 max-w-2xl`}>
              Trabajos reales en casas de Talca
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            <Reveal className="col-span-1 md:col-span-3">
              <figure>
                <Image
                  src={TRABAJOS[0].img}
                  alt={TRABAJOS[0].alt}
                  width={TRABAJOS[0].w}
                  height={TRABAJOS[0].h}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                  {TRABAJOS[0].t}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-2 md:col-span-6 md:mt-14" delay={80}>
              <figure>
                <Image
                  src={TRABAJOS[1].img}
                  alt={TRABAJOS[1].alt}
                  width={TRABAJOS[1].w}
                  height={TRABAJOS[1].h}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                  {TRABAJOS[1].t}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-1 md:col-span-3 md:mt-28" delay={140}>
              <figure>
                <Image
                  src={TRABAJOS[2].img}
                  alt={TRABAJOS[2].alt}
                  width={TRABAJOS[2].w}
                  height={TRABAJOS[2].h}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                  {TRABAJOS[2].t}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-1 md:col-span-4 md:-mt-6" delay={60}>
              <figure>
                <Image
                  src={TRABAJOS[3].img}
                  alt={TRABAJOS[3].alt}
                  width={TRABAJOS[3].w}
                  height={TRABAJOS[3].h}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                  {TRABAJOS[3].t}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-1 md:col-span-3" delay={110}>
              <figure>
                <Image
                  src={TRABAJOS[4].img}
                  alt={TRABAJOS[4].alt}
                  width={TRABAJOS[4].w}
                  height={TRABAJOS[4].h}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                  {TRABAJOS[4].t}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-2 md:col-span-5 flex items-end" delay={160}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm md:pb-6" style={{ color: C.muted }}>
                Fotos reales publicadas por el negocio en Google Maps: detección de filtraciones,
                destapes con máquina, baños en obra y la maleta de herramientas que llega a tu casa.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section style={{ backgroundColor: C.paper2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-14">
            <Reveal>
              <Eyebrow>Lo que dicen en Google</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.05] mt-3`}>
                Clientes que ya lo llamaron
              </h2>
              <a
                href={BIZ.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-4 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4`}
                style={{ color: C.red }}
              >
                Ver reseñas en Google
              </a>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.n} delay={i * 90}>
                  <blockquote
                    className="rounded-xl p-5 md:p-6"
                    style={{ backgroundColor: C.bone, border: `1px solid ${C.line}` }}
                  >
                    <Stars value={r.s} color={C.red} />
                    <p className="mt-3 text-[15px] md:text-base leading-relaxed">&ldquo;{r.q}&rdquo;</p>
                    <footer className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      {r.n} · reseña en Google
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Dónde atiende</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.02] mt-3`}>
              Talca y alrededores, a domicilio
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-md leading-relaxed" style={{ color: C.muted }}>
              Sale desde el norte de Talca y llega a toda la comuna. Coordinas la visita
              por WhatsApp o llamada directa.
            </p>
            <dl className="mt-8 space-y-4">
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Dirección
                </dt>
                <dd className="text-sm text-right font-medium">
                  {BIZ.address}
                  <br />
                  <span style={{ color: C.muted }}>{BIZ.city}</span>
                </dd>
              </div>
              {HORARIO.map((h) => (
                <div key={h.d} className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {h.d}
                  </dt>
                  <dd className={`${mono.className} text-sm font-medium`} style={{ color: C.red }}>
                    {h.h}
                  </dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  WhatsApp
                </dt>
                <dd className={`${mono.className} text-sm`}>{BIZ.phoneDisplay}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full min-h-[300px] rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.red, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
          <div className="flex-1">
            <Eyebrow color="#F2B8BC">Urgencia o mantención</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-6xl leading-[0.98] mt-3`}>
              Se reventó una cañería o el calefón no enciende
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold text-base px-8 rounded-full transition-transform active:scale-95 shrink-0"
            style={{ backgroundColor: C.ink, color: C.bone, height: 48 }}
          >
            WhatsApp {BIZ.phoneDisplay}
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className={`${display.className} text-lg`} style={{ color: C.bone }}>
              Gasfitería Jaramillo
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(251,247,238,0.6)' }}>
              {BIZ.phoneDisplay} · Autorizado SEC
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-xs" style={{ color: 'rgba(251,247,238,0.6)' }}>
              Gasfitería a domicilio · {BIZ.address}, {BIZ.city}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
              style={{ color: 'rgba(251,247,238,0.6)' }}
            >
              Google Maps
            </a>
          </div>
          <p className="text-[11px] leading-relaxed pt-2 border-t mt-2" style={{ color: 'rgba(251,247,238,0.55)', borderColor: 'rgba(251,247,238,0.14)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              Sitiazo
            </a>{' '}
            para {BIZ.name} · así se vería tu sitio. Fotos reales publicadas en Google Maps;
            textos y reseñas de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
