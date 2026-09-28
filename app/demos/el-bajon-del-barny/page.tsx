import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, MENU, HOURS, PROMO, SERVICES } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/**
 * Paleta del demo: carbón, crema de papel y amarillo neón — la identidad del
 * local es de letreros luminosos sobre fondo oscuro. El rojo solo marca
 * la promo y los datos de la ficha.
 */
const C = {
  coal: '#13100C',
  cream: '#F7F2E8',
  neon: '#FFD23F',
  red: '#E4572E',
  gray: '#57534E',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD23F]'
const BTN_WA = `inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD23F] text-[#13100C] font-bold transition-transform hover:-translate-y-0.5 active:scale-95 ${FOCUS}`
const BTN_LINE = `inline-flex items-center justify-center rounded-full border font-semibold transition-colors hover:bg-white/10 ${FOCUS}`
const TAG = 'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]'

export const metadata: Metadata = demoMetadata({
  slug: 'el-bajon-del-barny',
  title: 'El Bajón del Barny - Comida rápida en Talca',
  description:
    'El Bajón del Barny: completos, hamburguesas y salchipapas en 2 Norte 3275, Talca. Todos los días desde las 12:00. Pide por WhatsApp +56 9 5778 0418.',
  image: '/demos/el-bajon-del-barny/hero.webp',
})

