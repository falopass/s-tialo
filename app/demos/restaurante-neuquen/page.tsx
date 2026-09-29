import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_EMBED, IMG, HORARIO, RESENA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

const C = {
  paper: '#F3EBD8',
  papel2: '#EADFC6',
  ink: '#26211A',
  pine: '#2D4A36',
  terra: '#B4502A',
  terraInk: '#8F3A1D',
  gold: '#C8963E',
  goldText: '#E5B35C',
  muted: '#6B5F4C',
  line: 'rgba(38,33,26,0.2)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-neuquen',
  title: 'Restaurante Neuquén — Casa de comidas en San Clemente',
  description:
    'Bar restaurante en Av. Huamachuco 712, San Clemente, camino al Paso Pehuenche. Comida casera, paila marina y onces. Abierto de lunes a sábado.',
  image: '/demos/restaurante-neuquen/hero.webp',
})

const NAV_LINKS = [
  { label: 'La ruta', href: '#ruta' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'La casa', href: '#casa' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const RUTA = [
  { paso: 'San Clemente', dato: 'KM 0 · el punto de partida' },
  { paso: 'Vilches', dato: 'cordillera del Maule' },
  { paso: 'Paso Pehuenche', dato: 'frontera · 2.553 m' },
  { paso: 'Neuquén', dato: 'Argentina — el nombre del local' },
]

const COCINA = [
  {
    src: `${IMG}/paila.webp`,
    alt: 'Paila marina servida en plato hondo, con mariscos y caldo',
    tag: 'De la olla',
    name: 'Paila marina y platos caseros',
    desc: 'La foto es de su propia ficha de Google: mariscos en caldo caliente, de esos que piden pan para no dejar nada.',
  },
  {
    src: `${IMG}/once.webp`,
    alt: 'Trozo de kuchen con café en la mesa del restaurante',
    tag: 'La once',
    name: 'Kuchen y café para la tarde',
    desc: 'Abre desde las 9 de la mañana, así que la once de las cinco es horario seguro: algo dulce y una taza grande.',
  },
  {
    src: `${IMG}/barra.webp`,
    alt: 'Repisa de la barra con vinos y loza colgada',
    tag: 'La barra',
    name: 'Vinos de la zona y loza de siempre',
    desc: 'Bar restaurante: la repisa tiene el vino listo y la loza colgada como en las casas de comida de antes.',
  },
]

function Sello({
  n,
  title,
  dark = false,
}: {
  n: string
  title: string
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-4 mb-8 md:mb-12">
      <span
        className={`${mono.className} inline-flex items-center justify-center w-[74px] h-[74px] md:w-[86px] md:h-[86px] rounded-full text-[13px] md:text-sm font-semibold uppercase tracking-[0.14em] text-center leading-tight border-2 border-dashed shrink-0`}
        style={{
          color: dark ? C.goldText : C.terraInk,
          borderColor: dark ? 'rgba(200,150,62,0.6)' : 'rgba(180,80,42,0.6)',
          transform: 'rotate(-6deg)',
        }}
        aria-hidden="true"
      >
        {n}
      </span>
      <h2
        className={`${display.className} text-[clamp(1.9rem,5.5vw,3.6rem)] leading-[1.02]`}
        style={{ color: dark ? '#F3EBD8' : C.ink }}
      >
        {title}
      </h2>
    </div>
  )
}

export default function RestauranteNeuquenPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .nq-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .nq-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .nq-btn:active { transform: translateY(0) scale(0.97); }
        .nq-btn:focus-visible { outline: 3px solid ${C.terra}; outline-offset: 3px; }
        .nq-btn-dark:focus-visible { outline-color: ${C.gold}; }
        .nq-ticket { position: relative; }
        .nq-ticket::before, .nq-ticket::after {
          content: ''; position: absolute; width: 22px; height: 22px; border-radius: 50%;
          background: ${C.paper}; top: 50%; transform: translateY(-50%);
        }
        .nq-ticket::before { left: -11px; }
        .nq-ticket::after { right: -11px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(243,235,216,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.pine,
          btnInk: '#F3EBD8',
        }}
      />

      {/* ── Hero — la puerta del local ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: '#1A1712' }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Entrada de Restaurante Neuquén en San Clemente: puerta de madera y vidrio entre plantas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,23,18,0.5) 0%, rgba(26,23,18,0.12) 42%, rgba(26,23,18,0.9) 100%)',
          }}
        />
        {/* sello de rating (decorativo; el link a la ficha va en "La casa") */}
        <div className="absolute top-[104px] md:top-[120px] right-5 md:right-8" style={{ transform: 'rotate(5deg)' }}>
          <Reveal delay={200}>
            <div
              className="flex flex-col items-center justify-center w-[92px] h-[92px] md:w-[104px] md:h-[104px] rounded-full border-2 border-dashed text-center"
              style={{ borderColor: 'rgba(243,235,216,0.7)', color: '#F3EBD8', backgroundColor: 'rgba(26,23,18,0.45)', backdropFilter: 'blur(4px)' }}
            >
              <span className={`${display.className} text-2xl md:text-3xl leading-none`}>{BIZ.rating}</span>
              <span className={`${mono.className} text-[9px] uppercase tracking-[0.16em] mt-1`}>
                {BIZ.reviews} reseñas
                <br />
                en Google
              </span>
            </div>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-44">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-5`}
              style={{ color: C.gold }}
            >
              Bar restaurante · Av. Huamachuco 712 · San Clemente
            </p>
            <h1
              className={`${display.className} leading-[0.98] text-[clamp(2.9rem,9vw,7.2rem)] mb-6`}
              style={{ color: '#F3EBD8' }}
            >
              La mesa chilena
              <br />
              antes de <span style={{ color: C.gold }}>Neuquén</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium" style={{ color: 'rgba(243,235,216,0.9)' }}>
              Casa de comidas en la ruta de la cordillera: platos abundantes,
              paila marina y onces con kuchen, en el pueblo que da la entrada
              al Paso Pehuenche.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} nq-btn nq-btn-dark text-base md:text-lg px-7 py-3 tap-44`}
                style={{ backgroundColor: C.gold, color: '#1A1712' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#cocina"
                className={`${display.className} nq-btn nq-btn-dark text-base md:text-lg px-7 py-3 border-2 hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(243,235,216,0.55)', color: '#F3EBD8' }}
              >
                Ver la cocina
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La ruta: San Clemente → Neuquén ── */}
      <section id="ruta" className="scroll-mt-20 border-b" style={{ borderColor: C.line, backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <p
              className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.28em] mb-6`}
              style={{ color: 'rgba(243,235,216,0.7)' }}
            >
              El nombre viene de la ruta internacional
            </p>
          </Reveal>
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-6">
            {RUTA.map((p, i) => (
              <Reveal key={p.paso} delay={i * 120}>
                <li className="relative pl-4 md:pl-5 border-l-2" style={{ borderColor: 'rgba(200,150,62,0.55)' }}>
                  <span
                    className="absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2"
                    style={{ backgroundColor: i === RUTA.length - 1 ? C.gold : C.pine, borderColor: C.gold }}
                    aria-hidden="true"
                  />
                  <p className={`${display.className} text-xl md:text-2xl leading-tight`} style={{ color: '#F3EBD8' }}>
                    {p.paso}
                  </p>
                  <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-1.5`} style={{ color: 'rgba(243,235,216,0.78)' }}>
                    {p.dato}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mt-8 md:mt-10" style={{ color: 'rgba(243,235,216,0.82)' }}>
              De San Clemente sale la ruta 115 hacia la cordillera: Vilches,
              el lago Colbún y el Paso Pehuenche, que cruza a la provincia de
              Neuquén en Argentina. El restaurante lleva el nombre del destino
              al otro lado de la frontera — y es parada de almuerzo para quien
              va camino a la montaña.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La cocina — tickets ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <Sello n="N° 01" title="Lo que sale de la cocina" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {COCINA.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <article
                className="nq-ticket h-full border-2 border-dashed p-5 md:p-6"
                style={{ borderColor: 'rgba(180,80,42,0.55)', backgroundColor: C.papel2 }}
              >
                <div className="relative overflow-hidden mb-5 aspect-[4/3]" style={{ backgroundColor: '#D9CDB2' }}>
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p
                  className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em] mb-2`}
                  style={{ color: C.terraInk }}
                >
                  {c.tag}
                </p>
                <h3 className={`${display.className} text-2xl leading-tight mb-2.5`} style={{ color: C.ink }}>
                  {c.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {c.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Foto ancha: el salón ── */}
      <section aria-label="El salón del restaurante">
        <Reveal>
          <div className="relative h-[56vh] md:h-[72vh] overflow-hidden">
            <Image
              src={`${IMG}/salon.webp`}
              alt="Salón del restaurante: mesas servidas, sombreros de campo colgados en la pared y cuadros"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <p
              className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.22em] py-3 border-b`}
              style={{ color: C.muted, borderColor: C.line }}
            >
              El salón, con sus sombreros en la pared — foto real de su ficha
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Sello n="N° 02" title="La casa" />
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <h3
                  className={`${display.className} leading-[1.02] text-[clamp(2rem,5vw,3.6rem)] mb-6`}
                  style={{ color: C.ink }}
                >
                  Una casa de comidas
                  <br />
                  <span style={{ color: C.pine }}>de pueblo cordillerano</span>
                </h3>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  <p>
                    En Google está como <strong style={{ color: C.ink }}>“Neuquen”</strong>: bar
                    restaurante en la avenida principal de San Clemente, con
                    sombreros de campo en la pared, loza colgada y mesas
                    servidas. De día y de lunes a sábado.
                  </p>
                  <p>
                    En el registro de SERNATUR figura con contacto para
                    eventos — el local también recibe celebraciones. Datos
                    reales de su ficha pública; la carta y la historia las
                    cuenta el local al publicar.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="border-l-4 pl-4" style={{ borderColor: C.terra }}>
                    <p className={`${display.className} text-3xl leading-none`} style={{ color: C.ink }}>
                      {BIZ.rating}★
                    </p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1.5`} style={{ color: C.muted }}>
                      {BIZ.reviews} reseñas en Google
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: C.gold }}>
                    <p className={`${display.className} text-3xl leading-none`} style={{ color: C.ink }}>
                      L–S
                    </p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1.5`} style={{ color: C.muted }}>
                      9:00 a 17:00 · domingo cerrado
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-5">
              <Reveal delay={80}>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                  Lo que dice la gente — reseña real de Google
                </p>
              </Reveal>
              <Reveal delay={120}>
                <figure className="p-6 md:p-7 border-l-4" style={{ backgroundColor: C.paper, borderColor: C.terra }}>
                  <blockquote className="text-base md:text-lg leading-relaxed font-medium mb-4" style={{ color: C.ink }}>
                    “{RESENA.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.terraInk }}>
                    {RESENA.autor} · {'★'.repeat(RESENA.estrellas)} · {RESENA.cuando}
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={180}>
                <a
                  href={BIZ.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block text-base underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.pine, textDecorationColor: 'rgba(45,74,54,0.35)' }}
                >
                  Ver la ficha real en Google →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Horario + contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Sello n="N° 03" title="Cómo llegar" dark />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <h3
                  className={`${display.className} leading-[1.02] text-[clamp(2.1rem,5.5vw,4rem)] mb-6`}
                  style={{ color: '#F3EBD8' }}
                >
                  ¿Almuerzo
                  <br />
                  <span style={{ color: C.goldText }}>esta semana?</span>
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(243,235,216,0.85)' }}>
                  Está sobre Av. Huamachuco, la calle que cruza San Clemente
                  camino a Vilches y la cordillera. Reserva o consulta por
                  eventos directo al WhatsApp.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-7 font-medium" style={{ color: 'rgba(243,235,216,0.92)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <ul className="mb-8 space-y-1.5" style={{ color: 'rgba(243,235,216,0.85)' }}>
                  {HORARIO.map((h) => (
                    <li key={h.d} className={`${mono.className} flex gap-4 text-xs md:text-sm uppercase tracking-[0.1em]`}>
                      <span className="w-32 shrink-0" style={{ color: 'rgba(243,235,216,0.72)' }}>{h.d}</span>
                      <span>{h.h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} nq-btn nq-btn-dark text-base md:text-lg px-7 py-3 tap-44`}
                    style={{ backgroundColor: C.gold, color: '#1A1712' }}
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full max-w-full overflow-hidden border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: 'rgba(243,235,216,0.35)' }}
                >
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
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#1A1712', color: '#F3EBD8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(243,235,216,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,235,216,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-8 text-xs leading-relaxed" style={{ color: 'rgba(243,235,216,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F3EBD8' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Las fotos y la reseña son reales de su ficha de
            Google; la carta se confirma con el local al publicar.{' '}
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
