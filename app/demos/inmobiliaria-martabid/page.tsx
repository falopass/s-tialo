import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Folleto de ruta: papel crema, tinta café y el ámbar del logo Martabid.
// Los proyectos se cuentan como una carretera que baja por el sur.
const C = {
  cream: '#F7F1E5',
  paper: '#FDF9F0',
  ink: '#2B1B10',
  brown: '#452914',
  amber: '#EB9900',
  amberDeep: '#C96218',
  muted: '#7A6A58',
  line: 'rgba(69,41,20,0.16)',
  night: '#241610',
}

export const metadata: Metadata = demoMetadata({
  slug: 'inmobiliaria-martabid',
  title: 'Inmobiliaria Martabid — Casas y departamentos con oficina en Talca',
  description:
    'Inmobiliaria Martabid SpA. Proyectos de casas y departamentos en Temuco, Lautaro, Villarrica, Osorno y Puerto Montt; oficina en 2 Norte 940, Talca.',
  image: `${IMG}/praderas-aerea.webp`,
})

const NAV_LINKS = [
  { label: 'Ruta', href: '#ruta' },
  { label: 'Casas', href: '#casas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Oficinas', href: '#oficinas' },
]

const RUTA = [
  {
    km: 'km 0',
    ciudad: 'Temuco',
    nombre: 'Edificio Belmonte y Plaza Cautín',
    d: 'Departamentos y condominio en el centro de la ciudad donde nació la inmobiliaria, a pasos del Parque Isla Cautín.',
    img: `${IMG}/belmonte-gym.webp`,
    alt: 'Espacio común del proyecto Belmonte en Temuco',
  },
  {
    km: 'km 30',
    ciudad: 'Labranza · Lautaro',
    nombre: 'Praderas de Labranza y Terrazas del Sur',
    d: 'Casas en barrios consolidados con vista al volcán: la Ruta 5 alcanza ambos en menos de media hora.',
    img: `${IMG}/praderas-casa.webp`,
    alt: 'Casa modelo en Praderas de Labranza, Temuco',
  },
  {
    km: 'km 85',
    ciudad: 'Villarrica',
    nombre: 'Condominio Volcán Villarrica',
    d: 'Departamentos con piscina, juegos y multicancha a los pies del volcán — el proyecto más fotografiado de la ruta.',
    img: `${IMG}/volcan-piscina.webp`,
    alt: 'Piscina y edificios del condominio Volcán Villarrica',
  },
  {
    km: 'km 210',
    ciudad: 'Osorno',
    nombre: 'Jardines del Sur',
    d: 'Dos modelos de casas en un barrio que ya tiene calles nuevas, juegos infantiles y vecinos instalados.',
    img: `${IMG}/jardines-parque.webp`,
    alt: 'Plaza y juegos infantiles del barrio Jardines del Sur, Osorno',
  },
  {
    km: 'km 310',
    ciudad: 'Puerto Montt',
    nombre: 'Piedra Azul y Vista Chinquihue',
    d: 'El sur austral también está en la ruta: proyectos junto al canal y la ciudad portuaria.',
    img: `${IMG}/volcan-juegos.webp`,
    alt: 'Áreas verdes y juegos dentro de un condominio Martabid',
  },
]

