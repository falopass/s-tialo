import Image from 'next/image'
import localFont from 'next/font/local'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_TEXT, HORARIO, OFERTAS, PASILLOS, RESENAS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

export const metadata = demoMetadata({
  slug: BIZ.slug,
  title: `${BIZ.name} — Aseo, hogar y abarrotes en 27 Sur, Talca`,
  description:
    'Comercializadora en Veintisiete Sur 0114, Talca: detergentes, cuidado personal, perfumería, bebidas y abarrotes con precios de folleto. Ofertas por WhatsApp.',
})

// Degradé del logo real de Protalca (naranja → fucsia → azul) + amarillo de folleto.
const C = {
  base: '#FFFDF6',
  ink: '#1E1B26',
  inkSoft: '#54506B',
  naranja: '#E05A1E',
  fucsia: '#B32F8F',
  azul: '#2456C4',
  amarillo: '#FFD23F',
  papel: '#FFFFFF',
  linea: '#E8E2CE',
}
const GRAD = `linear-gradient(90deg, ${C.naranja} 0%, ${C.fucsia} 50%, ${C.azul} 100%)`

/** Etiqueta de precio colgante, con perforación y cordel. */
function PrecioTag({ texto }: { texto: string }) {
  return (
    <span className="relative inline-flex rotate-[3deg] items-center gap-2 rounded-md px-3 py-1.5 text-[15px] font-extrabold shadow-sm" style={{ backgroundColor: C.amarillo, color: C.ink }}>
      <span aria-hidden className="h-2 w-2 rounded-full border" style={{ borderColor: C.ink, backgroundColor: C.papel }} />
      {texto}
    </span>
  )
}

