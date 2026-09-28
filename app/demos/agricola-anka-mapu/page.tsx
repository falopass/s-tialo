import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, PARADAS, RESENAS, VISITAS, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

/**
 * El recorrido de la granja: la página baja como una huella que une las
 * paradas de una visita real — huerto, animales, pradera, cosecha y feria.
 * Paleta de tierra: bosque profundo, crema de saco y teja encendida.
 */
const C = {
  crema: '#F4EFE2',
  cremaDeep: '#E9E1CC',
  bosque: '#1E3D2F',
  bosqueDeep: '#142A20',
  teja: '#B44B22',
  tejaInk: '#8E3E1E',
  muted: '#55614F',
  line: 'rgba(30,61,47,0.2)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B44B22]'

/** Huella de sendero punteada que baja por la página. */
function Sendero() {
  return (
    <div
      className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
      style={{
        backgroundImage: 'repeating-linear-gradient(180deg, transparent 0px, transparent 10px, rgba(30,61,47,0.35) 10px, rgba(30,61,47,0.35) 18px)',
        width: '2px',
      }}
      aria-hidden="true"
    />
  )
}

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.28em] mb-5" style={{ color: light ? '#E9C9A9' : C.tejaInk }}>
      <span className="inline-block w-8 h-[2px]" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Señal de parada, como el rótulo de madera del huerto. */
