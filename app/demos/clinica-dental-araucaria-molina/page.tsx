import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  waLink,
  MAPS_URL,
  MAPS_EMBED,
  HOURS,
  IMG,
} from './content'

// La clínica: serif de vitrina (Prata, como el letrero) + sans limpia
const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

const C = {
  paper: '#F6F4EE',
  card: '#FFFFFF',
  ink: '#1C2721',
  muted: '#5C665E',
  line: 'rgba(28,39,33,0.14)',
  bosque: '#1E4433',
  bosqueDeep: '#0E2117',
  madera: '#9A6A3C',
  maderaClara: '#D9B98C',
  star: '#D9A441',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-dental-araucaria-molina',
  title: 'Clínica Dental Araucaria — Dentista en Av. Sur 1666, Molina',
  description:
    'Clínica dental en Av. Sur 1666, Molina. Atención con Dra. Yuly Correa y Dra. Javiera Correa, de lunes a sábado. Agenda por WhatsApp.',
  image: `${IMG}/entrada.webp`,
})

const NAV_LINKS = [
  { label: 'El equipo', href: '#equipo' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Agendar', href: '#agendar' },
]

const EQUIPO = [
  {
    src: `${IMG}/dra-yuly.webp`,
    alt: 'Cartel de la puerta de la clínica con el nombre de la Dra. Yuly Correa',
    nombre: 'Dra. Yuly Correa',
    rol: 'Cirujano dentista',
    detalle: 'Especialista en Rehabilitación Oral Integral Estética',
  },
  {
    src: `${IMG}/dra-javiera.webp`,
    alt: 'Cartel de la puerta de la clínica con el nombre de la Dra. Javiera Correa',
    nombre: 'Dra. Javiera Correa',
    rol: 'Cirujano dentista',
    detalle: 'Especialista en Estética Orofacial',
  },
]

const REVIEWS = [
  {
    name: 'Myriam Espinoza',
    text: 'Excelentes profesionales, una paciencia increíble ya que atendieron a mi hijo de 4 años y lograron taparle su muela con mucha psicología también. Muy agradecida y feliz de que haya profesionales que les gusta su trabajo. Para mí 100% recomendables.',
    stars: 5,
  },
  {
    name: 'William Suazo',
    text: 'Excelente atención, súper profesionales, simpáticas y muy dedicadas, recomendable 100%.',
    stars: 5,
  },
  {
    name: 'Mario Delpino',
    text: 'Excelentes profesionales, lugar muy cómodo y acogedor, la atención muy buena. 100% recomendable.',
    stars: 5,
  },
]

// Araucaria del logo, como motivo gráfico (icono, no foto)
function AraucariaTree({ className = '', color = C.bosque }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 96" className={className} fill={color} aria-hidden="true">
      <path d="M32 6 C26 10 22 14 20 18 L44 18 C42 14 38 10 32 6 Z" />
      <path d="M32 16 C22 22 14 28 12 34 L52 34 C50 28 42 22 32 16 Z" />
      <path d="M32 30 C18 38 8 46 6 54 L58 54 C56 46 46 38 32 30 Z" />
      <path d="M32 46 C14 56 4 66 2 76 L62 76 C60 66 50 56 32 46 Z" />
      <rect x="29" y="76" width="6" height="18" />
    </svg>
  )
}

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} text-xl tracking-wide`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(246,244,238,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.bosque,
          btnInk: '#F6F4EE',
        }}
        ctaLabel="Agendar hora"
      />

      {/* ── Hero: la puerta de madera, la firma de la clínica ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-10 opacity-[0.06] pointer-events-none"
        >
          <AraucariaTree className="w-[420px] h-auto" />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo oficial publicado por la clínica */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo de Clínica Dental Araucaria con un árbol araucaria"
                className="h-14 md:h-20 w-auto mb-7"
              />
              <p
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] font-semibold mb-4`}
                style={{ color: C.madera }}
              >
                Clínica dental · Av. Sur 1666, Molina
              </p>
              <h1
                className={`${display.className} leading-[1.05] text-[clamp(2.4rem,7.5vw,4.5rem)] mb-5`}
                style={{ color: C.ink }}
              >
                La clínica dental
                <br />
                de la <span style={{ color: C.bosque }}>puerta</span>{' '}
                <span style={{ color: C.bosque }}>de madera.</span>
              </h1>
              <p className="max-w-md text-base md:text-lg leading-relaxed mb-8" style={{ color: C.muted }}>
                Atención odontológica en Av. Sur, Molina: rehabilitación oral
                y estética orofacial, con hora agendada por WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-semibold tracking-wide text-sm md:text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.bosque, color: '#F6F4EE' }}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href="#equipo"
                  className={`${body.className} font-semibold tracking-wide text-sm md:text-base px-7 py-3 rounded-full border-2 transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.bosque, color: C.bosque }}
                >
                  Conocer el equipo
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.star} className="w-4 h-4" />
                <span className={`${mono.className} text-xs md:text-sm`} style={{ color: C.muted }}>
                  {BIZ.rating.toString().replace('.', ',')} en Google · {BIZ.reviews} reseñas
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <figure
              className="relative aspect-[3/4] max-h-[560px] w-full overflow-hidden rounded-t-[160px] rounded-b-2xl border-[10px] shadow-xl"
              style={{ borderColor: C.maderaClara }}
            >
              <Image
                src={`${IMG}/entrada.webp`}
                alt="Puerta de madera de Clínica Dental Araucaria con los carteles de las doctoras Correa"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de datos ── */}
      <section style={{ backgroundColor: C.bosque }}>
        <div
          className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-x-8 text-[11px] md:text-xs uppercase tracking-[0.16em]`}
          style={{ color: 'rgba(246,244,238,0.85)' }}
        >
          <span>★ {BIZ.rating.toString().replace('.', ',')} — {BIZ.reviews} reseñas en Google</span>
          <span>L–V 9:00–19:00 · Sáb 10:00–14:00</span>
          <span>Rehabilitación oral y estética orofacial</span>
        </div>
      </section>

      {/* ── El equipo: los carteles de la puerta ── */}
      <section id="equipo" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="md:flex md:items-end md:justify-between gap-6 mb-10">
            <h2
              className={`${display.className} leading-[1.05] text-4xl md:text-6xl`}
              style={{ color: C.ink }}
            >
              Las Correa,
              <br />
              <span style={{ color: C.bosque }}>en la puerta.</span>
            </h2>
            <p
              className="max-w-sm text-sm md:text-base leading-relaxed mt-4 md:mt-0 md:text-right"
              style={{ color: C.muted }}
            >
              Los mismos carteles que están pegados en la entrada de la
              clínica, tal cual.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-8">
          {EQUIPO.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 100}>
              <article
                className="border rounded-xl overflow-hidden bg-white h-full"
                style={{ borderColor: C.line }}
              >
                <div className="relative aspect-[4/5]" style={{ backgroundColor: '#EBE6DA' }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5 border-t-4" style={{ borderColor: C.madera }}>
                  <h3
                    className={`${display.className} text-2xl md:text-3xl leading-tight`}
                    style={{ color: C.ink }}
                  >
                    {p.nombre}
                  </h3>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-1.5`} style={{ color: C.madera }}>
                    {p.rol}
                  </p>
                  <p className="text-sm md:text-base mt-3" style={{ color: C.muted }}>
                    {p.detalle}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La clínica por dentro ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.bosqueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2
              className={`${display.className} leading-[1.05] text-4xl md:text-6xl mb-3`}
              style={{ color: '#F6F4EE' }}
            >
              Por dentro,{' '}
              <span style={{ color: C.maderaClara }}>todo blanco.</span>
            </h2>
            <p
              className="max-w-xl text-sm md:text-base leading-relaxed mb-10"
              style={{ color: 'rgba(246,244,238,0.8)' }}
            >
              Box y consultorio en Av. Sur 1666: las fotos son las que la
              clínica publica en su ficha de Google.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-4 md:gap-6">
            <Reveal className="md:col-span-2">
              <figure className="relative aspect-[3/4] h-full overflow-hidden rounded-xl">
                <Image
                  src={`${IMG}/box.webp`}
                  alt="Box dental de Clínica Dental Araucaria con el nombre pintado en el muro"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(14,33,23,0.82)', color: '#F6F4EE' }}
                >
                  El box
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100} className="md:col-span-3">
              <figure className="relative aspect-[3/2] h-full overflow-hidden rounded-xl">
                <Image
                  src={`${IMG}/consultorio.webp`}
                  alt="Consultorio blanco de la clínica con escritorio y equipo dental"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(14,33,23,0.82)', color: '#F6F4EE' }}
                >
                  El consultorio
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                ['Rehabilitación oral', 'La especialidad de la Dra. Yuly Correa.'],
                ['Estética orofacial', 'La especialidad de la Dra. Javiera Correa.'],
                ['Niños bienvenidos', '«Atendieron a mi hijo de 4 años con mucha paciencia» — reseña real.'],
              ].map(([t, d], i) => (
                <div
                  key={t}
                  className="border-l-2 pl-4"
                  style={{ borderColor: i === 2 ? C.maderaClara : 'rgba(246,244,238,0.35)' }}
                >
                  <h3 className={`${display.className} text-xl mb-1`} style={{ color: '#F6F4EE' }}>
                    {t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(246,244,238,0.75)' }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Lo que dicen los pacientes ── */}
      <section id="pacientes" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <div>
              <p
                className={`${display.className} leading-none text-7xl md:text-8xl`}
                style={{ color: C.bosque }}
              >
                {BIZ.rating.toString().replace('.', ',')}
              </p>
              <Stars value={BIZ.rating} color={C.star} className="w-5 h-5 mt-3" />
              <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google Maps
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} mt-5 inline-block font-semibold text-sm tracking-wide underline underline-offset-4 decoration-2 tap-44 hover:decoration-[3px]`}
                style={{ color: C.bosque, textDecorationColor: C.madera }}
              >
                Ver la ficha en Google
              </a>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} className={`h-full ${i === 0 ? 'sm:col-span-2' : ''}`}>
                <figure className="bg-white border rounded-lg p-5 h-full" style={{ borderColor: C.line }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      aria-hidden="true"
                      className={`${display.className} w-9 h-9 flex items-center justify-center text-lg rounded-full`}
                      style={{ backgroundColor: C.bosque, color: '#F6F4EE' }}
                    >
                      {r.name[0]}
                    </span>
                    <figcaption className={`${display.className} text-lg`} style={{ color: C.ink }}>
                      {r.name}
                    </figcaption>
                  </div>
                  <Stars value={r.stars} color={C.star} className="w-3.5 h-3.5 mb-3" />
                  <blockquote className="text-sm leading-relaxed" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agendar y llegar ── */}
      <section
        id="agendar"
        className="scroll-mt-20 border-t"
        style={{ borderColor: C.line, backgroundColor: C.card }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <div>
              <h2
                className={`${display.className} leading-[1.05] text-4xl md:text-5xl mb-6`}
                style={{ color: C.ink }}
              >
                Agenda tu hora
                <br />
                <span style={{ color: C.bosque }}>en Av. Sur 1666</span>
              </h2>
              <p className={`${display.className} text-xl md:text-2xl mb-1`} style={{ color: C.ink }}>
                {BIZ.address}
              </p>
              <p className="text-sm mb-6" style={{ color: C.muted }}>
                {BIZ.city}, {BIZ.region}
              </p>
              <dl className="border-t" style={{ borderColor: C.line }}>
                {HOURS.map((h) => (
                  <div
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 py-3 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <dt className="text-sm" style={{ color: C.muted }}>{h.d}</dt>
                    <dd className={`${mono.className} text-sm`} style={{ color: C.ink }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-semibold tracking-wide text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.bosque, color: '#F6F4EE' }}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-semibold tracking-wide text-sm px-6 py-3 rounded-full border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
                <a
                  href={`tel:${BIZ.whatsapp}`}
                  className={`${body.className} font-semibold tracking-wide text-sm px-6 py-3 rounded-full border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative border rounded-xl overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.bosqueDeep }}>
        <div
          aria-hidden="true"
          className="absolute -left-16 -bottom-8 opacity-[0.08] pointer-events-none"
        >
          <AraucariaTree className="w-[340px] h-auto" color={C.maderaClara} />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2
              className={`${display.className} leading-[1.05] text-4xl md:text-6xl mb-5 mx-auto max-w-3xl`}
              style={{ color: '#F6F4EE' }}
            >
              La sonrisa se agenda
              <br />
              por <span style={{ color: C.maderaClara }}>WhatsApp.</span>
            </h2>
            <p
              className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(246,244,238,0.85)' }}
            >
              Escribe, cuentas qué necesitas y te confirman la hora con la
              doctora que corresponda.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${body.className} inline-flex items-center justify-center font-semibold tracking-wide text-sm md:text-base px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.maderaClara, color: C.bosqueDeep }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#081710' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo oficial publicado por la clínica */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-auto bg-[#F6F4EE] rounded px-2 py-1" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-base leading-none`} style={{ color: '#F6F4EE' }}>
                {BIZ.name}
              </p>
              <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(246,244,238,0.6)' }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <nav aria-label="Secciones" className="flex flex-wrap gap-x-5 gap-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${mono.className} text-[11px] uppercase tracking-[0.14em] tap-44 hover:opacity-100`}
                style={{ color: 'rgba(246,244,238,0.7)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className={`${mono.className} text-[11px]`} style={{ color: 'rgba(246,244,238,0.5)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Agendar por WhatsApp en ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </main>
  )
}
