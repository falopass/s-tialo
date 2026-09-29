import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_EMBED, FICHA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  noche: '#0B1A11',
  selva: '#122A1C',
  lima: '#B8E04B',
  crema: '#EFF0DB',
  muted: 'rgba(239,240,219,0.72)',
  line: 'rgba(184,224,75,0.22)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'jungle',
  title: 'Jungle — Pub restaurante en San Clemente',
  description:
    'Pub restaurante en Alejandro Cruz 117, San Clemente, Maule. Reservas y consultas por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'La ficha', href: '#ficha' },
  { label: 'Lo que falta', href: '#falta' },
  { label: 'Cómo llegar', href: '#punto' },
]

function TagBosquejo() {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5 border`}
      style={{ borderColor: C.lima, color: C.lima, backgroundColor: 'rgba(11,26,17,0.8)' }}
    >
      ◈ Bosquejo — se reemplaza por tus fotos reales al activar
    </span>
  )
}

function Hoja({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 60 80" className={className} style={style} aria-hidden="true" fill="currentColor">
      <path d="M30 2C10 22 4 48 14 68c8 10 24 12 32 4 10-10 12-36 4-56C44 6 36 0 30 2zm0 14c6 16 6 34 0 50-6-16-6-34 0-50z" />
    </svg>
  )
}

export default function JunglePage() {
  return (
    <main
      className={`${body.className} min-h-screen`}
      style={{ backgroundColor: C.noche, color: C.crema, ...SPACING }}
    >
      <BlitzNav
        name={<span className="uppercase tracking-[0.1em]">Jungle</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(11,26,17,0.94)',
          ink: C.crema,
          line: C.line,
          btnBg: C.lima,
          btnInk: '#0B1A11',
        }}
      />

      {/* ── Hero — noche de selva (bosquejo marcado) ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-center overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(60% 45% at 70% 20%, rgba(184,224,75,0.14) 0%, transparent 70%), radial-gradient(50% 40% at 15% 80%, rgba(62,142,92,0.25) 0%, transparent 70%), linear-gradient(180deg, #0B1A11 0%, #0E2013 55%, #0B1A11 100%)',
        }}
      >
        {/* dosel de hojas — bosquejo CSS */}
        <div className="absolute inset-0 pointer-events-none" style={{ color: 'rgba(62,142,92,0.28)' }} aria-hidden="true">
          <Hoja className="absolute w-24 -top-4 left-[6%] rotate-[130deg]" />
          <Hoja className="absolute w-32 top-[10%] right-[4%] rotate-[-140deg]" />
          <Hoja className="absolute w-20 bottom-[12%] left-[10%] rotate-[30deg]" />
          <Hoja className="absolute w-28 bottom-[6%] right-[14%] rotate-[-25deg]" />
          <Hoja className="absolute w-16 top-[38%] left-[46%] rotate-[60deg] hidden md:block" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-28 w-full">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-6`}
              style={{ color: C.lima }}
            >
              Pub restaurante · San Clemente, Maule
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={`${display.className} uppercase leading-[0.9] text-[clamp(3.6rem,15vw,9rem)]`}
              style={{
                WebkitTextStroke: '1.5px rgba(239,240,219,0.9)',
                color: 'transparent',
              }}
            >
              Jungle
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
              El pub restaurante de Alejandro Cruz que aparece en el catastro
              municipal de San Clemente. Esta página es la muestra: los datos
              son los verificados, y las escenas se marcan como bosquejo hasta
              tener fotos reales del local.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-6">
              <TagBosquejo />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] tap-44 transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: C.lima, color: '#0B1A11', borderRadius: '4px' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#ficha"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] border tap-44 transition-colors hover:bg-white/5"
                style={{ borderColor: C.line, color: C.crema, borderRadius: '4px' }}
              >
                Ver la ficha
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La ficha — solo lo verificado ── */}
      <section id="ficha" className="py-16 md:py-24 scroll-mt-20" style={{ backgroundColor: C.selva }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-8 md:mb-12">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.lima }}>
              01 · La ficha
            </p>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,7vw,4.4rem)]`}
              style={{ color: C.crema }}
            >
              Lo que está confirmado
            </h2>
          </div>
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-start">
            <Reveal>
              <div className="border p-6 md:p-8" style={{ borderColor: C.line, backgroundColor: 'rgba(11,26,17,0.6)', borderRadius: '6px' }}>
                <dl className="space-y-4">
                  {FICHA.map((f) => (
                    <div key={f.k} className="flex gap-4 items-baseline border-b pb-3.5" style={{ borderColor: C.line }}>
                      <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.lima }}>
                        {f.k}
                      </dt>
                      <dd className="text-base md:text-lg font-semibold" style={{ color: C.crema }}>
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-6 leading-relaxed`} style={{ color: C.muted }}>
                  Fuente: {BIZ.fuente} ·{' '}
                  <a
                    href={BIZ.fuenteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                    style={{ color: C.crema }}
                  >
                    sanclemente.cl
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="relative border p-6 md:p-8"
                style={{ borderColor: C.line, borderRadius: '6px', backgroundImage: 'radial-gradient(80% 60% at 80% 10%, rgba(184,224,75,0.10) 0%, transparent 70%)' }}
              >
                <p className={`${display.className} uppercase text-xl md:text-2xl leading-tight mb-4`} style={{ color: C.crema }}>
                  Sin inventar nada
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Jungle no tiene ficha de Google Maps ni redes visibles hoy.
                  Por eso esta muestra usa solo lo que confirma el municipio —
                  y cada visual va etiquetado como bosquejo hasta que el local
                  comparta sus fotos.
                </p>
                <div className="mt-5">
                  <TagBosquejo />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Lo que falta — la página real espera sus fotos ── */}
      <section id="falta" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-8 md:mb-12">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.lima }}>
              02 · Lo que falta
            </p>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,7vw,4.4rem)]`}
              style={{ color: C.crema }}
            >
              Para que sea 100% Jungle
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                n: 'A',
                t: 'Fotos del local',
                d: 'La barra, la terraza, los platos de la casa. Con 5 fotos reales esta página cambia entera.',
              },
              {
                n: 'B',
                t: 'La carta',
                d: 'Picadas, tragos y precios publicados aquí mismo — sin PDF ni fotos borrosas de menú.',
              },
              {
                n: 'C',
                t: 'Horarios y reservas',
                d: 'Cuándo abre, si hay show o tele partido, y un botón directo para reservar mesa.',
              },
            ].map((f, i) => (
              <Reveal key={f.n} delay={i * 80}>
                <div
                  className="relative border p-6 h-full overflow-hidden"
                  style={{ borderColor: C.line, borderRadius: '6px', backgroundColor: 'rgba(18,42,28,0.5)' }}
                >
                  <Hoja className="absolute -right-4 -top-4 w-16" style={{ color: 'rgba(62,142,92,0.25)' }} />
                  <p className={`${display.className} text-3xl mb-3`} style={{ color: C.lima }}>
                    {f.n}
                  </p>
                  <p className="font-bold text-base mb-2" style={{ color: C.crema }}>{f.t}</p>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-6 text-center`} style={{ color: C.muted }}>
              ¿Eres del equipo de Jungle? Escríbenos por WhatsApp y lo dejamos real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="punto" className="py-16 md:py-24 scroll-mt-20" style={{ backgroundColor: C.selva }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-8 md:mb-12">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.lima }}>
              03 · El punto
            </p>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,6.5vw,3.8rem)]`}
              style={{ color: C.crema }}
            >
              {BIZ.address}, {BIZ.city}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <Reveal>
                <p className="text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                  A pasos del centro de San Clemente, según el catastro
                  municipal. Confirma horarios y carta del día directamente al
                  teléfono del local.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] tap-44 transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: C.lima, color: '#0B1A11', borderRadius: '4px' }}
                  >
                    WhatsApp {BIZ.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div
                className="relative border overflow-hidden aspect-[4/3]"
                style={{ borderColor: C.line, borderRadius: '6px' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: '#081410' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className={`${display.className} uppercase text-xl leading-tight`} style={{ color: C.crema }}>
                Jungle
              </p>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, Maule
              </p>
            </div>
            <a
              href={BIZ.fuenteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 tap-44"
              style={{ color: C.crema }}
            >
              Fuente: municipio de San Clemente
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
