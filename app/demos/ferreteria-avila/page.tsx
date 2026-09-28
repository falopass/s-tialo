import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, PASILLOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const painted = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-painted',
})
const body = localFont({
  src: [
    { path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '400 700', style: 'normal' },
  ],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '400 600', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  muro: '#FAF6EC',
  muroHi: '#FFFDF6',
  ink: '#1B1712',
  rojo: '#C8102E',
  azul: '#1B4F9C',
  sombra: '#E4DAC4',
  muted: '#4E473C',
  line: 'rgba(27,23,18,0.9)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-avila',
  title: 'Ferretería Ávila — la esquina de Ecuador con Alameda, Rancagua',
  description:
    'Ferretería de barrio en Ecuador Oriente 147 esq. Alameda, Rancagua. Herramientas, pinturas e insumos. Llame al +56 72 221 4488.',
})

// Sombra de rótulo: bloque desplazado detrás del elemento
function Rotulo({
  children,
  bg = C.rojo,
  ink = '#fff',
  className = '',
}: {
  children: React.ReactNode
  bg?: string
  ink?: string
  className?: string
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="absolute inset-0 translate-x-1.5 translate-y-1.5" style={{ backgroundColor: C.ink }} />
      <span
        className="relative inline-block px-3 py-1 font-bold uppercase tracking-wide text-sm"
        style={{ backgroundColor: bg, color: ink, fontFamily: 'var(--font-body)' }}
      >
        {children}
      </span>
    </span>
  )
}

