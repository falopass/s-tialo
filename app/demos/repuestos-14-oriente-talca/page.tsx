import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({ src: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700' })
const body = localFont({ src: '../../fonts/barlow/normal-400.woff2', weight: '400' })

// Paleta de la fachada: blanco del muro, verde de la base y
// azul de las letras pintadas "14 ORIENTE".
const C = {
  papel: '#F3F5F1',
  crema: '#FBFCF9',
  azul: '#1D4F9C',
  verde: '#236043',
  asfalto: '#1C2733',
  amarillo: '#E8B23A',
  muted: '#4E5B63',
  line: 'rgba(28,39,51,0.14)',
}

const IMG2 = '/demos/repuestos-14-oriente-talca'

export const metadata: Metadata = demoMetadata({
  slug: 'repuestos-14-oriente-talca',
  title: 'Repuestos 14 Oriente - Repuestos de carrocería en Talca',
  description:
    'Repuestos de carrocería en 14 Oriente esquina 6 Sur, Talca. Toyota, Nissan, Hyundai, KIA, Mitsubishi, Chevrolet, Peugeot, Suzuki. Lun a vie 9:00 a 13:30 y 15:00 a 19:00.',
})

const NAV_LINKS = [
  { label: 'La esquina', href: '#esquina' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#horario' },
]

const MARCAS = ['Toyota', 'Nissan', 'Hyundai', 'KIA', 'Mitsubishi', 'Chevrolet', 'Peugeot', 'Suzuki']

const RESENAS = [
  { q: 'Excelente, encuentro todos mis repuestos ahí, además muy barato.', n: 'Victor Eyzaguirre', s: 5 },
  { q: 'Buena atención, precios excelentes y te hacen tu descuento.', n: 'Claudio Díaz', s: 5 },
  { q: 'Buena atención y gran variedad de repuestos.', n: 'Cristian Agusto', s: 4 },
]

/** Placa callejera, como el letrero pintado de la esquina. */
function Placa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`${display.className} inline-block px-5 py-2.5 rounded-md border-2 uppercase tracking-wider text-lg font-medium ${className}`}
      style={{ backgroundColor: C.azul, color: '#fff', borderColor: '#fff', boxShadow: '0 4px 14px rgba(28,39,51,0.25)' }}
    >
      {children}
    </div>
  )
}

