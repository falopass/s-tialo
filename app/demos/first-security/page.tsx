import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, SITE_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

// Navy + naranja-rojo del logo real de First Security ("VIVE TRANQUILO"),
// sobre un motivo de centro de monitoreo: feeds con esquinas de cámara.
const C = {
  night: '#070C1D',
  navy: '#0C1530',
  navySoft: '#13204A',
  ink: '#E8ECF5',
  muted: 'rgba(232,236,245,0.68)',
  faint: 'rgba(232,236,245,0.45)',
  line: 'rgba(232,236,245,0.16)',
  orange: '#F04E23',
  orangeHi: '#FF6B3D',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'first-security',
  title: 'First Security — Seguridad privada en Talca',
  description:
    'Seguridad integral, control de acceso, cerco eléctrico y monitoreo remoto 24/7 para empresas en Talca. Sucursal en Dos Norte 511; parte de First Security SpA, 30 años en Chile.',
  image: '/demos/first-security/guardia-hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Monitoreo', href: '#monitoreo' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
]

const FEEDS = [
  {
    cam: 'CAM 01',
    src: 'guardias.webp',
    alt: 'Dos guardias de First Security con chaleco naranja y casco en terreno',
    name: 'Seguridad Integral',
    desc: 'Guardias en terreno para empresas, faenas y eventos. Personal capacitado y supervisado por la casa matriz.',
  },
  {
    cam: 'CAM 02',
    src: 'monitoreo.webp',
    alt: 'Centro de monitoreo de First Security con operadores frente a murales de cámaras',
    name: 'Monitoreo Remoto 24/7',
    desc: 'Centro de monitoreo propio con operadores en turno continuo. Alarmas, cámaras y respuesta coordinada.',
  },
  {
    cam: 'CAM 03',
    src: 'control-acceso.webp',
    alt: 'Torniquete y terminales biométricos de control de acceso instalados por First Security',
    name: 'Control de Acceso',
    desc: 'Torniquetes, biometría y credenciales para ordenar quién entra y quién sale de tu instalación.',
  },
  {
    cam: 'CAM 04',
    src: 'cerco.webp',
    alt: 'Cerco eléctrico perimetral con letrero disuasivo de First Security',
    name: 'Seguridad Perimetral',
    desc: 'Cerco eléctrico y protección de perímetro: la primera barrera entre tu empresa y el intruso.',
  },
]

const CLIENTES = ['COPEC', 'CMPC', 'LIPIGAS', 'ABASTIBLE']

const RESENAS = [
  {
    quote: 'Muy buena empresa de seguridad!!',
    name: 'Mauricio Riffo',
    meta: 'Local Guide · 5 estrellas',
  },
  {
    quote: 'Si se ve q una buena empresa',
    name: 'Osvaldo Vilches',
    meta: 'Local Guide · 4 estrellas',
  },
]

