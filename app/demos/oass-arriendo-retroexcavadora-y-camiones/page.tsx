import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' }],
})

const C = {
  carbon: '#17140E',
  carbonSoft: '#211C12',
  papel: '#EFE9DA',
  papelInk: '#1C1810',
  amber: '#F2C00C',
  bone: '#F4EFE1',
  muted: '#B2A98F',
  mutedInk: '#5F553F',
  line: 'rgba(242,192,12,0.28)',
}

/** Cinta de seguridad de faena — el motivo gráfico de OASS. */
function Hazard({ className = 'h-2.5' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${C.amber} 0 14px, ${C.carbon} 14px 28px)`,
      }}
    />
  )
}

const FAENAS = [
  {
    n: '01',
    t: 'Arriendo de retroexcavadora',
    d: 'Para faenas de campo, construcción y obras menores en San Clemente y comunas vecinas.',
  },
  {
    n: '02',
    t: 'Arriendo de camiones',
    d: 'Traslado de ripio, tierra, materiales y carga de faena.',
  },
  {
    n: '03',
    t: 'Movimiento de tierra',
    d: 'Excavaciones, zanjas y nivelación de terreno para predios y proyectos.',
  },
  {
    n: '04',
    t: 'Servicios agrícolas',
    d: 'Trabajo a máquina para el campo: acondicionamiento de suelo y labores pesadas.',
  },
]

const FLOTA = [
  {
    img: `${IMG}/cat-416.webp`,
    alt: 'Retroexcavadora CAT 416E de OASS trabajando en terreno',
    marca: 'CAT',
    modelo: '416E',
    uso: 'Excavación y retro',
  },
  {
    img: `${IMG}/faena-retro.webp`,
    alt: 'Retroexcavadora New Holland de OASS excavando en una faena',
    marca: 'New Holland',
    modelo: 'Retroexcavadora',
    uso: 'Faena de campo',
  },
  {
    img: `${IMG}/frente-cat.webp`,
    alt: 'Vista frontal de la retroexcavadora CAT de OASS',
    marca: 'CAT',
    modelo: 'Brazo y cuchara',
    uso: 'Acarreo y empuje',
  },
]

export const metadata = demoMetadata({
  slug: 'oass-arriendo-retroexcavadora-y-camiones',
  title: 'OASS — Arriendo de retroexcavadora y camiones en San Clemente',
  description:
    'Arriendo de retroexcavadora y camiones con servicios agrícolas en San Clemente, Maule. Cotiza tu faena por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

export default function OassDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.carbon, color: C.bone }}>
      <BlitzNav
        name={<span className={display.className}>OASS</span>}
        links={[
          { label: 'Faenas', href: '#faenas' },
          { label: 'Máquinas', href: '#maquinas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.carbon,
          ink: C.bone,
          line: 'rgba(255,255,255,0.10)',
          btnBg: C.amber,
          btnInk: C.carbon,
        }}
        ctaLabel="Cotizar"
      />

      {/* ── Hero: la máquina trabajando, en grande ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Retroexcavadora de OASS empujando ripio en una faena de San Clemente"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(23,20,14,0.55) 0%, rgba(23,20,14,0.15) 40%, rgba(23,20,14,0.92) 88%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-8 md:pb-12">
          <Reveal>
            <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.22em]`} style={{ color: C.amber }}>
              Arriendo de maquinaria · San Clemente, Maule
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.95] mt-3`}
              style={{ fontSize: 'clamp(3.4rem, 14vw, 8.5rem)', color: C.bone }}
            >
              La máquina<br />para tu faena
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-xl" style={{ color: 'rgba(244,239,225,0.85)' }}>
              Retroexcavadora y camiones a pedido, con servicios agrícolas.
              Coordinas por WhatsApp y la máquina llega al terreno.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold text-base px-7 py-3 transition-transform active:scale-95"
                style={{ backgroundColor: C.amber, color: C.carbon }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center text-base px-5 py-3 border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(244,239,225,0.45)', color: C.bone }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-8">
            <div className="border-t pt-4 grid grid-cols-3 gap-3" style={{ borderColor: 'rgba(244,239,225,0.25)' }}>
              {[
                ['Máquinas', 'CAT · New Holland'],
                ['Sector', 'San Clemente'],
                ['Horario', 'L–S 8–21 · D 8–13'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {k}
                  </p>
                  <p className={`${mono.className} text-xs md:text-sm mt-1`} style={{ color: C.bone }}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Hazard />
      </section>

      {/* ── Parte de trabajo: las faenas como orden de trabajo ── */}
      <section id="faenas" className="relative" style={{ backgroundColor: C.papel, color: C.papelInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: C.mutedInk }}>
              Parte de trabajo
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2`}>
              Qué hace la máquina
            </h2>
          </Reveal>

          <div className="mt-8">
            {FAENAS.map((f, i) => (
              <Reveal key={f.n} delay={i * 70}>
                <div
                  className="grid grid-cols-[auto_1fr] gap-4 md:gap-8 py-5 md:py-6 border-t"
                  style={{ borderColor: 'rgba(28,24,16,0.22)' }}
                >
                  <span
                    className={`${mono.className} text-sm md:text-base pt-1`}
                    style={{ color: C.mutedInk }}
                  >
                    {f.n}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8">
                    <h3 className={`${display.className} uppercase text-xl md:text-3xl leading-tight md:w-[42%] shrink-0`}>
                      {f.t}
                    </h3>
                    <p className="text-sm md:text-base max-w-md" style={{ color: 'rgba(28,24,16,0.75)' }}>
                      {f.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t" style={{ borderColor: 'rgba(28,24,16,0.22)' }} />
          </div>

          <Reveal delay={100} className="mt-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold text-base px-7 py-3 transition-transform active:scale-95"
              style={{ backgroundColor: C.carbon, color: C.amber }}
            >
              Pedir cotización →
            </a>
          </Reveal>
        </div>
        <Hazard />
      </section>

      {/* ── La flota: ficha técnica con fotos reales ── */}
      <section id="maquinas" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: C.amber }}>
              En terreno
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2`} style={{ color: C.bone }}>
              Las máquinas de OASS
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {FLOTA.map((m, i) => (
              <Reveal key={m.modelo + i} delay={i * 80}>
                <figure className="border" style={{ borderColor: 'rgba(244,239,225,0.14)' }}>
                  <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 border-t" style={{ borderColor: 'rgba(244,239,225,0.14)' }}>
                    <div className="flex items-baseline justify-between gap-2">
                      <p className={`${display.className} uppercase text-lg`} style={{ color: C.bone }}>
                        {m.marca}
                      </p>
                      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.amber }}>
                        {m.modelo}
                      </p>
                    </div>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                      {m.uso}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseña real ── */}
      <section style={{ backgroundColor: C.carbonSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-3 flex-wrap">
              <Stars value={5} color={C.amber} className="w-5 h-5" />
              <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                {BIZ.rating} · {BIZ.reviews}
              </p>
            </div>
            <blockquote
              className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.05] mt-6 max-w-3xl`}
              style={{ color: C.bone }}
            >
              “Buen servicio. Responsable.”
            </blockquote>
            <p className="mt-4 text-sm" style={{ color: C.muted }}>
              María Teresa Moraga · reseña en Google
            </p>
            <a
              href={BIZ.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-6 text-xs uppercase tracking-[0.18em] underline underline-offset-4`}
              style={{ color: C.amber }}
            >
              Ver ficha en Google Maps ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: C.amber }}>
                Cómo se coordina
              </p>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2`} style={{ color: C.bone }}>
                San Clemente, Maule
              </h2>
              <p className="mt-4 text-sm md:text-base max-w-md" style={{ color: C.muted }}>
                La maquinaria sale desde San Clemente. Escribes por WhatsApp,
                se cotiza la faena y se coordina el traslado al terreno.
              </p>
              <dl className="mt-8 space-y-4">
                {HORARIO.map((h) => (
                  <div key={h.d} className="flex justify-between border-b pb-3" style={{ borderColor: 'rgba(244,239,225,0.12)' }}>
                    <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                      {h.d}
                    </dt>
                    <dd className={`${mono.className} text-sm`} style={{ color: C.bone }}>
                      {h.h}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full min-h-[300px] border" style={{ borderColor: 'rgba(244,239,225,0.14)' }}>
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
      <section style={{ backgroundColor: C.amber, color: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
          <div className="flex-1">
            <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: 'rgba(23,20,14,0.7)' }}>
              ¿Faena a la vista?
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-6xl leading-[0.95] mt-2`}>
              Cotiza la máquina hoy
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold text-base px-8 py-3 transition-transform active:scale-95 shrink-0"
            style={{ backgroundColor: C.carbon, color: C.bone }}
          >
            WhatsApp {BIZ.phoneDisplay}
          </a>
        </div>
      </section>
      <Hazard />

      <footer style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className={`${display.className} uppercase text-lg`} style={{ color: C.bone }}>
              OASS
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay}
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-xs" style={{ color: C.muted }}>
              Arriendo de retroexcavadora y camiones · {BIZ.city}, {BIZ.region}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
              style={{ color: C.muted }}
            >
              Google Maps
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />
    </div>
  )
}
