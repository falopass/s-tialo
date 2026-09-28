import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, HORARIO, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  papel: '#F0EADB',
  papel2: '#E7DFCB',
  tinta: '#262019',
  plano: '#2A4A80',
  oxido: '#A8551D',
  muted: 'rgba(38,32,25,0.72)',
  line: 'rgba(38,32,25,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'muebles-a-tu-estilo',
  title: 'muebles a tu estilo — Fábrica de muebles en Molina',
  description: 'Fábrica de muebles en Teniente Berguño 1369, Molina. Encargos a medida conversados directo con el taller: traes la foto y las medidas, ellos lo fabrican.',
  image: `${IMG}/consola.webp`,
})

const NAV_LINKS = [
  { label: 'La pieza', href: '#pieza' },
  { label: 'Cómo encargar', href: '#encargo' },
  { label: 'Bosquejos', href: '#bosquejos' },
  { label: 'Visítanos', href: '#visita' },
]

const PASOS = [
  {
    t: 'Trae la referencia',
    d: 'Una foto del mueble que viste, un dibujo a mano o la idea nomás. Alcanza para partir.',
  },
  {
    t: 'Las medidas del espacio',
    d: 'Ancho, alto y fondo del rincón donde va a vivir el mueble. Con eso se arma el plano.',
  },
  {
    t: 'Cotización directa',
    d: 'El taller te responde por WhatsApp con precio y plazo. Sin intermediarios.',
  },
  {
    t: 'Fabricación y entrega',
    d: 'Se corta, se ensambla y se revisa en el taller de Teniente Berguño antes de salir.',
  },
]

function MonoLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.28em] flex items-center gap-3`}
      style={{ color: light ? 'rgba(240,234,219,0.85)' : C.plano }}
    >
      <span aria-hidden="true" className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

/** Cota tipo plano: línea con ganchos + etiqueta mono. */
function Cota({ label, className, horizontal = true }: { label: string; className: string; horizontal?: boolean }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      {horizontal ? (
        <div className="relative w-full">
          <div className="h-px w-full" style={{ backgroundColor: C.plano }} />
          <div className="absolute -top-[5px] left-0 w-px h-[11px]" style={{ backgroundColor: C.plano }} />
          <div className="absolute -top-[5px] right-0 w-px h-[11px]" style={{ backgroundColor: C.plano }} />
          <span
            className={`${mono.className} absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.18em] px-1.5 py-0.5`}
            style={{ backgroundColor: C.papel, color: C.plano }}
          >
            {label}
          </span>
        </div>
      ) : (
        <div className="relative h-full">
          <div className="w-px h-full" style={{ backgroundColor: C.plano }} />
          <div className="absolute -left-[5px] top-0 h-px w-[11px]" style={{ backgroundColor: C.plano }} />
          <div className="absolute -left-[5px] bottom-0 h-px w-[11px]" style={{ backgroundColor: C.plano }} />
          <span
            className={`${mono.className} absolute top-1/2 left-2 -translate-y-1/2 text-[10px] font-bold tracking-[0.18em] px-1.5 py-0.5 [writing-mode:vertical-rl]`}
            style={{ backgroundColor: C.papel, color: C.plano }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A4A80]'

export default function MueblesATuEstiloPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${mono.className} font-bold uppercase tracking-[0.08em]`}
        theme={{
          over: 'light',
          bar: 'rgba(240,234,219,0.96)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.plano,
          btnInk: '#F0EADB',
        }}
      />

      {/* ── Portada: la hoja de plano ── */}
      <section id="inicio" className="relative border-b" style={{ borderColor: C.line }}>
        {/* líneas de calce del plano */}
        <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto" aria-hidden="true">
          <span className="absolute inset-y-0 left-5 md:left-8 border-l border-dashed" style={{ borderColor: 'rgba(42,74,128,0.25)' }} />
          <span className="absolute inset-y-0 right-5 md:right-8 border-l border-dashed" style={{ borderColor: 'rgba(42,74,128,0.25)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-14">
          <div className={`${mono.className} flex flex-wrap justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.24em] mb-8 md:mb-10`} style={{ color: C.plano }}>
            <span>Plano N° 001 — fábrica de muebles</span>
            <span className="hidden sm:inline">{BIZ.address} · {BIZ.city}</span>
            <span>Escala: a tu medida</span>
          </div>

          <Reveal>
            <h1
              className={`${display.className} uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(2.8rem,11vw,7.4rem)] mb-8`}
            >
              Se mide.<br />
              Se corta.<br />
              <span style={{ color: C.plano }}>Se entrega.</span>
            </h1>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-8 items-end">
            <Reveal className="md:col-span-5" delay={80}>
              <p className="text-base md:text-lg leading-relaxed mb-7 max-w-md" style={{ color: C.muted }}>
                Fábrica de muebles en {BIZ.city}: traes la foto de lo que
                quieres y las medidas de tu espacio, y el taller lo fabrica.
                Conversas directo con quien lo hace.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                  style={{ backgroundColor: C.plano, color: '#F0EADB' }}
                >
                  Cotizar por WhatsApp <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#pieza"
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Ver una pieza real <span aria-hidden="true">↓</span>
                </a>
              </div>
            </Reveal>

            {/* FIG.01 — el local, foto real de su ficha */}
            <Reveal className="md:col-span-7" delay={140}>
              <figure className="relative">
                <span aria-hidden="true" className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: C.oxido }} />
                <span aria-hidden="true" className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: C.oxido }} />
                <span aria-hidden="true" className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: C.oxido }} />
                <span aria-hidden="true" className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: C.oxido }} />
                <div className="relative aspect-[2/1] overflow-hidden" style={{ backgroundColor: C.tinta }}>
                  <Image
                    src={`${IMG}/galpon.webp`}
                    alt="Pasillo techado del local de muebles a tu estilo en Teniente Berguño 1369, Molina"
                    fill
                    priority
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 flex justify-between gap-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.plano }}>
                  <span>Fig. 01 — el local, {BIZ.address}</span>
                  <span>Foto real de su ficha</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Ficha técnica */}
        <dl className="relative border-t grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto" style={{ borderColor: C.line }}>
          {[
            ['Rubro', BIZ.rubro],
            ['Comuna', `${BIZ.city}, Maule`],
            ['Taller', BIZ.address],
            ['WhatsApp', BIZ.phoneDisplay],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`px-5 md:px-8 py-4 ${i % 2 === 1 ? 'border-l' : ''} ${i === 2 ? 'md:border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
              style={{ borderColor: C.line }}
            >
              <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-1`} style={{ color: C.plano }}>{k}</dt>
              <dd className="text-sm font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── La pieza: consola real con cotas ── */}
      <section id="pieza" className="scroll-mt-20 border-b" style={{ backgroundColor: C.papel2, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-10 items-center">
          <Reveal className="md:col-span-5 order-2 md:order-1">
            <MonoLabel>Fig. 02 — pieza real del taller</MonoLabel>
            <h2 className={`${display.className} uppercase text-4xl md:text-[3.4rem] leading-[0.95] mt-5 mb-6`}>
              Esto salió<br />del taller.
            </h2>
            <p className="text-[15px] md:text-base leading-relaxed mb-5 max-w-sm" style={{ color: C.muted }}>
              Consola de madera con talla clásica, fotografiada en el patio del
              taller antes de la entrega. Cada encargo parte así: una pieza
              concreta, hecha para un lugar concreto.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Muebles a medida, racks, comedores y trabajos con talla — se
              conversan por WhatsApp con una foto y las medidas.
            </p>
          </Reveal>
          <Reveal className="md:col-span-7 order-1 md:order-2" delay={100}>
            <figure className="relative px-2 pt-8 md:px-10 md:pt-10">
              <Cota label="A TU ANCHO" className="top-0 left-[8%] right-[8%]" />
              <Cota label="A TU ALTO" horizontal={false} className="top-[14%] bottom-[10%] left-0 hidden md:block" />
              <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.tinta, backgroundColor: C.tinta }}>
                <Image
                  src={`${IMG}/consola.webp`}
                  alt="Consola de madera tallada fabricada por muebles a tu estilo, sobre el cemento del taller"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 flex justify-between gap-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.plano }}>
                <span>Consola con talla — encargo terminado</span>
                <span>Foto real</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo encargar ── */}
      <section id="encargo" className="scroll-mt-20 border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <MonoLabel>Procedimiento</MonoLabel>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,6vw,4.2rem)] leading-[0.95] mt-5 mb-12 md:mb-16 max-w-4xl`}>
              Un encargo en cuatro pasos.
            </h2>
          </Reveal>
          <ol className="grid md:grid-cols-4 border-t" style={{ borderColor: C.line }}>
            {PASOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="md:border-l first:border-l-0 border-b md:border-b-0" >
                <li className="py-8 md:py-10 md:px-6 md:first:pl-0 flex flex-col h-full" style={{ borderColor: C.line }}>
                  <span
                    className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.24em] mb-6 flex items-center gap-3`}
                    style={{ color: C.oxido }}
                  >
                    <span aria-hidden="true" className="inline-flex w-8 h-8 border rounded-full items-center justify-center" style={{ borderColor: C.oxido }}>
                      {i + 1}
                    </span>
                    Paso
                  </span>
                  <h3 className={`${display.className} uppercase text-xl md:text-2xl leading-tight mb-3`}>{p.t}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.muted }}>{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 inline-flex items-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
              style={{ backgroundColor: C.tinta, color: C.papel }}
            >
              Empezar el paso 1 por WhatsApp <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Bosquejos: renders marcados, no fotos ── */}
      <section id="bosquejos" className="scroll-mt-20 border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <MonoLabel>Bosquejos de referencia</MonoLabel>
            <h2 className={`${display.className} uppercase text-[clamp(1.8rem,5vw,3.4rem)] leading-[0.95] mt-5 mb-4 max-w-3xl`}>
              Ideas de encargo, a lápiz.
            </h2>
            <p className="text-[15px] leading-relaxed mb-10 max-w-xl" style={{ color: C.muted }}>
              Estas imágenes son <strong>bosquejos</strong> generados para el
              mockup — muestran el tipo de encargo que se puede conversar, no
              son piezas entregadas.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {[
              { src: `${IMG}/bosquejo-cepillo.webp`, alt: 'Bosquejo: cepillo de carpintero sobre un tablón con virutas', fig: 'Fig. A — trabajo de banco' },
              { src: `${IMG}/bosquejo-comedor.webp`, alt: 'Bosquejo: comedor de madera con sillas y aparador', fig: 'Fig. B — comedor a medida' },
            ].map((b) => (
              <Reveal key={b.src}>
                <figure className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden border border-dashed" style={{ borderColor: C.plano, backgroundColor: C.papel2 }}>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover opacity-90 saturate-[0.85]"
                    />
                    <span
                      className={`${mono.className} absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.24em] px-2.5 py-1`}
                      style={{ backgroundColor: C.oxido, color: '#F0EADB' }}
                    >
                      Bosquejo
                    </span>
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.plano }}>
                    {b.fig}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visita: horario real + mapa ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="md:col-span-5">
            <MonoLabel light>El taller, en persona</MonoLabel>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,5.5vw,3.8rem)] leading-[0.95] mt-5 mb-6`}>
              Pasa a conversar el mueble.
            </h2>
            <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: 'rgba(240,234,219,0.85)' }}>
              El taller atiende en {BIZ.address}, {BIZ.city} — incluso los
              domingos por la mañana. Si prefieres, la cotización parte por
              WhatsApp.
            </p>
            <table className="w-full text-left border-t" style={{ borderColor: 'rgba(240,234,219,0.3)' }}>
              <tbody>
                {HORARIO.map((h) => (
                  <tr key={h.d} className="border-b" style={{ borderColor: 'rgba(240,234,219,0.3)' }}>
                    <th scope="row" className="py-2.5 pr-4 text-sm font-semibold">{h.d}</th>
                    <td className={`${mono.className} py-2.5 text-right text-sm tabular-nums`} style={{ color: 'rgba(240,234,219,0.85)' }}>{h.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(240,234,219,0.6)' }}>
              Horario publicado en su ficha de Google
            </p>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <dl className="border-t mb-6" style={{ borderColor: 'rgba(240,234,219,0.3)' }}>
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.postal} ${BIZ.city}`],
                ['Región', BIZ.region],
                ['WhatsApp', BIZ.phoneDisplay],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] py-3 border-b" style={{ borderColor: 'rgba(240,234,219,0.3)' }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] pt-1`} style={{ color: 'rgba(240,234,219,0.65)' }}>{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: 'rgba(240,234,219,0.3)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0 grayscale-[35%]"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0EADB] tap-44`}
                style={{ backgroundColor: C.papel, color: C.tinta }}
              >
                Escribir por WhatsApp <span aria-hidden="true">→</span>
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0EADB] tap-44`}
                style={{ borderColor: 'rgba(240,234,219,0.5)', color: C.papel }}
              >
                Cómo llegar <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.tinta, color: 'rgba(240,234,219,0.8)' }} className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 gap-5 items-end">
          <div>
            <p className={`${mono.className} font-bold uppercase tracking-[0.14em] text-sm`} style={{ color: C.papel }}>{BIZ.name}</p>
            <p className="text-xs mt-1.5">{BIZ.rubro} · {BIZ.address}, {BIZ.city}</p>
          </div>
          <div className="text-right text-xs leading-relaxed">
            <p>{BIZ.phoneDisplay}</p>
            <p style={{ color: 'rgba(240,234,219,0.55)' }}>Demo de Sitiazo — datos verificados en Google Maps</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
