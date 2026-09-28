import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, FOTOS, SESION, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  bone: '#F5F1EA',
  paper: '#FCFAF6',
  ink: '#16130F',
  soot: '#221E1A',
  crimson: '#9E1B2F',
  crimsonDeep: '#7C1122',
  muted: 'rgba(22,19,15,0.68)',
  line: 'rgba(22,19,15,0.16)',
  boneSoft: 'rgba(245,241,234,0.72)',
  lineDark: 'rgba(245,241,234,0.22)',
}

const BTN_SOLID = `${display.className} pm-btn-red font-semibold text-sm px-7 py-3 transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16130F] tap-44`
const BTN_GHOST = `${display.className} font-semibold text-sm px-7 py-3 border transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`

export const metadata: Metadata = demoMetadata({
  slug: 'fotos-de-embarazo-talca-photomemorym',
  title: 'PhotoMemory Maternity · Fotos de embarazo en Talca',
  description:
    'Estudio de fotografía de embarazo en Talca. Sesiones en blanco y negro o color, con pareja e hijos. 5,0 en Google con 68 opiniones. Agenda por WhatsApp.',
  image: '/demos/fotos-de-embarazo-talca-photomemorym/hero-byn.webp',
})

const NAV_LINKS = [
  { label: 'La tira', href: '#tira' },
  { label: 'La sesión', href: '#sesion' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Agenda', href: '#agenda' },
]

/** Esquina de encuadre de cámara (crop mark). */
function Crop({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`absolute w-5 h-5 pointer-events-none ${className}`} fill="none" stroke={C.crimson} strokeWidth="2" aria-hidden="true">
      <path d="M2 22 V8 M2 22 H16" />
    </svg>
  )
}

