import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_FECHAS, MAPS_EMBED, IMG, LO_QUE_SE_VE } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Identidad desde las fotos: el azul profundo del Lago Colbún, la madera
// caliente de las cabañas en pilotes y el verde del bosque de Vilches.
// El motivo es la línea de agua: ondas suaves dividiendo las secciones.
const C = {
  lago: '#0E3446',
  lagoOsc: '#092230',
  madera: '#A9713F',
  arena: '#F1E9DA',
  papel: '#F8F4EA',
  tinta: '#16303C',
  muda: 'rgba(22,48,60,0.72)',
  linea: 'rgba(22,48,60,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-cerro-colorado',
  title: 'Cabañas Cerro Colorado — A la orilla del Lago Colbún | Sitiazo.cl',
  description:
    'Cabañas de montaña en Ruta 115, a orillas del Lago Colbún, Vilches. 4,6 estrellas en 289 reseñas. Reservas por WhatsApp.',
  image: `${IMG}/muelle.webp`,
})

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'Cómo llegar', href: '#llegar' },
  { label: 'Reservar', href: '#reservar' },
]

// Línea de agua: ola SVG fina que divide secciones.
function Ola({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 1440 26" preserveAspectRatio="none" className="block w-full h-[20px] md:h-[26px]" aria-hidden="true">
      <path
        d="M0 13 C 120 3, 240 3, 360 13 S 600 23, 720 13 S 960 3, 1080 13 S 1320 23, 1440 13"
        fill="none"
        stroke={fill}
        strokeWidth="2"
      />
    </svg>
  )
}

