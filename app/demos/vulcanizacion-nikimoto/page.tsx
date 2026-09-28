import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  negro: '#17181A',
  negroSoft: '#202226',
  amarillo: '#FFC300',
  acero: '#8A9199',
  blanco: '#FFFFFF',
  line: 'rgba(255,255,255,0.12)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC300]'

const hazard = {
  backgroundImage: `repeating-linear-gradient(-45deg, ${C.amarillo} 0 14px, ${C.negro} 14px 28px)`,
}

export const metadata: Metadata = demoMetadata({
  slug: 'vulcanizacion-nikimoto',
  title: 'Vulcanizacion nikimoto — Taller de motos en Pelarco',
  description: 'Taller de motos y vulcanización en Pelarco, Región del Maule. Rectificados, baterías, pinchazos y puesta a punto con atención directa. Escribe por WhatsApp.',
  image: '/demos/vulcanizacion-nikimoto/hero.webp',
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'El taller', href: '#taller' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

type Tile = {
  src: string
  alt: string
  n: string
  name: string
  desc: string
  span: string
}

const TRABAJOS: Tile[] = [
  {
    src: `${IMG}/piston.webp`,
    alt: 'Pistón ya rectificado y listo para montar, en el taller Nikimoto de Pelarco',
    n: '01',
    name: 'Rectificado de pistones',
    desc: 'Cilindros y pistones rectificados en el torno del taller, listos para montar.',
    span: 'col-span-2 row-span-3 md:col-span-4 md:row-span-3',
  },
  {
    src: `${IMG}/torno.webp`,
    alt: 'Pieza de moto en el torno del taller Nikimoto, en Pelarco',
    n: '02',
    name: 'Trabajo en torno',
    desc: 'Rectificados y piezas ajustadas a medida, hechos acá mismo.',
    span: 'col-span-1 row-span-2 md:col-span-2 md:row-span-2',
  },
  {
    src: `${IMG}/moto-r15.webp`,
    alt: 'Moto deportiva azul en el taller: instalación de batería nueva',
    n: '03',
    name: 'Baterías y puesta a punto',
    desc: 'Baterías nuevas para motos y cuatrimotos, instaladas al momento.',
    span: 'col-span-1 row-span-2 md:col-span-3 md:row-span-2',
  },
  {
    src: `${IMG}/filtro.webp`,
    alt: 'Filtro de aire amarillo nuevo sobre la mesa de trabajo del taller',
    n: '04',
    name: 'Filtros y mantención',
    desc: 'Aceite, filtros y repuestos para mantener la moto al día.',
    span: 'col-span-2 row-span-2 md:col-span-3 md:row-span-2',
  },
]

const PRECIOS = [
  { name: 'Reparación de pinchazo', note: 'moto / auto / camioneta' },
  { name: 'Rectificado de cilindro o pistón', note: 'en el torno del taller' },
  { name: 'Batería nueva instalada', note: 'motos y cuatrimotos' },
  { name: 'Cambio de aceite y filtros', note: 'según kilometraje' },
  { name: 'Puesta a punto general', note: 'frenos, tensado y revisión' },
  { name: 'Diagnóstico', note: 'antes de cualquier trabajo' },
]

function Caption({ t }: { t: Tile }) {
  return (
    <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/85 via-black/55 to-transparent">
      <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: C.amarillo }}>
        {t.n}
      </span>
      <p className={`${display.className} text-lg md:text-2xl font-bold leading-tight mt-1`}>{t.name}</p>
      <p className="text-[13px] md:text-sm leading-snug mt-1 max-w-md" style={{ color: '#D5D8DC' }}>
        {t.desc}
      </p>
    </figcaption>
  )
}

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}

