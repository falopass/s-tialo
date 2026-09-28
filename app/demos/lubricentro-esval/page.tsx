import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, FB_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «vitrina de mostrador» — el taller como la pizarra
 * que está sobre su mesón: papel hueso, tinta negra y el burdeos del
 * muro de la casa. El logo real (puño grabado con llave, blanco y negro)
 * funciona como sello de imprenta. Barlow Condensed hace de letra de
 * letrero pintado; IBM Plex Mono rotula marcas y horarios como lista
 * de repuestos. Motivo propio: la «línea de pedido» — cada servicio y
 * dato va escrito como ítem de mostrador con su código a la izquierda.
 */
const C = {
  paper: '#F2EEE2',
  card: '#FBF8EF',
  ink: '#1B1611',
  muted: '#5A5044',
  maroon: '#7C231C',
  maroonDeep: '#571510',
  cream: '#EFE7D4',
  steel: '#2B2E33',
  line: 'rgba(27,22,17,0.2)',
  lineDark: 'rgba(255,255,255,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lubricentro-esval',
  title: 'Lubricentro Esval — Mecánica integral y repuestos en Quechereguas, Molina',
  description:
    'Ingeniería Esval en Quechereguas, Molina: mecánica integral, lubricentro y venta de repuestos. Lubricantes Mobil y Quartz TotalEnergies, CajaVecina BancoEstado. Lun a Vie 9-13 / 15-19 hrs.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Horario', href: '#horario' },
  { label: 'Ubicación', href: '#ubicacion' },
]

