import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el cuaderno ilustrado del jardín». La ficha real de
 * Gotitas de Amor no publica ni una foto — así que el mockup abraza el
 * bosquejo como identidad: escenas de cuento (la casona con banderines, el
 * rincón de lectura, el patio con columpios) marcadas como bosquejo, sobre
 * papel crema con gotas y guirnaldas de la paleta teal/coral/mostaza.
 * Baloo 2 lleva los titulares redondos, Nunito el cuerpo, Plex Mono los datos.
 */
const C = {
  paper: '#FFF6E8',
  card: '#FFFDF6',
  ink: '#26333A',
  deep: '#1F2B31',
  teal: '#0E7C7B',
  tealSoft: '#DCEFED',
  coral: '#E4572E',
  coralDark: '#BC4522',
  coralSoft: '#FBE3D8',
  mustard: '#F2B705',
  leaf: '#4E8A5A',
  muted: '#5E6B70',
  line: 'rgba(38,51,58,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'sala-cuna-jardin-infantil-gotitas-de-amor',
  title: 'Gotitas de Amor — Sala cuna y jardín infantil en San Clemente',
  description:
    'Sala cuna y jardín infantil en el sector Vilches, San Clemente. 5,0★ en Google. Consulta por cupos y horarios por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El jardín', href: '#jardin' },
  { label: 'Los espacios', href: '#espacios' },
  { label: 'Matrícula', href: '#matricula' },
]

const ESPACIOS = [
  {
    src: `${IMG}/rincon.webp`,
    alt: 'Ilustración de referencia del rincón de lectura: cojines, libros y guirnaldas',
    title: 'Rincones para jugar y soñar',
    text: 'Lectura en cojines, juegos de mesa y rincones pensados para que cada niña y niño encuentre su lugar.',
  },
  {
    src: `${IMG}/patio.webp`,
    alt: 'Ilustración de referencia del patio: columpios, casita de juegos y huerto',
    title: 'Un patio que es sala de clases',
    text: 'Aire libre, juegos y hasta una pequeña huerta: aprender también pasa por la tierra y el juego libre.',
  },
]

const PREGUNTAS = [
  { q: '¿Desde qué edad reciben?', a: 'Somos sala cuna y jardín infantil: atendemos desde bebés hasta la edad previa al colegio. Escríbenos y te contamos los detalles de cada nivel.' },
  { q: '¿Dónde están ubicados?', a: 'En el sector Vilches, comuna de San Clemente, Región del Maule. En el mapa de abajo está el punto exacto.' },
  { q: '¿Cómo consulto por cupos y horarios?', a: 'Directo por WhatsApp al +56 9 6304 0752. Ahí te cuentan vacantes, horarios y lo que necesitas para la matrícula.' },
]

function BosquejoBadge() {
  return (
    <span
      className={`${mono.className} absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-bold`}
      style={{ backgroundColor: 'rgba(38,51,58,0.82)', color: '#FFE9B8' }}
    >
      Bosquejo · referencia
    </span>
  )
}

