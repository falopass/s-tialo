import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_MESA,
  WA_LINK_CABANA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  PLATOS,
  RESENAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  bosque: '#1E2C1C',
  bosqueSuave: '#2A3D27',
  crema: '#F8F2E2',
  papel: '#FFFDF4',
  tinta: '#20281B',
  tenue: '#6A705D',
  amarillo: '#F2B21B',
  linea: 'rgba(32,40,27,0.16)',
  lineaClara: 'rgba(248,242,226,0.18)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-lean-el-colorado',
  title: 'LEAN — comida casera y cabañas en el km 73,5 de la 115',
  description:
    'Restaurante y hostería en Las Parcelas de la Suiza, San Clemente. Comida casera abundante, quincho, cabañas y la mesa amarilla frente a la cordillera. 4,9★ con 79 opiniones.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'El refugio', href: '#refugio' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** Cerro simplificado, el perfil de la cordillera del Alto Lircay. */
function Cerro({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20 L8 7 L11.5 13 L15 8.5 L22 20 Z" />
    </svg>
  )
}

function Kicker({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={`${mono.className} flex items-center gap-2.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4`}
      style={{ color: light ? C.amarillo : C.bosque }}
    >
      <Cerro className="w-4 h-4" />
      {children}
    </p>
  )
}

