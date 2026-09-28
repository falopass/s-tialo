import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_URGENCIA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' },
  ],
})

const C = {
  paper: '#F6F1E7',
  card: '#FCF9F2',
  forest: '#1E3D2F',
  forestDeep: '#142A20',
  brass: '#C8A24B',
  brassSoft: '#E8D9B4',
  brassDeep: '#7A5D1C',
  ink: '#2A2922',
  muted: '#6E675A',
  line: 'rgba(30,61,47,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-veterinaria-docpino',
  title: 'Clínica Veterinaria Docpino — Veterinario en Linares',
  description: 'Clínica veterinaria en Diputado Mario Dueñas 698, Linares. Consultas, vacunas, cirugías y farmacia veterinaria. Agenda por WhatsApp.',
  image: '/demos/clinica-veterinaria-docpino/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Valores', href: '#valores' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Mesa de examen de acero con instrumental veterinario',
    tag: 'consulta',
    name: 'Consulta general y diagnóstico',
    desc: 'Examen completo, diagnóstico y plan de tratamiento explicado con calma, en el mismo box.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Perro descansando tranquilo en su manta dentro de la clínica',
    tag: 'prevención',
    name: 'Vacunas y desparasitación',
    desc: 'Calendario de vacunación para cachorros y adultos, desparasitación interna y externa según peso y edad.',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Box de atención de la clínica con mesa de acero e instrumental',
    tag: 'procedimientos',
    name: 'Cirugías y esterilización',
    desc: 'Procedimientos programados con anestesia monitoreada y controles post-operatorios incluidos.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción de la clínica con jaula transportadora y mesón de madera',
    tag: 'farmacia',
    name: 'Farmacia e insumos',
    desc: 'Antiparasitarios, alimentos y accesorios en el mismo local, para salir con todo listo.',
  },
]

const PRECIOS = [
  { name: 'Consulta general', price: 'desde $20.000' },
  { name: 'Vacuna (según calendario)', price: 'desde $15.000' },
  { name: 'Desparasitación interna y externa', price: 'desde $8.000' },
  { name: 'Corte de uñas y limpieza de oídos', price: 'desde $6.000' },
  { name: 'Esterilización canina y felina', price: 'a evaluar' },
]

