import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_STOCK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// Paleta derivada de sus fotos: verde bosque del follaje, rosa de los rosales
// y crema de papel — con el sello-botánico del logo como motivo.
const C = {
  papel: '#F7F1E4',
  papelSoft: '#FDF9F0',
  bosque: '#22392C',
  bosqueDeep: '#16271D',
  hoja: '#5F7F5A',
  rosa: '#B94A6E',
  rosaSoft: '#EFD9DE',
  ink: '#22392C',
  muted: '#5B6B5E',
  line: 'rgba(34,57,44,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jardin-vivero-carolina',
  title: 'Jardin Vivero Carolina — Vivero en Curicó',
  description:
    'Vivero en Fundo La Obra, Curicó. Rosales, camelias, aromáticas y frutales, con consulta directa por WhatsApp. Atiende en la tarde.',
  image: '/demos/jardin-vivero-carolina/hero.webp',
})

const NAV_LINKS = [
  { label: 'Lo que florece', href: '#flores' },
  { label: 'Cómo pedir', href: '#como-pedir' },
  { label: 'Cómo llegar', href: '#contacto' },
]

// Fotos reales de su Instagram y su ficha de Maps (llevan la marca del vivero).
const EN_FLOR: { src: string; name: string; note: string }[] = [
  { src: 'flor-magenta', name: 'Rosa', note: 'flor grande, color fuerte' },
  { src: 'flor-roja', name: 'Rosa bicolor', note: 'pétalos rojos y rosados' },
  { src: 'flor-ave', name: 'Ave del paraíso', note: 'sol y espacio' },
  { src: 'hortensia', name: 'Hortensia', note: 'media sombra' },
  { src: 'flor-azalea', name: 'Azalea', note: 'florece en racimo' },
  { src: 'flor-naranja', name: 'Rosa naranja', note: 'variedad de temporada' },
]

const PASOS = [
  {
    n: '01',
    t: 'Escríbenos por WhatsApp',
    d: 'Manda el nombre o una foto de la planta que buscas. Te contesta quien las cuida todos los días.',
  },
  {
    n: '02',
    t: 'Te confirmamos stock y precio',
    d: 'El vivero cambia con la temporada: te decimos qué hay disponible y cuánto vale antes de que vengas.',
  },
  {
    n: '03',
    t: 'La retiras en el Fundo',
    d: 'Pasas por Fundo La Obra en la tarde y te llevas la planta directo de donde se riega.',
  },
]

