import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_DIA, WA_LINK_GRUPO, IG_URL, FB_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
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

/**
 * Dirección de arte: «afiche de temporada» — el camping como cartel de
 * verano impreso: papel crema, verde pino profundo y el ocre de su logo
 * (insignia con cordillera). Anton hace de tipografía de afiche; IBM Plex
 * Mono marca los datos como en un ticket de entrada de día. Motivo propio:
 * el ticket con borde perforado, usado en la tarjeta de temporada y la ficha.
 */
const C = {
  paper: '#F4EEDF',
  card: '#FBF7EA',
  pine: '#2E5A40',
  deep: '#1B3A29',
  night: '#12281D',
  ochre: '#D98E32',
  ochreLight: '#EFBC6B',
  ochreDeep: '#8A4E10',
  river: '#3D7A85',
  ink: '#24362A',
  muted: '#5C6B5C',
  line: 'rgba(27,58,41,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'camping-salto-el-leon',
  title: 'Camping Salto El León — Camping y piscina en Vilches, San Clemente',
  description:
    'Camping de temporada en Vilches, San Clemente: piscina, acceso al río y el salto que da nombre al lugar. Consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Las aguas', href: '#aguas' },
  { label: 'Tu día', href: '#dia' },
  { label: 'Sitios', href: '#sitios' },
  { label: 'Visita', href: '#visita' },
]

const JORNADA = [
  {
    hora: 'Mañana',
    titulo: 'Llegar y armar el sitio',
    texto:
      'Los sitios no se reservan: llegar temprano es la regla de la casa. Carpa bajo los árboles, mesa lista y el día por delante.',
    src: `${IMG}/sitios.webp`,
    alt: 'Carpas armadas bajo los árboles en el sector de sitios del camping',
  },
  {
    hora: 'Mediodía',
    titulo: 'Piscina con vista al valle',
    texto:
      'Una piscina amplia de agua calma, rodeada de pasto y quitasoles. El panorama de la tarde sin salir del agua.',
    src: `${IMG}/piscina.webp`,
    alt: 'Piscina del camping con quitasoles y árboles alrededor',
  },
  {
    hora: 'Tarde',
    titulo: 'Quinchos y juegos',
    texto:
      'Parrillas, mesas de quincho y espacios de juego: el almuerzo largo es parte del programa.',
    src: `${IMG}/quincho.webp`,
    alt: 'Sector de quinchos y mesa de pool dentro del camping',
  },
  {
    hora: 'Atardecer',
    titulo: 'Bajar al río y al salto',
    texto:
      'El río y el salto que da nombre al camping están dentro del paseo: pozones, rocas y agua de cordillera.',
    src: `${IMG}/salto.webp`,
    alt: 'Personas bañándose junto al salto de agua entre las rocas del río',
  },
]

const FICHA = [
  'Sitios de camping sin reserva: se ocupan por orden de llegada',
  'Piscina y acceso directo al río dentro del recinto',
  'Quinchos, parrillas y juegos para el día completo',
  'Grupos y paseos de curso bienvenidos',
  'Más de 30 temporadas junto al río, según su propia historia en Instagram',
]

// Fragmentos reales de reseñas de Google (ficha del camping, 227 reseñas).
const RESENAS = [
  {
    texto: 'El lugar es hermoso, con áreas verdes y un río precioso.',
    quien: 'Camila Uribe Toro',
  },
  {
    texto: 'El camping me encanta, son amables, tienen piscina y baños.',
    quien: 'Díaz',
  },
  {
    texto: 'Bonito el paisaje cordillerano y tranquilo.',
    quien: 'M. Adriana Barahona',
  },
]

// ── Piezas del afiche ───────────────────────────────────────