const TESTIMONIALS = [
  {
    text: 'Siempre nos atienden con la misma dedicación, se nota que conocen a los animales y a sus dueños.',
    author: 'Vecina de Linares',
  },
  {
    text: 'Llegué con mi gata asustada y la trataron con una calma que no se ve en todas partes.',
    author: 'Cliente de siempre',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:30 – 19:00' },
  { days: 'Sábado', time: '10:00 – 14:00' },
  { days: 'Domingo y festivos', time: 'Cerrado' },
]

function Paw({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="12" cy="16.2" rx="4.4" ry="3.6" />
      <ellipse cx="5.4" cy="11" rx="1.9" ry="2.5" transform="rotate(-18 5.4 11)" />
      <ellipse cx="9.3" cy="7.4" rx="1.9" ry="2.6" transform="rotate(-6 9.3 7.4)" />
      <ellipse cx="14.7" cy="7.4" rx="1.9" ry="2.6" transform="rotate(6 14.7 7.4)" />
      <ellipse cx="18.6" cy="11" rx="1.9" ry="2.5" transform="rotate(18 18.6 11)" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.brassSoft : C.brassDeep }}
    >
      <Paw className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function ClinicaVeterinariaDocpinoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,231,0.94)',
          ink: C.forestDeep,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F6F1E7',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.forestDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Box de atención de Clínica Veterinaria Docpino: mesa de acero, instrumental y luz de tarde"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,42,32,0.6) 0%, rgba(20,42,32,0.5) 38%, rgba(20,42,32,0.9) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-[#E8D9B4]"
              style={{ backgroundColor: 'rgba(246,241,231,0.95)', color: C.forestDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.brass} stroke={C.brass} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Clínica veterinaria · Linares</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.8rem,9vw,5.6rem)] mb-6`}
              style={{ color: '#F6F1E7' }}
            >
              La veterinaria
              <br />
              <em style={{ color: C.brassSoft }}>que Linares ya conoce</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(246,241,231,0.88)' }}>
              Atención veterinaria directa y de confianza en {BIZ.address},
              Linares: consultas, vacunas, cirugías y farmacia en el mismo lugar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-[#E8D9B4]`}
                style={{ backgroundColor: C.brass, color: '#142A20' }}
              >
                Agendar hora por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 focus-visible:outline-[#E8D9B4]`}
                style={{ borderColor: 'rgba(246,241,231,0.55)', color: '#F6F1E7' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(246,241,231,0.22)', backgroundColor: 'rgba(20,42,32,0.5)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,231,0.9)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.brass }} aria-hidden="true" />
              agenda por WhatsApp
            </span>
            <span className="hidden md:inline">{BIZ.reviews} reseñas en Google</span>
            <span className="hidden md:inline" style={{ color: C.brassSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Doble columna: contenido + sidebar pegajoso ── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">

        <div>
          {/* Servicios */}
          <section id="servicios" className="scroll-mt-24">
            <Reveal>
              <Eyebrow>Servicios</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.forest }}>
                Todo lo que tu mascota necesita,
                <br />
                <em style={{ color: C.brassDeep }}>bajo un mismo techo</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10 md:mb-12" style={{ color: C.muted }}>
                Esto es una muestra del catálogo: al publicar van los
                servicios y descripciones reales de la clínica.
              </p>
            </Reveal>
            <ul className="space-y-6">
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.name} delay={i * 80}>
                  <li
                    className="group rounded-3xl overflow-hidden border shadow-[0_2px_4px_rgba(20,42,32,0.05)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(20,42,32,0.12)] md:grid md:grid-cols-[240px_1fr]"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[190px]">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 768px) 240px, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-5 md:p-7">
                      <span
                        className={`${display.className} inline-block text-xs italic px-3.5 py-1 rounded-full mb-3`}
                        style={{ backgroundColor: C.forest, color: C.brassSoft }}
                      >
                        {s.tag}
                      </span>
                      <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.forest }}>
                        {s.name}
                      </h3>
                      <p className="text-[15px] leading-relaxed" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* La clínica */}
          <section id="clinica" className="scroll-mt-24 border-t mt-16 md:mt-20 pt-14 md:pt-16" style={{ borderColor: C.line }}>
            <Reveal>
              <Eyebrow>La clínica</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.forest }}>
                Atención de barrio,
                <br />
                <em style={{ color: C.brassDeep }}>en pleno centro de Linares</em>
              </h2>
              <div className="space-y-4 text-[15px] md:text-base leading-relaxed max-w-2xl" style={{ color: C.muted }}>
                <p>
                  Clínica Veterinaria Docpino atiende en {BIZ.address}, a pasos
                  del centro de Linares. Es la veterinaria que los vecinos
                  recomiendan: {BIZ.reviews} reseñas en su ficha de Google y una
                  comunidad activa en Facebook que sigue de cerca sus consejos
                  y casos.
                </p>
                <p>
                  Aquí te atienden directo, sin intermediarios: llegas con tu
                  mascota, conversas con quien la va a ver y sales sabiendo qué
                  tiene y qué sigue. Esa cercanía es lo que la gente más valora.
                </p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {[
                { value: `${BIZ.reviews}`, label: 'reseñas en Google Maps' },
                { value: '3.811', label: 'seguidores en Facebook' },
                { value: 'Linares', label: 'atención presencial y directa' },
              ].map((s) => (
                <Reveal key={s.label} delay={80}>
                  <div className="rounded-2xl border p-5" style={{ borderColor: C.line, backgroundColor: C.card }}>
                    <p className={`${display.className} text-2xl md:text-3xl mb-1`} style={{ color: C.forest }}>
                      {s.value}
                    </p>
                    <p className="text-xs md:text-sm leading-snug" style={{ color: C.muted }}>
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="space-y-5 mt-10">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <figure className="rounded-3xl p-6 md:p-7 border" style={{ backgroundColor: C.card, borderColor: C.line }}>
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.brassDeep }}>
                        {t.author} · Reseña de ejemplo
                      </span>
                      <Paw className="w-4 h-4 shrink-0" color={C.brass} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Valores de referencia */}
          <section id="valores" className="scroll-mt-24 border-t mt-16 md:mt-20 pt-14 md:pt-16" style={{ borderColor: C.line }}>
            <Reveal>
              <Eyebrow>Valores de referencia</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.forest }}>
                Precios claros,
                <br />
                <em style={{ color: C.brassDeep }}>antes de atender</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: C.muted }}>
                Valores de muestra para mostrar cómo se vería la lista de
                precios: al publicar van los valores reales de la clínica.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="rounded-3xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
                {PRECIOS.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline justify-between gap-4 px-5 md:px-7 py-4 border-b last:border-b-0"
                    style={{ borderColor: C.line }}
                  >
                    <span className="text-sm md:text-base min-w-0" style={{ color: C.ink }}>
                      {p.name}
                    </span>
                    <span className={`${display.className} text-base md:text-lg whitespace-nowrap`} style={{ color: C.forest }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4 leading-relaxed" style={{ color: C.muted }}>
                * Lista de muestra. Los valores reales se confirman siempre
                antes de la atención, por WhatsApp o en recepción.
              </p>
            </Reveal>
          </section>

          {/* Cómo llegar */}
          <section id="contacto" className="scroll-mt-24 border-t mt-16 md:mt-20 pt-14 md:pt-16" style={{ borderColor: C.line }}>
            <Reveal>
              <Eyebrow>Cómo llegar</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-8`} style={{ color: C.forest }}>
                {BIZ.address},
                <br />
                <em style={{ color: C.brassDeep }}>Linares</em>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden border h-full min-h-[260px]" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Fachada de la clínica en una esquina de Linares, con el cerro de fondo"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-3xl overflow-hidden border min-h-[260px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[260px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        </div>

        {/* Sidebar pegajoso */}
        <aside className="mt-14 lg:mt-0 lg:border-l lg:pl-10" style={{ borderColor: C.line }}>
          <div className="lg:sticky lg:top-24 space-y-4">
            <Reveal>
              <div
                className="rounded-3xl border p-6"
                style={{ backgroundColor: C.forest, borderColor: 'rgba(246,241,231,0.18)', boxShadow: '0 16px 40px rgba(20,42,32,0.18)' }}
              >
                <p className={`${display.className} text-2xl leading-tight mb-2`} style={{ color: '#F6F1E7' }}>
                  Agenda tu hora
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(246,241,231,0.9)' }}>
                  Cuéntanos qué le pasa a tu mascota y te confirmamos hora el
                  mismo día.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} block text-center text-sm px-5 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 mb-3 focus-visible:outline-[#E8D9B4]`}
                  style={{ backgroundColor: C.brass, color: '#142A20' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={WA_LINK_URGENCIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs font-bold uppercase tracking-[0.14em] py-2 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-[#E8D9B4]"
                  style={{ borderColor: 'rgba(246,241,231,0.35)', color: 'rgba(246,241,231,0.85)' }}
                >
                  Es una urgencia
                </a>
                <p className="text-[11px] mt-4 text-center" style={{ color: 'rgba(246,241,231,0.9)' }}>
                  {BIZ.phoneDisplay}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-3xl border p-6" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.brassDeep }}>
                  Horario de atención
                </p>
                <ul className="space-y-2.5 mb-4">
                  {HORAS.map((h) => (
                    <li key={h.days} className="flex items-center gap-3 text-sm" style={{ color: C.muted }}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.brass} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7 v5 l3.5 2" />
                      </svg>
                      <span>
                        <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] leading-relaxed" style={{ color: C.muted }}>
                  Horario de muestra: al publicar van los horarios reales de
                  la clínica.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-3xl border p-6" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.brassDeep }}>
                  Dirección
                </p>
                <address className="not-italic text-sm leading-relaxed mb-5" style={{ color: C.ink }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                </address>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 focus-visible:outline-[#1E3D2F]"
                  style={{ color: C.forest, textDecorationColor: 'rgba(200,162,75,0.6)' }}
                >
                  Abrir en Google Maps →
                </a>
                <div className="border-t mt-5 pt-5" style={{ borderColor: C.line }}>
                  <a
                    href={BIZ.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm font-bold transition-opacity hover:opacity-75 focus-visible:outline-[#1E3D2F]"
                    style={{ color: C.forest }}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill={C.forest} aria-hidden="true">
                      <path d="M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6v3.1h2.7v8a10 10 0 0 0 3.2 0z" />
                    </svg>
                    Facebook · 3.811 seguidores
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl border p-5 flex items-center gap-3" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill={C.brass} stroke={C.brass} strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                </svg>
                <p className="text-xs leading-snug" style={{ color: C.muted }}>
                  <strong className="font-bold" style={{ color: C.ink }}>{BIZ.reviews} reseñas</strong>{' '}
                  en su ficha de Google Maps.
                </p>
              </div>
            </Reveal>
          </div>
        </aside>
      </div>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.forestDeep }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#F6F1E7' }}>
              Tu mascota,
              <br />
              <em style={{ color: C.brassSoft }}>en buenas manos</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,241,231,0.9)' }}>
              Escríbenos por WhatsApp para agendar consulta, vacuna o
              esterilización. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-[#E8D9B4]`}
              style={{ backgroundColor: C.brass, color: '#142A20' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.forestDeep, color: '#F6F1E7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 md:pb-10">
          <p className={`${display.className} text-xl md:text-2xl mb-1 flex items-center gap-3`}>
            <Paw className="w-5 h-5" color={C.brass} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: 'rgba(246,241,231,0.85)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
          <p className="text-xs leading-relaxed max-w-2xl" style={{ color: 'rgba(246,241,231,0.8)' }}>
            Sitio de ejemplo preparado por{' '}
            <a
              href="https://sitiazo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2"
              style={{ color: C.brassSoft }}
            >
              Sitiazo
            </a>
            . Textos, precios y fotos son de muestra; dirección, contacto y reseñas son reales.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
