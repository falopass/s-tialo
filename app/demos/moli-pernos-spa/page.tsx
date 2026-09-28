import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PERNO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta del local: negro-grafito de su logo (tuerca MP), amarillo de
// seguridad del toldo/rotulación y acero. Motivo: tuerca hexagonal y
// ficha técnica de especificaciones, como un catálogo de pernos.
const C = {
  grafito: '#141417',
  panel: '#1D1D22',
  steel: '#2A2A31',
  ink: '#F2EFE7',
  muted: '#B8B3A4',
  amarillo: '#FFC61A',
  amarilloSoft: '#FFE08A',
  rojo: '#D8362A',
  line: 'rgba(242,239,231,0.16)',
  lineLight: 'rgba(20,20,23,0.18)',
  papel: '#F6F3EA',
  papelInk: '#23221E',
  papelMuted: '#6A6455',
}

export const metadata: Metadata = demoMetadata({
  slug: 'moli-pernos-spa',
  title: 'Moli Pernos — La casa del perno de Molina',
  description:
    'Pernos inoxidable, metal, concreto, madera y tabiquería más herramientas en Av. Poniente 2050, Molina. Consulta stock por WhatsApp.',
  image: `${IMG}/og.webp`,
})

const NAV_LINKS = [
  { label: 'Estantes', href: '#estantes' },
  { label: 'Vitrina', href: '#vitrina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde', href: '#donde' },
]

