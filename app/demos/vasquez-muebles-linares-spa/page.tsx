import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_ENCARGO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/italic-200-1000.woff2', weight: '200 1000', style: 'italic' },
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

const C = {
  noche: '#1B2A41',
  deep: '#131F31',
  arena: '#E8DCC8',
  arenaSoft: '#F3EDE0',
  terracota: '#C1663F',
  terracotaInk: '#95491F',
  paper: '#FFFFFF',
  muted: 'rgba(27,42,65,0.72)',
  line: 'rgba(27,42,65,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'vasquez-muebles-linares-spa',
  title: 'Vasquez Muebles — Fábrica de muebles a medida en Linares',
  description: 'Fábrica de muebles en Callejón Los Zárate, Linares, Región del Maule. Cocinas, closets y muebles a medida, conversados directo con el taller.',
  image: '/demos/vasquez-muebles-linares-spa/hero.webp',
})

const NAV_LINKS = [
  { label: 'Los muebles', href: '#muebles' },
  { label: 'El taller', href: '#taller' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const MUEBLES = [
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Muebles de cocina en fabricación dentro del taller',
    name: 'Cocinas a medida',
    desc: 'Muebles de cocina, cubiertas y aireadores ajustados al centímetro de tu espacio. Eliges material, color y tiradores.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesa de muestras con tableros, tiradores y huincha de medir',
    name: 'Closets y dormitorio',
    desc: 'Closets, veladores, respaldos y cómodas pensados para descansar bien: todo a la medida de la pieza.',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Mesa de comedor de madera terminada junto al ventanal del taller',
    name: 'Mesas y comedores',
    desc: 'Mesas de comedor, racks de TV y muebles de terraza en madera, hechos para durar.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Banco de trabajo con cepillos, formones y una caja con ensamble cola de milano',
    name: 'Encargos especiales',
    desc: '¿Una idea, una foto, un rincón difícil? Se dibuja, se cotiza y se fabrica en el taller.',
  },
]

const PROCESO = [
  {
    title: 'Me cuentas tu idea',
    desc: 'Por WhatsApp o en el taller. Una foto de referencia o las medidas del espacio bastan para partir.',
  },
  {
    title: 'Medimos y diseñamos',
    desc: 'Visita sin costo dentro de Linares. Recibes una propuesta con precio cerrado antes de encargar.',
  },
  {
    title: 'Se fabrica en el taller',
    desc: 'Cada pieza se corta, arma y termina a mano en Callejón Los Zárate. Puedes venir a ver el avance.',
  },
  {
    title: 'Se instala en tu casa',
    desc: 'Coordinamos entrega e instalación contigo, y el taller responde por su trabajo.',
  },
]

const PRECIOS = [
  { name: 'Mueble de cocina (metro lineal)', desc: 'Melamina o madera, según proyecto', price: 'desde $120.000' },
  { name: 'Closet con puertas correderas', desc: 'A la medida de la pieza', price: 'desde $450.000' },
  { name: 'Velador / mesa de noche', desc: 'Madera sólida', price: 'desde $85.000' },
  { name: 'Mesa de comedor 6 personas', desc: 'Madera nativa', price: 'desde $380.000' },
  { name: 'Rack de TV a medida', desc: 'Según ancho y terminación', price: 'desde $190.000' },
  { name: 'Visita y medición en Linares', desc: 'Con presupuesto sin compromiso', price: 'sin costo' },
]

const TESTIMONIALS = [
  {
    text: 'Pedí un mueble de cocina y quedó justo como lo conversamos. Llegaron, instalaron y se llevaron hasta el último aserrín.',
    author: 'Cliente de Linares',
  },
  {
    text: 'El closet quedó perfecto a la medida de la pieza. Precio cerrado desde el principio, sin sorpresas al final.',
    author: 'Clienta de Linares',
  },
  {
    text: 'Le mandé una foto de referencia y me lo hicieron igualito, en madera de verdad. Se nota el trabajo de taller.',
    author: 'Cliente de la comuna',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.arena : C.terracotaInk }}
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M12 21 C12 14 12 8 12 3" />
        <path d="M12 16 C7 14 4 10 4 5 C9 7 11 11 12 16 Z" fill="currentColor" stroke="none" />
        <path d="M12 12 C17 10 20 6 20 2 C15 4 13 8 12 12 Z" fill="currentColor" stroke="none" />
      </svg>
      {children}
    </p>
  )
}

