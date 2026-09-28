import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_PRECIOS,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-300.woff2', weight: '300', style: 'normal' },
    { path: '../../fonts/lato/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/lato/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})

const C = {
  night: '#04161B',
  night2: '#072630',
  petrol: '#0E4C5C',
  mint: '#9FD8CB',
  paper: '#F7F9F9',
  graphite: '#2B3236',
  muted: 'rgba(247,249,249,0.68)',
  line: 'rgba(159,216,203,0.22)',
}

const GLOW = '0 0 6px rgba(159,216,203,0.9), 0 0 22px rgba(159,216,203,0.55), 0 0 48px rgba(14,76,92,0.9)'
const TUBE = '0 0 0 1px rgba(159,216,203,0.7), 0 0 18px rgba(159,216,203,0.35), inset 0 0 18px rgba(159,216,203,0.15)'
const PHOTO = 'contrast(1.28) saturate(0.8) brightness(0.78)'

export const metadata: Metadata = {
  title: 'Beauty Love — Manicura y pedicura en Molina',
  description:
    'Salón de manicura y pedicura en Notre Damme 913, Molina. Hora agendada y atención directa por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El salón', href: '#salon' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    src: `${IMG}/detalle3.webp`,
    alt: 'Manos con manicura nude recién terminada sobre una toalla blanca',
    name: 'Manicura',
    desc: 'Limado, cutícula trabajada con calma y un acabado parejo. Manos que se ven cuidadas de cerca.',
  },
  {
    n: '02',
    src: `${IMG}/detalle1.webp`,
    alt: 'Detalle de un trabajo de uñas en el salón',
    name: 'Esmaltado y color',
    desc: 'Tradicional o de larga duración, en el tono que traigas en mente o uno que elijamos juntas.',
  },
  {
    n: '03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Detalle de manos y uñas recién trabajadas',
    name: 'Pedicura',
    desc: 'Pies limpios, uñas en forma y piel suave. Un rato para sentarte y no pensar en nada más.',
  },
]

const VALORES = [
  { k: 'Orden', v: 'Cada estación limpia y el instrumental preparado antes de que llegues.' },
  { k: 'Hora tuya', v: 'Agendas por WhatsApp y el tiempo reservado es para ti, sin apuro.' },
  { k: 'Trato directo', v: 'Hablas con quien te atiende: consultas, cambios y dudas, sin intermediarios.' },
]

const PRECIOS = [
  'Manicura tradicional',
  'Esmaltado de larga duración',
  'Retiro de esmaltado',
  'Pedicura',
  'Manicura + pedicura',
]

const TICKER = ['Manicura', 'Pedicura', 'Esmaltado', 'Higiene', 'Molina', 'Notre Damme 913']

