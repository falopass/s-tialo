import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Identidad tomada del letrero real de la fachada: banda violeta + franja
// dorada, con la flor del logo como acento.
const C = {
  paper: '#FAF6FC',
  plum: '#341652',
  plumDeep: '#2A0F45',
  violet: '#8A3BC0',
  violetDeep: '#6E22A8',
  violetSoft: '#DCC7EE',
  gold: '#F2C14E',
  ink: '#2A1235',
  muted: 'rgba(42,18,53,0.64)',
  bone: '#FDF9FF',
  mutedL: 'rgba(253,249,255,0.72)',
  line: 'rgba(42,15,69,0.14)',
  lineL: 'rgba(220,199,238,0.25)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'mia-centro-de-estetica',
  title: 'Mía Centro De Estética — la casa morada de Curicó',
  description: 'Peluquería, depilación, manicure, pedicure y bronceado en Pje. R 8, Curicó. 4,8 estrellas en 31 reseñas de Google. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Manicure', href: '#manicure' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.violetSoft : C.violetDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Franja dorada + violeta, el guiño gráfico del letrero de la fachada. */
function GoldBar({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-[3px] w-10 rounded-full" style={{ backgroundColor: C.gold }} />
      <span className="h-[3px] w-3 rounded-full" style={{ backgroundColor: C.violet }} />
    </div>
  )
}

export default function MiaCentroDeEsteticaPage() {
  return (
    <div
      className={`${body.className} mia-page min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .mia-page a:focus-visible { outline: 2px solid #6E22A8; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(250,246,252,0.94)',
          ink: C.plum,
          line: C.line,
          btnBg: C.violetDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la casa morada, foto real de la fachada ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-0 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <Reveal>
            <Eyebrow light>Centro de estética · Curicó</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,8.6vw,4.8rem)] mb-6`}
              style={{ color: C.bone }}
            >
              La casa morada
              <br />
              de <em style={{ color: C.gold }}>Pje. R 8</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.mutedL }}>
              Peluquería, depilación, manicure, pedicure y bronceado: los
              cinco servicios del tótem que lleva años en la reja, en pleno
              centro de Curicó.
            </p>
            <div className="flex flex-wrap gap-3 mb-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
                style={{ backgroundColor: C.gold, color: C.plum, boxShadow: '0 10px 30px rgba(242,193,78,0.35)' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full border tap-44 transition-colors hover:bg-white/10`}
                style={{ borderColor: C.lineL, color: C.bone }}
              >
                Ver servicios
              </a>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 tap-44" style={{ color: C.bone }}>
              <Stars value={BIZ.rating} color={C.gold} className="w-4 h-4" />
              <span className={`${display.className} font-bold text-sm`} style={{ color: C.bone }}>{BIZ.ratingLabel}</span>
              <span className="text-sm underline underline-offset-4 decoration-1" style={{ color: C.mutedL }}>
                {BIZ.reviews} reseñas en Google
              </span>
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative pb-14 md:pb-16">
              <figure
                className="relative aspect-[4/3] overflow-hidden"
                style={{ borderRadius: '24px', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}
              >
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Mía Centro De Estética en Pje. R 8, Curicó: casa blanca con letrero violeta y el tótem de servicios"
                  fill
                  priority
                  sizes="(min-width:768px) 45vw, 90vw"
                  className="object-cover"
                />
              </figure>
              {/* Tarjeta del logo, como el panel que cuelga de la reja */}
              <div
                className="absolute -bottom-4 left-4 md:-left-6 rounded-2xl p-4 pr-6 flex items-center gap-3 shadow-xl"
                style={{ backgroundColor: C.bone }}
              >
                <Image src={`${IMG}/logo.webp`} alt="" width={52} height={52} className="rounded-full" aria-hidden="true" />
                <div>
                  <p className={`${display.className} font-bold text-lg leading-none`} style={{ color: C.plum }}>Mía</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] mt-1" style={{ color: C.violetDeep }}>Centro de estética</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        {/* La banda violeta del letrero, con la lista del tótem */}
        <div style={{ backgroundColor: C.violetDeep }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-center gap-x-7 gap-y-1.5">
            {SERVICIOS.map((s) => (
              <span
                key={s.name}
                className={`${display.className} uppercase font-bold text-[11px] md:text-xs tracking-[0.22em] flex items-center gap-2`}
                style={{ color: C.bone }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios: el tótem de la entrada ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ backgroundColor: C.violetDeep, boxShadow: '0 20px 50px rgba(52,22,82,0.28)' }}
            >
              <div className="px-7 md:px-8 pt-7 pb-2">
                <p className={`${display.className} text-[10px] uppercase tracking-[0.3em] font-bold`} style={{ color: C.violetSoft }}>
                  El tótem de la reja
                </p>
                <p className={`${display.className} text-2xl md:text-3xl font-bold mt-2`} style={{ color: C.bone }}>
                  Lo que se hace aquí
                </p>
              </div>
              <ul>
                {SERVICIOS.map((s, i) => (
                  <li key={s.name} className="flex items-baseline gap-4 px-7 md:px-8 py-4 border-t" style={{ borderColor: 'rgba(253,249,255,0.16)', color: C.bone }}>
                    <span className={`${display.className} text-sm font-bold`} style={{ color: C.gold }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`${display.className} uppercase font-bold text-base md:text-lg tracking-[0.08em]`} style={{ color: C.bone }}>
                      {s.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="px-7 md:px-8 py-6" style={{ backgroundColor: 'rgba(0,0,0,0.18)' }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block uppercase font-bold text-xs tracking-[0.14em] px-7 py-3 rounded-full tap-44 transition-all hover:brightness-110`}
                  style={{ backgroundColor: C.gold, color: C.plum }}
                >
                  Consultar hora
                </a>
              </div>
            </div>
          </Reveal>
          <div className="space-y-8">
            <Reveal>
              <Eyebrow>Servicios</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em]`} style={{ color: C.plum }}>
                Cinco líneas
                <br />
                <em>en el mismo tótem</em>
              </h2>
              <GoldBar className="mt-5" />
            </Reveal>
            <ul className="space-y-5">
              {SERVICIOS.map((s) => (
                <li key={s.name} className="flex gap-4 items-start">
                  <span className="mt-2 inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.violet }} aria-hidden="true" />
                  <div>
                    <h3 className={`${display.className} font-bold text-lg`} style={{ color: C.plum }}>{s.name}</h3>
                    <p className="text-sm leading-relaxed mt-0.5" style={{ color: C.muted }}>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Reveal delay={80}>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <figure className="relative aspect-[4/5] rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                  <Image src={`${IMG}/masaje.webp`} alt="Masaje relajante en cabina de Mía Centro De Estética" fill sizes="(min-width:768px) 25vw, 45vw" className="object-cover" />
                  <figcaption className="absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-[0.16em] font-bold px-3 py-2" style={{ backgroundColor: 'rgba(42,15,69,0.82)', color: C.bone }}>
                    Masajes
                  </figcaption>
                </figure>
                <figure className="relative aspect-[4/5] rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                  <Image src={`${IMG}/alisado.webp`} alt="Alisado con Brasil Coffee Liss, trabajo publicado por Mía en Facebook" fill sizes="(min-width:768px) 25vw, 45vw" className="object-cover" />
                  <figcaption className="absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-[0.16em] font-bold px-3 py-2" style={{ backgroundColor: 'rgba(42,15,69,0.82)', color: C.bone }}>
                    Alisados
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Manicure: las fotos que suben ellas mismas ── */}
      <section id="manicure" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Manicure y pedicure</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-12">
              <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.bone }}>
                Las manos
                <br />
                lo dicen
              </h2>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutedL }}>
                Fotos publicadas por el propio centro en su ficha de Google:
                esmalte permanente, glitter y nail art hechos en la casa.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { src: 'unas1', alt: 'Uñas en tonos menta con glitter dorado hechas en Mía' },
              { src: 'unas2', alt: 'Manicure rosada con detalle en glitter hecha en Mía' },
              { src: 'unas3', alt: 'Esmaltado rosado con acento dorado, trabajo de Mía' },
              { src: 'unas4', alt: 'Uñas celestes con glitter plateado hechas en Mía' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <figure
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                  style={{ border: `3px solid ${i % 2 ? C.gold : C.violetSoft}` }}
                >
                  <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:768px) 22vw, 44vw" className="object-cover" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones: citas reales de Google ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow>Lo que dicen</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-5`} style={{ color: C.plum }}>
              {BIZ.ratingLabel} estrellas
              <br />
              <em>en Google</em>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en la ficha de Maps y{' '}
              {BIZ.facebookFollowers} personas siguiendo su Facebook. Las
              citas son reales, con nombre y fecha.
            </p>
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center gap-2 uppercase font-bold text-xs tracking-[0.14em] tap-44 underline underline-offset-4`}
              style={{ color: C.violetDeep }}
            >
              facebook.com/centrodeesteticamia →
            </a>
          </Reveal>
          <div className="space-y-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure
                  className="rounded-2xl p-6 md:p-7"
                  style={{ backgroundColor: '#fff', border: `1px solid ${C.line}` }}
                >
                  <Stars value={5} color={C.gold} className="w-3.5 h-3.5" />
                  <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mt-3 mb-4`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: C.violetDeep }}>
                    {r.author} <span className="font-normal" style={{ color: C.muted }}>· {r.when} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>La casa</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mb-6`} style={{ color: C.bone }}>
              Pasaje R 8,
              <br />
              <span style={{ color: C.violetSoft }}>Curicó centro</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.mutedL }}>
              Se reconoce de lejos: la casa blanca con la banda morada y el
              tótem violeta en la reja. La hora se agenda por WhatsApp.
            </p>
            <dl className="space-y-0 border-t mb-8" style={{ borderColor: C.lineL }}>
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                { k: 'Facebook', v: `${BIZ.facebookFollowers} seguidores`, href: BIZ.facebook },
              ].map((d) => (
                <div key={d.k} className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: C.lineL }}>
                  <dt className={`${display.className} text-[10px] uppercase tracking-[0.24em] font-bold`} style={{ color: C.violetSoft }}>{d.k}</dt>
                  <dd className="text-sm md:text-base text-right" style={{ color: C.bone }}>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 tap-44">{d.v}</a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-4 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
              style={{ backgroundColor: C.gold, color: C.plum }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative min-h-[320px] rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.lineL}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 text-xs font-bold px-4 py-2 rounded-full shadow-lg tap-44"
                style={{ backgroundColor: C.bone, color: C.plum }}
              >
                Open in Maps ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.plumDeep, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={44} height={44} className="rounded-full" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-bold text-lg leading-none`} style={{ color: C.bone }}>{BIZ.name}</p>
              <p className="text-xs mt-1" style={{ color: C.mutedL }}>{BIZ.rubro} · {BIZ.city}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.violetSoft }}>{BIZ.phoneDisplay}</a>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.violetSoft }}>Facebook</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.violetSoft }}>Google Maps</a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineL }}>
          <p className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-5 text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(220,199,238,0.5)' }}>
            Sitio de ejemplo creado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Sitiazo</a>
            {' '}— fotos y reseñas reales del negocio ·{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              Página de muestra — ¿lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
