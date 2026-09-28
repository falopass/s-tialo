import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_EXAMEN, MAPS_URL, MAPS_EMBED, FACEBOOK_URL, HOURS, FOTOS, IMG } from './content'

// El letrero real del local es una condensada bold en navy: Barlow Condensed le hace eco.
const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  paper: '#F5F3EB',
  card: '#FFFFFF',
  navy: '#20266B',
  deep: '#141A45',
  ink: '#262B3D',
  muted: '#575E6B',
  blue: '#1C5BB0',
  blueInk: '#1E66C8',
  blueLight: '#9DC5F5',
  gold: '#D99413',
  goldLight: '#F0B93C',
  line: 'rgba(32,38,107,0.16)',
  lineDark: 'rgba(255,255,255,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-oftalmologico-nacional',
  title: 'Centro Oftalmológico Nacional · Oftalmología y óptica en Talca',
  description:
    'Oftalmólogo y óptica en Calle 6 Oriente 1158, centro de Talca: consulta oftalmológica, medición de vista y armazones. Agenda por WhatsApp.',
  image: `${IMG}/vitrina-poster.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
]

// La cartilla del propio logo: las mismas filas de optotipo que usa el centro.
const OPTO_ROWS = [
  { letters: '4 M C', size: 'clamp(2.2rem,5.5vw,3.2rem)', track: '0.14em' },
  { letters: '8 2 O', size: 'clamp(1.7rem,4.4vw,2.5rem)', track: '0.16em' },
  { letters: '2 5 O', size: 'clamp(1.3rem,3.4vw,1.9rem)', track: '0.18em' },
  { letters: '3 4 O', size: 'clamp(1.02rem,2.6vw,1.42rem)', track: '0.2em' },
  { letters: '0 7 C', size: 'clamp(0.82rem,2vw,1.08rem)', track: '0.22em' },
]

const SERVICIOS = [
  {
    name: 'Consulta oftalmológica',
    desc: 'Atención con tecnólogos médicos con mención en oftalmología; según su descripción pública se puede pagar con bono FONASA.',
    note: 'agenda por WhatsApp',
    size: 'clamp(1.55rem,4.6vw,2.5rem)',
  },
  {
    name: 'Medición de vista',
    desc: 'Examen de refracción para saber si necesitas lentes y con qué graduación.',
    note: 'examen en el local',
    size: 'clamp(1.3rem,4vw,2.1rem)',
  },
  {
    name: 'Óptica y armazones',
    desc: 'La óptica del mismo centro: vitrina de armazones ópticos y lentes de sol, como se ve en sus fotos.',
    note: 'vitrina en el local',
    size: 'clamp(1.1rem,3.4vw,1.8rem)',
  },
  {
    name: 'Lentes a pedido',
    desc: 'Con tu receta o tu medición reciente, cotizas tus lentes directo por WhatsApp.',
    note: 'cotización directa',
    size: 'clamp(0.95rem,2.9vw,1.5rem)',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: light ? C.blueLight : C.blue }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function CentroOftalmologicoNacionalPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes enfocar {
          from { filter: blur(7px); opacity: 0.2 }
          to { filter: blur(0); opacity: 1 }
        }
        .enfoca { animation: enfocar 1.05s cubic-bezier(0.2,0.7,0.2,1) both }
        @media (prefers-reduced-motion: reduce) { .enfoca { animation: none } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(245,243,235,0.96)',
          ink: C.navy,
          line: C.line,
          btnBg: C.navy,
          btnInk: '#F5F3EB',
        }}
      />

      {/* ── Hero: titular + cartilla optotipo con fotos reales ── */}
      <section id="inicio" className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-[104px] pb-12 md:pb-16 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <Eyebrow>Oftalmólogo y óptica · Centro de Talca</Eyebrow>
            <h1
              className={`${display.className} uppercase font-bold leading-[0.98] tracking-[0.01em] text-[clamp(2.7rem,8.4vw,4.6rem)] mb-6`}
              style={{ color: C.navy }}
            >
              Ver bien parte
              <br />
              por medirse <span style={{ color: C.blueInk }}>la vista</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
              Consulta oftalmológica y óptica en Calle 6 Oriente 1158,
              en pleno centro de Talca. La agenda es directa: un mensaje
              y quedas con hora.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold text-sm md:text-base tracking-[0.04em] px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20266B] tap-44`}
                style={{ backgroundColor: C.navy, color: '#F5F3EB' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} uppercase font-bold text-sm md:text-base tracking-[0.04em] px-7 py-3 rounded-full border-2 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20266B] tap-44`}
                style={{ borderColor: C.navy, color: C.navy }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>

          {/* Cartilla + foto + mascota: composición propia del centro */}
          <Reveal delay={140}>
            <div className="relative max-w-[420px] mx-auto lg:mx-0 lg:ml-auto pt-6 pb-10 px-4">
              <figure
                className="absolute left-0 bottom-0 w-[46%] rounded-xl overflow-hidden border-4 border-white shadow-xl"
                style={{ transform: 'rotate(-5deg)' }}
              >
                <Image
                  src={`${IMG}/sol-vitrina.webp`}
                  alt="Repisa de vidrio con lentes de sol de colores en la óptica"
                  width={720}
                  height={720}
                  className="w-full h-auto block"
                />
              </figure>
              <div
                className="relative ml-auto w-[76%] rounded-2xl border bg-white p-5 md:p-6 select-none"
                style={{
                  borderColor: C.line,
                  transform: 'rotate(1.6deg)',
                  boxShadow: '0 18px 44px rgba(20,26,69,0.16)',
                }}
                role="img"
                aria-label="Cartilla de medición de vista con letras cada vez más pequeñas"
              >
                <p
                  className={`${mono.className} text-[10px] uppercase tracking-[0.26em] font-semibold mb-4 text-center`}
                  style={{ color: C.muted }}
                >
                  ¿Hasta qué línea lees?
                </p>
                {OPTO_ROWS.map((r, i) => (
                  <p
                    key={r.letters}
                    className={`${display.className} enfoca font-bold text-center leading-[1.28]`}
                    style={{ fontSize: r.size, letterSpacing: r.track, color: C.navy, animationDelay: `${160 + i * 130}ms` }}
                    aria-hidden="true"
                  >
                    {r.letters}
                  </p>
                ))}
                <div
                  className={`${mono.className} mt-4 pt-3 border-t text-[9px] md:text-[10px] uppercase tracking-[0.16em] font-semibold`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  <span>Medición de vista</span>
                </div>
              </div>
              <figure
                className="absolute right-0 -bottom-1 w-[34%] rounded-xl border-4 border-white bg-white shadow-xl overflow-hidden"
                style={{ transform: 'rotate(4deg)' }}
              >
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Logo del Centro Oftalmológico Nacional: mascota con lupa y cartilla de optotipo"
                  width={378}
                  height={378}
                  className="w-full h-auto block"
                />
              </figure>
            </div>
          </Reveal>
        </div>

        {/* Ficha real: rating, FONASA, desde 2012, dirección */}
        <div className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            <div className={`${mono.className} flex items-center gap-2 text-[11px] md:text-xs font-medium`} style={{ color: C.ink }}>
              <Stars value={BIZ.rating} color={C.gold} className="w-3.5 h-3.5" />
              <span>{BIZ.rating} en Google · {BIZ.reviews} reseñas</span>
            </div>
            <p className={`${mono.className} text-[11px] md:text-xs font-medium uppercase tracking-[0.1em] flex items-center`} style={{ color: C.muted }}>
              Bono FONASA
            </p>
            <p className={`${mono.className} text-[11px] md:text-xs font-medium uppercase tracking-[0.1em] flex items-center`} style={{ color: C.muted }}>
              Desde {BIZ.since}
            </p>
            <p className={`${mono.className} text-[11px] md:text-xs font-medium uppercase tracking-[0.1em] flex items-center`} style={{ color: C.muted }}>
              {BIZ.address}
            </p>
          </div>
        </div>
      </section>

      {/* ── Servicios: la cartilla de prestaciones ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_1.35fr] gap-10 md:gap-14 items-start">
          <Reveal className="lg:sticky lg:top-24">
            <h2 className={`${display.className} uppercase font-bold text-4xl md:text-5xl leading-[0.98] mb-5`} style={{ color: C.navy }}>
              De la medición
              <br />
              al armazón
            </h2>
            <p className="text-sm md:text-base max-w-md leading-relaxed mb-7" style={{ color: C.muted }}>
              Todo en el mismo local del centro de Talca: te miden la
              vista y a pasos eliges el armazón en la vitrina. El detalle
              y los precios se confirman al agendar.
            </p>
            <ul className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.12em] font-semibold space-y-2.5 mb-8`} style={{ color: C.navy }}>
              <li className="flex items-center gap-3">
                <span className="w-6 h-px" style={{ backgroundColor: C.blueInk }} aria-hidden="true" />
                Tecnólogos médicos en oftalmología
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-px" style={{ backgroundColor: C.blueInk }} aria-hidden="true" />
                Atención con bono FONASA
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-px" style={{ backgroundColor: C.blueInk }} aria-hidden="true" />
                Agenda directa por WhatsApp
              </li>
            </ul>
            <a
              href={WA_LINK_EXAMEN}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase font-bold text-sm md:text-base tracking-[0.04em] px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20266B] tap-44`}
              style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
            >
              Consultar por una medición
            </a>
          </Reveal>

          {/* Filas que achican como una cartilla real */}
          <ol className="rounded-2xl border bg-white overflow-hidden" style={{ borderColor: C.line, boxShadow: '0 14px 36px rgba(20,26,69,0.08)' }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <li
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[64px_1fr_auto] gap-x-4 md:gap-x-7 items-baseline px-5 md:px-8 py-6 md:py-7 border-b last:border-b-0"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em]`}
                    style={{ color: C.blue }}
                    aria-hidden="true"
                  >
                    línea {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className={`${display.className} uppercase font-bold leading-[1.02] mb-1.5`}
                      style={{ color: C.navy, fontSize: s.size }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-lg" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                  <span className={`${mono.className} hidden md:block text-[10px] uppercase tracking-[0.14em] font-medium text-right shrink-0 self-baseline`} style={{ color: C.muted }}>
                    {s.note}
                  </span>
                </li>
              </Reveal>
            ))}
            <li className="px-5 md:px-8 py-4 list-none" style={{ backgroundColor: '#FAF8F1' }}>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-medium`} style={{ color: C.muted }}>
                ¿Leíste hasta la última línea? Así de simple es agendar.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── La vitrina: fotos reales del local en tira ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
          <Reveal>
            <Eyebrow light>La vitrina</Eyebrow>
            <h2 className={`${display.className} uppercase font-bold text-4xl md:text-5xl leading-[0.98] mb-4`} style={{ color: '#FFFFFF' }}>
              Los lentes,
              <br />
              <span style={{ color: C.blueLight }}>tal como están en el local</span>
            </h2>
            <p className="text-sm md:text-base max-w-xl leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Fotos reales de la vitrina, publicadas por el centro en su
              página de Facebook. Los modelos y el stock se ven en el
              local o preguntando por WhatsApp.
            </p>
          </Reveal>
          <ul
            className="flex gap-4 md:gap-5 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'thin' }}
            aria-label="Fotos reales de la vitrina de la óptica"
          >
            {FOTOS.map((f, i) => (
              <li key={f.src} className="snap-start shrink-0 w-[240px] md:w-[290px]">
                <Reveal delay={i * 60}>
                  <figure>
                    <div className="relative aspect-square rounded-xl overflow-hidden border" style={{ borderColor: C.lineDark }}>
                      <Image
                        src={`${IMG}/${f.src}.webp`}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 768px) 290px, 240px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className={`${mono.className} mt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-medium`}
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      {f.cap}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={120}>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-5 text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9DC5F5] tap-44`}
              style={{ color: C.blueLight }}
            >
              Más fotos en su Facebook →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La ficha de Google, honesta ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="rounded-2xl border overflow-hidden grid lg:grid-cols-[1fr_1.4fr]" style={{ borderColor: C.line, backgroundColor: C.card, boxShadow: '0 14px 36px rgba(20,26,69,0.08)' }}>
              <div className="p-7 md:p-10 flex flex-col justify-center" style={{ backgroundColor: C.navy }}>
                <p className={`${display.className} uppercase font-bold leading-none text-[clamp(3.4rem,9vw,5.2rem)]`} style={{ color: '#FFFFFF' }}>
                  {BIZ.rating}
                </p>
                <Stars value={BIZ.rating} color={C.goldLight} className="w-5 h-5 mt-3" />
                <p className={`${mono.className} mt-4 text-[11px] md:text-xs uppercase tracking-[0.14em] font-semibold`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {BIZ.reviews} reseñas en Google Maps
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} mt-5 text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44`}
                  style={{ color: C.blueLight }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <h2 className={`${display.className} uppercase font-bold text-3xl md:text-4xl leading-[1.0] mb-4`} style={{ color: C.navy }}>
                  La ficha es pública y los pacientes la leen
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.muted }}>
                  Quien busca un oftalmólogo en Talca encuentra esta ficha
                  primero: suma {BIZ.reviews} reseñas, con dos de 5
                  estrellas y reclamos que quedaron sin respuesta.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.ink }}>
                  Un sitio propio ordena esa primera impresión: fotos del
                  local, servicios claros y agenda directa.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Horarios y el letrero real ── */}
      <section id="horarios" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} uppercase font-bold text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: C.navy }}>
              Oficina 11,
              <br />
              segundo piso de la 6 Oriente
            </h2>
            <div
              className="rounded-xl overflow-hidden mb-7"
              style={{ backgroundColor: C.deep, boxShadow: '0 14px 36px rgba(20,26,69,0.18)' }}
            >
              <p className={`${mono.className} px-5 pt-4 pb-1 text-[10px] uppercase tracking-[0.22em] font-semibold`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                Horario de la ficha
              </p>
              <dl>
                {HOURS.map((h) => (
                  <div key={h.d} className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b last:border-b-0" style={{ borderColor: C.lineDark }}>
                    <dt className={`${display.className} uppercase font-bold text-lg md:text-xl tracking-[0.02em]`} style={{ color: '#FFFFFF' }}>{h.d}</dt>
                    <dd className={`${mono.className} text-xs md:text-sm text-right font-medium`} style={{ color: C.blueLight }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.muted }}>
              <strong className="block mb-1 font-semibold" style={{ color: C.ink }}>{BIZ.address}, {BIZ.city}</strong>
              Segundo piso del edificio, en pleno centro.
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} underline underline-offset-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C5BB0] tap-44`} style={{ color: C.blue }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold text-sm tracking-[0.04em] px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20266B] tap-44`}
                style={{ backgroundColor: C.navy, color: '#F5F3EB' }}
              >
                Agendar hora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold text-sm tracking-[0.04em] px-6 py-3 rounded-full border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20266B] tap-44`}
                style={{ borderColor: C.navy, color: C.navy }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="space-y-5">
              <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line, boxShadow: '0 14px 36px rgba(20,26,69,0.10)' }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Letrero luminoso del Centro Oftalmológico Nacional en Calle 6 Oriente, Talca"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} px-5 py-3.5 text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-medium`} style={{ backgroundColor: C.card, color: C.muted }}>
                  El letrero real, publicado en su Facebook
                </figcaption>
              </figure>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[280px] md:h-[320px] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contacto" style={{ backgroundColor: C.deep, color: '#F5F3EB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-5">
            <div>
              <p className={`${display.className} uppercase font-bold text-xl tracking-[0.02em] mb-1`}>{BIZ.name}</p>
              <p className="text-xs" style={{ color: 'rgba(245,243,235,0.65)' }}>
                {BIZ.rubro}
                <br />
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(245,243,235,0.65)' }}>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-semibold mb-2`} style={{ color: 'rgba(245,243,235,0.9)' }}>Contacto</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9DC5F5] tap-44" style={{ color: C.blueLight }}>
                WhatsApp {BIZ.phoneDisplay}
              </a>
              <br />
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9DC5F5] tap-44" style={{ color: C.blueLight }}>
                Facebook del centro
              </a>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] mt-6 pt-4 border-t uppercase tracking-[0.12em]`} style={{ color: 'rgba(245,243,235,0.62)', borderColor: 'rgba(255,255,255,0.12)' }}>
            Sitio de ejemplo por Sitiazo con datos públicos de Google y el Facebook del centro
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
