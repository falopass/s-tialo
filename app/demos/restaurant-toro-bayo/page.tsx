import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, HORARIO, CARTA, RESENAS, FOTOS, LOGO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Identidad: el toro facetado de su logo (salmon/grafito) sobre la brasa de
// sus fotos — carbón cálido, coral de las facestas del toro, crema de humo.
const C = {
  carbon: '#171010',
  carbon2: '#221513',
  brasa: '#F0987B',
  brasaFuerte: '#E0632F',
  crema: '#F5EBDD',
  cremaMuted: 'rgba(245,235,221,0.72)',
  line: 'rgba(245,235,221,0.16)',
  tinta: '#241614',
  papel: '#F3E7D3',
  papelMuted: '#6B5B4C',
  brasaSobrePapel: '#A03D1C',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-toro-bayo',
  title: 'Toro Bayo — Parrilla a las brasas y mariscos en Las Rastras, Talca',
  description:
    'Restaurant familiar desde 1997 en Camino Las Rastras Km 2,3, Talca. Parrilladas, cortes premium, mariscos, pastel de jaiba y pastas frescas. 4,3 estrellas en Google.',
  image: `${IMG}/og.jpg`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La casa', href: '#casa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const NAV_THEME = {
  over: 'dark' as const,
  bar: 'rgba(23,16,16,0.94)',
  ink: C.crema,
  line: C.line,
  btnBg: C.brasa,
  btnInk: C.tinta,
}

// Facetas del toro: una franja de triángulos/rombos que corta las secciones.
function Facetas() {
  return (
    <div className="flex h-6 w-full overflow-hidden" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="h-full shrink-0"
          style={{
            width: `${4 + (i % 3) * 2}%`,
            backgroundColor: i % 4 === 0 ? C.brasa : i % 4 === 2 ? C.brasaFuerte : C.carbon2,
            clipPath:
              i % 2 === 0 ? 'polygon(0 0, 100% 0, 50% 100%)' : 'polygon(50% 0, 100% 100%, 0 100%)',
            marginLeft: '-1px',
          }}
        />
      ))}
    </div>
  )
}

