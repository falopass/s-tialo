import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, PARA_ELLOS, GALERIA, VISITA, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el pit stop del primer corte». Su salón real ya
 * trae la idea: pared amarilla, bandera de carrera a cuadros y sillas
 * en forma de auto rojo. La página toma esa bandera como divisor, el
 * rojo del auto como único acento y Baloo redondeada de señalética
 * infantil. Fotos reales de su ficha de Google.
 */
const C = {
  cream: '#FFFCF2',
  sun: '#FFE9A8',
  ink: '#211D15',
  inkSoft: 'rgba(33,29,21,0.62)',
  red: '#DE3B2B',
  redSoft: 'rgba(222,59,43,0.1)',
  line: 'rgba(33,29,21,0.14)',
}

const CHECKER = `repeating-conic-gradient(${C.ink} 0% 25%, ${C.cream} 0% 50%)`

export const metadata: Metadata = demoMetadata({
  slug: 'style-kids',
  title: `${BIZ.name} · Peluquería infantil en Talca`,
  description:
    'Cortes de pelo para niños en Calle 9 Oriente de Talca: sillas-auto, dibujos, paciencia y dulce al final. 5,0 estrellas en más de 400 opiniones.',
  image: `${IMG}/hero.webp`,
})

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}, así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

function Checkered({ cells = 16 }: { cells?: number }) {
  return (
    <div
      className="h-[18px] w-full"
      style={{ backgroundImage: CHECKER, backgroundSize: '18px 18px' }}
      aria-hidden="true"
      role="presentation"
    />
  )
}

const ICONS: Record<string, React.ReactNode> = {
  car: (
    <>
      <path d="M4 15.5h16l-1.5-5.5a2 2 0 0 0-1.9-1.5H7.4a2 2 0 0 0-1.9 1.5L4 15.5Z" />
      <path d="M4 15.5v2.5h3v1.5a1.2 1.2 0 0 0 2.4 0V18h5.2v1.5a1.2 1.2 0 0 0 2.4 0V18h3v-2.5" />
      <path d="M8 8.5 9.5 5h5L16 8.5" />
    </>
  ),
  tv: (
    <>
      <rect x="3.5" y="5.5" width="17" height="12" rx="2" />
      <path d="M8 20.5h8 M12 17.5v3" />
      <path d="m10 9 4.5 3-4.5 3V9Z" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7.5-4.7-9-9a5 5 0 0 1 9-3.5A5 5 0 0 1 21 11c-1.5 4.3-9 9-9 9Z" />
    </>
  ),
  candy: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M8.8 9.4 5 5.5M8.8 14.6 5 18.5M15.2 9.4 19 5.5M15.2 14.6 19 18.5" />
      <path d="M5 5.5h3M5 18.5h3M16 5.5h3M16 18.5h3" />
    </>
  ),
}

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <span
      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
      style={{ backgroundColor: C.redSoft, color: C.red, border: `1.5px solid ${C.red}` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[name]}
      </svg>
    </span>
  )
}

const FEATURE_ICONS: (keyof typeof ICONS)[] = ['car', 'tv', 'heart', 'candy']

