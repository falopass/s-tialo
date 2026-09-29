import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  waServicio,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  RESENAS,
} from './content'
import LazyMap from '../lazy-map'

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
  paper: '#F7F9F9',
  petrol: '#0E4C5C',
  deep: '#093540',
  mint: '#9FD8CB',
  mintSoft: '#E4F2EE',
  bamboo: '#5E9242',
  bambooDeep: '#3E6B26',
  ink: '#122E33',
  gris: '#5A6F73',
  line: 'rgba(14,76,92,0.16)',
  white: '#FFFFFF',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-t-renova-spa',
  title: 'Clínica T-Renova SPA · Masajes y estética en Linares',
  description:
    'Clínica integral en Kurt Moller 23, Linares. Masajes, limpieza facial, pestañas, uñas y podología clínica. 4,7 estrellas en Google. Agenda por WhatsApp.',
  image: '/demos/clinica-t-renova-spa/hero.webp',
})

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'El espacio', href: '#espacio' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Contacto', href: '#contacto' },
]

const GRUPOS = [
  {
    src: `${IMG}/masaje.webp`,
    alt: 'Masaje relajante aplicado sobre los pies en camilla de Clínica T-Renova',
    titulo: 'Masajes y terapias',
    bajada: 'Masoterapia y terapias manuales con hora agendada.',
    items: ['Pack Masaje Renova Tsinia', 'Pack Masaje Relajación', 'Sakura Zen SPA Japonés', 'Sport Recovery', 'Masoterapia y terapias manuales', 'Podología clínica'],
  },
  {
    src: `${IMG}/interior.webp`,
    alt: 'Sala de atención de Clínica T-Renova con camilla y mobiliario de madera',
    titulo: 'Rostro y limpieza facial',
    bajada: 'Cuidado facial con productos y técnica profesional.',
    items: ['Limpieza Facial Elite', 'Hollywood V-Peel', 'Programas de bienestar'],
  },
  {
    src: `${IMG}/unas.webp`,
    alt: 'Uñas con esmaltado turquesa sosteniendo una tarjeta de T-Renova SPA',
    titulo: 'Pestañas y uñas',
    bajada: 'Detalle final para salir renovada.',
    items: ['Lifting de pestañas técnica coreana', 'Extensión de pestañas', 'Extensión de uñas soft gel'],
  },
]

const PASOS = [
  { t: 'Escríbenos por WhatsApp', d: 'Cuéntanos qué buscas y te respondemos el mismo día.' },
  { t: 'Agenda tu hora', d: 'Te confirmamos día y hora; también atendemos con agenda online.' },
  { t: 'Llega a Kurt Moller 23', d: 'Frente a Kovacs, a pasos del Espacio Urbano en Linares.' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em]"
      style={{ color: light ? C.mint : C.bambooDeep }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12 21c-4.5-2.6-7-6-7-9.5C5 7 8 4 12 4s7 3 7 7.5c0 3.5-2.5 6.9-7 9.5z" opacity="0.35" />
        <circle cx="12" cy="15.5" r="2.6" />
        <circle cx="12" cy="10.5" r="2" />
        <circle cx="12" cy="6.5" r="1.4" />
      </svg>
      {children}
    </p>
  )
}

