import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  cream: '#F3ECDD',
  creamHi: '#FAF5E9',
  ink: '#221410',
  muted: '#6E5547',
  red: '#7E1F1F',
  redDeep: '#5C1414',
  wood: '#A9763F',
  gold: '#C99B3F',
  night: '#190F0B',
  line: 'rgba(34,20,16,0.16)',
}

// globals.css redefine --spacing-5…12; se restaura la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'punto-sagrado',
  title: 'Punto Sagrado — la picada de San Luis, Sagrada Familia',
  description:
    'Bar restaurante en San Luis, Sagrada Familia: platos caseros abundantes, palta reina, chorrillana y el menú del día en la pizarra. 4,3 en Google.',
  image: `${IMG}/mesa.webp`,
})

const NAV_LINKS = [
  { label: 'La picada', href: '#picada' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const PLATOS = [
  {
    src: 'plateada.webp',
    alt: 'Plateada al jugo con puré picante servida en Punto Sagrado',
    nombre: 'Plateada al jugo',
    detalle: 'con puré picante, como en la foto de la ficha',
  },
  {
    src: 'palta.webp',
    alt: 'Palta reina con arroz, tomate y choclo en mesa de madera',
    nombre: 'Palta reina',
    detalle: 'la que ofrecieron cuando un cliente no come carnes',
  },
  {
    src: 'chorrillana.webp',
    alt: 'Chorrillana con huevos fritos encima',
    nombre: 'Chorrillana con huevo',
    detalle: 'para compartir en la mesa de madera',
  },
  {
    src: 'pescado.webp',
    alt: 'Pescado frito con papas fritas y limón',
    nombre: 'Pescado frito',
    detalle: 'con papas y su limón, al plato',
  },
]

const RESENAS = [
  {
    nombre: 'Laura Medina',
    fecha: 'Hace un año',
    estrellas: 5,
    texto:
      'Un ambiente acogedor, servicio rápido y comida rica y abundante. Recomendado si están de paso y necesitan una picada certera. Al manifestar que no consumo carnes rojas me ofrecieron una exquisita palta rellena.',
  },
  {
    nombre: 'Francisco Silva',
    fecha: 'Hace un año',
    estrellas: 5,
    texto:
      'Comida con amor, casera y con esos sabores exquisitos de casa. Muy amable la atención, tanto del chef como de quienes atienden. Se recomienda al 100% en Sagrada Familia.',
  },
  {
    nombre: 'Sebastián Gómez',
    fecha: 'Hace 2 años',
    estrellas: 5,
    texto: 'Excelente, las tres BBB. Bueno, bonito y barato.',
  },
]

/* El «punto» del nombre: anillo de puntos con centro */
function Punto({ className = 'w-16 h-16', color = C.red }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={{ color }} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6
        return <circle key={i} cx={32 + 26 * Math.cos(a)} cy={32 + 26 * Math.sin(a)} r="2.4" fill="currentColor" />
      })}
      <circle cx="32" cy="32" r="7" fill="currentColor" />
      <circle cx="32" cy="32" r="13" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4`}
      style={{ color: dark ? C.gold : C.red }}
    >
      {children}
    </p>
  )
}

export default function PuntoSagradoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        .ps-btn { transition: transform .18s ease, filter .18s ease; }
        .ps-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .ps-btn:active { transform: scale(.97); }
        .ps-btn:focus-visible { outline: 3px solid ${C.gold}; outline-offset: 3px; }
        @keyframes ps-late { from { transform: rotate(0) } to { transform: rotate(360deg) } }
        .ps-late { animation: ps-late 60s linear infinite }
        @media (prefers-reduced-motion: reduce) { .ps-late { animation: none } }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} font-semibold tracking-wide`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(25,15,11,0.94)',
          ink: C.cream,
          line: 'rgba(243,236,221,0.16)',
          btnBg: C.gold,
          btnInk: C.night,
        }}
      />

      {/* ── Hero: el comedor de paredes rojas ── */}
      <section id="inicio" className="relative flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.night, minHeight: '92svh' }}>
        <Image
          src={`${IMG}/mesa.webp`}
          alt="Familia almorzando en el comedor de Punto Sagrado, con paredes rojas, espejos y la pizarra del menú"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(25,15,11,0.58) 0%, rgba(25,15,11,0.3) 42%, rgba(25,15,11,0.94) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-9 md:pb-12 pt-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-5" style={{ color: C.gold }}>
              <Punto className="ps-late w-10 h-10" />
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em]`}>
                {BIZ.rubro} · {BIZ.address} · {BIZ.city}
              </p>
            </div>
            <h1
              className={`${display.className} font-semibold leading-[0.98] text-[clamp(2.9rem,11vw,7rem)] mb-5`}
              style={{ color: C.cream }}
            >
              El punto donde
              <br />
              <em className={displayItalic.className} style={{ color: C.gold }}>
                San Luis se sienta a la mesa
              </em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: 'rgba(243,236,221,0.88)' }}>
              Bar restaurante campestre en Sagrada Familia: platos caseros
              abundantes, pizarra del día y esa palta rellena que ya sale en
              las reseñas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ps-btn font-semibold text-sm md:text-base px-6 py-2.5 tap-44`}
                style={{ backgroundColor: C.red, color: C.cream }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ps-btn font-semibold text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(243,236,221,0.5)', color: C.cream }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(243,236,221,0.2)', backgroundColor: 'rgba(25,15,11,0.88)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs`} style={{ color: 'rgba(243,236,221,0.82)' }}>
            <span className="inline-flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.gold} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </span>
            <span>Abre a las 9:00</span>
            <span className="hidden sm:inline">Bar restaurante · San Luis</span>
            <span className="hidden md:inline" style={{ color: C.gold }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La picada: cita grande + palta reina ── */}
      <section id="picada" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>La picada · San Luis</Eyebrow>
              <h2 className={`${display.className} font-semibold leading-[1.02] text-[clamp(1.9rem,6.4vw,4.2rem)] mb-6`}>
                “Recomendado si están de paso y necesitan una{' '}
                <em style={{ color: C.red, fontStyle: 'italic' }}>picada certera</em>”
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-lg mb-6" style={{ color: C.muted }}>
                Así lo escribió una clienta en Google. Punto Sagrado es el
                bar restaurante de San Luis: mesas de madera, paredes rojas
                y platos de casa — la cocina responde hasta cuando el menú
                no tiene opción sin carne.
              </p>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Laura Medina · reseña de Google, 5 estrellas
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-5" delay={110}>
            <figure className="relative overflow-hidden aspect-[3/4]" style={{ borderRadius: '999px 999px 0 0' }}>
              <Image
                src={`${IMG}/palta.webp`}
                alt="Dos paltas rellenas con arroz, tomate y choclo servidas en mesa de madera"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-2 text-center`} style={{ color: C.muted }}>
              La palta reina que salió en la reseña — foto real
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La pizarra: los platos de la casa ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.redDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-4" style={{ color: C.gold }}>
              <Punto className="w-9 h-9" />
              <Eyebrow dark>La pizarra · platos de la casa</Eyebrow>
            </div>
            <h2 className={`${display.className} font-semibold leading-[0.98] text-[clamp(2.2rem,7vw,4.6rem)] mb-3`} style={{ color: C.cream }}>
              Comida con amor,
              <br />
              <em style={{ color: C.gold, fontStyle: 'italic' }}>casera y de sabor de casa</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: 'rgba(243,236,221,0.75)' }}>
              El menú del día se anuncia en la pizarra del comedor. Estos
              son los platos que se ven en las fotos reales de la ficha.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {PLATOS.map((p, i) => (
              <Reveal key={p.src} delay={i * 80}>
                <figure>
                  <div className="relative overflow-hidden border-2 aspect-[3/4]" style={{ borderColor: 'rgba(243,236,221,0.4)', borderRadius: '14px 14px 0 0' }}>
                    <Image
                      src={`${IMG}/${p.src}`}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="pt-3">
                    <p className={`${display.className} font-semibold text-lg md:text-xl leading-tight`} style={{ color: C.cream }}>
                      {p.nombre}
                    </p>
                    <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] mt-1`} style={{ color: 'rgba(243,236,221,0.65)' }}>
                      {p.detalle}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Las tres BBB ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <Punto className="w-14 h-14 mb-6" />
            <p className={`${display.className} font-semibold leading-[1.02] text-[clamp(1.8rem,5.6vw,3.6rem)] max-w-3xl`}>
              “Excelente, las tres BBB:{' '}
              <em style={{ color: C.red, fontStyle: 'italic' }}>bueno, bonito y barato</em>”
            </p>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-5`} style={{ color: C.muted }}>
              Sebastián Gómez · reseña de Google, 5 estrellas
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.creamHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Reseñas · Google Maps</Eyebrow>
            <h2 className={`${display.className} font-semibold leading-[0.98] text-[clamp(2.2rem,7vw,4.4rem)] mb-10`}>
              “Comida con amor,
              <br />
              <em style={{ color: C.red, fontStyle: 'italic' }}>casera”</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <figure className="h-full border-t-4 pt-5 flex flex-col" style={{ borderColor: C.red, backgroundColor: 'transparent' }}>
                  <Stars value={r.estrellas} color={C.red} className="w-3.5 h-3.5" />
                  <blockquote className="text-sm md:text-base leading-relaxed mt-4 mb-5 font-medium" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                    <span style={{ color: C.ink }}>{r.nombre}</span>
                    <span className="shrink-0">{r.fecha} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-7 font-semibold text-sm md:text-base underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.red, textDecorationColor: 'rgba(126,31,31,0.35)' }}
            >
              Ver las reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <Reveal>
                <Eyebrow dark>El punto en el mapa</Eyebrow>
                <address className="not-italic mb-6">
                  <p className={`${display.className} font-semibold leading-tight text-2xl md:text-4xl mb-2`} style={{ color: C.cream }}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm md:text-base" style={{ color: 'rgba(243,236,221,0.75)' }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${mono.className} inline-block text-sm md:text-base mt-3 underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.gold, textDecorationColor: 'rgba(201,155,63,0.4)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
              </Reveal>
              <Reveal delay={90}>
                <div className="border-t" style={{ borderColor: 'rgba(243,236,221,0.18)' }}>
                  <div className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(243,236,221,0.18)' }}>
                    <span className={`${display.className} font-semibold text-base md:text-lg`} style={{ color: C.cream }}>
                      Abre
                    </span>
                    <span className={`${mono.className} text-sm text-right`} style={{ color: C.gold }}>
                      a las 9:00 · Google Maps
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(243,236,221,0.18)' }}>
                    <span className={`${display.className} font-semibold text-base md:text-lg`} style={{ color: C.cream }}>
                      Se sirve
                    </span>
                    <span className={`${mono.className} text-sm text-right`} style={{ color: 'rgba(243,236,221,0.8)' }}>
                      almuerzo · bar
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ps-btn font-semibold text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ backgroundColor: C.red, color: C.cream }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ps-btn font-semibold text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                    style={{ borderColor: 'rgba(243,236,221,0.4)', color: C.cream }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative overflow-hidden aspect-[4/3] min-h-[300px]" style={{ border: '2px solid rgba(243,236,221,0.3)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2`} style={{ color: 'rgba(243,236,221,0.6)' }}>
                San Luis, camino interior de Sagrada Familia — confirma el horario por WhatsApp
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#100A07', color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-semibold text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(243,236,221,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,236,221,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(243,236,221,0.68)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son los
            reales de la ficha de Google del negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
