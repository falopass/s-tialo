import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SERVICIOS, RUTA_TALCA, WA_LINK, WA_LINK_CABANA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }, { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' }],
})

/**
 * Dirección de arte: «el álbum del verano del km 47». Las fotos reales del
 * camping son un álbum de familia — varias llevan el sello de fecha de la
 * cámara — y la página lo trata así: postales con marco de papel pegadas con
 * cinta, el tablón de servicios del camping y el billete de la ruta desde
 * Talca que el propio camping publicó. Paleta tomada de sus fotos: pino del
 * cerro, turquesa de la piscina, crema de papel de álbum y tierra de Gualleco.
 */
const C = {
  pino: '#18301F',
  pinoDeep: '#0E2114',
  turquesa: '#0E9BB8',
  turquesaDeep: '#0A6C82',
  crema: '#F3ECDA',
  papel: '#FAF5E8',
  tinta: '#221C11',
  tierra: '#A96A1F',
  rojo: '#B3271E',
  muted: 'rgba(34,28,17,0.74)',
  mutedCream: 'rgba(243,236,218,0.82)',
  line: 'rgba(34,28,17,0.2)',
  lineCream: 'rgba(243,236,218,0.24)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'camping-entre-pinos',
  title: 'Camping Entre Pinos — el verano del km 47 en Gualleco',
  description: 'Camping Entre Pinos en Gualleco, Curepto: piscinas, sitios para acampar, quinchos y cabañas entre pinos, a 47 km de Talca por la ruta K-60.',
  image: `${IMG}/piscina.webp`,
})

const NAV_LINKS = [
  { label: 'Las postales', href: '#postales' },
  { label: 'El tablón', href: '#tablon' },
  { label: 'Cómo llegar', href: '#llegar' },
]

