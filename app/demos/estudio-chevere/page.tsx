import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SiteNav, SiteFooter } from './chrome'
import { BIZ, IMG, SERVICIOS, FOTOS, REVIEWS, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'

const chDisplay = localFont({
  src: [{ path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' }],
})
const chBody = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})


const C = {
  ink: '#2B2119',
  cream: '#FAF3E7',
  creamDeep: '#F0E3CC',
  red: '#C8232B',
  redDeep: '#9E1B22',
  yellow: '#F5D70E',
  sepia: '#7A6A58',
  line: 'rgba(43,33,25,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'estudio-chevere',
  title: 'Foto Studio Chevere · Fotos e impresiones en el centro de Talca desde 1980',
  description:
    'El estudio fotográfico clásico de Talca: impresión desde tu celular, fotos carnet y postales históricas de la ciudad. 1 Sur esquina 4 Oriente.',
  image: `${IMG}/esquina.webp`,
})

const FAQS = [
  {
    q: '¿Puedo imprimir fotos directo desde mi celular?',
    a: 'Sí. En el local imprimen las fotos que traes en el teléfono, en el momento y en varios tamaños. Es el servicio que más se ve en la tienda.',
  },
  {
    q: '¿Hacen fotos carnet para documentos?',
    a: 'Sí: para cédula, pasaporte y trámites de visa. Es lo que más piden sus clientes y sale rápido.',
  },
  {
    q: '¿Venden fotos antiguas de Talca?',
    a: 'Tienen la colección de postales históricas de don Nicodemus: imágenes del centro y de lugares que ya no existen, en formato postal.',
  },
  {
    q: '¿Cuál es el horario?',
    a: 'La ficha declara lunes de 9:15 a 19:00. Para el resto de la semana, confirma por WhatsApp antes de ir.',
  },
]

function Spec({ children, color = C.red }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`font-mono text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-semibold`} style={{ color }}>
      {children}
    </p>
  )
}

