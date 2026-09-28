import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Paleta sacada de la foto de la ficha: muros de adobe, piso de madera,
// textil índigo de la cama.
const C = {
  paper: '#F1EAD8',
  card: '#F8F3E5',
  ink: '#27201A',
  muted: '#60523C',
  indigo: '#2E3570',
  indigoDeep: '#20264E',
  indigoSoft: '#AEB6E0',
  wood: '#7A4E28',
  woodDeep: '#3E2812',
  line: 'rgba(39,32,26,0.22)',
  lineLight: 'rgba(241,234,216,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hospedaje-casa-patrimonial-elena',
  title: 'Casa patrimonial Elena — Hospedaje en San Clemente',
  description:
    'Hospedaje en casa patrimonial en Av. Huamachuco 2031, San Clemente. Reserva directa por WhatsApp con Elena.',
  image: `${IMG}/og.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#la-casa' },
  { label: 'La pieza', href: '#la-pieza' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Reserva', href: '#reserva' },
]

// Motivo de estampado de colcha: rombo con punto, como el textil de la foto.
const printTile = (fg: string, op = 1) => {
  const hex = fg.replace('#', '%23')
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cg fill='none' stroke='${hex}' stroke-opacity='${op}' stroke-width='1.4'%3E%3Cpath d='M15 6 L22 15 L15 24 L8 15 Z'/%3E%3Cpath d='M15 11 L18.5 15 L15 19 L11.5 15 Z'/%3E%3C/g%3E%3Ccircle cx='15' cy='15' r='1.6' fill='${hex}' fill-opacity='${op}'/%3E%3Ccircle cx='1.5' cy='1.5' r='1.1' fill='${hex}' fill-opacity='${op}'/%3E%3Ccircle cx='28.5' cy='1.5' r='1.1' fill='${hex}' fill-opacity='${op}'/%3E%3Ccircle cx='1.5' cy='28.5' r='1.1' fill='${hex}' fill-opacity='${op}'/%3E%3Ccircle cx='28.5' cy='28.5' r='1.1' fill='${hex}' fill-opacity='${op}'/%3E%3C/svg%3E")`
}

function PrintStrip({ fg, flip = false }: { fg: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[30px] w-full"
      style={{
        backgroundImage: printTile(fg, 0.85),
        backgroundRepeat: 'repeat-x',
        backgroundPosition: flip ? 'center bottom' : 'center top',
      }}
    />
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.indigoSoft : C.indigo }}
    >
      <span
        className="inline-block w-[14px] h-[14px] rotate-45 border-[1.5px]"
        style={{ borderColor: 'currentColor' }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E3570]'
const FOCUS_LIGHT = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AEB6E0]'
const btnSolid = `${display.className} ${FOCUS} inline-block bg-[#2E3570] text-[#F8F3E5] text-sm md:text-base px-7 py-3 transition-all hover:bg-[#232a5c] active:scale-95`
const btnGhostDark = `${display.className} ${FOCUS} text-sm md:text-base px-7 py-3 border-2 border-[#27201A]/50 text-[#27201A] transition-colors hover:bg-[#27201A]/5`
const btnGhostLight = `${display.className} ${FOCUS_LIGHT} text-sm md:text-base px-7 py-3 border-2 border-[#AEB6E0]/60 text-[#F1EAD8] transition-colors hover:bg-white/10`

