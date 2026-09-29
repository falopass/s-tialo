import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({ src: '../../fonts/anton/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })
const mono = localFont({ src: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' })

// Paleta del letrero de la vereda (Urrutia 280): papel, tricolor y maíz.
const C = {
  papel: '#FBF1DC',
  papelOscuro: '#F1E0BE',
  ink: '#231710',
  muted: '#6E5844',
  rojo: '#B3272A',
  verde: '#0F6E43',
  maiz: '#E8A93D',
  board: '#183B2C',
  boardLine: 'rgba(251,241,220,0.22)',
  crema: '#FFF9EA',
  line: 'rgba(35,23,16,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'comida-rapida-mexicana',
  title: 'Comida Rápida Mexicana — Taquería en calle Urrutia, Parral',
  description:
    'Tacos, burritos, chimichangas y quesadillas hechos al momento en C. Urrutia 280, Parral. Pide por WhatsApp y retira, o almuerza en el local.',
})

const NAV_LINKS = [
  { label: 'El pizarrón', href: '#pizarron' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'Dónde', href: '#donde' },
]

const PIZARRON = [
  { item: 'Tacos', precio: '$5.000', nota: 'dorados o al plato' },
  { item: 'Burritos', precio: '$5.000', nota: 'envueltos para llevar' },
  { item: 'Chimichangas', precio: '$5.000', nota: 'el plato que más piden' },
  { item: 'Quesadillas', precio: '$5.000', nota: 'con queso derretido' },
  { item: 'Menú del día', precio: '$8.000', nota: 'almuerzo completo' },
  { item: 'Jugos naturales', precio: '$2.000–3.000', nota: 'según fruta del día' },
]

const HORARIO = [
  { dia: 'Lun a vie', hora: '12:30 a 16:00' },
  { dia: 'Sábado', hora: '24 hrs' },
  { dia: 'Domingo', hora: 'cerrado' },
]

const RESENAS = [
  {
    nombre: 'Pamela Figueroa',
    texto:
      'La comida es rica: chimichangas, quesadillas, tacos y burritos en el almuerzo. El servicio es muy amable. Conviene pedir por adelantado porque el local es chico y se llena rápido.',
  },
  {
    nombre: 'Berta Ortega Díaz',
    texto:
      'Excelente comida y ambiente, atención rápida y muy buena. Además fueron muy generosos.',
  },
  {
    nombre: 'Yohn Retamal',
    texto:
      'Comida deliciosa, muy recomendada en Parral. Recomiendo llamar antes para que el pedido esté listo al llegar. El interior está bien decorado al estilo mexicano.',
  },
  {
    nombre: 'Oscar Cardoza',
    texto: 'Comida mexicana rica, hecha con ingredientes frescos.',
  },
]

const FOTOS = [
  { src: 'tacos-plato-rojo', alt: 'Tacos con ensalada y ají servidos en plato rojo', tall: false },
  { src: 'enchilada', alt: 'Plato mexicano con lechuga, queso rallado y salsa', tall: true },
  { src: 'burrito', alt: 'Burrito envuelto a la plancha, listo para comer', tall: false },
  { src: 'tacos-dorados', alt: 'Tacos dorados crujientes servidos en el local', tall: true },
  { src: 'quesadilla', alt: 'Quesadilla cortada con queso derretido', tall: false },
  { src: 'para-llevar', alt: 'Pedido para llevar envuelto en papel', tall: true },
]

const SELLOS = ['Tacos', 'Burritos', 'Chimichangas', 'Quesadillas', 'Enchiladas', 'Menú del día', 'Para llevar']

// Motivo propio del demo: banderines de papel picado tricolor.
function Banderines({ className = '' }: { className?: string }) {
  const cols = [C.rojo, C.crema, C.verde, C.maiz]
  const banderas = Array.from({ length: 18 }, (_, i) => cols[i % cols.length])
  return (
    <svg viewBox="0 0 540 34" className={`block w-full h-[26px] md:h-[34px] ${className}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 4 Q 270 34 540 4" fill="none" stroke={C.ink} strokeOpacity="0.5" strokeWidth="1.6" />
      {banderas.map((c, i) => {
        const t = i / (banderas.length - 1)
        const x = 14 + t * 512
        const y = 4 + Math.sin(t * Math.PI) * 15
        return (
          <g key={i} transform={`translate(${x - 11} ${y})`}>
            <path d="M0 0 h22 l-3 17 h-16 Z" fill={c} />
            <circle cx="7" cy="6" r="1.6" fill={C.papel} />
            <circle cx="15" cy="6" r="1.6" fill={C.papel} />
            <rect x="8" y="11" width="6" height="2.4" rx="1.2" fill={C.papel} />
          </g>
        )
      })}
    </svg>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className={`${mono.className} inline-flex items-center gap-1.5 text-[12px] md:text-[13px] uppercase tracking-wide px-3 py-1.5 rounded-full border`} style={{ borderColor: C.line, color: C.ink, backgroundColor: 'rgba(255,249,234,0.7)' }}>
      {children}
    </span>
  )
}

function Btn({ href, tone, children, external = true }: { href: string; tone: 'rojo' | 'verde' | 'outline' | 'papel'; children: React.ReactNode; external?: boolean }) {
  const st =
    tone === 'rojo' ? { backgroundColor: C.rojo, color: C.crema }
    : tone === 'verde' ? { backgroundColor: C.verde, color: C.crema }
    : tone === 'papel' ? { backgroundColor: C.crema, color: C.ink }
    : { border: `1.5px solid ${C.ink}`, color: C.ink }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-extrabold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'light', bar: 'rgba(251,241,220,0.94)', ink: C.ink, line: C.line, btnBg: C.rojo, btnInk: C.crema }}
        ctaLabel="Pedir"
      />

      <main id="inicio">
        {/* HERO */}
        <section className="relative overflow-hidden pt-20 md:pt-24">
          <Banderines className="absolute top-[60px] md:top-[68px] left-0 opacity-90" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10 md:pb-16 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <p className={`${mono.className} text-[12px] md:text-sm uppercase tracking-[0.18em] font-semibold`} style={{ color: C.verde }}>
                  Cocina mexicana · Parral, Maule
                </p>
                <h1 className={`${display.className} uppercase leading-[0.94] text-[46px] sm:text-7xl lg:text-[84px] mt-4`} style={{ color: C.ink }}>
                  La taquería de <span style={{ color: C.rojo }}>calle Urrutia</span>
                </h1>
                <p className="mt-5 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Tacos, burritos y chimichangas hechos al momento en pleno Parral. Pides por teléfono o WhatsApp y retiras calientito.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                  <Chip>★ {BIZ.rating} · {BIZ.reviews} reseñas</Chip>
                  <Chip>$5.000–10.000 p/p</Chip>
                  <Chip>Para llevar</Chip>
                </div>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="rojo">Pedir por WhatsApp</Btn>
                  <Btn href="#pizarron" tone="outline" external={false}>Ver el pizarrón</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="relative max-w-sm mx-auto md:max-w-none">
                <figure className="relative z-10 rotate-[1.5deg] overflow-hidden rounded-2xl border-4 shadow-xl" style={{ borderColor: C.crema, boxShadow: '0 20px 50px rgba(35,23,16,0.25)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/demos/comida-rapida-mexicana/plato-tacos.webp" alt="Plato de tacos con arroz rojo, porotos y ensalada servido en Comida Rápida Mexicana" className="w-full aspect-[3/4] object-cover" loading="eager" />
                </figure>
                <figure className="absolute -left-6 md:-left-10 -bottom-8 w-[46%] -rotate-[6deg] overflow-hidden rounded-xl border-4 z-20 shadow-lg" style={{ borderColor: C.crema }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/demos/comida-rapida-mexicana/tacos-plato-rojo.webp" alt="Tacos servidos en plato rojo con ensalada fresca" className="w-full aspect-square object-cover" loading="lazy" />
                </figure>
                <figcaption className={`${display.className} absolute -top-3 -right-2 z-20 rotate-[4deg] uppercase text-sm md:text-base px-4 py-2 rounded-lg shadow`} style={{ backgroundColor: C.maiz, color: C.ink }}>
                  plato del día
                </figcaption>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARQUEE DE LA CARTA */}
        <div className="overflow-hidden py-4 border-y-2" style={{ borderColor: C.ink, backgroundColor: C.rojo }} aria-hidden="true">
          <style>{`@keyframes cm-cinta{to{transform:translateX(-50%)}}`}</style>
          <div className={`${display.className} flex gap-8 whitespace-nowrap uppercase text-xl md:text-2xl w-max`} style={{ color: C.crema, animation: 'cm-cinta 24s linear infinite' }}>
            {[...SELLOS, ...SELLOS].map((s, i) => (
              <span key={i} className="flex items-center gap-8">
                {s}
                <span className="inline-block w-2.5 h-2.5 rotate-45" style={{ backgroundColor: C.maiz }} />
              </span>
            ))}
          </div>
        </div>

        {/* EL PIZARRÓN */}
        <section id="pizarron" className="relative scroll-mt-16" style={{ backgroundColor: C.board }}>
          <Banderines className="absolute top-0 left-0 opacity-70" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-14 md:pt-24 md:pb-20">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
              <Reveal>
                <p className={`${mono.className} text-[12px] uppercase tracking-[0.2em] font-semibold`} style={{ color: C.maiz }}>
                  La carta del local
                </p>
                <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] mt-3`} style={{ color: C.crema }}>
                  El pizarrón de <span style={{ color: C.maiz }}>Urrutia</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(255,249,234,0.78)' }}>
                  La carta es corta y sale al momento. Estos son los precios que marcan las reseñas de Google — se confirma el menú del día directo en el local.
                </p>
                <p className={`${mono.className} mt-5 text-[13px] uppercase tracking-wide`} style={{ color: 'rgba(255,249,234,0.6)' }}>
                  Almuerzo · Lun a vie 12:30–16:00
                </p>
                <div className="mt-6">
                  <Btn href={WA_LINK} tone="papel">Pedir al {BIZ.phoneDisplay}</Btn>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-2xl border-4 p-1.5" style={{ borderColor: C.maiz }}>
                  <div className="rounded-xl px-6 py-6 md:px-8" style={{ backgroundColor: 'rgba(0,0,0,0.22)' }}>
                    <ul>
                      {PIZARRON.map((p, i) => (
                        <li key={p.item} className="flex items-baseline gap-3 py-3 border-b border-dashed last:border-0" style={{ borderColor: C.boardLine }}>
                          <span className={`${mono.className} text-sm`} style={{ color: C.maiz }}>{String(i + 1).padStart(2, '0')}</span>
                          <span className={`${display.className} uppercase text-xl md:text-2xl tracking-wide`} style={{ color: C.crema }}>{p.item}</span>
                          <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: C.boardLine }} aria-hidden="true" />
                          <span className={`${mono.className} text-base md:text-lg font-bold whitespace-nowrap`} style={{ color: C.crema }}>{p.precio}</span>
                        </li>
                      ))}
                    </ul>
                    <p className={`${mono.className} mt-4 text-[12px] uppercase tracking-wide`} style={{ color: 'rgba(255,249,234,0.55)' }}>
                      Precios referidos por clientes en Google Reviews
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LA COCINA: platos reales */}
        <section id="cocina" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] text-center`} style={{ color: C.ink }}>
              De la cocina <span style={{ color: C.verde }}>a la mesa</span>
            </h2>
            <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
              Platos reales fotografiados por quienes han comido en el local.
            </p>
          </Reveal>
          <div className="mt-10 columns-2 md:columns-3 gap-3 md:gap-4 [&>figure]:mb-3 md:[&>figure]:mb-4">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 60} className="break-inside-avoid">
                <figure className="overflow-hidden rounded-xl border-4" style={{ borderColor: C.crema, boxShadow: '0 8px 26px rgba(35,23,16,0.14)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/demos/comida-rapida-mexicana/${f.src}.webp`} alt={f.alt} className={`w-full object-cover ${f.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* RESEÑAS */}
        <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.papelOscuro }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <div className="text-center">
                <Stars value={4.6} color={C.rojo} className="w-5 h-5" />
                <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] mt-3`} style={{ color: C.ink }}>
                  Lo que dice <span style={{ color: C.rojo }}>Parral</span>
                </h2>
                <p className={`${mono.className} mt-3 text-[13px] uppercase tracking-wide`} style={{ color: C.muted }}>
                  {BIZ.rating} de 5 · {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 90}>
                  <figure className="rounded-2xl p-6 h-full border bg-paper" style={{ backgroundColor: C.crema, borderColor: C.line }}>
                    <blockquote className="text-[15px] leading-relaxed" style={{ color: C.ink }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className={`${mono.className} mt-4 text-[12px] uppercase tracking-wide`} style={{ color: C.rojo }}>
                      — {r.nombre} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DÓNDE: letrero real + mapa + horario */}
        <section id="donde" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <p className={`${mono.className} text-[12px] uppercase tracking-[0.2em] font-semibold`} style={{ color: C.verde }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] mt-3`} style={{ color: C.ink }}>
                El letrero de <span style={{ color: C.verde }}>la vereda</span>
              </h2>
              <address className="not-italic mt-4 text-lg leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}, Región del Maule
              </address>
              <p className="mt-3 text-[15px]" style={{ color: C.muted }}>
                Local chico que se llena en la hora de almuerzo: si vas con poco tiempo, pide antes por teléfono o WhatsApp.
              </p>
              <ul className="mt-5 space-y-2">
                {HORARIO.map((h) => (
                  <li key={h.dia} className="flex items-center justify-between rounded-xl px-4 py-2.5 border" style={{ borderColor: C.line, backgroundColor: C.crema }}>
                    <span className={`${mono.className} text-[13px] uppercase tracking-wide`} style={{ color: C.muted }}>{h.dia}</span>
                    <span className="text-[15px] font-bold" style={{ color: C.ink }}>{h.hora}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="verde">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="outline">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <figure className="relative rounded-2xl overflow-hidden border-4" style={{ borderColor: C.crema, boxShadow: '0 14px 36px rgba(35,23,16,0.2)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/demos/comida-rapida-mexicana/letrero.webp" alt="Letrero en la vereda de Comida Rápida Mexicana con banderines tricolor, en calle Urrutia, Parral" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  <figcaption className={`${mono.className} absolute bottom-2 left-2 text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-md`} style={{ backgroundColor: 'rgba(35,23,16,0.8)', color: C.crema }}>
                    Letrero real · Street View
                  </figcaption>
                </figure>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border-4" style={{ borderColor: C.crema, boxShadow: '0 14px 36px rgba(35,23,16,0.16)' }}>
                  <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.verde }}>
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-18 text-center" style={{ paddingBottom: '3.5rem' }}>
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98]`} style={{ color: C.crema }}>
                ¿Hambre de <span style={{ color: C.maiz }}>almuerzo?</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(255,249,234,0.85)' }}>
                Escribe por WhatsApp, pide por adelantado y retira en Urrutia 280.
              </p>
              <div className="mt-7">
                <Btn href={WA_LINK} tone="papel">Pedir al WhatsApp</Btn>
              </div>
            </Reveal>
          </div>
          <Banderines className="absolute bottom-0 left-0 rotate-180 opacity-80" />
        </section>
      </main>

      <footer style={{ backgroundColor: C.ink, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} uppercase text-2xl tracking-wide`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,249,234,0.7)' }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,249,234,0.8)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
