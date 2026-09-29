import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, FOTOS, HOURS, REVIEWS, TEMAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const MONO = 'ui-monospace, SFMono-Regular, monospace'

const C = {
  paper: '#F2F0E4',
  card: '#FAF8EE',
  forest: '#1E3D2F',
  forestDeep: '#152C21',
  terra: '#C4572E',
  terraDeep: '#9C3E1C',
  ink: '#22301F',
  muted: '#6A7263',
  line: 'rgba(30,61,47,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jardin-aleman',
  title: 'Jardín Alemán · Vivero y centro de jardín en Talca',
  description:
    'Jardín Alemán, Ruta 115 camino a San Clemente, Talca: plantas, flores, árboles frutales y decoración de jardín. 4,5 estrellas en 130 reseñas. Delivery disponible. Tel +56 71 224 2517.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#vivero' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Visítanos', href: '#visita' },
]

function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: C.terra }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:opacity-80 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} · así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:opacity-80 tap-44"
          >
            Escríbenos por WhatsApp
          </a>
        </span>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <SitiazoStrip />
      <BlitzNav
        name={
          <span className={display.className} style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.forest, btnInk: C.paper }}
        fontClass={body.className}
      />

      {/* ── Hero: foto del vivero + tarjeta crema superpuesta ── */}
      <section className="relative pt-20 md:pt-24">
        <div className="relative h-[58vh] min-h-[380px] md:h-[64vh] w-full">
          <Image
            src={`${IMG}/hero.webp`}
            alt={`Hileras de caléndulas bajo malla sombra en ${BIZ.name}, Talca`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="relative -mt-28 md:-mt-36">
            <div
              className="rounded-2xl p-6 md:p-9 max-w-xl shadow-xl"
              style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: C.terraDeep, fontFamily: MONO }}
              >
                Vivero · Ruta 115, Talca
              </p>
              <h1
                className={display.className}
                style={{
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 7vw, 3.4rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                  marginTop: 12,
                  color: C.forest,
                }}
              >
                El vivero de siempre, camino a San Clemente
              </h1>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <Stars value={BIZ.rating} color={C.terra} className="w-4 h-4" />
                <p className="text-sm font-semibold" style={{ color: C.ink }}>
                  {BIZ.ratingDisplay} en Google · {BIZ.reviews} reseñas
                </p>
              </div>
              <p className="mt-3 text-base" style={{ color: C.muted }}>
                Plantas, flores, frutales y decoración de jardín, con delivery en la zona.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44"
                  style={{ backgroundColor: C.forest, color: C.paper }}
                >
                  Llamar {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44 border"
                  style={{ borderColor: C.forest, color: C.forest }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="h-14 md:h-20" />
      </section>

      {/* ── Especies: grilla con etiquetas de colección ── */}
      <section id="vivero" className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-14">
        <Reveal>
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <h2
              className={display.className}
              style={{
                fontWeight: 700,
                fontSize: 'clamp(1.7rem, 5vw, 2.6rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: C.forest,
              }}
            >
              Lo que crece aquí
            </h2>
            <p className="text-sm max-w-xs" style={{ color: C.muted }}>
              Flores de temporada, suculentas, arbustos y árboles frutales en maceta · todo
              cultivado y seleccionado en el vivero.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {FOTOS.map((f, i) => (
            <Reveal key={f.src} delay={i * 80}>
              <figure>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={`${IMG}/${f.src}.webp`}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2">
                  <p
                    className="text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: C.terraDeep, fontFamily: MONO }}
                  >
                    {f.n}
                  </p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: C.ink }}>
                    {f.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Banda panorámica con cita ── */}
      <section className="relative">
        <div className="relative h-[46vh] min-h-[320px] w-full">
          <Image
            src={`${IMG}/panorama.webp`}
            alt={`Panorámica del vivero ${BIZ.name} con hileras de plantas en flor, Talca`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="relative -mt-24">
            <div
              className="rounded-2xl p-6 md:p-9 ml-auto max-w-lg"
              style={{ backgroundColor: C.forestDeep, color: C.card }}
            >
              <p className="text-lg md:text-xl leading-relaxed">
                “Parada obligada por más de 20 años. Siempre excelente atención, precios
                convenientes y amplia variedad de flores y árboles frutales.”
              </p>
              <p className="mt-4 text-sm" style={{ color: 'rgba(250,248,238,0.7)' }}>
                Jacqueline Cornejo · reseña en Google
              </p>
            </div>
          </Reveal>
        </div>
        <div className="h-12" />
      </section>

      {/* ── El paseo: animales y jardín ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <Reveal className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={`${IMG}/perico.webp`}
                alt={`Perico australiano que vive en ${BIZ.name}, Talca`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={100} className="relative aspect-square rounded-xl overflow-hidden mt-6 md:mt-10">
              <Image
                src={`${IMG}/jardin.webp`}
                alt={`Rincón decorado del jardín de exhibición en ${BIZ.name}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div>
              <h2
                className={display.className}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.08,
                  color: C.forest,
                }}
              >
                Más que un vivero: un paseo
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                El recorrido mezcla invernaderos, rincones decorados y animales que viven en el
                lugar. Los niños vienen a conocerlos mientras los grandes eligen plantas.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                También hay decoración para el jardín: maceteros, piedras, figuras y todo lo que
                hace falta para armar un rincón propio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" style={{ backgroundColor: C.forestDeep, color: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2
                  className={display.className}
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(1.7rem, 5vw, 2.6rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  Lo que repite la gente
                </h2>
                <div className="mt-3 flex items-center gap-2">
                  <Stars value={BIZ.rating} color={C.terra} className="w-4 h-4" />
                  <p className="text-sm font-semibold">
                    {BIZ.ratingDisplay} · {BIZ.reviews} reseñas en Google
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {TEMAS.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full"
                    style={{ border: `1px solid rgba(250,248,238,0.25)`, fontFamily: MONO }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-9 grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <blockquote
                  className="rounded-xl p-6 h-full flex flex-col"
                  style={{ backgroundColor: 'rgba(250,248,238,0.06)', border: '1px solid rgba(250,248,238,0.14)' }}
                >
                  <Stars value={r.stars} color={C.terra} className="w-4 h-4" />
                  <p className="mt-3 text-sm leading-relaxed flex-1">“{r.text}”</p>
                  <footer className="mt-4 text-[12px]" style={{ color: 'rgba(250,248,238,0.65)' }}>
                    {r.author} · {r.detail}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 tap-44"
              style={{ color: C.terra }}
            >
              Leer todas las reseñas en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Visita: horario + entrada + mapa ── */}
      <section id="visita" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className={display.className}
            style={{
              fontWeight: 700,
              fontSize: 'clamp(1.7rem, 5vw, 2.6rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: C.forest,
            }}
          >
            Ven a recorrerlo
          </h2>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-10">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div
                className="rounded-xl p-5 flex flex-col justify-between"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: C.terraDeep, fontFamily: MONO }}
                >
                  Horario
                </p>
                <dl className="mt-3 space-y-2.5 text-sm">
                  {HOURS.map((h, i) => (
                    <div key={i}>
                      {h.d && <dt className="font-semibold">{h.d}</dt>}
                      <dd style={{ color: C.muted }}>{h.h}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt={`Entrada de ${BIZ.name} sobre Ruta 115, Talca`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div
                className="col-span-2 rounded-xl p-5"
                style={{ backgroundColor: C.forest, color: C.card }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: C.terra, fontFamily: MONO }}
                >
                  Delivery
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  Llevan las plantas a domicilio por un costo adicional · se coordina por teléfono
                  al {BIZ.phoneDisplay}.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-2xl overflow-hidden h-full min-h-[340px]"
              style={{ border: `1px solid ${C.line}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name} en Ruta 115, Talca`}
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.terraDeep, color: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            <h2
              className={display.className}
              style={{
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 5.4vw, 2.8rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
              }}
            >
              Tu jardín empieza en la Ruta 115
            </h2>
            <p className="mt-4 text-base max-w-md mx-auto" style={{ color: 'rgba(250,248,238,0.85)' }}>
              {BIZ.addressLong} · consulta stock y delivery por teléfono.
            </p>
            <a
              href={CALL_LINK}
              className="inline-flex items-center justify-center h-[52px] px-8 mt-7 rounded-full font-semibold tap-44"
              style={{ backgroundColor: C.card, color: C.terraDeep }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.forestDeep, color: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm">
          <p className={display.className} style={{ fontWeight: 700 }}>
            {BIZ.name}
          </p>
          <p style={{ color: 'rgba(250,248,238,0.7)' }}>
            {BIZ.rubro} · {BIZ.addressLong} · {BIZ.region}
          </p>
          <p className="md:ml-auto text-[11px]" style={{ color: 'rgba(250,248,238,0.55)' }}>
            Mockup de{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Sitiazo
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.terra} fg={C.card} />
    </main>
  )
}
