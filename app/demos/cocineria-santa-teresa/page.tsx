import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, FaqList } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({ src: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900' })

/**
 * Dirección de arte: «el fogón de Perquín» — mantel de trigo, teja del fuego,
 * bosque del cordón precordillano. Motivo propio: el vapor que sube de la olla,
 * repetido como humo en cada escena. La cocinería no tiene redes ni fotos
 * publicadas: cada escena es CSS/SVG marcado visiblemente como bosquejo.
 */
const C = {
  mantel: '#F1E4C8',
  papel: '#F9F1DE',
  teja: '#A84E28',
  bosque: '#33503A',
  ink: '#2C2114',
  muted: 'rgba(44,33,20,0.72)',
  line: 'rgba(44,33,20,0.18)',
  humo: 'rgba(44,33,20,0.35)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cocineria-santa-teresa',
  title: 'Cocinería Santa Teresa — Comida casera en Perquín Sur, San Clemente',
  description:
    'Cocinería de campo en el sector Perquín Sur, comuna de San Clemente. Consulta qué hay del día y coordina retiro por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'La cocinería', href: '#cocineria' },
  { label: 'Cómo pedir', href: '#pedir' },
  { label: 'Dudas', href: '#dudas' },
  { label: 'Llegar', href: '#llegar' },
]

const MESA = [
  { t: 'Comida casera', d: 'Lo que sale de la cocina es de receta de casa: se pregunta qué hay del día, no hay carta fija.' },
  { t: 'Atención de la casa', d: 'Hablas directo con quienes cocinan: el mismo WhatsApp para consultar y para encargar.' },
  { t: 'Sector Perquín Sur', d: 'Una cocinería de campo en la comuna de San Clemente, inscrita en el directorio de turismo municipal.' },
]

const PASOS = [
  { t: 'Pregunta qué hay', d: 'Escríbeles por WhatsApp y consulta qué está saliendo de la cocina hoy.' },
  { t: 'Encarga lo tuyo', d: 'Coordina porciones, hora y retiro directo en el chat.' },
  { t: 'Pasa a buscarlo', d: 'Retiras en el sector Perquín Sur, comuna de San Clemente.' },
]

const FAQ = [
  { q: '¿Dónde queda la cocinería?', a: 'En el sector Perquín Sur, comuna de San Clemente, Región del Maule. Al no estar en Google Maps, conviene coordinar la ubicación exacta por WhatsApp.' },
  { q: '¿Qué venden?', a: 'Comida casera: en una cocinería el menú se pregunta, no se publica. Escribe por WhatsApp para saber qué hay del día.' },
  { q: '¿Tienen horario?', a: 'No publican horario: confirma atención y disponibilidad directo por WhatsApp al +56 9 9169 8950.' },
  { q: '¿Puedo encargar con anticipación?', a: 'Sí, el WhatsApp es el canal para encargos y consultas de retiro.' },
]

/** Marca «bosquejo» — obligatoria: no hay fotos reales del negocio. */
function Bosquejo() {
  return (
    <span
      className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase"
      style={{ backgroundColor: C.ink, color: C.papel }}
    >
      bosquejo
    </span>
  )
}

/** Vapor del fogón: volutas SVG que suben. */
function Vapor({ className = '', color = C.humo, n = 3 }: { className?: string; color?: string; n?: number }) {
  const wisps = Array.from({ length: n }, (_, i) => i)
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <style>{`@keyframes st-vapor{0%{transform:translateY(6px);opacity:0}30%{opacity:1}100%{transform:translateY(-14px);opacity:0}}`}</style>
      <svg viewBox="0 0 120 60" className="w-full h-full">
        {wisps.map((i) => (
          <path
            key={i}
            d={`M${24 + i * 30} 52 q -8 -12 0 -22 q 8 -10 0 -24`}
            fill="none"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            style={{ animation: `st-vapor ${2.6 + i * 0.5}s ease-in-out ${i * 0.6}s infinite` }}
          />
        ))}
      </svg>
    </div>
  )
}

/** Escena bosquejo: la olla del almuerzo sobre la mesa de campo. */
function OllaBosquejo() {
  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]" style={{ backgroundColor: C.bosque, border: `1.5px solid ${C.line}` }} role="img" aria-label="Bosquejo: olla humeante sobre la mesa de la cocinería">
      <Bosquejo />
      {/* sol de tarde */}
      <div className="absolute rounded-full" style={{ width: 90, height: 90, top: '12%', right: '10%', backgroundColor: '#E9C46A', opacity: 0.9 }} aria-hidden="true" />
      {/* cerros */}
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 170 L70 110 L130 160 L210 95 L290 165 L400 120 L400 300 L0 300 Z" fill="rgba(0,0,0,0.22)" />
        <path d="M0 210 L90 160 L170 200 L260 150 L340 195 L400 170 L400 300 L0 300 Z" fill="rgba(0,0,0,0.28)" />
      </svg>
      {/* mesa */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: '26%', backgroundColor: '#6B4A2F' }} aria-hidden="true" />
      {/* vapor */}
      <Vapor className="absolute w-24 h-16" color="rgba(249,241,222,0.8)" />
      {/* olla */}
      <svg viewBox="0 0 120 80" className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '14%', width: '34%' }} aria-hidden="true">
        <path d="M15 30 h90 v26 a10 10 0 0 1 -10 10 h-70 a10 10 0 0 1 -10 -10 z" fill={C.ink} />
        <path d="M15 30 h90 v6 h-90 z" fill="#1d150c" />
        <path d="M5 30 h14 v10 h-14 z M101 30 h14 v10 h-14 z" fill={C.ink} />
        <ellipse cx="60" cy="30" rx="45" ry="6" fill="#3d2d1c" />
      </svg>
    </div>
  )
}

