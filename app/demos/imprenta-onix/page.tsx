import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  papel: '#F3EDDE',
  tinta: '#1B1712',
  plomo: '#5A5145',
  rubrica: '#9E2B1B',
  linea: 'rgba(27,23,18,0.22)',
  carta: '#EDE4CE',
}

export const metadata: Metadata = demoMetadata({
  slug: 'imprenta-onix',
  title: 'Imprenta Onix — imprenta gráfica en 6 Sur, Talca',
  description:
    'Imprenta gráfica en 6 Sur 2064, Talca. Atención de lunes a viernes — llama al 71 226 3114 para cotizar tu trabajo de imprenta.',
  image: `${IMG}/fachada.webp`,
})

// Motivo del demo: la página como libro impreso — capítulos numerados,
// capitular en rúbrica y colofón de cierre. Nada de barras CMYK ni marcas
// de registro (ese concepto ya lo tiene otro demo de imprenta del sitio).

function Capitulo({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      <p
        className={`${mono.className} uppercase tracking-[0.3em] text-[10px] md:text-xs`}
        style={{ color: C.rubrica }}
      >
        {n}
      </p>
      <h2
        className="mt-3 text-3xl md:text-5xl leading-tight mx-auto max-w-3xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {children}
      </h2>
      <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
        <span className="h-px w-14 md:w-20" style={{ backgroundColor: C.linea }} />
        <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.rubrica }} />
        <span className="h-px w-14 md:w-20" style={{ backgroundColor: C.linea }} />
      </div>
    </div>
  )
}