export default function BeautyLovePage() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-hidden`}
      style={{ backgroundColor: C.night, color: C.paper }}
    >
      <style>{`
        html { scroll-behavior: auto }
        @keyframes bl-flicker { 0%,19%,21%,62%,64%,100% { opacity: 1 } 20%,63% { opacity: .45 } }
        .bl-flicker { animation: bl-flicker 6s linear infinite }
        .bl-card:hover .bl-img { transform: scale(1.05); filter: contrast(1.35) saturate(0.95) brightness(0.9) }
        .bl-card:hover { box-shadow: ${TUBE} }
        .bl-cta:hover { box-shadow: 0 0 0 1px ${C.mint}, 0 0 28px rgba(159,216,203,.7), 0 0 70px rgba(159,216,203,.35) }
        a:focus-visible { outline: 2px solid ${C.mint}; outline-offset: 3px }
        header a { transition-property: transform }
        @media (prefers-reduced-motion: reduce) { .bl-flicker { animation: none } }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} italic font-bold`}
        theme={{
          over: 'dark',
          bar: 'rgba(4,22,27,0.86)',
          ink: C.paper,
          line: C.line,
          btnBg: C.mint,
          btnInk: C.night,
        }}
      />

      {/* Hero a sangre */}
      <section id="inicio" className="relative min-h-[100svh] flex items-end">
        <img
          src={`${IMG}/hero.webp`}
          alt="Estación de manicura con lámpara encendida, toalla blanca y repisas de esmaltes"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: PHOTO }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(4,22,27,0.55) 0%, rgba(4,22,27,0.35) 35%, rgba(4,22,27,0.92) 78%, ${C.night} 100%), radial-gradient(ellipse at 20% 80%, rgba(14,76,92,0.75), transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-4 md:inset-8 rounded-[28px] pointer-events-none"
          style={{ boxShadow: TUBE }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-6xl mx-auto px-7 md:px-14 pb-16 md:pb-24 pt-32">
          <p
            className="bl-flicker inline-flex items-center gap-2 text-[11px] md:text-xs font-black uppercase tracking-[0.32em] px-4 py-2 rounded-full"
            style={{ color: C.mint, boxShadow: TUBE, textShadow: GLOW }}
          >
            <span className="w-[7px] h-[7px] rounded-full" style={{ backgroundColor: C.mint, boxShadow: GLOW }} aria-hidden="true" />
            Manicura y pedicura · {BIZ.city}
          </p>
          <h1
            className={`${display.className} mt-6 text-[2.9rem] leading-[0.98] sm:text-6xl md:text-[5.6rem] font-extrabold tracking-[-0.02em] max-w-4xl`}
          >
            Manos impecables,
            <br />
            <span className="italic font-medium" style={{ color: C.mint, textShadow: GLOW }}>
              con orden de clínica.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg font-light leading-relaxed" style={{ color: C.muted }}>
            Salón de uñas en {BIZ.address}, {BIZ.city}. Instrumental limpio, hora agendada y
            atención directa por WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bl-cta inline-flex items-center gap-2 min-h-[48px] px-7 rounded-full text-sm font-black uppercase tracking-[0.14em] transition-shadow"
              style={{ backgroundColor: C.mint, color: C.night, boxShadow: GLOW }}
            >
              Agendar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center min-h-[48px] px-7 rounded-full text-sm font-bold uppercase tracking-[0.14em]"
              style={{ color: C.paper, border: `1px solid ${C.line}` }}
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Letrero corrido */}
      <div className="py-5 px-5 border-y" style={{ borderColor: C.line, backgroundColor: C.night2 }} aria-hidden="true">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2">
          {TICKER.map((t, i) => (
            <span
              key={t}
              className="text-xl md:text-3xl font-black uppercase tracking-[-0.01em]"
              style={i % 2 ? { color: 'transparent', WebkitTextStroke: `1px ${C.mint}` } : { color: C.mint, textShadow: GLOW }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <h2 className={`${display.className} text-4xl md:text-6xl font-extrabold leading-[1.02] tracking-[-0.02em]`}>
                Lo que hacemos
                <br />
                <span className="italic font-medium" style={{ color: C.mint, textShadow: GLOW }}>
                  en la mesa.
                </span>
              </h2>
              <p className="max-w-sm text-sm md:text-base font-light leading-relaxed" style={{ color: C.muted }}>
                Tres servicios base, hechos con el mismo cuidado. Si buscas algo distinto, escríbenos y lo
                conversamos.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <article
                  className="bl-card group h-full rounded-[22px] overflow-hidden transition-shadow duration-500"
                  style={{ backgroundColor: C.night2, boxShadow: `0 0 0 1px ${C.line}` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      className="bl-img w-full h-full object-cover transition-all duration-700"
                      style={{ filter: PHOTO }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(7,38,48,0.95))' }} aria-hidden="true" />
                    <span
                      className={`${display.className} absolute left-5 bottom-3 text-5xl font-extrabold italic`}
                      style={{ color: C.mint, textShadow: GLOW }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <div className="p-6 pt-4">
                    <h3 className="text-lg font-black uppercase tracking-[0.08em]">{s.name}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre el salón */}
      <section id="salon" className="relative py-24 md:py-32" style={{ backgroundColor: C.night2 }}>
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: `radial-gradient(ellipse at 85% 20%, rgba(14,76,92,0.9), transparent 55%)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid gap-14 md:grid-cols-[1.05fr_1fr] items-center">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -inset-2 md:-inset-4 rounded-[30px] translate-x-1 translate-y-2 md:translate-x-3 md:translate-y-3"
                style={{ boxShadow: TUBE }}
                aria-hidden="true"
              />
              <img
                src={`${IMG}/ambiente.webp`}
                alt="Sillón de espera junto a la ventana, con la estación de manicura al fondo"
                loading="lazy"
                className="relative w-full aspect-[4/3] object-cover rounded-[24px]"
                style={{ filter: PHOTO }}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: C.mint }}>
              Desde {BIZ.city}
            </p>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-[-0.02em]`}>
              Un salón de barrio,{' '}
              <span className="italic font-medium" style={{ color: C.mint, textShadow: GLOW }}>
                atendido de cerca.
              </span>
            </h2>
            <p className="mt-5 font-light leading-relaxed" style={{ color: C.muted }}>
              Beauty Love atiende en {BIZ.address}, en {BIZ.city}. Sin recepción ni call center: escribes,
              coordinamos la hora y te recibe la misma persona que trabaja tus manos.
            </p>

            <ul className="mt-9 space-y-5">
              {VALORES.map((v) => (
                <li key={v.k} className="flex gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.mint, boxShadow: GLOW }} aria-hidden="true" />
                  <div>
                    <p className="font-black uppercase tracking-[0.1em] text-sm">{v.k}</p>
                    <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>
                      {v.v}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-5" style={{ boxShadow: `0 0 0 1px ${C.line}` }}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block text-4xl font-extrabold`}
                  style={{ color: C.mint, textShadow: GLOW }}
                >
                  {BIZ.instagramFollowers}
                </a>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  seguidores en Instagram
                </p>
              </div>
              <div className="rounded-2xl p-5" style={{ boxShadow: `0 0 0 1px ${C.line}` }}>
                <p className={`${display.className} text-2xl font-extrabold leading-tight`}>Recién partiendo en Google</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  tu reseña puede ser la primera
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Precios de referencia */}
      <section id="precios" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center">
              <span
                className="inline-block text-[11px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full"
                style={{ color: C.night, backgroundColor: C.mint }}
              >
                Tabla de muestra
              </span>
              <h2 className={`${display.className} mt-6 text-4xl md:text-6xl font-extrabold tracking-[-0.02em]`}>
                Precios de{' '}
                <span className="italic font-medium" style={{ color: C.mint, textShadow: GLOW }}>
                  referencia
                </span>
              </h2>
              <p className="mt-4 text-sm font-light" style={{ color: C.muted }}>
                Así se vería la carta de valores. Los precios reales los publica el salón; mientras, se
                consultan por WhatsApp.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-12 rounded-[24px] p-6 md:p-10" style={{ backgroundColor: C.night2, boxShadow: TUBE }}>
              {PRECIOS.map((p, i) => (
                <li
                  key={p}
                  className="flex items-baseline gap-4 py-4"
                  style={i ? { borderTop: `1px solid ${C.line}` } : undefined}
                >
                  <span className="font-bold uppercase tracking-[0.06em] text-sm md:text-base">{p}</span>
                  <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: C.line }} aria-hidden="true" />
                  <span className="text-sm font-black uppercase tracking-[0.12em]" style={{ color: C.mint }}>
                    A confirmar
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-8 text-center">
            <a
              href={WA_LINK_PRECIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[48px] px-7 rounded-full text-sm font-bold uppercase tracking-[0.14em]"
              style={{ color: C.mint, boxShadow: `0 0 0 1px ${C.mint}` }}
            >
              Consultar valores
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.petrol }}>
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 15% 110%, rgba(159,216,203,0.35), transparent 55%), linear-gradient(180deg, ${C.night} 0%, transparent 30%)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid gap-12 md:grid-cols-2 items-center">
          <Reveal>
            <h2 className={`${display.className} text-5xl md:text-7xl font-extrabold leading-[0.98] tracking-[-0.02em]`}>
              Tu hora,
              <br />
              <span className="italic font-medium bl-flicker" style={{ color: C.mint, textShadow: GLOW }}>
                a un mensaje.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-light leading-relaxed" style={{ color: C.muted }}>
              Escribe tu día y el servicio que buscas. Te respondemos con las horas disponibles.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bl-cta mt-9 inline-flex items-center gap-3 min-h-[52px] px-6 md:px-9 rounded-full text-sm md:text-base font-black uppercase tracking-[0.08em] md:tracking-[0.14em] transition-shadow"
              style={{ backgroundColor: C.mint, color: C.night, boxShadow: GLOW }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
              WhatsApp {BIZ.phoneDisplay}
            </a>

            <dl className="mt-10 space-y-4 text-sm">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: C.mint }}>Dirección</dt>
                <dd className="mt-1">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">
                    {BIZ.address}, {BIZ.postal} {BIZ.city}, Maule
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: C.mint }}>Instagram</dt>
                <dd className="mt-1">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">
                    @{BIZ.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[24px] overflow-hidden" style={{ boxShadow: TUBE }}>
              <iframe
                title={`Mapa de ${BIZ.name} en ${BIZ.city}`}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[340px] md:h-[440px] border-0"
                style={{ filter: 'invert(0.9) hue-rotate(160deg) saturate(0.7) contrast(0.95)' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Franja Sitiazo */}
      <div className="py-4 text-center text-xs font-black uppercase tracking-[0.3em]" style={{ backgroundColor: C.mint, color: C.night }}>
        Sitio de ejemplo de Sitiazo
      </div>

      <footer className="pt-6 pb-20 px-5 text-center text-xs" style={{ backgroundColor: C.graphite, color: C.muted }}>
        <p className={`${display.className} italic text-xl font-bold`} style={{ color: C.paper }}>
          {BIZ.name}
        </p>
        <p className="mt-2">
          {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.region}
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
      <DemoBand name={BIZ.name} />
    </main>
  )
}