function Kicker({ children, color = C.madera }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] font-semibold`} style={{ color }}>
      {children}
    </p>
  )
}

export default function CabanasCerroColoradoPage() {
  return (
    <main id="inicio" className={`${body.className} min-h-screen`} style={{ backgroundColor: C.arena, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className}>Cabañas Cerro Colorado</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{ over: 'dark', bar: 'rgba(241,233,218,0.94)', ink: C.tinta, line: C.linea, btnBg: C.lago, btnInk: '#fff' }}
      />

      {/* ── HERO: el pabellón sobre el lago ── */}
      <section className="relative h-[92svh] min-h-[540px] overflow-hidden">
        <img
          src={`${IMG}/muelle.webp`}
          alt="Pabellón de madera de Cabañas Cerro Colorado sobre la orilla del Lago Colbún, con cordillera al fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(9,34,48,0.42) 0%, rgba(9,34,48,0.05) 45%, rgba(9,34,48,0.72) 100%)' }}
        />
        <div className="relative h-full max-w-6xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12 md:pb-16">
          <Reveal>
            <Kicker color="#F4D9B8">Vilches · Lago Colbún · Maule</Kicker>
            <h1 className={`${display.className} mt-3 text-5xl md:text-8xl leading-[0.95] text-white max-w-3xl`}>
              Dormir a la orilla del <em>lago</em>
            </h1>
            <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Cabañas de madera en pilotes a pasos de la orilla del Lago Colbún, camino a Vilches,
              San Clemente.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK_FECHAS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-7 rounded-full text-sm font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: C.arena, color: C.tinta }}
              >
                Consultar fechas
              </a>
              <a
                href="#cabanas"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold border"
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
              >
                Ver las cabañas
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha rápida ── */}
      <section style={{ backgroundColor: C.lago }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          {[
            { k: 'Rating', v: `${BIZ.rating} ★`, s: `${BIZ.reviews} reseñas` },
            { k: 'Check-in', v: BIZ.checkin, s: 'hora de entrada' },
            { k: 'Check-out', v: BIZ.checkout, s: 'hora de salida' },
            { k: 'Ruta', v: 'Ruta 115', s: 'orilla del lago' },
          ].map((d) => (
            <div key={d.k}>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                {d.k}
              </p>
              <p className={`${display.className} mt-1 text-2xl md:text-3xl text-white`}>{d.v}</p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{d.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Las cabañas (fotos reales de la ficha) ── */}
      <section id="cabanas" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker>El lugar</Kicker>
            <h2 className={`${display.className} mt-3 text-4xl md:text-6xl leading-tight max-w-2xl`}>
              Madera, agua y cerros de fondo
            </h2>
            <p className="mt-3 text-sm md:text-base max-w-xl leading-relaxed" style={{ color: C.muda }}>
              Todas estas fotos vienen de la galería real de su ficha de Google — lo que se ve es
              lo que hay.
            </p>
          </Reveal>
          <div className="mt-10 space-y-10 md:space-y-14">
            {LO_QUE_SE_VE.map((f, i) => (
              <Reveal key={f.img} delay={60}>
                <figure className="grid md:grid-cols-12 gap-5 md:gap-8 items-center">
                  <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={`${IMG}/${f.img}.webp`}
                      alt={`${f.t} — foto real de Cabañas Cerro Colorado, Lago Colbún`}
                      className="w-full object-cover rounded-xl"
                      style={{ aspectRatio: '16/10' }}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="md:col-span-5">
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.madera }}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className={`${display.className} mt-2 text-2xl md:text-3xl leading-tight`}>{f.t}</h3>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: C.muda }}>
                      {f.d}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Ola fill={C.madera} />

      {/* ── El predio ── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <img
              src={`${IMG}/predio.webp`}
              alt="Predio de Cabañas Cerro Colorado: pradera verde con cabañas de madera y árboles"
              className="w-full object-cover rounded-xl"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={100}>
            <Kicker>El predio</Kicker>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
              Pradera, árboles y el lago abajo
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muda }}>
              Las cabañas están repartidas en un predio abierto con pasto y bosque: espacio real
              entre una y otra, sin la sensación de camping apretado.
            </p>
            <p className="mt-3 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muda }}>
              El sector es la base clásica para recorrer Vilches Alto, las termas y los senderos
              de la Reserva Altos de Lircay, a unos kilómetros camino arriba.
            </p>
          </Reveal>
        </div>
      </section>

      <Ola fill={C.madera} />

      {/* ── Reservar + mapa ── */}
      <section id="reservar" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          <Reveal>
            <Kicker>Reservas</Kicker>
            <h2 className={`${display.className} mt-3 text-4xl md:text-5xl leading-tight`}>
              Se reserva por WhatsApp
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muda }}>
              Su ficha de Google enlaza directo al WhatsApp {BIZ.phoneDisplay} — no hay formularios:
              se conversan las fechas, la cabaña y el valor de la noche.
            </p>
            <dl className="mt-6 space-y-4 text-sm md:text-base">
              <div className="flex gap-3">
                <dt className={`${mono.className} w-28 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Dirección</dt>
                <dd>{BIZ.address}, {BIZ.sector}, {BIZ.region}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-28 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Entrada</dt>
                <dd>Check-in {BIZ.checkin} hrs · check-out {BIZ.checkout} hrs</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-28 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Precio</dt>
                <dd>Referencial desde ~$80.000 la noche según Booking — confirmar por WhatsApp</dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center h-[48px] px-7 rounded-full text-sm font-semibold transition-transform active:scale-95"
              style={{ backgroundColor: C.lago, color: '#fff' }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div id="llegar" className="rounded-xl overflow-hidden h-[300px] md:h-full min-h-[300px] scroll-mt-24" style={{ border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Cabañas Cerro Colorado en Ruta 115, Lago Colbún"
                className="w-full h-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pt-10 pb-8" style={{ backgroundColor: C.lagoOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className={`${display.className} text-2xl text-white`}>{BIZ.name}</p>
          <p className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Cabañas de montaña · {BIZ.address}, {BIZ.sector} · {BIZ.rating} ★ en {BIZ.reviews} reseñas
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4 text-white">
              WhatsApp
            </a>
            <a href={BIZ.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Ficha en Google Maps
            </a>
          </div>
          <p className={`${mono.className} mt-6 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.45)' }}>
            Demo de muestra · Sitiazo.cl
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
