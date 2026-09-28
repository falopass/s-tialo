import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }],
})

const C = {
  paper: '#FBF5EA',
  paper2: '#F3E8D3',
  card: '#FFFDF7',
  ink: '#2E2A23',
  muted: '#7C7463',
  teal: '#187F78',
  tealDeep: '#0E5A55',
  line: 'rgba(46,42,35,0.14)',
}

const SERVICIOS = [
  { t: 'Lenguaje y habla infantil', d: 'Terapia para niños y niñas que están partiendo a hablar o que necesitan un empujón con las palabras.' },
  { t: 'Evaluación a través del juego', d: 'La primera sesión se juega: rompecabezas, láminas y material pensado para que el niño se suelte.' },
  { t: 'Sonidos que se resisten', d: 'Trabajo dedicado en letras difíciles, como la erre que tanto cuesta a muchos pequeños.' },
  { t: 'Lavado de oídos', d: 'También atención a adultos: procedimiento de lavado auditivo con la misma paciencia y detalle.' },
  { t: 'Sesiones online', d: 'Cuando no se puede llegar a la consulta, la terapia continúa por pantalla.' },
]

const FOTOS = [
  {
    img: `${IMG}/juguetes.webp`,
    alt: 'Juguetes y material didáctico de la consulta',
    t: 'Material de juego',
    w: 720,
    h: 720,
    rot: '-rotate-2',
  },
  {
    img: `${IMG}/sala.webp`,
    alt: 'Sala de la consulta Fonointegra en Talca',
    t: 'La sala',
    w: 720,
    h: 720,
    rot: 'rotate-1',
  },
  {
    img: `${IMG}/alfombra.webp`,
    alt: 'Alfombra de juegos donde trabajan los niños',
    t: 'Donde se juega',
    w: 720,
    h: 720,
    rot: '-rotate-1',
  },
  {
    img: `${IMG}/material.webp`,
    alt: 'Láminas y material fonoaudiológico',
    t: 'Láminas y lápices',
    w: 720,
    h: 720,
    rot: 'rotate-2',
  },
  {
    img: `${IMG}/online.webp`,
    alt: 'Sesión online de fonoaudiología',
    t: 'También online',
    w: 720,
    h: 720,
    rot: '-rotate-1',
  },
  {
    img: `${IMG}/estante.webp`,
    alt: 'Estante con material de la consulta',
    t: 'Todo a la mano',
    w: 960,
    h: 1200,
    rot: 'rotate-1',
  },
]

const RESENAS = [
  {
    q: 'Carla es una excelente fonoaudióloga. Destaco su dedicación, paciencia y el cariño con el que trabaja. Gracias a ella, mi hijo ha tenido grandes avances. La recomiendo totalmente.',
    n: 'millaray nuñez',
    s: 5,
  },
  {
    q: 'Carla fue muy simpática, dinámica y paciente con mi hija. La sesión se dió de manera lúdica y entretenida, ya que a través del juego se hizo parte de la evaluación. Mi hija quedó contenta y MUY motivada con mejorar su R. Muchas gracias!',
    n: 'Tamy Venegas',
    s: 5,
  },
  {
    q: 'Conocimos a Carla Neira cuando nuestro hijo tenía apenas 3 años y no hablaba absolutamente nada. Como familia, estábamos llenos de dudas, miedos y preguntas.',
    n: 'María angélica Guerrero sagal',
    s: 5,
  },
]

export const metadata = demoMetadata({
  slug: 'consulta-fonointegra',
  title: 'Consulta Fonointegra · fonoaudiología infantil en Talca',
  description:
    'Fonoaudiología infantil en el centro de Talca: terapia a través del juego, sonidos difíciles, lavado de oídos y sesiones online. Agenda por WhatsApp +56 9 6246 2452.',
  image: `${IMG}/sala.webp`,
})

function Ondas() {
  const bars = [10, 18, 28, 14, 34, 20, 30, 12, 24, 16]
  return (
    <div className="flex items-end gap-1" aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full"
          style={{ height: h, backgroundColor: i % 3 === 0 ? C.teal : 'rgba(24,127,120,0.35)' }}
        />
      ))}
    </div>
  )
}

