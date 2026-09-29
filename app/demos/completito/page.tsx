import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, PIZARRA, TEMAS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «la fuente de soda de Manso». El letrero navy con
 * los discos Pepsi fija la paleta: azul marino, crema y rojo italiano.
 * La página se compone como el mostrador: banda-marquesina con el
 * nombre, pizarra de pedidos con lo que más se menciona en las
 * opiniones, mesa vista de arriba y la fila del mediodía. Condensed
 * para el letrero, Barlow para el resto, mono para datos y ticket.
 */
const C = {
  navy: '#13255A',
  navyDeep: '#0C1B42',
  crema: '#F6F0E4',
  papel: '#FDFBF4',
  rojo: '#D8382E',
  celeste: '#7FB0D9',
  ink: '#1C1A16',
  muted: '#6B6254',
  line: 'rgba(28,26,22,0.16)',
  lineDark: 'rgba(246,240,228,0.18)',
}

export const metadata = demoMetadata({
  slug: 'completito',
  title: 'Comple-Tito — Sandwichería en Manso de Velasco, Curicó',
  description:
    'La clásica sandwichería Comple-Tito (el Completito de siempre) en Av. Manso de Velasco 556, Curicó: completos, churrascos y café express, lunes a viernes. Demo de sitio web por Sitiazo.',
  image: IMG.fachada,
})

