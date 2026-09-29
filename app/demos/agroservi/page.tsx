import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, GIROS, REVIEW } from './content'
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

const C = {
  paper: '#F1EAD9',
  cream: '#FAF6EA',
  ink: '#211C12',
  ink2: '#3A3222',
  brass: '#A8783A',
  brassDeep: '#7A5220',
  muted: '#6E6350',
  line: 'rgba(33,28,18,0.16)',
  deep: '#241F14',
}

export const metadata: Metadata = demoMetadata({
  slug: 'agroservi',
  title: 'Agroservi · Servicios agrícolas y de terreno en San Clemente',
  description:
    'Agroservi Ltda. en Av. Huamachuco 183, San Clemente: servicios agrícolas, transporte de carga, arriendo de equipos y reparación de vehículos a motor. Llama al +56 71 262 1494.',
  image: `${IMG}/pergola.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.22em]"
      style={{ color: C.brassDeep, fontFamily: 'ui-monospace, monospace' }}
    >
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: C.brass }}
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
          para {BIZ.legal} · así se vería tu sitio.{' '}
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
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.paper }}
        fontClass={body.className}
      />

      {/* ── Hero editorial: titular + collage de fotos reales ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: 96 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end pb-10 md:pb-14">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow>San Clemente · Región del Maule</Eyebrow>
                <h1
                  className={display.className}
                  style={{
                    fontWeight: 800,
                    fontSize: 'clamp(2.6rem, 11vw, 5.4rem)',
                    lineHeight: 0.98,
                    letterSpacing: '-0.03em',
                    marginTop: 14,
                  }}
                >
                  AGRO
                  <br />
                  SERVI
                </h1>
                <p className="mt-5 text-lg md:text-xl max-w-md" style={{ color: C.ink2 }}>
                  Servicios agrícolas y de terreno sobre la Av. Huamachuco, al oriente de San
                  Clemente.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={CALL_LINK}
                    className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44"
                    style={{ backgroundColor: C.ink, color: C.paper }}
                  >
                    Llamar {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44 border"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5 relative">
              <Reveal delay={160} className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={`${IMG}/pergola.webp`}
                    alt={`Estructura de madera construida en el patio de ${BIZ.name}, San Clemente`}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-4 md:-left-8 w-28 md:w-36 rounded-xl overflow-hidden border-4 shadow-lg rotate-[-4deg]"
                  style={{ borderColor: C.cream }}
                >
                  <Image
                    src={`${IMG}/shop.webp`}
                    alt={`Interior del local de ${BIZ.name} en Av. Huamachuco`}
                    width={405}
                    height={900}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <p
                  className="absolute -bottom-10 right-1 text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: C.muted, fontFamily: 'ui-monospace, monospace' }}
                >
                  Fotos de su ficha de Google
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* barra de datos */}
        <div style={{ borderTop: `1px solid ${C.line}`, backgroundColor: C.cream }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                Dirección
              </p>
              <p className="font-semibold mt-0.5">{BIZ.addressShort}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                Teléfono
              </p>
              <a href={CALL_LINK} className="font-semibold mt-0.5 inline-block tap-44 underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                Abre
              </p>
              <p className="font-semibold mt-0.5">{BIZ.opens} hrs</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                En Google
              </p>
              <p className="font-semibold mt-0.5">
                {BIZ.ratingDisplay} ★ · {BIZ.reviews} reseña
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Giros: índice numerado ── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <Eyebrow>Lo que hace</Eyebrow>
              <h2
                className={display.className}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(1.7rem, 5vw, 2.6rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  marginTop: 10,
                }}
              >
                Cuatro giros, un mismo teléfono
              </h2>
            </div>
            <p className="text-sm max-w-xs" style={{ color: C.muted }}>
              Giros comerciales registrados de {BIZ.legal} · cada servicio se coordina directo por
              teléfono.
            </p>
          </div>
        </Reveal>

        <div className="mt-9">
          {GIROS.map((g, i) => (
            <Reveal key={g.n} delay={i * 70}>
              <div
                className="grid grid-cols-[52px_1fr] md:grid-cols-[90px_1fr_2fr] gap-x-4 gap-y-1 py-5 md:py-6 items-baseline"
                style={{ borderTop: `1px solid ${C.line}` }}
              >
                <span
                  className={display.className}
                  style={{ fontWeight: 300, fontSize: '1.5rem', color: C.brass }}
                >
                  {g.n}
                </span>
                <h3
                  className={display.className}
                  style={{ fontWeight: 600, fontSize: 'clamp(1.05rem, 3.4vw, 1.45rem)' }}
                >
                  {g.title}
                </h3>
                <p className="text-sm col-start-2 md:col-start-3" style={{ color: C.muted }}>
                  {g.detail}
                </p>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: `1px solid ${C.line}` }} />
        </div>
      </section>

      {/* ── Sector: Street View dupla ── */}
      <section>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-4"
              style={{ color: C.muted, fontFamily: 'ui-monospace, monospace' }}
            >
              El sector · Av. Huamachuco, oriente de San Clemente
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[16/9] md:aspect-[16/8]">
            <Image
              src={`${IMG}/patio.webp`}
              alt="Patio y galpones del sector de Av. Huamachuco en San Clemente, según Street View"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/9] md:aspect-[16/8]">
            <Image
              src={`${IMG}/camino.webp`}
              alt="Camino rural con cercos y galpones en el sector de Agroservi, San Clemente"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Reseña real ── */}
      <section id="resenas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div
            className="rounded-2xl p-7 md:p-10"
            style={{ backgroundColor: C.deep, color: C.cream }}
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
              <div>
                <Eyebrow>Lo que dice Google</Eyebrow>
                <p
                  className={display.className}
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    marginTop: 12,
                  }}
                >
                  “{REVIEW.text}”
                </p>
                <p className="mt-4 text-sm" style={{ color: 'rgba(250,246,234,0.75)' }}>
                  {REVIEW.author} · Local Guide · {REVIEW.when}
                </p>
              </div>
              <div className="md:text-right">
                <Stars value={REVIEW.stars} color={C.brass} className="w-5 h-5" />
                <p className="mt-2 text-sm" style={{ color: 'rgba(250,246,234,0.75)' }}>
                  {BIZ.ratingDisplay} de 5 en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-semibold underline underline-offset-4 tap-44"
                  style={{ color: C.brass }}
                >
                  Ver su ficha en Maps
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <Reveal>
            <div
              className="rounded-2xl p-7 md:p-9 h-full flex flex-col"
              style={{ backgroundColor: C.cream, border: `1px solid ${C.line}` }}
            >
              <Eyebrow>Contacto directo</Eyebrow>
              <h2
                className={display.className}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                  letterSpacing: '-0.02em',
                  marginTop: 10,
                }}
              >
                Al oriente de San Clemente, por la Huamachuco
              </h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd className="font-semibold mt-1">{BIZ.address}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                    Teléfono fijo
                  </dt>
                  <dd className="font-semibold mt-1">
                    <a href={CALL_LINK} className="underline underline-offset-2 tap-44">
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                    Atención
                  </dt>
                  <dd className="font-semibold mt-1">Abre a las {BIZ.opens} hrs</dd>
                </div>
              </dl>
              <div className="mt-auto pt-7 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44"
                  style={{ backgroundColor: C.brassDeep, color: C.cream }}
                >
                  Llamar ahora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44 border"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-2xl overflow-hidden h-full min-h-[320px]"
              style={{ border: `1px solid ${C.line}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name} en San Clemente`}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.deep, color: C.cream }}>
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
              ¿Pega en el campo o carga por mover?
            </h2>
            <p className="mt-4 text-base max-w-md mx-auto" style={{ color: 'rgba(250,246,234,0.75)' }}>
              {BIZ.name} atiende directo en San Clemente · una llamada y se coordina.
            </p>
            <a
              href={CALL_LINK}
              className="inline-flex items-center justify-center h-[52px] px-8 mt-7 rounded-full font-semibold tap-44"
              style={{ backgroundColor: C.brass, color: C.deep }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.deep, color: C.cream, borderTop: '1px solid rgba(250,246,234,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm">
          <p className={display.className} style={{ fontWeight: 700 }}>
            {BIZ.name}
          </p>
          <p style={{ color: 'rgba(250,246,234,0.7)' }}>
            {BIZ.legal} · {BIZ.address} · {BIZ.region}
          </p>
          <p className="md:ml-auto text-[11px]" style={{ color: 'rgba(250,246,234,0.55)' }}>
            Mockup de{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Sitiazo
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.brass} fg={C.deep} />
    </main>
  )
}
