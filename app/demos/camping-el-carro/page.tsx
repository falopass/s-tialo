import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  paper: '#F3EDDD',
  paperSoft: '#EDE5D2',
  pine: '#243E2C',
  pineDeep: '#152417',
  amber: '#E07B2A',
  amberSoft: '#F6D9B8',
  amberInk: '#9C4D0E',
  ink: '#1E261D',
  muted: '#5C6357',
  line: 'rgba(30,38,29,0.22)',
  cream: '#F3EDDD',
}

export const metadata: Metadata = demoMetadata({
  slug: 'camping-el-carro',
  title: 'Camping El Carro — Camping y cabañas a la orilla del río Maule, San Clemente',
  description:
    'Camping El Carro: sitios entre arbolitos con corriente, cabañas de madera, baños y duchas nuevos y bajada directa al río Maule. Km 65 de la Ruta Internacional Pehuenche, San Clemente. Reservas por WhatsApp.',
  image: `${IMG}/rio-maule.webp`,
})

const NAV_LINKS = [
  { label: 'El río', href: '#rio' },
  { label: 'El terreno', href: '#terreno' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Cómo llegar', href: '#como-llegar' },
]

const COMODIDADES = [
  { item: 'Sitios entre arbolitos con corriente', detalle: 'Privacidad y sombra para cada carpa' },
  { item: 'Bajada directa al río Maule', detalle: 'Sin salir del camping' },
  { item: 'Baños nuevos y duchas con agua caliente', detalle: 'Duchas 10/10 según los campistas' },
  { item: 'Asaderas y mesas de madera', detalle: 'El asadito asegurado' },
  { item: 'Lavaderos', detalle: 'Para estar más días tranquilo' },
  { item: 'Agua de quebrada', detalle: 'Directa de la precordillera' },
  { item: 'Mascotas bienvenidas', detalle: 'El camping es de todos' },
  { item: 'Nada de parlantes', detalle: 'Acá se duerme con el río' },
]

const RESENAS = [
  {
    nombre: 'Francisco Castillo C.',
    texto:
      'Bonito lugar, hay espacio de sobra para instalarse, distenderse, hacer su asadito. La anfitriona muy amable. Hay una bajada al río Maule ahí mismo. Un 7; recomendado.',
  },
  {
    nombre: 'Valentina Marchant',
    texto:
      'Muy lindo lugar, las zonas de camping están entre arbolitos por lo que da una sensación de privacidad. Tiene una bajada directa al río, los baños son limpios y tiene agua de quebrada.',
  },
  {
    nombre: 'J. Diego Toledo V.',
    texto:
      'Es muy acogedor el camping, pasamos 3 noches ahí. La dueña nos dio muy buena atención. Es la segunda vez que volvemos.',
  },
  {
    nombre: 'Bruno Venegas',
    texto:
      'Tricahues y bandurrias hacen lo suyo al amanecer. Baños limpios, nuevos, y duchas 10/10.',
  },
]

function Hito({ n, titulo, id }: { n: string; titulo: string; id?: string }) {
  return (
    <div id={id} className="flex items-center gap-3 md:gap-4 scroll-mt-20">
      <span
        className={`${mono.className} shrink-0 text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase px-2.5 py-1.5 rounded-sm`}
        style={{ backgroundColor: C.pine, color: C.paper }}
      >
        Hito {n}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: C.line }} aria-hidden="true" />
      <span
        className={`${mono.className} shrink-0 text-[11px] md:text-xs tracking-[0.18em] uppercase`}
        style={{ color: C.muted }}
      >
        {titulo}
      </span>
    </div>
  )
}

