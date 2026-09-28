import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, PHOTO } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  ink: '#0C0C0E',
  lime: '#C7F235',
  card: '#1A1B1F',
  humo: '#F5F5F2',
  dim: 'rgba(245,245,242,0.72)',
  faint: 'rgba(245,245,242,0.55)',
  lineLight: 'rgba(245,245,242,0.18)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'gimnasio-body-fitness-talca',
  title: 'Gimnasio Body Fitness Talca — Máquinas y pesas',
  description: 'Gimnasio en Talca con máquinas de entrenamiento y pesas. Lun–Vie 07:00–23:00. Consulta por WhatsApp.',
  image: PHOTO,
})

const ENCUENTRAS = [
  {
    num: '01',
    name: 'Máquinas de entrenamiento',
    desc: 'Sala equipada con máquinas para trabajar cada grupo muscular, como indica la ficha del gimnasio.',
  },
  {
    num: '02',
    name: 'Pesas',
    desc: 'Zona de pesas para entrenar fuerza a tu ritmo: el segundo pilar del gimnasio según su ficha y reseñas.',
  },
  {
    num: '03',
    name: 'Horario amplio',
    desc: 'De lunes a viernes abre de 07:00 a 23:00: entrenas antes del trabajo, en la tarde o en la noche.',
  },
]

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-bold`} style={{ color: C.lime }}>
      {children}
    </p>
  )
}

export default function BodyFitnessPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.ink, color: C.humo }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero con foto a sangre ── */}
        <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
          <Image
            src={PHOTO}
            alt={BIZ.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(12,12,14,0.8) 0%, rgba(12,12,14,0.5) 40%, rgba(12,12,14,0.94) 100%)',
            }}
            aria-hidden="true"
          />
          {/* tipografía outline decorativa */}
          <svg
            aria-hidden="true"
            className="absolute top-[14%] left-0 w-full h-[26vw] max-h-64 pointer-events-none select-none"
            viewBox="0 0 1200 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="600"
              y="235"
              textAnchor="middle"
              fill="none"
              stroke="rgba(245,245,242,0.22)"
              strokeWidth="1.5"
              fontSize="250"
              style={{ fontFamily: display.style.fontFamily }}
            >
              FUERZA
            </text>
          </svg>
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-12 md:pb-14">
            <Reveal>
              <Label>Gimnasio en Talca · Máquinas y pesas</Label>
              <h1
                className={`${display.className} uppercase leading-[0.92] text-[clamp(3.6rem,15vw,9rem)] mt-4 mb-6`}
                style={{ color: C.humo }}
              >
                Body<br />
                <span style={{ color: C.lime }}>Fitness</span>
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 border mb-8" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(12,12,14,0.55)' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.lime }} aria-hidden="true" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: C.humo }}>
                  Lun–Vie 07:00–23:00
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.lime, color: C.ink }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(245,245,242,0.5)', color: C.humo }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Banda marquee estática ── */}
        <div className="overflow-hidden border-y" style={{ borderColor: 'rgba(199,242,53,0.4)', backgroundColor: C.ink }} aria-hidden="true">
          <p className={`${display.className} uppercase whitespace-nowrap text-2xl md:text-4xl py-3 px-4`} style={{ color: C.lime }}>
            Fuerza · Máquinas · Pesas · Talca · Fuerza · Máquinas · Pesas · Talca · Fuerza · Máquinas · Pesas · Talca
          </p>
        </div>

        {/* ── 01 Qué encuentras ── */}
        <section id="equipamiento" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.humo }}>
                <Label><span style={{ color: C.humo }}>N°01</span> — Qué encuentras</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.faint }}>
                  según su ficha y reseñas
                </p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`} style={{ color: C.humo }}>
                Lo esencial
                <br />
                <span style={{ color: C.lime }}>para entrenar</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ENCUENTRAS.map((e, i) => (
                <Reveal key={e.name} delay={i * 80} className="h-full">
                  <article
                    className="h-full border p-6 md:p-7 flex flex-col"
                    style={{
                      borderColor: C.lineLight,
                      backgroundColor: C.card,
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)',
                    }}
                  >
                    <span className={`${display.className} text-lg mb-8`} style={{ color: 'rgba(245,245,242,0.62)' }}>{e.num}</span>
                    <h3 className={`${display.className} uppercase text-2xl md:text-[28px] leading-tight mb-3`} style={{ color: C.humo }}>
                      {e.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.dim }}>
                      {e.desc}
                    </p>
                    <span className="mt-auto pt-6 block w-10 h-1" style={{ backgroundColor: C.lime }} aria-hidden="true" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 La sala ── */}
        <section id="sala" className="scroll-mt-20 border-t" style={{ borderColor: C.lineLight }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.humo }}>
                <Label><span style={{ color: C.humo }}>N°02</span> — La sala</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.faint }}>
                  foto real de su ficha
                </p>
              </div>
            </Reveal>
            <Reveal>
              <figure className="border" style={{ borderColor: C.lineLight, backgroundColor: C.card }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={PHOTO}
                    alt={BIZ.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold flex flex-wrap items-center justify-between gap-2" style={{ borderColor: C.lineLight, color: C.faint }}>
                  <span>Fig. 01 — Sala, foto de la ficha de Google Maps</span>
                  <span style={{ color: C.lime }}>Body Fitness · Talca</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── 03 Horario y ubicación ── */}
        <section id="contacto" className="scroll-mt-20 border-t" style={{ borderColor: C.lineLight }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.humo }}>
                <Label><span style={{ color: C.humo }}>N°03</span> — Horario y ubicación</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.faint }}>
                  Pje. Cuatro Sur · Talca
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
              <Reveal>
                <div className="border h-full flex flex-col" style={{ borderColor: C.lineLight, backgroundColor: C.card }}>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.lineLight }}>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: C.lime }}>Dirección</p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.humo }}>
                      <strong className="font-bold">{BIZ.address}</strong>
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: C.lime, textDecorationColor: 'rgba(199,242,53,0.35)' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-6 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.lime }}>Horario</p>
                    <ul className="space-y-2.5">
                      {BIZ.hours.map((h) => (
                        <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                          <span className="font-bold" style={{ color: C.humo }}>{h.days}</span>
                          <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.lineLight }} aria-hidden="true" />
                          <span style={{ color: C.dim }}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.lineLight, backgroundColor: C.card }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, Talca`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.lineLight, color: C.faint }}>
                    Pje. Cuatro Sur 1565 · Talca · Maule
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre CTA lima ── */}
        <section style={{ backgroundColor: C.lime }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.ink }}>
                Hoy es buen día
                <br />
                para entrenar
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.ink, color: C.humo }}
              >
                Consultar por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
