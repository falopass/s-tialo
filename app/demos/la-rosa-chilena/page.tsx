import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, RESENAS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la panadería que hace fila». La seña verde de la fachada
 * y el pendón marrón del logo fijan la paleta: verde pizarra, crema de papel
 * de panadería y dorado de trigo. El hilo es su título real — mejor pan
 * francés del Maule 2023 — contado como vitrina de barrio: cinta de
 * productos en marquee, mosaico de la vitrina, la cifra de los 800 kg al día
 * y la foto del premio. Bricolage Grotesque para los titulares, Public Sans
 * para el cuerpo, Geist Mono para los datos.
 */
const C = {
  verde: '#1E3A29',
  deep: '#12241A',
  crema: '#F2EAD9',
  card: '#FAF4E6',
  ink: '#241A10',
  trigo: '#C98F2C',
  trigoInk: '#2E1F02',
  muted: '#6B5A44',
  line: 'rgba(36,26,16,0.16)',
}

export const metadata = demoMetadata({
  slug: 'la-rosa-chilena',
  title: 'La Rosa Chilena — Panadería en Talca',
  description:
    'Panadería artesanal en 11 Oriente 1405, Talca: mejor pan francés del Maule 2023. Abierta todos los días. Demo de sitio web por Sitiazo.',
  image: IMG.amasado,
})

/** Medalla rosetón del premio 2023. */
function Medalla({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 116" className={className} aria-hidden="true">
      <path d="M34 72 L26 112 L46 96 L56 114 L62 74 Z" fill={C.trigo} />
      <circle cx="48" cy="44" r="36" fill={C.trigo} />
      <circle cx="48" cy="44" r="30" fill="none" stroke={C.deep} strokeWidth="2" strokeDasharray="3 5" />
      <path
        d="M48 24 L53.5 36 L66.5 37.4 L57.2 46.2 L59.8 59 L48 52.5 L36.2 59 L38.8 46.2 L29.5 37.4 L42.5 36 Z"
        fill={C.deep}
      />
    </svg>
  )
}

const CINTA = ['Marraqueta', 'Pistoleta', 'Hallulla', 'Pan amasado', 'Pan francés']

