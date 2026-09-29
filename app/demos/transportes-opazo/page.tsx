import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, CARGAS, FLOTA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Identidad desde sus camiones reales: cabina blanca, plana azul y la
 * franja amarilla del forestal. Archivo Black de señalética de ruta +
 * IBM Plex Mono de ficha de embarque. El motivo es la pizarra de rutas:
 * códigos de carga, línea de kilómetros y fotos de la flota como
 * evidencia, sobre asfalto oscuro y papel claro.
 */
const C = {
  night: '#10161e',
  nightCard: '#18212c',
  paper: '#f2f3ee',
  card: '#ffffff',
  ink: '#131a21',
  soft: '#4a5860',
  line: 'rgba(19,26,33,0.14)',
  lineDark: 'rgba(255,255,255,0.16)',
  azul: '#2e63c4',
  azulDeep: '#16386f',
  yellow: '#f2b705',
}

export const metadata: Metadata = demoMetadata({
  slug: 'transportes-opazo',
  title: 'Transportes Opazo · Carga por camión desde San Javier, Maule',
  description:
    'Empresa de transporte por camión en San Javier de Loncomilla: carga general, forestal, maquinaria y proyectos fuera de la región. Nota 4,6 en Google. Fono +56 73 232 1235.',
  image: `${IMG}/forestal.webp`,
})

