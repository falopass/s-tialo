import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  INSTAGRAM_URL,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' },
  ],
})

const C = {
  ink: '#0E1B24',
  muted: '#4C5E69',
  teal: '#0E7C7B',
  tealInk: '#0A5D5C',
  tealDeep: '#083238',
  aqua: '#7FD8CE',
  sand: '#F6F3EC',
  card: '#FFFFFF',
  coral: '#F2A03D',
  line: 'rgba(14,27,36,0.15)',
  lineLight: 'rgba(246,243,236,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'drivet-animals',
  title: 'DRIVET Animals — Hospital veterinario en Talca',
  description:
    'Hospital veterinario en 51 Oriente 1117, Talca. Perros, gatos y exóticos. 4,9★ en Google. Lunes a domingo 10:00–20:30. Agenda por WhatsApp.',
  image: '/demos/drivet-animals/hero.webp',
})

const NAV_LINKS = [
  { label: 'Especies', href: '#especies' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const ESPECIES = [
  { nombre: 'Perros', nota: 'consultas, vacunas, control' },
  { nombre: 'Gatos', nota: 'medicina felina sin estrés' },
  { nombre: 'Conejos', nota: 'y pequeños mamíferos' },
  { nombre: 'Exóticos', nota: 'aves, reptiles y más' },
]

const SERVICIOS = [
  {
    src: `${IMG}/doctora.webp`,
    alt: 'Veterinaria de DRIVET sosteniendo a una gata blanca durante su revisión',
    name: 'Consulta veterinaria',
    desc: 'Diagnóstico con explicación clara de cada procedimiento — los dueños lo repiten en sus reseñas.',
  },
  {
    src: `${IMG}/pesaje.webp`,
    alt: 'Cachorro siendo pesado en la balanza de la clínica',
    name: 'Vacunas y controles',
    desc: 'Calendario de vacunación, desparasitación y pesaje para cachorros y adultos.',
  },
  {
    src: `${IMG}/exoticos.webp`,
    alt: 'Pieza promocional de DRIVET sobre medicina de animales exóticos',
    name: 'Medicina de exóticos',
    desc: 'Atención de aves, conejos, reptiles y pequeños mamíferos — una especialidad poco común en Talca.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Excelente atención. La veterinaria demostró gran profesionalismo, dedicación y un trato muy humano tanto con mi mascota como conmigo. Se agradece su compromiso y claridad en la explicación de los procedimientos, un 10.',
    author: 'Josbel Nuñez',
    when: 'Hace 4 meses',
  },
  {
    text: 'La Dra. es excelente. Atendió a nuestras gatitas con mucha paciencia y cercanía. Nuestra doctora favorita.',
    author: 'Nicol Pacheco',
    when: 'Hace 5 meses',
  },
  {
    text: 'Excelente atención. Explicación detallada de lo que debíamos hacer para que se recuperara nuestra perrita.',
    author: 'Andrea Fuentealba',
    when: 'Hace 3 meses',
  },
]

const HORAS = [
  { days: 'Lunes a domingo', time: '10:00 – 20:30' },
]

/** Trébol de huellas: el motivo gráfico del demo */
function PawMark({ className = 'w-4 h-4', fill = 'currentColor' }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden="true">
      <circle cx="8" cy="8.5" r="3.4" />
      <circle cx="16" cy="8.5" r="3.4" />
      <path d="M12 11.5c-3.1 0-5.2 2.4-5.2 4.9 0 1.7 1.2 2.9 2.9 2.9 1 0 1.7-.5 2.3-.5s1.3.5 2.3.5c1.7 0 2.9-1.2 2.9-2.9 0-2.5-2.1-4.9-5.2-4.9Z" />
    </svg>
  )
}

function Label({ children, light = false, className = '' }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] font-bold flex items-center gap-2.5 ${className}`}
      style={{ color: light ? C.aqua : C.tealInk }}
    >
      <PawMark className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

function BtnWA({ href, children, ghost = false }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-block font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
      style={
        ghost
          ? { border: `2px solid rgba(246,243,236,0.5)`, color: C.sand }
          : { backgroundColor: C.aqua, color: C.tealDeep }
      }
    >
      {children}
    </a>
  )
}

export default function DrivetPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.sand, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(8,50,56,0.95)',
          ink: '#F6F3EC',
          line: 'rgba(246,243,236,0.16)',
          btnBg: C.aqua,
          btnInk: C.tealDeep,
        }}
      />

      {/* ── Hero partido: texto sobre azul, foto enmarcada ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.tealDeep }}>
        {/* huellas decorativas de fondo */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <PawMark className="absolute -top-4 left-[8%] w-16 h-16 rotate-12" fill="rgba(127,216,206,0.1)" />
          <PawMark className="absolute top-1/3 right-[4%] w-10 h-10 -rotate-12" fill="rgba(127,216,206,0.08)" />
          <PawMark className="absolute bottom-10 left-[38%] w-24 h-24 rotate-45" fill="rgba(127,216,206,0.06)" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-6">
              <Stars value={BIZ.rating} color={C.coral} />
              <span className={`${display.className} text-sm font-bold`} style={{ color: C.sand }}>
                {BIZ.ratingLabel} · {BIZ.reviewsLabel} reseñas en Google
              </span>
            </div>
            <h1
              className={`${display.className} font-bold leading-[1.06] tracking-[-0.01em] text-[clamp(2.3rem,7.5vw,4.4rem)] mb-6`}
              style={{ color: C.sand }}
            >
              Cuidamos lo que
              <br />
              <span style={{ color: C.aqua }}>más amas</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(246,243,236,0.85)' }}>
              Hospital veterinario en pleno centro de Talca. Medicina con
              sentido, ciencia y amor — para perros, gatos, conejos y
              exóticos.
            </p>
            <div className="flex flex-wrap gap-3">
              <BtnWA href={WA_LINK}>Agendar por WhatsApp</BtnWA>
              <a
                href="#especies"
                className={`${display.className} inline-block font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(246,243,236,0.4)', color: C.sand }}
              >
                Qué especies atienden ↓
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <figure className="relative">
              <div className="relative rounded-3xl overflow-hidden border shadow-2xl" style={{ borderColor: 'rgba(127,216,206,0.35)' }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Fachada de DRIVET Animals en 51 Oriente, Talca, con la familia del local y su perro"
                  width={787}
                  height={1074}
                  priority
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="w-full h-auto object-cover max-h-[62vh] lg:max-h-[70vh]"
                />
              </div>
              <figcaption
                className={`${display.className} absolute -bottom-4 left-5 right-5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-between gap-3`}
                style={{ backgroundColor: C.aqua, color: C.tealDeep }}
              >
                <span>Su local real en 51 Oriente</span>
                <PawMark className="w-4 h-4 shrink-0" fill={C.tealDeep} />
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de especies ── */}
      <section id="especies" className="scroll-mt-20" style={{ backgroundColor: C.teal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <p className={`${display.className} text-center text-[11px] uppercase tracking-[0.24em] font-bold mb-8`} style={{ color: '#FFFFFF' }}>
              Un hospital para todas las especies
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {ESPECIES.map((e, i) => (
              <Reveal key={e.nombre} delay={i * 90}>
                <li
                  className="rounded-2xl px-5 py-6 text-center border"
                  style={{ backgroundColor: 'rgba(8,50,56,0.35)', borderColor: 'rgba(127,216,206,0.3)' }}
                >
                  <PawMark className="w-6 h-6 mx-auto mb-3" fill={C.aqua} />
                  <p className={`${display.className} font-bold text-lg md:text-xl mb-1`} style={{ color: C.sand }}>
                    {e.nombre}
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: 'rgba(246,243,236,0.78)' }}>
                    {e.nota}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Servicios (lista editorial con fotos) ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Label className="mb-4">Servicios</Label>
          <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.ink }}>
            Medicina veterinaria
            <br />
            <span style={{ color: C.teal }}>con sentido, ciencia y amor</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-lg mb-10 md:mb-14" style={{ color: C.muted }}>
            Así define DRIVET su propia práctica. Los servicios publicados
            en sus redes: consulta general, vacunas y medicina de especies
            exóticas.
          </p>
        </Reveal>
        <ul className="divide-y" style={{ borderColor: C.line }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <li className="grid md:grid-cols-[160px_1fr_80px] gap-5 md:gap-8 items-center py-6 md:py-8">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className={`${display.className} font-bold text-2xl md:text-3xl mb-2`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
                <span className={`${display.className} hidden md:block font-bold text-4xl text-right`} style={{ color: 'rgba(14,124,123,0.35)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-8 text-sm" style={{ color: C.muted }}>
            ¿Un servicio puntual? Pregunta directo por WhatsApp — responden con la misma cercanía que en el local.
          </p>
        </Reveal>
      </section>

      {/* ── Equipo / exóticos destacado ── */}
      <section style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal delay={120}>
            <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.lineLight }}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/equipo.webp`}
                  alt="Pieza gráfica de DRIVET: el equipo veterinario con perro, gata y conejo"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>
          <Reveal>
            <Label light className="mb-5">Por qué DRIVET</Label>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.sand }}>
              4,9 estrellas
              <br />
              <span style={{ color: C.aqua }}>no son casualidad</span>
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                'Las reseñas repiten las mismas palabras: dedicación, paciencia, confianza.',
                'Cada procedimiento se explica antes — la claridad es parte del trato.',
                'Uno de los pocos centros de Talca que atiende exóticos.',
                'Abierto los 7 días de la semana, hasta las 20:30.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(246,243,236,0.88)' }}>
                  <PawMark className="w-4 h-4 mt-1 shrink-0" fill={C.aqua} />
                  {item}
                </li>
              ))}
            </ul>
            <BtnWA href={WA_LINK}>Conversar con el equipo</BtnWA>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Label className="mb-4">Reseñas reales de Google</Label>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-12">
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              La mejor nota
              <br />
              <span style={{ color: C.teal }}>de las veterinarias de Talca</span>
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.teal, textDecorationColor: 'rgba(14,124,123,0.35)' }}
            >
              Ver las {BIZ.reviewsLabel} reseñas →
            </a>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure
                className="rounded-2xl p-6 border h-full flex flex-col"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 8px rgba(14,27,36,0.05)' }}
              >
                <Stars value={5} color={C.coral} className="w-3.5 h-3.5" />
                <blockquote className="text-sm md:text-[15px] leading-relaxed mt-4 mb-5 flex-1" style={{ color: C.ink }}>
                  “{t.text}”
                </blockquote>
                <figcaption>
                  <span className="block text-sm font-bold" style={{ color: C.ink }}>{t.author}</span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: C.muted }}>
                    {t.when} · Google
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#E7EDEB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Label className="mb-4">Ubicación y horario</Label>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              En pleno centro
              <br />
              <span style={{ color: C.teal }}>de Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(14,27,36,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.teal} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.teal, color: C.sand }}
              >
                Cómo llegar →
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(14,27,36,0.35)', color: C.ink }}
              >
                Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.sand }}>
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

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-18 md:py-28 py-20 text-center relative overflow-hidden">
          <PawMark className="absolute top-8 left-[12%] w-12 h-12 -rotate-12" fill="rgba(127,216,206,0.1)" />
          <PawMark className="absolute bottom-8 right-[10%] w-16 h-16 rotate-24" fill="rgba(127,216,206,0.08)" />
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(2rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.sand }}>
              Tu mascota,
              <br />
              <span style={{ color: C.aqua }}>en buenas manos</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,243,236,0.85)' }}>
              Consulta, vacuna o control de tu exótico: escribe por
              WhatsApp y agenda en minutos. Lunes a domingo, 10:00–20:30.
            </p>
            <BtnWA href={WA_LINK}>Agendar por WhatsApp</BtnWA>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tealDeep, color: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 md:py-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-5 border-t" style={{ borderColor: C.lineLight }}>
          <div>
            <p className={`${display.className} font-bold text-xl mb-1.5 flex items-center gap-3`}>
              <PawMark className="w-5 h-5" fill={C.aqua} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,243,236,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,243,236,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,243,236,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2 md:py-3 text-xs leading-relaxed" style={{ color: 'rgba(246,243,236,0.7)' }}>
            Datos, horarios y reseñas según la ficha pública de Google Maps
            y sus redes oficiales; confirmar detalles al publicar.
          </p>
        </div>
        <div className="px-5 pt-1 pb-3 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