/** Ramita botánica decorativa */
function Sprig({ className = '', color = C.terracota }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 84" className={className} fill={color} aria-hidden="true">
      <path d="M24 80 C24 56 26 30 31 8" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 68 C14 64 8 54 7 42 C18 46 23 56 24 68 Z" />
      <path d="M25 58 C35 53 40 43 41 32 C30 37 26 46 25 58 Z" />
      <path d="M26 45 C18 41 13 33 13 23 C21 28 25 36 26 45 Z" />
      <path d="M27 34 C35 30 39 22 39 13 C31 18 28 26 27 34 Z" />
      <path d="M30 15 C26 10 27 4 31 1 C34 6 33 11 30 15 Z" />
    </svg>
  )
}

/** Arco de fondo: las secciones se solapan como hojas */
function SectionCap({ color }: { color: string }) {
  return (
    <div className="relative h-[44px] md:h-[64px] -mb-px" aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <path d="M0 64 C240 8 480 0 720 22 C960 44 1200 40 1440 10 L1440 64 Z" fill={color} />
      </svg>
    </div>
  )
}

/** Borde de follaje: lomas redondas como un arbusto visto de lejos */
function CanopyCap({ color }: { color: string }) {
  return (
    <div className="relative h-[44px] md:h-[64px] -mb-px" aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <path
          d="M0 64 C70 26 150 38 230 30 C310 22 390 44 480 34 C570 24 650 42 740 32 C830 22 910 44 1000 36 C1090 28 1170 42 1260 34 C1330 28 1390 34 1440 26 L1440 64 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

/** Sendero de hojas: ornamenta un título o separa bloques de texto */
function LeafTrail({ className = '', color = C.terracota }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 160 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 18 C50 8 110 8 156 16" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {[
        { x: 24, r: -34 },
        { x: 56, r: 30 },
        { x: 88, r: -26 },
        { x: 120, r: 32 },
      ].map((l) => (
        <g key={l.x} transform={`translate(${l.x} 12) rotate(${l.r})`}>
          <path d="M0 7 C-4 2 -4 -4 0 -8 C4 -4 4 2 0 7 Z" fill={color} />
        </g>
      ))}
    </svg>
  )
}

