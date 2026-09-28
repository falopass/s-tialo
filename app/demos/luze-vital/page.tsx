import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { SalonNav } from './chrome'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
  SERVICIOS,
  RESENAS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  crema: '#F7F2E8',
  arena: '#EFE6D3',
  card: '#FFFFFF',
  ink: '#123B3E',
  muted: '#5B6B67',
  teal: '#17858A',
  tealInk: '#0B5B5F',
  tealDeep: '#0E3235',
  tealSoft: '#D9EBE7',
  line: 'rgba(18,59,62,0.13)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'luze-vital',
  title: 'Luze Vital · Centro de estética integral en Arica',
  description:
    'Centro de estética integral en Marcos Maturana 2484, Arica: manicura, podología y un espacio para descansar. Martes a sábado. Agenda por WhatsApp.',
  image: '/demos/luze-vital/manicura.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El lugar', href: '#lugar' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Agenda', href: '#agenda' },
]

// ── Motivo: la estrella-flor del logo ────────────────────────

function Flor({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
    </svg>
  )
}

function Eyebrow({ children, color, center = false }: { children: React.ReactNode; color: string; center?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}
      style={{ color }}
    >
      <Flor className="w-[14px] h-[14px]" />
      {children}
    </p>
  )
}

/** Foto en arco: el motivo de la puerta del salón. */
function Arch({ src, alt, className = '', sizes }: { src: string; alt: string; className?: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden rounded-t-full ${className}`} style={{ boxShadow: '0 18px 40px rgba(14,50,53,0.16)' }}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}

export default function LuzeVitalPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.crema, color: C.ink }}>
      <style>{`
        @keyframes lz-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .lz-marquee { animation: lz-marquee 26s linear infinite }
        @keyframes lz-breathe { 0%,100% { transform: scale(1); opacity: .9 } 50% { transform: scale(1.06); opacity: 1 } }
        .lz-breathe { animation: lz-breathe 5s ease-in-out infinite; transform-origin: center }
        @media (prefers-reduced-motion: reduce) { .lz-marquee, .lz-breathe { animation: none } }
      `}</style>

      <SalonNav
        logo={`${IMG}/logo.webp`}
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
      />

      {/* ── Hero centrado: calma de spa ── */}
      <section id="inicio" className="relative pt-[96px] md:pt-[120px] pb-14 md:pb-20 text-center" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Flor className="lz-breathe w-[26px] h-[26px] mx-auto mb-6" color={C.teal} />
            <Eyebrow color={C.tealInk} center>Centro de estética integral · Marcos Maturana, Arica</Eyebrow>
            <h1
              className={`${display.className} font-medium uppercase tracking-[0.02em] leading-[1.04] text-[clamp(2.3rem,7.5vw,4.8rem)] mb-5`}
              style={{ color: C.ink }}
            >
              Un momento que es
              <br />
              <span style={{ color: C.tealInk }}>solo para ti</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-6" style={{ color: C.muted }}>
              Manicura, podología y estética integral en un lugar acogedor,
              a un paso de la rotonda de Sergio Onofre Jarpa.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Stars value={5} color={C.teal} />
              <span className={`${mono.className} text-xs md:text-sm`} style={{ color: C.ink }}>
                {BIZ.rating} · {BIZ.reviewsCount} reseñas en Google
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm md:text-base px-8 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.tealInk }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm md:text-base px-8 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(18,59,62,0.3)', color: C.ink }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="relative max-w-[300px] md:max-w-[340px] mx-auto">
              <Arch
                src={`${IMG}/manicura.webp`}
                alt="Manicura terminada de Luze Vital: uñas cuidadas junto a flores rosadas"
                className="aspect-[4/5] border-[6px] border-white"
                sizes="(min-width: 768px) 340px, 80vw"
              />
              <div
                className={`${mono.className} absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] uppercase tracking-wider px-4 py-2 rounded-full shadow-lg`}
                style={{ backgroundColor: C.tealDeep, color: C.crema }}
              >
                mar–sáb · 9:00–19:30
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de servicios ── */}
      <div className="overflow-hidden py-3" style={{ backgroundColor: C.tealDeep }} aria-hidden="true">
        <div className="lz-marquee flex w-max items-center gap-10">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10">
              {['Manicura', 'Podología', 'Estética integral', 'Relajación', 'Arica'].map((s) => (
                <span key={`${dup}-${s}`} className={`${display.className} uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap flex items-center gap-10`} style={{ color: 'rgba(247,242,232,0.92)' }}>
                  {s}
                  <Flor className="w-[13px] h-[13px]" color="rgba(247,242,232,0.5)" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── El ritual: cómo es una visita ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color={C.tealInk}>Así es una visita</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase tracking-[0.02em] text-4xl md:text-5xl leading-[1.04] mb-12`} style={{ color: C.ink }}>
              Llegas, respiras,
              <br />
              <span style={{ color: C.tealInk }}>te cuidan</span>
            </h2>
          </Reveal>
          <div className="relative">
            <span aria-hidden="true" className="hidden md:block absolute top-[26px] left-0 right-0 h-px" style={{ backgroundColor: 'rgba(18,59,62,0.2)' }} />
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 relative">
              {[
                { n: '01', t: 'Agenda por WhatsApp', d: 'Un mensaje basta para coordinar tu hora de martes a sábado.' },
                { n: '02', t: 'Llega y respira', d: 'El lugar es acogedor y pensado para la relajación — así lo cuentan las reseñas.' },
                { n: '03', t: 'Sales renovada', d: 'Manos, pies o estética integral: la atención es minuciosa y profesional.' },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 130}>
                  <div className="flex md:flex-col items-start gap-4">
                    <span
                      className={`${mono.className} shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center text-sm font-bold border-2`}
                      style={{ backgroundColor: C.crema, borderColor: C.tealInk, color: C.tealInk }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h3 className={`${display.className} uppercase tracking-[0.04em] font-semibold text-lg md:text-xl mb-1.5`} style={{ color: C.ink }}>
                        {s.t}
                      </h3>
                      <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.muted }}>
                        {s.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Servicios en arco ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color={C.tealInk}>Lo que ofrecen</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase tracking-[0.02em] text-4xl md:text-5xl leading-[1.04] mb-3`} style={{ color: C.ink }}>
              Estética integral,
              <br />
              <span style={{ color: C.tealInk }}>de verdad</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12" style={{ color: C.muted }}>
              El letrero dice «centro de estética integral» y las reseñas
              nombran manicura y podología con nombre y apellido.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 120}>
                <figure className="text-center">
                  <Arch src={`${IMG}/${s.img}.webp`} alt={s.alt} className="aspect-[3/4] mb-5" sizes="(min-width: 640px) 30vw, 90vw" />
                  <h3 className={`${display.className} uppercase tracking-[0.06em] font-semibold text-xl mb-1.5`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-[270px] mx-auto" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <p className={`${mono.className} text-[11px] leading-relaxed mt-10 max-w-xl`} style={{ color: C.muted }}>
              en las reseñas aparecen Angélica (manicura) y Luz (podología)
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El lugar ── */}
      <section id="lugar" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-14 items-center">
            <Reveal>
              <Eyebrow color={C.tealInk}>El local</Eyebrow>
              <h2 className={`${display.className} font-medium uppercase tracking-[0.02em] text-4xl md:text-5xl leading-[1.04] mb-5`} style={{ color: C.ink }}>
                Una casa en
                <br />
                <span style={{ color: C.tealInk }}>Marcos Maturana</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                El centro está en Marcos Maturana 2484, a un paso de la
                rotonda de Sergio Onofre Jarpa. Se reconoce por el círculo
                de Luze Vital en la entrada.
              </p>
              <ul className="space-y-3">
                {HORARIO.map((h) => (
                  <li key={h.dia} className="flex items-baseline justify-between gap-3 text-sm border-b pb-3" style={{ borderColor: C.line, color: C.muted }}>
                    <span className="font-semibold" style={{ color: C.ink }}>{h.dia}</span>
                    <span className={`${mono.className} text-xs md:text-sm`}>{h.horas}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-[22px] aspect-[3/4] border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/entrada.webp`}
                    alt="Recepción de Luze Vital con cortinas y luz cálida"
                    fill
                    sizes="(min-width: 1024px) 28vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[22px] aspect-[3/4] border mt-8" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/puerta.webp`}
                    alt="El círculo con el logo de Luze Vital en la puerta del centro"
                    fill
                    sizes="(min-width: 1024px) 28vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className={`${mono.className} text-[11px] mt-3`} style={{ color: C.muted }}>
                la entrada y el logo en la puerta, fotos reales
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color="#9ED8D2">Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mb-10 md:mb-12">
              <h2 className={`${display.className} font-medium uppercase tracking-[0.02em] text-4xl md:text-6xl leading-[1.0]`} style={{ color: C.crema }}>
                Todas cinco
                <br />
                <span style={{ color: '#9ED8D2' }}>estrellas</span>
              </h2>
              <div className="pb-1.5 md:pb-2">
                <Stars value={5} color="#9ED8D2" className="w-5 h-5" />
                <p className={`${mono.className} text-xs md:text-sm mt-1.5`} style={{ color: 'rgba(247,242,232,0.8)' }}>
                  {BIZ.rating} · {BIZ.reviewsCount} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure className="h-full rounded-[18px] p-5 flex flex-col" style={{ backgroundColor: 'rgba(247,242,232,0.07)', border: '1px solid rgba(247,242,232,0.15)' }}>
                  <Stars value={5} color="#9ED8D2" className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(247,242,232,0.92)' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-wider mt-4`} style={{ color: 'rgba(247,242,232,0.6)' }}>
                    {r.nombre} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda: mapa + ficha ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-8">
          <Reveal>
            <Eyebrow color={C.tealInk}>Agenda</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase tracking-[0.02em] text-4xl md:text-5xl leading-[1.04] mb-3`} style={{ color: C.ink }}>
              Reserva
              <br />
              <span style={{ color: C.tealInk }}>tu hora</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              De martes a sábado, de 9:00 a 19:30. Un mensaje de WhatsApp
              y quedas agendada.
            </p>
          </Reveal>
        </div>
        <div className="relative">
          <div className="h-[300px] md:h-[460px]">
            <LazyMap
              title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="px-5 md:px-8">
            <div className="relative mt-6 md:mt-0 md:absolute md:top-1/2 md:left-8 md:-translate-y-1/2 md:w-[400px] z-10">
              <Reveal>
                <div className="rounded-[24px] border p-6 md:p-7 max-w-[400px] mx-auto md:mx-0 md:max-w-none shadow-xl" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <p className={`${display.className} uppercase tracking-[0.06em] font-semibold text-lg mb-1`} style={{ color: C.ink }}>
                    {BIZ.name}
                  </p>
                  <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                    {BIZ.address}, {BIZ.city}
                  </address>
                  <ul className="space-y-2 mb-5">
                    {HORARIO.map((h) => (
                      <li key={h.dia} className="flex items-baseline justify-between gap-3 text-sm" style={{ color: C.muted }}>
                        <span className="font-semibold" style={{ color: C.ink }}>{h.dia}</span>
                        <span className={`${mono.className} text-xs md:text-[13px]`}>{h.horas}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`${mono.className} text-[11px] leading-relaxed mb-5`} style={{ color: C.muted }}>
                    horario publicado en su ficha de Google
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} uppercase tracking-[0.06em] font-semibold text-sm px-5 py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                      style={{ backgroundColor: C.tealInk }}
                    >
                      Agendar por WhatsApp
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} uppercase tracking-[0.06em] font-semibold text-sm px-5 py-2.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                      style={{ borderColor: 'rgba(18,59,62,0.3)', color: C.ink }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="h-10 md:h-0" />
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.tealDeep }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Flor className="w-[26px] h-[26px] mx-auto mb-6" color="#9ED8D2" />
            <h2
              className={`${display.className} font-medium uppercase tracking-[0.02em] text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.06] mb-6`}
              style={{ color: C.crema }}
            >
              Hace falta poco
              <br />
              <span style={{ color: '#9ED8D2' }}>para sentirte bien</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(247,242,232,0.82)' }}>
              Escríbeles por WhatsApp para agendar manicura, podología o
              consultar por los demás servicios del centro.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase tracking-[0.08em] font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.teal, color: C.tealDeep }}
            >
              Agendar por WhatsApp
            </a>
            <p className={`${mono.className} text-xs mt-5`} style={{ color: 'rgba(247,242,232,0.8)' }}>
              {BIZ.phoneDisplay} · @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.tealDeep, color: C.crema }}>
        <div className="border-t" style={{ borderColor: 'rgba(247,242,232,0.15)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24">
            <p className={`${display.className} uppercase tracking-[0.06em] font-semibold text-xl mb-1 flex items-center gap-3`}>
              <Flor className="w-5 h-5" color="#9ED8D2" />
              {BIZ.name}
            </p>
            <p className="text-sm mb-2" style={{ color: 'rgba(247,242,232,0.8)' }}>
              {BIZ.address}, {BIZ.city}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,242,232,0.7)' }}>
              Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono, horario,
              rating y reseñas son los datos reales del negocio, tomados de
              Google Maps y su Instagram.
            </p>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Agendar por WhatsApp con ${BIZ.name}`} />
    </div>
  )
}
