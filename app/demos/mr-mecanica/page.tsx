import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import {
  BIZ,
  IMG,
  MAPS_EMBED,
  MAPS_URL,
  WA_LINK,
  WA_LINK_PRESUPUESTO,
} from './content'

const condensed = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
  ],
  variable: '--mr-display',
})

const sans = localFont({
  src: '../../fonts/work-sans/normal-100-900.woff2',
  variable: '--mr-sans',
})

const mono = localFont({
  src: '../../fonts/space-mono/normal-400.woff2',
  variable: '--mr-mono',
})

export const metadata = demoMetadata({
  slug: 'mr-mecanica',
  title: 'MR Mecánica — taller mecánico en San Clemente',
  description:
    'Taller mecánico en Humberto Silva, San Clemente: frenos, rectificado de discos, cambio de aceite y mecánica general. 5,0 estrellas en Google.',
  image: `${IMG}/fachada.webp`,
})

const C = {
  carbon: '#141518',
  deep: '#0E0F11',
  steel: '#1F2227',
  ink: '#F1EEE8',
  muted: '#9AA1A9',
  rojo: '#C8102E',
  papel: '#F4F1E9',
  line: 'rgba(241,238,232,0.14)',
} as const

const PUNTOS = [
  {
    n: '01',
    nombre: 'Frenos',
    detalle:
      'Servicio de frenos inmediato, tal como lo anuncia el letrero de la fachada: revisión, repuestos y prueba en el taller.',
  },
  {
    n: '02',
    nombre: 'Rectificado',
    detalle:
      'Rectificado de discos y tambores en el propio taller, sin mandar las piezas a otro lado.',
  },
  {
    n: '03',
    nombre: 'Cambio de aceite',
    detalle:
      'Cambio de aceite y filtro en el momento — el cartel de la entrada dice “cambio de aceite aquí” y lo hacen al tiro.',
  },
  {
    n: '04',
    nombre: 'Mecánica general',
    detalle:
      'Diagnóstico y reparación en general: lo que piden los vecinos de San Clemente es que atiendan bien y rápido.',
  },
]

const HORARIO = [
  { dia: 'Lunes a viernes', horas: '9:00 – 13:00 · 15:00 – 18:30' },
  { dia: 'Sábado', horas: '9:00 – 13:00' },
  { dia: 'Domingo', horas: 'Cerrado' },
]

const NOTAS = [
  {
    texto:
      '“Súper buenos mecánicos, buen equipo de trabajo y responsables, muy recomendados.”',
    autor: 'Patricio Bravo Ortiz',
  },
  {
    texto:
      '“Muy buen servicio y siempre bien rápido, aparte una buena atención. Lo recomiendo, está a la mano para no ir a Talca.”',
    autor: 'Carlos Roco Albornoz',
  },
]

