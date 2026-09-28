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
  HORARIO,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  papel: '#F7F0E0',
  papel2: '#EFE4CC',
  tinta: '#261B10',
  naranja: '#DE4A1F',
  naranjaDark: '#B93A15',
  azul: '#2B4190',
  muted: '#5D5040',
  line: 'rgba(38,27,16,0.16)',
  card: '#FDF9EE',
}

const PIEZAS = [
  { cod: 'RP-01', t: 'Motor y mecánica', d: 'Motores, alternadores, radiadores, cajas de cambio y compresores.' },
  { cod: 'RP-02', t: 'Carrocería', d: 'Puertas, capós, maleteros, parabrisas y espejos por marca y modelo.' },
  { cod: 'RP-03', t: 'Luces y focos', d: 'Focas, ópticas y focos delanteros y traseros.' },
  { cod: 'RP-04', t: 'Interior', d: 'Tableros, volantes, butacas y paneles interiores.' },
  { cod: 'RP-05', t: 'Suspensión y frenos', d: 'Suspensiones, frenos y sistemas de escape usados en buen estado.' },
  { cod: 'RP-06', t: 'Electricidad', d: 'Computadores de auto (ECU) y accesorios eléctricos.' },
]

const RESENAS = [
  {
    q: 'Siempre buena atención. El dueño es muy responsable, don José Miguel. Lo recomiendo totalmente.',
    n: 'C. P.',
  },
  {
    q: 'Variedad de repuestos para muchas marcas de vehículos. Los precios son accesibles y las piezas se encuentran en su mayoría en buen estado.',
    n: 'R. S.',
  },
  {
    q: 'Muy buen lugar, se encuentra todo lo que uno busca.',
    n: 'C. E. R. B.',
  },
]

