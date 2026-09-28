import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  navy: '#0A1D30',
  navyDeep: '#061423',
  aqua: '#4FC3DC',
  aquaInk: '#06222B',
  flame: '#F59300',
  bone: '#EAF1F4',
  muted: '#93A9B5',
  line: 'rgba(234,241,244,0.12)',
}

const SERVICIOS = [
  {
    t: 'Reparación de fugas',
    d: 'Fugas de agua y gas en cañerías PPR, cobre y PVC — detección y arreglo.',
  },
  {
    t: 'Calefón',
    d: 'Mantención, reparación e instalación de calefón a gas.',
  },
  {
    t: 'Instalación de gas',
    d: 'Cocinas, hornos y conexiones de gas con técnico certificado SEC.',
  },
  {
    t: 'Destapes y alcantarillado',
    d: 'Destape de lavaplatos, llaves angulares y descarga de alcantarillado.',
  },
  {
    t: 'Llaves y monomandos',
    d: 'Cambio de llaves de agua y monomandos de ducha y lavatorio.',
  },
  {
    t: 'Estufas GLP',
    d: 'Mantención y revisión de estufas a gas licuado.',
  },
]

const TRABAJOS = [
  {
    img: `${IMG}/calefon.webp`,
    alt: 'Calefón MASTER 7 litros recién instalado por Gasfitería Bastías',
    t: 'Calefón nuevo instalado',
  },
  {
    img: `${IMG}/serpentin.webp`,
    alt: 'Conexión de cobre con fisura en el serpentín detectada en visita técnica',
    t: 'Fisura en el serpentín',
  },
  {
    img: `${IMG}/destape.webp`,
    alt: 'Destape de llave angular de lavaplatos en trabajo de gasfitería',
    t: 'Destape de llave angular',
  },
  {
    img: `${IMG}/alcantarillado.webp`,
    alt: 'Destape de alcantarillado domiciliario en Talca',
    t: 'Descarga de alcantarillado',
  },
]

const RESENAS = [
  {
    q: 'Muy buen servicio, puntual y honesto. Arregló el calefón de manera profesional, indicando cuál era la falla y sin intentar cobrar de más.',
    n: 'María Liempi',
  },
  {
    q: 'Muy recomendado, eficiente, rápido y preciso. Se toma el tiempo para explicar el problema y darte la mejor solución.',
    n: 'Emilio Ibáñez',
  },
  {
    q: 'Excelente servicio, desde la comunicación rápida y transparente hasta el trabajo realizado en horas. Impecable.',
    n: 'Humberto Rojas',
  },
]

export const metadata = demoMetadata({
  slug: 'gasfiteria-bastias-talca',
  title: 'Gasfitería Bastías — gasfiter certificado SEC 24 horas en Talca',
  description:
    'Gasfitería de urgencia en Talca: fugas de agua y gas, calefón, destapes y llaves. Atendemos 24 horas, todos los días.',
  image: `${IMG}/hero.webp`,
})

