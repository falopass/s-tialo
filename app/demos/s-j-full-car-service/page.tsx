import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'
import {
  BIZ,
  HORARIO,
  IMG,
  MAPS_EMBED,
  MAPS_URL,
  RESENAS,
  SERVICIOS,
  WA_LINK,
  WA_LINK_ACEITE,
} from './content'

/**
 * app/demos/s-j-full-car-service/page.tsx
 *
 * Serviteca de barrio en Colón, Talcahuano. Identidad sacada del
 * letrero real del local: azul Mobil + rojo de servicio + blanco, con
 * la franja diagonal triple como motivo. Oswald titula como letrero de
 * pizarra, Barlow lee el contenido. La estructura es «carta del
 * taller»: una pizarra de servicios como en el mesón de una serviteca.
 */

const display = localFont({
  src: [
    { path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  navy: '#0C2E63',
  blue: '#11479E',
  blueHi: '#1B5ACB',
  ink: '#16233B',
  muted: '#4D5B73',
  line: 'rgba(22,35,59,0.14)',
  lineLight: 'rgba(255,255,255,0.16)',
  red: '#E2352B',
  redDeep: '#A81E16',
  ice: '#EEF2F8',
  card: '#FFFFFF',
} as const

export const metadata = demoMetadata({
  slug: 's-j-full-car-service',
  title: `${BIZ.name} — Taller y serviteca en ${BIZ.city}`,
  description: `Neumáticos, frenos, cambio de aceite Mobil y mantención preventiva en Colón 3047, ${BIZ.city}. ${BIZ.rating}★ con ${BIZ.reviews} reseñas.`,
  image: `${IMG}/hero.webp`,
})

/* Franja triple diagonal: la marca visual del letrero, repetida en bordes. */
function Stripes({ light = false }: { light?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[12px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${light ? '#FFFFFF' : C.blue} 0 14px, ${light ? 'rgba(255,255,255,0.55)' : C.red} 14px 20px, transparent 20px 34px)`,
      }}
    />
  )
}

function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${display.className} text-xs md:text-sm uppercase tracking-[0.28em] font-medium`}
      style={{ color: dark ? 'rgba(255,255,255,0.75)' : C.redDeep }}
    >
      {children}
    </p>
  )
}

export default function SJFullCarServicePage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.ice, color: C.ink }}>
      <BlitzNav
        name="S & J Full Car Service"
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'El taller', href: '#taller' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'light', bar: '#FFFFFF', ink: C.navy, line: C.line, btnBg: C.redDeep, btnInk: '#FFFFFF' }}
      />

      {/* ── HERO ── */}
      <section id="inicio" className="relative overflow-hidden">
        <Stripes />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Reveal>
                <Tag>Taller mecánico · Colón, {BIZ.city}</Tag>
                <h1 className={`${display.className} text-[44px] md:text-[68px] uppercase leading-[0.98] mt-3`} style={{ color: C.navy }}>
                  Full service,<br />
                  <span style={{ color: C.red }}>sin letra chica</span>
                </h1>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Neumáticos, frenos, aceite Mobil, luces, lavado y mantención
                  preventiva. En S&J te dicen lo que tiene tu auto, con precio
                  justo y trabajo rápido.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-base font-semibold text-white transition-transform active:scale-95"
                    style={{ backgroundColor: C.blue }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#fff" aria-hidden="true">
                      <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.77 9.77 0 0 1-4.98-1.37l-.36-.21-3.7.97.99-3.61-.24-.37a9.77 9.77 0 0 1-1.5-5.21c0-5.4 4.4-9.79 9.8-9.79a9.73 9.73 0 0 1 9.78 9.8c0 5.4-4.4 9.79-9.78 9.79zm8.32-18.11A11.7 11.7 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.88c0 2.1.55 4.14 1.6 5.95L.05 24l6.31-1.66a11.87 11.87 0 0 0 5.68 1.45h.01c6.54 0 11.87-5.34 11.87-11.88 0-3.18-1.24-6.16-3.48-8.4z" />
                    </svg>
                    Agendar hora
                  </a>
                  <a
                    href={WA_LINK_ACEITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg px-5 py-3 text-base font-semibold transition-colors"
                    style={{ color: C.navy, border: `1.5px solid ${C.navy}` }}
                  >
                    Cambio de aceite
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: C.navy }}>
                    <Stars value={BIZ.rating} color={C.red} />
                    {BIZ.rating} · {BIZ.reviews} reseñas
                  </span>
                  <span className="text-sm font-medium" style={{ color: C.muted }}>
                    {BIZ.address}, {BIZ.city}
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-2xl -rotate-1"
                  style={{ backgroundColor: C.blue, opacity: 0.12 }}
                  aria-hidden="true"
                />
                <Image
                  src={`${IMG}/hero.webp`}
                  alt={`Fachada de ${BIZ.name} en Colón 3047, Talcahuano`}
                  width={1100}
                  height={825}
                  className="relative w-full rounded-2xl object-cover"
                  style={{ boxShadow: '0 20px 48px rgba(12,46,99,0.22)' }}
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PIZARRA DE SERVICIOS ── */}
      <section id="servicios" className="py-14 md:py-20" style={{ backgroundColor: C.navy }}>
        <Stripes light />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-4">
          <Reveal>
            <Tag dark>La pizarra del taller</Tag>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase mt-3 text-white max-w-2xl leading-[1.02]`}>
              Los servicios que dice el letrero — y se cumplen
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-8">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={(i % 2) * 90}>
                <div
                  className="py-4 flex items-start gap-4"
                  style={{ borderBottom: `1px solid ${C.lineLight}` }}
                >
                  <span
                    className={`${display.className} shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-sm font-semibold`}
                    style={{ backgroundColor: C.redDeep, color: '#fff' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-lg md:text-xl uppercase text-white tracking-wide`}>
                      {s.t}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-12">
          <Reveal delay={100}>
            <p className="text-sm pt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Servicios según el letrero del local y lo que cuentan las reseñas de Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CINTA DE FOTOS ── */}
      <section id="taller" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Tag>El taller por dentro</Tag>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase mt-3 leading-[1.02]`} style={{ color: C.navy }}>
              Manos a la obra, todos los días
            </h2>
          </Reveal>
        </div>
        <div className="mt-8 max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { img: 'frenos.webp', alt: 'Mecánico trabajando en el sistema de frenos' },
            { img: 'motor.webp', alt: 'Motor en revisión dentro del taller' },
            { img: 'mecanico.webp', alt: 'Mecánico de S&J en pleno trabajo' },
            { img: 'insumos.webp', alt: 'Insumos y fluidos de la serviteca' },
          ].map((p, i) => (
            <Reveal key={p.img} delay={i * 90}>
              <div className="rounded-xl overflow-hidden" style={{ boxShadow: '0 10px 28px rgba(12,46,99,0.16)' }}>
                <Image
                  src={`${IMG}/${p.img}`}
                  alt={p.alt}
                  width={1200}
                  height={1600}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Tag>Por qué elegir S&J</Tag>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase mt-3 leading-[1.02]`} style={{ color: C.navy }}>
              Lo que repiten los clientes
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                t: 'Bueno, rápido, económico',
                d: 'La frase sale de una reseña real: se paga lo justo y el auto sale a tiempo.',
              },
              {
                t: 'Aceite Mobil de verdad',
                d: 'Mobil 3000 y Mobil 1 para el motor: donde importa, no se ahorra en calidad.',
              },
              {
                t: '100% transparencia',
                d: 'Te muestran qué encontraron y qué se cambió. Honestidad y amabilidad son los temas más mencionados.',
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <article
                  className="h-full rounded-xl p-6"
                  style={{ backgroundColor: C.ice, border: `1px solid ${C.line}` }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: i === 1 ? C.red : C.blue }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {i === 0 && <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />}
                      {i === 1 && <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />}
                      {i === 2 && <path d="M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />}
                    </svg>
                  </div>
                  <h3 className={`${display.className} mt-4 text-xl uppercase`} style={{ color: C.navy }}>{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Tag>Reseñas de Google</Tag>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase mt-3 leading-[1.02]`} style={{ color: C.navy }}>
                  El barrio ya lo conoce
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.red} />
                <span className={`${display.className} text-3xl`} style={{ color: C.navy }}>{BIZ.rating}</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure
                  className="h-full rounded-xl p-6 flex flex-col"
                  style={{ backgroundColor: C.card, boxShadow: '0 10px 28px rgba(12,46,99,0.10)', border: `1px solid ${C.line}` }}
                >
                  <Stars value={5} color={C.blue} className="w-3.5 h-3.5" />
                  <blockquote className="mt-3 text-sm md:text-[15px] leading-relaxed flex-1">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="mt-4 pt-4" style={{ borderTop: `1px solid ${C.line}` }}>
                    <p className="text-sm font-bold" style={{ color: C.navy }}>{r.nombre}</p>
                    <p className="text-xs" style={{ color: C.muted }}>{r.cuando} · Google</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 text-sm" style={{ color: C.muted }}>
              Textos según las reseñas publicadas en Google Maps.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: C.redDeep }}>
                Ver las {BIZ.reviews} reseñas
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN + HORARIO ── */}
      <section id="ubicacion" className="py-14 md:py-20" style={{ backgroundColor: C.navy }}>
        <Stripes light />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div>
              <Tag dark>Horario y ubicación</Tag>
              <h2 className={`${display.className} text-3xl md:text-4xl uppercase mt-3 text-white leading-[1.02]`}>
                En Colón, a pasos de San Miguel
              </h2>
              <div className="mt-6 space-y-3">
                {HORARIO.map((h) => (
                  <div key={h.d} className="flex items-center justify-between text-sm md:text-base pb-2.5" style={{ borderBottom: `1px solid ${C.lineLight}` }}>
                    <span style={{ color: 'rgba(255,255,255,0.75)' }}>{h.d}</span>
                    <span className="font-bold" style={{ color: h.h === 'Cerrado' ? 'rgba(255,255,255,0.62)' : '#fff' }}>
                      {h.h}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {BIZ.address}, {BIZ.city} — {BIZ.region}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: C.redDeep }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-white"
                  style={{ border: '1.5px solid rgba(255,255,255,0.4)' }}
                >
                  Abrir en Maps →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="min-h-[320px]">
            <div className="h-full rounded-2xl overflow-hidden" style={{ minHeight: 320, border: `1px solid ${C.lineLight}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-12">
          <Stripes light />
        </div>
      </section>

      {/* ── CTA + FOOTER ── */}
      <section className="py-14 md:py-20 text-center">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.98]`} style={{ color: C.navy }}>
              Tu auto listo,<br /><span style={{ color: C.red }}>sin vueltas</span>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-lg px-8 py-3.5 text-base font-semibold text-white transition-transform active:scale-95"
              style={{ backgroundColor: C.blue }}
            >
              Escribir a S&J por WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>
      <footer className="px-5 md:px-8 py-6" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
          <p>{BIZ.name} · {BIZ.address}, {BIZ.city}</p>
          <p>
            Página de muestra por{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">
              {SITE.name}
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
