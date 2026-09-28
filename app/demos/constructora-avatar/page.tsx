import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, OBRAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/* Paleta tomada de la marca real: la A en gradiente violeta y magenta del logo. */
const C = {
  bg: '#13091F',
  panel: '#1B0F2B',
  deep: '#0C0515',
  ink: '#F4EDFB',
  soft: '#C9B4DE',
  muted: '#8F7BA8',
  acc: '#C77DFF',
  line: 'rgba(244,237,251,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'constructora-avatar',
  title: 'Constructora Avatar — Edificios de departamentos en Concepción',
  description:
    'Constructora Avatar ejecuta las torres de departamentos de Vellatrix e Inparco en Concepción y Chiguayante desde 2007. Gral. Novoa 815.',
  image: '/demos/constructora-avatar/heras-torre.webp',
})

const NAV_LINKS = [
  { label: 'Obras', href: '#obras' },
  { label: 'Terminaciones', href: '#terminaciones' },
  { label: 'El grupo', href: '#grupo' },
  { label: 'Contacto', href: '#contacto' },
]

/* Barras que se apilan como pisos: la torre abstracta del hero. */
const FLOOR_W = [150, 96, 178, 118, 164, 84, 190, 132, 156, 104, 172, 88, 144, 68]

function FloorStack() {
  return (
    <div
      aria-hidden="true"
      className="absolute -left-3 md:-left-10 bottom-0 flex flex-col-reverse gap-[7px] pointer-events-none"
    >
      {FLOOR_W.map((w, i) => (
        <div
          key={i}
          className="av-floor h-[9px] md:h-[11px]"
          style={{
            width: w,
            backgroundColor: i % 3 === 0 ? C.acc : C.soft,
            opacity: i % 3 === 0 ? 0.5 : 0.16,
            animationDelay: `${120 + i * 70}ms`,
          }}
        />
      ))}
    </div>
  )
}

