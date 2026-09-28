import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, BRANCHES, SERVICES, WA_LINK } from './content'

const display = localFont({ src: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900' })
const body = localFont({ src: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' })

export const metadata: Metadata = demoMetadata({
  slug: 'lavaseco-flash',
  title: 'Lavaseco Flash — Lavandería y lavaseco en Talca',
  description:
    'Lavado en seco y en agua, planchado, lavandería industrial y renting de ropa blanca. Tres sucursales en Talca. Consulta por WhatsApp.',
})

const C = {
  mist: '#EDF3FA',
  white: '#FFFFFF',
  blue: '#2F63B0',
  blueDeep: '#1D4380',
  navy: '#0E2240',
  orange: '#F28C28',
  ink: '#14253E',
  muted: '#4E5F77',
  line: 'rgba(14,34,64,0.12)',
}

const IMG = '/demos/lavaseco-flash'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sucursales', href: '#sucursales' },
  { label: 'Cómo funciona', href: '#proceso' },
]

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent('Lavaseco Flash, 1 Norte esquina 3 Oriente, Talca, Chile')}&output=embed`

const PASOS = [
  { t: 'Trae o escribe', d: 'Pasa por la sucursal más cercana o consulta antes por WhatsApp qué necesitas lavar.' },
  { t: 'Revisamos la prenda', d: 'Definimos el tratamiento: en seco o en agua, planchado, y te indicamos la fecha de retiro.' },
  { t: 'Retira lista', d: 'Limpia, planchada y protegida. Para empresas, coordinamos entrega y renting.' },
]

const PRENDAS = ['Trajes y ternos', 'Vestidos', 'Abrigos y parkas', 'Plumones', 'Cortinas', 'Alfombras', 'Mantelería', 'Ropa blanca', 'Uniformes']

const FOTOS = [
  { src: 'industrial.webp', alt: 'Sector industrial de Lavaseco Flash: lavadoras de gran capacidad' },
  { src: 'maquina.webp', alt: 'Lavadora industrial en funcionamiento en Lavaseco Flash' },
  { src: 'toallas.webp', alt: 'Toallas limpias y plegadas listas para entrega en Lavaseco Flash' },
  { src: 'tambor.webp', alt: 'Interior del tambor de una secadora industrial de Lavaseco Flash' },
]

function Burbujas({ color, opacity = 0.18 }: { color: string; opacity?: number }) {
  // mosaico de anillos con gradientes, sin svg
  const ring = (x: number, y: number, r: number) =>
    `radial-gradient(circle ${r + 2}px at ${x}px ${y}px, transparent ${r - 1.5}px, ${color} ${r - 1}px, ${color} ${r + 1}px, transparent ${r + 1.5}px)`
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        opacity,
        backgroundImage: `${ring(14, 18, 9)}, ${ring(50, 44, 14)}, ${ring(60, 10, 4)}, ${ring(24, 58, 5)}`,
        backgroundSize: '72px 72px',
      }}
    />
  )
}

function Rayo({ className = '', color = C.orange }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true" focusable="false">
      <path d="M14 0 2 18h8l-2 14 14-20h-9Z" fill={color} />
    </svg>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'accent' | 'navy' | 'ghost'
  external?: boolean
}) {
  const st =
    tone === 'accent'
      ? { backgroundColor: C.orange, color: C.navy }
      : tone === 'navy'
        ? { backgroundColor: C.navy, color: C.white }
        : { backgroundColor: 'transparent', color: C.white, boxShadow: `inset 0 0 0 2px rgba(255,255,255,0.7)` }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center justify-center px-6 py-3 rounded-2xl text-[15px] font-bold transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function LavasecoFlashPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.mist, color: C.ink }}>
      <BlitzNav
        name="Lavaseco Flash"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        logoSrc={`${IMG}/logo-cuadrado.webp`}
        theme={{ over: 'dark', bar: 'rgba(47,99,176,0.94)', ink: C.white, line: 'rgba(255,255,255,0.18)', btnBg: C.orange, btnInk: C.navy }}
        ctaLabel="Consultar"
      />

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-16" style={{ backgroundColor: C.blue }}>
        <Burbujas color="#FFFFFF" opacity={0.22} />
        <div className="relative max-w-6xl mx-auto px-5 text-center">
          <Reveal>
            <p className={`${display.className} inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide`} style={{ backgroundColor: C.navy, color: C.orange }}>
              <Rayo className="w-3 h-4" /> Desde Talca · 3 sucursales
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} mt-5 text-[40px] leading-[1.02] md:text-[72px] font-black mx-auto max-w-4xl`} style={{ color: C.white }}>
              Ropa limpia,{' '}
              <span className="inline-block px-3 rounded-2xl" style={{ backgroundColor: C.orange, color: C.navy }}>
                rápido
              </span>{' '}
              y sin vueltas
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.white }}>
              Lavado en seco y en agua, planchado, lavandería industrial y renting de ropa blanca. Lavaseco Flash, en
              Talca.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Btn href={WA_LINK} tone="accent">Consultar por WhatsApp</Btn>
              <Btn href="#sucursales" tone="ghost" external={false}>Ver sucursales</Btn>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 max-w-3xl mx-auto rounded-[30px] overflow-hidden" style={{ boxShadow: '0 30px 60px rgba(10,25,50,0.45)' }}>
              <img
                src={`${IMG}/hero.webp`}
                alt="Interior de Lavaseco Flash: fila de lavadoras y secadoras en el local"
                className="w-full h-60 md:h-[400px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CINTA DE PRENDAS */}
      <div className="overflow-hidden py-3" style={{ backgroundColor: C.navy }}>
        <style>{`@keyframes lf-cinta{to{transform:translateX(-50%)}}`}</style>
        <div className={`${display.className} flex gap-6 whitespace-nowrap text-sm font-semibold w-max`} style={{ color: C.white, animation: 'lf-cinta 30s linear infinite' }}>
          {[...PRENDAS, ...PRENDAS].map((p, i) => (
            <span key={i} className="flex items-center gap-6">
              {p}
              <Rayo className="w-2.5 h-3.5" />
            </span>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="md:flex md:items-end md:justify-between gap-8">
              <div>
                <p className={`${display.className} text-xs font-bold tracking-widest uppercase`} style={{ color: C.blueDeep }}>Servicios</p>
                <h2 className={`${display.className} mt-2 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.navy }}>
                  Del hogar a la industria
                </h2>
              </div>
              <p className="mt-3 md:mt-0 max-w-sm" style={{ color: C.muted }}>
                Tres líneas de servicio con el mismo cuidado: la prenda vuelve limpia, planchada y a tiempo.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <article className="relative h-full rounded-3xl p-7 overflow-hidden" style={{ backgroundColor: i === 1 ? C.navy : C.white, boxShadow: '0 14px 34px rgba(14,34,64,0.10)' }}>
                  {i === 1 && <Burbujas color={C.blue} opacity={0.4} />}
                  <div className="relative">
                    <span className={`${display.className} inline-flex w-11 h-11 items-center justify-center rounded-2xl text-lg font-black`} style={{ backgroundColor: i === 1 ? C.orange : C.mist, color: C.navy }}>
                      {i + 1}
                    </span>
                    <h3 className={`${display.className} mt-5 text-xl font-bold`} style={{ color: i === 1 ? C.white : C.navy }}>{s.name}</h3>
                    <p className="mt-2 leading-relaxed" style={{ color: i === 1 ? 'rgba(255,255,255,0.82)' : C.muted }}>{s.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EL LOCAL POR DENTRO */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="md:flex md:items-end md:justify-between gap-8">
              <div>
                <p className={`${display.className} text-xs font-bold tracking-widest uppercase`} style={{ color: C.blueDeep }}>El local por dentro</p>
                <h2 className={`${display.className} mt-2 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.navy }}>
                  Así trabajamos
                </h2>
              </div>
              <p className="mt-3 md:mt-0 max-w-sm" style={{ color: C.muted }}>
                Máquinas industriales, reparto y prendas listas: fotos reales de nuestras sucursales.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {FOTOS.map((f, i) => (
              <Reveal
                key={f.src}
                delay={i * 70}
                className={i === 0 ? 'col-span-2 row-span-2' : i === FOTOS.length - 1 ? 'col-span-2' : undefined}
              >
                <img
                  src={`${IMG}/${f.src}`}
                  alt={f.alt}
                  loading="lazy"
                  className={`w-full object-cover rounded-3xl ${i === 0 ? 'h-64 md:h-[432px]' : i === FOTOS.length - 1 ? 'h-36 md:h-[208px]' : 'h-36 md:h-52'}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-xs font-bold tracking-widest uppercase`} style={{ color: C.blueDeep }}>Cómo funciona</p>
            <h2 className={`${display.className} mt-2 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.navy }}>
              Tres pasos, <span style={{ color: C.blue }}>cero enredo</span>
            </h2>
          </Reveal>
          <ol className="mt-10 grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] border-t-2 border-dashed" style={{ borderColor: C.line }} aria-hidden="true" />
            {PASOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <li className="relative">
                  <span className={`${display.className} relative z-10 inline-flex w-12 h-12 items-center justify-center rounded-full text-lg font-black`} style={{ backgroundColor: C.blue, color: C.white, boxShadow: `0 0 0 8px ${C.white}` }}>
                    {i + 1}
                  </span>
                  <h3 className={`${display.className} mt-4 text-lg font-bold`} style={{ color: C.navy }}>{p.t}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: C.muted }}>{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <div className="mt-10 rounded-3xl overflow-hidden flex flex-col md:flex-row md:items-stretch" style={{ backgroundColor: C.mist }}>
              <img
                src={`${IMG}/furgon.webp`}
                alt="Furgón de reparto de Lavaseco Flash en Talca"
                loading="lazy"
                className="w-full md:w-80 h-44 md:h-auto object-cover shrink-0"
              />
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between flex-1">
                <div>
                  <p className={`${display.className} text-lg font-bold`} style={{ color: C.navy }}>¿Empresa, hotel o restaurante?</p>
                  <p className="mt-1" style={{ color: C.muted }}>
                    Lavandería industrial con control de calidad, reparación de prendas y renting de mantelería y ropa blanca.
                  </p>
                </div>
                <div className="shrink-0"><Btn href={WA_LINK} tone="navy">Cotizar por WhatsApp</Btn></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SUCURSALES */}
      <section id="sucursales" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.navy }}>
        <Burbujas color={C.blue} opacity={0.35} />
        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-xs font-bold tracking-widest uppercase`} style={{ color: C.orange }}>Sucursales</p>
            <h2 className={`${display.className} mt-2 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.white }}>
              Tres puntos en Talca
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.name} delay={i * 90}>
                <article className="h-full rounded-3xl p-6 flex flex-col" style={{ backgroundColor: C.white, boxShadow: '0 14px 34px rgba(0,0,0,0.25)' }}>
                  <div className="flex items-center gap-2">
                    <Rayo className="w-3 h-4" color={C.blue} />
                    <h3 className={`${display.className} text-lg font-bold`} style={{ color: C.navy }}>{b.name}</h3>
                  </div>
                  <p className="mt-3 font-semibold" style={{ color: C.ink }}>{b.address}</p>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{b.hours}</p>
                  <a
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mt-auto pt-5 inline-flex items-center gap-1 text-sm font-bold tap-44`}
                    style={{ color: C.blueDeep }}
                  >
                    Cómo llegar →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-8 rounded-3xl overflow-hidden" style={{ border: `4px solid ${C.blue}` }}>
              <LazyMap src={MAP_EMBED} title="Mapa de Lavaseco Flash Casa Matriz" className="w-full h-[280px] md:h-[360px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.orange }}>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Rayo className="w-10 h-14 mx-auto" color={C.navy} />
          <h2 className={`${display.className} mt-4 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.navy }}>
            ¿Qué necesitas lavar hoy?
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(14,34,64,0.85)' }}>Escríbenos por WhatsApp al {BIZ.phoneDisplay} y te orientamos.</p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="navy">Consultar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.blueDeep, color: 'rgba(255,255,255,0.8)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-block rounded-2xl px-4 py-2" style={{ backgroundColor: C.white }}>
              <img src={`${IMG}/logo.webp`} alt="Lavaseco Flash" className="h-12 w-auto" />
            </span>
            <p className="text-sm mt-2">{BIZ.category} · {BIZ.city}</p>
          </div>
          <nav className="flex gap-4 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
