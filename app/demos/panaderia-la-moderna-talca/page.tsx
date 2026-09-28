import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, MAPS_EMBED, MAPS_URL, RESENAS, WA_LINK } from './content'

const IMG = '/demos/panaderia-la-moderna-talca'

const display = localFont({ src: '../../fonts/gloock/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

export const metadata: Metadata = demoMetadata({
  slug: 'panaderia-la-moderna-talca',
  title: 'Panadería La Moderna — La marraqueta que ganó el Maule, Av. Duao Talca',
  description:
    'Panadería y pastelería desde 1985 en Av. Duao 0108, Talca. Marraqueta, tortas, helados y menú del día. Lunes a sábado.',
  image: `${IMG}/marraqueta.webp`,
})

const C = {
  chocolate: '#2B1B10',
  chocolateSuave: '#3D2A1B',
  cobre: '#C06722',
  cobreClaro: '#E3A05B',
  crema: '#F6EDDC',
  papel: '#FFFBF2',
  line: 'rgba(43,27,16,0.16)',
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'La casa', href: '#casa' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const VITRINA = [
  {
    src: 'marraqueta.webp',
    tag: 'La de siempre',
    t: 'Marraqueta y pan amasado',
    d: 'La marraqueta que le ganó a otras 19 panaderías del Maule: crocante por fuera, suave por dentro.',
    alt: 'Marraquetas frescas de Panadería La Moderna con el sello del local',
  },
  {
    src: 'torta.webp',
    tag: 'Para celebrar',
    t: 'Tortas y kuchenes',
    d: 'Tortas de la casa para cumpleaños, once y postres de fin de semana.',
    alt: 'Torta de la casa de Panadería La Moderna',
  },
  {
    src: 'pasteles.webp',
    tag: 'Antojo dulce',
    t: 'Dulces y pasteles',
    d: 'Berlines, pastelitos y facturas para llevar junto al pan del día.',
    alt: 'Dulces y pasteles variados de Panadería La Moderna',
  },
  {
    src: 'helados.webp',
    tag: 'Cuando hace calor',
    t: 'Helados',
    d: 'Vitrina de helados junto a la cafetería, para el cono de la tarde.',
    alt: 'Vitrina de helados de distintos sabores en Panadería La Moderna',
  },
  {
    src: 'mesa.webp',
    tag: 'Al mediodía',
    t: 'Menú del día y sandwich',
    d: 'Almuerzos de la casa y sandwich en marraqueta recién hecha, en mesa o para llevar.',
    alt: 'Mesa con almuerzo del día y marraqueta en Panadería La Moderna',
  },
]

function Sello() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-28 md:h-28" aria-hidden="true" focusable="false">
      <defs>
        <path id="lm-arco" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill={C.cobre} />
      <circle cx="60" cy="60" r="50" fill="none" stroke={C.crema} strokeWidth="1.5" strokeDasharray="3 4" />
      <text fill={C.crema} fontSize="11.5" letterSpacing="2.5" style={{ fontFamily: 'monospace' }}>
        <textPath href="#lm-arco">★ MEJOR MARRAQUETA ★ MAULE</textPath>
      </text>
      <text x="60" y="72" textAnchor="middle" fill={C.crema} fontSize="26" fontWeight="700" style={{ fontFamily: 'serif' }}>
        2022
      </text>
    </svg>
  )
}

export default function LaModernaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.crema, color: C.chocolate }}>
      <BlitzNav
        name="La Moderna"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className}`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: 'rgba(246,237,220,0.94)', ink: C.chocolate, line: C.line, btnBg: C.cobre, btnInk: '#FFFFFF' }}
        ctaLabel="Pedir"
      />

      {/* HERO — letrero de la casa + tiras de fotos */}
      <section id="inicio" className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-16">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <Reveal>
            <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden" style={{ boxShadow: '0 8px 20px rgba(43,27,16,0.25)' }}>
              <Image src={`${IMG}/logo.webp`} alt="Sello de Panadería La Moderna" width={80} height={80} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={70}>
            <p className={`${mono.className} mt-4 text-xs uppercase tracking-[0.3em]`} style={{ color: C.cobre }}>
              Panadería y pastelería desde 1985 · Talca
            </p>
          </Reveal>
          <Reveal delay={130}>
            <h1 className={`${display.className} mt-4 text-[52px] leading-[0.95] md:text-[96px]`}>
              La marraqueta
              <br />
              que ganó el Maule
            </h1>
          </Reveal>
          <Reveal delay={190}>
            <div className="mt-5 inline-flex items-center gap-3">
              <Sello />
              <div className="text-left">
                <p className={`${mono.className} text-[11px] uppercase tracking-widest`} style={{ color: 'rgba(43,27,16,0.65)' }}>
                  Elegida entre 20 panaderías
                </p>
                <p className={`${mono.className} text-[11px] uppercase tracking-widest`} style={{ color: 'rgba(43,27,16,0.65)' }}>
                  de la región, año 2022
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Stars value={4.8} color={C.cobre} className="w-4 h-4" />
                  <span className={`${mono.className} text-xs`}>{BIZ.rating} · {BIZ.reviews} reseñas</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base font-semibold transition-transform active:scale-[0.97] tap-44"
                style={{ backgroundColor: C.cobre, color: '#FFFFFF' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#vitrina"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base font-semibold tap-44"
                style={{ color: C.chocolate, boxShadow: `inset 0 0 0 2px ${C.chocolate}` }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>

          {/* tira de tres fotos inclinadas */}
          <div className="mt-12 flex justify-center gap-3 md:gap-5">
            {[
              { src: 'marraqueta.webp', alt: 'Marraquetas recién salidas del horno', r: '-rotate-3' },
              { src: 'local.webp', alt: 'Interior de Panadería La Moderna con la vitrina de helados y el logo en el muro', r: 'rotate-1' },
              { src: 'torta.webp', alt: 'Torta de la casa de La Moderna', r: 'rotate-3' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={300 + i * 90}>
                <div className={`relative w-28 h-36 sm:w-40 sm:h-48 md:w-56 md:h-64 rounded-xl overflow-hidden ${f.r}`} style={{ boxShadow: '0 14px 32px rgba(43,27,16,0.22)', border: `4px solid ${C.papel}` }}>
                  <Image src={`${IMG}/${f.src}`} alt={f.alt} fill sizes="(min-width: 768px) 20vw, 30vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LA VITRINA — lista estilo pizarra de mostrador */}
      <section id="vitrina" className="py-16 md:py-24" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.cobre }}>La vitrina</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl leading-[0.98]`}>
              Lo que sale de acá <span className="italic" style={{ color: C.cobre }}>todos los días</span>
            </h2>
          </Reveal>

          <ul className="mt-10">
            {VITRINA.map((v, i) => (
              <Reveal key={v.src} delay={i * 50}>
                <li
                  className="grid grid-cols-[76px_1fr] md:grid-cols-[120px_1fr_auto] gap-4 md:gap-8 items-center py-5 border-t"
                  style={{ borderColor: C.line }}
                >
                  <div className="relative w-[76px] h-[76px] md:w-[120px] md:h-[120px] rounded-lg overflow-hidden shrink-0" style={{ boxShadow: '0 8px 18px rgba(43,27,16,0.18)' }}>
                    <Image src={`${IMG}/${v.src}`} alt={v.alt} fill sizes="(min-width: 768px) 120px, 76px" className="object-cover" />
                  </div>
                  <div>
                    <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-widest`} style={{ color: C.cobre }}>{v.tag}</p>
                    <h3 className={`${display.className} mt-1 text-2xl md:text-4xl leading-tight`}>{v.t}</h3>
                    <p className="mt-1 text-sm md:text-base leading-snug max-w-xl" style={{ color: 'rgba(43,27,16,0.72)' }}>{v.d}</p>
                  </div>
                  <span className={`${mono.className} hidden md:block text-4xl select-none`} style={{ color: 'rgba(43,27,16,0.22)' }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={80}>
            <p className={`${mono.className} mt-5 text-xs uppercase tracking-widest`} style={{ color: 'rgba(43,27,16,0.55)' }}>
              Fotos reales del local y de su sitio oficial
            </p>
          </Reveal>
        </div>
      </section>

      {/* LA CASA — sección chocolate con historia y reseñas */}
      <section id="casa" className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: C.chocolate }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <Reveal>
                <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.cobreClaro }}>La casa</p>
                <h2 className={`${display.className} mt-2 text-4xl md:text-6xl leading-[0.98]`} style={{ color: C.crema }}>
                  Olor a pan <br />desde 1985
                </h2>
                <p className="mt-5 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(246,237,220,0.82)' }}>
                  La Moderna es panadería de barrio de toda la vida: la de Av. Duao suma además
                  cafetería, heladería y menú del día. El pan se hornea acá mismo y la marraqueta
                  —la que salió mejor evaluada del Maule en 2022— se agota antes de la once.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base font-semibold transition-transform active:scale-[0.97] tap-44"
                    style={{ backgroundColor: C.cobre, color: '#FFFFFF' }}
                  >
                    Encargar por WhatsApp
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="relative mt-8 aspect-[16/10] rounded-xl overflow-hidden max-w-md" style={{ boxShadow: '0 16px 36px rgba(0,0,0,0.35)' }}>
                  <Image
                    src={`${IMG}/local.webp`}
                    alt="Vitrina de helados y mostrador de Panadería La Moderna con su logo en el muro amarillo"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal delay={80}>
                <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.cobreClaro }}>
                  Lo que dice la gente · {BIZ.rating}★ en {BIZ.reviews} reseñas de Google
                </p>
              </Reveal>
              <div className="mt-4 space-y-4">
                {RESENAS.map((r, i) => (
                  <Reveal key={r.autor} delay={120 + i * 80}>
                    <figure className="rounded-xl p-5" style={{ backgroundColor: C.chocolateSuave, border: '1px solid rgba(246,237,220,0.14)' }}>
                      <Stars value={r.estrellas} color={C.cobreClaro} className="w-4 h-4" />
                      <blockquote className="mt-3 text-base leading-snug" style={{ color: 'rgba(246,237,220,0.92)' }}>
                        “{r.texto}”
                      </blockquote>
                      <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-widest`} style={{ color: 'rgba(246,237,220,0.55)' }}>
                        {r.autor} · Google
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORARIO + UBICACIÓN — letrero enmarcado */}
      <section id="ubicacion" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.cobre }}>Cómo llegar</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl leading-[0.98]`}>
              Av. Duao <span style={{ color: C.cobre }}>0108</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(43,27,16,0.75)' }}>
              {BIZ.address}, {BIZ.city}. El local de la esquina con olor a pan recién hecho.
            </p>
            <div className="mt-7 rounded-xl overflow-hidden" style={{ border: `3px solid ${C.chocolate}`, backgroundColor: C.papel }}>
              <p className={`${mono.className} px-5 py-3 text-[11px] uppercase tracking-[0.25em]`} style={{ backgroundColor: C.chocolate, color: C.crema }}>
                Horario de atención
              </p>
              <ul>
                {HORARIO.map(([d, h], i) => (
                  <li key={d} className="flex items-baseline justify-between gap-4 px-5 py-3" style={{ borderTop: i === 0 ? 'none' : `1px dashed ${C.line}` }}>
                    <span className={`${display.className} text-lg md:text-xl`}>{d}</span>
                    <span className={`${mono.className} text-sm md:text-base`} style={{ color: h === 'Cerrado' ? C.cobre : 'rgba(43,27,16,0.8)' }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base font-semibold transition-transform active:scale-[0.97] tap-44"
                style={{ backgroundColor: C.chocolate, color: C.crema }}
              >
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: '0 18px 44px rgba(43,27,16,0.2)', border: `6px solid ${C.chocolate}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
            <div className="relative mt-4 aspect-[16/9] rounded-xl overflow-hidden" style={{ boxShadow: '0 12px 28px rgba(43,27,16,0.18)' }}>
              <Image
                src={`${IMG}/mesa.webp`}
                alt="Mesa del local con almuerzo, ensalada y marraqueta de la casa"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.cobre }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `radial-gradient(rgba(255,251,242,0.16) 1.5px, transparent 1.5px)`, backgroundSize: '22px 22px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[0.98]`} style={{ color: C.papel }}>
            El pan sale <span className="italic">todos los días</span>
          </h2>
          <p className="mt-4 text-lg font-medium" style={{ color: 'rgba(255,251,242,0.9)' }}>
            Encarga tortas, pregunta por el menú del día o reserva tu marraqueta.
          </p>
          <div className="mt-7">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-base font-semibold transition-transform active:scale-[0.97] tap-44"
              style={{ backgroundColor: C.chocolate, color: C.crema }}
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.chocolate, color: 'rgba(246,237,220,0.7)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl`} style={{ color: C.crema }}>{BIZ.name}</p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.horarioSemana}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
