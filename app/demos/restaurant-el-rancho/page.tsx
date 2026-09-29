import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, PLATOS, SELLOS, RESENA, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
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

const C = {
  papel: '#F4EDDC',
  tinta: '#201B12',
  rojo: '#B5241A',
  verde: '#20633C',
  amarillo: '#E2A20C',
  muted: 'rgba(32,27,18,0.7)',
  line: 'rgba(32,27,18,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-el-rancho',
  title: 'Restaurant El Rancho — el almacén del km 314',
  description:
    'Restaurant El Rancho en Panamericana Sur 3145, Longaví. Restorant y minimarket de ruta: comida casera abundante, antigüedades y parada de camioneros.',
  image: `${IMG}/salon.webp`,
})

const NAV_LINKS = [
  { label: 'El almacén', href: '#almacen' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'La parada', href: '#parada' },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5241A]'

// Rótulo tipo letrero de almacén.
function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] px-3 py-1.5 border-2`}
      style={{
        color: light ? C.papel : C.rojo,
        borderColor: 'currentColor',
      }}
    >
      {children}
    </p>
  )
}

export default function RestaurantElRanchoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} tracking-wide uppercase`}>{BIZ.short}</span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        ctaLabel="Avisar que paso"
        fontClass="text-xl"
        theme={{
          over: 'dark',
          bar: 'rgba(244,237,220,0.95)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.rojo,
          btnInk: C.papel,
        }}
      />

      {/* ————— HERO: el salón-almacén ————— */}
      <section id="inicio" className="relative">
        <div className="relative h-[88svh] min-h-[570px]">
          <Image
            src={`${IMG}/salon.webp`}
            alt="Salón de El Rancho con techo de chapa, sillones rojos, mesas con sillas verdes y antigüedades en los muros"
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
                'linear-gradient(180deg, rgba(18,14,8,0.5) 0%, rgba(18,14,8,0.2) 38%, rgba(18,14,8,0.9) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
              <Reveal>
                <Rotulo light>Restorant · Minimarket · km 314</Rotulo>
                <h1
                  className={`${display.className} uppercase leading-[0.9] text-[clamp(3.6rem,15vw,10rem)] mt-5 mb-5`}
                  style={{ color: C.papel, textShadow: '0 2px 0 rgba(18,14,8,0.4)' }}
                >
                  El Rancho
                </h1>
                <p className="max-w-md text-base md:text-lg leading-relaxed mb-7" style={{ color: 'rgba(244,237,220,0.92)' }}>
                  El restorant-almacén de la Panamericana en Longaví: comida casera de la olla, un minimarket que no
                  cierra y un museo de antigüedades mientras esperas la mesa.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                    style={{ backgroundColor: C.rojo, color: C.papel }}
                  >
                    Aviso que paso →
                  </a>
                  <a
                    href="#cocina"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border-2 transition-colors hover:bg-white/10 tap-44 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4EDDC]"
                    style={{ borderColor: 'rgba(244,237,220,0.55)', color: C.papel }}
                  >
                    Qué se come
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Faja del letrero ————— */}
      <section aria-label="Datos de la parada" style={{ backgroundColor: C.rojo, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.papel} />
              <b className={`${display.className} text-lg tracking-wide`}>{BIZ.ratingLabel}</b>
              <span className="text-sm" style={{ color: 'rgba(244,237,220,0.8)' }}>{BIZ.reviews} reseñas</span>
            </span>
            <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`}>{BIZ.priceRange}</span>
            <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`}>Minimarket abierto 24 hrs</span>
            <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`}>{BIZ.fbFollowers} en Facebook</span>
          </div>
        </div>
      </section>

      {/* ————— EL ALMACÉN: antigüedades ————— */}
      <section id="almacen" className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14">
        <Reveal>
          <Rotulo>La repisa de los años</Rotulo>
          <h2 className={`${display.className} uppercase text-[clamp(2.2rem,7vw,4.2rem)] leading-[0.95] mt-5 mb-4 max-w-3xl`}>
            Medio restorant, medio museo de almacén
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
            Entre mesa y mesa hay un pinball, una vitrola, un sillín de montar, radios y máquinas de otra época. Las
            reseñas lo repiten: aquí se come mirando antigüedades.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-9">
          <Reveal className="md:row-span-2">
            <div className="relative h-full min-h-[300px] md:min-h-[440px] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
              <Image
                src={`${IMG}/vitrina.webp`}
                alt="Rincón de antigüedades de El Rancho: televisor antiguo, sillín, teclado y máquina de coser"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative h-[220px] md:h-[214px] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
              <Image
                src={`${IMG}/pinball.webp`}
                alt="Pinball, guitarra y sillón rojo en el salón de El Rancho"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative h-[220px] md:h-[214px] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
              <Image
                src={`${IMG}/letrero.webp`}
                alt="Letrero Restorant Minimarket Abierto 24 hrs junto al aviso de aceites Mobil"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-2">
            <div
              className="h-full flex flex-col justify-center px-5 py-6 border-2"
              style={{ borderColor: C.tinta, backgroundColor: C.verde, color: C.papel }}
            >
              <p className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.24em] mb-2`} style={{ color: C.amarillo }}>
                Restomarket
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,237,220,0.92)' }}>
                El letrero lo dice: restorant y minimarket en el mismo techo. El minimarket abastece el viaje, se
                desayuna desde la mañana y se almuerza plato casero.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— LA COCINA ————— */}
      <section id="cocina" style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo light>Lo que sale de la olla</Rotulo>
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,7vw,4.2rem)] leading-[0.95] mt-5 mb-4 max-w-3xl`} style={{ color: C.papel }}>
              Plato casero, porción de camino
            </h2>
            <p className="max-w-xl text-base leading-relaxed" style={{ color: 'rgba(244,237,220,0.85)' }}>
              La ficha y las reseñas concuerdan: comida casera y abundante, cazuela de vacuno, pescado frito y
              churrascas calientes. Se desayuna y se almuerza.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {[
              { src: 'mesa', alt: 'Familia sirviéndose cazuela, tortillas, pebre y ensaladas en la mesa de El Rancho', span: 'col-span-2' },
              { src: 'pescado', alt: 'Pescado frito con arroz, limón y pebre', span: '' },
              { src: 'desayuno', alt: 'Desayuno con tostadas, ensalada y jugo servido en la mesa', span: '' },
            ].map((f) => (
              <Reveal key={f.src} className={f.span}>
                <div className={`relative overflow-hidden border-2 ${f.span ? 'aspect-[16/10] md:aspect-auto md:h-full md:min-h-[300px]' : 'aspect-[4/5]'}`} style={{ borderColor: 'rgba(244,237,220,0.35)' }}>
                  <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
            <Reveal className="col-span-2 md:col-span-1">
              <ul className="h-full flex flex-col justify-center border-2 px-5 py-5 gap-2" style={{ borderColor: 'rgba(244,237,220,0.35)' }}>
                {PLATOS.map((p) => (
                  <li key={p} className={`${display.className} uppercase tracking-wide text-base md:text-lg leading-tight`} style={{ color: C.amarillo }}>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="col-span-2 md:col-span-3 flex flex-wrap gap-2 items-center">
              {SELLOS.map((s) => (
                <span key={s} className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 border`} style={{ borderColor: 'rgba(244,237,220,0.4)', color: 'rgba(244,237,220,0.9)' }}>
                  {s}
                </span>
              ))}
              <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(244,237,220,0.55)' }}>
                — tal como lo leen las reseñas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ————— LA PARADA: camioneros y ciclistas ————— */}
      <section id="parada" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal>
            <div className="relative aspect-square overflow-hidden border-2" style={{ borderColor: C.tinta }}>
              <Image
                src={`${IMG}/camiones.webp`}
                alt="Camiones estacionados bajo los árboles en la parada de El Rancho, Longaví"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: C.muted }}>
              Foto de su propia página de Facebook
            </p>
          </Reveal>
          <Reveal>
            <Rotulo>La parada</Rotulo>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,6vw,3.6rem)] leading-[0.95] mt-5 mb-4`}>
              Donde paran los que viven en la ruta
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              En el kilómetro 314 se estacionan camiones, ciclistas y familias. El patio tiene sombra, el minimarket
              abastece el viaje y la cocina sale rápido — las reseñas destacan la atención y el precio.
            </p>
            <figure className="border-2 p-5" style={{ borderColor: C.tinta, backgroundColor: '#EFE7D2' }}>
              <Stars value={5} color={C.rojo} className="w-3.5 h-3.5 mb-3" />
              <blockquote className="text-sm leading-relaxed" style={{ color: C.tinta }}>
                “{RESENA.texto}”
              </blockquote>
              <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-4`} style={{ color: C.muted }}>
                {RESENA.nombre} · {RESENA.fuente}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ————— CÓMO LLEGAR ————— */}
      <section id="llegar" style={{ backgroundColor: C.verde, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <Reveal>
              <Rotulo light>Kilómetro 314</Rotulo>
              <h2 className={`${display.className} uppercase text-[clamp(2rem,6vw,3.6rem)] leading-[0.95] mt-5 mb-5`} style={{ color: C.papel }}>
                Panamericana Sur 3145, Longaví
              </h2>
              <dl className="space-y-4 text-sm">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Coordenadas', BIZ.plusCode],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Facebook', `${BIZ.fbName} · ${BIZ.fbFollowers}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <dt className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.2em] w-28 shrink-0 pt-0.5`} style={{ color: C.amarillo }}>
                      {k}
                    </dt>
                    <dd style={{ color: 'rgba(244,237,220,0.95)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] tap-44 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4EDDC]`}
                  style={{ backgroundColor: C.rojo, color: C.papel }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border-2 transition-colors tap-44 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4EDDC]`}
                  style={{ borderColor: 'rgba(244,237,220,0.55)', color: C.papel }}
                >
                  Abrir en Maps →
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden border-2" style={{ borderColor: 'rgba(244,237,220,0.4)' }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa de Restaurant El Rancho, Panamericana Sur 3145, Longaví"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: 'rgba(244,237,220,0.7)' }}>
                Al norte de Longaví · borde poniente de la Ruta 5
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.tinta, color: 'rgba(244,237,220,0.8)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 gap-5 items-end">
          <div>
            <p className={`${display.className} uppercase tracking-wide text-xl`} style={{ color: C.papel }}>
              {BIZ.name}
            </p>
            <p className="text-xs mt-1">
              {BIZ.address} · {BIZ.city}, Maule
            </p>
          </div>
          <div className="text-right text-xs leading-relaxed">
            <p>{BIZ.phoneDisplay}</p>
            <p style={{ color: 'rgba(244,237,220,0.55)' }}>Demo de Sitiazo — datos verificados en Google Maps y Facebook</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
