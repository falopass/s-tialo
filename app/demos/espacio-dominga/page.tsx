import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HOURS,
  REVIEWS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Paleta tomada de su logo real: letrero de neón rosa/menta/ámbar sobre
// negro, y del jardín con sauces donde atienden.
const C = {
  noche: '#0B1710',
  noche2: '#12271B',
  crema: '#F4EFE3',
  cremaDim: 'rgba(244,239,227,0.72)',
  rosa: '#FF6BAE',
  menta: '#7DF0C4',
  ambar: '#FFD466',
  line: 'rgba(244,239,227,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'espacio-dominga',
  title: `${BIZ.name} — Heladería de jardín en ${BIZ.city}`,
  description: `Heladería de jardín bajo los sauces en ${BIZ.city}: copas y bolitas San Francisco y Timaukel, terraza al aire libre y atención de su dueña. ${BIZ.address}, ${BIZ.city}.`,
  image: `${IMG}/jardin.webp`,
})

const NAV_LINKS = [
  { label: 'Sabores', href: '#sabores' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#visita' },
]

const NEON_ROSA = '0 0 16px rgba(255,107,174,0.55), 0 0 44px rgba(255,107,174,0.28)'
const NEON_MENTA = '0 0 16px rgba(125,240,196,0.5), 0 0 40px rgba(125,240,196,0.25)'

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.9a11.6 11.6 0 0 0 4.6 4.4c1.7.8 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2Z" />
    </svg>
  )
}

/** Banderines como los que cuelgan de verdad entre los sauces del local. */
function Bunting({ className = '' }: { className?: string }) {
  const cols = [C.rosa, C.menta, C.ambar]
  const flags = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 320 26" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path d="M0 4 Q 80 14 160 8 T 320 6" fill="none" stroke="rgba(244,239,227,0.55)" strokeWidth="1.4" />
      {flags.map((_, i) => {
        const x = 10 + i * 19.5
        const y = 6.5 + Math.sin(i * 0.9) * 3
        return <path key={i} d={`M${x} ${y} l8 0 l-4 11 Z`} fill={cols[i % 3]} opacity="0.92" />
      })}
    </svg>
  )
}

const SABORES = [
  { src: 'pistacho.webp', alt: 'Bolitas de helado verde servidas en copa en Espacio Dominga' },
  { src: 'lucuma.webp', alt: 'Bolitas de helado crema con trozos, servidas en Espacio Dominga' },
  { src: 'chips.webp', alt: 'Helado artesanal con trozos de chocolate en Espacio Dominga' },
  { src: 'limon.webp', alt: 'Bolitas de helado blanco recién sacadas del congelador' },
]

