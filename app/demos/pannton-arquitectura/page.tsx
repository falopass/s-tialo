import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SiteNav, SiteFooter } from './chrome'
import { BIZ, IMG, WORKS, REVIEWS, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'

const paDisplay = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' }],
})
const paBody = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const paMono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

const C = {
  ink: '#1B140E',
  paper: '#FAF7F1',
  paperSoft: '#F0EAE0',
  brick: '#A83A10',
  brickSoft: '#C05122',
  muted: '#5C5347',
  line: 'rgba(27,20,14,0.14)',
  cyan: '#1D8FC2',
  magenta: '#C23377',
  yellow: '#E4A818',
}

export const metadata: Metadata = demoMetadata({
  slug: 'pannton-arquitectura',
  title: 'Pannton · Impresión y soluciones gráficas en Lomas de Lircay, Talca',
  description:
    'Taller de impresión y diseño en Lomas de Lircay, Talca: empastes, etiquetas, carnets y piezas personalizadas. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const STEPS = [
  { name: 'Envía tu archivo o idea', desc: 'Escríbenos por WhatsApp con tu archivo o cuéntanos qué necesitas.' },
  { name: 'Revisamos y confirmamos', desc: 'Revisamos el material contigo y confirmamos el trabajo antes de imprimir.' },
  { name: 'Retiras en el taller', desc: 'Te avisamos cuando esté listo y lo retiras en Lomas de Lircay.' },
]

const FAQS = [
  {
    q: '¿En qué formato envío mi archivo?',
    a: 'Lo ideal es PDF; también puedes enviar JPG o PNG en buena resolución. Si tu archivo está en otro formato, consulta por WhatsApp.',
  },
  {
    q: '¿Hacen tirajes pequeños?',
    a: 'Sí, trabajamos tirajes a medida. Cuéntanos cuántas copias necesitas y te cotizamos por WhatsApp.',
  },
  {
    q: '¿Dónde retiro mi pedido?',
    a: `En el taller: ${BIZ.address}, ${BIZ.city}. Te avisamos por WhatsApp cuando esté listo.`,
  },
]

/** Marcas de corte tipo registro de imprenta en las cuatro esquinas. */
function CropFrame({ children }: { children: React.ReactNode }) {
  const mark = 'absolute w-3.5 h-3.5 pointer-events-none'
  return (
    <div className="relative p-3.5">
      <span aria-hidden="true" className={`${mark} top-0 left-0 border-t-2 border-l-2`} style={{ borderColor: C.ink }} />
      <span aria-hidden="true" className={`${mark} top-0 right-0 border-t-2 border-r-2`} style={{ borderColor: C.ink }} />
      <span aria-hidden="true" className={`${mark} bottom-0 left-0 border-b-2 border-l-2`} style={{ borderColor: C.ink }} />
      <span aria-hidden="true" className={`${mark} bottom-0 right-0 border-b-2 border-r-2`} style={{ borderColor: C.ink }} />
      {children}
    </div>
  )
}

/** Barra de muestras C·M·Y·K segmentada. */
function CmykBar({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-1.5 ${className}`}>
      <span className="flex-1" style={{ backgroundColor: C.cyan }} />
      <span className="flex-1" style={{ backgroundColor: C.magenta }} />
      <span className="flex-1" style={{ backgroundColor: C.yellow }} />
      <span className="flex-1" style={{ backgroundColor: C.ink }} />
    </div>
  )
}

function Spec({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${paMono.className} text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-semibold`}
      style={{ color: light ? 'rgba(255,255,255,0.72)' : C.brick }}
    >
      {children}
    </p>
  )
}

