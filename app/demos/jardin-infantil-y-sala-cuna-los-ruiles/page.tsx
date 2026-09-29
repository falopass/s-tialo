import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-mono',
})

// Identidad desde su logo real: copas verdes, figuras azul marino, wordmark rojo.
const C = {
  cream: '#FAF5E8',
  creamSoft: '#F1EADA',
  forest: '#2E5B34',
  forestDeep: '#1E3E23',
  leaf: '#7FB54A',
  navy: '#2A3D8F',
  red: '#D8412F',
  redDeep: '#9C2818',
  leafBright: '#A9D46F',
  ink: '#26331F',
  muted: '#5F6D55',
  line: 'rgba(46,91,52,0.22)',
  lineDark: 'rgba(255,255,255,0.18)',
  white: '#FFFEFA',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jardin-infantil-y-sala-cuna-los-ruiles',
  title: 'Jardín Los Ruiles — sala cuna y jardín infantil en 3 Oriente 2080, Talca',
  description:
    'Jardín Infantil y Sala Cuna Los Ruiles en 3 Oriente 2080, Talca. Cerca de 30 años educando con exploración sensorial. L–V 7:30 a 18:00. WhatsApp +56 9 9673 8744.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Un día aquí', href: '#undia' },
  { label: 'El patio', href: '#patio' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

// Momentos del día: las horas reales son acogida 7:30 y salida 18:00 (su ficha).
const DIA = [
  {
    hora: '7:30',
    t: 'Acogida en la puerta',
    d: 'El jardín abre temprano para las familias que trabajan. Cada niño llega con su nombre, su ritmo y su rutina.',
    src: `${IMG}/hero.webp`,
    alt: 'Fachada real del Jardín Los Ruiles en 3 Oriente, Talca',
    blob: '58% 42% 55% 45% / 48% 56% 44% 52%',
  },
  {
    hora: 'mañana',
    t: 'Sala cuna a su propio tiempo',
    d: 'Dos clases activas de sala cuna: espacios suaves, exploración sensorial y apego tranquilo con sus educadoras.',
    src: `${IMG}/salacuna.webp`,
    alt: 'Bebés de la sala cuna jugando en el espacio interior del jardín',
    blob: '45% 55% 50% 50% / 55% 45% 55% 45%',
  },
  {
    hora: 'media mañana',
    t: 'Explorar para aprender',
    d: 'Escenografías de aprendizaje y juego sensorial: el jardín se transforma en nave espacial, selva o taller.',
    src: `${IMG}/aprendizaje.webp`,
    alt: 'Sala de escenografías de aprendizaje ambientada como espacio',
    blob: '52% 48% 60% 40% / 45% 55% 45% 55%',
  },
  {
    hora: 'mediodía',
    t: 'Almuerzo en familia',
    d: 'Comedor propio con alimentación pensada para ellos: sentarse juntos también es parte de la rutina.',
    src: `${IMG}/almuerzo.webp`,
    alt: 'Bandeja de almuerzo real del jardín con comida casera',
    blob: '48% 52% 44% 56% / 56% 44% 56% 44%',
  },
  {
    hora: 'tarde',
    t: 'El patio manda',
    d: 'Rieles, juegos de madera y espacio abierto para correr, trepar y ensuciarse las manos.',
    src: `${IMG}/patio.webp`,
    alt: 'Niños jugando en la estructura de madera del patio del jardín',
    blob: '55% 45% 48% 52% / 50% 50% 50% 50%',
  },
  {
    hora: '18:00',
    t: 'Salida con cuento',
    d: 'Cada familia se lleva el resumen del día: qué comió, con quién jugó y qué descubrió.',
    src: `${IMG}/fiestas.webp`,
    alt: 'Niños del jardín en una celebración con trajes típicos',
    blob: '42% 58% 50% 50% / 58% 42% 58% 42%',
  },
]

const RESENAS = [
  {
    t: 'El jardín infantil Los Ruiles ha sido la mejor experiencia que he tenido como madre.',
    a: 'patricia aravena · google',
  },
  {
    t: 'Maravillosa experiencia.',
    a: 'eva vera · google',
  },
  {
    t: 'Muy buen jardín.',
    a: 'kuroro asakura · google',
  },
]

// Hojas de ruil para el patrón del hero.
function Hoja({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" aria-hidden="true">
      <path
        d="M12 2.5c4.8 3.2 7.2 6.9 7.2 10.4a7.2 7.2 0 0 1-14.4 0C4.8 9.4 7.2 5.7 12 2.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 7v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function JardinLosRuiles() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-bold leading-none`}>
            Los Ruiles
            <span className={`${mono.className} hidden sm:inline text-[10px] font-normal uppercase tracking-widest ml-2 opacity-70`}>
              jardín · sala cuna
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/avatar.webp`}
        theme={{ over: 'light', bar: C.cream, ink: C.ink, line: C.line, btnBg: C.forest, btnInk: C.white }}
      />

      {/* ── HERO: bajo los ruiles ────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-20">
        <Hoja className="absolute w-16 h-16 rotate-12 opacity-[0.12] top-24 left-[6%]" style={{ color: C.leaf }} />
        <Hoja className="absolute w-10 h-10 -rotate-12 opacity-[0.12] top-[46%] left-[42%]" style={{ color: C.forest }} />
        <Hoja className="absolute w-20 h-20 rotate-45 opacity-[0.1] bottom-8 left-[12%]" style={{ color: C.leaf }} />
        <Hoja className="absolute w-12 h-12 rotate-[160deg] opacity-[0.1] top-32 right-[8%]" style={{ color: C.forest }} />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <Reveal>
              <Image
                src={`${IMG}/logo-horizontal.webp`}
                alt="Logo real del Jardín Infantil y Sala Cuna Los Ruiles"
                width={570}
                height={143}
                className="w-40 md:w-48 h-auto mb-6"
                priority
              />
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} font-bold text-[13vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight`}
                style={{ color: C.forest }}
              >
                El jardín
                <br />
                de 3 Oriente
                <br />
                <span style={{ color: C.navy }}>donde se crece</span>
                <br />
                <span style={{ color: C.redDeep }}>jugando.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Jardín infantil y sala cuna en Talca, con cerca de 30 años de
                trayectoria educando desde la exploración y el desarrollo sensorial.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-4 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.redDeep} className="w-4 h-4" />
                <span className={`${mono.className} text-sm`} style={{ color: C.ink }}>
                  4,9 en Google
                </span>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold transition-transform active:scale-95`}
                  style={{ backgroundColor: C.forest, color: C.white }}
                >
                  WhatsApp {BIZ.whatsappDisplay}
                </a>
                <a
                  href={CALL_LINK}
                  className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold border-2 transition-transform active:scale-95`}
                  style={{ borderColor: C.forest, color: C.forest }}
                >
                  Llamar
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 relative">
            <Reveal delay={200}>
              <div
                className="overflow-hidden border-4"
                style={{ borderColor: C.leaf, borderRadius: '54% 46% 58% 42% / 46% 52% 48% 54%' }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Fachada real del Jardín Los Ruiles: entrada con rejas verdes y árboles en 3 Oriente, Talca"
                  width={1150}
                  height={863}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['sala cuna desde 0 años', 'abre 7:30', `${BIZ.years} de trayectoria`].map((ch) => (
                  <span
                    key={ch}
                    className={`${mono.className} text-[11px] md:text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border`}
                    style={{ color: C.forest, borderColor: C.line, backgroundColor: C.white }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── UN DÍA EN EL JARDÍN (sendero con fotos orgánicas) ── */}
      <section id="undia" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em] mb-3`} style={{ color: C.redDeep }}>
              sendero del día · 7:30 a 18:00
            </p>
            <h2
              className={`${display.className} font-bold text-4xl md:text-6xl leading-[0.98] tracking-tight mb-4 md:mb-6 max-w-2xl`}
              style={{ color: C.forest }}
            >
              Un día en Los Ruiles,
              <br />
              paso a paso
            </h2>
          </Reveal>
          <div className="relative mt-8 md:mt-12">
            {/* sendero punteado */}
            <div
              aria-hidden="true"
              className="absolute left-[13px] md:left-1/2 top-0 bottom-0 border-l-2 border-dashed md:-translate-x-px"
              style={{ borderColor: C.leaf }}
            />
            <div className="space-y-10 md:space-y-0">
              {DIA.map((m, i) => (
                <Reveal key={m.t} delay={i * 60}>
                  <div
                    className={`relative md:grid md:grid-cols-2 md:gap-12 items-center md:py-6 pl-12 md:pl-0 ${
                      i % 2 === 0 ? '' : 'md:[direction:rtl]'
                    }`}
                  >
                    {/* punto del sendero */}
                    <span
                      aria-hidden="true"
                      className="absolute left-[6px] md:left-1/2 top-1 md:top-1/2 w-4 h-4 rounded-full border-4 md:-translate-x-1/2 md:-translate-y-1/2"
                      style={{ backgroundColor: C.cream, borderColor: C.forest }}
                    />
                    <div className={i % 2 === 0 ? 'md:pr-6 md:[direction:ltr]' : 'md:pl-6 md:[direction:ltr]'}>
                      <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-2`} style={{ color: C.redDeep }}>
                        {m.hora}
                      </p>
                      <h3 className={`${display.className} text-2xl md:text-3xl font-bold leading-tight`} style={{ color: C.forest }}>
                        {m.t}
                      </h3>
                      <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                        {m.d}
                      </p>
                    </div>
                    <div className={`mt-4 md:mt-0 ${i % 2 === 0 ? 'md:pl-6 md:[direction:ltr]' : 'md:pr-6 md:[direction:ltr]'}`}>
                      <div className="overflow-hidden" style={{ borderRadius: m.blob }}>
                        <Image
                          src={m.src}
                          alt={m.alt}
                          width={900}
                          height={700}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EL EQUIPO ─────────────────────────────────────────── */}
      <section id="patio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <Reveal>
              <div className="rounded-[2rem] overflow-hidden border-4" style={{ borderColor: C.leaf }}>
                <Image
                  src={`${IMG}/educadoras.webp`}
                  alt="Educadoras del jardín junto a niños de la sala cuna"
                  width={1000}
                  height={546}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className={`${mono.className} mt-3 text-xs`} style={{ color: C.muted }}>
                foto real de su sitio oficial · losruiles.cl
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <Reveal>
              <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em] mb-3`} style={{ color: C.redDeep }}>
                el equipo
              </p>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[0.98] tracking-tight`} style={{ color: C.forest }}>
                Educadoras que
                <br />
                conocen a cada niño
                <br />
                <span style={{ color: C.navy }}>por su nombre</span>
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Con cerca de tres décadas en Talca, Los Ruiles acoge a niños de
                sala cuna hasta nivel medio mayor, en una casa pensada para
                explorar, comer rico y descansar.
              </p>
              <ul className="mt-6 space-y-2.5">
                {['sala cuna con 2 clases activas', 'enfoque en desarrollo sensorial', 'comedor con alimentación casera'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Hoja className="w-5 h-5 shrink-0" style={{ color: C.leaf }} />
                    <span className={`${display.className} text-base md:text-lg font-semibold`} style={{ color: C.ink }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── OPINIONES ─────────────────────────────────────────── */}
      <section id="opiniones" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.forestDeep, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Reveal>
                <p className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.leafBright }}>
                  opiniones reales
                </p>
                <p className={`${display.className} mt-5 font-bold text-7xl md:text-8xl leading-none`}>4,9</p>
                <Stars value={BIZ.rating} color={C.leafBright} className="w-5 h-5 mt-4" />
                <p className={`${mono.className} mt-3 text-xs uppercase tracking-wider`} style={{ color: C.leafBright }}>
                  nota en google
                </p>
                <h2 className={`${display.className} mt-8 font-bold text-3xl md:text-4xl tracking-tight leading-[1.02]`}>
                  Las familias
                  <br />
                  lo dicen mejor
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8 space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 70}>
                  <blockquote
                    className="p-5 md:p-6 rounded-3xl border"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: C.lineDark }}
                  >
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      “{r.t}”
                    </p>
                    <footer className={`${mono.className} mt-3 text-xs uppercase tracking-wider`} style={{ color: C.leafBright }}>
                      — {r.a}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ───────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em] mb-3`} style={{ color: C.redDeep }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[0.98] tracking-tight mb-10`} style={{ color: C.forest }}>
            Ven a conocer
            <br />
            el jardín
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <div className="h-full p-6 md:p-8 rounded-3xl border-2" style={{ borderColor: C.forest, backgroundColor: C.white }}>
              <ul className="space-y-4">
                {[
                  ['dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['horario', BIZ.hours],
                  ['teléfono', BIZ.phoneDisplay],
                  ['whatsapp', BIZ.whatsappDisplay],
                  ['correo', BIZ.email],
                ].map(([k, v]) => (
                  <li key={k} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className={`${mono.className} w-20 shrink-0 text-xs uppercase tracking-wider`} style={{ color: C.redDeep }}>
                      {k}
                    </span>
                    <span className={`${display.className} text-base md:text-lg font-bold`} style={{ color: C.ink }}>
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold transition-transform active:scale-95`}
                  style={{ backgroundColor: C.forest, color: C.white }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tap-44 inline-flex items-center px-6 py-3 rounded-full text-base font-bold border-2 transition-transform active:scale-95`}
                  style={{ borderColor: C.forest, color: C.forest }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[280px] rounded-3xl overflow-hidden border-2" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[280px] border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CIERRE ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <Hoja className="w-10 h-10 mx-auto mb-4" style={{ color: C.leaf }} />
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[0.98] tracking-tight`} style={{ color: C.forest }}>
              Bajo los ruiles,
              <br />
              <span style={{ color: C.redDeep }}>crecen felices.</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tap-44 inline-flex items-center px-7 py-3 rounded-full text-base font-bold transition-transform active:scale-95`}
                style={{ backgroundColor: C.forest, color: C.white }}
              >
                Agendar visita por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.forestDeep, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t-2 border-dashed" style={{ borderColor: C.lineDark }}>
          <div>
            <p className={`${display.className} text-xl md:text-2xl font-bold mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos y momentos del día son de muestra; el nombre,
            la dirección, el teléfono, el WhatsApp, el correo, el horario, la
            nota de Google, las reseñas citadas y las fotos son datos públicos
            reales de su ficha y de losruiles.cl.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