/** Etiqueta de sección en mono, como el timbre de un afiche. */
function Timbre({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.32em] font-semibold mb-5 flex items-center gap-3`}
      style={{ color: light ? C.ochreLight : C.ochreDeep }}
    >
      <span className="inline-block w-8 border-t" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Ticket con borde perforado: puntos fresados en ambos lados. */
function Ticket({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="relative px-6 md:px-9 py-7 md:py-9"
        style={{
          backgroundColor: C.card,
          boxShadow: '0 18px 44px rgba(18,40,29,0.22)',
        }}
      >
        {/* perforación lateral */}
        <div
          aria-hidden="true"
          className="absolute inset-y-3 left-0 flex flex-col justify-between"
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="block w-3 h-3 rounded-full -translate-x-1/2"
              style={{ backgroundColor: C.deep }}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-y-3 right-0 flex flex-col justify-between"
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="block w-3 h-3 rounded-full translate-x-1/2"
              style={{ backgroundColor: C.deep }}
            />
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}

/**
 * Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni
 * botones. Fondo en rgba() inline para que el chequeo de contraste lo lea.
 */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CampingSaltoElLeonPage() {
  return (
    <div
      className={`${body.className} csl min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .csl a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,238,223,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.pine,
          btnInk: '#F4EEDF',
        }}
      />

      {/* ── Hero afiche ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.night }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Bañistas junto al salto de agua entre las rocas del río en Camping Salto El León"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,40,29,0.5) 0%, rgba(18,40,29,0.15) 40%, rgba(18,40,29,0.78) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-10 md:pb-14">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.34em] font-semibold mb-4`}
              style={{ color: C.ochreLight }}
            >
              Camping · Vilches · San Clemente
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.9] text-[clamp(3.4rem,14vw,8.5rem)] mb-4`}
              style={{ color: '#FBF7EA' }}
            >
              Salto
              <br />
              El León
            </h1>
            <p
              className="text-base md:text-xl leading-relaxed max-w-md mb-8"
              style={{ color: 'rgba(251,247,234,0.88)' }}
            >
              De Talca hacia la cordillera: piscina, río y el salto que da
              nombre al camping.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.ochre, color: C.night }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#aguas"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3 border transition-colors tap-44`}
                style={{ borderColor: 'rgba(251,247,234,0.6)', color: '#FBF7EA' }}
              >
                Ver el lugar
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 border-t"
              style={{ borderColor: 'rgba(251,247,234,0.25)' }}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 tap-44"
              >
                <Stars value={BIZ.rating} color={C.ochre} />
                <span
                  className={`${mono.className} text-xs md:text-sm font-semibold`}
                  style={{ color: '#FBF7EA' }}
                >
                  {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas en Google
                </span>
              </a>
              <span
                className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.18em]`}
                style={{ color: 'rgba(251,247,234,0.75)' }}
              >
                Temporada de verano
              </span>
              <span
                className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.18em]`}
                style={{ color: 'rgba(251,247,234,0.75)' }}
              >
                Más de 30 años junto al río
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Presentación: insignia + el lugar ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/laguna.webp`}
                  alt="Laguna de agua tranquila dentro del camping, con los árboles reflejados"
                  fill
                  sizes="(min-width: 1024px) 40vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element -- insignia real del perfil */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Insignia de Camping Salto El León"
                className="absolute -bottom-8 -right-3 md:-right-8 w-24 h-24 md:w-32 md:h-32 rounded-full object-cover rotate-[-6deg]"
                style={{ boxShadow: '0 12px 30px rgba(18,40,29,0.35)', border: `4px solid ${C.paper}` }}
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Timbre>El lugar</Timbre>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl mb-6`}
              style={{ color: C.deep }}
            >
              Verano
              <br />
              <span style={{ color: C.pine }}>entre el río</span>
              <br />
              <span style={{ color: C.ochreDeep }}>y la piscina</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: C.ink }}>
              En el camino a Vilches, un complejo familiar con sitios de
              camping, una piscina de agua serena y acceso al río que baja
              de la cordillera. Funciona por temporada y los sitios se
              ocupan por orden de llegada.
            </p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44`}
              style={{ color: C.pine, textDecorationColor: C.ochre }}
            >
              {BIZ.igHandle} · {BIZ.igFollowers} seguidores →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Las aguas: díptico piscina / río ── */}
      <section id="aguas" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Timbre light>Aguas del camping</Timbre>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl mb-10 md:mb-14`}
              style={{ color: C.paper }}
            >
              Dos maneras
              <br />
              <span style={{ color: C.ochreLight }}>de meterse al agua</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-7">
            <Reveal>
              <figure className="relative">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image
                    src={`${IMG}/rio.webp`}
                    alt="Persona nadando en el río que cruza el camping"
                    fill
                    sizes="(min-width: 768px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="absolute bottom-0 inset-x-0 px-5 py-4"
                  style={{ background: 'linear-gradient(0deg, rgba(18,40,29,0.85), transparent)' }}
                >
                  <p className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: C.paper }}>
                    El río y el salto
                  </p>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.ochreLight }}>
                    Agua de cordillera
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-5 md:gap-7">
              <Reveal delay={120}>
                <figure className="relative">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <Image
                      src={`${IMG}/laguna.webp`}
                      alt="Laguna quieta del camping con reflejo de árboles"
                      fill
                      sizes="(min-width: 768px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="absolute bottom-0 inset-x-0 px-5 py-4"
                    style={{ background: 'linear-gradient(0deg, rgba(18,40,29,0.85), transparent)' }}
                  >
                    <p className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: C.paper }}>
                      La piscina
                    </p>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.ochreLight }}>
                      Para pasar la tarde entera
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={200}>
                <figure className="relative">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <Image
                      src={`${IMG}/orilla.webp`}
                      alt="Orilla rocosa del río con personas descansando"
                      fill
                      sizes="(min-width: 768px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="absolute bottom-0 inset-x-0 px-5 py-4"
                    style={{ background: 'linear-gradient(0deg, rgba(18,40,29,0.85), transparent)' }}
                  >
                    <p className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: C.paper }}>
                      La orilla
                    </p>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.ochreLight }}>
                      Rocas, sombra y pozones
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El día: jornada del campista ── */}
      <section id="dia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Timbre>Un día acá</Timbre>
          <h2
            className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl mb-12 md:mb-16`}
            style={{ color: C.deep }}
          >
            La jornada
            <span style={{ color: C.ochreDeep }}> completa</span>
          </h2>
        </Reveal>
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[13px] md:left-[17px] top-2 bottom-8 w-px"
            style={{ backgroundColor: C.line }}
          />
          {JORNADA.map((j, i) => (
            <li key={j.hora} className="relative pl-12 md:pl-16 pb-12 md:pb-16 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: C.pine }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.ochre }} />
              </span>
              <Reveal delay={i * 80}>
                <div className="grid md:grid-cols-[1fr_320px] gap-5 md:gap-10 items-center">
                  <div>
                    <p
                      className={`${mono.className} text-[11px] uppercase tracking-[0.28em] font-semibold mb-2`}
                      style={{ color: C.ochreDeep }}
                    >
                      {j.hora}
                    </p>
                    <h3
                      className={`${display.className} uppercase text-2xl md:text-4xl mb-3`}
                      style={{ color: C.deep }}
                    >
                      {j.titulo}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
                      {j.texto}
                    </p>
                  </div>
                  <div className="relative overflow-hidden aspect-[16/10] md:aspect-[4/3]">
                    <Image
                      src={j.src}
                      alt={j.alt}
                      fill
                      sizes="(min-width: 768px) 320px, calc(100vw - 5.5rem)"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Sitios + ficha ── */}
      <section id="sitios" className="scroll-mt-20" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src={`${IMG}/sitios.webp`}
                alt="Sitio de camping con carpas, mesa de picnic y sombra de árboles"
                fill
                sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Timbre light>Sitios y quinchos</Timbre>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-4xl md:text-5xl mb-7`}
              style={{ color: C.paper }}
            >
              Tu sitio
              <br />
              <span style={{ color: C.ochreLight }}>bajo los árboles</span>
            </h2>
            <ul className="space-y-3.5 mb-8">
              {FICHA.map((f) => (
                <li key={f} className="flex gap-3.5 items-start">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: C.ochre }}
                  />
                  <span className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,247,234,0.88)' }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_GRUPO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase inline-block tracking-[0.06em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.ochre, color: C.night }}
            >
              Venir con mi grupo →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
            <div>
              <Timbre>Lo que dicen</Timbre>
              <h2
                className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl`}
                style={{ color: C.deep }}
              >
                Reseñas de
                <br />
                <span style={{ color: C.pine }}>quienes fueron</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.ochreDeep} className="w-5 h-5" />
              <p className={`${mono.className} text-sm font-semibold`} style={{ color: C.ink }}>
                {BIZ.rating.toFixed(1)} de 5 · {BIZ.reviews} reseñas
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.quien} delay={i * 110}>
              <figure
                className="h-full p-6 md:p-7 border"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <blockquote
                  className="text-[15px] md:text-base leading-relaxed mb-5"
                  style={{ color: C.ink }}
                >
                  “{r.texto}”
                </blockquote>
                <figcaption
                  className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-semibold border-t pt-3.5`}
                  style={{ color: C.muted, borderColor: C.line }}
                >
                  {r.quien} · Reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44`}
            style={{ color: C.pine, textDecorationColor: C.ochre }}
          >
            Leer todas las reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Visita: ticket de temporada + mapa ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Ticket>
              <p
                className={`${mono.className} text-[10px] uppercase tracking-[0.28em] font-semibold mb-3 text-center`}
                style={{ color: C.muted }}
              >
                Ticket de temporada
              </p>
              <p
                className={`${display.className} uppercase text-center text-3xl md:text-4xl leading-none mb-1`}
                style={{ color: C.deep }}
              >
                Salto El León
              </p>
              <p
                className={`${mono.className} text-[10px] uppercase tracking-[0.2em] text-center mb-7`}
                style={{ color: C.muted }}
              >
                Vilches · San Clemente · Maule
              </p>
              <ul
                className="space-y-3 border-y border-dashed py-5 mb-6"
                style={{ borderColor: C.line }}
              >
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold" style={{ color: C.ink }}>Temporada</span>
                  <span className={`${mono.className} text-sm`} style={{ color: C.pine }}>Verano</span>
                </li>
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold" style={{ color: C.ink }}>Sitios de camping</span>
                  <span className={`${mono.className} text-sm`} style={{ color: C.pine }}>Por orden de llegada</span>
                </li>
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold" style={{ color: C.ink }}>Entrada de día</span>
                  <span className={`${mono.className} text-sm`} style={{ color: C.pine }}>Valor por WhatsApp</span>
                </li>
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold" style={{ color: C.ink }}>Contacto directo</span>
                  <span className={`${mono.className} text-sm`} style={{ color: C.pine }}>{BIZ.phoneDisplay}</span>
                </li>
              </ul>
              <a
                href={WA_LINK_DIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase block text-center tracking-[0.06em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.pine, color: C.paper }}
              >
                Consultar temporada →
              </a>
            </Ticket>
          </Reveal>
          <Reveal delay={140}>
            <Timbre light>Cómo llegar</Timbre>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-4xl md:text-5xl mb-6`}
              style={{ color: C.paper }}
            >
              Camino
              <br />
              <span style={{ color: C.ochreLight }}>a Vilches</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-5" style={{ color: 'rgba(251,247,234,0.85)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, Región del {BIZ.region}
            </address>
            <p className="text-sm leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(251,247,234,0.7)' }}>
              El camino final es de tierra y piedra: conviene llegar con
              calma y de día. La ubicación exacta está en Google Maps.
            </p>
            <div className="overflow-hidden border" style={{ borderColor: 'rgba(217,142,50,0.35)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs font-semibold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.ochreLight }}
              >
                Abrir en Google Maps →
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs font-semibold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: 'rgba(251,247,234,0.75)' }}
              >
                Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night, color: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderColor: 'rgba(251,247,234,0.14)' }}
        >
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- insignia real del perfil */}
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-tight`}>{BIZ.name}</p>
              <p className="text-xs" style={{ color: 'rgba(251,247,234,0.6)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(251,247,234,0.65)' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igHandle}
            </a>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp ${BIZ.short}`} />
      <SitiazoStrip />
    </div>
  )
}
