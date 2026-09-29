import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

// De la fachada real: blanco de la casa, madera del letrero tallado,
// negro de las rejas y la tiza de la pizarra en la vereda.
const C = {
  papel: '#F4EEE1',
  tinta: '#282219',
  pizarra: '#2E2B22',
  tiza: '#EFE8D5',
  madera: '#7C4F27',
  maderaOsc: '#5C3A1B',
  suave: '#6F6250',
  linea: 'rgba(40,34,25,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-aldea-restaurante-chanco',
  title: 'La Aldea Restaurante — Almuerzos de la esquina, en Chanco',
  description:
    'Almuerzos caseros, empanadas y completos en Teniente Merino con Errázuriz, Chanco. La pizarra del día manda. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Los clásicos', href: '#platos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Las tablillas de madera que cuelgan en la puerta, tal cual se leen en la calle.
const TABLILLAS = ['Almuerzos', 'Empanadas', 'Completos', 'Churrascos']

// La pizarra de verdad, transcrita de la foto del letrero en la vereda.
const PIZARRA = [
  'Cazuela de vacuno',
  'Pavo arvejado',
  'Pollo arvejado',
  'Guatitas',
  'Carne mechada',
  'Chuleta asada',
  'Pavo asado',
  'Pollo asado',
  'Merluza frita',
]

const CLASICOS = [
  {
    src: `${IMG}/empanada.webp`,
    nombre: 'Empanada frita',
    detalle: 'Grande, dorada y con ensalada: la que sale en la foto de la mesa.',
    alt: 'Empanada frita grande con ensalada servida en plato',
  },
  {
    src: `${IMG}/cazuela.webp`,
    nombre: 'Cazuela de la casa',
    detalle: 'Con su hueso, papas y choclo; caldo de olla de verdad.',
    alt: 'Cazuela de vacuno con papas, choclo y verduras',
  },
  {
    src: `${IMG}/papas.webp`,
    nombre: 'El plato del día',
    detalle: 'Lo que marca la pizarra, con su pan y su ensalada al lado.',
    alt: 'Plato del día con papas, salsa y pan',
  },
]

const RESENAS = [
  {
    texto: 'Sabor y experiencia espectaculares. De lejos, el mejor del sector.',
    nombre: 'Alejandro H.',
  },
  {
    texto: 'Excelente lugar para comer rico y barato, con muy buena atención y ambiente.',
    nombre: 'Eduardo Aravena Retamal',
  },
  {
    texto: 'Comida fresca, porciones generosas y un ambiente muy agradable. Muy recomendado.',
    nombre: 'Ignacio Vasquez',
  },
]

// Marco de madera, como el letrero tallado de la fachada.
function Marco({ src, alt, aspect = 'aspect-[4/3]', className = '' }: { src: string; alt: string; aspect?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${aspect} ${className}`}
      style={{
        border: `6px solid ${C.madera}`,
        outline: `1px solid rgba(239,232,213,0.5)`,
        outlineOffset: '-7px',
        boxShadow: '8px 8px 0 rgba(40,34,25,0.18)',
      }}
    >
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
    </div>
  )
}

// Tablilla de madera tallada, como las que cuelgan de la puerta.
function Tablilla({ texto, delay = 0 }: { texto: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div
        className={`${display.className} text-center font-semibold uppercase tracking-[0.3em] text-sm md:text-base py-3 px-6`}
        style={{
          background: `linear-gradient(180deg, #8A5A2E 0%, ${C.madera} 45%, ${C.maderaOsc} 100%)`,
          color: '#F0E4C8',
          boxShadow: '0 4px 10px rgba(40,34,25,0.3), inset 0 1px 0 rgba(240,228,200,0.35)',
          borderRadius: 3,
        }}
      >
        {texto}
      </div>
    </Reveal>
  )
}

