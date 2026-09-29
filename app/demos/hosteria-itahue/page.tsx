import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CARTA, DESTACADOS, RESENAS, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  crema: '#F7F0DE',
  papel: '#FCF8EC',
  tinta: '#241812',
  burdeo: '#6E1423',
  madera: '#9C6B3F',
  verde: '#4C5B3C',
  muted: 'rgba(36,24,18,0.7)',
  line: 'rgba(36,24,18,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hosteria-itahue',
  title: 'Hostería Itahue — el hostal del km 212',
  description:
    'Hostería Itahue en la Ruta 5 Sur km 212, Molina. Cocina típica chilena, productos artesanales de elaboración propia, jardín y piscina.',
  image: `${IMG}/salon.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'La carta', href: '#carta' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6E1423]'

// Timbre tipo almanaque de ruta.
function Timbre({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] flex items-center gap-3`}
      style={{ color: light ? 'rgba(247,240,222,0.85)' : C.burdeo }}
    >
      <span
        aria-hidden="true"
        className="inline-block h-[9px] w-[9px] rounded-full border-2"
        style={{ borderColor: 'currentColor' }}
      />
      {children}
    </p>
  )
}

export default function HosteriaItahuePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-auto" aria-hidden="true" />
            {BIZ.short}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        ctaLabel="Avisar que llego"
        fontClass={`${display.className} font-bold text-xl`}
        theme={{
          over: 'dark',
          bar: 'rgba(247,240,222,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.burdeo,
          btnInk: C.crema,
        }}
      />

      {/* ————— HERO: el salón, como entrar al hostal ————— */}
      <section id="inicio" className="relative">
        <div className="relative h-[86svh] min-h-[560px]">
          <Image
            src={`${IMG}/salon.webp`}
            alt="Salón de Hostería Itahue lleno de comensales, con manteles burdeo y ventanales al jardín"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,10,6,0.55) 0%, rgba(20,10,6,0.25) 40%, rgba(36,24,18,0.88) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
              <Reveal>
                <Timbre light>Ruta 5 Sur · km 212 · Molina</Timbre>
                <h1
                  className={`${display.className} font-black leading-[0.95] tracking-[-0.01em] text-[clamp(3rem,12vw,8rem)] mt-4 mb-5`}
                  style={{ color: C.crema }}
                >
                  Hostería
                  <br />
                  Itahue
                </h1>
                <p className="max-w-md text-base md:text-lg leading-relaxed mb-7" style={{ color: 'rgba(247,240,222,0.92)' }}>
                  El hostal de la Panamericana donde la cocina chilena se hace como en casa — y donde todo lo de la
                  despensa es de elaboración propia.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                    style={{ backgroundColor: C.burdeo, color: C.crema }}
                  >
                    Aviso que llego →
                  </a>
                  <a
                    href="#carta"
                    className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors hover:bg-white/10 tap-44 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F0DE]`}
                    style={{ borderColor: 'rgba(247,240,222,0.55)', color: C.crema }}
                  >
                    Ver la carta
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Boleta de la ruta ————— */}
      <section aria-label="Datos del hostal" style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.madera} />
              <b className={`${display.className} text-lg`}>{BIZ.ratingLabel}</b>
              <span className="text-sm" style={{ color: 'rgba(247,240,222,0.7)' }}>
                {BIZ.reviews} reseñas
              </span>
            </span>
            <span className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,240,222,0.75)' }}>
              {BIZ.priceRange}
            </span>
            <span className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,240,222,0.75)' }}>
              Desayunos · Almuerzos
            </span>
            <span className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,240,222,0.75)' }}>
              Pet friendly
            </span>
          </div>
        </div>
      </section>

      {/* ————— LA CASA: cúpula, jardín, piscina ————— */}
      <section id="casa" className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14">
        <Reveal>
          <Timbre>La casa bajo la cúpula</Timbre>
          <h2 className={`${display.className} font-extrabold text-[clamp(2rem,6vw,3.6rem)] leading-[1.02] mt-4 mb-4 max-w-2xl`}>
            Un techo de palma que se ve desde la carretera
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
            La hostería abrió para recibir a quienes viajan por la Ruta 5: un salón de cerchas y manteles burdeo, un
            jardín con piscina para el verano y mesas donde cabe la familia completa — mascota incluida.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-9">
          <Reveal className="col-span-2 row-span-2">
            <div className="relative h-full min-h-[340px] md:min-h-[460px] overflow-hidden">
              <Image
                src={`${IMG}/cupula.webp`}
                alt="Cúpula de palma del techo del restaurant, con vigas radiales de madera"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <p className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.22em] px-2.5 py-1.5`} style={{ backgroundColor: 'rgba(36,24,18,0.85)', color: C.crema }}>
                La cúpula
              </p>
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className="relative h-full min-h-[164px] md:min-h-[224px] overflow-hidden">
              <Image
                src={`${IMG}/jardin.webp`}
                alt="Niño con su perro en el jardín de la hostería"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className="relative h-full min-h-[164px] md:min-h-[224px] overflow-hidden">
              <Image
                src={`${IMG}/piscina.webp`}
                alt="Piscina de la hostería rodeada de jardín"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-2">
            <div
              className="h-full flex flex-col justify-center px-5 py-6 border"
              style={{ borderColor: C.line, backgroundColor: C.papel }}
            >
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.verde }}>
                El jardín
              </p>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                En verano el almuerzo se estira al jardín y la piscina. Los que vienen con niños — y con perros — lo
                agradecen en las reseñas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— LA CARTA ————— */}
      <section id="carta" style={{ backgroundColor: C.burdeo, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Timbre light>La carta de la casa</Timbre>
            <h2 className={`${display.className} font-extrabold text-[clamp(2rem,6vw,3.6rem)] leading-[1.02] mt-4 mb-4 max-w-2xl`}>
              Cocina chilena, porciones de camino
            </h2>
            <p className="max-w-xl text-base leading-relaxed" style={{ color: 'rgba(247,240,222,0.85)' }}>
              Los precios que aparecen acá están transcritos de su carta publicada en Google. También hacen desayunos
              para madrugar la ruta.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 mt-10 items-start">
            <Reveal>
              <div className="relative aspect-[3/4] max-w-sm overflow-hidden border" style={{ borderColor: 'rgba(247,240,222,0.3)' }}>
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta impresa de Hostería Itahue con los precios de cada plato"
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: 'rgba(247,240,222,0.6)' }}>
                Foto real de su carta · Google Maps
              </p>
            </Reveal>
            <div>
              <ul className="divide-y" style={{ borderColor: 'rgba(247,240,222,0.25)' }}>
                {CARTA.map((item) => (
                  <Reveal key={item.plato}>
                    <li className="flex items-baseline justify-between gap-4 py-3.5" style={{ borderColor: 'rgba(247,240,222,0.25)' }}>
                      <span className={`${display.className} text-lg md:text-xl font-semibold`}>{item.plato}</span>
                      <span className={`${mono.className} text-sm shrink-0`} style={{ color: C.madera }}>
                        {item.precio}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {DESTACADOS.map((d) => (
                  <span
                    key={d}
                    className={`${mono.className} text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 border`}
                    style={{ borderColor: 'rgba(247,240,222,0.4)', color: 'rgba(247,240,222,0.9)' }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-12">
            {[
              { src: 'pastel', alt: 'Pastel de choclo casero recién salido del horno de barro', label: 'Pastel de choclo' },
              { src: 'cazuela', alt: 'Cazuela de ave servida en paila de greda', label: 'Cazuela de ave' },
              { src: 'arrollado', alt: 'Arrollado huaso con papas y ensalada', label: 'Arrollado huaso' },
            ].map((f) => (
              <Reveal key={f.src}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`${IMG}/${f.src}.webp`}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 360px"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: 'rgba(247,240,222,0.75)' }}>
                  {f.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— LA DESPENSA: elaboración propia ————— */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={`${IMG}/arrollado.webp`}
                alt="Arrollado de la casa cortado en rodajas, producto artesanal de elaboración propia"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <Timbre>De la despensa</Timbre>
            <h2 className={`${display.className} font-extrabold text-[clamp(1.8rem,5vw,3rem)] leading-[1.05] mt-4 mb-4`}>
              “Productos artesanales de elaboración propia”
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              Así se presenta la hostería en su sitio: el arrollado, las conservas y la charcutería se hacen acá
              mismo, y se venden en la despensa para llevar de vuelta a la ruta.
            </p>
            <ul className="space-y-2.5 text-sm" style={{ color: C.muted }}>
              {['Arrollado y charcutería de la casa', 'Conservas y dulces artesanales', 'Vinos de la zona'].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[7px] h-[7px] w-[7px] shrink-0" style={{ backgroundColor: C.madera }} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ————— RESEÑAS ————— */}
      <section style={{ backgroundColor: C.papel }} className="border-y" aria-label="Reseñas">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20" style={{ borderColor: C.line }}>
          <Reveal>
            <Timbre>Los que pasan y vuelven</Timbre>
            <h2 className={`${display.className} font-extrabold text-[clamp(1.8rem,5vw,3rem)] leading-[1.05] mt-4 mb-10 max-w-xl`}>
              Hay quienes llevan una década parando acá
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {RESENAS.map((r) => (
              <Reveal key={r.nombre}>
                <figure className="h-full flex flex-col border p-6" style={{ borderColor: C.line, backgroundColor: C.crema }}>
                  <Stars value={5} color={C.burdeo} className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-base leading-relaxed flex-1" style={{ color: C.tinta }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-5`} style={{ color: C.muted }}>
                    {r.nombre} · {r.fuente}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— CÓMO LLEGAR ————— */}
      <section id="llegar" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
          <Reveal>
            <Timbre>Kilómetro 212</Timbre>
            <h2 className={`${display.className} font-extrabold text-[clamp(1.8rem,5vw,3rem)] leading-[1.05] mt-4 mb-5`}>
              Está a un costado de la 5 Sur
            </h2>
            <dl className="space-y-4 text-sm">
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Coordenadas', BIZ.plusCode],
                ['Teléfono', BIZ.phoneDisplay],
                ['Sitio', BIZ.web],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em] w-28 shrink-0 pt-0.5`} style={{ color: C.burdeo }}>
                    {k}
                  </dt>
                  <dd style={{ color: C.tinta }}>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                style={{ backgroundColor: C.burdeo, color: C.crema }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors tap-44 ${focusRing}`}
                style={{ borderColor: C.line, color: C.tinta }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de Hostería Itahue, Ruta 5 Sur km 212, Molina"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: C.muted }}>
              A 10 min de Molina · lado poniente de la Panamericana
            </p>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.tinta, color: 'rgba(247,240,222,0.8)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 gap-5 items-end">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-auto" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-bold text-base`} style={{ color: C.crema }}>
                {BIZ.name}
              </p>
              <p className="text-xs">
                {BIZ.address} · {BIZ.city}, Maule
              </p>
            </div>
          </div>
          <div className="text-right text-xs leading-relaxed">
            <p>{BIZ.phoneDisplay}</p>
            <p style={{ color: 'rgba(247,240,222,0.55)' }}>Demo de Sitiazo — datos verificados en Google Maps</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
