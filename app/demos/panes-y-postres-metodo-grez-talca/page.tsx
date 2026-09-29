import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2' }],
  variable: '--f-d',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2' }],
  variable: '--f-b',
})

export const metadata: Metadata = demoMetadata({
  slug: 'panes-y-postres-metodo-grez-talca',
  title: 'Panes y Postres Método Grez · Sin azúcar y sin gluten en Talca',
  description:
    'Tortas, panes, galletas y chocolates sin azúcar y sin gluten por encargo en Talca. Método Grez, keto y low carb. Pide por WhatsApp.',
  image: `${IMG}/torta-merengue.webp`,
})

// Oliva + blanco cálido: la tienda es saludable, no romántica.
const C = {
  paper: '#fbfaf5',
  ink: '#22281a',
  muted: 'rgba(34,40,26,0.7)',
  accent: '#4e6420',
  accentInk: '#fbfaf5',
  soft: '#eef0e1',
  line: '#dde2c8',
  deep: '#26301a',
  deepMuted: 'rgba(251,250,245,0.72)',
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Para quién', href: '#parquien' },
  { label: 'Encargos', href: '#encargos' },
  { label: 'Dónde', href: '#ubicacion' },
]

const FICHAS = [
  {
    src: 'torta-hojarasca.webp',
    name: 'Tortas por encargo',
    spec: 'Cumpleaños, once y celebración. Sin azúcar, sin gluten.',
  },
  {
    src: 'panqueques.webp',
    name: 'Panqueques y muffins',
    spec: 'Base de almendra y linaza, listos para el desayuno.',
  },
  {
    src: 'galletas.webp',
    name: 'Galletas',
    spec: 'De coco y chocolate, para la semana.',
  },
  {
    src: 'bolitas-coco.webp',
    name: 'Bolitas y chocolates',
    spec: 'Coco, nuez y chocolate 100% cacao.',
  },
  {
    src: 'pan-envasado.webp',
    name: 'Pan de almendra',
    spec: 'Envasado, keto y low carb. El pan del método.',
  },
  {
    src: 'torta-merengue.webp',
    name: 'Queques y merengues',
    spec: 'Limón, vainilla y más, siempre sin azúcar.',
  },
]

const PARA_QUIEN = [
  { t: 'Diabéticos', d: 'Sin azúcar de verdad: puedes comer torta sin que se dispare la glucosa.' },
  { t: 'Celíacos', d: 'Todo es sin gluten, con harinas de almendra, coco y linaza.' },
  { t: 'Keto y low carb', d: 'El método Grez nació para bajar los carbohidratos sin perder el postre.' },
  { t: 'Quien cuida su peso', d: 'Antojo dulce sin el remordimiento: porciones honestas.' },
]