const FAQS = [
  {
    q: '¿Cómo sé si tienen la planta que busco?',
    a: 'Escríbenos por WhatsApp con el nombre o una foto; te confirmamos al tiro si está disponible.',
  },
  {
    q: '¿Me ayudan a elegir según mi casa?',
    a: 'Sí. Cuéntanos cuánta luz le llega y si es para interior o exterior, y te recomendamos una que dure.',
  },
  {
    q: '¿Puedo ir a ver el vivero?',
    a: 'Claro. Atiende en la tarde: entre semana de 17:30 a 21:00 y fines de semana desde las 15:30.',
  },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function LeafMark({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  // Hoja estilizada, eco de la corona botánica del logo.
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19 C5 10 11 4 20 4 C20 13 14 19 5 19 Z" />
      <path d="M7.5 16.5 C10.5 12.5 13.5 9.5 16.5 6.5" />
    </svg>
  )
}

function WaButton({ href = WA_LINK, children = 'Escribir por WhatsApp', tone = 'rosa', className = '' }: { href?: string; children?: React.ReactNode; tone?: 'rosa' | 'crema' | 'bosque'; className?: string }) {
  const s = {
    rosa: { backgroundColor: C.rosa, color: '#FFF' },
    crema: { backgroundColor: C.papel, color: C.bosqueDeep },
    bosque: { backgroundColor: C.bosque, color: C.papel },
  }[tone]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 min-h-[44px] px-5 py-2.5 rounded-full font-bold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${className} tap-44`}
      style={s}
    >
      <WaIcon />
      {children}
    </a>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4 flex items-center gap-2.5" style={{ color: light ? C.rosaSoft : C.rosa }}>
      <LeafMark className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function JardinViveroCarolinaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <div className="[&>header]:absolute!" style={{ backgroundColor: C.bosqueDeep }}>
        <BlitzNav
          name={BIZ.short}
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{ over: 'dark', bar: 'rgba(247,241,228,0.96)', ink: C.bosque, line: C.line, btnBg: C.rosa, btnInk: '#fff' }}
        />
      </div>

      {/* ── Hero a sangre: el vivero real ─────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.bosqueDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Camas del vivero con rosales floreciendo en Fundo La Obra, Curicó"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(22,39,29,0.62) 0%, rgba(22,39,29,0.35) 42%, rgba(22,39,29,0.94) 100%)' }} />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: C.papel }}>
              <LeafMark className="w-4 h-4" color={C.rosaSoft} />
              Vivero · Fundo La Obra, Curicó
            </p>
            <h1 className={`${display.className} text-[2.6rem] leading-[1.06] md:text-7xl md:leading-[1.03] max-w-4xl`} style={{ color: '#FFF' }}>
              Donde el campo de Curicó florece en maceta.
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Rosales, camelias, aromáticas y frutales criados en el Fundo La Obra. Pregunta por WhatsApp y te confirmamos qué hay antes de venir.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <WaButton>Consultar por WhatsApp</WaButton>
              <a
                href="#flores"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full font-bold text-[15px] border transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFF' }}
              >
                Ver lo que florece
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha corta: datos reales ─────────────────── */}
      <section aria-label="Datos del vivero" style={{ backgroundColor: C.bosqueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 md:py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" style={{ color: C.papel }}>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.rosaSoft }}>Horario</p>
            <p className="mt-1 font-semibold leading-snug">{BIZ.hoursWeek}</p>
            <p className="font-semibold leading-snug">{BIZ.hoursWeekend}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.rosaSoft }}>Google Maps</p>
            <p className="mt-1 font-semibold flex items-center gap-1.5">
              <Stars value={5} color="#E8B84B" className="w-3.5 h-3.5" />
              {BIZ.reviews} reseñas
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.rosaSoft }}>Instagram</p>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white tap-44 inline-block">
              @{BIZ.instagramUser}
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.rosaSoft }}>Dirección</p>
            <p className="mt-1 font-semibold leading-snug">{BIZ.address}, {BIZ.city}</p>
          </div>
        </div>
      </section>

      {/* ── Lo que florece: mural de fotos reales ─────── */}
      <section id="flores" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-8">
            <div>
              <Eyebrow>Directo del vivero</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08]`}>Lo que está floreciendo ahora</h2>
            </div>
            <p className="text-sm max-w-xs md:text-right leading-relaxed" style={{ color: C.muted }}>
              Fotos del propio vivero — su Instagram es un catálogo vivo. Pregunta por la que te guste.
            </p>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {EN_FLOR.map((f, i) => (
              <li key={f.src} className={i % 3 === 1 ? 'md:translate-y-6' : ''}>
                <Reveal delay={i * 60}>
                  <figure className="p-2.5 pb-4 rounded-xl rotate-0 even:-rotate-1 odd:rotate-1 shadow-[0_10px_28px_rgba(34,57,44,0.14)]" style={{ backgroundColor: C.papelSoft, border: `1px solid ${C.line}` }}>
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                      <Image src={`${IMG}/${f.src}.webp`} alt={`${f.name} en el vivero`} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover" />
                    </div>
                    <figcaption className="mt-3 flex items-baseline justify-between gap-2 px-1">
                      <span className={`${display.className} text-base md:text-lg`}>{f.name}</span>
                      <span className="font-mono text-[11px] text-right" style={{ color: C.muted }}>{f.note}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <WaButton href={WA_LINK_STOCK} tone="bosque">Preguntar por una planta</WaButton>
            <p className="text-sm" style={{ color: C.muted }}>Manda una foto o el nombre y te confirmamos stock y precio del día.</p>
          </div>
        </div>
      </section>

      {/* ── Cómo pedir: 3 pasos ───────────────────────── */}
      <section id="como-pedir" className="py-16 md:py-24 scroll-mt-16" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow light>Cómo pedir</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] max-w-2xl`} style={{ color: C.papel }}>
            De su maceta a tu casa, sin intermediarios.
          </h2>
          <ol className="mt-10 grid md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(247,241,228,0.16)' }}>
            {PASOS.map((p, i) => (
              <li key={p.n}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full p-6 md:p-8" style={{ backgroundColor: C.bosqueDeep }}>
                    <p className="font-mono text-sm" style={{ color: C.rosaSoft }}>{p.n}</p>
                    <h3 className={`${display.className} text-xl md:text-2xl mt-4 leading-snug`} style={{ color: '#FFF' }}>{p.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(247,241,228,0.75)' }}>{p.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <WaButton tone="crema">Escribir ahora</WaButton>
          </div>
        </div>
      </section>

      {/* ── Preguntas cortas ──────────────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: C.rosaSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14">
          <div>
            <Eyebrow>Dudas frecuentes</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight`}>Antes de venir al Fundo</h2>
          </div>
          <ul>
            {FAQS.map((f, i) => (
              <li key={f.q} className="border-b py-5 first:pt-0" style={{ borderColor: 'rgba(185,74,110,0.25)' }}>
                <Reveal delay={i * 60}>
                  <h3 className="font-bold text-lg leading-snug">{f.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.muted }}>{f.a}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contacto y ubicación ──────────────────────── */}
      <section id="contacto" className="py-16 md:py-24 scroll-mt-16" style={{ backgroundColor: C.bosqueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow light>Cómo llegar</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] max-w-2xl`} style={{ color: '#FFF' }}>
            Te esperamos en la tarde, entre las plantas.
          </h2>
          <div className="mt-10 grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14">
            <div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 min-h-[44px] py-1.5 pl-1.5 pr-5 rounded-full transition-transform hover:-translate-y-0.5 tap-44"
                style={{ backgroundColor: C.rosa, color: '#FFF' }}
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}>
                  <WaIcon className="w-5 h-5" />
                </span>
                <span className={`${display.className} text-lg`}>{BIZ.phoneDisplay}</span>
              </a>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] mb-1.5" style={{ color: C.rosaSoft }}>Dirección</dt>
                  <dd className="text-lg leading-snug" style={{ color: '#FFF' }}>
                    {BIZ.address}
                    <br />
                    {BIZ.city}, {BIZ.region}
                  </dd>
                  <dd className="mt-3">
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4 tap-44" style={{ color: C.papel }}>
                      Abrir ruta en Google Maps
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] mb-1.5" style={{ color: C.rosaSoft }}>Horario de atención</dt>
                  <dd className="leading-snug" style={{ color: C.papel }}>
                    {BIZ.hoursWeek}
                    <br />
                    {BIZ.hoursWeekend}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] mb-1.5" style={{ color: C.rosaSoft }}>Instagram</dt>
                  <dd>
                    <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-white/40 hover:decoration-white tap-44" style={{ color: '#FFF' }}>
                      @{BIZ.instagramUser}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative min-h-[320px] rounded-2xl overflow-hidden" style={{ backgroundColor: C.bosque }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, Fundo La Obra, Curicó`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pie ───────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.papel }}>
        <div className="text-center text-[11px] font-bold tracking-[0.18em] uppercase py-3" style={{ backgroundColor: C.rosaSoft, color: C.bosque }}>
          Sitio de ejemplo de Sitiazo
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm" style={{ color: C.muted }}>
          <p>
            <span className={`${display.className} text-base`} style={{ color: C.bosque }}>{BIZ.name}</span> · {BIZ.rubro} en {BIZ.city}. Fotos del propio vivero.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
