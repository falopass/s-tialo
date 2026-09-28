import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const IMG = '/demos/otel-con-m-caba-as-del-cerro'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  noche: '#0C1230',
  noche2: '#141C4A',
  crema: '#F3EEDF',
  crema2: '#EAE2CC',
  ambar: '#F2A93B',
  tinta: '#12162B',
  humo: '#A9B0D4',
  humoC: '#575C74',
  lineaN: 'rgba(243,238,223,0.16)',
  lineaC: 'rgba(18,22,43,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'otel-con-m-caba-as-del-cerro',
  title: 'Cabañas del Cerro — hospedaje con vista a Talca',
  description:
    'Cabañas del Cerro (Otel con M) en el Cerro La Virgen, Talca: hospedaje a 150 m sobre la ciudad, camino a Pencahue. Reserva por WhatsApp.',
  image: `${IMG}/vista-ciudad.webp`,
})

const NAV_LINKS = [
  { label: 'La subida', href: '#subida' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const SUBIDA = [
  { km: '3,5 km', txt: 'del centro de Talca, por el Camino a Pencahue' },
  { km: 'km 2,5', txt: 'cartel y arco de entrada a mano derecha' },
  { km: '150 m', txt: 'sobre la ciudad: el cerro hace el resto' },
]

const CABANAS = [
  {
    src: `${IMG}/cabana-frente.webp`,
    alt: 'Frente de una cabaña blanca de Cabañas del Cerro',
    title: 'Cabañas independientes',
    txt: 'Cada una con su propio acceso, sin pasillos compartidos.',
  },
  {
    src: `${IMG}/cabanas-bosque.webp`,
    alt: 'Cabañas de Cabañas del Cerro entre árboles nativos',
    title: 'Entre vegetación nativa',
    txt: 'El recinto está rodeado de bosque y senderos del cerro.',
  },
  {
    src: `${IMG}/habitacion-vista.webp`,
    alt: 'Interior de habitación con ventana y vista a la ciudad de Talca',
    title: 'La vista desde adentro',
    txt: 'Ventanales que miran directo a Talca y al valle.',
  },
]

const PATIO = [
  { src: `${IMG}/sendero.webp`, alt: 'Sendero interno entre árboles de Cabañas del Cerro', cap: 'Senderos internos' },
  { src: `${IMG}/jardin.webp`, alt: 'Jardín con cactus y plantas en Cabañas del Cerro', cap: 'Jardines del cerro' },
  { src: `${IMG}/carreta.webp`, alt: 'Carreta pintada de rosa en el jardín de Cabañas del Cerro', cap: 'Rincones con historia' },
]

const LUNA = [0.12, 0.35, 0.5, 0.65, 0.88]

function LunaLlena({ frac, size = 34 }: { frac: number; size?: number }) {
  // Icono de fase lunar: círculo con sombra recortada según la fracción iluminada.
  const r = 16
  const x = r * (1 - frac * 2)
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <defs>
        <mask id={`lm${Math.round(frac * 100)}`}>
          <rect width="32" height="32" fill="black" />
          <circle cx="16" cy="16" r={r} fill="white" />
          <ellipse cx={16 + x} cy="16" rx={Math.abs(x) || 0.01} ry={r} fill="black" />
        </mask>
      </defs>
      <circle cx="16" cy="16" r={r} fill={C.ambar} mask={`url(#lm${Math.round(frac * 100)})`} />
      <circle cx="16" cy="16" r={r} fill="none" stroke={C.humo} strokeOpacity="0.4" strokeWidth="1" />
    </svg>
  )
}

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

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.noche, color: C.crema }}>
      <BlitzNav
        name="Otel con M"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(12,18,48,0.94)', ink: C.crema, line: C.lineaN, btnBg: C.ambar, btnInk: C.noche }}
      />

      {/* ── Hero: la ciudad a los pies ── */}
      <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- foto real optimizada en public/ */}
        <img
          src={`${IMG}/vista-ciudad.webp`}
          alt="Vista de la ciudad de Talca desde el Cerro La Virgen, donde está Cabañas del Cerro"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(12,18,48,0.55) 0%, rgba(12,18,48,0.25) 40%, rgba(12,18,48,0.95) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 pt-36 w-full">
          <Reveal>
            <p
              className={`${mono.className} inline-block text-[11px] md:text-xs tracking-[0.18em] uppercase px-3.5 py-2 mb-6 border`}
              style={{ borderColor: C.ambar, color: C.ambar, backgroundColor: 'rgba(12,18,48,0.6)' }}
            >
              Ruta A-3 · km 2,5 · Camino a Pencahue
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={`${display.className} uppercase leading-[0.95] tracking-wide text-[clamp(3rem,11vw,6.5rem)]`}
              style={{ color: C.crema }}
            >
              Cabañas
              <br />
              <span style={{ color: C.ambar }}>del Cerro</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(243,238,223,0.92)' }}>
              Hospedaje a 150 metros sobre Talca: desde aquí la ciudad entera cabe en una ventana.
              A 3,5 km del centro, entre vegetación nativa del Cerro La Virgen.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-5 flex items-center gap-2.5" style={{ color: C.ambar }}>
              <Stars value={BIZ.rating} color={C.ambar} />
              <span className={`${mono.className} text-sm`}>{BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google</span>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold px-7 py-3.5 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.ambar, color: C.noche }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#llegar"
                className="text-sm font-bold px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: C.crema, color: C.crema }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Datos de ruta ── */}
      <section className="border-y" style={{ borderColor: C.lineaN, backgroundColor: C.noche2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-3">
          {SUBIDA.map((s, i) => (
            <div
              key={s.km}
              className="px-4 md:px-8 py-6 md:py-8"
              style={i > 0 ? { borderLeft: `1px solid ${C.lineaN}` } : undefined}
            >
              <p className={`${display.className} uppercase text-xl md:text-3xl tracking-wide`} style={{ color: C.ambar }}>
                {s.km}
              </p>
              <p className={`${mono.className} mt-2 text-[10px] md:text-xs leading-snug`} style={{ color: C.humo }}>
                {s.txt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── La subida ── */}
      <section id="subida" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-4`} style={{ color: C.ambar }}>
                La subida
              </p>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.02] tracking-wide mb-5`}>
                Diez minutos del centro y otro mundo arriba
              </h2>
              <p className="text-[15px] md:text-base leading-[1.75]" style={{ color: 'rgba(243,238,223,0.85)' }}>
                El camino sale de la ciudad por la ruta a Pencahue y empieza a trepar. Antes del km 2,5
                aparece el arco de entrada: adentro, el ruido de Talca se queda abajo y lo que queda es
                cerro, árboles y vista abierta al valle.
              </p>
              <p className={`${mono.className} mt-6 text-xs leading-relaxed`} style={{ color: C.humo }}>
                Cerro La Virgen — sector rural inmediato a Talca, Región del Maule.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element -- foto real optimizada en public/ */}
              <img
                src={`${IMG}/entrada.webp`}
                alt="Arco de entrada de Cabañas del Cerro en el camino a Pencahue"
                className="w-full aspect-[4/3] object-cover"
              />
              <p
                className={`${mono.className} absolute bottom-3 left-3 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1.5`}
                style={{ backgroundColor: 'rgba(12,18,48,0.85)', color: C.ambar }}
              >
                Arco de entrada · km 2,5
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cabañas (sección crema) ── */}
      <section id="cabanas" style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-4`} style={{ color: C.humoC }}>
              Las cabañas
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.02] tracking-wide max-w-2xl mb-4`}>
              Tu propia cabaña, sin pasillos
            </h2>
            <p className="text-[15px] md:text-base leading-[1.75] max-w-2xl mb-10" style={{ color: C.humoC }}>
              Unidades separadas entre el bosque del cerro. Lo que se ve en las fotos es lo que hay:
              construcción sencilla, entorno verde y la ciudad debajo.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {CABANAS.map((c, i) => (
              <Reveal key={c.src} delay={i * 90}>
                <article className="border" style={{ borderColor: C.lineaC, backgroundColor: '#FBF7EA' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- foto real optimizada en public/ */}
                  <img src={c.src} alt={c.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  <div className="p-5">
                    <h3 className={`${display.className} uppercase text-lg tracking-wide mb-1.5`}>{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.humoC }}>{c.txt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El patio ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-4`} style={{ color: C.ambar }}>
            El recinto
          </p>
          <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.02] tracking-wide mb-10`}>
            Cerro adentro
          </h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {PATIO.map((p, i) => (
            <Reveal key={p.src} delay={i * 90}>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element -- foto real optimizada en public/ */}
                <img src={p.src} alt={p.alt} className="w-full aspect-[3/4] md:aspect-[4/3] object-cover" loading="lazy" />
                <figcaption className={`${mono.className} mt-2.5 text-[10px] md:text-xs tracking-[0.12em] uppercase`} style={{ color: C.humo }}>
                  {p.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Luna y vista ── */}
      <section className="border-y" style={{ borderColor: C.lineaN, backgroundColor: C.noche2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <div className="flex items-end justify-center gap-3 md:gap-6 mb-6">
              {LUNA.map((f, i) => (
                <LunaLlena key={i} frac={f} size={i === 2 ? 44 : 30} />
              ))}
            </div>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.05] tracking-wide`}>
              A esta altura, la luna<br />se ve <span style={{ color: C.ambar }}>completa</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[15px] md:text-base leading-[1.75]" style={{ color: 'rgba(243,238,223,0.85)' }}>
              Sin edificios ni luminarias encima: el amanecer y las fases lunares se ven desde la terraza.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-center">
            <Reveal>
              <div>
                <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-4`} style={{ color: C.humoC }}>
                  Lo que dicen en Google
                </p>
                <p className={`${display.className} text-6xl md:text-7xl leading-none`}>{BIZ.ratingLabel}</p>
                <div className="mt-3 flex items-center gap-2" style={{ color: C.ambar }}>
                  <Stars value={BIZ.rating} color={C.ambar} className="w-5 h-5" />
                </div>
                <p className={`${mono.className} mt-3 text-xs`} style={{ color: C.humoC }}>
                  {BIZ.reviews} reseñas publicadas
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="border-l-4 pl-6 md:pl-8" style={{ borderColor: C.ambar }}>
                <p className={`${display.className} text-xl md:text-3xl leading-snug tracking-wide`}>
                  “Excelente atención, amable y atento, buena vista a nuestra ciudad, cómodas cabañas
                  y muy relajado.”
                </p>
                <footer className={`${mono.className} mt-4 text-xs`} style={{ color: C.humoC }}>
                  Sebastián Baladrón López — reseña real de Google Maps
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] tracking-[0.2em] uppercase mb-4`} style={{ color: C.ambar }}>
            Cómo llegar
          </p>
          <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.02] tracking-wide mb-8`}>
            Sube por Pencahue<br />y gira en el arco
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 items-start">
          <Reveal delay={80}>
            <div className="border overflow-hidden" style={{ borderColor: C.lineaN }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full aspect-[4/3] block"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <dl className="space-y-5">
                <div>
                  <dt className={`${mono.className} text-[10px] tracking-[0.18em] uppercase mb-1.5`} style={{ color: C.humo }}>Dirección</dt>
                  <dd className="text-[15px] leading-relaxed">{BIZ.address}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] tracking-[0.18em] uppercase mb-1.5`} style={{ color: C.humo }}>Teléfono</dt>
                  <dd>
                    <a href={`tel:${BIZ.phoneTel}`} className="text-[15px] underline underline-offset-4 tap-44" style={{ color: C.crema }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold px-7 py-3.5 transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.ambar, color: C.noche }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44"
                  style={{ borderColor: C.crema, color: C.crema }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.lineaN, backgroundColor: '#090E26' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-lg tracking-wide`}>Otel con M — Cabañas del Cerro</p>
          <p className={`${mono.className} mt-2 text-[11px] leading-relaxed`} style={{ color: C.humo }}>
            {BIZ.address} · {BIZ.comuna}, {BIZ.region}
          </p>
          <p className="mt-4 text-[11px] leading-relaxed max-w-2xl" style={{ color: 'rgba(169,176,212,0.65)' }}>
            Textos descriptivos son de muestra; el nombre, la dirección, el teléfono, el promedio y
            el número de reseñas son los reales de su ficha de Google.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
