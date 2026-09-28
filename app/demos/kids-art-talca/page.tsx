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

const CONFETTI: { c: string; top: string; left: string; s: number; r: string }[] = [
  { c: C.rosa, top: '12%', left: '6%', s: 10, r: '18deg' },
  { c: C.celeste, top: '9%', left: '88%', s: 8, r: '-22deg' },
  { c: C.sol, top: '20%', left: '92%', s: 12, r: '40deg' },
  { c: C.verde, top: '34%', left: '3%', s: 7, r: '-12deg' },
  { c: C.morado, top: '8%', left: '52%', s: 9, r: '33deg' },
  { c: C.rosa, top: '46%', left: '96%', s: 7, r: '10deg' },
  { c: C.celeste, top: '58%', left: '5%', s: 11, r: '-35deg' },
]

function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {CONFETTI.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-[3px]"
          style={{ backgroundColor: p.c, top: p.top, left: p.left, width: p.s, height: p.s * 0.62, transform: `rotate(${p.r})`, opacity: 0.85 }}
        />
      ))}
    </div>
  )
}

export default function Page() {
  const waLink = `https://wa.me/${BIZ.wa}?text=${WA_TEXT}`
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(BIZ.mapQuery)}&z=16&output=embed`

  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.base, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} text-lg font-extrabold tracking-tight`}>{BIZ.short}</span>
        }
        links={[
          { label: 'El local', href: '#local' },
          { label: 'Fotos', href: '#fotos' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={waLink}
        theme={{ over: 'light', bar: 'rgba(255,248,236,0.92)', ink: C.ink, line: C.linea, btnBg: C.rosa, btnInk: '#fff' }}
        ctaLabel="Reservar"
        logoSrc="/demos/kids-art-talca/logo.webp"
      />

      {/* ── Hero: fiesta ── */}
      <header id="inicio" className="relative overflow-hidden pt-24 pb-10 px-5">
        <Confetti />
        <div className="relative max-w-5xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.morado }}>
            {BIZ.rubro} · Villa Edén, {BIZ.city}
          </p>
          <h1 className={`${display.className} mt-3 text-[44px] leading-[1.02] font-extrabold`}>
            El cumpleaños que van a querer
            <span style={{ color: C.rosa }}> repetir</span>
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed" style={{ color: C.inkSoft }}>
            {BIZ.tagline} Con juegos inflables, candy bar, cocina equipada y un jardín que es el escenario perfecto.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[50px] items-center gap-2 rounded-full px-6 text-[15px] font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
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
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill={C.sol} aria-hidden>
              <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
            </svg>
            <span className="text-[13px] font-bold">{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
          </div>

          {/* collage con forma de blob */}
          <div className="relative mt-10 grid grid-cols-5 gap-3">
            <div className="col-span-3 overflow-hidden" style={{ borderRadius: '46% 54% 52% 48% / 42% 44% 56% 58%' }}>
              <Image src="/demos/kids-art-talca/hero.webp" alt="Zona de juegos del local de Kids Art: cama elástica, carrito de dulces y sillas de colores" width={760} height={560} className="h-full w-full object-cover object-[50%_62%]" priority />
            </div>
            <div className="col-span-2 flex flex-col gap-3">
              <div className="flex-1 overflow-hidden" style={{ borderRadius: '52% 48% 44% 56% / 56% 52% 48% 44%' }}>
                <Image src="/demos/kids-art-talca/mesa.webp" alt="Niños haciendo manualidades en la mesa de trabajo de Kids Art" width={420} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 overflow-hidden rounded-3xl">
                <Image src="/demos/kids-art-talca/estrella.webp" alt="Niño pintando una estrella amarilla en un taller de Kids Art" width={420} height={300} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Qué incluye ── */}
      <section id="local" className="px-5 py-14" style={{ backgroundColor: C.baseB }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.celeste }}>El local, completo para ti</p>
            <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>Todo listo, solo traes la fiesta</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUYE.map((it, i) => {
              const tinta = [C.rosa, C.celeste, C.verde, C.morado, C.sol, C.rosa][i % 6]
              return (
                <Reveal key={it.titulo} delay={i * 60}>
                  <div className="h-full rounded-3xl bg-white p-5 shadow-sm" style={{ borderTop: `4px solid ${tinta}` }}>
                    <span className={`${display.className} text-[30px] font-extrabold leading-none`} style={{ color: tinta }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`${display.className} mt-2 text-[18px] font-bold`}>{it.titulo}</h3>
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

      {/* ── Galería ── */}
      <section id="fotos" className="px-5 py-14">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.rosa }}>Fotos reales</p>
            <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>Así se ve por dentro</h2>
            <p className="mt-2 max-w-md text-[15px]" style={{ color: C.inkSoft }}>
              Todas las fotos son del local y de eventos reales publicados en su Instagram {BIZ.instagram}.
            </p>
          </Reveal>
          <div className="mt-8 columns-2 gap-3 sm:columns-3 [column-fill:_balance]">
            {FOTOS.map((f, i) => (
              <div key={f.src} className="mb-3 overflow-hidden rounded-2xl">
                <Image src={f.src} alt={f.alt} width={480} height={[560, 400, 640, 440, 520, 400][i % 6]} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="px-5 py-14" style={{ backgroundColor: C.baseB }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.verde }}>Lo que dicen las familias</p>
            <h2 className={`${display.className} mt-2 text-[32px] font-extrabold leading-tight`}>{BIZ.rating} de 5 en Google</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 80}>
                <figure className="h-full rounded-3xl bg-white p-5 shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill={C.sol} aria-hidden>
                    <path d="M7.2 6C5 7.7 3.8 10 3.8 13.2c0 2.7 1.5 4.3 3.5 4.3 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.3-1.6 1.5-3.2 3-4.2L7.2 6zm9.6 0c-2.2 1.7-3.4 4-3.4 7.2 0 2.7 1.5 4.3 3.5 4.3 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.3-1.6 1.5-3.2 3-4.2L16.8 6z" />
                  </svg>
                  <blockquote className="mt-3 text-[15px] leading-relaxed">{r.texto}</blockquote>
                  <figcaption className="mt-3 text-[13px] font-bold" style={{ color: C.morado }}>{r.autor} · Google</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo reservar ── */}
      <section className="px-5 py-14">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} text-[32px] font-extrabold leading-tight`}>Reservar es fácil</h2>
          </Reveal>
          <ol className="mt-7 space-y-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <li className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <span className={`${display.className} text-[28px] font-extrabold leading-none`} style={{ color: [C.rosa, C.celeste, C.verde][i % 3] }}>{p.n}</span>
                  <div>
                    <h3 className={`${display.className} text-[17px] font-bold`}>{p.t}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.inkSoft }}>{p.d}</p>
                  </div>
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
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="px-5 pb-14">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-sm">
          <LazyMap src={mapSrc} title={`Mapa de ${BIZ.name}`} className="h-[300px] w-full border-0" loading="lazy" />
          <div className="bg-white p-5">
            <p className="text-[15px] font-bold">{BIZ.address}</p>
            <p className="mt-1 text-[14px]" style={{ color: C.inkSoft }}>
              {BIZ.city}, {BIZ.region} · Escríbenos por WhatsApp para consultar horarios de atención.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-5 pb-8" style={{ backgroundColor: C.ink }}>
        <div className="max-w-5xl mx-auto pt-9">
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
          <div className="mt-5 border-t pt-4 pb-2 text-[12px]" style={{ borderColor: '#4A3F6B', color: '#9F93C6' }}>
            Demo de sitio web creada por Sitiazo para {BIZ.name} · Datos verificados en Google Maps y sus redes oficiales.
          </div>
        </div>
      </footer>

      <WaFab href={waLink} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
