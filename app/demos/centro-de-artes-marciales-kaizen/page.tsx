import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG, HORARIO, RESENAS } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

const C = {
  ink: '#171210',
  deep: '#0F0C0A',
  panel: '#201A16',
  paper: '#F2EDE2',
  paperSoft: '#E8E0CE',
  red: '#C8352C',
  redInk: '#9E2B22',
  redSoft: '#F07362',
  muted: '#6E6256',
  mutedOnDark: 'rgba(242,237,226,0.74)',
  line: 'rgba(23,18,16,0.16)',
  lineLight: 'rgba(242,237,226,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-de-artes-marciales-kaizen',
  title: 'Centro de Artes Marciales Kaizen — Jiu jitsu y striking en Talca',
  description:
    'Academia de artes marciales en Siete Nte. 1675, Talca: jiu jitsu, grappling, boxeo y muay thai. 4,7 en Google. Agenda tu clase de prueba por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Disciplinas', href: '#disciplinas' },
  { label: 'El dojo', href: '#dojo' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Dónde estamos', href: '#contacto' },
]

// La escalera de cinturones del BJJ da el ritmo cromático a la lista.
const DISCIPLINAS = [
  {
    belt: '#EFEAE0',
    beltTip: '#1B1714',
    beltName: 'blanco',
    name: 'Jiu jitsu brasileño',
    tag: 'con gi',
    desc: 'El arte suave con kimono: barridos, palancas y estrangulaciones. Técnica sobre fuerza, desde el primer día.',
    src: `${IMG}/clase-gi.webp`,
    alt: 'Alumnos de Kaizen con gi en el tatami, frente al lienzo del dojo',
  },
  {
    belt: '#2D5BA6',
    beltTip: '#1B1714',
    beltName: 'azul',
    name: 'Grappling no-gi',
    tag: 'sin kimono',
    desc: 'Lucha en rashguard y shorts: derribos, control y sumisiones al ritmo del grappling deportivo.',
    src: `${IMG}/clase-nogi.webp`,
    alt: 'Grupo de grappling no-gi de Kaizen frente al logo del dojo',
  },
  {
    belt: '#6B3FA0',
    beltTip: '#1B1714',
    beltName: 'morado',
    name: 'Boxeo y muay thai',
    tag: 'striking',
    desc: 'De pie y con guantes: boxeo y muay thai para completar el repertorio. Lo anuncia hasta el mural de la calle.',
    src: `${IMG}/fachada.webp`,
    alt: 'Fachada del Centro de Artes Marciales Kaizen con el mural que lista jiu jitsu, grappling, boxeo y muay thai',
  },
  {
    belt: '#6B4226',
    beltTip: '#1B1714',
    beltName: 'café',
    name: 'Fuerza y acondicionamiento',
    tag: 'sala propia',
    desc: 'Rack, barra y peso libre dentro del dojo: el motor detrás del derribo se entrena acá mismo.',
    src: `${IMG}/fuerza.webp`,
    alt: 'Alumna de Kaizen haciendo sentadilla con barra en el rack del dojo',
  },
  {
    belt: '#1B1714',
    beltTip: '#C8352C',
    beltName: 'negro',
    name: 'Clases infantiles',
    tag: 'para peques',
    desc: 'Los más chicos también entran al tatami: disciplina, respeto y juego serio con profesores encima.',
    src: `${IMG}/clase-kids.webp`,
    alt: 'Clase infantil de artes marciales en Kaizen, Talca',
  },
]