export default function FonoIntegraDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-8 h-8 rounded-full object-cover" />
            <span className={`${display.className} font-bold tracking-tight`} style={{ color: C.ink }}>
              Fonointegra
            </span>
          </span>
        }
        links={[
          { label: 'Cómo se juega', href: '#como' },
          { label: 'La consulta', href: '#consulta' },
          { label: 'Dónde', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.teal, btnInk: '#fff' }}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* ── Hero: centro de Talca, juego ── */}
      <section id="inicio" className="pt-[76px] md:pt-[96px] overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-12 md:pb-16 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 items-center">
          <div>
            <div className="flex items-center gap-3">
              <Ondas />
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.teal }}>
                Fonoaudiología infantil · Centro 2000, Talca
              </p>
            </div>
            <h1 className={`${display.className} text-[36px] md:text-[58px] font-extrabold leading-[1.05] mt-4`}>
              En pleno centro de Talca, terapia que suena a juego.
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-lg leading-relaxed" style={{ color: C.muted }}>
              {BIZ.profesional}, fonoaudióloga. Los niños avanzan en sus palabras jugando;
              los grandes vienen por el lavado de oídos.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold text-[15px] px-6 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.teal, color: '#fff', height: 48 }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center justify-center text-sm px-5 rounded-full border transition-colors active:scale-95`}
                style={{ borderColor: C.line, color: C.ink, height: 48 }}
              >
                {BIZ.instagramHandle}
              </a>
            </div>
          </div>
          <Reveal delay={80}>
            <figure className="relative rotate-2 rounded-3xl p-3 md:p-4 shadow-sm" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/sala.webp`}
                alt="Sala de Consulta Fonointegra preparada para una sesión infantil"
                width={720}
                height={720}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
              <figcaption className={`${mono.className} mt-3 pb-1 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                La sala, antes de que llegue un paciente
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo se juega ── */}
      <section id="como" style={{ backgroundColor: C.teal, color: '#F4FBF9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: '#BFE3DD' }}>
              Lo que pasa en una sesión
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05] mt-3 max-w-2xl`}>
              Primero se juega. Después salen las palabras.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={i * 60} className={i === SERVICIOS.length - 1 ? 'md:col-span-2' : ''}>
                <div
                  className="h-full rounded-2xl p-5 md:p-6"
                  style={{ backgroundColor: 'rgba(251,245,234,0.10)', border: '1px solid rgba(251,245,234,0.25)' }}
                >
                  <p className={`${display.className} text-lg md:text-xl font-bold`}>{s.t}</p>
                  <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(244,251,249,0.82)' }}>
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La consulta en fotos ── */}
      <section id="consulta" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.teal }}>
                La consulta
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05] mt-3`}>
                Fotos reales del consultorio
              </h2>
            </Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.instagramHandle}
            </p>
          </div>
          <div className="mt-12 columns-2 md:columns-3 gap-4 md:gap-6 [&>figure]:mb-5 md:[&>figure]:mb-7">
            {FOTOS.map((f, i) => (
              <Reveal key={f.t} delay={i * 50} className="break-inside-avoid">
                <figure className={`${f.rot} rounded-2xl p-2.5 md:p-3 shadow-sm`} style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                  <Image
                    src={f.img}
                    alt={f.alt}
                    width={f.w}
                    height={f.h}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                  <figcaption className={`${mono.className} mt-2 pb-1 px-1 text-[10px] md:text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                    {f.t}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section style={{ backgroundColor: C.paper2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05]`}>
                Los apoderados lo cuentan
              </h2>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
              >
                <Stars value={5} color={C.teal} className="scale-90" />
                <span className={`${mono.className} text-xs`} style={{ color: C.ink }}>
                  {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.n} delay={i * 80}>
                <blockquote
                  className={`h-full rounded-3xl p-5 md:p-6 ${i === 1 ? 'md:-rotate-1' : i === 2 ? 'md:rotate-1' : ''}`}
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <Stars value={r.s} color={C.teal} />
                  <p className="mt-3 text-[15px] leading-relaxed">&ldquo;{r.q}&rdquo;</p>
                  <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {r.n} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={BIZ.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mt-8 inline-block text-xs uppercase tracking-[0.16em] underline underline-offset-4`}
              style={{ color: C.teal }}
            >
              Ver las {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.teal }}>
              Dónde queda
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.05] mt-3`}>
              Edificio Centro 2000, en el corazón de Talca
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-md leading-relaxed" style={{ color: C.muted }}>
              Sobre la calle 1 Norte: fácil de llegar a pie desde la Alameda
              o en auto por el centro.
            </p>
            <dl className="mt-8 space-y-0">
              <div className="flex justify-between gap-4 border-b py-3.5" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] pt-0.5`} style={{ color: C.muted }}>
                  Dirección
                </dt>
                <dd className="text-sm text-right font-semibold">
                  {BIZ.address}
                  <br />
                  <span style={{ color: C.muted }}>{BIZ.city}</span>
                </dd>
              </div>
              {HORARIO.map((h) => (
                <div key={h.d} className="flex justify-between gap-4 border-b py-3.5" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] pt-0.5`} style={{ color: C.muted }}>
                    {h.d}
                  </dt>
                  <dd className={`${mono.className} text-sm font-medium`} style={{ color: C.teal }}>
                    {h.h}
                  </dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-b py-3.5" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] pt-0.5`} style={{ color: C.muted }}>
                  WhatsApp
                </dt>
                <dd className={`${mono.className} text-sm`}>{BIZ.phoneDisplay}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full min-h-[300px] rounded-3xl overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.tealDeep, color: '#F4FBF9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
          <div className="flex-1">
            <Ondas />
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.02] mt-4`}>
              Si tu hijo aún no habla como sus amigos, conversemos.
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-base px-8 rounded-full transition-transform active:scale-95 shrink-0"
            style={{ backgroundColor: C.paper, color: C.tealDeep, height: 48 }}
          >
            WhatsApp {BIZ.phoneDisplay}
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className={`${display.className} text-lg font-bold`} style={{ color: C.paper }}>
              Consulta Fonointegra
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(251,245,234,0.6)' }}>
              {BIZ.phoneDisplay} · {BIZ.instagramHandle}
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-xs" style={{ color: 'rgba(251,245,234,0.6)' }}>
              Fonoaudiología infantil · {BIZ.address}, {BIZ.city}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
              style={{ color: 'rgba(251,245,234,0.6)' }}
            >
              Google Maps
            </a>
          </div>
          <p className="text-[11px] leading-relaxed pt-2 border-t mt-2" style={{ color: 'rgba(251,245,234,0.5)', borderColor: 'rgba(251,245,234,0.14)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              Sitiazo
            </a>{' '}
            para {BIZ.name} · así se vería tu sitio. Fotos reales de su Instagram y Google Maps;
            textos y reseñas de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