export default function ConstructoraAvatarPage() {
  const wa = whatsappLink('contacto')

  return (
    <main className={body.className} style={{ backgroundColor: C.bg, color: C.ink }}>
      <style>{`
        @keyframes av-floor-in { from { transform: translateY(18px); opacity: 0 } to { transform: none } }
        .av-floor { animation: av-floor-in 0.7s cubic-bezier(0.25,0.1,0.25,1) both }
        @media (prefers-reduced-motion: reduce) { .av-floor { animation: none } }
      `}</style>

      <BlitzNav
        name="Avatar"
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        logoSrc={`${IMG}/logo-a.webp`}
        theme={{ over: 'dark', bar: C.bg, ink: C.ink, line: C.line, btnBg: C.acc, btnInk: C.bg }}
        fontClass={display.className}
      />

      {/* ── Hero: titular + torre real + pisos que se apilan ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8 items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p
                  className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.32em] mb-6`}
                  style={{ color: C.acc }}
                >
                  Constructora · Concepción · desde {BIZ.since}
                </p>
                <h1
                  className={`${display.className} text-4xl md:text-7xl uppercase leading-[1.02] tracking-tight`}
                >
                  Las torres de Concepción
                </h1>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
                  Constructora Avatar ejecuta los departamentos nuevos de Vellatrix e Inparco desde 2007.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={CALL_LINK}
                    className="tap-44 inline-flex h-12 items-center px-7 text-sm font-bold uppercase tracking-wider active:scale-95 transition-transform"
                    style={{ backgroundColor: C.acc, color: C.bg }}
                  >
                    Llamar
                  </a>
                  <a
                    href="#obras"
                    className="tap-44 inline-flex h-12 items-center px-7 text-sm font-semibold uppercase tracking-wider border active:scale-95 transition-transform"
                    style={{ borderColor: C.line, color: C.ink }}
                  >
                    Ver obras
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={150}>
                <div className="relative">
                  <FloorStack />
                  <div className="relative border" style={{ borderColor: C.line }}>
                    <Image
                      src={`${IMG}/heras-torre.webp`}
                      alt="Edificio Las Heras 1565 visto desde la calle, torre de departamentos construida por Avatar"
                      width={900}
                      height={1200}
                      className="w-full h-auto object-cover max-h-[440px] md:max-h-none object-[50%_30%]"
                      priority
                    />
                    <p
                      className={`${mono.className} absolute bottom-0 inset-x-0 px-4 py-3 text-[10px] uppercase tracking-[0.22em]`}
                      style={{ color: C.ink, backgroundColor: 'rgba(12,5,21,0.72)' }}
                    >
                      Edificio Las Heras 1565 · entregado
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ficha técnica ── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              ['Actividades', `desde ${BIZ.since}`],
              ['Mandantes', 'Vellatrix · Inparco'],
              ['Google Maps', `${BIZ.ratingDisplay} · 1 reseña`],
              ['Base', BIZ.address],
            ].map(([k, v]) => (
              <div key={k}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em]`} style={{ color: C.muted }}>
                  {k}
                </p>
                <p className="mt-2 text-sm md:text-base font-semibold" style={{ color: C.ink }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registro de obras ── */}
      <section id="obras" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.32em] mb-4`}
              style={{ color: C.acc }}
            >
              Registro de obras
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.05] max-w-3xl`}>
              Torres reales sobre Concepción y Chiguayante
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-8 border p-0 md:p-0 overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.panel }}>
              <div className="relative md:col-span-7 min-h-[240px]">
                <Image
                  src={`${IMG}/heras-frente.webp`}
                  alt="Fachada y acceso del Edificio Las Heras 1565, obra de Constructora Avatar"
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.acc }}>
                  Obra {OBRAS[0].id} · {OBRAS[0].status}
                </p>
                <h3 className={`${display.className} mt-3 text-2xl md:text-3xl uppercase`}>{OBRAS[0].name}</h3>
                <p className={`${mono.className} mt-2 text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {OBRAS[0].place}
                </p>
                <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: C.soft }}>
                  {OBRAS[0].note}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-6">
            {OBRAS.slice(1).map((o, i) => (
              <Reveal key={o.id} delay={i * 80}>
                <div
                  className="grid gap-1 md:grid-cols-12 md:gap-8 md:items-center py-6 border-b"
                  style={{ borderColor: C.line }}
                >
                  <p className={`${mono.className} md:col-span-1 text-sm`} style={{ color: C.acc }}>
                    {o.id}
                  </p>
                  <div className="md:col-span-4">
                    <h3 className={`${display.className} text-lg md:text-xl uppercase leading-tight`}>{o.name}</h3>
                  </div>
                  <p className={`${mono.className} md:col-span-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {o.place}
                  </p>
                  <p className="md:col-span-3 text-sm leading-snug" style={{ color: C.soft }}>
                    {o.note}
                  </p>
                  <p className={`${mono.className} md:col-span-1 text-[10px] uppercase tracking-[0.2em] md:text-right`} style={{ color: o.status === 'En ejecución' ? C.acc : C.muted }}>
                    {o.status}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── En obra: registro de faena real ── */}
      <section className="relative overflow-hidden">
        <div className="relative">
          <Image
            src={`${IMG}/obra.webp`}
            alt="Excavación y entibado en una faena real de Constructora Avatar"
            width={992}
            height={447}
            className="w-full h-[320px] md:h-[460px] object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(12,5,21,0.55)' }} />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 w-full">
              <Reveal>
                <h2 className={`${display.className} text-3xl md:text-6xl uppercase leading-[1.02]`}>
                  Primero el suelo.
                </h2>
                <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.soft }}>
                  Registro de faena real · movimiento de tierras y entibado
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Terminaciones: interiores reales de Vivo Rengo ── */}
      <section id="terminaciones" className="scroll-mt-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.05] max-w-3xl`}>
              Así se vive en un edificio Avatar
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
              Interiores reales del Edificio Vivo Rengo, en Rengo 1170.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-8 items-start">
            <Reveal className="md:col-span-7">
              <div className="border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/rengo-pano.webp`}
                  alt="Living con vista panorámica en el Edificio Vivo Rengo"
                  width={720}
                  height={390}
                  className="w-full h-auto"
                />
                <p className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  Vivo Rengo · living y comedor
                </p>
              </div>
            </Reveal>
            <div className="md:col-span-5 grid gap-5">
              <Reveal delay={120}>
                <div className="border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/rengo-living.webp`}
                    alt="Sala de estar entregada en el Edificio Vivo Rengo"
                    width={720}
                    height={390}
                    className="w-full h-auto"
                  />
                  <p className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    Vivo Rengo · estar
                  </p>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className="border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/rengo-dorm.webp`}
                    alt="Dormitorio principal en el Edificio Vivo Rengo"
                    width={720}
                    height={390}
                    className="w-full h-auto"
                  />
                  <p className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    Vivo Rengo · dormitorio
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El grupo ── */}
      <section id="grupo" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.05] max-w-3xl`}>
              La constructora detrás de Vellatrix e Inparco
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
              Avatar es el brazo ejecutor del grupo inmobiliario: cada edificio de departamentos que venden estas
              inmobiliarias lo levanta nuestro equipo.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-8 items-center">
            <div className="md:col-span-8 grid grid-cols-3 gap-5 items-center">
              {[
                { src: 'logo-vellatrix.webp', alt: 'Logo de Inmobiliaria Vellatrix' },
                { src: 'logo.webp', alt: 'Logo de Constructora Avatar' },
                { src: 'logo-inparco.webp', alt: 'Logo de Inmobiliaria Inparco' },
              ].map((l) => (
                <Reveal key={l.src}>
                  <div className="border px-4 py-6 flex items-center justify-center" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- logos ya optimizados en public/ */}
                    <img src={`${IMG}/${l.src}`} alt={l.alt} className="h-9 md:h-12 w-auto" />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={140} className="md:col-span-4">
              <div
                className="border p-6"
                style={{ borderColor: C.line, backgroundColor: C.deep }}
              >
                <p className={`${display.className} text-4xl`} style={{ color: C.acc }}>
                  {BIZ.ratingDisplay}
                </p>
                <p className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.muted }}>
                  en Google · {BIZ.reviews} reseña
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm underline underline-offset-4 tap-44"
                  style={{ color: C.soft }}
                >
                  Ver ficha en Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-24" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.05]`}>
                  La oficina está en {BIZ.address}
                </h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
                  Oficina en pleno centro de Concepción.
                </p>
                <a
                  href={CALL_LINK}
                  className={`${mono.className} mt-8 inline-block text-2xl md:text-3xl font-semibold tap-44`}
                  style={{ color: C.acc }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <div className="mt-8">
                  <a
                    href={CALL_LINK}
                    className="tap-44 inline-flex h-12 items-center px-7 text-sm font-bold uppercase tracking-wider active:scale-95 transition-transform"
                    style={{ backgroundColor: C.acc, color: C.bg }}
                  >
                    Llamar
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140} className="md:col-span-7">
              <div className="border" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  className="w-full aspect-[4/3]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} className="h-8 w-auto" />
            <div>
              <p className="text-sm font-semibold">{BIZ.name}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:text-right" style={{ color: C.muted }}>
            Sitio de muestra preparado por {SITE.name} para {BIZ.short}. Datos y fotos reales de su ficha de
            Google y de los proyectos del grupo.{' '}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.soft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.acc} fg={C.bg} />
    </main>
  )
}