export default function MrMecanica() {
  return (
    <div
      className={`${condensed.variable} ${sans.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.carbon, color: C.ink, fontFamily: 'var(--mr-sans)' }}
    >
      <BlitzNav
        name="MR Mecánica"
        links={[
          { href: '#trabajos', label: 'Trabajos' },
          { href: '#horario', label: 'Horario' },
          { href: '#reseñas', label: 'Reseñas' },
          { href: '#llegar', label: 'Llegar' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(14,15,17,0.82)',
          ink: '#F1EEE8',
          line: 'rgba(241,238,232,0.12)',
          btnBg: C.rojo,
          btnInk: '#fff',
        }}
        fontClass={condensed.className}
      />

      {/* ── Hero: el taller de la cuadra ─────────────────────── */}
      <header
        className="relative overflow-hidden"
        style={{ backgroundColor: C.deep }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(241,238,232,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(241,238,232,0.035) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full"
          style={{ background: `radial-gradient(circle, ${C.rojo}33 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-14 md:pt-36 md:pb-20 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="flex items-center gap-4">
              <Image
                src={`${IMG}/logo.webp`}
                alt="Logo de MR Mecánica, taller mecánico"
                width={84}
                height={84}
                className="w-[68px] h-[68px] md:w-[84px] md:h-[84px] rounded-2xl"
                priority
              />
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`}
                style={{ color: C.muted }}
              >
                Humberto Silva · San Clemente
              </p>
            </div>
            <h1
              className={`${condensed.className} uppercase font-extrabold leading-[0.95] mt-6 text-[clamp(2.8rem,9vw,5.6rem)]`}
            >
              El taller
              <br />
              de la <span style={{ color: C.rojo }}>cuadra</span>
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-md leading-relaxed" style={{ color: C.muted }}>
              Mecánica general, frenos y cambio de aceite en San Clemente —
              sin tener que bajar hasta Talca por una revisión.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-6 py-3 text-base font-semibold uppercase tracking-wide"
                style={{ backgroundColor: C.rojo, color: '#fff', fontFamily: 'var(--mr-display)' }}
              >
                Agendar revisión
              </a>
              <a
                href={WA_LINK_PRESUPUESTO}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center px-6 py-3 text-base font-semibold uppercase tracking-wide border"
                style={{ borderColor: C.line, color: C.ink, fontFamily: 'var(--mr-display)' }}
              >
                Pedir presupuesto
              </a>
            </div>
            <p className={`${mono.className} mt-6 text-xs`} style={{ color: C.muted }}>
              ★ {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </p>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative mx-auto max-w-sm md:max-w-none rotate-2">
              <div
                className="p-3 pb-10 shadow-2xl"
                style={{ backgroundColor: C.papel }}
              >
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada del taller MR Mecánica en Humberto Silva, San Clemente"
                  width={640}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
                <figcaption
                  className={`${mono.className} absolute bottom-3 left-0 right-0 text-center text-[11px] uppercase tracking-widest`}
                  style={{ color: '#4A4238' }}
                >
                  Humberto Silva, San Clemente
                </figcaption>
              </div>
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[-4deg]"
                style={{ backgroundColor: `${C.rojo}CC` }}
                aria-hidden="true"
              />
            </figure>
          </Reveal>
        </div>
      </header>

      {/* ── Los puntos que revisa ────────────────────────────── */}
      <section id="trabajos" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
            style={{ color: C.rojo }}
          >
            Lo que anuncia el letrero
          </p>
          <h2
            className={`${condensed.className} uppercase font-extrabold text-[clamp(2rem,6vw,3.4rem)] leading-none mb-10`}
          >
            Los puntos que revisa
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-[1fr_320px] gap-10 md:gap-14 items-start">
          <div>
            {PUNTOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div
                  className="flex gap-5 md:gap-8 items-baseline py-6 border-t"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className={`${mono.className} text-3xl md:text-5xl leading-none shrink-0`}
                    style={{ color: `${C.rojo}` }}
                  >
                    {p.n}
                  </span>
                  <div>
                    <h3
                      className={`${condensed.className} uppercase font-bold text-2xl md:text-3xl`}
                    >
                      {p.nombre}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {p.detalle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={PUNTOS.length * 90}>
              <div className="py-6 border-t border-b" style={{ borderColor: C.line }}>
                <a
                  href={WA_LINK_PRESUPUESTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-sm underline underline-offset-4`}
                  style={{ color: C.ink }}
                >
                  ¿Otra cosa? Pregúntale directo al taller →
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160} className="md:sticky md:top-24">
            <figure
              className="overflow-hidden"
              style={{ border: `1px solid ${C.line}` }}
            >
              <Image
                src={`${IMG}/motor.webp`}
                alt="Motor de camioneta revisado en el taller MR Mecánica"
                width={640}
                height={480}
                className="w-full h-auto"
              />
              <figcaption
                className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-widest`}
                style={{ backgroundColor: C.steel, color: C.muted }}
              >
                En la bahía — foto del taller
              </figcaption>
            </figure>
            <figure
              className="overflow-hidden mt-6"
              style={{ border: `1px solid ${C.line}` }}
            >
              <Image
                src={`${IMG}/letrero.webp`}
                alt="Letrero de la fachada de MR Mecánica con sus servicios"
                width={640}
                height={400}
                className="w-full h-auto"
              />
              <figcaption
                className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-widest`}
                style={{ backgroundColor: C.steel, color: C.muted }}
              >
                El letrero de afuera
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── El pizarrón del horario ──────────────────────────── */}
      <section
        id="horario"
        className="border-t"
        style={{ backgroundColor: C.steel, borderColor: C.line }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2
              className={`${condensed.className} uppercase font-extrabold text-[clamp(2rem,6vw,3rem)] leading-none`}
            >
              Llega temprano,
              <br />
              sal anda <span style={{ color: C.rojo }}>rápido</span>
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              El taller atiende en su casa de Humberto Silva, a la entrada de
              San Clemente. Los vecinos lo prefieren porque queda a la mano y
              responden rápido.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="p-6 md:p-8"
              style={{ backgroundColor: C.deep, border: `1px solid ${C.line}` }}
            >
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-5`}
                style={{ color: C.muted }}
              >
                Horario del taller
              </p>
              <dl className={`${mono.className} text-sm md:text-base`}>
                {HORARIO.map((h) => (
                  <div
                    key={h.dia}
                    className="flex justify-between gap-4 py-3 border-b last:border-0"
                    style={{ borderColor: C.line }}
                  >
                    <dt style={{ color: C.ink }}>{h.dia}</dt>
                    <dd style={{ color: h.horas === 'Cerrado' ? C.rojo : C.muted }}>
                      {h.horas}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Notas en el mostrador ────────────────────────────── */}
      <section id="reseñas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
            style={{ color: C.rojo }}
          >
            Lo que dicen en Google
          </p>
          <h2
            className={`${condensed.className} uppercase font-extrabold text-[clamp(2rem,6vw,3.4rem)] leading-none mb-10`}
          >
            Notas en el mostrador
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {NOTAS.map((n, i) => (
            <Reveal key={n.autor} delay={i * 110}>
              <figure
                className="h-full p-6 md:p-8 flex flex-col justify-between"
                style={{ backgroundColor: C.papel, color: '#2A2620' }}
              >
                <div>
                  <p className={`${mono.className} text-xs`} style={{ color: C.rojo }}>
                    ★★★★★
                  </p>
                  <blockquote className="mt-4 text-base md:text-lg leading-relaxed">
                    {n.texto}
                  </blockquote>
                </div>
                <figcaption className={`${mono.className} mt-6 text-xs uppercase tracking-widest`} style={{ color: '#6B6255' }}>
                  {n.autor} — reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ──────────────────────────────────────── */}
      <section
        id="llegar"
        className="border-t"
        style={{ backgroundColor: C.deep, borderColor: C.line }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.rojo }}
            >
              Cómo llegar
            </p>
            <h2
              className={`${condensed.className} uppercase font-extrabold text-[clamp(2rem,6vw,3.4rem)] leading-none`}
            >
              Humberto Silva,
              <br />
              San Clemente
            </h2>
            <ul className={`${mono.className} mt-6 space-y-3 text-sm`} style={{ color: C.muted }}>
              <li>— A la entrada del pueblo, junto al letrero azul del taller.</li>
              <li>— También puedes llamar: {BIZ.phoneDisplay}</li>
              <li>
                —{' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                  style={{ color: C.ink }}
                >
                  Abrir en Google Maps
                </a>
              </li>
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center px-6 py-3 text-base font-semibold uppercase tracking-wide"
              style={{ backgroundColor: C.rojo, color: '#fff', fontFamily: 'var(--mr-display)' }}
            >
              Escribir al taller
            </a>
          </Reveal>
          <Reveal delay={140}>
            <figure className="overflow-hidden mb-6" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/bahia.webp`}
                alt="Entrada de la bahía del taller MR Mecánica"
                width={640}
                height={360}
                className="w-full h-40 md:h-44 object-cover"
              />
            </figure>
            <div className="overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                title="Mapa de MR Mecánica, San Clemente"
                src={MAPS_EMBED}
                className="w-full min-h-[320px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
          <div>
            <p className={`${condensed.className} uppercase font-bold text-lg`}>
              {BIZ.name}
            </p>
            <p className={`${mono.className} text-[11px] mt-1`} style={{ color: C.muted }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
          </div>
          <nav className={`${mono.className} flex gap-5 text-xs`} style={{ color: C.muted }}>
            <a href="#trabajos" className="tap-44 hover:text-white transition-colors">Trabajos</a>
            <a href="#horario" className="tap-44 hover:text-white transition-colors">Horario</a>
            <a href="#llegar" className="tap-44 hover:text-white transition-colors">Llegar</a>
          </nav>
          <p className="text-[11px] leading-relaxed max-w-xs" style={{ color: C.muted }}>
            Maqueta hecha por{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {SITE.name}
            </a>{' '}
            con los datos públicos del negocio.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />
    </div>
  )
}
