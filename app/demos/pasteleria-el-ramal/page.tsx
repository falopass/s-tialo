import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK, WA_LINK_MAYOR } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900' },
  ],
})
const body = localFont({ src: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000' })

// Paleta sacada de su marca: rojo del logo, crema de papel de estraza
// y cacao de la vitrina.
const C = {
  papel: '#FBF1DC',
  crema: '#FFF9EC',
  rojo: '#8E1F24',
  rojoOsc: '#6E161B',
  cacao: '#331D17',
  miel: '#D9A441',
  muted: '#6F4E3D',
  line: 'rgba(51,29,23,0.14)',
}

const IMG2 = '/demos/pasteleria-el-ramal'

export const metadata: Metadata = demoMetadata({
  slug: 'pasteleria-el-ramal',
  title: 'Pastelería El Ramal - Pastelería, botillería y banquetería en Puertas del Sur, Talca',
  description:
    'Pastelería casera, fábrica de empanadas, botillería y banquetería en C. Río Claro 133, Puertas del Sur, Talca. Abierto todos los días hasta las 22:00. Pedidos y venta al por mayor por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Al por mayor', href: '#reparto' },
  { label: 'Dónde', href: '#donde' },
]

const LETRERO = [
  { t: 'Pastelería casera', d: 'Tortas, kuchenes, queques y dulces hechos en su propia cocina.' },
  { t: 'Fábrica de empanadas', d: 'Producen empanadas que también llegan a otros negocios.' },
  { t: 'Banquetería y eventos', d: 'Cóctel y banquetería para matrimonios y cumpleaños.' },
  { t: 'Botillería, vinos y licores', d: 'En el mismo local, para llevarse todo en una pasada.' },
]

const CINTA = [
  'Pastelería casera',
  'Fábrica de empanadas',
  'Tortas de encargo',
  'Banquetería',
  'Botillería',
  'Vinos y licores',
  'Distribución al por mayor',
]

const HORNO = [
  { src: 'torta.webp', alt: 'Torta de merengue y manjar de la vitrina de El Ramal' },
  { src: 'kuchen.webp', alt: 'Kuchenes y berlines con chocolate de la vitrina' },
  { src: 'kuchen-frutas.webp', alt: 'Kuchen de frutas frescas publicado en el Instagram de El Ramal' },
  { src: 'dulces.webp', alt: 'Pasteles, berlines y dulces variados en la vitrina del local' },
]

const RESENAS = [
  {
    q: 'Muy lindas las vitrinas. Rico todo, especial para preparar una rica oncesita. Todo en un solo lugar.',
    n: 'Constanza Andrea Sazo Perez',
    s: 5,
  },
  {
    q: 'Muy rico todo.',
    n: 'Francisca Pinto Sepúlveda',
    s: 5,
  },
]

/** Blonda de papel: círculo festoneado bajo cada foto de la vitrina. */
function Blonda({ className = '' }: { className?: string }) {
  const bumps = Array.from({ length: 18 }, (_, i) => (i * 360) / 18)
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      {bumps.map((deg) => (
        <circle
          key={deg}
          cx={50 + 44 * Math.cos((deg * Math.PI) / 180)}
          cy={50 + 44 * Math.sin((deg * Math.PI) / 180)}
          r="7"
          fill="#FFF9EC"
        />
      ))}
      <circle cx="50" cy="50" r="42" fill="#FFF9EC" />
    </svg>
  )
}

/** Puntos de harina como textura suave de fondo. */
function Harina({ id, color, opacity = 0.3 }: { id: string; color: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="8" r="1.3" fill={color} />
          <circle cx="24" cy="20" r="1" fill={color} />
          <circle cx="14" cy="30" r="0.8" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'rojo' | 'crema' | 'outline'; external?: boolean }) {
  const st =
    tone === 'rojo' ? { backgroundColor: C.rojo, color: C.crema }
    : tone === 'crema' ? { backgroundColor: C.crema, color: C.rojo }
    : { border: `1.5px solid ${C.cacao}`, color: C.cacao }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-extrabold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.papel, color: C.cacao }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} text-2xl`}
        theme={{ over: 'light', bar: 'rgba(251,241,220,0.94)', ink: C.cacao, line: C.line, btnBg: C.rojo, btnInk: C.crema }}
        ctaLabel="Pedir"
        logoSrc={`${IMG2}/logo.webp`}
      />

      <main id="inicio">
        {/* HERO: la vitrina como carta de presentación */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-16">
          <Harina id="er-harina-hero" color={C.rojo} opacity={0.12} />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <h1 className={`${display.className} font-bold leading-[0.95] text-[46px] sm:text-7xl lg:text-[84px] tracking-tight`} style={{ color: C.cacao }}>
                  Todo lo rico del barrio, <span style={{ color: C.rojo }}>en una vitrina</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Pastelería casera, fábrica de empanadas, botillería y banquetería en Puertas del Sur, Talca. Abierto todos los días hasta las 22:00.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="rojo">Pedir por WhatsApp</Btn>
                  <Btn href="#vitrina" tone="outline" external={false}>Ver la vitrina</Btn>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold" style={{ color: C.cacao }}>
                  <Stars value={BIZ.rating} color={C.miel} />
                  {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <figure className="relative max-w-md mx-auto md:max-w-none">
                <div className="overflow-hidden rounded-t-[10rem] rounded-b-3xl border-4" style={{ borderColor: C.crema, boxShadow: '0 20px 50px rgba(51,29,23,0.22)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG2}/vitrina.webp`}
                    alt="Vitrina de El Ramal llena de queques, kuchenes y dulces caseros"
                    className="w-full h-auto aspect-[4/5] object-cover"
                    loading="eager"
                  />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG2}/logo.webp`}
                  alt="Logo de Pastelería El Ramal"
                  className="absolute -top-5 -left-3 md:-left-6 w-24 h-24 rounded-full border-4 shadow-lg"
                  style={{ borderColor: C.crema }}
                />
                <figcaption
                  className={`${display.className} absolute -bottom-4 right-5 rounded-full px-4 py-2 text-base shadow-lg`}
                  style={{ backgroundColor: C.rojo, color: C.crema }}
                >
                  la vitrina de hoy
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* CINTA LETRERO: los servicios como en el letrero de la fachada */}
        <div className="overflow-hidden py-4" style={{ backgroundColor: C.rojo }} aria-hidden="true">
          <style>{`@keyframes er-cinta{to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.er-cinta-anim{animation:none!important}}`}</style>
          <div className={`${display.className} er-cinta-anim flex gap-10 whitespace-nowrap uppercase tracking-wide text-lg w-max`} style={{ color: C.crema, animation: 'er-cinta 30s linear infinite' }}>
            {[...CINTA, ...CINTA].map((s, i) => (
              <span key={i} className="flex items-center gap-10">
                {s}
                <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: C.miel }} />
              </span>
            ))}
          </div>
        </div>

        {/* LA CASA: el letrero completo, como la pizarra del local */}
        <section id="casa" className="relative scroll-mt-16">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <p className={`${display.className} uppercase tracking-widest text-sm text-center`} style={{ color: C.rojo }}>La casa completa</p>
              <h2 className={`${display.className} mt-3 text-4xl sm:text-6xl font-bold leading-[1] tracking-tight text-center max-w-3xl mx-auto`} style={{ color: C.cacao }}>
                No es solo pastelería
              </h2>
              <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
                El letrero de la fachada lo dice todo: aquí se hornea, se produce, se vende y se celebra.
              </p>
            </Reveal>
            <div className="mt-12 rounded-[2rem] p-6 md:p-10 relative overflow-hidden" style={{ backgroundColor: C.cacao }}>
              <Harina id="er-harina-casa" color={C.crema} opacity={0.08} />
              <div className="relative grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {LETRERO.map((s, i) => (
                  <Reveal key={s.t} delay={i * 90}>
                    <div className="flex gap-4 items-start">
                      <span className={`${display.className} shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg`} style={{ backgroundColor: C.rojo, color: C.crema }} aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className={`${display.className} text-2xl leading-tight`} style={{ color: C.crema }}>{s.t}</h3>
                        <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: 'rgba(255,249,236,0.72)' }}>{s.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LA VITRINA: dulces sobre blonda, fotos reales */}
        <section id="vitrina" className="scroll-mt-16 relative overflow-hidden" style={{ backgroundColor: '#F3E2BE' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-6xl font-bold leading-[1] tracking-tight text-center`} style={{ color: C.cacao }}>
                Lo que sale <span style={{ color: C.rojo }}>del horno</span>
              </h2>
              <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
                Fotos reales de su vitrina y de su Instagram. La selección cambia todos los días.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-4xl mx-auto">
              {HORNO.map((f, i) => (
                <Reveal key={f.src} delay={i * 90} className={i % 2 === 1 ? 'md:translate-y-6' : ''}>
                  <figure className="relative">
                    <Blonda className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)]" />
                    <div className="relative overflow-hidden rounded-full aspect-square" style={{ boxShadow: '0 10px 26px rgba(51,29,23,0.18)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG2}/${f.src}`} alt={f.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-10 text-center">
                <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className={`${display.className} inline-flex items-center gap-2 text-lg underline underline-offset-4 decoration-2 tap-44`} style={{ color: C.rojo, textDecorationColor: 'rgba(142,31,36,0.35)' }}>
                  Más dulces en su Instagram →
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* REPARTO: la camioneta del por mayor */}
        <section id="reparto" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <figure className="relative">
                <div className="overflow-hidden rounded-3xl border-4 rotate-[-1.5deg]" style={{ borderColor: C.crema, boxShadow: '0 16px 40px rgba(51,29,23,0.18)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG2}/camioneta.webp`} alt="Camioneta de reparto de El Ramal con su logo y teléfono" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <figcaption className={`${display.className} absolute -bottom-4 left-6 rounded-full px-4 py-2 text-base shadow-lg`} style={{ backgroundColor: C.cacao, color: C.crema }}>
                  la camioneta del reparto
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1] tracking-tight`} style={{ color: C.cacao }}>
                También salen <span style={{ color: C.rojo }}>al por mayor</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: C.muted }}>
                Su propia camioneta lo anuncia: distribución al por mayor de pastelería casera y cóctel en general. Si tienes un almacén, botillería o local, El Ramal te puede abastecer.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK_MAYOR} tone="rojo">Consultar por mayor</Btn>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PERSONAS Y RESEÑAS */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.cacao }}>
          <Harina id="er-harina-resenas" color={C.crema} opacity={0.08} />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
              <Reveal>
                <div className="relative max-w-sm mx-auto md:max-w-none">
                  <div className="overflow-hidden rounded-3xl border-4 w-4/5" style={{ borderColor: C.crema, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG2}/equipo.webp`} alt="El equipo de El Ramal en su cocina" className="w-full aspect-[4/5] object-cover" loading="lazy" />
                  </div>
                  <div className="absolute -bottom-6 -right-2 md:right-0 w-2/5 overflow-hidden rounded-2xl border-4 rotate-3" style={{ borderColor: C.crema, boxShadow: '0 12px 30px rgba(0,0,0,0.35)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG2}/pastelero.webp`} alt="Pastelero de El Ramal en su cocina" className="w-full aspect-square object-cover" loading="lazy" />
                  </div>
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1] tracking-tight`} style={{ color: C.crema }}>
                    Hecho por personas, <span style={{ color: C.miel }}>querido por el barrio</span>
                  </h2>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold" style={{ color: C.crema }}>
                    <Stars value={BIZ.rating} color={C.miel} />
                    {BIZ.rating} en Google · {BIZ.reviews} reseñas
                  </p>
                </Reveal>
                <div className="mt-8 space-y-4">
                  {RESENAS.map((r, i) => (
                    <Reveal key={r.n} delay={i * 110}>
                      <blockquote className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(255,249,236,0.07)', borderLeft: `4px solid ${C.miel}` }}>
                        <p className="leading-relaxed" style={{ color: 'rgba(255,249,236,0.9)' }}>“{r.q}”</p>
                        <footer className="mt-3 flex items-center justify-between">
                          <cite className="not-italic text-sm font-bold" style={{ color: C.crema }}>{r.n}</cite>
                          <Stars value={r.s} color={C.miel} className="w-3.5 h-3.5" />
                        </footer>
                      </blockquote>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DÓNDE + HORARIO */}
        <section id="donde" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <Reveal>
              <p className={`${display.className} uppercase tracking-widest text-sm`} style={{ color: C.rojo }}>Dónde y cuándo</p>
              <h2 className={`${display.className} mt-3 text-4xl sm:text-5xl font-bold leading-[1] tracking-tight`} style={{ color: C.cacao }}>
                Abierto <span style={{ color: C.rojo }}>todos los días</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                De lunes a domingo, de 8:00 a 22:00. Pan para la once o dulce para la noche, siempre hay.
              </p>
              <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.cacao }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="rojo">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="outline">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
              <figure className="mt-8 overflow-hidden rounded-3xl border-4" style={{ borderColor: C.crema, boxShadow: '0 14px 36px rgba(51,29,23,0.16)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG2}/fachada.webp`} alt="Fachada de Pastelería El Ramal en C. Río Claro, Puertas del Sur" className="w-full aspect-[16/10] object-cover" loading="lazy" />
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-full md:min-h-[560px]" style={{ boxShadow: '0 14px 36px rgba(51,29,23,0.16)', backgroundColor: '#F3E2BE' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.rojo }}>
          <Harina id="er-harina-cta" color={C.crema} opacity={0.14} />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-6xl font-bold leading-[1] tracking-tight`} style={{ color: C.crema }}>
                ¿Se te antojó algo <span style={{ color: C.miel }}>de la vitrina?</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(255,249,236,0.9)' }}>
                Escribe por WhatsApp y consulta qué hay hoy, encarga tu torta o cotiza el reparto al por mayor.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="crema">Escribir a El Ramal</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: C.cacao, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,249,236,0.75)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,249,236,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