export default function LeanElColoradoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        .lean-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .lean-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .lean-btn:active { transform: translateY(0) scale(0.97); }
        .lean-btn:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px; }
        .lean-rail { scrollbar-width: thin; -webkit-overflow-scrolling: touch; }
        .lean-rail::-webkit-scrollbar { height: 6px; }
        .lean-rail::-webkit-scrollbar-thumb { background: ${C.bosque}; border-radius: 3px; }
      `}</style>

      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2">
            <Cerro className="w-5 h-5" />
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(30,44,28,0.94)',
          ink: C.crema,
          line: C.lineaClara,
          btnBg: C.amarillo,
          btnInk: '#1E2C1C',
        }}
      />

      {/* ── Hero: la hostería bajo la cordillera ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.bosque }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Casa de madera de LEAN a pie de la cordillera verde del alto Lircay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(30,44,28,0.35) 0%, rgba(30,44,28,0.05) 40%, rgba(30,44,28,0.88) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-40">
          <Reveal>
            <div
              className={`${mono.className} inline-flex items-center gap-3 px-3.5 py-2 mb-6 text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] border`}
              style={{ borderColor: C.amarillo, color: C.amarillo, backgroundColor: 'rgba(30,44,28,0.6)' }}
            >
              <Cerro className="w-4 h-4" />
              Ruta 115 · {BIZ.km} · {BIZ.city}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.8rem,9vw,7.5rem)] mb-6`}
              style={{ color: C.crema }}
            >
              En el {BIZ.km}
              <br />
              la mesa <span style={{ color: C.amarillo }}>amarilla</span>
              <br />
              ya está puesta
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium" style={{ color: 'rgba(248,242,226,0.9)' }}>
              Comida casera de olla, quincho para la sombra y cabañas entre
              parcelas — el refugio de la ruta a la cordillera de San Clemente.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} lean-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.amarillo, color: C.bosque }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={WA_LINK_CABANA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} lean-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 border-2 tap-44`}
                style={{ borderColor: 'rgba(248,242,226,0.6)', color: C.crema }}
              >
                Reservar cabaña
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 tap-44">
              <Stars value={4.9} color={C.amarillo} className="w-4 h-4" />
              <span className={`${mono.className} text-xs md:text-sm font-bold`} style={{ color: C.crema }}>
                {BIZ.rating} en Google · {BIZ.reviews} opiniones
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Banda de datos del refugio ── */}
      <div style={{ backgroundColor: C.amarillo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 grid grid-cols-3 gap-4">
          {[
            { k: BIZ.rating, v: 'nota en Google' },
            { k: BIZ.reviews, v: 'opiniones reales' },
            { k: '3 en 1', v: 'restaurante · hostería · cabañas' },
          ].map((s) => (
            <Reveal key={s.v}>
              <div className="text-center">
                <p className={`${display.className} font-extrabold uppercase text-2xl md:text-4xl leading-none mb-1`} style={{ color: C.bosque }}>
                  {s.k}
                </p>
                <p className={`${mono.className} text-[9px] md:text-xs font-bold uppercase tracking-[0.14em]`} style={{ color: C.bosque }}>
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── La cocina: rail horizontal de la mesa amarilla ── */}
      <section id="cocina" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker>De la olla a la mesa</Kicker>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2rem,5.5vw,4rem)] mb-4`}>
              Todo sale a la mesa amarilla
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl" style={{ color: C.tenue }}>
              Almuerzos y colaciones caseras: plato de fondo con su agregado,
              ensalada chilena, jugos naturales y las mermeladas de la casa
              que los clientes nombran en las reseñas.
            </p>
          </Reveal>
        </div>
        {/* rail horizontal: en móvil se desliza, en desktop es grilla */}
        <Reveal>
          <ul className="lean-rail flex md:grid md:grid-cols-3 gap-5 overflow-x-auto px-5 md:px-8 pb-4 md:pb-0 max-w-6xl mx-auto">
            {PLATOS.map((p, i) => (
              <li key={p.nombre} className="shrink-0 w-[78vw] sm:w-[320px] md:w-auto">
                <div className="relative overflow-hidden aspect-[4/3] mb-3 border" style={{ borderColor: C.linea, backgroundColor: C.papel }}>
                  <Image
                    src={p.src}
                    alt={p.nombre}
                    fill
                    sizes="(min-width: 768px) 33vw, 78vw"
                    className="object-cover"
                  />
                  <span
                    className={`${mono.className} absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em]`}
                    style={{ backgroundColor: C.amarillo, color: C.bosque }}
                  >
                    Plato {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl`}>{p.nombre}</h3>
                <p className="text-sm leading-relaxed mt-1" style={{ color: C.tenue }}>{p.detalle}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── El refugio ── */}
      <section id="refugio" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker light>El refugio</Kicker>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2rem,5.5vw,4rem)] mb-10 md:mb-14 max-w-3xl`}
              style={{ color: C.crema }}
            >
              Troncos nativos por dentro, quincho rojo por fuera
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            <Reveal className="col-span-6 lg:col-span-4">
              <div className="relative overflow-hidden aspect-[3/4] h-full" style={{ backgroundColor: C.bosqueSuave }}>
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="Comedor interior con pilares de tronco nativo, techumbre de madera y mesas"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-6 lg:col-span-4 lg:mt-10" delay={100}>
              <div className="relative overflow-hidden aspect-[3/4] h-full" style={{ backgroundColor: C.bosqueSuave }}>
                <Image
                  src={`${IMG}/quincho.webp`}
                  alt="Quincho techado con estructura de madera y pilares pintados de rojo, con mesas"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-6 lg:col-span-4 lg:col-start-5 lg:-mt-6" delay={160}>
              <div className="relative overflow-hidden aspect-[3/4] h-full" style={{ backgroundColor: C.bosqueSuave }}>
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Portón de entrada a Las Parcelas de la Suiza con la cordillera al fondo"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="grid grid-cols-12 gap-6 mt-10 md:mt-14">
              <p className="col-span-12 md:col-span-5 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(248,242,226,0.85)' }}>
                El comedor se sostiene sobre pilares de tronco nativo, y en
                verano la mesa se corre al quincho: pilares rojos, techo de
                zinc y la sombra fresca del predio.
              </p>
              <p className="col-span-12 md:col-span-5 md:col-start-8 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(248,242,226,0.85)' }}>
                Está dentro de Las Parcelas de la Suiza, km 73,5 de la 115 —
                último tramo plano antes de que el camino se encierre entre
                cerros hacia El Colorado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cabañas ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <Kicker>Si la ruta da para quedarse</Kicker>
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2rem,5vw,3.6rem)] mb-5`}>
                También hay cabañas
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.tenue }}>
                LEAN es restaurante y también hostería: cabañas y
                hospedaje dentro del mismo predio, con la cordillera
                al fondo y la cena casera a unos pasos.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-7" style={{ color: C.tenue }}>
                «Hospedaje muy cómodo y limpio», escriben en las reseñas —
                varios llegaron a almorzar y se quedaron la noche.
              </p>
              <a
                href={WA_LINK_CABANA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} lean-btn inline-block font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.bosque, color: C.crema }}
              >
                Consultar por cabaña
              </a>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-5">
                <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: C.papel }}>
                  <Image
                    src={`${IMG}/cabanas.webp`}
                    alt="Pasillo techado de las cabañas de LEAN con puertas de madera, de noche"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/4] mt-8" style={{ backgroundColor: C.papel }}>
                  <Image
                    src={`${IMG}/predio.webp`}
                    alt="Calle interior del predio entre casas de madera con cerros verdes al fondo"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 border-t" style={{ borderColor: C.linea, backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker>Los que ya pararon</Kicker>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2rem,5.5vw,4rem)] mb-4 max-w-3xl`}>
              4,9 de 5 dicen que vale la pausa
            </h2>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 mb-10 md:mb-14 tap-44">
              <Stars value={4.9} color={C.bosque} className="w-4 h-4" />
              <span className="text-xs md:text-sm font-extrabold">{BIZ.rating} en Google · {BIZ.reviews} opiniones reales</span>
            </a>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            <Reveal className="col-span-12 lg:col-span-7">
              <figure className="h-full p-6 md:p-9 border-l-4" style={{ borderColor: C.amarillo, backgroundColor: C.crema }}>
                <blockquote className={`${display.className} text-lg md:text-2xl leading-snug mb-5`}>
                  “{RESENAS[0].texto}”
                </blockquote>
                <figcaption className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.2em]`} style={{ color: C.tenue }}>
                  {RESENAS[0].nombre} · reseña en Google
                </figcaption>
              </figure>
            </Reveal>
            <div className="col-span-12 lg:col-span-5 grid gap-5">
              {RESENAS.slice(1).map((r, i) => (
                <Reveal key={r.nombre} delay={100 + i * 80}>
                  <figure className="p-5 border" style={{ borderColor: C.linea }}>
                    <blockquote className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.tinta }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em]`} style={{ color: C.tenue }}>
                      {r.nombre} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker light>Dónde queda</Kicker>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2rem,5.5vw,4rem)] mb-10 md:mb-14 max-w-3xl`}
              style={{ color: C.crema }}
            >
              El último refugio antes de la cuesta
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <div className="relative w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]" style={{ borderColor: C.lineaClara }}>
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
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={120}>
                <div className="border p-6 md:p-8 h-full flex flex-col" style={{ borderColor: C.lineaClara, backgroundColor: 'rgba(248,242,226,0.06)' }}>
                  <address className="not-italic mb-6">
                    <p className={`${display.className} font-extrabold uppercase text-xl md:text-2xl leading-tight mb-2`} style={{ color: C.crema }}>
                      {BIZ.address}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,242,226,0.8)' }}>
                      {BIZ.city}, {BIZ.region}, Chile
                      <br />
                      <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44 font-semibold" style={{ color: C.crema }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </p>
                  </address>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(248,242,226,0.8)' }}>
                    Subiendo por la 115 hacia El Colorado, el portón de LEAN
                    aparece a mano del camino. Almuerzo, colaciones, cena y
                    noche de cabaña — todo en el mismo predio.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href={WA_LINK_MESA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} lean-btn font-bold uppercase tracking-wide text-sm px-6 py-3 tap-44`}
                      style={{ backgroundColor: C.amarillo, color: C.bosque }}
                    >
                      Escribir por WhatsApp
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} lean-btn font-bold uppercase tracking-wide text-sm px-6 py-3 border-2 tap-44`}
                      style={{ borderColor: 'rgba(248,242,226,0.6)', color: C.crema }}
                    >
                      Abrir en Maps
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#141F13', color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-extrabold uppercase text-lg md:text-xl mb-2`}>
            {BIZ.name} · Restaurante y hostería
          </p>
          <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(248,242,226,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            {' · '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.lineaClara }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed" style={{ color: 'rgba(248,242,226,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, reseñas y fotos reales de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amarillo }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
