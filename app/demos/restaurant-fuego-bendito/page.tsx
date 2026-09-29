import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, PLATOS, SABORES } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el brasero de piedra». El logo — un monograma FB
 * grabado en marco negro — fija el tono: romano, contenido, de filete
 * fino. La fachada de piedra laja y la parrilla a la vista dan la
 * paleta: carbón, hueso y la brasa naranja de los platos. Secciones
 * como páginas de un libro de asado: marcos dobles, fotos emarcadas,
 * la semana de horarios como tabla de servicio.
 */
const C = {
  carbon: '#171310',
  carbon2: '#211B16',
  hueso: '#F3EDE3',
  huesoDim: 'rgba(243,237,227,0.62)',
  brasa: '#C8552B',
  brasaSoft: '#E08A5C',
  ink: '#221B14',
  muted: '#6E6152',
  papel: '#F7F2E9',
  lineDark: 'rgba(243,237,227,0.16)',
  line: 'rgba(34,27,20,0.16)',
}

export const metadata = demoMetadata({
  slug: 'restaurant-fuego-bendito',
  title: 'Fuego Bendito — Parrilla y mariscos en Av. España, Curicó',
  description:
    'Restaurante de carnes y mariscos con parrilla a la vista en Av. España 280, Curicó: comedor de piedra, terraza y bar. Reservas por WhatsApp. Demo de sitio web por Sitiazo.',
  image: IMG.fachada,
})

