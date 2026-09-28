import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  blue: '#2251FF',
  deep: '#0B1E6B',
  lime: '#D8F878',
  ink: '#101736',
  muted: '#59617E',
  gray: '#EEF0F6',
  card: '#FFFFFF',
  line: 'rgba(16,23,54,0.13)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'italo-vet-linares',
  title: 'Italo Vet Linares — Veterinario en Linares',
  description: 'Clínica veterinaria en Corporación 840, Linares. Consultas, vacunas y controles para perros y gatos. Pide hora por WhatsApp.',
  image: '/demos/italo-vet-linares/hero.webp',
})

const NAV_LINKS = [
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Cómo atendemos', href: '#flujo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Horario', href: '#contacto' },
]

const PACIENTES = [
  {
    src: `${IMG}/paciente1.webp`,
    alt: 'Perrito mirando hacia arriba dentro de la consulta de Italo Vet',
    cap: 'Paciente real',
  },
  {
    src: `${IMG}/espera.webp`,
    alt: 'Perro esperando su turno junto a una silla azul en la clínica',
    cap: 'En la sala de espera',
  },
  {
    src: `${IMG}/paciente2.webp`,
    alt: 'Rottweiler con arnés llegando en auto a la clínica',
    cap: 'Recién llegado',
  },
]

const FLUJO = [
  {
    n: '01',
    title: 'Escribes por WhatsApp',
    desc: 'Nos cuentas qué le pasa a tu mascota y te damos hora el mismo día cuando hay cupo.',
  },
  {
    n: '02',
    title: 'Consulta en Corporación 840',
    desc: 'Local a nivel de calle, fácil de llegar. Examen completo y diagnóstico explicado en simple.',
  },
  {
    n: '03',
    title: 'Tratamiento y seguimiento',
    desc: 'Plan claro para la casa, controles agendados y dudas por WhatsApp después de la consulta.',
  },
]

const SERVICES = [
  { name: 'Consulta general', desc: 'Evaluación completa, diagnóstico y plan de tratamiento para perros y gatos.' },
  { name: 'Vacunas y desparasitación', desc: 'Calendario al día según edad y estilo de vida, con recordatorio por WhatsApp.' },
  { name: 'Cirugías y procedimientos', desc: 'Esterilizaciones y procedimientos con cuidados explicados antes y después.' },
  { name: 'Controles y recuperación', desc: 'Seguimiento después de un tratamiento o cirugía, hasta el alta.' },
]

const REVIEWS = [
  {
    text: 'Seis años llevando a mis dos perrhijos. Explicaciones 10/10, fue el único que pudo tratar la operación de mi perrito. Atención inmediata en caso de urgencia.',
    author: 'Constanza Castillo Morales',
  },
  {
    text: 'Muy buena atención, la información es muy completa y el doctor excelente.',
    author: 'Nadia Cerda',
  },
]

