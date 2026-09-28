import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el letrero de la esquina». La fachada real del local
 * es negra con una banda roja y un letrero grande (Street View 2026); la
 * página usa ese negro + rojo como marca y una cinta corrida que repite lo
 * que dice el letrero: consulta, farmacia, peluquería, hotel canino.
 * Anton hace de letra de letrero; Manrope el texto; Plex Mono los rótulos.
 */
const C = {
  paper: '#F6F1E8',
  card: '#FDFAF3',
  ink: '#14151A',
  deep: '#0D0E12',
  red: '#E0383E',
  navy: '#26406B',
  muted: '#68625A',
  line: 'rgba(20,21,26,0.15)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'veterinaria-vanessa-castillo',
  title: 'Veterinaria Vanessa Castillo — Clínica veterinaria en Molina',
  description:
    'Veterinaria en Quechereguas 2002, Molina: consulta, farmacia veterinaria, peluquería y hotel canino. Más de 20 años atendiendo mascotas. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La esquina', href: '#esquina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#horario' },
]

const MARQUEE = ['CONSULTA', 'FARMACIA', 'PELUQUERÍA', 'HOTEL CANINO']

const SERVICIOS = [
  {
    n: '01',
    name: 'Consulta veterinaria',
    src: `${IMG}/consulta.webp`,
    alt: 'Bosquejo ilustrado: veterinaria examinando un perro en la mesa de consulta',
    desc: 'Atención de perros y gatos por orden de llegada — sin hora previa, como confirman las reseñas. Control sanitario, vacunas y desparasitación.',
    tag: 'letrero',
  },
  {
    n: '02',
    name: 'Farmacia y pet shop',
    src: `${IMG}/farmacia.webp`,
    alt: 'Bosquejo ilustrado: repisas con alimento para mascotas, collares y accesorios',
    desc: 'Alimento, accesorios y la farmacia veterinaria en el mismo local: todo lo que la mascota necesita sin dar la vuelta.',
    tag: 'letrero',
  },
  {
    n: '03',
    name: 'Peluquería y hotel canino',
    src: `${IMG}/peluqueria.webp`,
    alt: 'Bosquejo ilustrado: peluquería canina con un perro siendo cepillado y caniles detrás',
    desc: 'Baño y corte en el local, y caniles para dejar al perro al cuidado — el letrero de la esquina lo anuncia hace años.',
    tag: 'letrero',
  },
]

const SERVICIOS_LISTA = [
  'Vacunación y desparasitación',
  'Cirugías y urgencias',
  'Alimentos y accesorios',
  'Control sanitario por orden de llegada',
]

const REVIEWS = [
  {
    text: 'La veterinaria es increíblemente cariñosa con los animales. Mi gata tiene 14 años y siempre ha ido a ella. Cuando nos ve, pregunta cómo está y nos da consejos para cuidarla. Hasta me regaló alimento y un plato para los dos gatitos que adoptamos.',
    author: 'Camila Arias',
  },
  {
    text: 'Lo que más rescato es la atención, muy personal con los peludos. Después de tantas veterinarias que he ocupado, con esta me quedo. Muy recomendable.',
    author: 'Carlos Araya',
  },
  {
    text: 'Excelente servicio tanto para los dueños como para las mascotas. No es necesaria hora previa y entregan información clara sobre los procedimientos y el estado de salud de los animales. 100% recomendable.',
    author: 'Luisa Ramírez',
  },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '10:00–13:00 · 15:00–19:00' },
  { d: 'Sábado', h: '10:00–14:00' },
  { d: 'Domingo', h: 'cerrado' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#F3A0A3' : C.red }}
    >
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="currentColor" aria-hidden="true">
        <path d="M12 21c-4.5-3.4-8-6.1-8-9.6A4.4 4.4 0 0 1 8.4 7c1.6 0 2.7.8 3.6 2 .9-1.2 2-2 3.6-2a4.4 4.4 0 0 1 4.4 4.4c0 3.5-3.5 6.2-8 9.6z" />
      </svg>
      {children}
    </p>
  )
}