/** Escena bosquejo: el camino de Perquín bajo los cerros. */
function CampoBosquejo() {
  return (
    <div className="relative h-[260px] md:h-[340px] overflow-hidden" role="img" aria-label="Bosquejo: camino de tierra entre potreros y cerros de Perquín Sur">
      <Bosquejo />
      <svg viewBox="0 0 800 340" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
        <rect width="800" height="340" fill="#D9C690" />
        <circle cx="640" cy="70" r="46" fill="#E9C46A" />
        <path d="M0 150 L110 80 L200 140 L320 60 L430 140 L560 90 L800 150 L800 340 L0 340 Z" fill={C.bosque} opacity="0.85" />
        <path d="M0 190 L140 140 L280 190 L430 130 L580 190 L800 150 L800 340 L0 340 Z" fill={C.bosque} />
        <path d="M0 250 C200 235 320 260 400 250 C520 236 660 255 800 245 L800 340 L0 340 Z" fill="#7D8B4A" />
        <path d="M330 340 C360 300 390 280 400 260 C410 280 440 300 470 340 Z" fill="#B98A4E" />
      </svg>
      <Vapor className="absolute w-20 h-12 left-[46%] top-[58%]" color="rgba(44,33,20,0.4)" n={2} />
    </div>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.teja, color: C.papel }
      : tone === 'light'
        ? { backgroundColor: C.papel, color: C.ink }
        : { border: `1.5px solid ${C.ink}`, color: C.ink }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase" style={{ color: '#8F3E1C' }}>
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.mantel, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        theme={{ over: 'light', bar: 'rgba(241,228,200,0.94)', ink: C.ink, line: C.line, btnBg: C.bosque, btnInk: C.papel }}
        ctaLabel="Escribir"
      />

      <main>
        {/* HERO — la olla en la mesa */}
        <section className="pt-24 md:pt-32 pb-12">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <Kicker>cocinería · sector Perquín Sur, San Clemente</Kicker>
                <h1 className={`${display.className} font-black leading-[1.0] text-[44px] sm:text-6xl lg:text-[68px] tracking-tight mt-5`} style={{ color: C.ink }}>
                  El almuerzo casero de <em style={{ color: C.teja }}>Perquín Sur</em>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Santa Teresa es una cocinería de campo de la comuna de San Clemente:
                  no está en Google Maps ni en redes, funciona como siempre —
                  de boca en boca y por teléfono.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="solid">Preguntar qué hay hoy</Btn>
                  <Btn href="#cocineria" tone="line" external={false}>Conocer la cocinería</Btn>
                </div>
                <p className="mt-6 text-sm font-semibold" style={{ color: C.muted }}>
                  Inscrita en el directorio de restaurantes de la Municipalidad de San Clemente
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <OllaBosquejo />
            </Reveal>
          </div>
        </section>

        {/* LA COCINERÍA */}
        <section id="cocineria" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <Kicker>como en la casa</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight mt-4`} style={{ color: C.ink }}>
                  Una cocinería de las de <em style={{ color: C.teja }}>antes</em>
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                  En el campo el almuerzo no se publica: se pregunta. Santa Teresa atiende
                  en su sector como lo han hecho siempre las cocinerías del Maule.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {MESA.map((m, i) => (
                <Reveal key={m.t} delay={i * 90}>
                  <article className="rounded-3xl p-6 h-full" style={{ backgroundColor: C.mantel, border: `1.5px solid ${C.line}` }}>
                    <Vapor className="w-14 h-9 mb-2" n={2} />
                    <h3 className={`${display.className} text-2xl font-black`} style={{ color: C.ink }}>{m.t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.muted }}>{m.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BANDA CAMPO — bosquejo */}
        <section className="relative">
          <CampoBosquejo />
          <div className="absolute inset-0 flex items-end justify-center pb-8 px-6" style={{ background: 'linear-gradient(to top, rgba(44,33,20,0.72) 22%, transparent 62%)' }}>
            <p className={`${display.className} italic text-2xl md:text-4xl text-center`} style={{ color: C.papel, textShadow: '0 2px 14px rgba(44,33,20,0.6)' }}>
              el campo de San Clemente, corazón huaso del Maule
            </p>
          </div>
        </section>

        {/* PEDIR */}
        <section id="pedir" className="scroll-mt-20 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Kicker>cómo pedir</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight mt-4`} style={{ color: C.ink }}>
                Pedir es <em style={{ color: C.teja }}>preguntar</em>
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: C.muted }}>
                Sin carta online ni aplicación: un WhatsApp alcanza para saber
                qué hay, encargar y coordinar el retiro.
              </p>
              <div className="mt-7">
                <Btn href={WA_LINK} tone="solid">Abrir WhatsApp</Btn>
              </div>
            </Reveal>
            <ol className="relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-px" style={{ backgroundColor: C.line }} aria-hidden="true" />
              {PASOS.map((p, i) => (
                <Reveal key={p.t} delay={i * 110}>
                  <li className="relative flex gap-5 pb-8 last:pb-0">
                    <span className={`${display.className} relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-black`} style={{ backgroundColor: i === 2 ? C.teja : C.bosque, color: C.papel }}>
                      {i + 1}
                    </span>
                    <div className="rounded-2xl p-5 flex-1" style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}>
                      <h3 className={`${display.className} text-2xl font-black`} style={{ color: C.ink }}>{p.t}</h3>
                      <p className="mt-1.5 leading-relaxed" style={{ color: C.muted }}>{p.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* DUDAS */}
        <section id="dudas" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.ink }}>
                Lo que preguntan antes de <em style={{ color: C.teja }}>ir</em>
              </h2>
            </Reveal>
            <div className="mt-8">
              <FaqList
                items={FAQ}
                colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.teja, plusInk: C.papel }}
              />
            </div>
          </div>
        </section>

        {/* LLEGAR */}
        <section id="llegar" className="scroll-mt-20 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <Kicker>cómo llegar</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight mt-4`} style={{ color: C.ink }}>
                Perquín Sur, al interior de <em style={{ color: C.teja }}>San Clemente</em>
              </h2>
              <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                Sector Perquín Sur
                <br />
                Comuna de San Clemente, Región del Maule
              </address>
              <p className="mt-4 rounded-2xl px-5 py-4 text-[15px]" style={{ backgroundColor: C.papel, border: `1px solid ${C.line}`, color: C.muted }}>
                No tiene ficha en Google Maps: el mapa muestra el sector. Para
                la ubicación exacta y horario, escribe al {BIZ.phoneDisplay}.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="solid">WhatsApp {BIZ.phoneDisplay}</Btn>
                <Btn href={MAPS_URL} tone="line">Ver el sector en Maps</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3]" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(44,33,20,0.16)' }}>
                <LazyMap src={MAPS_EMBED} title="Mapa del sector Perquín Sur, San Clemente" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: C.bosque }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.papel }}>
                La cocina de Santa Teresa atiende por <em style={{ color: '#E9C46A' }}>WhatsApp</em>
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'rgba(249,241,222,0.85)' }}>
                Consulta qué hay del día y coordina tu retiro en Perquín Sur.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="light">Escribir ahora</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg font-bold`} style={{ color: C.papel }}>{BIZ.name}</p>
          <p className="text-xs tracking-[0.18em] uppercase" style={{ color: 'rgba(249,241,222,0.55)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold tap-44 inline-flex items-center" style={{ color: '#E9C46A' }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