function Belt({ color, tip }: { color: string; tip: string }) {
  return (
    <span className="inline-flex items-stretch w-[58px] h-[9px] rounded-[2px] overflow-hidden shrink-0" aria-hidden="true">
      <span className="flex-1" style={{ backgroundColor: color }} />
      <span className="w-[13px]" style={{ backgroundColor: tip }} />
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.redSoft : C.redInk }}
    >
      <span className="inline-block w-8 h-[3px]" style={{ backgroundColor: light ? C.red : C.redInk }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function KaizenPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.deep, color: C.paper }}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .kz-marquee-track { animation: kz-scroll 26s linear infinite; }
          .kz-kanji { animation: kz-drift 18s ease-in-out infinite alternate; }
        }
        @keyframes kz-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes kz-drift { from { transform: translateY(0); } to { transform: translateY(-14px); } }
      `}</style>

      <BlitzNav
        name={
          <>
            <span className="uppercase tracking-[0.08em]">Kaizen</span>
            <span className={`${mono.className} hidden sm:inline text-[10px] uppercase tracking-[0.2em] opacity-70`}>
              grappling arts
            </span>
          </>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(15,12,10,0.95)',
          ink: C.paper,
          line: C.lineLight,
          btnBg: C.red,
          btnInk: '#FFF4EA',
        }}
        ctaLabel="Clase de prueba"
      />

      {/* ── Hero: el mural de la fachada, a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada del Centro de Artes Marciales Kaizen en Siete Norte, Talca, con el mural del logo pintado a mano"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,12,10,0.62) 0%, rgba(15,12,10,0.42) 40%, rgba(15,12,10,0.95) 100%)',
          }}
        />
        {/* kanji marca de agua */}
        <span
          aria-hidden="true"
          className={`${display.className} kz-kanji absolute top-20 right-2 md:right-10 text-[9rem] md:text-[13rem] leading-none font-bold select-none pointer-events-none`}
          style={{ color: 'rgba(242,237,226,0.07)' }}
        >
          改善
        </span>

        <div className="absolute top-24 md:top-28 left-5 md:left-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F07362] tap-44"
              style={{ backgroundColor: 'rgba(242,237,226,0.96)', color: C.deep }}
            >
              <Stars value={4.7} color={C.red} className="w-[13px] h-[13px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-40">
          <Reveal>
            <Eyebrow light>Academia de artes marciales · Talca · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.94] tracking-tight text-[clamp(3.2rem,11vw,7rem)] mb-5`}
              style={{ color: C.paper }}
            >
              Acá todos parten
              <br />
              <span style={{ color: '#E8564A' }}>de cinturón blanco</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(242,237,226,0.9)' }}>
              Jiu jitsu, grappling, boxeo y muay thai en Siete Norte 1675, Talca.
              Academia afiliada a {BIZ.affiliation}, con equipo que compite
              y graduaciones que se celebran en serio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-base px-7 py-3 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F07362] tap-44`}
                style={{ backgroundColor: C.red, color: '#FFF4EA' }}
              >
                Agendar clase de prueba
              </a>
              <a
                href="#disciplinas"
                className={`${display.className} font-bold uppercase tracking-wide text-base px-7 py-3 rounded-sm border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F07362] tap-44`}
                style={{ borderColor: 'rgba(242,237,226,0.55)', color: C.paper }}
              >
                Ver disciplinas
              </a>
            </div>
          </Reveal>
        </div>

        {/* cinta de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(15,12,10,0.94)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(242,237,226,0.9)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.redSoft }} aria-hidden="true" />
              Lun–Vie, mediodía y noche
            </span>
            <span>{BIZ.igFollowers} seguidores en Instagram</span>
            <span className="hidden md:inline" style={{ color: C.redSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta roja: el letrero de la fachada, en marcha ── */}
      <div className="overflow-hidden border-y-[3px]" style={{ backgroundColor: C.red, borderColor: C.deep }} aria-hidden="true">
        <div className="kz-marquee-track flex w-max py-3">
          {[0, 1].map((n) => (
            <span key={n} className={`${display.className} font-bold uppercase tracking-[0.12em] text-xl md:text-2xl whitespace-nowrap px-4`} style={{ color: '#FFF4EA' }}>
              {['Jiu jitsu', 'Grappling', 'Boxeo', 'Muay thai', 'Fuerza', 'Kids'].map((d) => (
                <span key={d} className="mx-5 inline-flex items-center gap-5">
                  {d}
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M12 3 L21 12 L12 21 L3 12 Z" />
                  </svg>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Disciplinas: la escalera de cinturones ── */}
      <section id="disciplinas" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Las disciplinas</Eyebrow>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] tracking-tight text-5xl md:text-6xl`} style={{ color: C.ink }}>
                Cinco disciplinas,
                <br />
                <span style={{ color: C.redInk }}>un solo camino</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Cada fila sube un grado: de cinturón blanco a negro, como
                cualquier alumno que entra por la puerta. Todas las clases
                se confirman por WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 space-y-5 md:space-y-6">
          {DISCIPLINAS.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <article
                className="grid md:grid-cols-[220px_1fr] rounded-lg overflow-hidden border"
                style={{ backgroundColor: i % 2 ? C.paperSoft : '#FBF8F0', borderColor: C.line }}
              >
                <div className="relative min-h-[190px] md:min-h-[200px]">
                  <Image
                    src={d.src}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 768px) 220px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 md:p-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Belt color={d.belt} tip={d.beltTip} />
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                      cinturón {d.beltName} · {d.tag}
                    </span>
                  </div>
                  <h3 className={`${display.className} font-bold uppercase tracking-tight text-3xl md:text-4xl leading-none mb-2`} style={{ color: C.ink }}>
                    {d.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed max-w-xl" style={{ color: C.muted }}>
                    {d.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El dojo ── */}
      <section id="dojo" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <span
          aria-hidden="true"
          className={`${display.className} absolute -top-8 -right-6 text-[11rem] md:text-[16rem] leading-none font-bold select-none pointer-events-none`}
          style={{ color: 'rgba(242,237,226,0.05)' }}
        >
          場
        </span>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: C.lineLight }}>
              <Image
                src={`${IMG}/instructores.webp`}
                alt={`Profesores de Kaizen Grappling Arts con gi negro frente al lienzo del dojo`}
                width={480}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-3`} style={{ color: C.mutedOnDark }}>
              Los instructores, frente al lienzo del dojo
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow light>El dojo</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] tracking-tight text-4xl md:text-5xl mb-6`} style={{ color: C.paper }}>
              Una casa de tatami
              <br />
              <span style={{ color: '#E8564A' }}>en 7 norte</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-lg" style={{ color: C.mutedOnDark }}>
              {BIZ.name} — también {BIZ.brand} — funciona en {BIZ.address},
              Talca, bajo la dirección de {BIZ.headCoach}. La academia está
              afiliada a {BIZ.affiliation} y en junio de 2025 celebró 7 años:
              seminarios con profesores invitados, graduaciones de cinturón
              y un dojo que se llena de lunes a viernes.
            </p>
            <ul className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.16em] space-y-2.5 mb-8`} style={{ color: 'rgba(242,237,226,0.85)' }}>
              <li className="flex items-center gap-3">
                <span className="w-5 h-[2px]" style={{ backgroundColor: C.red }} aria-hidden="true" />
                Dirige: {BIZ.headCoach}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-[2px]" style={{ backgroundColor: C.red }} aria-hidden="true" />
                Afiliación: {BIZ.affiliation}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-[2px]" style={{ backgroundColor: C.red }} aria-hidden="true" />
                +7 años formando en Talca
              </li>
            </ul>
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-bold uppercase tracking-wide text-base inline-flex items-center px-6 py-2.5 rounded-sm border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F07362] tap-44`}
              style={{ borderColor: 'rgba(242,237,226,0.55)', color: C.paper }}
            >
              {BIZ.igUser} en Instagram
            </a>
          </Reveal>
        </div>

        {/* foto panorámica del equipo, a sangre */}
        <div className="relative border-y" style={{ borderColor: C.lineLight }}>
          <Image
            src={`${IMG}/pano.webp`}
            alt="El equipo de Kaizen Grappling Arts en fila sobre el tatami del dojo"
            width={1200}
            height={350}
            className="w-full h-[120px] md:h-[200px] object-cover"
          />
        </div>
      </section>

      {/* ── Competencia ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.paperSoft, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Competencia</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] tracking-tight text-4xl md:text-5xl mb-6`} style={{ color: C.ink }}>
              El equipo compite
              <br />
              <span style={{ color: C.redInk }}>y también organiza</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-lg" style={{ color: C.muted }}>
              Los alumnos de Kaizen inscriben combates en los torneos de
              Smoothcomp bajo la bandera {BIZ.brand}, y la academia misma
              es organizadora: el Kaizen Open — jiu jitsu gi y no-gi —
              se hace en Talca.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://smoothcomp.com/es/club/50834"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 transition-colors tap-44 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: C.redInk, textDecorationColor: 'rgba(158,43,34,0.4)' }}
              >
                Ver el club en Smoothcomp →
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative rounded-lg overflow-hidden border shadow-md" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/torneo.webp`}
                alt="Foto grupal de Kaizen tras un torneo de jiu jitsu en gimnasio con tatami azul"
                width={477}
                height={319}
                className="w-full h-auto object-cover"
              />
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] px-4 py-3`} style={{ color: C.muted }}>
                Del tatami del barrio al podio: el equipo entrenado acá compite en serio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Lo que dicen los alumnos</Eyebrow>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] tracking-tight text-5xl md:text-6xl`} style={{ color: C.ink }}>
                Respeto primero,
                <br />
                <span style={{ color: C.redInk }}>técnica después</span>
              </h2>
              <div className="lg:justify-self-end">
                <p className="flex items-center gap-3 mb-2">
                  <span className={`${display.className} font-extrabold text-5xl leading-none`} style={{ color: C.redInk }}>{BIZ.rating}</span>
                  <Stars value={4.7} color={C.red} className="w-5 h-5" />
                </p>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas verificadas en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure className="rounded-lg p-6 border h-full flex flex-col" style={{ backgroundColor: i % 2 ? C.paperSoft : '#FBF8F0', borderColor: C.line }}>
                  <Stars value={5} color={C.red} className="w-4 h-4 mb-4" />
                  <blockquote className="text-base md:text-lg leading-relaxed mb-5 flex-1" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em] flex items-center justify-between gap-3`} style={{ color: C.muted }}>
                    <span>{r.author}</span>
                    <span>{r.when} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horarios: cartelera de combate ── */}
      <section id="horarios" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.deep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow light>La cartelera</Eyebrow>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] tracking-tight text-5xl md:text-6xl`} style={{ color: C.paper }}>
                Horarios
                <br />
                <span style={{ color: '#E8564A' }}>de la semana</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedOnDark }}>
                Horario publicado por la academia en su Facebook. Los
                sábados hay torneos, seminarios y graduaciones; confirma
                el día exacto por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="border-t-[3px]" style={{ borderColor: C.red }}>
            {HORARIO.map((h, i) => (
              <Reveal key={h.time} delay={i * 70}>
                <div
                  className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-5 border-b"
                  style={{ borderColor: C.lineLight }}
                >
                  <h3 className={`${display.className} font-bold uppercase tracking-tight text-2xl md:text-3xl`} style={{ color: C.paper }}>
                    {h.days}
                  </h3>
                  <span className={`${mono.className} text-sm md:text-base font-bold`} style={{ color: '#F0A79C' }}>
                    {h.time}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-base px-7 py-3 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F07362] tap-44`}
                style={{ backgroundColor: C.red, color: '#FFF4EA' }}
              >
                Confirmar horario por WhatsApp
              </a>
              <p className="text-xs" style={{ color: C.mutedOnDark }}>
                La primera clase es para conocer el dojo, sin compromiso.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] tracking-tight text-4xl md:text-5xl mb-6`} style={{ color: C.ink }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.redInk }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              Fachada con mural propio: se ve desde la vereda.
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORARIO.slice(0, 2).map((h) => (
                <li key={h.time} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-base px-7 py-3 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2B22] tap-44`}
                style={{ backgroundColor: C.red, color: '#FFF4EA' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-base px-7 py-3 rounded-sm border-2 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2B22] tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-lg overflow-hidden border shadow-lg h-full min-h-[320px]" style={{ borderColor: C.line }}>
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
      <footer style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid md:grid-cols-2 gap-4 md:gap-5 items-start">
          <div>
            <p className={`${display.className} font-extrabold uppercase tracking-tight text-2xl mb-2 flex items-center gap-3`} style={{ color: C.paper }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full object-cover" aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,237,226,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(242,237,226,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,237,226,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(242,237,226,0.75)' }}>
            Datos, reseñas y fotos verificados en Google Maps, Facebook,
            Instagram y Smoothcomp. Los horarios y valores se confirman
            por WhatsApp.
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