export const metadata = demoMetadata({
  slug: 'desarmaduria-auto-repuestos-talca',
  title: 'Desarmaduría Auto Repuestos Talca — repuestos usados en la Dos Sur',
  description:
    'Repuestos usados para todas las marcas en Av. Dos Sur 1700, Talca. Pregunta por tu pieza presencial o por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

export default function DesarmaduriaDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-8 h-8 rounded-full object-cover ring-1 ring-black/15" />
            <span className={`${display.className} font-bold uppercase tracking-wide`}>
              Auto Repuestos
            </span>
          </span>
        }
        links={[
          { label: 'Repuestos', href: '#repuestos' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: C.papel,
          ink: C.tinta,
          line: 'rgba(38,27,16,0.14)',
          btnBg: C.naranjaDark,
          btnInk: '#FFF6E8',
        }}
        ctaLabel="WhatsApp"
      />

      {/* ── Hero: el letrero de la Dos Sur ── */}
      <section id="inicio" className="pt-[72px] md:pt-[84px] overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 md:pt-12 pb-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: C.naranjaDark }}>
              Desarmaduría · Talca
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.92] mt-3`}
              style={{ fontSize: 'clamp(2.9rem, 12vw, 6.5rem)' }}
            >
              El repuesto<br />que andas<br />
              <span style={{ color: C.naranja }}>buscando</span>
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-md" style={{ color: C.muted }}>
              Repuestos usados para todas las marcas, revisados en el patio de
              la Dos Sur — desde el motor completo hasta el accesorio menor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold text-base px-7 py-3 transition-transform active:scale-95"
                style={{ backgroundColor: C.naranjaDark, color: '#FFF6E8' }}
              >
                Preguntar por el repuesto
              </a>
              <a
                href="#ubicacion"
                className="inline-flex items-center justify-center font-semibold text-base px-6 py-3 border-2 transition-transform active:scale-95"
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Ir al local
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2.5 flex-wrap">
              <Stars value={3.4} color={C.naranja} className="w-4 h-4" />
              <p className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                {BIZ.rating} · {BIZ.reviews}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative max-w-[440px] mx-auto md:ml-auto">
              <figure
                className="relative rounded-xl overflow-hidden border-4 shadow-[8px_8px_0_rgba(38,27,16,0.9)] rotate-[1.5deg]"
                style={{ borderColor: C.tinta, backgroundColor: C.naranja }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Letrero de la desarmaduría Auto Repuestos Talca en la avenida Dos Sur"
                  width={880}
                  height={1467}
                  className="w-full h-auto object-cover"
                  priority
                />
              </figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/letrero.webp`}
                alt="Marca de la desarmaduría: camioneta de época y letras Auto repuestos Talca"
                className="absolute -left-4 -bottom-6 w-40 md:w-48 rounded-lg border-4 -rotate-[4deg] shadow-[6px_6px_0_rgba(38,27,16,0.9)]"
                style={{ borderColor: C.card, backgroundColor: C.card }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Compra segura: canales oficiales contra la suplantación ── */}
      <section style={{ backgroundColor: C.azul, color: '#F4F0E4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: '#F4B98A' }}>
              Compra por los canales de siempre
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-[0.98] mt-3`}>
              Aquí se compra presencial<br className="hidden md:block" /> o por estos dos números
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-lg" style={{ color: 'rgba(244,240,228,0.85)' }}>
              Hay estafas que usan el nombre de desarmadurías para pedir depósitos
              y cobrar “seguros de envío”. Este local vende en su patio y por los
              WhatsApp del letrero — nada más.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[BIZ.phoneDisplay, BIZ.whatsapp2Display].map((n) => (
                <span
                  key={n}
                  className={`${mono.className} inline-flex items-center gap-2 text-sm md:text-base px-4 py-2.5 border`}
                  style={{ borderColor: 'rgba(244,240,228,0.4)' }}
                >
                  {n}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="w-64 md:w-72 rounded-lg overflow-hidden border-4 -rotate-[2deg] shadow-[8px_8px_0_rgba(0,0,0,0.35)]" style={{ borderColor: C.card }}>
              <Image
                src={`${IMG}/telefonos.webp`}
                alt="Detalle del letrero con los dos números de WhatsApp de la desarmaduría"
                width={1200}
                height={500}
                className="w-full h-auto object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Fichas de repuesto ── */}
      <section id="repuestos">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: C.naranjaDark }}>
              Inventario del patio
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl mt-2`}>
              Pregunta por tu pieza
            </h2>
            <p className="mt-3 text-sm md:text-base max-w-lg" style={{ color: C.muted }}>
              Manda la marca, el modelo y el año de tu auto por WhatsApp — te
              confirman si la pieza está en el patio.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PIEZAS.map((p, i) => (
              <Reveal key={p.cod} delay={i * 60}>
                <article
                  className="h-full rounded-lg border-2 p-5 transition-transform hover:-translate-y-1"
                  style={{
                    backgroundColor: C.card,
                    borderColor: C.tinta,
                    transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)`,
                    boxShadow: '5px 5px 0 rgba(38,27,16,0.85)',
                  }}
                >
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.naranjaDark }}>
                    {p.cod}
                  </p>
                  <h3 className={`${display.className} font-bold uppercase text-2xl mt-2`}>
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: C.muted }}>
                    {p.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={90} className="mt-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold text-base px-7 py-3 border-2 transition-transform active:scale-95"
              style={{ borderColor: C.naranjaDark, color: C.naranjaDark }}
            >
              Consultar por WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El patio y la gente ── */}
      <section id="resenas" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Reveal>
            <figure className="rounded-xl overflow-hidden border-4 rotate-[-1deg] shadow-[8px_8px_0_rgba(38,27,16,0.9)]" style={{ borderColor: C.tinta }}>
              <Image
                src={`${IMG}/patio.webp`}
                alt="Vehículo en el patio de la desarmaduría de la avenida Dos Sur en Talca"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-3`} style={{ color: C.muted }}>
              Av. Dos Sur 1700–1744, Talca
            </p>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-2.5 flex-wrap">
                <Stars value={3.4} color={C.naranja} className="w-4 h-4" />
                <p className={`${mono.className} text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {BIZ.rating} · {BIZ.reviews}
                </p>
              </div>
              <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl mt-3 leading-[0.98]`}>
                Lo que dice la gente
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.n} delay={i * 70}>
                  <blockquote
                    className="rounded-lg border-2 p-5"
                    style={{ backgroundColor: C.card, borderColor: C.tinta, boxShadow: '4px 4px 0 rgba(38,27,16,0.85)' }}
                  >
                    <p className="text-sm md:text-base leading-relaxed">“{r.q}”</p>
                    <footer className={`${mono.className} mt-3 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                      {r.n} · reseña en Google
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
            <Reveal delay={140}>
              <a
                href={BIZ.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block mt-5 text-xs uppercase tracking-[0.18em] underline underline-offset-4`}
                style={{ color: C.naranjaDark }}
              >
                Ver todas las reseñas ↗
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: C.naranjaDark }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl mt-2 leading-[0.98]`}>
              En la Dos Sur,<br />a pasos de la estación
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-md" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city}. Un punto clásico de Talca, frente al
              sector de la estación de trenes y el terminal.
            </p>
            <dl className="mt-8 space-y-4">
              {HORARIO.map((h) => (
                <div key={h.d} className="flex justify-between border-b-2 pb-3" style={{ borderColor: 'rgba(38,27,16,0.16)' }}>
                  <dt className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {h.d}
                  </dt>
                  <dd className={`${mono.className} text-sm font-medium`} style={{ color: C.tinta }}>
                    {h.h}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full min-h-[300px] rounded-xl overflow-hidden border-4 shadow-[8px_8px_0_rgba(38,27,16,0.9)]" style={{ borderColor: C.tinta }}>
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
      <section style={{ backgroundColor: C.naranjaDark, color: '#FFF6E8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
          <div className="flex-1">
            <p className={`${mono.className} text-xs uppercase tracking-[0.24em]`} style={{ color: '#FFF6E8' }}>
              ¿Pieza difícil de encontrar?
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-6xl leading-[0.95] mt-2 text-[#FFF6E8]`}>
              Pregunta en el patio
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold text-base px-8 py-3 transition-transform active:scale-95 shrink-0"
            style={{ backgroundColor: C.tinta, color: '#FFF6E8' }}
          >
            WhatsApp {BIZ.phoneDisplay}
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: C.tinta, color: '#E8DFC9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className={`${display.className} font-bold uppercase text-lg`}>
              Auto Repuestos Talca
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(232,223,201,0.75)' }}>
              {BIZ.phoneDisplay} · {BIZ.whatsapp2Display}
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-xs" style={{ color: 'rgba(232,223,201,0.75)' }}>
              Desarmaduría · {BIZ.address}, {BIZ.city}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
              style={{ color: 'rgba(232,223,201,0.75)' }}
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
