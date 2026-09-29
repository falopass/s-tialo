import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// El ladrillo de su portón de la 4 Oriente + fierro oscuro + el amarillo
// de señalización de su logo. Mono para los datos de faena.
const C = {
  fierro: '#231D1A',
  fierro2: '#2E2621',
  ladrillo: '#B0452B',
  ladrilloDeep: '#8C331E',
  ambar: '#E8B62C',
  papel: '#F2EBDF',
  card: '#FBF6EC',
  ink: '#241D18',
  muted: '#6F6052',
  line: 'rgba(36,29,24,0.18)',
  lineDark: 'rgba(242,235,223,0.16)',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'servicios-y-construcciones-fernando-lazcano',
  title: 'Fernando Lazcano Ltda. — Obras civiles y arriendo de maquinaria en Talca',
  description:
    'Servicios y Construcciones Fernando Lazcano Ltda., Calle 4 Oriente 1632, Talca. Empresa constructora: arriendo de maquinaria, baños químicos portátiles y limpieza de fosas con urgencias 24 horas.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El portón', href: '#porton' },
  { label: 'Tres carteles', href: '#carteles' },
  { label: 'En terreno', href: '#terreno' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Los servicios que su portón anuncia a la calle, leídos de su propia
// fachada (foto real de Street View).
const PORTON = [
  { t: 'Retroexcavadora', icon: 'retro', foto: null },
  { t: 'Minicargador', icon: 'mini', foto: null },
  { t: 'Compresor', icon: null, foto: 'compresor' },
  { t: 'Martillo hidráulico', icon: 'martillo', foto: null },
  { t: 'Contenedor de escombros', icon: 'contenedor', foto: null },
  { t: 'Baños químicos', icon: null, foto: 'bano-portatil' },
  { t: 'Limpieza de fosas', icon: null, foto: 'camion-fosa' },
  { t: 'Obras civiles', icon: 'obra', foto: null },
]

const HORARIO = [
  ['Lunes a viernes', '8:00 – 17:30'],
  ['Sábado y domingo', 'Cerrado'],
]

const FOCUS = `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8B62C]`

function Picto({ name }: { name: string }) {
  const s = {
    stroke: C.ambar,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  }
  switch (name) {
    case 'retro': // retroexcavadora
      return (
        <svg viewBox="0 0 48 32" className="w-12 h-8" {...s} aria-hidden="true">
          <path d="M8 22h8l4-6h8l6 6" />
          <circle cx="13" cy="26" r="4" />
          <circle cx="33" cy="26" r="4" />
          <path d="M20 16V8h8l6 8" />
          <path d="M34 16l8-6M42 10l3 3" />
        </svg>
      )
    case 'mini': // minicargador
      return (
        <svg viewBox="0 0 48 32" className="w-12 h-8" {...s} aria-hidden="true">
          <path d="M10 20h16l6-8h8" />
          <circle cx="16" cy="25" r="4" />
          <circle cx="32" cy="25" r="4" />
          <path d="M38 12l6 4-4 5" />
          <path d="M14 20v-7h10" />
        </svg>
      )
    case 'martillo': // martillo hidráulico
      return (
        <svg viewBox="0 0 48 32" className="w-12 h-8" {...s} aria-hidden="true">
          <path d="M10 6l20 8" />
          <path d="M30 14l8 10M34 20l4 4" />
          <path d="M10 6l-3 5M7 11l5 4" />
          <circle cx="38" cy="28" r="3" />
        </svg>
      )
    case 'contenedor': // contenedor de escombros
      return (
        <svg viewBox="0 0 48 32" className="w-12 h-8" {...s} aria-hidden="true">
          <path d="M6 12h36l-4 14H10L6 12z" />
          <path d="M6 12l4-5h28l4 5" />
          <path d="M16 16l2 7M24 16v7M32 16l-2 7" />
        </svg>
      )
    case 'obra': // obras civiles — grúa
      return (
        <svg viewBox="0 0 48 32" className="w-12 h-8" {...s} aria-hidden="true">
          <path d="M10 28V10h6l18-4v6l-18 4" />
          <path d="M34 6v8M34 14l3 3-3 3-3-3" />
          <path d="M6 28h28" />
          <path d="M10 18h12" />
        </svg>
      )
    default:
      return null
  }
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(35,29,26,0.88)',
          ink: C.papel,
          line: C.lineDark,
          btnBg: C.ambar,
          btnInk: '#231D1A',
        }}
      />

      {/* Hero: el portón real de la 4 Oriente 1632 */}
      <section id="inicio" className="relative min-h-[92dvh] flex items-end overflow-hidden" style={{ backgroundColor: C.fierro }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de Servicios y Construcciones Fernando Lazcano: portón de arriendo de maquinaria en Calle 4 Oriente 1632, Talca (Google Street View)"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" aria-hidden="true" style={{ background: 'linear-gradient(180deg, rgba(35,29,26,0.30) 0%, rgba(35,29,26,0.12) 40%, rgba(35,29,26,0.90) 100%)' }} />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-12 pt-40">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.ambar }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
            <h1 className={`${display.className} mt-3 text-[44px] leading-[0.92] sm:text-[64px] md:text-[84px] font-extrabold uppercase tracking-tight`} style={{ color: C.papel }}>
              El portón que ya
              <br />
              <span style={{ color: C.ambar }}>arrienda la obra</span>
            </h1>
            <p className="mt-4 max-w-md text-[15px] md:text-base" style={{ color: 'rgba(242,235,223,0.85)' }}>
              Maquinaria, baños químicos y limpieza de fosas desde una sola
              casa en la 4 Oriente. La fachada de la foto es la de ellos.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(35,29,26,0.72)', border: `1px solid ${C.lineDark}` }}>
              <Stars value={BIZ.rating} color={C.ambar} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[12px] font-bold`} style={{ color: C.papel }}>{BIZ.rating.toFixed(1)}</span>
              <span className="text-[12px]" style={{ color: 'rgba(242,235,223,0.75)' }}>
                en Google · {BIZ.reviews} reseñas
              </span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={TEL_LINK}
                className={`min-h-[48px] inline-flex items-center justify-center px-7 font-semibold uppercase tracking-wide tap-44 ${display.className} text-lg ${FOCUS}`}
                style={{ backgroundColor: C.ambar, color: C.fierro }}
              >
                Llamar al {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[48px] inline-flex items-center justify-center px-7 border-2 font-semibold uppercase tracking-wide tap-44 ${display.className} text-lg ${FOCUS}`}
                style={{ borderColor: C.papel, color: C.papel }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* El portón catálogo: los servicios pintados en su propio portón */}
      <section id="porton" className="px-5 py-20 md:py-28" style={{ backgroundColor: C.fierro }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} text-[38px] sm:text-[54px] leading-[0.95] font-extrabold uppercase tracking-tight`} style={{ color: C.papel }}>
              El portón de la 4 Oriente
              <br />
              <span style={{ color: C.ambar }}>ya lo dice todo</span>
            </h2>
            <p className="mt-4 max-w-lg text-[15px]" style={{ color: 'rgba(242,235,223,0.72)' }}>
              Lo que anuncia la reja es lo que hacen: arriendo de maquinaria
              para la obra y los dos servicios sanitarios de la casa.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-[2px] border" style={{ backgroundColor: C.lineDark, borderColor: C.lineDark }}>
            {PORTON.map((s, i) => (
              <Reveal key={s.t} delay={i * 50} className="h-full">
                <div className="h-full flex flex-col p-4 md:p-5" style={{ backgroundColor: i % 2 === 0 ? C.fierro2 : C.fierro }}>
                  {s.foto ? (
                    <div className="relative aspect-[16/10] overflow-hidden mb-3">
                      <Image
                        src={`${IMG}/${s.foto}.webp`}
                        alt={`${s.t} — foto del material publicado por ${BIZ.short}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 300px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] mb-3 flex items-center justify-center" aria-hidden="true">
                      {s.icon && <Picto name={s.icon} />}
                    </div>
                  )}
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.ambar }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`${display.className} mt-1 text-xl md:text-2xl font-semibold uppercase leading-tight`} style={{ color: C.papel }}>
                    {s.t}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(242,235,223,0.66)' }}>
            Precios conversables · consulte al {BIZ.phoneDisplay}
          </p>
        </div>
      </section>

      {/* Una casa, tres carteles */}
      <section id="carteles" className="px-5 py-20 md:py-28" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} text-[38px] sm:text-[54px] leading-[0.95] font-extrabold uppercase tracking-tight`}>
              Una casa,
              <br />
              <span style={{ color: C.ladrillo }}>tres carteles</span>
            </h2>
            <p className="mt-4 max-w-lg text-[15px]" style={{ color: C.muted }}>
              La misma razón social atiende con tres nombres según el
              trabajo. Todos salen del mismo galpón de la 4 Oriente.
            </p>
          </Reveal>
          <div className="mt-10 space-y-4">
            <Reveal>
              <article className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border p-5" style={{ borderColor: C.line, backgroundColor: C.card }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/logo.webp`} alt="Logo de Servicios y Construcciones Fernando Lazcano Ltda." className="h-10 w-auto shrink-0 self-start" />
                <div className="flex-1">
                  <h3 className={`${display.className} text-2xl font-semibold uppercase`}>La constructora</h3>
                  <p className="mt-1 text-[14px] leading-snug" style={{ color: C.muted }}>
                    Obras civiles y arriendo de maquinaria: compresor, trompo y
                    el equipo que la faena pida.
                  </p>
                </div>
                <span className={`${mono.className} shrink-0 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]`} style={{ backgroundColor: C.fierro, color: C.ambar }}>
                  Razón social
                </span>
              </article>
            </Reveal>
            <Reveal delay={70}>
              <article className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border p-5" style={{ borderColor: C.line, backgroundColor: C.card }}>
                <div className="relative w-full sm:w-36 aspect-[3/1] sm:aspect-[4/3] overflow-hidden rounded-lg shrink-0">
                  <Image src={`${IMG}/bano-portatil.webp`} alt="Baño químico portátil verde de Baños Químicos Lazcano" fill sizes="(max-width: 640px) 100vw, 144px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className={`${display.className} text-2xl font-semibold uppercase`}>Baños Químicos Lazcano</h3>
                  <p className="mt-1 text-[14px] leading-snug" style={{ color: C.muted }}>
                    Arriendo y mantención de baños químicos portátiles para
                    obras y eventos. Variedad de modelos, precios conversables.
                  </p>
                </div>
                <span className={`${mono.className} shrink-0 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]`} style={{ backgroundColor: '#3E7D2E', color: '#F2EBDF' }}>
                  Sanitarios
                </span>
              </article>
            </Reveal>
            <Reveal delay={140}>
              <article className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border p-5" style={{ borderColor: C.line, backgroundColor: C.card }}>
                <div className="relative w-full sm:w-36 aspect-[16/9] sm:aspect-[4/3] overflow-hidden rounded-lg shrink-0">
                  <Image src={`${IMG}/camion-fosa.webp`} alt="Camión aljibe de Limpia Fosas Chile para limpieza de fosas sépticas" fill sizes="(max-width: 640px) 100vw, 144px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className={`${display.className} text-2xl font-semibold uppercase`}>Limpia Fosas Chile</h3>
                  <p className="mt-1 text-[14px] leading-snug" style={{ color: C.muted }}>
                    Aspiración de fosas sépticas y destape de alcantarillados
                    con camión propio. Urgencias 24 horas en Talca y la región.
                  </p>
                </div>
                <span className={`${mono.className} shrink-0 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]`} style={{ backgroundColor: C.ladrillo, color: '#FFF4E8' }}>
                  Urgencias 24 h
                </span>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* En terreno: la faena tiene cara */}
      <section id="terreno" className="px-5 py-20 md:py-28" style={{ backgroundColor: C.ladrillo }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} text-[38px] sm:text-[54px] leading-[0.95] font-extrabold uppercase tracking-tight`} style={{ color: '#FFF4E8' }}>
              La faena
              <br />
              <span style={{ color: C.ambar }}>tiene cara</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-[1fr_1.4fr_1fr] gap-4 md:gap-5 items-end">
            <Reveal delay={60} className="md:-rotate-2">
              <figure className="border-4 shadow-xl" style={{ borderColor: '#FFF4E8' }}>
                <Image src={`${IMG}/fernando.webp`} alt="Fernando Lazcano, dueño de la empresa, en terreno" width={320} height={422} className="w-full h-auto" />
                <figcaption className={`${mono.className} px-2 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-center`} style={{ backgroundColor: '#FFF4E8', color: C.ink }}>
                  Fernando, el dueño
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={130}>
              <figure className="border-4 shadow-xl" style={{ borderColor: '#FFF4E8' }}>
                <Image src={`${IMG}/camion-verde.webp`} alt="Camión de trabajo con estanque verde de Fernando Lazcano" width={474} height={243} className="w-full h-auto" />
                <figcaption className={`${mono.className} px-2 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-center`} style={{ backgroundColor: '#FFF4E8', color: C.ink }}>
                  El camión de la casa
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={200} className="col-span-2 md:col-span-1 md:rotate-2">
              <figure className="border-4 shadow-xl" style={{ borderColor: '#FFF4E8' }}>
                <Image src={`${IMG}/proyecto-lago.webp`} alt="Vista al lago desde una obra de Fernando Lazcano, de su material publicado" width={500} height={540} className="w-full h-auto" />
                <figcaption className={`${mono.className} px-2 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-center`} style={{ backgroundColor: '#FFF4E8', color: C.ink }}>
                  Obra junto al lago
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-xl p-5" style={{ backgroundColor: 'rgba(35,29,26,0.35)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/fosas-logo.webp`} alt="Limpia Fosas Chile, especialistas en limpieza de fosas y destape de alcantarillados, urgencias 24 horas" className="w-64 h-auto" />
              <p className="text-[15px] leading-snug" style={{ color: '#FFF4E8' }}>
                Si la fosa colapsa un domingo, es este número el que contesta:
                <a href={TEL_LINK} className={`ml-2 font-bold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.ambar }}>
                  {BIZ.phoneDisplay}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Obras: de la casa al lago */}
      <section id="obras" className="px-5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} text-[38px] sm:text-[54px] leading-[0.95] font-extrabold uppercase tracking-tight`}>
              Obra gruesa
              <br />
              <span style={{ color: C.ladrillo }}>y terminaciones</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-[1.35fr_1fr] gap-5 items-stretch">
            <Reveal delay={60} className="h-full">
              <figure className="h-full flex flex-col rounded-xl overflow-hidden border" style={{ borderColor: C.line, backgroundColor: C.card }}>
                <div className="relative flex-1 min-h-[240px]">
                  <Image src={`${IMG}/casa-interior.webp`} alt="Interior de vivienda construida por Fernando Lazcano, de su material publicado" fill sizes="(max-width: 768px) 100vw, 640px" className="object-cover" />
                </div>
                <figcaption className="p-5">
                  <h3 className={`${display.className} text-2xl font-semibold uppercase`}>Viviendas completas</h3>
                  <p className="mt-1 text-[14px] leading-snug" style={{ color: C.muted }}>
                    De la fundición a las terminaciones: su material publicado
                    muestra casas entregadas llave en mano.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={130} className="h-full">
              <div className="h-full flex flex-col justify-between rounded-xl border p-6 md:p-7" style={{ borderColor: C.line, backgroundColor: C.fierro }}>
                <div>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`} style={{ color: C.ambar }}>
                    Cómo se trabaja
                  </p>
                  <ul className="mt-5 space-y-4">
                    {[
                      ['Presupuesto directo', 'Llame, cuente la faena y se conversa el precio.'],
                      ['Equipo propio', 'Camión aljibe, maquinaria y baños de la casa: sin tercerizar.'],
                      ['De la 4 Oriente a su terreno', 'Base en Talca, trabajo en toda la región del Maule.'],
                    ].map(([t, d], i) => (
                      <li key={t} className="flex gap-3">
                        <span className={`${mono.className} mt-0.5 shrink-0 text-[11px] font-bold`} style={{ color: C.ambar }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="font-semibold text-[15px]" style={{ color: C.papel }}>{t}</p>
                          <p className="text-[13px] mt-0.5 leading-snug" style={{ color: 'rgba(242,235,223,0.68)' }}>{d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={TEL_LINK}
                  className={`mt-7 min-h-[48px] inline-flex items-center justify-center px-6 font-semibold uppercase tracking-wide tap-44 ${display.className} text-lg ${FOCUS}`}
                  style={{ backgroundColor: C.ambar, color: C.fierro }}
                >
                  Pedir presupuesto
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ubicación y horario */}
      <section id="llegar" className="px-5 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
              <div className="grid md:grid-cols-[1fr_1.15fr]">
                <div className="p-7 md:p-9">
                  <h2 className={`${display.className} text-[32px] sm:text-[40px] leading-[0.95] font-extrabold uppercase tracking-tight`}>
                    Calle 4 Oriente 1632,
                    <br />
                    <span style={{ color: C.ladrillo }}>Talca</span>
                  </h2>
                  <dl className="mt-6 space-y-4 text-[15px]">
                    <div>
                      <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Horario</dt>
                      {HORARIO.map(([dia, hora]) => (
                        <dd key={dia} className="mt-1 flex justify-between gap-4 border-b pb-2" style={{ borderColor: C.line }}>
                          <span>{dia}</span>
                          <span className={`${mono.className} font-semibold`}>{hora}</span>
                        </dd>
                      ))}
                      <dd className="mt-2 text-[13px] font-medium" style={{ color: C.ladrilloDeep }}>
                        Urgencias de fosas: 24 horas
                      </dd>
                    </div>
                    <div>
                      <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Teléfono</dt>
                      <dd className="mt-1">
                        <a href={TEL_LINK} className={`font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.ladrilloDeep }}>
                          {BIZ.phoneTel}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.legal} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 py-8 border-t" style={{ borderColor: C.line, backgroundColor: '#EAE1D2' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-auto" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-semibold uppercase tracking-wide leading-tight`}>{BIZ.legal}</p>
              <p className="text-[12px]" style={{ color: C.muted }}>{BIZ.address} · {BIZ.city}</p>
            </div>
          </div>
          <a href={TEL_LINK} className={`${mono.className} text-[13px] font-bold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.ladrilloDeep }}>
            {BIZ.phoneTel}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.short}`} bg={C.ladrillo} fg="#FFF4E8" />
    </div>
  )
}