/** Línea discontinua de calle como separador. */
function Via() {
  return (
    <div className="overflow-hidden py-3" aria-hidden="true">
      <div className="flex gap-6 w-max" style={{ opacity: 0.5 }}>
        {Array.from({ length: 40 }, (_, i) => (
          <span key={i} className="inline-block w-8 h-[3px] rounded-full" style={{ backgroundColor: C.asfalto }} />
        ))}
      </div>
    </div>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'azul' | 'crema' | 'outline'; external?: boolean }) {
  const st =
    tone === 'azul' ? { backgroundColor: C.azul, color: '#fff' }
    : tone === 'crema' ? { backgroundColor: C.crema, color: C.asfalto }
    : { border: `1.5px solid ${C.asfalto}`, color: C.asfalto }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.papel, color: C.asfalto }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'light', bar: 'rgba(243,245,241,0.94)', ink: C.asfalto, line: C.line, btnBg: C.azul, btnInk: '#fff' }}
        ctaLabel="Consultar"
      />

      <main id="inicio">
        {/* HERO: la fachada real como portada */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-16">
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.05fr] gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <p className={`${display.className} uppercase tracking-widest text-sm mb-4`} style={{ color: C.azul }}>
                  Proveedor de repuestos de carrocería
                </p>
                <h1 className={`${display.className} font-semibold uppercase leading-[0.95] text-[44px] sm:text-6xl lg:text-7xl tracking-tight`}>
                  Repuestos<br /><span style={{ color: C.azul }}>14 Oriente</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  El negocio lleva el nombre de la calle: está en la esquina de 14 Oriente con 6 Sur, Talca.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="azul">Consultar por WhatsApp</Btn>
                  <Btn href="#marcas" tone="outline" external={false}>Ver marcas</Btn>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                  <Stars value={BIZ.rating} color={C.amarillo} />
                  {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <figure className="relative">
                <div className="overflow-hidden rounded-2xl border-4" style={{ borderColor: C.crema, boxShadow: '0 18px 44px rgba(28,39,51,0.2)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG2}/fachada.webp`}
                    alt="Fachada de Repuestos 14 Oriente en la esquina de 14 Oriente con 6 Sur, Talca"
                    className="w-full h-auto aspect-[16/10] object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption className={`${display.className} absolute -bottom-4 right-4 rounded-md px-4 py-2 text-sm uppercase tracking-wider shadow-lg`} style={{ backgroundColor: C.azul, color: '#fff' }}>
                  la esquina de siempre
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <Via />

        {/* LA ESQUINA: el nombre es la dirección */}
        <section id="esquina" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="relative max-w-sm mx-auto">
                <div className="overflow-hidden rounded-2xl border-4" style={{ borderColor: C.crema, boxShadow: '0 14px 34px rgba(28,39,51,0.16)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG2}/esquina.webp`} alt="La esquina de 14 Oriente con 6 Sur vista desde la calle" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                {/* señalamiento callejero */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <Placa>14 Oriente</Placa>
                  <div className="w-1 h-6" style={{ backgroundColor: C.asfalto }} aria-hidden="true" />
                  <Placa>6 Sur</Placa>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold uppercase leading-[1] tracking-tight`}>
                El nombre es <span style={{ color: C.azul }}>la dirección</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: C.muted }}>
                No hay que aprenderse el nombre: es la esquina. 14 Oriente esquina 6 Sur, pleno sector residencial de Talca. Las reseñas hablan de variedad, precio y descuentos.
              </p>
              <div className="mt-6 rounded-2xl px-5 py-4 text-[15px] leading-relaxed" style={{ backgroundColor: '#E4EAE3', color: C.asfalto }}>
                <p className="font-bold">Como dato del local</p>
                <p className="mt-1">También venden desodorante ambiental por litro, un clásico de los repuestos de barrio.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARCAS: el muro pintado de la fachada */}
        <section id="marcas" className="scroll-mt-16" style={{ backgroundColor: C.asfalto }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold uppercase leading-[1] tracking-tight text-center`} style={{ color: C.crema }}>
                Las marcas del <span style={{ color: C.amarillo }}>muro</span>
              </h2>
              <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: 'rgba(243,245,241,0.72)' }}>
                Las logos pintadas en la fachada anuncian con qué marcas trabajan.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <figure className="mt-10 max-w-3xl mx-auto overflow-hidden rounded-2xl border-4" style={{ borderColor: 'rgba(243,245,241,0.25)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG2}/marcas.webp`} alt="Muro de la fachada con los logos de Toyota, Nissan, Hyundai, KIA, Mitsubishi, Chevrolet, Peugeot y Suzuki" className="w-full aspect-[16/9] object-cover" loading="lazy" />
              </figure>
            </Reveal>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
              {MARCAS.map((m, i) => (
                <Reveal key={m} delay={i * 50}>
                  <span className={`${display.className} inline-block px-4 py-2 rounded-md text-sm uppercase tracking-wider`} style={{ backgroundColor: 'rgba(243,245,241,0.1)', color: C.crema, border: '1px solid rgba(243,245,241,0.25)' }}>
                    {m}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OPINIONES */}
        <section id="opiniones" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold uppercase leading-[1] tracking-tight`}>
                Lo que dicen <span style={{ color: C.azul }}>en Google</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.rating} de promedio en {BIZ.reviews} reseñas. Se repite lo mismo: buena atención, variedad y precio.
              </p>
              <figure className="mt-6 overflow-hidden rounded-2xl border-4" style={{ borderColor: C.crema, boxShadow: '0 12px 30px rgba(28,39,51,0.14)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG2}/entrada.webp`} alt="Entrada del local de Repuestos 14 Oriente" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </figure>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.n} delay={i * 110}>
                  <blockquote className="rounded-2xl p-5" style={{ backgroundColor: C.crema, boxShadow: '0 8px 24px rgba(28,39,51,0.1)', borderLeft: `4px solid ${C.azul}` }}>
                    <div className="flex items-center justify-between gap-3">
                      <cite className="not-italic text-sm font-bold">{r.n}</cite>
                      <Stars value={r.s} color={C.amarillo} className="w-3.5 h-3.5" />
                    </div>
                    <p className="mt-2.5 leading-relaxed text-[15px]" style={{ color: C.muted }}>“{r.q}”</p>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Via />

        {/* HORARIO + MAPA */}
        <section id="horario" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold uppercase leading-[1] tracking-tight`}>
                Con horario <span style={{ color: C.azul }}>de colación</span>
              </h2>
              <div className="mt-6 rounded-2xl px-5 py-4 text-[15px] leading-relaxed" style={{ backgroundColor: '#E4EAE3', color: C.asfalto }}>
                <p className="font-bold">Horario</p>
                <p className="mt-1">Lunes a viernes, 9:00 a 13:30 y 15:00 a 19:00</p>
                <p>Sábado, 9:00 a 14:00</p>
                <p className="mt-2 text-sm" style={{ color: C.muted }}>Cierran a la hora de almuerzo: mejor consultar antes de ir.</p>
              </div>
              <address className="not-italic mt-5 text-base leading-relaxed">
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="azul">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="outline">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] md:h-full md:min-h-[440px]" style={{ boxShadow: '0 12px 30px rgba(28,39,51,0.14)', backgroundColor: '#E4EAE3' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.azul }}>
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-18 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold uppercase leading-[1] tracking-tight`} style={{ color: '#fff' }}>
                ¿Buscas un repuesto?
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Consulta por WhatsApp con el modelo de tu auto y te responden al tiro si lo tienen.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="crema">Consultar por WhatsApp</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: C.asfalto, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-xl uppercase tracking-wide`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(243,245,241,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(243,245,241,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
