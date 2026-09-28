import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// Paleta sacada del letrero de la fachada y de sus muebles: carbón del
// letrero, miel de la madera, crema y el teal con que pintan el teléfono.
const C = {
  papel: '#F4EDE0',
  papelSoft: '#FBF6EB',
  carbon: '#23201A',
  carbonSoft: '#332E25',
  miel: '#A9712F',
  mielSoft: '#E9D9BC',
  teal: '#3E7C74',
  ink: '#23201A',
  muted: '#6A6254',
  line: 'rgba(35,32,26,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'muebleria-comercial-sofia',
  title: 'Mueblería Comercial Sofia — Fábrica de muebles en Talca',
  description:
    'Fábrica de muebles en Catorce Ote. 1060, Talca. Cocinas, closets, vanitorios y revestimientos por encargo. Atención directa del taller.',
  image: '/demos/muebleria-comercial-sofia/hero.webp',
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Qué hacen', href: '#que-hacen' },
  { label: 'Cómo llegar', href: '#contacto' },
]

// Servicios tal como los pinta el letrero de la fachada.
const SERVICIOS = ['Cocinas', 'Closets', 'Baños', 'Vanitorios', 'Revestimientos']

const TRABAJOS: { src: string; alt: string; name: string; note: string }[] = [
  { src: 'cocina-oscura', alt: 'Cocina de gabinetes oscuros instalada por la mueblería', name: 'Cocina', note: 'gabinetes a medida' },
  { src: 'closet', alt: 'Closet de melamina clara con puertas y repisa abierta', name: 'Closet', note: 'melamina clara' },
  { src: 'cocina-blanca', alt: 'Cocina blanca en L con horno y microondas empotrados', name: 'Cocina en L', note: 'con empotrados' },
  { src: 'vanitorio', alt: 'Vanitorio de baño con lavamanos de superficie', name: 'Vanitorio', note: 'para el baño' },
]

const PASOS = [
  { n: '01', t: 'Llamas al taller', d: 'El (71) 224 1140 lo contesta el taller mismo, no un call center.' },
  { n: '02', t: 'Se mide y se presupuesta', d: 'Van a ver el espacio o les pasas las medidas, y te dan un precio cerrado.' },
  { n: '03', t: 'Se fabrica en Talca', d: 'El mueble se corta y se arma en el taller de Catorce Oriente.' },
  { n: '04', t: 'Lo retiras o te lo llevan', d: 'Pasas a buscarlo por el taller o se coordina la entrega.' },
]

function PhoneIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function CallButton({ children = 'Llamar al taller', tone = 'miel', className = '' }: { children?: React.ReactNode; tone?: 'miel' | 'crema' | 'carbon'; className?: string }) {
  const s = {
    miel: { backgroundColor: C.miel, color: '#FFF' },
    crema: { backgroundColor: C.papel, color: C.carbon },
    carbon: { backgroundColor: C.carbon, color: C.papel },
  }[tone]
  return (
    <a
      href={CALL_LINK}
      className={`inline-flex items-center justify-center gap-2.5 min-h-[44px] px-5 py-2.5 rounded-full font-bold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${className} tap-44`}
      style={s}
    >
      <PhoneIcon />
      {children}
    </a>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-4 flex items-center gap-3" style={{ color: light ? C.mielSoft : C.teal }}>
      <span className="block w-6 h-[2px]" style={{ backgroundColor: light ? C.mielSoft : C.teal }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function MuebleriaSofiaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(244,237,224,0.95)', ink: C.carbon, line: C.line, btnBg: C.carbon, btnInk: C.papel }}
      />

      {/* ── Hero partido: nombre + fachada real ───────── */}
      <section id="inicio" className="pt-[60px] md:pt-[68px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-16 grid md:grid-cols-[1.05fr_1fr] gap-8 md:gap-12 items-center">
          <div>
            <Eyebrow>Fábrica de muebles · Talca</Eyebrow>
            <h1 className={`${display.className} text-[2.6rem] leading-[1.05] md:text-6xl md:leading-[1.02]`}>
              El taller de muebles de Catorce Oriente.
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
              {BIZ.name} fabrica cocinas, closets y vanitorios por encargo, a la medida de tu casa. Se llama directo al taller.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <CallButton />
              <a
                href="#trabajos"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full font-bold text-[15px] border-2 transition-colors hover:bg-[#23201A] hover:text-[#F4EDE0] tap-44"
                style={{ borderColor: C.carbon, color: C.ink }}
              >
                Ver trabajos
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-2 gap-4 text-sm max-w-md">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.teal }}>Taller</dt>
                <dd className="mt-1 font-semibold leading-snug">{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.teal }}>Teléfono</dt>
                <dd className="mt-1 font-semibold"><a href={CALL_LINK} className="underline underline-offset-4 tap-44">{BIZ.phoneDisplay}</a></dd>
              </div>
            </dl>
          </div>
          <Reveal delay={100}>
            <figure className="relative rounded-2xl overflow-hidden rotate-1 shadow-[0_18px_44px_rgba(35,32,26,0.22)]" style={{ border: `1px solid ${C.line}` }}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/hero.webp`}
                  alt={`Fachada del taller de ${BIZ.name} en Catorce Oriente 1060, Talca, con su letrero pintado`}
                  fill
                  priority
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs font-semibold flex items-center justify-between" style={{ backgroundColor: C.carbon, color: C.papel }}>
                <span>La fachada real del taller</span>
                <span className="font-mono" style={{ color: C.mielSoft }}>N° 1060</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cenefa de servicios (los del letrero) ─────── */}
      <section aria-label="Servicios" style={{ backgroundColor: C.carbon }}>
        <ul className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {SERVICIOS.map((s) => (
            <li key={s} className={`${display.className} text-sm md:text-base uppercase tracking-[0.14em] flex items-center gap-6`} style={{ color: C.papel }}>
              {s}
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.miel }} aria-hidden="true" />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Trabajos reales ───────────────────────────── */}
      <section id="trabajos" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-8">
            <div>
              <Eyebrow>Del taller a la casa</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08]`}>Trabajos que ya entregaron</h2>
            </div>
            <p className="text-sm max-w-xs md:text-right leading-relaxed" style={{ color: C.muted }}>
              Fotos reales de su ficha de Google Maps — muebles instalados, no escenas de catálogo.
            </p>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {TRABAJOS.map((f, i) => (
              <li key={f.src} className={i % 2 === 1 ? 'lg:translate-y-6' : ''}>
                <Reveal delay={i * 60}>
                  <figure className="rounded-xl overflow-hidden" style={{ backgroundColor: C.papelSoft, border: `1px solid ${C.line}` }}>
                    <div className="relative aspect-[3/4]">
                      <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                    </div>
                    <figcaption className="px-3.5 py-3">
                      <span className={`${display.className} block text-base md:text-lg`}>{f.name}</span>
                      <span className="font-mono text-[11px]" style={{ color: C.muted }}>{f.note}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Cómo se trabaja ───────────────────────────── */}
      <section id="que-hacen" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow light>Cómo se trabaja</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] max-w-2xl`} style={{ color: C.papel }}>
            Mueble a medida, trato directo.
          </h2>
          <ol className="mt-10 md:mt-14 border-t" style={{ borderColor: 'rgba(244,237,224,0.18)' }}>
            {PASOS.map((p, i) => (
              <li key={p.n} className="border-b" style={{ borderColor: 'rgba(244,237,224,0.18)' }}>
                <Reveal delay={i * 60}>
                  <div className="grid grid-cols-[52px_1fr] md:grid-cols-[90px_1fr_1fr] gap-4 md:gap-8 py-6 md:py-7 items-start">
                    <span className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.miel }}>{p.n}</span>
                    <h3 className={`${display.className} text-xl md:text-2xl leading-snug`} style={{ color: '#FFF' }}>{p.t}</h3>
                    <p className="col-span-2 md:col-span-1 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(244,237,224,0.72)' }}>{p.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <CallButton tone="crema">Llamar y pedir presupuesto</CallButton>
            <p className="text-sm" style={{ color: 'rgba(244,237,224,0.7)' }}>También pueden escribir por su página de Facebook.</p>
          </div>
        </div>
      </section>

      {/* ── Precios de muestra ────────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.mielSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.3fr] gap-8 md:gap-14 items-start">
          <div>
            <Eyebrow>Para hacerse una idea</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight`}>Precios de referencia</h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: C.muted }}>
              Valores de muestra para este ejemplo: al publicar van las cotizaciones reales del taller.
            </p>
            <div className="mt-5"><CallButton tone="carbon">Cotizar por teléfono</CallButton></div>
          </div>
          <ul className="rounded-xl overflow-hidden border" style={{ borderColor: C.line, backgroundColor: C.papelSoft }}>
            {[
              { item: 'Vanitorio de baño', d: 'melamina, por medida' },
              { item: 'Closet de 2 puertas', d: 'con repisas y cajones' },
              { item: 'Cocina a medida', d: 'según largo y cubierta' },
              { item: 'Revestimiento de muro', d: 'por metro cuadrado' },
            ].map((p) => (
              <li key={p.item} className="flex items-center gap-4 px-5 py-4 border-b last:border-b-0" style={{ borderColor: C.line }}>
                <div className="min-w-0 flex-1">
                  <p className="font-bold">{p.item}</p>
                  <p className="text-sm" style={{ color: C.muted }}>{p.d}</p>
                </div>
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded shrink-0" style={{ backgroundColor: C.papel, color: C.teal }}>
                  Muestra
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contacto y ubicación ──────────────────────── */}
      <section id="contacto" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.papelSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-6`}>
              El taller está en el 1060 de Catorce Oriente.
            </h2>
            <a
              href={CALL_LINK}
              className="flex items-center gap-4 rounded-xl px-5 py-2 mb-6 transition-transform hover:-translate-y-0.5 tap-44"
              style={{ backgroundColor: C.carbon, color: C.papel }}
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(244,237,224,0.16)' }}>
                <PhoneIcon className="w-4 h-4" />
              </span>
              <span>
                <span className={`${display.className} block text-base leading-tight`}>Llamar al taller</span>
                <span className="block text-xs leading-tight" style={{ color: 'rgba(244,237,224,0.75)' }}>{BIZ.phoneDisplay} · solo llamadas</span>
              </span>
            </a>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              <strong style={{ color: C.ink }}>{BIZ.address}</strong>
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold text-sm px-5 py-2.5 min-h-[44px] rounded-full border-2 transition-colors hover:bg-[#23201A] hover:text-[#F4EDE0] tap-44"
                style={{ borderColor: C.carbon, color: C.ink }}
              >
                Abrir ruta en Google Maps
              </a>
              <a
                href={BIZ.fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold text-sm px-5 py-2.5 min-h-[44px] rounded-full border-2 transition-colors tap-44"
                style={{ borderColor: 'rgba(62,124,116,0.5)', color: C.teal }}
              >
                Facebook del taller
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-xl border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.mielSoft }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ───────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.carbon, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-16 md:pb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,237,224,0.62)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(244,237,224,0.62)' }}>
            Página de muestra preparada por Sitiazo con fotos reales del taller.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.miel} />
    </div>
  )
}
