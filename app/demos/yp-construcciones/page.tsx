import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import { PipeIcon } from './scenes'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F6F2EA',
  soft: '#EAE3D4',
  card: '#FFFFFF',
  deep: '#1B1610',
  deepSoft: '#2A241C',
  copper: '#E8703A',
  copperInk: '#9A4A1C',
  ink: '#201B15',
  muted: '#5F5749',
  line: 'rgba(32,27,20,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'yp-construcciones',
  title: 'Y.P Construcciones — Construcción y gasfitería en Talca',
  description:
    'Y.P Construcciones en Talca norte: instalación de gas y calefonts, remodelación de baños y cocinas, pisos y terminaciones. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS_FOTO = [
  {
    src: `${IMG}/gas.webp`,
    name: 'Instalación de gas',
    desc: 'Jaulas de balones, empalmes y redes de gas para casas y locales, con instalación ordenada y segura.',
    alt: 'Jaula metálica amarilla con balones de gas instalada por Y.P Construcciones',
  },
  {
    src: `${IMG}/calefont.webp`,
    name: 'Calefont y agua caliente',
    desc: 'Instalación, cambio y conexión de calefonts, con tubería de cobre bien fijada y probada.',
    alt: 'Calefont instalado con tuberías de cobre por Y.P Construcciones',
  },
  {
    src: `${IMG}/bano.webp`,
    name: 'Remodelación de baños',
    desc: 'Baños completos: WC, lavamanos, cerámica y grifería, entregados limpios y funcionando.',
    alt: 'Baño remodelado con lavamanos pedestal y WC por Y.P Construcciones',
  },
  {
    src: `${IMG}/cocina.webp`,
    name: 'Cocinas',
    desc: 'Lavaplatos, cubiertas y conexiones de cocina dejadas listas para usar desde el primer día.',
    alt: 'Lavaplatos doble de acero con grifería instalado por Y.P Construcciones',
  },
]

const SERVICIOS_EXTRA = [
  {
    name: 'Pisos y terminaciones',
    desc: 'Piso flotante, revestimientos y terminaciones interiores para dejar los espacios como nuevos.',
  },
  {
    name: 'Gasfitería y reparaciones',
    desc: 'Fugas, llaves, conexiones y arreglos de emergencia en tu casa o negocio.',
  },
  {
    name: 'Herramientas a pedido',
    desc: 'Cotización de herramientas y materiales a pedido, según lo que necesite tu obra.',
  },
]

const PASOS = [
  {
    title: 'Cotización',
    desc: 'Escríbenos por WhatsApp con lo que necesitas — si puedes, con fotos — y te damos precio claro.',
  },
  {
    title: 'Visita y medición',
    desc: 'Cuando el trabajo lo requiere, vamos a terreno a medir y confirmar el alcance antes de partir.',
  },
  {
    title: 'Ejecución',
    desc: 'Trabajo ordenado y con los materiales correctos: gas, agua y terminaciones bien hechas.',
  },
  {
    title: 'Entrega',
    desc: 'Revisamos todo contigo y dejamos el trabajo funcionando y el sitio limpio.',
  },
]

