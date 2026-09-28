import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, FOTOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  ink: '#131110',
  soot: '#1C1915',
  gold: '#C9A24B',
  goldInk: '#7A5C14',
  goldSoft: '#D8BC7A',
  cream: '#F4EFE4',
  paper: '#FBF8F1',
  creamMuted: 'rgba(244,239,228,0.66)',
  goldLine: 'rgba(201,162,75,0.45)',
  muted: 'rgba(19,17,16,0.64)',
  line: 'rgba(19,17,16,0.14)',
}

const BTN_GOLD = `${display.className} fvd-btn-gold font-semibold text-base px-8 py-3 transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24B] tap-44`
const BTN_LINE = `${display.className} font-semibold text-base px-8 py-3 border transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24B] tap-44`

export const metadata: Metadata = demoMetadata({
  slug: 'funeraria-vive-dios',
  title: 'Funeraria Vive Dios · Atención 24 horas en Talca',
  description:
    'Funeraria en Talca, abierta las 24 horas. Acompañamiento, traslados y ceremonias. 2 Norte 3135. Llama o escribe cuando lo necesites.',
  image: '/demos/funeraria-vive-dios/flota.webp',
})

const NAV_LINKS = [
  { label: 'El servicio', href: '#servicio' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** Orla doble tipo esquela: línea fina + línea gruesa + rombo. */
function Orla({ tone = 'dark', className = '' }: { tone?: 'dark' | 'gold'; className?: string }) {
  const color = tone === 'gold' ? C.gold : C.ink
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 md:w-24" style={{ backgroundColor: color, opacity: 0.4 }} />
      <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: color, opacity: 0.8 }} />
      <span className="h-px w-16 md:w-24" style={{ backgroundColor: color, opacity: 0.4 }} />
    </div>
  )
}