function Senal({ n, stop, light = false }: { n: string; stop: string; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <span
        className={`${display.className} inline-flex items-center justify-center w-11 h-11 rounded-full text-base font-bold border-2`}
        style={{
          borderColor: light ? C.crema : C.bosque,
          backgroundColor: light ? 'transparent' : C.bosque,
          color: C.crema,
        }}
        aria-hidden="true"
      >
        {n}
      </span>
      <span className="text-[11px] font-extrabold uppercase tracking-[0.26em]" style={{ color: light ? '#E9C9A9' : C.tejaInk }}>
        Parada · {stop}
      </span>
    </div>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'agricola-anka-mapu',
  title: 'Agrícola Anka Mapu — Granja orgánica para visitar en San Clemente',
  description:
    'Granja orgánica en Camino a Santa María, San Clemente. Huerto, animales de granja, mermeladas y helados de la cosecha. 4,6 de 5 en 83 reseñas reales.',
  image: `${IMG}/alpacas.webp`,
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'Visitas', href: '#visitas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

export default function AgricolaAnkaMapuPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.crema, color: C.bosque }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={<span className={display.className}>Anka Mapu</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,239,226,0.96)',
          ink: C.bosque,
          line: C.line,
          btnBg: C.teja,
          btnInk: '#FFF8EC',
        }}
      />

      {/* ── Portada: la pradera a sangre ── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end" style={{ backgroundColor: C.bosqueDeep }}>
        <Image
          src={`${IMG}/alpacas.webp`}
          alt="Alpacas y ovejas pastando en la pradera verde de la granja orgánica Anka Mapu"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,42,32,0.45) 0%, rgba(20,42,32,0.15) 40%, rgba(20,42,32,0.82) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-40 w-full">
          <Reveal>
            <Label light>Granja orgánica · San Clemente, Maule</Label>
            <h1 className={`${display.className} text-[clamp(2.2rem,6.5vw,4rem)] leading-[1.06] font-bold mb-5 max-w-3xl`} style={{ color: '#FFF8EC' }}>
              Una granja viva para recorrer
              <br />
              <em className="font-medium" style={{ color: '#F2C9A0' }}>con los niños, a pie de huerto</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(255,248,236,0.85)' }}>
              Anka Mapu cultiva en agroecología desde 2012 entre Talca y San
              Clemente, y abre sus corrales, su huerto y su cocina a familias,
              colegios y grupos.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-extrabold px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.teja, color: '#FFF8EC', boxShadow: `5px 5px 0 ${C.bosqueDeep}` }}
              >
                Coordinar una visita
              </a>
              <a
                href="#recorrido"
                className={`text-sm font-extrabold px-7 py-3.5 border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: '#FFF8EC', color: '#FFF8EC' }}
              >
                Ver el recorrido
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 text-sm font-bold ${focusRing} tap-44`}
              style={{ color: '#FFF8EC' }}
            >
              <Stars value={BIZ.rating} color="#F2C9A0" className="w-4 h-4" />
              {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
              <span aria-hidden="true" style={{ color: '#F2C9A0' }}>→</span>
            </a>
          </Reveal>
          {/* Franja de horarios al pie de la portada */}
          <Reveal delay={160}>
            <div className="mt-10 grid grid-cols-3 max-w-2xl border-t pt-5 gap-4" style={{ borderColor: 'rgba(255,248,236,0.3)' }}>
              {[
                ['Lun–Vie', '8:00 – 16:00'],
                ['Sáb–Dom', '16:00 – 18:30'],
                ['Parcela 46', 'Camino a Santa María'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-1" style={{ color: '#F2C9A0' }}>{k}</p>
                  <p className="text-sm font-bold leading-snug" style={{ color: '#FFF8EC' }}>{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El recorrido: paradas unidas por la huella ── */}
      <section id="recorrido" className="scroll-mt-20 relative" style={{ backgroundColor: C.crema }}>
        <Sendero />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>El recorrido</Label>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.04] font-bold mb-4`}>
              Cinco paradas
              <br />
              <span style={{ color: C.tejaInk }}>de parcela a cocina</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-14 md:mb-20" style={{ color: C.muted }}>
              Así se ve un día en la granja, con fotos reales de su ficha de
              Google — cada parada es un tramo del paseo.
            </p>
          </Reveal>
          <div className="space-y-14 md:space-y-0">
            {PARADAS.map((p, i) => {
              const right = i % 2 === 1
              return (
                <Reveal key={p.n} delay={60}>
                  <article
                    className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center md:py-10 ${right ? '' : ''}`}
                  >
                    {/* punto de la huella */}
                    <span
                      className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px]"
                      style={{ backgroundColor: C.crema, borderColor: C.teja }}
                      aria-hidden="true"
                    />
                    <div className={right ? 'md:order-2' : ''}>
                      <Senal n={p.n} stop={p.stop} />
                      <h3 className={`${display.className} text-2xl md:text-[2rem] leading-tight font-bold mb-3`}>
                        {p.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                    <div className={right ? 'md:order-1' : ''}>
                      <div
                        className="relative aspect-[4/3] overflow-hidden"
                        style={{
                          border: `2px solid ${C.bosque}`,
                          boxShadow: `${right ? '-10px' : '10px'} 10px 0 ${C.cremaDeep}`,
                        }}
                      >
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(min-width: 768px) 44vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Las visitas ── */}
      <section id="visitas" className="scroll-mt-20" style={{ backgroundColor: C.bosque, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <Label light>Para grupos y familias</Label>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-bold mb-6`}>
                Un paseo de colegio
                <br />
                <span style={{ color: '#F2C9A0' }}>que se repite en las reseñas</span>
              </h2>
              <ul className="space-y-3.5 mb-9 max-w-md">
                {VISITAS.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-sm md:text-base font-semibold">
                    <span className="mt-[7px] w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: '#F2C9A0' }} aria-hidden="true" />
                    {v}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-sm font-extrabold px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.teja, color: '#FFF8EC', boxShadow: `4px 4px 0 ${C.bosqueDeep}` }}
              >
                Agendar para un grupo
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ border: `2px solid ${C.crema}`, boxShadow: `10px 10px 0 ${C.bosqueDeep}` }}>
                  <Image
                    src={`${IMG}/visita.webp`}
                    alt="Grupo de niños y profesores recorriendo la granja Anka Mapu entre patos y corrales"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`${display.className} absolute -bottom-4 left-5 text-xs font-bold tracking-[0.16em] uppercase px-4 py-2.5`}
                  style={{ backgroundColor: C.teja, color: '#FFF8EC' }}
                >
                  Visita guiada real · foto de la ficha
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Reseñas</Label>
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-14 items-start mb-12">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-bold`}>
                “Un día fenomenal
                <br />
                <span style={{ color: C.tejaInk }}>en familia”</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md lg:justify-self-end" style={{ color: C.muted }}>
                {BIZ.ratingLabel} de 5 en {BIZ.reviews} reseñas de la ficha de
                Google. Estas son algunas, con el nombre de quienes las
                escribieron.
              </p>
            </div>
          </Reveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure className="break-inside-avoid p-6 border-2" style={{ backgroundColor: '#FBF7EB', borderColor: C.bosque, boxShadow: `6px 6px 0 ${C.cremaDeep}` }}>
                  <Stars value={5} color={C.teja} className="w-[14px] h-[14px] mb-4" />
                  <blockquote className={`${display.className} text-[15px] md:text-base leading-relaxed mb-4`}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="text-[10px] uppercase tracking-[0.2em] font-extrabold" style={{ color: C.muted }}>
                    {r.author} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20 border-t-2" style={{ borderColor: C.bosque, backgroundColor: C.cremaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Cómo llegar</Label>
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
              <div>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-bold mb-6`}>
                  Camino a Santa María,
                  <br />
                  <span style={{ color: C.tejaInk }}>parcela 46</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                  La granja queda en el camino entre Talca y San Clemente.
                  Coordinar la visita antes por WhatsApp es la mejor forma de
                  asegurar el recorrido.
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 text-sm">
                  {[
                    ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                    ['Lun–Vie', '8:00 – 16:00'],
                    ['Sáb–Dom', '16:00 – 18:30'],
                    ['WhatsApp', BIZ.phoneDisplay],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t-2 pt-3" style={{ borderColor: C.bosque }}>
                      <dt className="text-[10px] uppercase tracking-[0.2em] font-extrabold mb-1" style={{ color: C.tejaInk }}>{k}</dt>
                      <dd className="font-bold leading-snug">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-sm font-extrabold px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.bosque, color: C.crema, boxShadow: `4px 4px 0 ${C.teja}` }}
                >
                  Coordinar visita
                </a>
              </div>
              <div className="overflow-hidden border-2 min-h-[360px]" style={{ borderColor: C.bosque }}>
                <LazyMap
                  title={`Mapa: ${BIZ.full}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.bosqueDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-lg leading-tight font-bold`}>{BIZ.full}</p>
            <address className="not-italic text-xs" style={{ color: 'rgba(244,239,226,0.7)' }}>
              {BIZ.address} · {BIZ.city}, Maule · {BIZ.phoneDisplay}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(244,239,226,0.7)' }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p
          className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed border-t"
          style={{ color: 'rgba(244,239,226,0.7)', borderColor: 'rgba(244,239,226,0.14)' }}
        >
          Sitio de ejemplo preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#F2C9A0' }}>
            Sitiazo
          </a>{' '}
          para {BIZ.full}. Dirección, teléfono, horarios, nota, reseñas y todas
          las fotos son datos reales de su ficha de Google y de su presencia
          pública en línea.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#F2C9A0' }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
