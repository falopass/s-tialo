import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_PINTURA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  SERVICIOS,
  HORARIO,
  RESEÑAS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--f-mono',
})

export const metadata: Metadata = demoMetadata({
  slug: 'jl-automotriz-talca',
  title: `${BIZ.name} — ${BIZ.rubro} en ${BIZ.city}`,
  description: `Mecánica, diagnóstico y pintura automotriz en ${BIZ.address}, ${BIZ.city}. Atención hasta la medianoche y directa con el dueño.`,
  image: `${IMG}/pintura.webp`,
})

const C = {
  grafito: '#17171a',
  carbon: '#0e0e10',
  acero: '#232327',
  ambar: '#ffb400',
  cinta: '#e8d9b0',
  papel: '#f2efe8',
  linea: 'rgba(255,255,255,0.12)',
}

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#taller', label: 'El taller' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#donde', label: 'Dónde' },
]

function Wrench({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.7 18.3 15 11.6a6 6 0 0 0 .4-2.3A6.4 6.4 0 0 0 9 2.9L12.7 6.6 9.3 10 5.6 6.3A6.4 6.4 0 0 0 9 15.7c.8 0 1.6-.1 2.3-.4l6.7 6.7a1.4 1.4 0 0 0 2 0l1.7-1.7a1.4 1.4 0 0 0 0-2Z" />
    </svg>
  )
}

function TapeLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block -rotate-1 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] shadow-md"
      style={{
        background: `linear-gradient(105deg, ${C.cinta} 0%, #d8c48f 100%)`,
        color: '#3d3421',
        fontFamily: 'var(--f-mono)',
        clipPath: 'polygon(2% 0, 100% 4%, 98% 100%, 0 96%)',
      }}
    >
      {children}
    </span>
  )
}

