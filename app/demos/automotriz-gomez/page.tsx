import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'
import {
  BIZ,
  HORARIO,
  IMG,
  MAPS_EMBED,
  MAPS_URL,
  RESENAS,
  SERVICIOS,
  WA_LINK,
  WA_LINK_PRESUPUESTO,
} from './content'

/**
 * app/demos/automotriz-gomez/page.tsx
 *
 * Taller de barrio con diagnóstico documentado. Identidad sacada del
 * logo real: carbón + rojo carrera + acero. El motivo que se repite es
 * la línea a cuadros (bandera de meta) y el semicírculo dentado del
 * logo. Archivo Black titula, Work Sans lee, IBM Plex Mono etiqueta.
 */

const display = localFont({
  src: [
    { path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' },
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
  carbon: '#141619',
  carbon2: '#1C1F24',
  paper: '#F4F1EA',
  card: '#FFFFFF',
  ink: '#1A1C1F',
  muted: '#5A5F66',
  line: 'rgba(26,28,31,0.14)',
  lineLight: 'rgba(255,255,255,0.14)',
  red: '#D9261D',
  redDeep: '#A31310',
  redHi: '#FF6B5B',
  redSoft: '#FBE9E6',
  steel: '#7B838C',
  gold: '#D8A24A',
} as const

export const metadata = demoMetadata({
  slug: 'automotriz-gomez',
  title: `${BIZ.name} — Taller mecánico en ${BIZ.city}`,
  description: `Diagnóstico con fotos y videos, presupuesto antes de avanzar y ${BIZ.reviews} reseñas que avalan el trabajo. ${BIZ.address}, ${BIZ.city}.`,
  image: `${IMG}/hero.webp`,
})

/* Bandera de meta: la línea a cuadros que recorre todo el sitio. */
function FinishLine({ flip = false, dark = true }: { flip?: boolean; dark?: boolean }) {
  const sq = dark ? '#FFFFFF' : C.ink
  const bg = dark ? C.carbon : '#FFFFFF'
  return (
    <div
      aria-hidden="true"
      className="h-[10px] w-full"
      style={{
        backgroundColor: bg,
        backgroundImage: `linear-gradient(45deg, ${sq} 25%, transparent 25%, transparent 75%, ${sq} 75%), linear-gradient(45deg, ${sq} 25%, transparent 25%, transparent 75%, ${sq} 75%)`,
        backgroundSize: '20px 10px',
        backgroundPosition: flip ? '0 0, 10px 5px' : '10px 0, 0 5px',
        opacity: dark ? 0.9 : 0.16,
      }}
    />
  )
}

function WrenchMark({ className = 'w-5 h-5', color = C.red }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function MonoTag({ children, color = C.redDeep, light = false }: { children: React.ReactNode; color?: string; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] font-semibold`}
      style={{ color: light ? 'rgba(255,255,255,0.75)' : color }}
    >
      {children}
    </p>
  )
}

export default function AutomotrizGomezPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name="Automotriz Gomez"
        links={[
          { label: 'Diagnóstico', href: '#diagnostico' },
          { label: 'Servicios', href: '#servicios' },
          { label: 'Clásicos', href: '#clasicos' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.carbon, ink: '#FFFFFF', line: C.lineLight, btnBg: C.redDeep, btnInk: '#FFFFFF' }}
      />

      {/* ── HERO ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <FinishLine />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-10 md:pb-16">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={`${IMG}/logo.webp`}
                    alt={`Logo de ${BIZ.name}`}
                    width={96}
                    height={54}
                    className="rounded-md ring-1 ring-white/15"
                    priority
                  />
                  <div>
                    <MonoTag light>Taller mecánico · {BIZ.city}</MonoTag>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.redHi }}>
                      Empresa de mujeres
                    </p>
                  </div>
                </div>
                <h1
                  className={`${display.className} text-[42px] leading-[0.98] md:text-[76px] text-white uppercase`}
                >
                  Tu auto,<br />
                  con <span style={{ color: C.red }}>pruebas</span><br />
                  en la mano
                </h1>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  En {BIZ.name} cada diagnóstico viene con fotos y videos del trabajo.
                  Ves lo que se hizo, apruebas antes de pagar y te vas sin dudas.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-semibold text-white transition-transform active:scale-95"
                    style={{ backgroundColor: C.red }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#fff" aria-hidden="true">
                      <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.77 9.77 0 0 1-4.98-1.37l-.36-.21-3.7.97.99-3.61-.24-.37a9.77 9.77 0 0 1-1.5-5.21c0-5.4 4.4-9.79 9.8-9.79a9.73 9.73 0 0 1 9.78 9.8c0 5.4-4.4 9.79-9.78 9.79zm8.32-18.11A11.7 11.7 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.88c0 2.1.55 4.14 1.6 5.95L.05 24l6.31-1.66a11.87 11.87 0 0 0 5.68 1.45h.01c6.54 0 11.87-5.34 11.87-11.88 0-3.18-1.24-6.16-3.48-8.4z" />
                    </svg>
                    Agendar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-base font-semibold text-white transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.35)' }}
                  >
                    Cómo llegar
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Stars value={BIZ.rating} color={C.gold} />
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {BIZ.rating} en Google · {BIZ.reviews} reseñas
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="relative">
              <div
                className="relative rounded-2xl overflow-hidden ring-1"
                style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.45)', borderColor: C.lineLight }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt={`Interior del taller ${BIZ.name} en Angol 636, Concepción`}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div
                  className="absolute bottom-3 left-3 rounded-full px-4 py-2 text-xs font-semibold text-white"
                  style={{ backgroundColor: 'rgba(20,22,25,0.82)' }}
                >
                  Angol 636, Concepción centro
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <FinishLine flip />
      </section>

      {/* ── DIAGNÓSTICO CON EVIDENCIA ── */}
      <section id="diagnostico" className="py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <MonoTag>Cómo trabajamos</MonoTag>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.02] mt-3 max-w-2xl`}>
              Nada se repara sin que tú lo veas primero
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                img: 'scanner.webp',
                n: '01',
                t: 'Revisión con escáner',
                d: 'Leemos las fallas del auto y revisamos a fondo. El diagnóstico sale de la máquina y de la experiencia, no de la intuición.',
              },
              {
                img: 'trabajo.webp',
                n: '02',
                t: 'Fotos y videos del trabajo',
                d: 'Te enviamos registro de lo que encontramos y de lo que se hizo. La transparencia no se promete: se muestra.',
              },
              {
                img: 'interior.webp',
                n: '03',
                t: 'Presupuesto antes de avanzar',
                d: 'Apruebas el presupuesto antes de que se toque una pieza. Sin sorpresas en la cuenta final.',
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <article
                  className="h-full rounded-2xl overflow-hidden"
                  style={{ backgroundColor: C.card, boxShadow: '0 12px 32px rgba(20,22,25,0.10)', border: `1px solid ${C.line}` }}
                >
                  <div className="relative">
                    <Image
                      src={`${IMG}/${s.img}`}
                      alt={s.t}
                      width={1200}
                      height={900}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <span
                      className={`${mono.className} absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white`}
                      style={{ backgroundColor: C.red }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`${display.className} text-lg md:text-xl uppercase`}>{s.t}</h3>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {s.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="relative overflow-hidden py-14 md:py-24" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <MonoTag light>Servicios</MonoTag>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.02] mt-3 text-white max-w-xl`}>
                  Todo lo que tu auto necesita, en un solo taller
                </h2>
              </div>
              <a
                href={WA_LINK_PRESUPUESTO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
                style={{ backgroundColor: C.red }}
              >
                Pedir diagnóstico →
              </a>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <article
                  className="h-full rounded-xl p-5 md:p-6"
                  style={{ backgroundColor: C.carbon2, border: `1px solid ${C.lineLight}` }}
                >
                  <WrenchMark className="w-6 h-6" color={C.red} />
                  <h3 className={`${display.className} mt-3 text-lg uppercase text-white`}>{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.66)' }}>
                    {s.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RINCÓN DE LOS CLÁSICOS ── */}
      <section id="clasicos" className="py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <Image
                src={`${IMG}/clasico.webp`}
                alt={`Auto clásico de la colección de ${BIZ.owner}`}
                width={1200}
                height={675}
                className="col-span-2 w-full rounded-2xl object-cover aspect-[16/9]"
                style={{ boxShadow: '0 16px 40px rgba(20,22,25,0.16)' }}
              />
              <Image
                src={`${IMG}/fachada.webp`}
                alt={`Fachada de ${BIZ.name}`}
                width={1200}
                height={554}
                className="w-full rounded-xl object-cover aspect-[16/10]"
              />
              <div
                className="rounded-xl p-4 flex flex-col justify-center"
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                <p className={`${display.className} text-3xl leading-none`}>{BIZ.rating}★</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider opacity-90">
                  promedio en Google
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <MonoTag>El detalle que enamora</MonoTag>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.02] mt-3`}>
              Un taller con colección de clásicos
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              Las reseñas lo repiten: en la oficina de {BIZ.owner} espera una colección
              vintage que vale la visita. Quien colecciona autos antiguos entiende algo
              esencial — cada auto tiene historia y merece que lo traten con respeto.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Trato directo con el dueño: él revisa, explica y responde',
                'Diagnóstico honesto incluso cuando la respuesta es “no es nada grave”',
                'Taller familiar, identificado como empresa de mujeres en Google',
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 text-sm md:text-[15px] font-medium">
                  <span
                    className="mt-1 w-2.5 h-2.5 shrink-0 rounded-[3px]"
                    style={{ backgroundColor: C.red }}
                    aria-hidden="true"
                  />
                  {li}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas" className="py-14 md:py-24" style={{ backgroundColor: C.redSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <MonoTag>Reseñas de Google</MonoTag>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1.02] mt-3`}>
                  {BIZ.reviews} vecinos ya lo recomiendan
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.red} />
                <span className={`${display.className} text-2xl`}>{BIZ.rating}</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure
                  className="h-full rounded-2xl p-5 md:p-6 flex flex-col"
                  style={{ backgroundColor: C.card, boxShadow: '0 12px 32px rgba(20,22,25,0.08)', border: `1px solid ${C.line}` }}
                >
                  <Stars value={5} color={C.gold} className="w-3.5 h-3.5" />
                  <blockquote className="mt-3 text-sm md:text-[15px] leading-relaxed flex-1">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: `1px solid ${C.line}` }}>
                    <div>
                      <p className="text-sm font-bold">{r.nombre}</p>
                      <p className="text-xs" style={{ color: C.muted }}>{r.cuando} · Google</p>
                    </div>
                    <WrenchMark className="w-4 h-4" color={C.steel} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 text-sm" style={{ color: C.muted }}>
              Textos según las reseñas publicadas en Google Maps.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: C.redDeep }}>
                Ver las {BIZ.reviews} reseñas
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN + HORARIO ── */}
      <section id="ubicacion" className="py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <Reveal>
            <div
              className="h-full rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: C.carbon, color: '#fff' }}
            >
              <MonoTag light>Horario y ubicación</MonoTag>
              <h2 className={`${display.className} text-3xl md:text-4xl uppercase mt-3`}>
                Te esperamos en el centro
              </h2>
              <div className="mt-6 space-y-3">
                {HORARIO.map((h) => (
                  <div key={h.d} className="flex items-center justify-between text-sm md:text-base" style={{ borderBottom: `1px solid ${C.lineLight}`, paddingBottom: 10 }}>
                    <span style={{ color: 'rgba(255,255,255,0.75)' }}>{h.d}</span>
                    <span className={`${mono.className} font-semibold`} style={{ color: h.h === 'Cerrado' ? C.steel : '#fff' }}>
                      {h.h}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {BIZ.address}, {BIZ.city} — {BIZ.region}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: C.red }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                  style={{ border: '1px solid rgba(255,255,255,0.35)' }}
                >
                  Abrir en Maps →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="min-h-[320px]">
            <div className="h-full rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}`, minHeight: 320 }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA FINAL + FOOTER ── */}
      <section className="relative" style={{ backgroundColor: C.carbon }}>
        <FinishLine />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.98] text-white`}>
              Deja el auto<br />en <span style={{ color: C.red }}>buenas manos</span>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-base font-semibold text-white transition-transform active:scale-95"
              style={{ backgroundColor: C.red }}
            >
              Escribir a {BIZ.name} →
            </a>
          </Reveal>
        </div>
        <footer className="px-5 md:px-8 py-6" style={{ borderTop: `1px solid ${C.lineLight}` }}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <p>{BIZ.name} · {BIZ.address}, {BIZ.city}</p>
            <p>
              Página de muestra por{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">
                {SITE.name}
              </a>
            </p>
          </div>
        </footer>
      </section>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