function Inicial({ children }: { children: string }) {
  return (
    <span
      className="float-left mr-3 mt-1 leading-[0.8] text-[64px] md:text-[80px]"
      style={{ fontFamily: 'var(--font-display)', color: C.rubrica }}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Portada ── */}
      <header className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-10 md:pb-14 text-center">
        <Reveal>
          <p
            className={`${mono.className} uppercase tracking-[0.32em] text-[10px] md:text-xs`}
            style={{ color: C.plomo }}
          >
            {BIZ.rubro} · {BIZ.city} · {BIZ.region}
          </p>
          <h1
            className="mt-6 text-5xl md:text-7xl leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Imprenta
            <br />
            <em style={{ color: C.rubrica }}>Onix</em>
          </h1>
          <p
            className={`${mono.className} mt-6 text-xs md:text-sm tracking-[0.14em]`}
            style={{ color: C.plomo }}
          >
            {BIZ.address}, {BIZ.city} — desde el portón celeste de la cuadra
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BIZ.phoneTel}
              className="inline-flex items-center justify-center h-12 px-7 text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
              style={{ backgroundColor: C.rubrica, borderRadius: '2px' }}
            >
              Llamar · {BIZ.phoneDisplay}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 text-sm md:text-base font-semibold border tap-44"
              style={{ borderColor: C.tinta, color: C.tinta, borderRadius: '2px' }}
            >
              Ver en el mapa
            </a>
          </div>
        </Reveal>
      </header>

      {/* ── Capítulo I: la casa ── */}
      <section className="border-t" style={{ borderColor: C.linea }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Capitulo n="capítulo primero">La casa de la 6 Sur</Capitulo>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto" style={{ color: C.plomo }}>
              <Inicial>E</Inicial>n la vereda poniente de la calle 6 Sur, a la altura del 2064, está
              el local de Onix: un galpón celeste de frente ancho, con su portón de chapa y el mural
              que se ve desde la esquina. Es la imprenta de barrio de la zona sur de Talca — se llega
              caminando desde el centro o por las micros que bajan por la 11 Oriente.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {[
              {
                src: `${IMG}/fachada.webp`,
                alt: 'Fachada del local de la imprenta en la calle 6 Sur de Talca, con el mural del edificio',
                cap: 'El local en 6 Sur 2064 — Google Street View, marzo 2024.',
              },
              {
                src: `${IMG}/calle2.webp`,
                alt: 'Calle 6 Sur de Talca a la altura del local de la imprenta, vereda y galpón celeste',
                cap: 'La cuadra, vista desde el sur — Google Street View, marzo 2024.',
              },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 100}>
                <figure className="border p-2" style={{ borderColor: C.linea, backgroundColor: C.carta }}>
                  <div className="relative aspect-[4/3]">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, 45vw" className="object-cover" />
                  </div>
                  <figcaption
                    className={`${mono.className} px-2 pt-2 pb-1 text-[10px] md:text-[11px] leading-relaxed`}
                    style={{ color: C.plomo }}
                  >
                    {g.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capítulo II: el oficio ── */}
      <section className="border-t" style={{ borderColor: C.linea, backgroundColor: C.carta }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Capitulo n="capítulo segundo">Lo que sale de una imprenta</Capitulo>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: C.plomo }}>
              <Inicial>D</Inicial>e una imprenta de barrio salen los papeles con los que trabaja
              una ciudad: tarjetas de visita, volantes, afiches, formularios, talonarios,
              carpetas, invitaciones y las mil impresiones de todos los días. Este catálogo es
              referencial del oficio —{' '}
              <strong style={{ color: C.tinta }}>la lista real de trabajos la confirma Onix al activar su sitio.</strong>
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: C.linea }}>
            {[
              'Tarjetas de visita',
              'Volantes y flyers',
              'Afiches',
              'Talonarios',
              'Formularios',
              'Carpetas',
              'Invitaciones',
              'Trabajos a medida',
            ].map((s, i) => (
              <Reveal key={s} delay={i * 50}>
                <div
                  className="h-full px-4 py-5 text-center"
                  style={{ backgroundColor: C.carta }}
                >
                  <span
                    className={`${mono.className} block text-[10px] mb-2`}
                    style={{ color: C.rubrica }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm md:text-base font-semibold">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p
              className={`${mono.className} mt-5 text-center text-[11px] md:text-xs tracking-[0.08em]`}
              style={{ color: C.plomo }}
            >
              Cotizaciones directas por teléfono, en horario de atención.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Capítulo III: el taller (bosquejo) ── */}
      <section className="border-t" style={{ borderColor: C.linea }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Capitulo n="capítulo tercero">El taller, en bosquejo</Capitulo>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="relative mt-10 border-2 border-dashed p-6 md:p-10"
              style={{ borderColor: C.rubrica, backgroundColor: C.papel }}
            >
              <span
                className={`${mono.className} absolute -top-3.5 left-4 px-2 py-1 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold`}
                style={{ backgroundColor: C.rubrica, color: '#fff' }}
              >
                Bosquejo — se reemplaza por las fotos reales del taller
              </span>
              {/* Escena tipográfica: resma de pliegos + barra de tinta, compuesta en CSS */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="relative w-44 shrink-0" aria-hidden="true">
                  {[3, 2, 1, 0].map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 w-40 h-52 border"
                      style={{
                        backgroundColor: '#FBF7EC',
                        borderColor: C.linea,
                        transform: `translate(${i * 6}px, ${-i * 6}px)`,
                      }}
                    />
                  ))}
                  <div
                    className="relative w-40 h-52 border flex items-center justify-center"
                    style={{ backgroundColor: '#FBF7EC', borderColor: C.tinta, transform: 'translate(18px, -18px)' }}
                  >
                    <span
                      className="text-6xl"
                      style={{ fontFamily: 'var(--font-display)', color: C.rubrica }}
                    >
                      O
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: C.plomo }}>
                    <Inicial>L</Inicial>a imprenta no tiene fotos publicadas: su ficha de Google
                    muestra la dirección, el horario y el teléfono — y nada más. Cuando Onix
                    active su sitio, este espacio muestra sus máquinas, sus pliegos y sus
                    trabajos recién salidos de producción.
                  </p>
                  <p
                    className={`${mono.className} mt-4 text-[11px] md:text-xs uppercase tracking-[0.14em]`}
                    style={{ color: C.plomo }}
                  >
                    Toda imagen generada se marca así, siempre.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Capítulo IV: horario y mapa ── */}
      <section className="border-t" style={{ borderColor: C.linea, backgroundColor: C.tinta, color: '#F3EDDE' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="text-center">
              <p
                className={`${mono.className} uppercase tracking-[0.3em] text-[10px] md:text-xs`}
                style={{ color: '#E8A79C' }}
              >
                capítulo cuarto
              </p>
              <h2
                className="mt-3 text-3xl md:text-5xl leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Horario, dirección y el mapa
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal delay={100}>
              <table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
                <tbody>
                  {HORARIO.map((h) => (
                    <tr key={h.dias} className="border-b" style={{ borderColor: 'rgba(243,237,222,0.2)' }}>
                      <td className="py-4 pr-4 text-sm md:text-base font-semibold">{h.dias}</td>
                      <td
                        className={`${mono.className} py-4 text-sm md:text-base text-right`}
                        style={{ color: '#E8A79C' }}
                      >
                        {h.horas}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 pr-4 text-sm md:text-base font-semibold">Dirección</td>
                    <td className={`${mono.className} py-4 text-sm md:text-base text-right`} style={{ color: '#E8A79C' }}>
                      {BIZ.address}, {BIZ.city}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 text-sm md:text-base font-semibold">Teléfono</td>
                    <td className="py-4 text-right">
                      <a
                        href={BIZ.phoneTel}
                        className={`${mono.className} text-sm md:text-base underline underline-offset-4 tap-44`}
                        style={{ color: '#fff' }}
                      >
                        {BIZ.phoneDisplay}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="border overflow-hidden h-[280px] md:h-[340px]"
                style={{ borderColor: 'rgba(243,237,222,0.3)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa — Imprenta Onix, 6 Sur 2064, Talca"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-3 inline-block text-[11px] md:text-xs underline underline-offset-4 tap-44`}
                style={{ color: '#E8A79C' }}
              >
                Abrir en Google Maps ↗
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Colofón ── */}
      <footer className="border-t" style={{ borderColor: C.linea }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-8 text-center">
          <p
            className={`${mono.className} uppercase tracking-[0.28em] text-[10px] md:text-[11px]`}
            style={{ color: C.rubrica }}
          >
            colofón
          </p>
          <p className="mt-3 text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: C.plomo }}>
            Página de muestra para {BIZ.name}, {BIZ.address}, {BIZ.city} —{' '}
            {BIZ.phoneDisplay}. Los datos publicados vienen de su ficha de Google Maps.
          </p>
          <p className={`${mono.className} mt-4 text-[10px] md:text-[11px] tracking-[0.2em] uppercase`} style={{ color: C.plomo }}>
            ✦ fin ✦
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.rubrica} />
    </main>
  )
}
