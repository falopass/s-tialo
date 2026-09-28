import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Paleta del dojo: negro de gi y tatami, rojo de sus flyers y brochazos,
// azul del tatami de competencia. Motivo: pincelada diagonal (los flyers
// de la academia usan trazos de pincel) y cuadrícula de tatami.
const C = {
  negro: '#0D0D10',
  negro2: '#17171C',
  rojo: '#D92323',
  rojoDeep: '#8F1517',
  tatami: '#2B4FA3',
  crema: '#F4EFE4',
  papel: '#FFFDF8',
  tinta: '#161410',
  muted: '#6E675C',
  line: 'rgba(22,20,16,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'academia-kenpo-karate-freestyle',
  title: 'Academia Kenpo Karate Freestyle — 48 años en Talca',
  description:
    'Kenpo Karate y Kickboxing WAKO en Talca para niños, jóvenes y adultos. 48 años de trayectoria, clases para principiantes y defensa personal. Escríbenos por WhatsApp.',
  image: `${IMG}/og.webp`,
})

const NAV_LINKS = [
  { label: 'Clases', href: '#clases' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde', href: '#donde' },
]

// Pincelada: bloque rojo con bordes irregulares tipo brochazo.
function Pincel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block px-3 py-1 ${className}`}>
      <span
        className="absolute inset-0 -skew-x-6"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${C.rojo} 4%, ${C.rojo} 96%, transparent 100%)`,
          clipPath: 'polygon(2% 12%, 97% 4%, 100% 45%, 98% 92%, 4% 100%, 0% 55%)',
        }}
        aria-hidden="true"
      />
      <span className="relative text-white">{children}</span>
    </span>
  )
}

// Cuadrícula tatami rojo/azul como borde de sección.
function TatamiEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div className="flex h-2.5" aria-hidden="true" style={{ flexDirection: flip ? 'row-reverse' : 'row' }}>
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="flex-1" style={{ backgroundColor: i % 2 ? C.tatami : C.rojo }} />
      ))}
    </div>
  )
}

const CLASES = [
  {
    img: 'infantil.webp',
    titulo: 'Karate infantil',
    bajada: 'Artes marciales para niñas y niños desde los 5 años: técnica, disciplina y confianza.',
    tag: 'Niños',
  },
  {
    img: 'flyer-kenpo.webp',
    titulo: 'Kenpo para jóvenes y adultos',
    bajada: 'Kenpo Karate Freestyle: defensa personal, combate y ejercicio físico para todas las edades.',
    tag: 'Jóvenes y adultos',
  },
  {
    img: 'flyer-kick.webp',
    titulo: 'Kickboxing WAKO',
    bajada: 'Point fighting, kick light y light contact — la academia está afiliada a WAKO.',
    tag: 'Competencia',
  },
]

const HORARIO = [
  ['Lunes', '18:00 – 20:30'],
  ['Martes', '18:00 – 20:30'],
  ['Miércoles', 'Cerrado'],
  ['Jueves', '18:00 – 20:30'],
  ['Viernes', '18:00 – 20:30'],
  ['Sábado', '10:00 – 12:30'],
  ['Domingo', 'Cerrado'],
]

