import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EVAL, IG_URL, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, RESULTADOS, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

// Identidad real de Nativa: el wordmark serif negro y el ícono del perfil
// con flor sobre crema y rosa pálido, como en sus publicaciones.
const C = {
  paper: '#F7F1EA',
  cream2: '#F1E7DC',
  blush: '#EAD7CC',
  rose: '#A96B58',
  roseDeep: '#7C4434',
  ink: '#241D19',
  deep: '#1F1713',
  bone: '#FFFBF6',
  muted: '#4A3F37',
  mutedL: 'rgba(255,251,246,0.72)',
  line: 'rgba(36,29,25,0.16)',
  lineL: 'rgba(255,251,246,0.22)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'nativa-curico',
  title: 'Nativa Curicó — estética con registro en Torre Carmen',
  description: 'Estética avanzada en Torre Carmen, Carmen 775 Ofi. 304: HIFU, depilación, reductivos y faciales con registro fotográfico. 5,0 en Google. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'El registro', href: '#registro' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** Etiqueta de expediente en mono. */
function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em]`}
      style={{ color: dark ? '#D9BFB4' : C.roseDeep }}
    >
      {children}
    </p>
  )
}

export default function NativaCuricoPage() {
  return (
    <div className={`${body.className} nativa-page min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .nativa-page a:focus-visible { outline: 2px solid #8C4F3F; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} tracking-[0.12em]`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(247,241,234,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: '#FFFBF6',
        }}
      />

      {/* ── Hero editorial: el sello y el muro de la oficina ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28">
          <Reveal>
            <div
              className={`${mono.className} flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1.5 border-y py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.26em]`}
              style={{ borderColor: C.line, color: C.muted }}
            >
              <span>Ficha Nº 304 · {BIZ.rubro}</span>
              <span className="hidden md:inline">Torre Carmen · {BIZ.city}</span>
              <span style={{ color: C.roseDeep }}>Sitio de ejemplo</span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center py-12 md:py-16">
            <Reveal>
              <h1 className={`${display.className} leading-[1.0] tracking-[-0.01em] text-[clamp(2.9rem,9vw,5.4rem)] mb-6`} style={{ color: C.ink }}>
                Tu piel,
                <br />
                <span style={{ color: C.roseDeep }}>con registro</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                En la oficina 304 de la torre Carmen, Natalia y Valentina
                documentan cada avance en foto: día 1, día 45, día 100.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase text-sm tracking-[0.08em] px-7 py-3 rounded-full tap-44 active:scale-95 transition-transform`}
                  style={{ backgroundColor: C.ink, color: C.bone }}
                >
                  Reservar hora
                </a>
                <a
                  href="#registro"
                  className={`${display.className} uppercase text-sm tracking-[0.08em] px-7 py-3 rounded-full tap-44 transition-colors hover:bg-white`}
                  style={{ border: `1.5px solid ${C.ink}`, color: C.ink }}
                >
                  Ver el registro
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm tap-44"
                style={{ color: C.ink }}
              >
                <Stars value={BIZ.rating} color={C.roseDeep} />
                <span className="font-semibold">{BIZ.ratingLabel}</span>
                <span className="underline underline-offset-4 decoration-1" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative">
                {/* el sello real de la marca */}
                <div
                  className="absolute -top-7 -left-3 md:-left-8 z-10 rotate-[-4deg] rounded-xl px-4 py-2.5 shadow-lg"
                  style={{ backgroundColor: '#F5EAE2', border: `1px solid ${C.line}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- marca real recortada de sus posts */}
                  <img src={`${IMG}/logo-full.webp`} alt="Nativa · Salud Estética" className="h-10 md:h-12 w-auto" />
                </div>
                <div
                  className="relative aspect-[4/5] max-w-md ml-auto overflow-hidden"
                  style={{ borderRadius: '180px 180px 18px 18px', boxShadow: '0 26px 60px rgba(31,23,19,0.22)' }}
                >
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Muro de Nativa con su logo y un producto Pink Glow en mano"
                    fill
                    priority
                    sizes="(min-width:768px) 40vw, 80vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mt-5 text-right`} style={{ color: C.muted }}>
                  El muro de la oficina · foto real
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ficha técnica ── */}
      <section aria-label="Datos de Nativa" style={{ backgroundColor: C.deep }}>
        <dl className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
            { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
            { k: 'Instagram', v: `@${BIZ.instagram}`, href: IG_URL },
            { k: 'Valoración', v: `${BIZ.ratingLabel} · ${BIZ.reviews} reseñas`, href: MAPS_URL },
          ].map((f, i) => (
            <div key={f.k} className={`py-5 md:py-6 ${i % 2 === 1 ? 'border-l pl-4' : ''} ${i > 0 ? 'md:border-l md:pl-6' : ''}`} style={{ borderColor: C.lineL }}>
              <dt className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.26em] mb-1.5`} style={{ color: '#D9BFB4' }}>{f.k}</dt>
              <dd className="text-xs md:text-sm font-medium" style={{ color: C.bone }}>
                {f.href ? (
                  <a href={f.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 tap-44 hover:opacity-80">{f.v}</a>
                ) : f.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Expediente de tratamientos ── */}
      <section id="tratamientos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <Tag>Reg. 01—04 · gabinete</Tag>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mt-3`} style={{ color: C.ink }}>
              El menú de cabina,
              <br />
              <span style={{ color: C.roseDeep }}>en cuatro fichas</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mt-5" style={{ color: C.muted }}>
              Lo que publican en su Instagram y su ficha de Google. Los
              valores y el plan de cada tratamiento se confirman por WhatsApp.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-px border" style={{ backgroundColor: C.line, borderColor: C.line }}>
          {SERVICIOS.map((s, i) => (
            <li key={s.n} className="relative" style={{ backgroundColor: i % 3 === 1 ? C.cream2 : C.paper }}>
              <Reveal delay={i * 80} className="h-full">
                <div className="h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width:768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                    <span className={`${mono.className} absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.18em]`} style={{ backgroundColor: C.ink, color: C.bone }}>
                      REG. {s.n}
                    </span>
                  </div>
                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    <Tag>{s.tag}</Tag>
                    <h3 className={`${display.className} text-2xl md:text-[1.7rem] leading-tight mt-2 mb-2.5`} style={{ color: C.ink }}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                    <a
                      href={WA_LINK_EVAL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} inline-block mt-5 text-[11px] uppercase tracking-[0.18em] underline underline-offset-[6px] decoration-1 tap-44`}
                      style={{ color: C.roseDeep }}
                    >
                      Consultar por WhatsApp →
                    </a>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── El registro: la evidencia fechada ── */}
      <section id="registro" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <Tag dark>Antes / durante / después</Tag>
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mt-3`} style={{ color: C.bone }}>
                Día 1. Día 45.
                <br />
                <span style={{ color: '#D9BFB4' }}>Día 100.</span>
              </h2>
              <p className="text-sm md:text-base mt-5 max-w-xl leading-relaxed" style={{ color: C.mutedL }}>
                Registros que Nativa publica en su propia ficha de Google e
                Instagram: cada avance queda fechado en foto.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              ...RESULTADOS,
              { src: `${IMG}/depilacion.webp`, alt: 'Sesión de depilación en Nativa Curicó, foto publicada por ellas' },
            ].map((r, i) => (
              <Reveal key={r.src} delay={i * 100}>
                <figure className="relative">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl" style={{ border: `1px solid ${C.lineL}` }}>
                    <Image src={r.src} alt={r.alt} fill sizes="(min-width:768px) 24vw, 46vw" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: '#D9BFB4' }}>
                    Evidencia {String(i + 1).padStart(2, '0')} · IG/Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Tag>Opiniones</Tag>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mt-3 mb-5`} style={{ color: C.ink }}>
              5,0 estrellas
              <br />
              <span style={{ color: C.roseDeep }}>en Google</span>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              Reseñas reales de su ficha de Maps. Mencionan a Natalia y
              Valentina — las que atienden en la oficina 304.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 tap-44" style={{ color: C.roseDeep }}>
              <Stars value={BIZ.rating} color={C.roseDeep} />
              <span className="text-sm font-semibold underline underline-offset-4">{BIZ.reviews} reseñas verificadas</span>
            </a>
          </Reveal>
          <div className="space-y-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure
                  className="pl-6 md:pl-8 border-l-2"
                  style={{ borderColor: C.rose }}
                >
                  <blockquote className={`${display.className} text-lg md:text-xl leading-relaxed mb-3`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.roseDeep }}>
                    {r.author} <span style={{ color: C.muted }}>· {r.when} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación: Torre Carmen ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.blush }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Tag>La oficina</Tag>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mt-3 mb-6`} style={{ color: C.ink }}>
              Oficina 304,
              <br />
              <span style={{ color: C.roseDeep }}>torre Carmen</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              Pleno centro de Curicó: subes por Carmen 775 y el ruido queda
              abajo. Si no puedes ir, te reagendan sin problema.
            </p>
            <dl className="space-y-0 border-t mb-8" style={{ borderColor: 'rgba(36,29,25,0.22)' }}>
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                { k: 'Instagram', v: `@${BIZ.instagram} · ${BIZ.instagramFollowers} seguidores`, href: IG_URL },
              ].map((d) => (
                <div key={d.k} className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: 'rgba(36,29,25,0.22)' }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.roseDeep }}>{d.k}</dt>
                  <dd className="text-sm md:text-base text-right font-medium" style={{ color: C.ink }}>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 tap-44">{d.v}</a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-transform`}
              style={{ backgroundColor: C.ink, color: C.bone }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative min-h-[320px] rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap src={MAPS_EMBED} className="absolute inset-0 w-full h-full border-0" title="Mapa: Nativa Curicó, Torre Carmen, Carmen 775" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} absolute top-3 left-3 text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-full shadow-lg tap-44`}
                style={{ backgroundColor: C.bone, color: C.ink }}
              >
                Abrir en Maps ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- marca real recortada de sus posts */}
            <img src={`${IMG}/logo-full.webp`} alt="Nativa · Salud Estética" className="h-11 w-auto mx-auto mb-5 rounded-md" />
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: 'rgba(255,251,246,0.6)' }}>
              Sitio de ejemplo · fotos y reseñas reales
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl mx-auto`} style={{ color: C.bone }}>
              ¿Nativa con sitio <span style={{ color: '#D9BFB4' }}>propio</span>?
            </h2>
            <a
              href={whatsappLink('demo')}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-7 uppercase text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-transform`}
              style={{ backgroundColor: C.bone, color: C.ink }}
            >
              Hablemos por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-lg leading-none tracking-[0.1em]`} style={{ color: C.ink }}>{BIZ.name}</p>
              <p className="text-xs mt-1" style={{ color: C.muted }}>{BIZ.rubro} · {BIZ.city}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.roseDeep }}>{BIZ.phoneDisplay}</a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.roseDeep }}>@{BIZ.instagram}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.roseDeep }}>Google Maps</a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
            Creado por <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Sitiazo</a> — sitio de muestra para el negocio
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