export default function Page() {
  return (
    <div className={body.className} style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: C.papel,
          ink: C.tinta,
          line: C.linea,
          btnBg: C.pizarra,
          btnInk: C.tiza,
        }}
      />

      {/* ── Hero: la esquina con letrero ── */}
      <section id="inicio" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-12 md:pt-40 md:pb-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] mb-5" style={{ color: C.madera }}>
                Chanco, Región del Maule
              </p>
              <h1 className={`${display.className} font-semibold text-[clamp(2.5rem,7vw,4.6rem)] leading-[1.04] mb-5`}>
                La esquina donde{' '}
                <em className="italic" style={{ color: C.madera }}>
                  almuerza Chanco
                </em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-7 max-w-md" style={{ color: C.suave }}>
                Almuerzos caseros, empanadas y completos. Lo que hay se lee
                en la pizarra de la vereda, como siempre.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.pizarra, color: C.tiza, borderRadius: 3 }}
                >
                  Reservar mesa por WhatsApp
                </a>
                <a
                  href="#pizarra"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold border-2 transition-transform active:scale-95 tap-44"
                  style={{ borderColor: C.madera, color: C.maderaOsc, borderRadius: 3 }}
                >
                  Ver la pizarra
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold tap-44"
                style={{ color: C.tinta }}
              >
                <Stars value={BIZ.rating} color={C.madera} />
                <span>
                  {BIZ.rating} en Google Maps · {BIZ.reviews} reseñas
                </span>
              </a>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Reveal delay={120}>
              <Marco
                src={`${IMG}/fachada.webp`}
                alt="Fachada de La Aldea: casa blanca con letrero de madera tallado, banderines chilenos y pizarra en la puerta"
                aspect="aspect-[4/5] md:aspect-[5/6]"
              />
            </Reveal>
          </div>
        </div>
        {/* Tablillas colgantes */}
        <div className="max-w-3xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {TABLILLAS.map((t, i) => (
              <Tablilla key={t} texto={t} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* ── La pizarra ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <h2 className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-4`} style={{ color: C.tiza }}>
                La pizarra{' '}
                <em className="italic" style={{ color: '#D9B88A' }}>
                  marca el día
                </em>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(239,232,213,0.7)' }}>
                Cada mañana se escribe a tiza lo que hay. Esta es la pizarra
                real de la vereda: cocina de olla y de sartén, sin vueltas.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {PIZARRA.map((p) => (
                  <li
                    key={p}
                    className={`${display.className} italic text-lg md:text-xl py-2 border-b`}
                    style={{ color: C.tiza, borderColor: 'rgba(239,232,213,0.15)' }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-6" delay={120}>
            <Marco
              src={`${IMG}/pizarra.webp`}
              alt="Pizarra de madera en la vereda con el menú del día escrito a tiza"
              aspect="aspect-[3/4]"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Los clásicos ── */}
      <section id="platos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-4`}>
              Los que se repiten{' '}
              <em className="italic" style={{ color: C.madera }}>
                porque funcionan
              </em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
              Fotos reales de la casa. Lo de siempre: empanada que no cabe en
              la mano, cazuela con hueso y el plato que marca la pizarra.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {CLASICOS.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 100}>
              <Marco src={p.src} alt={p.alt} />
              <h3 className={`${display.className} font-semibold text-xl mt-4`}>{p.nombre}</h3>
              <p className="text-sm leading-relaxed mt-1" style={{ color: C.suave }}>{p.detalle}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className="grid grid-cols-12 gap-8 items-center mt-14 md:mt-20">
            <div className="col-span-12 md:col-span-7">
              <Marco
                src={`${IMG}/letreros.webp`}
                alt="Tablillas de madera colgando en la vereda: almuerzos, empanadas, completos y churrascos"
                aspect="aspect-[16/10]"
              />
            </div>
            <div className="col-span-12 md:col-span-5">
              <h3 className={`${display.className} font-semibold text-2xl md:text-3xl leading-tight mb-4`}>
                Si cuelga en la puerta,{' '}
                <em className="italic" style={{ color: C.madera }}>
                  se hace aquí
                </em>
              </h3>
              <p className="text-base leading-relaxed" style={{ color: C.suave }}>
                Las tablillas de madera anuncian lo de siempre: almuerzos al
                mediodía, empanadas, completos y churrascos para el que pasa
                por la esquina de Teniente Merino.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: '#EAE2CF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.2rem)] leading-[1.05]`}>
                Los que ya comieron{' '}
                <em className="italic" style={{ color: C.madera }}>
                  lo cuentan
                </em>
              </h2>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tap-44" style={{ color: C.tinta }}>
                <Stars value={BIZ.rating} color={C.madera} />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure
                  className="h-full p-6 border"
                  style={{ backgroundColor: C.papel, borderColor: C.madera, borderRadius: 3 }}
                >
                  <blockquote className={`${display.className} text-lg leading-relaxed mb-5`}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-sm" style={{ color: C.suave }}>
                    <span className="font-bold block" style={{ color: C.tinta }}>{r.nombre}</span>
                    Reseña en Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-8 md:gap-12 items-stretch">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <Reveal>
              <h2 className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] mb-6`} style={{ color: C.tiza }}>
                En la esquina,{' '}
                <em className="italic" style={{ color: '#D9B88A' }}>
                  con letrero de madera
                </em>
              </h2>
              <address className="not-italic space-y-4 mb-8">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Horario', BIZ.hours],
                  ['Teléfono', BIZ.phoneDisplay],
                ].map(([k, v]) => (
                  <p key={k} className="text-base leading-relaxed" style={{ color: 'rgba(239,232,213,0.7)' }}>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] mb-0.5" style={{ color: '#D9B88A' }}>
                      {k}
                    </span>
                    {v}
                  </p>
                ))}
              </address>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.tiza, color: C.pizarra, borderRadius: 3 }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold border-2 transition-transform active:scale-95 tap-44"
                  style={{ borderColor: 'rgba(239,232,213,0.4)', color: C.tiza, borderRadius: 3 }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <div
              className="relative w-full overflow-hidden border-4 aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]"
              style={{ borderColor: C.madera }}
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#1E1B14', color: C.tiza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-semibold text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(239,232,213,0.65)' }}>
            {BIZ.address}, {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
            {' · '}
            {BIZ.hours}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(239,232,213,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(239,232,213,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.tiza }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#D9B88A' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