const PASOS = [
  'Escríbenos por WhatsApp al ' + BIZ.phoneDisplay,
  'Elige del catálogo o pide una torta especial para tu fecha',
  'Retiras en 25 Oriente o coordinas el envío',
]

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main
      className={`${display.variable} ${body.variable}`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--f-b)' }}
    >
      <BlitzNav
        name="Método Grez Talca"
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.accent,
          btnInk: C.accentInk,
        }}
      />

      {/* Hero: ficha técnica grande */}
      <section id="inicio">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-10 md:pb-16">
          <div
            className="rounded-3xl border grid md:grid-cols-12 overflow-hidden"
            style={{ borderColor: C.ink, backgroundColor: C.soft }}
          >
            <div className="md:col-span-7 p-6 md:p-10">
              <Reveal>
                <p
                  className="text-xs md:text-sm font-bold tracking-[0.22em] uppercase"
                  style={{ color: C.accent }}
                >
                  Tienda de postres · Talca
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1
                  className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.02] tracking-tight"
                  style={{ fontFamily: 'var(--f-d)' }}
                >
                  Postres que sí puedes comer
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Sin azúcar y sin gluten, hechos a pedido en {BIZ.address}.
                </p>
              </Reveal>
              <Reveal delay={210}>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 max-w-md text-sm font-bold uppercase tracking-wide" style={{ color: C.accent }}>
                  {['Sin azúcar', 'Sin gluten', 'Keto', 'Low carb'].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <Check />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={270}>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.accent, color: C.accentInk }}
                  >
                    Encargar por WhatsApp
                  </a>
                  <a
                    href="#vitrina"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold border"
                    style={{ borderColor: C.accent, color: C.accent }}
                  >
                    Ver la vitrina
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold" style={{ color: C.muted }}>
                  <Stars value={BIZ.rating} color={C.accent} className="w-3.5 h-3.5" />
                  <span>5,0 en Google</span>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5 min-h-[280px] md:min-h-0">
              <img
                src={`${IMG}/torta-merengue.webp`}
                alt="Torta con crema y merengue sin azúcar de Método Grez Talca"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* La vitrina: fichas con especificación */}
      <section id="vitrina" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: 'var(--f-d)' }}
            >
              La vitrina sin culpa
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: C.muted }}>
              Todo lo que ves es real: fotos de la tienda. Tortas, panes, galletas
              y chocolates que no llevan ni azúcar ni gluten.
            </p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {FICHAS.map((f, i) => (
              <Reveal key={f.src} delay={i * 60}>
                <article
                  className="h-full rounded-2xl border overflow-hidden"
                  style={{ borderColor: C.line, backgroundColor: '#ffffff' }}
                >
                  <img
                    src={`${IMG}/${f.src}`}
                    alt={`${f.name} de ${BIZ.name}`}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h3
                      className="text-lg md:text-xl font-extrabold tracking-tight"
                      style={{ fontFamily: 'var(--f-d)' }}
                    >
                      {f.name}
                    </h3>
                    <div className="mt-2 border-t border-dashed pt-2" style={{ borderColor: C.line }}>
                      <p className="text-xs md:text-sm leading-snug" style={{ color: C.muted }}>
                        {f.spec}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider" style={{ color: C.accent }}>
                        <span className="flex items-center gap-1"><Check /> sin azúcar</span>
                        <span className="flex items-center gap-1"><Check /> sin gluten</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién: bloque oliva oscuro */}
      <section id="parquien" className="scroll-mt-20" style={{ backgroundColor: C.deep, color: C.accentInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl"
              style={{ fontFamily: 'var(--f-d)' }}
            >
              Hecho para los que siempre tenían que decir que no
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-10 grid sm:grid-cols-2 gap-4 md:gap-6">
            {PARA_QUIEN.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div
                  className="h-full rounded-2xl border p-5 md:p-6"
                  style={{ borderColor: 'rgba(251,250,245,0.2)', backgroundColor: 'rgba(251,250,245,0.05)' }}
                >
                  <h3
                    className="text-xl md:text-2xl font-extrabold tracking-tight flex items-center gap-2"
                    style={{ fontFamily: 'var(--f-d)' }}
                  >
                    <span style={{ color: '#b7cf7f' }}><Check /></span>
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.deepMuted }}>
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Encargos: lista con guías punteadas */}
      <section id="encargos" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2
                className="text-3xl md:text-5xl font-extrabold tracking-tight"
                style={{ fontFamily: 'var(--f-d)' }}
              >
                Encargas por WhatsApp
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-3 text-base leading-relaxed" style={{ color: C.muted }}>
                La dueña atiende personalmente cada pedido. Tortas, queques,
                galletas, chocolates y panqueques se hacen bajo encargo.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.accent, color: C.accentInk }}
              >
                Escribir ahora
              </a>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ol className="divide-y" style={{ borderColor: C.line }}>
              {PASOS.map((p, i) => (
                <Reveal key={p} delay={i * 80}>
                  <li className="flex items-baseline gap-4 py-4 md:py-5 border-b" style={{ borderColor: C.line }}>
                    <span
                      className="shrink-0 text-sm font-extrabold tabular-nums"
                      style={{ color: C.accent }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-base md:text-xl font-semibold leading-snug">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <h2
                className="text-3xl md:text-5xl font-extrabold tracking-tight"
                style={{ fontFamily: 'var(--f-d)' }}
              >
                25 Oriente 3426, Talca
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                Sector oriente de Talca, cerca de 22 y Media Norte. Retira tu
                encargo o escribe y coordina el envío.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-5 space-y-2 text-sm md:text-base">
                <p>
                  <span className="font-bold">WhatsApp: </span>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    {BIZ.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="font-bold">Mapa: </span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    Ver en Google Maps
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.fullName} en Talca`}
                  className="w-full h-[280px] md:h-[360px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer compacto */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold"
          style={{ color: C.muted }}
        >
          <span>
            {BIZ.fullName} · {BIZ.address}
          </span>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: C.accent }}>
            WhatsApp {BIZ.phoneDisplay}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.fullName} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.fullName} por WhatsApp`} />
    </main>
  )
}
