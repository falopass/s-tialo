import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Chrome, C } from './chrome'
import { BIZ, FOTOS, MAPS_EMBED, MAPS_URL, RESENAS, SERVICIOS, WA_LINK } from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

// Líneas diagonales tipo precinto de taller: la textura del fondo.
const PRECINTO = {
  backgroundImage:
    'repeating-linear-gradient(-45deg, rgba(242,197,0,0.05) 0 2px, transparent 2px 26px)',
}

function Etiqueta({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.24em] mb-4`}
      style={{ color: C.amarillo }}
    >
      {children}
    </p>
  )
}

// Corona del escudo de El Rey (ícono, no foto).
function Corona({ className = 'w-6 h-6', color = C.amarillo }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M3 8l4 4 5-7 5 7 4-4v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17V8z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="3" cy="5.5" r="1.2" fill={color} />
      <circle cx="12" cy="3" r="1.2" fill={color} />
      <circle cx="21" cy="5.5" r="1.2" fill={color} />
    </svg>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'soluciones-mecanicas-el-rey',
  title: 'Soluciones Mecánicas El Rey — taller de autos y motos en Talca',
  description:
    'Taller en 2½ norte, población Nuevo Horizonte, Talca. Mecánica general, electricidad, scanner y desabolladura y pintura. 5,0 con 62 reseñas en Google. Agenda por WhatsApp.',
  image: FOTOS.fachada.src,
})

export default function ElReyPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.fondo, color: C.tinta }}>
      <style>{`
        .elrey-marquee { animation: elrey-marquee 26s linear infinite; }
        @keyframes elrey-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .elrey-marquee { animation: none; } }
      `}</style>
      <Chrome fontClass={display.className}>
        {/* ── Hero: el afiche hecho página ── */}
        <section id="inicio" className="relative overflow-hidden pt-28 md:pt-32">
          <div className="absolute inset-0" style={PRECINTO} aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16">
            <div className="grid md:grid-cols-[1.25fr_minmax(260px,340px)] gap-10 items-center">
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <Corona className="w-7 h-7" />
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.tintaSuave }}>
                    Taller mecánico · {BIZ.referencia} · Talca
                  </p>
                </div>
                <h1
                  className={`${display.className} uppercase font-semibold leading-[0.92] tracking-tight text-[clamp(2.9rem,10.5vw,6.6rem)] mb-6`}
                >
                  El taller que solo
                  <br />
                  colecciona <span style={{ color: C.amarillo }}>cinco</span>
                  <br />
                  estrellas
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: C.tintaSuave }}>
                  Mecánica general, electricidad y desabolladura y pintura para autos y motos.
                  En {BIZ.addressCorto} — y las {BIZ.resenas} reseñas que tiene en Google lo
                  dejaron todas en {BIZ.rating}.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center gap-2 uppercase font-semibold tracking-[0.06em] text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.amarillo, color: C.tintaOscura }}
                  >
                    Agendar hora por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-semibold transition-colors hover:bg-white/5 ${focusRing} tap-44`}
                    style={{ borderColor: C.linea, color: C.tinta }}
                  >
                    <Stars value={5} color={C.amarillo} className="w-3.5 h-3.5" />
                    {BIZ.rating} · {BIZ.resenas} reseñas
                  </a>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <figure className="relative rotate-2 rounded-lg overflow-hidden shadow-2xl" style={{ backgroundColor: C.panel }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- foto ya optimizada en public/ */}
                  <img
                    src={FOTOS.fachada.src}
                    alt={FOTOS.fachada.alt}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                  <figcaption
                    className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.18em]`}
                    style={{ color: C.tintaSuave }}
                  >
                    {BIZ.addressCorto} · foto del propio taller
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          {/* Cinta corrida con los servicios, como el borde de un afiche */}
          <div className="relative border-y overflow-hidden" style={{ borderColor: C.linea, backgroundColor: C.panel }}>
            <div className="elrey-marquee flex w-max items-center py-3.5" aria-hidden="true">
              {[0, 1].map((copia) => (
                <div key={copia} className="flex items-center shrink-0">
                  {SERVICIOS.map((s) => (
                    <span
                      key={`${copia}-${s}`}
                      className={`${display.className} flex items-center gap-5 px-5 uppercase font-medium text-sm md:text-base tracking-[0.08em] whitespace-nowrap`}
                    >
                      {s}
                      <Corona className="w-4 h-4" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── El número: 5,0 de 62 ── */}
        <section id="resenas" className="scroll-mt-20 border-b" style={{ borderColor: C.linea }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid md:grid-cols-[minmax(200px,300px)_1fr] gap-10 md:gap-14 items-start">
              <Reveal>
                <Etiqueta>Nota en Google</Etiqueta>
                <p
                  className={`${display.className} font-semibold leading-none text-[clamp(5rem,18vw,9rem)]`}
                  style={{ color: C.amarillo }}
                >
                  {BIZ.rating}
                </p>
                <div className="mt-3 mb-2">
                  <Stars value={5} color={C.amarillo} className="w-5 h-5" />
                </div>
                <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: C.tintaSuave }}>
                  {BIZ.resenas} reseñas en Google y ni una bajó de cinco estrellas.
                </p>
              </Reveal>
              <div>
                {RESENAS.map((r, i) => (
                  <Reveal key={r.autor} delay={i * 70}>
                    <blockquote className="border-b py-6 first:pt-0" style={{ borderColor: C.linea }}>
                      <div className="flex items-center justify-between gap-4 mb-2.5">
                        <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] font-bold`}>
                          {r.autor}
                        </p>
                        <Stars value={5} color={C.amarillo} className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-base md:text-lg leading-relaxed" style={{ color: C.tintaSuave }}>
                        “{r.texto}”
                      </p>
                      <p className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                        {r.cuando} · Google Maps
                      </p>
                    </blockquote>
                  </Reveal>
                ))}
                <Reveal delay={280}>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block mt-5 text-xs uppercase tracking-[0.18em] underline underline-offset-4 ${focusRing} tap-44`}
                    style={{ color: C.amarillo }}
                  >
                    Leer las 62 en Google →
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Servicios: los chips del afiche ── */}
        <section id="servicios" className="scroll-mt-20 border-b" style={{ borderColor: C.linea }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid md:grid-cols-[1fr_minmax(240px,300px)] gap-10 md:gap-14 items-start">
              <div>
                <Reveal>
                  <Etiqueta>Según su propio afiche</Etiqueta>
                  <h2 className={`${display.className} uppercase font-semibold leading-[0.94] text-[clamp(2.4rem,7vw,4.6rem)] mb-8`}>
                    Lo que entra
                    <br />
                    al taller
                  </h2>
                </Reveal>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICIOS.map((s, i) => (
                    <Reveal key={s} delay={i * 40}>
                      <span
                        className={`${display.className} inline-block uppercase font-medium tracking-[0.08em] text-base md:text-lg px-5 py-2.5 rounded-full`}
                        style={
                          i % 2 === 0
                            ? { backgroundColor: C.amarillo, color: C.tintaOscura }
                            : { backgroundColor: 'transparent', color: C.tinta, border: `1.5px solid ${C.lineaFuerte}` }
                        }
                      >
                        {s}
                      </span>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={360}>
                  <p className="mt-7 text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.tintaSuave }}>
                    La entrada es accesible para silla de ruedas. Para coordinar un trabajo,
                    se escribe por WhatsApp y se conversa la hora.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <figure
                  className="relative -rotate-1 rounded-lg overflow-hidden shadow-2xl"
                  style={{ backgroundColor: C.panel, border: `1px solid ${C.linea}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- imagen ya optimizada en public/ */}
                  <img src={FOTOS.afiche.src} alt={FOTOS.afiche.alt} className="w-full h-auto" loading="lazy" />
                  <figcaption
                    className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.18em]`}
                    style={{ color: C.tintaSuave }}
                  >
                    Afiche publicado por el taller en Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── La cuadra: cómo se ve llegar ── */}
        <section id="taller" className="scroll-mt-20 border-b" style={{ borderColor: C.linea }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Etiqueta>2½ norte entre 22 y 23 oriente</Etiqueta>
              <h2 className={`${display.className} uppercase font-semibold leading-[0.94] text-[clamp(2.4rem,7vw,4.6rem)] mb-10`}>
                Así se ve la cuadra
                <br />
                de Nuevo Horizonte
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              <Reveal>
                <figure className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- imagen ya optimizada en public/ */}
                  <img
                    src={FOTOS.calleTaller.src}
                    alt={FOTOS.calleTaller.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <figcaption
                    className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.18em]`}
                    style={{ color: C.tintaSuave, backgroundColor: C.panel }}
                  >
                    El taller visto desde la calle · Street View
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <figure className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- imagen ya optimizada en public/ */}
                  <img
                    src={FOTOS.calleCuadra.src}
                    alt={FOTOS.calleCuadra.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <figcaption
                    className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.18em]`}
                    style={{ color: C.tintaSuave, backgroundColor: C.panel }}
                  >
                    La cuadra mirando hacia 23 oriente · Street View
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Horario y cómo llegar ── */}
        <section id="contacto" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Etiqueta>Horario y cómo llegar</Etiqueta>
              <h2 className={`${display.className} uppercase font-semibold leading-[0.94] text-[clamp(2.4rem,7vw,4.6rem)] mb-10`}>
                De lunes a sábado
                <br />
                en 2½ norte
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <Reveal>
                <dl>
                  {BIZ.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline justify-between gap-4 border-b py-4"
                      style={{ borderColor: C.linea }}
                    >
                      <dt className="text-sm md:text-base font-semibold">{h.days}</dt>
                      <dd className={`${mono.className} text-sm md:text-base`} style={{ color: C.amarillo }}>
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <address className="not-italic mt-6 text-sm md:text-base leading-relaxed" style={{ color: C.tintaSuave }}>
                  {BIZ.address}
                </address>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block mt-6 uppercase font-semibold tracking-[0.06em] text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.amarillo, color: C.tintaOscura }}
                >
                  Escribir al {BIZ.phone}
                </a>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
                  <LazyMap
                    src={MAPS_EMBED}
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                    className="w-full h-[320px] md:h-[380px] border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} block px-4 py-3 text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-white/5 ${focusRing} tap-44`}
                    style={{ color: C.tinta, backgroundColor: C.panel }}
                  >
                    Cómo llegar en Google Maps →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── CTA amarillo ── */}
        <section style={{ backgroundColor: C.amarillo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <div className="flex items-start gap-4">
                <Corona className="w-9 h-9 mt-1 shrink-0" color={C.tintaOscura} />
                <h2
                  className={`${display.className} uppercase font-semibold leading-[0.94] text-[clamp(2.2rem,7vw,4.2rem)]`}
                  style={{ color: C.tintaOscura }}
                >
                  ¿El auto suena raro?
                  <br />
                  al taller del rey
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block uppercase font-semibold tracking-[0.06em] text-base px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.tintaOscura, color: C.amarillo }}
              >
                Escribir por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