// Tuerca hexagonal: el icono de su logo.
function Tuerca({ color = C.amarillo, className = 'w-4 h-4' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.6 20.4 7.4v9.2L12 21.4 3.6 16.6V7.4Z" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  )
}

// Franja de seguridad diagonal (cinta de obra).
function Cinta({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[14px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(${flip ? '45deg' : '-45deg'}, ${C.amarillo} 0 16px, ${C.grafito} 16px 32px)`,
      }}
    />
  )
}

function Spec({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.amarillo : '#8A6B00' }}
    >
      <Tuerca color="currentColor" className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

// Líneas de producto: textos literales del letrero y el flyer del dueño.
const ESTANTES = [
  { k: 'Inoxidable', v: 'Pernos y fijaciones en acero inoxidable' },
  { k: 'Metal', v: 'Pernos métricos, tuercas y golillas para fierro' },
  { k: 'Concreto', v: 'Anclajes y fijaciones para hormigón' },
  { k: 'Madera', v: 'Tirafondos, tiradores y pernos de madera' },
  { k: 'Tabiquería', v: 'Fijación para tabiques y montaje liviano' },
  { k: 'Herramientas', v: 'Mano a mano: dados, llaves, brocas y más' },
]

// Lo que el letrero de la tienda enumera frente a la vereda.
const LETRERO = ['Chavetas', 'Seguros agrícolas', 'Prisioneros', 'Graseras', 'Pernos de arado', 'Pernos estriados']

const RESENAS = [
  {
    q: 'Excelente atención, lo mejor en pernos en Molina. Lo básico se consigue y la atención, siempre dispuesta a ayudar, hace la diferencia.',
    a: 'Juan Carlos Coronado',
    d: 'Local Guide · Google',
  },
  {
    q: 'Súper buena atención rápida. Tienen lo justo y lo necesario.',
    a: 'Óscar Labra',
    d: 'Local Guide · Google',
  },
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC61A]'
const btnAmarillo = `${display.className} ${FOCUS} inline-block text-sm md:text-base font-semibold uppercase tracking-[0.08em] px-7 py-3 bg-[#FFC61A] text-[#141417] transition-all hover:bg-[#ffd34d] active:scale-95 tap-44`
const btnBorde = `${display.className} ${FOCUS} inline-block text-sm md:text-base font-semibold uppercase tracking-[0.08em] px-7 py-3 border-2 border-[#F2EFE7]/60 text-[#F2EFE7] transition-colors hover:bg-white/5 active:scale-95 tap-44`

export default function MoliPernosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.grafito, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={
          <span className={`${display.className} uppercase tracking-[0.04em]`} style={{ fontWeight: 600 }}>
            Moli <span style={{ color: C.amarillo }}>Pernos</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Consultar"
        theme={{
          over: 'dark',
          bar: 'rgba(20,20,23,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.amarillo,
          btnInk: C.grafito,
        }}
      />

      {/* ── Hero: ficha de ferretería sobre grafito ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.grafito }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <Spec>{BIZ.rubro} · {BIZ.city}</Spec>
              <h1 className={`${display.className} font-bold uppercase leading-[0.98] text-[clamp(2.6rem,10vw,4.8rem)] mb-5`} style={{ color: C.ink }}>
                La casa del
                <br />
                <span style={{ color: C.amarillo }}>perno</span> de Molina
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
                Así se presentan en su Instagram. Ferretería de pernos y
                herramientas en Av. Poniente 2050: inoxidable, metal,
                concreto, madera y tabiquería, atendida por quienes cachan
                qué perno necesitas.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={WA_LINK_PERNO} target="_blank" rel="noopener noreferrer" className={btnAmarillo}>
                  Consultar stock
                </a>
                <a href="#estantes" className={btnBorde}>
                  Ver líneas
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="flex items-center gap-2.5">
                  <Stars value={4.5} color={C.amarillo} />
                  <span className={`${mono.className} text-xs uppercase tracking-[0.12em]`} style={{ color: C.ink }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas
                  </span>
                </span>
                <span className={`${mono.className} text-xs uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                  {BIZ.instagram}
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <figure className="relative max-w-[360px] mx-auto lg:ml-auto">
              <div
                className="border-2 p-1.5"
                style={{ borderColor: C.amarillo, backgroundColor: C.panel, boxShadow: '0 22px 50px -20px rgba(0,0,0,0.7)' }}
              >
                <div className="relative aspect-[9/16] max-h-[480px]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Moli Pernos en Av. Poniente: toldo azul con el letrero y las líneas de producto"
                    fill
                    priority
                    sizes="(min-width: 1024px) 36vw, 85vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} flex items-center justify-between px-2 py-2.5 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  <span>Fachada actual · Av. Poniente</span>
                  <span aria-hidden="true">▲ 2050</span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
        <Cinta />
      </section>

      {/* ── Estantes: ficha técnica de líneas ── */}
      <section id="estantes" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Spec>Lo que anuncia su propio letrero</Spec>
              <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.papelInk }}>
                Pernos por
                <br />
                <span style={{ color: '#8A6B00' }}>material y uso</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.papelMuted }}>
                El letrero de la tienda enumera las líneas una a una, igual
                que una ficha técnica. Si tu perno no está en la lista,
                pregunta igual — las reseñas destacan que siempre están
                dispuestos a ayudar.
              </p>
              {/* enum del letrero antiguo, literal */}
              <div className="border-l-4 pl-5 py-1 mb-8" style={{ borderColor: C.rojo }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.rojo }}>
                  También en el letrero
                </p>
                <p className={`${display.className} text-sm md:text-base uppercase leading-relaxed tracking-[0.06em]`} style={{ color: C.papelInk }}>
                  {LETRERO.join(' · ')}
                </p>
              </div>
              <a href={WA_LINK_PERNO} target="_blank" rel="noopener noreferrer" className={`${FOCUS} ${display.className} inline-block text-sm md:text-base font-semibold uppercase tracking-[0.08em] px-7 py-3 bg-[#141417] text-[#FFC61A] transition-all active:scale-95 tap-44`}>
                Preguntar por un perno
              </a>
            </Reveal>
            <Reveal delay={120}>
              <dl className="border-2" style={{ borderColor: C.papelInk, boxShadow: '8px 8px 0 rgba(20,20,23,0.85)' }}>
                {ESTANTES.map((e, i) => (
                  <div
                    key={e.k}
                    className="grid grid-cols-[44px_120px_1fr] md:grid-cols-[56px_150px_1fr] gap-3 items-baseline px-4 md:px-6 py-4 border-b-2 last:border-b-0"
                    style={{ borderColor: C.lineLight, backgroundColor: i % 2 ? 'rgba(20,20,23,0.04)' : 'transparent' }}
                  >
                    <span className={`${mono.className} text-xs`} style={{ color: C.papelMuted }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <dt className={`${display.className} text-sm md:text-base font-semibold uppercase tracking-[0.05em]`} style={{ color: C.papelInk }}>
                      {e.k}
                    </dt>
                    <dd className="text-xs md:text-sm" style={{ color: C.papelMuted }}>{e.v}</dd>
                  </div>
                ))}
              </dl>
              <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.papelMuted }}>
                Según el letrero y el flyer publicados por la tienda
              </p>
            </Reveal>
          </div>
        </div>
        <Cinta flip />
      </section>

      {/* ── Vitrina: producto real en el mesón ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.grafito }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <Spec>Publicado por ellos mismos</Spec>
                <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-[1.02]`}>
                  Lo que hay
                  <br />
                  <span style={{ color: C.amarillo }}>en el mesón</span>
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] max-w-[220px] leading-relaxed`} style={{ color: C.muted }}>
                Fotos de su ficha de Google y su Instagram @molipernos
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'interior.webp', alt: 'Interior de Moli Pernos: pared completa de cajones con pernos y tornillos ordenados por tipo', cap: 'La pared de pernos', big: true },
              { src: 'dados.webp', alt: 'Juego de machos y terrajas USTOOLS en vitrina de la tienda', cap: 'Dados y terrajas' },
              { src: 'rostoff.webp', alt: 'Latas Würth Rost Off aflojatuercas exhibidas en Moli Pernos', cap: 'Aflojatuercas Würth' },
              { src: 'destornilladores.webp', alt: 'Set de destornilladores Makawa en exhibidor de la tienda', cap: 'Herramienta de mano' },
              { src: 'vitrina.webp', alt: 'Vitrina de Moli Pernos con shellac para empaquetaduras y paño de fibra', cap: 'Empaquetaduras' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 80} className={f.big ? 'col-span-2 row-span-2' : ''}>
                <figure className="border h-full" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                  <div className={`relative ${f.big ? 'aspect-square md:aspect-auto md:h-full md:min-h-[320px]' : 'aspect-square'} overflow-hidden`}>
                    <Image src={`${IMG}/${f.src}`} alt={f.alt} fill sizes={f.big ? '(min-width: 768px) 50vw, 90vw' : '(min-width: 768px) 25vw, 45vw'} className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} flex items-center gap-2 px-3 py-2.5 text-[10px] uppercase tracking-[0.14em] border-t`} style={{ borderColor: C.line, color: C.muted }}>
                    <Tuerca color={C.amarillo} className="w-3 h-3 shrink-0" />
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.steel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <Spec>Reseñas reales de Google</Spec>
                <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-[1.02]`}>
                  «Lo mejor en pernos
                  <br />
                  <span style={{ color: C.amarillo }}>de Molina»</span>
                </h2>
              </div>
              <div className="border-2 px-5 py-4 text-center" style={{ borderColor: C.amarillo, backgroundColor: C.grafito }}>
                <p className={`${display.className} text-3xl font-bold leading-none`} style={{ color: C.amarillo }}>{BIZ.rating}</p>
                <Stars value={4.5} color={C.amarillo} className="w-3.5 h-3.5" />
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 100}>
                <blockquote className="h-full border p-6 md:p-7 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                  <Stars value={5} color={C.amarillo} className="w-4 h-4 mb-4" />
                  <p className={`${display.className} text-base md:text-lg leading-relaxed mb-5 flex-1`} style={{ color: C.ink }}>
                    “{r.q}”
                  </p>
                  <footer className={`${mono.className} text-[10px] uppercase tracking-[0.14em] border-t pt-3`} style={{ borderColor: C.line, color: C.muted }}>
                    {r.a} · {r.d}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde y cuándo ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-stretch">
          <Reveal>
            <Spec>Dónde y cuándo</Spec>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-4xl leading-[1.05] mb-6`} style={{ color: C.papelInk }}>
              Av. Poniente 2050,
              <br />
              <span style={{ color: '#8A6B00' }}>Molina</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.papelMuted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <dl className="border-2 max-w-md mb-8" style={{ borderColor: C.papelInk, backgroundColor: '#fff' }}>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3 border-b-2" style={{ borderColor: C.lineLight }}>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.papelMuted }}>Lun a Vie</dt>
                <dd className="text-sm font-semibold" style={{ color: C.papelInk }}>9:00 – 13:00 · 15:00 – 18:00</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3 border-b-2" style={{ borderColor: C.lineLight }}>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.papelMuted }}>Sábado</dt>
                <dd className="text-sm font-semibold" style={{ color: C.papelInk }}>9:00 – 13:00</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3">
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.papelMuted }}>Domingo</dt>
                <dd className="text-sm font-semibold" style={{ color: C.papelInk }}>Cerrado</dd>
              </div>
            </dl>
            <p className="text-xs leading-relaxed max-w-md mb-7" style={{ color: C.papelMuted }}>
              También escriben a {BIZ.email} y publican en {BIZ.instagram} —
              el contacto más rápido es WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${FOCUS} ${display.className} inline-block text-sm md:text-base font-semibold uppercase tracking-[0.08em] px-7 py-3 bg-[#141417] text-[#FFC61A] transition-all active:scale-95 tap-44`}>
                Consultar por WhatsApp
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${FOCUS} ${display.className} inline-block text-sm md:text-base font-semibold uppercase tracking-[0.08em] px-7 py-3 border-2 text-[#23221E] transition-colors hover:bg-black/5 active:scale-95 tap-44`} style={{ borderColor: C.papelInk }}>
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 p-2 h-full min-h-[340px] bg-white" style={{ borderColor: C.papelInk, boxShadow: '8px 8px 0 rgba(20,20,23,0.85)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[330px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
        <Cinta />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.grafito, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24">
          <p className={`${display.className} text-lg font-semibold uppercase tracking-[0.06em] mb-2`}>
            {BIZ.legal}
          </p>
          <address className="not-italic text-sm leading-relaxed mb-1.5" style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay} · {BIZ.instagram}
          </address>
          <p className="text-xs leading-relaxed mb-6" style={{ color: C.muted }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono,
            horarios, productos y reseñas son reales (ficha de Google e
            Instagram de la tienda); el diseño es de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
