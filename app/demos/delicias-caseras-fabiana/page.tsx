import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({ src: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000' })

// Paleta de cocina: crema de mantequilla, cacao, canela y frutilla.
const C = {
  cream: '#FFF7EA',
  butter: '#F6DFA6',
  cocoa: '#3E2418',
  cinnamon: '#9E4A1F',
  berry: '#B2304A',
  ink: '#2E1B12',
  muted: '#6B5142',
  line: 'rgba(62,36,24,0.14)',
  card: '#FFFDF8',
}

export const metadata: Metadata = demoMetadata({
  slug: 'delicias-caseras-fabiana',
  title: 'Delicias Caseras Fabiana — Panadería y pastelería en San Clemente',
  description:
    'Panadería y pastelería casera en Villa Entre Ríos, San Clemente. Consulta preparaciones, disponibilidad y encargos por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'Qué hacemos', href: '#mesas' },
  { label: 'Encargos', href: '#encargos' },
  { label: 'Dónde', href: '#ubicacion' },
]

const MESAS = [
  {
    title: 'Panadería',
    lead: 'Del horno a la mesa',
    desc: 'Pan y masas horneadas en casa, en Villa Entre Ríos. Pregunta qué hay del día antes de pasar.',
    icon: 'pan' as const,
  },
  {
    title: 'Pastelería',
    lead: 'Para celebrar',
    desc: 'Tortas y dulces caseros para cumpleaños, once o una ocasión especial. Se conversa y se encarga por WhatsApp.',
    icon: 'torta' as const,
  },
]

const PASOS = [
  { t: 'Escribe', d: 'Cuéntale a Fabiana qué buscas: pan del día, una torta, algo para la once.' },
  { t: 'Coordinen', d: 'Confirman preparación, cantidad y fecha de retiro por el mismo chat.' },
  { t: 'Retira', d: 'Recién hecho, en Padre Aldo Davanzo #1194, San Clemente.' },
]

const SELLOS = ['Hecho en casa', 'San Clemente', 'Encargos por WhatsApp', 'Panadería', 'Pastelería', 'Villa Entre Ríos']

// ── Motivo: puntilla (borde festoneado de mantel de cocina) ───
function Puntilla({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      className={`block w-full h-[12px] ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h120v4c-5 0-5 8-10 8s-5-8-10-8-5 8-10 8-5-8-10-8-5 8-10 8-5-8-10-8-5 8-10 8-5-8-10-8-5 8-10 8-5-8-10-8-5 8-10 8-5-8-10-8-5 8-10 8S5 4 0 4Z" fill={color} />
    </svg>
  )
}

/** Puntitos de azúcar como textura de fondo. */
function Azucar({ id, color, opacity = 0.35 }: { id: string; color: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.4" fill={color} />
          <circle cx="17" cy="15" r="1.1" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  )
}

// ── Escena del hero: bandeja con torta, pan y berlines ───────
function MesaScene() {
  return (
    <svg viewBox="0 0 520 400" className="w-full h-auto max-w-[520px] mx-auto" role="img" aria-label="Ilustración de una torta, un pan y berlines sobre una bandeja">
      {/* plato grande */}
      <ellipse cx="260" cy="330" rx="240" ry="40" fill={C.butter} />
      <ellipse cx="260" cy="324" rx="220" ry="32" fill="#FBEBC5" />
      {/* torta de dos pisos */}
      <g>
        <rect x="70" y="220" width="180" height="90" rx="10" fill="#F2C8B0" />
        <rect x="70" y="220" width="180" height="26" rx="10" fill="#FFF3E6" />
        <path d="M70 246c10 0 10 14 20 14s10-14 20-14 10 14 20 14 10-14 20-14 10 14 20 14 10-14 20-14 10 14 20 14 10-14 20-14 10 14 20 14" fill="none" stroke="#FFF3E6" strokeWidth="9" strokeLinecap="round" />
        <rect x="95" y="160" width="130" height="66" rx="8" fill="#F2C8B0" />
        <rect x="95" y="160" width="130" height="20" rx="8" fill="#FFF3E6" />
        <path d="M95 180c8 0 8 12 16 12s8-12 16-12 8 12 16 12 8-12 16-12 8 12 16 12 8-12 16-12 8 12 16 12 8-12 16-12" fill="none" stroke="#FFF3E6" strokeWidth="8" strokeLinecap="round" />
        {/* frutillas */}
        {[120, 160, 200].map((x) => (
          <g key={x}>
            <path d={`M${x} 142c-10 0-16 9-16 17 0 9 10 16 16 22 6-6 16-13 16-22 0-8-6-17-16-17Z`} fill={C.berry} />
            <path d={`M${x - 8} 141l8-10 8 10-8 3Z`} fill="#3B7A3A" />
            <circle cx={x - 4} cy="156" r="1.6" fill="#F6DFA6" />
            <circle cx={x + 5} cy="162" r="1.6" fill="#F6DFA6" />
          </g>
        ))}
      </g>
      {/* pan (hogaza con cortes) */}
      <g>
        <path d="M290 300c0-40 30-72 80-72s80 32 80 72c0 10-6 14-16 14H306c-10 0-16-4-16-14Z" fill="#C7772F" />
        <path d="M300 292c0-34 26-58 70-58s70 24 70 58" fill="none" stroke="#DE9B52" strokeWidth="6" strokeLinecap="round" />
        {[330, 362, 394].map((x) => (
          <path key={x} d={`M${x} 248l22 30`} stroke="#FFF3E6" strokeWidth="6" strokeLinecap="round" />
        ))}
      </g>
      {/* berlines */}
      <g>
        <ellipse cx="330" cy="200" rx="34" ry="24" fill="#E7A55A" />
        <ellipse cx="330" cy="196" rx="30" ry="18" fill="#F3C57F" />
        <path d="M304 200h52" stroke={C.berry} strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="400" cy="196" rx="34" ry="24" fill="#E7A55A" />
        <ellipse cx="400" cy="192" rx="30" ry="18" fill="#F3C57F" />
        <path d="M374 196h52" stroke={C.berry} strokeWidth="5" strokeLinecap="round" />
        {[318, 332, 346, 388, 404, 416].map((x, i) => (
          <circle key={x} cx={x} cy={i < 3 ? 186 : 182} r="1.8" fill="#FFF7EA" />
        ))}
      </g>
      {/* vapor */}
      <path d="M368 214c-6-10 6-14 0-26M388 210c-6-10 6-14 0-26" fill="none" stroke={C.cinnamon} strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function Icono({ kind }: { kind: 'pan' | 'torta' }) {
  return kind === 'pan' ? (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke={C.cinnamon} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 30c0-9 8-16 18-16s18 7 18 16v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-4Z" />
      <path d="M18 22l5 8M26 21l5 8" />
    </svg>
  ) : (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke={C.cinnamon} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 28h32v10a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V28Z" />
      <path d="M8 28c4 0 4 4 8 4s4-4 8-4 4 4 8 4 4-4 8-4" />
      <path d="M14 28v-8h20v8" />
      <path d="M24 20v-6M21 11c0-2 3-2 3-4 0 2 3 2 3 4a3 3 0 0 1-6 0Z" />
    </svg>
  )
}

function Etiqueta({ children, tone = 'cinnamon' }: { children: React.ReactNode; tone?: 'cinnamon' | 'berry' }) {
  return (
    <span
      className={`${display.className} inline-block italic text-sm px-3 py-1 rounded-full border`}
      style={{ color: tone === 'berry' ? C.berry : C.cinnamon, borderColor: tone === 'berry' ? C.berry : C.cinnamon }}
    >
      {children}
    </span>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'cocoa' | 'cream' | 'outline'; external?: boolean }) {
  const st =
    tone === 'cocoa' ? { backgroundColor: C.cocoa, color: C.cream }
    : tone === 'cream' ? { backgroundColor: C.cream, color: C.cocoa }
    : { border: `1.5px solid ${C.cocoa}`, color: C.cocoa }
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
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        theme={{ over: 'light', bar: 'rgba(255,247,234,0.92)', ink: C.cocoa, line: C.line, btnBg: C.cocoa, btnInk: C.cream }}
        ctaLabel="Escribir"
      />

      <main id="inicio">
        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-8 md:pb-16">
          <Azucar id="dc-azucar-hero" color={C.cinnamon} opacity={0.18} />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.05fr] gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <p className="flex justify-center md:justify-start gap-2 flex-wrap mb-5">
                  <Etiqueta>Panadería</Etiqueta>
                  <Etiqueta tone="berry">Pastelería</Etiqueta>
                </p>
                <h1 className={`${display.className} font-black leading-[0.98] text-[44px] sm:text-6xl lg:text-7xl tracking-tight`} style={{ color: C.cocoa }}>
                  Casero de verdad, <em className="not-italic" style={{ color: C.cinnamon, fontStyle: 'italic', fontWeight: 500 }}>hecho por Fabiana</em>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Pan y dulces de casa en Villa Entre Ríos, San Clemente. Consulta qué hay hoy o encarga para tu celebración.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="cocoa">Consultar por WhatsApp</Btn>
                  <Btn href="#mesas" tone="outline" external={false}>Ver qué hacemos</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <MesaScene />
            </Reveal>
          </div>
        </section>

        {/* MESAS: panadería / pastelería */}
        <section id="mesas" className="relative scroll-mt-16" style={{ backgroundColor: C.butter }}>
          <Puntilla color={C.cream} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight text-center max-w-2xl mx-auto`} style={{ color: C.cocoa }}>
                Dos mesas, <span style={{ color: C.cinnamon, fontStyle: 'italic', fontWeight: 500 }}>una cocina</span>
              </h2>
              <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
                Lo que hay del día cambia. Lo que no cambia es que sale de una cocina de casa.
              </p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {MESAS.map((m, i) => (
                <Reveal key={m.title} delay={i * 100}>
                  <article className="relative rounded-3xl p-7 h-full overflow-hidden" style={{ backgroundColor: C.card, boxShadow: '0 10px 30px rgba(62,36,24,0.10)' }}>
                    <div className="absolute inset-x-0 top-0"><Puntilla color={C.butter} /></div>
                    <div className="mt-2 mb-5 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: C.cream }}>
                      <Icono kind={m.icon} />
                    </div>
                    <p className={`${display.className} italic text-base`} style={{ color: C.cinnamon }}>{m.lead}</p>
                    <h3 className={`${display.className} text-3xl font-black mt-1`} style={{ color: C.cocoa }}>{m.title}</h3>
                    <p className="mt-3 leading-relaxed" style={{ color: C.muted }}>{m.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Puntilla color={C.cream} flip />
        </section>

        {/* CINTA DE SELLOS */}
        <div className="overflow-hidden py-5 border-y" style={{ borderColor: C.line }} aria-hidden="true">
          <style>{`@keyframes dc-cinta{to{transform:translateX(-50%)}}`}</style>
          <div className={`${display.className} flex gap-8 whitespace-nowrap italic text-lg w-max`} style={{ color: C.cinnamon, animation: 'dc-cinta 28s linear infinite' }}>
            {[...SELLOS, ...SELLOS].map((s, i) => (
              <span key={i} className="flex items-center gap-8">
                {s}
                <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: C.berry }} />
              </span>
            ))}
          </div>
        </div>

        {/* ENCARGOS: cómo funciona */}
        <section id="encargos" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Etiqueta>Encargos</Etiqueta>
              <h2 className={`${display.className} mt-4 text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.cocoa }}>
                Se encarga <span style={{ color: C.cinnamon, fontStyle: 'italic', fontWeight: 500 }}>conversando</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: C.muted }}>
                Sin carrito ni formularios: escribes, se coordina y retiras. Así de simple, como en la casa de una amiga que hornea rico.
              </p>
              <div className="mt-7">
                <Btn href={WA_LINK} tone="cocoa">Hacer un encargo</Btn>
              </div>
            </Reveal>
            <ol className="relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-px" style={{ backgroundColor: C.line }} aria-hidden="true" />
              {PASOS.map((p, i) => (
                <Reveal key={p.t} delay={i * 110}>
                  <li className="relative flex gap-5 pb-8 last:pb-0">
                    <span className={`${display.className} relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-black`} style={{ backgroundColor: i === 2 ? C.berry : C.cocoa, color: C.cream }}>
                      {i + 1}
                    </span>
                    <div className="rounded-2xl p-5 flex-1" style={{ backgroundColor: C.card, boxShadow: '0 6px 20px rgba(62,36,24,0.08)' }}>
                      <h3 className={`${display.className} text-2xl font-black`} style={{ color: C.cocoa }}>{p.t}</h3>
                      <p className="mt-1.5 leading-relaxed" style={{ color: C.muted }}>{p.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* POR QUÉ CASERO */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.cocoa }}>
          <Azucar id="dc-azucar-dark" color={C.butter} opacity={0.14} />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight text-center`} style={{ color: C.cream }}>
                Por qué <span style={{ color: C.butter, fontStyle: 'italic', fontWeight: 500 }}>casero</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { t: 'Cocina de casa', d: 'Recetas caseras, cantidades chicas y atención directa de quien hornea.' },
                { t: 'Se conversa', d: 'Cada encargo se coordina por WhatsApp con la misma persona que hornea.' },
                { t: 'De San Clemente', d: 'Un emprendimiento de Villa Entre Ríos: retiras en Padre Aldo Davanzo #1194.' },
              ].map((r, i) => (
                <Reveal key={r.t} delay={i * 100}>
                  <div className="rounded-2xl p-6 h-full border" style={{ borderColor: 'rgba(246,223,166,0.28)', backgroundColor: 'rgba(255,247,234,0.05)' }}>
                    <span className="block w-8 h-1 rounded-full mb-4" style={{ backgroundColor: C.butter }} aria-hidden="true" />
                    <h3 className={`${display.className} text-2xl font-black`} style={{ color: C.cream }}>{r.t}</h3>
                    <p className="mt-2 leading-relaxed" style={{ color: 'rgba(255,247,234,0.82)' }}>{r.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <Etiqueta>Dónde</Etiqueta>
              <h2 className={`${display.className} mt-4 text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.cocoa }}>
                Villa Entre Ríos, <span style={{ color: C.cinnamon, fontStyle: 'italic', fontWeight: 500 }}>San Clemente</span>
              </h2>
              <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                Calle Padre Aldo Davanzo #1194
                <br />
                San Clemente, Región del Maule
              </address>
              <p className="mt-4 rounded-2xl px-5 py-4 text-[15px]" style={{ backgroundColor: C.butter, color: C.cocoa }}>
                Antes de ir, confirma horario y disponibilidad por WhatsApp: así no te quedas sin lo que buscabas.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="cocoa">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="outline">WhatsApp +56 9 4844 6446</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3]" style={{ boxShadow: '0 12px 34px rgba(62,36,24,0.14)', backgroundColor: C.butter }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.berry }}>
          <Puntilla color={C.cream} />
          <Azucar id="dc-azucar-cta" color={C.cream} opacity={0.16} />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.cream }}>
                ¿Algo rico para hoy <span style={{ fontStyle: 'italic', fontWeight: 500 }}>o para celebrar?</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(255,247,234,0.9)' }}>
                Escríbele a Fabiana y coordinen por WhatsApp.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="cream">Escribir a Delicias Caseras</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: C.cocoa, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl font-black`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,247,234,0.75)' }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,247,234,0.85)' }}>{l.label}</a>
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