function Fig({
  src,
  alt,
  num,
  pie,
  ratio = 'aspect-[3/4]',
  className = '',
}: {
  src: string
  alt: string
  num: string
  pie: string
  ratio?: string
  className?: string
}) {
  return (
    <figure className={className}>
      <div className={`relative ${ratio} overflow-hidden rounded-md`} style={{ border: `1px solid ${C.line}` }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 90vw, 33vw" className="object-cover" />
      </div>
      <figcaption className="mt-2 flex items-baseline gap-2">
        <span className={`${mono.className} text-[10px] tracking-[0.14em] uppercase`} style={{ color: C.amberInk }}>
          fig. {num}
        </span>
        <span className="text-xs md:text-sm" style={{ color: C.muted }}>
          {pie}
        </span>
      </figcaption>
    </figure>
  )
}

export default function Page() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span className={display.className}>Camping El Carro</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.pine, btnInk: C.paper }}
      />

      {/* Portada: el río Maule tal cual baja de la cordillera */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end">
        <Image
          src={`${IMG}/rio-maule.webp`}
          alt="El río Maule a la altura del Camping El Carro, con la precordillera de fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(21,36,23,0.30) 0%, rgba(21,36,23,0.05) 40%, rgba(21,36,23,0.82) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 md:pb-16 pt-32">
          <Reveal>
            <div
              className="max-w-xl rounded-lg p-6 md:p-9 border-l-4"
              style={{ backgroundColor: C.pineDeep, borderColor: C.amber }}
            >
              <p
                className={`${mono.className} text-[11px] md:text-xs tracking-[0.22em] uppercase mb-4 inline-flex items-center gap-2`}
                style={{ color: C.amberSoft }}
              >
                <span className="inline-block w-6 h-px" style={{ backgroundColor: C.amber }} aria-hidden="true" />
                Bitácora de ruta · Camping y cabañas
              </p>
              <h1
                className={`${display.className} uppercase leading-[0.98] text-[clamp(2.4rem,9vw,5rem)] tracking-wide`}
                style={{ color: C.cream }}
              >
                El Maule pasa
                <br />
                por tu carpa
              </h1>
              <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed" style={{ color: 'rgba(243,237,221,0.92)' }}>
                Sitios entre arbolitos, cabañas de madera y una bajada directa al río, en el km 65 de la Ruta
                Internacional Pehuenche, San Clemente.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[`${BIZ.rating}★ · ${BIZ.reviews} reseñas`, 'Km 65 · San Clemente', 'Pet friendly'].map((chip) => (
                  <span
                    key={chip}
                    className={`${mono.className} text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full`}
                    style={{ border: '1px solid rgba(243,237,221,0.55)', color: C.cream }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full active:scale-95 transition-transform"
                  style={{ backgroundColor: C.amber, color: '#231307' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#terreno"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full active:scale-95 transition-transform"
                  style={{ border: '1px solid rgba(243,237,221,0.6)', color: C.cream }}
                >
                  Ver el terreno
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 space-y-16 md:space-y-24 pb-16 md:pb-24">
        {/* Hito 01 — El río */}
        <section id="rio" className="scroll-mt-20">
          <Hito n="01" titulo="El río" />
          <div className="mt-8 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
            <Reveal className="md:col-span-5">
              <h2
                className={`${display.className} uppercase text-[clamp(1.9rem,6vw,3.4rem)] leading-[1.02]`}
                style={{ color: C.pineDeep }}
              >
                Bajada directa al Maule
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                No hay que caminar ni pedir permiso: del sitio se baja al río. Agua de quebrada para el mate,
                pozas calmas para remojarse y, al amanecer, tricahues y bandurrias haciendo lo suyo entre los
                sauces — lo cuentan los que han ido, no lo inventamos nosotros.
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Cerca de todo lo que uno viene a buscar a este valle: la Reserva Nacional Altos de Lircay,
                el Parque Natural Tricahue y el Lago Maule quedan camino arriba por la misma ruta.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <Fig
                src={`${IMG}/rio.webp`}
                alt="El río Maule pasando entre rocas y vegetación junto al camping"
                num="01"
                pie="El Maule a la altura del km 65"
                ratio="aspect-[4/3] md:aspect-[16/10]"
              />
            </Reveal>
          </div>
        </section>

        {/* Hito 02 — El terreno */}
        <section id="terreno" className="scroll-mt-20">
          <Hito n="02" titulo="El terreno" />
          <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-10">
            <Reveal className="md:col-span-4 md:pt-16">
              <h2
                className={`${display.className} uppercase text-[clamp(1.9rem,6vw,3.4rem)] leading-[1.02]`}
                style={{ color: C.pineDeep }}
              >
                Carpa entre arbolitos
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Los sitios se reparten entre los árboles, así que cada grupo tiene lo suyo: sombra,
                separación y corriente a mano. Espacio de sobra para armar el campamento completo —
                carpa, mesa y asadera — sin quedar encima del vecino.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full active:scale-95 transition-transform"
                style={{ backgroundColor: C.pine, color: C.paper }}
              >
                Consultar disponibilidad
              </a>
            </Reveal>
            <div className="md:col-span-8 grid grid-cols-2 gap-4 md:gap-5">
              <Reveal delay={80}>
                <Fig
                  src={`${IMG}/carpa.webp`}
                  alt="Carpa naranja armada entre los árboles del camping"
                  num="02"
                  pie="Sitio entre arbolitos, con sombra"
                  ratio="aspect-[3/4]"
                />
              </Reveal>
              <Reveal delay={160} className="mt-8 md:mt-14">
                <Fig
                  src={`${IMG}/mesa-picnic.webp`}
                  alt="Mesa de picnic de madera rústica bajo los árboles"
                  num="03"
                  pie="Mesas de madera en cada sector"
                  ratio="aspect-[3/4]"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Hito 03 — Las cabañas */}
        <section id="cabanas" className="scroll-mt-20">
          <Hito n="03" titulo="Las cabañas" />
          <div className="mt-8">
            <Reveal>
              <div className="max-w-2xl">
                <h2
                  className={`${display.className} uppercase text-[clamp(1.9rem,6vw,3.4rem)] leading-[1.02]`}
                  style={{ color: C.pineDeep }}
                >
                  Madera, literas y cocina
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Para los que no traen carpa o vienen en familia: cabañas de madera con literas,
                  cocina equipada y ventana al bosque. Los baños — nuevos y limpios — son compartidos
                  con el camping.
                </p>
              </div>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              <Reveal delay={60}>
                <Fig src={`${IMG}/cabana.webp`} alt="Fachada de la cabaña de madera del camping" num="04" pie="Cabaña de madera" />
              </Reveal>
              <Reveal delay={120}>
                <Fig src={`${IMG}/literas.webp`} alt="Dormitorio de la cabaña con literas de madera" num="05" pie="Literas por habitación" />
              </Reveal>
              <Reveal delay={180}>
                <Fig src={`${IMG}/cocina.webp`} alt="Cocina de madera de la cabaña, con ventana" num="06" pie="Cocina equipada" />
              </Reveal>
              <Reveal delay={240}>
                <Fig src={`${IMG}/bano.webp`} alt="Baño del camping, con ducha y lavamanos" num="07" pie="Baños nuevos" />
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* Hito 04 — El cartel del camping */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Hito n="04" titulo="El cartel" />
          <Reveal className="mt-8">
            <div
              className="rounded-lg p-6 md:p-10"
              style={{ backgroundColor: C.pineDeep, color: C.cream, boxShadow: '0 24px 60px -30px rgba(21,36,23,0.6)' }}
            >
              <div className="grid md:grid-cols-2 gap-x-10">
                <div>
                  <p className={`${mono.className} text-[11px] tracking-[0.22em] uppercase`} style={{ color: C.amberSoft }}>
                    Lo que hay
                  </p>
                  <h3 className={`${display.className} uppercase text-2xl md:text-4xl leading-tight mt-2`}>
                    Campamento completo
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(243,237,221,0.75)' }}>
                    Atendido por su dueña, Elizabeth, que según los campistas «da muy buena atención».
                    Se reserva por WhatsApp.
                  </p>
                </div>
                <ul className="mt-6 md:mt-0 divide-y" style={{ borderColor: 'rgba(243,237,221,0.14)' }}>
                  {COMODIDADES.map((c) => (
                    <li
                      key={c.item}
                      className="py-3 flex items-baseline justify-between gap-4"
                      style={{ borderColor: 'rgba(243,237,221,0.14)' }}
                    >
                      <span className="text-sm md:text-base font-medium">{c.item}</span>
                      <span
                        className={`${mono.className} text-[10px] md:text-xs text-right shrink-0 max-w-[42%]`}
                        style={{ color: 'rgba(243,237,221,0.6)' }}
                      >
                        {c.detalle}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hito 05 — Firmas del libro */}
      <section className="px-5 md:px-8 pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <Hito n="05" titulo="Firmas del libro" />
          <div className="mt-8">
            <Reveal className="flex items-end justify-between flex-wrap gap-4">
              <h2
                className={`${display.className} uppercase text-[clamp(1.9rem,6vw,3.4rem)] leading-[1.02]`}
                style={{ color: C.pineDeep }}
              >
                Palabra de campista
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm underline underline-offset-4 decoration-2 pb-1 tap-44`}
                style={{ color: C.pine }}
              >
                {BIZ.rating}★ · {BIZ.reviews} reseñas en Google
              </a>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 80}>
                  <blockquote className="border-t-2 pt-4" style={{ borderColor: C.amber }}>
                    <Stars value={5} color={C.amber} className="w-4 h-4" />
                    <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: C.ink }}>
                      “{r.texto}”
                    </p>
                    <footer className={`${mono.className} mt-3 text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                      — {r.nombre}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hito 06 — Cómo llegar */}
      <section id="como-llegar" className="px-5 md:px-8 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Hito n="06" titulo="Cómo llegar" />
          <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal>
              <h2
                className={`${display.className} uppercase text-[clamp(1.9rem,6vw,3.4rem)] leading-[1.02]`}
                style={{ color: C.pineDeep }}
              >
                Ruta Pehuenche, km 65
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Por la Ruta Internacional Pehuenche desde San Clemente, dirección a la cordillera.
                El camping queda a mano en el km 65, sector Colbún Alto.
              </p>
              <dl className="mt-6 space-y-3">
                <div className="flex justify-between gap-4 text-sm md:text-base border-b pb-3" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd className="text-right font-medium">{BIZ.address}, {BIZ.city}</dd>
                </div>
                <div className="flex justify-between gap-4 text-sm md:text-base border-b pb-3" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>
                    Teléfono
                  </dt>
                  <dd className="text-right font-medium">{BIZ.phoneDisplay}</dd>
                </div>
                <div className="flex justify-between gap-4 text-sm md:text-base border-b pb-3" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>
                    Sector
                  </dt>
                  <dd className="text-right font-medium">Colbún Alto, {BIZ.region}</dd>
                </div>
              </dl>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base font-semibold rounded-full active:scale-95 transition-transform"
                style={{ backgroundColor: C.amber, color: '#231307' }}
              >
                Escribir a {BIZ.phoneDisplay}
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-lg overflow-hidden h-[320px] md:h-full md:min-h-[420px]" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa: Camping El Carro, km 65 ruta Pehuenche, San Clemente"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Colofón */}
      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: C.pineDeep }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className={`${display.className} uppercase text-base leading-none`} style={{ color: C.cream }}>
              {BIZ.name}
            </p>
            <p className={`${mono.className} mt-1.5 text-[10px] tracking-[0.14em] uppercase`} style={{ color: 'rgba(243,237,221,0.55)' }}>
              Km 65 · San Clemente · {BIZ.rating}★
            </p>
          </div>
          <p className="text-[11px] leading-snug" style={{ color: 'rgba(243,237,221,0.6)' }}>
            Mockup de muestra realizado por Sitiazo — sitios web para pymes desde $79.990.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
