import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la celosía del pasillo» — la foto real del pasillo
 * de macetas muestra una pared de celosía blanca en diagonal; la página
 * la repite como textura y bordes. Papel crema de galería, verde hoja
 * del follaje y coral de las gerberas que asoman en las macetas.
 * Estructura propia: recorrido por el pasillo, igual que se recorre el
 * vivero real.
 */
const C = {
  papel: '#F6F1E4',
  papelHi: '#FDFAF1',
  hoja: '#1E4A2C',
  hojaClaro: '#3E7A50',
  coral: '#D9573F',
  coralFuerte: '#B03824',
  tierra: '#8A5A3B',
  ink: '#22301F',
  muted: '#66705C',
  line: 'rgba(34,48,31,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jard-n-do-a-ignacia-1',
  title: 'Jardín Doña Ignacia | Centro de jardinería en Talca',
  description:
    'Vivero y centro de jardinería en Veintiocho Sur 361, Talca: plantas de interior y exterior, tierra e insumos, regalos envueltos. 4,6 en Google. Abierto todos los días.',
  image: `${IMG}/pasillo.webp`,
})

const NAV_LINKS = [
  { label: 'El pasillo', href: '#pasillo' },
  { label: 'Qué se llevan', href: '#plantas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const CELOSIA = `repeating-linear-gradient(45deg, transparent 0 10px, ${C.line} 10px 11.5px),repeating-linear-gradient(-45deg, transparent 0 10px, ${C.line} 10px 11.5px)`
const CELOSIA_CLARA = `repeating-linear-gradient(45deg, transparent 0 10px, rgba(246,241,228,0.16) 10px 11.5px),repeating-linear-gradient(-45deg, transparent 0 10px, rgba(246,241,228,0.16) 10px 11.5px)`

const PLANTAS = [
  { img: 'sansevieria.webp', nombre: 'Interior y follaje', nota: 'sansevierias, cunas de moisés y compañía', alt: 'Macetas de sansevierias en el vivero de Jardín Doña Ignacia' },
  { img: 'flores.webp', nombre: 'Flor de temporada', nota: 'color para el jardín y la entrada', alt: 'Sector de flores de temporada en macetas en el vivero' },
  { img: 'coniferas.webp', nombre: 'Coníferas y arbustos', nota: 'para cerco, patio y macetero grande', alt: 'Coníferas y arbustos de distinto porte en el vivero' },
  { img: 'regalo.webp', nombre: 'Regalo envuelto', nota: 'la dueña lo decora para llevarlo listo', alt: 'Planta envuelta en papel de regalo con tarjeta, lista para entregar' },
]

const PASILLO = [
  { img: 'pasillo.webp', alt: 'Pasillo de macetas del vivero con pared de celosía blanca y plantas a ambos lados' },
  { img: 'jardin.webp', alt: 'Rincón del jardín del vivero con molinetes de colores entre las plantas' },
  { img: 'galpon.webp', alt: 'Galpón de macetas del vivero visto desde la calle' },
  { img: 'entrada.webp', alt: 'Entrada del vivero con repisas llenas de macetas' },
]

const RESENAS = [
  { nombre: 'Mechita Rojas', texto: '“Buena atención por parte de su dueña, te orienta y te da información necesaria para la compra… Además decoró para regalo… ¡Súper!”', nota: 5 },
  { nombre: 'Andres Remolcoy', texto: '“Excelente lugar para comprar plantas y tierra de calidad. La atención es muy amable, un 7.”', nota: 5 },
  { nombre: 'Claudio Valdes', texto: '“Nos trataron muy bien, acepta cualquier pago y es muy buena la atención, fue muy amable con nosotros.”', nota: 5 },
]

function WhatsIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill={color} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.7 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .1 0 .6-.2 1.1Z" />
    </svg>
  )
}

/** Hoja simple para marcar los ítems del recorrido. */
function Hoja({ color = C.hojaClaro }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 mt-1 shrink-0" fill="none" stroke={color} strokeWidth="1.8" aria-hidden="true">
      <path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" />
      <path d="M4 20C9 14 14 9 20 4" />
    </svg>
  )
}