export default function GasfiteriaDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.navy, color: C.bone }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-8 h-8 rounded-full object-cover" />
            <span className={`${display.className} font-bold`}>Gasfitería Bastías</span>
          </span>
        }
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Trabajos', href: '#trabajos' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.navy,
          ink: C.bone,
          line: 'rgba(234,241,244,0.12)',
          btnBg: C.flame,
          btnInk: '#1A0E00',
        }}
        ctaLabel="Urgencia"
      />

      {/* ── Hero: la llama del calefón, en grande ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Quemador de calefón a gas con llamas azules encendidas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(10,29,48,0.62) 0%, rgba(10,29,48,0.18) 42%, rgba(6,20,35,0.94) 90%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 md:pb-14">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <span
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full`}
                style={{ backgroundColor: C.flame, color: '#1A0E00' }}
              >
                Abierto 24 horas
              </span>
              <span
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border`}
                style={{ borderColor: 'rgba(79,195,220,0.6)', color: C.aqua }}
              >
                Técnico certificado SEC
              </span>
            </div>
            <h1
              className={`${display.className} font-bold leading-[0.98] mt-5`}
              style={{ fontSize: 'clamp(2.6rem, 11vw, 6.2rem)', color: C.bone }}
            >
              Fuga de agua o gas,<br />
              <span style={{ color: C.aqua }}>hoy se arregla</span>
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-xl" style={{ color: 'rgba(234,241,244,0.85)' }}>
              Gasfitería en Talca con atención las 24 horas, todos los días.
              Calefón, fugas, destapes e instalaciones de gas.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold text-base px-7 py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.flame, color: '#1A0E00' }}
              >
                Pedir gasfiter ahora
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center text-base px-5 py-3 rounded-full border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(234,241,244,0.45)', color: C.bone }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
        {/* Cinta 24h — el sello del negocio */}
        <div
          aria-hidden="true"
          className="relative flex gap-6 whitespace-nowrap py-2.5 overflow-hidden"
          style={{ backgroundColor: C.aqua }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] shrink-0`}
              style={{ color: C.aquaInk }}
            >
              24 horas · todos los días
            </span>
          ))}
        </div>
      </section>

      {/* ── Servicios: la planilla del gasfiter ── */}
      <section id="servicios">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: C.aqua }}>
              Lo que hace
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl mt-2`}>
              Gasfitería completa, sin vueltas
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-px rounded-2xl overflow-hidden border md:grid-cols-2" style={{ borderColor: C.line, backgroundColor: C.line }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={i * 50}>
                <article className="h-full p-5 md:p-6" style={{ backgroundColor: C.navy }}>
                  <h3 className={`${display.className} font-semibold text-lg md:text-xl`} style={{ color: C.bone }}>
                    {s.t}
                  </h3>
                  <p className="mt-1.5 text-sm" style={{ color: C.muted }}>
                    {s.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trabajos reales ── */}
      <section id="trabajos" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: C.aqua }}>
              Terreno real
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl mt-2`}>
              Trabajos en Talca
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.t} delay={i * 70}>
                <figure className="rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={t.img}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.14em] p-3`}
                    style={{ color: C.muted }}
                  >
                    {t.t}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-3 flex-wrap">
              <Stars value={4.8} color={C.flame} className="w-5 h-5" />
              <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                {BIZ.rating} · {BIZ.reviews}
              </p>
            </div>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl mt-4 max-w-2xl`}>
              Puntual, honesto y sin cobrar de más
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.n} delay={i * 70}>
                <blockquote
                  className="h-full rounded-xl border p-5 flex flex-col"
                  style={{ borderColor: C.line, backgroundColor: 'rgba(234,241,244,0.03)' }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(234,241,244,0.9)' }}>
                    “{r.q}”
                  </p>
                  <footer className={`${mono.className} mt-4 pt-3 text-xs uppercase tracking-[0.16em] border-t`} style={{ color: C.aqua, borderColor: C.line }}>
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
              className={`${mono.className} inline-block mt-6 text-xs uppercase tracking-[0.18em] underline underline-offset-4`}
              style={{ color: C.aqua }}
            >
              Ver todas las reseñas ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Urgencia + ubicación ── */}
      <section id="ubicacion" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: C.flame }}>
              Emergencia ahora
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl mt-2 leading-[1.02]`}>
              {BIZ.address},<br />Talca
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-md" style={{ color: C.muted }}>
              Atención a domicilio en Talca, las 24 horas de lunes a domingo.
              Escribe o llama directo — el técnico responde por WhatsApp.
            </p>
            <dl className="mt-8 space-y-4">
              <div className="flex justify-between border-b pb-3" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Horario
                </dt>
                <dd className={`${mono.className} text-sm font-medium`} style={{ color: C.aqua }}>
                  Abierto 24 horas
                </dd>
              </div>
              <div className="flex justify-between border-b pb-3" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  WhatsApp
                </dt>
                <dd className={`${mono.className} text-sm`} style={{ color: C.bone }}>
                  {BIZ.phoneDisplay}
                </dd>
              </div>
              <div className="flex justify-between border-b pb-3" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Instagram
                </dt>
                <dd>
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} text-sm underline underline-offset-4`}
                    style={{ color: C.bone }}
                  >
                    @gasfiter_en_talca
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full min-h-[300px] rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
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
      <section style={{ backgroundColor: C.aqua, color: C.aquaInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
          <div className="flex-1">
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: '#0A3B47' }}>
              24 horas · todos los días
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-6xl leading-[0.98] mt-2`}>
              Se le fue el agua o huele a gas
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold text-base px-8 py-3 rounded-full transition-transform active:scale-95 shrink-0"
            style={{ backgroundColor: C.navyDeep, color: C.bone }}
          >
            WhatsApp {BIZ.phoneDisplay}
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className={`${display.className} font-bold text-lg`} style={{ color: C.bone }}>
              Gasfitería Bastías
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay} · Técnico certificado SEC
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-xs" style={{ color: C.muted }}>
              Gasfitería 24 horas · {BIZ.address}, {BIZ.city}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
              style={{ color: C.muted }}
            >
              Google Maps
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />
    </div>
  )
}
