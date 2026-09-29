import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LOCAL, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700' },
  ],
  variable: '--f-d',
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
  variable: '--f-b',
})

export const metadata: Metadata = demoMetadata({
  slug: 'dulcitos-talca',
  title: 'Dulcitos Talca · El pan brioche de Talca',
  description:
    'Panadería y pastelería venezolana en 14 Oriente, Talca. Pan brioche, cachitos, berlines y pan para locales de comida rápida del Maule.',
  image: `${IMG}/fachada.webp`,
})

// Naranja del logo y de la fachada; el acento de texto va oscuro para
// que el contraste en móvil pase 4.5:1.
const C = {
  paper: '#fff8ee',
  ink: '#241a10',
  muted: 'rgba(36,26,16,0.72)',
  accent: '#b03c0c',
  accentSoft: '#ff7a2e',
  accentInk: '#fff8ee',
  soft: '#f9ead2',
  line: '#eeddc0',
  deep: '#241a10',
  deepMuted: 'rgba(255,248,238,0.72)',
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Pan para tu local', href: '#locales' },
  { label: 'Los dueños', href: '#historia' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const VITRINA = [
  { src: 'palmeritas.webp', alt: 'Palmeritas recién horneadas' },
  { src: 'berlines-crema.webp', alt: 'Berlines rellenos de crema' },
  { src: 'rolls-canela.webp', alt: 'Rolls de canela glaseados' },
  { src: 'pan-dulce.webp', alt: 'Pan dulce y palmerita en bandeja' },
  { src: 'brioche-bandeja.webp', alt: 'Pan brioche saliendo en bandeja' },
  { src: 'cachitos.webp', alt: 'Cachitos venezolanos' },
]

const MOSTRADOR = [
  {
    src: 'pan-horno.webp',
    name: 'Pan brioche',
    desc: 'Suave, dorado y resistente: el que usan los mejores sanguches de Talca. Apto para congelar.',
  },
  {
    src: 'cachitos.webp',
    name: 'Cachitos',
    desc: 'El clásico venezolano, recién salido del horno.',
  },
  {
    src: 'berlines-crema.webp',
    name: 'Berlines rellenos',
    desc: 'De crema y de chocolate, con su azúcar encima.',
  },
  {
    src: 'palmeritas.webp',
    name: 'Palmeritas y pan dulce',
    desc: 'Crujientes por fuera, perfectas para la once.',
  },
  {
    src: 'rolls-canela.webp',
    name: 'Rolls de canela',
    desc: 'Con glaseado, para acompañar el café.',
  },
  {
    src: 'torta-zanahoria.webp',
    name: 'Torta de zanahoria',
    desc: 'Con frosting de queso crema, por pedazo o entera.',
  },
]

const RESENAS = [
  {
    q: 'Excelente lugar, muy agradable, buenos precios. La tienda es muy limpia y ordenada.',
    who: 'Alexander Liendo',
  },
  {
    q: 'Panadería que contiene todo lo que necesitas, voy todos los días. 100% recomendados, los mejores de Talca.',
    who: 'Antzaleivis Barreto',
  },
  {
    q: 'Bonito lugar, limpio, variedad de productos.',
    who: 'David Useche',
  },
]

function Franja() {
  // Toldo naranja-crema, solo CSS.
  return (
    <div
      aria-hidden="true"
      className="h-4 md:h-5"
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${C.accentSoft} 0 22px, ${C.paper} 22px 44px)`,
      }}
    />
  )
}

export default function Page() {
  return (
    <main
      className={`${display.variable} ${body.variable}`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--f-b)' }}
    >
      <BlitzNav
        name="Dulcitos Talca"
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.accent,
          btnInk: C.accentInk,
        }}
      />

      {/* Hero: titular gigante + polaroids de fachada y pan */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-8 md:pb-12 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p
                className="text-xs md:text-sm font-bold tracking-[0.22em] uppercase"
                style={{ color: C.accent }}
              >
                Panadería · Pastelería · Minimarket · Talca
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-2 text-5xl md:text-7xl leading-[0.98] uppercase"
                style={{ fontFamily: 'var(--f-d)', fontWeight: 700 }}
              >
                El pan brioche de Talca
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Horneamos de lunes a sábado en 14 Oriente, diagonal al Hospital
                Regional. Venezolanos haciendo el pan de los talquinos.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-transform active:scale-95"
                  style={{ backgroundColor: C.accent, color: C.accentInk }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href="#vitrina"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver la vitrina
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold" style={{ color: C.muted }}>
                <Stars value={BIZ.rating} color={C.accentSoft} className="w-3.5 h-3.5" />
                <span>5,0 en Google · {BIZ.reviews} opiniones</span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={140}>
              <div className="relative">
                <img
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada naranja de Dulcitos Talca en Catorce Oriente 1150"
                  className="w-full aspect-[4/3] object-cover rounded-xl border-2 rotate-[1.5deg] shadow-md"
                  style={{ borderColor: C.ink }}
                />
                <img
                  src={`${IMG}/brioche-bandeja.webp`}
                  alt="Bandeja de panes brioche dorados"
                  className="w-2/3 aspect-square object-cover rounded-xl border-2 rotate-[-2deg] shadow-md ml-auto -mt-14 md:-mt-16 mr-2"
                  style={{ borderColor: C.ink }}
                />
              </div>
            </Reveal>
          </div>
        </div>
        <Franja />
      </section>

      {/* Vitrina: cinta de fotos del mostrador */}
      <section id="vitrina" className="scroll-mt-20">
        <div className="overflow-hidden py-5 md:py-7" aria-hidden="true">
          <style>{'@keyframes dul-vitrina{to{transform:translateX(-50%)}}'}</style>
          <div
            className="flex w-max gap-3 md:gap-4"
            style={{ animation: 'dul-vitrina 34s linear infinite' }}
          >
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-3 md:gap-4 shrink-0">
                {VITRINA.map((f) => (
                  <img
                    key={f.src}
                    src={`${IMG}/${f.src}`}
                    alt={f.alt}
                    className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-xl border-2"
                    style={{ borderColor: C.ink }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Del mostrador: productos */}
      <section id="mostrador">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2
              className="text-4xl md:text-6xl uppercase leading-[0.95]"
              style={{ fontFamily: 'var(--f-d)', fontWeight: 700 }}
            >
              Del mostrador
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {MOSTRADOR.map((p, i) => (
              <Reveal key={p.src} delay={i * 60}>
                <div
                  className="h-full rounded-2xl border-2 overflow-hidden"
                  style={{ borderColor: C.ink, backgroundColor: '#fffdf8' }}
                >
                  <img
                    src={`${IMG}/${p.src}`}
                    alt={p.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3 md:p-4">
                    <h3
                      className="text-lg md:text-2xl uppercase leading-tight"
                      style={{ fontFamily: 'var(--f-d)', fontWeight: 400 }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm leading-snug" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 text-sm md:text-base" style={{ color: C.muted }}>
              Y también: masas para empanadas, torta de piña venezolana, berlines,
              mini tortas y la alacena del minimarket.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pan para locales: bloque oscuro */}
      <section id="locales" className="scroll-mt-20" style={{ backgroundColor: C.deep, color: C.accentInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <h2
                className="text-4xl md:text-6xl uppercase leading-[0.95]"
                style={{ fontFamily: 'var(--f-d)', fontWeight: 700 }}
              >
                ¿Tienes un local? Horneamos tu pan
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.deepMuted }}>
                Dulcitos ya abastece locales de comida rápida, cafeterías y
                pastelerías, y despacha a Talca, Linares y alrededores. Cuéntanos
                tu volumen y te cotizamos.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <a
                href={WA_LOCAL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-transform active:scale-95"
                style={{ backgroundColor: C.accentSoft, color: C.ink }}
              >
                Cotizar pan para mi local
              </a>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <img
                src={`${IMG}/pan-horno.webp`}
                alt="Panes brioche entrando al horno en Dulcitos Talca"
                className="w-full aspect-[4/3] object-cover rounded-xl border-2 rotate-[-1.5deg]"
                style={{ borderColor: C.accentSoft }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <img
                src={`${IMG}/dueno-pancito.webp`}
                alt="El dueño de Dulcitos mostrando sus pancitos recién hechos"
                className="w-full aspect-[4/5] object-cover rounded-xl border-2 rotate-[1.5deg]"
                style={{ borderColor: C.ink }}
              />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <h2
                className="text-4xl md:text-6xl uppercase leading-[0.95]"
                style={{ fontFamily: 'var(--f-d)', fontWeight: 700 }}
              >
                Una pareja venezolana, un horno en Talca
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Llegaron a Chile en 2017 y montaron esta panadería en el CREA.
                Hoy son parte del barrio: auspician al equipo de sóftbol Rookies
                de Talca y responden una por una las reseñas de Google.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <blockquote
                className="mt-6 rounded-2xl border-l-4 p-4 md:p-5 text-base md:text-lg italic leading-relaxed"
                style={{ borderColor: C.accentSoft, backgroundColor: C.soft, color: C.ink }}
              >
                “Nuestros precios son resultado de materia prima de primera y un
                proceso de trabajo cuidadoso y detallado.”
                <span className="block mt-2 text-xs not-italic font-semibold uppercase tracking-wide" style={{ color: C.accent }}>
                  Los dueños, respondiendo una reseña
                </span>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reseñas */}
      <section style={{ backgroundColor: C.soft }}>
        <Franja />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.accent} className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">
                5,0 en Google · {BIZ.reviews} opiniones
              </span>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.who} delay={i * 80}>
                <figure
                  className="h-full rounded-2xl border-2 p-5"
                  style={{ borderColor: C.ink, backgroundColor: C.paper }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed font-medium">
                    “{r.q}”
                  </blockquote>
                  <figcaption
                    className="mt-4 text-xs font-bold uppercase tracking-[0.14em]"
                    style={{ color: C.accent }}
                  >
                    {r.who}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
        <Franja />
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <h2
                className="text-4xl md:text-6xl uppercase leading-[0.95]"
                style={{ fontFamily: 'var(--f-d)', fontWeight: 700 }}
              >
                Diagonal al Hospital
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}: {BIZ.addressNote}. Abre de {BIZ.hours}.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-5 space-y-2 text-sm md:text-base">
                <p>
                  <span className="font-bold">WhatsApp: </span>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    {BIZ.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="font-bold">Instagram: </span>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    {BIZ.instagramUser}
                  </a>
                </p>
                <p>
                  <span className="font-bold">Mapa: </span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    Ver en Google Maps
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-xl border-2" style={{ borderColor: C.ink }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.fullName} en el CREA, Talca`}
                  className="w-full h-[280px] md:h-[360px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer compacto */}
      <footer className="border-t-2" style={{ borderColor: C.ink }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide"
          style={{ color: C.muted }}
        >
          <span>
            {BIZ.fullName} · {BIZ.address}
          </span>
          <span>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: C.accent }}>
              WhatsApp
            </a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" style={{ color: C.accent }}>
              Instagram
            </a>
          </span>
        </div>
      </footer>

      <DemoBand name={BIZ.fullName} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.fullName} por WhatsApp`} />
    </main>
  )
}