/** Foto con borde de copia fotográfica y cinta adhesiva. */
function Print({
  src,
  alt,
  rotate = '',
  caption,
}: {
  src: string
  alt: string
  rotate?: string
  caption?: string
}) {
  return (
    <figure className={`relative bg-white p-2.5 pb-10 shadow-[0_10px_30px_rgba(43,33,25,0.18)] ${rotate}`}>
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 rotate-[-4deg]"
        style={{ backgroundColor: 'rgba(245,215,14,0.75)' }}
      />
      <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.creamDeep }}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 34vw, 88vw" className="object-cover" style={{ objectPosition: 'center 28%' }} />
      </div>
      {caption && (
        <figcaption className={`font-mono absolute bottom-2.5 left-0 right-0 text-center text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.sepia }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/** Tira de negativos con perforaciones. */
function FilmStrip({ children }: { children?: React.ReactNode }) {
  const hole = 'w-2.5 h-3 rounded-[2px] shrink-0'
  return (
    <div aria-hidden="true" className="overflow-hidden" style={{ backgroundColor: C.ink }}>
      <div className="py-1.5 flex justify-between px-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className={hole} style={{ backgroundColor: C.creamDeep }} />
        ))}
      </div>
      {children}
      <div className="py-1.5 flex justify-between px-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className={hole} style={{ backgroundColor: C.creamDeep }} />
        ))}
      </div>
    </div>
  )
}

export default function CheverePage() {
  return (
    <div className={`${chBody.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <SiteNav fontClass={chDisplay.className} />

      {/* ── Hero: copia fotográfica sobre fondo crema ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <Spec>Foto studio · {BIZ.address} · {BIZ.sinceLabel}</Spec>
              <h1 className={`${chDisplay.className} leading-[0.95] tracking-[0.01em] text-[clamp(3.2rem,13vw,6rem)] mt-5 mb-6`} style={{ color: C.red }}>
                La foto sale<br />
                al tiro<span style={{ color: C.ink }}>,</span><br />
                <span style={{ color: C.ink }}>como siempre.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.sepia }}>
                El estudio de fotos de la esquina de 1 Sur con 4 Oriente:
                impresión desde tu celular, fotos carnet en el momento y las
                postales históricas de Talca. Abierto {BIZ.sinceLabel}.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${chDisplay.className} text-sm tracking-wider uppercase px-7 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFF8E7' }}
                >
                  Imprimir por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className={`${chDisplay.className} text-sm tracking-wider uppercase px-7 py-3 border-2 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver servicios
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold tap-44"
                style={{ color: C.ink }}
              >
                <Stars value={BIZ.rating} color={C.red} className="w-[14px] h-[14px]" />
                {BIZ.ratingLabel} de 5 · {BIZ.reviews} opiniones en Google
              </a>
            </Reveal>
            <Reveal delay={140}>
              <Print
                src={FOTOS[0].src}
                alt={FOTOS[0].alt}
                rotate="rotate-[1.5deg]"
                caption="La esquina de 1 Sur con 4 Oriente"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <FilmStrip />

      {/* ── Servicios: fotogramas numerados ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Lo que hace el estudio</Spec>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-10 md:mb-14">
              <h2 className={`${chDisplay.className} text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
                De todo en fotos
              </h2>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.sepia }}>
                Lo que se ve en el local y repiten sus clientes en las
                reseñas: rápido, al precio justo y con criterio.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <li className="relative border-2 bg-white p-5 md:p-6 h-full" style={{ borderColor: C.ink }}>
                  <span
                    className={`font-mono absolute top-4 right-5 text-[10px] font-semibold tracking-[0.2em]`}
                    style={{ color: C.sepia }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}A
                  </span>
                  <h3 className={`${chDisplay.className} text-xl md:text-2xl leading-tight pr-14`} style={{ color: C.red }}>
                    {s.n}
                  </h3>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: C.sepia }}>
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Galería: hoja de contactos ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec color={C.yellow}>Hoja de contactos</Spec>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-10 md:mb-14">
              <h2 className={`${chDisplay.className} text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.cream }}>
                La esquina, tal cual
              </h2>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(250,243,231,0.7)' }}>
                Fotos reales publicadas en la ficha de Google: el edificio
                histórico, el letrero y don Nicodemus atendiendo.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-[6px]">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 50}>
                <li className="relative border" style={{ borderColor: 'rgba(250,243,231,0.25)' }}>
                  <span
                    className={`font-mono absolute top-1.5 left-1.5 z-10 text-[9px] font-semibold tracking-[0.15em] px-1.5 py-0.5`}
                    style={{ backgroundColor: C.ink, color: C.yellow }}
                  >
                    {String(i + 1).padStart(2, '0')}A
                  </span>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 31vw, 46vw" loading="lazy" className="object-cover" />
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Historia ── */}
      <section id="historia" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Print
                src={`${IMG}/dueno.webp`}
                alt={FOTOS[3].alt}
                rotate="rotate-[-1.5deg]"
                caption="Don Nicodemus en la puerta"
              />
            </Reveal>
            <Reveal delay={120}>
              <Spec>{BIZ.sinceLabel} · familia y fotografía</Spec>
              <h2 className={`${chDisplay.className} text-4xl md:text-6xl leading-[0.95] mt-4 mb-6`} style={{ color: C.ink }}>
                El Chévere<br />de Talca
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.sepia }}>
                <p>
                  Nicodemus González aprendió el oficio en el cuarto oscuro
                  de su tía, en Curicó. Llegó a Talca en los 70 y el
                  28 de julio de 1980 abrió su primer local: el apodo que
                  usaba para caer bien, “Chévere”, quedó como nombre.
                </p>
                <p>
                  En su mejor época vendían más de 500 rollos al día. El
                  terremoto de 2010 marcó la fachada que hoy es parte del
                  paisaje del centro; el local siguió atendiendo y la
                  prensa local los retrata como guardianes de la memoria
                  visual de Talca.
                </p>
                <p>
                  Junto a Teresa Ayala, su esposa, don Nicodemus sigue al
                  mostrador: fotos carnet al momento, impresiones desde el
                  celular y las postales antiguas que él mismo coleccionó.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${chDisplay.className} text-sm tracking-wider uppercase px-7 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFF8E7' }}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FilmStrip />

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Opiniones de Google</Spec>
            <div className="flex flex-wrap items-end justify-between gap-6 mt-4 mb-10 md:mb-14">
              <h2 className={`${chDisplay.className} text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
                {BIZ.ratingLabel} de 5 · {BIZ.reviews} opiniones
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {REVIEWS.map((r) => (
              <Reveal key={r.author}>
                <figure className="border-2 bg-white p-5 md:p-6 h-full flex flex-col" style={{ borderColor: C.ink }}>
                  <Stars value={5} color={C.red} className="w-[14px] h-[14px]" />
                  <blockquote className="text-sm leading-relaxed mt-4 flex-1">“{r.text}”</blockquote>
                  <figcaption className={`font-mono text-[10px] uppercase tracking-[0.18em] font-semibold mt-4`} style={{ color: C.sepia }}>
                    Reseña en Google · {r.author}
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
              className="inline-block mt-8 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.red, textDecorationColor: 'rgba(200,35,43,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Spec>Horario y dirección</Spec>
              <h2 className={`${chDisplay.className} text-4xl md:text-5xl leading-[0.95] mt-4 mb-6`} style={{ color: C.ink }}>
                La esquina del centro
              </h2>
              <dl className="border-2 overflow-hidden mb-6" style={{ borderColor: C.ink }}>
                {BIZ.hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-4 px-4 py-3 border-b last:border-b-0" style={{ borderColor: C.line, backgroundColor: '#fff' }}>
                    <dt className="text-sm font-bold">{h.days}</dt>
                    <dd className={`font-mono text-xs text-right`} style={{ color: C.sepia }}>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.sepia }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${chDisplay.className} text-sm tracking-wider uppercase px-6 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.ink, color: '#FFF8E7' }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${chDisplay.className} text-sm tracking-wider uppercase px-6 py-3 border-2 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="overflow-hidden border-2 min-h-[300px] md:min-h-0 h-full" style={{ borderColor: C.ink, backgroundColor: C.creamDeep }}>
                <LazyMap title={`Mapa: ${BIZ.name}, ${BIZ.address}`} src={MAPS_EMBED} className="w-full h-full min-h-[300px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20" style={{ backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Antes de ir</Spec>
            <h2 className={`${chDisplay.className} text-4xl md:text-6xl leading-[0.95] mt-4 mb-8`} style={{ color: C.ink }}>
              Preguntas frecuentes
            </h2>
          </Reveal>
          <FaqList items={FAQS} colors={{ q: C.ink, a: C.sepia, line: 'rgba(43,33,25,0.2)', plusBg: C.red, plusInk: '#FFF8E7' }} />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.red }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Spec color={C.yellow}>Foto Studio Chevere · 1 Sur esq. 4 Oriente</Spec>
            <h2 className={`${chDisplay.className} text-[clamp(2.4rem,8vw,5rem)] leading-[0.95] mt-5 mb-6`} style={{ color: '#FFF8E7' }}>
              Imprime hoy mismo
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(255,248,231,0.85)' }}>
              Escribe por WhatsApp, pregunta por lo que necesitas y pasa a
              retirar por el centro.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${chDisplay.className} inline-block text-sm tracking-wider uppercase px-8 py-3.5 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.yellow, color: C.ink }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter fontClass={chDisplay.className} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
