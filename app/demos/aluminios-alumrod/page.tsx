import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MEDIDA, MAPS_EMBED, IMG, SERVICIOS, PASOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Identidad industrial: grafito del perfil, aluminio cepillado y el naranjo
// de su fachada en la esquina (foto de Street View). El motivo gráfico es el
// marco de ventana: paños divididos por montantes finos.
const C = {
  grafito: '#17191C',
  acero: '#5B6670',
  aluminio: '#EDEFF1',
  papel: '#F7F8F9',
  naranja: '#C8451B',
  tinta: '#1C2024',
  muda: 'rgba(28,32,36,0.72)',
  linea: 'rgba(28,32,36,0.16)',
  lineaClara: 'rgba(255,255,255,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'aluminios-alumrod',
  title: 'Aluminios Alumrod — Ventanas de aluminio y PVC en Talca | Sitiazo.cl',
  description:
    'Fabricación e instalación de ventanas de aluminio y PVC en Talca. Vidriería en Diez Ote esquina 6 Norte. Cotiza por WhatsApp.',
  image: `${IMG}/esquina.webp`,
})

const NAV_LINKS = [
  { label: 'Qué fabrican', href: '#fabrican' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Cota tipo plano: línea con extremos y medida al centro.
function Cota({ label, color = C.acero }: { label: string; color?: string }) {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: color }} />
      <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color }}>
        {label}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: color }} />
    </div>
  )
}

