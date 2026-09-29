import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab } from '../demos/blitz-kit'
import LazyMap from '../demos/lazy-map'
import { SITE } from '@/lib/config'
import { RanchoNav } from './nav'
import { Galeria } from './galeria'
import { ConsultaForm } from './consulta-form'
import {
  BIZ,
  WA_LINK,
  WA_LINK_EVENTO,
  WA_LINK_PASEO,
  GEO,
  MAPS_DIR,
  MAPS_EMBED,
  MAPS_PLACE,
  LOGO,
  LOGO_H,
  NAV,
  HERO,
  RANCHO,
  EVENTOS,
  PISCINAS_CANCHAS,
  QUINCHOS_PASEOS,
  ALMUERZOS,
  HORARIO,
  GALERIA,
  RESENAS,
  UBICACION,
  CONTACTO,
  SEO,
  type Title,
} from './content'

const display = localFont({
  src: [{ path: '../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

/** Paleta desde el logo real: gris #585856 de base, rojo #E20411 de acento. */
const C = {
  paper: '#FBFAF7',
  card: '#FFFFFF',
  ink: '#2C2C28',
  gray: '#585856',
  muted: '#4A4A44',
  soft: '#EFEEE8',
  deep: '#22221E',
  red: '#E20411',
  redText: '#C40310',
  line: 'rgba(44,44,40,0.14)',
} as const

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  description: SEO.description,
  alternates: { canonical: SEO.path },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.path,
    siteName: 'Rancho Itahue',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    images: ['/demos/rancho-itahue/brand/og-image.png'],
  },
  robots: { index: true, follow: true },
}

const BASE = SITE.url.replace(/\/$/, '')

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EventVenue'],
  name: BIZ.name,
  description: SEO.description,
  url: `${BASE}${SEO.path}`,
  image: `${BASE}/demos/rancho-itahue/brand/og-image.png`,
  telephone: BIZ.phoneTel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BIZ.address,
    addressLocality: 'Molina',
    addressRegion: 'Maule',
    addressCountry: 'CL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
  hasMap: MAPS_PLACE,
  sameAs: [BIZ.instagram, BIZ.facebook],
}

/** Cuadrado rojo del logo, usado como marca de sección. */
function Mark({ light = false }: { light?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-flex items-center gap-2.5">
      <span className="w-2.5 h-2.5" style={{ backgroundColor: C.red }} />
      {light && <span className="w-2.5 h-2.5 bg-white" />}
    </span>
  )
}

function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
  id,
}: {
  eyebrow: string
  title: Title
  lead?: string
  dark?: boolean
  id?: string
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <Mark light={dark} />
        <p
          className="text-xs font-bold uppercase tracking-[0.22em]"
          style={{ color: dark ? 'rgba(255,255,255,0.75)' : C.redText }}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        id={id}
        className={`${display.className} mt-4 text-3xl md:text-5xl leading-[1.05] tracking-tight`}
        style={{ color: dark ? '#fff' : C.ink }}
      >
        <span className="block font-light">{title.light}</span>
        <span className="block font-extrabold">{title.bold}</span>
      </h2>
      {lead && (
        <p
          className="mt-4 text-base md:text-lg leading-relaxed"
          style={{ color: dark ? 'rgba(255,255,255,0.78)' : C.muted }}
        >
          {lead}
        </p>
      )}
    </div>
  )
}

function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="text-xs font-semibold px-3 py-1.5 rounded-full"
      style={
        dark
          ? { color: 'rgba(255,255,255,0.88)', border: '1px solid rgba(255,255,255,0.3)' }
          : { color: C.ink, backgroundColor: C.soft, border: `1px solid ${C.line}` }
      }
    >
      {children}
    </span>
  )
}

const BTN =
  'inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-bold transition-transform active:scale-95'

