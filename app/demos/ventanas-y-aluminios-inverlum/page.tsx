import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SiteNav, SiteFooter } from './chrome'
import { BIZ, IMG, SISTEMAS, FOTOS, REVIEWS, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  ink: '#0D1219',
  night: '#0A0E14',
  paper: '#F2F5F8',
  paperSoft: '#E6ECF1',
  blue: '#1663B0',
  blueBright: '#3E92DE',
  steel: '#5B6B7C',
  steelLight: '#9FB0C2',
  line: 'rgba(13,18,25,0.14)',
  lineDark: 'rgba(255,255,255,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ventanas-y-aluminios-inverlum',
  title: 'INVERLUM · Ventanas de aluminio, PVC y termopaneles en Talca',
  description:
    'Fábrica de ventanas de aluminio y PVC en Talca: termopaneles, muros cortina, shower door y mamparas. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const FAQS = [
  {
    q: '¿Fabrican las ventanas a medida?',
    a: 'Sí. Todo el catálogo — correderas, fijas, oscilobatientes, guillotina, proyectantes y pivotantes — se fabrica a medida en su planta. Envía las dimensiones aproximadas por WhatsApp y te orientan.',
  },
  {
    q: '¿Qué conviene más: aluminio o PVC?',
    a: 'Depende del proyecto: el aluminio es más delgado visualmente y resiste mejor grandes paños; el PVC con termopanel aísla mejor térmica y acústicamente. En el showroom puedes ver ambas líneas.',
  },
  {
    q: '¿Hacen solo ventanas?',
    a: 'No. También fabrican termopaneles, puertas, muros cortina para fachadas, shower door y mamparas de oficina.',
  },
  {
    q: '¿Dónde puedo ver los productos?',
    a: `En su local de 6 Oriente N° 068, Talca, de lunes a viernes. Para cotizar, escribe por WhatsApp.`,
  },
]

function Spec({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium`}
      style={{ color: light ? C.blueBright : C.blue }}
    >
      {children}
    </p>
  )
}

/** Rejilla de montantes tipo muro cortina sobre el hero. */
function Mullions() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="h-full max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-4 md:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`border-l ${i >= 4 ? 'hidden md:block' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.10)' }} />
        ))}
      </div>
    </div>
  )
}

