import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_CABANA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  RECORRIDO,
  CABANAS,
  RESENAS,
} from './content'

const display = localFont({ src: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' })
const displayIt = localFont({
  src: '../../fonts/fraunces/italic-100-900.woff2',
  weight: '100 900',
  style: 'italic',
})
const body = localFont({ src: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000' })
const mono = localFont({ src: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' })

/**
 * Dirección de arte: «postal del fin de semana» — el agua de la
 * piscina, el pasto y la madera de las cabañas de Los Treiles, con el
 * treile de su letrero oval convertido en sello de correo. El
 * recorrido del recinto se cuenta como un sendero numerado: piscina,
 * cabañas, quincho y pradera. Fraunces en itálica pone el acento
 * campestre; Nunito Sans lee el detalle; Roboto Mono marca las fichas.
 */
const C = {
  crema: '#F7F1E3',
  cremaDeep: '#EFE5CF',
  agua: '#0B7285',
  aguaDeep: '#0A5B68',
  pradera: '#3E6B35',
  madera: '#7A5230',
  ink: '#2B2A24',
  soft: '#57503F',
  line: 'rgba(43,42,36,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'los-treiles-centro-recreativo',
  title: 'Los Treiles Centro Recreativo — piscina y cabañas en Pelarco',
  description:
    'Piscina de 90 m², dos cabañas equipadas, quincho y tinaja de agua caliente en San Francisco, Pelarco. Cinco mil metros cuadrados atendidos por sus dueños.',
  image: `${IMG}/piscina.webp`,
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegada' },
]

/** Sello de correo: el logo oval real de su letrero de madera. */
function Sello({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-[68px] h-[68px] rounded-full overflow-hidden border-2 shadow-md ${className}`}
      style={{ borderColor: '#FFFFFF', backgroundColor: '#F2EDE4' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- sello real ya optimizado */}
      <img src={`${IMG}/logo.webp`} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </span>
  )
}

export default function LosTreilesDemo() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${displayIt.className} font-semibold italic`}>
            Los Treiles
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.crema, ink: C.ink, line: C.line, btnBg: C.agua, btnInk: '#FFFFFF' }}
      />
      <WaFab href={WA_LINK} label="Reservar en Los Treiles por WhatsApp" />
      <DemoBand name={BIZ.name} />

      {/* ── HERO: la piscina a pantalla completa ───────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end">
        <Image
          src={`${IMG}/piscina.webp`}
          alt="Piscina de Los Treiles: agua celeste rodeada de pasto, reposeras azules y sombrilla"
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,40,44,0.50) 0%, rgba(10,40,44,0.15) 40%, rgba(10,40,44,0.78) 100%)',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 w-full">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <Sello />
              <p
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`}
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Centro recreativo · San Francisco, Pelarco
              </p>
            </div>
            <h1
              className={`${display.className} font-semibold text-[2.7rem] md:text-7xl leading-[1.04] tracking-tight max-w-4xl`}
              style={{ color: '#FFFFFF' }}
            >
              La piscina del <span className={`${displayIt.className} italic`}>sector Quesería</span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Cinco mil metros cuadrados de campo con piscina, cabañas equipadas, quincho y tinaja
              caliente — atendido por sus propios dueños.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold inline-flex items-center gap-2.5 h-[50px] px-6 rounded-full text-[15px] transition-transform active:scale-95`}
                style={{ backgroundColor: C.agua, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <span
                className={`${mono.className} inline-flex items-center gap-2 text-xs px-4 py-3 rounded-full`}
                style={{ backgroundColor: 'rgba(0,0,0,0.45)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)' }}
              >
                ★ {BIZ.rating} · {BIZ.reviews} opiniones en Google
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EL RECORRIDO: sendero numerado por el recinto ──────────── */}
      <section id="recorrido" className="px-5 md:px-8 py-14 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.aguaDeep }}>
              El recorrido
            </p>
            <h2
              className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight max-w-3xl`}
              style={{ color: C.ink }}
            >
              Un día en Los Treiles,{' '}
              <span className={`${displayIt.className} italic`} style={{ color: C.aguaDeep }}>
                estación por estación
              </span>
            </h2>
          </Reveal>
          <div className="mt-12 space-y-14 md:space-y-20">
            {RECORRIDO.map((r, i) => (
              <Reveal key={r.paso} delay={60}>
                <div
                  className={`grid md:grid-cols-2 gap-7 md:gap-12 items-center ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className={`${mono.className} absolute -top-7 -left-1 text-7xl md:text-8xl font-bold select-none`}
                      style={{ color: 'rgba(14,143,163,0.20)' }}
                    >
                      {r.paso}
                    </span>
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(43,42,36,0.18)]">
                      <Image
                        src={`${IMG}/${r.foto}.webp`}
                        alt={r.alt}
                        width={900}
                        height={640}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.madera }}>
                      Parada {r.paso}
                    </p>
                    <h3
                      className={`${display.className} font-semibold text-2xl md:text-4xl leading-tight`}
                      style={{ color: C.ink }}
                    >
                      {r.nombre}
                    </h3>
                    <p className="mt-3 text-[15px] md:text-base leading-relaxed max-w-md" style={{ color: C.soft }}>
                      {r.detalle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CABAÑAS: fichas de inventario campestre ────────────────── */}
      <section id="cabanas" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.cremaDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.madera }}>
              Para quedarse la noche
            </p>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight`} style={{ color: C.ink }}>
              Dos cabañas,{' '}
              <span className={`${displayIt.className} italic`} style={{ color: C.pradera }}>
                dos planes
              </span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-[1.2fr_1fr_1fr] gap-6 items-stretch">
            <Reveal className="relative overflow-hidden rounded-2xl min-h-[260px] shadow-[0_14px_40px_rgba(43,42,36,0.18)]">
              <Image
                src={`${IMG}/dormitorio.webp`}
                alt="Dormitorio de cabaña en Los Treiles: cama con ropa de cama clara y paredes de madera"
                fill
                className="object-cover"
              />
              <span
                className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-full`}
                style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: '#FFFFFF' }}
              >
                Por dentro
              </span>
            </Reveal>
            {CABANAS.map((c, i) => (
              <Reveal key={c.nombre} delay={i * 100} className="h-full">
                <div
                  className="h-full flex flex-col p-6 rounded-2xl bg-white"
                  style={{ border: `1px solid ${C.line}` }}
                >
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.aguaDeep }}>
                    {c.capacidad}
                  </p>
                  <h3 className={`${display.className} font-semibold text-2xl mt-2`} style={{ color: C.ink }}>
                    {c.nombre}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed flex-1" style={{ color: C.soft }}>
                    {c.detalle}
                  </p>
                  <a
                    href={WA_LINK_CABANA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-semibold mt-5 inline-flex items-center justify-center h-[48px] px-5 rounded-full text-sm transition-transform active:scale-95`}
                    style={{ backgroundColor: C.pradera, color: '#FFFFFF' }}
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-8 grid grid-cols-2 gap-5 max-w-2xl">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={`${IMG}/picada.webp`}
                  alt="Canasta de bienvenida de Los Treiles con su letrero de madera"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={`${IMG}/terraza.webp`}
                  alt="Cabaña de Los Treiles con sombrilla amarilla en la terraza"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS + DUEÑOS ────────────────────────────────��──────── */}
      <section id="resenas" className="px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.aguaDeep }}>
              Los que ya fueron
            </p>
            <div className="flex flex-wrap items-end gap-5">
              <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight`} style={{ color: C.ink }}>
                {BIZ.rating} estrellas,{' '}
                <span className={`${displayIt.className} italic`} style={{ color: C.aguaDeep }}>
                  palabra de visitante
                </span>
              </h2>
              <div className="flex items-center gap-2 pb-1.5">
                <Stars value={4.6} color={C.madera} className="w-5 h-5" />
                <span className={`${mono.className} text-sm`} style={{ color: C.soft }}>
                  {BIZ.reviews} opiniones en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-9 grid md:grid-cols-2 gap-5 max-w-4xl">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <blockquote
                  className="h-full p-6 rounded-2xl bg-white"
                  style={{ border: `1px solid ${C.line}`, borderTop: `4px solid ${C.agua}` }}
                >
                  <p className={`${displayIt.className} italic text-lg leading-relaxed`} style={{ color: C.ink }}>
                    “{r.texto}”
                  </p>
                  <footer className={`${mono.className} mt-4 text-xs uppercase tracking-[0.16em]`} style={{ color: C.madera }}>
                    {r.autor} · {r.nota} en Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className="mt-8 text-[15px] leading-relaxed max-w-2xl" style={{ color: C.soft }}>
              Los Treiles lo atienden sus propios dueños: la misma gente que pasa la aspiradora a la
              piscina por la mañana es la que recibe la reserva por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LLEGADA: mapa + reserva ────────────────────────────────── */}
      <section id="llegada" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.aguaDeep }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: 'rgba(255,255,255,0.72)' }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight`} style={{ color: '#FFFFFF' }}>
              San Francisco,{' '}
              <span className={`${displayIt.className} italic`}>camino a la Quesería</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.9)' }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region}. La entrada se coordina con reserva previa:
              escriba por WhatsApp y le confirman cupo, piscina y cabaña.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold inline-flex items-center h-[50px] px-6 rounded-full text-[15px] transition-transform active:scale-95`}
                style={{ backgroundColor: '#FFFFFF', color: C.aguaDeep }}
              >
                Reservar: {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold inline-flex items-center h-[50px] px-6 rounded-full text-[15px] border-2 transition-transform active:scale-95`}
                style={{ borderColor: 'rgba(255,255,255,0.7)', color: '#FFFFFF' }}
              >
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, San Francisco, ${BIZ.city}`}
                className="w-full h-[300px] md:h-[380px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: '#08323A' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className={`${displayIt.className} italic font-semibold text-lg`} style={{ color: '#FFFFFF' }}>
            Los Treiles Centro Recreativo
          </p>
          <p className={`${mono.className} text-xs`} style={{ color: 'rgba(255,255,255,0.72)' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>
    </div>
  )
}
