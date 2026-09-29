import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_DOMICILIO, MAPS_URL, MAPS_EMBED, IMG, CARNET, TESTIMONIALS, FOTOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

// Identidad desde sus activos reales: el gato magenta del logo, la pared
// amarilla de la consulta y el teal de su identidad — un "carnet de salud"
// de papel crema con huellas y sellos.
const C = {
  paper: '#FBF3E4',
  card: '#FFFDF7',
  ink: '#402236',
  magenta: '#C2185B',
  teal: '#20796F',
  yellow: '#F2C230',
  muted: '#75536A',
  line: 'rgba(64,34,54,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'veterinaria-lavaudog',
  title: 'Veterinaria Lavaudog — Consulta, odontología y peluquería canina en Talca',
  description:
    'Veterinaria y peluquería canina en 5 Norte 3467, Talca. Consulta, odontología veterinaria, spa canino y atención a domicilio. Agenda por WhatsApp.',
  image: `${IMG}/interior.webp`,
})

const NAV_LINKS = [
  { label: 'El carnet', href: '#carnet' },
  { label: 'La doctora', href: '#doctora' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde', href: '#donde' },
]

const NAV_THEME = {
  over: 'light' as const,
  bar: 'rgba(251,243,228,0.94)',
  ink: C.ink,
  line: C.line,
  btnBg: C.magenta,
  btnInk: '#fff',
}

// Huella para el patrón del fondo y los sellos del carnet.
function Paw({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="6.6" cy="9" rx="2.1" ry="2.7" />
      <ellipse cx="17.4" cy="9" rx="2.1" ry="2.7" />
      <ellipse cx="9.9" cy="5.4" rx="2" ry="2.6" />
      <ellipse cx="14.1" cy="5.4" rx="2" ry="2.6" />
      <path d="M12 11.2c-3.2 0-6.4 2.7-6.4 5.6 0 1.7 1.2 2.9 3 2.9 1.2 0 2.2-.6 3.4-.6s2.2.6 3.4.6c1.8 0 3-1.2 3-2.9 0-2.9-3.2-5.6-6.4-5.6Z" />
    </svg>
  )
}

const PATRON_HUELLAS = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Cg fill='%23C2185B' fill-opacity='0.07'%3E%3Cellipse cx='20' cy='30' rx='3' ry='3.8'/%3E%3Cellipse cx='32' cy='30' rx='3' ry='3.8'/%3E%3Cellipse cx='26' cy='22' rx='3' ry='3.8'/%3E%3Cpath d='M26 34c-5 0-9.6 4-9.6 8.2 0 2.6 1.8 4.4 4.6 4.4 1.9 0 3.3-1 5-1s3.1 1 5 1c2.8 0 4.6-1.8 4.6-4.4 0-4.2-4.6-8.2-9.6-8.2Z'/%3E%3C/g%3E%3Cg fill='%2320796F' fill-opacity='0.06' transform='translate(48 48) rotate(24 12 12)'%3E%3Cellipse cx='20' cy='30' rx='3' ry='3.8'/%3E%3Cellipse cx='32' cy='30' rx='3' ry='3.8'/%3E%3Cellipse cx='26' cy='22' rx='3' ry='3.8'/%3E%3Cpath d='M26 34c-5 0-9.6 4-9.6 8.2 0 2.6 1.8 4.4 4.6 4.4 1.9 0 3.3-1 5-1s3.1 1 5 1c2.8 0 4.6-1.8 4.6-4.4 0-4.2-4.6-8.2-9.6-8.2Z'/%3E%3C/g%3E%3C/svg%3E")`

function Sello({ children }: { children: string }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] uppercase tracking-wider`}
      style={{ borderColor: `${C.teal}66`, color: C.teal }}
    >
      <Paw className="w-3 h-3" color={C.teal} />
      {children}
    </span>
  )
}

function MarcaBosquejo() {
  return (
    <span
      className={`${mono.className} absolute top-2 left-2 z-10 rounded-md border border-dashed px-2 py-0.5 text-[10px] uppercase tracking-widest`}
      style={{ borderColor: C.magenta, color: C.magenta, backgroundColor: 'rgba(255,253,247,0.92)' }}
    >
      bosquejo
    </span>
  )
}

export default function VeterinariaLavaudog() {
  return (
    <main
      className={body.className}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink, backgroundImage: PATRON_HUELLAS }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={NAV_THEME}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Agendar"
      />

      {/* ── Portada del carnet ─────────────────────────────── */}
      <section id="inicio" className="pt-[104px] md:pt-[128px] pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <Sello>ficha n° 001 — talca</Sello>
              <h1
                className={`${display.className} mt-4 text-[42px] leading-[1.02] md:text-[68px]`}
              >
                Veterinaria
                <br />
                <span style={{ color: C.magenta }}>Lavaudog</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-[46ch]" style={{ color: C.muted }}>
                Consulta, odontología veterinaria y peluquería canina en {BIZ.address}, {BIZ.city} —
                y si tu mascota no puede venir, la doctora va a tu casa.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: C.ink }}>
                <Stars value={BIZ.rating} color={C.magenta} />
                <span className="font-semibold">{BIZ.rating}</span>
                <span style={{ color: C.muted }}>· {BIZ.reviews} reseñas en Google</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 flex-1 text-center text-base font-bold py-3 rounded-full text-white transition-transform active:scale-95"
                  style={{ backgroundColor: C.magenta }}
                >
                  Agendar consulta
                </a>
                <a
                  href={WA_LINK_DOMICILIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 flex-1 text-center text-base font-bold py-3 rounded-full transition-transform active:scale-95"
                  style={{ backgroundColor: C.teal, color: '#fff' }}
                >
                  Atención a domicilio
                </a>
              </div>
              <p className={`${mono.className} mt-3 text-xs`} style={{ color: C.muted }}>
                whatsapp {BIZ.phoneDisplay}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={160}>
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOTOS.interior.src}
                  alt={FOTOS.interior.alt}
                  className="w-full aspect-[4/3] object-cover rounded-3xl border-4"
                  style={{ borderColor: C.card, boxShadow: `0 16px 40px -18px ${C.ink}66` }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt={`Logo de ${BIZ.name}`}
                  className="absolute -bottom-7 left-5 w-24 h-24 rounded-full object-cover border-4 bg-white"
                  style={{ borderColor: C.card, boxShadow: `0 10px 24px -12px ${C.ink}88` }}
                />
                <div
                  className="absolute -top-4 -right-3 rounded-2xl px-4 py-2 text-center rotate-3"
                  style={{ backgroundColor: C.yellow, boxShadow: `0 10px 22px -12px ${C.ink}77` }}
                >
                  <div className={`${mono.className} text-[10px] uppercase tracking-widest`} style={{ color: C.ink }}>
                    también
                  </div>
                  <div className={`${display.className} text-lg leading-none`} style={{ color: C.ink }}>
                    a domicilio
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El carnet de servicios ─────────────────────────── */}
      <section id="carnet" className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Sello>carnet de salud</Sello>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`}>
              Todo lo que tu perro —y tu gato— puede necesitar
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="mt-8 rounded-3xl border-2 p-5 md:p-8"
              style={{ borderColor: `${C.magenta}55`, backgroundColor: C.card, boxShadow: `0 14px 36px -20px ${C.ink}55` }}
            >
              <div className="grid sm:grid-cols-2 gap-x-8">
                {CARNET.map((s, i) => (
                  <div
                    key={s.sello}
                    className="flex items-start gap-3 py-4"
                    style={{ borderTop: i > 1 ? `1px dashed ${C.line}` : undefined }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${C.magenta}14` }}
                    >
                      <Paw className="w-5 h-5" color={C.magenta} />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`${display.className} text-xl leading-tight`}>{s.nombre}</h3>
                      <p className="text-sm mt-1" style={{ color: C.muted }}>{s.detalle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                style={{ backgroundColor: `${C.yellow}55` }}
              >
                <p className="text-sm md:text-base font-semibold">
                  ¿Primera vez? Escríbeles y te cuentan qué necesita tu mascota.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 shrink-0 text-sm font-bold px-4 py-2.5 rounded-full text-white"
                  style={{ backgroundColor: C.magenta }}
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La consulta en fotos ───────────────────────────── */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FOTOS.fachada.src}
                alt={FOTOS.fachada.alt}
                className="col-span-2 w-full aspect-[16/9] object-cover rounded-2xl"
              />
              <div className="relative">
                <MarcaBosquejo />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOTOS.peluqueria.src}
                  alt={FOTOS.peluqueria.alt}
                  className="w-full h-full aspect-square object-cover rounded-2xl"
                />
              </div>
              <div className="relative">
                <MarcaBosquejo />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOTOS.consulta.src}
                  alt={FOTOS.consulta.alt}
                  className="w-full h-full aspect-square object-cover rounded-2xl"
                />
              </div>
            </div>
            <p className={`${mono.className} mt-3 text-[11px]`} style={{ color: C.muted }}>
              fotos reales de su local · las escenas marcadas como bosquejo son ilustrativas
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La doctora ─────────────────────────────────────── */}
      <section id="doctora" className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <Reveal>
              <Sello>quien atiende</Sello>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`}>
                La Dra. Lavaud y su manera de atender
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                En las reseñas se repite lo mismo: una atención amorosa, detallada y con
                seguimiento. Después de la consulta, la doctora responde por WhatsApp cómo
                sigue cada paciente — no quedas solo después de salir del local.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Consulta y control para perros y gatos',
                  'Odontología veterinaria, su especialidad',
                  'Seguimiento por WhatsApp después de cada atención',
                  'Atención a domicilio dentro de Talca',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <Paw className="w-4 h-4 mt-1 shrink-0" color={C.teal} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <Reveal delay={140}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FOTOS.interior.src}
                alt={FOTOS.interior.alt}
                className="w-full aspect-square object-cover rounded-3xl rotate-1"
                style={{ boxShadow: `0 16px 40px -18px ${C.ink}66` }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ────────────────────────────────────────── */}
      <section id="resenas" className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Sello>libro de visitas</Sello>
                <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`}>
                  Lo que dicen los tutores
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: C.ink }}>
                <Stars value={BIZ.rating} color={C.magenta} />
                <span className="font-bold">{BIZ.rating}</span>
                <span style={{ color: C.muted }}>· {BIZ.reviews} reseñas</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.nombre} delay={i * 70}>
                <figure
                  className="h-full rounded-2xl border p-5"
                  style={{ borderColor: C.line, backgroundColor: C.card }}
                >
                  <div className="flex items-center justify-between">
                    <Stars value={5} color={C.yellow} />
                    <Paw className="w-4 h-4" color={`${C.magenta}66`} />
                  </div>
                  <blockquote className="mt-3 text-[15px] leading-relaxed">{t.texto}</blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs`} style={{ color: C.muted }}>
                    {t.nombre} · tutor(a) de {t.mascota}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde ──────────────────────────────────────────── */}
      <section id="donde" className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Sello>consulta en 5 norte</Sello>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`}>
              En {BIZ.address}, {BIZ.city}
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-12 gap-6">
            <Reveal className="md:col-span-5">
              <div className="rounded-3xl border p-6 h-full" style={{ borderColor: C.line, backgroundColor: C.card }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOTOS.calle.src}
                  alt={FOTOS.calle.alt}
                  className="w-full aspect-[16/10] object-cover rounded-2xl"
                />
                <dl className="mt-5 space-y-3 text-[15px]">
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.muted }}>dirección</dt>
                    <dd className="font-semibold">{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.muted }}>whatsapp</dt>
                    <dd>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: C.magenta }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5`} style={{ color: C.muted }}>mapa</dt>
                    <dd>
                      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: C.teal }}>
                        Abrir en Google Maps
                      </a>
                    </dd>
                  </div>
                </dl>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-6 block text-center text-base font-bold py-3 rounded-full text-white"
                  style={{ backgroundColor: C.magenta }}
                >
                  Agendar por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full min-h-[320px] rounded-3xl border"
                style={{ borderColor: C.line }}
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/marca.webp`} alt={`${BIZ.name} logo`} className="h-10 rounded-lg" />
              <div>
                <div className={`${display.className} text-lg leading-none`}>{BIZ.short}</div>
                <div className={`${mono.className} text-[11px] mt-1 opacity-70`}>
                  {BIZ.rubro} · {BIZ.city}
                </div>
              </div>
            </div>
            <div className={`${mono.className} text-[11px] opacity-70 text-right leading-relaxed`}>
              {BIZ.address}, {BIZ.city} — {BIZ.region}
              <br />
              {BIZ.phoneDisplay}
            </div>
          </div>
          <p className={`${mono.className} mt-6 pt-4 text-[11px] opacity-50 border-t`} style={{ borderColor: 'rgba(251,243,228,0.2)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />
    </main>
  )
}
