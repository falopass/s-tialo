import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2' }],
})

/**
 * Dirección de arte: «la tabla del domingo». El Rincón de Faby ofrece
 * cabañas, camping, almuerzos y tinajas en el secano de Empedrado: la
 * página se viste de almuerzo campestre, con el mantel a cuadros de la
 * picada y la carta escrita a mano. Baloo hace de letra de letrero de
 * carretera, DM Sans lee el cuerpo y Roboto Mono anota la carta.
 * Las escenas del rincón son dibujos marcados «bosquejo» porque el
 * negocio aún no publica fotos propias; las fotos reales de la página
 * son de la comuna y van rotuladas como tales.
 */
const C = {
  crema: '#F8F1DF',
  mantel: '#F1E7CE',
  rojo: '#A83A2C',
  verde: '#5D6E3B',
  tinta: '#2F2A1E',
  muted: '#6B6250',
  line: 'rgba(47,42,30,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'el-rincon-de-faby',
  title: 'El Rincón de Faby — cabañas, camping y almuerzos en Empedrado',
  description:
    'Cabañas, camping, almuerzos y tinajas en la comuna de Empedrado, Región del Maule. Atención directa de Fabiola por WhatsApp.',
  image: `${IMG}/embalse.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La comuna', href: '#comuna' },
  { label: 'Cómo llegar', href: '#llegar' },
  { label: 'Reservar', href: '#reservar' },
]

/** Cuadros de mantel: textura suave para fondos. */
const VICHY = {
  backgroundImage:
    'linear-gradient(rgba(168,58,44,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(168,58,44,0.055) 1px, transparent 1px)',
  backgroundSize: '26px 26px',
}

function MarcaBosquejo() {
  return (
    <span
      className={`${mono.className} absolute top-2 left-2 z-10 rounded-md border border-dashed px-2 py-0.5 text-[10px] uppercase tracking-widest`}
      style={{ borderColor: C.rojo, color: C.rojo, backgroundColor: 'rgba(248,241,223,0.94)' }}
    >
      bosquejo
    </span>
  )
}

function MarcaComuna({ texto }: { texto: string }) {
  return (
    <span
      className={`${mono.className} absolute bottom-2 left-2 z-10 rounded-md px-2 py-0.5 text-[10px] uppercase tracking-widest`}
      style={{ color: '#F8F1DF', backgroundColor: 'rgba(47,42,30,0.82)' }}
    >
      {texto}
    </span>
  )
}

// ── Escenas bosquejo (dibujos, no fotos del negocio) ───────

const TRAZO = { fill: 'none', stroke: C.tinta, strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

function EscenaCabana() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full h-full">
      <g {...TRAZO}>
        <path d="M60 108 V70 L100 44 L140 70 V108" />
        <path d="M52 74 L100 44 L148 74" />
        <rect x="88" y="82" width="24" height="26" />
        <rect x="68" y="80" width="14" height="14" />
        <rect x="120" y="80" width="14" height="14" />
        <path d="M120 44 V30 h10 v8" />
        <path d="M30 108 h140" />
        <path d="M36 108 V86 M30 92 l6 -8 6 8 M30 99 l6 -8 6 8" />
        <path d="M164 108 V86 M158 92 l6 -8 6 8 M158 99 l6 -8 6 8" />
        <circle cx="168" cy="34" r="9" />
      </g>
    </svg>
  )
}

function EscenaCarpa() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full h-full">
      <g {...TRAZO}>
        <path d="M55 110 L100 48 L145 110 Z" />
        <path d="M100 48 L118 110" />
        <path d="M88 110 L100 88 L112 110" />
        <path d="M40 110 h120" />
        <path d="M55 110 l-8 6 M145 110 l8 6" />
        <path d="M44 116 h0 M156 116 h0" />
        <circle cx="42" cy="40" r="7" />
        <path d="M160 30 v0 M160 24 v0 M154 27 h12 M157 24 l6 6 M163 24 l-6 6" />
        <path d="M30 60 q6 -6 0 -12" opacity="0.7" />
      </g>
    </svg>
  )
}

function EscenaTinaja() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full h-full">
      <g {...TRAZO}>
        <path d="M50 70 h100 v24 a14 14 0 0 1 -14 14 h-72 a14 14 0 0 1 -14 -14 z" />
        <path d="M50 70 q50 10 100 0" />
        <path d="M58 108 v8 M142 108 v8" />
        <path d="M70 58 q-6 -8 0 -16 q6 -8 0 -14" />
        <path d="M100 58 q-6 -8 0 -16 q6 -8 0 -14" />
        <path d="M130 58 q-6 -8 0 -16 q6 -8 0 -14" />
        <circle cx="165" cy="96" r="8" />
        <path d="M160 96 h10 M165 91 v10" opacity="0.7" />
      </g>
    </svg>
  )
}

function EscenaAlmuerzo() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full h-full">
      <g {...TRAZO}>
        <circle cx="100" cy="82" r="34" />
        <circle cx="100" cy="82" r="22" />
        <path d="M92 40 q-4 -8 0 -14 M108 40 q-4 -8 0 -14" />
        <path d="M46 60 v44 M52 60 v44 M46 74 h6" />
        <path d="M150 58 q8 0 8 8 t-8 8 v30 M150 58 v74" opacity="0.9" />
        <path d="M40 116 h120" />
      </g>
    </svg>
  )
}

const CARTA = [
  {
    escena: <EscenaCabana />,
    nombre: 'Cabañas',
    detalle: 'Para dormir en el rincón sin cargar la carpa: llega, se instala y el campo hace el resto.',
    ficha: 'servicio del catálogo municipal',
  },
  {
    escena: <EscenaCarpa />,
    nombre: 'Camping',
    detalle: 'Sitio para armar la carpa en terreno de secano: silencio de noche y cielo abierto.',
    ficha: 'servicio del catálogo municipal',
  },
  {
    escena: <EscenaAlmuerzo />,
    nombre: 'Almuerzos',
    detalle: 'La cocina del rincón sirve almuerzos: la excusa perfecta para venir por el día.',
    ficha: 'servicio del catálogo municipal',
  },
  {
    escena: <EscenaTinaja />,
    nombre: 'Tinajas',
    detalle: 'Tinaja de agua caliente al aire libre: el broche del día en el rincón.',
    ficha: 'servicio del catálogo municipal',
  },
]

const COMUNA = [
  { src: `${IMG}/valle.webp`, pie: 'El valle de Empedrado desde el cerro' },
  { src: `${IMG}/complejo.webp`, pie: 'Complejo turístico municipal de Empedrado' },
  { src: `${IMG}/parque.webp`, pie: 'Senderos arbolados del sector' },
  { src: `${IMG}/los-ruiles.webp`, pie: 'Entrada de la Reserva Nacional Los Ruiles' },
  { src: `${IMG}/rio.webp`, pie: 'El estero entre el bosque de ruil' },
]

/** Aviso de Sitiazo en el flujo (no fijo). */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} · así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

/** Marcador de sección: cruz de mantel + etiqueta. */
function Sello({ children, color = C.rojo }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4 flex items-center gap-3`}
      style={{ color }}
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" className="shrink-0">
        <path d="M2 2 h16 v16 h-16 z M2 9 h16 M9 2 v16" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      {children}
    </p>
  )
}