export default function PanntonPage() {
  return (
    <div
      className={`${paBody.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <SiteNav fontClass={paDisplay.className} />

      {/* ── Hero: pliego editorial con marcas de corte ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-10 md:pb-16">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <Spec>Soluciones gráficas, arquitectura &amp; diseño · Talca</Spec>
              <h1
                className={`${paDisplay.className} font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.5rem,9vw,4.8rem)] mt-5 mb-6`}
              >
                Del archivo<br />
                al papel,<br />
                <span style={{ color: C.brickSoft }}>en Lomas de Lircay.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                Taller de impresión en Talca: empastes de tesis, etiquetas en
                rollo, carnets, cuadernos y piezas grabadas. Todo sale del
                mismo mesón de corte.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${paDisplay.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.brick, color: '#fff' }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#trabajos"
                  className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors tap-44"
                  style={{ borderColor: 'rgba(27,20,14,0.35)', color: C.ink }}
                >
                  Ver trabajos
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <CropFrame>
                <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.paperSoft }}>
                  <Image
                    src={`${IMG}/taller.webp`}
                    alt="Impresora de etiquetas del taller Pannton imprimiendo un rollo de adhesivos"
                    fill
                    priority
                    sizes="(min-width: 768px) 38vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 pt-3">
                  <Spec>Taller · Diez Oriente 3057</Spec>
                  <CmykBar className="w-20 shrink-0" />
                </div>
              </CropFrame>
            </Reveal>
          </div>
        </div>
        <CmykBar />
      </section>

      {/* ── Franja de confianza estilo ficha técnica ── */}
      <section style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-semibold tap-44"
              style={{ color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.brick} className="w-[15px] h-[15px]" />
              {BIZ.ratingLabel} de 5 · {BIZ.reviews} reseñas en Google
              <span aria-hidden="true" style={{ color: C.brick }}>→</span>
            </a>
          </Reveal>
          <Reveal delay={100} className="md:ml-auto">
            <p className={`${paMono.className} text-xs font-medium tracking-wide`} style={{ color: C.muted }}>
              LUN–VIE 9:00–13:15 / 15:00–18:30
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Trabajos: pliego de pruebas numerado ── */}
      <section id="trabajos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Spec>Salido del taller</Spec>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-8 md:mb-12">
            <h2 className={`${paDisplay.className} font-bold text-3xl md:text-5xl leading-[1.05]`}>
              Trabajos reales,<br />clientes reales
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Todo lo que se ve acá salió del taller: fotos publicadas por
              Pannton en su ficha de Google.
            </p>
          </div>
        </Reveal>
        <ul className="border-t" style={{ borderColor: C.line }}>
          {WORKS.map((w, i) => (
            <Reveal key={w.name} delay={40}>
              <li
                className="grid md:grid-cols-[70px_1fr_minmax(0,340px)] items-center gap-4 md:gap-8 py-6 md:py-8 border-b"
                style={{ borderColor: C.line }}
              >
                <span
                  className={`${paMono.className} text-2xl md:text-3xl font-semibold leading-none`}
                  style={{ color: C.brick }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className={`${paDisplay.className} font-semibold text-lg md:text-2xl leading-snug`}>
                    {w.name}
                  </h3>
                  <p className="text-sm leading-relaxed mt-1.5 max-w-md" style={{ color: C.muted }}>
                    {w.desc}
                  </p>
                </div>
                <CropFrame>
                  <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: C.paperSoft }}>
                    <Image
                      src={w.src}
                      alt={w.alt}
                      fill
                      sizes="(min-width: 768px) 340px, 92vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                </CropFrame>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Proceso ── */}
      <section style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Simple y por WhatsApp</Spec>
            <h2 className={`${paDisplay.className} font-bold text-3xl md:text-5xl leading-[1.05] mt-4 mb-10 md:mb-14`}>
              Cómo trabajamos
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <li className="border-t-2 pt-5 h-full" style={{ borderColor: C.ink }}>
                  <span
                    className={`${paMono.className} text-xs font-semibold tracking-[0.2em] mb-3 block`}
                    style={{ color: C.brick }}
                    aria-hidden="true"
                  >
                    PASO {i + 1}
                  </span>
                  <h3 className={`${paDisplay.className} font-semibold text-lg mb-1.5`}>{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Spec>Horario y ubicación</Spec>
            <h2 className={`${paDisplay.className} font-bold text-3xl md:text-4xl leading-[1.1] mt-4 mb-6`}>
              El taller está en Lomas de Lircay
            </h2>
            <dl className="border overflow-hidden mb-6" style={{ borderColor: C.line }}>
              {BIZ.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-baseline justify-between gap-4 px-4 py-3 border-b last:border-b-0"
                  style={{ borderColor: C.line, backgroundColor: '#fff' }}
                >
                  <dt className="text-sm font-semibold">{h.days}</dt>
                  <dd className={`${paMono.className} text-xs text-right`} style={{ color: C.muted }}>{h.time}</dd>
                </div>
              ))}
            </dl>
            <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.ink, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(27,20,14,0.35)', color: C.ink }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.paperSoft }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Reseñas de Google</Spec>
            <div className="flex flex-wrap items-end justify-between gap-6 mt-4 mb-10 md:mb-14">
              <h2 className={`${paDisplay.className} font-bold text-3xl md:text-5xl leading-[1.05]`}>
                {BIZ.ratingLabel} de 5 estrellas
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en su ficha de Google: rapidez, calidad
                y buena disposición para ayudar.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <figure className="border p-5 md:p-6 h-full flex flex-col" style={{ backgroundColor: '#fff', borderColor: C.line }}>
                  <Stars value={5} color={C.brick} className="w-[14px] h-[14px]" />
                  <blockquote className="text-sm leading-relaxed mt-4 flex-1" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${paMono.className} text-[10px] uppercase tracking-[0.18em] font-semibold mt-4`} style={{ color: C.muted }}>
                    Reseña en Google · {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.brick, textDecorationColor: 'rgba(168,58,16,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Spec>Antes de imprimir</Spec>
          <h2 className={`${paDisplay.className} font-bold text-3xl md:text-5xl leading-tight mt-4 mb-8`}>
            Preguntas frecuentes
          </h2>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.paperSoft, plusInk: C.brick }}
        />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.ink }}>
        <CmykBar />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Spec light>Pannton · Lomas de Lircay, Talca</Spec>
            <h2
              className={`${paDisplay.className} font-bold text-[clamp(2rem,7vw,4rem)] leading-[1.04] mt-5 mb-6`}
              style={{ color: '#fff' }}
            >
              Cotiza tu impresión hoy
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Envíanos tu archivo o idea por WhatsApp y te respondemos con
              una cotización.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${paDisplay.className} inline-block font-semibold text-sm px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: '#fff', color: C.ink }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter fontClass={paDisplay.className} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