const RESENAS = [
  {
    text: 'Muy buen servicio, todo impecable y muy amables, totalmente recomendable.',
    author: 'Waldo Saéz Paredes',
    meta: 'Reseña de Google · hace 2 años',
  },
  {
    text: 'Excelente servicio, calidad y confiable. Recomendable.',
    author: 'Jazmin Zapata Robles',
    meta: 'Reseña de Google · hace 2 años',
  },
  {
    text: 'Excelente servicio y atención.',
    author: 'Nolaska Pena',
    meta: 'Reseña de Google · hace 3 años',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.copper : C.copperInk }}
    >
      <PipeIcon className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function YPConstruccionesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(27,22,16,0.94)',
          ink: '#F6F2EA',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.copper,
          btnInk: '#1B1610',
        }}
      />

      {/* ── Hero sobre foto real ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Interior remodelado con piso flotante por Y.P Construcciones en Talca"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,22,16,0.62) 0%, rgba(27,22,16,0.45) 40%, rgba(27,22,16,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Constructora · Gasfitería · Talca norte</Eyebrow>
            <h1
              className={`${display.className} scroll-mt-28 font-bold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.8rem,9.5vw,5.6rem)] mb-6`}
              style={{ color: '#F6F2EA' }}
            >
              Gas, agua y obra
              <br />
              <span style={{ color: C.copper }}>bien instalados.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(246,242,234,0.9)' }}>
              Instalación de gas y calefonts, remodelación de baños
              y cocinas, pisos y terminaciones en Talca.
              Cotiza por WhatsApp y coordinamos la visita.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-base md:text-lg px-7 py-2.5 rounded-sm transition-transform active:scale-95`}
                style={{ backgroundColor: C.copper, color: '#1B1610' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold uppercase tracking-wide text-base md:text-lg px-7 py-2.5 rounded-sm border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(246,242,234,0.55)', color: '#F6F2EA' }}
              >
                Ver trabajos
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(246,242,234,0.22)', backgroundColor: 'rgba(27,22,16,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,242,234,0.9)' }}>
            <span className="flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.copper} className="w-3.5 h-3.5" />
              {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas
            </span>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="hidden sm:inline">Visita a terreno coordinada</span>
            <span className="hidden md:inline" style={{ color: C.copper }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios con fotos reales ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.ink }}>
              Trabajos que se ven
              <br />
              <span style={{ color: C.copperInk }}>y funcionan</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Fotos reales de trabajos de la empresa: instalaciones
              de gas, agua caliente, baños y cocinas.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICIOS_FOTO.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <article
                className="rounded-sm overflow-hidden border h-full flex flex-col"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 10px rgba(27,22,16,0.08)' }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.src} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 border-t-4" style={{ borderTopColor: i % 2 === 0 ? C.copper : C.deep }}>
                  <h3 className={`${display.className} font-bold uppercase text-xl leading-tight mb-2`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <ul className="grid sm:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-8 list-none">
            {SERVICIOS_EXTRA.map((s) => (
              <li
                key={s.name}
                className="rounded-sm border-l-4 p-5"
                style={{ backgroundColor: C.soft, borderLeftColor: C.copper, border: 'none', borderLeft: `4px solid ${C.copper}` }}
              >
                <h3 className={`${display.className} font-bold uppercase text-lg mb-1.5 flex items-center gap-2`} style={{ color: C.ink }}>
                  <PipeIcon className="w-4 h-4 shrink-0" color={C.copperInk} />
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── Proceso sobre foto real de cañerías de gas ── */}
      <section id="proceso" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/gasdetalle.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(27,22,16,0.6) 0%, rgba(27,22,16,0.82) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo trabajamos</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02]`} style={{ color: '#F6F2EA' }}>
                Del mensaje
                <br />
                <span style={{ color: C.copper }}>a la entrega</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(246,242,234,0.85)' }}>
                Cuatro pasos, siempre iguales: cotizas, visitamos si
                hace falta, ejecutamos y entregamos probado.
              </p>
            </div>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li
                  className="rounded-sm border p-6 h-full"
                  style={{ borderColor: 'rgba(246,242,234,0.16)', backgroundColor: 'rgba(27,22,16,0.72)' }}
                >
                  <span
                    className={`${display.className} block font-bold text-4xl mb-4`}
                    style={{ color: i === 0 ? C.copper : 'rgba(232,112,58,0.75)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} font-bold uppercase text-xl mb-2`} style={{ color: '#F6F2EA' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(246,242,234,0.85)' }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reseñas reales de Google ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Reseñas</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.ink }}>
              {BIZ.rating.toFixed(1)} estrellas
              <br />
              <span style={{ color: C.copperInk }}>en Google</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas publicadas en la ficha de Google
              Maps de {BIZ.name} — estas son algunas, tal cual.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} delay={i * 80}>
              <figure
                className="rounded-sm border p-6 h-full flex flex-col"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 10px rgba(27,22,16,0.08)' }}
              >
                <Stars value={5} color={C.copper} className="w-4 h-4 mb-4" />
                <blockquote className="text-sm md:text-base leading-relaxed flex-1" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t" style={{ borderColor: C.line }}>
                  <p className="text-sm font-bold" style={{ color: C.ink }}>{r.author}</p>
                  <p className="text-xs mt-0.5" style={{ color: C.muted }}>{r.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.ink }}>
              Talca norte,
              <br />
              <span style={{ color: C.copperInk }}>sector 22 Norte</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.legal}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2" style={{ color: C.ink, textDecorationColor: 'rgba(32,27,20,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              La ficha no declara horario de oficina: la vía rápida
              es WhatsApp — responde el mismo equipo que va a terreno.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-sm transition-transform active:scale-95`}
                style={{ backgroundColor: C.deep, color: '#F6F2EA' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-sm border-2 transition-colors`}
                style={{ borderColor: 'rgba(32,27,20,0.35)', color: C.ink }}
              >
                Ver en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-sm overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/calefont2.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(27,22,16,0.55) 0%, rgba(27,22,16,0.85) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-[clamp(2.2rem,7vw,4.2rem)] leading-[1.0] mb-6`} style={{ color: '#F6F2EA' }}>
              ¿Gas, baño o cocina?
              <br />
              <span style={{ color: C.copper }}>Cotízalo hoy</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,242,234,0.9)' }}>
              Escríbenos por WhatsApp con lo que necesitas — con fotos
              del sitio es más rápido — y te respondemos con precio.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-wide text-base md:text-lg px-8 py-3 rounded-sm transition-transform active:scale-95`}
              style={{ backgroundColor: C.copper, color: '#1B1610' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F6F2EA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-bold uppercase text-2xl mb-2 flex items-center gap-3`}>
              <PipeIcon className="w-5 h-5" color={C.copper} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,242,234,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,242,234,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,242,234,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(246,242,234,0.75)' }}>
            Datos, fotos y reseñas de la ficha pública de Google; servicios según los trabajos publicados.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
