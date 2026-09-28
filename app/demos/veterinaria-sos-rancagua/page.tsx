import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import {
  BIZ,
  BOLETA_ITEMS,
  HORARIOS,
  IMG,
  MAPS_EMBED,
  RESENAS,
  TEMAS,
} from './content'

/**
 * app/demos/veterinaria-sos-rancagua/page.tsx
 *
 * Veterinaria + farmacia de barrio en Pedro de Valdivia, Rancagua.
 * La identidad sale del mural de la fachada: verde lima + azul rey sobre
 * blanco, letras redondas. El concepto es la posta nocturna: fondo tinta
 * de guardia, la boleta de farmacia como pieza firma y el "2 AM" como
 * marca de horario. Baloo 2 titula redondo como el mural, Work Sans lee,
 * Geist Mono anota datos. WhatsApp real (+56 9 4466 3455) desde su bio.
 */

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  ink: '#0C1120',
  ink2: '#121B30',
  card: '#16213A',
  lime: '#46DC2E',
  limeInk: '#0B1A06',
  royal: '#5E79F2',
  royalDeep: '#2D46D3',
  cream: '#F4F1E8',
  creamInk: '#1B2030',
  muted: 'rgba(244,241,232,0.72)',
  faint: 'rgba(244,241,232,0.52)',
  line: 'rgba(244,241,232,0.14)',
  paperLine: 'rgba(27,32,48,0.16)',
} as const

export const metadata = demoMetadata({
  slug: 'veterinaria-sos-rancagua',
  title: `${BIZ.name} — urgencias hasta las 2 AM en ${BIZ.city}`,
  description: `Veterinaria y farmacia en ${BIZ.address}, ${BIZ.city}. Urgencias hasta las 2 AM, ecografía, ozonoterapia y adopciones. ${BIZ.reviews} reseñas en Google.`,
  image: `${IMG}/fachada.webp`,
})

/* Huella del mural como signo gráfico. */
function Paw({ color = C.lime, className = 'w-5 h-5' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <circle cx="6" cy="9" r="2.1" />
      <circle cx="18" cy="9" r="2.1" />
      <circle cx="9.4" cy="4.6" r="2.3" />
      <circle cx="14.6" cy="4.6" r="2.3" />
      <path d="M12 10.5c-3 0-5.4 2.6-5.4 5.4 0 1.9 1.3 3.1 3 3.1 1 0 1.7-.4 2.4-.4s1.4.4 2.4.4c1.7 0 3-1.2 3-3.1 0-2.8-2.4-5.4-5.4-5.4z" />
    </svg>
  )
}

/* Borde perforado de boleta. */
function TearEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full"
      style={{
        backgroundImage: `radial-gradient(circle at 8px ${flip ? '100%' : '0%'}, ${C.cream} 7px, transparent 8px)`,
        backgroundSize: '22px 12px',
        backgroundPosition: '0 0',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    />
  )
}

