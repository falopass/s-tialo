import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono',
})

const C = {
  papel: '#F7F4EC',
  tinta: '#1A2436',
  plomo: '#4B5468',
  sello: '#A02828',
  linea: 'rgba(26,36,54,0.25)',
  carta: '#EFEADB',
}

export const metadata: Metadata = demoMetadata({
  slug: 'signo-mas-corredores-de-seguros',
  title: 'Signo Mas Corredores de Seguros — Talca, registro CMF desde 2011',
  description:
    'Corredora de seguros en 1 Oriente 1120, Of. 201, Talca. Registrada en la CMF desde 2011 — seguros generales y de vida. Fono 71 222 6106.',
  image: `${IMG}/edificio.webp`,
})

// Motivo del demo: la página como póliza — carátula, artículos numerados,
// sello "+" de la marca y línea de firma al cierre.

function Sello({ size = 56 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border-2 font-bold select-none"
      style={{
        width: size,
        height: size,
        borderColor: C.sello,
        color: C.sello,
        fontFamily: 'var(--font-display)',
        fontSize: size * 0.55,
        boxShadow: `inset 0 0 0 2px ${C.papel}, inset 0 0 0 3px ${C.sello}`,
      }}
      aria-hidden="true"
    >
      +
    </span>
  )
}

function Articulo({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <article className="border-t pt-8 md:pt-10" style={{ borderColor: C.linea }}>
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span
            className={`${mono.className} shrink-0 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]`}
            style={{ color: C.sello }}
          >
            {n}
          </span>
          <h2
            className="text-2xl md:text-4xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h2>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <div className="mt-4 md:pl-24 text-sm md:text-base leading-relaxed max-w-3xl" style={{ color: C.plomo }}>
          {children}
        </div>
      </Reveal>
    </article>
  )
}

