import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EVAL, IG_URL, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, RESULTADOS, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

const C = {
  deep: '#0B2E28',
  deep2: '#103b33',
  mint: '#14A08C',
  mintDeep: '#0E7566',
  mintText: '#0D6E60',
  mintSoft: '#BFE8DF',
  pink: '#D96A8E',
  pinkText: '#B0446C',
  paper: '#F1F7F4',
  bone: '#F7FBF9',
  ink: '#12332D',
  muted: 'rgba(18,51,45,0.66)',
  mutedL: 'rgba(247,251,249,0.72)',
  line: 'rgba(18,51,45,0.16)',
  lineL: 'rgba(191,232,223,0.28)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'nativa-curico',
  title: 'Nativa Curicó — Estética avanzada en Torre Carmen, Curicó',
  description: 'Estética avanzada en el centro de Curicó: HIFU, depilación, reductivos y faciales en Torre Carmen, Carmen 775 Ofi. 304. 5,0 en Google. Reserva por WhatsApp.',
  image: '/demos/nativa-curico/hero.webp',
})

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const TICKER = ['HIFU 25D', 'Depilación definitiva', 'Reductivos', 'Mesoterapia facial', 'Carmen 775 · Ofi. 304']

function Eyebrow({ children, light = false, center = false }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}
      style={{ color: light ? C.mintSoft : C.mintText }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Marco en arco — el motivo del demo (hoja/botánico de Nativa). */
function ArchPhoto({
  src, alt, ratio = 'aspect-[3/4]', className = '',
}: { src: string; alt: string; ratio?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${ratio} ${className}`}
      style={{ borderRadius: '160px 160px 20px 20px', boxShadow: '0 18px 50px rgba(11,46,40,0.28)' }}
    >
      <Image src={src} alt={alt} fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
    </div>
  )
}

export default function NativaCuricoPage() {
  return (
    <div className={`${body.className} nativa-page min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .nativa-page a:focus-visible { outline: 2px solid #14A08C; outline-offset: 3px; }
        @keyframes nativa-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        .nativa-arch-float { animation: nativa-float 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .nativa-arch-float { animation: none } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(241,247,244,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.mintDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: marca real, composición dividida ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <div className="relative">
              <Eyebrow light>Estética avanzada · Curicó centro</Eyebrow>
              <h1
                className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,8.4vw,4.6rem)] mb-6`}
                style={{ color: C.bone }}
              >
                En la torre Carmen,
                <br />
                tu piel cambia
                <br />
                <span style={{ color: C.mintSoft }}>de verdad</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.mutedL }}>
                HIFU, depilación definitiva, reductivos y mesoterapia facial.
                Arriba, en la oficina 304, Natalia y Valentina atienden con
                registro fotográfico de cada avance.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-bold text-sm tracking-[0.08em] px-7 py-4 rounded-full tap-44 transition-transform active:scale-95`}
                  style={{ backgroundColor: C.mintDeep, color: '#fff', boxShadow: '0 10px 34px rgba(14,117,102,0.4)' }}
                >
                  Reservar hora
                </a>
                <a
                  href="#resultados"
                  className={`${display.className} uppercase font-semibold text-sm tracking-[0.08em] px-7 py-3.5 rounded-full tap-44`}
                  style={{ border: `1px solid ${C.lineL}`, color: C.bone }}
                >
                  Ver resultados
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm tap-44"
                style={{ color: C.mintSoft }}
              >
                <Stars value={BIZ.rating} color="#F2C14E" />
                <span className="font-semibold">{BIZ.ratingLabel}</span>
                <span className="underline underline-offset-4 decoration-1" style={{ color: C.mutedL }}>
                  {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(20,160,140,0.5), transparent 70%)' }}
                aria-hidden="true"
              />
              <div className="nativa-arch-float relative">
                <ArchPhoto
                  src={`${IMG}/hero.webp`}
                  alt="Muro de Nativa con su logo y un producto Pink Glow en mano"
                  ratio="aspect-[3/4]"
                />
              </div>
              {/* Segundo arco: el registro real de avance */}
              <div
                className="absolute -bottom-8 -left-2 md:-left-8 w-[42%] overflow-hidden"
                style={{ borderRadius: '110px 110px 14px 14px', border: `3px solid ${C.deep}`, boxShadow: '0 16px 44px rgba(0,0,0,0.4)' }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`${IMG}/perfil.webp`}
                    alt="Antes y después de perfil facial publicado por Nativa"
                    fill
                    sizes="(min-width:768px) 18vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className={`${display.className} text-[10px] uppercase tracking-[0.24em] mt-12 text-center`} style={{ color: 'rgba(191,232,223,0.6)' }}>
                Fotos reales del negocio · sitio de ejemplo
              </p>
            </div>
          </Reveal>
        </div>
        {/* cinta de servicios */}
        <div className="border-t" style={{ borderColor: C.lineL }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-6 gap-y-1.5">
            {/* texto mintSoft sobre verde profundo — no tintar el fondo, baja el contraste */}
            {TICKER.map((t) => (
              <span key={t} className={`${display.className} uppercase font-semibold text-[11px] md:text-xs tracking-[0.2em]`} style={{ color: C.mintSoft }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tratamientos ── */}
      <section id="tratamientos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-end mb-12 md:mb-16">
          <Reveal>
            <Eyebrow>El menú de cabina</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.ink }}>
              Tratamientos
              <br />
              con registro
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-lg lg:ml-auto" style={{ color: C.muted }}>
              Cada sesión queda registrada con fotos: así se mide el avance
              real, no la promesa. Los tratamientos y valores finales se
              confirman al activar el sitio.
            </p>
          </Reveal>
        </div>
        <div className="space-y-14 md:space-y-20">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={80}>
              <article className={`grid md:grid-cols-12 gap-7 md:gap-12 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                <div className="md:col-span-5 md:[direction:ltr]">
                  <ArchPhoto src={s.src} alt={s.alt} ratio="aspect-[4/5]" />
                </div>
                <div className="md:col-span-7 md:[direction:ltr]">
                  <p className={`${display.className} font-bold text-6xl md:text-7xl leading-none mb-4`} style={{ color: 'transparent', WebkitTextStroke: `1.5px ${C.mint}` }} aria-hidden="true">
                    {s.n}
                  </p>
                  <p className={`${display.className} text-[10px] uppercase tracking-[0.3em] font-bold mb-2`} style={{ color: C.pinkText }}>
                    {s.tag}
                  </p>
                  <h3 className={`${display.className} font-bold text-2xl md:text-4xl leading-[1.05] mb-3`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-xl mb-5" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                  <a
                    href={WA_LINK_EVAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase text-xs font-bold tracking-[0.16em] underline underline-offset-[6px] decoration-1 tap-44`}
                    style={{ color: C.mintText }}
                  >
                    Consultar por este tratamiento →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Resultados: antes/después reales ── */}
      <section id="resultados" className="scroll-mt-20" style={{ backgroundColor: C.deep2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <Eyebrow light center>Resultados</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.bone }}>
                El antes y el después,
                <br />
                <span style={{ color: C.mintSoft }}>sin edición</span>
              </h2>
              <p className="text-sm md:text-base mt-5 max-w-xl mx-auto" style={{ color: C.mutedL }}>
                Registros que Nativa publica en su propia ficha de Google e
                Instagram — día 1, día 45, día 100.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-7">
            {RESULTADOS.map((r, i) => (
              <Reveal key={r.src} delay={i * 120}>
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4]" style={{ boxShadow: '0 20px 54px rgba(0,0,0,0.35)' }}>
                  <Image src={r.src} alt={r.alt} fill sizes="(min-width:768px) 31vw, 90vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Lo que dicen</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-5`} style={{ color: C.ink }}>
              5,0 estrellas
              <br />
              <span style={{ color: C.mintText }}>en Google</span>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              Reseñas reales de su ficha de Google Maps. Mencionan a Natalia y
              Valentina — las que atienden en la oficina 304.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 tap-44" style={{ color: C.mintText }}>
              <Stars value={BIZ.rating} color="#F2C14E" />
              <span className="text-sm font-semibold underline underline-offset-4">{BIZ.reviews} reseñas verificadas</span>
            </a>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 100}>
                <figure className="rounded-2xl p-6 h-full" style={{ backgroundColor: '#fff', border: `1px solid ${C.line}` }}>
                  <Stars value={5} color="#F2C14E" className="w-3.5 h-3.5" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed mt-3 mb-4" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${display.className} text-[10px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.mintText }}>
                    {r.author} <span className="font-normal" style={{ color: C.muted }}>· {r.when} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación: Torre Carmen ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>La casa</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mb-6`} style={{ color: C.bone }}>
              Oficina 304,
              <br />
              <span style={{ color: C.mintSoft }}>torre Carmen</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.mutedL }}>
              Pleno centro de Curicó: subes por Carmen 775 y el ruido queda
              abajo. Si no puedes ir, te reagendan sin problema.
            </p>
            <dl className="space-y-0 border-t mb-8" style={{ borderColor: C.lineL }}>
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                { k: 'Instagram', v: `@${BIZ.instagram} · ${BIZ.instagramFollowers} seguidores`, href: IG_URL },
              ].map((d) => (
                <div key={d.k} className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: C.lineL }}>
                  <dt className={`${display.className} text-[10px] uppercase tracking-[0.24em] font-bold`} style={{ color: C.mintSoft }}>{d.k}</dt>
                  <dd className="text-sm md:text-base text-right" style={{ color: C.bone }}>
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
              className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-4 rounded-full tap-44 active:scale-95 transition-transform`}
              style={{ backgroundColor: C.mintDeep, color: '#fff' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140} className="min-h-[320px]">
            <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.lineL}` }}>
              <LazyMap src={MAPS_EMBED} className="absolute inset-0 w-full h-full border-0" title="Mapa: Nativa Curicó, Torre Carmen, Carmen 775" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#082520' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="Logo de Nativa Curicó" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className={`${display.className} font-bold text-lg leading-none`} style={{ color: C.bone }}>{BIZ.short}</p>
              <p className="text-xs mt-1" style={{ color: C.mutedL }}>{BIZ.rubro} · {BIZ.city}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.mintSoft }}>{BIZ.phoneDisplay}</a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.mintSoft }}>@{BIZ.instagram}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.mintSoft }}>Google Maps</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-8">
          <p className={`${display.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(191,232,223,0.45)' }}>
            Sitio de ejemplo creado por <a href={SITE.url} className="underline underline-offset-2">Sitiazo</a> — con fotos y reseñas reales del negocio
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escríbenos por WhatsApp — ${BIZ.name}`} />
    </div>
  )
}