function WaButton({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${FOCUS} inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full font-bold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44`}
      style={
        dark
          ? { backgroundColor: C.mint, color: C.deep, outlineColor: C.mint }
          : { backgroundColor: C.petrol, color: C.white, outlineColor: C.petrol }
      }
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

export default function ClinicaTRenovaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,249,249,0.96)',
          ink: C.petrol,
          line: C.line,
          btnBg: C.petrol,
          btnInk: C.white,
        }}
      />

      {/* ── Hero editorial: identidad + collage de fotos reales ── */}
      <header
        id="inicio"
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${C.mintSoft} 0%, ${C.paper} 55%, ${C.paper} 100%)` }}
      >
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-40"
          style={{ background: `radial-gradient(circle, ${C.mint} 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 lg:gap-14 items-center">
          <Reveal>
            <Eyebrow>Clínica integral en {BIZ.city} · {BIZ.tagline}</Eyebrow>
            <h1
              className={`${display.className} mt-4 text-[38px] leading-[1.06] md:text-[62px] font-extrabold`}
              style={{ color: C.petrol }}
            >
              Tu pausa de calma en{' '}
              <span className="italic pb-1 inline-block leading-[1.1]" style={{ color: C.bambooDeep }}>
                pleno Linares
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[16px] md:text-[18px] leading-relaxed" style={{ color: C.gris }}>
              Masajes, limpieza facial, pestañas, uñas y podología clínica en {BIZ.address},{' '}
              {BIZ.addressRef}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaButton href={WA_LINK}>Agendar una hora</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-[14px] font-bold tap-44`}
                style={{ backgroundColor: C.white, color: C.petrol, border: `1px solid ${C.line}`, outlineColor: C.petrol }}
              >
                <Stars value={4.7} color={C.bambooDeep} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </a>
            </div>
          </Reveal>

          {/* Collage: head spa + recepción + placa logo */}
          <Reveal delay={140} className="relative">
            <div className="relative mx-auto max-w-[420px]">
              <div
                className="relative aspect-[3/4] rounded-[28px] overflow-hidden"
                style={{ boxShadow: '0 30px 60px -30px rgba(9,53,64,0.5)' }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Sesión de head spa en Clínica T-Renova con el letrero de la clínica al fondo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-8 -left-4 md:-left-10 w-[46%] aspect-square rounded-[22px] overflow-hidden"
                style={{ boxShadow: '0 20px 40px -20px rgba(9,53,64,0.45)', border: `5px solid ${C.paper}` }}
              >
                <Image
                  src={`${IMG}/unas.webp`}
                  alt="Uñas con esmaltado turquesa sosteniendo una tarjeta de T-Renova SPA"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -top-5 -right-3 md:-right-7 w-[88px] h-[88px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: C.white, boxShadow: '0 14px 30px -14px rgba(9,53,64,0.5)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} className="w-[72px] h-[72px] object-contain" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Cinta de especialidades */}
        <div style={{ backgroundColor: C.deep }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1.5 text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-bold" style={{ color: C.mint }}>
            <span>Masoterapia</span>
            <span>Limpieza facial</span>
            <span>Pestañas</span>
            <span>Uñas soft gel</span>
            <span>Podología clínica</span>
            <span className="hidden sm:inline">Sport recovery</span>
          </div>
        </div>
      </header>

      {/* ── Tratamientos reales publicados por la clínica ── */}
      <section id="tratamientos" className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Tratamientos</Eyebrow>
          <h2 className={`${display.className} mt-3 max-w-2xl text-[30px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.petrol }}>
            Lo que la clínica ofrece cada semana
          </h2>
          <p className="mt-4 max-w-xl text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.gris }}>
            Servicios publicados por {BIZ.short} en sus redes. Valores y packs
            vigentes se confirman al agendar por WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-6 md:grid-cols-3">
          {GRUPOS.map((g, i) => (
            <Reveal key={g.titulo} delay={i * 90}>
              <article
                className="h-full rounded-[22px] overflow-hidden flex flex-col"
                style={{ backgroundColor: C.white, border: `1px solid ${C.line}`, boxShadow: '0 18px 40px -28px rgba(9,53,64,0.35)' }}
              >
                <div className="relative aspect-[16/10]">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`${display.className} text-[21px] font-bold`} style={{ color: C.petrol }}>{g.titulo}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: C.gris }}>{g.bajada}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[14px] leading-snug" style={{ color: C.ink }}>
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.bamboo }} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waServicio(g.titulo.toLowerCase())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${FOCUS} mt-5 self-start inline-flex min-h-[44px] items-center text-[14px] font-bold underline underline-offset-4 tap-44`}
                    style={{ color: C.petrol, outlineColor: C.petrol }}
                  >
                    Consultar valores →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El espacio + el equipo: banda oscura con fotos ── */}
      <section id="espacio" className="scroll-mt-24" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>El espacio y el equipo</Eyebrow>
            <h2 className={`${display.className} mt-3 max-w-2xl text-[30px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.white }}>
              Un oasis a pasos del{' '}
              <span className="italic pb-1 inline-block leading-[1.1]" style={{ color: C.mint }}>Espacio Urbano</span>
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-[minmax(0,1fr)_minmax(0,340px)] gap-6 md:gap-8 items-stretch">
            <Reveal className="min-w-0">
              <div className="relative h-full min-h-[320px] md:min-h-[460px] rounded-[24px] overflow-hidden">
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior de la sala de atención de Clínica T-Renova en Kurt Moller 23"
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
                <p
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-[13px] font-bold"
                  style={{ backgroundColor: 'rgba(9,53,64,0.88)', color: C.white }}
                >
                  {BIZ.address}, {BIZ.addressRef}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <div className="h-full flex flex-col gap-6">
                <div className="relative flex-1 min-h-[220px] rounded-[24px] overflow-hidden">
                  <Image
                    src={`${IMG}/equipo.webp`}
                    alt="Profesional de Clínica T-Renova con uniforme azul frente al letrero de la clínica"
                    fill
                    sizes="(min-width: 768px) 340px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[24px] p-6" style={{ backgroundColor: C.petrol }}>
                  <p className={`${display.className} text-[20px] font-bold`} style={{ color: C.white }}>
                    Atención directa con el equipo
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
                    Quien te recibe es quien realiza el tratamiento. La clínica
                    atiende con hora agendada para cuidar cada sesión.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: C.mint }}>
                    <span>{BIZ.fbFollowers} en Facebook</span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${FOCUS} underline underline-offset-4 tap-44`}
                      style={{ color: C.mint, outlineColor: C.mint }}
                    >
                      @{BIZ.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones reales de la ficha de Google ── */}
      <section id="opiniones" className="scroll-mt-24" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones de sus clientes</Eyebrow>
            <h2 className={`${display.className} mt-3 text-[30px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.petrol }}>
              {BIZ.rating} de 5 en Google: Linares{' '}
              <span className="italic pb-1 inline-block leading-[1.1]" style={{ color: C.bambooDeep }}>ya la probó</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.gris }}>
              Son {BIZ.reviews} reseñas en su ficha de Google, y en Facebook el
              92% de quienes opinan la recomienda. Estas son algunas, tal como
              las escribieron.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              <div className="border-l-[3px] pl-4" style={{ borderColor: C.bamboo }}>
                <p className={`${display.className} text-[30px] font-extrabold leading-none`} style={{ color: C.petrol }}>
                  {BIZ.rating} ★
                </p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: C.gris }}>
                  {BIZ.reviews} reseñas en Google
                </p>
              </div>
              <div className="border-l-[3px] pl-4" style={{ borderColor: C.mint }}>
                <p className={`${display.className} text-[30px] font-extrabold leading-none`} style={{ color: C.petrol }}>
                  92%
                </p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: C.gris }}>
                  la recomienda en Facebook
                </p>
              </div>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} mt-7 inline-flex min-h-[44px] items-center text-[14px] font-bold underline underline-offset-4 tap-44`}
              style={{ color: C.petrol, outlineColor: C.petrol }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure
                  className="rounded-[22px] p-6 md:p-7"
                  style={{ backgroundColor: C.white, border: `1px solid ${C.line}`, boxShadow: '0 18px 40px -30px rgba(9,53,64,0.4)' }}
                >
                  <Stars value={5} color={C.bambooDeep} className="w-[15px] h-[15px]" />
                  <blockquote className="mt-3.5 text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: C.gris }}>
                    {r.nombre} · {r.fecha} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda: 3 pasos + tarjeta de contacto ── */}
      <section id="agenda" className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Cómo agendar</Eyebrow>
          <h2 className={`${display.className} mt-3 max-w-2xl text-[30px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.petrol }}>
            Tu hora en tres pasos
          </h2>
        </Reveal>
        <ol className="mt-10 grid sm:grid-cols-3 gap-5">
          {PASOS.map((p, i) => (
            <Reveal key={p.t} delay={i * 90}>
              <li className="h-full rounded-[22px] p-6" style={{ backgroundColor: C.mintSoft, border: `1px solid ${C.line}` }}>
                <span className={`${display.className} text-[34px] font-extrabold leading-none`} style={{ color: C.bambooDeep }}>
                  {i + 1}
                </span>
                <p className="mt-3 font-bold text-[16px]" style={{ color: C.petrol }}>{p.t}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: C.gris }}>{p.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={180}>
          <div
            className="mt-8 rounded-[24px] p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ backgroundColor: C.petrol }}
          >
            <div>
              <p className={`${display.className} text-[24px] md:text-[30px] font-bold`} style={{ color: C.white }}>
                {BIZ.rating} estrellas en Google, {BIZ.reviews} reseñas
              </p>
              <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Los vecinos de Linares ya la conocen. Reserva tu hora y comprueba
                por qué la recomiendan.
              </p>
            </div>
            <div className="shrink-0">
              <WaButton href={WA_LINK} dark>
                WhatsApp {BIZ.phoneDisplay}
              </WaButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Contacto: mapa + datos ── */}
      <section id="contacto" className="scroll-mt-24" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 md:gap-12 items-start">
          <Reveal>
            <Eyebrow>Dónde encontrarnos</Eyebrow>
            <h2 className={`${display.className} mt-3 text-[30px] md:text-[42px] leading-[1.1] font-bold`} style={{ color: C.petrol }}>
              Kurt Moller 23, {BIZ.city}
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.gris }}>
              {BIZ.addressRef}. Atendemos con hora agendada por WhatsApp y por
              la agenda online de la clínica.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WaButton href={WA_LINK}>Agendar por WhatsApp</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex min-h-[48px] items-center px-6 py-3 rounded-full font-bold text-[15px] tap-44`}
                style={{ border: `1.5px solid ${C.petrol}`, color: C.petrol, outlineColor: C.petrol }}
              >
                Cómo llegar
              </a>
            </div>
            <p className="mt-6 text-[14px] leading-relaxed" style={{ color: C.gris }}>
              También en{' '}
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} font-bold underline underline-offset-4 tap-44`}
                style={{ color: C.petrol, outlineColor: C.petrol }}
              >
                Facebook
              </a>
              {' · '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} font-bold underline underline-offset-4 tap-44`}
                style={{ color: C.petrol, outlineColor: C.petrol }}
              >
                Instagram
              </a>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-[24px] overflow-hidden aspect-[16/11]"
              style={{ border: `1px solid ${C.line}`, backgroundColor: C.white }}
            >
              <LazyMap
                title={`Mapa de ${BIZ.name}`}
                src={MAPS_EMBED}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: 'rgba(255,255,255,0.75)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px]">
          <p className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 object-contain" aria-hidden="true" />
            <span>
              <span className={`${display.className} font-bold text-[15px]`} style={{ color: C.white }}>{BIZ.name}</span>
              <br />
              {BIZ.address}, {BIZ.city} · {BIZ.tagline}
            </span>
          </p>
          <p className="max-w-md leading-relaxed">
            <span className="font-bold" style={{ color: C.mint }}>Sitio de ejemplo de Sitiazo.</span>{' '}
            Datos, fotos, servicios y reseñas reales del negocio; textos descriptivos de muestra.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-24 [&>div]:static [&>div]:max-w-full [&>div]:w-fit">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Agendar una hora en ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
