import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_EVENTO,
  MAPS_EMBED,
  IMG,
  PRECIOS,
  CARTA,
  EVENTO_INCLUYE,
  CONDICIONES,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Del logo real: acuarela durazno sobre tinta chocolate, sobre papel crema.
const C = {
  papel: '#FBF3EA',
  papel2: '#F5E8D9',
  tinta: '#3B241B',
  durazno: '#E2906B',
  duraznoOsc: '#C4683F',
  rosa: '#E8BBA4',
  cacao: '#5A3524',
  muda: 'rgba(59,36,27,0.72)',
  linea: 'rgba(59,36,27,0.16)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'pasteles-maca',
  title: 'Pasteles Maca — Repostería y eventos en Talca, Maule y Colín | Sitiazo.cl',
  description:
    'Tortas, pasteles y dulces chilenos a pedido, y servicio de eventos completo. Reparto a domicilio en Talca, Maule y Colín. Pedidos por WhatsApp.',
  image: `${IMG}/torta-chocolate.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Precios', href: '#precios' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Pedidos y reparto', href: '#pedidos' },
]

// Mancha de acuarela — motivo del logo real (sello en acuarela durazno).
function Acuarela({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        borderRadius: '62% 38% 55% 45% / 48% 55% 45% 52%',
        background: `radial-gradient(closest-side, ${C.rosa} 0%, ${C.durazno}55 55%, transparent 72%)`,
        filter: 'blur(2px)',
        ...style,
      }}
    />
  )
}

function Foto({
  src,
  alt,
  className = '',
  ratio = '4 / 3',
}: {
  src: string
  alt: string
  className?: string
  ratio?: string
}) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ borderRadius: 18, border: `1px solid ${C.linea}`, aspectRatio: ratio, backgroundColor: C.papel2 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  )
}

export default function PastelesMaca() {
  return (
    <main className={body.className} style={{ backgroundColor: C.papel, color: C.tinta, ...SPACING }}>
      <BlitzNav
        name={<span className={display.className}>Pasteles Maca</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir ahora"
        logoSrc={`${IMG}/logo.webp`}
        fontClass={mono.className}
        theme={{
          over: 'light',
          bar: 'rgba(251,243,234,0.94)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.cacao,
          btnInk: C.papel,
        }}
      />

      {/* HERO — sello en acuarela sobre papel, con el logo real de Maca */}
      <header id="inicio" className="relative overflow-hidden">
        <Acuarela className="-top-24 -left-24 w-[420px] h-[420px]" />
        <Acuarela
          className="top-40 -right-28 w-[360px] h-[360px]"
          style={{ background: `radial-gradient(closest-side, #F0C9A0 0%, ${C.durazno}44 60%, transparent 74%)` }}
        />
        <div className="relative max-w-5xl mx-auto px-5 pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo de Pasteles Maca — Catering & Bakery, Maca Araya, Talca Chile"
                className="w-36 md:w-44 h-auto"
              />
              <p
                className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.22em]`}
                style={{ color: C.duraznoOsc }}
              >
                Repostería y eventos por pedido · Talca — Maule — Colín
              </p>
              <h1
                className={`${display.className} mt-4 text-4xl md:text-6xl leading-[1.02] font-medium`}
              >
                La mesa dulce que llega
                <em className="block" style={{ color: C.duraznoOsc }}>
                  hasta tu casa en el Maule
                </em>
              </h1>
              <p className="mt-5 text-base md:text-lg max-w-xl" style={{ color: C.muda }}>
                {BIZ.duena} hornea tortas, dulces chilenos y vasitos por pedido, y monta eventos
                completos: recepciones, bautizos, matrimonios y cumpleaños. Encargas por WhatsApp,
                con reparto a domicilio.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  className={`${mono.className} inline-flex items-center gap-2 px-6 text-sm uppercase tracking-[0.14em]`}
                  style={{ backgroundColor: C.cacao, color: C.papel, borderRadius: 999, minHeight: 48 }}
                >
                  Hacer un pedido →
                </a>
                <a
                  href="#carta"
                  className={`${mono.className} inline-flex items-center px-6 text-sm uppercase tracking-[0.14em]`}
                  style={{ border: `1.5px solid ${C.cacao}`, color: C.cacao, borderRadius: 999, minHeight: 48 }}
                >
                  Ver la carta
                </a>
              </div>
            </div>
            <div className="relative">
              <Acuarela className="-inset-6 w-auto h-auto" style={{ inset: -24 }} />
              <Foto
                src={`${IMG}/torta-chocolate.webp`}
                alt="Torta de chocolate decorada con frutillas frescas — foto real de Pasteles Maca"
                ratio="1 / 1"
                className="relative shadow-xl"
              />
              <p
                className={`${mono.className} absolute -bottom-3 left-4 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em]`}
                style={{ backgroundColor: C.tinta, color: C.papel, borderRadius: 6 }}
              >
                Torta panqueque chocolate · 15 pers. · $ 18.000
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* TIRA DE FOTOS REALES */}
      <section className="border-y" style={{ borderColor: C.linea, backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Foto src={`${IMG}/macarrones.webp`} alt="Macarrones de colores — foto real de Pasteles Maca" ratio="1 / 1" />
          <Foto src={`${IMG}/caja-mixta.webp`} alt="Caja mixta de dulces variados — foto real de Pasteles Maca" ratio="1 / 1" />
          <Foto src={`${IMG}/vasitos.webp`} alt="Vasitos de mousse surtidos — foto real de Pasteles Maca" ratio="1 / 1" />
          <Foto src={`${IMG}/berlines.webp`} alt="Berlines espolvoreados con azúcar — foto real de Pasteles Maca" ratio="1 / 1" />
        </div>
      </section>

      {/* LA CARTA */}
      <section id="carta" className="max-w-5xl mx-auto px-5 py-16 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.duraznoOsc }}>
            La carta — publicada en su sitio
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-medium`}>
            Dulce chileno de verdad,
            <em style={{ color: C.duraznoOsc }}> hecho a pedido</em>
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {CARTA.map((cat) => (
            <Reveal key={cat.titulo}>
              <article
                className="h-full p-6 md:p-7"
                style={{ backgroundColor: '#FFFDF9', border: `1px solid ${C.linea}`, borderRadius: 18 }}
              >
                <h3 className={`${display.className} text-2xl`} style={{ color: C.cacao }}>
                  {cat.titulo}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[15px] leading-snug" style={{ color: C.muda }}>
                      <span aria-hidden="true" style={{ color: C.duraznoOsc }}>✳</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRECIOS — tabla real del sitio */}
      <section id="precios" className="py-16 md:py-20" style={{ backgroundColor: C.cacao }}>
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rosa }}>
              Dulces tentaciones — precios publicados
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-medium`} style={{ color: C.papel }}>
              Lo que cuesta endulzar la semana
            </h2>
          </Reveal>
          <div className="mt-9" style={{ borderTop: `1px solid rgba(251,243,234,0.25)` }}>
            {PRECIOS.map((p) => (
              <Reveal key={p.item}>
                <div
                  className="flex items-baseline justify-between gap-4 py-4"
                  style={{ borderBottom: `1px dashed rgba(251,243,234,0.28)` }}
                >
                  <p className="text-[15px] md:text-base" style={{ color: C.papel }}>
                    {p.item}
                  </p>
                  <p className={`${mono.className} text-base md:text-lg whitespace-nowrap`} style={{ color: C.rosa }}>
                    {p.precio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.14em] leading-relaxed`} style={{ color: 'rgba(251,243,234,0.75)' }}>
            Tortas con 4 días de anticipación · otros productos con 3 días · reparto $ 3.000 en Talca, Maule y Colín — gratis sobre $ 15.000
          </p>
        </div>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="max-w-5xl mx-auto px-5 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="relative">
              <Foto
                src={`${IMG}/mesa-evento.webp`}
                alt="Mesa de dulces montada para un evento — foto real de Pasteles Maca"
                ratio="4 / 5"
                className="shadow-lg"
              />
              <Foto
                src={`${IMG}/frutillas.webp`}
                alt="Frutillas frescas para decorar — foto real de Pasteles Maca"
                ratio="1 / 1"
                className="absolute -bottom-6 -right-4 w-32 md:w-40 shadow-xl"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.duraznoOsc }}>
              Servicio de eventos
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-4xl font-medium`}>
              La recepción entera,
              <em style={{ color: C.duraznoOsc }}> sin que muevas un dedo</em>
            </h2>
            <p className="mt-4 text-[15px]" style={{ color: C.muda }}>
              Maca arma el evento completo — solo llegas a celebrar. Un evento puede incluir:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2.5">
              {EVENTO_INCLUYE.map((e) => (
                <li
                  key={e}
                  className={`${mono.className} text-[12px] uppercase tracking-[0.1em] px-3 py-2.5`}
                  style={{ border: `1.5px solid ${C.linea}`, borderRadius: 999, color: C.cacao }}
                >
                  ✓ {e}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_EVENTO}
              className={`${mono.className} mt-7 inline-flex items-center gap-2 px-6 text-sm uppercase tracking-[0.14em]`}
              style={{ backgroundColor: C.duraznoOsc, color: '#FFFDF9', borderRadius: 999, minHeight: 48 }}
            >
              Cotizar mi evento →
            </a>
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muda }}>
              Cotiza con mínimo 2 semanas de anticipación
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <Foto src={`${IMG}/alfajores.webp`} alt="Alfajores de hojas rellenos de manjar — foto real de Pasteles Maca" ratio="1 / 1" />
          <Foto src={`${IMG}/merenguitos.webp`} alt="Merenguitos con manjar y almendra — foto real de Pasteles Maca" ratio="1 / 1" />
          <Foto src={`${IMG}/bocaditos.webp`} alt="Bocaditos de chocolate y manjar — foto real de Pasteles Maca" ratio="1 / 1" />
        </div>
      </section>

      {/* PEDIDOS Y REPARTO */}
      <section id="pedidos" className="py-16 md:py-20" style={{ backgroundColor: C.papel2, borderTop: `1px solid ${C.linea}` }}>
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.duraznoOsc }}>
              Cómo pedir
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-4xl font-medium`}>
              Encargas por WhatsApp,
              <em style={{ color: C.duraznoOsc }}> reparto a tu puerta</em>
            </h2>
            <dl className="mt-7 space-y-0">
              {CONDICIONES.map((c) => (
                <div
                  key={c.k}
                  className="flex items-baseline justify-between gap-4 py-3"
                  style={{ borderBottom: `1px solid ${C.linea}` }}
                >
                  <dt className={`${mono.className} text-[12px] uppercase tracking-[0.12em]`} style={{ color: C.cacao }}>
                    {c.k}
                  </dt>
                  <dd className="text-[15px] text-right" style={{ color: C.tinta }}>
                    {c.v}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                className={`${mono.className} inline-flex items-center gap-2 px-6 text-sm uppercase tracking-[0.14em]`}
                style={{ backgroundColor: C.cacao, color: C.papel, borderRadius: 999, minHeight: 48 }}
              >
                WhatsApp {BIZ.phoneDisplay}
              </a>
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center px-6 text-sm uppercase tracking-[0.14em]`}
                style={{ border: `1.5px solid ${C.cacao}`, color: C.cacao, borderRadius: 999, minHeight: 48 }}
              >
                @{BIZ.instagram}
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full min-h-[300px] overflow-hidden" style={{ borderRadius: 18, border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Zona de reparto de Pasteles Maca: Talca, Maule y Colín"
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
              />
            </div>
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em] leading-relaxed`} style={{ color: C.muda }}>
              Trabaja por pedido — sin local al público. Reparte en Talca, Maule y Colín; otros destinos a convenir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 py-9 flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div>
            <p className={`${display.className} text-xl`}>{BIZ.name}</p>
            <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(251,243,234,0.65)' }}>
              {BIZ.lema} · {BIZ.duena} · {BIZ.zona.join(' · ')}
            </p>
          </div>
          <div className={`${mono.className} text-[11px] uppercase tracking-[0.14em] space-y-1.5`} style={{ color: 'rgba(251,243,234,0.8)' }}>
            <p>
              <a href={WA_LINK} className="underline underline-offset-4">WhatsApp {BIZ.phoneDisplay}</a>
            </p>
            <p>
              <a href={BIZ.sitioUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{BIZ.sitio}</a>
              {' · '}
              <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@{BIZ.instagram}</a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Pedir por WhatsApp" />
    </main>
  )
}