function Head({
  kicker,
  title,
  note,
}: {
  kicker: string
  title: React.ReactNode
  note?: string
}) {
  return (
    <Reveal>
      <div className="text-center mb-10 md:mb-14">
        <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.34em] mb-4`} style={{ color: C.goldInk }}>
          {kicker}
        </p>
        <h2 className={`${display.className} font-semibold leading-[1.05] tracking-[-0.01em] text-4xl md:text-5xl max-w-2xl mx-auto`} style={{ color: C.ink }}>
          {title}
        </h2>
        <Orla className="mt-5" />
        {note && (
          <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.22em] mt-4`} style={{ color: C.muted }}>
            {note}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function FunerariaViveDiosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .fvd-btn-gold { background-color: #C9A24B; color: #131110 }
        .fvd-btn-gold:hover { background-color: #D8BC7A }
        .fvd-band { display: flex; justify-content: center; padding: 0 5rem 1.25rem 1.25rem; background-color: #131110 }
        .fvd-band > div { position: static; max-width: 100%; background-color: rgba(10,9,7,0.94) }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <Image
              src={`${IMG}/logo.webp`}
              alt="Logo de Funeraria Vive Dios: paloma dorada con rama de olivo"
              width={34}
              height={34}
              className="rounded-full object-cover ring-1"
              style={{ ['--tw-ring-color' as string]: C.gold }}
            />
            <span className="leading-tight">
              <span className="block text-[15px] md:text-lg">Funeraria Vive Dios</span>
              <span className={`${mono.className} block text-[8px] md:text-[9px] uppercase tracking-[0.34em] opacity-70`}>
                servicios funerarios
              </span>
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold`}
        ctaLabel="24 horas"
        theme={{
          over: 'dark',
          bar: 'rgba(19,17,16,0.9)',
          ink: C.cream,
          line: 'rgba(244,239,228,0.16)',
          btnBg: C.gold,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero esquela ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20 text-center">
          <Reveal>
            <Image
              src={`${IMG}/logo.webp`}
              alt="Emblema de Funeraria Vive Dios: paloma con rama de olivo dentro de una laureola dorada"
              width={116}
              height={116}
              priority
              className="mx-auto mb-8 rounded-full object-cover"
              style={{ boxShadow: `0 0 0 1px ${C.gold}, 0 0 0 8px rgba(201,162,75,0.14)` }}
            />
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.38em] mb-6`} style={{ color: C.goldSoft }}>
              Funeraria en {BIZ.city} · {BIZ.hours.toLowerCase()}
            </p>
            <h1 className={`${display.className} font-semibold leading-[1.06] tracking-[-0.01em] text-[clamp(2.4rem,8.4vw,4.4rem)] mb-6`}>
              La despedida, <em style={{ color: C.goldSoft }}>acompañada</em>
              <br className="hidden md:block" /> a toda hora
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: C.creamMuted }}>
              De día o de madrugada, estamos en {BIZ.address}. Acompañamos y
              ordenamos todo para que tu familia solo tenga que estar presente.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_GOLD}>
                Escribir por WhatsApp
              </a>
              <a href={TEL_LINK} className={BTN_LINE} style={{ borderColor: C.goldLine, color: C.cream }}>
                Llamar {BIZ.phoneDisplay}
              </a>
            </div>
            <Orla tone="gold" />
          </Reveal>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(201,162,75,0.18)' }}>
          <ul className="max-w-4xl mx-auto px-5 md:px-8 py-5 grid grid-cols-3 gap-3 text-center">
            {[
              ['Atención inmediata', 'respondemos a cualquier hora'],
              ['Traslados', 'flota propia de carrozas'],
              ['Ceremonias', 'capilla, iglesia o cementerio'],
            ].map(([t, s]) => (
              <li key={t}>
                <p className={`${display.className} font-semibold text-base md:text-lg`} style={{ color: C.goldSoft }}>{t}</p>
                <p className="text-[11px] md:text-xs mt-1" style={{ color: C.creamMuted }}>{s}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El servicio ── */}
      <section id="servicio" className="scroll-mt-20 max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Head
          kicker="Así acompañamos"
          title={
            <>
              Ordenamos todo, <em style={{ color: '#8F6E23' }}>usted despide</em>
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-px max-w-4xl mx-auto" style={{ backgroundColor: C.line, border: `1px solid ${C.line}` }}>
          {[
            ['I', 'Nos avisas', 'A cualquier hora, por WhatsApp o llamada. Coordinamos el traslado y el lugar de la velación.'],
            ['II', 'Nosotros ordenamos', 'Carroza, sala, ceremonia y los detalles del servicio, según lo que decida la familia.'],
            ['III', 'La familia despide', 'Con el tiempo y el espacio que se necesita, en capilla, iglesia o cementerio.'],
          ].map(([num, t, d]) => (
            <div key={num} className="p-6 md:p-8" style={{ backgroundColor: C.paper }}>
              <p className={`${display.className} font-semibold text-3xl mb-3`} style={{ color: C.goldInk }}>{num}</p>
              <h3 className={`${display.className} font-semibold text-xl mb-2`}>{t}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Galería ── */}
      <section id="galeria" className="scroll-mt-20" style={{ backgroundColor: C.paper, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Head
            kicker="Nuestro trabajo"
            title={
              <>
                Carrozas propias, <em style={{ color: '#8F6E23' }}>servicio donde haga falta</em>
              </>
            }
            note="Fotos reales de su página de Facebook"
          />
          <Reveal>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {FOTOS.map((f, i) => (
                <li key={f.src} className={i === 0 ? 'col-span-2' : ''}>
                  <figure className="h-full" style={{ backgroundColor: C.cream, border: `1px solid ${C.line}` }}>
                    <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[2/1.05]' : 'aspect-[4/3]'}`}>
                      <Image
                        src={`${IMG}/${f.src}`}
                        alt={f.alt}
                        fill
                        sizes={i === 0 ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, 50vw'}
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.24em] px-3 py-2`} style={{ color: C.muted }}>
                      {f.cap}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 24 horas + calificación ── */}
      <section className="text-cream" style={{ backgroundColor: C.soot, color: C.cream }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.34em] mb-4`} style={{ color: C.goldSoft }}>
              No importa la hora
            </p>
            <h2 className={`${display.className} font-semibold leading-[1.05] text-4xl md:text-6xl mb-4`}>
              De madrugada también <em style={{ color: C.goldSoft }}>respondemos</em>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto mb-8" style={{ color: C.creamMuted }}>
              La ficha del negocio lo dice claro: abierto las 24 horas, todos los días.
            </p>
            <p className={`${display.className} font-semibold text-3xl md:text-5xl mb-8 tracking-wide`}>
              <a href={TEL_LINK} className="underline decoration-1 underline-offset-8 hover:opacity-80 tap-44" style={{ color: C.goldSoft }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_GOLD}>
                WhatsApp ahora
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24B]"
              style={{ border: `1px solid ${C.goldLine}` }}
            >
              <Stars value={5} color={C.goldSoft} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[11px] tracking-[0.08em]`}>
                5,0 · {BIZ.reviews} familias calificaron en Google
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <Head
              kicker="Dónde estamos"
              title={
                <>
                  En {BIZ.city}, <em style={{ color: '#8F6E23' }}>sobre 2 Norte</em>
                </>
              }
            />
            <p className="text-base md:text-lg leading-relaxed mb-8 -mt-4" style={{ color: C.muted }}>
              Estamos en {BIZ.address}, a pasos del centro. Puedes acercarte,
              llamar o escribir: respondemos a cualquier hora.
            </p>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t pt-6" style={{ borderColor: C.line }}>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.muted }}>Dirección</dt>
                <dd className="text-sm leading-relaxed">{BIZ.address}<br />{BIZ.city}, {BIZ.region}</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.muted }}>Horario</dt>
                <dd className="text-sm leading-relaxed">{BIZ.hours}<br />todos los días</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.muted }}>Teléfono</dt>
                <dd className="text-sm"><a href={TEL_LINK} className="underline underline-offset-2 decoration-1 tap-44">{BIZ.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.muted }}>Facebook</dt>
                <dd className="text-sm"><a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-1 tap-44">Funeraria ViveDios</a></dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={140}>
            <figure style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                src={MAPS_EMBED}
                className="w-full aspect-[4/3] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <figcaption className={`${mono.className} flex items-center justify-between gap-4 px-4 py-2.5 text-[10px] uppercase tracking-[0.22em]`} style={{ borderTop: `1px solid ${C.line}`, color: C.muted }}>
                <span>{BIZ.address}</span>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity shrink-0 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2">
                  Abrir en Maps →
                </a>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t" style={{ borderColor: 'rgba(201,162,75,0.18)' }}>
          <div>
            <p className={`${display.className} font-semibold text-xl leading-none`}>
              Funeraria <em style={{ color: C.goldSoft }}>Vive Dios</em>
            </p>
            <address className="not-italic text-[11px] mt-1.5" style={{ color: C.creamMuted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.hours.toLowerCase()}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.16em]" style={{ color: C.creamMuted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24B]">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(201,162,75,0.18)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 pb-6 text-[10px] leading-snug" style={{ color: C.creamMuted }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. El nombre,
            la dirección, el teléfono, el horario y las fotos son datos reales
            de su ficha pública de Google Maps y su página de Facebook.
          </p>
        </div>
      </footer>

      <div className="fvd-band">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