function Head({
  kicker,
  title,
  note,
  dark = false,
}: {
  kicker: string
  title: React.ReactNode
  note?: string
  dark?: boolean
}) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14">
        <p
          className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.32em] mb-3 flex items-center gap-3`}
          style={{ color: dark ? C.boneSoft : C.crimsonDeep }}
        >
          <span className="inline-block w-8 h-px" style={{ backgroundColor: dark ? C.boneSoft : C.crimsonDeep }} aria-hidden="true" />
          {kicker}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2
            className={`${display.className} font-semibold leading-[1.02] tracking-[-0.01em] text-4xl md:text-5xl max-w-2xl`}
            style={{ color: dark ? C.bone : C.ink }}
          >
            {title}
          </h2>
          {note && (
            <p
              className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.22em] max-w-[240px] md:text-right`}
              style={{ color: dark ? C.boneSoft : C.muted }}
            >
              {note}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function PhotoMemoryPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.bone, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .pm-btn-red { background-color: #9E1B2F; color: #FCFAF6 }
        .pm-btn-red:hover { background-color: #7C1122 }
        .pm-sprocket {
          height: 14px;
          background-image: radial-gradient(ellipse 4px 6px at 12px 50%, rgba(245,241,234,0.9) 0 100%, transparent 105%);
          background-size: 34px 14px;
          background-repeat: repeat-x;
        }
        .pm-band { display: flex; justify-content: center; padding: 0 5rem 1.25rem 1.25rem; background-color: #16130F }
        .pm-band > div { position: static; max-width: 100%; background-color: rgba(10,9,7,0.94) }
      `}</style>

      <BlitzNav
        name={
          <span className="leading-none">
            <span className="block text-[15px] md:text-lg tracking-[0.02em]">PhotoMemory</span>
            <span className={`${mono.className} block text-[8px] md:text-[9px] uppercase tracking-[0.42em]`}>
              maternity
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold`}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(245,241,234,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.crimson,
          btnInk: '#FCFAF6',
        }}
      />

      {/* ── Hero editorial ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <p
              className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.32em] mb-6 flex items-center gap-3`}
              style={{ color: C.crimsonDeep }}
            >
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.crimsonDeep }} aria-hidden="true" />
              Estudio de fotografía de embarazo · {BIZ.city}
            </p>
            <h1
              className={`${display.className} font-semibold leading-[1.0] tracking-[-0.015em] text-[clamp(2.7rem,9.5vw,5.6rem)] mb-6`}
            >
              Tu guatita,
              <br />
              <em className="font-medium" style={{ color: C.crimson }}>
                en blanco y negro.
              </em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              Sesiones de embarazo en estudio, con paciencia y sin apuro:
              sola, en pareja o con tus hijos. La foto que le vas a mostrar
              a tu guagua cuando sea grande.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_SOLID}>
                Reservar sesión
              </a>
              <a href="#tira" className={BTN_GHOST} style={{ borderColor: C.ink, color: C.ink }}>
                Ver su trabajo
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
            >
              <Stars value={5} color={C.crimson} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[11px] tracking-[0.06em]`}>
                5,0 · {BIZ.reviews} opiniones en Google
              </span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <figure className="relative max-w-[440px] mx-auto lg:ml-auto">
              <Crop className="-top-3 -left-3 rotate-0" />
              <Crop className="-top-3 -right-3 rotate-90" />
              <Crop className="-bottom-3 -right-3 rotate-180" />
              <Crop className="-bottom-3 -left-3 -rotate-90" />
              <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.soot }}>
                <Image
                  src={`${IMG}/hero-byn.webp`}
                  alt="Fotografía de estudio en blanco y negro: embarazada con blazer abierto mirando su guatita, firma PhotoMemory Maternity"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mt-3 flex justify-between`}
                style={{ color: C.muted }}
              >
                <span>PhotoMemory Maternity</span>
                <span>estudio · {BIZ.city}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Tira de contacto ── */}
      <section id="tira" className="scroll-mt-20" style={{ backgroundColor: C.soot }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Head
            dark
            kicker="Hoja de contactos"
            title={
              <>
                Su trabajo, <em style={{ color: '#E8A3AC' }}>fotograma a fotograma</em>
              </>
            }
            note="Fotos reales de su ficha de Google"
          />
          <div className="pm-sprocket" aria-hidden="true" />
          <Reveal>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 py-4 md:py-6">
              {FOTOS.map((f, i) => (
                <li key={f.frame} className="relative" style={{ backgroundColor: '#0C0A08' }}>
                  <div className={`relative ${i === 3 ? 'aspect-[3/4]' : 'aspect-[4/5]'} overflow-hidden`}>
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5">
                    <span className={`${mono.className} text-[9px] tracking-[0.3em]`} style={{ color: C.boneSoft }}>
                      {f.frame}
                    </span>
                    <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.crimson }} aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="pm-sprocket" aria-hidden="true" />
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_SOLID}>
                Quiero una sesión así
              </a>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.boneSoft }}>
                blanco y negro o color · en estudio
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La sesión ── */}
      <section id="sesion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Head
          kicker="Cómo es la sesión"
          title={
            <>
              Paciencia primero: <em style={{ color: C.crimson }}>lo cuentan las mamás</em>
            </>
          }
          note="Tomado de sus reseñas reales"
        />
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
          {SESION.map((s, i) => (
            <li key={s.num}>
              <Reveal delay={i * 80}>
                <div className="relative pl-14">
                  <span
                    className={`${display.className} absolute left-0 top-0 font-semibold italic text-4xl md:text-5xl leading-none`}
                    style={{ color: C.crimson }}
                  >
                    {s.num}
                  </span>
                  <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-1.5`}>{s.name}</h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Reseñas ── */}
      <section
        id="resenas"
        className="scroll-mt-20"
        style={{ backgroundColor: C.paper, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p
                className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.32em] mb-4 flex items-center gap-3`}
                style={{ color: C.crimsonDeep }}
              >
                <span className="inline-block w-8 h-px" style={{ backgroundColor: C.crimsonDeep }} aria-hidden="true" />
                Lo que dicen en Google
              </p>
              <p className={`${display.className} font-semibold leading-none text-[clamp(4.5rem,14vw,8rem)] mb-3`}>
                5,0
              </p>
              <Stars value={5} color={C.crimson} className="w-6 h-6" />
              <p className="text-sm mt-3 mb-6" style={{ color: C.muted }}>
                {BIZ.reviews} opiniones publicadas en Google Maps
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block text-[11px] uppercase tracking-[0.2em] underline underline-offset-4 decoration-1 hover:opacity-80 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ color: C.crimsonDeep }}
              >
                Leer la ficha completa →
              </a>
            </Reveal>
            <ul className="space-y-5">
              {RESENAS.map((r, i) => (
                <li key={r.autor}>
                  <Reveal delay={i * 90}>
                    <figure className="relative pl-6" style={{ borderLeft: `2px solid ${C.crimson}` }}>
                      <Stars value={5} color={C.crimson} className="w-3.5 h-3.5" />
                      <blockquote
                        className={`${display.className} text-lg md:text-xl leading-relaxed mt-3 mb-3 italic`}
                      >
                        “{r.texto}”
                      </blockquote>
                      <figcaption className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold">{r.autor}</span>
                        <span className={`${mono.className} text-[9px] uppercase tracking-[0.24em]`} style={{ color: C.muted }}>
                          {r.cuando} · Google
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Agenda ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Head
            dark
            kicker="Agenda tu fecha"
            title={
              <>
                La guatita no espera: <em style={{ color: '#E8A3AC' }}>agenda con tiempo</em>
              </>
            }
            note="Respuesta por WhatsApp"
          />
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <Reveal>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.boneSoft }}>
                Las sesiones se agendan con anticipación — idealmente entre el
                mes siete y ocho de embarazo. Escríbenos por WhatsApp y te
                confirmamos día, hora y todo lo que necesitas llevar.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_SOLID}>
                  WhatsApp {BIZ.phoneDisplay}
                </a>
              </div>
              <dl className="grid grid-cols-2 gap-x-8 border-t pt-5 max-w-md" style={{ borderColor: C.lineDark }}>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.boneSoft }}>
                    Zona
                  </dt>
                  <dd className="text-sm leading-relaxed">{BIZ.city}, {BIZ.region}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.boneSoft }}>
                    Sesiones
                  </dt>
                  <dd className="text-sm leading-relaxed">Con hora agendada, en estudio</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative" style={{ border: `1px solid ${C.lineDark}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full aspect-[4/3] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <figcaption
                  className={`${mono.className} flex items-center justify-between gap-4 px-4 py-2.5 text-[10px] uppercase tracking-[0.22em]`}
                  style={{ borderTop: `1px solid ${C.lineDark}`, color: C.boneSoft }}
                >
                  <span>Estudio en {BIZ.city}</span>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-1 hover:text-white transition-colors shrink-0 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Abrir en Maps →
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.bone }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t"
          style={{ borderColor: C.lineDark }}
        >
          <div>
            <p className={`${display.className} font-semibold text-xl leading-none`}>
              PhotoMemory <em style={{ color: '#E8A3AC' }}>Maternity</em>
            </p>
            <address className="not-italic text-[11px] mt-1.5" style={{ color: C.boneSoft }}>
              Fotos de embarazo · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.16em]" style={{ color: C.boneSoft }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F1EA]">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 pb-6 text-[10px] leading-snug" style={{ color: C.boneSoft }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. El nombre,
            el WhatsApp, las fotos y las reseñas son datos reales de su ficha
            pública de Google Maps; la descripción de la sesión se basa en lo
            que cuentan sus clientas en esas reseñas.
          </p>
        </div>
      </footer>

      <div className="pm-band">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