function Icon({ d, color = C.maroon, className = 'w-6 h-6' }: { d: string; color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
const ICONS = {
  wrench: 'M14.7 6.3a4 4 0 0 0-5.6 5L3 17.4V21h3.6l6.1-6.1a4 4 0 0 0 5-5.6l-2.7 2.7-2.4-2.4 2.1-3.3z',
  oil: 'M12 2.7s6 6.3 6 11a6 6 0 1 1-12 0c0-4.7 6-11 6-11z',
  gear: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8.5 4a6.5 6.5 0 0 0-.1-1l2-1.5-2-3.5-2.3 1a6.6 6.6 0 0 0-1.7-1L16 3.6h-4l-.4 2.4a6.6 6.6 0 0 0-1.7 1l-2.3-1-2 3.5 2 1.5a6.5 6.5 0 0 0 0 2l-2 1.5 2 3.5 2.3-1a6.6 6.6 0 0 0 1.7 1l.4 2.4h4l.4-2.4a6.6 6.6 0 0 0 1.7-1l2.3 1 2-3.5-2-1.5c.07-.3.1-.66.1-1z',
  pin: 'M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5z',
}

const LINEAS = [
  {
    code: 'ÍTEM 01',
    icon: ICONS.gear,
    t: 'Mecánica integral',
    d: 'Diagnóstico y reparación general del auto. El letrero de la casa lo dice completo: mecánica integral, no solo cambio de aceite.',
  },
  {
    code: 'ÍTEM 02',
    icon: ICONS.oil,
    t: 'Lubricentro',
    d: 'Cambio de aceite y lubricantes Mobil y Quartz TotalEnergies — las marcas que anuncian los letreros de la fachada.',
  },
  {
    code: 'ÍTEM 03',
    icon: ICONS.wrench,
    t: 'Venta de repuestos',
    d: 'Repuestos sobre el mesón en Quechereguas: si no está, se consulta y se consigue.',
  },
]

const HORARIO = [
  ['Lunes a viernes', '9:00 – 13:00', '15:00 – 19:00'],
  ['Sábado', 'Cerrado', ''],
  ['Domingo', 'Cerrado', ''],
]

const EXTRAS = [
  { t: 'CajaVecina', d: 'Punto de pago BancoEstado dentro del local — útil para el pueblo.' },
  { t: 'Agua Maule', d: 'También se vende agua embotellada, como indica el letrero de la puerta.' },
]

export default function LubricentroEsval() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className={display.className} style={{ fontWeight: 700, letterSpacing: '0.04em' }}>
            {BIZ.nameFull.toUpperCase()}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.maroon,
          btnInk: '#FBF8EF',
        }}
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* ── Hero: pizarra del taller ── */}
      <section id="inicio" className="pt-[76px] md:pt-[96px] px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <Reveal>
                <p className={`${mono.className} text-xs font-semibold tracking-[0.25em] uppercase`} style={{ color: C.maroon }}>
                  {BIZ.city} · Región del Maule
                </p>
                <h1
                  className={`${display.className} uppercase leading-[0.95] mt-3`}
                  style={{ color: C.ink, fontWeight: 800, fontSize: 'clamp(44px, 8.5vw, 96px)' }}
                >
                  Mecánica
                  <br />
                  <span style={{ color: C.maroon }}>Lubricentro</span>
                  <br />
                  Repuestos
                </h1>
                <p className="text-base md:text-lg mt-5 max-w-lg leading-relaxed" style={{ color: C.muted }}>
                  Tres oficios bajo un mismo techo en Quechereguas: se arregla el auto,
                  se cambia el aceite y se vende el repuesto. Como dice su letrero.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.maroon, color: '#FBF8EF' }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href="#horario"
                    className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                    style={{ border: `2px solid ${C.ink}`, color: C.ink }}
                  >
                    Ver horario
                  </a>
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                    style={{ backgroundColor: C.ink }}
                  >
                    <Stars value={BIZ.rating} color="#E9C46A" className="w-3.5 h-3.5" />
                    <span className={`${mono.className} text-xs font-semibold`} style={{ color: C.paper }}>
                      {BIZ.rating.toLocaleString('es-CL')} · {BIZ.reviews} reseña
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={80}>
              <div className="hidden md:flex flex-col items-center gap-2 pb-2">
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Logo de Ingeniería Esval: puño grabado sosteniendo una llave"
                  width={150}
                  height={150}
                  className="rounded-full"
                  style={{ border: `2px solid ${C.ink}` }}
                />
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] text-center`} style={{ color: C.muted }}>
                  {BIZ.nameFull}
                  <br />
                  Servicio integral y venta de repuestos
                </p>
              </div>
            </Reveal>
          </div>

          {/* Fachada real */}
          <Reveal delay={160}>
            <figure className="relative mt-8 md:mt-10 rounded-2xl overflow-hidden" style={{ border: `3px solid ${C.ink}` }}>
              <div className="relative aspect-[21/9] md:aspect-[3/1]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada del Lubricentro Esval en Quechereguas: letrero Mobil y puerta de vidrio"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <figcaption
                className={`${mono.className} absolute bottom-0 inset-x-0 px-4 py-2.5 text-[11px] md:text-xs flex flex-wrap gap-x-4 gap-y-1 items-center`}
                style={{ backgroundColor: 'rgba(27,22,17,0.82)', color: C.cream }}
              >
                <span className="font-semibold uppercase tracking-widest" style={{ color: '#E9C46A' }}>
                  La casa en Quechereguas
                </span>
                <span>Mobil · Lubricentro Esval · CajaVecina · Aquí lubricantes</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de marcas reales ── */}
      <section className="mt-10 md:mt-14" style={{ backgroundColor: C.maroon }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <p className={`${mono.className} text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-center`} style={{ color: C.cream }}>
            Mobil &nbsp;·&nbsp; Quartz Lubricantes TotalEnergies &nbsp;·&nbsp; CajaVecina BancoEstado &nbsp;·&nbsp; Agua Maule
          </p>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-xs font-semibold tracking-[0.25em] uppercase`} style={{ color: C.maroon }}>
              Lista del mostrador
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl mt-2`} style={{ color: C.ink, fontWeight: 800 }}>
              Tres líneas de trabajo
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {LINEAS.map((s, i) => (
              <Reveal key={s.code} delay={i * 100}>
                <article
                  className="rounded-2xl p-6 h-full"
                  style={{ backgroundColor: C.card, border: `2px solid ${C.ink}` }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`${mono.className} text-[11px] font-semibold tracking-widest`} style={{ color: C.muted }}>
                      {s.code}
                    </span>
                    <Icon d={s.icon} />
                  </div>
                  <h3 className={`${display.className} uppercase text-2xl md:text-3xl mt-4`} style={{ color: C.ink, fontWeight: 700 }}>
                    {s.t}
                  </h3>
                  <p className="text-sm md:text-base mt-3 leading-relaxed" style={{ color: C.muted }}>
                    {s.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Interior del taller + letreros */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { img: `${IMG}/taller.webp`, alt: 'Interior del taller de Ingeniería Esval con camioneta en el pórtico de trabajo' },
              { img: `${IMG}/letrero-quartz.webp`, alt: 'Letrero exterior: Quartz Lubricantes e Ingeniería Esval, servicio autorizado' },
              { img: `${IMG}/puerta.webp`, alt: 'Puerta del local con avisos de lubricantes Mobil' },
            ].map((f, i) => (
              <Reveal key={f.img} delay={i * 90}>
                <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: i === 2 ? '4/5' : '16/10', border: `2px solid ${C.ink}` }}>
                  <Image src={f.img} alt={f.alt} fill className="object-cover" sizes="(min-width:768px) 33vw, 100vw" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} text-[11px] mt-3`} style={{ color: C.muted }}>
              Interior del pórtico de trabajo y letreros reales de la casa (Street View, mar-2026).
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Horario + extras ── */}
      <section id="horario" className="px-4 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.steel }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Reveal>
              <p className={`${mono.className} text-xs font-semibold tracking-[0.25em] uppercase`} style={{ color: '#E9C46A' }}>
                Atención de mostrador
              </p>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl mt-2`} style={{ color: C.paper, fontWeight: 800 }}>
                Horario partido,
                <br />
                como el campo
              </h2>
              <p className="text-base md:text-lg mt-4 leading-relaxed" style={{ color: 'rgba(242,238,226,0.75)' }}>
                Abre en la mañana, cierra al almuerzo y vuelve en la tarde.
                Fin de semana cerrado — en Quechereguas se respeta el descanso.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-6 py-3 text-base font-bold mt-7 transition-transform active:scale-95"
                style={{ backgroundColor: '#E9C46A', color: C.ink }}
              >
                Escribir al {BIZ.phoneDisplay}
              </a>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="rounded-2xl p-6 md:p-7" style={{ backgroundColor: 'rgba(242,238,226,0.07)', border: `1px solid ${C.lineDark}` }}>
              <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.2em]`} style={{ color: '#E9C46A' }}>
                Horario informado en Google
              </p>
              <ul className="mt-4 space-y-0">
                {HORARIO.map(([d, m, t]) => (
                  <li
                    key={d}
                    className="flex items-baseline justify-between gap-4 py-3"
                    style={{ borderBottom: `1px dashed ${C.lineDark}` }}
                  >
                    <span className={`${display.className} uppercase text-lg md:text-xl`} style={{ color: C.paper, fontWeight: 600 }}>
                      {d}
                    </span>
                    <span className={`${mono.className} text-sm md:text-base font-semibold text-right`} style={{ color: m === 'Cerrado' ? 'rgba(242,238,226,0.55)' : C.paper }}>
                      {m}
                      {t && <span className="block text-right">{t}</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-3">
                {EXTRAS.map((x) => (
                  <li key={x.t} className="flex gap-3">
                    <Icon d={ICONS.pin} color="#E9C46A" className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold" style={{ color: C.paper }}>{x.t}</p>
                      <p className="text-sm leading-snug" style={{ color: 'rgba(242,238,226,0.7)' }}>{x.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reputación honesta ── */}
      <section className="px-4 md:px-8 py-14 md:py-18">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div
              className="rounded-2xl px-6 py-7 md:px-10 md:py-9 flex flex-wrap items-center justify-between gap-5"
              style={{ backgroundColor: C.card, border: `2px solid ${C.ink}` }}
            >
              <div className="max-w-xl">
                <h2 className={`${display.className} uppercase text-3xl md:text-4xl`} style={{ color: C.ink, fontWeight: 800 }}>
                  5,0 estrellas en su ficha
                </h2>
                <p className="text-sm md:text-base mt-2 leading-relaxed" style={{ color: C.muted }}>
                  Una sola reseña hasta ahora — la dejó Teresa Rodríguez Constanzo con cinco
                  estrellas. En un pueblo chico, el boca a boca pesa más que el contador de Google.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`${display.className} text-6xl md:text-7xl leading-none`} style={{ color: C.maroon, fontWeight: 800 }}>
                  5,0
                </span>
                <Stars value={5} color={C.maroon} className="w-6 h-6" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-xs font-semibold tracking-[0.25em] uppercase`} style={{ color: C.maroon }}>
              En el camino de Quechereguas
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl mt-2`} style={{ color: C.ink, fontWeight: 800 }}>
              Frente al camino, muro burdeo
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-8 items-start">
            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9', border: `3px solid ${C.ink}` }}>
                <Image
                  src={`${IMG}/muro-rojo.webp`}
                  alt="Muro burdeo del taller con letrero Ingeniería Esval sobre el camino de Quechereguas"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 50vw, 100vw"
                />
                <span
                  className={`${mono.className} absolute bottom-3 left-3 text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded`}
                  style={{ backgroundColor: 'rgba(27,22,17,0.85)', color: C.cream }}
                >
                  Street View · Quechereguas 1239
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono / WhatsApp', BIZ.phoneDisplay],
                  ['Horario', 'Lun-Vie · 9-13 y 15-19 hrs'],
                  ['Fin de semana', 'Cerrado'],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-baseline justify-between gap-4 pb-3" style={{ borderBottom: `1px solid ${C.line}` }}>
                    <span className={`${mono.className} text-[11px] uppercase tracking-widest`} style={{ color: C.muted }}>{k}</span>
                    <span className="text-sm md:text-base font-semibold text-right" style={{ color: C.ink }}>{v}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: C.maroon, color: '#FBF8EF' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ border: `2px solid ${C.ink}`, color: C.ink }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl overflow-hidden" style={{ border: `3px solid ${C.ink}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa de Repuestos y Lubricentro Esval, Quechereguas, Molina"
                  className="w-full h-[320px] md:h-[420px] block"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-4 md:px-8 py-8" style={{ backgroundColor: C.ink, color: 'rgba(242,238,226,0.7)' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-white" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-sm leading-none`} style={{ color: C.paper, fontWeight: 700 }}>
                {BIZ.nameFull} — Repuestos y Lubricentro
              </p>
              <p className={`${mono.className} text-[11px] mt-1`}>{BIZ.address}, {BIZ.city}, Maule</p>
            </div>
          </div>
          <div className={`${mono.className} text-[11px] flex flex-wrap gap-x-5 gap-y-1`}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">{BIZ.phoneDisplay}</a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Maps</a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.nameFull}`} />
    </main>
  )
}
