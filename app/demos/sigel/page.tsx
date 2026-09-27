import type { Metadata } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_EMERGENCIA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
})
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  paper: '#F5F6F9',
  soft: '#E9EDF5',
  card: '#FFFFFF',
  grafito: '#15171C',
  grafitoDeep: '#0E1013',
  blue: '#1B4DFF',
  yellow: '#FFD400',
  ink: '#15171C',
  muted: '#5B6270',
  line: 'rgba(21,23,28,0.14)',
}

export const metadata: Metadata = {
  title: 'Eléctrico Domiciliario Sigel — Electricista a domicilio en Talca',
  description:
    'Electricista a domicilio en Av. Piduco Sur, Talca. Instalaciones, tableros, iluminación y emergencias. Cotiza por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajo', href: '#trabajo' },
  { label: 'Zonas', href: '#zonas' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/instalacion.webp`,
    tag: 'instalaciones',
    name: 'Enchufes, interruptores y circuitos',
    desc: 'Instalaciones nuevas, ampliaciones y corrección de circuitos para tu casa, departamento o local.',
  },
  {
    src: `${IMG}/tablero.webp`,
    tag: 'tableros',
    name: 'Tableros y protecciones',
    desc: 'Tableros ordenados y etiquetados, automáticos y diferenciales bien dimensionados. Se acabó que salte la luz por todo.',
  },
  {
    src: `${IMG}/luces.webp`,
    tag: 'iluminación',
    name: 'Iluminación interior y exterior',
    desc: 'LED, focos empotrados, cintas y luz de patio: buena iluminación sin gastar de más en la cuenta.',
  },
  {
    src: `${IMG}/furgon.webp`,
    tag: 'emergencias',
    name: 'Emergencias a domicilio',
    desc: 'Cortes, chispazos u olor a quemado: atención urgente dentro de Talca, también fines de semana.',
  },
]

const PASOS = [
  {
    title: 'Diagnóstico',
    desc: 'Reviso la falla en terreno o por fotos, y te explico qué está pasando en simple, sin tecnicismos.',
  },
  {
    title: 'Presupuesto claro',
    desc: 'Precio cerrado antes de empezar el trabajo. Sin cobros sorpresa ni «extras» al final.',
  },
  {
    title: 'Trabajo ordenado',
    desc: 'Protejo el sector, trabajo limpio y dejo todo probado antes de irme de tu casa.',
  },
  {
    title: 'Garantía',
    desc: 'El trabajo queda respaldado: si algo falla por la instalación, vuelvo a revisarlo.',
  },
]

const ZONAS = [
  'Talca centro',
  'Talca norte',
  'Talca sur',
  'Talca oriente',
  'Talca poniente',
  'Pencahue',
  'Maule',
  'San Clemente',
  'San Javier',
]

const TESTIMONIALS = [
  {
    text: 'Llegó a la hora acordada, encontró la falla altiro y me explicó todo antes de cobrar. Así da gusto.',
    author: 'Vecina de Talca centro',
  },
  {
    text: 'Me ordenó el tablero completo y quedó todo etiquetado. Se nota el trabajo prolijo.',
    author: 'Casa en Talca oriente',
  },
  {
    text: 'Un sábado se nos fue la luz y vino igual. Precio justo y sin cuentas alegres.',
    author: 'Cliente de emergencia',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00–19:00' },
  { days: 'Sábado', time: '10:00–14:00' },
  { days: 'Emergencias', time: 'A convenir por WhatsApp' },
]

function Bolt({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M13 2 L4.5 13.5 H10.5 L9.5 22 L19.5 10 H13.5 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.yellow : C.blue }}
    >
      <Bolt className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function SigelPage() {
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
          bar: 'rgba(14,16,19,0.94)',
          ink: '#F5F6F9',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.yellow,
          btnInk: '#15171C',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.grafitoDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Electricista de Eléctrico Domiciliario Sigel trabajando en una instalación domiciliaria"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,16,19,0.7) 0%, rgba(14,16,19,0.45) 38%, rgba(14,16,19,0.92) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(245,246,249,0.95)', color: C.grafito }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.blue} stroke={C.blue} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Electricista a domicilio · Talca</Eyebrow>
            <h1
              className={`${display.className} scroll-mt-28 font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.4rem)] mb-6`}
              style={{ color: '#F5F6F9' }}
            >
              Luz, enchufes y tableros:
              <br />
              <span style={{ color: C.yellow }}>sin sorpresas.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(245,246,249,0.88)' }}>
              Electricista a domicilio en Av. Piduco Sur, Talca.
              Diagnóstico honesto, presupuesto antes de partir y trabajo
              con garantía.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.yellow, color: '#15171C' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(245,246,249,0.55)', color: '#F5F6F9' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(245,246,249,0.22)', backgroundColor: 'rgba(14,16,19,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(245,246,249,0.9)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
              presupuesto antes de partir
            </span>
            <span>Emergencias a domicilio</span>
            <span className="hidden md:inline" style={{ color: C.yellow }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.grafito }}>
              Pega chica o pega grande,
              <br />
              <span style={{ color: C.blue }}>bien hecha</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra de los trabajos: al publicar va la
              lista real de servicios y coberturas.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICIOS.map((s) => (
              <li
                key={s.name}
                className="group rounded-2xl overflow-hidden border h-full"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 6px rgba(21,23,28,0.06)' }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={s.src}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full shadow-sm`}
                    style={{ backgroundColor: 'rgba(21,23,28,0.9)', color: C.yellow }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <h3 className={`${display.className} font-extrabold text-xl md:text-2xl mb-2`} style={{ color: C.grafito }}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
          ))}
        </ul>
      </section>

      {/* ── Cómo trabajo ── */}
      <section id="trabajo" className="scroll-mt-20" style={{ backgroundColor: C.grafito }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo trabajo</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#F5F6F9' }}>
                Entro a tu casa
                <br />
                <span style={{ color: C.yellow }}>con reglas claras</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(245,246,249,0.85)' }}>
                Cuatro pasos, siempre iguales. Así sabes qué esperar
                desde que escribes hasta que me voy.
              </p>
            </div>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li
                  className="rounded-2xl border p-6 h-full"
                  style={{ borderColor: 'rgba(245,246,249,0.16)', backgroundColor: 'rgba(245,246,249,0.04)' }}
                >
                  <span
                    className={`${display.className} block font-black text-4xl mb-4`}
                    style={{ color: i === 0 ? C.yellow : C.blue, WebkitTextStroke: i === 0 ? undefined : undefined }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} font-extrabold text-lg mb-2`} style={{ color: '#F5F6F9' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,246,249,0.85)' }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Cotización por WhatsApp ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.blue }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow light>Cotización por WhatsApp</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#FFFFFF' }}>
              Manda una foto de la falla
              <br />
              <span style={{ color: C.yellow }}>y cotiza al tiro</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(255,255,255,0.95)' }}>
              Escríbeme por WhatsApp contando qué necesitas — si puedes,
              con foto del enchufe, tablero o lugar del trabajo — y te
              respondo con presupuesto y fecha.
            </p>
            <ul className="space-y-3 mb-9">
              {['Presupuesto antes de empezar', 'Agendamiento por WhatsApp', 'Emergencias dentro de Talca'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: '#FFFFFF' }}>
                  <Bolt className="w-4 h-4 shrink-0" color={C.yellow} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.yellow, color: '#15171C' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={WA_LINK_EMERGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Tengo una emergencia
              </a>
            </div>
          </Reveal>
          <div className="rounded-2xl overflow-hidden rotate-[1.2deg]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
            <img
              src={`${IMG}/furgon.webp`}
              alt="Furgón de trabajo de Eléctrico Domiciliario Sigel frente a una casa"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ── Zonas de atención ── */}
      <section id="zonas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Zonas de atención</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.grafito }}>
              Talca
              <br />
              <span style={{ color: C.blue }}>y alrededores</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Lista de muestra: al publicar van las comunas y sectores
              reales que se cubren.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="flex flex-wrap gap-3">
            {ZONAS.map((z) => (
              <li
                key={z}
                className="flex items-center gap-2.5 text-sm md:text-base font-semibold px-5 py-3 rounded-full border"
                style={{ borderColor: C.line, backgroundColor: C.card, color: C.grafito }}
              >
                <Bolt className="w-3.5 h-3.5 shrink-0" color={C.blue} />
                {z}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── Opiniones ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.grafito }}>
                Lo que dicen los clientes
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                {BIZ.name} acumula {BIZ.reviews} reseñas en su ficha
                de Google. Estos textos son de muestra: al publicar van
                las reseñas reales.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2"
                style={{ color: C.blue, textDecorationColor: 'rgba(27,77,255,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="rounded-2xl p-6 md:p-7 border"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.blue }}>
                        {t.author} · Reseña de ejemplo
                      </span>
                      <Bolt className="w-4 h-4 shrink-0" color={C.yellow} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y horarios ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Ubicación y horarios</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.grafito }}>
              Av. Piduco Sur,
              <br />
              <span style={{ color: C.blue }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2" style={{ color: C.grafito, textDecorationColor: 'rgba(21,23,28,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horarios referenciales: al publicar van los horarios
              reales de atención.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(21,23,28,0.35)', color: C.grafito }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.grafitoDeep }}>
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
            <h2 className={`${display.className} font-black text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#F5F6F9' }}>
              Que la próxima vez
              <br />
              <span style={{ color: C.yellow }}>no se te vaya la luz</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,246,249,0.9)' }}>
              Escríbeme por WhatsApp con tu consulta o emergencia.
              Presupuesto claro antes de partir.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.yellow, color: '#15171C' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.grafitoDeep, color: '#F5F6F9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-2 flex items-center gap-3`}>
              <Bolt className="w-5 h-5" color={C.yellow} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,246,249,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,246,249,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,246,249,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(245,246,249,0.75)' }}>
            Servicios, pasos, zonas, horarios y reseñas son de muestra.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