export default function DemoVeterinariaSOS() {
  return (
    <main
      id="inicio"
      className={`${body.className} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.ink, color: C.cream }}
    >
      <BlitzNav
        name="S.O.S Rancagua"
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Farmacia', href: '#farmacia' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Horario', href: '#horario' },
        ]}
        waLink={`${BIZ.wa}?text=${encodeURIComponent('Hola! Necesito hora en Veterinaria SOS Rancagua')}`}
        theme={{
          ink: C.cream,
          bar: 'rgba(12,17,32,0.92)',
          line: C.line,
          btnBg: C.lime,
          btnInk: C.limeInk,
          over: 'dark',
        }}
        fontClass={display.className}
        ctaLabel="WhatsApp"
      />

      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-10 md:pb-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(600px 400px at 85% 0%, rgba(70,220,46,0.10), transparent 70%), radial-gradient(500px 380px at 0% 30%, rgba(94,121,242,0.10), transparent 70%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <p
                className={`${mono.className} inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border`}
                style={{ borderColor: C.line, color: C.lime }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: C.lime }}
                  aria-hidden="true"
                />
                Urgencias hasta las 2 AM · Rancagua
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} mt-4 text-[2.6rem] leading-[0.98] md:text-[4.6rem] md:leading-[0.95] font-extrabold tracking-tight`}
              >
                Cuando todo cierra,{' '}
                <span style={{ color: C.lime }}>SOS</span> sigue abierto.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Consulta, farmacia veterinaria y urgencias nocturnas en {BIZ.address},{' '}
                {BIZ.city}. Al mando de la Dra. Leslie Gómez.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`${BIZ.wa}?text=${encodeURIComponent('Hola! Tengo una urgencia con mi mascota')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tap-44 inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-full font-bold text-base transition-transform hover:scale-[1.03] active:scale-95`}
                  style={{ backgroundColor: C.lime, color: C.limeInk }}
                >
                  <Paw color={C.limeInk} className="w-4 h-4" />
                  Urgencia por WhatsApp
                </a>
                <a
                  href={BIZ.phoneTel}
                  className="tap-44 inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-full font-bold text-base border transition-colors hover:bg-white/5"
                  style={{ borderColor: C.line, color: C.cream }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <a
                href={BIZ.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-5 inline-flex items-center gap-2 py-2 text-sm"
                style={{ color: C.muted }}
              >
                <Stars value={BIZ.rating} color={C.lime} />
                <span className={`${mono.className}`}>
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div
              className="relative rounded-2xl overflow-hidden border shadow-2xl md:rotate-2"
              style={{ borderColor: C.line, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
            >
              <Image
                src={`${IMG}/fachada.webp`}
                alt={`Fachada de ${BIZ.nameFull} con su mural pintado en ${BIZ.address}, ${BIZ.city}`}
                width={1200}
                height={900}
                priority
                className="w-full h-auto object-cover"
              />
              <div
                className={`${mono.className} absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest`}
                style={{ backgroundColor: C.ink, color: C.lime, border: `1px solid ${C.line}` }}
              >
                Pedro de Valdivia 033
              </div>
            </div>
            <div
              className={`${display.className} absolute -top-4 -right-2 md:-right-6 rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center -rotate-6 border-4`}
              style={{ backgroundColor: C.royalDeep, borderColor: C.ink, color: '#fff' }}
              aria-hidden="true"
            >
              <span className="text-xl md:text-2xl font-extrabold leading-none">2 AM</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider">urgencias</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE — la única de la página */}
      <div
        className="py-3 overflow-hidden border-y"
        style={{ backgroundColor: C.lime, borderColor: 'rgba(0,0,0,0.2)' }}
        aria-hidden="true"
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite]">
          {[0, 1].map((k) => (
            <div
              key={k}
              className={`${display.className} flex items-center gap-6 pr-6 text-sm md:text-base font-extrabold uppercase tracking-wide whitespace-nowrap`}
              style={{ color: C.limeInk }}
            >
              {[
                'Urgencias hasta las 2 AM',
                'Farmacia veterinaria',
                'Ecografía',
                'Ozonoterapia',
                'Cardiología',
                'Vacunas',
                'Jornadas de adopción',
              ].map((t) => (
                <span key={t} className="flex items-center gap-6">
                  {t}
                  <Paw color={C.limeInk} className="w-4 h-4" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOLETA DE ATENCIÓN — la pieza firma: los servicios como ticket de farmacia */}
      <section id="servicios" className="py-14 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <div>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`}
                style={{ color: C.royal }}
              >
                Lo que atienden
              </p>
              <h2
                className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.02] tracking-tight`}
              >
                Una boleta honesta: esto se hace en SOS.
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Ni catálogo inflado ni letra chica. Los servicios que el local de Pedro de
                Valdivia realmente presta, anotados como en su farmacia.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {TEMAS.map((t) => (
                  <span
                    key={t.t}
                    className={`${mono.className} text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full border`}
                    style={{ borderColor: C.line, color: C.faint }}
                  >
                    {t.t} ×{t.n}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="md:rotate-1">
              <TearEdge />
              <div
                className="relative px-6 md:px-9 py-7 md:py-9 shadow-2xl"
                style={{ backgroundColor: C.cream, color: C.creamInk }}
              >
                <p
                  className={`${mono.className} text-center text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold`}
                >
                  Boleta de atención
                </p>
                <p
                  className={`${display.className} text-center text-xl md:text-2xl font-extrabold mt-1`}
                >
                  Veterinaria S.O.S
                </p>
                <p className={`${mono.className} text-center text-[10px] uppercase tracking-[0.2em] mt-1 opacity-60`}>
                  {BIZ.address} · {BIZ.city}
                </p>
                <div
                  className="my-5 border-t border-dashed"
                  style={{ borderColor: C.paperLine }}
                  aria-hidden="true"
                />
                <ul className={`${mono.className} text-[13px] md:text-sm`}>
                  {BOLETA_ITEMS.map((s) => (
                    <li key={s.item} className="flex items-baseline gap-2 py-1.5">
                      <span className="font-semibold whitespace-nowrap">{s.item}</span>
                      <span
                        className="flex-1 border-b border-dotted -translate-y-1"
                        style={{ borderColor: C.paperLine }}
                        aria-hidden="true"
                      />
                      <span className="text-right text-[11px] md:text-xs uppercase tracking-wider opacity-70">
                        {s.detalle}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className="my-5 border-t border-dashed"
                  style={{ borderColor: C.paperLine }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] font-bold`}>
                    Abierto hoy
                  </p>
                  <p className={`${display.className} text-lg font-extrabold`} style={{ color: C.royalDeep }}>
                    hasta las 2 AM
                  </p>
                </div>
                <p className={`${mono.className} mt-3 text-center text-[10px] uppercase tracking-[0.28em] opacity-60`}>
                  Gracias por confiar en SOS
                </p>
              </div>
              <TearEdge flip />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOTOS — el local real, tres tamaños */}
      <section className="pb-14 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2
              className={`${display.className} text-3xl md:text-4xl font-extrabold tracking-tight mb-8`}
            >
              El equipo en su turno
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 items-start">
            <Reveal className="rounded-xl overflow-hidden border" delay={0}>
              <Image
                src={`${IMG}/paciente-consulta.webp`}
                alt="Perrito schnauzer sobre la mesa de examen en Veterinaria SOS"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </Reveal>
            <Reveal className="rounded-xl overflow-hidden border md:mt-10" delay={90}>
              <Image
                src={`${IMG}/companera.webp`}
                alt="Integrante del equipo de SOS abrazando a una perrita blanca"
                width={1000}
                height={1333}
                className="w-full h-auto object-cover"
              />
            </Reveal>
            <Reveal className="rounded-xl overflow-hidden border col-span-2 md:col-span-1 md:mt-20" delay={160}>
              <Image
                src={`${IMG}/equipo.webp`}
                alt="Equipo de Veterinaria SOS durante un curso de ozonoterapia"
                width={1200}
                height={2133}
                className="w-full h-auto object-cover aspect-[2/3] md:aspect-auto"
              />
            </Reveal>
          </div>
          <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.faint }}>
            Fotos reales del local y su Instagram
          </p>
        </div>
      </section>

      {/* FARMACIA — cambio de plano: papel crema */}
      <section
        id="farmacia"
        className="py-14 md:py-24 scroll-mt-20"
        style={{ backgroundColor: C.cream, color: C.creamInk }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl md:-rotate-1">
              <Image
                src={`${IMG}/farmacia.webp`}
                alt="Vitrina de la farmacia veterinaria de SOS con suplementos y medicamentos"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
              />
              <div
                className={`${mono.className} absolute top-3 right-3 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest`}
                style={{ backgroundColor: C.ink, color: C.lime }}
              >
                En el mismo local
              </div>
            </div>
          </Reveal>
          <Reveal className="order-1 md:order-2" delay={80}>
            <div>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`}
                style={{ color: C.royalDeep }}
              >
                Farmacia veterinaria
              </p>
              <h2
                className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.02] tracking-tight`}
              >
                La receta se compra donde se hace.
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: 'rgba(27,32,48,0.75)' }}>
                Alimento, suplementos, condroprotectores, pipetas y medicamentos veterinarios en
                la vitrina de al lado. Si la consulta termina en receta, sales con ella en la mano.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Suplementos y vitaminas para perros y gatos',
                  'Condroprotectores y soporte articular',
                  'Productos de calma y bienestar',
                  'Alimento y accesorios',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base font-medium">
                    <Paw color={C.royalDeep} className="w-4 h-4 mt-1 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="py-14 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <Reveal>
              <div>
                <p
                  className={`${display.className} text-[4.5rem] md:text-[7rem] leading-none font-extrabold`}
                  style={{ color: C.lime }}
                >
                  {String(BIZ.rating).replace('.', ',')}
                </p>
                <Stars value={BIZ.rating} color={C.lime} className="mt-2" />
                <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.2em]`} style={{ color: C.faint }}>
                  {BIZ.reviews} reseñas en Google Maps
                </p>
                <a
                  href={BIZ.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-4 inline-flex items-center gap-2 text-sm underline underline-offset-4"
                  style={{ color: C.muted }}
                >
                  Leerlas todas
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 80}>
                  <figure
                    className="rounded-xl border p-5 md:p-6"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <Stars value={r.estrellas} color={C.lime} />
                    <blockquote className="mt-3 text-sm md:text-base leading-relaxed">
                      «{r.texto}»
                    </blockquote>
                    <figcaption
                      className={`${mono.className} mt-3 text-[11px] uppercase tracking-widest`}
                      style={{ color: C.faint }}
                    >
                      {r.nombre} · {r.cuando}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADOPCIÓN — banda azul */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.royalDeep, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <div>
              <h2
                className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.02] tracking-tight`}
              >
                También buscan familia aquí.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.85)' }}>
                SOS organiza jornadas de adopción responsable: perritos y gatitos que esperan
                hogar pasan por el local. Pregunta por la próxima fecha.
              </p>
              <a
                href={`${BIZ.wa}?text=${encodeURIComponent('Hola! Quiero info de las jornadas de adopción de SOS Rancagua')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tap-44 mt-6 inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-full font-bold text-base transition-transform hover:scale-[1.03] active:scale-95`}
                style={{ backgroundColor: '#fff', color: C.royalDeep }}
              >
                Preguntar por adopciones
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl md:rotate-1">
              <Image
                src={`${IMG}/adopcion.webp`}
                alt="Jornada de adopción de mascotas organizada por Veterinaria SOS"
                width={1000}
                height={1333}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HORARIO + MAPA */}
      <section id="horario" className="py-14 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10">
          <Reveal>
            <div>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`}
                style={{ color: C.royal }}
              >
                Horario y dirección
              </p>
              <h2
                className={`${display.className} text-3xl md:text-4xl font-extrabold tracking-tight`}
              >
                {BIZ.address}, {BIZ.city}
              </h2>
              <ul className="mt-6 divide-y" style={{ borderColor: C.line }}>
                {HORARIOS.map((h) => (
                  <li
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 py-3"
                    style={{ borderColor: C.line }}
                  >
                    <span className="text-sm md:text-base" style={{ color: C.muted }}>
                      {h.d}
                    </span>
                    <span
                      className={`${mono.className} text-sm md:text-base font-bold`}
                      style={{ color: h.d === 'Urgencias' ? C.lime : C.cream }}
                    >
                      {h.h}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BIZ.phoneTel}
                  className={`${display.className} tap-44 inline-flex items-center justify-center h-[48px] px-5 rounded-full font-bold text-sm border`}
                  style={{ borderColor: C.line, color: C.cream }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={`${BIZ.wa}?text=${encodeURIComponent('Hola! Quiero agendar una hora en SOS Rancagua')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tap-44 inline-flex items-center justify-center h-[48px] px-5 rounded-full font-bold text-sm`}
                  style={{ backgroundColor: C.lime, color: C.limeInk }}
                >
                  WhatsApp {BIZ.waDisplay}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden border h-[300px] md:h-full min-h-[300px]" style={{ borderColor: C.line }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa: ${BIZ.nameFull}, ${BIZ.city}`} className="w-full h-full border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER compacto */}
      <footer className="border-t py-8" style={{ borderColor: C.line, backgroundColor: C.ink2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-10 h-10 rounded-full object-cover bg-white" />
            <div>
              <p className={`${display.className} font-extrabold text-sm leading-tight`}>{BIZ.nameFull}</p>
              <p className={`${mono.className} text-[11px]`} style={{ color: C.faint }}>
                {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
              </p>
            </div>
          </div>
          <p className={`${mono.className} text-[11px] uppercase tracking-widest`} style={{ color: C.faint }}>
            Urgencias hasta las 2 AM
          </p>
        </div>
      </footer>

      <WaFab
        href={`${BIZ.wa}?text=${encodeURIComponent('Hola! Necesito atención en Veterinaria SOS Rancagua')}`}
        label={`Escribir por WhatsApp a ${BIZ.name}`}
      />

      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </main>
  )
}