export default function RanchoItahuePage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <RanchoNav logoSrc={LOGO_H} links={NAV} waLink={WA_LINK} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="inicio"
        aria-labelledby="inicio-title"
        className="relative min-h-[100svh] flex items-end overflow-hidden scroll-mt-20"
      >
        <Image
          src={HERO.photo.src}
          alt={HERO.photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.62) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-32">
          {/* Bloque gris translúcido: eco del bloque gris del logo y
              garantía de contraste sobre cualquier foto. */}
          <div
            className="max-w-2xl relative rounded-2xl p-6 md:p-8"
            style={{
              backgroundColor: 'rgba(46,46,40,0.85)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          >
            <span
              aria-hidden="true"
              className="absolute -top-2 -right-2 w-5 h-5"
              style={{ backgroundColor: C.red }}
            />
            <div className="flex items-center gap-3">
              <span className="w-3 h-3" style={{ backgroundColor: C.red }} aria-hidden="true" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.24em] text-white/90">
                {HERO.eyebrow}
              </p>
            </div>
            <h1
              id="inicio-title"
              className={`${display.className} mt-4 uppercase leading-[0.9] text-white`}
            >
              <span className="block text-3xl md:text-5xl font-light tracking-[0.18em]">Rancho</span>
              <span className="block text-6xl md:text-8xl font-black tracking-tight">Itahue</span>
            </h1>
            <p className="mt-4 text-base md:text-xl font-semibold text-white">{HERO.tagline}</p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-white/85 max-w-xl">
              {HERO.lead}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_EVENTO}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN}
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#rancho"
                className={`${BTN} text-white`}
                style={{ border: '1.5px solid rgba(255,255,255,0.6)', backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
                Conocer el rancho
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-white/85">
              {BIZ.address}, {BIZ.city}
            </p>
          </div>
        </div>
      </section>

      {/* ── El rancho + cifras ───────────────────────────── */}
      <section id="rancho" aria-labelledby="rancho-title" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <SectionHead id="rancho-title" eyebrow={RANCHO.eyebrow} title={RANCHO.title} />
              <div className="mt-5 space-y-4">
                {RANCHO.paragraphs.map((t, i) => (
                  <p
                    key={i}
                    className={`text-base md:text-lg leading-relaxed ${i === 0 ? 'font-medium' : ''}`}
                    style={{ color: i === 0 ? C.ink : C.muted }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -top-2.5 -right-2.5 w-5 h-5 z-10"
                  style={{ backgroundColor: C.red }}
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={RANCHO.photo.src}
                    alt={RANCHO.photo.alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="py-10 md:py-14" style={{ backgroundColor: C.gray }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
              {RANCHO.cifras.map((c, i) => (
                <Reveal key={c.label} delay={i * 120}>
                  <div className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 w-2 h-2 shrink-0"
                      style={{ backgroundColor: C.red }}
                    />
                    <div>
                      <p className={`${display.className} text-4xl md:text-5xl font-extrabold text-white`}>
                        {c.value}
                      </p>
                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-white">
                        {c.unit}
                      </p>
                      <p className="mt-1 text-sm text-white/85 leading-snug">{c.label}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm text-white">
              Síguenos:{' '}
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 font-bold underline underline-offset-4"
              >
                Instagram {BIZ.instagramHandle}
              </a>
              {' · '}
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 font-bold underline underline-offset-4"
              >
                Facebook {BIZ.facebookName}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Eventos y banquetería ────────────────────────── */}
      <section
        id="eventos"
        aria-labelledby="eventos-title"
        className="scroll-mt-20 py-16 md:py-24"
        style={{ backgroundColor: C.deep }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              id="eventos-title"
              eyebrow={EVENTOS.eyebrow}
              title={EVENTOS.title}
              lead={EVENTOS.lead}
              dark
            />
          </Reveal>
          <Reveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {EVENTOS.types.map((t) => (
                <Chip key={t} dark>
                  {t}
                </Chip>
              ))}
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-10">
            {EVENTOS.espacios.map((e) => (
              <Reveal key={e.name}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={e.photos[0].src}
                    alt={e.photos[0].alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {e.photos.slice(1).map((p) => (
                    <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 23vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className={`${display.className} mt-5 text-2xl font-bold tracking-tight text-white`}>
                  {e.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/80">{e.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
              {EVENTOS.photos.map((p) => (
                <div key={p.src} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div
              className="mt-12 rounded-3xl p-6 md:p-10"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`${display.className} text-2xl md:text-4xl font-extrabold tracking-tight text-white`}>
                    {EVENTOS.banqueteria.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/85">
                    {EVENTOS.banqueteria.lead}
                  </p>
                  <a
                    href={WA_LINK_EVENTO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BTN} mt-6`}
                    style={{ backgroundColor: C.red, color: '#fff' }}
                  >
                    Cotizar un evento
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {EVENTOS.banqueteria.photos.map((p) => (
                    <div key={p.src} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 15vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Piscinas y canchas ───────────────────────────── */}
      <section
        id="piscinas-canchas"
        aria-labelledby="piscinas-title"
        className="scroll-mt-20 py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              id="piscinas-title"
              eyebrow={PISCINAS_CANCHAS.eyebrow}
              title={PISCINAS_CANCHAS.title}
              lead={PISCINAS_CANCHAS.lead}
            />
          </Reveal>
          <div className="mt-14 md:mt-20 space-y-16 md:space-y-24">
            {PISCINAS_CANCHAS.bloques.map((b, i) => (
              <article key={b.name} className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -top-2.5 -right-2.5 w-5 h-5 z-10"
                      style={{ backgroundColor: C.red }}
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={b.photos[0].src}
                        alt={b.photos[0].alt}
                        fill
                        sizes="(min-width: 768px) 46vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {b.photos.slice(1).map((p) => (
                      <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(min-width: 768px) 23vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`${display.className} text-2xl md:text-4xl font-bold tracking-tight`}>
                    {b.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                    {b.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {b.chips.map((c) => (
                      <Chip key={c}>{c}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PlayPádel */}
          <Reveal>
            <div className="mt-16 md:mt-24 rounded-3xl overflow-hidden" style={{ backgroundColor: C.deep }}>
              <div className="grid md:grid-cols-2 items-stretch">
                <div className="p-7 md:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <Mark light />
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                        {PISCINAS_CANCHAS.padel.eyebrow}
                      </p>
                    </div>
                    <h3
                      className={`${display.className} mt-4 text-4xl md:text-6xl font-black tracking-tight text-white`}
                    >
                      {PISCINAS_CANCHAS.padel.name}
                    </h3>
                    <p className="mt-3 text-lg md:text-xl font-semibold text-white">
                      {PISCINAS_CANCHAS.padel.tagline}
                    </p>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-white/80">
                      {PISCINAS_CANCHAS.padel.lead}
                    </p>
                  </div>
                  <div>
                    <a
                      href={`tel:${BIZ.padelTel}`}
                      className={BTN}
                      style={{ backgroundColor: C.red, color: '#fff' }}
                    >
                      Reservar cancha
                    </a>
                    <p className="mt-3 text-sm text-white/85">PlayPádel · {BIZ.padelDisplay}</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px]">
                  <Image
                    src={PISCINAS_CANCHAS.padel.photo.src}
                    alt={PISCINAS_CANCHAS.padel.photo.alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quinchos y paseos ────────────────────────────── */}
      <section
        id="quinchos-paseos"
        aria-labelledby="quinchos-title"
        className="scroll-mt-20 py-16 md:py-24"
        style={{ backgroundColor: C.soft }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              id="quinchos-title"
              eyebrow={QUINCHOS_PASEOS.eyebrow}
              title={QUINCHOS_PASEOS.title}
            />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div
                className="h-full rounded-3xl p-5 md:p-7"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {QUINCHOS_PASEOS.quinchos.photos.map((p) => (
                    <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 23vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className={`${display.className} mt-5 text-2xl font-bold tracking-tight`}>
                  {QUINCHOS_PASEOS.quinchos.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: C.muted }}>
                  {QUINCHOS_PASEOS.quinchos.desc}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div
                className="h-full rounded-3xl p-5 md:p-7"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={QUINCHOS_PASEOS.paseos.photos[0].src}
                    alt={QUINCHOS_PASEOS.paseos.photos[0].alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {QUINCHOS_PASEOS.paseos.photos.slice(1).map((p) => (
                    <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 23vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className={`${display.className} mt-5 text-2xl font-bold tracking-tight`}>
                  {QUINCHOS_PASEOS.paseos.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: C.muted }}>
                  {QUINCHOS_PASEOS.paseos.desc}
                </p>
                <a
                  href={WA_LINK_PASEO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} mt-5`}
                  style={{ backgroundColor: C.red, color: '#fff' }}
                >
                  Consultar por un paseo
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Almuerzos ────────────────────────────────────── */}
      <section
        id="almuerzos"
        aria-labelledby="almuerzos-title"
        className="scroll-mt-20 py-16 md:py-24"
        style={{ backgroundColor: C.gray }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <SectionHead
              id="almuerzos-title"
              eyebrow={ALMUERZOS.eyebrow}
              title={ALMUERZOS.title}
              lead={ALMUERZOS.lead}
              dark
            />
            <p className={`${display.className} mt-8 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white`}>
              11:00 – 16:00
            </p>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-white">
              cocina abierta
            </p>
            <dl className="mt-8 text-sm">
              {HORARIO.map((h) => (
                <div
                  key={h.k}
                  className="py-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <dt className="font-bold text-white">{h.k}</dt>
                  <dd className="mt-0.5 text-white/90">{h.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={`tel:${BIZ.almuerzosTel}`}
              className={`${BTN} mt-6`}
              style={{ backgroundColor: '#fff', color: C.ink }}
            >
              Llamar a Rancho Almuerzos
            </a>
            <p className="mt-3 text-sm text-white/85">{BIZ.almuerzosDisplay}</p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-3 gap-2">
              {ALMUERZOS.photos.map((p) => (
                <div key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 15vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Galería ──────────────────────────────────────── */}
      <section
        id="galeria"
        aria-labelledby="galeria-title"
        className="scroll-mt-20 py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              id="galeria-title"
              eyebrow={GALERIA.eyebrow}
              title={GALERIA.title}
              lead={GALERIA.lead}
            />
          </Reveal>
          <Reveal>
            <div className="mt-10">
              <Galeria photos={GALERIA.photos} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ──────────────────────────────────────── */}
      <section
        id="resenas"
        aria-labelledby="resenas-title"
        className="scroll-mt-20 py-16 md:py-24"
        style={{ backgroundColor: C.soft }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-12">
          <Reveal>
            <SectionHead id="resenas-title" eyebrow={RESENAS.eyebrow} title={RESENAS.title} />
            <p className={`${display.className} mt-8 text-7xl md:text-8xl font-black tracking-tight`}>
              {RESENAS.count}
            </p>
            <p className={`${display.className} mt-1 text-xl font-bold`} style={{ color: C.redText }}>
              {RESENAS.source}
            </p>
            <p className="mt-4 text-sm font-semibold">{RESENAS.fb}</p>
            <a
              href={MAPS_PLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-3 inline-block text-sm font-bold underline underline-offset-4"
              style={{ color: C.ink, textDecorationColor: C.red }}
            >
              {RESENAS.linkLabel}
            </a>
          </Reveal>
          <div className="space-y-3">
            {RESENAS.items.map((r) => (
              <Reveal key={r.by}>
                <figure
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <blockquote className="text-base leading-relaxed" style={{ color: C.ink }}>
                    <span aria-hidden="true" className="font-black" style={{ color: C.red }}>
                      “
                    </span>
                    {r.q}
                  </blockquote>
                  <figcaption className="mt-3 text-sm" style={{ color: C.muted }}>
                    {r.by} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ────────────────────────────────────── */}
      <section
        id="ubicacion"
        aria-labelledby="ubicacion-title"
        className="scroll-mt-20 py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <SectionHead
              id="ubicacion-title"
              eyebrow={UBICACION.eyebrow}
              title={UBICACION.title}
              lead={UBICACION.lead}
            />
            <ol className="mt-8 space-y-4">
              {UBICACION.pasos.map((paso, i) => (
                <li key={paso} className="flex gap-4 items-start">
                  <span
                    aria-hidden="true"
                    className={`${display.className} text-sm font-extrabold tracking-[0.2em] mt-0.5`}
                    style={{ color: C.redText }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                    {paso}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm font-mono" style={{ color: C.muted }}>
              <span className="font-sans font-semibold" style={{ color: C.ink }}>
                Coordenadas:
              </span>{' '}
              {GEO.lat}, {GEO.lng}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN}
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Cómo llegar
              </a>
              <a
                href={MAPS_PLACE}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN}
                style={{ border: `1.5px solid ${C.ink}`, color: C.ink }}
              >
                Ver en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div
              className="relative min-h-[320px] md:min-h-[440px] h-full rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${C.line}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de ubicación de Rancho Itahue, sector Cerrillo Bascuñán, Molina"
                className="absolute inset-0 w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ─────────────────────────────────────── */}
      <section
        id="contacto"
        aria-labelledby="contacto-title"
        className="scroll-mt-20 py-16 md:py-24"
        style={{ backgroundColor: C.deep }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              id="contacto-title"
              eyebrow={CONTACTO.eyebrow}
              title={CONTACTO.title}
              lead={CONTACTO.lead}
              dark
            />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Reveal>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} w-full md:w-auto`}
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Escribir por WhatsApp
              </a>
              <ul className="mt-8">
                {CONTACTO.telefonos.map((t) => (
                  <li
                    key={t.k}
                    className="py-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <p className="font-bold text-white">{t.k}</p>
                    <p className="mt-0.5 text-sm text-white/75">{t.note}</p>
                    <a
                      href={`tel:${t.tel}`}
                      className="tap-44 mt-1 inline-block text-lg font-bold text-white underline underline-offset-4"
                      style={{ textDecorationColor: C.red }}
                    >
                      {t.display}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/90">
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 font-bold underline underline-offset-4"
                >
                  Instagram {BIZ.instagramHandle}
                </a>
                {' · '}
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 font-bold underline underline-offset-4"
                >
                  Facebook
                </a>
              </p>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl p-5 md:p-8" style={{ backgroundColor: C.card }}>
                <ConsultaForm motivos={CONTACTO.motivos} displayClassName={display.className} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={LOGO} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
            <div>
              <p className="text-sm font-bold text-white">{BIZ.name}</p>
              <p className="text-xs text-white/75">
                {BIZ.rubro} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/75 leading-relaxed">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-2">
              WhatsApp
            </a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-2">
              Instagram
            </a>
            {' · '}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-2">
              Facebook
            </a>
            {' · '}
            <a href={MAPS_PLACE} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-2">
              Google Maps
            </a>
            {' · '}
            <a href={BIZ.site} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-2">
              {BIZ.siteDisplay}
            </a>
          </p>
          <p className="mt-4 text-xs text-white/60 leading-relaxed">
            © {new Date().getFullYear()} {BIZ.name} · {BIZ.address}, {BIZ.city}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Escribir a Rancho Itahue por WhatsApp" />
    </div>
  )
}
