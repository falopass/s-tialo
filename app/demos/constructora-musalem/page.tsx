import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Plano de obra: papel milimetrado, tinta azul plano, sello amarillo seguridad.
const C = {
  paper: '#EDF1F6',
  sheet: '#FAFBFD',
  ink: '#122A44',
  blue: '#1D4E89',
  muted: '#4C6379',
  line: 'rgba(18,42,68,0.16)',
  lineSoft: 'rgba(18,42,68,0.08)',
  yellow: '#E8A400',
  yellowInk: '#3D2E00',
}

export const metadata: Metadata = demoMetadata({
  slug: 'constructora-musalem',
  title: 'Constructora Musalem — Edificios residenciales en Concepción',
  description:
    'Constructora Musalem S.A., Maipú 660 oficina 2, Concepción. Construcción de edificios residenciales y compraventa de inmuebles.',
  image: `${IMG}/edificio.webp`,
})

const NAV_LINKS = [
  { label: 'Líneas', href: '#planta' },
  { label: 'Registro', href: '#detalle' },
  { label: 'Ficha', href: '#ficha' },
  { label: 'Oficina', href: '#oficina' },
]

const LINEAS = [
  {
    t: 'Edificios de vivienda',
    d: 'Su giro principal: construcción de edificios residenciales, del terreno a la entrega.',
  },
  {
    t: 'Compra y venta de inmuebles',
    d: 'Segundo giro de la sociedad: inversión y comercialización de propiedades.',
  },
  {
    t: 'Gestión del proyecto',
    d: 'Diseño, permisos, ejecución y recepción, coordinados desde una sola oficina.',
  },
  {
    t: 'Atención en el centro',
    d: 'Oficina en pleno centro de Concepción, con horario hasta las 20:00.',
  },
]

const FICHA = [
  { k: 'Razón social', v: 'Constructora Musalem S.A.' },
  { k: 'RUT', v: '93.312.000-7' },
  { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
  { k: 'Teléfono', v: BIZ.phoneDisplay },
  { k: 'Atención', v: BIZ.hours },
]

// Marca de esquina tipo registro de imprenta.
function Corner({ pos }: { pos: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute w-3 h-3 ${pos}`}
      style={{
        borderTop: `1.5px solid ${C.blue}`,
        borderLeft: `1.5px solid ${C.blue}`,
      }}
    />
  )
}

// Lámina: marco de plano con esquinas, nombre del dibujo y contenido.
function Sheet({
  label,
  children,
  className = '',
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative border ${className}`} style={{ borderColor: C.line, backgroundColor: C.sheet }}>
      <Corner pos="top-2 left-2" />
      <Corner pos="top-2 right-2 rotate-90" />
      <Corner pos="bottom-2 left-2 -rotate-90" />
      <Corner pos="bottom-2 right-2 rotate-180" />
      <div
        className={`${mono.className} absolute -top-px left-5 px-2 text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase`}
        style={{ backgroundColor: C.sheet, color: C.blue, transform: 'translateY(-50%)' }}
      >
        {label}
      </div>
      {children}
    </div>
  )
}

// Sello de imagen generada: el demo muestra la línea visual, no obra real.
function Bosquejo() {
  return (
    <span
      className={`${mono.className} absolute top-2 left-2 z-10 px-2 py-1 text-[10px] font-bold tracking-[0.14em] uppercase`}
      style={{ backgroundColor: C.yellow, color: C.yellowInk }}
    >
      Bosquejo
    </span>
  )
}

// Línea de cota (dimensión) como en plano.
function Dim({ w = 'w-24' }: { w?: string }) {
  return (
    <div className={`flex items-center gap-0 ${w}`} aria-hidden="true">
      <span className="w-[1.5px] h-2.5" style={{ backgroundColor: C.blue }} />
      <span className="flex-1 h-px" style={{ backgroundColor: C.blue }} />
      <span className="w-[1.5px] h-2.5" style={{ backgroundColor: C.blue }} />
    </div>
  )
}