function Marco({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <rect x="3" y="3" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="8" y="8" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.carbon, color: C.hueso }}>
      <BlitzNav
        name={<span style={{ letterSpacing: '0.06em' }}>{BIZ.short}</span>}
        logoSrc={IMG.logo}
        links={[
          { label: 'La parrilla', href: '#parrilla' },
          { label: 'La casa', href: '#casa' },
          { label: 'Horario', href: '#horario' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.carbon, ink: C.hueso, line: C.lineDark, btnBg: C.brasa, btnInk: '#FFF4EA' }}
      />

      {/* ── Hero: el umbral de la casa ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-14 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <Marco className="w-9 h-9" />
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.huesoDim }}>
                  Carnes · mariscos · parrilla a la vista
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h1
                className={`${display.className} mt-5 leading-[1.04] text-[40px] md:text-[60px]`}
                style={{ color: C.hueso }}
              >
                La mesa larga de la brasa, en Av. España
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.huesoDim }}>
                Una casa de piedra y madera con el fuego a la vista: cortes, pescados,
                terraza y una barra que trabaja hasta pasada la medianoche.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-12 px-7 text-sm font-bold uppercase tracking-[0.1em] active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.brasa, color: '#FFF4EA', border: `1px solid ${C.brasaSoft}` }}
                >
                  Reservar mesa
                </a>
                <span
                  className="inline-flex items-center gap-2 h-12 px-4 border text-sm"
                  style={{ borderColor: C.lineDark, color: C.hueso }}
                >
                  <Stars value={BIZ.rating} color={C.brasaSoft} className="w-3.5 h-3.5" />
                  4,5 en Google
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative">
              <figure className="relative p-3 border" style={{ borderColor: C.lineDark }}>
                <figure className="overflow-hidden border" style={{ borderColor: C.lineDark }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                  <img
                    src={IMG.fachada}
                    alt="Terraza y fachada de piedra y madera del Restaurante Fuego Bendito en Curicó"
                    className="w-full aspect-[4/5] md:aspect-[5/6] object-cover"
                    loading="eager"
                  />
                </figure>
                {/* eslint-disable-next-line @next/next/no-img-element -- logo real del sitio oficial */}
                <img
                  src={IMG.logo}
                  alt="Logo de Restaurante Fuego Bendito: monograma FB grabado"
                  className="absolute -bottom-7 right-5 w-20 h-20 md:w-24 md:h-24 object-cover border shadow-lg"
                  style={{ borderColor: C.lineDark, backgroundColor: '#fff' }}
                  loading="eager"
                />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La parrilla: tres tiempos de la casa ── */}
      <section id="parrilla" className="py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px flex-1" style={{ backgroundColor: C.line }} />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.muted }}>
                De la carta de la casa
              </p>
              <span className="h-px flex-1" style={{ backgroundColor: C.line }} />
            </div>
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl text-center`} style={{ color: C.ink }}>
              Fuego, mar y sobremesa
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 md:gap-8">
            {PLATOS.map((p, i) => (
              <Reveal key={p.tag} delay={i * 100}>
                <figure className="p-2.5 border" style={{ borderColor: C.line, backgroundColor: '#FFFDF8' }}>
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                    <img src={p.img} alt={p.alt} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                  </div>
                  <figcaption className="pt-3 pb-1 px-1 text-center">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.brasa }}>
                      {p.tag}
                    </p>
                    <p className="mt-1 text-sm font-medium" style={{ color: C.ink }}>
                      {p.nombre}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <div
              className="mt-10 mx-auto max-w-3xl border px-6 py-6 md:px-10 md:py-8"
              style={{ borderColor: C.line, backgroundColor: '#FFFDF8' }}
            >
              <p className={`${mono.className} text-center text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.muted }}>
                Y en la carta completa
              </p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-2.5">
                {SABORES.map((s) => (
                  <li key={s} className="flex items-baseline gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                    <span className="w-4 h-px shrink-0 translate-y-[-4px]" style={{ backgroundColor: C.brasa }} />
                    {s}
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} mt-6 pt-4 border-t text-center text-[11px] uppercase tracking-[0.18em]`} style={{ borderColor: C.line, color: C.muted }}>
                Platos nombrados en su propia carta — fotos de su ficha y sitio oficial
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La casa: piedra, madera y terraza ── */}
      <section id="casa" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.huesoDim }}>
              El local
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl`} style={{ color: C.hueso }}>
              Piedra laja, madera y la terraza encendida
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: C.huesoDim }}>
              Comedor rústico con la parrilla a la vista, mesas de madera al aire libre
              y una barra con vinos y espumantes de la zona.
            </p>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { img: IMG.muro, alt: 'Muro de piedra laja con el letrero Fuego Bendito y carros antiguos', cap: 'El muro de entrada' },
              { img: IMG.comedor, alt: 'Comedor interior de madera con mesas servidas en Fuego Bendito', cap: 'El comedor' },
              { img: IMG.terraza, alt: 'Terraza de noche con sombrillas iluminadas en Fuego Bendito', cap: 'La terraza de noche' },
              { img: IMG.bar, alt: 'Bartenders preparando tragos de colores en la barra de Fuego Bendito', cap: 'La barra' },
            ].map((f, i) => (
              <Reveal key={f.cap} delay={i * 80}>
                <figure>
                  <div className="overflow-hidden border p-1.5" style={{ borderColor: C.lineDark }}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                    <img src={f.img} alt={f.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.huesoDim }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horario de servicio ── */}
      <section id="horario" className="py-14 md:py-18" style={{ backgroundColor: C.carbon2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.huesoDim }}>
                Servicio de mesa
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl`} style={{ color: C.hueso }}>
                Todos los días, desde la una
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-sm" style={{ color: C.huesoDim }}>
                La cocina abre al almuerzo y la casa sigue hasta la noche;
                el domingo, solo la tarde.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border" style={{ borderColor: C.lineDark }}>
              {HORARIO.map(([d, h]) => (
                <div
                  key={d}
                  className="flex items-baseline justify-between gap-4 px-5 md:px-7 py-4 border-b last:border-b-0"
                  style={{ borderColor: C.lineDark }}
                >
                  <span className="text-sm md:text-base" style={{ color: C.hueso }}>{d}</span>
                  <span className={`${mono.className} text-sm`} style={{ color: C.brasaSoft }}>{h}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.huesoDim }}>
                Sobre Av. España
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl`} style={{ color: C.hueso }}>
                Entrada a Curicó por el norte
              </h2>
              <dl className="mt-6 space-y-3 text-base">
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.huesoDim }}>
                    Dirección
                  </dt>
                  <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.huesoDim }}>
                    Reservas
                  </dt>
                  <dd className={mono.className}>{BIZ.phoneDisplay}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: C.huesoDim }}>
                    Sitio web
                  </dt>
                  <dd className={mono.className}>{BIZ.website}</dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 tap-44`}
                style={{ color: C.brasaSoft }}
              >
                Ver ficha en Google Maps
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="border p-1.5" style={{ borderColor: C.lineDark }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}, ${BIZ.city}`} className="w-full aspect-[4/3]" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── CTA reserva ── */}
      <section className="px-5 md:px-8 pb-14">
        <Reveal>
          <div className="max-w-6xl mx-auto border px-6 py-10 md:px-12 md:py-14 text-center" style={{ borderColor: C.lineDark, backgroundColor: C.carbon2 }}>
            <Marco className="mx-auto w-10 h-10" />
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl`} style={{ color: C.hueso }}>
              La brasa ya está prendida
            </h2>
            <p className="mt-4 text-base md:text-lg max-w-lg mx-auto" style={{ color: C.huesoDim }}>
              Escríbenos por WhatsApp y deja tu mesa lista para el almuerzo o la cena.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center h-12 px-8 text-sm font-bold uppercase tracking-[0.1em] active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.brasa, color: '#FFF4EA' }}
            >
              Reservar por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.lineDark, backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 pb-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real */}
              <img src={IMG.logo} alt="" className="w-10 h-10 object-cover border" style={{ borderColor: C.lineDark }} aria-hidden="true" />
              <div>
                <p className={`${display.className} text-lg`} style={{ color: C.hueso }}>{BIZ.name}</p>
                <p className="text-sm" style={{ color: C.huesoDim }}>
                  {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
                </p>
              </div>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 text-sm font-bold uppercase tracking-[0.08em] self-start md:self-auto active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.brasa, color: '#FFF4EA' }}
            >
              Reservar mesa
            </a>
          </div>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