export default function InverlumPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <SiteNav fontClass={display.className} />

      {/* ── Hero: fachada real con montantes de muro cortina ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt={FOTOS[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(10,14,20,0.55) 0%, rgba(10,14,20,0.35) 45%, rgba(10,14,20,0.92) 100%)' }}
          />
        </div>
        <Mullions />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-44 pb-12 md:pb-20">
          <Reveal>
            <Spec light>Ventanas de aluminio y PVC · {BIZ.city}</Spec>
            <h1
              className={`${display.className} font-medium uppercase leading-[0.98] tracking-[0.01em] text-[clamp(2.6rem,10vw,5.6rem)] mt-5 mb-6`}
              style={{ color: '#fff' }}
            >
              Ventanas que<br />
              se fabrican<br />
              <span style={{ color: C.blueBright }}>en Talca.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(234,241,248,0.85)' }}>
              INVERLUM fabrica estructuras de aluminio y PVC a medida:
              ventanas, termopaneles, muros cortina y mamparas. {BIZ.yearsLabel.charAt(0).toUpperCase() + BIZ.yearsLabel.slice(1)} de
              planta propia en 6 Oriente.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-wider font-medium text-sm px-7 py-3 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.blue, color: '#fff' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#productos"
                className={`${display.className} uppercase tracking-wider font-medium text-sm px-7 py-3 border tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#fff' }}
              >
                Ver productos
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="mt-12 md:mt-16 grid grid-cols-3 border-t"
              style={{ borderColor: C.lineDark, backgroundColor: 'rgba(10,14,20,0.35)', backdropFilter: 'blur(6px)' }}
            >
              <div className="px-4 py-4 md:px-6 md:py-5 border-r" style={{ borderColor: C.lineDark }}>
                <p className={`${display.className} text-2xl md:text-3xl font-medium`} style={{ color: '#fff' }}>18+</p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-1`} style={{ color: C.steelLight }}>años fabricando</p>
              </div>
              <div className="px-3 py-4 md:px-6 md:py-5 border-r" style={{ borderColor: C.lineDark }}>
                <p className={`${display.className} text-2xl md:text-3xl font-medium`} style={{ color: '#fff' }}>{BIZ.ratingLabel}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.08em] md:tracking-[0.18em] mt-1 inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 tap-44`}
                  style={{ color: C.steelLight }}
                >
                  <Stars value={BIZ.rating} color={C.blueBright} className="w-[11px] h-[11px] shrink-0" /> {BIZ.reviews} opiniones
                </a>
              </div>
              <div className="px-3 py-4 md:px-6 md:py-5">
                <p className={`${display.className} text-2xl md:text-3xl font-medium`} style={{ color: '#fff' }}>L–V</p>
                <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.08em] md:tracking-[0.18em] mt-1`} style={{ color: C.steelLight }}>8–13 / 15–19</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Sistemas: índice técnico numerado ── */}
      <section id="productos" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Catálogo de fabricación</Spec>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-8 md:mb-12">
              <h2 className={`${display.className} font-medium uppercase text-3xl md:text-5xl leading-[1.02]`}>
                Todo lo que sale<br />de la planta
              </h2>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.steel }}>
                Seis líneas de producto fabricadas a medida en Talca, del
                perfil a la instalación.
              </p>
            </div>
          </Reveal>
          <ul className="border-t" style={{ borderColor: C.line }}>
            {SISTEMAS.map((s, i) => (
              <Reveal key={s.n} delay={30}>
                <li className="grid grid-cols-[52px_1fr] md:grid-cols-[90px_1fr_1.2fr] items-baseline gap-3 md:gap-8 py-5 md:py-6 border-b" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-xs md:text-sm font-medium tracking-widest`} style={{ color: C.blue }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} font-medium uppercase text-lg md:text-2xl tracking-wide leading-snug`}>{s.n}</h3>
                  <p className="col-span-2 md:col-span-1 md:col-start-3 text-sm leading-relaxed" style={{ color: C.steel }}>{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Planta: mosaico de paños como muro cortina ── */}
      <section id="planta" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec light>Fotos reales de la planta</Spec>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-8 md:mb-12">
              <h2 className={`${display.className} font-medium uppercase text-3xl md:text-5xl leading-[1.02]`} style={{ color: '#fff' }}>
                Así se fabrica<br />tu ventana
              </h2>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.steelLight }}>
                Imágenes de la galería propia de INVERLUM: showroom, corte de
                perfiles y bodega de termopaneles.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]" style={{ backgroundColor: C.lineDark }}>
            {FOTOS.slice(1).map((f, i) => (
              <Reveal
                key={f.src}
                delay={i * 50}
                className={i === 0 || i === 5 ? 'col-span-2 row-span-2' : i === 7 ? 'md:col-span-2' : ''}
              >
                <figure className={`relative h-full ${i === 0 || i === 5 ? 'aspect-[4/3] md:aspect-auto md:min-h-[320px]' : 'aspect-[4/3]'}`} style={{ backgroundColor: '#141B25' }}>
                  <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 25vw, 50vw" loading="lazy" className="object-cover" />
                  <figcaption
                    className={`${mono.className} absolute bottom-0 left-0 text-[9px] md:text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5`}
                    style={{ backgroundColor: 'rgba(10,14,20,0.72)', color: '#DCE6F0' }}
                  >
                    {f.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Spec>Horario y dirección</Spec>
              <h2 className={`${display.className} font-medium uppercase text-3xl md:text-4xl leading-[1.05] mt-4 mb-6`}>
                El local está en 6 Oriente
              </h2>
              <dl className="border overflow-hidden mb-6" style={{ borderColor: C.line }}>
                {BIZ.hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-4 px-4 py-3 border-b last:border-b-0" style={{ borderColor: C.line, backgroundColor: '#fff' }}>
                    <dt className="text-sm font-semibold">{h.days}</dt>
                    <dd className={`${mono.className} text-xs text-right`} style={{ color: C.steel }}>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.steel }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-wider font-medium text-sm px-6 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.ink, color: '#fff' }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-wider font-medium text-sm px-6 py-3 border tap-44`}
                  style={{ borderColor: 'rgba(13,18,25,0.35)', color: C.ink }}
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="overflow-hidden border min-h-[300px] md:min-h-0 h-full" style={{ borderColor: C.line, backgroundColor: C.paperSoft }}>
                <LazyMap title={`Mapa: ${BIZ.name}, ${BIZ.address}`} src={MAPS_EMBED} className="w-full h-full min-h-[300px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Opiniones de Google</Spec>
            <div className="flex flex-wrap items-end justify-between gap-6 mt-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-medium uppercase text-3xl md:text-5xl leading-[1.02]`}>
                {BIZ.ratingLabel} de 5 estrellas
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.steel }}>
                {BIZ.reviews} opiniones en su ficha de Google: destacan la
                atención y el despacho de materiales.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {REVIEWS.map((r) => (
              <Reveal key={r.author}>
                <figure className="border p-5 md:p-6 h-full flex flex-col" style={{ backgroundColor: '#fff', borderColor: C.line }}>
                  <Stars value={5} color={C.blue} className="w-[14px] h-[14px]" />
                  <blockquote className="text-sm leading-relaxed mt-4 flex-1">“{r.text}”</blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-medium mt-4`} style={{ color: C.steel }}>
                    Reseña en Google · {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.blue, textDecorationColor: 'rgba(22,99,176,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Spec>Antes de cotizar</Spec>
            <h2 className={`${display.className} font-medium uppercase text-3xl md:text-5xl leading-tight mt-4 mb-8`}>
              Preguntas frecuentes
            </h2>
          </Reveal>
          <FaqList items={FAQS} colors={{ q: C.ink, a: C.steel, line: C.line, plusBg: C.paperSoft, plusInk: C.blue }} />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.blue }}>
        <div
          aria-hidden="true"
          className="h-1.5"
          style={{ background: `repeating-linear-gradient(90deg, ${C.blueBright} 0 56px, transparent 56px 64px)` }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Spec light>INVERLUM · 6 Oriente, Talca</Spec>
            <h2 className={`${display.className} font-medium uppercase text-[clamp(2rem,7vw,4.2rem)] leading-[1.02] mt-5 mb-6`} style={{ color: '#fff' }}>
              Cotiza tus ventanas hoy
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Envía las medidas o la idea por WhatsApp y te responde el
              mismo equipo que fabrica.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase tracking-wider font-medium text-sm px-8 py-3.5 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: '#fff', color: C.blue }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter fontClass={display.className} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