const RESENAS = [
  {
    t: 'Más que una academia, este lugar se ha convertido en una segunda familia. Se nota desde el primer día que aquí hay mucha vocación y años de experiencia que respaldan cada clase.',
    a: 'Thiare Norambuena',
  },
  {
    t: '8 años siendo parte de esta gran familia de Kenpo Karate. Una academia comprometida con el crecimiento de sus alumnos, donde se respeta la técnica y se fomenta la disciplina.',
    a: 'Shary Cortés',
  },
]

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.negro, color: C.crema }}>
      <BlitzNav
        name="Kenpo Freestyle"
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.negro2, ink: '#FFFFFF', line: 'rgba(255,255,255,0.14)', btnBg: C.rojo, btnInk: '#FFF' }}
        fontClass={display.className}
        ctaLabel="Empezar clases"
      />

      {/* ── Hero: el equipo en el dojo ── */}
      <header id="inicio" className="relative pt-[88px] md:pt-[112px] pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: `radial-gradient(circle at 85% 15%, rgba(217,35,35,0.28), transparent 50%), radial-gradient(circle at 15% 85%, rgba(43,79,163,0.3), transparent 55%)` }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
              Escuela de artes marciales · Talca
            </p>
            <h1 className={`${display.className} uppercase leading-[0.95] font-semibold text-[13.5vw] md:text-[6.2rem] xl:text-[7.4rem] text-white`}>
              48 años<br />formando<br />
              <Pincel>personas</Pincel>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: 'rgba(244,239,228,0.8)' }}>
              Kenpo Karate Freestyle y Kickboxing WAKO en 13 Norte, Talca.
              Niños desde los 5 años, jóvenes y adultos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: C.rojo, color: '#fff' }}
              >
                Empezar clases
              </a>
              <span className={`${mono.className} text-xs`} style={{ color: 'rgba(244,239,228,0.7)' }}>
                ★ {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <figure className="border-2" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              <Image src={`${IMG}/maestros.webp`} alt="Instructores y equipo de la academia en el dojo, sobre tatami rojo y azul" width={1200} height={901} className="w-full aspect-[4/3] md:aspect-[16/7] object-cover" priority />
              <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em] px-4 py-2.5 border-t-2`} style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(244,239,228,0.7)' }}>
                El equipo en el dojo — foto de su ficha de Google
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      <TatamiEdge />

      {/* ── Clases ── */}
      <section id="clases" className="py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.rojoDeep }}>De sus propios afiches</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none font-semibold`} style={{ color: C.tinta }}>
              Hay clase<br />para cada edad
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASES.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 70}>
                <article className="h-full border-2 bg-white" style={{ borderColor: C.tinta, boxShadow: `6px 6px 0 ${i === 1 ? C.tatami : C.rojo}` }}>
                  <figure className="relative">
                    <Image src={`${IMG}/${c.img}`} alt={`Afiche de la academia: ${c.titulo}`} width={800} height={640} className="w-full aspect-[4/5] object-cover object-top" />
                    <span className={`${mono.className} absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white`} style={{ backgroundColor: C.negro }}>{c.tag}</span>
                  </figure>
                  <div className="p-4" style={{ color: C.tinta }}>
                    <h3 className={`${display.className} uppercase text-xl font-semibold`}>{c.titulo}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.muted }}>{c.bajada}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trayectoria + mundial ── */}
      <section id="trayectoria" className="py-14 md:py-20" style={{ backgroundColor: C.negro2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.tatami }}>Competencia real</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none font-semibold text-white`}>
              Del dojo<br />al <Pincel>mundial</Pincel>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(244,239,228,0.8)' }}>
              En 2026 un alumno de la academia clasificó al
              <strong className="text-white"> WAKO Youth World Championships</strong> en
              point fighting y kick light, con apoyo del FNDR del Gobierno del Maule.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <figure className="border-2" style={{ borderColor: C.rojo }}>
                <Image src={`${IMG}/dojo.webp`} alt="Clase infantil en el dojo: alumnos con gi sobre tatami" width={640} height={800} className="w-full aspect-[4/5] object-cover" />
              </figure>
              <figure className="border-2 mt-6" style={{ borderColor: C.tatami }}>
                <Image src={`${IMG}/torneo.webp`} alt="Combate en torneo sobre tatami de competencia, árbitro WAKO Chile" width={640} height={800} className="w-full aspect-[4/5] object-cover" />
              </figure>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="border-2 rotate-1 bg-white p-2" style={{ borderColor: C.tinta, boxShadow: `8px 8px 0 ${C.rojo}` }}>
              <Image src={`${IMG}/mundial.webp`} alt="Afiche de la academia: Lucas Barrera clasificado al WAKO Youth World Championships 2026" width={800} height={640} className="w-full aspect-[4/5] object-cover object-top" />
            </figure>
          </Reveal>
        </div>
      </section>

      <TatamiEdge flip />

      {/* ── Horarios ── */}
      <section id="horarios" className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.rojoDeep }}>Tardes de dojo</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none font-semibold`} style={{ color: C.tinta }}>
              Horarios<br />de clases
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Horario publicado en su ficha de Google. Los cursos nuevos para
              principiantes se anuncian en su Instagram.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className={`${mono.className} text-sm border-2 bg-white`} style={{ borderColor: C.tinta, color: C.tinta, boxShadow: `6px 6px 0 ${C.rojo}` }}>
              {HORARIO.map(([d, h], i) => (
                <li key={d} className={`flex justify-between gap-4 px-4 py-3 ${i ? 'border-t' : ''}`} style={{ borderColor: C.line }}>
                  <span>{d}</span>
                  <strong style={{ color: h === 'Cerrado' ? C.rojoDeep : C.tinta }}>{h}</strong>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.negro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none font-semibold text-white`}>
              Una segunda<br />familia
            </h2>
            <div className={`${mono.className} text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(244,239,228,0.7)' }}>
              <Stars value={5} color={C.rojo} /> {BIZ.rating} / 5 · {BIZ.reviews} reseñas en Google
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <blockquote className="h-full p-6 border-l-4" style={{ backgroundColor: C.negro2, borderColor: i % 2 ? C.tatami : C.rojo }}>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(244,239,228,0.9)' }}>“{r.t}”</p>
                  <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(244,239,228,0.55)' }}>{r.a}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde ── */}
      <section id="donde" className="py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.rojoDeep }}>El dojo</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none font-semibold`} style={{ color: C.tinta }}>
              13 Norte,<br />Talca
            </h2>
            <address className="not-italic mt-4 text-sm leading-relaxed" style={{ color: C.muted }}>
              {BIZ.address} ({BIZ.addressAlt})<br />
              {BIZ.city}, {BIZ.region}<br />
              WhatsApp {BIZ.phoneDisplay}<br />
              Instagram <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{BIZ.instagram}</a>
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2"
              style={{ borderColor: C.tinta, color: C.tinta }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
          <Reveal>
            <div className="border-2 overflow-hidden" style={{ borderColor: C.tinta, boxShadow: `8px 8px 0 ${C.tatami}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.negro2, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20">
          <p className={`${display.className} text-lg uppercase font-semibold`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed mb-1.5" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
          </address>
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono,
            horarios y reseñas son reales (ficha de Google e Instagram de la
            academia); el diseño es de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