export default function VulcanizacionNikimotoPage() {
  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.negro, color: C.blanco }}>
      <style>{`html{scroll-behavior:auto}`}</style>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(23,24,26,0.92)',
          ink: C.blanco,
          line: C.line,
          btnBg: C.amarillo,
          btnInk: C.negro,
        }}
      />

      {/* Hero a sangre */}
      <section className="relative min-h-[88svh] flex items-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Moto en el taller Nikimoto de Pelarco, con herramientas a un costado"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17181A] via-[#17181A]/60 to-[#17181A]/10" aria-hidden="true" />
        <div className="relative w-full max-w-6xl mx-auto px-5 pb-14 md:pb-20 pt-32">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-sm" style={{ backgroundColor: C.amarillo, color: C.negro }}>
            Taller de motos · Vulcanización · {BIZ.city}
          </p>
          <h1 className={`${display.className} mt-5 text-[2.6rem] leading-[0.95] sm:text-6xl md:text-8xl font-extrabold tracking-tight max-w-4xl`}>
            Rueda pinchada,
            <br />
            <span style={{ color: C.amarillo }}>se arregla hoy.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: '#D5D8DC' }}>
            Taller de motos y vulcanización en Pelarco. Te decimos qué tiene, cuánto sale y cuándo está lista. Sin vueltas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 min-h-[52px] px-6 rounded-sm font-semibold text-base transition-transform hover:-translate-y-0.5 ${focusRing} tap-44`}
              style={{ backgroundColor: C.amarillo, color: C.negro }}
            >
              <WaIcon /> Escribir por WhatsApp
            </a>
            <a
              href="#trabajos"
              className={`inline-flex items-center min-h-[52px] px-6 rounded-sm font-semibold border ${focusRing} tap-44`}
              style={{ borderColor: 'rgba(255,255,255,0.35)' }}
            >
              Ver trabajos
            </a>
          </div>
        </div>
      </section>

      <div className="h-3" style={hazard} aria-hidden="true" />

      {/* Trabajos: mosaico */}
      <section id="trabajos" className="max-w-6xl mx-auto px-5 py-16 md:py-24 scroll-mt-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className={`${display.className} text-4xl md:text-6xl font-extrabold tracking-tight`}>
              Lo que sale del taller
            </h2>
            <p className="text-xs uppercase tracking-[0.18em]" style={{ color: C.acero }}>
              Fotos reales de @{BIZ.instagram}
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] md:auto-rows-[170px] gap-2 md:gap-3">
          {TRABAJOS.slice(0, 2).map((t) => (
            <figure key={t.n} className={`relative overflow-hidden rounded-sm group ${t.span}`}>
              <Image src={t.src} alt={t.alt} fill sizes="(min-width: 768px) 66vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <Caption t={t} />
            </figure>
          ))}
          <div className="col-span-1 row-span-1 md:col-span-2 rounded-sm p-4 md:p-5 flex items-center gap-4 overflow-hidden" style={{ backgroundColor: C.amarillo, color: C.negro }}>
            <div className="min-w-0">
              <span className="font-mono text-[11px] tracking-[0.2em]">NOTA</span>
              <p className={`${display.className} text-lg md:text-2xl font-bold leading-tight`}>
                Primero el diagnóstico, después el trabajo.
              </p>
            </div>
            <figure className="relative hidden md:block shrink-0 w-[104px] aspect-square rounded-sm overflow-hidden ml-auto">
              <Image src={`${IMG}/pato.webp`} alt="El pato con casco de la vitrina del taller Nikimoto" fill sizes="104px" className="object-cover" />
            </figure>
          </div>
          {TRABAJOS.slice(2).map((t) => (
            <figure key={t.n} className={`relative overflow-hidden rounded-sm group ${t.span}`}>
              <Image src={t.src} alt={t.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <Caption t={t} />
            </figure>
          ))}
        </div>
      </section>

      {/* El taller */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.negroSoft }}>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[minmax(150px,auto)] gap-2 md:gap-3">
            <Reveal className="col-span-2 md:col-span-4 md:row-span-2">
              <div className="h-full rounded-sm border p-6 md:p-10 flex flex-col justify-between gap-8" style={{ borderColor: C.line }}>
                <span className="text-xs uppercase tracking-[0.18em]" style={{ color: C.acero }}>
                  El taller · {BIZ.city}, {BIZ.region}
                </span>
                <div>
                  <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.02]`}>
                    Un taller de Pelarco, <span style={{ color: C.amarillo }}>atendido directo.</span>
                  </h2>
                  <p className="mt-5 max-w-xl leading-relaxed" style={{ color: '#C9CDD2' }}>
                    Hablas con quien va a meter las manos en la moto. Te mostramos la pieza gastada, te damos el valor antes de partir y te avisamos por WhatsApp cuando está lista.
                  </p>
                </div>
              </div>
            </Reveal>
            <figure className="relative col-span-2 md:col-span-2 md:row-span-2 min-h-[260px] overflow-hidden rounded-sm">
              <Image src={`${IMG}/taller.webp`} alt="Interior del taller Nikimoto en Pelarco, con motos y gente trabajando" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </figure>
            {[
              { k: 'Directo', v: 'Sin intermediarios: presupuesto y trabajo con la misma persona.' },
              { k: 'Claro', v: 'El valor se conversa antes de empezar, no al retirar la moto.' },
              { k: 'Rápido', v: 'Los pinchazos y las baterías no esperan turno de una semana.' },
            ].map((x) => (
              <div key={x.k} className="col-span-2 md:col-span-2 rounded-sm p-5 border" style={{ borderColor: C.line }}>
                <p className={`${display.className} text-2xl font-bold`} style={{ color: C.amarillo }}>{x.k}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#C9CDD2' }}>{x.v}</p>
              </div>
            ))}
            <div
              className="col-span-1 md:col-span-3 rounded-sm p-5 flex flex-col justify-between"
              style={{ backgroundColor: C.blanco, color: C.negro }}
            >
              <span className="text-xs uppercase tracking-[0.18em] text-neutral-600">Instagram</span>
              <p className={`${display.className} text-3xl md:text-4xl font-extrabold`}>{BIZ.instagramFollowers}</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17181A] tap-44"
              >
                seguidores en @{BIZ.instagram}
              </a>
            </div>
            <div className="col-span-1 md:col-span-3 rounded-sm p-5 flex flex-col justify-between gap-4 border" style={{ borderColor: C.line }}>
              <span className="text-xs uppercase tracking-[0.18em]" style={{ color: C.acero }}>Google Maps</span>
              <div>
                <p className={`${display.className} text-3xl md:text-4xl font-extrabold leading-none`}>
                  {BIZ.rating} <span style={{ color: C.amarillo }}>★</span>
                </p>
                <p className="mt-1 text-sm" style={{ color: '#C9CDD2' }}>{BIZ.reviews} reseñas en Google</p>
                <blockquote className="mt-3 border-l-2 pl-3 text-sm leading-relaxed" style={{ borderColor: C.amarillo, color: '#C9CDD2' }}>
                  “Buena atención y rapidez en el trabajo requerido.”
                  <cite className="block mt-1 not-italic text-xs" style={{ color: C.acero }}>— Luis Herrera, reseña de Google</cite>
                </blockquote>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm underline underline-offset-4 tap-44 ${focusRing}`}
                style={{ color: C.amarillo }}
              >
                Ver la ficha en Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="max-w-6xl mx-auto px-5 py-16 md:py-24 scroll-mt-20">
        <div className="grid md:grid-cols-6 gap-3">
          <Reveal className="md:col-span-2">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-sm" style={{ backgroundColor: C.amarillo, color: C.negro }}>
              Tabla de muestra
            </span>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-extrabold tracking-tight`}>Precios de referencia</h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#C9CDD2' }}>
              Así se vería la lista con los valores reales del taller. Mientras tanto, cotiza por WhatsApp con la marca y el modelo de la moto.
            </p>
          </Reveal>
          <ul className="md:col-span-4 border-t" style={{ borderColor: C.line }}>
            {PRECIOS.map((p) => (
              <li key={p.name} className="flex items-baseline justify-between gap-4 py-4 border-b" style={{ borderColor: C.line }}>
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: C.acero }}>{p.note}</p>
                </div>
                <span className="shrink-0 font-mono text-sm" style={{ color: C.amarillo }}>A consultar</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 pb-16 md:pb-24 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-3">
          <div
            className="md:col-span-3 md:row-span-2 rounded-sm p-7 md:p-10 flex flex-col justify-between gap-10"
            style={{ backgroundColor: C.amarillo, color: C.negro }}
          >
            <span className="font-mono text-[11px] tracking-[0.2em]">CONTACTO</span>
            <div>
              <p className={`${display.className} text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95]`}>
                ¿Pinchaste? Escríbenos.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 min-h-[52px] px-6 rounded-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17181A] tap-44"
                style={{ backgroundColor: C.negro, color: C.amarillo }}
              >
                <WaIcon /> WhatsApp {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="md:col-span-3 rounded-sm p-6 border flex flex-col justify-between gap-4" style={{ borderColor: C.line }}>
            <div>
              <span className="text-xs uppercase tracking-[0.18em]" style={{ color: C.acero }}>Dirección</span>
              <p className={`${display.className} mt-2 text-2xl font-bold`}>{BIZ.address}</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block text-sm underline underline-offset-4 ${focusRing} tap-44`} style={{ color: C.amarillo }}>
                Abrir en Google Maps
              </a>
            </div>
            <figure className="relative h-32 md:h-36 overflow-hidden rounded-sm">
              <Image src={`${IMG}/fachada.webp`} alt="Fachada del taller Nikimoto en la calle de Pelarco" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </figure>
          </div>
          <div className="md:col-span-3 relative min-h-[220px] overflow-hidden rounded-sm border" style={{ borderColor: C.line }}>
            <LazyMap
              src={MAPS_EMBED}
              title={`Mapa de ${BIZ.city}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full grayscale contrast-125"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Franja Sitiazo */}
      <footer>
        <div className="h-3" style={hazard} aria-hidden="true" />
        <div className="px-5 pt-8 pb-24 text-center text-sm" style={{ backgroundColor: C.negroSoft, color: C.acero }}>
          <p>
            <strong className="text-white">Sitio de ejemplo de Sitiazo</strong> para {BIZ.name}. Servicios, textos y tabla de precios son de muestra.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {BIZ.name} · {BIZ.city}, {BIZ.region}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </main>
  )
}
