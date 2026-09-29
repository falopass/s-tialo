import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, FICHA } from './content'

const display = localFont({
  src: [{ path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Mantel de mesa de pueblo: cuadrillé teja sobre papel, verde acacia.
const C = {
  mantel: '#F7F1E3',
  mantel2: '#F0E6CF',
  tinta: '#2C2018',
  teja: '#A83A2A',
  tejaOsc: '#7E2B1F',
  acacia: '#4C6B3C',
  amarillo: '#E3B341',
  muda: 'rgba(44,32,24,0.72)',
  linea: 'rgba(44,32,24,0.16)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-acacio',
  title: 'El Acacio — Restaurante en Av. Libertad, Maule | Sitiazo.cl',
  description:
    'Restaurante El Acacio en Av. Libertad 360, pueblo de Maule, Región del Maule. Consultas y pedidos al +56 9 9215 1424.',
})

const NAV_LINKS = [
  { label: 'La ficha', href: '#ficha' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Cuadrillé de mantel — franja decorativa.
function Mantel({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`h-5 w-full ${className}`}
      style={{
        backgroundColor: C.mantel,
        backgroundImage: `repeating-linear-gradient(${flip ? -45 : 0}deg, ${C.teja}26 0 14px, transparent 14px 28px), repeating-linear-gradient(${flip ? 45 : 90}deg, ${C.teja}26 0 14px, transparent 14px 28px)`,
        borderTop: `2px solid ${C.teja}`,
        borderBottom: `2px solid ${C.teja}`,
      }}
    />
  )
}

function TagBosquejo() {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] px-2.5 py-1.5`}
      style={{ backgroundColor: C.teja, color: C.mantel, borderRadius: 3 }}
    >
      ◈ Bosquejo — se reemplaza con fotos reales al activar
    </span>
  )
}

// La mesa del restaurante, dibujada a línea y honestamente marcada:
// El Acacio no tiene fotos públicas todavía.
function MesaBosquejo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative p-7 flex flex-col items-center text-center ${className}`}
      style={{
        backgroundColor: C.mantel,
        border: `2px dashed ${C.teja}`,
        borderRadius: 18,
      }}
    >
      <svg viewBox="0 0 200 130" className="w-full max-w-[280px]" stroke={C.teja} fill="none" strokeWidth="2.5" aria-hidden="true">
        {/* mantel cuadrillé */}
        <path d="M10 44h180v70a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V44Z" />
        <path d="M10 44l14-18h152l14 18" />
        <path d="M30 44v78M70 44v78M110 44v78M150 44v78M10 66h180M10 90h180" strokeDasharray="5 4" opacity="0.55" />
        {/* plato */}
        <ellipse cx="100" cy="72" rx="34" ry="14" />
        <ellipse cx="100" cy="72" rx="22" ry="8" strokeDasharray="4 4" />
        {/* vaso */}
        <path d="M152 56h18l-3 22h-12Z" />
        {/* cubiertos */}
        <path d="M48 62v20M42 62v20M45 62v6" strokeLinecap="round" />
        <path d="M148 62v20" strokeLinecap="round" />
        {/* vapor */}
        <path d="M92 52c-2-4 2-6 0-10M102 52c-2-4 2-6 0-10M112 52c-2-4 2-6 0-10" stroke={C.acacia} />
      </svg>
      <p className={`${display.className} mt-5 text-2xl tracking-wide uppercase`} style={{ color: C.tinta }}>
        La mesa está puesta
      </p>
      <p className="mt-2 text-sm leading-relaxed max-w-xs" style={{ color: C.muda }}>
        El Acacio aún no tiene fotos públicas — este bosquejo marca el lugar donde irán las reales.
      </p>
      <div className="mt-4">
        <TagBosquejo />
      </div>
    </div>
  )
}

export default function ElAcacio() {
  return (
    <main className={body.className} style={{ backgroundColor: C.mantel, color: C.tinta, ...SPACING }}>
      <BlitzNav
        name={<span className={display.className}>El Acacio</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        fontClass={mono.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,241,227,0.95)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.teja,
          btnInk: C.mantel,
        }}
      />

      {/* HERO — letrero de pueblo sobre mantel */}
      <header id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.mantel2 }}>
        <Mantel className="absolute top-[60px] md:top-[68px] left-0 opacity-70" />
        <div className="relative max-w-5xl mx-auto px-5 pt-28 pb-14 md:pt-36 md:pb-20">
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`}
            style={{ color: C.teja }}
          >
            Restaurante · Av. Libertad 360 · Maule
          </p>
          <h1
            className={`${display.className} mt-4 uppercase leading-[0.95] text-[13.5vw] md:text-8xl`}
            style={{ color: C.tinta }}
          >
            Cocina de pueblo
            <span className="block" style={{ color: C.teja }}>
              en la Libertad
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg" style={{ color: C.muda }}>
            En la avenida principal del pueblo de Maule — capital de la comuna que le da nombre a la
            región — El Acacio atiende a vecinos y a quienes cruzan el valle del río. Todo se confirma
            directo por WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              className={`${mono.className} inline-flex items-center gap-2 px-6 text-sm uppercase tracking-[0.14em]`}
              style={{ backgroundColor: C.teja, color: C.mantel, borderRadius: 999, minHeight: 48 }}
            >
              Consultar al {BIZ.phoneDisplay} →
            </a>
            <a
              href="#llegar"
              className={`${mono.className} inline-flex items-center px-6 text-sm uppercase tracking-[0.14em]`}
              style={{ border: `1.5px solid ${C.tinta}`, color: C.tinta, borderRadius: 999, minHeight: 48 }}
            >
              Cómo llegar
            </a>
          </div>
        </div>
        <Mantel className="opacity-80" />
      </header>

      {/* LA FICHA — solo lo verificado */}
      <section id="ficha" className="max-w-5xl mx-auto px-5 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.teja }}>
              La ficha
            </p>
            <h2 className={`${display.className} mt-3 text-4xl md:text-5xl uppercase leading-[0.95]`}>
              Lo que sabemos
              <span className="block" style={{ color: C.acacia }}>
                de El Acacio
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: C.muda }}>
              Este restaurante del pueblo de Maule figura en el registro de servicios turísticos de
              SERNATUR con dirección en la Avenida Libertad y teléfono directo. No inventamos carta
              ni horarios: para saber qué hay hoy, se pregunta.
            </p>
            <dl className="mt-7" style={{ borderTop: `2px solid ${C.tinta}` }}>
              {FICHA.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-3.5"
                  style={{ borderBottom: `1px dashed ${C.linea}` }}
                >
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.teja }}>
                    {f.k}
                  </dt>
                  <dd className="text-[15px] sm:text-right font-medium" style={{ color: C.tinta }}>
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <MesaBosquejo />
            <div className="mt-4 p-5" style={{ backgroundColor: C.acacia, borderRadius: 14, color: C.mantel }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(247,241,227,0.85)' }}>
                ¿Eres del Acacio?
              </p>
              <p className="mt-2 text-[15px] leading-relaxed">
                Si este es tu restaurante, mándanos la carta del día y las fotos del local por
                WhatsApp: esta página las reemplaza tal cual.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EL PUEBLO — contexto real de Maule */}
      <section className="py-14 md:py-16" style={{ backgroundColor: C.tejaOsc }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.amarillo }}>
              El lugar
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl uppercase leading-[0.98] max-w-3xl`} style={{ color: C.mantel }}>
              Maule: el pueblo que le pone el nombre a la región
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(247,241,227,0.85)' }}>
              Capital de la comuna del mismo nombre, el pueblo de Maule queda a unos 20 minutos al
              poniente de Talca, camino a la costa de Constitución. La Avenida Libertad es su calle
              principal — y en el número 360 está El Acacio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="llegar" className="max-w-5xl mx-auto px-5 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.teja }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-4xl uppercase leading-[0.95]`}>
              Libertad 360,
              <span className="block" style={{ color: C.acacia }}>frente al valle</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muda }}>
              La Avenida Libertad cruza el pueblo de oriente a poniente. Antes de subirse al auto,
              confirma que están atendiendo:
            </p>
            <div className="mt-6">
              <a
                href={WA_LINK}
                className={`${mono.className} inline-flex items-center gap-2 px-6 text-sm uppercase tracking-[0.14em]`}
                style={{ backgroundColor: C.acacia, color: C.mantel, borderRadius: 999, minHeight: 48 }}
              >
                Escribir al {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden" style={{ borderRadius: 16, border: `2px solid ${C.tinta}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Av. Libertad 360, pueblo de Maule — ubicación de El Acacio"
                className="w-full h-[340px] border-0"
                loading="lazy"
              />
            </div>
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em] leading-relaxed`} style={{ color: C.muda }}>
              Dirección publicada por SERNATUR · Pueblo de Maule, Región del Maule
            </p>
          </Reveal>
        </div>
      </section>

      <Mantel />

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.tinta, color: C.mantel }}>
        <div className="max-w-5xl mx-auto px-5 py-9 flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div>
            <p className={`${display.className} text-xl uppercase tracking-wide`}>{BIZ.name}</p>
            <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(247,241,227,0.65)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(247,241,227,0.8)' }}>
            <a href={WA_LINK} className="underline underline-offset-4">WhatsApp {BIZ.phoneDisplay}</a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp" />
    </main>
  )
}
