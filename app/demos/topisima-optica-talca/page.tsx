import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «la cartilla optométrica» — la lámina de letras
 * descendentes del test de la vista, deletreando TOPISIMA, más el
 * púrpura y el magenta de su letrero de la 6 Oriente. Fraunces hace de
 * vitrina de boutique; Space Grotesk y Space Mono llevan la ficha técnica.
 */
const C = {
  paper: '#FAF7F3',
  ink: '#231726',
  magenta: '#B01C8A',
  purple: '#4A1D5E',
  purpleDeep: '#2E1239',
  bone: '#F2EBE4',
  muted: '#6E5E73',
  line: 'rgba(35,23,38,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'topisima-optica-talca',
  title: 'Topísima Óptica — armazones y lentes de sol en plena 6 Oriente, Talca',
  description:
    'Topísima Óptica en 6 Oriente 1035, Talca: armazones, lentes de sol y entrega rápida, con nota 4.9 en más de 260 reseñas. Cotiza por WhatsApp.',
  image: '/demos/topisima-optica-talca/muro.webp',
})

const NAV_LINKS = [
  { label: 'Armazones', href: '#armazones' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const ARMAZONES = [
  { src: 'lentes-01', alt: 'Par de armazones carey con una orquídea, vitrina de Topísima', n: '01' },
  { src: 'lentes-03', alt: 'Armazón negro sobre el mostrador de vidrio de la óptica', n: '02' },
  { src: 'lentes-02', alt: 'Armazón azul junto a sus lentes de sol a juego', n: '03' },
  { src: 'lentes-04', alt: 'Repisa de lentes de sol y armazón negro en primer plano', n: '04' },
  { src: 'estuche', alt: 'Estuche rosado de gatito sosteniéndose en la mano', n: '05' },
]

const RESENAS = [
  {
    quote: 'Perfecta entrega y muy buena disposición a responder preguntas. Atención de lujo y a muy buen precio.',
    who: 'Alex Cabezas Ayala · reseña de Google',
  },
  {
    quote: 'Llegó súper rápido y muy buena atención.',
    who: 'Erika Andrea Pozo Herrera · reseña de Google',
  },
  {
    quote: 'Excelente atención. Muy amable el joven que atiende.',
    who: 'Valentina Ignacia Cerda Campos · reseña de Google',
  },
]

// La lámina de letras de la sala: deletrea el nombre, baja de tamaño.
const CARTILLA: { letra: string; px: string }[] = [
  { letra: 'T', px: 'text-[clamp(3rem,11vw,5.5rem)]' },
  { letra: 'O P', px: 'text-[clamp(2.3rem,8.5vw,4rem)]' },
  { letra: 'I S I', px: 'text-[clamp(1.8rem,6.5vw,3rem)]' },
  { letra: 'M A', px: 'text-[clamp(1.4rem,5vw,2.2rem)]' },
  { letra: '2 0 / 2 0', px: 'text-[clamp(1.05rem,3.8vw,1.5rem)]' },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-7 py-2.5 rounded-full font-semibold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44"
      style={{ backgroundColor: C.magenta, color: '#fff' }}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

export default function TopisimaOpticaPage() {
  return (
    <div className={`${body.className} min-h-[100dvh] antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(250,247,243,0.96)', ink: C.ink, line: C.line, btnBg: C.magenta, btnInk: '#fff' }}
      />

      {/* ── Hero: la vitrina de la 6 Oriente ─────────────── */}
      <section id="inicio" className="pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-end pb-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-12 h-14 rounded-full overflow-hidden bg-white border" style={{ borderColor: C.line }}>
                  <Image src={`${IMG}/logo.webp`} alt="Ícono del letrero de Topísima Óptica" width={96} height={120} className="w-full h-full object-cover" priority />
                </span>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] text-balance`} style={{ color: C.magenta }}>
                  Óptica · {BIZ.address.split(',')[0]} · {BIZ.city}
                </p>
              </div>
              <h1 className={`${display.className} font-black leading-[0.98] text-[clamp(2.6rem,9vw,5rem)]`}>
                Los lentes que
                <br />
                se ven de lejos
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Armazones y lentes de sol en plena 6 Oriente. El favorito de sus clientes: entregas rápidas y atención de boutique.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <WaButton>Cotizar por WhatsApp</WaButton>
                <p className={`${mono.className} self-center text-sm font-bold`}>
                  ★ {BIZ.googleRating.toLocaleString('es-CL')} · {BIZ.googleReviews} reseñas
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <figure className="relative aspect-[4/5] rounded-2xl overflow-hidden" style={{ backgroundColor: C.bone }}>
                <Image
                  src={`${IMG}/muro.webp`}
                  alt="Muro de exhibición con decenas de armazones en el local de Topísima"
                  fill
                  priority
                  sizes="(min-width:768px) 45vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La cartilla: la lámina de letras de la sala ──── */}
      <section aria-label="La lámina de letras de Topísima" style={{ backgroundColor: C.purpleDeep }}>
        <div className="max-w-5xl mx-auto px-5 py-14 md:py-20 text-center">
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-10`} style={{ color: 'rgba(250,247,243,0.55)' }}>
            Agudeza visual · nivel boutique
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4" style={{ color: '#F5EDF2' }}>
            {CARTILLA.map((row) => (
              <Reveal key={row.letra}>
                <p className={`${display.className} font-black leading-none tracking-[0.28em] ${row.px}`} aria-hidden="true">
                  {row.letra}
                </p>
              </Reveal>
            ))}
          </div>
          <p className={`${mono.className} mt-10 text-xs`} style={{ color: 'rgba(250,247,243,0.55)' }}>
            Leíste hasta la última línea. Te espera el muro completo de armazones.
          </p>
        </div>
      </section>

      {/* ── Armazones: fichas de la vitrina ──────────────── */}
      <section id="armazones" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-10">
            <h2 className={`${display.className} font-black text-4xl md:text-6xl leading-[0.98]`}>
              De la vitrina,
              <br />
              tal cual
            </h2>
            <p className={`${mono.className} text-xs max-w-xs md:text-right leading-relaxed`} style={{ color: C.muted }}>
              Fotos reales del local y sus modelos. La selección completa cambia cada semana en la 6 Oriente.
            </p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-5">
            {ARMAZONES.map((a, i) => (
              <li key={a.src} className={i === 0 ? 'col-span-2 md:col-span-3 md:row-span-2' : 'md:col-span-3 lg:col-span-1'}>
                <Reveal delay={i * 60} className="h-full">
                  <figure className="h-full flex flex-col">
                    <div className={`relative overflow-hidden rounded-xl flex-1 ${i === 0 ? 'aspect-[4/5]' : 'aspect-square'}`} style={{ backgroundColor: C.bone }}>
                      <Image
                        src={`${IMG}/${a.src}.webp`}
                        alt={a.alt}
                        fill
                        sizes={i === 0 ? '(min-width:768px) 50vw, 100vw' : '(min-width:768px) 25vw, 50vw'}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <figcaption className={`${mono.className} mt-2 flex items-baseline gap-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                      <span style={{ color: C.magenta }}>N°{a.n}</span> vitrina
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La ficha: lo que pides al llegar ─────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[0.98] mb-6`}>
              Lo que pides
              <br />
              al llegar
            </h2>
            <p className="text-base leading-relaxed max-w-sm mb-7" style={{ color: C.muted }}>
              El mostrador de la 6 Oriente 1035, local del centro: armazones, sol y detalles que enamoran, como el estuche de gatito de su vitrina.
            </p>
            <figure className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={`${IMG}/mostrador.webp`}
                alt="Mostrador de la óptica con estuches y etiquetas de precio"
                fill
                sizes="(min-width:768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y" style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
              {[
                ['Armazones de receta', 'Monturas para tu medida: acetato, metal y las marcas de su pared.'],
                ['Lentes de sol', 'Pares listos para llevar, con modelos a juego de la vitrina.'],
                ['Estuches y accesorios', 'Los detalles: el estuche de gatito rosado que ya es clásico.'],
                ['Entrega rápida', '«Llegó súper rápido», repite la gente en las reseñas.'],
              ].map(([t, d], i) => (
                <li key={t} className="py-5 flex gap-5 items-baseline" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-sm font-bold`} style={{ color: C.magenta }}>
                    0{i + 1}
                  </span>
                  <div>
                    <p className={`${display.className} text-xl md:text-2xl font-bold`}>{t}</p>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>
                      {d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ─────────────────────────────────────── */}
      <section id="resenas" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.purple, color: '#F5EDF2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-10">
            <h2 className={`${display.className} font-black text-4xl md:text-6xl leading-[0.98]`}>
              4.9 de 5,
              <br />
              dicho por 266
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-xs underline underline-offset-4 tap-44`}>
              Leerlas todas en Google
            </a>
          </div>
          <ul className="grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <li key={r.who}>
                <Reveal delay={i * 80} className="h-full">
                  <blockquote className="h-full rounded-xl p-6 flex flex-col" style={{ backgroundColor: 'rgba(250,247,243,0.08)' }}>
                    <p className={`${display.className} italic text-lg leading-snug flex-1`}>«{r.quote}»</p>
                    <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.15em]`} style={{ color: 'rgba(245,237,242,0.65)' }}>
                      ★★★★★ {r.who}
                    </footer>
                  </blockquote>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Ubicación y la fachada ───────────────────────── */}
      <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[0.98] mb-6`}>
              En plena 6 Oriente
            </h2>
            <p className="text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              <strong className="text-[#231726]">{BIZ.address}</strong>, {BIZ.city}.
            </p>
            <ul className={`${mono.className} text-sm space-y-1.5 mt-5 mb-7`}>
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex justify-between max-w-xs gap-6" style={{ color: C.muted }}>
                  <span>{h.dia}</span>
                  <span className="text-[#231726] font-bold">{h.hora}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <WaButton>Agendar visita</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 rounded-full font-semibold text-[15px] border transition-colors hover:bg-[#231726] hover:text-[#FAF7F3] tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir ruta en Maps
              </a>
            </div>
            <figure className="mt-8 relative aspect-[3/4] max-w-[280px] rounded-xl overflow-hidden">
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada de Topísima Óptica con su letrero en la 6 Oriente"
                fill
                sizes="280px"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border-2 min-h-[300px] h-full" style={{ borderColor: C.ink, backgroundColor: C.bone }}>
              <LazyMap
                title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.purpleDeep, color: '#F5EDF2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} font-black text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,237,242,0.6)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(245,237,242,0.6)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F5EDF2' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F5EDF2' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