export default function EspacioDomingaDemo() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.noche, color: C.crema }}
    >
      <style>{`
        @keyframes dom-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .dom-marquee { animation: dom-marquee 26s linear infinite }
        @media (prefers-reduced-motion: reduce) { .dom-marquee { animation: none } }
      `}</style>
      <BlitzNav
        name={<span className={`${display.className} font-bold tracking-tight`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.noche, ink: C.crema, line: C.line, btnBg: C.rosa, btnInk: '#1A0A12' }}
      />

      {/* ── Hero: el jardín real, de noche de neón ─────────────────── */}
      <section id="inicio" className="relative min-h-svh flex flex-col">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/jardin.webp`}
            alt="Terraza de Espacio Dominga: mesas al aire libre bajo los sauces, con banderines de colores"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(11,23,16,0.62) 0%, rgba(11,23,16,0.45) 45%, rgba(11,23,16,0.92) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full flex-1 flex flex-col justify-end pb-14 md:pb-20 pt-32">
          <Bunting className="w-56 md:w-80 h-6 md:h-8 mb-5" />
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`}
              style={{ color: C.menta, textShadow: NEON_MENTA }}
            >
              Heladería de jardín · {BIZ.city}, {BIZ.region}
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-tight text-[clamp(2.9rem,11vw,6.5rem)] max-w-4xl`}
              style={{ color: C.crema, textShadow: '0 2px 30px rgba(0,0,0,0.45)' }}
            >
              Helado al fresco,
              <br />
              <span style={{ color: C.rosa, textShadow: NEON_ROSA }}>bajo los sauces.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.cremaDim }}>
              Una heladería-jardín en {BIZ.city}: mesas a la sombra, banderines de colores y copas
              bien servidas de helado San Francisco y Timaukel.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.rosa, color: '#1A0A12', boxShadow: NEON_ROSA }}
              >
                <WaIcon />
                Pedir por WhatsApp
              </a>
              <a
                href="#sabores"
                className="tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-colors"
                style={{ color: C.crema, border: `1px solid ${C.line}`, backgroundColor: 'rgba(11,23,16,0.4)' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de marcas ────────────────────────────────────────── */}
      <section
        aria-label="Marcas que venden"
        className="overflow-hidden py-4 border-y"
        style={{ borderColor: C.line, backgroundColor: C.noche2 }}
      >
        <div className="dom-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center shrink-0" aria-hidden={n === 1}>
              {['Helados San Francisco', 'Helados Timaukel', 'Copas y bolitas', 'Terraza al aire libre', 'San Clemente'].map(
                (t, i) => (
                  <span key={i} className={`${display.className} text-sm md:text-base font-bold uppercase tracking-widest flex items-center`}>
                    <span className="px-5" style={{ color: i % 2 ? C.menta : C.rosa }}>{t}</span>
                    <span style={{ color: C.ambar }} aria-hidden="true">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Sabores: mosaico de fotos reales ───────────────────────── */}
      <section id="sabores" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-3`} style={{ color: C.ambar }}>
            La carta de bolitas
          </p>
          <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight max-w-2xl`}>
            Copas que se piden por nombre en <span style={{ color: C.menta, textShadow: NEON_MENTA }}>San Clemente</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed" style={{ color: C.cremaDim }}>
            Trabajan con helados San Francisco y Timaukel — dos clásicos del Maule — servidos en
            bolitas generosas, copas con todo y conos para llevar a la terraza.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <Reveal className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[420px]">
            <Image src={`${IMG}/copa.webp`} alt="Copa de helado con barquillos y lluvia de chocolate en la terraza de Espacio Dominga" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            <span
              className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full`}
              style={{ backgroundColor: 'rgba(11,23,16,0.78)', color: C.ambar }}
            >
              La copa de la casa
            </span>
          </Reveal>
          {SABORES.map((s, i) => (
            <Reveal key={s.src} delay={i * 90} className="relative rounded-2xl overflow-hidden aspect-square">
              <Image src={`${IMG}/${s.src}`} alt={s.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
            </Reveal>
          ))}
          <Reveal delay={200} className="relative rounded-2xl overflow-hidden aspect-square">
            <Image src={`${IMG}/promo.webp`} alt="Afiche real de Espacio Dominga: promoción de cierre de temporada, helados San Francisco y Timaukel" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
            <span
              className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full`}
              style={{ backgroundColor: 'rgba(11,23,16,0.78)', color: C.menta }}
            >
              Afiche real del local
            </span>
          </Reveal>
        </div>
      </section>

      {/* ── La terraza ─────────────────────────────────────────────── */}
      <section id="terraza" className="scroll-mt-16" style={{ backgroundColor: C.noche2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image src={`${IMG}/duena.webp`} alt="La dueña de Espacio Dominga con un niño, ambos con conos de helado bajo los sauces" fill sizes="(max-width:768px) 100vw, 45vw" className="object-cover" />
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-3`} style={{ color: C.rosa, textShadow: NEON_ROSA }}>
                La terraza
              </p>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight`}>
                Mesas a la sombra,
                <br />
                helado a mano.
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.cremaDim }}>
                Espacio Dominga no es una vitrina al paso: es un patio con sauces llorones, mesas
                afuera y banderines, pensado para quedarse un rato. Atiende su propia dueña — y se
                nota en las reseñas.
              </p>
              <ul className="mt-7 space-y-3 text-sm md:text-base">
                {[
                  ['Terraza al aire libre', 'sombra de sauces y mesas para grupos'],
                  ['Fácil de ubicar', `${BIZ.address}, ${BIZ.landmark.toLowerCase()}`],
                  ['Horario de tarde', 'todos los días de 15:30 a 20:00'],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.ambar }} aria-hidden="true" />
                    <span>
                      <strong className="font-bold">{t}</strong>
                      <span style={{ color: C.cremaDim }}> — {d}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-8 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.menta, color: '#06281B', boxShadow: NEON_MENTA }}
              >
                <WaIcon />
                Consultar sabores del día
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ──────────────────────────────────────────────── */}
      <section id="opiniones" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="flex items-end gap-2">
              <span className={`${display.className} font-extrabold text-7xl md:text-8xl leading-none`} style={{ color: C.ambar, textShadow: '0 0 30px rgba(255,212,102,0.4)' }}>
                {BIZ.rating}
              </span>
              <span className="pb-2 inline-flex"><Stars value={5} color={C.ambar} /></span>
            </div>
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.cremaDim }}>
              {BIZ.reviewCount} reseña en Google
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} tap-44 mt-4 inline-block text-[11px] uppercase tracking-[0.22em] underline underline-offset-4`}
              style={{ color: C.menta }}
            >
              @{BIZ.instagram} · {BIZ.instagramFollowers} seguidores
            </a>
          </Reveal>
          <div className="space-y-4">
            {REVIEWS.map((r) => (
              <Reveal key={r.author}>
                <figure
                  className="rounded-3xl p-6 md:p-8 border"
                  style={{ backgroundColor: C.noche2, borderColor: C.line }}
                >
                  <Stars value={r.stars} color={C.ambar} />
                  <blockquote className="mt-4 text-base md:text-lg leading-relaxed">
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.cremaDim }}>
                    {r.author} · reseña de Google · {r.when}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visita ─────────────────────────────────────────────────── */}
      <section id="visita" className="scroll-mt-16" style={{ backgroundColor: C.noche2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-3`} style={{ color: C.menta, textShadow: NEON_MENTA }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight`}>
              Av. Huamachuco, {BIZ.city}
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal delay={80}>
              <div className="rounded-3xl overflow-hidden border h-full min-h-[300px]" style={{ borderColor: C.line }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="h-full rounded-3xl border p-6 md:p-8 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.noche }}>
                <dl className="space-y-5 flex-1">
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rosa }}>Dirección</dt>
                    <dd className="mt-1.5 text-base font-semibold">
                      {BIZ.address}, {BIZ.city}
                      <span className="block text-sm font-normal" style={{ color: C.cremaDim }}>{BIZ.landmark}</span>
                    </dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rosa }}>Horario</dt>
                    {HOURS.map((h) => (
                      <dd key={h.d} className="mt-1.5 text-base font-semibold">
                        {h.d} <span style={{ color: C.cremaDim }}>·</span> {h.h}
                      </dd>
                    ))}
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rosa }}>Pedidos</dt>
                    <dd className="mt-1.5 text-base font-semibold">{BIZ.phoneDisplay} <span className="text-sm font-normal" style={{ color: C.cremaDim }}>(WhatsApp)</span></dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.rosa, color: '#1A0A12', boxShadow: NEON_ROSA }}
                  >
                    <WaIcon />
                    Escribir ahora
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-semibold"
                    style={{ color: C.crema, border: `1px solid ${C.line}` }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-24 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-between text-xs" style={{ color: C.cremaDim }}>
          <p>
            <span className={`${display.className} font-bold text-sm`} style={{ color: C.crema }}>{BIZ.name}</span>
            {' '}· {BIZ.address}, {BIZ.city}, {BIZ.region}
          </p>
          <div className="flex items-center gap-5">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.menta }}>
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.menta }}>
              Google Maps
            </a>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