export default function VasquezMueblesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.noche }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.95)',
          ink: C.noche,
          line: C.line,
          btnBg: C.terracotaInk,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Taller de Vasquez Muebles en Linares: mesa de comedor de madera junto a un ventanal con vista al bosque"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(19,31,49,0.55) 0%, rgba(19,31,49,0.15) 40%, rgba(19,31,49,0.85) 100%)',
          }}
        />
        <Sprig className="absolute top-24 right-6 md:top-28 md:right-12 w-[42px] md:w-[60px] rotate-[14deg] opacity-80" color={C.arena} />
        <Sprig className="absolute top-40 right-16 md:top-48 md:right-28 w-[26px] md:w-[36px] -rotate-[20deg] opacity-50" color={C.terracota} />

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-24 md:pb-32 pt-36">
          <Reveal>
            <Eyebrow light>Fábrica de muebles · Linares · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] text-[clamp(2.8rem,9.5vw,6rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Muebles a medida,
              <br />
              <span style={{ color: C.arena }}>hechos con calma</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Taller familiar en Callejón Los Zárate, Linares. Diseñamos y
              fabricamos el mueble que tu casa necesita, y conversas directo
              con quien lo hace.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC8] active:scale-95 tap-44`}
                style={{ backgroundColor: C.terracotaInk, color: '#FFFFFF' }}
              >
                Cotizar mi mueble
              </a>
              <a
                href="#muebles"
                className={`${display.className} text-sm md:text-base px-8 py-3.5 rounded-full border transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC8] tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver el trabajo
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(19,31,49,0.8)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.92)' }}>
            {[
              'Callejón Los Zárate, parcela 2',
              'Diseño y confección a medida',
              'Atención directa en el taller',
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-5">
                {i > 0 && (
                  <svg viewBox="0 0 10 14" className="w-[8px] h-[11px]" fill={C.arena} aria-hidden="true">
                    <path d="M5 13 C1 9 1 4 5 1 C9 4 9 9 5 13 Z" />
                  </svg>
                )}
                {item}
              </span>
            ))}
            <span className="hidden md:inline ml-auto" style={{ color: C.arena }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El taller (sobre el negocio) ── */}
      <div style={{ backgroundColor: C.deep }}>
        <SectionCap color={C.arena} />
      </div>
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full"
                style={{ borderRadius: '999px 999px 32px 32px', border: `2px solid ${C.terracota}` }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden aspect-[4/5]" style={{ borderRadius: '999px 999px 32px 32px' }}>
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada del taller en Callejón Los Zárate: galpón de ladrillo con maderas apiladas, en una calle tranquila de Linares"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Sprig className="absolute -bottom-6 -right-3 w-[44px] rotate-[24deg]" color={C.noche} />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El taller</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-6`}>
              Un taller de barrio,
              <br />
              <span style={{ color: C.terracotaInk }}>con nombre y apellido</span>
            </h2>
            <p className="text-[15px] md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              En la parcela 2 de Callejón Los Zárate, a las afueras de Linares,
              funciona la fábrica de {BIZ.name}. Aquí no hay vitrina ni
              vendedores: conversas directo con quien corta, arma y termina
              cada mueble.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              El taller todavía no acumula reseñas en Google — los encargos
              llegan por el boca a boca y por los {BIZ.facebookFollowers} vecinos
              que siguen el trabajo en Facebook.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Atención directa con el taller, sin intermediarios',
                'Cada mueble se hace a pedido, a tu medida',
                'Visita y medición sin costo dentro de Linares',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] md:text-base font-medium">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" fill={C.terracota} aria-hidden="true">
                    <path d="M12 21 C12 14 12 8 12 4" fill="none" stroke={C.terracota} strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M12 17 C7 15 4 11 4 7 C9 8 11 12 12 17 Z" />
                    <path d="M12 13 C17 11 20 7 20 3 C15 4 13 8 12 13 Z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-bold underline underline-offset-4 decoration-2 transition-colors hover:text-[#C1663F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C1663F] tap-44"
              style={{ color: C.noche, textDecorationColor: 'rgba(193,102,63,0.5)' }}
            >
              Ver el trabajo en Facebook →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Los muebles ── */}
      <div style={{ backgroundColor: C.arena }}>
        <CanopyCap color={C.paper} />
      </div>
      <section id="muebles" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Los muebles</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08]`}>
                Lo que sale del taller
              </h2>
              <p className="text-[15px] max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Productos de ejemplo: al publicar van los trabajos y
                especialidades reales del taller.
              </p>
            </div>
          </Reveal>

          <div className="space-y-16 md:space-y-24">
            {MUEBLES.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <article
                  className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className={`relative ${i % 2 === 1 ? 'md:pt-6' : 'md:pb-6'}`}>
                    <div
                      className="relative overflow-hidden aspect-[5/4] group"
                      style={{
                        borderRadius:
                          i % 2 === 0
                            ? '999px 999px 28px 28px'
                            : '56% 44% 52% 48% / 46% 50% 50% 54%',
                      }}
                    >
                      <Image
                        src={m.src}
                        alt={m.alt}
                        fill
                        sizes="(min-width: 768px) 46vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <span
                      className={`${display.className} absolute -top-5 ${i % 2 === 0 ? '-left-3' : '-right-3'} w-14 h-14 flex items-center justify-center text-xl shadow-md`}
                      style={{
                        backgroundColor: C.noche,
                        color: C.arena,
                        borderRadius: '62% 38% 55% 45% / 48% 60% 40% 52%',
                      }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className={`${display.className} text-3xl md:text-4xl mb-4`}>
                      {m.name}
                    </h3>
                    <p className="text-[15px] md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                      {m.desc}
                    </p>
                    <a
                      href={WA_LINK_ENCARGO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[15px] font-bold underline decoration-transparent underline-offset-4 transition-all hover:decoration-current hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C1663F] tap-44"
                      style={{ color: C.terracotaInk }}
                    >
                      Cotizar algo así
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo se trabaja ── */}
      <div style={{ backgroundColor: C.paper }}>
        <SectionCap color={C.noche} />
      </div>
      <section className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
        <Sprig className="absolute top-10 left-4 md:left-10 w-[40px] md:w-[56px] -rotate-[16deg] opacity-40" color={C.arena} />
        <Sprig className="absolute bottom-10 right-6 md:right-14 w-[48px] md:w-[64px] rotate-[18deg] opacity-30" color={C.terracota} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo se trabaja</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-12 md:mb-16`} style={{ color: '#FFFFFF' }}>
              De la idea al mueble,
              <br />
              <span style={{ color: C.arena }}>en cuatro pasos</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {PROCESO.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className={i % 2 === 1 ? 'lg:translate-y-8' : ''}>
                <article
                  className="h-full p-6 md:p-7 border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.055)',
                    borderColor: 'rgba(255,255,255,0.14)',
                    borderRadius:
                      i % 2 === 0
                        ? '40px 40px 40px 12px'
                        : '40px 40px 12px 40px',
                  }}
                >
                  <p
                    className={`${display.className} w-12 h-12 flex items-center justify-center text-xl mb-5`}
                    style={{
                      backgroundColor: C.terracotaInk,
                      color: '#FFFFFF',
                      borderRadius: '62% 38% 55% 45% / 48% 60% 40% 52%',
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`${display.className} text-xl md:text-2xl mb-3`} style={{ color: '#FFFFFF' }}>
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <div style={{ backgroundColor: C.noche }}>
        <CanopyCap color={C.arenaSoft} />
      </div>
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.arenaSoft }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Precios de referencia</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-3`}>
              Para hacerse una idea
            </h2>
            <LeafTrail className="w-[130px] md:w-[160px] h-auto mb-5" />
            <p className="text-[15px] md:text-base leading-relaxed max-w-xl mb-10" style={{ color: C.muted }}>
              Valores de muestra para mostrar cómo se vería una tabla de
              precios. Cada encargo se cotiza según medidas, material y
              terminaciones.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul
              className="border overflow-hidden"
              style={{ backgroundColor: C.paper, borderColor: C.line, borderRadius: '36px 36px 36px 12px' }}
            >
              {PRECIOS.map((p) => (
                <li
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 px-5 md:px-8 py-5 border-t first:border-t-0 transition-colors duration-300 hover:bg-[#FBF7EE]"
                  style={{ borderColor: C.line }}
                >
                  <div>
                    <p className={`${display.className} text-lg md:text-xl`}>{p.name}</p>
                    {p.desc && (
                      <p className="text-xs md:text-sm mt-1" style={{ color: C.muted }}>{p.desc}</p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm md:text-base font-bold" style={{ color: C.terracotaInk }}>
                    {p.price}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xs md:text-sm mt-5 italic" style={{ color: C.muted }}>
              * Precios y descripciones son de ejemplo — el cotizador real se
              conversa por WhatsApp con las medidas de tu espacio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <div style={{ backgroundColor: C.arenaSoft }}>
        <SectionCap color={C.paper} />
      </div>
      <section style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`}>
                Lo que valoran los clientes
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: C.muted }}>
                {BIZ.name} aún no tiene reseñas en Google — estos textos son
                de muestra. Al publicar van las reseñas reales del taller.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-bold underline underline-offset-4 decoration-2 transition-colors hover:text-[#1B2A41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C1663F] tap-44"
                style={{ color: C.terracotaInk, textDecorationColor: 'rgba(158,82,39,0.4)' }}
              >
                Ver la ubicación en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="p-6 md:p-7 border"
                    style={{
                      backgroundColor: C.arenaSoft,
                      borderColor: C.line,
                      borderRadius:
                        i % 2 === 0
                          ? '32px 32px 32px 8px'
                          : '32px 32px 8px 32px',
                    }}
                  >
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] font-bold">
                      <span style={{ color: C.noche }}>{t.author}</span>
                      <span style={{ color: C.terracotaInk }}>Reseña de ejemplo</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <div style={{ backgroundColor: C.paper }}>
        <CanopyCap color={C.arena} />
      </div>
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-6`}>
              El taller te espera
              <br />
              <span style={{ color: C.terracotaInk }}>en Los Zárate</span>
            </h2>
            <address className="not-italic text-[15px] md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-[15px] md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Para visitar el taller conviene avisar antes por WhatsApp: así
              el maestro deja la máquina y te atiende con calma.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B2A41] active:scale-95 tap-44`}
                style={{ backgroundColor: C.terracotaInk, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm px-7 py-3.5 rounded-full border transition-colors duration-300 hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B2A41] tap-44`}
                style={{ borderColor: 'rgba(27,42,65,0.35)', color: C.noche }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className="text-[15px] mt-6 font-semibold" style={{ color: C.noche }}>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C1663F] tap-44"
              >
                {BIZ.phoneDisplay}
              </a>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden border min-h-[320px] h-full"
              style={{
                borderColor: C.line,
                backgroundColor: C.paper,
                borderRadius: '48px 48px 48px 12px',
              }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <div style={{ backgroundColor: C.arena }}>
        <SectionCap color={C.deep} />
      </div>
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="absolute inset-0 opacity-[0.14]" aria-hidden="true">
          <Image src={`${IMG}/ambiente.webp`} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <Sprig className="absolute top-12 left-6 md:left-16 w-[52px] rotate-[12deg] opacity-50" color={C.terracota} />
        <Sprig className="absolute bottom-12 right-8 md:right-20 w-[40px] -rotate-[18deg] opacity-40" color={C.arena} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <LeafTrail className="w-[150px] md:w-[190px] h-auto mx-auto mb-7" color={C.arena} />
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.06] mb-6`} style={{ color: '#FFFFFF' }}>
              ¿Tienes un mueble
              <br />
              <span style={{ color: C.arena }}>en mente?</span>
            </h2>
            <p className="text-[15px] md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Mándanos una foto o las medidas por WhatsApp y te respondemos
              con una propuesta. Sin compromiso.
            </p>
            <a
              href={WA_LINK_ENCARGO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC8] active:scale-95 tap-44`}
              style={{ backgroundColor: C.terracotaInk, color: '#FFFFFF' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pb-20" style={{ backgroundColor: C.deep, color: '#FFFFFF', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.arena }}>
              Sitiazo
            </a>{' '}
            para {BIZ.legal}: productos, precios, reseñas y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.arena }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