export default function StyleKidsPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={
          <span className={display.className} style={{ fontWeight: 800, letterSpacing: '0.01em' }}>
            Style <span style={{ color: C.red }}>Kids</span>
          </span>
        }
        links={[
          { label: 'El salón', href: '#salon' },
          { label: 'La visita', href: '#visita' },
          { label: 'Mamás y papás', href: '#opiniones' },
          { label: 'Horarios', href: '#horarios' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        theme={{ over: 'light', bar: 'rgba(255,252,242,0.95)', ink: C.ink, line: C.line, btnBg: C.red, btnInk: '#FFF8EE' }}
      />

      {/* Portada: el niño que sí quiso volver */}
      <header id="inicio" className="pt-28 pb-0 md:pt-32" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-9 md:gap-12 items-center pb-12 md:pb-16">
          <div className="md:col-span-6">
            <Reveal>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.red }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} mt-3 text-[40px] md:text-[58px] font-extrabold leading-[1.02]`}>
                El corte que tus hijos sí van a querer
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-4 max-w-md text-[15.5px] md:text-[17px] leading-relaxed" style={{ color: C.inkSoft }}>
                En la 9 Oriente de Talca, cortar el pelo es un paseo: sillas-auto, dibujos en pantalla y dulce al final.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center justify-center h-[50px] px-7 text-[15px] font-bold tracking-wide rounded-full active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFF8EE' }}
                >
                  Agendar por WhatsApp
                </a>
                <span className={`${mono.className} flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.inkSoft }}>
                  <Stars value={BIZ.rating} color={C.red} className="w-3.5 h-3.5" />
                  {BIZ.ratingLabel} · {BIZ.reviews} opiniones
                </span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal delay={140}>
              <div className="relative max-w-[460px] mx-auto">
                <div
                  className="absolute -top-3 -left-3 w-full h-full rounded-[26px]"
                  style={{ backgroundImage: CHECKER, backgroundSize: '22px 22px' }}
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[26px]" style={{ aspectRatio: '1/1', border: `3px solid ${C.ink}` }}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Niño feliz recién peinado en una silla-auto roja junto a su mamá y la estilista"
                    fill
                    priority
                    sizes="(max-width: 768px) 92vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 whitespace-nowrap"
                  style={{ backgroundColor: C.red, color: '#FFF8EE', border: `2.5px solid ${C.cream}` }}
                >
                  <span className={`${display.className} text-[14px] font-bold`}>
                    {BIZ.ratingLabel} ★ · {BIZ.reviews} familias opinaron
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <Checkered />
      </header>

      {/* El salón: todo pensado para ellos */}
      <section id="salon" className="py-14 md:py-20" style={{ backgroundColor: C.sun }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
                El salón
              </p>
              <h2 className={`${display.className} text-3xl md:text-[44px] font-extrabold leading-[1.05]`}>
                Un local hecho para que quieran sentarse
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PARA_ELLOS.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 70}>
                <div
                  className="flex items-start gap-4 rounded-2xl p-5 h-full"
                  style={{ backgroundColor: C.cream, border: `2px solid ${C.ink}` }}
                >
                  <Icon name={FEATURE_ICONS[i]} />
                  <div>
                    <h3 className={`${display.className} text-[19px] font-extrabold leading-tight`}>{p.nombre}</h3>
                    <p className="mt-1.5 text-[14px] leading-snug" style={{ color: C.inkSoft }}>
                      {p.detalle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Galería real */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALERIA.map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <div
                  className="relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: i % 2 === 0 ? '4/5' : '4/5', border: `2.5px solid ${C.ink}` }}
                >
                  <Image src={f.src} alt={f.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Checkered />

      {/* La visita: vuelta por vuelta */}
      <section id="visita" className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
                La visita
              </p>
              <h2 className={`${display.className} text-3xl md:text-[44px] font-extrabold leading-[1.05]`}>
                Tres vueltas y sale peinado
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            <div
              className="absolute left-[27px] md:left-1/2 top-2 bottom-2 w-[3px] rounded-full"
              style={{ backgroundImage: `repeating-linear-gradient(180deg, ${C.red} 0 10px, transparent 10px 20px)` }}
              aria-hidden="true"
            />
            <div className="space-y-8">
              {VISITA.map((v, i) => (
                <Reveal key={v.paso} delay={i * 100}>
                  <div className={`relative flex items-start gap-5 md:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div
                      className="relative z-10 w-[56px] h-[56px] rounded-full flex items-center justify-center shrink-0 md:mx-auto"
                      style={{ backgroundColor: C.red, border: `3px solid ${C.ink}`, color: '#FFF8EE' }}
                    >
                      <span className={`${display.className} text-[24px] font-extrabold leading-none`}>{v.paso}</span>
                    </div>
                    <div className={`flex-1 md:w-[calc(50%-3rem)] rounded-2xl p-5 ${i % 2 === 1 ? 'md:text-right' : ''}`} style={{ backgroundColor: C.sun, border: `2px solid ${C.ink}` }}>
                      <h3 className={`${display.className} text-[20px] font-extrabold`}>{v.nombre}</h3>
                      <p className="mt-1.5 text-[14px] leading-snug" style={{ color: C.inkSoft }}>
                        {v.detalle}
                      </p>
                    </div>
                    <div className="hidden md:block md:w-[calc(50%-3rem)]" aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opiniones: lo que dicen las mamás */}
      <section id="opiniones" className="py-14 md:py-20" style={{ backgroundColor: C.red, color: '#FFF8EE' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: 'rgba(255,248,238,0.75)' }}>
                Mamás y papás opinan
              </p>
              <h2 className={`${display.className} text-3xl md:text-[44px] font-extrabold leading-[1.05]`}>
                {BIZ.ratingLabel} de 5 en Google con {BIZ.reviews} opiniones
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <blockquote
                  className="rounded-2xl p-5 h-full"
                  style={{ backgroundColor: 'rgba(255,248,238,0.12)', border: '1.5px solid rgba(255,248,238,0.35)' }}
                >
                  <Stars value={5} color="#FFD84D" className="w-3.5 h-3.5" />
                  <p className="mt-3 text-[14.5px] leading-relaxed">“{r.texto}”</p>
                  <footer className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,248,238,0.75)' }}>
                    {r.nombre} · {r.hace}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios + mapa */}
      <section id="horarios" className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.red }}>
                Horarios y llegada
              </p>
              <h2 className={`${display.className} text-3xl md:text-[42px] font-extrabold leading-[1.05]`}>
                {BIZ.address}, a pasos del centro
              </h2>
              <div className="mt-6 rounded-2xl overflow-hidden" style={{ border: `2px solid ${C.ink}` }}>
                {HORARIO.map((h, i) => (
                  <div
                    key={h.dia}
                    className="flex items-center justify-between px-4 py-3"
                    style={{ backgroundColor: i % 2 === 0 ? C.sun : C.cream, borderTop: i === 0 ? undefined : `2px solid ${C.ink}` }}
                  >
                    <span className={`${display.className} text-[14px] font-bold`}>{h.dia}</span>
                    <span className={`${mono.className} text-[12px] tracking-[0.06em]`} style={{ color: C.inkSoft }}>{h.horas}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[14px] leading-relaxed" style={{ color: C.inkSoft }}>
                Atención con hora agendada por WhatsApp: así tu peque no espera y llega directo a su auto.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center justify-center h-[48px] px-6 text-[14.5px] font-bold rounded-full active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFF8EE' }}
                >
                  Agendar hora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center justify-center h-[48px] px-6 text-[14.5px] font-bold rounded-full tap-44`}
                  style={{ border: `2.5px solid ${C.red}`, color: C.red }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="p-1.5 rounded-2xl" style={{ border: `2.5px solid ${C.ink}`, backgroundColor: C.sun }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full min-h-[320px] h-full rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Checkered />

      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl font-extrabold leading-tight`}>
              Style <span style={{ color: '#FF7A6B' }}>Kids</span>
            </p>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1`} style={{ color: 'rgba(255,252,242,0.6)' }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <address className="not-italic text-xs leading-relaxed mt-3" style={{ color: 'rgba(255,252,242,0.75)' }}>
              {BIZ.address}, {BIZ.city} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
              {' · '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Facebook</a>
            </address>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(255,252,242,0.6)' }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} opiniones · domingo cerrado
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
