import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, BITACORA, FOTOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Identidad desde el lugar: azul petróleo del mar de Chanco, arena del
// tablón de la playa y verde eucalipto de la reserva Federico Albert.
const C = {
  arena: '#F4EBDC',
  papel: '#FAF5EA',
  mar: '#0E4C5C',
  marOscuro: '#0A3540',
  bosque: '#4E7A5A',
  arenaC: '#D9C093',
  tinta: '#23332F',
  apagado: '#5E7268',
  line: 'rgba(35,51,47,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-las-palmas',
  title: 'Cabañas Las Palmas — Descanso en Chanco, entre bosque y playa',
  description:
    'Cabañas en Pedro de Valdivia 24, Chanco: a unas cuadras de la Reserva Federico Albert y la playa. Reserva llamando al (73) 551 514.',
  image: `${IMG}/playa.webp`,
})

const NAV_LINKS = [
  { label: 'La cabaña', href: '#cabana' },
  { label: 'El cuaderno', href: '#cuaderno' },
  { label: 'Chanco', href: '#chanco' },
]

const NAV_THEME = {
  over: 'dark' as const,
  bar: 'rgba(250,245,234,0.94)',
  ink: C.tinta,
  line: C.line,
  btnBg: C.mar,
  btnInk: '#fff',
}

// Ola fina que separa secciones (línea de marea).
function Marea({ color = C.mar, className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 1440 28" className={`w-full h-5 ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 16 Q 90 4 180 16 T 360 16 T 540 16 T 720 16 T 900 16 T 1080 16 T 1260 16 T 1440 16"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M0 22 Q 90 14 180 22 T 360 22 T 540 22 T 720 22 T 900 22 T 1080 22 T 1260 22 T 1440 22"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.28"
      />
    </svg>
  )
}

function MarcaBosquejo() {
  return (
    <span
      className={`${mono.className} absolute top-2 left-2 z-10 rounded-md border border-dashed px-2 py-0.5 text-[10px] uppercase tracking-widest`}
      style={{ borderColor: C.mar, color: C.mar, backgroundColor: 'rgba(250,245,234,0.92)' }}
    >
      bosquejo
    </span>
  )
}

function EntradaCuaderno({ e, lado }: { e: (typeof BITACORA)[number]; lado: 'izq' | 'der' }) {
  const f = FOTOS[e.img as keyof typeof FOTOS]
  return (
    <div className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center`}>
      <div className={`md:col-span-5 ${lado === 'der' ? 'md:order-2' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={f.src}
          alt={f.alt}
          className="w-full aspect-[4/3] object-cover rounded-2xl"
          style={{ boxShadow: `0 14px 34px -18px ${C.marOscuro}88` }}
        />
      </div>
      <div className={`md:col-span-7 ${lado === 'der' ? 'md:order-1' : ''}`}>
        <div className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.bosque }}>
          bitácora {e.n}
        </div>
        <h3 className={`${display.className} mt-2 text-2xl md:text-4xl`} style={{ color: C.marOscuro }}>
          {e.titulo}
        </h3>
        <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: C.apagado }}>
          {e.texto}
        </p>
        <div className={`${mono.className} mt-4 text-xs`} style={{ color: C.bosque }}>
          foto: {e.pie}
        </div>
      </div>
    </div>
  )
}

