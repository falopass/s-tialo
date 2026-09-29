import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, PHOTO, PHOTOS, RESENAS } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})

/**
 * Dirección de arte: «la nave de los arcos» — la sala de Body Fitness es
 * una nave industrial cruzada por arcos naranjos, y ese arco se vuelve el
 * motivo del demo: el nombre va enmarcado en un arco y las fotos de la
 * sala se cuelgan en marcos con arco, como ventanales del galpón. Fierro
 * negro, naranjo del local y humo.
 */
const C = {
  ink: '#0C0C0E',
  arco: '#F2621C',
  arcoTxt: '#FF8A4C',
  card: '#17181C',
  humo: '#F5F2EC',
  dim: 'rgba(245,242,236,0.72)',
  faint: 'rgba(245,242,236,0.55)',
  lineLight: 'rgba(245,242,236,0.18)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'gimnasio-body-fitness-talca',
  title: 'Gimnasio Body Fitness Talca — El clásico de Talca',
  description: 'Gimnasio en Talca con máquinas de entrenamiento y pesas. 4,7★ en 269 reseñas. Lun–Vie 07:00–23:00. Consulta por WhatsApp.',
  image: PHOTO,
})

const ENCUENTRAS = [
  {
    num: '01',
    name: 'Máquinas de entrenamiento',
    desc: 'Sala equipada con máquinas para cada grupo muscular, bien mantenidas: lo que más repiten quienes entrenan acá.',
  },
  {
    num: '02',
    name: 'Pesas',
    desc: 'Zona de pesas para entrenar fuerza a la vieja escuela: el segundo pilar del gimnasio según su ficha y sus reseñas.',
  },
  {
    num: '03',
    name: 'Horario amplio',
    desc: 'De lunes a viernes abre de 07:00 a 23:00: entrenas antes del trabajo, en la tarde o en la noche.',
  },
]

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-bold`} style={{ color: C.arcoTxt }}>
      {children}
    </p>
  )
}

/** Marco con arco: la firma visual del local, trasladada a cada foto. */
function Arco({ src, alt, sizes, caption }: { src: string; alt: string; sizes: string; caption: string }) {
  return (
    <figure className="border h-full flex flex-col" style={{ borderColor: C.lineLight, backgroundColor: C.card }}>
      <div
        className="relative aspect-[3/4] overflow-hidden"
        style={{ borderRadius: '999px 999px 0 0' }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption
        className="px-4 py-2.5 border-t text-[10px] uppercase tracking-[0.18em] font-bold flex items-center justify-between gap-2"
        style={{ borderColor: C.lineLight, color: C.faint }}
      >
        <span>{caption}</span>
        <span style={{ color: C.arcoTxt }}>Maps</span>
      </figcaption>
    </figure>
  )
}

export default function BodyFitnessPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.ink, color: C.humo }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero con foto a sangre + nombre dentro del arco ── */}
        <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
          <Image
            src={PHOTO}
            alt={BIZ.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(12,12,14,0.78) 0%, rgba(12,12,14,0.55) 42%, rgba(12,12,14,0.95) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-12 md:pb-14">
            <Reveal>
              {/* el nombre dentro del arco del galpón */}
              <div
                className="max-w-xl border-2 px-7 md:px-10 pt-12 md:pt-16 pb-8 md:pb-10 text-center"
                style={{ borderColor: 'rgba(242,98,28,0.85)', borderRadius: '999px 999px 0 0', backgroundColor: 'rgba(12,12,14,0.55)' }}
              >
                <Label>Gimnasio en Talca · a la vieja escuela</Label>
                <h1
                  className={`${display.className} uppercase leading-[0.92] text-[clamp(3.2rem,13vw,7.5rem)] mt-4 mb-5`}
                  style={{ color: C.humo }}
                >
                  Body<br />
                  <span style={{ color: C.arco }}>Fitness</span>
                </h1>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-bold tap-44 ${focusRing}`}
                  style={{ color: C.humo }}
                >
                  <Stars value={BIZ.rating} color={C.arco} />
                  {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google →
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.arco, color: C.ink }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(245,242,236,0.5)', color: C.humo }}
                >
                  Cómo llegar
                </a>
                <span className="inline-flex items-center gap-2 px-4 py-2 border text-xs md:text-sm font-semibold uppercase tracking-[0.1em]" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(12,12,14,0.55)', color: C.humo }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.arco }} aria-hidden="true" />
                  Lun–Vie 07:00–23:00
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Banda ── */}
        <div className="overflow-hidden border-y" style={{ borderColor: 'rgba(242,98,28,0.45)', backgroundColor: C.ink }} aria-hidden="true">
          <p className={`${display.className} uppercase whitespace-nowrap text-2xl md:text-4xl py-3 px-4`} style={{ color: C.arco }}>
            Fierro · Máquinas · Pesas · Talca · Fierro · Máquinas · Pesas · Talca · Fierro · Máquinas · Pesas · Talca
          </p>
        </div>

        {/* ── 01 Qué encuentras ── */}
        <section id="equipamiento" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.humo }}>
                <Label><span style={{ color: C.humo }}>N°01</span> — Qué encuentras</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.faint }}>
                  según su ficha y reseñas
                </p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`} style={{ color: C.humo }}>
                Uno va a entrenar
                <br />
                <span style={{ color: C.arco }}>y ya</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ENCUENTRAS.map((e, i) => (
                <Reveal key={e.name} delay={i * 80} className="h-full">
                  <article
                    className="h-full border p-6 md:p-7 flex flex-col"
                    style={{ borderColor: C.lineLight, backgroundColor: C.card }}
                  >
                    <span className={`${display.className} text-lg mb-8`} style={{ color: 'rgba(245,242,236,0.62)' }}>{e.num}</span>
                    <h3 className={`${display.className} uppercase text-2xl md:text-[28px] leading-tight mb-3`} style={{ color: C.humo }}>
                      {e.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.dim }}>
                      {e.desc}
                    </p>
                    <span className="mt-auto pt-6 block w-10 h-1" style={{ backgroundColor: C.arco }} aria-hidden="true" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 La nave: la sala en marcos con arco ── */}
        <section id="nave" className="scroll-mt-20 border-t" style={{ borderColor: C.lineLight }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.humo }}>
                <Label><span style={{ color: C.humo }}>N°02</span> — La nave</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.faint }}>
                  fotos reales de su ficha
                </p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`} style={{ color: C.humo }}>
                La nave
                <br />
                <span style={{ color: C.arco }}>de los arcos</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {PHOTOS.map((p, i) => (
                <Reveal key={p.src} delay={i * 90} className="h-full">
                  <Arco
                    src={p.src}
                    alt={p.alt}
                    caption={`${String(i + 1).padStart(2, '0')} — ${p.caption}`}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: C.faint }}>
                Fotos publicadas por el gimnasio en su ficha de Google Maps · Body Fitness · Talca
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 03 Reseñas ── */}
        <section id="resenas" className="scroll-mt-20 border-t" style={{ borderColor: C.lineLight }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 md:gap-14 items-start">
              <Reveal>
                <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-8" style={{ borderColor: C.humo }}>
                  <Label><span style={{ color: C.humo }}>N°03</span> — Reseñas</Label>
                </div>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className={`${display.className} text-7xl md:text-8xl leading-none`} style={{ color: C.arco }}>
                    {BIZ.ratingLabel}
                  </span>
                  <Stars value={BIZ.rating} color={C.arco} className="w-5 h-5" />
                </div>
                <h2 className={`${display.className} uppercase text-3xl md:text-4xl leading-[0.95] mb-4`} style={{ color: C.humo }}>
                  Lo que dicen
                  <br />
                  los que entrenan
                </h2>
                <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: C.dim }}>
                  {BIZ.reviews} reseñas en Google. Lo que más se repite: las
                  máquinas, el ambiente vieja escuela y que está en el centro.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.arco, color: C.ink }}
                >
                  Leerlas en Google →
                </a>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-5">
                {RESENAS.map((r, i) => (
                  <Reveal key={r.autor} delay={i * 90} className="h-full">
                    <figure className="h-full border p-5 md:p-6 flex flex-col" style={{ borderColor: C.lineLight, backgroundColor: C.card }}>
                      <Stars value={r.estrellas} color={C.arco} className="w-3.5 h-3.5" />
                      <blockquote className="text-sm leading-relaxed mt-3 mb-4 flex-1" style={{ color: C.humo }}>
                        “{r.texto}”
                      </blockquote>
                      <figcaption className="text-[10px] uppercase tracking-[0.16em] font-bold border-t border-dashed pt-3" style={{ borderColor: C.lineLight, color: C.faint }}>
                        {r.autor} · reseña de Google · {r.fecha}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Horario y ubicación ── */}
        <section id="contacto" className="scroll-mt-20 border-t" style={{ borderColor: C.lineLight }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.humo }}>
                <Label><span style={{ color: C.humo }}>N°04</span> — Horario y ubicación</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.faint }}>
                  Pje. Cuatro Sur · Talca
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
              <Reveal>
                <div className="border h-full flex flex-col" style={{ borderColor: C.lineLight, backgroundColor: C.card }}>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.lineLight }}>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: C.arcoTxt }}>Dirección</p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.humo }}>
                      <strong className="font-bold">{BIZ.address}</strong>
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: C.arcoTxt, textDecorationColor: 'rgba(242,98,28,0.4)' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-6 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.arcoTxt }}>Horario</p>
                    <ul className="space-y-2.5">
                      {BIZ.hours.map((h) => (
                        <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                          <span className="font-bold" style={{ color: C.humo }}>{h.days}</span>
                          <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.lineLight }} aria-hidden="true" />
                          <span style={{ color: C.dim }}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.lineLight, backgroundColor: C.card }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, Talca`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.lineLight, color: C.faint }}>
                    Pje. Cuatro Sur 1565 · Talca · Maule
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre CTA naranjo arco ── */}
        <section style={{ backgroundColor: C.arco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.ink }}>
                Hoy es buen día
                <br />
                para entrenar
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.ink, color: C.humo }}
              >
                Consultar por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