function Frame({ children, live = true }: { children: React.ReactNode; live?: boolean }) {
  return (
    <div className="relative" style={{ boxShadow: `inset 0 0 0 1px ${C.line}` }}>
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: C.orange }} aria-hidden="true" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: C.orange }} aria-hidden="true" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: C.orange }} aria-hidden="true" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: C.orange }} aria-hidden="true" />
      {live && (
        <span className={`${mono.className} absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em]`} style={{ color: '#FFFFFF', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.orange }} aria-hidden="true" />
          En línea
        </span>
      )}
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.night, color: C.ink }}>
      <BlitzNav
        name={
          // eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/
          <img src={`${IMG}/logo-blanco.png`} alt="First Security" className="h-6 md:h-7 w-auto" />
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.night, ink: '#FFFFFF', line: C.line, btnBg: C.orange, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: sala de control ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.navy }}>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(232,236,245,0.9) 79px, rgba(232,236,245,0.9) 80px)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4 flex items-center gap-2`} style={{ color: C.orangeHi }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.orange }} aria-hidden="true" />
                Seguridad privada · Talca
              </p>
              <h1 className={`${display.className} uppercase leading-[0.96] text-[clamp(2.6rem,7.5vw,4.6rem)] mb-5`} style={{ color: '#FFFFFF' }}>
                Vive<br />
                <span style={{ color: C.orange }}>tranquilo.</span>
              </h1>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
                Seguridad integral, control de acceso y monitoreo remoto 24/7
                para empresas. Sucursal en {BIZ.address}, {BIZ.city} — parte de
                una empresa con {BIZ.years} años protegiendo Chile.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
                >
                  Llamar a la oficina
                </a>
                <a
                  href="#servicios"
                  className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ color: '#FFFFFF', boxShadow: `inset 0 0 0 2px rgba(255,255,255,0.4)` }}
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Frame>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/guardia-hero.webp`}
                    alt="Guardia de First Security junto a una cámara de vigilancia"
                    fill
                    sizes="(max-width: 768px) 100vw, 44vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className={`${mono.className} flex items-center justify-between text-[10px] uppercase tracking-[0.16em] px-3 py-2`} style={{ color: C.faint, backgroundColor: 'rgba(7,12,29,0.85)' }}>
                  <span>Feed · Sucursal Talca</span>
                  <span>REC</span>
                </p>
              </Frame>
            </Reveal>
          </div>
        </div>
        <div className="relative border-t" style={{ borderColor: C.line }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: C.faint }}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline-offset-4 hover:underline" style={{ color: C.orangeHi }}>
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </a>
            <span aria-hidden="true">/</span>
            <span>{BIZ.address}, {BIZ.city}</span>
            <span aria-hidden="true">/</span>
            <span>{BIZ.years} años en Chile</span>
            <span aria-hidden="true">/</span>
            <span>SOC 24/7</span>
          </div>
        </div>
      </section>

      {/* ── Cuadrante de servicios ── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.orangeHi }}>
                Cuatro frentes, un solo proveedor
              </p>
              <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.4rem)] leading-[0.98]`} style={{ color: '#FFFFFF' }}>
                Todo tu perímetro,<br />en la misma pantalla
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Los cuatro servicios que First Security opera desde su casa
              matriz: personas en terreno, tecnología y monitoreo continuo.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {FEEDS.map((f, i) => (
            <Reveal key={f.cam} delay={i * 70}>
              <article style={{ backgroundColor: C.navySoft }}>
                <Frame>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 44vw"
                      className="object-cover"
                    />
                  </div>
                </Frame>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.orangeHi }}>{f.cam}</span>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.faint }}>CH · {BIZ.city}</span>
                  </div>
                  <h3 className={`${display.className} uppercase text-xl md:text-2xl mb-1.5`} style={{ color: '#FFFFFF' }}>{f.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El SOC ── */}
      <section id="monitoreo" className="relative overflow-hidden border-y" style={{ backgroundColor: C.navySoft, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.orangeHi }}>
              Centro de monitoreo
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] mb-5`} style={{ color: '#FFFFFF' }}>
              La sala que nunca<br />cierra los ojos
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
              El monitoreo remoto de First Security funciona en turnos
              continuos: cada alarma se atiende en la sala de operaciones
              y se coordina la respuesta con guardia en terreno.
            </p>
            <ul className="space-y-3 text-sm" style={{ color: C.muted }}>
              {[
                'Operadores de turno mirando tus cámaras y alarmas',
                'Monitoreo remoto de video y cerco eléctrico',
                'Respuesta coordinada con el equipo en terreno',
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="shrink-0 w-1.5 h-1.5 mt-1.5" style={{ backgroundColor: C.orange }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={80}>
              <Frame>
                <div className="relative aspect-[3/4] md:aspect-[4/5]">
                  <Image src={`${IMG}/monitoreo.webp`} alt="Operadores del centro de monitoreo de First Security frente al mural de cámaras" fill sizes="(max-width: 768px) 50vw, 24vw" className="object-cover" />
                </div>
              </Frame>
            </Reveal>
            <Reveal delay={160} className="pt-8">
              <Frame>
                <div className="relative aspect-[3/4] md:aspect-[4/5]">
                  <Image src={`${IMG}/soc.webp`} alt="Sala de operaciones de monitoreo CCTV de First Security" fill sizes="(max-width: 768px) 50vw, 24vw" className="object-cover" />
                </div>
              </Frame>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Clientes + reseñas ── */}
      <section id="clientes" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3 text-center`} style={{ color: C.orangeHi }}>
            Clientes que publican en firstsecurity.cl
          </p>
          <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] text-center mb-9`} style={{ color: '#FFFFFF' }}>
            Confían los grandes
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-y" style={{ borderColor: C.line, backgroundColor: C.line }}>
            {CLIENTES.map((cl) => (
              <div key={cl} className="py-8 md:py-10 flex items-center justify-center" style={{ backgroundColor: C.night }}>
                <span className={`${display.className} uppercase text-xl md:text-2xl tracking-wide`} style={{ color: C.faint }}>{cl}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="grid md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-8 mt-10 items-start">
          <Reveal>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block tap-44 group">
              <p className={`${display.className} text-6xl md:text-7xl leading-none`} style={{ color: C.orange }}>{BIZ.rating}</p>
              <Stars value={4.4} color={C.orange} className="w-4 h-4 mt-2" />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-2 underline-offset-4 group-hover:underline`} style={{ color: C.faint }}>
                {BIZ.reviews} reseñas · Google Maps
              </p>
            </a>
          </Reveal>
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure className="h-full p-5 border-l-2" style={{ borderColor: C.orange, backgroundColor: C.navySoft }}>
                <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                  “{r.quote}”
                </blockquote>
                <figcaption>
                  <p className="text-sm font-semibold" style={{ color: '#FFFFFF' }}>{r.name}</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-0.5`} style={{ color: C.faint }}>{r.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="border-t" style={{ backgroundColor: C.navy, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1fr_1.15fr] gap-10">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.orangeHi }}>
              Oficina Talca
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] mb-6`} style={{ color: '#FFFFFF' }}>
              Dos Norte 511,<br />Talca
            </h2>
            <dl className="space-y-4 text-sm">
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.faint }}>Dirección</dt>
                <dd className="font-medium" style={{ color: C.ink }}>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.faint }}>Teléfono</dt>
                <dd>
                  <a href={CALL_LINK} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.orangeHi }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.faint }}>Casa matriz</dt>
                <dd style={{ color: C.ink }}>
                  {BIZ.legal} · Viña del Mar ·{' '}
                  <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.orangeHi }}>
                    {BIZ.site}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.faint }}>Monitoreo</dt>
                <dd style={{ color: C.ink }}>Centro de monitoreo 24/7 · call center {BIZ.callCenter}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={CALL_LINK}
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
              >
                Llamar ahora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ color: '#FFFFFF', boxShadow: `inset 0 0 0 2px rgba(255,255,255,0.4)` }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[320px] md:min-h-[420px]">
              <LazyMap src={MAPS_EMBED} title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <Image
          src={`${IMG}/camaras.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo-blanco.png`} alt="" className="h-9 md:h-11 w-auto mx-auto mb-6" aria-hidden="true" />
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[0.98] mb-6`} style={{ color: '#FFFFFF' }}>
              Tu empresa vigilada,<br />
              <span style={{ color: C.orange }}>las 24 horas</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: C.muted }}>
              Llama a la oficina de Talca y solicita una visita técnica
              para evaluar la seguridad de tu empresa.
            </p>
            <a
              href={CALL_LINK}
              className={`${display.className} uppercase tracking-[0.04em] inline-block text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#04060F', color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.faint }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: C.faint }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Google Maps
            </a>
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              {BIZ.site}
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-4 text-[11px] leading-snug" style={{ color: C.faint }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.orangeHi }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} {BIZ.city}. Nombre, dirección, teléfono, fotos,
            logo y reseñas son datos públicos de la empresa.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.orangeHi }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.orange} fg="#FFFFFF" />
    </div>
  )
}