export default function CabanasLasPalmas() {
  return (
    <main className={body.className} style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={BIZ.phoneTel}
        theme={NAV_THEME}
        fontClass={display.className}
        ctaLabel="Llamar"
      />

      {/* ── Portada: la playa a pocos pasos ────────────────── */}
      <section id="inicio" className="relative min-h-[88svh] flex items-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FOTOS.playa.src}
          alt={FOTOS.playa.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,53,64,0.35) 0%, rgba(10,53,64,0.15) 40%, rgba(10,53,64,0.78) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em] text-white/85`}>
              {BIZ.city} · {BIZ.region} · costa
            </div>
            <h1 className={`${display.className} mt-3 text-[44px] leading-[1.02] md:text-[76px] text-white`}>
              Cabañas
              <br />
              Las Palmas
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-[50ch] text-white/90">
              Una cabaña de madera en {BIZ.address}: entre los eucaliptos de la Reserva
              Federico Albert y la playa de Chanco, a unas cuadras de cada una.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-lg">
              <a
                href={BIZ.phoneTel}
                className="tap-44 flex-1 text-center text-base font-bold py-3 rounded-full text-white transition-transform active:scale-95"
                style={{ backgroundColor: C.mar }}
              >
                Llamar {BIZ.phoneDisplay}
              </a>
              <a
                href="#cuaderno"
                className="tap-44 flex-1 text-center text-base font-semibold py-3 rounded-full border text-white"
                style={{ borderColor: 'rgba(255,255,255,0.65)', backgroundColor: 'rgba(10,53,64,0.35)' }}
              >
                Ver qué hay alrededor
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La cabaña ──────────────────────────────────────── */}
      <section id="cabana" className="py-12 md:py-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.bosque }}>
              donde dormirás
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`} style={{ color: C.marOscuro }}>
              Una cabaña simple, con el bosque de patio
            </h2>
            <p className="mt-4 max-w-[58ch] text-base md:text-lg leading-relaxed" style={{ color: C.apagado }}>
              Las cabañas quedan en {BIZ.address}, una calle tranquila de Chanco que baja hacia
              el mar. El lugar es exactamente lo que el sector promete: silencio, aire de
              eucalipto y el sonido del mar por la noche.
            </p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { f: FOTOS.cabana, titulo: 'la cabaña' },
              { f: FOTOS.interiorCabana, titulo: 'el interior' },
            ].map(({ f, titulo }) => (
              <Reveal key={titulo}>
                <figure className="relative rounded-2xl overflow-hidden border-2 border-dashed" style={{ borderColor: `${C.mar}55` }}>
                  <MarcaBosquejo />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.src} alt={f.alt} className="w-full aspect-[4/3] object-cover" />
                  <figcaption
                    className={`${mono.className} px-4 py-2.5 text-xs flex items-center justify-between`}
                    style={{ backgroundColor: C.papel, color: C.apagado }}
                  >
                    <span>{titulo}</span>
                    <span>escena ilustrativa</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className={`${mono.className} mt-4 text-xs`} style={{ color: C.apagado }}>
              la cabaña no tiene fotos públicas — las escenas de arriba son bosquejos
              ilustrativos; todo lo demás en esta página es fotografía real del sector.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="mt-8 rounded-2xl px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ backgroundColor: C.mar }}
            >
              <div>
                <div className={`${display.className} text-xl text-white`}>¿Cuándo vienes?</div>
                <div className="text-sm text-white/85 mt-1">
                  Las reservas se hacen directo por teléfono — es fijo, llama mejor.
                </div>
              </div>
              <a
                href={BIZ.phoneTel}
                className="tap-44 shrink-0 text-base font-bold px-5 py-3 rounded-full"
                style={{ backgroundColor: C.arena, color: C.marOscuro }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El cuaderno de la costa ────────────────────────── */}
      <section id="cuaderno" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.bosque }}>
              el cuaderno de chanco
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`} style={{ color: C.marOscuro }}>
              Tres salidas a pie desde tu puerta
            </h2>
          </Reveal>
          <div className="mt-10 space-y-14 md:space-y-20">
            {BITACORA.map((e, i) => (
              <Reveal key={e.n}>
                <EntradaCuaderno e={e} lado={i % 2 === 0 ? 'izq' : 'der'} />
                {i < BITACORA.length - 1 && <Marea className="mt-12 md:mt-16" color={C.bosque} />}
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[FOTOS.eucalipto, FOTOS.bosque, FOTOS.reserva, FOTOS.dunas].map((f) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={f.src}
                  src={f.src}
                  alt={f.alt}
                  className="w-full aspect-square object-cover rounded-xl"
                />
              ))}
            </div>
            <p className={`${mono.className} mt-3 text-[11px]`} style={{ color: C.apagado }}>
              todas las fotos de esta sección son del parque y la playa de Chanco
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Chanco: la calle y el mapa ─────────────────────── */}
      <section id="chanco" className="py-12 md:py-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.bosque }}>
              llegada
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`} style={{ color: C.marOscuro }}>
              {BIZ.address}, {BIZ.city}
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-12 gap-6">
            <Reveal className="md:col-span-5">
              <div className="rounded-3xl border p-6 h-full" style={{ borderColor: C.line, backgroundColor: C.papel }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOTOS.calle.src}
                  alt={FOTOS.calle.alt}
                  className="w-full aspect-[16/10] object-cover rounded-2xl"
                />
                <dl className="mt-5 space-y-3 text-[15px]">
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.apagado }}>dirección</dt>
                    <dd className="font-semibold">{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.apagado }}>teléfono</dt>
                    <dd>
                      <a href={BIZ.phoneTel} className="font-semibold underline decoration-2 underline-offset-4" style={{ color: C.mar }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.apagado }}>mapa</dt>
                    <dd>
                      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: C.bosque }}>
                        Abrir en Google Maps
                      </a>
                    </dd>
                  </div>
                </dl>
                <a
                  href={BIZ.phoneTel}
                  className="tap-44 mt-6 block text-center text-base font-bold py-3 rounded-full text-white"
                  style={{ backgroundColor: C.mar }}
                >
                  Llamar para reservar
                </a>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full min-h-[320px] rounded-3xl border"
                style={{ borderColor: C.line }}
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.marOscuro, color: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className={`${display.className} text-xl leading-none`}>{BIZ.name}</div>
              <div className={`${mono.className} text-[11px] mt-1.5 opacity-70`}>
                {BIZ.rubro} · {BIZ.city}, {BIZ.region}
              </div>
            </div>
            <div className={`${mono.className} text-[11px] opacity-70 text-right leading-relaxed`}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.phoneDisplay}
            </div>
          </div>
          <p className={`${mono.className} mt-6 pt-4 text-[11px] opacity-50 border-t`} style={{ borderColor: 'rgba(244,235,220,0.2)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}.
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.mar} />
    </main>
  )
}
