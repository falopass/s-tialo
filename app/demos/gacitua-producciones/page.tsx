import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SiteNav, SiteFooter } from './chrome'
import { BIZ, IMG, PHOTOS, SERVICES, REVIEWS, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  green: '#1F3A2E',
  greenSoft: '#2C4A3B',
  cream: '#FAF6EE',
  creamSoft: '#F0E9DB',
  gold: '#B8893A',
  goldDeep: '#7A5A1E',
  ink: '#22302A',
  muted: '#5B6B62',
  line: 'rgba(31,58,46,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'gacitua-producciones',
  title: 'Gacitúa Producciones · Eventos y arriendo de vajilla en Talca',
  description:
    'Banquetería, arriendo de vajilla, mobiliario y producción de eventos en Villa Colín Sur, Talca. 5,0 estrellas en Google. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const GALLERY = [
  { ...PHOTOS.cocktail, name: 'Cóctel y picoteo' },
  { ...PHOTOS.salon, name: 'Mesas de salón' },
  { ...PHOTOS.pergola, name: 'Ceremonias al aire libre' },
]

const STEPS = [
  { name: 'Cuéntanos tu evento', desc: 'Fecha, cantidad de personas y tipo de evento, todo por WhatsApp.' },
  { name: 'Armamos tu propuesta', desc: 'Preparamos una propuesta con banquetería, vajilla y montaje a tu medida.' },
  { name: 'Montamos el día del evento', desc: 'Nuestro equipo llega, monta y deja cada detalle listo.' },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: C.goldDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function GacituaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <SiteNav fontClass={display.className} />

      {/* ── Hero ── */}
      <section id="inicio" className="relative flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.green }}>
        <Image
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,35,28,0.55) 0%, rgba(20,35,28,0.35) 40%, rgba(20,35,28,0.9) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-14 md:pb-20">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4 font-semibold" style={{ color: '#E8CFA0' }}>
              Eventos y arriendo de vajilla · Talca
            </p>
            <h1
              className={`${display.className} leading-[1.06] text-[clamp(2.2rem,8vw,4.6rem)] mb-5`}
              style={{ color: '#fff' }}
            >
              Tu evento, montado con cariño y hasta el último detalle
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Banquetería, vajilla, mobiliario y producción completa para
              matrimonios, celebraciones y eventos de empresa.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.gold, color: '#231A0A' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de confianza ── */}
      <section style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-12">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-semibold"
              style={{ color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.goldDeep} className="w-[15px] h-[15px]" />
              {BIZ.ratingLabel} en Google · {BIZ.reviews} reseñas
              <span aria-hidden="true" style={{ color: C.goldDeep }}>→</span>
            </a>
          </Reveal>
          <Reveal delay={100} className="md:ml-auto">
            <p className="text-sm font-medium flex items-center gap-2.5" style={{ color: C.ink }}>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.gold }} aria-hidden="true" />
              Villa Colín Sur, Talca
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Qué hacemos</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`}>
            Servicios
          </h2>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <li
                className="rounded-2xl p-6 md:p-7 border h-full"
                style={{ backgroundColor: '#fff', borderColor: C.line }}
              >
                <span
                  className={`${display.className} text-3xl leading-none block mb-4`}
                  style={{ color: C.goldDeep }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${display.className} text-xl mb-2`}>{s.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Galería ── */}
      <section id="galeria" className="scroll-mt-20" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Montajes reales</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`}>
              Galería
            </h2>
          </Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 80}>
                <li>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 640px) 30vw, 90vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium mt-3" style={{ color: C.ink }}>
                    {g.name}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Reseñas de Google</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08]`}>
              {BIZ.ratingLabel} de 5 estrellas
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Nota perfecta con {BIZ.reviews} reseñas: puntualidad, cariño
              y comida en abundancia son lo que más repiten.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 90}>
              <figure className="rounded-2xl border p-5 md:p-6 h-full flex flex-col" style={{ backgroundColor: '#fff', borderColor: C.line }}>
                <Stars value={5} color={C.goldDeep} className="w-[14px] h-[14px]" />
                <blockquote className="text-sm leading-relaxed mt-4 flex-1" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.16em] font-semibold mt-4" style={{ color: C.muted }}>
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
            className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2"
            style={{ color: C.goldDeep, textDecorationColor: 'rgba(122,90,30,0.4)' }}
          >
            Leer las reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo cotizar ── */}
      <section style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Sin formularios</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`}>
              Cómo cotizar
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <li className="rounded-2xl p-6 border h-full" style={{ backgroundColor: C.cream, borderColor: C.line }}>
                  <span
                    className={`${display.className} w-9 h-9 rounded-full flex items-center justify-center text-sm mb-4`}
                    style={{ backgroundColor: C.green, color: '#E8CFA0' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className={`${display.className} text-lg mb-1.5`}>{s.name}</h3>
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
            <Eyebrow>Ubicación</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.1] mb-6`}>
              En Villa Colín Sur, Talca
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.green, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(31,58,46,0.35)', color: C.green }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-3xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.creamSoft }}
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

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.green }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} text-[clamp(1.9rem,6vw,3.8rem)] leading-[1.05] mb-6`}
              style={{ color: '#fff' }}
            >
              Tu evento merece este nivel de detalle
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Cuéntanos la fecha y cuántas personas serán; armamos la
              propuesta contigo por WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-sm px-8 py-3.5 rounded-full transition-transform active:scale-95"
              style={{ backgroundColor: C.gold, color: '#231A0A' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter fontClass={display.className} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
