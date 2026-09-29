import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
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
  bone: '#F7F4EE',
  boneDark: '#EDE8DD',
  ink: '#181512',
  inkSoft: '#2A251F',
  vino: '#7E2A33',
  vinoSoft: '#D8A7AB',
  muted: '#6B6156',
  line: 'rgba(24,21,18,0.16)',
  lineDark: 'rgba(247,244,238,0.16)',
  onDark: '#F7F4EE',
  onDarkMute: 'rgba(247,244,238,0.62)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'fotografo-francisco-kandalaft',
  title: 'Francisco Kandalaft — Fotografía de matrimonio en Talca',
  description:
    'Foto y video de matrimonios, prebodas y eventos en Talca. 5.0 en matrimonios.cl, Wedding Awards 2022 y 2023. Agenda por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const FRAMES = [
  { src: 'mar', nota: 'boda junto al mar' },
  { src: 'atardecer', nota: 'última luz del día' },
  { src: 'retrato', nota: 'retrato de gala' },
  { src: 'iglesia', nota: 'la iglesia y el velo' },
  { src: 'nina', nota: 'retrato de familia' },
  { src: 'producto', nota: 'bodegón publicitario' },
  { src: 'musica', nota: 'retrato de artista' },
]

const SERVICIOS = [
  {
    num: '01',
    name: 'Matrimonio, foto y video',
    desc: 'Cobertura completa del día: preparación, ceremonia, fiesta y los momentos que pasan entre medio.',
    nota: 'servicio principal',
  },
  {
    num: '02',
    name: 'Preboda y postboda',
    desc: 'Sesiones de pareja antes o después del gran día, en el Maule o donde estén.',
    nota: 'sesión de pareja',
  },
  {
    num: '03',
    name: 'Dron y material aéreo',
    desc: 'Tomas aéreas del lugar y de la celebración para completar el registro.',
    nota: 'adicional',
  },
  {
    num: '04',
    name: 'Álbumes y entrega digital',
    desc: 'Álbumes y mini álbumes impresos, entrega en alta resolución y USB con todo el material.',
    nota: 'respaldo físico y digital',
  },
]

const TRAYECTORIA = [
  { anio: '+15 años', hito: 'de oficio audiovisual — tradición familiar desde Mario Figari, corresponsal de revista VEA en el Maule de los años 50' },
  { anio: '2022–2023', hito: 'Wedding Awards de matrimonios.cl por recomendación de los novios' },
  { anio: '2022', hito: 'Mister Chile · fotógrafo oficial de candidatas a Miss Mundo Chile y Miss Venezuela' },
  { anio: '2024', hito: 'cobertura de un matrimonio en la base militar de Parris Island, EEUU' },
  { anio: '2025', hito: 'fotógrafo y jurado de Miss Belleza Marina Talca · Miss Mundo Internacional Chile' },
]

const RESENAS = [
  {
    nombre: 'Jessica S.',
    fuente: 'matrimonios.cl',
    texto: 'Imágenes que reviven la historia. Súper recomendado.',
  },
  {
    nombre: 'Verónica O.',
    fuente: 'matrimonios.cl',
    texto: 'Excelente trabajo y profesionalismo. Nos encantó desde el servicio de preboda.',
  },
  {
    nombre: 'Ana Seña',
    fuente: 'Google',
    texto:
      'Aportan con ideas, captan lo que uno quiere transmitir, muy puntuales y responsables. Hacen un trabajo muuy bueno. 100% recomendables.',
  },
]

