import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MENU_DIA, RESENAS, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  noche: '#17120E',
  piedra: '#221B15',
  teal: '#2E6B62',
  vela: '#E2B45A',
  crema: '#F3ECDC',
  muted: 'rgba(243,236,220,0.72)',
  line: 'rgba(243,236,220,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-germania',
  title: 'Restaurant Germania — la esquina de la buena mesa',
  description:
    'Restaurant Germania en Maipú 1988, Molina. Terraza de día y de noche, cocina chilena de mar y parrilla, bar y menú del día.',
  image: `${IMG}/terraza-dia.webp`,
})

const NAV_LINKS = [
  { label: 'La esquina', href: '#esquina' },
  { label: 'El menú', href: '#menu' },
  { label: 'De noche', href: '#noche' },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E2B45A]'

function Sello({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] flex items-center gap-3`} style={{ color: C.vela }}>
      <span aria-hidden="true" className="inline-block w-7 h-px" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

export default function RestaurantGermaniaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.noche, color: C.crema }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-7 w-auto" aria-hidden="true" />
            <span className={`${display.className} text-xl`}>Germania</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        ctaLabel="Reservar mesa"
        fontClass="text-xl"
        theme={{
          over: 'dark',
          bar: 'rgba(23,18,14,0.92)',
          ink: C.crema,
          line: C.line,
          btnBg: C.vela,
          btnInk: C.noche,
        }}
      />

      {/* ————— HERO: la terraza de día ————— */}
      <section id="inicio" className="relative">
        <div className="relative h-[88svh] min-h-[570px]">
          <Image
            src={`${IMG}/terraza-dia.webp`}
            alt="Terraza de Germania de día: mesas turquesa bajo velas de sombra amarillas, luces de guirnalda y un gran árbol"
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
                'linear-gradient(180deg, rgba(23,18,14,0.5) 0%, rgba(23,18,14,0.15) 42%, rgba(23,18,14,0.92) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
              <Reveal>
                <Sello>Maipú esquina · Molina centro</Sello>
                <h1
                  className={`${display.className} leading-[1.02] text-[clamp(2.8rem,10vw,6.5rem)] mt-5 mb-3`}
                  style={{ color: C.crema }}
                >
                  La esquina de
                  <br />
                  la buena mesa
                </h1>
                <p className="max-w-md text-base md:text-lg leading-relaxed mb-7" style={{ color: C.muted }}>
                  Así se presenta Germania en su letrero y su sitio. Una terraza de piedra y caña que de día es
                  almuerzo de sol y de noche, bar con luces.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                    style={{ backgroundColor: C.vela, color: C.noche }}
                  >
                    Reservar mesa →
                  </a>
                  <a
                    href="#menu"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors hover:bg-white/10 tap-44 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F3ECDC]"
                    style={{ borderColor: 'rgba(243,236,220,0.45)', color: C.crema }}
                  >
                    Menú del día
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Faja de datos ————— */}
      <section aria-label="Datos del restaurant" style={{ backgroundColor: C.teal, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.vela} />
              <b className={`${display.className} text-lg`}>{BIZ.ratingLabel}</b>
              <span className="text-sm" style={{ color: 'rgba(243,236,220,0.8)' }}>{BIZ.reviews} reseñas</span>
            </span>
            <span className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(243,236,220,0.85)' }}>
              {BIZ.priceRange}
            </span>
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-xs uppercase tracking-[0.2em] underline underline-offset-4 tap-44 ${focusRing}`}
              style={{ color: 'rgba(243,236,220,0.85)' }}
            >
              {BIZ.igUser} · {BIZ.igFollowers}
            </a>
          </div>
        </div>
      </section>

      {/* ————— LA ESQUINA ————— */}
      <section id="esquina" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada esquinera de Germania en Maipú, Molina, con su letrero La esquina de la buena mesa"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: 'rgba(243,236,220,0.55)' }}>
              La esquina, en la propia foto de su ficha
            </p>
          </Reveal>
          <Reveal>
            <Sello>La esquina</Sello>
            <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.2rem)] leading-[1.08] mt-5 mb-4`}>
              Un restaurante que lleva el nombre del barrio alemán
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              Germania está en la esquina de Maipú, a pasos del centro de Molina. Adentro, la cocina es chilena de la
              buena: mar, parrilla y pastas, con una terraza que es el salón principal cuando hace calor.
            </p>
            <ul className="space-y-2.5 text-sm" style={{ color: C.muted }}>
              {[
                `${BIZ.address}, ${BIZ.city}`,
                `${BIZ.phoneDisplay}`,
                `De $15.000 a $30.000 por persona`,
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[8px] h-px w-4 shrink-0" style={{ backgroundColor: C.vela }} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ————— EL MENÚ DEL DÍA ————— */}
      <section id="menu" style={{ backgroundColor: C.piedra }} className="border-y" >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Sello>El menú del día</Sello>
              <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.2rem)] leading-[1.08] mt-5 mb-4`}>
                Ceviche germania, risotto de zetas y torta de la casa
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: C.muted }}>
                Transcrito de la carta que ellos mismos publicaron en Google. Los fondos cambian con la temporada;
                la copa de ceviche germania abre la mesa.
              </p>
              <div className="space-y-5">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.teal }}>
                    Entrada
                  </p>
                  <p className={`${display.className} text-lg leading-snug`}>{MENU_DIA.entrada}</p>
                </div>
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.teal }}>
                    Fondos a elección
                  </p>
                  <ul className="space-y-1.5">
                    {MENU_DIA.fondos.map((f) => (
                      <li key={f} className={`${display.className} text-lg leading-snug`}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.teal }}>
                    Postres
                  </p>
                  <p className="text-sm" style={{ color: C.muted }}>{MENU_DIA.postres.join(' · ')}</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative aspect-[4/5] max-w-md overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta del menú del día de Germania con la entrada, tres fondos a elección y postres"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: 'rgba(243,236,220,0.55)' }}>
                Foto real de su carta · Google Maps
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-12">
            {[
              { src: 'mar', alt: 'Selección del mar de Germania: ceviche, camarones apanados y pulpo', label: 'Selección del mar' },
              { src: 'ceviche', alt: 'Ceviche de salmón con cebolla morada y choclos', label: 'Ceviche' },
              { src: 'machas', alt: 'Machas a la parmesana con limón y rúcula', label: 'Machas a la parmesana' },
            ].map((f) => (
              <Reveal key={f.src}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(max-width: 768px) 33vw, 360px" className="object-cover" />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: 'rgba(243,236,220,0.65)' }}>
                  {f.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— DE NOCHE ————— */}
      <section id="noche" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Sello>Cuando cae el sol</Sello>
          <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.2rem)] leading-[1.08] mt-5 mb-4 max-w-2xl`}>
            La misma esquina, otro restaurante
          </h2>
          <p className="max-w-xl text-base leading-relaxed mb-10" style={{ color: C.muted }}>
            De noche la terraza se prende con las guirnaldas y el bar prepara moscow mules en taza de cobre, pisco
            sour y cócteles.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          <Reveal className="col-span-2">
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={`${IMG}/terraza-noche.webp`}
                alt="Terraza de Germania iluminada de noche con velas de sombra, luces y mesas turquesa"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={`${IMG}/bar.webp`}
                alt="Cócteles de la barra de Germania: moscow mule en taza de cobre y pisco sour de maracuyá"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full flex flex-col justify-center border p-6 md:p-8" style={{ borderColor: C.line, backgroundColor: C.piedra }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.vela }}>
                El bar
              </p>
              <p className={`${display.className} text-xl md:text-2xl leading-snug mb-4`}>
                De la terraza al bar
              </p>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                La misma terraza del almuerzo se ilumina para la noche: cócteles y picoteo bajo las guirnaldas. Para
                reservar, WhatsApp al {BIZ.phoneDisplay}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— RESEÑAS ————— */}
      <section style={{ backgroundColor: C.piedra }} className="border-y" aria-label="Reseñas">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20" style={{ borderColor: C.line }}>
          <Reveal>
            <Sello>Los que vuelven</Sello>
            <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.2rem)] leading-[1.08] mt-5 mb-10 max-w-xl`}>
              “Pasada obligatoria”
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {RESENAS.map((r) => (
              <Reveal key={r.nombre}>
                <figure className="h-full flex flex-col border p-6" style={{ borderColor: C.line, backgroundColor: C.noche }}>
                  <Stars value={5} color={C.vela} className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-base leading-relaxed flex-1" style={{ color: C.crema }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-5`} style={{ color: 'rgba(243,236,220,0.6)' }}>
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
            <Sello>La esquina de Maipú</Sello>
            <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.2rem)] leading-[1.08] mt-5 mb-5`}>
              Maipú 1988, a pasos del centro
            </h2>
            <dl className="space-y-4 text-sm">
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Teléfono', BIZ.phoneDisplay],
                ['Sitio', BIZ.web],
                ['Instagram', `${BIZ.igUser} · ${BIZ.igFollowers}`],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em] w-24 shrink-0 pt-0.5`} style={{ color: C.vela }}>
                    {k}
                  </dt>
                  <dd style={{ color: 'rgba(243,236,220,0.95)' }}>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                style={{ backgroundColor: C.vela, color: C.noche }}
              >
                Reservar mesa
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors tap-44 ${focusRing}`}
                style={{ borderColor: 'rgba(243,236,220,0.45)', color: C.crema }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de Restaurant Germania, Maipú 1988, Molina"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t" style={{ backgroundColor: '#100C09', color: 'rgba(243,236,220,0.75)', borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 gap-5 items-end">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-auto" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-base`} style={{ color: C.crema }}>
                {BIZ.name}
              </p>
              <p className="text-xs">
                {BIZ.address} · {BIZ.city}, Maule
              </p>
            </div>
          </div>
          <div className="text-right text-xs leading-relaxed">
            <p>{BIZ.phoneDisplay}</p>
            <p style={{ color: 'rgba(243,236,220,0.5)' }}>Demo de Sitiazo — datos verificados en Google Maps e Instagram</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
