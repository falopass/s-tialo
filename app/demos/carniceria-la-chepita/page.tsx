import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waProducto, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Identidad desde el local real: círculo rojo con caballo sobre muro
 * blanco, vitrina roja y eslogan "El equilibrio perfecto entre precio
 * y calidad". Papel de carnicería: crema de envoltorio, rojo del logo
 * y tinta oscura; carteles de precio como los de su vitrina.
 */
const C = {
  cream: '#FAF4E8',
  creamSoft: '#F1E7D3',
  red: '#B02321',
  redDeep: '#8C1A19',
  ink: '#2B1710',
  dark: '#221210',
  muted: '#7A6558',
  line: 'rgba(43,23,16,0.18)',
  lineLight: 'rgba(250,244,232,0.22)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B02321]'
const FOCUS_LIGHT =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FAF4E8]'

export const metadata: Metadata = demoMetadata({
  slug: 'carniceria-la-chepita',
  title: 'Carnicería La Chepita — Carnes en Av. 7 de Abril, Lontué',
  description:
    'Carnicería en Av. 7 de Abril 2086, Lontué: arrollado, churrasco, longanizas y carbón. 4,5 en Google. Pide por WhatsApp y retira en el local.',
  image: `${IMG}/vitrina.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

/**
 * Carteles como los de su vitrina: nombres legibles en la foto real.
 * Solo el arrollado muestra precio porque es el único que se lee.
 */
const VITRINA = [
  { nombre: 'Arrollado', precio: '$3.700 c/u', nota: 'precio real en vitrina' },
  { nombre: 'Churrasco', precio: 'al mostrador', nota: 'para el sartén o el pan' },
  { nombre: 'Lomo laminado', precio: 'al mostrador', nota: 'corte fino, rendidor' },
  { nombre: 'Longanizas', precio: 'al mostrador', nota: 'las que nombran en reseñas' },
  { nombre: 'Lomo liso', precio: 'al mostrador', nota: 'cartel legible en la vitrina' },
  { nombre: 'Filete', precio: 'al mostrador', nota: 'cartel legible en la vitrina' },
  { nombre: 'Lomo vetado', precio: 'al mostrador', nota: 'cartel legible en la vitrina' },
  { nombre: 'Carbón', precio: 'al mostrador', nota: 'para el asado completo' },
]

const RESENAS = [
  {
    text: 'Me encantan sus carnes y el arrollado. Buena atención y siempre limpio, lo recomiendo. También puedes encontrar carbón, churrasco y lomo laminado.',
    author: 'Laureano Rioseco',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Buena atención, bien abastecida, precios moderados.',
    author: 'Gonzalo',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Todo ok, las mejores longanizas de Lontué.',
    author: 'Jose Contreras',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    text: 'Excelente atención, muy buenas carnes.',
    author: 'Guillermo Dueñas',
    meta: 'Reseña de Google · 5 estrellas',
  },
]

const HORARIO = [
  { days: 'Lunes a sábado', time: '9:00 a 20:00' },
  { days: 'Domingo', time: '9:30 a 14:30' },
]

export default function Page() {
  return (
    <main className={body.className} style={{ backgroundColor: C.cream, color: C.ink }}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .ch-hero-img { animation: chzoom 15s cubic-bezier(0.16,1,0.3,1) both; }
          @keyframes chzoom { from { transform: scale(1.06); } to { transform: scale(1); } }
        }
        .ch-card { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .ch-card:hover { transform: translateY(-3px) rotate(-0.4deg); box-shadow: 0 10px 22px rgba(43,23,16,0.16); }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-xl tracking-wide`}>
            La Chepita
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: C.cream,
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FAF4E8',
        }}
        ctaLabel="Hacer pedido"
      />

      {/* ── La vitrina: marca + foto real bajo vidrio ────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
          <img
            src={`${IMG}/logo.webp`}
            alt="Logo de La Chepita: círculo rojo con caballo"
            className="mx-auto h-16 w-16 md:h-20 md:w-20 rounded-full object-cover shadow-md"
          />
          <p
            className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mt-4`}
            style={{ color: C.red }}
          >
            Carnicería · Av. 7 de Abril 2086 · Lontué
          </p>
          <h1 className={`${display.className} mt-3 text-[2.8rem] leading-[0.98] sm:text-6xl md:text-7xl tracking-tight max-w-3xl mx-auto`}>
            La vitrina que Lontué recomienda
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-lg mx-auto" style={{ color: C.muted }}>
            {BIZ.slogan}: así lo pintaron en el muro del local y así lo
            repiten sus clientes.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 font-bold rounded-sm px-6 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 ${FOCUS}`}
              style={{ backgroundColor: C.red, color: '#FAF4E8' }}
            >
              Pide por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <span
              className="inline-flex items-center gap-2 rounded-sm border px-4 py-3 text-sm font-semibold tap-44"
              style={{ borderColor: C.line }}
            >
              <Stars value={4.5} color={C.red} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 md:px-8 mt-8 md:mt-12">
          <figure
            className="relative overflow-hidden aspect-[4/5] sm:aspect-[16/10] border-[10px] shadow-xl"
            style={{ borderColor: C.ink }}
          >
            <Image
              src={`${IMG}/vitrina.webp`}
              alt="Interior de Carnicería La Chepita: vitrina roja con cortes y el logo en el muro"
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover ch-hero-img"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(115deg, rgba(250,244,232,0.16) 0%, rgba(250,244,232,0) 30%)',
              }}
            />
          </figure>
          <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em] text-center`} style={{ color: C.muted }}>
            Foto real del local, publicada en su ficha de Google
          </figcaption>
        </div>
      </section>

      {/* ── Los carteles de la vitrina ───────────────────────────── */}
      <section id="vitrina" className="scroll-mt-20 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
            <h2 className={`${display.className} text-4xl md:text-6xl tracking-tight leading-[0.95]`}>
              Lo que marca <span style={{ color: C.red }}>la vitrina</span>
            </h2>
            <p className="text-sm md:text-base max-w-sm" style={{ color: C.muted }}>
              Carteles legibles en la foto del local y lo que nombran las
              reseñas. Toca uno y consulta precio y stock al WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {VITRINA.map((v, i) => (
              <Reveal key={v.nombre} delay={i * 60}>
                <a
                  href={waProducto(v.nombre.toLowerCase())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ch-card block h-full bg-white border tap-44 ${FOCUS}`}
                  style={{ borderColor: C.line, borderTopColor: C.red, borderTopWidth: '4px' }}
                >
                  <div className="p-4 md:p-5">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                      {v.nota}
                    </p>
                    <p className={`${display.className} text-xl md:text-2xl mt-1.5 leading-tight`}>
                      {v.nombre}
                    </p>
                    <p className="mt-3 font-bold text-base md:text-lg" style={{ color: v.precio.startsWith('$') ? C.red : C.muted }}>
                      {v.precio}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El muro: eslogan real + detalle de cortes ────────────── */}
      <section id="local" className="scroll-mt-20 py-14 md:py-24" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <blockquote className="text-center max-w-3xl mx-auto">
            <p
              className={`${display.className} text-3xl md:text-5xl leading-tight`}
              style={{ color: '#FAF4E8' }}
            >
              “{BIZ.slogan}”
            </p>
            <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(250,244,232,0.6)' }}>
              Pintado en el muro del local
            </footer>
          </blockquote>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <figure className="relative overflow-hidden aspect-[4/3] border" style={{ borderColor: C.lineLight }}>
                <Image
                  src={`${IMG}/muro.webp`}
                  alt="Muro de La Chepita con su logo y fotos de platos de carne"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className={`${mono.className} mt-2.5 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(250,244,232,0.6)' }}>
                El muro con su marca
              </figcaption>
            </Reveal>
            <Reveal delay={90}>
              <figure className="relative overflow-hidden aspect-[4/3] border" style={{ borderColor: C.lineLight }}>
                <Image
                  src={`${IMG}/arrollado.webp`}
                  alt="Arrollados en la vitrina de La Chepita con cartel de $3.700"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className={`${mono.className} mt-2.5 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(250,244,232,0.6)' }}>
                Arrollado a $3.700, cartel real
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ──────────────────────────────────────────────── */}
      <section id="resenas" className="scroll-mt-20 py-14 md:py-24" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-14 mb-10">
            <div className={`${display.className} leading-none`} style={{ color: C.ink }}>
              <span className="block text-6xl md:text-8xl">{BIZ.rating}</span>
              <div className="mt-3">
                <Stars value={4.5} color={C.red} className="w-[18px] h-[18px]" />
              </div>
              <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google
              </p>
            </div>
            <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: C.muted }}>
              Limpio, bien abastecido y a precio moderado: la vitrina de
              barrio que Lontué recomienda por nombre.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <blockquote
                  className="h-full p-5 bg-white border flex flex-col"
                  style={{ borderColor: C.line }}
                >
                  <p className="text-[15px] leading-relaxed flex-1 italic">{r.text}</p>
                  <footer className="mt-4 pt-3 border-t" style={{ borderColor: C.line }}>
                    <p className="font-bold text-sm">{r.author}</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                      {r.meta}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horario, dirección y mapa ────────────────────────────── */}
      <section id="contacto" className="scroll-mt-20 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <h2 className={`${display.className} text-4xl md:text-6xl tracking-tight leading-[0.95] mb-8`}>
              Sobre la <span style={{ color: C.red }}>7 de Abril</span>
            </h2>
            <dl className="space-y-5">
              <div className="flex gap-4 items-baseline border-b pb-4" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: C.muted }}>
                  Dirección
                </dt>
                <dd className="font-semibold">
                  {BIZ.address}, {BIZ.city},{' '}
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-2 ${FOCUS}`} style={{ color: C.redDeep }}>
                    ver en Maps
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 items-baseline border-b pb-4" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: C.muted }}>
                  WhatsApp
                </dt>
                <dd className="font-semibold">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-2 ${FOCUS}`} style={{ color: C.redDeep }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 items-start border-b pb-4" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0`} style={{ color: C.muted }}>
                  Horario
                </dt>
                <dd className="flex-1">
                  <ul className="space-y-1.5">
                    {HORARIO.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4 font-semibold">
                        <span>{h.days}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2.5 font-bold rounded-sm px-6 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 ${FOCUS}`}
              style={{ backgroundColor: C.red, color: '#FAF4E8' }}
            >
              Encarga tu carne por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <Reveal className="min-h-[320px]">
            <div className="h-full min-h-[320px] overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.red }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <p className={`${display.className} text-3xl md:text-5xl leading-tight`} style={{ color: '#FAF4E8' }}>
            Las mejores longanizas de Lontué,
            <br className="hidden sm:block" /> según sus propios clientes
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-flex items-center gap-2.5 font-bold rounded-sm px-7 py-3 text-base transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44 ${FOCUS_LIGHT}`}
            style={{ backgroundColor: '#FAF4E8', color: C.redDeep }}
          >
            Haz tu pedido
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="py-8 pb-24" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full object-cover" aria-hidden="true" />
            <p className={`${display.className} text-lg`} style={{ color: '#FAF4E8' }}>
              {BIZ.name} · {BIZ.city}
            </p>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(250,244,232,0.6)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Datos,
            fotos, reseñas y precios son reales de su ficha pública; los
            textos de apoyo son de muestra. ¿Lo hacemos realidad?
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Hacer pedido por WhatsApp a La Chepita" />
    </main>
  )
}
