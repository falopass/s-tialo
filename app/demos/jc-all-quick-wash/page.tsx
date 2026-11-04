import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F5FAFF',
  card: '#FFFFFF',
  ink: '#101820',
  muted: '#45525E',
  line: 'rgba(16,24,32,0.16)',
  blue: '#1F6FEB',
  sky: '#7FD1F0',
  lime: '#B8F05A',
  graphite: '#101820',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jc-all-quick-wash',
  title: 'JC All Quick Wash — Lavado de autos en Temuco',
  description:
    'Lavado de autos en Av. Pedro de Valdivia 0411, Temuco. Lavado exterior, aspiración y limpieza interior. 4,6 estrellas en Google. Agenda por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Dónde', href: '#donde' },
]

const MARQUEE = [
  'Lavado exterior',
  'Aspiración',
  'Limpieza interior',
  'Temuco',
  'Agenda por WhatsApp',
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Detalle del trabajo de lavado en JC All Quick Wash, Temuco',
    name: 'Lavado exterior',
    desc: 'Carrocería, llantas y vidrios por fuera. Llega con polvo de camino, sale brillando.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Detalle de limpieza en JC All Quick Wash, Temuco',
    name: 'Aspiración',
    desc: 'Aspirado de la cabina completa: asientos, alfombras y esos rincones donde se junta todo.',
  },
  {
    src: `${IMG}/auto.webp`,
    alt: 'Auto atendido en JC All Quick Wash, Temuco',
    name: 'Limpieza interior',
    desc: 'Tablero, puertas y superficies interiores: te subes a un auto que se siente como nuevo.',
  },
]

const PASOS = [
  {
    num: '01',
    name: 'Escríbenos por WhatsApp',
    desc: 'Cuéntanos qué necesita tu auto y coordinamos el lavado. Sin formularios ni vueltas.',
  },
  {
    num: '02',
    name: 'Llegas al local',
    desc: `${BIZ.address}, ${BIZ.city}. Dejas el auto con nosotros.`,
  },
  {
    num: '03',
    name: 'Lo retiras limpio',
    desc: 'Coordinamos el retiro por WhatsApp. Te subes y te vas.',
  },
]

function Gota({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}

function Ola({ className = 'w-24 h-3', color = C.sky }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 12" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 7 Q15 1 30 7 T60 7 T90 7 T120 7" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function SpeedLines({ className = '', color = 'rgba(127,209,240,0.4)' }: { className?: string; color?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ backgroundImage: `repeating-linear-gradient(115deg, transparent 0 16px, ${color} 16px 17.5px)` }}
    />
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-2.5 font-semibold"
      style={{ color: light ? C.lime : C.blue }}
    >
      <Gota className="w-3.5 h-3.5" color={light ? C.sky : C.blue} />
      {children}
    </p>
  )
}

