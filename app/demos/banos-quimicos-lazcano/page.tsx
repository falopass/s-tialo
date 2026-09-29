import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
        { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Petróleo de faena + el verde de sus baños químicos + papel de plano.
const C = {
  navy: '#0E2233',
  navy2: '#12304A',
  papel: '#F2F0E9',
  card: '#FBFAF6',
  ink: '#15242E',
  muted: '#5E6B73',
  verde: '#4E9A3C',
  verdeDeep: '#2F6B24',
  celeste: '#7FB4D9',
  line: 'rgba(21,36,46,0.16)',
  lineDark: 'rgba(255,255,255,0.14)',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'banos-quimicos-lazcano',
  title: 'Baños Químicos Lazcano — Arriendo de baños portátiles y limpieza de fosas en Talca',
  description:
    'Baños Químicos Lazcano (Servicios y Construcciones Fernando Lazcano Ltda.), Calle 4 Oriente 1632, Talca. Arriendo de baños químicos, limpieza de fosas sépticas con urgencias 24 h y arriendo de maquinaria.',
  image: `${IMG}/camion.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Urgencia 24 h', href: '#urgencia' },
  { label: 'El equipo', href: '#equipo' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Las tres líneas reales del negocio, de su propio material.
const SERVICIOS = [
  {
    n: '01',
    t: 'Baños químicos portátiles',
    d: 'Arriendo y mantención de baños químicos para obras, faenas y eventos. Precios conversables según cantidad y plazo.',
    img: 'bano-quimico',
    alt: 'Baño químico portátil verde de Baños Químicos Lazcano',
  },
  {
    n: '02',
    t: 'Limpieza de fosas sépticas',
    d: 'Limpia Fosas Chile: camión aljibe y aspiración de fosas, con urgencias 24 horas en Talca y la región.',
    img: 'camion-fosas',
    alt: 'Camión de limpieza de fosas de Limpia Fosas Chile',
  },
  {
    n: '03',
    t: 'Construcción y maquinaria',
    d: 'Obras civiles y arriendo de equipos: compresor, trompo y la maquinaria que la faena pida.',
    img: 'compresor',
    alt: 'Compresor de obra en arriendo de Lazcano',
  },
]

const HORARIO = [
  ['Lunes a viernes', '8:00 – 17:30'],
  ['Sábado y domingo', 'Cerrado'],
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E9A3C]'

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(14,34,51,0.94)',
          ink: '#F2F0E9',
          line: C.lineDark,
          btnBg: C.verde,
          btnInk: '#FFFFFF',
        }}
      />

      {/* Hero: cartel de faena sobre petróleo, con el camión real */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.navy }}>
        <div className="absolute inset-0 -z-0 opacity-[0.07]" aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent 0 31px, #FFF 31px 32px), repeating-linear-gradient(90deg, transparent 0 31px, #FFF 31px 32px)',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-5 pt-32 pb-16 md:pt-40 md:pb-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.celeste }}>
              {BIZ.legal} · {BIZ.city}
            </p>
            <h1 className={`${display.className} mt-4 text-[52px] leading-[0.95] sm:text-[76px] md:text-[92px] uppercase`} style={{ color: C.papel }}>
              Baños químicos
              <br />
              <span style={{ color: C.verde }}>y fosas limpias</span>
              <br />
              sin vueltas
            </h1>
            <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(242,240,233,0.78)' }}>
              Arriendo de baños portátiles, limpieza de fosas sépticas con
              urgencias 24 horas y maquinaria para la obra — desde Calle 4
              Oriente, Talca.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={TEL_LINK}
                className={`min-h-[48px] inline-flex items-center justify-center px-7 font-semibold rounded-full tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.verde, color: '#FFF' }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
              <a
                href="#servicios"
                className={`min-h-[48px] inline-flex items-center justify-center px-7 rounded-full border tap-44 ${FOCUS}`}
                style={{ borderColor: 'rgba(242,240,233,0.5)', color: C.papel }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl">
              {[
                ['Lun–Vie', '8:00 – 17:30'],
                ['Urgencias fosas', '24 horas'],
                ['Base', '4 Ote. 1632, Talca'],
              ].map(([k, v]) => (
                <div key={k} className="border rounded-xl px-3.5 py-3" style={{ borderColor: C.lineDark }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.celeste }}>{k}</p>
                  <p className={`${mono.className} mt-1 text-[12px] md:text-[13px] font-semibold`} style={{ color: C.papel }}>{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Las tres líneas, como fichas de obra */}
      <section id="servicios" className="px-5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.verdeDeep }}>
              Tres líneas de trabajo
            </p>
            <h2 className={`${display.className} mt-3 text-[40px] sm:text-[56px] leading-[0.98] uppercase`}>
              Lo que resuelven en terreno
            </h2>
          </Reveal>
          <div className="mt-12 space-y-6">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <article
                  className={`grid sm:grid-cols-[110px_1fr] md:grid-cols-[140px_1fr_260px] items-stretch rounded-2xl border overflow-hidden ${i % 2 ? 'sm:text-left' : ''}`}
                  style={{ borderColor: C.line, backgroundColor: C.card }}
                >
                  <div className={`${display.className} hidden sm:flex items-center justify-center text-[44px] md:text-[56px]`} style={{ backgroundColor: C.navy, color: C.verde }}>
                    {s.n}
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className={`${display.className} text-[26px] md:text-[30px] uppercase leading-none`}>
                      <span className={`${mono.className} sm:hidden text-[12px] align-middle mr-2`} style={{ color: C.verdeDeep }}>{s.n} /</span>
                      {s.t}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed max-w-lg" style={{ color: C.muted }}>{s.d}</p>
                    <a href={TEL_LINK} className={`${mono.className} mt-4 inline-flex text-[13px] font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.verdeDeep }}>
                      Consultar al {BIZ.phoneDisplay}
                    </a>
                  </div>
                  <div className="relative h-44 sm:h-auto md:h-full min-h-[160px]">
                    <Image src={`${IMG}/${s.img}.webp`} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 260px" className="object-cover" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Urgencias 24 h — la banda verde */}
      <section id="urgencia" style={{ backgroundColor: C.verde }}>
        <div className="max-w-5xl mx-auto px-5 py-14 md:py-16 grid md:grid-cols-[1fr_auto] items-center gap-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: 'rgba(255,255,255,0.85)' }}>
              Limpia Fosas Chile
            </p>
            <h2 className={`${display.className} mt-2 text-[36px] sm:text-[48px] leading-[0.98] uppercase`} style={{ color: '#FFF' }}>
              ¿Fosa colapsada? Salen a la hora que sea
            </h2>
            <p className="mt-3 max-w-lg text-[15px]" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Las urgencias de fosas sépticas no esperan a la mañana: su línea de
              emergencia atiende 24 horas.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl p-5" style={{ backgroundColor: C.card }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/fosas-logo.webp`} alt="Limpia Fosas Chile, urgencias 24 horas" className="w-56 h-auto" />
              <a
                href={TEL_LINK}
                className={`${mono.className} mt-4 min-h-[48px] flex items-center justify-center rounded-full font-bold text-[15px] tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.navy, color: C.papel }}
              >
                {BIZ.phoneTel}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* El equipo real */}
      <section id="equipo" className="px-5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.verdeDeep }}>
              De Talca, en terreno
            </p>
            <h2 className={`${display.className} mt-3 text-[40px] sm:text-[56px] leading-[0.98] uppercase`}>
              Gente que se nota en la obra
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Reveal className="row-span-2">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/fernando.webp`} alt="Fernando Lazcano en terreno" fill sizes="(max-width: 768px) 50vw, 320px" className="object-cover" />
                <span className={`${mono.className} absolute bottom-2 left-2 px-2 py-1 text-[10px] uppercase tracking-[0.14em] rounded`} style={{ backgroundColor: 'rgba(14,34,51,0.85)', color: C.papel }}>
                  Fernando Lazcano
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/camion.webp`} alt="Camión de trabajo de Lazcano" fill sizes="(max-width: 768px) 50vw, 320px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/bano-quimico.webp`} alt="Baño químico portátil instalado" fill sizes="(max-width: 768px) 50vw, 320px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={180} className="col-span-2">
              <div className="relative h-[170px] rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/casa-interior.webp`} alt="Interior de vivienda construida por Lazcano" fill sizes="(max-width: 768px) 100vw, 640px" className="object-cover" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border px-4 py-2" style={{ borderColor: C.line, backgroundColor: C.card }}>
              <Stars value={BIZ.rating} color={C.verde} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[12px] font-semibold`}>{BIZ.rating.toFixed(1)}</span>
              <span className="text-[12px]" style={{ color: C.muted }}>· {BIZ.reviews} reseñas en Google</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ubicación */}
      <section id="llegar" className="px-5 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto rounded-2xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
          <div className="grid md:grid-cols-[1fr_1.15fr]">
            <div className="p-7 md:p-9">
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.verdeDeep }}>
                Base de operaciones
              </p>
              <h2 className={`${display.className} mt-3 text-[32px] sm:text-[40px] leading-[0.98] uppercase`}>
                Calle 4 Oriente 1632, Talca
              </h2>
              <dl className="mt-6 space-y-4 text-[15px]">
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Horario oficina</dt>
                  {HORARIO.map(([dia, hora]) => (
                    <dd key={dia} className="mt-1 flex justify-between gap-4 border-b pb-2" style={{ borderColor: C.line }}>
                      <span>{dia}</span>
                      <span className={`${mono.className} font-semibold`}>{hora}</span>
                    </dd>
                  ))}
                  <dd className="mt-2 text-[13px]" style={{ color: C.verdeDeep }}>Urgencias de fosas: 24 horas</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Teléfono</dt>
                  <dd className="mt-1">
                    <a href={TEL_LINK} className={`font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.verdeDeep }}>
                      {BIZ.phoneTel}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 min-h-[48px] inline-flex items-center justify-center px-7 rounded-full font-semibold tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.navy, color: C.papel }}
              >
                Abrir en Google Maps
              </a>
            </div>
            <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
          </div>
        </div>
      </section>

      <footer className="px-5 py-10" style={{ backgroundColor: C.navy }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-auto rounded" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase tracking-wide`} style={{ color: C.papel }}>{BIZ.name}</p>
              <p className="text-[12px]" style={{ color: 'rgba(242,240,233,0.6)' }}>{BIZ.legal}</p>
            </div>
          </div>
          <a href={TEL_LINK} className={`${mono.className} text-[13px] font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.celeste }}>
            {BIZ.phoneTel}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.verde} fg="#FFF" />
    </div>
  )
}