/** Borde en zigzag tipo corte de boleta. */
function Zigzag({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="h-3 w-full"
      style={{
        backgroundImage: `linear-gradient(-45deg, transparent 8px, ${color} 0), linear-gradient(45deg, transparent 8px, ${color} 0)`,
        backgroundSize: '16px 16px',
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}

export default function Page() {
  const waLink = `https://wa.me/${BIZ.wa}?text=${WA_TEXT}`
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(BIZ.mapQuery)}&z=16&output=embed`

  const pasilloFotos = [
    { src: '/demos/protalca-ex-prolimp-talca/pasillo-precios.webp', alt: 'Pasillo de Protalca con carteles de precios sobre las góndolas' },
    { src: '/demos/protalca-ex-prolimp-talca/pasillo-aseo.webp', alt: 'Pasillo de productos de aseo y limpieza en Protalca' },
    { src: '/demos/protalca-ex-prolimp-talca/pasillo-papel.webp', alt: 'Góndola con productos de papel y confort en Protalca' },
    { src: '/demos/protalca-ex-prolimp-talca/pasillo-perfumes.webp', alt: 'Estante de perfumería y cuidado personal en Protalca' },
  ]

  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.base, color: C.ink }}>
      <BlitzNav
        name={<span className={`${display.className} text-lg tracking-tight`}>{BIZ.short}</span>}
        links={[
          { label: 'Pasillos', href: '#pasillos' },
          { label: 'Ofertas', href: '#ofertas' },
          { label: 'La boleta', href: '#datos' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={waLink}
        theme={{ over: 'light', bar: 'rgba(255,253,246,0.92)', ink: C.ink, line: C.linea, btnBg: C.fucsia, btnInk: '#fff' }}
        ctaLabel="Consultar"
        logoSrc="/demos/protalca-ex-prolimp-talca/logo.webp"
      />

      {/* ── Hero: góndola principal ── */}
      <header id="inicio" className="px-5 pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="h-2 w-full rounded-full" style={{ backgroundImage: GRAD }} />
          <Reveal>
            <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.24em]" style={{ color: C.azul }}>
                  {BIZ.rubro} · Veintisiete Sur, Talca
                </p>
                <h1 className={`${display.className} mt-3 text-[36px] leading-[1.04] sm:text-[52px]`}>
                  Todo en un mismo lugar,{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: GRAD }}
                  >
                    pero más barato
                  </span>
                </h1>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed" style={{ color: C.inkSoft }}>
                  El eslogan está pintado en la fachada y es literal: detergentes, perfumería, bebidas y abarrotes en un solo local de 27 Sur.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[50px] items-center rounded-full px-7 text-[15px] font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                    style={{ backgroundColor: C.fucsia }}
                  >
                    Consultar ofertas por WhatsApp
                  </a>
                  <a
                    href="#ofertas"
                    className="inline-flex h-[50px] items-center rounded-full border-2 px-6 text-[15px] font-bold"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver el folleto
                  </a>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill={C.naranja} aria-hidden>
                    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
                  </svg>
                  <span className="text-[13px] font-bold">{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
                </div>
              </div>
              <figure className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ border: `4px solid ${C.ink}` }}>
                  <Image
                    src="/demos/protalca-ex-prolimp-talca/fachada-prolimp.webp"
                    alt="Fachada del local de Protalca en Veintisiete Sur, Talca"
                    width={1162}
                    height={1200}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-center text-[11px] uppercase tracking-widest`} style={{ color: C.inkSoft }}>
                  El local de 27 Sur — foto real de su ficha
                </figcaption>
              </figure>
            </div>
          </Reveal>
          <div className="mt-8 h-2 w-full rounded-full" style={{ backgroundImage: GRAD }} />
        </div>
      </header>

      {/* ── La góndola: pasillos + fotos de pasillo ── */}
      <section id="pasillos" className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.24em]" style={{ color: C.fucsia }}>La góndola</p>
            <h2 className={`${display.className} mt-2 text-[32px] leading-tight sm:text-[40px]`}>Recorre los pasillos</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
            {/* Estante de pasillos */}
            <ol className="space-y-0">
              {PASILLOS.map((p, i) => (
                <Reveal key={p} delay={i * 50}>
                  <li className="border-b-[10px] pb-3 pt-4" style={{ borderColor: [C.naranja, C.fucsia, C.azul][i % 3] }}>
                    <span className={`${display.className} text-[20px] sm:text-[24px]`}>{p}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
            {/* Fotos de pasillo apiladas como repisas */}
            <div className="grid grid-cols-2 gap-4">
              {pasilloFotos.map((f, i) => (
                <Reveal key={f.src} delay={i * 60}>
                  <figure className="relative">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md">
                      <Image src={f.src} alt={f.alt} fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover" />
                    </div>
                    <div className="mx-auto -mt-1 h-[6px] w-[92%] rounded-b-md" style={{ backgroundColor: C.ink }} />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── El folleto de la semana ── */}
      <section id="ofertas" className="px-5 py-14" style={{ backgroundColor: C.ink }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.24em]" style={{ color: C.amarillo }}>El folleto</p>
            <h2 className={`${display.className} mt-2 text-[32px] leading-tight text-white sm:text-[40px]`}>
              Ofertas que ellos mismos publican
            </h2>
            <p className="mt-2 max-w-md text-[15px]" style={{ color: '#C9C4DC' }}>
              Flyers reales de su Instagram {BIZ.instagram}. El precio y el stock de esta semana se confirman por WhatsApp.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
            {OFERTAS.map((o, i) => (
              <Reveal key={o.img} delay={i * 60}>
                <figure className="relative" style={{ transform: `rotate(${[-1.5, 1, -1, 1.5][i % 4]}deg)` }}>
                  {/* cordel de la etiqueta */}
                  <span aria-hidden className="absolute -top-4 left-1/2 h-5 w-[2px] -translate-x-1/2" style={{ backgroundColor: '#C9C4DC' }} />
                  <div className="rounded-xl bg-white p-2 shadow-md">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                      <Image src={o.img} alt={o.alt} fill sizes="(min-width: 640px) 22vw, 45vw" className="object-cover" />
                    </div>
                    <figcaption className="px-1 pb-1 pt-2">
                      <p className="text-[13px] font-bold leading-snug" style={{ color: C.ink }}>{o.producto}</p>
                      <p className={`${mono.className} mt-1 text-[11px]`} style={{ color: C.inkSoft }}>{o.nota}</p>
                    </figcaption>
                  </div>
                  <div className="absolute -top-2 right-2">
                    {o.precio ? <PrecioTag texto={o.precio} /> : <PrecioTag texto="Pregunta" />}
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-[50px] items-center rounded-full px-7 text-[15px] font-bold shadow-md transition-transform hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: C.amarillo, color: C.ink }}
            >
              Preguntar el precio de esta semana
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La boleta: datos del negocio ── */}
      <section id="datos" className="px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.24em]" style={{ color: C.azul }}>Los datos, como en la boleta</p>
            <h2 className={`${display.className} mt-2 text-[32px] leading-tight sm:text-[40px]`}>Todo lo que necesitas saber</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8">
              <div className={`${mono.className} bg-white px-6 pt-6 shadow-lg`} style={{ border: `1px dashed ${C.inkSoft}` }}>
                <p className="text-center text-[13px] font-bold uppercase tracking-[0.2em]">*** {BIZ.short} ***</p>
                <p className="mt-1 text-center text-[11px] uppercase" style={{ color: C.inkSoft }}>{BIZ.slogan}</p>
                <div className="my-4 border-t border-dashed" style={{ borderColor: C.inkSoft }} />
                <dl className="space-y-3 text-[13px]">
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase" style={{ color: C.inkSoft }}>Dirección</dt>
                    <dd className="text-right font-bold">{BIZ.address}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase" style={{ color: C.inkSoft }}>Comuna</dt>
                    <dd className="text-right font-bold">{BIZ.city}, {BIZ.region}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase" style={{ color: C.inkSoft }}>WhatsApp</dt>
                    <dd className="text-right font-bold">{BIZ.waDisplay}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase" style={{ color: C.inkSoft }}>Teléfono</dt>
                    <dd className="text-right font-bold">{BIZ.phone}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase" style={{ color: C.inkSoft }}>Nota Google</dt>
                    <dd className="text-right font-bold">{BIZ.rating} ★ ({BIZ.reviews} reseñas)</dd>
                  </div>
                </dl>
                <div className="my-4 border-t border-dashed" style={{ borderColor: C.inkSoft }} />
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: C.inkSoft }}>Horario</p>
                <dl className="mt-2 space-y-2 text-[13px]">
                  {HORARIO.map((h) => (
                    <div key={h.d} className="flex justify-between gap-4">
                      <dt>{h.d}</dt>
                      <dd className="text-right font-bold">{h.h}</dd>
                    </div>
                  ))}
                </dl>
                <div className="my-4 border-t border-dashed" style={{ borderColor: C.inkSoft }} />
                {/* código de barras */}
                <div
                  aria-hidden
                  className="mx-auto h-12 w-56"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #1E1B26 0 2px, transparent 2px 5px, #1E1B26 5px 6px, transparent 6px 11px, #1E1B26 11px 14px, transparent 14px 16px)',
                  }}
                />
                <p className="pb-5 pt-2 text-center text-[11px] uppercase" style={{ color: C.inkSoft }}>
                  gracias por su compra · instagram {BIZ.instagram}
                </p>
              </div>
              <Zigzag color="#FFFFFF" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Lo que dicen en la fila ── */}
      <section className="px-5 pb-14">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.24em]" style={{ color: C.fucsia }}>En la fila de la caja</p>
            <h2 className={`${display.className} mt-2 text-[28px] leading-tight sm:text-[34px]`}>Lo que dicen los clientes</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 70}>
                <figure className="h-full rounded-xl bg-white p-5 shadow-sm" style={{ borderLeft: `6px solid ${[C.naranja, C.fucsia, C.azul][i % 3]}` }}>
                  <blockquote className="text-[15px] leading-relaxed">{r.texto}</blockquote>
                  <figcaption className="mt-3 text-[12px] font-bold uppercase tracking-wider" style={{ color: C.inkSoft }}>
                    {r.autor} · reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="px-5 pb-14">
        <div className="mx-auto max-w-5xl">
          <div className="h-2 w-full rounded-full" style={{ backgroundImage: GRAD }} />
          <Reveal>
            <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.24em]" style={{ color: C.azul }}>Cómo llegar</p>
                <h2 className={`${display.className} mt-2 text-[28px] leading-tight sm:text-[34px]`}>{BIZ.address}</h2>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.inkSoft }}>
                  {BIZ.city}, {BIZ.region}. El local está sobre 27 Sur, al llegar a 22 Poniente — el edificio azul con el letrero Prolimp de siempre.
                </p>
                <figure className="mt-5 hidden max-w-[260px] lg:block">
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg shadow-md" style={{ border: `3px solid ${C.ink}` }}>
                    <Image
                      src="/demos/protalca-ex-prolimp-talca/letrero.webp"
                      alt="Letrero Prolimp en la fachada del local de Veintisiete Sur"
                      fill
                      sizes="260px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-1 text-[10px] uppercase tracking-widest`} style={{ color: C.inkSoft }}>
                    El letrero de siempre
                  </figcaption>
                </figure>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md" style={{ border: `4px solid ${C.ink}` }}>
                <LazyMap src={mapSrc} title={`Mapa de ${BIZ.name}`} className="h-[300px] w-full border-0" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-5 pb-8" style={{ backgroundColor: C.ink }}>
        <div className="mx-auto max-w-5xl pt-9">
          <div className="h-1 w-full rounded-full" style={{ backgroundImage: GRAD }} />
          <div className="mt-5 flex items-center gap-3">
            <Image src="/demos/protalca-ex-prolimp-talca/logo.webp" alt="" width={40} height={34} />
            <div>
              <p className={`${display.className} text-[18px] text-white`}>{BIZ.name}</p>
              <p className="text-[12px]" style={{ color: '#C9C4DC' }}>{BIZ.address} · {BIZ.city}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: '#C9C4DC' }}>
            <span>Instagram {BIZ.instagram}</span>
            <span>Facebook {BIZ.facebook}</span>
            <span>WhatsApp {BIZ.waDisplay}</span>
          </div>
          <div className="mt-5 border-t pb-2 pt-4 text-[12px]" style={{ borderColor: '#37334A', color: '#8E89A8' }}>
            Demo de sitio web creada por Sitiazo para {BIZ.name} · Datos y ofertas verificados en Google Maps y su Instagram oficial.
          </div>
        </div>
      </footer>

      <WaFab href={waLink} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
