import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import { BIZ, C, HOURS, MAPS_URL, PASOS, PILARES, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', style: 'italic' },
  ],
  weight: '100 900',
})
const body = localFont({ src: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' })

export const metadata: Metadata = demoMetadata({
  slug: 'hope-bakery-chile',
  title: 'Hope Bakery Chile · Panadería y pastelería artesanal en Talca',
  description:
    'Pan de masa madre de cultivo y pastelería artesanal en Talca, camino a la viña. Encarga por WhatsApp a Hope Bakery Chile.',
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'
const btn = `${body.className} inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-bold transition-transform active:scale-95 ${focusRing} tap-44`

/** Motivo gráfico: los cortes de greñado de una hogaza, tres curvas paralelas. */
function Scores({ color = C.crust, className = 'h-4 w-10' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 40 16" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M2 12 C8 4 14 4 20 12" />
      <path d="M12 12 C18 4 24 4 30 12" />
      <path d="M22 12 C28 4 34 4 40 12" transform="translate(-2 0)" />
    </svg>
  )
}

function Eyebrow({ children, color = C.crustDeep }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${body.className} mb-3 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.24em]`} style={{ color }}>
      <Scores color={color} className="h-3 w-8" />
      {children}
    </p>
  )
}

const FOTOS = [
  { src: '/demos/hope-bakery-chile/estantes.webp', alt: 'Estantes de madera con panes del día en el local de Hope Bakery' },
  { src: '/demos/hope-bakery-chile/interior.webp', alt: 'Interior del local de Hope Bakery: vitrina y mesón' },
  { src: '/demos/hope-bakery-chile/foto-1.webp', alt: 'Ingredientes del obrador: frutos secos y chips de chocolate' },
  { src: '/demos/hope-bakery-chile/foto-2.webp', alt: 'Torta de Navidad decorada de Hope Bakery' },
  { src: '/demos/hope-bakery-chile/foto-3.webp', alt: 'Galleta de jengibre decorada a mano' },
  { src: '/demos/hope-bakery-chile/foto-4.webp', alt: 'Pastel navideño con corona de fondant' },
]

function PilarIcon({ n }: { n: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (n === '01')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
        <path d="M6 14 C6 8 9 4 12 4 C15 4 18 8 18 14 V18 C18 19 17 20 16 20 H8 C7 20 6 19 6 18 Z" />
        <path d="M9 12 C10 10 11 10 12 12 M12 12 C13 10 14 10 15 12" />
        <path d="M9 16 H15" />
      </svg>
    )
  if (n === '02')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
        <path d="M12 21 C12 14 14 8 20 4 C20 11 17 17 12 21 Z" />
        <path d="M12 21 C12 15 10 11 5 8 C5 13 7 18 12 21" />
        <path d="M12 21 V13" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
      <path d="M4 12 H20 V18 C20 19 19 20 18 20 H6 C5 20 4 19 4 18 Z" />
      <path d="M6 12 C6 9 8 8 12 8 C16 8 18 9 18 12" />
      <path d="M12 8 V5 M10 5 H14" />
    </svg>
  )
}

export default function HopeBakeryPage() {
  return (
    <div className={`${body.className} min-h-screen overflow-x-clip antialiased`} style={{ backgroundColor: C.flour, color: C.ink }}>
      <Chrome fontClass={display.className} />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.rye, color: C.flour }}>
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 85% 20%, rgba(226,176,74,0.16), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(180,86,46,0.2), transparent 60%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-24 md:grid-cols-[1fr_1.05fr] md:items-center md:px-8 md:pb-20 md:pt-32">
          <Reveal>
            <Eyebrow color={C.wheatSoft}>Panadería · Pastelería · {BIZ.city}</Eyebrow>
            <h1 className={`${display.className} text-[clamp(2.9rem,11vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.03em]`}>
              Pan que
              <br />
              <em className="font-normal" style={{ color: C.wheatSoft }}>
                se toma su tiempo
              </em>
              .
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={{ color: C.mutedOnDark }}>
              Masa madre de cultivo, producción orgánica y pastelería artesanal, camino a la viña en Talca.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.wheat, color: C.ink }}>
                Encargar por WhatsApp
              </a>
              <a href="#pan" className={`${btn} border`} style={{ borderColor: 'rgba(251,246,236,0.4)', color: C.flour, paddingTop: 11, paddingBottom: 11 }}>
                Conocer el pan
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Masa madre', 'Orgánico', 'Sin aditivos', `★ ${BIZ.rating} en Google`].map((t) => (
                <span key={t} className="rounded-full border px-3 py-1.5 text-sm font-semibold" style={{ borderColor: 'rgba(242,212,138,0.45)', color: C.wheatSoft }}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border shadow-2xl" style={{ borderColor: C.lineOnDark }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/demos/hope-bakery-chile/hero.webp"
                  alt="Hogazas recién horneadas en la rejilla del obrador de Hope Bakery"
                  className="h-auto w-full aspect-[3/4] sm:aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
              <div
                className={`${display.className} absolute -bottom-4 right-5 rounded-full px-4 py-2 text-base font-semibold italic shadow-lg md:right-8`}
                style={{ backgroundColor: C.flour, color: C.rye }}
              >
                fermentación lenta
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El pan ── */}
      <section id="pan" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>El pan</Eyebrow>
                <h2 className={`${display.className} text-5xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-6xl`}>
                  Tres cosas que <em className="font-normal" style={{ color: C.crustDeep }}>se sienten</em> al primer trozo.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
                Lo que describe la ficha pública de Hope Bakery: masa madre de cultivo, ingredientes de calidad y producción orgánica, sin aditivos químicos.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
            {PILARES.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <article
                  className="relative flex h-full flex-col rounded-[28px] border bg-white p-6 transition-transform hover:-translate-y-1 md:p-7"
                  style={{ borderColor: C.line, boxShadow: '0 14px 34px rgba(42,24,16,0.06)' }}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: C.flour2, color: C.crustDeep }}>
                      <PilarIcon n={p.n} />
                    </span>
                    <Scores color={C.wheat} className="h-5 w-12" />
                  </div>
                  <h3 className={`${display.className} mt-6 text-3xl font-semibold leading-none tracking-[-0.02em]`}>{p.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Del obrador: fotos reales ── */}
      <section id="fotos" className="scroll-mt-20" style={{ backgroundColor: C.flour2 }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Del obrador</Eyebrow>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <h2 className={`${display.className} text-5xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-6xl`}>
                Lo que sale <em className="font-normal" style={{ color: C.crustDeep }}>de este horno</em>.
              </h2>
              <p className="max-w-lg text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
                Fotos reales del local y de los encargos publicados por Hope Bakery.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 70}>
                <figure className="overflow-hidden rounded-[22px] border" style={{ borderColor: C.line, boxShadow: '0 10px 26px rgba(42,24,16,0.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.src} alt={f.alt} className="w-full aspect-square object-cover" loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8">
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${display.className} text-lg font-semibold italic underline underline-offset-4 decoration-2 ${focusRing} tap-44`} style={{ color: C.crustDeep, textDecorationColor: 'rgba(143,63,30,0.35)' }}>
                Más fotos en Instagram →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Encargos ── */}
      <section id="encargos" className="scroll-mt-20" style={{ backgroundColor: C.rye, color: C.flour }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow color={C.wheatSoft}>Encargos</Eyebrow>
            <h2 className={`${display.className} text-5xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-6xl`}>
              Pide con tiempo, <em className="font-normal" style={{ color: C.wheatSoft }}>como el pan</em>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: C.mutedOnDark }}>
              El pan de masa madre no se apura. Escribe por WhatsApp y coordina qué quieres y cuándo lo retiras.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} mt-8 w-full sm:w-auto`} style={{ backgroundColor: C.wheat, color: C.ink }}>
              Hacer un encargo
            </a>
          </Reveal>
          <Reveal delay={120}>
            <ol className="grid gap-3">
              {PASOS.map((p, i) => (
                <li key={p.title} className="flex gap-4 rounded-[22px] border p-5" style={{ borderColor: C.lineOnDark, backgroundColor: C.rye2 }}>
                  <span className={`${display.className} flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl font-semibold`} style={{ backgroundColor: C.wheat, color: C.ink }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-2xl font-semibold leading-tight tracking-[-0.02em]`}>{p.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed" style={{ color: C.mutedOnDark }}>
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── Horario ── */}
      <section id="horario" className="scroll-mt-20" style={{ backgroundColor: C.flour2 }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <Reveal>
              <Eyebrow>Horario publicado</Eyebrow>
              <h2 className={`${display.className} text-5xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-6xl`}>
                El domingo, <em className="font-normal" style={{ color: C.crustDeep }}>pan fresco</em>.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
                Es el horario que aparece en la ficha pública. Para otros días o encargos especiales, consulta por WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-[28px] border bg-white p-6 md:p-8" style={{ borderColor: C.line }}>
                <Scores color={C.wheat} className="h-5 w-12" />
                <dl className="mt-4 divide-y" style={{ borderColor: C.line }}>
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex items-baseline justify-between gap-4 py-4" style={{ borderColor: C.line }}>
                      <dt className="text-base font-semibold">{h.days}</dt>
                      <dd className={`${display.className} text-3xl font-semibold tracking-[-0.02em]`} style={{ color: C.crustDeep }}>
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-sm" style={{ color: C.muted }}>
                  Otros días: se confirma por WhatsApp.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <Reveal>
              <Eyebrow>Dónde estamos</Eyebrow>
              <h2 className={`${display.className} text-5xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-6xl`}>
                Camino a <em className="font-normal" style={{ color: C.crustDeep }}>la viña</em>
              </h2>
              <address className="mt-6 not-italic">
                <p className="text-lg font-semibold">{BIZ.address}</p>
                <p className="text-base" style={{ color: C.muted }}>
                  {BIZ.city}, {BIZ.region}
                </p>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.rye, color: C.flour }}>
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btn} border-2`} style={{ borderColor: C.rye, color: C.rye, paddingTop: 10, paddingBottom: 10 }}>
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4">
                <figure className="overflow-hidden rounded-[28px] border" style={{ borderColor: C.line, boxShadow: '0 10px 26px rgba(42,24,16,0.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/demos/hope-bakery-chile/local.webp"
                    alt="Furgón de reparto de Hope Bakery frente al local en Camino a la Viña"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className="rounded-[28px] border bg-white p-6 md:p-7" style={{ borderColor: C.line }}>
                  <p className={`${display.className} text-2xl font-semibold tracking-[-0.02em]`}>Síguenos</p>
                <p className="mt-1 text-sm" style={{ color: C.muted }}>
                  Fotos del pan y novedades del local.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${btn} justify-between border`} style={{ borderColor: C.line, color: C.ink, paddingTop: 11, paddingBottom: 11 }}>
                    Instagram <span aria-hidden="true">→</span>
                  </a>
                  <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className={`${btn} justify-between border`} style={{ borderColor: C.line, color: C.ink, paddingTop: 11, paddingBottom: 11 }}>
                    Facebook <span aria-hidden="true">→</span>
                  </a>
                </div>
                  <p className="mt-4 text-sm font-semibold" style={{ color: C.crustDeep }}>
                    ★ {BIZ.rating} en Google · {BIZ.reviews} reseñas
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.rye, color: C.flour }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-6 pt-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className={`${display.className} text-2xl font-semibold tracking-[-0.02em]`}>{BIZ.name}</p>
            <p className="text-xs" style={{ color: C.mutedOnDark }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              WhatsApp
            </a>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Maps
            </a>
            <Scores color={C.wheat} className="h-4 w-10" />
          </div>
        </div>
      </footer>
      <DemoBand name={BIZ.short} />
    </div>
  )
}
