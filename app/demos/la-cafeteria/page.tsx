import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, HORARIO, CARTA, TESTIMONIALS, FOTOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-300.woff2', weight: '300', style: 'normal' },
    { path: '../../fonts/lato/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Identidad desde sus fotos reales: el verde botella de los azulejos y el
// neón, el crema de la toldería a rayas y la madera de las mesas.
const C = {
  verde: '#14382C',
  verdeOsc: '#0C271E',
  neon: '#9FE870',
  crema: '#F6EFE1',
  carta: '#FFF9EC',
  tinta: '#1E2B24',
  apagado: '#5C6B60',
  madera: '#8B5E34',
  line: 'rgba(30,43,36,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-cafeteria',
  title: 'La Cafetería — Café, pastelería y desayunos en Las Rastras, Talca',
  description:
    'Cafetería de barrio en la esquina de 5 Norte con 34 Oriente, Talca. Desayunos hasta las 12:00, pastelería, completos y pastas frescas. Cuando estás aquí, eres familia.',
  image: `${IMG}/noche.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
]

const NAV_THEME = {
  over: 'dark' as const,
  bar: 'rgba(246,239,225,0.94)',
  ink: C.tinta,
  line: C.line,
  btnBg: C.verde,
  btnInk: '#fff',
}

// Toldería a rayas — el motivo de su toldo crema/verde.
function Toldo({ invertido = false }: { invertido?: boolean }) {
  const a = invertido ? C.verde : C.crema
  const b = invertido ? C.crema : C.verde
  return (
    <div
      className="h-3 w-full"
      style={{
        background: `repeating-linear-gradient(90deg, ${a} 0 24px, ${b} 24px 48px)`,
      }}
      aria-hidden="true"
    />
  )
}

// Texto con brillo de neón.
const NEON_STYLE: CSSProperties = {
  color: C.neon,
  textShadow: `0 0 6px ${C.neon}cc, 0 0 18px ${C.neon}88, 0 0 42px ${C.neon}55`,
}

export default function LaCafeteria() {
  return (
    <main className={body.className} style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={BIZ.phoneTel}
        theme={NAV_THEME}
        fontClass={display.className}
        logoSrc={`${IMG}/isotipo.webp`}
        ctaLabel="Llamar"
      />

      {/* ── Portada: la esquina de noche ───────────────────── */}
      <section id="inicio" className="relative min-h-[88svh] flex items-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FOTOS.noche.src}
          alt={FOTOS.noche.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12,39,30,0.4) 0%, rgba(12,39,30,0.2) 42%, rgba(12,39,30,0.85) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
          <Reveal>
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/sello.webp`}
                alt={`Sello de ${BIZ.name}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/70"
              />
              <div className={`${mono.className} text-xs uppercase tracking-[0.25em] text-white/85`}>
                {BIZ.branch} · {BIZ.city}
                <br />
                <span style={NEON_STYLE}>abierto de noche también</span>
              </div>
            </div>
            <h1 className={`${display.className} mt-5 text-[52px] leading-[0.98] md:text-[88px] text-white`}>
              La Cafetería
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-[50ch] text-white/90">
              La cafetería de la esquina: {BIZ.address}, {BIZ.city}. Café, pastelería,
              completos y pastas frescas — y un letrero de neón que nunca apaga pronto.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white">
              <Stars value={BIZ.rating} color={C.neon} />
              <span className="font-semibold">{BIZ.rating}</span>
              <span className="text-white/80">· {BIZ.reviews} reseñas en Google</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-lg">
              <a
                href="#carta"
                className="tap-44 flex-1 text-center text-base font-bold py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.neon, color: C.verdeOsc }}
              >
                Ver la carta
              </a>
              <a
                href={BIZ.phoneTel}
                className="tap-44 flex-1 text-center text-base font-semibold py-3 rounded-full border text-white"
                style={{ borderColor: 'rgba(255,255,255,0.65)', backgroundColor: 'rgba(12,39,30,0.4)' }}
              >
                Llamar al local
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Toldo />

      {/* ── La carta (pizarra) ─────────────────────────────── */}
      <section id="carta" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.madera }}>
              la carta de la esquina
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`} style={{ color: C.verde }}>
              Precios de barrio, carta grande
            </h2>
          </Reveal>
          <div className="mt-8 grid lg:grid-cols-3 gap-4 md:gap-6">
            {CARTA.map((s, i) => (
              <Reveal key={s.seccion} delay={i * 90}>
                <div
                  className="h-full rounded-2xl border-2 p-6"
                  style={{
                    borderColor: `${C.verde}44`,
                    backgroundColor: C.verde,
                    color: C.crema,
                    boxShadow: `0 14px 34px -20px ${C.verdeOsc}99`,
                  }}
                >
                  <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.neon }}>
                    {s.seccion}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {s.items.map((it) => (
                      <li key={it.nombre} className="flex items-baseline gap-2">
                        <span className="text-base">{it.nombre}</span>
                        <span className="flex-1 border-b border-dotted" style={{ borderColor: 'rgba(246,239,225,0.4)' }} />
                        <span className={`${mono.className} text-sm`} style={{ color: C.neon }}>{it.precio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className={`${mono.className} mt-4 text-xs`} style={{ color: C.apagado }}>
              precios publicados en {BIZ.web} — la carta completa tiene muchas más alternativas
            </p>
          </Reveal>

          {/* tira de fotos de la carta */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[FOTOS.desayuno, FOTOS.milkshake, FOTOS.completo, FOTOS.torta].map((f) => (
              <Reveal key={f.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.src} alt={f.alt} className="w-full aspect-square object-cover rounded-xl" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Toldo invertido />

      {/* ── El local ───────────────────────────────────────── */}
      <section id="local" className="py-12 md:py-20" style={{ backgroundColor: C.verdeOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.neon }}>
              el local
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl text-white`}>
              Azulejos verdes, madera y neón
            </h2>
            <p className="mt-4 max-w-[56ch] text-base md:text-lg leading-relaxed text-white/80">
              Desde que el local del centro cerró, toda la vida de La Cafetería se juntó acá:
              la esquina de Las Rastras, donde el neón verde se enciende temprano y la
              pastelería de la vitrina se va rotando todo el día.
            </p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-12 gap-4 md:gap-6">
            <Reveal className="md:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FOTOS.fachada.src}
                alt={FOTOS.fachada.alt}
                className="w-full h-full object-cover rounded-2xl aspect-[4/3] md:aspect-auto"
              />
            </Reveal>
            <div className="md:col-span-4 grid grid-rows-2 gap-4">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FOTOS.neon.src} alt={FOTOS.neon.alt} className="w-full h-full object-cover rounded-2xl aspect-[4/3] md:aspect-auto" />
              </Reveal>
              <Reveal delay={80}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FOTOS.mesa.src} alt={FOTOS.mesa.alt} className="w-full h-full object-cover rounded-2xl aspect-[4/3] md:aspect-auto" />
              </Reveal>
            </div>
            <Reveal className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4" delay={140}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FOTOS.espresso.src} alt={FOTOS.espresso.alt} className="w-full object-cover rounded-2xl aspect-square md:h-1/2" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FOTOS.latte.src} alt={FOTOS.latte.alt} className="w-full object-cover rounded-2xl aspect-square md:h-1/2" />
            </Reveal>
          </div>

          {/* horario + contacto */}
          <Reveal delay={100}>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-6 border" style={{ borderColor: 'rgba(246,239,225,0.25)', backgroundColor: 'rgba(246,239,225,0.06)' }}>
                <h3 className={`${display.className} text-xl text-white`}>Horario</h3>
                <ul className="mt-4 space-y-2.5 text-[15px] text-white/85">
                  {HORARIO.map(([d, h]) => (
                    <li key={d} className="flex items-baseline gap-3">
                      <span className="capitalize">{d}</span>
                      <span className="flex-1 border-b border-dotted border-white/30" />
                      <span className={`${mono.className} text-sm`} style={{ color: C.neon }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 border" style={{ borderColor: 'rgba(246,239,225,0.25)', backgroundColor: 'rgba(246,239,225,0.06)' }}>
                <h3 className={`${display.className} text-xl text-white`}>Reservas y encargos</h3>
                <div className="mt-4 space-y-2.5 text-[15px] text-white/85">
                  <a href={BIZ.phoneTel} className="block font-semibold underline decoration-2 underline-offset-4" style={{ color: C.neon }}>
                    {BIZ.phoneDisplay}
                  </a>
                  <a href={`mailto:${BIZ.email}`} className="block hover:text-white">
                    {BIZ.email}
                  </a>
                  <a href={BIZ.webUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                    {BIZ.web}
                  </a>
                </div>
                <a
                  href={BIZ.phoneTel}
                  className="tap-44 mt-5 block text-center text-base font-bold py-3 rounded-full"
                  style={{ backgroundColor: C.neon, color: C.verdeOsc }}
                >
                  Llamar {BIZ.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ────────────────────────────────────────── */}
      <section id="resenas" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.madera }}>
                  la mesa de al lado
                </div>
                <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`} style={{ color: C.verde }}>
                  Lo que se dice entre café y café
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: C.tinta }}>
                <Stars value={BIZ.rating} color={C.madera} />
                <span className="font-bold">{BIZ.rating}</span>
                <span style={{ color: C.apagado }}>· {BIZ.reviews} reseñas</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.nombre} delay={i * 80}>
                <figure
                  className="h-full rounded-2xl border p-5"
                  style={{ borderColor: C.line, backgroundColor: C.carta }}
                >
                  <Stars value={t.stars} color={C.madera} />
                  <blockquote className="mt-3 text-[15px] leading-relaxed">{t.texto}</blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs`} style={{ color: C.apagado }}>
                    {t.nombre} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La esquina en el mapa ──────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            <Reveal className="md:col-span-5">
              <div className="rounded-3xl border p-6 h-full" style={{ borderColor: C.line, backgroundColor: C.carta }}>
                <h2 className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.verde }}>
                  La esquina de {BIZ.branch}
                </h2>
                <dl className="mt-5 space-y-3 text-[15px]">
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.apagado }}>dirección</dt>
                    <dd className="font-semibold">{BIZ.address}, {BIZ.city}<br /><span style={{ color: C.apagado }}>({BIZ.addressCorta})</span></dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.apagado }}>teléfono</dt>
                    <dd>
                      <a href={BIZ.phoneTel} className="font-semibold underline decoration-2 underline-offset-4" style={{ color: C.verde }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.apagado }}>mapa</dt>
                    <dd>
                      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: C.madera }}>
                        Abrir en Google Maps
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name} ${BIZ.branch}`}
                className="w-full h-full min-h-[300px] rounded-3xl border"
                style={{ borderColor: C.line }}
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.verdeOsc, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/sello.webp`} alt={`Sello de ${BIZ.name}`} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <div className={`${display.className} text-lg leading-none`}>{BIZ.name}</div>
                <div className={`${mono.className} text-[11px] mt-1 opacity-70`}>
                  {BIZ.rubro} · {BIZ.branch}, {BIZ.city}
                </div>
              </div>
            </div>
            <div className={`${mono.className} text-[11px] opacity-70 text-right leading-relaxed`}>
              {BIZ.addressCorta}, {BIZ.city} — {BIZ.region}
              <br />
              {BIZ.phoneDisplay}
            </div>
          </div>
          <p className={`${display.className} mt-5 text-lg`} style={NEON_STYLE}>
            “{BIZ.tagline}”
          </p>
          <p className={`${mono.className} mt-4 pt-4 text-[11px] opacity-50 border-t`} style={{ borderColor: 'rgba(246,239,225,0.2)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}.
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.verde} />
    </main>
  )
}
