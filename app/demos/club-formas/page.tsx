import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  carbon: '#141618',
  panel: '#1D2124',
  teal: '#2FA8A4',
  tealSoft: '#7FDCD8',
  chalk: '#F0F2F0',
  muted: '#9AA4A2',
  mutedDark: '#55605E',
  line: 'rgba(240,242,240,0.14)',
  lineSoft: 'rgba(240,242,240,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'club-formas',
  title: 'Club Formas — El gimnasio de Molina',
  description:
    'Gimnasio en Yerbas Buenas 1574, Molina. Abierto de lunes a viernes hasta las 23:00. Consulta la membresía por WhatsApp.',
  image: '/demos/club-formas/sala.webp',
})

const NAV_LINKS = [
  { label: 'El fierro', href: '#fierro' },
  { label: 'El profe', href: '#profe' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horarios', href: '#contacto' },
]

const RESENAS = [
  {
    name: 'Fernando Carrasco',
    stars: 5,
    meta: 'Guía local',
    text: 'Excelente gimnasio en Molina. Variedad de máquinas tanto para cardio como para entrenamiento de pesas. Juan brinda un excelente servicio: te sientes como en casa.',
  },
  {
    name: 'Joel Venegas Bravo',
    stars: 5,
    meta: 'Socio',
    text: 'Buena ubicación y precio.',
  },
  {
    name: 'Legacy Y',
    stars: 4,
    meta: 'Socio',
    text: 'Gran experiencia. Llevo poco tiempo yendo… lo recomiendo si es tu primera vez.',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00 a 23:00' },
  { days: 'Sábado', time: '10:00 a 14:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function PlateIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3 v2.5 M12 18.5 V21 M3 12 h2.5 M18.5 12 H21 M5.9 5.9 l1.8 1.8 M16.3 16.3 l1.8 1.8 M18.1 5.9 l-1.8 1.8 M7.7 16.3 l-1.8 1.8" />
    </svg>
  )
}

function SerieTag({ num, name }: { num: string; name: string }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-medium`} style={{ color: C.teal }}>
      <span className={`${display.className} text-2xl font-extrabold leading-none tracking-tight`} style={{ color: C.teal }}>
        {num}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: 'rgba(47,168,164,0.4)' }} aria-hidden="true" />
      <span style={{ color: C.muted }}>{name}</span>
    </p>
  )
}

export default function ClubFormasPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.carbon, color: C.chalk }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Membresía"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(20,22,24,0.94)',
          ink: C.chalk,
          line: C.line,
          btnBg: C.teal,
          btnInk: '#0B1F1E',
        }}
      />

      {/* ── Hero: la sala entera a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/sala.webp`}
          alt="Sala de máquinas de Club Formas en Molina: bicicletas, racks y zona de peso libre con socios entrenando"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,22,24,0.72) 0%, rgba(20,22,24,0.5) 40%, rgba(20,22,24,0.95) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 tap-44"
              style={{ backgroundColor: 'rgba(240,242,240,0.96)', color: C.carbon }}
            >
              <Stars value={BIZ.rating} color="#D89B1C" className="w-[14px] h-[14px]" />
              {BIZ.ratingLabel} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-40">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3`} style={{ color: C.tealSoft }}>
              <PlateIcon className="w-5 h-5" color={C.tealSoft} />
              Gimnasio · Yerbas Buenas 1574 · Molina
            </p>
            <h1 className={`${display.className} uppercase font-extrabold leading-[0.95] text-[clamp(3rem,11vw,7rem)] mb-5`} style={{ color: C.chalk }}>
              El gym
              <br />
              de <span style={{ color: C.teal }}>Molina</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(240,242,240,0.85)' }}>
              Sala completa de máquinas, cardio y peso libre en pleno
              centro de Molina. Juan te recibe en persona — pregunta la
              membresía por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-wide font-bold text-sm md:text-base px-7 py-3 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.teal, color: '#0B1F1E' }}
              >
                Preguntar membresía
              </a>
              <a
                href="#fierro"
                className={`${display.className} uppercase tracking-wide font-bold text-sm md:text-base px-7 py-3 rounded-md border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(240,242,240,0.55)', color: C.chalk }}
              >
                Ver la sala
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: C.line, backgroundColor: 'rgba(20,22,24,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(240,242,240,0.85)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.teal }} aria-hidden="true" />
              Lun a vie hasta las 23:00
            </span>
            <span className="hidden sm:inline">{BIZ.reviews} opiniones en Google</span>
            <span className="hidden md:inline" style={{ color: C.tealSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Serie 01: el fierro ── */}
      <section id="fierro" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SerieTag num="S.01" name="El fierro" />
            <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`} style={{ color: C.chalk }}>
              Máquinas para<br /><span style={{ color: C.teal }}>entrenar en serio</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-4 md:gap-5">
            <Reveal>
              <div className="relative rounded-lg overflow-hidden border aspect-[4/5] md:aspect-[4/4.2]" style={{ borderColor: C.lineSoft }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Multipower y rack de Club Formas sobre el pasto sintético verde de la zona de peso"
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
                <span className={`${mono.className} absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded`} style={{ backgroundColor: 'rgba(20,22,24,0.85)', color: C.tealSoft }}>
                  Zona de fuerza
                </span>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
              <Reveal delay={90}>
                <div className="relative rounded-lg overflow-hidden border aspect-square md:aspect-auto md:h-1/2" style={{ borderColor: C.lineSoft }}>
                  <Image
                    src={`${IMG}/fierro1.webp`}
                    alt="Socio de Club Formas preparándose para entrenar junto a las máquinas"
                    fill
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="rounded-lg border p-5 md:p-6 h-full flex flex-col justify-center" style={{ borderColor: C.lineSoft, backgroundColor: C.panel }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.teal }}>
                    La zona, según sus socios
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(240,242,240,0.85)' }}>
                    “Variedad de máquinas tanto para cardio como para
                    entrenamiento de pesas” — reseña real de un socio.
                    Sala amplia con cardio, máquinas guiadas y peso
                    libre.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Serie 02: la casa ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: '#0E1011' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <SerieTag num="S.02" name="La casa" />
            <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.95] mb-6`} style={{ color: C.chalk }}>
              En plena<br /><span style={{ color: C.teal }}>Yerbas Buenas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm mb-8" style={{ color: C.muted }}>
              El letrero CF está a la vista: entrada directa sobre la
              vereda de Yerbas Buenas 1574, a pasos del centro de
              Molina. Un gym de barrio donde te conocen por tu nombre.
            </p>
            <div className="relative rounded-lg overflow-hidden border aspect-[4/3]" style={{ borderColor: C.lineSoft }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Entrada de Club Formas en Yerbas Buenas, Molina, con su letrero y vitrina"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border aspect-square" style={{ borderColor: C.lineSoft }}>
                <Image
                  src={`${IMG}/comunidad.webp`}
                  alt="Socios de Club Formas posando juntos dentro del gimnasio"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span
                className={`${mono.className} absolute -bottom-3 right-4 text-[9px] md:text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full`}
                style={{ backgroundColor: C.teal, color: '#0B1F1E' }}
              >
                La comunidad, en su foto
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Serie 03: el profe ── */}
      <section id="profe" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="relative rounded-lg overflow-hidden border aspect-[3/4] col-span-2" style={{ borderColor: C.lineSoft }}>
                <Image
                  src={`${IMG}/entrenador.webp`}
                  alt="Juan, entrenador de Club Formas, guiando a una socia en una máquina del gimnasio"
                  fill
                  sizes="(min-width: 768px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden border aspect-square" style={{ borderColor: C.lineSoft }}>
                <Image
                  src={`${IMG}/retrato.webp`}
                  alt="Retrato de Juan, entrenador y fisicoculturista de Club Formas"
                  fill
                  sizes="(min-width: 768px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden border aspect-square" style={{ borderColor: C.lineSoft }}>
                <Image
                  src={`${IMG}/campeonato.webp`}
                  alt="Juan de Club Formas premiado en un campeonato de fisicoculturismo"
                  fill
                  sizes="(min-width: 768px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SerieTag num="S.03" name="El profe" />
            <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.95] mb-6`} style={{ color: C.chalk }}>
              Juan,<br /><span style={{ color: C.teal }}>en persona</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              Los socios lo nombran en las reseñas: Juan atiende el gym
              y corrige tu técnica mientras entrenas. Y compite — en su
              propio perfil aparece premiado en fisicoculturismo.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Atención directa del dueño, no de recepcionista',
                'Corrección de técnica mientras entrenas',
                'Gym pensado para primerizos y para veteranos',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(240,242,240,0.85)' }}>
                  <PlateIcon className="w-4 h-4 mt-0.5 shrink-0" color={C.teal} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase tracking-wide font-bold text-sm md:text-base px-7 py-3 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
              style={{ backgroundColor: C.teal, color: '#0B1F1E' }}
            >
              Hablar con Juan
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Serie 04: reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: '#0E1011' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SerieTag num="S.04" name="Lo que dicen" />
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.chalk }}>
                {BIZ.ratingLabel} en Google,
                <br />
                <span style={{ color: C.teal }}>{BIZ.reviews} opiniones</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Las palabras son de sus socios, publicadas en la ficha
                de Google Maps de Club Formas.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="rounded-lg border p-6 h-full flex flex-col" style={{ borderColor: C.lineSoft, backgroundColor: C.panel }}>
                  <div className="flex items-center justify-between mb-4">
                    <Stars value={r.stars} color="#D89B1C" className="w-4 h-4" />
                    <span className={`${mono.className} text-[9px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                      Reseña de Google
                    </span>
                  </div>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-5 flex-1" style={{ color: 'rgba(240,242,240,0.88)' }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption>
                    <p className={`${display.className} uppercase font-bold text-sm tracking-wide`} style={{ color: C.chalk }}>
                      {r.name}
                    </p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.teal }}>
                      {r.meta}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-7 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.teal, textDecorationColor: 'rgba(47,168,164,0.4)' }}
            >
              Leer todas las opiniones en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Serie 05: horario y llegada ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <SerieTag num="S.05" name="Horario y llegada" />
            <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-5xl leading-[0.95] mb-7`} style={{ color: C.chalk }}>
              Abierto hasta
              <br />
              <span style={{ color: C.teal }}>las 23:00</span>
            </h2>
            <ul className="space-y-0 mb-8 rounded-lg border overflow-hidden" style={{ borderColor: C.lineSoft }}>
              {HORAS.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between gap-4 px-5 py-4 border-b last:border-0"
                  style={{ borderColor: C.line, backgroundColor: 'rgba(29,33,36,0.7)' }}
                >
                  <span className="text-sm md:text-base font-semibold" style={{ color: C.chalk }}>
                    {h.days}
                  </span>
                  <span className={`${mono.className} text-xs md:text-sm`} style={{ color: h.time === 'Cerrado' ? C.muted : C.tealSoft }}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region}, Chile
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-wide font-bold text-sm md:text-base px-7 py-3 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.teal, color: '#0B1F1E' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase tracking-wide font-bold text-sm md:text-base px-7 py-3 rounded-md border-2 transition-colors hover:bg-white/5 tap-44`}
                style={{ borderColor: C.teal, color: C.teal }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-lg overflow-hidden border shadow-lg h-full min-h-[320px]" style={{ borderColor: C.lineSoft }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0A0B0C' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center gap-x-10 gap-y-5">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-white p-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real de su perfil */}
              <img src={`${IMG}/logo.webp`} alt="" className="w-full h-full object-contain" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className={`${display.className} uppercase font-extrabold text-xl leading-tight truncate`} style={{ color: C.chalk }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-xs" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-xs leading-relaxed" style={{ color: 'rgba(240,242,240,0.7)' }}>
            Descripciones de zonas de muestra; nombre, dirección,
            teléfono, horario, fotos y reseñas son públicos.
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