function TagFuente({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded`}
      style={{ backgroundColor: 'rgba(91,102,112,0.12)', color: C.acero }}
    >
      {children}
    </span>
  )
}

export default function AlumrodPage() {
  return (
    <main id="inicio" className={`${body.className} min-h-screen`} style={{ backgroundColor: C.aluminio, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className}>ALUMROD</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        theme={{ over: 'dark', bar: 'rgba(237,239,241,0.94)', ink: C.tinta, line: C.linea, btnBg: C.naranja, btnInk: '#fff' }}
      />

      {/* ── HERO: la ventana como plano ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
        {/* montantes del marco */}
        <div aria-hidden="true" className="absolute inset-y-0 left-1/3 w-px" style={{ backgroundColor: C.lineaClara }} />
        <div aria-hidden="true" className="absolute inset-y-0 left-2/3 w-px" style={{ backgroundColor: C.lineaClara }} />
        <div aria-hidden="true" className="absolute inset-x-0 top-[62%] h-px" style={{ backgroundColor: C.lineaClara }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.naranja }}>
              Fabricación e instalación · Talca
            </p>
            <h1
              className={`${display.className} mt-4 text-[64px] md:text-[140px] leading-[0.9] tracking-tight text-white uppercase`}
            >
              Ventanas
              <br />
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>a medida</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Aluminios Alumrod fabrica e instala ventanas de aluminio y PVC en la esquina de
              Diez Ote con 6 Norte. Tú traes las medidas; ellos hacen el resto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK_MEDIDA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-7 text-sm font-semibold rounded-sm transition-transform active:scale-95"
                style={{ backgroundColor: C.naranja, color: '#fff' }}
              >
                Cotizar con mis medidas
              </a>
              <a
                href="#local"
                className="inline-flex items-center justify-center h-[48px] px-6 text-sm font-semibold rounded-sm border"
                style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#fff' }}
              >
                Ver el local
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10">
              <Cota label="Diez Ote 1712 · esq. 6 Norte" color={C.acero} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Datos de ficha ── */}
      <section style={{ backgroundColor: C.naranja }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-wrap items-center gap-x-8 gap-y-2">
          <span className="inline-flex items-center gap-2">
            <Stars value={4.6} color="#fff" className="w-4 h-4" />
            <span className={`${mono.className} text-xs uppercase tracking-[0.12em] text-white`}>
              {BIZ.rating} en Google
            </span>
          </span>
          <span className={`${mono.className} text-xs uppercase tracking-[0.12em] text-white`}>
            Abre 9:00
          </span>
          <span className={`${mono.className} text-xs uppercase tracking-[0.12em] text-white`}>
            Tienda de cristales
          </span>
        </div>
      </section>

      {/* ── Qué fabrican ── */}
      <section id="fabrican" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranja }}>
              Catálogo
            </p>
            <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-none`}>
              Qué hacen aquí
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div
                  className="relative p-6 h-full"
                  style={{ backgroundColor: C.papel, border: `1px solid ${C.linea}` }}
                >
                  {/* cruz de marco en la esquina */}
                  <span aria-hidden="true" className="absolute top-0 left-0 w-6 h-6" style={{ borderRight: `1px solid ${C.linea}`, borderBottom: `1px solid ${C.linea}` }} />
                  <h3 className={`${display.className} text-2xl md:text-[28px] uppercase leading-tight`}>{s.t}</h3>
                  <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: C.muda }}>
                    {s.d}
                  </p>
                  <div className="mt-4">
                    <TagFuente>{s.src}</TagFuente>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <p className="mt-5 text-sm" style={{ color: C.muda }}>
              ¿Buscas otra pieza de aluminio o vidrio? Pregunta directo por WhatsApp:
              si no lo hacen, te lo dicen al tiro.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El local (fotos reales / street view) ── */}
      <section id="local" className="py-16 md:py-24 scroll-mt-16" style={{ backgroundColor: C.grafito }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranja }}>
              El local
            </p>
            <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-none text-white`}>
              La esquina de 6 Norte
            </h2>
            <p className="mt-3 max-w-lg text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              El galpón naranjo de la esquina es difícil de pasar por alto. Las fotos del exterior
              son de Google Street View (mayo 2026); el interior es de su propia ficha.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            <Reveal className="col-span-2 md:col-span-2">
              <figure>
                <img
                  src={`${IMG}/esquina.webp`}
                  alt="Galpón naranjo de Aluminios Alumrod en la esquina de Diez Ote con 6 Norte, Talca"
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Esquina Diez Ote × 6 Norte · Imagen: Google Street View
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <figure className="h-full flex flex-col">
                <img
                  src={`${IMG}/interior.webp`}
                  alt="Interior de la tienda de Aluminios Alumrod: vitrinas y muros violeta"
                  className="w-full flex-1 object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Interior de la tienda · su ficha de Maps
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <figure>
                <img
                  src={`${IMG}/calle.webp`}
                  alt="Calle Diez Ote frente a Aluminios Alumrod, con letreros en la vereda"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                  La calle frente al local · Street View
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={190} className="col-span-1 md:col-span-2">
              <figure>
                <img
                  src={`${IMG}/entrada.webp`}
                  alt="Cruce peatonal frente a la esquina de Aluminios Alumrod"
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Así se ve al llegar · Street View
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Proceso ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranja }}>
              Cómo se trabaja
            </p>
            <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-none`}>
              De la cinta métrica al marco
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="relative p-6 h-full" style={{ backgroundColor: C.papel, border: `1px solid ${C.linea}` }}>
                  <span
                    className={`${display.className} text-5xl leading-none`}
                    style={{ color: C.naranja }}
                  >
                    {p.n}
                  </span>
                  <h3 className={`${display.className} mt-3 text-2xl uppercase`}>{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muda }}>
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Llegar ── */}
      <section id="llegar" className="py-16 md:py-24 scroll-mt-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranja }}>
              Ficha
            </p>
            <h2 className={`${display.className} mt-3 text-4xl uppercase leading-none`}>
              Diez Ote 1712
            </h2>
            <dl className="mt-6 space-y-4 text-sm md:text-base">
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Dónde</dt>
                <dd>Esquina de Diez Ote con Calle 6 Norte, {BIZ.city}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Horario</dt>
                <dd>Abre a las 9:00 · horario completo por WhatsApp</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Contacto</dt>
                <dd>{BIZ.phoneDisplay}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Rubro</dt>
                <dd>Fabricación e instalación de ventanas de aluminio y PVC</dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center h-[48px] px-7 text-sm font-semibold rounded-sm transition-transform active:scale-95"
              style={{ backgroundColor: C.naranja, color: '#fff' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-[300px] md:h-full min-h-[300px] overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Aluminios Alumrod en Diez Ote 1712, Talca"
                className="w-full h-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pt-10 pb-8" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className={`${display.className} text-2xl uppercase text-white`}>{BIZ.name}</p>
          <p className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Ventanas de aluminio y PVC · {BIZ.address}, {BIZ.city}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4 text-white">
              WhatsApp
            </a>
            <a href={BIZ.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Ficha en Google Maps
            </a>
          </div>
          <p className={`${mono.className} mt-6 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.45)' }}>
            Demo de muestra · Sitiazo.cl
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