const VITRINA = [
  { img: IMG.marraqueta, alt: 'Marraquetas recién horneadas de La Rosa Chilena', tag: 'La marraqueta' },
  { img: IMG.hallullas, alt: 'Pan recién salido del horno en la vitrina de la panadería', tag: 'Del horno' },
  { img: IMG.empanada, alt: 'Empanada de la vitrina de La Rosa Chilena', tag: 'De la vitrina' },
  { img: IMG.completo, alt: 'Completo de la vitrina de La Rosa Chilena', tag: 'De la vitrina' },
  { img: IMG.bolsa, alt: 'Marraquetas embolsadas para llevar de La Rosa Chilena', tag: 'Para llevar' },
]

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`
        @keyframes rosa-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .rosa-marquee-track { animation: rosa-marquee 30s linear infinite }
        @media (prefers-reduced-motion: reduce) { .rosa-marquee-track { animation: none } }
      `}</style>

      <BlitzNav
        name={<span>{BIZ.short}</span>}
        logoSrc={IMG.logo}
        links={[
          { label: 'La vitrina', href: '#vitrina' },
          { label: 'El premio', href: '#premio' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Pedir pan por WhatsApp"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.verde, ink: C.crema, line: 'rgba(242,234,217,0.2)', btnBg: C.trigo, btnInk: C.trigoInk }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.verde }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-12 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.trigo }}>
                Panadería · 11 Oriente 1405 · Talca
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} mt-4 font-bold leading-[1.04] tracking-tight text-[40px] md:text-6xl`}
                style={{ color: C.crema }}
              >
                La marraqueta por la que Talca hace fila
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(242,234,217,0.75)' }}>
                Panadería artesanal elegida mejor pan francés del Maule en 2023.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-12 px-6 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.trigo, color: C.trigoInk }}
                >
                  Pedir pan por WhatsApp
                </a>
                <span
                  className="inline-flex items-center gap-2 h-12 px-4 rounded-full border text-sm"
                  style={{ borderColor: 'rgba(242,234,217,0.3)', color: C.crema }}
                >
                  <Stars value={BIZ.rating} color={C.trigo} className="w-3.5 h-3.5" />
                  4,5 · 56 reseñas
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative">
              <figure
                className="overflow-hidden rounded-[2rem] border-4 shadow-xl -rotate-1"
                style={{ borderColor: 'rgba(242,234,217,0.9)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                <img
                  src={IMG.amasado}
                  alt="Manos amasando la masa de la marraqueta en La Rosa Chilena, Talca"
                  className="w-full aspect-[5/4] object-cover"
                  loading="eager"
                />
              </figure>
              <div className="absolute -bottom-7 -right-2 md:-right-5 text-center">
                <Medalla className="w-20 h-24 md:w-24 md:h-28 drop-shadow-lg" />
                <p className={`${mono.className} mt-1 text-[10px] uppercase tracking-[0.14em] font-bold`} style={{ color: C.trigo }}>
                  Mejor pan francés<br />Maule 2023
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de productos ── */}
      <div className="overflow-hidden border-y-4" style={{ backgroundColor: C.deep, borderColor: C.trigo }}>
        <div className="rosa-marquee-track flex w-max items-center gap-8 py-3.5">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center gap-8 shrink-0" aria-hidden={rep === 1}>
              {CINTA.concat(CINTA).map((item, i) => (
                <span key={`${rep}-${i}`} className={`${display.className} flex items-center gap-8 text-lg md:text-xl font-semibold uppercase tracking-[0.08em] whitespace-nowrap`} style={{ color: C.trigo }}>
                  {item}
                  <span aria-hidden="true" style={{ color: 'rgba(242,234,217,0.35)' }}>•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            Lo que sale del horno todos los días
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-bold tracking-tight`} style={{ color: C.ink }}>
            La vitrina de Once Oriente
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <Reveal className="col-span-2 row-span-2">
            <figure className="relative h-full overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
              <img src={VITRINA[0].img} alt={VITRINA[0].alt} className="w-full h-full object-cover aspect-square md:aspect-auto" loading="lazy" />
              <Tag color={C.trigo} ink={C.trigoInk}>{VITRINA[0].tag}</Tag>
            </figure>
          </Reveal>
          {VITRINA.slice(1).map((v, i) => (
            <Reveal key={v.img} delay={i * 80}>
              <figure className="relative overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                <img src={v.img} alt={v.alt} className="w-full aspect-[4/5] md:aspect-[3/4] object-cover" loading="lazy" />
                <Tag color={C.trigo} ink={C.trigoInk}>{v.tag}</Tag>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 border-t pt-6" style={{ borderColor: C.line }}>
            {[
              ['Pan al día', '800–1.000 kg'],
              ['La favorita', 'Marraqueta'],
              ['Premio', 'Pan francés 2023'],
              ['Reseñas', '4,5 de 5'],
            ].map(([k, v]) => (
              <div key={k}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>{k}</p>
                <p className={`${display.className} mt-1 text-xl md:text-2xl font-bold`} style={{ color: C.ink }}>{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── El premio ── */}
      <section id="premio" className="py-14 md:py-20" style={{ backgroundColor: C.verde }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.trigo }}>
                La copa de 2023
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-bold tracking-tight`} style={{ color: C.crema }}>
                El pan francés que ganó la región
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(242,234,217,0.78)' }}>
                En 2023, la industria panadera (FECHIPAN e INDUPAN) eligió la marraqueta de
                La Rosa Chilena como el mejor pan francés del Maule. Detrás está Miguel Ramírez
                y un horno que no descansa: entre 800 y 1.000 kilos de pan salen cada día de
                la cocina de Once Oriente.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <blockquote className="mt-6 border-l-4 pl-5 py-1 max-w-lg" style={{ borderColor: C.trigo }}>
                <p className="text-base md:text-lg italic leading-relaxed" style={{ color: C.crema }}>
                  “Desde muy temprano atienden siempre con una sonrisa”
                </p>
                <footer className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(242,234,217,0.55)' }}>
                  Hernan Burgos · reseña de Google
                </footer>
              </blockquote>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <figure className="overflow-hidden rounded-3xl border-4 shadow-xl rotate-1" style={{ borderColor: 'rgba(242,234,217,0.9)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
              <img
                src={IMG.premio}
                alt="El equipo de La Rosa Chilena recibiendo el premio al mejor pan francés del Maule 2023"
                className="w-full aspect-[21/10] object-cover"
                loading="lazy"
              />
              <figcaption className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-[0.14em]`} style={{ backgroundColor: C.deep, color: 'rgba(242,234,217,0.7)' }}>
                Premiación “Mejores Linderos” · Maule 2023
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            Los que ya hicieron la fila
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-bold tracking-tight`} style={{ color: C.ink }}>
            Talca lo dice mejor que nosotros
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 90}>
              <blockquote
                className="h-full rounded-3xl p-6 border"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <Stars value={r.estrellas} color={C.trigo} className="w-3.5 h-3.5" />
                <p className="mt-4 text-base leading-relaxed" style={{ color: C.ink }}>
                  “{r.texto}”
                </p>
                <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  {r.nombre} · Google
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <p className={`${mono.className} mt-5 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
            {BIZ.rating.toString().replace('.', ',')} de 5 · {BIZ.reviews} reseñas en Google
          </p>
        </Reveal>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal>
            <figure className="overflow-hidden rounded-3xl border-4 shadow-md rotate-1" style={{ borderColor: C.card }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
              <img
                src={IMG.fachada}
                alt="Fachada de La Rosa Chilena con su toldo verde, en Once Oriente, Talca"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                La fila empieza aquí
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl font-bold tracking-tight`} style={{ color: C.ink }}>
                Once Oriente 1405, a pasos del CREA
              </h2>
              <dl className="mt-6 space-y-3 text-base">
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                {BIZ.hours.map(([d, h]) => (
                  <div className="flex gap-3" key={d}>
                    <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                      {d}
                    </dt>
                    <dd className={mono.className}>{h}</dd>
                  </div>
                ))}
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Teléfono
                  </dt>
                  <dd className={mono.className}>{BIZ.phoneDisplay}</dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 tap-44`}
                style={{ color: C.ink }}
              >
                Ver ficha en Google Maps
              </a>
            </Reveal>
          </div>
        </div>
        <Reveal delay={140}>
          <div className="mt-8 overflow-hidden rounded-3xl border" style={{ borderColor: C.line }}>
            <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}, ${BIZ.city}`} className="w-full aspect-[4/3] md:aspect-[21/9]" />
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 md:px-8 pb-14">
        <Reveal>
          <div
            className="max-w-6xl mx-auto rounded-[2rem] px-6 py-10 md:px-12 md:py-14 text-center"
            style={{ backgroundColor: C.trigo }}
          >
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold tracking-tight`} style={{ color: C.trigoInk }}>
              Pan caliente todos los días desde las 7
            </h2>
            <p className="mt-3 text-base md:text-lg max-w-lg mx-auto font-medium" style={{ color: 'rgba(46,31,2,0.75)' }}>
              Encarga tu marraqueta por WhatsApp y pasa a retirarla por Once Oriente.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center h-12 px-7 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.deep, color: C.crema }}
            >
              Pedir pan por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${display.className} text-xl font-bold tracking-tight`} style={{ color: C.ink }}>
                {BIZ.name}
              </p>
              <p className="mt-1 text-sm" style={{ color: C.muted }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city} · Mejor pan francés del Maule 2023
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 rounded-full text-sm font-bold self-start md:self-auto active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.verde, color: C.crema }}
            >
              Pedir pan por WhatsApp
            </a>
          </div>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}

function Tag({ children, color, ink }: { children: React.ReactNode; color: string; ink: string }) {
  return (
    <figcaption
      className={`${mono.className} absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] font-bold`}
      style={{ backgroundColor: color, color: ink }}
    >
      {children}
    </figcaption>
  )
}
