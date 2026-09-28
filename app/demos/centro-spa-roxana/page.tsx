import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SERVICIOS, CARTA, CARTA_NOTA, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  crema: '#FBF2E9',
  crema2: '#F5E7DA',
  rosa: '#D6257D',
  baya: '#5A1139',
  tinta: '#33101F',
  muted: 'rgba(51,16,31,0.72)',
  line: 'rgba(51,16,31,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-spa-roxana',
  title: 'Centro Spa Roxana — la casita rosada de Curicó',
  description: 'Centro de estética en Julio Montt 1170, Curicó: depilación, pestañas, masajes, sauna barril y jacuzzi en el jardín. 4,2 estrellas en 149 reseñas.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La casita', href: '#lugar' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'La carta', href: '#carta' },
  { label: 'Agenda', href: '#agenda' },
]

function Flor({ className = 'w-10 h-10', color = C.rosa }: { className?: string; color?: string }) {
  // flor en línea, como la del letrero rosado del centro
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="24" cy="24" r="4" fill={color} stroke="none" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="24" cy="14" rx="4.5" ry="7.5" transform={`rotate(${a} 24 24)`} />
      ))}
    </svg>
  )
}

function Mono({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] flex items-center gap-3`}
      style={{ color: light ? 'rgba(251,242,233,0.8)' : C.baya }}
    >
      <Flor className="w-5 h-5" color={light ? 'rgba(251,242,233,0.8)' : C.rosa} />
      {children}
    </p>
  )
}

const FOTOS = [
  {
    src: `${IMG}/fachada.webp`,
    alt: 'Fachada de la casita rosada de Centro Spa Roxana en Julio Montt 1170, Curicó',
    cap: 'La casita rosada de Julio Montt — así la encuentras desde la calle',
  },
  {
    src: `${IMG}/jardin.webp`,
    alt: 'Deck de madera del jardín con girasoles y plantas del centro',
    cap: 'El jardín donde se espera la hora',
  },
  {
    src: `${IMG}/sauna.webp`,
    alt: 'Sauna barril de madera en el jardín del centro',
    cap: 'El sauna barril, entre plantas',
  },
  {
    src: `${IMG}/jacuzzi.webp`,
    alt: 'Jacuzzi con hidromasaje decorado con pétalos',
    cap: 'Hidromasaje al aire libre',
  },
] as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6257D]'

export default function CentroSpaRoxanaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} text-xl`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(251,242,233,0.96)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.rosa,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Portada editorial ── */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-8 md:pb-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real del centro */}
              <img src={`${IMG}/logo.webp`} alt="Logo de Centro Spa Roxana" className="w-16 h-16 md:w-20 md:h-20 rounded-full" />
            </div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.baya }}>
              {BIZ.rubro} · {BIZ.city}, Maule · {BIZ.instagramHandle}
            </p>
            <h1 className={`${display.className} text-[clamp(2.8rem,9vw,6.5rem)] leading-[1.02] mb-6`}>
              La casita rosada<br />
              <em className="not-italic" style={{ color: C.rosa }}>de Julio Montt.</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-7" style={{ color: C.muted }}>
              Depilación, pestañas, masajes, sauna barril y un jacuzzi entre
              las plantas. Así es {BIZ.name}, en el centro de {BIZ.city}.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-8">
              <span className="flex items-center gap-2.5">
                <Stars value={BIZ.rating} color={C.rosa} className="w-4 h-4" />
                <span className="text-sm font-semibold">{BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google</span>
              </span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] rounded-full transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                style={{ backgroundColor: C.rosa, color: '#FFFFFF' }}
              >
                Pedir hora por WhatsApp <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <figure className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12">
            <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden">
              <Image
                src={`${IMG}/hero.webp`}
                alt="Camilla exterior con cortinas en la terraza de Centro Spa Roxana"
                fill
                priority
                sizes="(min-width: 1200px) 1150px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em] text-center`} style={{ color: C.muted }}>
              La terraza del centro — foto real de su perfil
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Fotorreportaje: la casita por dentro y por fuera ── */}
      <section id="lugar" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-4">
          <Reveal>
            <Mono>El lugar, en fotos reales</Mono>
            <h2 className={`${display.className} text-[clamp(2rem,6vw,4.4rem)] leading-[1.02] mt-5 max-w-3xl`}>
              Un recorrido por la casita.
            </h2>
          </Reveal>
        </div>
        <div>
          {FOTOS.map((f, i) => (
            <Reveal key={f.src} delay={60}>
              <figure className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-10">
                <div className="grid md:grid-cols-12 gap-x-8 gap-y-4 items-end">
                  <div className={`relative overflow-hidden ${i % 2 === 1 ? 'md:col-span-7 md:order-2' : 'md:col-span-7'} aspect-[4/3]`}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                    <span className={`${mono.className} block text-[11px] mb-3 tabular-nums`} style={{ color: C.baya }}>
                      {String(i + 1).padStart(2, '0')} / {String(FOTOS.length).padStart(2, '0')}
                    </span>
                    <figcaption className={`${display.className} text-2xl md:text-[2rem] leading-tight`}>
                      {f.cap}
                    </figcaption>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Servicios: lista editorial, no tarjetas ── */}
      <section id="servicios" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.crema2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="md:col-span-7">
            <Mono>Lo que se hace aquí</Mono>
            <h2 className={`${display.className} text-[clamp(2rem,5.5vw,4rem)] leading-[1.02] mt-5 mb-10 max-w-xl`}>
              Servicios de la casa.
            </h2>
            <ul className="border-t" style={{ borderColor: C.line }}>
              {SERVICIOS.map((s) => (
                <li key={s.t} className="py-5 border-b flex flex-wrap items-baseline gap-x-3 gap-y-1" style={{ borderColor: C.line }}>
                  <span className={`${display.className} text-xl md:text-2xl`}>{s.t}</span>
                  <span aria-hidden="true" className="flex-1 min-w-6 border-b border-dotted" style={{ borderColor: C.muted, transform: 'translateY(-4px)' }} />
                  <span className="text-sm sm:text-right sm:max-w-[45%] sm:shrink-0 basis-full sm:basis-auto" style={{ color: C.muted }}>{s.d}</span>
                </li>
              ))}
            </ul>
            <p className={`${mono.className} mt-6 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
              Agenda y valores por WhatsApp · {BIZ.phoneDisplay}
            </p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 md:sticky md:top-28">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/masaje.webp`}
                    alt="Camilla de masajes rosada en un box del centro"
                    fill
                    sizes="(min-width: 768px) 38vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  La camilla — foto real
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/pestanas.webp`}
                    alt="Trabajo de pestañas realizado en Centro Spa Roxana"
                    fill
                    sizes="(min-width: 768px) 38vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  Pestañas — foto real
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta real de depilación ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.baya, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-10 items-start">
          <Reveal className="md:col-span-6">
            <Mono light>La carta de depilación</Mono>
            <h2 className={`${display.className} text-[clamp(2rem,5.5vw,4rem)] leading-[1.02] mt-5 mb-8`}>
              Precios con nombre y apellido.
            </h2>
            <ul className="border-t" style={{ borderColor: 'rgba(251,242,233,0.35)' }}>
              {CARTA.map((c) => (
                <li key={c.t} className="py-3.5 border-b flex items-baseline gap-3" style={{ borderColor: 'rgba(251,242,233,0.35)' }}>
                  <span className="text-base md:text-lg">{c.t}</span>
                  <span aria-hidden="true" className="flex-1 border-b border-dotted" style={{ borderColor: 'rgba(251,242,233,0.55)', transform: 'translateY(-4px)' }} />
                  <span className={`${mono.className} text-base md:text-lg font-bold tabular-nums`} style={{ color: '#F6C9E0' }}>{c.p}</span>
                </li>
              ))}
            </ul>
            <p className={`${mono.className} mt-5 text-[10px] uppercase tracking-[0.2em] leading-relaxed`} style={{ color: 'rgba(251,242,233,0.7)' }}>
              {CARTA_NOTA}
            </p>
          </Reveal>
          <Reveal className="md:col-span-6" delay={120}>
            <figure className="md:sticky md:top-28">
              <div className="relative aspect-[4/3] overflow-hidden border-2" style={{ borderColor: 'rgba(251,242,233,0.4)' }}>
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta de depilación de Centro Spa Roxana publicada en su perfil, con precios por zona"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(251,242,233,0.7)' }}>
                La carta original — foto real de su perfil
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Agenda ── */}
      <section id="agenda" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="md:col-span-5">
            <Mono>Pedir hora</Mono>
            <h2 className={`${display.className} text-[clamp(2rem,5.5vw,3.8rem)] leading-[1.02] mt-5 mb-6`}>
              Tu hora, por WhatsApp.
            </h2>
            <dl className="border-t mb-8" style={{ borderColor: C.line }}>
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Horario', 'Lun a sáb 10:00 – 19:00'],
                ['Domingo', 'Cerrado'],
                ['Instagram', `${BIZ.instagramHandle} · ${BIZ.followers} seguidores`],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] py-3 border-b" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.22em] pt-1`} style={{ color: C.muted }}>{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] rounded-full transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                style={{ backgroundColor: C.rosa, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp <span aria-hidden="true">→</span>
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] rounded-full border transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0 grayscale-[25%]"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.22em] underline underline-offset-4 ${focusRing} tap-44`}
              style={{ color: C.baya }}
            >
              Abrir en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.tinta, color: 'rgba(251,242,233,0.8)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 gap-5 items-end">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del centro */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-10 w-10 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-base`} style={{ color: C.crema }}>{BIZ.name}</p>
              <p className="text-xs">{BIZ.address}, {BIZ.city}</p>
            </div>
          </div>
          <div className="text-right text-xs leading-relaxed">
            <p>{BIZ.phoneDisplay} · {BIZ.instagramHandle}</p>
            <p style={{ color: 'rgba(251,242,233,0.55)' }}>Demo de Sitiazo — datos verificados en Google Maps</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