// Ficha patrimonial: los datos verificados de la casa, como placa de registro.
const FICHA = [
  { k: 'Nombre', v: BIZ.name },
  { k: 'Tipo', v: 'Alojamiento particular' },
  { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
  { k: 'Región', v: BIZ.region },
  { k: 'Contacto', v: `${BIZ.phoneDisplay} · WhatsApp` },
]

// Lo que se ve en la foto real de su ficha: nada inventado.
const PIEZA = [
  { k: 'Cama', v: 'De dos plazas, con cubrecama y cojines estampados' },
  { k: 'Muros', v: 'Gruesos, de adobe, con ventana de luz profunda' },
  { k: 'Piso', v: 'Madera nativa' },
  { k: 'Detalles', v: 'Lámpara colgante, velador de madera, cielo de tablas' },
]

export default function CasaPatrimonialElenaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={
          <>
            Casa <span style={{ color: C.indigo }} className="hidden min-[420px]:inline">patrimonial</span> Elena
          </>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(241,234,216,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.indigo,
          btnInk: '#F8F3E5',
        }}
      />

      {/* ── Hero: placa + ventana de adobe ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <Eyebrow>{BIZ.rubro}</Eyebrow>
              <h1
                className={`${display.className} leading-[1.04] text-[clamp(2.5rem,10vw,4.6rem)] mb-5`}
                style={{ color: C.ink }}
              >
                Casa patrimonial{' '}
                <span style={{ color: C.indigo }}>Elena</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
                Hospedaje en una casa de adobe en {BIZ.address}, en pleno
                pueblo de {BIZ.city}. Se reserva directo con Elena por
                WhatsApp: sin formularios ni intermediarios.
              </p>
              <div className="flex flex-wrap gap-3 mb-9">
                <a href={WA_LINK_RESERVA} target="_blank" rel="noopener noreferrer" className={btnSolid + ' tap-44'}>
                  Reservar por WhatsApp
                </a>
                <a href="#la-casa" className={btnGhostDark + ' tap-44'}>
                  Conocer la casa
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <ul className={`${mono.className} flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-[7px] h-[7px] rotate-45" style={{ backgroundColor: C.indigo }} aria-hidden="true" />
                  {BIZ.address}
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-[7px] h-[7px] rotate-45" style={{ backgroundColor: C.indigo }} aria-hidden="true" />
                  {BIZ.phoneDisplay}
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-[7px] h-[7px] rotate-45" style={{ backgroundColor: C.indigo }} aria-hidden="true" />
                  {BIZ.city}, Maule
                </li>
              </ul>
            </Reveal>
          </div>

          {/* La foto real, enmarcada como ventana de adobe */}
          <Reveal delay={120}>
            <figure className="max-w-[340px] mx-auto lg:ml-auto">
              {/* dintel de madera */}
              <div className="h-3.5 w-[106%] -ml-[3%] shadow-sm" style={{ backgroundColor: C.woodDeep }} aria-hidden="true" />
              <div
                className="relative aspect-[739/1600] max-h-[520px] w-full border-[10px]"
                style={{ borderColor: C.card, boxShadow: `0 18px 40px -18px rgba(39,32,26,0.5)` }}
              >
                <Image
                  src={`${IMG}/pieza.webp`}
                  alt="Pieza del hospedaje: cama de dos plazas con cubrecama estampada, muro de adobe con ventana profunda y piso de madera"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 85vw"
                  className="object-cover"
                />
                {/* profundidad del vano */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow:
                      'inset 0 10px 24px rgba(39,32,26,0.35), inset 0 -6px 14px rgba(39,32,26,0.2), inset 8px 0 18px rgba(39,32,26,0.22), inset -8px 0 18px rgba(39,32,26,0.22)',
                  }}
                  aria-hidden="true"
                />
              </div>
              {/* repisa */}
              <div className="h-3 w-[110%] -ml-[5%] shadow-md" style={{ backgroundColor: C.wood }} aria-hidden="true" />
              <figcaption
                className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.18em] text-center`}
                style={{ color: C.muted }}
              >
                La pieza · foto real de su ficha de Google
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <PrintStrip fg={C.indigo} />
      </section>

      {/* ── La casa: ficha patrimonial ── */}
      <section id="la-casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow>La casa</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`}>
              Una casa de adobe
              <br />
              <span style={{ color: C.indigo }}>con nombre propio</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
              Elena recibe huéspedes en su casa patrimonial de {BIZ.city}:
              muros gruesos, madera y silencio de pueblo. Nada de cadena ni
              mostrador — escribes por WhatsApp y te atiende la dueña.
            </p>
            <p className="text-xs leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Esta ficha usa solo los datos publicados en su perfil de
              Google Maps. Lo que no está confirmado — tarifas, número de
              piezas, servicios — se consulta directo con ella.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* placa de registro */}
            <div className="border-2 p-1.5" style={{ borderColor: C.ink, backgroundColor: C.card }}>
              <div className="border px-5 md:px-7 py-6" style={{ borderColor: C.line }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-5 flex items-center justify-between`} style={{ color: C.muted }}>
                  <span>Ficha de la casa</span>
                  <span aria-hidden="true">Nº 2031</span>
                </p>
                <dl>
                  {FICHA.map((f) => (
                    <div
                      key={f.k}
                      className="grid grid-cols-[92px_1fr] md:grid-cols-[120px_1fr] gap-3 py-3 border-b last:border-b-0"
                      style={{ borderColor: C.line }}
                    >
                      <dt className={`${mono.className} text-[10px] uppercase tracking-[0.18em] pt-0.5`} style={{ color: C.muted }}>
                        {f.k}
                      </dt>
                      <dd className="text-sm md:text-base font-medium" style={{ color: C.ink }}>
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
              Fuente: ficha pública de Google Maps
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La pieza (índigo del textil) ── */}
      <section id="la-pieza" className="scroll-mt-20" style={{ backgroundColor: C.indigoDeep }}>
        <PrintStrip fg={C.indigoSoft} flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow light>La pieza</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: '#F1EAD8' }}>
                Lo que se ve
                <br />
                <span style={{ color: C.indigoSoft }}>en su propia foto</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: 'rgba(241,234,216,0.82)' }}>
                No inventamos inventario: te mostramos lo que publica su
                ficha. Una pieza de casa antigua, con el espesor del adobe
                asomando en la ventana y el olor a madera de siempre.
              </p>
              <div
                className="border-2 p-5 max-w-md"
                style={{ borderColor: C.lineLight, backgroundColor: 'rgba(241,234,216,0.05)' }}
              >
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-3`} style={{ color: C.indigoSoft }}>
                  Lo que se acuerda por WhatsApp
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'rgba(241,234,216,0.85)' }}>
                  <li>· Disponibilidad y fecha de llegada</li>
                  <li>· Tarifa por noche y cantidad de piezas</li>
                  <li>· Formas de pago y hora de entrada</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul>
                {PIEZA.map((p, i) => (
                  <li
                    key={p.k}
                    className="grid grid-cols-[92px_1fr] md:grid-cols-[120px_1fr] gap-3 py-4 border-b first:border-t items-baseline"
                    style={{ borderColor: C.lineLight }}
                  >
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em] flex items-center gap-2`} style={{ color: C.indigoSoft }}>
                      <span className="text-[9px]" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      {p.k}
                    </span>
                    <span className="text-sm md:text-base" style={{ color: '#F1EAD8' }}>{p.v}</span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(174,182,224,0.75)' }}>
                Según la foto publicada por la dueña
              </p>
            </Reveal>
          </div>
        </div>
        <PrintStrip fg={C.indigoSoft} />
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Ubicación</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`}>
              Huamachuco 2031,
              <br />
              <span style={{ color: C.indigo }}>San Clemente</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              La casa queda en el pueblo, sobre la avenida Huamachuco. La
              comuna de San Clemente es la puerta a Vilches y a la Reserva
              Nacional Altos de Lircay — buen punto de descanso si vas
              camino a la precordillera o trabajas en la zona.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btnSolid + ' tap-44'}>
                Consultar por WhatsApp
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={btnGhostDark + ' tap-44'}>
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 p-1.5 h-full min-h-[340px]" style={{ borderColor: C.ink, backgroundColor: C.card }}>
              <div className="h-full min-h-[330px]" style={{ backgroundColor: C.paper }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[330px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reserva ── */}
      <section id="reserva" className="scroll-mt-20 relative" style={{ backgroundColor: C.woodDeep }}>
        <PrintStrip fg="#C9A878" flip />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{ backgroundImage: printTile('#F1EAD8', 1), backgroundSize: '30px 30px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: '#C9A878' }}>
              Reserva directa
            </p>
            <h2 className={`${display.className} text-[clamp(2rem,7vw,3.8rem)] leading-[1.06] mb-6`} style={{ color: '#F1EAD8' }}>
              Escríbenos con tu fecha
              <br />
              <span style={{ color: '#C9A878' }}>y te confirmamos hoy</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(241,234,216,0.82)' }}>
              Disponibilidad, tarifa por noche y formas de pago se acuerdan
              directo con Elena por WhatsApp — {BIZ.phoneDisplay}.
            </p>
            <a href={WA_LINK_RESERVA} target="_blank" rel="noopener noreferrer" className={btnGhostLight + ' tap-44'}>
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.indigoDeep, color: '#F1EAD8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 border-t" style={{ borderColor: C.lineLight }}>
          <p className={`${display.className} text-xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed mb-2" style={{ color: 'rgba(241,234,216,0.8)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
          <p className="text-xs leading-relaxed mb-6" style={{ color: 'rgba(241,234,216,0.75)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono y foto
            son reales (ficha pública de Google); los textos son de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