function BosquejoBadge() {
  return (
    <span
      className={`${mono.className} absolute top-3 left-3 z-10 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full`}
      style={{ backgroundColor: 'rgba(20,21,26,0.85)', color: '#F6F1E8' }}
    >
      bosquejo
    </span>
  )
}

export default function VeterinariaVanessaCastilloPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(13,14,18,0.94)',
          ink: '#F6F1E8',
          line: 'rgba(246,241,232,0.14)',
          btnBg: C.red,
          btnInk: '#FFF6F0',
        }}
      />

      {/* ── Hero: el letrero de la esquina ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <Eyebrow light>Molina · Región del Maule · desde {BIZ.since}</Eyebrow>
              <h1 className={`${display.className} uppercase leading-[0.98] text-[clamp(2.7rem,10vw,6rem)] mb-6`} style={{ color: '#F6F1E8' }}>
                La veterinaria
                <br />
                de la esquina
                <br />
                <span style={{ color: C.red }}>de Quechereguas</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(246,241,232,0.88)' }}>
                Consulta, farmacia, peluquería y hotel canino en un solo
                local, atendiendo a las mascotas de Molina desde {BIZ.since}.
                Se atiende por orden de llegada — y se puede escribir antes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.red, color: '#FFF6F0' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-semibold px-5 py-3 rounded-full border tap-44"
                  style={{ borderColor: 'rgba(246,241,232,0.35)', color: '#F6F1E8' }}
                >
                  <Stars value={4} color={C.red} className="w-[12px] h-[12px]" />
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="relative">
              <div className="absolute -top-4 -right-3 md:-right-5 z-10 rotate-[3deg]">
                <span
                  className={`${mono.className} inline-block text-[10px] md:text-[11px] uppercase tracking-[0.2em] px-3 py-2`}
                  style={{ backgroundColor: C.navy, color: '#F6F1E8' }}
                >
                  foto real · street view 2026
                </span>
              </div>
              <img
                src={`${IMG}/fachada.webp`}
                alt="Fachada de Veterinaria Vanessa Castillo en Quechereguas 2002, Molina: local negro con banda roja y letrero Purina Pro Plan"
                loading="eager"
                fetchPriority="high"
                className="w-full object-cover aspect-[4/3] rounded-sm"
                style={{ boxShadow: '0 24px 60px -24px rgba(0,0,0,0.7)', border: `1px solid rgba(246,241,232,0.18)` }}
              />
              <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(246,241,232,0.62)' }}>
                Quechereguas 2002, esquina con el centro de Molina
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Cinta corrida — lo que dice el letrero */}
        <div className="border-y" style={{ backgroundColor: C.red, borderColor: 'rgba(0,0,0,0.2)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 overflow-hidden">
            <p className={`${display.className} uppercase tracking-[0.08em] text-lg md:text-2xl whitespace-nowrap`} style={{ color: '#FFF6F0' }}>
              {MARQUEE.concat(MARQUEE).map((w, i) => (
                <span key={i}>
                  {w}
                  <span aria-hidden="true" className="mx-4 md:mx-6" style={{ color: 'rgba(255,246,240,0.55)' }}>
                    ·
                  </span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── Servicios: lo que dice el letrero ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Lo que dice el letrero</Eyebrow>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.ink }}>
              Todo lo que el perro
              <br />
              <span style={{ color: C.red }}>(o el gato) necesita</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Los servicios que anuncia el propio letrero de la fachada,
              más la farmacia y el alimento que se venden en el local.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <article className="h-full flex flex-col border" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <BosquejoBadge />
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.red }}>
                    {s.n} · {s.tag}
                  </p>
                  <h3 className={`${display.className} uppercase text-xl md:text-2xl mb-2.5`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <ul className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-2.5 border-t pt-6" style={{ borderColor: C.line }}>
            {SERVICIOS_LISTA.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill={C.red} aria-hidden="true">
                  <circle cx="9" cy="8" r="2.2" />
                  <circle cx="15" cy="8" r="2.2" />
                  <circle cx="6.5" cy="12.5" r="1.8" />
                  <circle cx="17.5" cy="12.5" r="1.8" />
                  <path d="M12 13.5c-2.2 0-4 1.6-4 3.5 0 1 .8 1.8 1.9 1.8.8 0 1.4-.4 2.1-.4s1.3.4 2.1.4c1.1 0 1.9-.8 1.9-1.8 0-1.9-1.8-3.5-4-3.5z" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── La esquina ── */}
      <section id="esquina" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow light>La esquina</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#F6F1E8' }}>
              El local negro
              <br />
              <span style={{ color: C.red }}>con banda roja</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: 'rgba(246,241,232,0.85)' }}>
              Está en Quechereguas 2002, a pasos del centro de Molina: la
              esquina negra con la banda roja que todos los dueños de
              mascotas del sector conocen. Las fotos de esta página son la
              fachada real del local.
            </p>
            <ul className="space-y-2.5 text-sm md:text-base" style={{ color: 'rgba(246,241,232,0.85)' }}>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {BIZ.address}, {BIZ.city}
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                Sin hora previa — por orden de llegada
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <figure>
              <img
                src={`${IMG}/esquina.webp`}
                alt="Esquina de la veterinaria en Quechereguas, Molina, vista desde la calle"
                loading="lazy"
                className="w-full object-cover aspect-[4/3] rounded-sm"
                style={{ boxShadow: '0 20px 50px -20px rgba(0,0,0,0.6)', border: '1px solid rgba(246,241,232,0.18)' }}
              />
              <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(246,241,232,0.62)' }}>
                foto real · street view 2026
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El libro de visitas</Eyebrow>
            <h2 className={`${display.className} uppercase text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              {BIZ.rating}★ en Google
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en la ficha de {BIZ.name}: la atención
              personal es lo que más se repite entre quienes llevan años
              llegando.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.red, textDecorationColor: 'rgba(224,56,62,0.35)' }}
            >
              Leer la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-4">
            {REVIEWS.map((t, i) => (
              <Reveal key={t.author} delay={100 + i * 90}>
                <figure className="p-6 border-l-4" style={{ backgroundColor: C.card, borderColor: i % 2 === 0 ? C.red : C.navy }}>
                  <Stars value={5} color={C.red} className="w-[14px] h-[14px] mb-3" />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {t.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horario y contacto ── */}
      <section id="horario" className="scroll-mt-20" style={{ backgroundColor: C.red }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: 'rgba(255,246,240,0.85)' }}>
              Horario y contacto
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#FFF6F0' }}>
              Pasa directo
              <br />
              <span style={{ color: '#14151A' }}>o escribe antes</span>
            </h2>
            <dl className="border-t mb-8" style={{ borderColor: 'rgba(255,246,240,0.35)' }}>
              {HORARIO.map((r) => (
                <div key={r.d} className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(255,246,240,0.35)' }}>
                  <dt className="text-sm font-semibold" style={{ color: '#FFF6F0' }}>{r.d}</dt>
                  <dd className={`${mono.className} text-[12px] uppercase tracking-[0.08em]`} style={{ color: '#FFF6F0' }}>{r.h}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.deep, color: '#F6F1E8' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-6 py-3 rounded-full border-2 tap-44"
                style={{ borderColor: 'rgba(255,246,240,0.55)', color: '#FFF6F0' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full rounded-sm" style={{ border: '1px solid rgba(0,0,0,0.25)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,7vw,3.9rem)] leading-[1.02] mb-6`} style={{ color: '#F6F1E8' }}>
              Si algo le pasa,
              <br />
              <span style={{ color: C.red }}>aquí está.</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,241,232,0.85)' }}>
              Escribe por WhatsApp contando qué necesita tu mascota: te
              responden desde el mismo local de la esquina.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold inline-block text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
              style={{ backgroundColor: C.red, color: '#FFF6F0' }}
            >
              Escribir a la veterinaria →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F6F1E8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5 border-t" style={{ borderColor: 'rgba(246,241,232,0.14)' }}>
          <div>
            <p className={`${display.className} uppercase text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,232,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,241,232,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,232,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 text-xs leading-relaxed" style={{ color: 'rgba(246,241,232,0.68)' }}>
            Datos de la ficha pública de Google (dirección, horario, reseñas); fotos de la fachada: Street View. Las ilustraciones marcadas «bosquejo» son de muestra, igual que los textos.
          </p>
        </div>
        <div className="px-5 pb-5 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
