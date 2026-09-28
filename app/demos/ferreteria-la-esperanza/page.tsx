import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, SEMANA, SERVICIOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '400 600', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  crema: '#FFF5E6',
  cremaHi: '#FFFCF5',
  azul: '#20509E',
  azulDeep: '#16386F',
  naranja: '#B85C08',
  naranjaTxt: '#9C5006',
  naranjaSoft: '#FFB865',
  ink: '#22201B',
  muted: '#57503F',
  line: 'rgba(34,32,27,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-la-esperanza',
  title: 'Ferretería La Esperanza — abre todos los días en San Fernando',
  description:
    'Ferretería y almacén de barrio en Feliciano Silva 348, San Fernando. Abierta también sábado y domingo, con CajaVecina. WhatsApp +56 9 5342 8899.',
})

// Sello circular "abre todos los días"
function Sello({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-[92px] h-[92px] md:w-[120px] md:h-[120px] rounded-full flex items-center justify-center ${className}`}
      style={{ backgroundColor: C.naranja, color: '#fff' }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]">
        <defs>
          <path id="sello-arco" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
        </defs>
        <text className="uppercase" style={{ fontSize: '10.5px', letterSpacing: '2.5px', fill: '#fff', fontFamily: 'var(--font-mono)' }}>
          <textPath href="#sello-arco">todos los días · todos los días ·</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9 relative" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <path d="M9 21V12h6v9" />
      </svg>
    </div>
  )
}

export default function FerreteriaLaEsperanza() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`}
      style={{ backgroundColor: C.crema, color: C.ink, fontFamily: 'var(--font-body)' }}
    >
      <BlitzNav
        name={BIZ.name}
        waLink={WA_LINK}
        theme={{ over: 'light', bar: C.azulDeep, ink: C.ink, line: C.line, btnBg: C.naranja, btnInk: '#fff' }}
        links={[
          { label: 'La tienda', href: '#tienda' },
          { label: 'La semana', href: '#semana' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Llegar', href: '#llegar' },
        ]}
        fontClass="font-mono"
      />

      {/* ── HERO: la puerta azul siempre abierta ──────────── */}
      <section className="pt-24 md:pt-32 pb-14" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-end">
            <div>
              <Reveal>
                <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.26em]" style={{ color: C.naranjaTxt }}>
                  {BIZ.address} · {BIZ.city}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1
                  className="mt-4 leading-[0.98] tracking-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.5rem,8.5vw,5.6rem)', color: C.azulDeep }}
                >
                  La ferretería que <span style={{ color: C.naranjaTxt }}>sí abre</span> el domingo
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
                  Ferretería La Esperanza es el almacén de Feliciano Silva: ferretería completa,
                  CajaVecina y despacho a domicilio — y abre los siete días de la semana.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    className="inline-flex items-center justify-center h-[52px] px-7 rounded-full font-bold text-sm uppercase tracking-wide"
                    style={{ backgroundColor: C.azul, color: '#fff' }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] flex items-center gap-2" style={{ color: C.muted }}>
                    <Stars value={4.3} color={C.naranjaTxt} className="w-3.5 h-3.5" />
                    {BIZ.rating} · {BIZ.reviews} reseñas
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="relative">
                <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden border-4" style={{ borderColor: C.azulDeep }}>
                  <Image
                    src={`${IMG}/e1.webp`}
                    alt="Entrada de Ferretería La Esperanza en Feliciano Silva, con puerta azul y letrero de CajaVecina"
                    fill
                    priority
                    sizes="(min-width:768px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <Sello className="absolute -bottom-5 -right-3 md:-right-5 shadow-lg" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LA SEMANA: 7 días ─────────────────────────────── */}
      <section id="semana" className="py-14 md:py-20" style={{ backgroundColor: C.azul }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em]" style={{ color: '#FFD9B0' }}>
              La semana completa
            </p>
            <h2
              className="mt-3 leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.7rem,5vw,3rem)', color: '#fff' }}
            >
              Lunes a domingo, sin excepción
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-7 gap-1.5 md:gap-3">
            {SEMANA.map((d, i) => (
              <Reveal key={d.d} delay={i * 60}>
                <div
                  className="rounded-xl md:rounded-2xl px-1 py-3 md:py-5 text-center"
                  style={{
                    backgroundColor: d.finde ? C.naranja : 'rgba(255,255,255,0.12)',
                    color: '#fff',
                  }}
                >
                  <p className="font-bold text-xs md:text-base uppercase">{d.d}</p>
                  <p className="font-mono text-[8px] md:text-[11px] mt-1 leading-snug" style={{ color: d.finde ? '#fff' : '#DCE7F9' }}>
                    {d.h}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-5 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Entre semana con almuerzo de 13:00 a 15:00. Sábado y domingo de corrido, 10:00 a 14:00.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LA TIENDA: 3 tarjetas ─────────────────────────── */}
      <section id="tienda" className="py-16 md:py-24" style={{ backgroundColor: C.cremaHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em]" style={{ color: C.naranjaTxt }}>
              Dentro del local
            </p>
            <h2
              className="mt-3 leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.7rem,5vw,3rem)', color: C.azulDeep }}
            >
              Ferretería, caja vecina y despacho a la casa
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <article className="rounded-3xl overflow-hidden border-2 h-full flex flex-col" style={{ borderColor: C.line, backgroundColor: C.crema }}>
                  <div className="relative aspect-[4/3]">
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: C.azulDeep, fontFamily: 'var(--font-display)' }}>
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>{s.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* mosaico de repisas */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: `${IMG}/e6.webp`, alt: 'Repisas con productos de ferretería en La Esperanza' },
              { img: `${IMG}/e3.webp`, alt: 'Materiales y cañerías en el interior de La Esperanza' },
              { img: `${IMG}/e7.webp`, alt: 'Interior de La Esperanza mirando hacia la reja de entrada' },
            ].map((f, i) => (
              <Reveal key={f.img} delay={i * 80}>
                <div className={`relative overflow-hidden rounded-2xl ${i === 2 ? 'col-span-2 md:col-span-1 aspect-[16/9] md:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                  <Image src={f.img} alt={f.alt} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ───────────────────────────────────────── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <Reveal>
              <div className="rounded-3xl p-6 md:p-8 text-center" style={{ backgroundColor: C.azulDeep }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3.5rem,10vw,5rem)', color: C.naranjaSoft, lineHeight: 1 }}>
                  {BIZ.rating}
                </p>
                <div className="mt-3 flex justify-center">
                  <Stars value={4.3} color="#fff" className="w-4 h-4" />
                </div>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2
                  className="leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.7rem,4.5vw,2.6rem)', color: C.azulDeep }}
                >
                  Lo que dicen los vecinos
                </h2>
              </Reveal>
              <div className="mt-6 space-y-5">
                {RESENAS.map((r, i) => (
                  <Reveal key={r.nombre} delay={i * 80}>
                    <figure className="rounded-2xl border-2 p-5" style={{ borderColor: C.line, backgroundColor: C.cremaHi }}>
                      <div className="flex items-center justify-between gap-3">
                        <Stars value={r.estrellas} color={C.naranjaTxt} className="w-3.5 h-3.5" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                          {r.nombre}
                        </span>
                      </div>
                      <blockquote className="mt-3 text-base md:text-lg leading-relaxed">“{r.texto}”</blockquote>
                    </figure>
                  </Reveal>
                ))}
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                Textos resumidos de reseñas publicadas en Google Maps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LLEGAR ────────────────────────────────────────── */}
      <section id="llegar" className="py-16 md:py-24" style={{ backgroundColor: C.azulDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.26em]" style={{ color: C.naranjaSoft }}>
                  Feliciano Silva 348
                </p>
                <h2
                  className="mt-3 leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem,5.5vw,3.2rem)', color: '#fff' }}
                >
                  Pregunte antes de salir: le contestan por WhatsApp
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {BIZ.address}, {BIZ.city}, Región de {BIZ.region}. Si necesita algo el fin de semana,
                  también hay respuesta.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    className="inline-flex items-center justify-center h-[52px] px-7 rounded-full font-bold text-sm uppercase tracking-wide"
                    style={{ backgroundColor: C.naranja, color: '#fff' }}
                  >
                    Escribir al {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center h-[52px] px-7 rounded-full font-bold text-sm uppercase tracking-wide border-2 border-white text-white"
                  >
                    Cómo llegar
                  </a>
                </div>
                <a href={TEL_LINK} className="mt-4 inline-block font-mono text-xs underline underline-offset-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  o llamar al mismo número
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] rounded-3xl border-4 border-white overflow-hidden">
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
        <div className="max-w-6xl mx-auto px-5 md:px-8 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] space-y-2" style={{ color: 'rgba(255,245,230,0.82)' }}>
          <p>
            {BIZ.name} · {BIZ.address}, {BIZ.city} ·{' '}
            <a href={WA_LINK} className="underline underline-offset-2" style={{ color: C.naranjaSoft }}>
              {BIZ.phoneDisplay}
            </a>
          </p>
          <p style={{ color: 'rgba(255,245,230,0.6)' }}>
            Maqueta de Sitiazo: datos reales de Google Maps; textos y composición de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