export default function JardinDonaIgnaciaPage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={<span>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Consultar"
        theme={{
          over: 'light',
          bar: 'rgba(246,241,228,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.hoja,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero: el pasillo de macetas ── */}
      <section id="inicio" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20" style={{ backgroundColor: C.papel, backgroundImage: CELOSIA, backgroundSize: '22px 22px' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center" style={{ backgroundColor: C.papel }}>
            <div style={{ backgroundColor: C.papel }} className="p-1">
              <Reveal>
                <p className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.26em] uppercase`} style={{ color: C.coralFuerte }}>
                  Centro de jardinería · Veintiocho Sur, Talca
                </p>
                <h1 className={`${display.className} leading-[1.02] text-[40px] md:text-[62px] mt-4`} style={{ color: C.ink }}>
                  Un pasillo <em style={{ color: C.hoja }}>lleno de plantas</em> en Veintiocho Sur
                </h1>
                <p className="text-[15px] md:text-lg leading-relaxed mt-5 max-w-md" style={{ color: C.muted }}>
                  Vivero de barrio a pasos del centro: macetas de interior y
                  exterior, flor de temporada, tierra e insumos — y la dueña
                  que te orienta antes de elegir.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-7">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-12 text-[15px] font-semibold tap-44 transition-transform active:scale-95"
                    style={{ backgroundColor: C.hoja, color: C.papel, borderRadius: '999px' }}
                  >
                    <WhatsIcon color={C.papel} /> Consultar por WhatsApp
                  </a>
                  <a
                    href="#plantas"
                    className="inline-flex items-center px-4 h-12 text-[15px] font-semibold tap-44"
                    style={{ color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: '999px' }}
                  >
                    Ver el vivero
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-7">
                  <span className="flex items-center gap-2">
                    <Stars value={BIZ.rating} color={C.coral} className="w-[18px] h-[18px]" />
                    <span className={`${mono.className} text-[11px] tracking-[0.12em]`} style={{ color: C.muted }}>
                      {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
                    </span>
                  </span>
                  <span className={`${mono.className} text-[11px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full`} style={{ color: C.hoja, border: `1.5px solid ${C.hoja}` }}>
                    todos los días 10–22
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative" style={{ backgroundColor: C.papel }}>
                <div className="relative overflow-hidden rounded-2xl" style={{ border: `1.5px solid ${C.hoja}` }}>
                  <Image
                    src={`${IMG}/pasillo.webp`}
                    alt="Pasillo de macetas del vivero Jardín Doña Ignacia, con celosía blanca y plantas a ambos lados"
                    width={1200}
                    height={900}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 left-5 px-4 py-2 rounded-full shadow-md" style={{ backgroundColor: C.coralFuerte }}>
                  <span className={`${mono.className} text-[10px] tracking-[0.16em] uppercase whitespace-nowrap`} style={{ color: C.papelHi }}>
                    abierto todos los días
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Qué se llevan: el recorrido del pasillo ── */}
      <section id="plantas" className="scroll-mt-20" style={{ backgroundColor: C.papelHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.26em] uppercase`} style={{ color: C.tierra }}>
              el recorrido del pasillo
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mt-4 max-w-2xl`} style={{ color: C.ink }}>
              Lo que la gente se lleva del vivero
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-relaxed" style={{ color: C.muted }}>
              fotos reales de la ficha de Google — las repisas tal cual están
              cuando llegas.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {PLANTAS.map((p, i) => (
              <Reveal key={p.img} delay={i * 70}>
                <figure className="m-0 h-full rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: C.papel, border: `1.5px solid ${C.line}` }}>
                  <div className="relative aspect-[4/5]">
                    <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <figcaption className="p-4 flex-1">
                    <span className={`${display.className} block text-lg md:text-xl leading-tight`} style={{ color: C.ink }}>
                      {p.nombre}
                    </span>
                    <span className="block text-[13px] mt-1.5 leading-snug" style={{ color: C.muted }}>
                      {p.nota}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <ul className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3">
              {[
                'Tierra e insumos de calidad, dicen las reseñas',
                'Aceptan cualquier medio de pago',
                'Envoltura de regalo para llevarla lista',
              ].map((li) => (
                <li key={li} className="flex items-start gap-2.5 text-[14px] leading-snug" style={{ color: C.ink }}>
                  <Hoja /> {li}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── El invernadero por dentro: franja de fotos ── */}
      <section id="pasillo" className="scroll-mt-20" style={{ backgroundColor: C.hoja, backgroundImage: CELOSIA_CLARA, backgroundSize: '22px 22px' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`} style={{ color: C.papel }}>
              La dueña te orienta <em>antes de que elijas</em>
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-relaxed" style={{ color: 'rgba(246,241,228,0.78)' }}>
              Las reseñas lo repiten: aquí no solo se compra una maceta — se
              sale con la planta correcta y las instrucciones para que viva.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PASILLO.map((p, i) => (
              <Reveal key={p.img} delay={i * 60} className={i % 2 === 1 ? 'md:translate-y-6' : ''}>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]" style={{ border: '1.5px solid rgba(246,241,228,0.3)' }}>
                  <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`} style={{ color: C.ink }}>
              4,6 de 75 vecinos del barrio
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-relaxed" style={{ color: C.muted }}>
              reseñas publicadas en Google Maps, con el nombre de quien las escribió.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <blockquote
                  className="h-full m-0 rounded-2xl p-6 flex flex-col justify-between"
                  style={{ backgroundColor: C.papelHi, border: `1.5px solid ${C.hoja}` }}
                >
                  <div>
                    <Stars value={r.nota} color={C.coral} className="w-4 h-4" />
                    <p className="text-[14px] md:text-[15px] leading-relaxed mt-4" style={{ color: C.ink }}>
                      {r.texto}
                    </p>
                  </div>
                  <footer className="flex items-center gap-2.5 mt-5">
                    <span className={`${mono.className} text-[11px] font-bold tracking-[0.1em] uppercase`} style={{ color: C.hoja }}>
                      {r.nombre}
                    </span>
                    <span className={`${mono.className} text-[10px] tracking-[0.1em] uppercase`} style={{ color: C.muted }}>
                      · Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.papel, backgroundImage: CELOSIA, backgroundSize: '22px 22px' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start rounded-3xl p-6 md:p-10" style={{ backgroundColor: C.papelHi, border: `1.5px solid ${C.hoja}` }}>
            <Reveal>
              <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.08]`} style={{ color: C.ink }}>
                Veintiocho Sur 361, Talca
              </h2>
              <p className="text-[15px] md:text-base mt-4 leading-relaxed" style={{ color: C.muted }}>
                En el sector sur poniente de la ciudad. Consulta por la planta
                que buscas o la tierra que necesitas antes de ir.
              </p>
              <div className="mt-6" style={{ borderTop: `1.5px solid ${C.line}` }}>
                <div className="flex items-baseline justify-between py-2.5" style={{ borderBottom: `1px solid ${C.line}` }}>
                  <span className={`${mono.className} text-[12px] tracking-[0.12em] uppercase`} style={{ color: C.ink }}>Todos los días</span>
                  <span className={`${mono.className} text-[12px] font-bold tracking-[0.08em]`} style={{ color: C.coralFuerte }}>10:00 - 22:00</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-12 text-[15px] font-semibold tap-44 transition-transform active:scale-95"
                  style={{ backgroundColor: C.hoja, color: C.papel, borderRadius: '999px' }}
                >
                  <WhatsIcon color={C.papel} /> Consultar
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 h-12 text-[15px] font-semibold tap-44"
                  style={{ color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: '999px' }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-xl overflow-hidden shadow-lg md:sticky md:top-24" style={{ border: `1.5px solid ${C.hoja}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                  className="w-full h-[300px] md:h-[380px] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.hoja }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <p className={`${display.className} text-xl`} style={{ color: C.papel }}>{BIZ.name}</p>
              <p className="text-sm mt-1 leading-snug" style={{ color: 'rgba(246,241,228,0.7)' }}>{BIZ.address} · {BIZ.region}</p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pie de página">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 font-semibold" style={{ color: C.papel }}>{l.label}</a>
              ))}
            </nav>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 font-semibold text-sm" style={{ color: C.papel }}>
              {BIZ.phoneDisplay}
            </a>
          </div>
          <p className={`${mono.className} text-[10px] tracking-wide mt-6 leading-relaxed`} style={{ color: 'rgba(246,241,228,0.75)' }}>
            Textos de muestra sobre datos reales: dirección, teléfono, horario,
            nota de Google, reseñas y fotos corresponden a la ficha pública de {BIZ.nameFicha}.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Consultar en ${BIZ.name}`} />
    </main>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.94)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.coral }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">Sitiazo</a>{' '}
          para {BIZ.name}: así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}