export default function Page() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Carátula ── */}
      <header className="max-w-4xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-12 md:pb-16">
        <Reveal>
          <div
            className="border p-6 md:p-12 text-center"
            style={{ borderColor: C.linea, boxShadow: `inset 0 0 0 5px ${C.papel}, inset 0 0 0 6px ${C.linea}` }}
          >
            <p
              className={`${mono.className} uppercase tracking-[0.3em] text-[10px] md:text-xs`}
              style={{ color: C.plomo }}
            >
              Presentación · documento de muestra
            </p>
            <div className="mt-6 flex justify-center">
              <Sello size={64} />
            </div>
            <h1
              className="mt-6 text-4xl md:text-6xl leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Signo Mas
              <br />
              <span className="text-2xl md:text-4xl">Corredores de Seguros</span>
            </h1>
            <p
              className={`${mono.className} mt-6 text-[11px] md:text-xs tracking-[0.14em] uppercase`}
              style={{ color: C.sello }}
            >
              Registro CMF vigente desde 2011 · seguros generales y de vida
            </p>
            <p className="mt-4 text-sm md:text-base" style={{ color: C.plomo }}>
              {BIZ.address}, {BIZ.city} — a pasos de la Plaza de Armas
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={BIZ.phoneTel}
                className="inline-flex items-center justify-center h-12 px-7 text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.sello }}
              >
                Llamar · {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-7 text-sm md:text-base font-semibold border tap-44"
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </Reveal>
      </header>

      {/* ── Artículos ── */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Articulo n="art. 1°" title="Quién firma">
          <p>
            <strong style={{ color: C.tinta }}>{BIZ.razonSocial}</strong> — RUT {BIZ.rut} — es una
            corredora de seguros inscrita en la Comisión para el Mercado Financiero con el código
            7038, vigente desde el 19 de octubre de 2011. Lleva quince años intermediando seguros
            generales y de vida desde su oficina del centro de Talca.
          </p>
          <ul className="mt-5 grid sm:grid-cols-3 gap-3">
            {[
              ['Desde', '2011'],
              ['Registro', 'CMF 7038 · vigente'],
              ['Ramos', 'generales y de vida'],
            ].map(([k, v]) => (
              <li key={k} className="border p-4" style={{ borderColor: C.linea, backgroundColor: C.carta }}>
                <span
                  className={`${mono.className} block text-[10px] uppercase tracking-[0.18em] mb-1`}
                  style={{ color: C.sello }}
                >
                  {k}
                </span>
                <span className="text-sm md:text-base font-semibold" style={{ color: C.tinta }}>
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </Articulo>

        <Articulo n="art. 2°" title="El trabajo de un corredor">
          <p>
            Un corredor no vende el papel de una sola compañía: compara coberturas entre
            aseguradoras, traduce la letra chica y acompaña al cliente cuando toca usar la
            póliza — en el siniestro, no solo en la firma.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-px" style={{ backgroundColor: C.linea }}>
            {[
              ['01', 'Cotiza', 'Busca opciones en varias compañías para el mismo riesgo.'],
              ['02', 'Compara', 'Coberturas, deducibles y primas lado a lado, en simple.'],
              ['03', 'Acompaña', 'Orientación al momento de declarar y seguir un siniestro.'],
            ].map(([n, t, d]) => (
              <div key={n} className="p-5" style={{ backgroundColor: C.papel }}>
                <span className={`${mono.className} text-[10px] font-bold`} style={{ color: C.sello }}>
                  {n}
                </span>
                <h3 className="mt-1 text-base md:text-lg font-semibold" style={{ color: C.tinta }}>
                  {t}
                </h3>
                <p className="mt-1 text-xs md:text-sm leading-relaxed" style={{ color: C.plomo }}>
                  {d}
                </p>
              </div>
            ))}
          </div>
        </Articulo>

        <Articulo n="art. 3°" title="Dónde se firma">
          <p>
            La oficina 201 está en 1 Oriente 1120, un edificio del centro a media cuadra de la
            Plaza de Armas de Talca — el barrio de las notarías, los bancos y las corredoras.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                src: `${IMG}/edificio.webp`,
                alt: 'Edificios de oficinas de la calle 1 Oriente en Talca, donde está la oficina 201',
                cap: 'Los edificios de 1 Oriente — Street View, marzo 2024.',
              },
              {
                src: `${IMG}/calle.webp`,
                alt: 'Cuadra de la calle 1 Oriente en Talca con bandera chilena y arboleda',
                cap: 'La cuadra del 1120 — Street View, marzo 2024.',
              },
              {
                src: `${IMG}/plaza.webp`,
                alt: 'Plaza de Armas de Talca con arboleda y paraderos, frente a la oficina',
                cap: 'La Plaza de Armas, a media cuadra — Street View, marzo 2024.',
              },
            ].map((g) => (
              <figure key={g.src} className="border p-2" style={{ borderColor: C.linea, backgroundColor: C.carta }}>
                <div className="relative aspect-[4/3]">
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover" />
                </div>
                <figcaption
                  className={`${mono.className} px-1 pt-2 text-[10px] leading-relaxed`}
                  style={{ color: C.plomo }}
                >
                  {g.cap}
                </figcaption>
              </figure>
            ))}
          </div>
          <div
            className="relative mt-6 border-2 border-dashed p-5 md:p-6"
            style={{ borderColor: C.sello }}
          >
            <span
              className={`${mono.className} absolute -top-3 left-4 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] font-bold`}
              style={{ backgroundColor: C.sello, color: '#fff' }}
            >
              Bosquejo
            </span>
            <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.plomo }}>
              La oficina no tiene fotos publicadas. Cuando se active el sitio, aquí van las fotos
              reales del escritorio, la recepción y el equipo — nunca una imagen inventada
              presentada como real.
            </p>
          </div>
        </Articulo>

        <Articulo n="art. 4°" title="El contacto">
          <p>
            Cotizaciones y consultas por teléfono o directamente en la oficina 201, en horario
            de oficina del centro.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
            <div>
              <dl className="space-y-3">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Registro', BIZ.registro],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b pb-2" style={{ borderColor: C.linea }}>
                    <dt
                      className={`${mono.className} w-20 shrink-0 uppercase tracking-[0.14em] text-[10px] pt-1`}
                      style={{ color: C.sello }}
                    >
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-medium" style={{ color: C.tinta }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={BIZ.phoneTel}
                className="mt-6 inline-flex items-center justify-center h-12 px-7 text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.sello }}
              >
                Llamar · {BIZ.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="border overflow-hidden h-[240px] md:h-[280px]" style={{ borderColor: C.linea }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa — Signo Mas Corredores de Seguros, 1 Oriente 1120 Of. 201, Talca"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-2 inline-block text-[11px] underline underline-offset-4 tap-44`}
                style={{ color: C.sello }}
              >
                Abrir en Google Maps ↗
              </a>
            </div>
          </div>
        </Articulo>
      </section>

      {/* ── Línea de firma ── */}
      <footer className="border-t" style={{ borderColor: C.linea }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sello size={36} />
            <div>
              <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                {BIZ.razonSocial}
              </p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.plomo }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] md:text-[11px]`} style={{ color: C.plomo }}>
            {BIZ.registro} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.sello} />
    </main>
  )
}