const NAV_LINKS = [
  { label: 'Qué movemos', href: '#cargas' },
  { label: 'La flota', href: '#flota' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

/** Marca visible de imagen de referencia (no es foto real del negocio). */
function BosquejoBadge() {
  return (
    <span
      className={`${mono.className} absolute left-3 top-3 z-10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]`}
      style={{ backgroundColor: 'rgba(242,183,5,0.95)', color: C.ink }}
    >
      bosquejo de referencia
    </span>
  )
}

/** Raya de ruta: la franja amarilla del forestal como marcador. */
function RouteMark({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-hidden="true">
      <span className="inline-block w-7 h-[3px]" style={{ backgroundColor: C.yellow }} />
      <span className="inline-block w-2.5 h-[3px]" style={{ backgroundColor: light ? 'rgba(255,255,255,0.55)' : C.azul }} />
    </span>
  )
}

export default function TransportesOpazoPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span className={`${display.className} tracking-tight`}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(16,22,30,0.92)',
          ink: '#ffffff',
          line: C.lineDark,
          btnBg: C.yellow,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero: el forestal real a todo ancho ────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/forestal.webp`}
            alt="Camión forestal real de Transportes Opazo cargado con troncos de pino junto a una excavadora"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(16,22,30,0.5) 0%, rgba(16,22,30,0.35) 42%, rgba(16,22,30,0.82) 78%, rgba(16,22,30,0.94) 100%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`${mono.className} inline-flex items-center gap-2 px-3 py-1.5 text-[11px] uppercase tracking-[0.26em] text-white`} style={{ backgroundColor: 'rgba(16,22,30,0.72)', border: `1px solid ${C.lineDark}` }}>
                <RouteMark light /> San Javier · Región del Maule
              </span>
              <span className={`${mono.className} inline-flex items-center gap-2 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]`} style={{ backgroundColor: 'rgba(16,22,30,0.72)', color: '#ffffff', border: `1px solid ${C.lineDark}` }}>
                <Stars value={4.6} color={C.yellow} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
            </div>
            <h1
              className={`${display.className} mt-5 inline-block px-4 py-3 md:px-6 md:py-4 text-[44px] leading-[0.95] md:text-[88px] text-white uppercase`}
              style={{ backgroundColor: 'rgba(16,22,30,0.72)', borderLeft: `6px solid ${C.yellow}` }}
            >
              La carga sale<br />de <span style={{ color: C.yellow }}>San Javier</span>
            </h1>
            <p className="mt-5 max-w-[48ch] text-[15px] md:text-lg leading-relaxed text-white/85">
              Transporte por camión para empresas y particulares: carga general, forestal y maquinaria, con flota propia.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className={`${focusRing} tap-44 inline-flex items-center gap-2 h-[52px] px-6 rounded-[8px] text-[15px] font-bold uppercase tracking-wide transition-transform active:scale-95`}
                style={{ backgroundColor: C.yellow, color: C.ink, outlineColor: C.yellow }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {BIZ.phoneDisplay}
              </a>
              <a
                href="#flota"
                className={`${focusRing} tap-44 inline-flex items-center h-[52px] px-6 rounded-[8px] text-[15px] font-bold uppercase tracking-wide text-white transition-transform active:scale-95`}
                style={{ backgroundColor: 'rgba(16,22,30,0.72)', border: `1.5px solid rgba(255,255,255,0.65)`, outlineColor: '#fff' }}
              >
                Ver la flota
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha de ruta ──────────────────────────────────────────── */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.azulDeep }} aria-label="Ruta de trabajo">
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center gap-4">
          <span className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] text-white shrink-0`}>Origen · San Javier</span>
          <span className="flex-1 h-[3px] opacity-90" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.yellow} 0 26px, transparent 26px 40px)` }} aria-hidden="true" />
          <span className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] text-white shrink-0`}>Destino · su obra, su cliente</span>
        </div>
      </section>

      {/* ── Qué movemos: pizarra de cargas ─────────────────────────── */}
      <section id="cargas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <span className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em]`} style={{ color: C.azul }}>
            <RouteMark /> Manifiesto
          </span>
          <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase`}>Qué movemos</h2>
          <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.soft }}>
            De lo que se ve en sus propias fotos: troncos, maquinaria y carga general, y trabajos que salen de la región.
          </p>
        </Reveal>

        <div className="mt-10">
          {CARGAS.map((c, i) => (
            <Reveal key={c.code} delay={i * 70}>
              <article
                className="grid grid-cols-[64px_1fr] md:grid-cols-[110px_220px_1fr] items-baseline gap-x-5 gap-y-1 py-5 md:py-6"
                style={{ borderTop: `1.5px solid ${C.line}` }}
              >
                <span className={`${mono.className} text-[13px] md:text-sm uppercase tracking-[0.14em]`} style={{ color: C.azul }}>
                  {c.code}
                </span>
                <h3 className={`${display.className} text-2xl md:text-3xl uppercase`}>{c.nombre}</h3>
                <p className="col-start-2 md:col-start-3 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.soft }}>
                  {c.detalle}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La flota: evidencia fotográfica ────────────────────────── */}
      <section id="flota" className="py-14 md:py-20" style={{ backgroundColor: C.night, color: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <span className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em]`} style={{ color: C.yellow }}>
              <RouteMark light /> La flota
            </span>
            <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase text-white`}>
              Camiones que se ven en la ruta
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed text-white/70">
              Fotos reales de su ficha: la plana con tractores y el forestal cargado. Lo que es referencia va marcado como bosquejo.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {FLOTA.map((f, i) => (
              <Reveal key={f.img} delay={i * 70} className={i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''}>
                <figure className="group h-full flex flex-col">
                  <div
                    className={`relative overflow-hidden ${i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:flex-1' : 'aspect-[4/3]'}`}
                    style={{ border: `1px solid ${C.lineDark}` }}
                  >
                    {f.bosquejo ? <BosquejoBadge /> : null}
                    <Image
                      src={`${IMG}/${f.img}.webp`}
                      alt={f.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes={i === 0 ? '(min-width: 1024px) 50vw, 92vw' : '(min-width: 1024px) 25vw, 45vw'}
                    />
                    {!f.bosquejo ? (
                      <span className={`${mono.className} absolute left-3 top-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]`} style={{ backgroundColor: 'rgba(16,22,30,0.8)', color: C.yellow }}>
                        foto real
                      </span>
                    ) : null}
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {f.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ───────────────────────────────────────── */}
      <section id="opiniones" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <span className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em]`} style={{ color: C.azul }}>
            <RouteMark /> 4,6 sobre 16 reseñas
          </span>
          <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase`}>Palabra de ruta</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.autor} delay={i * 80}>
              <figure className="h-full p-6 flex flex-col" style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, boxShadow: `4px 4px 0 ${C.azul}` }}>
                <Stars value={r.estrellas} color={C.azul} className="w-[15px] h-[15px]" />
                <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                  &ldquo;{r.texto}&rdquo;
                </blockquote>
                <figcaption className={`${mono.className} mt-5 pt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ borderTop: `1.5px dashed ${C.line}`, color: C.soft }}>
                  {r.autor} · {r.detalle}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.soft }}>
            Reseñas reales de su ficha de Google Maps
          </p>
        </Reveal>
      </section>

      {/* ── Contacto ───────────────────────────────────────────────── */}
      <section id="contacto" className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          <Reveal>
            <div className="h-full p-6 md:p-8 flex flex-col" style={{ backgroundColor: C.night, color: '#ffffff' }}>
              <span className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em]`} style={{ color: C.yellow }}>
                <RouteMark light /> Coordinar un flete
              </span>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl uppercase text-white`}>
                Se habla por teléfono
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/75 max-w-[44ch]">
                Como se hace siempre en la ruta: una llamada, qué hay que mover, desde dónde y para cuándo.
              </p>
              <dl className="mt-6 flex flex-col gap-4 text-[15px]">
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/55`}>Base</dt>
                  <dd className="mt-1 font-medium">{BIZ.address}, {BIZ.region}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/55`}>Teléfono</dt>
                  <dd className="mt-1">
                    <a href={CALL_LINK} className={`${focusRing} ${mono.className} text-lg font-semibold tracking-wide underline underline-offset-4 decoration-dotted tap-44`} style={{ outlineColor: C.yellow }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/55`}>Razón social</dt>
                  <dd className="mt-1 text-white/80">{BIZ.legal}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-7 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${focusRing} tap-44 inline-flex items-center gap-2 h-[52px] px-6 rounded-[8px] text-[15px] font-bold uppercase tracking-wide transition-transform active:scale-95`}
                  style={{ backgroundColor: C.yellow, color: C.ink, outlineColor: C.yellow }}
                >
                  Llamar ahora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} tap-44 inline-flex items-center h-[52px] px-6 rounded-[8px] text-[15px] font-bold uppercase tracking-wide text-white transition-transform active:scale-95`}
                  style={{ border: `1.5px solid rgba(255,255,255,0.6)`, outlineColor: '#fff' }}
                >
                  Ver en Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative h-full min-h-[320px] overflow-hidden shadow-md" style={{ border: `1.5px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="pt-7 pb-24" style={{ backgroundColor: C.night, borderTop: `1px solid ${C.lineDark}`, color: 'rgba(255,255,255,0.8)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <RouteMark light />
            <span className={`${display.className} text-xl uppercase text-white`}>{BIZ.name}</span>
          </div>
          <p className="text-sm leading-relaxed max-w-[52ch] text-white/65">
            Empresa de transporte por camión en {BIZ.address}, {BIZ.region}. Carga general, forestal y maquinaria. {BIZ.phoneDisplay}.
          </p>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/40`}>
            {BIZ.legal} · {BIZ.city} · {BIZ.region}
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.azul} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