const waBtn =
  'inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2'

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: light ? C.lime : C.blue }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ItaloVetLinaresPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: '#fff', color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir hora"
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero a sangre: paciente real ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cachorro chihuahua sobre la mesa de examen de Italo Vet Linares"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(11,30,107,0.45) 0%, rgba(11,30,107,0.25) 40%, rgba(11,30,107,0.9) 85%, ${C.deep} 100%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-14 md:pb-20 pt-32">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-6" style={{ backgroundColor: C.lime, color: C.ink }}>
              Veterinario · {BIZ.city}
            </p>
            <h1 className={`${display.className} text-white font-bold leading-[0.98] tracking-tight text-[clamp(2.6rem,7.5vw,5.5rem)] max-w-3xl mb-6`}>
              Al veterinario <span style={{ color: C.lime }}>sin drama</span>, en Linares.
            </h1>
            <p className="text-white/85 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Atención veterinaria directa en {BIZ.street}: escribes, te
              damos hora y seguimos a tu mascota hasta que vuelve a su ritmo.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} text-base px-7`}
                style={{ backgroundColor: C.lime, color: C.ink, outlineColor: C.lime }}
              >
                Pedir hora por WhatsApp →
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white tap-44"
              >
                <Stars value={4.6} color={C.lime} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pacientes reales ── */}
      <section id="pacientes" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Label>Pacientes de la casa</Label>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
              <h2 className={`${display.className} font-bold tracking-tight text-4xl md:text-5xl leading-[1.02] max-w-xl`}>
                Los que ya pasaron por la mesa
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Fotos reales publicadas por la clínica: así se ven sus
                pacientes en la consulta.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {PACIENTES.map((p, i) => (
              <Reveal key={p.src} delay={i * 90} className={i === 1 ? 'md:translate-y-8' : ''}>
                <figure className="group">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {p.cap} · Italo Vet
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flujo de atención: banda numerada ── */}
      <section id="flujo" className="scroll-mt-20" style={{ backgroundColor: C.blue }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label light>Cómo atendemos</Label>
            <h2 className={`${display.className} text-white font-bold tracking-tight text-4xl md:text-6xl leading-[1] mb-12`}>
              Escribes, vienes, <span style={{ color: C.lime }}>se acabó el drama</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px rounded-3xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}>
            {FLUJO.map((s, i) => (
              <article key={s.n} className="p-7 md:p-9" style={{ backgroundColor: C.blue }}>
                <Reveal delay={i * 100}>
                  <span className={`${display.className} block font-bold text-5xl md:text-6xl leading-none mb-6`} style={{ color: C.lime }}>
                    {s.n}
                  </span>
                  <h3 className={`${display.className} text-white font-bold text-xl md:text-2xl leading-tight mb-3`}>
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
                    {s.desc}
                  </p>
                </Reveal>
              </article>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${waBtn} mt-9 bg-white hover:bg-[#EEF0F6]`}
              style={{ color: C.blue, outlineColor: C.lime }}
            >
              Empezar por WhatsApp · {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios + consulta ── */}
      <section id="servicios" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.gray }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_0.85fr] gap-10 md:gap-14 items-start">
          <div>
            <Reveal>
              <Label>Servicios · muestra</Label>
              <h2 className={`${display.className} font-bold tracking-tight text-4xl md:text-5xl leading-[1.02] mb-4`}>
                Lo que resolvemos en la clínica
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                Lista de ejemplo: al publicar van las prestaciones y
                valores reales de Italo Vet.
              </p>
            </Reveal>
            <ul>
              {SERVICES.map((s, i) => (
                <li key={s.name}>
                  <Reveal delay={i * 80}>
                    <div className="py-5 border-t first:border-t-0" style={{ borderColor: C.line }}>
                      <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-1.5`} style={{ color: C.deep }}>
                        {s.name}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={160}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} mt-7 text-white hover:brightness-110`}
                style={{ backgroundColor: C.blue, outlineColor: C.blue }}
              >
                Consultar por WhatsApp
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="lg:sticky lg:top-24">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_24px_60px_-30px_rgba(11,30,107,0.5)]">
                <Image
                  src={`${IMG}/consulta.webp`}
                  alt="Perro paciente sentado dentro de la consulta de Italo Vet"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Dentro de la consulta · {BIZ.street}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Label>Reseñas de Google</Label>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} font-bold tracking-tight text-4xl md:text-5xl leading-[1.02] max-w-xl`}>
                {BIZ.reviews} reseñas, {BIZ.rating} estrellas
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: C.blue, textDecorationColor: 'rgba(34,81,255,0.35)', outlineColor: C.blue }}
              >
                Ver la ficha en Google Maps →
              </a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-4xl">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 100}>
                <figure className="h-full flex flex-col rounded-3xl p-6 md:p-7" style={{ backgroundColor: C.gray }}>
                  <Stars value={5} color={C.blue} className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {r.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="text-sm mt-8" style={{ color: C.muted }}>
              También en Facebook:{' '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.blue }}>
                {BIZ.followers} seguidores
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto y horario ── */}
      <section id="contacto" className="scroll-mt-20 text-white" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Label light>Contacto</Label>
            <h2 className={`${display.className} font-bold tracking-tight text-4xl md:text-6xl leading-[0.98] mb-7`}>
              {BIZ.street}, <span style={{ color: C.lime }}>Linares</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.region}, Chile
            </address>
            <dl className="rounded-2xl border overflow-hidden text-sm mb-8" style={{ borderColor: 'rgba(255,255,255,0.16)' }}>
              {HORARIO.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b last:border-b-0" style={{ borderColor: 'rgba(255,255,255,0.16)' }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-semibold shrink-0`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {h.days}
                  </dt>
                  <dd className="text-right font-semibold" style={{ color: h.time === 'Cerrado' ? 'rgba(255,255,255,0.6)' : C.lime }}>
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn}`}
                style={{ backgroundColor: C.lime, color: C.ink, outlineColor: C.lime }}
              >
                WhatsApp {BIZ.phoneDisplay} →
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} border hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff', outlineColor: '#fff' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border-4 min-h-[320px] h-full" style={{ borderColor: C.lime }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo + footer ── */}
      <div className="py-4 px-5 text-center text-sm font-bold" style={{ backgroundColor: C.lime, color: C.ink }}>
        Mockup preparado por{' '}
        <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Sitiazo</a>{' '}
        para {BIZ.name}: fotos, horario y reseñas reales; servicios y precios de muestra.{' '}
        <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">¿Lo hacemos realidad?</a>
      </div>

      <footer className="py-6 px-5 text-center text-xs" style={{ color: C.muted }}>
        {BIZ.name} · {BIZ.address}
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