export default function FerreteriaAvila() {
  return (
    <main
      className={`${painted.variable} ${body.variable} ${mono.variable} min-h-screen`}
      style={{ backgroundColor: C.muro, color: C.ink, fontFamily: 'var(--font-body)' }}
    >
      <BlitzNav
        name={BIZ.name}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.ink, ink: C.ink, line: 'rgba(27,23,18,0.2)', btnBg: C.rojo, btnInk: '#fff' }}
        links={[
          { label: 'Los pasillos', href: '#pasillos' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'La esquina', href: '#esquina' },
        ]}
        fontClass="font-mono"
      />

      {/* ── HERO: la muralla pintada ──────────────────────── */}
      <section className="pt-24 md:pt-28 pb-0" style={{ backgroundColor: C.muro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.28em]" style={{ color: C.rojo }}>
                Ferretería
              </span>
              <span aria-hidden="true" className="h-[3px] flex-1" style={{ backgroundColor: C.ink }} />
              <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.28em]" style={{ color: C.muted }}>
                {BIZ.city}
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="uppercase leading-[0.85] mt-4"
              style={{ fontFamily: 'var(--font-painted)', fontWeight: 700, fontSize: 'clamp(4.2rem,19vw,13rem)', color: C.ink }}
            >
              Ávila
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Rotulo>Ecuador esq. Alameda</Rotulo>
              <Rotulo bg={C.azul}>Desde siempre en la esquina</Rotulo>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="relative border-4" style={{ borderColor: C.ink, boxShadow: `10px 10px 0 ${C.sombra}` }}>
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <Image
                  src={`${IMG}/a1.webp`}
                  alt="Fachada de Ferretería Ávila con su letrero pintado a mano en la esquina de Ecuador con Alameda"
                  fill
                  priority
                  sizes="(min-width:1152px) 1100px, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-px left-0 right-0 flex justify-between items-center px-4 py-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]"
                style={{ backgroundColor: C.ink, color: C.muro }}
              >
                <span>El letrero es el original</span>
                <span className="hidden sm:inline">Pintado a mano · Ecuador Ote. 147</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* cinta de datos */}
        <div className="mt-12 border-y-4" style={{ borderColor: C.ink, backgroundColor: C.rojo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-8 gap-y-1.5 items-center justify-between font-mono text-[11px] md:text-xs uppercase tracking-[0.18em] text-white">
            <span className="flex items-center gap-2">
              <Stars value={4.6} color="#fff" className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </span>
            <span className="hidden md:inline">L–V 8:30–13:00 y 15:00–18:30</span>
            <span>Sáb 9:00–14:00</span>
            <a href={TEL_LINK} className="underline underline-offset-4">{BIZ.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO pintado ─────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.muro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: C.azul }}>
              Letrero n°1
            </p>
            <h2
              className="mt-4 uppercase leading-[0.95] max-w-4xl"
              style={{ fontFamily: 'var(--font-painted)', fontWeight: 700, fontSize: 'clamp(2.2rem,7.5vw,5rem)' }}
            >
              La esquina donde <span style={{ color: C.rojo }}>Rancagua</span> viene a arreglar la casa
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Ferretería Ávila funciona en Ecuador Oriente 147, haciendo esquina con la Alameda.
                Adentro, góndolas llenas y gente que sabe lo que vende: usted describe el problema
                y sale con la pieza exacta.
              </p>
              <div className="space-y-3">
                {[
                  'Herramientas y tornillería',
                  'Pintura Tricolor y accesorios',
                  'Material eléctrico y gasfitería',
                  'Insumos para la casa y el taller',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span aria-hidden="true" className="w-3 h-3 rotate-45 shrink-0" style={{ backgroundColor: C.rojo }} />
                    <span className="text-base md:text-lg font-semibold uppercase tracking-tight">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PASILLOS: cinta de fotos ──────────────────────── */}
      <section id="pasillos" className="py-16 md:py-24" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: C.sombra }}>
              Letrero n°2
            </p>
            <h2
              className="mt-4 uppercase leading-none"
              style={{ fontFamily: 'var(--font-painted)', fontWeight: 700, fontSize: 'clamp(2.2rem,7vw,4.6rem)', color: C.muro }}
            >
              Mire por el pasillo
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex gap-5 px-5 md:px-8 w-max">
            {PASILLOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <figure
                  className="w-[260px] md:w-[330px] shrink-0 border-4"
                  style={{ borderColor: C.muro, boxShadow: `8px 8px 0 ${C.rojo}` }}
                >
                  <div className="relative aspect-[4/5]">
                    <Image src={p.img} alt={p.alt} fill sizes="330px" className="object-cover" />
                  </div>
                  <figcaption className="px-4 py-3" style={{ backgroundColor: C.muro }}>
                    <p className="font-bold uppercase tracking-tight text-sm md:text-base" style={{ color: C.ink }}>
                      {p.t}
                    </p>
                    <p className="text-xs md:text-sm mt-0.5" style={{ color: C.muted }}>{p.d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <div className="w-[30px] shrink-0" aria-hidden="true" />
          </div>
        </div>
        <p className="max-w-6xl mx-auto px-5 md:px-8 mt-2 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.sombra }}>
          Desliza para recorrer el local →
        </p>
      </section>

      {/* ── RESEÑAS: cartelones ───────────────────────────── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.muroHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end gap-6 justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: C.azul }}>
                  Letrero n°3
                </p>
                <h2
                  className="mt-4 uppercase leading-none"
                  style={{ fontFamily: 'var(--font-painted)', fontWeight: 700, fontSize: 'clamp(2.2rem,7vw,4.6rem)' }}
                >
                  Lo dice la gente
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ fontFamily: 'var(--font-painted)', fontWeight: 700, fontSize: 'clamp(3rem,8vw,4.5rem)', color: C.rojo, lineHeight: 1 }}>
                  {BIZ.rating}
                </span>
                <div>
                  <Stars value={4.6} color={C.rojo} className="w-4 h-4" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] mt-1" style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas · Google
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <blockquote
                  className="h-full border-4 p-5 flex flex-col"
                  style={{ borderColor: C.ink, backgroundColor: C.muro, boxShadow: `7px 7px 0 ${i === 1 ? C.azul : C.rojo}` }}
                >
                  <Stars value={r.estrellas} color={C.rojo} className="w-3.5 h-3.5" />
                  <p className="mt-3 text-base md:text-lg font-medium leading-relaxed flex-1">“{r.texto}”</p>
                  <footer className="mt-4 pt-3 border-t-2 border-dashed" style={{ borderColor: C.sombra }}>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                      {r.nombre} · Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
            Textos resumidos de reseñas publicadas en Google Maps
          </p>
        </div>
      </section>

      {/* ── LA ESQUINA: horario + mapa ────────────────────── */}
      <section id="esquina" className="py-16 md:py-24" style={{ backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: C.muro }}>
                  Letrero n°4
                </p>
                <h2
                  className="mt-4 uppercase leading-[0.95] text-white"
                  style={{ fontFamily: 'var(--font-painted)', fontWeight: 700, fontSize: 'clamp(2.2rem,7vw,4.2rem)' }}
                >
                  Caiga a la esquina
                </h2>
                <div className="mt-6 space-y-2 font-mono text-xs md:text-sm text-white">
                  {HORARIO.map((h) => (
                    <div key={h.d} className="flex justify-between gap-4 py-2 border-b border-white/40">
                      <span className="uppercase tracking-[0.12em] text-white/80">{h.d}</span>
                      <span className="font-semibold text-right">{h.h}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm md:text-base text-white/90 leading-relaxed">
                  {BIZ.address}, {BIZ.city}. Almuerzo de 13:00 a 15:00 entre semana.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={TEL_LINK}
                    className="inline-flex items-center justify-center h-[52px] px-7 font-mono text-sm font-semibold uppercase tracking-[0.14em]"
                    style={{ backgroundColor: C.muro, color: C.ink }}
                  >
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center h-[52px] px-7 font-mono text-sm font-semibold uppercase tracking-[0.14em] border-2 border-white text-white"
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] border-4 border-white overflow-hidden" style={{ boxShadow: `8px 8px 0 ${C.ink}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="py-8 pb-6" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] space-y-2" style={{ color: 'rgba(250,246,236,0.85)' }}>
          <p>
            {BIZ.name} · {BIZ.address}, {BIZ.city} ·{' '}
            <a href={TEL_LINK} className="underline underline-offset-2" style={{ color: '#FFB3BE' }}>
              {BIZ.phoneDisplay}
            </a>
          </p>
          <p style={{ color: 'rgba(250,246,236,0.62)' }}>
            Maqueta de Sitiazo: datos reales de Google Maps; textos y composición de muestra.
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.rojo} />
    </main>
  )
}
