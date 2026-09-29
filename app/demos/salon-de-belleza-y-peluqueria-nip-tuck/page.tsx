import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waServicio, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Identidad desde el letrero real: la mujer del sombrero en ciruela y
 * rosa viejo sobre fondo claro. Editorial de belleza: crema rosado,
 * ciruela profundo y un solo acento rosa; serif con itálicas.
 */
const C = {
  paper: '#FBF2EC',
  paperSoft: '#F4E4DA',
  plum: '#33101F',
  plum2: '#48182E',
  rose: '#A8416B',
  roseDeep: '#8F3359',
  roseSoft: '#E9C6D4',
  ink: '#33101F',
  muted: '#7C5A66',
  line: 'rgba(51,16,31,0.14)',
  lineLight: 'rgba(251,242,236,0.22)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F3359]'
const FOCUS_LIGHT =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBF2EC]'

export const metadata: Metadata = demoMetadata({
  slug: 'salon-de-belleza-y-peluqueria-nip-tuck',
  title: 'Nip Tuck — Salón de belleza y peluquería en San Clemente',
  description:
    'Cortes, color, permanente, peinados y manicure en Las Camelias 44, San Clemente. 5,0 estrellas en Google. Agenda tu hora por WhatsApp.',
  image: `${IMG}/hero-trenzas.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const MARQUEE = [
  'Cortes',
  'Peinados',
  'Tinte',
  'Permanente',
  'Alisados',
  'Depilación',
  'Manicure',
  'Pedicure',
  'Maquillaje',
  'Masajes',
]

const TRABAJOS = [
  {
    img: `${IMG}/hero-trenzas.webp`,
    alt: 'Peinado con trenzas realizado en Nip Tuck, San Clemente',
    num: '01',
    label: 'Peinados y trenzas',
  },
  {
    img: `${IMG}/corte-fade.webp`,
    alt: 'Corte degradado terminado en el salón Nip Tuck',
    num: '02',
    label: 'Cortes de precisión',
  },
  {
    img: `${IMG}/rizos.webp`,
    alt: 'Rizos definidos después de permanente en Nip Tuck',
    num: '03',
    label: 'Permanente y rizos',
  },
  {
    img: `${IMG}/foil.webp`,
    alt: 'Trabajo de color con láminas en proceso, Nip Tuck',
    num: '04',
    label: 'Color y mechas',
  },
  {
    img: `${IMG}/unas.webp`,
    alt: 'Manicure con diseño terminada en Nip Tuck',
    num: '05',
    label: 'Manicure y uñas',
  },
  {
    img: `${IMG}/permanente.webp`,
    alt: 'Bigudíes de permanente instalados en el salón Nip Tuck',
    num: '06',
    label: 'Alisados y forma',
  },
]

const SERVICIOS = [
  {
    grupo: 'Cabello',
    items: ['Cortes', 'Peinados', 'Tinte', 'Permanente', 'Alisados permanente'],
  },
  {
    grupo: 'Manos y pies',
    items: ['Manicure', 'Uñas acrílicas', 'Uñas gel', 'Pintura permanente', 'Pedicure'],
  },
  {
    grupo: 'Rostro y relax',
    items: ['Depilación', 'Maquillaje', 'Maquillaje de fantasía', 'Masajes de relajación'],
  },
]

const RESENAS = [
  {
    text: 'Excelente profesional, deja hermoso y sano el cabello de mi hija. Muy cuidadosa de todo. Sabe perfectamente lo que debe hacer y cómo. Además indica los riesgos que pueden ocurrir con lo que se solicita. De todos los salones de San Clemente es el mejor.',
    author: 'Pamela Leiva',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Me encanta la atención, es muy profesional, especializada, además de dejarte linda pasas un rato agradable. Lo recomiendo al 100%.',
    author: 'Blanca Ines Bahamondes',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Siempre he batallado para que los peluqueros entiendan el corte de cabello que quiero y en esta peluquería ha sido la única que ha entendido la idea que tenía para mi pelo. Quedé muy feliz.',
    author: 'Jorge Lara',
    meta: 'Reseña de Google · 5 estrellas',
  },
]

const HORARIO = [
  { days: 'Lunes a viernes', time: '11:00 a 20:00' },
  { days: 'Sábado', time: '11:00 a 16:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

export default function Page() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .nip-marquee { animation: nipmar 34s linear infinite; }
          @keyframes nipmar { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .nip-hero-img { animation: nipzoom 16s cubic-bezier(0.16,1,0.3,1) both; }
          @keyframes nipzoom { from { transform: scale(1.07); } to { transform: scale(1); } }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} font-semibold`}>
            Nip<em className="not-italic" style={{ color: C.rose }}>/</em>Tuck
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.plum,
          btnInk: '#FBF2EC',
        }}
        ctaLabel="Agendar hora"
      />

      {/* ── Portada de revista: titular + trío de trabajos ───────── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p
            className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4`}
            style={{ color: C.rose }}
          >
            Salón de belleza y peluquería · San Clemente
          </p>
          <h1
            className={`${display.className} font-semibold text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl tracking-tight max-w-4xl`}
          >
            Por fin una peluquera que te{' '}
            <em style={{ color: C.rose }}>entiende</em>.
          </h1>
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
              Cortes, color, permanente y uñas en Las Camelias 44, San
              Clemente. Diez reseñas, diez notas de cinco estrellas.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 font-bold rounded-full px-6 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 shrink-0 ${FOCUS}`}
              style={{ backgroundColor: C.roseDeep, color: '#FBF2EC' }}
            >
              Agenda tu hora
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-8 md:mt-10 relative">
            <div className="grid grid-cols-3 gap-2.5 md:gap-4">
              {[
                { img: `${IMG}/hero-trenzas.webp`, alt: 'Peinado con trenzas hecho en Nip Tuck' },
                { img: `${IMG}/corte-fade.webp`, alt: 'Corte degradado terminado en Nip Tuck' },
                { img: `${IMG}/recogido.webp`, alt: 'Recogido con trenza espiga hecho en Nip Tuck' },
              ].map((p, i) => (
                <figure
                  key={p.img}
                  className={`relative overflow-hidden ${i === 1 ? 'rounded-t-full' : 'rounded-t-[2rem]'} aspect-[3/4]`}
                  style={{ backgroundColor: C.paperSoft }}
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 33vw, 33vw"
                    className="object-cover nip-hero-img"
                  />
                </figure>
              ))}
            </div>
            <p
              className="mt-4 mx-auto w-fit flex items-center gap-1.5 rounded-full px-3.5 py-1.5 whitespace-nowrap shadow-md"
              style={{ backgroundColor: C.plum, color: '#FBF2EC' }}
            >
              <Stars value={5} color="#E9A9C4" className="w-[11px] h-[11px]" />
              <span className={`${mono.className} text-[10px] md:text-xs`}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Cinta corrida con los servicios del letrero ──────────── */}
      <section
        aria-label="Servicios del salón"
        className="mt-10 md:mt-14 py-4 md:py-5 overflow-hidden"
        style={{ backgroundColor: C.plum }}
      >
        <div className="nip-marquee flex w-max items-center gap-8 md:gap-12 will-change-transform">
          {[...MARQUEE, ...MARQUEE].map((s, i) => (
            <span
              key={i}
              className={`${display.className} text-xl md:text-3xl font-medium whitespace-nowrap flex items-center gap-8 md:gap-12`}
              style={{ color: i % 2 ? C.roseSoft : C.paper }}
            >
              {s}
              <span aria-hidden="true" style={{ color: C.rose }}>✳</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Desde la silla: placas de trabajos ───────────────────── */}
      <section id="trabajos" className="scroll-mt-20 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
            <h2 className={`${display.className} text-3xl md:text-5xl font-semibold tracking-tight max-w-xl`}>
              Directo <em style={{ color: C.rose }}>desde la silla</em>
            </h2>
            <p className="text-sm md:text-base max-w-sm" style={{ color: C.muted }}>
              Fotos reales publicadas por el salón: lo que ves es lo que
              sale de Las Camelias 44.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.num} delay={i * 70} className={i === 0 ? 'col-span-2 md:col-span-1' : ''}>
                <figure className="group">
                  <div
                    className="relative overflow-hidden rounded-2xl aspect-[3/4]"
                    style={{ backgroundColor: C.paperSoft }}
                  >
                    <Image
                      src={t.img}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-baseline gap-2.5">
                    <span
                      className={`${display.className} italic text-lg md:text-xl font-medium`}
                      style={{ color: C.rose }}
                    >
                      {t.num}
                    </span>
                    <span className="text-sm md:text-base font-semibold">{t.label}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El letrero: servicios tal cual el cartel de Las Camelias ── */}
      <section id="servicios" className="scroll-mt-20 py-14 md:py-24" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <Reveal>
              <figure className="relative overflow-hidden rounded-[2rem] aspect-[3/4]" style={{ backgroundColor: C.plum }}>
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero de Nip Tuck en Las Camelias con su lista de servicios"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                El letrero de Las Camelias 44
              </figcaption>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <h2 className={`${display.className} text-3xl md:text-5xl font-semibold tracking-tight mb-8 md:mb-10`}>
              Todo lo que ofrece el <em style={{ color: C.rose }}>letrero</em>
            </h2>
            <div className="space-y-7">
              {SERVICIOS.map((g, gi) => (
                <Reveal key={g.grupo} delay={gi * 90}>
                  <div>
                    <h3
                      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-3`}
                      style={{ color: C.rose }}
                    >
                      {g.grupo}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <li key={s}>
                          <a
                            href={waServicio(s.toLowerCase())}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm md:text-base font-semibold transition duration-200 hover:-translate-y-0.5 tap-44 ${FOCUS}`}
                            style={{ borderColor: C.line, backgroundColor: '#FBF2EC' }}
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mt-8 text-sm md:text-base" style={{ color: C.muted }}>
                Cada servicio se agenda por WhatsApp: llega directo al
                celular del salón y te confirman la hora.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ──────────────────────────────────────────────── */}
      <section id="resenas" className="scroll-mt-20 py-14 md:py-24" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-14 mb-10 md:mb-14">
            <div className={`${display.className} leading-none`} style={{ color: C.paper }}>
              <span className="block text-6xl md:text-8xl font-semibold">{BIZ.rating}</span>
              <div className="mt-3"><Stars value={5} color="#E9A9C4" className="w-[18px] h-[18px]" /></div>
              <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.roseSoft }}>
                {BIZ.reviews} reseñas en Google
              </p>
            </div>
            <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'rgba(251,242,236,0.78)' }}>
              Diez personas han dejado nota en su ficha de Google y las
              diez pusieron cinco estrellas. Esto escriben:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <blockquote
                  className="h-full rounded-3xl p-6 md:p-7 flex flex-col"
                  style={{ backgroundColor: C.plum2, border: `1px solid ${C.lineLight}` }}
                >
                  <span
                    aria-hidden="true"
                    className={`${display.className} italic text-5xl leading-none mb-4`}
                    style={{ color: C.rose }}
                  >
                    “
                  </span>
                  <p className="text-[15px] md:text-base leading-relaxed flex-1" style={{ color: 'rgba(251,242,236,0.92)' }}>
                    {r.text}
                  </p>
                  <footer className="mt-5">
                    <p className="font-bold" style={{ color: C.paper }}>{r.author}</p>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.roseSoft }}>
                      {r.meta}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horario, dirección y mapa ────────────────────────────── */}
      <section id="contacto" className="scroll-mt-20 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <h2 className={`${display.className} text-3xl md:text-5xl font-semibold tracking-tight mb-8`}>
              Pasa por <em style={{ color: C.rose }}>Las Camelias</em>
            </h2>
            <dl className="space-y-5">
              <div className="flex gap-4 items-baseline border-b pb-4" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: C.muted }}>
                  Dirección
                </dt>
                <dd className="font-semibold">
                  {BIZ.address}, {BIZ.city},{' '}
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-2 ${FOCUS}`} style={{ color: C.roseDeep }}>
                    ver en Maps
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 items-baseline border-b pb-4" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: C.muted }}>
                  WhatsApp
                </dt>
                <dd className="font-semibold">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-2 ${FOCUS}`} style={{ color: C.roseDeep }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 items-start border-b pb-4" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: C.muted }}>
                  Horario
                </dt>
                <dd className="flex-1">
                  <ul className="space-y-1.5">
                    {HORARIO.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4 font-semibold">
                        <span>{h.days}</span>
                        <span style={{ color: h.time === 'Cerrado' ? C.muted : C.ink }}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2.5 font-bold rounded-full px-6 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 ${FOCUS}`}
              style={{ backgroundColor: C.roseDeep, color: '#FBF2EC' }}
            >
              Agenda por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <Reveal className="min-h-[320px]">
            <div className="h-full min-h-[320px] rounded-[2rem] overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <p className={`${display.className} italic text-2xl md:text-4xl font-medium max-w-2xl mx-auto leading-snug`} style={{ color: C.paper }}>
            “Siempre batallé para que entendieran el corte que quería.
            Acá lo entendieron a la primera.”
          </p>
          <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.roseSoft }}>
            Jorge Lara · reseña de Google
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-flex items-center gap-2.5 font-bold rounded-full px-7 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 ${FOCUS_LIGHT}`}
            style={{ backgroundColor: C.paper, color: C.plum }}
          >
            Agenda tu hora en Nip Tuck
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="py-8 pb-24" style={{ backgroundColor: C.plum2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full object-cover" aria-hidden="true" />
            <p className={`${display.className} font-semibold text-lg`} style={{ color: C.paper }}>
              {BIZ.name} · {BIZ.city}
            </p>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(251,242,236,0.65)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Datos,
            fotos, servicios y reseñas son reales de su ficha pública; los
            textos de apoyo son de muestra. ¿Lo hacemos realidad?
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Agenda por WhatsApp" />
    </main>
  )
}
