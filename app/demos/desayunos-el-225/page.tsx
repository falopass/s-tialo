import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL } from './content'

const display = localFont({
  src: '../../fonts/fraunces/normal-100-900.woff2',
  style: 'normal',
})
const displayItalic = localFont({
  src: '../../fonts/fraunces/italic-100-900.woff2',
  style: 'italic',
})
const body = localFont({
  src: '../../fonts/karla/normal-200-800.woff2',
  style: 'normal',
})

// El 225: la primera pará del día en la Panamericana. Crema de madrugada, la
// guirnalda de banderines rojo/blanco de su techo y serifa cálida de menú.
const C = {
  cream: '#FBF3E4',
  paper: '#FFFDF8',
  ink: '#33231A',
  red: '#C0392B',
  redDeep: '#8E2A20',
  dawn: '#E8862E',
  muted: '#7C6450',
  line: '#E8D9C2',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'desayunos-el-225',
  title: 'Desayunos "El 225" — la primera pará del día en la Panamericana',
  description:
    'Desayunos caseros en el km 225 de la Ruta 5 Sur, San Rafael: café de trigo, consomé de cortesía, pan casero y churrascas desde las 6 am.',
  image: '/demos/desayunos-el-225/hero.webp',
})

// La guirnalda de banderines del techo del local.
function Banderines({ flip = false }: { flip?: boolean }) {
  const flags = Array.from({ length: 24 })
  return (
    <div aria-hidden="true" className="relative overflow-hidden">
      <div className="h-[3px] w-full" style={{ backgroundColor: C.red }} />
      <div className="flex" style={{ transform: flip ? 'scaleY(-1)' : undefined }}>
        {flags.map((_, i) => (
          <div
            key={i}
            className="h-5 flex-1"
            style={{
              backgroundColor: i % 2 === 0 ? C.red : C.paper,
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const MESA = [
  {
    src: '/demos/desayunos-el-225/churrasco.webp',
    alt: 'Churrasca con palta y tomate servida en Desayunos El 225',
    titulo: 'La churrasca',
    nota: 'La que la gente nombra en las reseñas — con palta y tomate, en pan de la casa.',
  },
  {
    src: '/demos/desayunos-el-225/desayuno.webp',
    alt: 'Desayuno completo con consomé, huevo y pan en El 225 de San Rafael',
    titulo: 'El desayuno entero',
    nota: 'Consomé de cortesía para abrir, huevos de campo, café de trigo o Milo.',
  },
  {
    src: '/demos/desayunos-el-225/pan.webp',
    alt: 'Canasta de pan casero recién hecho en El 225',
    titulo: 'Pan recién hecho',
    nota: 'La canasta que llega tibia a la mesa — lo primero que se acaba.',
  },
]

const RESENAS = [
  {
    texto:
      'Un desayuno tradicional fantástico. ¡La churrasca estaba increíble!',
    nombre: 'Sofia Gancheva',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Churrasco, café caliente y consomé de cortesía. Precios accesibles, se paga con tarjeta y la atención es rápida y amable.',
    nombre: 'Ricardo Contardo Correa',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Leche de vaca, café de trigo, té de canela, pan casero, churrascas, huevos de campo… amplio estacionamiento y un ambiente que se siente como en casa.',
    nombre: 'Jaime Valdés',
    detalle: '5 estrellas en Google',
  },
]

const FOTOS = [
  { src: '/demos/desayunos-el-225/fachada.webp', alt: 'El local de El 225 visto desde la Panamericana al amanecer' },
  { src: '/demos/desayunos-el-225/mesa.webp', alt: 'El dueño de El 225 en su mesa con la tetera naranja' },
  { src: '/demos/desayunos-el-225/palta.webp', alt: 'Preparación con palta fresca en la cocina de El 225' },
  { src: '/demos/desayunos-el-225/ruta.webp', alt: 'La Ruta 5 Sur frente a El 225 en el kilómetro 225' },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '6:00 – 11:00' },
  { d: 'Sábado', h: '6:00 – 10:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={[
          { href: '#mesa', label: 'La mesa' },
          { href: '#resenas', label: 'Reseñas' },
          { href: '#para', label: 'La pará' },
        ]}
        waLink={WA_LINK}
        fontClass={`${display.className} text-lg`}
        theme={{
          over: 'light',
          bar: 'rgba(251,243,228,0.95)',
          ink: C.redDeep,
          line: C.line,
          btnBg: C.red,
          btnInk: C.paper,
        }}
        ctaLabel="WhatsApp"
      />

      {/* Hero — la primera pará del día */}
      <section className="relative overflow-hidden">
        <div className="pt-16 sm:pt-20">
          <Banderines />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-10 md:grid-cols-2 md:items-center md:pt-14">
          <div className="text-center md:text-left">
            <Reveal>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: C.red }}
              >
                Panamericana km 225 · San Rafael · solo mañanas
              </p>
              <h1
                className={`${display.className} mt-4 font-black leading-[0.98]`}
                style={{ fontSize: 'clamp(2.6rem, 10vw, 5rem)', fontVariationSettings: '"opsz" 144' }}
              >
                El desayuno
                <br />
                del{' '}
                <span className={`${displayItalic.className}`} style={{ color: C.red }}>
                  kilómetro 225
                </span>
              </h1>
            </Reveal>
            <Reveal delay={110}>
              <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed md:mx-0" style={{ color: C.muted }}>
                En la Ruta 5 Sur, antes de Talca, abren desde las seis: café de
                trigo, consomé de cortesía, pan casero y la churrasca que ya
                nombran en las reseñas.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Stars value={4.8} color={C.red} />
                <span className="text-xs font-bold" style={{ color: C.muted }}>
                  {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-[15px] font-extrabold uppercase tracking-wide"
                  style={{ backgroundColor: C.red, color: C.paper }}
                >
                  Avisar que vas
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 px-6 py-3 text-[15px] font-extrabold uppercase tracking-wide"
                  style={{ borderColor: C.red, color: C.red }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src="/demos/desayunos-el-225/hero.webp"
                alt="Interior de Desayunos El 225 con mesas y banderines rojos en el techo"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
                style={{ border: `6px solid ${C.paper}`, boxShadow: '0 18px 45px rgba(51,35,26,.18)' }}
              />
              <p
                className={`${displayItalic.className} absolute -bottom-5 left-5 rounded-full px-4 py-2 text-sm`}
                style={{ backgroundColor: C.red, color: C.paper }}
              >
                abierto desde las 6 am
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* La mesa — collage editorial de la mañana */}
      <section id="mesa" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal>
          <h2
            className={`${display.className} text-center font-black leading-none`}
            style={{ fontSize: 'clamp(2.1rem, 7vw, 3.8rem)' }}
          >
            Lo que llega{' '}
            <span className={displayItalic.className} style={{ color: C.red }}>
              a la mesa
            </span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <figure>
              <img
                src={MESA[0].src}
                alt={MESA[0].alt}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
                style={{ border: `5px solid ${C.paper}`, boxShadow: '0 14px 35px rgba(51,35,26,.14)' }}
              />
              <figcaption className="mt-3 px-1">
                <h3 className={`${display.className} text-xl font-black`}>{MESA[0].titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>
                  {MESA[0].nota}
                </p>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid content-start gap-6">
            {MESA.slice(1).map((m, i) => (
              <Reveal key={m.titulo} delay={100 + i * 90}>
                <figure className="grid grid-cols-[112px_1fr] items-center gap-4 sm:grid-cols-[150px_1fr]">
                  <img
                    src={m.src}
                    alt={m.alt}
                    className="aspect-square w-full rounded-2xl object-cover"
                    style={{ border: `5px solid ${C.paper}`, boxShadow: '0 10px 25px rgba(51,35,26,.12)' }}
                  />
                  <figcaption>
                    <h3 className={`${display.className} text-xl font-black`}>{m.titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>
                      {m.nota}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Banderines />

      {/* Reseñas — el diario de la mañana */}
      <section id="resenas" style={{ backgroundColor: C.paper }}>
        <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                className={`${display.className} font-black leading-none`}
                style={{ fontSize: 'clamp(2.1rem, 7vw, 3.8rem)' }}
              >
                Lo que dicen{' '}
                <span className={displayItalic.className} style={{ color: C.red }}>
                  los que paran
                </span>
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={4.8} color={C.red} />
                <span className="text-xs font-bold" style={{ color: C.muted }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <blockquote
                  className="border-t py-8"
                  style={{ borderColor: C.line, textAlign: i % 2 ? 'right' : 'left' }}
                >
                  <p
                    className={`${displayItalic.className} leading-snug`}
                    style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.9rem)' }}
                  >
                    “{r.texto}”
                  </p>
                  <footer className="mt-4">
                    <span className="text-sm font-extrabold uppercase tracking-wider">{r.nombre}</span>
                    <span className="ml-3 text-xs" style={{ color: C.muted }}>
                      {r.detalle}
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* De camino — la ruta y el local */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal>
          <h2
            className={`${display.className} font-black leading-none`}
            style={{ fontSize: 'clamp(2.1rem, 7vw, 3.8rem)' }}
          >
            De camino,{' '}
            <span className={displayItalic.className} style={{ color: C.red }}>
              al costado de la ruta
            </span>
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {FOTOS.map((f, i) => (
            <Reveal key={f.src} delay={i * 80}>
              <img
                src={f.src}
                alt={f.alt}
                className="aspect-[3/4] w-full rounded-2xl object-cover"
                style={{ border: `4px solid ${C.paper}`, boxShadow: '0 10px 25px rgba(51,35,26,.12)' }}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* La pará — amanecer, horario corto y mapa */}
      <section id="para" style={{ backgroundColor: C.paper }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <Reveal>
              <h2
                className={`${display.className} font-black leading-none`}
                style={{ fontSize: 'clamp(2.1rem, 7vw, 3.8rem)' }}
              >
                Solo{' '}
                <span className={displayItalic.className} style={{ color: C.red }}>
                  en la mañana
                </span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              {/* Sol de madrugada sobre la línea del horario */}
              <div aria-hidden="true" className="mt-8">
                <div className="relative mx-auto h-14 max-w-[280px] overflow-hidden">
                  <div
                    className="absolute left-1/2 top-2 h-24 w-24 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: C.dawn }}
                  />
                  <div className="absolute bottom-0 h-[3px] w-full" style={{ backgroundColor: C.ink }} />
                </div>
                <p className="mt-2 text-center text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.muted }}>
                  cuando el sol aún está bajo
                </p>
              </div>
              <dl className="mx-auto mt-8 max-w-sm space-y-3">
                {HORARIO.map((h) => (
                  <div
                    key={h.d}
                    className="flex items-baseline justify-between border-b pb-3"
                    style={{ borderColor: C.line }}
                  >
                    <dt className="text-[15px] font-bold">{h.d}</dt>
                    <dd
                      className="text-[15px] font-extrabold"
                      style={{ color: h.h === 'Cerrado' ? C.muted : C.red }}
                    >
                      {h.h}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 max-w-sm text-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}. Amplio estacionamiento para camiones y
                autos — la pará temprana de los que van por la ruta.
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-2xl" style={{ border: `5px solid ${C.cream}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="h-full min-h-[320px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Banderines flip />

      {/* Cierre — la invitación de la mañana */}
      <section style={{ backgroundColor: C.redDeep }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center md:py-18">
          <Reveal>
            <h2
              className={`${display.className} font-black leading-tight`}
              style={{ fontSize: 'clamp(2rem, 7.5vw, 3.8rem)', color: C.paper }}
            >
              Si pasas temprano por el 225,{' '}
              <span className={displayItalic.className}>ya está el café listo</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px]" style={{ color: '#FBEBDD' }}>
              Escribe por WhatsApp para avisar que vas o consultar qué hay hoy.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3 text-[15px] font-extrabold uppercase tracking-wide"
              style={{ backgroundColor: C.paper, color: C.redDeep }}
            >
              Escribir a El 225
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink }} className="px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <div>
            <p className={`${display.className} text-base font-black`} style={{ color: C.paper }}>{BIZ.name}</p>
            <p className="mt-1 text-xs" style={{ color: '#C9B6A4' }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
          </div>
          <nav className="flex gap-5 text-xs font-bold uppercase tracking-wider" style={{ color: C.paper }}>
            <a href="#mesa" className="hover:underline">La mesa</a>
            <a href="#resenas" className="hover:underline">Reseñas</a>
            <a href="#para" className="hover:underline">La pará</a>
          </nav>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