export default function RestaurantToroBayo() {
  return (
    <main className={body.className} style={{ ...SPACING, backgroundColor: C.carbon, color: C.crema }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={BIZ.phoneTel}
        theme={NAV_THEME}
        fontClass={display.className}
        logoSrc={LOGO.mini.src}
        ctaLabel="Reservar"
      />

      {/* ── Portada: la parrilla sobre las brasas ──────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FOTOS.hero.src}
          alt={FOTOS.hero.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,16,16,0.55) 0%, rgba(23,16,16,0.15) 38%, rgba(23,16,16,0.92) 88%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 w-full">
          <Reveal>
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO.toro.src}
                alt={LOGO.toro.alt}
                className="w-16 md:w-24 h-auto"
              />
              <div className={`${mono.className} text-[11px] uppercase tracking-[0.22em] text-white/85`}>
                parrilla · mariscos · pastas
                <br />
                <span style={{ color: C.brasa }}>tradición maulina desde {BIZ.desde}</span>
              </div>
            </div>
            <h1 className={`${display.className} mt-4 text-[46px] leading-[0.98] md:text-[84px] text-white font-semibold`}>
              {BIZ.tagline}.
            </h1>
            <p className="mt-4 text-base md:text-xl leading-relaxed max-w-[52ch] text-white/90">
              Cocina casera, parrilla a las brasas y mariscos frescos en el camino
              Las Rastras, a unos 10 minutos de {BIZ.city} — para juntarse sin mirar el reloj.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white">
              <Stars value={BIZ.rating} color={C.brasa} />
              <span className="font-semibold">{BIZ.rating}</span>
              <span className="text-white/80">· {BIZ.reviews} reseñas en Google</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg">
              <a
                href={BIZ.phoneTel}
                className="tap-44 flex-1 text-center text-base font-bold py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.brasa, color: C.tinta }}
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                className="tap-44 flex-1 text-center text-base font-semibold py-3 rounded-full border text-white"
                style={{ borderColor: 'rgba(255,255,255,0.55)', backgroundColor: 'rgba(23,16,16,0.45)' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Facetas />

      {/* ── De la brasa a la mesa ──────────────────────────── */}
      <section className="py-12 md:py-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.brasa }}>
              lo mejor de la casa
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl text-white font-semibold`}>
              De la brasa a la mesa
            </h2>
            <p className="mt-4 max-w-[56ch] text-base md:text-lg leading-relaxed" style={{ color: C.cremaMuted }}>
              Lo nuestro es simple: buen producto, cocina con calma y el tiempo que
              cada plato merece. Así se come en el campo maulino.
            </p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 md:gap-5">
            {[
              { foto: FOTOS.parrilla, tag: 'a las brasas', titulo: 'La parrilla', texto: 'Cortes premium a las brasas — el corazón de la casa.' },
              { foto: FOTOS.salmon, tag: 'del mar', titulo: 'Mariscos y pescados', texto: 'Pastel de jaiba, machas a la parmesana, salmón del día.' },
              { foto: FOTOS.empanadas, tag: 'para partir', titulo: 'Entradas', texto: 'Empanadas fritas, carpaccios y ceviches para abrir la mesa.' },
            ].map((c, i) => (
              <Reveal key={c.titulo} delay={i * 90}>
                <figure
                  className="h-full rounded-2xl overflow-hidden border"
                  style={{ borderColor: C.line, backgroundColor: C.carbon2 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.foto.src} alt={c.foto.alt} className="w-full aspect-[4/3] object-cover" />
                  <figcaption className="p-5">
                    <div className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.brasa }}>
                      {c.tag}
                    </div>
                    <div className={`${display.className} mt-1.5 text-xl text-white`}>{c.titulo}</div>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.cremaMuted }}>
                      {c.texto}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La carta ───────────────────────────────────────── */}
      <section id="carta" className="py-12 md:py-20" style={{ backgroundColor: C.carbon2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.brasa }}>
              una selección de la casa
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl text-white font-semibold`}>
              La carta, como en la pizarra
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-5">
            {CARTA.map((s, i) => (
              <Reveal key={s.seccion} delay={i * 90}>
                <div
                  className="h-full rounded-2xl border-2 p-5 md:p-6"
                  style={{ borderColor: `${C.brasa}55`, backgroundColor: C.carbon }}
                >
                  <h3 className={`${displayItalic.className} text-xl md:text-2xl italic`} style={{ color: C.brasa }}>
                    {s.seccion}
                  </h3>
                  <ul className="mt-4 space-y-3.5">
                    {s.items.map((it) => (
                      <li key={it.nombre} className="flex items-baseline gap-2 text-[15px]">
                        <span className="text-white/90">{it.nombre}</span>
                        <span className="flex-1 border-b border-dotted" style={{ borderColor: C.line }} />
                        <span className={`${mono.className} text-sm font-semibold`} style={{ color: C.brasa }}>
                          {it.precio}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className={`${mono.className} mt-4 text-xs`} style={{ color: C.cremaMuted }}>
              precios publicados en {BIZ.web} — la carta completa tiene bar, vinos del Maule y más
            </p>
          </Reveal>
        </div>
      </section>

      <Facetas />

      {/* ── La casa: tres generaciones ─────────────────────── */}
      <section id="casa" className="py-12 md:py-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            <Reveal className="md:col-span-5">
              <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.brasaSobrePapel }}>
                la casa
              </div>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-semibold`}>
                Tres generaciones vuelven a la misma mesa
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.papelMuted }}>
                En {BIZ.desde} una familia abrió las puertas de su casa a la orilla del
                camino Las Rastras: cocina casera, de la olla a la mesa. Con el tiempo
                llegó la parrilla — y hoy por aquí pasaron los abuelos, después sus
                hijos y ahora llegan los nietos.
              </p>
              <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: C.papelMuted }}>
                Te atiende la misma familia de siempre, con garzones que llevan
                décadas en la casa. Almuerzos de domingo, celebraciones y
                matrimonios — acá conversando todo se acomoda.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold">
                {['Terrazas y jardines', 'Estacionamiento', 'Pet friendly', 'Menú infantil'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.brasaFuerte }} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="md:col-span-7 grid grid-cols-5 gap-3 md:gap-4">
              <Reveal className="col-span-3" delay={80}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOTOS.salon.src}
                  alt={FOTOS.salon.alt}
                  className="w-full h-full object-cover rounded-2xl aspect-[4/3] md:aspect-auto"
                />
              </Reveal>
              <Reveal className="col-span-2" delay={160}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOTOS.mesaV.src}
                  alt={FOTOS.mesaV.alt}
                  className="w-full h-full object-cover rounded-2xl aspect-[3/4] md:aspect-auto"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cinta de fotos ─────────────────────────────────── */}
      <section className="py-10 md:py-14" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.brasa }}>
              así se siente una tarde sin apuro
            </div>
          </Reveal>
        </div>
        <div className="mt-6 flex gap-3 overflow-x-auto px-5 md:px-8 pb-2 snap-x snap-mandatory">
          {[FOTOS.pastas, FOTOS.coctel, FOTOS.pavlova, FOTOS.ensalada].map((f) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={f.src}
              src={f.src}
              alt={f.alt}
              className="snap-center shrink-0 w-[240px] md:w-[320px] aspect-[4/3] object-cover rounded-xl"
            />
          ))}
        </div>
      </section>

      {/* ── Reseñas ────────────────────────────────────────── */}
      <section id="resenas" className="py-12 md:py-20" style={{ backgroundColor: C.carbon2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.brasa }}>
                  lo que se comenta en la mesa
                </div>
                <h2 className={`${display.className} mt-3 text-3xl md:text-5xl text-white font-semibold`}>
                  «Merece un desvío»
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <Stars value={BIZ.rating} color={C.brasa} />
                <span className="font-bold">{BIZ.rating}</span>
                <span style={{ color: C.cremaMuted }}>· {BIZ.reviews} reseñas en Google</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.texto.slice(0, 24)} delay={i * 70}>
                <figure
                  className="h-full rounded-2xl border p-5"
                  style={{ borderColor: C.line, backgroundColor: C.carbon }}
                >
                  <Stars value={r.stars} color={C.brasa} />
                  <blockquote className="mt-3 text-[15px] leading-relaxed text-white/85">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs`} style={{ color: C.cremaMuted }}>
                    reseña en {r.fuente}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tu visita: horario, reservas y mapa ────────────── */}
      <section id="llegar" className="py-12 md:py-16" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.brasa }}>
              tu visita
            </div>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl text-white font-semibold`}>
              Tu mesa junto al fuego
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-12 gap-5 md:gap-6 items-stretch">
            <div className="md:col-span-5 grid gap-4">
              <Reveal>
                <div className="rounded-2xl border p-5" style={{ borderColor: C.line, backgroundColor: C.carbon2 }}>
                  <h3 className={`${display.className} text-xl text-white`}>Horario</h3>
                  <ul className="mt-4 space-y-2.5 text-[15px]" style={{ color: C.cremaMuted }}>
                    {HORARIO.map(([d, h]) => (
                      <li key={d} className="flex items-baseline gap-3">
                        <span className="capitalize">{d}</span>
                        <span className="flex-1 border-b border-dotted" style={{ borderColor: C.line }} />
                        <span className={`${mono.className} text-sm`} style={{ color: C.brasa }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`${mono.className} mt-3 text-[11px]`} style={{ color: C.cremaMuted }}>
                    cocina hasta las 22:30 (mar–sáb) · festivos: confirma por teléfono
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="rounded-2xl border p-5" style={{ borderColor: C.line, backgroundColor: C.carbon2 }}>
                  <h3 className={`${display.className} text-xl text-white`}>Reservas</h3>
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.cremaMuted }}>
                    Para grupos y fines de semana, mejor con reserva.
                  </p>
                  <a
                    href={BIZ.phoneTel}
                    className="tap-44 mt-4 block text-center text-base font-bold py-3 rounded-full"
                    style={{ backgroundColor: C.brasa, color: C.tinta }}
                  >
                    Llamar {BIZ.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="md:col-span-7" delay={120}>
              <div className="h-full rounded-2xl border overflow-hidden" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  className="w-full h-full min-h-[300px]"
                  loading="lazy"
                />
                <div className="p-4 flex flex-wrap items-center justify-between gap-3" style={{ backgroundColor: C.carbon2 }}>
                  <div className="text-sm">
                    <div className="font-semibold text-white">{BIZ.address}</div>
                    <div style={{ color: C.cremaMuted }}>{BIZ.city}, Región del {BIZ.region}</div>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} text-xs font-semibold underline underline-offset-4`}
                    style={{ color: C.brasa }}
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-7" style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO.mini.src} alt="" aria-hidden="true" className="h-10 w-10" />
              <div>
                <div className={`${display.className} text-lg leading-none`}>{BIZ.name}</div>
                <div className={`${mono.className} text-[11px] mt-1`} style={{ color: C.cremaMuted }}>
                  {BIZ.rubro} · {BIZ.city}
                </div>
              </div>
            </div>
            <div className={`${mono.className} text-[11px] text-right leading-relaxed`} style={{ color: C.cremaMuted }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.phoneDisplay} · {BIZ.instagram}
            </div>
          </div>
          <p className={`${displayItalic.className} mt-4 text-lg italic`} style={{ color: C.brasa }}>
            “{BIZ.tagline}”
          </p>
          <p className={`${mono.className} mt-4 pt-4 text-[11px] border-t`} style={{ color: 'rgba(245,235,221,0.5)', borderColor: C.line }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}.
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.brasaFuerte} />
    </main>
  )
}