export default function JlAutomotriz() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{ background: C.carbon, color: C.papel, fontFamily: 'var(--f-body)' }}>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(14,14,16,0.92)', ink: '#f2efe8', line: 'rgba(255,255,255,0.12)', btnBg: C.ambar, btnInk: '#17171a' }}
      />

      {/* HERO */}
      <header className="relative min-h-[92vh] overflow-hidden md:min-h-screen">
        <Image src={`${IMG}/pintura.webp`} alt={`Auto enmascarado listo para pintura en ${BIZ.name}`}
          fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(14,14,16,0.55) 0%, rgba(14,14,16,0.35) 40%, rgba(14,14,16,0.95) 100%)` }} />
        {/* cinta adhesiva horizontal */}
        <div className="absolute left-0 right-0 top-[72px] h-8 opacity-70 md:top-[80px]" aria-hidden
          style={{ background: `repeating-linear-gradient(45deg, ${C.cinta} 0 14px, #d3bd83 14px 28px)`, clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)', mixBlendMode: 'screen' }} />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-36 md:min-h-screen">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <TapeLabel>Taller · {BIZ.city}</TapeLabel>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-1.5 text-xs backdrop-blur"
                style={{ fontFamily: 'var(--f-mono)' }}>
                <Stars value={5} className="h-3.5 w-3.5" color={C.ambar} />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={`${display.className} mt-5 max-w-3xl text-5xl font-bold uppercase leading-[0.98] md:text-8xl`}
              style={{ letterSpacing: '-0.01em' }}>
              Tu auto entra malo y sale <span style={{ color: C.ambar }}>listo</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Mecánica, diagnóstico honesto y pintura automotriz en {BIZ.address}, {BIZ.city}.
              Lo atiende {BIZ.dueno}, el dueño, y te dice lo que el auto tiene — ni más ni menos.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-base font-bold tap-44"
                style={{ background: C.ambar, color: C.carbon, clipPath: 'polygon(0 8%, 100% 0, 98% 92%, 2% 100%)' }}>
                <Wrench className="h-5 w-5" /> Agendar hora
              </a>
              <a href={WA_PINTURA} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/35 px-7 py-3 text-base font-semibold text-white tap-44"
                style={{ clipPath: 'polygon(2% 0, 98% 8%, 100% 100%, 0 92%)' }}>
                Cotizar pintura
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* HORARIO DESTACADO */}
      <div className="border-y" style={{ borderColor: C.linea, background: C.grafito }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6">
          <Reveal className="flex items-center gap-4">
            <TapeLabel>Horario</TapeLabel>
            <p className={`${display.className} text-xl font-semibold uppercase tracking-wide md:text-2xl`}>
              Abierto hasta la medianoche los lunes
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-sm text-white/60">
              Si trabajas de día, puedes dejar el auto después de la pega. Sábado hasta las 14:00.
            </p>
          </Reveal>
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <TapeLabel>Lo que hace el taller</TapeLabel>
          <h2 className={`${display.className} mt-4 max-w-2xl text-4xl font-bold uppercase leading-none md:text-6xl`}>
            Diagnóstico primero, cotización honesta después
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <article className="relative h-full overflow-hidden border p-6 md:p-7"
                style={{ borderColor: C.linea, background: i % 2 === 0 ? C.grafito : C.acero }}>
                <span className={`${display.className} absolute -right-2 -top-4 text-7xl font-bold opacity-10 md:text-8xl`}
                  style={{ color: C.ambar }} aria-hidden>
                  {s.n}
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ fontFamily: 'var(--f-mono)', color: C.ambar }}>
                  OT·{s.n}
                </p>
                <h3 className={`${display.className} mt-2 text-2xl font-semibold uppercase leading-tight md:text-3xl`}>
                  {s.titulo}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">{s.texto}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="border border-white/20 px-2.5 py-1 text-xs text-white/75"
                      style={{ fontFamily: 'var(--f-mono)' }}>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EL TALLER */}
      <section id="taller" className="border-t" style={{ borderColor: C.linea, background: C.grafito }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.15fr] md:py-24">
          <div>
            <Reveal>
              <TapeLabel>El taller</TapeLabel>
              <h2 className={`${display.className} mt-4 text-4xl font-bold uppercase leading-none md:text-5xl`}>
                Un taller de barrio en la Quinta Norte
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                {BIZ.dueno} atiende personalmente: te muestra la pieza, te explica la falla
                y te entrega el auto cuando dijo. Así se ganó las {BIZ.reviews} reseñas de cinco estrellas.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-6 space-y-3">
                {['Diagnóstico junto al cliente', 'Cotización antes de abrir el auto', 'Entrega en la fecha comprometida'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-6 w-6 items-center justify-center" style={{ background: C.ambar, color: C.carbon, clipPath: 'polygon(0 10%, 100% 0, 95% 90%, 5% 100%)' }}>
                      <Wrench className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="grid gap-4">
            <Reveal>
              <figure className="relative overflow-hidden border" style={{ borderColor: C.linea }}>
                <Image src={`${IMG}/pintura.webp`} alt={`Auto enmascarado para pintura en ${BIZ.name}, ${BIZ.city}`}
                  width={1200} height={670} className="h-64 w-full object-cover md:h-72" />
                <figcaption className="absolute bottom-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider"
                  style={{ background: C.ambar, color: C.carbon, fontFamily: 'var(--f-mono)' }}>
                  Enmascarado para pintura — foto real del taller
                </figcaption>
              </figure>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: 'bosquejo-mecanica', alt: `Bosquejo: mecánico revisando el motor de una camioneta` },
                { src: 'bosquejo-cabina', alt: `Bosquejo: auto enmascarado en zona de pintura` },
              ].map((f, i) => (
                <Reveal key={f.src} delay={100 + i * 70}>
                  <figure className="relative overflow-hidden border" style={{ borderColor: C.linea }}>
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} width={1200} height={800}
                      className="h-40 w-full object-cover md:h-48" />
                    <figcaption className="absolute right-2 top-2 -rotate-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: C.cinta, color: '#3d3421', fontFamily: 'var(--f-mono)', clipPath: 'polygon(2% 0, 100% 6%, 98% 100%, 0 94%)' }}>
                      Bosquejo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal delay={180}>
              <figure className="relative overflow-hidden border" style={{ borderColor: C.linea }}>
                <Image src={`${IMG}/porton.webp`} alt={`Portón del taller ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                  width={1080} height={510} className="h-44 w-full object-cover md:h-52" />
                <figcaption className="absolute bottom-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider"
                  style={{ background: C.ambar, color: C.carbon, fontFamily: 'var(--f-mono)' }}>
                  Portón 1175 — foto real (Google Street View)
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <TapeLabel>Palabra de cliente</TapeLabel>
          <h2 className={`${display.className} mt-4 text-4xl font-bold uppercase leading-none md:text-6xl`}>
            Cinco estrellas, treinta y una veces
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {RESEÑAS.map((r, i) => (
            <Reveal key={r.autor} delay={i * 80}>
              <blockquote className="relative h-full border p-6" style={{ borderColor: C.linea, background: C.grafito }}>
                <div className="absolute -top-2.5 left-5 h-5 w-16 opacity-80" aria-hidden
                  style={{ background: `repeating-linear-gradient(45deg, ${C.cinta} 0 8px, #d3bd83 8px 16px)` }} />
                <Stars value={5} className="mt-2 h-4 w-4" color={C.ambar} />
                <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">“{r.texto}”</p>
                <footer className="mt-4 text-xs text-white/50" style={{ fontFamily: 'var(--f-mono)' }}>
                  {r.autor} · {r.detalle}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DÓNDE */}
      <section id="donde" className="border-t" style={{ borderColor: C.linea, background: C.grafito }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div>
            <Reveal>
              <TapeLabel>Cómo llegar</TapeLabel>
              <h2 className={`${display.className} mt-4 text-4xl font-bold uppercase leading-none md:text-5xl`}>
                {BIZ.address}
              </h2>
              <p className="mt-3 text-white/70">{BIZ.city}, región del {BIZ.region}. Portón con el número pintado.</p>
            </Reveal>
            <Reveal delay={100}>
              <dl className="mt-6 space-y-2.5">
                {HORARIO.map((h) => (
                  <div key={h.dias} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2.5">
                    <dt className="text-sm text-white/60">{h.dias}</dt>
                    <dd className="text-right text-sm font-semibold" style={{ fontFamily: 'var(--f-mono)' }}>{h.horas}</dd>
                  </div>
                ))}
              </dl>
              <a href={MAPS_URL} target="_blank" rel="noreferrer"
                className="mt-6 inline-block border border-white/30 px-5 py-2.5 text-sm font-semibold text-white/90 tap-44">
                Abrir en Google Maps
              </a>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="overflow-hidden border" style={{ borderColor: C.linea }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="min-h-[320px] w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: C.linea }}>
        <Image src={`${IMG}/bosquejo-cabina.webp`} alt="" fill className="object-cover opacity-[0.14]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <Reveal>
            <h2 className={`${display.className} mx-auto max-w-2xl text-4xl font-bold uppercase leading-none md:text-6xl`}>
              Escribe hoy, suelta el auto mañana
            </h2>
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3 text-base font-bold tap-44"
              style={{ background: C.ambar, color: C.carbon, clipPath: 'polygon(0 8%, 100% 0, 98% 92%, 2% 100%)' }}>
              <Wrench className="h-5 w-5" /> Hablar con {BIZ.dueno}
            </a>
            <p className="mt-4 text-sm text-white/60" style={{ fontFamily: 'var(--f-mono)' }}>{BIZ.phoneDisplay}</p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10" style={{ background: C.carbon }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center">
          <p className={`${display.className} text-sm font-semibold uppercase tracking-widest`}>{BIZ.name}</p>
          <p className="text-xs text-white/50">{BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}</p>
          <p className="max-w-md text-[11px] leading-relaxed text-white/40">
            Mockup preparado por Sitiazo para {BIZ.name}. Datos públicos de Google Maps.
            Las imágenes marcadas “Bosquejo” son ilustrativas.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
