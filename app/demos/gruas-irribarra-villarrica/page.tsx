import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, OPINIONES, WA_LINK, WA_GRUA, WA_TALLER, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Camino del sur: asfalto, rojo de la plataforma de la grúa, amarillo de
// la línea de calzada y el blanco de la cabina.
const C = {
  asfalto: '#1C1F22',
  asfalto2: '#2A2E32',
  rojo: '#C7332B',
  amarillo: '#F2C230',
  cabina: '#F4F2EE',
  gris: '#5B6168',
  line: 'rgba(28,31,34,0.14)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'gruas-irribarra-villarrica',
  title: 'Grúas Irribarra · Grúa y mecánico automotriz en Villarrica',
  description:
    'Servicio de grúa y taller mecánico en Sector Putúe Alto, Villarrica. Todos los días de 9:00 a 19:00. 4,8 en Google. Escríbenos por WhatsApp.',
  image: '/demos/gruas-irribarra-villarrica/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Horario', href: '#horario' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/** Línea segmentada de calzada. Cada tramo se dibuja con scaleX, en cadena. */
function Calzada({ tramos = 7, delay = 0, className = '' }: { tramos?: number; delay?: number; className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`} aria-hidden="true">
      {Array.from({ length: tramos }).map((_, i) => (
        <span
          key={i}
          className="gi-tramo block h-[5px] flex-1 rounded-[1px]"
          style={{ backgroundColor: C.amarillo, animationDelay: `${delay + i * 0.09}s` }}
        />
      ))}
    </div>
  )
}

function Rotulo({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className={`${display.className} text-sm font-bold uppercase tracking-[0.22em]`} style={{ color }}>
      {children}
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'rojo' | 'amarillo' | 'lineClaro' | 'lineOscuro'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'rojo'
      ? { backgroundColor: C.rojo, color: '#FFFFFF' }
      : tone === 'amarillo'
        ? { backgroundColor: C.amarillo, color: C.asfalto }
        : tone === 'lineClaro'
          ? { border: '2px solid rgba(244,242,238,0.6)', color: C.cabina }
          : { border: `2px solid ${C.asfalto}`, color: C.asfalto }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} gi-btn inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-bold uppercase tracking-[0.08em] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function GruasIrribarraPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.cabina, color: C.asfalto }}
    >
      <style>{`
        /* La grúa llega: la foto del hero entra desde la derecha y frena. */
        @keyframes gi-llega {
          from { transform: translateX(18%) scale(1.06); opacity: 0 }
          60% { opacity: 1 }
          to { transform: translateX(0) scale(1); opacity: 1 }
        }
        .gi-llega { animation: gi-llega 1.4s cubic-bezier(0.16,0.84,0.3,1) 0.1s both }

        /* La calzada se pinta tramo por tramo, de izquierda a derecha. */
        @keyframes gi-tramo { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .gi-tramo { transform-origin: left center; animation: gi-tramo 0.35s ease-out both }

        @keyframes gi-sube { from { opacity: 0; transform: translateY(22px) } to { opacity: 1; transform: none } }
        .gi-sube { animation: gi-sube 0.8s cubic-bezier(0.2,0.7,0.2,1) both }

        /* Baliza: el punto del horario parpadea como luz de grúa. */
        @keyframes gi-baliza { 0%, 100% { opacity: 1 } 50% { opacity: 0.25 } }
        .gi-baliza { animation: gi-baliza 1.6s ease-in-out infinite }

        /* Los paneles de servicio entran desde su lado, al hacer scroll. */
        @keyframes gi-izq { from { transform: translateX(-40px); opacity: 0 } to { transform: none; opacity: 1 } }
        @keyframes gi-der { from { transform: translateX(40px); opacity: 0 } to { transform: none; opacity: 1 } }
        @supports (animation-timeline: view()) {
          .gi-izq { animation: gi-izq linear both; animation-timeline: view(); animation-range: entry 0% entry 55% }
          .gi-der { animation: gi-der linear both; animation-timeline: view(); animation-range: entry 0% entry 55% }
        }

        .gi-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .gi-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .gi-btn:active { transform: scale(0.97) }
        .gi-btn:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .gi-llega, .gi-tramo, .gi-sube, .gi-baliza, .gi-izq, .gi-der { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(28,31,34,0.95)',
          ink: C.cabina,
          line: 'rgba(244,242,238,0.14)',
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: la grúa llega ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.asfalto }}
      >
        <div className="absolute inset-0 gi-llega">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Grúa plana de Grúas Irribarra trasladando un auto en Villarrica"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(28,31,34,0.55) 0%, rgba(28,31,34,0.15) 38%, rgba(28,31,34,0.92) 82%, rgba(28,31,34,1) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-10 md:pb-14">
          <p
            className={`${display.className} gi-sube inline-flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm font-bold uppercase tracking-[0.16em]`}
            style={{ backgroundColor: 'rgba(28,31,34,0.7)', color: C.amarillo, animationDelay: '0.6s' }}
          >
            <span className="gi-baliza block h-2 w-2 rounded-full" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
            Villarrica · Todos los días
          </p>
          <h1
            className={`${display.className} gi-sube mt-5 font-extrabold uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(3.2rem,13vw,7.5rem)]`}
            style={{ color: C.cabina, animationDelay: '0.75s' }}
          >
            Grúa y
            <br />
            <span style={{ color: C.amarillo }}>mecánico</span>
            <br />
            en camino.
          </h1>
          <Calzada className="mt-6 max-w-md" delay={1.05} />
          <p
            className="gi-sube mt-6 max-w-md text-lg leading-relaxed"
            style={{ color: 'rgba(244,242,238,0.88)', animationDelay: '1.3s' }}
          >
            Si el auto quedó en panne, lo vamos a buscar. Si necesita taller, lo
            revisamos en nuestro galpón de Putúe Alto.
          </p>
          <div className="gi-sube mt-8 flex flex-wrap gap-3" style={{ animationDelay: '1.45s' }}>
            <Btn href={WA_GRUA} tone="rojo">
              Pedir grúa
            </Btn>
            <Btn href={`tel:${BIZ.phoneTel}`} tone="lineClaro" external={false}>
              Llamar
            </Btn>
          </div>
        </div>
      </section>

      {/* ── 2 · Servicios: dos paneles enfrentados ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.cabina }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24">
          <Reveal>
            <Rotulo color={C.rojo}>Lo que hacemos</Rotulo>
            <h2
              className={`${display.className} mt-3 font-extrabold uppercase leading-[0.95] text-[clamp(2.4rem,7vw,4.6rem)]`}
            >
              Dos oficios,
              <br />
              un mismo número.
            </h2>
          </Reveal>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid md:grid-cols-2 gap-5">
          <article className="gi-izq relative overflow-hidden rounded-xl min-h-[420px] flex flex-col justify-end" style={{ backgroundColor: C.asfalto }}>
            <Image
              src={`${IMG}/traslado.webp`}
              alt="Auto asegurado sobre la plataforma de la grúa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,31,34,0) 30%, rgba(28,31,34,0.94) 100%)' }} />
            <div className="relative p-6 md:p-8">
              <p className={`${display.className} text-6xl font-extrabold leading-none`} style={{ color: C.amarillo }}>
                01
              </p>
              <h3 className={`${display.className} mt-2 text-3xl font-extrabold uppercase`} style={{ color: C.cabina }}>
                Servicio de grúa
              </h3>
              <p className="mt-2 max-w-sm leading-relaxed" style={{ color: 'rgba(244,242,238,0.85)' }}>
                Grúa plana para trasladar su auto o camioneta. Mándenos por
                WhatsApp dónde está y le confirmamos.
              </p>
              <div className="mt-5">
                <Btn href={WA_GRUA} tone="amarillo">
                  Pedir grúa
                </Btn>
              </div>
            </div>
          </article>
          <article className="gi-der relative overflow-hidden rounded-xl min-h-[420px] flex flex-col justify-end" style={{ backgroundColor: C.asfalto }}>
            <Image
              src={`${IMG}/mecanico.webp`}
              alt="Mecánico de Grúas Irribarra revisando el motor de un auto"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,31,34,0) 30%, rgba(28,31,34,0.94) 100%)' }} />
            <div className="relative p-6 md:p-8">
              <p className={`${display.className} text-6xl font-extrabold leading-none`} style={{ color: C.amarillo }}>
                02
              </p>
              <h3 className={`${display.className} mt-2 text-3xl font-extrabold uppercase`} style={{ color: C.cabina }}>
                Mecánica automotriz
              </h3>
              <p className="mt-2 max-w-sm leading-relaxed" style={{ color: 'rgba(244,242,238,0.85)' }}>
                Revisión y reparación en taller techado. Cuéntenos qué le pasa
                al auto y le damos hora.
              </p>
              <div className="mt-5">
                <Btn href={WA_TALLER} tone="amarillo">
                  Agendar revisión
                </Btn>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── 3 · Horario: banda grande ── */}
      <section id="horario" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
          <Reveal>
            <p
              className={`${display.className} font-extrabold uppercase leading-[0.85] text-[clamp(5rem,22vw,12rem)]`}
              style={{ color: C.cabina }}
            >
              7/7
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Rotulo color={C.amarillo}>Horario</Rotulo>
            <p className={`${display.className} mt-2 font-extrabold uppercase text-[clamp(1.9rem,5vw,3rem)] leading-tight`} style={{ color: '#FFFFFF' }}>
              {BIZ.horario}
            </p>
            <p className="mt-3 max-w-md text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              También fines de semana. Escríbanos y le respondemos por el mismo
              WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Galería: mosaico asimétrico ── */}
      <section aria-label="Fotos del taller y la grúa" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo color={C.amarillo}>El galpón de Putúe Alto</Rotulo>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:h-[520px]">
            <Reveal className="col-span-2 md:row-span-2">
              <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                <Image src={`${IMG}/galpon.webp`} alt="Galpón del taller con la grúa estacionada" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <div className="relative h-40 md:h-full overflow-hidden rounded-lg">
                <Image src={`${IMG}/taller.webp`} alt="Interior techado del taller con autos en reparación" fill sizes="(min-width: 768px) 50vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={160} className="md:col-span-2">
              <div className="relative h-40 md:h-full overflow-hidden rounded-lg">
                <Image src={`${IMG}/camioneta.webp`} alt="Grúa trasladando una camioneta por la ruta" fill sizes="(min-width: 768px) 50vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · Opiniones: citas sobre la calzada ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.cabina }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <Reveal>
            <Rotulo color={C.rojo}>Opiniones en Google</Rotulo>
            <p className={`${display.className} mt-3 font-extrabold leading-none text-[clamp(4.5rem,14vw,7rem)]`}>
              {BIZ.rating}
            </p>
            <Stars value={BIZ.ratingValue} color={C.rojo} size={22} className="mt-2" />
            <p className="mt-3 text-base" style={{ color: C.gris }}>
              {BIZ.reviews} opiniones de clientes en Google Maps.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ textDecorationColor: 'rgba(199,51,43,0.5)' }}
            >
              Ver la ficha en Google
            </a>
          </Reveal>
          <div className="flex flex-col">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor} delay={i * 100}>
                <figure className="py-6 border-t" style={{ borderColor: C.line }}>
                  <blockquote className={`${display.className} text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight`}>
                    “{o.texto}”
                  </blockquote>
                  <figcaption className="mt-3 text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: C.gris }}>
                    {o.autor}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · Dónde ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.asfalto2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Rotulo color={C.amarillo}>Dónde estamos</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold uppercase leading-[0.95] text-[clamp(2.2rem,6vw,3.8rem)]`} style={{ color: C.cabina }}>
              Putúe Alto,
              <br />
              camino a Rinconada
            </h2>
            <Calzada tramos={6} className="mt-5 max-w-xs" />
            <address className="not-italic mt-6 text-lg leading-relaxed" style={{ color: 'rgba(244,242,238,0.82)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.cabina }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="amarillo">
                Cómo llegar
              </Btn>
              <Btn href={WA_LINK} tone="lineClaro">
                WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] min-h-[300px]" style={{ border: '1px solid rgba(244,242,238,0.16)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Cierre ── */}
      <section style={{ backgroundColor: C.amarillo }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.92] text-[clamp(2.6rem,9vw,5.2rem)]`}>
              ¿Quedó en panne?
            </h2>
            <p className="mt-4 max-w-md mx-auto text-lg leading-relaxed" style={{ color: C.asfalto2 }}>
              Escríbanos dónde está y qué le pasó al auto. Le respondemos por
              WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_GRUA} tone="rojo">
                Pedir grúa
              </Btn>
              <Btn href={`tel:${BIZ.phoneTel}`} tone="lineOscuro" external={false}>
                {BIZ.phoneDisplay}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Footer ── */}
      <footer style={{ backgroundColor: C.asfalto, color: C.cabina }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl font-extrabold uppercase`}>{BIZ.short}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(244,242,238,0.7)' }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,242,238,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(244,242,238,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(244,242,238,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cabina }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amarillo }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