export default function ElBajonDelBarnyPage() {
  return (
    <div className={`${body.className} bg-[#F7F2E8] text-[#13100C] antialiased`}>
      {/* ── Hero a sangre: fachada con letreros al anochecer ── */}
      <header id="inicio" className="relative min-h-[100svh] overflow-hidden bg-[#13100C]">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada de El Bajón del Barny al anochecer, con letreros luminosos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${C.coal}99 0%, ${C.coal}44 45%, ${C.coal}f2 100%)` }}
        />
        <SiteNav fontClass={display.className} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-[24svh] pb-14">
          <p className={`${TAG} border border-white/30 text-white`} style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
            {BIZ.rubro} · {BIZ.city}
          </p>
          <h1 className={`${display.className} mt-6 max-w-[14ch] text-white text-[2.8rem] leading-[1.02] sm:text-6xl md:text-8xl uppercase`}>
            El bajón se pasa <span style={{ color: C.neon }}>aquí</span>.
          </h1>
          <p className="mt-6 max-w-[34rem] text-base md:text-lg leading-relaxed" style={{ color: 'rgba(247,242,232,0.82)' }}>
            Completos mojados, hamburguesas a la plancha y salchipapas en {BIZ.address}.
            {` ${BIZ.hours}.`}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${BTN_WA} px-7 py-3 text-base`}>
              Pedir por WhatsApp
            </a>
            <a href="#carta" className={`${BTN_LINE} px-7 py-3 text-base text-white`} style={{ borderColor: 'rgba(247,242,232,0.4)' }}>
              Ver la carta
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-[34rem] divide-x divide-white/20 border-y border-white/20 text-white">
            <div className="py-4 pr-4">
              <dt className="text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(247,242,232,0.75)' }}>Google Maps</dt>
              <dd className={`${display.className} mt-1 text-2xl`}>{BIZ.rating} <span className="text-sm">★ · {BIZ.reviews}</span></dd>
            </div>
            <div className="py-4 px-4">
              <dt className="text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(247,242,232,0.75)' }}>Precio</dt>
              <dd className={`${display.className} mt-1 text-lg md:text-xl leading-tight`}>$5–10 mil</dd>
            </div>
            <div className="py-4 pl-4">
              <dt className="text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(247,242,232,0.75)' }}>Abre</dt>
              <dd className={`${display.className} mt-1 text-lg md:text-xl leading-tight`}>12:00</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ── La carta en tarjetas apiladas ── */}
      <section id="carta" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-24 md:pt-32">
        <Reveal className="max-w-[44rem]">
          <p className={`${TAG} bg-[#13100C] text-[#F7F2E8]`}>La carta · fotos reales del local</p>
          <h2 className={`${display.className} mt-5 text-3xl md:text-6xl uppercase leading-[1.02]`}>
            De la plancha <span style={{ color: C.red }}>a la mesa</span>.
          </h2>
        </Reveal>

        <ol className="mt-14 pb-24">
          {MENU.map((m, i) => (
            <li
              key={m.n}
              className="sticky mb-8 md:mb-14"
              style={{ top: `calc(1.25rem + ${i * 1.4}rem)`, zIndex: i + 1 }}
            >
              <article
                className="grid md:grid-cols-[1.15fr_1fr] overflow-hidden rounded-[2rem] min-h-[55svh] md:min-h-[28rem] shadow-[0_-12px_40px_-18px_rgba(19,16,12,0.55)]"
                style={{
                  backgroundColor: i % 2 ? C.coal : '#FFFFFF',
                  color: i % 2 ? C.cream : C.coal,
                }}
              >
                <div className="relative min-h-[15rem] md:min-h-full">
                  <Image src={`${IMG}/${m.img}`} alt={m.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
                  <span className={`${display.className} absolute top-5 left-5 rounded-full text-xs px-3 py-1.5`} style={{ backgroundColor: C.neon, color: C.coal }}>
                    {m.n} / 0{MENU.length}
                  </span>
                </div>
                <div className="p-7 md:p-12 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className={`${TAG}`} style={{ backgroundColor: i % 2 ? 'rgba(247,242,232,0.14)' : 'rgba(19,16,12,0.08)', color: i % 2 ? C.cream : C.coal }}>
                      {m.tag}
                    </span>
                  </div>
                  <h3 className={`${display.className} mt-5 text-2xl md:text-4xl uppercase leading-tight`}>{m.title}</h3>
                  <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: i % 2 ? 'rgba(247,242,232,0.78)' : C.gray }}>{m.desc}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Promo + horario ── */}
      <section id="promo" className="bg-[#13100C] text-[#F7F2E8]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image
                src={`${IMG}/${PROMO.img}`}
                alt={PROMO.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${TAG} text-[#13100C] self-start`} style={{ backgroundColor: C.neon }}>Promo del local</p>
            <h2 className={`${display.className} mt-5 text-4xl md:text-6xl uppercase leading-[1.02]`}>
              {PROMO.title} <span style={{ color: C.neon }}>{PROMO.price}</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(247,242,232,0.75)' }}>
              Promoción publicada por el local. Consulta las promos vigentes directo por WhatsApp.
            </p>

            <div id="horario" className="mt-10 rounded-[1.5rem] border p-6" style={{ borderColor: 'rgba(247,242,232,0.18)' }}>
              <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: 'rgba(247,242,232,0.7)' }}>Horario (Google Maps)</p>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.d} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm" style={{ color: 'rgba(247,242,232,0.75)' }}>{h.d}</span>
                    <span className={`${display.className} text-base md:text-lg`}>{h.h}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 pt-4 flex flex-wrap gap-2 border-t" style={{ borderColor: 'rgba(247,242,232,0.14)' }}>
                {SERVICES.map((s) => (
                  <li key={s} className={`${TAG} border`} style={{ borderColor: 'rgba(247,242,232,0.25)', color: 'rgba(247,242,232,0.85)' }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="bg-[#FFD23F] text-[#13100C]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-[1fr_1.1fr] gap-12 items-stretch">
          <Reveal className="flex flex-col">
            <p className={`${TAG} bg-[#13100C] text-[#F7F2E8] self-start`}>Contacto</p>
            <h2 className={`${display.className} mt-5 text-4xl md:text-6xl uppercase leading-[1.02]`}>
              Pide y retira, o te lo llevamos.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(19,16,12,0.78)' }}>
              Escribe por WhatsApp con tu pedido. En el local, retiro en el borde del local
              y delivery sin contacto.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_WA} mt-9 px-8 py-3 text-base self-start`}
              style={{ backgroundColor: '#13100C', color: '#F7F2E8' }}
            >
              WhatsApp {BIZ.phoneDisplay}
            </a>
            <address className="not-italic mt-auto pt-12 leading-relaxed" style={{ color: 'rgba(19,16,12,0.85)' }}>
              <span className="block text-[11px] uppercase tracking-[0.16em] mb-2" style={{ color: 'rgba(19,16,12,0.7)' }}>Dirección</span>
              {BIZ.address}
              <br />
              {BIZ.postal} {BIZ.city}, {BIZ.region}
              <br />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`inline-block mt-3 font-semibold underline underline-offset-4 rounded-sm ${FOCUS}`}>
                Cómo llegar en Google Maps
              </a>
            </address>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-[2rem] border-2 border-[#13100C]">
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[22rem] border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#13100C] text-[#F7F2E8]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-8 pb-24">
          <p className={`${display.className} text-lg uppercase`}>{BIZ.name}</p>
          <address className="not-italic mt-2 text-sm leading-relaxed" style={{ color: 'rgba(247,242,232,0.8)' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
          </address>
          <p className="mt-4 text-xs leading-relaxed" style={{ color: 'rgba(247,242,232,0.65)' }}>
            Datos de contacto, horario, reseñas y fotos reales (Google Maps); textos descriptivos de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WhatsAppFab />
    </div>
  )
}
