import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS, SERVICIOS, EQUIPO, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/familjen-grotesk/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/* Paleta del letrero real: papel crema + el rojo del círculo SwissVet. */
const C = {
  bg: '#FAF5EA',
  panel: '#FFFFFF',
  deep: '#221310',
  ink: '#221310',
  soft: '#5C4A42',
  muted: '#7C675A',
  red: '#CD2417',
  redSoft: '#FF7A6B',
  line: 'rgba(34,19,16,0.14)',
  lineDark: 'rgba(250,245,234,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'swissvet-talcahuano',
  title: 'SwissVet Talcahuano — Veterinaria y peluquería en Claudio Gay',
  description:
    'Consulta veterinaria, cirugías, farmacia, salud dental y peluquería en Claudio Gay 3848, Talcahuano. 4,7 estrellas en Google.',
  image: '/demos/swissvet-talcahuano/fachada.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

/* Campo de cruces: el motivo suizo del logo, en trama tenue. */
const CROSS_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M24 8h8v16h16v8H32v16h-8V32H8v-8h16z' fill='%23CD2417' fill-opacity='0.07'/%3E%3C/svg%3E")`

/* La cruz del logo, dibujada grande: gira lento detrás de la ficha del hero. */
function BigCross() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="sv-cross absolute -top-10 -right-8 w-40 h-40 md:w-56 md:h-56"
      style={{ color: C.red }}
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
      <path d="M40 20h20v20h20v20H60v20H40V60H20V40h20z" fill="currentColor" opacity="0.14" />
      <circle cx="50" cy="38" r="7" fill="currentColor" opacity="0.5" />
      <circle cx="38" cy="46" r="5" fill="currentColor" opacity="0.5" />
      <circle cx="62" cy="46" r="5" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="55" r="10" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export default function SwissVetPage() {
  const wa = whatsappLink('contacto')

  return (
    <main className={body.className} style={{ backgroundColor: C.bg, color: C.ink }}>
      <style>{`
        @keyframes sv-spin { to { transform: rotate(360deg) } }
        .sv-cross { animation: sv-spin 90s linear infinite }
        @media (prefers-reduced-motion: reduce) { .sv-cross { animation: none } }
      `}</style>

      <BlitzNav
        name="SwissVet"
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        logoSrc={`${IMG}/logo-mark.webp`}
        theme={{ over: 'light', bar: C.bg, ink: C.ink, line: C.line, btnBg: C.red, btnInk: '#FFFFFF' }}
        fontClass={display.className}
      />

      {/* ── Hero: la ficha del local ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundImage: CROSS_BG }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.32em] mb-6`} style={{ color: C.red }}>
                  Veterinaria · Talcahuano
                </p>
                <h1 className={`${display.className} text-4xl md:text-7xl font-bold uppercase leading-[1.02] tracking-tight`}>
                  La veterinaria de Claudio Gay
                </h1>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
                  Consulta, cirugías, farmacia, salud dental y peluquería para los animales de Talcahuano.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={CALL_LINK}
                    className="tap-44 inline-flex h-12 items-center px-7 text-sm font-bold uppercase tracking-wider active:scale-95 transition-transform"
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    Llamar
                  </a>
                  <a
                    href="#servicios"
                    className="tap-44 inline-flex h-12 items-center px-7 text-sm font-semibold uppercase tracking-wider border active:scale-95 transition-transform"
                    style={{ borderColor: C.line, color: C.ink }}
                  >
                    Ver servicios
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={150}>
                <div className="relative">
                  <BigCross />
                  <div className="relative border bg-white" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.24em] border-b`} style={{ color: C.muted, borderColor: C.line }}>
                      Ficha · {BIZ.address}
                    </p>
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Casa roja de SwissVet en Claudio Gay 3848, Talcahuano, con su letrero de veterinaria y peluquería"
                      width={1200}
                      height={900}
                      className="w-full h-auto"
                      priority
                    />
                    <p className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.24em] border-t flex items-center justify-between`} style={{ color: C.muted, borderColor: C.line }}>
                      <span>Google Maps</span>
                      <span style={{ color: C.red }}>{BIZ.ratingDisplay} · {BIZ.reviews} reseñas</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registro de atención ── */}
      <section style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              ['Lunes a viernes', '10:00 a 20:00'],
              ['Sábado', '10:00 a 19:00'],
              ['Teléfono', BIZ.phoneDisplay],
              ['Dirección', BIZ.address],
            ].map(([k, v]) => (
              <div key={k}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em]`} style={{ color: 'rgba(250,245,234,0.55)' }}>
                  {k}
                </p>
                <p className="mt-2 text-sm md:text-base font-semibold" style={{ color: C.bg }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios: la lista del letrero ── */}
      <section id="servicios" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8 items-start">
            <div className="md:col-span-7">
              <Reveal>
                <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.32em] mb-4`} style={{ color: C.red }}>
                  Lo que dice el letrero
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl font-bold uppercase leading-[1.05] max-w-xl`}>
                  Todo lo que tu mascota necesita, en una casa roja
                </h2>
              </Reveal>
              <div className="mt-10 border-t" style={{ borderColor: C.line }}>
                {SERVICIOS.map((s, i) => (
                  <Reveal key={s.id} delay={i * 50}>
                    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-3 md:gap-6 items-baseline py-4 border-b" style={{ borderColor: C.line }}>
                      <span className={`${mono.className} text-xs font-semibold`} style={{ color: C.red }}>
                        S.{s.id}
                      </span>
                      <div>
                        <h3 className={`${display.className} text-xl md:text-2xl font-bold uppercase leading-tight`}>
                          {s.name}
                        </h3>
                        <p className="mt-1 text-sm" style={{ color: C.soft }}>
                          {s.note}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 grid gap-5 md:sticky md:top-24">
              <Reveal delay={120}>
                <div className="border bg-white" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/letrero.webp`}
                    alt="Letrero real de SwissVet: veterinaria y peluquería, con sus servicios y teléfonos"
                    width={675}
                    height={1200}
                    className="w-full h-auto max-h-[520px] object-cover object-[50%_45%]"
                  />
                  <p className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] border-t`} style={{ color: C.muted, borderColor: C.line }}>
                    El letrero en Claudio Gay 3848
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* triptico de pacientes reales */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 items-start">
            <Reveal className="md:mt-8">
              <div className="border bg-white" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/consulta.webp`} alt="Veterinaria de SwissVet examinando a un gato sobre la mesa de consulta" width={900} height={1200} className="w-full h-auto" />
                <p className={`${mono.className} px-3 py-2 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>En consulta</p>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:mt-0">
              <div className="border bg-white" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/peluqueria.webp`} alt="Profesional de SwissVet atendiendo a un perro en la mesa de peluquería" width={675} height={1200} className="w-full h-auto" />
                <p className={`${mono.className} px-3 py-2 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>En peluquería</p>
              </div>
            </Reveal>
            <Reveal delay={220} className="md:mt-14">
              <div className="border bg-white" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/puerta.webp`} alt="Gato en la entrada de la casa roja de SwissVet" width={750} height={1000} className="w-full h-auto" />
                <p className={`${mono.className} px-3 py-2 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>En la puerta</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Equipo: los nombres que repiten las reseñas ── */}
      <section id="equipo" className="scroll-mt-24" style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8 items-start">
            <div className="md:col-span-8">
              <Reveal>
                <h2 className={`${display.className} text-3xl md:text-5xl font-bold uppercase leading-[1.05] max-w-xl`}>
                  Los nombres que repiten las reseñas
                </h2>
                <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
                  Tres profesionales aparecen una y otra vez en las reseñas de Google.
                </p>
              </Reveal>
              <div className="mt-10 grid sm:grid-cols-3 gap-5">
                {EQUIPO.map((e, i) => (
                  <Reveal key={e.name} delay={i * 90}>
                    <div className="border h-full p-5" style={{ borderColor: C.line, backgroundColor: C.bg }}>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.red }}>
                        En reseñas
                      </p>
                      <h3 className={`${display.className} mt-3 text-lg md:text-xl font-bold uppercase leading-tight`}>
                        {e.name}
                      </h3>
                      <p className="mt-2 text-sm leading-snug" style={{ color: C.soft }}>
                        {e.role}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={140} className="md:col-span-4">
              <div className="border bg-white" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/mesa.webp`} alt="Perro tranquilo sobre la mesa de atención de SwissVet" width={900} height={1200} className="w-full h-auto max-h-[380px] object-cover object-[50%_35%]" />
                <p className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] border-t`} style={{ color: C.muted, borderColor: C.line }}>
                  Paciente en la mesa
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-24" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex items-end gap-5 flex-wrap">
              <p className={`${display.className} text-6xl md:text-8xl font-bold leading-none`} style={{ color: C.redSoft }}>
                {BIZ.ratingDisplay}
              </p>
              <div className="pb-2">
                <Stars value={BIZ.rating} color={C.redSoft} className="w-5 h-5" />
                <p className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.24em]`} style={{ color: 'rgba(250,245,234,0.6)' }}>
                  {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="h-full border p-6 flex flex-col" style={{ borderColor: C.lineDark, backgroundColor: 'rgba(250,245,234,0.04)' }}>
                  <blockquote className="text-sm md:text-base leading-relaxed flex-1" style={{ color: C.bg }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(250,245,234,0.55)' }}>
                    {r.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} mt-8 inline-flex items-center tap-44 text-xs uppercase tracking-[0.2em] underline underline-offset-4`} style={{ color: C.bg }}>
              Ver la ficha en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className={`${display.className} text-3xl md:text-5xl font-bold uppercase leading-[1.05]`}>
                  La casa roja de {BIZ.address}
                </h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
                  {BIZ.city}, Gran Concepción.
                </p>
                <div className="mt-8 border-t" style={{ borderColor: C.line }}>
                  {HOURS.map((h) => (
                    <div key={h.d} className="flex justify-between py-3 border-b" style={{ borderColor: C.line }}>
                      <span className="text-sm font-semibold">{h.d}</span>
                      <span className={`${mono.className} text-sm`} style={{ color: C.red }}>{h.h}</span>
                    </div>
                  ))}
                </div>
                <a href={CALL_LINK} className={`${mono.className} mt-8 inline-block text-2xl md:text-3xl font-semibold tap-44`} style={{ color: C.red }}>
                  {BIZ.phoneDisplay}
                </a>
                <div className="mt-8">
                  <a
                    href={CALL_LINK}
                    className="tap-44 inline-flex h-12 items-center px-7 text-sm font-bold uppercase tracking-wider active:scale-95 transition-transform"
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    Llamar
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140} className="md:col-span-7">
              <div className="border bg-white p-1" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  className="w-full aspect-[4/3]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo-mark.webp`} alt={`Logo de ${BIZ.name}`} className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">{BIZ.name}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:text-right" style={{ color: C.muted }}>
            Sitio de muestra preparado por {SITE.name} para {BIZ.short}. Datos y fotos reales de su ficha de
            Google.{' '}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.soft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.red} fg="#FFFFFF" />
    </main>
  )
}
