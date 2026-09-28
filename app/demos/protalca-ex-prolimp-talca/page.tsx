import Image from 'next/image'
import localFont from 'next/font/local'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_TEXT, HORARIO, OFERTAS, PASILLOS, RESENAS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

export const metadata = demoMetadata({
  slug: BIZ.slug,
  title: `${BIZ.name} — Aseo, hogar y abarrotes en 27 Sur, Talca`,
  description:
    'Comercializadora en Veintisiete Sur, Talca: limpieza, cuidado personal, bebidas y abarrotes con ofertas de la semana. Todo en un mismo lugar, pero más barato.',
})

// Identidad de folleto de ofertas: papel, rojo folleto, amarillo precio, azul bandera.
const C = {
  papel: '#FFFDF6',
  papelAlt: '#FFF3D6',
  tinta: '#1B140F',
  rojo: '#C41E12',
  amarillo: '#FFD23F',
  azul: '#1B49A8',
  gris: '#5A5148',
  linea: '#E7DFC9',
}

function Star({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  )
}

export default function Page() {
  const waLink = `https://wa.me/${BIZ.wa}?text=${WA_TEXT}`
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(BIZ.mapQuery)}&z=16&output=embed`

  return (
    <main className={`${body.className} min-h-screen text-[18px]`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      {/* Cinta superior estilo folleto */}
      <div className="fixed inset-x-0 top-0 z-50 flex h-7 items-center justify-center text-[13px] font-bold tracking-[0.18em] text-white" style={{ backgroundColor: C.rojo }}>
        OFERTAS DE LA SEMANA · SOLO EN 27 SUR, TALCA
      </div>

      <div className="pt-7">
        <BlitzNav
          name={<span className={`${display.className} text-xl tracking-wide`}>PROTALCA</span>}
          links={[
            { label: 'Ofertas', href: '#ofertas' },
            { label: 'La tienda', href: '#tienda' },
            { label: 'Reseñas', href: '#resenas' },
            { label: 'Horario', href: '#horario' },
          ]}
          waLink={waLink}
          theme={{ over: 'light', bar: 'rgba(255,253,246,0.94)', ink: C.tinta, line: C.linea, btnBg: C.azul, btnInk: '#fff' }}
          ctaLabel="Consultar"
          logoSrc="/demos/protalca-ex-prolimp-talca/logo.webp"
        />

        {/* ── Hero ── */}
        <header id="inicio" className="relative overflow-hidden px-5 pb-12 pt-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: `repeating-linear-gradient(-45deg, ${C.tinta} 0 2px, transparent 2px 14px)` }}
          />
          <div className="relative mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <Image src="/demos/protalca-ex-prolimp-talca/logo.webp" alt={`Logo de ${BIZ.short}`} width={64} height={64} priority />
              <span className="rounded-sm px-2 py-0.5 text-[13px] font-bold uppercase tracking-widest text-white" style={{ backgroundColor: C.tinta }}>
                ex Prolimp
              </span>
            </div>
            <h1 className={`${display.className} mt-4 text-[46px] leading-[0.98]`}>
              Todo en un mismo lugar,
              <br />
              <span style={{ color: C.rojo }}>pero más barato</span>
            </h1>
            <p className="mt-4 max-w-md text-[19px] leading-snug" style={{ color: C.gris }}>
              Limpieza, cuidado personal, bebidas y abarrotes en {BIZ.address}, {BIZ.city}. Sin sucursales: un solo local, precio bajo de verdad.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] items-center gap-2 rounded-md px-6 text-[17px] font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: C.azul }}
              >
                Consultar por WhatsApp
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-md border-2 px-3 py-2 text-[15px] font-bold" style={{ borderColor: C.tinta, color: C.tinta }}>
                <Star className="h-4 w-4" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
            </div>

            <Reveal delay={80}>
              <div className="relative mt-9 overflow-hidden rounded-xl shadow-lg" style={{ border: `3px solid ${C.tinta}` }}>
                <Image
                  src="/demos/protalca-ex-prolimp-talca/fachada.webp"
                  alt="Fachada de Protalca en Veintisiete Sur con letreros de ofertas y horario"
                  width={960}
                  height={640}
                  className="h-auto w-full"
                  priority
                />
                <span
                  className={`${display.className} absolute right-3 top-3 rotate-3 rounded-full px-4 py-2 text-[15px] text-white shadow-md`}
                  style={{ backgroundColor: C.rojo }}
                >
                  ¡Abiertos!
                </span>
              </div>
            </Reveal>
          </div>
        </header>

        {/* ── El folleto ── */}
        <section id="ofertas" className="px-5 py-14" style={{ backgroundColor: C.papelAlt }}>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-[14px] font-bold uppercase tracking-[0.22em]" style={{ color: C.rojo }}>El folleto</p>
              <h2 className={`${display.className} mt-1 text-[36px] leading-none`}>Ofertas publicadas por ellos</h2>
              <p className="mt-2 max-w-lg text-[17px] leading-snug" style={{ color: C.gris }}>
                Afiches reales de su Instagram {BIZ.instagram}. El stock y la vigencia se confirman por WhatsApp.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {OFERTAS.map((o, i) => (
                <Reveal key={o.producto} delay={i * 60}>
                  <article className="relative h-full overflow-hidden rounded-lg bg-white shadow-md" style={{ border: `2px solid ${C.tinta}` }}>
                    <Image src={o.img} alt={o.alt} width={420} height={420} className="aspect-square w-full object-cover" />
                    <div className="p-3">
                      <h3 className={`${display.className} text-[17px] leading-tight`}>{o.producto}</h3>
                      {o.precio ? (
                        <p className={`${display.className} mt-1 inline-block -rotate-2 rounded-sm px-2 py-0.5 text-[22px]`} style={{ backgroundColor: C.amarillo, color: C.tinta }}>
                          {o.precio}
                        </p>
                      ) : (
                        <p className="mt-1 text-[14px] font-bold uppercase tracking-wide" style={{ color: C.rojo }}>
                          Precio por WhatsApp
                        </p>
                      )}
                      <p className="mt-1 text-[13px] leading-tight" style={{ color: C.gris }}>{o.nota}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── La tienda ── */}
        <section id="tienda" className="px-5 py-14">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-[14px] font-bold uppercase tracking-[0.22em]" style={{ color: C.azul }}>Los pasillos</p>
              <h2 className={`${display.className} mt-1 text-[36px] leading-none`}>De todo para la casa</h2>
            </Reveal>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {PASILLOS.map((p) => (
                <Reveal key={p}>
                  <span className="inline-block rounded-md border-2 border-dashed px-4 py-2 text-[16px] font-bold" style={{ borderColor: C.azul, color: C.azul }}>
                    {p}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={80}>
              <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:items-center">
                <div className="overflow-hidden rounded-lg shadow-md" style={{ border: `2px solid ${C.tinta}` }}>
                  {/* El archivo es una captura de video de su IG: se recorta la parte
                      inferior para mostrar al equipo junto a la bandera chilena. */}
                  <div className="h-[280px] w-full overflow-hidden">
                    <Image
                      src="/demos/protalca-ex-prolimp-talca/equipo.webp"
                      alt="Equipo de Protalca dentro de la tienda junto a productos de papel"
                      width={480}
                      height={640}
                      className="h-[640px] w-full object-cover object-top"
                    />
                  </div>
                </div>
                <div>
                  <h3 className={`${display.className} text-[28px] leading-tight`}>Atendidos por su propio equipo</h3>
                  <p className="mt-3 text-[17px] leading-snug" style={{ color: C.gris }}>
                    Detrás del mesón están las mismas personas que publican las ofertas y responden el WhatsApp. Si algo no está, lo piden por encargo.
                  </p>
                  <ul className="mt-4 space-y-2 text-[16px]">
                    {['Un solo local: no tienen sucursal', 'Ofertas nuevas cada semana en su Instagram', 'Consultas y encargos por WhatsApp'].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: C.amarillo }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Reseñas ── */}
        <section id="resenas" className="px-5 py-14" style={{ backgroundColor: C.azul }}>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-[14px] font-bold uppercase tracking-[0.22em]" style={{ color: C.amarillo }}>Los que ya compran</p>
              <h2 className={`${display.className} mt-1 text-[36px] leading-none text-white`}>{BIZ.rating} de 5 en Google</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {RESENAS.map((r, i) => (
                <Reveal key={r.autor} delay={i * 80}>
                  <figure className="h-full rounded-lg bg-white p-5 shadow-md">
                    <div className="flex gap-0.5" style={{ color: C.amarillo }}>
                      {[...Array(5)].map((_, s) => <Star key={s} />)}
                    </div>
                    <blockquote className="mt-3 text-[16px] leading-snug">{r.texto}</blockquote>
                    <figcaption className="mt-3 text-[14px] font-bold uppercase tracking-wide" style={{ color: C.rojo }}>{r.autor} · Google</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Horario + mapa ── */}
        <section id="horario" className="px-5 py-14">
          <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 className={`${display.className} text-[32px] leading-none`}>Horario de atención</h2>
              <div className="mt-5 divide-y rounded-lg bg-white shadow-sm" style={{ border: `2px solid ${C.tinta}` }}>
                {HORARIO.map((h) => (
                  <div key={h.d} className="flex items-center justify-between px-4 py-3" style={{ borderColor: C.linea }}>
                    <span className="text-[16px] font-bold">{h.d}</span>
                    <span className={`text-[15px] ${h.h === 'Cerrado' ? 'font-bold' : ''}`} style={{ color: h.h === 'Cerrado' ? C.rojo : C.gris }}>
                      {h.h}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[15px]" style={{ color: C.gris }}>
                {BIZ.address} · Tel. {BIZ.phone} · WhatsApp {BIZ.waDisplay}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-lg shadow-md" style={{ border: `2px solid ${C.tinta}` }}>
                <LazyMap src={mapSrc} title={`Mapa de ${BIZ.name}`} className="h-[280px] w-full border-0" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="px-5 pb-7" style={{ backgroundColor: C.tinta }}>
          <div className="mx-auto max-w-5xl pt-8">
            <p className={`${display.className} text-[20px] text-white`}>PROTALCA</p>
            <p className="mt-1 text-[14px]" style={{ color: '#CBBFAE' }}>{BIZ.address}, {BIZ.city}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px]" style={{ color: '#CBBFAE' }}>
              <span>Instagram {BIZ.instagram}</span>
              <span>Facebook {BIZ.facebook}</span>
              <span>WhatsApp {BIZ.waDisplay}</span>
            </div>
            <div className="mt-5 border-t pb-1 pt-4 text-[12px]" style={{ borderColor: '#4A4139', color: '#9A8E7D' }}>
              Demo de sitio web creada por Sitiazo para {BIZ.name} · Datos verificados en Google Maps e Instagram oficial.
            </div>
          </div>
        </footer>

        <WaFab href={waLink} label={`Escribir a ${BIZ.short} por WhatsApp`} />
      </div>
    </main>
  )
}