function Gota({ className = '', color = C.teal }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 30" className={className} aria-hidden="true">
      <path d="M12 1C12 1 3 12 3 19a9 9 0 0 0 18 0c0-7-9-18-9-18Z" fill={color} />
      <circle cx="9" cy="18" r="2.4" fill="#fff" opacity="0.55" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(255,246,232,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.coralDark,
          btnInk: '#FFFFFF',
        }}
        ctaLabel="Consultar cupo"
      />

      {/* ── Hero: cuaderno ilustrado ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[100px] md:pt-[120px]">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.teal }}>
                  Sala cuna · Jardín infantil · Vilches, San Clemente
                </p>
                <h1 className={`${display.className} mt-4 text-[2.8rem] leading-[0.95] md:text-7xl font-extrabold`}>
                  Gotitas<br />
                  <span style={{ color: C.coral }}>de Amor</span>
                </h1>
                <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                  El jardín de la comuna donde los más chicos de Vilches crecen jugando,
                  acompañados y bien cuidados.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-extrabold text-white shadow-lg`}
                    style={{ backgroundColor: C.coralDark }}
                  >
                    Consultar por un cupo
                  </a>
                  <a
                    href="#matricula"
                    className={`${display.className} tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-extrabold`}
                    style={{ color: C.ink, border: `2px solid ${C.ink}` }}
                  >
                    Matrícula
                  </a>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
                  style={{ backgroundColor: C.tealSoft, color: C.ink }}
                >
                  <Stars value={5} color={C.teal} />
                  <span>
                    <strong>{BIZ.rating}</strong> en Google
                  </span>
                </a>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl" style={{ border: `6px solid ${C.card}` }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Ilustración de referencia del jardín: casona con banderines, jardín de girasoles y cordillera"
                    width={1200}
                    height={800}
                    priority
                    className="w-full object-cover aspect-[4/3]"
                  />
                  <BosquejoBadge />
                </div>
                <Gota className="absolute -top-4 -left-2 w-8 rotate-12" color={C.teal} />
                <Gota className="absolute -bottom-3 right-6 w-6 -rotate-12" color={C.coral} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* guirnalda de separación */}
        <div aria-hidden="true" className="max-w-6xl mx-auto px-5 md:px-8 mt-10">
          <svg viewBox="0 0 600 30" className="w-full h-8" preserveAspectRatio="none">
            <path d="M0 6 Q150 30 300 6 T600 6" fill="none" stroke={C.teal} strokeWidth="2" strokeDasharray="0" opacity="0.5" />
            {[40, 130, 220, 310, 400, 490].map((x, i) => (
              <polygon
                key={x}
                points={`${x},${10 + (i % 2) * 6} ${x + 12},${10 + (i % 2) * 6} ${x + 6},${24 + (i % 2) * 6}`}
                fill={[C.coral, C.mustard, C.teal][i % 3]}
              />
            ))}
          </svg>
        </div>
      </section>

      {/* ── El jardín ── */}
      <section id="jardin" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.coralDark }}>
              El jardín
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-extrabold leading-[1]`}>
              Un lugar chico,<br />hecho a la medida de los chicos
            </h2>
          </Reveal>
          <div className="grid gap-3">
            {[
              { n: '01', t: 'Sala cuna', d: 'Cuidado cercano para los más pequeñitos, con la calma y el cariño que piden esos años.' },
              { n: '02', t: 'Jardín infantil', d: 'Juego, exploración y rutinas que preparan para el colegio sin apurar a nadie.' },
              { n: '03', t: 'De la comuna', d: 'Un jardín de San Clemente, al servicio de las familias de Vilches y alrededores.' },
            ].map((f, i) => (
              <Reveal key={f.n} delay={i * 100}>
                <div
                  className="rounded-3xl p-5 flex gap-4 items-start"
                  style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}
                >
                  <span className={`${mono.className} shrink-0 text-sm font-bold pt-1`} style={{ color: C.coralDark }}>
                    {f.n}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-xl font-extrabold`}>{f.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Los espacios (bosquejos) ── */}
      <section id="espacios" className="scroll-mt-20" style={{ backgroundColor: C.tealSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.teal }}>
              Los espacios
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-extrabold leading-[1]`}>
              Así se imagina su día a día
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
              El jardín aún no publica fotos de sus espacios — estas ilustraciones son bosquejos
              de referencia del ambiente que una página propia podría mostrar con fotos reales.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ESPACIOS.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <figure>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg" style={{ border: `6px solid ${C.card}` }}>
                    <Image
                      src={e.src}
                      alt={e.alt}
                      width={1200}
                      height={800}
                      className="w-full object-cover aspect-[4/3]"
                    />
                    <BosquejoBadge />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className={`${display.className} text-xl md:text-2xl font-extrabold`}>{e.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{e.text}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Matrícula / contacto ── */}
      <section id="matricula" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.coralDark }}>
                Matrícula y consultas
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-extrabold leading-[1]`}>
                Escríbenos y reserva su cupito
              </h2>
              <dl className="mt-7 space-y-4 text-sm md:text-base">
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                    Ubicación
                  </dt>
                  <dd className="font-bold">{BIZ.address}, {BIZ.city} — {BIZ.region}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                    WhatsApp
                  </dt>
                  <dd>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 tap-44">
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                    Horario
                  </dt>
                  <dd className="font-bold">Consulta por WhatsApp</dd>
                </div>
              </dl>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tap-44 mt-8 inline-flex items-center rounded-full px-7 py-3 text-base font-extrabold text-white shadow-lg`}
                style={{ backgroundColor: C.teal }}
              >
                Consultar por WhatsApp
              </a>
            </Reveal>
            <div className="mt-8 space-y-0">
              {PREGUNTAS.map((f, i) => (
                <Reveal key={f.q} delay={i * 80}>
                  <details className="group border-b py-4" style={{ borderColor: C.line }}>
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-base tap-44">
                      {f.q}
                      <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg leading-none transition-transform group-open:rotate-45" style={{ color: C.coralDark }}>+</span>
                    </summary>
                    <p className="text-sm leading-relaxed mt-3 max-w-xl" style={{ color: C.muted }}>{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: `6px solid ${C.card}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name} en Vilches, San Clemente`}
                className="w-full aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.teal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 text-center">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1] text-white`}>
              Cada gotita de amor<br />cuenta <span style={{ color: '#FFE9B8' }}>desde el primer día</span>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} tap-44 mt-8 inline-flex items-center rounded-full px-8 py-3 text-base font-extrabold`}
              style={{ backgroundColor: C.mustard, color: C.ink }}
            >
              Escribir al jardín
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-8 pb-6" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col items-center gap-3 text-center">
          <p className={`${display.className} text-sm font-extrabold text-white`}>{BIZ.name}</p>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
            {BIZ.address} · {BIZ.city} · {BIZ.region}
          </p>
          <div className="[&>div]:static [&>div]:mx-auto [&>div]:w-fit">
            <DemoBand name={BIZ.short} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp" />
    </main>
  )
}