const GRID = {
  backgroundImage:
    'linear-gradient(rgba(29,78,137,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,137,0.08) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

export default function MusalemDemo() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className="font-bold tracking-tight">
            MUSALEM<span style={{ color: C.blue }}>.</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: C.sheet,
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: '#FFFFFF',
        }}
      />

      {/* LÁMINA 1: ALZADO (hero) */}
      <section id="inicio" className="relative overflow-hidden" style={GRID}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <p
                  className={`${mono.className} inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 border`}
                  style={{ borderColor: C.line, color: C.blue, backgroundColor: C.sheet }}
                >
                  {BIZ.legal} · {BIZ.city}
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className={`${display.className} mt-6 text-[40px] leading-[1.02] md:text-[64px] font-bold tracking-tight`}>
                  Edificios que
                  <br />
                  ordenan el <span style={{ color: C.blue }}>centro</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <Dim w="w-40 mt-4" />
              </Reveal>
              <Reveal delay={190}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Construcción de edificios residenciales y compraventa de
                  inmuebles, con oficina en pleno centro de Concepción.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={TEL_LINK}
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold active:scale-95 transition-transform"
                    style={{ backgroundColor: C.ink, color: '#FFF' }}
                  >
                    Llamar a la oficina
                  </a>
                  <a
                    href="#planta"
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold border active:scale-95 transition-transform"
                    style={{ borderColor: C.ink, color: C.ink, backgroundColor: C.sheet }}
                  >
                    Ver el plano
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={180}>
              <figure className="relative max-w-[440px] mx-auto">
                <Bosquejo />
                <div className="border p-2 shadow-lg" style={{ borderColor: C.line, backgroundColor: C.sheet }}>
                  <Image
                    src={`${IMG}/edificio.webp`}
                    alt="Bosquejo: render de referencia de un edificio residencial"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 flex items-center gap-3 text-[10px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  <Dim w="w-16" /> Alzado referencial <Dim w="w-16" />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLANTA: líneas de trabajo como celdas de plano */}
      <section id="planta" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <h2 className={`${display.className} text-[30px] md:text-[46px] font-bold tracking-tight leading-[1.05] mb-10`}>
            Trazado <span style={{ color: C.blue }}>general</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l" style={{ borderColor: C.line }}>
          {LINEAS.map((l, i) => (
            <Reveal key={l.t} delay={(i % 4) * 80}>
              <div
                className="h-full p-5 md:p-7 border-r border-b flex flex-col min-h-[170px] md:min-h-[190px]"
                style={{ borderColor: C.line, backgroundColor: C.sheet }}
              >
                <span
                  aria-hidden="true"
                  className="w-2.5 h-2.5 mb-4"
                  style={{ backgroundColor: C.yellow, outline: `1.5px solid ${C.blue}`, outlineOffset: 2 }}
                />
                <h3 className={`${display.className} font-bold text-[15px] md:text-lg leading-snug`}>{l.t}</h3>
                <p className="mt-2 text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                  {l.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DETALLE: registro fotográfico */}
      <section id="detalle" className="border-y" style={{ borderColor: C.line, backgroundColor: C.sheet }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-start">
            <div>
              <Reveal>
                <h2 className={`${display.className} text-[30px] md:text-[46px] font-bold tracking-tight leading-[1.05]`}>
                  Del plano
                  <br />a la <span style={{ color: C.blue }}>llave</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                  Una obra se revisa en sus terminaciones. Esta lámina muestra el
                  registro disponible: la foto de su ficha pública y bosquejos
                  marcados que ilustran el estándar del rubro.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <figure className="relative mt-8">
                  <div className="border p-2" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <Image
                      src={`${IMG}/cocina.webp`}
                      alt="Interior de cocina moderna, registro de la ficha pública de Constructora Musalem"
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] tracking-[0.14em] uppercase`} style={{ color: C.blue }}>
                    Registro de su ficha pública
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <Reveal delay={150} className="col-span-2">
                <figure className="relative">
                  <Bosquejo />
                  <div className="border p-2" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <Image
                      src={`${IMG}/obra.webp`}
                      alt="Bosquejo: estructura de hormigón de un edificio en construcción"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </figure>
              </Reveal>
              <Reveal delay={220}>
                <figure className="relative">
                  <Bosquejo />
                  <div className="border p-2" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <Image
                      src={`${IMG}/interior.webp`}
                      alt="Bosquejo: living de departamento con vista a la ciudad"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </figure>
              </Reveal>
              <Reveal delay={280}>
                <figure className="relative">
                  <Bosquejo />
                  <div className="border p-2" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <Image
                      src={`${IMG}/planos.webp`}
                      alt="Bosquejo: planos de planta sobre una mesa de trabajo"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FICHA: cajetín técnico */}
      <section id="ficha" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24" style={GRID}>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Sheet label="Cajetín" className="p-6 md:p-8">
              <dl className={`${mono.className} text-[12px] md:text-[13px]`}>
                {FICHA.map((f) => (
                  <div
                    key={f.k}
                    className="flex justify-between gap-6 py-3 border-b last:border-0"
                    style={{ borderColor: C.lineSoft }}
                  >
                    <dt className="uppercase tracking-[0.12em] font-bold shrink-0" style={{ color: C.blue }}>
                      {f.k}
                    </dt>
                    <dd className="text-right" style={{ color: C.ink }}>
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Sheet>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <h2 className={`${display.className} text-[28px] md:text-[40px] font-bold tracking-tight leading-[1.05]`}>
                Una sociedad
                <br />
                con <span style={{ color: C.blue }}>domicilio real</span>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Constructora Musalem S.A. tiene su oficina en Maipú 660, en el
                corazón comercial de Concepción, y figura en los registros
                públicos con giro de construcción de edificios residenciales.
                Se atiende con horario, con teléfono y en persona.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className={`${mono.className} mt-6 inline-flex items-center gap-3 text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.blue }}>
                <Dim w="w-10" /> Maipú 660 · Oficina 2 <Dim w="w-10" />
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="oficina" className="border-t" style={{ borderColor: C.line, backgroundColor: C.sheet }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <h2 className={`${display.className} text-[28px] md:text-[40px] font-bold tracking-tight leading-[1.05]`}>
                La oficina está
                <br />
                en el <span style={{ color: C.blue }}>pasaje</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}. {BIZ.hours} hrs.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold"
                  style={{ backgroundColor: C.ink, color: '#FFF' }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold border"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="border h-[300px] md:h-[380px]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className={`${display.className} font-bold tracking-tight`}>
              MUSALEM<span style={{ color: C.blue }}>.</span>
            </p>
            <p className={`${mono.className} mt-1 text-[10px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}
            </p>
          </div>
          <a
            href={TEL_LINK}
            className="inline-flex items-center h-[44px] px-5 text-sm font-bold"
            style={{ backgroundColor: C.ink, color: '#FFF' }}
          >
            Llamar ahora
          </a>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.ink} fg="#FFF" />
    </div>
  )
}
