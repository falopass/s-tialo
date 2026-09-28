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
  mist: '#EEF7F9',
  white: '#FFFFFF',
  aqua: '#0E7C8C',
  aquaDeep: '#0A5C68',
  navy: '#0F2A33',
  lime: '#D9F25A',
  ink: '#12262D',
  muted: '#4E6570',
  line: 'rgba(15,42,51,0.12)',
}

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

function Burbujas({ id, color, opacity = 0.18 }: { id: string; color: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="18" r="9" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="50" cy="44" r="14" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="60" cy="10" r="4" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="24" cy="58" r="5" fill="none" stroke={color} strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  )
}

function Rayo({ className = '', color = C.lime }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true" focusable="false">
      <path d="M14 0 2 18h8l-2 14 14-20h-9Z" fill={color} />
    </svg>
  )
}

function TamborScene() {
  const ropa = [
    { x: 90, w: 70, h: 120, color: '#F6B8C8' },
    { x: 180, w: 60, h: 100, color: '#FFFFFF' },
    { x: 262, w: 76, h: 130, color: '#9CD3DE' },
    { x: 360, w: 62, h: 105, color: C.lime },
  ]
  return (
    <svg viewBox="0 0 520 380" className="w-full h-auto" role="img" aria-label="Ilustración de ropa colgada secándose con burbujas de jabón">
      <defs>
        <clipPath id="lf-clip">
          <rect width="520" height="380" rx="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#lf-clip)">
        <rect width="520" height="380" fill={C.aqua} />
        <rect width="520" height="380" fill="#FFFFFF" opacity="0.06" />
        {[
          [60, 300, 26],
          [120, 340, 14],
          [440, 70, 30],
          [480, 130, 12],
          [40, 90, 10],
          [400, 330, 18],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
        ))}
        <path d="M30 70 Q 260 110 490 70" stroke={C.navy} strokeWidth="3" fill="none" />
        {ropa.map((p, i) => {
          const y = 76 + Math.sin((p.x / 520) * Math.PI) * 32
          return (
            <g key={i} transform={`translate(${p.x} ${y})`}>
              <path d={`M0 0 v${p.h} h${p.w} v-${p.h} Z`} fill={p.color} />
              <path d={`M0 0 h${p.w}`} stroke={C.navy} strokeWidth="1.5" opacity="0.3" />
              <path d="M8 -12 v18 M-2 6 h20" stroke={C.navy} strokeWidth="3" strokeLinecap="round" />
              <path d={`M${p.w - 8} -12 v18 M${p.w - 18} 6 h20`} stroke={C.navy} strokeWidth="3" strokeLinecap="round" />
              <path d={`M${p.w * 0.5} 0 v${p.h}`} stroke={C.navy} strokeWidth="1" opacity="0.15" />
            </g>
          )
        })}
        <g transform="translate(360 220)">
          <rect x="0" y="0" width="130" height="130" rx="14" fill="#FFFFFF" />
          <rect x="10" y="10" width="110" height="18" rx="6" fill={C.mist} />
          <circle cx="104" cy="19" r="5" fill={C.lime} />
          <circle cx="86" cy="19" r="5" fill={C.aqua} />
          <circle cx="65" cy="82" r="38" fill={C.aquaDeep} />
          <circle cx="65" cy="82" r="30" fill={C.aqua} />
          <path d="M45 92 Q 65 70 85 92" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="58" cy="76" r="4" fill="#FFFFFF" opacity="0.8" />
        </g>
        <g transform="translate(60 250)">
          <path d="M14 0 2 18h8l-2 14 14-20h-9Z" fill={C.lime} transform="scale(3.2)" />
        </g>
      </g>
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
  tone: 'lime' | 'navy' | 'ghost'
  external?: boolean
}) {
  const st =
    tone === 'lime'
      ? { backgroundColor: C.lime, color: C.navy }
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
        theme={{ over: 'dark', bar: 'rgba(14,124,140,0.94)', ink: C.white, line: 'rgba(255,255,255,0.18)', btnBg: C.lime, btnInk: C.navy }}
        ctaLabel="Consultar"
      />

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-16" style={{ backgroundColor: C.aqua }}>
        <Burbujas id="lf-hero" color="#FFFFFF" opacity={0.22} />
        <div className="relative max-w-6xl mx-auto px-5 text-center">
          <Reveal>
            <p className={`${display.className} inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide`} style={{ backgroundColor: C.navy, color: C.lime }}>
              <Rayo className="w-3 h-4" /> Desde Talca · 3 sucursales
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} mt-5 text-[40px] leading-[1.02] md:text-[72px] font-black mx-auto max-w-4xl`} style={{ color: C.white }}>
              Ropa limpia, <span style={{ color: C.lime }}>rápido</span> y sin vueltas
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
              <Btn href={WA_LINK} tone="lime">Consultar por WhatsApp</Btn>
              <Btn href="#sucursales" tone="ghost" external={false}>Ver sucursales</Btn>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 max-w-3xl mx-auto rounded-[30px]" style={{ boxShadow: '0 30px 60px rgba(10,92,104,0.45)' }}>
              <TamborScene />
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
                <p className={`${display.className} text-xs font-bold tracking-widest uppercase`} style={{ color: C.aquaDeep }}>Servicios</p>
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
                <article className="relative h-full rounded-3xl p-7 overflow-hidden" style={{ backgroundColor: i === 1 ? C.navy : C.white, boxShadow: '0 14px 34px rgba(15,42,51,0.10)' }}>
                  {i === 1 && <Burbujas id="lf-card" color={C.aqua} opacity={0.4} />}
                  <div className="relative">
                    <span className={`${display.className} inline-flex w-11 h-11 items-center justify-center rounded-2xl text-lg font-black`} style={{ backgroundColor: i === 1 ? C.lime : C.mist, color: C.navy }}>
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

      {/* PROCESO */}
      <section id="proceso" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-xs font-bold tracking-widest uppercase`} style={{ color: C.aquaDeep }}>Cómo funciona</p>
            <h2 className={`${display.className} mt-2 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.navy }}>
              Tres pasos, <span style={{ color: C.aqua }}>cero enredo</span>
            </h2>
          </Reveal>
          <ol className="mt-10 grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] border-t-2 border-dashed" style={{ borderColor: C.line }} aria-hidden="true" />
            {PASOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <li className="relative">
                  <span className={`${display.className} relative z-10 inline-flex w-12 h-12 items-center justify-center rounded-full text-lg font-black`} style={{ backgroundColor: C.aqua, color: C.white, boxShadow: `0 0 0 8px ${C.white}` }}>
                    {i + 1}
                  </span>
                  <h3 className={`${display.className} mt-4 text-lg font-bold`} style={{ color: C.navy }}>{p.t}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: C.muted }}>{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <div className="mt-10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between" style={{ backgroundColor: C.mist }}>
              <div>
                <p className={`${display.className} text-lg font-bold`} style={{ color: C.navy }}>¿Empresa, hotel o restaurante?</p>
                <p className="mt-1" style={{ color: C.muted }}>
                  Lavandería industrial con control de calidad, reparación de prendas y renting de mantelería y ropa blanca.
                </p>
              </div>
              <div className="shrink-0"><Btn href={WA_LINK} tone="navy">Cotizar por WhatsApp</Btn></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SUCURSALES */}
      <section id="sucursales" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.navy }}>
        <Burbujas id="lf-suc" color={C.aqua} opacity={0.35} />
        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-xs font-bold tracking-widest uppercase`} style={{ color: C.lime }}>Sucursales</p>
            <h2 className={`${display.className} mt-2 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.white }}>
              Tres puntos en Talca
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.name} delay={i * 90}>
                <article className="h-full rounded-3xl p-6 flex flex-col" style={{ backgroundColor: C.white, boxShadow: '0 14px 34px rgba(0,0,0,0.25)' }}>
                  <div className="flex items-center gap-2">
                    <Rayo className="w-3 h-4" color={C.aqua} />
                    <h3 className={`${display.className} text-lg font-bold`} style={{ color: C.navy }}>{b.name}</h3>
                  </div>
                  <p className="mt-3 font-semibold" style={{ color: C.ink }}>{b.address}</p>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{b.hours}</p>
                  <a
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mt-auto pt-5 inline-flex items-center gap-1 text-sm font-bold tap-44`}
                    style={{ color: C.aquaDeep }}
                  >
                    Cómo llegar →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-8 rounded-3xl overflow-hidden" style={{ border: `4px solid ${C.aqua}` }}>
              <LazyMap src={MAP_EMBED} title="Mapa de Lavaseco Flash Casa Matriz" className="w-full h-[280px] md:h-[360px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.lime }}>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Rayo className="w-10 h-14 mx-auto" color={C.navy} />
          <h2 className={`${display.className} mt-4 text-3xl md:text-5xl font-black leading-tight`} style={{ color: C.navy }}>
            ¿Qué necesitas lavar hoy?
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#2A3E2C' }}>Escríbenos por WhatsApp al {BIZ.phoneDisplay} y te orientamos.</p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="navy">Consultar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.aquaDeep, color: 'rgba(255,255,255,0.8)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl font-black inline-flex items-center gap-2`} style={{ color: C.white }}>
              <Rayo className="w-3 h-4" /> {BIZ.name}
            </p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.city}</p>
          </div>
          <nav className="flex gap-4 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline">{l.label}</a>
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