export default function JcAllQuickWashPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        @keyframes jc-sweep { from { transform: translate(-6%, 6%) scale(1.08); opacity: 0.35 } to { transform: none; opacity: 1 } }
        .jc-sweep { animation: jc-sweep 1.1s cubic-bezier(0.2,0.7,0.2,1) both }
        @keyframes jc-wipe { from { transform: translateX(-42px); opacity: 0 } to { transform: none; opacity: 1 } }
        .jc-wipe { animation: jc-wipe 0.55s cubic-bezier(0.16,1,0.3,1) 0.25s both }
        @keyframes jc-marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .jc-marq { animation: jc-marq 24s linear infinite }
        @keyframes jc-card { from { transform: translateY(24px) skewY(2.5deg); opacity: 0 } to { transform: none; opacity: 1 } }
        .jc-card { animation: jc-card 0.7s cubic-bezier(0.2,0.7,0.2,1) both; animation-timeline: view(); animation-range: entry 0% entry 55% }
        @media (prefers-reduced-motion: reduce) {
          .jc-sweep, .jc-wipe, .jc-marq, .jc-card { animation: none }
        }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} font-extrabold uppercase tracking-wide`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(245,250,255,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la foto entra en barrido diagonal, el título como limpiaparabrisas ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.graphite }}>
        <div className="absolute inset-0 jc-sweep">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Lavado de autos JC All Quick Wash en Av. Pedro de Valdivia, Temuco"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,24,32,0.66) 0%, rgba(16,24,32,0.2) 45%, rgba(16,24,32,0.9) 100%)',
          }}
        />
        {/* sello de opiniones */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44"
              style={{ backgroundColor: 'rgba(245,250,255,0.95)', color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.blue} size={14} />
              {BIZ.ratingDisplay} · {BIZ.reviews} opiniones
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Temuco · Lavado de autos</Eyebrow>
          </Reveal>
          <h1
            className={`${display.className} jc-wipe font-black uppercase leading-[0.95] text-[clamp(2.7rem,10.5vw,6rem)] mb-6`}
            style={{ color: C.paper }}
          >
            Tu auto limpio
            <br />
            <span style={{ color: C.sky }}>antes de que te subas.</span>
          </h1>
          <Reveal delay={200}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(245,250,255,0.88)' }}>
              Lavado exterior, aspiración y limpieza interior en {BIZ.address},{' '}
              {BIZ.city}. Escribes, llegas y te llevas el auto brillando.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: 'rgba(245,250,255,0.55)', color: C.paper }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(245,250,255,0.22)', backgroundColor: 'rgba(16,24,32,0.82)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-medium" style={{ color: 'rgba(245,250,255,0.8)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.lime }} aria-hidden="true" />
              Agenda directa por WhatsApp
            </span>
            <span className="hidden md:inline" style={{ color: C.sky }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Franja inclinada en bucle ── */}
      <div className="overflow-hidden py-9" style={{ backgroundColor: C.paper }} aria-hidden="true">
        <div className="w-[110%] -ml-[5%] py-3.5" style={{ backgroundColor: C.blue, transform: 'rotate(-2deg)' }}>
          <div className="jc-marq flex w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {MARQUEE.map((t) => (
                  <span
                    key={`${copy}-${t}`}
                    className={`${display.className} font-bold uppercase tracking-[0.12em] text-base md:text-lg px-5 flex items-center gap-5 whitespace-nowrap`}
                    style={{ color: '#FFFFFF' }}
                  >
                    {t}
                    <Gota className="w-3 h-3" color={C.lime} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Servicios: tarjetas que entran con skew y se asientan ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.ink }}>
              Llega sucio,
              <br />
              <span style={{ color: C.blue }}>sale brillando</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Las tres líneas de trabajo del local. El detalle y el valor
              de cada lavado se coordinan por WhatsApp según tu auto.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <article
              key={s.name}
              className="jc-card border-2 overflow-hidden"
              style={{ backgroundColor: C.card, borderColor: C.ink }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, calc(100vw - 40px)"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className={`${display.className} font-black text-sm mb-2 flex items-center gap-2`} style={{ color: C.blue }}>
                  <Gota className="w-3.5 h-3.5" color={C.lime} />
                  0{i + 1}
                </p>
                <h3 className={`${display.className} font-extrabold uppercase text-2xl md:text-[26px] leading-[1.05] mb-2.5`} style={{ color: C.ink }}>
                  {s.name}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section id="como-funciona" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.graphite }}>
        <SpeedLines className="absolute top-0 inset-x-0 h-[3px]" color={C.blue} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo funciona</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.paper }}>
                Tres pasos,
                <br />
                <span style={{ color: C.lime }}>cero espera innecesaria</span>
              </h2>
              <div className="lg:justify-self-end">
                <Ola className="w-32 h-3 mb-3" color={C.sky} />
                <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'rgba(245,250,255,0.8)' }}>
                  Todo se coordina por WhatsApp: escribes, llegas y retiras.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(245,250,255,0.16)' }}>
            {PASOS.map((p, i) => (
              <Reveal key={p.num} delay={i * 110}>
                <div className="h-full px-5 md:px-6 py-7 md:py-9" style={{ backgroundColor: C.graphite }}>
                  <p className={`${display.className} font-black text-4xl md:text-5xl leading-none mb-4`} style={{ color: C.lime }}>
                    {p.num}
                  </p>
                  <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl leading-[1.05] mb-2.5`} style={{ color: C.paper }}>
                    {p.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(245,250,255,0.78)' }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] inline-block text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.lime, color: C.graphite }}
              >
                Empezar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Confianza: lo que dice Google ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 items-center border-2 p-6 md:p-10" style={{ borderColor: C.ink, backgroundColor: C.card }}>
          <Reveal>
            <Eyebrow>Lo que dice Google</Eyebrow>
            <p className={`${display.className} font-black leading-none text-[5rem] md:text-[6.5rem] mb-3`} style={{ color: C.blue }}>
              {BIZ.ratingDisplay}
            </p>
            <Stars value={BIZ.rating} color={C.blue} size={22} />
          </Reveal>
          <Reveal delay={120}>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[1.0] mb-4`} style={{ color: C.ink }}>
              {BIZ.reviews} opiniones
              <br />
              <span style={{ color: C.blue }}>de clientes reales</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
              {BIZ.name} mantiene {BIZ.ratingDisplay} sobre 5 en su ficha de
              Google, con {BIZ.reviews} opiniones publicadas.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-semibold">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44"
                style={{ color: C.blue, textDecorationColor: 'rgba(31,111,235,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44"
                style={{ color: C.ink, textDecorationColor: 'rgba(16,24,32,0.3)' }}
              >
                @{BIZ.instagram} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde ── */}
      <section id="donde" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              Pedro de Valdivia,
              <br />
              <span style={{ color: C.blue }}>{BIZ.city}</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm px-7 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.ink, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.graphite }}>
        <SpeedLines className="absolute inset-0" color="rgba(127,209,240,0.09)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Ola className="w-28 h-3 mx-auto mb-8" color={C.sky} />
            <h2 className={`${display.className} font-black uppercase text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[0.98] mb-6`} style={{ color: C.paper }}>
              Deja el auto,
              <br />
              <span style={{ color: C.lime }}>súbelo limpio</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-3 leading-relaxed" style={{ color: 'rgba(245,250,255,0.8)' }}>
              Escríbenos por WhatsApp y coordinamos tu lavado.
            </p>
            <p className={`${display.className} font-bold text-lg md:text-xl mb-9`} style={{ color: C.sky }}>
              <a href={`tel:${BIZ.phoneTel}`} className="tap-44">{BIZ.phoneDisplay}</a>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-bold uppercase tracking-[0.04em] inline-block text-sm md:text-base px-8 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0B1117', color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} font-extrabold uppercase text-xl mb-1 flex items-center gap-2.5`}>
              <Gota className="w-4 h-4" color={C.sky} />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(245,250,255,0.85)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(245,250,255,0.85)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,250,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: 'rgba(245,250,255,0.85)' }}>
            Página de muestra preparada por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.sky }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, fotos y opinión de
            Google son datos públicos del negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.sky }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