function Marco({ children, color = C.vino }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`} style={{ color }}>
      <span className="inline-block w-6 h-px" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function FotografoKandalaftPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.bone, color: C.ink }}
    >
      <style>{`
        @keyframes fk-strip { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .fk-strip { animation: fk-strip 46s linear infinite }
        .fk-strip:hover { animation-play-state: paused }
        @media (prefers-reduced-motion: reduce) { .fk-strip { animation: none } }
      `}</style>

      <BlitzNav
        name={<span className={display.className}>{BIZ.name}</span>}
        logoSrc={`${IMG}/retrato-francisco.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(247,244,238,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.vino,
          btnInk: '#F7F4EE',
        }}
      />

      {/* ── Hero editorial en dos columnas ── */}
      <section id="inicio" className="grid md:grid-cols-[1.15fr_1fr] min-h-svh">
        <div className="relative min-h-[52vh] md:min-h-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Novios fotografiados por Francisco Kandalaft entre lavanda, con el velo al viento"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
          <p
            className={`${mono.className} absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] px-2 py-1`}
            style={{ backgroundColor: 'rgba(24,21,18,0.72)', color: C.onDark }}
          >
            fotograma KDL·00 — trabajo real
          </p>
        </div>
        <div
          className="flex flex-col justify-center px-5 md:px-10 py-12 md:py-24 border-t md:border-t-0 md:border-l"
          style={{ borderColor: C.lineDark, backgroundColor: C.ink }}
        >
          <Reveal>
            <Marco color={C.vinoSoft}>Foto y video de matrimonios · Talca</Marco>
            <h1
              className={`${display.className} leading-[1.04] text-[clamp(2.6rem,7vw,4.6rem)] mb-5`}
              style={{ color: C.onDark }}
            >
              Los días que no
              <br />
              <em style={{ color: C.vinoSoft }}>se repiten</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.onDarkMute }}>
              Cobertura de matrimonios, prebodas y eventos — espontánea,
              cercana y sin poses forzadas.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-semibold px-6 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8A7AB] tap-44"
                style={{ backgroundColor: C.vino, color: '#F7F4EE' }}
              >
                Consultar fecha
              </a>
              <a
                href="#trabajo"
                className="text-sm md:text-base font-semibold px-6 py-3 border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8A7AB] tap-44"
                style={{ borderColor: C.lineDark, color: C.onDark }}
              >
                Ver el trabajo
              </a>
            </div>
            <p className={`${mono.className} text-[11px] md:text-xs flex items-center gap-2`} style={{ color: C.onDarkMute }}>
              <Stars value={5} color={C.vinoSoft} className="w-3.5 h-3.5" />
              5.0 · {BIZ.resenasMatri} opiniones en matrimonios.cl
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Tira de fotogramas (contact sheet) ── */}
      <section id="trabajo" className="scroll-mt-20 overflow-hidden py-10 md:py-14" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-6 flex items-baseline justify-between gap-4">
          <h2 className={`${display.className} text-3xl md:text-4xl`} style={{ color: C.onDark }}>
            La tira de contacto
          </h2>
          <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.2em] shrink-0`} style={{ color: C.onDarkMute }}>
            {FRAMES.length} fotogramas reales
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="fk-strip flex w-max gap-4 px-4">
            {[0, 1].map((copy) =>
              FRAMES.map((f, i) => (
                <figure key={`${copy}-${i}`} className="shrink-0 w-[210px] md:w-[250px]" aria-hidden={copy === 1}>
                  <div className="relative aspect-[4/5] overflow-hidden border" style={{ borderColor: C.lineDark }}>
                    <Image
                      src={`${IMG}/${f.src}.webp`}
                      alt={copy === 0 ? `${f.nota} — fotografía de ${BIZ.name}` : ''}
                      fill
                      sizes="250px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} flex items-baseline justify-between pt-2 text-[10px] uppercase tracking-[0.16em]`}
                    style={{ color: C.onDarkMute }}
                  >
                    <span>KDL·{String(i + 1).padStart(2, '0')}</span>
                    <span>{f.nota}</span>
                  </figcaption>
                </figure>
              )),
            )}
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Marco>Qué cubre</Marco>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-14 items-end mb-8 md:mb-12">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.ink }}>
              De la preboda al álbum
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Servicios publicados en su perfil de matrimonios.cl, con paquetes
              desde {BIZ.precioDesde}.
            </p>
          </div>
        </Reveal>
        <div className="border-t" style={{ borderColor: C.line }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.num} delay={i * 70}>
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-[64px_1.2fr_2fr_auto] gap-x-5 gap-y-1 items-baseline py-5 border-b" style={{ borderColor: C.line }}>
                <span className={`${mono.className} text-xs`} style={{ color: C.vino }}>
                  {s.num}
                </span>
                <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.ink }}>
                  {s.name}
                </h3>
                <p className="col-span-2 md:col-span-1 text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
                <span className={`${mono.className} hidden md:inline text-[10px] uppercase tracking-[0.16em] justify-self-end`} style={{ color: C.muted }}>
                  {s.nota}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.vino }}>
              desde {BIZ.precioDesde}
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-6 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E2A33] tap-44"
              style={{ backgroundColor: C.ink, color: C.onDark }}
            >
              Pedir cotización por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Trayectoria ── */}
      <section style={{ backgroundColor: C.boneDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
                Detrás del lente,
                <br />
                <em style={{ color: C.vino }}>una historia familiar</em>
              </h2>
              <div className="relative overflow-hidden border" style={{ borderColor: C.line }}>
                <div className="relative aspect-square">
                  <Image
                    src={`${IMG}/retrato-francisco.webp`}
                    alt="Francisco Kandalaft sosteniendo su cámara"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-3`} style={{ color: C.muted }}>
                Francisco Kandalaft Ruminot · foto y video
              </p>
            </Reveal>
            <div className="border-t" style={{ borderColor: C.line }}>
              {TRAYECTORIA.map((t, i) => (
                <Reveal key={t.anio} delay={i * 70}>
                  <div className="grid grid-cols-[96px_1fr] md:grid-cols-[120px_1fr] gap-4 py-4 border-b" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-xs md:text-sm font-semibold`} style={{ color: C.vino }}>
                      {t.anio}
                    </span>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.inkSoft }}>
                      {t.hito}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-10">
            <h2 className={`${display.className} text-4xl md:text-5xl`} style={{ color: C.ink }}>
              Lo que dicen los novios
            </h2>
            <span className={`${mono.className} text-xs uppercase tracking-[0.16em] flex items-center gap-2`} style={{ color: C.muted }}>
              <Stars value={5} color={C.vino} className="w-3.5 h-3.5" />
              5.0 · {BIZ.resenasMatri} en matrimonios.cl · 5.0 en Google
            </span>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 100}>
              <figure className="h-full border p-5 md:p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: '#FCFAF5' }}>
                <Stars value={5} color={C.vino} className="w-3.5 h-3.5" />
                <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mt-4 mb-5`} style={{ color: C.inkSoft }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                  <span style={{ color: C.ink }}>{r.nombre}</span>
                  <span className="shrink-0">{r.fuente}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <Reveal>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.onDark }}>
                Agenda tu fecha,
                <br />
                <em style={{ color: C.vinoSoft }}>conversemos</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.onDarkMute }}>
                Atiende en {BIZ.city}, {BIZ.region}, y cubre eventos en todo
                Chile — con la mayor antelación posible para asegurar agenda.
              </p>
              <div className="space-y-3 mb-7">
                <p className={`${mono.className} text-xs md:text-sm`} style={{ color: C.onDark }}>
                  Lun–Dom · 8:00 – 22:00
                </p>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${mono.className} block text-xs md:text-sm underline underline-offset-4 tap-44`}
                  style={{ color: C.onDark }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BIZ.email}`}
                  className={`${mono.className} block text-xs md:text-sm underline underline-offset-4 tap-44`}
                  style={{ color: C.onDark }}
                >
                  {BIZ.email}
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} block text-xs md:text-sm underline underline-offset-4 tap-44`}
                  style={{ color: C.onDark }}
                >
                  {BIZ.igUser} · {BIZ.igFollowers} seguidores
                </a>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm md:text-base font-semibold px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F4EE] tap-44"
                style={{ backgroundColor: C.vino, color: '#F7F4EE' }}
              >
                Escribir por WhatsApp
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="border overflow-hidden" style={{ borderColor: C.lineDark }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.legal}, ${BIZ.city}`}
                  className="w-full h-[280px] md:h-[380px] block"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block mt-3 text-[11px] uppercase tracking-[0.16em] underline underline-offset-4 tap-44`}
                style={{ color: C.onDarkMute }}
              >
                Ver ficha en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, borderTop: `1px solid ${C.lineDark}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <p className={`${display.className} text-lg`} style={{ color: C.onDark }}>
            {BIZ.name} — {BIZ.rubro}
          </p>
          <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.onDarkMute }}>
            {BIZ.city} · {BIZ.region} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