const OFICINAS = ['Temuco (casa matriz)', 'Talca', 'Chillán', 'Los Ángeles', 'Villarrica', 'Valdivia', 'Osorno', 'Puerto Montt']

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center text-[10px] md:text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1.5 rounded-full border`}
      style={{ borderColor: C.line, color: C.brown, backgroundColor: C.paper }}
    >
      {children}
    </span>
  )
}

export default function MartabidDemo() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={
          <span className="px-2.5 py-1.5 rounded-lg" style={{ backgroundColor: C.night }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo oficial en public/ */}
            <img src={`${IMG}/logo.svg`} alt={BIZ.name} className="h-6 md:h-7 w-auto" />
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.amberDeep, btnInk: '#FFF' }}
      />

      {/* HERO — folleto de ruta */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `radial-gradient(${C.amber}33 1.5px, transparent 1.5px)`,
            backgroundSize: '26px 26px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.02fr_0.98fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  <Chip>Desde 2004 · Araucanía</Chip>
                  <Chip>Oficina en {BIZ.city}</Chip>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1
                  className={`${display.className} mt-6 text-[40px] md:text-[66px] leading-[1.0] font-black tracking-tight`}
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  Tu casa nueva,
                  <br />
                  <em className="font-medium" style={{ color: C.amberDeep }}>
                    del Maule al canal
                  </em>{' '}
                  de Chacao
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Martabid desarrolla barrios completos — casas, departamentos y
                  condominios con áreas verdes — en las ciudades del sur, y
                  atiende en su oficina de {BIZ.address}, {BIZ.city}.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-full active:scale-95 transition-transform text-white"
                    style={{ backgroundImage: `linear-gradient(100deg, ${C.amberDeep}, ${C.amber})` }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href="#ruta"
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-full border-2 active:scale-95 transition-transform"
                    style={{ borderColor: C.brown, color: C.brown }}
                  >
                    Ver la ruta de proyectos
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <figure className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[28px] border-2 border-dashed"
                  style={{ borderColor: C.amber }}
                />
                <Image
                  src={`${IMG}/praderas-aerea.webp`}
                  alt="Vista aérea del barrio Praderas de Labranza con el volcán al fondo, Temuco"
                  width={970}
                  height={608}
                  className="w-full h-auto rounded-[22px]"
                  priority
                />
                <figcaption
                  className={`${mono.className} absolute bottom-4 left-4 text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase px-3 py-2 rounded-full text-white`}
                  style={{ backgroundColor: 'rgba(36,22,16,0.85)' }}
                >
                  Praderas de Labranza · Temuco
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RUTA DE PROYECTOS — carretera vertical */}
      <section id="ruta" className="border-y" style={{ borderColor: C.line, backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] font-bold tracking-[0.2em] uppercase`} style={{ color: C.amber }}>
              Ruta 5 sur
            </p>
            <h2 className={`${display.className} mt-3 text-[32px] md:text-[50px] font-black leading-[1.02] tracking-tight text-white`}>
              Una carretera de barrios
              <br />
              <em className="font-medium" style={{ color: C.amber }}>
                que baja por el sur
              </em>
            </h2>
          </Reveal>
          <div className="relative mt-12 md:mt-16">
            <div
              aria-hidden="true"
              className="absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full"
              style={{
                backgroundImage: `repeating-linear-gradient(180deg, ${C.amber} 0 18px, transparent 18px 34px)`,
              }}
            />
            <div className="space-y-10 md:space-y-16">
              {RUTA.map((p, i) => (
                <Reveal key={p.nombre} delay={80}>
                  <div className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}>
                    <span
                      aria-hidden="true"
                      className="absolute left-[13px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4"
                      style={{ backgroundColor: C.night, borderColor: C.amber }}
                    />
                    <div className="pl-10 md:pl-0 md:[direction:ltr]">
                      <p className={`${mono.className} text-[11px] font-bold tracking-[0.18em] uppercase`} style={{ color: C.amber }}>
                        {p.km} · {p.ciudad}
                      </p>
                      <h3 className={`${display.className} mt-2 text-[22px] md:text-[30px] font-black leading-tight text-white`}>
                        {p.nombre}
                      </h3>
                      <p className="mt-3 text-sm md:text-base leading-relaxed max-w-md" style={{ color: '#C9BBA8' }}>
                        {p.d}
                      </p>
                    </div>
                    <figure className="pl-10 md:pl-0 md:[direction:ltr]">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        width={970}
                        height={608}
                        className="w-full h-auto rounded-2xl"
                      />
                    </figure>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ASÍ SE VE TU CASA — galería */}
      <section id="casas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <h2 className={`${display.className} text-[32px] md:text-[50px] font-black leading-[1.02] tracking-tight`}>
              Así se ve <em className="font-medium" style={{ color: C.amberDeep }}>por dentro</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} max-w-xs text-[11px] font-bold tracking-[0.1em] uppercase leading-relaxed`} style={{ color: C.muted }}>
              Fotos reales de sus casas modelo y condominios, publicadas por la propia inmobiliaria.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <Reveal className="col-span-2 lg:row-span-2">
            <figure className="relative h-full">
              <Image
                src={`${IMG}/volcan-aerea.webp`}
                alt="Vista aérea de los edificios del condominio Volcán Villarrica"
                width={970}
                height={608}
                className="w-full h-full object-cover rounded-2xl"
              />
              <figcaption className={`${mono.className} absolute bottom-3 left-3 text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full text-white`} style={{ backgroundColor: 'rgba(36,22,16,0.85)' }}>
                Volcán Villarrica
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <figure className="relative">
              <Image
                src={`${IMG}/jardines-interior.webp`}
                alt="Living-comedor de la casa modelo en Jardines del Sur, Osorno"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-2xl"
              />
            </figure>
          </Reveal>
          <Reveal delay={160}>
            <figure className="relative">
              <Image
                src={`${IMG}/belmonte-planta.webp`}
                alt="Planta 3D referencial de un departamento del Edificio Belmonte"
                width={1000}
                height={800}
                className="w-full h-auto rounded-2xl"
              />
              <span className={`${mono.className} absolute top-2 left-2 text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded`} style={{ backgroundColor: C.amber, color: C.ink }}>
                Imagen referencial
              </span>
            </figure>
          </Reveal>
          <Reveal delay={220} className="col-span-2">
            <figure className="relative">
              <Image
                src={`${IMG}/cautin-render.webp`}
                alt="Render referencial del proyecto Plaza Cautín en Temuco"
                width={970}
                height={608}
                className="w-full h-auto rounded-2xl"
              />
              <span className={`${mono.className} absolute top-2 left-2 text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded`} style={{ backgroundColor: C.amber, color: C.ink }}>
                Imagen referencial del proyecto
              </span>
              <figcaption className={`${mono.className} absolute bottom-3 right-3 text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full text-white`} style={{ backgroundColor: 'rgba(36,22,16,0.85)' }}>
                Plaza Cautín · Temuco
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" className="border-y" style={{ borderColor: C.line, backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${display.className} text-[56px] md:text-[80px] font-black leading-none`} style={{ color: C.amberDeep }}>
                {BIZ.rating}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Stars value={3.9} color={C.amberDeep} className="w-5 h-5" />
              <p className={`${mono.className} mt-3 text-[11px] font-bold tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                {BIZ.reviewCount} · casa matriz Temuco
              </p>
            </Reveal>
          </div>
          <div className="space-y-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 110}>
                <blockquote className="border-l-4 pl-5 py-1" style={{ borderColor: C.amber }}>
                  <Stars value={r.stars} color={C.amberDeep} className="w-4 h-4" />
                  <p className={`${display.className} mt-2 text-[17px] md:text-[20px] italic leading-snug`} style={{ color: C.brown }}>
                    “{r.text}”
                  </p>
                  <footer className={`${mono.className} mt-3 text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                    {r.author} · {r.when}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFICINAS */}
      <section id="oficinas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <h2 className={`${display.className} text-[32px] md:text-[50px] font-black leading-[1.02] tracking-tight`}>
            Ocho oficinas,{' '}
            <em className="font-medium" style={{ color: C.amberDeep }}>
              una en Talca
            </em>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {OFICINAS.map((o) => (
              <Chip key={o}>{o}</Chip>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <dl className="space-y-0 border-t" style={{ borderColor: C.line }}>
                {[
                  ['Sala de ventas Talca', `${BIZ.address}`],
                  ['Casa matriz', BIZ.casaMatriz],
                  ['Horario', BIZ.hours],
                  ['Teléfono Talca', BIZ.phoneDisplay],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-4 border-b" style={{ borderColor: C.line }}>
                    <dt className={`${mono.className} text-[11px] font-bold tracking-[0.12em] uppercase shrink-0`} style={{ color: C.amberDeep }}>
                      {k}
                    </dt>
                    <dd className="text-right text-sm md:text-base font-semibold" style={{ color: C.ink }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-full text-white active:scale-95 transition-transform"
                  style={{ backgroundImage: `linear-gradient(100deg, ${C.amberDeep}, ${C.amber})` }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-full border-2 active:scale-95 transition-transform"
                  style={{ borderColor: C.brown, color: C.brown }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="rounded-[22px] overflow-hidden border-2 h-[300px] md:h-[380px]" style={{ borderColor: C.amber }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa oficina ${BIZ.name} en ${BIZ.city}`}
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-5">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo oficial en public/ */}
            <img src={`${IMG}/logo.svg`} alt={BIZ.name} className="h-7 w-auto" />
            <p className={`${mono.className} mt-2 text-[10px] font-bold tracking-[0.12em] uppercase`} style={{ color: '#C9BBA8' }}>
              {BIZ.legal} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-[44px] px-5 text-sm font-bold rounded-full text-white"
            style={{ backgroundImage: `linear-gradient(100deg, ${C.amberDeep}, ${C.amber})` }}
          >
            Hablar con un ejecutivo
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
