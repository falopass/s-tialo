import Image from 'next/image'
import localFont from 'next/font/local'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_TEXT, INCLUYE, EVENTOS, RESENAS, PASOS, FOTOS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

export const metadata = demoMetadata({
  slug: BIZ.slug,
  title: `${BIZ.name} — ${BIZ.rubro} en Villa Edén, Talca`,
  description:
    'Local de eventos infantiles en Villa Edén: cumpleaños, baby showers y reuniones familiares con juegos, candy bar, cocina equipada y jardín. Reserva por WhatsApp.',
})

// Colores tomados del logo real de Kids Art (tipografía multicolor).
const C = {
  base: '#FFF8EC',
  baseB: '#FFE9F2',
  ink: '#33284A',
  inkSoft: '#5C5077',
  rosa: '#C22E78',
  celeste: '#1A6098',
  sol: '#8A6100',
  verde: '#1F7444',
  morado: '#7A3FB0',
  linea: '#EBDCC4',
}

/** Borde festoneado tipo invitación recortada (CSS puro). */
function BordeFeston({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      aria-hidden
      className="h-4 w-full"
      style={{
        backgroundImage: `radial-gradient(circle at 8px 8px, ${color} 8px, transparent 8.5px)`,
        backgroundSize: '24px 16px',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    />
  )
}

/** Cinta adhesiva sobre una polaroid. */
function Cinta({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className="absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-4deg] rounded-[2px] opacity-80"
      style={{ backgroundColor: color }}
    />
  )
}

export default function Page() {
  const waLink = `https://wa.me/${BIZ.wa}?text=${WA_TEXT}`
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(BIZ.mapQuery)}&z=16&output=embed`
  const cintaColores = [C.rosa, C.celeste, C.verde, C.morado]

  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.base, color: C.ink }}>
      <BlitzNav
        name={<span className={`${display.className} text-lg font-extrabold tracking-tight`}>{BIZ.short}</span>}
        links={[
          { label: 'La invitación', href: '#local' },
          { label: 'El programa', href: '#programa' },
          { label: 'Fotos', href: '#fotos' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={waLink}
        theme={{ over: 'light', bar: 'rgba(255,248,236,0.92)', ink: C.ink, line: C.linea, btnBg: C.rosa, btnInk: '#fff' }}
        ctaLabel="Reservar"
        logoSrc="/demos/kids-art-talca/logo.webp"
      />

      {/* ── La invitación ── */}
      <header id="inicio" className="px-5 pt-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] bg-white shadow-xl" style={{ border: `2px dashed ${C.rosa}` }}>
              <div className="px-6 pb-8 pt-8 text-center sm:px-10">
                <p className={`${display.className} text-[15px] font-bold uppercase tracking-[0.3em]`} style={{ color: C.morado }}>
                  ¡Estás invitado!
                </p>
                <h1 className={`${display.className} mx-auto mt-3 max-w-2xl text-[38px] font-extrabold leading-[1.05] sm:text-[48px]`}>
                  Un cumpleaños en Villa Edén que no se olvida
                </h1>
                <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed" style={{ color: C.inkSoft }}>
                  {BIZ.name} reserva su local completo para tu evento: inflable, pelotero, candy bar, cocina equipada y un jardín con piscina.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[50px] items-center rounded-full px-7 text-[15px] font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                    style={{ backgroundColor: C.rosa }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href="#fotos"
                    className="inline-flex h-[50px] items-center rounded-full border-2 px-6 text-[15px] font-bold"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver el local
                  </a>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: C.base }}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill={C.sol} aria-hidden>
                    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
                  </svg>
                  <span className="text-[13px] font-bold">{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
                </div>
              </div>
              {/* Cenefa de fotos reales al pie de la invitación */}
              <div className="grid grid-cols-3 gap-0">
                {[FOTOS[1], FOTOS[0], FOTOS[2]].map((f) => (
                  <div key={f.src} className="relative h-[130px] sm:h-[180px]">
                    <Image src={f.src} alt={f.alt} fill sizes="33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── Qué incluye la reserva ── */}
      <section id="local" className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.celeste }}>La invitación dice…</p>
            <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>El local completo, solo para tu fiesta</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUYE.map((it, i) => {
              const tinta = [C.rosa, C.celeste, C.verde, C.morado, C.sol, C.rosa][i % 6]
              return (
                <Reveal key={it.titulo} delay={i * 60}>
                  <div className="h-full rounded-2xl bg-white p-5 shadow-sm" style={{ borderTop: `4px solid ${tinta}` }}>
                    <h3 className={`${display.className} text-[18px] font-bold`}>{it.titulo}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.inkSoft }}>{it.detalle}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-2">
              {EVENTOS.map((e) => (
                <span key={e} className="rounded-full bg-white px-4 py-2 text-[13px] font-bold shadow-sm" style={{ color: C.ink }}>
                  {e}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El programa de la fiesta ── */}
      <section id="programa" style={{ backgroundColor: C.baseB }}>
        <BordeFeston color={C.base} />
        <div className="px-5 py-12">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.rosa }}>El programa</p>
              <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>Así se arma la fiesta</h2>
            </Reveal>
            <ol className="relative mt-8 space-y-6 border-l-4 border-dashed pl-6" style={{ borderColor: C.morado }}>
              {PASOS.map((p, i) => (
                <Reveal key={p.n} delay={i * 70}>
                  <li className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[37px] top-1 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
                      style={{ backgroundColor: [C.rosa, C.celeste, C.verde][i % 3] }}
                    >
                      {i + 1}
                    </span>
                    <h3 className={`${display.className} text-[18px] font-bold`}>{p.t}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.inkSoft }}>{p.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={150}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-[50px] items-center rounded-full px-7 text-[15px] font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: C.rosa }}
              >
                Consultar una fecha
              </a>
            </Reveal>
          </div>
        </div>
        <BordeFeston color={C.base} flip />
      </section>

      {/* ── Muro de fotos: polaroids pegadas ── */}
      <section id="fotos" className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.verde }}>Fotos reales del local</p>
            <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>El muro de la fiesta</h2>
            <p className="mt-2 max-w-md text-[15px]" style={{ color: C.inkSoft }}>
              Fotos de la ficha de Google Maps del local y de su Instagram {BIZ.instagram}.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 60}>
                <figure
                  className="relative bg-white p-2 pb-3 shadow-md"
                  style={{ transform: `rotate(${[-2, 1.5, -1, 2.5, -1.5, 1, -2.5, 1.5][i % 8]}deg)` }}
                >
                  <Cinta color={cintaColores[i % 4]} />
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 3.4' }}>
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width: 640px) 30vw, 46vw" className="object-cover" />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas: globos de diálogo ── */}
      <section id="resenas" className="px-5 py-14" style={{ backgroundColor: C.baseB }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.morado }}>Lo que dijeron los invitados</p>
            <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>{BIZ.rating} de 5 en Google</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 80}>
                <figure>
                  <blockquote
                    className="relative rounded-2xl bg-white p-5 text-[15px] leading-relaxed shadow-sm"
                    style={{ border: `2px solid ${[C.rosa, C.celeste, C.verde][i % 3]}` }}
                  >
                    {r.texto}
                    <span
                      aria-hidden
                      className="absolute -bottom-[9px] left-7 h-4 w-4 rotate-45 bg-white"
                      style={{ borderRight: `2px solid ${[C.rosa, C.celeste, C.verde][i % 3]}`, borderBottom: `2px solid ${[C.rosa, C.celeste, C.verde][i % 3]}` }}
                    />
                  </blockquote>
                  <figcaption className="mt-4 pl-2 text-[13px] font-bold" style={{ color: C.inkSoft }}>
                    {r.autor} · reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación: dónde es la fiesta ── */}
      <section id="ubicacion" className="px-5 pb-14 pt-4">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.celeste }}>Dónde es la fiesta</p>
            <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>{BIZ.address}</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 overflow-hidden rounded-3xl shadow-md" style={{ border: `3px solid ${C.morado}` }}>
              <LazyMap src={mapSrc} title={`Mapa de ${BIZ.name}`} className="h-[300px] w-full border-0" loading="lazy" />
            </div>
          </Reveal>
          <p className="mt-3 text-[14px]" style={{ color: C.inkSoft }}>
            {BIZ.city}, {BIZ.region} · Escríbenos por WhatsApp para consultar horarios de atención.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-5 pb-8" style={{ backgroundColor: C.ink }}>
        <div className="mx-auto max-w-5xl pt-9">
          <div className="flex items-center gap-3">
            <Image src="/demos/kids-art-talca/logo.webp" alt="" width={40} height={40} className="rounded-full" />
            <div>
              <p className={`${display.className} text-[18px] font-extrabold text-white`}>{BIZ.name}</p>
              <p className="text-[12px]" style={{ color: '#C9BEE4' }}>{BIZ.address}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: '#C9BEE4' }}>
            <span>Instagram {BIZ.instagram}</span>
            <span>Facebook {BIZ.facebook}</span>
            <span>{BIZ.phone}</span>
          </div>
          <div className="mt-5 border-t pb-2 pt-4 text-[12px]" style={{ borderColor: '#4A3F6B', color: '#9F93C6' }}>
            Demo de sitio web creada por Sitiazo para {BIZ.name} · Datos verificados en Google Maps y sus redes oficiales.
          </div>
        </div>
      </footer>

      <WaFab href={waLink} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
