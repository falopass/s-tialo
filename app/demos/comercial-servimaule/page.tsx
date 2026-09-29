import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, REVIEWS } from './content'
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
  bg: '#10131A',
  panel: '#171C24',
  panel2: '#1E242E',
  ink: '#E8ECEF',
  muted: '#8A9199',
  lime: '#C6F24E',
  line: 'rgba(232,236,239,0.12)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'comercial-servimaule',
  title: 'Servimaule · Maquinaria y servicios agrícolas en San Clemente',
  description:
    'Comercial Servimaule Ltda. en Av. Huamachuco 1360, San Clemente: servicios agrícolas mecanizados, venta y arriendo de maquinaria, transporte de carga. Llama al +56 71 262 1459.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Terreno', href: '#terreno' },
  { label: 'Contacto', href: '#contacto' },
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.22em]"
      style={{ color: C.lime, fontFamily: MONO }}
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
          style={{ backgroundColor: C.lime }}
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
    <main className={body.className} style={{ backgroundColor: C.bg, color: C.ink }}>
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
        theme={{ over: 'dark', bar: C.bg, ink: C.ink, line: C.line, btnBg: C.lime, btnInk: '#10131A' }}
        fontClass={body.className}
      />

      {/* ── Hero: titular gigante sobre foto de maquinaria ── */}
      <section className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt={`Miniexcavadoras del equipo de ${BIZ.name} en San Clemente`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(16,19,26,0.97) 8%, rgba(16,19,26,0.55) 48%, rgba(16,19,26,0.25) 78%)',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-8 pt-24">
          <Reveal>
            <Tag>San Clemente · Región del Maule</Tag>
            <h1
              className={display.className}
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2rem, 9.6vw, 5.6rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                marginTop: 12,
                textTransform: 'uppercase',
              }}
            >
              Maquinaria que trabaja el campo del Maule
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-lg" style={{ color: 'rgba(232,236,239,0.82)' }}>
              {BIZ.legal} · servicios agrícolas mecanizados, venta y arriendo de máquinas en
              Av. Huamachuco, San Clemente.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-bold tap-44"
                style={{ backgroundColor: C.lime, color: '#10131A' }}
              >
                Llamar {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44 border"
                style={{ borderColor: 'rgba(232,236,239,0.4)', color: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>

          {/* barra de specs mono */}
          <Reveal delay={200}>
            <div
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 py-4 text-[12px]"
              style={{ borderTop: `1px solid ${C.line}`, fontFamily: MONO }}
            >
              <p style={{ color: C.muted }}>
                DIR <span className="block text-sm mt-0.5" style={{ color: C.ink }}>{BIZ.addressShort}</span>
              </p>
              <p style={{ color: C.muted }}>
                TEL <a href={CALL_LINK} className="block text-sm mt-0.5 tap-44 underline underline-offset-2" style={{ color: C.ink }}>{BIZ.phoneDisplay}</a>
              </p>
              <p style={{ color: C.muted }}>
                HRS <span className="block text-sm mt-0.5" style={{ color: C.ink }}>Abre {BIZ.opens}</span>
              </p>
              <p style={{ color: C.muted }}>
                GOOGLE <span className="block text-sm mt-0.5" style={{ color: C.ink }}>{BIZ.ratingDisplay} ★ · {BIZ.reviews} reseñas</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha técnica de servicios ── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <Tag>Capacidad</Tag>
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
                Ficha de servicios
              </h2>
            </div>
            <p className="text-sm max-w-xs" style={{ color: C.muted }}>
              Los giros del grupo Servimaule-Servimak en San Clemente · cada uno se cotiza por
              teléfono.
            </p>
          </div>
        </Reveal>

        <div className="mt-9">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.code} delay={i * 70}>
              <div
                className="grid grid-cols-[64px_1fr] md:grid-cols-[110px_1fr_2fr] gap-x-4 gap-y-1 py-5 md:py-6 items-baseline"
                style={{ borderTop: `1px solid ${C.line}` }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: C.lime, fontFamily: MONO }}
                >
                  {s.code}
                </span>
                <h3
                  className={display.className}
                  style={{ fontWeight: 600, fontSize: 'clamp(1.05rem, 3.4vw, 1.45rem)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm col-start-2 md:col-start-3" style={{ color: C.muted }}>
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: `1px solid ${C.line}` }} />
        </div>
      </section>

      {/* ── Terreno: tres marcos fotográficos ── */}
      <section id="terreno">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-4"
              style={{ color: C.muted, fontFamily: MONO }}
            >
              En terreno · Av. Huamachuco 1360, San Clemente
            </p>
          </Reveal>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <Reveal className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={`${IMG}/ferreteria.webp`}
              alt={`Local y vitrina de ${BIZ.name} en Av. Huamachuco, San Clemente`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={80} className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={`${IMG}/galpon.webp`}
              alt="Galpón industrial en el sector de Av. Huamachuco 1360, según Street View"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={160} className="relative aspect-[3/4] rounded-xl overflow-hidden col-span-2 md:col-span-1">
            <Image
              src={`${IMG}/avenida.webp`}
              alt="Avenida Huamachuco a la altura del sector industrial, San Clemente"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </Reveal>
        </div>
        <p
          className="max-w-6xl mx-auto px-5 md:px-8 mt-3 text-[10px] uppercase tracking-[0.18em]"
          style={{ color: C.muted, fontFamily: MONO }}
        >
          Fotos de su ficha de Google y Street View del sector
        </p>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
          <Reveal>
            <Tag>Reseñas en Google</Tag>
            <p
              className={display.className}
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 8vw, 4rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginTop: 10,
              }}
            >
              {BIZ.ratingDisplay}
            </p>
            <Stars value={BIZ.rating} color={C.lime} className="w-5 h-5" />
            <p className="mt-2 text-sm" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas publicadas
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold underline underline-offset-4 tap-44"
              style={{ color: C.lime }}
            >
              Ver ficha en Maps
            </a>
          </Reveal>

          <div className="space-y-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <blockquote
                  className="rounded-xl p-6"
                  style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
                >
                  <Stars value={r.stars} color={C.lime} className="w-4 h-4" />
                  <p className="mt-3 text-base md:text-lg" style={{ color: C.ink }}>
                    “{r.text}”
                  </p>
                  <footer className="mt-3 text-sm" style={{ color: C.muted }}>
                    {r.author} · {r.when}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <p className="text-[12px] leading-relaxed" style={{ color: C.muted, fontFamily: MONO }}>
                NOTA: En Google Maps la ficha de este grupo aparece como “{BIZ.mapsName}” en la
                misma dirección; el teléfono de contacto de {BIZ.name} es {BIZ.phoneDisplay}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <Reveal>
            <div
              className="rounded-2xl p-7 md:p-9 h-full flex flex-col"
              style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
            >
              <Tag>Contacto</Tag>
              <h2
                className={display.className}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                  letterSpacing: '-0.02em',
                  marginTop: 10,
                }}
              >
                A la salida oriente de San Clemente
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
                    Teléfono
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
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                    Razón social
                  </dt>
                  <dd className="font-semibold mt-1">{BIZ.legal}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-7 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-bold tap-44"
                  style={{ backgroundColor: C.lime, color: '#10131A' }}
                >
                  Llamar ahora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full font-semibold tap-44 border"
                  style={{ borderColor: 'rgba(232,236,239,0.4)', color: C.ink }}
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
      <section style={{ backgroundColor: C.lime, color: '#10131A' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2
                  className={display.className}
                  style={{
                    fontWeight: 800,
                    fontSize: 'clamp(1.6rem, 5.4vw, 2.8rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.08,
                  }}
                >
                  ¿Máquina, repuesto o faena agrícola?
                </h2>
                <p className="mt-3 text-base max-w-md" style={{ color: 'rgba(16,19,26,0.75)' }}>
                  Se coordina directo con el equipo de {BIZ.name} en San Clemente.
                </p>
              </div>
              <a
                href={CALL_LINK}
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-full font-bold tap-44 shrink-0"
                style={{ backgroundColor: '#10131A', color: C.lime }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.bg, color: C.ink, borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm">
          <p className={display.className} style={{ fontWeight: 700 }}>
            {BIZ.name}
          </p>
          <p style={{ color: C.muted }}>
            {BIZ.legal} · {BIZ.address} · {BIZ.region}
          </p>
          <p className="md:ml-auto text-[11px]" style={{ color: 'rgba(232,236,239,0.55)' }}>
            Mockup de{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Sitiazo
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.lime} fg="#10131A" />
    </main>
  )
}
