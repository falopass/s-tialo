import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la mesa del almuerzo» — el local es un comedor familiar
 * de pizarra negra, mantel de colores y platos que se sirven redondos. La pieza
 * central es la pizarra del día con su carta real, los platos recortados en
 * círculo como se ven bajando del fogón, y el amarillo de su logo de pared.
 */
const C = {
  papel: '#F8F1E3',
  carbon: '#171310',
  amarillo: '#F6B91E',
  rojo: '#D93025',
  muted: 'rgba(23,19,16,0.68)',
  line: 'rgba(23,19,16,0.16)',
  onCarbon: '#F5EBD7',
  onCarbonSoft: 'rgba(245,235,215,0.7)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'el-gustoso-maule',
  title: 'El Gustoso Maule — Comida casera en Los Paltos',
  description:
    'Comida casera del día en Los Paltos, Maule: pescado frito, costillar, carne a la cacerola y pollo asado. 4,7 estrellas en Google.',
  image: `${IMG}/interior.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Los platos', href: '#platos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

// Textual del cartel real que cuelga en el local.
const PIZARRA = [
  'Pescado frito',
  'Costillar de cerdo',
  'Carne a la cacerola',
  'Pollo asado',
  'Comida casera del día',
]

const PLATOS = [
  { img: 'cazuela', nombre: 'La cazuela de siempre', detalle: 'caliente, recién servida' },
  { img: 'hamburguesas', nombre: 'Hamburguesas al plato', detalle: 'sobre papel de la casa' },
  { img: 'mesa', nombre: 'El almuerzo completo', detalle: 'plato, ensalada y su acompañamiento' },
  { img: 'panes', nombre: 'Panes y sopaipillas', detalle: 'marcadas con el sello Gustoso' },
]

const RESENAS = [
  {
    text: 'Buena comida casera y una variada carta para escoger.',
    who: 'Jacqueline Cornejo',
    stars: 5,
  },
  {
    text: 'Muy buena. Comida y servicio... recomendado...',
    who: 'Osvaldo Veliz',
    stars: 5,
  },
]

export default function ElGustosoMaulePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.papel, color: C.carbon }}
    >
      <style>{`
        .eg-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .eg-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .eg-btn:active { transform: translateY(0) scale(0.97); }
        .eg-btn:focus-visible { outline: 3px solid ${C.rojo}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name="El Gustoso"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        fontClass={`${display.className} font-bold`}
        theme={{
          over: 'light',
          bar: 'rgba(248,241,227,0.94)',
          ink: C.carbon,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el comedor y su pizarra ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[96px] md:pt-[112px] pb-12 md:pb-16">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.rojo }}>
                  Comida casera · Los Paltos, Maule
                </p>
                <h1
                  className={`${display.className} font-extrabold leading-[1.0] tracking-tight text-[clamp(2.5rem,7.5vw,4.8rem)]`}
                  style={{ color: C.carbon }}
                >
                  El almuerzo que{' '}
                  <span style={{ color: C.rojo }}>huele a casa</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base md:text-lg leading-relaxed max-w-md mt-5" style={{ color: C.muted }}>
                  En Los Paltos se almuerza como en la casa: la pizarra del día
                  manda y los platos salen del fogón a la mesa.
                </p>
                <div className="flex flex-wrap gap-3 mt-7">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} eg-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                    style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href="#pizarra"
                    className={`${mono.className} eg-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                    style={{ borderColor: C.carbon, color: C.carbon }}
                  >
                    Ver la pizarra
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-7">
                  <Stars value={4.7} color={C.amarillo} className="w-4 h-4" />
                  <span className={`${mono.className} text-xs font-bold`} style={{ color: C.carbon }}>
                    {BIZ.rating} en Google · {BIZ.ratingCount} opiniones
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-6">
              <Reveal delay={140}>
                <figure className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4" style={{ borderColor: C.carbon }}>
                    <Image
                      src={`${IMG}/interior.webp`}
                      alt="Interior del Gustoso: pizarra con el logo dibujado y mesas del comedor"
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado de la pared del local */}
                  <img
                    src={`${IMG}/logo.webp`}
                    alt="Logo Gustoso pintado en la pared del local"
                    className="absolute -bottom-6 -left-4 w-24 md:w-28 aspect-square object-cover rounded-full border-4 rotate-[-6deg]"
                    style={{ borderColor: C.papel }}
                  />
                  <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-8 md:mt-7 text-right`} style={{ color: C.muted }}>
                    El comedor por dentro
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La pizarra del día ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amarillo }}>
                  Escrita a mano, como en el local
                </p>
                <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.0] tracking-tight mb-8`} style={{ color: C.onCarbon }}>
                  La pizarra del día
                </h2>
              </Reveal>
              <ul>
                {PIZARRA.map((p, i) => (
                  <Reveal key={p} delay={i * 60}>
                    <li
                      className="flex items-baseline gap-4 py-4 border-b border-dashed"
                      style={{ borderColor: 'rgba(245,235,215,0.25)' }}
                    >
                      <span className={`${mono.className} text-sm font-bold w-8 shrink-0`} style={{ color: C.amarillo }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className={`${display.className} font-bold text-2xl md:text-4xl leading-none tracking-tight`} style={{ color: C.onCarbon }}>
                        {p}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={200}>
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <span
                    className={`${display.className} font-extrabold uppercase text-lg md:text-xl px-4 py-2 rounded-full rotate-[-2deg]`}
                    style={{ backgroundColor: C.amarillo, color: C.carbon }}
                  >
                    ¡Sabor inigualable!
                  </span>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] max-w-xs`} style={{ color: C.onCarbonSoft }}>
                    Atención especial a empresas, colegios e instituciones
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal className="col-span-12 md:col-span-5" delay={100}>
              <figure>
                <div className="relative aspect-[2/3] overflow-hidden rounded-3xl border-4 rotate-1" style={{ borderColor: C.amarillo }}>
                  <Image
                    src={`${IMG}/cartel.webp`}
                    alt="Cartel real del Gustoso con su logo y la carta del día"
                    fill
                    sizes="(min-width: 768px) 38vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-4 text-center`} style={{ color: C.onCarbonSoft }}>
                  El cartel que cuelga en el local
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Los platos: recortados como se sirven ── */}
      <section id="platos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
            Del fogón a la mesa
          </p>
          <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.0] tracking-tight mb-10`}>
            Los platos, en círculo
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {PLATOS.map((p, i) => (
            <Reveal key={p.img} delay={i * 70}>
              <figure className="text-center">
                <div
                  className="relative aspect-square overflow-hidden rounded-full border-4 mx-auto"
                  style={{ borderColor: C.amarillo, maxWidth: '230px' }}
                >
                  <Image
                    src={`${IMG}/${p.img}.webp`}
                    alt={`${p.nombre} en El Gustoso Maule`}
                    fill
                    sizes="(min-width: 768px) 230px, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className={`${display.className} block font-bold text-base md:text-lg leading-tight`} style={{ color: C.carbon }}>
                    {p.nombre}
                  </span>
                  <span className={`${mono.className} block text-[10px] md:text-[11px] uppercase tracking-[0.1em] mt-1`} style={{ color: C.muted }}>
                    {p.detalle}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-10 text-center`} style={{ color: C.muted }}>
            La carta del día se confirma por WhatsApp
          </p>
        </Reveal>
      </section>

      {/* ── Horario + salón ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border-4" style={{ borderColor: C.carbon }}>
              <Image
                src={`${IMG}/salon.webp`}
                alt="Salón del Gustoso con comensales almorzando"
                fill
                sizes="(min-width: 768px) 54vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5" delay={100}>
            <div className="h-full rounded-3xl border-4 p-6 md:p-8 flex flex-col justify-center" style={{ borderColor: C.rojo, backgroundColor: '#FFFDF7' }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
                Horario de almuerzo
              </p>
              <ul className={`${display.className} font-bold text-lg md:text-xl leading-relaxed`}>
                <li className="flex justify-between gap-3 py-2 border-b border-dashed" style={{ borderColor: C.line }}>
                  <span>Lunes a viernes</span>
                  <span>7:00 a 16:00</span>
                </li>
                <li className="flex justify-between gap-3 py-2 border-b border-dashed" style={{ borderColor: C.line }}>
                  <span>Sábado</span>
                  <span>7:00 a 13:00</span>
                </li>
                <li className="flex justify-between gap-3 py-2">
                  <span>Domingo</span>
                  <span style={{ color: C.rojo }}>Cerrado</span>
                </li>
              </ul>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-5`} style={{ color: C.muted }}>
                Horario publicado en su ficha de Google
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.amarillo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.carbon }}>
              Lo que dicen en Google
            </p>
            <div className="flex flex-wrap items-end gap-4 mb-10">
              <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5vw,3.4rem)] leading-[1.0] tracking-tight`} style={{ color: C.carbon }}>
                {BIZ.rating} estrellas
              </h2>
              <p className={`${mono.className} text-sm font-bold pb-1.5`} style={{ color: C.carbon }}>
                en {BIZ.ratingCount} opiniones
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.who} delay={i * 100}>
                <figure
                  className="h-full p-6 md:p-7 rounded-3xl border-4"
                  style={{ borderColor: C.carbon, backgroundColor: C.papel }}
                >
                  <Stars value={r.stars} color={C.rojo} className="w-4 h-4" />
                  <blockquote className="text-base md:text-lg leading-relaxed font-medium mt-4" style={{ color: C.carbon }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-4`} style={{ color: C.muted }}>
                    {r.who} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-7 text-xs uppercase tracking-[0.16em] font-bold underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.carbon, textDecorationColor: C.rojo }}
            >
              Ver su ficha en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Llegar: fachada + mapa ── */}
      <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-5 flex flex-col">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5vw,3.2rem)] leading-[1.0] tracking-tight mb-5`}>
              En Los Paltos, Maule
            </h2>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 mb-5" style={{ borderColor: C.carbon }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Entrada del Gustoso en Los Paltos con la decoración de su fachada"
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
            <address className="not-italic text-sm md:text-base leading-relaxed font-semibold" style={{ color: C.carbon }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}
              <br />
              <a href={`tel:+${BIZ.phone}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-3`} style={{ color: C.muted }}>
              {BIZ.hours}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} eg-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Pedir ahora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} eg-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.carbon, color: C.carbon }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={100}>
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-3xl border-4" style={{ borderColor: C.carbon }}>
              <LazyMap src={MAPS_EMBED} title="El Gustoso Maule en Google Maps" className="absolute inset-0 w-full h-full border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col items-center gap-3 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- logo real de la pared del local */}
          <img src={`${IMG}/logo.webp`} alt="El Gustoso" className="h-14 w-14 rounded-full object-cover border-2" style={{ borderColor: C.amarillo }} />
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.onCarbonSoft }}>
            {BIZ.name} · Comida casera · {BIZ.address}, {BIZ.city}
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="eg-btn text-sm font-bold px-6 py-2.5 rounded-full tap-44"
            style={{ backgroundColor: C.amarillo, color: C.carbon }}
          >
            Pedir por WhatsApp
          </a>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(245,235,215,0.45)' }}>
            Demo de Sitiazo para {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
