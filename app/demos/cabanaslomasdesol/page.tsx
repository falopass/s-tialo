import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

/**
 * Dirección de arte: «parte de terreno» — azul Pacífico, arena y el
 * amarillo solar de su energía. Las escenas son bosquejos planos
 * (recortes de papel): el negocio no publica fotos, así que cada una
 * va marcada hasta que lleguen las reales. Syne pone el horizonte
 * geométrico; Mulish, el papel; Space Mono, los datos.
 */
const C = {
  paper: '#F7F0E1',
  sand: '#EFE3C8',
  sky: '#FBF6EA',
  sun: '#F2A93B',
  ember: '#D96B2B',
  sea: '#14506B',
  deep: '#0B2836',
  ink: '#17313B',
  muted: '#4E6973',
  line: 'rgba(20,80,107,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanaslomasdesol',
  title: 'Cabañas Lomas de Sol — Cabañas solares en Pelluhue, Maule',
  description:
    'Cabañas en Las Lomas, Pelluhue, alimentadas por paneles solares. Alojamiento con Sello R SERNATUR; reservas directas por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'Solar', href: '#solar' },
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'El lugar', href: '#lugar' },
  { label: 'Reservar', href: '#reservar' },
]

const SOLAR = [
  { n: '9', label: 'paneles solares', sub: 'alimentan el conjunto' },
  { n: '+90%', label: 'de ahorro eléctrico', sub: 'con baterías propias' },
  { n: 'Sello R', label: 'de SERNATUR', sub: 'turismo sustentable' },
]

// ── Escenas bosquejo (recortes planos, siempre marcadas) ─────

function TagBosquejo() {
  return (
    <span
      className={`${mono.className} absolute top-2.5 left-2.5 z-10 text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-bold px-2 py-1 rounded-sm`}
      style={{ backgroundColor: 'rgba(11,40,54,0.85)', color: C.sun }}
    >
      Bosquejo · se reemplaza por foto real
    </span>
  )
}

function EscenaMar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#FBF6EA" />
      <circle cx="290" cy="88" r="46" fill={C.sun} />
      <path d="M0 150 Q100 120 200 148 T400 140 L400 300 L0 300 Z" fill={C.sea} />
      <path d="M0 185 Q120 160 240 186 T400 178 L400 300 L0 300 Z" fill={C.deep} />
      <path d="M0 232 Q140 214 400 226 L400 300 L0 300 Z" fill={C.sand} />
      <g>
        <rect x="62" y="196" width="58" height="34" fill="#8C4B26" />
        <path d="M56 198 L91 176 L126 198 Z" fill={C.ember} />
        <rect x="82" y="208" width="14" height="22" fill={C.deep} />
        <rect x="104" y="206" width="12" height="12" fill={C.sky} />
      </g>
    </svg>
  )
}

function EscenaCabana({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill={C.sky} />
      <circle cx="70" cy="70" r="38" fill={C.sun} />
      <path d="M0 190 Q110 130 220 180 T400 168 L400 300 L0 300 Z" fill="#2E5B3F" />
      <path d="M0 230 Q160 200 400 218 L400 300 L0 300 Z" fill={C.deep} />
      <g>
        <rect x="150" y="168" width="110" height="62" fill="#8C4B26" />
        <path d="M140 172 L205 128 L270 172 Z" fill={C.ember} />
        <rect x="188" y="192" width="26" height="38" fill={C.deep} />
        <rect x="228" y="188" width="20" height="18" fill={C.sun} />
        <rect x="160" y="188" width="20" height="18" fill={C.sky} />
      </g>
      <g fill="#1E4530">
        <path d="M40 210 L62 150 L84 210 Z" />
        <path d="M300 206 L326 132 L352 206 Z" />
      </g>
    </svg>
  )
}

function EscenaInterior({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E9DCC4" />
      <rect x="246" y="52" width="118" height="98" rx="4" fill={C.sea} />
      <rect x="252" y="58" width="106" height="86" rx="3" fill={C.sky} />
      <circle cx="330" cy="86" r="18" fill={C.sun} />
      <path d="M252 118 Q305 104 358 116 L358 144 L252 144 Z" fill={C.sea} />
      <rect x="240" y="46" width="130" height="6" fill="#8C4B26" />
      <rect x="240" y="150" width="130" height="6" fill="#8C4B26" />
      <g>
        <rect x="42" y="150" width="180" height="70" rx="6" fill={C.deep} />
        <rect x="42" y="138" width="60" height="30" rx="8" fill={C.paper} />
        <rect x="42" y="150" width="180" height="16" fill={C.sun} />
        <rect x="36" y="220" width="192" height="14" rx="4" fill="#8C4B26" />
      </g>
      <rect x="0" y="262" width="400" height="38" fill={C.sand} />
    </svg>
  )
}

