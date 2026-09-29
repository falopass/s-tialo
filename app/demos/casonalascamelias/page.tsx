import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2' }],
})

/**
 * Dirección de arte: «libro de huéspedes» — hueso de papel viejo,
 * rosa camelia y verde hoja, con la flor que le da nombre como
 * motivo. La casa no publica fotos: hay una imagen real de su calle
 * (Street View) y el resto son bosquejos marcados. Cormorant pone
 * la letra de la casa señorial; Jost, la hoja del libro.
 */
const C = {
  paper: '#F5EFE6',
  cream: '#FBF7EE',
  blush: '#E7C9C4',
  rose: '#B0526B',
  leaf: '#3D5A45',
  deep: '#23251F',
  ink: '#342B25',
  muted: '#6E5F52',
  line: 'rgba(61,90,69,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'casonalascamelias',
  title: 'Casona Las Camelias — Alojamiento en Curepto, Maule',
  description:
    'Casona de pueblo en O’Higgins #25, Curepto: alojamiento para 10 personas con alimentación según servicio. Reservas solo por teléfono.',
  image: `${IMG}/calle-ohiggins.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'Curepto', href: '#curepto' },
  { label: 'Reservar', href: '#reservar' },
]

const LA_CASA = [
  { k: 'capacidad', v: BIZ.capacity },
  { k: 'servicio', v: 'alojamiento + alimentación según lo contratado' },
  { k: 'reservas', v: 'solo por teléfono' },
]

// ── La camelia ───────────────────────────────────────────────

/** Flor de camelia: pétalos concéntricos. */
function Camelia({ size = 56, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={`o${a}`} cx="50" cy="30" rx="13" ry="24" fill={C.rose} transform={`rotate(${a} 50 50)`} />
      ))}
      {[30, 90, 150, 210, 270, 330].map((a) => (
        <ellipse key={`i${a}`} cx="50" cy="36" rx="9" ry="16" fill={C.blush} transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="8" fill={C.deep} />
      <circle cx="50" cy="50" r="4" fill="#E9B44C" />
    </svg>
  )
}

/** Divisor de página: línea fina con camelia al centro. */
function Corte({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-4 max-w-6xl mx-auto px-5 md:px-8" aria-hidden="true">
      <span className="flex-1 border-t" style={{ borderColor: dark ? 'rgba(245,239,230,0.2)' : C.line }} />
      <Camelia size={30} className="shrink-0 opacity-80" />
      <span className="flex-1 border-t" style={{ borderColor: dark ? 'rgba(245,239,230,0.2)' : C.line }} />
    </div>
  )
}

// ── Escenas bosquejo (marcadas, se reemplazan por fotos) ─────

function TagBosquejo() {
  return (
    <span
      className={`${mono.className} absolute top-2.5 left-2.5 z-10 text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-bold px-2 py-1 rounded-sm`}
      style={{ backgroundColor: 'rgba(35,37,31,0.85)', color: C.blush }}
    >
      Bosquejo · se reemplaza por foto real
    </span>
  )
}

function EscenaFachada({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill={C.cream} />
      <rect x="0" y="200" width="400" height="100" fill="#C9B48E" />
      <rect x="40" y="88" width="320" height="140" fill="#EAD9AE" />
      <path d="M28 92 L200 40 L372 92 Z" fill="#8A4A32" />
      <rect x="30" y="92" width="340" height="14" fill="#6E3A26" />
      {[70, 150, 250, 330].map((x) => (
        <rect key={x} x={x} y="120" width="34" height="60" fill={C.deep} />
      ))}
      {[70, 150, 250, 330].map((x) => (
        <rect key={`f${x}`} x={x + 3} y="123" width="28" height="54" fill="#B9D3DF" />
      ))}
      <rect x="182" y="150" width="36" height="78" fill="#5C3A24" />
      <rect x="0" y="228" width="400" height="8" fill="#8A7A5E" />
      <g fill={C.leaf}>
        <circle cx="34" cy="216" r="20" />
        <circle cx="366" cy="212" r="24" />
      </g>
      <circle cx="366" cy="206" r="7" fill={C.rose} />
      <circle cx="356" cy="220" r="5" fill={C.rose} />
      <circle cx="34" cy="210" r="6" fill={C.rose} />
    </svg>
  )
}

function EscenaPatio({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill={C.cream} />
      <rect x="0" y="150" width="400" height="150" fill="#B89C72" />
      <path d="M0 150 L400 150 L400 190 L0 190 Z" fill="#8A4A32" />
      {[50, 130, 270, 350].map((x) => (
        <rect key={x} x={x} y="60" width="14" height="150" fill="#6E3A26" />
      ))}
      <rect x="0" y="52" width="400" height="10" fill="#5C3A24" />
      <g>
        <circle cx="200" cy="240" r="44" fill={C.leaf} />
        <circle cx="186" cy="230" r="7" fill={C.rose} />
        <circle cx="216" cy="244" r="8" fill={C.rose} />
        <circle cx="200" cy="258" r="6" fill={C.blush} />
        <rect x="188" y="280" width="24" height="20" fill="#6E3A26" />
      </g>
      <circle cx="90" cy="230" r="26" fill={C.leaf} />
      <circle cx="90" cy="222" r="6" fill={C.rose} />
    </svg>
  )
}

function EscenaComedor({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#EFE3CE" />
      <rect x="150" y="40" width="100" height="90" fill="#B9D3DF" />
      <rect x="144" y="34" width="112" height="6" fill="#5C3A24" />
      <rect x="144" y="130" width="112" height="6" fill="#5C3A24" />
      <rect x="196" y="34" width="8" height="102" fill="#5C3A24" />
      <path d="M60 190 L340 190 L324 226 L76 226 Z" fill="#8A4A32" />
      <rect x="88" y="226" width="12" height="50" fill="#5C3A24" />
      <rect x="300" y="226" width="12" height="50" fill="#5C3A24" />
      <g fill={C.cream}>
        <ellipse cx="130" cy="196" rx="20" ry="6" />
        <ellipse cx="200" cy="196" rx="20" ry="6" />
        <ellipse cx="270" cy="196" rx="20" ry="6" />
      </g>
      <g>
        <rect x="196" y="160" width="8" height="30" fill={C.leaf} />
        <circle cx="200" cy="156" r="10" fill={C.rose} />
        <circle cx="192" cy="162" r="6" fill={C.blush} />
      </g>
      <rect x="0" y="276" width="400" height="24" fill="#D8C9A8" />
    </svg>
  )
}

// ── Piezas del libro ─────────────────────────────────────────

/** Rótulo de foja: mono pequeño con número de página opcional. */
function Foja({ children, n }: { children: React.ReactNode; n?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-baseline gap-3`}
      style={{ color: C.rose }}
    >
      {n && <span style={{ color: C.leaf }}>{n}</span>}
      <span className="inline-block w-9 border-t border-dashed" style={{ borderColor: C.leaf }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CasonaLasCameliasPage() {
  return (
    <div className={`${body.className} clc min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .clc a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,239,230,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.rose,
          btnInk: '#FBF7EE',
        }}
      />

      {/* ── Portada del libro ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <Camelia size={58} className="mb-5" />
              <Foja n="i">Casona de pueblo · O'Higgins #25, Curepto</Foja>
              <h1 className={`${display.className} font-semibold leading-[1.02] text-[clamp(2.9rem,9.5vw,6rem)] mb-4`} style={{ color: C.deep }}>
                Casona
                <span className={`${displayItalic.className} block`} style={{ color: C.rose }}>
                  Las Camelias
                </span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
                Una casona en la calle principal de Curepto: alojamiento
                para {BIZ.capacity} con alimentación según el servicio,
                a la antigua — la reserva es una llamada.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${display.className} font-semibold tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-105 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.rose, color: '#FBF7EE' }}
                >
                  Llamar a la casona
                </a>
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full border-2 transition-colors hover:bg-[#E7C9C4] tap-44`}
                  style={{ borderColor: C.rose, color: C.rose }}
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative">
                <div className="overflow-hidden rounded-t-[120px] md:rounded-t-[150px] rounded-b-md" style={{ border: `1px solid ${C.line}`, boxShadow: '0 18px 50px rgba(35,37,31,0.14)' }}>
                  <Image
                    src={`${IMG}/calle-ohiggins.webp`}
                    alt="La calle O'Higgins frente a la Casona Las Camelias en Curepto — imagen de Google Street View"
                    width={1060}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-3 text-center`} style={{ color: C.muted }}>
                  O'Higgins, Curepto · imagen real de Google Street View
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <Corte />
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Foja n="ii">La casa</Foja>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
                Diez plazas
                <br />
                <span className={displayItalic.className} style={{ color: C.rose }}>bajo un mismo techo</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Según su ficha en el sitio de la Municipalidad de Curepto.
                Las escenas son bosquejos: la casa aún no publica fotos
                y se reemplazan por las reales al activar el sitio.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5 md:gap-6 mb-10">
            {[
              { Escena: EscenaFachada, name: 'La fachada', desc: 'La casona da directo a O’Higgins, la calle principal del pueblo.' },
              { Escena: EscenaPatio, name: 'El patio', desc: 'Corredor de madera, sombra y las camelias que le dan el nombre.' },
              { Escena: EscenaComedor, name: 'El comedor', desc: 'Mesa servida: la alimentación se suma según el servicio contratado.' },
            ].map((s, i) => (
              <Reveal key={s.name} delay={i * 110}>
                <article className="overflow-hidden" style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, borderRadius: '4px', boxShadow: '0 8px 26px rgba(35,37,31,0.09)' }}>
                  <figure className="relative">
                    <s.Escena className="block w-full aspect-[4/3]" />
                    <TagBosquejo />
                  </figure>
                  <div className="p-5">
                    <h3 className={`${display.className} font-semibold text-xl md:text-[22px] mb-1.5`} style={{ color: C.deep }}>
                      {s.name}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <ul className="grid sm:grid-cols-3 gap-px overflow-hidden rounded-md" style={{ backgroundColor: C.line, border: `1px solid ${C.line}` }}>
              {LA_CASA.map((f) => (
                <li key={f.k} className="p-5 md:p-6" style={{ backgroundColor: C.cream }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] font-bold mb-2`} style={{ color: C.leaf }}>
                    {f.k}
                  </p>
                  <p className="text-sm md:text-[15px] font-medium leading-snug" style={{ color: C.ink }}>
                    {f.v}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Corte />
      </section>

      {/* ── Solo por teléfono ── */}
      <section className="relative" style={{ backgroundColor: C.deep }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <Camelia size={46} className="mx-auto mb-5" />
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.32em] font-bold mb-5`} style={{ color: C.blush }}>
              Tal como lo pide la casa
            </p>
            <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.05] mb-6`} style={{ color: C.paper }}>
              «Reservas
              <span className={displayItalic.className}> solo por teléfono»</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8" style={{ color: 'rgba(245,239,230,0.7)' }}>
              Así figura en la ficha municipal — y así funciona mejor en el
              pueblo. El botón de abajo llama o abre WhatsApp, según prefieras.
            </p>
            <a
              href={`tel:${BIZ.phoneTel}`}
              className={`${display.className} inline-block font-semibold tracking-[0.05em] text-base md:text-lg px-8 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.rose, color: '#FBF7EE' }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Curepto ── */}
      <section id="curepto" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Foja n="iii">El pueblo</Foja>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
              Curepto,
              <br />
              <span className={displayItalic.className} style={{ color: C.rose }}>la ciudad de la camelia</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5 max-w-xl" style={{ color: C.ink }}>
              Pueblo del interior del Maule conocido por su Festival de la
              Camelia, la fiesta veraniega que llena la comuna cada febrero.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              La casona queda en pleno centro: sobre O'Higgins, a pasos de
              la plaza y el comercio del pueblo.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-md min-h-[260px]" style={{ border: `1px solid ${C.line}`, boxShadow: '0 16px 44px rgba(35,37,31,0.12)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block text-[11px] uppercase tracking-[0.2em] font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 mt-3 tap-44`}
              style={{ color: C.leaf, textDecorationColor: C.rose }}
            >
              Abrir en Google Maps →
            </a>
          </Reveal>
        </div>
        <Corte />
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Foja n="iv">Reservar</Foja>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
              Una llamada
              <br />
              <span className={displayItalic.className} style={{ color: C.rose }}>y listo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Sin formularios ni registros: llamas o escribes, coordinas la
              fecha y llegas a la casa.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-semibold tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-105 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rose, color: '#FBF7EE' }}
              >
                Llamar {BIZ.phoneDisplay}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full border-2 transition-colors hover:bg-[#E7C9C4] tap-44`}
                style={{ borderColor: C.rose, color: C.rose }}
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="p-6 md:p-8" style={{ border: `1px solid ${C.line}`, borderRadius: '4px', backgroundColor: C.cream }}>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.26em] font-bold mb-4`} style={{ color: C.leaf }}>
                Según la ficha municipal
              </p>
              <ul className="space-y-2.5 text-sm" style={{ color: C.ink }}>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.rose }}>·</span>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}
                </li>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.rose }}>·</span>
                  Capacidad para {BIZ.capacity}
                </li>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.rose }}>·</span>
                  Alojamiento + alimentación según servicio
                </li>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.rose }}>·</span>
                  Reservas solo por teléfono
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className={`${display.className} font-semibold text-xl tracking-[0.03em] mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-[13px] leading-relaxed" style={{ color: 'rgba(245,239,230,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: 'rgba(245,239,230,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,230,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 text-[11px] leading-relaxed" style={{ color: 'rgba(245,239,230,0.55)' }}>
            Datos verificados en el sitio de la Municipalidad de Curepto.
            La foto de la calle es de Google Street View; las escenas
            interiores son bosquejos marcados.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