function Disco({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill={C.rojo} />
      <path d="M3 20a17 17 0 0 1 34 0c-6 4-11 5-17 5s-11-1-17-5z" fill="#fff" opacity="0.92" />
      <path d="M6 26.5c4.5-2.6 9.2-3.5 14-3.5s9.5.9 14 3.5A17 17 0 0 1 6 26.5z" fill={C.celeste} />
    </svg>
  )
}

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.crema, color: C.ink }}>
      <BlitzNav
        name={<span style={{ letterSpacing: '0.04em', textTransform: 'uppercase' }}>{BIZ.short}</span>}
        logoSrc={IMG.logo}
        links={[
          { label: 'La pizarra', href: '#pizarra' },
          { label: 'El local', href: '#local' },
          { label: 'Horario', href: '#horario' },
          { label: 'Cómo llegar', href: '#ubicacion' },
        ]}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.navy, ink: C.crema, line: C.lineDark, btnBg: C.rojo, btnInk: '#FFF3EE' }}
      />

      {/* ── Hero: la marquesina ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-12">
          <div className="grid md:grid-cols-[1.05fr_1fr] gap-9 md:gap-14 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <Disco className="w-7 h-7" />
                  <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: 'rgba(246,240,228,0.65)' }}>
                    Sandwichs · Café Express · Manso de Velasco 556
                  </p>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <h1
                  className={`${display.className} mt-5 leading-[0.98] uppercase text-[46px] md:text-[68px]`}
                  style={{ color: C.crema }}
                >
                  El completo que almuerza Curicó
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(246,240,228,0.72)' }}>
                  La fuente de soda de toda la vida frente al centro: churrascos a la
                  plancha, completos bien servidos y la pizarra del mostrador,
                  de lunes a viernes.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={CALL_LINK}
                    className="inline-flex items-center h-12 px-7 rounded-full text-sm font-bold uppercase tracking-[0.06em] active:scale-95 transition-transform tap-44"
                    style={{ backgroundColor: C.rojo, color: '#FFF3EE' }}
                  >
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <span
                    className="inline-flex items-center gap-2 h-12 px-4 rounded-full border text-sm"
                    style={{ borderColor: C.lineDark, color: C.crema }}
                  >
                    <Stars value={BIZ.rating} color={C.celeste} className="w-3.5 h-3.5" />
                    4,4 en Google
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <figure className="relative">
                <div className="overflow-hidden rounded-2xl border-4 shadow-xl -rotate-1" style={{ borderColor: C.crema }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                  <img
                    src={IMG.fachada}
                    alt="Letrero navy de Comple-Tito Sandwichs Café Express Shop con logos Pepsi, sobre la fachada vidriada"
                    className="w-full aspect-[4/3] object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption
                  className={`${mono.className} absolute -bottom-4 left-4 rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em]`}
                  style={{ backgroundColor: C.rojo, color: '#FFF3EE' }}
                >
                  El letrero de siempre
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La pizarra del mostrador ── */}
      <section id="pizarra" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>
            Lo que sale del mostrador
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl uppercase tracking-tight`} style={{ color: C.ink }}>
            La pizarra de todos los días
          </h2>
        </Reveal>
        <div className="mt-9 grid lg:grid-cols-[1.15fr_1fr] gap-7 items-start">
          <Reveal>
            <div className="rounded-xl overflow-hidden shadow-md" style={{ backgroundColor: C.papel, border: `2px solid ${C.navy}` }}>
              <div className="px-6 md:px-8 py-5 flex items-center justify-between" style={{ backgroundColor: C.navy }}>
                <p className={`${display.className} text-xl md:text-2xl uppercase tracking-wide`} style={{ color: C.crema }}>
                  Comple-Tito
                </p>
                <Disco className="w-7 h-7 shrink-0" />
              </div>
              <ul className="px-6 md:px-8 py-6">
                {PIZARRA.map((p) => (
                  <li key={p.nombre} className="py-3.5 border-b border-dashed last:border-b-0" style={{ borderColor: C.line }}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className={`${display.className} text-lg md:text-xl uppercase tracking-wide`} style={{ color: C.ink }}>
                        {p.nombre}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm" style={{ color: C.muted }}>{p.detalle}</p>
                    {p.menciones && (
                      <p className={`${mono.className} mt-1.5 text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.rojo }}>
                        {p.menciones}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} px-6 md:px-8 pb-5 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                Precios en la pizarra del local — consulta por teléfono
              </p>
            </div>
          </Reveal>
          <div className="space-y-7">
            <Reveal delay={120}>
              <figure className="overflow-hidden rounded-2xl border-4 shadow-md rotate-1" style={{ borderColor: C.papel }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                <img
                  src={IMG.italiano}
                  alt="Churrasco italiano con palta, tomate y carne a la plancha en Comple-Tito"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </figure>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: C.navyDeep }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(246,240,228,0.6)' }}>
                  Lo que más mencionan las opiniones
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {TEMAS.map(([t, n]) => (
                    <li key={t} className="rounded-lg px-3.5 py-3 border" style={{ borderColor: C.lineDark }}>
                      <p className={`${display.className} text-lg uppercase hyphens-auto`} style={{ color: C.crema }}>{t}</p>
                      <p className={`${mono.className} mt-0.5 text-[11px]`} style={{ color: C.celeste }}>{n}</p>
                    </li>
                  ))}
                </ul>
                <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(246,240,228,0.5)' }}>
                  Resumen de opiniones de su ficha de Google
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La mesa (banda de fotos) ── */}
      <section className="py-12 md:py-16" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(246,240,228,0.55)' }}>
              Así se ve la mesa
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-7 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-4 px-5 md:px-8 w-max mx-auto md:mx-0">
              {[
                { img: IMG.completo, alt: 'Completo con tomate y mayonesa servido en Comple-Tito', cap: 'Completo' },
                { img: IMG.churrasco, alt: 'Churrasco con palta y tomate laminado en Comple-Tito', cap: 'Churrasco' },
                { img: IMG.mesa, alt: 'Clientes almorzando sandwiches en la mesa de Comple-Tito', cap: 'La mesa' },
                { img: IMG.pisco, alt: 'Bandeja de pisco sour servida en Comple-Tito', cap: 'Pisco sour' },
                { img: IMG.barra, alt: 'Mesón de pedidos con la carta luminosa de Comple-Tito', cap: 'El mostrador' },
              ].map((f) => (
                <figure key={f.cap} className="relative snap-center shrink-0 w-[64vw] md:w-[300px] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                  <img src={f.img} alt={f.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  <figcaption
                    className={`${mono.className} absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.12em]`}
                    style={{ backgroundColor: 'rgba(12,27,66,0.9)', color: C.crema }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
        <p className={`${mono.className} mt-2 px-5 md:px-8 max-w-6xl mx-auto text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(246,240,228,0.45)' }}>
          Fotos reales de su ficha de Google
        </p>
      </section>

      {/* ── El local + horario ── */}
      <section id="local" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl border-4 shadow-md rotate-1" style={{ borderColor: C.papel }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
              <img
                src={IMG.salon}
                alt="Salón interior lleno de gente almorzando en Comple-Tito"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <div id="horario">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>
                La casa
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl uppercase tracking-tight`} style={{ color: C.ink }}>
                De semana, de la una en adelante
              </h2>
              <div className="mt-6 rounded-xl overflow-hidden border-2" style={{ borderColor: C.navy, backgroundColor: C.papel }}>
                {HORARIO.map(([d, h]) => (
                  <div
                    key={d}
                    className="flex items-baseline justify-between gap-4 px-5 md:px-7 py-3.5 border-b last:border-b-0"
                    style={{ borderColor: C.line }}
                  >
                    <span className="text-sm md:text-base font-medium" style={{ color: C.ink }}>{d}</span>
                    <span className={`${mono.className} text-sm`} style={{ color: h === 'Cerrado' ? C.muted : C.rojo }}>{h}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm" style={{ color: C.muted }}>
                El salón llena rápido a la hora de almuerzo — mejor llegar temprano.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="py-14 md:py-18" style={{ backgroundColor: '#EFE7D3' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>
                Manso de Velasco
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl uppercase tracking-tight`} style={{ color: C.ink }}>
                Media cuadra del centro
              </h2>
              <dl className="mt-6 space-y-3 text-base">
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.muted }}>
                    Teléfono
                  </dt>
                  <dd>
                    <a href={CALL_LINK} className={`${mono.className} underline underline-offset-2 tap-44`} style={{ color: C.ink }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 tap-44`}
                style={{ color: C.navy }}
              >
                Ver ficha en Google Maps
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl shadow-md border-2" style={{ borderColor: C.navy }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}, ${BIZ.city}`} className="w-full aspect-[4/3]" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 md:px-8 py-14">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-[2rem] px-6 py-10 md:px-12 md:py-14 text-center" style={{ backgroundColor: C.navy }}>
            <Disco className="mx-auto w-9 h-9" />
            <h2 className={`${display.className} mt-4 text-3xl md:text-5xl uppercase tracking-tight`} style={{ color: C.crema }}>
              ¿Un completo pa' la once?
            </h2>
            <p className="mt-3 text-base md:text-lg max-w-lg mx-auto" style={{ color: 'rgba(246,240,228,0.72)' }}>
              Llama, encarga y pasa a buscarlo por Manso de Velasco.
            </p>
            <a
              href={CALL_LINK}
              className="mt-7 inline-flex items-center h-12 px-7 rounded-full text-sm font-bold uppercase tracking-[0.06em] active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.rojo, color: '#FFF3EE' }}
            >
              Llamar al {BIZ.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 pb-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl uppercase tracking-wide`} style={{ color: C.navy }}>
                {BIZ.name}
              </p>
              <p className="mt-1 text-sm" style={{ color: C.muted }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city} · Lun a vie desde las 12:30
              </p>
            </div>
            <a
              href={CALL_LINK}
              className="inline-flex items-center h-11 px-5 rounded-full text-sm font-bold uppercase tracking-[0.06em] self-start md:self-auto active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.navy, color: C.crema }}
            >
              Llamar
            </a>
          </div>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.rojo} />
    </main>
  )
}
