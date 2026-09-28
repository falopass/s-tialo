import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EMPRESA, MAPS_URL, MAPS_EMBED, FB_URL, IMG, SECTORES, PROCESO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «ficha técnica de planta» — la lavandería como
 * línea de proceso. Blanco hielo, azul agua profundo y etiquetas mono
 * tipo care-label: cada sección es una estación numerada (R-01…R-05),
 * los símbolos de lavado son los iconos y los sectores cuelgan como
 * etiquetas con orillo punteado.
 */
const C = {
  hielo: '#EFF7FB',
  superficie: '#FFFFFF',
  navy: '#0B2C40',
  agua: '#0E6FA8',
  aguaBajo: '#0A5480',
  cyan: '#23B2E4',
  espuma: '#CDE7F3',
  tinta: '#12333F',
  suave: '#4A6572',
  linea: 'rgba(14,111,168,0.22)',
  lineaClara: 'rgba(205,231,243,0.3)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lavanderia-aqua-limpia',
  title: 'Aqua Limpia — Lavandería industrial en Talca, Maule',
  description:
    'Lavandería industrial en 4 Oriente 2028, Talca. Servicio para empresas y personas, ciclo completo de lavado. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Empresas', href: '#empresas' },
  { label: 'La planta', href: '#planta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

/** Etiqueta de estación: código mono + título */
function Estacion({ codigo, titulo, light = false }: { codigo: string; titulo: string; light?: boolean }) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        className={`${mono.className} text-xs md:text-sm font-bold tracking-[0.2em] px-2 py-1 rounded-sm border`}
        style={{
          color: light ? C.espuma : C.aguaBajo,
          borderColor: light ? C.lineaClara : C.linea,
        }}
      >
        {codigo}
      </span>
      <p
        className={`${mono.className} text-xs md:text-sm tracking-[0.28em] uppercase`}
        style={{ color: light ? C.espuma : C.aguaBajo }}
      >
        {titulo}
      </p>
    </div>
  )
}

/** Símbolo de lavado (estilo care-label) — solo líneas */
function SimboloLavado({ tipo, className = 'w-6 h-6', color }: { tipo: 'tina' | 'plancha' | 'secado' | 'doblado'; className?: string; color: string }) {
  const common = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {tipo === 'tina' && (
        <g {...common}>
          <path d="M3 7h18l-1.6 12H4.6L3 7Z" />
          <path d="M5.5 11c2-1.6 4-1.6 6 0s4 1.6 6 0" />
        </g>
      )}
      {tipo === 'plancha' && (
        <g {...common}>
          <path d="M4 17h16l-2-8H11C7 9 4 12 4 17Z" />
          <circle cx="14" cy="13" r="1" fill={color} stroke="none" />
        </g>
      )}
      {tipo === 'secado' && (
        <g {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1.5" />
          <circle cx="12" cy="12" r="4.5" />
        </g>
      )}
      {tipo === 'doblado' && (
        <g {...common}>
          <rect x="5" y="5" width="14" height="14" rx="1" />
          <path d="M5 9.5h14M9.5 5v14" />
        </g>
      )}
    </svg>
  )
}

