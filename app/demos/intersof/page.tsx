import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORAS, VITRINA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
  variable: '--font-display',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-mono',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})

/** Paleta sacada de la vitrina morada de 9 Oriente y del logo (azul + magenta). */
const C = {
  plum: '#2E0A54',
  violet: '#5B21B6',
  magenta: '#D63384',
  cyan: '#38BDF8',
  paper: '#F8F6FC',
  ink: '#1E1530',
  muted: '#665B7A',
  line: 'rgba(46,10,84,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'intersof',
  title: 'Intersof — Tienda de informática y soporte técnico en Talca',
  description:
    'Tienda de informática en 9 Oriente 1367, Talca. Computación, tecnología y videovigilancia, con soporte técnico en el mostrador. 4.5 estrellas en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El mostrador', href: '#mostrador' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function IntersofPage() {
  return (
    <div
      className={`${body.variable} ${display.variable} ${mono.variable}`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body), system-ui, sans-serif' }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} font-bold text-xl tracking-tight`}>
            Inter<span style={{ color: C.cyan }}>S</span>
            <span style={{ color: C.magenta }}>o</span>f
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        theme={{ over: 'dark', bar: C.plum, ink: '#fff', line: 'rgba(255,255,255,0.14)', btnBg: C.magenta, btnInk: '#fff' }}
      />

      {/* ── La vitrina: fachada + promesa ── */}
      <header style={{ backgroundColor: C.plum }} className="relative overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-1/3 opacity-30 pointer-events-none"
          style={{ background: `radial-gradient(60% 80% at 70% 30%, ${C.magenta} 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.26em] uppercase mb-5`} style={{ color: C.cyan }}>
              Tienda de informática · {BIZ.address} · {BIZ.city}
            </p>
            <h1 className={`${display.className} font-bold text-white leading-[1.02] text-[clamp(2.4rem,8vw,4.6rem)] tracking-tight`}>
              La tecnología se prueba<br />
              <span style={{ color: C.magenta }}>en el mostrador.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Computación, redes y videovigilancia con atención de tienda: lo ves,
              lo preguntas y te lo llevas resuelto. {BIZ.tagline}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-base px-7 py-3.5 rounded-md tap-44 transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ backgroundColor: C.magenta, color: '#fff' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} font-bold text-base px-7 py-3.5 rounded-md border-2 tap-44 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
              >
                Ver la vitrina
              </a>
            </div>
          </div>
          <Reveal delay={120}>
            <figure className="rounded-xl overflow-hidden border-4 shadow-2xl" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt={`Vitrina morada de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                width={640}
                height={600}
                className="w-full h-auto"
                priority
              />
            </figure>
            <figcaption className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mt-2.5 text-right`} style={{ color: 'rgba(255,255,255,0.6)' }}>
              La vitrina, {BIZ.address}
            </figcaption>
          </Reveal>
        </div>
      </header>

      {/* ── Anaquel de productos ── */}
      <section id="vitrina" className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-4">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className={`${display.className} font-bold text-[clamp(1.9rem,5.5vw,3.2rem)] leading-none tracking-tight`} style={{ color: C.plum }}>
              En el anaquel
            </h2>
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
              Fotos de su tienda en línea · {BIZ.web}
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {VITRINA.map((p, i) => (
            <Reveal key={p.src} delay={i * 60} className={i === 0 ? 'col-span-2' : ''}>
              <figure className="group">
                <div className="bg-white rounded-lg border p-4 flex items-center justify-center aspect-[4/3]" style={{ borderColor: C.line }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={600}
                    height={450}
                    className="max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-b-[6px] pb-2 pt-2.5" style={{ borderColor: i % 2 === 0 ? C.magenta : C.cyan }}>
                  <p className={`${display.className} font-bold text-base md:text-lg leading-tight`} style={{ color: C.ink }}>{p.name}</p>
                  <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-0.5`} style={{ color: C.muted }}>{p.cat}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={80} className="col-span-2 md:col-span-1">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full min-h-[140px] rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-2 text-center p-4 tap-44 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderColor: C.magenta, outlineColor: C.magenta }}
            >
              <span className={`${display.className} font-bold text-lg leading-tight`} style={{ color: C.plum }}>
                ¿No está en el anaquel?
              </span>
              <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase underline underline-offset-4`} style={{ color: C.magenta }}>
                Preguntar por WhatsApp
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El mostrador: soporte + horarios ── */}
      <section id="mostrador" style={{ backgroundColor: C.plum }} className="mt-16 md:mt-20 text-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1.3fr_1fr] gap-10">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(1.9rem,5.5vw,3.2rem)] leading-tight tracking-tight`}>
              El mostrador también<br />es servicio técnico
            </h2>
            <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Sus clientes llevan notebooks e impresoras a reparar y vuelven:
              es lo que dicen las reseñas, no lo decimos nosotros. Venta en
              tienda, soporte y videovigilancia para hogares y empresas del Maule.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-base px-6 py-3 rounded-md tap-44 transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ backgroundColor: C.magenta, color: '#fff' }}
              >
                WhatsApp {BIZ.whatsappDisplay}
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-bold text-base px-6 py-3 rounded-md border-2 tap-44 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border bg-white/5 p-6" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
              <p className={`${mono.className} text-[11px] tracking-[0.22em] uppercase mb-4`} style={{ color: C.cyan }}>
                Horario de tienda
              </p>
              <ul className="space-y-3">
                {HORAS.map((h) => (
                  <li key={h.days} className="flex items-baseline justify-between gap-4 border-b pb-3 last:border-0 last:pb-0" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                    <span className="text-sm font-semibold">{h.days}</span>
                    <span className={`${mono.className} text-xs text-right`} style={{ color: 'rgba(255,255,255,0.75)' }}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} text-[10px] tracking-[0.14em] uppercase mt-5 leading-relaxed`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                Horario publicado en {BIZ.web} · {BIZ.address} {BIZ.addressHint}, {BIZ.city}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <h2 className={`${display.className} font-bold text-[clamp(1.9rem,5.5vw,3.2rem)] leading-none tracking-tight`} style={{ color: C.plum }}>
              Palabra de clientes
            </h2>
            <span className="flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: C.line }}>
              <Stars value={BIZ.rating} color={C.magenta} className="w-4 h-4" />
              <span className={`${mono.className} text-[11px] tracking-[0.16em] uppercase`} style={{ color: C.muted }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </span>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} delay={i * 100}>
              <blockquote className="h-full bg-white rounded-xl border p-6" style={{ borderColor: C.line }}>
                <Stars value={r.stars} color={C.magenta} className="w-4 h-4" />
                <p className="text-base md:text-lg leading-relaxed mt-4" style={{ color: C.ink }}>
                  “{r.text}”
                </p>
                <footer className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mt-4`} style={{ color: C.muted }}>
                  {r.author} · Google
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" style={{ backgroundColor: '#1D0737' }} className="text-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(1.9rem,5.5vw,3.2rem)] leading-tight tracking-tight`}>
              Pasa por la tienda<br />o escribe primero
            </h2>
            <div className="mt-6 space-y-2.5 text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
              <p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:text-white tap-44" style={{ textDecorationColor: C.magenta }}>
                  WhatsApp {BIZ.whatsappDisplay}
                </a>
                {' · '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 hover:text-white tap-44" style={{ textDecorationColor: C.cyan }}>
                  {BIZ.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${BIZ.email}`} className="underline underline-offset-4 hover:text-white tap-44" style={{ textDecorationColor: C.cyan }}>
                  {BIZ.email}
                </a>
                {' · '}{BIZ.web}
              </p>
              <p>{BIZ.address} {BIZ.addressHint}, {BIZ.city} — en Maps aparece como «{BIZ.legal}».</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-base px-6 py-3 rounded-md border-2 tap-44 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden border-2 min-h-[320px] h-full" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.legal}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: '#150527' }} className="text-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24 md:pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold text-2xl tracking-tight`}>
              Inter<span style={{ color: C.cyan }}>S</span><span style={{ color: C.magenta }}>o</span>f
            </p>
            <address className="not-italic text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {BIZ.address}, {BIZ.city} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <p className={`${mono.className} text-[11px] leading-relaxed md:max-w-[26rem]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
            Demo de muestra de Sitiazo: datos y fotos de intersof.cl y su ficha pública de Google; textos de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