export default function ElRinconDeFabyPage() {
  return (
    <div
      className={`${body.className} erf min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .erf a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(248,241,223,0.95)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#F8F1DF',
        }}
      />

      {/* ── Hero: la mesa puesta ── */}
      <section id="inicio" className="relative pt-[64px]" style={VICHY}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4`} style={{ color: C.rojo }}>
              Empedrado · Región del Maule
            </p>
            <h1
              className={`${display.className} font-bold leading-[0.95] text-[clamp(2.8rem,10vw,5.5rem)]`}
              style={{ color: C.tinta }}
            >
              El Rincón
              <br />
              <span style={{ color: C.rojo }}>de Faby</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mt-5 max-w-md" style={{ color: C.muted }}>
              Cabañas, camping, almuerzos y tinajas en el secano de
              Empedrado, atendido por su dueña.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-lg px-7 py-3 rounded-xl transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#F8F1DF' }}
              >
                Reservar con Fabiola
              </a>
              <a
                href="#carta"
                className={`${display.className} font-bold text-lg px-7 py-3 rounded-xl border-2 transition-colors hover:bg-white/50 tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3]" style={{ boxShadow: '0 22px 50px rgba(47,42,30,0.22)' }}>
                <Image
                  src={`${IMG}/embalse.webp`}
                  alt="Embalse de Empedrado entre cerros de secano, foto de la comuna"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
                <MarcaComuna texto="Embalse Empedrado · foto de la comuna" />
              </div>
              <figcaption className={`${mono.className} text-[10.5px] uppercase tracking-[0.18em] mt-3`} style={{ color: C.muted }}>
                El paisaje que rodea al rincón
              </figcaption>
            </figure>
          </Reveal>
        </div>
        {/* faja mantel */}
        <div style={{ backgroundColor: C.rojo }}>
          <ul
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-8 gap-y-1.5 text-base md:text-lg font-bold uppercase tracking-[0.08em] text-center`}
            style={{ color: '#F8F1DF' }}
          >
            <li>Cabañas</li>
            <li>Camping</li>
            <li>Almuerzos</li>
            <li>Tinajas</li>
          </ul>
        </div>
      </section>

      {/* ── La carta del rincón ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Sello>La carta del rincón</Sello>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} font-bold tracking-[0.01em] text-4xl md:text-5xl leading-[1.0]`}
              style={{ color: C.tinta }}
            >
              Cuatro cosas,
              <br />
              bien servidas
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Faby todavía no publica fotos de su rincón: las escenas de
              esta carta son bosquejos que se reemplazan por sus fotos
              reales al activar el sitio.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {CARTA.map((c, i) => (
            <li key={c.nombre}>
              <Reveal delay={i * 90} className="h-full">
                <article
                  className="h-full rounded-3xl overflow-hidden"
                  style={{ backgroundColor: C.mantel, border: `2px dashed ${C.rojo}` }}
                >
                  <div className="relative aspect-[10/7] p-6" style={VICHY}>
                    <MarcaBosquejo />
                    {c.escena}
                  </div>
                  <div className="px-5 md:px-6 pb-5">
                    <h3
                      className={`${display.className} font-bold text-2xl md:text-3xl leading-none`}
                      style={{ color: C.tinta }}
                    >
                      {c.nombre}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed mt-2" style={{ color: C.muted }}>
                      {c.detalle}
                    </p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-3`} style={{ color: C.verde }}>
                      {c.ficha}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── La comuna alrededor ── */}
      <section id="comuna" className="scroll-mt-20" style={{ backgroundColor: C.mantel, ...VICHY }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Sello>Empedrado, la comuna que lo rodea</Sello>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2
                className={`${display.className} font-bold tracking-[0.01em] text-4xl md:text-5xl leading-[1.0]`}
                style={{ color: C.tinta }}
              >
                El secano
                <br />
                hace el marco
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Estas fotos son del sector, no del negocio: el embalse, los
                senderos municipales y la Reserva Nacional Los Ruiles están
                en la comuna.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {COMUNA.map((f, i) => (
              <li key={f.src} className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <Reveal delay={i * 80}>
                  <figure className="relative overflow-hidden rounded-3xl aspect-[4/3]" style={{ boxShadow: '0 12px 30px rgba(47,42,30,0.16)' }}>
                    <Image
                      src={f.src}
                      alt={`${f.pie}, comuna de Empedrado`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                    <MarcaComuna texto="foto de la comuna" />
                  </figure>
                  <figcaption className="text-[13px] leading-snug mt-2.5 px-1" style={{ color: C.muted }}>
                    {f.pie}
                  </figcaption>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal delay={120} className="h-full">
                <div
                  className="h-full min-h-[200px] rounded-3xl p-6 flex flex-col justify-between"
                  style={{ backgroundColor: C.verde, color: '#F8F1DF' }}
                >
                  <p className={`${display.className} font-bold text-2xl md:text-3xl leading-tight`}>
                    Reserva Nacional
                    <br />
                    Los Ruiles
                  </p>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'rgba(248,241,223,0.85)' }}>
                    El bosque de ruil y foque más grande de Chile queda en
                    esta comuna: el plan perfecto para el día siguiente.
                  </p>
                </div>
              </Reveal>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Quién atiende ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Sello color={C.verde}>Quién atiende</Sello>
            <h2
              className={`${display.className} font-bold tracking-[0.01em] text-4xl md:text-5xl leading-[1.0] mb-6`}
              style={{ color: C.tinta }}
            >
              Al otro lado
              <br />
              está Fabiola
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-4" style={{ color: C.muted }}>
              El rincón aparece en el catálogo de turismo de la Municipalidad
              de Empedrado a nombre de Fabiola Gavilán. Sin página web ni
              formularios: se reserva hablando con ella.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              La dirección exacta del predio se confirma al reservar por
              WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-3xl p-6 md:p-8"
              style={{ backgroundColor: C.rojo, color: '#F8F1DF', boxShadow: '0 22px 50px rgba(168,58,44,0.28)' }}
            >
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-2`} style={{ color: 'rgba(248,241,223,0.85)' }}>
                Contacto directo
              </p>
              <p className={`${display.className} font-bold text-3xl md:text-4xl leading-none mb-1`}>
                {BIZ.duena}
              </p>
              <p className="text-sm mb-6" style={{ color: 'rgba(248,241,223,0.85)' }}>
                {BIZ.name} · {BIZ.address}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-lg px-7 py-3 rounded-xl transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: '#F8F1DF', color: C.rojo }}
              >
                {BIZ.phoneDisplay}
              </a>
              <p className={`${mono.className} text-[10.5px] uppercase tracking-[0.18em] mt-5`} style={{ color: 'rgba(248,241,223,0.8)' }}>
                WhatsApp · responde la misma casa
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Sello color="#D9C79B">Cómo llegar</Sello>
            <h2
              className={`${display.className} font-bold tracking-[0.01em] text-4xl md:text-5xl leading-[1.0] mb-6`}
              style={{ color: '#F8F1DF' }}
            >
              Empedrado queda
              <br />
              <span style={{ color: '#D9C79B' }}>al interior de Talca</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(248,241,223,0.78)' }}>
              El rincón está en la comuna de Empedrado, secano costero del
              Maule. Al reservar, Fabiola te pasa el punto exacto y las
              indicaciones.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-lg px-7 py-3 rounded-xl transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#F8F1DF' }}
              >
                Pedir la ubicación
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-lg px-7 py-3 rounded-xl border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(248,241,223,0.5)', color: '#F8F1DF' }}
              >
                Ver Empedrado en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-3xl min-h-[280px] border" style={{ borderColor: 'rgba(248,241,223,0.25)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.city}, ${BIZ.region}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} text-[10.5px] uppercase tracking-[0.18em] mt-3`} style={{ color: 'rgba(248,241,223,0.6)' }}>
              comuna de Empedrado · el punto exacto se comparte al reservar
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.mantel, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6" style={VICHY}>
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:opacity-80 tap-44" style={{ color: C.rojo }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:opacity-70 tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.muted }}>
            Datos del catálogo de turismo de la Municipalidad de Empedrado.
            Las escenas marcadas «bosquejo» se reemplazan por fotos reales
            del rincón al activar el sitio; las fotos de paisaje son de la comuna.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