function EscenaPanel({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill={C.sky} />
      <circle cx="200" cy="66" r="40" fill={C.sun} />
      <g stroke={C.sun} strokeWidth="4">
        <line x1="200" y1="6" x2="200" y2="16" />
        <line x1="146" y1="34" x2="154" y2="42" />
        <line x1="254" y1="34" x2="246" y2="42" />
      </g>
      <path d="M0 220 Q200 180 400 210 L400 300 L0 300 Z" fill="#2E5B3F" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${52 + i * 118},${196 - i * 6})`}>
          <rect x="0" y="0" width="92" height="54" rx="3" fill={C.deep} stroke={C.sea} strokeWidth="3" transform="skewX(-14)" />
          <g stroke={C.sea} strokeWidth="1.6">
            <line x1="-8" y1="18" x2="84" y2="18" />
            <line x1="-4" y1="36" x2="88" y2="36" />
            <line x1="14" y1="0" x2="6" y2="54" />
            <line x1="44" y1="0" x2="36" y2="54" />
            <line x1="74" y1="0" x2="66" y2="54" />
          </g>
        </g>
      ))}
    </svg>
  )
}

// ── Piezas del parte ─────────────────────────────────────────

/** Ola cortada: borde de playa entre secciones. */
function Ola({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 200 18" preserveAspectRatio="none">
      <path d="M0 18 L0 9 Q25 0 50 9 T100 9 T150 9 T200 9 L200 18 Z" fill={color} />
    </svg>
  )
}

/** Rótulo mono pequeño. */
function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.sun : C.sea }}
    >
      <span className="inline-block w-9 border-t-2" style={{ borderColor: light ? C.sun : C.sea }} aria-hidden="true" />
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

export default function CabanasLomasDeSolPage() {
  return (
    <div className={`${body.className} lds min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .lds a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(247,240,225,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.sea,
          btnInk: '#FBF6EA',
        }}
      />

      {/* ── Hero: el horizonte de Las Lomas ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-14 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.34em] font-bold mb-5`} style={{ color: C.sun }}>
              Cabañas solares · Las Lomas, Pelluhue
            </p>
            <h1 className={`${display.className} font-bold leading-[1.04] text-[clamp(2.6rem,8.5vw,5.2rem)] mb-6`} style={{ color: C.paper }}>
              CABAÑAS QUE
              <span className="block" style={{ color: C.sun }}>
                CORREN CON EL SOL
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(247,240,225,0.78)' }}>
              En la costa de la comuna de Pelluhue, un conjunto de cabañas
              alimentado por energía solar — con Sello R de SERNATUR por su
              turismo sustentable.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.sun, color: C.deep }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#cabanas"
                className={`${display.className} font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(242,169,59,0.55)', color: C.sun }}
              >
                Ver las cabañas
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative overflow-hidden rounded-md" style={{ boxShadow: '0 22px 60px rgba(0,0,0,0.4)' }}>
              <EscenaMar className="block w-full aspect-[4/3]" />
              <TagBosquejo />
            </figure>
          </Reveal>
        </div>
        <Ola color={C.paper} className="block w-full h-5 mt-8" />
      </section>

      {/* ── El sol hace la pega ── */}
      <section id="solar" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <Rotulo>Energía propia</Rotulo>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.deep }}>
                EL SOL HACE
                <br />
                <span style={{ color: C.ember }}>LA PEGA</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4 max-w-xl" style={{ color: C.ink }}>
                Nueve paneles solares con baterías cubren casi todo el
                consumo del conjunto: más del 90% de ahorro eléctrico
                respecto de la red.
              </p>
              <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
                Por eso SERNATUR les reconoció el Sello R de turismo
                sustentable. Alojarse acá también es dormir tranquilo con
                la energía que usa la cabaña.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative overflow-hidden rounded-md mb-6" style={{ boxShadow: '0 16px 44px rgba(11,40,54,0.18)' }}>
                <EscenaPanel className="block w-full aspect-[4/3]" />
                <TagBosquejo />
              </figure>
              <ul className="grid grid-cols-3 gap-3 md:gap-4">
                {SOLAR.map((s) => (
                  <li key={s.label} className="p-4 rounded-sm" style={{ backgroundColor: C.deep, color: C.paper }}>
                    <p className={`${display.className} text-2xl md:text-3xl font-bold mb-1`} style={{ color: C.sun }}>
                      {s.n}
                    </p>
                    <p className="text-[11px] md:text-xs font-bold leading-tight">{s.label}</p>
                    <p className="text-[10px] leading-tight mt-0.5" style={{ color: 'rgba(247,240,225,0.6)' }}>
                      {s.sub}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Las cabañas ── */}
      <section id="cabanas" className="scroll-mt-20" style={{ backgroundColor: C.sand }}>
        <Ola color={C.paper} className="block w-full h-5 rotate-180" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo>Las cabañas</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.deep }}>
                MADERA, MAR
                <br />
                <span style={{ color: C.ember }}>Y CALMA</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Las escenas son bosquejos: el negocio aún no publica fotos
                y las reales se montan al activar el sitio. Capacidad y
                tarifas se confirman por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { Escena: EscenaCabana, name: 'La cabaña', desc: 'Madera y techo a dos aguas entre la loma y el mar, inscrita en SERNATUR.' },
              { Escena: EscenaInterior, name: 'El dormitorio', desc: 'Camas hechas y ventana al paisaje: lo justo para desconectarse.' },
              { Escena: EscenaMar, name: 'La terraza', desc: 'La salida al aire libre con el Pacífico de fondo.' },
            ].map((s, i) => (
              <Reveal key={s.name} delay={i * 110}>
                <article className="overflow-hidden rounded-md" style={{ backgroundColor: C.sky, border: `1px solid ${C.line}`, boxShadow: '0 10px 30px rgba(11,40,54,0.1)' }}>
                  <figure className="relative">
                    <s.Escena className="block w-full aspect-[4/3]" />
                    <TagBosquejo />
                  </figure>
                  <div className="p-5">
                    <h3 className={`${display.className} font-bold text-xl md:text-[22px] mb-2`} style={{ color: C.deep }}>
                      {s.name.toUpperCase()}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El lugar ── */}
      <section id="lugar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal delay={140} className="lg:order-2">
            <div className="overflow-hidden rounded-md min-h-[260px]" style={{ border: `1px solid ${C.line}`, boxShadow: '0 16px 44px rgba(11,40,54,0.12)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal className="lg:order-1">
            <Rotulo>El lugar</Rotulo>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.deep }}>
              LAS LOMAS,
              <br />
              <span style={{ color: C.ember }}>COSTA DE PELLUHUE</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-5" style={{ color: C.ink }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-xl" style={{ color: C.muted }}>
              Un sector rural sobre la costa, al norte del balneario de
              Pelluhue: playas, dunas y la ruta costera del Maule.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.sea, textDecorationColor: C.sun }}
            >
              Abrir la ubicación en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Rotulo light>Reservas</Rotulo>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.paper }}>
              SE RESERVA
              <br />
              <span style={{ color: C.sun }}>DIRECTO</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(247,240,225,0.75)' }}>
              Sin plataformas ni comisiones: escribe por WhatsApp, cuéntanos
              cuántos son y las fechas, y te confirmamos disponibilidad.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.sun, color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-sm border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(242,169,59,0.55)', color: C.sun }}
              >
                Llamar
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="p-6 md:p-8 rounded-md" style={{ border: `1px dashed ${C.sun}` }}>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.26em] font-bold mb-4`} style={{ color: C.sun }}>
                Datos verificados
              </p>
              <ul className="space-y-2.5 text-sm" style={{ color: 'rgba(247,240,225,0.85)' }}>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.sun }}>·</span>
                  Inscripción SERNATUR N° {BIZ.sernatur}
                </li>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.sun }}>·</span>
                  {BIZ.address}, {BIZ.city}
                </li>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.sun }}>·</span>
                  Sello R de turismo sustentable
                </li>
                <li className="flex gap-2.5">
                  <span className="font-bold" style={{ color: C.sun }}>·</span>
                  Reservas directas por WhatsApp
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4"
          style={{ borderColor: 'rgba(247,240,225,0.14)' }}
        >
          <div>
            <p className={`${display.className} font-bold text-xl tracking-[0.03em] mb-1.5`}>{BIZ.name.toUpperCase()}</p>
            <address className="not-italic text-[13px] leading-relaxed" style={{ color: 'rgba(247,240,225,0.65)' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: 'rgba(247,240,225,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,240,225,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 text-[11px] leading-relaxed" style={{ color: 'rgba(247,240,225,0.55)' }}>
            Datos verificados en SERNATUR (N° {BIZ.sernatur}) y prensa
            local. Las escenas son bosquejos: el negocio no publica fotos
            y se reemplazan por las reales al activar el sitio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
