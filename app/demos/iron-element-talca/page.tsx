import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  base: '#0E0D0A',
  panel: '#171510',
  panelHi: '#1F1C14',
  ink: '#F3EFE4',
  muted: 'rgba(243,239,228,0.66)',
  faint: 'rgba(243,239,228,0.6)',
  amber: '#F5B81E',
  amberInk: '#241A02',
  line: 'rgba(243,239,228,0.14)',
  lineHi: 'rgba(245,184,30,0.4)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'iron-element-talca',
  title: 'Iron Element — Gimnasio en 6 Oriente, Talca',
  description:
    'Gimnasio en Calle 6 Oriente 820, Talca: 4.9 estrellas en Google, máquinas nuevas y planes desde $24.990. Consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La sala', href: '#sala' },
  { label: 'Planes', href: '#planes' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const TICKER = ['PESO LIBRE', 'MÁQUINAS NUEVAS', 'CARDIO', 'FUNCIONAL', 'POLEAS', 'SE ENTRENA DURO']

const ZONAS = [
  { src: 'fuerza', zona: 'zona de fuerza', nota: 'press y peso libre', big: true },
  { src: 'maquinas', zona: 'estaciones de polea', nota: 'trabajo guiado' },
  { src: 'cardio', zona: 'cardio', nota: 'bikes y elípticas' },
  { src: 'detalle', zona: 'máquinas nuevas', nota: 'renovado 2025' },
]

const STATS = [
  { k: '4.9', d: 'nota en Google · 26 reseñas' },
  { k: '9.902', d: 'seguidores en Instagram' },
  { k: '7–23', d: 'horario lunes a viernes' },
]

const RESENAS = [
  {
    nombre: 'Ray el Aventurero',
    fecha: 'Hace 10 meses',
    texto:
      'El mejor ambiente para entrenar en Talca. Tiene un ambiente motivador, lleno de energía y con gente enfocada en mejorar. Las máquinas y pesas están en excelente estado, bien distribuidas y pensadas para todo tipo de rutinas: fuerza, resistencia.',
  },
  {
    nombre: 'Iris',
    fecha: 'Hace 4 meses',
    texto:
      'Jamás había logrado estar tanto tiempo en un gym: máquinas nuevas, profes cercanos, pendientes de ti en todo momento, ambiente acogedor, jamás malos olores, 3 baños a disposición. Totalmente recomendable.',
  },
  {
    nombre: 'John Alfonso K.',
    fecha: 'Hace 8 meses',
    texto:
      'Se merece las 5 estrellas. Los asistentes siempre con buena voluntad y todos muy atentos. Me gusta bastante el ambiente y todas las máquinas son excelentes. Excelente lugar.',
  },
]

const HORARIO = [
  { dias: 'Lunes a viernes', horas: '7:00 – 23:00' },
  { dias: 'Sábado', horas: '11:30 – 16:00' },
  { dias: 'Domingo', horas: '11:00 – 17:00' },
]

export default function IronElementPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.base, color: C.ink }}
    >
      <style>{`
        @keyframes ie-ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .ie-ticker { animation: ie-ticker 26s linear infinite }
        @media (prefers-reduced-motion: reduce) { .ie-ticker { animation: none } }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} tracking-wide uppercase`}>{BIZ.short}</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(14,13,10,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.amber,
          btnInk: C.amberInk,
        }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Sala de Iron Element Talca: máquinas amarillas sobre pasto verde y el logo en el muro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,13,10,0.62) 0%, rgba(14,13,10,0.35) 40%, rgba(14,13,10,0.94) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-9 md:pb-12 pt-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4`} style={{ color: C.amber }}>
              Gimnasio · {BIZ.address} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.95] text-[clamp(3rem,11vw,6.4rem)] mb-5`}
              style={{ color: C.ink }}
            >
              El fierro nuevo
              <br />
              de <span style={{ color: C.amber }}>6 Oriente</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: 'rgba(243,239,228,0.88)' }}>
              Máquinas renovadas, peso libre y profes que te siguen — el gym mejor
              evaluado de Talca.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-base md:text-lg px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B81E] tap-44`}
                style={{ backgroundColor: C.amber, color: C.amberInk }}
              >
                Probar una clase
              </a>
              <a
                href="#planes"
                className={`${display.className} font-bold uppercase tracking-wide text-base md:text-lg px-7 py-2.5 border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B81E] tap-44`}
                style={{ borderColor: 'rgba(243,239,228,0.55)', color: C.ink }}
              >
                Ver planes
              </a>
            </div>
          </Reveal>
        </div>
        <div
          className="relative border-t"
          style={{ borderColor: C.line, backgroundColor: 'rgba(14,13,10,0.92)' }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 items-center">
            <span className="flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.amber} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[11px] md:text-xs`} style={{ color: C.ink }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </span>
            <span className={`${mono.className} text-[11px] md:text-xs`} style={{ color: C.faint }}>
              {BIZ.igUser} · {BIZ.igFollowers} seguidores
            </span>
            <span className={`${mono.className} text-[11px] md:text-xs hidden sm:inline`} style={{ color: C.faint }}>
              L–V 7:00–23:00
            </span>
          </div>
        </div>
      </section>

      {/* ── Cinta ── */}
      <div className="overflow-hidden border-b" style={{ borderColor: C.line, backgroundColor: C.panel }} aria-hidden="true">
        <div className="ie-ticker flex w-max items-center py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {TICKER.map((t) => (
                <span
                  key={`${copy}-${t}`}
                  className={`${display.className} font-bold uppercase tracking-[0.14em] text-lg md:text-xl px-6 flex items-center gap-6 whitespace-nowrap`}
                  style={{ color: C.faint }}
                >
                  {t}
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill={C.amber} aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La sala: muro de fotos ── */}
      <section id="sala" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-6 md:pb-10">
        <Reveal>
          <h2
            className={`${display.className} font-extrabold uppercase leading-[0.98] text-4xl md:text-6xl mb-3`}
            style={{ color: C.ink }}
          >
            La sala por dentro
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
            Fotos reales del gimnasio: amarillo, fierro y el espartano que te mira
            mientras haces la última repetición.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-3 md:gap-4">
          {ZONAS.map((z, i) => (
            <Reveal
              key={z.src}
              delay={i * 90}
              className={i === 0 ? 'col-span-2 md:row-span-2' : ''}
            >
              <figure
                className="relative overflow-hidden border group h-full"
                style={{ borderColor: C.line, backgroundColor: C.panel }}
              >
                <div className={`relative ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full md:min-h-[460px]' : 'aspect-[4/5] md:aspect-[4/4.6]'}`}>
                  <Image
                    src={`${IMG}/${z.src}.webp`}
                    alt={`${z.zona} del gimnasio Iron Element en Talca`}
                    fill
                    sizes={i === 0 ? '(min-width: 768px) 55vw, 100vw' : '(min-width: 768px) 30vw, 50vw'}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption
                  className="absolute inset-x-0 bottom-0 px-4 py-2.5 flex items-baseline justify-between gap-3"
                  style={{ background: 'linear-gradient(0deg, rgba(14,13,10,0.92) 0%, rgba(14,13,10,0) 130%)' }}
                >
                  <span className={`${display.className} font-bold uppercase tracking-wide text-base md:text-lg`} style={{ color: C.ink }}>
                    {z.zona}
                  </span>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em] shrink-0`} style={{ color: C.amber }}>
                    {z.nota}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Datos ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.k} delay={i * 90}>
              <div className="border-t-2 pt-4 md:pt-5" style={{ borderColor: C.amber }}>
                <p className={`${display.className} font-extrabold leading-none text-4xl md:text-6xl`} style={{ color: C.ink }}>
                  {s.k}
                </p>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.14em] mt-2`} style={{ color: C.muted }}>
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Planes ── */}
      <section id="planes" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-14 items-center">
            <Reveal>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] text-4xl md:text-6xl mb-4`}
                style={{ color: C.ink }}
              >
                Planes desde{' '}
                <span style={{ color: C.amber }}>{BIZ.planDesde}</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-2" style={{ color: C.muted }}>
                El gym publica planes entre {BIZ.planDesde} y {BIZ.planHasta}{' '}
                en su Instagram. Escríbeles y te pasan el valor exacto del plan
                que te acomoda.
              </p>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.faint }}>
                valores publicados por {BIZ.igUser} · marzo 2026
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="border p-6 md:p-7" style={{ borderColor: C.lineHi, backgroundColor: C.panelHi }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-4`} style={{ color: C.amber }}>
                  Primera visita
                </p>
                <p className={`${display.className} font-bold uppercase text-2xl md:text-3xl leading-tight mb-3`} style={{ color: C.ink }}>
                  Ven a conocer la sala
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: C.muted }}>
                  Coordina por WhatsApp, mira las máquinas y entrena tu primera
                  sesión. Sin letra chica.
                </p>
                <a
                  href={WA_LINK_CLASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold uppercase tracking-wide text-base px-6 py-3 inline-block transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B81E] tap-44`}
                  style={{ backgroundColor: C.amber, color: C.amberInk }}
                >
                  Agendar por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4 flex items-center gap-3`} style={{ color: C.amber }}>
            <Stars value={BIZ.rating} color={C.amber} className="w-3.5 h-3.5" />
            {BIZ.rating} · {BIZ.reviews} reseñas en Google
          </p>
          <h2
            className={`${display.className} font-extrabold uppercase leading-[0.98] text-4xl md:text-6xl mb-10`}
            style={{ color: C.ink }}
          >
            Lo que dicen los que entrenan
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 100}>
              <figure className="h-full border p-5 md:p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                <Stars value={5} color={C.amber} className="w-3.5 h-3.5" />
                <blockquote className="text-sm leading-relaxed mt-4 mb-5" style={{ color: 'rgba(243,239,228,0.85)' }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.faint }}>
                  <span style={{ color: C.ink }}>{r.nombre}</span>
                  <span className="shrink-0">{r.fecha} · Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <figure className="relative overflow-hidden border" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada del gimnasio Iron Element en Calle 6 Oriente, Talca"
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} px-4 py-2 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.faint }}>
                  la casa en {BIZ.address}
                </figcaption>
              </figure>
            </Reveal>
            <div>
              <Reveal>
                <h2
                  className={`${display.className} font-extrabold uppercase leading-[0.98] text-4xl md:text-5xl mb-6`}
                  style={{ color: C.ink }}
                >
                  6 Oriente 820,
                  <br />
                  Talca
                </h2>
              </Reveal>
              <div className="border-t" style={{ borderColor: C.line }}>
                {HORARIO.map((h) => (
                  <div
                    key={h.dias}
                    className="flex items-baseline justify-between gap-4 py-3.5 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <span className={`${display.className} font-bold uppercase tracking-wide text-lg`} style={{ color: C.ink }}>
                      {h.dias}
                    </span>
                    <span className={`${mono.className} text-sm`} style={{ color: C.amber }}>
                      {h.horas}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B81E]"
                  style={{ color: C.amber, textDecorationColor: 'rgba(245,184,30,0.4)' }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B81E]"
                  style={{ color: C.amber, textDecorationColor: 'rgba(245,184,30,0.4)' }}
                >
                  {BIZ.igUser} →
                </a>
              </div>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="mt-8 border overflow-hidden" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[280px] md:h-[340px] block"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.base, borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real del negocio */}
              <img src={`${IMG}/logo.webp`} alt="Logo de Iron Element Training" className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className={`${display.className} font-extrabold uppercase tracking-wide text-lg leading-none`} style={{ color: C.ink }}>
                  {BIZ.name}
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.faint }}>
                  {BIZ.legal}
                </p>
              </div>
            </div>
            <div className={`${mono.className} text-[11px] md:text-xs flex flex-wrap gap-x-6 gap-y-1`} style={{ color: C.muted }}>
              <span>{BIZ.address} · {BIZ.city}</span>
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 tap-44" style={{ color: C.ink }}>
                {BIZ.phoneDisplay}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm px-5 py-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: C.amber, color: C.amberInk }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