function SitiazoStrip({ dark = false }: { dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-center text-xs leading-relaxed py-5 px-6`}
      style={{
        color: dark ? 'rgba(205,231,243,0.75)' : C.suave,
        backgroundColor: dark ? 'rgba(4,20,29,0.5)' : C.espuma,
      }}
    >
      Página de muestra hecha por{' '}
      <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: dark ? C.cyan : C.aguaBajo }}>
        Sitiazo
      </a>{' '}
      — sitios para pymes desde $79.990.{' '}
      <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: dark ? C.cyan : C.aguaBajo }}>
        Pide la tuya
      </a>
    </p>
  )
}

export default function LavanderiaAquaLimpia() {
  return (
    <main id="inicio" className={body.className} style={{ backgroundColor: C.navy, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className} style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>Aqua Limpia</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(255,255,255,0.92)', ink: C.navy, line: C.linea, btnBg: C.agua, btnInk: '#FFFFFF' }}
      />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.navy }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Línea de lavadoras industriales de Aqua Limpia en Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(4,20,29,0.5) 0%, rgba(4,20,29,0.25) 40%, rgba(11,44,64,0.92) 100%)' }}
          aria-hidden="true"
        />
        {/* símbolos de lavado flotando — motivo care-label */}
        <div className="absolute top-24 right-5 md:right-16 flex gap-3" aria-hidden="true">
          {(['tina', 'secado', 'plancha', 'doblado'] as const).map((t, i) => (
            <span
              key={t}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-md border"
              style={{
                borderColor: 'rgba(205,231,243,0.5)',
                backgroundColor: 'rgba(11,44,64,0.45)',
                transform: `rotate(${(i - 1.5) * 4}deg)`,
              }}
            >
              <SimboloLavado tipo={t} color="#CDE7F3" className="w-5 h-5 md:w-6 md:h-6" />
            </span>
          ))}
        </div>
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-14 md:pb-20 pt-40">
          <Reveal>
            <Estacion codigo="L-00" titulo="Lavandería industrial · Talca" light />
            <h1
              className={`${display.className} mt-4 text-white font-semibold leading-[0.98] tracking-[-0.02em] text-[2.7rem] md:text-7xl max-w-3xl`}
            >
              La ropa de tu empresa, impecable.
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(226,240,247,0.92)' }}>
              Lavado industrial para empresas y personas en 4 Oriente, Talca.
              Recibes tus blancos limpios, a tiempo y sin vueltas.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_EMPRESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.cyan, color: C.navy }}
              >
                Cotizar para mi empresa
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF', backgroundColor: 'rgba(11,44,64,0.4)' }}
              >
                Mi ropa de casa
              </a>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: C.espuma }}
            >
              <Stars value={BIZ.rating} color={C.cyan} />
              <span>
                {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ═══ LÍNEA DE PROCESO ═══ */}
      <section className="relative" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <Estacion codigo="P" titulo="Ciclo completo, en una sola planta" light />
            <ol className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-y-6">
              {PROCESO.map((paso, i) => (
                <li key={paso} className="relative flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:pr-6">
                  <span
                    className={`${mono.className} text-2xl md:text-3xl font-bold leading-none`}
                    style={{ color: C.cyan }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm md:text-base font-medium text-white leading-snug">
                    {paso}
                  </span>
                  {i < PROCESO.length - 1 && (
                    <span
                      className="hidden sm:block absolute top-3 right-0 w-6 border-t border-dashed"
                      style={{ borderColor: C.lineaClara }}
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ═══ EMPRESAS — etiquetas colgantes ═══ */}
      <section id="empresas" className="scroll-mt-20" style={{ backgroundColor: C.hielo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Estacion codigo="E-01" titulo="Para empresas" />
            <h2 className={`${display.className} mt-4 font-semibold tracking-[-0.02em] leading-[1.02] text-3xl md:text-5xl max-w-2xl`} style={{ color: C.navy }}>
              Blancos de trabajo, tratados como se debe.
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.suave }}>
              Contratista de lavandería de concesionarias y servicio permanente
              para pymes del Maule: llegas con la ropa sucia, te vas con
              un proceso resuelto.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {SECTORES.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                {/* etiqueta colgante: orillo punteado + ojal */}
                <article
                  className="relative h-full rounded-lg border-2 border-dashed p-6 md:p-7 pl-7 md:pl-8"
                  style={{ borderColor: C.linea, backgroundColor: C.superficie }}
                >
                  <span
                    className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 rounded-full border"
                    style={{ backgroundColor: C.hielo, borderColor: C.linea }}
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-3">
                    <span className={`${mono.className} text-sm font-bold`} style={{ color: C.agua }}>{s.n}</span>
                    <span className="w-8 border-t border-dashed" style={{ borderColor: C.linea }} aria-hidden="true" />
                    <h3 className={`${display.className} text-lg md:text-xl font-semibold`} style={{ color: C.navy }}>
                      {s.nombre}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: C.suave }}>
                    {s.detalle}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-2 gap-4">
                <figure className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <Image src={`${IMG}/toallas.webp`} alt="Toallas blancas lavadas y dobladas por Aqua Limpia" fill sizes="(min-width:768px) 50vw, 50vw" className="object-cover" />
                </figure>
                <figure className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <Image src={`${IMG}/blancos.webp`} alt="Ropa blanca institucional procesada en la lavandería" fill sizes="(min-width:768px) 50vw, 50vw" className="object-cover" />
                </figure>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={WA_LINK_EMPRESA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mt-10 inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.agua, color: '#FFFFFF' }}
            >
              Cotizar servicio para empresa
            </a>
          </Reveal>
        </div>
      </section>

      {/* ═══ LA PLANTA — franja de agua ═══ */}
      <section id="planta" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="relative h-40 md:h-64 overflow-hidden" aria-hidden="false">
          <Image
            src={`${IMG}/agua.webp`}
            alt="Agua en movimiento, la materia prima de Aqua Limpia"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, rgba(239,247,251,1) 0%, rgba(11,44,64,0) 45%)' }} aria-hidden="true" />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-4">
          <Reveal>
            <Estacion codigo="P-02" titulo="Dentro de la planta" light />
            <h2 className={`${display.className} mt-4 font-semibold tracking-[-0.02em] leading-[1.02] text-3xl md:text-5xl max-w-2xl text-white`}>
              Máquinas grandes para ropa que trabaja duro.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: 'lavadoras', tag: 'LAVADO', alt: 'Lavadora industrial de la planta de Aqua Limpia' },
              { src: 'tambor', tag: 'CARGA', alt: 'Tambor de lavadora industrial en funcionamiento' },
              { src: 'personal', tag: 'EQUIPO', alt: 'Equipo de trabajo de Aqua Limpia en la planta' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <figure className="relative rounded-xl overflow-hidden aspect-[4/5]">
                  <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:640px) 33vw, 100vw" className="object-cover" />
                  <figcaption
                    className={`${mono.className} absolute bottom-3 left-3 text-[0.68rem] tracking-[0.25em] px-2 py-1 rounded-sm`}
                    style={{ backgroundColor: 'rgba(11,44,64,0.82)', color: C.espuma }}
                  >
                    {f.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PERSONAS — care label ═══ */}
      <section style={{ backgroundColor: C.hielo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <Reveal>
              <Estacion codigo="H-03" titulo="También para tu casa" />
              <h2 className={`${display.className} mt-4 font-semibold tracking-[-0.02em] leading-[1.02] text-3xl md:text-5xl`} style={{ color: C.navy }}>
                Tu ropa de casa, en ciclo industrial.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.suave }}>
                Edredones, ropa de cama, toallas y prendas del día a día:
                lo que no cabe en tu lavadora sale mejor de acá.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mt-8 inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.agua, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
            </Reveal>
            <Reveal delay={120}>
              <figure className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto w-full rotate-1" style={{ boxShadow: '0 18px 50px rgba(11,44,64,0.18)' }}>
                <Image src={`${IMG}/camisas.webp`} alt="Camisas limpias y planchadas por Aqua Limpia" fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
                <figcaption
                  className={`${mono.className} absolute top-3 left-3 text-[0.68rem] tracking-[0.25em] px-2 py-1 rounded-sm flex items-center gap-1.5`}
                  style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: C.aguaBajo }}
                >
                  <SimboloLavado tipo="plancha" color={C.aguaBajo} className="w-4 h-4" />
                  PLANCHADO
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ RESEÑAS ═══ */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.superficie }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Estacion codigo="R-04" titulo="Lo que dicen en Google" />
            <div className="mt-6 flex flex-wrap items-end gap-5">
              <p className={`${display.className} text-6xl md:text-8xl font-semibold leading-none tracking-[-0.03em]`} style={{ color: C.agua }}>
                {BIZ.ratingLabel}
              </p>
              <div className="pb-2">
                <Stars value={BIZ.rating} color={C.agua} className="w-5 h-5" />
                <p className={`${mono.className} mt-2 text-xs tracking-[0.2em] uppercase`} style={{ color: C.suave }}>
                  {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <figure
                  className="h-full rounded-xl p-6 border-t-4"
                  style={{ backgroundColor: C.hielo, borderTopColor: C.cyan }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed" style={{ color: C.tinta }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs tracking-[0.15em] uppercase`} style={{ color: C.aguaBajo }}>
                    {r.autor} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UBICACIÓN ═══ */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.hielo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Estacion codigo="U-05" titulo="Dónde estamos" />
            <h2 className={`${display.className} mt-4 font-semibold tracking-[-0.02em] leading-[1.02] text-3xl md:text-5xl`} style={{ color: C.navy }}>
              4 Oriente 2028, Talca.
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.suave }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
              <br />
              {BIZ.email} · {BIZ.web}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.agua, color: '#FFFFFF' }}
              >
                Cómo llegar
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full border transition-transform active:scale-95"
                style={{ borderColor: C.linea, color: C.aguaBajo, backgroundColor: C.superficie }}
              >
                Facebook
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 rounded-2xl overflow-hidden border" style={{ borderColor: C.linea }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Lavandería Industrial Aqua Limpia, 4 Oriente 2028, Talca"
                className="w-full h-[300px] md:h-[380px] block"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section style={{ backgroundColor: C.agua }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className={`${mono.className} text-xs tracking-[0.3em] uppercase`} style={{ color: 'rgba(226,240,247,0.85)' }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h2 className={`${display.className} mt-4 font-semibold tracking-[-0.02em] leading-[1.02] text-3xl md:text-5xl text-white max-w-2xl mx-auto`}>
              Trae la ropa sucia. Llévatela impecable.
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mt-9 inline-flex items-center justify-center text-sm md:text-base font-semibold px-8 h-[52px] rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.navy, color: '#FFFFFF' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
          <div className="flex flex-wrap items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="Logo de Aqua Limpia" className="h-9 w-auto rounded-sm bg-white px-2 py-1" />
            <div>
              <p className={`${display.className} text-white font-semibold leading-tight`}>{BIZ.name}</p>
              <p className="text-sm" style={{ color: C.espuma }}>
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.espuma }}>
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">WhatsApp</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Google Maps</a>
          </div>
          <p className={`${mono.className} mt-6 text-xs tracking-[0.15em]`} style={{ color: 'rgba(205,231,243,0.7)' }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} RESEÑAS EN GOOGLE
          </p>
        </div>
        <SitiazoStrip dark />
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