function Cinta({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute w-16 h-5 ${className}`}
      style={{
        backgroundColor: 'rgba(243,236,218,0.72)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        borderLeft: '2px dashed rgba(34,28,17,0.15)',
        borderRight: '2px dashed rgba(34,28,17,0.15)',
      }}
    />
  )
}

/** Postal pegada con cinta: foto real + pie a tinta. */
function Postal({ src, alt, pie, rot = 0, className = '' }: { src: string; alt: string; pie: string; rot?: number; className?: string }) {
  return (
    <figure
      className={`relative bg-[#FAF5E8] p-2.5 pb-3 shadow-[0_10px_28px_rgba(14,33,20,0.28)] ${className}`}
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <Cinta className="-top-2.5 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 90vw, 420px" className="object-cover" />
      </div>
      <figcaption className={`${mono.className} text-[11px] md:text-xs pt-2.5 leading-snug`} style={{ color: C.muted }}>
        {pie}
      </figcaption>
    </figure>
  )
}

function Raya({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] flex items-center gap-3`}
      style={{ color: light ? C.turquesa : C.rojo }}
    >
      <span aria-hidden="true" className="inline-block w-8 h-[3px]" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

export default function CampingEntrePinosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <BlitzNav
        name="Entre Pinos"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{
          over: 'dark',
          bar: 'rgba(243,236,218,0.96)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.pino,
          btnInk: C.crema,
        }}
      />

      {/* ── Portada: la piscina entre las parras ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.pinoDeep }}>
        <Image
          src={`${IMG}/piscina.webp`}
          alt="Piscina turquesa de Camping Entre Pinos vista entre las hojas de una parra"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(14,33,20,0.5) 0%, rgba(14,33,20,0.3) 45%, rgba(14,33,20,0.92) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-10 md:pb-14 w-full">
          <Reveal>
            <Raya light>Ruta K-60, km 47 · Gualleco · Curepto</Raya>
            <h1
              className={`${display.className} uppercase leading-[0.95] text-[13.5vw] md:text-[92px] mt-4`}
              style={{ color: C.crema, fontWeight: 900 }}
            >
              El verano<br />
              <span style={{ color: C.turquesa }}>del km 47</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedCream }}>
              {BIZ.name}: piscinas entre pinos, sitios para acampar con quincho y luz, cabañas de
              madera y el pasto de Gualleco. A {BIZ.distTalca} y {BIZ.distCurepto}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-[46px] text-sm font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.turquesa, color: '#06222A' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#postales"
                className="inline-flex items-center justify-center rounded-full px-6 h-[46px] text-sm font-semibold transition-transform active:scale-95"
                style={{ color: C.crema, border: `1px solid ${C.lineCream}`, backgroundColor: 'rgba(14,33,20,0.4)' }}
              >
                Ver las postales
              </a>
            </div>
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.mutedCream }}>
              {BIZ.fbFollowers} seguidores en Facebook · Contacto directo: {BIZ.owner}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de datos ── */}
      <div className="border-b" style={{ backgroundColor: C.pino, borderColor: C.lineCream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2">
          {[
            ['Ubicación', 'Gualleco · Curepto'],
            ['Distancias', '47 km Talca · 24 km Curepto'],
            ['Teléfono', BIZ.phoneDisplay],
            ['Registro', 'SERNATUR N° 5089'],
          ].map(([k, v]) => (
            <p key={k} className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.mutedCream }}>
              {k} <span className="block text-[12px] normal-case tracking-normal font-bold" style={{ color: C.crema }}>{v}</span>
            </p>
          ))}
        </div>
      </div>

      {/* ── Postales del predio ── */}
      <section id="postales" className="px-5 md:px-8 pt-16 md:pt-24 pb-10 max-w-6xl mx-auto w-full">
        <Reveal>
          <Raya>El álbum del predio</Raya>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl mt-3 leading-[0.98]`} style={{ color: C.pino, fontWeight: 900 }}>
            Postales del verano<br />que se repite
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: C.muted }}>
            Las fotos son de su propia página: el predio visto desde el cerro, la carpa bajo el
            árbol grande, las mesas de tronco y el pasto donde se tienden las toallas. Así se ve
            un fin de semana en Entre Pinos.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 pb-4">
          <Reveal><Postal src={`${IMG}/predio.webp`} alt="Vista aérea de Camping Entre Pinos: piscina, pradera y cerro de pinos" pie="El predio desde el cerro: la piscina, la pradera y el pinar." rot={-1.6} /></Reveal>
          <Reveal><Postal src={`${IMG}/carpa.webp`} alt="Carpa azul y quincho de madera bajo un árbol frondoso del camping" pie="La carpa bajo el árbol grande, con el quincho al lado." rot={1.4} className="mt-6 lg:mt-10" /></Reveal>
          <Reveal><Postal src={`${IMG}/mesas.webp`} alt="Mesas rústicas de tronco entre los árboles del sector de quinchos" pie="Las mesas de tronco del sector de quinchos." rot={-1.2} /></Reveal>
          <Reveal><Postal src={`${IMG}/pasto.webp`} alt="Familias descansando en el pasto junto a la piscina del camping" pie="Tarde de piscina y pasto, como todas las de enero." rot={1.8} className="mt-6 lg:mt-10" /></Reveal>
        </div>
      </section>

      {/* ── El tablón de servicios ── */}
      <section id="tablon" className="px-5 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.pinoDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya light>El tablón del camping</Raya>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl mt-3 leading-[0.98]`} style={{ color: C.crema, fontWeight: 900 }}>
              Lo que hay<br />dentro del alambrado
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.item}>
                <article className="h-full rounded-sm border px-5 py-5" style={{ borderColor: C.lineCream, backgroundColor: 'rgba(243,236,218,0.05)' }}>
                  <svg aria-hidden="true" viewBox="0 0 24 28" className="w-5 h-6" fill={C.turquesa}>
                    <path d="M12 0l8 11h-4l6 9H2l6-9H4L12 0zm-1 21h2v7h-2v-7z" opacity={i % 2 ? 0.75 : 1} />
                  </svg>
                  <h3 className={`${display.className} uppercase text-xl mt-2 tracking-wide`} style={{ color: C.turquesa, fontWeight: 700 }}>{s.item}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.mutedCream }}>{s.detalle}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className={`${mono.className} mt-8 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.mutedCream }}>
              Servicios publicados por el camping en campingchile.cl · Tarifa del día: consulta por WhatsApp
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cabaña ── */}
      <section className="px-5 md:px-8 py-16 md:py-24 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <figure className="relative bg-[#FAF5E8] p-2.5 pb-3 shadow-[0_10px_28px_rgba(14,33,20,0.28)]" style={{ transform: 'rotate(1.2deg)' }}>
              <Cinta className="-top-2.5 left-8 rotate-[-6deg]" />
              <div className="relative aspect-[4/5] sm:aspect-[5/4] overflow-hidden">
                <Image
                  src={`${IMG}/cabana.webp`}
                  alt="Cabaña rústica de tablas de madera con ventanas y puerta en diagonal, rodeada de plantas"
                  fill
                  sizes="(max-width: 768px) 90vw, 460px"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} text-[11px] pt-2.5`} style={{ color: C.muted }}>
                Una de las cabañas de madera, del propio Facebook del camping.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal>
            <Raya>Si no traes carpa</Raya>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl mt-3 leading-[0.98]`} style={{ color: C.pino, fontWeight: 900 }}>
              Cabañas de madera<br />entre los pinos
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Además de los sitios para acampar hay cabañas dentro del predio, rodeadas de bosque.
              Para grupos, los quinchos grandes se reservan con tiempo — los mismos que usan cursos
              completos en verano.
            </p>
            <a
              href={WA_LINK_CABANA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 h-[46px] text-sm font-bold transition-transform active:scale-95"
              style={{ backgroundColor: C.pino, color: C.crema }}
            >
              Consultar por cabañas y quincho
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar: el billete de la ruta ── */}
      <section id="llegar" className="px-5 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Raya>Cómo llegar</Raya>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl mt-3 leading-[0.98]`} style={{ color: C.pino, fontWeight: 900 }}>
              El camino<br />de siempre
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Desde Talca son {BIZ.distTalca}: el propio camping publica el recorrido — Alameda,
              Cerro al Virgen, Pencahue, Batuco y Gualleco hasta el km 47 de la K-60.
            </p>
            <ol className="mt-7 border-l-2 border-dashed pl-5 space-y-3" style={{ borderColor: C.tierra }}>
              {RUTA_TALCA.map((p, i) => (
                <li key={p} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2"
                    style={{ backgroundColor: i === 0 || i === RUTA_TALCA.length - 1 ? C.rojo : C.papel, borderColor: C.rojo }}
                  />
                  <span className={`${i === RUTA_TALCA.length - 1 ? `${display.className} uppercase text-lg` : 'text-sm font-semibold'}`} style={{ color: i === RUTA_TALCA.length - 1 ? C.rojo : C.tinta, fontWeight: i === RUTA_TALCA.length - 1 ? 700 : 600 }}>
                    {p}
                  </span>
                </li>
              ))}
            </ol>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-full px-6 h-[46px] text-sm font-bold transition-transform active:scale-95"
              style={{ backgroundColor: C.rojo, color: C.crema }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
          <Reveal>
            <div className="rounded-sm overflow-hidden border shadow-[0_10px_28px_rgba(14,33,20,0.2)]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[320px] md:h-[420px] block"
              />
            </div>
            <p className={`${mono.className} mt-3 text-[11px]`} style={{ color: C.muted }}>
              {BIZ.address} · comuna de {BIZ.city}, {BIZ.region}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto + footer ── */}
      <footer className="px-5 md:px-8 pt-12 pb-8" style={{ backgroundColor: C.pinoDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} uppercase text-3xl md:text-4xl leading-[0.98]`} style={{ color: C.crema, fontWeight: 900 }}>
              Reserva tu sitio<br />con {BIZ.owner.split(' ')[0]}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 h-[46px] text-sm font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.turquesa, color: '#06222A' }}
              >
                WhatsApp {BIZ.phoneDisplay}
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center rounded-full px-6 h-[46px] text-sm font-semibold transition-transform active:scale-95"
                style={{ color: C.crema, border: `1px solid ${C.lineCream}` }}
              >
                Llamar
              </a>
            </div>
          </Reveal>
          <div className="mt-8 pt-5 border-t flex flex-wrap items-center justify-between gap-x-6 gap-y-2" style={{ borderColor: C.lineCream }}>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.mutedCream }}>
              {BIZ.name} · {BIZ.address} · {BIZ.city}
            </p>
            <div className={`${mono.className} text-[10px] uppercase tracking-[0.16em] flex gap-4`}>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" style={{ color: C.mutedCream }}>Facebook</a>
              <a href={`mailto:${BIZ.email}`} style={{ color: C.mutedCream }}>Correo</a>
            </div>
          </div>
          <p className={`${mono.className} mt-3 text-[10px]`} style={{ color: 'rgba(243,236,218,0.5)' }}>
            {BIZ.sernatur} · {BIZ.fbFollowers} seguidores en Facebook · Demo de Sitiazo — tu sitio así, desde $79.990.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escríbele a ${BIZ.short} por WhatsApp`} />
    </div>
  )
}
